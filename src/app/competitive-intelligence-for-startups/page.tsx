import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Competitive Intelligence for Startups — A Practical Guide for Lean Teams",
  description:
    "How founders, PMMs, and solo marketers actually run a useful CI program — what to track, what to ignore, and the cheapest tools (free → $49/mo) that won't waste your time.",
  keywords: [
    "competitive intelligence for startups",
    "competitive intelligence tools for startups",
    "startup competitive intelligence",
    "competitor monitoring for startups",
    "cheap competitive intelligence",
    "competitive intelligence for founders",
    "competitive intelligence for PMM",
    "how to track competitors startup",
    "competitive intelligence on a budget",
    "best competitive intelligence tool startup",
  ],
  alternates: {
    canonical: `${siteUrl}/competitive-intelligence-for-startups`,
  },
  openGraph: {
    title: "Competitive Intelligence for Startups — A Practical Guide",
    description:
      "Most CI tools are built for $20K/yr enterprise budgets. Here's how lean startup teams actually run competitive intelligence — and the cheapest tools that work.",
    url: `${siteUrl}/competitive-intelligence-for-startups`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitive Intelligence for Startups — Practical Guide",
    description:
      "What to track, what to ignore, and the cheapest tools (free → $49/mo) for startup CI that doesn't waste your week.",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start a Competitive Intelligence Program at a Startup",
  description:
    "A practical 5-step playbook for founders and PMMs to launch a competitive intelligence program in under 30 minutes — without buying enterprise software.",
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pick 3–5 direct competitors (not 20)",
      text: "List the companies a prospect actually evaluates against you in the same buying conversation. Skip adjacent players, aspirational comparisons, and dead competitors. For early-stage startups, 3 direct competitors is plenty; once you have 50+ deals/quarter, 5–10 is the sweet spot.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List the 4 URLs that actually signal direction",
      text: "For each competitor, capture: the pricing page (/pricing), the features or product page (/features or /product), the blog or changelog (/blog or /changelog), and the careers page (/careers or /jobs). Those four pages tell you what they charge, what they ship, what they say, and what they're hiring for. Everything else is noise.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set up automated monitoring",
      text: "Drop those URLs into a competitor monitoring tool that scrapes them on a schedule and emails you when something changes. KompWatch's free plan covers 2 competitors with a weekly digest — enough to build the habit. Visualping is another lean option ($14/mo) if you only care about pixel diffs.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Schedule a 15-minute weekly review",
      text: "Block 15 minutes every Monday to skim the digest. Without a recurring slot, the alerts pile up unread. Most startup teams find weekly cadence is enough — daily is overkill until you're enterprise-tier or running active sales motions against a moving competitor.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Decide what triggers action vs. context",
      text: "Tag each signal as 'act' (pricing change, feature launch in your lane) or 'note' (background context). Without that filter, every alert feels urgent and the program dies in two months. The goal is one decision per month — kill a feature, reprice a tier, change positioning — not a daily firehose.",
    },
  ],
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "When should a startup start tracking competitors?",
    answer:
      "As soon as your second prospect mentions one by name. Pre-product-market-fit, you don't need a tool — a Notion doc and 30 minutes of manual checking is enough. Once you're hearing the same 2–3 competitor names every week from sales conversations, automate it. The risk of waiting too long is worse than the risk of automating early: by the time you notice a competitor's pricing change in a lost deal, you're already six weeks behind.",
  },
  {
    question: "How many competitors should a startup track?",
    answer:
      "Three to five direct competitors for most startups. Direct means a prospect would seriously evaluate them in the same RFP or trial. Tracking 20 competitors looks thorough but produces noise that nobody reads. If you're seed or Series A, three is fine. Once you have a dedicated PMM and 50+ deals/quarter, 5–10 is reasonable. Beyond that, you're tracking adjacent markets, not competitors.",
  },
  {
    question: "What's the cheapest competitive intelligence tool?",
    answer:
      "Google Alerts is free but only catches press mentions, not website changes — useful as a complement, not a replacement. The cheapest tools that catch actual product moves are Visualping (from $14/mo for pixel diffs) and KompWatch (free for 2 competitors with weekly digests, $49/mo for 10 with daily digests). Enterprise tools like Crayon ($5K–$80K/yr) and Klue ($12K–$100K/yr) require a sales call and are priced for teams with full-time CI analysts.",
  },
  {
    question: "Is it worth tracking competitors before product-market fit?",
    answer:
      "Lightly, yes. Pre-PMF, you're learning the shape of the market — what features feel table-stakes, what positioning is taken, what price points the market accepts. But don't build a formal CI program yet: a saved tab and a weekly check-in is enough. Building a tracking system before you know who you're competing with usually results in tracking the wrong companies.",
  },
  {
    question: "How much time per week should a startup spend on competitive intelligence?",
    answer:
      "Fifteen to thirty minutes per week, total, for a 3–5 competitor portfolio. That's reading the digest, tagging the 'act' signals, and slacking the team if anything's urgent. If your CI program is taking more than an hour a week, you're either (a) tracking too many companies, (b) reading every alert instead of triaging, or (c) using a battlecard tool that wants you to maintain content. Cut it back.",
  },
  {
    question: "Can I replace a competitive intelligence tool with Google Alerts?",
    answer:
      "Partially. Google Alerts catches press mentions, blog posts that get indexed, and PR moves — useful, especially for funding announcements. What it misses: silent pricing-page edits, feature page additions that don't generate press, and product-side changes on URLs Google doesn't crawl daily. For most startups, Google Alerts plus a website-monitoring tool covers 90% of what enterprise CI platforms catch, at <1% of the cost.",
  },
  {
    question: "What pages should I monitor for each competitor?",
    answer:
      "Four pages per competitor, in priority order: (1) pricing page — captures price changes, new tiers, plan repackaging; (2) features or product page — captures launches, repositioning, removed features; (3) blog or changelog — captures messaging shifts and shipped product; (4) careers or jobs page — captures hiring intent (a flood of senior PM roles signals a new product line). Skip 'about us' pages, press pages, and team rosters — high noise, low signal.",
  },
  {
    question: "Do I need a competitive intelligence tool, or can I just check competitor sites manually?",
    answer:
      "Manual works for 1–2 competitors at small scale. The breakdown happens at 3+ competitors with 4 URLs each — that's 12 pages to check on a recurring cadence, and you'll either skip it or do it inconsistently. Automation matters not because it's faster, but because it's recurring without willpower. The point of a CI tool isn't intelligence; it's discipline.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const trackedSignals = [
  {
    title: "Pricing page edits",
    detail:
      "Price moves, new tiers, removed plans, free-tier squeezes. The single highest-signal page on a competitor's site.",
  },
  {
    title: "Features / product page changes",
    detail:
      "New features added, old ones quietly removed, repositioned messaging. Tells you what they shipped and what they're emphasizing.",
  },
  {
    title: "Blog & changelog posts",
    detail:
      "Shipped product, customer stories, messaging shifts. Skim headlines weekly; deep-read the ones that map to your roadmap.",
  },
  {
    title: "Careers page hiring signals",
    detail:
      "A new VP of Engineering, three senior PM roles for an unannounced product line, a fresh sales team in EMEA. Hiring is roadmap-leading.",
  },
  {
    title: "Funding & acquisition mentions",
    detail:
      "Press releases, Crunchbase updates, founder LinkedIn posts. Material context, but noisy — Google Alerts handles this fine.",
  },
];

