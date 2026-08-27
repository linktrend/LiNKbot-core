# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.test.ts (1721 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | CapturedReplyPayload | (private) |
| 17 | type | CapturedDispatchParams | (private) |
| 130 | type | TestRoute | (private) |
| 131 | type | TestMsg | (private) |
| 132 | type | TestMsgOverrides | (private) |
| 133 | type | TestAdmissionOverride | (private) |
| 135 | fn | testReceipt | (private) |
| 148 | fn | makeRoute | (private) |
| 161 | fn | makeMsg | (private) |
| 189 | fn | directAdmission | (private) |
| 201 | fn | groupAdmission | (private) |
| 213 | fn | getCapturedDeliver | (private) |
| 217 | fn | getCapturedOnError | (private) |
| 221 | fn | getCapturedOnSettled | (private) |
| 225 | fn | getCapturedReplyOptions | (private) |
| 229 | fn | requireRecord | (private) |
| 236 | fn | expectRecordFields | (private) |
| 242 | fn | requireMockArg | (private) |
| 251 | fn | requireLastMockArg | (private) |
| 260 | fn | expectReplyResultFields | (private) |
| 268 | fn | expectRememberSentContextFields | (private) |
| 278 | type | BufferedReplyParams | (private) |
| 279 | type | BufferedReplyOverrides | (private) |
| 283 | fn | finalizedContext | (private) |
| 289 | fn | makeReplyLogger | (private) |
| 298 | fn | acceptedDeliveryResult | (private) |
| 313 | fn | unacceptedDeliveryResult | (private) |
| 321 | fn | dispatchBufferedReply | (private) |
| 346 | fn | runWhatsAppReplyPlan | (private) |
| 1513 | class | BoomLikeError | (private) |

## extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.ts (854 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ReplyLifecycleKind | (private) |
| 55 | type | ChannelReplyOnModelSelected | (private) |
| 59 | type | WhatsAppDispatchPipeline | (private) |
| 63 | type | VisibleReplyTarget | (private) |
| 71 | type | ReplyThreadingContext | (private) |
| 75 | type | SenderContext | (private) |
| 81 | type | ReplyDeliveryInfo | (private) |
| 83 | type | PendingWhatsAppMediaOnlyPayload | (private) |
| 89 | type | WhatsAppMediaOnlyFlushResult | (private) |
| 94 | fn | normalizeErrForLog | (private) |
| 102 | type | WhatsAppReplyDeliveryVisibility | (private) |
| 106 | fn | whatsAppReplyDeliveryVisibility | (private) |
| 112 | fn | whatsAppReplyDeliveryVisibilityFromDurableResult | (private) |
| 118 | fn | readTrimmedString | (private) |
| 122 | fn | markWhatsAppReplyDeliveryErrorVisibleAfterFlush | (private) |
| 129 | fn | logWhatsAppReplyDeliveryError | (private) |
| 152 | fn | resolveWhatsAppDurableReplyToId | (private) |
| 175 | fn | resolveWhatsAppDisableBlockStreaming | (private) |
| 182 | fn | resolveWhatsAppDeliverablePayload | (private) |
| 201 | fn | getWhatsAppPayloadMediaUrls | (private) |
| 210 | fn | hasWhatsAppMediaUrlOverlap | (private) |
| 219 | fn | shouldDeferWhatsAppMediaOnlyPayload | (private) |
| 232 | fn | createWhatsAppMediaOnlyReplyCoalescer | (private) |
| 270 | fn | logWhatsAppMediaOnlyFlushResult | (private) |
| 284 | fn | resolveWhatsAppResponsePrefix | pub |
| 299 | fn | buildWhatsAppInboundContext | pub |
| 419 | fn | resolveWhatsAppDmRouteTarget | pub |
| 438 | fn | updateWhatsAppMainLastRoute | pub |
| 495 | fn | createWhatsAppReplyPlan | pub |
| 816 | fn | finalizeWhatsAppStatusReaction | (private) |

## extensions/whatsapp/src/auto-reply/monitor/on-message.acp-bindings.test.ts (661 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 203 | type | ConfiguredBindingResolution | (private) |
| 205 | fn | resolvedConfiguredRoute | (private) |
| 221 | fn | createCfg | (private) |
| 237 | fn | createGroupCfg | (private) |
| 253 | fn | createHandler | (private) |
| 286 | fn | createMessage | (private) |
| 305 | type | TestMessageOverrides | (private) |
| 307 | fn | createGroupMessage | (private) |
| 332 | fn | createGroupAudioMessage | (private) |

## extensions/whatsapp/src/auto-reply/monitor/process-message.test.ts (599 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 160 | fn | makeAccount | (private) |
| 168 | fn | makePolicy | (private) |
| 186 | fn | makeBaseMsg | (private) |
| 236 | fn | callProcessMessage | (private) |
| 263 | fn | mockCallArg | (private) |

## extensions/whatsapp/src/auto-reply/monitor/process-message.ts (612 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | WhatsAppMessageReceivedHookConfig | (private) |
| 86 | fn | readWhatsAppMessageReceivedHookOptIn | (private) |
| 97 | fn | shouldEmitWhatsAppMessageReceivedHooks | (private) |
| 116 | fn | emitWhatsAppMessageReceivedHooks | (private) |
| 150 | fn | emitWhatsAppMessageReceivedHooksIfEnabled | (private) |
| 171 | fn | resolvePinnedMainDmRecipient | (private) |
| 182 | fn | processMessage | pub |
