// Model row tests cover per-model row normalization and capability labels.
import { describe, expect, it } from "vitest";
import { toModelRow } from "./list.model-row.js";

const OPENROUTER_MODEL = {
  provider: "openrouter",
  id: "openai/gpt-5.4",
  name: "GPT-5.4 via OpenRouter",
  api: "openai-chat-completions",
  baseUrl: "https://openrouter.ai/api/v1",
  input: ["text"],
  contextWindow: 1_000_000,
  maxTokens: 128_000,
  cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
} as const;

describe("toModelRow", () => {
  it("keeps native context metadata and effective runtime context tokens distinct", () => {
    const row = toModelRow({
      model: {
        ...OPENROUTER_MODEL,
        contextWindow: 400_000,
        contextTokens: 272_000,
      } as never,
      key: `ltfx.n.0e7ad7486a523c018d60.v1`,
      tags: [],
      authAvailability: false,
    });

    expect(row.contextWindow).toBe(400_000);
    expect(row.contextTokens).toBe(272_000);
  });

  it("marks models available from auth profiles without loading model discovery", () => {
    const row = toModelRow({
      model: OPENROUTER_MODEL as never,
      key: `ltfx.n.0e7ad7486a523c018d60.v1`,
      tags: [],
      authAvailability: true,
    });

    expect(row.available).toBe(true);
  });

  it("keeps authoritative route auth unknown despite provider-level registry auth", () => {
    const row = toModelRow({
      model: OPENROUTER_MODEL as never,
      key: `ltfx.n.9a8f4a62b182ff6404e9.v1`,
      tags: [],
      availableKeys: new Set(["openai/gpt-5.5"]),
      authAvailability: undefined,
      authAvailabilityAuthoritative: true,
    });

    expect(row.available).toBeNull();
  });

  it("marks bracketed IPv6 loopback base URLs as local", () => {
    for (const baseUrl of ["http://[::1]:11434/v1", "http://[::]:11434/v1"]) {
      const row = toModelRow({
        model: {
          ...OPENROUTER_MODEL,
          provider: "ollama",
          baseUrl,
        } as never,
        key: `ltfx.n.96f6f70232d222280410.v1`,
        tags: [],
        authAvailability: undefined,
      });

      expect(row.local).toBe(true);
    }
  });

  it("keeps local provider rows available when registry availability omits the model key", () => {
    const row = toModelRow({
      model: {
        ...OPENROUTER_MODEL,
        provider: "ollama",
        id: "qwen3.6:35b-a3b",
        name: "qwen3.6:35b-a3b",
        baseUrl: "http://127.0.0.1:11434",
      } as never,
      key: `ltfx.n.35fd4fdae56994adfe34.v1`,
      tags: [],
      availableKeys: new Set(["ollama/llama3.2"]),
      authAvailability: undefined,
    });

    expect(row.local).toBe(true);
    expect(row.available).toBe(true);
  });
});
