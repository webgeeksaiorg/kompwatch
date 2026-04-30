import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const siteUrl = "https://kompwatch.com";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Switch from Kompyte to KompWatch",
  description:
    "Step-by-step guide to migrating your competitive intelligence from Kompyte to KompWatch in under 10 minutes.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up (free, 30 seconds)",
      text: "Create your account at kompwatch.com. No credit card, no sales call. Your free plan includes 2 competitors.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add your competitor URLs",
      text: "Paste the same URLs you tracked in Kompyte — pricing pages, feature pages, blogs, careers pages. Takes about 1 minute per competitor.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set CSS selectors for precision",
      text: "Target specific page sections (e.g. .pricing-table, #features) instead of monitoring entire pages. This reduces noise.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Connect Slack (optional)",
      text: "Push AI digests to your #competitive-intel channel. Same workflow your team already uses, just better summaries.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "First insights within 24 hours",
      text: "Snapshots run immediately. Change detection begins after the second snapshot — typically within a few hours on Pro or 24 hours on Free.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Switching from Kompyte to KompWatch — Migration Guide",
  description:
    "Moving from Kompyte? KompWatch is the fastest alternative — self-serve signup, AI digests, and competitor monitoring from $49/mo. Set up in under 10 minutes.",
  keywords: [
    "switching from Kompyte",
    "Kompyte alternative",
    "Kompyte migration",
    "Kompyte replacement",
    "replace Kompyte",
    "Kompyte to KompWatch",
    "Semrush Kompyte alternative",
    "Adobe Kompyte alternative",
    "competitive intelligence migration",
  ],
  alternates: {
    canonical: `${siteUrl}/switching-from-kompyte`,
  },
  openGraph: {
    title: "Switching from Kompyte to KompWatch — Migration Guide",
    description:
      "Set up KompWatch in under 10 minutes. Track the same competitors, get AI digests, pay ~13x less. No sales call required.",
    url: `${siteUrl}/switching-from-kompyte`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Switching from Kompyte to KompWatch",
    description:
      "Kompyte is two acquisitions deep (Semrush → Adobe). KompWatch is the independent alternative — self-serve, AI-powered, from $49/mo.",
  },
};

const migrationSteps = [
  {
    step: 1,
    title: "Sign up (free, 30 seconds)",
    description:
      "Create your account at kompwatch.com. No credit card, no sales call. Your free plan includes 2 competitors.",
  },
  {
    step: 2,
    title: "Add your competitor URLs",
    description:
      "Paste the same URLs you tracked in Kompyte — pricing pages, feature pages, blogs, careers pages. Takes about 1 minute per competitor.",
  },
  {
    step: 3,
    title: "Set CSS selectors for precision",
    description:
      "Target specific page sections (e.g. .pricing-table, #features) instead of monitoring entire pages. This reduces noise — something Kompyte's full-page monitoring doesn't offer.",
  },
  {
    step: 4,
    title: "Connect Slack (optional)",
    description:
      "Push AI digests to your #competitive-intel channel. Same workflow your team already uses, just better summaries.",
  },
  {
    step: 5,
    title: "First insights within 24 hours",
    description:
      "Snapshots run immediately. Change detection begins after the second snapshot — typically within a few hours on Pro or 24 hours on Free.",
  },
];

