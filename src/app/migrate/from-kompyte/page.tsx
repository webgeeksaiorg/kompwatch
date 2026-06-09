import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { MigrationProTrialBanner } from "@/components/migration-pro-trial-banner";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Kompyte to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence from Kompyte (now bundled inside Semrush) to KompWatch in under 15 minutes — no data loss, no downtime.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up for KompWatch (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call. Start on the free plan with 2 competitors while your Semrush contract is still active.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List your monitored competitors from Kompyte/Semrush",
      text: "Open Semrush's Competitive Intelligence dashboard (formerly Kompyte) and copy the competitor URLs you actively track — pricing pages, feature pages, blogs, changelogs. A copy/paste list takes 5 minutes for a typical 10\u201320 competitor portfolio.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add competitor URLs to KompWatch with CSS selectors",
      text: "Paste each URL into KompWatch and set a CSS selector for the section that matters (e.g. .pricing-table, #features, main article). This gives you targeted change detection instead of full-page monitoring bundled inside an SEO suite.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Configure email or Slack digests",
      text: "Route AI-generated digests to your inbox or #competitive-intel Slack channel. Claude-powered summaries replace Semrush's SEO-centric alerts \u2014 purpose-built for competitive intelligence, not keyword rankings.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run both tools in parallel, then cancel Semrush at renewal",
      text: "Compare digest quality side-by-side for 30 days. When KompWatch consistently surfaces cleaner CI signals at $49/mo instead of $2K+/yr for Semrush\u2019s bundled suite, let the Semrush contract lapse at renewal.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Migrate from Kompyte to KompWatch \u2014 Kompyte Is Now Bundled Inside Semrush",
  description:
    "Kompyte was acquired by Semrush in 2022 and absorbed into their SEO platform. If you\u2019re paying $2K+/yr for an SEO suite just to keep your CI tool, migrate to KompWatch \u2014 standalone monitoring, AI digests, $49/mo. Set up in 15 minutes.",
  keywords: [
    "migrate from Kompyte",
    "Kompyte migration",
    "Kompyte Semrush",
    "Kompyte Semrush acquisition",
    "Kompyte alternative",
    "Kompyte bundled Semrush",
    "leave Kompyte",
    "Kompyte replacement",
    "Kompyte competitor monitoring alternative",
    "Kompyte acquired",
    "Semrush competitive intelligence",
    "competitive intelligence migration",
    "Semrush CI alternative",
    "Kompyte sunset",
  ],
  alternates: {
    canonical: `${siteUrl}/migrate/from-kompyte`,
  },
  openGraph: {
    title:
      "Migrate from Kompyte \u2014 Absorbed Into Semrush, No Longer Standalone",
    description:
      "Kompyte is now a feature inside Semrush\u2019s SEO suite. Standalone CI customers are paying for an entire SEO platform they don\u2019t need. Migrate to KompWatch \u2014 automated, AI-powered, $49/mo.",
    url: `${siteUrl}/migrate/from-kompyte`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Migrate from Kompyte to KompWatch",
    description:
      "Kompyte was absorbed into Semrush. Your CI tool is now a feature inside an SEO suite. Migrate to KompWatch \u2014 standalone monitoring, AI digests, $49/mo.",
  },
};

const acquisitionTimeline = [
  {
    date: "2022",
    title: "Semrush acquires Kompyte for competitive intelligence",
    detail:
      "Semrush \u2014 a $2.7B public SEO/SEM platform \u2014 acquires Kompyte to add competitive intelligence to its marketing toolkit. Kompyte was a standalone CI tool used by product and sales teams. Post-acquisition, it becomes a feature inside an SEO suite.",
  },
  {
    date: "2023",
    severity: "high" as const,
    title: "Kompyte features bundled into Semrush .Trends add-on",
    detail:
      "Kompyte\u2019s competitive monitoring is folded into Semrush\u2019s .Trends package, available only as an add-on to Guru ($250/mo) or Business ($500/mo) plans. Standalone Kompyte access is phased out. CI customers now pay for SEO tools they don\u2019t use.",
  },
  {
    date: "2024\u20132025",
    title: "Product roadmap prioritizes SEO-centric features",
    detail:
      "Semrush\u2019s development focus is on keyword research, backlink analysis, and ad intelligence \u2014 not competitive intelligence for product or sales teams. CI features receive minimal updates as engineering resources go to Semrush\u2019s core SEO business.",
  },
  {
    date: "2026",
    severity: "critical" as const,
    title: "Kompyte brand fully retired \u2014 CI is a line item in Semrush",
    detail:
      "The Kompyte brand no longer exists. Competitive intelligence is now \u2018Semrush Competitive Research\u2019 \u2014 one of dozens of tools inside a $2K\u2013$6K/yr SEO platform. Niche CI features inside a large platform historically stagnate once the acquisition integration is complete.",
  },
];

