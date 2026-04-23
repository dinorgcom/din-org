import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "So funktioniert KI-Schiedsgerichtsbarkeit — din.org",
  description:
    "Wie der KI-Schiedsprozess von din.org Schritt für Schritt funktioniert. Von der Falleinreichung bis zum KI-Urteil und der optionalen menschlichen Berufung. Neun Schritte, Tage statt Jahre.",
  keywords: [
    "KI Schiedsverfahren Ablauf",
    "wie funktioniert KI Schiedsgericht",
    "online schiedsgericht ablauf",
    "KI Richter prozess",
    "online streitbeilegung schritte",
  ],
  alternates: {
    canonical: "https://din.org/de/so-funktionierts",
    languages: {
      en: "https://din.org/how-it-works",
      de: "https://din.org/de/so-funktionierts",
      "x-default": "https://din.org/how-it-works",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "So funktioniert KI-Schiedsgerichtsbarkeit — din.org",
    description:
      "Neun Schritte vom Streitfall zum begründeten Urteil. Einreichung, Benachrichtigung, Beweise, KI-Verhandlung, Schiedsvorschlag, bindendes KI-Urteil, menschliche Berufung.",
    url: "https://din.org/de/so-funktionierts",
  },
};

export default function SoFunktioniertsPage() {
  const steps = [
    {
      n: "01",
      title: "Fall einreichen",
      body: "Beschreiben Sie Ihren Streitfall in einfacher Sprache — wer ist beteiligt, was ist passiert, welches Ergebnis streben Sie an. Das Gericht vergibt eine Aktenzahl und einen privaten Arbeitsbereich.",
      hover: "„Ich habe meinen Fall in 10 Minuten eingereicht. Keine Formulare, kein Fachjargon — nur Klartext.\" — Erste Testerin, freischaffende Designerin",
    },
    {
      n: "02",
      title: "Benachrichtigung der Gegenpartei",
      body: "Bevor irgendetwas anderes geschieht, informiert din.org die andere Seite. Beide Parteien müssen der Teilnahme zustimmen. Lehnt die andere Seite ab, kann das Verfahren nicht weitergeführt werden — die Teilnahme ist freiwillig.",
      hover: "Beide Seiten müssen aktiv zustimmen. Das sichert Fairness vom ersten Schritt an — niemand wird in das Verfahren gezwungen.",
    },
    {
      n: "03",
      title: "KI-Anwalt wählen",
      body: "Jede Partei wählt einen KI-Anwalt im System. Ihr KI-Anwalt führt Sie durch den gesamten Ablauf — er hilft beim Vorbereiten Ihrer Argumente, beim Ordnen der Beweise und beim Verstehen des Verfahrens.",
      hover: "„Der KI-Anwalt hat geholfen, monatelange E-Mails in eine klare Chronologie zu bringen. Zum ersten Mal fühlte ich mich vorbereitet.\" — Beta-Nutzer, Kleinunternehmer",
    },
    {
      n: "04",
      title: "Beweise vorlegen",
      body: "Laden Sie Dokumente, Verträge, Fotos, Audio, Video oder Chatverläufe hoch. Ihr KI-Anwalt hilft Ihnen zu erkennen, was zählt, und Ihre Eingabe für maximale Klarheit zu strukturieren.",
      hover: "Unterstützt PDFs, Bilder, Audio, Video und Chat-Exporte. Ihr KI-Anwalt markiert, was Ihren Fall stärkt.",
    },
    {
      n: "05",
      title: "Live-Kreuzverhör",
      body: "Das ist eine zentrale Funktion von din.org. Alle Beteiligten — Klägerin, Beklagter und Zeugen — erscheinen gleichzeitig per Video. Ein KI-Richter führt ein Echtzeit-Kreuzverhör. Weil alle gleichzeitig gehört werden, gibt es kaum Spielraum, zu täuschen oder Aussagen zu erfinden.",
      hover: "„Alle gleichzeitig im Video zu haben, machte es unmöglich, die Wahrheit zu verbergen. Das hat alles verändert.\" — Beta-Nutzer, Vertragsstreit",
    },
    {
      n: "06",
      title: "Falleinschätzung",
      body: "Nach dem Kreuzverhör erhält jede Partei eine vertrauliche KI-Einschätzung ihres Falles — eine ehrliche Bewertung, wie stark ihre Position ist. Auf dieser Grundlage kann jede Partei entscheiden, zum Urteil weiterzugehen oder zurückzuziehen. Dieser Schritt fördert faire Vergleiche und vermeidet unnötige Verfahren.",
      hover: "Ein privater Realitätscheck. Viele Streitigkeiten enden hier — sparen beiden Seiten Zeit, Kosten und Stress.",
    },
    {
      n: "07",
      title: "Schiedsvorschlag",
      body: "Setzen beide Parteien fort, schlägt der KI-Richter eine Schiedslösung vor. Nehmen beide den Vorschlag an, ist der Fall sofort beigelegt und die Vereinbarung bindend.",
      hover: "„Der Vorschlag war so fair, dass wir beide ihn auf der Stelle angenommen haben. Fall in unter einem Tag erledigt.\" — Beta-Nutzer, Zahlungsstreit",
    },
    {
      n: "08",
      title: "Urteil",
      body: "Lehnt eine Partei den Schiedsvorschlag ab, erlässt der KI-Richter ein förmliches Urteil — eine schriftliche, mit Begründung versehene Entscheidung auf Basis der Beweise und des Kreuzverhörs. Der Richter ist bewusst eine KI: keine menschliche Einflussnahme, aber menschliche Aufsicht in jeder Stufe.",
      hover: "Jedes Urteil ist mit juristischer Begründung vollständig zitiert. Keine Black Box — Sie sehen genau, warum entschieden wurde.",
    },
    {
      n: "09",
      title: "Zweite Entscheidung mit menschlichen Richtern",
      body: "Nicht einverstanden mit dem KI-Urteil? Sie können eine zweite Entscheidung mit menschlichen Schiedsrichterinnen und Schiedsrichtern beantragen. So hat jede Partei die Möglichkeit menschlicher Beurteilung als letzte Absicherung.",
      hover: "„Zu wissen, dass ich an menschliche Schiedsrichter herantreten kann, gab mir das Vertrauen, dem Verfahren zu folgen.\" — Beta-Nutzer, internationaler Handelsstreit",
    },
  ];

  return (
    <>
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            So funktioniert es
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Neun Schritte vom Streit zur Lösung.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            din.org spiegelt den Aufbau eines echten Gerichts — Benachrichtigung,
            Vertretung, Beweise, Kreuzverhör, Urteil — ersetzt aber Monate des
            Wartens durch Stunden konzentrierter Arbeit. Der Richter ist eine
            KI. Keine menschliche Einflussnahme, aber stets menschliche Aufsicht.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="space-y-4">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group grid grid-cols-12 gap-6 rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <p className="col-span-12 md:col-span-2 text-accent text-2xl md:text-3xl font-bold leading-none digital-num group-hover:text-ink transition-colors duration-200">
                {s.n}
              </p>
              <h3 className="col-span-12 md:col-span-4 display text-2xl md:text-4xl font-semibold group-hover:text-ink transition-colors duration-200">
                {s.title}
              </h3>
              <div className="col-span-12 md:col-span-6 relative overflow-hidden">
                <p className="text-bone/75 text-base md:text-lg group-hover:opacity-0 transition-opacity duration-200">
                  {s.body}
                </p>
                <p className="absolute inset-0 text-ink text-base md:text-lg font-medium italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {s.hover}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
