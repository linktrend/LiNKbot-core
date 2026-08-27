# scripts/check-changed.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1033
- **Language:** JavaScript
- **Symbols:** 54
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | fn | ensureChangedCheckRuntimeDependencies | (private) | `async function ensureChangedCheckRuntimeDepende...` |
| 91 | fn | createChangedCheckChildEnv | pub | `export function createChangedCheckChildEnv(base...` |
| 101 | fn | isTruthyEnvFlag | (private) | `function isTruthyEnvFlag(value) {` |
| 108 | fn | hasAndroidVersionSyncPath | (private) | `function hasAndroidVersionSyncPath(paths) {` |
| 114 | fn | hasMacosAppCiPath | (private) | `function hasMacosAppCiPath(paths) {` |
| 118 | fn | executableExistsOnPath | (private) | `function executableExistsOnPath(command, env = ...` |
| 138 | fn | shouldSkipAppLintForMissingSwiftlint | (private) | `function shouldSkipAppLintForMissingSwiftlint(o...` |
| 145 | fn | changedCheckLocalDependenciesReady | pub | `export function changedCheckLocalDependenciesRe...` |
| 154 | fn | changedCheckRequiresRemote | pub | `export function changedCheckRequiresRemote(resu...` |
| 172 | fn | shouldDelegateChangedCheckToCrabbox | pub | `export function shouldDelegateChangedCheckToCra...` |
| 203 | fn | changedCheckDiffRefsReady | (private) | `function changedCheckDiffRefsReady({ base, head...` |
| 217 | fn | buildChangedCheckCrabboxArgs | pub | `export function buildChangedCheckCrabboxArgs(ar...` |
| 250 | fn | buildDelegatedChangedCheckArgv | (private) | `function buildDelegatedChangedCheckArgv(argv, o...` |
| 269 | fn | shouldRunShrinkwrapGuard | pub | `export function shouldRunShrinkwrapGuard(paths) {` |
| 273 | fn | shouldRunPromptSnapshotCheck | pub | `export function shouldRunPromptSnapshotCheck(pa...` |
| 277 | fn | shouldRunPromptSnapshotOwnerTest | pub | `export function shouldRunPromptSnapshotOwnerTes...` |
| 281 | fn | shouldRunControlUiI18nVerify | pub | `export function shouldRunControlUiI18nVerify(pa...` |
| 287 | fn | shouldRunRuntimeSidecarBaselineCheck | pub | `export function shouldRunRuntimeSidecarBaseline...` |
| 292 | fn | shouldRunSqliteSessionSchemaBaselineCheck | pub | `export function shouldRunSqliteSessionSchemaBas...` |
| 299 | fn | shouldRunPluginSdkApiBaselineCheck | pub | `export function shouldRunPluginSdkApiBaselineCh...` |
| 310 | fn | shouldRunPluginSdkSurfaceChecks | pub | `export function shouldRunPluginSdkSurfaceChecks...` |
| 317 | fn | shouldRunDeprecationHygieneChecks | pub | `export function shouldRunDeprecationHygieneChec...` |
| 323 | fn | shouldRunCanvasA2uiNativeResourceCheck | pub | `export function shouldRunCanvasA2uiNativeResour...` |
| 329 | fn | shouldRunAppcastOwnerTest | pub | `export function shouldRunAppcastOwnerTest(paths) {` |
| 333 | fn | shouldRunTestTempCreationReport | pub | `export function shouldRunTestTempCreationReport...` |
| 339 | fn | createShrinkwrapGuardCommand | pub | `export function createShrinkwrapGuardCommand(pa...` |
| 364 | fn | runChangedCheckViaCrabbox | (private) | `async function runChangedCheckViaCrabbox(argv =...` |
| 373 | fn | createChangedCheckPlan | pub | `export function createChangedCheckPlan(result, ...` |
| 376 | fn | add | (private) | `const add = (name, args, env) => {` |
| 381 | fn | addCommand | (private) | `const addCommand = (name, bin, args, env) => {` |
| 390 | fn | addTypecheck | (private) | `const addTypecheck = (name, args) => add(name, ...` |
| 391 | fn | addLint | (private) | `const addLint = (name, args) => add(name, args,...` |
| 392 | fn | addTestTempCreationReport | (private) | `const addTestTempCreationReport = () => {` |
| 676 | fn | createTargetedCoreLintCommand | pub | `export function createTargetedCoreLintCommand(p...` |
| 688 | fn | createTargetedExtensionLintCommand | pub | `export function createTargetedExtensionLintComm...` |
| 700 | fn | createTargetedScriptLintCommand | pub | `export function createTargetedScriptLintCommand...` |
| 712 | fn | createTargetedOxlintCommand | (private) | `function createTargetedOxlintCommand({` |
| 748 | fn | runChangedCheck | (private) | `async function runChangedCheck(result, options ...` |
| 791 | fn | sameArgs | (private) | `function sameArgs(left, right) {` |
| 795 | fn | printPlan | (private) | `function printPlan(result, plan, options) {` |
| 811 | fn | runPnpm | (private) | `async function runPnpm(command, timings) {` |
| 815 | fn | runPlanCommand | (private) | `async function runPlanCommand(command, timings) {` |
| 822 | fn | formatPlanCommand | (private) | `function formatPlanCommand(command) {` |
| 827 | fn | formatShellToken | (private) | `function formatShellToken(token) {` |
| 831 | fn | createPnpmManagedCommand | pub | `export function createPnpmManagedCommand(comman...` |
| 845 | fn | prependCorepackPnpmShim | (private) | `function prependCorepackPnpmShim(env) {` |
| 853 | fn | ensureCorepackPnpmShimDir | (private) | `function ensureCorepackPnpmShimDir() {` |
| 867 | fn | registerCorepackPnpmShimCleanup | (private) | `function registerCorepackPnpmShimCleanup() {` |
| 875 | fn | cleanupCorepackPnpmShimDir | pub | `export function cleanupCorepackPnpmShimDir() {` |
| 884 | fn | runCommand | (private) | `async function runCommand(command, timings) {` |
| 906 | fn | printSummary | (private) | `function printSummary(timings, options) {` |
| 910 | fn | parseArgs | (private) | `function parseArgs(argv) {` |
| 952 | fn | printUsage | (private) | `function printUsage() {` |
| 970 | fn | isDirectRun | (private) | `function isDirectRun() {` |

