"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SUGGESTED_COMPETITORS = [
  { name: "HubSpot", url: "https://www.hubspot.com" },
  { name: "Salesforce", url: "https://www.salesforce.com" },
  { name: "Intercom", url: "https://www.intercom.com" },
  { name: "Zendesk", url: "https://www.zendesk.com" },
  { name: "Notion", url: "https://www.notion.so" },
  { name: "Figma", url: "https://www.figma.com" },
];

const STEPS = [
  {
    number: "1",
    title: "Add a competitor URL",
    description: "Paste the website of any competitor you want to track.",
  },
  {
    number: "2",
    title: "We monitor for changes",
    description: "Pricing updates, new features, blog posts, job listings — all tracked automatically.",
  },
  {
    number: "3",
    title: "Get your digest",
    description: "AI-summarized changes delivered to your inbox so you never miss a move.",
  },
];

export function EmptyStateOnboarding() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function selectSuggestion(suggestion: { name: string; url: string }) {
    setName(suggestion.name);
    setUrl(suggestion.url);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/competitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(typeof data.error === "string" ? data.error : "Failed to add competitor.");
        return;
      }

      setSuccess(true);
      setTimeout(() => router.refresh(), 600);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900">Competitor added!</h3>
        <p className="mt-1 text-sm text-gray-600">
          We&apos;ll take the first snapshot shortly. Your dashboard is loading...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-brand-200 bg-gradient-to-b from-brand-50/80 to-white p-8 sm:p-10">
      {/* Hero header */}
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
          <svg className="h-7 w-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Add your first competitor
        </h2>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
          Start monitoring any competitor in under 30 seconds. We&apos;ll track their pricing, features, blog, and job posts — then send you an AI-powered digest.
        </p>
      </div>

      {/* Inline add form */}
      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Company name"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            required
            className="w-full sm:w-44 rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <input
            type="url"
            placeholder="https://competitor.com"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); }}
            required
            className="flex-1 rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Adding..." : "Start monitoring"}
          </button>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

        {/* Quick-add suggestions */}
        <div className="mt-4 text-center">
          <p className="mb-2 text-xs font-medium text-gray-400">Or quick-add a popular company</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SUGGESTED_COMPETITORS.map((s) => (
              <button
                key={s.url}
                type="button"
                onClick={() => selectSuggestion(s)}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* How it works steps */}
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
              {step.number}
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-900">{step.title}</p>
            <p className="mt-1 text-xs text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
