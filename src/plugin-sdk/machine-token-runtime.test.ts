// Public machine-token SDK: consumer types/helpers only; privileged controls stay host-internal.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import * as publicRuntime from "./machine-token-runtime.js";
import {
  authorizationHeaderFromMachineToken,
  fingerprintMachineTokenKeyRef,
  type ResolvedMachineToken,
} from "./machine-token-runtime.js";

const PRIVILEGED_EXPORT_NAMES = [
  "createMachineTokenPluginFacade",
  "resolveMachineTokenAccessForHost",
  "invalidateMachineTokenCacheForHost",
  "clearMachineTokenCacheForHost",
] as const;

const scriptDir = dirname(fileURLToPath(import.meta.url));

describe("plugin-sdk machine-token-runtime", () => {
  it("exports only consumer types and minimal helpers", () => {
    expect(authorizationHeaderFromMachineToken).toBeTypeOf("function");
    expect(fingerprintMachineTokenKeyRef).toBeTypeOf("function");
    expect(publicRuntime.assertMachineTokenIssuerUrl).toBeTypeOf("function");
  });

  it("does not export privileged host construction or global cache controls", () => {
    for (const name of PRIVILEGED_EXPORT_NAMES) {
      expect(publicRuntime).not.toHaveProperty(name);
      expect((publicRuntime as Record<string, unknown>)[name]).toBeUndefined();
    }
  });

  it("keeps privileged control identifiers out of the public SDK source", () => {
    const source = readFileSync(join(scriptDir, "machine-token-runtime.ts"), "utf8");
    for (const name of PRIVILEGED_EXPORT_NAMES) {
      expect(source).not.toContain(name);
    }
    expect(source).not.toMatch(/\bfrom\s+["'][^"']*machine-token-host/u);
    expect(source).not.toMatch(/\bexport\s+(?:async\s+)?function\s+createMachineToken/u);
    expect(source).not.toMatch(/\bexport\s+(?:const|function)\s+clearMachineToken/u);
  });

  it("builds a Bearer Authorization header without mutating the token", () => {
    const token: ResolvedMachineToken = {
      bindingId: "binding-a",
      bindingFingerprint: "fp-binding-a",
      accessToken: "mt-access-token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer",
    };

    expect(authorizationHeaderFromMachineToken(token)).toEqual({
      authorization: "Bearer mt-access-token",
    });
    expect(token.accessToken).toBe("mt-access-token");
  });

  it("fingerprints SecretRef identity without requiring host facade construction", () => {
    const left = fingerprintMachineTokenKeyRef({
      source: "env",
      provider: "gsm",
      id: "brain-key",
    });
    const right = fingerprintMachineTokenKeyRef({
      source: "env",
      provider: "gsm",
      id: "brain-key",
    });
    const other = fingerprintMachineTokenKeyRef({
      source: "env",
      provider: "gsm",
      id: "skills-key",
    });
    expect(left).toBe(right);
    expect(left).not.toBe(other);
    expect(left).toMatch(/^[a-f0-9]{64}$/u);
  });

  it("keeps host construction off the public plugin-sdk entrypoint list", () => {
    const entrypoints = JSON.parse(
      readFileSync(join(scriptDir, "../../scripts/lib/plugin-sdk-entrypoints.json"), "utf8"),
    ) as string[];
    expect(entrypoints).toContain("machine-token-runtime");
    expect(entrypoints).not.toContain("machine-token-host");
    expect(entrypoints.some((entry) => entry.includes("machine-token-host"))).toBe(false);
  });

  it("public MachineTokenPluginFacade.acquire accepts only bindingId plus controls", () => {
    const typesSource = readFileSync(join(scriptDir, "../agents/machine-token-types.ts"), "utf8");
    const acquireContract = typesSource.match(
      /export type MachineTokenPluginFacadeAcquireParams = \{([\s\S]*?)\};/u,
    );
    expect(acquireContract?.[1]).toBeTruthy();
    const acquireBody = acquireContract?.[1] ?? "";
    expect(acquireBody).toMatch(/\bbindingId:\s*string\b/u);
    expect(acquireBody).toMatch(/\bsignal\?:\s*AbortSignal\b/u);
    expect(acquireBody).toMatch(/\bforceRefresh\?:\s*boolean\b/u);
    expect(acquireBody).not.toMatch(/\bbinding:\s*MachineTokenBinding\b/u);
    expect(acquireBody).not.toMatch(/\bfetchFn\b/u);
    expect(acquireBody).not.toMatch(/\bnow\b/u);
    expect(acquireBody).not.toMatch(/clientAssertionKeyPem/u);

    const facadeAcquire = typesSource.match(
      /acquire:\s*\(params:\s*MachineTokenPluginFacadeAcquireParams\)\s*=>/u,
    );
    expect(facadeAcquire).toBeTruthy();

    // Type-level: Parameters of acquire must not include fetchFn/now/binding keys.
    type AcquireParams = Parameters<publicRuntime.MachineTokenPluginFacade["acquire"]>[0];
    type ForbiddenKeys = Extract<keyof AcquireParams, "fetchFn" | "now" | "binding">;
    const forbiddenKeysProof: ForbiddenKeys extends never ? true : false = true;
    expect(forbiddenKeysProof).toBe(true);

    type AllowedKeys = keyof AcquireParams;
    const allowed: AllowedKeys[] = ["bindingId", "signal", "forceRefresh"];
    expect(allowed).toEqual(["bindingId", "signal", "forceRefresh"]);
  });
});
