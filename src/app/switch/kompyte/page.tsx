import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Kompyte Is Buried Inside Adobe — Switch Before Your CI Tool Disappears",
  description:
    "Kompyte was acquired by Semrush (2022), then Adobe bought Semrush for $1.9B (Feb 2026). Your CI tool is now three acquisitions deep inside an enterprise conglomerate. KompWatch is the independent alternative — $49/mo, self-serve, set up in 5 minutes.",
  keywords: [
    "Kompyte alternative",
    "switch from Kompyte",
    "Kompyte Adobe acquisition",
    "Kompyte Semrush acquisition",
    "Kompyte replacement",
    "Kompyte migration",
    "Kompyte renewal alternative",
    "Kompyte competitive intelligence replacement",
    "independent Kompyte alternative",
    "Kompyte sunset risk",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/kompyte`,
  },
  openGraph: {
    title: "Kompyte Is Buried Inside Adobe — Switch to KompWatch",
    description:
      "Kompyte is now three acquisitions deep: Adobe → Semrush → Kompyte. KompWatch is the independent alternative — same monitoring, AI digests, $49/mo. No sales call.",
    url: `${siteUrl}/switch/kompyte`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kompyte Is Three Acquisitions Deep — Time to Switch?",
    description:
      "Adobe bought Semrush ($1.9B, Feb 2026). Kompyte is now buried inside an enterprise creative-software conglomerate. KompWatch: independent, $49/mo, 5-minute setup.",
  },
};

const timelineEvents = [
  {
    date: "2022",
    title: "Semrush acquires Kompyte",
    detail:
      "Kompyte becomes a competitive intelligence add-on inside Semrush's SEO and marketing suite. Standalone roadmap begins reporting to Semrush product leadership.",
  },
  {
    date: "Feb 2026",
    title: "Adobe acquires Semrush for $1.9B",
    detail:
      "Adobe folds Semrush into its enterprise marketing cloud. Kompyte is now a feature inside a suite inside a conglomerate — three acquisition layers from its original mission.",
  },
  {
    date: "H2 2026",
    risk: true,
    title: "Integration begins — sunset risk escalates",
    detail:
      "When enterprise conglomerates absorb niche tools this deep, the pattern is clear: features get folded into the parent platform, standalone access disappears, and pricing shifts to enterprise bundles. Kompyte's CI tool is no longer the priority.",
  },
];

const risks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Three acquisitions deep",
    description:
      "Kompyte → Semrush → Adobe. Each layer adds bureaucracy, slows roadmap decisions, and moves the product further from its original competitive intelligence focus.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Sunset or bundle risk",
    description:
      "Adobe doesn't sell $8K/yr standalone CI tools. Expect Kompyte to be folded into an enterprise marketing bundle — or quietly deprecated.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Enterprise pricing lock-in",
    description:
      "Adobe's go-to-market is enterprise contracts and annual commitments. Self-serve CI at $8K/yr was already sales-gated — expect that to get worse, not better.",
  },
];

export default function SwitchKompytePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switch from Kompyte", path: "/switch/kompyte" }]} />

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
        <strong>February 2026:</strong> Adobe acquired Semrush for $1.9B — Kompyte is now three acquisitions deep.{" "}
        <Link href="#timeline" className="font-semibold underline hover:text-amber-700">
          See what this means for your CI tool &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Acquisition alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Kompyte is buried inside Adobe.{" "}
          <span className="text-brand-600">Your CI tool is three acquisitions from anyone who cares about it.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Semrush acquired Kompyte in 2022. Adobe acquired Semrush for{" "}
          <strong className="text-gray-900">$1.9 billion</strong> in February 2026. Your competitive
          intelligence tool is now a feature inside a suite inside an enterprise
          creative-software conglomerate. KompWatch is the{" "}
          <strong className="text-gray-900">independent alternative</strong> — same competitor
          monitoring, AI-powered digests, from{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Kompyte Hero CTA"
            eventProps={{ competitor: "Kompyte", page: "switch-kompyte" }}
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
            How Kompyte got buried
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Two acquisitions in four years — each one moving CI further from the product roadmap.
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
            What three acquisitions mean for Kompyte customers
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Every acquisition layer adds distance between you and the team that built your CI tool.
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
            Kompyte pricing data from vendr.com and G2 reviews (April 2026).
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Kompyte (inside Adobe)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $8,000<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Starting price &mdash; likely higher inside Adobe bundles
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Three acquisitions deep (Adobe &rarr; Semrush &rarr; Kompyte)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Quote-only pricing, sales call required
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
                  No job listing tracking
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
                  Self-serve — set up in 5 minutes, no sales call
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI change summaries + job listing tracking
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
            <strong className="text-gray-900">$7,412/yr saved</strong> — and your CI tool is no
            longer at the mercy of Adobe&rsquo;s integration roadmap.
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
                  run KompWatch alongside Kompyte during evaluation.
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
                  Copy the URLs you monitored in Kompyte. Set a CSS selector per page to track only
                  the sections that matter — pricing tables, feature lists, changelogs. CSS selectors
                  are what Kompyte lacks and what G2 reviewers cite as a noise problem.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests — cancel Kompyte when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive via email or Slack — something Kompyte doesn&rsquo;t
                  offer. Compare quality side-by-side for 30 days, then cancel before your next renewal.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Kompyte Steps CTA"
              eventProps={{ competitor: "Kompyte", page: "switch-kompyte" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Want the detailed walkthrough?{" "}
              <Link href="/switching-from-kompyte" className="underline hover:text-gray-700">
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
              Don&rsquo;t wait for the deprecation notice
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Three acquisitions deep is where niche tools go to die quietly. Adobe didn&rsquo;t buy
              Semrush for Kompyte&rsquo;s CI tool — they bought it for the SEO and marketing data.
              Set up KompWatch now while Kompyte still exists, so you have a proven alternative
              ready when the sunset email arrives.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Kompyte Urgency CTA"
                eventProps={{ competitor: "Kompyte", page: "switch-kompyte" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Kompyte
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Kompyte (Inside Adobe)"
        faqs={[
          {
            question:
              "Is Kompyte being shut down?",
            answer:
              "There's no formal announcement yet. However, Kompyte is now three acquisition layers deep — Kompyte → Semrush → Adobe. Historically, niche tools this far from the parent company's core focus get folded into broader platforms, bundled into enterprise packages, or quietly deprecated. The risk isn't a sudden shutdown — it's gradual neglect.",
          },
          {
            question: "Why does it matter that Adobe acquired Semrush?",
            answer:
              "Adobe is a $200B enterprise creative-software company. They bought Semrush for its SEO and marketing analytics data, not for a niche competitive intelligence feature that Semrush itself acquired three years earlier. Kompyte's CI tool is now a rounding error inside Adobe's portfolio — which means roadmap investment, support staffing, and independent pricing are all at risk.",
          },
          {
            question:
              "Can I run KompWatch alongside Kompyte to compare before switching?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digests) costs nothing. Add your two most-tracked competitors, compare digest quality side-by-side for 30 days, and decide before your Kompyte renewal date.",
          },
          {
            question:
              "What does KompWatch have that Kompyte doesn't?",
            answer:
              "Two things Kompyte lacks entirely: AI-powered change summaries (Claude generates plain-English digests of what changed and why it matters) and job listing tracking (detect hiring signals like 'enterprise sales' or 'APAC expansion'). KompWatch also offers CSS-selector targeting so you monitor specific page sections instead of entire sites — the noise problem G2 reviewers cite most about Kompyte.",
          },
          {
            question: "How quickly can I be set up?",
            answer:
              "Under 5 minutes. Sign up (no credit card), paste your competitor URLs, set CSS selectors for the sections that matter, and your first AI digest arrives within hours. There's no sales call, no onboarding queue, no multi-week implementation.",
          },
          {
            question:
              "Will Kompyte's pricing change under Adobe?",
            answer:
              "Adobe's go-to-market is enterprise annual contracts. Kompyte was already ~$8K/yr and sales-gated under Semrush. Inside Adobe, the most likely pricing shift is bundling into a larger marketing suite — which means paying for tools you don't need to access the CI features you do. KompWatch is $49/mo, self-serve, cancel anytime.",
          },
          {
            question:
              "What about Kompyte's battlecard features?",
            answer:
              "Kompyte offers battlecard creation and distribution as part of its CI suite. KompWatch recently shipped one-click battlecard export — you can generate a downloadable HTML sales battlecard from competitor changes. It's lighter than Kompyte's full battlecard system, but covers the core use case at a fraction of the cost.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Three acquisitions is a warning sign.{" "}
            <span className="text-brand-600">Your monitoring shouldn&rsquo;t depend on Adobe&rsquo;s roadmap.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is independent, self-serve, and costs 13&times; less than Kompyte.
            Set up before the deprecation notice arrives.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Kompyte Bottom CTA"
              eventProps={{ competitor: "Kompyte", page: "switch-kompyte" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link href="/vs-kompyte" className="underline hover:text-gray-700">
              Full comparison
            </Link>{" "}
            &middot;{" "}
            <Link href="/switching-from-kompyte" className="underline hover:text-gray-700">
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
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/switching-from-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Kompyte
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/switch/klue" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/switch/crayon" className="text-sm text-gray-500 hover:text-gray-700">
              Switch from Crayon
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
