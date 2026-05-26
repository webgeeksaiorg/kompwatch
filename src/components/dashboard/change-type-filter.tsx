"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const CHANGE_TYPES = [
  { value: "PRICING", label: "Pricing", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { value: "FEATURE", label: "Feature", className: "bg-sky-50 text-sky-700 border-sky-200" },
  { value: "BLOG", label: "Blog", className: "bg-pink-50 text-pink-700 border-pink-200" },
  { value: "JOB", label: "Jobs", className: "bg-amber-50 text-amber-700 border-amber-200" },
  { value: "TECH", label: "Tech", className: "bg-violet-50 text-violet-700 border-violet-200" },
  { value: "GENERAL", label: "General", className: "bg-gray-50 text-gray-600 border-gray-200" },
  { value: "COMMUNITY", label: "Community", className: "bg-orange-50 text-orange-700 border-orange-200" },
] as const;

export function ChangeTypeFilter({ activeTypes }: { activeTypes: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleType = useCallback(
    (type: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.getAll("changeType");

      if (current.includes(type)) {
        params.delete("changeType");
        for (const t of current) {
          if (t !== type) params.append("changeType", t);
        }
      } else {
        params.append("changeType", type);
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const clearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("changeType");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-medium text-gray-500 mr-1">Type:</span>
      {CHANGE_TYPES.map((type) => {
        const isActive = activeTypes.includes(type.value);
        return (
          <button
            key={type.value}
            onClick={() => toggleType(type.value)}
            className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium transition-all ${
              isActive
                ? `${type.className} ring-1 ring-current/20`
                : "border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            {type.label}
          </button>
        );
      })}
      {activeTypes.length > 0 && (
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
