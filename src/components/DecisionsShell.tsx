import Link from "next/link";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { HarveyNav } from "@/components/HarveyNav";
import "../app/decisions.css";

// Shared chrome for Journal pages so News and the article pages match the
// main site's `.decisions-site` look (bone + Newsreader serif + warm
// accent) instead of the older dark theme. Sets up the fonts, the top
// nav, and the footer; ConditionalChrome suppresses the legacy
// Navbar/Footer on these routes.

const display = Newsreader({
  variable: "--font-d-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Inter({ variable: "--font-d-sans", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-d-mono", subsets: ["latin"], display: "swap" });

const CASE_EMAIL = "case@din.org";
const LOGIN_URL = "https://app.din.org/sign-in";

function caseMailto(isGerman: boolean) {
  const subject = isGerman ? "Neuen Fall starten" : "Start a new case";
  return `mailto:${CASE_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function DecisionsShell({
  locale,
  children,
}: {
  locale: "en" | "de";
  children: React.ReactNode;
}) {
  const isGerman = locale === "de";
  const home = isGerman ? "/de" : "/";
  const journal = isGerman ? "/de/news" : "/news";
  const agents = isGerman ? "/de/agenten" : "/agents";
  const mailto = caseMailto(isGerman);

  const links = [
    { href: `${home}#start`, label: isGerman ? "Fall starten" : "Start a case" },
    { href: `${home}#how`, label: isGerman ? "So funktioniert es" : "How it works" },
    { href: journal, label: "Journal" },
    { href: agents, label: isGerman ? "Für Agenten" : "For agents" },
    { href: LOGIN_URL, label: isGerman ? "Anmelden" : "Log in" },
  ];

  return (
    <div className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}>
      <HarveyNav
        links={links}
        cta={{ href: mailto, label: isGerman ? "Fall per E-Mail" : "Email your case" }}
      />

      {children}

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
              {isGerman
                ? "Neutrale, KI-gestützte Streitbeilegung zwischen zwei Parteien — mit vertraulicher Aufnahme und menschlicher Prüfung auf Wunsch."
                : "Neutral, AI-supported dispute resolution between two parties — with private intake and human review on request."}
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              {isGerman ? "Start" : "Start"}
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <a href={mailto} className="hover:opacity-70 transition-opacity">
                  {CASE_EMAIL}
                </a>
              </li>
              <li>
                <Link href={agents} className="hover:opacity-70 transition-opacity">
                  {isGerman ? "Agenten verbinden" : "Connect your agent"}
                </Link>
              </li>
              <li>
                <Link href={journal} className="hover:opacity-70 transition-opacity">
                  Journal
                </Link>
              </li>
              <li>
                <a href={LOGIN_URL} className="hover:opacity-70 transition-opacity">
                  {isGerman ? "Anmelden" : "Log in"}
                </a>
              </li>
              <li>
                <Link href={isGerman ? "/" : "/de"} className="hover:opacity-70 transition-opacity">
                  {isGerman ? "English" : "Deutsch"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Legal
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li>
                <Link
                  href={isGerman ? "/de/datenschutz" : "/privacy"}
                  className="hover:opacity-70 transition-opacity"
                >
                  {isGerman ? "Datenschutz" : "Privacy"}
                </Link>
              </li>
              <li>
                <Link
                  href={isGerman ? "/de/agb" : "/terms"}
                  className="hover:opacity-70 transition-opacity"
                >
                  {isGerman ? "AGB" : "Terms"}
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
