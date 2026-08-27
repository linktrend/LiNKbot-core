# src/agents/embedded-agent-runner.cache.live.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1437
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | CacheRun | (private) | - |
| 51 | type | CacheTraceEvent | (private) | - |
| 61 | type | LiveResolvedModel | (private) | - |
| 79 | type | UserContent | (private) | - |
| 81 | fn | makeAssistantHistoryTurn | (private) | `function makeAssistantHistoryTurn(` |
| 88 | fn | makeUserHistoryTurn | (private) | `function makeUserHistoryTurn(content: UserConte...` |
| 96 | fn | makeImageUserTurn | (private) | `function makeImageUserTurn(text: string): Messa...` |
| 108 | fn | buildRunnerSessionPaths | (private) | `function buildRunnerSessionPaths(sessionId: str...` |
| 119 | fn | resolveProviderBaseUrl | (private) | `function resolveProviderBaseUrl(model: LiveReso...` |
| 124 | fn | readCacheTraceEvents | (private) | `async function readCacheTraceEvents(sessionId: ...` |
| 144 | fn | expectCacheTraceStages | (private) | `async function expectCacheTraceStages(` |
| 155 | fn | resolveDefaultProviderBaseUrl | (private) | `function resolveDefaultProviderBaseUrl(model: L...` |
| 165 | fn | buildEmbeddedModelDefinition | (private) | `function buildEmbeddedModelDefinition(model: Li...` |
| 197 | fn | resolveEmbeddedModelApi | (private) | `function resolveEmbeddedModelApi(` |
| 203 | fn | normalizeLiveUsage | (private) | `function normalizeLiveUsage(` |
| 242 | fn | buildEmbeddedRunnerConfig | (private) | `function buildEmbeddedRunnerConfig(` |
| 283 | fn | buildEmbeddedCachePrompt | (private) | `function buildEmbeddedCachePrompt(suffix: strin...` |
| 296 | fn | buildNoisyStructuredPromptVariant | (private) | `function buildNoisyStructuredPromptVariant(text...` |
| 303 | fn | extractRunPayloadText | (private) | `function extractRunPayloadText(payloads: Array<...` |
| 312 | fn | runEmbeddedCacheProbe | (private) | `async function runEmbeddedCacheProbe(params: {` |
| 360 | fn | compactLiveCacheSession | (private) | `async function compactLiveCacheSession(params: {` |
| 394 | fn | extractFirstToolCall | (private) | `function extractFirstToolCall(message: Assistan...` |
| 398 | fn | buildToolResultMessage | (private) | `function buildToolResultMessage(` |
| 413 | fn | runToolOnlyTurn | (private) | `async function runToolOnlyTurn(params: {` |
| 493 | fn | runOpenAiToolCacheProbe | (private) | `async function runOpenAiToolCacheProbe(params: {` |
| 552 | fn | runOpenAiCacheProbe | (private) | `async function runOpenAiCacheProbe(params: {` |
| 590 | fn | runOpenAiImageCacheProbe | (private) | `async function runOpenAiImageCacheProbe(params: {` |
| 631 | fn | runAnthropicCacheProbe | (private) | `async function runAnthropicCacheProbe(params: {` |
| 670 | fn | runAnthropicToolCacheProbe | (private) | `async function runAnthropicToolCacheProbe(param...` |
| 729 | fn | runAnthropicImageCacheProbe | (private) | `async function runAnthropicImageCacheProbe(para...` |
| 791 | fn | restore | (private) | `const restore = (` |
