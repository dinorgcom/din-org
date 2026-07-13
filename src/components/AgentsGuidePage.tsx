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

const CASE_EMAIL = "case@din.org";
const MCP_URL = "https://app.din.org/api/mcp/mcp";
const WEB_APP_URL = "https://app.din.org";

type Locale = "en" | "de";

const content = {
  en: {
    localeName: "English",
    homeHref: "/",
    otherHref: "/de/agenten",
    otherLabel: "Deutsch",
    menu: { open: "Open menu", close: "Close menu" },
    nav: {
      process: "Process",
      record: "Case record",
      permissions: "Permissions",
      security: "Security",
      home: "Home",
    },
    hero: {
      eyebrow: "A public guide for humans and agents",
      title: "A resolution process agents can work with.",
      italic: "Humans remain in control.",
      body: "din.org gives people and their authorized AI agents a finite, neutral process for turning an email dispute into a shared record, a settlement proposal, and—when needed—a reasoned decision.",
      note: "Public operating principles · Scoped permissions · Human confirmation",
      cta: "Start by email",
    },
    overview: {
      eyebrow: "Who does what",
      title: "Four roles. Clear boundaries.",
      intro: "An agent can carry work through the procedure, but it does not become the party, the neutral service, or the final source of authority.",
      roles: [
        {
          n: "01",
          title: "The party",
          body: "The claimant or respondent owns the position, evidence, settlement authority, and final instructions given in their name.",
        },
        {
          n: "02",
          title: "The party agent",
          body: "An authorized agent can organize facts, submit material, answer intake questions, and relay proposals within the permission granted by its principal.",
        },
        {
          n: "03",
          title: "The neutral service",
          body: "din.org controls procedure, separates private from shared material, maintains the record, and produces the settlement or decision path.",
        },
        {
          n: "04",
          title: "The human reviewer",
          body: "Where the procedure provides for review, a human can examine the full record and confirm or re-examine a decision.",
        },
      ],
    },
    channels: {
      eyebrow: "Ways to participate",
      title: "Email, web, or MCP. One case.",
      intro: "People and agents can use different interfaces without creating parallel versions of the dispute. Every accepted action is attached to the same case and actor identity.",
      items: [
        {
          title: "Email",
          body: `Send the dispute to ${CASE_EMAIL}. Replies continue the correct case through case-specific addresses and confirmations.`,
          href: `mailto:${CASE_EMAIL}`,
          link: CASE_EMAIL,
        },
        {
          title: "Web",
          body: "Use the protected workspace to review the record, manage participants, upload evidence, and respond to procedural steps.",
          href: WEB_APP_URL,
          link: "Open the case workspace",
        },
        {
          title: "MCP",
          body: "An authorized AI agent can connect through the published MCP endpoint and use only the case actions exposed to it.",
          href: MCP_URL,
          link: MCP_URL,
        },
      ],
    },
    process: {
      eyebrow: "The procedure",
      title: "A finite path from claim to outcome.",
      steps: [
        {
          n: "01",
          title: "Open and confirm",
          body: "A party describes the dispute and identifies the other side. The sender confirms the case before an invitation is released.",
        },
        {
          n: "02",
          title: "Invite and join",
          body: "The other party receives notice and joins by the offered channel. Participation and actor identity are tied to the case.",
        },
        {
          n: "03",
          title: "Private intake",
          body: "Each side answers questions in a separate channel. Confidential goals, negotiation limits, and working discussions are not shown to the other party.",
        },
        {
          n: "04",
          title: "Build the shared record",
          body: "Claims, answers, admitted evidence, files, and named participants are organized into the record both parties can inspect and answer.",
        },
        {
          n: "05",
          title: "Propose settlement",
          body: "din.org presents concrete terms. A settlement takes effect through the confirmations required by the procedure—not through silence or an agent exceeding its authority.",
        },
        {
          n: "06",
          title: "Decide and review",
          body: "If settlement fails, din.org can provide a reasoned private decision based on the record. Where available, the parties may request human review.",
        },
      ],
    },
    record: {
      eyebrow: "Information boundaries",
      title: "Private intake is not the shared case file.",
      intro: "The distinction is deliberate: candid preparation remains possible, while the material used in the dispute is visible and answerable by both sides.",
      sharedTitle: "Visible to both parties",
      shared: [
        "Claims, responses, procedural notices, and accepted case evidence",
        "Files admitted to the shared record, including documents, images, audio, and video",
        "The identity of case participants and formally named witnesses",
        "A named witness’s supplied name and email address, so both parties can see who has been invited",
        "Settlement terms submitted for acceptance and the reasoned outcome",
      ],
      privateTitle: "Kept in the party channel",
      private: [
        "Private intake conversations and draft answers",
        "Confidential negotiation limits and internal preparation",
        "Material not submitted to, or accepted into, the shared record",
        "Authentication data, access tokens, and account security information",
      ],
      filesTitle: "Files are never silently assumed to work",
      filesBody: "Archives and attachments are processed under file and safety limits. If a file is corrupt, password-protected, unsupported, unsafe, or cannot be inspected, the sender is notified and the system does not silently treat it as verified evidence.",
    },
    outcomes: {
      eyebrow: "Outcome path",
      title: "Settlement first. Decision when necessary.",
      items: [
        {
          n: "A",
          title: "Both accept",
          body: "The agreed settlement is recorded and the case closes on those terms.",
        },
        {
          n: "B",
          title: "No settlement",
          body: "The procedure moves to a reasoned decision based on the shared, answerable record.",
        },
        {
          n: "C",
          title: "Review requested",
          body: "Where offered, a human reviewer examines the record under the applicable review route.",
        },
      ],
    },
    permissions: {
      eyebrow: "Authority and limits",
      title: "Agents receive capabilities, not a blank cheque.",
      allowedTitle: "What an authorized agent may do",
      allowed: [
        "Act only for the identified party and case",
        "Read the information available to that party",
        "Submit messages, evidence, and participant details through allowed actions",
        "Relay proposals and request the human confirmation required for consequential steps",
      ],
      limitsTitle: "What it may not do",
      limits: [
        "Read the other party’s private intake channel",
        "Change service rules, identities, permissions, or the case record outside exposed actions",
        "Accept a settlement, incur cost, or bind a person without sufficient authority and required confirmation",
        "Use din.org for criminal adjudication, coercive state powers, or guaranteed legal outcomes",
      ],
    },
    security: {
      eyebrow: "Prompt-injection safety",
      title: "Case content is evidence—not system instruction.",
      intro: "Emails, documents, filenames, archive contents, links, and agent messages are treated as untrusted case material. A sentence inside an attachment cannot grant access, change procedure, or redefine the service’s task.",
      controls: [
        {
          title: "Separate content from control",
          body: "Procedural rules and permissions are enforced outside party-supplied text. Agents can invoke only allowed, validated actions.",
        },
        {
          title: "Check actor, case, and action",
          body: "Every meaningful operation is scoped to an authenticated actor, a specific case, and the authority available at that stage.",
        },
        {
          title: "Keep information boundaries",
          body: "Private intake and shared evidence remain separate even when a message asks the system to reveal, copy, or reinterpret protected material.",
        },
        {
          title: "Do not decide guilt by attempted manipulation",
          body: "Suspicious instructions can be isolated, rejected, logged, or reviewed. They do not automatically award the dispute to the other side; the merits remain tied to the evidence and procedure.",
        },
      ],
      disclosureTitle: "What this public guide does not disclose",
      disclosureBody: "For security reasons, din.org does not publish internal prompts, detection thresholds, signatures, routing rules, credentials, or operational secrets. The public contract is the behavior described here: scoped authority, visible evidence, private channels, confirmation for consequential actions, and a reviewable outcome path.",
    },
    cta: {
      eyebrow: "Ready to participate",
      title: "Bring the dispute. Keep control.",
      body: "A human can start with one email. An authorized agent can continue through web or MCP without bypassing the same rules.",
      email: "Email a case",
      web: "Open the web app",
    },
    footer: {
      about: "The Agents Court—neutral, AI-led dispute resolution between two parties, with human control and review built in.",
      guide: "Agent guide",
      start: "Start",
      home: "Home",
      email: "Email a case",
      web: "Web app",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      rights: "© 2026 Din.org LLC",
    },
  },
  de: {
    localeName: "Deutsch",
    homeHref: "/de",
    otherHref: "/agents",
    otherLabel: "English",
    menu: { open: "Menü öffnen", close: "Menü schließen" },
    nav: {
      process: "Ablauf",
      record: "Fallakte",
      permissions: "Berechtigungen",
      security: "Sicherheit",
      home: "Startseite",
    },
    hero: {
      eyebrow: "Ein öffentlicher Leitfaden für Menschen und Agenten",
      title: "Ein Streitbeilegungsverfahren für Agenten.",
      italic: "Menschen behalten die Kontrolle.",
      body: "din.org bietet Menschen und ihren autorisierten KI-Agenten ein endliches, neutrales Verfahren: aus einem Streit per E-Mail werden eine gemeinsame Fallakte, ein Vergleichsvorschlag und—wenn nötig—eine begründete Entscheidung.",
      note: "Öffentliche Verfahrensgrundsätze · Begrenzte Berechtigungen · Menschliche Bestätigung",
      cta: "Per E-Mail beginnen",
    },
    overview: {
      eyebrow: "Wer macht was",
      title: "Vier Rollen. Klare Grenzen.",
      intro: "Ein Agent kann Arbeit durch das Verfahren tragen. Er wird dadurch aber weder zur Partei noch zum neutralen Dienst oder zur letzten Autorität.",
      roles: [
        {
          n: "01",
          title: "Die Partei",
          body: "Antragsteller oder Antragsgegner besitzen Position, Beweise, Vergleichsvollmacht und die endgültigen Weisungen, die in ihrem Namen erteilt werden.",
        },
        {
          n: "02",
          title: "Der Parteiagent",
          body: "Ein autorisierter Agent kann Tatsachen ordnen, Unterlagen einreichen, Intake-Fragen beantworten und Vorschläge im Rahmen der erteilten Vollmacht weiterleiten.",
        },
        {
          n: "03",
          title: "Der neutrale Dienst",
          body: "din.org steuert das Verfahren, trennt private von gemeinsamen Inhalten, führt die Akte und erzeugt den Vergleichs- oder Entscheidungspfad.",
        },
        {
          n: "04",
          title: "Die menschliche Prüfung",
          body: "Soweit das Verfahren eine Prüfung vorsieht, kann ein Mensch die vollständige Akte prüfen und eine Entscheidung bestätigen oder neu untersuchen.",
        },
      ],
    },
    channels: {
      eyebrow: "Teilnahmemöglichkeiten",
      title: "E-Mail, Web oder MCP. Ein Fall.",
      intro: "Menschen und Agenten können unterschiedliche Schnittstellen verwenden, ohne parallele Versionen des Streits zu erzeugen. Jede angenommene Handlung wird demselben Fall und einer Akteursidentität zugeordnet.",
      items: [
        {
          title: "E-Mail",
          body: `Senden Sie den Streit an ${CASE_EMAIL}. Antworten werden über fallspezifische Adressen und Bestätigungen dem richtigen Fall zugeordnet.`,
          href: `mailto:${CASE_EMAIL}`,
          link: CASE_EMAIL,
        },
        {
          title: "Web",
          body: "Im geschützten Arbeitsbereich können Beteiligte die Akte prüfen, Teilnehmer verwalten, Beweise hochladen und auf Verfahrensschritte antworten.",
          href: WEB_APP_URL,
          link: "Fall-Arbeitsbereich öffnen",
        },
        {
          title: "MCP",
          body: "Ein autorisierter KI-Agent kann sich über den veröffentlichten MCP-Endpunkt verbinden und ausschließlich die für ihn freigegebenen Fallaktionen verwenden.",
          href: MCP_URL,
          link: MCP_URL,
        },
      ],
    },
    process: {
      eyebrow: "Das Verfahren",
      title: "Ein endlicher Weg vom Vorbringen zum Ergebnis.",
      steps: [
        {
          n: "01",
          title: "Eröffnen und bestätigen",
          body: "Eine Partei beschreibt den Streit und benennt die Gegenseite. Der Absender bestätigt den Fall, bevor eine Einladung versendet wird.",
        },
        {
          n: "02",
          title: "Einladen und beitreten",
          body: "Die andere Partei erhält eine Mitteilung und tritt über den angebotenen Kanal bei. Teilnahme und Akteursidentität werden mit dem Fall verknüpft.",
        },
        {
          n: "03",
          title: "Privater Intake",
          body: "Jede Seite beantwortet Fragen in einem getrennten Kanal. Vertrauliche Ziele, Verhandlungsgrenzen und Arbeitsgespräche werden der anderen Partei nicht gezeigt.",
        },
        {
          n: "04",
          title: "Gemeinsame Fallakte aufbauen",
          body: "Vorbringen, Antworten, zugelassene Beweise, Dateien und benannte Beteiligte werden in einer Akte geordnet, die beide Parteien prüfen und beantworten können.",
        },
        {
          n: "05",
          title: "Vergleich vorschlagen",
          body: "din.org legt konkrete Bedingungen vor. Ein Vergleich wird durch die erforderlichen Bestätigungen wirksam—nicht durch Schweigen oder einen Agenten, der seine Vollmacht überschreitet.",
        },
        {
          n: "06",
          title: "Entscheiden und prüfen",
          body: "Scheitert der Vergleich, kann din.org eine begründete private Entscheidung auf Grundlage der Akte bereitstellen. Soweit vorgesehen, können die Parteien eine menschliche Prüfung beantragen.",
        },
      ],
    },
    record: {
      eyebrow: "Informationsgrenzen",
      title: "Privater Intake ist nicht die gemeinsame Fallakte.",
      intro: "Die Trennung ist beabsichtigt: Vertrauliche Vorbereitung bleibt möglich, während das im Streit verwendete Material für beide Seiten sichtbar und beantwortbar ist.",
      sharedTitle: "Für beide Parteien sichtbar",
      shared: [
        "Vorbringen, Antworten, Verfahrensmitteilungen und angenommene Fallbeweise",
        "In die gemeinsame Akte aufgenommene Dateien, einschließlich Dokumenten, Bildern, Audio und Video",
        "Die Identität der Fallbeteiligten und förmlich benannter Zeugen",
        "Name und angegebene E-Mail-Adresse eines benannten Zeugen, damit beide Parteien sehen, wer eingeladen wurde",
        "Zur Annahme vorgelegte Vergleichsbedingungen und das begründete Ergebnis",
      ],
      privateTitle: "Im Partei-Kanal geschützt",
      private: [
        "Private Intake-Gespräche und Antwortentwürfe",
        "Vertrauliche Verhandlungsgrenzen und interne Vorbereitung",
        "Material, das nicht in die gemeinsame Akte eingereicht oder aufgenommen wurde",
        "Authentifizierungsdaten, Zugriffstoken und Kontosicherheitsinformationen",
      ],
      filesTitle: "Bei Dateien wird nie stillschweigend Funktion vorausgesetzt",
      filesBody: "Archive und Anhänge werden unter Datei- und Sicherheitsgrenzen verarbeitet. Ist eine Datei beschädigt, passwortgeschützt, nicht unterstützt, unsicher oder nicht prüfbar, wird der Absender informiert; das System behandelt sie nicht stillschweigend als verifizierten Beweis.",
    },
    outcomes: {
      eyebrow: "Ergebnispfad",
      title: "Zuerst Vergleich. Entscheidung, wenn nötig.",
      items: [
        {
          n: "A",
          title: "Beide nehmen an",
          body: "Der vereinbarte Vergleich wird festgehalten und der Fall zu diesen Bedingungen geschlossen.",
        },
        {
          n: "B",
          title: "Kein Vergleich",
          body: "Das Verfahren geht in eine begründete Entscheidung auf Grundlage der gemeinsamen, beantwortbaren Akte über.",
        },
        {
          n: "C",
          title: "Prüfung beantragt",
          body: "Soweit angeboten, prüft ein menschlicher Reviewer die Akte im vorgesehenen Prüfungsverfahren.",
        },
      ],
    },
    permissions: {
      eyebrow: "Vollmacht und Grenzen",
      title: "Agenten erhalten Fähigkeiten, keinen Blankoscheck.",
      allowedTitle: "Was ein autorisierter Agent tun darf",
      allowed: [
        "Nur für die identifizierte Partei und den konkreten Fall handeln",
        "Die für diese Partei freigegebenen Informationen lesen",
        "Nachrichten, Beweise und Teilnehmerdaten über erlaubte Aktionen einreichen",
        "Vorschläge weiterleiten und bei folgenreichen Schritten die erforderliche menschliche Bestätigung einholen",
      ],
      limitsTitle: "Was er nicht tun darf",
      limits: [
        "Den privaten Intake-Kanal der anderen Partei lesen",
        "Verfahrensregeln, Identitäten, Berechtigungen oder die Fallakte außerhalb freigegebener Aktionen verändern",
        "Ohne ausreichende Vollmacht und erforderliche Bestätigung einen Vergleich annehmen, Kosten auslösen oder eine Person binden",
        "din.org für strafrechtliche Entscheidungen, staatliche Zwangsbefugnisse oder garantierte Rechtsausgänge verwenden",
      ],
    },
    security: {
      eyebrow: "Schutz vor Prompt Injection",
      title: "Fallinhalt ist Beweismaterial—keine Systemanweisung.",
      intro: "E-Mails, Dokumente, Dateinamen, Archivinhalte, Links und Agentennachrichten werden als nicht vertrauenswürdiges Fallmaterial behandelt. Ein Satz in einem Anhang kann weder Zugriff gewähren noch das Verfahren ändern oder die Aufgabe des Dienstes neu definieren.",
      controls: [
        {
          title: "Inhalt von Steuerung trennen",
          body: "Verfahrensregeln und Berechtigungen werden außerhalb parteigelieferter Texte durchgesetzt. Agenten können nur erlaubte, validierte Aktionen aufrufen.",
        },
        {
          title: "Akteur, Fall und Aktion prüfen",
          body: "Jede wesentliche Handlung ist an einen authentifizierten Akteur, einen konkreten Fall und die in dieser Stufe verfügbare Vollmacht gebunden.",
        },
        {
          title: "Informationsgrenzen bewahren",
          body: "Privater Intake und gemeinsame Beweise bleiben getrennt, auch wenn eine Nachricht verlangt, geschütztes Material offenzulegen, zu kopieren oder umzudeuten.",
        },
        {
          title: "Kein automatischer Nachteil wegen Manipulationsversuchs",
          body: "Verdächtige Anweisungen können isoliert, abgelehnt, protokolliert oder geprüft werden. Sie sprechen der Gegenseite nicht automatisch Recht zu; die Sache bleibt an Beweise und Verfahren gebunden.",
        },
      ],
      disclosureTitle: "Was dieser öffentliche Leitfaden nicht offenlegt",
      disclosureBody: "Aus Sicherheitsgründen veröffentlicht din.org keine internen Prompts, Erkennungsschwellen, Signaturen, Routingregeln, Zugangsdaten oder Betriebsgeheimnisse. Der öffentliche Vertrag ist das hier beschriebene Verhalten: begrenzte Vollmacht, sichtbare Beweise, private Kanäle, Bestätigung bei folgenreichen Handlungen und ein überprüfbarer Ergebnispfad.",
    },
    cta: {
      eyebrow: "Bereit zur Teilnahme",
      title: "Bringen Sie den Streit. Behalten Sie die Kontrolle.",
      body: "Ein Mensch kann mit einer E-Mail beginnen. Ein autorisierter Agent kann über Web oder MCP fortfahren, ohne dieselben Regeln zu umgehen.",
      email: "Fall per E-Mail starten",
      web: "Web-App öffnen",
    },
    footer: {
      about: "The Agents Court—neutrale, KI-gestützte Streitbeilegung zwischen zwei Parteien, mit menschlicher Kontrolle und Prüfung.",
      guide: "Agentenleitfaden",
      start: "Start",
      home: "Startseite",
      email: "Fall per E-Mail",
      web: "Web-App",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "AGB",
      rights: "© 2026 Din.org LLC",
    },
  },
} as const;

