# src/infra/heartbeat-runner.scheduler.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1021
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | RetryableHeartbeatBusySkipReason | (private) | - |
| 21 | type | RunOnce | (private) | - |
| 22 | type | MockRunOnce | (private) | - |
| 25 | fn | useFakeHeartbeatTime | (private) | `function useFakeHeartbeatTime() {` |
| 30 | fn | startDefaultRunner | (private) | `function startDefaultRunner(runOnce: RunOnce) {` |
| 38 | fn | heartbeatConfig | (private) | `function heartbeatConfig(` |
| 49 | fn | resolveDueFromNow | (private) | `function resolveDueFromNow(nowMs: number, inter...` |
| 61 | fn | createRetryableBusyRunSpy | (private) | `function createRetryableBusyRunSpy(reason: Retr...` |
| 72 | fn | getRunCall | (private) | `function getRunCall(runSpy: MockRunOnce, callIn...` |
| 84 | fn | expectRunCallFields | (private) | `function expectRunCallFields(` |
| 96 | fn | expectAgentCall | (private) | `function expectAgentCall(params: {` |
| 114 | fn | wake | (private) | `function wake(` |
| 151 | fn | expectWakeDispatch | (private) | `async function expectWakeDispatch(params: {` |
