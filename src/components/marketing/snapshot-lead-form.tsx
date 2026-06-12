"use client";

import { useState } from "react";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> }
    ) => void;
  }
}

type Status = "idle" | "submitting" | "success" | "error";

interface SnapshotResult {
  url: string;
  homepage: {
    title: string | null;
    description: string | null;
    techStack: string[];
    headingCount: number;
    reachable: boolean;
  };
  pricing: {
    found: boolean;
    signals: string[];
    pageUrl: string | null;
  };
  blog: {
    found: boolean;
    titles: string[];
    pageUrl: string | null;
  };
  careers: {
    found: boolean;
    titles: string[];
    pageUrl: string | null;
  };
  signalCount: number;
  analysisTimeMs: number;
}

function SignalBadge({ found, label }: { found: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        found
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          found ? "bg-green-500" : "bg-gray-400"
        }`}
      />
      {label}
    </span>
  );
}

function SnapshotResults({ snapshot }: { snapshot: SnapshotResult }) {
  return (
    <div className="mt-6 space-y-4 text-left">
      {/* Header */}
      <div className="rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {snapshot.homepage.title || snapshot.url}
            </p>
            {snapshot.homepage.description && (
              <p className="mt-0.5 text-xs text-gray-600 line-clamp-2">
                {snapshot.homepage.description}
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-brand-600">
              {snapshot.signalCount}
            </p>
            <p className="text-xs text-gray-500">signals found</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <SignalBadge found={snapshot.homepage.reachable} label="Homepage" />
          <SignalBadge found={snapshot.pricing.found} label="Pricing" />
          <SignalBadge found={snapshot.blog.found} label="Blog" />
          <SignalBadge found={snapshot.careers.found} label="Careers" />
        </div>
      </div>

      {/* Tech Stack */}
      {snapshot.homepage.techStack.length > 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Tech Stack Detected
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {snapshot.homepage.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Signals */}
      {snapshot.pricing.found && snapshot.pricing.signals.length > 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Pricing Intelligence
          </p>
          <ul className="mt-2 space-y-1">
            {snapshot.pricing.signals.map((signal, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blog Titles */}
      {snapshot.blog.titles.length > 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Recent Content
          </p>
          <ul className="mt-2 space-y-1">
            {snapshot.blog.titles.slice(0, 5).map((title, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Job Titles */}
      {snapshot.careers.titles.length > 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Hiring Signals
          </p>
          <ul className="mt-2 space-y-1">
            {snapshot.careers.titles.slice(0, 5).map((title, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Analysis meta */}
      <p className="text-center text-xs text-gray-400">
        Analyzed in {(snapshot.analysisTimeMs / 1000).toFixed(1)}s. This is a
        lightweight preview &mdash; KompWatch&apos;s full monitoring includes
        AI-powered change detection, severity scoring, and weekly digests.
      </p>

      {/* Track YOUR site CTA */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-900">
              Also track YOUR site vs. {snapshot.homepage.title || new URL(snapshot.url).hostname}
            </p>
            <p className="mt-1 text-xs text-amber-700">
              See how your site stacks up &mdash; get alerts when they change pricing, ship features, or publish content that affects your positioning.
            </p>
            <a
              href={`/login?competitor_url=${encodeURIComponent(snapshot.url)}&utm_source=free-snapshot&utm_content=track-your-site`}
              onClick={() => window.plausible?.("free-snapshot-track-your-site", { props: { competitor_url: snapshot.url } })}
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-800 underline decoration-amber-300 underline-offset-2 hover:text-amber-900 hover:decoration-amber-500"
            >
              Start tracking both sites free &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-center">
        <p className="text-sm font-semibold text-green-800">
          Want ongoing monitoring with AI-powered change detection?
        </p>
        <p className="mt-1 text-xs text-green-600">
          Track up to 2 competitors free &mdash; no credit card required.
        </p>
        <a
          href={`/login?competitor_url=${encodeURIComponent(snapshot.url)}&utm_source=free-snapshot`}
          className="mt-3 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Start monitoring free
        </a>
      </div>
    </div>
  );
}

export function SnapshotLeadForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [snapshot, setSnapshot] = useState<SnapshotResult | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;

    setStatus("submitting");
    setMessage("");
    setSnapshot(null);

    try {
      const res = await fetch("/api/free-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmedUrl, email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        snapshot?: SnapshotResult;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      window.plausible?.("free-snapshot-submit", {
        props: { competitor_url: trimmedUrl },
      });
      setStatus("success");
      setSnapshot(data.snapshot ?? null);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success" && snapshot) {
    return <SnapshotResults snapshot={snapshot} />;
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-green-200 bg-green-50 px-6 py-5 text-center text-sm text-green-800"
        role="status"
      >
        <p className="font-semibold">
          Analysis complete! Check below for your results.
        </p>
        <p className="mt-2 text-green-600">
          In the meantime,{" "}
          <a href={`/login?competitor_url=${encodeURIComponent(url)}&utm_source=free-snapshot`} className="font-medium underline hover:text-green-800">
            start monitoring free
          </a>{" "}
          to track up to 2 competitors with weekly digests.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="snapshot-url" className="sr-only">
          Competitor URL
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <input
            id="snapshot-url"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://competitor.com"
            disabled={status === "submitting"}
            className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-gray-50"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="snapshot-email" className="sr-only">
          Email address
        </label>
        <input
          id="snapshot-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourcompany.com"
          disabled={status === "submitting"}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-gray-50"
        />
        <button
          type="submit"
          disabled={status === "submitting" || email.length === 0 || url.length === 0}
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-300"
        >
          {status === "submitting" ? "Analyzing..." : "Analyze now — free"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-600" role="alert">
          {message}
        </p>
      )}
      {status === "submitting" && (
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-brand-600" />
          Scanning competitor pages... usually takes 10-30 seconds
        </div>
      )}
      <p className="text-center text-xs text-gray-400">
        No account needed. Instant results on this page.
      </p>
    </form>
  );
}
