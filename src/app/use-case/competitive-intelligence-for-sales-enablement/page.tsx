import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitive Intelligence for Sales Enablement — Alerts, Battlecards & Rep-Ready Digests | KompWatch",
  description:
    "KompWatch feeds sales enablement with fresh competitor intel — website changes, pricing moves, feature launches, and messaging shifts — delivered as AE-ready digests every 1–6 hours. When Klue, Kompyte, or Crayon change something, your reps see it before the buyer does. Free for 2 competitors, $49/mo for 10. No 6-month CI platform rollout.",
  keywords: [
    "competitive intelligence for sales enablement",
    "sales enablement competitive intelligence",
    "CI for sales teams",
    "competitor intel for AEs",
    "sales enablement competitor alerts",
    "battlecard automation for sales",
    "rep-ready competitive digest",
    "competitor monitoring for sales enablement",
    "Klue alternative for sales enablement",
    "Crayon alternative for sales teams",
    "sales enablement CI platform",
    "competitor intelligence for account executives",
    "SaaS sales competitive intelligence",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitive-intelligence-for-sales-enablement`,
  },
  openGraph: {
    title:
      "Competitive Intelligence for Sales Enablement — Rep-Ready in Hours, Not Sprints | KompWatch",
    description:
      "Feed sales enablement with fresh competitor intel — pricing, features, messaging, launches — every 1–6 hours. Battlecards stay current, AEs stop getting blindsided. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/competitive-intelligence-for-sales-enablement`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Enablement CI That Ships in a Week — KompWatch",
    description:
      "Klue is a $30–60K/yr enterprise CI platform. If you just need reps to know when competitors change something, that's KompWatch — $49/mo, live in 5 minutes.",
  },
};

const painPoints = [
  {
    title: "Reps get blindsided on discovery calls by competitor changes they weren't briefed on",
    description:
      "The prospect mentions Klue's new AI Insights add-on. Your AE has never heard of it — the battlecard was written 6 weeks ago. The rest of the call is defensive. You lose credibility, and probably the deal. This happens because there's no system feeding fresh competitor intel into enablement between quarterly battlecard refreshes.",
  },
  {
    title: "Battlecards go stale within 30 days of shipping and nobody updates them",
    description:
      "You wrote 8 battlecards in Q1. By Q2 mid-quarter, 3 competitors have re-priced, 2 launched new tiers, and 1 rewrote their homepage positioning. The battlecards in the enablement drive haven't moved. Reps notice, stop trusting the docs, and start winging it — which produces exactly the losses battlecards were supposed to prevent.",
  },
  {
    title: "Enterprise CI platforms (Klue, Crayon) take 3–6 months to roll out and cost $30–60K/yr",
    description:
      "The full-stack CI platforms are built for CI teams of 3+ people with quarterly analyst engagements. If you're a 1-person enablement or product marketing function trying to keep 15 AEs current on 4 competitors, the ROI on a $50K platform is upside-down before you even count the rollout time. You need the monitoring signal, not the platform.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add your top 3–5 competitors' highest-signal pages",
    description:
      "For each competitor, add the pages that actually determine deals: /pricing, /product (or /features), /integrations, /changelog, homepage. That's 5 URLs per competitor. On the Pro plan ($49/mo) you get 10 URL slots — enough for 2 competitors deep or 3 competitors on their 3 highest-signal pages. Team ($149/mo) covers 10 competitors at 5 pages each — the typical sales-enablement loadout.",
  },
  {
    step: "2",
    title: "KompWatch snapshots every page every 1–6 hours",
    description:
      "Pro plan snapshots every 6 hours; Team plan every hour. Every capture is a full Playwright render (JS-rendered pricing tables, dynamic feature grids, and React changelogs all work). Snapshots are timestamped and stored, so weeks later you can pinpoint exactly when a competitor changed something and correlate it to specific deal outcomes.",
  },
  {
    step: "3",
    title: "AI diffs classify changes into what sales actually cares about",
    description:
      "You don't want raw HTML diffs. KompWatch tags every change — PRICING (new tier, changed price point, packaging), FEATURE (new capability, new integration logo), MESSAGING (hero rewrite, category repositioning), LAUNCH (coordinated update across multiple pages). Each change gets a severity score (LOW/MEDIUM/HIGH). HIGH-severity changes are the ones that go straight into a battlecard update.",
  },
  {
    step: "4",
    title: "Rep-ready digest lands in Slack or email — battlecard update ships same day",
    description:
      "Team plan routes HIGH-severity changes into a #sales-enablement Slack channel with a one-paragraph summary written for AEs (\"Klue added AI Insights add-on at $199/mo — expect this in enterprise pitches this month; suggested objection: our AI Analyst is included in Pro plan at $49/mo\"). Enablement updates the battlecard, pins the Slack update, and reps are current before their next call — not 6 weeks later.",
  },
];

