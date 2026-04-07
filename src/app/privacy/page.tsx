import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — din.org",
  description: "Privacy Policy for the din.org AI-powered arbitration platform.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
          Legal
        </p>
        <h1 className="display text-5xl md:text-7xl font-semibold mb-4">
          Privacy Policy
        </h1>
        <p className="text-bone/60 mb-16">Last Updated: February 2026</p>

        <div className="space-y-12 text-bone/80 text-base md:text-lg leading-relaxed">
          <Section n="1" title="Data Controller">
            <p>
              DIN.ORG International AI Court (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is the data controller for personal data collected
              through our Platform. We are headquartered in Israel and comply
              with applicable international data protection laws.
            </p>
          </Section>

          <Section n="2" title="Information We Collect">
            <p>We collect the following categories of personal data:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Account information: name, email address, phone number</li>
              <li>Identity verification data: government-issued ID for participant verification</li>
              <li>Case data: documents, evidence, and communications submitted during arbitration</li>
              <li>Usage data: how you interact with the Platform, device information, IP address</li>
              <li>Payment data: processed securely through Stripe (we do not store card details)</li>
            </ul>
          </Section>

          <Section n="3" title="How We Use Your Data">
            <p>We use your personal data to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Provide and operate the arbitration platform</li>
              <li>Verify the identity of all participants</li>
              <li>Process payments and manage token balances</li>
              <li>Facilitate case proceedings and communication between parties</li>
              <li>Improve our AI models and platform performance</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send essential service communications</li>
            </ul>
          </Section>

          <Section n="4" title="Data Security">
            <p>
              We implement bank-level encryption and industry-standard security
              measures to protect your data:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and role-based permissions</li>
              <li>Secure infrastructure hosted in SOC 2 compliant data centers</li>
            </ul>
          </Section>

          <Section n="5" title="Data Sharing">
            <p>We do not sell your personal data. We share data only:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>With the other party and assigned arbitrators as necessary for case proceedings</li>
              <li>With payment processors (Stripe) to handle transactions</li>
              <li>With service providers who assist in operating the Platform, under strict confidentiality</li>
              <li>When required by law, regulation, or valid legal process</li>
            </ul>
          </Section>

          <Section n="6" title="Data Retention">
            <p>
              We retain your data for as long as necessary to fulfill the
              purposes described in this policy. Case records are retained for a
              minimum of 7 years to comply with legal and regulatory
              requirements. You may request deletion of your account data,
              subject to our retention obligations.
            </p>
          </Section>

          <Section n="7" title="Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at privacy@din.org.
            </p>
          </Section>

          <Section n="8" title="Cookies">
            <p>
              We use essential cookies to operate the Platform and optional
              analytics cookies to understand usage patterns. You can manage
              cookie preferences through your browser settings.
            </p>
          </Section>

          <Section n="9" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes via email or Platform notification.
            </p>
          </Section>

          <Section n="10" title="Contact">
            <p>For privacy-related questions, contact:</p>
            <p className="mt-4 font-medium text-bone">
              DIN.ORG International AI Court
              <br />
              Email: privacy@din.org
              <br />
              Website: www.din.org
            </p>
          </Section>
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
