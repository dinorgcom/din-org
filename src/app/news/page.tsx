import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — din.org",
  description:
    "The latest developments in AI, law, and the future of dispute resolution.",
};

const articles = [
  {
    date: "August 2024",
    source: "European Parliament",
    title: "EU AI Act Enters into Force — Legal AI Classified High-Risk",
    body: "The world's first comprehensive AI law took effect, classifying AI in law enforcement and judicial decisions as high-risk with strict transparency requirements.",
    hover: "AI in courtrooms now faces the highest regulatory bar in Europe. Transparency and human oversight are mandatory, not optional.",
    tag: "Regulation",
    url: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
  },
  {
    date: "March 2026",
    source: "CNBC",
    title: "Harvey AI Valued at $11 Billion in Latest Funding Round",
    body: "Legal AI startup Harvey raised $200M at an $11B valuation, proving that AI-powered legal tools have become a major enterprise category.",
    hover: "From $1.5B to $11B in under two years. Harvey's meteoric rise proves legal AI is the fastest-growing enterprise AI vertical.",
    tag: "Industry",
    url: "https://www.cnbc.com/2026/03/25/legal-ai-startup-harvey-raises-200-million-at-11-billion-valuation.html",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
  },
  {
    date: "May 2024",
    source: "LawSites",
    title: "AAA Acquires ODR.com and Mediate.com to Expand Online Dispute Resolution",
    body: "The American Arbitration Association acquired two major ODR platforms, signaling institutional commitment to online dispute resolution at scale.",
    hover: "The world's largest private ADR provider is going digital. Online dispute resolution is becoming the industry standard, not the exception.",
    tag: "Access to Justice",
    url: "https://www.lawnext.com/2024/05/american-arbitration-association-acquires-odr-com-and-mediate-com-to-expand-online-dispute-resolution.html",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
  },
  {
    date: "December 2024",
    source: "Xinhua / Supreme People's Court",
    title: "China Launches National AI Platform to Boost Judicial Efficiency",
    body: "China's Supreme Court unveiled a national AI platform built on 320 million pieces of legal data, piloted across six provinces to assist judges.",
    hover: "320 million legal records powering AI judges across six provinces. China is building the infrastructure for AI-driven justice at national scale.",
    tag: "AI Courts",
    url: "https://english.news.cn/20250101/94c58c6b4ae544f8b5840c835a2eff34/c.html",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  },
  {
    date: "December 2023",
    source: "UK Courts & Tribunals Judiciary",
    title: "UK Publishes First Official AI Guidance for Judges",
    body: "The UK Judiciary published guidance permitting AI for summaries and admin tasks, but recommending against its use for legal research or analysis.",
    hover: "UK judges can use AI as a tool — but not as a decision-maker. The line between assistance and autonomy is being drawn in law.",
    tag: "Regulation",
    url: "https://www.judiciary.uk/wp-content/uploads/2023/12/AI-Judicial-Guidance.pdf",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=400&h=300&fit=crop",
  },
  {
    date: "May 2016",
    source: "ProPublica",
    title: "Machine Bias: AI Risk Scores in Criminal Sentencing Show Racial Disparity",
    body: "ProPublica's landmark investigation found that the COMPAS algorithm was biased against Black defendants, mislabeling them as higher risk at nearly twice the rate.",
    hover: "The investigation that changed everything. COMPAS is used in 46 states — and it gets it wrong along racial lines. Fair AI demands better.",
    tag: "AI Ethics",
    url: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
  },
  {
    date: "June 2023",
    source: "CNBC",
    title: "Judge Sanctions Lawyers for Brief Written by AI with Fake Citations",
    body: "Attorney Steven Schwartz was fined $5,000 after submitting a legal brief with fictitious case citations fabricated by ChatGPT in Mata v. Avianca.",
    hover: "ChatGPT invented six court cases that never existed — and a lawyer filed them. This is why AI legal tools need built-in citation verification.",
    tag: "Cautionary",
    url: "https://www.cnbc.com/2023/06/22/judge-sanctions-lawyers-whose-ai-written-filing-contained-fake-citations.html",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
  },
  {
    date: "February 2025",
    source: "Federal Trade Commission",
    title: "FTC Finalizes Order Against DoNotPay's 'AI Lawyer' Claims",
    body: "The FTC fined DoNotPay $193,000 and prohibited deceptive AI lawyer claims after finding the company never tested whether its AI performed like a real lawyer.",
    hover: "Overpromising AI capabilities has real consequences. The FTC made clear: if you call it a lawyer, it must perform like one.",
    tag: "Regulation",
    url: "https://www.ftc.gov/news-events/news/press-releases/2025/02/ftc-finalizes-order-donotpay-prohibits-deceptive-ai-lawyer-claims-imposes-monetary-relief-requires",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            News
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            AI &amp; Law: The landscape is shifting.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Key developments at the intersection of artificial intelligence,
            legal systems, and the future of dispute resolution.
          </p>
        </div>
      </section>

      {/* Articles — card grid */}
      <section className="px-6 md:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {articles.map((a) => (
            <article
              key={a.title}
              className="reveal group rounded-3xl bg-ink-card border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40 overflow-hidden bg-ink-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 left-2 inline-block rounded-full bg-ink/70 backdrop-blur-sm text-accent text-[10px] font-medium px-2.5 py-0.5 group-hover:bg-accent group-hover:text-ink transition-colors duration-200">
                  {a.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-bone/40 mb-2 group-hover:text-ink/40 transition-colors duration-200">
                  <span>{a.source}</span>
                  <span className="w-1 h-1 rounded-full bg-bone/30 group-hover:bg-ink/30" />
                  <span>{a.date}</span>
                </div>
                <h2 className="display text-base md:text-lg font-semibold mb-2 group-hover:text-ink transition-colors duration-200">
                  {a.title}
                </h2>
                <p className="text-bone/60 text-sm group-hover:text-ink/70 transition-colors duration-200">
                  {a.body}
                </p>
                <p className="mt-2 text-sm text-ink font-medium italic invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {a.hover}
                </p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-3 inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:text-ink transition-colors duration-200"
                >
                  Read article <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
