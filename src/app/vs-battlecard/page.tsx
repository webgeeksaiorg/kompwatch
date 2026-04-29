import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Battlecard Alternative — KompWatch vs Battlecard (Honest Comparison)",
  description:
    "Looking for a Battlecard alternative? KompWatch delivers AI change summaries, CSS selector targeting, and SPA support — starting free. Compare features and pricing.",
  keywords: [
    "Battlecard alternative",
    "Battlecard vs KompWatch",
    "Battlecard competitor",
    "Battlecard pricing",
    "competitive intelligence tool",
    "competitor monitoring tool",
    "Battlecard Northr alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-battlecard`,
  },
  openGraph: {
    title: "KompWatch vs Battlecard — Same Price, Smarter Monitoring",
    description:
      "Honest side-by-side: KompWatch (free + $49/mo Pro) vs Battlecard ($49/mo Starter + $99/mo Pro). AI summaries, CSS selectors, SPA support vs manual battlecards.",
    url: `${siteUrl}/vs-battlecard`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Battlecard — Honest Comparison",
    description:
      "Both $49/mo. One gives you AI-powered competitor monitoring with automated digests. The other needs manual curation. See the full comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  battlecard: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", battlecard: "$49/mo Starter" },
  { feature: "Annual cost (Pro tier)", kompwatch: "$588/yr", battlecard: "$1,188/yr" },
  { feature: "Self-serve signup", kompwatch: true, battlecard: true },
  { feature: "Free plan", kompwatch: true, battlecard: false },
  { feature: "AI change summaries", kompwatch: true, battlecard: false },
  { feature: "Automated competitor monitoring", kompwatch: true, battlecard: "Manual curation" },
  { feature: "CSS selector targeting", kompwatch: true, battlecard: false },
  { feature: "SPA / JS-heavy site support", kompwatch: "Playwright (real browser)", battlecard: "Limited" },
  { feature: "Change type detection", kompwatch: "Pricing / Feature / Content", battlecard: "Manual tagging" },
  { feature: "Competitor digest emails", kompwatch: "Daily / Weekly", battlecard: "Manual export" },
  { feature: "Pricing page tracking", kompwatch: true, battlecard: "Manual snapshots" },
  { feature: "Blog & content monitoring", kompwatch: true, battlecard: "Manual curation" },
  { feature: "Multi-competitor dashboard", kompwatch: true, battlecard: true },
  { feature: "Sales battlecard templates", kompwatch: false, battlecard: true },
  { feature: "Built for automated CI", kompwatch: true, battlecard: false },
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

export default function VsBattlecardPage() {
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
          Battlecard alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Battlecard{" "}
          <span className="text-brand-600">— same price, smarter monitoring</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Both start at $49/mo. Battlecard gives you manual battlecard templates.
          KompWatch gives you{" "}
          <strong className="text-gray-900">automated competitor monitoring with AI summaries</strong>{" "}
          — so you know what changed before your next sales call, without anyone curating it.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Battlecard" }}
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
          No credit card. AI-powered monitoring. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Same starting price, different approach
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Battlecard focuses on sales enablement templates. KompWatch automates the monitoring that feeds them.
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
              <div className="mt-1 text-sm text-gray-500">$588 / year &middot; free plan available</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&check; Automated competitor monitoring</li>
                <li>&check; AI change summaries (what + why)</li>
                <li>&check; CSS selector targeting</li>
                <li>&check; Daily competitor digests</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Battlecard Starter
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$588 / year &middot; Pro at $99/mo</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Sales battlecard templates</li>
                <li>&middot; Manual competitor curation</li>
                <li>&middot; No automated monitoring</li>
                <li>&middot; No AI change detection</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Battlecard is better if you need sales enablement templates. KompWatch is better if
            you need{" "}
            <strong className="text-gray-900">automated monitoring</strong> — AI detects changes,
            categorizes them, and delivers daily digests without manual work.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Battlecard
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Battlecard wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Battlecard</th>
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
                      <ComparisonCell value={row.battlecard} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Battlecard
            pricing from their public website.
          </p>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Battlecard" }}
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
                <li>&middot; Wanting automated competitor monitoring without manual curation</li>
                <li>&middot; Looking for AI-powered change summaries that explain what changed and why</li>
                <li>&middot; Monitoring SPA / JavaScript-heavy competitor sites</li>
                <li>&middot; Wanting one daily digest instead of checking dashboards manually</li>
                <li>&middot; A small team without a dedicated competitive intelligence analyst</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Battlecard if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Building sales battlecards and need structured templates</li>
                <li>&middot; Already have someone manually curating competitive intelligence</li>
                <li>&middot; Focused on sales enablement rather than real-time monitoring</li>
                <li>&middot; Looking for a tool that integrates with your existing sales workflow</li>
                <li>&middot; Happy to manually track competitor changes and update cards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Battlecard"
        faqs={[
          {
            question: "How much does Battlecard cost?",
            answer: "Battlecard offers a Starter plan at $49/mo and a Pro plan at $99/mo. KompWatch also starts at $49/mo for Pro, but includes a free plan (2 competitors, weekly digest) — so you can try it before paying anything.",
          },
          {
            question: "What is the difference between KompWatch and Battlecard?",
            answer: "Battlecard is a sales enablement tool focused on creating and maintaining competitive battlecards through manual curation. KompWatch is an automated competitor monitoring platform — it uses a headless browser to scrape competitor sites, detects changes with AI, categorizes them (pricing, feature, content), and delivers daily digests. KompWatch automates the monitoring; Battlecard helps you organize what you already know.",
          },
          {
            question: "Does Battlecard automatically detect competitor changes?",
            answer: "Battlecard relies primarily on manual curation to keep battlecards up to date. KompWatch automatically monitors competitor websites on a schedule, detects changes using AI, and categorizes them by type and severity — no manual work required.",
          },
          {
            question: "Can KompWatch replace Battlecard?",
            answer: "They solve different problems. KompWatch automates the monitoring and change detection that would feed into battlecards. If you need both automated monitoring and structured sales templates, you could use both. If you need to choose one, pick KompWatch if your bottleneck is knowing what changed, and Battlecard if your bottleneck is organizing what you already know for sales.",
          },
          {
            question: "Which is better for a small team without a CI analyst?",
            answer: "KompWatch. Battlecard assumes someone is actively curating competitive intelligence — maintaining battlecards, reviewing competitor sites, updating content. KompWatch automates the monitoring and delivers AI-generated digests, so small teams without a dedicated CI analyst still get actionable competitor insights daily.",
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
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need
            AI summaries and daily digests. No sales call. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Battlecard" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Looking beyond Battlecard?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Start KompWatch free
            </Link>{" "}
            and see the difference automated monitoring makes.
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
            <Link href="/vs-visualping" className="text-sm text-gray-500 hover:text-gray-700">
              vs Visualping
            </Link>
            <Link href="/vs-already-dev" className="text-sm text-gray-500 hover:text-gray-700">
              vs Already.dev
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
