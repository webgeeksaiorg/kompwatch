import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { AlternativesListicleSchema } from "@/components/alternatives-listicle-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "7 Best Semrush Alternatives for Competitor Monitoring in 2026 (Post-Adobe Acquisition)",
  description:
    "Adobe is acquiring Semrush — and Kompyte (Semrush's CI product) is now three layers deep. If you used Semrush for competitor monitoring, here are the 7 best independent alternatives, ranked by price, fit, and roadmap stability.",
  keywords: [
    "Semrush alternative",
    "Semrush alternatives 2026",
    "best Semrush alternative for competitor monitoring",
    "Semrush competitor monitoring alternative",
    "Semrush competitive intelligence alternative",
    "Semrush Kompyte alternative",
    "Adobe Semrush acquisition alternative",
    "independent competitive intelligence tool",
    "alternatives to Semrush",
    "Semrush replacement",
  ],
  alternates: {
    canonical: `${siteUrl}/vs/semrush-alternative`,
  },
  openGraph: {
    title:
      "7 Best Semrush Alternatives for Competitor Monitoring in 2026 — Ranked Honestly",
    description:
      "Adobe is acquiring Semrush. Kompyte (its CI product) is now buried three layers deep. Here are 7 independent Semrush alternatives — from $0 to enterprise — with honest takes on each.",
    url: `${siteUrl}/vs/semrush-alternative`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Semrush Alternatives for Competitor Monitoring in 2026",
    description:
      "Adobe is acquiring Semrush. If you used Semrush's CI stack (Kompyte, .Trends), here are 7 independent alternatives — from free tools to enterprise CI.",
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
    tagline:
      "The self-serve, AI-powered Semrush alternative built for competitor monitoring — no SEO suite, no enterprise contract.",
    bestFor:
      "Founders, PMMs, and 5-200 person SaaS teams who used Semrush (or Kompyte inside Semrush) for competitor tracking and don't want to be dragged into Adobe's enterprise marketing suite.",
    startingPrice: "Free / $49 per month",
    pros: [
      "Self-serve signup — paste a competitor URL, get tracking in under 2 minutes.",
      "AI digests powered by Claude — plain-English summaries of what changed and why it matters.",
      "CSS-selector targeting lets you monitor specific page sections (pricing tiers, feature grids, hero copy) rather than whole pages.",
      "Independent vendor — no parent-company acquisition risk, no enterprise repricing cycle.",
      "Free plan covers 2 competitors with weekly digests; Pro at $49/mo covers 10 competitors daily.",
      "Focused scope: competitor monitoring only. You don't pay for SEO/PPC modules you already have elsewhere.",
    ],
    cons: [
      "No SEO keyword tracking, backlink analysis, or PPC intelligence (by design — use Ahrefs, Serpstat, or free tools for that).",
      "No sales-enablement battlecard portal (Klue and Crayon own that motion).",
      "Newer brand — smaller enterprise reference base than Semrush.",
    ],
    verdict:
      "If the Semrush feature you actually depended on was competitor monitoring — pricing changes, feature launches, positioning shifts, hiring signals — KompWatch delivers that same signal at ~90% less cost, without the SEO suite you may not need. If you also lived inside Semrush for keyword research and backlinks, pair KompWatch with a dedicated SEO tool.",
    internalLink: "/",
  },
  {
    rank: 2,
    name: "Kompyte (standalone, while it lasts)",
    slug: "kompyte",
    tagline:
      "The CI product Semrush already owned — the product you're probably fleeing.",
    bestFor:
      "Teams already on a Kompyte contract who want to run out their renewal before switching, or teams that specifically need the Semrush data integration Kompyte offers.",
    startingPrice: "$499+/mo (SMB tier, confirmed via debriefing.io)",
    pros: [
      "Mature CI feature set — battlecards, alerts, competitor tracking.",
      "Native Semrush data integration (keywords, traffic estimates) if you have both.",
      "Established customer base, well-documented workflows.",
    ],
    cons: [
      "Now owned by Semrush, which Adobe is acquiring in 2026 — two acquisition layers between you and the roadmap.",
      "$499/mo minimum is 10x the KompWatch Pro tier for overlapping core functionality.",
      "Alert noise is the #1 G2 complaint — the interpretation layer is thin.",
      "No self-serve; sales cycle required.",
    ],
    verdict:
      "The reason you're on this page is probably that Kompyte's future is uncertain. Staying on Kompyte only makes sense if you actively use the Semrush data integration and are willing to accept post-Adobe repricing risk. Otherwise, switch before renewal.",
    internalLink: "/vs/kompyte-alternative",
    externalDomain: "kompyte.com",
  },
  {
    rank: 3,
    name: "Klue",
    slug: "klue",
    tagline:
      "Enterprise CI with best-in-class battlecards and sales enablement.",
    bestFor:
      "100+ person companies with a dedicated CI analyst, CRM-native workflows, and a sales-enablement program that needs battlecard distribution.",
    startingPrice: "Quote — typically $16K-$60K+/yr",
    pros: [
      "Best-in-class battlecard distribution into Salesforce, HubSpot, and Slack.",
      "Analyst-curated intelligence layer on top of automated collection.",
      "'Compete Agent' AI for autonomous threat detection (launched 2026).",
      "4.7/5 on G2 (441 reviews) — strongest enterprise references in the CI category.",
    ],
    cons: [
      "Sales cycle measured in weeks. No self-serve trial.",
      "Alert noise is the #1 G2 complaint here too — same problem many Semrush/Kompyte users are fleeing.",
      "Requires dedicated PMM or analyst headcount ($80K+/yr) to extract full value.",
      "Overkill if you just wanted to know when competitors change pricing.",
    ],
    verdict:
      "If you outgrew Semrush's CI features because you need deeper sales enablement and CRM integration, Klue is the natural upgrade. If you left Semrush over cost, noise, or acquisition worry — Klue has the same noise problem at a much higher price point.",
    internalLink: "/vs/klue-alternative",
    externalDomain: "klue.com",
  },
  {
    rank: 4,
    name: "Crayon",
    slug: "crayon",
    tagline:
      "Enterprise CI platform (acquired by SoftwareOne for $1.4B in April 2026).",
    bestFor:
      "Enterprise teams (500+ employees) with existing CI programs who need a mature platform and can absorb post-acquisition pricing changes.",
    startingPrice: "Quote — typically $20K-$40K+/yr",
    pros: [
      "Deepest CI feature set in the category — battlecards, playbooks, analyst services.",
      "Strong integration ecosystem (Salesforce, HubSpot, Gong, Slack).",
      "Large customer base — well-documented migration paths.",
    ],
    cons: [
      "Acquired by SoftwareOne (April 2026) — same acquisition-uncertainty pattern you may be fleeing Semrush over.",
      "Post-acquisition renewal quotes reportedly 20-40% higher.",
      "Enterprise-only focus is accelerating — SMB tiers are deprioritized.",
      "No self-serve signup.",
    ],
    verdict:
      "Trading Semrush/Kompyte acquisition risk for Crayon acquisition risk makes little sense unless you specifically need Crayon's deeper enterprise features. Both parents (Adobe/SoftwareOne) are enterprise-first — the SMB motion is at risk in both cases.",
    internalLink: "/vs/crayon-alternative",
    externalDomain: "crayon.com",
  },
  {
    rank: 5,
    name: "Caelian",
    slug: "caelian",
    tagline:
      "Hybrid software + human-analyst hours for curated competitor intel.",
    bestFor:
      "Teams who want a vendor to do the analyst work for them — fewer alerts, more curated briefings.",
    startingPrice: "$199 per month + analyst time",
    pros: [
      "Human-curated digests dramatically reduce the noise problem.",
      "Reasonable starting price vs Kompyte and enterprise tools.",
      "Good for teams without internal PMM bandwidth.",
    ],
    cons: [
      "8-15 analyst hours per week baked into the workflow.",
      "Turnaround for new competitor research is days, not minutes.",
      "Less control over what gets surfaced and when.",
    ],
    verdict:
      "If your main frustration with Semrush/Kompyte was information overload and you'd rather pay for human curation than configure filters yourself, Caelian is the cleanest option. The trade-off: it scales slower than pure software.",
    externalDomain: "caelian.io",
  },
  {
    rank: 6,
    name: "Visualping",
    slug: "visualping",
    tagline:
      "Generic website change detection — the OG screenshot diff tool.",
    bestFor:
      "Single-page monitoring use cases. Compliance teams. People monitoring one specific pricing page.",
    startingPrice: "Free / $14 per month",
    pros: [
      "Cheapest paid option in this list.",
      "Reliable visual diff engine for static pages.",
      "Works for any URL — not CI-specific.",
    ],
    cons: [
      "Often fails silently on React/Next.js sites (empty div detection).",
      "No AI summarization — you get a screenshot diff and figure it out yourself.",
      "Slack integration is $140/mo, which closes the price gap fast.",
      "No competitive context — it doesn't understand what 'pricing' or 'feature' means.",
    ],
    verdict:
      "Fine for monitoring 1-3 specific URLs as a hobbyist. The moment you need context about why a change matters, you'll be back to copy-pasting diffs into ChatGPT.",
    externalDomain: "visualping.io",
  },
  {
    rank: 7,
    name: "Google Alerts + changedetection.io (DIY)",
    slug: "diy",
    tagline: "The DIY stack — free, partial, and brittle.",
    bestFor:
      "Pre-revenue founders. Side projects. Teams who want to prove they need CI before spending money.",
    startingPrice: "Free",
    pros: [
      "Free.",
      "Google Alerts catches PR and content mentions.",
      "changedetection.io is open-source and self-hostable.",
    ],
    cons: [
      "Google Alerts misses ~80% of website changes (it's a content index, not a monitor).",
      "changedetection.io needs per-URL configuration and doesn't interpret anything.",
      "No AI, no digests, no Slack delivery without custom glue code.",
      "Combined setup takes 2-3 hours; plan 30 min/week maintaining it.",
    ],
    verdict:
      "Use this for a month to confirm you need CI. The moment you have a real lost deal traced to a competitor move you missed, upgrade to a real tool.",
  },
];

