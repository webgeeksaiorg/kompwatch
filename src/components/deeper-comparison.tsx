import Link from "next/link";

/**
 * DeeperComparison — cross-link module for /vs/*-alternative listicle pages.
 *
 * Purpose: A visitor who read a "Best X alternatives" listicle and is
 * seriously considering KompWatch has two natural next steps:
 *
 *   1. Compare KompWatch head-to-head against the incumbent they're leaving
 *      (`/compare/kompwatch-vs-<slug>`).
 *   2. Read the migration guide showing how switching actually works
 *      (`/switch/<slug>`).
 *
 * Both destinations are further-down-funnel than the listicle, so surfacing
 * them prominently improves conversion and internal-link equity. The
 * component renders 0, 1, or 2 cards depending on which target pages
 * actually exist for the given competitor.
 *
 * Renders nothing if neither `compareHref` nor `switchHref` is provided.
 */

export function DeeperComparison({
  competitor,
  compareHref,
  switchHref,
  eyebrow = "Go deeper",
}: {
  /** Display name of the incumbent, e.g. "Crayon", "Semrush". */
  competitor: string;
  /** Optional path to /compare/kompwatch-vs-<slug>. Renders card if set. */
  compareHref?: string;
  /** Optional path to /switch/<slug>. Renders card if set. */
  switchHref?: string;
  eyebrow?: string;
}) {
  if (!compareHref && !switchHref) return null;

  return (
    <section
      className="border-t border-gray-200 bg-white py-16"
      aria-labelledby="deeper-comparison-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </div>
          <h2
            id="deeper-comparison-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Serious about replacing {competitor}?
          </h2>
          <p className="mt-3 text-base text-gray-600">
            You&apos;ve seen the ranked list. Here&apos;s the head-to-head
            breakdown and the migration playbook — the two pages our sales
            team sends to prospects who are 80% ready to switch.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {compareHref ? (
            <Link
              href={compareHref}
              className="group flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow-md"
            >
              <div>
                <div className="text-sm font-medium text-brand-600">
                  Head-to-head
                </div>
                <div className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-brand-700">
                  KompWatch vs {competitor}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Feature-by-feature, pricing side-by-side, and the honest
                  &quot;when {competitor} is the right pick&quot; section.
                </div>
              </div>
              <div className="mt-6 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                See the comparison &rarr;
              </div>
            </Link>
          ) : null}

          {switchHref ? (
            <Link
              href={switchHref}
              className="group flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-500 hover:shadow-md"
            >
              <div>
                <div className="text-sm font-medium text-brand-600">
                  Migration guide
                </div>
                <div className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-brand-700">
                  Switch from {competitor} to KompWatch
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  What to export before you cancel, how to rebuild your
                  competitor set in KompWatch, and a week-by-week timeline.
                </div>
              </div>
              <div className="mt-6 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                Read the migration guide &rarr;
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
