import crypto from "crypto";
import { db } from "./db";

const KEY_PREFIX = "kw_";

/** Hash an API key using SHA-256 */
export function hashApiKey(key: string): string {
  return crypto.createHash("sha256").update(key).digest("hex");
}

/** Generate a new raw API key (returned once, never stored) */
export function generateApiKey(): string {
  return KEY_PREFIX + crypto.randomBytes(24).toString("base64url");
}

/** Display prefix for an API key, e.g. "kw_abc12..." */
export function keyDisplayPrefix(key: string): string {
  return key.slice(0, 11) + "...";
}

/** Validate an API key and return the associated user (or null) */
export async function validateApiKey(key: string) {
  const hash = hashApiKey(key);

  const apiKey = await db.apiKey.findUnique({
    where: { keyHash: hash },
    include: { user: true },
  });

  if (!apiKey) return null;
  if (apiKey.revokedAt) return null;
  if (apiKey.expiresAt && apiKey.expiresAt < new Date()) return null;

  // Update last used timestamp (fire-and-forget)
  db.apiKey.update({
    where: { id: apiKey.id },
    data: { lastUsedAt: new Date() },
  }).catch(() => {});

  return apiKey.user;
}

/** Extract Bearer token from Authorization header */
export function extractBearerToken(authHeader: string | null): string | null {
  if (!authHeader) return null;
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  return match?.[1] ?? null;
}
