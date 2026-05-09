import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-runway.jpg";
import winner1 from "@/assets/winner-1.jpg";
import winner2 from "@/assets/winner-2.jpg";
import winner3 from "@/assets/winner-3.jpg";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  component: Landing,
});

const PARTNERS = [
  "HUM STYLE",
  "GUL AHMED",
  "SAPPHIRE",
  "KHAADI",
  "MASOOD TEXTILE",
  "PFDC",
  "DAWN IMAGES",
  "GENERATION",
];

const STEPS = [
  { n: "01", t: "Submit 3 looks", d: "Upload your strongest work — sketches, samples, or shot looks. No full collection required." },
  { n: "02", t: "Public vote + jury score", d: "A panel of Pakistani designers and 100k+ followers shortlist the top 30." },
  { n: "03", t: "Live finale, Karachi", d: "Walk the runway in front of buyers, press, and the mentors who will shape your career." },
  { n: "04", t: "Production run", d: "Winner gets capital, fabric, and shelf space. Not just a trophy." },
];

const PRIZES = [
  ["PKR 25 Lakh", "in non-dilutive cash. No equity, no strings."],
  ["PKR 5 Lakh fabric grant", "From sponsoring mills — Gul Ahmed, Sapphire & Masood."],
  ["12-month mentorship", "1:1 with a PFDC-recognized designer."],
  ["Marketplace launch", "Featured drop on ADORZIA. Keep 70% of every sale."],
  ["Lahore + Dubai trade trip", "All-expenses sourcing trip + buyer introductions."],
  ["Editorial coverage", "Profile in HUM Style, Dawn Images & Diva Magazine."],
];

const WINNERS = [
  { img: winner1, name: "Maria Chen", year: "Demo Cohort", now: "Featured Designer", quote: "It got my portfolio in front of the right people. Three weeks later I had two stockists." },
  { img: winner2, name: "Daniel Okafor", year: "Demo Cohort", now: "Founder, Studio Drop", quote: "I came in with three samples sewn at home. I left with a production line." },
  { img: winner3, name: "Lou Renard", year: "Demo Cohort", now: "Knitwear Designer", quote: "The mentorship is the prize. The cash just paid for the studio." },
];

const DATES = [
  ["Early entry deadline", "Mar 14, 2026", "PKR 5,000 — saves you 60%"],
  ["Final entry deadline", "Apr 30, 2026", "PKR 12,500 standard"],
  ["Semi-finalists announced", "May 22, 2026", "Top 30 published"],
  ["Live finale", "Sep 11, 2026", "Karachi — Mohatta Palace lawns"],
];

const FAQ = [
  ["Do I need a full collection?", "No. Three to five looks is enough. We're hunting for vision, not volume."],
  ["Who owns my designs?", "You do — 100%. We take a non-exclusive license only to promote the competition."],
  ["Can designers from any city in Pakistan apply?", "Yes — Karachi, Lahore, Islamabad, Peshawar, Quetta, Multan, anywhere. Finalists receive a travel + accommodation stipend for the Karachi finale."],
  ["What if I don't win?", "Every semi-finalist gets a written portfolio review and access to the sponsor directory."],
  ["What's the entry fee for?", "Jury time, production of the finale show, and the prize pool. Need-based fee waivers available — ask."],
  ["Is there an age limit?", "No, but our community skews 20–30. Self-taught and NCA / IVS / Indus Valley grads equally welcome."],
];

