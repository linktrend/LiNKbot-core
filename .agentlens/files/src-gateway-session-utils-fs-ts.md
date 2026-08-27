# src/gateway/session-utils.fs.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1795
- **Language:** TypeScript
- **Symbols:** 84
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 47 | type | SessionTitleFields | (private) | - |
| 52 | type | SessionTitleFieldsCacheEntry | (private) | - |
| 69 | type | TranscriptFileHandle | (private) | - |
| 71 | fn | readSessionTitleFieldsCacheKey | (private) | `function readSessionTitleFieldsCacheKey(` |
| 79 | fn | getCachedSessionTitleFields | (private) | `function getCachedSessionTitleFields(cacheKey: ...` |
| 97 | fn | setCachedSessionTitleFields | (private) | `function setCachedSessionTitleFields(cacheKey: ...` |
| 112 | fn | getCachedTranscriptMessageCount | (private) | `function getCachedTranscriptMessageCount(filePa...` |
| 126 | fn | setCachedTranscriptMessageCount | (private) | `function setCachedTranscriptMessageCount(filePa...` |
| 141 | fn | yieldTranscriptScan | (private) | `async function yieldTranscriptScan(): Promise<v...` |
| 148 | fn | attachOpenClawTranscriptMeta | pub | `export function attachOpenClawTranscriptMeta(` |
| 171 | fn | readTranscriptMessageIdempotencyKey | (private) | `function readTranscriptMessageIdempotencyKey(me...` |
| 180 | fn | readSessionMessages | pub | `export function readSessionMessages(` |
| 194 | type | ReadRecentSessionMessagesOptions | pub | - |
| 202 | type | ReadSessionMessagesPageOptions | (private) | - |
| 209 | type | ReadSessionMessagesAsyncOptions | pub | - |
| 220 | type | ReadRecentSessionMessagesResult | pub | - |
| 226 | type | ReadSessionMessagesResult | (private) | - |
| 233 | type | TailTranscriptRecord | (private) | - |
| 237 | fn | normalizeRecentSessionReadOptions | (private) | `function normalizeRecentSessionReadOptions(opts...` |
| 248 | fn | readRecentTranscriptTailLinesAsync | (private) | `async function readRecentTranscriptTailLinesAsync(` |
| 279 | fn | isOversizedTranscriptLine | (private) | `function isOversizedTranscriptLine(line: string...` |
| 283 | fn | isJsonObjectFieldToken | (private) | `function isJsonObjectFieldToken(source: string,...` |
| 294 | fn | extractJsonStringFieldWindow | (private) | `function extractJsonStringFieldWindow(` |
| 325 | fn | extractJsonStringFieldSuffix | (private) | `function extractJsonStringFieldSuffix(source: s...` |
| 330 | fn | buildOversizedTranscriptRecord | (private) | `function buildOversizedTranscriptRecord(line: s...` |
| 359 | fn | parseTailTranscriptRecord | (private) | `function parseTailTranscriptRecord(line: string...` |
| 375 | fn | selectBoundedActiveTailRecords | (private) | `function selectBoundedActiveTailRecords(` |
| 404 | fn | readTranscriptRecords | (private) | `function readTranscriptRecords(filePath: string...` |
| 418 | fn | selectActiveTranscriptRecords | (private) | `function selectActiveTranscriptRecords(records:...` |
| 422 | fn | readSelectedTranscriptRecords | (private) | `function readSelectedTranscriptRecords(filePath...` |
| 430 | fn | transcriptRecordsToMessages | (private) | `function transcriptRecordsToMessages(records: T...` |
| 443 | fn | parseRecentTranscriptTailMessages | (private) | `function parseRecentTranscriptTailMessages(line...` |
| 454 | fn | visitTranscriptLines | (private) | `function visitTranscriptLines(filePath: string,...` |
| 481 | fn | visitTranscriptLinesAsync | (private) | `async function visitTranscriptLinesAsync(` |
| 512 | fn | readSessionMessagesAsync | pub | `export async function readSessionMessagesAsync(` |
| 529 | fn | readSessionMessagesWithSourceAsync | pub | `export async function readSessionMessagesWithSo...` |
| 563 | fn | readSessionMessageByIdAsync | pub | `export async function readSessionMessageByIdAsync(` |
| 598 | fn | visitSessionMessagesAsync | pub | `export async function visitSessionMessagesAsync(` |
| 623 | fn | readSessionMessageCountAsync | pub | `export async function readSessionMessageCountAs...` |
| 636 | fn | readRecentSessionMessagesAsync | pub | `export async function readRecentSessionMessages...` |
| 653 | fn | readRecentSessionMessagesWithSourceAsync | (private) | `async function readRecentSessionMessagesWithSou...` |
| 681 | fn | readRecentSessionMessagesFromPathAsync | (private) | `async function readRecentSessionMessagesFromPat...` |
| 702 | fn | readRecentSessionMessagesWithStatsAsync | pub | `export async function readRecentSessionMessages...` |
| 730 | fn | readSessionMessagesPageWithStatsAsync | pub | `export async function readSessionMessagesPageWi...` |
| 762 | fn | parsedSessionEntryToMessage | (private) | `function parsedSessionEntryToMessage(parsed: un...` |
| 802 | fn | indexedTranscriptEntryToMessage | (private) | `function indexedTranscriptEntryToMessage(entry:...` |
| 806 | fn | indexedTranscriptEntryToMessages | pub | `export function indexedTranscriptEntryToMessage...` |
| 813 | fn | capArrayByJsonBytes | pub | `export function capArrayByJsonBytes<T>(` |
| 833 | type | TranscriptMessage | (private) | - |
| 839 | fn | readSessionTitleFieldsFromTranscript | pub | `export function readSessionTitleFieldsFromTrans...` |
| 910 | fn | readSessionTitleFieldsFromTranscriptAsync | pub | `export async function readSessionTitleFieldsFro...` |
| 975 | fn | extractTextFromContent | (private) | `function extractTextFromContent(content: Transc...` |
| 997 | fn | readTranscriptHeadChunk | (private) | `function readTranscriptHeadChunk(fd: number, ma...` |
| 1006 | fn | readTranscriptHeadChunkAsync | (private) | `async function readTranscriptHeadChunkAsync(` |
| 1018 | fn | extractFirstUserMessageFromTranscriptChunk | (private) | `function extractFirstUserMessageFromTranscriptC...` |
| 1047 | fn | findExistingTranscriptPath | pub | `export function findExistingTranscriptPath(` |
| 1057 | fn | findExistingTranscriptHistoryPathAsync | (private) | `async function findExistingTranscriptHistoryPat...` |
| 1102 | fn | resolveSessionHistoryTranscriptPathAsync | pub | `export async function resolveSessionHistoryTran...` |
| 1113 | fn | readSessionMessageCountFromPathAsync | (private) | `async function readSessionMessageCountFromPathA...` |
| 1132 | fn | withOpenTranscriptFd | (private) | `function withOpenTranscriptFd<T>(filePath: stri...` |
| 1150 | fn | extractLastMessagePreviewFromTranscriptLines | (private) | `function extractLastMessagePreviewFromTranscrip...` |
| 1171 | fn | readLastMessagePreviewFromOpenTranscript | (private) | `function readLastMessagePreviewFromOpenTranscri...` |
| 1188 | fn | readLastMessagePreviewFromOpenTranscriptAsync | (private) | `async function readLastMessagePreviewFromOpenTr...` |
| 1205 | type | SessionTranscriptUsageSnapshot | pub | - |
| 1219 | fn | extractTranscriptUsageCost | (private) | `function extractTranscriptUsageCost(raw: unknow...` |
| 1231 | fn | resolvePositiveUsageNumber | (private) | `function resolvePositiveUsageNumber(value: unkn...` |
| 1235 | fn | extractTranscriptContentEstimatedChars | (private) | `function extractTranscriptContentEstimatedChars...` |
| 1264 | fn | extractTranscriptTokenEstimateFromLine | (private) | `function extractTranscriptTokenEstimateFromLine...` |
| 1314 | fn | extractUsageSnapshotFromTranscriptLine | (private) | `function extractUsageSnapshotFromTranscriptLine(` |
| 1404 | fn | extractAggregateUsageFromTranscriptLines | (private) | `function extractAggregateUsageFromTranscriptLines(` |
| 1507 | fn | extractAggregateUsageFromTranscriptChunk | (private) | `function extractAggregateUsageFromTranscriptChunk(` |
| 1515 | fn | readLatestSessionUsageFromTranscriptAsync | pub | `export async function readLatestSessionUsageFro...` |
| 1543 | fn | readRecentSessionUsageFromTranscript | pub | `export function readRecentSessionUsageFromTrans...` |
| 1579 | type | TranscriptContentEntry | (private) | - |
| 1585 | type | TranscriptPreviewMessage | (private) | - |
| 1593 | fn | normalizeRole | (private) | `function normalizeRole(role: string | undefined...` |
| 1611 | fn | truncatePreviewText | (private) | `function truncatePreviewText(text: string, maxC...` |
| 1619 | fn | extractPreviewText | (private) | `function extractPreviewText(message: Transcript...` |
| 1650 | fn | isToolCall | (private) | `function isToolCall(message: TranscriptPreviewM...` |
| 1654 | fn | extractToolNames | (private) | `function extractToolNames(message: TranscriptPr...` |
| 1658 | fn | extractMediaSummary | (private) | `function extractMediaSummary(message: Transcrip...` |
| 1672 | fn | buildSessionPreviewItems | pub | `export function buildSessionPreviewItems(` |
| 1720 | fn | readRecentMessagesFromTranscript | (private) | `function readRecentMessagesFromTranscript(` |
| 1769 | fn | readSessionPreviewItemsFromTranscript | pub | `export function readSessionPreviewItemsFromTran...` |

