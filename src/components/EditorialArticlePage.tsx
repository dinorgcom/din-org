import Link from "next/link";
import type { EditorialArticle } from "@/lib/editorial-articles";
import { DecisionsShell } from "@/components/DecisionsShell";

// Article page in the main-site `.decisions-site` look: bone background,
// Newsreader serif, warm accent. Wrapped in DecisionsShell so it carries
// the same nav + footer as the homepage.
export function EditorialArticlePage({ article }: { article: EditorialArticle }) {
  const isGerman = article.locale === "de";
  const newsHref = isGerman ? "/de/news" : "/news";
  const relatedHref = `${newsHref}/${article.relatedSlug}`;
  const caseEmailHref = isGerman
    ? "mailto:case@din.org?subject=Neuen%20Fall%20starten"
    : "mailto:case@din.org?subject=Start%20a%20new%20case";

  return (
    <DecisionsShell locale={article.locale}>
      <div lang={article.locale} style={{ background: "var(--d-bone)" }}>
        {/* Header */}
        <section className="px-6 md:px-10 pt-40 pb-14 md:pb-20">
          <div className="mx-auto max-w-[900px]">
            <Link
              href={newsHref}
              className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span aria-hidden>←</span> {isGerman ? "Zurück zum Journal" : "Back to the Journal"}
            </Link>
            <div
              className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--d-ink-muted)" }}
            >
              <span style={{ color: "var(--d-accent)" }}>{article.eyebrow}</span>
              <span className="h-px w-6" style={{ background: "var(--d-line)" }} />
              <span>
                {article.dateLabel} · {article.readingTime}
              </span>
            </div>
            <h1
              className="d-display text-4xl md:text-6xl leading-[1.05]"
              style={{ color: "var(--d-ink)" }}
            >
              {article.title}
            </h1>
            <p
              className="mt-8 text-lg md:text-xl leading-relaxed font-light max-w-3xl"
              style={{ color: "var(--d-ink-muted)" }}
            >
              {article.lead}
            </p>
            <p className="mt-8 text-sm" style={{ color: "var(--d-ink-muted)" }}>
              {isGerman ? "Von" : "By"} din.org ·{" "}
              {isGerman ? "Forschung & Einordnung" : "Research & analysis"}
            </p>
          </div>
        </section>

        {/* Central insight — warm accent band */}
        <section
          className="px-6 md:px-10 py-14 md:py-20"
          style={{ background: "var(--d-ink)" }}
        >
          <div className="mx-auto max-w-[900px]">
            <p
              className="text-[11px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              {isGerman ? "Kernaussage" : "The central insight"}
            </p>
            <p
              className="d-display text-2xl md:text-4xl leading-[1.28]"
              style={{ color: "var(--d-bone)" }}
            >
              {article.keyPoint}
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto max-w-[720px]">
            {article.sections.map((section) => (
              <section key={section.title} className="mb-14 last:mb-0">
                <h2
                  className="d-display text-2xl md:text-3xl leading-tight mb-5"
                  style={{ color: "var(--d-ink)" }}
                >
                  {section.title}
                </h2>
                <div
                  className="space-y-5 text-base md:text-lg leading-[1.8] font-light"
                  style={{ color: "var(--d-ink-soft)" }}
                >
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-7 space-y-3 text-base md:text-lg" style={{ color: "var(--d-ink-soft)" }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--d-accent)" }}
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>

        {/* Sources */}
        <section className="px-6 md:px-10 py-16 md:py-20" style={{ background: "var(--d-bone-soft)" }}>
          <div className="mx-auto max-w-[900px]">
            <p
              className="text-[11px] uppercase tracking-[0.25em] mb-6"
              style={{ color: "var(--d-accent)" }}
            >
              {isGerman ? "Quellen & weitere Lektüre" : "Sources & further reading"}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {article.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl p-5 transition-colors"
                  style={{ background: "var(--d-bone)", border: "1px solid var(--d-line)" }}
                >
                  <p
                    className="text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: "var(--d-ink-muted)" }}
                  >
                    {source.source}
                  </p>
                  <h3
                    className="d-display mt-2 text-lg leading-snug transition-opacity group-hover:opacity-70"
                    style={{ color: "var(--d-ink)" }}
                  >
                    {source.title} <span aria-hidden>↗</span>
                  </h3>
                  <p className="mt-2 text-sm leading-6 font-light" style={{ color: "var(--d-ink-muted)" }}>
                    {source.note}
                  </p>
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 max-w-3xl" style={{ color: "var(--d-ink-muted)" }}>
              {isGerman
                ? "Redaktioneller Hinweis: Externe Quellen werden zur Einordnung verlinkt. Zahlen und Aussagen sind ihrer jeweiligen Methodik und ihrem Veröffentlichungsstand entsprechend zu lesen."
                : "Editorial note: external sources are linked for context. Statistics and claims should be read in light of each source’s methodology and publication date."}
            </p>
          </div>
        </section>

        {/* Related + CTA */}
        <section className="px-6 md:px-10 py-16 md:py-24">
          <div className="mx-auto max-w-[900px] grid gap-5 md:grid-cols-2">
            <Link
              href={relatedHref}
              className="group rounded-2xl p-7 transition-colors"
              style={{ background: "var(--d-bone-soft)", border: "1px solid var(--d-line)" }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--d-ink-muted)" }}
              >
                {isGerman ? "Weiterführender Artikel" : "Related article"}
              </p>
              <p
                className="d-display text-2xl leading-snug transition-opacity group-hover:opacity-70"
                style={{ color: "var(--d-ink)" }}
              >
                {article.relatedLabel} <span aria-hidden>→</span>
              </p>
            </Link>
            <div className="rounded-2xl p-7" style={{ background: "var(--d-ink)" }}>
              <p
                className="text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: "rgba(245,241,234,0.55)" }}
              >
                {isGerman ? "Den E-Mail-Krieg beenden" : "End the email war"}
              </p>
              <p className="d-display text-2xl leading-snug" style={{ color: "var(--d-bone)" }}>
                {isGerman
                  ? "Bringen Sie den Streit in ein strukturiertes Verfahren."
                  : "Move the dispute into a structured process."}
              </p>
              <a
                href={caseEmailHref}
                className="mt-6 inline-flex rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}
              >
                {isGerman ? "Fall per E-Mail starten" : "Start by email"}{" "}
                <span className="ml-2" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </DecisionsShell>
  );
}
