# scripts/release-ci-summary.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1825
- **Language:** JavaScript
- **Symbols:** 65
- **Public symbols:** 28

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | fn | runReleaseCiGh | pub | `export function runReleaseCiGh(args, params = {...` |
| 110 | fn | gh | (private) | `function gh(args) {` |
| 114 | fn | jsonGh | (private) | `function jsonGh(args) {` |
| 118 | fn | githubRestArgs | pub | `export function githubRestArgs(pathSuffix, repo...` |
| 122 | fn | githubRestJson | (private) | `function githubRestJson(pathSuffix, repository ...` |
| 126 | fn | artifactDownloadArgs | pub | `export function artifactDownloadArgs(artifactId...` |
| 130 | fn | downloadArtifactZip | (private) | `function downloadArtifactZip(artifactId, destin...` |
| 141 | fn | rate | (private) | `function rate() {` |
| 149 | fn | validateParentRunBinding | pub | `export function validateParentRunBinding(parent...` |
| 164 | fn | expectedChildDispatches | pub | `export function expectedChildDispatches(parentR...` |
| 182 | fn | requiredChildKeysForRerunGroup | pub | `export function requiredChildKeysForRerunGroup(...` |
| 190 | fn | expectedSelectedChildDispatches | pub | `export function expectedSelectedChildDispatches(` |
| 201 | fn | selectExactChildRun | pub | `export function selectExactChildRun(runs, expec...` |
| 216 | fn | selectExactChildRunFromPages | pub | `export function selectExactChildRunFromPages(ru...` |
| 235 | fn | findExactChildRun | (private) | `function findExactChildRun(child, repository = ...` |
| 255 | fn | findParentJobsAll | (private) | `function findParentJobsAll(parentRunId, reposit...` |
| 273 | fn | parentJobLog | (private) | `function parentJobLog(jobId, repository = DEFAU...` |
| 277 | fn | normalizeOptionalRunId | (private) | `function normalizeOptionalRunId(value, label) {` |
| 287 | fn | normalizeRequiredRunId | (private) | `function normalizeRequiredRunId(value, label) {` |
| 295 | fn | normalizeRepository | (private) | `function normalizeRepository(value) {` |
| 303 | fn | normalizeWorkflowRef | (private) | `function normalizeWorkflowRef(value, label) {` |
| 320 | fn | normalizeSha | (private) | `function normalizeSha(value, label) {` |
| 328 | fn | normalizePositiveInteger | (private) | `function normalizePositiveInteger(value, label) {` |
| 336 | fn | normalizeJsonObject | (private) | `function normalizeJsonObject(value, label) {` |
| 343 | fn | canonicalJson | (private) | `function canonicalJson(value) {` |
| 357 | fn | manifestEvidenceIdentity | (private) | `function manifestEvidenceIdentity(manifest) {` |
| 368 | fn | validateParentManifest | pub | `export function validateParentManifest(value, e...` |
| 498 | fn | validateEvidenceReuseChain | pub | `export function validateEvidenceReuseChain(` |
| 577 | fn | selectedChildKeys | pub | `export function selectedChildKeys(parentJobs) {` |
| 586 | fn | manifestChildEntries | pub | `export function manifestChildEntries(manifest, ...` |
| 599 | fn | childDispatchAttempt | (private) | `function childDispatchAttempt(displayTitle, chi...` |
| 616 | fn | parentJobExecutionFingerprint | (private) | `function parentJobExecutionFingerprint(job) {` |
| 634 | fn | selectedAttemptParentJob | (private) | `function selectedAttemptParentJob(parentJobs, c...` |
| 656 | fn | resolveManifestChildOriginAttempt | pub | `export function resolveManifestChildOriginAttem...` |
| 686 | fn | selectManifestParentJob | pub | `export function selectManifestParentJob(parentJ...` |
| 709 | fn | childRunIdsFromParentLog | (private) | `function childRunIdsFromParentLog(log, reposito...` |
| 718 | fn | validateManifestChildRun | pub | `export function validateManifestChildRun(` |
| 768 | fn | validatePerformanceArtifactOnlyJobs | pub | `export function validatePerformanceArtifactOnly...` |
| 791 | fn | manifestArtifactName | (private) | `function manifestArtifactName(runId, runAttempt) {` |
| 797 | fn | legacyManifestArtifactName | (private) | `function legacyManifestArtifactName(runId) {` |
| 801 | fn | validateManifestArtifactIdentity | pub | `export function validateManifestArtifactIdentity(` |
| 830 | fn | selectManifestArtifact | pub | `export function selectManifestArtifact(artifact...` |
| 876 | fn | validateManifestArtifactCompatibility | pub | `export function validateManifestArtifactCompati...` |
| 890 | fn | readManifestArtifactArchive | pub | `export function readManifestArtifactArchive(arc...` |
| 940 | fn | downloadParentManifestEvidence | (private) | `function downloadParentManifestEvidence(runId, ...` |
| 985 | fn | tryDownloadParentManifest | (private) | `function tryDownloadParentManifest(runId, runAt...` |
| 989 | fn | workflowPath | (private) | `function workflowPath(run) {` |
| 993 | fn | normalizedManifestArtifact | (private) | `function normalizedManifestArtifact(artifact, r...` |
| 1003 | fn | validateManifestArtifactBinding | (private) | `function validateManifestArtifactBinding(artifa...` |
| 1014 | fn | validateCompletedParentRun | (private) | `function validateCompletedParentRun(parentView,...` |
| 1027 | fn | createReleaseEvidenceClient | pub | `export function createReleaseEvidenceClient(rep...` |
| 1059 | fn | loadValidatedParentEvidence | (private) | `function loadValidatedParentEvidence({ client, ...` |
| 1085 | fn | trustedWorkflowFullRef | (private) | `function trustedWorkflowFullRef(workflowRef) {` |
| 1089 | fn | normalizeWorkflowPathRef | (private) | `function normalizeWorkflowPathRef(ref) {` |
| 1096 | fn | validateTrustedProducerIdentity | pub | `export function validateTrustedProducerIdentity...` |
| 1152 | fn | normalizedParentTuple | (private) | `function normalizedParentTuple(evidence, identi...` |
| 1171 | fn | resolveVerifierIdentity | pub | `export function resolveVerifierIdentity(` |
| 1225 | fn | validateStrictChildRun | (private) | `function validateStrictChildRun({ child, client...` |
| 1283 | fn | validateReleaseRunEvidence | pub | `export function validateReleaseRunEvidence(` |
| 1425 | fn | parseReleaseCiSummaryArgs | pub | `export function parseReleaseCiSummaryArgs(argv) {` |
| 1484 | fn | printUsage | (private) | `function printUsage() {` |
| 1494 | fn | releaseCiWatchFingerprint | pub | `export function releaseCiWatchFingerprint(paren...` |
| 1509 | fn | summarizeReleaseCiRun | (private) | `function summarizeReleaseCiRun(options) {` |
| 1524 | fn | watchReleaseCiRun | pub | `export async function watchReleaseCiRun(options...` |
| 1564 | fn | main | (private) | `async function main() {` |

