"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  assignVariantInBrowser,
  PRICING_USECASE_EXPERIMENT,
  type Variant,
} from "@/lib/ab";
import { TrackedCTA } from "@/components/tracked-cta";

const VARIANTS = {
  A: {
    headline: (
      <>
        Track competitor pricing{" "}
        <span className="text-brand-600">automatically</span>
      </>
    ),
    subheadline:
      "KompWatch monitors competitor pricing pages around the clock. When a price changes, a tier is added, or a plan disappears — you get an AI-generated summary explaining exactly what moved and how it affects your positioning.",
    cta: "Start free — 2 competitors, no credit card",
    footnote: "Free plan forever. Pro checks pricing every 6 hours.",
  },
  B: {
    headline: (
      <>
        Monitor competitor pricing changes{" "}
        <span className="text-brand-600">before your customers notice</span>
      </>
    ),
    subheadline:
      "Competitor price increases, new tiers, and removed plans — detected automatically and summarized by AI. No spreadsheets, no manual checking, no missed moves.",
    cta: "Start monitoring free — live in 60 seconds",
    footnote: "Add a URL, get your first pricing alert today. No credit card.",
  },
} as const;

export function PricingUsecaseHero() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const assigned = assignVariantInBrowser(PRICING_USECASE_EXPERIMENT) ?? "A";
    setVariant(assigned);
    window.plausible?.("UseCase Pricing Hero Impression", {
      props: { variant: assigned, experiment: PRICING_USECASE_EXPERIMENT },
    });
  }, []);

  const display = variant ? VARIANTS[variant] : VARIANTS.A;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
        Use case · Pricing intelligence
      </div>
      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
        {display.headline}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        {display.subheadline}
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <TrackedCTA
          href="/login"
          event="UseCase Pricing Hero CTA"
          eventProps={{
            usecase: "track-competitor-pricing",
            variant: variant ?? "A",
            experiment: PRICING_USECASE_EXPERIMENT,
          }}
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          {display.cta}
        </TrackedCTA>
        <Link
          href="#how-it-works"
          className="text-sm font-semibold text-gray-900 hover:text-brand-600"
        >
          How it works &rarr;
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-400">{display.footnote}</p>
    </section>
  );
}
