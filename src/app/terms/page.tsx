import type { Metadata } from "next";
import { LegalTerms } from "@/components/LegalTerms";
import "../decisions.css";

export const metadata: Metadata = {
  title: "Terms of Service \u2014 din.org",
  description:
    "Terms for din.org's structured email dispute-resolution service, including private intake, shared case records, files, witnesses, consumer protections, and human review.",
  alternates: {
    canonical: "https://din.org/terms",
    languages: {
      en: "https://din.org/terms",
      de: "https://din.org/de/agb",
      "x-default": "https://din.org/terms",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://din.org/terms",
    siteName: "din.org",
    title: "Terms for Structured Email Dispute Resolution \u2014 din.org",
    description:
      "Read the terms for private intake, shared case records, submitted files and witnesses, consumer protections, settlement support, and human review at din.org.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms for Structured Email Dispute Resolution \u2014 din.org",
    description:
      "Terms for private intake, shared case records, submitted files and witnesses, consumer protections, settlement support, and human review at din.org.",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalTerms locale="en" />;
}
