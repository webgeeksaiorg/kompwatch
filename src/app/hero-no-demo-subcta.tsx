"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  HERO_NO_DEMO_SUBCTA_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

/**
 * EXPERIMENT: 'No demo required — live in 2 min' sub-CTA test (ticket b16e)
 *
 * Variant A — control: nothing rendered beneath the hero CTAs.
 * Variant B — treatment: a single line of reassurance copy directly under the
 *   primary hero CTA row. Targets buyers fleeing Crayon/Klue/Kompyte demo-gates.
 *
 * Hypothesis: surfacing the "no sales call required, instant self-serve"
 * objection-killer at the point of highest intent lifts /signup click-through
 * by ≥15% vs control over a 14-day window.
 *
 * Measurement: compare 'Hero Sub-CTA Impression' (denominator) and downstream
 *   'Hero CTA Click' / signup events bucketed by the subcta variant prop.
 *
 * Why a separate experiment slot (not the existing subheadline slot): that
 *   slot already drives subheadline copy on the same page; mixing the two
 *   would contaminate both reads. This isolates the sub-CTA placement test.
 */
declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

export function HeroNoDemoSubCTA() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const assigned =
      assignVariantInBrowser(HERO_NO_DEMO_SUBCTA_EXPERIMENT) ?? "A";
    setVariant(assigned);
    window.plausible?.("Hero Sub-CTA Impression", {
      props: {
        variant: assigned,
        experiment: HERO_NO_DEMO_SUBCTA_EXPERIMENT,
      },
    });
  }, []);

  // Render nothing during SSR / before hydration to avoid layout shift,
  // and render nothing for the control bucket.
  if (variant !== "B") return null;

  return (
    <p
      className="mt-3 text-xs font-medium text-gray-500"
      data-experiment={HERO_NO_DEMO_SUBCTA_EXPERIMENT}
      data-variant={variant}
    >
      <span className="text-brand-600">✓</span> No demo required — live in 2
      minutes
    </p>
  );
}
