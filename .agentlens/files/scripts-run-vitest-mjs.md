# scripts/run-vitest.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1156
- **Language:** JavaScript
- **Symbols:** 70
- **Public symbols:** 19

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 123 | fn | isTruthyEnvValue | (private) | `function isTruthyEnvValue(value) {` |
| 127 | fn | parsePositiveInt | (private) | `function parsePositiveInt(value) {` |
| 139 | fn | resolveVitestNodeArgs | pub | `export function resolveVitestNodeArgs(env = pro...` |
| 147 | fn | isMissingVitestResolveError | (private) | `function isMissingVitestResolveError(error) {` |
| 158 | fn | resolveMissingVitestDependencyMessage | pub | `export function resolveMissingVitestDependencyM...` |
| 171 | fn | resolvePathFromBase | (private) | `function resolvePathFromBase(value, baseDir) {` |
| 175 | fn | resolvePnpmModulesDir | (private) | `function resolvePnpmModulesDir(env) {` |
| 179 | fn | resolveHydratedVitestPackageJson | (private) | `function resolveHydratedVitestPackageJson({ bas...` |
| 192 | fn | ensureHydratedNodeModulesSelfLink | (private) | `function ensureHydratedNodeModulesSelfLink({ hy...` |
| 208 | fn | resolveHydratedVitestCliEntry | (private) | `function resolveHydratedVitestCliEntry({ baseDi...` |
| 237 | fn | resolveVitestCliEntry | pub | `export function resolveVitestCliEntry({` |
| 271 | fn | resolveVitestNoOutputTimeoutMs | pub | `export function resolveVitestNoOutputTimeoutMs(...` |
| 278 | fn | resolveVitestNoOutputHeartbeatMs | pub | `export function resolveVitestNoOutputHeartbeatM...` |
| 282 | fn | resolveBooleanModeFlag | (private) | `function resolveBooleanModeFlag(argv, index, lo...` |
| 284 | fn | parseValue | (private) | `const parseValue = (rawValue) => rawValue !== "...` |
| 303 | fn | resolveExplicitVitestMode | (private) | `function resolveExplicitVitestMode(argv) {` |
| 353 | fn | resolveVitestCompileCacheSafeEnv | (private) | `function resolveVitestCompileCacheSafeEnv(env) {` |
| 369 | fn | resolveRunVitestSpawnEnv | pub | `export function resolveRunVitestSpawnEnv(env = ...` |
| 396 | fn | resolveDefaultVitestNoOutputTimeoutMs | pub | `export function resolveDefaultVitestNoOutputTim...` |
| 403 | fn | resolveVitestConfigArg | (private) | `function resolveVitestConfigArg(argv) {` |
| 419 | fn | resolveVitestConfigNoOutputTimeoutMs | (private) | `function resolveVitestConfigNoOutputTimeoutMs(c...` |
| 432 | fn | resolveVitestSpawnParams | pub | `export function resolveVitestSpawnParams(env = ...` |
| 443 | fn | resolveVitestSpawnEnv | (private) | `function resolveVitestSpawnEnv(env = process.en...` |
| 457 | fn | shouldApplyNativeWorkerBudget | (private) | `function shouldApplyNativeWorkerBudget(env) {` |
| 466 | fn | resolveNativeWorkerCount | (private) | `function resolveNativeWorkerCount(env) {` |
| 470 | fn | resolveExplicitVitestWorkerBudget | (private) | `function resolveExplicitVitestWorkerBudget(env) {` |
| 477 | fn | shouldSuppressVitestStderrLine | pub | `export function shouldSuppressVitestStderrLine(...` |
| 488 | fn | resolveDirectNodeVitestArgs | pub | `export function resolveDirectNodeVitestArgs(pnp...` |
| 492 | fn | hasExplicitVitestConfigArg | (private) | `function hasExplicitVitestConfigArg(argv) {` |
| 496 | fn | optionConsumesNextArg | (private) | `function optionConsumesNextArg(arg) {` |
| 506 | fn | isPathLikeExplicitFileArg | (private) | `function isPathLikeExplicitFileArg(arg) {` |
| 512 | fn | isExplicitFileTargetArg | (private) | `function isExplicitFileTargetArg(arg) {` |
| 519 | fn | isExplicitTestFileArg | (private) | `function isExplicitTestFileArg(arg) {` |
| 523 | fn | isDelegableBroadProjectRouterTarget | (private) | `function isDelegableBroadProjectRouterTarget(ar...` |
| 532 | fn | isExplicitProjectRouterTargetArg | (private) | `function isExplicitProjectRouterTargetArg(arg, ...` |
| 546 | fn | collectExplicitFileTargetArgs | (private) | `function collectExplicitFileTargetArgs(argv, pr...` |
| 567 | fn | collectExplicitProjectRouterTargetArgs | (private) | `function collectExplicitProjectRouterTargetArgs...` |
| 573 | fn | isExplicitDirectoryTargetArg | (private) | `function isExplicitDirectoryTargetArg(arg, cwd ...` |
| 585 | fn | collectExplicitDirectoryTargetArgs | (private) | `function collectExplicitDirectoryTargetArgs(arg...` |
| 591 | fn | collectExplicitTestFileArgs | (private) | `function collectExplicitTestFileArgs(argv) {` |
| 598 | fn | resolveExplicitTestFileNoPassArgs | pub | `export function resolveExplicitTestFileNoPassAr...` |
| 609 | fn | hasAlternateVitestRootArg | (private) | `function hasAlternateVitestRootArg(argv) {` |
| 620 | fn | hasExplicitVitestProjectArg | (private) | `function hasExplicitVitestProjectArg(argv) {` |
| 624 | fn | hasExplicitDisabledRunFlag | (private) | `function hasExplicitDisabledRunFlag(argv) {` |
| 647 | fn | hasSeparateVitestOptionValueArg | (private) | `function hasSeparateVitestOptionValueArg(argv) {` |
| 659 | fn | stripRunSubcommand | (private) | `function stripRunSubcommand(argv) {` |
| 691 | fn | hasNonRunVitestSubcommand | (private) | `function hasNonRunVitestSubcommand(argv) {` |
| 712 | fn | resolveTestProjectsDelegationArgs | pub | `export function resolveTestProjectsDelegationAr...` |
| 731 | fn | resolveMissingExplicitTestFiles | pub | `export function resolveMissingExplicitTestFiles...` |
| 743 | fn | toRepoRelativeArg | (private) | `function toRepoRelativeArg(arg, cwd) {` |
| 748 | fn | withImplicitVitestConfig | (private) | `function withImplicitVitestConfig(argv, config) {` |
| 755 | fn | isToolingTestTarget | (private) | `function isToolingTestTarget(target) {` |
| 761 | fn | isToolingDockerTestTarget | (private) | `function isToolingDockerTestTarget(target) {` |
| 768 | fn | resolveImplicitVitestArgs | pub | `export function resolveImplicitVitestArgs(argv,...` |
| 799 | fn | spawnVitestProcess | (private) | `function spawnVitestProcess({ pnpmArgs, spawnPa...` |
| 813 | fn | installVitestNoOutputWatchdog | pub | `export function installVitestNoOutputWatchdog(p...` |
| 837 | fn | clearHeartbeatTimer | (private) | `const clearHeartbeatTimer = () => {` |
| 844 | fn | clearForceKillTimer | (private) | `const clearForceKillTimer = () => {` |
| 851 | fn | clearSilenceTimer | (private) | `const clearSilenceTimer = () => {` |
| 858 | fn | scheduleHeartbeatTimer | (private) | `const scheduleHeartbeatTimer = () => {` |
| 875 | fn | resetSilenceTimer | (private) | `const resetSilenceTimer = () => {` |
| 907 | fn | handleActivity | (private) | `const handleActivity = () => {` |
| 916 | fn | handler | (private) | `const handler = () => {` |
| 942 | fn | forwardVitestOutput | (private) | `function forwardVitestOutput(stream, target, sh...` |
| 973 | fn | spawnWatchedVitestProcess | pub | `export function spawnWatchedVitestProcess({` |
| 1033 | fn | resolveTestProjectsRunnerEnv | pub | `export function resolveTestProjectsRunnerEnv(en...` |
| 1040 | fn | resolveTestProjectsRunnerSpawnParams | pub | `export function resolveTestProjectsRunnerSpawnP...` |
| 1048 | fn | spawnTestProjectsRunner | (private) | `function spawnTestProjectsRunner(argv, env, opt...` |
| 1064 | fn | runTestProjectsDelegation | pub | `export function runTestProjectsDelegation(argv,...` |
| 1088 | fn | main | (private) | `function main(argv = process.argv.slice(2), env...` |

