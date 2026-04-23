import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Arbitration? A Plain-English Guide (2026) | din.org",
  description:
    "What is arbitration? How it works, how it differs from court and mediation, what it costs, and how AI arbitration is changing the landscape. Plain-English guide updated for 2026.",
  keywords: [
    "what is arbitration",
    "arbitration definition",
    "how arbitration works",
    "arbitration vs mediation",
    "arbitration vs court",
    "AI arbitration",
    "online arbitration",
    "alternative dispute resolution",
  ],
  alternates: { canonical: "https://din.org/what-is-arbitration" },
  openGraph: {
    type: "article",
    title: "What Is Arbitration? A Plain-English Guide (2026)",
    description:
      "The definitive plain-English guide to arbitration — how it works, how much it costs, how it differs from court, and what AI is changing in 2026.",
    url: "https://din.org/what-is-arbitration",
  },
};

// Structured data for Google — FAQ rich snippet + Article
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "What Is Arbitration? A Plain-English Guide",
      description:
        "What arbitration is, how it works, how it differs from court and mediation, what it costs, and how AI is changing it in 2026.",
      author: { "@type": "Organization", name: "din.org" },
      publisher: {
        "@type": "Organization",
        name: "din.org",
        url: "https://din.org",
      },
      datePublished: "2026-04-23",
      dateModified: "2026-04-23",
      mainEntityOfPage: "https://din.org/what-is-arbitration",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is arbitration in simple terms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Arbitration is a private way to resolve a dispute. Instead of going to a public court, both parties agree to let a neutral third party — the arbitrator — hear the case and issue a binding decision. It's usually faster, cheaper, and more private than a lawsuit.",
          },
        },
        {
          "@type": "Question",
          name: "How is arbitration different from mediation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A mediator helps the parties negotiate a settlement but has no power to decide the outcome. An arbitrator does: the arbitrator hears evidence and issues a binding decision — called an award — that a court will enforce. Mediation is assisted negotiation; arbitration is private adjudication.",
          },
        },
        {
          "@type": "Question",
          name: "How much does arbitration cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional arbitration through institutions like AAA or ICC typically runs €5,000–€50,000 for mid-sized disputes, plus legal fees. AI arbitration platforms like din.org cost a fraction — often €300–€1,500 of platform fees for the same dispute, with enforceable awards under the New York Convention.",
          },
        },
        {
          "@type": "Question",
          name: "Is an arbitration decision binding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. An arbitration award is final and binding under the law of nearly every country. The 1958 New York Convention requires courts in 170+ signatory countries to enforce foreign arbitration awards, making arbitration especially valuable for cross-border disputes. Appeal rights are narrow but exist, usually limited to process irregularities.",
          },
        },
        {
          "@type": "Question",
          name: "What is AI arbitration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI arbitration uses artificial intelligence to conduct some or all parts of the arbitration process — hearing evidence, examining witnesses via video, analysing documents, and drafting reasoned rulings. In 2026 the American Arbitration Association launched its AI Arbitrator; platforms like din.org handle the full end-to-end process. Most serious AI arbitration systems preserve a human-appeal path.",
          },
        },
        {
          "@type": "Question",
          name: "What types of disputes can be arbitrated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most civil and commercial disputes: contract disagreements, shareholder disputes, employment claims, consumer complaints, construction defects, insurance claims, IP disputes, and international commercial disputes. Criminal matters, child custody, and some regulatory questions cannot be arbitrated and must go to court.",
          },
        },
      ],
    },
  ],
};

