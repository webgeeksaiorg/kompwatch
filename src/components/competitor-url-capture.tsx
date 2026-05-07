"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

interface CompetitorUrlCaptureProps {
  competitor: string;
  placeholder?: string;
}

export function CompetitorUrlCapture({
  competitor,
  placeholder = "https://competitor.com",
}: CompetitorUrlCaptureProps) {
  const [url, setUrl] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) return;

    window.plausible?.("Competitor URL Capture Submit", {
      props: { competitor, page: `vs-${competitor.toLowerCase()}` },
    });

    const params = new URLSearchParams({
      competitor_url: trimmed,
      utm_source: `vs-${competitor.toLowerCase()}`,
    });
    router.push(`/login?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-lg items-center gap-2">
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={placeholder}
          required
          className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
      >
        Start monitoring
      </button>
    </form>
  );
}
