import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SwitchHowToSchema } from "@/components/switch-howto-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Semrush Killed Your CI Workflow — Switch to KompWatch Before the Adobe Bundle Lands",
  description:
    "Semrush acquired Kompyte in 2022 and was itself acquired by Adobe for $1.9B in Feb 2026. Semrush users lost their standalone CI tool inside a marketing-suite bundle. KompWatch is the independent, self-serve alternative — $49/mo, 5-minute setup, no sales call.",
  keywords: [
    "Semrush alternative",
    "Semrush Kompyte alternative",
    "switch from Semrush",
    "Semrush competitive intelligence replacement",
    "Semrush Adobe acquisition",
    "Semrush CI tool",
    "Semrush Kompyte replacement",
    "independent Semrush alternative",
    "Semrush competitor tracking",
    "Semrush market explorer alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/semrush`,
  },
  openGraph: {
    title: "Semrush Users: Your CI Tool Was Bundled Away — Switch to KompWatch",
    description:
      "Semrush bought Kompyte (2022). Adobe bought Semrush ($1.9B, Feb 2026). Your competitive intelligence is now three acquisitions deep. KompWatch: independent, $49/mo, 5-minute setup.",
    url: `${siteUrl}/switch/semrush`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semrush Users — Your CI Tool Is Buried Inside Adobe Now",
    description:
      "Adobe bought Semrush for $1.9B. Kompyte (the CI tool inside Semrush) is now three acquisitions deep. KompWatch is the independent alternative — $49/mo, no sales call.",
  },
};

const timelineEvents = [
  {
    date: "2022",
    title: "Semrush acquires Kompyte",
    detail:
      "Semrush folds Kompyte into its SEO and marketing suite as a competitive-intelligence add-on. Kompyte's standalone roadmap begins reporting to Semrush product leadership — CI becomes one feature in a broader stack.",
  },
  {
    date: "Feb 2026",
    title: "Adobe acquires Semrush for $1.9B",
    detail:
      "Adobe folds the entire Semrush portfolio — including Kompyte's CI capabilities — into its enterprise marketing cloud. The competitive-intelligence workflow Semrush users relied on is now three ownership layers away from the team that built it.",
  },
  {
    date: "H2 2026",
    risk: true,
    title: "Integration begins — CI features get bundled or deprecated",
    detail:
      "When enterprise conglomerates absorb marketing suites this deep, the pattern is predictable: standalone CI access gets folded into higher-priced Experience Cloud bundles, seat pricing shifts to enterprise contracts, and niche workflows (like CSS-selector monitoring) fall off the roadmap.",
  },
];

const risks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Your CI tool is now three acquisitions deep",
    description:
      "Kompyte → Semrush → Adobe. Every acquisition layer adds bureaucracy, slows roadmap decisions, and moves your competitive-intelligence workflow further from anyone who cares about it.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Bundled into Adobe Experience Cloud",
    description:
      "Adobe doesn't sell standalone CI tools — it sells enterprise marketing suites at 5–6 figures per year. Expect Semrush's Kompyte features to be pushed inside bigger bundles you can't opt out of.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Contract & pricing lock-in",
    description:
      "Adobe's go-to-market is annual enterprise contracts and multi-year commitments. If you liked Semrush's monthly self-serve pricing, that model is on borrowed time.",
  },
];

