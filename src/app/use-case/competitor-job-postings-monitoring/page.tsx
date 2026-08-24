import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitor Job Postings Monitoring — Turn Hiring Signals Into Roadmap Intel | KompWatch",
  description:
    "Every new competitor job posting is a leaked roadmap line. Monitor careers pages, Greenhouse/Lever boards, and LinkedIn job feeds on a schedule. KompWatch snapshots and AI-classifies new roles into product/GTM/AI-pivot signals — before your customer asks about the launch. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "competitor job postings monitoring",
    "monitor competitor job postings",
    "competitor hiring signals",
    "track competitor careers page",
    "competitor careers page monitoring",
    "job postings as competitor signal",
    "competitor hiring intelligence",
    "monitor competitor Greenhouse board",
    "monitor competitor Lever board",
    "competitor headcount signals",
    "competitor roadmap from job listings",
    "hiring signal competitive intelligence",
    "job postings competitive intelligence",
    "track competitor engineering hires",
    "track competitor AI hiring",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitor-job-postings-monitoring`,
  },
  openGraph: {
    title:
      "Competitor Job Postings Monitoring — Hiring as Leaked Roadmap | KompWatch",
    description:
      "Every new competitor role is a roadmap line before it ships. Snapshot careers pages + job boards, get AI-classified hiring digests. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/competitor-job-postings-monitoring`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Job Postings Monitoring — KompWatch",
    description:
      "New competitor job listings leak the roadmap 3–6 months before launch. KompWatch catches them the day they post. $49/mo.",
  },
};

const painPoints = [
  {
    title: "You find out about the competitor's new AI product from LinkedIn 6 months late",
    description:
      "They posted 3 \"Applied AI Engineer\" roles in April. You saw the launch tweet in October. The gap between the hiring signal and the launch is exactly the window you had to prep positioning, ship a defensive feature, or brief sales — and you spent it in the dark because nobody was watching the careers page.",
  },
  {
    title: "LinkedIn job alerts miss half the roles and give you zero pattern context",
    description:
      "LinkedIn job alerts fire on individual roles matching your saved search — one at a time, buried in a marketing digest, with no context on what else the company posted the same week. A single \"Senior PMM\" listing means nothing. Five PMM + enablement + solutions-engineer roles in a fortnight is a GTM rebuild — and only pattern-level monitoring surfaces it.",
  },
  {
    title: "Careers pages, Greenhouse boards, and Lever boards all live in different places",
    description:
      "Most competitors have a marketing /careers page (curated), a Greenhouse or Lever board (source of truth), plus roles cross-posted on LinkedIn and Wellfound. Manually checking three surfaces per competitor per week across 5 competitors is 45 minutes you never actually spend. It's the first CI ritual to slip when the quarter gets busy.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add each competitor's careers page and job board as monitored URLs",
    description:
      "The /careers or /jobs page on their marketing site, plus their Greenhouse (boards.greenhouse.io/competitor) or Lever (jobs.lever.co/competitor) board — usually 2 URLs per competitor. Free covers 2 URLs; Pro (10 URLs) handles 4–5 competitors deeply; Team (50 URLs) covers a full competitive set of 15+ companies.",
  },
  {
    step: "2",
    title: "KompWatch snapshots the boards every 1–6 hours",
    description:
      "Playwright renders each careers page fully — including JS-driven job lists on Greenhouse/Lever/Ashby that curl or RSS scrapers miss. Every snapshot is timestamped, so you can look back at exactly which roles were open on any given day, and reconstruct the hiring wave that preceded a launch.",
  },
  {
    step: "3",
    title: "AI classifies each new role into product / GTM / AI-pivot / scale signal",
    description:
      "Instead of a raw \"page changed\" ping, you get an AI summary: \"Klue posted 4 new roles this week — 3 Applied AI Engineer + 1 Head of Applied AI. First AI-specific hires in 6 months. High-confidence signal of an AI product line being built.\" The classification is what turns a job listing into a roadmap line.",
  },
  {
    step: "4",
    title: "Digest lands in your inbox — hiring signals filed with the rest of the CI feed",
    description:
      "Free plan: weekly digest with hiring changes rolled up. Pro: daily digest, hiring changes flagged in the same email as pricing/messaging/feature diffs. Team: Slack routes for HIGH-severity hiring waves (3+ roles in one function in one week) so PMM/product can react inside the same sprint.",
  },
];

