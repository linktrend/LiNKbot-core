# extensions/imessage/src/send.ts

[← Back to Module](../modules/extensions-imessage/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1019
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | type | ParsedIMessageTarget | (private) | - |
| 51 | type | IMessageSendTransport | (private) | - |
| 53 | type | IMessageSendOpts | (private) | - |
| 94 | type | IMessageSendResult | (private) | - |
| 115 | fn | resolveMessageId | (private) | `function resolveMessageId(result: Record<string...` |
| 134 | fn | resolveOutboundMessageGuid | (private) | `function resolveOutboundMessageGuid(` |
| 156 | fn | isNumericMessageRowId | (private) | `function isNumericMessageRowId(value: string | ...` |
| 160 | fn | resolveTargetService | (private) | `function resolveTargetService(target: ParsedIMe...` |
| 170 | fn | normalizeResolvedMessageGuid | (private) | `function normalizeResolvedMessageGuid(value: un...` |
| 178 | fn | loadNodeSqlite | (private) | `function loadNodeSqlite(): typeof import("node:...` |
| 186 | fn | resolveMessageGuidFromChatDb | (private) | `function resolveMessageGuidFromChatDb(params: {` |
| 217 | fn | getStringRowValue | (private) | `function getStringRowValue(row: Record<string, ...` |
| 221 | fn | appleMessageDateLowerBoundMs | (private) | `function appleMessageDateLowerBoundMs(sentAfter...` |
| 230 | fn | resolveLatestSentMessageGuidFromChatDb | (private) | `function resolveLatestSentMessageGuidFromChatDb...` |
| 297 | fn | canResolveLatestSentMessageGuidFromChatDb | (private) | `function canResolveLatestSentMessageGuidFromCha...` |
| 310 | fn | resolveApprovalBindingMessageGuid | (private) | `async function resolveApprovalBindingMessageGui...` |
| 333 | fn | resolveFallbackSentMessageGuid | (private) | `async function resolveFallbackSentMessageGuid(p...` |
| 368 | fn | shouldRecoverApprovalPromptGuid | (private) | `function shouldRecoverApprovalPromptGuid(params: {` |
| 381 | fn | canCheckSentMessageAfterRpcTimeout | (private) | `function canCheckSentMessageAfterRpcTimeout(par...` |
| 391 | fn | resolveOutboundEchoText | (private) | `function resolveOutboundEchoText(text: string, ...` |
| 402 | fn | createIMessageSendReceipt | (private) | `function createIMessageSendReceipt(params: {` |
| 440 | fn | isConcreteIMessageMessageId | (private) | `function isConcreteIMessageMessageId(messageId:...` |
| 445 | fn | canSynthesizeAttachmentChatHandle | (private) | `function canSynthesizeAttachmentChatHandle(raw:...` |
| 450 | fn | resolveOutboundEchoScope | (private) | `function resolveOutboundEchoScope(params: {` |
| 466 | fn | resolveIMessageCliFailure | (private) | `function resolveIMessageCliFailure(result: Reco...` |
| 475 | fn | isIMessageRpcSendTimeout | (private) | `function isIMessageRpcSendTimeout(error: unknow...` |
| 480 | fn | runIMessageCliJson | (private) | `async function runIMessageCliJson(` |
| 494 | fn | stringValue | (private) | `function stringValue(value: unknown): string | ...` |
| 498 | fn | resultService | (private) | `function resultService(value: unknown): IMessag...` |
| 503 | fn | resolvePendingPersistedEchoTtlMs | (private) | `function resolvePendingPersistedEchoTtlMs(timeo...` |
| 510 | fn | isAttachmentCommandFallbackError | (private) | `function isAttachmentCommandFallbackError(error...` |
| 520 | fn | isThreadedReplyUnsupportedError | (private) | `function isThreadedReplyUnsupportedError(error:...` |
| 527 | fn | resolveAttachmentChatTarget | (private) | `async function resolveAttachmentChatTarget(para...` |
| 559 | fn | trySendAttachmentForTarget | (private) | `async function trySendAttachmentForTarget(param...` |
| 680 | fn | sendMessageIMessage | pub | `export async function sendMessageIMessage(` |
| 863 | fn | stopOwnedClient | (private) | `const stopOwnedClient = async () => {` |

## Public API

### `sendMessageIMessage`

```
export async function sendMessageIMessage(
```

**Line:** 680 | **Kind:** fn
