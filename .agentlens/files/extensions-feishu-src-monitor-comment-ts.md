# extensions/feishu/src/monitor.comment.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1393
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 32 | type | FeishuDriveCommentUserId | (private) | - |
| 38 | type | FeishuDriveCommentNoticeEvent | pub | - |
| 54 | type | ResolveDriveCommentEventParams | (private) | - |
| 66 | type | ResolvedDriveCommentEventTurn | (private) | - |
| 88 | type | FeishuRequestClient | (private) | - |
| 104 | type | FeishuDriveMetaBatchQueryResponse | (private) | - |
| 112 | type | FeishuDriveCommentReply | (private) | - |
| 122 | type | FeishuDriveCommentCard | (private) | - |
| 136 | type | FeishuDriveCommentBatchQueryResponse | (private) | - |
| 140 | type | FeishuDriveCommentListResponse | (private) | - |
| 146 | type | FeishuDriveCommentRepliesListResponse | (private) | - |
| 152 | type | ResolvedCommentReplyContext | (private) | - |
| 160 | type | ResolvedWholeCommentTimelineEntry | (private) | - |
| 169 | fn | safeJsonStringify | (private) | `function safeJsonStringify(value: unknown): str...` |
| 179 | fn | truncatePromptText | (private) | `function truncatePromptText(` |
| 192 | fn | formatPromptTextValue | (private) | `function formatPromptTextValue(text: string | u...` |
| 196 | fn | formatPromptBoolean | (private) | `function formatPromptBoolean(value: boolean | u...` |
| 200 | fn | buildDriveCommentsListUrl | (private) | `function buildDriveCommentsListUrl(params: {` |
| 218 | fn | compareCommentTimelineEntries | (private) | `function compareCommentTimelineEntries(` |
| 230 | fn | formatLinkedDocumentInline | (private) | `function formatLinkedDocumentInline(link: Parse...` |
| 242 | fn | formatLinkedDocumentsPromptLines | (private) | `function formatLinkedDocumentsPromptLines(param...` |
| 257 | fn | formatLinkedDocumentsInlineSummary | (private) | `function formatLinkedDocumentsInlineSummary(` |
| 271 | fn | summarizeCommentRepliesForLog | (private) | `function summarizeCommentRepliesForLog(replies:...` |
| 280 | fn | resolveParsedCommentContent | (private) | `async function resolveParsedCommentContent(para...` |
| 367 | fn | buildDriveCommentTargetUrl | (private) | `function buildDriveCommentTargetUrl(params: {` |
| 380 | fn | buildDriveCommentRepliesUrl | (private) | `function buildDriveCommentRepliesUrl(params: {` |
| 399 | fn | fetchDriveComments | (private) | `async function fetchDriveComments(params: {` |
| 442 | fn | requestFeishuOpenApi | (private) | `async function requestFeishuOpenApi<T>(params: {` |
| 496 | fn | fetchDriveCommentReplies | (private) | `async function fetchDriveCommentReplies(params: {` |
| 544 | fn | resolveCommentReplyContext | (private) | `async function resolveCommentReplyContext(param...` |
| 585 | fn | selectCommentThreadPromptReplies | (private) | `function selectCommentThreadPromptReplies(` |
| 617 | fn | formatCommentThreadPromptLines | (private) | `function formatCommentThreadPromptLines(params: {` |
| 635 | fn | findNearestBotTimelineEntry | (private) | `function findNearestBotTimelineEntry(params: {` |
| 654 | fn | selectWholeCommentTimelineEntries | (private) | `function selectWholeCommentTimelineEntries(para...` |
| 702 | fn | formatWholeCommentTimelinePromptLines | (private) | `function formatWholeCommentTimelinePromptLines(...` |
| 720 | fn | fetchDriveCommentContext | (private) | `async function fetchDriveCommentContext(params: {` |
| 1014 | fn | buildDriveCommentSurfacePrompt | (private) | `function buildDriveCommentSurfacePrompt(params: {` |
| 1203 | fn | resolveDriveCommentEventCore | (private) | `async function resolveDriveCommentEventCore(par...` |
| 1305 | fn | parseFeishuDriveCommentNoticeEventPayload | pub | `export function parseFeishuDriveCommentNoticeEv...` |
| 1343 | fn | resolveDriveCommentEventTurn | pub | `export async function resolveDriveCommentEventT...` |

## Public API

### `parseFeishuDriveCommentNoticeEventPayload`

```
export function parseFeishuDriveCommentNoticeEventPayload(
```

**Line:** 1305 | **Kind:** fn

### `resolveDriveCommentEventTurn`

```
export async function resolveDriveCommentEventTurn(
```

**Line:** 1343 | **Kind:** fn
