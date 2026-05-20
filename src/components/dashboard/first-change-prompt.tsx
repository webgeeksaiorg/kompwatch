"use client";

import { useEffect, useState } from "react";
import { TrackedCTA } from "@/components/tracked-cta";

const DISMISS_KEY = "kw:first-change-prompt-dismissed";

interface FirstChangePromptProps {
  totalChanges: number;
}

/**
 * Celebratory upgrade prompt shown to free-plan users when their first
 * competitor change is detected. Dismissable via localStorage.
 * Fires `first-change-upgrade-shown` Plausible event on first render.
 */
export function FirstChangePrompt({ totalChanges }: FirstChangePromptProps) {
  const [dismissed, setDismissed] = useState(true); // default hidden to avoid flash

  useEffect(() => {
    const wasDismissed = localStorage.getItem(DISMISS_KEY) === "1";
    setDismissed(wasDismissed);
    if (!wasDismissed) {
      window.plausible?.("first-change-upgrade-shown", {
        props: { total_changes: String(totalChanges) },
      });
    }
  }, [totalChanges]);

  if (dismissed) return null;

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-brand-50 p-5 sm:p-6">
      <button
        onClick={() => {
          localStorage.setItem(DISMISS_KEY, "1");
          setDismissed(true);
        }}
        className="absolute top-3 right-3 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Dismiss"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Your first competitor change detected!
            </h3>
            <p className="mt-0.5 text-sm text-gray-600">
              KompWatch is working. Upgrade to Pro for 10 competitors, daily digests, and real-time Slack/Teams alerts.
            </p>
          </div>
        </div>

        <TrackedCTA
          href="/pricing"
          event="upgrade-cta-clicked"
          eventProps={{ source: "first-change-prompt" }}
          className="inline-flex shrink-0 items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          See upgrade plans
        </TrackedCTA>
      </div>
    </div>
  );
}
