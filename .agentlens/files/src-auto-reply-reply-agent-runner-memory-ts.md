# src/auto-reply/reply/agent-runner-memory.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1604
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 80 | type | EmbeddedAgentRuntime | (private) | - |
| 81 | type | UpdateSessionEntryParams | (private) | - |
| 99 | fn | loadEmbeddedAgentRuntime | (private) | `function loadEmbeddedAgentRuntime(): Promise<Em...` |
| 103 | fn | compactEmbeddedAgentSessionDefault | (private) | `async function compactEmbeddedAgentSessionDefault(` |
| 112 | fn | runEmbeddedAgentDefault | (private) | `async function runEmbeddedAgentDefault(` |
| 119 | fn | updateSessionEntryDefault | (private) | `async function updateSessionEntryDefault(` |
| 135 | fn | ensureMemoryFlushTargetFile | (private) | `async function ensureMemoryFlushTargetFile(para...` |
| 175 | fn | setAgentRunnerMemoryTestDeps | (private) | `function setAgentRunnerMemoryTestDeps(overrides...` |
| 199 | fn | estimatePromptTokensForMemoryFlush | (private) | `function estimatePromptTokensForMemoryFlush(pro...` |
| 212 | fn | resolveEffectivePromptTokens | (private) | `function resolveEffectivePromptTokens(` |
| 225 | fn | isPreflightCompactionSkipReason | (private) | `function isPreflightCompactionSkipReason(reason...` |
| 237 | fn | resolveMemoryFlushModelFallbackOptions | (private) | `function resolveMemoryFlushModelFallbackOptions(` |
| 269 | fn | followupUsesCliRuntime | (private) | `function followupUsesCliRuntime(params: {` |
| 288 | fn | resolveFollowupContextConfigProvider | (private) | `function resolveFollowupContextConfigProvider(p...` |
| 303 | fn | resolveFollowupAgentRuntimeId | (private) | `function resolveFollowupAgentRuntimeId(params: {` |
| 328 | fn | followupUsesCodexRuntime | (private) | `function followupUsesCodexRuntime(params: {` |
| 338 | fn | resolveVisibleMemoryFlushErrorPayloads | (private) | `function resolveVisibleMemoryFlushErrorPayloads...` |
| 344 | fn | buildVisibleMemoryFlushFailure | (private) | `function buildVisibleMemoryFlushFailure(payload...` |
| 352 | fn | buildMemoryFlushErrorPayload | (private) | `function buildMemoryFlushErrorPayload(err: unkn...` |
| 370 | fn | truncateMemoryFlushErrorMessage | (private) | `function truncateMemoryFlushErrorMessage(err: u...` |
| 378 | type | SessionTranscriptUsageSnapshot | (private) | - |
| 390 | fn | parseUsageFromTranscriptLine | (private) | `function parseUsageFromTranscriptLine(line: str...` |
| 411 | fn | resolveSessionLogPath | (private) | `function resolveSessionLogPath(` |
| 452 | fn | deriveTranscriptUsageSnapshot | (private) | `function deriveTranscriptUsageSnapshot(` |
| 485 | type | SessionLogSnapshot | (private) | - |
| 490 | fn | appendPostCompactionRefreshPrompt | (private) | `async function appendPostCompactionRefreshPromp...` |
| 512 | fn | readSessionLogSnapshot | (private) | `async function readSessionLogSnapshot(params: {` |
| 568 | type | SessionLogUsageScan | (private) | - |
| 574 | fn | readSessionLogByteSize | (private) | `async function readSessionLogByteSize(logPath: ...` |
| 588 | fn | readLastNonzeroUsageFromSessionLog | (private) | `async function readLastNonzeroUsageFromSessionL...` |
| 642 | fn | estimatePostUsageTrailingBytes | (private) | `function estimatePostUsageTrailingBytes(lines: ...` |
| 649 | type | TranscriptTokenEstimate | (private) | - |
| 656 | fn | estimatePromptTokensFromSessionTranscript | (private) | `async function estimatePromptTokensFromSessionT...` |
| 710 | fn | estimatedMessageTokens | (private) | `const estimatedMessageTokens = (() => {` |
| 744 | fn | runPreflightCompactionIfNeeded | pub | `export async function runPreflightCompactionIfN...` |
| 936 | fn | notifyCompaction | (private) | `const notifyCompaction = async (phase: Compacti...` |
| 945 | fn | notifyStartCompaction | (private) | `const notifyStartCompaction = async () => {` |
| 949 | fn | notifyTerminalCompaction | (private) | `const notifyTerminalCompaction = async (phase: ...` |
| 1076 | type | MemoryFlushOutcome | (private) | - |
| 1078 | type | MemoryFlushResult | (private) | - |
| 1084 | fn | runMemoryFlushIfNeeded | pub | `export async function runMemoryFlushIfNeeded(pa...` |
| 1107 | fn | memoryFlushWritable | (private) | `const memoryFlushWritable = (() => {` |

## Public API

### `runPreflightCompactionIfNeeded`

```
export async function runPreflightCompactionIfNeeded(params: {
```

**Line:** 744 | **Kind:** fn

### `runMemoryFlushIfNeeded`

```
export async function runMemoryFlushIfNeeded(params: {
```

**Line:** 1084 | **Kind:** fn
