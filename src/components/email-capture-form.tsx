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

interface EmailCaptureFormProps {
  source: string;
  event: string;
  buttonLabel?: string;
  placeholder?: string;
  successMessage?: string;
  className?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function EmailCaptureForm({
  source,
  event,
  buttonLabel = "Send me the digest",
  placeholder = "you@yourcompany.com",
  successMessage = "Got it — we'll send the sample digest to your inbox shortly.",
  className,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
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

      window.plausible?.(event, { props: { source } });
      setStatus("success");
      setMessage(successMessage);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 ${
          className ?? ""
        }`}
        role="status"
      >
        {message}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-2 sm:flex-row ${className ?? ""}`}
      noValidate
    >
      <label htmlFor={`email-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === "submitting"}
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-gray-50"
      />
      <button
        type="submit"
        disabled={status === "submitting" || email.length === 0}
        className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-300"
      >
        {status === "submitting" ? "Sending…" : buttonLabel}
      </button>
      {status === "error" && (
        <p
          className="mt-1 text-xs text-red-600 sm:absolute sm:mt-14"
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  );
}
