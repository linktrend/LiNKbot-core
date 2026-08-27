# packages/agent-core/src/agent-loop.ts

[← Back to Module](../modules/packages-agent-core-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1160
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | AgentEventSink | pub | - |
| 44 | type | AssistantMessageUpdateEvent | (private) | - |
| 60 | fn | appendTextDeltaToAssistantMessage | (private) | `function appendTextDeltaToAssistantMessage(` |
| 74 | fn | resolveAssistantMessageUpdate | (private) | `function resolveAssistantMessageUpdate(` |
| 87 | fn | removeNonExecutableToolCalls | (private) | `function removeNonExecutableToolCalls(message: ...` |
| 95 | fn | ensureToolTurnIdentity | (private) | `function ensureToolTurnIdentity(message: Assist...` |
| 107 | fn | agentLoop | pub | `export function agentLoop(` |
| 146 | fn | agentLoopContinue | pub | `export function agentLoopContinue(` |
| 185 | fn | runAgentLoop | pub | `export async function runAgentLoop(` |
| 212 | fn | runAgentLoopContinue | pub | `export async function runAgentLoopContinue(` |
| 239 | fn | createAgentStream | (private) | `function createAgentStream(): EventStream<Agent...` |
| 246 | fn | pushLoopFailure | (private) | `function pushLoopFailure(` |
| 270 | fn | runLoop | (private) | `async function runLoop(` |
| 456 | fn | streamAssistantResponse | (private) | `async function streamAssistantResponse(` |
| 563 | fn | executeToolCalls | (private) | `async function executeToolCalls(` |
| 614 | type | ExecutedToolCallBatch | (private) | - |
| 619 | type | ResolvedToolCallOutcome | (private) | - |
| 623 | fn | hidesToolCallFromChannelProgress | (private) | `function hidesToolCallFromChannelProgress(` |
| 636 | fn | executeToolCallsSequential | (private) | `async function executeToolCallsSequential(` |
| 714 | fn | executeToolCallsParallel | (private) | `async function executeToolCallsParallel(` |
| 803 | type | PreparedToolCall | (private) | - |
| 810 | type | ImmediateToolCallOutcome | (private) | - |
| 817 | type | ExecutedToolCallOutcome | (private) | - |
| 823 | type | FinalizedToolCallOutcome | (private) | - |
| 832 | type | FinalizedToolCallEntry | (private) | - |
| 834 | fn | shouldTerminateToolBatch | (private) | `function shouldTerminateToolBatch(finalizedCall...` |
| 841 | fn | prepareToolCallArguments | (private) | `function prepareToolCallArguments(tool: AgentTo...` |
| 855 | fn | resolveToolCallTool | (private) | `async function resolveToolCallTool(` |
| 899 | fn | prepareToolCall | (private) | `async function prepareToolCall(` |
| 1008 | fn | executePreparedToolCall | (private) | `async function executePreparedToolCall(` |
| 1070 | fn | finalizeExecutedToolCall | (private) | `async function finalizeExecutedToolCall(` |
| 1118 | fn | createErrorToolResult | (private) | `function createErrorToolResult(message: string)...` |
| 1125 | fn | emitToolExecutionEnd | (private) | `async function emitToolExecutionEnd(` |
| 1141 | fn | createToolResultMessage | (private) | `function createToolResultMessage(finalized: Fin...` |
| 1153 | fn | emitToolResultMessage | (private) | `async function emitToolResultMessage(` |

## Public API

### `agentLoop`

```
export function agentLoop(
```

**Line:** 107 | **Kind:** fn

### `agentLoopContinue`

```
export function agentLoopContinue(
```

**Line:** 146 | **Kind:** fn

### `runAgentLoop`

```
export async function runAgentLoop(
```

**Line:** 185 | **Kind:** fn

### `runAgentLoopContinue`

```
export async function runAgentLoopContinue(
```

**Line:** 212 | **Kind:** fn
