import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/hubspot";

type Payload = {
  company: string;
  contact_name: string;
  work_email: string;
  role?: string | null;
  sponsor_tier?: string | null;
  budget_range?: string | null;
  message?: string | null;
  source?: string | null;
};

function isValidEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export const Route = createFileRoute("/api/crm/sponsor-sync")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
        if (!LOVABLE_API_KEY || !HUBSPOT_API_KEY) {
          return Response.json(
            { error: "CRM not configured" },
            { status: 500 },
          );
        }

        let body: Payload;
        try {
          body = (await request.json()) as Payload;
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        if (
          !body?.company ||
          !body?.contact_name ||
          !body?.work_email ||
          !isValidEmail(body.work_email) ||
          body.company.length > 200 ||
          body.contact_name.length > 200 ||
          body.work_email.length > 320
        ) {
          return Response.json({ error: "Invalid payload" }, { status: 400 });
        }

        const [firstname, ...rest] = body.contact_name.trim().split(/\s+/);
        const lastname = rest.join(" ") || "—";

        const properties: Record<string, string> = {
          email: body.work_email,
          firstname,
          lastname,
          company: body.company,
          lifecyclestage: "lead",
          hs_lead_status: "NEW",
        };
        if (body.role) properties.jobtitle = body.role;
        if (body.message) properties.message = body.message;

        const headers = {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": HUBSPOT_API_KEY,
          "Content-Type": "application/json",
        };

        // Upsert via search → create or update
        const searchRes = await fetch(
          `${GATEWAY_URL}/crm/v3/objects/contacts/search`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({
              filterGroups: [
                {
                  filters: [
                    {
                      propertyName: "email",
                      operator: "EQ",
                      value: body.work_email,
                    },
                  ],
                },
              ],
              properties: ["email"],
              limit: 1,
            }),
          },
        );

        const searchData = await searchRes.json().catch(() => ({}) as any);
        if (!searchRes.ok) {
          return Response.json(
            {
              error: `HubSpot search failed [${searchRes.status}]`,
              details: searchData,
            },
            { status: 502 },
          );
        }

        const existingId: string | undefined = searchData?.results?.[0]?.id;
        let contactRes: Response;
        if (existingId) {
          contactRes = await fetch(
            `${GATEWAY_URL}/crm/v3/objects/contacts/${existingId}`,
            {
              method: "PATCH",
              headers,
              body: JSON.stringify({ properties }),
            },
          );
        } else {
          contactRes = await fetch(`${GATEWAY_URL}/crm/v3/objects/contacts`, {
            method: "POST",
            headers,
            body: JSON.stringify({ properties }),
          });
        }

        const contactData = await contactRes.json().catch(() => ({}) as any);
        if (!contactRes.ok) {
          return Response.json(
            {
              error: `HubSpot upsert failed [${contactRes.status}]`,
              details: contactData,
            },
            { status: 502 },
          );
        }

        // Add a note with sponsorship intent details
        const noteLines = [
          `ADORZIA Sponsorship Deck Request`,
          `Company: ${body.company}`,
          `Contact: ${body.contact_name} <${body.work_email}>`,
          body.role ? `Role: ${body.role}` : null,
          body.sponsor_tier ? `Tier: ${body.sponsor_tier}` : null,
          body.budget_range ? `Budget: ${body.budget_range}` : null,
          body.source ? `Source: ${body.source}` : null,
          body.message ? `\nMessage:\n${body.message}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        const contactId: string = contactData?.id ?? existingId;
        if (contactId) {
          await fetch(`${GATEWAY_URL}/crm/v3/objects/notes`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              properties: {
                hs_note_body: noteLines,
                hs_timestamp: Date.now().toString(),
              },
              associations: [
                {
                  to: { id: contactId },
                  types: [
                    {
                      associationCategory: "HUBSPOT_DEFINED",
                      associationTypeId: 202,
                    },
                  ],
                },
              ],
            }),
          }).catch(() => {});
        }

        return Response.json({ ok: true, contactId });
      },
    },
  },
});
