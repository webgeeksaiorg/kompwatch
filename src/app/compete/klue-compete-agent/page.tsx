import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Klue Compete Agent Alternative — KompWatch ($49/mo vs $15K+/yr)",
  description:
    "Evaluating Klue's Compete Agent? KompWatch delivers competitor change detection and AI-generated digests starting at $49/mo — no enterprise contract, no sales call, no CI analyst required. See the side-by-side.",
  keywords: [
    "Klue Compete Agent alternative",
    "Klue Compete Agent pricing",
    "Klue Compete Agent vs KompWatch",
    "Klue alternative for SMB",
    "affordable Klue alternative",
    "AI competitive intelligence agent",
    "agentic competitive intelligence",
    "Klue Compete Agent review",
    "competitive intelligence without sales call",
    "self-serve Klue alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/compete/klue-compete-agent`,
  },
  openGraph: {
    title:
      "Klue Compete Agent Alternative — KompWatch ($49/mo vs $15K+/yr)",
    description:
      "Klue's Compete Agent ships AI deal intel to sellers — at enterprise pricing ($15K–$40K/yr). KompWatch delivers AI competitor digests for $49/mo, self-serve, no sales call.",
    url: `${siteUrl}/compete/klue-compete-agent`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klue Compete Agent Alternative — KompWatch at 1/30th the price",
    description:
      "Klue Compete Agent: enterprise contract, $15K–$40K/yr, sales call required. KompWatch: $49/mo, self-serve, free tier — same AI-on-CI promise.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  klue: CellValue;
  note?: string;
}[] = [
  { feature: "Entry pricing", kompwatch: "Free / $49/mo Pro", klue: "$15K–$40K/yr (enterprise)" },
  { feature: "Self-serve signup", kompwatch: true, klue: false, note: "Demo + sales call required" },
  { feature: "Free tier", kompwatch: "2 competitors, weekly AI digest", klue: false },
  { feature: "Month-to-month billing", kompwatch: true, klue: false, note: "Annual contracts" },
  { feature: "AI change summaries", kompwatch: "Claude-powered digests", klue: "Compete Agent (March 2026)" },
  { feature: "AI action recommendations", kompwatch: "On the roadmap (Q3 2026)", klue: "Compete Agent" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, klue: true },
  { feature: "Time-to-first-value", kompwatch: "5 minutes (self-serve)", klue: "2–6 weeks (sales + onboarding)" },
  { feature: "Headless browser rendering (React/SPA)", kompwatch: "Full Playwright + Chromium", klue: "Enterprise-grade scraping" },
  { feature: "CSS selector targeting", kompwatch: true, klue: true },
  { feature: "Content zone classification", kompwatch: "Pricing / Features / Messaging / Jobs", klue: true },
  { feature: "Salesforce / CRM push", kompwatch: false, klue: true, note: "Klue strength" },
  { feature: "Battlecards in seller workflows", kompwatch: "PDF / HTML export", klue: "In-CRM + Slack" },
  { feature: "Dedicated CI analyst required", kompwatch: false, klue: "Most customers staff a CI role" },
  { feature: "Cancel anytime", kompwatch: true, klue: false },
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

const differentiators = [
  {
    title: "1/30th the price for the AI-on-CI core",
    description:
      "Klue Compete Agent is bundled into Klue's enterprise platform at $15K–$40K/yr. KompWatch Pro delivers the AI digest core — change detection + Claude-generated summaries + severity classification — for $49/mo. That's roughly 1/30th the cost for the most-used capability.",
  },
  {
    title: "Self-serve in 5 minutes, no sales call",
    description:
      "Klue's Compete Agent rollout includes a demo, procurement cycle, and 2–6 weeks of onboarding. KompWatch is sign-up, paste competitor URLs, set CSS selectors, done — your first AI digest lands the next day. No SDR, no security questionnaire, no CI analyst hire.",
  },
  {
    title: "Designed for teams without a dedicated CI analyst",
    description:
      "Klue and Crayon both assume a full-time Competitive Intelligence Manager runs the platform. KompWatch is built for the PMM, founder, or product lead who tracks competitors as one of ten responsibilities. Daily digests, severity filters, and battlecard export — no analyst required.",
  },
];

export default function ClueCompeteAgentAlternativePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Compete", path: "/compete" },
          { name: "Klue Compete Agent Alternative", path: "/compete/klue-compete-agent" },
        ]}
      />
      <SoftwareApplicationSchema />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900">
              Comparisons
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
          Klue Compete Agent alternative &middot; 2026
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Klue&rsquo;s Compete Agent is impressive.{" "}
          <span className="text-brand-600">It&rsquo;s also $15K&ndash;$40K/yr.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Klue launched <strong className="text-gray-900">Compete Agent</strong> in March 2026 &mdash;
          an AI agent that surfaces deal-relevant competitor intel inside seller workflows. It&rsquo;s
          a great product, behind an enterprise contract, a sales cycle, and a dedicated CI hire.
          <br />
          <br />
          <strong className="text-gray-900">KompWatch Pro is $49/mo.</strong> Self-serve. Free tier.
          Claude-powered AI digests on the same change-detection core &mdash; without the procurement
          process.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Compete Klue Agent Hero CTA"
            eventProps={{ competitor: "Klue Compete Agent", page: "compete-klue-compete-agent" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See the full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          5-minute setup &middot; No sales call &middot; Cancel anytime
        </p>
      </section>

      {/* Price anchor callout */}
      <section className="border-y border-brand-100 bg-brand-50 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-700">
            The math
          </p>
          <p className="mt-3 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
            Klue Compete Agent: <span className="line-through text-gray-400">$15,000&ndash;$40,000/yr</span>
            <br className="sm:hidden" />
            <span className="sm:ml-3">KompWatch Pro: <span className="text-brand-600">$588/yr ($49/mo)</span></span>
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Same AI-on-CI promise. ~1/30th the cost. Free plan to evaluate before you pay.
          </p>
        </div>
      </section>

      {/* Key differentiators */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why teams evaluating Klue Compete Agent end up on KompWatch
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Klue is built for the enterprise CI team. KompWatch is built for everyone else.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Pricing: enterprise contract vs $49/mo
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing benchmarks as of June 2026. Klue does not publish list prices;
              ranges sourced from G2, Vendr, and procurement discussions.
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
              <div className="mt-1 text-sm text-gray-500">$588/yr &middot; cancel anytime</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&#10003; Free tier (2 competitors, weekly digest)</li>
                <li>&#10003; 10 competitors on Pro</li>
                <li>&#10003; Daily Claude-powered AI digests</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; Self-serve signup &mdash; no demo, no sales call</li>
                <li>&#10003; CSS selector targeting per competitor</li>
                <li>&#10003; 5-minute setup, first digest within 24h</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Klue + Compete Agent
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $15K&ndash;$40K
                <span className="text-lg font-normal text-gray-500">/yr</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Annual contract &middot; Demo + procurement required
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Compete Agent bundled into platform</li>
                <li>&middot; AI deal-intel for sellers (Salesforce/Slack)</li>
                <li>&middot; Enterprise-grade battlecards</li>
                <li>&middot; 2&ndash;6 week onboarding</li>
                <li>&middot; Typically requires dedicated CI analyst</li>
                <li>&middot; No free tier or trial without contact</li>
                <li>&middot; Best for &gt;50-person sales orgs</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            If you have a 30-person sales org and 5 competitors, KompWatch covers ~80% of what
            most teams use Klue Compete Agent for &mdash; at roughly 3% of the annual cost.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              KompWatch vs Klue Compete Agent
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where Klue wins, we say so &mdash; Salesforce push and in-CRM
              battlecards are real strengths.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Klue Compete Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 pr-4 font-medium text-gray-700">
                      {row.feature}
                      {row.note && (
                        <span className="ml-1 text-xs text-gray-400">({row.note})</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.kompwatch} highlight />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.klue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Based on Klue&rsquo;s March 2026 Compete Agent launch announcement and publicly
            available product documentation. We do not have access to private contract terms;
            pricing ranges are sourced from G2, Vendr, and customer-reported procurement data.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Compete Klue Agent Mid CTA"
            eventProps={{ competitor: "Klue Compete Agent", page: "compete-klue-compete-agent" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro ($49/mo) for 10 &mdash; still less than
            one hour of a CI analyst&rsquo;s time per month.
          </p>
        </div>
      </section>

      {/* When to pick which */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            When to pick which
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">
                Pick KompWatch if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You&rsquo;re a PMM, founder, or product lead tracking competitors as one of many responsibilities</li>
                <li>&middot; You don&rsquo;t have (and don&rsquo;t want to hire) a dedicated CI analyst</li>
                <li>&middot; You want AI-generated digests in 24h, not a 6-week onboarding</li>
                <li>&middot; A $15K+/yr line item won&rsquo;t clear procurement</li>
                <li>&middot; You want to evaluate the AI quality before paying (free plan, 2 competitors)</li>
                <li>&middot; Month-to-month billing matters more than a Salesforce integration</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Klue Compete Agent if&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; You have a 50+ person sales org and want CI inside Salesforce / Slack at the deal level</li>
                <li>&middot; You already staff a Competitive Intelligence Manager who can run the platform</li>
                <li>&middot; You&rsquo;re comfortable with annual contracts, demos, and procurement cycles</li>
                <li>&middot; In-CRM battlecards triggered by deal stage are a must-have</li>
                <li>&middot; Enterprise-grade win/loss + sales enablement workflows justify the spend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Klue Compete Agent"
        faqs={[
          {
            question: "What is Klue Compete Agent?",
            answer:
              "Klue Compete Agent is an AI agent Klue launched in March 2026 that surfaces real-time competitor intelligence inside seller workflows — typically pushing battlecards, deal-relevant intel, and competitor change alerts into Salesforce, Slack, and the sales rep's daily tooling. It sits on top of Klue's broader competitive intelligence platform.",
          },
          {
            question: "How much does Klue Compete Agent cost?",
            answer:
              "Klue does not publish list prices. Based on G2 reviews, Vendr benchmarks, and customer-reported procurement data, the broader Klue platform (which includes Compete Agent) typically runs $15,000–$40,000 per year, billed annually, after a sales demo and procurement cycle. There is no public self-serve tier or free trial without contacting sales.",
          },
          {
            question: "Is there an affordable alternative to Klue Compete Agent?",
            answer:
              "Yes. KompWatch delivers the core AI-on-competitor-intel capability — automated change detection, Claude-generated digests, severity classification, content zone tagging (pricing/features/messaging/jobs) — for $49/mo on Pro (10 competitors, daily digests). The free tier covers 2 competitors with weekly AI digests. No sales call, no annual contract, 5-minute setup.",
          },
          {
            question: "Does KompWatch ship competitor intel into Salesforce like Klue Compete Agent?",
            answer:
              "Not today. KompWatch delivers AI digests via email (and is shipping a Slack webhook integration later in 2026). If your CI workflow requires CI inside the deal record in Salesforce at the lead-stage level, Klue is the more complete tool. If you want to know what competitors changed and what to do about it — without an enterprise rollout — KompWatch covers ~80% of the use case at ~3% of the cost.",
          },
          {
            question: "Will KompWatch get AI action recommendations like Klue Compete Agent?",
            answer:
              "Yes. AI action recommendations in digests (a 'What changed + What to do' framing) are on the KompWatch roadmap for Q3 2026, currently tracked as ticket 6674. The goal is to deliver actionable next steps — update battlecard, brief sales, file pricing experiment — alongside every detected change, without requiring a dedicated CI analyst to interpret the digest.",
          },
          {
            question: "Can I evaluate KompWatch before committing — like a free trial of Klue?",
            answer:
              "Yes. KompWatch has a free plan with 2 competitors and weekly AI-generated digests — no credit card, no sales call. You can add the same competitor URLs you would track in Klue, run KompWatch in parallel for 30 days, and compare the digest quality directly. Klue does not currently offer a comparable self-serve trial.",
          },
          {
            question: "Do I need a CI analyst to run KompWatch the way I would need one for Klue?",
            answer:
              "No. Klue and other enterprise CI platforms are designed assuming a Competitive Intelligence Manager runs the platform, maintains battlecards, and curates intel for sales. KompWatch is built for teams without that role — the AI digest does the curation, severity filters reduce noise, and the founder/PMM/product lead can run it in 30 minutes a week.",
          },
          {
            question: "How quickly can I get started with KompWatch vs Klue Compete Agent?",
            answer:
              "KompWatch: sign up, paste 2–10 competitor URLs, set optional CSS selectors for pricing pages, first AI digest lands the next day. Total setup time: ~5 minutes. Klue Compete Agent: demo call, security review, procurement, CRM integration, battlecard import, CI analyst onboarding. Total time to first value: typically 2–6 weeks, depending on the size of your sales org.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Try the AI digest before you sign a contract
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            KompWatch&rsquo;s free plan gives you 2 competitors and weekly Claude-powered
            digests &mdash; no credit card, no sales call. Run it for 30 days alongside your
            Klue evaluation and compare what the AI surfaces.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compete Klue Agent Bottom CTA"
              eventProps={{ competitor: "Klue Compete Agent", page: "compete-klue-compete-agent" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already in a Klue evaluation?{" "}
            <Link href="/vs-klue" className="underline hover:text-gray-700">
              KompWatch vs Klue
            </Link>{" "}
            &middot;{" "}
            <Link href="/migrate/from-klue" className="underline hover:text-gray-700">
              Migrate from Klue
            </Link>{" "}
            &middot;{" "}
            <Link href="/pricing" className="underline hover:text-gray-700">
              Pricing
            </Link>
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/migrate/from-klue" className="text-sm text-gray-500 hover:text-gray-700">
              Migrate from Klue
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
