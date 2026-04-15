"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BulkResult {
  added: number;
  skipped: { name: string; url: string; reason: string }[];
}

export function BulkImportForm({
  atLimit,
  remaining,
  plan,
}: {
  atLimit: boolean;
  remaining: number;
  plan: string;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<BulkResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function parseEntries(raw: string): { name: string; url: string }[] {
    return raw
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith("#"))
      .map((line) => {
        // Support CSV: "name,url" or "name, url"
        const parts = line.split(",").map((p) => p.trim());
        if (parts.length >= 2) {
          return { name: parts[0], url: parts[1] };
        }
        // Support tab-separated
        const tabParts = line.split("\t").map((p) => p.trim());
        if (tabParts.length >= 2) {
          return { name: tabParts[0], url: tabParts[1] };
        }
        return null;
      })
      .filter((e): e is { name: string; url: string } => e !== null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    const entries = parseEntries(input);
    if (entries.length === 0) {
      setError("No valid entries found. Use format: Company Name, https://example.com");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/competitors/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "Import failed.");
        return;
      }

      setResult(data);
      if (data.added > 0) {
        setInput("");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (atLimit) return null;

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-sm text-brand-600 hover:text-brand-700 font-medium"
      >
        {open ? "Hide bulk import" : "Import multiple competitors"}
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="mt-3 rounded-lg border border-gray-200 bg-white p-5"
        >
          <h2 className="mb-1 text-sm font-semibold text-gray-900">Bulk import</h2>
          <p className="mb-3 text-xs text-gray-500">
            Paste one competitor per line: <code className="bg-gray-100 px-1 rounded">Name, https://url.com</code>
            {" "}— up to {remaining} more allowed on your {plan} plan.
          </p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"Acme Corp, https://acme.com\nWidgetly, https://widgetly.io\nRival Inc, https://rival.com"}
            rows={5}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-mono placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {loading ? "Importing…" : "Import"}
            </button>
            {input.trim() && (
              <span className="text-xs text-gray-500">
                {parseEntries(input).length} entries detected
              </span>
            )}
          </div>

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          {result && (
            <div className="mt-3 rounded-md border border-green-200 bg-green-50 p-3">
              <p className="text-sm font-medium text-green-800">
                {result.added} competitor{result.added !== 1 ? "s" : ""} added.
              </p>
              {result.skipped.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {result.skipped.map((s, i) => (
                    <li key={i} className="text-xs text-amber-700">
                      Skipped {s.name}: {s.reason}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
