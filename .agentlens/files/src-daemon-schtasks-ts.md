# src/daemon/schtasks.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2132
- **Language:** TypeScript
- **Symbols:** 90
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | fn | resolveTaskName | (private) | `function resolveTaskName(env: GatewayServiceEnv...` |
| 56 | fn | shouldFallbackToStartupEntry | (private) | `function shouldFallbackToStartupEntry(params: {...` |
| 68 | fn | resolveTaskScriptPath | pub | `export function resolveTaskScriptPath(env: Gate...` |
| 72 | fn | resolveWindowsStartupDir | (private) | `function resolveWindowsStartupDir(env: GatewayS...` |
| 93 | fn | sanitizeWindowsFilename | (private) | `function sanitizeWindowsFilename(value: string)...` |
| 97 | fn | resolveStartupEntryPath | (private) | `function resolveStartupEntryPath(env: GatewaySe...` |
| 106 | fn | resolveStartupEntryPaths | (private) | `function resolveStartupEntryPaths(env: GatewayS...` |
| 117 | fn | quoteSchtasksArg | (private) | `function quoteSchtasksArg(value: string): string {` |
| 128 | fn | escapeXmlText | (private) | `function escapeXmlText(value: string): string {` |
| 145 | fn | buildScheduledTaskXml | (private) | `function buildScheduledTaskXml(params: {` |
| 200 | fn | writeTaskXmlTempFile | (private) | `async function writeTaskXmlTempFile(xml: string...` |
| 211 | fn | resolveTaskUser | (private) | `function resolveTaskUser(env: GatewayServiceEnv...` |
| 229 | fn | resolveSchtasksCreateUser | (private) | `function resolveSchtasksCreateUser(env: Gateway...` |
| 239 | fn | shouldUseHiddenWindowsTaskLauncher | (private) | `function shouldUseHiddenWindowsTaskLauncher(env...` |
| 244 | fn | resolveTaskLauncherScriptPath | (private) | `function resolveTaskLauncherScriptPath(env: Gat...` |
| 252 | fn | readScheduledTaskCommand | pub | `export async function readScheduledTaskCommand(` |
| 309 | type | ScheduledTaskInfo | (private) | - |
| 315 | fn | parseSchtasksQuery | (private) | `function parseSchtasksQuery(output: string): Sc...` |
| 335 | fn | normalizeTaskResultCode | (private) | `function normalizeTaskResultCode(value?: string...` |
| 365 | type | WindowsProcessSnapshotEntry | (private) | - |
| 370 | fn | deriveScheduledTaskRuntimeStatus | (private) | `function deriveScheduledTaskRuntimeStatus(parse...` |
| 390 | fn | buildTaskScript | (private) | `function buildTaskScript({` |
| 421 | fn | renderStartupLaunchCommand | (private) | `function renderStartupLaunchCommand(scriptPath:...` |
| 426 | fn | buildStartupLauncherScript | (private) | `function buildStartupLauncherScript(params: { d...` |
| 437 | fn | quoteVbsString | (private) | `function quoteVbsString(value: string): string {` |
| 441 | fn | quoteVbsRunCommand | (private) | `function quoteVbsRunCommand(scriptPath: string)...` |
| 445 | fn | buildHiddenLauncherScript | (private) | `function buildHiddenLauncherScript(params: { de...` |
| 458 | fn | assertSchtasksAvailable | (private) | `async function assertSchtasksAvailable() {` |
| 467 | fn | isStartupEntryInstalled | (private) | `async function isStartupEntryInstalled(env: Gat...` |
| 477 | fn | removeStartupEntries | (private) | `async function removeStartupEntries(` |
| 489 | fn | hasScheduledTaskRunningEvidence | (private) | `async function hasScheduledTaskRunningEvidence(...` |
| 503 | fn | waitForScheduledTaskRunningEvidence | (private) | `async function waitForScheduledTaskRunningEvide...` |
| 516 | fn | isRegisteredScheduledTask | (private) | `async function isRegisteredScheduledTask(env: G...` |
| 526 | fn | launchFallbackTaskScript | (private) | `async function launchFallbackTaskScript(` |
| 557 | fn | resolveConfiguredGatewayPort | (private) | `function resolveConfiguredGatewayPort(env: Gate...` |
| 561 | fn | parsePositivePort | (private) | `function parsePositivePort(raw: string | undefi...` |
| 565 | fn | isNodeHostArgv | (private) | `function isNodeHostArgv(programArguments: strin...` |
| 572 | fn | normalizeProgramArguments | (private) | `function normalizeProgramArguments(programArgum...` |
| 576 | fn | matchesInstalledProgramArguments | (private) | `function matchesInstalledProgramArguments(` |
| 587 | fn | getSnapshotProcessId | (private) | `function getSnapshotProcessId(entry: WindowsPro...` |
| 592 | fn | findInstalledProcessPid | (private) | `function findInstalledProcessPid(` |
| 619 | fn | resolveScheduledTaskProcess | (private) | `async function resolveScheduledTaskProcess(` |
| 651 | fn | resolveScheduledTaskNodeHostProcess | (private) | `async function resolveScheduledTaskNodeHostProc...` |
| 658 | fn | resolveScheduledTaskGatewayProcess | (private) | `async function resolveScheduledTaskGatewayProce...` |
| 667 | fn | shouldManageGatewayListenerPort | (private) | `function shouldManageGatewayListenerPort(env: G...` |
| 671 | fn | resolveScheduledTaskPort | (private) | `async function resolveScheduledTaskPort(env: Ga...` |
| 680 | fn | resolveScheduledTaskGatewayListenerPids | (private) | `async function resolveScheduledTaskGatewayListe...` |
| 705 | fn | resolveGatewayListenerPids | (private) | `function resolveGatewayListenerPids(listeners: ...` |
| 722 | fn | resolveListenerBackedScheduledTaskRuntime | (private) | `async function resolveListenerBackedScheduledTa...` |
| 759 | fn | terminateScheduledTaskNodeHost | (private) | `async function terminateScheduledTaskNodeHost(e...` |
| 768 | fn | terminateScheduledTaskGatewayListeners | (private) | `async function terminateScheduledTaskGatewayLis...` |
| 783 | fn | probeProcessState | (private) | `function probeProcessState(pid: number): "alive...` |
| 809 | fn | waitForProcessExit | (private) | `async function waitForProcessExit(pid: number, ...` |
| 820 | fn | terminateGatewayProcessTree | (private) | `async function terminateGatewayProcessTree(pid:...` |
| 855 | fn | waitForGatewayPortRelease | (private) | `async function waitForGatewayPortRelease(port: ...` |
| 867 | fn | terminateBusyPortListeners | (private) | `async function terminateBusyPortListeners(port:...` |
| 885 | fn | readWindowsProcessSnapshot | (private) | `function readWindowsProcessSnapshot(): WindowsP...` |
| 923 | fn | resolveFallbackRuntime | (private) | `async function resolveFallbackRuntime(` |
| 1055 | fn | assertReplacementPortAvailableForTakeover | (private) | `async function assertReplacementPortAvailableFo...` |
| 1110 | fn | readWindowsStartupFallbackRuntimeForUpdate | pub | `export async function readWindowsStartupFallbac...` |
| 1129 | fn | waitForFallbackTakeoverRuntime | (private) | `async function waitForFallbackTakeoverRuntime(` |
| 1158 | fn | resolveControllableFallbackRuntime | (private) | `async function resolveControllableFallbackRuntime(` |
| 1168 | fn | stopStartupEntry | (private) | `async function stopStartupEntry(` |
| 1181 | fn | terminateInstalledStartupRuntime | (private) | `async function terminateInstalledStartupRuntime...` |
| 1191 | fn | restartStartupEntry | (private) | `async function restartStartupEntry(` |
| 1207 | fn | startStartupEntry | (private) | `async function startStartupEntry(` |
| 1223 | fn | resolveScheduledTaskRenderEnv | (private) | `function resolveScheduledTaskRenderEnv(` |
| 1240 | fn | resolveScheduledTaskScriptEnvironment | (private) | `function resolveScheduledTaskScriptEnvironment(` |
| 1264 | fn | resolveScheduledTaskActivationEnv | (private) | `function resolveScheduledTaskActivationEnv(` |
| 1281 | fn | writeScheduledTaskScript | (private) | `async function writeScheduledTaskScript({` |
| 1324 | fn | stageScheduledTask | pub | `export async function stageScheduledTask({` |
| 1335 | fn | updateExistingScheduledTask | (private) | `async function updateExistingScheduledTask(para...` |
| 1390 | fn | shouldFallbackScheduledTaskLaunch | (private) | `async function shouldFallbackScheduledTaskLaunc...` |
| 1521 | type | ScheduledTaskActivation | (private) | - |
| 1523 | fn | runScheduledTaskOrThrow | (private) | `async function runScheduledTaskOrThrow(params: {` |
| 1543 | fn | activateScheduledTask | (private) | `async function activateScheduledTask(params: {` |
| 1644 | fn | installScheduledTask | pub | `export async function installScheduledTask(` |
| 1735 | fn | uninstallScheduledTask | pub | `export async function uninstallScheduledTask({` |
| 1771 | fn | isTaskNotRunning | (private) | `function isTaskNotRunning(res: { stdout: string...` |
| 1776 | fn | parseScheduledTaskXmlEnabled | (private) | `function parseScheduledTaskXmlEnabled(output: s...` |
| 1787 | fn | probeScheduledTaskExists | (private) | `function probeScheduledTaskExists(taskName: str...` |
| 1816 | fn | changeScheduledTaskEnabledState | (private) | `async function changeScheduledTaskEnabledState(...` |
| 1864 | fn | suspendScheduledTaskAutoStartForUpdate | pub | `export async function suspendScheduledTaskAutoS...` |
| 1870 | fn | resumeScheduledTaskAutoStartAfterUpdate | pub | `export async function resumeScheduledTaskAutoSt...` |
| 1876 | fn | stopScheduledTask | pub | `export async function stopScheduledTask({` |
| 1925 | fn | startScheduledTask | pub | `export async function startScheduledTask({` |
| 1957 | fn | restartRegisteredScheduledTask | (private) | `async function restartRegisteredScheduledTask(p...` |
| 2039 | fn | restartScheduledTask | pub | `export async function restartScheduledTask({` |
| 2075 | fn | isScheduledTaskInstalled | pub | `export async function isScheduledTaskInstalled(...` |
| 2083 | fn | readScheduledTaskRuntime | pub | `export async function readScheduledTaskRuntime(` |

