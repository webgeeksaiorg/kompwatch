import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Google Alerts Alternative — KompWatch vs Google Alerts for Competitor Monitoring",
  description:
    "Using Google Alerts to track competitors? Google Alerts monitors mentions across the web — not the competitor's own site. KompWatch watches pricing pages, features, and blog posts directly. Free plan.",
  keywords: [
    "Google Alerts alternative",
    "Google Alerts vs KompWatch",
    "Google Alerts for competitor monitoring",
    "competitor website monitoring",
    "track competitor pricing changes",
    "Google Alerts competitive intelligence",
    "monitor competitor website for changes",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-google-alerts`,
  },
  openGraph: {
    title: "KompWatch vs Google Alerts — Page Changes, Not Just Mentions",
    description:
      "Google Alerts fires when someone mentions your competitor on the web. KompWatch fires when your competitor changes their own pricing page, ships a feature, or tweaks their homepage.",
    url: `${siteUrl}/vs-google-alerts`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Google Alerts — Honest Comparison",
    description:
      "Google Alerts monitors mentions across the web. KompWatch monitors the competitor's own pages. Different tools, different jobs.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  googleAlerts: CellValue;
}[] = [
  { feature: "Price", kompwatch: "Free / $49/mo", googleAlerts: "Free" },
  { feature: "Monitors competitor's own pages", kompwatch: true, googleAlerts: false },
  { feature: "Tracks pricing page changes", kompwatch: true, googleAlerts: false },
  { feature: "Tracks feature launches on-site", kompwatch: true, googleAlerts: "Only if indexed by Google" },
  { feature: "Tracks blog & changelog posts", kompwatch: true, googleAlerts: "Delayed, partial" },
  { feature: "Tracks job listings (hiring signals)", kompwatch: true, googleAlerts: false },
  { feature: "AI change summaries", kompwatch: true, googleAlerts: false },
  { feature: "CSS selector targeting", kompwatch: true, googleAlerts: false },
  { feature: "SPA / JS-heavy site support", kompwatch: "Playwright (real browser)", googleAlerts: "Depends on Google indexing" },
  { feature: "Deduplication / noise filtering", kompwatch: "AI-filtered", googleAlerts: "Per-mention alerts" },
  { feature: "Signal type", kompwatch: "Page diff (what changed on their site)", googleAlerts: "Mentions (who wrote about them)" },
  { feature: "Consolidated daily digest", kompwatch: true, googleAlerts: "Daily digest option (mentions only)" },
  { feature: "Dashboard & change timeline", kompwatch: true, googleAlerts: false },
  { feature: "CSV / JSON export", kompwatch: true, googleAlerts: false },
  { feature: "Built for competitive intelligence", kompwatch: true, googleAlerts: false },
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

export default function VsGoogleAlertsPage() {
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
          Google Alerts alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Google Alerts{" "}
          <span className="text-brand-600">— page changes, not just mentions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Google Alerts tells you when someone{" "}
          <em>writes about</em> your competitor. KompWatch tells you when your competitor{" "}
          <strong className="text-gray-900">changes their own pricing page, ships a feature, or posts a new job</strong>.
          Two different signals — one you&rsquo;ll find out about late, one you&rsquo;ll find out about first.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Google Alerts" }}
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
          No credit card. AI-powered monitoring. Free plan forever.
        </p>
      </section>

      {/* The core difference */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The core difference: mentions vs. page diffs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Both are useful. Most teams need both. Only one tells you what your competitor actually did.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch — page diffs
              </div>
              <p className="mt-3 text-sm text-gray-700">
                Visits your competitor&rsquo;s pricing page, feature pages, blog, and job board directly.
                Detects changes the moment they publish, and sends an AI summary of what changed
                and why it matters.
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Answers: <em>&ldquo;What did they ship this week?&rdquo;</em>
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Google Alerts — mentions
              </div>
              <p className="mt-3 text-sm text-gray-700">
                Watches Google&rsquo;s search index for new pages that mention your competitor&rsquo;s
                name. Useful for PR tracking, news coverage, and review site activity — not for
                tracking the competitor&rsquo;s own site.
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Answers: <em>&ldquo;Who wrote about them this week?&rdquo;</em>
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Many teams start with Google Alerts thinking it tracks competitor websites. It
            doesn&rsquo;t — it only catches what Google&rsquo;s crawler happens to index, often days or
            weeks after the competitor published the change.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Google Alerts
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Google Alerts wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Google Alerts</th>
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
                      <ComparisonCell value={row.googleAlerts} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly documented Google Alerts behavior as of April 2026.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Google Alerts" }}
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
                <li>&middot; Tracking what a competitor ships on their own site (pricing, features, blog)</li>
                <li>&middot; Tired of Google Alerts missing changes because Google didn&rsquo;t reindex the page</li>
                <li>&middot; Monitoring SPA / JavaScript-heavy sites Google&rsquo;s crawler handles poorly</li>
                <li>&middot; Wanting AI summaries instead of raw keyword matches</li>
                <li>&middot; Building competitive battlecards and need structured change data</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Google Alerts if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Tracking press coverage, news mentions, and third-party writeups</li>
                <li>&middot; Watching review sites, forums, and blogs for mentions of a brand</li>
                <li>&middot; On a zero budget and don&rsquo;t need structured change data</li>
                <li>&middot; Already using it for PR monitoring and it&rsquo;s working fine</li>
                <li>&middot; Fine with Google indexing delays (often days to weeks)</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Most competitive intelligence teams run <strong className="text-gray-900">both</strong> —
            Google Alerts for mentions, KompWatch for the competitor&rsquo;s own page changes.
          </p>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Google Alerts"
        faqs={[
          {
            question: "Can Google Alerts monitor a competitor's website for changes?",
            answer: "Not directly. Google Alerts watches Google's search index for new pages that mention a keyword. If a competitor changes their pricing page but no one blogs about it and Google doesn't reindex quickly, you'll never see the alert. KompWatch visits the competitor's own pages on a schedule (hourly, every 6 hours, or daily) and detects on-page changes directly — no Google indexing delay.",
          },
          {
            question: "Is KompWatch free like Google Alerts?",
            answer: "KompWatch has a free plan (2 competitors, weekly digest, pricing and feature tracking). Paid plans start at $49/mo (Pro, 10 competitors, daily digest) and $149/mo (Team, 50 competitors, hourly checks, API access). Google Alerts is entirely free but only covers mentions, not on-site changes.",
          },
          {
            question: "Why does Google Alerts miss competitor pricing changes?",
            answer: "Google Alerts fires only when Googlebot (a) crawls the changed page, (b) reindexes it, and (c) interprets the change as 'new content' matching your keyword. Silent edits to a pricing table, a feature flag toggle, or an unpublished blog draft often never trigger an alert. KompWatch compares DOM snapshots directly, so any visible change is caught on the next scan regardless of whether Google noticed.",
          },
          {
            question: "Does KompWatch work with JavaScript-heavy sites (React, Vue, Next.js)?",
            answer: "Yes. KompWatch uses Playwright — a real headless Chromium browser — so JavaScript-rendered content loads fully before the snapshot is taken. Google Alerts relies on whatever Googlebot managed to render and index, which is often incomplete for SPAs.",
          },
          {
            question: "Can I use Google Alerts and KompWatch together?",
            answer: "Yes — they complement each other. Keep Google Alerts for press coverage, news articles, and third-party mentions. Use KompWatch for monitoring the competitor's own site (pricing pages, feature pages, changelogs, job boards) where direct page diffs matter more than mentions.",
          },
          {
            question: "How quickly does KompWatch detect a competitor change vs. Google Alerts?",
            answer: "KompWatch re-checks competitor pages on a schedule — hourly on Team plan, every 6 hours on Pro, daily on Free. Changes are detected on the next scan. Google Alerts depends on Google's crawl and index schedule, which can take anywhere from hours to weeks depending on the site's crawl budget.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop relying on Google to tell you what your competitor did
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors free. Watch their pages directly. Get AI-summarized digests
            when something actually changes.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Google Alerts" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Outgrowing Google Alerts for competitor tracking?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Start KompWatch free
            </Link>{" "}
            and see the difference direct page monitoring makes.
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
            <Link href="/vs-visualping" className="text-sm text-gray-500 hover:text-gray-700">
              vs Visualping
            </Link>
            <Link href="/vs-changeflow" className="text-sm text-gray-500 hover:text-gray-700">
              vs Changeflow
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
