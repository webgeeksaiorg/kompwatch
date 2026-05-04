"use client";

import { useState } from "react";

type DayData = {
  date: string; // YYYY-MM-DD
  count: number;
};

type Props = {
  data: DayData[];
  weeks?: number;
};

const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getColor(count: number): string {
  if (count === 0) return "bg-gray-100";
  if (count <= 2) return "bg-brand-200";
  if (count <= 5) return "bg-brand-400";
  if (count <= 10) return "bg-brand-600";
  return "bg-brand-800";
}

function getLegendColors(): { className: string; label: string }[] {
  return [
    { className: "bg-gray-100", label: "0" },
    { className: "bg-brand-200", label: "1–2" },
    { className: "bg-brand-400", label: "3–5" },
    { className: "bg-brand-600", label: "6–10" },
    { className: "bg-brand-800", label: "11+" },
  ];
}

export function ActivityHeatmap({ data, weeks = 26 }: Props) {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  // Build a map of date -> count
  const countMap = new Map<string, number>();
  for (const d of data) {
    countMap.set(d.date, d.count);
  }

  // Build grid: columns = weeks, rows = days (Mon-Sun)
  // Start from today and go back `weeks` weeks
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon, ...
  // Adjust so Monday=0
  const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // End of current week (Sunday)
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + (6 - adjustedDay));

  // Start date: go back (weeks - 1) full weeks from the start of current week
  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - weeks * 7 + 1);

  const grid: { date: string; count: number; isFuture: boolean }[][] = [];

  const cursor = new Date(startDate);
  for (let w = 0; w < weeks; w++) {
    const week: { date: string; count: number; isFuture: boolean }[] = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = cursor.toISOString().slice(0, 10);
      const isFuture = cursor > today;
      week.push({
        date: dateStr,
        count: countMap.get(dateStr) ?? 0,
        isFuture,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    grid.push(week);
  }

  // Compute month labels
  const monthLabels: { label: string; colIndex: number }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < grid.length; w++) {
    const firstDay = new Date(grid[w][0].date);
    const month = firstDay.getMonth();
    if (month !== lastMonth) {
      monthLabels.push({ label: MONTHS[month], colIndex: w });
      lastMonth = month;
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Activity
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <span>Less</span>
          {getLegendColors().map((c) => (
            <div
              key={c.label}
              className={`h-2.5 w-2.5 rounded-sm ${c.className}`}
              title={c.label}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        {/* Month labels */}
        <div className="flex" style={{ paddingLeft: 28 }}>
          {monthLabels.map((m, i) => {
            const nextCol =
              i + 1 < monthLabels.length
                ? monthLabels[i + 1].colIndex
                : grid.length;
            const span = nextCol - m.colIndex;
            return (
              <div
                key={`${m.label}-${m.colIndex}`}
                className="text-[10px] text-gray-400"
                style={{ width: span * 14 }}
              >
                {m.label}
              </div>
            );
          })}
        </div>

        <div className="flex gap-0">
          {/* Day labels */}
          <div className="flex shrink-0 flex-col gap-[2px] pr-1.5 pt-0">
            {DAYS.map((label, i) => (
              <div
                key={i}
                className="flex h-[10px] items-center text-[10px] leading-none text-gray-400"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-[2px]">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[2px]">
                {week.map((day, di) => (
                  <div
                    key={day.date}
                    className={`h-[10px] w-[10px] rounded-sm ${
                      day.isFuture
                        ? "bg-transparent"
                        : getColor(day.count)
                    } ${!day.isFuture ? "cursor-pointer" : ""}`}
                    onMouseEnter={(e) => {
                      if (day.isFuture) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parentRect =
                        e.currentTarget
                          .closest(".relative")
                          ?.getBoundingClientRect() ?? rect;
                      setTooltip({
                        text: `${day.count} change${day.count !== 1 ? "s" : ""} on ${day.date}`,
                        x: rect.left - parentRect.left + 5,
                        y: rect.top - parentRect.top - 28,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 rounded bg-gray-900 px-2 py-1 text-[10px] text-white whitespace-nowrap shadow-md"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
}
