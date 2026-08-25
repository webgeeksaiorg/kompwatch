import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitive Intelligence for Product Managers — Roadmap-Ready Competitor Signals | KompWatch",
  description:
    "KompWatch turns competitor pricing, feature, changelog, and hiring changes into a weekly signal feed a product manager can actually use in roadmap review. No CI analyst required, no $30K/yr platform. Track 5 competitors across pricing, /features, changelogs, and careers pages in one $49/mo tool. Free for 2 competitors.",
  keywords: [
    "competitive intelligence for product managers",
    "competitor monitoring for product managers",
    "product manager competitive intelligence",
    "CI for PMs",
    "roadmap competitive intelligence",
    "product manager competitor tracking",
    "competitor changelog monitoring",
    "competitor feature monitoring for PMs",
    "product roadmap competitive analysis",
    "PM competitive analysis tool",
    "competitor intel for product teams",
    "solo PM competitive intelligence",
    "product manager competitor research",
    "SaaS PM competitor tracking",
    "competitor monitoring for product roadmap",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitive-intelligence-for-product-managers`,
  },
  openGraph: {
    title:
      "Competitive Intelligence for Product Managers — Roadmap-Ready Signals | KompWatch",
    description:
      "Turn competitor pricing, feature, changelog, and hiring changes into weekly PM-ready signal. No CI analyst, no $30K platform. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/competitive-intelligence-for-product-managers`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitive Intelligence for Product Managers — KompWatch",
    description:
      "PMs shouldn't reverse-engineer competitor roadmaps from Slack rumors. KompWatch delivers pricing + feature + hiring diffs as a weekly signal feed. $49/mo.",
  },
};

const painPoints = [
  {
    title: "You find out about the competitor's launch from a customer, not from prep",
    description:
      "A prospect on a discovery call mentions the competitor's new AI feature. You've never heard of it. It shipped 3 weeks ago via a quiet changelog entry and a homepage hero swap. You have no system watching those surfaces — so competitor moves land as customer emails and lost deals, not as roadmap inputs.",
  },
  {
    title: "Slack rumors and screenshots are your CI pipeline",
    description:
      "Sales forwards a competitor screenshot every 2 weeks. A customer mentions a pricing change on a QBR. Someone on the eng team saw a tweet. This is not competitive intelligence — this is anecdote arbitrage, and it produces roadmap decisions grounded in vibes instead of signal. It is also the reason your last competitor-response roadmap item was reactive, not preemptive.",
  },
  {
    title: "Klue/Crayon are built for CI analysts you don't have",
    description:
      "The enterprise CI platforms cost $15–45K/yr and are optimized for a 3-person CI function doing quarterly analyst engagements. Solo PMs and small product teams need the monitoring signal — pricing changed, feature shipped, careers page hiring wave — without the platform, workflows, or seat minimums. Nobody sells that at the $49/mo tier except us.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add the 4 highest-signal competitor pages per rival — pricing, features, changelog, careers",
    description:
      "The four PM-relevant surfaces per competitor: /pricing (tier + packaging shifts), /features or /product (what's live), /changelog or /whats-new (what shipped this week), /careers (what's being built in 3–6 months). Four URLs × 2 competitors = 8 URLs — fits inside the Pro plan ($49/mo, 10 slots) with room for a bonus. Team ($149/mo, 50 slots) covers 10 competitors deep.",
  },
  {
    step: "2",
    title: "KompWatch snapshots every 1–6 hours with real Chromium rendering",
    description:
      "Playwright headless Chromium renders JS-driven pages the same way a visitor sees them — no missed changelog entries from client-side routing, no empty diffs from RSS-only scraping. Every snapshot is timestamped and stored, so you can reconstruct the exact state of a competitor's product surface on any given day. This is the audit trail that turns 'I think they launched something in April' into 'they launched X on 2026-04-14, hero copy changed 2026-04-11, /pricing table gained a new tier 2026-04-18.'",
  },
  {
    step: "3",
    title: "AI classifies every diff into pricing / feature / messaging / hiring signal",
    description:
      "Instead of a raw 'page changed, 3 elements different' ping, you get a plain-English classification: 'Crayon /pricing added Enterprise tier with usage-based add-on, previous 3-tier structure now 4-tier. Feature-parity implication: their new tier bundles the AI Insights add-on you were positioning against.' The classification is what makes a diff actionable in a 15-minute weekly review instead of a 90-minute manual investigation.",
  },
  {
    step: "4",
    title: "Weekly digest lands Monday morning — read it, then run roadmap review",
    description:
      "Every Monday you get one email: which competitors changed which surfaces, ranked by severity. Skim it in 5 minutes before roadmap review. Bring the HIGH-severity items into the meeting as 'competitor X did Y, does this change our sequencing?' That's it — no dashboard to check, no CI ceremony, just a weekly signal input to the decision you were already making.",
  },
];

