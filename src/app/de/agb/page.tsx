import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AGB — din.org",
  description:
    "Allgemeine Geschäftsbedingungen von din.org. Die englische Originalfassung ist die rechtsverbindliche Version.",
  alternates: {
    canonical: "https://din.org/terms",
    languages: {
      en: "https://din.org/terms",
      de: "https://din.org/de/agb",
      "x-default": "https://din.org/terms",
    },
  },
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          AGB
        </p>
        <h1 className="display text-5xl md:text-7xl font-semibold mb-10">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="rounded-3xl bg-amber-500/10 border border-amber-500/30 p-6 md:p-8 mb-12">
          <p className="text-sm md:text-base text-amber-100 leading-relaxed">
            <strong className="text-amber-50">Wichtiger Hinweis:</strong>{" "}
            Verbindliche deutsche AGB werden derzeit von einer spezialisierten
            Kanzlei vorbereitet. Bis dahin gilt ausschließlich die englische
            Originalfassung als rechtsverbindlich. Bitte konsultieren Sie diese
            für alle rechtlichen Auslegungsfragen, insbesondere für
            Schiedsvereinbarungen, Vollstreckung und Haftungsausschlüsse.
          </p>
        </div>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-6">
          Die Nutzung von din.org unterliegt den Allgemeinen Geschäftsbedingungen,
          die unter anderem regeln: die freiwillige Teilnahme beider Parteien an
          jedem Schiedsverfahren, die Bindungswirkung der Schiedssprüche nach
          dem New Yorker Übereinkommen von 1958, die Berufungsmechanik mit
          menschlichen Schiedsrichtern, die Token-basierten Gebühren, die
          Identitätsverifikation aller Beteiligten sowie die Haftungsbegrenzung.
        </p>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-6">
          din.org bietet keine Rechtsberatung. Es entsteht kein Mandatsverhältnis
          mit din.org oder den im Verfahren eingesetzten KI-Werkzeugen. Sprüche
          sind, vorbehaltlich der vereinbarten Berufungsmechanik, bindend.
        </p>

        <p className="text-base md:text-lg text-bone/80 leading-relaxed mb-12">
          Für die vollständigen, derzeit verbindlichen AGB einschließlich aller
          Details zur Schiedsvereinbarung, zur Klagewaiver, zu höherer Gewalt
          und zu Salvatorischer Klausel lesen Sie bitte die englische
          Originalfassung.
        </p>

        <Link
          href="/terms"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors"
        >
          Englische AGB lesen
          <span aria-hidden>→</span>
        </Link>

        <div className="mt-16 pt-8 border-t border-bone/10">
          <p className="text-sm text-bone/55">
            Fragen zu den AGB? Schreiben Sie an{" "}
            <a href="mailto:legal@din.org" className="text-accent hover:underline">
              legal@din.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
