import type { MetadataRoute } from "next";

const siteUrl = "https://kompwatch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const comparisonSlugs = [
    "vs-crayon",
    "vs-klue",
    "vs-kompyte",
    "vs-caelian",
    "vs-seeto",
    "vs-visualping",
    "vs-google-alerts",
    "vs-battlecard",
    "vs-already-dev",
    "vs-rivalsense",
  ];

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sample-digest`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...comparisonSlugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/llm-visibility`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/login`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
