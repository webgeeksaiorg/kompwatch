"use client";

import { useState } from "react";

type ExportFormat = "csv" | "pdf";

export function ExportDigestButton({
  digestId,
  format = "csv",
}: {
  digestId: string;
  format?: ExportFormat;
}) {
  const [loading, setLoading] = useState(false);

  async function handleExport() {
    setLoading(true);
    try {
      const params = new URLSearchParams({ digestId, format });
      const res = await fetch(`/api/export/digests?${params}`);
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download =
        res.headers
          .get("Content-Disposition")
          ?.match(/filename="(.+)"/)?.[1] ?? `digest.${format}`;
      a.click();
      URL.revokeObjectURL(a.href);
    } finally {
      setLoading(false);
    }
  }

  const label = format === "pdf" ? "PDF" : "CSV";

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50"
    >
      {loading ? "..." : label}
    </button>
  );
}
