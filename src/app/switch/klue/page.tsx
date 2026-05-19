import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Klue Locked Into Microsoft Teams — Switch Before Your Renewal",
  description:
    "Klue's February 2026 update bolted competitive intelligence onto Microsoft Teams, Dynamics 365, and Copilot MCP. If your team isn't on Microsoft's enterprise stack, you're paying $20K–$40K/yr for features you can't use. KompWatch is platform-agnostic — $49/mo, self-serve, set up in 5 minutes.",
  keywords: [
    "Klue alternative",
    "switch from Klue",
    "Klue Microsoft Teams lock-in",
    "Klue Microsoft 365",
    "Klue Dynamics 365",
    "Klue Copilot MCP",
    "Klue replacement",
    "Klue renewal alternative",
    "Klue competitive intelligence migration",
    "platform-agnostic Klue alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/switch/klue`,
  },
  openGraph: {
    title: "Klue Locked Into Microsoft Teams — Switch to KompWatch",
    description:
      "Klue's CI platform now assumes Microsoft 365, Teams, and Dynamics 365. KompWatch is the platform-agnostic alternative — same monitoring, $49/mo. No sales call.",
    url: `${siteUrl}/switch/klue`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klue's Microsoft Lock-In — Time to Switch?",
    description:
      "Klue bolted CI onto Teams, Dynamics 365, and Copilot MCP in Feb 2026. KompWatch: platform-agnostic, $49/mo, set up in 5 minutes.",
  },
};

const timelineEvents = [
  {
    date: "2023",
    title: "Klue raises $62M from Tiger Global and Salesforce Ventures",
    detail:
      "VC math at this funding level requires high ACVs — typically $20K–$40K/yr per customer. Every roadmap decision optimizes for enterprise retention, not small-team accessibility.",
  },
  {
    date: "Feb 2026",
    title: "Microsoft 365 integration becomes the headline feature",
    detail:
      "Klue's biggest February release: deep Microsoft 365 hooks — Teams Calls, Teams Chat, Dynamics 365, and a Copilot MCP Server. The product is increasingly designed around Microsoft's enterprise stack.",
  },
  {
    date: "2026",
    risk: true,
    title: "Compete Agent launched — built for 50+ rep sales orgs",
    detail:
      "Klue's primary GTM is now its 'Compete Agent' AI product and an enterprise battlecard CMS. If you're a PM, founder, or marketer doing CI yourself, those features aren't for you — but you're paying for them at every renewal.",
  },
];

const risks = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Microsoft 365 lock-in",
    description:
      "Teams Calls, Teams Chat, Dynamics 365, Copilot MCP. If your team runs on Slack or Google Workspace, you're paying enterprise-tier pricing for integrations you can't use.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Upmarket pressure from $62M VC raise",
    description:
      "Tiger Global and Salesforce Ventures don't fund $588/yr SaaS. The math forces enterprise-only pricing — $20K minimum, sales calls, annual contracts. Small teams are not the target customer.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Built for 50+ rep sales orgs",
    description:
      "Klue's battlecard CMS and Compete Agent are designed for large CI programs with dedicated analysts. If you're a founder, PM, or marketer doing CI yourself, you're paying for an org chart you don't have.",
  },
];

