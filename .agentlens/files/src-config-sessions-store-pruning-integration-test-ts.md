# src/config/sessions/store.pruning.integration.test.ts

[← Back to Module](../modules/src-config-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1868
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 62 | fn | jsonRoundTrip | (private) | `function jsonRoundTrip<T>(value: T): T {` |
| 67 | fn | archiveTimestamp | (private) | `const archiveTimestamp = (ms: number) => new Da...` |
| 69 | fn | makeEntry | (private) | `function makeEntry(updatedAt: number): SessionE...` |
| 73 | fn | applyEnforcedMaintenanceConfig | (private) | `function applyEnforcedMaintenanceConfig(mockLoa...` |
| 85 | fn | applyCappedMaintenanceConfig | (private) | `function applyCappedMaintenanceConfig(mockLoadC...` |
| 97 | fn | disableAutomaticDiskBudget | (private) | `function disableAutomaticDiskBudget(mockLoadCon...` |
| 103 | fn | expectPathExists | (private) | `async function expectPathExists(targetPath: str...` |
| 107 | fn | expectPathMissing | (private) | `async function expectPathMissing(targetPath: st...` |
| 117 | fn | createStaleAndFreshStore | (private) | `function createStaleAndFreshStore(now = Date.no...` |
| 124 | fn | seedSqliteSessionStore | (private) | `async function seedSqliteSessionStore(` |
| 137 | fn | loadSqliteSessionStore | (private) | `function loadSqliteSessionStore(targetStorePath...` |
| 146 | fn | seedSqliteTranscriptMessage | (private) | `async function seedSqliteTranscriptMessage(para...` |
| 165 | fn | seedSqliteTrajectoryEvent | (private) | `async function seedSqliteTrajectoryEvent(params: {` |
