"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getAlternateLocalePath } from "@/lib/i18n/paths";

const primaryLinksByLocale = {
  en: [
    { href: "/news", label: "Journal" },
    { href: "/agents", label: "For agents" },
    { href: "/terms", label: "Terms" },
  ],
  de: [
    { href: "/de/news", label: "Journal" },
    { href: "/de/agenten", label: "Für Agenten" },
    { href: "/de/agb", label: "AGB" },
  ],
} as const;

const ctaByLocale = {
  en: { login: "Login", start: "Start by email", menu: "Toggle menu" },
  de: { login: "Anmelden", start: "Per E-Mail starten", menu: "Menü öffnen" },
} as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const { locale } = getAlternateLocalePath(pathname);
  const primaryLinks = primaryLinksByLocale[locale];
  const cta = ctaByLocale[locale];
  const homeHref = locale === "de" ? "/de" : "/";
  const loginHref = "https://app.din.org/sign-in";
  const startHref = "mailto:case@din.org";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 md:p-3">
      <nav className="flex items-stretch gap-1.5">
        {/* Logo box */}
        <Link
          href={homeHref}
          className="flex items-center justify-center rounded-lg bg-accent px-3 py-2 shrink-0"
        >
          <span className="display text-base md:text-lg font-bold tracking-tight text-ink leading-none">
            din<span className="font-normal">.org</span>
          </span>
        </Link>

        {/* Nav pill boxes — desktop */}
        <div className="hidden md:contents">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex-1 flex items-center px-4 py-2 rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}

        </div>

        {/* Language switcher — desktop */}
        <div className="hidden md:flex shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Login */}
        <Link
          href={loginHref}
          className="hidden md:flex items-center gap-2 rounded-lg bg-bone/10 backdrop-blur-xl px-4 py-2 text-xs font-medium text-bone hover:bg-bone/20 transition-colors shrink-0"
        >
          {cta.login}
        </Link>

        {/* Email start — yellow CTA box */}
        <a
          href={startHref}
          className="hidden md:flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-ink hover:bg-accent-hot transition-colors shrink-0"
        >
          {cta.start}
          <span aria-hidden>→</span>
        </a>

        {/* Mobile spacer */}
        <div className="flex-1 md:hidden" />

        {/* Language switcher — mobile (between spacer and hamburger) */}
        <div className="md:hidden flex shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-bone/10 backdrop-blur-xl"
          aria-label={cta.menu}
        >
          <div className="flex flex-col gap-1.5 items-center justify-center w-5">
            <span
              className={`block h-0.5 w-full bg-bone transition-all duration-300 ${
                open ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-bone transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden mt-1.5 flex flex-col gap-1.5">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg bg-bone/10 backdrop-blur-xl text-sm font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={startHref}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-sm font-medium text-ink hover:bg-accent-hot transition-colors"
          >
            {cta.start}
            <span aria-hidden>→</span>
          </a>
        </div>
      )}
    </header>
  );
}
