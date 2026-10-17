import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Win/Loss Analysis with Competitor Monitoring — Deal Post-Mortems With Real Context | KompWatch",
  description:
    "Every time you lose a deal to a competitor, KompWatch can tell you what changed on their site in the 60 days before that deal closed. Pricing shifts, positioning rewrites, new features, new proof — the competitor-side context your win/loss analysis is missing. Free for 2 competitors, $49/mo for 10.",
  keywords: [
    "win loss analysis tool",
    "competitor win loss analysis",
    "win loss analysis software",
    "win loss debrief context",
    "sales deal post mortem tool",
    "competitor change history for sales",
    "why did we lose the deal",
    "lost to competitor analysis",
    "competitive intelligence for win loss",
    "klue win loss alternative",
    "win loss without CRM integration",
    "competitor pricing change tracking sales",
    "battlecard update from win loss",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/win-loss-analysis`,
  },
  openGraph: {
    title:
      "Win/Loss Analysis With Real Competitor Context — KompWatch",
    description:
      "Look back at every competitor change in the 60 days before a deal closed. AI-classified pricing / messaging / feature / proof diffs. $49/mo, self-serve.",
    url: `${siteUrl}/use-case/win-loss-analysis`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Win/Loss Analysis With Real Competitor Context — KompWatch",
    description:
      "Every 'lost to Klue' debrief starts with: what changed on Klue's site last month? KompWatch has the answer. $49/mo.",
  },
};

const painPoints = [
  {
    title: "Sales says \"lost to Klue on price\" — and you have no idea if Klue changed price",
    description:
      "The rep marks the deal Lost, picks \"Klue\" from the competitor dropdown, and moves on. Nobody checks whether Klue actually dropped their price last month, added a tier, or rewrote their ROI page. The debrief is a guess dressed up as an insight.",
  },
  {
    title: "By the time you notice a loss pattern, the competitor has already moved twice more",
    description:
      "Quarterly win/loss reviews surface trends 8–12 weeks late. If a competitor repositioned in April and you spot the loss spike in July, they've already shipped the next play. Your battlecard update ships against a competitor state that's two moves stale.",
  },
  {
    title: "Buyer-interview programs cost $30–60K/yr and skip the competitor side entirely",
    description:
      "Clozd, Wynter, and internal win/loss interviews are excellent at capturing what the buyer thought. None of them tell you what the competitor's site actually said the week that buyer evaluated it. You end up interpreting buyer quotes without the artifact the buyer was reacting to.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Add every competitor that shows up in your CRM \"Lost To\" field",
    description:
      "Start with the 3–5 competitors that appear on most Closed-Lost deals — usually Klue, Crayon, Kompyte, or the incumbent your reps consistently lose to. Add each competitor's homepage, /pricing, and /product pages as URL slots. Pro (10 URLs) covers 3 competitors deeply; Team (50 URLs) covers 10–15.",
  },
  {
    step: "2",
    title: "KompWatch snapshots each page every 1–6 hours",
    description:
      "Every snapshot is a timestamped record. Six months later, when a deal debrief asks \"what did Klue's pricing page look like on 2026-06-14?\", the answer is one click deep. Playwright rendering means JS-driven pricing tables, hero copy, and testimonials are all captured — not just the raw HTML.",
  },
  {
    step: "3",
    title: "When a deal closes, filter competitor change history to the last 30–60 days",
    description:
      "Open the competitor in KompWatch → Change History. Filter to the sales cycle window. Every HIGH-severity change (pricing drop, messaging rewrite, new feature, new proof block) is a candidate cause. AI summaries make the diff readable in 10 seconds instead of 10 minutes.",
  },
  {
    step: "4",
    title: "Feed findings back into the debrief, the battlecard, and next quarter's plan",
    description:
      "Attach the change-history export to the CRM deal record. Update battlecards within 48 hours of any HIGH-severity competitor change (KompWatch surfaces them daily). Over 90 days you'll see which competitor moves correlate with your loss spikes — and which of your wins map to competitor weaknesses.",
  },
];

const whatWeMonitor = [
  {
    title: "Pricing page changes",
    description:
      "The single highest-signal surface for win/loss. A competitor dropping their entry-tier price by 30% two weeks before your Closed-Lost date isn't a coincidence — it's the cause. KompWatch tags every /pricing edit with HIGH severity.",
    example:
      '"Klue removed their $50K enterprise floor. New \'Team\' tier listed at $12K/yr. Detected 2026-06-14 — 11 days before your Q2 Klue losses spiked."',
  },
  {
    title: "Positioning & messaging rewrites",
    description:
      "Hero copy, category descriptors, /product framing. Buyers evaluate a competitor against the story they see today, not the one you built the battlecard against six months ago. Positioning shifts predict where losses will cluster next.",
    example:
      '"Crayon rewrote /product from \'competitive intelligence platform\' to \'AI competitive enablement.\' Same shift on homepage + meta title. Repositioning, not A/B test."',
  },
  {
    title: "New features & product launches",
    description:
      "Changelog entries, /features additions, new integration logos. When sales says \"we lost because they had Salesforce integration and we didn't,\" you can verify whether that integration existed 30 days ago — or whether the rep is retrofitting an excuse.",
    example:
      '"Kompyte shipped Salesforce native app 2026-05-12. Three of your last four Kompyte losses closed after that date. Correlation worth investigating."',
  },
  {
    title: "New customer logos & social proof",
    description:
      "Logo bars, testimonial blocks, case-study additions. If a competitor added a logo from your buyer's peer company, that's often the single line that closed the deal. Track logo swaps and case-study drops with the same rigor as pricing.",
    example:
      '"Klue added Snowflake logo to homepage + published Snowflake case study on 2026-06-01. Your Snowflake-adjacent SMB losses to Klue tripled in June."',
  },
  {
    title: "CTA & motion changes",
    description:
      "\"Start free trial\" → \"Book a demo\" (or the reverse) reveals a GTM motion shift. If a competitor moved to self-serve, you may be losing SMB deals to their free tier. If they moved to sales-led, you may be losing enterprise deals to their SDR outreach.",
    example:
      '"Crayon replaced \'Book a demo\' with \'Start 14-day trial\' in header. Self-serve motion opened — expect increased SMB pipeline conflict."',
  },
  {
    title: "Case study & customer story additions",
    description:
      "New /customers entries, case study drops, testimonial rotations. Each new case study is a proof point the competitor will use in every deal for the next 6 months. Knowing what they published gives sales the counter-narrative before the buyer brings it up.",
    example:
      '"Klue published \'How Datadog runs their competitive program\' case study on 2026-06-08. Expect this in every enterprise pitch — arm your reps with a Datadog-scale counter-example."',
  },
];

const comparisonTools = [
  {
    tool: "Manual review before every debrief",
    verdict:
      "Someone opens the competitor's site the day of the loss review. No record of what the page looked like when the deal was actually being evaluated. Zero pattern detection across deals.",
    ok: false,
  },
  {
    tool: "Wayback Machine",
    verdict:
      "Captures some historical snapshots, but coverage is sparse (competitor pricing pages often skipped for weeks) and there's no diff summary or classification. Fine for a one-off deep-dive, useless as a program.",
    ok: false,
  },
  {
    tool: "Clozd / Wynter / buyer-interview programs",
    verdict:
      "Excellent at capturing what the buyer thought — but they only capture the buyer's side. No competitor-side artifact. Also $30–60K/yr and require analyst hours. Complementary to KompWatch, not a substitute.",
    ok: false,
  },
  {
    tool: "Klue AI-First Win-Loss Suite",
    verdict:
      "Analyzes call recordings + CRM outcomes. Requires Gong/Chorus + Salesforce integration + a sales demo. Median deal ~$50K/yr (Vendr, 106 deals). Doesn't monitor competitor websites — that's a different Klue product line.",
    ok: false,
  },
  {
    tool: "KompWatch",
    verdict:
      "Timestamped competitor change history with AI-classified diffs (pricing, messaging, features, proof). No CRM integration required, no buyer surveys, no analyst hours. $49/mo self-serve — pairs with any win/loss program.",
    ok: true,
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does KompWatch help with win/loss analysis if it doesn't touch my CRM?",
    answer:
      "Win/loss analysis needs two data streams: the internal one (why did the buyer choose them — CRM outcomes, call recordings, interviews) and the external one (what was the competitor actually offering when the buyer evaluated them). Every tool in the win/loss space handles the internal stream. KompWatch handles the external one. When you attach a KompWatch change-history export to a Closed-Lost deal record, the debrief conversation shifts from \"we think they dropped price\" to \"they dropped their entry tier 30% eleven days before this deal closed — here's the diff.\" No CRM integration required because the data is timestamped and lives in KompWatch — you paste the relevant window into the deal record or export it as a PDF.",
  },
  {
    question: "How is this different from Klue's AI-First Win-Loss Suite?",
    answer:
      "Different products solving different halves of the same question. Klue's Win-Loss Suite analyzes your internal deal data — call recordings (via Gong/Chorus), CRM outcomes, buyer surveys — to generate structured win/loss reports. It answers \"why are we winning and losing based on what buyers told us?\" KompWatch monitors competitor websites and answers \"what was changing on the competitor's side while these deals were being evaluated?\" The two are complementary, not competing. Klue Win-Loss Suite starts around $50K/yr (Vendr median, 106 deals) and requires a demo. KompWatch is $49/mo self-serve. Many teams run both: KompWatch surfaces the external trigger, Klue's suite connects it to buyer feedback.",
  },
  {
    question: "What's the fastest way to start a win/loss program with no analyst budget?",
    answer:
      "Three moves: (1) Add your top 3–5 competitors to KompWatch on the Pro plan — pick the ones that show up most on Closed-Lost deals; (2) For every deal that closes (win or loss) this quarter, spend 5 minutes reviewing the competitor's KompWatch change history for the 30–60 days before close; (3) Add a single freeform field to the CRM deal record — \"competitor change context\" — and paste the top 1–3 relevant KompWatch entries. After 60–90 days you'll have a searchable dataset of competitor moves correlated with your deal outcomes, with zero analyst hours and no new SaaS contracts beyond $49/mo. If the program shows ROI, that's the point at which to consider a buyer-interview layer (Clozd, Wynter) or a full win/loss suite.",
  },
  {
    question: "How far back can KompWatch look? What if the deal closed 4 months ago?",
    answer:
      "KompWatch stores full snapshot history for every URL you've been monitoring, from the day you added it. So if you added Klue's pricing page 6 months ago and want to see what it looked like the week of a deal that closed 4 months ago, that snapshot is one click away — with the AI diff summary of what changed vs the previous snapshot. If you're starting a win/loss program today, add competitors now and the change history will be in place by the time next quarter's deals close. For historical deals from before you started KompWatch, Wayback Machine is your fallback — but coverage is sparse for competitor pricing pages specifically because most are marked no-archive.",
  },
  {
    question: "Can I export KompWatch change history into my CRM or a win/loss report?",
    answer:
      "Yes — every change entry can be shared as a link, exported as a PDF, or copied as a text summary directly from the change history view. Most teams paste the summary into a CRM freeform field on the deal record; a few pipe it into a Notion or Airtable win/loss database via manual copy-paste. Direct API integration with Salesforce, HubSpot, or Gong is on the roadmap but not shipped yet — if this is critical for you, email support@kompwatch.com and we'll prioritize it. In the meantime, the manual export path takes about 2 minutes per deal and works fine at 20–50 deals/quarter.",
  },
  {
    question: "Which competitor changes actually predict deal losses?",
    answer:
      "Based on the pattern we see across KompWatch customers: (1) pricing page changes are the highest-signal — a competitor dropping their entry tier or adding a self-serve tier reliably predicts loss spikes within 2–4 weeks; (2) new customer logos from your buyer's peer group predict enterprise losses (logo social-proof effect); (3) new native integrations with tools your buyer uses (Salesforce, HubSpot, Slack) predict losses on integration-driven deals; (4) positioning rewrites are a slower-signal — they predict losses 6–12 weeks out, once the new framing has propagated to ads and sales pitches. The lower-signal changes: blog posts, minor microcopy, footer edits. KompWatch's severity scoring roughly maps to this hierarchy — HIGH-severity changes are the ones worth reviewing on every deal.",
  },
  {
    question: "Do I need a full CI team to run this, or can a solo PMM do it?",
    answer:
      "Solo PMM (or founder, or head of marketing) is the primary user profile. The whole point of KompWatch is that the monitoring + classification + summarization work is done by the tool — you're consuming a digest, not running an analyst program. For a solo PMM: 15 minutes per week reading the digest, 5 minutes per Closed-Lost deal reviewing competitor change history, 30 minutes per month updating battlecards from HIGH-severity changes. If you have a CI analyst, they use KompWatch as their monitoring layer and spend their time on the strategic synthesis (buyer interviews, deal-review facilitation, competitive strategy docs) rather than the mechanical page-checking.",
  },
  {
    question: "What if a competitor loss wasn't actually caused by anything on their website?",
    answer:
      "That's the correct null result and it's valuable. If a deal was lost to Klue and their site didn't materially change in the 60 days before close, the loss cause was probably internal (your pricing, your product gap, buyer relationship, timing) rather than competitive. That reframing is the point — right now most \"lost to competitor\" debriefs assume the competitor did something, when often the buyer just liked them more for reasons unrelated to any recent change. KompWatch lets you separate \"lost because they moved\" from \"lost because they were always better here.\" Both matter, but the fixes are completely different.",
  },
  {
    question: "How does this pair with tools like Gong, Chorus, or Clozd?",
    answer:
      "Very cleanly, because they don't overlap. Gong/Chorus capture the call transcripts — what the buyer said, what your rep said, what the competitor was framed as. KompWatch captures what the competitor's public artifact actually said the day the buyer evaluated it. Clozd captures the post-decision buyer interview — what the buyer says in retrospect. A full-stack win/loss program uses all three: KompWatch surfaces \"here's what the competitor was doing,\" Gong/Chorus surfaces \"here's how it showed up in the sales conversation,\" Clozd surfaces \"here's how the buyer describes it after the fact.\" Where KompWatch pulls its weight: it's the only one of the three that generates data automatically, at $49/mo, without needing any of the deals or interviews to have happened yet.",
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
  name: "How to run win/loss analysis with competitor monitoring using KompWatch",
  description:
    "Add every competitor from your CRM Lost-To field, snapshot their pricing/product/homepage on a schedule, and pull the 30–60 day change history for every deal debrief. Feed HIGH-severity changes back into battlecards within 48 hours.",
  step: workflow.map((s) => ({
    "@type": "HowToStep",
    position: Number(s.step),
    name: s.title,
    text: s.description,
  })),
};

export default function WinLossAnalysisPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          {
            name: "Win/Loss Analysis",
            path: "/use-case/win-loss-analysis",
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
          Use case · Win/loss analysis
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Every &ldquo;lost to competitor&rdquo; debrief needs{" "}
          <span className="text-brand-600">the competitor&rsquo;s side of the story</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch keeps a timestamped record of every change on your top competitors&rsquo;
          pricing, product, and messaging pages. When a deal closes, you can look back at exactly
          what the competitor was offering in the 30–60 days before close — with AI diffs, severity
          scores, and pattern detection across deals.{" "}
          <strong className="text-gray-900">Free for 2 competitors. $49/mo for 10.</strong>
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="UseCase WinLoss Hero CTA"
            eventProps={{ usecase: "win-loss-analysis" }}
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
          No credit card. 5-minute setup. No CRM integration required.
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why win/loss debriefs feel like guesswork
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Three gaps we hear from every PMM, sales leader, and CI analyst running a
            win/loss program.
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
              How KompWatch fits into your win/loss workflow
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four steps. Works alongside Gong, Clozd, or a solo PMM with a spreadsheet.
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
              Which competitor changes matter for win/loss
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Six change types. Priority-ordered by how strongly they correlate with deal outcomes.
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

      {/* Sample debrief entry */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What a win/loss context entry looks like
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Attach this to the CRM deal record. Read it in 30 seconds. Ship a battlecard update
              the same day.
            </p>
          </div>
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Deal · Closed-Lost · Q2 debrief
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Acme Corp · lost to Klue · $84K ARR
                </div>
              </div>
              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                PRICING · HIGH
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-gray-900">Sales cycle window:</strong> 2026-05-18 →
                2026-07-02 (45 days). Deal marked Lost 2026-07-02 with reason &ldquo;price + product
                fit.&rdquo;
              </p>
              <p>
                <strong className="text-gray-900">Competitor changes during window:</strong>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>2026-06-14 — Klue /pricing:</strong> removed $50K enterprise floor, added
                  new &ldquo;Team&rdquo; tier listed at $12K/yr. HIGH severity.
                </li>
                <li>
                  <strong>2026-06-19 — Klue homepage:</strong> added Snowflake and Datadog logos to
                  top logo bar. HIGH severity (buyer is a Snowflake-adjacent SMB).
                </li>
                <li>
                  <strong>2026-06-24 — Klue /product:</strong> added &ldquo;native Salesforce
                  integration&rdquo; to feature grid. MEDIUM severity.
                </li>
              </ul>
              <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-xs text-brand-800">
                <strong>Debrief conclusion:</strong> loss cause is <em>almost certainly</em> the
                Klue price drop + Salesforce native integration, both of which shipped mid-cycle.
                Rep&rsquo;s &ldquo;price + product fit&rdquo; is accurate but under-specified. Action:
                update Klue battlecard with new pricing tier, ship native Salesforce integration
                position statement to sales this week, review the 3 other in-flight Klue deals for
                the same signal.
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
              How KompWatch compares to other win/loss approaches
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
              Win/loss context for $49/mo — not $50K/yr
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              You don&rsquo;t need a full win/loss suite to answer &ldquo;what changed on the
              competitor&rsquo;s site while this deal was open?&rdquo; You need the monitoring
              layer. That&rsquo;s KompWatch.
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
                Track the 2 competitors that show up most on Closed-Lost. Weekly digest captures
                every material change while the pipeline stays warm.
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
                3 competitors monitored deeply (pricing + homepage + product). Daily digest.
                Change-history export ready for every debrief. The default win/loss loadout.
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
                10–15 competitors monitored. Slack routes HIGH-severity pricing / logo / feature
                changes into #win-loss or #competitive so debriefs start with fresh data.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase WinLoss Pricing CTA"
              eventProps={{ usecase: "win-loss-analysis" }}
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
            Win/loss analysis with competitor monitoring — FAQ
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
              href="/use-case/competitive-battlecard"
              className="rounded-xl border border-gray-200 bg-white p-5 hover:border-brand-300"
            >
              <div className="text-sm font-semibold text-gray-900">
                Build fresh competitive battlecards &rarr;
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Feed win/loss findings straight into battlecards. Every HIGH-severity KompWatch
                change is a candidate battlecard update.
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
                Pricing changes are the highest-signal predictor of loss spikes. Get instant alerts
                on every competitor pricing edit.
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
                Positioning rewrites predict where losses cluster 6–12 weeks out. Catch category
                shifts before they show up in buyer conversations.
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
                The broader use case — every competitor surface (pricing, homepage, features, jobs,
                changelog) in one digest.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop debriefing lost deals without the competitor&rsquo;s side of the story
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add 2 competitors free. Pro ($49/mo) monitors 10 URLs — pricing, homepage, product —
            every 6 hours. When a deal closes, every relevant competitor change is one filter away.
            The win/loss context layer your program has been missing.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase WinLoss Bottom CTA"
              eventProps={{ usecase: "win-loss-analysis" }}
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
              href="/use-case/competitive-battlecard"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Battlecards
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
