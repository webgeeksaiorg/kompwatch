import { describe, it, expect, beforeEach } from "vitest";
import { createMagicToken, verifyMagicToken } from "@/lib/auth";

beforeEach(() => {
  process.env.NEXTAUTH_SECRET = "test-secret-for-unit-tests-32chars!!";
});

describe("createMagicToken / verifyMagicToken", () => {
  it("roundtrips a valid email", () => {
    const token = createMagicToken("user@example.com");
    const email = verifyMagicToken(token);
    expect(email).toBe("user@example.com");
  });

  it("returns null for a tampered token", () => {
    const token = createMagicToken("user@example.com");
    const tampered = token.slice(0, -4) + "xxxx";
    expect(verifyMagicToken(tampered)).toBeNull();
  });

  it("returns null for a completely invalid token", () => {
    expect(verifyMagicToken("not-a-token")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(verifyMagicToken("")).toBeNull();
  });

  it("returns null for an expired token", async () => {
    // Temporarily reduce expiry by mocking Date.now to be 16 min in the future
    const realNow = Date.now;
    const tokenCreatedAt = Date.now();
    const token = createMagicToken("expired@example.com");
    // Advance time past the 15-minute expiry
    Date.now = () => tokenCreatedAt + 16 * 60 * 1000;
    try {
      expect(verifyMagicToken(token)).toBeNull();
    } finally {
      Date.now = realNow;
    }
  });
});
