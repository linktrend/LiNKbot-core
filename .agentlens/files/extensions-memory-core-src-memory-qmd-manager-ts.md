# extensions/memory-core/src/memory/qmd-manager.ts

[← Back to Module](../modules/extensions-memory-core-src-memory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2315
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 107 | type | SqliteDatabase | (private) | - |
| 134 | fn | qmdUsesVectors | (private) | `function qmdUsesVectors(searchMode: ResolvedQmd...` |
| 138 | fn | buildQmdProcessPath | (private) | `function buildQmdProcessPath(rawPath: string | ...` |
| 147 | fn | normalizePositiveInteger | (private) | `function normalizePositiveInteger(value: number...` |
| 153 | type | QmdEmbedQueueState | (private) | - |
| 157 | type | QmdUpdateQueueState | (private) | - |
| 161 | fn | getQmdEmbedQueueState | (private) | `function getQmdEmbedQueueState(): QmdEmbedQueue...` |
| 167 | fn | getQmdUpdateQueueState | (private) | `function getQmdUpdateQueueState(): QmdUpdateQue...` |
| 173 | fn | normalizeHanBm25Query | (private) | `function normalizeHanBm25Query(query: string): ...` |
| 179 | fn | parseQmdStatusVectorCount | (private) | `function parseQmdStatusVectorCount(raw: string)...` |
| 192 | fn | resolveStableJitterMs | (private) | `function resolveStableJitterMs(params: { seed: ...` |
| 201 | fn | resolveQmdWriteLeaseOptions | (private) | `function resolveQmdWriteLeaseOptions(expectedMs...` |
| 210 | fn | resolveQmdEmbedLeaseOptions | (private) | `function resolveQmdEmbedLeaseOptions(embedTimeo...` |
| 219 | fn | resolveQmdStoreWriteLeaseOptions | (private) | `function resolveQmdStoreWriteLeaseOptions(updat...` |
| 226 | fn | hasIgnoredMemoryWatchSegment | (private) | `function hasIgnoredMemoryWatchSegment(relativeP...` |
| 234 | fn | shouldIgnoreMemoryWatchPath | (private) | `function shouldIgnoreMemoryWatchPath(watchPath:...` |
| 257 | type | QmdManagerMode | (private) | - |
| 258 | type | QmdManagerRuntimeConfig | (private) | - |
| 263 | class | QmdMemoryManager | pub | - |
| 487 | fn | startPeriodicEmbedTimer | (private) | `const startPeriodicEmbedTimer = () => {` |
| 1175 | fn | run | (private) | `const run = async () => {` |
| 1289 | fn | markDirty | (private) | `const markDirty = (watchPath?: string, stats?: ...` |
| 1443 | fn | onAbort | (private) | `const onAbort = () => {` |
| 2305 | fn | resolveQmdManagerRuntimeConfig | (private) | `function resolveQmdManagerRuntimeConfig(` |

## Public API
