import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockDb, mockStripe } = vi.hoisted(() => ({
  mockDb: {
    stripeEvent: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
    user: {
      update: vi.fn(),
    },
  },
  mockStripe: {
    webhooks: {
      constructEvent: vi.fn(),
    },
    subscriptions: {
      retrieve: vi.fn(),
    },
  },
}));

vi.mock("@/lib/db", () => ({
  db: mockDb,
}));

vi.mock("@/lib/stripe", () => ({
  getStripe: () => mockStripe,
}));

// Import after mocks
import { POST } from "@/app/api/webhooks/stripe/route";

function makeRequest(body: string, sig = "sig_test"): Request {
  return new Request("http://localhost:3000/api/webhooks/stripe", {
    method: "POST",
    headers: { "stripe-signature": sig },
    body,
  });
}

function stripeEvent(type: string, data: Record<string, unknown>, id = "evt_test123") {
  return { id, type, data: { object: data } };
}

beforeEach(() => {
  vi.clearAllMocks();
  process.env.STRIPE_WEBHOOK_SECRET = "whsec_test";
  process.env.STRIPE_PRICE_PRO = "price_pro";
  process.env.STRIPE_PRICE_TEAM = "price_team";
  // Default: event not yet processed
  mockDb.stripeEvent.findUnique.mockResolvedValue(null);
  mockDb.stripeEvent.create.mockResolvedValue({});
  mockDb.user.update.mockResolvedValue({});
});