export default function SwitchSemrushPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switch from Semrush", path: "/switch/semrush" }]} />
      <SwitchHowToSchema
        competitor="Semrush"
        pageSlug="semrush"
        steps={[
          {
            name: "Sign up free (30 seconds)",
            text: "No credit card, no sales call. Your free plan includes 2 competitors — enough to run KompWatch alongside your Semrush workspace during evaluation.",
          },
          {
            name: "Add your competitor URLs with CSS selectors",
            text: "Copy the domains you tracked in Semrush's Market Explorer or Kompyte add-on. Set a CSS selector per page to monitor only the sections that matter — pricing tables, feature lists, changelogs. This targeted approach eliminates the noise Semrush users report from full-site diffing.",
          },
          {
            name: "Get AI digests — cancel Semrush when ready",
            text: "Claude-powered summaries arrive via email or Slack — plain-English explanations of what changed and why it matters. Compare quality side-by-side for 30 days, then downgrade or cancel your Semrush plan before its next renewal.",
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

      {/* Acquisition alert banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>February 2026:</strong> Adobe acquired Semrush for $1.9B — your competitive-intelligence stack is now inside an enterprise conglomerate.{" "}
        <Link href="#timeline" className="font-semibold underline hover:text-amber-700">
          See what this means for your Semrush CI workflow &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Acquisition alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Semrush was your CI stack.{" "}
          <span className="text-brand-600">Now it&rsquo;s an Adobe Experience Cloud add-on.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Semrush acquired Kompyte in 2022 to give its users a real competitive-intelligence workflow. Adobe acquired Semrush for{" "}
          <strong className="text-gray-900">$1.9 billion</strong> in February 2026. The CI tool you rely on inside Semrush is now three ownership layers away from anyone who prioritises it. KompWatch is the{" "}
          <strong className="text-gray-900">independent, self-serve alternative</strong> — dedicated competitor monitoring, AI-powered digests, from{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Semrush Hero CTA"
            eventProps={{ competitor: "Semrush", page: "switch-semrush" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — set up in 5 minutes
          </TrackedCTA>
          <Link
            href="#risks"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            Why switch now? &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      {/* Red urgency callout */}
      <section className="border-y border-red-200 bg-red-50 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-red-700">
                Why this matters now
              </div>
              <h2 className="mt-1 text-lg font-bold text-gray-900">
                Adobe completed the Semrush acquisition (February 2026)
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Semrush&rsquo;s roadmap is now an{" "}
                <strong className="text-gray-900">
                  Adobe Experience Cloud priority &mdash; not a self-serve SEO or CI product
                </strong>
                . Adobe didn&rsquo;t pay $1.9B for Semrush&rsquo;s $99/mo monthly subscribers; they
                paid for the SEO data pipeline and enterprise marketing analytics. Expect{" "}
                <strong className="text-gray-900">CI-feature investment</strong>,{" "}
                <strong className="text-gray-900">standalone Kompyte access</strong>, and{" "}
                <strong className="text-gray-900">self-serve pricing</strong> to all bend toward
                Adobe&rsquo;s enterprise motion &mdash; not the standalone workflow you signed up for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition timeline */}
      <section id="timeline" className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How Semrush&rsquo;s CI workflow got buried
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Two acquisitions in four years — each one moving your competitive-intelligence tooling further from the product team that built it.
          </p>
          <div className="mt-10 space-y-0">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {i < timelineEvents.length - 1 && (
                  <div className="absolute left-[15px] top-8 h-full w-px bg-gray-200" />
                )}
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
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
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

      {/* Risks */}
      <section id="risks" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What the Adobe acquisition means for Semrush CI users
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Every acquisition layer adds distance between you and the team that ships your competitor-tracking workflow.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {risks.map((risk, i) => (
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

      {/* Side-by-side pricing */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            The cost of staying vs. switching
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Semrush Business + Kompyte add-on pricing from semrush.com and G2 reviews (May 2026).
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Semrush + Kompyte add-on (inside Adobe)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $5,000+<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Business tier ($499/mo) + Kompyte quote &mdash; likely higher inside Adobe bundles
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  CI stack is three acquisitions deep (Adobe &rarr; Semrush &rarr; Kompyte)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  You pay for SEO, backlink, and PPC tools you may not need
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No CSS-selector precision &mdash; noise from full-site diffing
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No AI-generated plain-English change summaries
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                $588/yr &mdash; cancel anytime, no lock-in
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Independent, founder-led company
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated CI &mdash; not bundled with SEO or backlink tools you don&rsquo;t need
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI change summaries + job-listing tracking
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selectors for precise, noise-free monitoring
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            That&rsquo;s{" "}
            <strong className="text-gray-900">~$4,400/yr saved</strong> — and your competitor
            monitoring is no longer at the mercy of Adobe&rsquo;s bundling roadmap.
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
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Sign up free (30 seconds)
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  No credit card, no sales call. Your free plan includes 2 competitors — enough to
                  run KompWatch alongside your Semrush workspace during evaluation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Add your competitor URLs with CSS selectors
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Copy the domains you tracked in Semrush&rsquo;s Market Explorer or Kompyte add-on.
                  Set a CSS selector per page to monitor only the sections that matter — pricing
                  tables, feature lists, changelogs. This targeted approach eliminates the noise
                  Semrush users report from full-site diffing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests — cancel Semrush when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive via email or Slack — plain-English explanations
                  of what changed and why it matters. Compare quality side-by-side for 30 days,
                  then downgrade or cancel your Semrush plan before its next renewal.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Semrush Steps CTA"
              eventProps={{ competitor: "Semrush", page: "switch-semrush" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Already a Semrush + Kompyte user?{" "}
              <Link href="/switch/kompyte" className="underline hover:text-gray-700">
                See the Kompyte-specific switching guide
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
              Don&rsquo;t wait for the bundling email
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Three acquisitions deep is where niche workflows go to get bundled or quietly retired.
              Adobe didn&rsquo;t buy Semrush for its self-serve subscribers or CI features — they
              bought it for SEO and marketing analytics data. Set up KompWatch now while Semrush
              still exists in its current form, so you have a proven alternative ready when the
              inevitable pricing or feature change arrives.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Semrush Urgency CTA"
                eventProps={{ competitor: "Semrush", page: "switch-semrush" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Semrush
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Semrush (Inside Adobe)"
        guideSlug="switching-from-semrush"
        guideLabel="Read the full Semrush → KompWatch migration guide"
        faqs={[
          {
            question: "Is Semrush being shut down?",
            answer:
              "No — Semrush isn't going away. What's changing is the roadmap: Adobe acquired Semrush for $1.9B in February 2026, folding it into the Adobe Experience Cloud. Historically, when enterprise conglomerates absorb marketing SaaS this deep, self-serve pricing, standalone CI features, and monthly subscription models get restructured toward enterprise annual contracts.",
          },
          {
            question: "Why does the Adobe acquisition matter for CI users?",
            answer:
              "Semrush's competitive-intelligence workflow came from Kompyte — acquired in 2022. Now Kompyte's CI features sit inside Semrush, which sits inside Adobe. That's three acquisitions between you and the team that ships your competitor-tracking updates. Adobe is a $200B enterprise creative-software company, and its go-to-market motion is enterprise bundles, not $99/mo self-serve SEO tools.",
          },
          {
            question: "Can I keep just the CI features and drop the rest of Semrush?",
            answer:
              "Not cleanly — Semrush bundles CI (via Kompyte) inside its Business tier and higher. You're paying for SEO audits, backlink analysis, PPC research, and keyword tracking even if all you want is competitor monitoring. KompWatch is dedicated CI: you only pay for what you actually use.",
          },
          {
            question: "Can I run KompWatch alongside Semrush during evaluation?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digests) costs nothing. Add your two most-important competitors, compare digest quality side-by-side for 30 days, then decide before your Semrush renewal.",
          },
          {
            question: "What does KompWatch have that Semrush's CI features don't?",
            answer:
              "Three things: (1) AI-powered change summaries — Claude generates plain-English digests of what changed and why it matters, not raw diffs; (2) CSS-selector targeting so you monitor specific page sections (pricing tables, feature lists) instead of full-site noise; (3) job-listing tracking to detect hiring signals like 'enterprise sales hire' or 'APAC expansion'. Semrush's CI features are broader but noisier, and never focused on standalone monitoring workflows.",
          },
          {
            question: "How quickly can I be set up?",
            answer:
              "Under 5 minutes. Sign up (no credit card), paste your competitor URLs, set CSS selectors for the sections that matter, and your first AI digest arrives within hours. There's no sales call, no onboarding queue, no multi-week implementation.",
          },
          {
            question: "Will Semrush's pricing change under Adobe?",
            answer:
              "Adobe's default motion is annual enterprise contracts and multi-year commitments. Semrush's current self-serve monthly pricing ($139–$499/mo) is atypical for Adobe's portfolio. The most likely shifts: bundling into larger Experience Cloud packages, migration of standalone plans toward annual billing, and repositioning of premium features (like Kompyte-powered CI) as enterprise-tier only.",
          },
          {
            question: "What about Semrush's other features — keyword research, backlinks, PPC?",
            answer:
              "KompWatch doesn't replace those — we're focused on competitor monitoring, not SEO. If you need keyword research or backlink analysis, you can keep Semrush (or move to Ahrefs, Moz, etc.) and use KompWatch specifically for the competitor-tracking piece. Many teams cut their Semrush tier down after moving CI to KompWatch, saving thousands per year while keeping the SEO tools they actually use.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Three acquisitions is a warning sign.{" "}
            <span className="text-brand-600">Your CI shouldn&rsquo;t depend on Adobe&rsquo;s bundling roadmap.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is independent, self-serve, and purpose-built for competitor monitoring.
            Set up before Adobe restructures the Semrush pricing you signed up for.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Semrush Bottom CTA"
              eventProps={{ competitor: "Semrush", page: "switch-semrush" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Related:{" "}
            <Link href="/switch/kompyte" className="underline hover:text-gray-700">
              Switch from Kompyte
            </Link>{" "}
            &middot;{" "}
            <Link href="/for-semrush-users" className="underline hover:text-gray-700">
              KompWatch for Semrush users
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
            <Link href="/switch/kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Kompyte
            </Link>
            <Link href="/switch/klue" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Klue
            </Link>
            <Link href="/switch/crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Crayon
            </Link>
            <Link href="/for-semrush-users" className="text-sm text-gray-500 hover:text-gray-700">
              For Semrush users
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
