"use client";

import { useState } from "react";
import Link from "next/link";

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  completed: boolean;
  href: string;
  cta: string;
}

export function OnboardingChecklist({
  hasCompetitor,
  hasCustomSeverity,
  hasWebhook,
}: {
  hasCompetitor: boolean;
  hasCustomSeverity: boolean;
  hasWebhook: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);

  const items: ChecklistItem[] = [
    {
      id: "competitor",
      label: "Add your first competitor",
      description: "Paste a URL to start monitoring pricing, features, and more.",
      completed: hasCompetitor,
      href: "/competitors",
      cta: "Add competitor",
    },
    {
      id: "severity",
      label: "Set your alert threshold",
      description: "Choose which severity of changes you want in your digest.",
      completed: hasCustomSeverity,
      href: "/settings",
      cta: "Configure alerts",
    },
    {
      id: "webhook",
      label: "Connect Slack or Teams",
      description: "Get real-time alerts via webhook when competitors change.",
      completed: hasWebhook,
      href: "/settings",
      cta: "Set up webhook",
    },
  ];

  const completedCount = items.filter((i) => i.completed).length;
  const allDone = completedCount === items.length;

  if (dismissed || allDone) return null;

  const progress = Math.round((completedCount / items.length) * 100);

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
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Dismiss checklist"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 flex items-center gap-3">
        <div className="h-1.5 flex-1 rounded-full bg-brand-100">
          <div
            className="h-1.5 rounded-full bg-brand-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-medium text-gray-500">
          {completedCount}/{items.length}
        </span>
      </div>

      {/* Checklist items */}
      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 rounded-md border px-3 py-2.5 ${
              item.completed
                ? "border-gray-100 bg-white/50"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Checkbox icon */}
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                item.completed
                  ? "bg-brand-600"
                  : "border-2 border-gray-300"
              }`}
            >
              {item.completed && (
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium ${
                  item.completed ? "text-gray-400 line-through" : "text-gray-900"
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
                className="shrink-0 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700"
              >
                {item.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
