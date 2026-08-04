import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Switch to KompWatch — Migrate from Crayon, Klue, Kompyte, or Semrush in Under 5 Minutes",
  description:
    "Enterprise CI tools are locking you into $30K/yr contracts, or (in Semrush's case) being folded into Adobe's marketing cloud. KompWatch is the independent, self-serve alternative — $49/mo, 5-minute setup, no sales call. Pick your current tool and start the switch.",
  keywords: [
    "switch competitive intelligence tool",
    "Crayon alternative",
    "Klue alternative",
    "Kompyte alternative",
    "Semrush alternative",
    "switch from Crayon",
    "switch from Klue",
    "switch from Kompyte",
    "switch from Semrush",
    "CI tool migration",
    "competitive intelligence migration",
    "Semrush Adobe acquisition",
    "Kompyte replacement",
    "self-serve competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/switch`,
  },
  openGraph: {
    title: "Switch to KompWatch — Migrate from Crayon, Klue, Kompyte, or Semrush",
    description:
      "$49/mo, 5-minute setup, no sales call. Independent, self-serve competitor monitoring — the alternative to $30K enterprise contracts and Adobe-owned marketing bundles.",
    url: `${siteUrl}/switch`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switch to KompWatch from Crayon, Klue, Kompyte, or Semrush",
    description:
      "$49/mo instead of $30K/yr. Independent CI tool — self-serve, no sales call, no Adobe bundle.",
  },
};

type SwitchTarget = {
  slug: string;
  vendor: string;
  tagline: string;
  currentCost: string;
  savings: string;
  reasonToSwitch: string;
  urgency?: string;
};

const switchTargets: SwitchTarget[] = [
  {
    slug: "semrush",
    vendor: "Semrush (Kompyte)",
    tagline: "Now inside Adobe's marketing cloud",
    currentCost: "$140+/mo (per seat, with Kompyte add-on)",
    savings: "Escape the Adobe bundle before it lands",
    reasonToSwitch:
      "Adobe acquired Semrush for $1.9B in Feb 2026. Kompyte (Semrush's CI product) is now three acquisitions deep. Expect enterprise-bundle pricing, deprecated features, and slower roadmaps. KompWatch is the independent alternative — $49/mo, no bundle.",
    urgency: "H2 2026: Adobe integration begins",
  },
  {
    slug: "crayon",
    vendor: "Crayon",
    tagline: "Enterprise CI platform, $5K–$80K/yr contracts",
    currentCost: "$5,000–$80,000/yr",
    savings: "Save $4,400–$79,400/yr",
    reasonToSwitch:
      "Crayon is a full battlecard + CI platform priced for enterprise sales teams. If you just need reliable competitor website monitoring with AI digests, KompWatch delivers 80% of the outcome at 1% of the cost — no annual contract, no sales call, no seat minimums.",
  },
  {
    slug: "klue",
    vendor: "Klue",
    tagline: "Battlecard-first CI, $12K–$100K/yr",
    currentCost: "$12,000–$100,000/yr",
    savings: "Save $11,400–$99,400/yr",
    reasonToSwitch:
      "Klue is optimized for sales enablement (battlecards, win/loss). KompWatch is optimized for product & marketing teams who need to know *what changed on the competitor's site today.* If battlecards aren't your primary use case, you're paying for shelfware.",
  },
  {
    slug: "kompyte",
    vendor: "Kompyte",
    tagline: "Semrush-owned, headed into Adobe",
    currentCost: "From $10,000/yr",
    savings: "Save $9,400+/yr",
    reasonToSwitch:
      "Kompyte was acquired by Semrush in 2022 and Semrush was acquired by Adobe in Feb 2026. The standalone Kompyte roadmap is effectively frozen. KompWatch is independent, self-serve, and ships AI digests from day one — $49/mo, no enterprise contract.",
    urgency: "Adobe integration in progress",
  },
];

