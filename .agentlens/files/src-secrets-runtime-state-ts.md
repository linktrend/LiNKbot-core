# src/secrets/runtime-state.ts

[← Back to Module](../modules/src-secrets/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1168
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 22

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | PreparedSecretsRuntimeSnapshot | pub | - |
| 57 | type | LocatedSecretRef | (private) | - |
| 62 | type | SecretDefaults | (private) | - |
| 64 | fn | listLocatedSecretRefs | (private) | `function listLocatedSecretRefs(` |
| 90 | fn | hasSameSecretReloadContract | pub | `export function hasSameSecretReloadContract(lef...` |
| 106 | type | SecretsRuntimeRefreshContext | pub | - |
| 146 | type | ProfileOwner | (private) | - |
| 147 | type | ProfileOwnerMutationLineage | (private) | - |
| 151 | type | StoreMutationLineage | (private) | - |
| 159 | fn | cloneSecretsRuntimeRefreshContext | (private) | `function cloneSecretsRuntimeRefreshContext(` |
| 178 | fn | cloneDegradedSecretOwner | (private) | `function cloneDegradedSecretOwner(owner: Degrad...` |
| 199 | fn | cloneSecretOwnerRefState | (private) | `function cloneSecretOwnerRefState(owner: Secret...` |
| 217 | fn | cloneSnapshot | (private) | `function cloneSnapshot(snapshot: PreparedSecret...` |
| 233 | fn | mergeLiveAuthStoreBookkeeping | (private) | `function mergeLiveAuthStoreBookkeeping(` |
| 253 | fn | profileOwner | (private) | `function profileOwner(store: RuntimeAuthProfile...` |
| 263 | fn | captureProfileOwnerMutationLineage | (private) | `function captureProfileOwnerMutationLineage(` |
| 280 | fn | captureStoreMutationLineage | (private) | `function captureStoreMutationLineage(` |
| 296 | fn | captureAuthStoreMutationLineage | (private) | `function captureAuthStoreMutationLineage(` |
| 344 | fn | mergeRollbackValue | (private) | `function mergeRollbackValue(previous: unknown, ...` |
| 369 | fn | hasSameSecretProviderDefinition | pub | `export function hasSameSecretProviderDefinition(` |
| 386 | fn | dependency | (private) | `const dependency = (config: OpenClawConfig) => ({` |
| 394 | fn | preserveResolvedSecretRefValues | (private) | `function preserveResolvedSecretRefValues(` |
| 442 | fn | preserveResolvedAuthStoreSecretValues | (private) | `function preserveResolvedAuthStoreSecretValues(` |
| 503 | fn | preserveLiveAuthStoreBookkeeping | (private) | `function preserveLiveAuthStoreBookkeeping(` |
| 532 | fn | credentialSecretRef | (private) | `function credentialSecretRef(credential: AuthPr...` |
| 542 | fn | rebuildSelectedRuntimeProfileMetadata | (private) | `function rebuildSelectedRuntimeProfileMetadata(` |
| 546 | fn | profileIdsFor | (private) | `const profileIdsFor = (` |
| 566 | fn | compareMutationTokens | (private) | `function compareMutationTokens(` |
| 576 | fn | readProfileOwnerMutationToken | (private) | `function readProfileOwnerMutationToken(` |
| 588 | fn | getProfileMutationDecision | (private) | `function getProfileMutationDecision(params: {` |
| 626 | fn | mergeRollbackAuthStoreCredentials | (private) | `function mergeRollbackAuthStoreCredentials(` |
| 645 | fn | currentStoreMutationStatus | (private) | `const currentStoreMutationStatus = (lineage: St...` |
| 824 | fn | setPreparedSecretsRuntimeSnapshotRefreshContext | pub | `export function setPreparedSecretsRuntimeSnapsh...` |
| 834 | fn | getPreparedSecretsRuntimeSnapshotRefreshContext | pub | `export function getPreparedSecretsRuntimeSnapsh...` |
| 844 | fn | getActiveSecretsRuntimeRefreshContext | pub | `export function getActiveSecretsRuntimeRefreshC...` |
| 849 | fn | graftActiveSecretsRuntimeAuthState | pub | `export function graftActiveSecretsRuntimeAuthSt...` |
| 861 | fn | getActiveSecretsRuntimeEnv | pub | `export function getActiveSecretsRuntimeEnv(): N...` |
| 870 | fn | registerSecretsRuntimeStateClearHook | pub | `export function registerSecretsRuntimeStateClea...` |
| 877 | fn | activateSecretsRuntimeSnapshotState | pub | `export function activateSecretsRuntimeSnapshotS...` |
| 929 | fn | hasCurrentAuthStoreCredentialsRevision | pub | `export function hasCurrentAuthStoreCredentialsR...` |
| 936 | fn | activateSecretsRuntimeSnapshotStateIfCurrent | pub | `export function activateSecretsRuntimeSnapshotS...` |
| 952 | fn | restoreSecretsRuntimeSnapshotStateIfCurrent | pub | `export function restoreSecretsRuntimeSnapshotSt...` |
| 1027 | fn | getActiveSecretsRuntimeSnapshot | pub | `export function getActiveSecretsRuntimeSnapshot...` |
| 1044 | fn | getActiveSecretsRuntimeSnapshotRevision | pub | `export function getActiveSecretsRuntimeSnapshot...` |
| 1049 | fn | hasActiveSecretsRuntimeSnapshotLineage | pub | `export function hasActiveSecretsRuntimeSnapshot...` |
| 1054 | fn | setSecretsRuntimeSourceSnapshotIfCurrent | pub | `export function setSecretsRuntimeSourceSnapshot...` |
| 1077 | fn | advanceSecretsRuntimeSourceSnapshot | (private) | `function advanceSecretsRuntimeSourceSnapshot(so...` |
| 1091 | fn | restoreSecretsRuntimeSourceSnapshotIfLineageCurrent | pub | `export function restoreSecretsRuntimeSourceSnap...` |
| 1123 | fn | getActiveSecretsRuntimeConfigSnapshot | pub | `export function getActiveSecretsRuntimeConfigSn...` |
| 1139 | fn | getLiveSecretsRuntimeAuthStores | pub | `export function getLiveSecretsRuntimeAuthStores...` |
| 1152 | fn | clearSecretsRuntimeSnapshot | pub | `export function clearSecretsRuntimeSnapshot(): ...` |

## Public API

### `hasSameSecretReloadContract`

```
export function hasSameSecretReloadContract(left: OpenClawConfig, right: OpenClawConfig): boolean {
```

**Line:** 90 | **Kind:** fn

### `hasSameSecretProviderDefinition`

```
export function hasSameSecretProviderDefinition(
```

**Line:** 369 | **Kind:** fn

### `setPreparedSecretsRuntimeSnapshotRefreshContext`

```
export function setPreparedSecretsRuntimeSnapshotRefreshContext(
```

**Line:** 824 | **Kind:** fn

### `getPreparedSecretsRuntimeSnapshotRefreshContext`

```
export function getPreparedSecretsRuntimeSnapshotRefreshContext(
```

**Line:** 834 | **Kind:** fn

### `getActiveSecretsRuntimeRefreshContext`

```
export function getActiveSecretsRuntimeRefreshContext(): SecretsRuntimeRefreshContext | null {
```

**Line:** 844 | **Kind:** fn

### `graftActiveSecretsRuntimeAuthState`

```
export function graftActiveSecretsRuntimeAuthState(snapshot: PreparedSecretsRuntimeSnapshot): void {
```

**Line:** 849 | **Kind:** fn

### `getActiveSecretsRuntimeEnv`

```
export function getActiveSecretsRuntimeEnv(): NodeJS.ProcessEnv {
```

**Line:** 861 | **Kind:** fn

### `registerSecretsRuntimeStateClearHook`

```
export function registerSecretsRuntimeStateClearHook(clearHook: () => void): void {
```

**Line:** 870 | **Kind:** fn

### `activateSecretsRuntimeSnapshotState`

```
export function activateSecretsRuntimeSnapshotState(params: {
```

**Line:** 877 | **Kind:** fn

### `hasCurrentAuthStoreCredentialsRevision`

```
export function hasCurrentAuthStoreCredentialsRevision(
```

**Line:** 929 | **Kind:** fn

### `activateSecretsRuntimeSnapshotStateIfCurrent`

```
export function activateSecretsRuntimeSnapshotStateIfCurrent(
```

**Line:** 936 | **Kind:** fn

### `restoreSecretsRuntimeSnapshotStateIfCurrent`

```
export function restoreSecretsRuntimeSnapshotStateIfCurrent(
```

**Line:** 952 | **Kind:** fn

### `getActiveSecretsRuntimeSnapshot`

```
export function getActiveSecretsRuntimeSnapshot(): PreparedSecretsRuntimeSnapshot | null {
```

**Line:** 1027 | **Kind:** fn

### `getActiveSecretsRuntimeSnapshotRevision`

```
export function getActiveSecretsRuntimeSnapshotRevision(): number {
```

**Line:** 1044 | **Kind:** fn

### `hasActiveSecretsRuntimeSnapshotLineage`

```
export function hasActiveSecretsRuntimeSnapshotLineage(revision: number): boolean {
```

**Line:** 1049 | **Kind:** fn

### `setSecretsRuntimeSourceSnapshotIfCurrent`

```
export function setSecretsRuntimeSourceSnapshotIfCurrent(params: {
```

**Line:** 1054 | **Kind:** fn

### `restoreSecretsRuntimeSourceSnapshotIfLineageCurrent`

```
export function restoreSecretsRuntimeSourceSnapshotIfLineageCurrent(params: {
```

**Line:** 1091 | **Kind:** fn

### `getActiveSecretsRuntimeConfigSnapshot`

```
export function getActiveSecretsRuntimeConfigSnapshot(): Pick<
```

**Line:** 1123 | **Kind:** fn

### `getLiveSecretsRuntimeAuthStores`

```
export function getLiveSecretsRuntimeAuthStores(): PreparedSecretsRuntimeSnapshot["authStores"] {
```

**Line:** 1139 | **Kind:** fn

### `clearSecretsRuntimeSnapshot`

```
export function clearSecretsRuntimeSnapshot(): void {
```

**Line:** 1152 | **Kind:** fn
