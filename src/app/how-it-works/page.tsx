import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — din.org",
  description:
    "Nine steps from dispute to resolution. Learn how din.org's AI court process works — from filing to ruling.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      n: "01",
      title: "File your case",
      body: "Describe your dispute in plain language — who is involved, what happened, and what outcome you are seeking. The court assigns a case number and a private workspace.",
      hover: "\"I filed my case in 10 minutes. No forms, no jargon — just plain English.\" — Early tester, freelance designer",
    },
    {
      n: "02",
      title: "Notice to the other party",
      body: "Before anything else, din.org notifies the other side. Both parties must agree to participate. If the other party declines, the process cannot proceed — participation is voluntary.",
      hover: "Both sides must opt in. This ensures fairness from the very first step — no one is forced into proceedings.",
    },
    {
      n: "03",
      title: "Choose your AI lawyer",
      body: "Each party selects an AI lawyer from within the system. Your AI lawyer guides you through the entire process — helping you prepare your arguments, organize evidence, and understand the procedure.",
      hover: "\"The AI lawyer helped me organize months of emails into a clear timeline. I felt prepared for the first time.\" — Beta user, small business owner",
    },
    {
      n: "04",
      title: "Submit evidence",
      body: "Upload documents, contracts, photos, audio, video, or chat logs. Your AI lawyer helps you identify what matters and structure your submission for maximum clarity.",
      hover: "Supports PDFs, images, audio, video, and chat exports. Your AI lawyer flags what strengthens your case.",
    },
    {
      n: "05",
      title: "Live cross-examination",
      body: "This is a core feature of din.org. All participants — plaintiff, defendant, and witnesses — appear simultaneously by video. An AI judge conducts a real-time cross-examination. Because everyone is heard at the same time, there is very little chance to cheat or fabricate testimony.",
      hover: "\"Having everyone on video at the same time made it impossible to hide the truth. That changed everything.\" — Beta user, contract dispute",
    },
    {
      n: "06",
      title: "Case evaluation",
      body: "After cross-examination, each party receives a confidential AI evaluation of their case — an honest assessment of how strong their position is. Based on this, each party can choose to continue to a ruling or withdraw. This step encourages fair settlements and avoids unnecessary proceedings.",
      hover: "A private reality check. Many disputes settle here — saving both parties time, cost, and stress.",
    },
    {
      n: "07",
      title: "Arbitration proposal",
      body: "If both parties continue, the AI judge proposes an arbitration solution. If both parties accept the proposal, the case is resolved immediately and the agreement is binding.",
      hover: "\"The proposal was so fair that both of us accepted it on the spot. Case closed in under a day.\" — Beta user, payment dispute",
    },
    {
      n: "08",
      title: "Ruling",
      body: "If either party rejects the arbitration proposal, the AI judge issues a formal ruling — a written, cited decision based on the evidence and cross-examination. The judge is intentionally AI: no human intervention, but human oversight at every stage.",
      hover: "Every ruling is fully cited with legal reasoning. No black box — you see exactly why the decision was made.",
    },
    {
      n: "09",
      title: "Second ruling with a human",
      body: "Disagree with the AI ruling? You can request a second ruling that involves human arbiters. This ensures that every party has the option of human judgment as a final safeguard.",
      hover: "\"Knowing I could appeal to human arbiters gave me the confidence to trust the process.\" — Beta user, international trade dispute",
    },
  ];

  return (
    <>
      <section className="reveal px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            How it works
          </p>
          <h1 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            Nine steps from dispute to resolution.
          </h1>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl text-bone/80">
            din.org mirrors the structure of a real court — notice, counsel,
            evidence, cross-examination, ruling — but replaces months of
            waiting with hours of focused work. The judge is AI. No human
            intervention, but always human oversight.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="space-y-4">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group grid grid-cols-12 gap-6 rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:bg-accent hover:border-accent transition-all duration-200 cursor-default"
            >
              <p className="col-span-12 md:col-span-2 text-accent text-2xl md:text-3xl font-bold leading-none digital-num group-hover:text-ink transition-colors duration-200">
                {s.n}
              </p>
              <h3 className="col-span-12 md:col-span-4 display text-2xl md:text-4xl font-semibold group-hover:text-ink transition-colors duration-200">
                {s.title}
              </h3>
              <div className="col-span-12 md:col-span-6 relative overflow-hidden">
                <p className="text-bone/75 text-base md:text-lg group-hover:opacity-0 transition-opacity duration-200">
                  {s.body}
                </p>
                <p className="absolute inset-0 text-ink text-base md:text-lg font-medium italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {s.hover}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
