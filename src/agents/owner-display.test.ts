// Verifies owner display hashing uses a dedicated secret and raw mode disables it.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { ensureOwnerDisplaySecret, resolveOwnerDisplaySetting } from "./owner-display.js";

describe("resolveOwnerDisplaySetting", () => {
  it("returns keyed hash settings when hash mode has an explicit secret", () => {
    const cfg = {
      commands: {
        ownerDisplay: "hash",
        ownerDisplaySecret: `ltfx.n.257eef139ecf05861ea3.v1`,
      },
    } as OpenClawConfig;

    expect(resolveOwnerDisplaySetting(cfg)).toEqual({
      ownerDisplay: "hash",
      ownerDisplaySecret: `ltfx.n.03f99ad2bb8f470ab4a6.v1`, // pragma: allowlist secret
    });
  });

  it("does not fall back to gateway tokens when hash secret is missing", () => {
    // Gateway auth tokens are unrelated secrets and must never seed owner hashes.
    const cfg = {
      commands: {
        ownerDisplay: "hash",
      },
      gateway: {
        auth: { token: `ltfx.n.34eef96813a9bd91c0e3.v1` },
        remote: { token: `ltfx.n.b3015438b0a4b71001b5.v1` },
      },
    } as OpenClawConfig;

    expect(resolveOwnerDisplaySetting(cfg)).toEqual({
      ownerDisplay: "hash",
      ownerDisplaySecret: undefined,
    });
  });

  it("disables owner hash secret when display mode is raw", () => {
    const cfg = {
      commands: {
        ownerDisplay: "raw",
        ownerDisplaySecret: `ltfx.n.03f99ad2bb8f470ab4a6.v1`, // pragma: allowlist secret
      },
    } as OpenClawConfig;

    expect(resolveOwnerDisplaySetting(cfg)).toEqual({
      ownerDisplay: "raw",
      ownerDisplaySecret: undefined,
    });
  });
});

describe("ensureOwnerDisplaySecret", () => {
  it("generates a dedicated secret when hash mode is enabled without one", () => {
    const cfg = {
      commands: {
        ownerDisplay: "hash",
      },
    } as OpenClawConfig;

    const result = ensureOwnerDisplaySecret(cfg, () => "generated-owner-secret");
    expect(result.generatedSecret).toBe("generated-owner-secret");
    expect(result.config.commands?.ownerDisplaySecret).toBe("generated-owner-secret");
    expect(result.config.commands?.ownerDisplay).toBe("hash");
  });

  it("does nothing when a hash secret is already configured", () => {
    const cfg = {
      commands: {
        ownerDisplay: "hash",
        ownerDisplaySecret: `ltfx.n.6a30e94b6228f4751145.v1`, // pragma: allowlist secret
      },
    } as OpenClawConfig;

    const result = ensureOwnerDisplaySecret(cfg, () => "generated-owner-secret");
    expect(result.generatedSecret).toBeUndefined();
    expect(result.config).toEqual(cfg);
  });
});
