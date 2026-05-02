import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do I Need a Lawyer for din.org? | Lawyer Counsel",
  description:
    "Honest answer: for most cases, the AI lawyer is enough. For disputes above €15,000 or strategically complex matters, we recommend involving a human lawyer to protect your position in subsequent proceedings.",
  keywords: [
    "lawyer for arbitration",
    "do I need a lawyer",
    "AI arbitration with lawyer",
    "arbitration legal counsel",
    "din.org lawyer recommendation",
  ],
  alternates: {
    canonical: "https://din.org/lawyer-counsel",
    languages: {
      en: "https://din.org/lawyer-counsel",
      de: "https://din.org/de/anwaltliche-vertretung",
      "x-default": "https://din.org/lawyer-counsel",
    },
  },
  openGraph: {
    type: "article",
    title: "Do I Need a Lawyer for din.org?",
    description:
      "For most cases the AI lawyer is enough. For disputes above €15,000 or strategically complex matters, we recommend a human lawyer.",
    url: "https://din.org/lawyer-counsel",
  },
};

const scenarios = [
  {
    icon: "◉",
    title: "High dispute value (>€15,000)",
    body:
      "The economic stakes warrant a second opinion. A lawyer evaluates settlement offers against likely litigation outcomes, not just the AI's reasoning.",
  },
  {
    icon: "◈",
    title: "Cross-border or multi-jurisdictional",
    body:
      "When the dispute touches multiple legal systems — Austrian SHA + German enforcement, EU + US, etc. — local procedural expertise prevents costly missteps.",
  },
  {
    icon: "◇",
    title: "Statute of limitations & counterclaims",
    body:
      "A lawyer ensures parallel claims and counterclaims are filed on time, and that the din.org process doesn't accidentally consume periods that matter elsewhere.",
  },
  {
    icon: "⊟",
    title: "Regulated industries with disclosure obligations",
    body:
      "Insurance, securities, M&A, healthcare, banking — sectoral disclosure rules can be triggered by what you submit. A lawyer reviews submissions before they go in.",
  },
  {
    icon: "▲",
    title: "Possible escalation to court or appeal",
    body:
      "Statements made in din.org are recorded. If your case may escalate to a state court or to a human-judge appeal panel, a lawyer ensures you don't compromise that future position.",
  },
  {
    icon: "◮",
    title: "Settlement evaluation",
    body:
      "When the AI proposes 'A pays B €X' — is that fair? A lawyer benchmarks against comparable case outcomes in the relevant jurisdiction. Often the difference of weeks of negotiation.",
  },
];

const comparison = [
  ["Drafting clear, structured submissions", "Yes, automatically", "Yes, with strategic framing"],
  ["Walking you through procedure", "Yes", "Yes"],
  ["Researching relevant law", "Yes", "Yes"],
  ["Strategic advice (file or not, when)", "Limited", "Yes"],
  ["Negotiation experience", "Pattern-based", "Practitioner judgement"],
  ["Risk assessment of admissions", "Limited", "Yes"],
  ["Cross-jurisdictional procedure", "General", "Local-law specific"],
  ["Representation if escalates to court", "No", "Yes"],
  ["Cost", "Free (included)", "Engagement fee"],
  ["Availability", "24/7 instant", "By appointment"],
];