const whatWeMonitor = [
  {
    title: "New engineering roles by specialty — AI, ML, infra, security",
    description:
      "\"Applied AI Engineer,\" \"ML Platform Engineer,\" \"Staff Security Engineer,\" or \"Head of Infrastructure\" postings are the loudest roadmap signals in the market. A single AI role is noise. 3+ AI roles in 6 weeks is a product line being built. KompWatch surfaces the cluster, not the individual role.",
    example:
      '"Klue posted 3 Applied AI Engineer + 1 Head of Applied AI roles in the last 21 days. First AI-specific engineering hires since 2025-11. High-confidence signal of an AI product line in build."',
  },
  {
    title: "GTM hiring waves — PMM, sales enablement, solutions engineering",
    description:
      "A single PMM hire is a backfill. Five PMM + 2 sales enablement + 3 solutions engineer roles inside a quarter is a GTM rebuild — usually tied to a category push, an enterprise-motion pivot, or a fresh funding round. Catch the wave early and you can counter-position, defend accounts, or hire your own PMM ahead of them.",
    example:
      '"Crayon opened 4 GTM roles this week: 2 Senior PMM, 1 Sales Enablement Lead, 1 Solutions Engineer (Enterprise). GTM headcount hiring wave — likely tied to a Q3 enterprise motion push."',
  },
  {
    title: "Leadership and VP-level roles — the 3-month strategy signal",
    description:
      "A \"VP Product,\" \"Head of Growth,\" or \"Chief Revenue Officer\" opening usually means the last one just left. That's a strategy inflection point — decisions on the current roadmap freeze until the replacement lands. KompWatch flags leadership roles the day they post, so you can update battlecards and brief sales on the transition.",
    example:
      '"Kompyte opened Head of Product role. Previous Head of Product\'s LinkedIn changed to \'Advisor\' 2 weeks ago. Product leadership transition in progress — expect roadmap decisions to slow for 60–90 days."',
  },
  {
    title: "New office locations, remote-hub expansions, and geo signals",
    description:
      "When a competitor starts hiring in a new city — \"São Paulo,\" \"Bangalore,\" \"remote (EMEA)\" — they're opening a market or an engineering hub. Geo hiring is one of the earliest signals of international expansion or a regional GTM motion, months before a press release.",
    example:
      '"Semrush job board added 7 EMEA-remote roles across product + sales in the last 30 days. Previous EMEA hiring cadence was 1–2 roles/mo. Regional expansion push — likely tied to the London GTM hub announced in Q1."',
  },
  {
    title: "Role compensation, seniority shifts, and hiring bar signals",
    description:
      "Job listings that added public salary bands (US pay-transparency laws), or shifted from \"Senior\" to \"Staff/Principal\" seniority, tell you what the competitor thinks talent is worth and how deep they're going on a function. Rising senior-IC comp is often correlated with a rising round or a mature engineering culture.",
    example:
      '"Klue Applied AI Engineer role posted at $220K–$280K base + equity. 40% above their standard Senior Eng band. Aggressive AI-talent posture — willing to pay top-of-market for the pivot."',
  },
  {
    title: "Retired job listings and hiring freezes",
    description:
      "The other side of the signal: roles quietly disappearing from the board without being filled (recognizable when the same job never converts to a LinkedIn \"welcomed to the team\" post) is a hiring-freeze or reorg signal. KompWatch tracks total open-role count over time — a sustained drop is often the earliest public signal of a downturn or a runway extension.",
    example:
      '"Kompyte careers board dropped from 34 open roles to 11 over 5 weeks. No matching \\"joined\\" LinkedIn posts. Hiring freeze in effect — likely runway-extension move post-Semrush acquisition uncertainty."',
  },
];

