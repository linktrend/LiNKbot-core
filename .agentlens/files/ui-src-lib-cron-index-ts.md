# ui/src/lib/cron/index.ts

[← Back to Module](../modules/ui-src-lib-cron/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1329
- **Language:** TypeScript
- **Symbols:** 56
- **Public symbols:** 28

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | CronFormState | pub | - |
| 76 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 80 | fn | isCronPayload | (private) | `function isCronPayload(value: unknown): value i...` |
| 96 | fn | getCronJobPayload | pub | `export function getCronJobPayload(job: CronJob)...` |
| 101 | fn | hasCronJobPayload | (private) | `function hasCronJobPayload(job: CronJob): boole...` |
| 145 | type | CronFieldKey | pub | - |
| 159 | type | CronFieldErrors | pub | - |
| 161 | type | CronJobsScheduleKindFilter | pub | - |
| 162 | type | CronJobsLastStatusFilter | pub | - |
| 163 | type | CronRunsLoadStatus | (private) | - |
| 165 | type | CronState | pub | - |
| 213 | type | CronModelSuggestionsState | pub | - |
| 219 | fn | createInitialCronState | pub | `export function createInitialCronState(` |
| 267 | fn | supportsAnnounceDelivery | (private) | `function supportsAnnounceDelivery(` |
| 273 | fn | normalizeCronFormState | pub | `export function normalizeCronFormState(form: Cr...` |
| 286 | fn | validateCronForm | pub | `export function validateCronForm(form: CronForm...` |
| 356 | fn | hasCronFormErrors | pub | `export function hasCronFormErrors(errors: CronF...` |
| 360 | fn | loadCronStatus | pub | `export async function loadCronStatus(state: Cro...` |
| 377 | fn | loadCronModelSuggestions | pub | `export async function loadCronModelSuggestions(...` |
| 403 | fn | addModelId | (private) | `function addModelId(target: Set<string>, value:...` |
| 413 | fn | addModelConfigIds | (private) | `function addModelConfigIds(target: Set<string>,...` |
| 439 | fn | resolveConfiguredCronModelSuggestions | pub | `export function resolveConfiguredCronModelSugge...` |
| 472 | fn | withCronBusy | (private) | `async function withCronBusy(` |
| 491 | fn | normalizeCronPageMeta | (private) | `function normalizeCronPageMeta(params: {` |
| 519 | fn | drainPendingCronJobsReload | (private) | `async function drainPendingCronJobsReload(state...` |
| 529 | fn | loadCronJobsPage | pub | `export async function loadCronJobsPage(` |
| 602 | fn | updateCronJobsFilter | pub | `export function updateCronJobsFilter(` |
| 627 | fn | getVisibleCronJobs | pub | `export function getVisibleCronJobs(` |
| 651 | fn | resolveCronJobScheduleKind | (private) | `function resolveCronJobScheduleKind(job: CronJo...` |
| 664 | fn | clearCronEditState | (private) | `function clearCronEditState(state: CronState) {` |
| 668 | fn | clearCronRunsPage | (private) | `function clearCronRunsPage(state: CronState) {` |
| 675 | fn | resetCronFormToDefaults | (private) | `function resetCronFormToDefaults(state: CronSta...` |
| 682 | fn | formatDateTimeLocal | (private) | `function formatDateTimeLocal(input: string): st...` |
| 700 | fn | parseEverySchedule | (private) | `function parseEverySchedule(everyMs: number): P...` |
| 713 | fn | everyMsToSecondsString | (private) | `function everyMsToSecondsString(everyMs: number...` |
| 724 | fn | parseStaggerSchedule | (private) | `function parseStaggerSchedule(` |
| 747 | fn | jobToForm | (private) | `function jobToForm(job: CronJob, prev: CronForm...` |
| 845 | fn | buildCronSchedule | (private) | `function buildCronSchedule(form: CronFormState) {` |
| 879 | fn | buildCronPayload | (private) | `function buildCronPayload(form: CronFormState) {` |
| 917 | fn | normalizePersistedDeliveryChannel | (private) | `function normalizePersistedDeliveryChannel(` |
| 931 | fn | buildFailureAlert | (private) | `function buildFailureAlert(form: CronFormState,...` |
| 968 | type | CronSaveResult | (private) | - |
| 971 | fn | extractSavedCronJobId | (private) | `function extractSavedCronJobId(response: unknow...` |
| 983 | fn | addCronJob | pub | `export async function addCronJob(state: CronSta...` |
| 1103 | fn | reloadCronJobsSnapshot | (private) | `async function reloadCronJobsSnapshot(state: Cr...` |
| 1109 | fn | toggleCronJob | pub | `export async function toggleCronJob(` |
| 1125 | fn | cronRunNotStartedMessage | (private) | `function cronRunNotStartedMessage(result: CronR...` |
| 1144 | fn | runCronJob | pub | `export async function runCronJob(state: CronSta...` |
| 1160 | fn | removeCronJob | pub | `export async function removeCronJob(state: Cron...` |
| 1174 | fn | loadCronRuns | pub | `export async function loadCronRuns(` |
| 1244 | fn | loadMoreCronRuns | pub | `export async function loadMoreCronRuns(state: C...` |
| 1251 | fn | updateCronRunsFilter | pub | `export function updateCronRunsFilter(` |
| 1284 | fn | startCronEdit | pub | `export function startCronEdit(state: CronState,...` |
| 1291 | fn | buildCloneName | (private) | `function buildCloneName(name: string, existingN...` |
| 1308 | fn | startCronClone | pub | `export function startCronClone(state: CronState...` |
| 1325 | fn | cancelCronEdit | pub | `export function cancelCronEdit(state: CronState) {` |

## Public API

### `getCronJobPayload`

```
export function getCronJobPayload(job: CronJob): CronPayload | null {
```

**Line:** 96 | **Kind:** fn

### `createInitialCronState`

```
export function createInitialCronState(
```

**Line:** 219 | **Kind:** fn

### `normalizeCronFormState`

```
export function normalizeCronFormState(form: CronFormState): CronFormState {
```

**Line:** 273 | **Kind:** fn

### `validateCronForm`

```
export function validateCronForm(form: CronFormState): CronFieldErrors {
```

**Line:** 286 | **Kind:** fn

### `hasCronFormErrors`

```
export function hasCronFormErrors(errors: CronFieldErrors): boolean {
```

**Line:** 356 | **Kind:** fn

### `loadCronStatus`

```
export async function loadCronStatus(state: CronState) {
```

**Line:** 360 | **Kind:** fn

### `loadCronModelSuggestions`

```
export async function loadCronModelSuggestions(state: CronModelSuggestionsState) {
```

**Line:** 377 | **Kind:** fn

### `resolveConfiguredCronModelSuggestions`

```
export function resolveConfiguredCronModelSuggestions(
```

**Line:** 439 | **Kind:** fn

### `loadCronJobsPage`

```
export async function loadCronJobsPage(
```

**Line:** 529 | **Kind:** fn

### `updateCronJobsFilter`

```
export function updateCronJobsFilter(
```

**Line:** 602 | **Kind:** fn

### `getVisibleCronJobs`

```
export function getVisibleCronJobs(
```

**Line:** 627 | **Kind:** fn

### `addCronJob`

```
export async function addCronJob(state: CronState): Promise<CronSaveResult> {
```

**Line:** 983 | **Kind:** fn

### `toggleCronJob`

```
export async function toggleCronJob(
```

**Line:** 1109 | **Kind:** fn

### `runCronJob`

```
export async function runCronJob(state: CronState, jobId: string, mode: "force" | "due" = "force") {
```

**Line:** 1144 | **Kind:** fn

### `removeCronJob`

```
export async function removeCronJob(state: CronState, job: CronJob) {
```

**Line:** 1160 | **Kind:** fn

### `loadCronRuns`

```
export async function loadCronRuns(
```

**Line:** 1174 | **Kind:** fn

### `loadMoreCronRuns`

```
export async function loadMoreCronRuns(state: CronState) {
```

**Line:** 1244 | **Kind:** fn

### `updateCronRunsFilter`

```
export function updateCronRunsFilter(
```

**Line:** 1251 | **Kind:** fn

### `startCronEdit`

```
export function startCronEdit(state: CronState, job: CronJob) {
```

**Line:** 1284 | **Kind:** fn

### `startCronClone`

```
export function startCronClone(state: CronState, job: CronJob) {
```

**Line:** 1308 | **Kind:** fn

### `cancelCronEdit`

```
export function cancelCronEdit(state: CronState) {
```

**Line:** 1325 | **Kind:** fn
