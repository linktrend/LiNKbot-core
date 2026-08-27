# src/cli/update-cli/update-command-service.ts

[← Back to Module](../modules/src-cli-update-cli/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1507
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 83 | fn | isPackageManagerUpdateMode | pub | `export function isPackageManagerUpdateMode(` |
| 89 | fn | shouldPrepareUpdatedInstallRestart | pub | `export function shouldPrepareUpdatedInstallRest...` |
| 112 | fn | shouldUseLegacyProcessRestartAfterUpdate | (private) | `function shouldUseLegacyProcessRestartAfterUpda...` |
| 118 | type | PostUpdateLaunchAgentRecoveryResult | (private) | - |
| 123 | type | PostUpdateLaunchAgentRecoveryDeps | (private) | - |
| 129 | fn | recoverInstalledLaunchAgentAfterUpdate | (private) | `async function recoverInstalledLaunchAgentAfter...` |
| 169 | type | PostUpdateGatewayHealthRecoveryDeps | (private) | - |
| 174 | fn | recoverLaunchAgentAndRecheckGatewayHealth | (private) | `async function recoverLaunchAgentAndRecheckGate...` |
| 210 | fn | hasLoadedLaunchdKeepAliveSupervisor | (private) | `async function hasLoadedLaunchdKeepAliveSupervi...` |
| 222 | fn | formatPostUpdateGatewayRecoveryLine | (private) | `function formatPostUpdateGatewayRecoveryLine(pl...` |
| 244 | fn | formatPostUpdateGatewayRecoveryInstructions | (private) | `function formatPostUpdateGatewayRecoveryInstruc...` |
| 269 | type | PreManagedServiceStop | pub | - |
| 280 | type | WindowsTaskAutoStartRecovery | (private) | - |
| 287 | type | UpdateCommandRecoveryState | pub | - |
| 291 | class | UpdateCommandAbort | pub | - |
| 298 | fn | createAggregateErrorWithCause | pub | `export function createAggregateErrorWithCause(` |
| 306 | type | ManagedServiceRootRedirect | pub | - |
| 312 | fn | formatGatewayAncestryBlockMessage | (private) | `function formatGatewayAncestryBlockMessage(pid:...` |
| 318 | fn | parsePositivePid | (private) | `function parsePositivePid(value: unknown): numb...` |
| 332 | fn | isInheritedGatewayRuntimePid | (private) | `function isInheritedGatewayRuntimePid(` |
| 342 | fn | isGatewayAncestorPid | (private) | `function isGatewayAncestorPid(` |
| 353 | fn | gatewayAncestryBlockMessage | (private) | `function gatewayAncestryBlockMessage(pid: unkno...` |
| 357 | fn | serviceControlStdoutForMode | (private) | `function serviceControlStdoutForMode(jsonMode: ...` |
| 361 | fn | armWindowsTaskAutoStartRecovery | (private) | `function armWindowsTaskAutoStartRecovery(` |
| 365 | fn | unregisterSignalExitBarrier | (private) | `let unregisterSignalExitBarrier = () => {};` |
| 374 | fn | onSignal | (private) | `const onSignal = (exitCode: number) => {` |
| 384 | fn | onSigint | (private) | `const onSigint = () => onSignal(130);` |
| 385 | fn | onSigterm | (private) | `const onSigterm = () => onSignal(143);` |
| 386 | fn | onSigbreak | (private) | `const onSigbreak = () => onSignal(130);` |
| 387 | fn | removeSignalHandlers | (private) | `const removeSignalHandlers = () => {` |
| 393 | fn | complete | (private) | `const complete = () => {` |
| 398 | fn | restore | (private) | `const restore = () => {` |
| 418 | fn | abortWindowsTaskUpdateIfInterrupted | (private) | `async function abortWindowsTaskUpdateIfInterrup...` |
| 432 | fn | maybeSuspendWindowsTaskAutoStartForPackageUpdate | (private) | `async function maybeSuspendWindowsTaskAutoStart...` |
| 464 | fn | maybeResumeWindowsTaskAutoStartAfterPackageUpdate | pub | `export async function maybeResumeWindowsTaskAut...` |
| 476 | fn | restoreWindowsTaskAutoStartOrExit | pub | `export async function restoreWindowsTaskAutoSta...` |
| 491 | fn | maybeStopManagedServiceBeforeMutableUpdate | pub | `export async function maybeStopManagedServiceBe...` |
| 667 | fn | maybeRestartServiceAfterFailedMutableUpdate | pub | `export async function maybeRestartServiceAfterF...` |
| 692 | fn | isRunningInsideGatewayService | (private) | `function isRunningInsideGatewayService(` |
| 702 | fn | shouldBlockMutableUpdateFromGatewayServiceEnv | pub | `export function shouldBlockMutableUpdateFromGat...` |
| 721 | fn | formatCommandFailure | (private) | `function formatCommandFailure(stdout: string, s...` |
| 729 | fn | tryResolveInvocationCwd | pub | `export function tryResolveInvocationCwd(): stri...` |
| 737 | type | PackageRuntimePreflight | (private) | - |
| 743 | fn | resolvePackageRuntimePreflight | pub | `export async function resolvePackageRuntimePref...` |
| 828 | fn | resolvePackageRuntimeForPreflight | (private) | `async function resolvePackageRuntimeForPrefligh...` |
| 844 | fn | resolveServiceRefreshEnv | (private) | `function resolveServiceRefreshEnv(` |
| 867 | fn | disableUpdatedPackageCompileCacheEnv | pub | `export function disableUpdatedPackageCompileCac...` |
| 874 | fn | stripGatewayServiceMarkerEnv | pub | `export function stripGatewayServiceMarkerEnv(en...` |
| 882 | fn | resolveUpdatedInstallCommandEnv | (private) | `function resolveUpdatedInstallCommandEnv(` |
| 889 | fn | resolvePostInstallDoctorEnv | pub | `export function resolvePostInstallDoctorEnv(par...` |
| 911 | fn | resolveUpdatedGatewayRestartPort | pub | `export function resolveUpdatedGatewayRestartPor...` |
| 919 | fn | resolvePostUpdateServiceStateReadEnv | pub | `export function resolvePostUpdateServiceStateRe...` |
| 936 | fn | refreshGatewayServiceEnv | (private) | `async function refreshGatewayServiceEnv(params: {` |
| 975 | fn | runUpdatedInstallGatewayRestart | (private) | `async function runUpdatedInstallGatewayRestart(...` |
| 1012 | fn | tryInstallShellCompletion | pub | `export async function tryInstallShellCompletion...` |
| 1068 | fn | installShellCompletionForUpdate | (private) | `async function installShellCompletionForUpdate(...` |
| 1077 | fn | tryRealpathOrResolve | (private) | `async function tryRealpathOrResolve(value: stri...` |
| 1085 | fn | isNodeExecutable | (private) | `function isNodeExecutable(value: string | undef...` |
| 1090 | fn | resolveManagedServiceNodeRunner | (private) | `function resolveManagedServiceNodeRunner(` |
| 1111 | fn | resolveManagedServiceNodeRunnerOverride | pub | `export async function resolveManagedServiceNode...` |
| 1130 | fn | resolveManagedServicePackageUpdateRoot | pub | `export async function resolveManagedServicePack...` |
| 1156 | fn | gatewayServiceCommandUsesRoot | pub | `export async function gatewayServiceCommandUses...` |
| 1188 | fn | maybeRestartService | pub | `export async function maybeRestartService(param...` |
| 1202 | fn | verifyRestartedGateway | (private) | `const verifyRestartedGateway = async (` |
| 1206 | fn | restartAfterStaleCleanup | (private) | `const restartAfterStaleCleanup = async () => {` |

## Public API

### `isPackageManagerUpdateMode`

```
export function isPackageManagerUpdateMode(
```

**Line:** 83 | **Kind:** fn

### `shouldPrepareUpdatedInstallRestart`

```
export function shouldPrepareUpdatedInstallRestart(params: {
```

**Line:** 89 | **Kind:** fn

### `createAggregateErrorWithCause`

```
export function createAggregateErrorWithCause(
```

**Line:** 298 | **Kind:** fn

### `maybeResumeWindowsTaskAutoStartAfterPackageUpdate`

```
export async function maybeResumeWindowsTaskAutoStartAfterPackageUpdate(
```

**Line:** 464 | **Kind:** fn

### `restoreWindowsTaskAutoStartOrExit`

```
export async function restoreWindowsTaskAutoStartOrExit(
```

**Line:** 476 | **Kind:** fn

### `maybeStopManagedServiceBeforeMutableUpdate`

```
export async function maybeStopManagedServiceBeforeMutableUpdate(params: {
```

**Line:** 491 | **Kind:** fn

### `maybeRestartServiceAfterFailedMutableUpdate`

```
export async function maybeRestartServiceAfterFailedMutableUpdate(params: {
```

**Line:** 667 | **Kind:** fn

### `shouldBlockMutableUpdateFromGatewayServiceEnv`

```
export function shouldBlockMutableUpdateFromGatewayServiceEnv(params: {
```

**Line:** 702 | **Kind:** fn

### `tryResolveInvocationCwd`

```
export function tryResolveInvocationCwd(): string | undefined {
```

**Line:** 729 | **Kind:** fn

### `resolvePackageRuntimePreflight`

```
export async function resolvePackageRuntimePreflight(params: {
```

**Line:** 743 | **Kind:** fn

### `disableUpdatedPackageCompileCacheEnv`

```
export function disableUpdatedPackageCompileCacheEnv(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
```

**Line:** 867 | **Kind:** fn

### `stripGatewayServiceMarkerEnv`

```
export function stripGatewayServiceMarkerEnv(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
```

**Line:** 874 | **Kind:** fn

### `resolvePostInstallDoctorEnv`

```
export function resolvePostInstallDoctorEnv(params?: {
```

**Line:** 889 | **Kind:** fn

### `resolveUpdatedGatewayRestartPort`

```
export function resolveUpdatedGatewayRestartPort(params: {
```

**Line:** 911 | **Kind:** fn

### `resolvePostUpdateServiceStateReadEnv`

```
export function resolvePostUpdateServiceStateReadEnv(params: {
```

**Line:** 919 | **Kind:** fn

### `tryInstallShellCompletion`

```
export async function tryInstallShellCompletion(opts: {
```

**Line:** 1012 | **Kind:** fn

### `resolveManagedServiceNodeRunnerOverride`

```
export async function resolveManagedServiceNodeRunnerOverride(): Promise<string | undefined> {
```

**Line:** 1111 | **Kind:** fn

### `resolveManagedServicePackageUpdateRoot`

```
export async function resolveManagedServicePackageUpdateRoot(params: {
```

**Line:** 1130 | **Kind:** fn

### `gatewayServiceCommandUsesRoot`

```
export async function gatewayServiceCommandUsesRoot(params: {
```

**Line:** 1156 | **Kind:** fn

### `maybeRestartService`

```
export async function maybeRestartService(params: {
```

**Line:** 1188 | **Kind:** fn