export default function SwitchKluePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switch from Klue", path: "/switch/klue" }]} />

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

      {/* Lock-in alert banner */}
      <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
        <strong>February 2026:</strong> Klue&rsquo;s headline release bolts CI onto Microsoft Teams, Dynamics 365, and Copilot MCP.{" "}
        <Link href="#timeline" className="font-semibold underline hover:text-amber-700">
          See what this means for non-Microsoft teams &darr;
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Lock-in alert
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Klue is now a Microsoft Teams product.{" "}
          <span className="text-brand-600">If you&rsquo;re not on Microsoft&rsquo;s stack, you&rsquo;re paying for features you can&rsquo;t use.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Klue&rsquo;s February 2026 headline release: deep Microsoft 365 integration — Teams Calls,
          Teams Chat, Dynamics 365, Copilot MCP Server. That&rsquo;s a{" "}
          <strong className="text-gray-900">$20K–$40K/yr tool</strong> that now assumes your entire
          team is on Microsoft&rsquo;s enterprise stack before you get value. KompWatch is the{" "}
          <strong className="text-gray-900">platform-agnostic alternative</strong> — same competitor
          monitoring, AI digests via email or Slack, from{" "}
          <strong className="text-gray-900">$49/mo</strong>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switch Klue Hero CTA"
            eventProps={{ competitor: "Klue", page: "switch-klue" }}
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

      {/* Lock-in timeline */}
      <section id="timeline" className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How Klue drifted upmarket
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Three forces pushed Klue away from the teams that need CI most.
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

      {/* Lock-in risks */}
      <section id="risks" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What Klue&rsquo;s direction means for non-enterprise teams
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            If you&rsquo;re a 1–50 person team on Slack or Google Workspace, every Klue release
            takes you further from the product you signed up for.
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
            Klue pricing data from vendr.com and review sites (May 2026). Quote-only — exact
            number depends on team size and tier.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Klue (entry tier)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $20,000<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Up to $40K/yr for full team / battlecard tiers
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Headline features assume Microsoft 365 / Teams
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
                  Annual contract, multi-week onboarding
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Roadmap built for 50+ rep sales orgs
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
                  Platform-agnostic — Slack, Google Workspace, email
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
                  10 competitors, daily AI digests, job-listing tracking
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selectors filter out the noise reps complain about
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            That&rsquo;s{" "}
            <strong className="text-gray-900">$19,412–$39,412/yr saved</strong> — and your CI tool
            no longer assumes your stack matches Klue&rsquo;s enterprise customers.
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
                  run KompWatch alongside Klue during evaluation.
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
                  Copy the URLs you monitored in Klue. Set a CSS selector per page to track only
                  the sections that matter — pricing tables, feature lists, changelogs, job
                  postings. No Microsoft 365 dependency required.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Get AI digests via email or Slack — cancel Klue when ready
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Claude-powered summaries arrive wherever your team already works. Compare digest
                  quality side-by-side with Klue for 30 days, then cancel before your next renewal.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Switch Klue Steps CTA"
              eventProps={{ competitor: "Klue", page: "switch-klue" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              Want the detailed walkthrough?{" "}
              <Link href="/switching-from-klue" className="underline hover:text-gray-700">
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
              Don&rsquo;t wait for the renewal sticker shock
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Klue&rsquo;s direction is clear: more Microsoft, more enterprise, more battlecard CMS.
              Set up KompWatch now while your Klue contract is still running, so you have a proven
              platform-agnostic alternative ready when the renewal quote arrives.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switch Klue Urgency CTA"
                eventProps={{ competitor: "Klue", page: "switch-klue" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start monitoring free alongside Klue
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Klue (Microsoft Teams Lock-In)"
        faqs={[
          {
            question:
              "Does Klue require Microsoft 365 or Teams?",
            answer:
              "Not strictly required, but Klue's February 2026 headline release added deep Microsoft 365 integration — Teams Calls, Teams Chat, Dynamics 365, and a Copilot MCP Server. Those are now the marquee features. If your team uses Slack or Google Workspace, you're paying $20K–$40K/yr for an enterprise-tier roadmap built around a stack you don't have. KompWatch delivers the same monitoring through email digests and Slack/webhook alerts — no Microsoft dependency.",
          },
          {
            question: "Why does Klue cost $20K–$40K/yr?",
            answer:
              "Klue raised $62M from Tiger Global and Salesforce Ventures. That level of venture funding requires high ACVs to generate the returns investors expect, so the product prioritizes enterprise features (battlecard CMS, the launched Compete Agent AI, deep CRM integrations) that justify a $20K minimum. The pricing isn't going down — it's going up as Klue moves further upmarket.",
          },
          {
            question:
              "Can I run KompWatch alongside Klue to compare before switching?",
            answer:
              "Yes — that's the recommended approach. KompWatch's free plan (2 competitors, weekly digests) costs nothing. Add your two most-tracked competitors, compare digest quality side-by-side for 30 days, and decide before your Klue renewal date. If the same signals land in both inboxes, skip the renewal call.",
          },
          {
            question:
              "What does Klue do that KompWatch doesn't?",
            answer:
              "Klue offers a dedicated battlecard CMS for sales reps, deep Salesforce/Highspot integrations, win/loss analysis, managed analyst services, and the new Microsoft 365 / Compete Agent stack. If you're running a CI program with 50+ reps and a dedicated analyst team, those are real differentiators. KompWatch ships a one-click battlecard export and focuses on automated monitoring and AI digests — lighter, faster, and platform-agnostic.",
          },
          {
            question: "How quickly can I be set up?",
            answer:
              "Under 5 minutes. Sign up (no credit card), paste your competitor URLs, set CSS selectors for the sections that matter, and your first AI digest arrives within hours. There's no sales call, no onboarding queue, no multi-week implementation, and no Microsoft Teams setup required.",
          },
          {
            question:
              "What about Klue's Compete Agent and battlecard CMS?",
            answer:
              "Klue launched its 'Compete Agent' AI product in May 2026 and continues expanding its enterprise battlecard CMS for 50+ rep sales orgs. If you're a founder, PM, or marketer doing CI yourself, those features aren't for you — but you're paying for them. KompWatch focuses on automated monitoring with AI digests and a one-click battlecard export. Lighter than Klue's full CMS, but covers the core use case at 1/40th the cost.",
          },
          {
            question:
              "Does KompWatch integrate with Salesforce or Highspot?",
            answer:
              "Not yet. KompWatch's primary integrations today are email digests and Slack/webhook alerts — designed for the workflow most small and mid-size teams already use. If your CI program lives inside Salesforce or Highspot dashboards, Klue may still be a better fit. For everyone else, the lightweight stack is the point.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Lock-in creates uncertainty.{" "}
            <span className="text-brand-600">Your monitoring shouldn&rsquo;t.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch is platform-agnostic, self-serve, and costs 34&times;–68&times; less than
            Klue&rsquo;s entry tier. Set up before your next renewal.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switch Klue Bottom CTA"
              eventProps={{ competitor: "Klue", page: "switch-klue" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Want more detail?{" "}
            <Link href="/vs-klue" className="underline hover:text-gray-700">
              Full comparison
            </Link>{" "}
            &middot;{" "}
            <Link href="/switching-from-klue" className="underline hover:text-gray-700">
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/switching-from-klue" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Klue
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