## Public API

### `runReleaseCiGh`

```
export function runReleaseCiGh(args, params = {}) {
```

**Line:** 96 | **Kind:** fn

### `githubRestArgs`

```
export function githubRestArgs(pathSuffix, repository = DEFAULT_REPO) {
```

**Line:** 118 | **Kind:** fn

### `artifactDownloadArgs`

```
export function artifactDownloadArgs(artifactId, repository = DEFAULT_REPO) {
```

**Line:** 126 | **Kind:** fn

### `validateParentRunBinding`

```
export function validateParentRunBinding(parentView, parentRest, expectedRunId) {
```

**Line:** 149 | **Kind:** fn

### `expectedChildDispatches`

```
export function expectedChildDispatches(parentRunId, parentRunAttempt, parentWorkflowRef) {
```

**Line:** 164 | **Kind:** fn

### `requiredChildKeysForRerunGroup`

```
export function requiredChildKeysForRerunGroup(rerunGroup) {
```

**Line:** 182 | **Kind:** fn

### `expectedSelectedChildDispatches`

```
export function expectedSelectedChildDispatches(
```

**Line:** 190 | **Kind:** fn

### `selectExactChildRun`

```
export function selectExactChildRun(runs, expectedDisplayTitle, expectedHeadBranch) {
```

