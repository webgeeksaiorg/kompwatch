"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const POPULAR_COMPETITORS = [
  { name: "HubSpot", url: "https://www.hubspot.com" },
  { name: "Salesforce", url: "https://www.salesforce.com" },
  { name: "Intercom", url: "https://www.intercom.com" },
  { name: "Zendesk", url: "https://www.zendesk.com" },
  { name: "Drift", url: "https://www.drift.com" },
  { name: "Gong", url: "https://www.gong.io" },
  { name: "Outreach", url: "https://www.outreach.io" },
  { name: "Monday.com", url: "https://www.monday.com" },
  { name: "Notion", url: "https://www.notion.so" },
  { name: "Asana", url: "https://www.asana.com" },
  { name: "Slack", url: "https://www.slack.com" },
  { name: "Figma", url: "https://www.figma.com" },
];

export function AddCompetitorForm({
  atLimit,
  plan,
}: {
  atLimit: boolean;
  plan: string;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      setName("");
      setUrl("");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (atLimit) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-800">
          You&apos;ve reached the {plan} plan limit.{" "}
          <a href="/pricing" className="font-medium underline hover:text-amber-900">
            Upgrade your plan
          </a>{" "}
          to track more competitors.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-4 text-sm font-semibold text-gray-900">Add a competitor</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Company name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:w-48"
        />
        <input
          type="url"
          placeholder="https://competitor.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:flex-1"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50 sm:w-auto"
        >
          {loading ? "Adding…" : "Add"}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <div className="mt-3">
        <p className="mb-2 text-xs font-medium text-gray-500">Popular competitors</p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_COMPETITORS.map((s) => (
            <button
              key={s.url}
              type="button"
              onClick={() => selectSuggestion(s)}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
