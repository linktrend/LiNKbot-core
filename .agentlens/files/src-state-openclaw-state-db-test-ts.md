# src/state/openclaw-state-db.test.ts

[← Back to Module](../modules/src-state/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3579
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | StateDbTestDatabase | (private) | - |
| 47 | fn | createTempStateDir | (private) | `function createTempStateDir(): string {` |
| 51 | fn | replaceManagedImageRecordsWithLegacyTable | (private) | `function replaceManagedImageRecordsWithLegacyTa...` |
| 138 | fn | seedLegacySessionWatchCursorSchema | (private) | `function seedLegacySessionWatchCursorSchema(sta...` |
| 197 | type | PlacementConstraintProbe | (private) | - |
| 212 | fn | insertPlacementConstraintProbe | (private) | `function insertPlacementConstraintProbe(` |
| 262 | fn | statfsFixture | (private) | `function statfsFixture(type: number): ReturnTyp...` |
| 275 | fn | createLegacyAuditStateDatabase | (private) | `function createLegacyAuditStateDatabase(stateDi...` |
| 365 | fn | createCanonicalAuditStateDatabase | (private) | `function createCanonicalAuditStateDatabase(stat...` |
| 372 | fn | rebuildAuditEventsTable | (private) | `function rebuildAuditEventsTable(` |
| 406 | fn | insertAuditMarker | (private) | `function insertAuditMarker(` |
| 431 | fn | createUnsafeIndexDrift | (private) | `function createUnsafeIndexDrift(databasePath: s...` |
| 459 | fn | createUnsafeSchemaMetaIndexDrift | (private) | `function createUnsafeSchemaMetaIndexDrift(datab...` |
| 478 | fn | runHotRollbackJournalRecoveryProbe | (private) | `function runHotRollbackJournalRecoveryProbe(par...` |
| 600 | fn | expectNoncanonicalAuditSchemaRejected | (private) | `function expectNoncanonicalAuditSchemaRejected(...` |
| 612 | fn | runConcurrentSchemaProbe | (private) | `function runConcurrentSchemaProbe(params: {` |
| 701 | fn | sleep | (private) | `const sleep = (ms) => new Promise((resolve) => ...` |
| 703 | fn | waitForChild | (private) | `function waitForChild(child) {` |
| 2889 | fn | readStatuses | (private) | `const readStatuses = () =>` |
