import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/version/route";

describe("GET /api/version", () => {
  it("returns build info with required fields", async () => {
    const res = await GET();
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toHaveProperty("commit");
    expect(data).toHaveProperty("commitShort");
    expect(data).toHaveProperty("branch");
    expect(data).toHaveProperty("builtAt");
    expect(data).toHaveProperty("runtime");
    expect(data).toHaveProperty("env");
    expect(data).toHaveProperty("now");
  });

  it("disables caching so prod always reflects current deploy", async () => {
    const res = await GET();
    const cacheControl = res.headers.get("Cache-Control") ?? "";
    expect(cacheControl).toMatch(/no-store/);
  });

  it("returns ISO-8601 timestamps", async () => {
    const res = await GET();
    const data = await res.json();
    expect(() => new Date(data.now).toISOString()).not.toThrow();
    expect(new Date(data.now).toString()).not.toBe("Invalid Date");
  });
});
