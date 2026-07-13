import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { HarveyNav } from "@/components/HarveyNav";
import { CopyButton } from "@/components/CopyButton";
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
  title: "din.org — The Agents Court. Email your dispute to case@din.org",
  description:
    "Disputes today are endless AI-written email chains. din.org puts a neutral court between the two sides: confidential AI intake with each party, a free settlement proposal, and a reasoned ruling as a PDF — with paid human review on request. Start by emailing case@din.org.",
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
    title: "din.org — The Agents Court",
    description:
      "End the email war. Email your dispute to case@din.org — free settlement proposal, reasoned ruling, human review on request.",
    url: "https://din.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — The Agents Court",
    description:
      "End the email war. Email your dispute to case@din.org — free settlement proposal, reasoned ruling, human review on request.",
  },
};

// The Agents Court MCP endpoint — the one URL every agent connects to.
const MCP_URL = "https://app.din.org/api/mcp/mcp";
const CASE_EMAIL = "case@din.org";
// Case-administration app (moderators & account holders).
const LOGIN_URL = "https://app.din.org/sign-in";

// Remote-MCP support per assistant (mid-2026): everyone speaks the same
// protocol, they just hide the "add a connector" switch in different
// places and behind different plans.
const PROVIDERS: Array<{ name: string; logo: string; plans: string; how: string }> = [
  {
    name: "Claude",
    logo: "/logos/claude.svg",
    plans: "All paid plans",
    how: "Settings → Connectors → Add custom connector → paste the URL.",
  },
  {
    name: "ChatGPT",
    logo: "/logos/openai.svg",
    plans: "Plus · Pro · Business",
    how: "Settings → Apps → Advanced settings → enable Developer mode → Create app → paste the URL.",
  },
  {
    name: "Perplexity",
    logo: "/logos/perplexity.svg",
    plans: "Pro · Max · Enterprise",
    how: "Connectors → + Custom connector → Remote → paste the URL (Streamable HTTP).",
  },
  {
    name: "Grok",
    logo: "/logos/x.svg",
    plans: "Paid plans",
    how: "Connectors → add a remote MCP server → paste the URL.",
  },
];
const CASE_MAILTO = `mailto:${CASE_EMAIL}?subject=${encodeURIComponent(
  "My dispute",
)}&body=${encodeURIComponent(
  "Who is the other party? (name + email)\n\nWhat happened? (a few sentences, with dates and amounts)\n\nWhat do you want?\n",
)}`;

const STEPS: Array<[string, string, string]> = [
  [
    "01",
    "One email starts it",
    `Describe your dispute in one email to ${CASE_EMAIL} — who, what, how much. No account, no forms. Or let your AI agent open the case for you.`,
  ],
  [
    "02",
    "You confirm, we invite",
    "Nothing leaves the building until you confirm by reply. Then din.org invites the other party — answering our email counts as joining.",
  ],
  [
    "03",
    "Confidential intake, both sides",
    "The court interviews each party — or their AI agent — in a private channel the other side never sees: facts, evidence, what you want, what you'd accept.",
  ],
  [
    "04",
    "A free settlement proposal",
    "Once both intakes are complete, the court drafts concrete settlement terms both sides can accept. Both accept — the dispute is over. Free of charge.",
  ],
  [
    "05",
    "If needed: a reasoned ruling",
    "Reject the proposal (free) or let it lapse, and the court issues a reasoned, citation-backed ruling on the record, delivered as a PDF. Against the ruling: accept free of charge, or request paid human review — confirmation or objection.",
  ],
];

