import Link from "next/link";
import { HeroCTA } from "./hero-cta";
import { HeroHeadline } from "./hero-headline";
import { HeroSubheadline } from "./hero-subheadline";
import { TrackedCTA } from "@/components/tracked-cta";

const features = [
  {
    title: "Pricing changes",
    description:
      "Get alerted the moment a competitor raises prices, adds a new tier, or launches a discount.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Feature launches",
    description:
      "Know when competitors ship new features before your customers tell you about them.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Blog & content",
    description:
      "Track competitor blog posts, case studies, and documentation changes automatically.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: "Job listings",
    description:
      "Spot hiring trends — when a competitor staffs up in a vertical, something is coming.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "AI-powered digests",
    description:
      "No noise — our AI reads every change and sends you only what matters, summarized.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Tech stack detection",
    description:
      "See what tools and frameworks competitors adopt — spot infrastructure shifts early.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "1",
    title: "Add competitors",
    description: "Paste any URL — we start monitoring pricing pages, blogs, feature pages, and job boards.",
  },
  {
    step: "2",
    title: "We watch 24/7",
    description: "Automated crawlers check for changes on a schedule — hourly, every 6 hours, or daily depending on your plan.",
  },
  {
    step: "3",
    title: "Get AI digests",
    description: "Our AI analyzes what changed, why it matters, and emails you a clean summary. No manual checking.",
  },
];

const plans = [
  {
    name: "Free",
    price: 0,
    monthlyPrice: 0,
    features: ["2 competitors", "Weekly digest", "Pricing & feature tracking"],
    cta: "Start free",
    href: "/login",
  },
  {
    name: "Pro",
    price: 39,
    monthlyPrice: 49,
    features: [
      "10 competitors",
      "Daily digest",
      "All tracking types",
      "Job listing tracking",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/pricing",
    popular: true,
  },
  {
    name: "Team",
    price: 119,
    monthlyPrice: 149,
    features: [
      "50 competitors",
      "Daily digest",
      "All tracking types",
      "Tech stack detection",
      "API access",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/pricing",
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
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

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          AI-powered competitor monitoring
        </div>
        <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 ring-1 ring-green-200">
          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Save $39,500/yr vs Crayon &amp; Klue — same insights, 80× less
        </p>
        <HeroHeadline />
        <HeroSubheadline />
        <div className="mt-10 flex items-center justify-center gap-4">
          <HeroCTA />
          <Link
            href="#how-it-works"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            How it works &rarr;
          </Link>
        </div>
        {/* Social proof counter */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["bg-brand-400", "bg-emerald-400", "bg-amber-400", "bg-violet-400", "bg-rose-400"].map((bg, i) => (
              <div
                key={i}
                className={`h-7 w-7 rounded-full ${bg} ring-2 ring-white`}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Join <span className="font-semibold text-gray-900">150+</span> teams monitoring competitors
          </p>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
          <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <span>No credit card required</span>
          <span className="text-gray-300">·</span>
          <span>Free plan includes 2 competitors forever</span>
        </div>
      </section>

      {/* How It Works — compact above-fold strip */}
      <section className="border-t border-gray-100 bg-brand-50/50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-4">
            {/* Step 1 */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                1
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900">Add competitors</p>
              <p className="mt-1 text-xs text-gray-500">Paste any URL to start tracking</p>
            </div>

            {/* Arrow */}
            <svg className="hidden h-5 w-5 shrink-0 text-brand-300 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            {/* Step 2 */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                2
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900">We monitor 24/7</p>
              <p className="mt-1 text-xs text-gray-500">Automated crawlers detect changes</p>
            </div>

            {/* Arrow */}
            <svg className="hidden h-5 w-5 shrink-0 text-brand-300 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            {/* Step 3 */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                3
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900">Get AI digests</p>
              <p className="mt-1 text-xs text-gray-500">Clean summaries in your inbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-gray-100 bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Everything competitors do, you know first
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We monitor the pages that matter and surface only meaningful changes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Three steps to competitive intelligence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Set up once. Get insights forever.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-gray-100 bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free. Upgrade when you need more competitors or faster digests.
            </p>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            Prices shown with annual billing.{" "}
            <Link href="/pricing" className="text-brand-600 underline hover:text-brand-700">
              See monthly pricing
            </Link>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 bg-white ${
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
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-gray-500">/mo</span>
                </p>
                {plan.monthlyPrice > 0 && (
                  <p className="mt-1 text-xs text-gray-400">
                    ${plan.price * 12}/yr &middot;{" "}
                    <span className="line-through">${plan.monthlyPrice}/mo</span>
                  </p>
                )}
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <TrackedCTA
                  href={plan.href}
                  event="Pricing CTA Click"
                  eventProps={{ plan: plan.name }}
                  className={`mt-8 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold shadow-sm ${
                    plan.popular
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </TrackedCTA>
              </div>
            ))}
          </div>

          {/* Price anchor: KompWatch vs enterprise CI tools */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
            <p className="mb-4 text-center text-sm font-medium text-gray-500">
              How KompWatch compares to enterprise CI platforms
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-brand-600 bg-brand-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  KompWatch Pro
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-900">$49<span className="text-sm font-normal text-gray-500">/mo</span></div>
                <div className="mt-1 text-xs text-gray-500">$588/yr &middot; Self-serve</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Crayon
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-400">$5K&ndash;$80K<span className="text-sm font-normal">/yr</span></div>
                <div className="mt-1 text-xs text-gray-400">Sales call required</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Klue
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-400">$20K&ndash;$40K<span className="text-sm font-normal">/yr</span></div>
                <div className="mt-1 text-xs text-gray-400">Sales call required</div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              Pricing from Vendr and G2 reviews (2026). Same core competitive intelligence &mdash;{" "}
              <TrackedCTA href="/vs-crayon" event="Price Anchor Link Click" eventProps={{ competitor: "Crayon" }} className="underline hover:text-gray-600">vs Crayon</TrackedCTA>
              {" "}&middot;{" "}
              <TrackedCTA href="/vs-klue" event="Price Anchor Link Click" eventProps={{ competitor: "Klue" }} className="underline hover:text-gray-600">vs Klue</TrackedCTA>
              {" "}&middot;{" "}
              <TrackedCTA href="/vs-kompyte" event="Price Anchor Link Click" eventProps={{ competitor: "Kompyte" }} className="underline hover:text-gray-600">vs Kompyte</TrackedCTA>
              {" "}&middot;{" "}
              <TrackedCTA href="/vs-caelian" event="Price Anchor Link Click" eventProps={{ competitor: "Caelian" }} className="underline hover:text-gray-600">vs Caelian</TrackedCTA>
              {" "}&middot;{" "}
              <TrackedCTA href="/vs-seeto" event="Price Anchor Link Click" eventProps={{ competitor: "Seeto" }} className="underline hover:text-gray-600">vs Seeto</TrackedCTA>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop checking competitor websites manually
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join teams who get AI-analyzed competitor updates delivered to their inbox.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Final CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
