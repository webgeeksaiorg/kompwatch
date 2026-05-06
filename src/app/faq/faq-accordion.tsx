"use client";

import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
};

type GroupedFaqs = {
  category: string;
  items: FaqItem[];
}[];

export function FaqAccordion({ grouped }: { grouped: GroupedFaqs }) {
  const [search, setSearch] = useState("");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const query = search.toLowerCase().trim();

  const filtered = grouped
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query)
      ),
    }))
    .filter((group) => group.items.length > 0);

  const totalResults = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        {query && (
          <p className="mt-2 text-sm text-gray-500">
            {totalResults} result{totalResults !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      <div className="mt-10 space-y-10">
        {filtered.map((group) => (
          <section key={group.category}>
            <h2 className="text-lg font-semibold text-gray-900">
              {group.category}
            </h2>
            <div className="mt-4 divide-y divide-gray-100 rounded-lg border border-gray-100">
              {group.items.map((item) => {
                const isOpen = openSlug === item.slug;
                return (
                  <div key={item.slug} className="px-4">
                    <button
                      onClick={() =>
                        setOpenSlug(isOpen ? null : item.slug)
                      }
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm font-medium text-gray-900 pr-4">
                        {item.title}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-sm leading-relaxed text-gray-600">
                        <p>{item.summary}</p>
                        <Link
                          href={`/faq/${item.slug}`}
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline"
                        >
                          Read full answer
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500">
            No matching questions found. Try a different search term or{" "}
            <a
              href="mailto:support@kompwatch.com"
              className="text-brand-600 hover:underline"
            >
              contact us
            </a>
            .
          </p>
        )}
      </div>
    </>
  );
}
