"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Sign in
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-800">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          Something went wrong
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          That broke on our end.
        </h1>
        <p className="mt-4 max-w-xl text-gray-600">
          Sorry — we hit an unexpected error rendering this page. The team has
          been notified. Try again, or head back home.
        </p>
        {error.digest && (
          <p className="mt-3 font-mono text-xs text-gray-400">
            Reference: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          >
            Back to home
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Still stuck? Email{" "}
          <a
            href="mailto:support@kompwatch.com"
            className="font-medium text-brand-600 hover:underline"
          >
            support@kompwatch.com
          </a>
        </p>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Changelog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