const comparisonFaqs = [
  {
    question:
      "Why are people searching for a Semrush alternative in 2026?",
    answer:
      "Adobe announced plans to acquire Semrush in Q1 2026. Semrush owns Kompyte — the competitive intelligence product many teams originally signed up for. Large acquisitions in the SEO/CI space historically lead to enterprise repricing, product consolidation, and deprioritization of standalone features. Teams that depend on Semrush for competitor monitoring specifically (not keyword research or backlinks) are evaluating narrower, independent alternatives before renewal.",
  },
  {
    question:
      "Is this page about Semrush's SEO product or the Kompyte CI product inside Semrush?",
    answer:
      "This page focuses on the competitor-monitoring use case — the workflow that Kompyte (owned by Semrush) covers, and that some teams also stitched together from Semrush's .Trends and Position Tracking modules. If you're looking for a general SEO/keyword-research alternative to Semrush, tools like Ahrefs, Serpstat, or SE Ranking are the standard picks; this page won't be the right list for you. If you're looking specifically for competitor monitoring — pricing changes, feature launches, positioning shifts — the tools ranked above are the honest options.",
  },
  {
    question:
      "What's the cheapest Semrush alternative for competitor monitoring?",
    answer:
      "For free, the DIY combo of Google Alerts + changedetection.io covers basic monitoring (with significant gaps). For paid, KompWatch at $49/mo is the cheapest purpose-built CI tool — including AI-powered digests, multi-competitor tracking, and Slack + email delivery. That's roughly 10x cheaper than the confirmed $499/mo entry price for Kompyte inside Semrush.",
  },
  {
    question:
      "Which Semrush alternative is best for small teams that only need CI?",
    answer:
      "KompWatch. It's designed for self-serve onboarding (paste a URL, get a digest), requires no sales call, and pricing scales with the number of competitors rather than enterprise procurement cycles. If you have a dedicated CI analyst and need CRM-native battlecard distribution, Klue is the better (but much more expensive) fit.",
  },
  {
    question:
      "Will Adobe actually change Semrush and Kompyte?",
    answer:
      "Adobe is acquiring Semrush as part of a broader marketing-suite play. Historically, when a large platform acquires a niche tool, the niche tool gets folded into the platform's enterprise motion within 12-18 months. Whether that directly affects your Semrush or Kompyte contract depends on timing, but the roadmap risk is real — especially for the standalone Kompyte SMB tier.",
  },
  {
    question: "Can I use KompWatch alongside Semrush?",
    answer:
      "Yes — many teams do exactly this. Keep Semrush (or Ahrefs) for keyword research, backlinks, and rank tracking; use KompWatch for competitor page monitoring, pricing alerts, feature detection, and AI digests. The two tools solve different problems and the workflows don't overlap. There's a dedicated FAQ on this at /faq/can-i-run-kompwatch-alongside-semrush.",
  },
  {
    question: "How long does it take to migrate from Semrush/Kompyte?",
    answer:
      "Most teams set up KompWatch in 15-30 minutes. The longer task is auditing your internal workflows — if battlecards or alerts are distributed through Kompyte into your CRM, plan a 30-day overlap. For monitoring-only use cases, the switch is same-day: export your competitor list, paste URLs into the new tool, and you're live.",
  },
  {
    question: "Is KompWatch biased in this comparison?",
    answer:
      "Yes — we sell KompWatch and we ranked it #1. Full disclosure. The rest of the ranking is our genuine assessment based on published pricing (Kompyte $499/mo SMB confirmed via debriefing.io), G2 review patterns, customer migrations we've supported, and the Adobe/Semrush and SoftwareOne/Crayon acquisition impact. We'll happily admit Klue is better for enterprise CI programs, Caelian wins on human curation, and Visualping is fine for single-page hobbyist monitoring.",
  },
];

