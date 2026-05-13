"use client";

import Link from "next/link";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

interface KlueReimbursementBannerProps {
  page: "vs-klue" | "switching-from-klue";
}

export function KlueReimbursementBanner({ page }: KlueReimbursementBannerProps) {
  const handleCtaClick = () => {
    window.plausible?.("klue_reimbursement_cta_click", {
      props: { page },
    });
  };

  return (
    <section
      aria-labelledby="klue-reimbursement-heading"
      className="border-y border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 py-12"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border-2 border-amber-300 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a4 4 0 00-8 0v2M5 9h14l-1 12H6L5 9z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-800">
                Limited-time switching offer
              </div>
              <h2
                id="klue-reimbursement-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-gray-900"
              >
                We&rsquo;ll cover your Klue cancellation fee &mdash; up to $500.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Locked into a Klue annual contract you don&rsquo;t want to renew?
                Sign up for KompWatch Pro, email us proof of your Klue cancellation,
                and we&rsquo;ll reimburse the early-termination fee &mdash; up to $500
                &mdash; via Stripe refund on your first invoice. Offer valid through
                Q3 2026.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/login"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Start Pro &mdash; we cover the switch
                </Link>
                <a
                  href="#klue-reimbursement-how"
                  className="text-sm font-semibold text-amber-800 hover:text-amber-900"
                >
                  How it works &rarr;
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                No credit card to start. Reimbursement applied after your first paid month.
              </p>
            </div>
          </div>

          <div
            id="klue-reimbursement-how"
            className="mt-8 grid grid-cols-1 gap-4 border-t border-amber-100 pt-6 sm:grid-cols-3"
          >
            <div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                1
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Sign up &amp; upgrade
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Start a KompWatch Pro plan ($49/mo) so we can issue a refund through Stripe.
              </p>
            </div>
            <div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                2
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Cancel Klue &amp; email proof
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Forward your Klue cancellation confirmation (with the fee amount) to{" "}
                <a
                  href="mailto:support@kompwatch.com?subject=Klue%20reimbursement%20claim"
                  className="font-medium text-amber-800 underline hover:text-amber-900"
                >
                  support@kompwatch.com
                </a>
                .
              </p>
            </div>
            <div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                3
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                We refund up to $500
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Within 5 business days, we issue a Stripe refund on your KompWatch invoice for the cancellation amount (capped at $500).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
