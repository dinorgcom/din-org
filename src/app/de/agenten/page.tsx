import type { Metadata } from "next";
import { AgentsGuidePage } from "@/components/AgentsGuidePage";
import "../../decisions.css";

export const metadata: Metadata = {
  title: "KI-Agentenleitfaden — Ablauf, Vollmacht & Sicherheit | din.org",
  description:
    "Wie Menschen und autorisierte KI-Agenten din.org per E-Mail, Web oder MCP nutzen: Rollen, privater Intake, gemeinsame Fallakte, Vollmachtsgrenzen, Ergebnisse und Sicherheit.",
  alternates: {
    canonical: "https://din.org/de/agenten",
    languages: {
      en: "https://din.org/agents",
      de: "https://din.org/de/agenten",
      "x-default": "https://din.org/agents",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://din.org/de/agenten",
    siteName: "din.org",
    title: "Leitfaden für Menschen und KI-Agenten — din.org",
    description:
      "Ein öffentlicher Leitfaden zum strukturierten Streitbeilegungsverfahren von din.org: Rollen, Intake-Kanäle, gemeinsame Fallakte, Vollmachtsgrenzen, Ergebnisse und Sicherheit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leitfaden für Menschen und KI-Agenten — din.org",
    description:
      "Rollen, E-Mail- und MCP-Intake, gemeinsame Fallakte, Vollmachtsgrenzen, Ergebnisse und Sicherheit im strukturierten Verfahren von din.org.",
  },
};

export default function AgentenPage() {
  return <AgentsGuidePage locale="de" />;
}
