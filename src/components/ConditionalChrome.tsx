"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname.startsWith("/login");
  const isInvitation = pathname.startsWith("/invitation");
  const isSession = pathname.startsWith("/sessions");
  const isVerification = pathname.startsWith("/verification");
  // Pages in the new Harvey-tonality design system bring their own
  // self-contained header + footer baked into the page. The main-site
  // Navbar/Footer must be suppressed on those routes. As more pages are
  // ported, add them here.
  const isHarveyPage =
    pathname === "/" ||
    pathname === "/de" ||
    pathname === "/tribunal" ||
    pathname === "/thanks" ||
    pathname === "/agents" ||
    pathname === "/de/agenten";
  const isStandaloneLegalPage =
    pathname === "/terms" ||
    pathname === "/de/agb" ||
    pathname === "/privacy" ||
    pathname === "/de/datenschutz";
  const hideChrome =
    isDashboard ||
    isLogin ||
    isInvitation ||
    isSession ||
    isVerification ||
    isStandaloneLegalPage ||
    isHarveyPage;

  return (
    <>
      {!hideChrome && <Navbar />}
      <main id="main-content">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
