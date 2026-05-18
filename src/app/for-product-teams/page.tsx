import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Competitor Monitoring for Product Teams — KompWatch",
  description:
    "Know what competitors ship before your next sprint planning. KompWatch monitors competitor pricing, features, and roadmap signals — so product decisions are informed, not reactive.",
  keywords: [
    "competitor monitoring for product teams",
    "competitive intelligence product manager",
    "product team competitor tracking",
    "competitor feature tracking",
    "competitor roadmap monitoring",
    "CI tool for product managers",
    "track competitor feature launches",
    "product management competitive analysis",
  ],
  alternates: {
    canonical: `${siteUrl}/for-product-teams`,
  },
  openGraph: {
    title: "KompWatch for Product Teams — Competitor Signals for Roadmap Decisions",
    description:
      "Automated monitoring of competitor pricing, features, and hiring signals. Know what they shipped before your next sprint planning.",
    url: `${siteUrl}/for-product-teams`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch for Product Teams",
    description:
      "Track competitor feature launches, pricing changes, and hiring signals. Automated monitoring for informed roadmap decisions.",
  },
};

const painPoints = [
  {
    title: "\"Didn't we know they shipped this?\"",
    description:
      "A competitor launched the feature your team deprioritized last quarter. Leadership found out from a customer. Now it's a fire drill instead of a planned response.",
  },
  {
    title: "Manual competitive analysis ages instantly",
    description:
      "That competitive landscape doc from last quarter? Stale by the time it's shared. Competitor pricing, features, and positioning change continuously — your intel should too.",
  },
  {
    title: "CI is someone else's job (until it isn't)",
    description:
      "PMMs own competitive intelligence in theory. In practice, product teams need real-time signals to make roadmap trade-offs. Waiting for a quarterly battlecard update is too slow.",
  },
];

const signals = [
  {
    title: "Feature & product page changes",
    description:
      "A competitor adds a new feature to their product page, removes one, or repositions their messaging. You find out the same day, not in next quarter's competitive review.",
    icon: "feature",
  },
  {
    title: "Pricing page moves",
    description:
      "New tiers, price increases, removed free plans, plan repackaging. Pricing signals tell you where the market is heading and whether your own pricing needs a response.",
    icon: "pricing",
  },
  {
    title: "Hiring signals (careers page)",
    description:
      "A competitor posts 5 senior ML engineer roles? That's a roadmap signal — they're building something. Job postings are the earliest public indicator of product direction.",
    icon: "hiring",
  },
  {
    title: "Blog & changelog posts",
    description:
      "Shipped features, customer stories, positioning shifts. Changelogs tell you what they built. Blogs tell you what they want the market to believe about what they built.",
    icon: "content",
  },
];

