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
  name: "How to Switch from Klue to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence from Klue to KompWatch in under 15 minutes.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call, no annual contract. Your free plan includes 2 competitors so you can run KompWatch alongside Klue during evaluation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Export your competitor list from Klue",
      text: "In Klue, open your Competitor Profiles workspace and copy the URLs you actively monitor — pricing pages, feature pages, blogs, careers, changelog. Klue doesn't expose a public competitor-export API, but a copy/paste list takes 5 minutes for a typical 10–20 competitor portfolio.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add competitor URLs to KompWatch with CSS selectors",
      text: "Paste each URL into KompWatch and assign a CSS selector for the section that actually matters (e.g. .pricing-table, #features, main article). Selector targeting is what gives you cleaner alerts than Klue's full-page change firehose.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Connect Slack or set up email digests",
      text: "Pipe AI-generated digests to your #competitive-intel Slack channel or your inbox. Same delivery model your team already uses with Klue, just with Claude-powered summaries — and no battlecard portal to maintain or seat licenses to renew.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Run side-by-side for 30 days, then don't renew Klue",
      text: "Compare digests for a full month. When KompWatch consistently surfaces the same monitoring signals at $49/mo instead of $20K+/yr, route the renewal conversation back to procurement. Most SMB teams switch fully within one Klue renewal cycle.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Switching from Klue to KompWatch — Migration Guide",
  description:
    "Priced out of Klue? KompWatch is the self-serve alternative — AI digests, CSS-selector precision, and competitor monitoring from $49/mo (vs Klue's $20K–$40K/yr). Set up in under 15 minutes, no sales call.",
  keywords: [
    "switching from Klue",
    "Klue alternative",
    "Klue migration",
    "Klue replacement",
    "replace Klue",
    "Klue to KompWatch",
    "Klue SMB alternative",
    "cheap Klue alternative",
    "Klue competitive intelligence migration",
    "cancel Klue",
    "Klue Compete Agent alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/switching-from-klue`,
  },
  openGraph: {
    title: "Switching from Klue to KompWatch — Migration Guide",
    description:
      "Set up KompWatch in under 15 minutes. Track the same competitors, get AI digests, pay 34× less than Klue's $20K/yr floor. No sales call required.",
    url: `${siteUrl}/switching-from-klue`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switching from Klue to KompWatch",
    description:
      "Klue starts at $20K/yr and requires a sales call. KompWatch is self-serve, AI-powered, from $49/mo. Migrate in 15 minutes.",
  },
};

const migrationSteps = [
  {
    step: 1,
    title: "Sign up (free, 30 seconds)",
    description:
      "Create your account at kompwatch.com. No credit card, no sales call, no annual contract. Your free plan includes 2 competitors so you can run KompWatch alongside Klue during evaluation.",
  },
  {
    step: 2,
    title: "Export your competitor list from Klue",
    description:
      "In Klue's Competitor Profiles workspace, copy the URLs you actively monitor — pricing pages, feature pages, blogs, careers, changelog. There's no native competitor-export API, but a copy/paste list takes about 5 minutes for a 10–20 competitor portfolio.",
  },
  {
    step: 3,
    title: "Add URLs to KompWatch with CSS selectors",
    description:
      "Paste each URL and assign a CSS selector (e.g. .pricing-table, #features, main article) for the section that matters. Selector targeting gives you cleaner alerts than Klue's full-page change feed — you only see real product changes, not header swaps or unrelated marketing copy.",
  },
  {
    step: 4,
    title: "Connect Slack or email digests",
    description:
      "Pipe AI-generated digests to your #competitive-intel channel or inbox. Same delivery model your team already uses in Klue, just with Claude-powered summaries — and no battlecard portal seats to maintain.",
  },
  {
    step: 5,
    title: "Run side-by-side for 30 days, then don't renew Klue",
    description:
      "Compare digest quality for a month. When KompWatch consistently surfaces the same monitoring signals at $49/mo, route the renewal conversation back to procurement. Most SMB teams switch fully within one Klue renewal cycle.",
  },
];

