import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { HarveyNav } from "@/components/HarveyNav";
import { CopyButton } from "@/components/CopyButton";
import "../decisions.css";

const display = Newsreader({
  variable: "--font-d-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Inter({
  variable: "--font-d-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-d-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "din.org — Streit per E-Mail schlichten",
  description:
    "Endlose E-Mail-Konflikte strukturiert lösen: vertrauliche Aufnahme beider Seiten, kostenloser Vergleichsvorschlag, begründete Einschätzung als PDF und menschliche Prüfung auf Wunsch. Starten Sie per E-Mail an case@din.org.",
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
    title: "din.org — Streit per E-Mail schlichten",
    description:
      "Beenden Sie den E-Mail-Streit: vertrauliche Aufnahme, kostenloser Vergleichsvorschlag und menschliche Prüfung auf Wunsch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — Streit per E-Mail schlichten",
    description:
      "Beenden Sie den E-Mail-Streit: vertrauliche Aufnahme, kostenloser Vergleichsvorschlag und menschliche Prüfung auf Wunsch.",
  },
};

const MCP_URL = "https://app.din.org/api/mcp/mcp";
const CASE_EMAIL = "case@din.org";
const LOGIN_URL = "https://app.din.org/sign-in";

const PROVIDERS: Array<{ name: string; logo: string; plans: string; how: string }> = [
  {
    name: "Claude",
    logo: "/logos/claude.svg",
    plans: "Alle kostenpflichtigen Tarife",
    how: "Einstellungen → Konnektoren → Benutzerdefinierten Konnektor hinzufügen → URL einfügen.",
  },
  {
    name: "ChatGPT",
    logo: "/logos/openai.svg",
    plans: "Plus · Pro · Business",
    how: "Einstellungen → Apps → Erweiterte Einstellungen → Entwicklermodus aktivieren → App erstellen → URL einfügen.",
  },
  {
    name: "Perplexity",
    logo: "/logos/perplexity.svg",
    plans: "Pro · Max · Enterprise",
    how: "Konnektoren → + Benutzerdefinierter Konnektor → Remote → URL einfügen (Streamable HTTP).",
  },
  {
    name: "Grok",
    logo: "/logos/x.svg",
    plans: "Kostenpflichtige Tarife",
    how: "Konnektoren → Remote-MCP-Server hinzufügen → URL einfügen.",
  },
];

const CASE_MAILTO = `mailto:${CASE_EMAIL}?subject=${encodeURIComponent(
  "Mein Streitfall",
)}&body=${encodeURIComponent(
  "Wer ist die andere Partei? (Name + E-Mail-Adresse)\n\nWas ist passiert? (einige Sätze mit Daten und Beträgen)\n\nWas möchten Sie erreichen?\n",
)}`;

const STEPS: Array<[string, string, string]> = [
  [
    "01",
    "Eine E-Mail genügt",
    `Beschreiben Sie Ihren Streitfall in einer E-Mail an ${CASE_EMAIL}: mit wem, worum es geht und um welchen Betrag. Kein Konto, keine Formulare. Auf Wunsch eröffnet Ihr KI-Agent den Fall für Sie.`,
  ],
  [
    "02",
    "Sie bestätigen, wir laden ein",
    "Bevor Sie die Einleitung per Antwort bestätigen, wird niemand kontaktiert. Danach lädt din.org die andere Partei ein. Wer auf unsere Einladung antwortet, nimmt am Verfahren teil.",
  ],
  [
    "03",
    "Vertrauliche Aufnahme beider Seiten",
    "Wir sprechen mit jeder Partei — oder ihrem KI-Agenten — in einem eigenen vertraulichen Kanal. Die andere Seite sieht dieses Gespräch nicht. Wir erfassen Fakten, Unterlagen, Ziele und mögliche Einigungen.",
  ],
  [
    "04",
    "Ein kostenloser Vergleichsvorschlag",
    "Sobald beide Aufnahmen abgeschlossen sind, formuliert din.org konkrete Vergleichsbedingungen. Stimmen beide Seiten zu, ist der Konflikt beigelegt. Für diesen Ablauf entstehen keine Kosten.",
  ],
  [
    "05",
    "Falls nötig: eine begründete Einschätzung",
    "Wird der Vorschlag abgelehnt oder läuft er aus, erstellt din.org eine begründete, mit Quellen belegte Einschätzung der Fallakte als PDF. Sie ist kein staatliches Urteil. Sie können sie kostenlos annehmen oder eine kostenpflichtige menschliche Prüfung anfordern — als Bestätigung oder Einwand.",
  ],
];

