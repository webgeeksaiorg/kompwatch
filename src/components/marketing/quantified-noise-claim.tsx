"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  QUANTIFIED_NOISE_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

/**
 * Control: current "Zero noise, curated alerts" callout (plain text).
 */
function ControlCallout() {
  return (
    <div className="flex max-w-2xl items-start gap-3 rounded-xl border border-brand-200 bg-white px-5 py-4 shadow-sm">
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
        />
      </svg>
      <div>
        <p className="text-sm font-semibold text-gray-900">
          Zero noise, curated alerts
        </p>
        <p className="mt-1 text-sm text-gray-600">
          No alert fatigue. AI filters out boilerplate changes and sends you only
          pricing moves, feature launches, and strategic shifts — the updates
          that actually change your next move.
        </p>
      </div>
    </div>
  );
}

/**
 * Experiment: bold quantified stat — "3 alerts/week, not 300".
 */
function QuantifiedCallout() {
  return (
    <div className="max-w-2xl rounded-xl border border-brand-200 bg-gradient-to-r from-brand-50 to-white px-6 py-5 shadow-sm">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        {/* Big stat */}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tabular-nums text-brand-600 sm:text-5xl">
            3
          </span>
          <span className="text-sm font-medium text-gray-500">
            alerts/week
          </span>
        </div>

        {/* Divider */}
        <div className="hidden h-12 w-px bg-gray-200 sm:block" aria-hidden="true" />

        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-gray-900">
            Not 300.{" "}
            <span className="font-normal text-gray-600">
              AI filters out boilerplate — footer edits, cookie banners, CSS
              tweaks — and sends only pricing moves, feature launches, and
              strategic shifts.
            </span>
          </p>
          <p className="mt-1.5 text-xs text-gray-400">
            Based on avg alerts per tracked competitor vs raw-change CI tools
          </p>
        </div>
      </div>
    </div>
  );
}

export function QuantifiedNoiseClaim() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = assignVariantInBrowser(QUANTIFIED_NOISE_EXPERIMENT);
    if (v) {
      setVariant(v);
      window.plausible?.("Quantified Noise Impression", {
        props: { variant: v, experiment: QUANTIFIED_NOISE_EXPERIMENT },
      });
    }
  }, []);

  // SSR: render control to avoid layout shift
  if (!variant) return <ControlCallout />;

  return variant === "A" ? <ControlCallout /> : <QuantifiedCallout />;
}
