# src/infra/state-migrations.storage.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1168
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | LegacyPluginStateSidecarRow | pub | - |
| 48 | type | LegacyDeliveryQueueFile | (private) | - |
| 53 | class | LegacyTaskStateSidecarConflictError | (private) | - |
| 59 | fn | buildLegacyMigrationPreview | pub | `export function buildLegacyMigrationPreview(pla...` |
| 66 | fn | resolveLegacyPluginStateSidecarPath | pub | `export function resolveLegacyPluginStateSidecar...` |
| 70 | fn | resolveLegacyTaskRunsSidecarPath | pub | `export function resolveLegacyTaskRunsSidecarPat...` |
| 74 | fn | resolveLegacyFlowRunsSidecarPath | pub | `export function resolveLegacyFlowRunsSidecarPat...` |
| 78 | fn | readLegacyPluginStateSidecarRows | pub | `export function readLegacyPluginStateSidecarRows(` |
| 98 | fn | legacyPluginStateRowsMatch | pub | `export function legacyPluginStateRowsMatch(` |
| 111 | fn | isLegacyPluginStateRowExpired | pub | `export function isLegacyPluginStateRowExpired(` |
| 119 | fn | hasPendingSqliteSidecarArchive | pub | `export function hasPendingSqliteSidecarArchive(` |
| 130 | type | LegacyArchiveResolution | (private) | - |
| 136 | fn | firstFreeArchivePath | (private) | `function firstFreeArchivePath(sourcePath: strin...` |
| 145 | fn | archiveLegacyFileSource | (private) | `function archiveLegacyFileSource(params: {` |
| 171 | fn | recordArchiveCollisionResolutions | (private) | `function recordArchiveCollisionResolutions(` |
| 185 | fn | archiveLegacyPluginStateSidecar | pub | `export function archiveLegacyPluginStateSidecar...` |
| 224 | fn | readLegacyInstalledPluginIndex | pub | `export function readLegacyInstalledPluginIndex(...` |
| 252 | fn | readLegacyTopLevelInstallRecords | (private) | `function readLegacyTopLevelInstallRecords(parse...` |
| 260 | fn | readLegacyEmbeddedInstallRecords | (private) | `function readLegacyEmbeddedInstallRecords(parse...` |
| 288 | fn | legacyInstalledPluginIndexMatches | pub | `export function legacyInstalledPluginIndexMatches(` |
| 299 | fn | readInstallRecordField | (private) | `function readInstallRecordField(` |
| 306 | fn | readInstallRecordStringField | (private) | `function readInstallRecordStringField(` |
| 314 | fn | legacyInstallRecordHasCurrentResolvedIdentity | (private) | `function legacyInstallRecordHasCurrentResolvedI...` |
| 328 | fn | readAuthoritativeCurrentNpmIdentity | (private) | `function readAuthoritativeCurrentNpmIdentity(` |
| 344 | fn | legacyNpmInstallRecordSupersededByCurrent | (private) | `function legacyNpmInstallRecordSupersededByCurr...` |
| 366 | fn | legacyInstallRecordCoveredByCurrent | (private) | `function legacyInstallRecordCoveredByCurrent(` |
| 395 | fn | mergeLegacyInstalledPluginIndexRecords | pub | `export function mergeLegacyInstalledPluginIndex...` |
| 423 | fn | archiveLegacyInstalledPluginIndex | pub | `export function archiveLegacyInstalledPluginInd...` |
| 443 | fn | archiveLegacyTaskStateSidecar | (private) | `function archiveLegacyTaskStateSidecar(params: {` |
| 482 | fn | hardenLegacyImportSource | (private) | `function hardenLegacyImportSource(params: {` |
| 496 | fn | archiveLegacyImportSource | pub | `export function archiveLegacyImportSource(param...` |
| 529 | fn | legacyKeyValue | (private) | `function legacyKeyValue(value: SQLInputValue): ...` |
| 539 | fn | normalizeLegacyFlowRow | (private) | `function normalizeLegacyFlowRow(row: Record<str...` |
| 579 | fn | legacyRowsMatch | (private) | `function legacyRowsMatch(` |
| 591 | fn | readLegacyFlowRows | (private) | `function readLegacyFlowRows(sourcePath: string)...` |
| 632 | fn | insertFlowRunRowSql | (private) | `function insertFlowRunRowSql(db: DatabaseSync, ...` |
| 649 | fn | migrateLegacyTaskRunsSidecar | (private) | `async function migrateLegacyTaskRunsSidecar(par...` |
| 787 | fn | migrateLegacyFlowRunsSidecar | (private) | `async function migrateLegacyFlowRunsSidecar(par...` |
| 880 | fn | migrateLegacyTaskStateSidecars | pub | `export async function migrateLegacyTaskStateSid...` |
| 891 | fn | resolveLegacyDeliveryQueuePath | pub | `export function resolveLegacyDeliveryQueuePath(...` |
| 895 | fn | listLegacyDeliveryQueueFiles | pub | `export function listLegacyDeliveryQueueFiles(qu...` |
| 909 | fn | listLegacyDeliveryQueueDeliveredMarkers | pub | `export function listLegacyDeliveryQueueDelivere...` |
| 915 | fn | readLegacyDeliveryQueueEntry | (private) | `function readLegacyDeliveryQueueEntry(sourcePat...` |
| 926 | fn | legacyQueueMetadata | (private) | `function legacyQueueMetadata(entry: Record<stri...` |
| 938 | fn | stringOrNull | (private) | `const stringOrNull = (value: unknown) => (typeo...` |
| 954 | fn | buildLegacyDeliveryQueueRow | (private) | `function buildLegacyDeliveryQueueRow(params: {` |
| 999 | fn | legacyDeliveryQueueRowsMatch | (private) | `function legacyDeliveryQueueRowsMatch(` |
| 1031 | fn | removeLegacyDeliveryQueueDir | (private) | `function removeLegacyDeliveryQueueDir(params: {` |
| 1045 | fn | removeLegacyDeliveryQueueMarkers | (private) | `function removeLegacyDeliveryQueueMarkers(` |
| 1063 | fn | migrateLegacyDeliveryQueues | pub | `export async function migrateLegacyDeliveryQueu...` |

