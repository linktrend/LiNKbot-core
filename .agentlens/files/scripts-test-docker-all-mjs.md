# scripts/test-docker-all.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1818
- **Language:** JavaScript
- **Symbols:** 74
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 56 | fn | dockerAllUsage | (private) | `function dockerAllUsage() {` |
| 68 | fn | parseDockerAllCliArgs | pub | `export function parseDockerAllCliArgs(argv) {` |
| 102 | fn | parsePositiveInt | (private) | `function parsePositiveInt(raw, fallback, label) {` |
| 117 | fn | parseNonNegativeInt | (private) | `function parseNonNegativeInt(raw, fallback, lab...` |
| 132 | fn | parseBool | (private) | `function parseBool(raw, fallback) {` |
| 139 | fn | numericTimerValueMs | (private) | `function numericTimerValueMs(valueMs) {` |
| 144 | fn | resolveTimerTimeoutMs | (private) | `function resolveTimerTimeoutMs(valueMs, fallbac...` |
| 149 | fn | resolveOptionalTimerTimeoutMs | (private) | `function resolveOptionalTimerTimeoutMs(valueMs) {` |
| 157 | fn | resourceLimitsSummary | (private) | `function resourceLimitsSummary(resourceLimits) {` |
| 163 | fn | resourceLimitEnvName | (private) | `function resourceLimitEnvName(resource) {` |
| 167 | fn | describeDockerSchedulerLimits | pub | `export function describeDockerSchedulerLimits(p...` |
| 173 | fn | parseResourceLimit | (private) | `function parseResourceLimit(env, resource, para...` |
| 178 | fn | parseSchedulerOptions | (private) | `function parseSchedulerOptions(env, parallelism) {` |
| 194 | fn | canStartSchedulerLane | pub | `export function canStartSchedulerLane(candidate...` |
| 214 | fn | timingSeconds | (private) | `function timingSeconds(timingStore, poolLane) {` |
| 222 | fn | orderLanes | (private) | `function orderLanes(poolLanes, timingStore) {` |
| 229 | fn | utcStampForPath | (private) | `function utcStampForPath() {` |
| 233 | fn | utcStamp | (private) | `function utcStamp() {` |
| 237 | fn | appendExtension | (private) | `function appendExtension(env, extension) {` |
| 246 | fn | commandEnv | (private) | `function commandEnv(extra = {}) {` |
| 263 | fn | shellQuote | (private) | `function shellQuote(value) {` |
| 267 | fn | githubWorkflowRef | (private) | `function githubWorkflowRef(env = process.env) {` |
| 271 | fn | maybeGhcrImage | (private) | `function maybeGhcrImage(value) {` |
| 275 | fn | githubWorkflowRerunCommand | pub | `export function githubWorkflowRerunCommand(lane...` |
| 333 | fn | buildLaneRerunCommand | (private) | `function buildLaneRerunCommand(name, baseEnv) {` |
| 359 | fn | withResolvedPnpmCommand | (private) | `function withResolvedPnpmCommand(command, env) {` |
| 367 | fn | liveDockerHarnessScriptCommand | (private) | `function liveDockerHarnessScriptCommand(script) {` |
| 371 | fn | loadTimingStore | (private) | `async function loadTimingStore(file, enabled) {` |
| 397 | fn | writeTimingStore | (private) | `async function writeTimingStore(timingStore, re...` |
| 423 | fn | writeRunSummary | pub | `export async function writeRunSummary(logDir, s...` |
| 451 | fn | writeFailureIndex | (private) | `async function writeFailureIndex(logDir, summar...` |
| 505 | fn | phaseElapsedSeconds | (private) | `function phaseElapsedSeconds(startedAtMs) {` |
| 509 | fn | runPhase | (private) | `async function runPhase(phases, name, details, ...` |
| 532 | fn | printLaneManifest | (private) | `function printLaneManifest(label, poolLanes, ti...` |
| 541 | fn | dockerPreflightContainerNames | pub | `export function dockerPreflightContainerNames(r...` |
| 550 | fn | resolveDockerPreflightPlatform | pub | `export function resolveDockerPreflightPlatform(...` |
| 554 | fn | dockerPreflightSmokeCommand | pub | `export function dockerPreflightSmokeCommand(arc...` |
| 559 | fn | runShellCommand | pub | `export function runShellCommand({` |
| 592 | fn | terminateForTimeout | (private) | `const terminateForTimeout = (message, options =...` |
| 608 | fn | resetNoOutputTimer | (private) | `const resetNoOutputTimer = () => {` |
| 634 | fn | writeOutput | (private) | `const writeOutput = (target, chunk) => {` |
| 654 | fn | finish | (private) | `const finish = () => {` |
| 683 | fn | appendBoundedShellCapture | pub | `export function appendBoundedShellCapture(curre...` |
| 691 | fn | runShellCaptureCommand | pub | `export function runShellCaptureCommand({` |
| 749 | fn | finish | (private) | `const finish = () => {` |
| 779 | fn | runForeground | (private) | `async function runForeground(label, command, en...` |
| 787 | fn | recordCleanupSmokeFailure | (private) | `async function recordCleanupSmokeFailure(error,...` |
| 828 | fn | runCleanupSmoke | (private) | `async function runCleanupSmoke(baseEnv, logDir,...` |
| 866 | fn | runCleanupSmokePhase | pub | `export async function runCleanupSmokePhase(base...` |
| 885 | fn | runForegroundGroup | (private) | `async function runForegroundGroup(entries, env) {` |
| 917 | fn | runDockerPreflight | (private) | `async function runDockerPreflight(baseEnv, opti...` |
| 977 | fn | prepareOpenClawPackage | (private) | `async function prepareOpenClawPackage(baseEnv, ...` |
| 1006 | fn | e2eImageForLane | (private) | `function e2eImageForLane(poolLane, baseEnv) {` |
| 1016 | fn | laneEnv | (private) | `function laneEnv(poolLane, baseEnv, logDir, cac...` |
| 1039 | fn | runLane | (private) | `async function runLane(lane, baseEnv, logDir, f...` |
| 1125 | fn | runLanePool | (private) | `async function runLanePool(poolLanes, baseEnv, ...` |
| 1156 | fn | waitForLaneStartSlot | (private) | `async function waitForLaneStartSlot() {` |
| 1174 | fn | canStartLane | (private) | `function canStartLane(candidate) {` |
| 1178 | fn | reserve | (private) | `function reserve(candidate) {` |
| 1187 | fn | release | (private) | `function release(candidate) {` |
| 1201 | fn | startLane | (private) | `async function startLane(poolLane) {` |
| 1270 | fn | tailFile | pub | `export async function tailFile(file, lines, max...` |
| 1289 | fn | laneLogMatchesRetryPattern | (private) | `async function laneLogMatchesRetryPattern(logFi...` |
| 1297 | fn | printFailureSummary | (private) | `async function printFailureSummary(failures, ta...` |
| 1311 | fn | shellCommandSkippedForShutdown | (private) | `function shellCommandSkippedForShutdown() {` |
| 1320 | fn | shellCaptureSkippedForShutdown | (private) | `function shellCaptureSkippedForShutdown(label) {` |
| 1333 | fn | shellProcessGroupAlive | (private) | `function shellProcessGroupAlive(child) {` |
| 1345 | fn | waitForShellProcessGroupExit | (private) | `async function waitForShellProcessGroupExit(chi...` |
| 1358 | fn | finishTimedOutShellProcessTree | (private) | `async function finishTimedOutShellProcessTree(c...` |
| 1373 | fn | terminateChild | (private) | `function terminateChild(child, signal) {` |
| 1385 | fn | terminateActiveChildren | (private) | `function terminateActiveChildren(signal) {` |
| 1391 | fn | shutdownActiveChildren | (private) | `async function shutdownActiveChildren(signal, e...` |
| 1418 | fn | main | (private) | `async function main() {` |
| 1511 | fn | writeSummary | (private) | `const writeSummary = (summary) => writeRunSumma...` |

