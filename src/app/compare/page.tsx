import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "KompWatch Alternatives & Comparisons — How We Stack Up",
  description:
    "See how KompWatch compares to Crayon, Klue, Kompyte, HeadsUp, Changeflow, and 10 other competitive intelligence tools. Honest side-by-side breakdowns — pricing, features, and setup time.",
  keywords: [
    "competitive intelligence tools comparison",
    "Crayon alternative",
    "Klue alternative",
    "Kompyte alternative",
    "competitor monitoring tools",
    "competitive intelligence software",
    "KompWatch alternatives",
    "KompWatch vs",
  ],
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
  openGraph: {
    title: "KompWatch Alternatives & Comparisons",
    description:
      "Honest side-by-side comparisons of KompWatch vs 15 competitive intelligence tools. See pricing, features, and setup differences.",
    url: `${siteUrl}/compare`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch Alternatives & Comparisons",
    description:
      "How does KompWatch stack up against Crayon, Klue, Kompyte, Changeflow, and more? See 14 honest side-by-side comparisons.",
  },
};

const competitors = [
  {
    slug: "crayon",
    name: "Crayon",
    tagline: "Enterprise CI platform",
    price: "$5K\u2013$80K+/yr",
    differentiator: "KompWatch delivers similar website monitoring at a fraction of the cost \u2014 no sales call required.",
  },
  {
    slug: "klue",
    name: "Klue",
    tagline: "Battlecard & CI platform",
    price: "$12K\u2013$100K+/yr",
    differentiator: "Klue excels at battlecards for sales teams. KompWatch focuses on real-time website change detection for product & marketing teams.",
  },
  {
    slug: "kompyte",
    name: "Kompyte",
    tagline: "Semrush-owned CI tool",
    price: "From $10K/yr",
    differentiator: "Kompyte is part of the Semrush suite. KompWatch is standalone, self-serve, and ships AI digests from day one.",
  },
  {
    slug: "google-alerts",
    name: "Google Alerts",
    tagline: "Free mention monitoring",
    price: "Free",
    differentiator: "Google Alerts catches press mentions. KompWatch catches the actual website changes \u2014 pricing edits, feature launches, hiring signals.",
  },
  {
    slug: "visualping",
    name: "Visualping",
    tagline: "Visual website monitoring",
    price: "From $14/mo",
    differentiator: "Visualping shows pixel diffs. KompWatch uses AI to explain what changed and why it matters to your business.",
  },
  {
    slug: "owler",
    name: "Owler",
    tagline: "Company news & data",
    price: "Free / $35/mo",
    differentiator: "Owler aggregates company news and funding. KompWatch monitors the competitor's own website for first-party changes.",
  },
  {
    slug: "rivalsense",
    name: "RivalSense",
    tagline: "AI competitor monitoring",
    price: "From $49/mo",
    differentiator: "Similar price point. KompWatch differentiates with headless browser scraping that handles React/SPA sites and deeper AI digests.",
  },
  {
    slug: "battlecard",
    name: "Battlecard",
    tagline: "Sales battlecard tool",
    price: "Contact sales",
    differentiator: "Battlecard is sales-enablement focused. KompWatch is a monitoring layer that feeds upstream intelligence to any workflow.",
  },
  {
    slug: "seeto",
    name: "Seeto",
    tagline: "CI for SMBs",
    price: "Varies",
    differentiator: "Seeto targets advisory-driven CI. KompWatch is fully automated \u2014 set URLs, get AI digests, no consulting required.",
  },
  {
    slug: "caelian",
    name: "Caelian",
    tagline: "Market intelligence",
    price: "Contact sales",
    differentiator: "Caelian covers broad market intelligence. KompWatch narrows in on competitor website changes with sub-hour detection.",
  },
  {
    slug: "already-dev",
    name: "Already.dev",
    tagline: "Feature tracking",
    price: "Varies",
    differentiator: "Already.dev tracks feature announcements. KompWatch tracks the full website \u2014 pricing, features, blog, job listings \u2014 in one tool.",
  },
  {
    slug: "unkover",
    name: "Unkover",
    tagline: "Competitor email monitoring",
    price: "Paid (varies)",
    differentiator: "Unkover monitors competitor emails. KompWatch monitors competitor websites. Different signals \u2014 use both for full coverage.",
  },
  {
    slug: "changeflow",
    name: "Changeflow",
    tagline: "Webpage change monitoring",
    price: "$4/mo",
    differentiator: "Changeflow is the closest direct competitor at $4/mo. KompWatch adds headless browser rendering, CSS selectors, job tracking, and a free tier.",
  },
  {
    slug: "peerpanda",
    name: "PeerPanda",
    tagline: "Self-serve CI tool",
    price: "Free / $29 / $79 / $199",
    differentiator: "PeerPanda Professional is $79/mo for 15 competitors. KompWatch Pro is $49/mo for 10 — 38% cheaper at the tier most teams use, with custom CSS selectors and headless browser rendering.",
  },
  {
    slug: "parano",
    name: "Parano.ai",
    tagline: "AI competitor monitoring",
    price: "$89/mo",
    differentiator: "Parano.ai is the closest direct competitor at $89/mo. KompWatch is 45% cheaper at $49/mo Pro, adds severity classification, CSS selectors, content zones, and a free tier.",
  },
  {
    slug: "headsup",
    name: "HeadsUp",
    tagline: "AI competitor monitoring",
    price: "Free / paid tiers",
    differentiator: "HeadsUp focuses on lightweight AI alerts. KompWatch adds Playwright headless rendering, CSS selector targeting, severity classification, and Claude-powered digests.",
  },
  {
    slug: "spire21",
    name: "Spire21",
    tagline: "Startup competitor monitoring",
    price: "TBD (early access)",
    differentiator: "Spire21 targets early-stage startups but is behind an early-access waitlist. KompWatch is live today with a free tier, AI digests, headless rendering, and no waitlist.",
  },
  {
    slug: "ravenseer",
    name: "RavenSeer",
    tagline: "Competitor monitoring (2024)",
    price: "$25\u2013$150/mo",
    differentiator: "RavenSeer starts at $25/mo with no free tier. KompWatch starts free, adds Playwright headless rendering, Claude-powered AI digests with severity classification, and CSS selector targeting.",
    // No /vs-ravenseer short page exists yet; route to the long-form
    // /compare/kompwatch-vs-ravenseer page so the hub link doesn't 404
    // and the JSON-LD ItemList URL resolves.
    href: "/compare/kompwatch-vs-ravenseer",
  },
  {
    slug: "tona",
    name: "Tona",
    tagline: "AI competitor tracking + team collab",
    price: "From $39/mo",
    differentiator: "Tona offers AI alerts with built-in team collaboration. KompWatch adds Playwright headless rendering, CSS selectors, severity classification, and a free tier Tona doesn\u2019t offer.",
  },
  {
    slug: "kompetar",
    name: "Kompetar",
    tagline: "Affordable competitor monitoring",
    price: "$49/mo",
    differentiator: "Same $49/mo price point as KompWatch Pro. KompWatch adds Claude-powered AI digests, severity classification, CSS selector targeting, headless Playwright rendering, and a free tier Kompetar doesn\u2019t offer.",
    // No /vs-kompetar short page exists yet; route to the long-form
    // /compare/kompwatch-vs-kompetar page so the hub link doesn't 404.
    href: "/compare/kompwatch-vs-kompetar",
  },
  {
    slug: "spyglass",
    name: "Spyglass",
    tagline: "Indie SaaS competitor monitoring",
    price: "$79/mo",
    differentiator: "Spyglass Tracker is $79/mo for 5 competitors with a weekly digest and no free tier. KompWatch Pro is $49/mo for 10 competitors with daily digests \u2014 2\u00d7 the capacity, 62% of the price, plus a free tier to evaluate before you pay.",
    // /compare/kompwatch-vs-spyglass is the long-form comparison; no
    // /vs-spyglass short page exists. Route to the long-form so the hub
    // card resolves and the ItemList JSON-LD URL doesn't 404.
    href: "/compare/kompwatch-vs-spyglass",
  },
  {
    slug: "competely",
    name: "Competely",
    tagline: "AI competitive analysis reports",
    price: "From $39/mo",
    differentiator: "Competely delivers SWOT-style briefs every 2 weeks. KompWatch snapshots every 6 hours and emails a Claude-powered digest per detected change \u2014 plus headless rendering, CSS selectors, and a free tier Competely doesn\u2019t offer.",
    // No /vs-competely short page exists yet; route to the long-form
    // /compare/kompwatch-vs-competely page so the hub link doesn't 404.
    href: "/compare/kompwatch-vs-competely",
  },
];

