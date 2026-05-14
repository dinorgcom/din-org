import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./decisions.css";

const display = Newsreader({
  variable: "--font-d-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Inter({
  variable: "--font-d-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-d-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "din.org — The decision endpoint",
  description:
    "Outsource the verdict. din.org renders reasoned, auditable rulings on disputes, claims, and decisions you no longer want to make in-house — from a contract dispute to a public procurement award. API-first decision infrastructure with Big Four audit and human-judge appeal panels.",
  alternates: {
    canonical: "https://din.org",
    languages: {
      en: "https://din.org",
      de: "https://din.org/de",
      "x-default": "https://din.org",
    },
  },
  openGraph: {
    type: "website",
    title: "din.org — The decision endpoint",
    description:
      "Outsource the verdict, keep the relationship. Reasoned, auditable rulings as an API.",
    url: "https://din.org",
  },
};

const LOGIN_URL = "https://app.din.org/login";

export default function DecisionEndpointHome() {
  return (
    <div
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      {/* TOP BAR */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 md:px-10 py-6">
          <Link
            href="/"
            className="d-display text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: "var(--d-bone)" }}
          >
            din.org
          </Link>
          <nav
            className="hidden md:flex items-center gap-8 text-sm"
            style={{ color: "rgba(245,241,234,0.75)" }}
          >
            <a href="#principles" className="hover:opacity-100 transition-opacity">
              Principles
            </a>
            <a href="#how" className="hover:opacity-100 transition-opacity">
              How it works
            </a>
            <a href="#who" className="hover:opacity-100 transition-opacity">
              Who uses it
            </a>
            <a href="#file" className="hover:opacity-100 transition-opacity">
              File a case
            </a>
            <a href="#pricing" className="hover:opacity-100 transition-opacity">
              Pricing
            </a>
            <a
              href={LOGIN_URL}
              className="hover:opacity-100 transition-opacity"
              style={{ color: "rgba(245,241,234,0.65)" }}
            >
              Login
            </a>
            <a
              href="#access"
              className="rounded-full border px-5 py-2 transition-colors"
              style={{
                borderColor: "rgba(245,241,234,0.3)",
                color: "var(--d-bone)",
              }}
            >
              Request access
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/vor-gericht.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/vor-gericht.webm" type="video/webm" />
          <source src="/videos/vor-gericht.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.55) 0%, rgba(20,19,15,0.4) 45%, rgba(20,19,15,0.88) 100%)",
          }}
        />
        <div className="d-grain" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 md:pb-28 pt-40">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "rgba(245,241,234,0.7)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "rgba(245,241,234,0.5)" }}
              />
              The decision endpoint
            </p>

            <h1
              className="d-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] max-w-[16ch]"
              style={{ color: "var(--d-bone)" }}
            >
              Outsource the verdict.
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                Keep the relationship.
              </span>
            </h1>

            <p
              className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              din.org renders reasoned, auditable rulings on the disputes,
              claims, and decisions you no longer want to make in-house — from
              a contract dispute between two people to a marketplace refund to
              a public procurement award. File the case. Receive the verdict.
              Ship the outcome.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#access"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-bone)",
                  color: "var(--d-ink)",
                }}
              >
                Request access
                <span aria-hidden>→</span>
              </a>
              <a
                href="#sandbox"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "rgba(245,241,234,0.4)",
                  color: "var(--d-bone)",
                }}
              >
                Run a case in the sandbox
              </a>
            </div>

            <p
              className="mt-16 text-xs uppercase tracking-[0.25em] max-w-2xl"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              Used internally by din.org&apos;s own AI arbitration tribunal ·
              In design with public-sector pilots, marketplaces, insurers
              &amp; institutional tribunals
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        className="d-rule-top px-6 md:px-10 py-10 md:py-14"
        style={{ borderBottom: "1px solid var(--d-line)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-8 text-center"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Pilot partners and reference implementations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 items-center">
            {[
              "Public sector pilot",
              "Insurer · DACH",
              "Marketplace · EU",
              "Arbitration body",
              "B2B platform",
            ].map((label) => (
              <div
                key={label}
                className="d-display text-center text-base md:text-lg italic"
                style={{ color: "var(--d-ink-muted)", opacity: 0.55 }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES */}
      <section
        id="principles"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            Three principles. In this order.
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[26ch] leading-[1.05] mb-16">
            Every ruling is derived from three principles —{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              weighed openly, recorded for audit.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                num: "I",
                eyebrow: "The law",
                title: "What is the correct decision under the applicable rules?",
                body:
                  "Statute, contract, regulation, platform policy — whichever rule set governs. The first question is always whether the ruling is defensible on legal grounds. If a higher court reviewed it, would it stand?",
              },
              {
                num: "II",
                eyebrow: "The parties",
                title: "What is the best outcome for the people in this dispute?",
                body:
                  "Within what the law allows, what serves the actual humans involved — the buyer and the seller, the claimant and the insurer, the citizen and the agency? Fairness is not the same as formal correctness.",
              },
              {
                num: "III",
                eyebrow: "The whole",
                title:
                  "What is the best decision for the wider community affected?",
                body:
                  "Decisions create precedent. A ruling that punishes one bad actor changes incentives for thousands. The third principle keeps every individual ruling tethered to the system it helps shape.",
              },
            ].map((p) => (
              <article key={p.num} className="flex flex-col">
                <p
                  className="d-display italic text-6xl md:text-7xl mb-5 leading-none"
                  style={{ color: "var(--d-accent)" }}
                >
                  {p.num}
                </p>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-4"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="d-display text-xl md:text-2xl leading-[1.2] mb-4"
                  style={{ color: "var(--d-ink)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[15px] md:text-base leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>

          <p
            className="mt-16 max-w-2xl text-base md:text-lg leading-relaxed font-light italic"
            style={{ color: "var(--d-ink-muted)" }}
          >
            The order matters. Law first protects legal defensibility. Parties
            second protects fairness. Society third anchors every ruling to the
            world it lives in.
          </p>
        </div>
      </section>

      {/* FOR YOUR OWN DISPUTE — direct filing */}
      <section
        id="file"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
              />
              For your own dispute
            </p>
            <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] mb-8">
              The endpoint is also{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                a tribunal you can use yourself.
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              A contract dispute. A defective product. A landlord refusing to
              return a deposit. An inheritance disagreement. A B2B contract
              that&apos;s going sideways. File it directly with din.org — same
              engine, same three principles, same Big Four audit, same appeal
              path. No API integration required.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-light mb-10"
              style={{ color: "var(--d-ink-muted)" }}
            >
              You invite the other party. Both submit evidence. The engine
              renders a reasoned ruling, days — not years. Either side can
              appeal to a human-judge panel. Enforceable internationally under
              the New York Convention 1958, recognized in 170+ jurisdictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/file-a-case"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-ink)",
                  color: "var(--d-bone)",
                }}
              >
                File a case
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "var(--d-ink)",
                  color: "var(--d-ink)",
                }}
              >
                How filing works
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "var(--d-bone)",
                border: "1px solid var(--d-line)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: "var(--d-accent)" }}
              >
                Civil disputes — direct route
              </p>
              <ul
                className="space-y-3 text-[15px] leading-relaxed font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Contract disputes (B2C, B2B)
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Tenancy &amp; landlord matters
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Defective-goods claims
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Inheritance &amp; family settlements
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Construction &amp; service work
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Cross-border online transactions
                </li>
                <li>
                  <span
                    className="d-mono text-[11px] mr-3"
                    style={{ color: "var(--d-accent)" }}
                  >
                    ·
                  </span>
                  Small-claims arbitration
                </li>
              </ul>
              <p
                className="mt-8 pt-6 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--d-ink-muted)",
                  borderTop: "1px solid var(--d-line)",
                }}
              >
                Both parties must consent to arbitration · or a clause must exist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO USES IT — four pillars, public sector first */}
      <section
        id="who"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            Who uses it
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[28ch] leading-[1.05] mb-16">
            Organizations that make decisions{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              they&apos;d rather not own.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {[
              {
                eyebrow: "Public sector & high-integrity decisions",
                badge: "In development with municipal pilots",
                title:
                  "Tenders, grants, building permits, public-office vetting.",
                body:
                  "The decisions where conflict of interest matters more than speed. Every input recorded, every step auditable, every ruling appealable. Designed for jurisdictions where the perception of fairness is as critical as fairness itself — and where the absence of an independent third party historically distorts public outcomes.",
                vol: "Typical use: 10 — 5,000 decisions / month",
              },
              {
                eyebrow: "Insurance & banks",
                badge: "Pilots in DACH",
                title:
                  "Claim adjudication, complaint review, fraud-flag escalation.",
                body:
                  "Adjusters use din.org for first-pass decisions on contested claims. The reasoned ruling becomes the artifact the customer sees — not the adjuster&apos;s name. Speeds up cycle time, removes the personal-blame surface, gives the regulator a paper trail.",
                vol: "Typical use: 1,000 — 250,000 decisions / month",
              },
              {
                eyebrow: "Marketplaces & platforms",
                badge: "Pilots in design",
                title:
                  "Buyer-seller disputes, refunds, content-moderation appeals.",
                body:
                  "Trust &amp; safety teams escalate edge cases to din.org instead of arguing with two upset users. Every refund denial, every seller suspension comes with a reasoned, third-party ruling the user can read and challenge — not a customer-service form letter.",
                vol: "Typical use: 200 — 50,000 decisions / month",
              },
              {
                eyebrow: "Institutions & tribunals",
                badge: "Reference partners",
                title:
                  "Arbitration bodies, ombudsmen, grant committees, sports tribunals.",
                body:
                  "Existing institutions integrate din.org as their AI tier — for triage, first-instance rulings, parallel sanity-checks against human decisions. The institution retains brand and authority; din.org provides the engine, speed, and audit trail.",
                vol: "Typical use: 50 — 5,000 decisions / month",
              },
            ].map((p) => (
              <article
                key={p.eyebrow}
                className="rounded-2xl p-8 md:p-10 flex flex-col"
                style={{
                  background: "var(--d-bone)",
                  border: "1px solid var(--d-line)",
                }}
              >
                <div className="flex items-start justify-between mb-5 gap-3">
                  <p
                    className="text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: "var(--d-accent)" }}
                  >
                    {p.eyebrow}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] whitespace-nowrap"
                    style={{
                      color: "var(--d-ink-muted)",
                      borderLeft: "1px solid var(--d-line)",
                      paddingLeft: "0.75rem",
                    }}
                  >
                    {p.badge}
                  </p>
                </div>
                <h3
                  className="d-display text-2xl md:text-3xl leading-[1.15] mb-5"
                  style={{ color: "var(--d-ink)" }}
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="text-base md:text-[17px] leading-relaxed font-light mb-6"
                  style={{ color: "var(--d-ink-muted)" }}
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
                <p
                  className="d-mono text-[11px] uppercase tracking-wider mt-auto pt-4"
                  style={{
                    color: "var(--d-ink-muted)",
                    borderTop: "1px solid var(--d-line)",
                  }}
                >
                  {p.vol}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW A DECISION LOOKS — API code split */}
      <section
        id="how"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "rgba(245,241,234,0.6)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.5)" }}
            />
            How a decision looks
          </p>
          <h2
            className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-16"
            style={{ color: "var(--d-bone)" }}
          >
            One endpoint.{" "}
            <span
              className="italic font-light"
              style={{ color: "rgba(245,241,234,0.75)" }}
            >
              One reasoned ruling.
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--d-ink-soft)",
                border: "1px solid rgba(245,241,234,0.08)",
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "rgba(245,241,234,0.55)",
                  borderBottom: "1px solid rgba(245,241,234,0.06)",
                }}
              >
                <span>Request · POST /v1/decisions</span>
                <span style={{ color: "var(--d-accent-hot)" }}>● live</span>
              </div>
              <pre
                className="d-mono text-[12.5px] md:text-[13px] leading-[1.65] p-5 md:p-7 overflow-x-auto"
                style={{ color: "rgba(245,241,234,0.92)" }}
              >
{`curl https://api.din.org/v1/decisions \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "framework": "marketplace_dispute",
    "jurisdiction": "DE",
    "claim": {
      "type": "refund_request",
      "amount": { "value": 1240, "currency": "EUR" }
    },
    "parties": [
      { "role": "buyer",  "id": "u_2k9b8m" },
      { "role": "seller", "id": "m_71xx3z" }
    ],
    "submissions": [
      { "from": "buyer",  "text": "Headphones arrived with..." },
      { "from": "seller", "text": "Item matches the listing..." }
    ],
    "evidence": [
      { "type": "image",           "uri": "..." },
      { "type": "chat_transcript", "uri": "..." },
      { "type": "listing_snapshot","uri": "..." }
    ]
  }'`}
              </pre>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--d-ink-soft)",
                border: "1px solid rgba(245,241,234,0.08)",
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "rgba(245,241,234,0.55)",
                  borderBottom: "1px solid rgba(245,241,234,0.06)",
                }}
              >
                <span>Response · 200 OK · 2.3 s</span>
                <span style={{ color: "var(--d-accent-hot)" }}>signed</span>
              </div>
              <pre
                className="d-mono text-[12.5px] md:text-[13px] leading-[1.65] p-5 md:p-7 overflow-x-auto"
                style={{ color: "rgba(245,241,234,0.92)" }}
              >
{`{
  "decision_id": "dec_8h2k4mqzWp0Lt9Rx",
  "ruling": "partial_refund",
  "amount_awarded": {
    "value": 620, "currency": "EUR"
  },
  "principles_applied": {
    "law":     "marketplace_policy_4.2.1, BGB §437",
    "parties": "buyer harm vs. seller good-faith listing",
    "society": "incentive against misrepresentation,
                discouraging stale claims"
  },
  "reasoning": "The listing describes the item as
    'as new — used twice'. Buyer evidence shows
    visible cosmetic wear inconsistent with that
    representation. However, the buyer waited 22
    days before raising a claim, exceeding the
    platform's 14-day clear-defect window.
    A 50 % refund balances the misrepresentation
    against the buyer's delayed escalation.",
  "citations": [
    { "source": "marketplace_policy_4.2.1", "weight": 0.81 },
    { "source": "BGB §437",                  "weight": 0.42 }
  ],
  "confidence": 0.83,
  "appeal_eligible": true,
  "audit_trail_url":
    "https://din.org/audit/dec_8h2k4mqzWp0Lt9Rx",
  "issued_at": "2026-05-13T14:22:09Z"
}`}
              </pre>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                label: "Reasoned",
                body:
                  "Every ruling ships with the chain of reasoning, weighted citations, the three principles weighed against each other, and a confidence score — not a black-box verdict.",
              },
              {
                label: "Auditable",
                body:
                  "Each decision has a signed audit trail URL. Inputs, intermediate steps, and final ruling are reproducible on replay. See &quot;Open to audit&quot; below.",
              },
              {
                label: "Appealable",
                body:
                  "Every ruling is appeal-eligible. Appeals go through a separate human-judge panel — see Pricing.",
              },
            ].map((f) => (
              <div key={f.label}>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: "var(--d-accent-hot)" }}
                >
                  {f.label}
                </p>
                <p
                  className="text-[15px] leading-relaxed font-light"
                  style={{ color: "rgba(245,241,234,0.78)" }}
                  dangerouslySetInnerHTML={{ __html: f.body }}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <a
              href="#sandbox"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
              style={{
                background: "var(--d-bone)",
                color: "var(--d-ink)",
              }}
            >
              Try it in the sandbox
              <span aria-hidden>→</span>
            </a>
            <a
              href="#access"
              className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
              style={{
                borderColor: "rgba(245,241,234,0.4)",
                color: "var(--d-bone)",
              }}
            >
              Request API access
            </a>
          </div>
        </div>
      </section>

      {/* SAME CARE FOR EVERYONE */}
      <section
        className="px-6 md:px-10 py-24 md:py-32"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            The economics of care
          </p>
          <h2 className="d-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] mb-10">
            A €40 dispute receives the same engine{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              as a €40 million one.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-3xl"
            style={{ color: "var(--d-ink-muted)" }}
          >
            No queue priority by case value. No &quot;small cases get shorter
            reasoning.&quot; One decision pipeline, identical rigor, identical
            depth — regardless of who is filing or what is at stake. The
            marginal cost of justice approaches zero. We allocate the same care
            to everyone.
          </p>
        </div>
      </section>

      {/* WHY OUTSOURCE — three pillars + video */}
      <section
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
              />
              Why outsource the verdict
            </p>
            <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] mb-10">
              The decision your team doesn&apos;t want to make{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                is the one you should outsource.
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-12"
              style={{ color: "var(--d-ink-muted)" }}
            >
              An internal &quot;AI decision tool&quot; is still your decision.
              An adjuster, a moderator, a committee, a procurement officer.
              The customer or the citizen still hears it from you. din.org is
              the structural opposite: a third party seen as the source of the
              ruling — with the audit trail, independence, and appeal mechanism
              to back it up.
            </p>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Independent third party",
                  body:
                    "Your decision isn&apos;t your decision anymore. The ruling comes from din.org with a verifiable audit URL the affected party can inspect. You executed; we decided.",
                },
                {
                  num: "02",
                  title: "Auditable end to end",
                  body:
                    "Every input, every intermediate step, every citation is recorded and signed. If a regulator, court, or appeal panel asks for the basis, you hand them a URL — not a deposition.",
                },
                {
                  num: "03",
                  title: "Appeal built in",
                  body:
                    "Every ruling is appeal-eligible. Customers and citizens don&apos;t escalate to your CEO; they escalate to a din.org human-judge panel of 1, 3, 5, or 7 jurors — sized for the stakes. The conflict leaves your organization. <a href=&quot;#appeal&quot; style=&quot;text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px;&quot;>See how the appeal works</a>.",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[auto_1fr] gap-6 md:gap-10"
                >
                  <p
                    className="d-display text-2xl md:text-3xl italic"
                    style={{ color: "var(--d-accent)" }}
                  >
                    {p.num}
                  </p>
                  <div>
                    <h3
                      className="d-display text-xl md:text-2xl leading-[1.2] mb-2"
                      style={{ color: "var(--d-ink)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-base md:text-[17px] leading-relaxed font-light"
                      style={{ color: "var(--d-ink-muted)" }}
                      dangerouslySetInnerHTML={{ __html: p.body }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--d-line)",
                background: "var(--d-ink)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/videos/frau-dunkler-raum.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/frau-dunkler-raum.webm" type="video/webm" />
                <source src="/videos/frau-dunkler-raum.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,19,15,0.75) 0%, rgba(20,19,15,0.1) 50%, rgba(20,19,15,0.3) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-2"
                  style={{ color: "rgba(245,241,234,0.6)" }}
                >
                  A quiet artifact
                </p>
                <p
                  className="d-display text-xl md:text-2xl italic leading-[1.2]"
                  style={{ color: "var(--d-bone)" }}
                >
                  &quot;Per the attached ruling,
                  <br />
                  this is the outcome.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPEAL — every ruling appealable, panels of 1/3/5/7 */}
      <section
        id="appeal"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            The appeal
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[28ch] leading-[1.05] mb-10">
            Every ruling can be appealed.{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              To a human-judge panel — sized for the stakes.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-3xl mb-16 md:mb-20"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Every decision rendered by din.org — base ruling, verified
            proceeding, civil-dispute verdict, public-sector decision — is
            appeal-eligible by default. Appeals leave the AI tier entirely.
            They are decided by a panel of human judges drawn from a vetted
            roster of trained arbitrators. The panel reviews the record,
            considers new submissions, and issues a final, binding ruling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                seats: 1,
                eyebrow: "Solo judge",
                title: "1 juror",
                body:
                  "Fast-track. Low-value civil disputes, administrative offences, simple consumer claims. Days from filing to ruling.",
              },
              {
                seats: 3,
                eyebrow: "Standard chamber",
                title: "3 jurors",
                body:
                  "The default appeal panel. Majority decides. Suitable for most commercial, marketplace, and institutional disputes.",
              },
              {
                seats: 5,
                eyebrow: "Expanded panel",
                title: "5 jurors",
                body:
                  "For high-value, technically complex, or cross-border disputes. Specialist judges included where the matter requires.",
              },
              {
                seats: 7,
                eyebrow: "Full bench",
                title: "7 jurors",
                body:
                  "Matters of public significance, precedent-setting cases, or sensitive public-sector decisions. Maximum legitimacy.",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-2xl p-7 md:p-8 flex flex-col"
                style={{
                  background: "var(--d-bone-soft)",
                  border: "1px solid var(--d-line)",
                }}
              >
                <div
                  className="flex flex-wrap gap-1.5 mb-6"
                  style={{ minHeight: "0.75rem" }}
                  aria-hidden
                >
                  {[...Array(p.seats)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ background: "var(--d-accent)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.eyebrow}
                </p>
                <p
                  className="d-display text-2xl md:text-3xl mb-4"
                  style={{ color: "var(--d-ink)" }}
                >
                  {p.title}
                </p>
                <p
                  className="text-[14px] md:text-[15px] leading-relaxed font-light mt-auto"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                label: "Who decides",
                body:
                  "Vetted human arbitrators — trained, conflict-screened, and rotated. Each panel includes specialists where the matter requires it (commercial, public-procurement, technical, etc.).",
              },
              {
                label: "What they review",
                body:
                  "The full din.org record — inputs, evidence, the three-principle weighing, the AI ruling, and the audit trail — plus any new submissions either party files on appeal.",
              },
              {
                label: "How it ends",
                body:
                  "A final, binding ruling with full reasoning. Enforceable internationally under the New York Convention 1958 in 170+ jurisdictions, or recognized by the institution operating the ruling.",
              },
            ].map((f) => (
              <div key={f.label}>
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: "var(--d-accent)" }}
                >
                  {f.label}
                </p>
                <p
                  className="text-[15px] leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-16 text-base md:text-lg leading-relaxed font-light italic max-w-3xl"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Panel size is chosen by the appealing party — or by the platform
            when stakes or complexity require it. Appeal pricing scales with
            panel size and case value. The right to appeal is not optional;
            it is the architecture.
          </p>
        </div>
      </section>

      {/* OPEN TO AUDIT — Big Four */}
      <section
        id="audit"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "rgba(245,241,234,0.6)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.5)" }}
            />
            Open to audit
          </p>
          <h2
            className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-10"
            style={{ color: "var(--d-bone)" }}
          >
            Audited by a Big Four firm.{" "}
            <span
              className="italic font-light"
              style={{ color: "rgba(245,241,234,0.75)" }}
            >
              The report is yours.
            </span>
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-3xl mb-16"
            style={{ color: "rgba(245,241,234,0.78)" }}
          >
            The decision mechanism — model architecture, training corpus,
            weighting model, per-case reasoning trails, the application of
            the three principles — is subject to independent annual audit by
            a Big Four accounting firm. Clients receive the full audit report
            on request, including findings, exceptions, and management
            responses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {[
              {
                label: "What is audited",
                body:
                  "Architecture · training data sources · weighting model · per-case audit trails · principle application · appeal frequency · disagreement rate with human reviewers.",
              },
              {
                label: "Who audits",
                body:
                  "A Big Four firm under formal audit engagement. Auditor identity disclosed in the report. Annual cadence. Findings published to clients verbatim.",
              },
              {
                label: "Why this matters",
                body:
                  "The question isn&apos;t &quot;can the AI decide?&quot; — it&apos;s &quot;can someone verify the AI decided correctly?&quot; The audit is what makes the ruling defensible in front of a regulator, a court, a board, or a public.",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(245,241,234,0.04)",
                  border: "1px solid rgba(245,241,234,0.1)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-4"
                  style={{ color: "var(--d-accent-hot)" }}
                >
                  {p.label}
                </p>
                <p
                  className="text-[15px] leading-relaxed font-light"
                  style={{ color: "rgba(245,241,234,0.82)" }}
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </div>

          <p
            className="text-lg leading-relaxed font-light italic max-w-3xl"
            style={{ color: "rgba(245,241,234,0.7)" }}
          >
            We sell a mechanism, not a marketing claim. Anything we say about
            how a din.org decision is reached should be verifiable by a
            third-party auditor. That is the entire business model.
          </p>
        </div>
      </section>

      {/* WHERE IT'S USED — decision-types grid */}
      <section
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            Where it&apos;s used
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[26ch] leading-[1.05] mb-16">
            One engine.{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Every decision you no longer want to own.
            </span>
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "1px solid var(--d-line)" }}
          >
            {[
              ["Civil contract disputes", "private · B2C &amp; B2B"],
              ["Tenancy &amp; landlord disputes", "private · housing"],
              ["Defective-goods consumer claims", "private · retail"],
              ["Small-claims arbitration", "private · low value"],
              ["Public procurement / tender awards", "public sector · high-integrity"],
              ["Grant &amp; subsidy allocation", "public sector · selection"],
              ["Building permit appeals", "public sector · regulatory"],
              ["Public-office candidate vetting", "public sector · integrity"],
              ["Whistleblower complaint review", "public sector · protected"],
              ["Electoral &amp; campaign-finance disputes", "public sector · sensitive"],
              ["Insurance claim adjudication", "insurance · first-pass"],
              ["Insurance fraud-flag review", "insurance · automated triage"],
              ["Bank complaint resolution", "banking · consumer protection"],
              ["Marketplace refund disputes", "platform · consumer"],
              ["Marketplace trust &amp; safety appeals", "platform · seller bans"],
              ["B2B contract disputes", "commercial · cross-border"],
              ["Sports &amp; federation tribunals", "institutional · eligibility"],
              ["Consumer ombudsman cases", "institutional · regulated"],
              ["HR disciplinary first-instance", "internal · neutralization"],
              ["Academic plagiarism / exam appeals", "institutional · academic"],
              ["Scholarship &amp; award juries", "institutional · selection"],
              ["IP &amp; patent first-look", "commercial · technical"],
              ["Inheritance pre-assessments", "private · non-binding"],
              ["Regulatory &amp; compliance escalations", "regulatory · audit"],
            ].map(([title, sub], i, arr) => (
              <div
                key={String(title)}
                className="py-6 md:py-7 px-4 md:px-6 flex flex-col"
                style={{
                  borderBottom:
                    i >= arr.length - (arr.length % 4 || 4)
                      ? "1px solid var(--d-line)"
                      : "1px solid var(--d-line)",
                  borderRight:
                    i % 4 === 3 ? "none" : "1px solid var(--d-line)",
                }}
              >
                <p
                  className="d-display text-lg md:text-xl leading-[1.2] mb-2"
                  style={{ color: "var(--d-ink)" }}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className="text-[11px] uppercase tracking-[0.2em] mt-auto"
                  style={{ color: "var(--d-ink-muted)" }}
                  dangerouslySetInnerHTML={{ __html: sub }}
                />
              </div>
            ))}
          </div>

          <p
            className="mt-10 text-sm leading-relaxed max-w-2xl font-light"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Same API. Different framework parameter. If your decision domain
            isn&apos;t listed, we&apos;ve probably already designed a framework
            for it — ask.
          </p>
        </div>
      </section>

      {/* SANDBOX */}
      <section
        id="sandbox"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
              />
              The sandbox
            </p>
            <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] mb-8">
              Play your case through.{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                See the ruling before you ship.
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              The sandbox runs your real case end-to-end on the same engine
              that produces production rulings. Submit the facts, attach
              evidence, present your strongest argument and your opponent&apos;s
              — the engine returns a full reasoned ruling, the principles it
              weighed, and the confidence behind every step.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-light mb-10"
              style={{ color: "var(--d-ink-muted)" }}
            >
              No commitment. No integration required. The same audit trail you
              would receive in production — but the outcome is yours to keep,
              act on, or discard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={LOGIN_URL}
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-ink)",
                  color: "var(--d-bone)",
                }}
              >
                Open the sandbox
                <span aria-hidden>→</span>
              </a>
              <a
                href="#access"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "var(--d-ink)",
                  color: "var(--d-ink)",
                }}
              >
                Request a guided run
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "var(--d-ink)",
                color: "var(--d-bone)",
                border: "1px solid var(--d-line)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: "var(--d-accent-hot)" }}
              >
                Sandbox · what you get
              </p>
              <ul
                className="space-y-4 text-[15px] leading-relaxed font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                <li>
                  <span className="d-mono text-[11px] mr-3" style={{ color: "var(--d-accent-hot)" }}>01</span>
                  Submit case facts, parties, and evidence.
                </li>
                <li>
                  <span className="d-mono text-[11px] mr-3" style={{ color: "var(--d-accent-hot)" }}>02</span>
                  Optional: have the engine cross-examine your story for weak points.
                </li>
                <li>
                  <span className="d-mono text-[11px] mr-3" style={{ color: "var(--d-accent-hot)" }}>03</span>
                  Receive a full reasoned ruling — citations, confidence, principle weights.
                </li>
                <li>
                  <span className="d-mono text-[11px] mr-3" style={{ color: "var(--d-accent-hot)" }}>04</span>
                  Inspect the signed audit trail.
                </li>
                <li>
                  <span className="d-mono text-[11px] mr-3" style={{ color: "var(--d-accent-hot)" }}>05</span>
                  Keep, escalate to a verified proceeding, or discard.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "rgba(245,241,234,0.6)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.5)" }}
            />
            Pricing
          </p>
          <h2
            className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[28ch] leading-[1.05] mb-6"
            style={{ color: "var(--d-bone)" }}
          >
            Free for the verdict.{" "}
            <span
              className="italic font-light"
              style={{ color: "rgba(245,241,234,0.75)" }}
            >
              Pay when it matters.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-16 md:mb-20"
            style={{ color: "rgba(245,241,234,0.75)" }}
          >
            Issuing a reasoned decision should be commodity. The hard parts —
            human appeal, identity verification, video proceedings — are where
            we charge. Most integrations stay free.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(245,241,234,0.04)",
                border: "1px solid rgba(245,241,234,0.1)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: "var(--d-accent-hot)" }}
              >
                Base decisions
              </p>
              <p
                className="d-display text-5xl md:text-6xl mb-2"
                style={{ color: "var(--d-bone)" }}
              >
                Free
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "rgba(245,241,234,0.55)" }}
              >
                Up to ~1,000 tokens per decision
              </p>
              <ul
                className="space-y-3 text-[15px] leading-relaxed font-light"
                style={{ color: "rgba(245,241,234,0.78)" }}
              >
                <li>· Every reasoned ruling</li>
                <li>· Signed audit trail URL</li>
                <li>· Citations &amp; confidence score</li>
                <li>· Three-principles weighting included</li>
                <li>· Unlimited integration volume</li>
              </ul>
              <p
                className="mt-8 pt-6 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  color: "rgba(245,241,234,0.5)",
                  borderTop: "1px solid rgba(245,241,234,0.08)",
                }}
              >
                Overage billed by token thereafter
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "var(--d-bone)",
                color: "var(--d-ink)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: "var(--d-accent)" }}
              >
                Appeals · where we earn
              </p>
              <p
                className="d-display text-5xl md:text-6xl mb-2"
                style={{ color: "var(--d-ink)" }}
              >
                Per appeal
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Human-judge panel · second instance
              </p>
              <ul
                className="space-y-3 text-[15px] leading-relaxed font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <li>· Independent panel of trained judges</li>
                <li>· Reviews record + new submissions</li>
                <li>· Issues a final, binding ruling</li>
                <li>· Volume contracts available</li>
              </ul>
              <p
                className="mt-8 pt-6 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--d-ink-muted)",
                  borderTop: "1px solid var(--d-line)",
                }}
              >
                Tiered by case value · custom for institutions
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(245,241,234,0.04)",
                border: "1px solid rgba(245,241,234,0.1)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-6"
                style={{ color: "var(--d-accent-hot)" }}
              >
                Verified proceedings
              </p>
              <p
                className="d-display text-5xl md:text-6xl mb-2"
                style={{ color: "var(--d-bone)" }}
              >
                Per case
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "rgba(245,241,234,0.55)" }}
              >
                Identity check · video hearing
              </p>
              <ul
                className="space-y-3 text-[15px] leading-relaxed font-light"
                style={{ color: "rgba(245,241,234,0.78)" }}
              >
                <li>· Government-ID verification</li>
                <li>· AI-led video witness examination</li>
                <li>· Notarized identity log</li>
                <li>· For high-stakes &amp; enforceable rulings</li>
              </ul>
              <p
                className="mt-8 pt-6 text-[11px] uppercase tracking-[0.2em]"
                style={{
                  color: "rgba(245,241,234,0.5)",
                  borderTop: "1px solid rgba(245,241,234,0.08)",
                }}
              >
                Use when stakes demand it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRIBUNAL — reference implementation */}
      <section
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--d-line)",
                background: "var(--d-ink)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/videos/mann-office.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/mann-office.webm" type="video/webm" />
                <source src="/videos/mann-office.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,19,15,0.6) 0%, rgba(20,19,15,0.1) 60%)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
              />
              Reference implementation
            </p>
            <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-8">
              We run our own AI tribunal{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                on the same API we sell to you.
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              din.org operates the world&apos;s first end-to-end AI arbitration
              tribunal — case filing, examination, ruling, and appeal — entirely
              on top of this decision endpoint. You can see how the engine
              performs at full depth before you wire it into your own product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tribunal"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-ink)",
                  color: "var(--d-bone)",
                }}
              >
                Visit the tribunal
                <span aria-hidden>→</span>
              </Link>
              <a
                href={LOGIN_URL}
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "var(--d-ink)",
                  color: "var(--d-ink)",
                }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT COMES NEXT — roadmap */}
      <section
        id="roadmap"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
            />
            What comes next
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[28ch] leading-[1.05] mb-10">
            Today: organizational decisions and civil arbitration.{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              The architecture extends further — carefully, where regulation
              permits.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-3xl mb-16 md:mb-20"
            style={{ color: "var(--d-ink-muted)" }}
          >
            The engine that decides a marketplace refund is structurally the
            same as the one that could decide a parking dispute, a small-claims
            matter, or — eventually, where law permits — a lower-instance
            petty-offence case. Three principles, audited mechanism, mandatory
            human-judge appeal. We extend the surface only where regulators
            invite it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                status: "In regulatory dialogue",
                title: "Small-claims &amp; municipal courts",
                body:
                  "Many jurisdictions are piloting AI-assisted first-instance review for high-volume, low-value cases. din.org is designed for it — engine, audit trail, mandatory appeal layer, all aligned with what such pilots require.",
              },
              {
                num: "02",
                status: "Architecturally ready",
                title: "Administrative offences &amp; traffic",
                body:
                  "Speed-camera disputes, parking appeals, low-level municipal penalties. High volume, narrow factual scope, clear statute, low harm of error — the natural testing ground for AI adjudication with strong appeal rights.",
              },
              {
                num: "03",
                status: "Where law permits",
                title: "Lower-instance petty offences",
                body:
                  "Some jurisdictions are opening regulated experimentation for AI-assisted first-instance decisions in petty criminal matters — under strict appeal guarantees and human oversight. Where they do, the same engine — same three principles, same Big Four audit, same mandatory human-judge appeal — is built to participate.",
              },
            ].map((p) => (
              <article
                key={p.num}
                className="rounded-2xl p-7 md:p-9 flex flex-col"
                style={{
                  background: "var(--d-bone-soft)",
                  border: "1px solid var(--d-line)",
                }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <p
                    className="d-display text-3xl md:text-4xl italic"
                    style={{ color: "var(--d-accent)" }}
                  >
                    {p.num}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "var(--d-ink-muted)" }}
                  >
                    {p.status}
                  </p>
                </div>
                <h3
                  className="d-display text-xl md:text-2xl leading-[1.2] mb-4"
                  style={{ color: "var(--d-ink)" }}
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  className="text-[15px] leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </article>
            ))}
          </div>

          <p
            className="mt-12 text-base md:text-lg leading-relaxed font-light italic max-w-3xl"
            style={{ color: "var(--d-ink-muted)" }}
          >
            din.org makes no claim to replace criminal courts. Where the
            architecture is invited into regulated experimentation, it is built
            to participate transparently — and to be removed transparently if a
            jurisdiction decides it no longer should.
          </p>
        </div>
      </section>

      {/* CTA / LEAD FORM */}
      <section
        id="access"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
              />
              Request access
            </p>
            <h2 className="d-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-6">
              Tell us the decision{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                you no longer want to make.
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed font-light mb-6"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Early-access partners get full integration support, a dedicated
              decision framework for their use case, and lifetime volume terms
              on appeal and verification billing.
            </p>
            <p
              className="text-sm leading-relaxed font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Already have an account?{" "}
              <a
                href={LOGIN_URL}
                className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: "var(--d-ink)" }}
              >
                Sign in here
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              action="https://formspree.io/f/xreowgee"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Decision API access request — din.org/test"
              />
              <input type="hidden" name="form_type" value="decision_api_access" />
              <input type="hidden" name="_language" value="en" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors"
                  style={{
                    border: "1px solid var(--d-line)",
                    background: "transparent",
                    color: "var(--d-ink)",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors"
                  style={{
                    border: "1px solid var(--d-line)",
                    background: "transparent",
                    color: "var(--d-ink)",
                  }}
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Organization (optional)"
                className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors"
                style={{
                  border: "1px solid var(--d-line)",
                  background: "transparent",
                  color: "var(--d-ink)",
                }}
              />

              <select
                name="use_case"
                required
                defaultValue=""
                className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors"
                style={{
                  border: "1px solid var(--d-line)",
                  background: "transparent",
                  color: "var(--d-ink)",
                }}
              >
                <option value="" disabled>
                  Primary use case
                </option>
                <option value="civil_dispute">
                  Civil dispute — filing my own case
                </option>
                <option value="public_sector">
                  Public sector (procurement, grants, permits)
                </option>
                <option value="insurance">Insurance / banking decisions</option>
                <option value="marketplace">Marketplace / platform disputes</option>
                <option value="arbitration_body">
                  Arbitration body / institutional tribunal
                </option>
                <option value="hr">HR / disciplinary</option>
                <option value="grants">Grants / scholarships / awards</option>
                <option value="sandbox">Just want to try the sandbox</option>
                <option value="other">Other</option>
              </select>

              <select
                name="volume"
                required
                defaultValue=""
                className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors"
                style={{
                  border: "1px solid var(--d-line)",
                  background: "transparent",
                  color: "var(--d-ink)",
                }}
              >
                <option value="" disabled>
                  Estimated monthly decisions
                </option>
                <option value="lt_100">Less than 100</option>
                <option value="100_1k">100 — 1,000</option>
                <option value="1k_10k">1,000 — 10,000</option>
                <option value="10k_100k">10,000 — 100,000</option>
                <option value="gt_100k">100,000+</option>
                <option value="exploring">Just exploring</option>
              </select>

              <textarea
                name="note"
                rows={4}
                placeholder="Briefly: what decision would you outsource first? (optional)"
                className="w-full rounded-xl px-5 py-4 text-[15px] focus:outline-none transition-colors resize-none"
                style={{
                  border: "1px solid var(--d-line)",
                  background: "transparent",
                  color: "var(--d-ink)",
                }}
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-ink)",
                  color: "var(--d-bone)",
                }}
              >
                Request access
                <span aria-hidden>→</span>
              </button>

              <p className="text-xs" style={{ color: "var(--d-ink-muted)" }}>
                We respond within two business days. No automated funnel.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="d-rule-top px-6 md:px-10 py-14"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-2">
            <p
              className="d-display text-2xl mb-3"
              style={{ color: "var(--d-ink)" }}
            >
              din.org
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-md"
              style={{ color: "var(--d-ink-muted)" }}
            >
              The decision endpoint. Reasoned, auditable rulings as
              infrastructure — for the decisions your team, your institution,
              or your government no longer wants to own.
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Product
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--d-ink)" }}
            >
              <li>
                <a href="#principles" className="hover:opacity-70 transition-opacity">
                  Three principles
                </a>
              </li>
              <li>
                <a href="#how" className="hover:opacity-70 transition-opacity">
                  How a decision looks
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:opacity-70 transition-opacity">
                  Open to audit
                </a>
              </li>
              <li>
                <a href="#file" className="hover:opacity-70 transition-opacity">
                  For your own dispute
                </a>
              </li>
              <li>
                <a href="#appeal" className="hover:opacity-70 transition-opacity">
                  The appeal
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:opacity-70 transition-opacity">
                  Sandbox
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-70 transition-opacity">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:opacity-70 transition-opacity">
                  Roadmap
                </a>
              </li>
              <li>
                <Link
                  href="/tribunal"
                  className="hover:opacity-70 transition-opacity"
                >
                  The tribunal (reference)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Get started
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--d-ink)" }}
            >
              <li>
                <a
                  href="#access"
                  className="hover:opacity-70 transition-opacity"
                >
                  Request access
                </a>
              </li>
              <li>
                <Link
                  href="/file-a-case"
                  className="hover:opacity-70 transition-opacity"
                >
                  File a case
                </Link>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  className="hover:opacity-70 transition-opacity"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  className="hover:opacity-70 transition-opacity"
                >
                  Open the sandbox
                </a>
              </li>
              <li>
                <a
                  href="mailto:api@din.org"
                  className="hover:opacity-70 transition-opacity"
                >
                  api@din.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mx-auto max-w-[1400px] mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid var(--d-line)",
            color: "var(--d-ink-muted)",
          }}
        >
          <p>The decision endpoint · © {new Date().getFullYear()} din.org</p>
          <p>
            <Link href="/tribunal" className="hover:opacity-70 transition-opacity">
              The tribunal
            </Link>
            {" · "}
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:opacity-70 transition-opacity">
              Terms
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
