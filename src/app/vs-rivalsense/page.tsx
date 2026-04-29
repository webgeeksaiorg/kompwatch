import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "RivalSense Alternative — KompWatch vs RivalSense (Honest Comparison)",
  description:
    "Looking for a RivalSense alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — $49/mo for 10 competitors (vs RivalSense $44.99 for 3). See the side-by-side.",
  keywords: [
    "RivalSense alternative",
    "RivalSense vs KompWatch",
    "RivalSense competitor",
    "RivalSense pricing",
    "affordable competitive intelligence",
    "competitor monitoring tool",
    "cheap Crayon alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-rivalsense`,
  },
  openGraph: {
    title: "KompWatch vs RivalSense — More Competitors, AI Digests, Same Price",
    description:
      "Honest side-by-side: KompWatch ($49/mo, 10 competitors, AI summaries) vs RivalSense ($44.99/mo, 3 competitors, no AI). See the full feature comparison.",
    url: `${siteUrl}/vs-rivalsense`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs RivalSense — Honest Comparison",
    description:
      "RivalSense Basic is $44.99/mo for 3 competitors with no AI summaries. KompWatch Pro is $49/mo for 10 competitors with AI digests. See the full feature comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  rivalsense: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", rivalsense: "$44.99/mo" },
  { feature: "Competitors at entry tier", kompwatch: "10 (Pro)", rivalsense: "3 (Basic)" },
  { feature: "Free plan", kompwatch: true, rivalsense: false },
  { feature: "Self-serve signup", kompwatch: true, rivalsense: true },
  { feature: "No annual contract required", kompwatch: true, rivalsense: true },
  { feature: "Monthly billing", kompwatch: true, rivalsense: true },
  { feature: "AI change summaries", kompwatch: true, rivalsense: false },
  { feature: "Pricing page tracking", kompwatch: true, rivalsense: true },
  { feature: "Feature & product page tracking", kompwatch: true, rivalsense: true },
  { feature: "Blog & content monitoring", kompwatch: true, rivalsense: true },
  { feature: "Job listing tracking", kompwatch: true, rivalsense: false },
  { feature: "Email digests", kompwatch: true, rivalsense: true },
  { feature: "Slack / webhook alerts", kompwatch: "Pro+", rivalsense: "Growth+" },
  { feature: "CSV / JSON export (no lock-in)", kompwatch: true, rivalsense: false },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", rivalsense: "Under 5 minutes" },
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

export default function VsRivalSensePage() {
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
          RivalSense alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs RivalSense{" "}
          <span className="text-brand-600">— same price, 3× the competitors, AI included</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          RivalSense Basic is{" "}
          <strong className="text-gray-900">$44.99/mo for 3 competitors</strong> with no AI summaries.
          KompWatch Pro is{" "}
          <strong className="text-gray-900">$49/mo for 10 competitors</strong> — AI digests, job
          tracking, and a free plan included. Self-serve in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "RivalSense" }}
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
              Same monthly bill — bigger plan
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from rivalsense.com (April 2026).
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
              <div className="mt-1 text-sm text-gray-500">$588 / year — cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked</li>
                <li>✓ Daily AI digests</li>
                <li>✓ Job listing tracking</li>
                <li>✓ Free plan available (2 competitors)</li>
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
                Growth $111/mo · Business $222.99/mo
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· 3 competitors on Basic</li>
                <li>· No AI change summaries</li>
                <li>· No job listing tracking</li>
                <li>· No free plan</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Roughly the same price — KompWatch gives you{" "}
            <strong className="text-gray-900">3&times; the competitor slots</strong> and adds AI
            summaries, job tracking, and a free plan that RivalSense doesn&rsquo;t offer.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
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
                    <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
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
            Comparison based on publicly available information as of April 2026. RivalSense pricing
            sourced from rivalsense.com.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "RivalSense" }}
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
                <li>· Tracking 4+ competitors and don&rsquo;t want to jump to a $111/mo tier</li>
                <li>· Tired of reading raw diffs and want AI to summarize what changed and why it matters</li>
                <li>· Watching competitor hiring as a leading signal for product/market moves</li>
                <li>· Wanting to try before you pay (free plan, 2 competitors, weekly digest)</li>
                <li>· Running CSV/JSON exports into your own dashboards or BI</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick RivalSense if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Only ever tracking 3 competitors and don&rsquo;t need AI summaries</li>
                <li>· Already paying for it and don&rsquo;t want to migrate</li>
                <li>· Comfortable reading raw page-change diffs without LLM digests</li>
                <li>· Not interested in tracking competitor hiring as a signal</li>
                <li>· OK without a free plan to evaluate the product first</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="RivalSense"
        faqs={[
          {
            question: "How much does RivalSense cost?",
            answer: "RivalSense pricing (April 2026) starts at $44.99/mo for the Basic plan (3 competitors), $111/mo for Growth, and $222.99/mo for Business. KompWatch Pro is $49/mo for 10 competitors with AI digests and job tracking included — and there is a free plan with 2 competitors.",
          },
          {
            question: "What is the difference between KompWatch and RivalSense?",
            answer: "Both are self-serve, monthly-billed competitor monitoring tools in a similar price band. The main differences: KompWatch includes AI-generated change summaries, job listing tracking, CSV/JSON export, and a free plan. RivalSense Basic limits you to 3 competitors and doesn't include AI summaries — to get more competitor slots you'd jump to Growth at $111/mo.",
          },
          {
            question: "Does RivalSense have AI summaries?",
            answer: "Based on public information as of April 2026, RivalSense provides change alerts but does not include AI-generated plain-English summaries. KompWatch uses Claude to generate digests of what changed across pricing, features, blogs, and job pages — so you read summaries instead of raw diffs.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. RivalSense does not currently offer a free plan; the entry point is $44.99/mo. Upgrade to KompWatch Pro ($49/mo) for 10 competitors and daily digests when you're ready.",
          },
          {
            question: "Does KompWatch track job listings like RivalSense?",
            answer: "KompWatch tracks competitor job listings to surface hiring signals — new engineering roles often indicate product investments, sales hiring signals market expansion. Based on public information, RivalSense does not include job listing tracking in its plans.",
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
              eventProps={{ competitor: "RivalSense" }}
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
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
