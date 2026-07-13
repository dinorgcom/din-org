import type { Metadata } from "next";
import { LegalTerms } from "@/components/LegalTerms";
import "../decisions.css";

export const metadata: Metadata = {
  title: "Terms of Service \u2014 din.org",
  description:
    "Terms for DIN.ORG private, AI-supported dispute resolution, including private intake, shared evidence, consumer protections, and human review.",
  alternates: {
    canonical: "https://din.org/terms",
    languages: {
      en: "https://din.org/terms",
      de: "https://din.org/de/agb",
      "x-default": "https://din.org/terms",
    },
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalTerms locale="en" />;
}
