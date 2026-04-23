import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investoren — din.org",
  description:
    "Investieren Sie in die Zukunft der Justiz. din.org baut das erste KI-Gericht der Welt — eine 1-Billion-$-Chance.",
  alternates: {
    canonical: "https://din.org/de/investoren",
    languages: {
      en: "https://din.org/investors",
      de: "https://din.org/de/investoren",
      "x-default": "https://din.org/investors",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Investoren — din.org",
    description:
      "Investieren Sie in die Zukunft der Justiz. din.org baut das erste KI-Gericht der Welt.",
    url: "https://din.org/de/investoren",
  },
};

export default function InvestorenPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Investoren
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Der größte Markt, den niemand bedient.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            5,1 Milliarden Menschen haben unerfüllte Justizbedürfnisse. Der
            globale Markt für Rechtsdienstleistungen ist über 1 Billion $ wert.
            din.org baut die Infrastruktur, die beide bedient — mit KI.
          </p>
        </div>
      </section>

      {/* Market size stats */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {[
            { num: "1,1 Bio. $", label: "Globaler Markt für Rechtsdienstleistungen", source: "Statista / Grand View Research" },
            { num: "5,1 Mrd.", label: "Menschen mit unerfüllten Justizbedürfnissen weltweit", source: "World Justice Project" },
            { num: "11 Mrd. $", label: "Bewertung Harvey AI — Legal-AI ist bewiesen", source: "CNBC, März 2026" },
          ].map((s) => (
            <div key={s.num}>
              <p className="display text-[18vw] md:text-[8vw] leading-[0.85] font-semibold text-accent">{s.num}</p>
              <p className="mt-4 text-base md:text-lg text-bone/70 max-w-sm">{s.label}</p>
              <p className="mt-2 text-xs text-bone/55">{s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why now */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">Warum jetzt</p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Drei Kräfte, die gleichzeitig zusammenkommen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "KI-Reasoning ist reif", body: "Große Sprachmodelle können nun Rechtsdokumente analysieren, Gesetze zitieren und auf Expertenniveau argumentieren.", detail: "GPT-4 lag im 90. Perzentil der US-Anwaltsprüfung. Legal-AI ist nicht mehr experimentell — sie ist Enterprise-Grade." },
            { title: "Gerichte kollabieren", body: "55,8 Mio. Fälle anhängig in Indien. 80 Mio. in Brasilien. 29,8 Monate bis zur Verhandlung in den USA. Das System skaliert nicht.", detail: "Globale Rückstände wachsen schneller als Gerichte Richter einstellen können. Die Nachfrage nach Alternativen war nie größer." },
            { title: "Regulierung holt auf", body: "Die EU-KI-Verordnung, britische Justiz-Leitlinien und internationale Schiedsübereinkommen liefern jetzt einen rechtlichen Rahmen für KI-gestützte Streitbeilegung.", detail: "Das New Yorker Übereinkommen erlaubt die Vollstreckung von Schiedssprüchen in 172 Ländern. din.org-Sprüche sind international vollstreckbar." },
          ].map((f) => (
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

      {/* Replace, don't patch */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">Unsere These</p>
            <h2 className="display text-4xl md:text-7xl font-semibold">
              Das System nicht reparieren. Ersetzen.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg text-bone/80 mb-6">
              Die meisten Legal-AI-Startups bauen Tools, die Anwälten helfen,
              schneller zu arbeiten — bessere Suche, schnellere Entwürfe,
              klügere Dokumentenprüfung. Sie optimieren eine kaputte Maschine.
              din.org wählt einen grundsätzlich anderen Ansatz: Das System ist
              so tief fehlerhaft, dass inkrementelle Verbesserungen es nicht
              reparieren können. Es muss ersetzt werden.
            </p>
            <p className="text-base md:text-lg text-bone/80 mb-6">
              Wenn 5,1 Mrd. Menschen keinen Zugang zur Justiz haben, wenn ein
              Median-Vertragsstreit 91.000 € kostet, wenn Richter vier Minuten
              pro Fall haben — ist die Antwort keine bessere Suchleiste für
              Anwälte. Die Antwort ist ein neues System von Grund auf, gebaut
              für Skalierung, Geschwindigkeit und Fairness.
            </p>
            <p className="text-base md:text-lg text-bone/70">
              Genau das unterscheidet din.org von jedem anderen Legal-AI-Unternehmen.
              Sie helfen Anwälten. Wir ersetzen den Bedarf am gesamten klassischen
              Prozess.
            </p>
          </div>
        </div>
      </section>

      {/* The opportunity — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">Die Chance</p>
          <h2 className="display text-4xl md:text-7xl font-semibold">
            Die Infrastruktur-Schicht der globalen Streitbeilegung besitzen.
          </h2>
          <p className="mt-10 text-lg md:text-xl max-w-3xl opacity-80">
            din.org ist kein Rechts-Chatbot. Es ist ein vollständiges
            Gerichtssystem — Einreichung, Vertretung, Beweise, Kreuzverhör,
            Urteil und Berufung — Ende zu Ende durch KI geliefert. Das erste
            Unternehmen, das diese Infrastruktur baut, schafft eine Kategorie,
            die noch nicht existiert.
          </p>
        </div>
      </section>

      {/* Business model */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">Geschäftsmodell</p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Token-basiert. Skalierbar. Hohe Marge.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { title: "Token-Pakete", body: "Nutzer kaufen Token-Pakete (50–750 Tokens) und setzen sie für Beteiligte, Beweise, Gutachten und Berufungen ein. Keine Abos, kein wiederkehrendes Churn-Risiko." },
            { title: "Nahezu Null-Grenzkosten", body: "Jeder zusätzliche Fall kostet nur API-Compute. Keine Richter, keine Gerichtssäle, keine Kanzleimitarbeiter. Bruttomargen über 80 % bei Skalierung." },
            { title: "Unternehmensverträge", body: "E-Commerce-Plattformen, Versicherer und Rechtsdienstleister lösen monatlich Tausende Streitigkeiten. Volumenpreise schaffen vorhersehbare, wiederkehrende Umsätze." },
            { title: "Netzwerkeffekte", body: "Jeder Spruch erzeugt Präzedenzdaten. Mehr Fälle verbessern die KI-Genauigkeit. Bessere Ergebnisse ziehen mehr Nutzer an. Das Schwungrad beschleunigt mit Skalierung." },
          ].map((b) => (
            <article key={b.title} className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">{b.title}</h3>
              <p className="text-bone/70 text-base md:text-lg">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TAM stats */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "1,1 Bio. $", v: "Total adressierbarer Markt" },
            { k: "80 %+", v: "Bruttomarge bei Skalierung" },
            { k: "172", v: "Länder für Vollstreckung" },
            { k: "0", v: "Direkte Wettbewerber" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">{s.k}</p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">Gründungsteam</p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl mb-16">
            Operatoren, keine Akademiker.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">MM</div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">Michael Marcovici</h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Serial Entrepreneur und Erfinder. Ehemaliger Betreiber des
                weltweit größten eBay-Power-Selling-Unternehmens. Inhaber
                internationaler Patente in elektronischen Zahlungssystemen und
                Trading-Technologie. Seit 2013 in Crypto aktiv. Autor und
                anerkannter zeitgenössischer Künstler.
              </p>
            </article>

            <article className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl font-bold mb-6">RS</div>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-2">Raphael Spannocchi</h3>
              <p className="text-accent text-sm mb-4">Co-Founder</p>
              <p className="text-bone/70 text-base md:text-lg">
                Web3-Wachstumsstratege und DAO-Governance-Experte. Co-Founder
                &amp; CGO bei Upptic, jährlich 50 Mio.+ Spieler. Ehemaliger
                Senior GameFi Researcher bei Cointelegraph Research. Tiefes
                Fachwissen zu Dezentralisierung und rechtlichen Rahmen für
                digitale Organisationen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-accent text-ink p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Bauen Sie mit uns das Gericht, das die Welt braucht.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
            Wir gehen in unsere nächste Finanzierungsrunde. Wenn Sie glauben,
            dass Justiz schnell, fair und für alle zugänglich sein sollte —
            sprechen wir.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:investors@din.org"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-accent px-8 py-4 text-base font-medium hover:bg-ink-soft transition-colors"
            >
              Kontakt: investors@din.org
              <span aria-hidden>&rarr;</span>
            </a>
            <Link
              href="/de/ueber-uns"
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-8 py-4 text-base font-medium hover:border-ink/60 transition-colors"
            >
              Mehr über din.org erfahren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
