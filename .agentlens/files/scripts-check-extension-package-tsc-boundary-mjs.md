# scripts/check-extension-package-tsc-boundary.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1026
- **Language:** JavaScript
- **Symbols:** 53
- **Public symbols:** 15

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 51 | fn | parseMode | (private) | `function parseMode(argv) {` |
| 63 | fn | resolveCompileConcurrency | pub | `export function resolveCompileConcurrency(` |
| 74 | fn | readJsonFile | (private) | `function readJsonFile(filePath) {` |
| 78 | fn | summarizeOutputSection | (private) | `function summarizeOutputSection(name, output) {` |
| 94 | fn | formatFailureFooter | (private) | `function formatFailureFooter(params = {}) {` |
| 108 | fn | createStepOutputCapture | (private) | `function createStepOutputCapture() {` |
| 115 | fn | appendBoundedStepOutput | pub | `export function appendBoundedStepOutput(buffer,...` |
| 124 | fn | formatCapturedStepOutput | (private) | `function formatCapturedStepOutput(buffer) {` |
| 134 | fn | formatBoundaryCheckSuccessSummary | pub | `export function formatBoundaryCheckSuccessSumma...` |
| 166 | fn | formatSkippedCompileProgress | pub | `export function formatSkippedCompileProgress(pa...` |
| 183 | fn | formatSlowCompileSummary | pub | `export function formatSlowCompileSummary(params...` |
| 203 | fn | formatStepFailure | pub | `export function formatStepFailure(label, params...` |
| 210 | fn | attachStepFailureMetadata | (private) | `function attachStepFailureMetadata(error, label...` |
| 221 | fn | collectBundledExtensionIds | (private) | `function collectBundledExtensionIds() {` |
| 228 | fn | resolveExtensionTsconfigPath | (private) | `function resolveExtensionTsconfigPath(extension...` |
| 232 | fn | readExtensionTsconfig | (private) | `function readExtensionTsconfig(extensionId) {` |
| 236 | fn | collectOptInExtensionIds | (private) | `function collectOptInExtensionIds() {` |
| 246 | fn | collectCanaryExtensionIds | (private) | `function collectCanaryExtensionIds(extensionIds) {` |
| 257 | fn | isRelevantCompileInput | (private) | `function isRelevantCompileInput(filePath) {` |
| 271 | fn | collectNewestMtime | (private) | `function collectNewestMtime(entryPath, params =...` |
| 276 | fn | visit | (private) | `function visit(currentPath) {` |
| 301 | fn | collectOldestMtime | (private) | `function collectOldestMtime(paths) {` |
| 317 | fn | isBoundaryCompileFresh | pub | `export function isBoundaryCompileFresh(extensio...` |
| 340 | fn | writeStampFile | (private) | `function writeStampFile(filePath) {` |
| 345 | fn | resolveStepTimerTimeoutMs | (private) | `function resolveStepTimerTimeoutMs(valueMs) {` |
| 353 | fn | runNodeStep | (private) | `function runNodeStep(label, args, timeoutMs) {` |
| 398 | fn | abortSiblingSteps | (private) | `function abortSiblingSteps(abortController) {` |
| 407 | fn | runNodeStepAsync | pub | `export function runNodeStepAsync(label, args, t...` |
| 428 | fn | signalChild | (private) | `const signalChild = (signal) => {` |
| 440 | fn | processGroupAlive | (private) | `const processGroupAlive = () => {` |
| 451 | fn | waitForProcessGroupExit | (private) | `const waitForProcessGroupExit = async (ms) => {` |
| 463 | fn | waitAfterForceKill | (private) | `const waitAfterForceKill = async () => {` |
| 468 | fn | rejectCanceledStep | (private) | `const rejectCanceledStep = async () => {` |
| 483 | fn | abortListener | (private) | `const abortListener = () => {` |
| 494 | fn | cleanup | (private) | `const cleanup = () => {` |
| 632 | fn | runNodeStepsWithConcurrency | pub | `export async function runNodeStepsWithConcurren...` |
| 666 | fn | resolveCanaryArtifactPaths | pub | `export function resolveCanaryArtifactPaths(exte...` |
| 678 | fn | cleanupCanaryArtifacts | (private) | `function cleanupCanaryArtifacts(extensionId, ro...` |
| 687 | fn | cleanupCanaryArtifactsForExtensions | pub | `export function cleanupCanaryArtifactsForExtens...` |
| 696 | fn | installCanaryArtifactCleanup | pub | `export function installCanaryArtifactCleanup(ex...` |
| 699 | fn | exitHandler | (private) | `const exitHandler = () => {` |
| 708 | fn | resolveBoundaryTsBuildInfoPath | (private) | `function resolveBoundaryTsBuildInfoPath(extensi...` |
| 712 | fn | resolveBoundaryTsStampPath | (private) | `function resolveBoundaryTsStampPath(extensionId...` |
| 719 | fn | resolveBoundaryCheckLockPath | pub | `export function resolveBoundaryCheckLockPath(ro...` |
| 723 | fn | resolveBoundaryCheckLockOwnerPath | (private) | `function resolveBoundaryCheckLockOwnerPath(lock...` |
| 727 | fn | isProcessAlive | (private) | `function isProcessAlive(pid) {` |
| 739 | fn | removeStaleBoundaryCheckLock | (private) | `function removeStaleBoundaryCheckLock(lockPath) {` |
| 759 | fn | acquireBoundaryCheckLock | pub | `export function acquireBoundaryCheckLock(params...` |
| 799 | fn | release | (private) | `const release = () => {` |
| 809 | fn | runCompileCheck | (private) | `async function runCompileCheck(extensionIds) {` |
| 899 | fn | runCanaryCheck | (private) | `async function runCanaryCheck(extensionIds) {` |
| 961 | fn | main | pub | `export async function main(argv = process.argv....` |
| 1014 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value, fallbackMessa...` |

## Public API

### `resolveCompileConcurrency`

```
export function resolveCompileConcurrency(
```

**Line:** 63 | **Kind:** fn

### `appendBoundedStepOutput`

```
export function appendBoundedStepOutput(buffer, chunk, maxChars = STEP_OUTPUT_MAX_CHARS) {
```

**Line:** 115 | **Kind:** fn

### `formatBoundaryCheckSuccessSummary`

```
export function formatBoundaryCheckSuccessSummary(params = {}) {
```

**Line:** 134 | **Kind:** fn

### `formatSkippedCompileProgress`

```
export function formatSkippedCompileProgress(params = {}) {
```

**Line:** 166 | **Kind:** fn

### `formatSlowCompileSummary`

```
export function formatSlowCompileSummary(params = {}) {
```

**Line:** 183 | **Kind:** fn

### `formatStepFailure`

```
export function formatStepFailure(label, params = {}) {
```

**Line:** 203 | **Kind:** fn

### `isBoundaryCompileFresh`

```
export function isBoundaryCompileFresh(extensionId, params = {}) {
```

**Line:** 317 | **Kind:** fn

### `runNodeStepAsync`

```
export function runNodeStepAsync(label, args, timeoutMs, params = {}) {
```

**Line:** 407 | **Kind:** fn

### `runNodeStepsWithConcurrency`

```
export async function runNodeStepsWithConcurrency(steps, concurrency) {
```

**Line:** 632 | **Kind:** fn

### `resolveCanaryArtifactPaths`

```
export function resolveCanaryArtifactPaths(extensionId, rootDir = repoRoot) {
```

**Line:** 666 | **Kind:** fn

### `cleanupCanaryArtifactsForExtensions`

```
export function cleanupCanaryArtifactsForExtensions(extensionIds, rootDir = repoRoot) {
```

**Line:** 687 | **Kind:** fn

### `installCanaryArtifactCleanup`

```
export function installCanaryArtifactCleanup(extensionIds, params = {}) {
```

**Line:** 696 | **Kind:** fn

### `resolveBoundaryCheckLockPath`

```
export function resolveBoundaryCheckLockPath(rootDir = repoRoot) {
```

**Line:** 719 | **Kind:** fn

### `acquireBoundaryCheckLock`

```
export function acquireBoundaryCheckLock(params = {}) {
```

**Line:** 759 | **Kind:** fn

### `main`

```
export async function main(argv = process.argv.slice(2)) {
```

**Line:** 961 | **Kind:** fn
