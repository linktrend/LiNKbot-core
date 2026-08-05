import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import {
  eligiblePrompt,
  lexicalOverlap,
  parseShadowConfig,
  sanitize,
  sha256,
  utcDay,
} from "./src/policy.js";

type RunState = {
  prompt: string;
  primaryText?: string;
  primaryModel?: string;
  primaryProvider?: string;
  toolUsed: boolean;
};

type Counter = { eligibleOrdinal: number };
type Daily = { samples: number; costUsd: number };
type Receipt = {
  schemaVersion: 1;
  timestamp: string;
  eligibleOrdinal: number;
  runHash: string;
  sessionHash: string;
  promptHash: string;
  contextParity: "prompt_only";
  primaryModel: string;
  shadowModel: string;
  primaryExcerpt: string;
  shadowExcerpt: string;
  primaryHash: string;
  shadowHash: string;
  lexicalOverlap: number;
  lengthRatio: number;
  usage: { input?: number; output?: number; total?: number; costUsd?: number };
  qualityVerdict: "unjudged";
};

export default definePluginEntry({
  id: "nemotron-shadow-eval",
  name: "Nemotron Shadow Evaluation",
  description: "Fail-closed sampled, isolated Nemotron comparisons for eligible Lisa text turns.",
  register(api) {
    if (api.registrationMode !== "full") {
      return;
    }
    const config = parseShadowConfig(api.pluginConfig);
    const runs = new Map<string, RunState>();
    const counters = api.runtime.state.openSyncKeyedStore<Counter>({
      namespace: "counter",
      maxEntries: 4,
      overflowPolicy: "reject-new",
    });
    const daily = api.runtime.state.openSyncKeyedStore<Daily>({
      namespace: "daily",
      maxEntries: 40,
      overflowPolicy: "evict-oldest",
    });
    const receipts = api.runtime.state.openSyncKeyedStore<Receipt>({
      namespace: "receipts",
      maxEntries: 500,
      overflowPolicy: "evict-oldest",
    });

    api.on("before_agent_run", (event, ctx) => {
      if (
        ctx.agentId !== config.agentId ||
        !ctx.sessionKey ||
        !config.sessionKeys.includes(ctx.sessionKey) ||
        !ctx.runId ||
        !eligiblePrompt(event.prompt, config)
      ) {
        return;
      }
      runs.set(ctx.runId, { prompt: event.prompt, toolUsed: false });
    });

    api.on("llm_input", (event) => {
      if (event.imagesCount !== 0) {
        runs.delete(event.runId);
      }
    });

    api.on("before_tool_call", (_event, ctx) => {
      if (ctx.runId) {
        const state = runs.get(ctx.runId);
        if (state) {
          state.toolUsed = true;
        }
      }
    });

    api.on("llm_output", (event) => {
      const state = runs.get(event.runId);
      if (!state) {
        return;
      }
      state.primaryText = event.assistantTexts.at(-1)?.trim();
      state.primaryModel = event.resolvedRef ?? `${event.provider}/${event.model}`;
      state.primaryProvider = event.provider;
    });

    api.on("agent_end", async (event, ctx) => {
      const runId = event.runId ?? ctx.runId;
      if (!runId) {
        return;
      }
      const state = runs.get(runId);
      runs.delete(runId);
      if (!state || !event.success || state.toolUsed || !state.primaryText || !state.primaryModel) {
        return;
      }
      if (state.primaryModel.includes("nemotron")) {
        return;
      }

      let ordinal = 0;
      try {
        if (!counters.update) {
          return;
        }
        counters.update("eligible", (current) => {
          ordinal = (current?.eligibleOrdinal ?? 0) + 1;
          return { eligibleOrdinal: ordinal };
        });
      } catch (error) {
        api.logger.warn(
          `nemotron shadow counter unavailable: ${error instanceof Error ? error.message : "unknown"}`,
        );
        return;
      }
      if (ordinal === 0 || ordinal % config.sampleEvery !== 0) {
        return;
      }

      const day = utcDay();
      const budget = daily.lookup(day) ?? { samples: 0, costUsd: 0 };
      if (budget.samples >= config.maxDailySamples || budget.costUsd >= config.maxDailyCostUsd) {
        return;
      }

      try {
        const shadow = await api.runtime.llm.complete({
          messages: [{ role: "user", content: state.prompt }],
          model: config.model,
          maxTokens: config.maxTokens,
          reasoning: "medium",
          purpose: "nemotron-shadow-eval.sample",
        });
        const primaryText = state.primaryText;
        const shadowText = shadow.text.trim();
        const costUsd = shadow.usage.costUsd ?? 0;
        daily.register(day, { samples: budget.samples + 1, costUsd: budget.costUsd + costUsd });
        const receipt: Receipt = {
          schemaVersion: 1,
          timestamp: new Date().toISOString(),
          eligibleOrdinal: ordinal,
          runHash: sha256(runId),
          sessionHash: sha256(ctx.sessionKey ?? "unknown"),
          promptHash: sha256(state.prompt),
          contextParity: "prompt_only",
          primaryModel: state.primaryModel,
          shadowModel: `${shadow.provider}/${shadow.model}`,
          primaryExcerpt: sanitize(primaryText, config.maxOutputChars),
          shadowExcerpt: sanitize(shadowText, config.maxOutputChars),
          primaryHash: sha256(primaryText),
          shadowHash: sha256(shadowText),
          lexicalOverlap: lexicalOverlap(primaryText, shadowText),
          lengthRatio: shadowText.length / Math.max(1, primaryText.length),
          usage: {
            input: shadow.usage.inputTokens,
            output: shadow.usage.outputTokens,
            total: shadow.usage.totalTokens,
            costUsd: shadow.usage.costUsd,
          },
          qualityVerdict: "unjudged",
        };
        receipts.register(`${Date.now()}-${receipt.runHash.slice(0, 12)}`, receipt);
      } catch (error) {
        api.logger.warn(
          `nemotron shadow sample skipped: ${error instanceof Error ? error.message : "unknown"}`,
        );
      }
    });
  },
});
