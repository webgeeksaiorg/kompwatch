"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  SOCIAL_PROOF_COUNTER_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

/**
 * Compute a deterministic base count that grows ~12 per day from a fixed
 * launch epoch, so the number feels alive across visits without a real API.
 */
function getBaseCount(): number {
  const LAUNCH_EPOCH = new Date("2026-05-01T00:00:00Z").getTime();
  const elapsed = Date.now() - LAUNCH_EPOCH;
  const days = elapsed / 86_400_000;
  return Math.floor(1_247 + days * 12);
}

/**
 * Animates from 0 → target over `duration` ms using ease-out.
 */
function useCountUp(target: number, duration = 1_800): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

const AVATAR_COLORS = [
  "bg-brand-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-violet-400",
  "bg-rose-400",
];

function StaticProof() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex -space-x-2">
        {AVATAR_COLORS.map((bg, i) => (
          <div
            key={i}
            className={`h-7 w-7 rounded-full ${bg} ring-2 ring-white`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-sm text-gray-600">
        Join <span className="font-semibold text-gray-900">150+</span> teams
        monitoring competitors
      </p>
    </div>
  );
}

function LiveCounter() {
  const base = getBaseCount();
  const displayed = useCountUp(base);

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

export function SocialProofCounter() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = assignVariantInBrowser(SOCIAL_PROOF_COUNTER_EXPERIMENT);
    if (v) {
      setVariant(v);
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("Social Proof Impression", {
          props: { variant: v },
        });
      }
    }
  }, []);

  // SSR / pre-hydration: render control to avoid layout shift
  if (!variant) return <StaticProof />;

  return variant === "A" ? <StaticProof /> : <LiveCounter />;
}
