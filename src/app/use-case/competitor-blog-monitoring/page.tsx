import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitor Blog Monitoring — Track Every New Post, Category Shift, and Content Bet | KompWatch",
  description:
    "Know the day a competitor publishes a new blog post, launches a new content category, or quietly pivots their content strategy. KompWatch snapshots competitor blogs on a schedule and sends AI-summarized digests. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "competitor blog monitoring",
    "monitor competitor blog",
    "track competitor content",
    "competitor content tracking",
    "competitor content marketing tool",
    "competitor blog tracker",
    "monitor competitor content strategy",
    "competitor blog post alerts",
    "content marketing competitive intelligence",
    "competitor SEO content monitoring",
    "track competitor blog updates",
    "competitor content calendar tracker",
    "blog change monitoring tool",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/competitor-blog-monitoring`,
  },
  openGraph: {
    title:
      "Competitor Blog Monitoring — Track Every Post and Content Bet | KompWatch",
    description:
      "Every new competitor blog post, category launch, and content pivot — captured, AI-summarized, delivered on a schedule. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/competitor-blog-monitoring`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Blog Monitoring — KompWatch",
    description:
      "Know the day a competitor publishes a new post or pivots their content strategy. AI-summarized digests, $49/mo.",
  },
};

const painPoints = [
  {
    title: "You find out about a competitor's new content pillar 3 months late",
    description:
      "By the time someone forwards you the competitor's new \"AI-native workflows\" hub, they've already published 14 posts, ranked for 4 target keywords, and pulled backlinks you were going to chase. Content strategy is now defensive instead of proactive.",
  },
  {
    title: "RSS feeds catch new posts but miss the important context",
    description:
      "RSS tells you \"they published a post.\" It doesn't tell you they rewrote three older posts in the same cluster, added a new category tag, changed their author bylines, or quietly retired 40 pages. The strategic signal is in the pattern, not the single post.",
  },
  {
    title: "Manual weekly content audits eat 3 hours and still miss half the moves",
    description:
      "Opening 5 competitor blogs, scrolling their /blog index, cross-referencing what's new since last week, and writing it up is a real chore. It's the first thing to slip when the quarter gets busy — which is exactly when the competitor ships their biggest content bet.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add each competitor's blog index and top content hubs as monitored URLs",
    description:
      "Start with the /blog index for each priority competitor, then add category hubs (/blog/product, /resources, /guides) and any high-traffic cluster pages you want to watch closely. Free covers 2 URLs; Pro (10 URLs) handles 3–5 competitors deeply; Team (50 URLs) covers a full content-marketing competitive set.",
  },
  {
    step: "2",
    title: "KompWatch snapshots blog surfaces every 1–6 hours",
    description:
      "Playwright renders each blog page fully — including JS-driven post grids, category chips, and featured content blocks that RSS misses entirely. Every snapshot is timestamped so you can look back at what the /blog index looked like on any given day, not just the raw post feed.",
  },
  {
    step: "3",
    title: "AI diffs classify each change: new post, cluster expansion, category launch, retirement",
    description:
      "Instead of a raw \"page changed\" ping, you get an AI summary: \"Klue published 3 new posts in the /win-loss/ category this week — first activity in that cluster since 2026-02. Two posts target 'win loss template' keyword.\" The signal is the pattern, and the AI surfaces it.",
  },
  {
    step: "4",
    title: "Digest lands in your inbox — daily, weekly, or Slack in real time",
    description:
      "Free plan: weekly digest. Pro: daily digest. Team: hourly Slack routes for HIGH-severity content changes (new category launches, big content pivots). Read it during your Monday content planning; ship counter-content or defensive posts inside the same sprint.",
  },
];

