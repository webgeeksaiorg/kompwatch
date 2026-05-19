import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "PeerPanda Alternative — KompWatch vs PeerPanda (Honest Comparison)",
  description:
    "Looking for a PeerPanda alternative? KompWatch tracks competitor pricing, features, blogs, and job listings with AI digests — $49/mo for 10 competitors vs PeerPanda's $79/mo. Free plan, no credit card.",
  keywords: [
    "PeerPanda alternative",
    "PeerPanda vs KompWatch",
    "PeerPanda competitor",
    "PeerPanda pricing",
    "competitive intelligence software",
    "competitor monitoring tool",
    "PeerPanda alternatives 2026",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-peerpanda`,
  },
  openGraph: {
    title: "KompWatch vs PeerPanda — 38% Cheaper at the Tier That Matters",
    description:
      "Honest side-by-side: KompWatch Pro ($49/mo, 10 competitors) vs PeerPanda Professional ($79/mo, 15 competitors). See feature, pricing, and onboarding comparison.",
    url: `${siteUrl}/vs-peerpanda`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs PeerPanda — Honest Comparison",
    description:
      "PeerPanda Professional is $79/mo for 15 competitors. KompWatch Pro is $49/mo for 10 — 38% cheaper for teams tracking ≤10 rivals. See the full comparison.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  peerpanda: CellValue;
}[] = [
  { feature: "Free plan", kompwatch: "2 competitors, weekly digest", peerpanda: "Limited (varies)" },
  { feature: "Entry paid tier", kompwatch: "$29 not offered — Pro is $49/mo", peerpanda: "$29/mo (Starter)" },
  { feature: "Mid-tier price", kompwatch: "$49/mo (Pro, 10 competitors)", peerpanda: "$79/mo (Professional, 15 competitors)" },
  { feature: "Cost per competitor (mid-tier)", kompwatch: "$4.90/mo", peerpanda: "$5.27/mo" },
  { feature: "Annual cost (10 competitors)", kompwatch: "$588/yr", peerpanda: "$948/yr" },
  { feature: "Self-serve signup", kompwatch: true, peerpanda: true },
  { feature: "No sales call required", kompwatch: true, peerpanda: true },
  { feature: "Pricing page tracking", kompwatch: true, peerpanda: true },
  { feature: "Feature & product page tracking", kompwatch: true, peerpanda: true },
  { feature: "Blog & content monitoring", kompwatch: true, peerpanda: true },
  { feature: "Job listing tracking", kompwatch: true, peerpanda: "Limited" },
  { feature: "AI change summaries", kompwatch: true, peerpanda: true },
  { feature: "Email digests", kompwatch: true, peerpanda: true },
  { feature: "Slack / webhook alerts", kompwatch: true, peerpanda: true },
  { feature: "Headless browser (renders SPAs)", kompwatch: true, peerpanda: "Partial" },
  { feature: "Custom CSS selectors per page", kompwatch: true, peerpanda: false },
  { feature: "Cancel anytime", kompwatch: true, peerpanda: true },
  { feature: "Time-to-first-insight", kompwatch: "Under 2 minutes", peerpanda: "5–10 minutes" },
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

export default function VsPeerPandaPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs PeerPanda", path: "/vs-peerpanda" }]} />
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
          PeerPanda alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs PeerPanda{" "}
          <span className="text-brand-600">— 38% cheaper at the tier that matters</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          PeerPanda is a solid self-serve competitor monitoring tool — public pricing, fast signup,
          no sales call. KompWatch is the same shape, but priced lower for teams that track 10 or
          fewer competitors. KompWatch Pro is{" "}
          <strong className="text-gray-900">$49/mo</strong> for 10 rivals; PeerPanda Professional is{" "}
          <strong className="text-gray-900">$79/mo</strong> for 15.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "PeerPanda" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. No sales call. Free plan forever.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Same shape, different price
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data from peerpanda.com, Capterra, and GetApp listings (May 2026).
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
              <div className="mt-1 text-sm text-gray-500">$588 / year &middot; 10 competitors</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✓ 10 competitors tracked</li>
                <li>✓ Daily AI digests</li>
                <li>✓ Custom CSS selectors per page</li>
                <li>✓ Headless browser (renders SPAs)</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                PeerPanda Professional
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                $79<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">$948 / year &middot; 15 competitors</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>· 15 competitors tracked</li>
                <li>· Daily change reports</li>
                <li>· Self-serve signup</li>
                <li>· Cancel anytime</li>
                <li>· Higher cost-per-competitor at this tier</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            If you track 10 or fewer competitors,{" "}
            <strong className="text-gray-900">KompWatch is $360/yr cheaper</strong> than PeerPanda&rsquo;s
            equivalent paid tier — same self-serve experience, same core feature set.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs PeerPanda
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where PeerPanda wins, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">PeerPanda</th>
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
                      <ComparisonCell value={row.peerpanda} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of May 2026. PeerPanda pricing
            from peerpanda.com pricing page and Capterra listing.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "PeerPanda" }}
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
                <li>· Tracking 10 or fewer competitors and want the lowest cost-per-rival at that tier</li>
                <li>· Monitoring SPAs / React-rendered pricing pages that need a real headless browser</li>
                <li>· Pinning specific page sections with custom CSS selectors (pricing tables, feature grids)</li>
                <li>· A founder, PM, or marketer who prefers AI digests over a battlecard portal</li>
                <li>· On the free plan — KompWatch&rsquo;s free tier covers 2 competitors with weekly digests</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick PeerPanda if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>· Tracking 11–15 competitors and the extra 5 slots justify the price jump</li>
                <li>· Already familiar with PeerPanda&rsquo;s UI from a Capterra/GetApp trial</li>
                <li>· On their $29/mo Starter plan and not yet hitting limits</li>
                <li>· Looking for a tool with broader directory presence (more reviews, more comparisons)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD schema */}
      <ComparisonFAQ
        competitor="PeerPanda"
        faqs={[
          {
            question: "How much does PeerPanda cost?",
            answer: "PeerPanda offers four tiers: a limited Free plan, Starter at $29/mo, Professional at $79/mo (15 competitors), and Enterprise at $199/mo. Pricing is publicly listed on peerpanda.com (May 2026). KompWatch Pro is $49/mo for 10 competitors — 38% cheaper than PeerPanda Professional for teams that track 10 or fewer rivals.",
          },
          {
            question: "What is the difference between KompWatch and PeerPanda?",
            answer: "Both are self-serve competitor monitoring tools with AI change summaries and no sales call. PeerPanda's mid tier targets 15 competitors at $79/mo; KompWatch Pro targets 10 at $49/mo. KompWatch adds a true headless browser (renders SPAs and React-rendered pricing pages) and custom CSS selectors per page so you can pin specific sections like pricing tables or feature grids.",
          },
          {
            question: "Does PeerPanda have a free plan?",
            answer: "PeerPanda offers a limited Free plan with restricted features and competitor count. KompWatch's free plan includes 2 competitors with weekly digests — no credit card required, no time limit.",
          },
          {
            question: "Can I switch from PeerPanda to KompWatch?",
            answer: "Yes. Sign up for KompWatch's free plan and import the competitor URLs you're already monitoring on PeerPanda. KompWatch has no contract or commitment, so you can run both tools in parallel for a month and compare digest quality before canceling PeerPanda.",
          },
          {
            question: "Is KompWatch cheaper than PeerPanda?",
            answer: "At the tier most teams use, yes. KompWatch Pro ($49/mo, 10 competitors) is 38% cheaper than PeerPanda Professional ($79/mo, 15 competitors) when measured per month, and saves $360/yr if you don't need the extra 5 competitor slots. PeerPanda's $29/mo Starter is cheaper than any KompWatch paid tier, but with tighter limits.",
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
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need 10.
            No sales call. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "PeerPanda" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Already on PeerPanda?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run both for a month
            </Link>{" "}
            and compare digests side-by-side.
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-changeflow" className="text-sm text-gray-500 hover:text-gray-700">
              vs Changeflow
            </Link>
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
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
