"use client";

import { useEffect, useState } from "react";

const SAMPLE_CHANGES = [
  {
    severity: "HIGH",
    severityEmoji: "\u{1F7E0}",
    changeType: "Pricing",
    contentZone: "Monetization",
    summary: "Increased Pro plan price from $49/mo to $59/mo",
    details:
      "The Pro tier pricing page now shows $59/mo (previously $49/mo). The Team plan remains at $149/mo.",
    implication: "A 20% price hike on their most popular tier — their customers will be evaluating alternatives.",
    signalLabel: "Strong",
  },
  {
    severity: "MEDIUM",
    severityEmoji: "\u{1F7E1}",
    changeType: "Feature",
    contentZone: "Product",
    summary: 'Launched new "AI Insights" reporting feature',
    details:
      "New AI-powered analysis section added to the features page. Positioned as a premium feature for Team plans.",
    implication: "They're moving upmarket — an opportunity to capture SMBs they leave behind.",
    signalLabel: "Weak",
  },
  {
    severity: "LOW",
    severityEmoji: "\u{1F7E2}",
    changeType: "Blog",
    contentZone: "Marketing",
    summary: "Published blog post: \"Why We're Betting Big on AI\"",
    details:
      "New blog post discussing AI strategy and roadmap. Mentions upcoming predictive analytics features.",
    implication: null,
    signalLabel: null,
  },
];

function SignalBadge({ label }: { label: string }) {
  const bg = label === "Strong" ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-500";
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium ${bg}`}>
      {label} signal
    </span>
  );
}

export function DigestPreview() {
  const [impressionFired, setImpressionFired] = useState(false);

  useEffect(() => {
    if (impressionFired) return;
    window.plausible?.("digest-preview-impression");
    setImpressionFired(true);
  }, [impressionFired]);

  return (
    <section className="mt-20" id="digest-preview">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          See what you get
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          This is what lands in your inbox
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-gray-600">
          Every digest surfaces the competitor changes that matter — pricing moves, feature launches,
          positioning shifts — with AI-scored signal strength so you know what to act on.
        </p>
      </div>

      {/* Email preview container */}
      <div className="mx-auto mt-10 max-w-2xl">
        {/* Email chrome — subject line + header */}
        <div className="rounded-t-xl border border-b-0 border-gray-200 bg-gray-50 px-5 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
            <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
            <span className="ml-2 font-medium text-gray-500">digest@kompwatch.com</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-800">
            {"\u{1F534}"} Weekly Digest: 3 competitor changes detected
          </p>
        </div>

        {/* Email body */}
        <div className="rounded-b-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            KompWatch Weekly Digest
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Hi there, here&apos;s your weekly competitor update.
          </p>

          {/* Stats banner */}
          <div className="mt-4 rounded-md bg-blue-50 px-4 py-3 text-sm">
            <strong>3 changes</strong> detected across <strong>1 competitor</strong>
          </div>

          {/* Competitor section */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-gray-900">
              Acme Analytics{" "}
              <span className="font-normal text-gray-400">
                — www.example-competitor.com
              </span>
            </h4>

            <div className="mt-3 divide-y divide-gray-100">
              {SAMPLE_CHANGES.map((change, i) => (
                <div key={i} className="py-3 first:pt-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm">{change.severityEmoji}</span>
                    <span className="inline-flex rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                      {change.changeType}
                    </span>
                    <span className="inline-flex rounded bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700">
                      {change.contentZone}
                    </span>
                    {change.signalLabel && <SignalBadge label={change.signalLabel} />}
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-gray-900">{change.summary}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{change.details}</p>
                  {change.implication && (
                    <p className="mt-1 text-xs text-gray-700">
                      <span className="font-semibold">What this means for you:</span>{" "}
                      {change.implication}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 border-t border-gray-100 pt-4">
            <p className="text-[11px] text-gray-400">
              You&apos;re receiving this because you have a KompWatch account.{" "}
              <span className="underline">Manage preferences</span>
            </p>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-xs text-gray-400">
          Sample digest — your real digests use live competitor data
        </p>
      </div>
    </section>
  );
}
