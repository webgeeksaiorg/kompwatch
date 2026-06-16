import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { CompareEmailCapture } from "@/components/compare-email-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "KompWatch vs Spire21 (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Spire21: honest comparison of two competitor monitoring tools for startups. See pricing, features, availability, and AI digest quality side-by-side. KompWatch starts free today — no waitlist.",
  keywords: [
    "KompWatch vs Spire21",
    "Spire21 alternative",
    "Spire21 competitor monitoring",
    "Spire21 vs KompWatch",
    "Spire21 waitlist alternative",
    "AI competitor monitoring comparison",
    "Spire21 pricing",
    "competitor monitoring tools 2026",
    "startup competitor tracking",
    "competitive intelligence tools comparison",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-spire21`,
  },
  openGraph: {
    title: "KompWatch vs Spire21 (2026) — AI Competitor Monitoring Compared",
    description:
      "Two competitor monitoring tools for startups, compared honestly. Pricing, features, availability, and AI digest quality — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-spire21`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Spire21 — Competitor Monitoring Compared",
    description:
      "Spire21 is in early access with a waitlist. KompWatch is live with a free tier, Playwright rendering, and Claude-powered digests. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  spire21: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", spire21: "TBD (early access)" },
  { feature: "Self-serve signup", kompwatch: true, spire21: "Waitlist", note: "Early access gate" },
  { feature: "No waitlist required", kompwatch: true, spire21: false },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", spire21: "Unknown" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, spire21: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", spire21: "Unknown" },
  { feature: "CSS selector targeting", kompwatch: true, spire21: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", spire21: false },
  { feature: "Pricing page tracking", kompwatch: true, spire21: "Unknown" },
  { feature: "Feature & product page tracking", kompwatch: true, spire21: "Unknown" },
  { feature: "Blog & content monitoring", kompwatch: true, spire21: "Unknown" },
  { feature: "Job listing tracking", kompwatch: true, spire21: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", spire21: "TBD" },
  { feature: "Startup-focused onboarding", kompwatch: "< 2 min setup", spire21: "Startup-specific flow" },
  { feature: "Battlecard export", kompwatch: "One-click HTML", spire21: false },
  { feature: "Month-to-month billing", kompwatch: true, spire21: "TBD" },
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

const differentiators = [
  {
    title: "Live today vs early-access waitlist",
    description:
      "KompWatch is live with a free tier — sign up, add a competitor URL, and get your first AI-generated snapshot within minutes. Spire21 is in early access with a waitlist. If you need competitor intelligence now, KompWatch is ready.",
  },
  {
    title: "Full headless rendering",
    description:
      "KompWatch uses Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. React-built pricing pages, SPA feature lists, and dynamically loaded content are captured accurately — not missed by lightweight HTTP fetching.",
  },
  {
    title: "AI digests with severity classification",
    description:
      "KompWatch generates Claude-powered digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity (Low/Medium/High/Critical). You read a prioritized summary, not a raw diff or basic alert.",
  },
];

export default function CompareKompWatchVsSpire21Page() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Spire21", path: "/compare/kompwatch-vs-spire21" },
        ]}
      />
      <SoftwareApplicationSchema />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900">
              Comparisons
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

      {/* Early-access context banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>Note:</strong> Spire21 is in early access (2026) with a waitlist.
        Feature details below reflect publicly available information — some may change as the product evolves.
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          2026 comparison
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Spire21{" "}
          <span className="text-brand-600">
            — live product vs early-access waitlist
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Spire21 targets startup teams with a dedicated onboarding flow — but it&rsquo;s
          still in early access behind a waitlist. KompWatch is{" "}
          <strong className="text-gray-900">live today</strong> with a free tier,{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> that classify
          changes by type and severity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Spire21 Hero CTA"
            eventProps={{ competitor: "Spire21", page: "compare-kompwatch-vs-spire21" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no waitlist, no credit card
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card &middot; No waitlist
        </p>
      </section>

      {/* Key differentiators */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Where KompWatch goes deeper
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Spire21 is building for startup teams. KompWatch is already live for teams
            that need to <em>act</em> on competitive intelligence today.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Pricing: KompWatch is transparent, Spire21 is TBD
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
                <li>&#10003; 10 competitors, 6-hour snapshots</li>
                <li>&#10003; Daily AI digests (Claude-powered)</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Full Playwright headless rendering</li>
                <li>&#10003; CSS selector targeting per competitor</li>
                <li>&#10003; Job listing tracking</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Spire21 (early access)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                TBD
              </div>
              <div className="mt-1 text-sm text-gray-500">Waitlist &middot; early-access pricing not public</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Startup-focused onboarding flow</li>
                <li>&middot; Early-stage competitor monitoring</li>
                <li>&middot; Feature set still evolving</li>
                <li>&middot; No public pricing yet</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Spire21
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Many Spire21 features are unknown — we note that rather than guess.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Spire21</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-gray-700">
                      {row.feature}
                      {row.note && (
                        <span className="ml-1 text-xs text-gray-400">({row.note})</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.kompwatch} highlight />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.spire21} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Spire21 is in early access — features and pricing may change. &ldquo;Unknown&rdquo; means the feature has not been publicly confirmed or denied.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Spire21 Mid CTA"
            eventProps={{ competitor: "Spire21", page: "compare-kompwatch-vs-spire21" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no waitlist required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro ($49/mo) for 10.
          </p>
        </div>
      </section>

      {/* When to pick which */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            When to pick which
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">
                Pick KompWatch if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You need competitor monitoring <em>now</em>, not after a waitlist</li>
                <li>&middot; You want AI-written summaries explaining <em>what</em> changed and <em>why it matters</em></li>
                <li>&middot; You track React/SPA pricing pages that lightweight scrapers miss</li>
                <li>&middot; You want to filter digests by change type (pricing, features, messaging, jobs)</li>
                <li>&middot; Competitor hiring signals matter to your strategy</li>
                <li>&middot; You need transparent, public pricing before committing</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Spire21 if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You&rsquo;re an early-stage startup and want tooling built specifically for that stage</li>
                <li>&middot; You&rsquo;re comfortable waiting on a waitlist for early-access onboarding</li>
                <li>&middot; You want to be an early adopter and shape the product roadmap</li>
                <li>&middot; Your competitors have mostly static pages (no heavy JS rendering needed)</li>
                <li>&middot; You don&rsquo;t need CSS selector targeting, job tracking, or severity classification yet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Spire21"
        faqs={[
          {
            question: "What is the difference between KompWatch and Spire21?",
            answer:
              "KompWatch is a live, self-serve competitor monitoring tool with a free tier, Playwright headless rendering, Claude-powered AI digests, CSS selector targeting, and job listing tracking. Spire21 is a new entrant (early access, 2026) targeting early-stage startup teams with a dedicated onboarding flow. Spire21 is behind a waitlist, and many of its features have not been publicly confirmed. KompWatch is available today with full documentation and a testable free plan.",
          },
          {
            question: "Is Spire21 free? How does pricing compare to KompWatch?",
            answer:
              "Spire21's pricing has not been publicly announced — it is in early access with a waitlist. KompWatch offers transparent public pricing: Free (2 competitors, weekly AI digest, no credit card), Pro at $49/mo (10 competitors, daily AI digests, headless rendering), and Team at $149/mo (50 competitors, hourly snapshots). You can start using KompWatch today without waiting for pricing to be published.",
          },
          {
            question: "Does Spire21 use headless browser rendering like KompWatch?",
            answer:
              "Spire21's rendering approach has not been publicly documented. KompWatch uses full Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. If your competitors use React, Vue, Angular, or other SPA frameworks for pricing or feature pages, KompWatch captures that content accurately.",
          },
          {
            question: "Can I switch from Spire21 to KompWatch?",
            answer:
              "Yes. KompWatch does not import historical data from Spire21, but setup takes about 5 minutes: sign up (no waitlist, no credit card), add the same competitor URLs, set CSS selectors to target specific page sections, and optionally connect Slack. Your first snapshot fires immediately. See our migration guide for details.",
          },
          {
            question: "Should I wait for Spire21 or start with KompWatch?",
            answer:
              "If you need competitor intelligence now, start with KompWatch — it's live, free to try, and takes under 2 minutes to set up. If you're interested in Spire21's startup-specific approach, join their waitlist and run KompWatch in parallel. KompWatch's free tier (2 competitors, no credit card) means there's no cost to getting started while you wait.",
          },
          {
            question: "Does KompWatch work for early-stage startups?",
            answer:
              "Yes. KompWatch's free tier is designed for small teams getting started with competitor monitoring. Add 2 competitors, set CSS selectors to track their pricing and feature pages, and receive weekly AI digests. When you grow past 2 competitors, upgrade to Pro ($49/mo) for 10 competitors and daily digests. No sales call, no contract, cancel anytime.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. Spire21 does not offer dedicated job listing tracking based on publicly available information.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Spire21" source="compare-spire21" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Skip the waitlist. Start monitoring today.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call, no waitlist. Add the same URLs you&rsquo;d
            track in Spire21 and get actionable intelligence in minutes.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Spire21 Bottom CTA"
              eventProps={{ competitor: "Spire21", page: "compare-kompwatch-vs-spire21" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no waitlist required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            On the Spire21 waitlist?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run KompWatch while you wait
            </Link>{" "}
            &middot;{" "}
            <Link href="/vs-spire21" className="underline hover:text-gray-700">
              Quick comparison
            </Link>{" "}
            &middot;{" "}
            <Link href="/pricing" className="underline hover:text-gray-700">
              Pricing
            </Link>
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
            </Link>
            <Link href="/vs-spire21" className="text-sm text-gray-500 hover:text-gray-700">
              vs Spire21
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
