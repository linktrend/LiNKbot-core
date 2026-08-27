# extensions/memory-lancedb/index.ts

[← Back to Module](../modules/extensions-memory-lancedb/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2110
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 62 | type | AutoCaptureCursor | (private) | - |
| 67 | type | OpenAiEmbeddingClient | (private) | - |
| 81 | fn | extractUserTextContent | (private) | `function extractUserTextContent(message: unknow...` |
| 106 | fn | extractLatestUserText | (private) | `function extractLatestUserText(messages: unknow...` |
| 116 | fn | normalizeRecallQuery | pub | `export function normalizeRecallQuery(` |
| 125 | fn | normalizeMaxChars | (private) | `function normalizeMaxChars(value: number | unde...` |
| 131 | fn | messageFingerprint | (private) | `function messageFingerprint(message: unknown): ...` |
| 146 | fn | resolveAutoCaptureStartIndex | (private) | `function resolveAutoCaptureStartIndex(` |
| 186 | type | MemoryCliColumn | (private) | - |
| 188 | fn | parsePositiveIntegerOption | (private) | `function parsePositiveIntegerOption(value: stri...` |
| 199 | fn | parseMemoryCliColumns | (private) | `function parseMemoryCliColumns(value: unknown):...` |
| 214 | fn | parseMemoryCliOrder | (private) | `function parseMemoryCliOrder(value: unknown): {` |
| 235 | fn | parseMemoryCliFilter | pub | `export function parseMemoryCliFilter(rawValue: ...` |
| 284 | type | Embeddings | (private) | - |
| 288 | class | OpenAiCompatibleEmbeddings | (private) | - |
| 356 | fn | isEmbeddingDimensionsRejectedError | (private) | `function isEmbeddingDimensionsRejectedError(err...` |
| 365 | fn | isUnsupportedEmbeddingFieldError | (private) | `function isUnsupportedEmbeddingFieldError(detai...` |
| 379 | fn | stringifyEmbeddingApiError | (private) | `function stringifyEmbeddingApiError(error: unkn...` |
| 398 | fn | truncateEmbeddingVector | (private) | `function truncateEmbeddingVector(embedding: num...` |
| 411 | class | ProviderAdapterEmbeddings | (private) | - |
| 486 | fn | runWithTimeout | (private) | `async function runWithTimeout<T>(params: {` |
| 512 | fn | formatMemoryRecallError | (private) | `function formatMemoryRecallError(error: unknown...` |
| 516 | fn | buildMemoryRecallUnavailableResult | (private) | `function buildMemoryRecallUnavailableResult(err...` |
| 533 | class | MemoryRecallEmbeddingError | (private) | - |
| 546 | fn | createEmbeddings | (private) | `function createEmbeddings(api: OpenClawPluginAp...` |
| 554 | type | EmbeddingCreateResponse | (private) | - |
| 560 | fn | normalizeEmbeddingVector | pub | `export function normalizeEmbeddingVector(value:...` |
| 622 | fn | looksLikePromptInjection | pub | `export function looksLikePromptInjection(text: ...` |
| 642 | fn | escapeMemoryForPrompt | pub | `export function escapeMemoryForPrompt(text: str...` |
| 649 | fn | stripMediaAttachedAnnotations | (private) | `function stripMediaAttachedAnnotations(text: st...` |
| 664 | fn | sanitizeRecallMemoryText | (private) | `function sanitizeRecallMemoryText(text: string)...` |
| 672 | fn | findCleanDuplicateMemory | (private) | `async function findCleanDuplicateMemory(` |
| 688 | fn | cleanMemorySearchResults | (private) | `function cleanMemorySearchResults(results: Memo...` |
| 881 | fn | matchKnownChannelMarkerFreeEnvelopePrefix | (private) | `function matchKnownChannelMarkerFreeEnvelopePre...` |
| 904 | fn | looksLikeEnvelopeSludge | pub | `export function looksLikeEnvelopeSludge(text: s...` |
| 982 | fn | stripEnvelopeBodySenderPrefix | (private) | `function stripEnvelopeBodySenderPrefix(body: st...` |
| 1005 | fn | stripLeadingMessageToolDeliveryHints | (private) | `function stripLeadingMessageToolDeliveryHints(t...` |
| 1024 | fn | findFirstInboundEnvelopeIndex | (private) | `function findFirstInboundEnvelopeIndex(` |
| 1049 | fn | stripPendingHistoryContextBeforeCurrentMessage | (private) | `function stripPendingHistoryContextBeforeCurren...` |
| 1061 | fn | stripToCurrentMessageMarker | (private) | `function stripToCurrentMessageMarker(text: stri...` |
| 1069 | fn | findLastContextMarker | (private) | `function findLastContextMarker(` |
| 1083 | fn | stripLeadingCurrentMessageContextBeforeEnvelope | (private) | `function stripLeadingCurrentMessageContextBefor...` |
| 1109 | fn | stripLeadingPlainTextMetadataBody | (private) | `function stripLeadingPlainTextMetadataBody(text...` |
| 1119 | fn | stripLeadingInboundEnvelope | (private) | `function stripLeadingInboundEnvelope(` |
| 1141 | fn | stripLeadingChronologicalContextBlocks | (private) | `function stripLeadingChronologicalContextBlocks...` |
| 1193 | fn | sanitizeForMemoryCapture | pub | `export function sanitizeForMemoryCapture(text: ...` |
| 1335 | fn | formatRelevantMemoriesContext | pub | `export function formatRelevantMemoriesContext(` |
| 1353 | fn | matchesCustomTrigger | (private) | `function matchesCustomTrigger(text: string, cus...` |
| 1361 | fn | shouldCapture | pub | `export function shouldCapture(` |
| 1406 | fn | detectCategory | pub | `export function detectCategory(text: string): M...` |
| 1482 | fn | resolveCurrentHookConfig | (private) | `const resolveCurrentHookConfig = () => {` |

## Public API

### `normalizeRecallQuery`

```
export function normalizeRecallQuery(
```

**Line:** 116 | **Kind:** fn

### `parseMemoryCliFilter`

```
export function parseMemoryCliFilter(rawValue: unknown): MemoryQueryFilter | undefined {
```

**Line:** 235 | **Kind:** fn

### `normalizeEmbeddingVector`

```
export function normalizeEmbeddingVector(value: unknown): number[] {
```

**Line:** 560 | **Kind:** fn

### `looksLikePromptInjection`

```
export function looksLikePromptInjection(text: string): boolean {
```

**Line:** 622 | **Kind:** fn

### `escapeMemoryForPrompt`

```
export function escapeMemoryForPrompt(text: string): string {
```

**Line:** 642 | **Kind:** fn

### `looksLikeEnvelopeSludge`

```
export function looksLikeEnvelopeSludge(text: string): boolean {
```

**Line:** 904 | **Kind:** fn

### `sanitizeForMemoryCapture`

```
export function sanitizeForMemoryCapture(text: string): string {
```

**Line:** 1193 | **Kind:** fn

### `formatRelevantMemoriesContext`

```
export function formatRelevantMemoriesContext(
```

**Line:** 1335 | **Kind:** fn

### `shouldCapture`

```
export function shouldCapture(
```

**Line:** 1361 | **Kind:** fn

### `detectCategory`

```
export function detectCategory(text: string): MemoryCategory {
```

**Line:** 1406 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 708)

> `looksLikeEnvelopeSludge` deliberately uses the broader
