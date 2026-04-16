import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the KompWatch service.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: April 12, 2026
        </p>

        <div className="mt-12 space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing or using KompWatch (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. The Service is operated by KompWatch (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
            <p className="mt-4">
              KompWatch is a competitor monitoring platform that tracks publicly available web pages for changes and delivers AI-generated summaries. The Service crawls URLs you specify, detects changes in content, pricing, features, and other publicly visible information, and sends digest emails summarizing those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Accounts</h2>
            <div className="mt-4 space-y-3">
              <p>
                You must provide a valid email address to create an account. You are responsible for maintaining the security of your account and for all activity that occurs under it.
              </p>
              <p>
                One person or entity may not maintain more than one free account. We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Subscriptions and Billing</h2>
            <div className="mt-4 space-y-3">
              <p>
                KompWatch offers Free, Pro ($49/month), and Team ($149/month) plans. Paid plans are billed monthly through Stripe. You can manage your subscription and view invoices through the customer billing portal.
              </p>
              <p>
                Paid subscriptions renew automatically. You may cancel at any time through the billing portal — cancellation takes effect at the end of the current billing period. No refunds are provided for partial months.
              </p>
              <p>
                We reserve the right to change pricing with 30 days&apos; notice. Existing subscriptions will be honored at their current rate until the next renewal after the notice period.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Acceptable Use</h2>
            <div className="mt-4 space-y-3">
              <p>You agree to use the Service only for lawful purposes. You may not:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Use the Service to monitor websites where doing so would violate applicable law or the target website&apos;s terms of service.</li>
                <li>Attempt to circumvent plan limits, rate limits, or other usage restrictions.</li>
                <li>Reverse-engineer, decompile, or attempt to extract the source code of the Service.</li>
                <li>Use the Service to harass, harm, or engage in competitive behavior that is illegal or unethical.</li>
                <li>Resell or redistribute access to the Service without our written consent.</li>
                <li>Upload malicious content or attempt to interfere with the Service&apos;s infrastructure.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Competitor Monitoring</h2>
            <div className="mt-4 space-y-3">
              <p>
                KompWatch monitors publicly accessible web pages only. We respect robots.txt directives and rate-limit our crawlers. You are responsible for ensuring that the URLs you add for monitoring are publicly accessible pages that you are permitted to view.
              </p>
              <p>
                We do not guarantee the accuracy, completeness, or timeliness of change detection. AI-generated summaries are provided for informational purposes and should not be treated as legal, financial, or business advice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Intellectual Property</h2>
            <div className="mt-4 space-y-3">
              <p>
                The Service, including its design, code, and AI models, is owned by KompWatch and protected by intellectual property laws. Your subscription grants you a limited, non-exclusive, non-transferable license to use the Service for its intended purpose.
              </p>
              <p>
                You retain ownership of any data you input into the Service. We claim no ownership over the competitor URLs, selectors, or configurations you provide.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Service Availability</h2>
            <p className="mt-4">
              We strive to maintain high availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable for maintenance, updates, or due to circumstances beyond our control. We are not liable for any loss or damage resulting from service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Limitation of Liability</h2>
            <p className="mt-4">
              To the maximum extent permitted by law, KompWatch shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, arising from your use of the Service. Our total liability for any claim arising from or related to the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Termination</h2>
            <div className="mt-4 space-y-3">
              <p>
                You may close your account at any time. We may suspend or terminate your account if you violate these terms or if required by law. Upon termination, your right to use the Service ceases immediately. We will delete your data in accordance with our{" "}
                <Link href="/privacy" className="text-brand-600 hover:text-brand-700 underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Changes to These Terms</h2>
            <p className="mt-4">
              We may modify these terms at any time. We will notify you of material changes by email or through the Service at least 14 days before they take effect. Continued use of the Service after changes take effect constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Contact</h2>
            <p className="mt-4">
              For questions about these terms, contact us at{" "}
              <a href="mailto:legal@kompwatch.com" className="text-brand-600 hover:text-brand-700 underline">legal@kompwatch.com</a>.
            </p>
          </section>
        </div>
      </main>

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
