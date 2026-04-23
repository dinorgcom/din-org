import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns — din.org",
  description:
    "Erfahren Sie mehr über din.org, die internationale KI-gestützte Schiedsplattform für faire, schnelle und erschwingliche Streitbeilegung.",
  alternates: {
    canonical: "https://din.org/de/ueber-uns",
    languages: {
      en: "https://din.org/about",
      de: "https://din.org/de/ueber-uns",
      "x-default": "https://din.org/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Über uns — din.org",
    description:
      "Internationale KI-gestützte Schiedsplattform für faire, schnelle und erschwingliche Streitbeilegung.",
    url: "https://din.org/de/ueber-uns",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "de",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist ein din.org-Urteil rechtsverbindlich?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. din.org agiert als Schiedsplattform. Wenn beide Parteien der Teilnahme zustimmen, ist der daraus resultierende Schiedsspruch bindend nach internationalen Schiedsübereinkommen, einschließlich des New Yorker Übereinkommens.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich einen Anwalt, um din.org zu nutzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Jeder Teilnehmer erhält einen KI-Anwalt im System, der durch den gesamten Prozess führt.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich gegen ein KI-Urteil Berufung einlegen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Sie können eine zweite Entscheidung mit menschlichen Schiedsrichtern beantragen. Bis zu 7 menschliche Schiedsrichter können dem Berufungsgremium beitreten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie trifft der KI-Richter Entscheidungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der KI-Richter analysiert alle eingereichten Beweise, prüft das anwendbare Recht und führt das Live-Kreuzverhör aller Parteien per Video. Er erstellt einen schriftlichen, mit Begründung versehenen Spruch mit vollständiger juristischer Argumentation.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Streitigkeiten kann din.org behandeln?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "din.org bearbeitet Handelsstreitigkeiten, Vertragsstreitigkeiten, Dienstleistungsstreitigkeiten, Zahlungskonflikte und andere zivilrechtliche Angelegenheiten. Strafsachen sind nicht vorgesehen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie werden meine Daten geschützt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle Daten sind mit AES-256-Verschlüsselung im Ruhezustand und TLS 1.3 bei der Übertragung geschützt. Falldaten werden in SOC-2-konformen Rechenzentren gespeichert.",
      },
    },
  ],
};

