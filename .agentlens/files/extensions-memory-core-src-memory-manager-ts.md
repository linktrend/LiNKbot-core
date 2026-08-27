# extensions/memory-core/src/memory/manager.ts

[← Back to Module](../modules/extensions-memory-core-src-memory/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1675
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 91 | fn | getLocalEmbeddingRuntimeFacts | (private) | `function getLocalEmbeddingRuntimeFacts(provider...` |
| 109 | type | MemoryIndexManagerPurpose | (private) | - |
| 110 | type | MemoryEmbeddingProviderRequirement | (private) | - |
| 119 | type | EmbeddingProbeCacheEntry | (private) | - |
| 125 | type | KeywordSearchHit | (private) | - |
| 132 | fn | compareKeywordSearchHits | (private) | `function compareKeywordSearchHits(` |
| 168 | fn | closeAllMemoryIndexManagers | pub | `export async function closeAllMemoryIndexManage...` |
| 179 | fn | closeMemoryIndexManagersForAgent | pub | `export async function closeMemoryIndexManagersF...` |
| 191 | fn | resolveEffectiveMemorySearchSettings | (private) | `function resolveEffectiveMemorySearchSettings(` |
| 209 | fn | resolveConfiguredMemoryEmbeddingProvider | (private) | `function resolveConfiguredMemoryEmbeddingProvid...` |
| 220 | fn | resolveMemoryEmbeddingProviderRequirement | (private) | `function resolveMemoryEmbeddingProviderRequirem...` |
| 243 | fn | resolveMemoryIndexManagerCacheKey | (private) | `function resolveMemoryIndexManagerCacheKey(para...` |
| 261 | fn | isMemoryIndexManagerCacheKeyInScope | (private) | `function isMemoryIndexManagerCacheKeyInScope(` |
| 275 | fn | closeMemoryIndexManagersForScope | (private) | `async function closeMemoryIndexManagersForScope...` |
| 281 | fn | isScopedKey | (private) | `const isScopedKey = (key: string) =>` |
| 300 | class | MemoryIndexManager | pub | - |
| 821 | fn | loadKeywordResults | (private) | `const loadKeywordResults = async () =>` |
| 1299 | fn | getClosed | (private) | `const getClosed = () => this.closed;` |
| 1300 | fn | getDb | (private) | `const getDb = () => this.db;` |
| 1301 | fn | setDb | (private) | `const setDb = (value: DatabaseSync) => {` |
| 1304 | fn | getReadonlyRecoveryAttempts | (private) | `const getReadonlyRecoveryAttempts = () => this....` |
| 1305 | fn | setReadonlyRecoveryAttempts | (private) | `const setReadonlyRecoveryAttempts = (value: num...` |
| 1308 | fn | getReadonlyRecoverySuccesses | (private) | `const getReadonlyRecoverySuccesses = () => this...` |
| 1309 | fn | setReadonlyRecoverySuccesses | (private) | `const setReadonlyRecoverySuccesses = (value: nu...` |
| 1312 | fn | getReadonlyRecoveryFailures | (private) | `const getReadonlyRecoveryFailures = () => this....` |
| 1313 | fn | setReadonlyRecoveryFailures | (private) | `const setReadonlyRecoveryFailures = (value: num...` |
| 1316 | fn | getReadonlyRecoveryLastError | (private) | `const getReadonlyRecoveryLastError = () => this...` |
| 1317 | fn | setReadonlyRecoveryLastError | (private) | `const setReadonlyRecoveryLastError = (value: st...` |
| 1586 | fn | rememberCurrentProvider | (private) | `const rememberCurrentProvider = () => {` |
| 1593 | fn | closeProvider | (private) | `const closeProvider = async (provider: Embeddin...` |
| 1607 | fn | drainTrackedProviders | (private) | `const drainTrackedProviders = async () => {` |
| 1620 | fn | reportPendingWorkError | (private) | `const reportPendingWorkError = (err: unknown) => {` |
| 1623 | fn | awaitCurrentSync | (private) | `const awaitCurrentSync = async () => {` |
| 1655 | fn | hasTargetedSessionSyncParams | (private) | `function hasTargetedSessionSyncParams(params: M...` |
| 1662 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `closeAllMemoryIndexManagers`

```
export async function closeAllMemoryIndexManagers(): Promise<void> {
```

**Line:** 168 | **Kind:** fn

### `closeMemoryIndexManagersForAgent`

```
export async function closeMemoryIndexManagersForAgent(params: {
```

**Line:** 179 | **Kind:** fn
