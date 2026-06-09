import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Affordable Competitor Monitoring Tools (2026) — Free to $49/mo",
  description:
    "Compare affordable competitor monitoring tools by price, features, and limits. Track competitor websites from $0/mo — no enterprise contracts or sales calls required.",
  keywords: [
    "affordable competitor monitoring",
    "affordable competitor monitoring tools",
    "cheap competitor monitoring",
    "cheap competitor tracking software",
    "budget competitor intelligence",
    "low cost competitor monitoring",
    "competitor monitoring free",
    "free competitor monitoring tools",
    "competitor monitoring pricing",
    "competitor tracking tools pricing",
    "best affordable competitor analysis tools",
    "competitor monitoring for small business",
    "competitor monitoring under $50",
    "affordable competitive intelligence",
    "competitor website monitoring tools",
  ],
  alternates: {
    canonical: `${siteUrl}/affordable-competitor-monitoring`,
  },
  openGraph: {
    title: "Affordable Competitor Monitoring Tools (2026) — From Free to $49/mo",
    description:
      "Every competitor monitoring tool ranked by price. From free (Google Alerts, KompWatch free tier) to $49/mo (KompWatch Pro) — skip the $20K/yr enterprise platforms.",
    url: `${siteUrl}/affordable-competitor-monitoring`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Competitor Monitoring Tools (2026)",
    description:
      "Compare affordable competitor monitoring tools by price. Free → $49/mo options that catch 90% of what enterprise CI platforms detect.",
  },
};

