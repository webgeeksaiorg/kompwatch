"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SEVERITY_OPTIONS = [
  { value: "LOW", label: "Low", description: "All changes (blog posts, minor updates)" },
  { value: "MEDIUM", label: "Medium", description: "New features, job listings, and above" },
  { value: "HIGH", label: "High", description: "Pricing changes, major launches only" },
  { value: "CRITICAL", label: "Critical", description: "Pivots, acquisitions, shutdown signals only" },
] as const;

export function NotificationPrefsForm({
  initialEnabled,
  initialMinSeverity,
  digestFrequency,
  initialInstantPricingEnabled,
  plan,
}: {
  initialEnabled: boolean;
  initialMinSeverity: string;
  digestFrequency: string;
  initialInstantPricingEnabled: boolean;
  plan: "FREE" | "PRO" | "TEAM";
}) {
  const router = useRouter();
  const [enabled, setEnabled] = useState(initialEnabled);
  const [minSeverity, setMinSeverity] = useState(initialMinSeverity);
  const [instantPricing, setInstantPricing] = useState(
    initialInstantPricingEnabled,
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const planAllowsInstantPricing = plan === "PRO" || plan === "TEAM";

  async function save(updates: Record<string, unknown>) {
    setSaving(true);
    setError("");
    setSaved(false);

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(typeof data.error === "string" ? data.error : "Failed to save.");
        return;
      }

      setSaved(true);
      router.refresh();
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleToggle() {
    const next = !enabled;
    setEnabled(next);
    save({ digestEnabled: next });
  }

  function handleSeverityChange(value: string) {
    setMinSeverity(value);
    save({ digestMinSeverity: value });
  }

  function handleInstantPricingToggle() {
    const next = !instantPricing;
    setInstantPricing(next);
    save({ instantPricingAlertsEnabled: next });
  }

  return (
    <div className="space-y-5">
      {/* Digest toggle */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Email digests</p>
          <p className="text-xs text-gray-500">
            Receive {digestFrequency.toLowerCase()} email summaries of competitor changes.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={handleToggle}
          disabled={saving}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 ${
            enabled ? "bg-brand-600" : "bg-gray-200"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
              enabled ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Severity threshold */}
      {enabled && (
        <div>
          <p className="text-sm font-medium text-gray-900">Minimum severity</p>
          <p className="mb-3 text-xs text-gray-500">
            Only include changes at or above this severity level in your digest.
          </p>
          <div className="space-y-2">
            {SEVERITY_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center rounded-lg border p-3 transition-colors ${
                  minSeverity === opt.value
                    ? "border-brand-500 bg-brand-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="minSeverity"
                  value={opt.value}
                  checked={minSeverity === opt.value}
                  onChange={() => handleSeverityChange(opt.value)}
                  className="sr-only"
                />
                <div>
                  <span className="text-sm font-medium text-gray-900">{opt.label}</span>
                  <span className="ml-2 text-xs text-gray-500">{opt.description}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Instant pricing alerts (Pro+ only) */}
      <div className="border-t border-gray-100 pt-5">
        <div className="flex items-center justify-between">
          <div className="pr-4">
            <p className="text-sm font-medium text-gray-900">
              Instant pricing alerts
              {!planAllowsInstantPricing && (
                <span className="ml-2 inline-block rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
                  Pro
                </span>
              )}
            </p>
            <p className="text-xs text-gray-500">
              Email me the moment we detect a competitor pricing change
              (medium severity or higher), without waiting for the next digest.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={planAllowsInstantPricing && instantPricing}
            aria-label="Instant pricing alerts"
            onClick={handleInstantPricingToggle}
            disabled={saving || !planAllowsInstantPricing}
            title={
              planAllowsInstantPricing
                ? undefined
                : "Upgrade to Pro to enable instant pricing alerts"
            }
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              planAllowsInstantPricing && instantPricing
                ? "bg-brand-600"
                : "bg-gray-200"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                planAllowsInstantPricing && instantPricing
                  ? "translate-x-5"
                  : "translate-x-0"
              }`}
            />
          </button>
        </div>
        {!planAllowsInstantPricing && (
          <p className="mt-2 text-xs text-gray-500">
            Available on the Pro and Team plans.
          </p>
        )}
      </div>

      {/* Status messages */}
      {(saved || error) && (
        <div className="text-sm">
          {saved && <span className="text-green-600">Saved</span>}
          {error && <span className="text-red-600">{error}</span>}
        </div>
      )}
    </div>
  );
}
