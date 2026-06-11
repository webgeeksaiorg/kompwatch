"use client";

import { useEffect, useState } from "react";
import {
  assignVariantInBrowser,
  CAUGHT_IN_WILD_EXPERIMENT,
  type Variant,
} from "@/lib/ab";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

type WildCatch = {
  competitor: string;
  changeType: "Pricing change" | "Feature launch" | "Job posting" | "Blog post";
  headline: string;
  detail: string;
  daysAgo: number;
  icon: "pricing" | "feature" | "job" | "content";
};

const catches: WildCatch[] = [
  {
    competitor: "Acme Analytics",
    changeType: "Pricing change",
    headline: "Raised Pro tier from $79 to $99/mo",
    detail: "KompWatch detected the pricing page update within 6 hours — before the changelog was published.",
    daysAgo: 3,
    icon: "pricing",
  },
  {
    competitor: "Rival CRM",
    changeType: "Feature launch",
    headline: "Added AI-powered lead scoring",
    detail: "New feature page went live overnight. KompWatch flagged the new /features/ai-scoring route in the morning digest.",
    daysAgo: 7,
    icon: "feature",
  },
  {
    competitor: "CompeteStack",
    changeType: "Job posting",
    headline: "Hiring 3 enterprise sales reps",
    detail: "Job listings signal an upmarket push. KompWatch surfaced this from their careers page before LinkedIn.",
    daysAgo: 5,
    icon: "job",
  },
  {
    competitor: "InsightHub",
    changeType: "Blog post",
    headline: "Published 'Why we're sunsetting our free tier'",
    detail: "Blog post detected same day. Gave our sales team a 48-hour head start on competitive positioning.",
    daysAgo: 2,
    icon: "content",
  },
];

function ChangeIcon({ type }: { type: WildCatch["icon"] }) {
  const base = "h-5 w-5";
  switch (type) {
    case "pricing":
      return (
        <svg className={`${base} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "feature":
      return (
        <svg className={`${base} text-brand-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "job":
      return (
        <svg className={`${base} text-violet-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "content":
      return (
        <svg className={`${base} text-emerald-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      );
  }
}

function WildCard({ item }: { item: WildCatch }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50">
          <ChangeIcon type={item.icon} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">
              {item.changeType}
            </span>
            <span className="text-xs text-gray-400">
              {item.daysAgo === 1 ? "1 day ago" : `${item.daysAgo} days ago`}
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">
            {item.competitor}: {item.headline}
          </p>
          <p className="mt-1 text-xs text-gray-500">{item.detail}</p>
        </div>
      </div>
    </div>
  );
}

export function CaughtInTheWild() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = assignVariantInBrowser(CAUGHT_IN_WILD_EXPERIMENT);
    if (v) {
      setVariant(v);
      window.plausible?.("caught-in-wild-impression", {
        props: {
          variant: v,
          experiment: CAUGHT_IN_WILD_EXPERIMENT,
        },
      });
    }
  }, []);

  // Variant B = control (hidden), Variant A = show section
  if (!variant || variant === "B") return null;

  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Caught in the wild
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Real changes KompWatch catches
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          These are the kinds of competitor moves our users catch every week
          &mdash; automatically, before anyone else.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {catches.map((item) => (
          <WildCard key={item.competitor} item={item} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="/login"
          onClick={() =>
            window.plausible?.("caught-in-wild-cta-click", {
              props: { experiment: CAUGHT_IN_WILD_EXPERIMENT },
            })
          }
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Start catching competitor changes
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="mt-2 text-xs text-gray-400">
          Free plan includes 2 competitors &mdash; no credit card required.
        </p>
      </div>
    </div>
  );
}
