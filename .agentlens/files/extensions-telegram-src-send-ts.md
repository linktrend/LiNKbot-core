# extensions/telegram/src/send.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2748
- **Language:** TypeScript
- **Symbols:** 105
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 106 | type | TelegramApi | (private) | - |
| 107 | type | TelegramApiOverride | pub | - |
| 108 | type | TelegramSendMessageParams | (private) | - |
| 109 | type | TelegramSendPollParams | (private) | - |
| 110 | type | TelegramSendLocationParams | (private) | - |
| 111 | type | TelegramSendVenueParams | (private) | - |
| 112 | type | TelegramEditMessageTextParams | (private) | - |
| 113 | type | TelegramEditMessageCaptionParams | (private) | - |
| 114 | type | TelegramCreateForumTopicParams | (private) | - |
| 115 | type | TelegramThreadScopedParams | (private) | - |
| 124 | type | TelegramSendOpts | (private) | - |
| 167 | type | TelegramSendResult | (private) | - |
| 177 | type | TelegramLocationSendOpts | (private) | - |
| 195 | type | TelegramOutboundSuccessLogParams | (private) | - |
| 207 | type | TelegramReactionOpts | (private) | - |
| 218 | type | TelegramTypingOpts | (private) | - |
| 228 | fn | resolveTelegramMessageIdOrThrow | (private) | `function resolveTelegramMessageIdOrThrow(` |
| 240 | fn | splitTelegramPlainTextChunksForTests | pub | `export function splitTelegramPlainTextChunksFor...` |
| 244 | fn | logTelegramOutboundSendOk | (private) | `function logTelegramOutboundSendOk(params: Tele...` |
| 270 | fn | buildTelegramTextSendReceipt | (private) | `function buildTelegramTextSendReceipt(params: {` |
| 294 | fn | resolveAcceptedReplyToMessageId | (private) | `function resolveAcceptedReplyToMessageId(` |
| 306 | fn | toAcceptedThreadScopedParams | (private) | `function toAcceptedThreadScopedParams(` |
| 340 | type | CachedTelegramClientOptions | (private) | - |
| 347 | type | TelegramClientOptionsLease | (private) | - |
| 350 | type | ResolvedTelegramClientOptions | (private) | - |
| 357 | fn | resetTelegramClientOptionsCacheForTests | pub | `export function resetTelegramClientOptionsCache...` |
| 361 | fn | createTelegramHttpLogger | (private) | `function createTelegramHttpLogger(cfg: OpenClaw...` |
| 375 | fn | shouldUseTelegramClientOptionsCache | (private) | `function shouldUseTelegramClientOptionsCache():...` |
| 379 | fn | buildTelegramClientOptionsCacheKey | (private) | `function buildTelegramClientOptionsCacheKey(par...` |
| 394 | fn | closeCachedTelegramClientOptions | (private) | `function closeCachedTelegramClientOptions(entry...` |
| 411 | fn | leaseCachedTelegramClientOptions | (private) | `function leaseCachedTelegramClientOptions(` |
| 430 | fn | setCachedTelegramClientOptions | (private) | `function setCachedTelegramClientOptions(` |
| 451 | fn | resolveTelegramClientOptions | (private) | `function resolveTelegramClientOptions(` |
| 505 | fn | resolveToken | (private) | `function resolveToken(explicit: string | undefi...` |
| 517 | fn | resolveChatId | (private) | `async function resolveChatId(` |
| 549 | fn | resolveAndPersistChatId | (private) | `async function resolveAndPersistChatId(params: {` |
| 572 | fn | normalizeMessageId | (private) | `function normalizeMessageId(raw: string | numbe...` |
| 589 | fn | isTelegramMessageNotModifiedError | (private) | `function isTelegramMessageNotModifiedError(err:...` |
| 593 | fn | isTelegramMessageHasNoTextError | (private) | `function isTelegramMessageHasNoTextError(err: u...` |
| 597 | fn | isTelegramMessageDeleteNoopError | (private) | `function isTelegramMessageDeleteNoopError(err: ...` |
| 601 | fn | withTelegramHtmlParseFallback | (private) | `async function withTelegramHtmlParseFallback<T>...` |
| 624 | fn | withTelegramNativeQuoteFallback | (private) | `async function withTelegramNativeQuoteFallback<...` |
| 659 | type | TelegramApiContext | (private) | - |
| 666 | fn | resolveTelegramApiContext | (private) | `function resolveTelegramApiContext(opts: {` |
| 699 | fn | withTelegramApiContextLease | (private) | `function withTelegramApiContextLease<T>(` |
| 706 | type | TelegramRequestWithDiag | (private) | - |
| 712 | fn | createTelegramRequestWithDiag | (private) | `function createTelegramRequestWithDiag(params: {` |
| 738 | fn | runRequest | (private) | `const runRequest = () => request(fn, label);` |
| 754 | fn | wrapTelegramChatNotFoundError | (private) | `function wrapTelegramChatNotFoundError(err: unk...` |
| 781 | fn | createRequestWithChatNotFound | (private) | `function createRequestWithChatNotFound(params: {` |
| 795 | fn | createTelegramNonIdempotentRequestWithDiag | (private) | `function createTelegramNonIdempotentRequestWith...` |
| 814 | fn | sendMessageTelegram | pub | `export async function sendMessageTelegram(` |
| 826 | fn | sendMessageTelegramWithContext | (private) | `async function sendMessageTelegramWithContext(` |
| 843 | fn | reportDelivery | (private) | `const reportDelivery = async (` |
| 854 | fn | recordDeliveredPromptContext | (private) | `const recordDeliveredPromptContext = async (` |
| 892 | fn | buildThreadParams | (private) | `const buildThreadParams = (includeReplyTo: bool...` |
| 927 | fn | renderHtmlText | (private) | `const renderHtmlText = (value: string) => rende...` |
| 932 | type | TelegramTextChunk | (private) | - |
| 937 | fn | sendTelegramTextChunk | (private) | `const sendTelegramTextChunk = async (` |
| 949 | fn | requestSendMessage | (private) | `const requestSendMessage = (` |
| 966 | fn | requestPlain | (private) | `const requestPlain = (label: string) =>` |
| 986 | fn | shouldIncludeReplyForChunk | (private) | `const shouldIncludeReplyForChunk = (` |
| 995 | fn | buildTextParams | (private) | `const buildTextParams = (` |
| 1012 | fn | buildRichTextParams | (private) | `const buildRichTextParams = (` |
| 1139 | fn | sendChunkedText | (private) | `const sendChunkedText = async (` |
| 1331 | fn | shouldSendTelegramImageAsPhoto | (private) | `async function shouldSendTelegramImageAsPhoto(b...` |
| 1434 | fn | sendMedia | (private) | `const sendMedia = async (` |
| 1440 | fn | requestMedia | (private) | `const requestMedia = (requestParams: TelegramTh...` |
| 1463 | fn | mediaSender | (private) | `const mediaSender = (() => {` |
| 1623 | fn | sendLocationTelegram | pub | `export async function sendLocationTelegram(` |
| 1635 | fn | sendLocationTelegramWithContext | (private) | `async function sendLocationTelegramWithContext(` |
| 1755 | fn | sendTypingTelegram | pub | `export async function sendTypingTelegram(` |
| 1763 | fn | sendTypingTelegramWithContext | (private) | `async function sendTypingTelegramWithContext(` |
| 1797 | fn | reactMessageTelegram | pub | `export async function reactMessageTelegram(` |
| 1810 | fn | reactMessageTelegramWithContext | (private) | `async function reactMessageTelegramWithContext(` |
| 1858 | type | TelegramDeleteOpts | (private) | - |
| 1869 | fn | deleteMessageTelegram | pub | `export async function deleteMessageTelegram(` |
| 1881 | fn | deleteMessageTelegramWithContext | (private) | `async function deleteMessageTelegramWithContext(` |
| 1924 | fn | pinMessageTelegram | pub | `export async function pinMessageTelegram(` |
| 1936 | fn | pinMessageTelegramWithContext | (private) | `async function pinMessageTelegramWithContext(` |
| 1970 | fn | unpinMessageTelegram | pub | `export async function unpinMessageTelegram(` |
| 1982 | fn | unpinMessageTelegramWithContext | (private) | `async function unpinMessageTelegramWithContext(` |
| 2016 | type | TelegramEditForumTopicOpts | (private) | - |
| 2021 | fn | editForumTopicTelegram | pub | `export async function editForumTopicTelegram(` |
| 2056 | fn | editForumTopicTelegramWithContext | (private) | `async function editForumTopicTelegramWithContext(` |
| 2106 | fn | renameForumTopicTelegram | pub | `export async function renameForumTopicTelegram(` |
| 2124 | type | TelegramEditOpts | (private) | - |
| 2142 | type | TelegramEditReplyMarkupOpts | (private) | - |
| 2155 | fn | editMessageReplyMarkupTelegram | pub | `export async function editMessageReplyMarkupTel...` |
| 2168 | fn | editMessageReplyMarkupTelegramWithContext | (private) | `async function editMessageReplyMarkupTelegramWi...` |
| 2210 | fn | editMessageTelegram | pub | `export async function editMessageTelegram(` |
| 2223 | fn | editMessageTelegramWithContext | (private) | `async function editMessageTelegramWithContext(` |
| 2312 | fn | performTextEdit | (private) | `const performTextEdit = () => {` |
| 2372 | fn | performCaptionEdit | (private) | `const performCaptionEdit = () =>` |
| 2417 | fn | inferFilename | (private) | `function inferFilename(kind: MediaKind) {` |
| 2430 | type | TelegramStickerOpts | (private) | - |
| 2450 | fn | sendStickerTelegram | pub | `export async function sendStickerTelegram(` |
| 2466 | fn | sendStickerTelegramWithContext | (private) | `async function sendStickerTelegramWithContext(` |
| 2525 | type | TelegramPollOpts | (private) | - |
| 2549 | fn | sendPollTelegram | pub | `export async function sendPollTelegram(` |
| 2558 | fn | sendPollTelegramWithContext | (private) | `async function sendPollTelegramWithContext(` |
| 2645 | type | TelegramCreateForumTopicOpts | (private) | - |
| 2659 | type | TelegramCreateForumTopicResult | (private) | - |
| 2673 | fn | createForumTopicTelegram | pub | `export async function createForumTopicTelegram(` |
| 2693 | fn | createForumTopicTelegramWithContext | (private) | `async function createForumTopicTelegramWithCont...` |

