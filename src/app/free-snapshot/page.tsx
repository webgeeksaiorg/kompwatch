import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { SnapshotLeadForm } from "@/components/marketing/snapshot-lead-form";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Free Competitor Snapshot — Analyze Any Competitor in 24 Hours",
  description:
    "Enter a competitor URL and get a free AI-powered analysis of their pricing, features, content, and hiring signals. No account required — delivered to your inbox.",
  keywords: [
    "free competitor analysis",
    "competitor snapshot tool",
    "competitive intelligence free",
    "competitor pricing tracker",
    "competitor monitoring free trial",
    "AI competitor analysis",
  ],
  alternates: {
    canonical: `${siteUrl}/free-snapshot`,
  },
  openGraph: {
    title: "Free Competitor Snapshot — Analyze Any Competitor in 24 Hours",
    description:
      "Enter a competitor URL and get a free AI-powered analysis of their pricing, features, content, and hiring signals.",
    url: `${siteUrl}/free-snapshot`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Competitor Snapshot — Analyze Any Competitor in 24 Hours",
    description:
      "Enter a competitor URL and get a free AI-powered analysis of their pricing, features, content, and hiring signals.",
  },
};

const sampleFindings: {
  type: keyof typeof typeColor;
  severity: keyof typeof severityColor;
  title: string;
  detail: string;
}[] = [
  {
    type: "PRICING",
    severity: "HIGH",
    title: "Pro plan price increase detected",
    detail:
      'Pricing page shows Pro plan at $79/mo (was $49/mo 90 days ago). New "Growth" tier added at $129/mo with AI features.',
  },
  {
    type: "FEATURE",
    severity: "MEDIUM",
    title: "Slack integration launched",
    detail:
      "New /integrations/slack page detected. Real-time deal alerts, pipeline updates, and weekly AI summaries to Slack channels.",
  },
  {
    type: "CONTENT",
    severity: "LOW",
    title: "3 new case studies published",
    detail:
      'Blog section added three enterprise case studies in the last 30 days. "How TechNova reduced churn by 34%" headline suggests retention positioning.',
  },
  {
    type: "JOB",
    severity: "LOW",
    title: "Hiring signal: ML Engineer",
    detail:
      'Careers page lists "Senior ML Engineer" with mentions of "real-time personalization engine." Suggests upcoming AI feature launch.',
  },
];

const severityColor = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  LOW: "bg-gray-100 text-gray-600",
};

const typeColor = {
  PRICING: "bg-red-50 text-red-600",
  FEATURE: "bg-brand-50 text-brand-700",
  CONTENT: "bg-amber-50 text-amber-600",
  JOB: "bg-purple-50 text-purple-600",
};

const faqs = [
  {
    question: "What exactly will I receive?",
    answer:
      "An email with an AI-generated analysis of the competitor URL you submit. It covers detected pricing tiers, key features, recent blog content, job postings, and tech stack signals — similar to what KompWatch monitors automatically for paying users.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most snapshots are delivered within 24 hours. Our system crawls the competitor site, captures key pages (pricing, features, blog, careers), and generates an AI summary of what we find.",
  },
  {
    question: "Is this really free? What's the catch?",
    answer:
      "Completely free, one snapshot per competitor URL. We built this so you can see the quality of KompWatch analysis before committing. If you want ongoing monitoring, our Free plan tracks 2 competitors with weekly digests — no credit card required.",
  },
  {
    question: "What types of pages do you analyze?",
    answer:
      "We look at pricing pages, feature/product pages, blog/content sections, careers/jobs pages, and integrations pages. Each is analyzed for changes, positioning, and competitive signals.",
  },
  {
    question: "Will the competitor know I analyzed them?",
    answer:
      "No. KompWatch uses a standard web crawler that respects robots.txt. It looks like normal web traffic — no different from a Google bot or someone browsing the site.",
  },
  {
    question: "Can I get snapshots of multiple competitors?",
    answer:
      "The free snapshot is one per competitor. For ongoing monitoring of multiple competitors, sign up for KompWatch — the Free plan supports 2 competitors, Pro supports 10, and Team supports 50.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FreeSnapshotPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free / Sign in
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
            Free — no account needed
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get a free competitor snapshot
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enter any competitor&apos;s URL and your email. Our AI crawls their
            site and sends you a full analysis — pricing, features, content, and
            hiring signals — within 24 hours.
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <SnapshotLeadForm />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            What&apos;s in your snapshot
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Here&apos;s a sample of the competitive intelligence you&apos;ll
            receive. Your snapshot will reflect the actual competitor you submit.
          </p>

          <div className="mt-12 space-y-4">
            {sampleFindings.map((finding, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${severityColor[finding.severity]}`}
                  >
                    {finding.severity}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeColor[finding.type]}`}
                  >
                    {finding.type}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {finding.title}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {finding.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Sample data from a fictional competitor. Your snapshot will analyze
            the real URL you provide.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700">
                1
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Submit a URL
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your competitor&apos;s website and your email. That&apos;s
                all we need.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700">
                2
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                AI crawls the site
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                KompWatch scans pricing, features, blog, careers, and
                integrations pages automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700">
                3
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Get your analysis
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Receive an AI-generated report in your inbox within 24 hours.
                Severity-rated and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <section className="border-t border-gray-100 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-brand-600">5 signals</p>
              <p className="mt-1 text-sm text-gray-600">
                Pricing, features, content, jobs, and tech stack — analyzed per
                competitor
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-brand-600">&lt; 24 hrs</p>
              <p className="mt-1 text-sm text-gray-600">
                Most snapshots delivered within hours, not days
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-brand-600">$0</p>
              <p className="mt-1 text-sm text-gray-600">
                Completely free. No credit card, no account required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-t border-gray-100 bg-brand-50/50 py-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Ready to see what your competitor is up to?
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            One URL, one email, one free analysis. Takes 10 seconds.
          </p>
          <div className="mt-6">
            <SnapshotLeadForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Want ongoing monitoring?
          </h2>
          <p className="mt-3 text-gray-600">
            The free snapshot is a one-time look. KompWatch monitors
            continuously — daily or hourly — so you never miss a competitor
            move. Free plan includes 2 competitors with weekly digests.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <TrackedCTA
              href="/login"
              event="free-snapshot-bottom-cta"
              className="rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start monitoring free
            </TrackedCTA>
            <Link
              href="/pricing"
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-600">
              Terms
            </Link>
            <Link href="/pricing" className="hover:text-gray-600">
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
