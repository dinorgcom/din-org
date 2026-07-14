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
  title: "din.org — Resolve disputes by email",
  description:
    "Turn an email dispute into a structured resolution process: private intake for both sides, a shared case record, a free settlement proposal, a reasoned private assessment as a PDF, and human review on request. Start at case@din.org.",
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
    locale: "en_US",
    url: "https://din.org",
    siteName: "din.org",
    title: "din.org — Resolve disputes by email",
    description:
      "End the email dispute: private intake, a shared case record, a free settlement proposal, and human review on request.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — Resolve disputes by email",
    description:
      "End the email dispute: private intake, a shared case record, a free settlement proposal, and human review on request.",
  },
};

// The dispute-resolution MCP endpoint — the one URL every agent connects to.
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
    "Private intake, shared record",
    "din.org speaks with each party — or their AI agent — in a separate private channel. Intake conversations remain private, while submitted case material is organised into a shared record that both parties can inspect and answer.",
  ],
  [
    "04",
    "A free settlement proposal",
    "Once both intakes are complete, din.org drafts concrete settlement terms. If both parties accept the same terms, the dispute is resolved. This path is free of charge.",
  ],
  [
    "05",
    "If needed: a reasoned assessment",
    "If the proposal is rejected or expires, din.org prepares a reasoned, source-backed private assessment of the shared record as a PDF. It is not a state-court judgment. You can accept it at no charge or request paid human review — as confirmation or objection.",
  ],
];

export default function DisputeResolutionHome() {
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
              Dispute resolution for people and AI agents
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
              Disputes today get lost in endless AI-written email chains that
              nobody reads and nobody wins. din.org works neutrally between
              both sides: we speak privately with each party — or their AI
              agent — organise the material into a shared record, and make a
              concrete settlement proposal. Free of charge. If both parties
              accept, the dispute is resolved.
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
              Free settlement proposal · Reasoned private assessment as PDF ·
              Human review on request
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
            One email: who is the other party, what happened, and what do you
            want? No account, no forms. din.org replies, asks focused
            questions, and contacts nobody until you confirm. The entire
            process can run in your inbox.
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
                Every assessment is drafted, checked critically against the
                cited sources, and revised before you receive it.
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
                Your AI agent handles the correspondence. You decide.
              </p>
              <h2
                className="d-display text-4xl md:text-5xl leading-tight max-w-[18ch]"
                style={{ color: "var(--d-ink)" }}
              >
                Send your agent into the resolution process.
              </h2>
              <p
                className="mt-8 text-base md:text-lg leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Claude, ChatGPT, Perplexity and Grok connect directly to
                din.org over MCP. Within the permissions you grant, your agent
                can answer intake questions, submit material to the shared
                record, evaluate a settlement proposal, and draft objections.
                Payments, settlement acceptance, and final instructions remain
                with you unless you expressly authorise and confirm them.
              </p>
              <p
                className="mt-6 text-sm leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                No agent? The same process runs over email ({CASE_EMAIL}). All
                channels contribute to the same case record without exposing
                either party&apos;s private intake conversation.
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
                <li>· create_dispute — open an authorised case for your principal</li>
                <li>· send_message — answer intake questions and submit material</li>
                <li>· respond_to_proposal — relay a response within granted authority</li>
                <li>· submit_ruling_grounds — submit reasons for an objection</li>
              </ul>
              <p
                className="mt-6 text-xs leading-relaxed"
                style={{ color: "var(--d-ink-muted)" }}
              >
                No key is needed for the initial connection. din.org guides an
                unauthenticated agent through account and access setup. Every
                case action remains limited to the authenticated actor and the
                authority available at that stage.
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
                The whole path to an agreement
              </p>
              <ul
                className="space-y-3 text-sm font-light"
                style={{ color: "rgba(245,241,234,0.8)" }}
              >
                <li>· Opening a case &amp; inviting the other party</li>
                <li>· Private intake and a shared, answerable case record</li>
                <li>· The settlement proposal — accepting or rejecting it</li>
                <li>· The private assessment after a rejection, and accepting it</li>
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
                <li>· Human confirmation of an assessment after full case-file review</li>
                <li>· Objection to an assessment with open-ended human re-examination</li>
                <li>· Available only after the first assessment — everything before it is free</li>
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
              Neutral, AI-supported dispute resolution between two parties —
              with private intake and human review on request.
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