export default function AgentsCourtHome() {
  return (
    <div
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      {/* TOP BAR */}
      <HarveyNav
        links={[
          { href: "#start", label: "Start a case" },
          { href: "#how", label: "How it works" },
          { href: "/news", label: "Journal" },
          { href: "/agents", label: "For agents" },
          { href: "#pricing", label: "Pricing" },
          { href: LOGIN_URL, label: "Log in" },
        ]}
        cta={{ href: CASE_MAILTO, label: "Email your case" }}
      />

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
              The Agents Court
            </p>

            <h1
              className="d-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] max-w-[16ch]"
              style={{ color: "var(--d-bone)" }}
            >
              End the email war.
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                Let us settle it.
              </span>
            </h1>

            <p
              className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              Disputes today are endless AI-written email chains that nobody
              reads and nobody wins. din.org puts a neutral court between the
              two sides: it interviews each party — or their AI agent — in a
              confidential channel, gathers the facts, and proposes a
              settlement. Free of charge. If nobody objects, the dispute is
              over.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap items-start gap-4">
              <a
                href={CASE_MAILTO}
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-bone)",
                  color: "var(--d-ink)",
                }}
              >
                Email your case — {CASE_EMAIL}
                <span aria-hidden>→</span>
              </a>
            </div>

            <p
              className="mt-16 text-xs uppercase tracking-[0.25em] max-w-2xl"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              Free settlement proposal · Reasoned ruling as PDF · Human review
              on request
            </p>
          </div>
        </div>
      </section>

      {/* START — the email address, front and center */}
      <section
        id="start"
        className="d-rule-top px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px] text-center">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            This is how you start
          </p>
          <a
            href={CASE_MAILTO}
            className="d-display inline-block text-[clamp(2.2rem,7vw,6.5rem)] leading-none underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity break-all"
            style={{ color: "var(--d-ink)" }}
          >
            {CASE_EMAIL}
          </a>
          <p
            className="mt-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            style={{ color: "var(--d-ink-muted)" }}
          >
            One email. Who is the other party, what happened, what do you
            want. No account, no forms — the court answers, asks what it
            needs, and nobody is contacted until you confirm. The entire
            proceeding can run in your inbox.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-ink)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-14"
            style={{ color: "rgba(245,241,234,0.55)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.4)" }}
            />
            How it works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {STEPS.map(([num, title, body]) => (
              <div key={num}>
                <p
                  className="d-mono text-sm mb-4"
                  style={{ color: "rgba(245,241,234,0.5)" }}
                >
                  {num}
                </p>
                <h3
                  className="d-display text-2xl md:text-3xl mb-3"
                  style={{ color: "var(--d-bone)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "rgba(245,241,234,0.7)" }}
                >
                  {body}
                </p>
              </div>
            ))}
            <div
              className="rounded-2xl border p-8 flex flex-col justify-between"
              style={{ borderColor: "rgba(245,241,234,0.25)" }}
            >
              <p
                className="d-display italic text-xl md:text-2xl leading-snug"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                Every ruling is drafted, adversarially self-reviewed against
                the cited law, and revised — before you ever see it.
              </p>
              <a
                href={CASE_MAILTO}
                className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium self-start transition-colors"
                style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}
              >
                Start with one email <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR AI AGENT */}
      <section
        id="agents"
        className="d-rule-top px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.3em] mb-8"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <span
                  className="inline-block w-8 h-px align-middle mr-3"
                  style={{ background: "var(--d-line)" }}
                />
                Your AI agent pleads. You decide.
              </p>
              <h2
                className="d-display text-4xl md:text-5xl leading-tight max-w-[18ch]"
                style={{ color: "var(--d-ink)" }}
              >
                Send your agent to court instead of yourself.
              </h2>
              <p
                className="mt-8 text-base md:text-lg leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Claude, ChatGPT, Perplexity and Grok connect to the court
                directly over MCP: your agent answers the intake questions,
                evaluates the settlement proposal, and drafts objection
                grounds on your behalf. Payments and decisions always stay
                with you.
              </p>
              <p
                className="mt-6 text-sm leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                No agent? The identical process runs over email ({CASE_EMAIL})
                — all channels write into the same case.
              </p>
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--d-line)", background: "var(--d-bone-soft)" }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-5"
                style={{ color: "var(--d-ink-muted)" }}
              >
                MCP connector — one URL for every agent
              </p>
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border px-5 py-4"
                style={{ borderColor: "var(--d-line)", background: "var(--d-bone)" }}
              >
                <p
                  className="d-mono text-sm break-all flex-1"
                  style={{ color: "var(--d-ink)" }}
                >
                  {MCP_URL}
                </p>
                <CopyButton value={MCP_URL} />
              </div>
              <ul
                className="mt-6 space-y-3 text-sm font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <li>· create_dispute — open a case for your principal</li>
                <li>· send_message — answer the court&apos;s intake questions</li>
                <li>· respond_to_proposal — accept, or hand the objection to your human</li>
                <li>· submit_ruling_grounds — file the objection reasons</li>
              </ul>
              <p
                className="mt-6 text-xs leading-relaxed"
                style={{ color: "var(--d-ink-muted)" }}
              >
                No key needed to connect: an unauthenticated agent is walked
                through the account and token setup by the court itself.
              </p>
            </div>
          </div>

          {/* Works with — provider grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--d-line)" }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Image
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    width={26}
                    height={26}
                  />
                  <p className="text-base font-medium" style={{ color: "var(--d-ink)" }}>
                    {provider.name}
                  </p>
                </div>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {provider.plans}
                </p>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {provider.how}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-6 text-xs"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Same endpoint everywhere — paste the URL above. Product names and
            logos belong to their owners.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-ink)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-14"
            style={{ color: "rgba(245,241,234,0.55)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.4)" }}
            />
            Pricing
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="rounded-2xl border p-10"
              style={{ borderColor: "rgba(245,241,234,0.25)" }}
            >
              <h3 className="d-display text-3xl mb-2" style={{ color: "var(--d-bone)" }}>
                Free
              </h3>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-8"
                style={{ color: "rgba(245,241,234,0.5)" }}
              >
                The whole way to a settlement
              </p>
              <ul
                className="space-y-3 text-sm font-light"
                style={{ color: "rgba(245,241,234,0.8)" }}
              >
                <li>· Opening a case &amp; inviting the other party</li>
                <li>· Confidential intake with both sides</li>
                <li>· The settlement proposal — accepting or rejecting it</li>
                <li>· The ruling that follows a rejection, and accepting it</li>
              </ul>
            </div>

            <div
              className="rounded-2xl border p-10"
              style={{
                borderColor: "rgba(245,241,234,0.25)",
                background: "var(--d-ink-soft)",
              }}
            >
              <h3 className="d-display text-3xl mb-2" style={{ color: "var(--d-bone)" }}>
                From €250
              </h3>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-8"
                style={{ color: "rgba(245,241,234,0.5)" }}
              >
                When a human reads the whole file
              </p>
              <ul
                className="space-y-3 text-sm font-light"
                style={{ color: "rgba(245,241,234,0.8)" }}
              >
                <li>· Human confirmation of a ruling — certification after full file review, a prerequisite for use before a state court</li>
                <li>· Objection to a ruling — open-ended human re-examination</li>
                <li>· Available only after the first ruling — everything before it is free</li>
              </ul>
              <p
                className="mt-8 text-xs leading-relaxed"
                style={{ color: "rgba(245,241,234,0.55)" }}
              >
                Priced by the size of your case file: €150 per estimated hour
                of reading time, €250 minimum. The exact price is always shown
                before you pay.
              </p>
            </div>
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
            <p className="d-display text-2xl mb-3" style={{ color: "var(--d-ink)" }}>
              din.org
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-md"
              style={{ color: "var(--d-ink-muted)" }}
            >
              The Agents Court — neutral, AI-led dispute resolution between
              two parties, with human review built in.
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Start
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <a href={CASE_MAILTO} className="hover:opacity-70 transition-opacity">
                  {CASE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/agents" className="hover:opacity-70 transition-opacity">
                  Connect your agent
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:opacity-70 transition-opacity">
                  Journal
                </Link>
              </li>
              <li>
                <a href={LOGIN_URL} className="hover:opacity-70 transition-opacity">
                  Log in
                </a>
              </li>
              <li>
                <Link href="/de" className="hover:opacity-70 transition-opacity">
                  Deutsch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Legal
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <Link href="/privacy" className="hover:opacity-70 transition-opacity">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-70 transition-opacity">
                  Terms
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>
              Din.org LLC · 8 The Green, Suite B
              <br />
              Dover, DE 19901 · USA
              <br />© 2026 Din.org LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
