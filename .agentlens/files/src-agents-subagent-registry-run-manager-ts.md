# src/agents/subagent-registry-run-manager.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1321
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 70 | fn | shouldDeleteAttachments | (private) | `function shouldDeleteAttachments(entry: Subagen...` |
| 74 | fn | resolveSwarmWaitOwnerSessionKeys | (private) | `function resolveSwarmWaitOwnerSessionKeys(` |
| 99 | fn | resolveHardRunTimeoutEndedAt | (private) | `function resolveHardRunTimeoutEndedAt(` |
| 111 | fn | resolveCompletionAfterHardRunDeadline | (private) | `function resolveCompletionAfterHardRunDeadline(...` |
| 128 | fn | resolveWaitTimeoutMsForRun | (private) | `function resolveWaitTimeoutMsForRun(` |
| 141 | fn | markSubagentRunPausedAfterYield | pub | `export function markSubagentRunPausedAfterYield...` |
| 205 | type | RegisterSubagentRunParams | pub | - |
| 240 | fn | createSubagentRunManager | pub | `export function createSubagentRunManager(params: {` |
| 290 | fn | markOlderKillReconciliationsSuperseded | (private) | `const markOlderKillReconciliationsSuperseded = ...` |
| 319 | fn | restoreKillReconciliationSnapshots | (private) | `const restoreKillReconciliationSnapshots = (` |
| 327 | fn | waitForSubagentCompletion | (private) | `const waitForSubagentCompletion = async (` |
| 334 | fn | scheduleWaitRetry | (private) | `const scheduleWaitRetry = (entry: SubagentRunRe...` |
| 401 | fn | completeAsRunTimeout | (private) | `const completeAsRunTimeout = async (endedAt?: n...` |
| 560 | fn | markSubagentRunForSteerRestart | (private) | `const markSubagentRunForSteerRestart = (runId: ...` |
| 577 | fn | clearSubagentRunSteerRestart | (private) | `const clearSubagentRunSteerRestart = (runId: st...` |
| 634 | fn | replaceSubagentRunAfterSteer | (private) | `const replaceSubagentRunAfterSteer = (replacePa...` |
| 780 | fn | registerSubagentRun | (private) | `const registerSubagentRun = (registerParams: Re...` |
| 919 | fn | startQueuedSubagentRun | (private) | `const startQueuedSubagentRun = (runId: string, ...` |
| 1004 | fn | failQueuedSubagentRun | (private) | `const failQueuedSubagentRun = (runId: string, e...` |
| 1054 | fn | settleFailedQueuedSubagentLaunch | (private) | `const settleFailedQueuedSubagentLaunch = (runId...` |
| 1096 | fn | releaseSubagentRun | (private) | `const releaseSubagentRun = (runId: string) => {` |
| 1147 | fn | finalizeKilledTask | (private) | `const finalizeKilledTask = (entry: SubagentRunR...` |

## Public API

### `markSubagentRunPausedAfterYield`

```
export function markSubagentRunPausedAfterYield(params: {
```

**Line:** 141 | **Kind:** fn

### `createSubagentRunManager`

```
export function createSubagentRunManager(params: {
```

**Line:** 240 | **Kind:** fn
