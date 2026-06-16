"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  COMPARE_EMAIL_CAPTURE_EXPERIMENT,
  type Variant,
} from "@/lib/ab";
import { EmailCaptureForm } from "@/components/email-capture-form";

/**
 * EXPERIMENT: Compare page email capture (ticket de1f)
 *
 * Variant A — control: nothing rendered (existing mid-page CTA stays).
 * Variant B — treatment: email capture section "Get the full [Competitor]
 *   comparison report" with inline EmailCaptureForm.
 *
 * Hypothesis: visitors comparing KompWatch vs a competitor are high-intent
 * but not ready to sign up. Offering a downloadable comparison report via
 * email capture converts more visitors into leads than a direct "Start free"
 * CTA alone. Target: >= 3% email capture rate on variant B over 14 days.
 *
 * Measurement: compare 'Compare Email Capture Impression' (denominator)
 *   and 'email-capture' events with compare-* source (numerator) bucketed
 *   by variant.
 */

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

interface CompareEmailCaptureProps {
  competitor: string;
  source: string;
}

export function CompareEmailCapture({
  competitor,
  source,
}: CompareEmailCaptureProps) {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const assigned =
      assignVariantInBrowser(COMPARE_EMAIL_CAPTURE_EXPERIMENT) ?? "A";
    setVariant(assigned);
    window.plausible?.("Compare Email Capture Impression", {
      props: {
        variant: assigned,
        experiment: COMPARE_EMAIL_CAPTURE_EXPERIMENT,
        competitor,
      },
    });
  }, [competitor]);

  if (variant !== "B") return null;

  return (
    <section
      className="border-t border-gray-100 bg-gray-50 py-16"
      data-experiment={COMPARE_EMAIL_CAPTURE_EXPERIMENT}
      data-variant={variant}
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Get the full {competitor} comparison report
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Detailed pricing breakdown, feature-by-feature analysis, and migration
          checklist — delivered to your inbox.
        </p>
        <div className="mt-6">
          <EmailCaptureForm
            source={source}
            event={`Compare ${competitor} Email Capture`}
            buttonLabel="Send me the report"
            placeholder="you@yourcompany.com"
            successMessage="Check your inbox — the full comparison report is on its way."
          />
        </div>
        <p className="mt-3 text-xs text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