const whatWeMonitor = [
  {
    title: "Pricing page tier + packaging shifts",
    description:
      "New tier introduced, feature moved between tiers, trial length changed, seat pricing added, usage-based component. Every pricing move is a strategy move — a re-pack signal, a segment-up-market push, or a monetization experiment. PMs need to see it inside 24 hours because it changes competitive positioning for every deal in flight.",
    example:
      '"Crayon /pricing: added \\"Enterprise Plus\\" tier at $200/user/mo (previously Enterprise topped at $100/user/mo). Advanced AI Insights moved from Enterprise → Enterprise Plus. Implication: our AI feature parity story now lands vs. their base tier, not their premium."',
  },
  {
    title: "Changelog + release notes — what actually shipped this week",
    description:
      "The changelog is the ground truth for competitor shipping velocity — not the marketing landing page, not the press release. KompWatch snapshots /changelog, /whats-new, /release-notes, and equivalent pages, then AI-summarizes each new entry so you can scan a week's worth of competitor shipping in 60 seconds.",
    example:
      '"Klue /changelog: 3 new entries this week — (1) Slack integration for CI alerts, (2) Salesforce-native battlecard sidebar, (3) AI-generated first-draft battlecards from a URL. Item 3 is directly adjacent to our Q3 roadmap bet — worth a sequencing conversation."',
  },
  {
    title: "Feature page additions — the launch that wasn't announced",
    description:
      "Not every feature ships with a launch post. Many quietly appear in the /features or /product sidebar first, then get an announcement 4–8 weeks later once telemetry looks good. KompWatch catches these day-one and flags them as unannounced-live features — often the highest-value signal for a PM because you get 4–8 weeks of lead time before the competitor even claims the win.",
    example:
      '"Kompyte /features sidebar gained \\"Auto-Snapshot Comparison\\" link with a live product page — no launch tweet, no blog post, no changelog entry yet. Feature has been live for at least 5 days. Likely a soft launch pending marketing readiness."',
  },
  {
    title: "Careers page hiring waves — the 3–6 month roadmap leak",
    description:
      "Three Applied AI Engineer roles in 30 days is an AI product being built. Four PMM + solutions engineer roles in a fortnight is a GTM rebuild. PMs who want lead time on competitor bets should read the careers page more often than the changelog — hiring leads shipping by 3–6 months. See our full guide on competitor job postings monitoring for the classification framework.",
    example:
      '"Klue Greenhouse board: 3 new Applied AI Engineer + 1 Head of Applied AI roles in 21 days. First AI-specific hires since 2025-11. High-confidence signal of AI product line in build — 3–6 months to launch."',
  },
  {
    title: "Homepage headline and category-language shifts",
    description:
      "When a competitor rewrites their homepage headline or swaps the primary category word ('CI platform' → 'AI-native CI'), they're testing a repositioning. Category-language shifts predict pricing + packaging changes by 4–8 weeks, which predict launch announcements by another 4 weeks. KompWatch surfaces headline diffs the day they ship.",
    example:
      '"Klue homepage: headline changed from \\"Competitive intelligence platform\\" → \\"AI-native competitive intelligence.\\" Primary CTA copy updated. First AI-first positioning shift in 12 months — pairs with the hiring wave detected 6 weeks ago."',
  },
  {
    title: "Integration + partnership additions — the ecosystem play",
    description:
      "New integrations in the /integrations page (or new logos on the homepage 'trusted by' strip) are quiet ecosystem signals. A competitor adding Salesforce, Slack, or HubSpot integrations means they're going enterprise. A competitor adding Notion, Linear, or Cursor means they're going developer-tools. KompWatch flags new integrations and asks whether the ecosystem drift matters for our roadmap.",
    example:
      '"Crayon /integrations: added Gong, Chorus, Clozd (3 win-loss/call-intelligence platforms). Ecosystem move into revenue-intelligence. Implication: they\'re positioning against Klue\'s enterprise CI motion, not against KompWatch\'s monitoring motion."',
  },
];

