import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "KompWatch Alternatives & Comparisons — How We Stack Up",
  description:
    "See how KompWatch compares to Crayon, Klue, Kompyte, and 9 other competitive intelligence tools. Honest side-by-side breakdowns — pricing, features, and setup time.",
  keywords: [
    "competitive intelligence tools comparison",
    "Crayon alternative",
    "Klue alternative",
    "Kompyte alternative",
    "competitor monitoring tools",
    "competitive intelligence software",
    "KompWatch alternatives",
    "KompWatch vs",
  ],
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
  openGraph: {
    title: "KompWatch Alternatives & Comparisons",
    description:
      "Honest side-by-side comparisons of KompWatch vs 12 competitive intelligence tools. See pricing, features, and setup differences.",
    url: `${siteUrl}/compare`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch Alternatives & Comparisons",
    description:
      "How does KompWatch stack up against Crayon, Klue, Kompyte, and more? See 12 honest side-by-side comparisons.",
  },
};

const competitors = [
  {
    slug: "crayon",
    name: "Crayon",
    tagline: "Enterprise CI platform",
    price: "$5K\u2013$80K+/yr",
    differentiator: "KompWatch delivers similar website monitoring at a fraction of the cost \u2014 no sales call required.",
  },
  {
    slug: "klue",
    name: "Klue",
    tagline: "Battlecard & CI platform",
    price: "$12K\u2013$100K+/yr",
    differentiator: "Klue excels at battlecards for sales teams. KompWatch focuses on real-time website change detection for product & marketing teams.",
  },
  {
    slug: "kompyte",
    name: "Kompyte",
    tagline: "Semrush-owned CI tool",
    price: "From $10K/yr",
    differentiator: "Kompyte is part of the Semrush suite. KompWatch is standalone, self-serve, and ships AI digests from day one.",
  },
  {
    slug: "google-alerts",
    name: "Google Alerts",
    tagline: "Free mention monitoring",
    price: "Free",
    differentiator: "Google Alerts catches press mentions. KompWatch catches the actual website changes \u2014 pricing edits, feature launches, hiring signals.",
  },
  {
    slug: "visualping",
    name: "Visualping",
    tagline: "Visual website monitoring",
    price: "From $14/mo",
    differentiator: "Visualping shows pixel diffs. KompWatch uses AI to explain what changed and why it matters to your business.",
  },
  {
    slug: "owler",
    name: "Owler",
    tagline: "Company news & data",
    price: "Free / $35/mo",
    differentiator: "Owler aggregates company news and funding. KompWatch monitors the competitor's own website for first-party changes.",
  },
  {
    slug: "rivalsense",
    name: "RivalSense",
    tagline: "AI competitor monitoring",
    price: "From $49/mo",
    differentiator: "Similar price point. KompWatch differentiates with headless browser scraping that handles React/SPA sites and deeper AI digests.",
  },
  {
    slug: "battlecard",
    name: "Battlecard",
    tagline: "Sales battlecard tool",
    price: "Contact sales",
    differentiator: "Battlecard is sales-enablement focused. KompWatch is a monitoring layer that feeds upstream intelligence to any workflow.",
  },
  {
    slug: "seeto",
    name: "Seeto",
    tagline: "CI for SMBs",
    price: "Varies",
    differentiator: "Seeto targets advisory-driven CI. KompWatch is fully automated \u2014 set URLs, get AI digests, no consulting required.",
  },
  {
    slug: "caelian",
    name: "Caelian",
    tagline: "Market intelligence",
    price: "Contact sales",
    differentiator: "Caelian covers broad market intelligence. KompWatch narrows in on competitor website changes with sub-hour detection.",
  },
  {
    slug: "already-dev",
    name: "Already.dev",
    tagline: "Feature tracking",
    price: "Varies",
    differentiator: "Already.dev tracks feature announcements. KompWatch tracks the full website \u2014 pricing, features, blog, job listings \u2014 in one tool.",
  },
  {
    slug: "unkover",
    name: "Unkover",
    tagline: "Competitor email monitoring",
    price: "Paid (varies)",
    differentiator: "Unkover monitors competitor emails. KompWatch monitors competitor websites. Different signals \u2014 use both for full coverage.",
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareApplicationSchema />
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            KompWatch
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <TrackedCTA
              href="/login"
              event="Compare Hub Nav CTA Click"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free
            </TrackedCTA>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            KompWatch vs. the competition
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Honest, side-by-side comparisons of KompWatch against 12 competitive intelligence tools.
            See exactly where we win, where they win, and which tool fits your team.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Hub Hero CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <p className="mt-3 text-sm text-gray-500">
              2 competitors free forever. No sales call.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => (
              <Link
                key={c.slug}
                href={`/vs-${c.slug}`}
                className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">
                      KompWatch vs {c.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{c.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {c.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{c.differentiator}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  See full comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop summary */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Why teams choose KompWatch
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-600">$49/mo</div>
              <p className="mt-2 text-sm text-gray-600">
                Pro plan with 10 competitors, 6-hour snapshots, and daily AI digests. No sales call.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">&lt; 2 min</div>
              <p className="mt-2 text-sm text-gray-600">
                From signup to first competitor insight. Paste a URL, get an AI-generated change report.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">Free tier</div>
              <p className="mt-2 text-sm text-gray-600">
                Monitor 2 competitors with weekly digests. No credit card required. Upgrade when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            See for yourself
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with the free plan &mdash; add up to 2 competitors, no credit card. Upgrade to Pro
            for 10 competitors and daily AI digests at $49/mo.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Compare Hub Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free &mdash; no credit card required
            </TrackedCTA>
          </div>
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
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
