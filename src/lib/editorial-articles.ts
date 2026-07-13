export type ArticleLocale = "en" | "de";

export type EditorialArticle = {
  locale: ArticleLocale;
  slug: string;
  alternateSlug: string;
  title: string;
  description: string;
  eyebrow: string;
  datePublished: string;
  dateLabel: string;
  readingTime: string;
  keywords: string[];
  lead: string;
  keyPoint: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  sources: Array<{
    source: string;
    title: string;
    url: string;
    note: string;
  }>;
  relatedSlug: string;
  relatedLabel: string;
};

const english: EditorialArticle[] = [
  {
    locale: "en",
    slug: "economics-of-the-ai-email-war",
    alternateSlug: "oekonomie-des-ki-email-kriegs",
    title: "The economics of the AI email war",
    description:
      "Generative AI makes legalistic correspondence nearly free to produce, while reading, verifying, and answering it still consumes expensive human attention.",
    eyebrow: "AI-amplified disputes",
    datePublished: "2026-07-13",
    dateLabel: "13 July 2026",
    readingTime: "8-minute read",
    keywords: [
      "AI email war",
      "AI-generated legal correspondence",
      "AI workslop",
      "AI dispute escalation",
      "legal email overload",
      "online dispute resolution",
    ],
    lead:
      "AI has reduced the cost of producing ten pages of legal-sounding argument to almost zero. It has not reduced the cost of working out which facts are true, which claims matter, and what actually requires an answer. That imbalance is quietly changing the economics of conflict.",
    keyPoint:
      "The sender saves minutes. The recipient inherits hours. In a dispute, that is not merely an office-productivity problem — it can become a method of escalation.",
    sections: [
      {
        title: "A new cost asymmetry",
        paragraphs: [
          "Before generative AI, a long, polished legal letter imposed meaningful costs on its author. Someone had to investigate the facts, organise the chronology, choose the arguments, and write the document. Today, a party can produce the appearance of that work in minutes.",
          "The recipient cannot safely assume that the result is irrelevant simply because AI helped write it. A lawyer, employer, supplier, insurer, or former business partner may still have to identify every allegation, verify every date, check every cited authority, and decide which point changes the legal or commercial position. The cost of producing an argument collapses; the cost of responsibly evaluating it does not.",
        ],
      },
      {
        title: "From workslop to dispute correspondence",
        paragraphs: [
          "BetterUp and the Stanford Social Media Lab use the term “workslop” for AI-generated work that looks finished but leaves the real thinking and clean-up to someone else. Their September 2025 survey of 1,150 full-time US desk workers reported that 40% had received workslop in the previous month, with respondents estimating an average of two hours to resolve an incident and a monthly cost of $186 per employee.",
          "Those figures describe the workplace generally, not legal disputes specifically. But the transfer mechanism is the same. A polished surface can conceal missing context, invented detail, duplicated arguments, or conclusions that no person has checked. In an ordinary workflow that creates rework. In a dispute it creates review risk, defensive cost, and pressure to respond in kind.",
        ],
      },
      {
        title: "Why disputes amplify the burden",
        paragraphs: [
          "Conflict makes recipients cautious. A six-page complaint may contain only three material facts, but the recipient does not know that until someone has read all six pages. A fictitious case citation may still require a database search before it can be rejected. A vague accusation may force a search through months of messages and invoices.",
          "Industry reporting now describes clients sending lawyers extensive AI-generated questions, strategies, and documents that require more review rather than less. The Law Society Gazette has described an emerging “AI slop” problem in courts, particularly where plausible but unreliable submissions still have to be processed by judges and lawyers.",
        ],
        bullets: [
          "More words create more propositions to verify.",
          "Formal tone can make weak claims appear more authoritative.",
          "Every answer becomes fresh input for the next generated counter-answer.",
          "Human attention remains the scarce and expensive resource.",
        ],
      },
      {
        title: "The AI-versus-AI escalation loop",
        paragraphs: [
          "Once both sides use AI, the marginal cost of another round approaches zero. One party generates a comprehensive response. The other asks its model to find omissions, contradictions, and stronger language. That output returns to the first model, which discovers another set of objections. Each round appears rational in isolation; together they form a negative-sum loop.",
          "Research on difficult workplace emails shows that LLM-assisted writing can be more formal and empathetic, and that hybrid human-plus-AI drafting can outperform either alone in some scenarios. The problem is therefore not “AI writing is always bad”. The problem is using generation without responsibility for relevance, accuracy, proportionality, and closure.",
        ],
      },
      {
        title: "Not every long AI-assisted message is abuse",
        paragraphs: [
          "A consumer, employee, or small business may use AI because professional help is unaffordable, because they are writing in a second language, or because they need assistance organising a complex history. Length alone does not prove bad faith, and the use of AI should never automatically decide a dispute against its user.",
          "The fair question is functional: does the submission identify verifiable facts, relevant evidence, and a concrete requested outcome? If apparent manipulation, fabricated material, or deliberate volume tactics are alleged, attribution and context must be established and the affected party must have an opportunity to explain.",
        ],
      },
      {
        title: "A better response than another twenty pages",
        paragraphs: [
          "The answer to correspondence inflation is not to forbid useful drafting tools. It is to change the communication architecture. A dispute process should extract a chronology, separate allegations from evidence, identify what each party actually wants, and close factual issues when the record is complete.",
          "That is the category din.org calls the AI email war: conflict in which generating more language is cheap but reaching a reliable decision remains expensive. The purpose of structured online dispute resolution is to stop rewarding volume and redirect both sides toward a finite, reviewable record and a concrete path to settlement.",
        ],
      },
    ],
    sources: [
      {
        source: "BetterUp Labs & Stanford Social Media Lab",
        title: "Workslop: The Hidden Cost of AI-Generated Busywork",
        url: "https://www.betterup.com/workslop",
        note: "Original research page and survey methodology behind the workslop figures.",
      },
      {
        source: "Law Society Gazette",
        title: "AI slop — law’s quiet epidemic",
        url: "https://www.lawgazette.co.uk/news-focus/in-depth-ai-slop-laws-quiet-epidemic/5127215.article",
        note: "Reporting on AI-generated material reaching lawyers and courts.",
      },
      {
        source: "Reuters Legal",
        title: "The evolution of AI in lawyer-client relations and legal practice",
        url: "https://www.reuters.com/legal/legalindustry/evolution-ai-lawyer-client-relations-legal-practice--pracin-2026-05-05/",
        note: "Practitioner analysis of the extra review created by client-generated AI material.",
      },
      {
        source: "Financial Times",
        title: "Clients’ barrage of AI-generated queries risks pushing up lawyers’ fees",
        url: "https://www.ft.com/content/744d2c77-a34e-4ca0-9f0e-ce8cdcdee483",
        note: "Industry reporting on the review-cost consequences for legal services.",
      },
      {
        source: "Nguyen, Fu, West, Holtzman & Tan",
        title: "Moral Mazes in the Era of LLMs",
        url: "https://arxiv.org/abs/2603.20231",
        note: "Research comparing human, LLM, and hybrid emails in difficult workplace scenarios.",
      },
    ],
    relatedSlug: "from-ai-workslop-to-a-usable-case-record",
    relatedLabel: "Next: From AI workslop to a usable case record",
  },
  {
    locale: "en",
    slug: "from-ai-workslop-to-a-usable-case-record",
    alternateSlug: "von-ki-workslop-zur-brauchbaren-fallakte",
    title: "From AI workslop to a usable case record",
    description:
      "How structured online dispute resolution turns long AI-generated correspondence into a finite record of facts, evidence, witnesses, and requested outcomes.",
    eyebrow: "Designing a better process",
    datePublished: "2026-07-13",
    dateLabel: "13 July 2026",
    readingTime: "7-minute read",
    keywords: [
      "structured dispute resolution",
      "AI-generated complaint",
      "AI workslop response",
      "online dispute resolution process",
      "prompt injection legal evidence",
      "AI legal correspondence",
    ],
    lead:
      "The worst response to a twenty-page AI-generated complaint is an equally long AI-generated defence. A useful dispute process does something different: it converts narrative volume into a finite record that both sides can inspect and answer.",
    keyPoint:
      "Do not measure participation by how much text a party produces. Measure whether the record contains the facts, evidence, requested remedy, and answer needed for a fair decision.",
    sections: [
      {
        title: "Start with structure, not rhetoric",
        paragraphs: [
          "Direct email rewards the last writer and the longest response. Structured intake rewards completeness. It asks who the parties are, what happened, when it happened, which facts are disputed, what evidence exists, and what outcome would resolve the matter.",
          "This does not discard a party’s story. It gives that story an evidentiary shape. Chronology is separated from argument; documents from descriptions; settlement flexibility from the material that must be shared with the other side.",
        ],
      },
      {
        title: "Give each party a private channel",
        paragraphs: [
          "Early resolution often depends on information a party will not put into a confrontational group email: uncertainty, commercial priorities, or the minimum change needed to settle. Private intake allows each side to explain those interests without exposing its entire negotiation position.",
          "Privacy must not become secret evidence. The opposing party should be able to see and answer the documents, witness details, and material allegations on which a proposal or ruling relies. The design challenge is to keep candid settlement dialogue private while building a shared, contestable case record.",
        ],
      },
      {
        title: "Store the file, then describe what can be inspected",
        paragraphs: [
          "Evidence arrives in inconvenient forms: PDFs, Word files, photographs, videos, audio, old document formats, and ZIP archives. A reliable system keeps the original, extracts what it can, and tells the sender when a file could not be opened or reviewed.",
          "That distinction matters. “Stored” is not the same as “verified”. A transcript generated from an image is not proof that the image is authentic. A document extracted from a ZIP is not automatically relevant. Both parties need access to the same file and a clear statement of its inspection status.",
        ],
      },
      {
        title: "Treat instructions inside evidence as evidence",
        paragraphs: [
          "AI-mediated procedures introduce a new adversarial input: a message or attachment may contain text telling the model to ignore its rules, change roles, reveal private material, or decide for one party. That text must never become an instruction to the dispute-resolution system.",
          "The safe pattern is to separate trusted system rules from untrusted party content, detect clear manipulation signatures, preserve the original for audit, and quarantine it from later model context. A detection should not automatically hand victory to the other side. The passage may be quoted, forwarded, or planted; attribution, context, and an opportunity to explain come first.",
        ],
      },
      {
        title: "Make consequential consent deterministic",
        paragraphs: [
          "An AI model may help extract names or organise a chronology. It should not guess whether a party intended to open a case, accept a settlement, or waive a right. Consequential steps need an explicit action: a clear button, a signed instruction, or an exact confirmation keyword.",
          "This is less conversational than asking a model to infer intent, but it is more auditable. In dispute resolution, ambiguity should trigger clarification, not an irreversible state change.",
        ],
      },
      {
        title: "Close the record and move toward an outcome",
        paragraphs: [
          "An email war has no natural stopping point. A procedure needs one. Each party should be asked whether it has further evidence or witnesses, receive a reasonable deadline, and know when its side of the record will close.",
          "Once the material issues are identified, the system can propose concrete terms: who does what, by when, for how much, and what is released once performance is complete. If settlement fails, any assessment or ruling should cite the actual record rather than the confidence or volume of the prose.",
        ],
      },
      {
        title: "Where human judgment remains essential",
        paragraphs: [
          "Structure and AI can reduce sorting cost, surface contradictions, and make a case legible. They do not eliminate questions of credibility, coercion, proportionality, governing law, or enforceability. High-impact outcomes need transparent reasoning and a meaningful path to human review.",
          "The objective is not to automate conflict at greater speed. It is to prevent automation from manufacturing more conflict than humans can economically resolve.",
        ],
      },
    ],
    sources: [
      {
        source: "OWASP GenAI Security Project",
        title: "LLM01:2025 Prompt Injection",
        url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
        note: "Security guidance on direct, indirect, and multimodal prompt injection and practical mitigations.",
      },
      {
        source: "BetterUp Labs & Stanford Social Media Lab",
        title: "Workslop: The Hidden Cost of AI-Generated Busywork",
        url: "https://www.betterup.com/workslop",
        note: "Research on how superficially complete AI output transfers work to recipients.",
      },
      {
        source: "Alexander von Humboldt Institute for Internet and Society",
        title: "The unintended consequences of writing your emails with AI",
        url: "https://www.hiig.de/en/unintended-consequences-of-ai-written-emails/",
        note: "Analysis of nuance, connection, and communication skills in AI-assisted email.",
      },
      {
        source: "Law Society Gazette",
        title: "AI slop — law’s quiet epidemic",
        url: "https://www.lawgazette.co.uk/news-focus/in-depth-ai-slop-laws-quiet-epidemic/5127215.article",
        note: "Why plausible but unreliable material still imposes work on legal institutions.",
      },
      {
        source: "Nguyen, Fu, West, Holtzman & Tan",
        title: "Moral Mazes in the Era of LLMs",
        url: "https://arxiv.org/abs/2603.20231",
        note: "Evidence that careful human-plus-AI drafting can outperform unassisted approaches.",
      },
    ],
    relatedSlug: "economics-of-the-ai-email-war",
    relatedLabel: "Read: The economics of the AI email war",
  },
];

