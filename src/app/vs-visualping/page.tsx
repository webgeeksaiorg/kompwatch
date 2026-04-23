import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Visualping Alternative — KompWatch vs Visualping (Honest Comparison)",
  description:
    "Looking for a Visualping alternative? KompWatch goes beyond screenshot diffs — AI change summaries, CSS selector targeting, SPA support, and competitor digests starting free.",
  keywords: [
    "Visualping alternative",
    "Visualping vs KompWatch",
    "Visualping competitor",
    "Visualping pricing",
    "website change detection",
    "competitor monitoring tool",
    "Visualping competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-visualping`,
  },
  openGraph: {
    title: "KompWatch vs Visualping — Beyond Screenshot Diffs",
    description:
      "Honest side-by-side: KompWatch (free + $49/mo Pro) vs Visualping (free + $14/mo Starter). AI summaries, CSS selectors, SPA support vs visual diffs.",
    url: `${siteUrl}/vs-visualping`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Visualping — Honest Comparison",
    description:
      "Visualping shows you that a page changed. KompWatch tells you what changed and why it matters — with AI summaries, CSS targeting, and SPA support.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  visualping: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", visualping: "Free / ~$14/mo" },
  { feature: "Annual cost (Pro/Business)", kompwatch: "$588/yr", visualping: "$168–$600+/yr" },
  { feature: "Self-serve signup", kompwatch: true, visualping: true },
  { feature: "Free plan", kompwatch: true, visualping: true },
  { feature: "AI change summaries", kompwatch: true, visualping: false },
  { feature: "CSS selector targeting", kompwatch: true, visualping: false },
  { feature: "SPA / JS-heavy site support", kompwatch: "Playwright (real browser)", visualping: "Limited" },
  { feature: "Change type detection", kompwatch: "Pricing / Feature / Content", visualping: "Visual diff only" },
  { feature: "Competitor digest emails", kompwatch: "Daily / Weekly", visualping: "Per-change alerts" },
  { feature: "Job listing tracking", kompwatch: true, visualping: false },
  { feature: "Pricing page tracking", kompwatch: true, visualping: "Visual only" },
  { feature: "Blog & content monitoring", kompwatch: true, visualping: "Visual only" },
  { feature: "Multi-competitor dashboard", kompwatch: true, visualping: false },
  { feature: "Slack / webhook alerts", kompwatch: true, visualping: true },
  { feature: "Built for competitive intelligence", kompwatch: true, visualping: false },
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

export default function VsVisualpingPage() {
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
          Visualping alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Visualping{" "}
          <span className="text-brand-600">— beyond screenshot diffs</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Visualping tells you <em>that</em> a page changed. KompWatch tells you{" "}
          <strong className="text-gray-900">what changed and why it matters</strong>. AI-powered
          change summaries, CSS selector targeting, and full SPA support — so you get competitive
          intelligence, not just pixel diffs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Visualping" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors
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

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Different tools for different jobs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Visualping is a page change detector. KompWatch is a competitor intelligence platform.
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
                <li>&check; AI change summaries (what + why)</li>
                <li>&check; CSS selector targeting</li>
                <li>&check; SPA / JS-heavy site support</li>
                <li>&check; Daily competitor digests</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Visualping
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                ~$14<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">~$168 / year &middot; free plan available</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Screenshot diff only</li>
                <li>&middot; No AI analysis</li>
                <li>&middot; No CSS selectors</li>
                <li>&middot; Per-change email alerts</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Visualping is cheaper for basic page monitoring. KompWatch delivers{" "}
            <strong className="text-gray-900">competitive intelligence</strong> — AI summaries,
            change categorization, and daily digests across all competitors in one email.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Visualping
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Visualping wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Visualping</th>
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
                      <ComparisonCell value={row.visualping} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Visualping
            pricing from their public website.
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
                <li>&middot; Tracking multiple competitors and want AI-powered summaries of what changed</li>
                <li>&middot; Monitoring SPA / JavaScript-heavy sites (React, Vue, Next.js)</li>
                <li>&middot; Wanting one daily digest instead of per-change email noise</li>
                <li>&middot; Needing CSS selector targeting to track specific page sections</li>
                <li>&middot; Looking for competitive intelligence, not just change detection</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Visualping if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Monitoring a handful of static pages for any visual change</li>
                <li>&middot; Wanting the cheapest option and don&rsquo;t need AI analysis</li>
                <li>&middot; Tracking non-competitor pages (legal docs, government sites, etc.)</li>
                <li>&middot; Happy with screenshot diffs and don&rsquo;t need change categorization</li>
                <li>&middot; Already set up on Visualping and satisfied with the output</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Visualping"
        faqs={[
          {
            question: "How much does Visualping cost?",
            answer: "Visualping offers a free plan with limited checks and paid plans starting around $14/mo. KompWatch also offers a free plan (2 competitors, weekly digest) and a Pro plan at $49/mo with AI summaries, CSS targeting, and daily digests.",
          },
          {
            question: "What is the difference between KompWatch and Visualping?",
            answer: "Visualping is a page change detection tool — it takes screenshots and shows you a visual diff when something changes. KompWatch is a competitor intelligence platform — it uses a headless browser to render pages (including SPAs), identifies what type of change occurred (pricing, feature, content), and delivers AI-generated summaries explaining what changed and why it matters.",
          },
          {
            question: "Does Visualping work with JavaScript-heavy sites?",
            answer: "Visualping has limited support for JavaScript-rendered content. Modern SaaS sites built with React, Vue, or Next.js may not render fully before the screenshot is taken, causing changes to be missed. KompWatch uses Playwright (a real headless browser) to fully render pages before analysis.",
          },
          {
            question: "Can I track specific sections of a page with Visualping?",
            answer: "Visualping monitors the full page visually — any change anywhere on the page triggers an alert, including irrelevant changes like ad rotations or navbar tweaks. KompWatch supports CSS selector targeting so you can monitor only the pricing table, feature list, or specific section you care about.",
          },
          {
            question: "Does KompWatch send fewer emails than Visualping?",
            answer: "Yes. Visualping sends one email per change, per page — which creates inbox noise when tracking multiple competitors. KompWatch consolidates all changes into a single daily or weekly digest with AI summaries, so you get one actionable email instead of dozens of screenshot alerts.",
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
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need
            AI summaries and daily digests. No sales call. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Visualping" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Outgrowing Visualping?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Start KompWatch free
            </Link>{" "}
            and see the difference AI summaries make.
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
            <Link href="/vs-already-dev" className="text-sm text-gray-500 hover:text-gray-700">
              vs Already.dev
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
