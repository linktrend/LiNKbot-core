# src/daemon/launchd.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1410
- **Language:** TypeScript
- **Symbols:** 72
- **Public symbols:** 19

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | type | StaleOpenClawUpdateLaunchdJob | pub | - |
| 73 | type | OpenClawUpdateLaunchdLabelCandidate | (private) | - |
| 78 | fn | normalizeOpenClawUpdateLaunchdLabel | (private) | `function normalizeOpenClawUpdateLaunchdLabel(la...` |
| 91 | fn | normalizeOpenClawUpdateLaunchdLabelCandidate | (private) | `function normalizeOpenClawUpdateLaunchdLabelCan...` |
| 107 | fn | isCurrentGatewayLaunchdLabel | (private) | `function isCurrentGatewayLaunchdLabel(label: st...` |
| 122 | fn | resolveCurrentOpenClawUpdateLaunchdJobLabel | (private) | `function resolveCurrentOpenClawUpdateLaunchdJob...` |
| 142 | fn | assertValidLaunchAgentLabel | (private) | `function assertValidLaunchAgentLabel(label: str...` |
| 150 | fn | resolveLaunchAgentLabel | (private) | `function resolveLaunchAgentLabel(args?: { env?:...` |
| 158 | fn | resolveLaunchAgentPlistPathForLabel | (private) | `function resolveLaunchAgentPlistPathForLabel(` |
| 166 | fn | resolveLaunchAgentEnvDir | (private) | `function resolveLaunchAgentEnvDir(env: GatewayS...` |
| 170 | fn | resolveLaunchAgentEnvFilePath | (private) | `function resolveLaunchAgentEnvFilePath(env: Gat...` |
| 174 | fn | resolveLaunchAgentEnvWrapperPath | (private) | `function resolveLaunchAgentEnvWrapperPath(env: ...` |
| 178 | fn | shellSingleQuote | (private) | `function shellSingleQuote(value: string): string {` |
| 182 | fn | collectLaunchAgentEnvironmentEntries | (private) | `function collectLaunchAgentEnvironmentEntries(` |
| 197 | fn | buildLaunchAgentEnvironmentFile | (private) | `function buildLaunchAgentEnvironmentFile(entrie...` |
| 205 | fn | buildLaunchAgentEnvironmentWrapper | (private) | `function buildLaunchAgentEnvironmentWrapper(): ...` |
| 217 | fn | resolveLaunchAgentEnvironmentWrapperOverwriteWarnings | (private) | `async function resolveLaunchAgentEnvironmentWra...` |
| 230 | fn | writeLaunchAgentOverwriteWarnings | (private) | `function writeLaunchAgentOverwriteWarnings(` |
| 247 | fn | isLaunchAgentEnvironmentWrapperArgs | (private) | `function isLaunchAgentEnvironmentWrapperArgs(pa...` |
| 261 | fn | prepareLaunchAgentProgramArguments | (private) | `async function prepareLaunchAgentProgramArgumen...` |
| 320 | fn | resolveLaunchAgentPlistPath | pub | `export function resolveLaunchAgentPlistPath(env...` |
| 325 | fn | resolveLaunchAgentEnvironmentReadOptions | (private) | `function resolveLaunchAgentEnvironmentReadOptio...` |
| 333 | fn | readLaunchAgentProgramArguments | pub | `export async function readLaunchAgentProgramArg...` |
| 344 | fn | buildLaunchAgentPlist | (private) | `function buildLaunchAgentPlist({` |
| 372 | fn | execLaunchctl | (private) | `async function execLaunchctl(` |
| 381 | fn | parseLaunchctlListOpenClawUpdateJobs | pub | `export function parseLaunchctlListOpenClawUpdat...` |
| 389 | fn | parseLaunchctlListOpenClawUpdateJobCandidates | (private) | `function parseLaunchctlListOpenClawUpdateJobCan...` |
| 416 | fn | hasOpenClawUpdateLaunchdMarker | (private) | `function hasOpenClawUpdateLaunchdMarker(env: Re...` |
| 420 | fn | isOpenClawUpdateCommandPrefix | (private) | `function isOpenClawUpdateCommandPrefix(programA...` |
| 433 | fn | isOpenClawUpdateProgramArguments | (private) | `function isOpenClawUpdateProgramArguments(progr...` |
| 447 | fn | isLaunchdJobConfirmedOpenClawUpdater | (private) | `async function isLaunchdJobConfirmedOpenClawUpd...` |
| 459 | fn | findStaleOpenClawUpdateLaunchdJobs | pub | `export async function findStaleOpenClawUpdateLa...` |
| 491 | fn | disableOpenClawUpdateLaunchdJobCandidate | (private) | `async function disableOpenClawUpdateLaunchdJobC...` |
| 516 | fn | disableOpenClawUpdateLaunchdJob | pub | `export async function disableOpenClawUpdateLaun...` |
| 531 | fn | disableCurrentOpenClawUpdateLaunchdJob | pub | `export async function disableCurrentOpenClawUpd...` |
| 549 | fn | resolveLaunchAgentGatewayPort | (private) | `async function resolveLaunchAgentGatewayPort(en...` |
| 562 | fn | resolveGuiDomain | (private) | `function resolveGuiDomain(): string {` |
| 569 | fn | throwBootstrapGuiSessionError | (private) | `function throwBootstrapGuiSessionError(params: {` |
| 577 | fn | formatLaunchAgentGuiSessionError | pub | `export function formatLaunchAgentGuiSessionErro...` |
| 592 | fn | writeLaunchAgentActionLine | (private) | `function writeLaunchAgentActionLine(` |
| 606 | fn | bootstrapLaunchAgentOrThrow | (private) | `async function bootstrapLaunchAgentOrThrow(para...` |
| 645 | fn | ensureLaunchAgentPlistReadable | (private) | `async function ensureLaunchAgentPlistReadable(p...` |
| 649 | fn | ensureSecureDirectory | (private) | `async function ensureSecureDirectory(` |
| 667 | fn | ensureLaunchAgentEnvironmentDirectories | (private) | `async function ensureLaunchAgentEnvironmentDire...` |
| 676 | type | LaunchctlPrintInfo | (private) | - |
| 683 | fn | parseLaunchctlPrint | pub | `export function parseLaunchctlPrint(output: str...` |
| 711 | fn | isLaunchAgentLoaded | pub | `export async function isLaunchAgentLoaded(args:...` |
| 718 | fn | launchAgentPlistExists | pub | `export async function launchAgentPlistExists(en...` |
| 728 | fn | readLaunchAgentRuntime | pub | `export async function readLaunchAgentRuntime(` |
| 760 | type | LaunchAgentBootstrapRepairResult | (private) | - |
| 769 | fn | isLaunchctlAlreadyLoaded | (private) | `function isLaunchctlAlreadyLoaded(res: { stdout...` |
| 774 | fn | repairLaunchAgentBootstrap | pub | `export async function repairLaunchAgentBootstra...` |
| 828 | fn | uninstallLaunchAgent | pub | `export async function uninstallLaunchAgent({` |
| 857 | fn | isLaunchctlNotLoaded | (private) | `function isLaunchctlNotLoaded(res: { stdout: st...` |
| 866 | fn | isUnsupportedGuiDomain | (private) | `function isUnsupportedGuiDomain(detail: string)...` |
| 875 | fn | isLaunchctlOperationAlreadyInProgress | (private) | `function isLaunchctlOperationAlreadyInProgress(...` |
| 883 | fn | formatLaunchctlResultDetail | (private) | `function formatLaunchctlResultDetail(res: {` |
| 894 | fn | bootoutLaunchAgentOrThrow | (private) | `async function bootoutLaunchAgentOrThrow(params: {` |
| 910 | type | LaunchAgentProbeResult | (private) | - |
| 916 | fn | probeLaunchAgentState | (private) | `async function probeLaunchAgentState(serviceTar...` |
| 939 | fn | waitForLaunchAgentStopped | (private) | `async function waitForLaunchAgentStopped(servic...` |
| 956 | fn | waitForGatewayPortRelease | (private) | `async function waitForGatewayPortRelease(port: ...` |
| 968 | fn | assertGatewayPortReleasedAfterStop | (private) | `async function assertGatewayPortReleasedAfterSt...` |
| 989 | fn | stopLaunchAgent | pub | `export async function stopLaunchAgent({` |
| 1076 | fn | writeLaunchAgentPlist | (private) | `async function writeLaunchAgentPlist({` |
| 1132 | fn | stageLaunchAgent | pub | `export async function stageLaunchAgent({` |
| 1148 | fn | activateLaunchAgent | (private) | `async function activateLaunchAgent(params: { en...` |
| 1163 | fn | installLaunchAgent | pub | `export async function installLaunchAgent(` |
| 1182 | fn | rewriteLaunchAgentPlistForRestart | (private) | `async function rewriteLaunchAgentPlistForRestart({` |
| 1237 | fn | ensureLaunchAgentLoadedAfterFailure | (private) | `async function ensureLaunchAgentLoadedAfterFail...` |
| 1260 | fn | startLaunchAgent | pub | `export async function startLaunchAgent({` |
| 1298 | fn | restartLaunchAgent | pub | `export async function restartLaunchAgent({` |

