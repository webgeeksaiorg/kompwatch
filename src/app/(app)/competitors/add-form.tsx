"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TrackedCTA } from "@/components/tracked-cta";

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

const UPGRADE_INFO: Record<string, { nextPlan: string; competitors: number; extras: string }> = {
  FREE: { nextPlan: "Pro", competitors: 10, extras: "daily digests + Slack alerts" },
  PRO: { nextPlan: "Team", competitors: 50, extras: "hourly snapshots + API access" },
};

export function AddCompetitorForm({
  atLimit,
  plan,
  currentCount,
  limit,
}: {
  atLimit: boolean;
  plan: string;
  currentCount: number;
  limit: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Pre-fill URL from free snapshot or competitor capture flow
  useEffect(() => {
    const prefillUrl = searchParams.get("prefill_url");
    if (prefillUrl && !url) {
      setUrl(prefillUrl);
      // Extract domain name as a suggested competitor name
      try {
        const hostname = new URL(prefillUrl).hostname.replace(/^www\./, "");
        const domainName = hostname.split(".")[0];
        if (domainName && !name) {
          setName(domainName.charAt(0).toUpperCase() + domainName.slice(1));
        }
      } catch {
        // Invalid URL — just pre-fill the URL field
      }
    }
  }, []);

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
    const upgrade = UPGRADE_INFO[plan];

    return (
      <div className="overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-brand-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                You&apos;re tracking {currentCount} of {limit} competitors
              </h3>
              <p className="mt-0.5 text-sm text-gray-600">
                {upgrade
                  ? <>Upgrade to {upgrade.nextPlan} for {upgrade.competitors} competitors, {upgrade.extras}.</>
                  : <>You&apos;ve reached the maximum for your plan.</>}
              </p>
            </div>
          </div>

          <TrackedCTA
            href="/pricing"
            event="upgrade-cta-clicked"
            eventProps={{ source: "competitors-limit", current_plan: plan }}
            className="inline-flex shrink-0 items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            {upgrade ? `Upgrade to ${upgrade.nextPlan}` : "View plans"}
          </TrackedCTA>
        </div>
      </div>
    );
  }

  // EXPERIMENT (ticket 39f8): Pre-limit nudge — show softer Pro CTA when user
  // has one slot left (e.g., 1 of 2 used on FREE). Distinct from atLimit block:
  // this renders ABOVE the add form so the user can still add their last slot.
  const upgrade = UPGRADE_INFO[plan];
  const showPreLimitNudge = !atLimit && upgrade !== undefined && limit > 0 && currentCount === limit - 1;

  return (
    <>
      {showPreLimitNudge && (
        <div
          className="mb-4 overflow-hidden rounded-xl border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-amber-50 p-4 sm:p-5"
          data-testid="pre-limit-nudge"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <svg className="h-4.5 w-4.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  One slot left on {plan}
                </h3>
                <p className="mt-0.5 text-sm text-gray-600">
                  Upgrade to {upgrade.nextPlan} now for {upgrade.competitors} competitors and {upgrade.extras} — keep your momentum going.
                </p>
              </div>
            </div>

            <TrackedCTA
              href="/pricing"
              event="upgrade-cta-clicked"
              eventProps={{ source: "competitors-pre-limit", current_plan: plan }}
              className="inline-flex shrink-0 items-center rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm hover:bg-brand-50"
            >
              See {upgrade.nextPlan} plan
            </TrackedCTA>
          </div>
        </div>
      )}

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
    </>
  );
}
