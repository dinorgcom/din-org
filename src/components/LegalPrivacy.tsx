import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { HarveyNav } from "@/components/HarveyNav";

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

const mono = JetBrains_Mono({
  variable: "--font-d-mono",
  subsets: ["latin"],
  display: "swap",
});

const LOGIN_URL = "https://app.din.org/sign-in";
const CASE_EMAIL = "case@din.org";

type PrivacyLocale = "en" | "de";

type PrivacySection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type PrivacyCopy = {
  lang: PrivacyLocale;
  eyebrow: string;
  title: string;
  updated: string;
  version: string;
  introduction: string;
  summaryLabel: string;
  summary: string;
  contentsLabel: string;
  nav: {
    home: string;
    journal: string;
    agents: string;
    language: string;
    login: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    about: string;
    explore: string;
    legal: string;
    privacy: string;
    terms: string;
    home: string;
    journal: string;
    agents: string;
    email: string;
    rights: string;
  };
  sections: readonly PrivacySection[];
};

const privacy: Record<PrivacyLocale, PrivacyCopy> = {
  en: {
    lang: "en",
    eyebrow: "Privacy",
    title: "Privacy Policy",
    updated: "Last updated: 14 July 2026",
    version: "Version 2.1",
    introduction:
      "This Policy explains how DIN.ORG handles personal data when people use the website, email, the web application, an API, or an authorised AI agent.",
    summaryLabel: "In plain terms",
    summary:
      "Private intake is separated from the shared case record. Material submitted as evidence, files, and a named witness's submitted contact details may be visible to both parties, so users should provide only what the case reasonably requires.",
    contentsLabel: "Contents",
    nav: {
      home: "Home",
      journal: "Journal",
      agents: "For agents",
      language: "Deutsch",
      login: "Log in",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    footer: {
      about:
        "Neutral, AI-assisted dispute resolution between two parties, with human control and review built in.",
      explore: "Explore",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      home: "Home",
      journal: "Journal",
      agents: "For agents",
      email: "Start by email",
      rights: "© 2026 Din.org LLC",
    },
    sections: [
      {
        title: "1. Controller and contact",
        paragraphs: [
          "Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA, is responsible for the personal data described in this Policy where it determines the purposes and means of processing.",
          "Privacy questions and requests may be sent to privacy@din.org. Case submissions should be sent to case@din.org.",
        ],
      },
      {
        title: "2. Where this Policy applies",
        paragraphs: [
          "This Policy covers DIN.ORG's public website and its dispute-resolution service through email, the web application, APIs, and authorised AI agents. A separate notice may apply to a specific paid feature, jurisdiction, or integration and will supplement this Policy.",
          "Third-party websites and services have their own privacy practices. DIN.ORG is not responsible for a third party merely because the Platform links to it.",
        ],
      },
      {
        title: "3. Data we may collect",
        paragraphs: [
          "The data depends on how a person uses DIN.ORG and what they choose to submit. It may include:",
        ],
        bullets: [
          "Identity and contact data, such as a name, email address, organisation, and account details",
          "Private intake messages, instructions, desired outcomes, and communications with DIN.ORG",
          "Shared case material, including allegations, responses, evidence, documents, PDFs, office files, images, audio, video, archives, and extracted archive contents",
          "Third-party data reasonably submitted for a case, including a named witness's name and email address",
          "Authentication, access, security, device, network, usage, and diagnostic data",
          "Transaction and billing records for a paid service; payment-card details may be handled directly by the relevant payment provider",
        ],
      },
      {
        title: "4. Why we process data",
        paragraphs: [
          "DIN.ORG processes personal data to receive and administer cases, authenticate participants, communicate with the parties, organise the record, provide settlement and assessment functions, support human review where offered, operate and secure the service, prevent abuse, resolve technical problems, meet legal obligations, and establish or defend legal claims.",
          "The legal basis depends on the person, feature, and jurisdiction. It may include performing a contract or taking requested pre-contract steps, legitimate interests in operating and protecting the service, compliance with law, and consent where consent is required. A person may withdraw consent for future processing where consent is the basis, without affecting earlier lawful processing.",
        ],
      },
      {
        title: "5. Private intake and the shared case record",
        paragraphs: [
          "Each party's intake conversation is kept private from the other party unless the sender chooses to share it or disclosure is required for a fair, lawful, or safe process. DIN.ORG may use information from both private channels to identify issues and prepare neutral questions without automatically exposing either conversation.",
          "Evidence, files, and attachments submitted for consideration form part of the shared case record and are generally accessible to both parties. A witness identified by a party, including the witness's submitted name and email address, is visible to both parties. DIN.ORG may restrict or remove material for legal, privacy, fairness, or safety reasons.",
          "Users must not submit passwords, unnecessary identifiers, unrelated medical or financial records, or third-party data that is not reasonably required for the case.",
        ],
      },
      {
        title: "6. AI-assisted processing",
        paragraphs: [
          "DIN.ORG uses AI-assisted systems to process submissions, extract and organise information, ask questions, identify inconsistencies, support safety checks, and prepare settlement proposals or private assessments. Authorised agents may also interact with the service within the permissions available to their principal.",
          "Case content is treated as untrusted material, not as an instruction that may change system rules or permissions. AI output may be incomplete or wrong and is subject to the process, party responses, and human review where offered. DIN.ORG does not exercise governmental powers or determine criminal guilt.",
        ],
      },
      {
        title: "7. When data may be disclosed",
        paragraphs: [
          "DIN.ORG does not sell personal data. It may disclose data only as reasonably necessary for the service or as permitted by law, including:",
        ],
        bullets: [
          "To the other party through the shared case record, as described above",
          "To hosting, storage, email, security, AI, communications, payment, and professional-service providers acting under appropriate obligations",
          "To a human reviewer or adviser involved in a service requested for the case",
          "To authorities or other recipients where reasonably required by law, valid legal process, safety, or the protection of rights",
          "In connection with a corporate transaction, subject to appropriate confidentiality and legal safeguards",
        ],
      },
      {
        title: "8. International processing",
        paragraphs: [
          "Din.org LLC is based in the United States and may use providers or personnel in more than one country. Personal data may therefore be processed outside the country where it was collected.",
          "Where applicable law requires a transfer mechanism or additional safeguard, DIN.ORG will use an appropriate lawful mechanism for the relevant transfer. Local data-protection rights may continue to apply.",
        ],
      },
      {
        title: "9. Retention",
        paragraphs: [
          "DIN.ORG retains personal data only for as long as reasonably necessary for the purposes described here, including administering a case, maintaining an auditable record, resolving disputes, protecting the service, and meeting legal, tax, accounting, or compliance obligations.",
          "Retention periods vary with the data, case status, contractual commitments, legal requirements, and whether a record is needed to establish or defend a claim. Data may be deleted, anonymised, or retained in a restricted form when it is no longer needed for active use.",
        ],
      },
      {
        title: "10. Security and files",
        paragraphs: [
          "DIN.ORG uses technical and organisational measures intended to protect data against unauthorised access, alteration, loss, and misuse. No email, archive, storage system, or internet transmission can be guaranteed to be completely secure.",
          "Files may be scanned, extracted, converted, quarantined, or rejected for security and usability checks. If a submitted file cannot be opened, viewed, or reasonably verified, DIN.ORG may exclude it from the record and inform the sender.",
        ],
      },
      {
        title: "11. Individual rights",
        paragraphs: [
          "Depending on applicable law, a person may have rights to access, correct, delete, restrict, or object to processing; receive portable data; withdraw consent; or complain to a competent supervisory authority. These rights may be limited by the rights of others, legal obligations, evidentiary needs, or another lawful exception.",
          "Requests may be sent to privacy@din.org. DIN.ORG may need to verify the requester's identity and authority before acting. A request concerning shared case material may affect the fairness or integrity of an active case and will be assessed accordingly.",
        ],
      },
      {
        title: "12. Cookies and service logs",
        paragraphs: [
          "DIN.ORG may use cookies or similar storage needed for authentication, security, preferences, and core functionality. Optional analytics or comparable technologies should be used only with the notice or choice required by applicable law.",
          "Browser controls may block some storage, but doing so can prevent account, security, or application features from working correctly.",
        ],
      },
      {
        title: "13. Children, changes, and contact",
        paragraphs: [
          "DIN.ORG is not intended for people under 18. A party should not submit a child's personal data unless it is lawfully necessary for the dispute and appropriate safeguards are in place.",
          "DIN.ORG may update this Policy as the service, law, or processing changes. The current version and update date will be published here, and material changes may also be communicated through the service where appropriate.",
          "Contact: Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA; privacy@din.org.",
        ],
      },
    ],
  },
  de: {
    lang: "de",
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: 14. Juli 2026",
    version: "Version 2.1",
    introduction:
      "Diese Erklärung beschreibt, wie DIN.ORG personenbezogene Daten verarbeitet, wenn Menschen die Website, E-Mail, die Web-App, eine API oder einen autorisierten KI-Agenten nutzen.",
    summaryLabel: "Kurz gesagt",
    summary:
      "Die private Aufnahme wird von der gemeinsamen Fallakte getrennt. Als Beweismittel eingereichte Inhalte, Dateien und die übermittelten Kontaktdaten eines benannten Zeugen können für beide Parteien sichtbar sein. Deshalb sollten nur Daten übermittelt werden, die für den Fall vernünftigerweise erforderlich sind.",
    contentsLabel: "Inhalt",
    nav: {
      home: "Startseite",
      journal: "Journal",
      agents: "Für Agenten",
      language: "English",
      login: "Anmelden",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    footer: {
      about:
        "Neutrale, KI-gestützte Streitbeilegung zwischen zwei Parteien, mit menschlicher Kontrolle und Prüfung.",
      explore: "Entdecken",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "AGB",
      home: "Startseite",
      journal: "Journal",
      agents: "Für Agenten",
      email: "Per E-Mail starten",
      rights: "© 2026 Din.org LLC",
    },
    sections: [
      {
        title: "1. Verantwortlicher und Kontakt",
        paragraphs: [
          "Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA, ist für die in dieser Erklärung beschriebenen personenbezogenen Daten verantwortlich, soweit sie Zwecke und Mittel der Verarbeitung bestimmt.",
          "Datenschutzfragen und Anträge können an privacy@din.org gesendet werden. Fälle sollten an case@din.org übermittelt werden.",
        ],
      },
      {
        title: "2. Anwendungsbereich",
        paragraphs: [
          "Diese Erklärung gilt für die öffentliche DIN.ORG-Website und den Streitbeilegungsdienst per E-Mail, Web-App, API und autorisiertem KI-Agenten. Für eine bestimmte kostenpflichtige Funktion, Rechtsordnung oder Integration kann ein ergänzender Hinweis gelten.",
          "Drittanbieter-Websites und -Dienste haben eigene Datenschutzpraktiken. DIN.ORG ist nicht allein deshalb für einen Dritten verantwortlich, weil die Plattform auf ihn verlinkt.",
        ],
      },
      {
        title: "3. Daten, die wir verarbeiten können",
        paragraphs: [
          "Welche Daten verarbeitet werden, hängt von der Nutzung und den eingereichten Inhalten ab. Dazu können gehören:",
        ],
        bullets: [
          "Identitäts- und Kontaktdaten wie Name, E-Mail-Adresse, Organisation und Kontodaten",
          "Private Aufnahme-Nachrichten, Anweisungen, gewünschte Ergebnisse und Kommunikation mit DIN.ORG",
          "Gemeinsames Fallmaterial wie Behauptungen, Antworten, Beweismittel, Dokumente, PDFs, Office-Dateien, Bilder, Audio, Video, Archive und entpackte Archivinhalte",
          "Für den Fall vernünftigerweise eingereichte Daten Dritter, einschließlich Name und E-Mail-Adresse eines benannten Zeugen",
          "Authentifizierungs-, Zugriffs-, Sicherheits-, Geräte-, Netzwerk-, Nutzungs- und Diagnosedaten",
          "Transaktions- und Abrechnungsdaten für kostenpflichtige Leistungen; Kartendaten können direkt vom jeweiligen Zahlungsdienst verarbeitet werden",
        ],
      },
      {
        title: "4. Zwecke und Rechtsgrundlagen",
        paragraphs: [
          "DIN.ORG verarbeitet Daten, um Fälle aufzunehmen und zu verwalten, Teilnehmer zu authentifizieren, mit den Parteien zu kommunizieren, die Akte zu strukturieren, Vergleichs- und Bewertungsfunktionen sowie eine angebotene menschliche Prüfung bereitzustellen, den Dienst zu betreiben und zu schützen, Missbrauch und technische Probleme zu behandeln, rechtliche Pflichten zu erfüllen und Rechtsansprüche zu begründen oder zu verteidigen.",
          "Die Rechtsgrundlage hängt von Person, Funktion und anwendbarem Recht ab. In Betracht kommen insbesondere Vertragserfüllung oder vorvertragliche Maßnahmen, berechtigte Interessen am Betrieb und Schutz des Dienstes, rechtliche Pflichten und eine Einwilligung, soweit sie erforderlich ist. Eine Einwilligung kann für die Zukunft widerrufen werden, ohne die zuvor rechtmäßige Verarbeitung zu berühren.",
        ],
      },
      {
        title: "5. Private Aufnahme und gemeinsame Fallakte",
        paragraphs: [
          "Das Aufnahmegespräch jeder Partei bleibt gegenüber der anderen Partei privat, sofern der Absender es nicht freigibt oder eine Offenlegung für ein faires, rechtmäßiges oder sicheres Verfahren erforderlich ist. DIN.ORG kann Informationen aus beiden privaten Kanälen nutzen, um Streitpunkte zu erkennen und neutrale Fragen vorzubereiten, ohne die Gespräche automatisch offenzulegen.",
          "Zur Prüfung eingereichte Beweismittel, Dateien und Anlagen werden grundsätzlich Teil der gemeinsamen, für beide Parteien zugänglichen Fallakte. Ein benannter Zeuge ist einschließlich des eingereichten Namens und der E-Mail-Adresse für beide Parteien sichtbar. DIN.ORG kann Inhalte aus rechtlichen, datenschutzbezogenen, fairen oder sicherheitsbezogenen Gründen beschränken oder entfernen.",
          "Nutzer dürfen keine Passwörter, unnötigen Identifikatoren, sachfremden Gesundheits- oder Finanzunterlagen oder für den Fall nicht erforderlichen Daten Dritter einreichen.",
        ],
      },
      {
        title: "6. KI-gestützte Verarbeitung",
        paragraphs: [
          "DIN.ORG verwendet KI-gestützte Systeme, um Eingaben zu verarbeiten, Informationen zu extrahieren und zu ordnen, Fragen zu stellen, Widersprüche zu erkennen, Sicherheitsprüfungen zu unterstützen und Vergleichsvorschläge oder private Bewertungen vorzubereiten. Autorisierte Agenten können innerhalb der verfügbaren Vollmachten ihres Auftraggebers mit dem Dienst interagieren.",
          "Fallinhalte werden als nicht vertrauenswürdiges Material und nicht als Anweisung zur Änderung von Systemregeln oder Berechtigungen behandelt. KI-Ausgaben können unvollständig oder falsch sein und unterliegen dem Verfahren, den Antworten der Parteien und einer angebotenen menschlichen Prüfung. DIN.ORG übt keine hoheitlichen Befugnisse aus und entscheidet nicht über strafrechtliche Schuld.",
        ],
      },
      {
        title: "7. Offenlegung von Daten",
        paragraphs: [
          "DIN.ORG verkauft keine personenbezogenen Daten. Eine Offenlegung erfolgt nur, soweit sie für den Dienst vernünftigerweise erforderlich oder gesetzlich zulässig ist, insbesondere:",
        ],
        bullets: [
          "An die andere Partei über die gemeinsame Fallakte wie oben beschrieben",
          "An Anbieter für Hosting, Speicher, E-Mail, Sicherheit, KI, Kommunikation, Zahlung und professionelle Leistungen unter angemessenen Verpflichtungen",
          "An einen menschlichen Prüfer oder Berater, der an einer für den Fall beauftragten Leistung beteiligt ist",
          "An Behörden oder andere Empfänger, soweit dies aufgrund von Recht, wirksamem Verfahren, Sicherheit oder zum Schutz von Rechten vernünftigerweise erforderlich ist",
          "Im Zusammenhang mit einer Unternehmenstransaktion unter angemessener Vertraulichkeit und rechtlichen Schutzmaßnahmen",
        ],
      },
      {
        title: "8. Internationale Verarbeitung",
        paragraphs: [
          "Din.org LLC hat seinen Sitz in den USA und kann Anbieter oder Personal in mehreren Ländern einsetzen. Daten können daher außerhalb des Landes verarbeitet werden, in dem sie erhoben wurden.",
          "Soweit anwendbares Recht einen Übermittlungsmechanismus oder zusätzliche Garantien verlangt, verwendet DIN.ORG einen für die jeweilige Übermittlung geeigneten rechtmäßigen Mechanismus. Lokale Datenschutzrechte können fortgelten.",
        ],
      },
      {
        title: "9. Speicherdauer",
        paragraphs: [
          "DIN.ORG speichert personenbezogene Daten nur so lange, wie dies für die hier beschriebenen Zwecke vernünftigerweise erforderlich ist. Dazu gehören Fallverwaltung, eine nachvollziehbare Akte, Streitklärung, Schutz des Dienstes und rechtliche, steuerliche, buchhalterische oder Compliance-Pflichten.",
          "Die Dauer hängt von Datenart, Fallstatus, vertraglichen Zusagen, gesetzlichen Anforderungen und der Notwendigkeit zur Begründung oder Verteidigung von Ansprüchen ab. Nicht mehr aktiv benötigte Daten können gelöscht, anonymisiert oder nur noch eingeschränkt gespeichert werden.",
        ],
      },
      {
        title: "10. Sicherheit und Dateien",
        paragraphs: [
          "DIN.ORG setzt technische und organisatorische Maßnahmen ein, die Daten vor unbefugtem Zugriff, Veränderung, Verlust und Missbrauch schützen sollen. Für E-Mail, Archive, Speichersysteme oder Internetübertragungen kann keine vollständige Sicherheit garantiert werden.",
          "Dateien können für Sicherheits- und Nutzbarkeitsprüfungen gescannt, entpackt, konvertiert, isoliert oder abgelehnt werden. Kann eine Datei nicht geöffnet, angesehen oder vernünftig überprüft werden, kann DIN.ORG sie aus der Akte ausschließen und den Absender informieren.",
        ],
      },
      {
        title: "11. Rechte betroffener Personen",
        paragraphs: [
          "Je nach anwendbarem Recht können Betroffene Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit, Widerruf einer Einwilligung oder eine Beschwerde bei der zuständigen Aufsichtsbehörde verlangen. Rechte können durch Rechte anderer, gesetzliche Pflichten, Beweiserfordernisse oder eine andere gesetzliche Ausnahme begrenzt sein.",
          "Anträge können an privacy@din.org gesendet werden. DIN.ORG kann Identität und Berechtigung des Antragstellers prüfen. Ein Antrag zu gemeinsamem Fallmaterial kann Fairness oder Integrität eines laufenden Falls berühren und wird entsprechend bewertet.",
        ],
      },
      {
        title: "12. Cookies und Dienstprotokolle",
        paragraphs: [
          "DIN.ORG kann Cookies oder vergleichbare Speichertechniken einsetzen, die für Authentifizierung, Sicherheit, Einstellungen und Kernfunktionen erforderlich sind. Optionale Analyse- oder vergleichbare Technologien sollen nur mit dem nach anwendbarem Recht erforderlichen Hinweis oder der erforderlichen Wahlmöglichkeit verwendet werden.",
          "Browser können bestimmte Speicherungen blockieren. Dadurch können Konto-, Sicherheits- oder Anwendungsfunktionen jedoch beeinträchtigt werden.",
        ],
      },
      {
        title: "13. Minderjährige, Änderungen und Kontakt",
        paragraphs: [
          "DIN.ORG richtet sich nicht an Personen unter 18 Jahren. Daten eines Kindes dürfen nur eingereicht werden, wenn dies für den Streit rechtmäßig erforderlich ist und angemessene Schutzmaßnahmen bestehen.",
          "DIN.ORG kann diese Erklärung an Änderungen des Dienstes, der Rechtslage oder der Verarbeitung anpassen. Die aktuelle Fassung und das Aktualisierungsdatum werden hier veröffentlicht; wesentliche Änderungen können zusätzlich über den Dienst mitgeteilt werden.",
          "Kontakt: Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA; privacy@din.org.",
        ],
      },
    ],
  },
};

export function LegalPrivacy({ locale }: { locale: PrivacyLocale }) {
  const copy = privacy[locale];
  const isGerman = locale === "de";
  const homeHref = isGerman ? "/de" : "/";
  const journalHref = isGerman ? "/de/news" : "/news";
  const agentsHref = isGerman ? "/de/agenten" : "/agents";
  const languageHref = isGerman ? "/privacy" : "/de/datenschutz";
  const privacyHref = isGerman ? "/de/datenschutz" : "/privacy";
  const termsHref = isGerman ? "/de/agb" : "/terms";

  return (
    <div
      lang={copy.lang}
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
      style={
        {
          "--d-red": "#9f302b",
          "--d-red-soft": "#efe1dc",
          "--d-red-light": "#e68379",
        } as CSSProperties
      }
    >
      <HarveyNav
        homeHref={homeHref}
        menuLabels={{ open: copy.nav.openMenu, close: copy.nav.closeMenu }}
        links={[
          { href: homeHref, label: copy.nav.home },
          { href: journalHref, label: copy.nav.journal },
          { href: agentsHref, label: copy.nav.agents },
          { href: languageHref, label: copy.nav.language },
        ]}
        cta={{ href: LOGIN_URL, label: copy.nav.login }}
      />

      <section className="relative min-h-[72svh] flex items-end overflow-hidden">
        <Image
          aria-hidden="true"
          alt=""
          src="/videos/frau-dunkler-raum.jpg"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,19,15,0.96) 0%, rgba(20,19,15,0.84) 48%, rgba(20,19,15,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.3) 0%, rgba(20,19,15,0.2) 45%, rgba(20,19,15,0.88) 100%)",
          }}
        />
        <div className="d-grain" />
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 md:pb-24 pt-40">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "rgba(245,241,234,0.72)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "var(--d-red-light)" }}
              />
              DIN.ORG / {copy.eyebrow}
            </p>
            <h1
              className="d-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.94] max-w-[13ch]"
              style={{ color: "var(--d-bone)" }}
            >
              {copy.title}
            </h1>
            <p
              className="mt-10 max-w-3xl text-lg md:text-2xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              {copy.introduction}
            </p>
            <p
              className="d-mono mt-10 text-[11px] uppercase tracking-[0.16em]"
              style={{ color: "rgba(245,241,234,0.6)" }}
            >
              {copy.updated} <span aria-hidden>·</span> {copy.version}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="d-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--d-red)" }}>
              {copy.summaryLabel}
            </p>
          </div>
          <p className="lg:col-span-8 d-display text-3xl md:text-5xl leading-tight" style={{ color: "var(--d-ink)" }}>
            {copy.summary}
          </p>
        </div>
      </section>

      <section className="d-rule-top px-6 md:px-10 py-16" style={{ background: "var(--d-bone-soft)" }}>
        <div className="mx-auto max-w-[1400px]">
          <p className="d-mono text-[10px] uppercase tracking-[0.22em] mb-8" style={{ color: "var(--d-red)" }}>
            {copy.contentsLabel}
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-4">
            {copy.sections.map((section, index) => (
              <li key={section.title}>
                <a
                  href={`#privacy-${index + 1}`}
                  className="group flex gap-3 text-sm leading-relaxed hover:opacity-65 transition-opacity"
                  style={{ color: "var(--d-ink)" }}
                >
                  <span className="d-mono text-[10px] pt-1" style={{ color: "var(--d-red)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1100px]">
          {copy.sections.map((section, index) => (
            <article
              id={`privacy-${index + 1}`}
              key={section.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 first:pt-0 d-rule-bottom scroll-mt-24"
            >
              <div className="md:col-span-1 d-mono text-[10px] pt-2" style={{ color: "var(--d-red)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-11">
                <h2 className="d-display text-3xl md:text-4xl leading-tight" style={{ color: "var(--d-ink)" }}>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h2>
                <div className="mt-7 space-y-5 text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3 pl-5 list-disc marker:text-[var(--d-red)]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="pl-2">{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="d-rule-top px-6 md:px-10 py-14" style={{ background: "var(--d-bone-soft)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="d-display text-2xl mb-3" style={{ color: "var(--d-ink)" }}>din.org</p>
            <p className="text-sm leading-relaxed font-light max-w-md" style={{ color: "var(--d-ink-muted)" }}>
              {copy.footer.about}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "var(--d-red)" }}>
              {copy.footer.explore}
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={homeHref} className="hover:opacity-70">{copy.footer.home}</Link></li>
              <li><Link href={journalHref} className="hover:opacity-70">{copy.footer.journal}</Link></li>
              <li><Link href={agentsHref} className="hover:opacity-70">{copy.footer.agents}</Link></li>
              <li><a href={`mailto:${CASE_EMAIL}`} className="hover:opacity-70">{copy.footer.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "var(--d-red)" }}>
              {copy.footer.legal}
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={privacyHref} className="hover:opacity-70">{copy.footer.privacy}</Link></li>
              <li><Link href={termsHref} className="hover:opacity-70">{copy.footer.terms}</Link></li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>
              Din.org LLC · 8 The Green, Suite B<br />Dover, DE 19901 · USA<br />{copy.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
