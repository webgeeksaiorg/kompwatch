"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function WebhookForm({
  initialUrl,
  initialEnabled,
}: {
  initialUrl: string | null;
  initialEnabled: boolean;
}) {
  const router = useRouter();
  const [url, setUrl] = useState(initialUrl ?? "");
  const [enabled, setEnabled] = useState(initialEnabled);
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

  function handleToggle() {
    const next = !enabled;
    setEnabled(next);
    save({ webhookEnabled: next });
  }

  function handleSaveUrl(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (trimmed && !trimmed.startsWith("https://")) {
      setError("Webhook URL must use HTTPS.");
      return;
    }
    save({ webhookUrl: trimmed || null, webhookEnabled: !!trimmed && enabled });
  }

  const platform = detectPlatform(url);

  return (
    <div className="space-y-5">
      {/* Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Webhook notifications</p>
          <p className="text-xs text-gray-500">
            Send change alerts to Slack, Teams, or a custom endpoint.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={handleToggle}
          disabled={saving || !url.trim()}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 ${
            enabled && url.trim() ? "bg-brand-600" : "bg-gray-200"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
              enabled && url.trim() ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* URL input */}
      <form onSubmit={handleSaveUrl} className="space-y-3">
        <div>
          <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-900">
            Webhook URL
          </label>
          <p className="mb-2 text-xs text-gray-500">
            Paste your incoming webhook URL. We auto-detect Slack and Teams.
          </p>
          <div className="flex gap-2">
            <input
              id="webhookUrl"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://hooks.slack.com/services/..."
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
            <button
              type="submit"
              disabled={saving}
              className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        {/* Platform badge */}
        {url.trim() && (
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                platform === "slack"
                  ? "bg-purple-100 text-purple-800"
                  : platform === "teams"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
              }`}
            >
              {platform === "slack" ? "Slack" : platform === "teams" ? "Microsoft Teams" : "Custom webhook"}
            </span>
            <span className="text-xs text-gray-500">detected</span>
          </div>
        )}
      </form>

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

function detectPlatform(url: string): "slack" | "teams" | "generic" {
  if (url.includes("hooks.slack.com") || url.includes("slack.com/api")) return "slack";
  if (url.includes("webhook.office.com") || url.includes("microsoft.com")) return "teams";
  return "generic";
}
