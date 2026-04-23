import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise — din.org",
  description:
    "Token-basierte Preise. Token-Pakete kaufen und für Beteiligte, Beweise, Sachverständigengutachten und Berufungen einsetzen.",
  alternates: {
    canonical: "https://din.org/de/preise",
    languages: {
      en: "https://din.org/pricing",
      de: "https://din.org/de/preise",
      "x-default": "https://din.org/pricing",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Preise — din.org",
    description:
      "Token-basierte Preise. Pakete kaufen und nach Bedarf einsetzen.",
    url: "https://din.org/de/preise",
  },
};

export default function PreisePage() {
  const packages = [
    {
      name: "Starter",
      price: "50",
      tokens: "50",
      desc: "Für einfache Streitigkeiten mit wenigen Beweisen und Beteiligten.",
      example: "z. B. 1 Klägerin + 1 Beklagter + 1 Beweis = 65 Tokens",
      highlight: false,
    },
    {
      name: "Standard",
      price: "150",
      tokens: "200",
      desc: "Das beliebteste Paket. Reicht für einen vollen Fall mit Zeugen und Sachverständigengutachten.",
      example: "z. B. 2 Parteien + 2 Zeugen + 3 Beweise + 1 Gutachten = 195 Tokens",
      highlight: true,
    },
    {
      name: "Professional",
      price: "500",
      tokens: "750",
      desc: "Für komplexe Streitigkeiten mit mehreren Parteien, umfangreichen Beweisen und Berufungsoptionen.",
      example: "z. B. voller Fall + 10 Beweise + 2 Gutachten + Berufung mit 3 Richtern = 710 Tokens",
      highlight: false,
    },
  ];

  const tokenCosts = [
    {
      action: "Menschliche Beteiligte",
      cost: "25",
      unit: "pro Person",
      desc: "Klägerin, Beklagter, Zeuge oder Berater — jede Person, die zum Fall hinzukommt.",
    },
    {
      action: "Beweis-Upload",
      cost: "15",
      unit: "pro 1 GB Daten",
      desc: "Verträge, Fotos, Chats, Audio, Video oder andere Belege hochladen.",
    },
    {
      action: "KI-Gutachten",
      cost: "50",
      unit: "pro Gutachten",
      desc: "Spezialisierte KI-Analyse — rechtlich, finanziell, technisch oder branchenspezifisch.",
    },
    {
      action: "Berufungs-Richter",
      cost: "120",
      unit: "pro menschlichem Richter",
      desc: "Menschliche Schiedsrichter für eine zweite Entscheidung. Maximal 7 Richter pro Berufung.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Preise
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Tokens kaufen. Nach Bedarf einsetzen.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Keine Abos. Keine Vorschüsse. Keine Stundensätze. Kaufen Sie ein
            Token-Paket und setzen Sie Tokens für Beteiligte, Beweise, Gutachten
            und Berufungen ein — nur, was Ihr Fall braucht.
          </p>
        </div>
      </section>

      {/* Free filing callout */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
          <div>
            <p className="display text-[20vw] md:text-[10vw] leading-[0.85] font-semibold">
              0
            </p>
          </div>
          <div>
            <h2 className="display text-3xl md:text-5xl font-semibold mb-3">
              Tokens für die Falleinreichung
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-xl">
              Den Fall bei din.org einzureichen ist vollständig kostenlos.
              Streit beschreiben, andere Partei benachrichtigen, KI-Anwalt wählen
              — keine Tokens nötig, bis Sie Ihren Fall aufzubauen beginnen.
            </p>
          </div>
        </div>
      </section>

      {/* Token Packages */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24 reveal">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Token-Pakete
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Drei Pakete. Ein einfaches System.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`reveal rounded-3xl p-8 md:p-12 border flex flex-col ${
                p.highlight ? "bg-accent text-ink border-accent" : "bg-ink-card border-bone/15"
              }`}
            >
              <p className={`text-sm uppercase tracking-[0.2em] mb-6 ${p.highlight ? "opacity-60" : "text-accent"}`}>
                {p.name}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="display text-6xl md:text-8xl font-semibold">{p.tokens}</span>
                <span className={`text-lg ${p.highlight ? "opacity-60" : "text-bone/60"}`}>Tokens</span>
              </div>
              <p className={`display text-2xl md:text-3xl font-semibold mb-6 ${p.highlight ? "" : "text-accent"}`}>
                {p.price} €
              </p>
              <p className={`text-base md:text-lg mb-4 ${p.highlight ? "opacity-80" : "text-bone/70"}`}>
                {p.desc}
              </p>
              <p className={`text-xs mb-8 ${p.highlight ? "opacity-50" : "text-bone/55"}`}>
                {p.example}
              </p>
              <div className="mt-auto">
                <Link
                  href="/de/fall-einreichen"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors ${
                    p.highlight ? "bg-ink text-accent hover:bg-ink-soft" : "bg-accent text-ink hover:bg-accent-hot"
                  }`}
                >
                  Loslegen
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Token costs */}
      <section className="px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24 reveal">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Token-Kosten
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Was jede Aktion kostet.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tokenCosts.map((t) => (
            <article
              key={t.action}
              className="reveal group rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <p className="display text-5xl md:text-7xl font-semibold text-accent group-hover:text-ink transition-colors duration-200">
                  {t.cost}
                </p>
                <p className="text-bone/60 text-sm group-hover:text-ink/50 transition-colors duration-200">
                  Tokens {t.unit}
                </p>
              </div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {t.action}
              </h3>
              <p className="text-bone/70 text-base md:text-lg group-hover:text-ink/70 transition-colors duration-200">
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Beispiel
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Ein typischer Fall, aufgeschlüsselt.
          </h2>

          <div className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
            <div className="space-y-4">
              {[
                { item: "Klägerin", tokens: 25 },
                { item: "Beklagter", tokens: 25 },
                { item: "Zeuge (1)", tokens: 25 },
                { item: "Beweis — Vertrag (PDF, 120 MB)", tokens: 15 },
                { item: "Beweis — E-Mail-Archiv (800 MB)", tokens: 15 },
                { item: "Beweis — Fotos (400 MB)", tokens: 15 },
                { item: "KI-Rechtsgutachten", tokens: 50 },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between py-3 border-b border-bone/10 last:border-b-0">
                  <span className="text-bone/70 text-base md:text-lg">{row.item}</span>
                  <span className="text-accent font-semibold text-lg digital-num">{row.tokens}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-accent/30">
                <span className="display text-xl md:text-2xl font-semibold">Gesamt</span>
                <span className="text-accent font-bold text-2xl md:text-3xl digital-num">170</span>
              </div>
            </div>
            <p className="mt-6 text-bone/55 text-sm">
              Dieser Fall passt in das Standard-Paket (200 Tokens für 150 €) — mit
              30 Tokens als Reserve.
            </p>
          </div>
        </div>
      </section>

      {/* Volume / Enterprise */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
                Großvolumen / Unternehmen
              </p>
              <h2 className="display text-4xl md:text-6xl font-semibold mb-6">
                Hohes Volumen? Individuelle Preise.
              </h2>
              <p className="text-bone/70 text-base md:text-lg mb-8">
                Für Unternehmen mit dutzenden oder hunderten Streitigkeiten bieten
                wir maßgeschneiderte Token-Pakete mit Mengenrabatten an. Je mehr
                Sie kaufen, desto niedriger der Preis pro Token.
              </p>
              <Link
                href="mailto:enterprise@din.org"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
              >
                Kontakt für Mengenpreise
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-6">
                Was immer enthalten ist
              </h3>
              <ul className="space-y-4 text-base md:text-lg text-bone/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Kostenlose Falleinreichung und Arbeitsbereich
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  KI-Anwalts-Begleitung für beide Parteien
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Live-Video-Kreuzverhör
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  KI-Spruch mit voller juristischer Begründung
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Verschlüsselung auf Bankniveau und Datensicherheit
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">+</span>
                  Identitätsprüfung aller Beteiligten
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Vergleich
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Klassisches Gericht vs. din.org
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <h3 className="display text-2xl md:text-3xl font-semibold text-bone/55 mb-8">
                Klassische Litigation
              </h3>
              <ul className="space-y-4 text-bone/60 text-base md:text-lg">
                <li>91.000 € Median-Vertragsstreit</li>
                <li>29,8 Monate bis zur Verhandlung</li>
                <li>Anwaltsvorschuss erforderlich</li>
                <li>Geografische Beschränkungen</li>
                <li>Begrenzte Gerichtszeiten</li>
                <li>Überlastete Richter (4 Min. pro Fall)</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-accent text-ink p-8 md:p-12">
              <h3 className="display text-2xl md:text-3xl font-semibold mb-8">
                din.org
              </h3>
              <ul className="space-y-4 text-base md:text-lg opacity-80">
                <li>Ab 50 € für ein vollständiges Token-Paket</li>
                <li>Spruch in unter 24 Stunden</li>
                <li>KI-Anwalt kostenlos enthalten</li>
                <li>Weltweit verfügbar</li>
                <li>24/7-Betrieb</li>
                <li>Volle Aufmerksamkeit für jeden Fall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Bereit, Ihren Streit zu lösen?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            Einreichen ist kostenlos. Tokens kaufen Sie nur, wenn Sie sie brauchen.
          </p>
          <Link
            href="/de/fall-einreichen"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            Fall kostenlos einreichen
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
