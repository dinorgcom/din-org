import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "../decisions.css";

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
  title: "The din.org Tribunal — AI arbitration, operated on the decision endpoint",
  description:
    "The din.org Tribunal is the world's first end-to-end AI arbitration court — case filing, evidence, AI cross-examination, reasoned ruling, human-judge appeal. Operated on the same decision endpoint we sell. File a case, present evidence, receive a verdict in days.",
  alternates: {
    canonical: "https://din.org/tribunal",
  },
  openGraph: {
    type: "website",
    title: "The din.org Tribunal — AI arbitration on the decision endpoint",
    description:
      "Full AI arbitration: filing, evidence, cross-examination, ruling, appeal. The reference implementation of our decision API.",
    url: "https://din.org/tribunal",
  },
};

const LOGIN_URL = "https://app.din.org/login";

export default function TribunalPage() {
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
            <Link href="/" className="hover:opacity-100 transition-opacity">
              The decision endpoint
            </Link>
            <a href="#principles" className="hover:opacity-100 transition-opacity">
              Principles
            </a>
            <a href="#process" className="hover:opacity-100 transition-opacity">
              Process
            </a>
            <Link href="/file-a-case" className="hover:opacity-100 transition-opacity">
              File a case
            </Link>
            <a
              href={LOGIN_URL}
              className="hover:opacity-100 transition-opacity"
              style={{ color: "rgba(245,241,234,0.65)" }}
            >
              Login
            </a>
            <Link
              href="/file-a-case"
              className="rounded-full border px-5 py-2 transition-colors"
              style={{
                borderColor: "rgba(245,241,234,0.3)",
                color: "var(--d-bone)",
              }}
            >
              File a case
            </Link>
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
          poster="/videos/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
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
              The din.org Tribunal · Reference implementation
            </p>

            <h1
              className="d-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] max-w-[16ch]"
              style={{ color: "var(--d-bone)" }}
            >
              Justice,
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                at the speed of thought.
              </span>
            </h1>

            <p
              className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              The world&apos;s first end-to-end AI arbitration tribunal. Case
              filing, evidence, AI cross-examination, reasoned ruling, human
              appeal — operated by din.org on the same decision endpoint we
              sell as infrastructure to organizations, governments, and
              institutions.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/file-a-case"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-bone)",
                  color: "var(--d-ink)",
                }}
              >
                File a case
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  borderColor: "rgba(245,241,234,0.4)",
                  color: "var(--d-bone)",
                }}
              >
                How filing works
              </Link>
            </div>

            <p
              className="mt-16 text-xs uppercase tracking-[0.25em] max-w-2xl"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              Three principles · Big Four audit · Mandatory human-judge appeal ·
              Days, not years
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
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
            What it is
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-10">
            A courtroom that never closes,{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              never tires, and reads every document.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-3xl"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Traditional courts are slow, expensive, and out of reach for most
            people. The din.org Tribunal uses advanced reasoning to hear
            disputes, weigh evidence, cite the law, and issue a written ruling
            — in hours, not years. Every party gets the same engine, the same
            depth of reasoning, the same right to appeal. Justice without the
            queue.
          </p>
        </div>
      </section>

      {/* FOUR PRINCIPLES (of the tribunal) */}
      <section
        id="principles"
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
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
            How the tribunal works
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-16">
            Four principles.{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              One court.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "AI judge, human oversight",
                body:
                  "The judge is intentionally AI — no human intervention in the decision itself. Independent audit (annual, by a Big Four firm) and mandatory human-judge appeal panels ensure validity at every stage. The AI decides; humans verify and, on appeal, override.",
              },
              {
                num: "02",
                title: "Live cross-examination",
                body:
                  "All participants — claimant, respondent, witnesses — appear by video at the same time. The AI cross-examines simultaneously, in real time. Very little chance to coordinate stories, contradict prior submissions, or hide gaps. The record is captured, signed, and replayable.",
              },
              {
                num: "03",
                title: "AI lawyers guide both sides",
                body:
                  "Each party chooses an AI lawyer from within the system. It prepares the case, organizes evidence, raises the strongest arguments, and walks the party through every step. Equal preparation quality on both sides — the asymmetry of who can afford counsel disappears.",
              },
              {
                num: "04",
                title: "Arbitration → ruling → appeal",
                body:
                  "First, an arbitration proposal both sides can accept and walk away. If rejected, a formal AI ruling with full reasoning. Still disagree? Appeal to a panel of 1, 3, 5, or 7 human judges — sized for the stakes. Final, binding, internationally enforceable.",
              },
            ].map((p) => (
              <article
                key={p.num}
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "var(--d-bone)",
                  border: "1px solid var(--d-line)",
                }}
              >
                <p
                  className="d-display italic text-3xl md:text-4xl mb-5"
                  style={{ color: "var(--d-accent)" }}
                >
                  {p.num}
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
        </div>
      </section>

      {/* STATS */}
      <section
        className="px-6 md:px-10 py-24 md:py-32"
        style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-12"
            style={{ color: "rgba(245,241,234,0.6)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.5)" }}
            />
            The numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
            {[
              { value: "< 24h", label: "Avg. AI ruling time" },
              { value: "100 %", label: "Reasoned, cited rulings" },
              { value: "€0", label: "Filing fee for base decisions" },
              { value: "170+", label: "Jurisdictions enforceable (NYC 1958)" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="d-display text-4xl md:text-6xl leading-none mb-4"
                  style={{ color: "var(--d-bone)" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: "rgba(245,241,234,0.6)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
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
            The process
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4.5rem)] max-w-[24ch] leading-[1.05] mb-16">
            From complaint{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              to ruling — in days.
            </span>
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-4"
            style={{ borderTop: "1px solid var(--d-line)" }}
          >
            {[
              {
                step: "Step 1",
                title: "File & notify",
                body:
                  "Describe your dispute. The other party is notified immediately — both must agree to participate (or an arbitration clause must exist).",
              },
              {
                step: "Step 2",
                title: "AI lawyer",
                body:
                  "Each side chooses an AI lawyer from within the system. It guides evidence, arguments, and procedure — equal preparation, both sides.",
              },
              {
                step: "Step 3",
                title: "Cross-examination",
                body:
                  "All parties and witnesses appear by video simultaneously. The AI judge cross-examines in real time. The record is signed and replayable.",
              },
              {
                step: "Step 4",
                title: "Ruling & appeal",
                body:
                  "First an arbitration proposal. If rejected, a formal AI ruling. Either side can then appeal to a human-judge panel of 1, 3, 5, or 7 jurors.",
              },
            ].map((s, i, arr) => (
              <div
                key={s.step}
                className="py-8 md:py-10 px-4 md:px-7"
                style={{
                  borderRight:
                    i === arr.length - 1
                      ? "none"
                      : "1px solid var(--d-line)",
                  borderBottom: "1px solid var(--d-line)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-5"
                  style={{ color: "var(--d-accent)" }}
                >
                  {s.step}
                </p>
                <h3
                  className="d-display text-xl md:text-2xl leading-[1.2] mb-4"
                  style={{ color: "var(--d-ink)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[14px] md:text-[15px] leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
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
              Read the full process
            </Link>
          </div>
        </div>
      </section>

      {/* WHO COMES HERE */}
      <section
        className="px-6 md:px-10 py-28 md:py-40"
        style={{ background: "var(--d-bone-soft)" }}
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
            Who comes here
          </p>
          <h2 className="d-display text-[clamp(2.25rem,5vw,4rem)] max-w-[28ch] leading-[1.05] mb-12">
            People with a dispute they want decided —{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              not litigated.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                eyebrow: "Civil disputes",
                title:
                  "Contract, tenancy, defective goods, inheritance, B2B disagreements",
                body:
                  "The decisions a court would otherwise take years to resolve, decided in days. Both parties must consent or a prior arbitration clause must exist.",
              },
              {
                eyebrow: "Cross-border commerce",
                title: "International contracts, online transactions, marketplace disputes",
                body:
                  "Enforceable in 170+ jurisdictions under the New York Convention 1958. No need to pick a court system — the tribunal is the court system.",
              },
              {
                eyebrow: "Institutional referrals",
                title: "Arbitration bodies, ombudsmen, federation tribunals using din.org",
                body:
                  "Institutions integrate the tribunal as their AI tier — triage, first-instance rulings, sanity-checking human decisions. They keep their brand; we provide the engine.",
              },
            ].map((p) => (
              <article
                key={p.eyebrow}
                className="rounded-2xl p-7 md:p-9"
                style={{
                  background: "var(--d-bone)",
                  border: "1px solid var(--d-line)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em] mb-4"
                  style={{ color: "var(--d-accent)" }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  className="d-display text-lg md:text-xl leading-[1.25] mb-4"
                  style={{ color: "var(--d-ink)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="px-6 md:px-10 py-24 md:py-32"
        style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2
              className="d-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] mb-4"
              style={{ color: "var(--d-bone)" }}
            >
              Justice,{" "}
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.75)" }}
              >
                without the wait.
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed font-light max-w-2xl"
              style={{ color: "rgba(245,241,234,0.75)" }}
            >
              File a case in minutes. Receive a reasoned ruling in days. Appeal
              to a human-judge panel if you disagree. Enforceable globally.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/file-a-case"
              className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
              style={{
                background: "var(--d-bone)",
                color: "var(--d-ink)",
              }}
            >
              File a case
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
              style={{
                borderColor: "rgba(245,241,234,0.4)",
                color: "var(--d-bone)",
              }}
            >
              Or use the API instead
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 md:px-10 py-14"
        style={{
          background: "var(--d-bone)",
          borderTop: "1px solid var(--d-line)",
        }}
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
              The din.org Tribunal — the reference implementation of the
              decision endpoint. End-to-end AI arbitration with mandatory
              human-judge appeal.
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Tribunal
            </p>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--d-ink)" }}
            >
              <li>
                <a href="#principles" className="hover:opacity-70 transition-opacity">
                  Principles
                </a>
              </li>
              <li>
                <a href="#process" className="hover:opacity-70 transition-opacity">
                  Process
                </a>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:opacity-70 transition-opacity">
                  How it works (full)
                </Link>
              </li>
              <li>
                <Link href="/lawyer-counsel" className="hover:opacity-70 transition-opacity">
                  Lawyer counsel
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  The decision endpoint (API)
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
                <Link href="/file-a-case" className="hover:opacity-70 transition-opacity">
                  File a case
                </Link>
              </li>
              <li>
                <a href={LOGIN_URL} className="hover:opacity-70 transition-opacity">
                  Login
                </a>
              </li>
              <li>
                <Link href="/early-access" className="hover:opacity-70 transition-opacity">
                  Early access
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@din.org"
                  className="hover:opacity-70 transition-opacity"
                >
                  hello@din.org
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
          <p>The din.org Tribunal · © {new Date().getFullYear()} din.org</p>
          <p>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              The decision endpoint
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
