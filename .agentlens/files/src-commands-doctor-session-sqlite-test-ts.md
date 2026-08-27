# src/commands/doctor-session-sqlite.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2850
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | type | SessionSqliteMigrationManifest | (private) | - |
| 40 | type | TestStore | (private) | - |
| 1288 | fn | aliasPath | (private) | `const aliasPath = (filePath: string) =>` |
| 1679 | fn | writeManifest | (private) | `const writeManifest = (messages: string[], targ...` |
| 2562 | fn | createImportedStoreForCompaction | (private) | `async function createImportedStoreForCompaction...` |
| 2583 | fn | createHistoricalV1AgentDatabase | (private) | `function createHistoricalV1AgentDatabase(params: {` |
| 2666 | fn | createUnsafeIndexDrift | (private) | `function createUnsafeIndexDrift(sqlitePath: str...` |
| 2702 | fn | createLegacyStore | (private) | `function createLegacyStore(` |
| 2773 | fn | readMigrationManifest | (private) | `function readMigrationManifest(manifestPath: st...` |
| 2780 | fn | requireMigrationManifestPath | (private) | `function requireMigrationManifestPath(manifestP...` |
| 2787 | fn | trustedMigrationTarget | (private) | `function trustedMigrationTarget(store: TestStor...` |
| 2795 | fn | writeFailedManifest | (private) | `function writeFailedManifest(` |
| 2831 | fn | canonicalTestPaths | (private) | `function canonicalTestPaths(paths: string[]): s...` |
| 2835 | fn | canonicalTestPath | (private) | `function canonicalTestPath(filePath: string): s...` |
| 2843 | fn | restoreEnvValue | (private) | `function restoreEnvValue(key: keyof NodeJS.Proc...` |
