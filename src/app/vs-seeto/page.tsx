import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Seeto Alternative — KompWatch vs Seeto (Honest Comparison)",
  description:
    "Looking for a Seeto alternative? KompWatch offers deeper AI-powered competitor monitoring with pricing, feature, blog, and job tracking — starting at $49/mo vs Seeto's $99/mo. More signals, lower price.",
  keywords: [
    "Seeto alternative",
    "Seeto vs KompWatch",
    "Seeto competitor",
    "Seeto pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Seeto competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-seeto`,
  },
  openGraph: {
    title: "KompWatch vs Seeto — More Signals, Half the Price",
    description:
      "Honest side-by-side: KompWatch ($49/mo, full CI suite) vs Seeto ($99/mo, screenshot-focused). See feature, pricing, and coverage comparison.",
    url: `${siteUrl}/vs-seeto`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Seeto — Honest Comparison",
    description:
      "Seeto focuses on visual website monitoring at $99/mo. KompWatch tracks pricing, features, blogs, and jobs with AI digests at $49/mo. Full comparison inside.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  seeto: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", seeto: "$99/mo" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", seeto: "$1,188/yr" },
  { feature: "Self-serve signup", kompwatch: true, seeto: true },
  { feature: "No sales call required", kompwatch: true, seeto: true },
  { feature: "Free plan", kompwatch: true, seeto: false },
  { feature: "Pricing page tracking", kompwatch: true, seeto: true },
  { feature: "Feature & product page tracking", kompwatch: true, seeto: "Screenshots only" },
  { feature: "Blog & content monitoring", kompwatch: true, seeto: false },
  { feature: "Job listing tracking", kompwatch: true, seeto: false },
  { feature: "AI change summaries", kompwatch: true, seeto: false },
  { feature: "Visual screenshot diffs", kompwatch: "Pro+", seeto: true },
  { feature: "Email digests", kompwatch: true, seeto: true },
  { feature: "Slack / webhook alerts", kompwatch: true, seeto: "Slack only" },
  { feature: "CSS selector targeting", kompwatch: true, seeto: false },
  { feature: "Multi-page monitoring", kompwatch: true, seeto: "Homepage only" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", seeto: "~10 minutes" },
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

export default function VsSeetoPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Seeto", path: "/vs-seeto" }]} />
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
          Seeto alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Seeto{" "}
          <span className="text-brand-600">— more signals, half the price</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Seeto does one thing well — visual website monitoring with screenshot diffs. But it
          misses blog changes, job postings, and AI-powered analysis. KompWatch covers all
          competitive signals starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, with a free plan to get started.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Seeto" }}
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
          No credit card. No feature gaps. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              More coverage at half the cost
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from Seeto&rsquo;s website and G2 reviews (April 2026).
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
                <li>✓ Pricing + features + blogs + jobs</li>
                <li>✓ AI change summaries</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Seeto (Growth tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $99<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$1,188 / year</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Screenshot diffs only</li>
                <li>· No blog or job tracking</li>
                <li>· No AI analysis</li>
                <li>· Homepage monitoring only</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            KompWatch is <strong className="text-gray-900">2&times; cheaper</strong>{" "}
            with significantly broader competitor signal coverage.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Seeto
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Seeto wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Seeto</th>
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
                      <ComparisonCell value={row.seeto} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Seeto pricing
            from their public pricing page.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Seeto" }}
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
                <li>· Tracking competitors across pricing, features, blogs, and job postings</li>
                <li>· Wanting AI-generated summaries instead of raw screenshot diffs</li>
                <li>· Monitoring specific page sections with CSS selectors (not just homepages)</li>
                <li>· Looking for a free plan to test before committing</li>
                <li>· Needing Slack and webhook alerts, not just email</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Seeto if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Primarily interested in pixel-level visual website diffs</li>
                <li>· Only tracking homepage changes and don&rsquo;t need blog/job monitoring</li>
                <li>· Prefer screenshot-based evidence over text summaries</li>
                <li>· A designer or brand team focused on visual competitive analysis</li>
                <li>· Already invested in Seeto&rsquo;s workflow and integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Seeto"
        faqs={[
          {
            question: "How much does Seeto cost?",
            answer: "Seeto starts at $99/mo ($1,188/yr). KompWatch starts at $49/mo ($588/yr) — half the price with more monitoring signals including blog tracking, job listings, and AI summaries.",
          },
          {
            question: "What is the difference between KompWatch and Seeto?",
            answer: "Seeto focuses on visual website monitoring with screenshot diffs, primarily tracking homepage changes. KompWatch monitors pricing pages, feature pages, blogs, and job listings with AI-generated change summaries. KompWatch also supports CSS selector targeting for precise monitoring and offers a free plan.",
          },
          {
            question: "Does Seeto track more than just screenshots?",
            answer: "Seeto is primarily a screenshot-based monitoring tool focused on visual changes. It does not track blog content, job listings, or generate AI summaries. KompWatch tracks all of these signals and delivers AI-powered digests explaining what changed and why it matters.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Seeto does not offer a free plan.",
          },
          {
            question: "Does KompWatch support visual screenshot diffs?",
            answer: "Visual screenshot diffs are available on KompWatch's Pro plan and above. KompWatch goes beyond screenshots with structured content monitoring, AI change detection, and multi-page tracking — while Seeto is limited to homepage-only monitoring.",
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
              eventProps={{ competitor: "Seeto" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Seeto?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and see how much more intel you get.
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
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