## Public API

### `resolveTaskScriptPath`

```
export function resolveTaskScriptPath(env: GatewayServiceEnv): string {
```

**Line:** 68 | **Kind:** fn

### `readScheduledTaskCommand`

```
export async function readScheduledTaskCommand(
```

**Line:** 252 | **Kind:** fn

### `readWindowsStartupFallbackRuntimeForUpdate`

```
export async function readWindowsStartupFallbackRuntimeForUpdate(
```

**Line:** 1110 | **Kind:** fn

### `stageScheduledTask`

```
export async function stageScheduledTask({
```

**Line:** 1324 | **Kind:** fn

### `installScheduledTask`

```
export async function installScheduledTask(
```

**Line:** 1644 | **Kind:** fn

### `uninstallScheduledTask`

```
export async function uninstallScheduledTask({
```

**Line:** 1735 | **Kind:** fn

### `suspendScheduledTaskAutoStartForUpdate`

```
export async function suspendScheduledTaskAutoStartForUpdate(
```

**Line:** 1864 | **Kind:** fn

### `resumeScheduledTaskAutoStartAfterUpdate`

```
export async function resumeScheduledTaskAutoStartAfterUpdate(
```

**Line:** 1870 | **Kind:** fn

### `stopScheduledTask`

```
export async function stopScheduledTask({
```

**Line:** 1876 | **Kind:** fn

### `startScheduledTask`

```
export async function startScheduledTask({
```

**Line:** 1925 | **Kind:** fn

### `restartScheduledTask`

```
export async function restartScheduledTask({
```

**Line:** 2039 | **Kind:** fn

### `isScheduledTaskInstalled`

```
export async function isScheduledTaskInstalled(args: GatewayServiceEnvArgs): Promise<boolean> {
```

**Line:** 2075 | **Kind:** fn

### `readScheduledTaskRuntime`

```
export async function readScheduledTaskRuntime(
```

**Line:** 2083 | **Kind:** fn
