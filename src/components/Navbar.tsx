"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/mission", label: "Mission" },
  { href: "/news", label: "News" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 md:p-3">
      <nav className="flex items-stretch gap-1.5">
        {/* Logo box */}
        <Link
          href="/"
          className="flex items-center justify-center rounded-lg bg-accent px-3 py-2 shrink-0"
        >
          <span className="display text-base md:text-lg font-bold tracking-tight text-ink leading-none">
            din<span className="font-normal">.org</span>
          </span>
        </Link>

        {/* Nav pill boxes — desktop */}
        <div className="hidden md:contents">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex-1 flex items-center px-4 py-2 rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* File a case — yellow CTA box */}
        <Link
          href="/file-a-case"
          className="hidden md:flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-ink hover:bg-accent-hot transition-colors shrink-0"
        >
          File a case
          <span aria-hidden>→</span>
        </Link>

        {/* Mobile spacer */}
        <div className="flex-1 md:hidden" />

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-bone/10 backdrop-blur-xl"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center w-5">
            <span
              className={`block h-0.5 w-full bg-bone transition-all duration-300 ${
                open ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-bone transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden mt-1.5 flex flex-col gap-1.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg bg-bone/10 backdrop-blur-xl text-sm font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/file-a-case"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-sm font-medium text-ink hover:bg-accent-hot transition-colors"
          >
            File a case
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </header>
  );
}
