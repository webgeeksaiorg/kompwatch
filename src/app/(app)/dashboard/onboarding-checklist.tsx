"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  completed: boolean;
  href: string;
  cta: string;
}

const STORAGE_KEY = "kw:onboarding-checklist-dismissed";

function trackEvent(event: string, props?: Record<string, string>) {
  if (typeof window !== "undefined") {
    window.plausible?.(event, props ? { props } : undefined);
  }
}

export function OnboardingChecklist({
  competitorCount,
  hasCustomSeverity,
  hasWebhook,
  hasDigest,
  userPlan,
}: {
  competitorCount: number;
  hasCustomSeverity: boolean;
  hasWebhook: boolean;
  hasDigest: boolean;
  userPlan: string;
}) {
  const [dismissed, setDismissed] = useState(true); // default hidden to avoid flash
  const [celebrating, setCelebrating] = useState(false);

  // Build checklist items based on user state
  const items: ChecklistItem[] = [
    {
      id: "competitor",
      label: "Add your first competitor",
      description: "Paste a URL to start monitoring pricing, features, and more.",
      completed: competitorCount >= 1,
      href: "/competitors",
      cta: "Add competitor",
    },
    {
      id: "second-competitor",
      label: "Add a second competitor",
      description:
        "Cross-competitor insights are 3x more valuable. Compare trends side by side.",
      completed: competitorCount >= 2,
      href: "/competitors",
      cta: "Add another",
    },
    {
      id: "severity",
      label: "Customize your alert threshold",
      description:
        "Filter out noise — choose which severity of changes land in your digest.",
      completed: hasCustomSeverity,
      href: "/settings",
      cta: "Configure alerts",
    },
    {
      id: "digest",
      label: "Receive your first digest",
      description:
        "Your AI-powered competitive summary is delivered automatically — check your inbox.",
      completed: hasDigest,
      href: "/digests",
      cta: "View digests",
    },
    // Only show webhook step for Pro+ users who can actually use it
    ...(userPlan !== "FREE"
      ? [
          {
            id: "webhook",
            label: "Connect Slack or Teams",
            description:
              "Get real-time alerts via webhook when competitors make changes.",
            completed: hasWebhook,
            href: "/settings",
            cta: "Set up webhook",
          },
        ]
      : []),
  ];

  const completedCount = items.filter((i) => i.completed).length;
  const allDone = completedCount === items.length;
  const progress = Math.round((completedCount / items.length) * 100);

  // Load dismissed state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setDismissed(true);
    } else {
      setDismissed(false);
    }
  }, []);

  // Track milestone events when progress changes
  useEffect(() => {
    if (completedCount > 0) {
      trackEvent("onboarding-checklist-progress", {
        completed: String(completedCount),
        total: String(items.length),
        percent: String(progress),
      });
    }
    if (allDone) {
      trackEvent("onboarding-checklist-complete");
      setCelebrating(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [completedCount]); // intentionally track only completedCount changes

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
    trackEvent("onboarding-checklist-dismissed", {
      completed: String(completedCount),
      total: String(items.length),
    });
  }, [completedCount, items.length]);

  if (dismissed && !celebrating) return null;

  // Celebration state — shown briefly when all items complete
  if (allDone && celebrating) {
    return (
      <div className="mb-8 rounded-lg border border-green-200 bg-green-50/60 p-5 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-900">
          Setup complete!
        </p>
        <p className="mt-0.5 text-xs text-gray-500">
          You&apos;re getting the most out of KompWatch. Happy monitoring!
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8 rounded-lg border border-brand-200 bg-brand-50/50 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Get started with KompWatch
          </h2>
          <p className="mt-0.5 text-xs text-gray-500">
            Complete these steps to get the most out of competitor monitoring.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Dismiss checklist"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 flex items-center gap-3">
        <div className="h-2 flex-1 rounded-full bg-brand-100">
          <div
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              progress === 100
                ? "bg-green-500"
                : progress >= 60
                  ? "bg-brand-600"
                  : "bg-brand-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-semibold tabular-nums text-gray-600">
          {completedCount}/{items.length}
        </span>
      </div>

      {/* Checklist items */}
      <div className="mt-4 space-y-2">
        {items.map((item, idx) => {
          // Determine if this is the next action (first incomplete item)
          const isNextAction =
            !item.completed &&
            items.slice(0, idx).every((prev) => prev.completed);

          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 rounded-md border px-3 py-2.5 transition-colors ${
                item.completed
                  ? "border-gray-100 bg-white/50"
                  : isNextAction
                    ? "border-brand-200 bg-white ring-1 ring-brand-100"
                    : "border-gray-200 bg-white"
              }`}
            >
              {/* Checkbox icon */}
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${
                  item.completed
                    ? "bg-brand-600"
                    : isNextAction
                      ? "border-2 border-brand-400"
                      : "border-2 border-gray-300"
                }`}
              >
                {item.completed && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-medium ${
                    item.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-900"
                  }`}
                >
                  {item.label}
                </p>
                {!item.completed && (
                  <p className="text-xs text-gray-500">{item.description}</p>
                )}
              </div>

              {!item.completed && (
                <Link
                  href={item.href}
                  onClick={() =>
                    trackEvent("onboarding-checklist-cta-clicked", {
                      step: item.id,
                    })
                  }
                  className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-medium text-white ${
                    isNextAction
                      ? "bg-brand-600 hover:bg-brand-700"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                >
                  {item.cta}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
