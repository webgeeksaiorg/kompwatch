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
    "KompWatch vs RavenSeer (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs RavenSeer: honest comparison of two competitor monitoring tools. See pricing, features, rendering, and AI digest quality side-by-side. KompWatch starts free — RavenSeer starts at $25/mo.",
  keywords: [
    "KompWatch vs RavenSeer",
    "RavenSeer alternative",
    "RavenSeer competitor monitoring",
    "RavenSeer vs KompWatch",
    "RavenSeer pricing",
    "AI competitor monitoring comparison",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "RavenSeer review",
    "affordable competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-ravenseer`,
  },
  openGraph: {
    title: "KompWatch vs RavenSeer (2026) — AI Competitor Monitoring Compared",
    description:
      "Two competitor monitoring tools compared honestly. Pricing, features, rendering, and AI digest quality — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-ravenseer`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs RavenSeer — Competitor Monitoring Compared",
    description:
      "RavenSeer starts at $25/mo with no free tier. KompWatch starts free with Playwright rendering and Claude-powered digests. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  ravenseer: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", ravenseer: "$25/mo" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", ravenseer: false },
  { feature: "Self-serve signup", kompwatch: true, ravenseer: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", ravenseer: "Basic AI summaries" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, ravenseer: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", ravenseer: false, note: "HTTP-only fetching" },
  { feature: "CSS selector targeting", kompwatch: true, ravenseer: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", ravenseer: false },
  { feature: "Pricing page tracking", kompwatch: true, ravenseer: true },
  { feature: "Feature & product page tracking", kompwatch: true, ravenseer: true },
  { feature: "Blog & content monitoring", kompwatch: true, ravenseer: true },
  { feature: "Job listing tracking", kompwatch: true, ravenseer: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", ravenseer: "Weekly" },
  { feature: "Battlecard export", kompwatch: "JSON export today; one-click HTML in development", ravenseer: false },
  { feature: "Month-to-month billing", kompwatch: true, ravenseer: true },
  { feature: "Founded", kompwatch: "2025", ravenseer: "2024" },
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
    title: "Free tier vs paid-only entry",
    description:
      "KompWatch offers a free plan with 2 competitors and weekly AI digests — no credit card required. RavenSeer starts at $25/mo with no free tier. If you want to evaluate competitor monitoring before committing, KompWatch lets you start for free.",
  },
  {
    title: "Full headless rendering vs HTTP fetching",
    description:
      "KompWatch uses Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. RavenSeer uses HTTP-based fetching, which misses content rendered by React, Vue, Angular, and other SPA frameworks — common on modern pricing and feature pages.",
  },
  {
    title: "AI digests with severity and content zones",
    description:
      "KompWatch generates Claude-powered digests that classify changes by type (pricing, features, messaging, jobs) and severity (Low/Medium/High/Critical). RavenSeer provides basic AI summaries without severity classification or content zone tagging.",
  },
];

export default function CompareKompWatchVsRavenSeerPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs RavenSeer", path: "/compare/kompwatch-vs-ravenseer" },
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
          KompWatch vs RavenSeer{" "}
          <span className="text-brand-600">
            — free tier vs paid-only monitoring
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          RavenSeer (founded 2024) offers competitor monitoring starting at $25/mo
          with no free plan. KompWatch is{" "}
          <strong className="text-gray-900">free to start</strong> with{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> that classify
          changes by type and severity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare RavenSeer Hero CTA"
            eventProps={{ competitor: "RavenSeer", page: "compare-kompwatch-vs-ravenseer" }}
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
            Where KompWatch goes deeper
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            RavenSeer covers the basics. KompWatch adds headless rendering,
            AI severity classification, and a free tier to get started.
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
              Pricing: KompWatch starts free, RavenSeer starts at $25/mo
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
                RavenSeer
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $25<span className="text-lg font-normal text-gray-500">&ndash;$150/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">No free tier &middot; paid plans only</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; No free tier</li>
                <li>&middot; Basic competitor monitoring</li>
                <li>&middot; Basic AI summaries</li>
                <li>&middot; HTTP-based page fetching</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No severity classification</li>
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
              Feature-by-feature: KompWatch vs RavenSeer
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
                  <th className="px-4 py-3 font-medium text-gray-500">RavenSeer</th>
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
                      <ComparisonCell value={row.ravenseer} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Feature details may change as products evolve.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare RavenSeer Mid CTA"
            eventProps={{ competitor: "RavenSeer", page: "compare-kompwatch-vs-ravenseer" }}
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
                <li>&middot; You want to try competitor monitoring <em>before</em> paying</li>
                <li>&middot; Your competitors use React, Vue, or SPA frameworks for their websites</li>
                <li>&middot; You need AI digests that classify changes by severity and type</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific page sections</li>
                <li>&middot; Competitor hiring signals are part of your strategy</li>
                <li>&middot; You want a battlecard workflow (JSON export today; one-click HTML in development)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick RavenSeer if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You have budget from day one and don&rsquo;t need a free tier</li>
                <li>&middot; Your competitors have mostly static HTML pages</li>
                <li>&middot; Basic AI summaries are sufficient for your workflow</li>
                <li>&middot; You don&rsquo;t need CSS selector targeting or content zone classification</li>
                <li>&middot; Job listing tracking isn&rsquo;t relevant to your competitive strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="RavenSeer"
        faqs={[
          {
            question: "What is the difference between KompWatch and RavenSeer?",
            answer:
              "KompWatch and RavenSeer are both competitor monitoring tools, but they differ in depth and pricing. KompWatch offers a free tier, Playwright headless rendering for JavaScript-heavy pages, Claude-powered AI digests with severity classification and content zone tagging, CSS selector targeting, and job listing tracking. RavenSeer (founded 2024) offers basic competitor monitoring starting at $25/mo with AI summaries and HTTP-based fetching, but lacks headless rendering, severity classification, CSS selectors, and a free plan.",
          },
          {
            question: "Is RavenSeer cheaper than KompWatch?",
            answer:
              "RavenSeer starts at $25/mo and goes up to $150/mo. KompWatch starts free (2 competitors, weekly digest, no credit card) and Pro is $49/mo for 10 competitors with daily digests. If you need more than basic monitoring, KompWatch Pro at $49/mo includes headless rendering, severity classification, content zones, and job tracking — features not available on RavenSeer at any tier.",
          },
          {
            question: "Does RavenSeer use headless browser rendering like KompWatch?",
            answer:
              "No. RavenSeer uses HTTP-based page fetching, which works for static HTML pages but misses content rendered by JavaScript frameworks like React, Vue, and Angular. KompWatch uses full Playwright with headless Chromium, so it captures dynamically loaded pricing tables, feature grids, and SPA content accurately.",
          },
          {
            question: "Can I switch from RavenSeer to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in RavenSeer, set CSS selectors to target specific page sections, and your first snapshot fires immediately. Setup takes about 5 minutes. KompWatch does not import historical data from RavenSeer, but you can run both in parallel during the transition.",
          },
          {
            question: "Does RavenSeer have a free tier?",
            answer:
              "No. RavenSeer requires a paid plan starting at $25/mo. KompWatch offers a free tier with 2 competitors and weekly AI digests — no credit card required. You can evaluate KompWatch at no cost and upgrade to Pro ($49/mo) when you need more competitors or daily digests.",
          },
          {
            question: "Which tool has better AI-powered analysis?",
            answer:
              "KompWatch uses Claude (Anthropic) to generate digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity (Low/Medium/High/Critical). RavenSeer provides basic AI summaries without severity classification or content zone tagging. If prioritized, actionable intelligence matters to your workflow, KompWatch provides deeper analysis.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. RavenSeer does not offer dedicated job listing tracking.",
          },
        ]}
      />

      <CompareEmailCapture competitor="RavenSeer" source="compare-ravenseer" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Add the same URLs you&rsquo;d
            track in RavenSeer and get actionable intelligence in minutes.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare RavenSeer Bottom CTA"
              eventProps={{ competitor: "RavenSeer", page: "compare-kompwatch-vs-ravenseer" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using RavenSeer?{" "}
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
            <Link href="/vs-ravenseer" className="text-sm text-gray-500 hover:text-gray-700">
              vs RavenSeer
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
