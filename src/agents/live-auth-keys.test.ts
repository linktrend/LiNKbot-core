/**
 * Regression coverage for live-test provider API-key discovery.
 * Verifies env precedence, manifest fallback, and non-secret error classifiers.
 */
import { beforeAll, describe, expect, it, vi } from "vitest";

vi.unmock("../secrets/provider-env-vars.js");

let collectProviderApiKeys: typeof import("./live-auth-keys.js").collectProviderApiKeys;

async function loadModulesForTest(): Promise<void> {
  vi.resetModules();
  vi.doUnmock("../secrets/provider-env-vars.js");
  ({ collectProviderApiKeys } = await import("./live-auth-keys.js"));
}

beforeAll(async () => {
  await loadModulesForTest();
});

describe("collectProviderApiKeys", () => {
  it("honors provider auth env vars with nonstandard names", () => {
    const env = { MODELSTUDIO_API_KEY: `ltfx.n.46bbe0ff2f00cfca3aac.v1` };

    expect(
      collectProviderApiKeys("alibaba", {
        env,
        providerEnvVars: ["MODELSTUDIO_API_KEY", "DASHSCOPE_API_KEY"],
      }),
    ).toEqual(["modelstudio-live-key"]);
  });

  it("dedupes manifest env vars against direct provider env naming", () => {
    const env = { XAI_API_KEY: `ltfx.n.1f7b247a6e5157311700.v1` };

    expect(
      collectProviderApiKeys("xai", {
        env,
        providerEnvVars: ["XAI_API_KEY"],
      }),
    ).toEqual(["xai-live-key"]);
  });
});
