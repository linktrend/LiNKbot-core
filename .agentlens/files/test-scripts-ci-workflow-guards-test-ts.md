# test/scripts/ci-workflow-guards.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5212
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | type | WorkflowStep | (private) | - |
| 57 | fn | readCiWorkflow | (private) | `function readCiWorkflow() {` |
| 61 | fn | interpolateCiGateVerifyScript | (private) | `function interpolateCiGateVerifyScript(run: str...` |
| 70 | fn | runCiGateFixture | (private) | `function runCiGateFixture(requiredResults: stri...` |
| 84 | fn | runCiManifestFixture | (private) | `function runCiManifestFixture(options: {` |
| 111 | fn | createNodeTestShards | pub | `export const createNodeTestShards = () => [{` |
| 118 | fn | createNodeTestShardBundles | pub | `export const createNodeTestShardBundles = () => [{` |
| 127 | fn | createNodeTestShards | pub | `export const createNodeTestShards = () => [{` |
| 163 | fn | createChangedNodeTestShards | pub | `export const createChangedNodeTestShards = (cha...` |
| 272 | fn | readAndroidReleaseWorkflow | (private) | `function readAndroidReleaseWorkflow() {` |
| 276 | fn | readAndroidToolchainAction | (private) | `function readAndroidToolchainAction() {` |
| 280 | fn | readBuildArtifactsTestboxWorkflow | (private) | `function readBuildArtifactsTestboxWorkflow() {` |
| 284 | fn | readTestboxWorkflow | (private) | `function readTestboxWorkflow() {` |
| 288 | fn | readWorkflowSanityWorkflow | (private) | `function readWorkflowSanityWorkflow() {` |
| 292 | fn | readRealBehaviorProofWorkflow | (private) | `function readRealBehaviorProofWorkflow() {` |
| 296 | fn | readMaturityScorecardWorkflow | (private) | `function readMaturityScorecardWorkflow() {` |
| 300 | fn | runMaturityInvocationScenario | (private) | `function runMaturityInvocationScenario(options: {` |
| 328 | fn | runMaturityArtifactCopyScenario | (private) | `function runMaturityArtifactCopyScenario(` |
| 383 | fn | readQaProfileEvidenceWorkflow | (private) | `function readQaProfileEvidenceWorkflow() {` |
| 387 | fn | readReleaseChecksWorkflow | (private) | `function readReleaseChecksWorkflow() {` |
| 391 | fn | readCriticalQualityWorkflow | (private) | `function readCriticalQualityWorkflow() {` |
| 395 | fn | readWorkflow | (private) | `function readWorkflow(path: string) {` |
| 401 | fn | readPullRequestEditFields | (private) | `function readPullRequestEditFields(condition: u...` |
| 408 | fn | readTrackedText | (private) | `function readTrackedText(relativePath: string):...` |
| 415 | fn | readAndroidCompileSdk | (private) | `function readAndroidCompileSdk(relativePath: st...` |
| 423 | fn | findYamlFiles | (private) | `function findYamlFiles(directory: string): stri...` |
| 433 | fn | findUnpinnedExternalActions | (private) | `function findUnpinnedExternalActions(): string[] {` |
| 458 | fn | runGit | (private) | `function runGit(cwd: string, args: string[]): s...` |
| 462 | fn | writeExecutable | (private) | `function writeExecutable(filePath: string, line...` |
| 467 | fn | runDependencyCheckFixture | (private) | `function runDependencyCheckFixture(options: { h...` |
| 516 | fn | runGeneratedPublisherScenario | (private) | `function runGeneratedPublisherScenario(` |
| 776 | fn | changedFieldsForStep | (private) | `const changedFieldsForStep = (matcher: (step: W...` |
| 2392 | fn | writeManifest | (private) | `const writeManifest = (manifest: Record<string,...` |
| 2395 | fn | fingerprint | (private) | `const fingerprint = (frozenLockfile = true) =>` |

## Public API

### `createNodeTestShards`

```
export const createNodeTestShards = () => [{
```

**Line:** 111 | **Kind:** fn

### `createNodeTestShardBundles`

```
export const createNodeTestShardBundles = () => [{
```

**Line:** 118 | **Kind:** fn

### `createNodeTestShards`

```
export const createNodeTestShards = () => [{
```

**Line:** 127 | **Kind:** fn

### `createChangedNodeTestShards`

```
export const createChangedNodeTestShards = (changedPaths) =>
```

**Line:** 163 | **Kind:** fn
