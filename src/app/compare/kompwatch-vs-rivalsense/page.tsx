import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "KompWatch vs RivalSense (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs RivalSense: honest comparison of two AI-powered competitor monitoring tools. KompWatch Pro is $49/mo for 10 competitors with AI digests. RivalSense Basic is $44.99/mo for 3 competitors. See the full side-by-side.",
  keywords: [
    "KompWatch vs RivalSense",
    "RivalSense alternative",
    "RivalSense competitor monitoring",
    "RivalSense vs KompWatch",
    "AI competitor monitoring comparison",
    "RivalSense pricing",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "RivalSense review",
    "affordable competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-rivalsense`,
  },
  openGraph: {
    title: "KompWatch vs RivalSense (2026) — AI Competitor Monitoring Compared",
    description:
      "Two AI-powered competitor monitoring tools compared honestly. Pricing, features, rendering, and AI digest quality — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-rivalsense`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs RivalSense — AI Competitor Monitoring Compared",
    description:
      "KompWatch Pro: $49/mo, 10 competitors, Claude-powered digests. RivalSense Basic: $44.99/mo, 3 competitors, no AI summaries. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  rivalsense: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", rivalsense: "$44.99/mo Basic" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", rivalsense: false },
  { feature: "Competitors at entry paid tier", kompwatch: "10 (Pro)", rivalsense: "3 (Basic)" },
  { feature: "Self-serve signup", kompwatch: true, rivalsense: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", rivalsense: false },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, rivalsense: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", rivalsense: false, note: "HTTP-only fetching" },
  { feature: "CSS selector targeting", kompwatch: true, rivalsense: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", rivalsense: false },
  { feature: "Pricing page tracking", kompwatch: true, rivalsense: true },
  { feature: "Feature & product page tracking", kompwatch: true, rivalsense: true },
  { feature: "Blog & content monitoring", kompwatch: true, rivalsense: true },
  { feature: "Job listing tracking", kompwatch: true, rivalsense: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", rivalsense: "Email alerts" },
  { feature: "CSV / JSON export", kompwatch: true, rivalsense: false },
  { feature: "Battlecard export", kompwatch: "One-click HTML", rivalsense: false },
  { feature: "Month-to-month billing", kompwatch: true, rivalsense: true },
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
    title: "3x the competitors for $4 more",
    description:
      "RivalSense Basic gives you 3 competitors for $44.99/mo. KompWatch Pro gives you 10 for $49/mo — plus AI digests, job tracking, and CSS selectors. To get more competitors on RivalSense, you jump to Growth at $111/mo.",
  },
  {
    title: "AI digests vs raw change alerts",
    description:
      "RivalSense sends email alerts when a page changes. KompWatch generates Claude-powered digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity — so you read a summary, not a diff.",
  },
  {
    title: "Free tier to evaluate first",
    description:
      "KompWatch offers a free plan with 2 competitors and weekly AI digests — no credit card required. RivalSense has no free tier; the entry point is $44.99/mo. Try before you pay.",
  },
];

export default function CompareKompWatchVsRivalSensePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs RivalSense", path: "/compare/kompwatch-vs-rivalsense" },
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

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          2026 comparison
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs RivalSense{" "}
          <span className="text-brand-600">
            — same price, 3&times; the competitors, AI included
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          RivalSense Basic is{" "}
          <strong className="text-gray-900">$44.99/mo for 3 competitors</strong> with no AI
          summaries. KompWatch Pro is{" "}
          <strong className="text-gray-900">$49/mo for 10 competitors</strong> with{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">job listing tracking</strong>. Plus a free plan
          to start.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare RivalSense Hero CTA"
            eventProps={{ competitor: "RivalSense", page: "compare-kompwatch-vs-rivalsense" }}
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
            RivalSense covers basic website monitoring. KompWatch adds AI analysis,
            headless rendering, and a free tier.
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
              Pricing: nearly the same — value is not
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
                <li>&#10003; Free tier available (2 competitors)</li>
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
                RivalSense Basic
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $44.99<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Growth $111/mo &middot; Business $222.99/mo
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; 3 competitors on Basic</li>
                <li>&middot; No AI change summaries</li>
                <li>&middot; No headless browser rendering</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No severity classification</li>
                <li>&middot; No free plan</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            For $4 more per month, KompWatch gives you{" "}
            <strong className="text-gray-900">3&times; the competitor slots</strong>,
            AI digests, headless rendering, and a free tier to evaluate first.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs RivalSense
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where RivalSense wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">RivalSense</th>
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
                      <ComparisonCell value={row.rivalsense} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            RivalSense pricing sourced from rivalsense.com.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare RivalSense Mid CTA"
            eventProps={{ competitor: "RivalSense", page: "compare-kompwatch-vs-rivalsense" }}
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
                <li>&middot; You&rsquo;re tracking 4+ competitors and don&rsquo;t want to pay $111/mo for RivalSense Growth</li>
                <li>&middot; You want AI-written summaries explaining <em>what</em> changed and <em>why it matters</em></li>
                <li>&middot; You track React/SPA pricing pages that HTTP-only scrapers miss</li>
                <li>&middot; Competitor hiring signals matter to your strategy</li>
                <li>&middot; You want to try before you pay (free plan, 2 competitors, weekly digest)</li>
                <li>&middot; You need CSS selector targeting to ignore header/footer noise</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick RivalSense if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You only track 3 competitors and don&rsquo;t need AI summaries</li>
                <li>&middot; You&rsquo;re already paying for it and switching isn&rsquo;t worth the effort</li>
                <li>&middot; You prefer raw change alerts over AI-generated digests</li>
                <li>&middot; Your competitor pages are mostly static HTML (no heavy JS rendering needed)</li>
                <li>&middot; You don&rsquo;t need job listing tracking or CSS selectors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="RivalSense"
        faqs={[
          {
            question: "What is the difference between KompWatch and RivalSense?",
            answer:
              "Both are self-serve competitor monitoring tools at a similar price point. The main differences: KompWatch Pro ($49/mo) gives you 10 competitors with Claude-powered AI digests, Playwright headless rendering, CSS selector targeting, severity classification, content zone tagging, and job listing tracking. RivalSense Basic ($44.99/mo) gives you 3 competitors with email alerts — no AI summaries, no headless rendering, no CSS selectors. To get more competitors on RivalSense, you jump to Growth at $111/mo.",
          },
          {
            question: "How does KompWatch pricing compare to RivalSense?",
            answer:
              "RivalSense Basic is $44.99/mo for 3 competitors, Growth is $111/mo, and Business is $222.99/mo. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo for 10 competitors with daily digests. For $4 more than RivalSense Basic, you get 3x the competitor slots plus AI analysis, headless rendering, and job tracking.",
          },
          {
            question: "Does RivalSense have AI change summaries like KompWatch?",
            answer:
              "Based on publicly available information as of June 2026, RivalSense provides change alerts without AI-generated summaries. KompWatch uses Claude to generate digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity (Low/Medium/High/Critical). You read a summary, not a raw diff.",
          },
          {
            question: "Can I try both KompWatch and RivalSense before choosing?",
            answer:
              "KompWatch has a free plan with 2 competitors and weekly AI digests — no credit card required. RivalSense does not offer a free tier; the entry point is $44.99/mo. You can sign up for KompWatch free, add the same competitor URLs, and compare output quality before committing to either tool.",
          },
          {
            question: "Does KompWatch render JavaScript-heavy pages better than RivalSense?",
            answer:
              "Yes. KompWatch uses full Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. React-built pricing pages, SPA feature lists, and dynamically loaded content are captured accurately. RivalSense uses HTTP-based fetching, which may miss content rendered by modern JavaScript frameworks.",
          },
          {
            question: "Can I switch from RivalSense to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in RivalSense, set CSS selectors to target specific page sections, and your first snapshot fires immediately. Setup takes about 5 minutes. You can run both in parallel during the transition.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. RivalSense does not offer dedicated job listing tracking.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try both. Compare the output.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Add the same URLs you track in RivalSense and
            see which tool gives your team more actionable intelligence.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare RivalSense Bottom CTA"
              eventProps={{ competitor: "RivalSense", page: "compare-kompwatch-vs-rivalsense" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on RivalSense?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare digest quality vs alert volume. &middot;{" "}
            <Link href="/vs-rivalsense" className="underline hover:text-gray-700">
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
            <Link href="/vs-rivalsense" className="text-sm text-gray-500 hover:text-gray-700">
              vs RivalSense
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
