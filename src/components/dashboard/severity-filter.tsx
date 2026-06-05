"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const SEVERITIES = [
  { value: "CRITICAL", label: "Critical", className: "bg-red-100 text-red-700 border-red-200" },
  { value: "HIGH", label: "High", className: "bg-orange-100 text-orange-700 border-orange-200" },
  { value: "MEDIUM", label: "Medium", className: "bg-blue-100 text-blue-700 border-blue-200" },
  { value: "LOW", label: "Low", className: "bg-gray-100 text-gray-600 border-gray-200" },
] as const;

export function SeverityFilter({ activeSeverities }: { activeSeverities: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleSeverity = useCallback(
    (sev: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.getAll("severity");

      if (current.includes(sev)) {
        params.delete("severity");
        for (const s of current) {
          if (s !== sev) params.append("severity", s);
        }
      } else {
        params.append("severity", sev);
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const clearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("severity");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-medium text-gray-500 mr-1">Severity:</span>
      {SEVERITIES.map((sev) => {
        const isActive = activeSeverities.includes(sev.value);
        return (
          <button
            key={sev.value}
            onClick={() => toggleSeverity(sev.value)}
            className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium transition-all ${
              isActive
                ? `${sev.className} ring-1 ring-current/20`
                : "border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
            aria-pressed={isActive}
          >
            {sev.label}
          </button>
        );
      })}
      {activeSeverities.length > 0 && (
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
