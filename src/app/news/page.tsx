import type { Metadata } from "next";
import Link from "next/link";
import { DecisionsShell } from "@/components/DecisionsShell";

export const metadata: Metadata = {
  title: "Journal — din.org",
  description:
    "din.org research on the AI email war: why AI-generated correspondence overwhelms disputes, and how a structured case record turns it into facts, evidence, and a path to resolution.",
  alternates: {
    canonical: "https://din.org/news",
    languages: {
      en: "https://din.org/news",
      de: "https://din.org/de/news",
      "x-default": "https://din.org/news",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://din.org/news",
    siteName: "din.org",
    title: "Journal — the AI email war, and how to end it — din.org",
    description:
      "Research on AI-generated correspondence, structured case records, evidence, and settlement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — the AI email war — din.org",
    description:
      "Research on AI-generated correspondence, structured case records, evidence, and settlement.",
  },
};

// The core concept: din.org's own research on the AI email war.
const featured = [
  {
    eyebrow: "Research",
    date: "July 2026",
    title: "The Economics of the AI Email War",
    lead: "Generative AI makes legalistic correspondence nearly free to produce. Reading, verifying, and answering it still consumes expensive human attention — a new asymmetry in disputes.",
    pull: "The sender saves minutes. The recipient inherits hours. Structured resolution changes that equation.",
    href: "/news/economics-of-the-ai-email-war",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=675&fit=crop",
  },
  {
    eyebrow: "Process",
    date: "July 2026",
    title: "From AI Workslop to a Usable Case Record",
    lead: "Why another long AI reply is the wrong answer — and how a structured process turns correspondence into facts, evidence, witnesses, and a finite path to resolution.",
    pull: "Don't reward volume. Build a record both parties can inspect, answer, and close.",
    href: "/news/from-ai-workslop-to-a-usable-case-record",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=675&fit=crop",
  },
];

// A short curated set of the most current, on-topic developments.
const inTheNews = [
  {
    date: "June 2026",
    source: "MIT Technology Review",
    tag: "AI Courts",
    title: "How Courts Are Coping with a Flood of AI-Generated Lawsuits",
    note: "Court documents flagged as AI-written rose from 1% in 2023 to 18% in 2026; one defendant sent over 300 AI-generated accusatory emails. The email war, arriving in court.",
    url: "https://www.technologyreview.com/2026/06/04/1138391/courts-coping-ai-lawsuits/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=320&h=320&fit=crop",
  },
  {
    date: "April 2026",
    source: "European Commission",
    tag: "Regulation",
    title: "EU AI Act High-Risk Rules Take Effect August 2",
    note: "Annex III classifies AI assisting judicial authorities — including arbitration — as high-risk, requiring documented oversight, transparency, and conformity assessments.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=320&h=320&fit=crop",
  },
  {
    date: "March 2026",
    source: "LawSites",
    tag: "Industry",
    title: "AAA Launches Resolution Simulator, Expanding Its AI Arbitrator",
    note: "A one-party simulator that produces a non-binding AI decision to help parties evaluate a case before formal proceedings. Pre-litigation assessment is becoming a product category.",
    url: "https://www.lawnext.com/2026/03/american-arbitration-association-launches-resolution-simulator-expanding-its-ai-arbitrator-tool.html",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=320&h=320&fit=crop",
  },
  {
    date: "February 2026",
    source: "Bloomberg Law",
    tag: "Legitimacy",
    title: "Robot Arbitrators Spark Conflicts Over AI in Dispute Resolution",
    note: "Bias, opacity of reasoning, enforceability, and consent. Platforms that can answer 'how exactly did the AI decide this?' will lead; those that can't will face appeals.",
    url: "https://news.bloomberglaw.com/daily-labor-report/robot-arbitrators-spark-conflicts-over-ai-in-dispute-resolution",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=320&h=320&fit=crop",
  },
  {
    date: "November 2025",
    source: "AAA-ICDR",
    tag: "AI Courts",
    title: "AAA Launches AI Arbitrator for Construction Disputes",
    note: "Documents-only cases resolved 25–35% faster at 30–50% lower cost, with a human arbitrator reviewing every draft award. Institutional-scale proof the model works.",
    url: "https://www.adr.org/ai-arbitrator/",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=320&h=320&fit=crop",
  },
];

// Primary research and soft-law instruments — the reference shelf behind
// the email-war thesis.
const studies = [
  {
    date: "September 2025",
    source: "Harvard Business Review · BetterUp Labs & Stanford",
    tag: "Study",
    title: "AI-Generated “Workslop” Is Destroying Productivity",
    note: "The study that named the phenomenon: 41% of workers received AI workslop within a month, each incident taking nearly two hours to untangle — about $186 per employee per month.",
    url: "https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity",
  },
  {
    date: "September 2025",
    source: "Ciarb",
    tag: "Guideline",
    title: "Guideline on the Use of AI in Arbitration",
    note: "The Chartered Institute of Arbitrators' framework: benefits and risks, recommendations for parties and tribunals, and arbitrators' powers over AI use — with a model agreement and sample procedural orders.",
    url: "https://www.ciarb.org/news-listing/ciarb-launches-guideline-on-the-use-of-ai-in-arbitration/",
  },
  {
    date: "June 2025",
    source: "Microsoft WorkLab",
    tag: "Study",
    title: "Work Trend Index: Breaking Down the Infinite Workday",
    note: "117 emails and 153 chat messages per worker per day, an interruption every two minutes — the baseline inbox into which AI-generated dispute correspondence now lands.",
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday",
  },
  {
    date: "April 2024",
    source: "SVAMC",
    tag: "Guideline",
    title: "Guidelines on the Use of Artificial Intelligence in Arbitration",
    note: "The Silicon Valley Arbitration & Mediation Center's first-edition best practices: confidentiality, case-by-case disclosure, and the rule that arbitrators may not delegate their mandate to AI.",
    url: "https://svamc.org/svamc-publishes-guidelines-on-the-use-of-artificial-intelligence-in-arbitration/",
  },
];

type ExternalItem = {
  date: string;
  source: string;
  tag: string;
  title: string;
  note: string;
  url: string;
  // Optional thumbnail — used for "In the news"; the studies shelf stays text-only.
  image?: string;
};

function ExternalRow({ item }: { item: ExternalItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid grid-cols-1 ${
        item.image
          ? "md:grid-cols-[130px_120px_1fr_auto]"
          : "md:grid-cols-[130px_1fr_auto]"
      } gap-2 md:gap-8 py-7 items-start`}
      style={{ borderBottom: "1px solid var(--d-line)" }}
    >
      <div
        className="text-xs uppercase tracking-[0.15em] pt-1"
        style={{ color: "var(--d-ink-muted)" }}
      >
        {item.date}
      </div>
      {item.image ? (
        <div
          className="hidden md:block overflow-hidden rounded-xl"
          style={{ border: "1px solid var(--d-line)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ filter: "saturate(0.82)" }}
          />
        </div>
      ) : null}
      <div>
        <div
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] mb-2"
          style={{ color: "var(--d-ink-muted)" }}
        >
          <span style={{ color: "var(--d-accent)" }}>{item.tag}</span>
          <span className="h-px w-5" style={{ background: "var(--d-line)" }} />
          <span>{item.source}</span>
        </div>
        <h3
          className="d-display text-xl md:text-2xl leading-snug transition-opacity group-hover:opacity-70"
          style={{ color: "var(--d-ink)" }}
        >
          {item.title}
        </h3>
        <p
          className="mt-2 text-sm leading-relaxed font-light max-w-2xl"
          style={{ color: "var(--d-ink-muted)" }}
        >
          {item.note}
        </p>
      </div>
      <div
        className="hidden md:block text-lg pt-1 transition-transform group-hover:translate-x-0.5"
        style={{ color: "var(--d-accent)" }}
        aria-hidden
      >
        ↗
      </div>
    </a>
  );
}

export default function NewsPage() {
  return (
    <DecisionsShell locale="en">
      {/* Hero */}
      <section className="px-6 md:px-10 pt-40 pb-16 md:pb-24" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-6"
            style={{ color: "var(--d-accent)" }}
          >
            Journal
          </p>
          <h1
            className="d-display text-5xl md:text-7xl leading-[1.03] max-w-4xl"
            style={{ color: "var(--d-ink)" }}
          >
            The email war, and how to end it.
          </h1>
          <p
            className="mt-8 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Research on AI-generated correspondence, evidence handling, structured
            case records, and the path to settlement.
          </p>
        </div>
      </section>

      {/* Featured — din.org research */}
      <section className="px-6 md:px-10 pb-8" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block overflow-hidden rounded-2xl transition-colors"
              style={{ background: "var(--d-bone-soft)", border: "1px solid var(--d-line)" }}
            >
              <div
                className="relative h-52 md:h-60 overflow-hidden"
                style={{ borderBottom: "1px solid var(--d-line)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ filter: "saturate(0.82)" }}
                />
              </div>
              <div className="p-8 md:p-10">
              <div
                className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <span style={{ color: "var(--d-accent)" }}>{a.eyebrow}</span>
                <span className="h-px w-6" style={{ background: "var(--d-line)" }} />
                <span>{a.date}</span>
              </div>
              <h2
                className="d-display mt-5 text-2xl md:text-3xl leading-tight"
                style={{ color: "var(--d-ink)" }}
              >
                {a.title}
              </h2>
              <p
                className="mt-4 text-base leading-relaxed font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                {a.lead}
              </p>
              <p
                className="d-display mt-5 text-lg italic leading-snug"
                style={{ color: "var(--d-ink-soft)" }}
              >
                “{a.pull}”
              </p>
              <span
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "var(--d-accent)" }}
              >
                Read the analysis{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* In the news — curated external context */}
      <section className="px-6 md:px-10 pt-12 pb-4" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.25em] mb-2 d-rule-top pt-10"
            style={{ color: "var(--d-ink-muted)" }}
          >
            In the news
          </p>
          <div>
            {inTheNews.map((a) => (
              <ExternalRow key={a.url} item={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Studies & guidelines — whitepapers and soft law */}
      <section className="px-6 md:px-10 pt-12 pb-32" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.25em] mb-2 pt-10"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Studies &amp; guidelines
          </p>
          <div>
            {studies.map((a) => (
              <ExternalRow key={a.url} item={a} />
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 max-w-3xl" style={{ color: "var(--d-ink-muted)" }}>
            Editorial note: external sources are linked for context. Figures and claims
            should be read in light of each source’s methodology and publication date.
          </p>
        </div>
      </section>
    </DecisionsShell>
  );
}
