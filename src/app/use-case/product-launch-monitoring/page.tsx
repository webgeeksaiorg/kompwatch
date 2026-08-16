import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Track Competitor Product Launches — Changelog, Feature & Release Monitoring | KompWatch",
  description:
    "KompWatch watches competitor changelogs, /features pages, /product pages, and release announcements every 1–6 hours. When Klue, Kompyte, or Crayon ships a launch, you know within hours — with AI-classified diffs, severity scores, and enough context to update the battlecard before your next sales call. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "track competitor product launches",
    "competitor product launch alerts",
    "competitor changelog monitoring",
    "monitor competitor releases",
    "competitor feature launch tracker",
    "competitor release notes tracking",
    "competitive product launch intelligence",
    "SaaS product launch monitoring",
    "monitor competitor new features",
    "changelog scraper competitors",
    "product marketing launch monitoring tool",
    "competitor GA announcement tracking",
    "PMM competitor launch alerts",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/product-launch-monitoring`,
  },
  openGraph: {
    title:
      "Competitor Product Launch Monitoring — Never Miss A GA Announcement | KompWatch",
    description:
      "Watch every competitor /changelog, /features, and release page every 1–6 hours. AI-classified diffs. Battlecard-ready in hours, not weeks. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/product-launch-monitoring`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Product Launch Monitoring — KompWatch",
    description:
      "Klue ships a launch on a Tuesday. You hear about it from a lost deal on Friday. KompWatch closes that gap to hours. $49/mo.",
  },
};

const painPoints = [
  {
    title: "You find out about competitor launches from Slack forwards and lost deals",
    description:
      "The competitor ships on a Tuesday morning. Their announcement lands in LinkedIn feeds by Tuesday afternoon. Your sales team hears \"they just added X\" from a buyer on Thursday. By the time you draft a positioning update on Friday, the battlecard is already 4 days stale and 6 deals have been argued without it.",
  },
  {
    title: "Following 5 competitor changelogs by hand doesn't scale past week two",
    description:
      "Bookmarking /changelog, /whats-new, /releases, and /product pages for 5 competitors sounds fine. It lasts about 10 days before it turns into a Friday-afternoon chore, then a Monday-morning skip, then nothing. Half of competitor launches never make the changelog anyway — they show up quietly in feature grids or on the pricing page.",
  },
  {
    title: "RSS + Google Alerts miss the launches that actually matter",
    description:
      "Google Alerts fires on press releases and blog posts that competitors publish deliberately. But the highest-signal launches — new integrations quietly added to a feature grid, a new tier appearing on /pricing, a Salesforce logo showing up in the integration list — never generate an alert because no marketing team wrote a post about them. Those are the ones that lose deals.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add every launch-signal page for your top 3–5 competitors",
    description:
      "The high-signal set: /changelog (or /whats-new / /releases), /features (or /product), /pricing, /integrations, and the homepage. That's 5 pages × 3 competitors = 15 URLs — comfortably inside the Pro plan's 10-URL slot if you focus on 2 competitors, or Team's 50 URLs if you're tracking a broader field. KompWatch handles JS-rendered SPAs (Playwright), so React changelogs and dynamic feature grids capture correctly.",
  },
  {
    step: "2",
    title: "KompWatch snapshots each page every 1–6 hours",
    description:
      "Pro plan snapshots every 6 hours; Team plan every hour. A launch that hits the changelog at 9am shows up in your KompWatch digest by 10am (Team) or in the next 6-hour digest (Pro). Every snapshot is timestamped, so weeks later you can pinpoint exactly when a competitor's new feature went live.",
  },
  {
    step: "3",
    title: "AI classifies the diff: FEATURE, PRICING, INTEGRATION, MESSAGING",
    description:
      "You don't wade through raw HTML diffs. KompWatch's classifier tags every change — \"new feature added to product grid,\" \"new integration logo,\" \"pricing tier added,\" \"hero copy rewrite\" — and assigns severity (LOW/MEDIUM/HIGH). Launches almost always hit HIGH severity because they combine multiple change types (new feature + new integration + hero rewrite on the same day).",
  },
  {
    step: "4",
    title: "Battlecard update ships within 48 hours — often within the same day",
    description:
      "The digest lands. You read the HIGH-severity entry: \"Klue shipped native HubSpot integration + new Analytics tier at $89/mo.\" You update the Klue battlecard's Integrations row and the Pricing objection block, and post the update to #sales-enablement. Reps are armed with a fresh counter-narrative before the next Klue-influenced call — not 2 weeks after buyers have already brought it up.",
  },
];

