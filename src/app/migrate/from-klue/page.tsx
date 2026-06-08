import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { KlueReimbursementBanner } from "@/components/klue-reimbursement-banner";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Klue to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence monitoring from Klue to KompWatch in under 15 minutes — no data loss, no downtime.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up for KompWatch (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call. Start on the free plan with 2 competitors while your Klue contract is still active.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List your monitored competitors from Klue",
      text: "Open Klue's Competitor Profiles and copy the URLs you actively track — pricing pages, feature pages, blogs, careers, changelogs. There's no export API, but a copy/paste list takes 5 minutes for a typical 10–20 competitor portfolio.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add competitor URLs to KompWatch with CSS selectors",
      text: "Paste each URL into KompWatch and set a CSS selector for the section that matters (e.g. .pricing-table, #features, main article). This gives you targeted change detection instead of Klue's full-page firehose.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Configure email or Slack digests",
      text: "Route AI-generated digests to your inbox or #competitive-intel Slack channel. Claude-powered summaries replace Klue's analyst-curated updates — automated, no seat licenses required.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run both tools in parallel, then cancel Klue at renewal",
      text: "Compare digest quality side-by-side for 30 days. When KompWatch consistently surfaces the same monitoring signals at $49/mo instead of $20K+/yr, let the Klue contract lapse at renewal.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Migrate from Klue to KompWatch — After the Layoffs, Protect Your CI",
  description:
    "Klue cut 40% of staff in 2025 and another third in May 2026. If your competitive intelligence depends on a shrinking team, migrate to KompWatch — automated monitoring, AI digests, $49/mo. Set up in 15 minutes.",
  keywords: [
    "migrate from Klue",
    "Klue migration",
    "Klue layoffs",
    "Klue layoffs 2025",
    "Klue layoffs 2026",
    "Klue alternative after layoffs",
    "Klue staff cuts",
    "Klue shutting down",
    "leave Klue",
    "Klue replacement",
    "Klue competitor monitoring alternative",
    "Klue churn",
    "competitive intelligence migration",
  ],
  alternates: {
    canonical: `${siteUrl}/migrate/from-klue`,
  },
  openGraph: {
    title: "Migrate from Klue — After the Layoffs, Protect Your CI",
    description:
      "Klue cut ~185 staff across two rounds (2025–2026). Migrate your competitor monitoring to KompWatch — automated, AI-powered, $49/mo. No sales call.",
    url: `${siteUrl}/migrate/from-klue`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Migrate from Klue to KompWatch",
    description:
      "Two rounds of layoffs. Microsoft lock-in. $20K/yr minimums. Migrate your CI to KompWatch — automated monitoring, AI digests, $49/mo.",
  },
};

const layoffTimeline = [
  {
    date: "2023",
    title: "Klue raises $62M from Tiger Global and Salesforce Ventures",
    detail:
      "VC funding at this scale requires high ACVs — $20K–$40K/yr per customer. The roadmap shifts toward enterprise: battlecard CMS, CRM integrations, managed analyst workflows.",
  },
  {
    date: "2025",
    severity: "high",
    title: "~85 employees laid off — approximately 40% of staff",
    detail:
      "The first major restructuring. Support response times and feature velocity are the first things teams on the ground notice after a cut this deep.",
  },
  {
    date: "Feb 2026",
    title: "Microsoft 365 integration becomes the headline feature",
    detail:
      "Teams Calls, Dynamics 365, Copilot MCP Server. The product now assumes Microsoft's enterprise stack — teams on Slack or Google Workspace pay for features they can't use.",
  },
  {
    date: "May 2026",
    severity: "critical",
    title: "~100 more employees laid off — roughly a third of remaining staff",
    detail:
      "CEO cites a 'focus on AI' and acknowledges losing deals to ChatGPT. Two rounds of 30%+ cuts in under 18 months is a structural instability signal, not routine optimization.",
  },
];

const riskSignals = [
  {
    title: "Two major layoff rounds in 18 months",
    description:
      "~85 staff (40%) in 2025, then ~100 more (~33%) in May 2026. The team that built the features you rely on may no longer be there. Support, product velocity, and bug-fix timelines are all affected.",
  },
  {
    title: "Product direction shifting away from SMBs",
    description:
      "Post-layoff roadmap is focused on Microsoft Teams integration, Compete Agent for 50+ rep sales orgs, and enterprise battlecard CMS. Small teams are not the ICP being invested in.",
  },
  {
    title: "Pricing pressure likely at renewal",
    description:
      "Cost-cutting layoffs often precede price increases within 6–12 months. With a smaller team serving the same customer base, expect higher ACVs to maintain revenue — your renewal quote may go up, not down.",
  },
];

