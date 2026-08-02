import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { AlternativesListicleSchema } from "@/components/alternatives-listicle-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "7 Best Klue Alternatives in 2026 (Ranked Honestly)",
  description:
    "Klue is the enterprise CI leader — but at $16K–$60K/yr with a mandatory sales cycle, most SMB and mid-market teams can't justify it. Here are the 7 best Klue alternatives in 2026, ranked by price, fit, and what they actually do well.",
  keywords: [
    "Klue alternative",
    "Klue alternatives 2026",
    "best Klue alternative",
    "Klue competitor",
    "Klue vs",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Klue pricing",
    "Klue replacement",
    "alternatives to Klue",
    "cheaper than Klue",
  ],
  alternates: {
    canonical: `${siteUrl}/vs/klue-alternative`,
  },
  openGraph: {
    title: "7 Best Klue Alternatives in 2026 — Ranked Honestly",
    description:
      "Klue's median contract is ~$30K/yr and needs a dedicated analyst to extract value. Here are 7 honest Klue alternatives — from free tools to enterprise CI — with real pricing and fit notes.",
    url: `${siteUrl}/vs/klue-alternative`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Klue Alternatives in 2026",
    description:
      "Priced out of Klue? Here are 7 honest alternatives — from free DIY stacks to enterprise CI — with real pricing and fit notes for SMB and mid-market teams.",
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
    tagline: "The independent, self-serve Klue alternative for SMBs and lean teams.",
    bestFor:
      "Founders, PMMs, and 5–200 person SaaS teams who want Klue-style competitor monitoring without the $30K/yr contract, mandatory sales call, or dedicated analyst headcount.",
    startingPrice: "Free / $49 per month",
    pros: [
      "Paste a URL, get tracking in under 2 minutes — no sales call, no onboarding project.",
      "AI digests powered by Claude — plain-English summaries of what actually changed.",
      "CSS-selector targeting kills the noise problem that dominates Klue G2 reviews.",
      "Independent vendor with self-serve pricing (no annual commit required).",
      "Free plan covers 2 competitors with weekly digests.",
      "Pricing-page drop alerts, feature/blog/job monitoring, Slack + email delivery.",
    ],
    cons: [
      "Smaller battlecard library than Klue's enterprise sales enablement portal.",
      "No CRM-native battlecard distribution into Salesforce/HubSpot (yet).",
      "Newer brand — fewer Fortune 500 logos.",
    ],
    verdict:
      "If you were pricing Klue for the actual monitoring signals (pricing changes, feature launches, positioning shifts), KompWatch delivers the same data at ~2% of the cost. The trade-off is Klue's Compete Agent AI and CRM-native battlecard portal — most SMB teams never used those anyway.",
    internalLink: "/",
  },
  {
    rank: 2,
    name: "Crayon",
    slug: "crayon",
    tagline: "Enterprise CI with strong battlecards — now inside SoftwareOne.",
    bestFor:
      "100+ person companies with a dedicated CI analyst who already evaluated Klue and want a lateral enterprise option.",
    startingPrice: "Quote — typically $25K–$100K/yr",
    pros: [
      "Battlecards + Slack/CRM distribution comparable to Klue.",
      "Deep integrations with sales enablement stacks.",
      "Strong enterprise references and analyst curation.",
    ],
    cons: [
      "Acquired by SoftwareOne for $1.4B in April 2026 — renewals reportedly trending 20–40% higher.",
      "Sales cycle in weeks, no self-serve.",
      "Same noise-overload complaints as Klue in G2 reviews.",
    ],
    verdict:
      "A natural lateral move if you already have a CI program and just want a different enterprise vendor. Post-acquisition pricing pressure means you might land somewhere similar to your current Klue quote — evaluate carefully.",
    internalLink: "/vs-crayon",
    externalDomain: "crayon.co",
  },
  {
    rank: 3,
    name: "Kompyte",
    slug: "kompyte",
    tagline: "Mid-market CI with battlecards and the Semrush ecosystem.",
    bestFor:
      "Mid-market teams (50–500 employees) wanting a Klue-like platform with a slightly lower entry point, especially if you already use Semrush for SEO/PPC intelligence.",
    startingPrice: "Quote — typically $10K–$30K/yr",
    pros: [
      "Owned by Semrush — useful if you already run Semrush for SEO/PPC competitive data.",
      "Battlecards + sales playbooks built in.",
      "Tracks web, social, and ad creative changes.",
    ],
    cons: [
      "Still requires a sales call and annual contract.",
      "Adobe announced acquiring Semrush parent in Q1 2026 — roadmap uncertainty.",
      "Pricing not public; users report the same noise problem as Klue.",
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
      "Teams who priced Klue for the analyst-portal experience and want a vendor to do the analyst work directly — fewer alerts, more curated digests.",
    startingPrice: "$199 per month + analyst time",
    pros: [
      "Human-curated digests reduce the noise problem dramatically.",
      "Reasonable starting price vs Klue.",
      "Good for teams without internal PMM bandwidth.",
    ],
    cons: [
      "8–15 analyst hours per week baked into the workflow.",
      "Turnaround for new competitor research is days, not minutes.",
      "Less control over what gets surfaced.",
    ],
    verdict:
      "If Klue's real value to you was the layer of human analysis on top of the software, Caelian is the closest like-for-like at a fraction of the cost. The trade-off is speed — you're paying for humans, so it scales slower.",
    internalLink: "/vs-caelian",
    externalDomain: "caelian.io",
  },
  {
    rank: 5,
    name: "Changeflow",
    slug: "changeflow",
    tagline: "Lightweight change-detection focused on product launches.",
    bestFor:
      "Product teams who specifically want to track competitor product/changelog updates — not full CI battlecards.",
    startingPrice: "$29 per month",
    pros: [
      "Cheap, simple, no sales call.",
      "Good for tracking changelog and release-notes pages.",
      "Slack integration on the entry tier.",
    ],
    cons: [
      "Narrower scope than Klue — not really a CI platform.",
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
    question: "Why is everyone looking for a Klue alternative right now?",
    answer:
      "Three reasons: (1) Klue's median contract sits around $30,000/yr per vendr.com data (82 deals sampled) — that's a full FTE-adjacent line item, and boards are scrutinizing enterprise SaaS spend in 2026. (2) Klue's #1 G2 complaint is alert noise / information overload, driving churn among teams without a dedicated analyst. (3) A wave of self-serve CI tools launched in 2025–2026 (KompWatch, HeadsUp, RivalSense, Parano.ai) proving you can get 80% of Klue's core value for 2–5% of the price.",
  },
  {
    question: "What's the cheapest Klue alternative?",
    answer:
      "For free, the DIY combo of Google Alerts + changedetection.io covers basic monitoring (but with significant blind spots). For paid, KompWatch's Pro tier at $49/mo is the cheapest tool purpose-built for SaaS competitive intelligence — including AI digests, multi-competitor tracking, and Slack delivery.",
  },
  {
    question: "Which Klue alternative is best for small teams?",
    answer:
      "KompWatch. The platform is designed around self-serve onboarding (paste URL, get digest), no sales call, and pricing that scales with team size rather than enterprise procurement cycles. Klue is genuinely great — but if you don't have a dedicated CI analyst on staff, you're paying for a portal you can't fully use. That's $80K+/yr in headcount before the software even matters.",
  },
  {
    question: "Does Klue publish pricing?",
    answer:
      "No. Klue requires a sales call for pricing. Public data from vendr.com (82 sampled deals) puts the median Klue contract at ~$30,000/yr, with a typical range of $16K–$60K depending on seats, competitor count, and add-ons like Compete Agent and battlecard portal features.",
  },
  {
    question: "What features will I lose moving off Klue?",
    answer:
      "If you used Klue's full enterprise stack (battlecard portal, sales playbook distribution, CRM-native delivery, Compete Agent AI, analyst services), you'll lose some of that depth on every alternative in this list. If you used Klue primarily for the underlying competitor-change signals — pricing, features, positioning, hiring — you lose nothing; you just stop paying enterprise prices for monitoring.",
  },
  {
    question: "How long does it take to migrate from Klue?",
    answer:
      "Most teams switch the monitoring layer in 15–30 minutes (paste your tracked URLs into the new tool). The longer task is auditing battlecard workflows: if your sales team pulls Klue cards inside Salesforce, plan a 30-day side-by-side trial before cutting Klue entirely. KompWatch has a dedicated switching-from-klue guide walking through the migration step-by-step.",
  },
  {
    question: "Is Klue's Compete Agent AI a good reason to stay?",
    answer:
      "Compete Agent is genuinely impressive — autonomous threat detection layered on top of Klue's data. But it's an add-on to a $30K/yr baseline, so the effective price sits closer to $40K/yr for the AI-enabled tier. If you're comparing that to KompWatch Pro at $49/mo with Claude-powered digests included, the math only favors Compete Agent when you also need Klue's enterprise CRM distribution and battlecard portal.",
  },
];

export default function KlueAlternativePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "Klue Alternatives", path: "/vs/klue-alternative" },
        ]}
      />
      <SoftwareApplicationSchema />
      <AlternativesListicleSchema
        pageUrl={`${siteUrl}/vs/klue-alternative`}
        listName="7 Best Klue Alternatives in 2026"
        alternatives={alternatives}
        faqs={comparisonFaqs}
      />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/40 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-700">
            <Link href="/compare" className="hover:underline">
              ← All comparisons
            </Link>
            <span className="text-gray-300">·</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-900">
              Updated May 2026 · Ranked by SMB fit
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            7 Best Klue Alternatives in 2026
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Klue is the enterprise CI leader — 4.7/5 on G2, strong battlecard
            distribution, and a real analyst layer. It&apos;s also $16K–$60K/yr with a
            mandatory sales cycle. If your renewal just landed and the number was
            higher than expected, or you&apos;re a lean team who never had a CI budget
            to begin with, here&apos;s an honest ranked comparison of the seven best
            alternatives.
          </p>
          <p className="mt-4 text-base text-gray-600">
            We sell one of the tools in this list (KompWatch — #1, full disclosure).
            The rest of the ranking is our genuine take based on customer migrations,
            published pricing (where available), vendr.com deal data, and G2 review
            patterns.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <TrackedCTA
              href="/signup?utm_source=klue-alternative"
              event="klue-alternative-cta-click"
              eventProps={{ position: "hero", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Try KompWatch free (2 minutes)
            </TrackedCTA>
            <TrackedCTA
              href="/switching-from-klue"
              event="klue-alternative-cta-click"
              eventProps={{ position: "hero", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              How to switch from Klue →
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
            Why people are searching &quot;Klue alternative&quot; in 2026
          </h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <p>
              Klue is a genuinely strong product — 4.7/5 on G2 with 441+ reviews, and
              the clear enterprise CI leader. The reason alternative searches are
              trending up in 2026 comes down to three things:
            </p>
            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong className="text-gray-900">Contract size relative to usage.</strong>{" "}
                Vendr.com data (82 sampled Klue deals) puts the median contract at
                ~$30,000/yr. Most SMB and mid-market teams used maybe 20% of the
                platform — the monitoring layer plus a few battlecards. Boards are
                scrutinizing enterprise SaaS spend in 2026, and $30K/yr for a
                20%-utilized tool is a hard line-item to defend.
              </li>
              <li>
                <strong className="text-gray-900">The noise problem.</strong> Klue&apos;s
                #1 G2 complaint pattern is alert overload — dozens of low-signal
                notifications per competitor per week. Extracting value requires a
                dedicated PMM or analyst filtering the firehose. That&apos;s another
                $80K+/yr in headcount on top of the software, and most SMB teams
                don&apos;t have it.
              </li>
              <li>
                <strong className="text-gray-900">Self-serve CI became viable.</strong>{" "}
                Five new SMB-focused CI tools launched in 2025–2026 (KompWatch,
                HeadsUp, RivalSense, Parano.ai, Spire21), all with AI summarization,
                self-serve onboarding, and pricing under $100/mo. The category proved
                you can get the core monitoring value without the enterprise wrapper.
              </li>
            </ol>
            <p>
              None of this means Klue stopped being a good product. It means the
              alignment between Klue and the sub-100-person team just got noticeably
              weaker — and that&apos;s why search volume for &quot;Klue alternative&quot;
              is up sharply this year.
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
                      href="/signup?utm_source=klue-alternative&utm_content=card"
                      event="klue-alternative-cta-click"
                      eventProps={{ position: "card", variant: "primary", rank: String(alt.rank) }}
                      className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700"
                    >
                      Try KompWatch free →
                    </TrackedCTA>
                  ) : null}
                  {alt.internalLink && (
                    <TrackedCTA
                      href={alt.internalLink}
                      event="klue-alternative-cta-click"
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
            KompWatch ranks #1 because we built it specifically for the sub-Klue-price
            SMB buyer. We&apos;ll happily admit Klue is better for enterprise CI programs
            with a dedicated analyst, Crayon offers a comparable enterprise lateral,
            Caelian wins on human curation, and Visualping is fine for hobbyists. The
            right answer depends on your team size and budget — but for the
            5–200-person SaaS team that would pick Klue for the actual monitoring
            signals, KompWatch is the closest like-for-like at a fraction of the price.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-t border-gray-100 bg-brand-600 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Try the #1 Klue alternative free
          </h2>
          <p className="mt-4 text-lg text-brand-50">
            Paste your competitor URLs, get your first AI digest within minutes. Free plan
            covers 2 competitors. No credit card, no sales call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedCTA
              href="/signup?utm_source=klue-alternative&utm_content=midpage"
              event="klue-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              Start free →
            </TrackedCTA>
            <TrackedCTA
              href="/pricing"
              event="klue-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              See pricing
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ competitor="Klue" faqs={comparisonFaqs} />

      {/* Footer nav */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            More comparisons
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/vs-klue" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Klue (head-to-head) →
            </Link>
            <Link href="/vs-crayon" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Crayon →
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-brand-700 hover:underline">
              KompWatch vs Kompyte →
            </Link>
            <Link href="/vs/crayon-alternative" className="text-sm text-brand-700 hover:underline">
              7 best Crayon alternatives →
            </Link>
            <Link href="/switching-from-klue" className="text-sm text-brand-700 hover:underline">
              How to switch from Klue →
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
