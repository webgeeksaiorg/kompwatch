"use client";

import { useEffect, useState } from "react";

const VARIANTS = {
  A: {
    before: "Know when competitors ",
    highlight: "change anything",
  },
  B: {
    before: "Clean signal from ",
    highlight: "every competitor move",
  },
  C: {
    before: "CI for teams ",
    highlight: "without a CI team",
  },
} as const;

type Variant = keyof typeof VARIANTS;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function getVariant(): Variant {
  if (typeof window === "undefined") return "A";
  const stored = localStorage.getItem("hero_headline_variant");
  if (stored === "A" || stored === "B" || stored === "C") return stored;
  const roll = Math.random();
  const variant: Variant = roll < 1 / 3 ? "A" : roll < 2 / 3 ? "B" : "C";
  localStorage.setItem("hero_headline_variant", variant);
  return variant;
}

export function HeroHeadline() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = getVariant();
    setVariant(v);
    window.plausible?.("Hero Headline View", {
      props: { variant: v },
    });
  }, []);

  const text = variant ? VARIANTS[variant] : VARIANTS.A;

  return (
    <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
      {text.before}
      <span className="text-brand-600">{text.highlight}</span>
    </h1>
  );
}
