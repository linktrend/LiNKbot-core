# src/cron/service/ops.test.ts

[← Back to Module](../modules/src-cron-service/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1427
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | fn | withStateDirForStorePath | (private) | `async function withStateDirForStorePath<T>(` |
| 38 | fn | createTimedOutIsolatedCronState | (private) | `function createTimedOutIsolatedCronState(params...` |
| 52 | fn | createOkIsolatedCronState | (private) | `function createOkIsolatedCronState(params: {` |
| 73 | fn | createFutureEveryJob | (private) | `function createFutureEveryJob(params: { id: str...` |
| 88 | fn | createInterruptedMainJob | (private) | `function createInterruptedMainJob(now: number):...` |
| 108 | fn | createDueIsolatedJob | (private) | `function createDueIsolatedJob(now: number): Cro...` |
| 124 | fn | writeDueIsolatedJobSnapshot | (private) | `async function writeDueIsolatedJobSnapshot(stor...` |
| 131 | fn | writeLegacyCronArraySnapshot | (private) | `async function writeLegacyCronArraySnapshot(sto...` |
| 136 | fn | insertCronJobRow | (private) | `function insertCronJobRow(storePath: string, jo...` |
| 172 | fn | expectDueIsolatedManualRunProgresses | (private) | `async function expectDueIsolatedManualRunProgre...` |
| 184 | fn | expectWarnedJob | (private) | `function expectWarnedJob(params: { field: "jobI...` |
| 193 | fn | expectTaskRun | (private) | `function expectTaskRun(params: {` |
| 209 | fn | findCronTaskByBaseRunId | (private) | `function findCronTaskByBaseRunId(baseRunId: str...` |
| 216 | fn | createMissedIsolatedJob | (private) | `function createMissedIsolatedJob(now: number): ...` |
| 1272 | fn | makeCreateInput | (private) | `function makeCreateInput(name: string) {` |
