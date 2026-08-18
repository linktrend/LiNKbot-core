// Non-interactive auth-choice inference tests cover core and plugin-defined CLI auth flags.
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { OnboardOptions } from "../../onboard-types.js";
import { inferAuthChoiceFromFlags } from "./auth-choice-inference.js";

const resolveProviderOnboardAuthFlags = vi.hoisted(() =>
  vi.fn<
    () => ReadonlyArray<{
      optionKey: string;
      authChoice: string;
      cliFlag: string;
    }>
  >(() => []),
);

vi.mock("../../../plugins/provider-auth-choices.js", () => ({
  resolveProviderOnboardAuthFlags,
}));

describe("inferAuthChoiceFromFlags", () => {
  beforeEach(() => {
    resolveProviderOnboardAuthFlags.mockReset();
    resolveProviderOnboardAuthFlags.mockReturnValue([]);
  });

  it("infers plugin-owned auth choices from manifest option keys", () => {
    resolveProviderOnboardAuthFlags.mockReturnValue([
      {
        optionKey: "pluginOwnedApiKey",
        authChoice: "plugin-api-key",
        cliFlag: "--plugin-api-key",
      },
    ]);

    const opts: OnboardOptions = {
      pluginOwnedApiKey: `ltfx.n.c44dfd73a3438867e978.v1`,
    };

    expect(inferAuthChoiceFromFlags(opts)).toEqual({
      choice: "plugin-api-key",
      matches: [
        {
          optionKey: "pluginOwnedApiKey",
          authChoice: "plugin-api-key",
          label: "--plugin-api-key",
        },
      ],
    });
  });

  it("infers the built-in custom provider from custom flags", () => {
    const opts: OnboardOptions = {
      customBaseUrl: "https://models.custom.local/v1",
      customModelId: "local-large",
      customApiKey: `ltfx.n.0b34af848dc9e9f504e9.v1`, // pragma: allowlist secret
    };

    expect(inferAuthChoiceFromFlags(opts)).toEqual({
      choice: "custom-api-key",
      matches: [
        {
          optionKey: "customBaseUrl",
          authChoice: "custom-api-key",
          label: "--custom-base-url/--custom-model-id/--custom-api-key",
        },
      ],
    });
  });
});
