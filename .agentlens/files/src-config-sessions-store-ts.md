# src/config/sessions/store.ts

[← Back to Module](../modules/src-config-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1339
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 77 | type | SessionStoreInvariantContext | (private) | - |
| 89 | fn | readSessionUpdatedAt | pub | `export function readSessionUpdatedAt(params: {` |
| 109 | type | SaveSessionStoreOptions | (private) | - |
| 143 | type | SingleEntryPersistencePatch | (private) | - |
| 152 | type | SessionEntryWorkflowOptions | (private) | - |
| 160 | type | SessionLifecycleArtifactCleanupParams | pub | - |
| 177 | type | SessionLifecycleArtifactCleanupResult | pub | - |
| 182 | type | SessionLifecycleStoreTarget | pub | - |
| 189 | type | SessionLifecycleArchivedTranscript | pub | - |
| 194 | type | ResetSessionEntryLifecycleResult | pub | - |
| 202 | type | ResetSessionEntryLifecycleMutation | pub | - |
| 207 | type | DeleteSessionEntryLifecycleResult | pub | - |
| 216 | type | SessionEntryLifecycleRemoval | pub | - |
| 231 | type | SessionEntryLifecycleUpsert | pub | - |
| 251 | type | SessionArchivedTranscriptCleanupRule | pub | - |
| 256 | type | SessionEntryLifecycleMutationResult | pub | - |
| 266 | type | DeletedAgentSessionEntryPurgeParams | pub | - |
| 277 | fn | cloneSessionEntry | (private) | `function cloneSessionEntry(entry: SessionEntry)...` |
| 281 | fn | cloneSessionEntries | (private) | `function cloneSessionEntries(store: Record<stri...` |
| 287 | fn | replaceSessionEntries | (private) | `function replaceSessionEntries(` |
| 297 | fn | snapshotLockedSessionEntries | (private) | `function snapshotLockedSessionEntries(` |
| 311 | fn | assertLockedSessionEntriesPreserved | (private) | `function assertLockedSessionEntriesPreserved(pa...` |
| 321 | fn | assertValidAgentHarnessSessionEntries | (private) | `function assertValidAgentHarnessSessionEntries(...` |
| 328 | fn | projectSessionEntryForPersistenceRevision | pub | `export function projectSessionEntryForPersisten...` |
| 340 | fn | getSessionEntry | pub | `export function getSessionEntry(` |
| 348 | fn | updateSessionStoreWriteCaches | (private) | `function updateSessionStoreWriteCaches(params: {` |
| 378 | fn | restoreUnchangedSessionStoreCache | (private) | `function restoreUnchangedSessionStoreCache(` |
| 418 | fn | findJsonValueEnd | (private) | `function findJsonValueEnd(json: string, valueSt...` |
| 458 | fn | indentTopLevelEntryJson | (private) | `function indentTopLevelEntryJson(json: string):...` |
| 462 | fn | buildSingleEntrySerializedStore | (private) | `function buildSingleEntrySerializedStore(params: {` |
| 513 | fn | collectSerializedPromptRefs | (private) | `function collectSerializedPromptRefs(serialized...` |
| 529 | fn | collectStorePromptRefs | (private) | `function collectStorePromptRefs(` |
| 542 | fn | getSerializedPromptRefs | (private) | `function getSerializedPromptRefs(` |
| 555 | fn | storeHasUnsafeUntouchedHydratedSkillPrompts | (private) | `function storeHasUnsafeUntouchedHydratedSkillPr...` |
| 595 | fn | loadMutableSessionStoreForWriter | (private) | `function loadMutableSessionStoreForWriter(store...` |
| 614 | fn | sessionEntriesHaveSameSerializedForm | (private) | `function sessionEntriesHaveSameSerializedForm(` |
| 621 | fn | cloneOptionalSessionEntry | (private) | `function cloneOptionalSessionEntry(entry: Sessi...` |
| 625 | fn | resolveLifecyclePrimaryEntry | (private) | `function resolveLifecyclePrimaryEntry(params: {` |
| 640 | fn | resolveLifecyclePrimaryEntrySnapshot | (private) | `function resolveLifecyclePrimaryEntrySnapshot(p...` |
| 658 | fn | resolveFreshestLifecycleStoreMatch | (private) | `function resolveFreshestLifecycleStoreMatch(par...` |
| 676 | fn | pruneLifecycleLegacyStoreKeys | (private) | `function pruneLifecycleLegacyStoreKeys(params: {` |
| 687 | fn | archiveLifecycleSessionTranscripts | (private) | `async function archiveLifecycleSessionTranscrip...` |
| 707 | fn | ensureLifecycleTranscriptHeader | (private) | `function ensureLifecycleTranscriptHeader(params...` |
| 725 | fn | normalizePathForLifecycleComparison | (private) | `function normalizePathForLifecycleComparison(fi...` |
| 732 | fn | saveSessionStoreUnlocked | (private) | `async function saveSessionStoreUnlocked(` |
| 941 | fn | saveSessionStore | pub | `export async function saveSessionStore(` |
| 954 | fn | updateSessionStore | pub | `export async function updateSessionStore<T>(` |
| 992 | fn | resetSessionEntryLifecycle | pub | `export async function resetSessionEntryLifecycl...` |
| 1067 | type | DeleteSessionEntryLifecycleParams | (private) | - |
| 1079 | fn | deleteSessionEntryLifecycleInternal | (private) | `async function deleteSessionEntryLifecycleInter...` |
| 1181 | fn | deleteSessionEntryLifecycle | pub | `export async function deleteSessionEntryLifecycle(` |
| 1187 | fn | getErrorCode | (private) | `function getErrorCode(error: unknown): string |...` |
| 1193 | fn | archiveRemovedSessionTranscripts | (private) | `async function archiveRemovedSessionTranscripts...` |
| 1220 | fn | writeSessionStoreAtomic | (private) | `async function writeSessionStoreAtomic(params: {` |
| 1254 | fn | persistResolvedSessionEntry | (private) | `async function persistResolvedSessionEntry(para...` |
| 1288 | type | SessionEntryPatchParams | (private) | - |
| 1301 | fn | patchSessionEntryWithKey | pub | `export async function patchSessionEntryWithKey(` |

## Public API

### `readSessionUpdatedAt`

```
export function readSessionUpdatedAt(params: {
```

**Line:** 89 | **Kind:** fn

### `projectSessionEntryForPersistenceRevision`

```
export function projectSessionEntryForPersistenceRevision(params: {
```

**Line:** 328 | **Kind:** fn

### `getSessionEntry`

```
export function getSessionEntry(
```

**Line:** 340 | **Kind:** fn

### `saveSessionStore`

```
export async function saveSessionStore(
```

**Line:** 941 | **Kind:** fn

### `updateSessionStore`

```
export async function updateSessionStore<T>(
```

**Line:** 954 | **Kind:** fn

### `resetSessionEntryLifecycle`

```
export async function resetSessionEntryLifecycle(params: {
```

**Line:** 992 | **Kind:** fn

### `deleteSessionEntryLifecycle`

```
export async function deleteSessionEntryLifecycle(
```

**Line:** 1181 | **Kind:** fn

### `patchSessionEntryWithKey`

```
export async function patchSessionEntryWithKey(
```

**Line:** 1301 | **Kind:** fn