describe("POST /api/webhooks/stripe", () => {
  it("returns 400 when stripe-signature header is missing", async () => {
    const req = new Request("http://localhost:3000/api/webhooks/stripe", {
      method: "POST",
      body: "{}",
    });
    const res = await POST(req as never);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("Missing signature");
  });

  it("returns 400 when signature verification fails", async () => {
    mockStripe.webhooks.constructEvent.mockImplementation(() => {
      throw new Error("Invalid signature");
    });

    const res = await POST(makeRequest("{}") as never);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("Invalid signature");
  });

  it("returns 500 when webhook secret is not configured", async () => {
    delete process.env.STRIPE_WEBHOOK_SECRET;
    const res = await POST(makeRequest("{}") as never);
    expect(res.status).toBe(500);
  });

  it("skips already-processed events (idempotency)", async () => {
    const event = stripeEvent("checkout.session.completed", {});
    mockStripe.webhooks.constructEvent.mockReturnValue(event);
    mockDb.stripeEvent.findUnique.mockResolvedValue({ id: event.id });

    const res = await POST(makeRequest("{}") as never);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.received).toBe(true);
    // Should NOT create a new event record
    expect(mockDb.stripeEvent.create).not.toHaveBeenCalled();
    // Should NOT update user
    expect(mockDb.user.update).not.toHaveBeenCalled();
  });

  it("records event before processing", async () => {
    const event = stripeEvent("unknown.event", {});
    mockStripe.webhooks.constructEvent.mockReturnValue(event);

    await POST(makeRequest("{}") as never);

    expect(mockDb.stripeEvent.create).toHaveBeenCalledWith({
      data: { id: "evt_test123", type: "unknown.event" },
    });
  });

  describe("checkout.session.completed", () => {
    it("updates user plan to PRO on checkout", async () => {
      const event = stripeEvent("checkout.session.completed", {
        customer: "cus_123",
        subscription: "sub_456",
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);
      mockStripe.subscriptions.retrieve.mockResolvedValue({
        items: { data: [{ price: { id: "price_pro" } }] },
      });

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).toHaveBeenCalledWith({
        where: { stripeCustomerId: "cus_123" },
        data: { stripeSubscriptionId: "sub_456", plan: "PRO" },
      });
    });

    it("updates user plan to TEAM on checkout", async () => {
      const event = stripeEvent("checkout.session.completed", {
        customer: "cus_123",
        subscription: "sub_789",
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);
      mockStripe.subscriptions.retrieve.mockResolvedValue({
        items: { data: [{ price: { id: "price_team" } }] },
      });

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).toHaveBeenCalledWith({
        where: { stripeCustomerId: "cus_123" },
        data: { stripeSubscriptionId: "sub_789", plan: "TEAM" },
      });
    });

    it("skips update when customer or subscription is missing", async () => {
      const event = stripeEvent("checkout.session.completed", {
        customer: null,
        subscription: null,
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).not.toHaveBeenCalled();
    });

    it("skips update for unknown price ID", async () => {
      const event = stripeEvent("checkout.session.completed", {
        customer: "cus_123",
        subscription: "sub_456",
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);
      mockStripe.subscriptions.retrieve.mockResolvedValue({
        items: { data: [{ price: { id: "price_unknown" } }] },
      });

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).not.toHaveBeenCalled();
    });
  });

  describe("customer.subscription.updated", () => {
    it("updates plan when subscription is active", async () => {
      const event = stripeEvent("customer.subscription.updated", {
        id: "sub_456",
        customer: "cus_123",
        status: "active",
        items: { data: [{ price: { id: "price_team" } }] },
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).toHaveBeenCalledWith({
        where: { stripeCustomerId: "cus_123" },
        data: { stripeSubscriptionId: "sub_456", plan: "TEAM" },
      });
    });

    it("updates plan when subscription is trialing", async () => {
      const event = stripeEvent("customer.subscription.updated", {
        id: "sub_456",
        customer: "cus_123",
        status: "trialing",
        items: { data: [{ price: { id: "price_pro" } }] },
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).toHaveBeenCalledWith({
        where: { stripeCustomerId: "cus_123" },
        data: { stripeSubscriptionId: "sub_456", plan: "PRO" },
      });
    });

    it("does NOT update plan when subscription is past_due", async () => {
      const event = stripeEvent("customer.subscription.updated", {
        id: "sub_456",
        customer: "cus_123",
        status: "past_due",
        items: { data: [{ price: { id: "price_pro" } }] },
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).not.toHaveBeenCalled();
    });

    it("does NOT update plan when subscription is canceled", async () => {
      const event = stripeEvent("customer.subscription.updated", {
        id: "sub_456",
        customer: "cus_123",
        status: "canceled",
        items: { data: [{ price: { id: "price_pro" } }] },
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).not.toHaveBeenCalled();
    });
  });

  describe("customer.subscription.deleted", () => {
    it("downgrades user to FREE and clears subscription ID", async () => {
      const event = stripeEvent("customer.subscription.deleted", {
        customer: "cus_123",
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).toHaveBeenCalledWith({
        where: { stripeCustomerId: "cus_123" },
        data: { stripeSubscriptionId: null, plan: "FREE" },
      });
    });
  });

  describe("invoice.payment_failed", () => {
    it("handles payment failure without crashing", async () => {
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const event = stripeEvent("invoice.payment_failed", {
        customer: "cus_123",
        id: "in_456",
        attempt_count: 2,
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining("cus_123")
      );
      // Should NOT change user plan — Stripe handles retries
      expect(mockDb.user.update).not.toHaveBeenCalled();
      warnSpy.mockRestore();
    });
  });

  describe("error handling", () => {
    it("returns 500 when handler throws", async () => {
      const event = stripeEvent("customer.subscription.deleted", {
        customer: "cus_nonexistent",
      });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);
      mockDb.user.update.mockRejectedValue(new Error("Record not found"));

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(500);
      const json = await res.json();
      expect(json.error).toBe("Processing failed");
    });
  });

  describe("unhandled event types", () => {
    it("returns 200 for unknown event types without processing", async () => {
      const event = stripeEvent("product.created", { id: "prod_123" });
      mockStripe.webhooks.constructEvent.mockReturnValue(event);

      const res = await POST(makeRequest("{}") as never);
      expect(res.status).toBe(200);
      expect(mockDb.user.update).not.toHaveBeenCalled();
    });
  });
});
