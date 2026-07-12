import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialArticlePage } from "@/components/EditorialArticlePage";
import { editorialArticles, getEditorialArticle } from "@/lib/editorial-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return editorialArticles.de.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getEditorialArticle("de", slug);
  if (!article) return {};
  const canonical = `https://din.org/de/news/${article.slug}`;
  const english = `https://din.org/news/${article.alternateSlug}`;
  return {
    title: `${article.title} | din.org`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical,
      languages: { en: english, de: canonical, "x-default": english },
    },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: canonical,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.datePublished,
      authors: ["din.org"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getEditorialArticle("de", slug);
  if (!article) notFound();
  const url = `https://din.org/de/news/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: "de",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "din.org", url: "https://din.org" },
    publisher: { "@type": "Organization", name: "din.org", url: "https://din.org" },
    image: "https://din.org/opengraph-image",
    keywords: article.keywords.join(", "),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EditorialArticlePage article={article} />
    </>
  );
}
