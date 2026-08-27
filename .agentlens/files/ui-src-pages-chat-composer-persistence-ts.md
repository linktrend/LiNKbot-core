# ui/src/pages/chat/composer-persistence.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1759
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | ChatComposerPersistenceState | (private) | - |
| 52 | type | ChatComposerScope | pub | - |
| 57 | type | StoredComposerSession | (private) | - |
| 64 | type | StoredComposerMainAlias | (private) | - |
| 69 | type | StoredComposerState | (private) | - |
| 76 | type | ComposerStorageTarget | (private) | - |
| 88 | type | RestoreOptions | (private) | - |
| 93 | type | ComposerStorageScope | (private) | - |
| 100 | type | StoredChatOutboxScope | pub | - |
| 105 | type | StoredChatOutbox | pub | - |
| 109 | type | ChatComposerDraftRetry | pub | - |
| 114 | type | ChatComposerPersistStatus | (private) | - |
| 116 | type | ChatComposerPersistResult | pub | - |
| 121 | type | ChatComposerPersistOptions | (private) | - |
| 128 | fn | storageTargetForGateway | (private) | `function storageTargetForGateway(gatewayUrl: st...` |
| 141 | fn | isBareGlobalAlias | (private) | `function isBareGlobalAlias(state: ChatComposerS...` |
| 146 | fn | hasKnownSessionDefaults | (private) | `function hasKnownSessionDefaults(state: ChatCom...` |
| 157 | fn | updateStoredMainAlias | (private) | `function updateStoredMainAlias(store: StoredCom...` |
| 180 | fn | rememberStoredMainAlias | (private) | `function rememberStoredMainAlias(` |
| 193 | fn | rememberedStoredMainAlias | (private) | `function rememberedStoredMainAlias(` |
| 200 | fn | isComposerGlobalScope | (private) | `function isComposerGlobalScope(state: ChatCompo...` |
| 208 | fn | resolveComposerStorageScope | (private) | `function resolveComposerStorageScope(` |
| 267 | fn | storageSessionKeyForAgentScope | (private) | `function storageSessionKeyForAgentScope(session...` |
| 271 | fn | resolveStoredChatOutboxScope | pub | `export function resolveStoredChatOutboxScope(` |
| 286 | fn | storedChatOutboxScopeKey | pub | `export function storedChatOutboxScopeKey(scope:...` |
| 296 | fn | nextDraftRevision | (private) | `function nextDraftRevision(baseline = 0): number {` |
| 302 | fn | rememberDraftRevision | (private) | `function rememberDraftRevision(` |
| 324 | fn | rememberDraftAttempt | (private) | `function rememberDraftAttempt(` |
| 343 | fn | rememberedDraftRevision | (private) | `function rememberedDraftRevision(` |
| 351 | fn | rememberedDraftAttempt | (private) | `function rememberedDraftAttempt(` |
| 359 | fn | mergeStoredComposerSessions | (private) | `function mergeStoredComposerSessions(` |
| 399 | fn | resolveStoredComposerSession | (private) | `function resolveStoredComposerSession(` |
| 541 | fn | parseStore | (private) | `function parseStore(` |
| 594 | fn | readStore | (private) | `function readStore(storage: Storage, target: Co...` |
| 623 | fn | writeStore | (private) | `function writeStore(` |
| 681 | fn | normalizeOptionalString | (private) | `function normalizeOptionalString(value: unknown...` |
| 685 | fn | normalizeOptionalBoolean | (private) | `function normalizeOptionalBoolean(value: unknow...` |
| 689 | fn | normalizeChatAttachment | (private) | `function normalizeChatAttachment(value: unknown...` |
| 714 | fn | serializeChatAttachment | (private) | `function serializeChatAttachment(attachment: Ch...` |
| 728 | fn | normalizeSkillWorkshopRevision | (private) | `function normalizeSkillWorkshopRevision(` |
| 746 | fn | serializeQueueItem | (private) | `function serializeQueueItem(item: ChatQueueItem...` |
| 805 | fn | normalizeQueueItem | (private) | `function normalizeQueueItem(value: unknown): Ch...` |
| 888 | fn | normalizeStoredSession | (private) | `function normalizeStoredSession(value: unknown)...` |
| 931 | fn | serializeQueueItemForScope | (private) | `function serializeQueueItemForScope(` |
| 947 | fn | queueItemVersionMatches | (private) | `function queueItemVersionMatches(` |
| 964 | fn | queueItemsEqual | (private) | `function queueItemsEqual(` |
| 978 | fn | writeStoredComposerSession | (private) | `function writeStoredComposerSession(` |
| 996 | type | ChatComposerDraftRevisionState | (private) | - |
| 1001 | fn | loadChatComposerDraftRevisionState | (private) | `function loadChatComposerDraftRevisionState(` |
| 1039 | fn | loadChatComposerDraftRevision | pub | `export function loadChatComposerDraftRevision(` |
| 1047 | fn | loadChatComposerCommittedDraftRevision | pub | `export function loadChatComposerCommittedDraftR...` |
| 1055 | fn | loadChatComposerSnapshot | pub | `export function loadChatComposerSnapshot(` |
| 1133 | fn | persistChatComposerStateResult | (private) | `function persistChatComposerStateResult(` |
| 1211 | fn | persistChatComposerState | pub | `export function persistChatComposerState(` |
| 1219 | fn | admitStoredChatComposerQueueItem | pub | `export function admitStoredChatComposerQueueItem(` |
| 1276 | fn | updateStoredChatComposerQueueItem | pub | `export function updateStoredChatComposerQueueItem(` |
| 1328 | fn | removeStoredChatComposerQueueItem | pub | `export function removeStoredChatComposerQueueItem(` |
| 1382 | fn | listStoredChatOutboxes | pub | `export function listStoredChatOutboxes(state: C...` |
| 1477 | fn | restoreChatComposerState | pub | `export function restoreChatComposerState(` |
| 1495 | type | ChatComposerDraftSnapshot | (private) | - |
| 1503 | class | ChatComposerPersistence | pub | - |

