import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "EU-KI-Verordnung und Schiedsgerichtsbarkeit: Was sich am 2. August 2026 ändert | din.org",
  description:
    "Am 2. August 2026 treten die Hochrisiko-Pflichten der EU-KI-Verordnung in Kraft. KI-Schiedsgerichtsbarkeit fällt klar in den Anwendungsbereich. Was Plattformen tun müssen, um vollstreckbar zu bleiben — eine praxisnahe Einordnung.",
  keywords: [
    "EU KI Verordnung Schiedsgericht",
    "EU AI Act Schiedsgerichtsbarkeit",
    "KI-Verordnung 2. August 2026",
    "Hochrisiko KI Justiz",
    "KI Verordnung Anhang III Schiedsgericht",
    "KI Schiedsspruch Vollstreckung",
  ],
  alternates: {
    canonical: "https://din.org/de/ki-verordnung-schiedsgerichtsbarkeit",
    languages: {
      en: "https://din.org/eu-ai-act-arbitration",
      de: "https://din.org/de/ki-verordnung-schiedsgerichtsbarkeit",
      "x-default": "https://din.org/eu-ai-act-arbitration",
    },
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    title: "EU-KI-Verordnung und Schiedsgerichtsbarkeit: Was sich am 2. August 2026 ändert",
    description:
      "Hochrisiko-Pflichten für KI in Justiz- und Schiedsverfahren werden vollziehbar. Praxisnahe Einordnung für Plattformen und Parteien.",
    url: "https://din.org/de/ki-verordnung-schiedsgerichtsbarkeit",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "de",
  headline:
    "EU-KI-Verordnung und Schiedsgerichtsbarkeit: Was sich am 2. August 2026 ändert",
  description:
    "Am 2. August 2026 treten die Hochrisiko-Pflichten der EU-KI-Verordnung in Kraft. KI-Schiedsgerichtsbarkeit fällt in den Anwendungsbereich. Was Plattformen tun müssen.",
  author: { "@type": "Organization", name: "din.org" },
  publisher: { "@type": "Organization", name: "din.org", url: "https://din.org" },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: "https://din.org/de/ki-verordnung-schiedsgerichtsbarkeit",
  about: [
    { "@type": "Thing", name: "EU-KI-Verordnung" },
    { "@type": "Thing", name: "Schiedsgerichtsbarkeit" },
    { "@type": "Thing", name: "KI-Regulierung" },
  ],
};

