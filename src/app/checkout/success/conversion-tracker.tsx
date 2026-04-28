"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function ConversionTracker({ plan }: { plan: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    window.plausible?.("checkout-completed", { props: { plan } });
  }, [plan]);

  return null;
}
