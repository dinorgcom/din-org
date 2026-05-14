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
  // The new decision-endpoint homepage ('/') has its own self-contained
  // header + footer baked into the page, so the main-site Navbar/Footer
  // must be suppressed there. The previous /tribunal homepage now lives
  // at /tribunal and continues to use the standard chrome.
  const isDecisionHome = pathname === "/";
  const hideChrome =
    isDashboard ||
    isLogin ||
    isInvitation ||
    isSession ||
    isVerification ||
    isDecisionHome;

  return (
    <>
      {!hideChrome && <Navbar />}
      <main id="main-content">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
