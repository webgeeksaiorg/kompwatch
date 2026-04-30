import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Changeflow Alternative — KompWatch vs Changeflow (Honest Comparison)",
  description:
    "Looking for a Changeflow alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — free plan included (vs Changeflow's $4/mo with no free tier). Headless browser, CSS selectors, structured digests.",
  keywords: [
    "Changeflow alternative",
    "Changeflow vs KompWatch",
    "Changeflow competitor",
    "Changeflow pricing",
    "competitor monitoring tool",
    "webpage change monitoring",
    "competitive intelligence software",
    "Changeflow review",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-changeflow`,
  },
  openGraph: {
    title: "KompWatch vs Changeflow — Free Tier + Job Tracking + CSS Selectors",
    description:
      "Honest side-by-side: KompWatch (free plan, headless browser, job tracking) vs Changeflow ($4/mo, no free tier, no job tracking). See the full feature comparison.",
    url: `${siteUrl}/vs-changeflow`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Changeflow — Honest Comparison",
    description:
      "Changeflow monitors pages for $4/mo but lacks job tracking, CSS selectors, and a free tier. KompWatch includes all three. See the full comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  changeflow: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", changeflow: "$4/mo" },
  { feature: "Free plan", kompwatch: true, changeflow: false },
  { feature: "Self-serve signup", kompwatch: true, changeflow: true },
  { feature: "No sales call required", kompwatch: true, changeflow: true },
  { feature: "AI change summaries", kompwatch: true, changeflow: true },
  { feature: "Email digests", kompwatch: true, changeflow: true },
  { feature: "Slack alerts", kompwatch: true, changeflow: true },
  { feature: "Webhook alerts", kompwatch: true, changeflow: true },
  { feature: "Headless browser (JS/SPA sites)", kompwatch: true, changeflow: false },
  { feature: "CSS selector targeting", kompwatch: true, changeflow: false },
  { feature: "Job listing tracking", kompwatch: true, changeflow: false },
  { feature: "Tech stack detection", kompwatch: "Pro+", changeflow: false },
  { feature: "Structured digest format", kompwatch: true, changeflow: false },
  { feature: "Pricing page tracking", kompwatch: true, changeflow: true },
  { feature: "Blog & content monitoring", kompwatch: true, changeflow: true },
  { feature: "Competitors per plan", kompwatch: "2 free / 10 Pro / 50 Team", changeflow: "Varies by plan" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", changeflow: "Under 5 minutes" },
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

export default function VsChangeflowPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Changeflow", path: "/vs-changeflow" }]} />
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
          Changeflow alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Changeflow{" "}
          <span className="text-brand-600">— free tier, headless browser, job tracking</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Changeflow is a solid lightweight page monitoring tool at $4/mo. But it skips JavaScript-heavy
          sites (no headless browser), doesn&rsquo;t track job listings, and has no CSS selector targeting
          or free tier. KompWatch starts{" "}
          <strong className="text-gray-900">free with 2 competitors</strong>, renders every page with
          Playwright, and delivers structured AI digests with job and hiring signals included.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Changeflow" }}
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
          No credit card. No sales call. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The pricing comparison
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Changeflow is cheaper per month — but KompWatch has a free tier and more features.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                Free<span className="text-lg font-normal text-gray-500"> / $49/mo Pro</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">2 competitors free forever</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&#10003; Free tier — 2 competitors, weekly digests</li>
                <li>&#10003; Headless browser (Playwright)</li>
                <li>&#10003; CSS selector targeting</li>
                <li>&#10003; Job listing tracking</li>
                <li>&#10003; AI change summaries</li>
                <li>&#10003; Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Changeflow
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $4<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">No free tier available</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; AI change summaries</li>
                <li>&middot; Email, Slack, webhook alerts</li>
                <li>&middot; No headless browser</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
                <li>&middot; No free plan</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Changeflow is less expensive per month, but KompWatch&rsquo;s free tier lets you start
            at <strong className="text-gray-900">$0</strong> — and Pro includes headless rendering,
            CSS selectors, and job tracking that Changeflow doesn&rsquo;t offer at any price.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Changeflow
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Changeflow wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Changeflow</th>
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
                      <ComparisonCell value={row.changeflow} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Changeflow" }}
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
                <li>&middot; Monitoring competitors with JavaScript-heavy sites (React, Next.js, Vue)</li>
                <li>&middot; Tracking job listings and hiring signals as part of competitive intel</li>
                <li>&middot; Wanting CSS selector targeting to watch specific page sections (not the whole page)</li>
                <li>&middot; Looking for a free tier to start before committing</li>
                <li>&middot; Needing structured digests that consolidate changes into one actionable email</li>
                <li>&middot; Tracking up to 50 competitors on the Team plan</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Changeflow if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Monitoring mostly static or server-rendered pages (no JavaScript rendering needed)</li>
                <li>&middot; On a tight budget and $4/mo is the right price point</li>
                <li>&middot; Only need basic page change alerts without job tracking or CSS selectors</li>
                <li>&middot; Happy with simple change notifications rather than structured digests</li>
                <li>&middot; Not tracking competitor hiring as part of your CI signal mix</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Changeflow"
        faqs={[
          {
            question: "How much does Changeflow cost?",
            answer: "Changeflow starts at $4/mo for basic webpage monitoring with AI summaries. There is no free plan. KompWatch offers a free tier with 2 competitors and weekly AI digests — no credit card required. KompWatch Pro is $49/mo with 10 competitors, daily digests, headless browser rendering, and job tracking.",
          },
          {
            question: "What is the difference between KompWatch and Changeflow?",
            answer: "Both monitor webpages and send AI-generated change summaries. Changeflow is a lightweight monitoring tool focused on simple page changes. KompWatch adds headless browser rendering (for JavaScript-heavy sites), CSS selector targeting (watch specific sections), job listing tracking, structured digest format, and a free plan. The core monitoring overlap is real — the difference is depth and coverage.",
          },
          {
            question: "Does Changeflow support JavaScript-rendered sites?",
            answer: "No. Changeflow does not use a headless browser, so sites built with React, Next.js, Vue, or other JavaScript frameworks may return incomplete or missing content. KompWatch uses Playwright (headless Chromium) to fully render every page before comparing snapshots.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Upgrade to Pro ($49/mo) for 10 competitors and daily digests. Changeflow does not offer a free tier.",
          },
          {
            question: "Does KompWatch track job listings like Changeflow?",
            answer: "KompWatch tracks competitor job listings to surface hiring signals — new engineering roles that may indicate product investments, sales hiring that signals market expansion. Changeflow does not offer job listing tracking.",
          },
          {
            question: "Is Changeflow cheaper than KompWatch?",
            answer: "Changeflow's $4/mo plan is cheaper than KompWatch Pro ($49/mo). However, KompWatch offers a free tier with 2 competitors — so you can start at $0. And KompWatch Pro includes headless browser rendering, CSS selector targeting, job tracking, and structured digests that Changeflow doesn't offer at any price. The right choice depends on whether you need those features.",
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
              eventProps={{ competitor: "Changeflow" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Changeflow?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare digests side-by-side.
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
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
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
