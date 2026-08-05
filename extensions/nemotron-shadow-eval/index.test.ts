import type { OpenClawPluginApi } from "openclaw/plugin-sdk/plugin-entry";
import { describe, expect, it, vi } from "vitest";
import plugin from "./index.js";

class MemoryStore<T> {
  readonly values = new Map<string, T>();
  register(key: string, value: T) {
    this.values.set(key, value);
  }
  registerIfAbsent(key: string, value: T) {
    if (this.values.has(key)) {
      return false;
    }
    this.values.set(key, value);
    return true;
  }
  update(key: string, updater: (current: T | undefined) => T | undefined) {
    const value = updater(this.values.get(key));
    if (value === undefined) {
      this.values.delete(key);
    } else {
      this.values.set(key, value);
    }
    return true;
  }
  lookup(key: string) {
    return this.values.get(key);
  }
  consume(key: string) {
    const value = this.values.get(key);
    this.values.delete(key);
    return value;
  }
  delete(key: string) {
    return this.values.delete(key);
  }
  deleteIf(key: string, predicate: (value: T) => boolean) {
    const value = this.values.get(key);
    return value !== undefined && predicate(value) ? this.values.delete(key) : false;
  }
  entries() {
    return [...this.values.entries()].map(([key, value]) => ({ key, value, createdAt: 0 }));
  }
  clear() {
    this.values.clear();
  }
}

describe("nemotron shadow plugin", () => {
  it("samples exactly the tenth eligible successful zero-tool run", async () => {
    const handlers = new Map<string, (...args: unknown[]) => unknown>();
    const stores = new Map<string, MemoryStore<unknown>>();
    const complete = vi.fn(async () => ({
      text: "A shadow answer about the blue sky.",
      provider: "openrouter",
      model: "nvidia/nemotron-3-super-120b-a12b",
      agentId: "main",
      usage: { inputTokens: 10, outputTokens: 9, totalTokens: 19, costUsd: 0.001 },
      audit: { caller: { kind: "plugin", id: "nemotron-shadow-eval" } },
    }));
    const api = {
      registrationMode: "full",
      pluginConfig: { sampleEvery: 10, sessionKeys: ["agent:main:main"] },
      on: (name: string, handler: (...args: unknown[]) => unknown) => handlers.set(name, handler),
      logger: { warn: vi.fn(), info: vi.fn(), debug: vi.fn(), error: vi.fn() },
      runtime: {
        llm: { complete },
        state: {
          openSyncKeyedStore: ({ namespace }: { namespace: string }) => {
            const store = new MemoryStore<unknown>();
            stores.set(namespace, store);
            return store;
          },
        },
      },
    } as unknown as OpenClawPluginApi;
    plugin.register(api);
    const llmInput = handlers.get("llm_input")!;
    const llmOutput = handlers.get("llm_output")!;
    const agentEnd = handlers.get("agent_end")!;

    for (let index = 1; index <= 10; index += 1) {
      const runId = `run-${index}`;
      const ctx = { agentId: "main", sessionKey: "agent:main:main", runId };
      llmInput(
        {
          runId,
          sessionId: "session",
          provider: "openai",
          model: "gpt-5.6-luna",
          prompt: "Explain why the sky appears blue.",
          historyMessages: [],
          imagesCount: 0,
          tools: [{ name: "read" }],
        },
        ctx,
      );
      llmOutput(
        {
          runId,
          sessionId: "session",
          provider: "openai",
          model: "gpt-5.6-luna",
          resolvedRef: "openai/gpt-5.6-luna",
          assistantTexts: ["The atmosphere scatters blue light."],
          usage: {},
        },
        ctx,
      );
      await agentEnd({ runId, messages: [], success: true }, ctx);
    }

    expect(complete).toHaveBeenCalledTimes(1);
    expect(complete).toHaveBeenCalledWith({
      messages: [{ role: "user", content: "Explain why the sky appears blue." }],
      model: "openrouter/nvidia/nemotron-3-super-120b-a12b",
      maxTokens: 800,
      reasoning: "medium",
      purpose: "nemotron-shadow-eval.sample",
    });
    const receipts = stores.get("receipts")!;
    expect(receipts.values.size).toBe(1);
    const receipt = [...receipts.values.values()][0] as Record<string, unknown>;
    expect(receipt.eligibleOrdinal).toBe(10);
    expect(receipt.contextParity).toBe("prompt_only");
    expect(receipt.qualityVerdict).toBe("unjudged");
  });

  it("excludes a run that actually calls a tool", async () => {
    const handlers = new Map<string, (...args: unknown[]) => unknown>();
    const complete = vi.fn();
    const api = {
      registrationMode: "full",
      pluginConfig: { sampleEvery: 10 },
      on: (name: string, handler: (...args: unknown[]) => unknown) => handlers.set(name, handler),
      logger: { warn: vi.fn(), info: vi.fn(), debug: vi.fn(), error: vi.fn() },
      runtime: {
        llm: { complete },
        state: { openSyncKeyedStore: () => new MemoryStore<unknown>() },
      },
    } as unknown as OpenClawPluginApi;
    plugin.register(api);
    const ctx = {
      agentId: "main",
      sessionKey: "agent:main:main",
      runId: "tool-run",
      toolName: "read",
    };
    handlers.get("llm_input")!(
      {
        runId: "tool-run",
        sessionId: "s",
        provider: "openai",
        model: "gpt-5.6-luna",
        prompt: "Explain why the sky appears blue.",
        historyMessages: [],
        imagesCount: 0,
      },
      ctx,
    );
    handlers.get("before_tool_call")!({}, ctx);
    handlers.get("llm_output")!(
      {
        runId: "tool-run",
        sessionId: "s",
        provider: "openai",
        model: "gpt-5.6-luna",
        assistantTexts: ["answer"],
      },
      ctx,
    );
    await handlers.get("agent_end")!({ runId: "tool-run", messages: [], success: true }, ctx);
    expect(complete).not.toHaveBeenCalled();
  });
});
