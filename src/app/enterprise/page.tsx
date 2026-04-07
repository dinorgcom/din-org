import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise — din.org",
  description:
    "Enterprise dispute resolution solutions. Resolve disputes in days, not years, while saving 90% on costs.",
};

export default function EnterprisePage() {
  const stats = [
    { k: "10–30 Days", v: "vs. 2–5 years in traditional courts" },
    { k: "99% Savings", v: "Compared to traditional litigation costs" },
    { k: "Smart & Fair", v: "AI-driven fairness with human oversight" },
  ];

  const industries = [
    {
      title: "E-Commerce & Marketplaces",
      body: "Resolve seller-buyer disputes, payment conflicts, and return issues in days instead of months.",
      stat: "Up to 90% cost reduction vs. traditional litigation",
    },
    {
      title: "Insurance Companies",
      body: "Accelerate claims disputes and subrogation cases. Reduce administrative overhead and settle disputes efficiently.",
      stat: "Process 100x more disputes with same resources",
    },
    {
      title: "SaaS & Tech Companies",
      body: "Handle service disputes, licensing conflicts, and contract disagreements rapidly. Keep your focus on building product.",
      stat: "Avoid years of litigation, resolve in weeks",
    },
    {
      title: "Legal Service Providers",
      body: "Offer your clients a faster, more cost-effective alternative to traditional arbitration and court proceedings.",
      stat: "Pass on 60–80% savings to your clients",
    },
    {
      title: "Financial Services",
      body: "Resolve commercial disputes, payment conflicts, and contract disagreements transparently. Maintain compliance.",
      stat: "Eliminate expensive litigation budgets",
    },
    {
      title: "Real Estate & Construction",
      body: "Settle property disputes, contract breaches, and payment issues without lengthy court proceedings.",
      stat: "Projects complete instead of stuck in litigation",
    },
  ];

  const benefits: { title: string; items: string[] }[] = [
    {
      title: "Massive Cost Savings",
      items: [
        "Eliminate expensive lawyer fees",
        "No lengthy court proceedings",
        "Avoid lengthy discovery processes",
        "Reduce total cost of ownership by 90%+",
      ],
    },
    {
      title: "Lightning-Fast Resolution",
      items: [
        "Resolve disputes in days, not years",
        "Reduce capital tied up in disputes",
        "Free your team from litigation stress",
        "Get back to business faster",
      ],
    },
  ];

  const features: { title: string; body: string; detail: string }[] = [
    { title: "Fast Resolution", body: "AI-powered analysis speeds up the arbitration process", detail: "Enterprise cases reach a fully reasoned ruling within 24 hours of evidence submission." },
    { title: "Secure & Confidential", body: "Bank-level encryption protects your sensitive information", detail: "AES-256 at rest, TLS 1.3 in transit — your enterprise data stays in SOC 2 compliant infrastructure." },
    { title: "International Reach", body: "Resolve cross-border disputes with ease", detail: "No geographic barriers — teams in any country can participate without jurisdictional delays." },
    { title: "Save up to 99% of Cost", body: "Dramatically reduce arbitration costs with AI efficiency", detail: "A full enterprise case from $15, compared to $91,000+ median for traditional commercial litigation." },
    { title: "Video Hearing of Witnesses", body: "Conduct witness hearings remotely via video conferencing", detail: "Simultaneous cross-examination of all parties — no travel, no scheduling conflicts." },
    { title: "Multiple AI Expertises", body: "Get expertises from various AIs of your choice", detail: "Legal, financial, technical, or industry-specific AI analysis tailored to your enterprise needs." },
    { title: "Human Oversight", body: "Human oversight ensures validity in national courts", detail: "Appeal any ruling by adding up to 7 human arbiters for a binding second opinion." },
    { title: "ID Check of All Participants", body: "Verify identity of all parties for enhanced security", detail: "Government-issued ID verification prevents fraud and ensures corporate accountability." },
    { title: "Avoid Personal Bias", body: "AI-driven decisions reduce subjective judgment", detail: "No fatigue, no prejudice, no politics — every decision is evidence-based and fully cited." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Enterprise
          </p>
          <h1 className="display text-5xl md:text-7xl font-semibold max-w-5xl">
            Enterprise Solutions for Modern Dispute Resolution
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            Stop wasting millions on traditional litigation. Resolve disputes in
            days, not years, while saving 90% on costs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/file-a-case"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Start Enterprise Case
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="mailto:enterprise@din.org"
              className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-base font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((s) => (
            <div key={s.k}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">
                {s.k}
              </p>
              <p className="mt-3 text-sm md:text-base text-bone/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Industries we serve
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Built for every sector.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((ind) => (
            <article
              key={ind.title}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <h3 className="display text-2xl md:text-3xl font-semibold mb-4">
                {ind.title}
              </h3>
              <p className="text-bone/70 text-base md:text-lg mb-6">
                {ind.body}
              </p>
              <p className="text-accent text-sm font-medium">{ind.stat}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            Enterprise benefits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {benefits.map((b) => (
              <div key={b.title}>
                <h3 className="display text-3xl md:text-5xl font-semibold mb-6">
                  {b.title}
                </h3>
                <ul className="space-y-3 text-base md:text-lg opacity-80">
                  {b.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DIN.ORG Leads — feature grid */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Why din.org leads
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Enterprise-grade features at scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl bg-ink-card p-8 md:p-10 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-ink transition-colors duration-200">
                {f.title}
              </h3>
              <p className="text-bone/70 text-base group-hover:text-ink/70 transition-colors duration-200">
                {f.body}
              </p>
              <p className="mt-3 text-sm text-ink font-medium invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {f.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-ink-card border border-bone/15 p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Ready to transform your dispute resolution?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-2xl mx-auto">
            Join enterprises globally saving millions while achieving fair
            outcomes faster.
          </p>
          <Link
            href="/file-a-case"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
          >
            Start Your Enterprise Case Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