## Public API

### `resolveStoredChatOutboxScope`

```
export function resolveStoredChatOutboxScope(
```

**Line:** 271 | **Kind:** fn

### `storedChatOutboxScopeKey`

```
export function storedChatOutboxScopeKey(scope: StoredChatOutboxScope): string {
```

**Line:** 286 | **Kind:** fn

### `loadChatComposerDraftRevision`

```
export function loadChatComposerDraftRevision(
```

**Line:** 1039 | **Kind:** fn

### `loadChatComposerCommittedDraftRevision`

```
export function loadChatComposerCommittedDraftRevision(
```

**Line:** 1047 | **Kind:** fn

### `loadChatComposerSnapshot`

```
export function loadChatComposerSnapshot(
```

**Line:** 1055 | **Kind:** fn

### `persistChatComposerState`

```
export function persistChatComposerState(
```

**Line:** 1211 | **Kind:** fn

### `admitStoredChatComposerQueueItem`

```
export function admitStoredChatComposerQueueItem(
```

**Line:** 1219 | **Kind:** fn

### `updateStoredChatComposerQueueItem`

```
export function updateStoredChatComposerQueueItem(
```

**Line:** 1276 | **Kind:** fn

### `removeStoredChatComposerQueueItem`

```
export function removeStoredChatComposerQueueItem(
```

**Line:** 1328 | **Kind:** fn

### `listStoredChatOutboxes`

```
export function listStoredChatOutboxes(state: ChatComposerScope): StoredChatOutbox[] {
```

**Line:** 1382 | **Kind:** fn

### `restoreChatComposerState`

```
export function restoreChatComposerState(
```

**Line:** 1477 | **Kind:** fn
