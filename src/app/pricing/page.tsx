"use client";

import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import { getDisplayPrice, getPerCompetitorPrice } from "@/lib/pricing";
import {
  PRICING_ANCHOR_EXPERIMENT,
  FOUNDING_100_EXPERIMENT,
  HEADSUP_SWITCHER_EXPERIMENT,
  PERSONA_HEADERS_EXPERIMENT,
  PRICING_STRIKETHROUGH_EXPERIMENT,
  ENTERPRISE_COST_TABLE_EXPERIMENT,
  assignVariantInBrowser,
  type Variant,
} from "@/lib/ab";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { CaughtInTheWild } from "@/components/marketing/caught-in-the-wild";
import { DigestPreview } from "@/components/marketing/digest-preview";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

type Plan = {
  name: string;
  key: string;
  monthlyPrice: number;
  competitors: number | null; // null = unlimited / not applicable
  description: string;
  persona: string;
  features: string[];
  cta: string;
  href?: string;
  popular?: boolean;
  enterprise?: boolean;
  /** Crossed-out market-rate anchor for A/B strikethrough experiment */
  marketRate?: { price: string; label: string };
};

const plans: Plan[] = [
  {
    name: "Free",
    key: "FREE",
    monthlyPrice: 0,
    competitors: 2,
    description: "Get started with competitor tracking",
    persona: "For solo founders",
    features: [
      "2 competitors",
      "Weekly email digest",
      "Pricing & feature tracking",
      "Blog post monitoring",
    ],
    cta: "Start free",
    href: "/login",
  },
  {
    name: "Pro",
    key: "PRO",
    monthlyPrice: 49,
    competitors: 10,
    description: "For teams serious about competitive intelligence",
    persona: "For PMMs & product marketers",
    features: [
      "10 competitors",
      "Daily email digest",
      "Pricing & feature tracking",
      "Blog post monitoring",
      "Job listing tracking",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
    marketRate: { price: "$300", label: "Kompyte equivalent" },
  },
  {
    name: "Team",
    key: "TEAM",
    monthlyPrice: 149,
    competitors: 50,
    description: "Full competitive intelligence for growing teams",
    persona: "For CI teams & strategy leads",
    features: [
      "50 competitors",
      "Daily email digest",
      "All tracking types",
      "Tech stack detection",
      "API access",
      "Priority support",
    ],
    cta: "Upgrade to Team",
    marketRate: { price: "$2,400", label: "Crayon equivalent" },
  },
  {
    name: "Enterprise",
    key: "ENTERPRISE",
    monthlyPrice: 799,
    competitors: null,
    description: "Custom competitive intelligence at scale",
    persona: "For VP Strategy & CI programs",
    features: [
      "Unlimited competitors",
      "Real-time alerts",
      "All tracking types",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & SAML",
      "SLA & uptime guarantee",
      "Custom onboarding",
    ],
    cta: "Contact sales",
    enterprise: true,
  },
];

/* Competitor annual pricing for savings badges (source: G2, Capterra, public pricing) */
/* ---------- Plan comparison table — KompWatch tiers side-by-side (ticket 010d) ---------- */
type TierCellValue = true | false | string;

const tierComparisonRows: {
  category: string;
  rows: {
    feature: string;
    free: TierCellValue;
    pro: TierCellValue;
    team: TierCellValue;
    enterprise: TierCellValue;
  }[];
}[] = [
  {
    category: "Monitoring",
    rows: [
      { feature: "Competitors tracked", free: "2", pro: "10", team: "50", enterprise: "Unlimited" },
      { feature: "Snapshot frequency", free: "Daily", pro: "Every 6h", team: "Hourly", enterprise: "Real-time" },
      { feature: "Pricing page tracking", free: true, pro: true, team: true, enterprise: true },
      { feature: "Blog & content monitoring", free: true, pro: true, team: true, enterprise: true },
      { feature: "Job listing tracking", free: false, pro: true, team: true, enterprise: true },
      { feature: "Tech stack detection", free: false, pro: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Alerts & digests",
    rows: [
      { feature: "Email digests", free: "Weekly", pro: "Daily", team: "Daily", enterprise: "Real-time" },
      { feature: "AI change summaries", free: true, pro: true, team: true, enterprise: true },
      { feature: "Slack / webhook alerts", free: false, pro: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Intelligence",
    rows: [
      { feature: "Battlecard export", free: false, pro: true, team: true, enterprise: true },
      { feature: "Competitor activity score", free: false, pro: true, team: true, enterprise: true },
      { feature: "API access", free: false, pro: false, team: true, enterprise: true },
      { feature: "Custom CSS selectors", free: true, pro: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Support & security",
    rows: [
      { feature: "Email support", free: true, pro: true, team: true, enterprise: true },
      { feature: "Priority support", free: false, pro: true, team: true, enterprise: true },
      { feature: "Dedicated account manager", free: false, pro: false, team: false, enterprise: true },
      { feature: "SSO & SAML", free: false, pro: false, team: false, enterprise: true },
      { feature: "SLA & uptime guarantee", free: false, pro: false, team: false, enterprise: true },
      { feature: "Custom onboarding", free: false, pro: false, team: false, enterprise: true },
    ],
  },
];

const competitorAnnualPrices = {
  kompyte: 3_600, // cheapest incumbent (~$300/mo)
  klue: 20_000, // enterprise, sales-call pricing
  crayon: 28_750, // enterprise, sales-call pricing
} as const;

function getSavingsBadge(
  monthlyPrice: number,
  annual: boolean
): { dollars: string; percent: string; vs: string } | null {
  if (monthlyPrice <= 0) return null;
  const yearlyPrice = annual ? monthlyPrice * 12 * 0.8 : monthlyPrice * 12;
  const saved = competitorAnnualPrices.kompyte - yearlyPrice;
  if (saved <= 0) return null;
  const pctVsKlue = Math.round(
    ((competitorAnnualPrices.klue - yearlyPrice) / competitorAnnualPrices.klue) *
      100
  );
  const roundedSaved = Math.floor(saved / 100) * 100;
  return {
    dollars: `$${roundedSaved.toLocaleString()}+`,
    percent: `${pctVsKlue}%`,
    vs: "Kompyte",
  };
}

type CellValue = true | false | string;

const comparisonRows: {
  feature: string;
  kompwatch: CellValue;
  klue: CellValue;
  crayon: CellValue;
  kompyte: CellValue;
}[] = [
  {
    feature: "Starting price",
    kompwatch: "Free / $49/mo",
    klue: "$20K–$40K/yr",
    crayon: "~$28K/yr",
    kompyte: "~$8K/yr",
  },
  {
    feature: "Self-serve signup",
    kompwatch: true,
    klue: false,
    crayon: false,
    kompyte: false,
  },
  {
    feature: "AI change summaries",
    kompwatch: true,
    klue: true,
    crayon: true,
    kompyte: false,
  },
  {
    feature: "Pricing page tracking",
    kompwatch: true,
    klue: true,
    crayon: true,
    kompyte: true,
  },
  {
    feature: "Blog & content monitoring",
    kompwatch: true,
    klue: true,
    crayon: true,
    kompyte: true,
  },
  {
    feature: "Job listing tracking",
    kompwatch: true,
    klue: false,
    crayon: true,
    kompyte: false,
  },
  {
    feature: "Tech stack detection",
    kompwatch: "Pro+",
    klue: true,
    crayon: true,
    kompyte: false,
  },
  {
    feature: "Email digests",
    kompwatch: true,
    klue: true,
    crayon: true,
    kompyte: true,
  },
  {
    feature: "Slack / webhook alerts",
    kompwatch: true,
    klue: true,
    crayon: true,
    kompyte: true,
  },
  {
    feature: "Battlecards",
    kompwatch: "One-click export",
    klue: true,
    crayon: true,
    kompyte: true,
  },
  {
    feature: "No sales call required",
    kompwatch: true,
    klue: false,
    crayon: false,
    kompyte: false,
  },
];

const enterpriseCostRows: {
  label: string;
  analyst: string;
  enterprise: string;
  kompwatch: string;
}[] = [
  {
    label: "Annual cost",
    analyst: "$85,000+",
    enterprise: "$20,000–40,000",
    kompwatch: "$588",
  },
  {
    label: "Setup time",
    analyst: "3–6 months",
    enterprise: "4–8 weeks",
    kompwatch: "5 minutes",
  },
  {
    label: "Coverage",
    analyst: "5–10 competitors",
    enterprise: "Depends on plan",
    kompwatch: "Up to 50+",
  },
  {
    label: "Monitoring frequency",
    analyst: "Weekly (manual)",
    enterprise: "Daily",
    kompwatch: "Hourly",
  },
  {
    label: "AI-generated summaries",
    analyst: "No",
    enterprise: "Some tools",
    kompwatch: "Every change",
  },
  {
    label: "Requires sales call",
    analyst: "N/A",
    enterprise: "Yes",
    kompwatch: "No",
  },
  {
    label: "Contract",
    analyst: "Full-time hire",
    enterprise: "12-month minimum",
    kompwatch: "Cancel anytime",
  },
];

/**
 * Tier-by-tier pricing comparison (KompWatch vs Klue vs Crayon).
 * Sourced from G2, Gartner Peer Insights, and customer reviews (May 2026).
 * Klue / Crayon pricing requires a sales call — figures are public estimates.
 */
const pricingComparisonRows: {
  label: string;
  kompwatch: string;
  klue: string;
  crayon: string;
}[] = [
  {
    label: "Entry plan",
    kompwatch: "Free (2 competitors)",
    klue: "~$20,000/yr",
    crayon: "~$28,000/yr",
  },
  {
    label: "Mid-tier plan",
    kompwatch: "$49/mo (10 competitors)",
    klue: "~$30,000/yr",
    crayon: "~$40,000/yr",
  },
  {
    label: "Team / Enterprise",
    kompwatch: "$149/mo (50 competitors)",
    klue: "$40,000+/yr",
    crayon: "$60,000+/yr",
  },
  {
    label: "Cost per competitor (mid-tier)",
    kompwatch: "~$4.90/mo",
    klue: "~$200/mo",
    crayon: "~$240/mo",
  },
  {
    label: "Contract length",
    kompwatch: "Monthly, cancel anytime",
    klue: "12-month minimum",
    crayon: "12-month minimum",
  },
  {
    label: "Minimum seats",
    kompwatch: "1",
    klue: "3–5",
    crayon: "3–5",
  },
  {
    label: "Free trial",
    kompwatch: "Yes — free tier forever",
    klue: "No (demo only)",
    crayon: "No (demo only)",
  },
  {
    label: "Self-serve checkout",
    kompwatch: "Yes",
    klue: "No (sales call)",
    crayon: "No (sales call)",
  },
  {
    label: "Setup / onboarding fee",
    kompwatch: "None",
    klue: "$2,500–$10,000",
    crayon: "$3,000–$15,000",
  },
  {
    label: "Annual cost (10 competitors)",
    kompwatch: "$588",
    klue: "$30,000+",
    crayon: "$40,000+",
  },
];

function ComparisonCell({
  value,
  highlight,
}: {
  value: CellValue;
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <svg
        className={`h-5 w-5 ${highlight ? "text-brand-600" : "text-green-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg
        className="h-5 w-5 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return (
    <span className={highlight ? "font-medium text-brand-600" : "text-gray-600"}>
      {value}
    </span>
  );
}

function ExitIntentPopover({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
            <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            Before you go&hellip;
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            See how KompWatch stacks up against Crayon — the most common tool teams compare us to.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border-2 border-brand-600 bg-brand-50/50 p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">KompWatch Pro</div>
            <div className="mt-1 text-2xl font-bold text-gray-900">$49<span className="text-sm font-normal text-gray-500">/mo</span></div>
            <div className="mt-1 text-xs text-gray-500">$588/yr</div>
            <ul className="mt-3 space-y-1 text-left text-xs text-gray-700">
              <li>✓ Self-serve signup</li>
              <li>✓ 10 competitors</li>
              <li>✓ Daily AI digests</li>
              <li>✓ Cancel anytime</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Crayon</div>
            <div className="mt-1 text-2xl font-bold text-gray-900">~$28K<span className="text-sm font-normal text-gray-500">/yr</span></div>
            <div className="mt-1 text-xs text-gray-500">Sales call required</div>
            <ul className="mt-3 space-y-1 text-left text-xs text-gray-400">
              <li>· Annual contract</li>
              <li>· Multi-week onboarding</li>
              <li>· Quote-only pricing</li>
              <li>· Enterprise-only</li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          That&rsquo;s <strong className="text-gray-900">~49&times; less</strong> for the same core competitive intelligence.
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <a
            href="/login"
            className="block w-full rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </a>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            No thanks, I&rsquo;ll keep looking
          </button>
        </div>
      </div>
    </div>
  );
}

function StickyCTA({
  visible,
  onDismiss,
  anchorVariant,
}: {
  visible: boolean;
  onDismiss: () => void;
  anchorVariant: Variant;
}) {
  if (!visible) return null;
  return (
    <div
      role="region"
      aria-label="Start free signup"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:gap-4">
        <div className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50">
          <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">
            Start free — no credit card required
          </p>
          <p className="hidden truncate text-xs text-gray-500 sm:block">
            2 competitors, weekly digest. Upgrade anytime.
          </p>
        </div>
        <a
          href="/login"
          onClick={() =>
            window.plausible?.("pricing-sticky-cta-click", {
              props: {
                location: "sticky-bar",
                anchor_variant: anchorVariant,
              },
            })
          }
          className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Start free
        </a>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [annual, setAnnual] = useState(true);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentDismissed, setExitIntentDismissed] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const stickyDismissedRef = useRef(false);
  // Anchor A/B test: SSR-stable default = "A" (yearly anchor, control). After
  // hydration, ~50% of users swap to "B" (monthly anchor). Variant is sticky
  // per session so a user sees the same framing across reloads.
  const [anchorVariant, setAnchorVariant] = useState<Variant>("A");
  const [foundingVariant, setFoundingVariant] = useState<Variant>("B"); // B = control (no founding UI)
  // Headsup.bot switcher banner — only shown when visitor came from /vs-headsup
  // (referrer or ?from=headsup). Variant A = banner visible, B = control.
  const [switcherVariant, setSwitcherVariant] = useState<Variant>("B");
  const [personaVariant, setPersonaVariant] = useState<Variant>("B"); // B = control (no persona headers)
  const [strikethroughVariant, setStrikethroughVariant] = useState<Variant>("B"); // B = control (no market-rate anchor)
  const [costTableVariant, setCostTableVariant] = useState<Variant>("B"); // B = control (no enterprise cost table)
  const [cameFromHeadsup, setCameFromHeadsup] = useState(false);

  useEffect(() => {
    const assigned =
      assignVariantInBrowser(PRICING_ANCHOR_EXPERIMENT) ?? "A";
    setAnchorVariant(assigned);
    window.plausible?.("pricing-anchor-impression", {
      props: {
        variant: assigned,
        experiment: PRICING_ANCHOR_EXPERIMENT,
      },
    });

    const foundingAssigned =
      assignVariantInBrowser(FOUNDING_100_EXPERIMENT) ?? "B";
    setFoundingVariant(foundingAssigned);
    window.plausible?.("founding-100-impression", {
      props: {
        variant: foundingAssigned,
        experiment: FOUNDING_100_EXPERIMENT,
      },
    });

    const personaAssigned =
      assignVariantInBrowser(PERSONA_HEADERS_EXPERIMENT) ?? "B";
    setPersonaVariant(personaAssigned);
    window.plausible?.("persona-headers-impression", {
      props: {
        variant: personaAssigned,
        experiment: PERSONA_HEADERS_EXPERIMENT,
      },
    });

    const strikethroughAssigned =
      assignVariantInBrowser(PRICING_STRIKETHROUGH_EXPERIMENT) ?? "B";
    setStrikethroughVariant(strikethroughAssigned);
    window.plausible?.("pricing-strikethrough-impression", {
      props: {
        variant: strikethroughAssigned,
        experiment: PRICING_STRIKETHROUGH_EXPERIMENT,
      },
    });

    const costTableAssigned =
      assignVariantInBrowser(ENTERPRISE_COST_TABLE_EXPERIMENT) ?? "B";
    setCostTableVariant(costTableAssigned);
    window.plausible?.("enterprise-cost-table-impression", {
      props: {
        variant: costTableAssigned,
        experiment: ENTERPRISE_COST_TABLE_EXPERIMENT,
      },
    });

    // Detect Headsup.bot referral funnel. We accept either an explicit
    // ?from=headsup URL parameter (links we control on /vs-headsup) or a
    // referrer that points at our own /vs-headsup page. We do NOT inspect
    // external referrers — that's noisy and most browsers strip them.
    let fromHeadsup = false;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("from") === "headsup") fromHeadsup = true;
      if (!fromHeadsup && typeof document.referrer === "string") {
        // Same-origin internal referrer — safe to rely on.
        if (document.referrer.includes("/vs-headsup")) fromHeadsup = true;
      }
    } catch {
      // URL parsing failures shouldn't block the page; default to control.
    }
    setCameFromHeadsup(fromHeadsup);

    if (fromHeadsup) {
      const switcherAssigned =
        assignVariantInBrowser(HEADSUP_SWITCHER_EXPERIMENT) ?? "B";
      setSwitcherVariant(switcherAssigned);
      window.plausible?.("headsup-switcher-impression", {
        props: {
          variant: switcherAssigned,
          experiment: HEADSUP_SWITCHER_EXPERIMENT,
        },
      });
    }
  }, []);

  // Auto-trigger checkout when redirected back from login with upgrade intent
  const autoCheckoutFired = useRef(false);
  useEffect(() => {
    if (autoCheckoutFired.current) return;
    try {
      const params = new URLSearchParams(window.location.search);
      const autoCheckoutPlan = params.get("auto_checkout");
      const period = params.get("period");
      if (autoCheckoutPlan && (autoCheckoutPlan === "PRO" || autoCheckoutPlan === "TEAM")) {
        autoCheckoutFired.current = true;
        if (period === "monthly") setAnnual(false);
        // Small delay to let the page render before initiating checkout
        setTimeout(() => handleCheckout(autoCheckoutPlan), 500);
      }
    } catch {
      // Don't block page render
    }
  // eslint-disable-next-line -- handleCheckout is stable across renders
  }, []);

  const handleExitIntent = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentDismissed) {
        setShowExitIntent(true);
      }
    },
    [exitIntentDismissed]
  );

  useEffect(() => {
    // Don't show on mobile (no mouse) or if already dismissed this session
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("kw-exit-intent-dismissed")) {
      setExitIntentDismissed(true);
      return;
    }

    // Delay listener to avoid triggering on page load mouse movements
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleExitIntent);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, [handleExitIntent]);

  function dismissExitIntent() {
    setShowExitIntent(false);
    setExitIntentDismissed(true);
    sessionStorage.setItem("kw-exit-intent-dismissed", "1");
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("kw-pricing-sticky-dismissed")) {
      stickyDismissedRef.current = true;
      return;
    }

    let impressionFired = false;
    const onScroll = () => {
      if (stickyDismissedRef.current) return;
      const shouldShow = window.scrollY > 600;
      setStickyVisible((prev) => {
        if (shouldShow && !prev && !impressionFired) {
          impressionFired = true;
          window.plausible?.("pricing-sticky-cta-impression");
        }
        return shouldShow;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismissSticky() {
    setStickyVisible(false);
    stickyDismissedRef.current = true;
    sessionStorage.setItem("kw-pricing-sticky-dismissed", "1");
    window.plausible?.("pricing-sticky-cta-dismiss");
  }

  async function handleCheckout(plan: string) {
    if (plan === "FREE") {
      window.location.href = "/login";
      return;
    }

    setLoading(plan);
    const billingPeriod = annual ? "annual" : "monthly";
    window.plausible?.("checkout-initiated", {
      props: {
        plan,
        anchor_variant: anchorVariant,
        founding_variant: foundingVariant,
        persona_variant: personaVariant,
        strikethrough_variant: strikethroughVariant,
        cost_table_variant: costTableVariant,
        billing_period: billingPeriod,
      },
    });
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, billingPeriod }),
      });

      if (res.status === 401) {
        const params = new URLSearchParams({
          intent: "upgrade",
          plan,
          period: billingPeriod,
        });
        window.location.href = `/login?${params.toString()}`;
        return;
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  }

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "KompWatch",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered competitor monitoring for SaaS teams. Track competitor websites, detect changes, and get AI-generated digests delivered to your inbox.",
    url: "https://kompwatch.com",
    offers: plans
      .filter((p) => !p.enterprise)
      .map((p) => ({
        "@type": "Offer",
        price: String(p.monthlyPrice),
        priceCurrency: "USD",
        name: p.name,
        description: p.description,
        ...(p.monthlyPrice > 0 && {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(p.monthlyPrice),
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
        }),
      })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 pt-16 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Start free. Upgrade when you need more competitors or faster digests.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          No credit card required to get started.
        </p>
      </div>

      {/* Headsup.bot switcher banner — only when visitor came from /vs-headsup
          AND was assigned variant A. Personalised welcome + "why teams switch". */}
      {cameFromHeadsup && switcherVariant === "A" && (
        <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-indigo-50 p-5 shadow-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <h3 className="text-base font-bold text-sky-900">
              Coming from Headsup.bot? Here&rsquo;s why teams switch.
            </h3>
          </div>
          <ul className="mx-auto mt-3 max-w-lg space-y-1.5 text-sm text-sky-900/90">
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5 text-sky-600">✓</span>
              <span><strong>AI-written change summaries</strong> &mdash; not just raw diff alerts to read yourself.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5 text-sky-600">✓</span>
              <span><strong>Severity classification</strong> (Low / Medium / High / Critical) so you can ignore the noise.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden className="mt-0.5 text-sky-600">✓</span>
              <span><strong>Full Playwright rendering</strong> &mdash; catches React/SPA pricing pages lightweight scrapers miss.</span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/login"
              onClick={() =>
                window.plausible?.("headsup-switcher-cta-click", {
                  props: {
                    variant: switcherVariant,
                    location: "switcher-banner",
                    experiment: HEADSUP_SWITCHER_EXPERIMENT,
                  },
                })
              }
              className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              Start free &mdash; 2 competitors
            </a>
            <a
              href="/vs-headsup"
              onClick={() =>
                window.plausible?.("headsup-switcher-compare-click", {
                  props: {
                    variant: switcherVariant,
                    experiment: HEADSUP_SWITCHER_EXPERIMENT,
                  },
                })
              }
              className="text-sm font-medium text-sky-700 underline-offset-2 hover:underline"
            >
              See full side-by-side &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Price anchoring — enterprise CI cost vs KompWatch (A/B variant) */}
      <div
        className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6 shadow-sm"
        data-variant={anchorVariant}
      >
        {anchorVariant === "B" ? (
          <>
            <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-400">
              Enterprise CI tools cost
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-300 line-through decoration-red-400/60 decoration-2 sm:text-4xl">
                  $2,000&ndash;3,300<span className="text-lg font-normal">/mo</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">Crayon &amp; Klue range</p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-600 sm:text-4xl">
                  $49<span className="text-lg font-normal">/mo</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">KompWatch Pro</p>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              Up to <strong className="text-brand-600">67&times; less per month</strong> &mdash; no annual contract, cancel anytime.
            </p>
          </>
        ) : (
          <>
            <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-400">
              The average enterprise CI tool costs
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-300 line-through decoration-red-400/60 decoration-2 sm:text-4xl">
                  $28,750<span className="text-lg font-normal">/yr</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">Crayon median contract</p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-600 sm:text-4xl">
                  $588<span className="text-lg font-normal">/yr</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">KompWatch Pro (annual)</p>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-gray-500">
              That&rsquo;s <strong className="text-brand-600">49&times; less</strong> for the same core competitive intelligence.
              <span className="hidden sm:inline"> No sales call. No annual lock-in.</span>
            </p>
          </>
        )}
      </div>

      {/* Billing toggle — defaults to Annual */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}
        >
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual(!annual)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
            annual ? "bg-brand-600" : "bg-gray-200"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform ${
              annual ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}
        >
          Annual
        </span>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Save 20%
        </span>
      </div>

      {/* Founding 100 banner — shown in variant A when annual billing is selected */}
      {foundingVariant === "A" && annual && (
        <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 shadow-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <h3 className="text-base font-bold text-amber-900">
              Founding 100 — Lock in your price forever
            </h3>
          </div>
          <p className="mt-2 text-center text-sm text-amber-800">
            The first 100 annual subscribers keep today&rsquo;s rate <strong>permanently</strong> &mdash; even when prices go up.
            Slots are claimed at checkout, first-come first-served.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Slots remaining
            </span>
          </div>
        </div>
      )}

      <div
        id="pricing"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {plans.map((plan) => {
          const isEnterprise = "enterprise" in plan && plan.enterprise;
          const displayPrice = getDisplayPrice(plan.monthlyPrice, annual);
          return (
            <div
              key={plan.key}
              className={`relative rounded-xl border p-6 ${
                plan.popular
                  ? "border-brand-600 shadow-lg ring-1 ring-brand-600"
                  : isEnterprise
                    ? "border-gray-300 bg-gray-50"
                    : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              {personaVariant === "A" && (
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {plan.persona}
                </p>
              )}
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
                {foundingVariant === "A" &&
                  annual &&
                  (plan.key === "PRO" || plan.key === "TEAM") && (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800 ring-1 ring-inset ring-amber-300">
                      Founding rate
                    </span>
                  )}
              </div>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              {isEnterprise ? (
                <>
                  <p className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Starts at ${displayPrice}/mo
                  </p>
                </>
              ) : (
                <>
                  {strikethroughVariant === "A" && plan.marketRate && (
                    <p className="mt-4 mb-0.5 text-xs text-gray-400">
                      <span className="line-through decoration-red-400/60">
                        {plan.marketRate.price}/mo
                      </span>
                      <span className="ml-1">
                        {plan.marketRate.label}
                      </span>
                    </p>
                  )}
                  <p className={strikethroughVariant === "A" && plan.marketRate ? "mt-0" : "mt-4"}>
                    <span className="text-4xl font-bold text-gray-900">
                      ${displayPrice}
                    </span>
                    <span className="text-sm text-gray-500">/mo</span>
                  </p>
                  {annual && plan.monthlyPrice > 0 && (
                    <p className="mt-1 text-xs text-gray-400">
                      ${displayPrice * 12}/yr &middot;{" "}
                      <span className="line-through">${plan.monthlyPrice}/mo</span>
                    </p>
                  )}
                  {foundingVariant === "A" &&
                    annual &&
                    plan.monthlyPrice > 0 &&
                    !isEnterprise && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-amber-700">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Locked forever as a founding member
                      </p>
                    )}
                  {annual && plan.monthlyPrice > 0 && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="h-3.5 w-3.5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Cancel anytime — no penalties
                    </p>
                  )}
                </>
              )}

              {(() => {
                const perComp = getPerCompetitorPrice(
                  plan.monthlyPrice,
                  plan.competitors,
                  annual
                );
                if (!perComp) return null;
                return (
                  <p
                    className="mt-3 text-xs font-medium text-brand-600"
                    title="Compare: Crayon ~$240/competitor/mo, Klue $200+/competitor/mo"
                  >
                    Just ${perComp} per competitor/mo
                  </p>
                );
              })()}

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {isEnterprise ? (
                <a
                  href="mailto:sales@kompwatch.com"
                  onClick={() =>
                    window.plausible?.("enterprise-contact-click", {
                      props: {
                        location: "pricing-card",
                        anchor_variant: anchorVariant,
                      },
                    })
                  }
                  className="mt-8 block w-full rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  onClick={() => handleCheckout(plan.key)}
                  disabled={loading !== null}
                  className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm ${
                    plan.popular
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
                  } disabled:opacity-50`}
                >
                  {loading === plan.key ? "Redirecting..." : plan.cta}
                </button>
              )}

              {plan.key === "FREE" && (
                <p className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No credit card required
                </p>
              )}

              {plan.key === "FREE" && (
                <p className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No credit card required
                </p>
              )}

              {(() => {
                const savings = getSavingsBadge(plan.monthlyPrice, annual);
                if (!savings || isEnterprise) return null;
                return (
                  <p className="mt-3 text-center text-xs text-green-700">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 font-medium ring-1 ring-inset ring-green-200">
                      Save {savings.dollars}/yr vs {savings.vs}
                    </span>
                  </p>
                );
              })()}
            </div>
          );
        })}
      </div>

      {/* Plan comparison table — KompWatch tiers side-by-side (ticket 010d) */}
      <div className="mt-20" id="plan-comparison">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Compare plans
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            Everything included, by plan
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            See exactly what you get at every tier &mdash; no hidden add-ons.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                <th scope="col" className="px-4 py-3 font-medium text-gray-500">
                  Free
                  <span className="block text-xs font-normal text-gray-400">$0/mo</span>
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand-600">
                  Pro
                  <span className="block text-xs font-normal text-brand-500">
                    ${getDisplayPrice(49, annual)}/mo
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-gray-500">
                  Team
                  <span className="block text-xs font-normal text-gray-400">
                    ${getDisplayPrice(149, annual)}/mo
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-gray-500">
                  Enterprise
                  <span className="block text-xs font-normal text-gray-400">Custom</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tierComparisonRows.map((group) => (
                <Fragment key={group.category}>
                  <tr>
                    <td
                      colSpan={5}
                      className="pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature} className="border-t border-gray-100">
                      <th scope="row" className="py-3 pr-4 text-left font-medium text-gray-700">
                        {row.feature}
                      </th>
                      <td className="px-4 py-3">
                        <ComparisonCell value={row.free} />
                      </td>
                      <td className="px-4 py-3">
                        <ComparisonCell value={row.pro} highlight />
                      </td>
                      <td className="px-4 py-3">
                        <ComparisonCell value={row.team} />
                      </td>
                      <td className="px-4 py-3">
                        <ComparisonCell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/login"
            onClick={() =>
              window.plausible?.("plan-comparison-cta-click", {
                props: { location: "plan-comparison-table" },
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — upgrade anytime
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Sample digest email preview — show prospects what they'll receive (ticket 8ee2) */}
      <DigestPreview />

      {/* Interactive ROI calculator — analyst labor savings framing */}
      <RoiCalculator />

      {/* Caught in the wild — social proof A/B experiment (c356) */}
      <CaughtInTheWild />

      {/* Enterprise cost comparison table — A/B experiment (variant A = visible) */}
      {costTableVariant === "A" && (
        <div className="mt-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Cost comparison
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
              What does competitive intelligence really cost?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Three ways to track competitors &mdash; only one makes sense for growing teams.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-gray-500" />
                  <th className="px-4 py-3 font-medium text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Hire an analyst
                    </div>
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Enterprise tool
                    </div>
                    <span className="text-xs font-normal text-gray-400">Klue, Crayon</span>
                  </th>
                  <th className="px-4 py-3 font-semibold text-brand-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      KompWatch Pro
                    </div>
                    <span className="text-xs font-normal text-brand-500">$49/mo annual</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enterpriseCostRows.map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-medium text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-gray-500">{row.analyst}</td>
                    <td className="px-4 py-3 text-gray-500">{row.enterprise}</td>
                    <td className="px-4 py-3 font-medium text-brand-600">{row.kompwatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50/50 p-5 text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Bottom line:</strong> an analyst costs
              <strong className="text-gray-900"> $85K+/yr</strong>, enterprise tools cost
              <strong className="text-gray-900"> $20K+/yr</strong>, KompWatch Pro costs
              <strong className="text-brand-600"> $588/yr</strong>.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              That&rsquo;s <strong className="text-brand-600">97% less</strong> than hiring
              and <strong className="text-brand-600">97% less</strong> than enterprise tools.
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Analyst salary based on Glassdoor median for &ldquo;Competitive Intelligence Analyst&rdquo; (US, June 2026).
            Enterprise tool pricing from G2 and Gartner Peer Insights reviews.
          </p>
        </div>
      )}

      {/* No Hidden Fees Section */}
      <div className="mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            No hidden fees. Ever.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enterprise CI tools bury costs behind sales calls and annual contracts.
            Here&rsquo;s what they don&rsquo;t put on their pricing page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Their hidden costs */}
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="font-semibold text-gray-900">Hidden costs at Crayon, Klue &amp; Kompyte</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { cost: "Mandatory sales call", detail: "No public pricing — you won't know the cost until a 45-min demo" },
                { cost: "Annual lock-in", detail: "12-month minimum contracts with auto-renewal clauses" },
                { cost: "Per-seat charges", detail: "Each additional team member adds $200–500/mo to your bill" },
                { cost: "Onboarding fees", detail: "$2K–5K setup fee for 'white-glove' implementation" },
                { cost: "Overage penalties", detail: "Track more competitors than your plan allows? Surprise invoice." },
                { cost: "Renewal price hikes", detail: "15–30% increases at renewal — after you're locked in" },
              ].map((item) => (
                <li key={item.cost} className="flex items-start gap-2 text-sm">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-900">{item.cost}</span>
                    <span className="text-gray-500"> — {item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* KompWatch transparency */}
          <div className="rounded-xl border border-green-200 bg-green-50/50 p-6">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold text-gray-900">What you get with KompWatch</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { benefit: "Public pricing", detail: "Every plan is listed on this page — no surprises" },
                { benefit: "No sales call needed", detail: "Sign up, add competitors, get your first digest in minutes" },
                { benefit: "Cancel anytime", detail: "Monthly billing with no cancellation fees or penalties" },
                { benefit: "Unlimited team members", detail: "Pro and Team plans include your whole team at no extra cost" },
                { benefit: "No setup fees", detail: "Self-serve onboarding — paste a URL and start monitoring" },
                { benefit: "Price-lock guarantee", detail: "Your rate stays the same as long as you're subscribed" },
              ].map((item) => (
                <li key={item.benefit} className="flex items-start gap-2 text-sm">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-900">{item.benefit}</span>
                    <span className="text-gray-500"> — {item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Competitor cost details sourced from G2, Gartner Peer Insights, and customer reviews (May 2026).
          </p>
        </div>
      </div>

      {/* Pricing Comparison Table — KompWatch vs Klue vs Crayon (ticket f1a0) */}
      <div className="mt-20" id="pricing-comparison-table">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Pricing breakdown
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            KompWatch vs Klue vs Crayon — side by side
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            What each tier actually costs, what&rsquo;s required to sign up, and what you&rsquo;re locked into.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="py-3 pr-4 font-medium text-gray-500"></th>
                <th scope="col" className="px-4 py-3 font-semibold text-brand-600">
                  KompWatch
                  <span className="block text-xs font-normal text-brand-500">
                    Self-serve, monthly
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-gray-500">
                  Klue
                  <span className="block text-xs font-normal text-gray-400">
                    Annual contract
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-gray-500">
                  Crayon
                  <span className="block text-xs font-normal text-gray-400">
                    Annual contract
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pricingComparisonRows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="py-3 pr-4 text-left font-medium text-gray-700"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3 font-medium text-brand-600">
                    {row.kompwatch}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{row.klue}</td>
                  <td className="px-4 py-3 text-gray-500">{row.crayon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Klue and Crayon pricing requires a sales call. Figures from G2,
          Gartner Peer Insights, and customer reviews (May 2026). Range estimates
          reflect typical mid-market quotes.
        </p>

        <div className="mt-6 text-center">
          <a
            href="/login"
            onClick={() =>
              window.plausible?.("pricing-comparison-cta-click", {
                props: { location: "pricing-comparison-table" },
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no sales call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Competitor Comparison Table */}
      <div className="mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            How KompWatch compares
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enterprise tools charge 10&ndash;100x more. We give you 80% of the value at a fraction of the cost.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-500">Feature</th>
                <th className="px-4 py-3 font-semibold text-brand-600">KompWatch</th>
                <th className="px-4 py-3 font-medium text-gray-500">Klue</th>
                <th className="px-4 py-3 font-medium text-gray-500">Crayon</th>
                <th className="px-4 py-3 font-medium text-gray-500">Kompyte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
                  <td className="px-4 py-3">
                    <ComparisonCell value={row.kompwatch} highlight />
                  </td>
                  <td className="px-4 py-3">
                    <ComparisonCell value={row.klue} />
                  </td>
                  <td className="px-4 py-3">
                    <ComparisonCell value={row.crayon} />
                  </td>
                  <td className="px-4 py-3">
                    <ComparisonCell value={row.kompyte} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Comparison based on publicly available information as of May 2026.
          Klue and Crayon pricing requires a sales call; estimates from review sites.
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/login"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Already have an account? Sign in
        </a>
      </div>

      {showExitIntent && <ExitIntentPopover onClose={dismissExitIntent} />}

      <StickyCTA
        visible={stickyVisible}
        onDismiss={dismissSticky}
        anchorVariant={anchorVariant}
      />
    </main>
  );
}
