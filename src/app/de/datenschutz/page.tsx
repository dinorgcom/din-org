import type { Metadata } from "next";
import { LegalPrivacy } from "@/components/LegalPrivacy";
import "../../decisions.css";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — din.org",
  description:
    "Wie din.org personenbezogene Daten bei E-Mail-Aufnahme, gemeinsamer Fallakte, Dateien, Zeugen, KI-gestützter Verarbeitung und menschlicher Prüfung behandelt.",
  alternates: {
    canonical: "https://din.org/de/datenschutz",
    languages: {
      en: "https://din.org/privacy",
      de: "https://din.org/de/datenschutz",
      "x-default": "https://din.org/privacy",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://din.org/de/datenschutz",
    siteName: "din.org",
    title: "Datenschutzerklärung — din.org",
    description:
      "Datenschutz bei privater Aufnahme, gemeinsamer Fallakte, Dateien, Zeugen und KI-gestützter Streitbeilegung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung — din.org",
    description:
      "Datenschutz bei privater Aufnahme, gemeinsamer Fallakte, Dateien, Zeugen und KI-gestützter Streitbeilegung.",
  },
};

export default function DatenschutzPage() {
  return <LegalPrivacy locale="de" />;
}
