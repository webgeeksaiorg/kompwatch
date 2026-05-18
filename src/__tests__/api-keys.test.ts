import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/db", () => ({
  db: {
    apiKey: {
      findUnique: vi.fn(),
      update: vi.fn().mockResolvedValue({}),
    },
  },
}));

import {
  hashApiKey,
  generateApiKey,
  keyDisplayPrefix,
  validateApiKey,
  extractBearerToken,
} from "@/lib/api-keys";
import { db } from "@/lib/db";

describe("API Key Utilities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("generateApiKey", () => {
    it("generates a key with kw_ prefix", () => {
      const key = generateApiKey();
      expect(key).toMatch(/^kw_/);
    });

    it("generates unique keys", () => {
      const key1 = generateApiKey();
      const key2 = generateApiKey();
      expect(key1).not.toBe(key2);
    });

    it("generates keys of reasonable length", () => {
      const key = generateApiKey();
      // kw_ (3) + 32 chars base64url from 24 random bytes
      expect(key.length).toBeGreaterThan(20);
    });
  });

  describe("hashApiKey", () => {
    it("produces consistent SHA-256 hash for same input", () => {
      const hash1 = hashApiKey("kw_test_key_123");
      const hash2 = hashApiKey("kw_test_key_123");
      expect(hash1).toBe(hash2);
    });

    it("produces different hashes for different keys", () => {
      const hash1 = hashApiKey("kw_key_1");
      const hash2 = hashApiKey("kw_key_2");
      expect(hash1).not.toBe(hash2);
    });

    it("returns a 64-char hex string", () => {
      const hash = hashApiKey("kw_test");
      expect(hash).toMatch(/^[a-f0-9]{64}$/);
    });
  });

  describe("keyDisplayPrefix", () => {
    it("returns first 11 chars + ellipsis", () => {
      const prefix = keyDisplayPrefix("kw_abc12345xyz");
      expect(prefix).toBe("kw_abc12345...");
    });
  });

  describe("extractBearerToken", () => {
    it("extracts token from valid Bearer header", () => {
      expect(extractBearerToken("Bearer kw_test123")).toBe("kw_test123");
    });

    it("is case-insensitive for Bearer prefix", () => {
      expect(extractBearerToken("bearer kw_test123")).toBe("kw_test123");
    });

    it("returns null for missing header", () => {
      expect(extractBearerToken(null)).toBeNull();
    });

    it("returns null for non-Bearer auth", () => {
      expect(extractBearerToken("Basic abc123")).toBeNull();
    });

    it("returns null for empty Bearer value", () => {
      expect(extractBearerToken("Bearer ")).toBeNull();
    });
  });

  describe("validateApiKey", () => {
    const mockUser = {
      id: "user_1",
      email: "test@example.com",
      name: "Test User",
      plan: "TEAM",
    };

    it("returns user for a valid key", async () => {
      vi.mocked(db.apiKey.findUnique).mockResolvedValue({
        id: "key_1",
        userId: "user_1",
        name: "Test Key",
        keyHash: hashApiKey("kw_valid_key"),
        prefix: "kw_valid_...",
        revokedAt: null,
        expiresAt: null,
        lastUsedAt: null,
        createdAt: new Date(),
        user: mockUser,
      } as never);

      const user = await validateApiKey("kw_valid_key");
      expect(user).toEqual(mockUser);
    });

    it("returns null for unknown key", async () => {
      vi.mocked(db.apiKey.findUnique).mockResolvedValue(null);
      const user = await validateApiKey("kw_unknown");
      expect(user).toBeNull();
    });

    it("returns null for revoked key", async () => {
      vi.mocked(db.apiKey.findUnique).mockResolvedValue({
        id: "key_1",
        userId: "user_1",
        revokedAt: new Date("2026-01-01"),
        expiresAt: null,
        user: mockUser,
      } as never);

      const user = await validateApiKey("kw_revoked");
      expect(user).toBeNull();
    });

    it("returns null for expired key", async () => {
      vi.mocked(db.apiKey.findUnique).mockResolvedValue({
        id: "key_1",
        userId: "user_1",
        revokedAt: null,
        expiresAt: new Date("2020-01-01"),
        user: mockUser,
      } as never);

      const user = await validateApiKey("kw_expired");
      expect(user).toBeNull();
    });

    it("updates lastUsedAt on successful validation", async () => {
      vi.mocked(db.apiKey.findUnique).mockResolvedValue({
        id: "key_1",
        userId: "user_1",
        revokedAt: null,
        expiresAt: null,
        user: mockUser,
      } as never);

      await validateApiKey("kw_valid");

      expect(db.apiKey.update).toHaveBeenCalledWith({
        where: { id: "key_1" },
        data: { lastUsedAt: expect.any(Date) },
      });
    });
  });
});
