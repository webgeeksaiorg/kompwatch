import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Owler Alternative — KompWatch vs Owler (Honest Comparison)",
  description:
    "Outgrowing Owler's free tier? KompWatch monitors competitor websites directly — pricing pages, features, blogs, jobs — with AI digests for $49/mo. Owler tracks news; KompWatch tracks what competitors actually ship.",
  keywords: [
    "Owler alternative",
    "Owler vs KompWatch",
    "Owler competitor",
    "Owler Pro pricing",
    "competitor website monitoring",
    "competitive intelligence tool",
    "Owler upgrade",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-owler`,
  },
  openGraph: {
    title: "KompWatch vs Owler — Track What Competitors Ship, Not Just What's Reported",
    description:
      "Honest side-by-side: KompWatch ($49/mo, website change detection + AI digests) vs Owler (news aggregation, no website change tracking). See the full comparison.",
    url: `${siteUrl}/vs-owler`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Owler — Honest Comparison",
    description:
      "Owler aggregates company news. KompWatch monitors competitor websites directly with AI summaries — pricing changes, feature launches, hiring signals. See the side-by-side.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  owler: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", owler: "Free / $35/mo (Pro)" },
  { feature: "Free plan", kompwatch: true, owler: true },
  { feature: "Self-serve signup", kompwatch: true, owler: true },
  { feature: "Monitors competitor's own website", kompwatch: true, owler: false },
  { feature: "Pricing page change detection", kompwatch: true, owler: false },
  { feature: "Feature & product page tracking", kompwatch: true, owler: false },
  { feature: "Blog & content monitoring", kompwatch: true, owler: false },
  { feature: "Job listing tracking", kompwatch: true, owler: false },
  { feature: "Headless browser (handles React/SPA sites)", kompwatch: true, owler: false },
  { feature: "AI change summaries", kompwatch: true, owler: false },
  { feature: "News aggregation (press, funding, M&A)", kompwatch: false, owler: true },
  { feature: "Headcount estimates", kompwatch: false, owler: true },
  { feature: "Company database (5M+ profiles)", kompwatch: false, owler: true },
  { feature: "Email digests", kompwatch: true, owler: true },
  { feature: "CSV / JSON export", kompwatch: true, owler: "Pro Plus" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", owler: "Under 5 minutes" },
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

export default function VsOwlerPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Owler", path: "/vs-owler" }]} />
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
          Owler alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Owler{" "}
          <span className="text-brand-600">— track what competitors ship, not just what&rsquo;s reported</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Owler aggregates company news, funding, and headcount estimates from public sources. It&rsquo;s
          great for that. But it{" "}
          <strong className="text-gray-900">doesn&rsquo;t monitor competitor websites</strong> — so
          pricing changes, feature launches, and blog posts go unseen until someone writes about them.
          KompWatch watches the websites directly and emails you AI digests.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Owler" }}
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

      {/* Different categories callout */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Two different jobs — pick the right tool
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Owler and KompWatch sit in adjacent categories. Here&rsquo;s the honest split.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch — website change detection
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Watches what competitors <em>do</em>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✓ Pricing page edits (new tiers, price hikes)</li>
                <li>✓ Feature copy changes (positioning shifts)</li>
                <li>✓ New blog posts and announcements</li>
                <li>✓ Job listings (hiring as a leading signal)</li>
                <li>✓ AI digests — read summaries, not raw diffs</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                $49/mo for 10 competitors. Free plan with 2.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Owler — news &amp; company data
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Watches what&rsquo;s <em>reported about</em> competitors
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>· Press releases &amp; news mentions</li>
                <li>· Funding rounds and M&amp;A activity</li>
                <li>· Crunchbase-style company profiles</li>
                <li>· Estimated headcount and revenue</li>
                <li>· Daily news digest emails</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Free / Pro $35/mo / Pro Plus ~$100–$399/mo for teams.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Many teams use both: Owler for company news, KompWatch for what changed on the
            competitor&rsquo;s actual website this week.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Owler
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Owler wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Owler</th>
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
                      <ComparisonCell value={row.owler} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Owler pricing sourced
            from owler.com.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Owler" }}
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
                <li>· Watching SaaS competitors with React/Next.js sites that need a real browser to render</li>
                <li>· Tracking pricing page changes, feature launches, or new blog posts as they happen</li>
                <li>· Tired of waiting for press coverage to learn a competitor shipped something</li>
                <li>· Using job listings as a leading signal for product/market moves</li>
                <li>· Looking for AI summaries instead of raw news feeds to triage</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Owler if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Building a CRM-style watchlist of company profiles for sales prospecting</li>
                <li>· Mainly tracking funding rounds, M&amp;A, and leadership changes</li>
                <li>· Looking for headcount and revenue estimates across thousands of companies</li>
                <li>· OK with news-cycle-speed updates rather than same-day website changes</li>
                <li>· Not monitoring website-level changes (pricing pages, feature copy) at all</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Owler"
        faqs={[
          {
            question: "How much does Owler cost?",
            answer: "Owler offers a free tier (limited tracked companies and daily news digest). Owler Pro is $35/mo per user. Owler Pro Plus and team plans are typically quoted at ~$100–$399/mo depending on seats and features. KompWatch Pro is $49/mo for 10 competitors with AI digests, plus a free plan with 2 competitors.",
          },
          {
            question: "What is the difference between KompWatch and Owler?",
            answer: "Different categories. Owler is a news and company-database tool — it surfaces press releases, funding announcements, leadership changes, and headcount estimates from public sources. KompWatch is a website change detection tool — it monitors competitors' actual websites (pricing pages, feature copy, blog, job listings) and emails AI digests of what changed. Many teams use both: Owler for news, KompWatch for what shipped on the website this week.",
          },
          {
            question: "Does Owler monitor competitor websites for changes?",
            answer: "Based on public information as of April 2026, Owler does not monitor competitor websites directly for change detection. It aggregates news mentions, press releases, and structured data about companies. If a competitor edits their pricing page or launches a feature without a press release, Owler typically won't surface it. KompWatch watches the websites themselves and detects changes within the snapshot interval.",
          },
          {
            question: "Can I try KompWatch for free, like Owler?",
            answer: "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. Owler also offers a free tier with limited features. The free plans solve different jobs: KompWatch free gives you website change detection on 2 sites, Owler free gives you a daily news feed for tracked companies.",
          },
          {
            question: "Should I use both Owler and KompWatch?",
            answer: "It's a reasonable setup. Owler covers news, funding rounds, and corporate signals — useful for sales prospecting and high-level competitive context. KompWatch covers what's changing on competitor websites in near-real-time — pricing tweaks, feature launches, hiring shifts. They don't overlap much; they layer.",
          },
          {
            question: "Does KompWatch handle JavaScript-heavy sites that Owler can't see?",
            answer: "KompWatch uses a headless Chromium browser (Playwright) to fully render React, Next.js, and Vue sites before scanning for changes. Owler isn't a website monitor at all, so the question is moot for Owler — but if you've tried simple change-detection tools that returned blank pages on modern SaaS sites, KompWatch's headless rendering is the fix.",
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
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) for 10 competitors and
            daily AI digests. No credit card. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Owler" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Owler?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run KompWatch alongside it
            </Link>{" "}
            and see what Owler misses.
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-rivalsense" className="text-sm text-gray-500 hover:text-gray-700">
              vs RivalSense
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
