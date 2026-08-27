# extensions/memory-core/doctor-contract-api.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2119
- **Language:** TypeScript
- **Symbols:** 76
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | type | LegacySource | (private) | - |
| 75 | type | LegacyMemoryHostEventSource | (private) | - |
| 93 | type | ReadyLegacyMemoryHostEventSource | (private) | - |
| 95 | type | StoredMemoryHostEvent | (private) | - |
| 102 | type | StoredMemoryHostCursor | (private) | - |
| 107 | type | StoredMemoryHostMigrationCheckpoint | (private) | - |
| 126 | fn | normalizeMemoryHostWorkspaceKey | (private) | `function normalizeMemoryHostWorkspaceKey(worksp...` |
| 131 | fn | memoryHostWorkspacePrefix | (private) | `function memoryHostWorkspacePrefix(workspaceDir...` |
| 139 | type | LegacyMemorySidecarSource | (private) | - |
| 174 | type | LegacyMemorySidecarImportResult | (private) | - |
| 184 | type | MemoryFtsTokenizer | (private) | - |
| 186 | class | LegacyMemoryDerivedRowsConflictError | (private) | - |
| 192 | fn | tableExists | (private) | `function tableExists(db: DatabaseSync, schema: ...` |
| 196 | fn | tableColumns | (private) | `function tableColumns(db: DatabaseSync, tableNa...` |
| 203 | fn | tableHasColumns | (private) | `function tableHasColumns(` |
| 213 | fn | tableHasExactColumns | (private) | `function tableHasExactColumns(` |
| 223 | fn | hasLegacyMemoryIndexTables | (private) | `function hasLegacyMemoryIndexTables(db: Databas...` |
| 231 | fn | hasLegacyEmbeddingCacheTable | (private) | `function hasLegacyEmbeddingCacheTable(db: Datab...` |
| 235 | fn | hasLegacyVectorTable | (private) | `function hasLegacyVectorTable(db: DatabaseSync,...` |
| 239 | fn | tableRowCount | (private) | `function tableRowCount(db: DatabaseSync, schema...` |
| 246 | fn | readLegacySidecarCounts | (private) | `function readLegacySidecarCounts(` |
| 264 | fn | readLegacyVectorEntriesForCopy | (private) | `function readLegacyVectorEntriesForCopy(db: Dat...` |
| 273 | fn | readLegacyVectorEntriesWithoutCopy | (private) | `function readLegacyVectorEntriesWithoutCopy(db:...` |
| 287 | fn | formatLegacyVectorRows | (private) | `function formatLegacyVectorRows(count: number |...` |
| 291 | fn | assertLegacyDerivedRowsCopied | (private) | `function assertLegacyDerivedRowsCopied(db: Data...` |
| 298 | fn | assertLegacyVectorRowsReferenceChunks | (private) | `function assertLegacyVectorRowsReferenceChunks(...` |
| 314 | fn | readMemoryIndexMetaVectorDimensions | (private) | `function readMemoryIndexMetaVectorDimensions(` |
| 337 | fn | readVectorTableSqlDimensions | (private) | `function readVectorTableSqlDimensions(` |
| 353 | fn | readLegacyVectorDimensions | (private) | `function readLegacyVectorDimensions(db: Databas...` |
| 374 | fn | readCanonicalVectorDimensions | (private) | `function readCanonicalVectorDimensions(db: Data...` |
| 381 | fn | ensureCanonicalVectorTableForLegacyRows | (private) | `function ensureCanonicalVectorTableForLegacyRow...` |
| 428 | fn | copyLegacyMemoryVectorRows | (private) | `function copyLegacyMemoryVectorRows(db: Databas...` |
| 468 | fn | copyLegacyMemoryFtsRows | (private) | `function copyLegacyMemoryFtsRows(db: DatabaseSy...` |
| 491 | fn | copyLegacyMemoryIndexRows | (private) | `function copyLegacyMemoryIndexRows(` |
| 594 | fn | importLegacyMemorySidecarIndex | (private) | `function importLegacyMemorySidecarIndex(params: {` |
| 653 | fn | resolveConfiguredAgentIds | (private) | `function resolveConfiguredAgentIds(config: unkn...` |
| 671 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 675 | fn | readAgentMemorySearch | (private) | `function readAgentMemorySearch(` |
| 691 | fn | readDefaultMemorySearch | (private) | `function readDefaultMemorySearch(config: unknow...` |
| 696 | fn | readTopLevelMemorySearch | (private) | `function readTopLevelMemorySearch(config: unkno...` |
| 700 | fn | readMemorySearchVectorExtensionPath | (private) | `function readMemorySearchVectorExtensionPath(co...` |
| 709 | fn | readMemorySearchVectorEnabled | (private) | `function readMemorySearchVectorEnabled(config: ...` |
| 720 | fn | readMemorySearchProvider | (private) | `function readMemorySearchProvider(config: unkno...` |
| 728 | fn | readLegacyMemorySearchStorePaths | (private) | `function readLegacyMemorySearchStorePaths(confi...` |
| 747 | fn | readMemorySearchFtsTokenizer | (private) | `function readMemorySearchFtsTokenizer(` |
| 758 | fn | isDiscoveredRetryMemorySidecarPath | (private) | `function isDiscoveredRetryMemorySidecarPath(par...` |
| 771 | fn | resolveLegacyMemorySearchStorePath | (private) | `function resolveLegacyMemorySearchStorePath(` |
| 779 | fn | collectLegacyMemorySidecarSources | (private) | `async function collectLegacyMemorySidecarSource...` |
| 806 | fn | addSource | (private) | `async function addSource(agentId: string, legac...` |
| 835 | fn | archiveLegacyMemorySidecar | (private) | `async function archiveLegacyMemorySidecar(param...` |
| 840 | fn | existingSources | (private) | `const existingSources = (` |
| 851 | fn | existingArchives | (private) | `const existingArchives = (` |
| 897 | fn | preserveLegacyMemorySidecarRetryPath | (private) | `async function preserveLegacyMemorySidecarRetry...` |
| 911 | fn | existingTargets | (private) | `const existingTargets = (` |
| 934 | fn | existingSources | (private) | `const existingSources = (` |
| 970 | fn | migrateLegacyMemorySidecarSource | (private) | `async function migrateLegacyMemorySidecarSource...` |
| 1059 | fn | groupLegacyMemorySidecarSourcesByPath | (private) | `function groupLegacyMemorySidecarSourcesByPath(` |
| 1074 | fn | resolveConfiguredWorkspaces | (private) | `function resolveConfiguredWorkspaces(config: un...` |
| 1081 | fn | readJsonFile | (private) | `async function readJsonFile(filePath: string): ...` |
| 1085 | fn | collectLegacySources | (private) | `async function collectLegacySources(` |
| 1110 | fn | readDirectoryEntries | (private) | `async function readDirectoryEntries(directoryPa...` |
| 1120 | fn | collectRetiredQmdFileLocks | (private) | `async function collectRetiredQmdFileLocks(state...` |
| 1153 | fn | migrateDailyIngestion | (private) | `async function migrateDailyIngestion(source: Le...` |
| 1163 | fn | migrateSessionIngestion | (private) | `async function migrateSessionIngestion(source: ...` |
| 1196 | fn | migrateShortTermRecall | (private) | `async function migrateShortTermRecall(source: L...` |
| 1215 | fn | migratePhaseSignals | (private) | `async function migratePhaseSignals(source: Lega...` |
| 1234 | fn | migrateSource | (private) | `async function migrateSource(source: LegacySour...` |
| 1247 | fn | collectLegacyMemoryHostEventSources | (private) | `async function collectLegacyMemoryHostEventSour...` |
| 1357 | fn | resolveMemoryHostEventArchivePath | (private) | `async function resolveMemoryHostEventArchivePath(` |
| 1399 | fn | memoryHostMigrationCheckpointKey | (private) | `function memoryHostMigrationCheckpointKey(sourc...` |
| 1406 | fn | memoryHostMigrationSnapshot | (private) | `function memoryHostMigrationSnapshot(raw: strin...` |
| 1416 | fn | isMemoryHostMigrationCheckpoint | (private) | `function isMemoryHostMigrationCheckpoint(` |
| 1430 | fn | memoryHostEventSourceNeedsMigration | (private) | `async function memoryHostEventSourceNeedsMigrat...` |
| 1454 | fn | finalizeLegacyMemoryHostEventSource | (private) | `async function finalizeLegacyMemoryHostEventSou...` |
| 1480 | fn | restoreClaimedMemoryHostEventSource | (private) | `async function restoreClaimedMemoryHostEventSou...` |
| 1503 | fn | migrateLegacyMemoryHostEventSource | (private) | `async function migrateLegacyMemoryHostEventSour...` |
