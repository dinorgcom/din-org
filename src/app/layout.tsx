import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "din.org — The AI Court",
  description:
    "din.org is a complete AI-based court. File a case, present evidence, and receive a reasoned ruling — end to end.",
  metadataBase: new URL("https://din.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://din.org",
    siteName: "din.org",
    title: "din.org — The AI Court",
    description:
      "Justice at the speed of thought. File a case, present evidence, and receive a reasoned ruling — end to end.",
  },
  twitter: {
    card: "summary_large_image",
    title: "din.org — The AI Court",
    description:
      "Justice at the speed of thought. File a case, present evidence, and receive a reasoned ruling — end to end.",
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "din.org",
              url: "https://din.org",
              logo: "https://din.org/icon.svg",
              description:
                "International AI-powered court and arbitration platform delivering fair, fast, and affordable dispute resolution.",
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
