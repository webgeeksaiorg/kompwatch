import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Already.dev Alternative — KompWatch vs Already.dev (Honest Comparison)",
  description:
    "Looking for an Already.dev alternative? KompWatch starts free, monitors JavaScript-heavy sites with a real browser, and tracks job listings — all at the same $49/mo price point.",
  keywords: [
    "Already.dev alternative",
    "Already.dev vs KompWatch",
    "Already.dev competitor",
    "Already.dev pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Already.dev competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-already-dev`,
  },
  openGraph: {
    title: "KompWatch vs Already.dev — Same Price, Deeper Monitoring",
    description:
      "Honest side-by-side: KompWatch ($49/mo + free plan) vs Already.dev (~$49/mo, no free plan). Full headless browser, JS-heavy sites, job tracking.",
    url: `${siteUrl}/vs-already-dev`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Already.dev — Honest Comparison",
    description:
      "Already.dev scans 40+ sources at ~$49/mo. KompWatch starts free, uses a real browser for SPA/JS-heavy sites, and tracks job listings. Full comparison inside.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  alreadydev: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", alreadydev: "~$49/mo" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", alreadydev: "~$588/yr" },
  { feature: "Self-serve signup", kompwatch: true, alreadydev: true },
  { feature: "No sales call required", kompwatch: true, alreadydev: true },
  { feature: "Free plan", kompwatch: true, alreadydev: false },
  { feature: "Pricing page tracking", kompwatch: true, alreadydev: true },
  { feature: "Feature & product page tracking", kompwatch: true, alreadydev: true },
  { feature: "Blog & content monitoring", kompwatch: true, alreadydev: true },
  { feature: "Job listing tracking", kompwatch: true, alreadydev: false },
  { feature: "AI change summaries", kompwatch: true, alreadydev: true },
  { feature: "SPA / JS-heavy site support", kompwatch: "Playwright (real browser)", alreadydev: "HTTP scraper" },
  { feature: "CSS selector targeting", kompwatch: true, alreadydev: false },
  { feature: "Email digests", kompwatch: true, alreadydev: true },
  { feature: "Slack / webhook alerts", kompwatch: true, alreadydev: true },
  { feature: "Sources scanned", kompwatch: "Any URL", alreadydev: "40+ predefined" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", alreadydev: "~5 minutes" },
];

function ComparisonCell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true) {
    return (
      <svg
        className={`h-5 w-5 ${highlight ? "text-brand-600" : "text-green-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return (
    <span className={highlight ? "font-medium text-brand-600" : "text-gray-600"}>{value}</span>
  );
}

export default function VsAlreadyDevPage() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          Already.dev alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Already.dev{" "}
          <span className="text-brand-600">— same price, deeper monitoring</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Already.dev scans 40+ sources at ~$49/mo — solid for a new entrant. But it uses HTTP
          scraping that misses JavaScript-heavy sites, has no free plan, and doesn&rsquo;t track job
          listings. KompWatch uses a full headless browser (Playwright) so SPAs and JS-rendered
          content are never missed, starting with a{" "}
          <strong className="text-gray-900">free plan</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Already.dev" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. Real browser monitoring. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Same price point, but KompWatch starts free
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from Already.dev&rsquo;s website (April 2026).
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$588 / year &middot; free plan available</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&check; 10 competitors tracked</li>
                <li>&check; Headless browser (SPAs work)</li>
                <li>&check; Job listing tracking</li>
                <li>&check; Free plan to start</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Already.dev
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                ~$49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">~$588 / year &middot; no free plan</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; 40+ sources scanned</li>
                <li>&middot; HTTP scraper (misses SPAs)</li>
                <li>&middot; No job listing tracking</li>
                <li>&middot; No free plan</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Same price — but KompWatch gives you a{" "}
            <strong className="text-gray-900">free plan</strong>,{" "}
            <strong className="text-gray-900">real browser monitoring</strong>, and{" "}
            <strong className="text-gray-900">job tracking</strong> that Already.dev doesn&rsquo;t offer.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Already.dev
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Already.dev wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Already.dev</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.kompwatch} highlight />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.alreadydev} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Already.dev
            pricing from their public website.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Already.dev" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro for 10.
          </p>
        </div>
      </section>
      {/* When to pick which */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            When to pick which
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">
                Pick KompWatch if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Monitoring competitors with JavaScript-heavy or SPA websites</li>
                <li>&middot; Wanting to start free before committing to a paid plan</li>
                <li>&middot; Tracking job listings for hiring signals alongside pricing and features</li>
                <li>&middot; Needing CSS selector targeting to monitor specific page sections</li>
                <li>&middot; Wanting to monitor any URL, not just predefined sources</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Already.dev if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Happy with 40+ predefined sources and don&rsquo;t need custom URLs</li>
                <li>&middot; Monitoring competitors with mostly static, server-rendered websites</li>
                <li>&middot; Don&rsquo;t need job listing tracking or CSS selector targeting</li>
                <li>&middot; Prefer a newer tool and want to try a recent market entrant</li>
                <li>&middot; Already set up on Already.dev and satisfied with the coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Already.dev"
        faqs={[
          {
            question: "How much does Already.dev cost?",
            answer: "Already.dev costs approximately $49/mo (~$588/yr). KompWatch matches this at $49/mo for the Pro plan and also offers a free plan with 2 competitors — no credit card required.",
          },
          {
            question: "What is the difference between KompWatch and Already.dev?",
            answer: "Both are self-serve competitor monitoring tools at similar price points. KompWatch uses a full headless browser (Playwright) to monitor any URL — including JavaScript-heavy SPAs — while Already.dev uses HTTP scraping across 40+ predefined sources. KompWatch also tracks job listings and offers a free plan, which Already.dev does not.",
          },
          {
            question: "Does Already.dev work with JavaScript-heavy sites?",
            answer: "Already.dev uses HTTP scraping, which can miss content rendered by JavaScript frameworks like React, Vue, or Next.js. KompWatch uses Playwright (a real headless browser) to fully render pages before analysis, so SPA and JS-heavy content is captured accurately.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Already.dev does not offer a free plan.",
          },
          {
            question: "Does KompWatch track job listings?",
            answer: "Yes. KompWatch monitors competitor job listings to surface hiring signals — new engineering roles, sales expansion, and team growth. Already.dev does not offer job listing tracking.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try KompWatch free
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need more.
            No sales call. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Already.dev" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Evaluating both?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Start KompWatch free
            </Link>{" "}
            and run them side by side.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
            </Link>
            <Link href="/vs-seeto" className="text-sm text-gray-500 hover:text-gray-700">
              vs Seeto
            </Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
