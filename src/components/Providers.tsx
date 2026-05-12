"use client";

/**
 * Marketing-build Providers shim. The full local dev build wraps
 * children with next-auth's SessionProvider here. In production deploys
 * the dashboard isn't shipped, no page calls useSession(), and
 * next-auth isn't in the deployed package.json — so this stays a
 * pass-through. Restore the SessionProvider version locally for
 * dashboard dev.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
