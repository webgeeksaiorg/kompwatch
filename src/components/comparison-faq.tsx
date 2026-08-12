import Link from "next/link";
import { SoftwareApplicationSchema } from "./software-schema";

type FAQItem = {
  question: string;
  answer: string;
};

export function ComparisonFAQ({
  competitor,
  faqs,
  guideSlug,
  guideLabel,
}: {
  competitor: string;
  faqs: FAQItem[];
  /**
   * Optional slug of a `/faq/{slug}` page containing the full migration guide.
   * When provided, renders a callout link beneath the FAQ so readers can
   * discover the long-form guide (and Google can crawl the internal link).
   */
  guideSlug?: string;
  /** Optional label override for the guide callout link. */
  guideLabel?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SoftwareApplicationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            KompWatch vs {competitor} — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          {guideSlug ? (
            <div className="mt-10 rounded-lg border border-brand-100 bg-brand-50 px-6 py-5 text-center">
              <p className="text-sm text-gray-700">
                Need the full migration walkthrough — data export, parallel
                evaluation, cancellation timing?
              </p>
              <Link
                href={`/faq/${guideSlug}`}
                className="mt-2 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                {guideLabel ?? `Read the full ${competitor} migration guide`}{" "}
                &rarr;
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
