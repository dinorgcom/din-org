import type { Metadata } from "next";
import { LegalTerms } from "@/components/LegalTerms";
import "../../decisions.css";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen \u2014 din.org",
  description:
    "Bedingungen für die strukturierte Streitbeilegung per E-Mail bei din.org: privater Intake, gemeinsame Fallakte, Dateien, Zeugen, Verbraucherschutz und menschliche Prüfung.",
  alternates: {
    canonical: "https://din.org/de/agb",
    languages: {
      en: "https://din.org/terms",
      de: "https://din.org/de/agb",
      "x-default": "https://din.org/terms",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://din.org/de/agb",
    siteName: "din.org",
    title: "Bedingungen für strukturierte Streitbeilegung per E-Mail \u2014 din.org",
    description:
      "Die Bedingungen für privaten Intake, gemeinsame Fallakten, eingereichte Dateien und Zeugen, Verbraucherschutz, Vergleichsunterstützung und menschliche Prüfung bei din.org.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedingungen für strukturierte Streitbeilegung per E-Mail \u2014 din.org",
    description:
      "Bedingungen für privaten Intake, gemeinsame Fallakten, Dateien und Zeugen, Verbraucherschutz, Vergleichsunterstützung und menschliche Prüfung bei din.org.",
  },
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return <LegalTerms locale="de" />;
}
