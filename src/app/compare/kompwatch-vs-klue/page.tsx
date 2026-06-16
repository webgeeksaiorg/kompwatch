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
    "KompWatch vs Klue (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Klue: honest comparison of pricing, features, and setup. Klue starts at $20K–$40K/yr with a sales process. KompWatch starts free with self-serve signup.",
  keywords: [
    "KompWatch vs Klue",
    "Klue alternative",
    "Klue competitor monitoring",
    "Klue vs KompWatch",
    "Klue pricing",
    "AI competitor monitoring comparison",
    "Klue review",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "Klue battlecard alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-klue`,
  },
  openGraph: {
    title: "KompWatch vs Klue (2026) — AI Competitor Monitoring Compared",
    description:
      "Enterprise CI platform vs self-serve competitor monitoring. Pricing, features, setup — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-klue`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Klue — Competitor Monitoring Compared",
    description:
      "Klue is enterprise CI with battlecards, win/loss analysis, and CRM integrations. KompWatch is self-serve with AI digests, headless rendering, and a free tier. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  klue: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", klue: "$20K–$40K/yr" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", klue: false },
  { feature: "Self-serve signup", kompwatch: true, klue: false, note: "Klue requires a sales call" },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", klue: "AI-powered alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, klue: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", klue: "Proprietary rendering" },
  { feature: "CSS selector targeting", kompwatch: true, klue: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", klue: false },
  { feature: "Pricing page tracking", kompwatch: true, klue: true },
  { feature: "Feature & product page tracking", kompwatch: true, klue: true },
  { feature: "Blog & content monitoring", kompwatch: true, klue: true },
  { feature: "Job listing tracking", kompwatch: true, klue: false },
  { feature: "Sales battlecards", kompwatch: "One-click HTML export", klue: "Native battlecard CMS", note: "Klue's core strength" },
  { feature: "Win/loss analysis", kompwatch: false, klue: true, note: "Klue's dedicated module" },
  { feature: "CRM integrations (Salesforce, HubSpot)", kompwatch: false, klue: true },
  { feature: "Microsoft 365 integration", kompwatch: false, klue: true, note: "Deep Teams/Dynamics/Copilot integration" },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", klue: "Configurable alerts" },
  { feature: "Time to first insight", kompwatch: "< 2 minutes", klue: "Weeks (sales + onboarding)", note: "Enterprise onboarding process" },
  { feature: "Month-to-month billing", kompwatch: true, klue: false, note: "Annual contracts typical" },
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
      "Klue requires a sales call, demo, and enterprise onboarding that can take weeks. KompWatch lets you sign up free, paste a competitor URL, and get your first AI-generated insight in under 2 minutes — no sales process, no annual contract.",
  },
  {
    title: "Claude-powered digests with severity",
    description:
      "Klue sends AI-powered alerts and maintains a battlecard corpus that requires human curation. KompWatch generates Claude-powered digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity — so your team prioritizes what matters without a dedicated CI analyst.",
  },
  {
    title: "97% cheaper for small teams",
    description:
      "Klue starts around $20K–$40K/yr with annual contracts. KompWatch Pro is $49/mo ($588/yr) with month-to-month billing — and there's a free tier with 2 competitors. For teams that don't need battlecard CMS workflows or CRM integrations, KompWatch delivers core monitoring at a fraction of the cost.",
  },
];

export default function CompareKompWatchVsKluePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Klue", path: "/compare/kompwatch-vs-klue" },
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
          KompWatch vs Klue{" "}
          <span className="text-brand-600">
            — enterprise CI at a fraction of the cost
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Klue is an enterprise competitive intelligence platform with
          battlecards, win/loss analysis, CRM integrations, and a sales-led buying process.
          KompWatch is{" "}
          <strong className="text-gray-900">self-serve from day one</strong>,{" "}
          <strong className="text-gray-900">97% cheaper</strong>, and ships{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> with
          severity classification — plus a free tier to try before you buy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Klue Hero CTA"
            eventProps={{ competitor: "Klue", page: "compare-kompwatch-vs-klue" }}
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
            Klue is built for enterprise sales orgs with dedicated CI analysts. KompWatch is built for
            product, marketing, and startup teams that want fast, affordable competitor monitoring.
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
              Pricing: KompWatch starts free, Klue starts at ~$20K/yr
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
                Klue
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                ~$20K<span className="text-lg font-normal text-gray-500">/yr+</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Annual contract &middot; sales call required</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Native battlecard CMS for sales teams</li>
                <li>&middot; Win/loss analysis module</li>
                <li>&middot; CRM integrations (Salesforce, HubSpot)</li>
                <li>&middot; Microsoft 365 + Copilot integration</li>
                <li>&middot; No free tier or self-serve signup</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No severity classification</li>
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
                      <ComparisonCell value={row.klue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Klue pricing requires a sales call; estimates from vendr.com and review sites.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Klue Mid CTA"
            eventProps={{ competitor: "Klue", page: "compare-kompwatch-vs-klue" }}
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
                <li>&middot; You&rsquo;re a startup, product, or marketing team — not an enterprise sales org</li>
                <li>&middot; You want to start monitoring today, not after a multi-week onboarding process</li>
                <li>&middot; $20K+/yr for competitor monitoring doesn&rsquo;t fit your budget</li>
                <li>&middot; You need AI digests that classify changes by severity and type</li>
                <li>&middot; You track React/SPA pages that need full headless rendering</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific sections</li>
                <li>&middot; Competitor hiring signals are part of your strategy</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Klue if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You&rsquo;re an enterprise sales team that needs native battlecard CMS workflows</li>
                <li>&middot; Win/loss analysis is a core part of your competitive strategy</li>
                <li>&middot; CRM integrations (Salesforce, HubSpot) are a hard requirement</li>
                <li>&middot; You use Microsoft 365 and want deep Teams/Dynamics/Copilot integration</li>
                <li>&middot; Budget isn&rsquo;t a constraint and you prefer a managed enterprise experience</li>
                <li>&middot; You need vendor security reviews, SLAs, and dedicated account management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Klue"
        faqs={[
          {
            question: "What is the difference between KompWatch and Klue?",
            answer:
              "Klue is an enterprise competitive intelligence platform focused on sales battlecards, win/loss analysis, CRM integrations, and Microsoft 365 workflows. It requires a sales call and starts around $20K–$40K/yr. KompWatch is a self-serve competitor monitoring tool for product, marketing, and startup teams — it starts free, uses Claude-powered AI to generate digests with severity classification, and includes Playwright headless rendering and CSS selector targeting.",
          },
          {
            question: "How does KompWatch pricing compare to Klue?",
            answer:
              "Klue starts around $20K–$40K/yr with annual contracts and a sales process. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo ($588/yr) for 10 competitors with daily digests — roughly 97% cheaper than Klue's entry price. KompWatch Team ($149/mo) adds 50 competitors with hourly snapshots.",
          },
          {
            question: "Is Klue better than KompWatch for sales teams?",
            answer:
              "If your primary use case is equipping 50+ sales reps with battlecards inside Salesforce, HubSpot, or Microsoft Teams, Klue's native CRM integrations, battlecard CMS, and win/loss analysis module are purpose-built for that workflow. KompWatch is better suited for product, marketing, and strategy teams that need website change monitoring with AI-powered analysis, headless rendering, and CSS selector targeting — without the enterprise overhead.",
          },
          {
            question: "Can I try KompWatch for free before switching from Klue?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. You can run both tools in parallel: add the same competitor URLs to KompWatch and compare the output quality. Setup takes under 2 minutes.",
          },
          {
            question: "Does KompWatch have battlecards like Klue?",
            answer:
              "Yes — KompWatch offers one-click battlecard export. Generate a sales-ready battlecard from any competitor's tracked changes in seconds. It's lighter than Klue's full battlecard CMS designed for 50+ rep sales orgs with curated content workflows, but it covers the core use case at a fraction of the cost.",
          },
          {
            question: "Why is Klue so expensive?",
            answer:
              "Klue raised $62M from Tiger Global and Salesforce Ventures. That level of venture funding requires high ACVs — typically $20K–$40K/yr per customer. The product prioritizes enterprise features (battlecard CMS, win/loss analysis, Compete Agent AI, CRM integrations, Microsoft 365 integration) that justify those price points. If you need competitor monitoring without the enterprise overhead, KompWatch starts at $49/mo.",
          },
          {
            question: "Can I switch from Klue to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Klue, set CSS selectors for specific page sections, and your first snapshot fires immediately. If your team relies on Klue's battlecard CMS or CRM integrations, you may want to run both tools — KompWatch for website monitoring and Klue for sales enablement.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Klue" source="compare-klue" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Get the same core website monitoring
            as Klue at a fraction of the cost.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Klue Bottom CTA"
              eventProps={{ competitor: "Klue", page: "compare-kompwatch-vs-klue" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Klue?{" "}
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
