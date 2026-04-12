import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CompeteWatch",
  description: "How CompeteWatch collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Compete<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/#pricing" className="text-sm text-gray-600 hover:text-gray-900">
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
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: April 12, 2026
        </p>

        <div className="mt-12 space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <div className="mt-4 space-y-3">
              <p>
                <strong className="text-gray-900">Account information.</strong> When you create an account, we collect your email address and name. We use magic link authentication — we do not collect or store passwords.
              </p>
              <p>
                <strong className="text-gray-900">Billing information.</strong> Payment processing is handled by Stripe. We do not store credit card numbers or full payment details on our servers. We retain your Stripe customer ID and subscription status to manage your plan.
              </p>
              <p>
                <strong className="text-gray-900">Competitor data you provide.</strong> When you add competitors to monitor, we store the URLs and CSS selectors you configure. Snapshots of competitor pages are stored to detect changes over time.
              </p>
              <p>
                <strong className="text-gray-900">Usage data.</strong> We collect anonymized analytics (via Plausible Analytics, a privacy-focused provider) including pages visited and feature usage. We do not use cookies for tracking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>To provide and maintain the CompeteWatch service, including competitor monitoring, change detection, and digest delivery.</li>
              <li>To process payments and manage your subscription through Stripe.</li>
              <li>To send transactional emails — magic link login, digest summaries, and account notifications via Resend.</li>
              <li>To improve the service based on anonymized usage patterns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Data Sharing</h2>
            <div className="mt-4 space-y-3">
              <p>We do not sell your personal data. We share data only with the following service providers, strictly to operate the service:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-gray-900">Stripe</strong> — payment processing and subscription management.</li>
                <li><strong className="text-gray-900">Resend</strong> — transactional email delivery (login links, digests).</li>
                <li><strong className="text-gray-900">Anthropic (Claude API)</strong> — AI-powered analysis of competitor changes. Competitor page content is sent to generate change summaries. No personal user data is included in these requests.</li>
                <li><strong className="text-gray-900">Plausible Analytics</strong> — privacy-focused, cookieless website analytics. No personal data is transmitted.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Data Retention</h2>
            <div className="mt-4 space-y-3">
              <p>
                Account data is retained while your account is active. Competitor snapshots are retained for up to 90 days to enable change detection and historical comparison. Digest emails are stored for 12 months.
              </p>
              <p>
                When you delete your account, we remove your personal data, competitor configurations, and stored snapshots within 30 days. Anonymized analytics data may be retained indefinitely.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Security</h2>
            <p className="mt-4">
              We use industry-standard measures to protect your data, including encrypted connections (TLS), secure authentication (magic links with expiring tokens), and restricted database access. Stripe handles all payment security and is PCI-DSS compliant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
            <div className="mt-4 space-y-3">
              <p>You can:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access your account data at any time through the dashboard.</li>
                <li>Export your competitor data and change history.</li>
                <li>Delete your account and all associated data.</li>
                <li>Manage your subscription and billing through the Stripe customer portal.</li>
              </ul>
              <p>
                For data requests or questions, contact us at <a href="mailto:privacy@kompwatch.com" className="text-brand-600 hover:text-brand-700 underline">privacy@kompwatch.com</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Cookies</h2>
            <p className="mt-4">
              CompeteWatch uses only essential cookies required for authentication (session cookies). We do not use third-party tracking cookies. Our analytics provider (Plausible) is cookieless.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Policy</h2>
            <p className="mt-4">
              We may update this policy from time to time. We will notify you of material changes by email or through the service. Continued use of CompeteWatch after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Contact</h2>
            <p className="mt-4">
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:privacy@kompwatch.com" className="text-brand-600 hover:text-brand-700 underline">privacy@kompwatch.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CompeteWatch. All rights reserved.
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
