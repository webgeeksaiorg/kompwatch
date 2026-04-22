import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Crayon Alternative — KompWatch vs Crayon (Honest Comparison)",
  description:
    "Looking for a Crayon alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — starting at $49/mo (vs Crayon's $5K–$80K+/yr). No sales call required.",
  keywords: [
    "Crayon alternative",
    "Crayon vs KompWatch",
    "Crayon competitor",
    "Crayon pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Crayon competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-crayon`,
  },
  openGraph: {
    title: "KompWatch vs Crayon — Same Insights, Fraction of the Cost",
    description:
      "Honest side-by-side: KompWatch ($49/mo, self-serve) vs Crayon ($5K–$80K+/yr, sales-call gated). See feature, pricing, and onboarding comparison.",
    url: `${siteUrl}/vs-crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Crayon — Honest Comparison",
    description:
      "Crayon starts at $5K/yr and scales to $80K+/yr — requires a sales call. KompWatch starts at $49/mo with self-serve signup. See the full feature comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  crayon: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", crayon: "$5K–$80K+/yr" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", crayon: "$5,000+/yr" },
  { feature: "Self-serve signup", kompwatch: true, crayon: false },
  { feature: "No sales call required", kompwatch: true, crayon: false },
  { feature: "Free plan", kompwatch: true, crayon: false },
  { feature: "Pricing page tracking", kompwatch: true, crayon: true },
  { feature: "Feature & product page tracking", kompwatch: true, crayon: true },
  { feature: "Blog & content monitoring", kompwatch: true, crayon: true },
  { feature: "Job listing tracking", kompwatch: true, crayon: true },
  { feature: "AI change summaries", kompwatch: true, crayon: true },
  { feature: "Email digests", kompwatch: true, crayon: true },
  { feature: "Slack / webhook alerts", kompwatch: true, crayon: true },
  { feature: "Tech stack detection", kompwatch: "Pro+", crayon: true },
  { feature: "Battlecards", kompwatch: "Roadmap", crayon: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", crayon: "Weeks (sales + onboarding)" },
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

export default function VsCrayonPage() {
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
          Crayon alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Crayon{" "}
          <span className="text-brand-600">— same insights, fraction of the cost</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Crayon is a powerful enterprise tool — but plans run $5K–$80K+/yr with a multi-week sales cycle.
          KompWatch tracks the same competitor signals (pricing, features, blogs, jobs) starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, with self-serve signup in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Crayon" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors
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
                Crayon (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $5K<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Up to $80K+/yr for full team plans</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Quote-only pricing</li>
                <li>· Sales call required</li>
                <li>· Annual contract</li>
                <li>· Multi-week onboarding</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s an <strong className="text-gray-900">8&times;–136&times; price difference</strong>{" "}
            for the same core competitive intelligence — without the sales process.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Crayon
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Crayon wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Crayon</th>
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
                      <ComparisonCell value={row.crayon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Crayon pricing
            requires a sales call; estimates from vendr.com and review sites.
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
                <li>· A 1–50 person team without budget for $5K–$80K+ enterprise contracts</li>
                <li>· Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>· Allergic to sales calls and want to swipe a card and start in 2 minutes</li>
                <li>· Comfortable with email digests + Slack alerts (no battlecard portal needed)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Crayon if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· An enterprise with a dedicated competitive intelligence team (5+ analysts)</li>
                <li>· Buying a battlecard CMS for sales reps to consume in real time</li>
                <li>· Needing human-curated intel + analyst services (Crayon offers managed services)</li>
                <li>· Already paying for Salesforce/Highspot integrations and want native plug-ins</li>
                <li>· Tracking 100+ competitors with custom workflows and SOC 2 Type II requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              eventProps={{ competitor: "Crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Crayon?{" "}
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
            </Link>
            <Link href="/vs-seeto" className="text-sm text-gray-500 hover:text-gray-700">
              vs Seeto
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
