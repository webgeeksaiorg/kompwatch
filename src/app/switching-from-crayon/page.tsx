import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Switch from Crayon to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence from Crayon to KompWatch in under 15 minutes.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call. Your free plan includes 2 competitors so you can run KompWatch alongside Crayon during evaluation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Export your competitor list from Crayon",
      text: "In Crayon, go to your tracked competitors and copy the URLs you actively monitor — pricing pages, feature pages, blogs, careers, and changelog pages. There's no API export, but a copy/paste list takes 5 minutes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add competitor URLs to KompWatch",
      text: "Paste each URL into KompWatch and assign a CSS selector for the section that actually matters (e.g. .pricing-table, #features, main article). Targeting selectors is what kills Crayon-style noise before it reaches your inbox.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Connect Slack or set up email digests",
      text: "Pipe AI-generated digests to your #competitive-intel Slack channel or your inbox. Same workflow your team already runs in Crayon, just with Claude-powered summaries and no battlecard portal to maintain.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run side-by-side for 30 days, then cancel Crayon",
      text: "Compare digests for a full month. When KompWatch consistently surfaces the same signals (without the noise), don't renew Crayon. Most teams switch fully within one renewal cycle.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Switching from Crayon to KompWatch — Migration Guide",
  description:
    "Moving off Crayon? KompWatch is the self-serve alternative — AI digests, CSS-selector precision, and competitor monitoring from $49/mo (vs. Crayon's $28,750/yr median). Set up in under 15 minutes.",
  keywords: [
    "switching from Crayon",
    "Crayon alternative",
    "Crayon migration",
    "Crayon replacement",
    "replace Crayon",
    "Crayon to KompWatch",
    "SoftwareOne Crayon alternative",
    "Crayon competitive intelligence migration",
    "cancel Crayon",
    "Crayon SoftwareOne acquisition",
  ],
  alternates: {
    canonical: `${siteUrl}/switching-from-crayon`,
  },
  openGraph: {
    title: "Switching from Crayon to KompWatch — Migration Guide",
    description:
      "Set up KompWatch in under 15 minutes. Track the same competitors, get AI digests, pay ~49x less than Crayon's median contract. No sales call required.",
    url: `${siteUrl}/switching-from-crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switching from Crayon to KompWatch",
    description:
      "Crayon was acquired by SoftwareOne in April 2026. KompWatch is the independent alternative — self-serve, AI-powered, from $49/mo.",
  },
};

const migrationSteps = [
  {
    step: 1,
    title: "Sign up (free, 30 seconds)",
    description:
      "Create your account at kompwatch.com. No credit card, no sales call. Your free plan includes 2 competitors so you can run KompWatch alongside Crayon during evaluation.",
  },
  {
    step: 2,
    title: "Export your competitor list from Crayon",
    description:
      "In Crayon, copy the URLs you actively monitor — pricing pages, feature pages, blogs, careers, changelog pages. There's no native API export, but a copy/paste list takes 5 minutes.",
  },
  {
    step: 3,
    title: "Add URLs to KompWatch with CSS selectors",
    description:
      "Paste each URL and assign a CSS selector (e.g. .pricing-table, #features, main article) for the section that matters. Targeting selectors is what kills Crayon-style noise before it reaches your inbox — Crayon monitors entire pages and surfaces social-media chatter alongside real product changes.",
  },
  {
    step: 4,
    title: "Connect Slack or email digests",
    description:
      "Pipe AI-generated digests to your #competitive-intel channel or inbox. Same workflow your team already runs in Crayon, just with Claude-powered summaries — no battlecard portal to maintain.",
  },
  {
    step: 5,
    title: "Run side-by-side for 30 days, then cancel Crayon",
    description:
      "Compare digests for a month. When KompWatch consistently surfaces the same signals without the noise, don't renew. Most teams switch fully within one Crayon renewal cycle.",
  },
];

export default function SwitchingFromCrayonPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switching from Crayon", path: "/switching-from-crayon" }]} />
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
          Switching from Crayon?{" "}
          <span className="text-brand-600">Set up KompWatch in 15 minutes.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Crayon was acquired by{" "}
          <strong className="text-gray-900">SoftwareOne for $1.4B in April 2026</strong>. If your
          renewal is coming up, KompWatch gives you the same competitor monitoring with AI digests
          at <strong className="text-gray-900">~49&times; lower cost</strong> than Crayon&rsquo;s
          $28,750/yr median contract — with zero onboarding friction.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switching Page Hero CTA Click"
            eventProps={{ competitor: "Crayon", page: "switching" }}
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
          Free plan forever. No sales call. Cancel Crayon when you&rsquo;re ready.
        </p>
      </section>

      {/* Why teams are switching */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why teams are switching from Crayon in 2026
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Crayon&rsquo;s median customer pays $28,750/yr (vendr.com data). KompWatch Pro is
                $49/mo ($588/yr) — cancel anytime, no annual contract, no sales call.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Signal-to-noise</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                The #1 G2 complaint about Crayon: noisy data feeds surfacing tweets and LinkedIn
                fluff alongside real product changes. KompWatch&rsquo;s CSS selectors target only
                what matters.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Vendor stability</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                SoftwareOne acquired Crayon for $1.4B in April 2026. Niche tools inside large
                IT-services rollups often see slower roadmaps and enterprise-only pivots.
                KompWatch is independent, founder-led, and focused solely on competitor monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section id="migration-steps" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How to switch — 5 steps, under 15 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            You can&rsquo;t auto-import battlecards from Crayon, but the monitoring setup is fast.
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
                  Website change monitoring (pricing, features, blog)
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
                  Email digests and Slack integration
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI-generated plain-English summaries (better — Claude-powered)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selector targeting (kills the noise problem Crayon users complain about)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">Not in KompWatch (yet)</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Battlecard CMS for sales reps (on our roadmap)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Win/loss tracking workflows
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Native Salesforce / Highspot integrations
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Managed analyst services (Crayon Analyst Services)
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                If battlecard distribution and managed analyst services are must-haves, Crayon may
                still be the better fit — and we&rsquo;ll say that honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost calculator */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The renewal math
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Median Crayon contract data from vendr.com (April 2026).
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon (median customer)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Range: $5,000–$80,000+/yr depending on team size
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Sales call required</li>
                <li>· Annual contract, no monthly option</li>
                <li>· Multi-week onboarding</li>
                <li>· Battlecards + managed services included</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $588<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$49/mo &mdash; cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked</li>
                <li>✓ Daily AI digests (Claude-powered)</li>
                <li>✓ Self-serve signup in 2 minutes</li>
                <li>✓ Slack + email + webhook alerts</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            That&rsquo;s a{" "}
            <strong className="text-gray-900">
              $28,162/yr saving (~49&times; cheaper)
            </strong>{" "}
            for the core monitoring most teams actually use.
          </p>
        </div>
      </section>

      {/* Run both in parallel */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Mid-contract with Crayon? Run both for a month.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside Crayon. Compare
              the digest quality side-by-side before your renewal date. Zero risk, zero cost, zero
              sales calls.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switching Page Parallel CTA Click"
                eventProps={{ competitor: "Crayon", page: "switching" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free trial alongside Crayon
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Crayon"
        faqs={[
          {
            question: "Can I import my competitors from Crayon?",
            answer:
              "There's no direct import — Crayon doesn't expose a public competitor-export API. But adding competitors in KompWatch takes about 1 minute each: paste the URL, set a CSS selector, done. Most teams are fully set up within 15 minutes.",
          },
          {
            question: "Will I lose my battlecards if I switch?",
            answer:
              "KompWatch doesn't have a battlecard CMS yet (it's on our roadmap). If your sales team actively uses Crayon battlecards, export them as PDFs before deactivating, or keep Crayon for the battlecard layer while using KompWatch for monitoring. Many teams find the monitoring data is the high-value piece and battlecards become low-touch over time.",
          },
          {
            question: "How does KompWatch pricing compare to Crayon?",
            answer:
              "Crayon's median customer pays $28,750/yr based on public vendr.com data (April 2026), with plans ranging from $5,000/yr to $80,000+/yr depending on team size. KompWatch Pro is $49/mo ($588/yr) — roughly 49x less expensive at the median, with month-to-month billing and no annual lock-in.",
          },
          {
            question: "What about the SoftwareOne acquisition — should I be worried?",
            answer:
              "SoftwareOne acquired Crayon for $1.4B in April 2026. SoftwareOne is a large IT-services firm, and niche SaaS tools inside services rollups often see slower roadmaps, enterprise-only pivots, or eventual sunset. While nothing is certain, vendor stability is worth weighing in your renewal decision — especially if you locked in pricing before the acquisition closed.",
          },
          {
            question: "Does KompWatch fix Crayon's noise problem?",
            answer:
              "Yes — that's the core differentiator. Crayon monitors entire pages and surfaces social-media chatter alongside real product changes (the #1 G2 complaint). KompWatch lets you assign CSS selectors per competitor, so you only get alerts on the .pricing-table, #features, or #changelog sections you actually care about. The AI digest then summarizes what changed and why it matters.",
          },
          {
            question: "Can I run KompWatch and Crayon at the same time?",
            answer:
              "Yes. KompWatch's free tier (2 competitors, weekly digests) lets you run both in parallel with zero cost. This is the lowest-risk way to evaluate before your Crayon renewal — most teams pick a couple of high-priority competitors, run both feeds for 30 days, and compare digest quality side-by-side.",
          },
          {
            question: "Is KompWatch a good fit for enterprise teams coming from Crayon?",
            answer:
              "It depends on what you used Crayon for. If your team consumed competitor monitoring, AI summaries, and Slack/email alerts, KompWatch Team ($149/mo, 50 competitors, hourly snapshots, real-time alerts) covers that fully. If your team relies on battlecards, managed analyst services, or deep Salesforce integrations, those aren't in KompWatch yet — and we'll say that honestly.",
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
            Set up KompWatch in under 15 minutes. Track the same competitors, get cleaner AI
            digests, save ~$28K/yr off Crayon&rsquo;s median contract.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switching Page Bottom CTA Click"
              eventProps={{ competitor: "Crayon", page: "switching" }}
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
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
