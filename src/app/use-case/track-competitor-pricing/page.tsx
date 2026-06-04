import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";
import { PricingUsecaseHero } from "./pricing-usecase-hero";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Track Competitor Pricing Automatically — KompWatch",
  description:
    "Monitor competitor pricing pages 24/7. KompWatch detects price changes, new tiers, and removed plans — then sends you an AI summary before your customers notice.",
  keywords: [
    "track competitor pricing",
    "competitor price monitoring",
    "competitor pricing tracker",
    "monitor competitor prices",
    "competitor price change alerts",
    "pricing intelligence tool",
    "SaaS competitor pricing",
    "automated competitor price tracking",
    "competitor pricing analysis tool",
    "price monitoring software",
  ],
  alternates: {
    canonical: `${siteUrl}/use-case/track-competitor-pricing`,
  },
  openGraph: {
    title: "Track Competitor Pricing Automatically — KompWatch",
    description:
      "Detect competitor price changes, new tiers, and removed plans automatically. AI-summarized alerts delivered to your inbox.",
    url: `${siteUrl}/use-case/track-competitor-pricing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Competitor Pricing Automatically — KompWatch",
    description:
      "Detect competitor price changes, new tiers, and removed plans automatically. AI-summarized alerts delivered to your inbox.",
  },
};

const painPoints = [
  {
    title: "You find out about price changes from your customers",
    description:
      "A prospect mentions your competitor just dropped their price by 20%. You had no idea. Now you're reacting instead of positioning.",
  },
  {
    title: "Manually checking pricing pages doesn't last",
    description:
      "You bookmark 5 competitor pricing pages and check them weekly. For two weeks. Then Q3 kicks in and the habit dies. The pages don't stop changing.",
  },
  {
    title: "Google Alerts can't see pricing page changes",
    description:
      "Google Alerts monitors mentions across the web — it doesn't visit your competitor's pricing page and diff it. Quiet price increases go undetected.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Add a competitor pricing URL",
    description:
      "Paste the URL of any competitor's pricing page. KompWatch uses a real headless browser to load the page exactly as a customer would see it — JavaScript rendering, dynamic content, and all.",
  },
  {
    step: "2",
    title: "KompWatch snapshots and diffs on a schedule",
    description:
      "Every hour (Team) or every 6 hours (Pro), KompWatch visits the page, takes a full snapshot, and compares it to the previous version. Content changes are classified by type: pricing, features, positioning.",
  },
  {
    step: "3",
    title: "Get an AI-generated summary of what changed",
    description:
      "When a pricing change is detected, KompWatch generates a plain-English summary: what changed, what was added or removed, and how it compares to the previous version. Delivered via email digest or Slack.",
  },
];

const detections = [
  {
    title: "Price increases and decreases",
    description: "Detects when a competitor raises or lowers their per-seat, per-unit, or flat-rate pricing — even when they try to bury it in a redesign.",
    example: "\"Acme raised their Pro plan from $49/mo to $69/mo\"",
  },
  {
    title: "New and removed tiers",
    description: "Catches when competitors add an Enterprise tier, remove a free plan, or consolidate pricing — changes that shift the competitive landscape.",
    example: "\"Acme removed their Starter plan and added an Enterprise tier at $299/mo\"",
  },
  {
    title: "Feature changes within plans",
    description: "Detects when features move between tiers, limits change (e.g., seats, storage), or new add-ons appear on the pricing page.",
    example: "\"Acme moved API access from Pro to Enterprise tier\"",
  },
  {
    title: "Trial and discount changes",
    description: "Notices when competitors extend free trials, add annual discounts, or launch promotional pricing — signals that reveal their sales pressure.",
    example: "\"Acme extended their free trial from 14 to 30 days\"",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does KompWatch detect pricing changes?",
    answer:
      "KompWatch uses a headless browser (Playwright) to visit your competitor's pricing page on a schedule. It takes a full snapshot of the rendered page — not just the HTML source — and compares it to the previous snapshot. An AI model then classifies detected changes by type (pricing, features, content) and generates a plain-English summary of what changed.",
  },
  {
    question: "Can it detect changes on JavaScript-rendered pricing pages?",
    answer:
      "Yes. KompWatch uses a real headless Chromium browser that executes JavaScript, loads dynamic content, and renders the page exactly as a visitor would see it. This means it catches pricing changes even on React, Vue, or Angular-based pricing pages that Google Alerts and basic scrapers miss entirely.",
  },
  {
    question: "How often does it check for pricing changes?",
    answer:
      "Depends on your plan. The Pro plan ($49/mo) checks every 6 hours. The Team plan ($149/mo) checks every hour. The Free plan checks daily. For most pricing monitoring use cases, every-6-hour checks (Pro) are sufficient — pricing pages rarely change more than once a day.",
  },
  {
    question: "What if a competitor redesigns their pricing page?",
    answer:
      "KompWatch compares rendered content, not HTML structure. A visual redesign with no pricing changes will be flagged as a low-severity content change. An actual price change — even during a redesign — will be flagged as a high-severity pricing change with a clear summary of what moved.",
  },
  {
    question: "How many competitor pricing pages can I track?",
    answer:
      "The Free plan tracks 2 competitors, Pro tracks 10, and Team tracks 50. Each competitor can have one URL monitored (typically the pricing page). If you need to track both a pricing page and a features page for the same competitor, that counts as two competitor slots.",
  },
  {
    question: "Is this different from Visualping or similar page-change tools?",
    answer:
      "Yes. Generic page-change tools alert you that something changed — but they don't understand what changed. KompWatch uses AI to classify changes (pricing vs. content vs. features), score severity, and generate summaries. You get 'Competitor raised Pro tier from $49 to $69/mo' instead of 'Page changed: 2 elements differ.'",
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

export default function TrackCompetitorPricingPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Use Cases", path: "/use-case" },
          { name: "Track Competitor Pricing", path: "/use-case/track-competitor-pricing" },
        ]}
      />
      <SoftwareApplicationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

      {/* Hero — A/B experiment: 'track' vs 'monitor' keyword angle */}
      <PricingUsecaseHero />

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why manual pricing monitoring fails
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Competitor pricing pages change quietly. Most teams find out too late.
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
              How KompWatch tracks competitor pricing
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Three steps. No scripts, no browser extensions, no manual checking.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {howItWorks.map((step) => (
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

      {/* What it detects */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What pricing changes KompWatch catches
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              AI-classified changes with plain-English summaries — not raw diffs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {detections.map((d) => (
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

      {/* Pricing fit */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Pricing
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Monitor 10 competitor pricing pages for $49/mo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              No per-seat fees. No annual contracts. Start free, upgrade when you need
              faster checks or more competitors.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">$0<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · daily checks</div>
              <p className="mt-4 text-sm text-gray-300">
                Track two competitor pricing pages. Get a weekly digest summarizing any changes detected.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Pro · best for pricing tracking</div>
              <div className="mt-2 text-3xl font-bold">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · every 6 hours</div>
              <p className="mt-4 text-sm text-gray-300">
                Check pricing pages 4× per day. Daily digests mean you catch price changes within hours, not weeks.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly checks</div>
              <p className="mt-4 text-sm text-gray-300">
                For teams tracking a large competitive set. Hourly checks catch same-day moves. API access for integrations.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="UseCase Pricing CTA"
              eventProps={{ usecase: "track-competitor-pricing" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when you&rsquo;re ready
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
            Competitor pricing tracking — FAQ
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

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop checking competitor pricing pages manually
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with 2 competitors free. Pro ($49/mo) checks every 6 hours
            and sends daily AI summaries of what changed.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="UseCase Pricing Bottom CTA"
              eventProps={{ usecase: "track-competitor-pricing" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need to track more than 50 competitors?{" "}
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
            <Link href="/for-product-teams" className="text-sm text-gray-500 hover:text-gray-700">
              For product teams
            </Link>
            <Link href="/for-marketing-agencies" className="text-sm text-gray-500 hover:text-gray-700">
              For agencies
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