function Landing() {
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold tracking-[0.18em] text-lg">
            ADORZIA<span className="text-neon">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#prize" className="hover:text-foreground transition">Prize</a>
            <a href="#winners" className="hover:text-foreground transition">Designers</a>
            <a href="#sponsors" className="hover:text-foreground transition">Sponsors</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <a href="#apply" className="btn-neon" data-hover="No excuses">Apply</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 min-h-screen flex flex-col">
        <div className="absolute inset-0 grain">
          <img
            src={heroImg}
            alt="Silhouetted model walking a high-fashion runway"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>

        <div className="relative flex-1 flex items-end">
          <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-16 lg:pb-24">
            <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
              S/S 26 — Pakistan's first national fashion competition · Applications open
            </div>

            <h1 className="font-display font-bold uppercase tracking-[-0.02em] leading-[0.88] text-balance text-[clamp(2.75rem,9vw,9rem)] max-w-[16ch]">
              Stop interning. <br />
              <span className="font-serif lowercase italic font-light text-muted-foreground">start</span> Competing.
            </h1>

            <p className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">3 rounds. 10 finalists. 1 winner.</span><br />
              The first-ever Pakistan national-level fashion competition for emerging designers — judged by industry veterans, PFDC members, and the buying directors of the country's biggest retailers. Walk away with PKR 25 Lakh and a year of mentorship.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#apply" className="btn-neon" data-hover="Yes, I'm ready">
                Apply Now — Early bird ends Mar 14
              </a>
              <a href="#prize" className="btn-ghost">See the prize ↓</a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-border pt-6">
              <Stat n="PKR 25L" l="Cash prize" />
              <Stat n="10" l="Finalists / season" />
              <Stat n="1st" l="National-level in PK" />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="flex items-center gap-4 px-6 lg:px-10 mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
          <span className="h-px flex-1 bg-border" />
          In partnership with
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee flex gap-16 whitespace-nowrap text-2xl lg:text-3xl font-display font-medium text-muted-foreground">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i} className="hover:text-foreground transition">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section id="how" eyebrow="Format" title={<>Four rounds.<br /><span className="font-serif italic font-light">One breakout.</span></>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-8 lg:p-10 group hover:bg-secondary transition">
              <div className="font-mono text-xs text-neon mb-12">→ STEP {s.n}</div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold uppercase tracking-tight mb-3">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRIZE PACKAGE */}
      <Section id="prize" eyebrow="The Prize" title={<>This isn't a trophy. <br /><span className="font-serif italic font-light text-muted-foreground">It's a launch budget.</span></>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-16">
          {PRIZES.map(([h, d]) => (
            <div key={h} className="bg-background p-8 lg:p-10 border-l-2 border-l-transparent hover:border-l-neon transition">
              <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-3">{h}</div>
              <p className="text-muted-foreground text-sm">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl font-serif text-2xl lg:text-3xl leading-snug text-balance">
          “We don't take equity. We take pride in seeing your name on a label two years from now.”
          <span className="block mt-3 text-sm font-display not-italic uppercase tracking-[0.2em] text-muted-foreground">— Founder's note, ADORZIA</span>
        </p>
      </Section>

      {/* WINNERS */}
      <Section id="winners" eyebrow="The class of S/S 26" title={<>Where our designers <br /><span className="font-serif italic font-light">are headed.</span></>}>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {WINNERS.map((w) => (
            <article key={w.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted mb-5 relative">
                <img
                  src={w.img}
                  alt={`Portrait of ${w.name}`}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-neon text-neon-foreground px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                  {w.year}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-tight">{w.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{w.now}</p>
              <p className="font-serif text-lg leading-snug mt-4 text-balance">"{w.quote}"</p>
            </article>
          ))}
        </div>
      </Section>

      {/* DATES */}
      <Section id="dates" eyebrow="Calendar" title={<>Key dates. <span className="font-serif italic font-light">Don't miss them.</span></>}>
        <div className="mt-16 border-t border-border">
          {DATES.map(([t, d, sub], i) => (
            <div key={t} className="grid grid-cols-12 gap-4 py-6 lg:py-8 border-b border-border items-center hover:bg-secondary/40 transition">
              <div className="col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</div>
              <div className="col-span-11 md:col-span-5 font-display text-xl lg:text-3xl uppercase tracking-tight font-medium">{t}</div>
              <div className="col-span-6 md:col-span-3 font-mono text-sm lg:text-base text-neon">{d}</div>
              <div className="col-span-6 md:col-span-3 text-xs lg:text-sm text-muted-foreground text-right md:text-left">{sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#apply" className="btn-neon" data-hover="Lock your spot">Apply before March 14</a>
        </div>
      </Section>

      {/* SPONSORS */}
      <section id="sponsors" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-neon font-mono mb-4">For Brands & Mills</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.95] text-balance">
              Own the next generation of Pakistani talent <span className="font-serif italic font-light">before their agent does.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <ul className="space-y-5 text-base lg:text-lg">
              {[
                "First look at 100+ vetted emerging Pakistani designers.",
                "Branded challenge integration — your fabric, their collection.",
                "Quarterly trend report on what Gen Z in PK is actually making.",
                "Casting access for in-house and freelance hires.",
              ].map((b) => (
                <li key={b} className="flex gap-4 border-b border-border pb-5">
                  <span className="text-neon font-mono text-sm shrink-0">✦</span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <button onClick={() => setSponsorOpen(true)} className="btn-neon" data-hover="Get the deck">
                Request sponsorship deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-4">Apply · S/S 26</div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.9] text-balance">
              Four fields. <br /><span className="font-serif italic font-light">One career.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Submit your portfolio link now. Pay the entry fee only after you're shortlisted to round two.
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Demo: application submitted."); }}
            className="lg:col-span-7 space-y-6"
          >
            <Field label="Your name" name="name" placeholder="Ayesha Khan" />
            <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
            <Field label="Portfolio / Instagram link" name="portfolio" placeholder="https://" />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {["Womenswear", "Menswear", "Bridal & Couture", "Accessories"].map((c) => (
                  <label key={c} className="cursor-pointer">
                    <input type="radio" name="category" className="peer sr-only" defaultChecked={c === "Womenswear"} />
                    <div className="border border-border peer-checked:border-neon peer-checked:text-neon px-4 py-3 text-center text-sm uppercase tracking-wider font-display transition hover:border-foreground">
                      {c}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-neon w-full md:w-auto" data-hover="See you in Karachi">
              Submit application →
            </button>
            <p className="text-xs text-muted-foreground font-mono">By applying you agree to our entry terms. You retain 100% IP.</p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title={<>Questions, <span className="font-serif italic font-light">answered.</span></>}>
        <div className="mt-16 border-t border-border">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-b border-border py-6 lg:py-8 cursor-pointer">
              <summary className="flex justify-between items-start gap-6 list-none">
                <span className="font-display text-lg lg:text-2xl uppercase tracking-tight font-medium pr-4">{q}</span>
                <span className="text-neon font-mono text-2xl shrink-0 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed font-serif text-lg not-italic">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-32 lg:py-48 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-neon font-mono mb-8">— Final call —</div>
          <h2 className="font-display font-bold uppercase tracking-[-0.02em] leading-[0.85] text-balance text-[clamp(2.75rem,10vw,10rem)] max-w-[14ch] mx-auto">
            Your breakout is <br /><span className="font-serif italic font-light text-muted-foreground">three clicks</span> away.
          </h2>
          <p className="mt-10 text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Pakistan's first ever national-level fashion competition. Early bird closes <span className="text-neon">March 14</span>.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a href="#apply" className="btn-neon" data-hover="No excuses">
              Pay entry fee + upload portfolio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground font-mono">
          <div>
            ADORZIA<span className="text-neon">.</span> · Karachi × Lahore × Islamabad
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">TikTok</a>
            <a href="#" className="hover:text-foreground">Press</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <div>© 2026 ADORZIA — All rights reserved</div>
        </div>
      </footer>

      {sponsorOpen && <SponsorModal onClose={() => setSponsorOpen(false)} />}
    </main>
  );
}

function SponsorModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") || "").trim(),
      contact_name: String(fd.get("contact_name") || "").trim(),
      work_email: String(fd.get("work_email") || "").trim(),
      role: String(fd.get("role") || "").trim() || null,
      sponsor_tier: String(fd.get("sponsor_tier") || "").trim() || null,
      budget_range: String(fd.get("budget_range") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
      source: "landing_page",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
    };

    const { error } = await supabase.from("sponsor_requests").insert(payload);
    if (error) {
      setStatus("error");
      setErrorMsg(error.message || "Something went wrong. Please try again.");
      return;
    }

    // Fire-and-forget CRM sync; CRM failure must not block UX
    void fetch("/api/crm/sponsor-sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    setStatus("success");
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-background border border-border shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-muted-foreground hover:text-neon font-mono text-2xl leading-none z-10"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="p-10 lg:p-14 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-neon font-mono mb-6">— Confirmed —</div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">
              Deck en route.
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Check your inbox in the next few minutes. The ADORZIA sponsorship deck (PDF) will land from <span className="text-foreground">partnerships@adorzia.pk</span>. If it doesn't arrive, check spam — or reply to confirm.
            </p>
            <button onClick={onClose} className="btn-neon" data-hover="Back to site">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 lg:p-12">
            <div className="text-xs uppercase tracking-[0.2em] text-neon font-mono mb-3">— Sponsorship deck</div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-3 leading-tight">
              Tell us who you are. <br /><span className="font-serif italic font-light text-muted-foreground">We'll send the deck.</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              Tier breakdowns (PKR 5L → 50L), audience demographics, brand integration formats, and the S/S 26 media plan.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <ModalField label="Company" name="company" required placeholder="e.g. Sapphire" />
              <ModalField label="Your name" name="contact_name" required placeholder="Full name" />
              <ModalField label="Work email" name="work_email" type="email" required placeholder="you@brand.pk" />
              <ModalField label="Your role" name="role" placeholder="Head of Marketing" />

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                  Sponsor tier
                </label>
                <select name="sponsor_tier" defaultValue="" className="w-full bg-transparent border border-border focus:border-neon outline-none px-3 py-2.5 text-sm font-display transition">
                  <option value="" className="bg-background">Select tier</option>
                  <option value="title" className="bg-background">Title — PKR 50L+</option>
                  <option value="presenting" className="bg-background">Presenting — PKR 25L</option>
                  <option value="category" className="bg-background">Category — PKR 10L</option>
                  <option value="supporting" className="bg-background">Supporting — PKR 5L</option>
                  <option value="exploring" className="bg-background">Just exploring</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                  Budget range
                </label>
                <select name="budget_range" defaultValue="" className="w-full bg-transparent border border-border focus:border-neon outline-none px-3 py-2.5 text-sm font-display transition">
                  <option value="" className="bg-background">Select range</option>
                  <option value="<5L" className="bg-background">Under PKR 5 Lakh</option>
                  <option value="5-15L" className="bg-background">PKR 5–15 Lakh</option>
                  <option value="15-50L" className="bg-background">PKR 15–50 Lakh</option>
                  <option value="50L+" className="bg-background">PKR 50 Lakh+</option>
                  <option value="undecided" className="bg-background">Undecided</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                Anything we should know? <span className="opacity-60">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={3}
                maxLength={2000}
                placeholder="Activation ideas, timeline, fabric we'd contribute..."
                className="w-full bg-transparent border border-border focus:border-neon outline-none px-3 py-2.5 text-sm font-display transition resize-none"
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-neon font-mono">⚠ {errorMsg}</p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-neon disabled:opacity-50"
                data-hover="Sending..."
              >
                {status === "submitting" ? "Sending..." : "Email me the deck →"}
              </button>
              <button type="button" onClick={onClose} className="btn-ghost">
                Cancel
              </button>
            </div>

            <p className="mt-5 text-[11px] text-muted-foreground font-mono leading-relaxed">
              We use your details only to send the deck and one follow-up. No newsletter, no resale.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function ModalField({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
        {label} {required && <span className="text-neon">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={name === "work_email" ? 320 : 200}
        className="w-full bg-transparent border border-border focus:border-neon outline-none px-3 py-2.5 text-sm font-display placeholder:text-muted-foreground/50 transition"
      />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl lg:text-4xl font-bold tracking-tight">{n}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-mono mt-1">{l}</div>
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-3 text-xs uppercase tracking-[0.2em] text-neon font-mono">— {eyebrow}</div>
          <h2 className="lg:col-span-9 font-display text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-[-0.02em] leading-[0.9] text-balance">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-neon outline-none py-3 text-lg font-display placeholder:text-muted-foreground/50 transition"
      />
    </div>
  );
}
