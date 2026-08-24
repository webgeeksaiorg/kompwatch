import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitor Monitoring Use Cases — Pricing, Blog, Launches, Battlecards, Win-Loss | KompWatch",
  description:
    "The 10 competitive-intelligence workflows KompWatch is built for: track competitor pricing, monitor blog and content moves, catch product launches early, feed sales battlecards, monitor competitor hiring waves, and run win-loss analysis. Pick the workflow that matches your team — free for 2 competitors, $49/mo for 10.",
  keywords: [
    "competitor monitoring use cases",
    "competitive intelligence use cases",
    "competitor tracking workflows",
    "when to use competitor monitoring",
    "competitive intelligence workflow examples",
    "competitor monitoring for product marketing",
    "competitor monitoring for sales enablement",
    "competitor monitoring for content marketing",
    "competitor monitoring for founders",
    "competitor monitoring for startups",
    "competitor intelligence workflows",
    "competitor tracking scenarios",
    "SaaS competitor monitoring use cases",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case`,
  },
  openGraph: {
    title:
      "Competitor Monitoring Use Cases — Pricing, Blog, Launches, Battlecards | KompWatch",
    description:
      "10 competitive-intelligence workflows KompWatch is built for. Pick the one that matches your team — pricing tracking, launch monitoring, battlecards, hiring signals, win-loss, and more.",
    url: `${siteUrl}/use-case`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Monitoring Use Cases — KompWatch",
    description:
      "10 CI workflows KompWatch is purpose-built for — pricing, blog, launches, battlecards, hiring signals, win-loss. $49/mo for 10 competitors.",
  },
};

/**
 * Each entry corresponds to an existing /use-case/{slug} page. Keep this
 * list in sync with:
 *   - src/app/use-case/{slug}/page.tsx (the destination pages)
 *   - src/app/sitemap.ts (sitemap entries under `/use-case/*`)
 * Adding a new use-case page? Add the slug here too so it appears in the
 * ItemList JSON-LD, the visible hub grid, and topical internal linking.
 */
type UseCase = {
  slug: string;
  title: string;
  headline: string;
  audience: string;
  summary: string;
  primaryKeyword: string;
};

const useCases: UseCase[] = [
  {
    slug: "track-competitor-pricing",
    title: "Track competitor pricing",
    headline: "Catch price hikes, plan restructures, and trial-length changes the day they ship",
    audience: "Product marketing, revenue ops",
    summary:
      "Snapshot competitor pricing pages every 1–6 hours. AI classifies the diff as price change, tier change, or trial change — so you get 'Acme moved API to Enterprise tier' instead of 'page changed, 3 elements differ.'",
    primaryKeyword: "track competitor pricing",
  },
  {
    slug: "monitor-competitor-website",
    title: "Monitor a competitor website",
    headline: "One-URL monitoring for teams that just need to know what changed",
    audience: "Founders, solo operators",
    summary:
      "The simplest workflow: paste a competitor URL, get a digest when something meaningful changes. No CSS selectors to configure, no dashboards to babysit. Free for 2 URLs, works with any public page.",
    primaryKeyword: "monitor competitor website",
  },
  {
    slug: "competitor-feature-tracking",
    title: "Competitor feature tracking",
    headline: "Know the day a competitor ships — before your customer asks about it",
    audience: "PMMs, product managers",
    summary:
      "Track /features, /product, changelog, and release-notes URLs. AI surfaces new feature announcements, deprecated capabilities, and quiet integrations added to the sidebar you'd otherwise miss for 6 weeks.",
    primaryKeyword: "competitor feature tracking",
  },
  {
    slug: "competitor-messaging-changes",
    title: "Competitor messaging changes",
    headline: "Detect when a competitor rewrites their homepage headline or repositions",
    audience: "PMMs, brand marketers",
    summary:
      "Homepage headline pivots, new taglines, category-language shifts, and ICP repositioning all show up first on the marketing site. KompWatch snapshots and diffs the copy — messaging drift is the earliest signal of a strategy shift.",
    primaryKeyword: "competitor messaging changes",
  },
  {
    slug: "competitive-battlecard",
    title: "Competitive battlecards",
    headline: "Keep battlecards current with an always-fresh feed of competitor changes",
    audience: "Sales enablement, product marketing",
    summary:
      "The problem with battlecards isn't authoring them — it's keeping them true. KompWatch pipes competitor pricing, feature, and messaging changes into a feed you can review weekly and update battlecards from, instead of finding out from a lost deal.",
    primaryKeyword: "competitive battlecard",
  },
  {
    slug: "win-loss-analysis",
    title: "Win-loss analysis",
    headline: "Correlate deal outcomes with competitor moves happening in the same week",
    audience: "PMM, revenue operations",
    summary:
      "Win-loss interviews tell you why you lost. KompWatch tells you what the competitor did in the same 30-day window that helped them win. Pair it with a Gong/Chorus/Clozd stack to close the CI loop for solo PMMs and lean revops teams.",
    primaryKeyword: "win loss analysis",
  },
  {
    slug: "product-launch-monitoring",
    title: "Product launch monitoring",
    headline: "Catch a competitor launch the same day — not from a customer email 3 weeks later",
    audience: "PMMs, founders, GTM leads",
    summary:
      "Track competitor changelog, /launch, /whats-new, and product-hunt-style landing pages. Get an AI digest the day a launch drops so your team can respond in the same news cycle — before your customers ask about it in QBRs.",
    primaryKeyword: "track competitor product launches",
  },
  {
    slug: "competitive-intelligence-for-sales-enablement",
    title: "Competitive intelligence for sales enablement",
    headline: "A CI feed sales reps actually open — because it's plain-English and delivered by email",
    audience: "Sales enablement, revenue ops",
    summary:
      "Klue and Crayon are enterprise platforms with seat pricing. If your enablement team is 1–3 people and you just need reps briefed on competitor moves each week, KompWatch delivers that as a Monday-morning email — $49/mo, no seat minimum.",
    primaryKeyword: "competitive intelligence for sales enablement",
  },
  {
    slug: "competitor-blog-monitoring",
    title: "Competitor blog monitoring",
    headline: "Know when a competitor publishes a new post, launches a category, or pivots content",
    audience: "Content marketers, SEO leads",
    summary:
      "RSS tells you a post shipped. KompWatch tells you they added a new category tag, rewrote 3 posts in the same cluster, or retired 40 pages — the strategic signal is in the pattern, not the single post. Purpose-built for solo content marketers running CI on 3–5 competitors.",
    primaryKeyword: "competitor blog monitoring",
  },
  {
    slug: "competitor-job-postings-monitoring",
    title: "Competitor job postings monitoring",
    headline: "Turn hiring signals into 3–6 month roadmap intel before the launch drops",
    audience: "PMMs, founders, CI leads",
    summary:
      "Every new competitor role is a leaked roadmap line — 3 Applied AI Engineers means an AI product is being built. KompWatch snapshots careers pages and Greenhouse/Lever/Ashby boards, then AI-classifies role clusters into product / GTM / AI-pivot signals. Catch the hiring wave 3–6 months before the pricing page changes.",
    primaryKeyword: "competitor job postings monitoring",
  },
];

// ItemList JSON-LD for /use-case hub — surfaces each use-case as a related
// entity in SERP and helps Google understand the topical cluster.
function ItemListSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KompWatch — Competitor Monitoring Use Cases",
    description:
      "The 10 competitive-intelligence workflows KompWatch is purpose-built for, from pricing tracking to competitor hiring-signal monitoring.",
    numberOfItems: useCases.length,
    itemListElement: useCases.map((uc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: uc.title,
      url: `${siteUrl}/use-case/${uc.slug}`,
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
 * Hub-level FAQs rendered visibly AND emitted as FAQPage JSON-LD.
 * IMPORTANT: Google FAQPage rich results require the schema question/answer
 * text to match what the user sees. Update both the const and the rendered
 * <dl> together (they render from this array as the single source of truth).
 */
const hubFaqs: { question: string; answer: string }[] = [
  {
    question: "What are the main use cases for competitor monitoring?",
    answer:
      "The ten workflows KompWatch is purpose-built for are: (1) tracking competitor pricing changes, (2) monitoring a competitor website end-to-end, (3) competitor feature tracking, (4) detecting competitor messaging or positioning changes, (5) keeping competitive battlecards current, (6) win-loss analysis, (7) product launch monitoring, (8) competitive intelligence for sales enablement, (9) competitor blog monitoring, and (10) competitor job postings monitoring. Most teams start with one or two workflows and expand as they see which competitor moves matter to their revenue.",
  },
  {
    question: "Which competitor monitoring use case should I start with?",
    answer:
      "If you are a founder or solo operator, start with 'monitor competitor website' — one URL per competitor is enough for weekly signal. If you are a PMM, start with 'competitor feature tracking' plus 'competitor messaging changes'. If you are in sales enablement, start with 'competitive battlecards'. If you are a content marketer, start with 'competitor blog monitoring'. KompWatch's free tier covers 2 competitor URLs, which is enough to prove the workflow before upgrading to Pro at $49/mo for 10 competitors.",
  },
  {
    question: "Can I combine multiple competitor monitoring workflows in one KompWatch account?",
    answer:
      "Yes. Each competitor URL you add can serve any use case — pricing, blog, features, or messaging. A single Pro account ($49/mo, 10 competitor URLs) typically covers 3–5 competitors deeply across pricing pages, feature pages, blog indexes, and homepages. Team ($149/mo, 50 URLs) covers a full competitive set for a PMM or revops function.",
  },
  {
    question: "How is competitor monitoring different from competitive intelligence software like Klue or Crayon?",
    answer:
      "Klue and Crayon are enterprise CI platforms priced from $12K–$100K/yr. They bundle battlecards, sales enablement workflows, win-loss modules, and a services layer — designed for CI teams of 3–10 people. KompWatch is a focused monitoring tool: it snapshots competitor pages, detects meaningful changes, and emails AI digests. If your primary need is 'know what changed on our competitor's site this week,' KompWatch does that for $49/mo. If you need a full sales-enablement platform with battlecard authoring workflows, Crayon or Klue is a better fit.",
  },
  {
    question: "How often does KompWatch check competitor pages across these use cases?",
    answer:
      "Free tier checks daily. Pro ($49/mo) checks every 6 hours. Team ($149/mo) checks every hour. For most use cases — pricing tracking, blog monitoring, feature tracking — every-6-hour checks (Pro) are sufficient because competitor pages rarely change more than once per day. Team-tier hourly checks are meant for launch monitoring during a known competitor release window, or for tracking a pricing experiment where you want to catch a rollback.",
  },
  {
    question: "Do I need technical skills to set up these competitor monitoring workflows?",
    answer:
      "No. Every use case above starts the same way: paste a competitor URL, and KompWatch handles the rest. There are no CSS selectors to configure, no scrapers to write, no scheduling to manage. Optional CSS-selector targeting is available if you want to narrow a snapshot to a specific section of a page (e.g., only the pricing table), but the default is full-page monitoring and it works for the majority of use cases.",
  },
];

// FAQPage JSON-LD — mirrors the visible FAQ section (single source of truth).
function HubFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
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

export default function UseCaseHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: "Use Cases", path: "/use-case" }]} />
      <SoftwareApplicationSchema />
      <ItemListSchema />
      <HubFAQSchema />

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
            <TrackedCTA
              href="/login"
              event="Use Case Hub Nav CTA Click"
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
          <p className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            10 workflows · one $49/mo tool
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Competitor monitoring use cases
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The ten competitive-intelligence workflows KompWatch is purpose-built for — from
            tracking pricing changes to catching competitor hiring waves. Pick the one that
            matches your team.{" "}
            <span className="font-semibold text-gray-900">
              Free for 2 competitors, $49/mo for 10.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Use Case Hub Hero CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/pricing"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            2 competitors free forever · 5-minute setup · No sales call
          </p>
        </div>
      </section>

      {/* Use case cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
            Pick your workflow
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/use-case/${uc.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600">
                      {uc.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{uc.audience}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-800">{uc.headline}</p>
                <p className="mt-3 text-sm text-gray-600">{uc.summary}</p>
                <span className="mt-6 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  Read the {uc.primaryKeyword} guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why one tool covers all ten workflows
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-600">Playwright</div>
              <p className="mt-2 text-sm text-gray-600">
                Real headless Chromium renders every competitor page — pricing, blog, features,
                homepages — the same way a visitor sees it. No missed JS-rendered content, no
                empty-div false positives.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">AI digests</div>
              <p className="mt-2 text-sm text-gray-600">
                Every detected change is classified (pricing, feature, content, messaging) and
                summarized in plain English. You get &quot;Acme moved API access to Enterprise
                tier&quot; instead of &quot;3 DOM elements changed.&quot;
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">$49/mo</div>
              <p className="mt-2 text-sm text-gray-600">
                Pro plan covers 10 competitor URLs across any mix of use cases — pricing pages,
                blog indexes, feature pages, homepages. No seat minimums, no annual contract, no
                sales call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — mirrors hubFaqs (single source of truth for JSON-LD + visible copy) */}
      <section id="faq" className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Competitor monitoring use cases — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {hubFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to pick a workflow?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start on the free tier — 2 competitors, weekly digest, no credit card. Upgrade to Pro
            when you&apos;re ready to add more use cases.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Use Case Hub Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/pricing"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              Compare
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