export default function SwitchingFromKluePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switching from Klue", path: "/switching-from-klue" }]} />
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
          Switching from Klue?{" "}
          <span className="text-brand-600">Set up KompWatch in 15 minutes.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Klue is a polished enterprise CI platform — but{" "}
          <strong className="text-gray-900">$20K–$40K/yr with no SMB tier</strong> is the #1
          complaint on G2. If your renewal is coming up and you don&rsquo;t need battlecards
          consumed inside Salesforce, KompWatch gives you the same monitoring with AI digests at{" "}
          <strong className="text-gray-900">~34&times; lower cost</strong> — with zero
          onboarding friction.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switching Page Hero CTA Click"
            eventProps={{ competitor: "Klue", page: "switching" }}
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
          Free plan forever. No sales call. Don&rsquo;t renew Klue when you&rsquo;re ready.
        </p>
      </section>

      <KlueReimbursementBanner page="switching-from-klue" />

      {/* Why teams are switching */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why teams are switching from Klue in 2026
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
                Klue starts at $20K/yr and runs up to $40K/yr for full-feature tiers
                (vendr.com/G2 data). KompWatch Pro is $49/mo ($588/yr) — cancel anytime, no
                annual contract, no sales call.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Time-to-value</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Klue requires a sales call, scoping process, and multi-week onboarding before
                your first digest. KompWatch is live in under 2 minutes — paste URLs, set
                selectors, get alerts.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">SMB fit</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                &ldquo;No SMB tier&rdquo; is the #1 G2 complaint about Klue. Klue&rsquo;s
                launched Compete Agent and Microsoft Teams integration keep deepening enterprise
                lock-in. KompWatch is built for the 1–50 person teams Klue won&rsquo;t serve.
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
            You can&rsquo;t auto-import battlecards from Klue, but the monitoring setup is fast.
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
                  Email digests and Slack/webhook alerts
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI-generated plain-English summaries (Claude-powered)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selector targeting (cleaner signal than Klue&rsquo;s full-page feed)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Self-serve signup and month-to-month billing
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
                  Klue Compete Agent (deal-specific battlecard delivery on calls)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Native Salesforce / Highspot / Microsoft Teams integrations
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Win/loss analysis workflows
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                If your sales org consumes battlecards inside Salesforce or relies on Klue&rsquo;s
                Compete Agent for live deal coaching, Klue may still be the better fit —
                and we&rsquo;ll say that honestly.
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
              Klue pricing data from vendr.com and G2 reviews (May 2026).
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Klue (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $20,000<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Range: $20K–$40K/yr depending on team size and battlecard tier
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Sales call required</li>
                <li>· Annual contract, no monthly option</li>
                <li>· Multi-week onboarding</li>
                <li>· Battlecards + Compete Agent included</li>
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
              $19,412/yr saving (~34&times; cheaper at the entry tier, ~68&times; at the top)
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
              Mid-contract with Klue? Run both for a month.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside Klue. Compare the
              digest quality side-by-side before your renewal. Zero risk, zero cost, zero sales
              calls.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switching Page Parallel CTA Click"
                eventProps={{ competitor: "Klue", page: "switching" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free trial alongside Klue
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
            question: "Can I import my competitors from Klue?",
            answer:
              "There's no direct import — Klue doesn't expose a public competitor-export API. But adding competitors in KompWatch takes about 1 minute each: paste the URL, set a CSS selector, done. Most teams are fully set up within 15 minutes.",
          },
          {
            question: "Will I lose my battlecards if I switch?",
            answer:
              "KompWatch now offers one-click battlecard export — generate a sales-ready battlecard from any competitor's tracked changes. It's lighter than Klue's full battlecard CMS, but covers the core use case. If your sales reps need deep CRM-embedded battlecards inside Salesforce or Slack, you can keep Klue for the battlecard layer while using KompWatch for monitoring. Many teams find the monitoring data is the high-value piece.",
          },
          {
            question: "How does KompWatch pricing compare to Klue?",
            answer:
              "Klue's pricing is quote-only and starts around $20,000/yr based on public data from vendr.com and G2 reviews (May 2026), with full-team tiers reaching $40,000/yr. KompWatch Pro is $49/mo ($588/yr) — roughly 34× less expensive at Klue's entry tier, with month-to-month billing and no annual lock-in.",
          },
          {
            question: "What about Klue's Compete Agent — is there an equivalent?",
            answer:
              "Not yet. Klue's Compete Agent (launched early 2026) auto-delivers deal-specific battlecard intel to reps when a competitor is mentioned on a call — that's a sales-enablement feature, not a monitoring feature. KompWatch is focused on the monitoring layer: detecting and summarizing competitor changes, then routing them to email or Slack. If your team needs in-call battlecard delivery, Klue's Compete Agent is the right tool. If you want the underlying competitor-change intel without the $20K/yr price tag, KompWatch is the right tool.",
          },
          {
            question: "Why is 'no SMB tier' such a common Klue complaint?",
            answer:
              "Klue is built for enterprise CI programs — dedicated competitive intelligence analysts curating battlecards for 50+ sales reps. The product, contract length, and pricing all reflect that ICP. For founders, PMs, and 1–50 person teams who just need to know when competitors change pricing or features, Klue's $20K/yr floor is hard to justify. KompWatch fills that gap: same monitoring, AI digests, no battlecard portal, $49/mo.",
          },
          {
            question: "Can I run KompWatch and Klue at the same time?",
            answer:
              "Yes. KompWatch's free tier (2 competitors, weekly digests) lets you run both in parallel with zero cost. This is the lowest-risk way to evaluate before your Klue renewal — most teams pick a couple of high-priority competitors, run both feeds for 30 days, and compare digest quality side-by-side.",
          },
          {
            question: "Is KompWatch a good fit for teams coming from Klue?",
            answer:
              "It depends on what you used Klue for. If your team consumed competitor monitoring, AI summaries, and Slack/email alerts, KompWatch Team ($149/mo, 50 competitors, hourly snapshots, real-time alerts) covers that fully at ~7% of Klue's entry-tier cost. If your team relies on Klue's Compete Agent, battlecard distribution inside Salesforce/Highspot, or managed CI analyst workflows, those aren't in KompWatch yet — and we'll say that honestly.",
          },
          {
            question: "How does the Klue migration reimbursement work?",
            answer:
              "If you're on a Klue annual contract and have to pay an early-termination fee to switch, KompWatch will reimburse it — up to $500 — once you upgrade to a Pro or Team plan. The flow is simple: (1) sign up and upgrade to a paid KompWatch plan, (2) cancel Klue and forward us your cancellation confirmation showing the fee at support@kompwatch.com, (3) we apply a Stripe refund on your KompWatch invoice for the cancellation amount, capped at $500, within 5 business days. The offer runs through Q3 2026 to support teams making the switch during Klue's post-layoff churn window. One reimbursement per company.",
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
            digests, save ~$19K/yr off Klue&rsquo;s entry-tier contract.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switching Page Bottom CTA Click"
              eventProps={{ competitor: "Klue", page: "switching" }}
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
