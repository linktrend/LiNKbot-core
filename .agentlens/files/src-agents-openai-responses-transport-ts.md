# src/agents/openai-responses-transport.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2454
- **Language:** TypeScript
- **Symbols:** 88
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 114 | type | ReplayableResponseOutputMessage | (private) | - |
| 115 | type | OpenAIResponsesReasoningReplayMetadata | (private) | - |
| 125 | type | ReplayableResponseReasoningItem | (private) | - |
| 129 | type | ResponsesClientLike | (private) | - |
| 131 | type | OpenAIResponsesOptions | (private) | - |
| 140 | type | OpenAIResponsesReplayContext | (private) | - |
| 149 | fn | stringifyUnknown | (private) | `function stringifyUnknown(value: unknown, fallb...` |
| 159 | fn | stringifyJsonLike | (private) | `function stringifyJsonLike(value: unknown, fall...` |
| 172 | fn | getServiceTierCostMultiplier | (private) | `function getServiceTierCostMultiplier(serviceTi...` |
| 183 | fn | applyServiceTierPricing | (private) | `function applyServiceTierPricing(` |
| 199 | fn | safeDebugValue | (private) | `function safeDebugValue(value: unknown): string {` |
| 215 | fn | responseInputTextChars | (private) | `function responseInputTextChars(input: unknown)...` |
| 238 | fn | responseInputRoles | (private) | `function responseInputRoles(input: unknown): st...` |
| 254 | fn | readToolPayloadField | (private) | `function readToolPayloadField(record: Record<st...` |
| 262 | fn | readResponsesToolDisplayName | (private) | `function readResponsesToolDisplayName(tool: unk...` |
| 282 | fn | summarizeResponsesTools | (private) | `function summarizeResponsesTools(tools: unknown...` |
| 294 | fn | stringifyRedactedPayload | (private) | `function stringifyRedactedPayload(value: unknow...` |
| 307 | fn | stringifyRedactedEvent | (private) | `function stringifyRedactedEvent(value: unknown)...` |
| 312 | type | ResponsesFailedNoDetailsObservation | (private) | - |
| 328 | type | ResponsesFailedEventSummary | (private) | - |
| 344 | fn | readResponseFailedString | (private) | `function readResponseFailedString(` |
| 351 | fn | buildResponsesFailedEventSummary | (private) | `function buildResponsesFailedEventSummary(` |
| 366 | fn | isResponseFailedIdentifierKey | (private) | `function isResponseFailedIdentifierKey(key: str...` |
| 379 | fn | collectResponseFailedIdentifierHashes | (private) | `function collectResponseFailedIdentifierHashes(` |
| 444 | fn | redactResponseFailedDiagnosticValue | (private) | `function redactResponseFailedDiagnosticValue(` |
| 487 | fn | buildResponsesFailedFailureFields | (private) | `function buildResponsesFailedFailureFields(` |
| 502 | fn | buildResponsesFailedNoDetailsObservation | (private) | `function buildResponsesFailedNoDetailsObservation(` |
| 540 | fn | summarizeResponsesFailedNoDetailsObservation | (private) | `function summarizeResponsesFailedNoDetailsObser...` |
| 554 | fn | normalizeResponsesFailedEvent | (private) | `function normalizeResponsesFailedEvent(` |
| 585 | fn | logResponsesFailedNoDetails | (private) | `function logResponsesFailedNoDetails(observatio...` |
| 594 | fn | summarizeResponsesPayload | (private) | `function summarizeResponsesPayload(params: unkn...` |
| 634 | fn | summarizeOpenAITransportError | (private) | `function summarizeOpenAITransportError(error: u...` |
| 654 | fn | isInvalidEncryptedContentError | (private) | `function isInvalidEncryptedContentError(error: ...` |
| 672 | fn | stripEncryptedContentFields | (private) | `function stripEncryptedContentFields(value: unk...` |
| 700 | fn | stripResponsesRequestEncryptedContent | (private) | `function stripResponsesRequestEncryptedContent(` |
| 713 | fn | hashOptionalReplayContextValue | (private) | `function hashOptionalReplayContextValue(value: ...` |
| 718 | fn | buildOpenAIResponsesReplayContext | (private) | `function buildOpenAIResponsesReplayContext(` |
| 732 | fn | buildOpenAIResponsesReasoningReplayMetadata | (private) | `function buildOpenAIResponsesReasoningReplayMet...` |
| 743 | fn | tagOpenAIResponsesReasoningReplayItem | (private) | `function tagOpenAIResponsesReasoningReplayItem(` |
| 760 | fn | isOpenAIResponsesReasoningReplayMetadata | (private) | `function isOpenAIResponsesReasoningReplayMetadata(` |
| 779 | fn | encryptedReasoningReplayMetadataMatches | (private) | `function encryptedReasoningReplayMetadataMatches(` |
| 796 | fn | readOpenAIResponsesReasoningReplayBlockMetadata | (private) | `function readOpenAIResponsesReasoningReplayBloc...` |
| 803 | fn | normalizeOpenAIResponsesReasoningReplayItem | (private) | `function normalizeOpenAIResponsesReasoningRepla...` |
| 813 | fn | prepareOpenAIResponsesReasoningItemForReplay | (private) | `function prepareOpenAIResponsesReasoningItemFor...` |
| 835 | fn | createResponsesStreamWithEncryptedContentRetry | (private) | `async function createResponsesStreamWithEncrypt...` |
| 862 | fn | resolveAzureOpenAIApiVersion | (private) | `function resolveAzureOpenAIApiVersion(env = pro...` |
| 866 | fn | shortHash | (private) | `function shortHash(value: string): string {` |
| 870 | fn | normalizeResponsesReplayItemId | (private) | `function normalizeResponsesReplayItemId(` |
| 883 | fn | isSafeResponsesReplayItemId | (private) | `function isSafeResponsesReplayItemId(id: unknow...` |
| 891 | fn | encodeTextSignatureV1 | (private) | `function encodeTextSignatureV1(id: string, phas...` |
| 895 | fn | parseTextSignature | (private) | `function parseTextSignature(` |
| 923 | fn | buildResponsesInputMessage | (private) | `function buildResponsesInputMessage(` |
| 930 | fn | convertResponsesMessages | (private) | `function convertResponsesMessages(` |
| 951 | fn | sanitizeIdPart | (private) | `const sanitizeIdPart = (part: string) => part.r...` |
| 952 | fn | normalizeIdPart | (private) | `const normalizeIdPart = (part: string) => {` |
| 957 | fn | buildForeignResponsesItemId | (private) | `const buildForeignResponsesItemId = (itemId: st...` |
| 961 | fn | buildSameProviderCopilotResponsesItemId | (private) | `const buildSameProviderCopilotResponsesItemId =...` |
| 966 | fn | normalizeToolCallId | (private) | `const normalizeToolCallId = (` |
| 1024 | fn | content | (private) | `const content = (` |
| 1167 | fn | convertResponsesTools | (private) | `function convertResponsesTools(` |
| 1198 | fn | processResponsesStream | (private) | `async function processResponsesStream(` |
| 1231 | type | StreamingToolCallState | (private) | - |
| 1249 | fn | blockIndex | (private) | `const blockIndex = () => output.content.length ...` |
| 1273 | fn | appendPendingMessageDelta | (private) | `const appendPendingMessageDelta = (delta: strin...` |
| 1299 | fn | appendTerminalResponseTextItem | (private) | `const appendTerminalResponseTextItem = (item: R...` |
| 1341 | fn | appendCompletedResponseToolCallItem | (private) | `const appendCompletedResponseToolCallItem = (it...` |
| 1365 | fn | backfillTerminalResponseOutput | (private) | `const backfillTerminalResponseOutput = (` |
| 1758 | fn | readResponsesOutputMessageText | (private) | `function readResponsesOutputMessageText(item: R...` |
| 1776 | fn | resolveProviderTransportTurnState | (private) | `function resolveProviderTransportTurnState(` |
| 1806 | fn | createOpenAIResponsesClient | (private) | `function createOpenAIResponsesClient(` |
| 1824 | fn | createOpenAIResponsesTransportStreamFn | pub | `export function createOpenAIResponsesTransportS...` |
| 1946 | fn | getPromptCacheRetention | (private) | `function getPromptCacheRetention(` |
| 1956 | fn | resolveOpenAIReasoningEffort | (private) | `function resolveOpenAIReasoningEffort(` |
| 1964 | fn | hasResponsesWebSearchTool | (private) | `function hasResponsesWebSearchTool(tools: unkno...` |
| 1983 | fn | raiseMinimalReasoningForResponsesWebSearch | (private) | `function raiseMinimalReasoningForResponsesWebSe...` |
| 2012 | fn | stripOpenAICodexResponsesUnsupportedTextFields | (private) | `function stripOpenAICodexResponsesUnsupportedTe...` |
| 2026 | fn | sanitizeOpenAICodexResponsesParams | (private) | `function sanitizeOpenAICodexResponsesParams<T e...` |
| 2040 | fn | buildOpenAICodexResponsesInstructions | (private) | `function buildOpenAICodexResponsesInstructions(...` |
| 2047 | fn | resolveOpenAICodexResponsesInstructions | (private) | `function resolveOpenAICodexResponsesInstructions(` |
| 2060 | fn | ensureOpenAICodexResponsesInput | (private) | `function ensureOpenAICodexResponsesInput(messag...` |
| 2077 | fn | resolveOpenAIResponsesTextFormat | (private) | `function resolveOpenAIResponsesTextFormat(` |
| 2094 | fn | buildOpenAIResponsesParams | (private) | `function buildOpenAIResponsesParams(` |
| 2224 | fn | createAzureOpenAIResponsesTransportStreamFn | pub | `export function createAzureOpenAIResponsesTrans...` |
| 2342 | fn | normalizeAzureBaseUrl | (private) | `function normalizeAzureBaseUrl(baseUrl: string)...` |
| 2346 | fn | resolveAzureDeploymentName | (private) | `function resolveAzureDeploymentName(model: Mode...` |
| 2353 | fn | createAzureOpenAIClient | (private) | `function createAzureOpenAIClient(` |
| 2380 | fn | buildAzureOpenAIResponsesParams | (private) | `function buildAzureOpenAIResponsesParams(` |
| 2393 | type | OpenAIResponsesRequestParams | (private) | - |

## Public API

### `createOpenAIResponsesTransportStreamFn`

```
export function createOpenAIResponsesTransportStreamFn(): StreamFn {
```

**Line:** 1824 | **Kind:** fn

### `createAzureOpenAIResponsesTransportStreamFn`

```
export function createAzureOpenAIResponsesTransportStreamFn(): StreamFn {
```

**Line:** 2224 | **Kind:** fn