const whatWeMonitor = [
  {
    title: "Changelog & release note pages",
    description:
      "/changelog, /whats-new, /releases, /product-updates — whichever slug the competitor uses. Every new entry is captured with timestamp and full text. AI summarizes multi-item releases into a one-line \"here's what shipped\" for the digest.",
    example:
      '"Kompyte shipped 3 features on 2026-07-08: (1) native Salesforce integration, (2) Slack channel routing per competitor, (3) new AI summary rewrite. All three visible in same changelog entry."',
  },
  {
    title: "Feature grid & /product page additions",
    description:
      "The higher-signal surface. Marketing teams promote launches on /features and /product long before they hit the blog. New cells added to comparison tables, new sub-features under headers, new integration logos in the tech stack row.",
    example:
      '"Klue added \\"Native Gong integration\\" cell to /product feature grid on 2026-06-22. Not yet mentioned on their blog or changelog — quiet launch. Sales will hear about it from buyers this week."',
  },
  {
    title: "Integration & tech-stack logo bars",
    description:
      "New integration logos appearing on /integrations, /product, or homepage. Integrations are often the single reason a buyer picks one vendor over another, and the launch usually shows up as a logo on a page before it shows up in any press release.",
    example:
      '"Crayon added Salesforce, HubSpot, and Gong logos to /integrations page on 2026-07-12. Integration expansion — expect these to show up in every CRM-related sales objection this quarter."',
  },
  {
    title: "Pricing page: new tiers, packages, add-ons",
    description:
      "New tiers on /pricing usually accompany launches — the new feature or capability lives in a new package or add-on. A pricing-page change with a fresh tier name is one of the strongest launch signals available.",
    example:
      '"Klue added new \\"AI Insights\\" add-on at $199/mo/user on /pricing 2026-07-14. Confirms the AI feature launch teased last week — now with confirmed packaging and price point for your battlecard."',
  },
  {
    title: "Homepage hero rewrites & category positioning",
    description:
      "Big product launches usually get a hero rewrite. \"Competitive intelligence platform\" becomes \"AI competitive enablement platform.\" The rewrite is the launch's marketing centerpiece — catching it same-day gives you the positioning to counter or reference in every sales call for the next month.",
    example:
      '"Crayon rewrote homepage hero from \\"the competitive intelligence platform\\" to \\"AI-powered competitive enablement\\" on 2026-07-01. Meta title matches. Launch-level repositioning, not an A/B test."',
  },
  {
    title: "Press release, blog, and /news page drops",
    description:
      "The traditional launch surface. KompWatch captures these too, so you get the full-context launch: the marketing post + the actual feature-grid change + the pricing update all correlated in one digest, not scattered across three tools.",
    example:
      '"Kompyte published \\"Introducing Kompyte AI\\" post on /blog 2026-07-08 — cross-references the 3 changelog items and the new $89/mo AI tier. Full launch bundle in one digest."',
  },
];

