"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getAlternateLocalePath } from "@/lib/i18n/paths";

// Primary links — shown as pills on desktop
const primaryLinksByLocale = {
  en: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/mission", label: "Mission" },
  ],
  de: [
    { href: "/de/so-funktionierts", label: "So funktioniert es" },
    { href: "/de/ueber-uns", label: "Über uns" },
    { href: "/de/unternehmen", label: "Unternehmen" },
    { href: "/de/mission", label: "Mission" },
  ],
} as const;

// Secondary links — tucked into the "More" dropdown
const moreLinksByLocale = {
  en: [
    { href: "/use-cases", label: "Use cases" },
    { href: "/lawyer-counsel", label: "Lawyer counsel" },
    { href: "/news", label: "News" },
  ],
  de: [
    { href: "/de/anwendungsfaelle", label: "Anwendungsfälle" },
    { href: "/de/anwaltliche-vertretung", label: "Anwaltliche Vertretung" },
    { href: "/de/news", label: "News" },
  ],
} as const;

const ctaByLocale = {
  en: { login: "Login", early: "Early access", menu: "Toggle menu", more: "More" },
  de: { login: "Anmelden", early: "Early Access", menu: "Menü öffnen", more: "Mehr" },
} as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() ?? "/";
  const { locale } = getAlternateLocalePath(pathname);
  const primaryLinks = primaryLinksByLocale[locale];
  const moreLinks = moreLinksByLocale[locale];
  const cta = ctaByLocale[locale];
  const homeHref = locale === "de" ? "/de" : "/";
  const loginHref = locale === "de" ? "/de/anmelden" : "/login";
  const earlyHref = locale === "de" ? "/de/early-access" : "/early-access";

  // Close More on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

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

          {/* More dropdown */}
          <div ref={moreRef} className="relative flex shrink-0">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onMouseEnter={() => setMoreOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
              aria-haspopup="true"
              aria-expanded={moreOpen}
            >
              {cta.more}
              <span className={`text-[10px] transition-transform ${moreOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {moreOpen && (
              <div
                onMouseLeave={() => setMoreOpen(false)}
                className="absolute top-full right-0 mt-1.5 min-w-[180px] flex flex-col gap-1 p-1.5 rounded-lg bg-ink/95 backdrop-blur-xl border border-bone/10 shadow-xl"
              >
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className="px-3 py-2 rounded text-xs font-medium text-bone/80 hover:bg-accent hover:text-ink transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

        {/* Early access — yellow CTA box */}
        <Link
          href={earlyHref}
          className="hidden md:flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-ink hover:bg-accent-hot transition-colors shrink-0"
        >
          {cta.early}
          <span aria-hidden>→</span>
        </Link>

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
          {/* More section — flat on mobile, visually subdued */}
          <div className="flex flex-col gap-1.5 pt-1.5 mt-1 border-t border-bone/10">
            {moreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg bg-bone/5 backdrop-blur-xl text-sm font-medium text-bone/70 hover:bg-white hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href={earlyHref}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-sm font-medium text-ink hover:bg-accent-hot transition-colors"
          >
            {cta.early}
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </header>
  );
}
