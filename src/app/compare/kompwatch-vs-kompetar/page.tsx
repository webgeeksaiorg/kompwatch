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
    "KompWatch vs Kompetar (2026) — Same Price, AI Digests + Free Tier",
  description:
    "KompWatch vs Kompetar: both $49/mo, but KompWatch adds Claude-powered AI digests, severity classification, CSS selector targeting, headless Playwright rendering, and a free tier. Honest comparison.",
  keywords: [
    "KompWatch vs Kompetar",
    "Kompetar alternative",
    "Kompetar competitor monitoring",
    "Kompetar vs KompWatch",
    "Kompetar review",
    "Kompetar pricing",
    "affordable competitor monitoring",
    "Crayon Klue cheaper alternative",
    "AI competitor monitoring comparison",
    "competitive intelligence tools 2026",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-kompetar`,
  },
  openGraph: {
    title: "KompWatch vs Kompetar (2026) — Same Price, AI Digests + Free Tier",
    description:
      "Both $49/mo. KompWatch adds Claude-powered AI digests, severity classification, headless rendering, and a free tier Kompetar doesn't offer.",
    url: `${siteUrl}/compare/kompwatch-vs-kompetar`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Kompetar — Competitor Monitoring Compared",
    description:
      "Same $49/mo price point. KompWatch ships Claude-powered AI digests, severity classification, CSS selector targeting, and a free tier. See the breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  kompetar: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", kompetar: "$49/mo" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", kompetar: false },
  { feature: "Self-serve signup", kompwatch: true, kompetar: true },
  { feature: "Month-to-month billing", kompwatch: true, kompetar: true, note: "Both avoid annual contracts" },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests", kompetar: false, note: "Kompetar sends change alerts, not AI summaries" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, kompetar: false },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", kompetar: false },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", kompetar: "Unknown", note: "Not publicly documented" },
  { feature: "CSS selector targeting", kompwatch: true, kompetar: false, note: "Monitor specific page sections" },
  { feature: "Pricing page tracking", kompwatch: true, kompetar: true },
  { feature: "Feature & product page tracking", kompwatch: true, kompetar: true },
  { feature: "Blog & content monitoring", kompwatch: true, kompetar: true },
  { feature: "Job listing tracking", kompwatch: true, kompetar: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", kompetar: "Change notifications" },
  { feature: "Time to first insight", kompwatch: "< 2 minutes", kompetar: "Minutes (self-serve)" },
  { feature: "Team plan with 50+ competitors", kompwatch: "$149/mo (50 competitors)", kompetar: "Not publicly listed" },
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
    title: "Same price, more capability",
    description:
      "Kompetar and KompWatch Pro both land at $49/mo with month-to-month billing — no annual contract, no sales process. For the same monthly spend, KompWatch ships Claude-powered AI digests, severity classification, CSS selector targeting, and Playwright headless rendering for React/SPA pages.",
  },
  {
    title: "Free tier to try before you buy",
    description:
      "Kompetar requires a paid plan from day one. KompWatch has a free tier — 2 competitors with weekly AI digests, no credit card required — so you can validate output quality on your actual competitor URLs before paying. If KompWatch fits, upgrade. If not, you've spent nothing.",
  },
  {
    title: "AI digests, not just change alerts",
    description:
      "Kompetar notifies you when a page changes. KompWatch goes further — Claude reads the diff, classifies the change type (pricing, features, messaging, jobs), assigns severity (Low/Med/High/Critical), and writes a digest your team can scan in 30 seconds. Less noise, faster decisions.",
  },
];

export default function CompareKompWatchVsKompetarPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Kompetar", path: "/compare/kompwatch-vs-kompetar" },
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
          KompWatch vs Kompetar{" "}
          <span className="text-brand-600">
            — same $49/mo, plus AI digests &amp; a free tier
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Both Kompetar and KompWatch Pro sit at{" "}
          <strong className="text-gray-900">$49/mo with month-to-month billing</strong> — no
          annual contract, no sales process. For the same monthly spend, KompWatch adds{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong> with severity
          classification, <strong className="text-gray-900">CSS selector targeting</strong>,{" "}
          <strong className="text-gray-900">Playwright headless rendering</strong>, and a{" "}
          <strong className="text-gray-900">free tier</strong> to try before you buy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Kompetar Hero CTA"
            eventProps={{ competitor: "Kompetar", page: "compare-kompwatch-vs-kompetar" }}
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
            Where KompWatch wins at the same price point
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Both tools target teams who want Crayon/Klue capability without enterprise
            pricing. KompWatch ships more for the same monthly spend.
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
              Pricing: matched at $49/mo, but KompWatch starts free
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
                Kompetar
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Monthly billing &middot; no contract</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Self-serve signup</li>
                <li>&middot; Competitor website monitoring</li>
                <li>&middot; Pricing &amp; feature page tracking</li>
                <li>&middot; Change notifications</li>
                <li>&middot; No free tier</li>
                <li>&middot; No AI-generated digests</li>
                <li>&middot; No severity classification</li>
                <li>&middot; No CSS selector targeting</li>
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
              Feature-by-feature: KompWatch vs Kompetar
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Kompetar matches, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Kompetar</th>
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
                      <ComparisonCell value={row.kompetar} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Kompetar features may have changed; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Kompetar Mid CTA"
            eventProps={{ competitor: "Kompetar", page: "compare-kompwatch-vs-kompetar" }}
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
                <li>&middot; You want to validate output quality on a free tier before paying</li>
                <li>&middot; AI-generated digests beat raw change alerts for your workflow</li>
                <li>&middot; You need severity classification to prioritize what matters</li>
                <li>&middot; You track React/SPA pages that need full headless rendering</li>
                <li>&middot; CSS selector targeting matters — you want to monitor specific sections</li>
                <li>&middot; Competitor hiring signals (job listings) are part of your strategy</li>
                <li>&middot; You may grow into a 50-competitor Team plan ($149/mo)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Kompetar if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You already use Kompetar and the current workflow fits your team</li>
                <li>&middot; Raw change notifications (vs AI digests) are what you prefer</li>
                <li>&middot; You don&rsquo;t need severity classification or content zones</li>
                <li>&middot; You don&rsquo;t monitor React/SPA pages that need headless rendering</li>
                <li>&middot; CSS selector targeting and job tracking aren&rsquo;t part of your workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Kompetar"
        faqs={[
          {
            question: "What is the difference between KompWatch and Kompetar?",
            answer:
              "Kompetar and KompWatch Pro are both $49/mo competitor monitoring tools with month-to-month billing and no sales process. The difference is what you get for the same price: KompWatch ships Claude-powered AI digests with severity classification (Low/Med/High/Critical), CSS selector targeting for specific page sections, Playwright headless rendering for React/SPA pages, content zone classification (pricing/features/messaging/jobs), job listing tracking, and a free tier (2 competitors, weekly digest). Kompetar focuses on change notifications without AI summarization.",
          },
          {
            question: "How does KompWatch pricing compare to Kompetar?",
            answer:
              "Both tools sit at $49/mo with monthly billing and no annual contract. KompWatch also has a free tier (2 competitors, weekly AI digest, no credit card) that Kompetar does not offer. KompWatch Team ($149/mo) adds 50 competitors with hourly snapshots for teams that outgrow Pro — Kompetar doesn't publicly list a comparable scaled-up plan.",
          },
          {
            question: "Does Kompetar offer AI-powered digests like KompWatch?",
            answer:
              "Based on publicly available information, Kompetar focuses on change notifications when competitor pages update. KompWatch uses Claude to read each diff, classify the change type (pricing, features, messaging, jobs), assign severity (Low/Medium/High/Critical), and generate a written digest your team can scan in 30 seconds — so you spend less time triaging noise.",
          },
          {
            question: "Can I try KompWatch for free before switching from Kompetar?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and a weekly AI digest — no credit card required. You can run both tools in parallel: add the same competitor URLs to KompWatch and compare the output quality against your current Kompetar alerts. Setup takes under 2 minutes.",
          },
          {
            question: "Does Kompetar have headless browser rendering for React or SPA sites?",
            answer:
              "Kompetar's rendering stack is not publicly documented. KompWatch uses full Playwright with headless Chromium, which renders React, Vue, Angular, and other SPA-built pages completely before snapshotting — ensuring dynamic pricing pages, feature lists, and lazy-loaded content are captured accurately.",
          },
          {
            question: "Does KompWatch let me target specific sections of a competitor page?",
            answer:
              "Yes. Every competitor in KompWatch can have a CSS selector that scopes monitoring to a specific section — for example, only the pricing table, only the hero headline, or only the feature grid. This dramatically reduces false-positive change alerts from header/footer noise. Kompetar does not publicly document CSS selector support.",
          },
          {
            question: "Why would I switch from Kompetar to KompWatch at the same price?",
            answer:
              "Same monthly spend, more capability: AI digests instead of raw change alerts, severity classification to prioritize what matters, CSS selectors to cut noise, headless rendering for React/SPA pages, job listing tracking for hiring signals, and a free tier so your team can validate output quality on your actual competitor URLs before you commit.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Kompetar" source="compare-kompetar" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Same price. More signal. Start free.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with Claude-powered AI
            digests &mdash; no credit card, no sales call. Get more capability than
            Kompetar at the same Pro price when you&rsquo;re ready to scale.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Kompetar Bottom CTA"
              eventProps={{ competitor: "Kompetar", page: "compare-kompwatch-vs-kompetar" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Using Kompetar?{" "}
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
            <Link href="/compare/kompwatch-vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/compare/kompwatch-vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
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