const comparisonTools = [
  {
    tool: "Klue / Crayon (enterprise CI platforms)",
    verdict:
      "Full-stack CI platforms with battlecards, sales enablement, win-loss modules, and analyst services. Median deal $15–45K/yr (Vendr), 3–6 month rollout, sales-led. Right fit for a 3+ person CI team with quarterly analyst engagements. Overkill for a solo PM who just needs a signal feed on 4 competitors.",
    ok: false,
  },
  {
    tool: "Kompyte / Contify",
    verdict:
      "Mid-market CI tools priced $500–2000/mo. More monitoring-focused than Klue/Crayon, but still built around a curated 'insights' dashboard and workflow layer. If you want a full CI product with pre-built battlecard authoring and quarterly reports, these fit — if you just want the monitoring signal into a weekly email, they are 10–40x priced for what you'll use.",
    ok: false,
  },
  {
    tool: "Google Alerts + manual page checks",
    verdict:
      "Free. Catches press releases and blog posts weeks after they matter. Doesn't catch pricing page changes, quiet feature additions, changelog entries, or careers-page hiring waves — the four surfaces where the actual product signal lives. Useful as a supplement; useless as the primary CI system for a PM.",
    ok: false,
  },
  {
    tool: "Visualping / Distill.io (generic change detection)",
    verdict:
      "Cheap ($10–30/mo) generic web-change trackers. Fire a diff on every DOM change, no classification, no pricing/feature/hiring interpretation. Great for one URL you personally care about; frustrating for a PM watching 5 competitors × 4 surfaces because the alert-to-signal ratio is inverted — most diffs are cookie banners.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Purpose-built for scheduled competitor page monitoring with AI-classified diffs — pricing, /features, changelog, careers, homepage in one workflow, one weekly digest, one $49/mo bill. No annual contract, no seat minimums, no sales call. Designed for the solo PM or small product team that needs the signal without the CI platform.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does 'competitive intelligence for product managers' actually mean day-to-day?",
    answer:
      "For a solo PM or small product team, it means having a repeatable signal input into three decisions: (1) roadmap sequencing — did a competitor ship something that changes what we should prioritize next quarter, (2) positioning — did a competitor reposition in a way that changes our messaging or ICP fit, and (3) pricing — did a competitor re-pack or change tiers in a way that opens/closes segments. You don't need a CI analyst or a $30K platform for this — you need a Monday-morning email that says 'here's what changed on 4 competitors' 4 highest-signal pages last week' so you can bring the highest-severity items into roadmap review.",
  },
  {
    question: "Which competitor pages should a PM actually monitor?",
    answer:
      "The four surfaces that predict product moves are: (1) /pricing — tier and packaging changes, always the loudest strategy signal, (2) /features or /product — new features going live, often before an announcement, (3) /changelog or /whats-new — ground truth for competitor shipping velocity, (4) /careers or their Greenhouse/Lever board — leads shipping by 3–6 months. Add /homepage as a fifth if you have budget — headline changes predict repositioning. That's 4–5 URLs per competitor. Pro's 10-URL budget covers 2 competitors deeply; Team's 50-URL budget covers 10.",
  },
  {
    question: "How does this differ from your sales-enablement CI page?",
    answer:
      "Both use KompWatch, both feed off the same monitoring engine, but the workflows are different. Sales enablement CI is about keeping AEs briefed in near-real-time so they don't lose deals to competitor blind spots — the primary artifact is a battlecard update, the primary user is the AE, and the primary decision is 'how do I win the deal in front of me.' Product-manager CI is about roadmap and positioning — the primary artifact is a weekly signal digest, the primary user is the PM, and the primary decision is 'does this change what we should build or how we should describe it next quarter.' Same monitoring, different downstream ritual.",
  },
  {
    question: "Can a solo PM actually run this without a CI analyst?",
    answer:
      "Yes — that's the entire design point. The Monday-morning digest reads in 5 minutes. HIGH-severity items get 15 minutes of thought and a Slack post to the product team. That's the entire weekly CI ritual for a solo PM at Pro tier. You don't need a CI analyst, a Klue rollout, or a quarterly PMM engagement. You need scheduled snapshots + AI-classified diffs + a weekly digest — which is what KompWatch is. If your competitive set grows past 10 competitors or you want Slack routing for HIGH-severity events, Team ($149/mo) adds those. Most solo PMs stay on Pro indefinitely.",
  },
  {
    question: "How does KompWatch pair with Productboard, Linear, or Jira for roadmap review?",
    answer:
      "KompWatch is the input layer; Productboard/Linear/Jira is the decision layer. The workflow: Monday digest arrives, you skim it for HIGH-severity items, then for each HIGH-severity competitor change you open your roadmap tool and either (a) add a 'competitor response' spike, (b) re-sequence a feature that's now less urgent, or (c) file a research card for the next quarterly review. KompWatch is deliberately not a roadmap tool — we don't want to be a bad Productboard. We want to be the CI signal feed that your existing roadmap tool has been missing.",
  },
  {
    question: "What's the difference between this and just reading competitor changelogs manually?",
    answer:
      "Time and coverage. Reading 4 competitors × 4 surfaces = 16 pages, weekly, takes ~45 minutes if you're disciplined and 0 minutes if you're busy (which you are). Also, /pricing pages and /features pages don't have RSS — you have to remember to check them, and diffing them mentally against last week is unreliable. KompWatch's job is to make the 'busy week' outcome equal to the 'disciplined week' outcome: the diffs happen automatically, the classification happens automatically, and the digest lands Monday whether you're in-office or on PTO. The 5 minutes you spend reading the digest is the entire CI cost.",
  },
  {
    question: "Does this work for B2B SaaS, or is it specific to a category?",
    answer:
      "It works for any category where competitors have public marketing pages — which is essentially all of B2B SaaS, plus most of B2C SaaS. Pricing pages, feature pages, and changelogs are near-universal. Careers pages via Greenhouse/Lever/Ashby are near-universal. The classification model is generic enough to work across dev tools, marketing SaaS, HR tech, fintech, and horizontal collaboration. Categories where this works less well: enterprise deals with no public pricing (e.g., pure Fortune-500 platforms), and hardware where the product doesn't live on a marketing page.",
  },
  {
    question: "What's a realistic weekly time budget for a PM using this?",
    answer:
      "5 minutes on Monday to skim the digest. 15 minutes to Slack the product team about any HIGH-severity items and add a note to the next roadmap review. 10 minutes ad-hoc if a diff prompts a deeper look at a competitor page. Total: ~30 minutes per week. Compare to reading 4 competitors' changelogs + pricing + features + careers manually (60–90 min if you actually do it; 0 min in a busy week when you don't). The point is not to add work — the point is to make the CI signal fit inside a 30-minute weekly cap that busy PMs will actually maintain.",
  },
  {
    question: "How is this different from the /use-case/competitor-feature-tracking or /use-case/competitor-blog-monitoring pages?",
    answer:
      "Those pages describe individual monitoring workflows — feature tracking is about /features and /product pages specifically; blog monitoring is about competitor blogs specifically. This page describes the PM-specific composition of those workflows: which 4–5 pages per competitor to monitor, how to fit the digest into roadmap review, and how the PM decision layer differs from the sales enablement or content marketing decision layers. Think of feature tracking / blog monitoring / pricing tracking as ingredients, and this page as the PM-specific recipe.",
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
  name: "How a product manager runs competitive intelligence with KompWatch",
  description:
    "Add the 4 highest-signal competitor pages per rival (pricing, features, changelog, careers), let KompWatch snapshot them every 1–6 hours, receive an AI-classified weekly digest, and bring HIGH-severity items into roadmap review.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitiveIntelligenceForProductManagersPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitive Intelligence for Product Managers",
            path: "/use-case/competitive-intelligence-for-product-managers",
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
          Use case · Competitive intelligence for product managers
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Roadmap-ready competitor signals —{" "}
          <span className="text-brand-600">without a CI analyst</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots each competitor&rsquo;s pricing, /features, changelog, and careers
          pages on a schedule — then sends a plain-English weekly digest a product manager can
          skim in 5 minutes and bring straight into roadmap review. No dashboards to babysit,
          no $30K/yr enterprise CI rollout.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase PMIntel Hero CTA"
            eventProps={{ usecase: "competitive-intelligence-for-product-managers" }}
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
          No credit card. 5-minute setup. Weekly digest fits inside a 30-minute weekly CI budget.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why PMs end up doing CI badly — or not at all
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three failure modes we hear from every solo PM and small product team.
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
              The 4-step PM CI workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Set up in 15 minutes. Runs on autopilot. Fits inside a 30-minute weekly cap.
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
              Six competitor signals a PM should never miss
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Priority-ordered by how strongly they predict a roadmap or positioning implication.
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

      {/* Sample digest entry */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What a Monday morning PM digest entry looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Skim in 60 seconds. Bring the HIGH-severity items into roadmap review the same
              afternoon.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Digest · Weekly · PM signal
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Crayon · pricing repack + AI Insights repositioning
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                PRICING · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Window:</strong> 2026-05-10 → 2026-05-17 (7 days).
                Crayon /pricing + /features snapshot deltas.
              </p>
              <p>
                <strong className="text-gray-900">What changed on their product surface:</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>/pricing:</strong> New &ldquo;Enterprise Plus&rdquo; tier at
                  $200/user/mo. Previous top tier (Enterprise) was $100/user/mo. Advanced AI
                  Insights add-on moved from Enterprise → Enterprise Plus.
                </li>
                <li>
                  <strong>/features:</strong> Two new features listed in sidebar — &ldquo;AI
                  Battlecard Drafts&rdquo; and &ldquo;Salesforce-Native Sidebar.&rdquo; No launch
                  post yet; likely soft launch in progress.
                </li>
                <li>
                  <strong>Homepage:</strong> Category-language shift — headline moved from
                  &ldquo;Competitive intelligence platform&rdquo; → &ldquo;AI-native CI for
                  revenue teams.&rdquo;
                </li>
                <li>
                  <strong>Careers page correlation:</strong> Confirms the 4-role AI hiring wave
                  detected in April. Pricing + positioning shift is the launch payoff.
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Suggested roadmap-review discussion:</strong> (1) Our AI-parity story now
                lands vs. Crayon&rsquo;s base tier, not their premium — worth re-scoring the
                &ldquo;AI insights&rdquo; feature we&rsquo;ve been deprioritizing. (2) The
                Salesforce-native sidebar is directly adjacent to our Q3 Salesforce integration
                bet — sequencing question: ship first or wait to see their reception? (3)
                Category-language shift means their sales team will now open with &ldquo;AI-native
                CI&rdquo; — brief our PMM to update battlecard opening frame.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch compares to other PM CI approaches
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest comparison. When another tool is better for your job, we say so.
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
              href="/use-case/competitor-feature-tracking"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Track feature launches &rarr;
            </Link>
            <Link
              href="/use-case/track-competitor-pricing"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Track competitor pricing &rarr;
            </Link>
            <Link
              href="/use-case/competitor-job-postings-monitoring"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Monitor competitor hiring &rarr;
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
              PM CI for $49/mo — not $30K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full CI platform to bring competitor signal into roadmap
              review. You need scheduled snapshots + AI diffs + a Monday email. That&rsquo;s
              KompWatch.
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
                Track 1 competitor across 2 pages (pricing + features). Weekly PM digest lands
                Monday.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for solo PMs
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 URLs · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                2 competitors × (pricing + features + changelog + careers) + 2 flex slots.
                Daily digest. The default loadout for solo PMs.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Team
              </div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 URLs · hourly · Slack</div>
              <p className="mt-4 text-sm text-gray-300">
                10 competitors × 4–5 surfaces each. Slack routes HIGH-severity events into
                #product or #ci the moment they hit.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase PMIntel Pricing CTA"
              eventProps={{ usecase: "competitive-intelligence-for-product-managers" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when your competitive set grows
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
            Competitive intelligence for product managers — FAQ
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
              href="/use-case/competitor-feature-tracking"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor feature launches &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Deep-dive on the /features + /product monitoring workflow — the single highest-signal
                surface for PMs.
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
                Tier restructures, trial-length shifts, and new packaging always land on /pricing
                first. Read the workflow.
              </p>
            </Link>
            <Link
              href="/use-case/competitor-job-postings-monitoring"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Monitor competitor job postings &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Hiring waves lead shipping by 3–6 months. The leading indicator for a PM who wants
                lead time on competitor bets.
              </p>
            </Link>
            <Link
              href="/use-case/competitive-intelligence-for-sales-enablement"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                CI for sales enablement &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Same monitoring engine, different downstream ritual — rep-ready digests, battlecard
                refresh cadence, near-real-time alerts.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop reverse-engineering competitor roadmaps from Slack rumors
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitor pages free. Pro ($49/mo) monitors 10 URLs across pricing, features,
            changelogs, and careers pages — every 6 hours. The Monday digest tells you which
            competitor moves matter and what to do about them this sprint.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase PMIntel Bottom CTA"
              eventProps={{ usecase: "competitive-intelligence-for-product-managers" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need to monitor more than 50 URLs?{" "}
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
              href="/use-case/competitor-feature-tracking"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Feature tracking
            </Link>
            <Link
              href="/use-case/track-competitor-pricing"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Pricing tracking
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
