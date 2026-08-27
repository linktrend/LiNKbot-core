# src/cron/service/timer.ts

[← Back to Module](../modules/src-cron-service/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2953
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 135 | type | TimedCronRunOutcome | (private) | - |
| 155 | type | CronJobRunResult | (private) | - |
| 164 | type | CronTriggerEvalOutcome | pub | - |
| 171 | type | IsolatedAgentSetupTimeoutSignal | pub | - |
| 177 | type | IsolatedAgentSetupTimeoutResult | (private) | - |
| 183 | type | CronCoreRunOutcome | (private) | - |
| 187 | type | StartupCatchupCandidate | (private) | - |
| 194 | type | StartupDeferredJob | (private) | - |
| 199 | type | StartupCatchupPlan | (private) | - |
| 204 | type | StartupCatchupExecution | (private) | - |
| 208 | type | ExecuteJobCoreOptions | (private) | - |
| 217 | fn | runsDetachedFromMainSession | pub | `export function runsDetachedFromMainSession(job...` |
| 229 | fn | cronRunAttributionFromExecution | (private) | `function cronRunAttributionFromExecution(execut...` |
| 247 | fn | executeJobCoreWithTimeout | pub | `export async function executeJobCoreWithTimeout(` |
| 262 | fn | createOperatorCancellationOutcome | (private) | `const createOperatorCancellationOutcome = (exec...` |
| 292 | fn | accumulateExecution | (private) | `const accumulateExecution = (info?: CronAgentEx...` |
| 331 | fn | triggerTimeout | (private) | `const triggerTimeout = (reason: string) => {` |
| 345 | fn | noteLaneState | (private) | `const noteLaneState = (info?: { waiting?: boole...` |
| 408 | fn | notifyIsolatedAgentSetupTimeout | (private) | `function notifyIsolatedAgentSetupTimeout(` |
| 437 | fn | maybeNotifyIsolatedAgentSetupTimeout | pub | `export function maybeNotifyIsolatedAgentSetupTi...` |
| 457 | fn | resolveMainSessionCronDeliveryContext | (private) | `function resolveMainSessionCronDeliveryContext(` |
| 488 | type | TransientCronRetryDecision | (private) | - |
| 496 | type | DisabledHeartbeatOneShotRetryDecision | (private) | - |
| 503 | type | QueuedSystemEventHandle | (private) | - |
| 508 | fn | resolveCronNextRunWithLowerBound | (private) | `function resolveCronNextRunWithLowerBound(param...` |
| 529 | fn | resolveRetryConfig | (private) | `function resolveRetryConfig() {` |
| 537 | fn | resolveTransientCronRetryDecision | (private) | `function resolveTransientCronRetryDecision(para...` |
| 577 | fn | resolveDisabledHeartbeatOneShotRetryDecision | (private) | `function resolveDisabledHeartbeatOneShotRetryDe...` |
| 598 | fn | normalizeQueuedSystemEventHandle | (private) | `function normalizeQueuedSystemEventHandle(` |
| 613 | fn | removeQueuedSystemEventHandle | (private) | `function removeQueuedSystemEventHandle(` |
| 631 | fn | shouldRetryDisabledHeartbeatOneShot | (private) | `function shouldRetryDisabledHeartbeatOneShot(` |
| 644 | fn | isScheduledTerminalOneShotRetry | (private) | `function isScheduledTerminalOneShotRetry(` |
| 669 | fn | resolveDeliveryState | (private) | `function resolveDeliveryState(params: {` |
| 748 | fn | applyJobResult | pub | `export function applyJobResult(` |
| 954 | fn | computeNormalNext | (private) | `const computeNormalNext = () => {` |
| 1091 | fn | applyTriggerEvaluationState | (private) | `function applyTriggerEvaluationState(` |
| 1110 | fn | applyTriggerRunResult | pub | `export function applyTriggerRunResult(` |
| 1134 | fn | applyScriptRunResult | pub | `export function applyScriptRunResult(` |
| 1146 | fn | applyTriggerNoFireResult | pub | `export function applyTriggerNoFireResult(` |
| 1187 | fn | applyOutcomeToStoredJob | (private) | `function applyOutcomeToStoredJob(` |
| 1250 | fn | armTimer | pub | `export function armTimer(state: CronServiceStat...` |
| 1316 | fn | armRunningRecheckTimer | (private) | `function armRunningRecheckTimer(state: CronServ...` |
| 1331 | fn | onTimer | (private) | `async function onTimer(state: CronServiceState) {` |
| 1351 | fn | onAdmittedTimer | (private) | `async function onAdmittedTimer(state: CronServi...` |
| 1417 | fn | cleanup | (private) | `const cleanup = async () => {` |
| 1602 | fn | releaseUnclaimedDueJobReservations | (private) | `const releaseUnclaimedDueJobReservations = asyn...` |
| 1631 | fn | releaseUnclaimedDueJobReservationsWithRetry | (private) | `const releaseUnclaimedDueJobReservationsWithRet...` |
| 1849 | fn | isRunnableJob | (private) | `function isRunnableJob(params: {` |
| 1929 | fn | isErrorBackoffPending | (private) | `function isErrorBackoffPending(_state: CronServ...` |
| 1937 | fn | collectRunnableJobs | (private) | `function collectRunnableJobs(` |
| 1961 | fn | deferPendingBackoffMissedCronSlots | (private) | `function deferPendingBackoffMissedCronSlots(` |
| 2008 | fn | releaseStartupCatchupReservationsAfterFailure | (private) | `async function releaseStartupCatchupReservation...` |
| 2013 | fn | attempt | (private) | `const attempt = async () => {` |
| 2045 | fn | runMissedJobs | pub | `export async function runMissedJobs(` |
| 2091 | fn | planStartupCatchup | (private) | `async function planStartupCatchup(` |
| 2186 | fn | executeStartupCatchupPlan | (private) | `async function executeStartupCatchupPlan(` |
| 2280 | fn | runStartupCatchupCandidate | (private) | `async function runStartupCatchupCandidate(` |
| 2337 | fn | applyStartupCatchupOutcomes | (private) | `async function applyStartupCatchupOutcomes(` |
| 2445 | fn | executeJobCore | (private) | `async function executeJobCore(` |
| 2463 | fn | resolveAbortError | (private) | `const resolveAbortError = () => ({` |
| 2467 | fn | waitWithAbort | (private) | `const waitWithAbort = async (ms: number) => {` |
| 2482 | fn | onAbort | (private) | `const onAbort = () => {` |
| 2571 | fn | executeMainSessionCronJob | (private) | `async function executeMainSessionCronJob(` |
| 2714 | fn | executeDetachedCronJob | (private) | `async function executeDetachedCronJob(` |
| 2831 | fn | executeScriptCronJob | (private) | `async function executeScriptCronJob(` |
| 2900 | fn | emitJobFinished | (private) | `function emitJobFinished(` |
| 2940 | fn | stopTimer | pub | `export function stopTimer(state: CronServiceSta...` |

## Public API

### `runsDetachedFromMainSession`

```
export function runsDetachedFromMainSession(job: CronJob): boolean {
```

**Line:** 217 | **Kind:** fn

### `executeJobCoreWithTimeout`

```
export async function executeJobCoreWithTimeout(
```

**Line:** 247 | **Kind:** fn

### `maybeNotifyIsolatedAgentSetupTimeout`

```
export function maybeNotifyIsolatedAgentSetupTimeout(
```

**Line:** 437 | **Kind:** fn

### `applyJobResult`

```
export function applyJobResult(
```

**Line:** 748 | **Kind:** fn

### `applyTriggerRunResult`

```
export function applyTriggerRunResult(
```

**Line:** 1110 | **Kind:** fn

### `applyScriptRunResult`

```
export function applyScriptRunResult(
```

**Line:** 1134 | **Kind:** fn

### `applyTriggerNoFireResult`

```
export function applyTriggerNoFireResult(
```

**Line:** 1146 | **Kind:** fn

### `armTimer`

```
export function armTimer(state: CronServiceState) {
```

**Line:** 1250 | **Kind:** fn

### `runMissedJobs`

```
export async function runMissedJobs(
```

**Line:** 2045 | **Kind:** fn

### `stopTimer`

```
export function stopTimer(state: CronServiceState) {
```

**Line:** 2940 | **Kind:** fn

## Memory Markers

### 🔴 `SAFETY` (line 124)

> net that prevents spin-loops when `computeJobNextRunAtMs` returns

### 🟢 `NOTE` (line 920)

> deleteAfterRun:true only triggers on ok (see shouldDelete above),

### 🔴 `SAFETY` (line 1061)

> net: ensure the next fire is at least MIN_REFIRE_GAP_MS
