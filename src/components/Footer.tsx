import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 md:px-6 pb-6">
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-accent text-ink">
        <div className="grain absolute inset-0 opacity-40" />
        <div className="relative px-8 md:px-16 pt-16 md:pt-24 pb-10 md:pb-14">
          <h2 className="display text-5xl md:text-8xl font-semibold max-w-4xl">
            Justice, without the wait.
          </h2>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                din.org
              </p>
              <p className="text-base max-w-sm opacity-80">
                A complete AI-based court. Open to everyone, everywhere.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                Navigate
              </p>
              <ul className="space-y-2 text-base">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:underline">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:underline">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/file-a-case" className="hover:underline">
                    File a case
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                Investors
              </p>
              <ul className="space-y-2 text-base">
                <li>
                  <Link href="/investors" className="hover:underline">
                    Why invest
                  </Link>
                </li>
                <li>
                  <a href="mailto:investors@din.org" className="hover:underline">
                    investors@din.org
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-60 mb-4">
                Contact
              </p>
              <ul className="space-y-2 text-base">
                <li>hello@din.org</li>
                <li>Press · Partnerships</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-ink/15 pt-6 text-sm opacity-70">
            <p>© {new Date().getFullYear()} din.org — All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
