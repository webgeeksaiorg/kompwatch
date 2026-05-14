"use client";

import { useCallback, useEffect, useState } from "react";

const STEP_INTERVAL_MS = 4000;

interface Step {
  label: string;
  title: string;
  description: string;
  mockup: React.ReactNode;
}

function CompetitorMockup() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
          C
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Competitor.com</p>
          <p className="text-xs text-gray-500">Monitoring pricing page</p>
        </div>
        <span className="ml-auto inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Active
        </span>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full rounded bg-gray-100" />
        <div className="h-2 w-3/4 rounded bg-gray-100" />
        <div className="h-2 w-5/6 rounded bg-gray-100" />
      </div>
      <div className="mt-3 flex gap-2">
        <span className="rounded bg-brand-50 px-2 py-0.5 text-xs text-brand-700">
          CSS: .pricing-table
        </span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
          Every 6h
        </span>
      </div>
    </div>
  );
}

function ChangeMockup() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
            PRICING
          </span>
          <span className="text-sm font-semibold text-gray-900">
            Price increase detected
          </span>
        </div>
        <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
          High
        </span>
      </div>
      <div className="rounded-md bg-gray-50 p-3 font-mono text-xs">
        <p className="text-red-600">
          <span className="select-none text-gray-400">- </span>Pro plan: $29/mo
        </p>
        <p className="text-green-600">
          <span className="select-none text-gray-400">+ </span>Pro plan: $49/mo
        </p>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        AI: Competitor raised Pro pricing 69% &mdash; likely responding to increased
        infrastructure costs.
      </p>
    </div>
  );
}

function DigestMockup() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 border-b border-gray-100 pb-3">
        <p className="text-xs text-gray-500">From: KompWatch Digest</p>
        <p className="text-sm font-semibold text-gray-900">
          Weekly Competitor Report &mdash; 3 changes detected
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
          <p className="text-xs text-gray-700">
            <span className="font-medium">Competitor.com</span> raised Pro
            pricing by 69%
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
          <p className="text-xs text-gray-700">
            <span className="font-medium">Rival.io</span> added &quot;Enterprise&quot;
            tier to pricing page
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
          <p className="text-xs text-gray-700">
            <span className="font-medium">AcmeSaaS</span> updated homepage
            headline and hero CTA
          </p>
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="inline-block rounded bg-brand-600 px-3 py-1 text-xs font-medium text-white">
          View Full Report
        </span>
      </div>
    </div>
  );
}

const STEPS: Step[] = [
  {
    label: "Add competitor",
    title: "Paste a URL, pick what to track",
    description:
      "Add any competitor website and set a CSS selector to focus on pricing, features, or any page section.",
    mockup: <CompetitorMockup />,
  },
  {
    label: "Detect changes",
    title: "AI spots what changed and why",
    description:
      "KompWatch compares snapshots, classifies changes by type, and explains the business impact.",
    mockup: <ChangeMockup />,
  },
  {
    label: "Get your digest",
    title: "Actionable summaries in your inbox",
    description:
      "Receive clean, AI-written digests on your schedule — daily, weekly, or real-time.",
    mockup: <DigestMockup />,
  },
];

export function DemoWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, STEP_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, advance]);

  useEffect(() => {
    window.plausible?.("Demo Walkthrough View");
  }, []);

  function handleStepClick(index: number) {
    setActiveStep(index);
    setPaused(true);
    window.plausible?.("Demo Walkthrough Step Click", {
      props: { step: String(index + 1) },
    });
  }

  const step = STEPS[activeStep];

  return (
    <div className="mt-12">
      {/* Step tabs */}
      <div className="mx-auto mb-6 flex max-w-md gap-1">
        {STEPS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => handleStepClick(i)}
            className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
              i === activeStep
                ? "bg-brand-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="text-[10px] font-normal opacity-70">
              Step {i + 1}
            </span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mx-auto mb-8 flex max-w-md gap-1">
        {STEPS.map((_, i) => (
          <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-brand-600"
              style={{
                width:
                  i < activeStep
                    ? "100%"
                    : i === activeStep
                      ? "100%"
                      : "0%",
                transition:
                  i === activeStep && !paused
                    ? `width ${STEP_INTERVAL_MS}ms linear`
                    : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
              Step {activeStep + 1} of {STEPS.length}
            </p>
            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            {paused && (
              <button
                onClick={() => setPaused(false)}
                className="mt-4 text-xs text-brand-600 hover:text-brand-700"
              >
                Resume auto-play &rarr;
              </button>
            )}
          </div>
          {/* Right: mockup */}
          <div className="flex items-center justify-center bg-gray-50 p-6 md:p-8">
            {step.mockup}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        Click any step to explore &mdash; or let it auto-play
      </p>

    </div>
  );
}
