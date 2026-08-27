# scripts/test-projects.test-support.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4962
- **Language:** JavaScript
- **Symbols:** 121
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 254 | fn | resolveConfigSortWeight | (private) | `function resolveConfigSortWeight(config, shardT...` |
| 258 | fn | interleaveSlowAndFastSpecs | (private) | `function interleaveSlowAndFastSpecs(sortedSpecs) {` |
| 273 | fn | uniqueOrdered | (private) | `function uniqueOrdered(values) {` |
| 277 | fn | isPathAtOrUnder | (private) | `function isPathAtOrUnder(relative, root) {` |
| 284 | fn | orderFullSuiteSpecsForParallelRun | pub | `export function orderFullSuiteSpecsForParallelR...` |
| 2457 | fn | formatNoChangedTestTargetLines | pub | `export function formatNoChangedTestTargetLines(...` |
| 2486 | fn | resolveTestProjectsVitestNoOutputTimeoutMs | (private) | `function resolveTestProjectsVitestNoOutputTimeo...` |
| 2554 | fn | normalizePathPattern | (private) | `function normalizePathPattern(value) {` |
| 2558 | fn | listRepoFilesRecursive | (private) | `function listRepoFilesRecursive(root, cwd) {` |
| 2572 | fn | listGatewayFilesFromGit | (private) | `function listGatewayFilesFromGit(cwd) {` |
| 2587 | fn | isGatewayServerFullSuiteTarget | (private) | `function isGatewayServerFullSuiteTarget(relativ...` |
| 2602 | fn | resolveGatewayServerFullSuiteTargets | (private) | `function resolveGatewayServerFullSuiteTargets(c...` |
| 2612 | fn | splitTargetChunks | (private) | `function splitTargetChunks(targets, chunkCount) {` |
| 2632 | fn | listBroadScriptTestTargets | (private) | `function listBroadScriptTestTargets(pattern, cw...` |
| 2647 | fn | listBroadToolingScriptTestTargets | (private) | `function listBroadToolingScriptTestTargets(patt...` |
| 2656 | fn | listToolingFullSuiteTestTargets | (private) | `function listToolingFullSuiteTestTargets(cwd) {` |
| 2679 | fn | listUnitFastFullSuiteTestTargets | (private) | `function listUnitFastFullSuiteTestTargets() {` |
| 2687 | fn | listAgentsCoreFullSuiteTestTargets | (private) | `function listAgentsCoreFullSuiteTestTargets(cwd) {` |
| 2701 | fn | createBroadToolingScriptPlans | (private) | `function createBroadToolingScriptPlans({ config...` |
| 2727 | fn | createBoundedExtensionPlans | (private) | `function createBoundedExtensionPlans({ config, ...` |
| 2743 | fn | expandBroadToolingScriptTargets | (private) | `function expandBroadToolingScriptTargets(target...` |
| 2759 | fn | isExistingPathTarget | (private) | `function isExistingPathTarget(arg, cwd) {` |
| 2763 | fn | isExistingFileTarget | (private) | `function isExistingFileTarget(arg, cwd) {` |
| 2771 | fn | isExistingDirectoryTarget | (private) | `function isExistingDirectoryTarget(arg, cwd) {` |
| 2779 | fn | isGlobTarget | (private) | `function isGlobTarget(arg) {` |
| 2783 | fn | isFileLikeTarget | (private) | `function isFileLikeTarget(arg) {` |
| 2787 | fn | isTestFileTarget | pub | `export function isTestFileTarget(arg) {` |
| 2791 | fn | isTestSupportFileTarget | (private) | `function isTestSupportFileTarget(arg) {` |
| 2799 | fn | isLikelyFileTarget | (private) | `function isLikelyFileTarget(arg) {` |
| 2803 | fn | isPathLikeTargetArg | (private) | `function isPathLikeTargetArg(arg, cwd) {` |
| 2817 | fn | toRepoRelativeTarget | (private) | `function toRepoRelativeTarget(arg, cwd) {` |
| 2825 | fn | toScopedIncludePattern | (private) | `function toScopedIncludePattern(arg, cwd) {` |
| 2841 | fn | listExplicitTestTargetFilesFromGit | (private) | `function listExplicitTestTargetFilesFromGit(cwd) {` |
| 2868 | fn | listExplicitTestTargetFilesForCwd | (private) | `function listExplicitTestTargetFilesForCwd(cwd) {` |
| 2880 | fn | resolveExplicitTestPrefixTargets | (private) | `function resolveExplicitTestPrefixTargets(targe...` |
| 2900 | fn | includePatternMatchesAnyFile | (private) | `function includePatternMatchesAnyFile(pattern, ...` |
| 2904 | fn | resolveExplicitSourceTestTargets | (private) | `function resolveExplicitSourceTestTargets(targe...` |
| 2935 | fn | expandExplicitSourceTestTargets | (private) | `function expandExplicitSourceTestTargets(target...` |
| 3005 | fn | isExactSourceDirectoryTarget | (private) | `function isExactSourceDirectoryTarget(relative) {` |
| 3009 | fn | resolveExactSourceDirectoryTestTargets | (private) | `function resolveExactSourceDirectoryTestTargets...` |
| 3029 | fn | findUnmatchedExplicitTestTargets | pub | `export function findUnmatchedExplicitTestTarget...` |
| 3036 | fn | getCandidateFiles | (private) | `const getCandidateFiles = () => {` |
| 3102 | fn | isSkippedImportGraphDirectory | (private) | `function isSkippedImportGraphDirectory(name) {` |
| 3106 | fn | listImportGraphFiles | (private) | `function listImportGraphFiles(cwd, directory, f...` |
| 3129 | fn | resolveImportSpecifier | (private) | `function resolveImportSpecifier(importer, speci...` |
| 3163 | fn | isImportableGraphFile | (private) | `function isImportableGraphFile(relative) {` |
| 3167 | fn | listImportGraphFilesFromGit | (private) | `function listImportGraphFilesFromGit(cwd) {` |
| 3182 | fn | listImportGraphFilesForCwd | (private) | `function listImportGraphFilesForCwd(cwd) {` |
| 3194 | fn | stripImportableGraphExtension | (private) | `function stripImportableGraphExtension(relative) {` |
| 3203 | fn | resolveImportGraphSearchTerms | (private) | `function resolveImportGraphSearchTerms(relative) {` |
| 3221 | fn | listImportGraphGrepMatches | (private) | `function listImportGraphGrepMatches(cwd, term) {` |
| 3252 | fn | findDirectImportersWithGitGrep | (private) | `function findDirectImportersWithGitGrep(cwd, im...` |
| 3306 | fn | resolveAffectedTestsFromTargetedImportScan | (private) | `function resolveAffectedTestsFromTargetedImport...` |
| 3342 | fn | getImportGraph | (private) | `function getImportGraph(cwd) {` |
| 3388 | fn | hasImportGraphImpactOnTargets | pub | `export function hasImportGraphImpactOnTargets(c...` |
| 3417 | fn | resolveAffectedTestsFromImportGraph | (private) | `function resolveAffectedTestsFromImportGraph(ch...` |
| 3447 | fn | resolveVitestConfigTargetKind | (private) | `function resolveVitestConfigTargetKind(relative) {` |
| 3451 | fn | isVitestConfigPathLikeTarget | (private) | `function isVitestConfigPathLikeTarget(relative) {` |
| 3457 | fn | isVitestConfigFileTarget | (private) | `function isVitestConfigFileTarget(relative) {` |
| 3461 | fn | isVitestConfigTargetForKind | (private) | `function isVitestConfigTargetForKind(kind, targ...` |
| 3465 | fn | isControlUiE2eTarget | (private) | `function isControlUiE2eTarget(relative) {` |
| 3474 | fn | resolveChannelContractTargetKind | (private) | `function resolveChannelContractTargetKind(relat...` |
| 3525 | fn | listChangedPathsFromGit | (private) | `function listChangedPathsFromGit(baseRef, cwd) {` |
| 3529 | fn | extractChangedBaseRef | (private) | `function extractChangedBaseRef(args) {` |
| 3545 | fn | stripChangedArgs | (private) | `function stripChangedArgs(args) {` |
| 3564 | fn | shouldKeepBroadChangedRun | (private) | `function shouldKeepBroadChangedRun(changedPaths) {` |
| 3572 | fn | resolveToolingChangedTestTargets | (private) | `function resolveToolingChangedTestTargets(chang...` |
| 3586 | fn | resolveConventionalToolingTestTargets | (private) | `function resolveConventionalToolingTestTargets(...` |
| 3622 | fn | isToolingScriptPath | (private) | `function isToolingScriptPath(changedPath) {` |
| 3626 | fn | resolveUpgradeSurvivorConfigRecipeTargets | (private) | `function resolveUpgradeSurvivorConfigRecipeTarg...` |
| 3633 | fn | resolveDocsI18nBehaviorTargets | (private) | `function resolveDocsI18nBehaviorTargets(changed...` |
| 3640 | fn | resolveDocsI18nGoTargets | (private) | `function resolveDocsI18nGoTargets(changedPath) {` |
| 3651 | fn | resolveK8sManifestTargets | (private) | `function resolveK8sManifestTargets(changedPath) {` |
| 3658 | fn | resolveParallelsToolingTestTargets | (private) | `function resolveParallelsToolingTestTargets(cha...` |
| 3690 | fn | resolveGithubYamlGuardTargets | (private) | `function resolveGithubYamlGuardTargets(changedP...` |
| 3700 | fn | resolveGithubWorkflowOwnerTargets | (private) | `function resolveGithubWorkflowOwnerTargets(chan...` |
| 3704 | fn | resolveToolingTestTargets | (private) | `function resolveToolingTestTargets(changedPath,...` |
| 3728 | fn | shouldUseBroadChangedTargets | (private) | `function shouldUseBroadChangedTargets(env = pro...` |
| 3733 | fn | isRoutableChangedTarget | (private) | `function isRoutableChangedTarget(changedPath) {` |
| 3749 | fn | resolveSiblingTestTarget | (private) | `function resolveSiblingTestTarget(changedPath, ...` |
| 3758 | fn | shouldCombineSiblingTestWithImportGraph | (private) | `function shouldCombineSiblingTestWithImportGrap...` |
| 3762 | fn | shouldRouteChangedTargetWithoutImportGraph | (private) | `function shouldRouteChangedTargetWithoutImportG...` |
| 3766 | fn | resolvePromptSnapshotFixtureTargets | (private) | `function resolvePromptSnapshotFixtureTargets(ch...` |
| 3773 | fn | resolveAppcastTargets | (private) | `function resolveAppcastTargets(changedPath) {` |
| 3777 | fn | resolvePreciseChangedTestTargets | (private) | `function resolvePreciseChangedTestTargets(chang...` |
| 3823 | fn | isDeletedChangedTestTarget | (private) | `function isDeletedChangedTestTarget(changedPath...` |
| 3830 | fn | resolveChangedTestTargetPlan | pub | `export function resolveChangedTestTargetPlan(ch...` |
| 3883 | fn | listFullExtensionVitestProjectConfigs | pub | `export function listFullExtensionVitestProjectC...` |
| 3890 | fn | resolveChangedTargetArgs | pub | `export function resolveChangedTargetArgs(` |
| 3906 | fn | resolveChangedTestTargetPlanForArgs | pub | `export function resolveChangedTestTargetPlanFor...` |
| 3923 | fn | classifyTarget | (private) | `function classifyTarget(arg, cwd) {` |
| 4147 | fn | resolveLightLaneIncludePatterns | (private) | `function resolveLightLaneIncludePatterns(kind, ...` |
| 4172 | fn | shouldUseWholeConfigTarget | (private) | `function shouldUseWholeConfigTarget(kind, targe...` |
| 4190 | fn | createVitestArgs | (private) | `function createVitestArgs(params) {` |
| 4204 | fn | createVitestPreflightPnpmArgs | pub | `export function createVitestPreflightPnpmArgs(c...` |
| 4211 | fn | parseTestProjectsArgs | pub | `export function parseTestProjectsArgs(args, cwd...` |
| 4244 | fn | buildVitestRunPlans | pub | `export function buildVitestRunPlans(` |
| 4522 | fn | buildFullSuiteVitestRunPlans | pub | `export function buildFullSuiteVitestRunPlans(ar...` |
| 4606 | fn | shouldUseLocalFullSuiteParallelByDefault | (private) | `function shouldUseLocalFullSuiteParallelByDefau...` |
| 4613 | fn | shouldExpandLocalFullSuiteShardsByDefault | (private) | `function shouldExpandLocalFullSuiteShardsByDefa...` |
| 4617 | fn | parsePositiveInt | (private) | `function parsePositiveInt(value, label) {` |
| 4632 | fn | hasConservativeVitestWorkerBudget | (private) | `function hasConservativeVitestWorkerBudget(env) {` |
| 4642 | fn | resolveParallelFullSuiteConcurrency | pub | `export function resolveParallelFullSuiteConcurr...` |
| 4670 | fn | sanitizeVitestCachePathSegment | (private) | `function sanitizeVitestCachePathSegment(value) {` |
| 4679 | fn | applyParallelVitestCachePaths | pub | `export function applyParallelVitestCachePaths(s...` |
| 4703 | fn | applyDefaultMultiSpecVitestCachePaths | pub | `export function applyDefaultMultiSpecVitestCach...` |
| 4710 | fn | applyDefaultVitestNoOutputTimeout | pub | `export function applyDefaultVitestNoOutputTimeo...` |
| 4746 | fn | shouldRetryVitestNoOutputTimeout | pub | `export function shouldRetryVitestNoOutputTimeou...` |
| 4761 | fn | withRetryNoOutputTimeout | pub | `export function withRetryNoOutputTimeout(spec) {` |
| 4775 | fn | createVitestRunSpecs | pub | `export function createVitestRunSpecs(args, para...` |
| 4806 | fn | loadIncludePatternsForSpecFilter | (private) | `function loadIncludePatternsForSpecFilter(env) {` |
| 4818 | fn | includePatternMatchesConfig | (private) | `function includePatternMatchesConfig(candidate,...` |
| 4824 | fn | filterPlansForContractIncludeFile | (private) | `function filterPlansForContractIncludeFile(plan...` |
| 4840 | fn | shouldAcquireLocalHeavyCheckLock | pub | `export function shouldAcquireLocalHeavyCheckLoc...` |
| 4859 | fn | expandVitestIncludePatterns | (private) | `function expandVitestIncludePatterns(includePat...` |
| 4873 | fn | writeVitestIncludeFile | pub | `export function writeVitestIncludeFile(filePath...` |
| 4883 | fn | shellQuote | (private) | `function shellQuote(value) {` |
| 4894 | fn | formatFailedShardRerunCommand | (private) | `function formatFailedShardRerunCommand(failure) {` |
| 4911 | fn | formatFailedShardStatus | (private) | `function formatFailedShardStatus(failure) {` |
| 4925 | fn | formatFailedShardDigest | pub | `export function formatFailedShardDigest(failure...` |
| 4952 | fn | buildVitestArgs | pub | `export function buildVitestArgs(args, cwd = pro...` |