## Public API

### `attachOpenClawTranscriptMeta`

```
export function attachOpenClawTranscriptMeta(
```

**Line:** 148 | **Kind:** fn

### `readSessionMessages`

```
export function readSessionMessages(
```

**Line:** 180 | **Kind:** fn

### `readSessionMessagesAsync`

```
export async function readSessionMessagesAsync(
```

**Line:** 512 | **Kind:** fn

### `readSessionMessagesWithSourceAsync`

```
export async function readSessionMessagesWithSourceAsync(
```

**Line:** 529 | **Kind:** fn

### `readSessionMessageByIdAsync`

```
export async function readSessionMessageByIdAsync(
```

**Line:** 563 | **Kind:** fn

### `visitSessionMessagesAsync`

```
export async function visitSessionMessagesAsync(
```

**Line:** 598 | **Kind:** fn

### `readSessionMessageCountAsync`

```
export async function readSessionMessageCountAsync(
```

**Line:** 623 | **Kind:** fn

### `readRecentSessionMessagesAsync`

```
export async function readRecentSessionMessagesAsync(
```

**Line:** 636 | **Kind:** fn

### `readRecentSessionMessagesWithStatsAsync`

```
export async function readRecentSessionMessagesWithStatsAsync(
```

**Line:** 702 | **Kind:** fn

