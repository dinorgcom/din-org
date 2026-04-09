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
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
