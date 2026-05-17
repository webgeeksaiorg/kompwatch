"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const ZONES = [
  { value: "POSITIONING", label: "Positioning", className: "bg-purple-50 text-purple-700 border-purple-200" },
  { value: "MONETIZATION", label: "Monetization", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { value: "PRODUCT", label: "Product", className: "bg-sky-50 text-sky-700 border-sky-200" },
  { value: "MARKETING", label: "Marketing", className: "bg-pink-50 text-pink-700 border-pink-200" },
  { value: "TALENT", label: "Talent", className: "bg-amber-50 text-amber-700 border-amber-200" },
  { value: "LEGAL", label: "Legal", className: "bg-slate-100 text-slate-600 border-slate-300" },
  { value: "OPERATIONS", label: "Ops", className: "bg-teal-50 text-teal-700 border-teal-200" },
] as const;

export function ZoneFilter({ activeZones }: { activeZones: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleZone = useCallback(
    (zone: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.getAll("zone");

      if (current.includes(zone)) {
        // Remove this zone
        params.delete("zone");
        for (const z of current) {
          if (z !== zone) params.append("zone", z);
        }
      } else {
        params.append("zone", zone);
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const clearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("zone");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-medium text-gray-500 mr-1">Zone:</span>
      {ZONES.map((zone) => {
        const isActive = activeZones.includes(zone.value);
        return (
          <button
            key={zone.value}
            onClick={() => toggleZone(zone.value)}
            className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium transition-all ${
              isActive
                ? `${zone.className} ring-1 ring-current/20`
                : "border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            {zone.label}
          </button>
        );
      })}
      {activeZones.length > 0 && (
        <button
          onClick={clearAll}
          className="ml-1 text-[11px] text-gray-400 hover:text-gray-600 underline"
        >
          Clear
        </button>
      )}
    </div>
  );
}