## Public API

### `createChangedCheckChildEnv`

```
export function createChangedCheckChildEnv(baseEnv = process.env) {
```

**Line:** 91 | **Kind:** fn

### `changedCheckLocalDependenciesReady`

```
export function changedCheckLocalDependenciesReady(cwd = process.cwd()) {
```

**Line:** 145 | **Kind:** fn

### `changedCheckRequiresRemote`

```
export function changedCheckRequiresRemote(result) {
```

**Line:** 154 | **Kind:** fn

### `shouldDelegateChangedCheckToCrabbox`

```
export function shouldDelegateChangedCheckToCrabbox(argv = [], env = process.env, options = {}) {
```

**Line:** 172 | **Kind:** fn

### `buildChangedCheckCrabboxArgs`

```
export function buildChangedCheckCrabboxArgs(argv = [], options = {}) {
```

**Line:** 217 | **Kind:** fn

### `shouldRunShrinkwrapGuard`

```
export function shouldRunShrinkwrapGuard(paths) {
```

**Line:** 269 | **Kind:** fn

### `shouldRunPromptSnapshotCheck`

```
export function shouldRunPromptSnapshotCheck(paths) {
```

**Line:** 273 | **Kind:** fn

### `shouldRunPromptSnapshotOwnerTest`

```
export function shouldRunPromptSnapshotOwnerTest(paths) {
```

**Line:** 277 | **Kind:** fn

### `shouldRunControlUiI18nVerify`

```
export function shouldRunControlUiI18nVerify(paths) {
```

**Line:** 281 | **Kind:** fn

### `shouldRunRuntimeSidecarBaselineCheck`

```
export function shouldRunRuntimeSidecarBaselineCheck(paths) {
```

**Line:** 287 | **Kind:** fn

### `shouldRunSqliteSessionSchemaBaselineCheck`

```
export function shouldRunSqliteSessionSchemaBaselineCheck(paths) {
```

**Line:** 292 | **Kind:** fn

### `shouldRunPluginSdkApiBaselineCheck`

```
export function shouldRunPluginSdkApiBaselineCheck(paths) {
```

**Line:** 299 | **Kind:** fn

### `shouldRunPluginSdkSurfaceChecks`

```
export function shouldRunPluginSdkSurfaceChecks(paths) {
```

**Line:** 310 | **Kind:** fn

### `shouldRunDeprecationHygieneChecks`

```
export function shouldRunDeprecationHygieneChecks(paths) {
```

**Line:** 317 | **Kind:** fn

### `shouldRunCanvasA2uiNativeResourceCheck`

```
export function shouldRunCanvasA2uiNativeResourceCheck(paths) {
```

**Line:** 323 | **Kind:** fn

### `shouldRunAppcastOwnerTest`

```
export function shouldRunAppcastOwnerTest(paths) {
```

**Line:** 329 | **Kind:** fn

### `shouldRunTestTempCreationReport`

```
export function shouldRunTestTempCreationReport(paths) {
```

**Line:** 333 | **Kind:** fn

### `createShrinkwrapGuardCommand`

```
export function createShrinkwrapGuardCommand(paths) {
```

**Line:** 339 | **Kind:** fn

### `createChangedCheckPlan`

```
export function createChangedCheckPlan(result, options = {}) {
```

**Line:** 373 | **Kind:** fn

### `createTargetedCoreLintCommand`

```
export function createTargetedCoreLintCommand(paths, env = process.env, options = {}) {
```

**Line:** 676 | **Kind:** fn

### `createTargetedExtensionLintCommand`

```
export function createTargetedExtensionLintCommand(paths, env = process.env, options = {}) {
```

**Line:** 688 | **Kind:** fn

### `createTargetedScriptLintCommand`

```
export function createTargetedScriptLintCommand(paths, env = process.env, options = {}) {
```

**Line:** 700 | **Kind:** fn

### `createPnpmManagedCommand`

```
export function createPnpmManagedCommand(command, env = process.env) {
```

**Line:** 831 | **Kind:** fn

### `cleanupCorepackPnpmShimDir`

```
export function cleanupCorepackPnpmShimDir() {
```

**Line:** 875 | **Kind:** fn
