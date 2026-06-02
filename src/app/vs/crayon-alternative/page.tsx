import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "7 Best Crayon Alternatives in 2026 (Post-SoftwareOne Acquisition)",
  description:
    "Crayon was acquired by SoftwareOne for $1.4B in April 2026 — pricing and roadmap shifted toward enterprise. Here are the 7 best Crayon alternatives in 2026, ranked honestly by price, fit, and what they actually do well.",
  keywords: [
    "Crayon alternative",
    "Crayon alternatives 2026",
    "best Crayon alternative",
    "Crayon competitor",
    "Crayon vs",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Crayon SoftwareOne acquisition",
    "Crayon replacement",
    "alternatives to Crayon",
  ],
  alternates: {
    canonical: `${siteUrl}/vs/crayon-alternative`,
  },
  openGraph: {
    title: "7 Best Crayon Alternatives in 2026 — Ranked Honestly",
    description:
      "Crayon was acquired by SoftwareOne in April 2026. If your renewal is up or pricing changed, here are the 7 best alternatives — from $0 to enterprise — with honest takes on each.",
    url: `${siteUrl}/vs/crayon-alternative`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Crayon Alternatives in 2026",
    description:
      "Post-SoftwareOne acquisition, Crayon's pricing and focus shifted. Here are 7 honest alternatives — from free tools to enterprise CI.",
  },
};

type Alternative = {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  bestFor: string;
  startingPrice: string;
  pros: string[];
  cons: string[];
  verdict: string;
  internalLink?: string;
  externalDomain?: string;
};

