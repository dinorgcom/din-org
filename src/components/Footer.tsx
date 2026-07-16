"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocalePath } from "@/lib/i18n/paths";

const copy = {
  en: {
    headline: "Resolve disputes, without the wait.",
    aboutTitle: "din.org",
    aboutBody: "A neutral, AI-assisted dispute-resolution process with human control and review.",
    navigateTitle: "Navigate",
    startTitle: "Start",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    nav: {
      home: { href: "/", label: "Home" },
      agents: { href: "/agents", label: "For AI agents" },
      news: { href: "/news", label: "Journal" },
      file: { href: "mailto:case@din.org", label: "Start by email" },
      web: { href: "https://app.din.org/sign-in", label: "Open web app" },
      privacy: { href: "/privacy", label: "Privacy" },
      terms: { href: "/terms", label: "Terms" },
    },
    contactLines: ["hello@din.org", "Press · Partnerships"],
  },
  de: {
    headline: "Streit lösen, ohne Wartezeit.",
    aboutTitle: "din.org",
    aboutBody: "Ein neutrales, KI-gestütztes Streitbeilegungsverfahren mit menschlicher Kontrolle und Prüfung.",
    navigateTitle: "Navigation",
    startTitle: "Start",
    contactTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    nav: {
      home: { href: "/de", label: "Start" },
      agents: { href: "/de/agenten", label: "Für KI-Agenten" },
      news: { href: "/de/news", label: "Journal" },
      file: { href: "mailto:case@din.org", label: "Per E-Mail starten" },
      web: { href: "https://app.din.org/sign-in", label: "Web-App öffnen" },
      privacy: { href: "/de/datenschutz", label: "Datenschutz" },
      terms: { href: "/de/agb", label: "AGB" },
    },
    contactLines: ["hello@din.org", "Presse · Partnerschaften"],
  },
} as const;

export function Footer() {
  const pathname = usePathname() ?? "/";
  const { locale } = getAlternateLocalePath(pathname);
  const t = copy[locale];

  return (
    <footer className="px-4 md:px-6 pb-6">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-accent text-ink">
        <div className="grain absolute inset-0 opacity-40" />
        <div className="relative px-8 md:px-16 pt-16 md:pt-24 pb-10 md:pb-14">
          <p className="display text-5xl md:text-8xl font-semibold max-w-4xl">
            {t.headline}
          </p>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                {t.aboutTitle}
              </p>
              <p className="text-base max-w-sm opacity-80">{t.aboutBody}</p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                {t.navigateTitle}
              </p>
              <ul className="space-y-2 text-base">
                <li><Link href={t.nav.home.href} className="hover:underline">{t.nav.home.label}</Link></li>
                <li><Link href={t.nav.news.href} className="hover:underline">{t.nav.news.label}</Link></li>
                <li><Link href={t.nav.agents.href} className="hover:underline">{t.nav.agents.label}</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                {t.startTitle}
              </p>
              <ul className="space-y-2 text-base">
                <li><a href={t.nav.file.href} className="hover:underline">{t.nav.file.label}</a></li>
                <li><a href={t.nav.web.href} className="hover:underline">{t.nav.web.label}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                {t.contactTitle}
              </p>
              <ul className="space-y-2 text-base">
                {t.contactLines.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-ink/15 pt-6 text-sm opacity-70">
            <p>© {new Date().getFullYear()} din.org — {t.rights}</p>
            <div className="flex items-center gap-4">
              <Link href={t.nav.privacy.href} className="hover:underline">{t.nav.privacy.label}</Link>
              <span>·</span>
              <Link href={t.nav.terms.href} className="hover:underline">{t.nav.terms.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
