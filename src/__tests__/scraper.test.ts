import { describe, it, expect, vi, beforeEach } from "vitest";

// Single hoisted mock — configure per test via mockCreate
const mockCreate = vi.fn();

vi.mock("@anthropic-ai/sdk", () => ({
  default: vi.fn().mockImplementation(() => ({
    messages: { create: mockCreate },
  })),
}));

// Must import AFTER vi.mock
import { detectChanges } from "@/lib/ai";

beforeEach(() => {
  process.env.ANTHROPIC_API_KEY = "test-key";
  mockCreate.mockReset();
});

describe("detectChanges", () => {
  it("returns empty array when no diff parts exist", async () => {
    const result = await detectChanges(
      "TestCo",
      { pricingHtml: null, featuresHtml: null, blogTitles: [], jobTitles: [], techStack: [] },
      { pricingHtml: null, featuresHtml: null, blogTitles: [], jobTitles: [], techStack: [] }
    );
    // No API call should be made when there's nothing to compare
    expect(mockCreate).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("detects new blog posts as changes", async () => {
    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              changeType: "BLOG",
              summary: "New blog post: Launching AI Features",
              details: "Competitor published a blog post about their new AI features.",
              severity: "MEDIUM",
            },
          ]),
        },
      ],
    });

    const result = await detectChanges(
      "TestCo",
      { blogTitles: ["Old Post"] },
      { blogTitles: ["Old Post", "Launching AI Features"] }
    );

    expect(mockCreate).toHaveBeenCalledOnce();
    expect(result).toHaveLength(1);
    expect(result[0].changeType).toBe("BLOG");
    expect(result[0].severity).toBe("MEDIUM");
  });

  it("detects tech stack changes", async () => {
    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              changeType: "TECH",
              summary: "Added Stripe integration",
              details: "Competitor added Stripe to their tech stack.",
              severity: "MEDIUM",
            },
          ]),
        },
      ],
    });

    const result = await detectChanges(
      "TestCo",
      { techStack: ["React", "Next.js"] },
      { techStack: ["React", "Next.js", "Stripe"] }
    );

    expect(mockCreate).toHaveBeenCalledOnce();
    expect(result).toHaveLength(1);
    expect(result[0].changeType).toBe("TECH");
  });

  it("handles malformed AI response gracefully", async () => {
    mockCreate.mockResolvedValue({
      content: [{ type: "text", text: "not valid json" }],
    });

    const result = await detectChanges(
      "TestCo",
      { blogTitles: ["Old"] },
      { blogTitles: ["Old", "New"] }
    );

    expect(result).toEqual([]);
  });

  it("sends competitor name in prompt", async () => {
    mockCreate.mockResolvedValue({
      content: [{ type: "text", text: "[]" }],
    });

    await detectChanges(
      "Acme Corp",
      { pricingHtml: "<p>$10/mo</p>", featuresHtml: null },
      { pricingHtml: "<p>$20/mo</p>", featuresHtml: null }
    );

    expect(mockCreate).toHaveBeenCalledOnce();
    const prompt = mockCreate.mock.calls[0][0].messages[0].content;
    expect(prompt).toContain("Acme Corp");
  });
});

describe("scraper module exports", () => {
  it("exports expected functions", async () => {
    const scraper = await import("@/lib/scraper");
    expect(typeof scraper.scrapeCompetitor).toBe("function");
    expect(typeof scraper.closeBrowser).toBe("function");
  });
});
