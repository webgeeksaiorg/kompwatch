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
    "KompWatch vs Tona (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Tona: honest comparison of two competitor monitoring tools. See pricing, features, AI digest quality, and rendering capabilities side-by-side. KompWatch starts free.",
  keywords: [
    "KompWatch vs Tona",
    "Tona alternative",
    "Tona competitor monitoring",
    "Tona vs KompWatch",
    "AI competitor monitoring comparison",
    "Tona pricing",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "Tona review",
    "competitor tracking tools",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-tona`,
  },
  openGraph: {
    title: "KompWatch vs Tona (2026) — AI Competitor Monitoring Compared",
    description:
      "Two competitor monitoring tools compared honestly. Pricing, features, rendering, and AI digest quality — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-tona`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Tona — Competitor Monitoring Compared",
    description:
      "Tona offers AI competitor tracking with team collaboration. KompWatch adds Playwright rendering, CSS selectors, and severity classification. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  tona: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", tona: "From $39/mo" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", tona: false },
  { feature: "Self-serve signup", kompwatch: true, tona: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", tona: "AI alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, tona: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", tona: "Limited", note: "Basic JS rendering" },
  { feature: "CSS selector targeting", kompwatch: true, tona: false, note: "Monitor specific page sections" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", tona: false },
  { feature: "Pricing page tracking", kompwatch: true, tona: true },
  { feature: "Feature & product page tracking", kompwatch: true, tona: true },
  { feature: "Blog & content monitoring", kompwatch: true, tona: true },
  { feature: "Job listing tracking", kompwatch: true, tona: false },
  { feature: "Team collaboration features", kompwatch: "Team plan ($149/mo)", tona: "Built-in" },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", tona: "Weekly summaries" },
  { feature: "Battlecard export", kompwatch: "One-click HTML", tona: false },
  { feature: "Month-to-month billing", kompwatch: true, tona: true },
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
    title: "Claude-powered digests vs AI alerts",
    description:
      "Tona sends AI-powered change alerts when a page updates. KompWatch generates Claude-powered digests that explain what changed, classify the change type (pricing, features, messaging, jobs), and assign severity — so your team acts on prioritized intelligence, not a stream of notifications.",
  },
  {
    title: "Full headless rendering",
    description:
      "KompWatch uses Playwright with headless Chromium to render JavaScript-heavy pages completely before snapshotting. React-built pricing pages, SPA feature lists, and dynamically loaded content are captured accurately — not missed by basic JS rendering.",
  },
  {
    title: "Free tier to evaluate first",
    description:
      "KompWatch offers a free plan with 2 competitors and weekly AI digests — no credit card required. Tona starts at $39/mo with no free tier. Try KompWatch before you commit to a monthly bill.",
  },
];

export default function CompareKompWatchVsTonaPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Tona", path: "/compare/kompwatch-vs-tona" },
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
          KompWatch vs Tona{" "}
          <span className="text-brand-600">
            — deeper AI analysis, free to start
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Tona offers AI-powered competitor tracking with team collaboration features.
          KompWatch goes deeper with{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">Claude-powered digests</strong> that classify
          changes by type and severity — plus a free tier that Tona doesn&rsquo;t offer.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Tona Hero CTA"
            eventProps={{ competitor: "Tona", page: "compare-kompwatch-vs-tona" }}
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
            Where KompWatch goes deeper
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Tona covers the basics with team-friendly features. KompWatch adds
            deeper analysis, headless rendering, and a free tier to start.
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
              Pricing: KompWatch starts free, Tona starts at $39/mo
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
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Tona
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $39<span className="text-lg font-normal text-gray-500">/mo+</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">No free tier &middot; team plans available</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; AI-powered change alerts</li>
                <li>&middot; Built-in team collaboration</li>
                <li>&middot; Basic JS rendering</li>
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
                      <ComparisonCell value={row.tona} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Tona features may vary by plan; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Tona Mid CTA"
            eventProps={{ competitor: "Tona", page: "compare-kompwatch-vs-tona" }}
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
                <li>&middot; You want AI digests that classify changes by severity and type, not just alerts</li>
                <li>&middot; You track React/SPA pricing pages that basic scrapers miss</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific sections, not entire pages</li>
                <li>&middot; Competitor hiring signals are part of your strategy</li>
                <li>&middot; You want to evaluate for free before paying (2 competitors, no credit card)</li>
                <li>&middot; You want one-click battlecard exports</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Tona if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; Built-in team collaboration is a top priority from day one</li>
                <li>&middot; You prefer AI change alerts over scheduled digests</li>
                <li>&middot; Your competitors have mostly static or lightly dynamic pages</li>
                <li>&middot; You don&rsquo;t need CSS selector targeting or severity classification</li>
                <li>&middot; Job listing tracking isn&rsquo;t relevant to your competitive strategy</li>
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
            question: "What is the difference between KompWatch and Tona?",
            answer:
              "Both are competitor monitoring tools that use AI. Tona focuses on team collaboration with AI-powered change alerts. KompWatch goes deeper on analysis: it uses full Playwright headless rendering for JavaScript-heavy pages, CSS selector targeting to watch specific page sections, and Claude-powered digests that classify changes by type (pricing, features, messaging, jobs) and severity (Low/Medium/High/Critical). Tona starts at $39/mo with no free tier; KompWatch starts free.",
          },
          {
            question: "How does KompWatch pricing compare to Tona?",
            answer:
              "Tona starts at $39/mo with no free tier. KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo for 10 competitors with daily digests, severity classification, headless rendering, CSS selectors, and job tracking. KompWatch Team ($149/mo) adds 50 competitors with hourly snapshots for larger teams.",
          },
          {
            question: "Does Tona have headless browser rendering like KompWatch?",
            answer:
              "Tona offers basic JavaScript rendering. KompWatch uses full Playwright with headless Chromium, which renders React, Vue, Angular, and other SPA-built pages completely before snapshotting. If your competitors use modern JavaScript frameworks for their pricing or feature pages, KompWatch captures content that basic rendering may miss.",
          },
          {
            question: "Can I try KompWatch for free?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. Tona does not currently offer a free tier. You can evaluate KompWatch at no cost and upgrade to Pro ($49/mo) for 10 competitors with daily digests when ready.",
          },
          {
            question: "Does Tona have better team collaboration than KompWatch?",
            answer:
              "Tona includes built-in team collaboration features on its standard plans. KompWatch offers team features on the Team plan ($149/mo, 50 competitors, hourly snapshots). If team collaboration is your primary requirement and you don't need deep analysis features like severity classification, CSS selectors, or headless rendering, Tona's built-in approach may be a better fit.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. Tona does not offer dedicated job listing tracking.",
          },
          {
            question: "Can I switch from Tona to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Tona, set CSS selectors for specific page sections, and your first snapshot fires immediately. Setup takes about 5 minutes. You can run both in parallel during the transition to compare output quality.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Tona" source="compare-tona" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when ready.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Add the same URLs you&rsquo;d
            track in Tona and get actionable intelligence in minutes.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Tona Bottom CTA"
              eventProps={{ competitor: "Tona", page: "compare-kompwatch-vs-tona" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Tona?{" "}
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
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
