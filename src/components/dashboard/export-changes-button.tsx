"use client";

import { useState } from "react";

type ExportFormat = "csv" | "json";

export interface ExportFilters {
  /** Period window matching the history page (7d/30d/90d/all). */
  period?: string;
  /** Multi-select content zones. */
  zones?: string[];
  /** Multi-select change types. */
  changeTypes?: string[];
  /** Multi-select competitor IDs (used by /history). */
  competitorIds?: string[];
  /** Explicit severity floor override. */
  minSeverity?: string;
}

export function ExportChangesButton({
  competitorId,
  format = "csv",
  filters,
}: {
  /** Legacy single-competitor scoping (used by /competitors/[id]). */
  competitorId?: string;
  format?: ExportFormat;
  /** Multi-value filters (used by /history). */
  filters?: ExportFilters;
}) {
  const [loading, setLoading] = useState(false);

  async function handleExport() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (competitorId) params.set("competitorId", competitorId);
      if (format !== "csv") params.set("format", format);
      if (filters?.period) params.set("period", filters.period);
      if (filters?.minSeverity) params.set("minSeverity", filters.minSeverity);
      filters?.zones?.forEach((z) => params.append("zone", z));
      filters?.changeTypes?.forEach((t) => params.append("changeType", t));
      filters?.competitorIds?.forEach((id) => params.append("competitor", id));
      const url = `/api/export/changes${params.toString() ? `?${params}` : ""}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download =
        res.headers
          .get("Content-Disposition")
          ?.match(/filename="(.+)"/)?.[1] ?? `changes.${format}`;
      a.click();
      URL.revokeObjectURL(a.href);
    } finally {
      setLoading(false);
    }
  }

  const label = format === "json" ? "Export JSON" : "Export CSV";
  const loadingLabel = "Exporting...";

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {loading ? loadingLabel : label}
    </button>
  );
}
