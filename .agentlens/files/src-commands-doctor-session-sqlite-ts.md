# src/commands/doctor-session-sqlite.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1262
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 80 | type | LegacySessionRecord | (private) | - |
| 87 | fn | runDoctorSessionSqlite | pub | `export async function runDoctorSessionSqlite(` |
| 152 | fn | resolveDoctorSessionSqliteConfig | (private) | `function resolveDoctorSessionSqliteConfig(optio...` |
| 159 | fn | resolveDoctorSessionSqliteTargets | (private) | `function resolveDoctorSessionSqliteTargets(para...` |
| 200 | fn | filterLegacySessionStoreTargets | (private) | `function filterLegacySessionStoreTargets(` |
| 210 | fn | inspectOrMigrateTarget | (private) | `async function inspectOrMigrateTarget(params: {` |
| 314 | fn | resolveFullyCoveredLegacyStorePaths | (private) | `function resolveFullyCoveredLegacyStorePaths(` |
| 345 | fn | readLegacySessionRecords | (private) | `function readLegacySessionRecords(` |
| 394 | fn | isLegacySessionRecordOwnedByTarget | (private) | `function isLegacySessionRecordOwnedByTarget(` |
| 409 | fn | shouldFilterLegacySessionRecordsByTarget | (private) | `function shouldFilterLegacySessionRecordsByTarg...` |
| 413 | fn | resolveLegacyTranscriptPath | (private) | `function resolveLegacyTranscriptPath(` |
| 430 | fn | countLegacyTranscript | (private) | `function countLegacyTranscript(` |
| 455 | fn | blockingIssueCount | (private) | `function blockingIssueCount(report: DoctorSessi...` |
| 459 | fn | importLegacySessionRecord | (private) | `async function importLegacySessionRecord(` |
| 518 | fn | markAlreadyMigratedTranscript | (private) | `function markAlreadyMigratedTranscript(` |
| 532 | fn | validateImportedTargetBeforeArchive | (private) | `function validateImportedTargetBeforeArchive(` |
| 544 | fn | validateImportedRecordBeforeArchive | (private) | `function validateImportedRecordBeforeArchive(` |
| 603 | fn | archiveImportedTranscript | (private) | `function archiveImportedTranscript(` |
| 630 | fn | archiveImportedTranscripts | (private) | `function archiveImportedTranscripts(` |
| 646 | fn | archiveUnreferencedJsonlFiles | (private) | `function archiveUnreferencedJsonlFiles(` |
| 696 | fn | archiveImportedLegacySessionStores | (private) | `function archiveImportedLegacySessionStores(` |
| 739 | fn | archiveLegacySessionStore | (private) | `function archiveLegacySessionStore(` |
| 767 | fn | recordLegacyStoreMoveForTarget | (private) | `function recordLegacyStoreMoveForTarget(` |
| 781 | fn | validateLegacySessionRecord | (private) | `function validateLegacySessionRecord(` |
| 816 | fn | validateTranscriptEventCount | (private) | `function validateTranscriptEventCount(` |
| 859 | fn | hasSessionIssue | (private) | `function hasSessionIssue(` |
| 867 | fn | countAlreadyMigratedTranscriptEventsForImport | (private) | `function countAlreadyMigratedTranscriptEventsFo...` |
| 884 | fn | countAlreadyMigratedTranscriptEventsForValidate | (private) | `function countAlreadyMigratedTranscriptEventsFo...` |
| 897 | fn | countTranscriptEvents | (private) | `function countTranscriptEvents(` |
| 906 | fn | readLegacyTranscriptMtimeMs | (private) | `function readLegacyTranscriptMtimeMs(record: Le...` |
| 918 | fn | listUnreferencedJsonlFiles | (private) | `function listUnreferencedJsonlFiles(` |
| 937 | fn | appendActiveSqliteTranscriptFileIssues | (private) | `function appendActiveSqliteTranscriptFileIssues(` |
| 962 | fn | appendSqliteDbStats | (private) | `function appendSqliteDbStats(` |
| 983 | fn | compactSqliteDatabase | (private) | `function compactSqliteDatabase(` |
| 1010 | fn | resolveActiveSqliteTranscriptFile | (private) | `function resolveActiveSqliteTranscriptFile(` |
| 1043 | fn | moveImportedTranscriptArtifactsToArchive | (private) | `function moveImportedTranscriptArtifactsToArchive(` |
| 1073 | fn | resolveTrajectoryPath | (private) | `function resolveTrajectoryPath(transcriptPath: ...` |
| 1079 | fn | resolveTrajectoryPointerPath | (private) | `function resolveTrajectoryPointerPath(transcrip...` |
| 1085 | fn | moveImportedTranscriptToArchive | (private) | `function moveImportedTranscriptToArchive(` |
| 1103 | fn | moveSessionJsonlToArchive | (private) | `function moveSessionJsonlToArchive(params: {` |
| 1121 | fn | planSessionJsonlArchiveMove | (private) | `function planSessionJsonlArchiveMove(params: {` |
| 1168 | fn | resolveImportedTranscriptArchiveDir | (private) | `function resolveImportedTranscriptArchiveDir(st...` |
| 1173 | fn | canonicalFilePath | (private) | `function canonicalFilePath(filePath: string): s...` |
| 1181 | fn | createMigrationTargetInput | (private) | `function createMigrationTargetInput(target: Ses...` |
| 1189 | fn | isSessionEntry | (private) | `function isSessionEntry(value: unknown): value ...` |
| 1193 | fn | summarizeDoctorSessionSqliteReport | (private) | `function summarizeDoctorSessionSqliteReport(` |
| 1248 | fn | sumTargets | (private) | `function sumTargets(` |

## Public API

### `runDoctorSessionSqlite`

```
export async function runDoctorSessionSqlite(
```

**Line:** 87 | **Kind:** fn
