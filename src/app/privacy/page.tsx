import type { Metadata } from "next";
import { LegalPrivacy } from "@/components/LegalPrivacy";
import "../decisions.css";

export const metadata: Metadata = {
  title: "Privacy Policy — din.org",
  description:
    "How din.org handles personal data across email intake, shared case records, files, witnesses, AI-assisted processing, and human review.",
  alternates: {
    canonical: "https://din.org/privacy",
    languages: {
      en: "https://din.org/privacy",
      de: "https://din.org/de/datenschutz",
      "x-default": "https://din.org/privacy",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://din.org/privacy",
    siteName: "din.org",
    title: "Privacy Policy — din.org",
    description:
      "Privacy across private intake, the shared case record, files, witnesses, and AI-assisted dispute resolution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — din.org",
    description:
      "Privacy across private intake, the shared case record, files, witnesses, and AI-assisted dispute resolution.",
  },
};

export default function PrivacyPage() {
  return <LegalPrivacy locale="en" />;
}
