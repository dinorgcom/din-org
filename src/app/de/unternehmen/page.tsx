import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI-Schiedssoftware für Unternehmen — din.org",
  description:
    "KI-Schiedssoftware und Plattform zur Streitbeilegung für Unternehmen. Handelsstreitigkeiten in Tagen statt Jahren beilegen — zu 1–5 % der Gerichtskosten. Für Versicherer, Marktplätze, B2B-SaaS.",
  keywords: [
    "Schiedssoftware Unternehmen",
    "Streitbeilegungssoftware",
    "Enterprise Streitbeilegung",
    "KI-Schiedsplattform",
    "KI Streitbeilegung",
    "Online Streitbeilegungssoftware",
    "B2B Schiedsverfahren",
  ],
  alternates: {
    canonical: "https://din.org/de/unternehmen",
    languages: {
      en: "https://din.org/enterprise",
      de: "https://din.org/de/unternehmen",
      "x-default": "https://din.org/enterprise",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "KI-Schiedssoftware für Unternehmen — din.org",
    description:
      "Die KI-Schiedsplattform für Unternehmen. 90 % Kostenreduktion, 100x Streit-Durchsatz. Pilotprogramme für Versicherer, Marktplätze, B2B-Plattformen.",
    url: "https://din.org/de/unternehmen",
  },
};