const ignoredSignals = [
  "Every tweet from the company account (most are recycled blog posts)",
  "Paid press releases and sponsored TechCrunch coverage",
  "G2 / Capterra review noise (low signal-to-noise unless reviewing a major release)",
  "Generic press feed RSS — wait for the digest to surface what matters",
  "Org-chart trivia (head-of-marketing turnover doesn't change your roadmap)",
];

const toolTiers = [
  {
    name: "Free / DIY",
    price: "$0",
    examples: "Google Alerts + a Notion doc",
    fit: "1–2 competitors, pre-PMF, you have 30 min/week to manually check",
    caveat: "Misses silent pricing-page edits and most product changes",
  },
  {
    name: "Lean automation",
    price: "Free → $49/mo",
    examples: "KompWatch (free for 2, Pro $49/mo for 10), Visualping ($14/mo)",
    fit: "Seed → Series A, 3–10 competitors, weekly review cadence",
    caveat: "Best fit for startup teams that want signals, not battlecard portals",
  },
  {
    name: "Mid-market",
    price: "$2K–$10K/yr",
    examples: "Kompyte, Owler, Crayon SMB tier",
    fit: "Series B+ with a dedicated PMM and active sales motions",
    caveat: "Often requires a sales call; check whether SMB tiers are still sold publicly",
  },
  {
    name: "Enterprise",
    price: "$12K–$100K+/yr",
    examples: "Klue, Crayon enterprise, Kompyte enterprise",
    fit: "Dedicated CI analyst, 20+ competitors, sales-enablement battlecards",
    caveat: "Built for full-time CI teams; overkill (and unaffordable) for most startups",
  },
];

export default function CompetitiveIntelligenceForStartupsPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          {
            name: "Competitive Intelligence for Startups",
            path: "/competitive-intelligence-for-startups",
          },
        ]}
      />
      <SoftwareApplicationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          A practical guide for founders, PMMs &amp; solo marketers
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Competitive intelligence for startups{" "}
          <span className="text-brand-600">— without the $20K/yr software bill</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Most CI tools are built for enterprise teams with full-time analysts and{" "}
          <strong className="text-gray-900">$20,000/yr</strong> budgets. This is the playbook lean
          startup teams actually use — what to track, what to ignore, and the cheapest tools
          (free → $49/mo) that won&rsquo;t waste your week.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="CI Startups Hero CTA Click"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, weekly digest
          </TrackedCTA>
          <Link
            href="#playbook"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            Read the playbook &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. No sales call. Free plan forever.
        </p>
      </section>

      {/* The case for startup CI */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why most startups skip CI — and what it costs them
          </h2>
          <p className="mt-4 text-center text-sm text-gray-600">
            Three reasons founders deprioritize competitive intelligence. All three become more
            expensive than the work.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-sm font-semibold text-gray-900">&ldquo;No time&rdquo;</div>
              <p className="mt-2 text-sm text-gray-600">
                Then you ship a feature your closest competitor launched 4 months ago. Or reprice
                blind. The cost of <em>not</em> knowing is paid in lost deals and wasted roadmap.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-sm font-semibold text-gray-900">&ldquo;Tools are too expensive&rdquo;</div>
              <p className="mt-2 text-sm text-gray-600">
                True for Crayon and Klue. Not true for everything. Free + $14–$49/mo tools cover
                90% of what enterprise CI platforms catch.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-sm font-semibold text-gray-900">&ldquo;That&rsquo;s marketing&rsquo;s job&rdquo;</div>
              <p className="mt-2 text-sm text-gray-600">
                If marketing is one person who also runs the website, the blog, and the launches,
                CI never makes the queue. Automate the inputs so the human work is just triage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to track / ignore */}
      <section id="playbook" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What a startup-grade CI program actually looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Five signals worth tracking. Five worth ignoring. Weekly cadence. Fifteen minutes of
              human attention.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-brand-700">Track these (high signal)</h3>
              <ul className="mt-4 space-y-4">
                {trackedSignals.map((signal) => (
                  <li
                    key={signal.title}
                    className="rounded-lg border border-brand-200 bg-brand-50/40 p-4"
                  >
                    <div className="text-sm font-semibold text-gray-900">{signal.title}</div>
                    <p className="mt-1 text-sm text-gray-700">{signal.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-700">Ignore these (mostly noise)</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                {ignoredSignals.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="text-gray-400">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
                <strong>Rule of thumb:</strong> if a signal doesn&rsquo;t change a roadmap,
                pricing, or positioning decision, it&rsquo;s context — not intelligence. Keep
                context out of the alert stream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HowTo: 5 steps */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How to start in under 30 minutes
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              A 5-step playbook you can run today. No procurement cycle, no sales call.
            </p>
          </div>

          <ol className="mt-12 space-y-6">
            {howToJsonLd.step.map((step, i) => (
              <li
                key={step.name}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900">{step.name}</div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tool tiers */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              CI tool tiers — what fits a startup budget
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest rundown of the four tiers. Public pricing where available; sales-call-required
              vendors are flagged.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Tier</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Price</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Examples</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Best fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {toolTiers.map((tier) => (
                  <tr key={tier.name}>
                    <td className="py-4 pr-4 align-top font-semibold text-gray-900">{tier.name}</td>
                    <td className="px-4 py-4 align-top text-gray-700">{tier.price}</td>
                    <td className="px-4 py-4 align-top text-gray-600">{tier.examples}</td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {tier.fit}
                      <div className="mt-1 text-xs text-gray-400">{tier.caveat}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Pricing pulled from public pricing pages, Capterra, and GetApp listings (May 2026).
            Enterprise CI vendors typically don&rsquo;t publish pricing — quotes from{" "}
            <Link href="/vs-crayon" className="underline hover:text-gray-700">Crayon</Link> and{" "}
            <Link href="/vs-klue" className="underline hover:text-gray-700">Klue</Link> teardowns.
          </p>
        </div>
      </section>

      {/* KompWatch fit */}
      <section className="border-y border-gray-100 bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Where KompWatch fits
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Built for the lean tier — free for 2, $49/mo for 10
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              KompWatch is the lean-automation option in the table above. We sit between
              free/DIY and the enterprise platforms — same signals, no sales call, priced for a
              founder&rsquo;s credit card.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">$0<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Validate the habit. If you can&rsquo;t make the time to read a 2-competitor
                weekly digest, you don&rsquo;t need a Pro plan yet.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Pro · most popular</div>
              <div className="mt-2 text-3xl font-bold">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · daily digest</div>
              <p className="mt-4 text-sm text-gray-300">
                The seed-to-Series-A sweet spot. Most KompWatch customers stop here and
                don&rsquo;t outgrow it for 18+ months.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · real-time alerts</div>
              <p className="mt-4 text-sm text-gray-300">
                When you have a dedicated PMM and CI is a named role. Still 90%+ cheaper than
                Crayon or Klue at the same scope.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="CI Startups Mid CTA Click"
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link href="/pricing" className="underline hover:text-white">
                Full pricing
              </Link>{" "}
              ·{" "}
              <Link href="/sample-digest" className="underline hover:text-white">
                See a sample digest
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Competitive intelligence for startups — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Run your first competitor digest this week
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            2 competitors free, forever. Add 3 URLs each, get a weekly digest, decide whether the
            habit sticks. Upgrade to Pro ($49/mo, 10 competitors) when it does.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="CI Startups Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Comparing tools first?{" "}
            <Link href="/compare" className="underline hover:text-gray-700">
              See our honest comparisons
            </Link>{" "}
            against 14 alternatives.
          </p>
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
              All comparisons
            </Link>
            <Link href="/sample-digest" className="text-sm text-gray-500 hover:text-gray-700">
              Sample digest
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
