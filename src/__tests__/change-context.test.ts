import { describe, it, expect } from "vitest";
import { splitChangeDetails } from "@/lib/change-context";

describe("splitChangeDetails", () => {
  it("returns empty strings for null/undefined input", () => {
    expect(splitChangeDetails(null)).toEqual({ factual: "", implication: null });
    expect(splitChangeDetails(undefined)).toEqual({ factual: "", implication: null });
    expect(splitChangeDetails("")).toEqual({ factual: "", implication: null });
  });

  it("returns the original details when no implication marker is present", () => {
    const { factual, implication } = splitChangeDetails("Acme raised Pro from $49 to $59.");
    expect(factual).toBe("Acme raised Pro from $49 to $59.");
    expect(implication).toBeNull();
  });

  it("splits on the canonical 'What this means for you:' prefix", () => {
    const details =
      "Acme increased the Pro tier from $49/mo to $59/mo (20% hike).\nWhat this means for you: A price-sensitive prospect who balked at $49 may now see KompWatch as the obvious value pick.";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("Acme increased the Pro tier from $49/mo to $59/mo (20% hike).");
    expect(implication).toBe(
      "A price-sensitive prospect who balked at $49 may now see KompWatch as the obvious value pick."
    );
  });

  it("matches the prefix case-insensitively", () => {
    const details = "Some change happened.\nwhat this means for you: act now.";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("Some change happened.");
    expect(implication).toBe("act now.");
  });

  it("supports the 'Why this matters' alias", () => {
    const details = "Acme acquired Beta.\nWhy this matters: signals consolidation in the CRM tier.";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("Acme acquired Beta.");
    expect(implication).toBe("signals consolidation in the CRM tier.");
  });

  it("returns implication=null when prefix is present but body is empty", () => {
    const details = "Just the facts.\nWhat this means for you:   ";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("Just the facts.");
    expect(implication).toBeNull();
  });

  it("handles prefix at the start of details with no preceding factual text", () => {
    const details = "What this means for you: heads-up only.";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("");
    expect(implication).toBe("heads-up only.");
  });

  it("preserves whitespace inside the implication body", () => {
    const details = "Diff line.\nWhat this means for you: line one.\nLine two.";
    const { factual, implication } = splitChangeDetails(details);
    expect(factual).toBe("Diff line.");
    expect(implication).toBe("line one.\nLine two.");
  });
});
