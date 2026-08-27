# extensions/telegram/src/bot/delivery.replies.ts

[← Back to Module](../modules/extensions-telegram-src-bot/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1077
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | type | DeliveryProgress | (private) | - |
| 83 | type | TelegramReplyChannelData | (private) | - |
| 91 | type | TelegramReplyQuoteForSend | (private) | - |
| 98 | type | TelegramDeliveryTextChunk | (private) | - |
| 106 | type | ChunkTextFn | (private) | - |
| 108 | fn | buildChunkTextResolver | (private) | `function buildChunkTextResolver(params: {` |
| 172 | fn | markDelivered | (private) | `function markDelivered(progress: DeliveryProgre...` |
| 177 | fn | filterEmptyTelegramTextChunks | (private) | `function filterEmptyTelegramTextChunks<` |
| 191 | fn | resolveReplyQuoteForSend | (private) | `function resolveReplyQuoteForSend(params: {` |
| 231 | fn | deliverTextReply | (private) | `async function deliverTextReply(params: {` |
| 297 | fn | isVoiceMessagesForbidden | (private) | `function isVoiceMessagesForbidden(err: unknown)...` |
| 304 | fn | isCaptionTooLong | (private) | `function isCaptionTooLong(err: unknown): boolean {` |
| 311 | fn | resolveVoiceFallbackText | (private) | `function resolveVoiceFallbackText(reply: ReplyP...` |
| 321 | fn | buildPlainCaptionParams | (private) | `function buildPlainCaptionParams(` |
| 330 | fn | sendTelegramCaptionedMediaWithFallback | (private) | `async function sendTelegramCaptionedMediaWithFa...` |
| 339 | fn | sendMedia | (private) | `const sendMedia = (` |
| 375 | fn | deliverMediaReply | (private) | `async function deliverMediaReply(params: {` |
| 405 | fn | recordPromptContextMessage | (private) | `const recordPromptContextMessage = async (messa...` |
| 413 | fn | deliverAcceptedMedia | (private) | `const deliverAcceptedMedia = async (options: {` |
| 523 | fn | sendVoiceMedia | (private) | `const sendVoiceMedia = async (` |
| 662 | fn | maybePinFirstDeliveredMessage | (private) | `async function maybePinFirstDeliveredMessage(pa...` |
| 685 | type | EmitMessageSentHookParams | (private) | - |
| 697 | fn | buildTelegramSentHookContext | (private) | `function buildTelegramSentHookContext(params: E...` |
| 712 | fn | emitInternalMessageSentHook | pub | `export function emitInternalMessageSentHook(par...` |
| 730 | fn | emitMessageSentHooks | (private) | `function emitMessageSentHooks(` |
| 754 | fn | emitTelegramMessageSentHooks | pub | `export function emitTelegramMessageSentHooks(pa...` |
| 763 | fn | deliverReplies | pub | `export async function deliverReplies(params: {` |

## Public API

### `emitInternalMessageSentHook`

```
export function emitInternalMessageSentHook(params: EmitMessageSentHookParams): void {
```

**Line:** 712 | **Kind:** fn

### `emitTelegramMessageSentHooks`

```
export function emitTelegramMessageSentHooks(params: EmitMessageSentHookParams): void {
```

**Line:** 754 | **Kind:** fn

### `deliverReplies`

```
export async function deliverReplies(params: {
```

**Line:** 763 | **Kind:** fn