## Public API

### `resolveVitestNodeArgs`

```
export function resolveVitestNodeArgs(env = process.env) {
```

**Line:** 139 | **Kind:** fn

### `resolveMissingVitestDependencyMessage`

```
export function resolveMissingVitestDependencyMessage(baseDir = repoRoot, fsImpl = fs) {
```

**Line:** 158 | **Kind:** fn

### `resolveVitestCliEntry`

```
export function resolveVitestCliEntry({
```

**Line:** 237 | **Kind:** fn

### `resolveVitestNoOutputTimeoutMs`

```
export function resolveVitestNoOutputTimeoutMs(env = process.env) {
```

**Line:** 271 | **Kind:** fn

### `resolveVitestNoOutputHeartbeatMs`

```
export function resolveVitestNoOutputHeartbeatMs(env = process.env) {
```

**Line:** 278 | **Kind:** fn

### `resolveRunVitestSpawnEnv`

```
export function resolveRunVitestSpawnEnv(env = process.env, argv = []) {
```

**Line:** 369 | **Kind:** fn

### `resolveDefaultVitestNoOutputTimeoutMs`

```
export function resolveDefaultVitestNoOutputTimeoutMs(argv = []) {
```

**Line:** 396 | **Kind:** fn

### `resolveVitestSpawnParams`

