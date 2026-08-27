# src/cron/service.restart-catchup.test.ts

[← Back to Module](../modules/src-cron/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1010
- **Language:** TypeScript
- **Symbols:** 9
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 17 | fn | writeStoreJobs | (private) | `async function writeStoreJobs(storePath: string...` |
| 21 | fn | createRestartCronService | (private) | `function createRestartCronService(params: {` |
| 47 | fn | createOverdueEveryJob | (private) | `function createOverdueEveryJob(id: string, next...` |
| 62 | fn | createOverdueIsolatedEveryJob | (private) | `function createOverdueIsolatedEveryJob(id: stri...` |
| 70 | fn | createOverdueCronJob | (private) | `function createOverdueCronJob(id: string, nextR...` |
| 85 | fn | createOverdueDisabledHeartbeatOneShotRetry | (private) | `function createOverdueDisabledHeartbeatOneShotR...` |
| 107 | fn | expectQueuedSystemEvent | (private) | `function expectQueuedSystemEvent(` |
| 117 | fn | expectInterruptedJobEvent | (private) | `function expectInterruptedJobEvent(` |
| 129 | fn | withRestartedCron | (private) | `async function withRestartedCron(` |
