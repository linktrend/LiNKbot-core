# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/commands/doctor/cron/index.test.ts (2047 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | TerminalNote | (private) |
| 36 | fn | makeTempStorePath | (private) |
| 50 | fn | makePrompter | (private) |
| 56 | fn | createCronConfig | (private) |
| 68 | fn | createLegacyCronJob | (private) |
| 85 | fn | createCurrentCronJob | (private) |
| 104 | fn | writeCronStore | (private) |
| 120 | fn | writeCurrentCronStore | (private) |
| 127 | fn | insertEarlySQLiteCronRow | (private) |
| 164 | fn | writeLegacyCronArrayStore | (private) |
| 169 | fn | readPersistedJobs | (private) |
| 173 | fn | requirePersistedJob | (private) |
| 181 | fn | requireRecord | (private) |
| 188 | fn | expectNoteContaining | (private) |
| 196 | fn | expectNoNoteContaining | (private) |
| 204 | fn | createFsError | (private) |
| 208 | fn | mockExdevRename | (private) |

## src/commands/doctor/cron/legacy-store-migration.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | resolveLegacyCronMigrationId | pub |
| 27 | fn | markLegacyCronMigrationIdentity | (private) |
| 35 | fn | resolveLegacyCronStatePath | (private) |
| 42 | type | LegacyCronMigrationSource | pub |
| 52 | fn | createLegacyCronMigrationSource | (private) |
| 78 | fn | legacyCronFileExists | (private) |
| 90 | type | ArchiveOutcome | (private) |
| 92 | fn | formatArchiveError | (private) |
| 96 | fn | isUnsupportedDirectorySyncError | (private) |
| 106 | fn | syncArchiveDirectory | (private) |
| 120 | fn | sha256File | (private) |
| 127 | fn | assertLegacyCronMigrationSourceCurrent | pub |
| 142 | fn | restoreArchivedSource | (private) |
| 188 | fn | copyLegacyCronFileAcrossDevices | (private) |
| 283 | fn | archiveLegacyCronFile | (private) |
| 333 | fn | parseCronStateFile | (private) |
| 360 | fn | readString | (private) |
| 364 | fn | readNumber | (private) |
| 368 | fn | legacySchedulePayloadFromRecord | (private) |
| 410 | fn | tryLegacyCronScheduleIdentity | (private) |
| 425 | fn | getRawCronJobs | (private) |
| 433 | fn | cloneConfigJobs | (private) |
| 437 | fn | loadStateFile | (private) |
| 456 | fn | hasInlineState | (private) |
| 462 | fn | ensureJobStateObject | (private) |
| 468 | fn | backfillMissingRuntimeFields | (private) |
| 475 | fn | resolveUpdatedAtMs | (private) |
| 487 | fn | mergeStateFileEntry | (private) |
| 504 | fn | resolveCronStateId | (private) |
| 509 | fn | legacyCronStoreFilesExist | pub |
| 517 | type | LegacyCronArchiveResult | (private) |
| 522 | fn | archiveLegacyCronStoreForMigration | pub |
| 585 | fn | loadLegacyCronStoreForMigration | pub |

## src/commands/doctor/cron/store-migration.test.ts (952 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | makeLegacyJob | (private) |
| 39 | fn | normalizeOneJob | (private) |

## src/commands/doctor/cron/store-migration.ts (736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CronStoreIssueKey | (private) |
| 46 | type | CronStoreIssues | (private) |
| 48 | type | CronCodexRuntimePolicyTarget | pub |
| 54 | fn | cronCodexRuntimePolicyTargetKey | pub |
| 58 | fn | collectStoredCronCodexRuntimePolicyTargets | pub |
| 93 | type | NormalizeCronStoreJobsResult | (private) |
| 103 | fn | incrementIssue | (private) |
| 107 | fn | normalizeStoredCronJobIdentity | (private) |
| 140 | fn | normalizePayloadKind | (private) |
| 159 | fn | inferPayloadIfMissing | (private) |
| 178 | fn | copyTopLevelAgentTurnFields | (private) |
| 184 | fn | copyTrimmedString | (private) |
| 253 | fn | stripLegacyTopLevelFields | (private) |
| 299 | fn | normalizeStoredCronJobs | pub |
| 320 | fn | trackIssue | (private) |
| 478 | fn | shouldMigrateCodexModelRef | (private) |
