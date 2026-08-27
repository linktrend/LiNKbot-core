# extensions/browser/src/browser/chrome.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1456
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 108 | fn | exists | (private) | `function exists(filePath: string) {` |
| 116 | fn | diagnosticShowsChromeHttpDiscovery | (private) | `function diagnosticShowsChromeHttpDiscovery(dia...` |
| 126 | type | ChromeLaunchStderrSignals | (private) | - |
| 131 | fn | createChromeLaunchStderrDiagnostics | (private) | `function createChromeLaunchStderrDiagnostics(ma...` |
| 139 | fn | updateSignals | (private) | `const updateSignals = (chunkText: string) => {` |
| 169 | fn | processExists | (private) | `function processExists(pid: number): boolean {` |
| 184 | fn | readSingletonLockTarget | (private) | `function readSingletonLockTarget(userDataDir: s...` |
| 203 | fn | readLinuxProcessStartTime | (private) | `function readLinuxProcessStartTime(pid: number)...` |
| 215 | fn | readLinuxProcessArgv | (private) | `function readLinuxProcessArgv(pid: number): str...` |
| 229 | fn | readPsCommandLine | (private) | `function readPsCommandLine(pid: number): string...` |
| 245 | fn | readPsStartTime | (private) | `function readPsStartTime(pid: number): string |...` |
| 261 | fn | readManagedProcessCommandLine | (private) | `function readManagedProcessCommandLine(pid: num...` |
| 292 | fn | isChromeExecutableFamilyMatch | (private) | `function isChromeExecutableFamilyMatch(commandT...` |
| 317 | fn | processCommandHasArg | (private) | `function processCommandHasArg(` |
| 327 | fn | commandLineMatchesManagedChrome | (private) | `function commandLineMatchesManagedChrome(params: {` |
| 340 | fn | parseLinuxTcpListenInodesForPort | (private) | `function parseLinuxTcpListenInodesForPort(table...` |
| 356 | fn | readLinuxTcpListenInodesForPort | (private) | `function readLinuxTcpListenInodesForPort(port: ...` |
| 373 | fn | linuxPidOwnsAnySocketInode | (private) | `function linuxPidOwnsAnySocketInode(pid: number...` |
| 398 | fn | linuxPidListensOnPort | (private) | `function linuxPidListensOnPort(pid: number, por...` |
| 402 | fn | lsofShowsPidListeningOnPort | (private) | `function lsofShowsPidListeningOnPort(pid: numbe...` |
| 415 | fn | pidListensOnPort | (private) | `function pidListensOnPort(pid: number, port: nu...` |
| 425 | type | ManagedChromeProcessIdentity | (private) | - |
| 431 | fn | sameManagedChromeIdentity | (private) | `function sameManagedChromeIdentity(` |
| 438 | fn | readOwnedManagedChromeIdentity | (private) | `function readOwnedManagedChromeIdentity(params: {` |
| 466 | fn | isPortInUseError | (private) | `function isPortInUseError(err: unknown): boolean {` |
| 477 | fn | readCurrentHostSingletonPid | (private) | `function readCurrentHostSingletonPid(userDataDi...` |
| 485 | fn | clearChromeSingletonArtifacts | (private) | `function clearChromeSingletonArtifacts(userData...` |
| 496 | fn | clearStaleChromeSingletonLocks | (private) | `function clearStaleChromeSingletonLocks(userDat...` |
| 520 | fn | waitForChromeProcessExit | (private) | `async function waitForChromeProcessExit(proc: C...` |
| 527 | fn | cleanup | (private) | `const cleanup = () => {` |
| 536 | fn | onExit | (private) | `const onExit = () => {` |
| 548 | fn | signalChromeProcess | (private) | `async function signalChromeProcess(` |
| 564 | fn | terminateChromeForRetry | (private) | `async function terminateChromeForRetry(proc: Ch...` |
| 572 | fn | waitForPidExit | (private) | `async function waitForPidExit(pid: number, time...` |
| 585 | fn | terminateOwnedStaleChromeProcess | (private) | `async function terminateOwnedStaleChromeProcess(` |
| 594 | fn | readCurrentIdentity | (private) | `const readCurrentIdentity = () =>` |
| 625 | fn | clearRecoveredChromeSingletonArtifacts | (private) | `function clearRecoveredChromeSingletonArtifacts...` |
| 634 | fn | recoverOwnedStaleManagedChromeCdpListener | (private) | `async function recoverOwnedStaleManagedChromeCd...` |
| 687 | fn | ensureManagedChromePortAvailable | (private) | `async function ensureManagedChromePortAvailable(` |
| 695 | fn | ensureProbeHostsAvailable | (private) | `const ensureProbeHostsAvailable = async () => {` |
| 718 | fn | chromeLaunchHints | (private) | `function chromeLaunchHints(params: {` |
| 754 | type | RunningChrome | pub | - |
| 770 | class | ManagedChromeCleanupError | pub | - |
| 782 | fn | resolveBrowserExecutable | (private) | `function resolveBrowserExecutable(` |
| 793 | fn | resolveOpenClawUserDataDir | pub | `export function resolveOpenClawUserDataDir(prof...` |
| 797 | fn | cdpUrlForPort | (private) | `function cdpUrlForPort(cdpPort: number) {` |
| 802 | fn | buildOpenClawChromeLaunchArgs | (private) | `function buildOpenClawChromeLaunchArgs(params: {` |
| 854 | fn | canOpenWebSocket | (private) | `async function canOpenWebSocket(url: string, ti...` |
| 867 | fn | isChromeReachable | pub | `export async function isChromeReachable(` |
| 899 | fn | fetchChromeVersion | (private) | `async function fetchChromeVersion(` |
| 912 | fn | getChromeWebSocketUrl | pub | `export async function getChromeWebSocketUrl(` |
| 952 | fn | isChromeCdpReady | pub | `export async function isChromeCdpReady(` |
| 965 | type | ManagedBrowserLaunchOptions | (private) | - |
| 967 | fn | waitForManagedLaunchPoll | (private) | `async function waitForManagedLaunchPoll(delayMs...` |
| 978 | fn | launchOpenClawChrome | pub | `export async function launchOpenClawChrome(` |
| 1053 | fn | spawnOnce | (private) | `const spawnOnce = async (onStderr?: (chunk: Buf...` |
| 1083 | fn | onAbort | (private) | `const onAbort = () => {` |
| 1209 | fn | onStderr | (private) | `const onStderr = (chunk: Buffer | string) => {` |
| 1335 | fn | cdpProcessListOwnsBrowser | (private) | `function cdpProcessListOwnsBrowser(result: unkn...` |
| 1353 | fn | isChromeCdpOwnedByPid | pub | `export async function isChromeCdpOwnedByPid(` |
| 1382 | fn | requestGracefulChromeClose | (private) | `async function requestGracefulChromeClose(` |
| 1427 | fn | stopOpenClawChrome | pub | `export async function stopOpenClawChrome(` |

## Public API

### `resolveOpenClawUserDataDir`

```
export function resolveOpenClawUserDataDir(profileName = DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME) {
```

**Line:** 793 | **Kind:** fn

### `isChromeReachable`

```
export async function isChromeReachable(
```

**Line:** 867 | **Kind:** fn

### `getChromeWebSocketUrl`

```
export async function getChromeWebSocketUrl(
```

**Line:** 912 | **Kind:** fn

### `isChromeCdpReady`

```
export async function isChromeCdpReady(
```

**Line:** 952 | **Kind:** fn

### `launchOpenClawChrome`

```
export async function launchOpenClawChrome(
```

**Line:** 978 | **Kind:** fn

### `isChromeCdpOwnedByPid`

```
export async function isChromeCdpOwnedByPid(
```

**Line:** 1353 | **Kind:** fn

### `stopOpenClawChrome`

```
export async function stopOpenClawChrome(
```

**Line:** 1427 | **Kind:** fn
