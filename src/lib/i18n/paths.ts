/**
 * URL path mapping between English (root) and German (/de) versions.
 * Used by the language switcher to jump to the equivalent page in the
 * other locale.
 *
 * Pages not listed here fall back to the locale root (`/` or `/de`).
 */

type PathPair = { en: string; de: string };

export const localePathPairs: PathPair[] = [
  { en: "/", de: "/de" },
  { en: "/how-it-works", de: "/de/so-funktionierts" },
  { en: "/about", de: "/de/ueber-uns" },
  { en: "/enterprise", de: "/de/unternehmen" },
  { en: "/mission", de: "/de/mission" },
  { en: "/news", de: "/de/news" },
  { en: "/pricing", de: "/de/preise" },
  { en: "/investors", de: "/de/investoren" },
  { en: "/early-access", de: "/de/fruehzugang" },
  { en: "/file-a-case", de: "/de/fall-einreichen" },
  { en: "/use-cases", de: "/de/anwendungsfaelle" },
  { en: "/what-is-arbitration", de: "/de/was-ist-schiedsgerichtsbarkeit" },
  { en: "/eu-ai-act-arbitration", de: "/de/ki-verordnung-schiedsgerichtsbarkeit" },
  { en: "/privacy", de: "/de/datenschutz" },
  { en: "/terms", de: "/de/agb" },
];

export function getAlternateLocalePath(currentPath: string): {
  locale: "en" | "de";
  otherLocale: "en" | "de";
  otherPath: string;
} {
  // Normalise trailing slashes
  const p = currentPath.replace(/\/+$/, "") || "/";
  const isGerman = p === "/de" || p.startsWith("/de/");

  if (isGerman) {
    const match = localePathPairs.find((pair) => pair.de === p);
    return {
      locale: "de",
      otherLocale: "en",
      otherPath: match?.en ?? "/",
    };
  } else {
    const match = localePathPairs.find((pair) => pair.en === p);
    return {
      locale: "en",
      otherLocale: "de",
      otherPath: match?.de ?? "/de",
    };
  }
}

/** For hreflang alternates in Next.js metadata. */
export function hreflangFor(enPath: string): Record<string, string> {
  const pair = localePathPairs.find((p) => p.en === enPath);
  if (!pair) return { en: `https://din.org${enPath}` };
  return {
    en: `https://din.org${pair.en}`,
    de: `https://din.org${pair.de}`,
    "x-default": `https://din.org${pair.en}`,
  };
}
