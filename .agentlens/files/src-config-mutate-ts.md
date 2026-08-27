# src/config/mutate.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1256
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 86 | type | ConfigReplaceResult | pub | - |
| 96 | type | ConfigMutationIO | pub | - |
| 105 | type | ConfigMutationContext | pub | - |
| 116 | type | ConfigMutationCommitParams | pub | - |
| 125 | type | ConfigMutationCommitResult | pub | - |
| 131 | type | ConfigMutationCommit | pub | - |
| 157 | type | ConfigMutationOwnership | (private) | - |
| 164 | fn | resolveManagedRuntimeEnvBaseline | (private) | `function resolveManagedRuntimeEnvBaseline(): {` |
| 177 | fn | assertManagedRuntimeEnvGeneration | (private) | `function assertManagedRuntimeEnvGeneration(gene...` |
| 186 | fn | assertBaseHashMatches | (private) | `function assertBaseHashMatches(snapshot: Config...` |
| 196 | fn | assertExpectedConfigPathMatches | (private) | `function assertExpectedConfigPathMatches(` |
| 208 | fn | withConfigMutationLock | (private) | `async function withConfigMutationLock<T>(` |
| 233 | fn | markActiveConfigMutationPath | (private) | `function markActiveConfigMutationPath(configPat...` |
| 237 | fn | readConfigSnapshotForMutation | (private) | `async function readConfigSnapshotForMutation(pa...` |
| 271 | fn | createConfigMutationOwnership | (private) | `function createConfigMutationOwnership(` |
| 287 | fn | withConfigMutationSnapshotLock | (private) | `async function withConfigMutationSnapshotLock<T>(` |
| 321 | fn | withConfigMutationExclusive | pub | `export async function withConfigMutationExclusi...` |
| 325 | fn | getChangedTopLevelKeys | (private) | `function getChangedTopLevelKeys(base: unknown, ...` |
| 333 | fn | getSingleTopLevelIncludeTarget | (private) | `function getSingleTopLevelIncludeTarget(params: {` |
| 356 | fn | containsConfigIncludeDirective | (private) | `function containsConfigIncludeDirective(value: ...` |
| 369 | fn | snapshotProvesBrokenInclude | (private) | `function snapshotProvesBrokenInclude(snapshot: ...` |
| 380 | fn | formatJsonFileValue | (private) | `function formatJsonFileValue(value: unknown): s...` |
| 384 | type | RootBoundIncludeFile | (private) | - |
| 390 | fn | isMissingFileError | (private) | `function isMissingFileError(error: unknown): bo...` |
| 395 | fn | resolveRootBoundRelativePath | (private) | `function resolveRootBoundRelativePath(target: R...` |
| 404 | fn | resolveRootBoundIncludeFile | (private) | `async function resolveRootBoundIncludeFile(para...` |
| 438 | fn | resolveExpectedRootBoundIncludeFile | (private) | `async function resolveExpectedRootBoundIncludeF...` |
| 467 | fn | readRootBoundFileRawIfExists | (private) | `async function readRootBoundFileRawIfExists(tar...` |
| 478 | fn | assertRootConfigStillMatchesSnapshot | (private) | `async function assertRootConfigStillMatchesSnap...` |
| 496 | fn | rollbackJsonFileWriteIfUnchanged | (private) | `async function rollbackJsonFileWriteIfUnchanged...` |
| 523 | fn | createRootBoundBackupFs | (private) | `function createRootBoundBackupFs(target: RootBo...` |
| 556 | fn | writeRootBoundJsonFile | (private) | `async function writeRootBoundJsonFile(params: {` |
| 624 | fn | tryWriteSingleTopLevelIncludeMutation | (private) | `async function tryWriteSingleTopLevelIncludeMut...` |
| 859 | fn | notifyCommittedWrite | (private) | `const notifyCommittedWrite = () => {` |
| 936 | fn | resolveConfigWriteResult | (private) | `function resolveConfigWriteResult(` |
| 949 | fn | replaceConfigFile | pub | `export async function replaceConfigFile(params: {` |
| 977 | fn | replaceConfigFileUnlocked | (private) | `async function replaceConfigFileUnlocked(params: {` |
| 1054 | fn | commitPreparedConfigMutation | (private) | `async function commitPreparedConfigMutation(` |
| 1074 | fn | transformConfigFileAttempt | (private) | `async function transformConfigFileAttempt<T>(` |
| 1144 | fn | transformConfigFile | pub | `export async function transformConfigFile<T = v...` |
| 1165 | fn | transformConfigFileWithRetry | pub | `export async function transformConfigFileWithRe...` |
| 1172 | fn | runWithPrepared | (private) | `const runWithPrepared = async (` |
| 1211 | fn | mutateConfigFile | pub | `export async function mutateConfigFile<T = void...` |
| 1233 | fn | mutateConfigFileWithRetry | pub | `export async function mutateConfigFileWithRetry...` |

## Public API

### `withConfigMutationExclusive`

```
export async function withConfigMutationExclusive<T>(fn: () => Promise<T>): Promise<T> {
```

**Line:** 321 | **Kind:** fn

### `replaceConfigFile`

```
export async function replaceConfigFile(params: {
```

**Line:** 949 | **Kind:** fn

### `transformConfigFile`

```
export async function transformConfigFile<T = void>(
```

**Line:** 1144 | **Kind:** fn

### `transformConfigFileWithRetry`

```
export async function transformConfigFileWithRetry<T = void>(
```

**Line:** 1165 | **Kind:** fn

### `mutateConfigFile`

```
export async function mutateConfigFile<T = void>(params: {
```

**Line:** 1211 | **Kind:** fn

### `mutateConfigFileWithRetry`

```
export async function mutateConfigFileWithRetry<T = void>(params: {
```

**Line:** 1233 | **Kind:** fn
