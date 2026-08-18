import type { Model } from "openclaw/plugin-sdk/llm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SecretSurfaceUnavailableError } from "../../secrets/runtime-degraded-state.js";
import type { AuthProfileStore } from "../auth-profiles.js";
import {
  resolvePreparedRuntimeAuthAttempts,
  resolvePreparedRuntimeModelAuth,
  scopeAuthProfileStoreToPreparedPlan,
} from "./resolve-auth.js";

vi.mock("../model-auth-env-vars.js", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../model-auth-env-vars.js")>()),
  resolveProviderEnvAuthLookupMaps: () => ({
    aliasMap: {},
    envCandidateMap: { openai: ["OPENAI_API_KEY", "OPENAI_OAUTH_TOKEN"] },
    authEvidenceMap: {},
    setupProviderFallbackRefs: [],
  }),
}));

const platformModel = {
  id: "gpt-5.5",
  name: "gpt-5.5",
  provider: "openai",
  api: "openai-responses",
  baseUrl: "https://api.openai.com/v1",
  input: ["text"],
  reasoning: true,
  cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
  contextWindow: 128_000,
  maxTokens: 8_000,
} as Model;

const subscriptionModel = {
  ...platformModel,
  api: "openai-chatgpt-responses",
  baseUrl: "https://chatgpt.com/backend-api/codex",
} as Model;

function authStore(profiles: AuthProfileStore["profiles"]): AuthProfileStore {
  return { version: 1, profiles };
}

