"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    key: "FREE",
    price: 0,
    description: "Get started with competitor tracking",
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
    price: 49,
    description: "For teams serious about competitive intelligence",
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
  },
  {
    name: "Team",
    key: "TEAM",
    price: 149,
    description: "Full competitive intelligence for growing teams",
    features: [
      "50 competitors",
      "Daily email digest",
      "All tracking types",
      "Tech stack detection",
      "API access",
      "Priority support",
    ],
    cta: "Upgrade to Team",
  },
];

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
    klue: "~$6K/yr",
    crayon: "~$12K/yr",
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
    kompwatch: "Roadmap",
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

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: string) {
    if (plan === "FREE") {
      window.location.href = "/login";
      return;
    }

    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      if (res.status === 401) {
        // Not logged in — redirect to login first
        window.location.href = "/login";
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

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Start free. Upgrade when you need more competitors or faster digests.
        </p>
      </div>

      <div
        id="pricing"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`relative rounded-xl border p-6 ${
              plan.popular
                ? "border-brand-600 shadow-lg ring-1 ring-brand-600"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-medium text-white">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
            <p className="mt-4">
              <span className="text-4xl font-bold text-gray-900">
                ${plan.price}
              </span>
              <span className="text-sm text-gray-500">/mo</span>
            </p>

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
          </div>
        ))}
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
          Comparison based on publicly available information as of April 2026.
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
    </main>
  );
}
