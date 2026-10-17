import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Monitor Competitor Messaging & Positioning Changes — AI Hero-Copy Diff Alerts | KompWatch",
  description:
    "Detect when a competitor rewrites their hero, changes their tagline, or repositions their category. KompWatch snapshots homepages, landing pages, and category pages every 1–6 hours, then AI summarizes every messaging change so your PMM catches positioning shifts before they show up in ads. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "monitor competitor messaging",
    "track competitor positioning",
    "competitor copy changes",
    "competitor tagline monitoring",
    "competitor hero copy tracking",
    "monitor competitor landing page",
    "track competitor value proposition",
    "competitor repositioning alerts",
    "positioning intelligence tool",
    "SaaS messaging monitoring",
    "competitor category positioning",
    "monitor competitor homepage copy",
    "competitor marketing messaging tracking",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitor-messaging-changes`,
  },
  openGraph: {
    title:
      "Competitor Messaging & Positioning Changes — AI Copy-Diff Alerts | KompWatch",
    description:
      "Playwright snapshots + Claude classification of every competitor hero, tagline, and landing-page copy change. Catch repositioning before it hits Google Ads.",
    url: `${siteUrl}/use-case/competitor-messaging-changes`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Competitor Messaging Changes — AI Copy-Diff Alerts | KompWatch",
    description:
      "Automate homepage + landing-page copy monitoring across every SaaS competitor. $49/mo. Start free.",
  },
};

const painPoints = [
  {
    title: "You spot the repositioning in a paid ad, not on their site",
    description:
      "A competitor quietly rewrites their hero from 'analytics platform' to 'AI decision engine.' You see it three weeks later in a LinkedIn ad — after their sales team has already been pitching the new frame in every demo. The homepage change was Day 0. You were on Day 21.",
  },
  {
    title: "Copy changes are invisible in a normal HTML diff",
    description:
      "A hero-copy rewrite is 12 words out of 4,000 on the page. Traditional page-diff tools drown that signal under cookie-banner updates, personalized recommendation blocks, and dynamic testimonials. The one change that matters is buried in 400 lines of noise.",
  },
  {
    title: "You can't tell a real repositioning from a seasonal A/B test",
    description:
      "Every SaaS marketing team ships copy tests. Most revert in a week. The ones that stick are the ones you need to react to — but you can't tell the difference without watching the page over weeks. Manual monitoring means you either overreact to every tweak or miss the real shift.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add competitor homepage and key landing-page URLs",
    description:
      "For each competitor, add / (homepage), /product or /platform, and any category landing pages (e.g. /for-marketing, /for-sales). Each URL is a slot on your plan. Pro covers 10 URLs — enough for 3–5 competitors monitored deeply across their positioning surface.",
  },
  {
    step: "2",
    title: "KompWatch snapshots each page on a schedule",
    description:
      "Every 6 hours on Pro, hourly on Team, weekly on Free. Snapshots run through headless Chromium (Playwright), so React/Next.js hero components, animated headlines, and personalized copy blocks render fully — you catch messaging shifts the moment they're pushed live.",
  },
  {
    step: "3",
    title: "AI classifies every copy change by intent",
    description:
      "Claude reads the before/after diff and tags each change: POSITIONING (category or value-prop shift), MESSAGING (tagline or hero rewrite), PROOF (new customer logos, testimonials, stats), or COPY-TEST (small variant likely to revert). Severity is HIGH for direct-competitor category shifts, LOW for minor microcopy tweaks.",
  },
  {
    step: "4",
    title: "Get a digest before your next positioning meeting",
    description:
      "Free plan gets a weekly email, Pro daily, Team hourly (or Slack). Each digest entry has the copy diff, classification, severity, and a suggested action — so your PMM and marketing lead can react to a real repositioning within 24 hours instead of 3 weeks.",
  },
];

const whatWeMonitor = [
  {
    title: "Homepage hero & tagline",
    description:
      "The single most-tested surface on any SaaS site. Hero-copy changes are the earliest and clearest signal of a positioning shift — usually preceded by internal strategy work you'd never see otherwise.",
    example:
      '"Acme hero rewritten from \'Marketing analytics for growth teams\' to \'The AI decision layer for RevOps.\' Category shift from analytics → AI infrastructure."',
  },
  {
    title: "Product & platform pages",
    description:
      "/product, /platform, /overview. Where the value-prop framework gets fully articulated. When these change, the messaging shift has been ratified internally and is being rolled out across sales and marketing.",
    example:
      '"Competitor /platform page reframed from three product pillars (Track / Report / Alert) to two (Detect / Decide). Consolidating around AI-decision narrative."',
  },
  {
    title: "Category & persona landing pages",
    description:
      "/for-marketing, /for-sales, /for-startups. Changes here reveal which personas a competitor is doubling down on or quietly abandoning. Also the first place new ICPs appear.",
    example:
      '"Competitor added /for-enterprise page and removed /for-startups from top nav. ICP shift upmarket — expect pricing to follow within 60 days."',
  },
  {
    title: "Category descriptors & meta titles",
    description:
      "Page <title>, meta description, and OpenGraph tags. Often updated ahead of visible copy changes because they drive SEO. A meta title change is a leading indicator of positioning work in progress.",
    example:
      '"Meta title changed from \'Acme — Competitor tracking software\' to \'Acme — AI competitive intelligence platform.\' Search-listing repositioning."',
  },
  {
    title: "Customer proof & social proof blocks",
    description:
      "Logo bars, testimonial rotations, stat callouts (e.g. '10,000 teams'). Changes here reveal new customer wins, ICP shifts, and which social proof the competitor believes is most persuasive to their current buyer.",
    example:
      '"Competitor swapped SMB customer logos for 3 enterprise logos (Snowflake, Datadog, HubSpot). Enterprise-motion signal confirmed."',
  },
  {
    title: "CTAs, offers & activation flow copy",
    description:
      "Primary and secondary CTAs, free-trial framing, demo request copy. CTA changes reveal go-to-market motion shifts — free-trial to demo-only, or self-serve to sales-led, or the reverse.",
    example:
      '"Competitor changed primary CTA from \'Start free trial\' to \'Book a demo.\' Shift from self-serve to sales-led motion — retention or conversion likely broke."',
  },
];

const comparisonTools = [
  {
    tool: "Manually reviewing competitor sites",
    verdict:
      "Works for one competitor for a month, then drifts. Copy-level changes are the first thing humans miss — the page 'looks the same' to a scanning eye.",
    ok: false,
  },
  {
    tool: "Wayback Machine",
    verdict:
      "Great for retroactive analysis after you already know something changed. Useless as an alert — snapshots are sparse and no diff summary.",
    ok: false,
  },
  {
    tool: "Visualping",
    verdict:
      "Catches visual pixel changes on a page. Doesn't distinguish copy from layout, doesn't classify positioning vs proof vs CTA, no severity scoring.",
    ok: false,
  },
  {
    tool: "Klue / Crayon",
    verdict:
      "Enterprise CI suites do track messaging as part of full competitor profiles. Priced at $15K–$40K/yr with a mandatory sales call and multi-week onboarding.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Playwright snapshots of homepage + product + landing pages. Claude classifies every copy change (positioning / messaging / proof / CTA). $49/mo, self-serve, 5-minute setup.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I monitor a competitor's messaging changes automatically?",
    answer:
      "The reliable pattern is: snapshot the competitor's homepage, product page, and top category landing pages on a schedule (every 1–6 hours), diff each snapshot against the previous one, then use AI to classify what changed (Positioning / Messaging / Proof / CTA) and score its severity. That's exactly what KompWatch does — you add URLs, we render them with a real headless browser so JS-driven hero copy is captured, and Claude summarizes every copy diff in plain English. Free plan tracks 2 competitors; Pro at $49/mo tracks 10.",
  },
  {
    question: "Which pages reveal a competitor's real positioning?",
    answer:
      "In priority order: (1) homepage hero — the single most-signal-heavy surface, since every positioning decision eventually shows up in the hero; (2) /product or /platform — where the full value-prop framework lives; (3) category and persona landing pages (/for-marketing, /for-enterprise, /for-startups) — reveals ICP focus shifts; (4) meta titles and OpenGraph tags — leading indicators, often updated before visible copy; (5) pricing page tier names and descriptors — positioning surfaces even on pricing pages. KompWatch treats each URL as a separate slot, so a Pro plan (10 URLs) covers 3–5 competitors monitored across their full positioning surface.",
  },
  {
    question: "How does KompWatch tell a real repositioning from a small A/B test?",
    answer:
      "Two signals combined. First, scope: a real repositioning shows up on multiple pages within days (homepage + product + meta titles all shift together), while an A/B test usually touches one hero variant. Second, persistence: KompWatch stores the full snapshot history, so if a hero rewrite reverts within 5–10 days it's flagged as COPY-TEST rather than POSITIONING. The severity score also drops for isolated single-page changes and rises for coordinated multi-page rewrites. In practice, the digest surfaces real positioning shifts and de-emphasizes routine copy tests.",
  },
  {
    question: "Can KompWatch catch changes to hero copy that's rendered in JavaScript?",
    answer:
      "Yes — this is why we use Playwright (a real headless Chromium browser) rather than raw HTTP fetches. Most modern SaaS sites render their hero, testimonials, and CTA blocks client-side via React or Next.js. Simple HTML scrapers miss those changes entirely. KompWatch waits for the page to hydrate, then captures the fully rendered DOM — so a hero rewritten in a React component is diffed the same as one in static HTML.",
  },
  {
    question: "How fast will I know when a competitor changes their positioning?",
    answer:
      "Depends on plan. Free plan snapshots weekly, so worst case is 7 days. Pro snapshots every 6 hours — you'll typically know within 6–12 hours of the change going live. Team snapshots hourly — within 60–90 minutes. For most PMM and marketing-lead use cases (updating messaging docs, briefing content and paid teams), Pro's 6-hour cadence is the right trade-off between freshness and cost. Team's hourly cadence is worth it during a known competitive push (funding announcement, product launch, category-creation campaign).",
  },
  {
    question: "How is this different from just monitoring the competitor's homepage with Visualping?",
    answer:
      "Visualping tells you the homepage changed visually. KompWatch tells you what copy changed, whether it's positioning or proof or CTA, and how significant it is. Three specific differences: (1) AI classification — you get 'Acme reframed their hero from analytics to AI decision layer' instead of a red/green pixel diff; (2) copy-vs-visual isolation — a background image swap or logo rotation doesn't fire a positioning alert; (3) the digest is written for a PMM/founder audience with a suggested action (update battlecard, brief content team, review paid-ad copy). If you monitor one homepage for any change, use Visualping. If you monitor 5–50 SaaS competitors' positioning, use KompWatch.",
  },
  {
    question: "What counts as 'positioning' vs 'messaging' in KompWatch's classification?",
    answer:
      "POSITIONING = a change in category or who the product is for. Example: 'analytics platform for growth teams' → 'AI decision layer for RevOps' (category shift + persona shift). MESSAGING = a change in how the same positioning is expressed. Example: 'Never miss a beat' → 'See what your competitors ship, the moment they ship it' (same category, sharper phrasing). Positioning changes score higher severity because they usually indicate underlying strategy shifts; messaging changes are more common and often reflect ongoing copy iteration. Both are surfaced, but positioning shifts float to the top of the digest.",
  },
  {
    question: "Can I get positioning-change alerts in Slack instead of email?",
    answer:
      "Yes, on the Team plan ($149/mo). Team subscribers can route the change digest into any Slack channel — most customers use #competitive-intel, #pmm, #marketing, or a dedicated #competitor-messaging channel so PMM, content, and paid teams see positioning shifts together. Pro and Free plans get email digests only (Pro daily, Free weekly). Slack routing is on the roadmap for Pro but currently gated to Team.",
  },
  {
    question: "What should I actually do when a competitor changes their positioning?",
    answer:
      "A four-step playbook works for most PMM/marketing teams: (1) verify — click through to the KompWatch diff to confirm the change is real and multi-page rather than a single A/B variant; (2) brief content and paid teams — a competitor category shift usually shows up in Google Ads and LinkedIn copy within 2 weeks, so your own copy should differentiate before then; (3) update the battlecard and positioning doc within 48 hours; (4) monitor their next 3 blog posts and any new landing pages — a real repositioning is always followed by supporting content within 30–60 days. If you don't see the follow-through content, the change may have been a test that didn't ship internally.",
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
  name: "How to monitor competitor messaging and positioning changes automatically with KompWatch",
  description:
    "Set up automated monitoring for competitor homepage hero copy, product-page positioning, and category landing pages — with AI-classified copy-change alerts.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitorMessagingChangesPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitor Messaging Changes",
            path: "/use-case/competitor-messaging-changes",
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
          Use case · Competitor messaging &amp; positioning
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Catch a competitor&rsquo;s repositioning{" "}
          <span className="text-brand-600">before it hits Google Ads</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots competitor homepages, product pages, and landing pages every 1–6
          hours with a real headless browser. Claude classifies every copy change (positioning,
          messaging, proof, CTA) so your PMM catches category shifts on Day 0, not Day 21.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase MessagingChanges Hero CTA"
            eventProps={{ usecase: "competitor-messaging-changes" }}
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
          No credit card. 5-minute setup. JS-rendered hero copy captured.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why manual positioning monitoring always fails
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three failure modes we&rsquo;ve heard from every PMM and marketing lead we&rsquo;ve talked to.
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
              How KompWatch tracks competitor messaging changes
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
              Which surfaces reveal competitor positioning
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
              What a positioning-change alert looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Not a pixel diff. A briefing.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Competitor</div>
                <div className="text-sm font-semibold text-gray-900">Acme Analytics</div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                POSITIONING · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Detected:</strong> 2026-08-12 at 09:14 UTC ·
                homepage + /platform + meta title
              </p>
              <p>
                Acme Analytics rewrote their hero from{" "}
                <em>&ldquo;Marketing analytics for growth teams&rdquo;</em> to{" "}
                <em>&ldquo;The AI decision layer for RevOps.&rdquo;</em> Same shift appears on{" "}
                /platform (three product pillars consolidated into two) and in their meta title (now
                &ldquo;AI competitive intelligence platform&rdquo;). Coordinated multi-page rollout
                — this is a real repositioning, not an A/B test.
              </p>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Suggested action:</strong> Brief content and paid teams — expect their new
                framing in LinkedIn/Google Ads within 2 weeks. Update your own positioning doc and
                battlecard within 48 hours. Monitor their next 3 blog posts for supporting narrative.
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
              How KompWatch compares to other positioning-tracking approaches
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
              Positioning intel for $49/mo — not $30,000/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full competitive-intelligence platform to catch a competitor
              rewriting their category. You need the monitoring layer. That&rsquo;s KompWatch.
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
                Track the homepage + product page of your two biggest threats. Weekly digest catches every messaging shift inside 7 days.
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
                3–5 competitors monitored across homepage + product + category landing pages. Daily AI-classified positioning digest.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">
                $149<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">50 URLs · hourly · Slack</div>
              <p className="mt-4 text-sm text-gray-300">
                For PMM + marketing teams. Hourly homepage snapshots + Slack digest route positioning alerts into #pmm or #competitive.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase MessagingChanges Pricing CTA"
              eventProps={{ usecase: "competitor-messaging-changes" }}
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
            Competitor messaging &amp; positioning — FAQ
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
              href="/use-case/competitor-feature-tracking"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor feature releases &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Positioning shifts are usually followed by feature releases — monitor both together.
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
                Feed detected positioning shifts straight into a battlecard so sales stays briefed.
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
                Repositioning is often followed by a price/tier change — monitor both together.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Never learn about a competitor&rsquo;s repositioning from a paid ad again
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 URLs — homepage, product, category
            landing pages — every 6 hours and sends a daily AI-classified messaging digest. The
            positioning-intel loop your PMM has been faking with browser bookmarks.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase MessagingChanges Bottom CTA"
              eventProps={{ usecase: "competitor-messaging-changes" }}
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
            <Link href="/use-case/competitor-feature-tracking" className="text-sm text-gray-500 hover:text-gray-700">
              Feature tracking
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
