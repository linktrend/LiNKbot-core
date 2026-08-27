# src/plugin-state/plugin-state-store.sqlite.ts

[← Back to Module](../modules/src-plugin-state/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1297
- **Language:** TypeScript
- **Symbols:** 54
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | PluginStateEntriesTable | (private) | - |
| 37 | type | PluginStateStoreDatabase | (private) | - |
| 39 | type | PluginStateRow | (private) | - |
| 41 | type | CountRow | (private) | - |
| 45 | type | PluginStateDatabase | (private) | - |
| 50 | type | PluginStateSeedEntryForTests | (private) | - |
| 61 | fn | createPluginStateError | (private) | `function createPluginStateError(params: {` |
| 76 | fn | resolvePluginStateExpiresAtMs | (private) | `function resolvePluginStateExpiresAtMs(params: {` |
| 97 | fn | wrapPluginStateError | (private) | `function wrapPluginStateError(` |
| 116 | fn | parseStoredJson | (private) | `function parseStoredJson(raw: string, operation...` |
| 130 | fn | rowToEntry | (private) | `function rowToEntry(` |
| 143 | fn | getPluginStateKysely | (private) | `function getPluginStateKysely(db: DatabaseSync) {` |
| 147 | fn | bindPluginStateEntry | (private) | `function bindPluginStateEntry(params: {` |
| 165 | fn | upsertPluginStateEntry | (private) | `function upsertPluginStateEntry(db: DatabaseSyn...` |
| 181 | fn | insertPluginStateEntryIfAbsent | (private) | `function insertPluginStateEntryIfAbsent(` |
| 192 | fn | selectPluginStateEntry | (private) | `function selectPluginStateEntry(` |
| 208 | fn | selectPluginStateEntries | (private) | `function selectPluginStateEntries(` |
| 225 | fn | selectPluginStateEntriesInKeyRange | (private) | `function selectPluginStateEntriesInKeyRange(` |
| 252 | fn | deletePluginStateEntry | (private) | `function deletePluginStateEntry(` |
| 267 | fn | deleteExpiredPluginStateNamespaceEntries | (private) | `function deleteExpiredPluginStateNamespaceEntries(` |
| 282 | fn | countLivePluginStateNamespaceEntries | (private) | `function countLivePluginStateNamespaceEntries(` |
| 298 | fn | allocatePluginStateNamespaceCreatedAt | (private) | `function allocatePluginStateNamespaceCreatedAt(` |
| 318 | fn | countLivePluginStateEntries | (private) | `function countLivePluginStateEntries(` |
| 333 | fn | deleteOldestPluginStateNamespaceEntries | (private) | `function deleteOldestPluginStateNamespaceEntries(` |
| 359 | fn | sweepExpiredPluginStateEntriesFromDatabase | (private) | `function sweepExpiredPluginStateEntriesFromData...` |
| 370 | fn | openPluginStateDatabase | (private) | `function openPluginStateDatabase(` |
| 401 | fn | countRow | (private) | `function countRow(row: CountRow | undefined): n...` |
| 406 | fn | envOptions | (private) | `function envOptions(env?: NodeJS.ProcessEnv): O...` |
| 410 | fn | runWriteTransaction | (private) | `function runWriteTransaction<T>(` |
| 422 | fn | enforcePostRegisterLimits | (private) | `function enforcePostRegisterLimits(params: {` |
| 487 | fn | assertCanInsertPluginStateEntry | (private) | `function assertCanInsertPluginStateEntry(params: {` |
| 526 | fn | resolveMaxPluginStateEntriesPerPlugin | pub | `export function resolveMaxPluginStateEntriesPer...` |
| 530 | fn | pluginStateRegister | pub | `export function pluginStateRegister(params: {` |
| 608 | fn | pluginStateRegisterSequencedJournalEntry | pub | `export function pluginStateRegisterSequencedJou...` |
| 743 | fn | pluginStateRegisterIfAbsent | pub | `export function pluginStateRegisterIfAbsent(par...` |
| 823 | fn | pluginStateUpdate | pub | `export function pluginStateUpdate(params: {` |
| 904 | fn | pluginStateLookup | pub | `export function pluginStateLookup(params: {` |
| 929 | fn | pluginStateConsume | pub | `export function pluginStateConsume(params: {` |
| 963 | fn | pluginStateDelete | pub | `export function pluginStateDelete(params: {` |
| 987 | fn | pluginStateDeleteIf | pub | `export function pluginStateDeleteIf(params: {` |
| 1021 | fn | pluginStateEntries | pub | `export function pluginStateEntries(params: {` |
| 1045 | fn | pluginStateEntriesInKeyRange | pub | `export function pluginStateEntriesInKeyRange(pa...` |
| 1089 | fn | pluginStateClear | pub | `export function pluginStateClear(params: {` |
| 1118 | fn | sweepExpiredPluginStateEntries | pub | `export function sweepExpiredPluginStateEntries(...` |
| 1133 | fn | isPluginStateDatabaseOpen | pub | `export function isPluginStateDatabaseOpen(): bo...` |
| 1137 | fn | clearPluginStateDatabaseForTests | pub | `export function clearPluginStateDatabaseForTest...` |
| 1145 | fn | setMaxPluginStateEntriesPerPluginForTests | (private) | `function setMaxPluginStateEntriesPerPluginForTe...` |
| 1149 | fn | countPluginStateLiveEntries | pub | `export function countPluginStateLiveEntries(plu...` |
| 1163 | fn | getPluginStateCapacity | pub | `export function getPluginStateCapacity(` |
| 1173 | fn | seedPluginStateDatabaseEntriesForTests | (private) | `function seedPluginStateDatabaseEntriesForTests(` |
| 1198 | fn | probePluginStateStore | (private) | `function probePluginStateStore(): PluginStateSt...` |
| 1204 | fn | pushOk | (private) | `const pushOk = (name: string) => steps.push({ n...` |
| 1205 | fn | pushFailure | (private) | `const pushFailure = (name: string, error: unkno...` |
| 1285 | fn | closePluginStateDatabase | pub | `export function closePluginStateDatabase(): void {` |

## Public API

### `resolveMaxPluginStateEntriesPerPlugin`

```
export function resolveMaxPluginStateEntriesPerPlugin(): number {
```

**Line:** 526 | **Kind:** fn

### `pluginStateRegister`

```
export function pluginStateRegister(params: {
```

**Line:** 530 | **Kind:** fn

### `pluginStateRegisterSequencedJournalEntry`

```
export function pluginStateRegisterSequencedJournalEntry(params: {
```

**Line:** 608 | **Kind:** fn

### `pluginStateRegisterIfAbsent`

```
export function pluginStateRegisterIfAbsent(params: {
```

**Line:** 743 | **Kind:** fn

### `pluginStateUpdate`

```
export function pluginStateUpdate(params: {
```

**Line:** 823 | **Kind:** fn

### `pluginStateLookup`

```
export function pluginStateLookup(params: {
```

**Line:** 904 | **Kind:** fn

### `pluginStateConsume`

```
export function pluginStateConsume(params: {
```

**Line:** 929 | **Kind:** fn

### `pluginStateDelete`

```
export function pluginStateDelete(params: {
```

**Line:** 963 | **Kind:** fn

### `pluginStateDeleteIf`

```
export function pluginStateDeleteIf(params: {
```

**Line:** 987 | **Kind:** fn

### `pluginStateEntries`

```
export function pluginStateEntries(params: {
```

**Line:** 1021 | **Kind:** fn

### `pluginStateEntriesInKeyRange`

```
export function pluginStateEntriesInKeyRange(params: {
```

**Line:** 1045 | **Kind:** fn

### `pluginStateClear`

```
export function pluginStateClear(params: {
```

**Line:** 1089 | **Kind:** fn

### `sweepExpiredPluginStateEntries`

```
export function sweepExpiredPluginStateEntries(): number {
```

**Line:** 1118 | **Kind:** fn

### `isPluginStateDatabaseOpen`

```
export function isPluginStateDatabaseOpen(): boolean {
```

**Line:** 1133 | **Kind:** fn

### `clearPluginStateDatabaseForTests`

```
export function clearPluginStateDatabaseForTests(): void {
```

**Line:** 1137 | **Kind:** fn

### `countPluginStateLiveEntries`

```
export function countPluginStateLiveEntries(pluginId: string, env?: NodeJS.ProcessEnv): number {
```

**Line:** 1149 | **Kind:** fn

### `getPluginStateCapacity`

```
export function getPluginStateCapacity(
```

**Line:** 1163 | **Kind:** fn

### `closePluginStateDatabase`

```
export function closePluginStateDatabase(): void {
```

**Line:** 1285 | **Kind:** fn
