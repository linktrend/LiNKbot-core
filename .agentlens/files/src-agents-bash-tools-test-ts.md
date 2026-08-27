# src/agents/bash-tools.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1103
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 100 | type | SpawnInput | (private) | - |
| 107 | fn | immediate | (private) | `const immediate = () =>` |
| 111 | fn | readPathKey | (private) | `const readPathKey = (env?: NodeJS.ProcessEnv) =>` |
| 113 | fn | readEnvPath | (private) | `const readEnvPath = (env?: NodeJS.ProcessEnv) =...` |
| 114 | fn | writeEnvPath | (private) | `const writeEnvPath = (env: NodeJS.ProcessEnv, v...` |
| 117 | fn | extractCommand | (private) | `const extractCommand = (input: SpawnInput) => i...` |
| 118 | fn | parseShellSingleQuoted | (private) | `const parseShellSingleQuoted = (input: string) ...` |
| 138 | fn | unwrapSnapshotEvalCommand | (private) | `const unwrapSnapshotEvalCommand = (command: str...` |
| 148 | fn | splitCommands | (private) | `const splitCommands = (command: string) => {` |
| 158 | fn | applySegmentShellEffects | (private) | `const applySegmentShellEffects = (segment: stri...` |
| 169 | fn | stdoutForSegment | (private) | `const stdoutForSegment = (segment: string, env:...` |
| 182 | fn | commandOutput | (private) | `const commandOutput = (command: string, env?: N...` |
| 265 | fn | shellEcho | (private) | `const shellEcho = (message: string) => (isWin ?...` |
| 280 | fn | nextCallId | (private) | `const nextCallId = () => `call${++callIdCounter}`;` |
| 282 | type | ExecToolInstance | (private) | - |
| 283 | type | ProcessToolInstance | (private) | - |
| 284 | type | ExecToolArgs | (private) | - |
| 285 | type | ProcessToolArgs | (private) | - |
| 286 | type | ExecToolConfig | (private) | - |
| 287 | type | ExecToolRunOptions | (private) | - |
| 288 | type | LabeledCase | (private) | - |
| 292 | fn | createDisallowedElevatedExecTool | (private) | `const createDisallowedElevatedExecTool = (` |
| 300 | fn | createNotifyOnExitExecTool | (private) | `const createNotifyOnExitExecTool = (overrides: ...` |
| 308 | fn | createScopedToolSet | (private) | `const createScopedToolSet = (scopeKey: string) ...` |
| 319 | fn | joinCommands | (private) | `const joinCommands = (commands: string[]) => co...` |
| 320 | fn | normalizeText | (private) | `const normalizeText = (value?: string) =>` |
| 328 | type | ToolTextContent | (private) | - |
| 329 | fn | readTextContent | (private) | `const readTextContent = (content: ToolTextConte...` |
| 331 | fn | readNormalizedTextContent | (private) | `const readNormalizedTextContent = (content: Too...` |
| 333 | fn | readTrimmedLines | (private) | `const readTrimmedLines = (content: ToolTextCont...` |
| 335 | fn | waitOneTurn | (private) | `const waitOneTurn = () =>` |
| 339 | fn | readTotalLines | (private) | `const readTotalLines = (details: unknown) => (d...` |
| 340 | fn | readProcessStatus | (private) | `const readProcessStatus = (details: unknown) =>...` |
| 341 | fn | readProcessStatusOrRunning | (private) | `const readProcessStatusOrRunning = (details: un...` |
| 343 | fn | expectTextContainsValues | (private) | `const expectTextContainsValues = (` |
| 359 | type | ProcessSessionSummary | (private) | - |
| 360 | fn | hasSession | (private) | `const hasSession = (sessions: ProcessSessionSum...` |
| 362 | fn | executeExecTool | (private) | `const executeExecTool = (tool: ExecToolInstance...` |
| 364 | fn | executeExecCommand | (private) | `const executeExecCommand = (` |
| 369 | fn | executeProcessTool | (private) | `const executeProcessTool = (tool: ProcessToolIn...` |
| 371 | type | ProcessPollResult | (private) | - |
| 372 | fn | listProcessSessions | (private) | `async function listProcessSessions(tool: Proces...` |
| 376 | fn | pollProcessSession | (private) | `async function pollProcessSession(params: {` |
| 389 | fn | applyDefaultShellEnv | (private) | `function applyDefaultShellEnv() {` |
| 396 | fn | useCapturedEnv | (private) | `function useCapturedEnv(keys: string[], afterCa...` |
| 409 | fn | waitForCompletion | (private) | `async function waitForCompletion(sessionId: str...` |
| 420 | fn | requireSessionId | (private) | `function requireSessionId(details: { sessionId?...` |
| 426 | fn | requireRunningSessionId | (private) | `const requireRunningSessionId = (result: { deta...` |
| 431 | fn | hasNotifyEventForPrefix | (private) | `function hasNotifyEventForPrefix(prefix: string...` |
| 435 | fn | waitForNotifyEvent | (private) | `async function waitForNotifyEvent(sessionId: st...` |
| 452 | fn | startBackgroundCommand | (private) | `async function startBackgroundCommand(tool: Exe...` |
| 457 | fn | expectNotifyOnExitWake | (private) | `async function expectNotifyOnExitWake(tool: Exe...` |
| 472 | fn | drainNotifyEvents | (private) | `async function drainNotifyEvents(sessionKey = D...` |
| 481 | fn | runBackgroundCommandToCompletion | (private) | `async function runBackgroundCommandToCompletion...` |
| 487 | type | ProcessLogWindow | (private) | - |
| 488 | fn | readProcessLog | (private) | `async function readProcessLog(sessionId: string...` |
| 497 | type | LongLogExpectationCase | (private) | - |
| 504 | type | ShortLogExpectationCase | (private) | - |
| 510 | type | ProcessLogSnapshot | (private) | - |
| 517 | type | DisallowedElevationCase | (private) | - |
| 524 | type | NotifyNoopCase | (private) | - |
| 592 | fn | expectNotifyNoopEvents | (private) | `const expectNotifyNoopEvents = (` |
| 606 | fn | runDisallowedElevationCase | (private) | `const runDisallowedElevationCase = async ({` |
| 627 | fn | runShortLogExpectationCase | (private) | `const runShortLogExpectationCase = async ({` |
| 650 | fn | seedFinishedLogSession | (private) | `const seedFinishedLogSession = (lines: string[]...` |
| 675 | fn | runLongLogExpectationCase | (private) | `const runLongLogExpectationCase = async ({` |
| 694 | fn | runNotifyNoopCase | (private) | `const runNotifyNoopCase = async ({ label, defau...` |
| 820 | fn | drainPendingHeartbeatWakes | (private) | `async function drainPendingHeartbeatWakes(): Pr...` |
