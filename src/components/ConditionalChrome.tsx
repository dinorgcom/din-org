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
  const isTest = pathname.startsWith("/test");
  const hideChrome = isDashboard || isLogin || isInvitation || isSession || isVerification || isTest;

  return (
    <>
      {!hideChrome && <Navbar />}
      <main id="main-content">{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}
