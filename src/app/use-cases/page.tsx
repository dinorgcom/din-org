import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — din.org",
  description:
    "Beyond court cases. din.org handles any decision process: grant applications, permits, licences, benefits, competitions, tenders, and more. Same fair, fast, auditable engine.",
  alternates: {
    canonical: "https://din.org/use-cases",
    languages: {
      en: "https://din.org/use-cases",
      de: "https://din.org/de/anwendungsfaelle",
      "x-default": "https://din.org/use-cases",
    },
  },
};

const useCases = [
  {
    icon: "◉",
    title: "Grant applications",
    applicant: "Applicant",
    authority: "Funding body",
    example:
      "Research grants, cultural funding, startup grants, green-tech subsidies. Evaluate eligibility criteria, budget justification, impact claims — reasoned, consistent, unbiased.",
    timeVs: "Weeks → Days",
  },
  {
    icon: "◈",
    title: "Construction & renovation permits",
    applicant: "Builder",
    authority: "Municipality",
    example:
      "Building permits, change-of-use approvals, heritage modifications. Structured review of plans, zoning compliance, neighbour objections, and expert reports.",
    timeVs: "Months → Weeks",
  },
  {
    icon: "◇",
    title: "Licences for regulated activities",
    applicant: "Professional / operator",
    authority: "Licensing body",
    example:
      "Deep-sea diving qualifications, drone pilot certifications, hazardous-materials handling, firearms permits, professional practice licences. Qualification verification with an appeal path.",
    timeVs: "Months → Days",
  },
  {
    icon: "⊟",
    title: "Social benefits & welfare claims",
    applicant: "Claimant",
    authority: "Agency",
    example:
      "Disability benefits, unemployment claims, housing assistance, family allowances. Evidence-driven eligibility checks with the same due-process guarantees as a court.",
    timeVs: "6+ months → 1 week",
  },
  {
    icon: "▲",
    title: "Competition & award judging",
    applicant: "Entrant",
    authority: "Jury",
    example:
      "Design competitions, startup pitches, research prizes, academic awards. Structured evaluation against published criteria, immune to jury politics.",
    timeVs: "Subjective → Traceable",
  },
  {
    icon: "◩",
    title: "Insurance claims",
    applicant: "Insured",
    authority: "Insurer",
    example:
      "Property damage, liability claims, travel insurance, specialty lines. Fast triage, consistent application of policy terms, auditable decisions.",
    timeVs: "Weeks → Hours",
  },
  {
    icon: "◭",
    title: "Public tenders & procurement",
    applicant: "Bidder",
    authority: "Procuring authority",
    example:
      "Government contracts, RFQ scoring, vendor selection. Transparent, criteria-based evaluation with full appeal trail — reducing challenges and delays.",
    timeVs: "Months → Weeks",
  },
  {
    icon: "◮",
    title: "Academic admissions & accreditations",
    applicant: "Student / institution",
    authority: "University / accrediting body",
    example:
      "Graduate programme admissions, professional accreditations, credential recognition. Consistent, non-discriminatory evaluation at scale.",
    timeVs: "Weeks → Hours",
  },
  {
    icon: "◘",
    title: "Visa & residency applications",
    applicant: "Applicant",
    authority: "Consulate / immigration office",
    example:
      "Skilled-worker visas, family reunification, residency permits, naturalisation. Structured eligibility review with human appeal built in.",
    timeVs: "Months → Days",
  },
  {
    icon: "⊕",
    title: "Internal corporate decisions",
    applicant: "Employee / division",
    authority: "Leadership / HR / compliance",
    example:
      "Promotion reviews, budget requests, compliance waivers, internal grievances. Consistent, documented decisions that hold up to scrutiny.",
    timeVs: "Ad-hoc → Structured",
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Beyond court cases
          </p>
          <h1 className="display text-4xl md:text-8xl leading-[0.95] font-semibold max-w-5xl">
            One decision engine.
            <br />
            Every domain that
            <br />
            needs fairness.
          </h1>
          <p className="mt-10 text-lg md:text-2xl text-bone/70 max-w-3xl leading-relaxed">
            Courts aren&apos;t the only place decisions need to be fair, fast, and
            auditable. Grant reviews, building permits, licences, benefits,
            competition juries — every one of them follows the same pattern.
            din.org handles all of them.
          </p>
        </div>
      </section>

      {/* THE UNIVERSAL PATTERN — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            The universal pattern
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-5xl leading-[0.95]">
            Applicant &rarr; evidence &rarr; decision &rarr; appeal.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80 leading-relaxed">
            Whether it&apos;s a shareholder dispute, a grant application, or a
            building permit — someone requests something, evidence is submitted,
            experts weigh in, a decision is made, and an appeal is possible.
            Same structure every time. That&apos;s what din.org was built for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-14 md:mt-20">
            {[
              { n: "01", label: "Application" },
              { n: "02", label: "Evidence" },
              { n: "03", label: "Expert input" },
              { n: "04", label: "Decision" },
              { n: "05", label: "Appeal" },
            ].map((step) => (
              <div
                key={step.n}
                className="bg-ink text-bone rounded-2xl p-5 md:p-6"
              >
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-accent mb-3">
                  {step.n}
                </p>
                <p className="text-xl md:text-2xl font-semibold">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES GRID */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Use cases
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl">
            Ten fields, one engine.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-bone/60 max-w-3xl leading-relaxed">
            Every domain below runs on the same din.org infrastructure — AI
            reasoning, audit log, identity verification, evidence management,
            and a documented appeal path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-14 md:mt-20">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl md:text-3xl">
                    {uc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-2">
                      {uc.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] text-bone/40 mb-4">
                      <span>{uc.applicant}</span>
                      <span>&rarr;</span>
                      <span>{uc.authority}</span>
                    </div>
                    <p className="text-sm md:text-base text-bone/70 leading-relaxed mb-4">
                      {uc.example}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1">
                      <span className="opacity-60">Typical impact:</span>
                      <span className="font-medium">{uc.timeVs}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS — dark section */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Why din.org
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-16">
            Built for decisions that must hold up to scrutiny.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Neutral by design",
                body: "No office politics, no backlog pressure, no favourites. AI reasoning grounded in the criteria you define — applied identically to every applicant.",
              },
              {
                title: "Full audit trail",
                body: "Every input hashed. Every reasoning step logged. Every decision cited and explained. Ready for internal review, public scrutiny, or legal challenge.",
              },
              {
                title: "Hours, not months",
                body: "What traditionally takes weeks or months of human review completes in hours. Applicants get decisions while the matter is still relevant.",
              },
              {
                title: "Human appeal built in",
                body: "Any decision can be appealed to a panel of 1, 3, 5, or 7 human experts. AI handles the volume; humans handle the edge cases and appeals.",
              },
              {
                title: "Structurally consistent",
                body: "The 1000th applicant is evaluated on the same criteria as the 1st. No fatigue, no drift, no hidden bias.",
              },
              {
                title: "Configurable per domain",
                body: "Same engine, vertical-specific evaluation criteria, evidence categories, expert inputs, and appeal mechanics. Your authority's rules — applied faithfully.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8"
              >
                <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-bone/70 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Work with us
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl leading-[0.95]">
            Have a decision process that needs fairness at scale?
          </h2>
          <p className="mt-8 text-lg md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            We&apos;re working with selected partners — insurers, public agencies,
            funding bodies, licensing authorities, competition organisers — to
            bring this engine to their fields.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              Request a pilot
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/enterprise"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink px-6 py-4 text-base font-medium hover:bg-ink hover:text-bone transition-colors"
            >
              For enterprise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
