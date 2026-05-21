import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "SaaS Pulse — Live AI-Detected Competitor Changes",
  description:
    "See what changed this week across popular SaaS tools. AI-detected pricing updates, feature launches, blog posts, and hiring signals — updated daily.",
  keywords: [
    "SaaS competitor changes",
    "competitor pricing tracker",
    "SaaS pricing updates",
    "competitor feature launches",
    "competitive intelligence feed",
    "SaaS market pulse",
    "what changed on Notion pricing",
    "what changed on Linear pricing",
    "competitor monitoring",
  ],
  alternates: {
    canonical: `${siteUrl}/pulse`,
  },
  openGraph: {
    title: "SaaS Pulse — Live AI-Detected Competitor Changes",
    description:
      "See what changed this week across popular SaaS tools. AI-detected pricing updates, feature launches, and more.",
    url: `${siteUrl}/pulse`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Pulse — Live AI-Detected Competitor Changes",
    description:
      "See what changed this week across popular SaaS tools. AI-detected pricing updates, feature launches, and more.",
  },
};

// ── Curated SaaS companies with realistic sample changes ───────

interface PulseChange {
  id: string;
  changeType: "PRICING" | "FEATURE" | "BLOG" | "JOB" | "TECH";
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  summary: string;
  daysAgo: number;
}

interface PulseCompany {
  name: string;
  url: string;
  category: string;
  changes: PulseChange[];
}

const pulseCompanies: PulseCompany[] = [
  {
    name: "Notion",
    url: "https://notion.so",
    category: "Productivity",
    changes: [
      {
        id: "notion-1",
        changeType: "PRICING",
        severity: "HIGH",
        summary:
          "Enterprise plan pricing restructured — per-seat pricing replaced with tiered flat rates starting at $18/user/mo",
        daysAgo: 1,
      },
      {
        id: "notion-2",
        changeType: "FEATURE",
        severity: "MEDIUM",
        summary:
          "Notion AI now includes automated database summarization and cross-workspace search",
        daysAgo: 3,
      },
      {
        id: "notion-3",
        changeType: "BLOG",
        severity: "LOW",
        summary:
          'Published case study: "How Figma replaced 4 tools with Notion" — targeting design teams vertical',
        daysAgo: 5,
      },
    ],
  },
  {
    name: "Linear",
    url: "https://linear.app",
    category: "Project Management",
    changes: [
      {
        id: "linear-1",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "Launched Linear Initiatives — cross-team project tracking with automated progress rollups",
        daysAgo: 2,
      },
      {
        id: "linear-2",
        changeType: "JOB",
        severity: "MEDIUM",
        summary:
          "5 new engineering roles posted — 3 mention 'AI agent' and 'autonomous workflow' in descriptions",
        daysAgo: 4,
      },
      {
        id: "linear-3",
        changeType: "PRICING",
        severity: "LOW",
        summary:
          "Free tier now includes unlimited issues (was 250). Growth plan renamed to Plus",
        daysAgo: 6,
      },
    ],
  },
  {
    name: "Intercom",
    url: "https://intercom.com",
    category: "Customer Support",
    changes: [
      {
        id: "intercom-1",
        changeType: "PRICING",
        severity: "CRITICAL",
        summary:
          "Resolution-based pricing model introduced — $0.99 per AI resolution, replacing per-seat for support agents",
        daysAgo: 1,
      },
      {
        id: "intercom-2",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "Fin AI Agent v2 launched with multi-step reasoning, external API calls, and custom knowledge sources",
        daysAgo: 3,
      },
      {
        id: "intercom-3",
        changeType: "BLOG",
        severity: "LOW",
        summary:
          'New comparison page: "/vs/zendesk" positions Intercom as AI-first alternative with 68% faster resolution claim',
        daysAgo: 5,
      },
    ],
  },
  {
    name: "Figma",
    url: "https://figma.com",
    category: "Design",
    changes: [
      {
        id: "figma-1",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "Figma AI multi-edit launched — apply design changes across all variants simultaneously with natural language",
        daysAgo: 2,
      },
      {
        id: "figma-2",
        changeType: "PRICING",
        severity: "MEDIUM",
        summary:
          "Dev Mode now included in Professional plan (was separate $25/editor/mo add-on)",
        daysAgo: 4,
      },
      {
        id: "figma-3",
        changeType: "JOB",
        severity: "LOW",
        summary:
          "8 new roles in Tokyo office — first APAC engineering hub suggests expansion into Japan market",
        daysAgo: 7,
      },
    ],
  },
  {
    name: "Stripe",
    url: "https://stripe.com",
    category: "Payments",
    changes: [
      {
        id: "stripe-1",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "Stripe Billing AI launched — automatic dunning optimization and churn prediction per subscription",
        daysAgo: 1,
      },
      {
        id: "stripe-2",
        changeType: "TECH",
        severity: "MEDIUM",
        summary:
          "API v2025-05 released — breaking changes to PaymentIntent confirmation flow, 12-month migration window",
        daysAgo: 3,
      },
      {
        id: "stripe-3",
        changeType: "BLOG",
        severity: "LOW",
        summary:
          'Published "State of Subscriptions 2026" report — 34% of SaaS companies now offer usage-based pricing',
        daysAgo: 6,
      },
    ],
  },
  {
    name: "HubSpot",
    url: "https://hubspot.com",
    category: "CRM / Marketing",
    changes: [
      {
        id: "hubspot-1",
        changeType: "PRICING",
        severity: "HIGH",
        summary:
          "Starter plan price increased from $20/mo to $30/mo — existing customers grandfathered for 12 months",
        daysAgo: 2,
      },
      {
        id: "hubspot-2",
        changeType: "FEATURE",
        severity: "MEDIUM",
        summary:
          "Breeze AI Agents now handle email drafting, meeting scheduling, and CRM data entry autonomously",
        daysAgo: 5,
      },
      {
        id: "hubspot-3",
        changeType: "JOB",
        severity: "LOW",
        summary:
          "12 new AI/ML roles posted — all reference 'Breeze' platform, suggesting major AI investment",
        daysAgo: 7,
      },
    ],
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    category: "Developer Platform",
    changes: [
      {
        id: "vercel-1",
        changeType: "PRICING",
        severity: "MEDIUM",
        summary:
          "Pro plan bandwidth included increased from 1TB to 2TB — team plan storage doubled to 200GB",
        daysAgo: 3,
      },
      {
        id: "vercel-2",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "v0 AI now generates full-stack Next.js apps with database schemas and API routes from a single prompt",
        daysAgo: 4,
      },
      {
        id: "vercel-3",
        changeType: "BLOG",
        severity: "LOW",
        summary:
          "Next.js 16 announcement — React Server Components default, Turbopack stable, 40% faster cold starts",
        daysAgo: 6,
      },
    ],
  },
  {
    name: "Slack",
    url: "https://slack.com",
    category: "Communication",
    changes: [
      {
        id: "slack-1",
        changeType: "FEATURE",
        severity: "HIGH",
        summary:
          "Slack AI summarization expanded to all paid plans — was Pro+ only, now included in Business+",
        daysAgo: 1,
      },
      {
        id: "slack-2",
        changeType: "PRICING",
        severity: "MEDIUM",
        summary:
          "Business+ annual billing discount increased from 17% to 25% — aggressive retention play",
        daysAgo: 4,
      },
      {
        id: "slack-3",
        changeType: "TECH",
        severity: "LOW",
        summary:
          "Workflow Builder API v2 released — custom steps can now call external APIs without middleware",
        daysAgo: 7,
      },
    ],
  },
];

