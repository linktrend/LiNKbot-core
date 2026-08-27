# scripts/prepare-extension-package-boundary-artifacts.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1061
- **Language:** JavaScript
- **Symbols:** 32
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 41 | fn | resolveTsxImportSpecifier | pub | `export function resolveTsxImportSpecifier({` |
| 51 | fn | listPackageDtsOutputsFromExports | (private) | `function listPackageDtsOutputsFromExports({ pac...` |
| 72 | fn | listSourceDtsOutputs | (private) | `function listSourceDtsOutputs({ sourceDir, outp...` |
| 75 | fn | visit | (private) | `function visit(relativeDir) {` |
| 317 | fn | resolveBoundaryEntryShimRequiredOutputs | pub | `export function resolveBoundaryEntryShimRequire...` |
| 328 | fn | isRelevantTypeInput | (private) | `function isRelevantTypeInput(filePath) {` |
| 339 | fn | parseMode | pub | `export function parseMode(argv = process.argv.s...` |
| 351 | fn | resolveBoundaryRootShimsTimeoutMs | pub | `export function resolveBoundaryRootShimsTimeout...` |
| 359 | fn | collectNewestMtime | (private) | `function collectNewestMtime(paths, params = {}) {` |
| 364 | fn | visit | (private) | `function visit(entryPath) {` |
| 388 | fn | collectOldestMtime | (private) | `function collectOldestMtime(paths, params = {}) {` |
| 406 | fn | isArtifactSetFresh | pub | `export function isArtifactSetFresh(params) {` |
| 415 | fn | hasMissingOutput | (private) | `function hasMissingOutput(paths) {` |
| 419 | fn | removeIncrementalStateForMissingOutput | (private) | `function removeIncrementalStateForMissingOutput...` |
| 426 | fn | writeStampFile | (private) | `function writeStampFile(relativePath) {` |
| 435 | fn | createPrefixedOutputWriter | pub | `export function createPrefixedOutputWriter(labe...` |
| 462 | fn | abortSiblingSteps | (private) | `function abortSiblingSteps(abortController) {` |
| 468 | fn | signalNodeStep | pub | `export function signalNodeStep(` |
| 505 | fn | signalActiveNodeSteps | (private) | `function signalActiveNodeSteps(signal) {` |
| 511 | fn | activeNodeStepKillGraceMs | (private) | `function activeNodeStepKillGraceMs() {` |
| 517 | fn | installNodeStepParentSignalForwarders | (private) | `function installNodeStepParentSignalForwarders() {` |
| 543 | fn | resolveNodeStepTimerTimeoutMs | (private) | `function resolveNodeStepTimerTimeoutMs(valueMs) {` |
| 554 | fn | runNodeStep | pub | `export function runNodeStep(label, args, timeou...` |
| 578 | fn | killNodeStep | (private) | `const killNodeStep = (signal) => signalNodeStep...` |
| 579 | fn | processGroupAlive | (private) | `const processGroupAlive = () => {` |
| 590 | fn | waitForProcessGroupExit | (private) | `const waitForProcessGroupExit = async (waitMs) ...` |
| 602 | fn | waitForCanceledStepTeardown | (private) | `const waitForCanceledStepTeardown = async () => {` |
| 613 | fn | abortStep | (private) | `const abortStep = () => {` |
| 626 | fn | cleanup | (private) | `function cleanup() {` |
| 704 | fn | runNodeStepsInParallel | pub | `export async function runNodeStepsInParallel(st...` |
| 724 | fn | runNodeSteps | pub | `export async function runNodeSteps(steps, env =...` |
| 735 | fn | main | (private) | `async function main(argv = process.argv.slice(2...` |

## Public API

### `resolveTsxImportSpecifier`

```
export function resolveTsxImportSpecifier({
```

**Line:** 41 | **Kind:** fn

### `resolveBoundaryEntryShimRequiredOutputs`

```
export function resolveBoundaryEntryShimRequiredOutputs(env = process.env) {
```

**Line:** 317 | **Kind:** fn

### `parseMode`

```
export function parseMode(argv = process.argv.slice(2)) {
```

**Line:** 339 | **Kind:** fn

### `resolveBoundaryRootShimsTimeoutMs`

```
export function resolveBoundaryRootShimsTimeoutMs(env = process.env) {
```

**Line:** 351 | **Kind:** fn

### `isArtifactSetFresh`

```
export function isArtifactSetFresh(params) {
```

**Line:** 406 | **Kind:** fn

### `createPrefixedOutputWriter`

```
export function createPrefixedOutputWriter(label, target) {
```

**Line:** 435 | **Kind:** fn

### `signalNodeStep`

```
export function signalNodeStep(
```

**Line:** 468 | **Kind:** fn

### `runNodeStep`

```
export function runNodeStep(label, args, timeoutMs, params = {}) {
```

**Line:** 554 | **Kind:** fn

### `runNodeStepsInParallel`

```
export async function runNodeStepsInParallel(steps) {
```

**Line:** 704 | **Kind:** fn

### `runNodeSteps`

```
export async function runNodeSteps(steps, env = process.env) {
```

**Line:** 724 | **Kind:** fn
