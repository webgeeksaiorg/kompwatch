import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockCreate } = vi.hoisted(() => ({
  mockCreate: vi.fn(),
}));

vi.mock("@anthropic-ai/sdk", () => ({
  default: class {
    messages = { create: mockCreate };
  },
}));

import { detectChanges, type ContentZoneType } from "@/lib/ai";

beforeEach(() => {
  vi.stubEnv("ANTHROPIC_API_KEY", "sk-ant-test");
  mockCreate.mockReset();
});

describe("content zone classification", () => {
  it("returns contentZone from AI response", async () => {
    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              changeType: "PRICING",
              contentZone: "MONETIZATION",
              summary: "Pro plan raised from $49 to $59",
              details: "Details",
              severity: "HIGH",
              confidence: 92,
              pageUrl: "https://acme.com/pricing",
            },
          ]),
        },
      ],
    });

    const changes = await detectChanges(
      "Acme",
      { pricingHtml: "<p>$49/mo</p>" },
      { pricingHtml: "<p>$59/mo</p>" },
    );

    expect(changes).toHaveLength(1);
    expect(changes[0].contentZone).toBe("MONETIZATION");
    expect(changes[0].changeType).toBe("PRICING");
  });

  it("defaults to UNKNOWN when AI omits contentZone", async () => {
    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              changeType: "GENERAL",
              summary: "Homepage updated",
              details: "Details",
              severity: "LOW",
              confidence: 60,
            },
          ]),
        },
      ],
    });

    const changes = await detectChanges(
      "Acme",
      { pricingHtml: "<p>old</p>" },
      { pricingHtml: "<p>new</p>" },
    );

    expect(changes).toHaveLength(1);
    expect(changes[0].contentZone).toBe("UNKNOWN");
  });

  it("defaults to UNKNOWN for invalid contentZone value", async () => {
    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify([
            {
              changeType: "FEATURE",
              contentZone: "BANANA",
              summary: "Something changed",
              details: "Details",
              severity: "MEDIUM",
              confidence: 75,
            },
          ]),
        },
      ],
    });

    const changes = await detectChanges(
      "Acme",
      { featuresHtml: "<p>old</p>" },
      { featuresHtml: "<p>new</p>" },
    );

    expect(changes).toHaveLength(1);
    expect(changes[0].contentZone).toBe("UNKNOWN");
  });

  it("normalizes all valid zone values", async () => {
    const zones: ContentZoneType[] = [
      "POSITIONING",
      "MONETIZATION",
      "PRODUCT",
      "MARKETING",
      "TALENT",
      "LEGAL",
      "OPERATIONS",
    ];

    mockCreate.mockResolvedValue({
      content: [
        {
          type: "text",
          text: JSON.stringify(
            zones.map((zone, i) => ({
              changeType: "GENERAL",
              contentZone: zone,
              summary: `Change ${i}`,
              details: "d",
              severity: "LOW",
              confidence: 80,
            })),
          ),
        },
      ],
    });

    const changes = await detectChanges(
      "Acme",
      { pricingHtml: "<p>old</p>" },
      { pricingHtml: "<p>new</p>" },
    );

    expect(changes).toHaveLength(zones.length);
    for (let i = 0; i < zones.length; i++) {
      expect(changes[i].contentZone).toBe(zones[i]);
    }
  });
});
