# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/signal/src/monitor/event-handler.inbound-context.test.ts (2264 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | DispatchInboundMessageMockParams | (private) |
| 32 | type | SendReactionSignalMockCall | (private) |
| 92 | type | RunParams | (private) |
| 113 | fn | runPrepared | (private) |
| 200 | fn | requireCapturedContext | (private) |
| 207 | fn | nextTimerTick | (private) |

## extensions/signal/src/monitor/event-handler.mention-gating.test.ts (603 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | SignalMsgContext | (private) |
| 15 | fn | getCapturedCtx | (private) |
| 22 | fn | getGroupHistoryEntries | (private) |
| 46 | type | RunParams | (private) |
| 102 | type | GroupEventOpts | (private) |
| 114 | fn | makeGroupEvent | (private) |
| 126 | fn | createMentionHandler | (private) |
| 148 | fn | createMentionGatedHistoryHandler | (private) |
| 154 | fn | createSignalConfig | (private) |
| 169 | fn | expectSkippedGroupHistory | (private) |

## extensions/signal/src/monitor/event-handler.ts (1420 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | fn | isSignalReplySessionInitConflictError | (private) |
| 112 | fn | formatAttachmentKindCount | (private) |
| 118 | fn | formatAttachmentSummaryPlaceholder | (private) |
| 130 | fn | resolveSignalInboundRoute | (private) |
| 148 | fn | resolveSignalStatusReactionTimestamp | (private) |
| 159 | type | SignalStatusDispatchResult | (private) |
| 163 | fn | hasSignalStatusReplyDeliveryFailure | (private) |
| 172 | fn | resolveSignalStatusReactionEmojis | (private) |
| 186 | fn | finalizeSignalStatusReaction | (private) |
| 220 | fn | createSignalEventHandler | pub |
| 224 | fn | handleSignalInboundMessage | (private) |
| 653 | fn | buildFlushIngressLifecycle | (private) |
| 665 | fn | adoptAll | (private) |
| 709 | fn | flushSignalInboundEntries | (private) |
| 749 | fn | retrySignalInboundFlush | (private) |
| 786 | fn | flushDebouncedSignalInboundEntries | (private) |
| 818 | fn | reportSignalInboundFlushError | (private) |
| 851 | fn | handleReactionOnlyInbound | (private) |
| 1193 | fn | pendingPlaceholder | (private) |
