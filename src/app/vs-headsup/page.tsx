import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Headsup.bot Alternative — KompWatch vs Headsup.bot (Honest Comparison)",
  description:
    "Looking for a Headsup.bot alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI-generated digests — not just raw diff alerts. Starts at $49/mo.",
  keywords: [
    "Headsup.bot alternative",
    "Headsup.bot vs KompWatch",
    "Headsup.bot competitor",
    "Headsup.bot pricing",
    "competitor monitoring tool",
    "competitive intelligence software",
    "AI competitor change summaries",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-headsup`,
  },
  openGraph: {
    title: "KompWatch vs Headsup.bot — AI Digests, Not Raw Diff Alerts",
    description:
      "Honest side-by-side: KompWatch ($49/mo, AI-written change summaries) vs Headsup.bot (raw diff alerts). See feature, pricing, and workflow comparison.",
    url: `${siteUrl}/vs-headsup`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Headsup.bot — Honest Comparison",
    description:
      "Headsup.bot pings you when a page changes. KompWatch tells you what changed, why it matters, and classifies severity. See the full comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  headsup: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", headsup: "Free / paid tiers" },
  { feature: "Free plan competitors", kompwatch: "2 competitors", headsup: "5 competitors" },
  { feature: "Self-serve signup", kompwatch: true, headsup: true },
  { feature: "No sales call required", kompwatch: true, headsup: true },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered analysis", headsup: "Basic diff alerts" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, headsup: false },
  { feature: "Headless browser (renders React/SPAs)", kompwatch: "Full Playwright", headsup: "Limited" },
  { feature: "CSS selector targeting (per-section)", kompwatch: true, headsup: false },
  { feature: "Content zone classification (pricing/features/messaging)", kompwatch: true, headsup: false },
  { feature: "Pricing page tracking", kompwatch: true, headsup: true },
  { feature: "Feature & product page tracking", kompwatch: true, headsup: true },
  { feature: "Blog & content monitoring", kompwatch: true, headsup: true },
  { feature: "Job listing tracking", kompwatch: true, headsup: false },
  { feature: "Email digests", kompwatch: "Daily (Pro) / Weekly (Free)", headsup: "Alert-based" },
  { feature: "Slack / webhook alerts", kompwatch: true, headsup: true },
  { feature: "Battlecard export", kompwatch: "One-click HTML", headsup: false },
  { feature: "Cancel anytime", kompwatch: true, headsup: true },
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

export default function VsHeadsupPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Headsup.bot", path: "/vs-headsup" }]} />
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
            <Link href="/pricing?from=headsup" className="text-sm text-gray-600 hover:text-gray-900">
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
          Headsup.bot alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Headsup.bot{" "}
          <span className="text-brand-600">— AI digests, not raw diff alerts</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Headsup.bot pings you when a competitor page changes. KompWatch tells you{" "}
          <strong className="text-gray-900">what</strong> changed,{" "}
          <strong className="text-gray-900">why it matters</strong>, and classifies severity —
          using Claude-powered summaries, headless Playwright rendering, and CSS selector
          targeting so you stop drowning in low-signal alerts.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Headsup.bot" }}
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
          No credit card. Free plan forever. Cancel anytime.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Both have free tiers — the question is what you get when you pay
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data as of May 2026.
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
                <li>✓ Daily AI digests (Claude-written)</li>
                <li>✓ Severity classification + content zones</li>
                <li>✓ CSS selector targeting + Playwright</li>
                <li>✓ Job listing tracking</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Headsup.bot (paid)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                Varies
              </div>
              <div className="mt-1 text-sm text-gray-500">Public tiers + custom</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Raw change-detected alerts</li>
                <li>· Limited JS rendering</li>
                <li>· No severity classification</li>
                <li>· No content zone labels</li>
                <li>· No job listing tracking</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Free tier difference: Headsup.bot allows{" "}
            <strong className="text-gray-900">5 competitors</strong> on free; KompWatch allows{" "}
            <strong className="text-gray-900">2 competitors</strong> on free but ships{" "}
            <strong className="text-gray-900">AI-written summaries</strong> instead of raw diffs.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Headsup.bot
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Headsup.bot wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Headsup.bot</th>
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
                      <ComparisonCell value={row.headsup} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of May 2026. Headsup.bot pricing
            tiers vary; verify on their site for current details.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Headsup.bot" }}
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
                <li>· Tired of raw diff alerts and want AI-written summaries that explain <em>what</em> changed and <em>why it matters</em></li>
                <li>· Tracking React/SPA-built pricing pages that lightweight scrapers miss</li>
                <li>· Wanting to filter your digest to only Pricing or Features changes (content zone classification)</li>
                <li>· Tracking competitor hiring signals (job listing changes)</li>
                <li>· Building a sales-enablement battlecard you can export with one click</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Headsup.bot if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Wanting the simplest possible setup with a bot-driven onboarding flow</li>
                <li>· Only needing a raw alert when a specific URL changes (no AI summary needed)</li>
                <li>· Tracking up to 5 lightweight, mostly-static pages on the free tier</li>
                <li>· Happy with basic diff alerts and don&rsquo;t need severity classification</li>
                <li>· Not tracking React/SPA-heavy pages where headless rendering matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD FAQPage schema */}
      <ComparisonFAQ
        competitor="Headsup.bot"
        faqs={[
          {
            question: "What is the difference between KompWatch and Headsup.bot?",
            answer:
              "Both monitor competitor websites and alert you to changes. Headsup.bot sends raw diff-based alerts when a page changes. KompWatch generates AI-written change summaries (Claude-powered) that explain what changed, why it might matter, and classify changes by severity (Low / Medium / High / Critical). KompWatch also uses full Playwright headless rendering for React/SPA pages, CSS selector targeting to ignore header/footer churn, and content zone classification (pricing / features / messaging / social proof / nav). Headsup.bot is lighter and simpler; KompWatch is built for teams that need to act on changes, not just be notified of them.",
          },
          {
            question: "How much does Headsup.bot cost vs KompWatch?",
            answer:
              "Headsup.bot offers a free tier (around 5 competitors) and paid tiers that vary — verify on their site for current pricing. KompWatch offers a Free plan (2 competitors, weekly digest), Pro at $49/mo (10 competitors, daily AI digest), and Team at $149/mo (50 competitors, hourly snapshots, Slack delivery). Headsup.bot's free tier allows more competitors; KompWatch's paid tiers include AI summaries, severity classification, and job listing tracking that Headsup.bot does not.",
          },
          {
            question: "Does Headsup.bot use headless browser rendering?",
            answer:
              "Headsup.bot uses lightweight HTTP-based change detection, which means it can miss content rendered by JavaScript on React, Vue, or SPA-based pricing and feature pages. KompWatch uses full Playwright headless Chromium to render JavaScript-heavy pages before snapshotting, so SPA-built pricing pages, dynamic feature lists, and JS-gated content are captured accurately.",
          },
          {
            question: "Can I import my Headsup.bot competitors into KompWatch?",
            answer:
              "There is no direct import from Headsup.bot today, but setup takes about 5 minutes: add the same competitor URLs, set CSS selectors to watch specific page sections (e.g. .pricing-table, #features), and connect Slack if your team routes alerts to a channel. Your first snapshot kicks off within seconds. KompWatch does not import historical alert data — monitoring history starts fresh from when you add a competitor.",
          },
          {
            question: "Does KompWatch have a free plan like Headsup.bot?",
            answer:
              "Yes. KompWatch's Free plan tracks 2 competitors with a weekly AI digest — no credit card required. Headsup.bot's free tier allows more competitors (around 5) but only ships raw diff alerts. If you want AI-written change summaries on a free plan, KompWatch's free tier is the closer fit. If you want the maximum number of free competitors with basic alerting, Headsup.bot's free tier is broader.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listings to surface hiring patterns — a burst of infrastructure engineers often precedes a platform launch, sales hiring signals expansion plans, and PMM hires often precede pricing or positioning changes. Headsup.bot does not offer job listing tracking.",
          },
          {
            question: "Can I run KompWatch and Headsup.bot in parallel to compare?",
            answer:
              "Yes — and we recommend it. KompWatch's free tier (2 competitors, no credit card) lets you evaluate side-by-side before committing. Run the same competitor URLs in both tools for 2–4 weeks and compare alert volume, rendering accuracy on JS-heavy pages, and whether AI-generated summaries give your team more actionable context than raw diffs.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try KompWatch free
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need more.
            AI-written digests, severity classification, headless rendering. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Headsup.bot" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Headsup.bot?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare alert volume vs digest quality.
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
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
            </Link>
            <Link href="/vs-visualping" className="text-sm text-gray-500 hover:text-gray-700">
              vs Visualping
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