export default function SwitchingFromKompytePage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema items={[{ name: "Switching from Kompyte", path: "/switching-from-kompyte" }]} />
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
          Migration guide
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Switching from Kompyte?{" "}
          <span className="text-brand-600">Set up KompWatch in 10 minutes.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Kompyte is now two acquisitions deep — Semrush bought it in 2022, and Adobe is acquiring
          Semrush for $1.9B in 2026. If you&rsquo;re re-evaluating your CI stack, KompWatch gives you
          the same competitor monitoring with AI digests, at{" "}
          <strong className="text-gray-900">~13&times; lower cost</strong>, with zero onboarding friction.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Switching Page Hero CTA Click"
            eventProps={{ competitor: "Kompyte", page: "switching" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#migration-steps"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See migration steps &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever. No sales call. Upgrade when you&rsquo;re ready.
        </p>
      </section>

      {/* Why teams are switching */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why teams are switching from Kompyte
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Kompyte starts at ~$8K/yr with annual contracts. KompWatch Pro is $49/mo ($588/yr) — cancel anytime, no sales call.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Simplicity</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                No multi-day onboarding. Sign up, paste competitor URLs, set CSS selectors — first insights within 24 hours.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">Vendor stability</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Kompyte is two acquisitions deep (Semrush &rarr; Adobe). KompWatch is independent, founder-led, and focused solely on competitor monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section id="migration-steps" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How to switch — 5 steps, under 10 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            You can&rsquo;t import monitors directly from Kompyte, but setup is fast.
          </p>
          <div className="mt-12 space-y-8">
            {migrationSteps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you keep / what changes */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What stays the same, what gets better
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-700">Same or better in KompWatch</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Website change monitoring (pricing, features, blog)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Job listing tracking and hiring signals
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Email digests and Slack integration
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  AI-generated plain-English summaries (better — Claude-powered)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  CSS selector targeting (more precise than full-page)
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">Not in KompWatch (yet)</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Battlecard generation (on our roadmap)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Win/loss tracking workflows
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Native CRM integrations (Salesforce, HubSpot)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Historical data import from Kompyte
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                If battlecards and CRM sync are must-haves, Kompyte may still be the better fit — and
                we&rsquo;ll say that honestly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Run both in parallel */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Not ready to cancel Kompyte? Run both for a month.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              KompWatch&rsquo;s free plan lets you track 2 competitors alongside Kompyte. Compare the
              digest quality side-by-side before committing. Zero risk, zero cost.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href="/login"
                event="Switching Page Parallel CTA Click"
                eventProps={{ competitor: "Kompyte", page: "switching" }}
                className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Start free trial alongside Kompyte
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Kompyte"
        faqs={[
          {
            question: "Can I import my competitors from Kompyte?",
            answer:
              "Not directly — there's no import tool. But adding competitors in KompWatch takes about 1 minute each: paste the URL, set a CSS selector, done. Most teams are fully set up within 15 minutes.",
          },
          {
            question: "Will I lose my monitoring history from Kompyte?",
            answer:
              "KompWatch starts fresh — your history begins from when you add a competitor. If you have important historical changes or battlecard content in Kompyte, export it before deactivating your account.",
          },
          {
            question: "How does KompWatch pricing compare to Kompyte?",
            answer:
              "Kompyte requires a sales call and starts at approximately $8,000/yr (based on public data from review sites). KompWatch starts free (2 competitors) and Pro is $49/mo ($588/yr) — roughly 13x less expensive, with month-to-month billing and no annual lock-in.",
          },
          {
            question: "What about the Adobe/Semrush acquisition — should I be worried?",
            answer:
              "Adobe is acquiring Semrush for $1.9B (closing H1 2026). Kompyte was already acquired by Semrush in 2022, making it two layers deep in corporate consolidation. While nothing is certain, niche tools inside mega-acquisitions often see slower roadmaps and enterprise-only pivots. It's worth considering vendor stability as part of your evaluation.",
          },
          {
            question: "Does KompWatch have battlecards like Kompyte?",
            answer:
              "Not yet — battlecard generation is on our roadmap. If battlecards are a must-have for your sales team today, Kompyte is the better fit. KompWatch focuses on monitoring and AI-powered digests.",
          },
          {
            question: "Can I run KompWatch and Kompyte at the same time?",
            answer:
              "Yes. KompWatch's free tier (2 competitors, weekly digests) lets you run both in parallel with zero cost. This is the lowest-risk way to evaluate, especially if you're mid-contract with Semrush.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to switch?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Set up KompWatch in under 10 minutes. Track the same competitors, get better AI digests,
            pay a fraction of the price.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Switching Page Bottom CTA Click"
              eventProps={{ competitor: "Kompyte", page: "switching" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need help setting up?{" "}
            <a href="mailto:support@kompwatch.com" className="underline hover:text-gray-700">
              Email us your competitor list
            </a>{" "}
            and we&rsquo;ll configure your selectors.
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
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
            </Link>
            <Link href="/vs-klue" className="text-sm text-gray-500 hover:text-gray-700">
              vs Klue
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
