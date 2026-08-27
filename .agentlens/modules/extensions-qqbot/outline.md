# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/qqbot/src/engine/gateway/gateway-connection.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | interface | GatewayConnectionContext | (private) |
| 58 | class | GatewayConnection | pub |
| 104 | fn | stop | (private) |
| 155 | fn | runCleanup | (private) |

## extensions/qqbot/src/engine/gateway/interaction-handler.test.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | waitForQqInteraction | (private) |
| 55 | fn | makeAccount | (private) |
| 69 | fn | makeRestrictedCfg | (private) |
| 84 | fn | makeCommandAuthorizedFallbackCfg | (private) |
| 96 | fn | makeApprovalEvent | (private) |
| 115 | fn | installPlatformAdapter | (private) |

## extensions/qqbot/src/engine/gateway/outbound-dispatch.test.ts (1554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 84 | fn | makeInbound | (private) |
| 117 | fn | makeInboundRuntime | (private) |
| 164 | fn | makeRuntime | (private) |
| 188 | fn | dispatcherOptions | (private) |

## extensions/qqbot/src/engine/gateway/outbound-dispatch.ts (857 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | interface | OutboundDispatchDeps | (private) |
| 74 | type | ReplyDeliverPayload | (private) |
| 82 | fn | shouldDeliverToolProgressImmediately | (private) |
| 95 | fn | immediateToolProgressText | (private) |
| 106 | fn | hasReplyMedia | (private) |
| 110 | fn | isSilentBlockReplyText | (private) |
| 114 | fn | blockReplyTextForDelivery | (private) |
| 119 | fn | isSilentBlockReply | (private) |
| 123 | fn | isMediaOnlyBlockReply | (private) |
| 135 | fn | dispatchOutbound | pub |
| 161 | fn | sendErrorMessage | (private) |
| 381 | fn | recordOutbound | (private) |
| 757 | fn | resolveCommandSource | (private) |
| 769 | fn | buildCtxPayload | (private) |
