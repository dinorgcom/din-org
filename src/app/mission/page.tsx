import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission — din.org",
  description:
    "The legal system is broken. 5.1 billion people have unmet justice needs. din.org is here to fix it.",
};

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Mission
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            The legal system is broken. We&rsquo;re here to fix it.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Courts are slow, expensive, and inaccessible to most of the
            world&rsquo;s population. din.org exists because justice delayed is
            justice denied — and 5.1 billion people are being denied.
          </p>
        </div>
      </section>

      {/* Giant stats — on.energy style oversized numbers */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {[
            {
              num: "5.1B",
              label: "people have unmet justice needs globally",
              source: "World Justice Project",
            },
            {
              num: "92%",
              label:
                "of low-income Americans face civil legal problems without adequate help",
              source: "Legal Services Corporation",
            },
            {
              num: "55.8M",
              label: "cases pending in India alone — doubled in a decade",
              source: "CS Monitor, 2026",
            },
          ].map((s) => (
            <div key={s.num}>
              <p className="display text-[18vw] md:text-[8vw] leading-[0.85] font-semibold text-accent">
                {s.num}
              </p>
              <p className="mt-4 text-base md:text-lg text-bone/70 max-w-sm">
                {s.label}
              </p>
              <p className="mt-2 text-xs text-bone/40">{s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem — card grid */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            The problem
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            A system designed for another century.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              title: "Unaffordable for most",
              stat: "$91,000",
              statLabel: "median cost of a single contract dispute",
              body: "Small businesses bear 48% of tort costs despite generating only 20% of revenue. The U.S. tort system costs $529 billion annually — a hidden tax of $4,207 per household.",
              source: "U.S. Chamber of Commerce / ILR",
            },
            {
              n: "02",
              title: "Painfully slow",
              stat: "29.8 months",
              statLabel: "median time to trial in U.S. federal court",
              body: "Complex commercial disputes take 35–41 months. In India, 5.5 million cases have been pending for over a decade. In the UK, the Crown Court backlog has doubled since 2019.",
              source: "Hughes Hubbard / CS Monitor / GOV.UK",
            },
            {
              n: "03",
              title: "Judges are overwhelmed",
              stat: "4 min",
              statLabel: "average time a judge spends per traffic case",
              body: "U.S. federal judges handle 388+ cases per year. In India, judges carry 2,200+ cases each — with only 22 judges per million people. There is no time for justice.",
              source: "TRAC Reports / IJCA",
            },
            {
              n: "04",
              title: "Mistakes destroy lives",
              stat: "3,500+",
              statLabel: "known exonerations in the U.S. alone",
              body: "An estimated 2–5% of all prisoners are innocent. When the wrong person is convicted, the real perpetrator stays free — causing an estimated 41,000+ additional crimes annually.",
              source: "Innocence Project / OJP",
            },
          ].map((p) => (
            <article
              key={p.n}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <p className="text-accent text-sm font-mono mb-6">{p.n}</p>
              <h3 className="display text-2xl md:text-4xl font-semibold mb-2">
                {p.title}
              </h3>
              <p className="display text-4xl md:text-6xl font-semibold text-accent mb-1">
                {p.stat}
              </p>
              <p className="text-sm text-bone/50 mb-6">{p.statLabel}</p>
              <p className="text-bone/70 text-base md:text-lg">{p.body}</p>
              <p className="mt-4 text-xs text-bone/30">{p.source}</p>
            </article>
          ))}
        </div>
      </section>

      {/* More stats strip */}
      <section className="border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "$529B", v: "annual U.S. tort system cost" },
            { k: "80M", v: "pending lawsuits in Brazil" },
            { k: "80%", v: "cannot afford legal assistance" },
            { k: "< 2%", v: "of federal cases reach trial" },
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

      {/* Yellow mission block */}
      <section className="bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Our answer
          </p>
          <h2 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Replace delay with decision. Replace cost with access.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80">
            din.org is an AI-powered court that delivers reasoned rulings in
            hours, not years. No lawyer fees. No courtroom delays. No geographic
            barriers. Just evidence, cross-examination, and a written decision —
            accessible to anyone, anywhere.
          </p>
        </div>
      </section>

      {/* What we solve — feature grid */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            What din.org solves
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Every flaw, addressed by design.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
              {
                problem: "Years of waiting",
                solution: "Ruling in under 24 hours",
                body: "AI analysis, live cross-examination, and automated procedures eliminate the bottleneck of human scheduling and paperwork.",
                detail: "What once took 29.8 months in federal court now takes less than a day — from filing to fully cited ruling.",
              },
              {
                problem: "$91K per dispute",
                solution: "Near-zero cost",
                body: "No lawyer fees, no court fees, no discovery costs. AI lawyers guide each party through the process for free.",
                detail: "A complete case from $15. That is 99.98% less than the $91,000 median for traditional commercial litigation.",
              },
              {
                problem: "Personal bias",
                solution: "Consistent, evidence-based decisions",
                body: "AI judges evaluate facts and law without fatigue, prejudice, or political pressure. Every decision is reasoned and cited.",
                detail: "No mood swings before lunch. No political leanings. Just evidence and law, applied the same way every time.",
              },
              {
                problem: "5.1B without access",
                solution: "Open to everyone, everywhere",
                body: "No geographic restrictions. No language barriers. No requirement to hire expensive counsel. Justice becomes a service, not a privilege.",
                detail: "A farmer in Kenya and a corporation in New York receive the same quality of justice — for the first time in history.",
              },
              {
                problem: "Overwhelmed judges",
                solution: "Unlimited capacity",
                body: "AI never runs out of time. Every case gets the full attention it deserves — no 4-minute hearings, no rubber-stamped decisions.",
                detail: "Human judges handle 388+ cases per year. AI handles every case as if it were the only one.",
              },
              {
                problem: "Wrongful outcomes",
                solution: "Multi-AI cross-verification",
                body: "Multiple AI models analyze each case independently. Live simultaneous cross-examination makes fabrication nearly impossible.",
                detail: "3,500+ known wrongful convictions in the U.S. alone. Cross-verified AI analysis dramatically reduces the risk of error.",
              },
          ].map((f) => (
            <article
              key={f.problem}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-bone/40 line-through mb-1 group-hover:text-ink/40 transition-colors duration-200">
                {f.problem}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-accent group-hover:text-ink transition-colors duration-200">
                {f.solution}
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

      {/* Global crisis stats */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            A global crisis
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            The numbers speak for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              country: "United States",
              stats: [
                "$529B annual tort system cost",
                "29.8 months median time to trial",
                "388+ cases per federal judge per year",
                "92% of low-income lack adequate legal help",
              ],
            },
            {
              country: "India",
              stats: [
                "55.8 million cases pending",
                "5.5 million pending 10+ years",
                "22 judges per million people",
                "Backlog costs over 2% of GDP",
              ],
            },
            {
              country: "United Kingdom",
              stats: [
                "80,203 Crown Court cases outstanding",
                "Backlog doubled since 2019",
                "27% of cases open over 1 year",
                "44.7 weeks median wait for trial",
              ],
            },
            {
              country: "Brazil",
              stats: [
                "80 million pending lawsuits",
                "One of the world's largest backlogs",
                "Years-long waits for commercial disputes",
                "Access to justice remains limited",
              ],
            },
          ].map((c) => (
            <article
              key={c.country}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15"
            >
              <h3 className="display text-2xl md:text-3xl font-semibold text-accent mb-6">
                {c.country}
              </h3>
              <ul className="space-y-3 text-bone/70 text-base md:text-lg">
                {c.stats.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 shrink-0">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-bone/30 max-w-3xl">
          Sources: World Justice Project, U.S. Chamber of Commerce, Legal
          Services Corporation, CS Monitor, Hughes Hubbard, TRAC Reports,
          GOV.UK, Innocence Project, House of Lords Library
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Justice should not be a luxury.
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            din.org is building the court the world actually needs — fast, fair,
            and open to everyone.
          </p>
          <Link
            href="/file-a-case"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            File Your Case Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