export default function SemrushAlternativePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compare", path: "/compare" },
          { name: "Semrush Alternatives", path: "/vs/semrush-alternative" },
        ]}
      />
      <SoftwareApplicationSchema />
      <AlternativesListicleSchema
        pageUrl={`${siteUrl}/vs/semrush-alternative`}
        listName="7 Best Semrush Alternatives for Competitor Monitoring in 2026"
        alternatives={alternatives}
        faqs={comparisonFaqs}
      />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/40 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-700">
            <Link href="/compare" className="hover:underline">
              &larr; All comparisons
            </Link>
            <span className="text-gray-300">&middot;</span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-900">
              Updated August 2026 &middot; Post-Adobe/Semrush acquisition
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            7 Best Semrush Alternatives for Competitor Monitoring in 2026
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Adobe is acquiring Semrush, and Semrush owns Kompyte &mdash; the
            competitive intelligence product many teams originally signed up
            for. That&apos;s two acquisition layers between you and the CI
            roadmap. If your renewal is approaching, or you&apos;re worried
            about the SMB tier getting deprioritized, you have options.
            Here&apos;s an honest, ranked comparison of the seven best
            alternatives, from free DIY stacks to enterprise CI platforms.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Scope note: this list is about the <strong>competitor monitoring</strong>
            {" "}side of Semrush &mdash; the workflow Kompyte covers, plus what teams
            stitched from .Trends and Position Tracking. If you&apos;re looking
            for a general SEO / keyword-research alternative, Ahrefs and
            Serpstat are the standard picks; this page won&apos;t be the right
            list for you.
          </p>
          <p className="mt-4 text-base text-gray-600">
            We sell one of the tools in this list (KompWatch &mdash; #1, full
            disclosure). The rest of the ranking is our genuine take based on
            customer migrations, published pricing, G2 review patterns, and how
            the Adobe/Semrush and SoftwareOne/Crayon deals reshape the buying
            decision.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <TrackedCTA
              href="/signup?utm_source=semrush-alternative"
              event="semrush-alternative-cta-click"
              eventProps={{ position: "hero", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Try KompWatch free (2 minutes)
            </TrackedCTA>
            <TrackedCTA
              href="/for-semrush-users"
              event="semrush-alternative-cta-click"
              eventProps={{ position: "hero", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Semrush users landing &rarr;
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
            Why people are searching &quot;Semrush alternative&quot; in 2026
          </h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <p>
              Adobe announced plans to acquire Semrush in Q1 2026. Semrush, in
              turn, owns Kompyte. That&apos;s two acquisition layers between a
              CI user and the team building the product. It changes the buyer
              math in three ways:
            </p>
            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong className="text-gray-900">Acquisition uncertainty.</strong>{" "}
                When a major platform acquires a broader SEO suite (which owns a
                niche CI tool), the CI tool historically gets folded into the
                platform&apos;s enterprise motion. Kompyte&apos;s standalone
                SMB tier is the most exposed layer &mdash; and that&apos;s the
                tier most non-enterprise teams are on.
              </li>
              <li>
                <strong className="text-gray-900">The bundle-tax problem.</strong>{" "}
                Semrush&apos;s value proposition for CI users was partly the
                bundle &mdash; SEO, PPC, and CI data in one platform. If Adobe
                repackages Semrush into an enterprise marketing suite, the CI
                seat may get repriced or restructured. Confirmed public pricing
                for Kompyte inside Semrush is already $499/mo minimum for SMB
                (per debriefing.io) &mdash; roughly 10x standalone
                CI-monitoring alternatives.
              </li>
              <li>
                <strong className="text-gray-900">The noise problem.</strong>{" "}
                Independent of the acquisition, Kompyte and Semrush CI users
                consistently report the same issue: too many alerts, not enough
                signal. G2 reviews cite information overload as the top
                complaint. Teams are using the acquisition as a catalyst to
                evaluate whether a less noisy, more focused tool exists.
              </li>
            </ol>
            <p>
              None of this means Semrush stopped being a functional SEO
              platform. It means the risk/value equation shifted for the
              <em> competitor monitoring</em> use case specifically &mdash; and
              that&apos;s why search volume for &quot;Semrush alternative&quot;
              (in a CI context) spiked in early 2026.
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
                          <span className="mt-1 text-green-500">&check;</span>
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
                          <span className="mt-1 text-rose-500">&cross;</span>
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
                      href="/signup?utm_source=semrush-alternative&utm_content=card"
                      event="semrush-alternative-cta-click"
                      eventProps={{ position: "card", variant: "primary", rank: String(alt.rank) }}
                      className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700"
                    >
                      Try KompWatch free &rarr;
                    </TrackedCTA>
                  ) : null}
                  {alt.internalLink && (
                    <TrackedCTA
                      href={alt.internalLink}
                      event="semrush-alternative-cta-click"
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
              <strong>Cost relative to value</strong> &mdash; what you pay vs
              what an SMB team actually uses.
            </li>
            <li>
              <strong>Time-to-first-insight</strong> &mdash; how long from
              signup to a useful competitor signal.
            </li>
            <li>
              <strong>Signal-to-noise ratio</strong> &mdash; does the tool
              surface what matters, or drown you in diffs?
            </li>
            <li>
              <strong>Vendor stability</strong> &mdash; independence, roadmap
              clarity, no imminent acquisition/repricing risk.
            </li>
          </ul>
          <p className="mt-6 text-gray-700">
            KompWatch ranks #1 because we built it for the exact buyer who&apos;s
            searching &quot;Semrush alternative&quot; for competitor monitoring
            right now: a lean SaaS team that needs the CI signals without the
            SEO suite, the enterprise contract, or the acquisition anxiety.
            Klue is better for enterprise CI programs, Caelian wins on human
            curation, and the DIY stack is fine for validation. The right
            answer depends on your team size, budget, and whether you also
            needed Semrush&apos;s SEO tooling.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-t border-gray-100 bg-brand-600 py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Try the #1 Semrush alternative for competitor monitoring
          </h2>
          <p className="mt-4 text-lg text-brand-50">
            Paste your competitor URLs, get your first AI digest within
            minutes. Free plan covers 2 competitors. No credit card, no sales
            call, no SEO suite you didn&apos;t ask for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedCTA
              href="/signup?utm_source=semrush-alternative&utm_content=midpage"
              event="semrush-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "primary" }}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              Start free &rarr;
            </TrackedCTA>
            <TrackedCTA
              href="/pricing"
              event="semrush-alternative-cta-click"
              eventProps={{ position: "midpage", variant: "secondary" }}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              See pricing
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ competitor="Semrush" faqs={comparisonFaqs} />

      {/* Footer nav */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            More comparisons
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/vs/kompyte-alternative" className="text-sm text-brand-700 hover:underline">
              Best Kompyte alternatives &rarr;
            </Link>
            <Link href="/for-semrush-users" className="text-sm text-brand-700 hover:underline">
              KompWatch for Semrush users &rarr;
            </Link>
            <Link href="/vs/klue-alternative" className="text-sm text-brand-700 hover:underline">
              Best Klue alternatives &rarr;
            </Link>
            <Link href="/vs/crayon-alternative" className="text-sm text-brand-700 hover:underline">
              Best Crayon alternatives &rarr;
            </Link>
            <Link href="/vs/visualping-alternative" className="text-sm text-brand-700 hover:underline">
              Best Visualping alternatives &rarr;
            </Link>
            <Link href="/compare" className="text-sm text-brand-700 hover:underline">
              All KompWatch comparisons &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