export default function WhatIsArbitrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Explainer · Updated April 2026
          </p>
          <h1 className="display text-4xl md:text-7xl leading-[1.02] font-semibold">
            What is arbitration?
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            A plain-English guide to arbitration — how it works, how it differs
            from court and mediation, what it costs, and how AI is reshaping it
            in 2026.
          </p>
        </div>
      </section>

      {/* THE ANSWER UP FRONT */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            The short answer
          </p>
          <p className="display text-2xl md:text-5xl font-semibold leading-[1.15]">
            Arbitration is a <span className="underline decoration-2 decoration-ink/30 underline-offset-4">private way to resolve a dispute</span>. Both sides agree that a neutral third party — the arbitrator — will hear the case and issue a binding decision. It&apos;s usually faster, cheaper, and more private than going to court.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            How it works
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            The five steps of a typical arbitration.
          </h2>
          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Agreement to arbitrate",
                body: "Both parties must agree — either because they signed a contract with an arbitration clause, or because they agree now. Without consent, there's no arbitration.",
              },
              {
                n: "02",
                title: "Filing and response",
                body: "The claimant files a statement of claim. The respondent files an answer, admitting or denying each claim. An arbitrator (or panel of three) is selected.",
              },
              {
                n: "03",
                title: "Evidence and hearings",
                body: "Both sides submit documents, witness statements, and expert reports. Hearings may be in person or by video. The arbitrator runs the process.",
              },
              {
                n: "04",
                title: "Award",
                body: "The arbitrator writes a reasoned decision — the award — stating who prevails and what remedy, if any. It's binding on both parties.",
              },
              {
                n: "05",
                title: "Enforcement",
                body: "Under the 1958 New York Convention, arbitration awards are enforceable in 170+ countries — often more easily than foreign court judgments.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="flex gap-6 md:gap-8 border-t border-bone/15 pt-6"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent digital-num w-12 flex-shrink-0">
                  {s.n}
                </p>
                <div>
                  <h3 className="display text-xl md:text-2xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Compared
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            Arbitration vs court vs mediation vs AI arbitration.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-bone/20">
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50"></th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Court
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Mediation
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Arbitration
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-accent">
                    AI arbitration
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  ["Decision maker", "Judge / jury", "No one — parties decide", "Arbitrator", "AI + human appeal"],
                  ["Binding?", "Yes", "Only if both agree", "Yes", "Yes"],
                  ["Public?", "Yes", "No", "No", "No"],
                  ["Typical cost", "€20k–€500k+", "€2k–€10k", "€5k–€50k+", "€300–€1,500"],
                  ["Typical duration", "2–7 years", "1–4 weeks", "3–18 months", "Days to weeks"],
                  ["Appeal?", "Yes", "N/A", "Narrow", "Human judges"],
                ].map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-bone/10">
                    <td className="p-4 font-medium text-bone/90">{label}</td>
                    {cells.map((c, i) => (
                      <td
                        key={i}
                        className={`p-4 ${i === 3 ? "text-accent" : "text-bone/70"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI ARBITRATION DEEP DIVE */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            The 2026 picture
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-8">
            What AI is changing about arbitration.
          </h2>
          <div className="prose prose-invert max-w-none space-y-6 text-base md:text-lg text-bone/70 leading-relaxed">
            <p>
              Until recently, arbitration — while faster than court — was still
              slow and expensive because it depended on human arbitrators
              reading documents, scheduling hearings, and writing awards by
              hand. In 2025 and 2026 that has begun to change.
            </p>
            <p>
              In November 2025 the American Arbitration Association (AAA)
              launched its first <strong className="text-bone">AI Arbitrator</strong>, initially
              handling documents-only construction defect cases. Early data
              published by the AAA showed <strong className="text-bone">25–35% faster resolution</strong>{" "}
              and <strong className="text-bone">30–50% cost reduction</strong>. Every draft award is
              reviewed by a human arbitrator before issuance.
            </p>
            <p>
              In March 2026 the AAA expanded the tool with a Resolution
              Simulator — a one-party, non-binding AI-generated decision
              designed to help parties evaluate their case before formal
              proceedings begin.
            </p>
            <p>
              Specialist platforms — including din.org, Arbitrus.ai, and
              emerging European entrants — are building AI arbitration
              end-to-end: not just the draft award, but case filing, AI-led
              witness examination by video, cross-checking of testimony,
              automated expert opinions, and structured appeals to panels of
              human judges.
            </p>
            <p>
              The <strong className="text-bone">EU AI Act</strong>, whose
              high-risk provisions become enforceable on <strong className="text-bone">August 2, 2026</strong>,
              explicitly classifies AI assisting judicial authorities — including
              arbitration — as high-risk. Platforms that want to issue
              EU-enforceable awards must meet the Act&apos;s documentation,
              transparency, and human-oversight standards.
            </p>
            <p>
              The net effect: arbitration is becoming <strong className="text-bone">radically
              cheaper</strong> (1–5% of traditional cost),{" "}
              <strong className="text-bone">much faster</strong> (days instead of months), and —
              done well — <strong className="text-bone">more consistent</strong> (same standards applied
              to every case). Done poorly, it raises legitimate concerns about
              bias, enforceability, and the right to be heard by a human. The
              next two years will determine which platforms meet that bar.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            Frequently asked questions about arbitration.
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Is arbitration binding?",
                a: "Yes. Arbitration awards are final and binding under the law of nearly every country. The 1958 New York Convention requires courts in 170+ signatory countries to enforce foreign arbitration awards, making arbitration especially valuable for cross-border disputes.",
              },
              {
                q: "Can you appeal an arbitration award?",
                a: "Appeal rights in traditional arbitration are narrow, usually limited to process irregularities (bias, fraud, procedural error). AI arbitration platforms like din.org add an explicit human-judge appeal path — 1, 3, 5, or 7 judges can review an AI ruling on the merits.",
              },
              {
                q: "What types of disputes can be arbitrated?",
                a: "Most civil and commercial disputes: contract disagreements, shareholder disputes, employment claims, consumer complaints, construction defects, insurance claims, IP disputes, and international commercial disputes. Criminal matters, child custody, and some regulatory questions cannot be arbitrated.",
              },
              {
                q: "How long does arbitration take?",
                a: "Traditional arbitration typically takes 3–18 months. Online arbitration is faster — 1–3 months. AI-assisted arbitration (din.org, AAA's AI Arbitrator) can complete in days for documents-only disputes, or 2–8 weeks with witness video hearings.",
              },
              {
                q: "How much does arbitration cost?",
                a: "Traditional institutional arbitration runs €5,000–€50,000 in fees for mid-sized disputes, plus legal representation. AI arbitration platforms typically charge 1–5% of that — €300–€1,500 of platform fees is common.",
              },
              {
                q: "Can I choose my arbitrator?",
                a: "In traditional arbitration, yes — both parties usually agree on a sole arbitrator or each appoints one member of a three-person panel. In AI arbitration the reasoning engine is fixed, but you can choose the panel size for appeals (1, 3, 5, or 7 judges).",
              },
              {
                q: "Is arbitration the same as AI arbitration?",
                a: "No — AI arbitration is a subset. All AI arbitration is arbitration (binding decision by a neutral third party), but traditional arbitration is human-led. AI arbitration substitutes or augments the human arbitrator with AI, typically preserving a human-appeal mechanism.",
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-bone/15 pt-6">
                <h3 className="display text-xl md:text-2xl font-semibold mb-3">
                  {item.q}
                </h3>
                <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Try din.org
          </p>
          <h2 className="display text-3xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">
            The AI arbitration platform for modern disputes.
          </h2>
          <p className="mt-8 text-lg md:text-xl opacity-80 max-w-3xl">
            File a case, present evidence, receive a reasoned AI ruling — with
            human appeal built in. 1–5% of court costs. Days, not years.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              See how it works
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink px-6 py-4 text-base font-medium hover:bg-ink hover:text-bone transition-colors"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