export default function KiVerordnungSchiedsgerichtsbarkeitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full bg-accent/20 text-accent text-xs uppercase tracking-wider px-3 py-1">
              Regulierung
            </span>
            <span className="text-xs text-bone/50">
              23. April 2026 · 8 Minuten Lesezeit
            </span>
          </div>
          <h1 className="display text-3xl md:text-6xl leading-[1.05] font-semibold">
            EU-KI-Verordnung und Schiedsgerichtsbarkeit: Was sich am 2. August 2026 ändert.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            Die Hochrisiko-Pflichten der EU-KI-Verordnung werden am 2. August
            2026 vollziehbar. KI-Schiedsgerichtsbarkeit fällt klar in den
            Anwendungsbereich. Eine praxisnahe Einordnung dessen, was Plattformen
            tun müssen, damit ihre Sprüche vollstreckbar bleiben — und was das
            für Parteien bedeutet, die KI-gestützte Streitbeilegung erwägen.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-4">
            Die Kurzfassung
          </p>
          <p className="display text-xl md:text-3xl font-semibold leading-[1.3]">
            Wenn eine KI-Schiedsplattform in der EU tätig ist, in der EU
            vollstreckbare Sprüche erlässt oder EU-Parteien dient, fällt sie ab
            dem 2. August 2026 unter das Hochrisiko-Regime der KI-Verordnung.
            Das bedeutet: dokumentiertes Risikomanagement, menschliche Aufsicht,
            Protokollierung, Transparenz gegenüber den Parteien und ein
            Konformitätsbewertungsverfahren. Nicht-konforme Sprüche riskieren,
            in EU-Gerichten nicht vollstreckbar zu sein. Plattformen, die die
            Hürde nehmen, haben einen klaren Wettbewerbsvorteil.
          </p>
        </div>
      </section>

      {/* BODY */}
      <article className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl prose prose-invert max-w-none">
          <Section title="Warum Schiedsgerichtsbarkeit erfasst ist">
            <p>
              Anhang III der EU-KI-Verordnung listet KI-Systeme, die als{" "}
              <strong className="text-bone">hochriskant</strong> eingestuft
              werden. Punkt 8(a) erfasst KI-Systeme, &bdquo;die bestimmungsgemäß
              von einer Justizbehörde oder in deren Namen verwendet werden, um
              eine Justizbehörde bei der Recherche und Auslegung von Sachverhalten
              und Rechtsvorschriften und bei der Anwendung des Rechts auf einen
              konkreten Sachverhalt zu unterstützen.&ldquo;
            </p>
            <p>
              Die Erläuterungen der Europäischen Kommission und die aktuelle
              Wissenschaft (siehe{" "}
              <a
                href="https://www.cambridge.org/core/product/7CD459F9C93F75966289AF385E9546B9"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                Cambridges &bdquo;Clashing Frameworks&ldquo;
              </a>{" "}
              und die{" "}
              <a
                href="https://conflictoflaws.net/2025/ai-in-arbitration-will-the-eu-ai-act-stand-in-the-way-of-enforcement/"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                Conflict-of-Laws-Analyse
              </a>
              ) machen deutlich, dass Schiedsgerichte als
              quasi-justizielle Instanzen erfasst sind. KI-Systeme, die
              Schiedsgerichte beim Würdigen von Beweisen, Entwerfen von
              Sprüchen oder Befragen von Zeugen unterstützen, fallen unter das
              Hochrisiko-Regime.
            </p>
            <p>
              Das ist keine Spekulation. Der{" "}
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
                target="_blank"
                rel="noopener"
                className="text-accent hover:underline"
              >
                veröffentlichte Zeitplan der Kommission
              </a>{" "}
              bestätigt den{" "}
              <strong className="text-bone">2. August 2026</strong> als das
              Datum, an dem die meisten Hochrisiko-Pflichten vollziehbar werden.
            </p>
          </Section>

          <Section title="Was Plattformen bis zum 2. August leisten müssen">
            <p>
              Die Konformität ist mehrschichtig. Eine korrekt geführte
              KI-Schiedsplattform braucht:
            </p>
            <ol>
              <li>
                <strong className="text-bone">Risikomanagement-System</strong>{" "}
                (Art. 9): laufende Identifikation, Analyse, Bewertung und
                Minderung von Risiken für Grundrechte über den gesamten
                Lebenszyklus.
              </li>
              <li>
                <strong className="text-bone">Daten-Governance</strong>{" "}
                (Art. 10): Datensätze für Training, Validierung und Test des
                Modells müssen Qualitätsstandards erfüllen und dokumentiert sein.
              </li>
              <li>
                <strong className="text-bone">Technische Dokumentation</strong>{" "}
                (Art. 11): detaillierte, aktuelle Dokumentation, die die
                Konformität belegt und Behörden auf Verlangen zur Verfügung
                steht.
              </li>
              <li>
                <strong className="text-bone">Automatische Protokollierung</strong>{" "}
                (Art. 12): jede Inferenz, die einen Spruch beeinflusst, muss so
                protokolliert werden, dass Nachvollziehbarkeit gewährleistet ist.
              </li>
              <li>
                <strong className="text-bone">Transparenz gegenüber den Parteien</strong>{" "}
                (Art. 13): die Parteien müssen klare Informationen über
                Fähigkeiten, Grenzen des Systems und die Verwendung seiner
                Ausgaben erhalten.
              </li>
              <li>
                <strong className="text-bone">Menschliche Aufsicht</strong>{" "}
                (Art. 14): natürliche Personen müssen die KI-Ausgabe überwachen,
                überschreiben oder ihre Anwendung verweigern können. Im Schiedswesen
                ist das zentral — ein reiner KI-Spruch ohne wirksamen menschlichen
                Rechtsbehelf wird sich nicht halten.
              </li>
              <li>
                <strong className="text-bone">Genauigkeit, Robustheit, Cybersicherheit</strong>{" "}
                (Art. 15): nachweisbare Leistungs-Benchmarks und Resilienz
                gegenüber Angriffen.
              </li>
              <li>
                <strong className="text-bone">Konformitätsbewertung</strong>{" "}
                (Art. 43): die Plattform muss vor dem Inverkehrbringen entweder
                eine interne Kontrolle oder eine notifizierte Stelle durchlaufen.
              </li>
            </ol>
          </Section>

          <Section title="Die Vollstreckungsfrage">
            <p>
              Hier wird es für die Praxis besonders scharf. Ein Schiedsspruch
              ist ordentlich nach dem{" "}
              <strong className="text-bone">New Yorker Übereinkommen von 1958</strong>{" "}
              in über 170 Staaten vollstreckbar. Doch gemäß Art. V(2)(b) kann
              ein Gericht die Vollstreckung verweigern, wenn der Spruch der
              öffentlichen Ordnung des Vollstreckungsstaates widerspricht.
            </p>
            <p>
              Stellt ein EU-Gericht fest, dass ein im Schiedsverfahren
              eingesetztes KI-System die Anforderungen der KI-Verordnung an
              Hochrisikosysteme nicht erfüllt hat — etwa keine wirksame
              menschliche Aufsicht oder keine Offenlegung gegenüber den Parteien —,
              kann es dies als Verstoß gegen den Ordre public werten und die
              Vollstreckung verweigern. Cambridges Analyse der &bdquo;Clashing
              Frameworks&ldquo; markiert dies als konkretes, unmittelbares
              Risiko.
            </p>
            <p>
              Praktische Konsequenz: Ein KI-Schiedsspruch, der 500 € in der
              Erstellung gekostet hat, aber nicht vollstreckbar ist, ist 0 €
              wert. Konformität ist keine theoretische Frage — sie entscheidet,
              ob die Plattform tatsächlich Wert liefert.
            </p>
          </Section>

          <Section title="Was das für Parteien bedeutet, die eine Plattform wählen">
            <p>
              Wenn Sie als Unternehmen, Versicherer oder Anspruchsteller
              KI-Schiedsgerichtsbarkeit erwägen, sind dies die Fragen, die Sie
              einer Plattform vor der Beauftragung stellen sollten:
            </p>
            <ul>
              <li>
                Können Sie Ihre Konformitätsbewertungs-Dokumentation für die
                EU-KI-Verordnung vorlegen?
              </li>
              <li>
                Wer ist die menschliche Schiedsrichter-Instanz oder das Panel,
                das die wirksame Aufsicht nach Art. 14 ausübt?
              </li>
              <li>
                Welches Audit-Log führen Sie über jede Inferenz, die zum Spruch
                beigetragen hat, und wie lange wird es aufbewahrt?
              </li>
              <li>
                Legen Sie beiden Parteien das verwendete Modell, dessen bekannte
                Grenzen und seine konkrete Rolle im Spruch offen?
              </li>
              <li>
                Gibt es einen Weg zu einer rein menschlichen Berufung, und wie
                funktioniert er?
              </li>
              <li>
                Wo ist der Schiedsort, und wie haben Sie sich vergewissert, dass
                er Ihre Compliance-Position für vollstreckbar hält?
              </li>
            </ul>
            <p>
              Plattformen, die diese Fragen knapp und überzeugend beantworten,
              werden sich in den nächsten 24 Monaten differenzieren. Plattformen,
              die das nicht können, werden ihre Sprüche im Vollstreckungsstadium
              angefochten sehen.
            </p>
          </Section>

          <Section title="Wie din.org sich vorbereitet">
            <p>
              Bei din.org gestalten wir die Plattform so, dass sie die
              Hochrisiko-Hürde der KI-Verordnung nimmt — nicht nur überlebt:
            </p>
            <ul>
              <li>
                <strong className="text-bone">Eingebautes Audit-Log</strong>:
                jede KI-Entscheidung speichert die Prompt-Version, Modellversion,
                herangezogene Quellen und den Kontext. Jeder Spruch ist
                reproduzierbar.
              </li>
              <li>
                <strong className="text-bone">Ausdrückliche menschliche Aufsicht</strong>:
                jeder Fall enthält einen verpflichtenden Berufungsweg an
                Gremien von 1, 3, 5 oder 7 Richtern. KI bewältigt das Volumen;
                Menschen behandeln Berufungen und Grenzfälle.
              </li>
              <li>
                <strong className="text-bone">Transparenz by Design</strong>:
                beide Parteien sehen genau, was die KI gefragt wurde, was sie
                geantwortet hat und welche Beweise gewichtet wurden. Keine
                Black-Box-Sprüche.
              </li>
              <li>
                <strong className="text-bone">Rechtsgutachten je Jurisdiktion</strong>:
                ein Gutachten zur Vollstreckbarkeit nach österreichischem Recht
                ist in Arbeit, deutsche und schweizerische folgen. Jedes
                Gutachten bestätigt die Compliance-Position nach lokalem
                Schiedsrecht.
              </li>
              <li>
                <strong className="text-bone">ISO 27001 und SOC 2</strong>{" "}
                laufen, um die Anforderungen an Daten-Governance und
                Cybersicherheit zu erfüllen.
              </li>
              <li>
                <strong className="text-bone">Bias-Tests als Regressionssuite</strong>:
                Name- und demografische Swap-Tests laufen bei jedem Modell-Update,
                Ergebnisse werden in unserem vierteljährlichen Transparenzbericht
                veröffentlicht.
              </li>
            </ul>
          </Section>

          <Section title="Das Fazit">
            <p>
              Der 2. August 2026 ist kein Enddatum. Er ist ein Filter.
              KI-Schiedsplattformen, die die KI-Verordnung als Checkliste
              behandeln, werden sich durchwursteln. Plattformen, die sie als
              Designvorgabe begreifen — als Gelegenheit zu zeigen, warum
              KI-gestützte Streitbeilegung <em>transparenter</em>,{" "}
              <em>konsistenter</em> und <em>besser nachprüfbar</em> sein kann
              als klassische Schiedsgerichtsbarkeit — werden den Standard der
              nächsten Dekade setzen.
            </p>
            <p>
              Konformität ist nicht der Preis fürs Mitspielen in dieser
              Kategorie. Sie ist das Geschäft.
            </p>
          </Section>
        </div>
      </article>

      {/* FURTHER READING */}
      <section className="reveal px-6 md:px-10 py-16 md:py-24 bg-bone/5">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Weiterführend
          </p>
          <ul className="space-y-4 text-bone/80">
            <li>
              <a
                href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                Europäische Kommission — KI-Verordnung Rahmen und Zeitplan
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.cambridge.org/core/product/7CD459F9C93F75966289AF385E9546B9"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                Cambridge — Clashing Frameworks: the EU AI Act and Arbitration
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://conflictoflaws.net/2025/ai-in-arbitration-will-the-eu-ai-act-stand-in-the-way-of-enforcement/"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                Conflict of Laws — Will the EU AI Act Stand in the Way of Enforcement?
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.adr.org/ai-arbitrator/"
                target="_blank"
                rel="noopener"
                className="hover:text-accent transition-colors"
              >
                AAA — AI Arbitrator-Plattform
                <span className="text-bone/40 text-sm ml-2">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="display text-3xl md:text-5xl font-semibold max-w-3xl leading-[1.1]">
            KI-Schiedsgerichtsbarkeit, die die Hürde nimmt.
          </h2>
          <p className="mt-6 text-lg md:text-xl opacity-80 max-w-3xl">
            din.org ist die KI-Schiedsplattform, entworfen rund um Konformität
            mit der EU-KI-Verordnung, vollständige Audit-Spuren und eingebaute
            menschliche Berufungsgremien.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/de/so-funktionierts"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ink/85 transition-colors"
            >
              So funktioniert es
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="display text-2xl md:text-4xl font-semibold text-bone mb-6 not-prose">
        {title}
      </h2>
      <div className="text-base md:text-lg text-bone/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}
