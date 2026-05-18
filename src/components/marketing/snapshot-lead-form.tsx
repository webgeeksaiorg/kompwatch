"use client";

import { useState } from "react";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> }
    ) => void;
  }
}

type Status = "idle" | "submitting" | "success" | "error";

export function SnapshotLeadForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "free-snapshot" }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      window.plausible?.("free-snapshot-submit", {
        props: { competitor_url: trimmedUrl },
      });
      setStatus("success");
      setMessage(
        "You're in! We'll analyze that competitor and email you the snapshot within 24 hours."
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-green-200 bg-green-50 px-6 py-5 text-center text-sm text-green-800"
        role="status"
      >
        <p className="font-semibold">{message}</p>
        <p className="mt-2 text-green-600">
          In the meantime,{" "}
          <a href="/login" className="font-medium underline hover:text-green-800">
            start monitoring free
          </a>{" "}
          to track up to 2 competitors with weekly digests.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor="snapshot-url" className="sr-only">
          Competitor URL
        </label>
        <div className="relative">
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
            id="snapshot-url"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://competitor.com"
            disabled={status === "submitting"}
            className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-gray-50"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="snapshot-email" className="sr-only">
          Email address
        </label>
        <input
          id="snapshot-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourcompany.com"
          disabled={status === "submitting"}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-gray-50"
        />
        <button
          type="submit"
          disabled={status === "submitting" || email.length === 0 || url.length === 0}
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-300"
        >
          {status === "submitting" ? "Submitting…" : "Get free snapshot"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-600" role="alert">
          {message}
        </p>
      )}
      <p className="text-center text-xs text-gray-400">
        No account needed. We&apos;ll email you the analysis within 24 hours.
      </p>
    </form>
  );
}