const whatWeMonitor = [
  {
    title: "Pricing pages — the single highest-signal surface for sales",
    description:
      "New tiers, changed price points, new add-ons, changed packaging, removed features from lower tiers. Every pricing change directly affects how AEs pitch and how buyers negotiate. KompWatch surfaces the diff and the AI classifier tags it PRICING·HIGH — battlecard update within 24 hours.",
    example:
      '"Klue moved AI Insights from included in Team plan to a $199/mo/user add-on on 2026-07-14. This creates a new objection: buyers will compare Klue Team + AI = $499/mo to KompWatch Team at $149/mo. Suggested talk track updated in battlecard."',
  },
  {
    title: "Feature and product pages — the launch-signal surface",
    description:
      "New rows in feature grids, new integrations added to logo bars, new sub-features under a category header. Most competitor launches show up here before they hit the changelog or blog. AEs get blindsided when a buyer mentions a feature the rep didn't know shipped.",
    example:
      '"Kompyte added \\"native Gong integration\\" to /product feature grid on 2026-06-22. Not yet on their blog or changelog. Sales will hear it from buyers this week — brief the team now, not after the first lost deal."',
  },
  {
    title: "Homepage & category positioning changes",
    description:
      "Competitor hero rewrites are the leading indicator of a repositioning play. \"Competitive intelligence platform\" becoming \"AI competitive enablement\" tells you exactly what narrative sales needs to counter for the next 6 months. KompWatch captures the before/after and flags it as MESSAGING·HIGH.",
    example:
      '"Crayon rewrote hero from \\"the competitive intelligence platform\\" to \\"AI-powered competitive enablement\\" on 2026-07-01. Meta title and category page match. This is a positioning shift, not an A/B test — reps need updated talk track for enterprise deals this quarter."',
  },
  {
    title: "Integration & tech-stack logo bars",
    description:
      "Integrations often decide deals. When Klue adds a Salesforce logo to /integrations, every Salesforce-heavy prospect will ask about it on the next call. KompWatch catches the logo addition the day it ships so enablement can prep the counter-narrative (or the parity announcement, if it's coming).",
    example:
      '"Crayon added Salesforce, HubSpot, and Gong logos to /integrations page on 2026-07-12. Integration expansion — every CRM-related deal this quarter will surface this. Update battlecard\'s Integrations row today."',
  },
  {
    title: "Changelog & release notes",
    description:
      "Traditional launch surface. Not every competitor keeps a real changelog (roughly half don't, or the changelog is stale). Where it exists, KompWatch captures every new entry with timestamp and full text — plus correlates it with the pricing and feature-grid diff that usually accompanies a real launch.",
    example:
      '"Klue /changelog: \\"Introducing Klue AI Insights.\\" Correlated with new $199/mo pricing tier + new AI Analyst row in feature grid + homepage hero rewrite — coordinated launch, not a minor release. Battlecard update priority: this week."',
  },
  {
    title: "Case study & customer logo pages",
    description:
      "A new logo appearing on a competitor's /customers page tells you they just closed a lookalike prospect in your ICP. That's a specific piece of enablement intel: \"they just landed [Company X] — expect them to lead with that reference in [Industry Y] deals.\" AEs use this to preempt reference-based objections in discovery.",
    example:
      '"Kompyte added Datadog logo to /customers page on 2026-06-30. Enterprise-tier reference in the DevTools ICP. Reps working DevTools prospects should preempt: \\"You may have heard Kompyte is used at Datadog — here\'s why we still win on X, Y, Z.\\""',
  },
];

