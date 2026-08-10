import Link from "next/link";

/**
 * RelatedComparisons — curated internal-link module for /compare/* pages.
 *
 * Purpose: SEO internal linking + user pathing. A visitor researching one
 * enterprise CI tool (Crayon, Klue, Kompyte) is statistically likely to be
 * comparison-shopping the rest, so we surface 3 sibling comparisons at the
 * bottom of each page (before the final CTA).
 *
 * The `current` prop is the slug of the *current* comparison so we can
 * exclude it from the rendered list.
 */

export type ComparisonEntry = {
  slug: string; // path segment, e.g. "kompwatch-vs-klue"
  competitor: string; // display name, e.g. "Klue"
  tagline: string; // one-liner shown under the name
  priceAnchor: string; // e.g. "$30K–$100K+/yr"
};

// Curated set — the 6 CI tools with highest search volume + clearest
// price-anchor story. Ordered by search-intent priority.
const CATALOG: ComparisonEntry[] = [
  {
    slug: "kompwatch-vs-crayon",
    competitor: "Crayon",
    tagline: "Enterprise CI (SoftwareOne)",
    priceAnchor: "$5K–$80K+/yr",
  },
  {
    slug: "kompwatch-vs-klue",
    competitor: "Klue",
    tagline: "Battlecards & CI platform",
    priceAnchor: "$12K–$100K+/yr",
  },
  {
    slug: "kompwatch-vs-kompyte",
    competitor: "Kompyte",
    tagline: "Semrush-owned CI tool",
    priceAnchor: "From $10K/yr",
  },
  {
    slug: "kompwatch-vs-spyglass",
    competitor: "Spyglass",
    tagline: "Indie CI newcomer",
    priceAnchor: "$99–$299/mo",
  },
  {
    slug: "kompwatch-vs-rivalsense",
    competitor: "Rivalsense",
    tagline: "AI-first change monitor",
    priceAnchor: "$49–$199/mo",
  },
  {
    slug: "kompwatch-vs-ravenseer",
    competitor: "Ravenseer",
    tagline: "Enterprise CI (managed)",
    priceAnchor: "$2K+/mo",
  },
];

export function RelatedComparisons({
  current,
  heading = "Compare KompWatch to other CI tools",
  intro,
  max = 3,
}: {
  /** Slug of the current page, e.g. "kompwatch-vs-crayon". Excluded from list. */
  current: string;
  heading?: string;
  intro?: string;
  max?: number;
}) {
  const items = CATALOG.filter((c) => c.slug !== current).slice(0, max);
  if (items.length === 0) return null;

  return (
    <section
      className="border-t border-gray-200 bg-gray-50 py-16"
      aria-labelledby="related-comparisons-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            id="related-comparisons-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {heading}
          </h2>
          {intro ? (
            <p className="mt-3 text-base text-gray-600">{intro}</p>
          ) : (
            <p className="mt-3 text-base text-gray-600">
              Comparison-shopping? See how KompWatch stacks up against the other
              competitive-intelligence tools teams evaluate alongside us.
            </p>
          )}
        </div>

        <ul
          role="list"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/compare/${c.slug}`}
                className="group flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand-500 hover:shadow-md"
              >
                <div>
                  <div className="text-sm font-medium text-gray-500">
                    KompWatch vs
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-brand-700">
                    {c.competitor}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{c.tagline}</div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    <span className="font-medium text-gray-700">
                      {c.priceAnchor}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-semibold text-brand-600 group-hover:text-brand-700"
                  >
                    Compare →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-sm text-gray-500">
          Looking for something else?{" "}
          <Link
            href="/compare"
            className="font-medium text-brand-600 underline-offset-2 hover:underline"
          >
            See all 14 comparisons →
          </Link>
        </div>
      </div>
    </section>
  );
}
