# src/status/status-message.ts

[← Back to Module](../modules/src-status/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1164
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | AgentDefaults | (private) | - |
| 76 | type | AgentConfig | (private) | - |
| 80 | type | QueueStatus | (private) | - |
| 89 | type | StatusArgs | (private) | - |
| 123 | type | NormalizedAuthMode | (private) | - |
| 125 | fn | normalizeAuthMode | (private) | `function normalizeAuthMode(value?: string): Nor...` |
| 151 | fn | resolveConfiguredTextVerbosity | (private) | `function resolveConfiguredTextVerbosity(params: {` |
| 172 | fn | resolveExecutionLabel | (private) | `function resolveExecutionLabel(` |
| 193 | fn | sandboxed | (private) | `const sandboxed = (() => {` |
| 216 | fn | formatTokens | (private) | `const formatTokens = (total: number | null | un...` |
| 228 | fn | formatEstimatedContextBudgetTokens | (private) | `const formatEstimatedContextBudgetTokens = (` |
| 258 | fn | formatContextUsageShort | pub | `export const formatContextUsageShort = (` |
| 263 | fn | formatQueueDetails | (private) | `const formatQueueDetails = (queue?: QueueStatus...` |
| 374 | fn | formatUsagePair | (private) | `const formatUsagePair = (input?: number | null,...` |
| 383 | fn | formatCacheLine | (private) | `const formatCacheLine = (` |
| 413 | fn | formatMediaUnderstandingLine | (private) | `const formatMediaUnderstandingLine = (decisions...` |
| 510 | fn | resolveChannelModelNote | (private) | `function resolveChannelModelNote(params: {` |
| 566 | fn | hasUserPinnedModelSelection | (private) | `function hasUserPinnedModelSelection(entry: Ses...` |
| 579 | fn | buildStatusMessage | pub | `export function buildStatusMessage(args: Status...` |
| 776 | fn | persistedContextMatchesActiveModel | (private) | `const persistedContextMatchesActiveModel = (() ...` |
| 1112 | fn | configuredFallbacks | (private) | `const configuredFallbacks = (() => {` |

## Public API

### `formatContextUsageShort`

```
export const formatContextUsageShort = (
```

**Line:** 258 | **Kind:** fn

### `buildStatusMessage`

```
export function buildStatusMessage(args: StatusArgs): string {
```

**Line:** 579 | **Kind:** fn
