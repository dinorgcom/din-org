import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Providers } from "@/components/Providers";
import { ConditionalChrome } from "@/components/ConditionalChrome";
import { DocumentLocale } from "@/components/DocumentLocale";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "din.org — Structured Email Dispute Resolution",
  description:
    "din.org helps both sides turn an email dispute into a structured case record and work toward a clear settlement proposal through private intake and shared evidence.",
  keywords: [
    "email dispute resolution",
    "structured dispute resolution",
    "online dispute resolution",
    "AI-assisted dispute resolution",
    "settlement support",
    "settlement proposal",
    "shared case record",
    "evidence management for disputes",
    "consumer dispute resolution",
    "commercial dispute resolution",
    "alternative dispute resolution",
  ],
  metadataBase: new URL("https://din.org"),
  alternates: {
    canonical: "https://din.org",
    languages: {
      en: "https://din.org",
      de: "https://din.org/de",
      "x-default": "https://din.org",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://din.org",
    siteName: "din.org",
    title: "din.org — Structured Email Dispute Resolution",
    description:
      "Turn an email dispute into a structured, reviewable case record and a clear path toward settlement, with private intake for both parties and shared evidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — Structured Email Dispute Resolution",
    description:
      "Turn an email dispute into a structured, reviewable case record and a clear path toward settlement, with private intake for both parties and shared evidence.",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.documentElement.lang=location.pathname==="/de"||location.pathname.startsWith("/de/")?"de":"en";',
          }}
        />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://din.org/#organization",
                  name: "din.org",
                  legalName: "Din.org LLC",
                  url: "https://din.org",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "8 The Green, Suite B",
                    addressLocality: "Dover",
                    addressRegion: "DE",
                    postalCode: "19901",
                    addressCountry: "US",
                  },
                  logo: {
                    "@type": "ImageObject",
                    url: "https://din.org/icon.svg",
                  },
                  description:
                    "din.org provides an AI-supported private dispute-resolution service that receives disputes by email or web, gathers each party's account, organises shared case material, and helps the parties work toward settlement.",
                  foundingDate: "2024",
                  founders: [
                    { "@type": "Person", name: "Michael Marcovici" },
                    { "@type": "Person", name: "Raphael Spannocchi" },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@din.org",
                    contactType: "customer service",
                  },
                  knowsAbout: [
                    "Structured dispute resolution",
                    "Online dispute resolution",
                    "Email-based dispute intake",
                    "AI-assisted dispute resolution",
                    "Settlement support",
                    "Shared case records",
                    "Evidence organisation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://din.org/#website",
                  url: "https://din.org",
                  name: "din.org",
                  description:
                    "Website for din.org's email-first, structured private dispute-resolution service.",
                  publisher: { "@id": "https://din.org/#organization" },
                  inLanguage: ["en", "de"],
                },
                {
                  "@type": "Service",
                  "@id": "https://din.org/#service",
                  name: "din.org structured dispute resolution",
                  serviceType: "Structured private dispute resolution and settlement support",
                  provider: { "@id": "https://din.org/#organization" },
                  url: "https://din.org",
                  description:
                    "An AI-supported service that receives disputes, gathers each party's account through private intake, organises shared case material, and supports a structured path toward settlement.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <DocumentLocale />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <ConditionalChrome>{children}</ConditionalChrome>
          <ScrollReveal />
        </Providers>
      </body>
    </html>
  );
}
