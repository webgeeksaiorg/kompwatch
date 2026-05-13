import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config";

describe("next.config — comparison-page URL redirects", () => {
  it("redirects /vs/klue → /vs-klue (permanent)", async () => {
    expect(typeof nextConfig.redirects).toBe("function");
    const list = await nextConfig.redirects!();
    const rule = list.find((r) => r.source === "/vs/klue");
    expect(rule).toBeDefined();
    expect(rule!.destination).toBe("/vs-klue");
    expect(rule!.permanent).toBe(true);
  });

  it("redirects /vs/kompyte → /vs-kompyte (permanent)", async () => {
    const list = await nextConfig.redirects!();
    const rule = list.find((r) => r.source === "/vs/kompyte");
    expect(rule).toBeDefined();
    expect(rule!.destination).toBe("/vs-kompyte");
    expect(rule!.permanent).toBe(true);
  });
});
