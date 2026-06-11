import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Tona Alternative — KompWatch vs Tona (Honest Comparison)",
  description:
    "Looking for a Tona alternative? KompWatch offers Claude-powered AI digests, Playwright headless rendering, CSS selector targeting, and a free tier — starting at $0/mo. See the side-by-side.",
  keywords: [
    "Tona alternative",
    "Tona vs KompWatch",
    "Tona competitor",
    "Tona pricing",
    "competitor monitoring tool",
    "competitive intelligence software",
    "AI competitor monitoring",
    "Tona competitor tracking alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-tona`,
  },
  openGraph: {
    title: "KompWatch vs Tona — Deeper AI Analysis, Free to Start",
    description:
      "Honest side-by-side: KompWatch (free tier, $49/mo Pro, Claude-powered digests) vs Tona ($39/mo, AI alerts, team collaboration). See the full feature comparison.",
    url: `${siteUrl}/vs-tona`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Tona — Honest Comparison",
    description:
      "Tona starts at $39/mo with AI alerts and team collaboration. KompWatch starts free with Claude-powered digests, Playwright rendering, and CSS selectors. Full comparison inside.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  tona: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", tona: "From $39/mo" },
  { feature: "Free plan", kompwatch: true, tona: false },
  { feature: "Self-serve signup", kompwatch: true, tona: true },
  { feature: "AI change summaries", kompwatch: "Claude-powered digests", tona: "AI alerts" },
  { feature: "Severity classification", kompwatch: true, tona: false },
  { feature: "Headless browser rendering", kompwatch: "Playwright + Chromium", tona: "Basic JS" },
  { feature: "CSS selector targeting", kompwatch: true, tona: false },
  { feature: "Pricing page tracking", kompwatch: true, tona: true },
  { feature: "Blog & content monitoring", kompwatch: true, tona: true },
  { feature: "Job listing tracking", kompwatch: true, tona: false },
  { feature: "Team collaboration", kompwatch: "Team plan ($149/mo)", tona: "Built-in" },
  { feature: "Email digests", kompwatch: true, tona: true },
  { feature: "CSV / JSON export", kompwatch: true, tona: false },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", tona: "Under 5 minutes" },
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

export default function VsTonaPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Tona", path: "/vs-tona" }]} />
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
          Tona alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Tona{" "}
          <span className="text-brand-600">— deeper analysis, free to start</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Tona offers AI-powered competitor alerts with team collaboration starting at{" "}
          <strong className="text-gray-900">$39/mo</strong>.
          KompWatch is{" "}
          <strong className="text-gray-900">free to start</strong> with{" "}
          <strong className="text-gray-900">Claude-powered digests</strong>,{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>, and{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>. Self-serve in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Tona" }}
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
        <p className="mt-3 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              KompWatch starts free — Tona starts at $39/mo
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from June 2026.
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
                <li>&#10003; 10 competitors tracked</li>
                <li>&#10003; Daily Claude-powered AI digests</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Playwright headless rendering</li>
                <li>&#10003; Free plan available (2 competitors)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Tona
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $39<span className="text-lg font-normal text-gray-500">/mo+</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                No free tier &middot; team plans available
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; AI-powered change alerts</li>
                <li>&middot; Built-in team collaboration</li>
                <li>&middot; Basic JavaScript rendering</li>
                <li>&middot; No free plan</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            KompWatch gives you a free tier to evaluate, plus deeper AI analysis with
            severity classification and content zone tagging at the Pro tier.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Tona
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Tona wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Tona</th>
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
                      <ComparisonCell value={row.tona} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of June 2026.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Tona" }}
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
                <li>&middot; Wanting to try before you pay (free plan, 2 competitors)</li>
                <li>&middot; Needing AI digests that classify changes by severity and type</li>
                <li>&middot; Tracking competitors with React/SPA-heavy pages</li>
                <li>&middot; Using CSS selectors to ignore header/footer noise</li>
                <li>&middot; Watching competitor hiring as a leading strategy signal</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Tona if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Prioritizing built-in team collaboration from day one</li>
                <li>&middot; Comfortable with AI change alerts rather than deep digests</li>
                <li>&middot; Monitoring mostly static or lightly dynamic competitor pages</li>
                <li>&middot; Not needing CSS selector targeting or severity classification</li>
                <li>&middot; OK without a free plan to evaluate first</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Tona"
        faqs={[
          {
            question: "How much does Tona cost compared to KompWatch?",
            answer: "Tona starts at $39/mo with no free tier. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo for 10 competitors with daily digests. For $10 more per month, KompWatch Pro adds Playwright headless rendering, CSS selector targeting, severity classification, content zone tagging, and job listing tracking.",
          },
          {
            question: "What is the difference between KompWatch and Tona?",
            answer: "Both are competitor monitoring tools that use AI. Tona focuses on team collaboration with AI-powered alerts. KompWatch focuses on deeper analysis: Claude-powered digests that classify changes by type (pricing, features, messaging, jobs) and severity (Low/Medium/High/Critical), full Playwright headless rendering for JavaScript-heavy pages, and CSS selector targeting to monitor specific page sections. KompWatch also offers a free tier that Tona does not.",
          },
          {
            question: "Does Tona have a free plan?",
            answer: "No. Tona requires a paid plan starting at $39/mo. KompWatch offers a free plan with 2 competitors and weekly AI digests — no credit card required. You can evaluate KompWatch at no cost and upgrade to Pro ($49/mo) when you need more competitors or daily digests.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. Upgrade to Pro ($49/mo) for 10 competitors and daily digests when you're ready.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer: "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. Tona does not offer dedicated job listing tracking.",
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
              eventProps={{ competitor: "Tona" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Tona?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare output quality.
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
