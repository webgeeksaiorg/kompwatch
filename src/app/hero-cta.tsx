"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const VARIANTS = {
  A: "Start Monitoring Free",
  B: "Watch Your First Competitor",
} as const;

type Variant = keyof typeof VARIANTS;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function getVariant(): Variant {
  if (typeof window === "undefined") return "A";
  const stored = localStorage.getItem("hero_cta_variant");
  if (stored === "A" || stored === "B") return stored;
  const variant: Variant = Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem("hero_cta_variant", variant);
  return variant;
}

export function HeroCTA() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    setVariant(getVariant());
  }, []);

  const handleClick = () => {
    window.plausible?.("Hero CTA Click", {
      props: { variant: variant ?? "A" },
    });
  };

  // Render default text during SSR / before hydration to avoid layout shift
  const label = variant ? VARIANTS[variant] : VARIANTS.A;

  return (
    <Link
      href="/login"
      onClick={handleClick}
      className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
    >
      {label}
    </Link>
  );
}
