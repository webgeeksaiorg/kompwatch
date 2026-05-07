import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Crayon Was Acquired — Switch to KompWatch Before Your Next Renewal",
  description:
    "SoftwareOne acquired Crayon for $1.4B in April 2026. Don't wait for pricing changes or product sunsets. KompWatch is the independent alternative — $49/mo, self-serve, set up in 5 minutes.",
  keywords: [
    "Crayon acquired",
    "Crayon SoftwareOne",
    "Crayon alternative after acquisition",
    "switch from Crayon",
    "Crayon replacement",
    "SoftwareOne Crayon migration",
    "Crayon renewal alternative",
    "Crayon competitor monitoring replacement",
    "independent Crayon alternative",
    "Crayon sunset risk",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/crayon`,
  },
  openGraph: {
    title: "Crayon Was Acquired — Switch to KompWatch",
    description:
      "SoftwareOne acquired Crayon for $1.4B. KompWatch is the independent alternative — same competitor monitoring, AI digests, $49/mo. No sales call.",
    url: `${siteUrl}/switch/crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crayon Was Acquired — Time to Switch?",
    description:
      "SoftwareOne bought Crayon for $1.4B in April 2026. KompWatch: independent, self-serve, $49/mo. Set up in 5 minutes.",
  },
};

const timelineEvents = [
  {
    date: "Jan 2026",
    title: "SoftwareOne announces intent to acquire Crayon",
    detail:
      "SoftwareOne Group AG announces acquisition of Crayon Group Holding ASA for $1.4B, creating an IT-services conglomerate.",
  },
  {
    date: "Apr 2026",
    title: "Acquisition closes — Crayon is now a SoftwareOne subsidiary",
    detail:
      "Crayon delists from Oslo Børs. Product roadmap, pricing, and support teams now report to SoftwareOne leadership.",
  },
  {
    date: "H2 2026",
    risk: true,
    title: "Integration begins — renewal pricing at risk",
    detail:
      "Historically, niche SaaS tools inside large IT-services rollups see price hikes, enterprise-only pivots, or slower roadmaps within 12–18 months of close.",
  },
];

const risks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Renewal price hikes",
    description:
      "Acquirers recoup deal costs through pricing. Crayon's median contract is already $28,750/yr — expect that to go up, not down.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Product roadmap freezes",
    description:
      "Post-acquisition integration priorities override feature development. The CI tool becomes a cost center inside a services company.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Enterprise-only pivot",
    description:
      "SoftwareOne serves large enterprises. Self-serve CI tools for mid-market and SMB teams are rarely the priority post-rollup.",
  },
];