## Public API

### `resolveLaunchAgentPlistPath`

```
export function resolveLaunchAgentPlistPath(env: GatewayServiceEnv): string {
```

**Line:** 320 | **Kind:** fn

### `readLaunchAgentProgramArguments`

```
export async function readLaunchAgentProgramArguments(
```

**Line:** 333 | **Kind:** fn

### `parseLaunchctlListOpenClawUpdateJobs`

```
export function parseLaunchctlListOpenClawUpdateJobs(
```

**Line:** 381 | **Kind:** fn

### `findStaleOpenClawUpdateLaunchdJobs`

```
export async function findStaleOpenClawUpdateLaunchdJobs(
```

**Line:** 459 | **Kind:** fn

### `disableOpenClawUpdateLaunchdJob`

```
export async function disableOpenClawUpdateLaunchdJob(
```

**Line:** 516 | **Kind:** fn

### `disableCurrentOpenClawUpdateLaunchdJob`

```
export async function disableCurrentOpenClawUpdateLaunchdJob(
```

**Line:** 531 | **Kind:** fn

### `formatLaunchAgentGuiSessionError`

```
export function formatLaunchAgentGuiSessionError(params: {
```

**Line:** 577 | **Kind:** fn

### `parseLaunchctlPrint`

```
export function parseLaunchctlPrint(output: string): LaunchctlPrintInfo {
```

