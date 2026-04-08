import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — din.org",
  description:
    "Token-based pricing. Buy token packages and use them for participants, evidence, expertises, and appeals.",
};

export default function PricingPage() {
  const packages = [
    {
      name: "Starter",
      price: "50",
      tokens: "50",
      desc: "For simple disputes with minimal evidence and few participants.",
      example: "e.g. 1 plaintiff + 1 defendant + 1 piece of evidence = 65 tokens",
      highlight: false,
    },
    {
      name: "Standard",
      price: "150",
      tokens: "200",
      desc: "The most popular package. Enough for a full case with witnesses and expert analysis.",
      example: "e.g. 2 parties + 2 witnesses + 3 evidence + 1 expertise = 195 tokens",
      highlight: true,
    },
    {
      name: "Professional",
      price: "500",
      tokens: "750",
      desc: "For complex disputes with multiple parties, extensive evidence, and appeal options.",
      example: "e.g. full case + 10 evidence + 2 expertises + appeal with 3 judges = 710 tokens",
      highlight: false,
    },
  ];

  const tokenCosts = [
    {
      action: "Human Participant",
      cost: "25",
      unit: "per person",
      desc: "Plaintiff, defendant, witness, or consultant — each person added to the case.",
    },
    {
      action: "Evidence Submission",
      cost: "15",
      unit: "per 1 GB of data",
      desc: "Upload contracts, photos, chat logs, audio, video, or any supporting documents.",
    },
    {
      action: "AI Expertise",
      cost: "50",
      unit: "per expertise",
      desc: "Specialized AI analysis — legal, financial, technical, or industry-specific.",
    },
    {
      action: "Appeal Judge",
      cost: "120",
      unit: "per human judge",
      desc: "Add human arbiters for a second ruling. Maximum 7 judges per appeal.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Pricing
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Buy tokens. Use them as you need.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            No subscriptions. No retainers. No hourly fees. Purchase a token
            package and spend tokens on participants, evidence, expertises, and
            appeals — only what your case requires.
          </p>
        </div>
      </section>

      {/* Free filing callout */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
          <div>
            <p className="display text-[20vw] md:text-[10vw] leading-[0.85] font-semibold">
              0
            </p>
          </div>
          <div>
            <h2 className="display text-3xl md:text-5xl font-semibold mb-3">
              Tokens to file a case
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-xl">
              Filing your case on din.org is completely free. Describe your
              dispute, notify the other party, and choose your AI lawyer — no
              tokens needed until you start building your case.
            </p>
          </div>
        </div>
      </section>

      {/* Token Packages */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24 reveal">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Token packages
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Three packages. One simple system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`reveal rounded-3xl p-8 md:p-12 border flex flex-col ${
                p.highlight
                  ? "bg-accent text-ink border-accent"
                  : "bg-ink-card border-bone/15"
              }`}
            >
              <p
                className={`text-sm uppercase tracking-[0.2em] mb-6 ${
                  p.highlight ? "opacity-60" : "text-accent"
                }`}
              >
                {p.name}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="display text-6xl md:text-8xl font-semibold">
                  {p.tokens}
                </span>
                <span
                  className={`text-lg ${
                    p.highlight ? "opacity-60" : "text-bone/60"
                  }`}
                >
                  tokens
                </span>
              </div>
              <p
                className={`display text-2xl md:text-3xl font-semibold mb-6 ${
                  p.highlight ? "" : "text-accent"
                }`}
              >
                &euro;{p.price}
              </p>
              <p
                className={`text-base md:text-lg mb-4 ${
                  p.highlight ? "opacity-80" : "text-bone/70"
                }`}
              >
                {p.desc}
              </p>
              <p
                className={`text-xs mb-8 ${
                  p.highlight ? "opacity-50" : "text-bone/55"
                }`}
              >
                {p.example}
              </p>
              <div className="mt-auto">
                <Link
                  href="/file-a-case"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors ${
                    p.highlight
                      ? "bg-ink text-accent hover:bg-ink-soft"
                      : "bg-accent text-ink hover:bg-accent-hot"
                  }`}
                >
                  Get started
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Token costs table */}
      <section className="px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24 reveal">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Token costs
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            What each action costs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tokenCosts.map((t) => (
            <article
              key={t.action}
              className="reveal group rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <p className="display text-5xl md:text-7xl font-semibold text-accent group-hover:text-ink transition-colors duration-200">
                  {t.cost}
                </p>
                <p className="text-bone/60 text-sm group-hover:text-ink/50 transition-colors duration-200">
                  tokens {t.unit}
                </p>
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {t.action}
              </h3>
              <p className="text-bone/70 text-base md:text-lg group-hover:text-ink/70 transition-colors duration-200">
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Example case breakdown */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Example
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            A typical case, broken down.
          </h2>

          <div className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
            <div className="space-y-4">
              {[
                { item: "Plaintiff", tokens: 25 },
                { item: "Defendant", tokens: 25 },
                { item: "Witness (1)", tokens: 25 },
                { item: "Evidence — contract (PDF, 120 MB)", tokens: 15 },
                { item: "Evidence — email archive (800 MB)", tokens: 15 },
                { item: "Evidence — photos (400 MB)", tokens: 15 },
                { item: "AI Legal Expertise", tokens: 50 },
              ].map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between py-3 border-b border-bone/10 last:border-b-0"
                >
                  <span className="text-bone/70 text-base md:text-lg">
                    {row.item}
                  </span>
                  <span className="text-accent font-semibold text-lg digital-num">
                    {row.tokens}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-accent/30">
                <span className="display text-xl md:text-2xl font-semibold">
                  Total
                </span>
                <span className="text-accent font-bold text-2xl md:text-3xl digital-num">
                  170
                </span>
              </div>
            </div>
            <p className="mt-6 text-bone/55 text-sm">
              This case fits within the Standard package (200 tokens for
              &euro;150) — with 30 tokens to spare.
            </p>
          </div>
        </div>
      </section>

      {/* Volume / Enterprise */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
                Enterprise volume
              </p>
              <h2 className="display text-4xl md:text-6xl font-semibold mb-6">
                High volume? Custom pricing.
              </h2>
              <p className="text-bone/70 text-base md:text-lg mb-8">
                For businesses handling dozens or hundreds of disputes, we offer
                custom token packages with volume discounts. The more you buy,
                the lower the cost per token.
              </p>
              <Link
                href="mailto:enterprise@din.org"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
              >
                Contact for volume pricing
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-6">
                What&rsquo;s always included
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-bone/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Free case filing and workspace
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  AI lawyer guidance for both parties
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Live video cross-examination
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  AI judge ruling with full legal reasoning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Bank-level encryption and data security
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  ID verification for all participants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Compare
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Traditional court vs. din.org
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <h3 className="display text-2xl md:text-3xl font-semibold text-bone/55 mb-8">
                Traditional Litigation
              </h3>
              <ul className="space-y-4 text-bone/60 text-base md:text-lg">
                <li>$91,000 median contract dispute</li>
                <li>29.8 months to trial</li>
                <li>Lawyer retainer required</li>
                <li>Geographic restrictions</li>
                <li>Limited court hours</li>
                <li>Overworked judges (4 min/case)</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-accent text-ink p-8 md:p-12">
              <h3 className="display text-2xl md:text-3xl font-semibold mb-8">
                din.org
              </h3>
              <ul className="space-y-4 text-base md:text-lg opacity-80">
                <li>From &euro;50 for a full token package</li>
                <li>Ruling in under 24 hours</li>
                <li>AI lawyer included free</li>
                <li>Available worldwide</li>
                <li>24/7 operation</li>
                <li>Full attention to every case</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Ready to resolve your dispute?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            Filing is free. Buy tokens only when you need them.
          </p>
          <Link
            href="/file-a-case"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            File a Case for Free
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
