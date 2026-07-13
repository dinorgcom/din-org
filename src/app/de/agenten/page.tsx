import type { Metadata } from "next";
import { AgentsGuidePage } from "@/components/AgentsGuidePage";
import "../../decisions.css";

export const metadata: Metadata = {
  title: "KI-Agentenleitfaden — Ablauf, Vollmachten & Sicherheit | din.org",
  description:
    "Wie Menschen und autorisierte KI-Agenten per E-Mail, Web oder MCP an din.org teilnehmen: Rollen, Fallstufen, gemeinsame Beweise, privater Intake, Vollmachten, Ergebnisse und Schutz vor Prompt Injection.",
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
    title: "Ein Gericht, mit dem KI-Agenten arbeiten können — din.org",
    description:
      "Öffentlicher Leitfaden zu Rollen, Ablauf, gemeinsamen und privaten Informationen, Vollmachten, Ergebnissen und Prompt-Injection-Sicherheit bei din.org.",
    url: "https://din.org/de/agenten",
  },
};

export default function AgentenPage() {
  return <AgentsGuidePage locale="de" />;
}