export function AgentsGuidePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const isGerman = locale === "de";
  const privacyHref = isGerman ? "/de/datenschutz" : "/privacy";
  const termsHref = isGerman ? "/de/agb" : "/terms";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isGerman
      ? "Agentenleitfaden für din.org"
      : "Agent guide for din.org",
    url: isGerman ? "https://din.org/de/agenten" : "https://din.org/agents",
    description: isGerman
      ? "Öffentlicher Leitfaden zu Rollen, Ablauf, Berechtigungen, Fallakte und Sicherheit für Menschen und KI-Agenten bei din.org."
      : "A public guide to roles, process, permissions, case records, and security for people and AI agents using din.org.",
    inLanguage: isGerman ? "de" : "en",
    isPartOf: { "@id": "https://din.org/#website" },
    about: [
      { "@type": "Thing", name: "AI agent permissions" },
      { "@type": "Thing", name: "Online dispute resolution" },
      { "@type": "Thing", name: "Prompt injection security" },
    ],
  };

  return (
    <div
      className={`decisions-site ${display.variable} ${sans.variable} ${mono.variable}`}
      lang={locale}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HarveyNav
        homeHref={t.homeHref}
        menuLabels={t.menu}
        links={[
          { href: "#process", label: t.nav.process },
          { href: "#record", label: t.nav.record },
          { href: "#permissions", label: t.nav.permissions },
          { href: "#security", label: t.nav.security },
          { href: t.otherHref, label: t.otherLabel },
        ]}
        cta={{ href: `mailto:${CASE_EMAIL}`, label: t.hero.cta }}
      />

      <section className="relative min-h-[90svh] flex items-end overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/mann-office.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/mann-office.webm" type="video/webm" />
          <source src="/videos/mann-office.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.55) 0%, rgba(20,19,15,0.42) 40%, rgba(20,19,15,0.92) 100%)",
          }}
        />
        <div className="d-grain" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 md:pb-28 pt-40">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-8"
              style={{ color: "rgba(245,241,234,0.7)" }}
            >
              <span
                className="inline-block w-8 h-px align-middle mr-3"
                style={{ background: "rgba(245,241,234,0.5)" }}
              />
              {t.hero.eyebrow}
            </p>
            <h1
              className="d-display text-[clamp(3rem,7vw,7rem)] leading-[0.96] max-w-[17ch]"
              style={{ color: "var(--d-bone)" }}
            >
              {t.hero.title}
              <br />
              <span
                className="italic font-light"
                style={{ color: "rgba(245,241,234,0.85)" }}
              >
                {t.hero.italic}
              </span>
            </h1>
            <p
              className="mt-10 text-lg md:text-xl max-w-3xl leading-relaxed font-light"
              style={{ color: "rgba(245,241,234,0.82)" }}
            >
              {t.hero.body}
            </p>
            <div className="mt-12">
              <a
                href={`mailto:${CASE_EMAIL}`}
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium"
                style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}
              >
                {t.hero.cta} <span aria-hidden>→</span>
              </a>
            </div>
            <p
              className="mt-14 text-xs uppercase tracking-[0.23em]"
              style={{ color: "rgba(245,241,234,0.55)" }}
            >
              {t.hero.note}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow={t.overview.eyebrow} title={t.overview.title} />
          <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>
            {t.overview.intro}
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px border" style={{ borderColor: "var(--d-line)", background: "var(--d-line)" }}>
            {t.overview.roles.map((role) => (
              <article key={role.n} className="p-8 md:p-12" style={{ background: "var(--d-bone)" }}>
                <p className="d-mono text-xs mb-10" style={{ color: "var(--d-accent)" }}>{role.n}</p>
                <h3 className="d-display text-3xl md:text-4xl" style={{ color: "var(--d-ink)" }}>{role.title}</h3>
                <p className="mt-5 text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{role.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-ink)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading dark eyebrow={t.channels.eyebrow} title={t.channels.title} />
          <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed" style={{ color: "rgba(245,241,234,0.7)" }}>
            {t.channels.intro}
          </p>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {t.channels.items.map((item) => (
              <article key={item.title} className="rounded-2xl border p-8" style={{ borderColor: "rgba(245,241,234,0.22)", background: "var(--d-ink-soft)" }}>
                <h3 className="d-display text-3xl" style={{ color: "var(--d-bone)" }}>{item.title}</h3>
                <p className="mt-5 min-h-24 text-sm md:text-base leading-relaxed font-light" style={{ color: "rgba(245,241,234,0.7)" }}>{item.body}</p>
                <a href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm break-all hover:opacity-70" style={{ color: "var(--d-bone)" }}>
                  {item.link} <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          <div className="mt-16 border-t" style={{ borderColor: "var(--d-line)" }}>
            {t.process.steps.map((step) => (
              <article key={step.n} className="grid grid-cols-12 gap-5 py-9 md:py-12 border-b" style={{ borderColor: "var(--d-line)" }}>
                <p className="col-span-2 md:col-span-1 d-mono text-xs pt-1" style={{ color: "var(--d-accent)" }}>{step.n}</p>
                <h3 className="col-span-10 md:col-span-4 d-display text-2xl md:text-4xl" style={{ color: "var(--d-ink)" }}>{step.title}</h3>
                <p className="col-span-10 col-start-3 md:col-span-6 md:col-start-7 text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="record" className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-bone-soft)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow={t.record.eyebrow} title={t.record.title} />
          <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>{t.record.intro}</p>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ListCard title={t.record.sharedTitle} items={t.record.shared} />
            <ListCard title={t.record.privateTitle} items={t.record.private} />
          </div>
          <div className="mt-5 rounded-2xl border p-8 md:p-10" style={{ borderColor: "var(--d-line)", background: "var(--d-bone)" }}>
            <h3 className="d-display text-2xl md:text-3xl" style={{ color: "var(--d-ink)" }}>{t.record.filesTitle}</h3>
            <p className="mt-4 max-w-4xl text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{t.record.filesBody}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-ink)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading dark eyebrow={t.outcomes.eyebrow} title={t.outcomes.title} />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(245,241,234,0.2)" }}>
            {t.outcomes.items.map((item) => (
              <article key={item.n} className="p-8 md:p-10" style={{ background: "var(--d-ink)" }}>
                <p className="d-mono text-xs" style={{ color: "rgba(245,241,234,0.5)" }}>{item.n}</p>
                <h3 className="mt-10 d-display text-3xl" style={{ color: "var(--d-bone)" }}>{item.title}</h3>
                <p className="mt-5 text-base leading-relaxed font-light" style={{ color: "rgba(245,241,234,0.7)" }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="permissions" className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow={t.permissions.eyebrow} title={t.permissions.title} />
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ListCard title={t.permissions.allowedTitle} items={t.permissions.allowed} />
            <ListCard title={t.permissions.limitsTitle} items={t.permissions.limits} />
          </div>
        </div>
      </section>

      <section id="security" className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-bone-soft)" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow={t.security.eyebrow} title={t.security.title} />
          <p className="mt-8 max-w-4xl text-lg md:text-xl leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{t.security.intro}</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.security.controls.map((control, index) => (
              <article key={control.title} className="rounded-2xl border p-8 md:p-10" style={{ borderColor: "var(--d-line)", background: "var(--d-bone)" }}>
                <p className="d-mono text-xs mb-8" style={{ color: "var(--d-accent)" }}>0{index + 1}</p>
                <h3 className="d-display text-2xl md:text-3xl" style={{ color: "var(--d-ink)" }}>{control.title}</h3>
                <p className="mt-4 text-base leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{control.body}</p>
              </article>
            ))}
          </div>
          <aside className="mt-5 border-l-2 p-8 md:p-10" style={{ borderColor: "var(--d-accent)", background: "var(--d-bone)" }}>
            <h3 className="d-display text-2xl md:text-3xl" style={{ color: "var(--d-ink)" }}>{t.security.disclosureTitle}</h3>
            <p className="mt-4 max-w-5xl text-base md:text-lg leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>{t.security.disclosureBody}</p>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--d-ink)" }}>
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(245,241,234,0.55)" }}>{t.cta.eyebrow}</p>
          <h2 className="mt-8 mx-auto d-display text-4xl md:text-7xl max-w-[18ch]" style={{ color: "var(--d-bone)" }}>{t.cta.title}</h2>
          <p className="mt-8 mx-auto max-w-2xl text-lg font-light leading-relaxed" style={{ color: "rgba(245,241,234,0.7)" }}>{t.cta.body}</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href={`mailto:${CASE_EMAIL}`} className="rounded-full px-7 py-4 text-sm font-medium" style={{ background: "var(--d-bone)", color: "var(--d-ink)" }}>{t.cta.email}</a>
            <a href={WEB_APP_URL} className="rounded-full border px-7 py-4 text-sm font-medium" style={{ borderColor: "rgba(245,241,234,0.35)", color: "var(--d-bone)" }}>{t.cta.web}</a>
          </div>
        </div>
      </section>

      <footer className="d-rule-top px-6 md:px-10 py-14" style={{ background: "var(--d-bone)" }}>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="d-display text-2xl mb-3" style={{ color: "var(--d-ink)" }}>din.org</p>
            <p className="text-sm leading-relaxed font-light max-w-md" style={{ color: "var(--d-ink-muted)" }}>{t.footer.about}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "var(--d-ink-muted)" }}>{t.footer.start}</p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={t.homeHref} className="hover:opacity-70">{t.footer.home}</Link></li>
              <li><Link href={isGerman ? "/de/agenten" : "/agents"} className="hover:opacity-70">{t.footer.guide}</Link></li>
              <li><a href={`mailto:${CASE_EMAIL}`} className="hover:opacity-70">{t.footer.email}</a></li>
              <li><a href={WEB_APP_URL} className="hover:opacity-70">{t.footer.web}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-4" style={{ color: "var(--d-ink-muted)" }}>{t.footer.legal}</p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--d-ink)" }}>
              <li><Link href={privacyHref} className="hover:opacity-70">{t.footer.privacy}</Link></li>
              <li><Link href={termsHref} className="hover:opacity-70">{t.footer.terms}</Link></li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--d-ink-muted)" }}>
              Din.org LLC · 8 The Green, Suite B<br />Dover, DE 19901 · USA<br />{t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className="text-[10px] uppercase tracking-[0.3em]"
        style={{ color: dark ? "rgba(245,241,234,0.55)" : "var(--d-ink-muted)" }}
      >
        <span
          className="inline-block w-8 h-px align-middle mr-3"
          style={{ background: dark ? "rgba(245,241,234,0.4)" : "var(--d-accent)" }}
        />
        {eyebrow}
      </p>
      <h2
        className="mt-8 d-display text-4xl md:text-7xl max-w-[20ch]"
        style={{ color: dark ? "var(--d-bone)" : "var(--d-ink)" }}
      >
        {title}
      </h2>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="rounded-2xl border p-8 md:p-10" style={{ borderColor: "var(--d-line)", background: "var(--d-bone)" }}>
      <h3 className="d-display text-2xl md:text-3xl" style={{ color: "var(--d-ink)" }}>{title}</h3>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed font-light" style={{ color: "var(--d-ink-muted)" }}>
            <span aria-hidden style={{ color: "var(--d-accent)" }}>·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
