# src/commands/doctor-state-migrations.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4058
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | fn | fileExists | (private) | `function fileExists(filePath: string): boolean {` |
| 62 | fn | detectWhatsAppLegacyStateMigrations | (private) | `function detectWhatsAppLegacyStateMigrations(pa...` |
| 141 | fn | makeTempRoot | (private) | `async function makeTempRoot() {` |
| 147 | fn | makeRootWithEmptyCfg | (private) | `async function makeRootWithEmptyCfg() {` |
| 153 | fn | writeLegacyTelegramAllowFromStore | (private) | `function writeLegacyTelegramAllowFromStore(oaut...` |
| 168 | fn | runTelegramAllowFromMigration | (private) | `async function runTelegramAllowFromMigration(pa...` |
| 199 | fn | writeJson5 | (private) | `function writeJson5(filePath: string, value: un...` |
| 204 | fn | readPrimaryKeyColumns | (private) | `function readPrimaryKeyColumns(db: DatabaseSync...` |
| 215 | fn | createLegacyAgentDatabaseRegistry | (private) | `function createLegacyAgentDatabaseRegistry(stat...` |
| 249 | fn | writeLegacySessionsFixture | (private) | `function writeLegacySessionsFixture(params: {` |
| 263 | fn | writeLegacyPluginStateSidecar | (private) | `function writeLegacyPluginStateSidecar(root: st...` |
| 291 | fn | writeLegacyDebugProxyCaptureSidecar | (private) | `function writeLegacyDebugProxyCaptureSidecar(` |
| 395 | fn | writeExistingPluginInstallIndex | (private) | `async function writeExistingPluginInstallIndex(` |
| 415 | fn | writeLegacyPluginInstallIndex | (private) | `function writeLegacyPluginInstallIndex(` |
| 425 | fn | runLegacyStateMigrationsForRoot | (private) | `async function runLegacyStateMigrationsForRoot(...` |
| 433 | fn | failRenameOnce | (private) | `function failRenameOnce(sourcePath: string) {` |
| 445 | fn | writePendingWalSnapshot | (private) | `function writePendingWalSnapshot(sourcePath: st...` |
| 468 | fn | writeLegacyTaskStateSidecars | (private) | `function writeLegacyTaskStateSidecars(root: str...` |
| 589 | fn | appendLegacyCrossAgentTask | (private) | `function appendLegacyCrossAgentTask(taskRunsPat...` |
| 619 | fn | appendLegacyTaskWithObsoleteDeliveryStatus | (private) | `function appendLegacyTaskWithObsoleteDeliverySt...` |
| 648 | fn | detectAndRunMigrations | (private) | `async function detectAndRunMigrations(params: {` |
| 660 | fn | withStateDir | (private) | `async function withStateDir<T>(root: string, ru...` |
| 674 | fn | readSessionsStore | (private) | `function readSessionsStore(targetDir: string) {` |
| 681 | fn | runAndReadSessionsStore | (private) | `async function runAndReadSessionsStore(params: {` |
| 695 | type | StateDirMigrationResult | (private) | - |
| 699 | fn | getStateDirMigrationPaths | (private) | `function getStateDirMigrationPaths(root: string) {` |
| 706 | fn | ensureLegacyAndTargetStateDirs | (private) | `function ensureLegacyAndTargetStateDirs(root: s...` |
| 713 | fn | runStateDirMigration | (private) | `async function runStateDirMigration(root: strin...` |
| 720 | fn | runFreshStateDirMigration | (private) | `async function runFreshStateDirMigration(root: ...` |
| 725 | fn | runAutoMigrateLegacyStateWithLog | (private) | `async function runAutoMigrateLegacyStateWithLog...` |
| 740 | fn | expectTargetAlreadyExistsWarning | (private) | `function expectTargetAlreadyExistsWarning(resul...` |
| 747 | fn | expectUnmigratedWithoutWarnings | (private) | `function expectUnmigratedWithoutWarnings(result...` |
| 752 | fn | writeLegacyAgentFiles | (private) | `function writeLegacyAgentFiles(root: string, fi...` |
| 761 | fn | ensureCredentialsDir | (private) | `function ensureCredentialsDir(root: string) {` |
