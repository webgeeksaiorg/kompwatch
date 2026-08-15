import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Track Competitor Feature Releases — AI-Summarized Changelog & Product-Page Monitoring | KompWatch",
  description:
    "Automatically detect when competitors ship new features. KompWatch monitors changelogs, /features, /product, and pricing pages every 1–6 hours, then AI classifies each release (Feature / Pricing / Positioning) and delivers a digest before your next demo call. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "competitor feature tracking",
    "track competitor features",
    "competitor feature monitoring",
    "monitor competitor changelog",
    "competitor release notes tracking",
    "competitor product updates",
    "track competitor product launches",
    "competitor feature alerts",
    "changelog monitoring tool",
    "SaaS competitor tracking",
    "product intelligence tool",
    "competitor feature intelligence",
    "monitor competitor features page",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitor-feature-tracking`,
  },
  openGraph: {
    title:
      "Competitor Feature Tracking — Never Get Blindsided by a Competitor Launch | KompWatch",
    description:
      "Playwright snapshots + Claude classification of every competitor feature release. Get a daily digest of changelog + features-page diffs so you learn about launches from a dashboard, not a lost deal.",
    url: `${siteUrl}/use-case/competitor-feature-tracking`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Feature Tracking — AI-Summarized Change Alerts | KompWatch",
    description:
      "Automate changelog + /features monitoring across every SaaS competitor. $49/mo. Start free.",
  },
};

const painPoints = [
  {
    title: "You learn about launches from lost deals",
    description:
      "A prospect says 'Acme just shipped X, does KompWatch do that?' You've never heard of it. The changelog entry went up 11 days ago. Manual monitoring means the roadmap intel arrives via your sales team — after it costs you a deal.",
  },
  {
    title: "Changelog pages update on their schedule, not yours",
    description:
      "Some competitors ship weekly, some monthly, some in bursts around trade shows. No human remembers to re-check 8 different changelogs on the day each one updates. Automated snapshots are the only way to catch every release.",
  },
  {
    title: "Raw HTML diffs are unreadable noise",
    description:
      "Generic page-diff tools show you a wall of red/green markup — timestamps, session tokens, ad scripts, minified class names. The one feature release you actually cared about is buried under 400 lines of DOM churn.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add competitor changelog and features URLs",
    description:
      "For each competitor, add their /changelog (or /whats-new, /release-notes) and their /features (or /product) page. Each URL is a slot on your plan. Pro covers 10 URLs — enough for 3–5 competitors monitored deeply across multiple pages.",
  },
  {
    step: "2",
    title: "KompWatch snapshots each page on a schedule",
    description:
      "Every 6 hours on Pro, hourly on Team, weekly on Free. Snapshots run through headless Chromium (Playwright), so React/Next.js changelog components render fully — you catch releases the moment they're published, not when Google finally reindexes.",
  },
  {
    step: "3",
    title: "AI classifies every release by type and severity",
    description:
      "Claude reads the before/after diff and tags each change: FEATURE (new capability), PRICING (feature moved behind a paywall), POSITIONING (repositioning copy). Severity is HIGH for direct-competitor feature adds on your pricing tier, LOW for minor copy tweaks.",
  },
  {
    step: "4",
    title: "Get a digest before your next demo call",
    description:
      "Free plan gets a weekly email, Pro daily, Team hourly (or Slack). Each digest entry has the release summary, severity, and the raw diff for verification — so your PMM can update the battlecard and brief AEs before the next competitive deal.",
  },
];

const whatWeMonitor = [
  {
    title: "Changelogs & release notes",
    description:
      "Public /changelog, /whats-new, /release-notes pages. The single highest-signal page for feature intel — competitors literally announce their roadmap here, dated and versioned.",
    example:
      '"Acme changelog v2.14: added AI forecasting mode, deprecated legacy CSV export, new webhook for deal-stage changes."',
  },
  {
    title: "Features & product pages",
    description:
      "/features, /product, /platform. Detects when a feature is added to the main marketing pitch — usually 1–4 weeks after the changelog entry.",
    example:
      '"Competitor added \'Slack digest\' as a first-tier feature block on /features — matches KompWatch\'s core value prop."',
  },
  {
    title: "Pricing-page feature gating",
    description:
      "Which features sit on which plan tier. Catches when a competitor moves a feature behind a paywall or launches a new add-on SKU.",
    example:
      '"Acme moved API access from Pro to Enterprise-only. Deal for prospect X now unblocked."',
  },
  {
    title: "Blog launch announcements",
    description:
      "/blog, /news. Long-form feature-launch posts often precede changelog entries by hours and carry positioning language you'll see in cold emails and ads next.",
    example:
      '"Competitor blog: \'Introducing AI Forecasting — the future of pipeline visibility.\' Positioning shift toward AI-first."',
  },
  {
    title: "Docs & API reference",
    description:
      "New docs pages appear the moment a feature ships. Monitoring /docs or /api/reference catches releases the marketing team hasn't announced yet.",
    example:
      '"New /docs/webhooks/v2 page detected — webhook v2 shipped 3 days before public announcement."',
  },
  {
    title: "App-store & extension listings",
    description:
      "For mobile apps, Chrome extensions, or marketplace listings, version notes update on release. High-signal for competitors without a public changelog.",
    example:
      '"Competitor iOS app v4.2 release notes: \'Now with team workspaces.\' — enterprise feature signal."',
  },
];

const comparisonTools = [
  {
    tool: "Manually checking changelogs",
    verdict:
      "Works for 1 competitor for 3 weeks, then drifts to 'never.' You'll miss the release that costs you your next deal.",
    ok: false,
  },
  {
    tool: "RSS on competitor blogs",
    verdict:
      "Catches announcements — misses everything shipped without a blog post (which is most releases on most competitors).",
    ok: false,
  },
  {
    tool: "Google Alerts",
    verdict:
      "Fires on press coverage of launches. Never fires on the changelog entry itself. Lag is usually 3–14 days.",
    ok: false,
  },
  {
    tool: "Klue / Crayon",
    verdict:
      "Excellent feature-tracking as part of a full CI suite. Priced at $15K–$40K/yr with a mandatory sales call and 4–8 week onboarding.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Playwright snapshots of changelog + features + pricing + docs. Claude classifies each release. $49/mo, self-serve, 5-minute setup.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I track competitor feature releases automatically?",
    answer:
      "The reliable pattern is: snapshot the competitor's changelog + /features page on a schedule (every 1–6 hours), diff each snapshot against the previous one, then use AI to classify what changed (Feature / Pricing / Positioning) and score its severity. That's exactly what KompWatch does — you add URLs, we render them with a real headless browser, and Claude summarizes every diff in plain English. Free plan tracks 2 competitors; Pro at $49/mo tracks 10.",
  },
  {
    question: "Which pages should I monitor for competitor feature changes?",
    answer:
      "In priority order: (1) /changelog or /whats-new — highest signal, granular per-release entries; (2) /features or /product — catches when a feature enters the main marketing pitch; (3) /pricing — catches feature gating and new SKUs; (4) /docs — new docs pages appear the moment a feature ships, often before marketing announcements; (5) /blog — long-form launch posts and positioning shifts; (6) app store listings — version notes for mobile/extension products. KompWatch treats each URL as a separate slot, so a Pro plan (10 URLs) covers 3–5 competitors monitored deeply.",
  },
  {
    question: "How does KompWatch detect a new competitor feature versus a minor page tweak?",
    answer:
      "Two-layer filtering. First, our diff engine isolates structural changes (new blocks, renamed sections, removed content) from noise (session tokens, timestamps, ad scripts, tracking pixels). Second, Claude reads the filtered diff and assigns a change type (FEATURE / PRICING / POSITIONING / CONTENT) plus a severity score (LOW / MEDIUM / HIGH). A new feature block on a direct competitor's pricing page scores HIGH and shows up at the top of your digest. A minor CSS tweak scores LOW and is filtered from immediate alerts by default.",
  },
  {
    question: "Can KompWatch track competitors who don't publish a public changelog?",
    answer:
      "Yes — this is one of the highest-value setups. When a competitor has no changelog, combine: (1) /features page monitoring (catches new capability blocks), (2) /pricing page monitoring (catches newly gated features), (3) /blog monitoring (catches launch announcements), and (4) /docs monitoring (catches new API references and product docs pages, which often ship days before public marketing). Together these give you the same signal as a changelog, sometimes better.",
  },
  {
    question: "How fast will I know when a competitor ships a new feature?",
    answer:
      "Depends on plan. Free plan snapshots weekly, so worst case is 7 days. Pro snapshots every 6 hours — you'll typically know within 6–12 hours of publication. Team snapshots hourly — you'll know within 60–90 minutes. For most PMM use cases (updating a battlecard, briefing sales for the next demo), Pro's 6-hour cadence is the right trade-off between freshness and cost. Team's hourly cadence is worth it when you're in an active competitive deal and need same-day intel.",
  },
  {
    question: "How is this different from just using Visualping on the changelog page?",
    answer:
      "Visualping tells you a page changed. KompWatch tells you what changed, why it matters, and where to act. Three specific differences: (1) AI classification — you get 'Acme added AI forecasting to Pro tier' instead of a red/green HTML diff, (2) severity scoring — high-signal releases surface at the top; minor copy tweaks are filtered, (3) the digest is written for a PMM/founder audience with a suggested action (update battlecard, brief AEs). If you monitor one changelog and one shipping-status page, use Visualping. If you monitor 5–50 SaaS competitors' feature releases, use KompWatch.",
  },
  {
    question: "Do I need to write CSS selectors to scope the changelog snapshot?",
    answer:
      "No, but you can. By default KompWatch snapshots the full rendered page and lets the AI classifier filter noise. For noisy pages (heavy sidebars, cookie banners, chat widgets that keep updating), scoping to a selector like `article`, `.changelog-entry`, or `main` produces cleaner diffs and slightly better severity scores. The dashboard lets you set a selector per URL — most users leave it blank and it works fine.",
  },
  {
    question: "Can I get feature-release alerts in Slack instead of email?",
    answer:
      "Yes, on the Team plan ($149/mo). Team subscribers can route the change digest into any Slack channel — most customers use #competitive-intel, #pmm, or a dedicated #competitor-releases channel so the whole team sees releases as they land. Pro and Free plans get email digests only (Pro daily, Free weekly). Slack routing is on the roadmap for Pro but currently gated to Team.",
  },
  {
    question: "What do I actually do with a competitor feature-release alert?",
    answer:
      "A three-step playbook works for most PMM teams: (1) verify — click through to the diff to confirm scope, since KompWatch stores the full before/after; (2) brief sales immediately if a live deal is affected — don't wait for the next weekly sync, forward the digest entry to the AE; (3) update the battlecard within 24 hours so it doesn't go stale (see our guide on keeping battlecards fresh). For high-severity releases from direct competitors, also monitor G2/Capterra reviews over the next 2 weeks — new features generate reviews quickly and those reviews are a second data source on how the feature is landing.",
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
  name: "How to track competitor feature releases automatically with KompWatch",
  description:
    "Set up automated feature-release tracking for competitor changelogs, features pages, and pricing pages — with AI-summarized change alerts.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitorFeatureTrackingPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitor Feature Tracking",
            path: "/use-case/competitor-feature-tracking",
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
          Use case · Competitor feature tracking
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Track competitor feature releases{" "}
          <span className="text-brand-600">before your prospects do</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots competitor changelogs, features pages, pricing pages, and docs every
          1–6 hours with a real headless browser. Claude classifies every release by type and
          severity, then emails you a digest before the next competitive demo.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase FeatureTracking Hero CTA"
            eventProps={{ usecase: "competitor-feature-tracking" }}
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
            Why manual feature-release tracking always fails
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
              How KompWatch tracks competitor feature releases
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
              Which pages reveal competitor feature releases
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Six page types. Priority-ordered. Each classified by AI, severity-scored, digest-ready.
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

      {/* Sample alert */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What a feature-release alert looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Not a diff dump. A briefing.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Competitor</div>
                <div className="text-sm font-semibold text-gray-900">Acme Analytics</div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                FEATURE · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Detected:</strong> 2026-08-12 at 14:33 UTC ·
                changelog v3.11
              </p>
              <p>
                Acme Analytics added <em>&ldquo;AI-powered forecasting&rdquo;</em> to their pricing page as a
                Pro-only feature. Their changelog entry reads: &ldquo;Forecast mode: automatically project
                pipeline to quarter-end using historical close rates.&rdquo; Previous pricing table did not
                list this capability.
              </p>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Suggested action:</strong> Update battlecard. Brief AEs before next
                Acme-competitive deal. Consider monitoring G2 for user reviews over the next 14 days.
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
              How KompWatch compares to other feature-tracking approaches
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
            <Link
              href="/vs/visualping-alternative"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              KompWatch vs Visualping &rarr;
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
              Feature-release tracking for $49/mo — not $30,000/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full competitive-intelligence platform to stop being blindsided by
              competitor launches. You need the monitoring layer. That&rsquo;s KompWatch.
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
                Track the changelog of your two biggest threats. Weekly digest catches every release inside 7 days.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for PMMs
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 URLs · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                3–5 competitors monitored deeply across changelog + features + pricing + docs. Daily AI-classified digest.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 URLs · hourly · Slack</div>
              <p className="mt-4 text-sm text-gray-300">
                For CI teams. Hourly changelog snapshots + Slack digest route release alerts into your #competitive channel.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase FeatureTracking Pricing CTA"
              eventProps={{ usecase: "competitor-feature-tracking" }}
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
            Competitor feature tracking — FAQ
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
              href="/use-case/monitor-competitor-website"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Monitor a competitor&rsquo;s website &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The broader use case — pricing, homepage, features, changelog, careers in one digest.
              </p>
            </Link>
            <Link
              href="/use-case/track-competitor-pricing"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor pricing &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Feature gating happens on the pricing page — go deeper on price + tier monitoring.
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
                Feed detected releases straight into a battlecard so sales is always briefed.
              </p>
            </Link>
            <Link
              href="/compare/kompwatch-vs-crayon"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                KompWatch vs Crayon &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Purpose-built monitoring at $49/mo vs a full CI suite at $15K+/yr.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Never learn about a competitor launch from a lost deal again
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 URLs — changelog, features, pricing,
            docs — every 6 hours and sends a daily AI-classified digest. The intel loop your PMM
            has been faking with browser bookmarks.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase FeatureTracking Bottom CTA"
              eventProps={{ usecase: "competitor-feature-tracking" }}
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
            <Link href="/use-case/monitor-competitor-website" className="text-sm text-gray-500 hover:text-gray-700">
              Monitor website
            </Link>
            <Link href="/use-case/track-competitor-pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Track pricing
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
