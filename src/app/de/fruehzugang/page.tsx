import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frühzugang — din.org",
  description:
    "Sichern Sie sich Frühzugang zu din.org — dem ersten KI-gestützten Gericht der Welt. Gehören Sie zu den ersten, die Streitigkeiten mit KI lösen.",
  alternates: {
    canonical: "https://din.org/de/fruehzugang",
    languages: {
      en: "https://din.org/early-access",
      de: "https://din.org/de/fruehzugang",
      "x-default": "https://din.org/early-access",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Frühzugang — din.org",
    description:
      "Sichern Sie sich Frühzugang zu din.org — dem ersten KI-gestützten Gericht der Welt.",
    url: "https://din.org/de/fruehzugang",
  },
};

export default function FruehzugangPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Frühzugang
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Gehören Sie zu den Ersten, die das KI-Gericht nutzen.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            din.org startet bald. Beantragen Sie Frühzugang und reichen Sie als
            Erste einen Fall ein, legen Sie Beweise vor und erhalten Sie ein
            begründetes KI-Urteil — vor allen anderen.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "Gratis", v: "Frühzugang ist kostenlos" },
            { k: "Zuerst", v: "Bevorzugtes Onboarding" },
            { k: "Direkt", v: "Direkter Kontakt zu Gründern" },
            { k: "Gestalten", v: "Produkt mitprägen" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">{s.k}</p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-2xl mx-auto">
          <h2 className="display text-3xl md:text-5xl font-semibold mb-4 text-center">
            Platz reservieren.
          </h2>
          <p className="text-bone/70 text-base md:text-lg text-center mb-12">
            Hinterlassen Sie Ihre Daten — wir benachrichtigen Sie, sobald
            din.org für frühe Nutzerinnen und Nutzer öffnet.
          </p>

          <form
            action="https://formspree.io/f/xreowgee"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_locale" value="de" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-bone/70 mb-2">
                  Vorname
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Anna"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-bone/70 mb-2">
                  Nachname
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Müller"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-bone/70 mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="anna@unternehmen.at"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-bone/70 mb-2">
                Ich bin…
              </label>
              <select
                id="role"
                name="role"
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone focus:outline-none focus:border-accent transition-colors"
              >
                <option value="individual">Privatperson mit Streitfall</option>
                <option value="business">Unternehmen / Firma</option>
                <option value="lawyer">Anwältin / Rechtsexperte</option>
                <option value="marketplace">Marktplatz / Plattform</option>
                <option value="investor">Investor</option>
                <option value="journalist">Journalistin / Medien</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-bone/70 mb-2">
                Sagen Sie uns etwas zu Ihrem Interesse{" "}
                <span className="text-bone/55">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Ich habe einen Vertragsstreit mit… / Ich betreibe einen Marktplatz und… / Ich interessiere mich für…"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Frühzugang beantragen
            </button>

            <p className="text-xs text-bone/55 text-center">
              Wir geben Ihre Daten niemals weiter. Kein Spam — niemals.
            </p>
          </form>
        </div>
      </section>

      {/* What you get */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Was Frühzugang umfasst
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Alles. Vor allen anderen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Voller Plattform-Zugang", body: "Reichen Sie echte Fälle ein, legen Sie Beweise vor, erhalten Sie KI-Sprüche. Keine Demo — das echte System." },
            { title: "KI-Anwalt & KI-Richter", body: "Ihr KI-Anwalt führt Sie durch jeden Schritt. Der KI-Richter verhört alle Parteien und liefert einen zitierten Spruch." },
            { title: "Kostenloses Token-Paket", body: "Frühzugangs-Nutzer erhalten ein kostenloses Token-Paket, um den vollen Fallprozess gratis zu testen." },
            { title: "Bevorzugter Support", body: "Direkter Zugang zum Gründerteam. Ihr Feedback prägt das Produkt vor dem öffentlichen Start." },
            { title: "Founder-Community", body: "Werden Sie Teil einer privaten Gruppe früher Nutzer — Anwältinnen, Unternehmen, Innovatorinnen, die die Zukunft der Justiz gestalten." },
            { title: "Vorteile auf Lebenszeit", body: "Frühzugangs-Nutzer erhalten dauerhafte Rabatte auf Token-Pakete und priorisierten Zugang zu neuen Funktionen." },
          ].map((f) => (
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
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-accent text-ink p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Justiz darf nicht warten. Sie auch nicht.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
            Wir öffnen den Zugang für eine kleine Gruppe früher Nutzer. Plätze
            sind begrenzt.
          </p>
          <a
            href="#first-name"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-accent px-8 py-4 text-base font-medium hover:bg-ink-soft transition-colors"
          >
            Nach oben scrollen, um zu beantragen
            <span aria-hidden>&uarr;</span>
          </a>
        </div>
      </section>
    </>
  );
}
