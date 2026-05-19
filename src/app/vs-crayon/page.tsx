import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { CompetitorUrlCapture } from "@/components/competitor-url-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Priced Out by Crayon? KompWatch vs Crayon (Honest Comparison)",
  description:
    "Crayon was acquired by SoftwareOne for $1.4B in April 2026. If your renewal is up or your contract priced you out, KompWatch tracks the same competitor signals from $49/mo — self-serve, no sales call.",
  keywords: [
    "Crayon alternative",
    "Crayon vs KompWatch",
    "Crayon competitor",
    "Crayon pricing",
    "Crayon SoftwareOne acquisition",
    "Crayon renewal alternative",
    "priced out of Crayon",
    "competitive intelligence software",
    "competitor monitoring tool",
    "Crayon competitive intelligence alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-crayon`,
  },
  openGraph: {
    title: "Priced Out by Crayon? KompWatch — Same Insights, Fraction of the Cost",
    description:
      "Crayon's median contract is $28,750/yr and they were acquired by SoftwareOne in April 2026. KompWatch is the independent self-serve alternative from $49/mo.",
    url: `${siteUrl}/vs-crayon`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priced Out by Crayon? — Honest Comparison",
    description:
      "Crayon's median contract: $28,750/yr. Just acquired by SoftwareOne for $1.4B. KompWatch is the independent alternative — $49/mo, self-serve, no sales call.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  crayon: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", crayon: "$5K–$80K+/yr (quote)" },
  { feature: "Annual cost (median, vendr.com)", kompwatch: "$588/yr", crayon: "$28,750/yr" },
  { feature: "Independent vendor", kompwatch: true, crayon: "Owned by SoftwareOne (Apr 2026)" },
  { feature: "Self-serve signup", kompwatch: true, crayon: false },
  { feature: "No sales call required", kompwatch: true, crayon: false },
  { feature: "Free plan", kompwatch: true, crayon: false },
  { feature: "Pricing page tracking", kompwatch: true, crayon: true },
  { feature: "Feature & product page tracking", kompwatch: true, crayon: true },
  { feature: "Blog & content monitoring", kompwatch: true, crayon: true },
  { feature: "Job listing tracking", kompwatch: true, crayon: true },
  { feature: "AI change summaries", kompwatch: true, crayon: true },
  { feature: "Email digests", kompwatch: true, crayon: true },
  { feature: "Slack / webhook alerts", kompwatch: true, crayon: true },
  { feature: "Tech stack detection", kompwatch: "Pro+", crayon: true },
  { feature: "Battlecards", kompwatch: "One-click export", crayon: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", crayon: "Weeks (sales + onboarding)" },
];