/**
 * ItemList JSON-LD for /compare hub — surfaces the comparison directory in
 * SERP as a rich-result list. Mirrors the visible grid one-to-one so Google
 * doesn't flag schema/DOM drift (which nukes the rich result).
 *
 * Follows the pattern established on /switch hub (ticket 6b63) and the
 * AlternativesListicleSchema used on /vs/*-alternative pages.
 */
function CompareHubItemListSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KompWatch Alternatives & Comparisons",
    description:
      "Side-by-side comparisons of KompWatch against competitive intelligence tools.",
    url: `${siteUrl}/compare`,
    numberOfItems: competitors.length,
    itemListElement: competitors.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `KompWatch vs ${c.name}`,
      // Some competitors don't have a /vs-{slug} short page yet; those
      // opt into `href` (typically /compare/kompwatch-vs-{slug}). Falling
      // back to /vs-{slug} keeps the 18 existing SERP URLs stable.
      url: `${siteUrl}${c.href ?? `/vs-${c.slug}`}`,
      description: c.differentiator,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Hub-level FAQs rendered visibly in the new FAQ section AND emitted as
 * FAQPage JSON-LD. Vendor-agnostic — vendor-specific FAQs live on the
 * individual /vs-{slug} and /compare/kompwatch-vs-{slug} pages.
 *
 * IMPORTANT: Google FAQPage rich results require the schema question/answer
 * text to match what the user sees on the page. Update both the const and
 * the rendered <dl> together.
 */
