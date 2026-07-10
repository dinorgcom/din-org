"use client";

import { useState } from "react";

// Small copy-to-clipboard pill used for the MCP connector URL.
export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (http, old browser) — select-and-copy
      // fallback via prompt keeps the value reachable.
      window.prompt("Copy the connector URL:", value);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-opacity hover:opacity-80"
      style={{ background: "var(--d-ink)", color: "var(--d-bone)" }}
      aria-live="polite"
    >
      {copied ? "Copied ✓" : "Copy URL"}
    </button>
  );
}
