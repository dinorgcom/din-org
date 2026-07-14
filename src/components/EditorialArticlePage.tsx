import Link from "next/link";
import type { EditorialArticle } from "@/lib/editorial-articles";

export function EditorialArticlePage({ article }: { article: EditorialArticle }) {
  const isGerman = article.locale === "de";
  const newsHref = isGerman ? "/de/news" : "/news";
  const relatedHref = `${newsHref}/${article.relatedSlug}`;
  const caseEmailHref = isGerman
    ? "mailto:case@din.org?subject=Neuen%20Fall%20starten"
    : "mailto:case@din.org?subject=Start%20a%20new%20case";

  return (
    <div lang={article.locale}>
      <section className="px-6 md:px-10 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-5xl">
          <Link
            href={newsHref}
            className="inline-flex items-center gap-2 text-sm text-bone/55 hover:text-accent transition-colors mb-10"
          >
            <span aria-hidden>&larr;</span> {isGerman ? "Zurück zu News" : "Back to News"}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-accent/15 text-accent text-xs uppercase tracking-wider px-3 py-1">
              {article.eyebrow}
            </span>
            <span className="text-xs text-bone/50">
              {article.dateLabel} · {article.readingTime}
            </span>
          </div>
          <h1 className="display text-4xl md:text-7xl leading-[1.02] font-semibold max-w-5xl">
            {article.title}
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-bone/70 leading-relaxed max-w-4xl">
            {article.lead}
          </p>
          <p className="mt-8 text-sm text-bone/60">
            {isGerman ? "Von" : "By"} din.org · {isGerman ? "Forschung & Einordnung" : "Research & analysis"}
          </p>
        </div>
      </section>

      <section className="bg-accent text-ink px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-55 mb-4">
            {isGerman ? "Kernaussage" : "The central insight"}
          </p>
          <p className="display text-2xl md:text-4xl font-semibold leading-[1.25]">
            {article.keyPoint}
          </p>
        </div>
      </section>

      <article className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          {article.sections.map((section) => (
            <section key={section.title} className="mb-14 last:mb-0">
              <h2 className="display text-2xl md:text-4xl font-semibold text-bone mb-6">
                {section.title}
              </h2>
              <div className="space-y-5 text-base md:text-lg text-bone/78 leading-[1.75]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-7 space-y-3 text-base md:text-lg text-bone/78">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      <section className="px-6 md:px-10 py-16 md:py-24 bg-bone/5 border-y border-bone/10">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            {isGerman ? "Quellen & weitere Lektüre" : "Sources & further reading"}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {article.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-bone/15 bg-ink-card p-5 hover:border-accent/60 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-accent/80">{source.source}</p>
                <h3 className="display mt-2 text-lg font-semibold group-hover:text-accent transition-colors">
                  {source.title} <span aria-hidden>↗</span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-bone/55">{source.note}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-bone/60 max-w-3xl">
            {isGerman
              ? "Redaktioneller Hinweis: Externe Quellen werden zur Einordnung verlinkt. Zahlen und Aussagen sind ihrer jeweiligen Methodik und ihrem Veröffentlichungsstand entsprechend zu lesen."
              : "Editorial note: External sources are linked for context. Statistics and claims should be read in light of each source’s methodology and publication date."}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-4xl grid gap-5 md:grid-cols-2">
          <Link
            href={relatedHref}
            className="rounded-3xl bg-ink-card border border-bone/15 p-7 hover:border-accent/60 transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60 mb-3">
              {isGerman ? "Weiterführender Artikel" : "Related article"}
            </p>
            <p className="display text-2xl font-semibold text-accent">{article.relatedLabel}</p>
          </Link>
          <div className="rounded-3xl bg-accent text-ink p-7">
            <p className="text-xs uppercase tracking-[0.2em] opacity-55 mb-3">
              {isGerman ? "Den E-Mail-Krieg beenden" : "End the email war"}
            </p>
            <p className="display text-2xl font-semibold">
              {isGerman ? "Bringen Sie den Streit in ein strukturiertes Verfahren." : "Move the dispute into a structured process."}
            </p>
            <a
              href={caseEmailHref}
              className="mt-6 inline-flex rounded-full bg-ink text-bone px-5 py-3 text-sm font-medium hover:bg-ink/85 transition-colors"
            >
              {isGerman ? "Fall per E-Mail starten" : "Start by email"} <span className="ml-2" aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