// ── Styling helpers ────────────────────────────────────────────

const typeColor: Record<string, string> = {
  PRICING: "bg-red-100 text-red-700",
  FEATURE: "bg-blue-100 text-blue-700",
  BLOG: "bg-amber-100 text-amber-700",
  JOB: "bg-purple-100 text-purple-700",
  TECH: "bg-emerald-100 text-emerald-700",
};

const typeLabel: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Content",
  JOB: "Hiring",
  TECH: "Tech",
};

const severityColor: Record<string, string> = {
  CRITICAL: "text-red-600",
  HIGH: "text-orange-600",
  MEDIUM: "text-yellow-600",
  LOW: "text-gray-500",
};

const severityDot: Record<string, string> = {
  CRITICAL: "bg-red-500",
  HIGH: "bg-orange-500",
  MEDIUM: "bg-yellow-500",
  LOW: "bg-gray-400",
};

function timeAgo(daysAgo: number): string {
  if (daysAgo === 0) return "Today";
  if (daysAgo === 1) return "Yesterday";
  return `${daysAgo}d ago`;
}

// ── Page component ─────────────────────────────────────────────

export default function PulsePage() {
  const totalChanges = pulseCompanies.reduce(
    (sum, c) => sum + c.changes.length,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            SaaS Pulse
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What changed this week in SaaS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            AI-detected pricing updates, feature launches, and hiring signals
            across {pulseCompanies.length} popular SaaS tools.{" "}
            <span className="font-medium text-gray-800">
              {totalChanges} changes detected
            </span>{" "}
            in the last 7 days.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedCTA
              href="/signup"
              event="pulse-cta-signup"
              eventProps={{ location: "hero" }}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Track your own competitors — free
            </TrackedCTA>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              Try the interactive demo
            </Link>
          </div>
        </div>
      </section>

      {/* Company grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {pulseCompanies.map((company) => (
            <div
              key={company.name}
              className="rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Company header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {company.name}
                  </h2>
                  <p className="text-sm text-gray-500">{company.category}</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {company.changes.length} changes
                </span>
              </div>

              {/* Changes list */}
              <div className="divide-y divide-gray-50 px-6">
                {company.changes.map((change) => (
                  <div key={change.id} className="py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex h-2 w-2 rounded-full ${severityDot[change.severity]}`}
                      />
                      <span
                        className={`rounded px-1.5 py-0.5 text-xs font-medium ${typeColor[change.changeType]}`}
                      >
                        {typeLabel[change.changeType]}
                      </span>
                      <span className="text-xs text-gray-400">
                        {timeAgo(change.daysAgo)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                      {change.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Track your own competitors
          </h2>
          <p className="mt-3 text-gray-600">
            KompWatch monitors any website and sends you AI-powered summaries
            when things change. Pricing, features, blog posts, job listings —
            nothing slips through.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <TrackedCTA
              href="/signup"
              event="pulse-cta-signup"
              eventProps={{ location: "bottom" }}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Start monitoring free
            </TrackedCTA>
            <Link
              href="/pricing"
              className="text-sm font-medium text-brand-600 transition hover:text-brand-700"
            >
              See pricing plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Free plan: 2 competitors, weekly digest. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-gray-200 bg-gray-50 py-8 text-center">
        <Link
          href="/"
          className="text-sm text-gray-500 transition hover:text-gray-700"
        >
          KompWatch
        </Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link
          href="/demo"
          className="text-sm text-gray-500 transition hover:text-gray-700"
        >
          Demo
        </Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link
          href="/pricing"
          className="text-sm text-gray-500 transition hover:text-gray-700"
        >
          Pricing
        </Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link
          href="/free-snapshot"
          className="text-sm text-gray-500 transition hover:text-gray-700"
        >
          Free Snapshot
        </Link>
      </div>
    </main>
  );
}
