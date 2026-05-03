"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
type PlanTier = "FREE" | "PRO" | "TEAM";

export function WebhookForm({
  initialUrl,
  initialEnabled,
  initialInstantEnabled,
  initialInstantMinSeverity,
  plan,
}: {
  initialUrl: string | null;
  initialEnabled: boolean;
  initialInstantEnabled: boolean;
  initialInstantMinSeverity: Severity;
  plan: PlanTier;
}) {
  const router = useRouter();
  const [url, setUrl] = useState(initialUrl ?? "");
  const [enabled, setEnabled] = useState(initialEnabled);
  const [instantEnabled, setInstantEnabled] = useState(initialInstantEnabled);
  const [instantMinSeverity, setInstantMinSeverity] = useState<Severity>(
    initialInstantMinSeverity
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<
    { ok: true } | { ok: false; error: string } | null
  >(null);

  const webhooksAllowed = plan !== "FREE";
  const instantAlertsAllowed = plan === "TEAM";

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

  function handleInstantToggle() {
    const next = !instantEnabled;
    setInstantEnabled(next);
    save({ instantAlertsEnabled: next });
  }

  function handleInstantSeverityChange(next: Severity) {
    setInstantMinSeverity(next);
    save({ instantAlertMinSeverity: next });
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

  async function handleTest() {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Save a webhook URL first, then send a test.");
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch("/api/webhooks/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      const data = await res.json();
      if (res.ok) {
        setTestResult({ ok: true });
      } else {
        setTestResult({ ok: false, error: data.error ?? "Test failed." });
      }
    } catch {
      setTestResult({ ok: false, error: "Network error." });
    } finally {
      setTesting(false);
      setTimeout(() => setTestResult(null), 4000);
    }
  }

  const platform = detectPlatform(url);

  if (!webhooksAllowed) {
    return (
      <div className="rounded-lg border border-brand-200 bg-brand-50 p-4">
        <p className="text-sm font-medium text-brand-900">
          Slack &amp; Teams alerts are a paid feature
        </p>
        <p className="mt-1 text-xs text-brand-800">
          Upgrade to Pro to deliver digests to your team channel, or to Team for
          real-time alerts the moment a competitor changes pricing.
        </p>
        <a
          href="/pricing"
          className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          See plans
        </a>
      </div>
    );
  }

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
            <button
              type="button"
              onClick={handleTest}
              disabled={testing || !url.trim()}
              className="shrink-0 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {testing ? "Testing..." : "Send test"}
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

      {/* Test result */}
      {testResult && (
        <div className="text-sm">
          {testResult.ok ? (
            <span className="text-green-600">Test message sent. Check your channel.</span>
          ) : (
            <span className="text-red-600">Test failed: {testResult.error}</span>
          )}
        </div>
      )}

      {/* Instant alerts (Team tier) */}
      <div className="border-t border-gray-100 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">Real-time alerts</p>
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                Team
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Push individual changes to Slack the moment they're detected — don't wait for the daily digest.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={instantEnabled}
            onClick={instantAlertsAllowed ? handleInstantToggle : undefined}
            disabled={!instantAlertsAllowed || saving || !enabled || !url.trim()}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              instantEnabled && instantAlertsAllowed ? "bg-brand-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                instantEnabled && instantAlertsAllowed ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {!instantAlertsAllowed ? (
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs text-amber-900">
              Real-time alerts are a Team-tier feature. <a href="/pricing" className="font-medium underline">Upgrade to Team</a> to push high-severity changes to Slack as they happen.
            </p>
          </div>
        ) : (
          <div className="mt-3">
            <label htmlFor="instantMinSeverity" className="block text-xs font-medium text-gray-700">
              Alert severity threshold
            </label>
            <p className="mb-2 text-xs text-gray-500">
              Only changes at or above this severity trigger an instant alert.
            </p>
            <select
              id="instantMinSeverity"
              value={instantMinSeverity}
              onChange={(e) => handleInstantSeverityChange(e.target.value as Severity)}
              disabled={!instantEnabled || saving}
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 disabled:opacity-50 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option value="CRITICAL">Critical only (pivots, acquisitions)</option>
              <option value="HIGH">High and above (pricing, major features) — recommended</option>
              <option value="MEDIUM">Medium and above (new features, jobs)</option>
              <option value="LOW">All changes (noisy)</option>
            </select>
          </div>
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

function detectPlatform(url: string): "slack" | "teams" | "generic" {
  if (url.includes("hooks.slack.com") || url.includes("slack.com/api")) return "slack";
  if (url.includes("webhook.office.com") || url.includes("microsoft.com")) return "teams";
  return "generic";
}
