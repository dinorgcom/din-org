import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anwendungsfälle — din.org",
  description:
    "Mehr als nur Schiedsgerichtsverfahren. din.org bewältigt jeden Entscheidungsprozess: Förderanträge, Genehmigungen, Lizenzen, Sozialleistungen, Wettbewerbe, Vergabeverfahren u. v. m. Dieselbe faire, schnelle, prüfbare Engine.",
  keywords: [
    "KI Entscheidungsplattform",
    "KI Förderanträge",
    "KI Genehmigung",
    "KI Sozialleistung",
    "KI Vergabeverfahren",
    "KI Lizenzierung",
    "KI Schiedsgericht Anwendungsfälle",
  ],
  alternates: {
    canonical: "https://din.org/de/anwendungsfaelle",
    languages: {
      en: "https://din.org/use-cases",
      de: "https://din.org/de/anwendungsfaelle",
      "x-default": "https://din.org/use-cases",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://din.org/de/anwendungsfaelle",
    title: "Anwendungsfälle — din.org",
    description:
      "Eine Entscheidungs-Engine, viele Felder: Förderanträge, Genehmigungen, Lizenzen, Sozialleistungen, Wettbewerbe, Vergaben und mehr.",
  },
};

const useCases = [
  {
    icon: "◉",
    title: "Förderanträge",
    applicant: "Antragsteller",
    authority: "Fördergeber",
    example:
      "Forschungsförderungen, Kulturförderungen, Start-up-Zuschüsse, Green-Tech-Subventionen. Förderkriterien, Budgetbegründung und Wirkungsnachweise — strukturiert, konsistent, unvoreingenommen geprüft.",
    timeVs: "Wochen → Tage",
  },
  {
    icon: "◈",
    title: "Bau- und Umbaugenehmigungen",
    applicant: "Bauherrin",
    authority: "Gemeinde / Behörde",
    example:
      "Baubewilligungen, Nutzungsänderungen, Denkmalschutz-Anpassungen. Strukturierte Prüfung von Plänen, Flächenwidmung, Nachbar-Einsprüchen und Sachverständigengutachten.",
    timeVs: "Monate → Wochen",
  },
  {
    icon: "◇",
    title: "Lizenzen für regulierte Tätigkeiten",
    applicant: "Berufstätige / Betriebe",
    authority: "Aufsichtsbehörde",
    example:
      "Tauchtaugnachweise, Drohnenpilotenscheine, Umgang mit Gefahrgut, Waffenbesitzkarten, Berufszulassungen. Qualifikationsprüfung mit klarem Berufungsweg.",
    timeVs: "Monate → Tage",
  },
  {
    icon: "⊟",
    title: "Sozialleistungen & Sozialhilfe",
    applicant: "Anspruchsberechtigte",
    authority: "Behörde",
    example:
      "Behinderten-Leistungen, Arbeitslosengeld, Wohnbeihilfe, Familienbeihilfe. Beweisbasierte Anspruchsprüfung mit denselben Verfahrensgarantien wie vor Gericht.",
    timeVs: "6+ Monate → 1 Woche",
  },
  {
    icon: "▲",
    title: "Wettbewerbe & Preisjurys",
    applicant: "Teilnehmende",
    authority: "Jury",
    example:
      "Designwettbewerbe, Start-up-Pitches, Forschungspreise, akademische Auszeichnungen. Strukturierte Bewertung nach veröffentlichten Kriterien — immun gegen Jury-Politik.",
    timeVs: "Subjektiv → Nachvollziehbar",
  },
  {
    icon: "◩",
    title: "Versicherungs­schäden",
    applicant: "Versicherte",
    authority: "Versicherer",
    example:
      "Sachschäden, Haftpflichtfälle, Reiseversicherung, Spezialsparten. Schnelle Triage, konsistente Anwendung der Polizzenbestimmungen, prüfbare Entscheidungen.",
    timeVs: "Wochen → Stunden",
  },
  {
    icon: "◭",
    title: "Öffentliche Vergaben",
    applicant: "Bieter",
    authority: "Vergabestelle",
    example:
      "Öffentliche Aufträge, RFQ-Bewertungen, Lieferantenauswahl. Transparente, kriterienbasierte Bewertung mit vollständigem Berufungsweg — weniger Anfechtungen, weniger Verzögerungen.",
    timeVs: "Monate → Wochen",
  },
  {
    icon: "◮",
    title: "Studienzulassung & Akkreditierung",
    applicant: "Studierende / Hochschule",
    authority: "Universität / Akkreditierer",
    example:
      "Master- und Doktoratsstudien, berufliche Akkreditierungen, Anerkennung ausländischer Qualifikationen. Konsistente, diskriminierungsfreie Bewertung im großen Maßstab.",
    timeVs: "Wochen → Stunden",
  },
  {
    icon: "◘",
    title: "Visa- & Aufenthaltsverfahren",
    applicant: "Antragsteller",
    authority: "Botschaft / Ausländerbehörde",
    example:
      "Fachkräfte-Visa, Familienzusammenführung, Aufenthaltstitel, Einbürgerung. Strukturierte Prüfung der Voraussetzungen mit eingebautem menschlichem Berufungsrecht.",
    timeVs: "Monate → Tage",
  },
  {
    icon: "⊕",
    title: "Interne Unternehmens­entscheidungen",
    applicant: "Mitarbeitende / Abteilung",
    authority: "Geschäftsführung / HR / Compliance",
    example:
      "Beförderungs-Reviews, Budgetanträge, Compliance-Ausnahmen, interne Beschwerden. Konsistente, dokumentierte Entscheidungen, die einer Prüfung standhalten.",
    timeVs: "Ad-hoc → Strukturiert",
  },
];

