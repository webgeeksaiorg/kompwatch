import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SwitchHowToSchema } from "@/components/switch-howto-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Same $49/mo as Kompetar — Switch to KompWatch for AI Digests + a Real Free Tier",
  description:
    "Kompetar and KompWatch share the same $49/mo price point. The difference: KompWatch adds Claude-powered AI digests, severity classification, a permanent 2-competitor free tier, and CSS-selector targeting. If you're comparing peer SMB competitor monitors, here's the honest side-by-side.",
  keywords: [
    "Kompetar alternative",
    "switch from Kompetar",
    "Kompetar replacement",
    "Kompetar migration",
    "Kompetar vs KompWatch",
    "Kompetar AI digest",
    "Kompetar free tier",
    "Kompetar review",
    "competitor monitoring $49/mo",
    "Kompetar vs alternatives",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/kompetar`,
  },
  openGraph: {
    title: "Same $49/mo as Kompetar — Switch to KompWatch",
    description:
      "Peer pricing, more capability: AI digests instead of raw alerts, severity classification, and a real free tier. Set up in 5 minutes, no sales call.",
    url: `${siteUrl}/switch/kompetar`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same $49/mo as Kompetar — Time to Switch?",
    description:
      "Raw change alerts → Claude AI digests. No free tier → 2 competitors free forever. CSS-selector targeting kills page-wide noise. $49/mo.",
  },
};

// "Why teams outgrow Kompetar" — peer-tier tools compete on capability,
// not on acquisition-risk. This mirrors the visualping page's outgrowReasons
// pattern (not the acquisition-timeline used on crayon/klue/kompyte/semrush).
const outgrowReasons = [
  {
    date: "Signal 1",
    title: "You're reading raw change alerts, not summaries",
    detail:
      "Kompetar tells you a page changed and gives you a diff. You still have to open every alert, read the before/after, and decide whether it's a pricing move, a feature launch, or a homepage refresh. Every alert is a triage task.",
  },
  {
    date: "Signal 2",
    title: "There's no free tier to run alongside another tool",
    detail:
      "Kompetar's entry price is $49/mo — same as KompWatch Pro — but there's no free plan to trial competitor monitoring alongside an existing tool. If you want to A/B a peer alternative before committing, you're paying twice during evaluation.",
  },
  {
    date: "Signal 3",
    risk: true,
    title: "No severity classification means every alert reads the same",
    detail:
      "Without a Low / Medium / High / Critical tag, your inbox treats a pricing-page change the same as a footer copy tweak. Teams stop opening the alerts within 2–3 weeks. This is the primary activation-failure mode for peer-tier CI tools.",
  },
];

const outgrowRisks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "No AI interpretation layer",
    description:
      "Kompetar delivers change alerts. KompWatch delivers plain-English summaries — Claude reads the diff and tells you what changed, in which zone (pricing / features / messaging / jobs), and how important it is.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "No free tier — no parallel-run option",
    description:
      "Every alternative in this tier ($49/mo) that wins the peer bake-off does so because you tried it alongside your existing tool. Kompetar has no permanent free plan. KompWatch has 2 competitors free forever.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same price, less signal",
    description:
      "Paying $49/mo for raw change alerts vs. paying $49/mo for classified, severity-scored, AI-summarized digests is the same line item on your credit card statement. The differentiator is what lands in your inbox on Monday morning.",
  },
];

export default function SwitchKompetarPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Switch", path: "/switch" },
          { name: "Switch from Kompetar", path: "/switch/kompetar" },
        ]}
      />
      <SwitchHowToSchema
        competitor="Kompetar"
        pageSlug="kompetar"
        steps={[
          {
            name: "Sign up free (30 seconds)",
            text: "No credit card, no sales call. Your free plan includes 2 competitors — enough to run KompWatch alongside Kompetar during evaluation. Kompetar has no free tier, so this is the only way to A/B the two.",
          },
          {
            name: "Add your competitor URLs with CSS selectors",
            text: "Copy the URLs you monitored in Kompetar. Set a CSS selector per page to focus on the section that matters — pricing tables, feature lists, changelogs — instead of the whole page. This is what turns page-wide noise into a targeted change stream.",
          },
          {
            name: "Get AI digests — cancel Kompetar when ready",
            text: "Claude-powered summaries arrive via email or Slack, aggregated as a daily digest with severity tags (Low / Medium / High / Critical) and content-zone classification (pricing / features / messaging / jobs). Compare digest quality side-by-side for 2–4 weeks, then cancel Kompetar when you're convinced.",
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

      {/* Signal banner — peer-tier price parity is the headline framing */}
      <div className="border-b border-brand-200 bg-brand-50 px-6 py-3 text-center text-sm text-brand-900">
        <strong>Same $49/mo tier as KompWatch.</strong> The difference is what your Monday-morning digest actually says.{" "}
        <Link href="#reasons" className="font-semibold underline hover:text-brand-700">
          See the 3 signs it&rsquo;s time to switch &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
          Peer-tier competitor monitoring
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Same $49/mo as Kompetar.{" "}
          <span className="text-brand-600">KompWatch adds AI, severity, and a real free tier.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kompetar is a solid change-detection tool at the same{" "}
          <strong className="text-gray-900">$49/mo</strong> price point as KompWatch Pro. But if
          you&rsquo;re triaging raw diff alerts every day, or wanted to trial a peer alternative
          without doubling your CI spend, you&rsquo;ve hit Kompetar&rsquo;s two ceilings:{" "}
          <strong className="text-gray-900">no AI summaries</strong> and{" "}
          <strong className="text-gray-900">no free tier</strong>. KompWatch fixes both — same
          price, higher-signal digests, 2 competitors free forever.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Kompetar Hero CTA"
            eventProps={{ competitor: "Kompetar", page: "switch-kompetar" }}
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

      {/* Peer-tier framing callout */}
      <section className="border-y border-brand-200 bg-brand-50/60 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Why this matters
              </div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">
                Peer-tier tools compete on capability, not on price.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Enterprise CI (Crayon, Klue) competes on{" "}
                <strong className="text-gray-900">contract size</strong>. Peer-tier CI ($49/mo:
                KompWatch, Kompetar) competes on{" "}
                <strong className="text-gray-900">
                  what the buyer actually reads on Monday morning
                </strong>
                . If your team stopped opening the alerts, the pricing tier isn&rsquo;t the
                problem — the format is. AI digests + severity classification + content-zone
                tagging turn a triage queue into an executive brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons — 3 signs you've outgrown Kompetar */}
      <section id="reasons" className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            3 signs you&rsquo;ve outgrown Kompetar
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Same price, different Monday-morning experience.
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

      {/* What Kompetar is missing */}
      <section id="risks" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What Kompetar is missing at the $49/mo tier
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            None of these are Kompetar bugs — they&rsquo;re product-scope choices.
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
            Kompetar vs. KompWatch — same tier, different signal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Kompetar pricing data from kompetar.com (May 2026). Both tools target SMB/mid-market SaaS.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kompetar (change detection)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                No free tier &mdash; paid from day one
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Change alerts on competitor pages
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Diff view with before/after
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
                  No severity classification (Low / Med / High / Critical)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No content-zone tagging (pricing / features / jobs / messaging)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  No free plan to trial alongside another tool
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro (AI-summarized CI)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Free tier: 2 competitors, weekly AI digest, forever
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI change summaries — Claude reads the diff and writes the &ldquo;so what&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Severity classification: LOW / MEDIUM / HIGH / CRITICAL
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Content-zone tagging: PRICING / FEATURE / MESSAGING / JOB / TECH
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS-selector targeting &mdash; monitor only the section that matters
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Daily digest roll-up &mdash; one email across all competitors
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Free tier: 2 competitors, weekly digest, no credit card
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Same monthly price. Different Monday-morning experience:{" "}
            <strong className="text-gray-900">a triage queue vs. an executive brief</strong>.
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
                  No credit card, no sales call. Your free plan includes 2 competitors — enough
                  to run KompWatch alongside Kompetar during evaluation. Kompetar has no free
                  tier, so this is the only way to A/B the two.
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
                  Copy the URLs you monitored in Kompetar. Set a CSS selector per page to focus
                  on the section that matters — pricing tables, feature lists, changelogs —
                  instead of the whole page. This is what turns page-wide noise into a targeted
                  change stream.
                </p>
              </div>
            </div>
            <div id="step-3" className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests — cancel Kompetar when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive via email or Slack, aggregated as a daily
                  digest with severity tags (Low / Medium / High / Critical) and content-zone
                  classification (pricing / features / messaging / jobs). Compare digest quality
                  side-by-side for 2&ndash;4 weeks, then cancel Kompetar when you&rsquo;re
                  convinced.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Kompetar Steps CTA"
              eventProps={{ competitor: "Kompetar", page: "switch-kompetar" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Want the ranked roundup?{" "}
              <Link href="/vs/kompetar-alternative" className="underline hover:text-gray-700">
                7 best Kompetar alternatives in 2026
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Parallel-run callout */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              You don&rsquo;t have to cancel Kompetar to try KompWatch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Run both for a month on your two most-tracked competitors. Compare the daily AI
              digest from KompWatch to the raw alerts from Kompetar. If KompWatch doesn&rsquo;t
              give you higher-signal intelligence,{" "}
              <strong className="text-gray-900">just stay on Kompetar</strong> — the free tier
              costs nothing.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Kompetar Urgency CTA"
                eventProps={{ competitor: "Kompetar", page: "switch-kompetar" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Kompetar
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Kompetar"
        guideSlug="switching-from-kompetar"
        guideLabel="Read the full Kompetar → KompWatch migration guide"
        faqs={[
          {
            question: "Is Kompetar bad? Why would I switch?",
            answer:
              "Kompetar isn't bad — it's a competent change-detection tool at a fair $49/mo price point. But if you're doing competitive intelligence (not just change detection), you'll hit two ceilings: no AI summaries (so you triage every alert yourself) and no free tier (so you can't trial a peer alternative without paying twice). KompWatch is the same $49/mo tier with those two gaps closed.",
          },
          {
            question: "Can I run KompWatch alongside Kompetar to compare?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digest) costs nothing. Add your two most-tracked competitors, run both tools in parallel for 2–4 weeks, and compare digest quality side-by-side. If KompWatch doesn't surface higher-signal intelligence for the same URLs, stay on Kompetar.",
          },
          {
            question: "What exactly does KompWatch's AI digest add over Kompetar's alerts?",
            answer:
              "Three layers. First, plain-English summaries: Claude reads the diff and writes a one-sentence 'what changed and why it matters' instead of showing you raw before/after HTML. Second, severity classification: every change gets a LOW / MEDIUM / HIGH / CRITICAL tag so you can skim the digest and drill into what's important. Third, content-zone tagging: changes are labeled PRICING / FEATURE / MESSAGING / JOB / TECH so you know at a glance whether a competitor moved on price, shipped a feature, or just refreshed copy.",
          },
          {
            question: "Do I need to cancel Kompetar before starting KompWatch?",
            answer:
              "No. KompWatch's free tier gives you 2 competitors with weekly digests, so you can run both tools in parallel at zero incremental cost. Most teams evaluate for 2–4 weeks — long enough to see a few real competitor changes go through both pipelines — then cancel Kompetar once they're confident KompWatch's digests replace what they were getting.",
          },
          {
            question: "Do Kompetar and KompWatch use the same underlying scraping engine?",
            answer:
              "No — this is a common assumption because both tools target the same buyer. KompWatch uses full Playwright rendering (real headless Chromium with configurable wait-for conditions), which handles React/Next.js/Vue SPAs correctly. Kompetar's public documentation doesn't specify its rendering pipeline, but users report occasional false positives on JavaScript-heavy sites — a pattern consistent with lighter headless-browser setups.",
          },
          {
            question: "What's the difference in setup time?",
            answer:
              "Both are self-serve tools with under-5-minute setup. KompWatch's edge is the free tier: you can sign up, add 2 competitors, and get your first digest without pulling out a credit card. Kompetar requires payment on signup, which slows evaluation for buyers who want to sanity-check the product before committing $49/mo.",
          },
          {
            question: "When is Kompetar actually the better pick?",
            answer:
              "If you only need raw change alerts and prefer inspecting the diff yourself (rather than reading an AI-generated summary), Kompetar and KompWatch converge on the same $49/mo price and Kompetar's simpler UI may fit your workflow. KompWatch's differentiators — AI digests, severity tags, content-zone classification, free tier — only matter if you want the tool to do the triage work for you.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Same price.{" "}
            <span className="text-brand-600">Higher-signal digest.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is $49/mo — same as Kompetar — with AI summaries, severity classification,
            and a free tier to trial alongside. Set up in 5 minutes.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Kompetar Bottom CTA"
              eventProps={{ competitor: "Kompetar", page: "switch-kompetar" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link href="/vs/kompetar-alternative" className="underline hover:text-gray-700">
              7 Kompetar alternatives ranked
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
            <Link href="/vs/kompetar-alternative" className="text-sm text-gray-500 hover:text-gray-700">
              Kompetar alternatives
            </Link>
            <Link href="/switch/visualping" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Visualping
            </Link>
            <Link href="/switch/crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Crayon
            </Link>
            <Link href="/switch/klue" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Klue
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