```
export function resolveVitestSpawnParams(env = process.env, platform = process.platform) {
```

**Line:** 432 | **Kind:** fn

### `shouldSuppressVitestStderrLine`

```
export function shouldSuppressVitestStderrLine(line) {
```

**Line:** 477 | **Kind:** fn

### `resolveDirectNodeVitestArgs`

```
export function resolveDirectNodeVitestArgs(pnpmArgs) {
```

**Line:** 488 | **Kind:** fn

### `resolveExplicitTestFileNoPassArgs`

```
export function resolveExplicitTestFileNoPassArgs(argv) {
```

**Line:** 598 | **Kind:** fn

### `resolveTestProjectsDelegationArgs`

```
export function resolveTestProjectsDelegationArgs(argv, cwd = process.cwd()) {
```

**Line:** 712 | **Kind:** fn

### `resolveMissingExplicitTestFiles`

```
export function resolveMissingExplicitTestFiles(argv, cwd = process.cwd(), fsImpl = fs) {
```

**Line:** 731 | **Kind:** fn

### `resolveImplicitVitestArgs`

```
export function resolveImplicitVitestArgs(argv, cwd = process.cwd()) {
```

**Line:** 768 | **Kind:** fn

### `installVitestNoOutputWatchdog`

```
export function installVitestNoOutputWatchdog(params) {
```

**Line:** 813 | **Kind:** fn

### `spawnWatchedVitestProcess`

```
export function spawnWatchedVitestProcess({
```

**Line:** 973 | **Kind:** fn

### `resolveTestProjectsRunnerEnv`

```
export function resolveTestProjectsRunnerEnv(env) {
```

**Line:** 1033 | **Kind:** fn

### `resolveTestProjectsRunnerSpawnParams`

```
export function resolveTestProjectsRunnerSpawnParams(env, platform = process.platform) {
```

**Line:** 1040 | **Kind:** fn

### `runTestProjectsDelegation`

```
export function runTestProjectsDelegation(argv, env, options = {}) {
```

**Line:** 1064 | **Kind:** fn