const comparisonTools = [
  {
    tool: "Manual Friday review by an enablement lead",
    verdict:
      "Works for the first month. Turns into a rushed skim by month two and nothing by month three. Misses ~50% of on-site changes and 100% of pricing tweaks that ship mid-week. Reps continue to get blindsided.",
    ok: false,
  },
  {
    tool: "Google Alerts + RSS feeds",
    verdict:
      "Fine for competitor blogs and press releases. Blind to pricing changes, feature grid updates, new integration logos, and homepage rewrites — none of which emit RSS. Covers maybe 30% of the intel enablement actually needs.",
    ok: false,
  },
  {
    tool: "Klue (enterprise CI + battlecard platform)",
    verdict:
      "The category leader. Full battlecard workflows, insights portal, deal-support integration with Salesforce/HubSpot, analyst services. $30–60K+/yr. Right answer if you have a CI team of 3+ and $50K to spend. Overkill if you need the monitoring signal to feed an existing enablement process.",
    ok: false,
  },
  {
    tool: "Crayon (enterprise CI platform)",
    verdict:
      "Similar footprint to Klue — battlecards, insights, competitive newsletter, sales integration. $25–50K+/yr. Same fit criteria: you need the platform, not just the monitoring layer. KompWatch replaces the monitoring 80% for 1/50th the cost.",
    ok: false,
  },
  {
    tool: "Kompyte (mid-market CI platform)",
    verdict:
      "The mid-market alternative to Klue/Crayon. Solid monitoring + battlecard workflows. $12–25K/yr, still a formal sales cycle. Fit if you want the whole platform; KompWatch is the fit if you want just the sensor layer plumbed into whatever enablement stack you already run.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Purpose-built for the sales-enablement monitoring layer. AI-classified diffs, severity scores, Slack routing, digest emails written for AEs. $49–149/mo self-serve. Live in 5 minutes. The right answer when you have an enablement function and need it fed with fresh competitor intel — not when you need a full CI platform rollout.",
    ok: true,
  },
];