### `readSessionMessagesPageWithStatsAsync`

```
export async function readSessionMessagesPageWithStatsAsync(
```

**Line:** 730 | **Kind:** fn

### `indexedTranscriptEntryToMessages`

```
export function indexedTranscriptEntryToMessages(entry: IndexedTranscriptEntry): unknown[] {
```

**Line:** 806 | **Kind:** fn

### `capArrayByJsonBytes`

```
export function capArrayByJsonBytes<T>(
```

**Line:** 813 | **Kind:** fn

### `readSessionTitleFieldsFromTranscript`

```
export function readSessionTitleFieldsFromTranscript(
```

**Line:** 839 | **Kind:** fn

### `readSessionTitleFieldsFromTranscriptAsync`

```
export async function readSessionTitleFieldsFromTranscriptAsync(
```

**Line:** 910 | **Kind:** fn

### `findExistingTranscriptPath`

```
export function findExistingTranscriptPath(
```

**Line:** 1047 | **Kind:** fn

### `resolveSessionHistoryTranscriptPathAsync`

```
export async function resolveSessionHistoryTranscriptPathAsync(
```

**Line:** 1102 | **Kind:** fn

### `readLatestSessionUsageFromTranscriptAsync`

```
export async function readLatestSessionUsageFromTranscriptAsync(
```

**Line:** 1515 | **Kind:** fn

### `readRecentSessionUsageFromTranscript`

```
export function readRecentSessionUsageFromTranscript(
```

**Line:** 1543 | **Kind:** fn

### `buildSessionPreviewItems`

```
export function buildSessionPreviewItems(
```

**Line:** 1672 | **Kind:** fn

### `readSessionPreviewItemsFromTranscript`

```
export function readSessionPreviewItemsFromTranscript(
```

**Line:** 1769 | **Kind:** fn
