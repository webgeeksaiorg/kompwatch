/**
 * Tests for POST /api/stripe/checkout — specifically the checkout-error
 * telemetry paths added to unblock the P0 acquisition audit (ticket f369).
 *
 * The acquisition audit cannot distinguish "0 conversions because nobody
 * tried" from "0 conversions because Stripe rejected every session" without
 * the `checkout-error` funnel event. These tests lock that contract:
 * every early-return path in the route emits telemetry before responding.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

const {
  mockDb,
  mockStripe,
  mockAuth,
  mockFounding,
  mockGetPriceId,
  mockTrackEvent,
} = vi.hoisted(() => ({
  mockDb: {
    user: {
      update: vi.fn(),
    },
  },
  mockStripe: {
    customers: {
      create: vi.fn(),
    },
    checkout: {
      sessions: {
        create: vi.fn(),
      },
    },
  },
  mockAuth: {
    getCurrentUser: vi.fn(),
  },
  mockFounding: {
    isFoundingClaimable: vi.fn(),
    getFoundingPromotionCodeId: vi.fn(() => null),
  },
  mockGetPriceId: vi.fn((plan: string, period: string): string | null => {
    if (plan === "PRO" && period === "monthly") return "price_pro_monthly";
    if (plan === "TEAM" && period === "monthly") return "price_team_monthly";
    if (plan === "PRO" && period === "annual") return "price_pro_annual";
    if (plan === "TEAM" && period === "annual") return "price_team_annual";
    return null;
  }),
  // We intercept `trackEvent` directly rather than mocking `next/headers` +
  // spying on `fetch`. Rationale: `PLAUSIBLE_DOMAIN` in @/lib/plausible is
  // captured at module-load time, which happens before beforeEach can set
  // env vars — so the internal fetch path would remain a no-op. Mocking the
  // export lets us assert on the wire-level contract we care about.
  mockTrackEvent: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));

vi.mock("@/lib/auth", () => ({
  getCurrentUser: mockAuth.getCurrentUser,
}));

vi.mock("@/lib/stripe", () => ({
  getStripe: () => mockStripe,
  getPriceId: mockGetPriceId,
}));

vi.mock("@/lib/founding-customer", () => ({
  FOUNDING_PLAN: "PRO",
  FOUNDING_REF: "founding-20",
  getFoundingPromotionCodeId: () => mockFounding.getFoundingPromotionCodeId(),
  isFoundingClaimable: () => mockFounding.isFoundingClaimable(),
}));

vi.mock("@/lib/plausible", () => ({
  trackEvent: mockTrackEvent,
  trackServerEvent: mockTrackEvent,
}));

// Import after mocks
import { POST } from "@/app/api/stripe/checkout/route";
import type { NextRequest } from "next/server";

function makeRequest(body: Record<string, unknown> = {}): NextRequest {
  return new Request("http://localhost:3000/api/stripe/checkout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }) as unknown as NextRequest;
}

beforeEach(() => {
  vi.clearAllMocks();
  process.env.NEXTAUTH_URL = "http://localhost:3000";
  // Default: valid logged-in user with an existing Stripe customer
  mockAuth.getCurrentUser.mockResolvedValue({
    id: "user_1",
    email: "u@example.com",
    stripeCustomerId: "cus_existing",
  });
  mockDb.user.update.mockResolvedValue({});
  mockFounding.isFoundingClaimable.mockResolvedValue(false);
  mockFounding.getFoundingPromotionCodeId.mockReturnValue(null);
  mockStripe.checkout.sessions.create.mockResolvedValue({
    id: "cs_test",
    url: "https://checkout.stripe.com/session/cs_test",
  });
});

/**
 * Return every `trackEvent` invocation whose event name matches `name`.
 * Each entry is the `props` argument (3rd positional).
 */
function eventsWithName(name: string): Array<Record<string, string>> {
  return mockTrackEvent.mock.calls
    .filter((call) => call[0] === name)
    .map((call) => (call[2] as Record<string, string>) ?? {});
}

