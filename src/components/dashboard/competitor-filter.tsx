"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

type CompetitorOption = {
  id: string;
  name: string;
};

export function CompetitorFilter({
  competitors,
  activeIds,
}: {
  competitors: CompetitorOption[];
  activeIds: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggle = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.getAll("competitor");

      if (current.includes(id)) {
        params.delete("competitor");
        for (const c of current) {
          if (c !== id) params.append("competitor", c);
        }
      } else {
        params.append("competitor", id);
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const clearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("competitor");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  if (competitors.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-medium text-gray-500 mr-1">Competitor:</span>
      {competitors.map((c) => {
        const isActive = activeIds.includes(c.id);
        return (
          <button
            key={c.id}
            onClick={() => toggle(c.id)}
            className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium transition-all ${
              isActive
                ? "bg-gray-900 text-white border-gray-900"
                : "border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            {c.name}
          </button>
        );
      })}
      {activeIds.length > 0 && (
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
