# extensions/google/transport-stream.ts

[← Back to Module](../modules/extensions-google/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1497
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 57 | type | CanonicalGoogleTransportApi | (private) | - |
| 58 | type | GoogleTransportApi | (private) | - |
| 60 | type | GoogleTransportModel | (private) | - |
| 65 | type | GoogleTransportOptions | (private) | - |
| 85 | type | GoogleGenerateContentRequest | (private) | - |
| 97 | type | GoogleTransportContentBlock | (private) | - |
| 108 | type | MutableAssistantOutput | (private) | - |
| 130 | type | GoogleSseChunk | (private) | - |
| 159 | fn | requiresToolCallId | (private) | `function requiresToolCallId(modelId: string): b...` |
| 163 | fn | requiresToolCallThoughtSignature | (private) | `function requiresToolCallThoughtSignature(model...` |
| 167 | fn | supportsMultimodalFunctionResponse | (private) | `function supportsMultimodalFunctionResponse(mod...` |
| 175 | fn | retainThoughtSignature | (private) | `function retainThoughtSignature(existing: strin...` |
| 182 | fn | stableStringifyGoogleToolCallValue | (private) | `function stableStringifyGoogleToolCallValue(val...` |
| 196 | fn | isJsonLikeThoughtSignature | (private) | `function isJsonLikeThoughtSignature(value: stri...` |
| 211 | fn | hasGeminiThoughtSignatureTruncationFootprint | (private) | `function hasGeminiThoughtSignatureTruncationFoo...` |
| 215 | fn | isGeminiThoughtSignaturePayload | (private) | `function isGeminiThoughtSignaturePayload(value:...` |
| 219 | fn | sanitizeGeminiThoughtSignature | (private) | `function sanitizeGeminiThoughtSignature(thought...` |
| 246 | fn | isSameGoogleTransportRoute | (private) | `function isSameGoogleTransportRoute(` |
| 257 | fn | normalizeGoogleTransportRouteApi | (private) | `function normalizeGoogleTransportRouteApi(` |
| 271 | fn | normalizeGoogleTransportModelRoute | (private) | `function normalizeGoogleTransportModelRoute(mod...` |
| 276 | fn | normalizeGoogleTransportMessageRoutes | (private) | `function normalizeGoogleTransportMessageRoutes(...` |
| 286 | fn | toolCallThoughtSignatureReplayKey | (private) | `function toolCallThoughtSignatureReplayKey(bloc...` |
| 298 | fn | mapToolChoice | (private) | `function mapToolChoice(` |
| 318 | fn | mapStopReasonString | (private) | `function mapStopReasonString(reason: string): "...` |
| 329 | fn | normalizeToolCallId | (private) | `function normalizeToolCallId(id: string): string {` |
| 333 | fn | resolveGoogleModelPath | (private) | `function resolveGoogleModelPath(modelId: string...` |
| 340 | fn | buildGoogleGenerativeAiRequestUrl | (private) | `function buildGoogleGenerativeAiRequestUrl(mode...` |
| 345 | fn | resolveGoogleVertexProject | (private) | `function resolveGoogleVertexProject(options: Go...` |
| 358 | fn | resolveGoogleVertexLocation | (private) | `function resolveGoogleVertexLocation(options: G...` |
| 370 | fn | resolveGoogleVertexBaseOrigin | (private) | `function resolveGoogleVertexBaseOrigin(model: G...` |
| 395 | fn | buildGoogleVertexRequestUrl | (private) | `function buildGoogleVertexRequestUrl(` |
| 408 | fn | resolveThinkingLevel | (private) | `function resolveThinkingLevel(level: ThinkingLe...` |
| 416 | fn | resolveExplicitThinkingLevel | (private) | `function resolveExplicitThinkingLevel(` |
| 428 | fn | getDisabledThinkingConfig | (private) | `function getDisabledThinkingConfig(modelId: str...` |
| 436 | fn | getGoogleThinkingBudget | (private) | `function getGoogleThinkingBudget(` |
| 457 | fn | isAdaptiveReasoningLevel | (private) | `function isAdaptiveReasoningLevel(value: unknow...` |
| 461 | fn | resolveGoogleThinkingConfig | (private) | `function resolveGoogleThinkingConfig(` |
| 515 | fn | normalizeGoogleThinkingConfig | (private) | `function normalizeGoogleThinkingConfig(` |
| 523 | fn | convertGoogleMessages | (private) | `function convertGoogleMessages(model: GoogleTra...` |
| 706 | fn | convertGoogleTools | (private) | `function convertGoogleTools(tools: NonNullable<...` |
| 721 | fn | buildGoogleGenerativeAiParams | pub | `export function buildGoogleGenerativeAiParams(` |
| 773 | fn | buildGoogleHeaders | (private) | `function buildGoogleHeaders(` |
| 803 | fn | isGoogleOauthApiKey | (private) | `function isGoogleOauthApiKey(apiKey: string | u...` |
| 809 | fn | hasGoogleAuthHeader | (private) | `function hasGoogleAuthHeader(headers: Record<st...` |
| 816 | fn | collectGoogleTransportApiKeys | (private) | `function collectGoogleTransportApiKeys(params: {` |
| 837 | fn | buildGoogleVertexHeaders | (private) | `async function buildGoogleVertexHeaders(` |
| 862 | fn | buildGoogleTransportRequestUrl | (private) | `function buildGoogleTransportRequestUrl(` |
| 872 | fn | isOfficialGoogleGenerativeAiBaseUrl | (private) | `function isOfficialGoogleGenerativeAiBaseUrl(ba...` |
| 884 | fn | resolveGoogleGemini3FirstResponseRetryMs | (private) | `function resolveGoogleGemini3FirstResponseRetry...` |
| 892 | fn | shouldRetryGoogleGemini3FirstResponse | (private) | `function shouldRetryGoogleGemini3FirstResponse(...` |
| 905 | fn | resolveGoogleGemini3RetryThinkingLevel | (private) | `function resolveGoogleGemini3RetryThinkingLevel...` |
| 915 | fn | cloneGoogleGenerateContentRequest | (private) | `function cloneGoogleGenerateContentRequest(` |
| 922 | fn | buildGoogleGemini3FirstResponseRetryParams | (private) | `function buildGoogleGemini3FirstResponseRetryPa...` |
| 952 | fn | createChildSignal | (private) | `function createChildSignal(parent: AbortSignal ...` |
| 956 | fn | abortFromParent | (private) | `const abortFromParent = () => {` |
| 973 | fn | clearDeadline | (private) | `const clearDeadline = () => {` |
| 990 | fn | iteratorToAsyncGenerator | (private) | `function iteratorToAsyncGenerator<T>(` |
| 1010 | type | GoogleSseAttempt | (private) | - |
| 1018 | fn | openGoogleSseAttempt | (private) | `async function openGoogleSseAttempt(params: {` |
| 1066 | fn | openGoogleSseChunks | (private) | `async function openGoogleSseChunks(params: {` |
| 1147 | fn | buildGoogleTransportHeaders | (private) | `async function buildGoogleTransportHeaders(para...` |
| 1175 | fn | abortHandler | (private) | `const abortHandler = () => {` |
| 1219 | fn | updateUsage | (private) | `function updateUsage(` |
| 1241 | fn | pushTextBlockEnd | (private) | `function pushTextBlockEnd(` |
| 1269 | fn | createGoogleTransportStreamFn | (private) | `function createGoogleTransportStreamFn(kind: Ca...` |
| 1295 | fn | openSse | (private) | `const openSse = async (apiKeyForRequest: string...` |
| 1490 | fn | createGoogleGenerativeAiTransportStreamFn | pub | `export function createGoogleGenerativeAiTranspo...` |
| 1494 | fn | createGoogleVertexTransportStreamFn | pub | `export function createGoogleVertexTransportStre...` |

## Public API

### `buildGoogleGenerativeAiParams`

```
export function buildGoogleGenerativeAiParams(
```

**Line:** 721 | **Kind:** fn

### `createGoogleGenerativeAiTransportStreamFn`

```
export function createGoogleGenerativeAiTransportStreamFn(): StreamFn {
```

**Line:** 1490 | **Kind:** fn

### `createGoogleVertexTransportStreamFn`

```
export function createGoogleVertexTransportStreamFn(): StreamFn {
```

**Line:** 1494 | **Kind:** fn
