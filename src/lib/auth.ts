import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { db } from "./db";

const SESSION_COOKIE = "cw_session";
const SESSION_MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30 days
const MAGIC_LINK_MAX_AGE = 15 * 60 * 1000; // 15 minutes

function getAuthSecret(): string {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not set");
  return secret;
}

/** Create a signed magic link token encoding email + expiry */
export function createMagicToken(email: string): string {
  const payload = JSON.stringify({
    email,
    exp: Date.now() + MAGIC_LINK_MAX_AGE,
  });
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(getAuthSecret(), "salt", 32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([cipher.update(payload, "utf8"), cipher.final()]);
  return iv.toString("hex") + "." + encrypted.toString("hex");
}

/** Verify a magic link token and return the email if valid */
export function verifyMagicToken(token: string): string | null {
  try {
    const [ivHex, encHex] = token.split(".");
    if (!ivHex || !encHex) return null;
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = Buffer.from(encHex, "hex");
    const key = crypto.scryptSync(getAuthSecret(), "salt", 32);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    const payload = JSON.parse(decrypted.toString("utf8"));
    if (payload.exp < Date.now()) return null;
    return payload.email;
  } catch {
    return null;
  }
}

/** Create a session for a user and set the cookie */
export async function createSession(userId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE);

  await db.session.create({
    data: { userId, token, expiresAt },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });

  return token;
}

/** Get the current authenticated user from the session cookie, or null */
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await db.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    if (session) {
      await db.session.delete({ where: { id: session.id } });
    }
    return null;
  }

  return session.user;
}

/** Require authentication — redirects to /login if not authenticated */
export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Destroy the current session */
export async function destroySession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    await db.session.deleteMany({ where: { token } });
    cookieStore.delete(SESSION_COOKIE);
  }
}

/** Build the magic link URL */
export function getMagicLinkUrl(token: string): string {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  return `${baseUrl}/api/auth/verify?token=${encodeURIComponent(token)}`;
}
