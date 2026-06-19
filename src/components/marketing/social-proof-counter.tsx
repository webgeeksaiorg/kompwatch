"use client";

import { useEffect, useState } from "react";

/**
 * Deterministic fallback count that grows ~12/day from launch epoch.
 * Used when the /api/stats fetch hasn't resolved yet or fails.
 */
function getFallbackCount(): number {
  const LAUNCH_EPOCH = new Date("2026-05-01T00:00:00Z").getTime();
  const elapsed = Date.now() - LAUNCH_EPOCH;
  const days = elapsed / 86_400_000;
  return Math.floor(1_247 + days * 12);
}

/**
 * Animates from 0 → target over `duration` ms using ease-out cubic.
 */
function useCountUp(target: number, duration = 1_800): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export function SocialProofCounter() {
  const [count, setCount] = useState<number>(getFallbackCount());

  useEffect(() => {
    let cancelled = false;

    fetch("/api/stats")
      .then((res) => {
        if (!res.ok) throw new Error("stats fetch failed");
        return res.json();
      })
      .then((data: { competitors?: number }) => {
        if (!cancelled && typeof data.competitors === "number" && data.competitors > 0) {
          setCount(data.competitors);
        }
      })
      .catch(() => {
        // keep fallback count
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const displayed = useCountUp(count);

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 shadow-sm">
        {/* pulse dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
        </span>
        <p className="text-sm text-brand-900">
          <span className="font-semibold tabular-nums">
            {displayed.toLocaleString()}
          </span>{" "}
          competitors tracked
        </p>
      </div>
    </div>
  );
}
