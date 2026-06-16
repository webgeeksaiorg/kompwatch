import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { CompareEmailCapture } from "@/components/compare-email-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "KompWatch vs HeadsUp (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs HeadsUp: honest comparison of two AI-powered competitor monitoring tools. See pricing, features, rendering, and digest quality side-by-side. Both start free.",
  keywords: [
    "KompWatch vs HeadsUp",
    "HeadsUp alternative",
    "HeadsUp competitor monitoring",
    "HeadsUp vs KompWatch",
    "AI competitor monitoring comparison",
    "HeadsUp pricing",
    "competitor monitoring tools 2026",
    "HeadsUp Product Hunt",
    "competitive intelligence tools comparison",
    "AI competitor tracking",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-headsup`,
  },
  openGraph: {
    title: "KompWatch vs HeadsUp (2026) — AI Competitor Monitoring Compared",
    description:
      "Two AI-native competitor monitoring tools, compared honestly. Pricing, features, rendering, and digest quality — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-headsup`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs HeadsUp — AI Competitor Monitoring Compared",
    description:
      "Both use AI for competitor monitoring. KompWatch uses Playwright + Claude for deep analysis. HeadsUp focuses on lightweight alerting. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  headsup: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", headsup: "Free / paid tiers" },
  { feature: "Self-serve signup", kompwatch: true, headsup: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", headsup: "AI alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, headsup: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", headsup: "Limited" },
  { feature: "CSS selector targeting", kompwatch: true, headsup: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", headsup: false },
  { feature: "Pricing page tracking", kompwatch: true, headsup: true },
  { feature: "Feature & product page tracking", kompwatch: true, headsup: true },
  { feature: "Blog & content monitoring", kompwatch: true, headsup: true },
  { feature: "Job listing tracking", kompwatch: true, headsup: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", headsup: "Alert-based" },
  { feature: "Battlecard export", kompwatch: "One-click HTML", headsup: false },
  { feature: "Month-to-month billing", kompwatch: true, headsup: true },
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

const differentiators = [
  {
    title: "AI digests vs AI alerts",
    description:
      "HeadsUp notifies you when a page changes. KompWatch generates a Claude-powered digest that explains what changed, classifies the change type (pricing, features, messaging), and assigns severity. You read a summary, not a diff.",
  },
  {
    title: "Full headless rendering",
    description:
      "KompWatch uses Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. React-built pricing pages, SPA feature lists, and dynamically loaded content are captured accurately — not missed by lightweight HTTP fetching.",
  },
  {
    title: "CSS selector precision",
    description:
      "Instead of monitoring entire pages and drowning in header/footer/nav churn, KompWatch lets you target specific page sections with CSS selectors — like .pricing-table or #features. You get signal about the content that matters, not noise from layout changes.",
  },
];

export default function CompareKompWatchVsHeadsUpPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs HeadsUp", path: "/compare/kompwatch-vs-headsup" },
        ]}
      />
      <SoftwareApplicationSchema />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900">
              Comparisons
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

      {/* Product Hunt timing banner */}
      <div className="border-b border-blue-200 bg-blue-50 px-6 py-3 text-center text-sm text-blue-900">
        <strong>June 2026:</strong> HeadsUp recently launched on Product Hunt.
        Evaluating both tools? This page breaks down exactly where each one wins.
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          2026 comparison
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs HeadsUp{" "}
          <span className="text-brand-600">
            — two AI approaches to competitor monitoring
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Both KompWatch and HeadsUp use AI to monitor competitor websites. The difference
          is depth: HeadsUp focuses on lightweight change alerts. KompWatch uses{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">Claude-powered digests</strong> that classify
          changes by type and severity — so your team acts on signal, not noise.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare HeadsUp Hero CTA"
            eventProps={{ competitor: "HeadsUp", page: "compare-kompwatch-vs-headsup" }}
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
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      {/* Key differentiators */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Where KompWatch goes deeper
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            HeadsUp is a solid tool for basic monitoring. KompWatch is built for teams
            that need to <em>act</em> on competitive intelligence, not just see it.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Pricing: both start free
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data as of June 2026.
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
              <div className="mt-1 text-sm text-gray-500">$588/yr &middot; cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&#10003; 10 competitors, 6-hour snapshots</li>
                <li>&#10003; Daily AI digests (Claude-powered)</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Full Playwright headless rendering</li>
                <li>&#10003; CSS selector targeting per competitor</li>
                <li>&#10003; Job listing tracking</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                HeadsUp (paid)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                Varies
              </div>
              <div className="mt-1 text-sm text-gray-500">Check HeadsUp for current tiers</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; AI-powered change alerts</li>
                <li>&middot; Limited JS rendering</li>
                <li>&middot; No severity classification</li>
                <li>&middot; No content zone labels</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs HeadsUp
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where HeadsUp wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">HeadsUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-gray-700">
                      {row.feature}
                      {row.note && (
                        <span className="ml-1 text-xs text-gray-400">({row.note})</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.kompwatch} highlight />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.headsup} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            HeadsUp pricing tiers vary; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare HeadsUp Mid CTA"
            eventProps={{ competitor: "HeadsUp", page: "compare-kompwatch-vs-headsup" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro ($49/mo) for 10.
          </p>
        </div>
      </section>

      {/* When to pick which */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            When to pick which
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">
                Pick KompWatch if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You want AI-written summaries explaining <em>what</em> changed and <em>why it matters</em>, not just raw alerts</li>
                <li>&middot; You track React/SPA pricing pages that lightweight scrapers miss</li>
                <li>&middot; You want to filter digests by change type (pricing, features, messaging, jobs)</li>
                <li>&middot; Competitor hiring signals matter to your strategy</li>
                <li>&middot; You need CSS selector targeting to ignore header/footer/nav noise</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick HeadsUp if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You want a lightweight setup with minimal configuration</li>
                <li>&middot; You only need to know <em>that</em> a page changed, not a detailed analysis</li>
                <li>&middot; Your competitor pages are mostly static HTML (no heavy JS rendering needed)</li>
                <li>&middot; You prefer alert-based notifications over scheduled digests</li>
                <li>&middot; You want more free-tier competitors (HeadsUp offers more on free)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="HeadsUp"
        faqs={[
          {
            question: "What is the difference between KompWatch and HeadsUp?",
            answer:
              "Both are AI-powered competitor monitoring tools that track website changes. HeadsUp focuses on lightweight alerting — it notifies you when a page changes with AI-enhanced alerts. KompWatch goes deeper: it uses full Playwright headless rendering to capture JavaScript-heavy pages, CSS selector targeting to watch specific page sections, and Claude-powered digests that classify changes by type (pricing, features, messaging) and severity (Low/Medium/High/Critical). HeadsUp is simpler to set up; KompWatch gives teams more actionable intelligence.",
          },
          {
            question: "How does KompWatch pricing compare to HeadsUp?",
            answer:
              "Both offer free tiers. KompWatch Free includes 2 competitors with weekly AI digests. KompWatch Pro is $49/mo for 10 competitors with daily digests, severity classification, and headless rendering. HeadsUp's pricing varies by tier — check their site for current details. The key pricing difference is what you get for your money: KompWatch includes Claude-powered analysis, content zone classification, and job listing tracking in the Pro tier.",
          },
          {
            question: "Does HeadsUp use headless browser rendering like KompWatch?",
            answer:
              "HeadsUp uses limited JavaScript rendering. KompWatch uses full Playwright with headless Chromium, which means it renders React, Vue, Angular, and other SPA-built pages completely before taking a snapshot. If your competitors use modern JavaScript frameworks for their pricing or feature pages, KompWatch will capture content that lightweight HTTP-based monitoring may miss.",
          },
          {
            question: "Can I try both KompWatch and HeadsUp before choosing?",
            answer:
              "Yes — and we recommend it. Both tools offer free tiers. Sign up for KompWatch (2 competitors, no credit card) and HeadsUp, add the same competitor URLs, and compare output quality for 2-4 weeks. Look at rendering accuracy on JS-heavy pages, alert volume vs digest quality, and whether AI summaries or raw alerts fit your team's workflow better.",
          },
          {
            question: "HeadsUp just launched on Product Hunt. Is it too new to trust?",
            answer:
              "Product Hunt launches create visibility, not maturity. Evaluate based on output quality: add the same competitors in both tools and compare what you get. KompWatch has been running headless Playwright snapshots and Claude-powered digests through multiple product cycles. Both tools offer free tiers, so test with real data rather than relying on launch-day momentum.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. HeadsUp does not offer dedicated job listing tracking.",
          },
          {
            question: "What if I only need basic change alerts, not AI digests?",
            answer:
              "If you only need to know that a page changed — without severity classification, content zone labels, or AI-written summaries — HeadsUp's lighter approach may be a better fit. KompWatch is built for teams that need to act on changes: the AI digest explains what happened, categorizes the change, and assigns severity so you can triage across multiple competitors without reading raw diffs.",
          },
        ]}
      />

      <CompareEmailCapture competitor="HeadsUp" source="compare-headsup" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try both. Compare the output.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Add the same URLs you track in HeadsUp and
            see which tool gives your team more actionable intelligence.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare HeadsUp Bottom CTA"
              eventProps={{ competitor: "HeadsUp", page: "compare-kompwatch-vs-headsup" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already evaluating HeadsUp?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare digest quality vs alert volume. &middot;{" "}
            <Link href="/vs-headsup" className="underline hover:text-gray-700">
              Quick comparison
            </Link>{" "}
            &middot;{" "}
            <Link href="/pricing" className="underline hover:text-gray-700">
              Pricing
            </Link>
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
            </Link>
            <Link href="/vs-headsup" className="text-sm text-gray-500 hover:text-gray-700">
              vs HeadsUp
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
