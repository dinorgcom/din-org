import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access — din.org",
  description:
    "Request early access to din.org — the world's first AI-powered court. Be among the first to resolve disputes with AI.",
};

export default function EarlyAccessPage() {
  return (
    <>
      {/* Hero */}
      <section className="reveal px-6 md:px-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Early Access
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Be among the first to use the AI court.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            din.org is launching soon. Request early access and be the first to
            file a case, present evidence, and receive a reasoned AI ruling —
            before anyone else.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "Free", v: "Early access is free" },
            { k: "First", v: "Priority onboarding" },
            { k: "Direct", v: "Founder access & feedback" },
            { k: "Shape", v: "Influence the product" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">
                {s.k}
              </p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-2xl mx-auto">
          <h2 className="display text-3xl md:text-5xl font-semibold mb-4 text-center">
            Request your spot.
          </h2>
          <p className="text-bone/70 text-base md:text-lg text-center mb-12">
            Leave your details and we&rsquo;ll notify you as soon as
            din.org opens for early users.
          </p>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-bone/70 mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-bone/70 mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-bone/70 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-bone/70 mb-2"
              >
                I am a...
              </label>
              <select
                id="role"
                name="role"
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone focus:outline-none focus:border-accent transition-colors"
              >
                <option value="individual">Individual with a dispute</option>
                <option value="business">Business / Company</option>
                <option value="lawyer">Lawyer / Legal Professional</option>
                <option value="marketplace">Marketplace / Platform</option>
                <option value="investor">Investor</option>
                <option value="journalist">Journalist / Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-bone/70 mb-2"
              >
                Tell us about your interest{" "}
                <span className="text-bone/55">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-bone/15 bg-ink-card px-4 py-3 text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="I have a contract dispute with... / I run a marketplace and... / I'm interested in..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Request Early Access
            </button>

            <p className="text-xs text-bone/55 text-center">
              We&rsquo;ll never share your information. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* What you get */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36 border-t border-bone/10">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            What early access includes
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Everything. Before everyone else.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Full platform access",
              body: "File real cases, submit evidence, and receive AI rulings. Not a demo — the real system.",
            },
            {
              title: "AI lawyer & AI judge",
              body: "Your AI lawyer guides you through every step. The AI judge cross-examines all parties and delivers a cited ruling.",
            },
            {
              title: "Free token package",
              body: "Early access users receive a complimentary token package to test the full case process at no cost.",
            },
            {
              title: "Priority support",
              body: "Direct access to the founding team. Your feedback shapes the product before public launch.",
            },
            {
              title: "Founder community",
              body: "Join a private group of early users — legal professionals, businesses, and innovators shaping the future of justice.",
            },
            {
              title: "Lifetime benefits",
              body: "Early access users receive permanent discounts on token packages and priority access to new features.",
            },
          ].map((f) => (
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
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal px-6 md:px-10 pb-24 md:pb-36">
        <div className="rounded-3xl bg-accent text-ink p-10 md:p-16 text-center">
          <h2 className="display text-3xl md:text-6xl font-semibold mb-6">
            Justice shouldn&rsquo;t wait. Neither should you.
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
            We&rsquo;re opening access to a small group of early users.
            Spots are limited.
          </p>
          <a
            href="#first-name"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-accent px-8 py-4 text-base font-medium hover:bg-ink-soft transition-colors"
          >
            Scroll up to apply
            <span aria-hidden>&uarr;</span>
          </a>
        </div>
      </section>
    </>
  );
}
