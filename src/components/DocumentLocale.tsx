"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function localeForPath(pathname: string) {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

export function DocumentLocale() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.lang = localeForPath(pathname);
  }, [pathname]);

  return null;
}
