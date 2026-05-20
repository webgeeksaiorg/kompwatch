"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SEVERITY_OPTIONS = [
  { value: "LOW", label: "Low", description: "Show all changes" },
  { value: "MEDIUM", label: "Medium", description: "Hide low-severity noise (blog posts, minor updates)" },
  { value: "HIGH", label: "High", description: "Only pricing changes, major launches, and above" },
  { value: "CRITICAL", label: "Critical", description: "Only pivots, acquisitions, shutdown signals" },
] as const;

const SIGNAL_SCORE_OPTIONS = [
  { value: 0, label: "All", description: "Show all changes (no signal filtering)" },
  { value: 0.4, label: "Skip noise", description: "Hide low-confidence noise (score < 40%)" },
  { value: 0.6, label: "Moderate+", description: "Only moderate-to-strong signals (score >= 60%)" },
  { value: 0.8, label: "Strong only", description: "Only high-confidence, actionable changes (score >= 80%)" },
] as const;

export function DashboardFilterForm({
  initialMinSeverity,
  initialMinSignalScore,
}: {
  initialMinSeverity: string;
  initialMinSignalScore: number;
}) {
  const router = useRouter();
  const [minSeverity, setMinSeverity] = useState(initialMinSeverity);
  const [minSignalScore, setMinSignalScore] = useState(initialMinSignalScore);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

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

  function handleChange(value: string) {
    setMinSeverity(value);
    save({ dashboardMinSeverity: value });
  }

  function handleSignalScoreChange(value: number) {
    setMinSignalScore(value);
    save({ dashboardMinSignalScore: value });
  }

  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm font-medium text-gray-900">Minimum severity</p>
        <p className="mb-3 text-xs text-gray-500">
          Only show changes at or above this severity on your dashboard timeline.
        </p>
      </div>
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
              name="dashboardMinSeverity"
              value={opt.value}
              checked={minSeverity === opt.value}
              onChange={() => handleChange(opt.value)}
              disabled={saving}
              className="sr-only"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">{opt.label}</span>
              <span className="ml-2 text-xs text-gray-500">{opt.description}</span>
            </div>
          </label>
        ))}
      </div>

      {/* Signal score filter */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm font-medium text-gray-900">Signal score filter</p>
        <p className="mb-3 text-xs text-gray-500">
          AI confidence weighting — filter out noisy or low-confidence changes from your dashboard.
        </p>
        <div className="space-y-2">
          {SIGNAL_SCORE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center rounded-lg border p-3 transition-colors ${
                minSignalScore === opt.value
                  ? "border-brand-500 bg-brand-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="dashboardMinSignalScore"
                value={opt.value}
                checked={minSignalScore === opt.value}
                onChange={() => handleSignalScoreChange(opt.value)}
                disabled={saving}
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

      {(saved || error) && (
        <div className="text-sm">
          {saved && <span className="text-green-600">Saved</span>}
          {error && <span className="text-red-600">{error}</span>}
        </div>
      )}
    </div>
  );
}
