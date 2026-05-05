import type { Metadata } from "next";
import Link from "next/link";
import { ActivityHeatmap } from "@/components/dashboard/activity-heatmap";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Interactive Demo — See KompWatch in Action",
  description:
    "Explore a live KompWatch dashboard with sample competitor data. No signup required. See how AI-powered competitor monitoring works — pricing changes, feature launches, and more.",
  keywords: [
    "competitor monitoring demo",
    "competitive intelligence tool demo",
    "competitor tracking dashboard",
    "KompWatch demo",
    "SaaS competitor monitoring",
    "try competitor intelligence free",
  ],
  alternates: {
    canonical: `${siteUrl}/demo`,
  },
  openGraph: {
    title: "Interactive Demo — See KompWatch in Action",
    description:
      "Explore a live KompWatch dashboard with sample competitor data. No signup required.",
    url: `${siteUrl}/demo`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Demo — See KompWatch in Action",
    description:
      "Explore a live KompWatch dashboard with sample competitor data. No signup required.",
  },
};

// --- Mock data ---

const SEVERITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  CRITICAL: "bg-red-100 text-red-700",
};

const CHANGE_TYPE_LABELS: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech",
  GENERAL: "General",
};

const demoCompetitors = [
  {
    id: "demo-1",
    name: "Acme Analytics",
    url: "https://acme-analytics.com",
    isActive: true,
    changesCount: 24,
    lastChange: { createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000) },
  },
  {
    id: "demo-2",
    name: "Beacon CRM",
    url: "https://beacon-crm.com",
    isActive: true,
    changesCount: 18,
    lastChange: { createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000) },
  },
  {
    id: "demo-3",
    name: "Rivvit",
    url: "https://rivvit.io",
    isActive: true,
    changesCount: 11,
    lastChange: { createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  },
  {
    id: "demo-4",
    name: "DataForge",
    url: "https://dataforge.dev",
    isActive: false,
    changesCount: 7,
    lastChange: { createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
  },
];

const demoChanges = [
  {
    id: "ch-1",
    competitor: { name: "Acme Analytics" },
    changeType: "PRICING",
    severity: "HIGH",
    summary: "Pro plan increased from $49/mo to $69/mo — 41% price hike on most popular tier",
    details:
      "The pricing page now shows $69/mo for the Pro tier (previously $49). Annual billing discount reduced from 20% to 15%.\n\nWhat this means for you: Their Pro customers may be looking for alternatives. This is an opportunity to position KompWatch as the affordable option in outreach.",
    pageUrl: "https://acme-analytics.com/pricing",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: "ch-2",
    competitor: { name: "Beacon CRM" },
    changeType: "FEATURE",
    severity: "HIGH",
    summary: "Launched real-time Slack integration with AI-generated pipeline summaries",
    details:
      "New /integrations/slack page. Features include deal alert routing, pipeline daily summaries, and natural-language queries via Slack commands.\n\nWhy this matters: This directly competes with your notification workflow. Consider accelerating your own Slack integration timeline.",
    pageUrl: "https://beacon-crm.com/integrations/slack",
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
  },
  {
    id: "ch-3",
    competitor: { name: "Rivvit" },
    changeType: "PRICING",
    severity: "MEDIUM",
    summary: "Added annual billing option with 20% discount — new comparison table targets 'legacy tools'",
    details:
      "Pricing page now includes toggle between monthly/annual. Comparison table added below fold with unnamed 'legacy tools' column showing missing features.",
    pageUrl: "https://rivvit.io/pricing",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: "ch-4",
    competitor: { name: "Acme Analytics" },
    changeType: "FEATURE",
    severity: "MEDIUM",
    summary: "AI Insights beta launched — automated anomaly detection on all dashboard widgets",
    details:
      'New "AI Insights" section on features page. Available to Scale plan customers. Blog post announces GA planned for Q3 2026.\n\nWhat this means for you: They\'re positioning AI as a premium upsell. Monitor adoption signals in their next quarterly blog.',
    pageUrl: "https://acme-analytics.com/features",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: "ch-5",
    competitor: { name: "Beacon CRM" },
    changeType: "BLOG",
    severity: "LOW",
    summary: "Published case study: 'How TechNova reduced churn by 34% with Beacon CRM'",
    details:
      "1,200-word case study with ROI metrics, customer quotes, and before/after screenshots. Featured on homepage hero rotation.",
    pageUrl: "https://beacon-crm.com/customers/technova",
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: "ch-6",
    competitor: { name: "DataForge" },
    changeType: "JOB",
    severity: "LOW",
    summary: "3 new job postings: Senior ML Engineer, Product Designer, Enterprise AE",
    details:
      "ML role mentions 'real-time personalization engine' — possible new feature in development. Enterprise AE role suggests upmarket push.",
    pageUrl: "https://dataforge.dev/careers",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
];

// Generate realistic heatmap data for the past 26 weeks
function generateHeatmapData(): { date: string; count: number }[] {
  const data: { date: string; count: number }[] = [];
  const today = new Date();
  for (let i = 0; i < 26 * 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().slice(0, 10);
    // Simulate realistic activity patterns
    const dayOfWeek = date.getDay();
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    const baseChance = isWeekday ? 0.6 : 0.3;
    if (Math.random() < baseChance) {
      // Use seeded randomness based on date string for consistency
      const seed = dateStr.split("-").reduce((a, b) => a + parseInt(b), 0);
      const count = ((seed * 7) % 8) + 1;
      data.push({ date: dateStr, count });
    }
  }
  return data;
}

const IMPLICATION_PREFIX_REGEX = /(?:^|\n)\s*(?:what this means (?:for you|for your team)|why this matters)\s*:\s*/i;

function splitDetails(details: string): { factual: string; implication: string | null } {
  const match = IMPLICATION_PREFIX_REGEX.exec(details);
  if (!match) return { factual: details.trim(), implication: null };
  const factual = details.slice(0, match.index).trim();
  const implication = details.slice(match.index + match[0].length).trim();
  return { factual, implication: implication || null };
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

export default function DemoPage() {
  const heatmapData = generateHeatmapData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo banner */}
      <div className="border-b border-brand-200 bg-brand-50 px-4 py-2.5 text-center">
        <p className="text-sm text-brand-800">
          <span className="font-semibold">Interactive demo</span> — this is
          sample data.{" "}
          <Link
            href="/login"
            className="font-semibold text-brand-700 underline hover:text-brand-900"
          >
            Start monitoring your competitors free
          </Link>
        </p>
      </div>

      {/* Nav (mirrors app layout) */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-sm font-bold text-gray-900">
            KompWatch
          </Link>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="text-sm text-brand-600 font-medium">
              Dashboard
            </span>
            <span className="text-sm text-gray-400 cursor-not-allowed">
              Competitors
            </span>
            <span className="text-sm text-gray-400 cursor-not-allowed">
              Digests
            </span>
            <span className="text-sm text-gray-400 cursor-not-allowed">
              Settings
            </span>
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Sign up free
            </Link>
          </div>
          <Link
            href="/login"
            className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:hidden"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Dashboard content */}
      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back, Sarah. Here&apos;s what&apos;s happening with your
            competitors.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Competitors</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              4<span className="text-sm font-normal text-gray-400">/10</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">3 active</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total changes</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">60</p>
            <p className="mt-1 text-xs text-gray-400">all time</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Plan</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">PRO</p>
            <span className="mt-1 inline-block text-xs font-medium text-green-600">
              Active
            </span>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Digest frequency</p>
            <p className="mt-1 text-2xl font-bold text-gray-900 capitalize">
              Daily
            </p>
          </div>
        </div>

        {/* Activity heatmap */}
        <div className="mt-6">
          <ActivityHeatmap data={heatmapData} />
        </div>

        {/* Competitors list */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Your competitors
            </h2>
            <span className="text-sm font-medium text-gray-400 cursor-not-allowed">
              Manage &rarr;
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">
                    Competitor
                  </th>
                  <th className="hidden px-4 py-2.5 text-left text-xs font-medium text-gray-500 sm:table-cell">
                    Status
                  </th>
                  <th className="px-4 py-2.5 text-right text-xs font-medium text-gray-500">
                    Changes
                  </th>
                  <th className="hidden px-4 py-2.5 text-right text-xs font-medium text-gray-500 sm:table-cell">
                    Last activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {demoCompetitors.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full sm:hidden ${
                            c.isActive ? "bg-green-500" : "bg-gray-400"
                          }`}
                        />
                        <span className="font-medium text-gray-900">
                          {c.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {c.url.replace(/^https?:\/\//, "")}
                      </div>
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                          c.isActive
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            c.isActive ? "bg-green-500" : "bg-gray-400"
                          }`}
                        />
                        {c.isActive ? "Active" : "Paused"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-600">
                      {c.changesCount}
                    </td>
                    <td className="hidden px-4 py-3 text-right sm:table-cell">
                      <span className="text-xs text-gray-500">
                        {timeAgo(c.lastChange.createdAt)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Changes timeline */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent changes
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200" />

            <div className="space-y-4">
              {demoChanges.map((change) => {
                const { implication } = splitDetails(change.details);
                return (
                  <div key={change.id} className="relative flex gap-4 pl-9">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-[11px] top-2 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                        change.severity === "CRITICAL"
                          ? "bg-red-500"
                          : change.severity === "HIGH"
                            ? "bg-orange-500"
                            : change.severity === "MEDIUM"
                              ? "bg-blue-500"
                              : "bg-gray-400"
                      }`}
                    />

                    <div className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            {change.competitor.name}
                          </span>
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              SEVERITY_COLORS[change.severity] ||
                              SEVERITY_COLORS.LOW
                            }`}
                          >
                            {CHANGE_TYPE_LABELS[change.changeType] ||
                              change.changeType}
                          </span>
                          <span
                            className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                              SEVERITY_COLORS[change.severity] ||
                              SEVERITY_COLORS.LOW
                            }`}
                          >
                            {change.severity}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {timeAgo(change.createdAt)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {change.summary}
                      </p>
                      {implication && (
                        <div className="mt-2 rounded-md border-l-2 border-brand-300 bg-brand-50/60 px-2.5 py-1.5">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                            Why this matters
                          </p>
                          <p className="mt-0.5 text-xs text-gray-700">
                            {implication}
                          </p>
                        </div>
                      )}
                      {change.pageUrl && (
                        <span className="mt-1 inline-block text-xs text-brand-600">
                          View page &rarr;
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 text-center sm:p-8">
          <h3 className="text-xl font-bold text-gray-900">
            Like what you see?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
            Start monitoring your real competitors in under 2 minutes. Free plan
            includes 2 competitors with weekly AI digests.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <TrackedCTA
              href="/login"
              event="demo-bottom-cta"
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
      </main>
    </div>
  );
}
