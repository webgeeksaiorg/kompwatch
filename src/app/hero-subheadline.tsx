"use client";

import { useEffect, useState } from "react";

const VARIANTS = {
  A: "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed digests delivered to your inbox. Stop manually checking competitor websites.",
  B: "Crayon costs more than a junior hire. KompWatch costs $49/mo — and you get the same answer.",
} as const;

type Variant = keyof typeof VARIANTS;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function getVariant(): Variant {
  if (typeof window === "undefined") return "A";
  const stored = localStorage.getItem("hero_subheadline_variant");
  if (stored === "A" || stored === "B") return stored;
  const variant: Variant = Math.random() < 0.5 ? "A" : "B";
  localStorage.setItem("hero_subheadline_variant", variant);
  return variant;
}

export function HeroSubheadline() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = getVariant();
    setVariant(v);
    window.plausible?.("Hero Subheadline View", {
      props: { variant: v },
    });
  }, []);

  const text = variant ? VARIANTS[variant] : VARIANTS.A;

  return (
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
      {text}
    </p>
  );
}