**Line:** 201 | **Kind:** fn

### `selectExactChildRunFromPages`

```
export function selectExactChildRunFromPages(runPages, expectedDisplayTitle, expectedHeadBranch) {
```

**Line:** 216 | **Kind:** fn

### `validateParentManifest`

```
export function validateParentManifest(value, expected) {
```

**Line:** 368 | **Kind:** fn

### `validateEvidenceReuseChain`

```
export function validateEvidenceReuseChain(
```

**Line:** 498 | **Kind:** fn

### `selectedChildKeys`

```
export function selectedChildKeys(parentJobs) {
```

**Line:** 577 | **Kind:** fn

### `manifestChildEntries`

```
export function manifestChildEntries(manifest, children, selectedKeys) {
```

**Line:** 586 | **Kind:** fn

### `resolveManifestChildOriginAttempt`

```
export function resolveManifestChildOriginAttempt(run, child, parentManifest, parentJobs) {
```

**Line:** 656 | **Kind:** fn

### `selectManifestParentJob`

```
export function selectManifestParentJob(parentJobs, child, parentManifest, originAttempt) {
```

**Line:** 686 | **Kind:** fn

### `validateManifestChildRun`

```
export function validateManifestChildRun(
```

**Line:** 718 | **Kind:** fn

### `validatePerformanceArtifactOnlyJobs`

```
export function validatePerformanceArtifactOnlyJobs(jobs, runAttempt) {
```

**Line:** 768 | **Kind:** fn

### `validateManifestArtifactIdentity`

```
export function validateManifestArtifactIdentity(
```

**Line:** 801 | **Kind:** fn

### `selectManifestArtifact`

```
export function selectManifestArtifact(artifacts, runId, runAttempt) {
```

**Line:** 830 | **Kind:** fn

### `validateManifestArtifactCompatibility`

```
export function validateManifestArtifactCompatibility(artifact, manifest, runId, runAttempt) {
```

**Line:** 876 | **Kind:** fn

### `readManifestArtifactArchive`

```
export function readManifestArtifactArchive(archivePath, expectedDigest) {
```

**Line:** 890 | **Kind:** fn

### `createReleaseEvidenceClient`

```
export function createReleaseEvidenceClient(repository = DEFAULT_REPO) {
```

**Line:** 1027 | **Kind:** fn

### `validateTrustedProducerIdentity`

```
export function validateTrustedProducerIdentity(evidence, client, verifier, trustedWorkflowRef) {
```

**Line:** 1096 | **Kind:** fn

### `resolveVerifierIdentity`

```
export function resolveVerifierIdentity(
```

**Line:** 1171 | **Kind:** fn

### `validateReleaseRunEvidence`

```
export function validateReleaseRunEvidence(
```

**Line:** 1283 | **Kind:** fn

### `parseReleaseCiSummaryArgs`

```
export function parseReleaseCiSummaryArgs(argv) {
```

**Line:** 1425 | **Kind:** fn

### `releaseCiWatchFingerprint`

```
export function releaseCiWatchFingerprint(parent) {
```

**Line:** 1494 | **Kind:** fn

### `watchReleaseCiRun`

```
export async function watchReleaseCiRun(options, overrides = {}) {
```

**Line:** 1524 | **Kind:** fn
