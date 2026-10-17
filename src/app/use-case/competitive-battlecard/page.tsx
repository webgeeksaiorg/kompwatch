import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitive Battlecard — Build & Auto-Update Sales Battlecards | KompWatch",
  description:
    "Stop shipping stale competitive battlecards. KompWatch monitors competitor pages 24/7 and feeds AI-summarized changes straight into your battlecard workflow — so your sales team always has fresh objection handling, pricing, and positioning intel.",
  keywords: [
    "competitive battlecard",
    "sales battlecard",
    "battlecard template",
    "competitor battlecard",
    "battlecard software",
    "battlecard tool",
    "sales enablement battlecard",
    "how to build a battlecard",
    "battlecard automation",
    "Klue alternative battlecard",
    "Crayon alternative battlecard",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitive-battlecard`,
  },
  openGraph: {
    title:
      "Competitive Battlecard — Auto-Updated From Real Competitor Changes | KompWatch",
    description:
      "Most battlecards go stale in 30 days. KompWatch keeps them fresh by monitoring competitor pages and pushing AI change summaries into your sales workflow.",
    url: `${siteUrl}/use-case/competitive-battlecard`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitive Battlecard — Always Fresh, Never Stale | KompWatch",
    description:
      "AI-monitored competitor changes feed your battlecards. 40–85× cheaper than Klue/Crayon. Start free.",
  },
};

const painPoints = [
  {
    title: "Battlecards go stale within 30 days",
    description:
      "Klue's own 2025 State of CI report: teams with battlecards see 15–25% win rate improvement — but only if the cards are current. Most enterprise battlecards are updated quarterly at best. That's a 90-day lie by the time sales opens the doc.",
  },
  {
    title: "You're pasting screenshots into Google Docs at 11pm",
    description:
      "PMM Slack: someone flags a competitor pricing change. You open 6 tabs, screenshot the pricing page, retype the objection handling, ping sales, hope they read it. This is the actual battlecard workflow at most B2B companies.",
  },
  {
    title: "Klue and Crayon charge $20K–$40K/yr for automation",
    description:
      "Enterprise battlecard platforms lock the fresh-intel loop behind $20–40K/year contracts. If you're a 5–50-person team, you either write it manually or you don't have battlecards at all.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Track the competitors your battlecards cover",
    description:
      "Add each competitor's pricing page, homepage, features page, and any blog or changelog you want to monitor. KompWatch uses a real headless browser (Playwright) so it catches changes on React/Vue/Next.js pricing pages that Google Alerts and screenshot-diff tools miss.",
  },
  {
    step: "2",
    title: "AI classifies what changed and why it matters",
    description:
      "When a competitor changes their page, KompWatch's AI classifies the change (Pricing / Feature / Positioning / Content), scores severity (Low / Medium / High), and writes a plain-English summary — the exact input your battlecard needs.",
  },
  {
    step: "3",
    title: "Update your battlecard from a real change log",
    description:
      "Instead of guessing what's new, you open KompWatch and see: 'Competitor X removed their Starter plan, added Enterprise tier at $299/mo, updated positioning from \"for teams\" to \"for RevOps.\"' Copy the summary into your battlecard. Ship in 10 minutes.",
  },
  {
    step: "4",
    title: "Sales gets a fresh digest — not a stale doc",
    description:
      "Route KompWatch digests to your #competitive Slack channel (Team plan) or forward the weekly email to reps. Every AE now knows what changed this week — the objection handling matches reality.",
  },
];

const detections = [
  {
    title: "Pricing moves (raise / cut / new tier)",
    description:
      "Detects price changes on every tier, new plans, removed plans, and quiet trial-length changes — the #1 thing reps get blindsided on.",
    example:
      '"Competitor raised Pro from $49→$69/mo, removed Starter, added Enterprise at $299/mo."',
  },
  {
    title: "Positioning & messaging shifts",
    description:
      "Catches homepage headline changes, hero copy rewrites, and value-prop shifts — the leading indicator that a competitor is repositioning against you.",
    example:
      `"Competitor changed hero from 'for marketing teams' to 'AI-first competitive intelligence for RevOps.'"`,
  },
  {
    title: "New features & product updates",
    description:
      "Monitors features pages, changelogs, and product docs. When a competitor ships an integration or feature that shows up in deals, your battlecard reflects it inside a day.",
    example:
      '"Competitor added Slack integration + Salesforce sync — likely response to churn to KompWatch."',
  },
  {
    title: "Case studies & customer wins",
    description:
      "Watches the /customers page for new logos. Sales needs to know when a competitor lands a lookalike account — you'll want the response handy on the next call.",
    example:
      '"Competitor added [Fortune 500 logo] to customer wall — objection handling: contract length, migration cost."',
  },
];

const battlecardSections = [
  {
    title: "1. Competitor overview",
    contents:
      "Name, URL, category, ideal customer profile, funding stage. Fill this once — it rarely changes. KompWatch tracks the URL so you notice when they rebrand or reposition.",
  },
  {
    title: "2. Pricing & packaging",
    contents:
      "Current tiers, seat pricing, annual discounts, free plan limits. This is the section that goes stale fastest — KompWatch flags pricing-page changes automatically so this line item stays honest.",
  },
  {
    title: "3. Strengths (where they win)",
    contents:
      "Honest 2–3 bullets on what the competitor does better. Update when they ship a feature that beats yours — KompWatch's feature-change detection catches these within hours.",
  },
  {
    title: "4. Weaknesses & landmines",
    contents:
      "Where they lose deals: pricing shock, missing feature, integration gap, support tier gates. Refresh when they patch a weakness — otherwise reps use outdated talking points.",
  },
  {
    title: "5. Objection handling (per persona)",
    contents:
      "For each buyer persona, the top 3 objections and your rebuttal. Update objection #1 the moment a competitor changes messaging — that's the objection your reps will hear tomorrow.",
  },
  {
    title: "6. Trap questions",
    contents:
      "Questions your rep can ask to expose the competitor's weakness. \"Do they charge extra for X?\" \"Do they support Y integration?\" These stay stable — until the competitor patches a gap.",
  },
  {
    title: "7. Proof points & case studies",
    contents:
      "Your customer wins vs. this competitor. Add a new one every time you swap them out. Cross-reference their /customers page (KompWatch monitors it) so you know when they're winning against you too.",
  },
  {
    title: "8. Last updated + change log",
    contents:
      "Date-stamp every update + a 1-line diff. This is the trust signal for sales — a battlecard with 'last updated 3 days ago' gets read; one from Q3 gets ignored. KompWatch's digest gives you the change log for free.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a competitive battlecard?",
    answer:
      "A competitive battlecard is a one-page sales enablement doc that summarizes a specific competitor — their pricing, positioning, strengths, weaknesses, objection handling, and trap questions. Sales reps reference battlecards during live deals to counter competitive mentions and win competitive replacements. Well-maintained battlecards drive a 15–25% win rate lift (Klue 2025 State of CI report).",
  },
  {
    question: "Why do most battlecards go stale?",
    answer:
      "Battlecards are usually maintained manually by a product marketer who has 8 other priorities. Competitors change pricing, ship features, and reposition weekly — but battlecards get updated quarterly. The result: reps quote pricing that's 60 days old, positioning that's wrong, and objection handling for a feature the competitor no longer lacks. KompWatch solves the freshness problem by monitoring competitor pages 24/7 and feeding AI change summaries into the battlecard workflow.",
  },
  {
    question: "How does KompWatch help build competitive battlecards?",
    answer:
      "KompWatch is the intel layer under the battlecard. You add the competitor URLs you cover, and KompWatch snapshots each page on a schedule (every 6h on Pro, hourly on Team). When a change is detected, an AI model classifies it (Pricing / Feature / Positioning / Content), scores severity, and generates a plain-English summary. You copy that summary into the relevant battlecard section — pricing, positioning, objection handling — and ship the update in 10 minutes instead of 2 hours.",
  },
  {
    question: "How is KompWatch different from Klue or Crayon for battlecards?",
    answer:
      "Klue and Crayon are full battlecard platforms — they store the cards, gate access to sales, and cost $20K–$40K/year. KompWatch is the monitoring layer that keeps any battlecard fresh, at $49/mo (40–85× cheaper). If you already have battlecards in Notion, Google Docs, Guru, Highspot, or a wiki, KompWatch is the diff feed that tells you when to update them. You keep your existing sales workflow; you just stop being surprised by competitor changes.",
  },
  {
    question: "Do you have a free battlecard template?",
    answer:
      "Yes. Our recommended 8-section battlecard structure — overview, pricing, strengths, weaknesses, objection handling, trap questions, proof points, and change log — is documented on this page. Copy the section list into a Google Doc, Notion page, or Guru card, then use KompWatch's free plan (2 competitors, weekly digest) to keep the pricing and positioning sections honest. Upgrade to Pro ($49/mo) when you're tracking more than 2 competitors.",
  },
  {
    question: "Can I auto-populate battlecards from KompWatch data?",
    answer:
      "Not yet — auto-generated battlecard PDFs are on our roadmap (see the 'Battlecard export' proposals in our public backlog). Today, KompWatch gives you the change-detection layer: fresh, AI-summarized competitor updates. You bring the battlecard template (we recommend the 8-section structure on this page), and paste in the KompWatch summaries as competitor pages evolve. The Team plan ($149/mo) adds Slack digests, so change alerts land in your #competitive channel automatically.",
  },
  {
    question: "How often should I update a competitive battlecard?",
    answer:
      "The pricing and positioning sections should be updated within 48 hours of any detected change — those are the sections reps quote live in deals. Strengths, weaknesses, and objection handling should be reviewed monthly. The overview and trap questions rarely need updates. Rule of thumb: if your last-updated date is more than 30 days old, your battlecard is actively hurting deals. KompWatch's digest emails give you a weekly forcing function for the update review.",
  },
  {
    question: "Who owns competitive battlecards inside a company?",
    answer:
      "Usually product marketing (PMM) or competitive intelligence (CI). At smaller companies, it's the founder or head of sales. Whoever owns them, the bottleneck is always the same: they don't have time to check 8 competitor sites every week. That's exactly the job KompWatch handles — the owner keeps final editorial control, but the intel gathering is automated.",
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

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to build a fresh competitive battlecard with KompWatch",
  description:
    "Build and maintain sales battlecards that stay current using automated competitor monitoring.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitiveBattlecardPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitive Battlecard",
            path: "/use-case/competitive-battlecard",
          },
        ]}
      />
      <SoftwareApplicationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
          Use case · Competitive battlecards
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Competitive battlecards{" "}
          <span className="text-brand-600">that stay fresh automatically</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Most battlecards go stale in 30 days. KompWatch monitors your competitors 24/7 and
          feeds AI-summarized changes into your battlecard workflow — so sales always has
          fresh pricing, positioning, and objection handling.{" "}
          <strong className="text-gray-900">40–85× cheaper than Klue or Crayon.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase Battlecard Hero CTA"
            eventProps={{ usecase: "competitive-battlecard" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, weekly digest
          </TrackedCTA>
          <Link
            href="#template"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See battlecard template &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. 5-minute setup. Free plan forever.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why most competitive battlecards fail
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            The battlecard isn&rsquo;t the problem — the stale intel behind it is.
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

      {/* How KompWatch fits the battlecard workflow */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch keeps your battlecards fresh
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. No enterprise contract. No RFP.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {workflow.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What KompWatch feeds into the battlecard */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What KompWatch feeds into your battlecard
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              AI-classified changes, ready to paste into pricing / positioning / objection sections.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {detections.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.description}</p>
                <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                  {d.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battlecard template */}
      <section id="template" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              Free template
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              The 8-section competitive battlecard template
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Copy this structure into Notion, Google Docs, Guru, or Highspot. Then hook
              KompWatch to the pricing + positioning sections so they stay honest.
            </p>
          </div>
          <ol className="mt-12 space-y-5">
            {battlecardSections.map((section) => (
              <li
                key={section.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{section.contents}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase Battlecard Template CTA"
              eventProps={{ usecase: "competitive-battlecard", section: "template" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start tracking competitors free
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-500">
              KompWatch monitors the pages your battlecard depends on.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison to enterprise battlecard platforms */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              KompWatch vs enterprise battlecard platforms
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest comparison. Where Klue and Crayon win, we say so.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Capability</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Klue / Crayon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">Starting price</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Free / $49/mo</td>
                  <td className="px-4 py-3 text-gray-600">$20K–$40K/yr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">Self-serve signup</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Yes</td>
                  <td className="px-4 py-3 text-gray-600">Sales call required</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    Automated competitor monitoring
                  </td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">
                    Playwright, every 1–6h
                  </td>
                  <td className="px-4 py-3 text-gray-600">Yes (enterprise tier)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    AI change summaries
                  </td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Yes (Claude)</td>
                  <td className="px-4 py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    Battlecard storage & versioning
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Bring your own (Notion, Docs, Guru)
                  </td>
                  <td className="px-4 py-3 text-gray-600">Built-in</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    Win/loss interview workflow
                  </td>
                  <td className="px-4 py-3 text-gray-300">—</td>
                  <td className="px-4 py-3 text-gray-600">Yes (enterprise)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    Sales enablement CRM sync
                  </td>
                  <td className="px-4 py-3 text-gray-300">Roadmap</td>
                  <td className="px-4 py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-700">
                    Time to first fresh battlecard
                  </td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Same day</td>
                  <td className="px-4 py-3 text-gray-600">4–8 weeks (onboarding)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Klue and Crayon are better if you need a full battlecard platform with enterprise
            SSO, CRM sync, and win/loss workflow. KompWatch is better if you already have a
            battlecard doc and just need the fresh-intel loop that keeps it current — at 1–2%
            of the cost.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/compare/kompwatch-vs-klue"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Full KompWatch vs Klue &rarr;
            </Link>
            <Link
              href="/compare/kompwatch-vs-crayon"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Full KompWatch vs Crayon &rarr;
            </Link>
            <Link
              href="/vs/klue-alternative"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Klue alternatives ranked &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing fit */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Pricing
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Fresh battlecards for $49/mo — not $30,000/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You already have a battlecard doc. You just need the intel layer that keeps
              pricing and positioning honest. That&rsquo;s KompWatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">
                $0<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Monitor your two highest-priority competitors. Enough to keep your top battlecards from going stale.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for battlecards
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                Cover a full competitive set. Daily digests give you a weekly forcing function for battlecard updates.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly · Slack</div>
              <p className="mt-4 text-sm text-gray-300">
                For CI teams. Hourly checks + Slack digest routes change alerts straight to your #competitive channel.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase Battlecard Pricing CTA"
              eventProps={{ usecase: "competitive-battlecard" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when you&rsquo;re ready
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link href="/pricing" className="underline hover:text-white">
                Full pricing details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Competitive battlecard — FAQ
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

      {/* Related resources */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-xl font-bold tracking-tight text-gray-900">
            Keep going
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/use-case/track-competitor-pricing"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor pricing &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The most-updated section of every battlecard. See how KompWatch monitors pricing pages.
              </p>
            </Link>
            <Link
              href="/compare/kompwatch-vs-klue"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                KompWatch vs Klue &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Full comparison for teams choosing between an enterprise battlecard platform and a lean monitoring layer.
              </p>
            </Link>
            <Link
              href="/switch/klue"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Switch from Klue &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Migration playbook for teams moving off Klue to a leaner battlecard-monitoring stack.
              </p>
            </Link>
            <Link
              href="/use-case/win-loss-analysis"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Win/loss analysis with competitor context &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Every HIGH-severity KompWatch change is a battlecard update candidate — and a
                candidate loss-cause on deals closing that week.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop shipping stale battlecards
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with 2 competitors free. Pro ($49/mo) monitors 10 competitors every 6 hours
            and sends daily AI summaries — the input your battlecards have been missing.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase Battlecard Bottom CTA"
              eventProps={{ usecase: "competitive-battlecard" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need to track more than 50 competitors?{" "}
            <a href="mailto:sales@kompwatch.com" className="underline hover:text-gray-700">
              Contact sales
            </a>{" "}
            for volume pricing.
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
            <Link href="/use-case/track-competitor-pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Track pricing
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
