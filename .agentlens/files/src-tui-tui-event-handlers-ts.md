# src/tui/tui-event-handlers.ts

[← Back to Module](../modules/src-tui/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1208
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 29 | type | EventHandlerChatLog | (private) | - |
| 44 | type | EventHandlerTui | (private) | - |
| 48 | type | EventHandlerBtwPresenter | (private) | - |
| 55 | fn | formatAbortDiagnostic | (private) | `function formatAbortDiagnostic(value: string | ...` |
| 67 | type | EventHandlerContext | (private) | - |
| 92 | fn | createEventHandlers | pub | `export function createEventHandlers(context: Ev...` |
| 166 | fn | flushPendingHistoryRefreshIfIdle | (private) | `const flushPendingHistoryRefreshIfIdle = () => {` |
| 174 | fn | clearStreamingWatchdog | (private) | `const clearStreamingWatchdog = () => {` |
| 182 | fn | clearPendingTerminalLifecycleError | (private) | `const clearPendingTerminalLifecycleError = (run...` |
| 191 | fn | clearPendingTerminalLifecycleErrors | (private) | `const clearPendingTerminalLifecycleErrors = () ...` |
| 198 | fn | pauseStreamingWatchdog | (private) | `const pauseStreamingWatchdog = () => {` |
| 202 | fn | clearTrackedRunState | (private) | `const clearTrackedRunState = () => {` |
| 228 | fn | armStreamingWatchdog | (private) | `const armStreamingWatchdog = (runId: string) => {` |
| 255 | fn | maybeUnref | (private) | `const maybeUnref = (streamingWatchdogTimer as {...` |
| 261 | fn | pruneRunMap | (private) | `const pruneRunMap = (runs: Map<string, number>)...` |
| 284 | fn | syncSessionKey | (private) | `const syncSessionKey = () => {` |
| 342 | fn | noteSessionRun | (private) | `const noteSessionRun = (runId: string) => {` |
| 347 | fn | markSubmittedRunRegistered | (private) | `const markSubmittedRunRegistered = (runId: stri...` |
| 351 | fn | noteFinalizedRun | (private) | `const noteFinalizedRun = (runId: string, opts?:...` |
| 369 | fn | notePostFinalizingRun | (private) | `const notePostFinalizingRun = (runId: string) => {` |
| 374 | fn | clearActiveRunIfMatch | (private) | `const clearActiveRunIfMatch = (runId: string) => {` |
| 404 | fn | clearStaleStreamingIfNoTrackedRunRemains | (private) | `const clearStaleStreamingIfNoTrackedRunRemains ...` |
| 418 | fn | reconnectStreamingWatchdog | (private) | `const reconnectStreamingWatchdog = () => {` |
| 439 | fn | finalizeRun | (private) | `const finalizeRun = (params: {` |
| 463 | fn | terminateRun | (private) | `const terminateRun = (params: {` |
| 511 | fn | renderTerminalLifecycleError | (private) | `const renderTerminalLifecycleError = (runId: st...` |
| 518 | fn | scheduleTerminalLifecycleError | (private) | `const scheduleTerminalLifecycleError = (runId: ...` |
| 528 | fn | hasConcurrentActiveRun | (private) | `const hasConcurrentActiveRun = (runId: string) ...` |
| 533 | fn | maybeRefreshHistoryForRun | (private) | `const maybeRefreshHistoryForRun = (` |
| 653 | fn | handleChatEvent | (private) | `const handleChatEvent = (payload: unknown) => {` |
| 812 | fn | drainHistoryReloadQueue | (private) | `const drainHistoryReloadQueue = () => {` |
| 820 | fn | finishReload | (private) | `const finishReload = (result: TuiHistoryLoadRes...` |
| 854 | fn | queueHistoryReload | (private) | `const queueHistoryReload = (` |
| 883 | fn | collectTrackedSessionRunIds | (private) | `const collectTrackedSessionRunIds = () => {` |
| 900 | fn | handleSessionsChangedEvent | (private) | `const handleSessionsChangedEvent = (payload: un...` |
| 982 | fn | handleAgentEvent | (private) | `const handleAgentEvent = (payload: unknown) => {` |
| 1140 | fn | handleBtwEvent | (private) | `const handleBtwEvent = (payload: unknown) => {` |
| 1168 | fn | dispose | (private) | `const dispose = () => {` |
| 1182 | fn | consumeCompletedRunForPendingSend | (private) | `const consumeCompletedRunForPendingSend = (runI...` |
| 1193 | fn | isRunObserved | (private) | `const isRunObserved = (runId: string) => sessio...` |

## Public API

### `createEventHandlers`

```
export function createEventHandlers(context: EventHandlerContext) {
```

**Line:** 92 | **Kind:** fn
