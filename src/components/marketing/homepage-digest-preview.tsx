"use client";

/**
 * HomepageDigestPreview — compact "what a digest looks like" section for /
 *
 * Ticket 37e167d9: XS Content — "What a KompWatch digest looks like" preview
 * section on homepage — 3 sample entries showing pricing change, feature launch,
 * hiring signal.
 *
 * Rationale (from ticket notes): Crayon's #1 G2/Capterra complaint in 2026 is
 * alert noise / firehose overload. KompWatch AI digest format is the direct
 * competitive answer — but the homepage didn't demonstrate what a digest
 * actually looks like. Product-shows-itself is the highest-converting element
 * for PLG SaaS. Expected lift: 10-20% increase in free trial starts.
 *
 * Distinct from <DigestPreview /> (rendered on /pricing) which is a full email
 * chrome replica. This variant is a scannable 3-card layout tuned for the
 * homepage scroll rhythm and matches the exact entry types called out in the
 * ticket spec (pricing / feature launch / hiring signal).
 */

import { useEffect, useState } from "react";
import Link from "next/link";

interface SampleEntry {
  severityDot: string; // tailwind bg color for the dot
  changeType: "Pricing" | "Feature launch" | "Hiring signal";
  competitor: string;
  summary: string;
  detail: string;
  implication: string;
  signalLabel: "Strong" | "Emerging";
}

const HOMEPAGE_SAMPLE_ENTRIES: SampleEntry[] = [
  {
    severityDot: "bg-orange-500",
    changeType: "Pricing",
    competitor: "Acme Analytics",
    summary: "Pro plan raised from $49 → $59/mo (+20%)",
    detail:
      "Pricing page updated Tuesday. Team tier unchanged at $149/mo, but the entry-tier hike breaks their previous \"under $50\" positioning.",
    implication:
      "Their SMB base is now shopping — a 20% jump on the most popular tier is a churn trigger. Refresh your comparison page and reach out this week.",
    signalLabel: "Strong",
  },
  {
    severityDot: "bg-amber-500",
    changeType: "Feature launch",
    competitor: "Acme Analytics",
    summary: "Shipped \"AI Insights\" — new reporting module on /features",
    detail:
      "New product surface added: AI-generated weekly summaries positioned as a Team-tier perk. Documentation and 3 blog posts published same day.",
    implication:
      "They're moving upmarket and staking an AI narrative. Update your battlecard before your next 3 deals see this in a pricing call.",
    signalLabel: "Strong",
  },
  {
    severityDot: "bg-yellow-500",
    changeType: "Hiring signal",
    competitor: "Acme Analytics",
    summary: "4 new EMEA sales roles opened in 48 hours",
    detail:
      "Careers page added Account Executive (London), Sales Engineer (Amsterdam), Partner Manager (Berlin), and Enterprise AE (Paris). All Q3 start dates.",
    implication:
      "EMEA expansion is funded and dated. If you sell into Europe, expect them in your deals within a quarter — lock in your incumbent accounts now.",
    signalLabel: "Emerging",
  },
];

function SignalPill({ label }: { label: "Strong" | "Emerging" }) {
  const styles =
    label === "Strong"
      ? "bg-amber-50 text-amber-700 ring-amber-200"
      : "bg-gray-100 text-gray-600 ring-gray-200";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles}`}
    >
      {label} signal
    </span>
  );
}

export function HomepageDigestPreview() {
  const [impressionFired, setImpressionFired] = useState(false);

  useEffect(() => {
    if (impressionFired) return;
    window.plausible?.("homepage-digest-preview-impression");
    setImpressionFired(true);
  }, [impressionFired]);

  return (
    <section
      id="homepage-digest-preview"
      className="border-t border-gray-100 bg-white py-20"
      aria-labelledby="homepage-digest-preview-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            What a KompWatch digest looks like
          </p>
          <h2
            id="homepage-digest-preview-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900"
          >
            Three things a competitor did last week — one email
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            No firehose. No dashboard to babysit. Just the 3–7 changes per week that
            actually move deals — pricing moves, feature launches, hiring signals — each
            with a one-line &quot;what this means for you.&quot;
          </p>
        </div>

        {/* Digest card — email-style shell with 3 entries */}
        <div className="mx-auto mt-10 max-w-3xl">
          {/* Header strip */}
          <div className="rounded-t-xl border border-b-0 border-gray-200 bg-gray-50 px-5 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-2 font-medium">digest@kompwatch.com</span>
              </div>
              <span className="hidden text-xs text-gray-400 sm:inline">Monday · 8:00 AM</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">
              Weekly digest: 3 changes worth your attention
            </p>
          </div>

          {/* Entry list */}
          <ol className="divide-y divide-gray-100 rounded-b-xl border border-gray-200 bg-white shadow-sm">
            {HOMEPAGE_SAMPLE_ENTRIES.map((entry, i) => (
              <li key={i} className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full ${entry.severityDot}`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded bg-gray-900/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {entry.changeType}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {entry.competitor}
                      </span>
                      <SignalPill label={entry.signalLabel} />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
                      {entry.summary}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{entry.detail}</p>
                    <p className="mt-2 rounded-md bg-brand-50/60 px-3 py-2 text-xs text-brand-900">
                      <span className="font-semibold">What this means for you: </span>
                      {entry.implication}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Caption + CTA row */}
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-gray-400">
              Sample digest — real digests use your competitors&apos; live data.
            </p>
            <Link
              href="/sample-digest"
              className="text-xs font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-800"
              data-plausible-event-name="homepage-digest-preview-see-full"
            >
              See a full sample digest →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
