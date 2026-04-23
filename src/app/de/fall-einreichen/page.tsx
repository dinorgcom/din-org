import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fall einreichen — din.org",
  description:
    "Reichen Sie Ihren Streitfall kostenlos auf din.org ein. Beschreiben Sie, was passiert ist, benachrichtigen Sie die andere Partei und erhalten Sie ein begründetes KI-Urteil.",
  alternates: {
    canonical: "https://din.org/de/fall-einreichen",
    languages: {
      en: "https://din.org/file-a-case",
      de: "https://din.org/de/fall-einreichen",
      "x-default": "https://din.org/file-a-case",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Fall einreichen — din.org",
    description:
      "Reichen Sie Ihren Streitfall kostenlos auf din.org ein.",
    url: "https://din.org/de/fall-einreichen",
  },
};

export default function FallEinreichenPage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          Fall einreichen
        </p>
        <h1 className="display text-5xl md:text-8xl font-semibold">
          Erzählen Sie dem Gericht, was passiert ist.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-bone/80 max-w-2xl">
          Starten Sie Ihren Fall unten. Sie können Beweise hinzufügen, die andere
          Partei einladen und die Verhandlung in Ihrem privaten Fall-Workspace
          verfolgen.
        </p>

        <form className="mt-16 space-y-8">
          <Field label="Ihr vollständiger Name" name="name" placeholder="Anna Müller" />
          <Field label="Ihre E-Mail" name="email" type="email" placeholder="anna@beispiel.at" />
          <Field
            label="Andere Partei (Name oder E-Mail)"
            name="other"
            placeholder="Acme GmbH — legal@acme.com"
          />
          <div>
            <label className="block text-sm uppercase tracking-widest text-bone/60 mb-3">
              Was ist passiert?
            </label>
            <textarea
              name="summary"
              rows={8}
              placeholder="Beschreiben Sie den Streitfall in eigenen Worten. Daten, Beträge und Kontext helfen."
              className="w-full rounded-2xl bg-ink-card border border-bone/10 px-5 py-4 text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm uppercase tracking-widest text-bone/60 mb-3">
              Welches Ergebnis streben Sie an?
            </label>
            <input
              name="remedy"
              placeholder="Erstattung, Entschuldigung, Vertragserfüllung, Schadenersatz…"
              className="w-full rounded-full bg-ink-card border border-bone/10 px-5 py-4 text-base text-bone placeholder:text-bone/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-8 py-4 text-base font-medium hover:bg-accent-hot transition-colors"
            >
              Akte anlegen
              <span aria-hidden>→</span>
            </button>
            <p className="mt-4 text-sm text-bone/60">
              Mit der Einreichung stimmen Sie den AGB von din.org zu und
              bestätigen, dass die obigen Angaben nach bestem Wissen wahr sind.
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
