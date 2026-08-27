# scripts/release-candidate-checklist.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1671
- **Language:** JavaScript
- **Symbols:** 61
- **Public symbols:** 23

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 77 | fn | usage | (private) | `function usage() {` |
| 106 | fn | requireValue | (private) | `function requireValue(argv, index, flag) {` |
| 114 | fn | releaseBranchForTag | pub | `export function releaseBranchForTag(tag) {` |
| 125 | fn | parseArgs | pub | `export function parseArgs(argv) {` |
| 149 | fn | setOnce | (private) | `const setOnce = (flag, key, value) => {` |
| 273 | fn | run | pub | `export function run(command, args, options = {}) {` |
| 289 | fn | readJson | (private) | `function readJson(path, label) {` |
| 300 | fn | buildReleaseCandidateState | pub | `export function buildReleaseCandidateState(opti...` |
| 324 | fn | reconcileReleaseCandidateState | pub | `export function reconcileReleaseCandidateState(...` |
| 355 | fn | writeReleaseCandidateState | (private) | `function writeReleaseCandidateState(path, state) {` |
| 362 | fn | updateReleaseCandidateState | (private) | `function updateReleaseCandidateState(path, stat...` |
| 368 | fn | githubApiTimeoutMs | (private) | `function githubApiTimeoutMs() {` |
| 383 | fn | githubApiTimedOut | (private) | `function githubApiTimedOut(error) {` |
| 392 | fn | githubApi | pub | `export async function githubApi(path, options =...` |
| 398 | fn | request | (private) | `const request = (requestToken) =>` |
| 451 | fn | validateWindowsSourceRelease | pub | `export async function validateWindowsSourceRele...` |
| 488 | fn | gitRevParse | (private) | `function gitRevParse(ref, cwd) {` |
| 492 | fn | gitTopLevel | (private) | `function gitTopLevel(cwd) {` |
| 496 | fn | gitTrackedStatus | (private) | `function gitTrackedStatus(cwd) {` |
| 503 | fn | fetchTrustedWorkflowSha | (private) | `function fetchTrustedWorkflowSha(workflowRef, t...` |
| 511 | fn | runFromTrustedTooling | (private) | `function runFromTrustedTooling(argv, { targetRo...` |
| 552 | fn | isDirectReleaseCandidateExecution | pub | `export function isDirectReleaseCandidateExecution(` |
| 567 | fn | validateCandidateCheckout | pub | `export function validateCandidateCheckout({` |
| 599 | fn | gitIsAncestor | (private) | `function gitIsAncestor(ancestor, target) {` |
| 621 | fn | validateTrustedToolingPin | pub | `export function validateTrustedToolingPin({` |
| 646 | fn | validateNpmPreflightRunSource | pub | `export function validateNpmPreflightRunSource({` |
| 664 | fn | candidateContributionRecordPullRequests | (private) | `function candidateContributionRecordPullRequests(` |
| 711 | fn | candidateCumulativeShippedPullRequests | pub | `export function candidateCumulativeShippedPullR...` |
| 731 | fn | loadCandidateShippedBaseline | (private) | `function loadCandidateShippedBaseline(ref) {` |
| 744 | fn | validateCandidateReleaseNotes | pub | `export function validateCandidateReleaseNotes({...` |
| 759 | fn | validateCandidateChangelogProvenance | pub | `export function validateCandidateChangelogProve...` |
| 878 | fn | runArtifacts | (private) | `async function runArtifacts(repo, runId) {` |
| 892 | fn | resolveArtifactName | pub | `export function resolveArtifactName(artifacts, ...` |
| 911 | fn | resolveRunArtifact | (private) | `async function resolveRunArtifact(repo, runId, ...` |
| 921 | fn | runAndEcho | (private) | `function runAndEcho(command, args) {` |
| 942 | fn | runLocalGeneratedCheckIfNeeded | (private) | `function runLocalGeneratedCheckIfNeeded(options) {` |
| 953 | fn | parseRunIdFromDispatchOutput | pub | `export function parseRunIdFromDispatchOutput(ou...` |
| 957 | fn | requireRunIdFromDispatchOutput | pub | `export function requireRunIdFromDispatchOutput(...` |
| 967 | fn | wait | (private) | `async function wait(ms) {` |
| 973 | fn | dispatchWorkflow | (private) | `function dispatchWorkflow(repo, workflowFile, w...` |
| 981 | fn | runInfo | (private) | `async function runInfo(repo, runId) {` |
| 1007 | fn | pendingDeployments | (private) | `async function pendingDeployments(repo, runId) {` |
| 1015 | fn | summarizePendingDeployments | (private) | `function summarizePendingDeployments(repo, runI...` |
| 1030 | fn | summarizeFailedRun | (private) | `function summarizeFailedRun(info) {` |
| 1040 | fn | waitForSuccessfulRun | (private) | `async function waitForSuccessfulRun(repo, runId...` |
| 1081 | fn | downloadArtifact | (private) | `function downloadArtifact(repo, runId, name, di...` |
| 1087 | fn | downloadResolvedArtifact | (private) | `async function downloadResolvedArtifact(repo, r...` |
| 1093 | fn | sha256 | (private) | `function sha256(path) {` |
| 1097 | fn | pluginPlanArgs | (private) | `function pluginPlanArgs(options) {` |
| 1105 | fn | collectPluginPlan | (private) | `function collectPluginPlan(script, options) {` |
| 1111 | fn | collectPluginPlanWithRetry | (private) | `async function collectPluginPlanWithRetry(scrip...` |
| 1132 | fn | shellQuote | (private) | `function shellQuote(value) {` |
| 1139 | fn | buildPublishCommand | pub | `export function buildPublishCommand(options) {` |
| 1184 | fn | validatePreflightManifest | pub | `export function validatePreflightManifest(manif...` |
| 1219 | fn | validateFullManifest | pub | `export function validateFullManifest(manifest, ...` |
| 1249 | fn | candidateParallelsArgs | pub | `export function candidateParallelsArgs(` |
| 1265 | fn | candidateParallelsShellCommand | pub | `export function candidateParallelsShellCommand(` |
| 1285 | fn | runParallelsIfNeeded | (private) | `async function runParallelsIfNeeded(options, ta...` |
| 1309 | fn | buildTelegramArtifactInputs | pub | `export function buildTelegramArtifactInputs({ a...` |
| 1335 | fn | runTelegramIfNeeded | (private) | `async function runTelegramIfNeeded(options, art...` |
| 1367 | fn | main | (private) | `async function main() {` |

