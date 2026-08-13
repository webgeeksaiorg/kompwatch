import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SwitchHowToSchema } from "@/components/switch-howto-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Outgrown Visualping? Switch to AI Digests That Explain What Changed — KompWatch",
  description:
    "Visualping tells you a page looks different. KompWatch tells you what strategically changed and why it matters. AI summaries instead of screenshot diffs, CSS-selector targeting instead of alert fatigue, real Playwright rendering on React/Next.js SPAs. From $49/mo, 5-minute setup.",
  keywords: [
    "Visualping alternative",
    "switch from Visualping",
    "Visualping replacement",
    "Visualping migration",
    "Visualping vs KompWatch",
    "Visualping SPA problems",
    "Visualping empty div",
    "Visualping alert fatigue",
    "Visualping to competitive intelligence",
    "Visualping AI summaries",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/visualping`,
  },
  openGraph: {
    title: "Outgrown Visualping? Switch to KompWatch",
    description:
      "Visualping shows screenshot diffs. KompWatch generates AI summaries of what strategically changed. Set up in 5 minutes, from $49/mo, no sales call.",
    url: `${siteUrl}/switch/visualping`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outgrown Visualping? Time to Switch",
    description:
      "Raw diffs → AI insights. Alert fatigue → daily digests. Empty-div false positives on SPAs → real Playwright rendering. KompWatch, $49/mo.",
  },
};

// "Why teams outgrow Visualping" — replaces the acquisition timeline used on
// Semrush/Kompyte/Crayon/Klue pages. Visualping's story isn't corporate
// consolidation — it's product-market misfit for competitive intelligence.
const outgrowReasons = [
  {
    date: "Signal 1",
    title: "You're getting more noise than insight",
    detail:
      "Visualping fires on every visual change: cookie banners, ad rotations, chat widgets, layout shifts. You spend more time triaging false positives than reading actual competitive changes.",
  },
  {
    date: "Signal 2",
    title: "Screenshot diffs stopped being enough",
    detail:
      "Visualping shows you the before/after image. You still have to interpret it: is this a pricing change? A new feature? Just a homepage refresh? Every alert requires human interpretation before it becomes intelligence.",
  },
  {
    date: "Signal 3",
    risk: true,
    title: "Empty-div false positives on React/Next.js sites",
    detail:
      "Visualping's rendering pipeline struggles with modern SPAs. If your competitors run on React, Next.js, or Vue, you're getting either empty diffs or false 'change' alerts every time the JS hydration timing shifts. G2 and Twitter are full of this complaint.",
  },
];

const outgrowRisks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Alert fatigue kills the habit",
    description:
      "Visualping sends per-change emails. If you monitor 5 competitors, that's 5–20 alerts per day. Most teams stop reading them within a month.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "No AI interpretation layer",
    description:
      "Visualping is a change-detection engine, not a competitive-intelligence product. You still have to look at every diff and decide whether it matters. KompWatch's Claude-powered digests do that reading for you.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "General-purpose, not CI-purpose-built",
    description:
      "Visualping monitors any URL for anyone — job postings, government pages, product availability. That breadth means it lacks CI-specific features: competitor grouping, change classification (PRICING vs FEATURE vs CONTENT), severity scoring, and roll-up digests.",
  },
];

export default function SwitchVisualpingPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switch from Visualping", path: "/switch/visualping" }]} />
      <SwitchHowToSchema
        competitor="Visualping"
        pageSlug="visualping"
        steps={[
          {
            name: "Sign up free (30 seconds)",
            text: "No credit card, no sales call. Your free plan includes 2 competitors — enough to run KompWatch alongside Visualping during evaluation.",
          },
          {
            name: "Add your competitor URLs with CSS selectors",
            text: "Copy the URLs you monitored in Visualping. Set a CSS selector per page to focus on the section that matters — pricing tables, feature lists, changelogs — instead of the whole page. This is what eliminates the cookie-banner and ad-rotation noise Visualping fires on.",
          },
          {
            name: "Get AI digests — cancel Visualping when ready",
            text: "Claude-powered summaries arrive via email or Slack, aggregated as a daily digest instead of per-change alerts. Compare digest quality side-by-side for 2–4 weeks, then cancel Visualping when your renewal comes up.",
          },
        ]}
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

      {/* Signal banner — Visualping's SPA gap is the recurring complaint we see on Twitter/Reddit */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>The Visualping SPA gap:</strong> React/Next.js sites return empty diffs or false alerts.{" "}
        <Link href="#reasons" className="font-semibold underline hover:text-amber-700">
          See the 3 signs you&rsquo;ve outgrown Visualping &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
          For teams doing competitive intelligence
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Visualping tells you a page looks different.{" "}
          <span className="text-brand-600">KompWatch tells you what strategically changed.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Visualping is a great screenshot-diff tool. But if you&rsquo;re monitoring{" "}
          <strong className="text-gray-900">competitors</strong> — not job pages or product
          availability — you eventually hit the same three walls: alert fatigue, no AI
          interpretation, and empty-div false positives on React/Next.js sites. KompWatch is
          purpose-built for that job: AI digests, CSS-selector targeting, real Playwright rendering.
          From <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Visualping Hero CTA"
            eventProps={{ competitor: "Visualping", page: "switch-visualping" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — set up in 5 minutes
          </TrackedCTA>
          <Link
            href="#reasons"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            Why switch now? &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      {/* Amber urgency callout — reframes the "product-market misfit" argument */}
      <section className="border-y border-amber-200 bg-amber-50 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Why this matters
              </div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">
                Visualping is a change-detection tool. CI is a different job.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Visualping serves 1.5M+ users watching everything from{" "}
                <strong className="text-gray-900">
                  government notices to product restocks
                </strong>
                . That&rsquo;s a great general-purpose tool. But{" "}
                <strong className="text-gray-900">competitive intelligence</strong> needs the
                opposite: fewer, higher-signal alerts about competitor strategy — pricing,
                features, positioning. If you&rsquo;re wiring Visualping alerts into a{" "}
                <strong className="text-gray-900">competitor tracking spreadsheet</strong>,
                you&rsquo;ve outgrown the tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons — 3 signs you've outgrown Visualping */}
      <section id="reasons" className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            3 signs you&rsquo;ve outgrown Visualping
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            If any of these sound like your Monday morning, it&rsquo;s time to switch.
          </p>
          <div className="mt-10 space-y-0">
            {outgrowReasons.map((event, i) => (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Timeline line */}
                {i < outgrowReasons.length - 1 && (
                  <div className="absolute left-[15px] top-8 h-full w-px bg-gray-200" />
                )}
                {/* Timeline dot */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    event.risk
                      ? "bg-amber-100 text-amber-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {event.risk ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ) : (
                    <span className="text-xs font-semibold">{i + 1}</span>
                  )}
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-wide ${event.risk ? "text-amber-700" : "text-gray-500"}`}>
                    {event.date}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {event.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What "outgrowing" costs you */}
      <section id="risks" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What Visualping is missing for competitor monitoring
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            None of these are Visualping bugs — they&rsquo;re just outside its product scope.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {outgrowRisks.map((risk, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  {risk.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {risk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-side pricing / feature comparison */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Visualping vs. KompWatch for competitive intelligence
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Visualping pricing data from visualping.io (May 2026).
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Visualping (general-purpose)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                ~$14<span className="text-lg font-normal text-gray-500">/mo starter</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Free tier: 5 URLs, checks every 24h
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Screenshot diffs, visual comparison
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Browser extension for ad-hoc monitoring
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No AI change summaries
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No change classification (PRICING / FEATURE / CONTENT)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Per-change alerts, no digest roll-up
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Struggles with React/Next.js SPA rendering
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro (purpose-built for CI)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Free tier: 2 competitors, weekly AI digest
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI change summaries — plain-English &ldquo;what changed and why it matters&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Change classification: PRICING, FEATURE, CONTENT, JOB, TECH
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS-selector targeting — monitor only the pricing table, not the chat widget
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Real Playwright rendering — works on React/Next.js/Vue SPAs
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Daily digest roll-up — one email covers all competitors
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Slack + email delivery, cancel anytime
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            KompWatch costs more per month than Visualping&rsquo;s cheapest tier &mdash; because
            it&rsquo;s a different product. For competitor monitoring specifically,{" "}
            <strong className="text-gray-900">
              one KompWatch digest replaces 30&ndash;100 Visualping alerts per week
            </strong>
            .
          </p>
        </div>
      </section>

      {/* 3-step quick start */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Switch in 3 steps, under 5 minutes
          </h2>
          <div className="mt-12 space-y-8">
            <div id="step-1" className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Sign up free (30 seconds)
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  No credit card, no sales call. Your free plan includes 2 competitors — enough to
                  run KompWatch alongside Visualping during evaluation.
                </p>
              </div>
            </div>
            <div id="step-2" className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Add your competitor URLs with CSS selectors
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Copy the URLs you monitored in Visualping. Set a CSS selector per page to focus on
                  the section that matters — pricing tables, feature lists, changelogs — instead of
                  the whole page. This is what eliminates the cookie-banner and ad-rotation noise
                  Visualping fires on.
                </p>
              </div>
            </div>
            <div id="step-3" className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests — cancel Visualping when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive via email or Slack, aggregated as a daily digest
                  instead of per-change alerts. Compare digest quality side-by-side for 2&ndash;4
                  weeks, then cancel Visualping when your renewal comes up.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Visualping Steps CTA"
              eventProps={{ competitor: "Visualping", page: "switch-visualping" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Want the detailed walkthrough?{" "}
              <Link href="/faq/switching-from-visualping" className="underline hover:text-gray-700">
                See the full migration guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Social proof / urgency callout */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              You don&rsquo;t have to cancel Visualping to try KompWatch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Run both for a month. Compare the digest you get from KompWatch to the pile of
              screenshot diffs you get from Visualping. If KompWatch doesn&rsquo;t give you
              higher-signal competitive intelligence for the same competitors,{" "}
              <strong className="text-gray-900">just stay on Visualping</strong> — the free tier
              costs nothing.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Visualping Urgency CTA"
                eventProps={{ competitor: "Visualping", page: "switch-visualping" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Visualping
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Visualping"
        guideSlug="switching-from-visualping"
        guideLabel="Read the full Visualping → KompWatch migration guide"
        faqs={[
          {
            question: "Is Visualping bad? Why would I switch?",
            answer:
              "Visualping isn't bad — it's just built for a different job. Visualping is a general-purpose website change detector serving 1.5M+ users watching everything from government notices to product restocks. If you're using it specifically for competitor monitoring, you'll eventually hit alert fatigue (per-change emails), no AI interpretation (raw screenshot diffs), and rendering issues on React/Next.js sites. KompWatch is purpose-built for competitive intelligence: AI digests, change classification, CSS-selector targeting.",
          },
          {
            question: "Can I run KompWatch alongside Visualping to compare?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digest) costs nothing. Add your two most-tracked competitors, run both tools in parallel for 2–4 weeks, and compare digest quality side-by-side. If KompWatch doesn't surface higher-signal intelligence, stay on Visualping.",
          },
          {
            question: "Why does Visualping struggle with React and Next.js sites?",
            answer:
              "Visualping's rendering pipeline uses a simpler headless-browser setup that often doesn't wait for JavaScript hydration to complete on modern SPAs. This causes two failure modes: empty-div diffs (the page hasn't finished rendering when the screenshot is captured) or false 'change' alerts (hydration timing shifts between snapshots, causing pixel differences without any actual content change). KompWatch uses full Playwright with configurable wait-for conditions, so it renders React/Next.js/Vue sites the way a real user sees them.",
          },
          {
            question: "How does KompWatch reduce alert fatigue vs. Visualping?",
            answer:
              "Three ways. First, CSS-selector targeting: you monitor only the section that matters (e.g., .pricing-table) instead of the full page, so cookie banners and chat widgets don't trigger alerts. Second, severity scoring: changes are tagged LOW / MEDIUM / HIGH / CRITICAL, so you can filter noise. Third, digest roll-up: instead of per-change emails, you get one daily digest that summarizes everything across all competitors. If you were getting 20 Visualping emails per day, expect 1 KompWatch digest.",
          },
          {
            question: "Does KompWatch have a browser extension like Visualping?",
            answer:
              "No — this is one area where Visualping has KompWatch beat. Visualping's browser extension is great for ad-hoc, one-off monitoring of arbitrary pages. KompWatch is a dedicated competitive-intelligence dashboard: you add competitors via the web app, and monitoring is scheduled by our cron system. If you need occasional non-competitor page monitoring (a job listing, a product restock), Visualping is a better fit for that specific use case.",
          },
          {
            question: "What's the price difference?",
            answer:
              "Visualping starts at roughly $14/mo for its mid-tier plan; KompWatch Pro is $49/mo. KompWatch costs more because it's a different product — you're paying for AI digests, CSS-selector targeting, Playwright SPA rendering, and change classification, not just diff detection. For competitor monitoring specifically, most teams find that one high-signal digest replaces 30–100 low-signal Visualping alerts per week, which pays for itself in triage time saved.",
          },
          {
            question: "How quickly can I be set up?",
            answer:
              "Under 5 minutes. Sign up (no credit card), paste your competitor URLs, set CSS selectors for the sections that matter, and your first snapshot runs immediately. Your first AI digest arrives within 24–48 hours (once we have a second snapshot to compare against). There's no sales call, no onboarding queue, no implementation phase.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Diffs are data.{" "}
            <span className="text-brand-600">KompWatch turns them into intelligence.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is purpose-built for competitor monitoring. Set up in 5 minutes,
            run it alongside Visualping, and see the difference on your next digest.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Visualping Bottom CTA"
              eventProps={{ competitor: "Visualping", page: "switch-visualping" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link href="/vs/visualping-alternative" className="underline hover:text-gray-700">
              7 Visualping alternatives ranked
            </Link>{" "}
            &middot;{" "}
            <Link href="/faq/switching-from-visualping" className="underline hover:text-gray-700">
              Full migration guide
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
            <Link href="/vs/visualping-alternative" className="text-sm text-gray-500 hover:text-gray-700">
              Visualping alternatives
            </Link>
            <Link href="/switch/kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Kompyte
            </Link>
            <Link href="/switch/klue" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Klue
            </Link>
            <Link href="/switch/crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Crayon
            </Link>
            <Link href="/switch/semrush" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Semrush
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
