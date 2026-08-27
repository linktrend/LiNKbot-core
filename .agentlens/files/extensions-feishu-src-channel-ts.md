# extensions/feishu/src/channel.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1887
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 115 | fn | readFeishuMediaParam | (private) | `function readFeishuMediaParam(params: Record<st...` |
| 123 | fn | readBooleanParam | (private) | `function readBooleanParam(params: Record<string...` |
| 133 | fn | hasLegacyFeishuCardCommandValue | (private) | `function hasLegacyFeishuCardCommandValue(action...` |
| 142 | fn | containsLegacyFeishuCardCommandValue | (private) | `function containsLegacyFeishuCardCommandValue(n...` |
| 183 | fn | toFeishuMessageSendResult | (private) | `function toFeishuMessageSendResult(` |
| 250 | fn | createFeishuActionClient | (private) | `async function createFeishuActionClient(account...` |
| 255 | fn | resolveFeishuChatTypeById | (private) | `async function resolveFeishuChatTypeById(params: {` |
| 265 | fn | resolveFeishuMessageChatType | (private) | `async function resolveFeishuMessageChatType(par...` |
| 299 | fn | describeFeishuMessageTool | (private) | `function describeFeishuMessageTool({` |
| 347 | fn | setFeishuNamedAccountEnabled | (private) | `function setFeishuNamedAccountEnabled(` |
| 384 | fn | isFeishuReactionsActionEnabled | (private) | `function isFeishuReactionsActionEnabled(params: {` |
| 401 | fn | areAnyFeishuReactionActionsEnabled | (private) | `function areAnyFeishuReactionActionsEnabled(cfg...` |
| 410 | fn | isFeishuGroupTopicSessionKey | (private) | `function isFeishuGroupTopicSessionKey(sessionKe...` |
| 418 | type | FeishuActionReplyAnchor | (private) | - |
| 423 | type | FeishuSendActionContext | (private) | - |
| 428 | fn | resolveFeishuTopicAutoThreadAnchor | (private) | `function resolveFeishuTopicAutoThreadAnchor(ctx...` |
| 439 | fn | buildFeishuSendReplyAnchor | (private) | `function buildFeishuSendReplyAnchor(ctx: Feishu...` |
| 453 | fn | isSupportedFeishuDirectConversationId | (private) | `function isSupportedFeishuDirectConversationId(...` |
| 464 | fn | normalizeFeishuAcpConversationId | (private) | `function normalizeFeishuAcpConversationId(conve...` |
| 483 | fn | matchFeishuAcpConversation | (private) | `function matchFeishuAcpConversation(params: {` |
| 524 | fn | resolveFeishuSenderScopedCommandConversation | (private) | `function resolveFeishuSenderScopedCommandConver...` |
| 573 | fn | resolveFeishuCommandConversation | (private) | `function resolveFeishuCommandConversation(param...` |
| 617 | fn | jsonActionResult | (private) | `function jsonActionResult(details: Record<strin...` |
| 624 | fn | readFirstString | (private) | `function readFirstString(` |
| 643 | fn | resolveFeishuMessageActionResponsePrefix | (private) | `function resolveFeishuMessageActionResponsePref...` |
| 661 | fn | readOptionalPositiveInteger | (private) | `function readOptionalPositiveInteger(` |
| 674 | fn | resolveFeishuActionTarget | (private) | `function resolveFeishuActionTarget(ctx: {` |
| 681 | fn | resolveFeishuChatId | (private) | `function resolveFeishuChatId(ctx: {` |
| 702 | fn | resolveFeishuMessageId | (private) | `function resolveFeishuMessageId(params: Record<...` |
| 706 | fn | resolveFeishuMessageReadTarget | (private) | `function resolveFeishuMessageReadTarget(ctx: {` |
| 739 | fn | assertFeishuMessageMatchesReadTarget | (private) | `function assertFeishuMessageMatchesReadTarget(p...` |
| 749 | fn | authorizeFeishuMessageReadTarget | (private) | `async function authorizeFeishuMessageReadTarget...` |
| 755 | fn | authorize | (private) | `const authorize = (chatType?: "p2p" | "group") =>` |
| 789 | fn | getAuthorizedFeishuChatInfo | (private) | `async function getAuthorizedFeishuChatInfo(para...` |
| 829 | fn | getAuthorizedFeishuMessage | (private) | `async function getAuthorizedFeishuMessage(param...` |
| 882 | fn | requireAuthorizedFeishuMessage | (private) | `async function requireAuthorizedFeishuMessage(` |
| 892 | fn | resolveFeishuMemberId | (private) | `function resolveFeishuMemberId(params: Record<s...` |
| 905 | fn | resolveFeishuMemberIdType | (private) | `function resolveFeishuMemberIdType(` |
| 911 | fn | resolveRequestedFeishuMemberIdType | (private) | `function resolveRequestedFeishuMemberIdType(` |
