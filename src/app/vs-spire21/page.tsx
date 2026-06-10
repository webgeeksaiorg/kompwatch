import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Spire21 Alternative — KompWatch vs Spire21 (Honest Comparison)",
  description:
    "Looking for a Spire21 alternative? KompWatch is live today with AI-generated digests, Playwright headless rendering, and CSS selector targeting — no waitlist required. Starts free.",
  keywords: [
    "Spire21 alternative",
    "Spire21 vs KompWatch",
    "Spire21 competitor",
    "Spire21 waitlist alternative",
    "competitor monitoring tool",
    "competitive intelligence software",
    "AI competitor monitoring startup",
  ],
  alternates: {
    canonical: `${siteUrl}/vs-spire21`,
  },
  openGraph: {
    title: "KompWatch vs Spire21 — Live Today, No Waitlist",
    description:
      "Honest side-by-side: KompWatch (free tier, $49/mo Pro, AI digests) vs Spire21 (early access, waitlist). See feature, pricing, and availability comparison.",
    url: `${siteUrl}/vs-spire21`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch vs Spire21 — Honest Comparison",
    description:
      "Spire21 is in early access behind a waitlist. KompWatch is live with a free tier, Playwright rendering, and Claude-powered AI digests. Full comparison inside.",
  },
};

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  spire21: CellValue;
}[] = [
  { feature: "Starting price", kompwatch: "Free / $49/mo", spire21: "TBD (early access)" },
  { feature: "Available today (no waitlist)", kompwatch: true, spire21: false },
  { feature: "Free plan competitors", kompwatch: "2 competitors", spire21: "TBD" },
  { feature: "Self-serve signup", kompwatch: true, spire21: "Waitlist" },
  { feature: "AI-generated change summaries", kompwatch: "Claude-powered analysis", spire21: "Unknown" },
  { feature: "Severity classification (Low/Med/High/Critical)", kompwatch: true, spire21: false },
  { feature: "Headless browser (renders React/SPAs)", kompwatch: "Full Playwright", spire21: "Unknown" },
  { feature: "CSS selector targeting (per-section)", kompwatch: true, spire21: false },
  { feature: "Content zone classification (pricing/features/messaging)", kompwatch: true, spire21: false },
  { feature: "Pricing page tracking", kompwatch: true, spire21: "Unknown" },
  { feature: "Feature & product page tracking", kompwatch: true, spire21: "Unknown" },
  { feature: "Blog & content monitoring", kompwatch: true, spire21: "Unknown" },
  { feature: "Job listing tracking", kompwatch: true, spire21: false },
  { feature: "Email digests", kompwatch: "Daily (Pro) / Weekly (Free)", spire21: "TBD" },
  { feature: "Slack / webhook alerts", kompwatch: true, spire21: "Unknown" },
  { feature: "Battlecard export", kompwatch: "One-click HTML", spire21: false },
  { feature: "Cancel anytime", kompwatch: true, spire21: "TBD" },
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

export default function VsSpire21Page() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "KompWatch vs Spire21", path: "/vs-spire21" }]} />
      <SoftwareApplicationSchema />
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
            <Link href="/pricing?from=spire21" className="text-sm text-gray-600 hover:text-gray-900">
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
          Spire21 alternative
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          KompWatch vs Spire21{" "}
          <span className="text-brand-600">— skip the waitlist, start monitoring today</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Spire21 is building for early-stage startups — but it&rsquo;s behind an early-access
          waitlist with TBD pricing. KompWatch is{" "}
          <strong className="text-gray-900">live today</strong> with a free tier,{" "}
          <strong className="text-gray-900">Claude-powered AI digests</strong>, headless Playwright
          rendering, and CSS selector targeting. Start monitoring in under 2 minutes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Comparison Hero CTA Click"
            eventProps={{ competitor: "Spire21" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no waitlist
          </TrackedCTA>
          <Link
            href="#comparison"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See full comparison &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          No credit card. Free plan forever. Cancel anytime.
        </p>
      </section>

      {/* Pricing snapshot */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              KompWatch has public pricing — Spire21 does not (yet)
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Public pricing data as of June 2026. Spire21 is in early access.
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
                <li>&#10003; 10 competitors tracked</li>
                <li>&#10003; Daily AI digests (Claude-written)</li>
                <li>&#10003; Severity classification + content zones</li>
                <li>&#10003; CSS selector targeting + Playwright</li>
                <li>&#10003; Job listing tracking</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Spire21 (early access)
              </div>
              <div className="mt-2 text-4xl font-bold text-gray-900">
                TBD
              </div>
              <div className="mt-1 text-sm text-gray-500">Waitlist &middot; pricing not published</div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>&middot; Startup-focused onboarding</li>
                <li>&middot; Feature set still evolving</li>
                <li>&middot; No public pricing</li>
                <li>&middot; No CSS selector targeting</li>
                <li>&middot; No job listing tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Feature-by-feature: KompWatch vs Spire21
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Honest comparison. Where details are unknown, we say so.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                  <th className="px-4 py-3 font-medium text-gray-500">Spire21</th>
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
                      <ComparisonCell value={row.spire21} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Comparison based on publicly available information as of June 2026. Spire21 is in
            early access — features and pricing may change. &ldquo;Unknown&rdquo; means the feature
            has not been publicly confirmed or denied.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <TrackedCTA
            href="/login"
            event="Comparison Mid CTA Click"
            eventProps={{ competitor: "Spire21" }}
            className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no waitlist required
          </TrackedCTA>
          <p className="mt-3 text-sm text-gray-600">
            2 competitors free forever. Upgrade to Pro ($49/mo) for 10.
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
                <li>&middot; Ready to start monitoring competitors <em>today</em>, not after a waitlist</li>
                <li>&middot; Wanting AI-written summaries that explain <em>what</em> changed and <em>why it matters</em></li>
                <li>&middot; Tracking React/SPA pricing pages that lightweight scrapers miss</li>
                <li>&middot; Looking for transparent, public pricing before committing</li>
                <li>&middot; Tracking competitor hiring signals alongside product changes</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Pick Spire21 if you&rsquo;re&hellip;
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>&middot; An early-stage startup wanting tooling built specifically for your stage</li>
                <li>&middot; Comfortable waiting for early-access onboarding</li>
                <li>&middot; Wanting to shape a new product&rsquo;s roadmap as an early adopter</li>
                <li>&middot; Not in a rush — your CI needs are more strategic than immediate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with JSON-LD FAQPage schema */}
      <ComparisonFAQ
        competitor="Spire21"
        faqs={[
          {
            question: "What is the difference between KompWatch and Spire21?",
            answer:
              "KompWatch is a live competitor monitoring tool with a free tier, Playwright headless rendering, Claude-powered AI digests, CSS selector targeting, and job listing tracking. Spire21 is a new entrant (early access, 2026) targeting early-stage startups with a dedicated onboarding flow. Spire21 is behind a waitlist with TBD pricing, while KompWatch is available today with transparent pricing starting at $0/mo.",
          },
          {
            question: "How much does Spire21 cost vs KompWatch?",
            answer:
              "Spire21 has not published pricing — it is in early access. KompWatch has transparent public pricing: Free (2 competitors, weekly AI digest, no credit card), Pro at $49/mo (10 competitors, daily digests), and Team at $149/mo (50 competitors, hourly snapshots). You can start today without waiting for Spire21's pricing to be announced.",
          },
          {
            question: "Can I use KompWatch while waiting for Spire21 access?",
            answer:
              "Yes — and we recommend it. KompWatch's free tier (2 competitors, no credit card) lets you start monitoring immediately while you wait for Spire21 access. Add the same competitor URLs you plan to track, and compare output quality when Spire21 becomes available.",
          },
          {
            question: "Does KompWatch work for startups like Spire21 targets?",
            answer:
              "Yes. KompWatch's free tier is designed for small teams. Add 2 competitors, set CSS selectors, and get weekly AI digests — no credit card, no sales call. Upgrade to Pro ($49/mo) when you need more competitors or daily digests. The setup takes under 2 minutes regardless of company stage.",
          },
          {
            question: "Does KompWatch track competitor job listings?",
            answer:
              "Yes. KompWatch monitors competitor job listing pages to surface hiring patterns as strategic signals. Spire21 does not offer job listing tracking based on publicly available information.",
          },
          {
            question: "Can I switch from Spire21 to KompWatch later?",
            answer:
              "Yes. KompWatch does not import data from other tools, but setup takes about 5 minutes: add your competitor URLs, set CSS selectors for the sections you care about, and your first snapshot fires immediately. There is no lock-in with either tool.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Skip the waitlist. Start today.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Add up to 2 competitors on the free plan. Upgrade to Pro ($49/mo) when you need more.
            AI-written digests, severity classification, headless rendering. Cancel anytime.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Comparison Bottom CTA Click"
              eventProps={{ competitor: "Spire21" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no waitlist required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            On the Spire21 waitlist?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Run KompWatch while you wait
            </Link>{" "}
            and compare when Spire21 goes live.
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
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-headsup" className="text-sm text-gray-500 hover:text-gray-700">
              vs HeadsUp
            </Link>
            <Link href="/vs-visualping" className="text-sm text-gray-500 hover:text-gray-700">
              vs Visualping
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
