import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Kompyte Alternative — KompWatch vs Kompyte (Honest Comparison)",
  description:
    "Looking for a Kompyte alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — starting at $49/mo (vs Kompyte's ~$8K/yr). Self-serve, no sales call.",
  keywords: [
    "Kompyte alternative",
    "Kompyte vs KompWatch",
    "Kompyte competitor",
    "Kompyte pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Kompyte competitive intelligence alternative",
    "Adobe Semrush acquisition Kompyte",
    "Kompyte Semrush alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-kompyte`,
  },
  openGraph: {
    title: "KompWatch vs Kompyte — AI Summaries + Job Tracking, ~13× Less",
    description:
      "Honest side-by-side: KompWatch ($49/mo, self-serve, AI summaries) vs Kompyte (~$8K/yr, sales-call gated, no AI). See feature, pricing, and onboarding comparison.",
    url: `${siteUrl}/vs-kompyte`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Kompyte — Honest Comparison",
    description:
      "Kompyte starts at ~$8K/yr and lacks AI summaries + job tracking. KompWatch starts at $49/mo with both included. See the full feature comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  kompyte: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", kompyte: "~$8K/yr" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", kompyte: "$8,000+/yr" },
  { feature: "Self-serve signup", kompwatch: true, kompyte: false },
  { feature: "No sales call required", kompwatch: true, kompyte: false },
  { feature: "Free plan", kompwatch: true, kompyte: false },
  { feature: "Monthly billing", kompwatch: true, kompyte: false },
  { feature: "Pricing page tracking", kompwatch: true, kompyte: true },
  { feature: "Feature & product page tracking", kompwatch: true, kompyte: true },
  { feature: "Blog & content monitoring", kompwatch: true, kompyte: true },
  { feature: "Job listing tracking", kompwatch: true, kompyte: false },
  { feature: "AI change summaries", kompwatch: true, kompyte: false },
  { feature: "Email digests", kompwatch: true, kompyte: true },
  { feature: "Slack / webhook alerts", kompwatch: true, kompyte: true },
  { feature: "Tech stack detection", kompwatch: "Pro+", kompyte: false },
  { feature: "Battlecards", kompwatch: "Roadmap", kompyte: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", kompyte: "Days (sales + onboarding)" },
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

export default function VsKompytePage() {
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
          Kompyte alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Kompyte{" "}
          <span className="text-brand-600">— AI summaries + job tracking, ~13× less</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kompyte was acquired by Semrush in 2022. Now Adobe is acquiring Semrush for $1.9B — making
          Kompyte two acquisitions deep inside an enterprise marketing stack. If you&rsquo;re
          evaluating CI tools in 2026, that matters. KompWatch tracks the same signals plus jobs and
          AI digests, starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, self-serve in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Kompyte" }}
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

      {/* Acquisition alert */}
      <section className="border-y border-amber-200 bg-amber-50 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">!</span>
            <div>
              <h2 className="text-base font-semibold text-amber-900">
                April 2026: Adobe is acquiring Semrush for $1.9B
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-800">
                Kompyte was bought by Semrush in 2022. With Adobe&rsquo;s acquisition closing H1 2026,
                Kompyte is now two layers deep in corporate consolidation. History shows that niche
                tools inside mega-acquisitions often see slower roadmaps, enterprise-only pivots, and
                eventual sunsetting. If you&rsquo;re choosing a CI tool today, it&rsquo;s worth asking
                what Kompyte looks like inside Adobe&rsquo;s marketing cloud 12 months from now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The pricing gap is real
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from vendr.com and G2 reviews (April 2026).
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
              <div className="mt-1 text-sm text-gray-500">$588 / year</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked</li>
                <li>✓ Daily AI digests</li>
                <li>✓ Self-serve signup</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kompyte (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                ~$8K<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Quote-based; higher for larger seats</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Quote-only pricing</li>
                <li>· Sales call required</li>
                <li>· Annual contract</li>
                <li>· No AI change summaries</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s a <strong className="text-gray-900">~13&times; price difference</strong>{" "}
            for the same core competitive intelligence — plus AI summaries and job tracking that
            Kompyte doesn&rsquo;t include.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Kompyte
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Kompyte wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Kompyte</th>
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
                      <ComparisonCell value={row.kompyte} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Kompyte pricing
            requires a sales call; estimates from vendr.com and review sites.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Kompyte" }}
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
                <li>· A founder, PM, or marketer who needs intel <em>this week</em>, not next quarter</li>
                <li>· A 1–50 person team without budget for $8K+ annual contracts</li>
                <li>· Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>· Allergic to sales calls and want to swipe a card and start in 2 minutes</li>
                <li>· Wanting AI-generated plain-English summaries (not raw diffs)</li>
                <li>· Concerned about vendor stability after the Adobe &rarr; Semrush &rarr; Kompyte acquisition chain</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Kompyte if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Already a Semrush/Adobe customer and want native CI inside the same suite</li>
                <li>· Running a battlecards-first program for sales rep enablement</li>
                <li>· Comfortable with annual contracts and a multi-day onboarding cycle</li>
                <li>· OK without AI change summaries (manual review is fine for your team)</li>
                <li>· Not tracking competitor hiring as part of your CI signal mix</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Kompyte"
        faqs={[
          {
            question: "How much does Kompyte cost?",
            answer: "Kompyte pricing requires a sales call. Based on public data from review sites (April 2026), annual contracts start at approximately $8,000/yr. KompWatch starts at $49/mo ($588/yr) with self-serve signup — roughly 13x less expensive.",
          },
          {
            question: "What is the difference between KompWatch and Kompyte?",
            answer: "Both track competitor websites for changes. Kompyte focuses on website monitoring and competitive benchmarking but lacks AI-generated summaries and job listing tracking. KompWatch includes AI change digests, job monitoring, blog tracking, and a free plan — all with self-serve signup and no sales call.",
          },
          {
            question: "Does Kompyte have AI summaries?",
            answer: "No. Kompyte provides raw change data without AI-powered summaries. KompWatch uses AI to generate plain-English digests of what changed, why it matters, and what action to take — delivered to your inbox or Slack.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Upgrade to Pro ($49/mo) for 10 competitors and daily digests.",
          },
          {
            question: "Does KompWatch track job listings like Kompyte?",
            answer: "Yes. KompWatch tracks competitor job listings to surface hiring signals — such as new engineering roles that may indicate product investments, or sales hiring that signals market expansion. Kompyte does not offer job listing tracking.",
          },
          {
            question: "What does the Adobe acquisition of Semrush mean for Kompyte customers?",
            answer: "Adobe is acquiring Semrush for $1.9B (closing H1 2026). Since Semrush owns Kompyte, this makes Kompyte two acquisitions deep inside Adobe's enterprise marketing stack. Post-acquisition roadmaps often shift toward the parent company's enterprise customers, and niche tools can see slower updates or eventual sunsetting. If you're evaluating CI tools today, it's worth considering vendor stability alongside features.",
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
              eventProps={{ competitor: "Kompyte" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Kompyte?{" "}
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
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
            </Link>
            <Link href="/vs-seeto" className="text-sm text-gray-500 hover:text-gray-700">
              vs Seeto
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
