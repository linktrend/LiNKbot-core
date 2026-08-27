# scripts/run-node.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1596
- **Language:** JavaScript
- **Symbols:** 98
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | fn | statMtime | (private) | `const statMtime = (filePath, fsImpl = fs) => {` |
| 75 | fn | resolvePrivateQaRequiredDistEntries | (private) | `const resolvePrivateQaRequiredDistEntries = (di...` |
| 79 | fn | shouldIncludePrivateQaBundledOutputs | (private) | `const shouldIncludePrivateQaBundledOutputs = (e...` |
| 82 | fn | shouldRequireBundledPluginRuntimeOutput | (private) | `const shouldRequireBundledPluginRuntimeOutput =...` |
| 85 | fn | isExcludedSource | (private) | `const isExcludedSource = (filePath, sourceRoot,...` |
| 93 | fn | findLatestMtime | (private) | `const findLatestMtime = (dirPath, shouldSkip, d...` |
| 131 | fn | readGitStatus | (private) | `const readGitStatus = (deps, paths = runNodeWat...` |
| 151 | fn | parseGitStatusPaths | (private) | `const parseGitStatusPaths = (output) =>` |
| 158 | fn | hasDirtySourceTree | (private) | `const hasDirtySourceTree = (deps) => {` |
| 172 | fn | isRuntimePostBuildRelevantPath | (private) | `const isRuntimePostBuildRelevantPath = (repoPat...` |
| 194 | fn | hasDirtyRuntimePostBuildInputs | (private) | `const hasDirtyRuntimePostBuildInputs = (deps) => {` |
| 202 | fn | readJsonStamp | (private) | `const readJsonStamp = (filePath, deps) => {` |
| 220 | fn | readBuildStamp | (private) | `const readBuildStamp = (deps) => readJsonStamp(...` |
| 222 | fn | readRuntimePostBuildStamp | (private) | `const readRuntimePostBuildStamp = (deps) => {` |
| 226 | fn | hasSourceMtimeChanged | (private) | `const hasSourceMtimeChanged = (stampMtime, deps...` |
| 241 | fn | findLatestRuntimePostBuildInputMtime | (private) | `const findLatestRuntimePostBuildInputMtime = (a...` |
| 266 | fn | hasRuntimePostBuildInputMtimeChanged | (private) | `const hasRuntimePostBuildInputMtimeChanged = (s...` |
| 278 | fn | resolveRuntimePostBuildDistRoot | (private) | `const resolveRuntimePostBuildDistRoot = (deps) ...` |
| 279 | fn | resolveRuntimePostBuildRuntimeRoot | (private) | `const resolveRuntimePostBuildRuntimeRoot = (dep...` |
| 281 | fn | collectRunNodeBundledPluginBuildEntries | (private) | `const collectRunNodeBundledPluginBuildEntries =...` |
| 288 | fn | resolveBuiltBundledPluginRuntimeEntryPath | (private) | `const resolveBuiltBundledPluginRuntimeEntryPath...` |
| 296 | fn | listBundledPluginRuntimeEntryPaths | (private) | `const listBundledPluginRuntimeEntryPaths = (plu...` |
| 305 | fn | isDirtyBundledPluginPackageEntryChangeWithoutBuiltOutputs | (private) | `const isDirtyBundledPluginPackageEntryChangeWit...` |
| 324 | fn | hasMissingBuiltBundledPluginRuntimeEntryOutput | (private) | `const hasMissingBuiltBundledPluginRuntimeEntryO...` |
| 333 | fn | listBuiltBundledPluginEntries | (private) | `const listBuiltBundledPluginEntries = (deps) => {` |
| 344 | fn | listBuiltBundledPluginRuntimeOverlayDirs | (private) | `const listBuiltBundledPluginRuntimeOverlayDirs ...` |
| 358 | fn | listRequiredBundledPluginMetadataOutputs | (private) | `const listRequiredBundledPluginMetadataOutputs ...` |
| 371 | fn | listRuntimeOverlaySourcePaths | (private) | `const listRuntimeOverlaySourcePaths = (sourceDi...` |
| 402 | fn | listRequiredBundledPluginRuntimeOverlayOutputs | (private) | `const listRequiredBundledPluginRuntimeOverlayOu...` |
| 416 | fn | isSafePluginSdkSubpathSegment | (private) | `const isSafePluginSdkSubpathSegment = (subpath)...` |
| 418 | fn | readPackageJsonPluginSdkAliasFileNames | (private) | `const readPackageJsonPluginSdkAliasFileNames = ...` |
| 443 | fn | listRequiredOpenClawExtensionAliasOutputs | (private) | `const listRequiredOpenClawExtensionAliasOutputs...` |
| 470 | fn | listRequiredStaticExtensionAssetOutputs | (private) | `const listRequiredStaticExtensionAssetOutputs =...` |
| 491 | fn | listRequiredCoreRuntimePostBuildOutputs | (private) | `const listRequiredCoreRuntimePostBuildOutputs =...` |
| 497 | fn | listRequiredRuntimePostBuildOutputs | pub | `export const listRequiredRuntimePostBuildOutput...` |
| 508 | fn | hasMissingRequiredRuntimePostBuildOutput | (private) | `const hasMissingRequiredRuntimePostBuildOutput ...` |
| 514 | fn | resolveBuildRequirement | pub | `export const resolveBuildRequirement = (deps) => {` |
| 572 | fn | resolveRuntimePostBuildRequirement | pub | `export const resolveRuntimePostBuildRequirement...` |
| 648 | fn | formatBuildReason | (private) | `const formatBuildReason = (reason) => BUILD_REA...` |
| 649 | fn | formatRuntimePostBuildReason | (private) | `const formatRuntimePostBuildReason = (reason) =...` |
| 656 | fn | isSignalKey | (private) | `const isSignalKey = (signal) => Object.hasOwn(S...` |
| 658 | fn | getSignalExitCode | (private) | `const getSignalExitCode = (signal) => (isSignal...` |
| 672 | fn | parsePositiveIntegerEnv | (private) | `const parsePositiveIntegerEnv = (env, name, fal...` |
| 681 | fn | resolveRunNodeOutputLogPath | (private) | `const resolveRunNodeOutputLogPath = (deps) => {` |
| 689 | fn | createRunNodeOutputTee | (private) | `const createRunNodeOutputTee = (deps) => {` |
| 748 | fn | logRunner | (private) | `const logRunner = (message, deps) => {` |
| 761 | fn | shouldUseRunNodeProgress | (private) | `const shouldUseRunNodeProgress = (deps) =>` |
| 767 | fn | createRunNodeProgress | (private) | `const createRunNodeProgress = (label, deps) => {` |
| 776 | fn | clearLine | (private) | `const clearLine = () => {` |
| 783 | fn | render | (private) | `const render = () => {` |
| 811 | fn | withRunNodeProgress | (private) | `const withRunNodeProgress = async (deps, label,...` |
| 827 | fn | writeRunnerStream | (private) | `const writeRunnerStream = (deps, stream, chunk)...` |
| 833 | fn | shouldPipeSpawnedOutput | (private) | `const shouldPipeSpawnedOutput = (deps) => Boole...` |
| 835 | fn | sanitizeCpuProfileNamePart | (private) | `const sanitizeCpuProfileNamePart = (value) => {` |
| 844 | fn | parsePositiveInteger | (private) | `const parsePositiveInteger = (value) => {` |
| 849 | fn | listRunNodeCpuProfiles | (private) | `const listRunNodeCpuProfiles = (deps, absoluteP...` |
| 874 | fn | pruneRunNodeCpuProfiles | (private) | `const pruneRunNodeCpuProfiles = (deps, absolute...` |
| 890 | fn | resolveRunNodeCpuProfileArgs | (private) | `const resolveRunNodeCpuProfileArgs = (deps) => {` |
| 911 | fn | resolveRunNodeDiagnosticArgs | (private) | `const resolveRunNodeDiagnosticArgs = (deps) => {` |
| 920 | fn | shouldUseRunNodeChildProcessGroup | (private) | `const shouldUseRunNodeChildProcessGroup = (deps...` |
| 923 | fn | signalSpawnedProcess | (private) | `const signalSpawnedProcess = (childProcess, sig...` |
| 941 | fn | waitForSpawnedProcess | (private) | `const waitForSpawnedProcess = async (childProce...` |
| 947 | fn | cleanupSignals | (private) | `const cleanupSignals = () => {` |
| 959 | fn | forwardSignal | (private) | `const forwardSignal = (signal) => {` |
| 971 | fn | onSigInt | (private) | `const onSigInt = () => {` |
| 974 | fn | onSigTerm | (private) | `const onSigTerm = () => {` |
| 984 | fn | settle | (private) | `const settle = (res) => {` |
| 1008 | fn | getInterruptedSpawnExitCode | (private) | `const getInterruptedSpawnExitCode = (res) => {` |
| 1018 | fn | runOpenClaw | (private) | `const runOpenClaw = async (deps) => {` |
| 1036 | fn | pipeSpawnedOutput | (private) | `const pipeSpawnedOutput = (childProcess, deps, ...` |
| 1065 | fn | createSyncIoTraceStderrFilter | (private) | `const createSyncIoTraceStderrFilter = (deps) => {` |
| 1069 | fn | shouldSuppressLine | (private) | `const shouldSuppressLine = (line) => {` |
| 1089 | fn | writeLine | (private) | `const writeLine = (line) => {` |
| 1118 | fn | closeRunNodeOutputTee | (private) | `const closeRunNodeOutputTee = async (deps, exit...` |
| 1133 | fn | readBuildLockOwnerPid | (private) | `const readBuildLockOwnerPid = (deps, lockDir) => {` |
| 1144 | fn | isBuildLockOwnerDead | (private) | `const isBuildLockOwnerDead = (deps, pid) => {` |
| 1153 | fn | removeStaleBuildLock | (private) | `const removeStaleBuildLock = (deps, lockDir, st...` |
| 1172 | fn | acquireRunNodeBuildLock | pub | `export const acquireRunNodeBuildLock = async (d...` |
| 1192 | fn | consumeWaitLog | (private) | `const consumeWaitLog = () => waitLogBudget-- > 0;` |
| 1216 | fn | removeLockDir | (private) | `const removeLockDir = () => {` |
| 1228 | fn | onSignal | (private) | `const onSignal = () => removeLockDir();` |
| 1229 | fn | onExit | (private) | `const onExit = () => removeLockDir();` |
| 1256 | fn | withRunNodeBuildLock | (private) | `const withRunNodeBuildLock = async (deps, callb...` |
| 1265 | fn | syncRuntimeArtifacts | (private) | `const syncRuntimeArtifacts = async (deps) => {` |
| 1278 | fn | writeRuntimePostBuildStamp | (private) | `const writeRuntimePostBuildStamp = (deps) => {` |
| 1293 | fn | syncRuntimeArtifactsAndStamp | (private) | `const syncRuntimeArtifactsAndStamp = async (dep...` |
| 1301 | fn | writeBuildStamp | (private) | `const writeBuildStamp = (deps) => {` |
| 1314 | fn | shouldSkipWatchRuntimeSync | (private) | `const shouldSkipWatchRuntimeSync = (deps, requi...` |
| 1320 | fn | isGatewayClientCommand | (private) | `const isGatewayClientCommand = (args) =>` |
| 1325 | fn | shouldFastPathExistingDistForGatewayClient | (private) | `const shouldFastPathExistingDistForGatewayClien...` |
| 1331 | fn | canUseStampedGatewayClientDist | (private) | `const canUseStampedGatewayClientDist = (deps) => {` |
| 1361 | fn | isQaParityReportCommand | (private) | `const isQaParityReportCommand = (args) => args[...` |
| 1362 | fn | isQaCoverageReportCommand | (private) | `const isQaCoverageReportCommand = (args) => arg...` |
| 1364 | fn | shouldRunQaParityReportFromSource | (private) | `const shouldRunQaParityReportFromSource = (deps...` |
| 1370 | fn | shouldRunQaCoverageReportFromSource | (private) | `const shouldRunQaCoverageReportFromSource = (de...` |
| 1376 | fn | runQaParityReportFromSource | (private) | `const runQaParityReportFromSource = async (deps...` |
| 1398 | fn | runQaCoverageReportFromSource | (private) | `const runQaCoverageReportFromSource = async (de...` |
| 1423 | fn | runNodeMain | pub | `export async function runNodeMain(params = {}) {` |

## Public API

### `listRequiredRuntimePostBuildOutputs`

```
export const listRequiredRuntimePostBuildOutputs = (deps) => {
```

**Line:** 497 | **Kind:** fn

### `resolveBuildRequirement`

```
export const resolveBuildRequirement = (deps) => {
```

**Line:** 514 | **Kind:** fn

### `resolveRuntimePostBuildRequirement`

```
export const resolveRuntimePostBuildRequirement = (deps) => {
```

**Line:** 572 | **Kind:** fn

### `acquireRunNodeBuildLock`

```
export const acquireRunNodeBuildLock = async (deps) => {
```

**Line:** 1172 | **Kind:** fn

### `runNodeMain`

```
export async function runNodeMain(params = {}) {
```

**Line:** 1423 | **Kind:** fn
