"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocalePath } from "@/lib/i18n/paths";

const copy = {
  en: {
    headline: "Justice, without the wait.",
    aboutTitle: "din.org",
    aboutBody: "A complete AI-based court. Open to everyone, everywhere.",
    navigateTitle: "Navigate",
    investorsTitle: "Investors",
    investorsLink: "Why invest",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    nav: {
      home: { href: "/", label: "Home" },
      how: { href: "/how-it-works", label: "How it works" },
      use: { href: "/use-cases", label: "Use cases" },
      lawyer: { href: "/lawyer-counsel", label: "Lawyer counsel" },
      about: { href: "/about", label: "About" },
      enterprise: { href: "/enterprise", label: "Enterprise" },
      pricing: { href: "/pricing", label: "Pricing" },
      file: { href: "/file-a-case", label: "File a case" },
      whyInvest: { href: "/investors", label: "Why invest" },
      privacy: { href: "/privacy", label: "Privacy" },
      terms: { href: "/terms", label: "Terms" },
    },
    contactLines: ["hello@din.org", "Press · Partnerships"],
  },
  de: {
    headline: "Recht, ohne Wartezeit.",
    aboutTitle: "din.org",
    aboutBody: "Ein vollständiges KI-basiertes Gericht. Offen für alle, überall.",
    navigateTitle: "Navigation",
    investorsTitle: "Investoren",
    investorsLink: "Warum investieren",
    contactTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    nav: {
      home: { href: "/de", label: "Start" },
      how: { href: "/de/so-funktionierts", label: "So funktioniert es" },
      use: { href: "/de/anwendungsfaelle", label: "Anwendungsfälle" },
      lawyer: { href: "/de/anwaltliche-vertretung", label: "Anwaltliche Vertretung" },
      about: { href: "/de/ueber-uns", label: "Über uns" },
      enterprise: { href: "/de/unternehmen", label: "Unternehmen" },
      pricing: { href: "/de/preise", label: "Preise" },
      file: { href: "/de/fall-einreichen", label: "Fall einreichen" },
      whyInvest: { href: "/de/investoren", label: "Warum investieren" },
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
                <li><Link href={t.nav.how.href} className="hover:underline">{t.nav.how.label}</Link></li>
                <li><Link href={t.nav.use.href} className="hover:underline">{t.nav.use.label}</Link></li>
                <li><Link href={t.nav.lawyer.href} className="hover:underline">{t.nav.lawyer.label}</Link></li>
                <li><Link href={t.nav.about.href} className="hover:underline">{t.nav.about.label}</Link></li>
                <li><Link href={t.nav.enterprise.href} className="hover:underline">{t.nav.enterprise.label}</Link></li>
                <li><Link href={t.nav.pricing.href} className="hover:underline">{t.nav.pricing.label}</Link></li>
                <li><Link href={t.nav.file.href} className="hover:underline">{t.nav.file.label}</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                {t.investorsTitle}
              </p>
              <ul className="space-y-2 text-base">
                <li><Link href={t.nav.whyInvest.href} className="hover:underline">{t.nav.whyInvest.label}</Link></li>
                <li><a href="mailto:investors@din.org" className="hover:underline">investors@din.org</a></li>
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