// ItemList JSON-LD for /switch hub — surfaces vendor migration paths in SERP
function ItemListSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KompWatch — Migration Paths from Competitive Intelligence Tools",
    description:
      "Structured migration guides for teams switching from Crayon, Klue, Kompyte, or Semrush to KompWatch.",
    itemListElement: switchTargets.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Switch from ${t.vendor} to KompWatch`,
      url: `${siteUrl}/switch/${t.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function SwitchHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: "Switch", path: "/switch" }]} />
      <ItemListSchema />

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
            <Link href="/compare" className="text-sm text-gray-600 hover:text-gray-900">
              Compare
            </Link>
            <TrackedCTA
              href="/login"
              event="Switch Hub Nav CTA Click"
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
          <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
            Semrush → Adobe · $1.9B · Feb 2026
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Switch to KompWatch
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Your CI tool got acquired, bundled, or priced out of reach. Pick your current vendor and
            see the exact migration path — plus what it costs to move to an{" "}
            <span className="font-semibold text-gray-900">independent, self-serve, $49/mo alternative</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Switch Hub Hero CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/pricing"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            2 competitors free forever · 5-minute setup · No sales call
          </p>
        </div>
      </section>

      {/* Switch cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
            Pick your current tool
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {switchTargets.map((t) => (
              <Link
                key={t.slug}
                href={`/switch/${t.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600">
                      Switch from {t.vendor}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{t.tagline}</p>
                  </div>
                  {t.urgency && (
                    <span className="shrink-0 rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                      {t.urgency}
                    </span>
                  )}
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Their pricing</dt>
                    <dd className="mt-1 font-semibold text-gray-900">{t.currentCost}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Move to KompWatch</dt>
                    <dd className="mt-1 font-semibold text-brand-600">{t.savings}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-gray-600">{t.reasonToSwitch}</p>
                <span className="mt-6 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  See the migration guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why switch — value props */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why teams switch to KompWatch
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-600">$49/mo</div>
              <p className="mt-2 text-sm text-gray-600">
                Pro plan: 10 competitors, 6-hour snapshots, daily AI digests. No annual contract, no seat
                minimums, no sales call.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">Independent</div>
              <p className="mt-2 text-sm text-gray-600">
                Not owned by Adobe, Semrush, or a private-equity roll-up. Roadmap decisions get made by
                people who ship the product.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">5 minutes</div>
              <p className="mt-2 text-sm text-gray-600">
                Paste your competitor URLs, connect email delivery, receive your first AI digest. No
                onboarding call. No implementation fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration mechanics */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            What switching actually looks like
          </h2>
          <ol className="mt-8 space-y-6 text-gray-700">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Export your competitor list</h3>
                <p className="mt-1 text-sm">
                  Copy the list of competitor URLs you monitor in Crayon, Klue, Kompyte, or Semrush.
                  That&apos;s the only thing you need to migrate — KompWatch doesn&apos;t need historical
                  data.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Start free at KompWatch</h3>
                <p className="mt-1 text-sm">
                  Sign up with magic-link email. Paste up to 2 competitor URLs on the free tier or start
                  Pro ($49/mo) for 10 competitors. No credit card required for free.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Run KompWatch alongside your current tool</h3>
                <p className="mt-1 text-sm">
                  For 2–4 weeks, run both. Compare the digests. See which surfaces the changes your team
                  actually cares about. Then cancel the tool that loses.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Cancel and pocket the savings</h3>
                <p className="mt-1 text-sm">
                  Switching from a $30K/yr enterprise contract to a $588/yr Pro subscription is a
                  98% cost cut. That number is your justification when the finance team asks.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to switch?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start on the free tier — 2 competitors, weekly digest, no credit card. Upgrade to Pro when
            you&apos;re ready to fully cut over.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Switch Hub Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/compare"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Compare all tools
            </Link>
          </div>
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              Compare
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