const riskSignals = [
  {
    title: "Your CI tool is now a feature, not a product",
    description:
      "Kompyte was a standalone competitive intelligence platform. After the Semrush acquisition, it\u2019s been absorbed into an SEO suite as one of 50+ tools. Product teams and sales orgs that used Kompyte for CI now need a full Semrush subscription \u2014 an SEO platform built for marketers, not competitive analysts.",
  },
  {
    title: "Paying for an SEO suite you don\u2019t need",
    description:
      "To access Kompyte\u2019s CI features, you need at minimum a Semrush Guru plan ($250/mo) plus the .Trends add-on ($200/mo). That\u2019s $5,400/yr for an SEO platform when all you want is competitor monitoring and change alerts.",
  },
  {
    title: "CI roadmap deprioritized for SEO features",
    description:
      "Semrush is an SEO-first company. Engineering resources go to keyword research, backlink tools, and ad intelligence. Competitive intelligence is a secondary use case \u2014 expect slower updates, fewer CI-specific features, and a product experience optimized for SEO workflows.",
  },
];

export default function MigrateFromKompytePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Migrate from Kompyte", path: "/migrate/from-kompyte" },
        ]}
      />
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
            <Link
              href="/#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
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

      {/* Bundling alert banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>2026:</strong> Kompyte has been fully absorbed into Semrush
        &mdash; the standalone CI product no longer exists.{" "}
        <Link
          href="#timeline"
          className="font-semibold underline hover:text-amber-700"
        >
          See the full timeline &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Product bundling alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Kompyte is now buried inside Semrush.{" "}
          <span className="text-brand-600">
            Get standalone CI for $49/mo.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Your competitive intelligence tool was acquired by an SEO company and
          bundled into a $5K+/yr marketing suite. The standalone product is gone
          &mdash; Kompyte is now one of 50+ tools inside Semrush, with a
          roadmap driven by keyword rankings, not competitor monitoring. If
          you&rsquo;re paying for an SEO platform just to keep your CI,
          KompWatch gives you dedicated monitoring with AI digests, starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Migrate Kompyte Hero CTA"
            eventProps={{ competitor: "Kompyte", page: "migrate-from-kompyte" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free &mdash; migrate in 15 minutes
          </TrackedCTA>
          <Link
            href="#timeline"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See the acquisition timeline &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      <MigrationProTrialBanner competitor="Kompyte" page="migrate-from-kompyte" />

      {/* Acquisition timeline */}
      <section
        id="timeline"
        className="border-y border-gray-100 bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Kompyte &rarr; Semrush: acquisition timeline
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            From standalone CI platform to a feature inside a $2.7B SEO
            suite.
          </p>
          <div className="mt-10 space-y-0">
            {acquisitionTimeline.map((event, i) => (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {i < acquisitionTimeline.length - 1 && (
                  <div className="absolute left-[15px] top-8 h-full w-px bg-gray-200" />
                )}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    event.severity === "critical"
                      ? "bg-red-100 text-red-700"
                      : event.severity === "high"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {event.severity ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      event.severity === "critical"
                        ? "text-red-700"
                        : event.severity === "high"
                          ? "text-amber-700"
                          : "text-gray-500"
                    }`}
                  >
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

      {/* Risk signals */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What the Semrush bundling means for your CI
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Acquisitions don&rsquo;t mean the features disappear &mdash; but
            they change whether a bundled tool still serves your needs.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {riskSignals.map((signal, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How to migrate &mdash; 5 steps, under 15 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            You can run KompWatch alongside Semrush during your evaluation
            &mdash; zero risk, zero cost.
          </p>
          <div className="mt-12 space-y-8">
            {howToJsonLd.step.map((item) => (
              <div key={item.position} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.position}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The cost of keeping CI inside an SEO suite
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You&rsquo;re paying for keyword research, backlink tools, and ad
              intelligence just to monitor competitors.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Semrush Guru + .Trends (for CI access)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $5,400
                <span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                $250/mo Guru + $200/mo .Trends add-on
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>
                  &middot; Kompyte absorbed into Semrush (2022 acquisition)
                </li>
                <li>
                  &middot; CI is one of 50+ tools in an SEO platform
                </li>
                <li>&middot; Requires full Semrush subscription for access</li>
                <li>
                  &middot; Roadmap driven by SEO, not competitive intelligence
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $588
                <span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                $49/mo &mdash; cancel anytime
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&#10003; 10 competitors, daily AI digests</li>
                <li>&#10003; Purpose-built for CI &mdash; not an SEO add-on</li>
                <li>
                  &#10003; Self-serve &mdash; live in under 15 minutes
                </li>
                <li>&#10003; Month-to-month, no annual lock-in</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            <strong className="text-gray-900">
              $4,812/yr saved (~9&times; cheaper)
            </strong>{" "}
            &mdash; and you stop paying for SEO tools you don&rsquo;t use.
          </p>
        </div>
      </section>

      {/* Parallel evaluation CTA */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Stop paying for an SEO suite to get competitive intelligence
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside
              Semrush while your subscription is still active. Compare digest
              quality side-by-side &mdash; zero cost, zero risk.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Migrate Kompyte Parallel CTA"
                eventProps={{
                  competitor: "Kompyte",
                  page: "migrate-from-kompyte",
                }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free evaluation alongside Semrush
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Kompyte"
        faqs={[
          {
            question:
              "Is Kompyte still available as a standalone product?",
            answer:
              "No. Kompyte was acquired by Semrush in 2022 and has been fully absorbed into the Semrush platform. The Kompyte brand has been retired. To access competitive intelligence features that were formerly part of Kompyte, you now need a Semrush Guru ($250/mo) or Business ($500/mo) subscription plus the .Trends add-on ($200/mo). There is no standalone Kompyte product anymore.",
          },
          {
            question:
              "What happens to my data if I stop using Semrush/Kompyte?",
            answer:
              "Your monitoring data stays accessible through your Semrush subscription term. There\u2019s no dedicated CI data-export feature, so you\u2019ll want to copy your competitor URL list manually before canceling \u2014 this takes about 5 minutes for a typical portfolio. KompWatch doesn\u2019t import Semrush data directly; you paste URLs and set CSS selectors from scratch, which takes under 15 minutes total.",
          },
          {
            question:
              "How does the Semrush acquisition affect Kompyte\u2019s CI features?",
            answer:
              "Semrush is an SEO and digital marketing platform \u2014 not a competitive intelligence company. After the acquisition, Kompyte\u2019s CI features became a small part of a much larger product. Engineering resources are primarily allocated to Semrush\u2019s core SEO tools (keyword research, backlink analysis, ad intelligence). CI features receive fewer updates and the product experience is optimized for SEO workflows, not competitive analysis for product or sales teams.",
          },
          {
            question:
              "Should I migrate now or wait until my renewal?",
            answer:
              "Start evaluating now, migrate at renewal. KompWatch\u2019s free tier (2 competitors, weekly digests) costs nothing \u2014 sign up, add your highest-priority competitors, and compare digest quality against Semrush for 30 days. This gives you a real data point before the renewal conversation.",
          },
          {
            question:
              "How does KompWatch pricing compare to Semrush for CI?",
            answer:
              "To access competitive intelligence features in Semrush (formerly Kompyte), you need at minimum the Guru plan ($250/mo) plus the .Trends add-on ($200/mo) \u2014 that\u2019s $5,400/yr. KompWatch Pro is $49/mo ($588/yr), roughly 9x less. And you\u2019re paying only for competitive intelligence, not subsidizing an SEO platform.",
          },
          {
            question:
              "What about Semrush features that KompWatch doesn\u2019t have?",
            answer:
              "Semrush offers keyword research, backlink analysis, site audits, ad intelligence, social media management, and dozens of other SEO/SEM tools. If you actively use those for marketing, the bundled CI may be a bonus. But if your team used Kompyte primarily for competitor monitoring and change alerts, you\u2019re paying for an entire SEO suite to get a single feature \u2014 and KompWatch does that one feature better, with CSS-targeted monitoring and AI-powered digests.",
          },
          {
            question:
              "Does KompWatch replace Kompyte\u2019s battlecard features?",
            answer:
              "KompWatch focuses on automated competitor monitoring and AI-generated change digests \u2014 the core workflow most Kompyte users relied on. If you used Kompyte\u2019s battlecard templates or CRM integrations extensively, those are features KompWatch doesn\u2019t replicate. But most teams migrating from Kompyte are looking for cleaner monitoring at a lower price, not a battlecard CMS.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Your CI tool got absorbed into an SEO suite.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Migrate to KompWatch in under 15 minutes. Standalone monitoring, AI
            digests, $49/mo &mdash; purpose-built for competitive intelligence.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Migrate Kompyte Bottom CTA"
              eventProps={{
                competitor: "Kompyte",
                page: "migrate-from-kompyte",
              }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free &mdash; no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link
              href="/vs-kompyte"
              className="underline hover:text-gray-700"
            >
              Feature comparison
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
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Pricing
            </Link>
            <Link
              href="/vs-klue"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              vs Klue
            </Link>
            <Link
              href="/vs-crayon"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              vs Crayon
            </Link>
            <Link
              href="/migrate/from-klue"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Switching from Klue
            </Link>
            <Link
              href="/migrate/from-crayon"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Switching from Crayon
            </Link>
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