const comparisonTools = [
  {
    tool: "Manual bookmarks + Friday review",
    verdict:
      "Works for the first 2 weeks. Turns into a Monday skip by week three. And it misses the quiet launches that never hit the changelog — the ones that actually decide deals.",
    ok: false,
  },
  {
    tool: "RSS readers (Feedly, Inoreader)",
    verdict:
      "Fine for blogs and press releases. Useless for feature-grid changes, integration logos, and pricing-page tier additions — none of which emit an RSS feed. Covers maybe 40% of the actual launch signal.",
    ok: false,
  },
  {
    tool: "Google Alerts",
    verdict:
      "Fires on press releases and news mentions. Completely blind to on-site product changes. If the competitor's launch doesn't get TechCrunch coverage, you'll never hear about it here.",
    ok: false,
  },
  {
    tool: "Klue / Crayon (enterprise CI platforms)",
    verdict:
      "Full-feature CI platforms that include launch monitoring alongside battlecards, insights, and win/loss. $30–60K+/yr, require a demo and a sales cycle. Right answer if you have an analyst team; overkill if you just need launch alerts.",
    ok: false,
  },
  {
    tool: "Visualping / Wachete (visual diff tools)",
    verdict:
      "Screenshot-diff any page for pixel changes. Catches launches but with a lot of noise (every hero image rotation, every logo bar shuffle). No AI classification, no severity scoring — you triage every diff yourself.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Purpose-built for competitor launch monitoring. AI-classified diffs, severity scores, weekly/daily digests, and full history for post-launch analysis. $49/mo self-serve — the middle ground between manual bookmarks and $50K CI platforms.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How fast will I know when a competitor ships a launch?",
    answer:
      "On the Pro plan ($49/mo), KompWatch snapshots each competitor page every 6 hours — so a launch that goes live at 9am is in your digest by mid-afternoon at the latest, and the digest emails at your configured send time. On the Team plan ($149/mo), snapshots run every hour, so launches are typically detected within 60 minutes of going live and surfaced via Slack routing (Team plan includes Slack integration). Compare that to the typical \"heard about it from a buyer 4 days later\" baseline and you're looking at a 48–96 hour information advantage on every competitor launch.",
  },
  {
    question: "What if the competitor doesn't publish a changelog?",
    answer:
      "Most competitors don't — or the changelog is stale and the real feature list lives on /product or /features. That's exactly why KompWatch monitors the full high-signal set (changelog, feature grid, integrations, pricing, homepage) rather than just the changelog. When a competitor quietly adds a new integration logo to /integrations or a new cell to a feature grid, KompWatch catches it — even if no marketing announcement ever gets published. In our experience roughly 40–50% of competitor launches happen this way (silent product-page updates), so a changelog-only approach misses about half the signal.",
  },
  {
    question: "How is this different from Google Alerts or a Feedly RSS setup?",
    answer:
      "Google Alerts and RSS both depend on the competitor publishing something to a public news/blog surface — a press release, a blog post, an announcement page. They're fine for catching launches that come with a full marketing push. They are completely blind to on-site product changes: a new cell in a feature grid, a new integration logo, a new pricing tier, a homepage hero rewrite. Those changes never emit an RSS entry or a news mention, so those tools miss them entirely. KompWatch snapshots the actual pages every few hours and diffs them, so on-site product changes and marketing-announced launches both get caught. Also: KompWatch classifies changes (FEATURE / PRICING / INTEGRATION / MESSAGING) with AI so you're not reading raw HTML diffs.",
  },
  {
    question: "How does this compare to using Klue or Crayon for launch monitoring?",
    answer:
      "Klue and Crayon are full-stack competitive intelligence platforms — launch monitoring is one feature among many (battlecards, insights portal, win/loss, sales integration, deal-support workflows). If you already have a CI team and $30–60K/yr for a CI platform, they're a defensible choice. KompWatch is purpose-built for the specific problem of \"know when competitors change something on their public pages\" at $49–149/mo. Many PMMs use KompWatch as their monitoring layer and either forgo a full CI platform (early stage, solo PMM) or pair KompWatch with lighter tools (Google Doc battlecards, Notion CI hub) that cost nothing extra. If you outgrow KompWatch and need buyer interviews, deal-support workflows, and analyst services, then Klue or Crayon is the graduation path.",
  },
  {
    question: "Can I track more than one competitor page at a time — e.g. changelog AND /features AND /pricing?",
    answer:
      "Yes — that's the intended usage. Every competitor gets multiple URL slots. The Pro plan gives you 10 URLs total, which comfortably covers 2 competitors monitored deeply (5 pages each: changelog + features + integrations + pricing + homepage) or 3 competitors monitored on their 3 highest-signal pages. The Team plan's 50 URLs covers 10 competitors at 5 pages each — the typical setup for a full PMM launch-monitoring program. You can also change what you monitor per competitor: for a competitor with an active changelog, monitor that page primarily; for a competitor with a static changelog but active feature grid, monitor /features instead. KompWatch treats each URL independently.",
  },
  {
    question: "Do I get the actual launch content, or just a \"something changed\" ping?",
    answer:
      "You get the actual content. KompWatch stores the full HTML + a rendered screenshot of every snapshot, and the digest email contains an AI-written summary of what changed — the specific new feature names, the specific new integration logos, the specific new pricing tier and price point. You don't need to open the competitor's site to know what launched; the digest tells you. When you do want to see the source, one click on the digest entry opens the full change view with side-by-side before/after and the raw diff.",
  },
  {
    question: "Which competitor launches are worth updating a battlecard for?",
    answer:
      "The heuristic that works: any HIGH-severity change to /pricing, /features, or /integrations warrants a battlecard update within 48 hours. HIGH-severity changes to the homepage or hero warrant a positioning-note update but not necessarily a full battlecard revision. LOW/MEDIUM changes are worth noting but often don't need immediate action — a footer edit, a testimonial rotation, a small microcopy tweak. Across KompWatch customers the pattern is roughly: ~60% of HIGH-severity launch signals materially change how sales should position against that competitor, ~30% are worth noting but don't force battlecard changes, ~10% turn out to be reverts or A/B tests. KompWatch's severity scoring is calibrated to keep the noise low.",
  },
  {
    question: "Can this replace a full product marketing launch-monitoring program?",
    answer:
      "Yes for the monitoring layer, no for the strategy/synthesis layer. KompWatch replaces the mechanical work — bookmarking pages, refreshing them, diffing them, writing up what changed. It does not replace the strategic work of interpreting a launch, deciding what it means for your positioning, writing the internal briefing note, or facilitating the battlecard-update conversation with sales. Think of KompWatch as the launch-detection sensor; the PMM (or CI analyst) does the interpretation. This is what makes it viable for solo PMMs — the tool handles the 80% of launch monitoring that would otherwise consume 5+ hours a week of Friday-afternoon bookmark-checking, freeing you for the 20% that actually needs a human.",
  },
  {
    question: "What about competitor launches that happen off their website — e.g. Product Hunt, TechCrunch?",
    answer:
      "KompWatch focuses on the on-site signal: what changed on the competitor's own pages. Off-site launches (Product Hunt, TechCrunch, industry press) are worth watching too, and the traditional tools cover them well — Google Alerts, a Feedly with the right feeds, or a tool like Mention. In practice the two streams overlap heavily: any launch that hits Product Hunt also hits the competitor's own /product page within hours (usually before, actually — the /product page is the artifact PH links to). So KompWatch catches the on-site version of every meaningful launch. Use a light Google Alerts + Product Hunt subscription as a secondary sweep for the press-release-only launches.",
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
  name: "How to monitor competitor product launches using KompWatch",
  description:
    "Add each competitor's changelog, /features, /pricing, /integrations, and homepage as URL slots. KompWatch snapshots each page every 1–6 hours and delivers an AI-classified digest — battlecard-ready within 48 hours of every launch.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function ProductLaunchMonitoringPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Product Launch Monitoring",
            path: "/use-case/product-launch-monitoring",
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
          Use case · Product launch monitoring
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Know about competitor launches{" "}
          <span className="text-brand-600">before your sales team hears it from a buyer</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch watches every launch-signal page on your top competitors — changelog,
          /features, /pricing, /integrations, homepage — every 1–6 hours. When Klue, Kompyte, or
          Crayon ships something, you get an AI-classified digest with enough context to update the
          battlecard the same day.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase LaunchMonitoring Hero CTA"
            eventProps={{ usecase: "product-launch-monitoring" }}
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
          No credit card. 5-minute setup. Playwright rendering — JS-driven changelogs supported.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why PMMs miss competitor launches
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three failure modes we hear from every product marketer, CI analyst, and founder-PMM.
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
              How KompWatch fits into your launch-monitoring workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. Works alongside Google Alerts, a Notion CI hub, or a full battlecard
              program.
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
              Which launch signals KompWatch catches
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Six page types. Priority-ordered by how reliably they surface real launches vs noise.
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

      {/* Sample launch digest entry */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What a launch alert looks like in your inbox
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Read it in 30 seconds. Ship a battlecard update the same afternoon.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Daily digest · Competitor launch detected
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Klue · shipped a new tier + integration bundle · 2026-07-08
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                LAUNCH · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Detected changes (past 6 hours):</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>Klue /changelog:</strong> new entry &ldquo;Introducing Klue AI Insights
                  — auto-summarize competitor moves with GPT-4o.&rdquo; HIGH severity.
                </li>
                <li>
                  <strong>Klue /pricing:</strong> new &ldquo;AI Insights&rdquo; add-on tier
                  appeared at $199/mo/user, positioned as upgrade to Team plan. HIGH severity.
                </li>
                <li>
                  <strong>Klue /product:</strong> new &ldquo;AI Analyst&rdquo; row added to
                  feature grid, with green checkmarks under Team and Enterprise columns. MEDIUM
                  severity.
                </li>
                <li>
                  <strong>Klue homepage:</strong> hero rewritten from &ldquo;the competitive
                  intelligence platform&rdquo; to &ldquo;AI-powered competitive enablement.&rdquo;
                  HIGH severity.
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Launch summary:</strong> coordinated GA of Klue&rsquo;s AI Insights add-on
                — new pricing tier, new feature grid entry, homepage hero rewrite, and blog post
                all landed within a 4-hour window. Expect this in every enterprise pitch this
                month. <strong>Suggested actions:</strong> (1) update Klue battlecard with new
                AI-add-on pricing objection; (2) prepare 1-slide AI-vs-KompWatch position for
                sales; (3) review 5 in-flight Klue deals — 2 flagged as AI-interested in CRM.
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
              How KompWatch compares to other launch-monitoring approaches
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Honest comparison. When another tool is a better fit, we say so.
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
              Feature tracking use case &rarr;
            </Link>
            <Link
              href="/use-case/competitive-battlecard"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Battlecards from KompWatch data &rarr;
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
              Launch monitoring for $49/mo — not $50K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full CI platform to know when competitors ship. You need the
              monitoring layer. That&rsquo;s KompWatch.
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
                Track the 2 competitors you care most about. Weekly digest catches every material
                launch — good enough to never be caught flat-footed in a sales conversation.
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
                3 competitors monitored deeply (changelog + features + pricing). Daily digest.
                Launches surfaced within hours, not days. The default launch-monitoring loadout.
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
                10 competitors × 5 pages each. Hourly snapshots. Slack routes HIGH-severity
                launches into #product-marketing or #sales-enablement — battlecards ship same
                day.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase LaunchMonitoring Pricing CTA"
              eventProps={{ usecase: "product-launch-monitoring" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when your program grows
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
            Competitor product launch monitoring — FAQ
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
                Track competitor features &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The related use case — surface every feature-grid change so battlecards stay
                current, not just launch-day signals.
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
                Every HIGH-severity launch is a battlecard update candidate. Feed KompWatch alerts
                straight into your battlecard cadence.
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
                Pricing-page changes almost always accompany launches. Get the deepest coverage of
                the highest-signal launch surface.
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
                Correlate competitor launches with deal outcomes. Which of last quarter&rsquo;s
                losses map to a mid-cycle competitor launch?
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop finding out about competitor launches from lost deals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 URLs — changelog, features, pricing,
            integrations, homepage — every 6 hours. When they ship, you know before your buyers do.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase LaunchMonitoring Bottom CTA"
              eventProps={{ usecase: "product-launch-monitoring" }}
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
              href="/use-case/competitive-battlecard"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
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
