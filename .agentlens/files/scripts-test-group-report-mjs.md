# scripts/test-group-report.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1176
- **Language:** JavaScript
- **Symbols:** 47
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | fn | usage | (private) | `function usage() {` |
| 66 | fn | readRequiredValue | (private) | `function readRequiredValue(argv, index, flag) {` |
| 74 | fn | readPositiveIntValue | (private) | `function readPositiveIntValue(argv, index, flag) {` |
| 81 | fn | parseTestGroupReportArgs | pub | `export function parseTestGroupReportArgs(argv) {` |
| 100 | fn | setSingleValueFlag | (private) | `const setSingleValueFlag = (flag, apply) => {` |
| 235 | fn | sanitizePathSegment | (private) | `function sanitizePathSegment(value) {` |
| 244 | fn | resolveTimeArgs | (private) | `function resolveTimeArgs(command) {` |
| 254 | fn | parseMaxRssBytes | (private) | `function parseMaxRssBytes(output) {` |
| 266 | fn | formatSpawnError | (private) | `function formatSpawnError(error) {` |
| 270 | fn | signalTestGroupReportChild | pub | `export function signalTestGroupReportChild(` |
| 315 | fn | spawnText | pub | `export function spawnText(command, args, option...` |
| 347 | fn | signalChild | (private) | `const signalChild = (signal) =>` |
| 350 | fn | cleanupParentSignalHandlers | (private) | `const cleanupParentSignalHandlers = () => {` |
| 356 | fn | relayParentSignal | (private) | `const relayParentSignal = (signal) => {` |
| 357 | fn | handler | (private) | `const handler = () => {` |
| 374 | fn | processGroupIsAlive | (private) | `const processGroupIsAlive = () => {` |
| 385 | fn | waitForProcessGroupExit | (private) | `const waitForProcessGroupExit = async (timeoutM...` |
| 397 | fn | finishAfterProcessGroupCleanup | (private) | `const finishAfterProcessGroupCleanup = async (r...` |
| 420 | fn | scheduleKill | (private) | `const scheduleKill = (message) => {` |
| 449 | fn | finish | (private) | `const finish = (result) => {` |
| 465 | fn | appendTail | (private) | `function appendTail(chunk, target = "output") {` |
| 489 | fn | appendDiagnostic | (private) | `function appendDiagnostic(message) {` |
| 498 | fn | appendOutput | (private) | `const appendOutput = (chunk, streamName) => {` |
| 545 | fn | streamedOutput | (private) | `function streamedOutput() {` |
| 576 | fn | runVitestJsonReport | (private) | `async function runVitestJsonReport(params) {` |
| 629 | fn | readReportInput | (private) | `function readReportInput(entry) {` |
| 645 | fn | readReportInputs | (private) | `function readReportInputs(entries) {` |
| 666 | fn | readGroupedReport | (private) | `function readGroupedReport(reportPath) {` |
| 672 | fn | isFiniteNumber | (private) | `function isFiniteNumber(value) {` |
| 676 | fn | validateCounter | (private) | `function validateCounter(counter, reportPath, f...` |
| 694 | fn | validateCounterRows | (private) | `function validateCounterRows(report, reportPath...` |
| 711 | fn | validateTopFileRows | (private) | `function validateTopFileRows(report, reportPath) {` |
| 740 | fn | validateRunRows | (private) | `function validateRunRows(report, reportPath) {` |
| 774 | fn | validateGroupedReport | (private) | `function validateGroupedReport(report, reportPa...` |
| 813 | fn | resolveReportArtifactDirs | pub | `export function resolveReportArtifactDirs(outpu...` |
| 824 | fn | withUniqueLabels | (private) | `function withUniqueLabels(plans) {` |
| 844 | fn | buildFullSuiteLeafRunPlans | (private) | `function buildFullSuiteLeafRunPlans() {` |
| 861 | fn | resolveRunPlans | pub | `export function resolveRunPlans(args) {` |
| 885 | fn | resolveFullSuiteVitestEnv | pub | `export function resolveFullSuiteVitestEnv(args,...` |
| 902 | fn | resolveRunPlanConcurrency | pub | `export function resolveRunPlanConcurrency(args,...` |
| 915 | fn | hasExplicitIsolationArg | (private) | `function hasExplicitIsolationArg(args) {` |
| 926 | fn | resolveReportVitestArgs | pub | `export function resolveReportVitestArgs(args) {` |
| 936 | fn | resolveReportRunSpecs | pub | `export function resolveReportRunSpecs(args, run...` |
| 954 | fn | printRunLine | (private) | `function printRunLine(run) {` |
| 960 | fn | printSlowTestsForRun | (private) | `function printSlowTestsForRun(entry, maxTestMs) {` |
| 980 | fn | runReportPlans | pub | `export async function runReportPlans(params) {` |
| 1050 | fn | main | (private) | `async function main() {` |

## Public API

### `parseTestGroupReportArgs`

```
export function parseTestGroupReportArgs(argv) {
```

**Line:** 81 | **Kind:** fn

### `signalTestGroupReportChild`

```
export function signalTestGroupReportChild(
```

**Line:** 270 | **Kind:** fn

### `spawnText`

```
export function spawnText(command, args, options) {
```

**Line:** 315 | **Kind:** fn

### `resolveReportArtifactDirs`

```
export function resolveReportArtifactDirs(outputPath) {
```

**Line:** 813 | **Kind:** fn

### `resolveRunPlans`

```
export function resolveRunPlans(args) {
```

**Line:** 861 | **Kind:** fn

### `resolveFullSuiteVitestEnv`

```
export function resolveFullSuiteVitestEnv(args, env = process.env, label = "") {
```

**Line:** 885 | **Kind:** fn

### `resolveRunPlanConcurrency`

```
export function resolveRunPlanConcurrency(args, runPlanCount) {
```

**Line:** 902 | **Kind:** fn

### `resolveReportVitestArgs`

```
export function resolveReportVitestArgs(args) {
```

**Line:** 926 | **Kind:** fn

### `resolveReportRunSpecs`

```
export function resolveReportRunSpecs(args, runPlans, params = {}) {
```

**Line:** 936 | **Kind:** fn

### `runReportPlans`

```
export async function runReportPlans(params) {
```

**Line:** 980 | **Kind:** fn