export default function SwitchCrayonPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switch from Crayon", path: "/switch/crayon" }]} />

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
        <strong>April 2026:</strong> SoftwareOne completed its $1.4B acquisition of Crayon.{" "}
        <Link href="#timeline" className="font-semibold underline hover:text-amber-700">
          See what this means for your contract &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Acquisition alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Crayon was acquired.{" "}
          <span className="text-brand-600">Don&rsquo;t wait for the price hike.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          SoftwareOne bought Crayon for{" "}
          <strong className="text-gray-900">$1.4 billion</strong>. History says what comes next:
          higher prices, slower roadmaps, enterprise-only focus. KompWatch is the{" "}
          <strong className="text-gray-900">independent alternative</strong> — same competitor
          monitoring, AI-powered digests, from{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Crayon Hero CTA"
            eventProps={{ competitor: "Crayon", page: "switch-crayon" }}
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

      {/* Acquisition timeline */}
      <section id="timeline" className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            The Crayon acquisition timeline
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            What&rsquo;s happened so far — and what typically follows.
          </p>
          <div className="mt-10 space-y-0">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Timeline line */}
                {i < timelineEvents.length - 1 && (
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

      {/* Acquisition risks */}
      <section id="risks" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What acquisitions mean for existing customers
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Based on historical patterns when niche SaaS tools are absorbed by large IT-services firms.
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
            Crayon pricing data from vendr.com (April 2026).
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon (post-acquisition)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Median contract &mdash; likely higher at next renewal
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Now owned by SoftwareOne (IT-services rollup)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Annual contract, sales call required
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Multi-week onboarding
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Roadmap uncertain post-acquisition
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
                  Self-serve — set up in 5 minutes
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  10 competitors, daily AI digests
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selectors kill Crayon&rsquo;s noise problem
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            That&rsquo;s{" "}
            <strong className="text-gray-900">$28,162/yr saved</strong> — and you&rsquo;re no
            longer exposed to post-acquisition pricing changes.
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
                  run KompWatch alongside Crayon during evaluation.
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
                  Copy the URLs you monitored in Crayon. Set a CSS selector per page to track only
                  the sections that matter — pricing tables, feature lists, changelogs. This is what
                  eliminates Crayon&rsquo;s noise problem.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests — cancel Crayon when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive via email or Slack. Compare digest quality
                  side-by-side with Crayon for 30 days, then cancel before your next renewal.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Crayon Steps CTA"
              eventProps={{ competitor: "Crayon", page: "switch-crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Want the detailed walkthrough?{" "}
              <Link href="/switching-from-crayon" className="underline hover:text-gray-700">
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
              Don&rsquo;t wait for the renewal surprise
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Post-acquisition price hikes are predictable — they just aren&rsquo;t visible until
              your renewal notice arrives. Set up KompWatch now while your Crayon contract is still
              running, so you have a proven alternative ready when the number comes in.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Crayon Urgency CTA"
                eventProps={{ competitor: "Crayon", page: "switch-crayon" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Crayon
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Crayon (Post-Acquisition)"
        faqs={[
          {
            question:
              "Will Crayon's pricing change after the SoftwareOne acquisition?",
            answer:
              "No one outside SoftwareOne knows for certain, but the pattern is consistent: when IT-services firms acquire niche SaaS tools, prices rise as the acquirer recoups deal costs and shifts focus to high-ACV enterprise accounts. Crayon's median contract is already $28,750/yr — there's little incentive to lower it.",
          },
          {
            question: "Is Crayon being shut down?",
            answer:
              "There's no announcement of a shutdown. However, product-level independence inside a large acquirer is the exception, not the norm. Features may be folded into SoftwareOne's broader platform, or the standalone product could be deprioritized. The risk isn't immediate shutdown — it's gradual neglect.",
          },
          {
            question:
              "Can I run KompWatch alongside Crayon to compare before switching?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digests) costs nothing. Add your two most-tracked competitors, compare digest quality side-by-side for 30 days, and decide before your Crayon renewal date.",
          },
          {
            question:
              "What does KompWatch do that Crayon doesn't?",
            answer:
              "Two things: CSS-selector targeting (you monitor specific page sections instead of entire sites, which eliminates the noise G2 reviewers complain about) and transparent pricing ($49/mo, self-serve, cancel anytime). Crayon has battlecard distribution and managed analyst services that KompWatch doesn't offer yet.",
          },
          {
            question: "How quickly can I be set up?",
            answer:
              "Under 5 minutes. Sign up (no credit card), paste your competitor URLs, set CSS selectors for the sections that matter, and your first AI digest arrives within hours. There's no sales call, no onboarding queue, no multi-week implementation.",
          },
          {
            question:
              "My team relies on Crayon battlecards — is that a blocker?",
            answer:
              "KompWatch recently shipped one-click battlecard export — you can generate a downloadable HTML sales battlecard from competitor changes. It's lighter than Crayon's full battlecard CMS, but covers the core use case. If your team needs deep Salesforce integration or managed analyst services, Crayon may still be the better fit for now.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Acquisitions create uncertainty.{" "}
            <span className="text-brand-600">Your monitoring shouldn&rsquo;t.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is independent, self-serve, and costs 49&times; less than Crayon&rsquo;s
            median contract. Set up before your next renewal.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Crayon Bottom CTA"
              eventProps={{ competitor: "Crayon", page: "switch-crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link href="/vs-crayon" className="underline hover:text-gray-700">
              Full comparison
            </Link>{" "}
            &middot;{" "}
            <Link href="/switching-from-crayon" className="underline hover:text-gray-700">
              Migration guide
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/switching-from-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Crayon
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
