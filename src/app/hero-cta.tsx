"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  HERO_CTA_SETUP_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

/**
 * EXPERIMENT: Hero CTA A/B test (hero-cta-setup-competitor-2026-06)
 * A — "Start Monitoring Free"        → /login  (control)
 * B — "Setup Your First Competitor"   → /login  (action-specific)
 *
 * Hypothesis: a concrete, task-oriented CTA ("Setup Your First Competitor")
 * lifts signups by ≥10% because it implies immediate value and a fast path
 * to the core product action, reducing perceived friction.
 */
const VARIANTS: Record<Variant, { label: string; href: string }> = {
  A: { label: "Start Monitoring Free", href: "/login" },
  B: { label: "Setup Your First Competitor", href: "/login" },
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function HeroSecondaryCTA() {
  const handleClick = () => {
    window.plausible?.("Hero Secondary CTA Click", {
      props: { cta: "see-a-live-digest" },
    });
  };

  return (
    <Link
      href="/sample-digest"
      onClick={handleClick}
      className="rounded-lg border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
    >
      See a Live Digest
    </Link>
  );
}

export function HeroCTA() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const assigned = assignVariantInBrowser(HERO_CTA_SETUP_EXPERIMENT) ?? "A";
    setVariant(assigned);
    window.plausible?.("Hero CTA Impression", {
      props: {
        variant: assigned,
        experiment: HERO_CTA_SETUP_EXPERIMENT,
      },
    });
  }, []);

  const handleClick = () => {
    const v = variant ?? "A";
    const subheadlineVariant =
      typeof window !== "undefined"
        ? localStorage.getItem("hero_subheadline_variant") ?? "A"
        : "A";
    window.plausible?.("Hero CTA Click", {
      props: {
        variant: v,
        experiment: HERO_CTA_SETUP_EXPERIMENT,
        subheadline: subheadlineVariant,
      },
    });
  };

  // Render control text during SSR / before hydration to avoid layout shift
  const { label, href } = variant ? VARIANTS[variant] : VARIANTS.A;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
    >
      {label}
    </Link>
  );
}
