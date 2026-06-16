"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

/**
 * Bottom CTA on the free-snapshot page. If the user already ran a snapshot
 * this session, pre-fills the signup link with their competitor URL so the
 * onboarding flow can skip straight to the competitors page with the URL
 * pre-populated.
 */
export function FreeSnapshotBottomCTA() {
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      setSnapshotUrl(sessionStorage.getItem("kompwatch_snapshot_url"));
    } catch {
      // sessionStorage may be unavailable
    }
  }, []);

  const loginHref = snapshotUrl
    ? `/login?competitor_url=${encodeURIComponent(snapshotUrl)}&utm_source=free-snapshot&utm_content=bottom-cta`
    : "/login?utm_source=free-snapshot&utm_content=bottom-cta";

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-20 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Want ongoing monitoring?
        </h2>
        <p className="mt-3 text-gray-600">
          The free snapshot is a one-time look. KompWatch monitors
          continuously — daily or hourly — so you never miss a competitor
          move. Free plan includes 2 competitors with weekly digests.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <TrackedCTA
            href={loginHref}
            event="free-snapshot-bottom-cta"
            eventProps={snapshotUrl ? { competitor_url: snapshotUrl } : undefined}
            className="rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start monitoring free
          </TrackedCTA>
          <Link
            href="/pricing"
            className="text-sm text-gray-500 underline hover:text-gray-700"
          >
            Compare plans
          </Link>
        </div>
      </div>
    </section>
  );
}