const german: EditorialArticle[] = [
  {
    locale: "de",
    slug: "oekonomie-des-ki-email-kriegs",
    alternateSlug: "economics-of-the-ai-email-war",
    title: "Die Ökonomie des KI-E-Mail-Kriegs",
    description:
      "Generative KI macht juristisch klingende Schreiben nahezu kostenlos. Lesen, Prüfen und Beantworten benötigen weiterhin teure menschliche Aufmerksamkeit.",
    eyebrow: "KI-verstärkte Konflikte",
    datePublished: "2026-07-13",
    dateLabel: "13. Juli 2026",
    readingTime: "8 Minuten Lesezeit",
    keywords: [
      "KI E-Mail Krieg",
      "KI-generierte Rechtskorrespondenz",
      "KI Workslop",
      "Konflikteskalation durch KI",
      "E-Mail Überlastung Streit",
      "Online Streitbeilegung",
    ],
    lead:
      "KI hat die Kosten für zehn Seiten juristisch klingender Argumente beinahe auf null gesenkt. Nicht gesunken sind die Kosten dafür, festzustellen, welche Tatsachen stimmen, welche Behauptungen relevant sind und was tatsächlich beantwortet werden muss. Dieses Ungleichgewicht verändert die Ökonomie von Konflikten.",
    keyPoint:
      "Der Absender spart Minuten. Der Empfänger erbt Stunden. In einem Streit ist das nicht nur ein Produktivitätsproblem – es kann zum Eskalationsmechanismus werden.",
    sections: [
      {
        title: "Eine neue Kostenasymmetrie",
        paragraphs: [
          "Vor generativer KI verursachte ein langer, professioneller Rechtsbrief auch auf Seiten seines Verfassers erhebliche Kosten. Jemand musste den Sachverhalt untersuchen, die Chronologie ordnen, Argumente auswählen und das Schreiben ausformulieren. Heute lässt sich der Anschein dieser Arbeit in wenigen Minuten erzeugen.",
          "Der Empfänger kann das Ergebnis nicht gefahrlos ignorieren, nur weil KI beteiligt war. Anwälte, Arbeitgeber, Lieferanten, Versicherer oder frühere Geschäftspartner müssen möglicherweise jede Behauptung identifizieren, jedes Datum prüfen, jede Rechtsquelle kontrollieren und entscheiden, welcher Punkt die rechtliche oder wirtschaftliche Lage verändert. Die Kosten des Produzierens brechen ein; die Kosten verantwortungsvoller Prüfung bleiben.",
        ],
      },
      {
        title: "Von Workslop zur Streitkorrespondenz",
        paragraphs: [
          "BetterUp und das Stanford Social Media Lab nennen KI-generierte Arbeit, die fertig aussieht, die eigentliche Denk- und Aufräumarbeit aber auf andere verlagert, „Workslop“. In ihrer Befragung von 1.150 vollzeitbeschäftigten US-Büroangestellten im September 2025 gaben 40 Prozent an, im Vormonat Workslop erhalten zu haben. Die Befragten schätzten durchschnittlich zwei Stunden zur Bereinigung eines Vorfalls und monatliche Kosten von 186 US-Dollar pro Beschäftigtem.",
          "Diese Zahlen betreffen die Arbeitswelt allgemein, nicht speziell Rechtsstreitigkeiten. Der Verlagerungsmechanismus ist jedoch derselbe. Eine polierte Oberfläche kann fehlenden Kontext, erfundene Details, doppelte Argumente oder ungeprüfte Schlussfolgerungen verbergen. Im normalen Arbeitsablauf entsteht Nacharbeit; im Streit entstehen Prüfungsrisiko, Verteidigungskosten und der Druck, ebenso umfangreich zu antworten.",
        ],
      },
      {
        title: "Warum Streitigkeiten den Aufwand verstärken",
        paragraphs: [
          "Konflikte machen Empfänger vorsichtig. Eine sechsseitige Beschwerde enthält vielleicht nur drei wesentliche Tatsachen – doch das weiß der Empfänger erst, nachdem jemand alle sechs Seiten gelesen hat. Eine erfundene Gerichtsentscheidung kann trotzdem eine Datenbanksuche erfordern. Ein vager Vorwurf kann die Durchsicht monatelanger Nachrichten und Rechnungen auslösen.",
          "Branchenberichte beschreiben inzwischen Mandanten, die Anwälten umfangreiche KI-generierte Fragen, Strategien und Dokumente schicken und dadurch mehr statt weniger Prüfungsarbeit verursachen. Die Law Society Gazette spricht von einem wachsenden „AI slop“-Problem vor Gerichten, weil plausibel klingende, aber unzuverlässige Eingaben dennoch von Richtern und Anwälten bearbeitet werden müssen.",
        ],
        bullets: [
          "Mehr Wörter erzeugen mehr zu überprüfende Behauptungen.",
          "Formaler Ton lässt schwache Argumente autoritativer erscheinen.",
          "Jede Antwort wird zum Ausgangsmaterial der nächsten KI-Gegenantwort.",
          "Menschliche Aufmerksamkeit bleibt die knappe und teure Ressource.",
        ],
      },
      {
        title: "Die KI-gegen-KI-Eskalationsschleife",
        paragraphs: [
          "Sobald beide Seiten KI einsetzen, nähern sich die Grenzkosten einer weiteren Runde null. Eine Partei erzeugt eine umfassende Antwort. Die andere lässt ihr Modell Lücken, Widersprüche und stärkere Formulierungen suchen. Dieses Ergebnis geht zurück an das erste Modell, das neue Einwände entdeckt. Jede Runde wirkt für sich vernünftig; zusammen bilden sie eine negative Endlosschleife.",
          "Forschung zu schwierigen E-Mails am Arbeitsplatz zeigt, dass LLM-unterstützte Texte formeller und empathischer sein können und dass die Kombination Mensch plus KI in manchen Szenarien besser abschneidet als beide allein. Das Problem lautet daher nicht „KI-Schreiben ist immer schlecht“. Das Problem ist Generierung ohne Verantwortung für Relevanz, Richtigkeit, Verhältnismäßigkeit und Abschluss.",
        ],
      },
      {
        title: "Nicht jede lange KI-unterstützte Nachricht ist Missbrauch",
        paragraphs: [
          "Verbraucher, Arbeitnehmer oder kleine Unternehmen nutzen KI möglicherweise, weil professionelle Hilfe zu teuer ist, weil sie in einer Fremdsprache schreiben oder weil sie eine komplexe Geschichte ordnen müssen. Länge allein beweist keine Bösgläubigkeit, und der Einsatz von KI darf einen Streit niemals automatisch gegen den Nutzer entscheiden.",
          "Die faire Frage ist funktional: Nennt die Eingabe überprüfbare Tatsachen, relevante Beweise und ein konkretes gewünschtes Ergebnis? Werden Manipulation, erfundene Inhalte oder bewusste Mengentaktiken behauptet, müssen zuerst Urheberschaft und Kontext geklärt werden; die betroffene Partei muss Gelegenheit zur Erklärung erhalten.",
        ],
      },
      {
        title: "Eine bessere Antwort als weitere zwanzig Seiten",
        paragraphs: [
          "Die Antwort auf Korrespondenzinflation ist kein Verbot nützlicher Schreibwerkzeuge. Sie ist eine andere Kommunikationsarchitektur. Ein Streitverfahren sollte eine Chronologie extrahieren, Behauptungen von Beweisen trennen, das tatsächlich gewünschte Ergebnis jeder Partei feststellen und Tatsachenfragen schließen, sobald die Akte vollständig ist.",
          "din.org nennt diese Kategorie den KI-E-Mail-Krieg: einen Konflikt, in dem mehr Sprache fast nichts kostet, eine verlässliche Entscheidung aber teuer bleibt. Strukturierte Online-Streitbeilegung soll Umfang nicht belohnen, sondern beide Seiten zu einer endlichen, prüfbaren Akte und einem konkreten Vergleichspfad führen.",
        ],
      },
    ],
    sources: [
      {
        source: "BetterUp Labs & Stanford Social Media Lab",
        title: "Workslop: The Hidden Cost of AI-Generated Busywork",
        url: "https://www.betterup.com/workslop",
        note: "Originalseite der Untersuchung und Methodik hinter den Workslop-Zahlen.",
      },
      {
        source: "Law Society Gazette",
        title: "AI slop — law’s quiet epidemic",
        url: "https://www.lawgazette.co.uk/news-focus/in-depth-ai-slop-laws-quiet-epidemic/5127215.article",
        note: "Bericht über KI-generiertes Material bei Anwälten und Gerichten.",
      },
      {
        source: "Reuters Legal",
        title: "The evolution of AI in lawyer-client relations and legal practice",
        url: "https://www.reuters.com/legal/legalindustry/evolution-ai-lawyer-client-relations-legal-practice--pracin-2026-05-05/",
        note: "Anwaltliche Analyse des zusätzlichen Prüfaufwands durch KI-Material von Mandanten.",
      },
      {
        source: "Financial Times",
        title: "Clients’ barrage of AI-generated queries risks pushing up lawyers’ fees",
        url: "https://www.ft.com/content/744d2c77-a34e-4ca0-9f0e-ce8cdcdee483",
        note: "Branchenbericht über die Folgen der Prüfkosten für Rechtsdienstleistungen.",
      },
      {
        source: "Nguyen, Fu, West, Holtzman & Tan",
        title: "Moral Mazes in the Era of LLMs",
        url: "https://arxiv.org/abs/2603.20231",
        note: "Vergleich menschlicher, KI-generierter und hybrider E-Mails in schwierigen Arbeitssituationen.",
      },
    ],
    relatedSlug: "von-ki-workslop-zur-brauchbaren-fallakte",
    relatedLabel: "Weiter: Von KI-Workslop zur brauchbaren Fallakte",
  },
  {
    locale: "de",
    slug: "von-ki-workslop-zur-brauchbaren-fallakte",
    alternateSlug: "from-ai-workslop-to-a-usable-case-record",
    title: "Von KI-Workslop zur brauchbaren Fallakte",
    description:
      "Wie strukturierte Online-Streitbeilegung lange KI-generierte Korrespondenz in eine endliche Akte aus Tatsachen, Beweisen, Zeugen und Anträgen verwandelt.",
    eyebrow: "Ein besseres Verfahren entwerfen",
    datePublished: "2026-07-13",
    dateLabel: "13. Juli 2026",
    readingTime: "7 Minuten Lesezeit",
    keywords: [
      "strukturierte Streitbeilegung",
      "KI-generierte Beschwerde",
      "KI Workslop beantworten",
      "Online Streitbeilegung Ablauf",
      "Prompt Injection Beweismittel",
      "KI Rechtskorrespondenz",
    ],
    lead:
      "Die schlechteste Antwort auf eine zwanzigseitige KI-Beschwerde ist eine ebenso lange KI-Verteidigung. Ein brauchbares Streitverfahren tut etwas anderes: Es verwandelt Textmenge in eine endliche Akte, die beide Seiten prüfen und beantworten können.",
    keyPoint:
      "Teilnahme sollte nicht daran gemessen werden, wie viel Text eine Partei produziert. Entscheidend ist, ob die Akte die Tatsachen, Beweise, den gewünschten Ausgang und die notwendige Erwiderung enthält.",
    sections: [
      {
        title: "Mit Struktur beginnen, nicht mit Rhetorik",
        paragraphs: [
          "Direkte E-Mail-Kommunikation belohnt den letzten Verfasser und die längste Antwort. Strukturierte Aufnahme belohnt Vollständigkeit. Sie fragt, wer die Parteien sind, was wann geschehen ist, welche Tatsachen streitig sind, welche Beweise existieren und welches Ergebnis den Konflikt lösen würde.",
          "Die Geschichte einer Partei wird dadurch nicht verworfen, sondern beweisfähig geordnet. Chronologie wird von Argumentation getrennt, Dokumente von Beschreibungen und vertrauliche Vergleichsbereitschaft von Material, das mit der Gegenseite geteilt werden muss.",
        ],
      },
      {
        title: "Jeder Partei einen privaten Kanal geben",
        paragraphs: [
          "Frühe Lösungen hängen oft von Informationen ab, die niemand in eine konfrontative Gruppen-E-Mail schreibt: Unsicherheit, wirtschaftliche Prioritäten oder die kleinste Veränderung, die für einen Vergleich ausreichen würde. Private Aufnahme erlaubt beiden Seiten, diese Interessen zu erklären, ohne ihre gesamte Verhandlungsposition offenzulegen.",
          "Privatsphäre darf jedoch nicht zu geheimen Beweisen führen. Die Gegenseite muss Dokumente, Zeugendaten und wesentliche Behauptungen sehen und beantworten können, auf die sich ein Vorschlag oder eine Entscheidung stützt. Die Aufgabe besteht darin, offene Vergleichsgespräche privat zu halten und gleichzeitig eine gemeinsame, bestreitbare Fallakte aufzubauen.",
        ],
      },
      {
        title: "Datei speichern und Prüfstatus offenlegen",
        paragraphs: [
          "Beweise kommen in unbequemen Formaten: PDFs, Word-Dateien, Fotos, Videos, Audio, alte Dokumentformate und ZIP-Archive. Ein verlässliches System bewahrt das Original, extrahiert den lesbaren Inhalt und informiert den Absender, wenn eine Datei nicht geöffnet oder geprüft werden konnte.",
          "Diese Unterscheidung ist wesentlich. „Gespeichert“ bedeutet nicht „verifiziert“. Ein aus einem Bild erzeugtes Transkript beweist nicht die Echtheit des Bildes. Ein aus einem ZIP extrahiertes Dokument ist nicht automatisch relevant. Beide Parteien benötigen Zugriff auf dieselbe Datei und eine klare Angabe ihres Prüfstatus.",
        ],
      },
      {
        title: "Anweisungen in Beweismitteln als Beweismittel behandeln",
        paragraphs: [
          "KI-gestützte Verfahren erhalten einen neuen adversarialen Input: Eine Nachricht oder Anlage kann dem Modell befehlen, Regeln zu ignorieren, die Rolle zu wechseln, private Inhalte offenzulegen oder für eine Partei zu entscheiden. Dieser Text darf niemals zur Anweisung an das Streitbeilegungssystem werden.",
          "Das sichere Muster trennt vertrauenswürdige Systemregeln von nicht vertrauenswürdigen Parteiinhalten, erkennt eindeutige Manipulationssignaturen, bewahrt das Original für das Audit und hält es aus späteren Modellkontexten fern. Ein Treffer darf der Gegenseite nicht automatisch den Sieg geben. Die Passage kann zitiert, weitergeleitet oder platziert worden sein; zuerst kommen Zuordnung, Kontext und Gelegenheit zur Erklärung.",
        ],
      },
      {
        title: "Relevante Zustimmung deterministisch machen",
        paragraphs: [
          "Ein KI-Modell kann Namen extrahieren oder eine Chronologie ordnen. Es sollte nicht erraten, ob eine Partei ein Verfahren eröffnen, einen Vergleich annehmen oder auf ein Recht verzichten wollte. Folgenreiche Schritte benötigen eine eindeutige Handlung: einen klaren Button, eine signierte Weisung oder ein exaktes Bestätigungswort.",
          "Das wirkt weniger gesprächig als eine KI, die Absichten interpretiert, ist aber besser auditierbar. In der Streitbeilegung muss Mehrdeutigkeit eine Rückfrage auslösen, keine irreversible Statusänderung.",
        ],
      },
      {
        title: "Akte schließen und auf ein Ergebnis zusteuern",
        paragraphs: [
          "Ein E-Mail-Krieg besitzt keinen natürlichen Endpunkt. Ein Verfahren braucht einen. Jede Partei sollte gefragt werden, ob weitere Beweise oder Zeugen existieren, eine angemessene Frist erhalten und wissen, wann ihre Seite der Akte geschlossen wird.",
          "Sobald die wesentlichen Punkte feststehen, kann das System konkrete Bedingungen vorschlagen: Wer tut was, bis wann, für welchen Betrag und welche Ansprüche nach Erfüllung erledigt sind. Scheitert der Vergleich, muss jede Einschätzung oder Entscheidung die tatsächliche Akte zitieren – nicht Selbstbewusstsein oder Umfang des Textes.",
        ],
      },
      {
        title: "Wo menschliches Urteil unverzichtbar bleibt",
        paragraphs: [
          "Struktur und KI können Sortierkosten senken, Widersprüche sichtbar machen und einen Fall lesbar machen. Sie beseitigen keine Fragen zu Glaubwürdigkeit, Zwang, Verhältnismäßigkeit, anwendbarem Recht oder Vollstreckbarkeit. Entscheidungen mit großen Auswirkungen benötigen nachvollziehbare Gründe und einen sinnvollen Weg zur menschlichen Überprüfung.",
          "Das Ziel ist nicht, Konflikt schneller zu automatisieren. Es ist zu verhindern, dass Automatisierung mehr Konflikt produziert, als Menschen wirtschaftlich lösen können.",
        ],
      },
    ],
    sources: [
      {
        source: "OWASP GenAI Security Project",
        title: "LLM01:2025 Prompt Injection",
        url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/",
        note: "Sicherheitshinweise zu direkter, indirekter und multimodaler Prompt Injection sowie zu praktikablen Schutzmaßnahmen.",
      },
      {
        source: "BetterUp Labs & Stanford Social Media Lab",
        title: "Workslop: The Hidden Cost of AI-Generated Busywork",
        url: "https://www.betterup.com/workslop",
        note: "Untersuchung dazu, wie scheinbar fertige KI-Ausgaben Arbeit auf Empfänger verlagern.",
      },
      {
        source: "Alexander von Humboldt Institut für Internet und Gesellschaft",
        title: "The unintended consequences of writing your emails with AI",
        url: "https://www.hiig.de/en/unintended-consequences-of-ai-written-emails/",
        note: "Analyse von Nuance, Verbindung und Kommunikationsfähigkeit bei KI-unterstützter E-Mail.",
      },
      {
        source: "Law Society Gazette",
        title: "AI slop — law’s quiet epidemic",
        url: "https://www.lawgazette.co.uk/news-focus/in-depth-ai-slop-laws-quiet-epidemic/5127215.article",
        note: "Warum plausible, aber unzuverlässige Inhalte Rechtsinstitutionen dennoch Arbeit verursachen.",
      },
      {
        source: "Nguyen, Fu, West, Holtzman & Tan",
        title: "Moral Mazes in the Era of LLMs",
        url: "https://arxiv.org/abs/2603.20231",
        note: "Hinweise darauf, dass sorgfältiges hybrides Schreiben besser als unkontrollierte Automatisierung sein kann.",
      },
    ],
    relatedSlug: "oekonomie-des-ki-email-kriegs",
    relatedLabel: "Lesen: Die Ökonomie des KI-E-Mail-Kriegs",
  },
];

export const editorialArticles: Record<ArticleLocale, EditorialArticle[]> = {
  en: english,
  de: german,
};

export function getEditorialArticle(locale: ArticleLocale, slug: string) {
  return editorialArticles[locale].find((article) => article.slug === slug) ?? null;
}