export default function AgentsCourtHomeDE() {
  return (
    <div
      lang="de"
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <HarveyNav
        homeHref="/de"
        menuLabels={{ open: "Menü öffnen", close: "Menü schließen" }}
        links={[
          { href: "#start", label: "Fall starten" },
          { href: "#how", label: "So funktioniert es" },
          { href: "/de/news", label: "Journal" },
          { href: "/de/agenten", label: "Für Agenten" },
          { href: "#pricing", label: "Preise" },
          { href: LOGIN_URL, label: "Anmelden" },
          { href: "/", label: "English" },
        ]}
        cta={{ href: CASE_MAILTO, label: "Fall per E-Mail senden" }}
      />

      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/vor-gericht.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/vor-gericht.webm" type="video/webm" />
          <source src="/videos/vor-gericht.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.55) 0%, rgba(20,19,15,0.4) 45%, rgba(20,19,15,0.88) 100%)",
          }}
        />
        <div className="d-grain" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 md:pb-28 pt-40">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "rgba(245,241,234,0.7)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "rgba(245,241,234,0.5)" }}
              />
              Schlichtung für Menschen und KI-Agenten
            </p>

            <h1
              className="d-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.96] max-w-[16ch]"
              style={{ color: "var(--d-bone)" }}
            >
              Beenden Sie den
              <br />
              <span className="whitespace-nowrap">E-Mail-Krieg.</span>
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                Wir helfen bei der Einigung.
              </span>
            </h1>

            <p
              className="mt-10 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              Streitfälle verlieren sich heute in endlosen, KI-formulierten
              E-Mail-Ketten, die niemand mehr liest und in denen niemand
              gewinnt. din.org vermittelt neutral zwischen beiden Seiten: Wir
              sprechen vertraulich mit jeder Partei — oder ihrem KI-Agenten —,
              ordnen Fakten und Unterlagen und machen einen konkreten
              Vergleichsvorschlag. Kostenlos. Stimmen beide Seiten zu, ist der
              Konflikt beigelegt.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap items-start gap-4">
              <a
                href={CASE_MAILTO}
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
                style={{
                  background: "var(--d-bone)",
                  color: "var(--d-ink)",
                }}
              >
                Fall senden — {CASE_EMAIL}
                <span aria-hidden>→</span>
              </a>
            </div>

            <p
              className="mt-16 text-xs uppercase tracking-[0.25em] max-w-2xl"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              Kostenloser Vergleichsvorschlag · Begründete Einschätzung als PDF ·
              Menschliche Prüfung auf Wunsch
            </p>
          </div>
        </div>
      </section>

      <section
        id="start"
        className="d-rule-top px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px] text-center">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-ink-muted)" }}
          >
            So starten Sie
          </p>
          <a
            href={CASE_MAILTO}
            className="d-display inline-block text-[clamp(2.2rem,7vw,6.5rem)] leading-none underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity break-all"
            style={{ color: "var(--d-ink)" }}
          >
            {CASE_EMAIL}
          </a>
          <p
            className="mt-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Eine E-Mail: Wer ist die andere Partei, was ist passiert und was
            möchten Sie erreichen? Kein Konto, keine Formulare. din.org
            antwortet, fragt gezielt nach und kontaktiert niemanden, bevor Sie
            dies bestätigen. Der gesamte Ablauf kann in Ihrem Posteingang
            stattfinden.
          </p>
        </div>
      </section>

      <section
        id="how"
        className="px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-ink)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-14"
            style={{ color: "rgba(245,241,234,0.55)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.4)" }}
            />
            So funktioniert es
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {STEPS.map(([num, title, body]) => (
              <div key={num}>
                <p
                  className="d-mono text-sm mb-4"
                  style={{ color: "rgba(245,241,234,0.5)" }}
                >
                  {num}
                </p>
                <h3
                  className="d-display text-2xl md:text-3xl mb-3"
                  style={{ color: "var(--d-bone)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "rgba(245,241,234,0.7)" }}
                >
                  {body}
                </p>
              </div>
            ))}
            <div
              className="rounded-2xl border p-8 flex flex-col justify-between"
              style={{ borderColor: "rgba(245,241,234,0.25)" }}
            >
              <p
                className="d-display italic text-xl md:text-2xl leading-snug"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                Jede Einschätzung wird entworfen, anhand der zitierten Quellen
                kritisch gegengeprüft und überarbeitet, bevor Sie sie erhalten.
              </p>
              <a
                href={CASE_MAILTO}
                className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium self-start transition-colors"
                style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}
              >
                Mit einer E-Mail starten <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="agents"
        className="d-rule-top px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.3em] mb-8"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <span
                  className="inline-block w-8 h-px align-middle mr-3"
                  style={{ background: "var(--d-line)" }}
                />
                Ihr KI-Agent übernimmt die Korrespondenz. Sie entscheiden.
              </p>
              <h2
                className="d-display text-4xl md:text-5xl leading-tight max-w-[18ch]"
                style={{ color: "var(--d-ink)" }}
              >
                Schicken Sie Ihren Agenten in die Schlichtung.
              </h2>
              <p
                className="mt-8 text-base md:text-lg leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Claude, ChatGPT, Perplexity und Grok verbinden sich über MCP
                direkt mit din.org. Ihr Agent beantwortet die Fragen zur
                Aufnahme, bewertet den Vergleichsvorschlag und entwirft auf
                Wunsch Einwände. Zahlungen und Entscheidungen bleiben immer bei
                Ihnen.
              </p>
              <p
                className="mt-6 text-sm leading-relaxed font-light max-w-xl"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Kein Agent? Derselbe Ablauf funktioniert per E-Mail an {CASE_EMAIL}.
                Alle Kanäle werden in derselben Fallakte zusammengeführt.
              </p>
            </div>

            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: "var(--d-line)", background: "var(--d-bone-soft)" }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-5"
                style={{ color: "var(--d-ink-muted)" }}
              >
                MCP-Konnektor — eine URL für jeden Agenten
              </p>
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border px-5 py-4"
                style={{ borderColor: "var(--d-line)", background: "var(--d-bone)" }}
              >
                <p
                  className="d-mono text-sm break-all flex-1"
                  style={{ color: "var(--d-ink)" }}
                >
                  {MCP_URL}
                </p>
                <CopyButton value={MCP_URL} />
              </div>
              <ul
                className="mt-6 space-y-3 text-sm font-light"
                style={{ color: "var(--d-ink-muted)" }}
              >
                <li>· create_dispute — einen Fall für Sie eröffnen</li>
                <li>· send_message — Fragen zur Aufnahme beantworten</li>
                <li>· respond_to_proposal — einen Vorschlag annehmen oder zur Entscheidung vorlegen</li>
                <li>· submit_ruling_grounds — Gründe für einen Einwand einreichen</li>
              </ul>
              <p
                className="mt-6 text-xs leading-relaxed"
                style={{ color: "var(--d-ink-muted)" }}
              >
                Für die Verbindung ist zunächst kein Schlüssel erforderlich.
                din.org führt nicht authentifizierte Agenten durch die Konto-
                und Token-Einrichtung.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROVIDERS.map((provider) => (
              <div
                key={provider.name}
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--d-line)" }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Image
                    src={provider.logo}
                    alt={`${provider.name}-Logo`}
                    width={26}
                    height={26}
                  />
                  <p className="text-base font-medium" style={{ color: "var(--d-ink)" }}>
                    {provider.name}
                  </p>
                </div>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {provider.plans}
                </p>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "var(--d-ink-muted)" }}
                >
                  {provider.how}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: "var(--d-ink-muted)" }}>
            Überall derselbe Endpunkt: Fügen Sie einfach die URL oben ein.
            Produktnamen und Logos gehören ihren jeweiligen Eigentümern.
          </p>
        </div>
      </section>

      <section
        id="pricing"
        className="px-6 md:px-10 py-24 md:py-36"
        style={{ background: "var(--d-ink)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-14"
            style={{ color: "rgba(245,241,234,0.55)" }}
          >
            <span
              className="inline-block w-8 h-px align-middle mr-3"
              style={{ background: "rgba(245,241,234,0.4)" }}
            />
            Preise
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="rounded-2xl border p-10"
              style={{ borderColor: "rgba(245,241,234,0.25)" }}
            >
              <h3 className="d-display text-3xl mb-2" style={{ color: "var(--d-bone)" }}>
                Kostenlos
              </h3>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-8"
                style={{ color: "rgba(245,241,234,0.5)" }}
              >
                Der gesamte Weg bis zu einer Einigung
              </p>
              <ul
                className="space-y-3 text-sm font-light"
                style={{ color: "rgba(245,241,234,0.8)" }}
              >
                <li>· Fall eröffnen und andere Partei einladen</li>
                <li>· Vertrauliche Aufnahme beider Seiten</li>
                <li>· Vergleichsvorschlag annehmen oder ablehnen</li>
                <li>· Einschätzung nach einer Ablehnung erhalten und annehmen</li>
              </ul>
            </div>

            <div
              className="rounded-2xl border p-10"
              style={{
                borderColor: "rgba(245,241,234,0.25)",
                background: "var(--d-ink-soft)",
              }}
            >
              <h3 className="d-display text-3xl mb-2" style={{ color: "var(--d-bone)" }}>
                Ab 250 €
              </h3>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-8"
                style={{ color: "rgba(245,241,234,0.5)" }}
              >
                Wenn ein Mensch die vollständige Akte prüft
              </p>
              <ul
                className="space-y-3 text-sm font-light"
                style={{ color: "rgba(245,241,234,0.8)" }}
              >
                <li>· Menschliche Bestätigung einer Einschätzung nach vollständiger Aktenprüfung</li>
                <li>· Einwand gegen eine Einschätzung mit ergebnisoffener menschlicher Neubewertung</li>
                <li>· Erst nach der ersten Einschätzung verfügbar — alles davor ist kostenlos</li>
              </ul>
              <p
                className="mt-8 text-xs leading-relaxed"
                style={{ color: "rgba(245,241,234,0.55)" }}
              >
                Der Preis richtet sich nach dem Umfang Ihrer Fallakte: 150 €
                pro geschätzter Lesestunde, mindestens 250 €. Den genauen Preis
                sehen Sie immer, bevor Sie bezahlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="d-rule-top px-6 md:px-10 py-14"
        style={{ background: "var(--d-bone)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="d-display text-2xl mb-3" style={{ color: "var(--d-ink)" }}>
              din.org
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-md"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Neutrale, KI-gestützte Schlichtung zwischen zwei Parteien — mit
              vertraulicher Aufnahme und menschlicher Prüfung auf Wunsch.
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Start
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <a href={CASE_MAILTO} className="hover:opacity-70 transition-opacity">
                  {CASE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/de/agenten" className="hover:opacity-70 transition-opacity">
                  Agenten verbinden
                </Link>
              </li>
              <li>
                <Link href="/de/news" className="hover:opacity-70 transition-opacity">
                  Journal
                </Link>
              </li>
              <li>
                <a href={LOGIN_URL} className="hover:opacity-70 transition-opacity">
                  Anmelden
                </a>
              </li>
              <li>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  English
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Rechtliches
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <Link href="/de/datenschutz" className="hover:opacity-70 transition-opacity">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/de/agb" className="hover:opacity-70 transition-opacity">
                  Nutzungsbedingungen
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>
              Din.org LLC · 8 The Green, Suite B
              <br />
              Dover, DE 19901 · USA
              <br />© 2026 Din.org LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
