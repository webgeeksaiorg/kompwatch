import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Crayon to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence from Crayon (now SoftwareOne) to KompWatch in under 15 minutes — no data loss, no downtime.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up for KompWatch (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call. Start on the free plan with 2 competitors while your Crayon/SoftwareOne contract is still active.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List your monitored competitors from Crayon",
      text: "Open Crayon's competitor dashboard and copy the URLs you actively track — pricing pages, feature pages, blogs, careers, changelogs. There's no export API, but a copy/paste list takes 5 minutes for a typical 10–20 competitor portfolio.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add competitor URLs to KompWatch with CSS selectors",
      text: "Paste each URL into KompWatch and set a CSS selector for the section that matters (e.g. .pricing-table, #features, main article). This gives you targeted change detection instead of Crayon's full-page firehose that surfaces social-media noise alongside real product changes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Configure email or Slack digests",
      text: "Route AI-generated digests to your inbox or #competitive-intel Slack channel. Claude-powered summaries replace Crayon's noisy data feeds — automated, no battlecard portal to maintain.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run both tools in parallel, then cancel Crayon at renewal",
      text: "Compare digest quality side-by-side for 30 days. When KompWatch consistently surfaces cleaner signals at $49/mo instead of $28K+/yr, let the Crayon contract lapse at renewal.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Migrate from Crayon to KompWatch — Crayon Is Now SoftwareOne",
  description:
    "Crayon was acquired by SoftwareOne for $1.4B and fully rebranded in 2026. If your competitive intelligence tool just changed its name, owner, and roadmap, migrate to KompWatch — automated monitoring, AI digests, $49/mo. Set up in 15 minutes.",
  keywords: [
    "migrate from Crayon",
    "Crayon migration",
    "Crayon SoftwareOne",
    "Crayon SoftwareOne acquisition",
    "Crayon rebranded",
    "Crayon alternative",
    "SoftwareOne competitive intelligence",
    "leave Crayon",
    "Crayon replacement",
    "Crayon competitor monitoring alternative",
    "Crayon acquired",
    "competitive intelligence migration",
    "SoftwareOne Crayon rebrand",
  ],
  alternates: {
    canonical: `${siteUrl}/migrate/from-crayon`,
  },
  openGraph: {
    title: "Migrate from Crayon — Now SoftwareOne, Different Product",
    description:
      "Crayon is now SoftwareOne. $1.4B acquisition, full rebrand, enterprise IT-services parent. Migrate your competitor monitoring to KompWatch — automated, AI-powered, $49/mo.",
    url: `${siteUrl}/migrate/from-crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Migrate from Crayon to KompWatch",
    description:
      "Crayon rebranded to SoftwareOne. $1.4B acquisition. Enterprise IT-services parent. Migrate your CI to KompWatch — automated monitoring, AI digests, $49/mo.",
  },
};

const acquisitionTimeline = [
  {
    date: "2023",
    title: "Crayon raises $100M+ and targets enterprise CI",
    detail:
      "Crayon expands into battlecard CMS, managed analyst services, and Salesforce integrations. Pricing rises to a $28,750/yr median contract (vendr.com data). The product becomes enterprise-first.",
  },
  {
    date: "Apr 2026",
    severity: "high",
    title: "SoftwareOne acquires Crayon for $1.4B",
    detail:
      "SoftwareOne — a $3B IT-services company focused on cloud licensing, SAP optimization, and managed services — announces the acquisition. Crayon becomes a product line inside a services rollup, not an independent CI company.",
  },
  {
    date: "May 2026",
    severity: "critical",
    title: "Crayon fully rebrands to SoftwareOne",
    detail:
      "The Crayon brand is retired. The product is now 'SoftwareOne Competitive Intelligence.' New parent, new name, new leadership priorities. Niche tools inside large IT-services firms historically see slower roadmaps, enterprise-only pivots, or eventual sunset.",
  },
  {
    date: "2026–2027",
    title: "Renewal risk: pricing, roadmap, and support uncertainty",
    detail:
      "Post-acquisition integration typically takes 12–18 months. During this period, expect potential price increases to fund integration costs, roadmap delays as teams reorganize, and support disruptions as processes align with the parent company.",
  },
];

const riskSignals = [
  {
    title: "Your CI vendor no longer exists as a company",
    description:
      "Crayon isn't just under new ownership — the brand is gone. The product is now 'SoftwareOne Competitive Intelligence.' When the company that built your tool ceases to exist, the roadmap, support team, and product vision change with it.",
  },
  {
    title: "IT-services rollup, not a CI-focused acquirer",
    description:
      "SoftwareOne is a $3B IT-services firm specializing in cloud licensing and SAP. Competitive intelligence is a niche product line inside a services company — not the core business. Historically, niche tools inside services rollups see reduced investment once integration is complete.",
  },
  {
    title: "Pricing pressure likely at renewal",
    description:
      "SoftwareOne paid $1.4B. That investment needs a return — expect higher ACVs, bundled services, and enterprise-tier minimums at renewal. If you're a small-to-mid team paying $20K–$30K/yr, your renewal quote may go up, not down.",
  },
];

export default function MigrateFromCrayonPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[{ name: "Migrate from Crayon", path: "/migrate/from-crayon" }]}
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

      {/* Rebrand alert banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>2026:</strong> Crayon has been fully rebranded to SoftwareOne
        after the $1.4B acquisition.{" "}
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
          Vendor change alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Crayon is now SoftwareOne.{" "}
          <span className="text-brand-600">
            Migrate your CI before your renewal.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Your competitive intelligence vendor was acquired for $1.4B and fully
          rebranded. The product is now a line item inside a $3B IT-services
          company — different name, different owner, different priorities. If
          your renewal is approaching, now is the time to evaluate alternatives
          — not after you&rsquo;ve auto-renewed for another{" "}
          <strong className="text-gray-900">$28K+/yr</strong>. KompWatch gives
          you the same automated monitoring with AI digests, starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Migrate Crayon Hero CTA"
            eventProps={{ competitor: "Crayon", page: "migrate-from-crayon" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — migrate in 15 minutes
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

      {/* Acquisition timeline */}
      <section
        id="timeline"
        className="border-y border-gray-100 bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Crayon &rarr; SoftwareOne: acquisition timeline
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            From independent CI company to a product line inside a $3B
            IT-services firm.
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
            What the SoftwareOne rebrand means for your renewal
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Acquisitions don&rsquo;t mean the product disappears — but they
            change the math on whether to renew.
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
            How to migrate — 5 steps, under 15 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            You can run KompWatch alongside Crayon/SoftwareOne during your
            evaluation — zero risk, zero cost.
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
              The renewal math after the acquisition
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Same product, new owner, likely higher prices to fund the $1.4B
              deal.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon / SoftwareOne (median)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750
                <span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Range: $5K–$80K+/yr &mdash; quote-only pricing
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>
                  &middot; Acquired by SoftwareOne for $1.4B (Apr 2026)
                </li>
                <li>&middot; Brand fully retired — now &ldquo;SoftwareOne CI&rdquo;</li>
                <li>&middot; Annual contract, sales call required</li>
                <li>
                  &middot; Post-acquisition pricing typically increases
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
                <li>&#10003; Self-serve — live in under 15 minutes</li>
                <li>&#10003; Independent, founder-led — no acquisition risk</li>
                <li>&#10003; Month-to-month, no annual lock-in</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            <strong className="text-gray-900">
              $28,162/yr saved (~49&times; cheaper)
            </strong>{" "}
            — and no post-acquisition price hikes to worry about.
          </p>
        </div>
      </section>

      {/* Parallel evaluation CTA */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Don&rsquo;t wait for the post-acquisition price increase
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside
              Crayon/SoftwareOne while your contract is still active. Compare
              digest quality side-by-side before your renewal — zero cost, zero
              risk.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Migrate Crayon Parallel CTA"
                eventProps={{ competitor: "Crayon", page: "migrate-from-crayon" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free evaluation alongside Crayon
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
            question:
              "Is Crayon being shut down after the SoftwareOne acquisition?",
            answer:
              "No. The Crayon product continues to operate under the SoftwareOne brand. But the company that built your CI tool no longer exists as an independent entity — it's now a product line inside a $3B IT-services firm focused on cloud licensing and SAP optimization. When a niche tool becomes a line item inside a services rollup, roadmap priorities, support responsiveness, and pricing all tend to shift toward the parent company's core enterprise customers. Renewal is the right time to evaluate alternatives.",
          },
          {
            question:
              "What happens to my data if I stop using Crayon/SoftwareOne?",
            answer:
              "Your monitoring data stays accessible through your contract term. Crayon doesn't expose a public data-export API, so you'll want to copy your competitor URL list manually before canceling — this takes about 5 minutes for a typical 10–20 competitor portfolio. KompWatch doesn't import Crayon data directly; you paste URLs and set CSS selectors from scratch, which takes under 15 minutes total.",
          },
          {
            question:
              "How does the SoftwareOne acquisition affect Crayon's product?",
            answer:
              "SoftwareOne is an IT-services company specializing in cloud licensing, SAP, and managed infrastructure — not competitive intelligence. Historically, niche SaaS tools inside services rollups see reduced product investment once integration completes (12–18 months post-close). The Crayon brand has already been fully retired. Watch for signs: slower feature releases, enterprise-only pricing tiers, and support response time increases during the integration period.",
          },
          {
            question:
              "Should I migrate now or wait until my renewal?",
            answer:
              "Start evaluating now, migrate at renewal. KompWatch's free tier (2 competitors, weekly digests) costs nothing — sign up, add your highest-priority competitors, and compare digest quality against Crayon for 30 days. This gives you a real data point before the renewal conversation, not a last-minute scramble when SoftwareOne sends you a new (likely higher) quote.",
          },
          {
            question: "How does KompWatch pricing compare to Crayon?",
            answer:
              "Crayon's median customer pays $28,750/yr (vendr.com data, May 2026), with plans ranging from $5,000 to $80,000+/yr depending on team size. KompWatch Pro is $49/mo ($588/yr) — roughly 49x less at the median. Month-to-month billing, cancel anytime, no sales call or annual contract. Post-acquisition, expect Crayon/SoftwareOne pricing to increase further as the new parent needs to recoup the $1.4B investment.",
          },
          {
            question:
              "What about Crayon features that KompWatch doesn't have?",
            answer:
              "Crayon offers a battlecard CMS, Salesforce/Highspot integrations, managed analyst services, and win/loss tracking. If you're running a CI program with 50+ reps and need deep CRM integration, those are real differentiators. But most teams considering migration use Crayon primarily for monitoring and alerts — and that's exactly what KompWatch automates at a fraction of the cost, with cleaner signal-to-noise via CSS selectors.",
          },
          {
            question:
              "Does KompWatch fix Crayon's noise problem?",
            answer:
              "Yes — that's the core differentiator. Crayon monitors entire pages and surfaces social-media chatter alongside real product changes (the #1 G2 complaint). KompWatch lets you assign CSS selectors per competitor, so you only get alerts on the .pricing-table, #features, or #changelog sections you actually care about. The AI digest then summarizes what changed and why it matters — no noise, no battlecard portal to maintain.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Your CI vendor just changed its name, owner, and roadmap.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Migrate to KompWatch in under 15 minutes. Same monitoring, AI
            digests, $49/mo — and no acquisition uncertainty.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Migrate Crayon Bottom CTA"
              eventProps={{ competitor: "Crayon", page: "migrate-from-crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link
              href="/switching-from-crayon"
              className="underline hover:text-gray-700"
            >
              Full migration guide
            </Link>{" "}
            &middot;{" "}
            <Link href="/vs-crayon" className="underline hover:text-gray-700">
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
              href="/vs-crayon"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              vs Crayon
            </Link>
            <Link
              href="/vs-klue"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              vs Klue
            </Link>
            <Link
              href="/switching-from-crayon"
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
