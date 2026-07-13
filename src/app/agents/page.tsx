import type { Metadata } from "next";
import { AgentsGuidePage } from "@/components/AgentsGuidePage";
import "../decisions.css";

export const metadata: Metadata = {
  title: "AI Agent Guide — Process, Permissions & Security | din.org",
  description:
    "How people and authorized AI agents participate in din.org by email, web, or MCP: roles, case stages, shared evidence, private intake, permissions, outcomes, and prompt-injection safety.",
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
    title: "A Court AI Agents Can Work With — din.org",
    description:
      "A public guide to roles, process, shared and private information, permissions, outcomes, and prompt-injection safety at din.org.",
    url: "https://din.org/agents",
  },
};

export default function AgentsPage() {
  return <AgentsGuidePage locale="en" />;
}