const salesRoles = [
  {
    role: "Sales enablement leader",
    problem:
      "Owns battlecards, quarterly refreshes, competitor training. Needs a fresh feed of what changed between refreshes so battlecards stay live documents, not stale PDFs.",
    fit: "KompWatch replaces the \"check every competitor site every Friday\" chore. Digest lands in Slack with a battlecard-ready summary. Update cadence goes from quarterly to weekly-as-needed.",
  },
  {
    role: "Account executive",
    problem:
      "Needs to walk into every discovery call knowing what the competitor has been up to for the past 2 weeks. Gets burned by pricing changes and feature launches they weren't briefed on.",
    fit: "Weekly digest email pre-call. Any HIGH-severity change lands in the #competitors Slack channel same-day. AEs walk into calls current, not stale.",
  },
  {
    role: "Product marketing manager",
    problem:
      "Owns the competitor narrative and messaging. Needs to spot when a competitor is repositioning so they can update the positioning deck and brief enablement before the messaging shift reaches buyers.",
    fit: "Homepage + category-page monitoring surfaces repositioning plays same-day. Feeds directly into PMM's positioning refresh cadence and the enablement briefing.",
  },
  {
    role: "RevOps / sales strategy",
    problem:
      "Runs win/loss analysis and needs to correlate deal losses with competitor moves. Currently reconstructs \"what changed\" from memory and Slack scrollback — unreliable and slow.",
    fit: "Every KompWatch snapshot is timestamped and archived. When a deal is lost to a competitor, RevOps can pull the exact list of competitor changes during the deal cycle and quantify the impact.",
  },
  {
    role: "Founder / solo GTM leader",
    problem:
      "Wearing all four hats above. Cannot manually monitor 4 competitors across 5 pages each on top of running the business. Also cannot justify a $30K CI platform.",
    fit: "$49/mo covers the monitoring, the AI classification, and the digest. Effectively a competitive intelligence analyst that runs 24/7 for less than the cost of one hour of consulting per month.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question:
      "How is this different from a full sales enablement platform like Highspot or Seismic?",
    answer:
      "Highspot and Seismic are content-management-and-training platforms — they house battlecards, playbooks, training modules, and track rep engagement with those assets. They don't produce the competitor intelligence that fills the battlecards. KompWatch is the sensor layer: it detects what changed on competitor sites, writes an AE-ready summary, and delivers it to Slack or email. The two stacks are complementary — enablement teams typically pipe KompWatch alerts into a Highspot/Seismic battlecard update workflow. If you don't have Highspot, a shared Google Doc battlecard fed by KompWatch alerts works fine for teams under about 20 reps.",
  },
  {
    question:
      "How is this different from Klue or Crayon (enterprise CI platforms)?",
    answer:
      "Klue and Crayon are full-stack competitive intelligence platforms — they bundle monitoring + battlecard workflows + insights portal + sales integrations + analyst services into one $30–60K/yr suite with a formal sales cycle and 3–6 month rollout. KompWatch is the monitoring layer only, self-serve, $49–149/mo, live in 5 minutes. The comparison is: \"do we want the platform with the CI-team workflow, or do we want the monitoring signal plumbed into whatever enablement stack we already have?\" If it's the latter — and for most teams under 100 reps it is — KompWatch is the pragmatic answer. When you outgrow it and need buyer interviews, analyst engagements, and integrated battlecard management, Klue or Crayon is the upgrade path. See our detailed comparisons at /compare/kompwatch-vs-klue and /compare/kompwatch-vs-crayon.",
  },
  {
    question: "What does a sales enablement digest actually look like?",
    answer:
      "A single email or Slack post, once per day (Pro) or as changes happen (Team). Structure: (1) HIGH-severity changes at the top, each with a 2–3 sentence AE-ready summary and a suggested talk track or objection response; (2) MEDIUM-severity in the middle, one-liner each; (3) LOW-severity in a collapsed \"noise\" section that reps can skip. Each entry links to a full change view with before/after screenshots and the raw diff. The design goal: a rep can read the whole digest in 60 seconds before a call and know everything material that changed with the competitor since their last briefing.",
  },
  {
    question:
      "How fast do reps get an alert after a competitor changes their pricing page?",
    answer:
      "On the Pro plan ($49/mo), pricing pages are snapshotted every 6 hours — so a mid-morning pricing change shows up in the afternoon digest at the latest. On the Team plan ($149/mo), snapshots run every hour and HIGH-severity pricing changes route into a Slack channel within about 90 minutes of going live. Compare to the industry-typical \"we found out from a lost deal 3 weeks later\" baseline and you have a 2–3 week information advantage on every competitor pricing move. For pricing specifically, this is often the difference between hitting Q3 quota and missing it — pricing changes have the highest deal-cycle impact of any change type.",
  },
  {
    question:
      "Can KompWatch write the battlecard update, or just detect the change?",
    answer:
      "It writes a first draft — a battlecard-ready one-paragraph summary written in AE voice, with a suggested objection response or talk track. It does not update your actual battlecard document (KompWatch doesn't have a battlecard product, deliberately — that's what enablement platforms and Google Docs are for). The workflow that works: KompWatch alert lands in #sales-enablement Slack → enablement lead copies the AI-written summary into the relevant battlecard section → posts a \"Battlecard updated — new [competitor] positioning\" note back to Slack → reps ack. Total elapsed time from competitor change to rep-current battlecard: usually under 4 hours on the Team plan.",
  },
  {
    question:
      "Do we still need battlecards if reps get real-time competitor alerts?",
    answer:
      "Yes. Alerts tell reps what changed; battlecards tell reps what to do about it. A KompWatch alert saying \"Klue added AI Insights at $199/mo\" is useful, but a rep on their fifth call of the day still needs the battlecard section that says \"if buyer asks about AI Insights: our AI Analyst is included in Pro at $49/mo, positioned as a fully-integrated feature rather than a paid add-on — reference the [customer] deal for a proof point.\" KompWatch feeds the battlecards; the battlecards enable the reps. The two are complementary and both required for a mature sales enablement CI motion.",
  },
  {
    question:
      "We're a 5-person startup with 2 AEs — is this overkill for us?",
    answer:
      "No — this is arguably where the ROI is highest. With 2 AEs, every deal matters and every competitor blind-spot costs disproportionately. A single deal lost to a competitor's pricing move you didn't know about is worth more than a decade of KompWatch Pro subscriptions. Start on the Free plan (2 competitors, weekly digest) to validate the pattern, upgrade to Pro when you want daily updates and 3–4 competitors covered. Most early-stage teams stay on Pro through Series A — Team plan and Slack routing become worthwhile around 8–10 reps or when a dedicated enablement person is hired.",
  },
  {
    question:
      "How do we avoid alert fatigue if a competitor makes small changes constantly?",
    answer:
      "Two mechanisms. First, the AI severity classifier: LOW-severity changes (footer edits, testimonial rotations, small microcopy tweaks) are bucketed into a collapsed section reps can skip. HIGH-severity only surfaces for pricing changes, new tiers, new features, integration additions, and launch-scale updates — the ones that actually change how AEs should position. Second, digest cadence: on Pro plan you get one daily digest instead of a real-time firehose, so noise gets deduplicated across the day. In practice most sales-enablement customers see 1–3 HIGH-severity items per week across 3–5 tracked competitors — a reading load of about 5 minutes per week for the whole team.",
  },
  {
    question:
      "Can KompWatch feed into our existing sales stack (Salesforce, HubSpot, Slack)?",
    answer:
      "Slack: yes, on the Team plan — HIGH-severity changes route into a channel of your choice (typically #sales-enablement or #competitors). Email digests: all plans. Direct Salesforce/HubSpot writeback (e.g. attaching a competitor change to a specific opportunity record): not natively, but our webhook endpoint means any Zapier/Make.com or n8n workflow can push KompWatch events into your CRM against a lookup rule (e.g. \"if this deal is flagged Klue-competitive, log the KompWatch alert as an activity\"). We deliberately don't build heavy CRM integrations because most enablement teams prefer to keep KompWatch as a signal-in / battlecard-out layer rather than a system-of-record integration. See our FAQs on CI vs sales enablement (/faq/competitive-intelligence-vs-sales-enablement) and CI for rep onboarding (/faq/ci-for-sales-rep-onboarding-and-ramp) for more.",
  },
  {
    question:
      "What if our competitors don't have a public pricing page or feature grid?",
    answer:
      "This is more common in enterprise-only segments (Salesforce-tier, custom-quote-only vendors). KompWatch still works — we monitor whatever pages the competitor does publish: /product, /platform, /solutions, /industries, homepage, /customers (logo additions are extremely high-signal for enterprise deals), press page. The intel surface shifts from \"pricing changed\" toward \"new customer logo landed, new capability shipped, new industry vertical added.\" This is often the most useful intel for enterprise sales, because pricing moves matter less there and reference/logo momentum matters much more. If you're in that segment, prioritize /customers, /solutions, and /industries as your KompWatch URL slots.",
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
  name: "How to feed sales enablement with real-time competitive intelligence using KompWatch",
  description:
    "Add each competitor's pricing, features, integrations, changelog, and homepage as URL slots. KompWatch snapshots every 1–6 hours, AI-classifies changes, and delivers AE-ready digests to Slack or email — battlecards stay current between quarterly refreshes.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitiveIntelligenceForSalesEnablementPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitive Intelligence for Sales Enablement",
            path: "/use-case/competitive-intelligence-for-sales-enablement",
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
          Use case · Competitive intelligence for sales enablement
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Sales enablement CI that ships in a week —{" "}
          <span className="text-brand-600">not a 6-month Klue rollout</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch feeds sales enablement with fresh competitor intel — pricing moves, feature
          launches, messaging shifts, integration adds — every 1–6 hours. AI-classified digests
          land in Slack or email so battlecards stay current between quarterly refreshes and AEs
          walk into every call knowing what changed.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase SalesEnablementCI Hero CTA"
            eventProps={{ usecase: "competitive-intelligence-for-sales-enablement" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, weekly digest
          </TrackedCTA>
          <Link
            href="#how-it-works"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See how it works &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. Live in 5 minutes. Slack routing on Team plan.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why sales enablement teams fall behind on competitor intel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three failure modes we hear from enablement leaders, PMMs, and founder-GTM leads.
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

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch plugs into your sales enablement workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. Works with Highspot, Seismic, Notion battlecards, or a shared Google
              Doc.
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

      {/* What we monitor */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The six competitor surfaces sales enablement needs monitored
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Priority-ordered by how directly each surface affects live deals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whatWeMonitor.map((d) => (
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

      {/* Sample AE-ready digest */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What an AE-ready digest looks like in Slack
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              60-second read before a call. Battlecard-ready. Written for reps, not analysts.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  #sales-enablement · Daily competitor digest
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Klue · pricing + feature launch · 2026-07-08
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                HIGH · Battlecard update
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">What changed (past 6 hours):</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>Klue /pricing:</strong> new &ldquo;AI Insights&rdquo; add-on at
                  $199/mo/user, positioned as upgrade to Team plan.
                </li>
                <li>
                  <strong>Klue /product:</strong> new &ldquo;AI Analyst&rdquo; row in feature
                  grid, checkmarks under Team + Enterprise.
                </li>
                <li>
                  <strong>Klue homepage:</strong> hero rewritten to &ldquo;AI-powered competitive
                  enablement.&rdquo;
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>For AEs (rep-ready summary):</strong> Klue just launched an AI add-on at
                $199/mo/user. Expect this in enterprise pitches this month, especially in
                AI-forward accounts. <strong>Suggested objection response:</strong> &ldquo;Our AI
                Analyst is included in Pro at $49/mo — no per-seat add-on, integrated with the
                monitoring you&rsquo;re already paying for. Klue Team + AI = $499/mo per seat;
                KompWatch Team = $149/mo total.&rdquo;{" "}
                <strong>Battlecard section updated:</strong> Pricing objections + AI positioning.{" "}
                <strong>Review deals:</strong> 5 in-flight Klue-competitive opps flagged in CRM.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales roles fit */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Who on the GTM team gets value from sales-enablement CI
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Five roles. Each gets the same digest, uses it differently.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {salesRoles.map((r) => (
              <div
                key={r.role}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:flex sm:gap-6"
              >
                <div className="sm:w-56 sm:shrink-0">
                  <div className="text-sm font-bold text-brand-700">{r.role}</div>
                </div>
                <div className="mt-3 sm:mt-0">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Problem: </strong>
                    {r.problem}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong className="text-gray-900">KompWatch fit: </strong>
                    {r.fit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch compares for sales-enablement CI
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest comparison. When another tool is a better fit for your stage, we say so.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Approach</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Where it fits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonTools.map((row) => (
                  <tr key={row.tool}>
                    <td
                      className={`py-3 pr-4 font-semibold ${
                        row.ok ? "text-brand-600" : "text-gray-700"
                      }`}
                    >
                      {row.tool}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/compare/kompwatch-vs-klue"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Klue &rarr;
            </Link>
            <Link
              href="/compare/kompwatch-vs-crayon"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Crayon &rarr;
            </Link>
            <Link
              href="/use-case/competitive-battlecard"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Battlecards from KompWatch data &rarr;
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
              Sales-enablement CI for $49/mo — not $50K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full CI platform to keep enablement fed. You need the
              monitoring signal. That&rsquo;s KompWatch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Free
              </div>
              <div className="mt-2 text-3xl font-bold">
                $0<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Track the 2 competitors reps hit most in deals. Weekly digest catches every
                material change — enough to keep the primary battlecards current without spending a
                dollar.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for solo enablement
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 URLs · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                3 competitors deep (pricing + features + integrations + changelog + homepage each).
                Daily digest to email. The default loadout for a 5–20 rep team with one enablement
                lead or founder-GTM.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Team · best for full enablement function
              </div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 URLs · hourly · Slack routing</div>
              <p className="mt-4 text-sm text-gray-300">
                10 competitors × 5 pages each. HIGH-severity changes route into #sales-enablement
                Slack channel within ~90 minutes. Battlecards ship same-day. The right fit at 20+
                reps or when a dedicated enablement person is hired.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase SalesEnablementCI Pricing CTA"
              eventProps={{ usecase: "competitive-intelligence-for-sales-enablement" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when enablement scales
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
            Competitive intelligence for sales enablement — FAQ
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
            Related use cases &amp; resources
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/use-case/competitive-battlecard"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Build fresh competitive battlecards &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The natural output of sales-enablement CI. Feed KompWatch alerts into a
                battlecard-update cadence — reps stay current between quarterly refreshes.
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
                Correlate deal outcomes with competitor moves. Which of last quarter&rsquo;s losses
                map to a specific competitor pricing or feature change during the deal cycle?
              </p>
            </Link>
            <Link
              href="/use-case/track-competitor-pricing"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor pricing changes &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The single highest-signal surface for sales. New tiers, changed price points, new
                add-ons — every pricing move directly affects live deals.
              </p>
            </Link>
            <Link
              href="/use-case/product-launch-monitoring"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Competitor product launch monitoring &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Know about competitor launches before your sales team hears about them from a
                buyer. Battlecard-ready in hours, not weeks.
              </p>
            </Link>
            <Link
              href="/faq/competitive-intelligence-vs-sales-enablement"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                CI vs sales enablement — what&rsquo;s the difference? &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Where competitive intelligence ends and sales enablement begins — and how the two
                stacks work together in a mature GTM org.
              </p>
            </Link>
            <Link
              href="/faq/ci-for-sales-rep-onboarding-and-ramp"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Using CI for new rep onboarding &amp; ramp &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                How new AE ramp programs use KompWatch snapshots and change history to compress
                competitor learning from months down to a two-week onboarding module.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop shipping battlecards that go stale in 30 days
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 URLs across pricing, features,
            integrations, and homepages every 6 hours. When competitors change something, your reps
            know before their next call.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase SalesEnablementCI Bottom CTA"
              eventProps={{ usecase: "competitive-intelligence-for-sales-enablement" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need enablement for 100+ reps or 20+ competitors?{" "}
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
            <Link
              href="/use-case/competitive-battlecard"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Battlecards
            </Link>
            <Link
              href="/use-case/win-loss-analysis"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Win/loss
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
