import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "EU AI Act and Arbitration: What Changes on August 2, 2026 | din.org",
  description:
    "On August 2, 2026, the EU AI Act's high-risk obligations take effect. AI arbitration falls squarely in scope. What platforms must do to stay enforceable — a practical briefing.",
  keywords: [
    "EU AI Act arbitration",
    "EU AI Act August 2 2026",
    "AI arbitration compliance",
    "high-risk AI judicial",
    "AI Act Annex III arbitration",
    "AI arbitration enforceability",
  ],
  alternates: { canonical: "https://din.org/eu-ai-act-arbitration" },
  openGraph: {
    type: "article",
    title: "EU AI Act and Arbitration: What Changes on August 2, 2026",
    description:
      "High-risk obligations take effect for AI in judicial and arbitration proceedings. Practical briefing on what platforms must do.",
    url: "https://din.org/eu-ai-act-arbitration",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EU AI Act and Arbitration: What Changes on August 2, 2026",
  description:
    "On August 2, 2026, the EU AI Act's high-risk obligations take effect. AI arbitration is in scope. What platforms must do to stay enforceable.",
  author: { "@type": "Organization", name: "din.org" },
  publisher: {
    "@type": "Organization",
    name: "din.org",
    url: "https://din.org",
  },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: "https://din.org/eu-ai-act-arbitration",
  about: [
    { "@type": "Thing", name: "EU AI Act" },
    { "@type": "Thing", name: "Arbitration" },
    { "@type": "Thing", name: "AI regulation" },
  ],
};

