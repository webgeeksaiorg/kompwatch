"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  HERO_CTA_OUTCOME_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

/**
 * EXPERIMENT: Hero CTA outcome-copy test (hero-cta-outcome-changed-this-week-2026-07)
 * A — "Start Monitoring Free"                    → /login  (control, prior baseline)
 * B — "See What Your Competitors Changed"        → /login  (outcome-specific)
 *
 * Hypothesis (ticket 6952): Outcome-led CTA copy — signaling immediate,
 * concrete value ("what competitors changed this week") — lifts hero
 * click-through to signup by 10–20% vs. the generic action label. Similar
 * outcome-led patterns are used by Hotjar ("See what users do on your site")
 * and Datadog ("Monitor everything"); Visualping still uses generic copy,
 * so this is also a differentiation opportunity.
 *
 * Measurement: compare `Hero CTA Click` / `Hero CTA Impression` ratios by
 * `variant` prop in Plausible over a 2-week window once PLAUSIBLE_API_KEY is
 * configured (ticket 5e4a). Segment further by `subheadline` variant for
 * copy-interaction effects.
 */
const VARIANTS: Record<Variant, { label: string; href: string }> = {
  A: { label: "Start Monitoring Free", href: "/login" },
  B: { label: "See What Your Competitors Changed", href: "/login" },
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
    const assigned = assignVariantInBrowser(HERO_CTA_OUTCOME_EXPERIMENT) ?? "A";
    setVariant(assigned);
    window.plausible?.("Hero CTA Impression", {
      props: {
        variant: assigned,
        experiment: HERO_CTA_OUTCOME_EXPERIMENT,
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
        experiment: HERO_CTA_OUTCOME_EXPERIMENT,
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