## Public API

### `orderFullSuiteSpecsForParallelRun`

```
export function orderFullSuiteSpecsForParallelRun(specs, shardTimings = new Map()) {
```

**Line:** 284 | **Kind:** fn

### `formatNoChangedTestTargetLines`

```
export function formatNoChangedTestTargetLines(skippedBroadFallbackPaths) {
```

**Line:** 2457 | **Kind:** fn

### `isTestFileTarget`

```
export function isTestFileTarget(arg) {
```

**Line:** 2787 | **Kind:** fn

### `findUnmatchedExplicitTestTargets`

```
export function findUnmatchedExplicitTestTargets(args, cwd = process.cwd()) {
```

**Line:** 3029 | **Kind:** fn

### `hasImportGraphImpactOnTargets`

```
export function hasImportGraphImpactOnTargets(changedPaths, targetPaths, cwd = process.cwd()) {
```

**Line:** 3388 | **Kind:** fn

### `resolveChangedTestTargetPlan`

```
export function resolveChangedTestTargetPlan(changedPaths, options = {}) {
```

**Line:** 3830 | **Kind:** fn

### `listFullExtensionVitestProjectConfigs`

```
export function listFullExtensionVitestProjectConfigs() {
```

**Line:** 3883 | **Kind:** fn

### `resolveChangedTargetArgs`

