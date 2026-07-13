import type { Metadata } from "next";
import { LegalTerms } from "@/components/LegalTerms";
import "../../decisions.css";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen \u2014 din.org",
  description:
    "Bedingungen für die private, KI-gestützte Streitbeilegung von DIN.ORG, einschließlich privater Aufnahme, gemeinsamer Beweismittel, Verbraucherschutz und menschlicher Überprüfung.",
  alternates: {
    canonical: "https://din.org/de/agb",
    languages: {
      en: "https://din.org/terms",
      de: "https://din.org/de/agb",
      "x-default": "https://din.org/terms",
    },
  },
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return <LegalTerms locale="de" />;
}