export default function MigrateFromKluePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[{ name: "Migrate from Klue", path: "/migrate/from-klue" }]}
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

      {/* Instability alert banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>May 2026:</strong> Klue laid off ~100 more employees —
        the second 30%+ cut in 18 months.{" "}
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
          Vendor stability alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Klue cut 40% of staff in 2025.{" "}
          <span className="text-brand-600">
            Migrate your CI before your renewal.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Two rounds of major layoffs in 18 months. A product pivot toward
          Microsoft Teams and enterprise-only workflows. If your competitive
          intelligence depends on Klue&rsquo;s shrinking team, now is the time
          to migrate — not after your renewal auto-renews for another{" "}
          <strong className="text-gray-900">$20K–$40K</strong>. KompWatch gives
          you the same automated monitoring with AI digests, starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Migrate Klue Hero CTA"
            eventProps={{ competitor: "Klue", page: "migrate-from-klue" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — migrate in 15 minutes
          </TrackedCTA>
          <Link
            href="#timeline"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See the layoff timeline &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever &middot; No sales call &middot; No credit card
        </p>
      </section>

      <KlueReimbursementBanner page="switching-from-klue" />

      {/* Layoff timeline */}
      <section
        id="timeline"
        className="border-y border-gray-100 bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Klue&rsquo;s stability timeline: 2023–2026
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Two rounds of 30%+ staff cuts in under 18 months is a structural
            instability signal.
          </p>
          <div className="mt-10 space-y-0">
            {layoffTimeline.map((event, i) => (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {i < layoffTimeline.length - 1 && (
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
            What Klue&rsquo;s layoffs mean for your renewal
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Layoffs don&rsquo;t mean the product disappears — but they change
            the math on whether to renew.
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
            You can run KompWatch alongside Klue during your evaluation — zero
            risk, zero cost.
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
              The renewal math after two rounds of cuts
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Smaller team, same pricing, fewer features for non-enterprise
              customers.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Klue (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $20,000
                <span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Range: $20K–$40K/yr &mdash; quote-only pricing
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>
                  &middot; ~185 staff cut across 2025–2026 (two rounds)
                </li>
                <li>&middot; Product roadmap pivoting to Microsoft stack</li>
                <li>&middot; Annual contract, sales call required</li>
                <li>
                  &middot; Renewal pricing may increase after cost-cutting
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
                <li>&#10003; No vendor-stability risk to manage</li>
                <li>&#10003; Month-to-month, no annual lock-in</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            <strong className="text-gray-900">
              $19,412/yr saved (~34&times; cheaper)
            </strong>{" "}
            — and no renewal anxiety about the vendor&rsquo;s next restructuring.
          </p>
        </div>
      </section>

      {/* Parallel evaluation CTA */}
      <section className="border-t border-gray-100 bg-brand-50/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Don&rsquo;t wait for the next round of cuts
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside
              Klue while your contract is still active. Compare digest quality
              side-by-side before your renewal — zero cost, zero risk.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Migrate Klue Parallel CTA"
                eventProps={{ competitor: "Klue", page: "migrate-from-klue" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free evaluation alongside Klue
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Klue"
        faqs={[
          {
            question:
              "Is Klue shutting down after the layoffs?",
            answer:
              "No. Klue is still operating and your contract is valid through its current term. But two rounds of 30%+ staff cuts in 18 months — ~85 in 2025 and ~100 in May 2026 — is a structural instability signal. Support response times, product velocity, and bug-fix timelines are all affected when a company loses that much of its team. Renewal is the right time to evaluate alternatives, not after you've auto-renewed for another $20K+ year.",
          },
          {
            question:
              "What happens to my data if I stop using Klue?",
            answer:
              "Your monitoring data stays in Klue through your contract term. Klue doesn't expose a public data-export API, so you'll want to copy your competitor URL list manually before canceling — this takes about 5 minutes for a typical 10–20 competitor portfolio. KompWatch doesn't import Klue data directly; you paste URLs and set CSS selectors from scratch, which takes under 15 minutes total.",
          },
          {
            question:
              "How do Klue's layoffs affect product quality?",
            answer:
              "Klue's CEO cited a 'focus on AI' and acknowledged losing deals to ChatGPT. The post-layoff roadmap is concentrating on Microsoft Teams integration, Dynamics 365, and the Compete Agent product for large sales orgs. For non-enterprise teams, this means fewer resources dedicated to the core monitoring features you use, and a product direction that may not serve your workflow going forward.",
          },
          {
            question:
              "Should I migrate now or wait until my renewal?",
            answer:
              "Start evaluating now, migrate at renewal. KompWatch's free tier (2 competitors, weekly digests) costs nothing — sign up, add your highest-priority competitors, and compare digest quality against Klue for 30 days. This gives you a real data point before the renewal conversation, not a last-minute scramble.",
          },
          {
            question: "How does KompWatch pricing compare to Klue?",
            answer:
              "Klue starts around $20,000/yr (vendr.com and G2 data, May 2026), with full-team tiers reaching $40,000/yr. KompWatch Pro is $49/mo ($588/yr) — roughly 34x less at Klue's entry tier. Month-to-month billing, cancel anytime, no sales call or annual contract.",
          },
          {
            question:
              "What about Klue features that KompWatch doesn't have?",
            answer:
              "Klue offers a dedicated battlecard CMS, Salesforce/Highspot integrations, win/loss analysis, and the Compete Agent for deal-specific intel. If you're running a CI program with 50+ reps and a dedicated analyst, those are real differentiators. But most teams that are considering migration use Klue primarily for monitoring and alerts — and that's exactly what KompWatch automates at a fraction of the cost.",
          },
          {
            question:
              "How does the Klue migration reimbursement work?",
            answer:
              "If your Klue annual contract has an early-termination fee, KompWatch will reimburse it — up to $500 — once you upgrade to a Pro or Team plan. Sign up, upgrade, cancel Klue, forward the cancellation confirmation showing the fee to support@kompwatch.com, and we apply a Stripe refund within 5 business days. The offer runs through Q3 2026. One reimbursement per company.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Vendor instability shouldn&rsquo;t mean CI downtime.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Migrate to KompWatch in under 15 minutes. Same monitoring, AI
            digests, $49/mo — and no layoff headlines to worry about.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Migrate Klue Bottom CTA"
              eventProps={{ competitor: "Klue", page: "migrate-from-klue" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link
              href="/switching-from-klue"
              className="underline hover:text-gray-700"
            >
              Full migration guide
            </Link>{" "}
            &middot;{" "}
            <Link href="/vs-klue" className="underline hover:text-gray-700">
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
              href="/switching-from-klue"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Switching from Klue
            </Link>
            <Link
              href="/vs-crayon"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              vs Crayon
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