function ComparisonCell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true) {
    return (
      <svg
        className={`h-5 w-5 ${highlight ? "text-brand-600" : "text-green-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return (
    <span className={highlight ? "font-medium text-brand-600" : "text-gray-600"}>{value}</span>
  );
}

export default function VsCrayonPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Crayon", path: "/vs-crayon" }]} />
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
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600"></span>
          </span>
          Crayon acquired by SoftwareOne for $1.4B &mdash; April 2026
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Crayon{" "}
          <span className="text-brand-600">— same insights, fraction of the cost</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Crayon&rsquo;s median customer pays{" "}
          <strong className="text-gray-900">$28,750/yr</strong> (vendr.com data) and just got acquired by
          SoftwareOne &mdash; a $4B IT-services consolidator with a public CHF 80&ndash;100M cost-synergy target.
          KompWatch tracks the same competitor signals (pricing, features, blogs, jobs) starting at{" "}
          <strong className="text-gray-900">$49/mo</strong>, with self-serve signup in under 2 minutes.
        </p>
        <p className="mx-auto mt-4 max-w-2xl rounded-lg border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm font-medium leading-relaxed text-amber-900">
          Pricing uncertainty ahead. SoftwareOne&rsquo;s CHF 80&ndash;100M cost-synergy target means
          headcount cuts, support changes, and pricing increases are likely within 12&ndash;18 months.
          Lock in KompWatch&rsquo;s $49/mo before Crayon&rsquo;s post-acquisition repricing hits.
        </p>
        <CompetitorUrlCapture competitor="Crayon" placeholder="https://crayon.co or any competitor URL" />
        <p className="mt-3 text-xs text-gray-400">
          Paste a competitor URL to start monitoring. No credit card. No sales call.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <TrackedCTA
            href="/pricing"
            event="Acquisition Urgency Pricing CTA Click"
            eventProps={{ competitor: "Crayon", section: "hero", variant: "acquisition-urgency" }}
            className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Lock in KompWatch pricing &rarr;
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
      </section>

      {/* Vendor context */}
      <section className="border-y border-amber-200 bg-amber-50 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">!</span>
            <div>
              <h2 className="text-base font-semibold text-amber-900">
                Crayon is now a niche product inside a $4B IT-services rollup
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-800">
                SoftwareOne acquired Crayon for $1.4B in April 2026. Niche tools
                inside large consolidators historically see slower roadmaps,
                enterprise-only pivots, and packaging changes that nudge SMB
                customers upmarket &mdash; or out. KompWatch is independent and
                focused solely on competitor monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The pricing gap is real
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from vendr.com and G2 reviews (May 2026).
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-600 bg-white p-6 shadow-sm ring-1 ring-brand-600">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                KompWatch Pro
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $49<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$588 / year</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked</li>
                <li>✓ Daily AI digests</li>
                <li>✓ Self-serve signup</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Crayon (median contract)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $28,750<span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">Range: $5K (entry) to $80K+/yr (team plans)</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· Quote-only pricing</li>
                <li>· Sales call required</li>
                <li>· Annual contract</li>
                <li>· Multi-week onboarding</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            That&rsquo;s a <strong className="text-gray-900">~49&times; price difference</strong>{" "}
            at the median &mdash; for the same core competitive intelligence, without the sales process.
          </p>
        </div>
      </section>

      {/* Why teams are leaving Crayon — priced-out angle */}
      <section className="border-b border-gray-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Why teams are leaving Crayon in 2026
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
              Three things changed this year. Each of them shifts the math for small and mid-size teams.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                April 2026
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                $1.4B SoftwareOne acquisition
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Crayon is now a niche product inside a $4B IT-services rollup. Niche tools inside
                large consolidators historically see slower roadmaps, enterprise-only pivots, and
                packaging changes that nudge SMB customers upmarket — or out.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                If you&rsquo;re mid-contract, read the change-of-control clause.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Cost synergies
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                CHF 80–100M target in 18 months
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                SoftwareOne publicly committed to CHF 80–100M in annual cost savings within 18
                months of close. That money comes from somewhere — usually some mix of headcount,
                support functions, product investment, and pricing.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                Not the vibe you want from a vendor on a 3-year contract.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                Renewal math
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                $28,750/yr median contract
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Crayon&rsquo;s median customer paid <strong className="text-gray-900">$28,750/yr</strong>{" "}
                in 2025 (vendr.com data). Annual contract, sales-call gated, multi-week onboarding.
                For a 3-person CI function or a founder doing it themselves, that&rsquo;s 49&times; what
                KompWatch Pro costs for comparable monitoring.
              </p>
              <p className="mt-3 text-xs text-gray-500">
                $49/mo vs $2,400/mo. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-8">
            <p className="text-sm font-medium text-gray-700">
              Renewal coming up in the next 90 days?
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
              Run KompWatch alongside Crayon for a full digest cycle. If the same signals land in
              your inbox without the noise — don&rsquo;t renew. Most teams switch within one cycle.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <TrackedCTA
                href="/login"
                event="Priced Out CTA Click"
                eventProps={{ competitor: "Crayon", section: "why-leaving" }}
                className="inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free — run side by side
              </TrackedCTA>
              <Link
                href="/switching-from-crayon"
                className="text-sm font-semibold text-gray-900 hover:text-brand-600"
              >
                See migration guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Crayon
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Crayon wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Crayon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.kompwatch} highlight />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.crayon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of May 2026. Crayon pricing
            requires a sales call; estimates from vendr.com and review sites.
          </p>
        </div>
      </section>

      {/* The noise problem — side-by-side visual */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              The noise problem
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Crayon&rsquo;s #1 customer complaint in 2026, in their own words:
            </p>
            <figure className="mx-auto mt-6 max-w-2xl rounded-xl border-l-4 border-gray-300 bg-gray-50 px-6 py-4 text-left">
              <blockquote className="text-sm italic leading-relaxed text-gray-700">
                &ldquo;Data feeds can be noisy, surfacing irrelevant social media posts
                alongside meaningful product changes — curation is required.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs text-gray-500">
                — Recurring theme in{" "}
                <a
                  href="https://www.g2.com/products/crayon-crayon/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Crayon G2 reviews (2026)
                </a>
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Crayon raw feed — noisy */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" aria-hidden="true" />
                  <p className="text-sm font-semibold text-gray-700">Crayon raw feed</p>
                </div>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                  23 items today
                </span>
              </div>
              <ul className="max-h-80 divide-y divide-gray-100 overflow-hidden text-xs">
                {[
                  { tag: "Tweet", text: "Competitor CEO liked a tweet about coffee", muted: true },
                  { tag: "LinkedIn", text: "New employee posted #FirstDayAtWork selfie", muted: true },
                  { tag: "Pricing", text: "Competitor X raised Pro plan from $49 → $59/mo", muted: false },
                  { tag: "Tweet", text: "Marketing intern retweeted a meme", muted: true },
                  { tag: "Blog", text: "Published recipe for office snacks (off-topic)", muted: true },
                  { tag: "Job", text: "Posted: Senior Product Manager — Enterprise", muted: false },
                  { tag: "LinkedIn", text: "VP Sales celebrated 5-year anniversary", muted: true },
                  { tag: "Tweet", text: "CEO replied 'thanks!' to a customer compliment", muted: true },
                  { tag: "Press", text: "Mentioned in 'Top 10 startups to watch' listicle", muted: true },
                  { tag: "Feature", text: "Shipped: SSO + SAML for enterprise tier", muted: false },
                  { tag: "Tweet", text: "Engineer shared a coding hot take", muted: true },
                  { tag: "Blog", text: "Holiday office hours announcement", muted: true },
                  { tag: "LinkedIn", text: "Recruiter posted 'we're hiring' thread", muted: true },
                ].map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 px-5 py-2 ${item.muted ? "text-gray-400" : "text-gray-700"}`}>
                    <span className={`mt-0.5 inline-flex shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${item.muted ? "bg-gray-50 text-gray-400" : "bg-amber-50 text-amber-700"}`}>
                      {item.tag}
                    </span>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 px-5 py-3 text-xs text-gray-500">
                + 10 more items &mdash; you triage by hand
              </div>
            </div>

            {/* KompWatch AI digest — clean */}
            <div className="rounded-xl border-2 border-brand-600 bg-white shadow-md">
              <div className="flex items-center justify-between border-b border-brand-100 bg-brand-50/50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                  <p className="text-sm font-semibold text-brand-700">KompWatch AI digest</p>
                </div>
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                  3 changes that matter
                </span>
              </div>
              <ul className="divide-y divide-gray-100 text-sm">
                {[
                  {
                    severity: "Pricing",
                    title: "Competitor X raised Pro tier $49 → $59/mo",
                    detail: "20% increase. Annual billing discount unchanged. May affect your win rate on price-sensitive deals.",
                  },
                  {
                    severity: "Feature",
                    title: "Shipped enterprise SSO + SAML",
                    detail: "Closes a frequent objection. Worth checking if your enterprise prospects ask about parity.",
                  },
                  {
                    severity: "Hiring",
                    title: "New Senior PM role posted — Enterprise focus",
                    detail: "Signals upmarket motion. Two enterprise hires in 60 days.",
                  },
                ].map((item, i) => (
                  <li key={i} className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700">
                        {item.severity}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-brand-100 bg-brand-50/30 px-5 py-3 text-xs text-brand-700">
                Tweets, LinkedIn fluff, and press mentions filtered out automatically.
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              Same competitors. Same week. <span className="font-semibold text-gray-900">One feed needs a CI analyst — the other lands in your inbox.</span>
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/sample-digest"
                event="Noise Callout CTA Click"
                eventProps={{ competitor: "Crayon" }}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                See a real digest
                <span aria-hidden="true">&rarr;</span>
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>


      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Crayon" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro for 10.
          </p>
        </div>
      </section>
      {/* When to pick which */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            When to pick which
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">
                Pick KompWatch if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· A founder, PM, or marketer who needs intel <em>this week</em>, not next quarter</li>
                <li>· A 1–50 person team without budget for $5K–$80K+ enterprise contracts</li>
                <li>· Tracking under 50 competitors and want pricing/feature/blog/job alerts</li>
                <li>· Allergic to sales calls and want to swipe a card and start in 2 minutes</li>
                <li>· Comfortable with email digests + Slack alerts (no battlecard portal needed)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Crayon if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· An enterprise with a dedicated competitive intelligence team (5+ analysts)</li>
                <li>· Buying a battlecard CMS for sales reps to consume in real time</li>
                <li>· Needing human-curated intel + analyst services (Crayon offers managed services)</li>
                <li>· Already paying for Salesforce/Highspot integrations and want native plug-ins</li>
                <li>· Tracking 100+ competitors with custom workflows and SOC 2 Type II requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="Crayon"
        faqs={[
          {
            question: "Crayon priced me out at renewal — what are my options?",
            answer: "Crayon's median customer pays $28,750/yr (vendr.com data) and renewal-cycle increases of 10–25% are common — especially after the SoftwareOne acquisition closed in April 2026 with a public CHF 80–100M cost-synergy target. KompWatch Pro is $49/mo ($588/yr) with the same core monitoring (pricing, features, blogs, jobs, AI digests, Slack alerts) and no annual contract. Most teams sign up free, run both tools side-by-side for one digest cycle, then don't renew.",
          },
          {
            question: "Crayon was acquired by SoftwareOne — should I be worried?",
            answer: "It depends on your contract length and segment. Niche tools inside large IT-services consolidators historically see slower roadmaps, enterprise-only pivots, and packaging changes that nudge SMB customers upmarket. SoftwareOne publicly committed to CHF 80–100M in cost savings within 18 months — that comes from headcount, support, product investment, or pricing. If you're mid-contract, read the change-of-control clause. If your renewal is coming up, this is a natural time to evaluate independent alternatives.",
          },
          {
            question: "How much does Crayon cost?",
            answer: "Crayon pricing is quote-based and requires a sales call. Public data from vendr.com puts the median annual contract at $28,750/yr in 2025; G2 reviews and broker data show the range running from ~$5,000/yr (entry) to $80,000+/yr (full team plans). KompWatch starts at $49/mo ($588/yr) with self-serve signup — roughly 49× lower than the Crayon median.",
          },
          {
            question: "What is the difference between KompWatch and Crayon?",
            answer: "Both track competitor websites for pricing, feature, and content changes. Crayon is an enterprise platform with battlecards, managed services, and Salesforce integrations — but requires a sales call and multi-week onboarding. KompWatch is a self-serve tool with AI-generated digests, instant signup, and a free plan. The core monitoring is comparable; the difference is price, speed-to-value, and target market.",
          },
          {
            question: "Can I switch from Crayon to KompWatch?",
            answer: "Yes. Sign up for KompWatch's free plan, add your competitors, and run both tools side-by-side for a month to compare digests. KompWatch requires no contract, so you can cancel Crayon when you're satisfied with the switch.",
          },
          {
            question: "Does KompWatch have a free plan?",
            answer: "Yes. KompWatch's free plan lets you track up to 2 competitors with weekly AI digests — no credit card required. Upgrade to Pro ($49/mo) for 10 competitors and daily digests, or Team ($149/mo) for 50 competitors and real-time alerts.",
          },
          {
            question: "Is KompWatch good enough for enterprise teams?",
            answer: "KompWatch's Team plan ($149/mo) supports up to 50 competitors with hourly snapshots and real-time Slack/webhook alerts. For teams that need battlecards, managed analyst services, or deep Salesforce integrations, Crayon may be a better fit. For teams that need fast, automated competitor monitoring without the enterprise overhead, KompWatch delivers.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try KompWatch free
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need more.
            No sales call. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Crayon" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on Crayon?{" "}
            <Link href="/switching-from-crayon" className="underline hover:text-gray-700">
              See our switching guide
            </Link>{" "}
            or{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              run both for a month
            </Link>{" "}
            to compare digests side-by-side.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
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
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-caelian" className="text-sm text-gray-500 hover:text-gray-700">
              vs Caelian
            </Link>
            <Link href="/vs-seeto" className="text-sm text-gray-500 hover:text-gray-700">
              vs Seeto
            </Link>
            <Link href="/vs-changeflow" className="text-sm text-gray-500 hover:text-gray-700">
              vs Changeflow
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
