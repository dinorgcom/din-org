"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Primary links — shown as pills on desktop
const primaryLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/mission", label: "Mission" },
];

// Secondary links — tucked into the "More" dropdown
const moreLinks = [
  { href: "/use-cases", label: "Use cases" },
  { href: "/news", label: "News" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close More on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

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
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex-1 flex items-center px-4 py-2 rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative flex shrink-0">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onMouseEnter={() => setMoreOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bone/10 backdrop-blur-xl text-xs font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
              aria-haspopup="true"
              aria-expanded={moreOpen}
            >
              More
              <span className={`text-[10px] transition-transform ${moreOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {moreOpen && (
              <div
                onMouseLeave={() => setMoreOpen(false)}
                className="absolute top-full right-0 mt-1.5 min-w-[180px] flex flex-col gap-1 p-1.5 rounded-lg bg-ink/95 backdrop-blur-xl border border-bone/10 shadow-xl"
              >
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className="px-3 py-2 rounded text-xs font-medium text-bone/80 hover:bg-accent hover:text-ink transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Login */}
        <Link
          href="/login"
          className="hidden md:flex items-center gap-2 rounded-lg bg-bone/10 backdrop-blur-xl px-4 py-2 text-xs font-medium text-bone hover:bg-bone/20 transition-colors shrink-0"
        >
          Login
        </Link>

        {/* Early access — yellow CTA box */}
        <Link
          href="/early-access"
          className="hidden md:flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-ink hover:bg-accent-hot transition-colors shrink-0"
        >
          Early access
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
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg bg-bone/10 backdrop-blur-xl text-sm font-medium text-bone/90 hover:bg-white hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          {/* More section — flat on mobile, visually subdued */}
          <div className="flex flex-col gap-1.5 pt-1.5 mt-1 border-t border-bone/10">
            {moreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3 rounded-lg bg-bone/5 backdrop-blur-xl text-sm font-medium text-bone/70 hover:bg-white hover:text-ink transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/early-access"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-sm font-medium text-ink hover:bg-accent-hot transition-colors"
          >
            Early access
            <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </header>
  );
}
