import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./test.css";

const display = Newsreader({
  variable: "--font-d-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-d-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-d-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "din.org — The decision endpoint",
  description:
    "Outsource the verdict. din.org renders reasoned, auditable rulings on disputes, claims, and decisions you no longer want to make in-house. API-first decision infrastructure.",
  alternates: {
    canonical: "https://din.org/test",
  },
  openGraph: {
    type: "website",
    title: "din.org — The decision endpoint",
    description:
      "Outsource the verdict, keep the relationship. Reasoned, auditable rulings as an API.",
    url: "https://din.org/test",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      {children}
    </div>
  );
}
