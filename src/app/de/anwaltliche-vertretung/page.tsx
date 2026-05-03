import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brauche ich einen Anwalt für din.org? | Anwaltliche Vertretung",
  description:
    "Ehrliche Antwort: Für die meisten Fälle reicht der KI-Anwalt. Bei Streitwerten ab 15.000 € oder strategisch komplexen Konstellationen empfehlen wir, zusätzlich einen menschlichen Anwalt einzubeziehen — zu Ihrem Schutz in nachfolgenden Verfahren.",
  keywords: [
    "Anwalt Schiedsverfahren",
    "Brauche ich einen Anwalt",
    "KI Schiedsgericht Anwalt",
    "anwaltliche Vertretung Schiedsgericht",
    "Anwaltsempfehlung din.org",
  ],
  alternates: {
    canonical: "https://din.org/de/anwaltliche-vertretung",
    languages: {
      en: "https://din.org/lawyer-counsel",
      de: "https://din.org/de/anwaltliche-vertretung",
      "x-default": "https://din.org/lawyer-counsel",
    },
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    title: "Brauche ich einen Anwalt für din.org?",
    description:
      "Für die meisten Fälle reicht der KI-Anwalt. Ab 15.000 € oder bei strategisch komplexen Fällen empfehlen wir einen menschlichen Anwalt.",
    url: "https://din.org/de/anwaltliche-vertretung",
  },
};

const scenarios = [
  {
    icon: "◉",
    title: "Hoher Streitwert (>15.000 €)",
    body:
      "Die wirtschaftliche Tragweite rechtfertigt eine Zweitmeinung. Ein Anwalt bewertet Vergleichsangebote gegen mögliche Prozessausgänge — nicht nur gegen die KI-Begründung.",
  },
  {
    icon: "◈",
    title: "Grenzüberschreitend / mehrere Jurisdiktionen",
    body:
      "Wenn der Streit mehrere Rechtssysteme berührt — österreichische SHA + deutsche Vollstreckung, EU + USA usw. — verhindert lokale Verfahrenskenntnis kostspielige Fehler.",
  },
  {
    icon: "◇",
    title: "Verjährung & Gegenforderungen",
    body:
      "Ein Anwalt sorgt dafür, dass parallele Ansprüche und Gegenforderungen rechtzeitig eingebracht werden — und dass das din.org-Verfahren nicht versehentlich Fristen verbraucht, die anderswo zählen.",
  },
  {
    icon: "⊟",
    title: "Regulierte Branchen mit Offenlegungs­pflichten",
    body:
      "Versicherung, Wertpapier, M&A, Gesundheitswesen, Banken — branchenspezifische Offenlegungspflichten können durch das ausgelöst werden, was Sie einreichen. Ein Anwalt prüft Eingaben vor der Übermittlung.",
  },
  {
    icon: "▲",
    title: "Mögliche Eskalation zu Gericht oder Berufung",
    body:
      "Aussagen auf din.org sind protokolliert. Wenn Ihr Fall an ein staatliches Gericht oder ein menschliches Berufungsgremium eskalieren könnte, sichert ein Anwalt, dass Sie diese künftige Position nicht beschädigen.",
  },
  {
    icon: "◮",
    title: "Bewertung von Vergleichsvorschlägen",
    body:
      "Wenn die KI einen Vergleich vorschlägt, etwa eine Zahlung von A an B in Höhe von X € — ist das fair? Ein Anwalt vergleicht mit Präzedenzfällen in der relevanten Jurisdiktion. Oft der Unterschied von Wochen Verhandlung.",
  },
];

const comparison = [
  ["Klare, strukturierte Eingaben verfassen", "Ja, automatisch", "Ja, mit strategischer Rahmung"],
  ["Durchführung des Verfahrens erklären", "Ja", "Ja"],
  ["Recherche relevanter Rechtsnormen", "Ja", "Ja"],
  ["Strategische Beratung (klagen oder nicht, wann)", "Begrenzt", "Ja"],
  ["Verhandlungserfahrung", "Musterbasiert", "Praktiker-Urteil"],
  ["Risikoanalyse von Eingeständnissen", "Begrenzt", "Ja"],
  ["Verfahren über Jurisdiktionen hinweg", "Allgemein", "Lokales Recht"],
  ["Vertretung bei Eskalation zu Gericht", "Nein", "Ja"],
  ["Kosten", "Kostenlos (enthalten)", "Mandatsgebühr"],
  ["Verfügbarkeit", "24/7 sofort", "Nach Termin"],
];

export default function AnwaltlicheVertretungPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Anwaltliche Vertretung
          </p>
          <h1 className="display text-4xl md:text-7xl leading-[1.02] font-semibold">
            Brauche ich einen Anwalt für din.org?
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-3xl">
            Ehrliche Antwort. Die kurze Version, die lange Version, und eine
            Liste empfohlener Kanzleien für den Fall, dass die Tragweite es
            rechtfertigt.
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
            Für die meisten Fälle unter{" "}
            <span className="underline decoration-2 decoration-ink/30 underline-offset-4">
              15.000 €
            </span>
            {" "}reicht der eingebaute KI-Anwalt. Über dieser Schwelle — oder bei
            strategisch komplexen Streitigkeiten — empfehlen wir, zusätzlich
            einen menschlichen Anwalt einzubeziehen.
          </p>
          <p className="mt-8 text-base md:text-lg opacity-80 max-w-3xl">
            Nicht weil din.org keinen fairen Spruch liefert. Wird er. Sondern
            weil das, was Sie auf din.org sagen, protokolliert ist, weil die
            Schwelle für nachfolgende Verfahren hoch sein kann und weil ein
            echter Anwalt Ihre Position über mehr Dimensionen schützt, als die
            KI es tut.
          </p>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Wann ein Anwalt echten Mehrwert bringt
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-14">
            Sechs Konstellationen, in denen es sich lohnt.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-bone/10 bg-bone/5 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-accent text-2xl md:text-3xl">{s.icon}</div>
                  <div className="flex-1">
                    <h3 className="display text-xl md:text-2xl font-semibold text-bone mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-bone/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
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
            Ehrlicher Vergleich
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            Was der KI-Anwalt abdeckt — und was ein menschlicher Anwalt zusätzlich bringt.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-bone/20">
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/50"></th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-accent">
                    KI-Anwalt (enthalten)
                  </th>
                  <th className="text-left p-4 text-xs uppercase tracking-wider text-bone/70">
                    Menschlicher Anwalt (Sie beauftragen)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {comparison.map(([row, ai, human]) => (
                  <tr key={row} className="border-b border-bone/10">
                    <td className="p-4 font-medium text-bone/90">{row}</td>
                    <td className="p-4 text-accent">{ai}</td>
                    <td className="p-4 text-bone/70">{human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm md:text-base text-bone/60 max-w-3xl leading-relaxed">
            Beides kann parallel laufen. Viele Nutzer lassen den KI-Anwalt das
            Tagesgeschäft erledigen, während ein menschlicher Anwalt zentrale
            Eingaben prüft und zur Strategie berät.
          </p>
        </div>
      </section>

      {/* RECOMMENDED FIRMS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Empfohlene Kanzleien
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            Kanzleien mit Erfahrung in KI-Schiedsgerichts­barkeit.
          </h2>

          <div className="rounded-3xl border border-dashed border-bone/20 bg-bone/5 p-10 md:p-14 text-center">
            <p className="display text-2xl md:text-3xl font-semibold text-bone/80 mb-4">
              In Kürze verfügbar
            </p>
            <p className="text-base md:text-lg text-bone/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Wir bauen eine Liste geprüfter Kanzleien in DACH und darüber
              hinaus auf, mit Erfahrung in Online-Schiedsverfahren und der
              EU-KI-Verordnung — bereit, din.org-Nutzer mit strategischer
              Beratung zu unterstützen.
            </p>
            <p className="text-sm text-bone/55 mb-8">
              Auswahlkriterien: Schiedserfahrung, Vertrautheit mit der
              KI-Verordnung, klare Honorarstruktur, verbindliche Reaktionszeiten.
            </p>
            <a
              href="mailto:partnerships@din.org?subject=Kanzlei-Listing-Anfrage"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Sind Sie eine Kanzlei? Listing beantragen
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal px-6 md:px-10 py-24 md:py-32 bg-bone/5">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            FAQ
          </p>
          <h2 className="display text-4xl md:text-6xl font-semibold max-w-4xl mb-12">
            Häufige Fragen zur anwaltlichen Vertretung.
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Kann ich KI-Anwalt UND menschlichen Anwalt gleichzeitig nutzen?",
                a: "Ja — und viele Nutzer tun genau das. Der KI-Anwalt übernimmt die Verfahrenslast (Beweise lesen, Eingaben aufbereiten, Zeugenaussagen zusammenfassen). Ihr menschlicher Anwalt prüft kritische Schriftsätze, berät zur Strategie und coacht Sie zur Positionierung. Kosteneffizient und absichernd.",
              },
              {
                q: "Erfährt die Gegenseite, ob ich einen Anwalt habe?",
                a: "Standardmäßig nein — es gibt keinen öffentlichen Marker. Wenn Ihr Anwalt am Verfahren teilnimmt (z. B. an einer Video-Verhandlung als Beobachter beitritt oder unter eigenem Namen Schriftsätze einreicht), wird das für die Gegenseite sichtbar.",
              },
              {
                q: "Was, wenn nur die Gegenseite einen Anwalt hat und ich nicht?",
                a: "Das Design von din.org gleicht das deutlich aus. Der KI-Anwalt sorgt dafür, dass beide Seiten strukturierte, gut aufbereitete Eingaben produzieren. Für strategische Entscheidungen (Gegenforderungen, Vergleichsbewertung, Eskalationswahl) bleibt ein echter Anwalt jedoch ein Vorteil. Bei riskanten asymmetrischen Konstellationen empfehlen wir Ihnen dringend, ebenfalls einen Anwalt einzubeziehen.",
              },
              {
                q: "Kann mein Anwalt an den Video-Verhandlungen teilnehmen?",
                a: "Ja. Anwälte können den Video-Sessions der Zeugen als Beobachter (stille Teilnehmer) oder als aktive Vertretung Ihrer Partei beitreten. Sie können Sie auch zwischen den Runden coachen — nützlich für die Analysephasen zwischen den Runden.",
              },
              {
                q: "Halten din.org-Sprüche, wenn mein Anwalt sie später vor Gericht angreifen will?",
                a: "din.org-Sprüche werden im Schiedsrahmen erlassen und sind nach dem New Yorker Übereinkommen 1958 in über 170 Ländern vollstreckbar. Aufhebungsgründe vor staatlichen Gerichten sind eng und verfahrenstechnisch (nicht inhaltlich). Ein Anwalt sorgt dafür, dass die verfahrenstechnische Position erhalten bleibt, falls Sie je angreifen wollen.",
              },
              {
                q: "Wie finde ich einen Anwalt, der KI-Schiedsgerichtsbarkeit wirklich versteht?",
                a: "Die meisten Schiedsanwälte arbeiten erst seit Kurzem mit KI-geführten Verfahren. Bis unsere Empfehlungsliste aktiv ist, suchen Sie nach Anwälten mit Erfahrung in: institutioneller Schiedsgerichtsbarkeit (VIAC, DIS, ICC), EU-KI-Verordnung-Konformität und Online-Streitbeilegung. Fragen Sie, ob sie bereits einen AAA-AI-Arbitrator-Fall begleitet haben.",
              },
              {
                q: "Sind Anwaltskosten in den din.org-Token-Paketen enthalten?",
                a: "Nein. Token-Pakete decken nur die Plattformnutzung — der KI-Anwalt ist als Teil der Plattform kostenlos enthalten. Externe Anwälte werden separat mandatiert (Stundenhonorar, Pauschale, Mandatsgebühr). Die meisten schiedserfahrenen Kanzleien bieten Pauschalen je Phase für din.org-Fälle, weil der Plattform-Zeitplan strukturiert ist.",
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

      {/* DUAL FORMS */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-6xl">
          <h2 className="display text-3xl md:text-5xl font-semibold max-w-3xl mb-12">
            Zwei Wege von hier.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* USER REFERRAL FORM */}
            <div id="user-form" className="rounded-3xl bg-ink text-bone p-8 md:p-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-4">
                Ich brauche einen Anwalt
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                Für Nutzer
              </h3>
              <p className="text-sm text-bone/70 leading-relaxed mb-6">
                Sagen Sie uns ein paar Eckdaten — wir vermitteln Sie an einen
                schiedserfahrenen Anwalt in Ihrer Jurisdiktion.
              </p>

              <form
                action="https://formspree.io/f/xreowgee"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Anwaltsempfehlung angefragt — din.org" />
                <input type="hidden" name="form_type" value="lawyer_referral_request" />
                <input type="hidden" name="_language" value="de" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ihr Name"
                    className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Ihre E-Mail"
                    className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                  />
                </div>
                <select
                  name="jurisdiction"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone focus:outline-none focus:border-accent"
                >
                  <option value="">Jurisdiktion</option>
                  <option value="AT">Österreich</option>
                  <option value="DE">Deutschland</option>
                  <option value="CH">Schweiz</option>
                  <option value="EU">Andere EU</option>
                  <option value="UK">Vereinigtes Königreich</option>
                  <option value="US">USA</option>
                  <option value="other">Andere</option>
                </select>
                <select
                  name="dispute_value_range"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone focus:outline-none focus:border-accent"
                >
                  <option value="">Streitwert</option>
                  <option value="under_15k">Unter 15.000 €</option>
                  <option value="15k_50k">15.000 € – 50.000 €</option>
                  <option value="50k_250k">50.000 € – 250.000 €</option>
                  <option value="over_250k">Über 250.000 €</option>
                  <option value="unknown">Noch unklar</option>
                </select>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Kurze Beschreibung Ihres Falls (optional)"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
                >
                  Empfehlung anfragen
                </button>
              </form>
            </div>

            {/* LAW FIRM PARTNERSHIP FORM */}
            <div id="firm-form" className="rounded-3xl bg-ink text-bone p-8 md:p-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-4">
                Ich bin Anwalt / Anwältin
              </p>
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                Für Kanzleien
              </h3>
              <p className="text-sm text-bone/70 leading-relaxed mb-6">
                Bewerben Sie sich für unsere Empfehlungsliste. Wir prüfen jede
                Bewerbung individuell.
              </p>

              <form
                action="https://formspree.io/f/xreowgee"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Kanzlei-Partnerschaftsbewerbung — din.org" />
                <input type="hidden" name="form_type" value="law_firm_partnership" />
                <input type="hidden" name="_language" value="de" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firm_name"
                    required
                    placeholder="Kanzleiname"
                    className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    name="contact_name"
                    required
                    placeholder="Ansprechperson"
                    className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Kontakt-E-Mail"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  name="jurisdictions"
                  placeholder="Jurisdiktionen (z. B. AT, DE, CH)"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  name="specialization"
                  placeholder="Spezialisierung (z. B. Wirtschaft / Handel / IP-Schiedsverfahren)"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Webseite der Kanzlei (optional)"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
                />
                <textarea
                  name="note"
                  rows={3}
                  placeholder="Kurze Notiz zu Ihrer Schiedserfahrung (optional)"
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
                >
                  Bewerbung senden
                </button>
              </form>
            </div>
          </div>

          <p className="mt-8 text-xs opacity-60 text-center">
            Beide Formulare gehen an unser Partnerschaftsteam. Antwort innerhalb
            von 5 Werktagen.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="reveal px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-base md:text-lg text-bone/60 leading-relaxed">
            Hilfe beim Einreichen?{" "}
            <Link href="/de/so-funktionierts" className="text-accent hover:text-accent-hot">
              So funktioniert es
            </Link>{" "}
            oder lesen Sie{" "}
            <Link href="/de/was-ist-schiedsgerichtsbarkeit" className="text-accent hover:text-accent-hot">
              Was ist Schiedsgerichtsbarkeit
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
