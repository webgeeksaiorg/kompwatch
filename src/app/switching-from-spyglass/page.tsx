import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Switch from Spyglass to KompWatch",
  description:
    "Step-by-step guide to migrating your competitor monitoring from Spyglass to KompWatch in under 10 minutes.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up for KompWatch (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card required. The free plan tracks 2 competitors with a weekly digest — enough to run side-by-side against your Spyglass Tracker plan during evaluation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Copy your competitor URLs from Spyglass",
      text: "In Spyglass, open your tracked competitors and copy each URL you actively monitor. Spyglass Tracker caps at 5 competitors, so a copy/paste list takes 2 minutes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add URLs to KompWatch with CSS selectors",
      text: "Paste each URL and assign a CSS selector for the section that actually matters — e.g. .pricing-table, #features, main article, or #changelog. This is the biggest workflow upgrade over Spyglass: instead of monitoring an entire page, KompWatch watches only the region you care about.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Set severity thresholds and content zones",
      text: "In KompWatch settings, choose which severity levels (LOW / MEDIUM / HIGH) and content zones (Pricing, Features, Messaging, Hiring, Legal) you want in your digest. This filtering doesn't exist in Spyglass — every change lands in one weekly summary.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Connect Slack or email, then cancel Spyglass",
      text: "Pipe daily digests to your Slack channel or inbox. Once KompWatch is delivering the changes you'd want to act on, cancel your Spyglass subscription — month-to-month billing on both sides means no lock-in either way.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Switching from Spyglass to KompWatch — Migration Guide",
  description:
    "Moving off Spyglass? KompWatch tracks 10 competitors with daily AI digests for $49/mo — vs. Spyglass Tracker's $79/mo for 5 competitors on a weekly digest. Free tier available. Set up in under 10 minutes.",
  keywords: [
    "switching from Spyglass",
    "Spyglass alternative",
    "Spyglass migration",
    "Spyglass replacement",
    "replace Spyglass",
    "Spyglass to KompWatch",
    "Spyglass CI alternative",
    "spyglassci alternative",
    "cancel Spyglass",
    "Spyglass competitor monitoring migration",
  ],
  alternates: {
    canonical: `${siteUrl}/switching-from-spyglass`,
  },
  openGraph: {
    title: "Switching from Spyglass to KompWatch — Migration Guide",
    description:
      "Set up KompWatch in under 10 minutes. Track 2× more competitors, get daily digests instead of weekly, pay $30/mo less than Spyglass. No credit card required.",
    url: `${siteUrl}/switching-from-spyglass`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switching from Spyglass to KompWatch",
    description:
      "Spyglass Tracker: $79/mo, 5 competitors, weekly digest. KompWatch Pro: $49/mo, 10 competitors, daily digest — plus a free tier.",
  },
};

const migrationSteps = [
  {
    step: 1,
    title: "Sign up for KompWatch (free, 30 seconds)",
    description:
      "Create your account at kompwatch.com. No credit card, no sales call. The free plan tracks 2 competitors with a weekly digest so you can run KompWatch alongside Spyglass during evaluation.",
  },
  {
    step: 2,
    title: "Copy your competitor URLs from Spyglass",
    description:
      "Open Spyglass and copy the URLs you actively monitor — pricing pages, feature pages, changelogs, blogs. Spyglass Tracker caps at 5 competitors, so the export is a 2-minute copy/paste job.",
  },
  {
    step: 3,
    title: "Add URLs to KompWatch with CSS selectors",
    description:
      "Paste each URL and assign a CSS selector (e.g. .pricing-table, #features, #changelog) for the section that matters. This is the biggest workflow upgrade over Spyglass — instead of monitoring an entire page and getting cookie-banner noise, KompWatch watches only the region you care about.",
  },
  {
    step: 4,
    title: "Set severity thresholds and content zones",
    description:
      "In KompWatch settings, filter your digest by severity (LOW / MEDIUM / HIGH) and content zone (Pricing, Features, Messaging, Hiring, Legal). Spyglass sends every change to one weekly digest — KompWatch lets your team focus on what actually needs action this week.",
  },
  {
    step: 5,
    title: "Connect Slack or email, then cancel Spyglass",
    description:
      "Pipe daily digests to your #competitive-intel Slack channel or inbox. Once KompWatch is surfacing the same signals with more granularity, cancel Spyglass — both tools are month-to-month, so there's no annual lock-in either way.",
  },
];

export default function SwitchingFromSpyglassPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switching from Spyglass", path: "/switching-from-spyglass" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
          Migration guide
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Switching from Spyglass?{" "}
          <span className="text-brand-600">Set up KompWatch in 10 minutes.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Spyglass Tracker gives you 5 competitors on a weekly digest for{" "}
          <strong className="text-gray-900">$79/mo</strong>. KompWatch Pro tracks{" "}
          <strong className="text-gray-900">10 competitors on a daily digest for $49/mo</strong> —
          plus a free tier so you can run both side-by-side before you cancel.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switching Page Hero CTA Click"
            eventProps={{ competitor: "Spyglass", page: "switching" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#migration-steps"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See migration steps &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever. No sales call. Cancel Spyglass when you&rsquo;re ready.
        </p>
      </section>

      {/* Why teams are switching */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why indie SaaS founders switch from Spyglass in 2026
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">2× competitors, 38% less cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Spyglass Tracker is $79/mo for 5 competitors. KompWatch Pro is $49/mo for 10
                competitors and a daily digest instead of weekly — the same monthly cadence, twice
                the coverage, month-to-month billing.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Selector precision</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Spyglass monitors whole pages. KompWatch lets you pin a CSS selector per competitor
                — .pricing-table, #features, #changelog — so nav updates, cookie banners, and
                marketing hero swaps never wake your team up.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Severity + zone filtering</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every KompWatch change is classified LOW / MEDIUM / HIGH and tagged by content zone
                (Pricing, Features, Messaging, Hiring, Legal). Filter your digest to what your team
                actually acts on. Spyglass sends one undifferentiated weekly summary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section id="migration-steps" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How to switch — 5 steps, under 10 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Spyglass doesn&rsquo;t expose a public export API, but with only 5 tracked competitors
            on Tracker, copy/paste is the fastest path anyway.
          </p>
          <div className="mt-12 space-y-8">
            {migrationSteps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you keep / what changes */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What stays the same, what gets better
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">Same or better in KompWatch</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Self-serve signup, month-to-month billing, cancel anytime
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Pricing page, feature page, and blog monitoring
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI-generated change summaries (better — Claude-powered with strategic context)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Daily digest cadence (Spyglass is weekly-only)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selector targeting (kills cookie-banner and nav noise Spyglass surfaces)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Job listing tracking and hiring signals
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Free plan (2 competitors) — Spyglass is paid-only
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">Where Spyglass may still fit</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  If you only need 5 competitors and prefer a weekly cadence, both tools work
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Existing Spyglass workflows your team is already deeply set up in
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Any Spyglass-specific integrations we haven&rsquo;t shipped yet
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Spyglass is a new entrant in the space — details based on their publicly available
                pricing as of May 2026. If Spyglass has shipped features not listed here, tell us
                and we&rsquo;ll update this page honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost / plan comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The plan math
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Pricing from spyglassci.com and kompwatch.com as of May 2026.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Spyglass Tracker
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $79<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$948/yr — month-to-month</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· 5 competitors tracked</li>
                <li>· Weekly digest</li>
                <li>· AI change summaries</li>
                <li>· No free tier</li>
                <li>· Whole-page monitoring</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$588/yr &mdash; cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked (2×)</li>
                <li>✓ Daily digest (7×)</li>
                <li>✓ Claude-powered summaries + severity</li>
                <li>✓ Free plan (2 competitors, no card)</li>
                <li>✓ CSS selector precision monitoring</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            That&rsquo;s{" "}
            <strong className="text-gray-900">
              $360/yr saved and 2× the competitor coverage
            </strong>{" "}
            — with a daily digest cadence instead of weekly.
          </p>
        </div>
      </section>

      {/* Run both in parallel */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              On Spyglass Tracker today? Run both for a month.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan (2 competitors, weekly digest) lets you track your two
              highest-priority competitors alongside Spyglass. Compare rendering accuracy, alert
              relevance, and digest quality side-by-side before you cancel. Zero risk, zero cost,
              zero sales calls.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switching Page Parallel CTA Click"
                eventProps={{ competitor: "Spyglass", page: "switching" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free alongside Spyglass
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Spyglass"
        faqs={[
          {
            question: "Can I import my competitors from Spyglass?",
            answer:
              "There's no direct import — Spyglass doesn't expose a public export API. But since Tracker caps at 5 competitors, adding them to KompWatch is a 2-minute copy/paste job: paste the URL, set a CSS selector, done. Most teams are fully set up within 10 minutes.",
          },
          {
            question: "How does KompWatch pricing compare to Spyglass?",
            answer:
              "Spyglass Tracker is $79/mo for 5 competitors with a weekly digest. KompWatch Pro is $49/mo for 10 competitors with a daily digest — 2× the competitor coverage and 7× the digest cadence for $30 less per month. KompWatch also has a free tier (2 competitors, weekly digest) with no credit card required; Spyglass is paid-only.",
          },
          {
            question: "Is Spyglass being acquired or shutting down?",
            answer:
              "No — as of May 2026, Spyglass (spyglassci.com) is an independent new entrant in the competitor monitoring space, targeting indie SaaS founders. This page isn't about vendor risk; it's about workflow fit. If you want daily digests, more competitors, severity scoring, and CSS-selector precision, KompWatch is the upgrade. If Spyglass Tracker's 5 competitors + weekly cadence covers your needs, both tools are legitimate choices.",
          },
          {
            question: "Does KompWatch fix the whole-page monitoring noise problem?",
            answer:
              "Yes — that's the core workflow difference. Spyglass monitors entire pages, which means every cookie-banner update, nav redesign, or marketing hero swap becomes a change event. KompWatch lets you assign a CSS selector per competitor (e.g. .pricing-table, #features, #changelog) so you only get alerts on the section you actually care about. The AI digest then summarizes what changed and why it matters for competitive positioning.",
          },
          {
            question: "Can I run KompWatch and Spyglass at the same time?",
            answer:
              "Yes. KompWatch's free tier (2 competitors, weekly digest, no credit card) lets you run both in parallel with zero cost. Pick your two highest-priority competitors, add them in both tools, and compare digest quality side-by-side for 30 days. Both Spyglass and KompWatch are month-to-month, so there's no lock-in penalty on either side while you evaluate.",
          },
          {
            question: "What if I outgrow KompWatch Pro?",
            answer:
              "KompWatch Team is $149/mo for 50 competitors, hourly snapshots, real-time alerts, shared workspace, and API access. That's the plan for growing teams that need multiple people looking at competitive intel or want to pipe monitoring data into their own systems. You can upgrade from Pro to Team from within the dashboard — no sales call.",
          },
          {
            question: "Does KompWatch integrate with Slack?",
            answer:
              "Yes. Every plan (including Free) supports Slack digest delivery — pipe daily or weekly digests to your #competitive-intel channel. Team plans also support webhooks so you can push change events into your own systems (CRM, war-room dashboards, PagerDuty, etc.).",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to switch?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Set up KompWatch in under 10 minutes. Track 2× the competitors, get daily digests
            instead of weekly, save $30/mo. No credit card required.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switching Page Bottom CTA Click"
              eventProps={{ competitor: "Spyglass", page: "switching" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need help setting up?{" "}
            <a href="mailto:support@kompwatch.com" className="underline hover:text-gray-700">
              Email us your competitor list
            </a>{" "}
            and we&rsquo;ll configure your selectors.
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
            <Link href="/compare/kompwatch-vs-spyglass" className="text-sm text-gray-500 hover:text-gray-700">
              vs Spyglass
            </Link>
            <Link href="/switching-from-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Crayon
            </Link>
            <Link href="/switching-from-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Kompyte
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
