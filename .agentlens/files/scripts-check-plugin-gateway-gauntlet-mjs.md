# scripts/check-plugin-gateway-gauntlet.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1229
- **Language:** JavaScript
- **Symbols:** 55
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 63 | fn | parseArgs | pub | `export function parseArgs(argv) {` |
| 109 | fn | readValue | (private) | `const readValue = () => {` |
| 223 | fn | printHelp | (private) | `function printHelp() {` |
| 265 | fn | normalizeCsv | (private) | `function normalizeCsv(raw) {` |
| 274 | fn | assertNoDuplicateValues | (private) | `function assertNoDuplicateValues(values, label) {` |
| 288 | fn | readOptionalPositiveIntEnv | (private) | `function readOptionalPositiveIntEnv(name) {` |
| 293 | fn | readOptionalNonNegativeIntEnv | (private) | `function readOptionalNonNegativeIntEnv(name) {` |
| 298 | fn | shouldPromoteObservationGuardFailure | (private) | `function shouldPromoteObservationGuardFailure(o...` |
| 304 | fn | buildObservationGuardFailures | pub | `export function buildObservationGuardFailures(o...` |
| 320 | fn | createGauntletPrebuildCommand | pub | `export function createGauntletPrebuildCommand(r...` |
| 327 | fn | openclawCommand | (private) | `function openclawCommand(repoRoot, args) {` |
| 334 | fn | builtEntryPath | (private) | `function builtEntryPath(repoRoot) {` |
| 338 | fn | selectSlashHelpAliases | (private) | `function selectSlashHelpAliases(plugin, include...` |
| 344 | fn | requiresBuiltEntry | (private) | `function requiresBuiltEntry(options, selectedPl...` |
| 357 | fn | sourceOpenclawCommand | (private) | `function sourceOpenclawCommand(repoRoot, args) {` |
| 364 | fn | chunkArray | (private) | `function chunkArray(values, chunkSize) {` |
| 375 | fn | toRepoRelativePath | pub | `export function toRepoRelativePath(repoRoot, ab...` |
| 383 | fn | validateOutputDir | (private) | `function validateOutputDir(options, repoRoot) {` |
| 389 | fn | createIsolatedEnv | (private) | `function createIsolatedEnv(repoRoot, runRoot) {` |
| 409 | fn | hasUsrBinTime | (private) | `function hasUsrBinTime() {` |
| 413 | fn | timeWrapperArgs | (private) | `function timeWrapperArgs(command, args) {` |
| 426 | fn | parseTimedMetrics | pub | `export function parseTimedMetrics(stderr, wallM...` |
| 460 | fn | parseLastMatch | (private) | `function parseLastMatch(value, pattern) {` |
| 468 | fn | parseMatchFloat | (private) | `function parseMatchFloat(match, index) {` |
| 476 | fn | parseLastFloat | (private) | `function parseLastFloat(value, pattern) {` |
| 480 | fn | stripAnsi | (private) | `function stripAnsi(value) {` |
| 484 | fn | resolveTimerTimeoutMs | (private) | `function resolveTimerTimeoutMs(valueMs) {` |
| 489 | fn | resolveOptionalTimerTimeoutMs | (private) | `function resolveOptionalTimerTimeoutMs(valueMs) {` |
| 493 | fn | writeCommandLog | (private) | `function writeCommandLog(params) {` |
| 509 | fn | runMeasuredCommand | pub | `export async function runMeasuredCommand(params) {` |
| 516 | fn | runMeasuredCommandLive | pub | `export function runMeasuredCommandLive(params) {` |
| 554 | fn | killMeasuredProcess | (private) | `const killMeasuredProcess = (signal = "SIGTERM"...` |
| 563 | fn | processGroupAlive | (private) | `const processGroupAlive = () => {` |
| 574 | fn | waitForProcessGroupExit | (private) | `const waitForProcessGroupExit = async (timeoutB...` |
| 586 | fn | scheduleForceKill | (private) | `const scheduleForceKill = () => {` |
| 595 | fn | removeParentSignalHandlers | (private) | `const removeParentSignalHandlers = () => {` |
| 604 | fn | handler | (private) | `const handler = () => {` |
| 615 | fn | appendCapturedOutput | (private) | `const appendCapturedOutput = (streamName, chunk...` |
| 623 | fn | appendTruncation | (private) | `const appendTruncation = () => {` |
| 650 | fn | relayOutput | (private) | `const relayOutput = (streamName, chunk) => {` |
| 662 | fn | markTruncated | (private) | `const markTruncated = () => {` |
| 689 | fn | appendOutput | (private) | `const appendOutput = (streamName, chunk) => {` |
| 708 | fn | finish | (private) | `const finish = (status, signal) => {` |
| 758 | fn | waitForTerminationCleanup | (private) | `const waitForTerminationCleanup = async () => {` |
| 768 | fn | rethrowParentTermination | (private) | `const rethrowParentTermination = () => {` |
| 779 | fn | finishAfterTimeoutTeardown | (private) | `const finishAfterTimeoutTeardown = async (statu...` |
| 787 | fn | finishAfterParentTermination | (private) | `const finishAfterParentTermination = async () => {` |
| 815 | fn | hasGauntletWorkRows | pub | `export function hasGauntletWorkRows(rows) {` |
| 819 | fn | isPluginOwnedCliAlias | (private) | `function isPluginOwnedCliAlias(alias) {` |
| 823 | fn | buildSlashHelpProbe | (private) | `function buildSlashHelpProbe(params) {` |
| 837 | fn | runPluginLifecycleCommand | (private) | `async function runPluginLifecycleCommand(params) {` |
| 853 | fn | runPluginLifecycle | (private) | `async function runPluginLifecycle(params) {` |
| 922 | fn | runSlashHelpProbes | (private) | `async function runSlashHelpProbes(params) {` |
| 943 | fn | runQaChunks | (private) | `async function runQaChunks(params) {` |
| 1005 | fn | main | (private) | `async function main() {` |

## Public API

### `parseArgs`

```
export function parseArgs(argv) {
```

**Line:** 63 | **Kind:** fn

### `buildObservationGuardFailures`

```
export function buildObservationGuardFailures(observations, enabled = false) {
```

**Line:** 304 | **Kind:** fn

### `createGauntletPrebuildCommand`

```
export function createGauntletPrebuildCommand(repoRoot) {
```

**Line:** 320 | **Kind:** fn

### `toRepoRelativePath`

```
export function toRepoRelativePath(repoRoot, absolutePath) {
```

**Line:** 375 | **Kind:** fn

### `parseTimedMetrics`

```
export function parseTimedMetrics(stderr, wallMs, mode) {
```

**Line:** 426 | **Kind:** fn

### `runMeasuredCommand`

```
export async function runMeasuredCommand(params) {
```

**Line:** 509 | **Kind:** fn

### `runMeasuredCommandLive`

```
export function runMeasuredCommandLive(params) {
```

**Line:** 516 | **Kind:** fn

### `hasGauntletWorkRows`

```
export function hasGauntletWorkRows(rows) {
```

**Line:** 815 | **Kind:** fn