export default function UeberUnsPage() {
  const features: { title: string; body: string; detail: string }[] = [
    {
      title: "Schnelle Lösung",
      body: "KI-gestützte Analyse beschleunigt das Schiedsverfahren",
      detail:
        "Die meisten Fälle erreichen innerhalb von 24 Stunden nach Beweiseinreichung einen vollständig begründeten Spruch.",
    },
    {
      title: "Sicher & vertraulich",
      body: "Verschlüsselung auf Bankniveau schützt Ihre sensiblen Daten",
      detail:
        "AES-256 im Ruhezustand, TLS 1.3 bei der Übertragung, SOC-2-konforme Infrastruktur.",
    },
    {
      title: "Internationale Reichweite",
      body: "Grenzüberschreitende Streitigkeiten leicht beilegen",
      detail:
        "Keine geografischen Grenzen — Parteien aus jedem Land können am Verfahren teilnehmen.",
    },
    {
      title: "Bis zu 99 % Kostenersparnis",
      body: "Drastische Reduktion der Schiedskosten dank KI-Effizienz",
      detail:
        "Ein vollständiger Fall kostet ab 15 € — verglichen mit dem Median von 91.000 € bei klassischer Litigation.",
    },
    {
      title: "Video-Vernehmung von Zeugen",
      body: "Zeugenvernehmungen aus der Ferne per Videokonferenz",
      detail:
        "Live-Kreuzverhör simultan: beide Seiten werden gleichzeitig befragt.",
    },
    {
      title: "Mehrere KI-Sachverständige",
      body: "Holen Sie Gutachten von verschiedenen KIs Ihrer Wahl ein",
      detail:
        "Wählen Sie zwischen rechtlicher, finanzieller, technischer oder branchenspezifischer KI-Analyse für Ihren Fall.",
    },
    {
      title: "Menschliche Aufsicht",
      body: "Menschliche Aufsicht sichert die Gültigkeit vor staatlichen Gerichten",
      detail:
        "Berufung gegen jedes Urteil mit bis zu 7 menschlichen Schiedsrichtern als bindender Zweitmeinung.",
    },
    {
      title: "Identitätsprüfung aller Beteiligten",
      body: "Identitätsverifikation für mehr Sicherheit",
      detail:
        "Verifikation per amtlichem Ausweis verhindert Betrug und sichert Verantwortlichkeit.",
    },
    {
      title: "Persönliche Voreingenommenheit vermeiden",
      body: "KI-Entscheidungen verringern subjektive Beurteilung",
      detail:
        "Keine Müdigkeit, keine Vorurteile, kein politischer Druck — jede Entscheidung ist beweisbasiert und zitiert.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Über uns
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold">
            Über DIN.ORG
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Internationale KI-gestützte Schiedsplattform für faire, schnelle und
            erschwingliche Streitbeilegung.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Warum din.org
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Gebaut für die Zukunft der Streitbeilegung.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {f.title}
              </h3>
              <p className="text-bone/70 text-base group-hover:text-ink/70 transition-colors duration-200">
                {f.body}
              </p>
              <p className="mt-3 text-sm text-ink font-medium invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {f.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Mission
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold">
            Das erste Gericht, das für alle skaliert.
          </h2>
          <p className="mt-10 text-lg md:text-xl max-w-3xl opacity-80">
            Durch die Kombination moderner Reasoning-Modelle, transparenter
            Zitate und eines an Jahrhunderten von Common-Law-Verfahren orientierten
            Ablaufs kann din.org den Streit zwischen Nachbarn in einer Stunde
            hören und im nächsten Augenblick einen internationalen
            Vertragsanspruch.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-6xl">
          <div>
            <h3 className="display text-3xl md:text-5xl font-semibold mb-6">
              Grundsätze
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-bone/80">
              <li>· Jeder Spruch ist begründet und zitiert.</li>
              <li>· Der Ablauf ist derselbe für einen 50-€-Streit und einen 50-Mio.-€-Streit.</li>
              <li>· Die Daten gehören den Parteien, nicht dem Gericht.</li>
              <li>· Berufung ist immer möglich.</li>
              <li>· Menschen bleiben im Loop, wann immer eine Partei dies beantragt.</li>
            </ul>
          </div>
          <div>
            <h3 className="display text-3xl md:text-5xl font-semibold mb-6">
              Was wir nicht sind
            </h3>
            <p className="text-base md:text-lg text-bone/80">
              din.org ist kein Chatbot, kein Anwalt und kein Ersatz für staatliche
              Gerichte dort, wo staatliche Gerichte bereits funktionieren. Es ist
              ein unabhängiges Forum für Streitbeilegung, gemacht für die Milliarden
              von Fällen, die heute nie vor einen Richter kommen.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Team
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Die Menschen hinter din.org
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">
                MM
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">
                Michael Marcovici
              </h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Serial Entrepreneur und Erfinder mit Sitz in Österreich. Ehemaliger
                Betreiber des weltweit größten eBay-Power-Selling-Unternehmens,
                Inhaber internationaler Patente in elektronischen Zahlungssystemen
                und Trading-Technologie, seit 2013 in Crypto aktiv. Autor mehrerer
                Bücher und anerkannter zeitgenössischer Künstler.
              </p>
            </article>

            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">
                RS
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">
                Raphael Spannocchi
              </h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Web3-Wachstumsstratege und DAO-Governance-Experte mit Sitz in
                Deutschland. Co-Founder &amp; CGO bei Upptic, jährlich 50 Mio.+
                Spieler. Ehemaliger Senior GameFi Researcher bei Cointelegraph
                Research, mit tiefem Fachwissen zu Dezentralisierung und
                rechtlichen Rahmen für digitale Organisationen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Häufige Fragen.
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Ist ein din.org-Urteil rechtsverbindlich?",
                a: "Ja. din.org agiert als Schiedsplattform. Wenn beide Parteien der Teilnahme zustimmen, ist der daraus resultierende Schiedsspruch bindend nach internationalen Schiedsübereinkommen, einschließlich des New Yorker Übereinkommens über die Anerkennung und Vollstreckung ausländischer Schiedssprüche.",
              },
              {
                q: "Brauche ich einen Anwalt, um din.org zu nutzen?",
                a: "Nein. Jeder Teilnehmer erhält einen KI-Anwalt im System, der durch den gesamten Prozess führt — vom Vorbereiten Ihres Falls bis zum Ordnen der Beweise und Verstehen des Verfahrens. Sie können auch eine eigene Rechtsvertretung mitbringen, dies ist aber nicht erforderlich.",
              },
              {
                q: "Welche Jurisdiktionen deckt din.org ab?",
                a: "din.org ist weltweit für Parteien verfügbar, mit Ausnahme von Parteien aus Israel (wo din.org seinen Hauptsitz hat), die als Klägerin oder Beklagter nicht teilnahmeberechtigt sind, um Neutralität sicherzustellen.",
              },
              {
                q: "Was passiert, wenn die andere Partei die Teilnahme verweigert?",
                a: "Die Teilnahme ist freiwillig. Die andere Partei muss zustimmen, den Streit über din.org zu lösen. Lehnt sie ab, kann das Verfahren nicht weitergeführt werden. Wir benachrichtigen die andere Partei und räumen ihr ein angemessenes Zeitfenster zur Antwort ein.",
              },
              {
                q: "Kann ich gegen ein KI-Urteil Berufung einlegen?",
                a: "Ja. Sind Sie mit dem KI-Urteil nicht einverstanden, können Sie eine zweite Entscheidung mit menschlichen Schiedsrichtern beantragen. Bis zu 7 menschliche Schiedsrichter können zum Berufungsgremium hinzugefügt werden, jeweils zu 180 €.",
              },
              {
                q: "Wie trifft der KI-Richter Entscheidungen?",
                a: "Der KI-Richter analysiert alle eingereichten Beweise, prüft das anwendbare Recht und führt das Live-Kreuzverhör aller Parteien per Video. Er erstellt einen schriftlichen, mit Begründung versehenen Spruch mit vollständiger juristischer Argumentation. Der Richter ist bewusst eine KI — keine menschliche Einflussnahme auf die Entscheidung, aber menschliche Aufsicht in jeder Stufe.",
              },
              {
                q: "Welche Streitigkeiten kann din.org behandeln?",
                a: "din.org bearbeitet Handelsstreitigkeiten, Vertragsstreitigkeiten, Dienstleistungsstreitigkeiten, Zahlungskonflikte und andere zivilrechtliche Angelegenheiten. Strafsachen oder gesetzlich der staatlichen Gerichtsbarkeit vorbehaltene Sachen sind nicht vorgesehen.",
              },
              {
                q: "Wie werden meine Daten geschützt?",
                a: "Alle Daten sind mit AES-256-Verschlüsselung im Ruhezustand und TLS 1.3 bei der Übertragung geschützt. Falldaten werden in SOC-2-konformen Rechenzentren mit strengen Zugriffskontrollen gespeichert. Wir verkaufen oder teilen Ihre Daten nicht.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-bone/70 text-base md:text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