const workflows = [
  {
    title: "Sprint planning input",
    description:
      "Review the weekly digest before sprint planning. If a competitor shipped something in your lane, the team sees it before committing to the sprint — not after.",
  },
  {
    title: "Roadmap prioritization",
    description:
      "Competitor moves are data points, not mandates. A competitor launching feature X doesn't mean you build feature X — but it should inform whether you deprioritize or accelerate it.",
  },
  {
    title: "Stakeholder updates",
    description:
      "When leadership asks \"what are competitors doing?\", pull a 90-day change timeline from the dashboard instead of scrambling through browser bookmarks and old screenshots.",
  },
  {
    title: "Pricing & packaging decisions",
    description:
      "Track how competitors price and package over time. When it's time to adjust your own pricing, you have 6 months of competitor pricing history — not a point-in-time snapshot.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How is KompWatch different from what our PMM already does?",
    answer:
      "KompWatch automates the monitoring layer — visiting competitor pages on a schedule and detecting changes. Your PMM still owns the analysis (what does this mean for us?) and the response (do we act or note it?). Think of it as giving your PMM an always-on research assistant that never misses a page update.",
  },
  {
    question: "What pages should a product team monitor per competitor?",
    answer:
      "Four pages per competitor cover 90% of useful signals: (1) pricing page — captures pricing changes, new tiers, repackaging; (2) features/product page — captures launches and repositioning; (3) blog or changelog — captures shipped product and messaging; (4) careers page — captures hiring intent (a leading indicator of roadmap). KompWatch lets you add any URL with an optional CSS selector for precision.",
  },
  {
    question: "How quickly does KompWatch detect a competitor change?",
    answer:
      "Depends on your plan. Team plan ($149/mo) checks hourly. Pro ($49/mo) checks every 6 hours. Free checks daily. Changes are detected on the next scan and delivered via email digest or webhook (Slack/Teams). Instant email alerts are available for pricing changes on Pro+ plans.",
  },
  {
    question: "Can I integrate KompWatch alerts into Slack or our PM tools?",
    answer:
      "Yes. KompWatch supports webhook delivery to Slack and Microsoft Teams with retry logic. When a change is detected, the alert fires to your configured webhook endpoint. You can route different change types (pricing, features, content) to different channels.",
  },
  {
    question: "How many competitors should a product team track?",
    answer:
      "Three to five direct competitors for most product teams. Direct means a customer would seriously evaluate them alongside your product. The Pro plan (10 competitors, $49/mo) is the sweet spot for most product teams — enough for 5 direct competitors with room for emerging players. If you're in a crowded market, Team (50 competitors, $149/mo) covers the long tail.",
  },
  {
    question: "Is there an API or MCP integration?",
    answer:
      "Yes. KompWatch has both a REST API (on Team plan) and an MCP server that exposes competitor change data to AI assistants. The MCP server supports listing competitors, getting competitor details, searching changes, and retrieving recent activity — useful for building competitive context into internal AI workflows.",
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

export default function ForProductTeamsPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[{ name: "KompWatch for Product Teams", path: "/for-product-teams" }]}
      />
      <SoftwareApplicationSchema />
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
          Built for product teams
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Know what competitors ship{" "}
          <span className="text-brand-600">before your next sprint planning</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch monitors competitor pricing pages, feature pages, changelogs, and job boards.
          When something changes, you get an AI-summarized digest — so roadmap decisions are
          informed by what the market is doing, not last quarter&rsquo;s competitive review.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Product Hero CTA Click"
            eventProps={{ vertical: "product-teams" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, no credit card
          </TrackedCTA>
          <Link
            href="#signals"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See what we track &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. No sales call. Free plan forever.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            The product team CI gap
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Product teams make roadmap decisions without real-time competitive data — then react when it&rsquo;s too late.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {painPoints.map((point) => (
              <div key={point.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-900">{point.title}</div>
                <p className="mt-2 text-sm text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signals we track */}
      <section id="signals" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Four signals that matter for product decisions
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              KompWatch watches the pages that signal product direction — not vanity press mentions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {signals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">{signal.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How product teams use KompWatch
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Competitive intelligence as a recurring input, not a quarterly project.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {workflows.map((wf, i) => (
              <div
                key={wf.title}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{wf.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{wf.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Product team pricing
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Pro plan ($49/mo) fits most product teams
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              10 competitors with daily digests. Enough for 5 direct competitors plus emerging
              players. No per-seat fees — your whole product team can access one dashboard.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">$0<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Try the workflow with your top 2 competitors. See if automated monitoring
                changes how your team talks about competitive moves.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Pro · best for product</div>
              <div className="mt-2 text-3xl font-bold">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · daily digest</div>
              <p className="mt-4 text-sm text-gray-300">
                The product team sweet spot. Daily digests land before your standup. Cover direct
                competitors plus 2–3 emerging players.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly · API</div>
              <p className="mt-4 text-sm text-gray-300">
                For product orgs in crowded markets. Hourly checks, API access, MCP server
                integration, and webhook alerts to Slack/Teams.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Product Pricing CTA Click"
              eventProps={{ vertical: "product-teams" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when you need daily digests
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link href="/pricing" className="underline hover:text-white">
                Full pricing details
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
            KompWatch for product teams — FAQ
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
            Make competitive intelligence a sprint input, not a quarterly project
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            2 competitors free. Daily digests on Pro ($49/mo). Know what competitors ship
            before you plan your next sprint.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Product Bottom CTA Click"
              eventProps={{ vertical: "product-teams" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Comparing CI tools?{" "}
            <Link href="/compare" className="underline hover:text-gray-700">
              See how KompWatch compares
            </Link>{" "}
            to Crayon, Klue, and 12 other alternatives.
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
            <Link href="/for-marketing-agencies" className="text-sm text-gray-500 hover:text-gray-700">
              For agencies
            </Link>
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
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
