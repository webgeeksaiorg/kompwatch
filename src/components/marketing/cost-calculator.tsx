"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateCostComparison,
  formatCurrencyShort,
} from "@/lib/cost-calculator";

const DEFAULTS = {
  competitors: 8,
  teamSize: 3,
  annualBilling: true,
};

const LIMITS = {
  competitors: { min: 1, max: 50, step: 1 },
  teamSize: { min: 1, max: 25, step: 1 },
};

/**
 * Interactive cost calculator pitting KompWatch against Klue and Crayon —
 * the two enterprise CI tools whose #1 G2 complaint is "Expensive" (385+
 * reviews for Crayon alone).
 *
 * Distinct from <RoiCalculator/> (analyst-labor framing). This widget answers
 * "We already considered Klue/Crayon — is KompWatch really cheaper?" with
 * config-specific numbers instead of static brochure copy.
 */
export function CostCalculator() {
  const [competitors, setCompetitors] = useState(DEFAULTS.competitors);
  const [teamSize, setTeamSize] = useState(DEFAULTS.teamSize);
  const [annualBilling, setAnnualBilling] = useState(DEFAULTS.annualBilling);
  const [impressionFired, setImpressionFired] = useState(false);

  const result = useMemo(
    () => calculateCostComparison({ competitors, teamSize, annualBilling }),
    [competitors, teamSize, annualBilling]
  );

  useEffect(() => {
    if (impressionFired) return;
    if (typeof window === "undefined") return;
    window.plausible?.("cost-calculator-impression");
    setImpressionFired(true);
  }, [impressionFired]);

  function handleCtaClick() {
    window.plausible?.("cost-calculator-cta-click", {
      props: {
        plan: result.recommendedPlan.key,
        competitors: String(competitors),
        team_size: String(teamSize),
        annual: annualBilling ? "yes" : "no",
        multiplier: isFinite(result.multiplier)
          ? result.multiplier.toFixed(1)
          : "free",
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

  // Headline number: "97% cheaper" or "50× cheaper" — pick whichever is more
  // visceral for the current config. For Free plan we just say "Free vs $XK/yr".
  const headline =
    result.recommendedPlan.monthlyPrice === 0
      ? `Free vs ${formatCurrencyShort(result.enterpriseMedianAnnual)}/yr`
      : `${Math.round(result.multiplier)}× cheaper`;

  return (
    <section
      id="cost-calculator"
      className="mt-20 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
          Cost calculator
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          How much would Klue or Crayon cost your team?
        </h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Both refuse to publish pricing. We did the math from public Vendr,
          G2, and customer-quote data &mdash; then ran your numbers against
          KompWatch.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
        {/* Inputs */}
        <div className="lg:col-span-3 space-y-7">
          <SliderField
            label="Competitors you want to track"
            value={competitors}
            displayValue={String(competitors)}
            min={LIMITS.competitors.min}
            max={LIMITS.competitors.max}
            step={LIMITS.competitors.step}
            onChange={setCompetitors}
            hint="Direct rivals worth a daily check — pricing pages, blogs, jobs, changelogs."
          />
          <SliderField
            label="Seats (team members who need access)"
            value={teamSize}
            displayValue={teamSize === 1 ? "1 seat" : `${teamSize} seats`}
            min={LIMITS.teamSize.min}
            max={LIMITS.teamSize.max}
            step={LIMITS.teamSize.step}
            onChange={setTeamSize}
            hint="Klue and Crayon charge ~$2K/seat/yr above the bundled 3 seats. KompWatch Team includes 5 seats; Pro includes 3."
          />

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Bill KompWatch annually (save 20%)
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Klue and Crayon require annual contracts. We compare
                  apples-to-apples but keep monthly available too.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={annualBilling}
                onClick={() => setAnnualBilling((v) => !v)}
                className={`mt-1 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                  annualBilling ? "bg-brand-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                    annualBilling ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="lg:col-span-2 space-y-5">
          {/* Enterprise vs KompWatch comparison */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Annual cost — your config
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">Klue</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrencyShort(result.klue.annualCost)}/yr
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">Crayon</span>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrencyShort(result.crayon.annualCost)}/yr
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-gray-600">
                  KompWatch {result.recommendedPlan.name}
                </span>
                <span className="text-sm font-semibold text-brand-700">
                  {result.kompwatchAnnualCost === 0
                    ? "Free"
                    : `${formatCurrencyShort(result.kompwatchAnnualCost)}/yr`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-gray-900">
                  You save vs enterprise median
                </span>
                <span className="text-lg font-bold text-green-700">
                  {formatCurrencyShort(result.annualSavings)}/yr
                </span>
              </div>
            </div>
          </div>

          {/* Headline savings card */}
          <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              KompWatch vs Klue / Crayon
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {headline}
            </p>
            {result.recommendedPlan.monthlyPrice > 0 && (
              <p className="mt-1 text-sm text-gray-600">
                {result.cheaperByPercent}% less than enterprise median
                {" "}({formatCurrencyShort(result.enterpriseMedianAnnual)}/yr)
              </p>
            )}

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
                      : `$${result.kompwatchMonthlyEffective}/mo${annualBilling ? " billed annually" : ""}`}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                No sales call. Cancel anytime. Self-serve from minute zero.
              </p>
            </div>

            <a
              href={ctaHref}
              onClick={handleCtaClick}
              className="mt-5 block w-full rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              {ctaLabel}
            </a>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-400">
              Klue and Crayon don&rsquo;t publish prices. KompWatch does, on this page.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-400">
        Klue {result.klue.rangeLabel} &middot; Crayon {result.crayon.rangeLabel}.
        Sources: Vendr (2025), G2 reviews, paranoa.ai public quotes (2026). Both
        vendors require annual contracts and per-seat fees above the bundle.
      </p>
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