**Line:** 683 | **Kind:** fn

### `isLaunchAgentLoaded`

```
export async function isLaunchAgentLoaded(args: GatewayServiceEnvArgs): Promise<boolean> {
```

**Line:** 711 | **Kind:** fn

### `launchAgentPlistExists`

```
export async function launchAgentPlistExists(env: GatewayServiceEnv): Promise<boolean> {
```

**Line:** 718 | **Kind:** fn

### `readLaunchAgentRuntime`

```
export async function readLaunchAgentRuntime(
```

**Line:** 728 | **Kind:** fn

### `repairLaunchAgentBootstrap`

```
export async function repairLaunchAgentBootstrap(args: {
```

**Line:** 774 | **Kind:** fn

### `uninstallLaunchAgent`

```
export async function uninstallLaunchAgent({
```

**Line:** 828 | **Kind:** fn

### `stopLaunchAgent`

```
export async function stopLaunchAgent({
```

**Line:** 989 | **Kind:** fn

### `stageLaunchAgent`

```
export async function stageLaunchAgent({
```

**Line:** 1132 | **Kind:** fn

### `installLaunchAgent`

```
export async function installLaunchAgent(
```

**Line:** 1163 | **Kind:** fn

### `startLaunchAgent`

```
export async function startLaunchAgent({
```

**Line:** 1260 | **Kind:** fn

### `restartLaunchAgent`

```
export async function restartLaunchAgent({
```

**Line:** 1298 | **Kind:** fn
