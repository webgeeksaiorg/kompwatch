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
    "KompWatch vs Parano.ai (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Parano.ai: honest comparison of pricing, features, and setup. Parano.ai is $89/mo with no free tier. KompWatch starts free with self-serve signup and Claude-powered AI digests.",
  keywords: [
    "KompWatch vs Parano",
    "Parano.ai alternative",
    "Parano competitor monitoring",
    "Parano.ai vs KompWatch",
    "AI competitor monitoring comparison",
    "Parano.ai pricing",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "Parano.ai review",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-parano`,
  },
  openGraph: {
    title: "KompWatch vs Parano.ai (2026) — AI Competitor Monitoring Compared",
    description:
      "Two AI-native competitor monitoring tools compared. Pricing, features, setup — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-parano`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Parano.ai — Competitor Monitoring Compared",
    description:
      "Parano.ai is $89/mo with AI-powered alerts. KompWatch starts free with Claude-powered digests, headless rendering, and CSS selectors. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  parano: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", parano: "$89/mo" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", parano: false },
  { feature: "Self-serve signup", kompwatch: true, parano: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", parano: "AI-powered alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, parano: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", parano: "Unknown", note: "Not publicly documented" },
  { feature: "CSS selector targeting", kompwatch: true, parano: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", parano: false },
  { feature: "Pricing page tracking", kompwatch: true, parano: true },
  { feature: "Feature & product page tracking", kompwatch: true, parano: true },
  { feature: "Blog & content monitoring", kompwatch: true, parano: true },
  { feature: "Job listing tracking", kompwatch: true, parano: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", parano: "Configurable alerts" },
  { feature: "Time to first insight", kompwatch: "< 2 minutes", parano: "Minutes (self-serve)" },
  { feature: "Month-to-month billing", kompwatch: true, parano: true },
  { feature: "Team plan with 50+ competitors", kompwatch: "$149/mo (50 competitors)", parano: "Not publicly listed" },
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
    title: "Free tier to try before you buy",
    description:
      "Parano.ai starts at $89/mo with no free plan. KompWatch has a free tier with 2 competitors and weekly AI digests — no credit card required. Try it risk-free before committing to a paid plan.",
  },
  {
    title: "Claude-powered digests with severity",
    description:
      "Both tools use AI, but KompWatch generates Claude-powered digests that classify changes by type (pricing, features, messaging, jobs) and assign severity levels — so your team prioritizes what actually matters instead of sifting through raw alerts.",
  },
  {
    title: "45% cheaper at the Pro tier",
    description:
      "Parano.ai is $89/mo ($1,068/yr). KompWatch Pro is $49/mo ($588/yr) for 10 competitors with daily digests — 45% less. Both are self-serve with month-to-month billing, but KompWatch gives you more features for less.",
  },
];

export default function CompareKompWatchVsParanoPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Parano.ai", path: "/compare/kompwatch-vs-parano" },
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
          KompWatch vs Parano.ai{" "}
          <span className="text-brand-600">
            — same category, different price
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Parano.ai is the closest direct competitor to KompWatch — both are
          AI-native, self-serve competitor monitoring tools. The difference?
          KompWatch is{" "}
          <strong className="text-gray-900">45% cheaper</strong>, ships{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> with
          severity classification, and includes a{" "}
          <strong className="text-gray-900">free tier</strong> to try before you buy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Parano Hero CTA"
            eventProps={{ competitor: "Parano", page: "compare-kompwatch-vs-parano" }}
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
            Where KompWatch wins over Parano.ai
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Both tools are AI-native and self-serve. Here&rsquo;s what sets KompWatch apart.
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
              Pricing: KompWatch starts free, Parano.ai starts at $89/mo
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
                <li>&#10003; Self-serve signup, no sales call</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Parano.ai
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $89<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$1,068/yr &middot; month-to-month</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; AI-powered competitor alerts</li>
                <li>&middot; Self-serve signup</li>
                <li>&middot; Competitor website monitoring</li>
                <li>&middot; No free tier</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No severity classification</li>
                <li>&middot; No job listing tracking</li>
                <li>&middot; No content zone classification</li>
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
              Feature-by-feature: KompWatch vs Parano.ai
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Parano.ai wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Parano.ai</th>
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
                      <ComparisonCell value={row.parano} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Parano.ai features may vary by plan; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Parano Mid CTA"
            eventProps={{ competitor: "Parano", page: "compare-kompwatch-vs-parano" }}
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
                <li>&middot; You want a free tier to evaluate before paying</li>
                <li>&middot; $89/mo is too much for your current monitoring needs</li>
                <li>&middot; You need AI digests that classify changes by severity and type</li>
                <li>&middot; You track React/SPA pages that need full headless rendering</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific sections</li>
                <li>&middot; Competitor hiring signals are part of your strategy</li>
                <li>&middot; You want content zone classification (pricing, features, messaging, jobs)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Parano.ai if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You&rsquo;re already using Parano.ai and happy with the workflow</li>
                <li>&middot; Parano.ai offers integrations specific to your stack that KompWatch doesn&rsquo;t</li>
                <li>&middot; You prefer Parano.ai&rsquo;s alert format or notification style</li>
                <li>&middot; Your team has existing workflows built around Parano.ai&rsquo;s interface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Parano.ai"
        faqs={[
          {
            question: "What is the difference between KompWatch and Parano.ai?",
            answer:
              "Both KompWatch and Parano.ai are AI-native, self-serve competitor monitoring tools. The key differences: KompWatch starts free (2 competitors, weekly digest), costs $49/mo for Pro vs Parano.ai's $89/mo, uses Claude-powered digests with severity classification and content zone tagging, and includes Playwright headless rendering and CSS selector targeting.",
          },
          {
            question: "How does KompWatch pricing compare to Parano.ai?",
            answer:
              "Parano.ai starts at $89/mo ($1,068/yr) with no free tier. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo ($588/yr) for 10 competitors with daily digests — 45% cheaper than Parano.ai. KompWatch Team ($149/mo) adds 50 competitors with hourly snapshots.",
          },
          {
            question: "Is Parano.ai better than KompWatch?",
            answer:
              "It depends on your needs. If you're already using Parano.ai and happy with the workflow, switching has a cost. But if you're evaluating both tools for the first time, KompWatch offers more features (severity classification, CSS selectors, content zones, job tracking) at a lower price point, plus a free tier to try risk-free.",
          },
          {
            question: "Can I try KompWatch for free before switching from Parano.ai?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. You can run both tools in parallel: add the same competitor URLs to KompWatch and compare the output quality. Setup takes under 2 minutes.",
          },
          {
            question: "Does KompWatch have headless browser rendering like Parano.ai?",
            answer:
              "KompWatch uses full Playwright with headless Chromium, which renders React, Vue, Angular, and other SPA-built pages completely before snapshotting. Parano.ai's rendering technology is not publicly documented — you should verify their approach for your specific use case.",
          },
          {
            question: "Why is KompWatch cheaper than Parano.ai?",
            answer:
              "KompWatch focuses on core competitor website monitoring with AI digests and keeps overhead low through self-serve distribution. No sales team, no managed services. Savings get passed to customers — $49/mo Pro vs $89/mo, plus a free tier Parano.ai doesn't offer.",
          },
          {
            question: "Can I switch from Parano.ai to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Parano.ai, set CSS selectors for specific page sections, and your first snapshot fires immediately. Run both tools in parallel during your evaluation period.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Parano.ai" source="compare-parano" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Get the same core website monitoring
            as Parano.ai at 45% less.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Parano Bottom CTA"
              eventProps={{ competitor: "Parano", page: "compare-kompwatch-vs-parano" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Parano.ai?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Try KompWatch free
            </Link>{" "}
            &middot;{" "}
            <Link href="/pricing" className="underline hover:text-gray-700">
              Pricing
            </Link>{" "}
            &middot;{" "}
            <Link href="/compare" className="underline hover:text-gray-700">
              All comparisons
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
