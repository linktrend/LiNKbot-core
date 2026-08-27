# src/agents/cli-runner/claude-live-session.ts

[← Back to Module](../modules/src-agents-cli-runner/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1834
- **Language:** TypeScript
- **Symbols:** 74
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 57 | type | ProcessSupervisor | (private) | - |
| 60 | type | ManagedRun | (private) | - |
| 61 | type | ClaudeLiveTurn | (private) | - |
| 95 | type | ClaudeLiveSession | (private) | - |
| 119 | type | ClaudeLiveSessionCreate | (private) | - |
| 123 | type | ClaudeLiveRunResult | (private) | - |
| 126 | type | ClaudeLiveOutputLimits | (private) | - |
| 127 | type | ClaudeLiveExecPermission | (private) | - |
| 132 | type | ClaudeLiveDiagnosticRefs | (private) | - |
| 138 | type | ClaudeLiveActiveTool | (private) | - |
| 144 | type | ClaudeLiveToolTerminalOutcome | (private) | - |
| 163 | fn | sha256 | (private) | `function sha256(value: string): string {` |
| 168 | fn | resetClaudeLiveSessionsForTest | (private) | `function resetClaudeLiveSessionsForTest(): void {` |
| 177 | fn | hasClaudeLiveSessionForOwner | pub | `export function hasClaudeLiveSessionForOwner(ow...` |
| 182 | fn | getClaudeLiveSessionGenerationForOwner | pub | `export function getClaudeLiveSessionGenerationF...` |
| 189 | fn | waitForManagedRunExit | (private) | `async function waitForManagedRunExit(managedRun...` |
| 210 | fn | closeClaudeLiveSessionForContext | pub | `export async function closeClaudeLiveSessionFor...` |
| 223 | fn | rotateClaudeLiveMcpCaptureKeyForContext | pub | `export async function rotateClaudeLiveMcpCaptur...` |
| 230 | fn | shouldUseClaudeLiveSession | pub | `export function shouldUseClaudeLiveSession(cont...` |
| 240 | fn | upsertArgValue | (private) | `function upsertArgValue(args: string[], flag: s...` |
| 257 | fn | appendArg | (private) | `function appendArg(args: string[], flag: string...` |
| 261 | fn | stripLiveProcessArgs | (private) | `function stripLiveProcessArgs(` |
| 290 | fn | buildClaudeLiveArgs | (private) | `function buildClaudeLiveArgs(params: {` |
| 331 | type | ClaudeLiveSessionOwner | (private) | - |
| 340 | fn | buildClaudeLiveOwnerKey | (private) | `function buildClaudeLiveOwnerKey(owner: ClaudeL...` |
| 344 | fn | buildClaudeLiveKey | (private) | `function buildClaudeLiveKey(context: PreparedCl...` |
| 355 | fn | buildClaudeLiveFingerprint | (private) | `function buildClaudeLiveFingerprint(params: {` |
| 440 | fn | createAbortError | (private) | `function createAbortError(reason?: unknown): Er...` |
| 459 | fn | clearTurnTimers | (private) | `function clearTurnTimers(turn: ClaudeLiveTurn):...` |
| 475 | fn | clearOutstandingBackgroundTasks | (private) | `function clearOutstandingBackgroundTasks(sessio...` |
| 479 | fn | finishTurn | (private) | `function finishTurn(session: ClaudeLiveSession,...` |
| 496 | fn | failTurn | (private) | `function failTurn(session: ClaudeLiveSession, e...` |
| 513 | fn | abortTurn | (private) | `function abortTurn(session: ClaudeLiveSession, ...` |
| 521 | fn | cleanupLiveSession | (private) | `function cleanupLiveSession(session: ClaudeLive...` |
| 530 | fn | closeLiveSession | (private) | `function closeLiveSession(` |
| 558 | fn | scheduleIdleClose | (private) | `function scheduleIdleClose(session: ClaudeLiveS...` |
| 569 | fn | createTimeoutError | (private) | `function createTimeoutError(` |
| 585 | fn | createOutputLimitError | (private) | `function createOutputLimitError(session: Claude...` |
| 594 | fn | diagnosticToolSourceForClaudeLiveTool | (private) | `function diagnosticToolSourceForClaudeLiveTool(...` |
| 598 | fn | claudeLiveDiagnosticBase | (private) | `function claudeLiveDiagnosticBase(turn: ClaudeL...` |
| 607 | fn | emitClaudeLiveProgress | (private) | `function emitClaudeLiveProgress(turn: ClaudeLiv...` |
| 615 | fn | summarizeClaudeLiveToolInput | (private) | `function summarizeClaudeLiveToolInput(input: un...` |
| 641 | fn | markClaudeLiveToolStarted | (private) | `function markClaudeLiveToolStarted(turn: Claude...` |
| 665 | fn | markClaudeLiveToolCompleted | (private) | `function markClaudeLiveToolCompleted(` |
| 720 | fn | markClaudeLiveToolDenied | (private) | `function markClaudeLiveToolDenied(turn: ClaudeL...` |
| 733 | fn | failActiveClaudeLiveTools | (private) | `function failActiveClaudeLiveTools(turn: Claude...` |
| 773 | fn | noteClaudeLiveProgress | (private) | `function noteClaudeLiveProgress(` |
| 793 | fn | armNoOutputTimer | (private) | `function armNoOutputTimer(session: ClaudeLiveSe...` |
| 837 | fn | applyBackgroundTasksChanged | (private) | `function applyBackgroundTasksChanged(` |
| 863 | fn | isClaudeLiveProvisionalSyntheticPlaceholder | (private) | `function isClaudeLiveProvisionalSyntheticPlaceh...` |
| 883 | fn | isClaudeLiveSubstantiveAssistantProgress | (private) | `function isClaudeLiveSubstantiveAssistantProgre...` |
| 900 | fn | deferClaudeLiveSyntheticResult | (private) | `function deferClaudeLiveSyntheticResult(` |
| 928 | fn | noteClaudeLiveContinuationAfterSyntheticPlaceholder | (private) | `function noteClaudeLiveContinuationAfterSynthet...` |
| 944 | fn | resetNoOutputTimer | (private) | `function resetNoOutputTimer(session: ClaudeLive...` |
| 953 | fn | parseSessionId | (private) | `function parseSessionId(parsed: Record<string, ...` |
| 963 | fn | readConfiguredExecPolicy | (private) | `function readConfiguredExecPolicy(context: Prep...` |
| 982 | fn | resolveClaudeLiveExecPermission | (private) | `function resolveClaudeLiveExecPermission(contex...` |
| 1001 | fn | parseClaudeLiveJsonLine | (private) | `function parseClaudeLiveJsonLine(` |
| 1025 | fn | writeClaudeLiveControlResponse | (private) | `function writeClaudeLiveControlResponse(session...` |
| 1033 | fn | handleClaudeLiveControlRequest | (private) | `function handleClaudeLiveControlRequest(` |
| 1081 | fn | handleClaudeLiveLine | (private) | `function handleClaudeLiveLine(session: ClaudeLi...` |
| 1175 | fn | handleClaudeStdout | (private) | `function handleClaudeStdout(session: ClaudeLive...` |
| 1201 | fn | handleClaudeExit | (private) | `function handleClaudeExit(session: ClaudeLiveSe...` |
| 1263 | fn | createClaudeUserInputMessage | (private) | `function createClaudeUserInputMessage(content: ...` |
| 1275 | fn | writeTurnInput | (private) | `async function writeTurnInput(session: ClaudeLi...` |
| 1291 | fn | createClaudeLiveSession | (private) | `async function createClaudeLiveSession(params: {` |
| 1384 | fn | createTurn | (private) | `function createTurn(params: {` |
| 1479 | fn | closeOldestIdleSession | (private) | `function closeOldestIdleSession(): boolean {` |
| 1489 | fn | ensureLiveSessionCapacity | (private) | `function ensureLiveSessionCapacity(key: string,...` |
| 1508 | fn | createRequiredLiveSessionError | (private) | `function createRequiredLiveSessionError(params: {` |
| 1524 | fn | runClaudeLiveSessionTurn | pub | `export async function runClaudeLiveSessionTurn(...` |
| 1575 | fn | cleanup | (private) | `const cleanup = async () => {` |
| 1627 | fn | notifyMcpCaptureReady | (private) | `const notifyMcpCaptureReady = (captureKey: stri...` |
| 1789 | fn | abort | (private) | `const abort = () =>` |

## Public API

### `hasClaudeLiveSessionForOwner`

```
export function hasClaudeLiveSessionForOwner(owner: ClaudeLiveSessionOwner): boolean {
```

**Line:** 177 | **Kind:** fn

### `getClaudeLiveSessionGenerationForOwner`

```
export function getClaudeLiveSessionGenerationForOwner(
```

**Line:** 182 | **Kind:** fn

### `closeClaudeLiveSessionForContext`

```
export async function closeClaudeLiveSessionForContext(
```

**Line:** 210 | **Kind:** fn

### `rotateClaudeLiveMcpCaptureKeyForContext`

```
export async function rotateClaudeLiveMcpCaptureKeyForContext(
```

**Line:** 223 | **Kind:** fn

### `shouldUseClaudeLiveSession`

```
export function shouldUseClaudeLiveSession(context: PreparedCliRunContext): boolean {
```

**Line:** 230 | **Kind:** fn

### `runClaudeLiveSessionTurn`

```
export async function runClaudeLiveSessionTurn(params: {
```

**Line:** 1524 | **Kind:** fn
