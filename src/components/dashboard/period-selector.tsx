"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const PERIODS = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
] as const;

export function PeriodSelector({ activePeriod }: { activePeriod: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setPeriod = useCallback(
    (period: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("period", period);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  return (
    <div className="flex items-center gap-1">
      {PERIODS.map((p) => (
        <button
          key={p.value}
          onClick={() => setPeriod(p.value)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
            activePeriod === p.value
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}
