import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "File a Case — din.org",
  description:
    "File your dispute on din.org for free. Describe what happened, notify the other party, and receive a reasoned AI ruling.",
};

export default function FileACasePage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          File a case
        </p>
        <h1 className="display text-5xl md:text-8xl font-semibold">
          Tell the court what happened.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-bone/80 max-w-2xl">
          Start your case below. You can add evidence, invite the other party,
          and track the hearing from your private case workspace.
        </p>

        <form className="mt-16 space-y-8">
          <Field label="Your full name" name="name" placeholder="Jane Doe" />
          <Field
            label="Your email"
            name="email"
            type="email"
            placeholder="jane@example.com"
          />
          <Field
            label="Other party (name or email)"
            name="other"
            placeholder="Acme LLC — legal@acme.com"
          />
          <div>
            <label className="block text-sm uppercase tracking-widest text-bone/60 mb-3">
              What happened?
            </label>
            <textarea
              name="summary"
              rows={8}
              placeholder="Describe the dispute in your own words. Dates, amounts, and context help."
              className="w-full rounded-2xl bg-ink-card border border-bone/10 px-5 py-4 text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-bone/60 mb-3">
              Remedy you are seeking
            </label>
            <input
              name="remedy"
              placeholder="Refund, apology, contract enforcement, damages…"
              className="w-full rounded-full bg-ink-card border border-bone/10 px-5 py-4 text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Open case file
              <span aria-hidden>→</span>
            </button>
            <p className="mt-4 text-sm text-bone/50">
              By filing, you agree to din.org&apos;s terms and confirm the
              information above is truthful to the best of your knowledge.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-widest text-bone/60 mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full bg-ink-card border border-bone/10 px-5 py-4 text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
