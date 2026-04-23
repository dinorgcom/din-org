"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocalePath } from "@/lib/i18n/paths";

export function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const { locale, otherLocale, otherPath } = getAlternateLocalePath(pathname);

  return (
    <div className="flex items-center rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium overflow-hidden shrink-0">
      <span className="px-2.5 py-2 text-bone/90">
        {locale === "en" ? "EN" : "DE"}
      </span>
      <Link
        href={otherPath}
        className="px-2.5 py-2 text-bone/50 hover:bg-white hover:text-ink transition-colors duration-200"
        aria-label={`Switch to ${otherLocale === "en" ? "English" : "German"}`}
      >
        {otherLocale === "en" ? "EN" : "DE"}
      </Link>
    </div>
  );
}
