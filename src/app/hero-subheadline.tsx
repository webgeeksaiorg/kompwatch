"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  HERO_NO_DEMO_EXPERIMENT,
  type Variant as ABVariant,
} from "@/lib/ab";

const VARIANTS = {
  A: "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed digests delivered to your inbox. Stop manually checking competitor websites.",
  B: "Crayon costs more than a junior hire. KompWatch costs $49/mo — and you get the same answer.",
  D: "Signal, not noise. AI watches every competitor page and sends you only the changes that matter — pricing moves, feature launches, strategic shifts.",
} as const;

const EXPERIMENT_COPY =
  "Crayon and Klue require sales demos and weeks of onboarding. KompWatch: add a URL, get your first AI digest in minutes — $49/mo, no contract.";

type PoolVariant = keyof typeof VARIANTS;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function getPoolVariant(): PoolVariant {
  if (typeof window === "undefined") return "A";
  const stored = localStorage.getItem("hero_subheadline_variant");
  if (stored === "A" || stored === "B" || stored === "D") return stored;
  const roll = Math.random();
  const variant: PoolVariant = roll < 1 / 3 ? "A" : roll < 2 / 3 ? "B" : "D";
  localStorage.setItem("hero_subheadline_variant", variant);
  return variant;
}

export function HeroSubheadline() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const ab = assignVariantInBrowser(HERO_NO_DEMO_EXPERIMENT) ?? "A";

    if (ab === "B") {
      setText(EXPERIMENT_COPY);
      window.plausible?.("Hero Subheadline View", {
        props: { variant: "experiment-no-demo", experiment: HERO_NO_DEMO_EXPERIMENT },
      });
    } else {
      const pool = getPoolVariant();
      setText(VARIANTS[pool]);
      window.plausible?.("Hero Subheadline View", {
        props: { variant: pool },
      });
    }
  }, []);

  const display = text ?? VARIANTS.A;

  return (
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
      {display}
    </p>
  );
}