export default function LawyerCounselPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Lawyer counsel
          </p>
          <h1 className="display text-4xl md:text-7xl leading-[1.02] font-semibold">
            Do I need a lawyer for din.org?
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            Honest answer. The short version, the long version, and a list of
            recommended firms when the stakes warrant one.
          </p>
        </div>
      </section>

      {/* THE SHORT ANSWER */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            The short answer
          </p>
          <p className="display text-2xl md:text-5xl font-semibold leading-[1.15]">
            For most cases under{" "}
            <span className="underline decoration-2 decoration-ink/30 underline-offset-4">
              €15,000
            </span>
            , the built-in AI lawyer is enough. Above that threshold — or for
            strategically complex disputes — we recommend involving a human
            lawyer alongside.
          </p>
          <p className="mt-8 text-base md:text-lg opacity-80 max-w-3xl">
            Not because din.org won&apos;t deliver a fair ruling. It will. But
            because what you say on din.org is recorded, the threshold for
            future proceedings can be high, and a real lawyer protects your
            position across more dimensions than the AI does.
          </p>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            When a lawyer adds real value
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-14">
            Six situations where it pays.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl md:text-3xl">{s.icon}</div>
                  <div className="flex-1">
                    <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-bone/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Honest comparison
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            What the AI lawyer covers — and what a human lawyer adds.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-bone/20">
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50"></th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-accent">
                    AI lawyer (included)
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/70">
                    Human lawyer (you engage)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {comparison.map(([row, ai, human]) => (
                  <tr key={row} className="border-b border-bone/10">
                    <td className="p-4 font-medium text-bone/90">{row}</td>
                    <td className="p-4 text-accent">{ai}</td>
                    <td className="p-4 text-bone/70">{human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm md:text-base text-bone/60 max-w-3xl leading-relaxed">
            Both can run in parallel. Many users have the AI lawyer handle
            day-to-day procedure while a human lawyer reviews key submissions
            and advises on strategy.
          </p>
        </div>
      </section>

      {/* RECOMMENDED FIRMS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Recommended firms
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            Law firms experienced with AI arbitration.
          </h2>

          <div className="rounded-3xl border border-dashed border-bone/20 bg-bone/5 p-10 md:p-14 text-center">
            <p className="display text-2xl md:text-3xl font-semibold text-bone/80 mb-4">
              Coming soon
            </p>
            <p className="text-base md:text-lg text-bone/60 max-w-2xl mx-auto leading-relaxed mb-8">
              We are building a list of vetted law firms in DACH and beyond,
              experienced with online arbitration and the EU AI Act regime —
              ready to assist din.org users with strategic counsel.
            </p>
            <p className="text-sm text-bone/55 mb-8">
              Selection criteria: arbitration experience, AI-act familiarity,
              clear fee structure, response time commitments.
            </p>
            <a
              href="mailto:partnerships@din.org?subject=Law%20firm%20listing%20enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Are you a law firm? Apply for listing
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            Common questions about counsel.
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Can I use the AI lawyer AND a human lawyer at the same time?",
                a: "Yes — and many users do. The AI lawyer handles procedural workload (reading evidence, preparing submissions, summarising witness testimony). Your human lawyer reviews critical filings, advises on strategy, and coaches you on positioning. Cost-efficient and protective.",
              },
              {
                q: "Does the other side know if I have a lawyer?",
                a: "By default, no — there's no public marker. If your lawyer participates in proceedings (e.g., joins a video hearing or submits a written argument under their name), it becomes visible to the other party.",
              },
              {
                q: "What if only my opponent has a lawyer and I don't?",
                a: "din.org's design substantially levels this. The AI lawyer ensures both sides produce structured, well-organised submissions. That said, for strategic decisions (counterclaims, settlement evaluation, escalation choices), a real lawyer remains an advantage. For high-stakes asymmetric cases, we strongly recommend you engage one too.",
              },
              {
                q: "Can my lawyer attend the video hearings?",
                a: "Yes. Lawyers can join witness video sessions as observers (silent participants) or as active counsel for their party. They can also coach you between rounds — useful for the inter-round analysis windows.",
              },
              {
                q: "Will din.org rulings hold up if my lawyer later wants to challenge them in court?",
                a: "din.org rulings are issued under arbitration framework and enforceable under the New York Convention 1958 in 170+ countries. Grounds for setting aside in national courts are narrow and procedural (not substantive). A lawyer ensures the procedural posture is preserved should you ever wish to challenge.",
              },
              {
                q: "How do I find a lawyer who actually understands AI arbitration?",
                a: "Most arbitration lawyers are still building familiarity with AI-led proceedings. Until our recommended-firms list goes live, look for lawyers experienced in: institutional arbitration (AAA, ICC, VIAC, DIS), EU AI Act compliance, and online dispute resolution. Ask whether they've handled an AAA AI Arbitrator case yet.",
              },
              {
                q: "Are lawyer fees covered by the din.org token packages?",
                a: "No. Token packages cover platform usage only — the AI lawyer is included free as part of the platform. External lawyers are engaged separately on their own terms (hourly, fixed fee, retainer). Most arbitration-experienced firms quote fixed fees per phase for din.org cases, given the platform's structured timeline.",
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

      {/* DUAL CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-6xl">
          <h2 className="display text-3xl md:text-5xl font-semibold max-w-3xl mb-12">
            Two paths from here.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-ink text-bone p-8 md:p-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-4">
                I need a lawyer
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                For users
              </h3>
              <p className="text-base text-bone/70 leading-relaxed mb-6">
                Tell us about your case. Once our recommended firms list is
                live, we will introduce you to suitable counsel. In the
                meantime, our team can connect you with arbitration-experienced
                lawyers in your jurisdiction.
              </p>
              <a
                href="mailto:counsel@din.org?subject=Lawyer%20referral%20request"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
              >
                Request a referral
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="rounded-3xl bg-ink text-bone p-8 md:p-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-4">
                I am a lawyer
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                For law firms
              </h3>
              <p className="text-base text-bone/70 leading-relaxed mb-6">
                Apply to join our recommended-firms list. Strategic
                partnerships available for firms experienced with arbitration,
                AI-act compliance, and cross-border commercial disputes.
              </p>
              <a
                href="mailto:partnerships@din.org?subject=Law%20firm%20partnership"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
              >
                Partner with din.org
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="reveal px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-base md:text-lg text-bone/60 leading-relaxed">
            Need help filing? See{" "}
            <Link href="/how-it-works" className="text-accent hover:text-accent-hot">
              how it works
            </Link>{" "}
            or read{" "}
            <Link href="/what-is-arbitration" className="text-accent hover:text-accent-hot">
              what arbitration is
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
