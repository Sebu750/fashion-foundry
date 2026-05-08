import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-runway.jpg";
import winner1 from "@/assets/winner-1.jpg";
import winner2 from "@/assets/winner-2.jpg";
import winner3 from "@/assets/winner-3.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const PARTNERS = ["SSENSE", "MOOD FABRICS", "CLO 3D", "VOGUE INDIA", "DAZED", "PREMIÈRE VISION", "BOF", "PARSONS"];

const STEPS = [
  { n: "01", t: "Submit 3 looks", d: "Upload your strongest work. No full collection required." },
  { n: "02", t: "Public vote + jury score", d: "Industry judges and 200k followers shortlist 10 finalists." },
  { n: "03", t: "Live finale, NYC", d: "Walk the runway in front of buyers, press, and the next mentor of your career." },
  { n: "04", t: "Production run", d: "Winner gets capital, fabric, and shelf space. Not just a trophy." },
];

const PRIZES = [
  ["$50,000", "in non-dilutive cash. No equity, no strings."],
  ["$15k fabric grant", "From Mood Fabrics & sponsoring mills."],
  ["12-month mentorship", "1:1 with a CFDA-recognized designer."],
  ["Marketplace launch", "Featured drop. Keep 70% of every sale."],
  ["Première Vision Paris", "All-expenses sourcing trip + buyer intros."],
  ["Editorial coverage", "Profile in partner magazines + BoF."],
];

const WINNERS = [
  { img: winner1, name: "Maria Chen", year: "S/S 23 Winner", now: "Assistant Designer, Coach", quote: "It got my portfolio in front of the right people. Three weeks later I had two offers." },
  { img: winner2, name: "Daniel Okafor", year: "F/W 23 Winner", now: "Founder, OKAFOR STUDIO — stocked at SSENSE", quote: "I came in with three samples sewn in my mom's basement. I left with a production line." },
  { img: winner3, name: "Lou Renard", year: "S/S 24 Winner", now: "Knitwear Designer, Loewe", quote: "The mentorship is the prize. The cash just paid for the move to Paris." },
];

const DATES = [
  ["Early entry deadline", "Mar 14, 2026", "$50 — saves you 60%"],
  ["Final entry deadline", "Apr 30, 2026", "$200 standard"],
  ["Semi-finalists announced", "May 22, 2026", "Top 30 published"],
  ["Live finale", "Sep 11, 2026", "NYFW — Spring Studios, NYC"],
];

const FAQ = [
  ["Do I need a full collection?", "No. Three to five looks is enough. We're hunting for vision, not volume."],
  ["Who owns my designs?", "You do — 100%. We take a non-exclusive license only to promote the competition."],
  ["Can international designers apply?", "Yes. Finalists receive a travel + accommodation stipend for the NYC finale."],
  ["What if I don't win?", "Every semi-finalist gets a written portfolio review and access to the sponsor directory."],
  ["What's the entry fee for?", "Jury time, production of the finale show, and the prize pool. Fee waivers available — ask."],
  ["Is there an age limit?", "No, but our community skews 20–30. Self-taught welcome."],
];

function Landing() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold tracking-tight text-lg">
            ATELIER<span className="text-neon">/01</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#prize" className="hover:text-foreground transition">Prize</a>
            <a href="#winners" className="hover:text-foreground transition">Alumni</a>
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
              S/S 26 Applications open · 1,200 applied last season
            </div>

            <h1 className="font-display font-bold uppercase tracking-[-0.02em] leading-[0.88] text-balance text-[clamp(2.75rem,9vw,9rem)] max-w-[16ch]">
              Stop interning. <br />
              <span className="font-serif lowercase italic font-light text-muted-foreground">start</span> Competing.
            </h1>

            <p className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">3 rounds. 10 finalists. 1 winner.</span><br />
              Judged by Zara's former Head of Design, a CFDA winner, and the buying director of SSENSE. Walk away with $50k and a year of mentorship.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#apply" className="btn-neon" data-hover="Yes, I'm ready">
                Apply Now — Early bird ends Mar 14
              </a>
              <a href="#" className="btn-ghost">Download prospectus ↓</a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-border pt-6">
              <Stat n="$50k" l="Cash prize" />
              <Stat n="10" l="Finalists / season" />
              <Stat n="2.4%" l="Acceptance rate" />
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
          <span className="block mt-3 text-sm font-display not-italic uppercase tracking-[0.2em] text-muted-foreground">— Founder's note</span>
        </p>
      </Section>

      {/* WINNERS */}
      <Section id="winners" eyebrow="Alumni" title={<>Where last season's <br /><span className="font-serif italic font-light">winners are now.</span></>}>
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
              Own the next generation of talent <span className="font-serif italic font-light">before their agent does.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <ul className="space-y-5 text-base lg:text-lg">
              {[
                "First look at 100+ vetted emerging designers.",
                "Branded challenge integration — your fabric, their collection.",
                "Quarterly trend report on what Gen Z is actually making.",
                "Casting access for in-house and freelance hires.",
              ].map((b) => (
                <li key={b} className="flex gap-4 border-b border-border pb-5">
                  <span className="text-neon font-mono text-sm shrink-0">✦</span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#" className="btn-ghost">Request sponsorship deck</a>
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
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
            <Field label="Portfolio link" name="portfolio" placeholder="https://" />
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
                Category
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {["Womenswear", "Menswear", "Knitwear", "Accessories"].map((c) => (
                  <label key={c} className="cursor-pointer">
                    <input type="radio" name="category" className="peer sr-only" defaultChecked={c === "Womenswear"} />
                    <div className="border border-border peer-checked:border-neon peer-checked:text-neon px-4 py-3 text-center text-sm uppercase tracking-wider font-display transition hover:border-foreground">
                      {c}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-neon w-full md:w-auto" data-hover="See you in NYC">
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
            Last season: <span className="text-foreground font-medium">1,200 applicants</span>. <span className="text-foreground font-medium">50 spots</span>. Early bird closes <span className="text-neon">March 14</span>.
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
            ATELIER<span className="text-neon">/01</span> · NYC × Paris × Lagos
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Substack</a>
            <a href="#" className="hover:text-foreground">Press</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <div>© 2026 — All rights reserved</div>
        </div>
      </footer>
    </main>
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
