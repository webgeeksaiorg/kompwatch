import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";

const siteUrl = "https://kompwatch.com";
const g2ReviewUrl = "https://www.g2.com/products/kompwatch/reviews/new";

export const metadata: Metadata = {
  title: "Leave a Review — KompWatch Founding User Program",
  description:
    "You're one of KompWatch's first 100 users. Share your honest experience on G2 and help other teams discover AI-powered competitor monitoring.",
  alternates: {
    canonical: `${siteUrl}/review`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

const steps = [
  {
    number: "1",
    title: "Visit our G2 profile",
    description:
      "Click the button below to open KompWatch on G2. You'll need a G2 account (free to create with your work email).",
  },
  {
    number: "2",
    title: "Share your honest experience",
    description:
      "Write about what you use KompWatch for, what works well, and what could be better. Honest reviews help us improve and help other teams evaluate.",
  },
  {
    number: "3",
    title: "Get your Founding User badge",
    description:
      "After your review is published, we'll add a Founding User badge to your KompWatch account — permanently visible on your profile and shared digests.",
  },
];

const prompts = [
  "What problem were you solving when you signed up for KompWatch?",
  "How does the AI digest compare to manually checking competitor sites?",
  "What would you tell a colleague evaluating competitor monitoring tools?",
  "What's one thing KompWatch does better than your previous solution?",
  "What feature would make KompWatch indispensable for your team?",
];

export default function ReviewPage() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/settings" className="text-sm text-gray-600 hover:text-gray-900">
              Settings
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Founding 100 Program
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          You&rsquo;re one of our first users.{" "}
          <span className="text-brand-600">Your voice matters.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          KompWatch is brand new. Your honest review on G2 helps other teams discover us
          &mdash; and helps us build the competitor monitoring tool you actually need.
        </p>
      </section>

      {/* How it works */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How it works
          </h2>
          <div className="mt-10 space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href={g2ReviewUrl}
              event="G2 Review CTA Click"
              eventProps={{ section: "how-it-works", campaign: "founding-100" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Leave a review on G2
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-500">
              Opens G2 in a new tab. Takes about 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Writing prompts */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Not sure what to write?
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Here are some prompts to get you started. Answer one or two &mdash; that&rsquo;s
            enough for a great review.
          </p>
          <ul className="mt-8 space-y-4">
            {prompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-sm text-gray-700"
              >
                &ldquo;{prompt}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-y border-gray-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Why your review matters
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-2xl font-bold text-brand-600">0</div>
              <div className="mt-1 text-sm text-gray-600">G2 reviews today</div>
              <p className="mt-2 text-xs text-gray-500">
                Every review moves the needle significantly at this stage.
              </p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-2xl font-bold text-brand-600">73%</div>
              <div className="mt-1 text-sm text-gray-600">of B2B buyers check G2</div>
              <p className="mt-2 text-xs text-gray-500">
                Your review directly helps teams discover KompWatch.
              </p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-2xl font-bold text-brand-600">5 min</div>
              <div className="mt-1 text-sm text-gray-600">is all it takes</div>
              <p className="mt-2 text-xs text-gray-500">
                A few sentences about your experience. That&rsquo;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding badge */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              Founding User
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              The Founding User badge
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-600">
              Our first 100 reviewers get a permanent Founding User badge on their
              KompWatch profile. It&rsquo;s our way of saying thank you to the people
              who believed in us early.
            </p>
            <div className="mt-6">
              <TrackedCTA
                href={g2ReviewUrl}
                event="G2 Review CTA Click"
                eventProps={{ section: "founding-badge", campaign: "founding-100" }}
                className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Claim your badge — leave a review
              </TrackedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Questions
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Does it have to be positive?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                No. We want honest reviews. If something isn&rsquo;t working for you,
                say so &mdash; it helps us prioritize fixes and helps other buyers set
                realistic expectations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Do I need a G2 account?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Yes, but creating one is free. Use your work email for faster
                verification.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                How do I get the Founding User badge?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Once your G2 review is published, email us at{" "}
                <a
                  href="mailto:support@kompwatch.com"
                  className="text-brand-600 hover:text-brand-700"
                >
                  support@kompwatch.com
                </a>{" "}
                with a link to your review. We&rsquo;ll add the badge within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Is there a deadline?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                The Founding User badge is limited to the first 100 reviewers. No fixed
                deadline, but once all 100 spots are claimed, the program closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
              Dashboard
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
