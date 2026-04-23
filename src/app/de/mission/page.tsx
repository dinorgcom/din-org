import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission — din.org",
  description:
    "Das Rechtssystem ist kaputt. 5,1 Milliarden Menschen haben unerfüllte Justizbedürfnisse. din.org ist da, um es zu beheben.",
  alternates: {
    canonical: "https://din.org/de/mission",
    languages: {
      en: "https://din.org/mission",
      de: "https://din.org/de/mission",
      "x-default": "https://din.org/mission",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Mission — din.org",
    description:
      "Das Rechtssystem ist kaputt. 5,1 Milliarden Menschen haben unerfüllte Justizbedürfnisse. din.org ist da, um es zu beheben.",
    url: "https://din.org/de/mission",
  },
};

export default function MissionDE() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Mission
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Das Rechtssystem ist kaputt. Wir reparieren es.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Gerichte sind langsam, teuer und für den Großteil der
            Weltbevölkerung unzugänglich. din.org existiert, weil verzögerte
            Gerechtigkeit verweigerte Gerechtigkeit ist — und 5,1 Milliarden
            Menschen wird sie verweigert.
          </p>
        </div>
      </section>

      {/* Giant stats */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {[
            {
              num: "5,1 Mrd.",
              label: "Menschen haben weltweit unerfüllte Justizbedürfnisse",
              source: "World Justice Project",
            },
            {
              num: "92 %",
              label:
                "der einkommensschwachen US-Amerikaner haben zivilrechtliche Probleme ohne ausreichende Hilfe",
              source: "Legal Services Corporation",
            },
            {
              num: "55,8 Mio.",
              label: "Fälle allein in Indien anhängig — innerhalb einer Dekade verdoppelt",
              source: "CS Monitor, 2026",
            },
          ].map((s) => (
            <div key={s.num}>
              <p className="display text-[18vw] md:text-[8vw] leading-[0.85] font-semibold text-accent">
                {s.num}
              </p>
              <p className="mt-4 text-base md:text-lg text-bone/70 max-w-sm">{s.label}</p>
              <p className="mt-2 text-xs text-bone/55">{s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Das Problem
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Ein System für ein anderes Jahrhundert.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              title: "Für die meisten unbezahlbar",
              stat: "91.000 €",
              statLabel: "Mediankosten eines einzigen Vertragsstreits",
              body: "Kleine Unternehmen tragen 48 % der Haftpflichtkosten, obwohl sie nur 20 % des Umsatzes erzielen. Das US-Haftungssystem kostet jährlich 529 Mrd. $ — eine versteckte Steuer von 4.207 $ pro Haushalt.",
              source: "U.S. Chamber of Commerce / ILR",
            },
            {
              n: "02",
              title: "Schmerzhaft langsam",
              stat: "29,8 Monate",
              statLabel: "Mediandauer bis zur Verhandlung an US-Bundesgerichten",
              body: "Komplexe Handelsstreitigkeiten dauern 35–41 Monate. In Indien sind 5,5 Mio. Fälle seit über einer Dekade anhängig. In UK hat sich der Crown-Court-Rückstand seit 2019 verdoppelt.",
              source: "Hughes Hubbard / CS Monitor / GOV.UK",
            },
            {
              n: "03",
              title: "Richter sind überlastet",
              stat: "4 Min.",
              statLabel: "durchschnittliche Zeit pro Verkehrssache",
              body: "US-Bundesrichter bearbeiten 388+ Fälle pro Jahr. In Indien tragen Richter über 2.200 Fälle — bei nur 22 Richtern pro Million Einwohner. Es bleibt keine Zeit für Gerechtigkeit.",
              source: "TRAC Reports / IJCA",
            },
            {
              n: "04",
              title: "Fehlentscheidungen zerstören Leben",
              stat: "3.500+",
              statLabel: "bekannte Fehlurteile allein in den USA",
              body: "Geschätzt 2–5 % aller Häftlinge sind unschuldig. Wird die falsche Person verurteilt, bleibt der wahre Täter frei — geschätzte 41.000+ zusätzliche Straftaten jährlich.",
              source: "Innocence Project / OJP",
            },
          ].map((p) => (
            <article
              key={p.n}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <p className="text-accent text-sm font-mono mb-6">{p.n}</p>
              <h3 className="display text-2xl md:text-4xl font-semibold mb-2">{p.title}</h3>
              <p className="display text-4xl md:text-6xl font-semibold text-accent mb-1">{p.stat}</p>
              <p className="text-sm text-bone/60 mb-6">{p.statLabel}</p>
              <p className="text-bone/70 text-base md:text-lg">{p.body}</p>
              <p className="mt-4 text-xs text-bone/60">{p.source}</p>
            </article>
          ))}
        </div>
      </section>

      {/* More stats strip */}
      <section className="border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "529 Mrd. $", v: "jährliche Kosten US-Haftpflichtsystem" },
            { k: "80 Mio.", v: "anhängige Klagen in Brasilien" },
            { k: "80 %", v: "können sich keine Rechtsberatung leisten" },
            { k: "< 2 %", v: "der Bundesfälle erreichen die Verhandlung" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">{s.k}</p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Yellow mission block */}
      <section className="bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Unsere Antwort
          </p>
          <h2 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Verzögerung durch Entscheidung ersetzen. Kosten durch Zugang ersetzen.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80">
            din.org ist ein KI-gestütztes Gericht, das begründete Sprüche in
            Stunden liefert, nicht in Jahren. Keine Anwaltsgebühren. Keine
            Gerichtsverzögerungen. Keine geografischen Schranken. Nur Beweise,
            Kreuzverhör und eine schriftliche Entscheidung — zugänglich für jeden,
            überall.
          </p>
        </div>
      </section>

      {/* What we solve */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Was din.org löst
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Jeder Mangel — by Design adressiert.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              problem: "Jahre des Wartens",
              solution: "Urteil in unter 24 Stunden",
              body: "KI-Analyse, Live-Kreuzverhör und automatisierte Verfahren beseitigen den Engpass aus Terminierung und Papierkram.",
              detail: "Was an US-Bundesgerichten 29,8 Monate dauerte, dauert heute weniger als einen Tag — von der Einreichung zum vollständig zitierten Spruch.",
            },
            {
              problem: "91.000 € pro Streit",
              solution: "Nahezu kostenfrei",
              body: "Keine Anwaltsgebühren, keine Gerichtsgebühren, keine Discovery-Kosten. KI-Anwälte führen jede Partei kostenlos durch das Verfahren.",
              detail: "Ein vollständiger Fall ab 15 €. Das sind 99,98 % weniger als der Median von 91.000 € bei klassischer Handelsstreitigkeit.",
            },
            {
              problem: "Persönliche Voreingenommenheit",
              solution: "Konsistente, beweisbasierte Entscheidungen",
              body: "KI-Richter beurteilen Fakten und Recht ohne Müdigkeit, Vorurteile oder politischen Druck. Jede Entscheidung ist begründet und zitiert.",
              detail: "Keine Stimmungsschwankungen vor dem Mittagessen. Keine politischen Neigungen. Nur Beweise und Recht, jedes Mal gleich angewandt.",
            },
            {
              problem: "5,1 Mrd. ohne Zugang",
              solution: "Offen für alle, überall",
              body: "Keine geografischen Beschränkungen. Keine Sprachbarrieren. Keine teure Anwaltsverpflichtung. Justiz wird zur Dienstleistung, nicht zum Privileg.",
              detail: "Eine Bäuerin in Kenia und ein Konzern in New York erhalten dieselbe Qualität von Justiz — zum ersten Mal in der Geschichte.",
            },
            {
              problem: "Überlastete Richter",
              solution: "Unbegrenzte Kapazität",
              body: "KI hat nie keine Zeit. Jeder Fall erhält die volle Aufmerksamkeit, die er verdient — keine 4-Minuten-Anhörungen, keine Stempelentscheidungen.",
              detail: "Menschliche Richter bearbeiten 388+ Fälle pro Jahr. KI behandelt jeden Fall, als wäre er der einzige.",
            },
            {
              problem: "Fehlerhafte Ergebnisse",
              solution: "Multi-KI-Querprüfung",
              body: "Mehrere KI-Modelle analysieren jeden Fall unabhängig. Live-Simultanverhör macht Fälschungen nahezu unmöglich.",
              detail: "3.500+ bekannte Fehlurteile allein in den USA. Querverifizierte KI-Analyse senkt das Fehlerrisiko drastisch.",
            },
          ].map((f) => (
            <article
              key={f.problem}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <p className="text-sm text-bone/55 line-through mb-1 group-hover:text-ink/40 transition-colors duration-200">
                {f.problem}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-accent group-hover:text-ink transition-colors duration-200">
                {f.solution}
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

      {/* Global crisis stats */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Eine globale Krise
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Die Zahlen sprechen für sich.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              country: "USA",
              stats: [
                "529 Mrd. $ jährliche Kosten Haftpflichtsystem",
                "29,8 Monate Mediandauer bis zur Verhandlung",
                "388+ Fälle pro Bundesrichter pro Jahr",
                "92 % der Geringverdiener ohne ausreichende Rechtshilfe",
              ],
            },
            {
              country: "Indien",
              stats: [
                "55,8 Mio. anhängige Fälle",
                "5,5 Mio. seit 10+ Jahren anhängig",
                "22 Richter pro Million Einwohner",
                "Rückstand kostet über 2 % des BIP",
              ],
            },
            {
              country: "Vereinigtes Königreich",
              stats: [
                "80.203 offene Crown-Court-Fälle",
                "Rückstand seit 2019 verdoppelt",
                "27 % der Fälle länger als 1 Jahr offen",
                "44,7 Wochen Medianwartezeit auf Verhandlung",
              ],
            },
            {
              country: "Brasilien",
              stats: [
                "80 Mio. anhängige Klagen",
                "Einer der weltweit größten Rückstände",
                "Jahrelange Wartezeiten bei Handelsstreitigkeiten",
                "Zugang zur Justiz bleibt eingeschränkt",
              ],
            },
          ].map((c) => (
            <article key={c.country} className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <h3 className="display text-2xl md:text-3xl font-semibold text-accent mb-6">{c.country}</h3>
              <ul className="space-y-3 text-bone/70 text-base md:text-lg">
                {c.stats.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 shrink-0">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-bone/60 max-w-3xl">
          Quellen: World Justice Project, U.S. Chamber of Commerce, Legal Services
          Corporation, CS Monitor, Hughes Hubbard, TRAC Reports, GOV.UK,
          Innocence Project, House of Lords Library
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Justiz darf kein Luxus sein.
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            din.org baut das Gericht, das die Welt wirklich braucht — schnell,
            fair und offen für alle.
          </p>
          <Link
            href="/de/fall-einreichen"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            Jetzt Fall einreichen
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