const whatWeMonitor = [
  {
    title: "New blog posts and publish cadence shifts",
    description:
      "Every new post on the /blog index, with the AI-classified topic cluster. Cadence shifts (they published 3 posts/week for months, now 8/week for two weeks straight) are often the earliest signal of a content-marketing push tied to a product launch or funding round.",
    example:
      '"Crayon published 5 posts in /win-loss/ over 7 days — 3.2x their /win-loss/ baseline. First cluster acceleration since their AI-First Win-Loss Suite launch."',
  },
  {
    title: "New content categories and hub launches",
    description:
      "A brand-new /resources/, /guides/, or /category/[topic]/ hub is a strategic signal — usually months of planning behind it. KompWatch flags new category paths the first time they appear in the site's internal linking. Beat them to the SEO cluster or defend your own hub proactively.",
    example:
      '"Klue added /category/ai-competitive-enablement/ to the blog nav. 4 posts under it, all published in the last 10 days. Category didn\'t exist 2 weeks ago."',
  },
  {
    title: "Post rewrites, republishes, and content refreshes",
    description:
      "The often-invisible SEO play: competitors rewriting 2-year-old posts to reclaim rankings. KompWatch catches title, meta description, and body-copy changes on existing posts — including the \"updated 2026\" content-refresh pattern that quietly recaptures search rankings.",
    example:
      '"Kompyte rewrote 12 pillar posts in /guides/ over 3 weeks — new titles include \'2026\' and expanded intros. Content-refresh SEO play, likely tied to a link-building push."',
  },
  {
    title: "Author bylines, guest posts, and expert positioning",
    description:
      "New author names, new guest contributors, or a shift from founder-authored posts to VP-Marketing-authored posts all signal changes in how the competitor is investing content headcount. Guest posts from named experts are often a link-building or authority-building bet.",
    example:
      '"Klue added April Dunford as guest author on 2 positioning posts. First named-expert bylines in 6 months — authority-building play tied to the Rev Rooms launch."',
  },
  {
    title: "Retired posts, redirects, and content pruning",
    description:
      "Posts quietly disappearing from the /blog index — often redirected to consolidated pillar pages — is a strong SEO-hygiene signal. KompWatch flags when the /blog index gets shorter unexpectedly, and which posts are gone. Content pruning at scale usually precedes a ranking recovery.",
    example:
      '"Crayon /blog index dropped from 412 to 388 posts over 2 weeks — 24 posts retired. Sample check: 18 of 24 were thin sub-500-word posts from 2022. SEO content prune."',
  },
  {
    title: "CTA, opt-in, and gated-content changes on the blog",
    description:
      "The end-of-post CTA is where the blog turns into pipeline. When a competitor changes their blog CTAs from \"Book a demo\" to \"Download the report\" or launches a new gated asset, that's a full-funnel shift — and worth mirroring or countering in your own content.",
    example:
      '"Klue swapped every /blog/ end-of-post CTA from \'Book a demo\' to \'Download the 2026 CI Benchmark Report.\' New gated asset live at /report/ci-benchmark-2026 — lead-gen pivot."',
  },
];