```
export function resolveChangedTargetArgs(
```

**Line:** 3890 | **Kind:** fn

### `resolveChangedTestTargetPlanForArgs`

```
export function resolveChangedTestTargetPlanForArgs(
```

**Line:** 3906 | **Kind:** fn

### `createVitestPreflightPnpmArgs`

```
export function createVitestPreflightPnpmArgs(config) {
```

**Line:** 4204 | **Kind:** fn

### `parseTestProjectsArgs`

```
export function parseTestProjectsArgs(args, cwd = process.cwd()) {
```

**Line:** 4211 | **Kind:** fn

### `buildVitestRunPlans`

```
export function buildVitestRunPlans(
```

**Line:** 4244 | **Kind:** fn

### `buildFullSuiteVitestRunPlans`

```
export function buildFullSuiteVitestRunPlans(args, cwd = process.cwd()) {
```

**Line:** 4522 | **Kind:** fn

### `resolveParallelFullSuiteConcurrency`

```
export function resolveParallelFullSuiteConcurrency(specCount, envInput, hostInfo) {
```

**Line:** 4642 | **Kind:** fn

### `applyParallelVitestCachePaths`

```
export function applyParallelVitestCachePaths(specs, params = {}) {
```

**Line:** 4679 | **Kind:** fn

### `applyDefaultMultiSpecVitestCachePaths`

