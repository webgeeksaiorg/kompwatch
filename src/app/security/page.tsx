import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "How KompWatch handles your data: encryption, access controls, subprocessors, and responsible disclosure. Built for B2B teams that need to vet competitive intelligence vendors.",
  alternates: { canonical: "/security" },
};

type Practice = {
  title: string;
  body: string;
};

const DATA_PRACTICES: Practice[] = [
  {
    title: "Encryption in transit",
    body: "All traffic to kompwatch.com is served over TLS 1.2+. HSTS is enabled. Magic-link emails are sent over authenticated SMTP (Resend) with TLS.",
  },
  {
    title: "Encryption at rest",
    body: "The PostgreSQL database is encrypted at rest using AES-256 disk encryption. Snapshots and screenshots stored in object storage are encrypted server-side.",
  },
  {
    title: "Authentication",
    body: "Magic-link sign-in only — no passwords to leak or reuse. Sessions are signed JWTs with conservative expiry. Stripe handles all payment authentication.",
  },
  {
    title: "Access controls",
    body: "Production database access is limited to a small number of engineers and audited. No customer support staff have direct database access. All admin operations go through the application layer.",
  },
  {
    title: "Network isolation",
    body: "The production database is not publicly reachable. Application servers connect over a private network. SSH access requires a key from the engineering team.",
  },
  {
    title: "Backups",
    body: "Daily encrypted database snapshots with a 14-day retention window. Snapshots are tested quarterly. Backups are stored in a separate region from primary data.",
  },
];

type Subprocessor = {
  name: string;
  purpose: string;
  url: string;
};

const SUBPROCESSORS: Subprocessor[] = [
  {
    name: "Stripe",
    purpose: "Payment processing, subscription billing, and invoices.",
    url: "https://stripe.com/privacy",
  },
  {
    name: "Resend",
    purpose: "Transactional email delivery — magic links and digests.",
    url: "https://resend.com/legal/privacy-policy",
  },
  {
    name: "Anthropic",
    purpose:
      "AI-powered analysis of competitor page changes (Claude API). Only competitor page content is sent — no customer-identifying data.",
    url: "https://www.anthropic.com/legal/privacy",
  },
  {
    name: "Plausible Analytics",
    purpose:
      "Privacy-focused, cookieless website analytics. No personal data is transmitted.",
    url: "https://plausible.io/privacy",
  },
  {
    name: "Coolify (self-hosted)",
    purpose:
      "Deployment platform running on dedicated hardware. KompWatch infrastructure is not multi-tenant with other vendors.",
    url: "https://coolify.io",
  },
];

type Faq = {
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    q: "Do you have SOC 2?",
    a: "Not yet. SOC 2 Type I is on the roadmap once we exit early-access pricing. Until then, we publish our security practices openly here so prospects can vet us directly. If you need a vendor security questionnaire completed, email security@kompwatch.com.",
  },
  {
    q: "Are you GDPR compliant?",
    a: "Yes. We act as a data processor for the customer data you provide (your account email, the competitor URLs you configure). EU residents can exercise rights under GDPR — access, deletion, portability — by emailing privacy@kompwatch.com. A Data Processing Addendum is available on request.",
  },
  {
    q: "What competitor data do you actually collect?",
    a: "Public web pages only. KompWatch fetches the URLs you configure as a normal HTTP client (or via headless Chromium) and stores the resulting HTML and screenshots. We respect robots.txt and never scrape gated content.",
  },
  {
    q: "Can other customers see my competitor list?",
    a: "No. Competitor lists, snapshots, and digests are scoped per-account at the database level. Internal admin tooling can view metadata for support purposes but is logged.",
  },
  {
    q: "How long do you retain my data?",
    a: "While your account is active, we retain snapshots and changes to power your historical timeline. If you cancel, account data is hard-deleted within 30 days unless you request immediate deletion. Logs are retained for 90 days.",
  },
  {
    q: "Where is data hosted?",
    a: "EU (Hetzner, Germany) on dedicated hardware managed via Coolify. Backups are stored in a separate region. No data is hosted in the United States.",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Compete<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
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

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Trust Center
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Security & Trust
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          KompWatch is a small team that ships fast. That means we publish our
          security practices openly so you can vet us before you put a credit
          card on file — not after a sales call.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: May 7, 2026
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Data practices
          </h2>
          <p className="mt-3 text-gray-600">
            How customer data is stored, transmitted, and accessed.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {DATA_PRACTICES.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-5"
              >
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Subprocessors
          </h2>
          <p className="mt-3 text-gray-600">
            Third-party services that process customer data on our behalf. We
            update this list whenever it changes — bookmark or subscribe to the
            <Link
              href="/changelog"
              className="text-brand-600 underline hover:text-brand-700"
            >
              {" "}changelog
            </Link>{" "}
            for material updates.
          </p>
          <ul className="mt-8 divide-y divide-gray-100 rounded-xl border border-gray-100">
            {SUBPROCESSORS.map((s) => (
              <li key={s.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="min-w-[140px] font-semibold text-gray-900">
                  {s.name}
                </div>
                <div className="flex-1 text-sm leading-relaxed text-gray-600">
                  {s.purpose}
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-600 hover:text-brand-700"
                >
                  Privacy policy →
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Responsible disclosure
          </h2>
          <p className="mt-3 text-gray-600">
            Found a security issue? Please report it privately so we can
            investigate and ship a fix before it becomes public.
          </p>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
            <p className="font-semibold">Please do</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Email{" "}
                <a
                  href="mailto:security@kompwatch.com"
                  className="font-mono underline"
                >
                  security@kompwatch.com
                </a>{" "}
                with reproduction steps and impact.
              </li>
              <li>
                Give us a reasonable window (typically 30 days) before public
                disclosure.
              </li>
              <li>
                Use a test account on the free plan — don&apos;t test against
                paying customer data.
              </li>
            </ul>
            <p className="mt-4 font-semibold">Please don&apos;t</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Run automated scanners that generate significant traffic.</li>
              <li>Access, modify, or exfiltrate data that isn&apos;t yours.</li>
              <li>Perform denial-of-service or social-engineering attacks.</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            We don&apos;t run a paid bounty yet, but we&apos;ll publicly credit
            researchers who report valid issues in good faith.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            FAQ
          </h2>
          <div className="mt-8 space-y-8">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 p-8">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Need a vendor security questionnaire completed?
          </h2>
          <p className="mt-3 text-gray-600">
            We&apos;ll fill out CAIQ, SIG-Lite, or your custom form. Most
            companies hear back within two business days.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:security@kompwatch.com"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Email security@kompwatch.com
            </a>
            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-300"
            >
              Read the privacy policy
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
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
              href="/security"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Security
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Changelog
            </Link>
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
