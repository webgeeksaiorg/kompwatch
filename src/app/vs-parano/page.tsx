import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { CompetitorUrlCapture } from "@/components/competitor-url-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Parano.ai Alternative — KompWatch vs Parano.ai (Honest Comparison)",
  description:
    "Looking for a Parano.ai alternative? KompWatch is 45% cheaper ($49/mo vs $89/mo), has a free tier, Claude-powered AI digests, and CSS selector targeting. See the side-by-side.",
  keywords: [
    "Parano.ai alternative",
    "Parano.ai vs KompWatch",
    "Parano competitor",
    "Parano.ai pricing",
    "affordable competitive intelligence",
    "competitor monitoring tool",
    "Parano.ai review",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-parano`,
  },
  openGraph: {
    title: "KompWatch vs Parano.ai — 45% Cheaper, Free Tier, AI Digests",
    description:
      "Honest side-by-side: KompWatch ($49/mo, 10 competitors, AI digests) vs Parano.ai ($89/mo). See the full feature comparison.",
    url: `${siteUrl}/vs-parano`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Parano.ai — Honest Comparison",
    description:
      "Parano.ai is $89/mo. KompWatch Pro is $49/mo with Claude-powered AI digests, severity classification, and a free tier. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  parano: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", parano: "$89/mo" },
  { feature: "Free plan", kompwatch: true, parano: false },
  { feature: "Self-serve signup", kompwatch: true, parano: true },
  { feature: "Monthly billing", kompwatch: true, parano: true },
  { feature: "AI change summaries", kompwatch: "Claude-powered digests", parano: "AI-powered alerts" },
  { feature: "Severity classification", kompwatch: true, parano: false },
  { feature: "Content zone tagging", kompwatch: "Pricing / Features / Messaging / Jobs", parano: false },
  { feature: "Headless browser rendering", kompwatch: "Full Playwright + Chromium", parano: "Unknown" },
  { feature: "CSS selector targeting", kompwatch: true, parano: false },
  { feature: "Pricing page tracking", kompwatch: true, parano: true },
  { feature: "Feature & product page tracking", kompwatch: true, parano: true },
  { feature: "Blog & content monitoring", kompwatch: true, parano: true },
  { feature: "Job listing tracking", kompwatch: true, parano: false },
  { feature: "Email digests", kompwatch: "Daily (Pro) / Weekly (Free)", parano: "Configurable" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", parano: "Minutes" },
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

export default function VsParanoPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Parano.ai", path: "/vs-parano" }]} />
      <SoftwareApplicationSchema />
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
          Parano.ai alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Parano.ai{" "}
          <span className="text-brand-600">— 45% cheaper, free tier included</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Parano.ai is{" "}
          <strong className="text-gray-900">$89/mo</strong> with no free plan.
          KompWatch Pro is{" "}
          <strong className="text-gray-900">$49/mo for 10 competitors</strong> — Claude-powered AI
          digests with severity classification, CSS selector targeting, and a free tier
          to try before you pay.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Parano" }}
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
        <CompetitorUrlCapture competitor="Parano.ai" placeholder="https://parano.ai or any competitor URL" />
        <p className="mt-3 text-xs text-gray-400">
          Paste a competitor URL to start monitoring. No credit card required.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              More features, lower price
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
                <li>&#10003; 10 competitors tracked</li>
                <li>&#10003; Daily Claude-powered AI digests</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Job listing tracking</li>
                <li>&#10003; CSS selector targeting</li>
                <li>&#10003; Free plan available (2 competitors)</li>
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
                <li>&middot; No free plan</li>
                <li>&middot; No severity classification</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            KompWatch is{" "}
            <strong className="text-gray-900">45% cheaper</strong> with more features — severity
            classification, content zones, CSS selectors, job tracking, and a free tier
            Parano.ai doesn&rsquo;t offer.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
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
                    <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
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
            Comparison based on publicly available information as of June 2026.
            Parano.ai features may vary; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Parano" }}
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
                <li>&middot; Looking for a free tier to evaluate before committing</li>
                <li>&middot; Wanting AI digests with severity classification and content zone tagging</li>
                <li>&middot; Tracking React/SPA pages that need full headless rendering</li>
                <li>&middot; Needing CSS selector targeting to monitor specific page sections</li>
                <li>&middot; Watching competitor hiring as a leading signal</li>
                <li>&middot; Budget-conscious — $49/mo vs $89/mo for similar core features</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Parano.ai if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Already using Parano.ai and happy with the workflow</li>
                <li>&middot; Parano.ai offers specific integrations your team relies on</li>
                <li>&middot; You prefer Parano.ai&rsquo;s alert format or UI</li>
                <li>&middot; Your team has existing workflows built around Parano.ai</li>
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
            question: "How much does Parano.ai cost?",
            answer: "Parano.ai starts at $89/mo ($1,068/yr) with no free tier. KompWatch Pro is $49/mo ($588/yr) for 10 competitors with Claude-powered AI digests, severity classification, and CSS selector targeting — and there is a free plan with 2 competitors and weekly digests.",
          },
          {
            question: "What is the difference between KompWatch and Parano.ai?",
            answer: "Both are AI-native, self-serve competitor monitoring tools. Key differences: KompWatch is 45% cheaper ($49/mo vs $89/mo), has a free tier, uses Claude-powered digests with severity classification and content zone tagging, offers CSS selector targeting, and tracks competitor job listings. Parano.ai is a newer entrant with AI-powered alerts.",
          },
          {
            question: "Is Parano.ai better than KompWatch?",
            answer: "It depends on your needs. If you're already on Parano.ai and satisfied, switching has a cost. But for new evaluations, KompWatch offers more features at a lower price plus a free tier to try risk-free. Both are self-serve with month-to-month billing.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. Parano.ai does not offer a free tier. You can run both tools in parallel to compare output quality.",
          },
          {
            question: "Can I switch from Parano.ai to KompWatch?",
            answer: "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Parano.ai, optionally set CSS selectors for specific page sections, and your first snapshot fires immediately. Run both tools side by side during evaluation.",
          },
        ]}
      />

      {/* Bottom CTA */}
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
              eventProps={{ competitor: "Parano" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Parano.ai?{" "}
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