const tools: {
  name: string;
  price: string;
  priceNote: string;
  competitors: string;
  changeDetection: string;
  alerts: string;
  bestFor: string;
  limitation: string;
  href: string;
}[] = [
  {
    name: "Google Alerts",
    price: "Free",
    priceNote: "No paid tier",
    competitors: "Unlimited",
    changeDetection: "Press mentions only",
    alerts: "Email (as-it-happens or daily)",
    bestFor: "Funding announcements, press coverage, blog mentions",
    limitation:
      "Cannot detect website changes — misses pricing edits, feature launches, and page updates that don't generate press",
    href: "/vs-google-alerts",
  },
  {
    name: "KompWatch Free",
    price: "$0/mo",
    priceNote: "Free forever, no credit card",
    competitors: "2",
    changeDetection: "Full page scraping + AI diff",
    alerts: "Weekly email digest",
    bestFor: "Validating the CI habit before committing budget",
    limitation:
      "2-competitor cap and weekly cadence — enough to build the habit, not enough for active sales motions",
    href: "/pricing",
  },
  {
    name: "Visualping",
    price: "$14/mo",
    priceNote: "Personal plan",
    competitors: "~5 pages",
    changeDetection: "Visual pixel diff",
    alerts: "Email on change",
    bestFor: "Simple page-level screenshot comparisons",
    limitation:
      "Pixel diffs without semantic understanding — can't distinguish a font change from a pricing change",
    href: "/vs-visualping",
  },
  {
    name: "KompWatch Pro",
    price: "$49/mo",
    priceNote: "Most popular plan",
    competitors: "10",
    changeDetection: "Full page scraping + AI-categorized diffs (pricing, feature, content)",
    alerts: "Daily email digest with severity ratings",
    bestFor: "Seed → Series B teams running active competitive motions",
    limitation:
      "10-competitor cap — upgrade to Team ($149/mo) for 50 competitors and real-time alerts",
    href: "/pricing",
  },
  {
    name: "Owler",
    price: "$35–$50/mo",
    priceNote: "Pro plan (billed annually)",
    competitors: "~10 tracked",
    changeDetection: "News, funding, employee count",
    alerts: "Daily digest email",
    bestFor: "Company-level intelligence (funding, headcount, revenue estimates)",
    limitation:
      "Tracks company metadata, not website changes — won't catch pricing edits or feature launches",
    href: "/vs-owler",
  },
  {
    name: "KompWatch Team",
    price: "$149/mo",
    priceNote: "For dedicated CI roles",
    competitors: "50",
    changeDetection: "Full scraping + AI diffs + real-time webhooks",
    alerts: "Real-time alerts + daily digest",
    bestFor: "PMMs and CI analysts with 10+ competitors and sales-enablement needs",
    limitation:
      "No battlecard portal (yet) — best for teams that want signals, not content management",
    href: "/pricing",
  },
  {
    name: "Crayon",
    price: "$5K–$80K/yr",
    priceNote: "Sales call required",
    competitors: "Unlimited",
    changeDetection: "Website + social + review sites + job postings",
    alerts: "Dashboard + email + Slack",
    bestFor: "Enterprise CI teams with dedicated analysts and battlecard workflows",
    limitation:
      "Requires procurement cycle, annual contract, and onboarding — built for full-time CI programs, not lean teams",
    href: "/vs-crayon",
  },
  {
    name: "Klue",
    price: "$12K–$100K+/yr",
    priceNote: "Sales call required",
    competitors: "Unlimited",
    changeDetection: "Website + news + social + AI battlecards",
    alerts: "Dashboard + Slack + Salesforce integration",
    bestFor: "Enterprise sales-enablement with Salesforce/Gong integration",
    limitation:
      "40% workforce layoff in 2025 — platform risk. Minimum $12K/yr commitment with annual contracts",
    href: "/vs-klue",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the cheapest competitor monitoring tool?",
    answer:
      "Google Alerts is free but only catches press mentions — it can't detect website changes like pricing edits or feature launches. The cheapest tool that monitors actual website changes is KompWatch's free tier ($0/mo for 2 competitors with weekly AI-generated digests). The next step up is Visualping at $14/mo for pixel-diff monitoring, or KompWatch Pro at $49/mo for 10 competitors with AI-categorized change detection.",
  },
  {
    question: "Can I monitor competitors for free?",
    answer:
      "Yes. Google Alerts (free, unlimited) covers press mentions and blog posts. KompWatch's free plan ($0/mo, no credit card) monitors 2 competitor websites with full-page scraping and sends a weekly AI digest. Combined, these two free tools catch roughly 70% of what a $20K/yr enterprise CI platform detects. The main gap is cadence — free tools check daily or weekly, while paid tools can check hourly.",
  },
  {
    question: "Is $49/mo enough for serious competitor monitoring?",
    answer:
      "For most SaaS teams under 100 employees, yes. KompWatch Pro at $49/mo tracks 10 competitors with daily AI-categorized digests — covering pricing changes, feature launches, content shifts, and visual changes. Enterprise tools (Crayon, Klue) charge $5K–$100K/yr and add battlecard portals, Salesforce integrations, and analyst support. Unless you have a full-time CI analyst and need battlecards piped into Salesforce, the $49/mo tier covers the signal layer.",
  },
  {
    question:
      "What's the difference between affordable tools and enterprise CI platforms?",
    answer:
      "Three things: (1) Signal vs. content — affordable tools (KompWatch, Visualping) detect and alert on changes; enterprise tools (Crayon, Klue) add battlecard creation, sales enablement content, and CRM integrations. (2) Pricing model — affordable tools use self-serve monthly billing ($0–$149/mo); enterprise tools require sales calls and annual contracts ($5K–$100K+/yr). (3) Setup time — affordable tools are configured in minutes; enterprise tools need weeks of onboarding with a customer success manager.",
  },
  {
    question: "How many competitors should I monitor on a budget?",
    answer:
      "Three to five direct competitors is the sweet spot for lean teams. Direct means a prospect would seriously evaluate them alongside you. Start with your free-tier allocation (2 on KompWatch free), prove the habit sticks, then upgrade to cover 5–10. Monitoring 20+ competitors on a budget produces more noise than signal — you'll stop reading the digests within a month.",
  },
  {
    question:
      "Are cheap competitor monitoring tools accurate enough to rely on?",
    answer:
      "For website change detection, yes — tools like KompWatch scrape the actual HTML and compare it to the previous snapshot, so the raw detection is identical to what enterprise tools do. The difference is in interpretation: KompWatch uses AI to categorize changes (pricing, feature, content) and rate severity, while enterprise platforms add human-curated battlecard layers on top. For 90% of teams, the automated categorization is sufficient.",
  },
  {
    question: "Should I use multiple affordable tools or one enterprise platform?",
    answer:
      "Multiple affordable tools. Google Alerts (free, press mentions) + KompWatch Pro ($49/mo, website changes) covers more signal surface than most enterprise platforms at 1% of the cost. Add Owler ($35/mo) if you need company-level data (funding, headcount). The total ($84/mo) is still 98% cheaper than Crayon's entry-level plan and requires no sales call, no annual contract, and no onboarding meetings.",
  },
  {
    question: "What do affordable competitor monitoring tools miss compared to Crayon or Klue?",
    answer:
      "Three things affordable tools don't do: (1) Battlecard management — creating and maintaining sales-ready competitive content cards. (2) CRM integration — pushing competitor intel into Salesforce opportunity records automatically. (3) Review-site monitoring — tracking G2/Capterra reviews at scale. If your sales team runs competitive deals daily and needs Salesforce-embedded battlecards, you need an enterprise tool. If you need change detection and a weekly digest, affordable tools cover it.",
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

export default function AffordableCompetitorMonitoringPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          {
            name: "Affordable Competitor Monitoring",
            path: "/affordable-competitor-monitoring",
          },
        ]}
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

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          2026 pricing comparison — updated June 2026
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Affordable competitor monitoring{" "}
          <span className="text-brand-600">
            — every tool ranked by price
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Enterprise CI platforms charge{" "}
          <strong className="text-gray-900">$5,000–$100,000/yr</strong> and
          require a sales call. Here are the tools that cost{" "}
          <strong className="text-gray-900">$0–$149/mo</strong>, work in
          minutes, and catch 90% of the same competitor signals — ranked from
          cheapest to most expensive.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Affordable CM Hero CTA Click"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, $0/mo
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See the full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. No sales call. Free plan forever.
        </p>
      </section>

      {/* The cost problem */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why most teams overpay for competitor monitoring
          </h2>
          <p className="mt-4 text-center text-sm text-gray-600">
            The CI market has a pricing gap. Here&rsquo;s what it looks like.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-3xl font-bold text-gray-900">$0</div>
              <div className="mt-1 text-sm font-semibold text-gray-700">
                Google Alerts
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Catches press mentions. Misses every website change —
                pricing edits, feature launches, and page updates that
                don&rsquo;t generate press.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-50 p-5 ring-1 ring-brand-200">
              <div className="text-3xl font-bold text-brand-700">
                $0–$149<span className="text-base font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-700">
                The affordable tier
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Website scraping, AI change detection, email digests.
                Self-serve billing, no contracts. This is where KompWatch
                sits.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-3xl font-bold text-gray-900">
                $5K–$100K<span className="text-base font-normal text-gray-400">/yr</span>
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-700">
                Enterprise CI
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Battlecard portals, CRM integrations, analyst support.
                Requires sales calls, annual contracts, and procurement
                cycles.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Most teams need the middle column. The enterprise tools are built
            for full-time CI analysts with Salesforce integrations — not
            founders, PMMs, or product teams.
          </p>
        </div>
      </section>

      {/* Full comparison table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Every competitor monitoring tool, ranked by price
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Public pricing where available. Enterprise vendors that require a
              sales call are flagged.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Tool</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Price</th>
                  <th className="px-4 py-3 font-medium text-gray-500">
                    Competitors
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500">
                    Change detection
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tools.map((tool) => (
                  <tr key={tool.name}>
                    <td className="py-4 pr-4 align-top">
                      <Link
                        href={tool.href}
                        className="font-semibold text-brand-700 underline-offset-2 hover:underline"
                      >
                        {tool.name}
                      </Link>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="font-semibold text-gray-900">
                        {tool.price}
                      </div>
                      <div className="text-xs text-gray-400">
                        {tool.priceNote}
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top text-gray-700">
                      {tool.competitors}
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {tool.changeDetection}
                    </td>
                    <td className="px-4 py-4 align-top text-gray-600">
                      {tool.bestFor}
                      <div className="mt-1 text-xs text-gray-400">
                        Limitation: {tool.limitation}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Pricing from public pricing pages, Capterra, and GetApp listings
            (June 2026). Enterprise vendors don&rsquo;t publish pricing — quotes
            from{" "}
            <Link href="/vs-crayon" className="underline hover:text-gray-700">
              Crayon
            </Link>{" "}
            and{" "}
            <Link href="/vs-klue" className="underline hover:text-gray-700">
              Klue
            </Link>{" "}
            teardowns.
          </p>
        </div>
      </section>

      {/* What affordable tools actually detect */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What affordable tools catch vs. what they miss
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest assessment. Affordable tools aren&rsquo;t enterprise tools
              at a discount — they cover a specific (and for most teams,
              sufficient) signal layer.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-brand-700">
                What $0–$149/mo tools catch
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    signal: "Pricing page changes",
                    detail:
                      "New tiers, price increases, removed plans, free-tier squeezes",
                  },
                  {
                    signal: "Feature page updates",
                    detail:
                      "New features added, features removed, messaging repositioned",
                  },
                  {
                    signal: "Content and blog changes",
                    detail:
                      "New blog posts, messaging shifts, product announcements",
                  },
                  {
                    signal: "Visual and layout changes",
                    detail:
                      "Redesigns, new CTAs, repositioned value propositions",
                  },
                  {
                    signal: "Press mentions and funding",
                    detail:
                      "Via Google Alerts (free) — acquisitions, funding rounds, partnerships",
                  },
                ].map((item) => (
                  <li
                    key={item.signal}
                    className="rounded-lg border border-brand-200 bg-brand-50/40 p-4"
                  >
                    <div className="text-sm font-semibold text-gray-900">
                      {item.signal}
                    </div>
                    <p className="mt-1 text-sm text-gray-700">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-700">
                What you only get at $5K+/yr
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Battlecard creation and management portal",
                  "Salesforce / HubSpot opportunity-level integration",
                  "G2 / Capterra review monitoring at scale",
                  "Dedicated customer success manager and onboarding",
                  "Multi-team permissions and role-based access",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                  >
                    <span className="text-gray-400">&middot;</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
                <strong>Bottom line:</strong> if your CI program is one person
                reading a weekly or daily digest, affordable tools cover it. If
                you have a full-time CI analyst pushing battlecards into
                Salesforce, you need an enterprise platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The $49/mo stack */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The $49/mo competitor monitoring stack
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              What most KompWatch customers actually run. Total cost: $49/mo or
              less.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                step: "1",
                tool: "Google Alerts",
                cost: "Free",
                role: "Press mentions, funding announcements, blog mentions for each competitor name",
              },
              {
                step: "2",
                tool: "KompWatch Pro",
                cost: "$49/mo",
                role: "Monitor 10 competitor websites (pricing, features, blog, careers pages) with daily AI-categorized digest",
              },
              {
                step: "3",
                tool: "15-minute Monday review",
                cost: "Free",
                role: "Skim the digest, tag signals as 'act' or 'note', Slack the team if anything is urgent",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-base font-semibold text-gray-900">
                      {item.tool}
                    </span>
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                      {item.cost}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Total: $49/mo</strong> — covers
              10 competitors across 40 URLs with daily AI digests. That&rsquo;s{" "}
              <strong className="text-gray-900">98% cheaper</strong> than
              Crayon&rsquo;s entry-level plan and{" "}
              <strong className="text-gray-900">99% cheaper</strong> than
              Klue&rsquo;s.
            </p>
          </div>
        </div>
      </section>

      {/* KompWatch pricing */}
      <section className="border-y border-gray-100 bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              KompWatch pricing
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Competitor monitoring from $0/mo — no sales call, no contracts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              Start free with 2 competitors. Upgrade when the habit sticks.
              Cancel anytime — monthly billing, no annual lock-in.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Free
              </div>
              <div className="mt-2 text-3xl font-bold">
                $0
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                2 competitors &middot; weekly digest
              </div>
              <p className="mt-4 text-sm text-gray-300">
                Prove the habit works before spending a dollar. Full AI change
                detection — just fewer competitors and weekly cadence.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro &middot; most popular
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                10 competitors &middot; daily digest
              </div>
              <p className="mt-4 text-sm text-gray-300">
                The sweet spot for most SaaS teams. 10 competitors, daily
                AI-categorized digests, severity ratings.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Team
              </div>
              <div className="mt-2 text-3xl font-bold">
                $149
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                50 competitors &middot; real-time alerts
              </div>
              <p className="mt-4 text-sm text-gray-300">
                For dedicated CI roles. 50 competitors, real-time webhooks,
                still 90%+ cheaper than Crayon or Klue.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Affordable CM Mid CTA Click"
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — no credit card
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link
                href="/pricing"
                className="underline hover:text-white"
              >
                Full pricing details
              </Link>{" "}
              &middot;{" "}
              <Link
                href="/sample-digest"
                className="underline hover:text-white"
              >
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
            Affordable competitor monitoring — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
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

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop overpaying for competitor monitoring
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Track 2 competitors free, forever. Get a weekly AI digest with
            change detection, severity ratings, and actionable summaries.
            Upgrade to Pro ($49/mo) when you need daily cadence and 10
            competitors.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Affordable CM Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Comparing tools first?{" "}
            <Link
              href="/compare"
              className="underline hover:text-gray-700"
            >
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
              href="/compare"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              All comparisons
            </Link>
            <Link
              href="/sample-digest"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sample digest
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
