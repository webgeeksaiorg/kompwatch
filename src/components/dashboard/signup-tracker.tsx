"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function SignupTracker() {
  const fired = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (fired.current) return;
    const isNew = searchParams.get("new") === "1";
    if (isNew) {
      fired.current = true;
      window.plausible?.("signup", { props: { plan: "FREE" } });
    }
  }, [searchParams]);

  return null;
}
