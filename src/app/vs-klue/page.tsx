import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Klue Alternative — KompWatch vs Klue (Honest Comparison)",
  description:
    "Looking for a Klue alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — starting at $49/mo (vs Klue's $20K–$40K/yr). Self-serve, no sales call.",
  keywords: [
    "Klue alternative",
    "Klue vs KompWatch",
    "Klue competitor",
    "Klue pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Klue competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-klue`,
  },
  openGraph: {
    title: "KompWatch vs Klue — Same Insights, Fraction of the Cost",
    description:
      "Honest side-by-side: KompWatch ($49/mo, self-serve) vs Klue ($20K–$40K/yr, sales-call gated). See feature, pricing, and onboarding comparison.",
    url: `${siteUrl}/vs-klue`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Klue — Honest Comparison",
    description:
      "Klue costs $20K–$40K/yr and requires a sales call. KompWatch starts at $49/mo with self-serve signup. See the full feature comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  klue: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", klue: "$20K–$40K/yr" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", klue: "$20,000+/yr" },
  { feature: "Self-serve signup", kompwatch: true, klue: false },
  { feature: "No sales call required", kompwatch: true, klue: false },
  { feature: "Free plan", kompwatch: true, klue: false },
  { feature: "Pricing page tracking", kompwatch: true, klue: true },
  { feature: "Feature & product page tracking", kompwatch: true, klue: true },
  { feature: "Blog & content monitoring", kompwatch: true, klue: true },
  { feature: "Job listing tracking", kompwatch: true, klue: false },
  { feature: "AI change summaries", kompwatch: true, klue: true },
  { feature: "Email digests", kompwatch: true, klue: true },
  { feature: "Slack / webhook alerts", kompwatch: true, klue: true },
  { feature: "Tech stack detection", kompwatch: "Pro+", klue: true },
  { feature: "Battlecards", kompwatch: "Roadmap", klue: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", klue: "Weeks (sales + onboarding)" },
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

export default function VsKluePage() {
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
          Klue alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Klue{" "}
          <span className="text-brand-600">— same insights, fraction of the cost</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Klue is a polished battlecard-and-intel platform — built for enterprise CI teams with
          $20K–$40K/yr budgets and quarterly procurement cycles. KompWatch tracks the same competitor
          signals (pricing, features, blogs, jobs) starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, with self-serve signup in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Klue" }}
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
                Klue (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $20K<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Up to $40K/yr for full team / battlecard tiers</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Quote-only pricing</li>
                <li>· Sales call required</li>
                <li>· Annual contract</li>
                <li>· Multi-week onboarding</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s a <strong className="text-gray-900">34&times;–68&times; price difference</strong>{" "}
            for the same core competitive intelligence — without the sales process.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Klue
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Klue wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Klue</th>
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
                      <ComparisonCell value={row.klue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Klue pricing
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
                <li>· A 1–50 person team without budget for $20K–$40K enterprise contracts</li>
                <li>· Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>· Allergic to sales calls and want to swipe a card and start in 2 minutes</li>
                <li>· Comfortable with email digests + Slack alerts (no battlecard portal needed)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Klue if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· An enterprise sales org needing battlecards consumed inside Salesforce/Highspot</li>
                <li>· Running a dedicated CI program with analysts curating intel for 50+ reps</li>
                <li>· Buying for &ldquo;Win/Loss&rdquo; programs and consultant-led quarterly reviews</li>
                <li>· Tracking 100+ competitors with deep custom workflows and SSO/SOC2 needs</li>
                <li>· Comfortable with annual contracts and multi-week onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Klue"
        faqs={[
          {
            question: "How much does Klue cost?",
            answer: "Klue pricing is quote-based and requires a sales call. Based on public data from vendr.com and review sites (April 2026), annual contracts typically range from $20,000 to $40,000/yr depending on team size and features. KompWatch starts at $49/mo ($588/yr) with self-serve signup — no sales call needed.",
          },
          {
            question: "What is the difference between KompWatch and Klue?",
            answer: "Both monitor competitor websites for changes. Klue is an enterprise platform with battlecards, win/loss analysis, and deep CRM integrations — designed for large sales teams. KompWatch is a self-serve tool focused on automated monitoring with AI digests, instant signup, and a free plan. Klue offers more sales enablement features; KompWatch offers faster time-to-value at a fraction of the cost.",
          },
          {
            question: "Does Klue have a free plan?",
            answer: "No. Klue requires a sales call and annual contract starting at $20,000/yr. KompWatch offers a free plan with 2 competitors and weekly digests — no credit card required.",
          },
          {
            question: "Can I switch from Klue to KompWatch?",
            answer: "Yes. Sign up for KompWatch's free plan and run both tools in parallel. KompWatch has no contract or commitment, so you can compare digest quality side-by-side before making the switch.",
          },
          {
            question: "Does KompWatch have battlecards like Klue?",
            answer: "Battlecards are on KompWatch's roadmap. Today, KompWatch focuses on automated competitor monitoring with AI-generated change summaries delivered via email and Slack. If your team needs a battlecard CMS for sales reps, Klue may be a better fit right now.",
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
              eventProps={{ competitor: "Klue" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Klue?{" "}
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
