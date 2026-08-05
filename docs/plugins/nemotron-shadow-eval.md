---
summary: "Fail-closed sampled Nemotron comparison for eligible Lisa text turns"
title: "Nemotron Shadow Evaluation"
---

# Nemotron shadow evaluation

`nemotron-shadow-eval` compares every configured Nth eligible Lisa text answer with paid Nemotron without exposing the shadow answer to the user or giving the shadow call tools.

The plugin observes completed primary runs, rejects action-taking, coding, secret-bearing, sensitive, current-data, media, tool-using, non-main, cron, and ambiguous requests, and sends only the exact standalone user prompt to the explicitly allowlisted model. It never copies the system prompt or conversation history. Comparison receipts contain hashes, sanitized bounded excerpts, model attribution, usage, cost, and structural overlap; they do not make an automatic quality judgment.

```json5
{
  plugins: {
    entries: {
      "nemotron-shadow-eval": {
        enabled: true,
        hooks: { allowConversationAccess: true },
        llm: {
          allowModelOverride: true,
          allowedModels: ["openrouter/nvidia/nemotron-3-super-120b-a12b"],
        },
        config: {
          agentId: "main",
          sessionKeys: ["agent:main:main"],
          sampleEvery: 10,
          maxTokens: 800,
          maxDailySamples: 10,
          maxDailyCostUsd: 1,
        },
      },
    },
  },
}
```

If correlation, eligibility, state, budget, authentication, provider access, or the shadow call fails, the plugin skips evaluation and does not alter or delay the primary answer. Disable the plugin entry to stop all sampling. Receipts live only in the plugin's bounded SQLite state.
