"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateRoi,
  formatCurrency,
  KOMPWATCH_AUTOMATION_RATIO,
} from "@/lib/roi-calculator";

const DEFAULTS = {
  competitors: 5,
  hoursPerWeek: 3,
  hourlyRate: 75,
};

const LIMITS = {
  competitors: { min: 1, max: 50, step: 1 },
  hoursPerWeek: { min: 0, max: 20, step: 0.5 },
  hourlyRate: { min: 25, max: 200, step: 5 },
};

export function RoiCalculator() {
  const [competitors, setCompetitors] = useState(DEFAULTS.competitors);
  const [hoursPerWeek, setHoursPerWeek] = useState(DEFAULTS.hoursPerWeek);
  const [hourlyRate, setHourlyRate] = useState(DEFAULTS.hourlyRate);
  const [impressionFired, setImpressionFired] = useState(false);

  const result = useMemo(
    () => calculateRoi({ competitors, hoursPerWeek, hourlyRate }),
    [competitors, hoursPerWeek, hourlyRate]
  );

  useEffect(() => {
    if (impressionFired) return;
    if (typeof window === "undefined") return;
    window.plausible?.("roi-calculator-impression");
    setImpressionFired(true);
  }, [impressionFired]);

  function handleCtaClick() {
    window.plausible?.("roi-calculator-cta-click", {
      props: {
        plan: result.recommendedPlan.key,
        competitors: String(competitors),
        hours_per_week: String(hoursPerWeek),
      },
    });
  }

  const ctaHref =
    result.recommendedPlan.key === "ENTERPRISE"
      ? "mailto:sales@kompwatch.com"
      : "/login";
  const ctaLabel =
    result.recommendedPlan.key === "FREE"
      ? "Start free"
      : result.recommendedPlan.key === "ENTERPRISE"
        ? "Contact sales"
        : `Start ${result.recommendedPlan.name} free`;

  const roiPill =
    result.recommendedPlan.monthlyPrice === 0
      ? "Free tier — pure savings"
      : `${result.roiMultiple.toFixed(1)}× ROI / pays back in ${Math.max(1, Math.round(result.paybackDays))} days`;

  return (
    <section
      id="roi-calculator"
      className="mt-20 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Interactive
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          How much analyst time does KompWatch replace?
        </h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          CI analysts cost {formatCurrency(DEFAULTS.hourlyRate * 2_080)}/yr fully loaded.
          See how much of that labor KompWatch automates&nbsp;&mdash; and what you keep.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Inputs */}
        <div className="lg:col-span-3 space-y-7">
          <SliderField
            label="Competitors you track"
            value={competitors}
            displayValue={String(competitors)}
            min={LIMITS.competitors.min}
            max={LIMITS.competitors.max}
            step={LIMITS.competitors.step}
            onChange={setCompetitors}
            hint="Direct rivals you actively monitor — pricing, features, blog, jobs."
          />
          <SliderField
            label="Hours per week spent on manual monitoring"
            value={hoursPerWeek}
            displayValue={
              hoursPerWeek === Math.floor(hoursPerWeek)
                ? `${hoursPerWeek} hrs`
                : `${hoursPerWeek.toFixed(1)} hrs`
            }
            min={LIMITS.hoursPerWeek.min}
            max={LIMITS.hoursPerWeek.max}
            step={LIMITS.hoursPerWeek.step}
            onChange={setHoursPerWeek}
            hint="Time your team currently spends checking competitor sites, blogs, and pricing pages."
          />
          <SliderField
            label="Loaded hourly rate"
            value={hourlyRate}
            displayValue={`$${hourlyRate}/hr`}
            min={LIMITS.hourlyRate.min}
            max={LIMITS.hourlyRate.max}
            step={LIMITS.hourlyRate.step}
            onChange={setHourlyRate}
            hint="PMM or CI analyst fully-loaded cost. We default to $75/hr industry median."
          />
        </div>

        {/* Result */}
        <div className="lg:col-span-2 space-y-5">
          {/* Analyst labor comparison */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Analyst labor vs. KompWatch
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">CI analyst cost</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(result.analystAnnualCost)}/yr
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">FTE replaced by KompWatch</span>
                <span className="text-sm font-semibold text-brand-700">
                  {result.fteEquivalent.toFixed(2)} FTE
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">KompWatch cost</span>
                <span className="text-sm font-semibold text-gray-900">
                  {result.kompwatchAnnualCost === 0
                    ? "Free"
                    : `${formatCurrency(result.kompwatchAnnualCost)}/yr`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-gray-900">Net labor savings</span>
                <span className="text-lg font-bold text-green-700">
                  {formatCurrency(result.annualLaborSavings)}/yr
                </span>
              </div>
            </div>
          </div>

          {/* Primary savings card */}
          <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Monthly analyst hours reclaimed
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {result.hoursSavedPerMonth.toFixed(1)}
              <span className="text-base font-medium text-gray-500"> hrs/mo</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {formatCurrency(result.dollarsSavedPerMonth)}/mo in analyst labor ·{" "}
              {formatCurrency(result.dollarsSavedPerYear)}/yr
            </p>

            <div className="mt-5 rounded-lg bg-white/70 px-3 py-2 text-center text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-200">
              {roiPill}
            </div>

            <div className="mt-5 border-t border-brand-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Recommended plan
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-3">
                <span className="text-xl font-semibold text-gray-900">
                  KompWatch {result.recommendedPlan.name}
                </span>
                <span className="text-sm text-gray-600">
                  {result.recommendedPlan.monthlyPrice === 0
                    ? "Free"
                    : result.recommendedPlan.key === "ENTERPRISE"
                      ? `from $${result.recommendedPlan.monthlyPrice}/mo`
                      : `$${result.recommendedPlan.monthlyPrice}/mo`}
                </span>
              </div>
              {result.recommendedPlan.competitorsIncluded !== null && (
                <p className="mt-1 text-xs text-gray-500">
                  Up to {result.recommendedPlan.competitorsIncluded} competitors
                  · cancel anytime
                </p>
              )}
            </div>

            <a
              href={ctaHref}
              onClick={handleCtaClick}
              className="mt-5 block w-full rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              {ctaLabel}
            </a>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-400">
              Based on KompWatch replacing ~
              {Math.round(KOMPWATCH_AUTOMATION_RATIO * 100)}% of manual
              monitoring time. Conservative vs. industry CI tool claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        <span className="text-lg font-semibold text-brand-600 tabular-nums">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-600"
      />
      {hint && <p className="mt-2 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
