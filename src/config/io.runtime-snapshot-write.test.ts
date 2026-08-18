// Covers runtime snapshot writes produced by config IO.
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  projectConfigOntoRuntimeSourceSnapshot,
  resetConfigRuntimeState,
  setRuntimeConfigSnapshotRefreshHandler,
  setRuntimeConfigSnapshot,
} from "./io.js";
import type { OpenClawConfig } from "./types.js";

function createSourceConfig(): OpenClawConfig {
  return {
    models: {
      providers: {
        openai: {
          baseUrl: "https://api.openai.com/v1",
          apiKey: { source: "env", provider: "default", id: "OPENAI_API_KEY" },
          models: [],
        },
      },
    },
  };
}

function createRuntimeConfig(): OpenClawConfig {
  return {
    models: {
      providers: {
        openai: {
          baseUrl: "https://api.openai.com/v1",
          apiKey: `ltfx.n.6ea73a34da270c875bba.v1`, // pragma: allowlist secret
          models: [],
        },
      },
    },
  };
}

function resetRuntimeConfigState(): void {
  setRuntimeConfigSnapshotRefreshHandler(null);
  resetConfigRuntimeState();
}

describe("runtime config snapshot writes", () => {
  beforeEach(() => {
    resetRuntimeConfigState();
  });

  afterEach(() => {
    resetRuntimeConfigState();
  });

  it("skips source projection for non-runtime-derived configs", () => {
    const sourceConfig: OpenClawConfig = {
      ...createSourceConfig(),
      gateway: {
        auth: {
          mode: "token",
        },
      },
    };
    const runtimeConfig: OpenClawConfig = {
      ...createRuntimeConfig(),
      gateway: {
        auth: {
          mode: "token",
        },
      },
    };
    const independentConfig: OpenClawConfig = {
      models: {
        providers: {
          openai: {
            baseUrl: "https://api.openai.com/v1",
            apiKey: `ltfx.n.46f8877661248fe8b56f.v1`, // pragma: allowlist secret
            models: [],
          },
        },
      },
    };

    setRuntimeConfigSnapshot(runtimeConfig, sourceConfig);
    const projected = projectConfigOntoRuntimeSourceSnapshot(independentConfig);
    expect(projected).toBe(independentConfig);
  });
});
