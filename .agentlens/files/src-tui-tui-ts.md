# src/tui/tui.ts

[← Back to Module](../modules/src-tui/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1764
- **Language:** TypeScript
- **Symbols:** 75
- **Public symbols:** 23

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 107 | type | RunTuiOptions | (private) | - |
| 121 | fn | resolveCodexCliBin | pub | `export async function resolveCodexCliBin(): Pro...` |
| 140 | fn | resolveLocalAuthCliInvocation | pub | `export function resolveLocalAuthCliInvocation(p...` |
| 162 | fn | resolveLocalAuthSpawnInvocation | pub | `export function resolveLocalAuthSpawnInvocation...` |
| 182 | fn | resolveLocalAuthSpawnCwd | pub | `export function resolveLocalAuthSpawnCwd(params...` |
| 199 | fn | resolveTuiSessionKey | pub | `export function resolveTuiSessionKey(params: {` |
| 224 | fn | resolveInitialTuiAgentId | pub | `export function resolveInitialTuiAgentId(params: {` |
| 244 | fn | resolveGatewayDisconnectState | pub | `export function resolveGatewayDisconnectState(r...` |
| 267 | fn | createBackspaceDeduper | pub | `export function createBackspaceDeduper(params?:...` |
| 285 | fn | isIgnorableTuiStopError | pub | `export function isIgnorableTuiStopError(error: ...` |
| 299 | fn | stopTuiSafely | pub | `export function stopTuiSafely(stop: () => void)...` |
| 309 | type | TerminalLossEmitter | (private) | - |
| 314 | fn | isTuiTerminalLossError | pub | `export function isTuiTerminalLossError(error: u...` |
| 330 | fn | installTuiTerminalLossExitHandler | pub | `export function installTuiTerminalLossExitHandler(` |
| 364 | fn | createDeferredTuiFinish | pub | `export function createDeferredTuiFinish(): {` |
| 392 | type | DrainableTui | (private) | - |
| 404 | type | TuiProcessExitTimer | (private) | - |
| 408 | type | TuiProcessExitTimeout | (private) | - |
| 410 | type | TuiShutdownTask | (private) | - |
| 412 | fn | beginTuiShutdown | pub | `export function beginTuiShutdown(params: {` |
| 449 | fn | createTuiSignalHandlers | pub | `export function createTuiSignalHandlers(params: {` |
| 464 | fn | drainAndStopTuiSafely | pub | `export async function drainAndStopTuiSafely(tui...` |
| 484 | fn | isTuiBusyActivityStatus | pub | `export function isTuiBusyActivityStatus(status:...` |
| 488 | fn | resolveTuiToolsToggleActivityStatus | pub | `export function resolveTuiToolsToggleActivitySt...` |
| 499 | fn | resolveTuiShutdownHardExitMs | pub | `export function resolveTuiShutdownHardExitMs(pa...` |
| 503 | fn | scheduleProcessExitAfterTuiReturn | pub | `export function scheduleProcessExitAfterTuiReturn(` |
| 533 | type | CtrlCAction | (private) | - |
| 534 | type | TuiCtrlCAction | (private) | - |
| 536 | fn | resolveCtrlCAction | pub | `export function resolveCtrlCAction(params: {` |
| 561 | fn | resolveTuiCtrlCAction | pub | `export function resolveTuiCtrlCAction(params: {` |
| 578 | fn | resolveEmptySessionInfoDefaults | (private) | `function resolveEmptySessionInfoDefaults(config...` |
| 584 | fn | runTui | pub | `export async function runTui(opts: RunTuiOption...` |
| 588 | fn | resolveUsableCwd | (private) | `const resolveUsableCwd = () => tryProcessCwd() ...` |
| 763 | fn | noteLocalRunId | (private) | `const noteLocalRunId = (runId: string) => {` |
| 776 | fn | forgetLocalRunId | (private) | `const forgetLocalRunId = (runId: string) => {` |
| 780 | fn | isLocalRunId | (private) | `const isLocalRunId = (runId: string) => localRu...` |
| 782 | fn | clearLocalRunIds | (private) | `const clearLocalRunIds = () => {` |
| 786 | fn | noteLocalBtwRunId | (private) | `const noteLocalBtwRunId = (runId: string) => {` |
| 799 | fn | forgetLocalBtwRunId | (private) | `const forgetLocalBtwRunId = (runId: string) => {` |
| 803 | fn | isLocalBtwRunId | (private) | `const isLocalBtwRunId = (runId: string) => loca...` |
| 805 | fn | clearLocalBtwRunIds | (private) | `const clearLocalBtwRunIds = () => {` |
| 856 | fn | resolveDynamicSlashCommandsKey | (private) | `const resolveDynamicSlashCommandsKey = () => cu...` |
| 858 | fn | applyAutocompleteProvider | (private) | `const applyAutocompleteProvider = () => {` |
| 876 | fn | clearDynamicSlashCommandsRefreshTimer | (private) | `const clearDynamicSlashCommandsRefreshTimer = (...` |
| 884 | fn | refreshDynamicSlashCommands | (private) | `const refreshDynamicSlashCommands = () => {` |
| 924 | fn | scheduleDynamicSlashCommandsRefresh | (private) | `const scheduleDynamicSlashCommandsRefresh = () ...` |
| 936 | fn | updateAutocompleteProvider | (private) | `const updateAutocompleteProvider = () => {` |
| 944 | fn | formatSessionKey | (private) | `const formatSessionKey = (key: string) => {` |
| 952 | fn | formatAgentLabel | (private) | `const formatAgentLabel = (id: string) => {` |
| 957 | fn | resolveSessionKey | (private) | `const resolveSessionKey = (raw?: string) => {` |
| 968 | fn | buildLastSessionScopeKeyFor | (private) | `const buildLastSessionScopeKeyFor = (sessionKey...` |
| 977 | fn | rememberCurrentSessionKey | (private) | `const rememberCurrentSessionKey = (sessionKey: ...` |
| 988 | fn | restoreRememberedSession | (private) | `const restoreRememberedSession = async () => {` |
| 1029 | fn | updateHeader | (private) | `const updateHeader = () => {` |
| 1043 | fn | formatElapsed | (private) | `const formatElapsed = (startMs: number) => {` |
| 1053 | fn | ensureStatusText | (private) | `const ensureStatusText = () => {` |
| 1064 | fn | ensureStatusLoader | (private) | `const ensureStatusLoader = () => {` |
| 1083 | fn | updateBusyStatusMessage | (private) | `const updateBusyStatusMessage = () => {` |
| 1106 | fn | startStatusTimer | (private) | `const startStatusTimer = () => {` |
| 1118 | fn | stopStatusTimer | (private) | `const stopStatusTimer = () => {` |
| 1126 | fn | stopStatusTimeout | (private) | `const stopStatusTimeout = () => {` |
| 1134 | fn | startWaitingTimer | (private) | `const startWaitingTimer = () => {` |
| 1155 | fn | stopWaitingTimer | (private) | `const stopWaitingTimer = () => {` |
| 1164 | fn | renderStatus | (private) | `const renderStatus = () => {` |
| 1192 | fn | setConnectionStatus | (private) | `const setConnectionStatus = (text: string, ttlM...` |
| 1212 | fn | setActivityStatus | (private) | `const setActivityStatus = (text: string) => {` |
| 1278 | fn | updateFooter | (private) | `const updateFooter = () => {` |
| 1324 | fn | initialSessionAgentId | (private) | `const initialSessionAgentId = (() => {` |
| 1399 | fn | forceExit | (private) | `const forceExit = () => {` |
| 1407 | fn | requestExit | (private) | `const requestExit = (result?: Partial<TuiResult...` |
| 1480 | fn | admitChatMessage | (private) | `const admitChatMessage = (message: string) =>` |
| 1487 | fn | notifyBlockedChatSubmit | (private) | `const notifyBlockedChatSubmit = (` |
| 1499 | fn | notifySubmitError | (private) | `const notifySubmitError = (action: TuiSubmitAct...` |
| 1526 | fn | handleCtrlC | (private) | `const handleCtrlC = () => {` |
| 1741 | fn | finish | (private) | `const finish = () => {` |

## Public API

### `resolveCodexCliBin`

```
export async function resolveCodexCliBin(): Promise<string | null> {
```

**Line:** 121 | **Kind:** fn

### `resolveLocalAuthCliInvocation`

```
export function resolveLocalAuthCliInvocation(params?: {
```

**Line:** 140 | **Kind:** fn

### `resolveLocalAuthSpawnInvocation`

```
export function resolveLocalAuthSpawnInvocation(params: {
```

**Line:** 162 | **Kind:** fn

### `resolveLocalAuthSpawnCwd`

```
export function resolveLocalAuthSpawnCwd(params: { args: string[]; defaultCwd?: string }): string {
```

**Line:** 182 | **Kind:** fn

### `resolveTuiSessionKey`

```
export function resolveTuiSessionKey(params: {
```

**Line:** 199 | **Kind:** fn

### `resolveInitialTuiAgentId`

```
export function resolveInitialTuiAgentId(params: {
```

**Line:** 224 | **Kind:** fn

### `resolveGatewayDisconnectState`

```
export function resolveGatewayDisconnectState(reason?: string): {
```

**Line:** 244 | **Kind:** fn

### `createBackspaceDeduper`

```
export function createBackspaceDeduper(params?: { dedupeWindowMs?: number; now?: () => number }) {
```

**Line:** 267 | **Kind:** fn

### `isIgnorableTuiStopError`

```
export function isIgnorableTuiStopError(error: unknown): boolean {
```

**Line:** 285 | **Kind:** fn

### `stopTuiSafely`

```
export function stopTuiSafely(stop: () => void): void {
```

**Line:** 299 | **Kind:** fn

### `isTuiTerminalLossError`

```
export function isTuiTerminalLossError(error: unknown): boolean {
```

**Line:** 314 | **Kind:** fn

### `installTuiTerminalLossExitHandler`

```
export function installTuiTerminalLossExitHandler(
```

**Line:** 330 | **Kind:** fn

### `createDeferredTuiFinish`

```
export function createDeferredTuiFinish(): {
```

**Line:** 364 | **Kind:** fn

### `beginTuiShutdown`

```
export function beginTuiShutdown(params: {
```

**Line:** 412 | **Kind:** fn

### `createTuiSignalHandlers`

```
export function createTuiSignalHandlers(params: {
```

**Line:** 449 | **Kind:** fn

### `drainAndStopTuiSafely`

```
export async function drainAndStopTuiSafely(tui: DrainableTui): Promise<void> {
```

**Line:** 464 | **Kind:** fn

### `isTuiBusyActivityStatus`

```
export function isTuiBusyActivityStatus(status: string): boolean {
```

**Line:** 484 | **Kind:** fn

### `resolveTuiToolsToggleActivityStatus`

```
export function resolveTuiToolsToggleActivityStatus(params: {
```

**Line:** 488 | **Kind:** fn

### `resolveTuiShutdownHardExitMs`

```
export function resolveTuiShutdownHardExitMs(params: { localMode?: boolean } = {}): number {
```

**Line:** 499 | **Kind:** fn

### `scheduleProcessExitAfterTuiReturn`

```
export function scheduleProcessExitAfterTuiReturn(
```

**Line:** 503 | **Kind:** fn

### `resolveCtrlCAction`

```
export function resolveCtrlCAction(params: {
```

**Line:** 536 | **Kind:** fn

### `resolveTuiCtrlCAction`

```
export function resolveTuiCtrlCAction(params: {
```

**Line:** 561 | **Kind:** fn

### `runTui`

```
export async function runTui(opts: RunTuiOptions): Promise<TuiResult> {
```

**Line:** 584 | **Kind:** fn
