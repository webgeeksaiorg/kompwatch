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
    "KompWatch vs Spyglass (2026) — Indie SaaS Competitor Monitoring Compared",
  description:
    "KompWatch vs Spyglass: honest comparison of two indie-SaaS competitor monitoring tools. KompWatch is $49/mo for 10 competitors with daily digests — Spyglass Tracker is $79/mo for 5 competitors with weekly digests. Free tier vs paid-only. See the breakdown.",
  keywords: [
    "KompWatch vs Spyglass",
    "Spyglass alternative",
    "Spyglass CI alternative",
    "spyglassci alternative",
    "Spyglass competitor monitoring",
    "Spyglass vs KompWatch",
    "Spyglass pricing",
    "indie SaaS competitor monitoring",
    "AI competitor monitoring comparison",
    "competitor monitoring tools 2026",
    "Spyglass review",
    "affordable competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-spyglass`,
  },
  openGraph: {
    title: "KompWatch vs Spyglass (2026) — Indie SaaS Competitor Monitoring Compared",
    description:
      "Two indie-SaaS competitor monitoring tools compared honestly. Pricing, competitor limits, digest frequency, and AI depth — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-spyglass`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Spyglass — Competitor Monitoring Compared",
    description:
      "Spyglass Tracker: $79/mo, 5 competitors, weekly digest. KompWatch Pro: $49/mo, 10 competitors, daily digest — plus a free tier. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  spyglass: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", spyglass: "$79/mo Tracker" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", spyglass: false },
  { feature: "Competitors on entry paid plan", kompwatch: "10 (Pro)", spyglass: "5 (Tracker)" },
  { feature: "Digest frequency (paid)", kompwatch: "Daily", spyglass: "Weekly" },
  { feature: "Self-serve signup", kompwatch: true, spyglass: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", spyglass: "AI summaries" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, spyglass: false },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", spyglass: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", spyglass: "Unclear from public docs" },
  { feature: "CSS selector targeting", kompwatch: true, spyglass: false, note: "Monitor specific page sections" },
  { feature: "Pricing page tracking", kompwatch: true, spyglass: true },
  { feature: "Feature & product page tracking", kompwatch: true, spyglass: true },
  { feature: "Blog & content monitoring", kompwatch: true, spyglass: true },
  { feature: "Job listing tracking", kompwatch: true, spyglass: false },
  { feature: "Snapshot cadence", kompwatch: "Every 6 hours (Pro)", spyglass: "Weekly" },
  { feature: "Month-to-month billing", kompwatch: true, spyglass: true },
  { feature: "Target ICP", kompwatch: "Indie SaaS founders & small teams", spyglass: "Indie SaaS founders" },
  { feature: "Founded", kompwatch: "2025", spyglass: "2026" },
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
    title: "$49 for 10 competitors vs $79 for 5",
    description:
      "Both KompWatch and Spyglass target indie SaaS founders — but KompWatch Pro at $49/mo tracks 10 competitors, while Spyglass Tracker at $79/mo caps you at 5. That's 2× the tracking capacity at 62% of the price, plus a free tier to evaluate before you pay.",
  },
  {
    title: "Daily digests vs weekly",
    description:
      "KompWatch snapshots every 6 hours and emails a Claude-powered digest per detected change on Pro. Spyglass Tracker ships one weekly digest. If a competitor drops a new pricing page on a Tuesday, you'll hear about it that afternoon on KompWatch — not the following Monday.",
  },
  {
    title: "Severity + content zones vs plain summaries",
    description:
      "KompWatch classifies every change by severity (Low/Medium/High/Critical) and content zone (pricing, features, messaging, jobs), so you can filter noise and act on the changes that matter. Spyglass provides AI summaries without severity or zone tagging — you read every change to find the important ones.",
  },
];

export default function CompareKompWatchVsSpyglassPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Spyglass", path: "/compare/kompwatch-vs-spyglass" },
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
          KompWatch vs Spyglass{" "}
          <span className="text-brand-600">
            — $49 for 10 competitors, or $79 for 5?
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Spyglass (spyglassci.com) launched in 2026 targeting indie SaaS
          founders at{" "}
          <strong className="text-gray-900">$79/mo for 5 competitors</strong>{" "}
          with weekly digests. KompWatch is{" "}
          <strong className="text-gray-900">free to start</strong> and{" "}
          <strong className="text-gray-900">$49/mo for 10 competitors</strong>{" "}
          with daily Claude-powered digests, severity classification, and CSS
          selector targeting.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Spyglass Hero CTA"
            eventProps={{ competitor: "Spyglass", page: "compare-kompwatch-vs-spyglass" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
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
            Where KompWatch wins for indie SaaS
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Both tools target founders, not enterprises. Here&rsquo;s where the
            economics and depth diverge.
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
              Pricing: KompWatch Pro $49/mo &middot; Spyglass Tracker $79/mo
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data as of May 2026.
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
                Spyglass Tracker
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $79<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">No free tier &middot; paid plans only</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; No free tier</li>
                <li>&middot; 5 competitors max on Tracker plan</li>
                <li>&middot; Weekly digest cadence</li>
                <li>&middot; AI summaries (no severity classification)</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No content zone tagging</li>
                <li>&middot; No dedicated job listing tracking</li>
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
              Feature-by-feature: KompWatch vs Spyglass
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison based on publicly available information.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Spyglass</th>
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
                      <ComparisonCell value={row.spyglass} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of May 2026.
            Feature details may change as products evolve.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Spyglass Mid CTA"
            eventProps={{ competitor: "Spyglass", page: "compare-kompwatch-vs-spyglass" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro ($49/mo) for 10 &mdash;
            double what Spyglass Tracker allows, at $30/mo less.
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
                <li>&middot; You want to try competitor monitoring <em>before</em> paying</li>
                <li>&middot; You need to track more than 5 competitors on your entry plan</li>
                <li>&middot; A weekly digest isn&rsquo;t fast enough &mdash; you want daily change alerts</li>
                <li>&middot; You want severity + content-zone tagging so you can filter noise</li>
                <li>&middot; You need CSS selector targeting for specific page sections</li>
                <li>&middot; Competitor hiring signals are part of your strategy</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Spyglass if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; 5 competitors and a weekly cadence are sufficient</li>
                <li>&middot; You&rsquo;re happy paying $79/mo with no free evaluation tier</li>
                <li>&middot; You don&rsquo;t need severity classification or content zones</li>
                <li>&middot; CSS selector targeting isn&rsquo;t important to your workflow</li>
                <li>&middot; Job listing tracking isn&rsquo;t relevant to your competitive strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Spyglass"
        faqs={[
          {
            question: "What is the difference between KompWatch and Spyglass?",
            answer:
              "KompWatch and Spyglass are both competitor monitoring tools built for indie SaaS founders, but they differ in pricing, capacity, and depth. KompWatch offers a free tier plus a $49/mo Pro plan with 10 competitors, daily Claude-powered digests, severity classification, content zone tagging, Playwright headless rendering, CSS selector targeting, and job listing tracking. Spyglass (launched 2026) offers a $79/mo Tracker tier with 5 competitors, weekly digests, and basic AI summaries — no free tier, no severity classification, no CSS selectors.",
          },
          {
            question: "Is Spyglass cheaper than KompWatch?",
            answer:
              "No. Spyglass Tracker starts at $79/mo for 5 competitors. KompWatch is free (2 competitors, weekly digest) or $49/mo Pro (10 competitors, daily digest). That means KompWatch Pro is $30/mo cheaper than Spyglass Tracker and tracks 2× the competitors — plus you can evaluate the free tier before paying anything.",
          },
          {
            question: "How many competitors can I track on Spyglass vs KompWatch?",
            answer:
              "Spyglass Tracker caps you at 5 competitors. KompWatch Pro at $49/mo includes 10 competitors, and Team at $149/mo scales to 50. On the free tier, KompWatch tracks 2 competitors with a weekly digest — Spyglass has no free plan.",
          },
          {
            question: "Does Spyglass send daily digests like KompWatch?",
            answer:
              "No. Spyglass Tracker ships weekly digests. KompWatch Pro snapshots every 6 hours and emails a Claude-powered digest per detected change, so you hear about competitor moves the same day — not the following week.",
          },
          {
            question: "Can I switch from Spyglass to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Spyglass, optionally set CSS selectors to target specific page sections, and your first snapshot fires immediately. Setup takes about 5 minutes. KompWatch does not import historical data from Spyglass, but you can run both in parallel during the transition and cancel Spyglass once you're satisfied.",
          },
          {
            question: "Does Spyglass have a free tier?",
            answer:
              "No. Spyglass requires a paid plan starting at $79/mo (Tracker). KompWatch offers a free tier with 2 competitors and weekly AI digests — no credit card required. You can evaluate KompWatch at no cost and upgrade to Pro ($49/mo) when you need more competitors or daily digests.",
          },
          {
            question: "Which tool has better AI-powered analysis?",
            answer:
              "KompWatch uses Claude (Anthropic) to generate digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity (Low/Medium/High/Critical). Spyglass provides AI summaries without severity classification or content zone tagging. If prioritized, actionable intelligence matters to your workflow, KompWatch surfaces the changes that move the needle instead of everything at once.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. Spyglass does not offer dedicated job listing tracking.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Spyglass" source="compare-spyglass" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Or jump to Pro for $49/mo and get 10
            competitors with daily digests &mdash; double the tracking Spyglass
            Tracker offers, at $30/mo less.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Spyglass Bottom CTA"
              eventProps={{ competitor: "Spyglass", page: "compare-kompwatch-vs-spyglass" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Spyglass?{" "}
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
