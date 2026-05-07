import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — KompWatch",
  description:
    "See what's new in KompWatch. Product updates, new features, and improvements shipped every week.",
  alternates: { canonical: "/changelog" },
};

type Entry = {
  date: string;
  title: string;
  description: string;
  tag: "feature" | "improvement" | "fix";
};

const TAG_STYLES: Record<Entry["tag"], string> = {
  feature: "bg-brand-50 text-brand-700",
  improvement: "bg-blue-50 text-blue-700",
  fix: "bg-amber-50 text-amber-700",
};

const TAG_LABELS: Record<Entry["tag"], string> = {
  feature: "New",
  improvement: "Improved",
  fix: "Fixed",
};

const entries: Entry[] = [
  {
    date: "2026-05-05",
    title: "Interactive demo — no signup required",
    description:
      "Try KompWatch without creating an account. The new /demo page shows a live sample dashboard with four competitors, real change detection, and an activity heatmap — all powered by sample data.",
    tag: "feature",
  },
  {
    date: "2026-05-05",
    title: "Demo video on landing page",
    description:
      "A 60-second product walkthrough video now sits on the homepage so you can see KompWatch in action before signing up.",
    tag: "feature",
  },
  {
    date: "2026-05-05",
    title: "Annual billing",
    description:
      "The pricing page now supports an annual billing toggle. Choose yearly to save — Stripe handles the rest.",
    tag: "feature",
  },
  {
    date: "2026-05-04",
    title: "Competitor activity heatmap",
    description:
      "A GitHub-style 26-week heatmap on the dashboard shows daily change frequency per competitor at a glance.",
    tag: "feature",
  },
  {
    date: "2026-05-04",
    title: '"Why this matters" AI context layer',
    description:
      "Change cards now include an AI-generated explanation of why a competitor change matters to your business — not just what changed, but why you should care.",
    tag: "improvement",
  },
  {
    date: "2026-05-03",
    title: "JSON-LD structured data",
    description:
      "Landing pages now include Organization, WebSite, and SoftwareApplication schemas for richer search results.",
    tag: "improvement",
  },
  {
    date: "2026-05-03",
    title: "Export digests as PDF & CSV",
    description:
      "Share competitive intelligence with your team. Digest exports now include severity colors and per-competitor sections.",
    tag: "feature",
  },
  {
    date: "2026-05-03",
    title: "Instant first snapshot",
    description:
      "Adding a competitor now triggers an immediate snapshot instead of waiting for the next cron cycle. See changes within minutes.",
    tag: "improvement",
  },
  {
    date: "2026-05-02",
    title: "Bulk competitor import",
    description:
      "Paste a list of URLs to add multiple competitors at once. KompWatch auto-detects names and suggests CSS selectors.",
    tag: "feature",
  },
  {
    date: "2026-05-02",
    title: "Comparison pages",
    description:
      "New head-to-head comparison pages for Crayon, Klue, Kompyte, and more — see exactly how KompWatch stacks up.",
    tag: "feature",
  },
  {
    date: "2026-04-30",
    title: "Dashboard — competitor list & change timeline",
    description:
      "The main dashboard now shows all tracked competitors with a real-time timeline of detected changes, filterable by severity.",
    tag: "feature",
  },
  {
    date: "2026-04-28",
    title: "Stripe Checkout & Customer Portal",
    description:
      "Seamless upgrade flow with Stripe Checkout. Manage your subscription, view invoices, and cancel anytime via the customer portal.",
    tag: "feature",
  },
  {
    date: "2026-04-27",
    title: "Magic link authentication",
    description:
      "No passwords to remember. Sign in with a magic link sent to your email — fast, secure, and frictionless.",
    tag: "feature",
  },
];

export default function ChangelogPage() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Compete<span className="text-brand-600">Watch</span>
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
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Changelog
        </h1>
        <p className="mt-3 text-gray-600">
          New features, improvements, and fixes shipped to KompWatch.
        </p>

        <div className="mt-12">
          {entries.map((entry, i) => {
            const showDate =
              i === 0 || entries[i - 1].date !== entry.date;
            return (
              <div key={`${entry.date}-${entry.title}`}>
                {showDate && (
                  <h2 className="mt-10 first:mt-0 mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {formatDate(entry.date)}
                  </h2>
                )}
                <div className="relative border-l-2 border-gray-100 pb-8 pl-6 last:pb-0">
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TAG_STYLES[entry.tag]}`}
                    >
                      {TAG_LABELS[entry.tag]}
                    </span>
                    <h3 className="font-semibold text-gray-900">
                      {entry.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="/security"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Security
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