describe("POST /api/stripe/checkout — telemetry contract", () => {
  describe("checkout-error: unauthorized", () => {
    it("returns 401 AND fires checkout-error with reason=unauthorized when user not logged in", async () => {
      mockAuth.getCurrentUser.mockResolvedValue(null);

      const res = await POST(makeRequest({ plan: "PRO" }));
      expect(res.status).toBe(401);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].reason).toBe("unauthorized");
    });
  });

  describe("checkout-error: invalid-plan", () => {
    it("returns 400 AND fires checkout-error with reason=invalid-plan when plan is missing", async () => {
      const res = await POST(makeRequest({}));
      expect(res.status).toBe(400);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].reason).toBe("invalid-plan");
      expect(events[0].plan).toBe("missing");
    });

    it("captures the offending plan string in the event props for debugging", async () => {
      const res = await POST(makeRequest({ plan: "ENTERPRISE" }));
      expect(res.status).toBe(400);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].reason).toBe("invalid-plan");
      expect(events[0].plan).toBe("ENTERPRISE");
    });
  });

  describe("checkout-error: price-missing", () => {
    it("returns 500 AND fires checkout-error with reason=price-missing when getPriceId returns null", async () => {
      // Force getPriceId to return null for a valid plan (simulates missing
      // STRIPE_PRICE_* env var in production — a real risk during Coolify redeploys).
      mockGetPriceId.mockReturnValueOnce(null);

      const res = await POST(makeRequest({ plan: "PRO", billingPeriod: "monthly" }));
      expect(res.status).toBe(500);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].reason).toBe("price-missing");
      expect(events[0].plan).toBe("PRO");
      expect(events[0].billingPeriod).toBe("monthly");
    });
  });

  describe("checkout-error: stripe-api-error", () => {
    it("returns 502 AND fires checkout-error with reason=stripe-api-error when Stripe rejects session create", async () => {
      const stripeErr = Object.assign(new Error("No such price: price_pro_monthly"), {
        code: "resource_missing",
      });
      mockStripe.checkout.sessions.create.mockRejectedValue(stripeErr);
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const res = await POST(makeRequest({ plan: "PRO", billingPeriod: "monthly" }));
      expect(res.status).toBe(502);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].reason).toBe("stripe-api-error");
      expect(events[0].code).toBe("resource_missing");
      expect(events[0].plan).toBe("PRO");

      // We DID log the Stripe failure so ops can grep prod logs by code
      expect(errorSpy).toHaveBeenCalledWith(
        expect.stringContaining("resource_missing")
      );
      errorSpy.mockRestore();
    });

    it("falls back to code=unknown when the Stripe error lacks a code field", async () => {
      mockStripe.checkout.sessions.create.mockRejectedValue(new Error("boom"));
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      const res = await POST(makeRequest({ plan: "PRO", billingPeriod: "monthly" }));
      expect(res.status).toBe(502);

      const events = eventsWithName("checkout-error");
      expect(events).toHaveLength(1);
      expect(events[0].code).toBe("unknown");
      errorSpy.mockRestore();
    });
  });

  describe("happy path", () => {
    it("does NOT fire checkout-error and DOES fire upgrade-initiated on a successful session create", async () => {
      const res = await POST(makeRequest({ plan: "PRO", billingPeriod: "monthly" }));
      expect(res.status).toBe(200);
      const json = await res.json();
      expect(json.url).toBe("https://checkout.stripe.com/session/cs_test");

      expect(eventsWithName("checkout-error")).toHaveLength(0);

      const initEvents = eventsWithName("upgrade-initiated");
      expect(initEvents).toHaveLength(1);
      expect(initEvents[0].plan).toBe("PRO");
      expect(initEvents[0].billingPeriod).toBe("monthly");
      expect(initEvents[0].founding).toBe("false");
    });
  });
});