const comparisonTools = [
  {
    tool: "LinkedIn job alerts",
    verdict:
      "Fires on individual roles matching a saved search. No cross-role pattern detection, no context on what else the company posted the same week, no coverage of roles posted only on the company's own board. Useful as a real-time single-role ping — not for the strategic hiring-wave signal.",
    ok: false,
  },
  {
    tool: "TheirStack / Draup / Aura (hiring-intel platforms)",
    verdict:
      "Purpose-built hiring-intel tools. Excellent depth on headcount trends, LinkedIn profile changes, and multi-source enrichment. Enterprise pricing (typically $15K–$50K/yr, sales-led) and built for talent-intel or investor-research teams, not solo PMMs. Overkill if hiring signals are one input into a broader CI workflow.",
    ok: false,
  },
  {
    tool: "Google Alerts on \"[competitor] jobs\"",
    verdict:
      "Free but noisy and unreliable. Catches press coverage of hiring rounds, not the actual board. No pattern detection, no snapshot history, no diff of exactly which roles opened or closed this week.",
    ok: false,
  },
  {
    tool: "Klue / Crayon competitor intel platforms",
    verdict:
      "Include \"insights\" modules that sometimes surface hiring signals as a curated feed. Median deal ~$15–40K/yr (Vendr), annual contracts, sales-led. Overkill if you specifically want careers-page monitoring plus the rest of the marketing surfaces (pricing, blog, features) in one lightweight tool.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Purpose-built for scheduled competitor page monitoring with AI-classified diffs — careers pages, Greenhouse/Lever/Ashby boards, and every other competitor surface (pricing, blog, homepage, features) in one workflow. $49/mo self-serve, no annual contract, no sales call. Free plan covers 2 competitors.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Why treat competitor job postings as competitive intelligence at all?",
    answer:
      "Because they're one of the very few public data sources that predict what a competitor will ship, not what they already shipped. A press release lags a launch by weeks. A pricing page changes on launch day. Blog posts announce it after the fact. Job postings — especially clustered ones (\"3 Applied AI Engineers,\" \"5 PMMs,\" \"2 Solutions Engineers\") — leak the roadmap 3–6 months in advance because they describe the team the competitor is building to execute a specific bet. Any PMM, founder, or CI lead who is not watching competitor careers pages is leaving 3–6 months of lead time on the table.",
  },
  {
    question: "Which URLs should I actually monitor for hiring signals?",
    answer:
      "For each competitor, monitor two URLs: (1) their marketing careers page — usually /careers, /jobs, or /company/careers — which is the curated, positioning-heavy list, and (2) their applicant-tracking-system board — boards.greenhouse.io/{competitor}, jobs.lever.co/{competitor}, or {competitor}.ashbyhq.com/careers — which is the source of truth with every open role. Marketing careers pages sometimes hide sensitive roles; the ATS board never does. Pro's 10-URL budget covers 4–5 competitors deeply this way. If you only want one URL per competitor, use the ATS board — the raw signal is stronger.",
  },
  {
    question: "How do I tell a real \"hiring wave\" apart from normal backfill?",
    answer:
      "Look for three patterns KompWatch surfaces in the digest: (1) role clustering — 3+ roles in one function (engineering, PMM, sales) inside a 30-day window is a wave; single roles are backfill. (2) Specialty concentration — 3 \"Applied AI Engineer\" roles is a product bet; 3 generic \"Software Engineer\" roles is scaling. (3) Cross-function correlation — new PMM + new sales enablement + new solutions engineer in the same fortnight is a GTM rebuild, not three coincident backfills. KompWatch classifies the wave and calls out the pattern in the digest so you don't have to reverse-engineer it from raw listings.",
  },
  {
    question: "Can KompWatch monitor Greenhouse, Lever, and Ashby boards specifically?",
    answer:
      "Yes. All three are standard public web pages rendered by KompWatch's Playwright headless Chromium — including the JS-driven role lists that curl or RSS scrapers can't read. Paste boards.greenhouse.io/{competitor} or jobs.lever.co/{competitor} or {competitor}.ashbyhq.com/careers into the competitor URL field. If a competitor uses a self-hosted board or an obscure ATS, KompWatch still works as long as the page is public and doesn't require login. If a board sits behind a login or CAPTCHA, KompWatch can't snapshot it.",
  },
  {
    question: "What does a typical hiring-signal digest entry look like?",
    answer:
      "Something like: \"Klue Greenhouse board · 4 new roles opened this week: Applied AI Engineer (2), Staff ML Platform Engineer, Head of Applied AI. First AI-specific engineering hires since 2025-11. Cluster suggests AI product line in active build — 3–6 month lead time to launch. Suggested next moves: (1) update battlecard AI-differentiation section, (2) brief sales on likely AI positioning shift, (3) check whether we should accelerate our own AI roadmap disclosure to prospects.\" It reads like a CI analyst's memo — because that's what KompWatch's AI is doing behind the scenes, on every diff.",
  },
  {
    question: "How does hiring monitoring pair with the other KompWatch use cases?",
    answer:
      "Hiring is the earliest signal; messaging is the next; pricing/features are the launch signal. Most teams run all four on the same competitor: careers page (leading indicator, 3–6 months out), homepage/messaging (mid, 4–8 weeks out), pricing + /features + changelog (lagging, launch day). The digest stitches them together — so when the /pricing page finally changes, you can see the hiring wave from 4 months ago that predicted it, and your battlecard update is already drafted. Pro's 10-URL budget covers 4–5 competitors across careers + homepage + pricing this way.",
  },
  {
    question: "Is this legal / does it violate LinkedIn or Greenhouse terms of service?",
    answer:
      "KompWatch snapshots public web pages — the same pages any prospective candidate would visit — at a low, respectful cadence (every 1–6 hours per URL, not every minute). This is standard public-web monitoring and is not the same as scraping LinkedIn profiles at scale or bulk-downloading applicant data. We don't scrape LinkedIn directly at all: LinkedIn's terms are hostile to programmatic scraping, so KompWatch focuses on company-owned surfaces (careers pages, ATS boards) which are publicly published for candidates to read. If your compliance team wants specifics on our snapshot frequency and user-agent, email support@kompwatch.com and we'll share the details.",
  },
  {
    question: "What's a realistic setup for a solo PMM with a $49/mo budget?",
    answer:
      "Pro plan, 10 URL slots, allocated as: 4 competitors × 2 URLs each (careers page + ATS board) = 8 URLs, plus 2 flex slots for the priority competitor's /pricing and /product pages. Daily digest lands in your inbox with hiring changes flagged in the same email as pricing/messaging/feature diffs. Weekly, spend 15 minutes reviewing HIGH-severity hiring waves and deciding whether they change your battlecard, roadmap conversations, or sales briefings. Over 90 days you'll have a searchable log of every hiring wave across the competitive set — which becomes the source material for board-meeting competitive-strategy slides. Total time cost: ~1 hour/month. Total spend: $588/yr — less than 3 hours of a fractional CI consultant's day rate.",
  },
  {
    question: "Can hiring signals actually catch things like the Klue AI pivot?",
    answer:
      "Yes, and this is one of the highest-value examples in the KompWatch playbook. In mid-2025, before the June 2026 Klue layoffs and AI pivot were public, Klue's Greenhouse board added multiple Applied AI Engineer and ML Platform Engineer roles over a ~90-day window. Any competitor watching the board would have seen the AI-team buildout 6+ months before the public AI-first repositioning and the associated headcount reduction. KompWatch's job is to surface that pattern in the digest so a PMM doesn't have to check the board manually every week — you get the clustered-role summary in the same weekly email as the pricing and messaging changes, and can brief your executive team while the strategic implication is still fresh.",
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
  name: "How to monitor competitor job postings with KompWatch",
  description:
    "Add each competitor's careers page and ATS board (Greenhouse/Lever/Ashby) as monitored URLs, let KompWatch snapshot them every 1–6 hours, receive AI-classified digests of new roles / hiring waves / leadership transitions, and feed HIGH-severity hiring waves into weekly CI reviews.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitorJobPostingsMonitoringPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitor Job Postings Monitoring",
            path: "/use-case/competitor-job-postings-monitoring",
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
          Use case · Competitor job postings monitoring
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Every new competitor job posting is{" "}
          <span className="text-brand-600">a leaked roadmap line</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots each competitor&rsquo;s careers page and Greenhouse / Lever / Ashby
          board on a schedule — then sends an AI-classified digest of new roles, hiring waves, and
          leadership transitions. LinkedIn tells you a role exists; KompWatch tells you what the
          cluster of roles means for the roadmap.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase JobMonitoring Hero CTA"
            eventProps={{ usecase: "competitor-job-postings-monitoring" }}
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
          No credit card. 5-minute setup. Works with Greenhouse, Lever, Ashby, and any public
          careers page.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why PMMs keep missing competitor hiring waves
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three gaps we hear from every PMM, founder, and CI lead running competitive intel on a
            careers page.
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
              How KompWatch fits into your CI workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. Works alongside your existing battlecard, win-loss, and roadmap-briefing
              rituals.
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
              Six hiring-side signals KompWatch catches that LinkedIn misses
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Priority-ordered by how strongly they correlate with a competitor&rsquo;s next
              roadmap bet.
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
              What a Monday morning hiring-signal digest entry looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Open it during your weekly CI review. Read it in 60 seconds. Update the battlecard
              the same afternoon.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Digest · Weekly · Hiring signals
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Klue Greenhouse board · AI hiring wave detected
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                HIRING · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Window:</strong> 2026-04-26 → 2026-05-17 (21 days).
                Klue Greenhouse board snapshot deltas.
              </p>
              <p>
                <strong className="text-gray-900">What changed on their careers surface:</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>New engineering roles:</strong> 2× Applied AI Engineer, 1× Staff ML
                  Platform Engineer, 1× Head of Applied AI. All posted between 2026-04-26 and
                  2026-05-14.
                </li>
                <li>
                  <strong>Cluster analysis:</strong> First AI-specific engineering hires since{" "}
                  2025-11. Previous AI hiring cadence was 0–1 roles/quarter. 4-role cluster in 21
                  days is a <strong>7x baseline</strong> — high-confidence AI product-line build
                  signal.
                </li>
                <li>
                  <strong>Compensation posture:</strong> Applied AI Engineer role posted at
                  $220K–$280K base + equity. ~40% above their standard Senior Eng band. Willing to
                  pay top-of-market for AI talent.
                </li>
                <li>
                  <strong>Leadership signal:</strong> &ldquo;Head of Applied AI&rdquo; is a new
                  function. No prior head-of-AI role in Klue&rsquo;s history. Executive-level
                  commitment, not an experiment.
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Suggested next moves:</strong> (1) update battlecard AI-differentiation
                section — assume Klue AI product launches in Q3 or Q4. (2) Brief sales on likely
                AI-first repositioning; prep 2 messages for the next 5 competitive deals. (3)
                Consider whether to accelerate our own AI roadmap disclosure to prospects so we
                don&rsquo;t look reactive when their launch drops. (4) Add Klue&rsquo;s /product
                and /features pages to KompWatch to catch the launch-day signal 3–6 months from
                now.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison to other approaches */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch compares to other hiring-intel approaches
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
              href="/use-case/competitor-messaging-changes"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Track messaging changes &rarr;
            </Link>
            <Link
              href="/use-case/monitor-competitor-website"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Monitor the whole website &rarr;
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
              Hiring-signal CI for $49/mo — not $15K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a $15–50K enterprise hiring-intel tool to know when your
              competitor is building an AI team. You need scheduled snapshots + AI diffs on the
              careers page. That&rsquo;s KompWatch.
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
                Track 2 competitors&rsquo; careers pages. Weekly digest catches every new role +
                hiring wave.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for solo PMMs
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 URLs · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                4 competitors × (careers page + ATS board) + 2 flex slots. Daily digest. The
                default loadout for solo PMMs and small CI teams.
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
                15+ competitors with careers + ATS + pricing + messaging coverage each. Slack routes
                HIGH-severity hiring waves into #ci or #pmm the moment they cluster.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase JobMonitoring Pricing CTA"
              eventProps={{ usecase: "competitor-job-postings-monitoring" }}
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
            Competitor job postings monitoring — FAQ
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
                Hiring signals lead by 3–6 months; feature launches are the lagging confirmation.
                Track both to close the loop.
              </p>
            </Link>
            <Link
              href="/use-case/competitor-messaging-changes"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Monitor competitor messaging shifts &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                A GTM hiring wave usually shows up in homepage positioning 6–8 weeks later.
                KompWatch stitches both signals into one digest.
              </p>
            </Link>
            <Link
              href="/use-case/product-launch-monitoring"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Detect competitor product launches &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The launch is the payoff of the hiring wave you spotted 6 months earlier. Track
                changelog and /whats-new together with careers.
              </p>
            </Link>
            <Link
              href="/use-case/competitive-battlecard"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Keep competitive battlecards current &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Feed hiring-wave signals directly into battlecard updates — before a rep loses the
                deal to a launch you didn&rsquo;t predict.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop finding out about competitor launches 6 months after the hiring wave
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitor careers pages free. Pro ($49/mo) monitors 10 URLs — careers pages, ATS
            boards, and the rest of the marketing surface — every 6 hours. The AI digest tells you
            which hiring waves matter and what to do about them this sprint.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase JobMonitoring Bottom CTA"
              eventProps={{ usecase: "competitor-job-postings-monitoring" }}
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
              href="/use-case/competitor-messaging-changes"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Messaging changes
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
