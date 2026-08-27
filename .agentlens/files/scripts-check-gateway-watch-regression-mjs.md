# scripts/check-gateway-watch-regression.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1099
- **Language:** JavaScript
- **Symbols:** 45
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | fn | shellQuote | (private) | `function shellQuote(value) {` |
| 65 | fn | appendBoundedWatchLog | pub | `export function appendBoundedWatchLog(current, ...` |
| 73 | fn | formatCapturedWatchLog | (private) | `function formatCapturedWatchLog(text, truncated) {` |
| 79 | fn | formatWatchExit | (private) | `function formatWatchExit(exit) {` |
| 96 | fn | readTextTail | (private) | `function readTextTail(filePath, maxChars = WATC...` |
| 104 | fn | updateWatchBuildDetection | pub | `export function updateWatchBuildDetection(state...` |
| 119 | fn | readNonNegativeInteger | pub | `export function readNonNegativeInteger(value, l...` |
| 134 | fn | parseArgs | pub | `export function parseArgs(argv) {` |
| 140 | fn | readValue | (private) | `const readValue = () => {` |
| 194 | fn | ensureDir | (private) | `function ensureDir(dirPath) {` |
| 198 | fn | removePathIfExists | (private) | `function removePathIfExists(targetPath) {` |
| 202 | fn | lstatIfExists | (private) | `function lstatIfExists(targetPath) {` |
| 213 | fn | normalizePath | (private) | `function normalizePath(filePath) {` |
| 217 | fn | listTreeEntries | (private) | `function listTreeEntries(rootName) {` |
| 251 | fn | humanBytes | (private) | `function humanBytes(bytes) {` |
| 264 | fn | snapshotTree | (private) | `function snapshotTree(rootName) {` |
| 310 | fn | writeSnapshot | (private) | `function writeSnapshot(snapshotDir) {` |
| 353 | fn | runCheckedCommand | (private) | `function runCheckedCommand(command, args) {` |
| 365 | fn | parsePsCpuTimeMs | (private) | `function parsePsCpuTimeMs(timeText) {` |
| 381 | fn | readProcessTreeCpuMs | (private) | `function readProcessTreeCpuMs(rootPid) {` |
| 441 | fn | hasGatewayReadyLog | pub | `export function hasGatewayReadyLog(text) {` |
| 446 | fn | waitForGatewayReady | (private) | `async function waitForGatewayReady(readText, ti...` |
| 457 | fn | allocateLoopbackPort | (private) | `async function allocateLoopbackPort() {` |
| 479 | fn | resolveTimedWatchShell | pub | `export function resolveTimedWatchShell(deps = {...` |
| 489 | fn | buildTimedWatchCommand | pub | `export function buildTimedWatchCommand(` |
| 551 | fn | parseTimingFile | (private) | `function parseTimingFile(timeFilePath) {` |
| 575 | fn | runTimedWatch | pub | `export async function runTimedWatch(options, ou...` |
| 635 | fn | raceChildLifecycle | (private) | `const raceChildLifecycle = async (operation) =>` |
| 740 | fn | stopTimedWatchChild | pub | `export async function stopTimedWatchChild(child...` |
| 742 | fn | currentExit | (private) | `const currentExit = () =>` |
| 749 | fn | waitForExit | (private) | `const waitForExit = async (ms) =>` |
| 751 | fn | signalWatchProcess | (private) | `const signalWatchProcess = (signal) => {` |
| 783 | fn | releaseUnsettledWatchChild | (private) | `function releaseUnsettledWatchChild(child) {` |
| 790 | fn | parsePathFile | (private) | `function parsePathFile(filePath) {` |
| 798 | fn | writeDiffArtifacts | (private) | `function writeDiffArtifacts(outputDir, preDir, ...` |
| 813 | fn | fail | (private) | `function fail(message) {` |
| 817 | fn | warn | (private) | `function warn(message) {` |
| 821 | fn | detectWatchBuildReason | (private) | `function detectWatchBuildReason(stdout, stderr) {` |
| 827 | fn | buildRunNodeDeps | (private) | `function buildRunNodeDeps(env) {` |
| 850 | fn | shouldRefreshBuildStampForRestoredArtifacts | pub | `export function shouldRefreshBuildStampForResto...` |
| 861 | fn | writeBuildAndRuntimePostBuildStamps | pub | `export function writeBuildAndRuntimePostBuildSt...` |
| 870 | fn | collectGatewayWatchFindings | pub | `export function collectGatewayWatchFindings(par...` |
| 933 | fn | shouldReportDuplicateDistRuntimeRegression | pub | `export function shouldReportDuplicateDistRuntim...` |
| 937 | fn | printWatchLogDiagnostics | (private) | `function printWatchLogDiagnostics(watchResult) {` |
| 959 | fn | main | (private) | `async function main() {` |

## Public API

### `appendBoundedWatchLog`

```
export function appendBoundedWatchLog(current, chunk, maxChars = WATCH_LOG_CAPTURE_MAX_CHARS) {
```

**Line:** 65 | **Kind:** fn

### `updateWatchBuildDetection`

```
export function updateWatchBuildDetection(state, chunk) {
```

**Line:** 104 | **Kind:** fn

### `readNonNegativeInteger`

```
export function readNonNegativeInteger(value, label) {
```

**Line:** 119 | **Kind:** fn

### `parseArgs`

```
export function parseArgs(argv) {
```

**Line:** 134 | **Kind:** fn

### `hasGatewayReadyLog`

```
export function hasGatewayReadyLog(text) {
```

**Line:** 441 | **Kind:** fn

### `resolveTimedWatchShell`

```
export function resolveTimedWatchShell(deps = {}) {
```

**Line:** 479 | **Kind:** fn

### `buildTimedWatchCommand`

```
export function buildTimedWatchCommand(
```

**Line:** 489 | **Kind:** fn

### `runTimedWatch`

```
export async function runTimedWatch(options, outputDir, deps = {}) {
```

**Line:** 575 | **Kind:** fn

### `stopTimedWatchChild`

```
export async function stopTimedWatchChild(child, watchPid, options, deps = {}) {
```

**Line:** 740 | **Kind:** fn

### `shouldRefreshBuildStampForRestoredArtifacts`

```
export function shouldRefreshBuildStampForRestoredArtifacts(params) {
```

**Line:** 850 | **Kind:** fn

### `writeBuildAndRuntimePostBuildStamps`

```
export function writeBuildAndRuntimePostBuildStamps(params = {}) {
```

**Line:** 861 | **Kind:** fn

### `collectGatewayWatchFindings`

```
export function collectGatewayWatchFindings(params) {
```

**Line:** 870 | **Kind:** fn

### `shouldReportDuplicateDistRuntimeRegression`

```
export function shouldReportDuplicateDistRuntimeRegression(failures) {
```

**Line:** 933 | **Kind:** fn
