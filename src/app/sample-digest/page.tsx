import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Sample Digest — See What KompWatch Sends You",
  description:
    "Preview a real KompWatch competitor digest. AI-summarized pricing changes, feature launches, and content updates — delivered to your inbox daily or weekly.",
  keywords: [
    "competitor monitoring digest",
    "competitive intelligence email",
    "competitor tracking report",
    "KompWatch sample",
    "competitor change alerts",
    "AI competitor summary",
  ],
  alternates: {
    canonical: `${siteUrl}/sample-digest`,
  },
  openGraph: {
    title: "Sample Digest — See What KompWatch Sends You",
    description:
      "Preview a real KompWatch competitor digest. AI-summarized pricing changes, feature launches, and content updates.",
    url: `${siteUrl}/sample-digest`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Digest — See What KompWatch Sends You",
    description:
      "Preview a real KompWatch competitor digest. AI-summarized pricing changes, feature launches, and content updates.",
  },
};

const sampleChanges = [
  {
    competitor: "Acme Analytics",
    severity: "HIGH" as const,
    type: "PRICING",
    summary:
      "Pro plan increased from $39/mo to $59/mo (+51%). Enterprise tier renamed to \"Scale\" with custom pricing. Free tier now limited to 1 seat (was 3).",
    url: "acme-analytics.com/pricing",
    detectedAt: "Apr 22, 2026 · 2:14 PM",
  },
  {
    competitor: "Acme Analytics",
    severity: "MEDIUM" as const,
    type: "FEATURE",
    summary:
      "Launched \"AI Insights\" beta — automated anomaly detection on dashboards. Available to Scale plan customers. Blog post announces GA in Q3 2026.",
    url: "acme-analytics.com/blog",
    detectedAt: "Apr 22, 2026 · 2:14 PM",
  },
  {
    competitor: "Beacon CRM",
    severity: "HIGH" as const,
    type: "FEATURE",
    summary:
      "New Slack integration page added. Real-time deal alerts, pipeline updates, and AI-generated weekly summaries pushed directly to Slack channels.",
    url: "beacon-crm.com/integrations",
    detectedAt: "Apr 22, 2026 · 6:02 AM",
  },
  {
    competitor: "Beacon CRM",
    severity: "LOW" as const,
    type: "CONTENT",
    summary:
      'Published case study: "How TechNova reduced churn by 34% with Beacon CRM." 1,200-word piece with ROI metrics and customer quotes.',
    url: "beacon-crm.com/customers",
    detectedAt: "Apr 22, 2026 · 6:02 AM",
  },
  {
    competitor: "Rivvit",
    severity: "MEDIUM" as const,
    type: "PRICING",
    summary:
      "Added annual billing option — 20% discount vs monthly. New comparison table on pricing page positions against unnamed \"legacy tools.\"",
    url: "rivvit.io/pricing",
    detectedAt: "Apr 21, 2026 · 10:30 PM",
  },
  {
    competitor: "Rivvit",
    severity: "LOW" as const,
    type: "CONTENT",
    summary:
      "Three new job postings: Senior ML Engineer, Product Designer, and Enterprise AE. ML role mentions \"real-time personalization engine\" — potential new feature.",
    url: "rivvit.io/careers",
    detectedAt: "Apr 21, 2026 · 10:30 PM",
  },
];

const severityColor = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-amber-100 text-amber-700",
  LOW: "bg-gray-100 text-gray-600",
};

const typeLabel = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  CONTENT: "Content",
};

export default function SampleDigestPage() {
  return (
    <div className="min-h-screen bg-white">
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
            Sample digest
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            See what you&apos;d get
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This is a real example of a KompWatch digest. Every change
            AI-summarized, severity-rated, and delivered to your inbox — so you
            never miss a competitor move.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="sample-digest-hero-cta"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start monitoring free
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* Sample digest email */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          {/* Email chrome */}
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            {/* Email header */}
            <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-gray-500">
                  <span className="font-medium text-gray-700">From:</span>{" "}
                  KompWatch &lt;digest@kompwatch.com&gt;
                </p>
                <p className="text-gray-500">
                  <span className="font-medium text-gray-700">To:</span>{" "}
                  you@yourcompany.com
                </p>
                <p className="text-gray-500">
                  <span className="font-medium text-gray-700">Subject:</span>{" "}
                  <span className="font-semibold text-gray-900">
                    Your competitor digest — Apr 22, 2026
                  </span>
                </p>
              </div>
            </div>

            {/* Email body */}
            <div className="bg-white px-6 py-6">
              <p className="text-sm text-gray-600">
                Hi there — here&apos;s what changed across your 3 monitored
                competitors in the last 24 hours.
              </p>

              <div className="mt-2 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800">
                <span className="font-semibold">
                  6 changes detected
                </span>{" "}
                across 3 competitors · 2 high severity
              </div>

              <div className="mt-6 space-y-5">
                {sampleChanges.map((change, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">
                        {change.competitor}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${severityColor[change.severity]}`}
                      >
                        {change.severity}
                      </span>
                      <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                        {typeLabel[change.type as keyof typeof typeLabel]}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {change.summary}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {change.url} · {change.detectedAt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
                <p>
                  You&apos;re receiving this because you monitor 3 competitors on
                  KompWatch.
                </p>
                <p className="mt-1">
                  Manage preferences · Unsubscribe
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            This is a sample digest with fictional companies. Your digests will
            reflect your actual competitors.
          </p>
        </div>
      </section>

      {/* What's in a digest */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            What&apos;s in every digest
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Our AI reads every page you monitor, compares it to the last
            snapshot, and surfaces only what matters.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Pricing changes
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Price increases, new tiers, discounts, and free plan changes —
                flagged as high severity.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                <svg
                  className="h-6 w-6 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Feature launches
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                New integrations, product updates, and beta announcements —
                before your customers tell you.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Content & hiring
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Blog posts, case studies, job listings, and messaging shifts —
                signals of what&apos;s coming next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Severity explainer */}
      <section className="border-t border-gray-100 py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            AI-rated severity
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-600">
            Every change is classified by impact so you can focus on what matters
            most.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-gray-100 p-4">
              <span className="mt-0.5 shrink-0 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
                HIGH
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Immediate attention
                </p>
                <p className="text-sm text-gray-600">
                  Pricing changes, major feature launches, positioning pivots.
                  Things your sales team needs to know today.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-100 p-4">
              <span className="mt-0.5 shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                MEDIUM
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Worth reviewing
                </p>
                <p className="text-sm text-gray-600">
                  New integrations, billing changes, beta announcements. Context
                  for your next product meeting.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-gray-100 p-4">
              <span className="mt-0.5 shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                LOW
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Background signal
                </p>
                <p className="text-sm text-gray-600">
                  Blog posts, case studies, job listings. Useful trends over
                  time, not urgent individually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Get your first digest in minutes
          </h2>
          <p className="mt-3 text-gray-600">
            Add a competitor, pick the pages to monitor, and KompWatch handles
            the rest. Free plan includes 2 competitors with weekly digests.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <TrackedCTA
              href="/login"
              event="sample-digest-bottom-cta"
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
