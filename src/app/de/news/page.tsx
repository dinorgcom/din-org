import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — din.org",
  description:
    "Aktuelle Entwicklungen an der Schnittstelle von KI, Recht und der Zukunft der Streitbeilegung.",
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
    title: "News — din.org",
    description:
      "Aktuelle Entwicklungen an der Schnittstelle von KI, Recht und der Zukunft der Streitbeilegung.",
    url: "https://din.org/de/news",
  },
};

const articles = [
  {
    date: "April 2026",
    source: "Europäische Kommission",
    title: "EU-KI-Verordnung: Hochrisiko-Regeln gelten ab 2. August",
    body: "Die Pflichten aus Artikel 6 für Hochrisiko-KI-Systeme werden am 2. August 2026 vollziehbar. Anhang III erfasst KI zur Unterstützung von Justizbehörden — einschließlich Schiedsgerichten — als hochriskant und verlangt dokumentierte Aufsicht, Transparenz und Konformitätsbewertungen.",
    hover: "Der Countdown läuft. Jede KI-Schiedsplattform, die nach dem 2. August in der EU tätig ist, muss den Hochrisiko-Standard nachweisen — sonst droht Ausschluss von der Vollstreckung.",
    tag: "Regulierung",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
  },
  {
    date: "März 2026",
    source: "LawSites",
    title: "AAA startet Resolution Simulator und erweitert ihren AI Arbitrator",
    body: "Die American Arbitration Association erweiterte ihren AI Arbitrator um einen einseitig nutzbaren Resolution Simulator, der eine nicht bindende, KI-erzeugte Entscheidung liefert — gedacht zur Falleinschätzung vor förmlichen Verfahren.",
    hover: "Die weltgrößte ADR-Institution setzt voll auf KI. Vorgerichtliche Falleinschätzung wird zur Produktkategorie.",
    tag: "Industrie",
    url: "https://www.lawnext.com/2026/03/american-arbitration-association-launches-resolution-simulator-expanding-its-ai-arbitrator-tool.html",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
  },
  {
    date: "Februar 2026",
    source: "Bloomberg Law",
    title: "Roboter-Schiedsrichter sorgen für Konflikte um KI in der Streitbeilegung",
    body: "Bloomberg untersucht den raschen Einsatz von KI-Schiedsrichtern: Bedenken zu Bias in Trainingsdaten, Undurchsichtigkeit der Begründung, Vollstreckbarkeit unter dem New Yorker Übereinkommen und Fragen der Parteizustimmung.",
    hover: "Die Legitimitätsdebatte hat begonnen. Plattformen, die antworten können „wie genau hat die KI das entschieden?\", werden führen. Die anderen werden Berufungen — und Schlagzeilen — sehen.",
    tag: "Vorsicht",
    url: "https://news.bloomberglaw.com/daily-labor-report/robot-arbitrators-spark-conflicts-over-ai-in-dispute-resolution",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=400&h=300&fit=crop",
  },
  {
    date: "November 2025",
    source: "AAA-ICDR",
    title: "AAA startet KI-Schiedsrichter für Bauschadenfälle",
    body: "Die American Arbitration Association startete ihren ersten KI-Schiedsrichter, der dokumentenbasierte Bauschadenfälle bearbeitet. Erste Daten: 25–35 % schnellere Lösung, 30–50 % Kostenreduktion. Menschliche Schiedsrichter prüfen jeden Spruchentwurf.",
    hover: "30–50 % günstiger, 35 % schneller, mit Human-in-the-Loop-Validierung. Die AAA hat bewiesen, dass KI-Schiedsgerichtsbarkeit institutionell skaliert — die Frage ist nicht mehr ob, sondern wann und wie.",
    tag: "KI-Gerichte",
    url: "https://www.adr.org/ai-arbitrator/",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
  },
  {
    date: "August 2024",
    source: "Europäisches Parlament",
    title: "EU-KI-Verordnung tritt in Kraft — Rechts-KI als hochriskant eingestuft",
    body: "Das weltweit erste umfassende KI-Gesetz trat in Kraft und stuft KI in Strafverfolgung und in justiziellen Entscheidungen als hochriskant ein, mit strengen Transparenzanforderungen.",
    hover: "KI im Gerichtssaal trifft in Europa nun auf die höchste regulatorische Hürde. Transparenz und menschliche Aufsicht sind Pflicht, nicht Option.",
    tag: "Regulierung",
    url: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
  },
  {
    date: "März 2026",
    source: "CNBC",
    title: "Harvey AI mit 11 Mrd. $ in jüngster Finanzierungsrunde bewertet",
    body: "Das Legal-AI-Startup Harvey hat 200 Mio. $ bei einer Bewertung von 11 Mrd. $ aufgenommen — ein Beleg, dass KI-gestützte Rechtswerkzeuge zur großen Enterprise-Kategorie geworden sind.",
    hover: "Von 1,5 Mrd. $ auf 11 Mrd. $ in unter zwei Jahren. Harveys Aufstieg zeigt, dass Legal-AI die am schnellsten wachsende Enterprise-AI-Vertikale ist.",
    tag: "Industrie",
    url: "https://www.cnbc.com/2026/03/25/legal-ai-startup-harvey-raises-200-million-at-11-billion-valuation.html",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
  },
  {
    date: "Mai 2024",
    source: "LawSites",
    title: "AAA übernimmt ODR.com und Mediate.com zur Erweiterung der Online-Streitbeilegung",
    body: "Die American Arbitration Association übernahm zwei große ODR-Plattformen — ein institutionelles Bekenntnis zur Online-Streitbeilegung in großem Maßstab.",
    hover: "Der weltweit größte private ADR-Anbieter wird digital. Online-Streitbeilegung wird Industrie-Standard, nicht Ausnahme.",
    tag: "Zugang zur Justiz",
    url: "https://www.lawnext.com/2024/05/american-arbitration-association-acquires-odr-com-and-mediate-com-to-expand-online-dispute-resolution.html",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
  },
  {
    date: "Dezember 2024",
    source: "Xinhua / Oberster Volksgerichtshof",
    title: "China startet nationale KI-Plattform zur Steigerung der Justizeffizienz",
    body: "Chinas Oberster Gerichtshof stellte eine nationale KI-Plattform vor, die auf 320 Millionen Rechtsdatenpunkten aufbaut und in sechs Provinzen pilotiert wird, um Richter zu unterstützen.",
    hover: "320 Millionen Rechtsdatensätze, die KI-Richter in sechs Provinzen befeuern. China baut die Infrastruktur für KI-getriebene Justiz im nationalen Maßstab.",
    tag: "KI-Gerichte",
    url: "https://english.news.cn/20250101/94c58c6b4ae544f8b5840c835a2eff34/c.html",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  },
  {
    date: "Dezember 2023",
    source: "UK Courts & Tribunals Judiciary",
    title: "UK veröffentlicht erste offizielle KI-Leitlinie für Richter",
    body: "Die britische Justiz veröffentlichte eine Leitlinie, die KI für Zusammenfassungen und Verwaltungsaufgaben erlaubt, jedoch von ihrem Einsatz für Rechtsrecherche oder -analyse abrät.",
    hover: "Britische Richter dürfen KI als Werkzeug nutzen — aber nicht als Entscheidungsträger. Die Grenze zwischen Unterstützung und Autonomie wird gesetzlich gezogen.",
    tag: "Regulierung",
    url: "https://www.judiciary.uk/wp-content/uploads/2023/12/AI-Judicial-Guidance.pdf",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&h=300&fit=crop",
  },
  {
    date: "Mai 2016",
    source: "ProPublica",
    title: "Machine Bias: KI-Risikobewertungen in der Strafzumessung zeigen rassistische Disparität",
    body: "ProPublicas wegweisende Untersuchung fand, dass der COMPAS-Algorithmus Schwarze Angeklagte benachteiligte und sie nahezu doppelt so oft fälschlich als hochriskant einstufte.",
    hover: "Die Untersuchung, die alles veränderte. COMPAS wird in 46 Staaten eingesetzt — und liegt entlang rassistischer Linien falsch. Faire KI verlangt Besseres.",
    tag: "KI-Ethik",
    url: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
  },
  {
    date: "Juni 2023",
    source: "CNBC",
    title: "Richter sanktioniert Anwälte für mit KI verfassten Schriftsatz mit erfundenen Zitaten",
    body: "Anwalt Steven Schwartz wurde mit 5.000 $ Strafe belegt, nachdem er in Mata v. Avianca einen Schriftsatz mit von ChatGPT erfundenen Fallzitaten eingereicht hatte.",
    hover: "ChatGPT erfand sechs Gerichtsfälle, die nie existierten — und ein Anwalt reichte sie ein. Deshalb brauchen KI-Rechtswerkzeuge eingebaute Zitatprüfung.",
    tag: "Vorsicht",
    url: "https://www.cnbc.com/2023/06/22/judge-sanctions-lawyers-whose-ai-written-filing-contained-fake-citations.html",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
  },
  {
    date: "Februar 2025",
    source: "Federal Trade Commission",
    title: "FTC erlässt Anordnung gegen DoNotPays „KI-Anwalt\"-Werbung",
    body: "Die FTC verhängte 193.000 $ gegen DoNotPay und untersagte irreführende KI-Anwalt-Werbung, nachdem festgestellt wurde, dass das Unternehmen nie geprüft hatte, ob seine KI wie ein echter Anwalt arbeitet.",
    hover: "Übertriebene KI-Versprechen haben echte Folgen. Die FTC stellt klar: Wer es Anwalt nennt, muss auch wie einer arbeiten.",
    tag: "Regulierung",
    url: "https://www.ftc.gov/news-events/news/press-releases/2025/02/ftc-finalizes-order-donotpay-prohibits-deceptive-ai-lawyer-claims-imposes-monetary-relief-requires",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
];

export default function NewsDE() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            News
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            KI &amp; Recht: Die Landschaft verschiebt sich.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Wichtige Entwicklungen an der Schnittstelle von Künstlicher
            Intelligenz, Rechtssystemen und der Zukunft der Streitbeilegung.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 md:px-10 pb-32">
        <h2 className="sr-only">Aktuelle Beiträge</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {articles.map((a) => (
            <article
              key={a.title}
              className="reveal group rounded-3xl bg-ink-card border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40 overflow-hidden bg-ink-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 inline-block rounded-full bg-ink/70 backdrop-blur-sm text-accent text-[10px] font-medium px-2.5 py-0.5 group-hover:bg-accent group-hover:text-ink transition-colors duration-200">
                  {a.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-bone/55 mb-2 group-hover:text-ink/40 transition-colors duration-200">
                  <span>{a.source}</span>
                  <span className="w-1 h-1 rounded-full bg-bone/30 group-hover:bg-ink/30" />
                  <span>{a.date}</span>
                </div>
                <h3 className="display text-base md:text-lg font-semibold mb-2 group-hover:text-ink transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-bone/60 text-sm group-hover:text-ink/70 transition-colors duration-200">
                  {a.body}
                </p>
                <p className="mt-2 text-sm text-ink font-medium italic invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {a.hover}
                </p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-accent group-hover:text-ink hover:underline transition-colors duration-200"
                >
                  Quelle lesen
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
