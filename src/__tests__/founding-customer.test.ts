import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const { mockDb } = vi.hoisted(() => ({
  mockDb: {
    user: { count: vi.fn() },
  },
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));

import {
  FOUNDING_CUSTOMER_CAP,
  FOUNDING_CUSTOMER_PRICE_CENTS,
  FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS,
  FOUNDING_REF,
  FOUNDING_PLAN,
  buildFoundingSpots,
  countFoundingCustomers,
  getFoundingSpots,
  getFoundingPromotionCodeId,
  isFoundingClaimable,
  getFoundingDiscountPercent,
} from "@/lib/founding-customer";

describe("founding-customer constants", () => {
  it("hard-codes the cap at 20 (the ticket promise)", () => {
    // This test is intentionally strict — raising the cap breaks the
    // "First 20" marketing copy. Any change here needs a paired Notion
    // update + new content review.
    expect(FOUNDING_CUSTOMER_CAP).toBe(20);
  });

  it("offers $29/mo discounted from $49/mo regular Pro price", () => {
    expect(FOUNDING_CUSTOMER_PRICE_CENTS).toBe(2900);
    expect(FOUNDING_CUSTOMER_REGULAR_PRICE_CENTS).toBe(4900);
  });

  it("targets the PRO plan exclusively (Team excluded)", () => {
    expect(FOUNDING_PLAN).toBe("PRO");
  });

  it("uses a stable acquisitionRef tag for lifetime spot tracking", () => {
    expect(FOUNDING_REF).toBe("founding-20");
  });
});

describe("getFoundingDiscountPercent", () => {
  it("computes 41% off ($49 → $29)", () => {
    // Math: 1 - 2900/4900 = 0.4081... → round to 41%
    expect(getFoundingDiscountPercent()).toBe(41);
  });
});

describe("buildFoundingSpots (pure)", () => {
  it("returns full availability at 0 taken", () => {
    const s = buildFoundingSpots(0);
    expect(s.taken).toBe(0);
    expect(s.remaining).toBe(20);
    expect(s.cap).toBe(20);
    expect(s.capReached).toBe(false);
  });

  it("decrements remaining as taken grows", () => {
    const s = buildFoundingSpots(7);
    expect(s.taken).toBe(7);
    expect(s.remaining).toBe(13);
    expect(s.capReached).toBe(false);
  });

  it("flags capReached at exactly 20", () => {
    const s = buildFoundingSpots(20);
    expect(s.taken).toBe(20);
    expect(s.remaining).toBe(0);
    expect(s.capReached).toBe(true);
  });

  it("clamps remaining to 0 when over-claimed (race condition safety)", () => {
    // If two webhooks race and both stamp acquisitionRef, taken could
    // briefly exceed cap. The UI must still render coherently (no
    // negative "spots remaining" displayed).
    const s = buildFoundingSpots(25);
    expect(s.taken).toBe(25);
    expect(s.remaining).toBe(0);
    expect(s.capReached).toBe(true);
  });

  it("clamps negative input to 0 (defensive — bad DB counts)", () => {
    const s = buildFoundingSpots(-3);
    expect(s.taken).toBe(0);
    expect(s.remaining).toBe(20);
    expect(s.capReached).toBe(false);
  });

  it("floors fractional input (defensive)", () => {
    const s = buildFoundingSpots(5.7);
    expect(s.taken).toBe(5);
    expect(s.remaining).toBe(15);
  });
});

describe("countFoundingCustomers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("queries User by acquisitionRef = 'founding-20'", async () => {
    mockDb.user.count.mockResolvedValue(7);
    const count = await countFoundingCustomers();
    expect(count).toBe(7);
    expect(mockDb.user.count).toHaveBeenCalledWith({
      where: { acquisitionRef: "founding-20" },
    });
  });
});

describe("getFoundingSpots (DB-backed)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("wraps the DB count into the spots view", async () => {
    mockDb.user.count.mockResolvedValue(15);
    const spots = await getFoundingSpots();
    expect(spots.taken).toBe(15);
    expect(spots.remaining).toBe(5);
    expect(spots.cap).toBe(20);
    expect(spots.capReached).toBe(false);
  });

  it("reports capReached when DB returns 20", async () => {
    mockDb.user.count.mockResolvedValue(20);
    const spots = await getFoundingSpots();
    expect(spots.capReached).toBe(true);
    expect(spots.remaining).toBe(0);
  });
});

describe("getFoundingPromotionCodeId", () => {
  const originalEnv = process.env.STRIPE_PROMOTION_CODE_FOUNDING;

  afterEach(() => {
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = originalEnv;
  });

  it("returns the env var when set", () => {
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = "promo_test123";
    expect(getFoundingPromotionCodeId()).toBe("promo_test123");
  });

  it("returns null when the env var is missing", () => {
    delete process.env.STRIPE_PROMOTION_CODE_FOUNDING;
    expect(getFoundingPromotionCodeId()).toBeNull();
  });

  it("returns null when the env var is an empty string", () => {
    // Empty strings come from `.env.example` placeholders — must degrade.
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = "";
    expect(getFoundingPromotionCodeId()).toBeNull();
  });
});

describe("isFoundingClaimable", () => {
  const originalEnv = process.env.STRIPE_PROMOTION_CODE_FOUNDING;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = originalEnv;
  });

  it("is false when the Stripe promo isn't configured (even if spots exist)", async () => {
    delete process.env.STRIPE_PROMOTION_CODE_FOUNDING;
    mockDb.user.count.mockResolvedValue(0);
    expect(await isFoundingClaimable()).toBe(false);
  });

  it("is true when promo is configured and spots remain", async () => {
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = "promo_abc";
    mockDb.user.count.mockResolvedValue(5);
    expect(await isFoundingClaimable()).toBe(true);
  });

  it("is false when promo is configured but cap is reached", async () => {
    process.env.STRIPE_PROMOTION_CODE_FOUNDING = "promo_abc";
    mockDb.user.count.mockResolvedValue(20);
    expect(await isFoundingClaimable()).toBe(false);
  });

  it("short-circuits the DB query when promo isn't configured", async () => {
    // Performance assertion: don't waste a DB round-trip when the program
    // is soft-disabled. Matters on the pricing badge fetch path which
    // runs on every page view.
    delete process.env.STRIPE_PROMOTION_CODE_FOUNDING;
    mockDb.user.count.mockResolvedValue(0);
    await isFoundingClaimable();
    expect(mockDb.user.count).not.toHaveBeenCalled();
  });
});