const alternatives: Alternative[] = [
  {
    rank: 1,
    name: "KompWatch",
    slug: "kompwatch",
    tagline: "The independent, self-serve Crayon alternative for SMBs and lean teams.",
    bestFor:
      "Founders, PMMs, and 5–200 person SaaS teams who want Crayon-style competitor monitoring without the $25K+/yr contract or sales call.",
    startingPrice: "Free / $49 per month",
    pros: [
      "Paste a URL, get tracking in under 2 minutes — no sales call, no onboarding project.",
      "AI digests powered by Claude — plain-English summaries of what actually changed.",
      "CSS-selector targeting kills the noise problem most teams hit with Crayon.",
      "Independent vendor (no acquisition uncertainty).",
      "Free plan covers 2 competitors with weekly digests.",
      "Pricing-page drop alerts, feature/blog/job monitoring, Slack + email delivery.",
    ],
    cons: [
      "Smaller battlecard library than Crayon's enterprise tier (one-click export only).",
      "No CRM-native sales enablement portal (yet).",
      "Newer brand — fewer Fortune 500 logos.",
    ],
    verdict:
      "If you were paying Crayon for the actual signals (pricing changes, feature launches, positioning shifts), KompWatch delivers the same data at ~2% of the cost. The trade-off is the analyst-portal layer — and most SMB teams never used that anyway.",
    internalLink: "/",
  },
  {
    rank: 2,
    name: "Klue",
    slug: "klue",
    tagline: "Enterprise CI with strong sales enablement + battlecards.",
    bestFor:
      "100+ person companies with a dedicated CI analyst, deep Salesforce/HubSpot deployment, and a real sales enablement program.",
    startingPrice: "Quote — typically $16K–$60K+/yr",
    pros: [
      "Best-in-class battlecard distribution into CRM and Slack.",
      "Analyst-curated intelligence (not just raw page diffs).",
      "Recently added 'Compete Agent' AI for autonomous threat detection.",
      "4.7/5 on G2 (441 reviews) — strong enterprise references.",
    ],
    cons: [
      "Sales cycle measured in weeks. No self-serve.",
      "#1 G2 complaint: alert noise / information overload.",
      "Requires a dedicated PMM or analyst to extract value — that's $80K+/yr in headcount on top of software.",
    ],
    verdict:
      "If you already have a CI program and just want a more polished platform than Crayon, Klue is the natural lateral move. If you're a 20-person company, you're not the target customer.",
    internalLink: "/vs-klue",
    externalDomain: "klue.com",
  },
  {
    rank: 3,
    name: "Kompyte",
    slug: "kompyte",
    tagline: "Mid-market CI with battlecards and Semrush integration.",
    bestFor:
      "Mid-market teams (50–500 employees) wanting a Crayon-like platform with a slightly lower entry point and Semrush ecosystem integration.",
    startingPrice: "Quote — typically $10K–$30K/yr",
    pros: [
      "Owned by Semrush — useful if you already run Semrush for SEO/PPC competitive data.",
      "Battlecards + sales playbooks built in.",
      "Tracks web, social, and ad creative changes.",
    ],
    cons: [
      "Still requires a sales call and annual contract.",
      "Adobe announced acquiring Semrush parent in Q1 2026 — roadmap uncertainty.",
      "Pricing not public; users report the same noise problem as Crayon.",
    ],
    verdict:
      "If you're already a Semrush shop, Kompyte is the path of least resistance. If you're not, the Adobe acquisition wobble makes this a 'wait six months' option.",
    internalLink: "/vs-kompyte",
    externalDomain: "kompyte.com",
  },
  {
    rank: 4,
    name: "Caelian",
    slug: "caelian",
    tagline: "Hybrid software + analyst hours for human-curated intel.",
    bestFor:
      "Teams who want a vendor to do the analyst work for them — fewer alerts, more curated digests.",
    startingPrice: "$199 per month + analyst time",
    pros: [
      "Human-curated digests reduce the noise problem dramatically.",
      "Reasonable starting price vs Crayon.",
      "Good for teams without internal PMM bandwidth.",
    ],
    cons: [
      "8–15 analyst hours per week baked into the workflow.",
      "Turnaround for new competitor research is days, not minutes.",
      "Less control over what gets surfaced.",
    ],
    verdict:
      "If you want intel delivered like a service rather than a tool, Caelian is the cleanest option in this list. The trade-off: you're paying for humans, so it scales slower than software.",
    internalLink: "/vs-caelian",
    externalDomain: "caelian.io",
  },
  {
    rank: 5,
    name: "Changeflow",
    slug: "changeflow",
    tagline: "Lightweight change-detection focused on product launches.",
    bestFor:
      "Product teams who specifically want to track competitor product/changelog updates — not full CI.",
    startingPrice: "$29 per month",
    pros: [
      "Cheap, simple, no sales call.",
      "Good for tracking changelog and release-notes pages.",
      "Slack integration on the entry tier.",
    ],
    cons: [
      "Narrower scope than Crayon — not really a CI platform.",
      "No AI summarization on lower tiers.",
      "Lighter pricing-page detection vs purpose-built tools.",
    ],
    verdict:
      "Solid pick if 'CI' really means 'know when competitors ship features.' If you also care about pricing changes, positioning shifts, and hiring signals, you'll outgrow this fast.",
    internalLink: "/vs-changeflow",
    externalDomain: "changeflow.io",
  },
  {
    rank: 6,
    name: "Visualping",
    slug: "visualping",
    tagline: "Generic website change detection (the OG screenshot diff tool).",
    bestFor:
      "Single-page monitoring use cases. Compliance teams. Personal projects. People monitoring one specific pricing page.",
    startingPrice: "Free / $14 per month",
    pros: [
      "Cheapest paid option in this list.",
      "Reliable visual diff engine for static pages.",
      "Works for any URL — not CI-specific.",
    ],
    cons: [
      "Often fails silently on React/Next.js sites (empty div detection).",
      "No AI summarization — you get a screenshot diff and figure it out.",
      "Slack integration is $140/mo, which closes the price gap fast.",
      "No competitive context (it doesn't know what 'pricing' means).",
    ],
    verdict:
      "Fine for monitoring 1–3 specific URLs as a hobbyist. As soon as you want context ('why does this matter?'), you'll be back to copy-pasting into Claude manually.",
    externalDomain: "visualping.io",
  },
  {
    rank: 7,
    name: "Google Alerts + changedetection.io",
    slug: "diy",
    tagline: "The DIY stack — free, partial, and brittle.",
    bestFor:
      "Pre-revenue founders. Side projects. Teams who want to prove they need real CI before spending money.",
    startingPrice: "Free",
    pros: [
      "Free.",
      "Google Alerts catches PR and content mentions.",
      "changedetection.io is open-source and self-hostable.",
    ],
    cons: [
      "Google Alerts misses ~80% of website changes (it's a content index, not a monitor).",
      "changedetection.io needs configuration per URL and doesn't interpret anything.",
      "No AI, no digests, no Slack delivery without custom work.",
      "Combined setup takes 2–3 hours; you'll spend another 30 min/week maintaining it.",
    ],
    verdict:
      "Use this for a month to confirm you need CI. The moment you have a real lost deal traced to a competitor change you missed, upgrade to a real tool.",
  },
];

