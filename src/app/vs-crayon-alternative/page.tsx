import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { CompetitorUrlCapture } from "@/components/competitor-url-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Best Crayon Alternative in 2026 — KompWatch (From $0/mo)",
  description:
    "Looking for a Crayon alternative after the SoftwareOne acquisition? KompWatch monitors competitor pricing, features, and content with AI digests — from $0/mo. No sales call, no annual contract.",
  keywords: [
    "Crayon alternative",
    "Crayon alternative 2026",
    "best Crayon alternative",
    "Crayon replacement",
    "Crayon competitor",
    "competitive intelligence alternative",
    "Crayon SoftwareOne alternative",
    "cheap Crayon alternative",
    "Crayon alternative free",
    "competitor monitoring tool",
    "competitive intelligence software",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-crayon-alternative`,
  },
  openGraph: {
    title: "Best Crayon Alternative in 2026 — KompWatch",
    description:
      "Crayon was acquired by SoftwareOne for $1.4B. KompWatch is the independent, self-serve alternative — same core monitoring from $0/mo. No sales call.",
    url: `${siteUrl}/vs-crayon-alternative`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crayon Alternative in 2026 — KompWatch",
    description:
      "Crayon's median contract: $28,750/yr. Now owned by SoftwareOne. KompWatch is the independent alternative — $49/mo, self-serve, free plan available.",
  },
};

const alternativeReasons: {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}[] = [
  {
    title: "Crayon is no longer independent",
    description:
      "SoftwareOne acquired Crayon for $1.4B in April 2026. Niche products inside IT-services rollups historically see slower roadmaps, enterprise-only pivots, and pricing changes that push SMB customers upmarket — or out.",
    stat: "$1.4B",
    statLabel: "acquisition price",
  },
  {
    title: "Crayon pricing locks out small teams",
    description:
      "Crayon's median contract is $28,750/yr (vendr.com data). No free plan, no self-serve signup, no monthly billing. If you're a 1–20 person team, you're paying enterprise prices for features you may not need.",
    stat: "$28,750",
    statLabel: "median annual contract",
  },
  {
    title: "Weeks to first insight",
    description:
      "Crayon requires a sales call, contract negotiation, implementation kickoff, and engineering integration before you see your first alert. Most teams wait 8–15 weeks. KompWatch delivers AI digests in under 2 minutes.",
    stat: "8–15 wks",
    statLabel: "Crayon time-to-value",
  },
  {
    title: "Information overload is the #1 complaint",
    description:
      "32% of Crayon's 1–3 star G2 reviews cite 'too much noise' as their top issue. Raw social media posts, irrelevant mentions, and unfiltered feeds require a dedicated analyst to triage. KompWatch's AI filters the noise automatically.",
    stat: "32%",
    statLabel: "cite noise in low reviews",
  },
];

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  crayon: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", crayon: "$5K–$80K+/yr (quote)" },
  { feature: "Annual cost (median)", kompwatch: "$588/yr", crayon: "$28,750/yr" },
  { feature: "Free plan", kompwatch: true, crayon: false },
  { feature: "Self-serve signup", kompwatch: true, crayon: false },
  { feature: "No sales call required", kompwatch: true, crayon: false },
  { feature: "Monthly billing", kompwatch: true, crayon: "Annual only" },
  { feature: "Independent vendor", kompwatch: true, crayon: "Owned by SoftwareOne" },
  { feature: "AI change summaries", kompwatch: true, crayon: true },
  { feature: "Pricing page tracking", kompwatch: true, crayon: true },
  { feature: "Feature & product page tracking", kompwatch: true, crayon: true },
  { feature: "Blog & content monitoring", kompwatch: true, crayon: true },
  { feature: "Job listing tracking", kompwatch: true, crayon: true },
  { feature: "Email digests", kompwatch: true, crayon: true },
  { feature: "Slack / webhook alerts", kompwatch: true, crayon: true },
  { feature: "Battlecards", kompwatch: "One-click export", crayon: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", crayon: "8–15 weeks" },
  { feature: "Engineering setup required", kompwatch: false, crayon: true },
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

export default function CrayonAlternativePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Crayon Alternative", path: "/vs-crayon-alternative" }]} />
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
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600"></span>
          </span>
          Crayon acquired by SoftwareOne &mdash; April 2026
        </div>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          The best Crayon alternative{" "}
          <span className="text-brand-600">for teams that don&rsquo;t need enterprise overhead</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Crayon was built for enterprises with dedicated CI teams and $28K+ budgets.
          If you&rsquo;re a founder, PM, or marketer who just needs to know when competitors
          change their pricing, ship features, or publish content &mdash;{" "}
          <strong className="text-gray-900">KompWatch does that from $0/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Crayon Alt Hero CTA Click"
            eventProps={{ competitor: "Crayon", page: "crayon-alternative" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free &mdash; no credit card
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
        <CompetitorUrlCapture competitor="Crayon" placeholder="https://crayon.co or any competitor URL" />
        <p className="mt-3 text-xs text-gray-400">
          Paste a competitor URL to start monitoring. No credit card. No sales call.
        </p>
      </section>

      {/* Why teams are looking for a Crayon alternative */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Why teams are looking for a Crayon alternative in 2026
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
              Four things are driving the search for alternatives &mdash; and none of them
              are about Crayon&rsquo;s feature set.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {alternativeReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-brand-600">{reason.stat}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {reason.statLabel}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KompWatch as the alternative — value props */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What KompWatch gives you that Crayon doesn&rsquo;t
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
              Same core monitoring. None of the enterprise friction.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                Free plan &mdash; no credit card
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Track 2 competitors with weekly AI digests at $0/mo. Crayon has no free
                tier and requires a sales call before you can evaluate the product.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                2-minute setup &mdash; no engineering
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Sign up with email, paste competitor URLs, get your first AI digest.
                No Salesforce connector, no SSO plumbing, no implementation kickoff.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                AI noise filtering &mdash; not raw feeds
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                KompWatch uses AI to surface pricing changes, feature launches, and
                hiring signals &mdash; not CEO tweets and intern selfies. No analyst
                required to triage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Crayon alternative pricing: $49/mo vs $28,750/yr
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from vendr.com and G2 reviews (May 2026).
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
              <div className="mt-1 text-sm text-gray-500">$588 / year &mdash; cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&#10003; 10 competitors tracked</li>
                <li>&#10003; Daily AI digests</li>
                <li>&#10003; Self-serve signup</li>
                <li>&#10003; Free plan available (2 competitors)</li>
                <li>&#10003; Cancel anytime &mdash; no annual lock-in</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon (median contract)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Range: $5K (entry) to $80K+/yr</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Quote-only pricing</li>
                <li>&middot; Sales call required</li>
                <li>&middot; Annual contract</li>
                <li>&middot; Multi-week onboarding</li>
                <li>&middot; Now owned by SoftwareOne</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s a <strong className="text-gray-900">~49&times; price difference</strong>{" "}
            at the median &mdash; for the same core competitive intelligence.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Crayon vs KompWatch: feature-by-feature comparison
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
            Comparison based on publicly available information as of May 2026. Crayon pricing
            requires a sales call; estimates from vendr.com and review sites.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Crayon Alt Mid CTA Click"
            eventProps={{ competitor: "Crayon", page: "crayon-alternative" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free &mdash; no credit card required
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
                <li>&middot; A founder, PM, or marketer who needs intel <em>this week</em>, not next quarter</li>
                <li>&middot; A 1&ndash;50 person team without budget for $5K&ndash;$80K+ enterprise contracts</li>
                <li>&middot; Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>&middot; Looking for a self-serve tool you can try before you pay</li>
                <li>&middot; Concerned about Crayon&rsquo;s roadmap after the SoftwareOne acquisition</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Stick with Crayon if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; An enterprise with a dedicated 5+ person CI team</li>
                <li>&middot; Buying a battlecard CMS for sales reps to consume in real time</li>
                <li>&middot; Needing human-curated intel + managed analyst services</li>
                <li>&middot; Already integrated with Salesforce/Highspot and want native plug-ins</li>
                <li>&middot; Tracking 100+ competitors with SOC 2 Type II requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to switch */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How to switch from Crayon to KompWatch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
              Most teams run both side-by-side for one digest cycle, then don&rsquo;t renew Crayon.
            </p>
          </div>

          <ol className="mt-12 space-y-6">
            {[
              {
                step: "Sign up for KompWatch (free)",
                detail: "Email + magic link. No credit card, no sales call. Takes 30 seconds.",
              },
              {
                step: "Add the same competitors you track in Crayon",
                detail: "Paste URLs for pricing pages, feature pages, blogs, and job boards. Pick CSS selectors for precision or use the default.",
              },
              {
                step: "Run both tools for one digest cycle",
                detail: "Compare what Crayon surfaces vs what KompWatch surfaces. If the same signals land in your inbox at 2% of the cost — you have your answer.",
              },
              {
                step: "Cancel Crayon at renewal",
                detail: "Check your contract's change-of-control clause — the SoftwareOne acquisition may give you an early exit option.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.step}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Crayon Alt Switch CTA Click"
              eventProps={{ competitor: "Crayon", page: "crayon-alternative" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start the side-by-side test &mdash; free
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-500">
              Or read the{" "}
              <Link href="/switching-from-crayon" className="underline hover:text-gray-700">
                full switching guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Crayon"
        faqs={[
          {
            question: "What is the best Crayon alternative in 2026?",
            answer: "For small and mid-size teams (1–50 people) that need competitor monitoring without enterprise overhead, KompWatch is the most direct Crayon alternative. It tracks the same signals — pricing changes, feature launches, blog posts, job listings — and delivers AI-generated digests starting at $0/mo. Self-serve signup, no sales call, no annual contract.",
          },
          {
            question: "Why are people looking for Crayon alternatives?",
            answer: "Four main reasons in 2026: (1) SoftwareOne acquired Crayon for $1.4B in April 2026, creating uncertainty about the product's independent roadmap. (2) Crayon's median contract is $28,750/yr — too expensive for small teams. (3) Setup takes 8–15 weeks with sales calls, contracts, and engineering integration. (4) 32% of low-rated G2 reviews cite information overload as the top complaint.",
          },
          {
            question: "How much cheaper is KompWatch than Crayon?",
            answer: "KompWatch Pro is $49/mo ($588/yr). Crayon's median contract is $28,750/yr according to vendr.com data. That's roughly 49× cheaper for the same core monitoring — pricing, features, blogs, jobs, AI digests, and Slack alerts. KompWatch also has a free plan (2 competitors, weekly digest) that Crayon does not offer.",
          },
          {
            question: "Can I use KompWatch as a drop-in Crayon replacement?",
            answer: "For core competitor monitoring — tracking pricing pages, feature pages, blog content, and job listings — yes. KompWatch covers the same signals with AI digests. Where Crayon still wins: battlecard CMS for large sales teams, managed analyst services, native Salesforce/Highspot integrations, and SOC 2 Type II compliance. If those features aren't critical for your team, KompWatch is a direct replacement at 2% of the cost.",
          },
          {
            question: "Should I switch from Crayon after the SoftwareOne acquisition?",
            answer: "It depends on your contract and segment. If you're a small or mid-size team paying enterprise prices, the acquisition is a natural evaluation point. SoftwareOne committed to CHF 80–100M in cost savings within 18 months — which historically means slower roadmaps, reduced support, and pricing increases for non-enterprise tiers. We recommend signing up for KompWatch's free plan and running both tools side-by-side for one digest cycle before your next renewal.",
          },
          {
            question: "Does KompWatch have a free plan?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Upgrade to Pro ($49/mo) for 10 competitors and daily digests, or Team ($149/mo) for 50 competitors and real-time alerts.",
          },
          {
            question: "How long does it take to set up KompWatch?",
            answer: "Under 2 minutes. Sign up with email (magic link, no password), paste competitor URLs, and your first AI digest arrives on the next cycle. No sales call, no engineering integration, no onboarding kickoff. Crayon's typical setup is 8–15 weeks.",
          },
          {
            question: "What does KompWatch track that Crayon also tracks?",
            answer: "Both tools track competitor pricing pages, product/feature pages, blog content, job listings, and content changes. Both offer AI-generated summaries and email digests. KompWatch also offers Slack/webhook alerts on Pro+ plans. Where Crayon goes further: battlecard CMS, managed analyst services, and deep CRM integrations for large sales organizations.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try the #1 Crayon alternative &mdash; free
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need more.
            No sales call. No annual contract. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Crayon Alt Bottom CTA Click"
              eventProps={{ competitor: "Crayon", page: "crayon-alternative" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free &mdash; no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Crayon?{" "}
            <Link href="/switching-from-crayon" className="underline hover:text-gray-700">
              See our switching guide
            </Link>{" "}
            or{" "}
            <Link href="/vs-crayon" className="underline hover:text-gray-700">
              see the detailed comparison
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
            <Link href="/vs-rivalsense" className="text-sm text-gray-500 hover:text-gray-700">
              vs RivalSense
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
