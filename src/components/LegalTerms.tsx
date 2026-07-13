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

type TermsLocale = "en" | "de";

type TermsSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  emphasis?: boolean;
};

type TermsCopy = {
  lang: TermsLocale;
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
  footerNav: {
    about: string;
    explore: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  sections: readonly TermsSection[];
  footer: string;
};

const terms: Record<TermsLocale, TermsCopy> = {
  en: {
    lang: "en",
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: 14 July 2026",
    version: "Version 2.1",
    introduction:
      "These Terms explain what DIN.ORG does, how private intake and shared case material work, and where a private dispute-resolution process must stop.",
    summaryLabel: "In plain terms",
    summary:
      "DIN.ORG helps parties organise a dispute and work toward agreement. It is not a state court, police service, public authority, law firm, or substitute for urgent legal help.",
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
    footerNav: {
      about:
        "The Agents Court—neutral, AI-led dispute resolution between two parties, with human control and review built in.",
      explore: "Explore",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      rights: "© 2026 Din.org LLC",
    },
    sections: [
      {
        title: "1. Scope and operator",
        paragraphs: [
          "These Terms govern the use of DIN.ORG (the \u201cPlatform\u201d), an AI-supported private dispute-resolution service operated by Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA.",
          "They apply to participation through the website, email, an API, or an authorised AI agent. Case-specific notices shown before a paid service or a particular procedural step form part of these Terms.",
        ],
      },
      {
        title: "2. Who may use DIN.ORG",
        paragraphs: [
          "DIN.ORG is available to businesses and consumers. A user must be at least 18 years old, have legal capacity, and have authority to act for any person or organisation they claim to represent.",
          "Consumers retain all mandatory protections of the law applicable in their country. Nothing in these Terms removes rights that cannot lawfully be waived by contract.",
        ],
      },
      {
        title: "3. The service",
        paragraphs: [
          "DIN.ORG receives a dispute, gathers each party\u2019s account in a private intake channel, organises the shared case record, and may prepare questions, settlement proposals, and reasoned AI-generated rulings, including delivery as a PDF where available. Depending on the service offered for a case, a party may also request a paid human review.",
          "The Platform may be used by email, on the web, through an API, or through an AI agent. Statements and instructions submitted by an agent authorised by a party are treated as that party\u2019s statements and instructions.",
        ],
      },
      {
        title: "4. Opening and joining a case",
        paragraphs: [
          "Sending an email or other submission to DIN.ORG starts intake only. DIN.ORG normally sends an automated acknowledgement promptly after receipt. That acknowledgement confirms receipt, not that every file has been opened or verified. The other party is invited only after the initiating party completes the required confirmation step.",
          "The invited party participates voluntarily and must receive a fair opportunity to provide its own account and material. Participation, a reply, or an express confirmation in an ongoing case records acceptance of the version of these Terms presented for that case.",
        ],
      },
      {
        title: "5. A private resolution service \u2014 not a state court",
        paragraphs: [
          "DIN.ORG is not a state court, public authority, law firm, police service, or public prosecutor. It does not exercise governmental powers, compel participation, issue subpoenas, grant emergency relief, or determine criminal guilt.",
          "A settlement or ruling becomes binding only to the extent the parties validly agree that it should bind them under applicable law. Recognition or enforcement by a court or authority is not guaranteed.",
        ],
      },
      {
        title: "6. Matters we can and cannot handle",
        paragraphs: [
          "The Platform is intended primarily for civil, commercial, workplace, contractual, property, and consumer disputes that the parties may lawfully settle.",
          "DIN.ORG does not conduct criminal proceedings and does not replace any authority. It may decline or stop matters that cannot lawfully be settled privately, require an urgent court order, concern immediate danger, or would make the procedure unfair or unsafe. Civil consequences connected with alleged criminal conduct may still be considered where lawful and appropriate.",
        ],
        bullets: [
          "No determination of criminal liability or punishment",
          "No emergency injunctions, protective orders, or compulsory measures",
          "No restriction on contacting police, regulators, courts, lawyers, or support services",
        ],
      },
      {
        title: "7. Criminal allegations, reports, and threats",
        paragraphs: [
          "A criminal allegation, an announced or existing report to an authority, or a threat to pursue criminal action may be relevant context in a civil dispute. DIN.ORG may consider that context when assessing the facts, the lawfulness and fairness of a proposed settlement, and whether consent appears voluntary.",
          "DIN.ORG will not decide whether a crime occurred and will not ask a party to surrender a non-waivable right or obstruct an authority. A party must not use the Platform to extort, intimidate, retaliate, suppress evidence, or obtain an unlawful advantage. If pressure or a threat may undermine free consent, DIN.ORG may refuse to recommend or record the settlement, request clarification, pause the process, or direct the parties to independent legal advice or the competent authorities.",
        ],
        emphasis: true,
      },
      {
        title: "8. Private channels and the shared case record",
        paragraphs: [
          "Each party\u2019s intake conversation with DIN.ORG is private from the other party unless the sender chooses to share it or disclosure is required for a fair process. The court AI may use information from both private channels to identify issues and prepare neutral questions without automatically exposing the private conversation itself.",
          "Evidence, files, and attachments submitted for consideration form part of the shared case record and are accessible to both parties, unless DIN.ORG expressly marks an item as private, restricts it for legal or safety reasons, or removes it. A witness identified by a party, including the witness\u2019s name and submitted email address, is visible to both parties. Parties must submit only contact details reasonably necessary for the case.",
        ],
      },
      {
        title: "9. Files and attachments",
        paragraphs: [
          "DIN.ORG may receive and store common documents, PDFs, word-processing files, images, audio, video, and ZIP archives. Archives may be unpacked and their contents stored as separate case files. Technical limits, file-size limits, malware controls, and supported formats may change as needed for security and reliable operation.",
          "Storage does not mean that a file has been verified, is authentic, or can be technically or legally evaluated. If a file cannot be opened, extracted, inspected, or processed, DIN.ORG will make reasonable efforts to notify the sender so that it can be provided in another format. Users should retain their own copies of every submission.",
        ],
      },
      {
        title: "10. Evidence and witnesses",
        paragraphs: [
          "Users must submit material lawfully, describe it accurately, and must not fabricate, alter, conceal, or misrepresent evidence. Naming a witness does not guarantee that the witness will be contacted or that their statement will be accepted.",
          "Each party must be able to understand and respond to material on which a proposal or ruling relies, subject to lawful confidentiality, privacy, and safety restrictions. DIN.ORG may disregard material that cannot be fairly tested or whose use would be unlawful.",
        ],
      },
      {
        title: "11. Artificial intelligence",
        paragraphs: [
          "DIN.ORG uses artificial intelligence to process submissions, ask questions, structure the record, and generate proposals or rulings. AI output can be incomplete, incorrect, biased, or based on misunderstood facts or legal sources.",
          "AI output is not legal advice and is not guaranteed to be accurate, complete, enforceable, or suitable for a particular country. Parties should review important output and obtain independent legal advice where appropriate.",
        ],
      },
      {
        title: "12. Proposals, settlements, and rulings",
        paragraphs: [
          "A settlement proposal is an invitation to agree, not an imposed decision. No settlement is concluded until the required parties expressly accept the same final terms. DIN.ORG may decline to record terms that appear unlawful, impossible, materially unclear, or affected by coercion or improper pressure.",
          "An AI-generated ruling is a private assessment on the submitted record. Unless applicable law and an express agreement provide otherwise, it is not a judgment of a state court and has no independent compulsory force.",
        ],
      },
      {
        title: "13. Human review and fees",
        paragraphs: [
          "Where offered, a party may request a paid human review of an issued ruling as a confirmation or objection. The reviewer may uphold, modify, or reject the AI output after examining the available record. A review does not guarantee recognition, admissibility, or enforcement by any third party.",
          "Free and paid steps, the applicable price, taxes, and any estimate basis are displayed before a charge is incurred. Paid work that has already begun is non-refundable except where mandatory law requires otherwise or DIN.ORG cannot provide the purchased service. Payments may be processed by a third-party payment provider under its own terms.",
        ],
      },
      {
        title: "14. Consumers",
        paragraphs: [
          "Consumers receive any mandatory pre-contract information, cancellation or withdrawal rights, remedies, and jurisdiction protections required by the law applicable to them. If a consumer asks DIN.ORG to begin a paid service during a statutory withdrawal period, DIN.ORG will obtain any consent or acknowledgement required by applicable law.",
          "Country-specific notices presented at checkout or before performance supplement these Terms. If a country-specific notice conflicts with these Terms, the mandatory consumer rule and then the more protective case-specific notice apply.",
        ],
      },
      {
        title: "15. Deadlines and urgent matters",
        paragraphs: [
          "Using DIN.ORG does not suspend limitation periods, court deadlines, appeal periods, payment duties, or regulatory obligations unless applicable law or a separate valid agreement expressly says so. Users remain responsible for protecting their rights outside the Platform.",
          "DIN.ORG is not suitable for emergencies. A person facing immediate danger, threatened harm, a need for urgent relief, or a time-critical legal deadline should contact the appropriate emergency service, authority, court, or lawyer without waiting for the DIN.ORG process.",
        ],
      },
      {
        title: "16. Responsible use and manipulation attempts",
        paragraphs: [
          "Users must provide information they reasonably believe to be truthful, respect other participants, keep access links and credentials secure, and use the Platform only for lawful dispute resolution.",
          "Prompt injection, attempts to manipulate the court AI, impersonation, unauthorised access, malware, fabricated evidence, harassment, and use of the service to facilitate unlawful conduct are prohibited. DIN.ORG may preserve and quarantine apparent manipulation attempts. Their presence does not automatically decide the dispute against either party or result in a win for the other side: DIN.ORG will consider attribution, context, whether the text was merely quoted or forwarded, and any explanation offered before drawing a credibility or procedural inference.",
        ],
      },
      {
        title: "17. Data and intellectual property",
        paragraphs: [
          "Users retain their rights in submitted material and grant DIN.ORG the rights necessary to receive, copy, extract, translate, analyse, store, display, and otherwise process it for operating, securing, reviewing, and documenting the service. Users must have the right to submit personal data and third-party material.",
          "Case material may be processed by contracted hosting, email, storage, payment, transcription, and AI providers where necessary to operate the service. Additional data-protection information is provided at relevant collection points and can be requested from legal@din.org.",
        ],
      },
      {
        title: "18. Availability and liability",
        paragraphs: [
          "DIN.ORG is provided on an \u201cas available\u201d basis. We do not promise uninterrupted availability or that every submission, file, proposal, ruling, review, or delivery attempt will be error-free. Nothing excludes liability that cannot lawfully be excluded, including mandatory liability for intent, gross negligence, fraud, or injury to life, body, or health where applicable.",
          "Subject to those mandatory rules, DIN.ORG is not liable for a party\u2019s underlying conduct, reliance on unreviewed AI output, missed external deadlines, a third party\u2019s refusal to recognise an outcome, or indirect and consequential loss. For business users, aggregate liability is limited to the fees paid by that user to DIN.ORG in the twelve months before the event giving rise to the claim. Statutory consumer remedies remain unaffected.",
        ],
      },
      {
        title: "19. Refusal, suspension, and closure",
        paragraphs: [
          "DIN.ORG may refuse, pause, or close a case or account where participation is unlawful, unsafe, abusive, technically impracticable, outside the service scope, or incompatible with a fair process. Where reasonably possible, affected parties will be informed and given access to material they are entitled to retain.",
        ],
      },
      {
        title: "20. Governing law and disputes with DIN.ORG",
        paragraphs: [
          "These Terms are governed by the laws of the State of Delaware, USA, without depriving a consumer of mandatory protections available under the law that would apply without this clause. Any exclusive forum clause applies only where legally permitted and does not restrict a consumer\u2019s right to bring or defend a claim in a court available under mandatory consumer-jurisdiction rules.",
          "This section concerns disputes with DIN.ORG. It does not determine the law governing the dispute between the parties to a DIN.ORG case.",
        ],
      },
      {
        title: "21. Changes and contact",
        paragraphs: [
          "DIN.ORG may update these Terms as the service, law, or risk controls change. The applicable version and acceptance time may be recorded per case. Material changes affecting an active case will be notified through the Platform or by email where reasonably possible.",
          "Questions about these Terms may be sent to legal@din.org. Din.org LLC \u00b7 8 The Green, Suite B \u00b7 Dover, Delaware 19901 \u00b7 USA.",
        ],
      },
    ],
    footer:
      "This page is the current general version. Mandatory local law and consumer protections prevail.",
  },
  de: {
    lang: "de",
    eyebrow: "Rechtliches",
    title: "Nutzungsbedingungen",
    updated: "Zuletzt aktualisiert: 14. Juli 2026",
    version: "Version 2.1",
    introduction:
      "Diese Bedingungen erklären, was DIN.ORG leistet, wie die private Aufnahme und gemeinsames Fallmaterial behandelt werden und wo ein privates Streitbeilegungsverfahren enden muss.",
    summaryLabel: "Kurz gesagt",
    summary:
      "DIN.ORG hilft Parteien, einen Streit zu ordnen und auf eine Einigung hinzuarbeiten. DIN.ORG ist kein staatliches Gericht, keine Polizeibehörde, keine Behörde, keine Rechtsanwaltskanzlei und kein Ersatz für dringende rechtliche Hilfe.",
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
    footerNav: {
      about:
        "The Agents Court—neutrale, KI-gestützte Streitbeilegung zwischen zwei Parteien, mit menschlicher Kontrolle und Prüfung.",
      explore: "Entdecken",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      rights: "© 2026 Din.org LLC",
    },
    sections: [
      {
        title: "1. Geltungsbereich und Betreiber",
        paragraphs: [
          "Diese Bedingungen regeln die Nutzung von DIN.ORG (die \u201ePlattform\u201c), einem KI-gestützten privaten Streitbeilegungsdienst, betrieben von Din.org LLC, 8 The Green, Suite B, Dover, Delaware 19901, USA.",
          "Sie gelten für die Teilnahme über die Website, per E-Mail, über eine API oder durch einen autorisierten KI-Agenten. Fallspezifische Hinweise, die vor einer kostenpflichtigen Leistung oder einem bestimmten Verfahrensschritt angezeigt werden, sind Bestandteil dieser Bedingungen.",
        ],
      },
      {
        title: "2. Wer DIN.ORG nutzen darf",
        paragraphs: [
          "DIN.ORG steht Unternehmen und Verbrauchern offen. Nutzer müssen mindestens 18 Jahre alt und geschäftsfähig sein und zur Vertretung jeder Person oder Organisation berechtigt sein, in deren Namen sie handeln.",
          "Verbraucher behalten sämtliche zwingenden Schutzrechte des in ihrem Land anwendbaren Rechts. Diese Bedingungen nehmen keine Rechte, auf die vertraglich nicht wirksam verzichtet werden kann.",
        ],
      },
      {
        title: "3. Der Dienst",
        paragraphs: [
          "DIN.ORG nimmt einen Streit auf, erhebt die Darstellung jeder Partei in einem privaten Aufnahmekanal, ordnet die gemeinsame Fallakte und kann Fragen, Vergleichsvorschläge sowie begründete KI-generierte Entscheidungen vorbereiten, einschließlich einer Bereitstellung als PDF, soweit verfügbar. Je nach für einen Fall angebotenem Dienst kann eine Partei außerdem eine kostenpflichtige menschliche Überprüfung beantragen.",
          "Die Plattform kann per E-Mail, im Web, über eine API oder durch einen KI-Agenten genutzt werden. Erklärungen und Anweisungen eines von einer Partei autorisierten Agenten werden als Erklärungen und Anweisungen dieser Partei behandelt.",
        ],
      },
      {
        title: "4. Eröffnung und Beitritt zu einem Fall",
        paragraphs: [
          "Das Senden einer E-Mail oder einer anderen Eingabe an DIN.ORG beginnt zunächst nur die Aufnahme. DIN.ORG sendet nach Eingang üblicherweise zeitnah eine automatische Empfangsbestätigung. Diese bestätigt den Eingang, nicht aber, dass jede Datei geöffnet oder geprüft wurde. Die andere Partei wird erst eingeladen, nachdem die einleitende Partei den erforderlichen Bestätigungsschritt abgeschlossen hat.",
          "Die eingeladene Partei nimmt freiwillig teil und muss eine faire Gelegenheit erhalten, ihre eigene Darstellung und ihr Material einzureichen. Die Teilnahme, eine Antwort oder eine ausdrückliche Bestätigung in einem laufenden Fall dokumentiert die Zustimmung zu der für diesen Fall vorgelegten Fassung dieser Bedingungen.",
        ],
      },
      {
        title: "5. Private Streitbeilegung \u2014 kein staatliches Gericht",
        paragraphs: [
          "DIN.ORG ist kein staatliches Gericht, keine Behörde, keine Rechtsanwaltskanzlei, keine Polizei und keine Staatsanwaltschaft. DIN.ORG übt keine hoheitlichen Befugnisse aus, erzwingt keine Teilnahme, erlässt keine Vorladungen oder Eilmaßnahmen und entscheidet nicht über strafrechtliche Schuld.",
          "Ein Vergleich oder eine Entscheidung wird nur insoweit verbindlich, wie die Parteien nach anwendbarem Recht wirksam vereinbaren, daran gebunden zu sein. Anerkennung oder Vollstreckung durch ein Gericht oder eine Behörde sind nicht garantiert.",
        ],
      },
      {
        title: "6. Welche Angelegenheiten wir bearbeiten können",
        paragraphs: [
          "Die Plattform ist hauptsächlich für zivilrechtliche, geschäftliche, arbeitsbezogene, vertragliche, sachenrechtliche und verbraucherrechtliche Streitigkeiten bestimmt, über die sich die Parteien rechtmäßig einigen können.",
          "DIN.ORG führt keine Strafverfahren und ersetzt keine Behörde. Angelegenheiten können abgelehnt oder beendet werden, wenn sie nicht rechtmäßig privat beigelegt werden können, eine dringende gerichtliche Anordnung erfordern, eine unmittelbare Gefahr betreffen oder das Verfahren unfair oder unsicher machen würden. Zivilrechtliche Folgen im Zusammenhang mit behauptetem strafbarem Verhalten können berücksichtigt werden, soweit dies rechtmäßig und angemessen ist.",
        ],
        bullets: [
          "Keine Feststellung strafrechtlicher Verantwortlichkeit oder Bestrafung",
          "Keine einstweiligen Verfügungen, Schutzanordnungen oder Zwangsmaßnahmen",
          "Keine Beschränkung des Kontakts zu Polizei, Aufsichtsbehörden, Gerichten, Anwälten oder Hilfsstellen",
        ],
      },
      {
        title: "7. Strafrechtliche Vorwürfe, Anzeigen und Drohungen",
        paragraphs: [
          "Ein strafrechtlicher Vorwurf, eine angekündigte oder bereits erstattete Anzeige oder die Drohung mit strafrechtlichen Schritten kann im zivilrechtlichen Streit relevanter Kontext sein. DIN.ORG kann diesen Kontext bei der Bewertung des Sachverhalts, der Rechtmäßigkeit und Fairness eines Vergleichsvorschlags sowie der Freiwilligkeit einer Zustimmung berücksichtigen.",
          "DIN.ORG entscheidet nicht, ob eine Straftat begangen wurde, und verlangt von keiner Partei den Verzicht auf unverzichtbare Rechte oder die Behinderung einer Behörde. Die Plattform darf nicht für Erpressung, Einschüchterung, Vergeltung, Beweisunterdrückung oder einen rechtswidrigen Vorteil genutzt werden. Wenn Druck oder eine Drohung die freie Zustimmung beeinträchtigen könnten, kann DIN.ORG die Empfehlung oder Dokumentation des Vergleichs ablehnen, Rückfragen stellen, das Verfahren pausieren oder auf unabhängige Rechtsberatung beziehungsweise zuständige Behörden verweisen.",
        ],
        emphasis: true,
      },
      {
        title: "8. Private Kanäle und gemeinsame Fallakte",
        paragraphs: [
          "Das Aufnahmegespräch jeder Partei mit DIN.ORG bleibt gegenüber der anderen Partei privat, sofern der Absender es nicht freigibt oder eine Offenlegung für ein faires Verfahren erforderlich ist. Die Gerichts-KI kann Informationen aus beiden privaten Kanälen nutzen, um Streitpunkte zu erkennen und neutrale Fragen vorzubereiten, ohne das private Gespräch automatisch offenzulegen.",
          "Zur Prüfung eingereichte Beweismittel, Dateien und Anlagen werden Teil der gemeinsamen Fallakte und sind für beide Parteien zugänglich, sofern DIN.ORG einen Gegenstand nicht ausdrücklich als privat kennzeichnet, aus rechtlichen oder sicherheitsbezogenen Gründen beschränkt oder entfernt. Ein von einer Partei benannter Zeuge ist einschließlich seines Namens und der eingereichten E-Mail-Adresse für beide Parteien sichtbar. Parteien dürfen nur Kontaktdaten einreichen, die für den Fall vernünftigerweise erforderlich sind.",
        ],
      },
      {
        title: "9. Dateien und Anlagen",
        paragraphs: [
          "DIN.ORG kann gängige Dokumente, PDFs, Textverarbeitungsdateien, Bilder, Audio- und Videodateien sowie ZIP-Archive empfangen und speichern. Archive können entpackt und ihre Inhalte als einzelne Falldateien gespeichert werden. Technische Grenzen, Dateigrößen, Schadsoftwarekontrollen und unterstützte Formate können aus Sicherheits- und Zuverlässigkeitsgründen geändert werden.",
          "Die Speicherung bedeutet nicht, dass eine Datei geprüft oder echt ist oder technisch beziehungsweise rechtlich ausgewertet werden kann. Wenn eine Datei nicht geöffnet, entpackt, geprüft oder verarbeitet werden kann, bemüht sich DIN.ORG in angemessenem Umfang, den Absender zu informieren, damit sie in einem anderen Format bereitgestellt werden kann. Nutzer sollten eigene Kopien aller Einreichungen aufbewahren.",
        ],
      },
      {
        title: "10. Beweismittel und Zeugen",
        paragraphs: [
          "Nutzer müssen Material rechtmäßig einreichen, zutreffend beschreiben und dürfen Beweismittel nicht fälschen, verändern, verbergen oder falsch darstellen. Die Benennung eines Zeugen garantiert weder dessen Kontaktierung noch die Annahme seiner Aussage.",
          "Jede Partei muss wesentliches Material verstehen und dazu Stellung nehmen können, auf das sich ein Vorschlag oder eine Entscheidung stützt; vorbehalten bleiben rechtmäßige Vertraulichkeits-, Datenschutz- und Sicherheitsbeschränkungen. DIN.ORG kann Material unberücksichtigt lassen, das nicht fair überprüft werden kann oder dessen Nutzung rechtswidrig wäre.",
        ],
      },
      {
        title: "11. Künstliche Intelligenz",
        paragraphs: [
          "DIN.ORG verwendet künstliche Intelligenz, um Eingaben zu verarbeiten, Fragen zu stellen, die Akte zu strukturieren und Vorschläge oder Entscheidungen zu erstellen. KI-Ausgaben können unvollständig, falsch, verzerrt oder auf missverstandenen Tatsachen oder Rechtsquellen beruhen.",
          "KI-Ausgaben sind keine Rechtsberatung und ihre Richtigkeit, Vollständigkeit, Vollstreckbarkeit oder Eignung für ein bestimmtes Land ist nicht garantiert. Parteien sollten wichtige Ausgaben prüfen und gegebenenfalls unabhängige Rechtsberatung einholen.",
        ],
      },
      {
        title: "12. Vorschläge, Vergleiche und Entscheidungen",
        paragraphs: [
          "Ein Vergleichsvorschlag ist eine Einladung zur Einigung und keine auferlegte Entscheidung. Ein Vergleich kommt erst zustande, wenn die erforderlichen Parteien denselben endgültigen Bedingungen ausdrücklich zustimmen. DIN.ORG kann die Dokumentation von Bedingungen ablehnen, die rechtswidrig, unmöglich, wesentlich unklar oder durch Zwang beziehungsweise unzulässigen Druck beeinflusst erscheinen.",
          "Eine KI-generierte Entscheidung ist eine private Bewertung auf Grundlage der eingereichten Akte. Sofern anwendbares Recht und eine ausdrückliche Vereinbarung nichts anderes bestimmen, ist sie kein Urteil eines staatlichen Gerichts und entfaltet keine eigenständige Zwangswirkung.",
        ],
      },
      {
        title: "13. Menschliche Überprüfung und Entgelte",
        paragraphs: [
          "Soweit angeboten, kann eine Partei als Bestätigung oder Einspruch eine kostenpflichtige menschliche Überprüfung einer ergangenen Entscheidung beantragen. Nach Prüfung der verfügbaren Akte kann der Prüfer die KI-Ausgabe bestätigen, ändern oder verwerfen. Die Überprüfung garantiert keine Anerkennung, Zulässigkeit oder Vollstreckung durch Dritte.",
          "Kostenlose und kostenpflichtige Schritte, der anwendbare Preis, Steuern und eine etwaige Schätzgrundlage werden angezeigt, bevor Kosten entstehen. Bereits begonnene kostenpflichtige Arbeit ist nicht erstattungsfähig, soweit zwingendes Recht nichts anderes verlangt oder DIN.ORG die gekaufte Leistung nicht erbringen kann. Zahlungen können durch einen Drittanbieter nach dessen eigenen Bedingungen verarbeitet werden.",
        ],
      },
      {
        title: "14. Verbraucher",
        paragraphs: [
          "Verbraucher erhalten alle zwingenden vorvertraglichen Informationen, Widerrufs- oder Rücktrittsrechte, Rechtsbehelfe und Gerichtsstandsgarantien, die das für sie anwendbare Recht verlangt. Verlangt ein Verbraucher den Beginn einer kostenpflichtigen Leistung während einer gesetzlichen Widerrufsfrist, holt DIN.ORG die gesetzlich erforderliche Zustimmung oder Bestätigung ein.",
          "Länderspezifische Hinweise, die beim Bezahlvorgang oder vor Leistungsbeginn gezeigt werden, ergänzen diese Bedingungen. Bei einem Widerspruch gehen zwingende Verbraucherschutzvorschriften und danach der für den Fall günstigere besondere Hinweis vor.",
        ],
      },
      {
        title: "15. Fristen und dringende Angelegenheiten",
        paragraphs: [
          "Die Nutzung von DIN.ORG hemmt weder Verjährungsfristen noch Gerichts-, Rechtsmittel- oder Zahlungsfristen oder regulatorische Pflichten, sofern anwendbares Recht oder eine gesonderte wirksame Vereinbarung dies nicht ausdrücklich bestimmt. Nutzer bleiben für den Schutz ihrer Rechte außerhalb der Plattform verantwortlich.",
          "DIN.ORG ist nicht für Notfälle geeignet. Bei unmittelbarer Gefahr, drohendem Schaden, erforderlichem Eilrechtsschutz oder einer zeitkritischen Rechtsfrist sollten Betroffene unverzüglich den zuständigen Notdienst, eine Behörde, ein Gericht oder einen Anwalt kontaktieren und nicht auf den DIN.ORG-Prozess warten.",
        ],
      },
      {
        title: "16. Verantwortungsvolle Nutzung und Manipulationsversuche",
        paragraphs: [
          "Nutzer müssen Informationen bereitstellen, die sie vernünftigerweise für wahr halten, andere Teilnehmer respektieren, Zugangslinks und Zugangsdaten schützen und die Plattform nur zur rechtmäßigen Streitbeilegung verwenden.",
          "Prompt Injection, Versuche zur Manipulation der Gerichts-KI, Identitätstäuschung, unbefugter Zugriff, Schadsoftware, gefälschte Beweismittel, Belästigung und die Nutzung zur Unterstützung rechtswidrigen Verhaltens sind untersagt. DIN.ORG kann erkennbare Manipulationsversuche sichern und isolieren. Ihr Vorliegen entscheidet den Streit nicht automatisch gegen eine Partei und führt nicht automatisch zum Sieg der Gegenseite: Vor Rückschlüssen auf Glaubwürdigkeit oder Verfahren werden Zurechnung, Kontext, ein bloßes Zitat oder eine Weiterleitung sowie angebotene Erklärungen berücksichtigt.",
        ],
      },
      {
        title: "17. Daten und geistiges Eigentum",
        paragraphs: [
          "Nutzer behalten ihre Rechte an eingereichtem Material und räumen DIN.ORG die Rechte ein, die erforderlich sind, um es zum Betrieb, zur Absicherung, Überprüfung und Dokumentation des Dienstes zu empfangen, kopieren, extrahieren, übersetzen, analysieren, speichern, anzeigen und anderweitig zu verarbeiten. Nutzer müssen zur Übermittlung personenbezogener Daten und fremden Materials berechtigt sein.",
          "Fallmaterial kann von beauftragten Anbietern für Hosting, E-Mail, Speicher, Zahlung, Transkription und KI verarbeitet werden, soweit dies zum Betrieb des Dienstes erforderlich ist. Weitere Datenschutzinformationen werden an den jeweiligen Erhebungsstellen bereitgestellt und können unter legal@din.org angefordert werden.",
        ],
      },
      {
        title: "18. Verfügbarkeit und Haftung",
        paragraphs: [
          "DIN.ORG wird \u201ewie verfügbar\u201c bereitgestellt. Wir gewährleisten weder unterbrechungsfreie Verfügbarkeit noch Fehlerfreiheit jeder Einreichung, Datei, jedes Vorschlags, jeder Entscheidung, Überprüfung oder Zustellung. Unberührt bleibt Haftung, die rechtlich nicht ausgeschlossen werden kann, einschließlich zwingender Haftung für Vorsatz, grobe Fahrlässigkeit, Betrug oder Verletzung von Leben, Körper oder Gesundheit, soweit anwendbar.",
          "Vorbehaltlich dieser zwingenden Regeln haftet DIN.ORG nicht für das zugrunde liegende Verhalten einer Partei, das Vertrauen auf ungeprüfte KI-Ausgaben, versäumte externe Fristen, die verweigerte Anerkennung eines Ergebnisses durch Dritte oder mittelbare und Folgeschäden. Gegenüber Geschäftskunden ist die Gesamthaftung auf die Entgelte begrenzt, die dieser Nutzer in den zwölf Monaten vor dem haftungsauslösenden Ereignis an DIN.ORG gezahlt hat. Gesetzliche Verbraucherrechte bleiben unberührt.",
        ],
      },
      {
        title: "19. Ablehnung, Aussetzung und Schließung",
        paragraphs: [
          "DIN.ORG kann einen Fall oder ein Konto ablehnen, pausieren oder schließen, wenn die Teilnahme rechtswidrig, unsicher, missbräuchlich, technisch undurchführbar, außerhalb des Angebots oder mit einem fairen Verfahren unvereinbar ist. Soweit vernünftigerweise möglich, werden betroffene Parteien informiert und erhalten Zugang zu Material, das sie behalten dürfen.",
        ],
      },
      {
        title: "20. Anwendbares Recht und Streitigkeiten mit DIN.ORG",
        paragraphs: [
          "Diese Bedingungen unterliegen dem Recht des US-Bundesstaates Delaware, ohne einem Verbraucher zwingende Schutzrechte des Rechts zu nehmen, das ohne diese Klausel anwendbar wäre. Eine ausschließliche Gerichtsstandsregel gilt nur, soweit dies rechtlich zulässig ist, und beschränkt nicht das Recht eines Verbrauchers, vor einem nach zwingenden Verbrauchergerichtsstandsregeln verfügbaren Gericht Klage zu erheben oder sich zu verteidigen.",
          "Dieser Abschnitt betrifft Streitigkeiten mit DIN.ORG. Er bestimmt nicht das Recht, das auf den Streit zwischen den Parteien eines DIN.ORG-Falls anwendbar ist.",
        ],
      },
      {
        title: "21. Änderungen und Kontakt",
        paragraphs: [
          "DIN.ORG kann diese Bedingungen an Änderungen des Dienstes, des Rechts oder der Risikokontrollen anpassen. Die anwendbare Fassung und der Zeitpunkt der Zustimmung können je Fall dokumentiert werden. Wesentliche Änderungen, die einen laufenden Fall betreffen, werden nach Möglichkeit über die Plattform oder per E-Mail mitgeteilt.",
          "Fragen zu diesen Bedingungen können an legal@din.org gesendet werden. Din.org LLC \u00b7 8 The Green, Suite B \u00b7 Dover, Delaware 19901 \u00b7 USA.",
        ],
      },
    ],
    footer:
      "Diese Seite enthält die aktuelle allgemeine Fassung. Zwingendes lokales Recht und Verbraucherschutzvorschriften gehen vor.",
  },
};

export function LegalTerms({ locale }: { locale: TermsLocale }) {
  const copy = terms[locale];
  const isGerman = locale === "de";
  const homeHref = isGerman ? "/de" : "/";
  const journalHref = isGerman ? "/de/news" : "/news";
  const agentsHref = isGerman ? "/de/agenten" : "/agents";
  const languageHref = isGerman ? "/terms" : "/de/agb";
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
        menuLabels={{
          open: copy.nav.openMenu,
          close: copy.nav.closeMenu,
        }}
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
              {copy.updated} <span aria-hidden>\u00b7</span> {copy.version}
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16 md:py-20 border-b"
        style={{
          background: "var(--d-bone-soft)",
          borderColor: "var(--d-line)",
        }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <p
            className="lg:col-span-3 d-mono text-[11px] uppercase tracking-[0.2em] pt-1"
            style={{ color: "var(--d-red)" }}
          >
            {copy.summaryLabel}
          </p>
          <p
            className="lg:col-span-8 d-display text-2xl md:text-4xl leading-[1.15]"
            style={{ color: "var(--d-ink)" }}
          >
            {copy.summary}
          </p>
        </div>
      </section>

      <nav
        aria-label={copy.contentsLabel}
        className="px-6 md:px-10 py-20 md:py-28 border-b"
        style={{ background: "var(--d-bone)", borderColor: "var(--d-line)" }}
      >
        <div className="mx-auto max-w-[1400px]">
          <p
            className="text-[10px] uppercase tracking-[0.28em] mb-10"
            style={{ color: "var(--d-red)" }}
          >
            {copy.contentsLabel}
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 border-t" style={{ borderColor: "var(--d-line)" }}>
            {copy.sections.map((section, index) => (
              <li key={section.title} className="border-b" style={{ borderColor: "var(--d-line)" }}>
                <a
                  href={`#term-${index + 1}`}
                  className="group grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm leading-snug transition-opacity hover:opacity-60"
                  style={{ color: "var(--d-ink)" }}
                >
                  <span className="d-mono text-[10px] pt-0.5" style={{ color: "var(--d-red)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{sectionTitle(section.title)}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className="px-6 md:px-10 py-20 md:py-32" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          {copy.sections.map((section, index) => (
            <TermsSection
              key={section.title}
              index={index}
              section={section}
            />
          ))}

          <p
            className="mt-14 border-t pt-8 max-w-4xl text-sm leading-relaxed font-light"
            style={{ borderColor: "var(--d-line)", color: "var(--d-ink-muted)" }}
          >
            {copy.footer}
          </p>
        </div>
      </section>

      <footer
        className="d-rule-top px-6 md:px-10 py-14"
        style={{ background: "var(--d-bone-soft)" }}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="d-display text-2xl mb-3" style={{ color: "var(--d-ink)" }}>
              din.org
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-md"
              style={{ color: "var(--d-ink-muted)" }}
            >
              {copy.footerNav.about}
            </p>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-red)" }}
            >
              {copy.footerNav.explore}
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={homeHref} className="hover:opacity-70 transition-opacity">{copy.nav.home}</Link></li>
              <li><Link href={journalHref} className="hover:opacity-70 transition-opacity">{copy.nav.journal}</Link></li>
              <li><Link href={agentsHref} className="hover:opacity-70 transition-opacity">{copy.nav.agents}</Link></li>
              <li><a href={LOGIN_URL} className="hover:opacity-70 transition-opacity">{copy.nav.login}</a></li>
            </ul>
          </div>

          <div>
            <p
              className="text-[10px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--d-red)" }}
            >
              {copy.footerNav.legal}
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={privacyHref} className="hover:opacity-70 transition-opacity">{copy.footerNav.privacy}</Link></li>
              <li><Link href={termsHref} className="hover:opacity-70 transition-opacity">{copy.footerNav.terms}</Link></li>
            </ul>
            <p
              className="mt-6 text-xs leading-relaxed"
              style={{ color: "var(--d-ink-muted)" }}
            >
              Din.org LLC · 8 The Green, Suite B
              <br />
              Dover, DE 19901 · USA
              <br />
              {copy.footerNav.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TermsSection({
  index,
  section,
}: {
  index: number;
  section: TermsSection;
}) {
  const id = `term-${index + 1}`;
  const headingId = `${id}-heading`;

  return (
    <article
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-8 border-t ${
        section.emphasis ? "border-l-2 px-5 md:px-8" : ""
      }`}
      style={{
        borderTopColor: section.emphasis ? "var(--d-red)" : "var(--d-line)",
        borderLeftColor: section.emphasis ? "var(--d-red)" : undefined,
        background: section.emphasis ? "var(--d-red-soft)" : undefined,
      }}
    >
      <div className="grid grid-cols-12 gap-x-5 gap-y-6 py-10 md:py-14">
        <p
          className="col-span-2 md:col-span-1 d-mono text-[11px] pt-1"
          style={{ color: "var(--d-red)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2
          id={headingId}
          className="col-span-10 md:col-span-4 d-display text-2xl md:text-4xl leading-tight"
          style={{ color: "var(--d-ink)" }}
        >
          {sectionTitle(section.title)}
        </h2>
        <div
          className="col-span-10 col-start-3 md:col-span-6 md:col-start-7 space-y-5 text-base md:text-lg leading-relaxed font-light"
          style={{ color: "var(--d-ink-muted)" }}
        >
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="space-y-2 list-disc pl-5">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function sectionTitle(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}