## Public API

### `splitTelegramPlainTextChunksForTests`

```
export function splitTelegramPlainTextChunksForTests(text: string, limit: number): string[] {
```

**Line:** 240 | **Kind:** fn

### `resetTelegramClientOptionsCacheForTests`

```
export function resetTelegramClientOptionsCacheForTests(): void {
```

**Line:** 357 | **Kind:** fn

### `sendMessageTelegram`

```
export async function sendMessageTelegram(
```

**Line:** 814 | **Kind:** fn

### `sendLocationTelegram`

```
export async function sendLocationTelegram(
```

**Line:** 1623 | **Kind:** fn

### `sendTypingTelegram`

```
export async function sendTypingTelegram(
```

**Line:** 1755 | **Kind:** fn

### `reactMessageTelegram`

```
export async function reactMessageTelegram(
```

**Line:** 1797 | **Kind:** fn

### `deleteMessageTelegram`

```
export async function deleteMessageTelegram(
```

**Line:** 1869 | **Kind:** fn

### `pinMessageTelegram`

```
export async function pinMessageTelegram(
```

**Line:** 1924 | **Kind:** fn

### `unpinMessageTelegram`

```
export async function unpinMessageTelegram(
```

**Line:** 1970 | **Kind:** fn

### `editForumTopicTelegram`

```
export async function editForumTopicTelegram(
```

**Line:** 2021 | **Kind:** fn

### `renameForumTopicTelegram`

```
export async function renameForumTopicTelegram(
```

**Line:** 2106 | **Kind:** fn

### `editMessageReplyMarkupTelegram`

```
export async function editMessageReplyMarkupTelegram(
```

**Line:** 2155 | **Kind:** fn

### `editMessageTelegram`

```
export async function editMessageTelegram(
```

**Line:** 2210 | **Kind:** fn

### `sendStickerTelegram`

```
export async function sendStickerTelegram(
```

**Line:** 2450 | **Kind:** fn

### `sendPollTelegram`

```
export async function sendPollTelegram(
```

**Line:** 2549 | **Kind:** fn

### `createForumTopicTelegram`

```
export async function createForumTopicTelegram(
```

**Line:** 2673 | **Kind:** fn
