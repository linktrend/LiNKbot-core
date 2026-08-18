import { beforeEach, describe, expect, it, vi } from "vitest";
import type { AuthProfileCredential } from "./auth-profiles/types.js";

const mocks = vi.hoisted(() => ({
  profiles: {} as Record<string, AuthProfileCredential>,
}));

vi.mock("./auth-profiles/store.js", () => ({
  loadAuthProfileStoreForRuntime: () => ({ version: 1, profiles: mocks.profiles }),
}));

vi.mock("./auth-profiles/order.js", () => ({
  resolveAuthProfileOrder: () => [],
}));

import { resolveCliExecutionAuthProfileId } from "./cli-execution-auth.js";

describe("resolveCliExecutionAuthProfileId", () => {
  beforeEach(() => {
    for (const profileId of Object.keys(mocks.profiles)) {
      delete mocks.profiles[profileId];
    }
  });

  it("rejects an explicitly selected profile from another provider", () => {
    mocks.profiles["openai:work"] = {
      type: "api_key",
      provider: "openai",
      key: `ltfx.n.b10394de41d87ecb7c4a.v1`,
    };

    expect(() =>
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "openai",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "openai:work",
          authProfileIdSource: "user",
        },
      }),
    ).toThrow(/cannot use auth profile "openai:work"/);
  });

  it("rejects a missing explicitly selected profile instead of changing identities", () => {
    expect(() =>
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "google-gemini-cli",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "google-gemini-cli:missing",
          authProfileIdSource: "user",
        },
      }),
    ).toThrow(/No credentials found for profile "google-gemini-cli:missing"/);
  });

  it("bridges only a stored canonical Google API key to Gemini CLI", () => {
    mocks.profiles["google:work"] = {
      type: "api_key",
      provider: "google",
      key: `ltfx.n.cad4bc2c7a5f38453172.v1`,
    };

    expect(
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "google",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "google:work",
          authProfileIdSource: "user",
        },
      }),
    ).toBe("google:work");

    mocks.profiles["google:work"] = {
      type: "oauth",
      provider: "google",
      access: "test-access",
      refresh: "test-refresh",
      expires: Date.now() + 60_000,
    };
    expect(() =>
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "google",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "google:work",
          authProfileIdSource: "user",
        },
      }),
    ).toThrow(/cannot use auth profile "google:work"/);
  });

  it("requires a Gemini-native selected profile to be owned by Gemini CLI", () => {
    mocks.profiles["google-gemini-cli:work"] = {
      type: "api_key",
      provider: "openai",
      key: `ltfx.n.536ee1577b5009d5a2c7.v1`,
    };
    const resolve = () =>
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "google-gemini-cli",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "google-gemini-cli:work",
          authProfileIdSource: "user",
        },
      });

    expect(resolve).toThrow(/cannot use auth profile "google-gemini-cli:work"/);

    mocks.profiles["google-gemini-cli:work"] = {
      type: "oauth",
      provider: "google-gemini-cli",
      access: "test-access",
      refresh: "test-refresh",
      expires: Date.now() + 60_000,
    };
    expect(resolve()).toBe("google-gemini-cli:work");
  });

  it("uses the stored owner for a Gemini-native model profile", () => {
    mocks.profiles["google-gemini-cli:alice"] = {
      type: "oauth",
      provider: "google-gemini-cli",
      access: "test-access",
      refresh: "test-refresh",
      expires: Date.now() + 60_000,
    };

    expect(
      resolveCliExecutionAuthProfileId({
        cliExecutionProvider: "google-gemini-cli",
        authProfileProvider: "google",
        config: {},
        agentDir: "/tmp/unused-agent",
        selected: {
          authProfileId: "google-gemini-cli:alice",
          authProfileIdSource: "user",
        },
      }),
    ).toBe("google-gemini-cli:alice");
  });
});
