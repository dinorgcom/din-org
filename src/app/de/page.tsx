import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "din.org — KI-Schiedsgericht & Online-Streitbeilegung",
  description:
    "din.org ist die KI-Schiedsgerichts-Plattform für schnelle, faire Online-Streitbeilegung. Fall einreichen, Beweise vorlegen, begründetes KI-Urteil erhalten — mit menschlicher Berufung. Tage statt Jahre. 1–5 % der Gerichtskosten.",
  keywords: [
    "KI Schiedsgericht",
    "KI Gericht",
    "Online Schiedsgericht",
    "Online Streitbeilegung",
    "KI Streitbeilegung",
    "Schiedsverfahren online",
    "KI Richter",
    "Schiedsgerichtsbarkeit",
    "alternative Streitbeilegung",
    "ODR",
  ],
  alternates: {
    canonical: "https://din.org/de",
    languages: {
      en: "https://din.org",
      de: "https://din.org/de",
      "x-default": "https://din.org",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://din.org/de",
    siteName: "din.org",
    title: "din.org — KI-Schiedsgericht & Online-Streitbeilegung",
    description:
      "Die KI-Schiedsgerichts-Plattform. Fall einreichen, Beweise vorlegen, begründetes KI-Urteil erhalten — mit menschlicher Berufung. Tage statt Jahre.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — KI-Schiedsgericht & Online-Streitbeilegung",
    description:
      "Die KI-Schiedsgerichts-Plattform. Fall einreichen, Beweise vorlegen, begründetes KI-Urteil erhalten.",
  },
};

export default function HomeDE() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Das KI-Gericht · din.org
          </p>
          <h1 className="display text-[15vw] md:text-[8vw] leading-[0.9] font-semibold max-w-6xl">
            Recht,
            <br />
            in Echtzeit
            <br />
            gedacht.
          </h1>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 max-w-3xl">
            <p className="text-lg md:text-xl text-bone/80 max-w-xl">
              din.org ist ein vollständiges KI-basiertes Gericht. Reichen Sie
              einen Fall ein, legen Sie Beweise vor, erhalten Sie ein
              begründetes Urteil — Ende zu Ende.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://app.din.org/login"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors whitespace-nowrap"
              >
                Anmelden
              </Link>
              <Link
                href="/de/early-access"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors whitespace-nowrap"
              >
                Early Access anfordern
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Was ist din.org
          </p>
          <h2 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Ein Gerichtssaal, der nie schließt, nie ermüdet und jedes Dokument
            liest.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80">
            Klassische Gerichte sind langsam, teuer und für die meisten
            Menschen unerreichbar. din.org nutzt fortschrittliche
            Reasoning-Modelle, um Streitfälle zu hören, Beweise zu würdigen,
            Recht zu zitieren und ein schriftliches Urteil zu erlassen — in
            Stunden, nicht in Jahren.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Grundpfeiler
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Vier Prinzipien, ein Gericht.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              title: "KI-Richter, menschliche Aufsicht",
              body: "Der Richter ist bewusst eine KI — keine menschliche Einflussnahme auf die Entscheidung. Doch menschliche Aufsicht stellt die Gültigkeit auf jeder Stufe sicher.",
            },
            {
              n: "02",
              title: "Live-Kreuzverhör",
              body: "Alle Beteiligten erscheinen gleichzeitig per Video. Die KI verhört Klägerin, Beklagten und Zeugen parallel — kaum Spielraum zum Tricksen.",
            },
            {
              n: "03",
              title: "KI-Anwälte führen Sie",
              body: "Jede Partei wählt einen KI-Anwalt im System. Er bereitet Ihren Fall vor, ordnet Beweise und führt Sie durch jeden Schritt.",
            },
            {
              n: "04",
              title: "Zweistufige Lösung",
              body: "Zuerst ein Schiedsvorschlag, den beide Seiten annehmen können. Andernfalls ein förmliches Urteil. Immer noch uneinig? Dann eine zweite Entscheidung mit menschlichen Richterinnen und Richtern.",
            },
          ].map((p) => (
            <article
              key={p.n}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <p className="text-accent text-sm font-mono mb-6">{p.n}</p>
              <h3 className="display text-2xl md:text-4xl font-semibold mb-4">
                {p.title}
              </h3>
              <p className="text-bone/70 text-base md:text-lg">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "< 24 Std.", v: "durchschn. Urteilszeit" },
            { k: "100 %", v: "begründete Entscheidungen" },
            { k: "0 €", v: "Einreichgebühr" },
            { k: "∞", v: "Öffnungszeiten" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">
                {s.k}
              </p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Der Ablauf
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Von der Klage zum Urteil.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            {
              step: "Schritt 1",
              title: "Einreichen & benachrichtigen",
              body: "Beschreiben Sie Ihren Streitfall. Die andere Partei wird sofort informiert — beide müssen der Teilnahme zustimmen.",
            },
            {
              step: "Schritt 2",
              title: "KI-Anwalt",
              body: "Wählen Sie einen KI-Anwalt im System. Er führt Sie durch Beweise, Argumente und Verfahren.",
            },
            {
              step: "Schritt 3",
              title: "Kreuzverhör",
              body: "Alle Parteien und Zeugen erscheinen gleichzeitig per Video. Die KI verhört in Echtzeit.",
            },
            {
              step: "Schritt 4",
              title: "Urteil",
              body: "Zuerst ein Schiedsvorschlag. Wird er abgelehnt, ein förmliches KI-Urteil. Immer noch uneinig? Eine zweite Entscheidung mit Menschen anfordern.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-3xl bg-ink-soft p-8 md:p-10 border border-bone/15"
            >
              <p className="text-accent text-xs uppercase tracking-widest mb-8">
                {s.step}
              </p>
              <h3 className="display text-3xl md:text-4xl font-semibold mb-4">
                {s.title}
              </h3>
              <p className="text-bone/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/de/so-funktionierts"
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-base font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Den vollständigen Ablauf lesen
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
