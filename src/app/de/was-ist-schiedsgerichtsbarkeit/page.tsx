import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Was ist Schiedsgerichtsbarkeit? Ein verständlicher Leitfaden (2026) | din.org",
  description:
    "Was ist Schiedsgerichtsbarkeit? Wie sie funktioniert, wie sie sich von Gericht und Mediation unterscheidet, was sie kostet, und wie KI-Schiedsgerichtsbarkeit die Landschaft verändert. Verständlicher Leitfaden, aktualisiert 2026.",
  keywords: [
    "was ist schiedsgerichtsbarkeit",
    "schiedsgericht definition",
    "wie funktioniert ein schiedsgericht",
    "schiedsverfahren vs mediation",
    "schiedsgericht vs gericht",
    "ki schiedsgericht",
    "online schiedsgericht",
    "alternative streitbeilegung",
  ],
  alternates: {
    canonical: "https://din.org/de/was-ist-schiedsgerichtsbarkeit",
    languages: {
      en: "https://din.org/what-is-arbitration",
      de: "https://din.org/de/was-ist-schiedsgerichtsbarkeit",
      "x-default": "https://din.org/what-is-arbitration",
    },
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    title: "Was ist Schiedsgerichtsbarkeit? Ein verständlicher Leitfaden (2026)",
    description:
      "Der definitive verständliche Leitfaden zur Schiedsgerichtsbarkeit — wie sie funktioniert, was sie kostet, wie sie sich vom Gericht unterscheidet und was KI 2026 verändert.",
    url: "https://din.org/de/was-ist-schiedsgerichtsbarkeit",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      inLanguage: "de",
      headline: "Was ist Schiedsgerichtsbarkeit? Ein verständlicher Leitfaden",
      description:
        "Was Schiedsgerichtsbarkeit ist, wie sie funktioniert, wie sie sich von Gericht und Mediation unterscheidet, was sie kostet und wie KI sie 2026 verändert.",
      author: { "@type": "Organization", name: "din.org" },
      publisher: { "@type": "Organization", name: "din.org", url: "https://din.org" },
      datePublished: "2026-04-23",
      dateModified: "2026-04-23",
      mainEntityOfPage: "https://din.org/de/was-ist-schiedsgerichtsbarkeit",
    },
    {
      "@type": "FAQPage",
      inLanguage: "de",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was ist Schiedsgerichtsbarkeit in einfachen Worten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schiedsgerichtsbarkeit ist ein privater Weg zur Streitbeilegung. Statt vor ein staatliches Gericht zu ziehen, einigen sich beide Parteien darauf, dass eine neutrale dritte Person — der Schiedsrichter — den Fall hört und eine bindende Entscheidung trifft. Das ist meist schneller, günstiger und privater als ein Prozess.",
          },
        },
        {
          "@type": "Question",
          name: "Wie unterscheidet sich Schiedsgerichtsbarkeit von Mediation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ein Mediator hilft den Parteien, eine Einigung zu verhandeln, hat aber keine Entscheidungsmacht. Ein Schiedsrichter schon: Er hört Beweise und erlässt eine bindende Entscheidung — den Schiedsspruch — den ein Gericht durchsetzen wird. Mediation ist unterstützte Verhandlung; Schiedsgerichtsbarkeit ist private Rechtsprechung.",
          },
        },
        {
          "@type": "Question",
          name: "Wie viel kostet ein Schiedsverfahren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Klassische Schiedsverfahren über Institutionen wie ICC, VIAC oder DIS kosten typischerweise 5.000–50.000 € für mittlere Streitwerte, plus Anwaltshonorare. KI-Schiedsplattformen wie din.org kosten einen Bruchteil — oft 300–1.500 € Plattformgebühren für denselben Streit, bei nach New Yorker Übereinkommen vollstreckbaren Sprüchen.",
          },
        },
        {
          "@type": "Question",
          name: "Ist eine Schiedsentscheidung bindend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Ein Schiedsspruch ist endgültig und bindend nach dem Recht praktisch jedes Landes. Das New Yorker Übereinkommen von 1958 verpflichtet Gerichte in über 170 Vertragsstaaten, ausländische Schiedssprüche durchzusetzen — was Schiedsgerichtsbarkeit besonders wertvoll für grenzüberschreitende Streitigkeiten macht. Berufungsmöglichkeiten sind eng, existieren aber, meist beschränkt auf Verfahrensfehler.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist KI-Schiedsgerichtsbarkeit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KI-Schiedsgerichtsbarkeit nutzt künstliche Intelligenz, um Teile oder das gesamte Schiedsverfahren durchzuführen — Beweise hören, Zeugen per Video befragen, Dokumente analysieren und begründete Sprüche entwerfen. 2026 hat die American Arbitration Association ihren AI Arbitrator gestartet; Plattformen wie din.org bewältigen den gesamten Prozess Ende-zu-Ende. Seriöse KI-Schiedssysteme bewahren einen menschlichen Berufungsweg.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Streitigkeiten können schiedsgerichtlich entschieden werden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Die meisten zivil- und handelsrechtlichen Streitigkeiten: Vertragsstreitigkeiten, Gesellschafterstreitigkeiten, Arbeitsklagen, Verbraucherbeschwerden, Baumängel, Versicherungsfälle, IP-Streitigkeiten und internationale Handelsstreitigkeiten. Strafsachen, Sorgerechtsstreitigkeiten und manche regulatorischen Fragen können nicht schiedsgerichtlich entschieden werden.",
          },
        },
      ],
    },
  ],
};

