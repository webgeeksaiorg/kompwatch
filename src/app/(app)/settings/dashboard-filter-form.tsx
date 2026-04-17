"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SEVERITY_OPTIONS = [
  { value: "LOW", label: "Low", description: "Show all changes" },
  { value: "MEDIUM", label: "Medium", description: "Hide low-severity noise (blog posts, minor updates)" },
  { value: "HIGH", label: "High", description: "Only pricing changes, major launches, and above" },
  { value: "CRITICAL", label: "Critical", description: "Only pivots, acquisitions, shutdown signals" },
] as const;

export function DashboardFilterForm({
  initialMinSeverity,
}: {
  initialMinSeverity: string;
}) {
  const router = useRouter();
  const [minSeverity, setMinSeverity] = useState(initialMinSeverity);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(value: string) {
    setMinSeverity(value);
    setSaving(true);
    setError("");
    setSaved(false);

    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dashboardMinSeverity: value }),
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

      {(saved || error) && (
        <div className="text-sm">
          {saved && <span className="text-green-600">Saved</span>}
          {error && <span className="text-red-600">{error}</span>}
        </div>
      )}
    </div>
  );
}
