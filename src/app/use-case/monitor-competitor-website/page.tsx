import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Monitor a Competitor's Website — 24/7 Change Tracking with AI Summaries | KompWatch",
  description:
    "Automatically monitor competitor websites for pricing changes, new features, hero copy shifts, and product launches. KompWatch snapshots pages every 1–6 hours with a real headless browser, then AI classifies what changed and why it matters. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "monitor competitor website",
    "monitor competitor websites",
    "competitor website monitoring",
    "website change monitoring",
    "track competitor website",
    "competitor site monitoring tool",
    "watch competitor website",
    "competitor website tracker",
    "website change detection",
    "competitor pricing page monitoring",
    "Visualping alternative",
    "Distill.io alternative",
    "competitive website intelligence",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/monitor-competitor-website`,
  },
  openGraph: {
    title:
      "Monitor Competitor Websites Automatically — AI Change Summaries | KompWatch",
    description:
      "Snapshots every 1–6 hours. AI classifies pricing / feature / positioning changes. Delivers a daily digest. Free plan tracks 2 competitors — Pro at $49/mo covers 10.",
    url: `${siteUrl}/use-case/monitor-competitor-website`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monitor Competitor Websites — Automated, AI-Summarized | KompWatch",
    description:
      "Playwright-powered snapshots + Claude change summaries. 24/7 competitor website monitoring at $49/mo. Start free.",
  },
};

const painPoints = [
  {
    title: "Manually checking sites is a losing game",
    description:
      "You open 6 tabs on Monday, forget by Wednesday, and miss the pricing change on Friday. Manual monitoring is why most PMMs learn about competitor moves from a lost deal instead of a dashboard.",
  },
  {
    title: "Google Alerts misses everything that matters",
    description:
      "Alerts fire on press releases and blog posts — never on pricing tables, feature grids, hero copy, or changelogs. The pages that actually move deals are exactly the ones Google won't tell you about.",
  },
  {
    title: "Screenshot-diff tools break on modern sites",
    description:
      "Most website-change monitors use a headless HTTP fetch that fails on React, Vue, and Next.js pricing pages that render client-side. They report 'no change' while the competitor just doubled their price.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add the competitor URLs you want to monitor",
    description:
      "Paste up to 10 competitor URLs on Pro (2 on Free, 50 on Team). Point KompWatch at the pages that actually move your deals: pricing, homepage, features, changelog, /customers, /careers. No CSS selectors required — but you can scope to a section if a page is noisy.",
  },
  {
    step: "2",
    title: "KompWatch snapshots each page on a schedule",
    description:
      "Every 6 hours on Pro, hourly on Team. We use a real headless Chromium (Playwright) so React/Vue/Next.js pages render fully — the same content a human visitor would see. Every snapshot is stored with a full HTML capture and a rendered screenshot.",
  },
  {
    step: "3",
    title: "AI detects and classifies what actually changed",
    description:
      "Instead of a raw HTML diff, our Claude-powered classifier reads the before/after and tells you: 'Pricing changed — Pro tier raised from $49 to $69/mo.' Every change gets a type (Pricing / Feature / Positioning / Content), a severity (Low / Medium / High), and a plain-English summary.",
  },
  {
    step: "4",
    title: "Get an email digest — or a Slack alert on Team",
    description:
      "Free plan gets a weekly email digest of all detected changes. Pro gets a daily digest. Team routes change alerts into a Slack channel so your #competitive-intel loop stays real-time. No dashboard-checking required — the intel comes to you.",
  },
];

const whatWeMonitor = [
  {
    title: "Pricing pages",
    description:
      "Full pricing tables, plan tiers, seat pricing, annual discounts, free-plan limits, hidden add-on fees. The #1 reason customers subscribe to KompWatch.",
    example:
      '"Competitor raised Pro from $49→$69/mo, removed the free trial, added an Enterprise tier at $299/mo."',
  },
  {
    title: "Homepage & hero copy",
    description:
      "Hero headline, subhead, primary CTA, social-proof bar. Catches repositioning shifts before they show up in cold emails or ad copy.",
    example:
      "\"Competitor changed hero from 'for marketing teams' to 'AI-first competitive intelligence for RevOps.'\"",
  },
  {
    title: "Features & product pages",
    description:
      "Feature grids, integrations lists, /features and /product pages. Detects when a competitor ships something that shows up in your next demo call.",
    example:
      '"Competitor added Salesforce sync + Slack digest — likely competitive response to KompWatch."',
  },
  {
    title: "Changelogs & release notes",
    description:
      "Public changelog pages, /whats-new, /release-notes. The single most valuable page to monitor — it's a signed confession of what the competitor is prioritizing.",
    example:
      '"Competitor changelog: shipped API v2 with webhook events. Migration guide from v1 published."',
  },
  {
    title: "Customer wins (/customers page)",
    description:
      "Logo walls, case study additions, testimonial updates. When a competitor adds a Fortune 500 logo, sales needs the objection-handling ready for tomorrow's call.",
    example:
      '"Competitor added [Fortune 500 logo] to /customers. New case study: 40% reduction in churn."',
  },
  {
    title: "Careers & hiring signals",
    description:
      "The /careers page is a leading indicator: hiring 3 AEs signals a sales push, hiring a Head of AI signals a repositioning. Job posts leak roadmap 60 days before launch.",
    example:
      "\"Competitor opened 4 sales roles targeting FinServ vertical — probable Q3 verticalization push.\"",
  },
];

const comparisonTools = [
  {
    tool: "Google Alerts",
    verdict: "Fires on press & blog only — misses pricing, features, homepage copy, changelog.",
    ok: false,
  },
  {
    tool: "Visualping / Distill.io",
    verdict:
      "Great for one-off page-diff alerts. Weaker on modern JS-heavy sites; no AI classification of what changed.",
    ok: false,
  },
  {
    tool: "Klue / Crayon",
    verdict:
      "Full CI platforms. Excellent monitoring — but $20K–$40K/yr with a sales call and 4–8 week onboarding.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Playwright snapshots + Claude change summaries + daily digest. $49/mo, self-serve, 5-minute setup.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the best way to monitor a competitor's website?",
    answer:
      "The best approach is automated snapshot + diff + AI classification, not manual checking or generic alerts. A tool should (1) render the page with a real headless browser so JavaScript pricing tables load correctly, (2) snapshot on a schedule (every 1–6 hours for anything that moves deals), (3) diff against the last snapshot and classify what actually changed (pricing vs positioning vs feature), and (4) email or Slack you a summary you can act on. KompWatch does all four for $49/mo on Pro, or free for 2 competitors.",
  },
  {
    question: "How often should I check competitor websites for changes?",
    answer:
      "For competitors that show up in your deals, every 6 hours is the sweet spot — often enough to catch same-day pricing moves without generating noise. For competitors you track for market context (adjacent players, indirect substitutes), daily or weekly is plenty. KompWatch's Free plan checks weekly, Pro every 6 hours, and Team hourly. The main rule: whatever frequency you pick, automate it. Manual checking always drifts to 'never' inside 30 days.",
  },
  {
    question: "Does KompWatch actually render JavaScript-heavy competitor websites?",
    answer:
      "Yes. We run a real headless Chromium via Playwright for every snapshot. That means React, Vue, Next.js, Nuxt, Svelte, and any client-rendered pricing table renders exactly as a human visitor sees it. Screenshot-diff tools that use a raw HTTP fetch (which is most of them) miss pricing changes on modern SaaS sites because the price literally isn't in the HTML they fetched — it's injected by JavaScript at runtime.",
  },
  {
    question: "How is KompWatch different from Visualping or Distill.io?",
    answer:
      "Visualping and Distill are excellent generic page-monitors — great for any page-diff use case. KompWatch is purpose-built for competitor monitoring, which changes three things: (1) AI classifies the change (Pricing / Feature / Positioning / Content) so you don't get a wall of raw diff, (2) severity scoring surfaces the changes that matter, and (3) the digest email is designed for a PMM/founder audience, not an ops team. If you're monitoring a mix of shipping notices, weather pages, and stock prices, use Visualping. If you're monitoring 5–50 SaaS competitors, use KompWatch.",
  },
  {
    question: "Is monitoring a competitor's website legal?",
    answer:
      "Yes. Reading a publicly-accessible website — with a normal browser, at a normal rate, without bypassing authentication or paywalls — is legal in every jurisdiction we operate in. It's the same activity as manually opening the page yourself, just automated. KompWatch respects robots.txt, sends a proper User-Agent, and rate-limits its crawlers to well below any reasonable-use threshold. We never scrape gated content, logged-in areas, or paid tiers.",
  },
  {
    question: "How many competitors should I monitor?",
    answer:
      "Rule of thumb: your top 3 direct competitors (deep monitoring, every 6 hours), plus 3–5 adjacent players (weekly). More than 10 usually means you're monitoring noise. Our Free plan (2 competitors) is enough to cover your two biggest threats. Pro (10 competitors) is the sweet spot for a PMM or founder covering a full competitive set. Team (50 competitors) is for dedicated CI functions or agencies monitoring on behalf of clients.",
  },
  {
    question: "What pages should I monitor on each competitor?",
    answer:
      "The high-leverage set is: (1) /pricing — highest signal per snapshot, (2) homepage — catches repositioning, (3) /features or /product — catches launches, (4) /changelog or /whats-new — the fastest-updating page and a signed confession of roadmap, (5) /customers — logo wall signals sales momentum, (6) /careers — job posts leak roadmap 60 days ahead. KompWatch treats each URL as a separate 'competitor' slot on your plan, so you can go deep on one company or wide across several.",
  },
  {
    question: "Can I get change alerts in Slack instead of email?",
    answer:
      "Yes, on the Team plan ($149/mo). Team subscribers can route the daily change digest into a Slack channel — most customers use a #competitive-intel or #pmm channel so the whole team sees changes as they land. Pro and Free plans get email digests only (Pro daily, Free weekly). Slack routing is on the roadmap for Pro but currently gated to Team.",
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
  name: "How to monitor a competitor's website automatically with KompWatch",
  description:
    "Set up automated monitoring for competitor websites — pricing pages, homepages, features, changelogs — with AI-summarized change alerts.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function MonitorCompetitorWebsitePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Monitor Competitor Website",
            path: "/use-case/monitor-competitor-website",
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
          Use case · Monitor competitor websites
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Monitor competitor websites{" "}
          <span className="text-brand-600">24/7 — without checking them yourself</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots your competitors&rsquo; pricing pages, homepages, features, and
          changelogs every 1–6 hours with a real headless browser. AI classifies what changed
          and why it matters. You get a digest instead of a spreadsheet.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase MonitorWebsite Hero CTA"
            eventProps={{ usecase: "monitor-competitor-website" }}
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
          No credit card. 5-minute setup. Playwright-rendered snapshots.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why manual competitor-website checking always fails
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three failure modes we&rsquo;ve heard from every PMM we&rsquo;ve talked to.
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
              How KompWatch monitors a competitor&rsquo;s website
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. No CSS selectors required. No RFP.
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
              What KompWatch monitors on each competitor
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              The high-leverage pages. Every change AI-classified, severity-scored, digest-ready.
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

      {/* Comparison to other approaches */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How KompWatch compares to other ways to monitor competitor sites
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest comparison. When another tool is better, we say so.
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
              href="/vs/visualping-alternative"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Visualping &rarr;
            </Link>
            <Link
              href="/compare/kompwatch-vs-crayon"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Crayon &rarr;
            </Link>
            <Link
              href="/compare/kompwatch-vs-klue"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Klue &rarr;
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
              Monitor competitor websites for $49/mo — not $30,000/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full CI platform to stop being surprised by pricing changes.
              You need the monitoring layer. That&rsquo;s KompWatch.
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
                Monitor your two most-threatening competitors. Enough to catch the pricing changes that matter.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for PMMs
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                Full competitive set. Daily AI-summarized digest across pricing, features, positioning, changelog.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly · Slack</div>
              <p className="mt-4 text-sm text-gray-300">
                For CI teams. Hourly snapshots + Slack digest route change alerts into your #competitive channel.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase MonitorWebsite Pricing CTA"
              eventProps={{ usecase: "monitor-competitor-website" }}
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
            Monitoring competitor websites — FAQ
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
                Go deeper on the single highest-signal page you can monitor.
              </p>
            </Link>
            <Link
              href="/use-case/competitive-battlecard"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Build fresh competitive battlecards &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Use monitored changes to keep your sales battlecards from going stale in 30 days.
              </p>
            </Link>
            <Link
              href="/vs/visualping-alternative"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                KompWatch vs Visualping &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Purpose-built competitor monitoring vs generic page-diff tools.
              </p>
            </Link>
            <Link
              href="/switch/visualping"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Switch from Visualping &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Migration playbook for teams moving from a generic monitor to a competitor-native one.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop checking competitor sites yourself
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 competitors every 6 hours and sends a
            daily AI-summarized digest — the intel loop your team has been faking with browser
            bookmarks.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase MonitorWebsite Bottom CTA"
              eventProps={{ usecase: "monitor-competitor-website" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need to monitor more than 50 competitors?{" "}
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
            <Link href="/use-case/competitive-battlecard" className="text-sm text-gray-500 hover:text-gray-700">
              Battlecards
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