const comparisonFaqs = [
  {
    question: "Why is everyone looking for a Crayon alternative right now?",
    answer:
      "Crayon was acquired by SoftwareOne for $1.4B in April 2026. Acquisitions of CI platforms historically mean enterprise repricing, slower roadmaps, and pressure on SMB-tier customers to upgrade. Several Crayon customers approaching renewal have reported quotes 30–80% higher than prior years, and the product roadmap has clearly tilted toward enterprise procurement features.",
  },
  {
    question: "What's the cheapest Crayon alternative?",
    answer:
      "For free, the DIY combo of Google Alerts + changedetection.io covers basic monitoring (but with significant blind spots). For paid, KompWatch's Pro tier at $49/mo is the cheapest tool purpose-built for SaaS competitive intelligence — including AI digests, multi-competitor tracking, and Slack delivery.",
  },
  {
    question: "Which Crayon alternative is best for small teams?",
    answer:
      "KompWatch. The platform is designed around self-serve onboarding (paste URL, get digest), no sales call, and pricing that scales with team size rather than enterprise procurement cycles. Klue and Kompyte are stronger if you have a dedicated CI analyst — but if you don't, that's $80K+/yr in headcount before the software even matters.",
  },
  {
    question: "Can I just keep using Crayon at my current price?",
    answer:
      "For your current contract term, yes. The acquisition doesn't void existing agreements. The question is what happens at renewal. Several Crayon SMB customers have reported renewal quotes that pushed them out of their budget range, which is what's driving alternative searches in mid-2026.",
  },
  {
    question: "What features will I lose moving off Crayon?",
    answer:
      "If you used Crayon's full enterprise stack (battlecard portal, sales playbook distribution, CRM-native delivery, analyst services), you'll lose some of that depth on every alternative in this list. If you used Crayon primarily for the underlying competitor-change signals — what KompWatch and Changeflow focus on — you lose nothing; you just stop paying enterprise prices for monitoring.",
  },
  {
    question: "How long does it take to migrate from Crayon?",
    answer:
      "Most teams switch in 15–30 minutes for the data setup. The longer task is auditing your team's workflows. If your CI sits inside Salesforce or your battlecard portal, plan a 30-day side-by-side trial before cutting Crayon entirely. KompWatch has a dedicated switching-from-crayon guide that walks through the migration step-by-step.",
  },
  {
    question: "Is the SoftwareOne acquisition definitely going to change Crayon?",
    answer:
      "Acquisitions historically do change SaaS pricing and product priorities within 6–18 months. SoftwareOne is a publicly traded enterprise IT services company — their economic incentive is enterprise expansion, not SMB self-serve. Whether that affects your specific contract depends on your renewal timing and account size.",
  },
];

