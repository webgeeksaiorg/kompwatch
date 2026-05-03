import { describe, it, expect } from "vitest";
import {
  PRICING_ANCHOR_EXPERIMENT,
  getOrAssignVariant,
  pickVariant,
} from "@/lib/ab";

function makeMemoryStorage() {
  const store = new Map<string, string>();
  return {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => {
      store.set(k, v);
    },
    _store: store,
  };
}

describe("pickVariant", () => {
  it("returns 'A' when rng < 0.5", () => {
    expect(pickVariant(() => 0)).toBe("A");
    expect(pickVariant(() => 0.49)).toBe("A");
  });

  it("returns 'B' when rng >= 0.5", () => {
    expect(pickVariant(() => 0.5)).toBe("B");
    expect(pickVariant(() => 0.99)).toBe("B");
  });

  it("approximates 50/50 over many calls with Math.random", () => {
    let aCount = 0;
    const N = 10_000;
    for (let i = 0; i < N; i++) {
      if (pickVariant() === "A") aCount++;
    }
    // Allow 5pp slack — flaky-proof but still catches a broken split.
    expect(aCount / N).toBeGreaterThan(0.45);
    expect(aCount / N).toBeLessThan(0.55);
  });
});

describe("getOrAssignVariant", () => {
  it("assigns and persists a variant when storage is empty", () => {
    const storage = makeMemoryStorage();
    const v = getOrAssignVariant("exp-1", storage, () => 0.1);
    expect(v).toBe("A");
    expect(storage._store.get("kw-ab-exp-1")).toBe("A");
  });

  it("returns the persisted variant on subsequent calls (sticky)", () => {
    const storage = makeMemoryStorage();
    const first = getOrAssignVariant("exp-2", storage, () => 0.9);
    expect(first).toBe("B");

    // Even if rng would pick A this time, stored B wins.
    const second = getOrAssignVariant("exp-2", storage, () => 0.0);
    expect(second).toBe("B");
  });

  it("namespaces experiments so different keys get independent variants", () => {
    const storage = makeMemoryStorage();
    getOrAssignVariant("exp-a", storage, () => 0.1); // A
    getOrAssignVariant("exp-b", storage, () => 0.9); // B
    expect(storage._store.get("kw-ab-exp-a")).toBe("A");
    expect(storage._store.get("kw-ab-exp-b")).toBe("B");
  });

  it("ignores corrupt stored values and re-assigns", () => {
    const storage = makeMemoryStorage();
    storage._store.set("kw-ab-exp-3", "garbage");
    const v = getOrAssignVariant("exp-3", storage, () => 0.9);
    expect(v).toBe("B");
    expect(storage._store.get("kw-ab-exp-3")).toBe("B");
  });

  it("falls back to pickVariant when storage is null (SSR-like)", () => {
    expect(getOrAssignVariant("exp-4", null, () => 0.1)).toBe("A");
    expect(getOrAssignVariant("exp-4", null, () => 0.9)).toBe("B");
  });

  it("survives storage.getItem throwing (private mode / blocked storage)", () => {
    const throwing: {
      getItem: (k: string) => string | null;
      setItem: (k: string, v: string) => void;
    } = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        // never reached
      },
    };
    expect(getOrAssignVariant("exp-5", throwing, () => 0.1)).toBe("A");
  });

  it("survives storage.setItem throwing (quota exceeded)", () => {
    const partial = {
      getItem: () => null,
      setItem: () => {
        throw new Error("quota");
      },
    };
    // Should still return a variant even though persistence failed.
    expect(getOrAssignVariant("exp-6", partial, () => 0.9)).toBe("B");
  });
});

describe("PRICING_ANCHOR_EXPERIMENT", () => {
  it("has a stable key so analytics segmentation is reproducible", () => {
    expect(PRICING_ANCHOR_EXPERIMENT).toBe("pricing-anchor-monthly-2026-05");
  });
});
