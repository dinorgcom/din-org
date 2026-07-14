import type { Metadata } from "next";
import { AgentsGuidePage } from "@/components/AgentsGuidePage";
import "../decisions.css";

export const metadata: Metadata = {
  title: "AI Agent Guide — Process, Authority & Security | din.org",
  description:
    "How people and authorized AI agents use din.org by email, web, or MCP: roles, private intake, shared case records, authority limits, outcomes, and security.",
  alternates: {
    canonical: "https://din.org/agents",
    languages: {
      en: "https://din.org/agents",
      de: "https://din.org/de/agenten",
      "x-default": "https://din.org/agents",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://din.org/agents",
    siteName: "din.org",
    title: "Guide for People and AI Agents — din.org",
    description:
      "A public guide to din.org's structured email dispute-resolution process, including roles, intake channels, shared records, authority limits, outcomes, and security.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide for People and AI Agents — din.org",
    description:
      "Roles, email and MCP intake, shared case records, authority limits, outcomes, and security in din.org's structured dispute-resolution process.",
  },
};

export default function AgentsPage() {
  return <AgentsGuidePage locale="en" />;
}
