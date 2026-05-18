"use client";

import { useEffect, useState } from "react";

interface Delivery {
  id: string;
  createdAt: string;
  eventType: "DIGEST" | "INSTANT_ALERT" | "TEST";
  platform: string;
  success: boolean;
  httpStatus: number | null;
  errorMessage: string | null;
  retryCount: number;
}

const EVENT_LABELS: Record<string, string> = {
  DIGEST: "Digest",
  INSTANT_ALERT: "Alert",
  TEST: "Test",
};

const PLATFORM_LABELS: Record<string, string> = {
  slack: "Slack",
  teams: "Teams",
  generic: "Webhook",
};

export function WebhookDeliveryLog() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/webhooks/deliveries")
      .then((r) => r.json())
      .then((data) => setDeliveries(data.deliveries ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mt-4 text-xs text-gray-400">Loading delivery history...</div>
    );
  }

  if (deliveries.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
        <p className="text-xs text-gray-500">
          No webhook deliveries yet. Send a test or wait for the next digest to see delivery status here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-medium text-gray-700">Recent deliveries</p>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-3 py-2 text-left font-medium text-gray-500">Status</th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">Type</th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">Platform</th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">Time</th>
              <th className="px-3 py-2 text-left font-medium text-gray-500">Details</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((d) => (
              <tr key={d.id} className="border-b border-gray-50 last:border-0">
                <td className="px-3 py-2">
                  {d.success ? (
                    <span className="inline-flex items-center gap-1 text-green-700">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                      OK
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-700">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                      Failed
                    </span>
                  )}
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {EVENT_LABELS[d.eventType] ?? d.eventType}
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {PLATFORM_LABELS[d.platform] ?? d.platform}
                </td>
                <td className="px-3 py-2 text-gray-500">
                  {formatTimeAgo(d.createdAt)}
                </td>
                <td className="px-3 py-2 text-gray-500">
                  {d.success
                    ? d.httpStatus
                      ? `${d.httpStatus}`
                      : ""
                    : d.errorMessage ?? "Unknown error"}
                  {d.retryCount > 0 && (
                    <span className="ml-1 text-amber-600">
                      ({d.retryCount} {d.retryCount === 1 ? "retry" : "retries"})
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
