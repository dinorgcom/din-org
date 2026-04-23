import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — din.org",
  description:
    "Datenschutzerklärung von din.org. Die englische Originalfassung ist die rechtsverbindliche Version.",
  alternates: {
    canonical: "https://din.org/privacy",
    languages: {
      en: "https://din.org/privacy",
      de: "https://din.org/de/datenschutz",
      "x-default": "https://din.org/privacy",
    },
  },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          Datenschutz
        </p>
        <h1 className="display text-5xl md:text-7xl font-semibold mb-10">
          Datenschutzerklärung
        </h1>

        <div className="rounded-3xl bg-amber-500/10 border border-amber-500/30 p-6 md:p-8 mb-12">
          <p className="text-sm md:text-base text-amber-100 leading-relaxed">
            <strong className="text-amber-50">Wichtiger Hinweis:</strong> Eine
            verbindliche deutsche Datenschutzerklärung wird derzeit von einer
            spezialisierten Kanzlei vorbereitet. Bis dahin gilt ausschließlich
            die englische Originalfassung als rechtsverbindlich. Bitte
            konsultieren Sie diese für alle rechtlichen Auslegungsfragen.
          </p>
        </div>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-6">
          din.org verarbeitet personenbezogene Daten nach den Grundsätzen der
          Datenschutz-Grundverordnung (DSGVO) und im Einklang mit den lokalen
          Datenschutzgesetzen Österreichs, Deutschlands und der Schweiz.
        </p>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-6">
          Wir erheben nur die Daten, die zur Bereitstellung des Dienstes
          erforderlich sind, schützen sie mit Verschlüsselung auf Bankniveau
          (AES-256 im Ruhezustand, TLS 1.3 bei der Übertragung) und speichern
          sie in SOC-2-konformen Rechenzentren. Wir verkaufen Ihre Daten
          niemals und teilen sie nur, wenn Sie dem ausdrücklich zustimmen oder
          gesetzlich dazu verpflichtet sind.
        </p>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-12">
          Für die vollständige, derzeit verbindliche Datenschutzerklärung
          inklusive aller Details zu Ihren Rechten als betroffene Person
          (Art. 15–22 DSGVO), zur Datenaufbewahrung, zu internationalen
          Datentransfers, zur AI-Verarbeitung gemäß Art. 22 DSGVO und zu
          Datenpannen-Benachrichtigungen lesen Sie bitte die englische
          Originalfassung.
        </p>

        <Link
          href="/privacy"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
        >
          Englische Datenschutzerklärung lesen
          <span aria-hidden>→</span>
        </Link>

        <div className="mt-16 pt-8 border-t border-bone/10">
          <p className="text-sm text-bone/55">
            Fragen zum Datenschutz? Schreiben Sie an{" "}
            <a href="mailto:privacy@din.org" className="text-accent hover:underline">
              privacy@din.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