export default function CrayonAlternativePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "Crayon Alternatives", path: "/vs/crayon-alternative" },
        ]}
      />
      <SoftwareApplicationSchema />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/40 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-700">
            <Link href="/compare" className="hover:underline">
              ← All comparisons
            </Link>
            <span className="text-gray-300">·</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-900">
              Updated May 2026 · Post-SoftwareOne acquisition
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            7 Best Crayon Alternatives in 2026
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Crayon was acquired by SoftwareOne for $1.4B in April 2026. If your renewal
            is coming up — or your quote just landed and it&apos;s 30%+ higher than last year
            — you have options. Here&apos;s an honest, ranked comparison of the seven
            best alternatives, from free DIY stacks to enterprise CI platforms.
          </p>
          <p className="mt-4 text-base text-gray-600">
            We sell one of the tools in this list (KompWatch — #1, full disclosure). The
            rest of the ranking is our genuine take based on customer migrations,
            published pricing, G2 review patterns, and how the SoftwareOne deal reshapes
            the buying decision.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <TrackedCTA
              href="/signup?utm_source=crayon-alternative"
              event="crayon-alternative-cta-click"
              eventProps={{ position: "hero", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Try KompWatch free (2 minutes)
            </TrackedCTA>
            <TrackedCTA
              href="/switching-from-crayon"
              event="crayon-alternative-cta-click"
              eventProps={{ position: "hero", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              How to switch from Crayon →
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* TL;DR table */}
      <section className="border-b border-gray-100 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            The quick answer
          </h2>
          <p className="mt-3 text-gray-600">
            If you don&apos;t want to read 2,000 words: here&apos;s the matrix.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Tool</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Starting price</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {alternatives.map((alt) => (
                  <tr key={alt.slug} className={alt.rank === 1 ? "bg-brand-50/40" : ""}>
                    <td className="px-4 py-3 font-mono text-gray-500">{alt.rank}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      <a href={`#${alt.slug}`} className="hover:text-brand-600 hover:underline">
                        {alt.name}
                      </a>
                      {alt.rank === 1 && (
                        <span className="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                          Our pick
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{alt.startingPrice}</td>
                    <td className="px-4 py-3 text-gray-600">{alt.bestFor.split(".")[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why look for an alternative */}
      <section className="border-b border-gray-100 bg-gray-50/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Why people are searching &quot;Crayon alternative&quot; in 2026
          </h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <p>
              Crayon&apos;s acquisition by SoftwareOne (announced April 2026, $1.4B
              all-cash) changed the buyer math in three ways:
            </p>
            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong className="text-gray-900">Renewal pricing pressure.</strong>{" "}
                Median Crayon contract size on vendr.com sits around $28,750/yr.
                Post-acquisition renewals are reportedly trending 20–40% higher as
                SoftwareOne consolidates pricing toward enterprise tiers.
              </li>
              <li>
                <strong className="text-gray-900">Roadmap focus shift.</strong>{" "}
                SoftwareOne is a publicly traded enterprise IT services company.
                Acquisitions in this category typically deprioritize the SMB self-serve
                motion within 12–18 months. If you&apos;re a 30-person team on the
                lowest Crayon tier, you&apos;re not the customer they&apos;re building
                for next.
              </li>
              <li>
                <strong className="text-gray-900">The 80/20 problem.</strong> Most
                SMB Crayon customers used roughly 20% of the platform — pricing-page
                monitoring, feature tracking, weekly digests. Paying enterprise prices
                for a fraction of the feature set was already a stretch. The
                acquisition makes that math worse.
              </li>
            </ol>
            <p>
              None of this means Crayon stopped being a good product. It means the
              alignment between Crayon and the SMB buyer just got noticeably weaker —
              and that&apos;s why search volume for &quot;Crayon alternative&quot; is
              up sharply in the last six weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed alternatives */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            The 7 alternatives, ranked
          </h2>
          <div className="mt-10 space-y-12">
            {alternatives.map((alt) => (
              <article
                key={alt.slug}
                id={alt.slug}
                className={`scroll-mt-20 rounded-xl border ${
                  alt.rank === 1 ? "border-brand-200 bg-brand-50/30" : "border-gray-200 bg-white"
                } p-6 sm:p-8`}
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xl font-semibold text-gray-400">
                    #{alt.rank}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">{alt.name}</h3>
                  {alt.rank === 1 && (
                    <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                      Our pick for SMB
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base font-medium text-gray-700">{alt.tagline}</p>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Starting price
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">{alt.startingPrice}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Best for
                    </dt>
                    <dd className="mt-1 text-base text-gray-900">{alt.bestFor}</dd>
                  </div>
                </dl>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700">Pros</h4>
                    <ul className="mt-2 space-y-2 text-sm text-gray-700">
                      {alt.pros.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-1 text-green-500">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-rose-700">Cons</h4>
                    <ul className="mt-2 space-y-2 text-sm text-gray-700">
                      {alt.cons.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="mt-1 text-rose-500">✗</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-md border-l-4 border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                  <strong className="text-gray-900">Verdict:</strong> {alt.verdict}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {alt.rank === 1 ? (
                    <TrackedCTA
                      href="/signup?utm_source=crayon-alternative&utm_content=card"
                      event="crayon-alternative-cta-click"
                      eventProps={{ position: "card", variant: "primary", rank: String(alt.rank) }}
                      className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700"
                    >
                      Try KompWatch free →
                    </TrackedCTA>
                  ) : null}
                  {alt.internalLink && (
                    <TrackedCTA
                      href={alt.internalLink}
                      event="crayon-alternative-cta-click"
                      eventProps={{
                        position: "card",
                        variant: "compare",
                        rank: String(alt.rank),
                        target: alt.slug,
                      }}
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {alt.rank === 1 ? "KompWatch home" : `Full ${alt.name} comparison →`}
                    </TrackedCTA>
                  )}
                  {alt.externalDomain && (
                    <span className="inline-flex items-center text-xs text-gray-500">
                      {alt.externalDomain}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we ranked */}
      <section className="border-t border-gray-100 bg-gray-50/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            How we ranked these
          </h2>
          <p className="mt-4 text-gray-700">
            This isn&apos;t a sponsored top-10. We weighted four things:
          </p>
          <ul className="mt-4 ml-6 list-disc space-y-2 text-gray-700">
            <li>
              <strong>Cost relative to value</strong> — what you pay vs what an SMB team
              actually uses.
            </li>
            <li>
              <strong>Time-to-first-insight</strong> — how long from signup to a useful
              competitor signal.
            </li>
            <li>
              <strong>Signal-to-noise ratio</strong> — does the tool surface what
              matters, or drown you in diffs?
            </li>
            <li>
              <strong>Vendor stability</strong> — independence, roadmap clarity, no
              imminent acquisition/repricing risk.
            </li>
          </ul>
          <p className="mt-6 text-gray-700">
            KompWatch ranks #1 because we built it specifically for the post-Crayon-SMB
            buyer. We&apos;ll happily admit Klue is better for enterprise CI programs,
            Caelian wins on human curation, and Visualping is fine for hobbyists. The
            right answer depends on your team size and budget — but for the
            5–200-person SaaS team that bought Crayon for the actual signals,
            KompWatch is the closest like-for-like at a fraction of the price.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-t border-gray-100 bg-brand-600 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Try the #1 Crayon alternative free
          </h2>
          <p className="mt-4 text-lg text-brand-50">
            Paste your competitor URLs, get your first AI digest within minutes. Free plan
            covers 2 competitors. No credit card, no sales call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedCTA
              href="/signup?utm_source=crayon-alternative&utm_content=midpage"
              event="crayon-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              Start free →
            </TrackedCTA>
            <TrackedCTA
              href="/pricing"
              event="crayon-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              See pricing
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ competitor="Crayon" faqs={comparisonFaqs} />

      {/* Footer nav */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            More comparisons
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/vs-crayon" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Crayon (head-to-head) →
            </Link>
            <Link href="/vs-klue" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Klue →
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Kompyte →
            </Link>
            <Link href="/vs-caelian" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Caelian →
            </Link>
            <Link href="/switching-from-crayon" className="text-sm text-brand-700 hover:underline">
              How to switch from Crayon →
            </Link>
            <Link href="/compare" className="text-sm text-brand-700 hover:underline">
              All KompWatch comparisons →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
