import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — din.org",
  description:
    "Learn about din.org, the international AI-powered arbitration platform delivering fair, fast, and affordable dispute resolution.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a din.org ruling legally binding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. din.org operates as an arbitration platform. When both parties agree to participate, the resulting ruling is binding under international arbitration conventions, including the New York Convention.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a lawyer to use din.org?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every participant is assigned an AI lawyer within the system that guides you through the entire process.",
      },
    },
    {
      "@type": "Question",
      name: "Can I appeal an AI ruling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can request a second ruling that involves human arbiters. You can add up to 7 human arbiters to the appeal panel.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI judge make decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI judge analyzes all submitted evidence, reviews applicable law, and conducts live cross-examination of all parties via video. It produces a written, cited ruling with full legal reasoning.",
      },
    },
    {
      "@type": "Question",
      name: "What types of disputes can din.org handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "din.org handles commercial disputes, contract disagreements, service disputes, payment conflicts, and other civil matters. It is not designed for criminal cases.",
      },
    },
    {
      "@type": "Question",
      name: "How is my data protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Case information is stored in SOC 2 compliant data centers.",
      },
    },
  ],
};

export default function AboutPage() {
  const features: { title: string; body: string; detail: string }[] = [
    {
      title: "Fast Resolution",
      body: "AI-powered analysis speeds up the arbitration process",
      detail:
        "Most cases reach a fully reasoned ruling within 24 hours of evidence submission.",
    },
    {
      title: "Secure & Confidential",
      body: "Bank-level encryption protects your sensitive information",
      detail:
        "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 compliant infrastructure.",
    },
    {
      title: "International Reach",
      body: "Resolve cross-border disputes with ease",
      detail:
        "No geographic barriers — parties from any country can participate in proceedings.",
    },
    {
      title: "Save up to 99% of Cost",
      body: "Dramatically reduce arbitration costs with AI efficiency",
      detail:
        "A full case costs as little as $15, compared to $91,000 median for traditional litigation.",
    },
    {
      title: "Video Hearing of Witnesses",
      body: "Conduct witness hearings remotely via video conferencing",
      detail:
        "Live simultaneous cross-examination ensures both parties face questioning at the same time.",
    },
    {
      title: "Multiple AI Expertises",
      body: "Get expertises from various AIs of your choice",
      detail:
        "Choose from legal, financial, technical, or industry-specific AI analysis for your case.",
    },
    {
      title: "Human Oversight",
      body: "Human oversight ensures validity in national courts",
      detail:
        "Appeal any ruling by adding up to 7 human arbiters for a binding second opinion.",
    },
    {
      title: "ID Check of All Participants",
      body: "Verify identity of all parties for enhanced security",
      detail:
        "Government-issued ID verification prevents fraud and ensures accountability.",
    },
    {
      title: "Avoid Personal Bias",
      body: "AI-driven decisions reduce subjective judgment",
      detail:
        "No fatigue, no prejudice, no political pressure — every decision is evidence-based and cited.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            About
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold">
            About DIN.ORG
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            International AI-powered arbitration platform delivering fair,
            fast, and affordable dispute resolution
          </p>
        </div>
      </section>

      {/* Why Choose — icon grid (on.energy financing style) */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Why choose din.org
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Built for the future of dispute resolution.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
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

      {/* Mission — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Mission
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold">
            Build the first court that scales to everyone.
          </h2>
          <p className="mt-10 text-lg md:text-xl max-w-3xl opacity-80">
            By combining modern reasoning models, transparent citation, and a
            process modeled on centuries of common-law procedure, din.org can
            hear a dispute between neighbors in one hour and an international
            contract claim the next.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl">
          <div>
            <h3 className="display text-3xl md:text-5xl font-semibold mb-6">
              Principles
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-bone/80">
              <li>· Every ruling is reasoned and cited.</li>
              <li>
                · The process is the same for a $50 dispute and a $50M one.
              </li>
              <li>· Parties own their data; the court does not.</li>
              <li>· Appeal is always available.</li>
              <li>
                · Humans remain in the loop wherever a party requests it.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="display text-3xl md:text-5xl font-semibold mb-6">
              What we are not
            </h3>
            <p className="text-base md:text-lg text-bone/80">
              din.org is not a chatbot, not a lawyer, and not a replacement for
              state courts where state courts already work. It is an independent
              forum for dispute resolution, designed for the billions of cases
              that never see a judge today.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Team
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            The people behind din.org
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
                Serial entrepreneur and inventor based in Austria. Former
                operator of the world&rsquo;s largest eBay power-selling
                enterprise, holder of international patents in electronic payment
                systems and trading technology, and active in crypto since 2013.
                Author of multiple books and a recognized contemporary artist.
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
                Web3 growth strategist and DAO governance expert based in
                Germany. Co-Founder &amp; CGO at Upptic, driving 50M+ players
                annually. Former Senior GameFi Researcher at Cointelegraph
                Research, with deep expertise in decentralization and legal
                frameworks for digital organizations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Frequently asked questions.
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is a din.org ruling legally binding?",
                a: "Yes. din.org operates as an arbitration platform. When both parties agree to participate, the resulting ruling is binding under international arbitration conventions, including the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards.",
              },
              {
                q: "Do I need a lawyer to use din.org?",
                a: "No. Every participant is assigned an AI lawyer within the system that guides you through the entire process — from preparing your case to organizing evidence and understanding procedure. You may bring your own legal counsel if you prefer, but it is not required.",
              },
              {
                q: "Which jurisdictions does din.org cover?",
                a: "din.org is available to parties worldwide, with the exception that parties located in Israel (where din.org is headquartered) are not eligible as claimants or respondents, to ensure neutrality.",
              },
              {
                q: "What happens if the other party refuses to participate?",
                a: "Participation is voluntary. The other party must agree to resolve the dispute through din.org. If they decline, the process cannot proceed. We notify the other party and give them a reasonable window to respond.",
              },
              {
                q: "Can I appeal an AI ruling?",
                a: "Yes. If you disagree with the AI ruling, you can request a second ruling that involves human arbiters. You can add up to 7 human arbiters to the appeal panel at $180 each.",
              },
              {
                q: "How does the AI judge make decisions?",
                a: "The AI judge analyzes all submitted evidence, reviews applicable law, and conducts live cross-examination of all parties via video. It produces a written, cited ruling with full legal reasoning. The judge is intentionally AI — no human intervention in the decision, but human oversight at every stage.",
              },
              {
                q: "What types of disputes can din.org handle?",
                a: "din.org handles commercial disputes, contract disagreements, service disputes, payment conflicts, and other civil matters. It is not designed for criminal cases or matters that require state court jurisdiction by law.",
              },
              {
                q: "How is my data protected?",
                a: "All data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Case information is stored in SOC 2 compliant data centers with strict access controls. We do not sell or share your data.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {faq.q}
                </h3>
                <p className="text-bone/70 text-base md:text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
