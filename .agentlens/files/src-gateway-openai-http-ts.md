# src/gateway/openai-http.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1431
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 74 | type | OpenAiHttpOptions | (private) | - |
| 83 | type | OpenAiChatMessage | (private) | - |
| 92 | type | OpenAiChatCompletionRequest | (private) | - |
| 123 | type | ResolvedOpenAiChatCompletionsLimits | (private) | - |
| 130 | fn | resolveOpenAiChatCompletionsLimits | (private) | `function resolveOpenAiChatCompletionsLimits(` |
| 149 | fn | writeSse | (private) | `function writeSse(res: ServerResponse, data: un...` |
| 153 | fn | buildAgentCommandInput | (private) | `function buildAgentCommandInput(params: {` |
| 180 | fn | extractClientToolsFromChatRequest | (private) | `function extractClientToolsFromChatRequest(tool...` |
| 222 | fn | applyChatToolChoice | (private) | `function applyChatToolChoice(params: { tools: C...` |
| 269 | fn | writeAssistantRoleChunk | (private) | `function writeAssistantRoleChunk(res: ServerRes...` |
| 279 | fn | writeAssistantContentChunk | (private) | `function writeAssistantContentChunk(` |
| 298 | fn | writeAssistantFinishChunk | (private) | `function writeAssistantFinishChunk(` |
| 317 | fn | splitArgumentsForStreaming | (private) | `function splitArgumentsForStreaming(argumentsVa...` |
| 329 | fn | writeAssistantToolCallsIncrementalChunks | (private) | `function writeAssistantToolCallsIncrementalChunks(` |
| 386 | fn | writeUsageChunk | (private) | `function writeUsageChunk(` |
| 404 | fn | asMessages | (private) | `function asMessages(val: unknown): OpenAiChatMe...` |
| 408 | fn | extractTextContent | (private) | `function extractTextContent(content: unknown): ...` |
| 438 | type | AssistantToolCall | (private) | - |
| 444 | fn | stringifyToolCallArguments | (private) | `function stringifyToolCallArguments(value: unkn...` |
| 459 | fn | extractAssistantToolCalls | (private) | `function extractAssistantToolCalls(value: unkno...` |
| 485 | fn | renderAssistantToolCalls | (private) | `function renderAssistantToolCalls(calls: Assist...` |
| 491 | fn | resolveImageUrlPart | (private) | `function resolveImageUrlPart(part: unknown): st...` |
| 511 | fn | extractImageUrls | (private) | `function extractImageUrls(content: unknown): st...` |
| 531 | type | ActiveTurnContext | (private) | - |
| 537 | fn | parseImageUrlToSource | (private) | `function parseImageUrlToSource(url: string): In...` |
| 565 | fn | resolveActiveTurnContext | (private) | `function resolveActiveTurnContext(messagesUnkno...` |
| 586 | fn | resolveImagesForRequest | (private) | `async function resolveImagesForRequest(` |
| 629 | fn | buildAgentPrompt | (private) | `function buildAgentPrompt(` |
| 711 | fn | coerceRequest | (private) | `function coerceRequest(val: unknown): OpenAiCha...` |
| 718 | fn | resolveAgentResponseText | (private) | `function resolveAgentResponseText(result: unkno...` |
| 730 | fn | resolveAgentResponseCommentary | (private) | `function resolveAgentResponseCommentary(result:...` |
| 741 | type | AgentUsageMeta | (private) | - |
| 749 | type | PendingToolCall | (private) | - |
| 755 | fn | resolveAgentRunUsage | (private) | `function resolveAgentRunUsage(result: unknown):...` |
| 777 | fn | resolveStopReasonAndPendingToolCalls | (private) | `function resolveStopReasonAndPendingToolCalls(m...` |
| 809 | fn | resolveChatCompletionUsage | (private) | `function resolveChatCompletionUsage(result: unk...` |
| 813 | fn | resolveIncludeUsageForStreaming | (private) | `function resolveIncludeUsageForStreaming(payloa...` |
| 823 | fn | resolveResponseFormat | (private) | `function resolveResponseFormat(value: unknown):...` |
| 838 | fn | resolveStopSequences | (private) | `function resolveStopSequences(value: unknown): ...` |
| 860 | fn | resolveErrorMessage | (private) | `function resolveErrorMessage(err: unknown): str...` |
| 870 | fn | handleOpenAiHttpRequest | pub | `export async function handleOpenAiHttpRequest(` |
| 1186 | fn | stopWatchingDisconnect | (private) | `let stopWatchingDisconnect = () => {};` |
| 1188 | fn | maybeFinalize | (private) | `const maybeFinalize = () => {` |
| 1212 | fn | requestFinalize | (private) | `const requestFinalize = (finishReason: "stop" |...` |

## Public API

### `handleOpenAiHttpRequest`

```
export async function handleOpenAiHttpRequest(
```

**Line:** 870 | **Kind:** fn
