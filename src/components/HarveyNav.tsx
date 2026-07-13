"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

/**
 * Shared top bar for the Harvey-tonality pages (/ and /tribunal).
 * Desktop: inline link row. Mobile: hamburger with full-screen overlay —
 * the server-rendered pages previously had no navigation at all below md.
 */
export function HarveyNav({
  links,
  cta,
  homeHref = "/",
  menuLabels = { open: "Open menu", close: "Close menu" },
}: {
  links: NavLink[];
  cta: NavLink;
  homeHref?: string;
  menuLabels?: { open: string; close: string };
}) {
  const [open, setOpen] = useState(false);

  const isAnchor = (href: string) => href.startsWith("#");
  const renderLink = (
    l: NavLink,
    className: string,
    style: React.CSSProperties,
    onClick?: () => void
  ) =>
    isAnchor(l.href) || l.href.startsWith("http") ? (
      <a key={l.href + l.label} href={l.href} className={className} style={style} onClick={onClick}>
        {l.label}
      </a>
    ) : (
      <Link key={l.href + l.label} href={l.href} className={className} style={style} onClick={onClick}>
        {l.label}
      </Link>
    );

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 md:px-10 py-6">
        <Link
          href={homeHref}
          className="d-display text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: "var(--d-bone)" }}
        >
          din.org
        </Link>

        {/* Desktop */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ color: "rgba(245,241,234,0.75)" }}
        >
          {links.map((l) =>
            renderLink(l, "hover:opacity-100 transition-opacity", {})
          )}
          {renderLink(
            cta,
            "rounded-full border px-5 py-2 transition-colors",
            {
              borderColor: "rgba(245,241,234,0.3)",
              color: "var(--d-bone)",
            }
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? menuLabels.close : menuLabels.open}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
        >
          <span
            className="block h-px w-6 transition-transform duration-200"
            style={{
              background: "var(--d-bone)",
              transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 transition-transform duration-200"
            style={{
              background: "var(--d-bone)",
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col"
          style={{ background: "rgba(20,19,15,0.97)" }}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href={homeHref}
              className="d-display text-xl tracking-tight"
              style={{ color: "var(--d-bone)" }}
              onClick={() => setOpen(false)}
            >
              din.org
            </Link>
            <button
              type="button"
              aria-label={menuLabels.close}
              onClick={() => setOpen(false)}
              className="flex flex-col items-center justify-center w-10 h-10"
            >
              <span
                className="block h-px w-6"
                style={{
                  background: "var(--d-bone)",
                  transform: "translateY(0.5px) rotate(45deg)",
                }}
              />
              <span
                className="block h-px w-6"
                style={{
                  background: "var(--d-bone)",
                  transform: "rotate(-45deg)",
                }}
              />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-10">
            {links.map((l) =>
              renderLink(
                l,
                "d-display text-3xl py-3",
                { color: "var(--d-bone)" },
                () => setOpen(false)
              )
            )}
            {renderLink(
              cta,
              "mt-8 inline-flex w-fit items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium",
              {
                borderColor: "rgba(245,241,234,0.4)",
                color: "var(--d-bone)",
              },
              () => setOpen(false)
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