const comparisonTools = [
  {
    tool: "RSS feeds (Feedly, Inoreader)",
    verdict:
      "Catches new posts on blogs that publish RSS. Misses category changes, hub launches, republishes, CTA shifts, and blogs without RSS (increasingly common). No AI summary — you still read every post to figure out what shifted strategically.",
    ok: false,
  },
  {
    tool: "Ahrefs / Semrush content-gap reports",
    verdict:
      "Excellent at showing which keywords competitors rank for and what content they're publishing. Runs on a weekly-to-monthly refresh, no real-time alerts, no diff of exactly what changed on-page. Complementary to KompWatch, not a substitute — Ahrefs tells you \"they rank for X now,\" KompWatch tells you \"here's the post they shipped last Tuesday.\"",
    ok: false,
  },
  {
    tool: "Visualping / Wachete on the /blog index",
    verdict:
      "Pings you when the page changes, which for a blog index means every new post. No AI summary of what type of change, no cluster/category classification, no cross-post pattern detection. You're back to reading 20 raw diffs per week per competitor.",
    ok: false,
  },
  {
    tool: "Klue / Crayon content intel modules",
    verdict:
      "Enterprise CI platforms include blog monitoring as one feature among many. Median deal ~$30–50K/yr (Vendr), sales-led, annual contracts. Overkill if content-marketing monitoring is your primary use case.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Purpose-built for scheduled competitor page monitoring with AI-classified diffs. Handles blog index, category hubs, individual posts, and CTA changes in one workflow. $49/mo self-serve, no annual contract. Free plan covers 2 competitors.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How is this different from just subscribing to competitor blogs via RSS?",
    answer:
      "RSS gives you one signal — a new post exists — with no strategic context. It doesn't tell you the competitor launched a brand-new /category/ hub, rewrote 12 pillar posts, retired 24 thin posts, or swapped every blog CTA to push a new gated asset. Those are the strategic content moves that predict where the competitor is headed. RSS also breaks silently when a blog stops publishing a feed (which happens increasingly often on Next.js / static-generated sites). KompWatch monitors the actual rendered blog pages, catches all the meta-level changes, and sends an AI-classified digest. Many teams keep RSS for real-time post pings and use KompWatch for the strategic layer on top.",
  },
  {
    question: "Do you monitor individual blog posts too, or just the /blog index?",
    answer:
      "Both. You can add the /blog index as one URL slot (catches new posts, category changes, index-level meta shifts) and add individual high-traffic pillar posts as separate slots (catches title, meta, and body-copy rewrites on those specific posts). Most teams start with /blog + 2–4 pillar posts per competitor. Pro (10 URLs) covers 2–3 competitors deeply this way. Team (50 URLs) covers a full content-marketing competitive set — 8–12 competitors with pillar-post coverage each.",
  },
  {
    question: "Can KompWatch catch when competitors update old posts with the \"updated 2026\" content-refresh pattern?",
    answer:
      "Yes — this is one of the highest-value use cases for competitor content monitoring. When a competitor rewrites a 2-year-old post (new title, expanded intro, updated stats, republish date bumped) it's usually part of an SEO ranking-recovery push. KompWatch snapshots each pillar post you're monitoring and flags title / meta / body-copy diffs the day they ship. Over a few weeks you'll see the pattern — \"they refreshed 12 pillar posts in /guides/ over 3 weeks\" — which tells you a link-building or ranking-recovery campaign is live. That's a much stronger signal than the raw post appearing in RSS (it doesn't, because the URL didn't change).",
  },
  {
    question: "What if the competitor's blog is on a subdomain or a totally different domain?",
    answer:
      "No problem. KompWatch tracks any public URL — blog.competitor.com, www.competitor.com/blog, competitor.substack.com, or a fully separate content site like [product].dev. Just paste the URL. If they have multiple content properties (main blog + resource hub + newsletter archive), each one is a URL slot. Pro's 10-URL budget usually covers a competitor's full public content footprint. If a blog is behind a login or paywall, KompWatch can't snapshot it — public-web only.",
  },
  {
    question: "How do content marketers actually use the digest in their weekly planning?",
    answer:
      "The pattern we see: schedule the KompWatch digest to land Sunday night or Monday morning, and open it as the first tab in your Monday content-planning meeting. The digest is 5–10 minutes of reading — scan HIGH-severity changes (new categories, cadence shifts, big content bets) and MEDIUM changes (batch of new posts in one cluster). For each HIGH item, ask \"do we counter, mirror, or ignore?\" and add the answer to the sprint plan. Over a quarter you'll build a shared understanding of what each competitor is betting on — which is what turns content strategy from reactive to proactive. Solo content marketers spend ~15 minutes per week on this; small content teams spend 30 minutes together.",
  },
  {
    question: "Can I get alerts for specific competitors or specific content categories?",
    answer:
      "Yes, at a URL-slot level today, and at a keyword/topic filter level on Team. On Pro, you configure which URLs get daily vs weekly digests — so you can put a priority competitor's /blog on daily and lower-priority competitors on weekly. On Team, Slack routes let you send HIGH-severity changes from specific URL groups to specific channels (#content-team for blog changes, #product-marketing for messaging changes). Topic-level filters (\"only alert me on posts about X keyword cluster\") are on the roadmap — email support@kompwatch.com if that's blocking you and we'll prioritize it.",
  },
  {
    question: "How does this pair with Ahrefs or Semrush for content-competitive intel?",
    answer:
      "Very cleanly, because they answer different questions. Ahrefs and Semrush answer \"what does the competitor's content look like at a keyword / ranking / backlink level, right now?\" They refresh on a weekly-to-monthly cadence and give you the strategic aerial view. KompWatch answers \"what did the competitor publish or change on their blog since yesterday, and what pattern does it suggest?\" Fresh, tactical, delivered as a digest. Most content-marketing teams run both: Ahrefs for the monthly content-gap analysis and ranking tracking; KompWatch for the daily/weekly \"what are they shipping right now\" layer. Different price points too — Ahrefs starts around $129/mo, KompWatch Pro is $49/mo, and they don't overlap in functionality.",
  },
  {
    question: "Does KompWatch tell me the SEO impact of competitor content changes?",
    answer:
      "Partially. KompWatch captures the on-page signal (they published a post, changed a title, added a category) — which is the leading indicator. It doesn't currently pull SERP rankings, backlink data, or organic traffic estimates — that's what Ahrefs/Semrush do, and we don't try to duplicate them. The workflow most content teams use: KompWatch flags the change today, then 4–6 weeks later Ahrefs shows whether that content actually moved rankings. If it did, that's a signal to double down on counter-content in the same cluster. Combining the leading (KompWatch) and lagging (Ahrefs) indicators is where the compounding value shows up.",
  },
  {
    question: "What's a realistic setup for a solo content marketer with a $49/mo budget?",
    answer:
      "Pro plan, 10 URL slots, allocated as: 3 competitor /blog indexes (top 3 by content investment) + 5 pillar posts from those competitors that map to your target keywords + 2 flexible slots for whichever content hub is currently hottest (usually a category page, resources hub, or newsletter archive). Daily digest lands in your inbox. Weekly, spend 15 minutes reviewing HIGH-severity changes and deciding what to counter/mirror in your own content sprint. Over 90 days you'll have a searchable log of every competitor content move, which becomes the source material for quarterly competitive-content strategy reviews. Total time cost: ~1 hour/month. Total spend: $588/yr — less than 3 hours of a content strategist's billable rate.",
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
  name: "How to monitor competitor blogs with KompWatch",
  description:
    "Add each competitor's blog index and top content hubs as monitored URLs, let KompWatch snapshot them every 1–6 hours, receive AI-classified digests of new posts / category launches / rewrites, and feed HIGH-severity changes into your weekly content planning.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function CompetitorBlogMonitoringPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Competitor Blog Monitoring",
            path: "/use-case/competitor-blog-monitoring",
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
          Use case · Competitor blog monitoring
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Track every competitor blog post,{" "}
          <span className="text-brand-600">category launch, and content bet</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch snapshots each competitor&rsquo;s blog index, category hubs, and pillar posts on
          a schedule — then sends an AI-classified digest of new posts, republishes, hub launches,
          and CTA shifts. RSS tells you a post exists; KompWatch tells you what the pattern means.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase BlogMonitoring Hero CTA"
            eventProps={{ usecase: "competitor-blog-monitoring" }}
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
          No credit card. 5-minute setup. Works with any public blog — RSS or no RSS.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why content teams keep missing competitor moves
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three gaps we hear from every content marketer, SEO lead, and PMM
            running competitive content intel.
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
              How KompWatch fits into your content-competitive workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. Works alongside Ahrefs, Semrush, or a solo content marketer with a
              Monday planning meeting.
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
              Six blog-side signals KompWatch catches that RSS misses
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Priority-ordered by how strongly they correlate with a competitor&rsquo;s next
              content bet.
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
              What a Monday morning content digest entry looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Open it during your content planning meeting. Read it in 60 seconds. Ship
              counter-content the same sprint.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Digest · Weekly · Content changes
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Klue /blog · category launch detected
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                CONTENT · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Window:</strong> 2026-05-10 → 2026-05-17 (7 days).
                Klue blog index snapshot deltas across 42 blog-related URLs.
              </p>
              <p>
                <strong className="text-gray-900">What changed on their blog this week:</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>New category:</strong>{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                    /category/ai-competitive-enablement/
                  </code>{" "}
                  added to the blog nav. 4 posts under it, all published this week. Category
                  didn&rsquo;t exist 8 days ago. HIGH.
                </li>
                <li>
                  <strong>Publish cadence:</strong> 9 new posts this week vs 3-post baseline (3x).
                  Six of nine sit in the new category. HIGH.
                </li>
                <li>
                  <strong>Pillar refresh:</strong> 3 posts in{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs">/guides/</code> rewritten
                  with &ldquo;2026&rdquo; in titles + expanded intros. Content-refresh SEO play.
                  MEDIUM.
                </li>
                <li>
                  <strong>CTA swap:</strong> End-of-post CTA changed from &ldquo;Book a demo&rdquo;
                  to &ldquo;Download the 2026 CI Benchmark Report.&rdquo; New gated asset live at{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                    /report/ci-benchmark-2026
                  </code>
                  . HIGH — full-funnel shift, not just content.
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Suggested next moves:</strong> (1) audit your own &ldquo;AI-native
                competitive enablement&rdquo; category coverage — Klue is building a keyword cluster
                you likely have thin coverage on. (2) Ship a benchmark-style gated asset of your own
                inside 4 weeks to counter their lead-gen pivot. (3) Refresh your 3 top pillar posts
                in the same cluster with 2026 stats before their new posts pick up rankings.
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
              How KompWatch compares to other competitor-content approaches
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
              href="/use-case/competitor-messaging-changes"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Track messaging changes &rarr;
            </Link>
            <Link
              href="/use-case/competitor-feature-tracking"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 hover:border-brand-300 hover:text-brand-700"
            >
              Track feature launches &rarr;
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
              Content-competitive intel for $49/mo — not $30K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full CI platform to know what your competitors are shipping on
              their blog this week. You need scheduled snapshots + AI diffs. That&rsquo;s
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
                Track the 2 competitors publishing the most content in your space. Weekly digest
                catches every new post + category shift.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                Pro · best for content marketers
              </div>
              <div className="mt-2 text-3xl font-bold">
                $49<span className="text-sm font-normal text-gray-400">/mo</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">10 URLs · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                3 competitor blogs + 5 pillar posts + 2 flex slots. Daily digest. The default
                loadout for solo content marketers and small content teams.
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
                8–12 competitor blogs with pillar-post coverage each. Slack routes HIGH-severity
                content changes into #content or #seo the moment they ship.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase BlogMonitoring Pricing CTA"
              eventProps={{ usecase: "competitor-blog-monitoring" }}
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
            Competitor blog monitoring — FAQ
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
              href="/use-case/competitor-messaging-changes"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Monitor competitor messaging shifts &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Positioning changes on the homepage and /product page often precede a matching
                content-strategy pivot on the blog.
              </p>
            </Link>
            <Link
              href="/use-case/competitor-feature-tracking"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Track competitor feature launches &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Content pushes almost always ride on a product launch. Track features and blog
                together for the full launch signal.
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
                The launch-day signal shows up on the blog, the homepage, and /product at the same
                time. KompWatch stitches them together.
              </p>
            </Link>
            <Link
              href="/use-case/monitor-competitor-website"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Monitor a competitor&rsquo;s full website &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                The broader use case — every competitor surface (pricing, homepage, features, blog,
                jobs, changelog) in one digest.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop finding out about competitor content moves 3 months late
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitor blogs free. Pro ($49/mo) monitors 10 URLs — blog indexes, category
            hubs, pillar posts — every 6 hours. The AI digest tells you what shipped, what pattern
            it fits, and what to counter in your next sprint.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase BlogMonitoring Bottom CTA"
              eventProps={{ usecase: "competitor-blog-monitoring" }}
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
              href="/use-case/competitor-messaging-changes"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Messaging changes
            </Link>
            <Link
              href="/use-case/competitor-feature-tracking"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
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