const compareFaqs: { question: string; answer: string }[] = [
  {
    question: "How do I pick the right competitive intelligence tool?",
    answer:
      "Start by classifying your need. If you want battlecards and sales enablement, look at Klue or Crayon (enterprise contracts, $12K-$100K/yr). If you want lightweight website change monitoring for a product or marketing team, look at KompWatch, Visualping, or Changeflow (self-serve, $4-$49/mo). If you only care about press mentions, Google Alerts is free. Most SMB and mid-market teams end up on a self-serve tool because the enterprise CI platforms require a 6-8 week sales cycle and a $15K minimum commitment.",
  },
  {
    question: "Why is KompWatch cheaper than Crayon, Klue, or Kompyte?",
    answer:
      "Those three are enterprise platforms sold via sales-led motions with dedicated CSMs, battlecard authoring workflows, and win/loss analysis modules. KompWatch is a focused, self-serve website change monitor \u2014 headless browser snapshots plus Claude-powered AI digests. We skip the sales team, the CSM, and the extra modules, and pass the savings on. Pro is $49/mo for 10 competitors with daily digests.",
  },
  {
    question: "Do I need to book a demo to try KompWatch?",
    answer:
      "No. KompWatch is fully self-serve. Sign up with magic-link email, paste up to 2 competitor URLs on the free tier, and your first snapshot runs within minutes. No credit card required for free. Upgrade to Pro ($49/mo) when you need more competitors or daily digests.",
  },
  {
    question: "Can I run KompWatch alongside my current CI tool?",
    answer:
      "Yes, and we recommend it for teams evaluating a switch. Run both for 2-4 weeks, compare the digests side by side, and see which surfaces the changes your team actually cares about. Then cancel whichever loses. Because KompWatch has a free tier and no annual contract, running in parallel costs nothing (free tier) or $49/mo (Pro).",
  },
  {
    question: "What kinds of competitor changes does KompWatch detect?",
    answer:
      "KompWatch monitors the full competitor website: pricing page edits, feature launches, homepage messaging shifts, blog posts, and job listings. Each detected change is classified by type (CONTENT / VISUAL / PRICING / FEATURE) and severity (LOW / MEDIUM / HIGH), then summarized by Claude in the daily digest email so you don't have to read every diff yourself.",
  },
  {
    question: "How is KompWatch different from Visualping or Changeflow?",
    answer:
      "Visualping and Changeflow show pixel diffs or raw HTML diffs \u2014 useful, but you still have to interpret every change yourself. KompWatch uses Claude to explain what changed and why it matters, adds severity classification, supports CSS selectors so you can target the pricing table or feature list specifically, and renders JavaScript-heavy sites (React, Vue, Next.js) via headless Playwright. Pricing is comparable at $49/mo Pro.",
  },
];

/**
 * FAQPage JSON-LD for /compare hub — mirrors the visible FAQ section below.
 * Update compareFaqs to change both the schema and the rendered <dl> in one edit.
 */
function CompareHubFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: compareFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[{ name: "Compare", path: "/compare" }]} />
      <CompareHubItemListSchema />
      <CompareHubFAQSchema />
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            KompWatch
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <TrackedCTA
              href="/login"
              event="Compare Hub Nav CTA Click"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free
            </TrackedCTA>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            KompWatch vs. the competition
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Honest, side-by-side comparisons of KompWatch against 15 competitive intelligence tools.
            See exactly where we win, where they win, and which tool fits your team.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Hub Hero CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <p className="mt-3 text-sm text-gray-500">
              2 competitors free forever. No sales call.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => (
              <Link
                key={c.slug}
                // Prefer per-entry override (used when the short /vs-{slug}
                // page doesn't exist and we route directly to the long-form
                // /compare/kompwatch-vs-{slug}). Otherwise the default short
                // route keeps the 18 existing cards pointing at their /vs-*
                // canonical URLs.
                href={c.href ?? `/vs-${c.slug}`}
                className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                      KompWatch vs {c.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{c.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {c.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{c.differentiator}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  See full comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop summary */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Why teams choose KompWatch
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-600">$49/mo</div>
              <p className="mt-2 text-sm text-gray-600">
                Pro plan with 10 competitors, 6-hour snapshots, and daily AI digests. No sales call.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">&lt; 2 min</div>
              <p className="mt-2 text-sm text-gray-600">
                From signup to first competitor insight. Paste a URL, get an AI-generated change report.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">Free tier</div>
              <p className="mt-2 text-sm text-gray-600">
                Monitor 2 competitors with weekly digests. No credit card required. Upgrade when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — vendor-agnostic hub questions. Emits FAQPage JSON-LD via
          CompareHubFAQSchema (mounted above). Update compareFaqs to change both. */}
      <section id="faq" className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            KompWatch alternatives — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {compareFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            See for yourself
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with the free plan &mdash; add up to 2 competitors, no credit card. Upgrade to Pro
            for 10 competitors and daily AI digests at $49/mo.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Hub Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free &mdash; no credit card required
            </TrackedCTA>
          </div>
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
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