describe("resolvePreparedRuntimeModelAuth", () => {
  beforeEach(() => {
    vi.stubEnv("OPENCLAW_TEST_MISSING_PREPARED_AUTH", "");
    vi.stubEnv("OPENCLAW_TEST_MISSING_BOUND_AUTH", "");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("removes profile and selection state after a Platform key is resolved", () => {
    const store = {
      ...authStore({
        "openai:subscription": {
          type: "token",
          provider: "openai",
          token: `ltfx.n.8a255480fb08743cb67c.v1`,
          expires: Date.now() + 60_000,
        },
        "openai:platform": {
          type: "api_key",
          provider: "openai",
          key: `ltfx.n.e75390981221aacccfa9.v1`,
        },
      }),
      order: { openai: ["openai:subscription", "openai:platform"] },
      lastGood: { openai: "openai:subscription" },
      usageStats: { "openai:subscription": { lastUsed: 1 } },
      runtimePersistedProfileIds: ["openai:subscription"],
      runtimeExternalProfileIds: ["openai:subscription"],
      runtimeExternalProfileIdsAuthoritative: true,
    } satisfies AuthProfileStore;

    expect(
      scopeAuthProfileStoreToPreparedPlan(store, {
        providerForAuth: "openai",
        authProfileProviderForAuth: "openai",
        forwardedAuthProfileId: "openai:platform",
        forwardedAuthProfileCandidateIds: ["openai:platform"],
        selectedAuthMode: "api-key",
        modelRoute: {
          provider: "openai",
          modelId: "gpt-5.6",
          api: "openai-responses",
          baseUrl: "https://api.openai.com/v1",
          authRequirement: "api-key",
          requestTransportOverrides: "none",
        },
      }),
    ).toMatchObject({
      profiles: {},
      order: { openai: [] },
      lastGood: {},
      usageStats: {},
      runtimePersistedProfileIds: [],
      runtimeExternalProfileIds: [],
      runtimeExternalProfileIdsAuthoritative: true,
    });
  });

  it("keeps a failed explicit SecretRef terminal across prepared profile candidates", async () => {
    const store = authStore({
      "openai:missing": {
        type: "api_key",
        provider: "openai",
        keyRef: {
          source: "env",
          provider: "default",
          id: "OPENCLAW_TEST_MISSING_PREPARED_AUTH",
        },
      },
      "openai:backup": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.054a82561269425111ef.v1`,
      },
    });

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          forwardedAuthProfileId: "openai:missing",
          forwardedAuthProfileSource: "auto",
          forwardedAuthProfileCandidateIds: ["openai:missing", "openai:backup"],
          selectedAuthMode: "api_key",
          modelRoute: {
            provider: "openai",
            modelId: "gpt-5.5",
            api: "openai-responses",
            baseUrl: "https://api.openai.com/v1",
            authRequirement: "api-key",
            requestTransportOverrides: "none",
          },
        },
        model: platformModel,
        cfg: {},
        store,
        secretSentinels: true,
      }),
    ).rejects.toMatchObject({
      code: "SECRET_SURFACE_UNAVAILABLE",
      ownerKind: "account",
    });
  });

  it(
    "does not borrow an unprepared API-key profile for direct subscription auth",
    { timeout: 1_000 },
    async () => {
      vi.stubEnv("OPENAI_API_KEY", "");
      const store = authStore({
        "openai:platform": {
          type: "api_key",
          provider: "openai",
          key: `ltfx.n.e75390981221aacccfa9.v1`,
        },
      });

      await expect(
        resolvePreparedRuntimeModelAuth({
          plan: {
            providerForAuth: "openai",
            authProfileProviderForAuth: "openai",
            selectedAuthMode: "token",
            modelRoute: {
              provider: "openai",
              modelId: "gpt-5.5",
              api: "openai-chatgpt-responses",
              baseUrl: "https://chatgpt.com/backend-api/codex",
              authRequirement: "subscription",
              requestTransportOverrides: "none",
            },
          },
          model: subscriptionModel,
          cfg: {},
          store,
          secretSentinels: true,
        }),
      ).rejects.toThrow('No API key found for provider "openai"');
    },
  );

  it("resolves an ambient Platform key without borrowing the OAuth-only full store", async () => {
    vi.stubEnv("OPENAI_API_KEY", "ambient-platform-key");
    const store = authStore({
      "openai:chatgpt": {
        type: "oauth",
        provider: "openai",
        access: "subscription-token",
        refresh: "refresh-token",
        expires: Date.now() + 60_000,
      },
    });

    const resolved = await resolvePreparedRuntimeModelAuth({
      plan: {
        providerForAuth: "openai",
        authProfileProviderForAuth: "openai",
        selectedAuthMode: "api-key",
        modelRoute: {
          provider: "openai",
          modelId: "gpt-5.5",
          api: "openai-responses",
          baseUrl: "https://api.openai.com/v1",
          authRequirement: "api-key",
          requestTransportOverrides: "none",
        },
      },
      model: platformModel,
      cfg: {},
      store,
      secretSentinels: true,
    });

    expect(resolved).toMatchObject({
      auth: {
        apiKey: `ltfx.n.4fe68f2c6000c6671d73.v1`,
        mode: "api-key",
      },
      plan: {
        forwardedAuthProfileId: undefined,
        selectedAuthMode: "api-key",
      },
    });
    expect(resolved.auth.source).toContain("OPENAI_API_KEY");
  });

  it("keeps authored unpinned provider auth ahead of an opposite-route store", async () => {
    const store = authStore({
      "openai:chatgpt": {
        type: "token",
        provider: "openai",
        token: `ltfx.n.8a255480fb08743cb67c.v1`,
      },
    });

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          selectedAuthMode: "api-key",
          modelRoute: {
            provider: "openai",
            modelId: "gpt-5.5",
            api: "openai-responses",
            baseUrl: "https://api.openai.com/v1",
            authRequirement: "api-key",
            requestTransportOverrides: "none",
          },
        },
        model: platformModel,
        cfg: {
          models: {
            providers: {
              openai: {
                apiKey: `ltfx.n.48fcb6b834314dfba1bc.v1`,
                baseUrl: "https://api.openai.com/v1",
                models: [],
              },
            },
          },
        },
        store,
        secretSentinels: true,
      }),
    ).resolves.toMatchObject({ auth: { mode: "api-key" } });
  });

  it("materializes authored OpenAI oauth without borrowing the API-only full store", async () => {
    vi.stubEnv("OPENAI_API_KEY", "");
    const store = authStore({
      "openai:platform": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.e75390981221aacccfa9.v1`,
      },
    });
    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          selectedAuthMode: "oauth",
          modelRoute: {
            provider: "openai",
            modelId: "gpt-5.5",
            api: "openai-chatgpt-responses",
            baseUrl: "https://chatgpt.com/backend-api/codex",
            authRequirement: "subscription",
            requestTransportOverrides: "none",
          },
        },
        model: subscriptionModel,
        cfg: {
          models: {
            providers: {
              openai: {
                auth: "oauth",
                apiKey: `ltfx.n.11af581124b82aa02e05.v1`,
                baseUrl: "https://chatgpt.com/backend-api/codex",
                models: [],
              },
            },
          },
        },
        store,
        secretSentinels: true,
      }),
    ).resolves.toMatchObject({
      auth: {
        apiKey: `ltfx.n.11af581124b82aa02e05.v1`,
        source: "models.json",
        mode: "oauth",
      },
      plan: {
        selectedAuthMode: "oauth",
        modelRoute: { authRequirement: "subscription" },
      },
    });
  });

  it("skips a prepared candidate whose stored credential class changed", async () => {
    const store = authStore({
      "openai:changed": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.e75390981221aacccfa9.v1`,
      },
      "openai:backup": {
        type: "token",
        provider: "openai",
        token: `ltfx.n.8a255480fb08743cb67c.v1`,
        expires: Date.now() + 60_000,
      },
    });

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          forwardedAuthProfileId: "openai:changed",
          forwardedAuthProfileSource: "auto",
          forwardedAuthProfileCandidateIds: ["openai:changed", "openai:backup"],
          selectedAuthMode: "token",
          modelRoute: {
            provider: "openai",
            modelId: "gpt-5.5",
            api: "openai-chatgpt-responses",
            baseUrl: "https://chatgpt.com/backend-api/codex",
            authRequirement: "subscription",
            requestTransportOverrides: "none",
          },
        },
        model: subscriptionModel,
        cfg: {},
        store,
        secretSentinels: true,
      }),
    ).resolves.toMatchObject({
      auth: { profileId: "openai:backup", mode: "token" },
      plan: {
        forwardedAuthProfileId: "openai:backup",
        forwardedAuthProfileCandidateIds: ["openai:backup"],
        selectedAuthMode: "token",
      },
    });
  });

  it("skips an automatic candidate that cooled down after plan preparation", async () => {
    const store = authStore({
      "openai:first": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.9e24b55356ef2a121ab5.v1`,
      },
      "openai:backup": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.054a82561269425111ef.v1`,
      },
    });
    const plan = {
      providerForAuth: "openai",
      authProfileProviderForAuth: "openai",
      forwardedAuthProfileId: "openai:first",
      forwardedAuthProfileSource: "auto" as const,
      forwardedAuthProfileCandidateIds: ["openai:first", "openai:backup"],
      selectedAuthMode: "api_key",
      modelRoute: {
        provider: "openai",
        modelId: "gpt-5.5",
        api: "openai-responses" as const,
        baseUrl: "https://api.openai.com/v1",
        authRequirement: "api-key" as const,
        requestTransportOverrides: "none" as const,
      },
    };
    store.usageStats = {
      "openai:first": {
        cooldownUntil: Date.now() + 60_000,
        cooldownReason: "rate_limit",
        cooldownModel: "gpt-5.5",
      },
    };

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan,
        model: platformModel,
        cfg: {},
        store,
        secretSentinels: true,
      }),
    ).resolves.toMatchObject({
      auth: { profileId: "openai:backup" },
      plan: {
        forwardedAuthProfileId: "openai:backup",
        forwardedAuthProfileCandidateIds: ["openai:backup"],
      },
    });
  });

  it("fails closed when every prepared automatic candidate is in cooldown", async () => {
    const store = authStore({
      "openai:first": { type: "api_key", provider: "openai", key: `ltfx.n.9e24b55356ef2a121ab5.v1` },
      "openai:backup": { type: "api_key", provider: "openai", key: `ltfx.n.054a82561269425111ef.v1` },
    });
    store.usageStats = Object.fromEntries(
      ["openai:first", "openai:backup"].map((profileId) => [
        profileId,
        {
          cooldownUntil: Date.now() + 60_000,
          cooldownReason: "rate_limit" as const,
          cooldownModel: "gpt-5.5",
        },
      ]),
    );

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          forwardedAuthProfileId: "openai:first",
          forwardedAuthProfileSource: "auto",
          forwardedAuthProfileCandidateIds: ["openai:first", "openai:backup"],
        },
        model: platformModel,
        cfg: {},
        store,
        secretSentinels: true,
      }),
    ).rejects.toThrow("temporarily unavailable");
  });

  it("does not unlock direct fallback when a profile cools during materialization", async () => {
    const store = authStore({
      "openai:first": { type: "api_key", provider: "openai", key: `ltfx.n.9e24b55356ef2a121ab5.v1` },
    });
    const profilePlan = {
      providerForAuth: "openai",
      authProfileProviderForAuth: "openai",
      forwardedAuthProfileId: "openai:first",
      forwardedAuthProfileSource: "auto" as const,
      forwardedAuthProfileCandidateIds: ["openai:first"],
    };
    const directPlan = {
      providerForAuth: "openai",
      authProfileProviderForAuth: "openai",
    };
    const resolveAuth = vi.fn(async () => ({ plan: directPlan, auth: "unused" }));
    const materializeModel = vi.fn(async () => {
      store.usageStats = {
        "openai:first": { cooldownUntil: Date.now() + 60_000 },
      };
      return platformModel;
    });

    await expect(
      resolvePreparedRuntimeAuthAttempts({
        attempts: [
          { kind: "profile", plan: profilePlan, profileId: "openai:first" },
          {
            kind: "direct",
            plan: directPlan,
            allowAuthProfileFallback: false,
            requiresPriorProfileAttempt: true,
          },
        ],
        store,
        modelId: "gpt-5.5",
        model: platformModel,
        materializeModel,
        resolveAuth,
        errorMessage: "prepared auth failed",
      }),
    ).rejects.toThrow("temporarily unavailable");
    expect(materializeModel).toHaveBeenCalledOnce();
    expect(resolveAuth).not.toHaveBeenCalled();
  });

  it("does not unlock another prepared attempt after an explicit profile ref fails", async () => {
    const profilePlan = {
      providerForAuth: "openai",
      authProfileProviderForAuth: "openai",
      forwardedAuthProfileId: "openai:cold",
      forwardedAuthProfileSource: "auto" as const,
      forwardedAuthProfileCandidateIds: ["openai:cold"],
    };
    const directPlan = {
      providerForAuth: "openai",
      authProfileProviderForAuth: "openai",
    };
    const unavailable = new SecretSurfaceUnavailableError({
      ownerKind: "account",
      ownerId: "openai:cold",
      state: "unavailable",
      paths: ["auth-profiles.openai:cold.key"],
      refKeys: ["env:default:MISSING_OPENAI_KEY"],
      reason: "secret reference was not found",
    });
    const resolveAuth = vi.fn(async ({ attempt }: { attempt: { kind: string } }) => {
      if (attempt.kind === "profile") {
        throw unavailable;
      }
      return { plan: directPlan, auth: "must-not-be-used" };
    });
    const materializeModel = vi.fn(async () => platformModel);

    await expect(
      resolvePreparedRuntimeAuthAttempts({
        attempts: [
          { kind: "profile", plan: profilePlan, profileId: "openai:cold" },
          {
            kind: "direct",
            plan: directPlan,
            allowAuthProfileFallback: false,
            requiresPriorProfileAttempt: true,
          },
        ],
        store: authStore({
          "openai:cold": { type: "api_key", provider: "openai", key: "unused" },
        }),
        modelId: "gpt-5.5",
        model: platformModel,
        materializeModel,
        resolveAuth,
        errorMessage: "prepared auth failed",
      }),
    ).rejects.toBe(unavailable);
    expect(resolveAuth).toHaveBeenCalledOnce();
    expect(materializeModel).toHaveBeenCalledOnce();
  });

  it("forces unscoped model rematerialization for direct fallback after profile failure", async () => {
    const store = authStore({
      "github-copilot:first": {
        type: "token",
        provider: "github-copilot",
        token: `ltfx.n.f6ccb990acf9bce993b1.v1`,
      },
    });
    const profilePlan = {
      providerForAuth: "github-copilot",
      authProfileProviderForAuth: "github-copilot",
      forwardedAuthProfileId: "github-copilot:first",
      forwardedAuthProfileSource: "auto" as const,
      forwardedAuthProfileCandidateIds: ["github-copilot:first"],
    };
    const directPlan = {
      providerForAuth: "github-copilot",
      authProfileProviderForAuth: "github-copilot",
      selectedAuthMode: "token",
    };
    const profileModel = { ...platformModel, contextWindow: 1_050_000 };
    const directModel = { ...platformModel, contextWindow: 400_000 };
    const materializeModel = vi.fn(async ({ forceResolve }: { forceResolve?: boolean }) =>
      forceResolve ? directModel : profileModel,
    );
    const resolveAuth = vi.fn(
      async ({ attempt }: { attempt: { kind: "direct" | "implicit" | "profile" } }) => {
        if (attempt.kind === "profile") {
          throw new Error("profile credential failed");
        }
        return { plan: directPlan, auth: "direct" };
      },
    );

    const result = await resolvePreparedRuntimeAuthAttempts({
      attempts: [
        { kind: "profile", plan: profilePlan, profileId: "github-copilot:first" },
        {
          kind: "direct",
          plan: directPlan,
          allowAuthProfileFallback: false,
          requiresPriorProfileAttempt: true,
        },
      ],
      store,
      modelId: "gpt-5.6-sol",
      model: platformModel,
      materializeModel,
      resolveAuth,
      errorMessage: "prepared auth failed",
    });

    expect(result).toMatchObject({ auth: "direct", model: { contextWindow: 400_000 } });
    expect(materializeModel.mock.calls.map(([input]) => input.forceResolve)).toEqual([false, true]);
  });

  it("forces the first direct model when provider metadata is credential-scoped", async () => {
    const directPlan = {
      providerForAuth: "github-copilot",
      authProfileProviderForAuth: "github-copilot",
      selectedAuthMode: "api-key",
    };
    const directModel = { ...platformModel, contextWindow: 1_050_000 };
    const materializeModel = vi.fn(async () => directModel);

    const result = await resolvePreparedRuntimeAuthAttempts({
      attempts: [
        {
          kind: "direct",
          plan: directPlan,
          allowAuthProfileFallback: false,
          requiresPriorProfileAttempt: false,
        },
      ],
      store: authStore({}),
      modelId: "gpt-5.6-sol",
      model: platformModel,
      materializeModel,
      resolveAuth: async () => ({ plan: directPlan, auth: "direct" }),
      forceCredentialScopedDirectModelResolve: true,
      errorMessage: "prepared auth failed",
    });

    expect(result.model).toBe(directModel);
    expect(materializeModel).toHaveBeenCalledWith({
      plan: directPlan,
      model: platformModel,
      forceResolve: true,
    });
  });

  it("keeps a single bound prepared profile terminal", async () => {
    const store = authStore({
      "openai:bound": {
        type: "api_key",
        provider: "openai",
        keyRef: {
          source: "env",
          provider: "default",
          id: "OPENCLAW_TEST_MISSING_BOUND_AUTH",
        },
      },
      "openai:unbound": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.2ee8030b80db4cd7a1c4.v1`,
      },
    });

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          forwardedAuthProfileId: "openai:bound",
          forwardedAuthProfileSource: "auto",
          forwardedAuthProfileCandidateIds: ["openai:bound"],
        },
        model: platformModel,
        cfg: {
          auth: { order: { openai: ["openai:bound", "openai:unbound"] } },
        },
        store,
        secretSentinels: true,
      }),
    ).rejects.toThrow();
  });

  it("keeps a user-locked profile terminal when environment auth is also present", async () => {
    vi.stubEnv("OPENAI_API_KEY", "ambient-key");
    const store = authStore({
      "openai:locked": {
        type: "api_key",
        provider: "openai",
        key: `ltfx.n.2bbc6ce9917113417ef2.v1`,
      },
    });

    await expect(
      resolvePreparedRuntimeModelAuth({
        plan: {
          providerForAuth: "openai",
          authProfileProviderForAuth: "openai",
          forwardedAuthProfileId: "openai:locked",
          forwardedAuthProfileSource: "user",
          forwardedAuthProfileCandidateIds: ["openai:locked"],
        },
        model: platformModel,
        cfg: {},
        store,
        secretSentinels: true,
      }),
    ).resolves.toMatchObject({
      auth: { profileId: "openai:locked" },
      plan: {
        forwardedAuthProfileId: "openai:locked",
        forwardedAuthProfileSource: "user",
        forwardedAuthProfileCandidateIds: ["openai:locked"],
      },
    });
  });
});