## Public API

### `buildLegacyMigrationPreview`

```
export function buildLegacyMigrationPreview(plan: ChannelLegacyStateMigrationPlan): string {
```

**Line:** 59 | **Kind:** fn

### `resolveLegacyPluginStateSidecarPath`

```
export function resolveLegacyPluginStateSidecarPath(stateDir: string): string {
```

**Line:** 66 | **Kind:** fn

### `resolveLegacyTaskRunsSidecarPath`

```
export function resolveLegacyTaskRunsSidecarPath(stateDir: string): string {
```

**Line:** 70 | **Kind:** fn

### `resolveLegacyFlowRunsSidecarPath`

```
export function resolveLegacyFlowRunsSidecarPath(stateDir: string): string {
```

**Line:** 74 | **Kind:** fn

### `readLegacyPluginStateSidecarRows`

```
export function readLegacyPluginStateSidecarRows(
```

**Line:** 78 | **Kind:** fn

### `legacyPluginStateRowsMatch`

```
export function legacyPluginStateRowsMatch(
```

**Line:** 98 | **Kind:** fn

### `isLegacyPluginStateRowExpired`

```
export function isLegacyPluginStateRowExpired(
```

**Line:** 111 | **Kind:** fn

### `hasPendingSqliteSidecarArchive`

```
export function hasPendingSqliteSidecarArchive(
```

**Line:** 119 | **Kind:** fn

### `archiveLegacyPluginStateSidecar`

```
export function archiveLegacyPluginStateSidecar(params: {
```

**Line:** 185 | **Kind:** fn

### `readLegacyInstalledPluginIndex`

```
export function readLegacyInstalledPluginIndex(sourcePath: string): InstalledPluginIndex | null {
```

**Line:** 224 | **Kind:** fn

### `legacyInstalledPluginIndexMatches`

```
export function legacyInstalledPluginIndexMatches(
```

**Line:** 288 | **Kind:** fn

### `mergeLegacyInstalledPluginIndexRecords`

```
export function mergeLegacyInstalledPluginIndexRecords(
```

**Line:** 395 | **Kind:** fn

### `archiveLegacyInstalledPluginIndex`

```
export function archiveLegacyInstalledPluginIndex(params: {
```

**Line:** 423 | **Kind:** fn

### `archiveLegacyImportSource`

```
export function archiveLegacyImportSource(params: {
```

**Line:** 496 | **Kind:** fn

### `migrateLegacyTaskStateSidecars`

```
export async function migrateLegacyTaskStateSidecars(params: {
```

**Line:** 880 | **Kind:** fn

### `resolveLegacyDeliveryQueuePath`

```
export function resolveLegacyDeliveryQueuePath(stateDir: string, dirName: string): string {
```

**Line:** 891 | **Kind:** fn

### `listLegacyDeliveryQueueFiles`

```
export function listLegacyDeliveryQueueFiles(queueDir: string): LegacyDeliveryQueueFile[] {
```

**Line:** 895 | **Kind:** fn

### `listLegacyDeliveryQueueDeliveredMarkers`

```
export function listLegacyDeliveryQueueDeliveredMarkers(queueDir: string): string[] {
```

**Line:** 909 | **Kind:** fn

### `migrateLegacyDeliveryQueues`

```
export async function migrateLegacyDeliveryQueues(params: {
```

**Line:** 1063 | **Kind:** fn
