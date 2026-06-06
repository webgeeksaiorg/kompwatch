"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  HERO_NO_DEMO_EXPERIMENT,
  type Variant as ABVariant,
} from "@/lib/ab";

const VARIANTS = {
  A: {
    before: "Competitive intel that ",
    highlight: "finds you",
  },
  B: {
    before: "Your AI agent for ",
    highlight: "competitive intelligence",
  },
  C: {
    before: "CI for teams ",
    highlight: "without a CI team",
  },
} as const;

const EXPERIMENT_COPY = {
  before: "No demo required. ",
  highlight: "Live in two minutes",
};

type PoolVariant = keyof typeof VARIANTS;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function getPoolVariant(): PoolVariant {
  if (typeof window === "undefined") return "A";
  const stored = localStorage.getItem("hero_headline_variant");
  if (stored === "A" || stored === "B" || stored === "C") return stored;
  const roll = Math.random();
  const variant: PoolVariant = roll < 1 / 3 ? "A" : roll < 2 / 3 ? "B" : "C";
  localStorage.setItem("hero_headline_variant", variant);
  return variant;
}

export function HeroHeadline() {
  const [text, setText] = useState<{ before: string; highlight: string } | null>(null);
  const [experimentVariant, setExperimentVariant] = useState<string>("A");

  useEffect(() => {
    const ab = assignVariantInBrowser(HERO_NO_DEMO_EXPERIMENT) ?? "A";
    setExperimentVariant(ab);

    if (ab === "B") {
      setText(EXPERIMENT_COPY);
      window.plausible?.("Hero Headline View", {
        props: { variant: "experiment-no-demo", experiment: HERO_NO_DEMO_EXPERIMENT },
      });
    } else {
      const pool = getPoolVariant();
      setText(VARIANTS[pool]);
      window.plausible?.("Hero Headline View", {
        props: { variant: pool },
      });
    }
  }, []);

  const display = text ?? VARIANTS.A;

  return (
    <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
      {display.before}
      <span className="text-brand-600">{display.highlight}</span>
    </h1>
  );
}
