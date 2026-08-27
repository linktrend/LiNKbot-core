# src/agents/cli-runner.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1454
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 92 | fn | setCliRunnerTestDeps | pub | `export function setCliRunnerTestDeps(overrides:...` |
| 97 | fn | restoreCliRunnerTestDeps | pub | `export function restoreCliRunnerTestDeps(): void {` |
| 106 | fn | isClaudeCliProvider | (private) | `function isClaudeCliProvider(provider: string):...` |
| 110 | fn | resolveReusableCliSessionId | (private) | `function resolveReusableCliSessionId(reusableCl...` |
| 116 | fn | shouldRetryFreshCliSessionAfterFailover | (private) | `function shouldRetryFreshCliSessionAfterFailove...` |
| 139 | fn | formatCliEmptyOutputDiagnostics | (private) | `function formatCliEmptyOutputDiagnostics(output...` |
| 159 | fn | isCliBindingFlushed | pub | `export async function isCliBindingFlushed(` |
| 187 | fn | flushSessionManagerTranscript | (private) | `function flushSessionManagerTranscript(sessionM...` |
| 195 | fn | assertSuccessfulCliRuntimeBindingCurrent | (private) | `async function assertSuccessfulCliRuntimeBindin...` |
| 228 | fn | buildCliHookUserMessage | (private) | `function buildCliHookUserMessage(prompt: string...` |
| 236 | fn | buildCliHookAssistantMessage | (private) | `function buildCliHookAssistantMessage(params: {` |
| 260 | fn | isAgentMessage | (private) | `function isAgentMessage(value: unknown): value ...` |
| 264 | fn | buildCliContextEngineUserMessage | (private) | `function buildCliContextEngineUserMessage(promp...` |
| 272 | fn | buildCliContextEngineAssistantMessage | (private) | `function buildCliContextEngineAssistantMessage(...` |
| 287 | type | CliAgentEndHookParams | (private) | - |
| 289 | fn | shouldAwaitCliAgentEndHook | (private) | `function shouldAwaitCliAgentEndHook(params: Run...` |
| 293 | fn | runCliAgentEndHook | (private) | `async function runCliAgentEndHook(` |
| 304 | fn | persistApprovedCliUserTurnTranscript | (private) | `async function persistApprovedCliUserTurnTransc...` |
| 334 | fn | persistCliAssistantTranscript | (private) | `async function persistCliAssistantTranscript(pa...` |
| 390 | fn | notifyCliUserMessagePersisted | (private) | `async function notifyCliUserMessagePersisted(` |
| 402 | fn | finalizeCliContextEngineTurn | (private) | `async function finalizeCliContextEngineTurn(par...` |
| 466 | fn | runCliAgent | pub | `export function runCliAgent(paramsInput: RunCli...` |
| 486 | fn | runCliAgentInternal | (private) | `async function runCliAgentInternal(` |
| 562 | fn | recordCleanupError | (private) | `const recordCleanupError = (error: unknown) => {` |
| 598 | fn | runPreparedCliAgent | pub | `export async function runPreparedCliAgent(` |
| 674 | fn | buildFailedAgentEndEvent | (private) | `const buildFailedAgentEndEvent = (error: string...` |
| 681 | fn | buildBlockedAgentEndEvent | (private) | `const buildBlockedAgentEndEvent = (message: str...` |
| 763 | fn | resolveCliSourceReplyMirror | (private) | `const resolveCliSourceReplyMirror = (` |
| 920 | fn | executeCliAttempt | (private) | `const executeCliAttempt = async (cliSessionIdTo...` |
| 1220 | fn | finishCliAttempt | (private) | `const finishCliAttempt = async (` |

## Public API

### `setCliRunnerTestDeps`

```
export function setCliRunnerTestDeps(overrides: Partial<typeof cliRunnerDeps>): void {
```

**Line:** 92 | **Kind:** fn

### `restoreCliRunnerTestDeps`

```
export function restoreCliRunnerTestDeps(): void {
```

**Line:** 97 | **Kind:** fn

### `isCliBindingFlushed`

```
export async function isCliBindingFlushed(
```

**Line:** 159 | **Kind:** fn

### `runCliAgent`

```
export function runCliAgent(paramsInput: RunCliAgentParams): Promise<EmbeddedAgentRunResult> {
```

**Line:** 466 | **Kind:** fn

### `runPreparedCliAgent`

```
export async function runPreparedCliAgent(
```

**Line:** 598 | **Kind:** fn
