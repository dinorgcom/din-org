import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-5">
            The AI Court · din.org
          </p>
          <h1 className="display text-[15vw] md:text-[8vw] leading-[0.9] font-semibold max-w-6xl">
            Justice,
            <br />
            at the speed
            <br />
            of thought.
          </h1>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 max-w-3xl">
            <p className="text-lg md:text-xl text-bone/80 max-w-xl">
              din.org is a complete AI-based court. File a case, present
              evidence, and receive a reasoned ruling — end to end.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://app.din.org/login"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors whitespace-nowrap"
              >
                Log in
              </Link>
              <Link
                href="/file-a-case"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-ink px-6 py-3 text-base font-medium hover:bg-accent-hot transition-colors whitespace-nowrap"
              >
                File a case
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — yellow block */}
      <section className="reveal bg-accent text-ink px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60 mb-6">
            What is din.org
          </p>
          <h2 className="display text-5xl md:text-8xl font-semibold max-w-5xl">
            A courtroom that never closes, never tires, and reads every
            document.
          </h2>
          <p className="mt-10 text-lg md:text-2xl max-w-3xl opacity-80">
            Traditional courts are slow, expensive, and out of reach for most
            people. din.org uses advanced reasoning models to hear disputes,
            weigh evidence, cite the law, and issue a written ruling — in hours,
            not years.
          </p>
        </div>
      </section>

      {/* PILLARS — dark grid */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16 md:mb-24">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            Pillars
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            Four principles, one court.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              n: "01",
              title: "AI judge, human oversight",
              body: "The judge is intentionally AI — no human intervention in the decision. But human oversight ensures validity at every stage.",
            },
            {
              n: "02",
              title: "Live cross-examination",
              body: "All participants appear by video at the same time. The AI cross-examines plaintiff, defendant, and witnesses simultaneously — very little chance to cheat.",
            },
            {
              n: "03",
              title: "AI lawyers guide you",
              body: "Each party chooses an AI lawyer within the system. It prepares your case, organizes evidence, and walks you through every step.",
            },
            {
              n: "04",
              title: "Two-stage resolution",
              body: "First, an arbitration proposal both sides can accept. If not, a formal ruling. Still disagree? Request a second ruling involving a human.",
            },
          ].map((p) => (
            <article
              key={p.n}
              className="rounded-3xl bg-ink-card p-8 md:p-12 border border-bone/15 hover:border-accent/40 transition-colors"
            >
              <p className="text-accent text-sm font-mono mb-6">{p.n}</p>
              <h3 className="display text-2xl md:text-4xl font-semibold mb-4">
                {p.title}
              </h3>
              <p className="text-bone/70 text-base md:text-lg">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="reveal border-y border-bone/10 px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "< 24h", v: "avg. ruling time" },
            { k: "100%", v: "reasoned decisions" },
            { k: "0 $", v: "filing fee" },
            { k: "∞", v: "hours of operation" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display text-4xl md:text-6xl font-semibold text-accent">
                {s.k}
              </p>
              <p className="mt-3 text-sm md:text-base uppercase tracking-wider text-bone/60">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="reveal px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-6xl mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-6">
            The process
          </p>
          <h2 className="display text-4xl md:text-7xl font-semibold max-w-4xl">
            From complaint to ruling.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            {
              step: "Step 1",
              title: "File & notify",
              body: "Describe your dispute. The other party is notified immediately — both must agree to participate.",
            },
            {
              step: "Step 2",
              title: "AI lawyer",
              body: "Choose an AI lawyer within the system. It guides you through evidence, arguments, and procedure.",
            },
            {
              step: "Step 3",
              title: "Cross-exam",
              body: "All parties and witnesses appear by video simultaneously. The AI judge cross-examines in real time.",
            },
            {
              step: "Step 4",
              title: "Ruling",
              body: "First an arbitration proposal. If rejected, a formal AI ruling. Still disagree? Request a human second ruling.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-3xl bg-ink-soft p-8 md:p-10 border border-bone/15"
            >
              <p className="text-accent text-xs uppercase tracking-widest mb-8">
                {s.step}
              </p>
              <h3 className="display text-3xl md:text-4xl font-semibold mb-4">
                {s.title}
              </h3>
              <p className="text-bone/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-base font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Read the full process
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
