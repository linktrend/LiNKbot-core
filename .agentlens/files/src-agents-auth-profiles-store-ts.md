# src/agents/auth-profiles/store.ts

[← Back to Module](../modules/src-agents-auth-profiles/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1728
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 56 | type | LoadAuthProfileStoreOptions | (private) | - |
| 68 | type | SaveAuthProfileStoreOptions | (private) | - |
| 78 | fn | hasInlineOAuthTokenMaterial | (private) | `function hasInlineOAuthTokenMaterial(credential...` |
| 82 | fn | hasChangedInlineOAuthTokenMaterial | (private) | `function hasChangedInlineOAuthTokenMaterial(par...` |
| 94 | fn | preserveLegacyOAuthRefsOnSave | (private) | `function preserveLegacyOAuthRefsOnSave(params: {` |
| 133 | type | ResolvedExternalCliOverlayOptions | (private) | - |
| 140 | type | ExternalCliSyncResult | (private) | - |
| 147 | fn | publishRuntimeSnapshotsAfterCommit | (private) | `function publishRuntimeSnapshotsAfterCommit(pub...` |
| 179 | fn | resolvePersistedLoadOptions | (private) | `function resolvePersistedLoadOptions(` |
| 190 | fn | isInheritedMainOAuthCredential | (private) | `function isInheritedMainOAuthCredential(params: {` |
| 222 | fn | shouldUseMainOwnerForLocalOAuthCredential | (private) | `function shouldUseMainOwnerForLocalOAuthCredent...` |
| 243 | fn | resolveRuntimeAuthProfileStore | (private) | `function resolveRuntimeAuthProfileStore(` |
| 288 | fn | resolveExternalCliOverlayOptions | (private) | `function resolveExternalCliOverlayOptions(` |
| 333 | fn | hasScopedExternalCliOverlay | (private) | `function hasScopedExternalCliOverlay(options: R...` |
| 339 | fn | maybeSyncPersistedExternalCliAuthProfiles | (private) | `function maybeSyncPersistedExternalCliAuthProfi...` |
| 415 | fn | shouldKeepProfileInLocalStore | (private) | `function shouldKeepProfileInLocalStore(params: {` |
| 465 | fn | pruneAuthProfileStoreReferences | (private) | `function pruneAuthProfileStoreReferences(` |
| 513 | fn | buildLocalAuthProfileStoreForSave | (private) | `function buildLocalAuthProfileStoreForSave(para...` |
| 577 | fn | buildAuthProfileStoreWithoutExternalProfiles | (private) | `function buildAuthProfileStoreWithoutExternalPr...` |
| 599 | fn | stripRuntimeExternalProfileMetadata | (private) | `function stripRuntimeExternalProfileMetadata(st...` |
| 606 | fn | markRuntimePersistedProfiles | (private) | `function markRuntimePersistedProfiles(` |
| 621 | fn | buildRuntimeAuthProfileStoreForSave | (private) | `function buildRuntimeAuthProfileStoreForSave(pa...` |
| 635 | fn | setRuntimeLocalProfileMetadata | (private) | `function setRuntimeLocalProfileMetadata(` |
| 647 | fn | runtimeStoreInheritsMainState | (private) | `function runtimeStoreInheritsMainState(` |
| 651 | fn | state | (private) | `const state = ({ order, lastGood, usageStats }:...` |
| 659 | fn | listRuntimeLocalProfileIds | (private) | `function listRuntimeLocalProfileIds(` |
| 674 | fn | setRuntimeExternalProfileMetadata | (private) | `function setRuntimeExternalProfileMetadata(para...` |
| 685 | fn | mergeRuntimeExternalProfileReferences | (private) | `function mergeRuntimeExternalProfileReferences(...` |
| 760 | fn | preserveResolvedSecretBackedCredentials | (private) | `function preserveResolvedSecretBackedCredential...` |
| 790 | fn | mergeRuntimeExternalProfileState | (private) | `function mergeRuntimeExternalProfileState(param...` |
| 867 | fn | updateAuthProfileStoreWithLock | pub | `export async function updateAuthProfileStoreWit...` |
| 905 | fn | loadAuthProfileStore | pub | `export function loadAuthProfileStore(): AuthPro...` |
| 915 | fn | loadAuthProfileStoreForAgent | (private) | `function loadAuthProfileStoreForAgent(` |
| 951 | fn | loadAuthProfileStoreForRuntime | pub | `export function loadAuthProfileStoreForRuntime(` |
| 984 | fn | loadAuthProfileStoreForSecretsRuntime | pub | `export function loadAuthProfileStoreForSecretsR...` |
| 1003 | fn | loadAuthProfileStoreWithoutExternalProfiles | pub | `export function loadAuthProfileStoreWithoutExte...` |
| 1034 | fn | ensureAuthProfileStore | pub | `export function ensureAuthProfileStore(` |
| 1066 | fn | ensureAuthProfileStoreWithoutExternalProfiles | pub | `export function ensureAuthProfileStoreWithoutEx...` |
| 1105 | fn | findPersistedAuthProfileCredential | pub | `export function findPersistedAuthProfileCredent...` |
| 1125 | fn | resolvePersistedAuthProfileOwnerAgentDir | pub | `export function resolvePersistedAuthProfileOwne...` |
| 1154 | fn | ensureAuthProfileStoreForLocalUpdate | pub | `export function ensureAuthProfileStoreForLocalU...` |
| 1179 | fn | getRuntimeAuthProfileStoreSnapshot | pub | `export function getRuntimeAuthProfileStoreSnaps...` |
| 1186 | fn | replaceRuntimeAuthProfileStoreSnapshots | pub | `export function replaceRuntimeAuthProfileStoreS...` |
| 1193 | fn | clearRuntimeAuthProfileStoreSnapshots | pub | `export function clearRuntimeAuthProfileStoreSna...` |
| 1198 | fn | clearRuntimeAuthProfileStoreSnapshot | pub | `export function clearRuntimeAuthProfileStoreSna...` |
| 1202 | fn | saveAuthProfileStoreInTransaction | (private) | `function saveAuthProfileStoreInTransaction(` |
| 1247 | fn | publishRuntimeSnapshots | (private) | `const publishRuntimeSnapshots = () => {` |
| 1303 | fn | saveAuthProfileStore | pub | `export function saveAuthProfileStore(` |
| 1317 | fn | publishAfterCommit | (private) | `const publishAfterCommit = () => {` |
| 1338 | type | AuthProfileStorePersistenceSnapshot | (private) | - |
| 1358 | type | CommittedAuthProfileStoreSave | (private) | - |
| 1363 | fn | captureRuntimeAuthProfileStorePersistenceSnapshot | (private) | `function captureRuntimeAuthProfileStorePersiste...` |
| 1388 | fn | recordRuntimeAuthProfileStoreOwnership | (private) | `function recordRuntimeAuthProfileStoreOwnership(` |
| 1406 | fn | recordRuntimeAuthProfileStorePublicationEdge | (private) | `function recordRuntimeAuthProfileStorePublicati...` |
| 1422 | fn | replaceRuntimeAuthProfileStoreSnapshot | (private) | `function replaceRuntimeAuthProfileStoreSnapshot(` |
| 1438 | fn | refreshRuntimeAuthProfileStoreSnapshot | (private) | `function refreshRuntimeAuthProfileStoreSnapshot...` |
| 1446 | fn | rebuildRuntimeAuthProfileStoreSnapshot | (private) | `function rebuildRuntimeAuthProfileStoreSnapshot(` |
| 1467 | fn | captureAuthProfileStorePersistenceSnapshot | pub | `export function captureAuthProfileStorePersiste...` |
| 1483 | fn | saveAuthProfileStoreIfPersistenceSnapshotMatches | pub | `export function saveAuthProfileStoreIfPersisten...` |
| 1538 | fn | reconcileRuntimeAuthProfileStorePersistenceSnapshot | (private) | `function reconcileRuntimeAuthProfileStorePersis...` |
| 1558 | fn | reconcileOne | (private) | `const reconcileOne = (` |
| 1650 | fn | restoreAuthProfileStorePersistenceSnapshot | pub | `export function restoreAuthProfileStorePersiste...` |

## Public API

### `updateAuthProfileStoreWithLock`

```
export async function updateAuthProfileStoreWithLock(params: {
```

**Line:** 867 | **Kind:** fn

### `loadAuthProfileStore`

```
export function loadAuthProfileStore(): AuthProfileStore {
```

**Line:** 905 | **Kind:** fn

### `loadAuthProfileStoreForRuntime`

```
export function loadAuthProfileStoreForRuntime(
```

**Line:** 951 | **Kind:** fn

### `loadAuthProfileStoreForSecretsRuntime`

```
export function loadAuthProfileStoreForSecretsRuntime(
```

**Line:** 984 | **Kind:** fn

### `loadAuthProfileStoreWithoutExternalProfiles`

```
export function loadAuthProfileStoreWithoutExternalProfiles(
```

**Line:** 1003 | **Kind:** fn

### `ensureAuthProfileStore`

```
export function ensureAuthProfileStore(
```

**Line:** 1034 | **Kind:** fn

### `ensureAuthProfileStoreWithoutExternalProfiles`

```
export function ensureAuthProfileStoreWithoutExternalProfiles(
```

**Line:** 1066 | **Kind:** fn

### `findPersistedAuthProfileCredential`

```
export function findPersistedAuthProfileCredential(params: {
```

**Line:** 1105 | **Kind:** fn

### `resolvePersistedAuthProfileOwnerAgentDir`

```
export function resolvePersistedAuthProfileOwnerAgentDir(params: {
```

**Line:** 1125 | **Kind:** fn

### `ensureAuthProfileStoreForLocalUpdate`

```
export function ensureAuthProfileStoreForLocalUpdate(agentDir?: string): AuthProfileStore {
```

**Line:** 1154 | **Kind:** fn

### `getRuntimeAuthProfileStoreSnapshot`

```
export function getRuntimeAuthProfileStoreSnapshot(
```

**Line:** 1179 | **Kind:** fn

### `replaceRuntimeAuthProfileStoreSnapshots`

```
export function replaceRuntimeAuthProfileStoreSnapshots(
```

**Line:** 1186 | **Kind:** fn

### `clearRuntimeAuthProfileStoreSnapshots`

```
export function clearRuntimeAuthProfileStoreSnapshots(): void {
```

**Line:** 1193 | **Kind:** fn

### `clearRuntimeAuthProfileStoreSnapshot`

```
export function clearRuntimeAuthProfileStoreSnapshot(agentDir?: string): boolean {
```

**Line:** 1198 | **Kind:** fn

### `saveAuthProfileStore`

```
export function saveAuthProfileStore(
```

**Line:** 1303 | **Kind:** fn

### `captureAuthProfileStorePersistenceSnapshot`

```
export function captureAuthProfileStorePersistenceSnapshot(
```

**Line:** 1467 | **Kind:** fn

### `saveAuthProfileStoreIfPersistenceSnapshotMatches`

```
export function saveAuthProfileStoreIfPersistenceSnapshotMatches(params: {
```

**Line:** 1483 | **Kind:** fn

### `restoreAuthProfileStorePersistenceSnapshot`

```
export function restoreAuthProfileStorePersistenceSnapshot(
```

**Line:** 1650 | **Kind:** fn
