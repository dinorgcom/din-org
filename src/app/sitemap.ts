import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://din.org";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/enterprise`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mission`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/investors`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/early-access`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/file-a-case`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    // SEO content pages
    { url: `${baseUrl}/use-cases`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/what-is-arbitration`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/eu-ai-act-arbitration`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/lawyer-counsel`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    // German pages
    { url: `${baseUrl}/de`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/de/so-funktionierts`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/de/anwendungsfaelle`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/was-ist-schiedsgerichtsbarkeit`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/de/ki-verordnung-schiedsgerichtsbarkeit`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/anwaltliche-vertretung`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/ueber-uns`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/mission`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/de/unternehmen`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/de/preise`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/de/fruehzugang`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/de/news`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/de/investoren`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/de/fall-einreichen`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/de/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/de/agb`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
