import Link from "next/link";

export default function TestHomePage() {
  return (
    <>
      {/* TOP BAR */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 md:px-10 py-6">
          <Link
            href="/test"
            className="d-display text-xl md:text-2xl tracking-tight text-[var(--d-bone)] hover:opacity-80 transition-opacity"
            style={{ color: "var(--d-bone)" }}
          >
            din.org
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-sm" style={{ color: "rgba(245,241,234,0.75)" }}>
            <a href="#what" className="hover:opacity-100 transition-opacity">
              The endpoint
            </a>
            <a href="#who" className="hover:opacity-100 transition-opacity">
              Who uses it
            </a>
            <a href="#tribunal" className="hover:opacity-100 transition-opacity">
              Tribunal
            </a>
            <a
              href="#access"
              className="rounded-full border px-5 py-2 transition-colors"
              style={{ borderColor: "rgba(245,241,234,0.3)", color: "var(--d-bone)" }}
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
                style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}
              >
                Request API access
                <span aria-hidden>→</span>
              </a>
              <a
                href="#what"
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

      {/* WHAT IT IS */}
      <section
        id="what"
        className="d-rule-top px-6 md:px-10 py-28 md:py-40 max-w-[1400px] mx-auto"
      >
        <p
          className="text-[11px] uppercase tracking-[0.3em] mb-8"
          style={{ color: "var(--d-ink-muted)" }}
        >
          <span
            className="inline-block w-8 h-px align-middle mr-3"
            style={{ background: "var(--d-ink-muted)", opacity: 0.6 }}
          />
          What it is
        </p>
        <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05]">
          A decision-making service{" "}
          <span
            className="italic font-light"
            style={{ color: "var(--d-ink-muted)" }}
          >
            you integrate, not a court you visit.
          </span>
        </h2>
        <p
          className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          style={{ color: "var(--d-ink-muted)" }}
        >
          POST the case. Receive a reasoned ruling with citations, confidence
          scores, and a full audit trail. Hand the outcome to your customer
          with a verifiable third-party record behind every decision you
          previously made yourself.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="d-rule-top px-6 md:px-10 py-12 mt-12">
        <div
          className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm"
          style={{ color: "var(--d-ink-muted)" }}
        >
          <p className="d-display text-base" style={{ color: "var(--d-ink)" }}>
            din.org
          </p>
          <p>The decision endpoint · © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
