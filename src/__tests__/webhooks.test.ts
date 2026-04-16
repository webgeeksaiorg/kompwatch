import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  detectPlatform,
  formatSlackPayload,
  formatTeamsPayload,
  formatGenericPayload,
  sendWebhookNotification,
  isValidWebhookUrl,
} from "@/lib/webhooks";
import type { DigestCompetitorGroup } from "@/lib/digest";

const sampleGroups: DigestCompetitorGroup[] = [
  {
    competitor: { name: "Acme Corp", url: "https://acme.com" },
    changes: [
      {
        changeType: "PRICING",
        summary: "Pro plan increased from $49 to $59",
        details: "Monthly price raised by $10",
        severity: "HIGH",
        createdAt: new Date("2026-04-12T10:00:00Z"),
      },
      {
        changeType: "BLOG",
        summary: "New blog post: AI in 2026",
        details: null,
        severity: "LOW",
        createdAt: new Date("2026-04-12T11:00:00Z"),
      },
    ],
  },
  {
    competitor: { name: "Beta Inc", url: "https://beta.io" },
    changes: [
      {
        changeType: "FEATURE",
        summary: "Launched Slack integration",
        details: null,
        severity: "MEDIUM",
        createdAt: new Date("2026-04-12T12:00:00Z"),
      },
    ],
  },
];

describe("detectPlatform", () => {
  it("detects Slack URLs", () => {
    expect(detectPlatform("https://hooks.slack.com/services/T00/B00/xxx")).toBe("slack");
  });

  it("detects Teams URLs", () => {
    expect(detectPlatform("https://outlook.webhook.office.com/webhookb2/xxx")).toBe("teams");
  });

  it("returns generic for unknown URLs", () => {
    expect(detectPlatform("https://myapp.com/webhooks/notify")).toBe("generic");
  });
});

describe("isValidWebhookUrl", () => {
  it("accepts HTTPS URLs", () => {
    expect(isValidWebhookUrl("https://hooks.slack.com/services/T00/B00/xxx")).toBe(true);
  });

  it("rejects HTTP URLs", () => {
    expect(isValidWebhookUrl("http://hooks.slack.com/services/T00/B00/xxx")).toBe(false);
  });

  it("rejects invalid URLs", () => {
    expect(isValidWebhookUrl("not-a-url")).toBe(false);
  });

  it("rejects empty strings", () => {
    expect(isValidWebhookUrl("")).toBe(false);
  });
});

describe("formatSlackPayload", () => {
  it("returns Block Kit format with header and sections", () => {
    const payload = formatSlackPayload(sampleGroups, "DAILY") as { blocks: Array<{ type: string; text?: { text: string } }> };
    expect(payload.blocks).toBeDefined();
    expect(payload.blocks[0].type).toBe("header");
    expect(payload.blocks[0].text?.text).toContain("Daily Digest");
    // Summary block
    expect(payload.blocks[1].type).toBe("section");
  });

  it("includes competitor names and change summaries", () => {
    const payload = formatSlackPayload(sampleGroups, "WEEKLY") as { blocks: Array<{ type: string; text?: { text: string; type: string } }> };
    const sectionTexts = payload.blocks
      .filter((b) => b.type === "section")
      .map((b) => b.text?.text ?? "");
    const allText = sectionTexts.join("\n");
    expect(allText).toContain("Acme Corp");
    expect(allText).toContain("Pro plan increased");
    expect(allText).toContain("Beta Inc");
  });

  it("shows correct change count", () => {
    const payload = formatSlackPayload(sampleGroups, "DAILY") as { blocks: Array<{ type: string; text?: { text: string } }> };
    const summary = payload.blocks[1].text?.text ?? "";
    expect(summary).toContain("3 changes");
    expect(summary).toContain("2 competitors");
  });
});

describe("formatTeamsPayload", () => {
  it("returns Adaptive Card format", () => {
    const payload = formatTeamsPayload(sampleGroups, "DAILY") as {
      type: string;
      attachments: Array<{ contentType: string; content: { type: string; body: object[] } }>;
    };
    expect(payload.type).toBe("message");
    expect(payload.attachments[0].contentType).toBe("application/vnd.microsoft.card.adaptive");
    expect(payload.attachments[0].content.type).toBe("AdaptiveCard");
  });
});

describe("formatGenericPayload", () => {
  it("returns structured JSON", () => {
    const payload = formatGenericPayload(sampleGroups, "WEEKLY") as {
      source: string;
      period: string;
      totalChanges: number;
      competitors: Array<{ name: string; changes: object[] }>;
    };
    expect(payload.source).toBe("kompwatch");
    expect(payload.period).toBe("WEEKLY");
    expect(payload.totalChanges).toBe(3);
    expect(payload.competitors).toHaveLength(2);
    expect(payload.competitors[0].name).toBe("Acme Corp");
    expect(payload.competitors[0].changes).toHaveLength(2);
  });
});

describe("sendWebhookNotification", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns ok for empty groups", async () => {
    const result = await sendWebhookNotification("https://hooks.slack.com/test", [], "DAILY");
    expect(result.ok).toBe(true);
  });

  it("sends POST request with JSON body", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("ok", { status: 200 })
    );

    const result = await sendWebhookNotification(
      "https://hooks.slack.com/services/test",
      sampleGroups,
      "DAILY"
    );

    expect(result.ok).toBe(true);
    expect(fetchSpy).toHaveBeenCalledOnce();
    const [url, opts] = fetchSpy.mock.calls[0];
    expect(url).toBe("https://hooks.slack.com/services/test");
    expect(opts?.method).toBe("POST");
    expect(opts?.headers).toEqual({ "Content-Type": "application/json" });

    // Should use Slack format
    const body = JSON.parse(opts?.body as string);
    expect(body.blocks).toBeDefined();
  });

  it("returns error on HTTP failure", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("forbidden", { status: 403, statusText: "Forbidden" })
    );

    const result = await sendWebhookNotification(
      "https://hooks.slack.com/services/test",
      sampleGroups,
      "DAILY"
    );

    expect(result.ok).toBe(false);
    expect(result.error).toContain("403");
  });

  it("returns error on network failure", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));

    const result = await sendWebhookNotification(
      "https://hooks.slack.com/services/test",
      sampleGroups,
      "DAILY"
    );

    expect(result.ok).toBe(false);
    expect(result.error).toContain("Network error");
  });

  it("uses Teams format for Teams URLs", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("ok", { status: 200 })
    );

    await sendWebhookNotification(
      "https://outlook.webhook.office.com/webhookb2/test",
      sampleGroups,
      "WEEKLY"
    );

    const body = JSON.parse(fetchSpy.mock.calls[0][1]?.body as string);
    expect(body.type).toBe("message");
    expect(body.attachments).toBeDefined();
  });

  it("uses generic format for unknown URLs", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("ok", { status: 200 })
    );

    await sendWebhookNotification(
      "https://myapp.com/hooks/notify",
      sampleGroups,
      "DAILY"
    );

    const body = JSON.parse(fetchSpy.mock.calls[0][1]?.body as string);
    expect(body.source).toBe("kompwatch");
    expect(body.totalChanges).toBe(3);
  });
});
