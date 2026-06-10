import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, Inter } from "next/font/google";
import "../decisions.css";

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

export const metadata: Metadata = {
  title: "Thank you — din.org",
  description: "Your request has been received.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div
      className={`decisions-site ${display.variable} ${sans.variable} min-h-screen flex flex-col`}
    >
      <header className="px-6 md:px-10 py-6">
        <Link
          href="/"
          className="d-display text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: "var(--d-ink)" }}
        >
          din.org
        </Link>
      </header>

      <main className="flex-1 flex items-center px-6 md:px-10">
        <div className="mx-auto max-w-[800px] text-center py-24">
          <p
            className="text-[11px] uppercase tracking-[0.3em] mb-8"
            style={{ color: "var(--d-accent)" }}
          >
            Request received
          </p>
          <h1 className="d-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] mb-8">
            Thank you.{" "}
            <span
              className="italic font-light"
              style={{ color: "var(--d-ink-muted)" }}
            >
              We&apos;ll be in touch.
            </span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed font-light max-w-xl mx-auto mb-12"
            style={{ color: "var(--d-ink-muted)" }}
          >
            Your request is with our team. We respond within two business
            days — no automated funnel, a person reads every submission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-colors"
              style={{
                background: "var(--d-ink)",
                color: "var(--d-bone)",
              }}
            >
              Back to din.org
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/tribunal"
              className="inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-colors"
              style={{
                borderColor: "var(--d-ink)",
                color: "var(--d-ink)",
              }}
            >
              Explore the tribunal
            </Link>
          </div>
        </div>
      </main>

      <footer
        className="px-6 md:px-10 py-8 text-xs text-center"
        style={{
          borderTop: "1px solid var(--d-line)",
          color: "var(--d-ink-muted)",
        }}
      >
        The decision endpoint · © {new Date().getFullYear()} din.org
      </footer>
    </div>
  );
}
