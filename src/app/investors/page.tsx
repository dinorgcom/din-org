import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors — din.org",
  description:
    "Invest in the future of justice. din.org is building the world's first AI court — a $1 trillion opportunity.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Investors
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            The biggest market nobody is serving.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            5.1 billion people have unmet justice needs. The global legal
            services market is worth over $1 trillion. din.org is building the
            infrastructure to serve both — with AI.
          </p>
        </div>
      </section>

      {/* Market size stats */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {[
            {
              num: "$1.1T",
              label: "Global legal services market size",
              source: "Statista / Grand View Research",
            },
            {
              num: "5.1B",
              label: "People with unmet justice needs worldwide",
              source: "World Justice Project",
            },
            {
              num: "$11B",
              label: "Harvey AI valuation — legal AI is proven",
              source: "CNBC, March 2026",
            },
          ].map((s) => (
            <div key={s.num}>
              <p className="display text-[18vw] md:text-[8vw] leading-[0.85] font-semibold text-accent">
                {s.num}
              </p>
              <p className="mt-4 text-base md:text-lg text-bone/70 max-w-sm">
                {s.label}
              </p>
              <p className="mt-2 text-xs text-bone/55">{s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why now */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Why now
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Three forces converging at once.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "AI reasoning is ready",
              body: "Large language models can now analyze legal documents, cite statutes, and produce reasoned arguments at expert level.",
              detail:
                "GPT-4 scored in the 90th percentile on the bar exam. Legal AI is no longer experimental — it is enterprise-grade.",
            },
            {
              title: "Courts are collapsing",
              body: "55.8M cases pending in India. 80M in Brazil. 29.8 months to trial in the U.S. The system cannot scale.",
              detail:
                "Global backlogs are growing faster than courts can hire judges. The demand for alternatives has never been greater.",
            },
            {
              title: "Regulation is catching up",
              body: "The EU AI Act, UK judiciary guidance, and international arbitration conventions now provide a legal framework for AI-powered dispute resolution.",
              detail:
                "The New York Convention allows enforcement of arbitral awards in 172 countries. din.org rulings are internationally enforceable.",
            },
          ].map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {f.title}
              </h3>
              <p className="text-bone/70 text-base group-hover:text-ink/70 transition-colors duration-200">
                {f.body}
              </p>
              <p className="mt-3 text-sm text-ink font-medium invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {f.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Replace, don't patch */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
              Our thesis
            </p>
            <h2 className="display text-4xl md:text-7xl font-semibold">
              Don&rsquo;t fix the system. Replace it.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg text-bone/80 mb-6">
              Most legal AI startups are building tools to help lawyers work
              faster — better search, faster drafting, smarter document review.
              They are optimizing a broken machine. din.org takes a fundamentally
              different approach: the system itself is so deeply flawed that
              incremental improvements cannot fix it. It must be replaced.
            </p>
            <p className="text-base md:text-lg text-bone/80 mb-6">
              When 5.1 billion people have no access to justice, when a median
              contract dispute costs $91,000, when judges spend four minutes per
              case — the answer is not a better search bar for lawyers. The
              answer is a new system built from scratch, designed for scale,
              speed, and fairness from the ground up.
            </p>
            <p className="text-base md:text-lg text-bone/70">
              This is what separates din.org from every other legal AI company.
              They help lawyers. We replace the need for the entire traditional
              process.
            </p>
          </div>
        </div>
      </section>

      {/* The perception gap */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            The perception gap
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-5xl">
            People think courts work. They don&rsquo;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
            <h3 className="display text-2xl md:text-3xl font-semibold text-bone/55 mb-6">
              What people believe
            </h3>
            <ul className="space-y-4 text-bone/60 text-base md:text-lg">
              <li>A judge carefully reads every document</li>
              <li>Each case receives thorough, individual attention</li>
              <li>Legal reasoning is rigorous and consistent</li>
              <li>The system delivers fair outcomes</li>
              <li>Justice is available to everyone</li>
            </ul>
          </article>
          <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
            <h3 className="display text-2xl md:text-3xl font-semibold text-accent mb-6">
              What actually happens
            </h3>
            <ul className="space-y-4 text-bone/70 text-base md:text-lg">
              <li>Judges handle 388+ cases per year — 4 minutes per hearing</li>
              <li>Thousands of pages of evidence go unread</li>
              <li>Decisions are rushed, inconsistent, and influenced by fatigue</li>
              <li>3,500+ wrongful convictions exposed in the U.S. alone</li>
              <li>92% of low-income Americans lack adequate legal help</li>
            </ul>
          </article>
        </div>

        <div className="mt-10 max-w-4xl">
          <p className="text-base md:text-lg text-bone/80 mb-6">
            People who have never been through the legal system believe their
            case will receive careful, thorough attention. People who have been
            through it know the truth: it is overwhelmed, underfunded, and
            structurally incapable of delivering what it promises.
          </p>
          <p className="text-base md:text-lg text-bone/80">
            AI will not be perfect either. But it will read every document. It
            will consider every piece of evidence. It will not get tired at 4pm
            on a Friday. It will not carry bias from the previous case. And it
            will produce a fully cited, reasoned ruling — every single time.
            Not perfect, but dramatically better than a system that was never
            designed for the scale it now faces.
          </p>
        </div>
      </section>

      {/* The opportunity — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            The opportunity
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold">
            Own the infrastructure layer of global dispute resolution.
          </h2>
          <p className="mt-10 text-lg md:text-xl max-w-3xl opacity-80">
            din.org is not a legal chatbot. It is a complete court system —
            filing, counsel, evidence, cross-examination, ruling, and appeal —
            delivered end to end by AI. The first company to build this
            infrastructure captures a category that does not yet exist.
          </p>
        </div>
      </section>

      {/* Business model */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Business model
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Token-based. Scalable. High-margin.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Token packages",
              body: "Users buy token packages (50–750 tokens) and spend them on participants, evidence, expertises, and appeals. No subscriptions, no recurring churn risk.",
            },
            {
              title: "Near-zero marginal cost",
              body: "Each additional case costs only API compute. No judges to hire, no courtrooms to rent, no clerks to manage. Gross margins above 80% at scale.",
            },
            {
              title: "Enterprise contracts",
              body: "E-commerce platforms, insurance companies, and legal service providers resolve thousands of disputes monthly. Volume pricing creates predictable, recurring revenue.",
            },
            {
              title: "Network effects",
              body: "Every ruling creates precedent data. More cases improve AI accuracy. Better outcomes attract more users. The flywheel accelerates with scale.",
            },
          ].map((b) => (
            <article
              key={b.title}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15"
            >
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                {b.title}
              </h3>
              <p className="text-bone/70 text-base md:text-lg">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Competitive moat */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Competitive moat
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Why din.org wins.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Full-stack court",
              body: "Not a chatbot. Not a document tool. A complete end-to-end court process — the only one of its kind.",
            },
            {
              title: "Live cross-examination",
              body: "Simultaneous video questioning of all parties by an AI judge. No other platform does this. It is din.org's core differentiator.",
            },
            {
              title: "Human appeal layer",
              body: "Every AI ruling can be appealed to human arbiters. This makes din.org enforceable under international arbitration law.",
            },
            {
              title: "172-country enforcement",
              body: "Rulings are enforceable under the New York Convention in 172 countries — the same framework used by traditional arbitration.",
            },
            {
              title: "Precedent database",
              body: "Every case builds a proprietary legal reasoning dataset. This compounds over time and becomes an unassailable competitive advantage.",
            },
            {
              title: "First mover",
              body: "There is no AI court. din.org is defining a new category — the company that builds it first sets the standard.",
            },
          ].map((m) => (
            <article
              key={m.title}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {m.title}
              </h3>
              <p className="text-bone/70 text-base group-hover:text-ink/70 transition-colors duration-200">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* TAM / growth projections */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "$1.1T", v: "Total addressable market" },
            { k: "80%+", v: "Gross margin at scale" },
            { k: "172", v: "Countries for enforcement" },
            { k: "0", v: "Direct competitors" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">
                {s.k}
              </p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases / market segments */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Market segments
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Multiple billion-dollar verticals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              segment: "E-Commerce & Marketplaces",
              size: "$6.3T global e-commerce",
              body: "Amazon, eBay, and Shopify sellers handle millions of disputes yearly. din.org replaces manual review with binding AI arbitration.",
            },
            {
              segment: "Insurance",
              size: "$7.1T global premiums",
              body: "Claims disputes cost insurers billions in legal fees and delays. AI arbitration resolves them in hours at a fraction of the cost.",
            },
            {
              segment: "Freelance & Gig Economy",
              size: "1.57B freelancers globally",
              body: "Payment disputes, scope disagreements, and contract conflicts — all too small for traditional courts, perfect for din.org.",
            },
            {
              segment: "International Trade",
              size: "$32T in global trade",
              body: "Cross-border commercial disputes take years and cost hundreds of thousands. din.org resolves them in days for under &euro;500.",
            },
          ].map((seg) => (
            <article
              key={seg.segment}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15"
            >
              <p className="text-accent text-sm font-medium mb-2">
                {seg.size}
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                {seg.segment}
              </h3>
              <p className="text-bone/70 text-base md:text-lg">{seg.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Founding team
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Operators, not academics.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">
                MM
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">
                Michael Marcovici
              </h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Serial entrepreneur and inventor. Former operator of the
                world&rsquo;s largest eBay power-selling enterprise. Holder of
                international patents in electronic payment systems and trading
                technology. Active in crypto since 2013. Author and recognized
                contemporary artist.
              </p>
            </article>

            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">
                RS
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">
                Raphael Spannocchi
              </h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Web3 growth strategist and DAO governance expert. Co-Founder
                &amp; CGO at Upptic, driving 50M+ players annually. Former
                Senior GameFi Researcher at Cointelegraph Research. Deep
                expertise in decentralization and legal frameworks for digital
                organizations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Traction / milestones */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Roadmap
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Where we are. Where we&rsquo;re going.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            {
              phase: "Phase 1",
              label: "Foundation",
              items: [
                "Core platform architecture",
                "AI judge reasoning engine",
                "AI lawyer assistant",
                "Token-based billing system",
              ],
            },
            {
              phase: "Phase 2",
              label: "Launch",
              items: [
                "Public beta launch",
                "Live video cross-examination",
                "ID verification integration",
                "First 1,000 cases",
              ],
            },
            {
              phase: "Phase 3",
              label: "Scale",
              items: [
                "Enterprise API & partnerships",
                "Multi-language support",
                "Human appeal arbiter network",
                "10,000+ cases/month",
              ],
            },
            {
              phase: "Phase 4",
              label: "Dominance",
              items: [
                "Marketplace & insurance integrations",
                "Precedent database licensing",
                "Regional compliance certifications",
                "100,000+ cases/month",
              ],
            },
          ].map((p) => (
            <div
              key={p.phase}
              className="rounded-3xl bg-ink-soft p-8 md:p-10 border border-bone/15"
            >
              <p className="text-accent text-xs uppercase tracking-widest mb-2">
                {p.phase}
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-6">
                {p.label}
              </h3>
              <ul className="space-y-3 text-bone/70 text-base">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-accent text-ink p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Join us in building the court the world needs.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
            We are raising our next round. If you believe justice should be
            fast, fair, and accessible to everyone — let&rsquo;s talk.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:investors@din.org"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-accent px-8 py-4 text-base font-medium hover:bg-ink-soft transition-colors"
            >
              Contact investors@din.org
              <span aria-hidden>&rarr;</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-8 py-4 text-base font-medium hover:border-ink/60 transition-colors"
            >
              Learn more about din.org
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
