import type { Metadata } from "next";
import Link from "next/link";
import { DecisionsShell } from "@/components/DecisionsShell";

export const metadata: Metadata = {
  title: "Journal — din.org",
  description:
    "din.org-Analysen zum KI-E-Mail-Krieg: warum KI-generierte Korrespondenz Streitfälle überflutet — und wie eine strukturierte Fallakte daraus Fakten, Beweise und einen Weg zur Lösung macht.",
  alternates: {
    canonical: "https://din.org/de/news",
    languages: {
      en: "https://din.org/news",
      de: "https://din.org/de/news",
      "x-default": "https://din.org/news",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://din.org/de/news",
    siteName: "din.org",
    title: "Journal — der KI-E-Mail-Krieg und wie man ihn beendet — din.org",
    description:
      "Analysen zu KI-generierter Korrespondenz, strukturierten Fallakten, Beweisen und Einigung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — der KI-E-Mail-Krieg — din.org",
    description:
      "Analysen zu KI-generierter Korrespondenz, strukturierten Fallakten, Beweisen und Einigung.",
  },
};

const featured = [
  {
    eyebrow: "Analyse",
    date: "Juli 2026",
    title: "Die Ökonomie des KI-E-Mail-Kriegs",
    lead: "Generative KI macht juristisch anmutende Korrespondenz nahezu kostenlos. Sie zu lesen, zu prüfen und zu beantworten kostet weiterhin teure menschliche Aufmerksamkeit — eine neue Asymmetrie im Streit.",
    pull: "Der Absender spart Minuten. Der Empfänger erbt Stunden. Strukturierte Beilegung ändert diese Rechnung.",
    href: "/de/news/oekonomie-des-ki-email-kriegs",
  },
  {
    eyebrow: "Verfahren",
    date: "Juli 2026",
    title: "Von KI-Workslop zur brauchbaren Fallakte",
    lead: "Warum eine weitere lange KI-Antwort die falsche Reaktion ist — und wie ein strukturiertes Verfahren Korrespondenz in Fakten, Beweise, Zeugen und einen endlichen Weg zur Lösung überführt.",
    pull: "Belohnen Sie nicht das Volumen. Bauen Sie eine Akte, die beide Seiten prüfen, beantworten und schließen können.",
    href: "/de/news/von-ki-workslop-zur-brauchbaren-fallakte",
  },
];

const inTheNews = [
  {
    date: "Juni 2026",
    source: "MIT Technology Review",
    tag: "KI-Gerichte",
    title: "Wie Gerichte mit der Flut KI-generierter Klagen umgehen",
    note: "Der Anteil als KI-geschrieben erkannter Gerichtsdokumente stieg von 1 % (2023) auf 18 % (2026); ein Beklagter verschickte über 300 KI-generierte Vorwurfs-E-Mails. Der E-Mail-Krieg, angekommen vor Gericht.",
    url: "https://www.technologyreview.com/2026/06/04/1138391/courts-coping-ai-lawsuits/",
  },
  {
    date: "April 2026",
    source: "Europäische Kommission",
    tag: "Regulierung",
    title: "EU-KI-Verordnung: Hochrisiko-Regeln ab 2. August",
    note: "Anhang III stuft KI, die Justizbehörden unterstützt — auch Schiedsverfahren — als hochriskant ein: dokumentierte Aufsicht, Transparenz und Konformitätsbewertungen sind Pflicht.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
  },
  {
    date: "März 2026",
    source: "LawSites",
    tag: "Branche",
    title: "AAA startet Resolution Simulator und erweitert ihren KI-Schiedsrichter",
    note: "Ein Ein-Parteien-Simulator erzeugt eine unverbindliche KI-Entscheidung zur Einschätzung des Falls vor dem Verfahren. Vorprozessuale Bewertung wird zur Produktkategorie.",
    url: "https://www.lawnext.com/2026/03/american-arbitration-association-launches-resolution-simulator-expanding-its-ai-arbitrator-tool.html",
  },
  {
    date: "Februar 2026",
    source: "Bloomberg Law",
    tag: "Legitimität",
    title: "Roboter-Schiedsrichter lösen Konflikte über KI in der Streitbeilegung aus",
    note: "Verzerrung, undurchsichtige Begründungen, Vollstreckbarkeit, Zustimmung. Plattformen, die „Wie genau hat die KI entschieden?“ beantworten können, führen; andere kassieren Einsprüche.",
    url: "https://news.bloomberglaw.com/daily-labor-report/robot-arbitrators-spark-conflicts-over-ai-in-dispute-resolution",
  },
  {
    date: "November 2025",
    source: "AAA-ICDR",
    tag: "KI-Gerichte",
    title: "AAA startet KI-Schiedsrichter für Baustreitigkeiten",
    note: "Reine Dokumentenfälle: 25–35 % schneller, 30–50 % günstiger — jeder Urteilsentwurf von einem menschlichen Schiedsrichter geprüft. Beleg auf institutioneller Ebene, dass das Modell trägt.",
    url: "https://www.adr.org/ai-arbitrator/",
  },
];

// Primärforschung und Soft-Law-Instrumente — das Referenzregal hinter der
// E-Mail-Kriegs-These.
const studies = [
  {
    date: "September 2025",
    source: "Harvard Business Review · BetterUp Labs & Stanford",
    tag: "Studie",
    title: "KI-generierter „Workslop“ zerstört Produktivität",
    note: "Die Studie, die dem Phänomen den Namen gab: 41 % der Beschäftigten erhielten binnen eines Monats KI-Workslop; jeder Vorfall kostet knapp zwei Stunden Aufarbeitung — rund 186 $ pro Kopf und Monat.",
    url: "https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity",
  },
  {
    date: "September 2025",
    source: "Ciarb",
    tag: "Leitlinie",
    title: "Guideline on the Use of AI in Arbitration",
    note: "Das Rahmenwerk des Chartered Institute of Arbitrators: Nutzen und Risiken, Empfehlungen für Parteien und Tribunale, Befugnisse der Schiedsrichter zum KI-Einsatz — samt Mustervereinbarung und Verfahrensanordnungen.",
    url: "https://www.ciarb.org/news-listing/ciarb-launches-guideline-on-the-use-of-ai-in-arbitration/",
  },
  {
    date: "Juni 2025",
    source: "Microsoft WorkLab",
    tag: "Studie",
    title: "Work Trend Index: Der endlose Arbeitstag",
    note: "117 E-Mails und 153 Chat-Nachrichten pro Kopf und Tag, alle zwei Minuten eine Unterbrechung — das Grundrauschen, in das KI-generierte Streitkorrespondenz heute einschlägt.",
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday",
  },
  {
    date: "April 2024",
    source: "SVAMC",
    tag: "Leitlinie",
    title: "Guidelines on the Use of Artificial Intelligence in Arbitration",
    note: "Best Practices des Silicon Valley Arbitration & Mediation Center in erster Auflage: Vertraulichkeit, Offenlegung im Einzelfall — und die Regel, dass Schiedsrichter ihr Mandat nicht an KI delegieren dürfen.",
    url: "https://svamc.org/svamc-publishes-guidelines-on-the-use-of-artificial-intelligence-in-arbitration/",
  },
];

type ExternalItem = (typeof inTheNews)[number];

function ExternalRow({ item }: { item: ExternalItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 md:grid-cols-[130px_1fr_auto] gap-2 md:gap-8 py-7 items-start"
      style={{ borderBottom: "1px solid var(--d-line)" }}
    >
      <div
        className="text-xs uppercase tracking-[0.15em] pt-1"
        style={{ color: "var(--d-ink-muted)" }}
      >
        {item.date}
      </div>
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

export default function NewsDE() {
  return (
    <DecisionsShell locale="de">
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
            Der E-Mail-Krieg — und wie man ihn beendet.
          </h1>
          <p
            className="mt-8 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Analysen zu KI-generierter Korrespondenz, Umgang mit Beweisen,
            strukturierten Fallakten und dem Weg zur Einigung.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-8" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block rounded-2xl p-8 md:p-10 transition-colors"
              style={{ background: "var(--d-bone-soft)", border: "1px solid var(--d-line)" }}
            >
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
                „{a.pull}“
              </p>
              <span
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "var(--d-accent)" }}
              >
                Analyse lesen{" "}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pt-12 pb-4" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.25em] mb-2 d-rule-top pt-10"
            style={{ color: "var(--d-ink-muted)" }}
          >
            In den Medien
          </p>
          <div>
            {inTheNews.map((a) => (
              <ExternalRow key={a.url} item={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-12 pb-32" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[11px] uppercase tracking-[0.25em] mb-2 pt-10"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Studien &amp; Leitlinien
          </p>
          <div>
            {studies.map((a) => (
              <ExternalRow key={a.url} item={a} />
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 max-w-3xl" style={{ color: "var(--d-ink-muted)" }}>
            Redaktioneller Hinweis: Externe Quellen werden zur Einordnung verlinkt. Zahlen
            und Aussagen sind ihrer jeweiligen Methodik und ihrem Veröffentlichungsstand
            entsprechend zu lesen.
          </p>
        </div>
      </section>
    </DecisionsShell>
  );
}
