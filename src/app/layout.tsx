import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "din.org — AI Arbitration & Online Dispute Resolution",
  description:
    "din.org is the AI arbitration platform for fast, fair online dispute resolution. File a case, present evidence, receive a reasoned AI ruling — with human appeal built in. Days, not years. 1–5% of court costs.",
  keywords: [
    "AI arbitration",
    "AI court",
    "AI judge",
    "online arbitration",
    "online dispute resolution",
    "AI dispute resolution",
    "arbitration software",
    "virtual court",
    "ODR",
    "alternative dispute resolution",
  ],
  metadataBase: new URL("https://din.org"),
  alternates: { canonical: "https://din.org" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://din.org",
    siteName: "din.org",
    title: "din.org — AI Arbitration & Online Dispute Resolution",
    description:
      "The AI arbitration platform. File a case, present evidence, receive a reasoned AI ruling — with human appeal built in. Days, not years.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — AI Arbitration & Online Dispute Resolution",
    description:
      "The AI arbitration platform. File a case, present evidence, receive a reasoned AI ruling — with human appeal built in. Days, not years.",
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
    <html lang="en" className={orbitron.variable}>
      <head>
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
                  alternateName: "din.org AI Court",
                  url: "https://din.org",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://din.org/icon.svg",
                  },
                  description:
                    "din.org is an AI arbitration and online dispute resolution platform delivering fair, fast, and affordable rulings end-to-end, with human-judge appeal panels built in.",
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
                    "AI arbitration",
                    "Online dispute resolution",
                    "Alternative dispute resolution",
                    "AI court",
                    "Arbitration software",
                    "EU AI Act compliance",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://din.org/#website",
                  url: "https://din.org",
                  name: "din.org",
                  description:
                    "AI arbitration and online dispute resolution platform.",
                  publisher: { "@id": "https://din.org/#organization" },
                  inLanguage: "en",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "din.org",
                  applicationCategory: "BusinessApplication",
                  applicationSubCategory: "Arbitration software",
                  operatingSystem: "Web",
                  description:
                    "End-to-end AI arbitration platform: file a case, present evidence, examine witnesses by AI-led video, receive a reasoned AI ruling, optional human-judge appeal.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "EUR",
                    price: "0",
                    description:
                      "Free to send invitations. Token-based pricing per action.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