export default function AnwendungsfaellePage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Über das Schiedsgericht hinaus
          </p>
          <h1 className="display text-4xl md:text-8xl leading-[0.95] font-semibold max-w-5xl">
            Eine Entscheidungs-
            <br />
            Engine. Jedes Feld,
            <br />
            das Fairness braucht.
          </h1>
          <p className="mt-10 text-lg md:text-2xl text-bone/70 max-w-3xl leading-relaxed">
            Gerichte sind nicht der einzige Ort, an dem Entscheidungen fair,
            schnell und nachprüfbar sein müssen. Förderanträge, Baugenehmigungen,
            Lizenzen, Sozialleistungen, Wettbewerbsjurys — sie alle folgen dem
            gleichen Muster. din.org deckt sie alle ab.
          </p>
        </div>
      </section>

      {/* THE UNIVERSAL PATTERN */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Das universelle Muster
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-5xl leading-[0.95]">
            Antrag &rarr; Beweise &rarr; Entscheidung &rarr; Berufung.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80 leading-relaxed">
            Ob Gesellschafterstreit, Förderantrag oder Baugenehmigung — jemand
            beantragt etwas, Beweise werden vorgelegt, Sachverständige geben
            Stellungnahmen ab, eine Entscheidung wird getroffen, eine Berufung
            ist möglich. Immer dieselbe Struktur. Genau dafür wurde din.org
            gebaut.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-14 md:mt-20">
            {[
              { n: "01", label: "Antrag" },
              { n: "02", label: "Beweise" },
              { n: "03", label: "Sachverständige" },
              { n: "04", label: "Entscheidung" },
              { n: "05", label: "Berufung" },
            ].map((step) => (
              <div key={step.n} className="bg-ink text-bone rounded-2xl p-5 md:p-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-accent mb-3">
                  {step.n}
                </p>
                <p className="text-xl md:text-2xl font-semibold">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES GRID */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Anwendungsfälle
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl">
            Zehn Felder, eine Engine.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-bone/60 max-w-3xl leading-relaxed">
            Jedes Feld unten läuft auf derselben din.org-Infrastruktur — KI-Reasoning,
            Audit-Log, Identitätsprüfung, Beweisverwaltung und ein dokumentierter
            Berufungsweg.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-14 md:mt-20">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl md:text-3xl">{uc.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-2">
                      {uc.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] text-bone/40 mb-4">
                      <span>{uc.applicant}</span>
                      <span>&rarr;</span>
                      <span>{uc.authority}</span>
                    </div>
                    <p className="text-sm md:text-base text-bone/70 leading-relaxed mb-4">
                      {uc.example}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1">
                      <span className="opacity-60">Typische Wirkung:</span>
                      <span className="font-medium">{uc.timeVs}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Warum din.org
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-16">
            Gebaut für Entscheidungen, die einer Prüfung standhalten müssen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Neutral by design",
                body: "Keine Büropolitik, kein Stau-Druck, keine Lieblinge. KI-Reasoning auf Basis Ihrer Kriterien — bei jedem Antragsteller identisch angewendet.",
              },
              {
                title: "Vollständige Audit-Spur",
                body: "Jeder Eingang gehasht. Jeder Reasoning-Schritt protokolliert. Jede Entscheidung zitiert und erklärt. Bereit für interne Prüfung, öffentliche Kontrolle oder gerichtliche Anfechtung.",
              },
              {
                title: "Stunden statt Monate",
                body: "Was traditionell Wochen oder Monate menschlicher Prüfung dauert, läuft in Stunden ab. Antragsteller erhalten Entscheidungen, solange die Sache noch relevant ist.",
              },
              {
                title: "Menschliche Berufung eingebaut",
                body: "Jede Entscheidung kann an ein Gremium von 1, 3, 5 oder 7 menschlichen Sachverständigen herangetragen werden. KI bewältigt das Volumen; Menschen behandeln Grenzfälle und Berufungen.",
              },
              {
                title: "Strukturell konsistent",
                body: "Der 1.000ste Antragsteller wird nach denselben Kriterien beurteilt wie der erste. Keine Ermüdung, kein Drift, keine versteckte Voreingenommenheit.",
              },
              {
                title: "Pro Domäne konfigurierbar",
                body: "Dieselbe Engine, fachspezifische Bewertungskriterien, Beweis-Kategorien, Sachverständigeninputs und Berufungsmechanik. Die Regeln Ihrer Behörde — getreu angewendet.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8"
              >
                <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-bone/70 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Mit uns arbeiten
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl leading-[0.95]">
            Haben Sie einen Entscheidungsprozess, der Fairness im großen Maßstab braucht?
          </h2>
          <p className="mt-8 text-lg md:text-2xl opacity-80 max-w-3xl leading-relaxed">
            Wir arbeiten mit ausgewählten Partnern — Versicherern, Behörden,
            Fördergebern, Aufsichtsstellen, Wettbewerbsorganisatoren — um diese
            Engine in ihre Felder zu bringen.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/de/fruehzugang"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              Pilot anfragen
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/de/unternehmen"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink px-6 py-4 text-base font-medium hover:bg-ink hover:text-bone transition-colors"
            >
              Für Unternehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