export default function EuAiActArbitrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full bg-accent/20 text-accent text-xs uppercase tracking-wider px-3 py-1">
              Regulation
            </span>
            <span className="text-xs text-bone/50">
              23 April 2026 · 8-minute read
            </span>
          </div>
          <h1 className="display text-3xl md:text-6xl leading-[1.05] font-semibold">
            EU AI Act and arbitration: what changes on August 2, 2026.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            The EU AI Act&apos;s high-risk obligations take effect on August 2,
            2026. AI arbitration is squarely in scope. A practical briefing on
            what platforms must do to keep their awards enforceable — and what
            it means for parties considering AI-assisted resolution.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-4">
            The short version
          </p>
          <p className="display text-xl md:text-3xl font-semibold leading-[1.3]">
            If an AI arbitration platform operates in the EU, issues
            EU-enforceable awards, or serves EU parties, it becomes subject to
            the AI Act&apos;s high-risk regime on August 2, 2026. That means
            documented risk management, human oversight, logging, transparency
            to parties, and a conformity assessment. Non-compliant awards risk
            being unenforceable in EU courts. Platforms that meet the bar will
            have a clear competitive advantage.
          </p>
        </div>
      </section>

      {/* BODY */}
      <article className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl prose prose-invert max-w-none">
          <Section title="Why arbitration is in scope">
            <p>
              Annex III of the EU AI Act lists AI systems classified as{" "}
              <strong className="text-bone">high-risk</strong>. Point 8(a)
              covers AI systems &ldquo;intended to be used by a judicial
              authority or on its behalf to assist a judicial authority in
              researching and interpreting facts and the law and in applying
              the law to a concrete set of facts.&rdquo;
            </p>
            <p>
              The European Commission&apos;s explanatory material and emerging
              scholarship (see{" "}
              <a
                href="https://www.cambridge.org/core/product/7CD459F9C93F75966289AF385E9546B9"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                Cambridge&apos;s &ldquo;Clashing Frameworks&rdquo;
              </a>{" "}
              and the{" "}
              <a
                href="https://conflictoflaws.net/2025/ai-in-arbitration-will-the-eu-ai-act-stand-in-the-way-of-enforcement/"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                Conflict of Laws analysis
              </a>
              ) make clear that arbitration tribunals, functioning as
              quasi-judicial authorities, are caught. AI systems that help
              tribunals weigh evidence, draft awards, or examine witnesses fall
              under the high-risk regime.
            </p>
            <p>
              This is not speculative. The{" "}
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                Commission&apos;s published timeline
              </a>{" "}
              confirms <strong className="text-bone">August 2, 2026</strong> as
              the date the majority of high-risk obligations become
              enforceable.
            </p>
          </Section>

          <Section title="What platforms must do by August 2">
            <p>
              Compliance is multi-layered. A properly-run AI arbitration
              platform needs:
            </p>
            <ol>
              <li>
                <strong className="text-bone">Risk management system</strong>{" "}
                (Article 9): continuous identification, analysis, evaluation,
                and mitigation of risks to fundamental rights throughout the
                lifecycle.
              </li>
              <li>
                <strong className="text-bone">Data governance</strong>{" "}
                (Article 10): datasets used to train, validate, and test the
                model must meet quality standards and be documented.
              </li>
              <li>
                <strong className="text-bone">Technical documentation</strong>{" "}
                (Article 11): detailed, up-to-date documentation demonstrating
                compliance, available to authorities on request.
              </li>
              <li>
                <strong className="text-bone">Automatic logging</strong>{" "}
                (Article 12): every inference that affects a ruling must be
                logged in a way that supports auditability.
              </li>
              <li>
                <strong className="text-bone">Transparency to parties</strong>{" "}
                (Article 13): parties must receive clear information about the
                system&apos;s capabilities, limitations, and how its outputs
                are used.
              </li>
              <li>
                <strong className="text-bone">Human oversight</strong>{" "}
                (Article 14): natural persons must be able to monitor, override,
                or refuse to apply the AI&apos;s output. This is central to
                arbitration — a pure AI award with no meaningful human recourse
                will struggle.
              </li>
              <li>
                <strong className="text-bone">Accuracy, robustness, cybersecurity</strong>{" "}
                (Article 15): demonstrable performance benchmarks and resilience
                to adversarial inputs.
              </li>
              <li>
                <strong className="text-bone">Conformity assessment</strong>{" "}
                (Article 43): the platform must go through either internal
                control or a notified body before placing the system on the
                market.
              </li>
            </ol>
          </Section>

          <Section title="The enforceability question">
            <p>
              This is where the stakes get sharpest. An arbitration award is
              ordinarily enforceable across 170+ countries via the{" "}
              <strong className="text-bone">1958 New York Convention</strong>.
              But under Article V(2)(b), a court may refuse enforcement if the
              award would be contrary to the public policy of the enforcing
              state.
            </p>
            <p>
              If an EU court finds that an AI system used in the arbitration
              failed to meet the AI Act&apos;s high-risk requirements — for
              example, no meaningful human oversight, or no disclosure to the
              parties — it may treat that as a public policy violation and
              refuse enforcement. Cambridge&apos;s analysis of &ldquo;clashing
              frameworks&rdquo; flags this as a concrete, imminent risk.
            </p>
            <p>
              Practical consequence: an AI arbitration award that cost €500 to
              produce but can&apos;t be enforced is worth €0. Compliance is not
              a theoretical concern — it determines whether the platform
              actually delivers value.
            </p>
          </Section>

          <Section title="What this means for parties choosing a platform">
            <p>
              If you&apos;re a company, insurer, or claimant considering AI
              arbitration, the questions to ask a platform before signing up:
            </p>
            <ul>
              <li>
                Can you show me your conformity-assessment documentation for
                the EU AI Act?
              </li>
              <li>
                Who is the human arbitrator or panel exercising meaningful
                oversight under Article 14?
              </li>
              <li>
                What audit log do you keep of each inference that contributed
                to the ruling, and how long is it retained?
              </li>
              <li>
                Do you disclose to both parties the model(s) used, their known
                limitations, and the specific role they played in the award?
              </li>
              <li>
                Is there a path to a purely human appeal, and how does it work?
              </li>
              <li>
                Where is the award seat, and how have you confirmed it will
                enforce under your compliance posture?
              </li>
            </ul>
            <p>
              Platforms that can answer these questions crisply will
              differentiate themselves in the next 24 months. Platforms that
              can&apos;t will find their awards challenged at the enforcement
              stage.
            </p>
          </Section>

          <Section title="How din.org is preparing">
            <p>
              At din.org we&apos;re designing our platform to clear the AI
              Act&apos;s high-risk bar, not to merely survive it:
            </p>
            <ul>
              <li>
                <strong className="text-bone">Built-in audit log</strong>:
                every AI decision stores the prompt version, model version,
                retrieved sources, and input context. Every ruling is
                reproducible.
              </li>
              <li>
                <strong className="text-bone">Explicit human oversight</strong>:
                every case includes a mandatory human-appeal path to panels of
                1, 3, 5, or 7 judges. AI handles volume; humans handle appeals
                and edge cases.
              </li>
              <li>
                <strong className="text-bone">Transparency by design</strong>:
                both parties see exactly what the AI was asked, what it
                responded with, and which evidence was weighted. No
                black-box rulings.
              </li>
              <li>
                <strong className="text-bone">Per-jurisdiction legal opinions</strong>:
                Austrian enforceability opinion in progress, with German and
                Swiss opinions to follow. Each confirms the compliance posture
                under local arbitration law.
              </li>
              <li>
                <strong className="text-bone">ISO 27001 and SOC 2</strong>{" "}
                tracks underway to satisfy the data governance and cybersecurity
                requirements.
              </li>
              <li>
                <strong className="text-bone">Bias testing as a regression suite</strong>:
                name-swap and demographic-swap tests run on every model update,
                with results published in our quarterly transparency report.
              </li>
            </ul>
          </Section>

          <Section title="The bottom line">
            <p>
              August 2, 2026 is not an end date. It&apos;s a filter. AI
              arbitration platforms that treat the AI Act as a checklist will
              muddle through. Platforms that treat it as a design brief — an
              opportunity to articulate why AI-assisted dispute resolution can
              be <em>more</em> transparent, <em>more</em> consistent, and{" "}
              <em>more</em> auditable than traditional arbitration — will set
              the standard for the next decade.
            </p>
            <p>
              Compliance isn&apos;t the cost of doing business in this category.
              It is the business.
            </p>
          </Section>
        </div>
      </article>

      {/* FURTHER READING */}
      <section className="reveal px-6 md:px-10 py-16 md:py-24 bg-bone/5">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Further reading
          </p>
          <ul className="space-y-4 text-bone/80">
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                European Commission — AI Act regulatory framework and timeline
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.cambridge.org/core/product/7CD459F9C93F75966289AF385E9546B9"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                Cambridge — Clashing Frameworks: the EU AI Act and Arbitration
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://conflictoflaws.net/2025/ai-in-arbitration-will-the-eu-ai-act-stand-in-the-way-of-enforcement/"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                Conflict of Laws — Will the EU AI Act Stand in the Way of
                Enforcement?
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.adr.org/ai-arbitrator/"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                AAA — AI Arbitrator platform
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="display text-3xl md:text-5xl font-semibold max-w-3xl leading-[1.1]">
            Building AI arbitration that meets the bar.
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-80 max-w-3xl">
            din.org is the AI arbitration platform designed around EU AI Act
            compliance, full audit trails, and human-appeal panels built in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              See how it works
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="display text-2xl md:text-4xl font-semibold text-bone mb-6 not-prose">
        {title}
      </h2>
      <div className="text-base md:text-lg text-bone/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