## Public API

### `parseDockerAllCliArgs`

```
export function parseDockerAllCliArgs(argv) {
```

**Line:** 68 | **Kind:** fn

### `describeDockerSchedulerLimits`

```
export function describeDockerSchedulerLimits(parallelism, options) {
```

**Line:** 167 | **Kind:** fn

### `canStartSchedulerLane`

```
export function canStartSchedulerLane(candidate, active, parallelism, options) {
```

**Line:** 194 | **Kind:** fn

### `githubWorkflowRerunCommand`

```
export function githubWorkflowRerunCommand(laneNames, ref, env = process.env) {
```

**Line:** 275 | **Kind:** fn

### `writeRunSummary`

```
export async function writeRunSummary(logDir, summary, env = process.env) {
```

**Line:** 423 | **Kind:** fn

### `dockerPreflightContainerNames`

```
export function dockerPreflightContainerNames(raw) {
```

**Line:** 541 | **Kind:** fn

### `resolveDockerPreflightPlatform`

```
export function resolveDockerPreflightPlatform(arch = process.arch) {
```

**Line:** 550 | **Kind:** fn

### `dockerPreflightSmokeCommand`

```
export function dockerPreflightSmokeCommand(arch = process.arch) {
```

**Line:** 554 | **Kind:** fn

### `runShellCommand`

```
export function runShellCommand({
```

**Line:** 559 | **Kind:** fn

### `appendBoundedShellCapture`

```
export function appendBoundedShellCapture(current, chunk, maxChars = SHELL_CAPTURE_MAX_CHARS) {
```

**Line:** 683 | **Kind:** fn

### `runShellCaptureCommand`

```
export function runShellCaptureCommand({
```

**Line:** 691 | **Kind:** fn

### `runCleanupSmokePhase`

```
export async function runCleanupSmokePhase(baseEnv, logDir, phases) {
```

**Line:** 866 | **Kind:** fn

### `tailFile`

```
export async function tailFile(file, lines, maxBytes = LOG_TAIL_MAX_BYTES) {
```

**Line:** 1270 | **Kind:** fn
