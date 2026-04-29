"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CompetitorData = {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
  createdAt: Date;
  trackPricing: boolean;
  trackBlog: boolean;
  trackFeatures: boolean;
  trackJobs: boolean;
  trackTech: boolean;
  _count: { snapshots: number; changes: number };
  changes: { createdAt: Date; summary: string; changeType: string; severity: string }[];
};

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

export function CompetitorRow({ competitor }: { competitor: CompetitorData }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const lastChange = competitor.changes[0];

  async function handleDelete() {
    if (!confirm(`Remove "${competitor.name}" and all its data?`)) return;
    setDeleting(true);
    await fetch(`/api/competitors/${competitor.id}`, { method: "DELETE" });
    router.refresh();
  }

  async function handleToggle() {
    await fetch(`/api/competitors/${competitor.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !competitor.isActive }),
    });
    router.refresh();
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-5 py-4">
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-2 w-2 shrink-0 rounded-full ${competitor.isActive ? "bg-green-500" : "bg-gray-300"}`}
              title={competitor.isActive ? "Active" : "Paused"}
            />
            <a href={`/competitors/${competitor.id}`} className="truncate text-sm font-semibold text-gray-900 hover:text-brand-600">
              {competitor.name}
            </a>
            <a
              href={competitor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden truncate text-xs text-gray-400 hover:text-brand-600 sm:inline"
            >
              {competitor.url.replace(/^https?:\/\//, "")}
            </a>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>{competitor._count.snapshots} snapshots</span>
            <span>{competitor._count.changes} changes</span>
            {lastChange && (
              <span className="flex items-center gap-1">
                Latest:
                <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${SEVERITY_COLORS[lastChange.severity] || SEVERITY_COLORS.LOW}`}>
                  {CHANGE_TYPE_LABELS[lastChange.changeType] || lastChange.changeType}
                </span>
                <span className="max-w-[140px] truncate sm:max-w-[200px]">{lastChange.summary}</span>
              </span>
            )}
          </div>
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            onClick={handleToggle}
            className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            {competitor.isActive ? "Pause" : "Resume"}
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="rounded px-2 py-1 text-xs text-red-500 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
          >
            {deleting ? "Removing…" : "Remove"}
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {[
          { key: "trackPricing", label: "Pricing" },
          { key: "trackFeatures", label: "Features" },
          { key: "trackBlog", label: "Blog" },
          { key: "trackJobs", label: "Jobs" },
          { key: "trackTech", label: "Tech" },
        ].map(({ key, label }) => (
          <span
            key={key}
            className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
              competitor[key as keyof CompetitorData]
                ? "bg-brand-50 text-brand-700"
                : "bg-gray-50 text-gray-400 line-through"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
