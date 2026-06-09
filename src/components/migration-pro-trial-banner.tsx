"use client";

import Link from "next/link";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> }
    ) => void;
  }
}

interface MigrationProTrialBannerProps {
  /** Source competitor for attribution + plausible event props. */
  competitor: "Klue" | "Crayon" | "Kompyte";
  /** Page slug used as Plausible event prop. */
  page: string;
}

const COMPETITOR_COPY: Record<
  MigrationProTrialBannerProps["competitor"],
  { headline: string; sub: string }
> = {
  Klue: {
    headline:
      "Run a real 7-day side-by-side against Klue — on us.",
    sub: "Get 7 days of KompWatch Pro free: 10 competitors, daily AI digests, Slack alerts. Long enough to run the same pricing-page diff Klue would. No credit card.",
  },
  Crayon: {
    headline:
      "Try 7 days of Pro while Crayon decides what SoftwareOne does next.",
    sub: "10 competitors, daily AI digests, Slack alerts — free for 7 days. Compare the digest quality against your current Crayon Insight workflow. No credit card.",
  },
  Kompyte: {
    headline:
      "Skip the Semrush bundle. Try Pro free for 7 days.",
    sub: "10 competitors, daily AI digests, Slack alerts — without the $499/mo Semrush Business tier. No credit card required.",
  },
};

export function MigrationProTrialBanner({
  competitor,
  page,
}: MigrationProTrialBannerProps) {
  const { headline, sub } = COMPETITOR_COPY[competitor];

  const utmHref =
    `/login?ref=migrate-pro-trial` +
    `&utm_source=${encodeURIComponent(competitor.toLowerCase())}` +
    `&utm_medium=migrate-page` +
    `&utm_campaign=migrate-pro-trial`;

  const handleCtaClick = () => {
    window.plausible?.("migrate_pro_trial_cta_click", {
      props: { competitor, page, cta: "primary" },
    });
  };

  const handlePricingClick = () => {
    window.plausible?.("migrate_pro_trial_cta_click", {
      props: { competitor, page, cta: "pricing" },
    });
  };

  return (
    <section
      aria-labelledby="migration-pro-trial-heading"
      className="border-y border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50 py-12"
      data-experiment="migrate-pro-trial-cta"
      data-competitor={competitor}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border-2 border-brand-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800">
                7-day Pro trial &middot; no credit card
              </div>
              <h2
                id="migration-pro-trial-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-gray-900"
              >
                {headline}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {sub}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-brand-600">
                    &#10003;
                  </span>
                  10 competitors monitored
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-brand-600">
                    &#10003;
                  </span>
                  Daily AI-generated digests
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-brand-600">
                    &#10003;
                  </span>
                  Slack &amp; email alerts
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-0.5 text-brand-600">
                    &#10003;
                  </span>
                  Auto-downgrades to Free on day 8 &mdash; no charge
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={utmHref}
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                >
                  Start 7-day Pro trial &mdash; free
                </Link>
                <Link
                  href="/pricing"
                  onClick={handlePricingClick}
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  See what Pro includes &rarr;
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Trial requires no credit card. We&rsquo;ll email you on day 6
                before anything changes &mdash; cancel or stay free, your call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
