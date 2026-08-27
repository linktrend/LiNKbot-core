# scripts/e2e/telegram-user-crabbox-proof.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3137
- **Language:** TypeScript
- **Symbols:** 123
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 22 | type | CommandResult | (private) | - |
| 27 | type | GatewaySpawnSpec | (private) | - |
| 33 | type | JsonObject | (private) | - |
| 35 | type | PreviewCrop | (private) | - |
| 37 | type | CrabboxInspect | (private) | - |
| 48 | type | Options | (private) | - |
| 97 | type | FunnelBridge | (private) | - |
| 103 | type | LocalSut | (private) | - |
| 122 | type | SessionFile | (private) | - |
| 174 | fn | readTelegramUserProofLogTailBytes | pub | `export function readTelegramUserProofLogTailByt...` |
| 193 | fn | usageText | (private) | `function usageText() {` |
| 232 | fn | usage | (private) | `function usage(): never {` |
| 236 | fn | expandHome | (private) | `function expandHome(value: string) {` |
| 246 | fn | trimToValue | (private) | `function trimToValue(value: string | undefined) {` |
| 254 | fn | isMissingOptionValue | (private) | `function isMissingOptionValue(value: string) {` |
| 258 | fn | parsePositiveInteger | (private) | `function parsePositiveInteger(value: string, la...` |
| 270 | fn | resolveTelegramProofTimerTimeoutMs | (private) | `function resolveTelegramProofTimerTimeoutMs(val...` |
| 274 | fn | parsePositiveTimerMs | (private) | `function parsePositiveTimerMs(value: string, la...` |
| 278 | fn | parseTcpPort | (private) | `function parseTcpPort(value: string, label: str...` |
| 286 | fn | createTelegramProofRunId | (private) | `function createTelegramProofRunId() {` |
| 290 | fn | parseArgs | pub | `export function parseArgs(argvInput: string[]):...` |
| 348 | fn | readValue | (private) | `const readValue = (options: { repeatable?: bool...` |
| 471 | fn | repoRoot | (private) | `function repoRoot() {` |
| 482 | fn | resolveRepoPath | (private) | `function resolveRepoPath(root: string, value: s...` |
| 491 | fn | readJsonFile | (private) | `function readJsonFile(filePath: string): JsonOb...` |
| 502 | fn | requireString | (private) | `function requireString(source: JsonObject, key:...` |
| 513 | fn | childProcessBaseEnv | (private) | `function childProcessBaseEnv() {` |
| 544 | fn | mockServerEnv | (private) | `function mockServerEnv(params: { mockPort: numb...` |
| 553 | fn | gatewayEnv | (private) | `function gatewayEnv(params: {` |
| 573 | fn | createOpenClawGatewaySpawnSpec | pub | `export function createOpenClawGatewaySpawnSpec(...` |
| 603 | fn | shellQuote | (private) | `function shellQuote(value: string) {` |
| 607 | type | AppendCommandStdoutResult | (private) | - |
| 609 | fn | appendCommandText | (private) | `function appendCommandText(current: string, chu...` |
| 613 | fn | appendCommandTextTail | (private) | `function appendCommandTextTail(current: string,...` |
| 618 | fn | appendCommandStdout | (private) | `function appendCommandStdout(` |
| 630 | fn | appendCommandStderrTail | (private) | `function appendCommandStderrTail(` |
| 638 | fn | commandFailureOutput | (private) | `function commandFailureOutput(stdout: string, s...` |
| 648 | fn | timedOutError | (private) | `function timedOutError(message: string) {` |
| 655 | type | CommandTreeTarget | (private) | - |
| 657 | fn | signalCommandTree | pub | `export function signalCommandTree(` |
| 700 | fn | commandProcessTreeAlive | (private) | `function commandProcessTreeAlive(child: ChildPr...` |
| 712 | fn | waitForCommandProcessTreeExit | (private) | `async function waitForCommandProcessTreeExit(ch...` |
| 725 | fn | finishTimedOutCommandProcessTree | (private) | `async function finishTimedOutCommandProcessTree(` |
| 750 | fn | untrackCommandChild | (private) | `function untrackCommandChild(child: ChildProces...` |
| 756 | fn | signalActiveCommandChildren | (private) | `function signalActiveCommandChildren(signal: No...` |
| 762 | fn | installCommandCleanupHandlers | (private) | `function installCommandCleanupHandlers() {` |
| 778 | fn | runCommand | pub | `export function runCommand(params: {` |
| 812 | fn | clearTimers | (private) | `const clearTimers = () => {` |
| 921 | fn | spawnLogged | (private) | `function spawnLogged(command: string, args: str...` |
| 930 | fn | capture | (private) | `const capture = (chunk: string) => {` |
| 943 | fn | waitForOutput | (private) | `function waitForOutput(` |
| 959 | fn | onData | (private) | `const onData = () => {` |
| 965 | fn | onExit | (private) | `const onExit = (code: number | null) => {` |
| 973 | fn | cleanup | (private) | `const cleanup = () => {` |
| 986 | fn | killTree | (private) | `function killTree(child: ChildProcess | undefin...` |
| 1000 | fn | killPidTree | (private) | `function killPidTree(pid: number | undefined) {` |
| 1013 | fn | spawnDaemon | (private) | `function spawnDaemon(params: {` |
| 1036 | fn | waitForChildExit | (private) | `function waitForChildExit(child: ChildProcess) {` |
| 1046 | fn | readLogTail | pub | `export function readLogTail(logPath: string, ma...` |
| 1068 | fn | waitForLog | pub | `export async function waitForLog(` |
| 1088 | fn | telegram | (private) | `async function telegram(token: string, method: ...` |
| 1092 | fn | drainSutUpdates | (private) | `async function drainSutUpdates(sutToken: string) {` |
| 1124 | fn | sutIdentity | (private) | `async function sutIdentity(sutToken: string) {` |
| 1130 | fn | telegramResultObject | (private) | `function telegramResultObject(value: unknown, l...` |
| 1137 | fn | writeSutConfig | pub | `export function writeSutConfig(params: {` |
| 1254 | type | StartLocalSutDeps | (private) | - |
| 1262 | fn | startLocalSut | pub | `export async function startLocalSut(` |
| 1332 | fn | recordProbeVideo | pub | `export async function recordProbeVideo(params: {` |
| 1374 | fn | startLocalSutDaemon | (private) | `async function startLocalSutDaemon(params: {` |
| 1450 | fn | extractLeaseId | (private) | `function extractLeaseId(output: string) {` |
| 1454 | fn | createCrabboxWarmupArgs | pub | `export function createCrabboxWarmupArgs(` |
| 1478 | fn | warmupCrabbox | (private) | `async function warmupCrabbox(opts: Options, roo...` |
| 1492 | fn | createMotionPreview | (private) | `async function createMotionPreview(params: {` |
| 1522 | fn | previewCrop | (private) | `function previewCrop(opts: Options) {` |
| 1528 | fn | createCroppedMotionPreview | (private) | `async function createCroppedMotionPreview(param...` |
| 1579 | fn | inspectCrabbox | (private) | `async function inspectCrabbox(opts: Options, ro...` |
| 1597 | fn | sshArgs | (private) | `function sshArgs(inspect: CrabboxInspect) {` |
| 1634 | fn | isTransientSshFailure | (private) | `function isTransientSshFailure(error: unknown) {` |
| 1639 | fn | runRemoteCommand | (private) | `async function runRemoteCommand(params: {` |
| 1664 | fn | scpToRemote | (private) | `async function scpToRemote(root: string, inspec...` |
| 1674 | fn | scpFromRemote | (private) | `async function scpFromRemote(root: string, insp...` |
| 1684 | fn | sshRun | (private) | `async function sshRun(` |
| 1701 | fn | renderTailscaleSshProxy | pub | `export function renderTailscaleSshProxy(params:...` |
| 1717 | fn | quote | (private) | `const quote = (value) => "'" + value.replaceAll...` |
| 1726 | fn | startTailscaleFunnelBridge | (private) | `async function startTailscaleFunnelBridge(param...` |
| 1770 | fn | stopTailscaleFunnelBridge | (private) | `async function stopTailscaleFunnelBridge(` |
| 1788 | fn | renderRemoteSetup | pub | `export function renderRemoteSetup(params: { tdl...` |
| 1862 | fn | renderLaunchDesktop | pub | `export function renderLaunchDesktop() {` |
| 1888 | fn | renderAuthorizeDesktop | (private) | `function renderAuthorizeDesktop() {` |
| 1942 | fn | renderSelectDesktopChat | pub | `export function renderSelectDesktopChat(params:...` |
| 1964 | fn | renderRemoteProbe | pub | `export function renderRemoteProbe(params: {` |
| 1994 | fn | writeExecutable | (private) | `async function writeExecutable(filePath: string...` |
| 1999 | fn | requireUserDriverScript | (private) | `function requireUserDriverScript(opts: Options) {` |
| 2007 | fn | prepareRemoteState | (private) | `async function prepareRemoteState(params: { loc...` |
| 2031 | fn | leaseCredential | (private) | `async function leaseCredential(params: { localR...` |
| 2072 | fn | releaseCredential | (private) | `async function releaseCredential(root: string, ...` |
| 2088 | fn | stopCrabbox | (private) | `async function stopCrabbox(root: string, opts: ...` |
| 2097 | fn | buildTargetText | (private) | `function buildTargetText(text: string, sutUsern...` |
| 2108 | fn | summarizeProbe | (private) | `function summarizeProbe(probePath: string) {` |
| 2112 | fn | messageId | (private) | `const messageId = (value: unknown) => {` |
| 2131 | fn | writeReport | (private) | `function writeReport(params: {` |
| 2174 | fn | sessionPath | (private) | `function sessionPath(root: string, opts: Option...` |
| 2180 | fn | writeSession | (private) | `function writeSession(pathname: string, session...` |
| 2196 | fn | isFullArtifactJsonName | (private) | `function isFullArtifactJsonName(name: string) {` |
| 2200 | fn | stageFullSessionArtifacts | pub | `export function stageFullSessionArtifacts(outpu...` |
| 2225 | fn | readSession | (private) | `function readSession(root: string, opts: Option...` |
| 2240 | fn | writeRemoteSessionScripts | (private) | `async function writeRemoteSessionScripts(params: {` |
| 2296 | fn | startRemoteRecording | (private) | `async function startRemoteRecording(root: strin...` |
| 2315 | fn | stopRemoteRecording | (private) | `async function stopRemoteRecording(root: string...` |
| 2333 | fn | terminateRemoteDesktopSession | (private) | `async function terminateRemoteDesktopSession(ro...` |
| 2357 | fn | startSession | (private) | `async function startSession(root: string, opts:...` |
| 2486 | fn | sendSessionProbe | (private) | `async function sendSessionProbe(root: string, o...` |
| 2514 | fn | runSessionCommand | (private) | `async function runSessionCommand(root: string, ...` |
| 2525 | fn | screenshotSession | (private) | `async function screenshotSession(root: string, ...` |
| 2550 | fn | statusSession | (private) | `async function statusSession(root: string, opts...` |
| 2565 | fn | telegramPrivatePostLink | (private) | `function telegramPrivatePostLink(groupId: strin...` |
| 2572 | fn | renderProofViewCommand | (private) | `function renderProofViewCommand(link: string) {` |
| 2596 | fn | viewSession | (private) | `async function viewSession(root: string, opts: ...` |
| 2619 | fn | finishSession | (private) | `async function finishSession(root: string, opts...` |
| 2645 | fn | terminateDesktopSession | (private) | `const terminateDesktopSession = async () => {` |
| 2768 | fn | publishSessionArtifacts | (private) | `async function publishSessionArtifacts(root: st...` |
| 2826 | fn | main | (private) | `async function main() {` |
| 3126 | fn | isMainModule | (private) | `function isMainModule(): boolean {` |

