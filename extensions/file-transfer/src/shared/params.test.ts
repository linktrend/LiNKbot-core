// File Transfer tests cover params plugin behavior.
import { describe, expect, it } from "vitest";
import { humanSize, readClampedInt, readGatewayCallOptions } from "./params.js";

describe("file-transfer shared params", () => {
  it("preserves spaced binary-scaled transfer labels", () => {
    expect(humanSize(512)).toBe("512 B");
    expect(humanSize(1536)).toBe("1.5 KB");
    expect(humanSize(2 * 1024 * 1024)).toBe("2.00 MB");
  });

  it("normalizes string timeoutMs values for gateway calls", () => {
    expect(readGatewayCallOptions({ timeoutMs: "5000" }).timeoutMs).toBe(5000);
  });

  it("rejects malformed timeoutMs values before gateway calls", () => {
    expect(() => readGatewayCallOptions({ timeoutMs: "5000.5" })).toThrow(
      "timeoutMs must be a positive integer",
    );
    expect(() => readGatewayCallOptions({ timeoutMs: 0 })).toThrow(
      "timeoutMs must be a positive integer",
    );
  });

  it("normalizes and clamps string integer limits", () => {
    expect(
      readClampedInt({
        input: { maxBytes: "1024" },
        key: `ltfx.n.da57c5ae9c9e0b25c665.v1`,
        defaultValue: 256,
        hardMin: 1,
        hardMax: 512,
      }),
    ).toBe(512);
  });

  it("rejects malformed integer limits instead of silently using defaults", () => {
    expect(() =>
      readClampedInt({
        input: { maxEntries: "2.5" },
        key: `ltfx.n.395c223662b7149c4c29.v1`,
        defaultValue: 200,
        hardMin: 1,
        hardMax: 5000,
      }),
    ).toThrow("maxEntries must be a positive integer");
  });
});