export default function UnternehmenPage() {
  const stats = [
    { k: "10–30 Tage", v: "statt 2–5 Jahre an klassischen Gerichten" },
    { k: "99 % Ersparnis", v: "im Vergleich zu klassischen Litigationskosten" },
    { k: "Smart & fair", v: "KI-getriebene Fairness mit menschlicher Aufsicht" },
  ];

  const industries = [
    {
      title: "E-Commerce & Marktplätze",
      body: "Streitigkeiten zwischen Verkäufern und Käufern, Zahlungskonflikte und Rückgabefragen in Tagen statt Monaten lösen.",
      stat: "Bis zu 90 % Kostenreduktion gegenüber klassischer Litigation",
    },
    {
      title: "Versicherungen",
      body: "Schadensstreitigkeiten und Regressfälle beschleunigen. Verwaltungsaufwand reduzieren und Streitigkeiten effizient beilegen.",
      stat: "100× mehr Streitigkeiten bei gleichen Ressourcen verarbeiten",
    },
    {
      title: "SaaS- & Tech-Unternehmen",
      body: "Service-Streitigkeiten, Lizenzkonflikte und Vertragsstreitigkeiten zügig erledigen. Fokus auf das Produkt halten.",
      stat: "Jahrelange Litigation vermeiden, in Wochen lösen",
    },
    {
      title: "Anwaltskanzleien & Rechtsdienstleister",
      body: "Bieten Sie Ihren Mandanten eine schnellere, kosteneffizientere Alternative zu klassischen Schieds- und Gerichtsverfahren.",
      stat: "60–80 % Ersparnis an Mandanten weitergeben",
    },
    {
      title: "Finanzdienstleistungen",
      body: "Handelsstreitigkeiten, Zahlungskonflikte und Vertragsstreitigkeiten transparent klären. Compliance bewahren.",
      stat: "Teure Litigationsbudgets eliminieren",
    },
    {
      title: "Immobilien & Bau",
      body: "Eigentumsstreitigkeiten, Vertragsverletzungen und Zahlungsfragen ohne langwierige Gerichtsverfahren regeln.",
      stat: "Projekte werden fertig — statt in der Litigation steckenzubleiben",
    },
  ];

  const benefits: { title: string; items: string[] }[] = [
    {
      title: "Massive Kostenersparnis",
      items: [
        "Teure Anwaltsgebühren entfallen",
        "Keine langwierigen Gerichtsverfahren",
        "Lange Discovery-Prozesse vermeiden",
        "Total Cost of Ownership um 90 %+ reduzieren",
      ],
    },
    {
      title: "Blitzschnelle Lösung",
      items: [
        "Streitigkeiten in Tagen lösen, nicht in Jahren",
        "Im Streit gebundenes Kapital freisetzen",
        "Ihr Team aus der Litigations-Belastung befreien",
        "Schneller zurück ins Geschäft",
      ],
    },
  ];

  const features: { title: string; body: string; detail: string }[] = [
    { title: "Schnelle Lösung", body: "KI-Analyse beschleunigt das Schiedsverfahren", detail: "Enterprise-Fälle erreichen innerhalb von 24 Stunden nach Beweiseinreichung einen vollständig begründeten Spruch." },
    { title: "Sicher & vertraulich", body: "Verschlüsselung auf Bankniveau schützt Ihre sensiblen Daten", detail: "AES-256 im Ruhezustand, TLS 1.3 bei der Übertragung — Ihre Unternehmensdaten bleiben in SOC-2-konformer Infrastruktur." },
    { title: "Internationale Reichweite", body: "Grenzüberschreitende Streitigkeiten leicht beilegen", detail: "Keine geografischen Schranken — Teams in jedem Land können ohne jurisdiktionelle Verzögerungen teilnehmen." },
    { title: "Bis zu 99 % Kostenersparnis", body: "Drastische Reduktion der Schiedskosten dank KI-Effizienz", detail: "Ein vollständiger Enterprise-Fall ab 15 €, verglichen mit dem Median von 91.000 €+ klassischer Handelsstreitigkeiten." },
    { title: "Video-Vernehmung", body: "Zeugenvernehmungen aus der Ferne per Videokonferenz", detail: "Simultanes Kreuzverhör aller Parteien — keine Reisen, keine Terminkonflikte." },
    { title: "Mehrere KI-Sachverständige", body: "Holen Sie Gutachten von verschiedenen KIs Ihrer Wahl ein", detail: "Rechtliche, finanzielle, technische oder branchenspezifische KI-Analyse, zugeschnitten auf Ihre Enterprise-Bedürfnisse." },
    { title: "Menschliche Aufsicht", body: "Menschliche Aufsicht sichert die Gültigkeit vor staatlichen Gerichten", detail: "Berufung gegen jeden Spruch mit bis zu 7 menschlichen Schiedsrichtern als bindender Zweitmeinung." },
    { title: "Identitätsprüfung", body: "Identitätsverifikation aller Beteiligten für mehr Sicherheit", detail: "Verifikation per amtlichem Ausweis verhindert Betrug und sichert Corporate Accountability." },
    { title: "Persönliche Voreingenommenheit vermeiden", body: "KI-Entscheidungen verringern subjektive Beurteilung", detail: "Keine Müdigkeit, keine Vorurteile, keine Politik — jede Entscheidung beweisbasiert und vollständig zitiert." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Unternehmen
          </p>
          <h1 className="display text-5xl md:text-7xl font-semibold max-w-5xl">
            Enterprise-Lösungen für moderne Streitbeilegung
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Hören Sie auf, Millionen für klassische Litigation zu verschwenden.
            Streitigkeiten in Tagen statt Jahren lösen — bei 90 % Kostenersparnis.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/de/fall-einreichen"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Enterprise-Fall starten
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="mailto:enterprise@din.org"
              className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-base font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Vertrieb kontaktieren
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((s) => (
            <div key={s.k}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">{s.k}</p>
              <p className="mt-3 text-sm md:text-base text-bone/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Branchen, die wir bedienen
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Gebaut für jede Branche.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((ind) => (
            <article
              key={ind.title}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">{ind.title}</h3>
              <p className="text-bone/70 text-base md:text-lg mb-6">{ind.body}</p>
              <p className="text-accent text-sm font-medium">{ind.stat}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits — yellow */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Enterprise-Vorteile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="display text-3xl md:text-5xl font-semibold mb-6">{b.title}</h3>
                <ul className="space-y-3 text-base md:text-lg opacity-80">
                  {b.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Warum din.org führt
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Enterprise-Funktionen, skalierbar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">{f.title}</h3>
              <p className="text-bone/70 text-base group-hover:text-ink/70 transition-colors duration-200">{f.body}</p>
              <p className="mt-3 text-sm text-ink font-medium invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">{f.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Bereit, Ihre Streitbeilegung neu zu denken?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            Schließen Sie sich Unternehmen weltweit an, die Millionen sparen und
            faire Ergebnisse schneller erzielen.
          </p>
          <Link
            href="/de/fall-einreichen"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            Enterprise-Fall jetzt starten
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
