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
    "KompWatch vs Competely (2026) — AI Competitor Monitoring Compared",
  description:
    "KompWatch vs Competely: honest comparison of two AI-powered competitor tools. KompWatch Pro is $49/mo with 6-hour snapshots, headless rendering, and a free tier. Competely Starter is $39/mo with bi-weekly briefs and no free plan. See the full side-by-side.",
  keywords: [
    "KompWatch vs Competely",
    "Competely alternative",
    "Competely competitor monitoring",
    "Competely vs KompWatch",
    "Competely pricing",
    "Competely review",
    "AI competitor monitoring comparison",
    "competitor monitoring tools 2026",
    "competitive intelligence tools comparison",
    "affordable competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/kompwatch-vs-competely`,
  },
  openGraph: {
    title: "KompWatch vs Competely (2026) — AI Competitor Monitoring Compared",
    description:
      "Two AI-powered competitor tools compared honestly. Snapshot frequency, headless rendering, CSS selectors, and free tier — see which fits your team.",
    url: `${siteUrl}/compare/kompwatch-vs-competely`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Competely — AI Competitor Monitoring Compared",
    description:
      "KompWatch Pro: $49/mo, 6-hour snapshots, Playwright headless rendering, free tier. Competely Starter: $39/mo, bi-weekly briefs, no free plan. See the full breakdown.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  competely: CellValue;
  note?: string;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo Pro", competely: "$39/mo Starter" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly digest", competely: false },
  { feature: "Competitors at entry paid tier", kompwatch: "10 (Pro)", competely: "10 per project, 3 projects (Starter)" },
  { feature: "Self-serve signup", kompwatch: true, competely: true },
  { feature: "Snapshot / monitoring frequency", kompwatch: "Every 6 hours (Pro)", competely: "Bi-weekly briefs (Starter) / weekly (Pro)" },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered digests per change", competely: "AI competitive briefs (scheduled)" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, competely: false, note: "No per-change severity" },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", competely: "Not documented" },
  { feature: "CSS selector targeting per competitor", kompwatch: true, competely: false, note: "Project / competitor level only" },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", competely: "Pricing, features, messaging, marketing (report-level)" },
  { feature: "Pricing page tracking", kompwatch: true, competely: true },
  { feature: "Feature & product page tracking", kompwatch: true, competely: true },
  { feature: "Blog & content monitoring", kompwatch: true, competely: true },
  { feature: "Job listing tracking", kompwatch: true, competely: false },
  { feature: "Scheduled email digests", kompwatch: "Daily (Pro) / Weekly (Free)", competely: "Bi-weekly / weekly briefs" },
  { feature: "On-demand competitive analysis runs", kompwatch: false, competely: "3/mo (Starter) — SWOT-style report" },
  { feature: "Digest recipients", kompwatch: "Unlimited on Pro", competely: "Up to 10 (Starter) / 15 (Pro)" },
  { feature: "CSV / JSON export", kompwatch: true, competely: "CSV & PDF export" },
  { feature: "Battlecard export", kompwatch: "JSON export today; one-click HTML in development", competely: "PDF analysis export" },
  { feature: "Month-to-month billing", kompwatch: true, competely: true },
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
    title: "6-hour snapshots vs bi-weekly briefs",
    description:
      "Competely Starter delivers competitive briefs every 2 weeks. KompWatch Pro snapshots every 6 hours — so a competitor pricing change that drops Monday morning is in your inbox by Monday afternoon, not on the next bi-weekly brief two weeks later.",
  },
  {
    title: "Per-change AI digests vs scheduled reports",
    description:
      "Competely produces SWOT-style competitive analysis reports on a schedule. KompWatch generates a Claude-powered digest for each detected change, classifies the change type (pricing, features, messaging, jobs), and assigns severity — so you read what actually moved, not a periodic summary.",
  },
  {
    title: "Free tier — try before you pay",
    description:
      "Competely has no free plan; the entry point is $39/mo (Starter). KompWatch offers a free plan forever with 2 competitors and weekly AI digests — no credit card required. Add the same URLs and compare digest quality before committing.",
  },
];

export default function CompareKompWatchVsCompetelyPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "KompWatch vs Competely", path: "/compare/kompwatch-vs-competely" },
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
          KompWatch vs Competely{" "}
          <span className="text-brand-600">
            — 6-hour snapshots vs bi-weekly briefs
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Competely Starter is{" "}
          <strong className="text-gray-900">$39/mo for 3 projects</strong> with competitive
          briefs delivered every two weeks. KompWatch Pro is{" "}
          <strong className="text-gray-900">$49/mo for 10 competitors</strong> with{" "}
          <strong className="text-gray-900">6-hour snapshots</strong>,{" "}
          <strong className="text-gray-900">Claude-powered per-change AI digests</strong>,{" "}
          <strong className="text-gray-900">CSS selector targeting</strong>, and{" "}
          <strong className="text-gray-900">a free tier</strong> Competely doesn&rsquo;t offer.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compare Competely Hero CTA"
            eventProps={{ competitor: "Competely", page: "compare-kompwatch-vs-competely" }}
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
            Competely produces scheduled SWOT-style competitive briefs. KompWatch
            catches per-change movement in near real time.
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
              Pricing: similar entry, very different cadence
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
                <li>&#10003; Daily AI digests (Claude-powered, per change)</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Full Playwright headless rendering</li>
                <li>&#10003; CSS selector targeting per competitor</li>
                <li>&#10003; Job listing tracking</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Competely Starter
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $39<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Pro $59/mo &middot; Scale $99/mo
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; 3 projects, up to 10 competitors per project</li>
                <li>&middot; Bi-weekly competitive briefs</li>
                <li>&middot; 3 on-demand analysis runs / month</li>
                <li>&middot; No free plan</li>
                <li>&middot; No per-change severity classification</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Competely&rsquo;s strength is scheduled SWOT-style briefs across projects.
            KompWatch&rsquo;s strength is{" "}
            <strong className="text-gray-900">near real-time per-change detection</strong>{" "}
            with AI severity scoring — and a free tier so you can try before you pay.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Competely
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Competely wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Competely</th>
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
                      <ComparisonCell value={row.competely} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on publicly available information as of June 2026.
            Competely pricing and features sourced from competely.ai.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compare Competely Mid CTA"
            eventProps={{ competitor: "Competely", page: "compare-kompwatch-vs-competely" }}
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
                <li>&middot; You need to know about competitor moves <em>within hours</em>, not on a bi-weekly schedule</li>
                <li>&middot; You want one AI digest <em>per detected change</em>, with severity and change type</li>
                <li>&middot; You track React/SPA pricing pages that need headless browser rendering</li>
                <li>&middot; You want CSS selector targeting to ignore header/footer/cookie-banner noise</li>
                <li>&middot; Competitor hiring signals matter to your strategy</li>
                <li>&middot; You want to try before you pay (free plan, 2 competitors, weekly digest)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Competely if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You prefer scheduled SWOT-style competitive briefs over per-change alerts</li>
                <li>&middot; You need to run on-demand competitive analysis reports across multiple projects</li>
                <li>&middot; A bi-weekly or weekly cadence fits how your team consumes intel</li>
                <li>&middot; Project-based organization (3 projects on Starter) maps to your agency or multi-product structure</li>
                <li>&middot; You don&rsquo;t need CSS selectors, headless rendering, or job listing tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Competely"
        faqs={[
          {
            question: "What is the difference between KompWatch and Competely?",
            answer:
              "Both are AI-powered competitor tools at a similar price point, but they solve slightly different problems. Competely Starter ($39/mo) delivers SWOT-style competitive analysis reports and bi-weekly briefs across up to 3 projects with 10 competitors each. KompWatch Pro ($49/mo) snapshots up to 10 competitors every 6 hours and generates a Claude-powered digest for each detected change, with severity classification (Low/Medium/High/Critical), content zone tagging (Pricing/Features/Messaging/Jobs), Playwright headless rendering, CSS selector targeting, and job listing tracking. Competely is great for periodic deep-dive reports; KompWatch is built for near real-time per-change detection.",
          },
          {
            question: "How does KompWatch pricing compare to Competely?",
            answer:
              "Competely Starter is $39/mo (3 projects, 10 competitors per project, bi-weekly briefs, 3 analysis runs/mo), Pro is $59/mo (6 projects, weekly briefs), and Scale is $99/mo (10 projects). KompWatch starts free (2 competitors, weekly AI digest, no credit card) and Pro is $49/mo for 10 competitors with 6-hour snapshots and daily digests. Competely is $10/mo cheaper at the entry tier but has no free plan and no per-change alerts — you get scheduled briefs, not real-time change notifications.",
          },
          {
            question: "How often does Competely check for competitor changes vs KompWatch?",
            answer:
              "Competely Starter delivers competitive briefs every 2 weeks; Pro delivers weekly. KompWatch Pro snapshots competitor pages every 6 hours and emails a digest whenever a change is detected. If catching a pricing change or feature launch within hours matters to your team, KompWatch&rsquo;s 6-hour cadence is significantly faster than a bi-weekly brief.",
          },
          {
            question: "Does Competely have a free tier or free trial like KompWatch?",
            answer:
              "Based on publicly available information as of June 2026, Competely does not offer a free tier; the entry point is $39/mo (Starter). KompWatch has a free plan with 2 competitors and weekly AI digests — no credit card required. You can sign up for KompWatch free, add the same competitor URLs you&rsquo;d evaluate with Competely, and compare the output before paying for either tool.",
          },
          {
            question: "Does KompWatch render JavaScript-heavy pages better than Competely?",
            answer:
              "KompWatch uses full Playwright with headless Chromium to render JavaScript-heavy pages before snapshotting. React-built pricing pages, SPA feature lists, and dynamically loaded content are captured accurately. Competely&rsquo;s rendering approach is not publicly documented in detail on their pricing or product pages.",
          },
          {
            question: "Can I switch from Competely to KompWatch?",
            answer:
              "Yes. Sign up for KompWatch (free, no credit card), add the same competitor URLs you track in Competely projects, set CSS selectors to target specific page sections (pricing tables, feature lists, changelog pages), and your first snapshot fires immediately. Setup takes about 5 minutes. You can run both in parallel for a billing cycle and compare the per-change digests against Competely&rsquo;s bi-weekly briefs.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, PM hires signal new product lines, and sales hiring indicates expansion. Competely&rsquo;s public product pages do not document dedicated job listing tracking.",
          },
        ]}
      />

      <CompareEmailCapture competitor="Competely" source="compare-competely" />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try both. Compare the output.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors with AI digests &mdash;
            no credit card, no sales call. Add the same URLs you&rsquo;d track in Competely and
            see which cadence and report style works better for your team.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Competely Bottom CTA"
              eventProps={{ competitor: "Competely", page: "compare-kompwatch-vs-competely" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Competely?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare per-change digests vs bi-weekly briefs. &middot;{" "}
            <Link href="/compare" className="underline hover:text-gray-700">
              All comparisons
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
            <Link href="/compare/kompwatch-vs-rivalsense" className="text-sm text-gray-500 hover:text-gray-700">
              vs RivalSense
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
