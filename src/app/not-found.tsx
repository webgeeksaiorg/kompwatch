import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page doesn't exist or has moved. Browse popular KompWatch destinations or head back home.",
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: "/",
    title: "Home",
    description: "AI competitor monitoring that emails you what changed.",
  },
  {
    href: "/demo",
    title: "Live demo",
    description: "Try the dashboard with sample data — no signup needed.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "Free plan, $49/mo Pro, $149/mo Team. Cancel anytime.",
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "70+ answers on setup, monitoring, billing, and security.",
  },
  {
    href: "/changelog",
    title: "Changelog",
    description: "Every feature shipped — usually a few per week.",
  },
  {
    href: "/login",
    title: "Sign in",
    description: "Magic-link login. We'll email you a one-time link.",
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
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
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          404 — change detected
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          This page is gone.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          We track competitor pages 24/7 — turns out this one changed too. It either
          moved, never existed, or was retired. Try one of the spots below.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Back to home
          </Link>
          <Link
            href="/demo"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          >
            See the live demo
          </Link>
        </div>

        <div className="mt-16 w-full">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Popular destinations
          </h2>
          <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {destinations.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="block h-full rounded-xl border border-gray-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {d.title}
                    </span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{d.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
