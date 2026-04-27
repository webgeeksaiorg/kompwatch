import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Unkover Alternative — KompWatch vs Unkover (Honest Comparison)",
  description:
    "Unkover monitors competitor emails. KompWatch monitors competitor websites — pricing pages, features, blogs, job listings — with AI digests for $49/mo. Different signals, one CI stack.",
  keywords: [
    "Unkover alternative",
    "Unkover vs KompWatch",
    "Unkover competitor",
    "competitor email monitoring",
    "competitor website monitoring",
    "competitive intelligence tool",
    "Unkover pricing",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-unkover`,
  },
  openGraph: {
    title: "KompWatch vs Unkover — Website Changes vs Email Sequences",
    description:
      "Honest side-by-side: KompWatch ($49/mo, website change detection + AI digests) vs Unkover (competitor email sequence monitoring). See the full comparison.",
    url: `${siteUrl}/vs-unkover`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Unkover — Honest Comparison",
    description:
      "Unkover captures competitor emails. KompWatch monitors competitor websites — pricing changes, feature launches, hiring signals. Different tools, different signals.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  unkover: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", unkover: "Paid (varies)" },
  { feature: "Free plan", kompwatch: true, unkover: false },
  { feature: "Self-serve signup", kompwatch: true, unkover: true },
  { feature: "Monitors competitor websites", kompwatch: true, unkover: false },
  { feature: "Pricing page change detection", kompwatch: true, unkover: false },
  { feature: "Feature & product page tracking", kompwatch: true, unkover: false },
  { feature: "Blog & content monitoring", kompwatch: true, unkover: false },
  { feature: "Job listing tracking", kompwatch: true, unkover: false },
  { feature: "Headless browser (handles React/SPA sites)", kompwatch: true, unkover: false },
  { feature: "AI change summaries", kompwatch: true, unkover: false },
  { feature: "Competitor email sequence capture", kompwatch: false, unkover: true },
  { feature: "Onboarding flow monitoring", kompwatch: false, unkover: true },
  { feature: "Email cadence & timing analysis", kompwatch: false, unkover: true },
  { feature: "Competitor messaging/positioning via email", kompwatch: false, unkover: true },
  { feature: "Email digests", kompwatch: true, unkover: "Email archive" },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", unkover: "Days (waits for emails)" },
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

export default function VsUnkoverPage() {
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
          Unkover alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Unkover{" "}
          <span className="text-brand-600">— websites vs email sequences</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Unkover signs up for your competitors&rsquo; onboarding flows and captures every email they
          send — great for dissecting messaging and nurture cadences. KompWatch monitors their{" "}
          <strong className="text-gray-900">actual websites</strong> — pricing page edits, feature
          launches, blog posts, and job listings — and emails you AI digests. Different signals,
          same goal: know what competitors are doing before your team gets blindsided.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Unkover" }}
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

      {/* Different categories callout */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Two different signals — use both
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Unkover and KompWatch cover different channels. Here&rsquo;s how they split.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch — website change detection
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Watches what competitors <em>do on their website</em>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>&check; Pricing page edits (new tiers, price hikes)</li>
                <li>&check; Feature copy changes (positioning shifts)</li>
                <li>&check; New blog posts and announcements</li>
                <li>&check; Job listings (hiring as a leading signal)</li>
                <li>&check; AI digests — read summaries, not raw diffs</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                $49/mo for 10 competitors. Free plan with 2.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Unkover — competitor email monitoring
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Watches what competitors <em>say in email</em>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>&middot; Onboarding email sequence capture</li>
                <li>&middot; Nurture cadence timing &amp; frequency</li>
                <li>&middot; Product messaging &amp; positioning shifts</li>
                <li>&middot; Promotional &amp; lifecycle email archive</li>
                <li>&middot; Subject line &amp; CTA analysis</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Paid plans (pricing varies by competitor count).
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Many teams use both: Unkover for email intelligence, KompWatch for what changed on the
            competitor&rsquo;s actual website this week.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Unkover
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Unkover wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Unkover</th>
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
                      <ComparisonCell value={row.unkover} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of April 2026. Unkover details
            sourced from unkover.com.
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
                <li>&middot; Tracking pricing page changes, feature launches, or new blog posts as they happen</li>
                <li>&middot; Watching SaaS competitors with React/Next.js sites that need a real browser to render</li>
                <li>&middot; Using job listings as a leading signal for product/market moves</li>
                <li>&middot; Looking for AI summaries of website changes instead of raw diffs</li>
                <li>&middot; Wanting same-day alerts, not waiting for competitors to send an email about it</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Unkover if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Dissecting competitor onboarding sequences to improve your own</li>
                <li>&middot; Studying email cadence timing, subject lines, and CTA patterns</li>
                <li>&middot; Benchmarking lifecycle email strategy against specific competitors</li>
                <li>&middot; Focused on email-channel competitive intelligence specifically</li>
                <li>&middot; Not monitoring website-level changes (pricing pages, feature copy) at all</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Unkover"
        faqs={[
          {
            question: "What does Unkover do?",
            answer: "Unkover monitors competitor email sequences. It signs up for competitors' onboarding flows and captures every email they send, giving you a window into their messaging strategy, nurture cadences, promotional timing, and product positioning over email.",
          },
          {
            question: "What is the difference between KompWatch and Unkover?",
            answer: "Different channels. Unkover watches what competitors say in email — onboarding sequences, lifecycle campaigns, promotional sends. KompWatch watches what competitors do on their website — pricing page updates, feature copy changes, new blog posts, and job listing shifts. These are different signals that layer well together.",
          },
          {
            question: "Does Unkover monitor competitor websites for changes?",
            answer: "Based on public information as of April 2026, Unkover focuses on competitor email monitoring, not website change detection. If a competitor edits their pricing page or launches a feature without emailing about it, Unkover typically won't surface it. KompWatch watches the websites directly and detects changes within the snapshot interval.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer: "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. Add your competitors' URLs and get your first change report within minutes.",
          },
          {
            question: "Should I use both Unkover and KompWatch?",
            answer: "If your competitive intelligence workflow spans both web and email, yes. Unkover covers what competitors say in their email sequences — useful for benchmarking onboarding, studying lifecycle messaging, and spotting promotional patterns. KompWatch covers what's changing on competitor websites in near-real-time. They don't overlap; they complement each other.",
          },
          {
            question: "How fast does KompWatch detect changes compared to Unkover?",
            answer: "KompWatch detects website changes within the snapshot interval (hourly on Team, every 6 hours on Pro, daily on Free) and emails AI digests immediately. Unkover's speed depends on when the competitor sends emails — if they don't email about a pricing change or feature launch, you may not learn about it at all. Different tools, different detection models.",
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
              eventProps={{ competitor: "Unkover" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already using Unkover for emails?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Add KompWatch for the website side
            </Link>{" "}
            and close the gap.
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
            <Link href="/vs-owler" className="text-sm text-gray-500 hover:text-gray-700">
              vs Owler
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
