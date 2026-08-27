# packages/ai/src/providers/openai-responses-shared.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1403
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 82 | fn | splitResponsesToolCallId | (private) | `function splitResponsesToolCallId(id: string): ...` |
| 89 | fn | resolveResponsesToolCallId | (private) | `function resolveResponsesToolCallId(` |
| 105 | fn | sanitizeToolResultText | (private) | `function sanitizeToolResultText(text: string, f...` |
| 110 | type | ReplayableResponseOutputMessage | (private) | - |
| 111 | type | ReplayableResponseReasoningItem | (private) | - |
| 112 | type | ResponsesTextContentPart | (private) | - |
| 115 | type | ResponsesStreamOutputMessage | (private) | - |
| 118 | type | ResponsesContentPartAddedEvent | (private) | - |
| 122 | type | ResponsesOutputItemDoneEvent | (private) | - |
| 126 | type | AzureResponsesContentPartAddedEvent | (private) | - |
| 129 | type | AzureResponsesOutputItemDoneEvent | (private) | - |
| 133 | type | OpenAIResponsesStreamEvent | (private) | - |
| 139 | fn | normalizeResponsesReasoningReplayItem | (private) | `function normalizeResponsesReasoningReplayItem(...` |
| 153 | fn | encodeTextSignatureV1 | (private) | `function encodeTextSignatureV1(id: string, phas...` |
| 161 | fn | parseTextSignature | (private) | `function parseTextSignature(` |
| 189 | fn | resolveReplayableResponsesMessageId | (private) | `function resolveReplayableResponsesMessageId(pa...` |
| 203 | interface | OpenAIResponsesStreamOptions | (private) | - |
| 215 | interface | ConvertResponsesMessagesOptions | (private) | - |
| 221 | type | ResponsesRequestOptions | (private) | - |
| 227 | type | ResponsesStreamRequest | (private) | - |
| 234 | type | ResponsesStreamClient | (private) | - |
| 243 | type | ResponsesLifecycleStreamOptions | (private) | - |
| 249 | type | OpenAIResponsesProcessStreamOptions | (private) | - |
| 252 | type | ResponsesReasoningEffort | (private) | - |
| 254 | fn | isResponsesReasoningEffort | (private) | `function isResponsesReasoningEffort(` |
| 266 | type | ResponsesReasoningSummary | (private) | - |
| 268 | type | ResponsesCommonParamsOptions | (private) | - |
| 277 | fn | convertResponsesMessages | pub | `export function convertResponsesMessages<TApi e...` |
| 504 | fn | createResponsesAssistantOutput | pub | `export function createResponsesAssistantOutput<...` |
| 527 | fn | resolveResponsesReasoningEffort | pub | `export function resolveResponsesReasoningEffort...` |
| 549 | fn | applyCommonResponsesParams | pub | `export function applyCommonResponsesParams<TApi...` |
| 593 | fn | buildResponsesRequestOptions | (private) | `function buildResponsesRequestOptions(` |
| 603 | fn | cleanStreamingScratchBuffers | (private) | `function cleanStreamingScratchBuffers(output: A...` |
| 611 | fn | runResponsesStreamLifecycle | pub | `export async function runResponsesStreamLifecyc...` |
| 688 | fn | processResponsesStream | pub | `export async function processResponsesStream<TA...` |
| 695 | type | StreamingToolCallBlock | (private) | - |
| 696 | type | StreamingToolCallState | (private) | - |
| 700 | type | TextBlockReference | (private) | - |
| 705 | type | ResponsesOutputSlot | (private) | - |
| 728 | fn | blockIndex | (private) | `const blockIndex = () => blocks.length - 1;` |
| 921 | fn | appendPendingMessageDelta | (private) | `const appendPendingMessageDelta = (` |

## Public API

### `convertResponsesMessages`

```
export function convertResponsesMessages<TApi extends Api>(
```

**Line:** 277 | **Kind:** fn

### `createResponsesAssistantOutput`

```
export function createResponsesAssistantOutput<TApi extends Api>(
```

**Line:** 504 | **Kind:** fn

### `resolveResponsesReasoningEffort`

```
export function resolveResponsesReasoningEffort<TApi extends Api>(
```

**Line:** 527 | **Kind:** fn

### `applyCommonResponsesParams`

```
export function applyCommonResponsesParams<TApi extends Api>(
```

**Line:** 549 | **Kind:** fn

### `runResponsesStreamLifecycle`

```
export async function runResponsesStreamLifecycle<TApi extends Api>(params: {
```

**Line:** 611 | **Kind:** fn

### `processResponsesStream`

```
export async function processResponsesStream<TApi extends Api>(
```

**Line:** 688 | **Kind:** fn
