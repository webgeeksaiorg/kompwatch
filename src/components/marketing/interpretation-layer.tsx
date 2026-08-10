"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

/**
 * Landing page pain-point reframe — ticket 47dd (P0).
 *
 * Position KompWatch as the *interpretation layer* enterprise CI tools
 * (Crayon $25K–$60K/yr, Klue $30K–$100K/yr) are missing. Those platforms
 * deliver raw change feeds; customers still spend 10–20 hrs/week of
 * analyst labor ($26K–$83K/yr fully-loaded) turning noise into decisions.
 *
 * KompWatch's AI digest IS that interpretation layer — bundled, not billed.
 *
 * Source: userintuition.ai/posts/competitive-intelligence-pricing (2026)
 */
export function InterpretationLayer() {
  useEffect(() => {
    window.plausible?.("interpretation-layer-impression", {
      props: { ticket: "47dd" },
    });
  }, []);

  return (
    <section
      id="interpretation-layer"
      className="border-t border-gray-100 bg-white py-24"
      aria-labelledby="interpretation-layer-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            The hidden cost of enterprise CI
          </p>
          <h2
            id="interpretation-layer-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Crayon and Klue sell you the data.{" "}
            <span className="text-brand-600">You still pay to interpret it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Enterprise CI platforms are raw change feeds. Every alert requires
            a human analyst to read, judge, and summarize it. That{" "}
            <strong className="text-gray-900">
              hidden interpretation labor costs $26,000–$83,000/yr
            </strong>{" "}
            per team — on top of the subscription.
          </p>
        </div>

        {/* Cost breakdown — two-column visualization */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Enterprise CI stack — the hidden bill */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Enterprise CI (Crayon / Klue)
              </h3>
            </div>

            <dl className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <dt className="text-sm text-gray-600">Subscription</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  $25,000–$100,000/yr
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <dt className="text-sm text-gray-600">
                  Analyst interpretation labor
                  <span className="ml-1 text-xs text-gray-400">
                    (10–20 hrs/week)
                  </span>
                </dt>
                <dd className="text-sm font-semibold text-red-600">
                  + $26,000–$83,000/yr
                </dd>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <dt className="text-sm font-semibold text-gray-900">
                  True annual cost
                </dt>
                <dd className="text-lg font-bold text-gray-900">
                  $51K–$183K/yr
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-xs text-gray-500">
              You buy a change feed. You still hire (or reassign) a person to
              read every alert, decide what matters, and write it up for the
              team. That&apos;s the interpretation layer — and enterprise CI
              tools don&apos;t include it.
            </p>
          </div>

          {/* KompWatch — interpretation bundled */}
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-50/40 p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                KompWatch — interpretation is the product
              </h3>
            </div>

            <dl className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between border-b border-brand-200 pb-3">
                <dt className="text-sm text-gray-600">Subscription</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  $588/yr <span className="text-xs text-gray-500">(Pro, annual)</span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-b border-brand-200 pb-3">
                <dt className="text-sm text-gray-600">
                  Analyst interpretation labor
                </dt>
                <dd className="text-sm font-semibold text-brand-600">
                  Included — AI does it
                </dd>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <dt className="text-sm font-semibold text-gray-900">
                  True annual cost
                </dt>
                <dd className="text-lg font-bold text-brand-600">$588/yr</dd>
              </div>
            </dl>

            <p className="mt-6 text-xs text-gray-600">
              Our AI reads every change, scores its severity, and writes the
              summary a human analyst would write — automatically, in every
              digest. You don&apos;t need a CI analyst because the
              interpretation ships with the tool.
            </p>
          </div>
        </div>

        {/* Bottom reframe — one-line ICP thesis */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-brand-200 bg-white px-6 py-5 text-center shadow-sm">
          <p className="text-base text-gray-700 sm:text-lg">
            <strong className="text-gray-900">
              Monitoring platforms deliver data. KompWatch delivers
              interpretation.
            </strong>{" "}
            Built for founders, PMMs, and small teams who don&apos;t have —
            and can&apos;t afford — a full-time CI analyst.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            Cost model: 10–20 hrs/wk × $50–$80/hr fully-loaded analyst rate.
            Source: userintuition.ai — Competitive Intelligence Pricing
            Breakdown (2026).
          </p>
        </div>
      </div>
    </section>
  );
}
