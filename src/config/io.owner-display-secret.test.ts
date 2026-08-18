// Verifies owner display secrets stay redacted in config IO paths.
import { describe, expect, it } from "vitest";
import { retainGeneratedOwnerDisplaySecret } from "./io.owner-display-secret.js";
import type { OpenClawConfig } from "./types.openclaw.js";

type OwnerDisplaySecretRuntimeState = Parameters<
  typeof retainGeneratedOwnerDisplaySecret
>[0]["state"];

function createState(): OwnerDisplaySecretRuntimeState {
  return {
    pendingByPath: new Map<string, string>(),
  };
}

describe("retainGeneratedOwnerDisplaySecret", () => {
  it("keeps generated owner display secrets in runtime state without persisting config", () => {
    const state = createState();
    const configPath = "/tmp/openclaw.json";
    const config = {
      commands: {
        ownerDisplay: "hash",
        ownerDisplaySecret: `ltfx.n.029aae384381cc964330.v1`,
      },
    } as OpenClawConfig;

    const result = retainGeneratedOwnerDisplaySecret({
      config,
      configPath,
      generatedSecret: `ltfx.n.029aae384381cc964330.v1`,
      state,
    });

    expect(result).toBe(config);
    expect(state.pendingByPath.get(configPath)).toBe("generated-owner-secret");
  });

  it("clears pending state when no generated secret is present", () => {
    const state = createState();
    const configPath = "/tmp/openclaw.json";
    state.pendingByPath.set(configPath, "stale-secret");
    const config = {
      commands: {
        ownerDisplay: "hash",
        ownerDisplaySecret: `ltfx.n.06d11b54b82961522733.v1`,
      },
    } as OpenClawConfig;

    const result = retainGeneratedOwnerDisplaySecret({
      config,
      configPath,
      state,
    });

    expect(result).toBe(config);
    expect(state.pendingByPath.has(configPath)).toBe(false);
  });
});
