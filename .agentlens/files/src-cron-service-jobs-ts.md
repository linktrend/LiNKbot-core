# src/cron/service/jobs.ts

[← Back to Module](../modules/src-cron-service/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1538
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | fn | isFiniteTimestamp | (private) | `function isFiniteTimestamp(value: unknown): val...` |
| 66 | fn | hasScheduledNextRunAtMs | pub | `export function hasScheduledNextRunAtMs(value: ...` |
| 71 | fn | resolveJobLastRunStatus | pub | `export function resolveJobLastRunStatus(job: Pi...` |
| 76 | fn | errorBackoffMs | pub | `export function errorBackoffMs(` |
| 88 | fn | resolveJobErrorBackoffUntilMs | pub | `export function resolveJobErrorBackoffUntilMs(` |
| 108 | fn | resolveStableCronOffsetMs | (private) | `function resolveStableCronOffsetMs(jobId: strin...` |
| 131 | fn | computeStaggeredCronNextRunAtMs | (private) | `function computeStaggeredCronNextRunAtMs(job: C...` |
| 159 | fn | computeStaggeredCronPreviousRunAtMs | (private) | `function computeStaggeredCronPreviousRunAtMs(jo...` |
| 187 | fn | computeStaggeredCronPreviousRunAtOrBeforeMs | (private) | `function computeStaggeredCronPreviousRunAtOrBef...` |
| 208 | fn | isStaggeredCronRunAtMs | (private) | `function isStaggeredCronRunAtMs(job: CronJob, r...` |
| 216 | fn | isPendingErrorBackoffSlot | (private) | `function isPendingErrorBackoffSlot(params: {` |
| 227 | fn | shouldRepairFutureCronNextRunAtMs | (private) | `function shouldRepairFutureCronNextRunAtMs(para...` |
| 288 | fn | resolveEveryAnchorMs | (private) | `function resolveEveryAnchorMs(params: {` |
| 303 | fn | assertSupportedJobSpec | pub | `export function assertSupportedJobSpec(job: Pic...` |
| 342 | fn | assertScriptPayloadSupport | (private) | `function assertScriptPayloadSupport(` |
| 364 | fn | assertTriggerSupport | (private) | `function assertTriggerSupport(` |
| 383 | fn | assertPacingSupport | (private) | `function assertPacingSupport(job: Pick<CronJob,...` |
| 393 | fn | assertCronExpressionSatisfiable | (private) | `function assertCronExpressionSatisfiable(job: C...` |
| 405 | fn | assertMainSessionAgentId | (private) | `function assertMainSessionAgentId(` |
| 427 | fn | assertDeliverySupport | (private) | `function assertDeliverySupport(job: Pick<CronJo...` |
| 473 | fn | hasConcreteFailureDestination | (private) | `function hasConcreteFailureDestination(` |
| 485 | fn | assertFailureDestinationSupport | (private) | `function assertFailureDestinationSupport(job: P...` |
| 510 | fn | findJobOrThrow | pub | `export function findJobOrThrow(state: CronServi...` |
| 519 | fn | isJobEnabled | pub | `export function isJobEnabled(job: Pick<CronJob,...` |
| 524 | fn | computeJobNextRunAtMs | pub | `export function computeJobNextRunAtMs(job: Cron...` |
| 570 | fn | computeJobPreviousRunAtMs | pub | `export function computeJobPreviousRunAtMs(job: ...` |
| 579 | fn | computeJobPreviousRunAtOrBeforeMs | pub | `export function computeJobPreviousRunAtOrBefore...` |
| 591 | fn | recordScheduleComputeError | pub | `export function recordScheduleComputeError(para...` |
| 613 | fn | notify | (private) | `const notify = () => {` |
| 643 | fn | normalizeJobTickState | (private) | `function normalizeJobTickState(params: { state:...` |
| 757 | fn | walkSchedulableJobs | (private) | `function walkSchedulableJobs(` |
| 781 | fn | recomputeJobNextRunAtMs | (private) | `function recomputeJobNextRunAtMs(params: {` |
| 828 | fn | recomputeNextRuns | pub | `export function recomputeNextRuns(state: CronSe...` |
| 859 | fn | recomputeNextRunsForMaintenance | pub | `export function recomputeNextRunsForMaintenance(` |
| 871 | fn | recomputeJob | (private) | `const recomputeJob = (job: CronJob, nowMs: numb...` |
| 958 | fn | nextWakeAtMs | pub | `export function nextWakeAtMs(state: CronService...` |
| 977 | fn | createJob | pub | `export function createJob(state: CronServiceSta...` |
| 1082 | fn | applyJobPatch | pub | `export function applyJobPatch(` |
| 1235 | fn | applyDeclarativeJobSpec | pub | `export function applyDeclarativeJobSpec(` |
| 1325 | fn | mergeCronDelivery | (private) | `function mergeCronDelivery(` |
| 1451 | fn | mergeCronFailureAlert | (private) | `function mergeCronFailureAlert(` |
| 1504 | fn | hasActiveCronRun | pub | `export function hasActiveCronRun(job: Pick<Cron...` |
| 1513 | fn | isJobDue | pub | `export function isJobDue(job: CronJob, nowMs: n...` |
| 1531 | fn | resolveJobPayloadTextForMain | pub | `export function resolveJobPayloadTextForMain(jo...` |

## Public API

### `hasScheduledNextRunAtMs`

```
export function hasScheduledNextRunAtMs(value: unknown): value is number {
```

**Line:** 66 | **Kind:** fn

### `resolveJobLastRunStatus`

```
export function resolveJobLastRunStatus(job: Pick<CronJob, "state">) {
```

**Line:** 71 | **Kind:** fn

### `errorBackoffMs`

```
export function errorBackoffMs(
```

**Line:** 76 | **Kind:** fn

### `resolveJobErrorBackoffUntilMs`

```
export function resolveJobErrorBackoffUntilMs(
```

**Line:** 88 | **Kind:** fn

### `assertSupportedJobSpec`

```
export function assertSupportedJobSpec(job: Pick<CronJob, "sessionTarget" | "payload">) {
```

**Line:** 303 | **Kind:** fn

### `findJobOrThrow`

```
export function findJobOrThrow(state: CronServiceState, id: string) {
```

**Line:** 510 | **Kind:** fn

### `isJobEnabled`

```
export function isJobEnabled(job: Pick<CronJob, "enabled">): boolean {
```

**Line:** 519 | **Kind:** fn

### `computeJobNextRunAtMs`

```
export function computeJobNextRunAtMs(job: CronJob, nowMs: number): number | undefined {
```

**Line:** 524 | **Kind:** fn

### `computeJobPreviousRunAtMs`

```
export function computeJobPreviousRunAtMs(job: CronJob, nowMs: number): number | undefined {
```

**Line:** 570 | **Kind:** fn

### `computeJobPreviousRunAtOrBeforeMs`

```
export function computeJobPreviousRunAtOrBeforeMs(job: CronJob, nowMs: number): number | undefined {
```

**Line:** 579 | **Kind:** fn

### `recordScheduleComputeError`

```
export function recordScheduleComputeError(params: {
```

**Line:** 591 | **Kind:** fn

### `recomputeNextRuns`

```
export function recomputeNextRuns(state: CronServiceState): boolean {
```

**Line:** 828 | **Kind:** fn

### `recomputeNextRunsForMaintenance`

```
export function recomputeNextRunsForMaintenance(
```

**Line:** 859 | **Kind:** fn

### `nextWakeAtMs`

```
export function nextWakeAtMs(state: CronServiceState) {
```

**Line:** 958 | **Kind:** fn

### `createJob`

```
export function createJob(state: CronServiceState, input: CronJobCreate): CronJob {
```

**Line:** 977 | **Kind:** fn

### `applyJobPatch`

```
export function applyJobPatch(
```

**Line:** 1082 | **Kind:** fn

### `applyDeclarativeJobSpec`

```
export function applyDeclarativeJobSpec(
```

**Line:** 1235 | **Kind:** fn

### `hasActiveCronRun`

```
export function hasActiveCronRun(job: Pick<CronJob, "id" | "state">) {
```

**Line:** 1504 | **Kind:** fn

### `isJobDue`

```
export function isJobDue(job: CronJob, nowMs: number, opts: { forced: boolean }) {
```

**Line:** 1513 | **Kind:** fn

### `resolveJobPayloadTextForMain`

```
export function resolveJobPayloadTextForMain(job: CronJob): string | undefined {
```

**Line:** 1531 | **Kind:** fn
