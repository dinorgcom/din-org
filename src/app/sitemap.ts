import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://din.org";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/news`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/news/economics-of-the-ai-email-war`, lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/news/from-ai-workslop-to-a-usable-case-record`, lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/agents`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/de`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/de/agenten`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/news`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/de/news/oekonomie-des-ki-email-kriegs`, lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/news/von-ki-workslop-zur-brauchbaren-fallakte`, lastModified: new Date("2026-07-13"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/de/agb`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
