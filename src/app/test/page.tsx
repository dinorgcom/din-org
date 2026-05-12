import Link from "next/link";

export default function TestHomePage() {
  return (
    <>
      {/* TOP BAR */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 md:px-10 py-6">
          <Link
            href="/test"
            className="d-display text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: "var(--d-bone)" }}
          >
            din.org
          </Link>
          <nav
            className="hidden md:flex items-center gap-10 text-sm"
            style={{ color: "rgba(245,241,234,0.75)" }}
          >
            <a href="#how" className="hover:opacity-100 transition-opacity">
              How it works
            </a>
            <a href="#who" className="hover:opacity-100 transition-opacity">
              Who uses it
            </a>
            <a href="#pricing" className="hover:opacity-100 transition-opacity">
              Pricing
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
          poster="/test/videos/vor-gericht.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/test/videos/vor-gericht.webm" type="video/webm" />
          <source src="/test/videos/vor-gericht.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.55) 0%, rgba(20,19,15,0.4) 45%, rgba(20,19,15,0.85) 100%)",
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
              style={{ color: "rgba(245,241,234,0.8)" }}
            >
              din.org renders reasoned, auditable rulings on the disputes,
              claims, and decisions your organization no longer wants to make
              in-house. Submit the case. Receive the verdict. Ship the outcome.
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
                Request API access
                <span aria-hidden>→</span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "rgba(245,241,234,0.4)",
                  color: "var(--d-bone)",
                }}
              >
                See a decision
              </a>
            </div>

            <p
              className="mt-16 text-xs uppercase tracking-[0.25em] max-w-2xl"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              Used internally by din.org&apos;s own AI arbitration tribunal ·
              Pilot programs with marketplaces, insurers &amp; arbitration
              institutions
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR — placeholder partner logos */}
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
              "Marketplace EU",
              "Insurer · DACH",
              "Arbitration Body",
              "B2B Platform",
              "Fintech",
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

      {/* WHO USES IT — three pillars */}
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
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[28ch] leading-[1.05] mb-16 md:mb-24">
            Organizations that make decisions{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              they&apos;d rather not own.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {[
              {
                eyebrow: "Marketplaces & Platforms",
                title: "Buyer-seller disputes, refund decisions, content appeals.",
                body:
                  "Trust & safety teams escalate edge cases to din.org instead of arguing with two upset users. Every refund denial, every seller suspension, every removed listing comes with a reasoned, third-party ruling the user can read and challenge — not a customer-service form letter.",
                vol: "Typical volume: 200 — 50,000 decisions / month",
              },
              {
                eyebrow: "Insurance & Banks",
                title: "Claim adjudication, complaint review, fraud-flag escalation.",
                body:
                  "Adjusters use din.org for first-pass decisions on contested claims. The reasoned ruling becomes the artifact the customer sees — not the adjuster&apos;s name. Speeds up cycle time, removes the personal-blame surface, gives the regulator a paper trail.",
                vol: "Typical volume: 1,000 — 250,000 decisions / month",
              },
              {
                eyebrow: "Institutions & Tribunals",
                title:
                  "Arbitration bodies, ombudsmen, grant committees, sports tribunals.",
                body:
                  "Existing institutions integrate din.org as their AI tier — for triage, for first-instance rulings, for parallel sanity-checks against human decisions. The institution retains brand and authority; din.org provides the engine, the speed, and the audit trail.",
                vol: "Typical volume: 50 — 5,000 decisions / month",
              },
            ].map((p) => (
              <article key={p.eyebrow} className="flex flex-col">
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-5"
                  style={{ color: "var(--d-accent)" }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="d-display text-2xl md:text-3xl leading-[1.15] mb-5"
                  style={{ color: "var(--d-ink)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-base md:text-[17px] leading-relaxed font-light mb-6"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.body}
                </p>
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
            {/* REQUEST */}
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

            {/* RESPONSE */}
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
                  "Every ruling ships with the chain of reasoning, weighted citations, and a confidence score — not a black-box verdict.",
              },
              {
                label: "Auditable",
                body:
                  "Each decision has a signed audit trail URL. Inputs, intermediate steps, and final ruling are reproducible on replay.",
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
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUTSOURCE — verantwortung */}
      <section
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left text column */}
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
              An adjuster, a moderator, a committee. The customer still hears it
              from you. din.org is the structural opposite: a third party your
              customer sees as the source of the ruling — with the audit trail,
              independence, and appeal mechanism to back it up.
            </p>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Independent third party",
                  body:
                    "Your decision isn&apos;t your decision anymore. The ruling comes from din.org, with a verifiable audit URL the customer can inspect. You executed; we decided.",
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
                    "Every ruling is appeal-eligible. Customers don&apos;t escalate to your CEO; they escalate to a din.org human-judge panel. The conflict leaves your org.",
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

          {/* Right video tile */}
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
                poster="/test/videos/frau-dunkler-raum.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/test/videos/frau-dunkler-raum.webm" type="video/webm" />
                <source src="/test/videos/frau-dunkler-raum.mp4" type="video/mp4" />
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
              Many decisions you no longer have to own.
            </span>
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "1px solid var(--d-line)" }}
          >
            {[
              ["Marketplace refund disputes", "consumer · platform"],
              ["B2B contract disputes", "commercial · cross-border"],
              ["Insurance claim adjudication", "first-pass · contested"],
              ["Bank complaint resolution", "consumer protection"],
              ["Marketplace trust &amp; safety escalations", "seller bans · removals"],
              ["Sports & federation tribunals", "doping · eligibility"],
              ["HR disciplinary review", "neutral first instance"],
              ["Academic plagiarism rulings", "exam · thesis"],
              ["Scholarship & grant decisions", "selection · appeals"],
              ["Competition & jury awards", "structured judging"],
              ["IP & patent first-look", "infringement · validity"],
              ["Consumer ombudsman cases", "B2C · regulated"],
              ["Inheritance pre-assessments", "non-binding"],
              ["Procurement pre-review", "tender · qualification"],
              ["Regulatory escalations", "compliance · audit"],
              ["Insurance fraud-flag review", "automated triage"],
            ].map(([title, sub], i) => (
              <div
                key={String(title)}
                className="py-6 md:py-7 px-4 md:px-6 flex flex-col"
                style={{
                  borderBottom: "1px solid var(--d-line)",
                  borderRight:
                    i % 4 === 3
                      ? "none"
                      : "1px solid var(--d-line)",
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
            isn&apos;t listed, we&apos;ve probably already trained a framework
            for it — ask.
          </p>
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
            {/* Base */}
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

            {/* Appeals */}
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

            {/* Verified */}
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
                poster="/test/videos/mann-office.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/test/videos/mann-office.webm" type="video/webm" />
                <source src="/test/videos/mann-office.mp4" type="video/mp4" />
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
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
              style={{
                background: "var(--d-ink)",
                color: "var(--d-bone)",
              }}
            >
              Visit the tribunal
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / LEAD FORM */}
      <section
        id="access"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone)" }}
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
              Request API access
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
              className="text-base md:text-lg leading-relaxed font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Early-access partners get full integration support, a dedicated
              decision framework for their use case, and lifetime volume terms
              on appeal and verification billing.
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
                placeholder="Company (optional)"
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
                <option value="marketplace">Marketplace / platform disputes</option>
                <option value="insurance">Insurance / banking decisions</option>
                <option value="arbitration_body">
                  Arbitration body / institutional tribunal
                </option>
                <option value="hr">HR / disciplinary</option>
                <option value="grants">Grants / scholarships / awards</option>
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

              <p
                className="text-xs"
                style={{ color: "var(--d-ink-muted)" }}
              >
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
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <p
              className="d-display text-2xl mb-3"
              style={{ color: "var(--d-ink)" }}
            >
              din.org
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-xs"
              style={{ color: "var(--d-ink-muted)" }}
            >
              The decision endpoint. Reasoned, auditable rulings as
              infrastructure — for the decisions your team no longer wants to
              own.
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
                <a href="#how" className="hover:opacity-70 transition-opacity">
                  How a decision looks
                </a>
              </li>
              <li>
                <a href="#who" className="hover:opacity-70 transition-opacity">
                  Who uses it
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:opacity-70 transition-opacity"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  href="/"
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
              Contact
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
                  Request API access
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
          <p className="italic">Preview · noindex</p>
        </div>
      </footer>
    </>
  );
}
