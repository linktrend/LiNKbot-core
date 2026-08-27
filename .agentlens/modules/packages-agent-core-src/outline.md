# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## packages/agent-core/src/agent-loop.test.ts (1902 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | collectEvents | (private) |
| 68 | fn | expectTerminalFailure | (private) |
| 109 | fn | markStarted | (private) |
| 949 | fn | makeAssistantMessage | (private) |
| 969 | fn | makeTool | (private) |
| 1819 | fn | makeAssistantMessage | (private) |

## packages/agent-core/src/agent-loop.ts (1160 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | AgentEventSink | pub |
| 44 | type | AssistantMessageUpdateEvent | (private) |
| 60 | fn | appendTextDeltaToAssistantMessage | (private) |
| 74 | fn | resolveAssistantMessageUpdate | (private) |
| 87 | fn | removeNonExecutableToolCalls | (private) |
| 95 | fn | ensureToolTurnIdentity | (private) |
| 107 | fn | agentLoop | pub |
| 146 | fn | agentLoopContinue | pub |
| 185 | fn | runAgentLoop | pub |
| 212 | fn | runAgentLoopContinue | pub |
| 239 | fn | createAgentStream | (private) |
| 246 | fn | pushLoopFailure | (private) |
| 270 | fn | runLoop | (private) |
| 456 | fn | streamAssistantResponse | (private) |
| 563 | fn | executeToolCalls | (private) |
| 614 | type | ExecutedToolCallBatch | (private) |
| 619 | type | ResolvedToolCallOutcome | (private) |
| 623 | fn | hidesToolCallFromChannelProgress | (private) |
| 636 | fn | executeToolCallsSequential | (private) |
| 714 | fn | executeToolCallsParallel | (private) |
| 803 | type | PreparedToolCall | (private) |
| 810 | type | ImmediateToolCallOutcome | (private) |
| 817 | type | ExecutedToolCallOutcome | (private) |
| 823 | type | FinalizedToolCallOutcome | (private) |
| 832 | type | FinalizedToolCallEntry | (private) |
| 834 | fn | shouldTerminateToolBatch | (private) |
| 841 | fn | prepareToolCallArguments | (private) |
| 855 | fn | resolveToolCallTool | (private) |
| 899 | fn | prepareToolCall | (private) |
| 1008 | fn | executePreparedToolCall | (private) |
| 1070 | fn | finalizeExecutedToolCall | (private) |
| 1118 | fn | createErrorToolResult | (private) |
| 1125 | fn | emitToolExecutionEnd | (private) |
| 1141 | fn | createToolResultMessage | (private) |
| 1153 | fn | emitToolResultMessage | (private) |

## packages/agent-core/src/agent.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | defaultConvertToLlm | (private) |
| 60 | type | MutableAgentState | (private) |
| 70 | fn | createMutableAgentState | (private) |
| 102 | interface | AgentOptions | pub |
| 158 | class | PendingMessageQueue | (private) |
| 195 | type | ActiveRun | (private) |
| 207 | class | Agent | pub |
| 532 | fn | resolvePromise | (private) |

## packages/agent-core/src/types.ts (547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | StreamFn | pub |
| 35 | type | ToolExecutionMode | pub |
| 43 | type | QueueMode | pub |
| 46 | type | AgentToolCall | pub |
| 54 | interface | BeforeToolCallResult | pub |
| 59 | interface | DeferredToolCallContext | pub |
| 80 | interface | AfterToolCallResult | pub |
| 92 | interface | BeforeToolCallContext | pub |
| 104 | interface | AfterToolCallContext | pub |
| 120 | interface | ShouldStopAfterTurnContext | pub |
| 132 | interface | AgentLoopTurnUpdate | pub |
| 141 | interface | PrepareNextTurnContext | pub |
| 143 | interface | AgentLoopConfig | pub |
| 311 | type | ThinkingLevel | pub |
| 313 | interface | BashExecutionMessage | pub |
| 334 | interface | CustomMessage | pub |
| 349 | interface | BranchSummaryMessage | pub |
| 360 | interface | CompactionSummaryMessage | pub |
| 381 | interface | CustomAgentMessages | pub |
| 393 | type | AgentMessage | pub |
| 401 | interface | AgentState | pub |
| 429 | interface | AgentToolProgress | pub |
| 441 | interface | AgentToolResult | pub |
| 459 | interface | AgentTool | pub |
| 492 | interface | AgentContext | pub |
| 508 | type | AgentEvent | pub |
