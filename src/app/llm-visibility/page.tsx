import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "LLM Visibility Monitoring — Track How Competitors Appear in AI Search",
  description:
    "Monitor how competitors show up in ChatGPT, Perplexity, and Google AI Overviews. KompWatch is building LLM visibility tracking — join the waitlist.",
  keywords: [
    "LLM visibility monitoring",
    "AI search monitoring",
    "competitor AI mentions",
    "ChatGPT brand monitoring",
    "Perplexity competitor tracking",
    "AI overview monitoring",
    "LLM brand tracking",
    "AI search competitor intelligence",
  ],
  alternates: {
    canonical: `${siteUrl}/llm-visibility`,
  },
  openGraph: {
    title: "LLM Visibility Monitoring — Coming to KompWatch",
    description:
      "Track how competitors appear in AI-generated search results. ChatGPT, Perplexity, Google AI Overviews — monitored and summarized.",
    url: `${siteUrl}/llm-visibility`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Visibility Monitoring — Coming to KompWatch",
    description:
      "Track how competitors appear in AI-generated search results. Join the waitlist.",
  },
};

const capabilities = [
  {
    title: "AI search mention tracking",
    description:
      "See which competitors get named when prospects search in ChatGPT, Perplexity, or Google AI Overviews — and how they're described.",
    icon: (
      <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Sentiment & positioning shifts",
    description:
      "Track how AI models describe your competitors over time. Catch positioning pivots, new claims, and narrative changes as they happen.",
    icon: (
      <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Cross-model comparison",
    description:
      "Compare how different AI models rank and describe competitors. What Claude recommends may differ from ChatGPT or Perplexity.",
    icon: (
      <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Digest integration",
    description:
      "LLM visibility changes surface right alongside website changes in your daily digest — one email, full competitive picture.",
    icon: (
      <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const signals = [
  {
    query: "best competitor intelligence tool for SaaS",
    model: "ChatGPT",
    mentions: ["Crayon", "Klue", "Kompyte"],
    missing: "KompWatch",
    note: "You're invisible in this query — prospects searching here won't find you.",
  },
  {
    query: "affordable alternative to Klue",
    model: "Perplexity",
    mentions: ["Crayon", "Competitors App", "KompWatch"],
    missing: null,
    note: "KompWatch mentioned as budget-friendly option with AI summaries.",
  },
  {
    query: "competitive intelligence tools with AI",
    model: "Google AI Overview",
    mentions: ["Crayon", "Klue", "AlphaSense"],
    missing: "KompWatch",
    note: "Google's AI Overview skips KompWatch entirely — content gap opportunity.",
  },
];

export default function LlmVisibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
      <section className="border-b border-gray-100 bg-gray-50 py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Coming soon
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Track how competitors appear{" "}
            <span className="text-brand-600">in AI search</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            ChatGPT, Perplexity, Google AI Overviews — AI search is becoming the
            new front page. KompWatch is building LLM visibility monitoring so you
            can see which competitors get mentioned, how they&apos;re positioned, and
            when that changes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <TrackedCTA
              href="/login"
              event="LLM Visibility Hero CTA"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Join the waitlist — start free today
            </TrackedCTA>
            <p className="text-xs text-gray-400">
              Sign up now and you&apos;ll be first to access LLM tracking when it launches.
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Why LLM visibility matters
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              When a prospect asks ChatGPT &ldquo;what&apos;s the best competitor monitoring
              tool?&rdquo; — the answer shapes their shortlist before they ever visit your
              website. If your competitors are mentioned and you&apos;re not, you&apos;ve lost
              before you started.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-brand-600">57%</div>
              <p className="mt-2 text-sm text-gray-600">
                of B2B buyers use AI search tools during vendor research
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-brand-600">3&ndash;5</div>
              <p className="mt-2 text-sm text-gray-600">
                tools typically named per AI-generated response — if you&apos;re not in the top 5, you&apos;re invisible
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-brand-600">0</div>
              <p className="mt-2 text-sm text-gray-600">
                teams tracking this today — most don&apos;t even know they&apos;re missing from AI results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample signals */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What LLM visibility tracking looks like
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sample signals from AI search queries in the competitive intelligence category.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {signals.map((signal, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {signal.model}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    &ldquo;{signal.query}&rdquo;
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {signal.mentions.map((name) => (
                    <span
                      key={name}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        name === "KompWatch"
                          ? "bg-brand-100 text-brand-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {name}
                    </span>
                  ))}
                  {signal.missing && (
                    <span className="rounded-full border border-dashed border-red-300 bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                      {signal.missing} — not mentioned
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{signal.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Illustrative examples based on competitive intelligence category queries. Actual AI
            responses vary by model, region, and time.
          </p>
        </div>
      </section>

      {/* Planned capabilities */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What we&apos;re building
            </h2>
            <p className="mt-2 text-gray-600">
              LLM visibility monitoring will be available to all Pro and Team plan customers.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{cap.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What KompWatch tracks today */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What KompWatch tracks today
            </h2>
            <p className="mt-2 text-gray-600">
              While LLM visibility monitoring is in development, KompWatch already
              monitors the inputs that drive AI search rankings.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Website changes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Pricing pages, feature lists, landing pages — the content AI models learn from.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Blog & content</h3>
              <p className="mt-1 text-sm text-gray-600">
                New posts, topic shifts, and keyword targeting that shape AI-generated comparisons.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">Job listings</h3>
              <p className="mt-1 text-sm text-gray-600">
                Hiring for SEO, AI/ML, or DevRel signals investment in content and LLM strategies.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            These signals tell you <em>why</em> a competitor&apos;s AI visibility might shift —
            before you see it in search results.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Be first to know when AI search shifts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sign up for KompWatch today — start monitoring competitor websites free,
            and get early access to LLM visibility tracking when it launches.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <TrackedCTA
              href="/login"
              event="LLM Visibility Bottom CTA"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Join the waitlist — start free
            </TrackedCTA>
            <Link
              href="/sample-digest"
              className="text-sm text-gray-500 underline hover:text-gray-700"
            >
              See a sample digest
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
