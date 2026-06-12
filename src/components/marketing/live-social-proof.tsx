"use client";

import { useEffect, useState } from "react";

interface Counts {
  snapshots: number;
  teams: number;
}

const FALLBACK: Counts = { snapshots: 1200, teams: 340 };

/**
 * Animated counter that rolls up from 0 to `target` over `durationMs`.
 */
function useAnimatedCount(target: number, durationMs = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target <= 0) return;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

function formatNumber(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    // Show one decimal only if meaningful (e.g. 1.2k, not 2.0k)
    return k % 1 === 0 ? `${k}k+` : `${k.toFixed(1)}k+`;
  }
  return `${n}+`;
}

/**
 * Variant: "inline" for the hero row, "cards" for the trust section.
 */
export function LiveSocialProof({ variant }: { variant: "inline" | "cards" }) {
  const [counts, setCounts] = useState<Counts>(FALLBACK);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/social-proof")
      .then((r) => (r.ok ? r.json() : FALLBACK))
      .then((data: Counts) => {
        setCounts(data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true)); // use fallback silently
  }, []);

  const animatedSnapshots = useAnimatedCount(loaded ? counts.snapshots : 0);
  const animatedTeams = useAnimatedCount(loaded ? counts.teams : 0);

  if (variant === "inline") {
    return (
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          <strong className="font-semibold text-gray-700">
            {formatNumber(animatedSnapshots)}
          </strong>{" "}
          snapshots delivered
        </span>
        <span
          className="hidden sm:inline text-gray-300"
          aria-hidden="true"
        >
          &middot;
        </span>
        <span className="flex items-center gap-1.5">
          <strong className="font-semibold text-gray-700">
            {formatNumber(animatedTeams)}
          </strong>{" "}
          teams served
        </span>
        <span
          className="hidden sm:inline text-gray-300"
          aria-hidden="true"
        >
          &middot;
        </span>
        <span className="flex items-center gap-1.5">
          <strong className="font-semibold text-gray-700">Instant</strong>{" "}
          results on screen
        </span>
      </div>
    );
  }

  // cards variant
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
        <p className="text-3xl font-bold text-brand-600">
          {formatNumber(animatedSnapshots)}
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Competitor snapshots delivered to teams like yours
        </p>
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
        <p className="text-3xl font-bold text-brand-600">5 signals</p>
        <p className="mt-1 text-sm text-gray-600">
          Pricing, features, content, jobs, and tech stack — per competitor
        </p>
      </div>
      <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
        <p className="text-3xl font-bold text-brand-600">&lt; 30s</p>
        <p className="mt-1 text-sm text-gray-600">
          Instant results — no waiting for email delivery
        </p>
      </div>
    </div>
  );
}
