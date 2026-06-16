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
    "KompWatch vs Crayon (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Crayon: honest comparison of pricing, features, and setup. Crayon's median contract is $28,750/yr with a sales process. KompWatch starts free with self-serve signup. Crayon was acquired by SoftwareOne for $1.4B in April 2026.",
  keywords: [
    "KompWatch vs Crayon",
    "Crayon alternative",
    "Crayon competitor monitoring",
    "Crayon vs KompWatch",
    "Crayon SoftwareOne acquisition",
    "AI competitor monitoring comparison",
    "Crayon pricing",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "Crayon review",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-crayon`,
  },
  openGraph: {
    title: "KompWatch vs Crayon (2026) — AI Competitor Monitoring Compared",
    description:
      "Enterprise CI platform vs self-serve competitor monitoring. Pricing, features, setup — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Crayon — Competitor Monitoring Compared",
    description:
      "Crayon (SoftwareOne) is enterprise CI with battlecards and managed services. KompWatch is self-serve with AI digests, headless rendering, and a free tier. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  crayon: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", crayon: "$5K–$80K+/yr (quote)" },
  { feature: "Median annual cost", kompwatch: "$588/yr", crayon: "$28,750/yr", note: "vendr.com data, 2025" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", crayon: false },
  { feature: "Self-serve signup", kompwatch: true, crayon: false, note: "Crayon requires a sales call" },
  { feature: "Independent vendor", kompwatch: true, crayon: "Acquired by SoftwareOne (Apr 2026)" },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", crayon: "AI-powered alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, crayon: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", crayon: "Proprietary rendering" },
  { feature: "CSS selector targeting", kompwatch: true, crayon: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", crayon: false },
  { feature: "Pricing page tracking", kompwatch: true, crayon: true },
  { feature: "Feature & product page tracking", kompwatch: true, crayon: true },
  { feature: "Blog & content monitoring", kompwatch: true, crayon: true },
  { feature: "Job listing tracking", kompwatch: true, crayon: true },
  { feature: "Sales battlecards", kompwatch: "One-click HTML export", crayon: "Native battlecard builder", note: "Crayon's core strength" },
  { feature: "Managed analyst services", kompwatch: false, crayon: true, note: "Crayon offers human-curated intel" },
  { feature: "CRM integrations (Salesforce, HubSpot)", kompwatch: false, crayon: true },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", crayon: "Configurable alerts" },
  { feature: "Time to first insight", kompwatch: "< 2 minutes", crayon: "Weeks (sales + onboarding)", note: "Enterprise onboarding process" },
  { feature: "Month-to-month billing", kompwatch: true, crayon: false, note: "Annual contracts typical" },
  { feature: "Engineering setup required", kompwatch: false, crayon: "Integration + SSO + connectors" },
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
    title: "Self-serve vs enterprise sales",
    description:
      "Crayon requires a sales call, custom pricing, and multi-week onboarding with a dedicated implementation manager. KompWatch lets you sign up free, paste a competitor URL, and get your first AI-generated insight in under 2 minutes — no sales process, no annual contract.",
  },
  {
    title: "Claude-powered digests vs noisy feeds",
    description:
      "Crayon's #1 complaint on G2: noisy data feeds mixing irrelevant social posts with meaningful changes. KompWatch generates Claude-powered digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity — so your team prioritizes what matters.",
  },
  {
    title: "98% cheaper for small teams",
    description:
      "Crayon's median contract is $28,750/yr with annual commitments. KompWatch Pro is $49/mo ($588/yr) with month-to-month billing — and there's a free tier with 2 competitors. For teams that don't need managed analyst services or Salesforce integrations, KompWatch delivers core monitoring at a fraction of the cost.",
  },
];

export default function CompareKompWatchVsCrayonPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Crayon", path: "/compare/kompwatch-vs-crayon" },
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

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          2026 comparison
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Crayon{" "}
          <span className="text-brand-600">
            — same monitoring, 98% less
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Crayon (acquired by SoftwareOne for $1.4B in April 2026) is an enterprise
          competitive intelligence platform with battlecards, managed services, and a
          sales-led process. KompWatch is{" "}
          <strong className="text-gray-900">self-serve from day one</strong>,{" "}
          <strong className="text-gray-900">98% cheaper at the median</strong>, and ships{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> with
          severity classification — plus a free tier to try before you buy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Crayon Hero CTA"
            eventProps={{ competitor: "Crayon", page: "compare-kompwatch-vs-crayon" }}
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
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      {/* Key differentiators */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Where KompWatch wins for small &amp; mid-size teams
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Crayon is built for enterprise CI teams with analysts and Salesforce workflows.
            KompWatch is built for product, marketing, and startup teams that want fast,
            affordable competitor monitoring.
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
              Pricing: KompWatch starts free, Crayon&rsquo;s median is $28,750/yr
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from vendr.com and G2 reviews as of June 2026.
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
                <li>&#10003; Free tier available (2 competitors)</li>
                <li>&#10003; 10 competitors, 6-hour snapshots</li>
                <li>&#10003; Daily AI digests (Claude-powered)</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Full Playwright headless rendering</li>
                <li>&#10003; CSS selector targeting per competitor</li>
                <li>&#10003; Job listing tracking</li>
                <li>&#10003; Self-serve signup, no sales call</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon (SoftwareOne)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Median contract &middot; range $5K–$80K+/yr</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Native sales battlecard builder</li>
                <li>&middot; Managed analyst services available</li>
                <li>&middot; CRM integrations (Salesforce, HubSpot)</li>
                <li>&middot; AI-powered competitor alerts</li>
                <li>&middot; No free tier or self-serve signup</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No severity classification</li>
                <li>&middot; Acquired by SoftwareOne (Apr 2026)</li>
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
                      <ComparisonCell value={row.crayon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Crayon features may vary by plan; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Crayon Mid CTA"
            eventProps={{ competitor: "Crayon", page: "compare-kompwatch-vs-crayon" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
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
                <li>&middot; You&rsquo;re a startup, product, or marketing team — not an enterprise CI org</li>
                <li>&middot; You want to start monitoring today, not after a multi-week sales process</li>
                <li>&middot; $28K+/yr for competitor monitoring doesn&rsquo;t fit your budget</li>
                <li>&middot; You need AI digests that classify changes by severity and type</li>
                <li>&middot; You track React/SPA pages that need full headless rendering</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific sections</li>
                <li>&middot; You want an independent vendor, not a product inside a $4B IT-services rollup</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Crayon if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You&rsquo;re an enterprise with a dedicated CI team (5+ analysts)</li>
                <li>&middot; You need managed analyst services and human-curated intel</li>
                <li>&middot; CRM integrations (Salesforce, HubSpot) are a hard requirement</li>
                <li>&middot; You need native battlecard workflows for 50+ rep sales orgs</li>
                <li>&middot; Budget isn&rsquo;t a constraint and you prefer a managed enterprise experience</li>
                <li>&middot; You need SOC 2 Type II, SLAs, and dedicated account management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Crayon"
        faqs={[
          {
            question: "What is the difference between KompWatch and Crayon?",
            answer:
              "Both track competitor websites for pricing, feature, and content changes. Crayon (acquired by SoftwareOne in April 2026 for $1.4B) is an enterprise competitive intelligence platform with battlecards, managed analyst services, and Salesforce integrations — it requires a sales call, annual contracts, and multi-week onboarding. KompWatch is a self-serve competitor monitoring tool for product, marketing, and startup teams — it starts free, uses Claude-powered AI to generate digests with severity classification, and includes Playwright headless rendering and CSS selector targeting.",
          },
          {
            question: "How does KompWatch pricing compare to Crayon?",
            answer:
              "Crayon's median annual contract is $28,750/yr (vendr.com data, 2025), with a range from $5K (entry) to $80K+/yr for full team plans. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo ($588/yr) for 10 competitors with daily digests — roughly 98% cheaper than Crayon's median. KompWatch Team ($149/mo) adds 50 competitors with hourly snapshots.",
          },
          {
            question: "Is Crayon better than KompWatch for enterprise sales teams?",
            answer:
              "If your primary use case is equipping 50+ sales reps with battlecards inside Salesforce, running managed CI programs with dedicated analysts, and you need SOC 2 Type II compliance — Crayon's enterprise platform is purpose-built for that workflow. KompWatch is better suited for product, marketing, and strategy teams that need website change monitoring with AI-powered analysis, headless rendering, and CSS selector targeting at a fraction of the cost.",
          },
          {
            question: "Can I try KompWatch for free before switching from Crayon?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. You can run both tools in parallel: add the same competitor URLs to KompWatch and compare the output quality. Setup takes under 2 minutes.",
          },
          {
            question: "What does the SoftwareOne acquisition mean for Crayon customers?",
            answer:
              "SoftwareOne acquired Crayon for $1.4B in April 2026 and committed to CHF 80–100M in annual cost savings within 18 months. Niche tools inside large IT-services consolidators historically see slower roadmaps, enterprise-only pivots, and packaging changes that push SMB customers upmarket. If your Crayon renewal is within 12 months, it's worth evaluating independent alternatives while you have leverage.",
          },
          {
            question: "Why is KompWatch so much cheaper than Crayon?",
            answer:
              "Crayon bundles enterprise features like managed analyst services, Salesforce integrations, battlecard CMS, dedicated onboarding, and SOC 2 compliance. KompWatch focuses on core competitor website monitoring with AI digests — no sales team, no managed services overhead. Self-serve distribution keeps costs low and savings get passed to customers.",
          },
          {
            question: "Can I switch from Crayon to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Crayon, set CSS selectors for specific page sections, and your first snapshot fires immediately. If your team relies on Crayon's managed analyst services or enterprise Salesforce integrations, you may want to run both tools — KompWatch for automated monitoring and Crayon for human-curated enterprise intel.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Crayon" source="compare-crayon" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Get the same core website monitoring
            as Crayon at 98% less cost.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Crayon Bottom CTA"
              eventProps={{ competitor: "Crayon", page: "compare-kompwatch-vs-crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Crayon?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Try KompWatch free
            </Link>{" "}
            &middot;{" "}
            <Link href="/pricing" className="underline hover:text-gray-700">
              Pricing
            </Link>{" "}
            &middot;{" "}
            <Link href="/compare" className="underline hover:text-gray-700">
              All comparisons
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
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