```
export function applyDefaultMultiSpecVitestCachePaths(specs, params = {}) {
```

**Line:** 4703 | **Kind:** fn

### `applyDefaultVitestNoOutputTimeout`

```
export function applyDefaultVitestNoOutputTimeout(specs, params = {}) {
```

**Line:** 4710 | **Kind:** fn

### `shouldRetryVitestNoOutputTimeout`

```
export function shouldRetryVitestNoOutputTimeout(env = process.env) {
```

**Line:** 4746 | **Kind:** fn

### `withRetryNoOutputTimeout`

```
export function withRetryNoOutputTimeout(spec) {
```

**Line:** 4761 | **Kind:** fn

### `createVitestRunSpecs`

```
export function createVitestRunSpecs(args, params = {}) {
```

**Line:** 4775 | **Kind:** fn

### `shouldAcquireLocalHeavyCheckLock`

```
export function shouldAcquireLocalHeavyCheckLock(runSpecs, env = process.env) {
```

**Line:** 4840 | **Kind:** fn

### `writeVitestIncludeFile`

```
export function writeVitestIncludeFile(filePath, includePatterns, options = {}) {
```

**Line:** 4873 | **Kind:** fn

### `formatFailedShardDigest`

```
export function formatFailedShardDigest(failures, options = {}) {
```

**Line:** 4925 | **Kind:** fn

### `buildVitestArgs`

```
export function buildVitestArgs(args, cwd = process.cwd()) {
```

**Line:** 4952 | **Kind:** fn
