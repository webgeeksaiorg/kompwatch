"use client";

import { useState } from "react";
import { splitChangeDetails } from "@/lib/change-context";

const SEVERITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  CRITICAL: "bg-red-100 text-red-700",
};

const CHANGE_TYPE_LABELS: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech",
  GENERAL: "General",
};

export type DemoChange = {
  id: string;
  competitor: { name: string };
  changeType: string;
  severity: string;
  summary: string;
  details: string;
  pageUrl: string;
  createdAt: Date;
};

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

export function ExpandableChange({ change }: { change: DemoChange }) {
  const [expanded, setExpanded] = useState(false);
  const { factual, implication } = splitChangeDetails(change.details);
  const hasDetails = Boolean(factual) || Boolean(change.pageUrl);
  const sourcePath = change.pageUrl.replace(/^https?:\/\//, "");

  return (
    <div className="relative flex gap-4 pl-9">
      {/* Timeline dot */}
      <div
        className={`absolute left-[11px] top-2 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
          change.severity === "CRITICAL"
            ? "bg-red-500"
            : change.severity === "HIGH"
              ? "bg-orange-500"
              : change.severity === "MEDIUM"
                ? "bg-blue-500"
                : "bg-gray-400"
        }`}
      />

      <div className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-sm font-medium text-gray-900">
              {change.competitor.name}
            </span>
            <span
              className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                SEVERITY_COLORS[change.severity] || SEVERITY_COLORS.LOW
              }`}
            >
              {CHANGE_TYPE_LABELS[change.changeType] || change.changeType}
            </span>
            <span
              className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                SEVERITY_COLORS[change.severity] || SEVERITY_COLORS.LOW
              }`}
            >
              {change.severity}
            </span>
          </div>
          <span className="text-xs text-gray-400">{timeAgo(change.createdAt)}</span>
        </div>

        <p className="mt-1 text-sm text-gray-600">{change.summary}</p>

        {implication && (
          <div className="mt-2 rounded-md border-l-2 border-brand-300 bg-brand-50/60 px-2.5 py-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-700">
              Why this matters
            </p>
            <p className="mt-0.5 text-xs text-gray-700">{implication}</p>
          </div>
        )}

        {expanded && (
          <div className="mt-3 space-y-2 border-t border-gray-100 pt-2.5">
            {factual && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  What changed
                </p>
                <p className="mt-0.5 whitespace-pre-line text-xs text-gray-700">
                  {factual}
                </p>
              </div>
            )}
            {change.pageUrl && (
              <p className="text-xs text-gray-400">
                <span className="font-medium text-gray-500">Source:</span>{" "}
                <span className="font-mono text-gray-600">{sourcePath}</span>
                <span className="ml-2 text-[10px] italic text-gray-400">
                  (opens in your dashboard)
                </span>
              </p>
            )}
          </div>
        )}

        {hasDetails && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            {expanded ? "Hide details" : "Show details"}
            <span aria-hidden className="text-[10px]">
              {expanded ? "▲" : "▼"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
