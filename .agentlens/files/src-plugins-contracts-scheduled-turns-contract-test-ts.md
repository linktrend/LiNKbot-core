# src/plugins/contracts/scheduled-turns.contract.test.ts

[← Back to Module](../modules/src-plugins-contracts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1321
- **Language:** TypeScript
- **Symbols:** 11
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | ScheduleSessionTurnRequest | (private) | - |
| 56 | type | SessionTurnSchedule | (private) | - |
| 58 | fn | invokePluginGatewayHandler | (private) | `async function invokePluginGatewayHandler(param...` |
| 65 | fn | respond | (private) | `const respond = (` |
| 96 | fn | createMockCronService | (private) | `function createMockCronService(): CronServiceCo...` |
| 127 | fn | makeCronJob | (private) | `function makeCronJob(input: Partial<CronJob> & ...` |
| 145 | fn | mockCronAdd | (private) | `function mockCronAdd(response: CronJob) {` |
| 149 | fn | getCronAddBody | (private) | `function getCronAddBody() {` |
| 157 | fn | expectSessionTurnHandle | (private) | `function expectSessionTurnHandle(` |
| 171 | fn | scheduleWorkflowTurn | (private) | `async function scheduleWorkflowTurn(` |
| 187 | fn | unscheduleWorkflowTurnsByTag | (private) | `async function unscheduleWorkflowTurnsByTag(` |