## Public API

### `releaseBranchForTag`

```
export function releaseBranchForTag(tag) {
```

**Line:** 114 | **Kind:** fn

### `parseArgs`

```
export function parseArgs(argv) {
```

**Line:** 125 | **Kind:** fn

### `run`

```
export function run(command, args, options = {}) {
```

**Line:** 273 | **Kind:** fn

### `buildReleaseCandidateState`

```
export function buildReleaseCandidateState(options, { targetSha, toolingSha }) {
```

**Line:** 300 | **Kind:** fn

### `reconcileReleaseCandidateState`

```
export function reconcileReleaseCandidateState(saved, expected) {
```

**Line:** 324 | **Kind:** fn

### `githubApi`

```
export async function githubApi(path, options = {}) {
```

**Line:** 392 | **Kind:** fn

### `validateWindowsSourceRelease`

```
export async function validateWindowsSourceRelease(tag, options = {}) {
```

**Line:** 451 | **Kind:** fn

### `isDirectReleaseCandidateExecution`

```
export function isDirectReleaseCandidateExecution(
```

**Line:** 552 | **Kind:** fn

### `validateCandidateCheckout`

```
export function validateCandidateCheckout({
```

**Line:** 567 | **Kind:** fn

### `validateTrustedToolingPin`

```
export function validateTrustedToolingPin({
```

**Line:** 621 | **Kind:** fn

### `validateNpmPreflightRunSource`

```
export function validateNpmPreflightRunSource({
```

**Line:** 646 | **Kind:** fn

### `candidateCumulativeShippedPullRequests`

```
export function candidateCumulativeShippedPullRequests(changelog, label) {
```

**Line:** 711 | **Kind:** fn

### `validateCandidateReleaseNotes`

```
export function validateCandidateReleaseNotes({ changelog, repository, tag }) {
```

**Line:** 744 | **Kind:** fn

### `validateCandidateChangelogProvenance`

```
export function validateCandidateChangelogProvenance({
```

**Line:** 759 | **Kind:** fn

### `resolveArtifactName`

```
export function resolveArtifactName(artifacts, preferredName, prefix) {
```

**Line:** 892 | **Kind:** fn

### `parseRunIdFromDispatchOutput`

```
export function parseRunIdFromDispatchOutput(output) {
```

**Line:** 953 | **Kind:** fn

### `requireRunIdFromDispatchOutput`

```
export function requireRunIdFromDispatchOutput(output, workflowFile) {
```

**Line:** 957 | **Kind:** fn

### `buildPublishCommand`

```
export function buildPublishCommand(options) {
```

**Line:** 1139 | **Kind:** fn

### `validatePreflightManifest`

```
export function validatePreflightManifest(manifest, params) {
```

**Line:** 1184 | **Kind:** fn

### `validateFullManifest`

```
export function validateFullManifest(manifest, params) {
```

**Line:** 1219 | **Kind:** fn

### `candidateParallelsArgs`

```
export function candidateParallelsArgs(
```

**Line:** 1249 | **Kind:** fn

### `candidateParallelsShellCommand`

```
export function candidateParallelsShellCommand(
```

**Line:** 1265 | **Kind:** fn

### `buildTelegramArtifactInputs`

```
export function buildTelegramArtifactInputs({ artifact, manifest, runAttempt, runId, sourceSha }) {
```

**Line:** 1309 | **Kind:** fn
