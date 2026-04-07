import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — din.org",
  description: "Terms of Service for the din.org AI-powered arbitration platform.",
};

export default function TermsPage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          Legal
        </p>
        <h1 className="display text-5xl md:text-7xl font-semibold mb-4">
          Terms of Service
        </h1>
        <p className="text-bone/60 mb-16">Last Updated: February 2026</p>

        <div className="space-y-12 text-bone/80 text-base md:text-lg leading-relaxed">
          <Section n="1" title="Introduction">
            <p>
              Welcome to DIN.ORG International AI Court (&quot;Platform&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of
              Service govern your use of our AI-powered arbitration platform.
            </p>
            <p className="mt-4">
              By accessing or using the Platform, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use the
              Platform.
            </p>
          </Section>

          <Section n="2" title="Eligibility and Geographic Restrictions">
            <p className="font-semibold text-accent">IMPORTANT RESTRICTION:</p>
            <p className="mt-2">
              DIN.ORG is headquartered in Israel. In accordance with our
              operational policies and to maintain neutrality, parties located in
              Israel (claimants or respondents) are NOT eligible to use the
              Platform for dispute resolution.
            </p>
            <p className="mt-4">To use this Platform, you must:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Be at least 18 years of age or the age of legal majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be located in Israel (for parties to disputes)</li>
              <li>Represent an entity with proper authorization if acting on behalf of a business</li>
              <li>Provide accurate and complete registration information</li>
            </ul>
          </Section>

          <Section n="3" title="Platform Services">
            <p>DIN.ORG provides:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>AI-assisted case evaluation and analysis</li>
              <li>Secure document management and evidence submission</li>
              <li>Case management tools for arbitration proceedings</li>
              <li>Communication channels between parties</li>
              <li>Arbitrator assignment and scheduling services</li>
              <li>AI-generated expertise and resolution suggestions</li>
            </ul>
          </Section>

          <Section n="4" title="Arbitration Agreement">
            <p>By filing a case on this Platform, all parties agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Resolve their dispute through binding arbitration in accordance with DIN.ORG rules</li>
              <li>Accept the Platform&apos;s procedures and timelines</li>
              <li>Waive their right to litigation in traditional courts for disputes covered by the arbitration agreement</li>
              <li>Accept decisions rendered by appointed arbitrators as final and binding</li>
              <li>Cooperate in good faith throughout the arbitration process</li>
            </ul>
          </Section>

          <Section n="5" title="Token System and Payments">
            <p>The Platform operates on a token-based payment system:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Tokens must be purchased to perform certain actions (filing cases, submitting evidence, adding witnesses)</li>
              <li>Token prices are displayed clearly before purchase</li>
              <li>All token purchases are final and non-refundable</li>
              <li>Unused tokens remain in your account for future use</li>
              <li>Token costs for specific actions may be adjusted with reasonable notice</li>
              <li>Payment processing is handled securely through Stripe</li>
            </ul>
          </Section>

          <Section n="6" title="User Responsibilities">
            <p>Users agree to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide truthful, accurate, and complete information</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Submit only authentic evidence and documentation</li>
              <li>Respect deadlines and procedural requirements</li>
              <li>Communicate professionally with all parties</li>
              <li>Not misuse or attempt to manipulate the Platform or AI systems</li>
              <li>Not upload malicious files or content</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </Section>

          <Section n="7" title="AI Technology Disclaimer">
            <p>
              Our Platform utilizes artificial intelligence to assist in case
              evaluation, evidence analysis, and generating resolution
              suggestions:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>AI-generated suggestions are advisory and not legally binding</li>
              <li>Final decisions are made by qualified human arbitrators</li>
              <li>AI analysis should not be solely relied upon for legal decisions</li>
              <li>We continuously improve AI accuracy but cannot guarantee perfection</li>
              <li>Users should review all AI-generated content carefully</li>
            </ul>
          </Section>

          <Section n="8" title="Confidentiality and Privacy">
            <p>
              We are committed to maintaining the confidentiality of your
              arbitration proceedings:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>All case information is stored securely with bank-level encryption</li>
              <li>Access is restricted to authorized parties and assigned arbitrators</li>
              <li>Personal data is processed in accordance with international privacy laws</li>
              <li>We do not share case details with third parties except as required by law</li>
              <li>Users can mark evidence as confidential for additional protection</li>
            </ul>
          </Section>

          <Section n="9" title="Intellectual Property">
            <p>
              All Platform content, features, and functionality are owned by
              DIN.ORG and protected by international copyright, trademark, and
              other intellectual property laws.
            </p>
          </Section>

          <Section n="10" title="Limitation of Liability">
            <p>To the maximum extent permitted by law:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>DIN.ORG is not liable for the outcome of arbitration proceedings</li>
              <li>We provide the Platform &quot;as is&quot; without warranties of any kind</li>
              <li>We are not responsible for decisions made by arbitrators</li>
              <li>Our liability is limited to the amount paid by you in the past 12 months</li>
              <li>We are not liable for indirect, consequential, or punitive damages</li>
            </ul>
          </Section>

          <Section n="11" title="Termination">
            <p>We reserve the right to suspend or terminate accounts that:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Violate these Terms</li>
              <li>Provide false information</li>
              <li>Engage in abusive or fraudulent behavior</li>
              <li>Fail to comply with arbitration procedures</li>
              <li>Are located in restricted jurisdictions (including Israel)</li>
            </ul>
          </Section>

          <Section n="12" title="Governing Law and Jurisdiction">
            <p>
              These Terms are governed by international arbitration principles
              and the laws of the State of Israel. Any disputes arising from
              these Terms shall be resolved through arbitration.
            </p>
          </Section>

          <Section n="13" title="Changes to Terms">
            <p>
              We may modify these Terms at any time. Material changes will be
              communicated to users via email or Platform notification. Continued
              use of the Platform after changes constitutes acceptance.
            </p>
          </Section>

          <Section n="14" title="Contact Information">
            <p>
              For questions about these Terms or the Platform, please contact us
              at:
            </p>
            <p className="mt-4 font-medium text-bone">
              DIN.ORG International AI Court
              <br />
              Email: legal@din.org
              <br />
              Website: www.din.org
            </p>
          </Section>

          <div className="border-t border-bone/10 pt-8 text-sm text-bone/50">
            By using the DIN.ORG Platform, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service.
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-bone mb-4">
        {n}. {title}
      </h2>
      {children}
    </div>
  );
}