## Public API

### `readTelegramUserProofLogTailBytes`

```
export function readTelegramUserProofLogTailBytes(env: NodeJS.ProcessEnv = process.env): number {
```

**Line:** 174 | **Kind:** fn

### `parseArgs`

```
export function parseArgs(argvInput: string[]): Options {
```

**Line:** 290 | **Kind:** fn

### `createOpenClawGatewaySpawnSpec`

```
export function createOpenClawGatewaySpawnSpec(params: {
```

**Line:** 573 | **Kind:** fn

### `signalCommandTree`

```
export function signalCommandTree(
```

**Line:** 657 | **Kind:** fn

### `runCommand`

```
export function runCommand(params: {
```

**Line:** 778 | **Kind:** fn

### `readLogTail`

```
export function readLogTail(logPath: string, maxBytes = LOG_READY_TAIL_BYTES): string {
```

**Line:** 1046 | **Kind:** fn

### `waitForLog`

```
export async function waitForLog(
```

**Line:** 1068 | **Kind:** fn

### `writeSutConfig`

```
export function writeSutConfig(params: {
```

**Line:** 1137 | **Kind:** fn

### `startLocalSut`

```
export async function startLocalSut(
```

**Line:** 1262 | **Kind:** fn

### `recordProbeVideo`

```
export async function recordProbeVideo(params: {
```

**Line:** 1332 | **Kind:** fn

### `createCrabboxWarmupArgs`

```
export function createCrabboxWarmupArgs(
```

**Line:** 1454 | **Kind:** fn

### `renderTailscaleSshProxy`

```
export function renderTailscaleSshProxy(params: { gatewayPort: number; inspect: CrabboxInspect }) {
```

**Line:** 1701 | **Kind:** fn

### `renderRemoteSetup`

```
export function renderRemoteSetup(params: { tdlibSha256?: string; tdlibUrl?: string }) {
```

**Line:** 1788 | **Kind:** fn

### `renderLaunchDesktop`

```
export function renderLaunchDesktop() {
```

**Line:** 1862 | **Kind:** fn

### `renderSelectDesktopChat`

```
export function renderSelectDesktopChat(params: { chatTitle: string }) {
```

**Line:** 1942 | **Kind:** fn

### `renderRemoteProbe`

```
export function renderRemoteProbe(params: {
```

**Line:** 1964 | **Kind:** fn

### `stageFullSessionArtifacts`

```
export function stageFullSessionArtifacts(outputDir: string) {
```

**Line:** 2200 | **Kind:** fn