export default function WasIstSchiedsgerichtsbarkeitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Erklärt · Aktualisiert April 2026
          </p>
          <h1 className="display text-4xl md:text-7xl leading-[1.02] font-semibold">
            Was ist Schiedsgerichtsbarkeit?
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            Ein verständlicher Leitfaden zur Schiedsgerichtsbarkeit — wie sie
            funktioniert, wie sie sich von Gericht und Mediation unterscheidet,
            was sie kostet und wie KI sie 2026 verändert.
          </p>
        </div>
      </section>

      {/* SHORT ANSWER */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Die kurze Antwort
          </p>
          <p className="display text-2xl md:text-5xl font-semibold leading-[1.15]">
            Schiedsgerichtsbarkeit ist ein{" "}
            <span className="underline decoration-2 decoration-ink/30 underline-offset-4">
              privater Weg, einen Streit zu lösen
            </span>
            . Beide Seiten vereinbaren, dass eine neutrale dritte Person — der
            Schiedsrichter — den Fall hört und eine bindende Entscheidung
            erlässt. Üblicherweise schneller, günstiger und privater als der
            Gang vor Gericht.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Wie es funktioniert
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            Die fünf Schritte eines typischen Schiedsverfahrens.
          </h2>
          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Schiedsvereinbarung",
                body: "Beide Parteien müssen zustimmen — entweder weil sie einen Vertrag mit einer Schiedsklausel unterzeichnet haben oder weil sie sich jetzt darauf einigen. Ohne Zustimmung kein Schiedsverfahren.",
              },
              {
                n: "02",
                title: "Klage und Klageerwiderung",
                body: "Die klagende Partei reicht eine Klageschrift ein. Die Gegenpartei reicht eine Klageerwiderung ein und gesteht jeden Anspruch entweder zu oder bestreitet ihn. Ein Schiedsrichter (oder ein Dreiergremium) wird ausgewählt.",
              },
              {
                n: "03",
                title: "Beweise und Verhandlungen",
                body: "Beide Seiten reichen Dokumente, Zeugenaussagen und Sachverständigengutachten ein. Verhandlungen können in Person oder per Video stattfinden. Der Schiedsrichter führt das Verfahren.",
              },
              {
                n: "04",
                title: "Schiedsspruch",
                body: "Der Schiedsrichter verfasst eine begründete Entscheidung — den Schiedsspruch — der festlegt, wer obsiegt und welcher Rechtsbehelf, wenn überhaupt, gewährt wird. Er ist für beide Parteien bindend.",
              },
              {
                n: "05",
                title: "Vollstreckung",
                body: "Nach dem New Yorker Übereinkommen von 1958 sind Schiedssprüche in über 170 Ländern vollstreckbar — oft leichter als ausländische Gerichtsurteile.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="flex gap-6 md:gap-8 border-t border-bone/15 pt-6"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent digital-num w-12 flex-shrink-0">
                  {s.n}
                </p>
                <div>
                  <h3 className="display text-xl md:text-2xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Im Vergleich
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            Schiedsgericht vs. Gericht vs. Mediation vs. KI-Schiedsgericht.
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-bone/20">
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50"></th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Gericht
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Mediation
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50">
                    Schiedsgericht
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-accent">
                    KI-Schiedsgericht
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  ["Entscheider", "Richter / Geschworene", "Niemand — Parteien entscheiden", "Schiedsrichter", "KI + menschliche Berufung"],
                  ["Bindend?", "Ja", "Nur bei beiderseitiger Zustimmung", "Ja", "Ja"],
                  ["Öffentlich?", "Ja", "Nein", "Nein", "Nein"],
                  ["Typ. Kosten", "20.000–500.000 €+", "2.000–10.000 €", "5.000–50.000 €+", "300–1.500 €"],
                  ["Typ. Dauer", "2–7 Jahre", "1–4 Wochen", "3–18 Monate", "Tage bis Wochen"],
                  ["Berufung?", "Ja", "Entfällt", "Eng begrenzt", "Menschliche Richter"],
                ].map(([label, ...cells]) => (
                  <tr key={label} className="border-b border-bone/10">
                    <td className="p-4 font-medium text-bone/90">{label}</td>
                    {cells.map((c, i) => (
                      <td
                        key={i}
                        className={`p-4 ${i === 3 ? "text-accent" : "text-bone/70"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI ARBITRATION DEEP DIVE */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Das Bild 2026
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-8">
            Was KI an der Schiedsgerichtsbarkeit ändert.
          </h2>
          <div className="prose prose-invert max-w-none space-y-6 text-base md:text-lg text-bone/70 leading-relaxed">
            <p>
              Bis vor Kurzem war Schiedsgerichtsbarkeit — zwar schneller als
              klassische Gerichtsverfahren — immer noch langsam und teuer. Sie
              war abhängig von menschlichen Schiedsrichtern, die Dokumente
              lasen, Verhandlungen ansetzten und Sprüche von Hand schrieben.
              In den Jahren 2025 und 2026 hat sich das zu ändern begonnen.
            </p>
            <p>
              Im November 2025 startete die American Arbitration Association
              (AAA) ihren ersten <strong className="text-bone">AI Arbitrator</strong>,
              der zunächst dokumentenbasierte Bauschadenfälle bearbeitet. Erste
              veröffentlichte Daten der AAA zeigten{" "}
              <strong className="text-bone">25–35 % schnellere Lösungen</strong>{" "}
              und <strong className="text-bone">30–50 % Kostenreduktion</strong>.
              Jeder Spruchentwurf wird vor Erlass von einem menschlichen
              Schiedsrichter geprüft.
            </p>
            <p>
              Im März 2026 erweiterte die AAA das Werkzeug um einen Resolution
              Simulator — eine einseitig genutzte, nicht bindende, KI-erzeugte
              Entscheidung, die Parteien helfen soll, ihren Fall vor dem
              förmlichen Verfahren einzuschätzen.
            </p>
            <p>
              Spezialisierte Plattformen — darunter din.org, Arbitrus.ai und
              europäische Anbieter im Aufbau — bauen KI-Schiedsgerichtsbarkeit
              Ende-zu-Ende: nicht nur den Spruchentwurf, sondern Falleinreichung,
              KI-geführte Zeugenbefragung per Video, Querprüfung der Aussagen,
              automatisierte Sachverständigengutachten und strukturierte
              Berufungen an Gremien menschlicher Richter.
            </p>
            <p>
              Die <strong className="text-bone">EU-KI-Verordnung</strong>, deren
              Hochrisiko-Bestimmungen am{" "}
              <strong className="text-bone">2. August 2026</strong> vollziehbar
              werden, klassifiziert KI, die Justizbehörden — einschließlich
              Schiedsgerichten — unterstützt, ausdrücklich als hochriskant.
              Plattformen, die in der EU vollstreckbare Sprüche erlassen wollen,
              müssen die Anforderungen der Verordnung an Dokumentation,
              Transparenz und menschliche Aufsicht erfüllen.
            </p>
            <p>
              Das Nettoresultat: Schiedsgerichtsbarkeit wird{" "}
              <strong className="text-bone">radikal günstiger</strong> (1–5 %
              der traditionellen Kosten),{" "}
              <strong className="text-bone">deutlich schneller</strong> (Tage
              statt Monate) und — gut umgesetzt —{" "}
              <strong className="text-bone">konsistenter</strong> (gleiche
              Maßstäbe für jeden Fall). Schlecht umgesetzt wirft sie berechtigte
              Bedenken zu Voreingenommenheit, Vollstreckbarkeit und dem Recht
              auf Anhörung durch einen Menschen auf. Die nächsten zwei Jahre
              werden zeigen, welche Plattformen diese Hürde nehmen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-3xl md:text-5xl font-semibold mb-12">
            Häufige Fragen zur Schiedsgerichtsbarkeit.
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Ist Schiedsgerichtsbarkeit bindend?",
                a: "Ja. Schiedssprüche sind endgültig und bindend nach dem Recht praktisch jedes Landes. Das New Yorker Übereinkommen von 1958 verpflichtet Gerichte in über 170 Vertragsstaaten zur Vollstreckung ausländischer Schiedssprüche — was Schiedsgerichtsbarkeit besonders wertvoll für grenzüberschreitende Streitigkeiten macht.",
              },
              {
                q: "Kann man einen Schiedsspruch anfechten?",
                a: "Anfechtungsmöglichkeiten in klassischen Schiedsverfahren sind eng, meist beschränkt auf Verfahrensfehler (Befangenheit, Betrug, Verfahrensmängel). KI-Schiedsplattformen wie din.org fügen einen ausdrücklichen Berufungsweg an menschliche Richter hinzu — 1, 3, 5 oder 7 Richter können einen KI-Spruch inhaltlich überprüfen.",
              },
              {
                q: "Welche Streitigkeiten können schiedsgerichtlich behandelt werden?",
                a: "Die meisten zivil- und handelsrechtlichen Streitigkeiten: Vertragsstreitigkeiten, Gesellschafterstreitigkeiten, Arbeitsklagen, Verbraucherbeschwerden, Baumängel, Versicherungsfälle, IP-Streitigkeiten und internationale Handelsstreitigkeiten. Strafsachen, Sorgerechtsstreitigkeiten und manche regulatorischen Fragen sind nicht schiedsfähig.",
              },
              {
                q: "Wie lange dauert ein Schiedsverfahren?",
                a: "Klassische Schiedsverfahren dauern typischerweise 3–18 Monate. Online-Schiedsverfahren sind schneller — 1–3 Monate. KI-gestützte Schiedsverfahren (din.org, AAA AI Arbitrator) können dokumentenbasierte Streitigkeiten in Tagen abschließen oder mit Video-Verhandlungen in 2–8 Wochen.",
              },
              {
                q: "Wie viel kostet ein Schiedsverfahren?",
                a: "Klassische institutionelle Schiedsverfahren kosten 5.000–50.000 € an Verfahrensgebühren für mittlere Streitwerte, plus Anwaltsvertretung. KI-Schiedsplattformen verlangen typischerweise 1–5 % davon — 300–1.500 € Plattformgebühren sind üblich.",
              },
              {
                q: "Kann ich meinen Schiedsrichter wählen?",
                a: "In klassischen Schiedsverfahren ja — beide Parteien einigen sich meist auf einen Einzelschiedsrichter, oder jede ernennt ein Mitglied eines Dreiergremiums. In KI-Schiedsverfahren ist die Reasoning-Engine festgelegt, aber Sie können die Gremiengröße für Berufungen wählen (1, 3, 5 oder 7 Richter).",
              },
              {
                q: "Ist Schiedsgerichtsbarkeit dasselbe wie KI-Schiedsgerichtsbarkeit?",
                a: "Nein — KI-Schiedsgerichtsbarkeit ist eine Teilmenge. Jede KI-Schiedsgerichtsbarkeit ist Schiedsgerichtsbarkeit (bindende Entscheidung durch eine neutrale dritte Stelle), aber klassische Schiedsgerichtsbarkeit wird von Menschen geführt. KI-Schiedsgerichtsbarkeit ersetzt oder ergänzt den menschlichen Schiedsrichter durch KI und bewahrt typischerweise einen menschlichen Berufungsweg.",
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-bone/15 pt-6">
                <h3 className="display text-xl md:text-2xl font-semibold mb-3">
                  {item.q}
                </h3>
                <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            din.org ausprobieren
          </p>
          <h2 className="display text-3xl md:text-6xl font-semibold max-w-3xl leading-[1.05]">
            Die KI-Schiedsplattform für moderne Streitigkeiten.
          </h2>
          <p className="mt-8 text-lg md:text-xl opacity-80 max-w-3xl">
            Fall einreichen, Beweise vorlegen, begründetes KI-Urteil erhalten —
            mit menschlicher Berufung. 1–5 % der Gerichtskosten. Tage statt
            Jahre.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/de/so-funktionierts"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              So funktioniert es
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/de/fruehzugang"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink text-ink px-6 py-4 text-base font-medium hover:bg-ink hover:text-bone transition-colors"
            >
              Frühzugang anfordern
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
