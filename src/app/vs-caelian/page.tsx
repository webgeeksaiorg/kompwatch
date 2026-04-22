import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Caelian Alternative — KompWatch vs Caelian (Honest Comparison)",
  description:
    "Looking for a Caelian alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — starting at $49/mo vs Caelian's $199/mo. No analyst hours required.",
  keywords: [
    "Caelian alternative",
    "Caelian vs KompWatch",
    "Caelian competitor",
    "Caelian pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Caelian competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-caelian`,
  },
  openGraph: {
    title: "KompWatch vs Caelian — Automated Intel, No Analyst Hours",
    description:
      "Honest side-by-side: KompWatch ($49/mo, fully automated) vs Caelian ($199/mo, 8–15 analyst hours/week). See feature, pricing, and workflow comparison.",
    url: `${siteUrl}/vs-caelian`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Caelian — Honest Comparison",
    description:
      "Caelian starts at $199/mo and needs 8–15 analyst hours/week to stay useful. KompWatch starts at $49/mo and runs on autopilot. See the full comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  caelian: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", caelian: "$199/mo" },
  { feature: "Annual cost (small team)", kompwatch: "$588/yr", caelian: "$2,388/yr" },
  { feature: "Self-serve signup", kompwatch: true, caelian: true },
  { feature: "No sales call required", kompwatch: true, caelian: true },
  { feature: "Free plan", kompwatch: true, caelian: false },
  { feature: "Fully automated monitoring", kompwatch: true, caelian: false },
  { feature: "Analyst hours required", kompwatch: "0 hrs/week", caelian: "8–15 hrs/week" },
  { feature: "Pricing page tracking", kompwatch: true, caelian: true },
  { feature: "Feature & product page tracking", kompwatch: true, caelian: true },
  { feature: "Blog & content monitoring", kompwatch: true, caelian: true },
  { feature: "Job listing tracking", kompwatch: true, caelian: false },
  { feature: "AI change summaries", kompwatch: true, caelian: "Manual curation" },
  { feature: "Email digests", kompwatch: true, caelian: true },
  { feature: "Slack / webhook alerts", kompwatch: true, caelian: "Slack only" },
  { feature: "Custom analyst workflows", kompwatch: false, caelian: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", caelian: "1–2 weeks (analyst setup)" },
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

export default function VsCaelianPage() {
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
          Caelian alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Caelian{" "}
          <span className="text-brand-600">— automated intel, no analyst hours</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Caelian is a solid mid-market CI platform — but it needs 8–15 analyst hours per week or it
          becomes &ldquo;an expensive RSS feed&rdquo; within 90 days. KompWatch runs fully automated
          with AI-generated digests starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, no analyst required.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Caelian" }}
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
          No credit card. No analyst onboarding. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Same intel, 4&times; less — and zero analyst hours
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data and Vendr analysis (April 2026).
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
                <li>✓ Fully automated — 0 analyst hours</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Caelian (Pro tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $199<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$2,388 / year</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· 8–15 analyst hours/week needed</li>
                <li>· Manual curation required</li>
                <li>· No free plan</li>
                <li>· Annual commitment recommended</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s a <strong className="text-gray-900">4&times; price difference</strong>{" "}
            plus the hidden cost of analyst time — which can exceed the subscription itself.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Caelian
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Caelian wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Caelian</th>
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
                      <ComparisonCell value={row.caelian} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Analyst hour
            estimates from Vendr and Caelian customer reviews.
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
                <li>· A lean team that wants competitive intel without hiring an analyst</li>
                <li>· Looking for set-and-forget monitoring that runs on autopilot</li>
                <li>· Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>· Not willing to spend 8–15 hours/week curating intel manually</li>
                <li>· Happy with AI-generated summaries delivered via email or Slack</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Caelian if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· A mid-market team with a dedicated CI analyst who needs custom workflows</li>
                <li>· Building curated competitive reports with manual editorial control</li>
                <li>· Needing bespoke analyst dashboards and custom tagging taxonomies</li>
                <li>· Comfortable investing 8–15 analyst hours/week to keep intel fresh</li>
                <li>· Wanting deep integration with internal wikis and knowledge bases</li>
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
            No analyst required. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Caelian" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Caelian?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare the analyst hours you save.
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
