# src/cron/service/ops.ts

[← Back to Module](../modules/src-cron-service/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1596
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 15

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 106 | fn | markManualCronJobActive | (private) | `function markManualCronJobActive(` |
| 117 | fn | clearManualCronJobActive | (private) | `function clearManualCronJobActive(` |
| 129 | fn | maybeNotifyManualIsolatedSetupTimeout | (private) | `function maybeNotifyManualIsolatedSetupTimeout(` |
| 145 | fn | ensureLoadedForRead | (private) | `async function ensureLoadedForRead(state: CronS...` |
| 159 | fn | start | pub | `export async function start(state: CronServiceS...` |
| 287 | fn | stop | pub | `export function stop(state: CronServiceState) {` |
| 295 | fn | pauseScheduling | pub | `export function pauseScheduling(state: CronServ...` |
| 300 | fn | resumeScheduling | pub | `export function resumeScheduling(state: CronSer...` |
| 320 | fn | status | pub | `export async function status(state: CronService...` |
| 335 | fn | list | pub | `export async function list(state: CronServiceSt...` |
| 345 | fn | readJob | pub | `export async function readJob(state: CronServic...` |
| 352 | fn | resolveEnabledFilter | (private) | `function resolveEnabledFilter(opts?: CronListPa...` |
| 359 | fn | resolveScheduleKindFilter | (private) | `function resolveScheduleKindFilter(opts?: CronL...` |
| 372 | fn | resolveLastRunStatusFilter | (private) | `function resolveLastRunStatusFilter(opts?: Cron...` |
| 385 | fn | resolveJobLastRunStatus | (private) | `function resolveJobLastRunStatus(job: CronJob):...` |
| 389 | fn | resolveEffectiveJobAgentId | (private) | `function resolveEffectiveJobAgentId(job: CronJo...` |
| 398 | fn | listPage | pub | `export async function listPage(state: CronServi...` |
| 458 | fn | finalizeUpdatedJob | (private) | `function finalizeUpdatedJob(params: {` |
| 530 | fn | persistUpdatedJob | (private) | `async function persistUpdatedJob(params: {` |
| 553 | fn | declarativeFields | (private) | `function declarativeFields(job: CronJob, includ...` |
| 566 | fn | add | pub | `export async function add(state: CronServiceSta...` |
| 661 | fn | updateLoadedJob | (private) | `async function updateLoadedJob(params: {` |
| 696 | fn | update | pub | `export async function update(state: CronService...` |
| 701 | fn | updateWithPrecondition | pub | `export async function updateWithPrecondition(` |
| 711 | fn | remove | pub | `export async function remove(state: CronService...` |
| 741 | type | PreparedManualRun | (private) | - |
| 766 | type | ActivatedManualRun | (private) | - |
| 773 | type | ManualRunOptions | (private) | - |
| 780 | type | ManualRunTerminalTracker | (private) | - |
| 782 | fn | emitCronRunFinished | (private) | `function emitCronRunFinished(` |
| 803 | type | ManualRunDisposition | (private) | - |
| 807 | type | ManualRunPreflightResult | (private) | - |
| 819 | fn | skipInvalidPersistedManualRun | (private) | `async function skipInvalidPersistedManualRun(pa...` |
| 879 | fn | inspectManualRunPreflight | (private) | `async function inspectManualRunPreflight(` |
| 921 | fn | inspectManualRunDisposition | (private) | `async function inspectManualRunDisposition(` |
| 938 | fn | prepareManualRun | (private) | `async function prepareManualRun(` |
| 1007 | fn | cleanup | (private) | `const cleanup = async () => {` |
| 1056 | fn | activatePreparedManualRun | (private) | `async function activatePreparedManualRun(` |
| 1169 | fn | releasePreparedManualReservation | (private) | `async function releasePreparedManualReservation(` |
| 1194 | fn | releasePreparedManualReservationWithRetry | (private) | `async function releasePreparedManualReservation...` |
| 1212 | fn | releasePreparedManualReservationAfterReloadWithRetry | (private) | `async function releasePreparedManualReservation...` |
| 1216 | fn | attempt | (private) | `const attempt = async () => {` |
| 1234 | fn | finishPreparedManualRun | (private) | `async function finishPreparedManualRun(` |
| 1258 | fn | emitMissingQueuedTerminal | (private) | `const emitMissingQueuedTerminal = () => {` |
| 1459 | fn | run | pub | `export async function run(` |
| 1502 | fn | enqueueRun | pub | `export async function enqueueRun(state: CronSer...` |
| 1590 | fn | wakeNow | pub | `export function wakeNow(` |

## Public API

### `start`

```
export async function start(state: CronServiceState) {
```

**Line:** 159 | **Kind:** fn

### `stop`

```
export function stop(state: CronServiceState) {
```

**Line:** 287 | **Kind:** fn

### `pauseScheduling`

```
export function pauseScheduling(state: CronServiceState) {
```

**Line:** 295 | **Kind:** fn

### `resumeScheduling`

```
export function resumeScheduling(state: CronServiceState) {
```

**Line:** 300 | **Kind:** fn

### `status`

```
export async function status(state: CronServiceState) {
```

**Line:** 320 | **Kind:** fn

### `list`

```
export async function list(state: CronServiceState, opts?: { includeDisabled?: boolean }) {
```

**Line:** 335 | **Kind:** fn

### `readJob`

```
export async function readJob(state: CronServiceState, id: string) {
```

**Line:** 345 | **Kind:** fn

### `listPage`

```
export async function listPage(state: CronServiceState, opts?: CronListPageOptions) {
```

**Line:** 398 | **Kind:** fn

### `add`

```
export async function add(state: CronServiceState, input: CronJobCreate, opts?: CronAddOptions) {
```

**Line:** 566 | **Kind:** fn

### `update`

```
export async function update(state: CronServiceState, id: string, patch: CronJobPatch) {
```

**Line:** 696 | **Kind:** fn

### `updateWithPrecondition`

```
export async function updateWithPrecondition(
```

**Line:** 701 | **Kind:** fn

### `remove`

```
export async function remove(state: CronServiceState, id: string) {
```

**Line:** 711 | **Kind:** fn

### `run`

```
export async function run(
```

**Line:** 1459 | **Kind:** fn

### `enqueueRun`

```
export async function enqueueRun(state: CronServiceState, id: string, mode?: "due" | "force") {
```

**Line:** 1502 | **Kind:** fn

### `wakeNow`

```
export function wakeNow(
```

**Line:** 1590 | **Kind:** fn
