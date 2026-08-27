# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## extensions/imessage/src/actions.test.ts (1648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | fn | cfg | (private) |
| 92 | fn | imsgOptions | (private) |
| 1155 | fn | readLastAttachment | (private) |

## extensions/imessage/src/actions.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | readMessageText | (private) |
| 62 | fn | resolveIMessageDeliveryTarget | (private) |
| 77 | fn | resolveIMessageActionTarget | (private) |
| 91 | fn | matchesIMessageCurrentConversation | (private) |
| 113 | fn | createIMessageTargetAliases | (private) |
| 123 | fn | rememberOutboundBridgeMessage | (private) |
| 148 | fn | readMessageIdWithChatFallback | (private) |
| 166 | type | IMessageActionsRuntime | (private) |
| 168 | fn | resolveChatGuid | (private) |
| 230 | fn | formatUnresolvedTarget | (private) |
| 240 | fn | buildChatContextFromActionParams | (private) |
| 249 | fn | mapTapbackReaction | (private) |
| 275 | fn | decodeBase64Buffer | (private) |
| 295 | type | ReplyAttachmentSpec | (private) |
| 305 | fn | extractReplyAttachment | (private) |
| 349 | fn | effectIdFromParam | (private) |
| 390 | fn | assertActionEnabled | (private) |
| 451 | fn | probePrivateApiStatus | (private) |
| 458 | fn | assertPrivateApiEnabled | (private) |
| 494 | fn | chatGuid | (private) |
| 502 | fn | messageReference | (private) |

## extensions/imessage/src/approval-native.test.ts (842 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | IMessageConfig | (private) |
| 15 | fn | buildConfig | (private) |
| 32 | fn | buildExecRequest | (private) |
| 52 | fn | buildPluginRequest | (private) |
| 73 | fn | nativeShouldHandle | (private) |
| 88 | fn | buildLocalApprovalPayload | (private) |

## extensions/imessage/src/approval-reaction-poller.test.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | IMessageTargetParams | (private) |
| 16 | fn | registerIMessageApprovalReactionTarget | (private) |
| 25 | fn | createClient | (private) |

## extensions/imessage/src/approval-reactions.test.ts (1199 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | IMessageTargetParams | (private) |
| 29 | fn | registerIMessageApprovalReactionTarget | (private) |
| 45 | fn | requireExecApprovalMetadata | (private) |
| 53 | fn | buildTapbackReactionPayload | (private) |
| 308 | fn | buildPayload | (private) |

## extensions/imessage/src/approval-reactions.ts (992 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | IMessageApprovalReactionBinding | (private) |
| 35 | type | IMessageApprovalReactionResolution | (private) |
| 40 | type | IMessageApprovalReactionHandleResult | (private) |
| 49 | type | IMessageApprovalReactionTarget | (private) |
| 53 | type | IMessageApprovalConversationKey | pub |
| 61 | type | PendingIMessageApprovalReactionPollTarget | pub |
| 76 | fn | chatIdToKeyValue | (private) |
| 88 | fn | enumerateConversationKeyForms | (private) |
| 109 | fn | normalizeConversationKey | (private) |
| 115 | fn | enumerateReactionTargetKeys | (private) |
| 130 | fn | prunePendingReactionPollTargets | (private) |
| 138 | fn | resolvePendingReactionPollExpiry | (private) |
| 157 | fn | normalizePollTargetMessageId | (private) |
| 161 | fn | mergePollTargetConversation | (private) |
| 173 | fn | listPendingIMessageApprovalReactionPollTargets | pub |
| 201 | fn | reportPersistentApprovalReactionError | (private) |
| 211 | fn | reportApprovalBindingCorrelationMismatch | (private) |
| 230 | fn | readPersistedTarget | (private) |
| 265 | fn | listIMessageApprovalReactionBindings | (private) |
| 271 | fn | buildIMessageApprovalReactionHint | pub |
| 277 | fn | addIMessageApprovalReactionHintToText | pub |
| 284 | fn | appendIMessageApprovalReactionHintForOutboundMessage | pub |
| 298 | type | IMessageApprovalDeliveryBinding | (private) |
| 307 | fn | readStrictDecisionList | (private) |
| 324 | fn | decisionSetsMatch | (private) |
| 331 | fn | readStrictApprovalMetadata | (private) |
| 352 | fn | bindingsMatch | (private) |
| 364 | fn | readTypedApprovalPresentationBinding | (private) |
| 392 | fn | visibleApprovalBindingMatches | (private) |
| 443 | fn | readDeliveredApprovalBinding | (private) |
| 475 | fn | addIMessageApprovalReactionHintToStructuredPayload | pub |
| 507 | fn | normalizeApprovalDecision | (private) |
| 521 | fn | extractIMessageApprovalPromptBinding | pub |
| 569 | fn | registerIMessageApprovalReactionTarget | pub |
| 624 | fn | registerIMessageApprovalReactionTargetForOutboundMessage | pub |
| 649 | fn | buildIMessageApprovalConversationKeyForTarget | pub |
| 670 | fn | listDeliveredIMessageApprovalGuids | (private) |
| 706 | fn | registerIMessageApprovalReactionTargetForDeliveredPayload | pub |
| 745 | fn | unregisterIMessageApprovalReactionTarget | pub |
| 757 | fn | resolveTarget | (private) |
| 771 | fn | formatCanonicalApprovalTerminalState | (private) |
| 779 | fn | resolveIMessageApprovalReactionTargetWithPersistence | pub |
| 802 | type | IMessageApprovalReactionEvent | (private) |
| 819 | fn | readApprovalReactionEvent | (private) |
| 858 | fn | handleIMessageApprovalReaction | pub |
| 976 | fn | maybeResolveIMessageApprovalReaction | pub |
| 987 | fn | clearIMessageApprovalReactionTargetsForTest | pub |

## extensions/imessage/src/message-resource.test.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | MessageResourceModule | (private) |
| 11 | type | ReplyCacheModule | (private) |

## extensions/imessage/src/monitor-reply-cache.test.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | ReplyCacheModule | (private) |
| 13 | fn | loadReplyCache | (private) |

## extensions/imessage/src/monitor.gating.test-support.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | InboundProcessingModule | (private) |
| 12 | fn | baseCfg | (private) |
| 29 | fn | resolve | (private) |
| 53 | fn | resolveDispatchDecision | (private) |
| 89 | fn | buildDispatchContextPayload | (private) |

## extensions/imessage/src/monitor.last-route.test.ts (2417 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | expireCachedPrivateApiStatus | (private) |
| 113 | type | RunChannelInboundEventParams | (private) |
| 116 | fn | runChannelInboundEventForLastRouteTest | (private) |
| 184 | fn | stopIfSettled | (private) |

## extensions/imessage/src/send.test.ts (1490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | ApprovalReactionsModule | (private) |
| 10 | type | PersistedEchoCacheModule | (private) |
| 11 | type | ReplyCacheModule | (private) |
| 12 | type | SendModule | (private) |
| 20 | fn | loadFreshSendModule | (private) |
| 41 | fn | createClient | (private) |
| 48 | fn | createRejectingClient | (private) |
| 58 | fn | getClientMocks | (private) |
| 68 | fn | createApprovalText | (private) |

## extensions/imessage/src/send.ts (1019 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | ParsedIMessageTarget | (private) |
| 51 | type | IMessageSendTransport | (private) |
| 53 | type | IMessageSendOpts | (private) |
| 94 | type | IMessageSendResult | (private) |
| 115 | fn | resolveMessageId | (private) |
| 134 | fn | resolveOutboundMessageGuid | (private) |
| 156 | fn | isNumericMessageRowId | (private) |
| 160 | fn | resolveTargetService | (private) |
| 170 | fn | normalizeResolvedMessageGuid | (private) |
| 178 | fn | loadNodeSqlite | (private) |
| 186 | fn | resolveMessageGuidFromChatDb | (private) |
| 217 | fn | getStringRowValue | (private) |
| 221 | fn | appleMessageDateLowerBoundMs | (private) |
| 230 | fn | resolveLatestSentMessageGuidFromChatDb | (private) |
| 297 | fn | canResolveLatestSentMessageGuidFromChatDb | (private) |
| 310 | fn | resolveApprovalBindingMessageGuid | (private) |
| 333 | fn | resolveFallbackSentMessageGuid | (private) |
| 368 | fn | shouldRecoverApprovalPromptGuid | (private) |
| 381 | fn | canCheckSentMessageAfterRpcTimeout | (private) |
| 391 | fn | resolveOutboundEchoText | (private) |
| 402 | fn | createIMessageSendReceipt | (private) |
| 440 | fn | isConcreteIMessageMessageId | (private) |
| 445 | fn | canSynthesizeAttachmentChatHandle | (private) |
| 450 | fn | resolveOutboundEchoScope | (private) |
| 466 | fn | resolveIMessageCliFailure | (private) |
| 475 | fn | isIMessageRpcSendTimeout | (private) |
| 480 | fn | runIMessageCliJson | (private) |
| 494 | fn | stringValue | (private) |
| 498 | fn | resultService | (private) |
| 503 | fn | resolvePendingPersistedEchoTtlMs | (private) |
| 510 | fn | isAttachmentCommandFallbackError | (private) |
| 520 | fn | isThreadedReplyUnsupportedError | (private) |
| 527 | fn | resolveAttachmentChatTarget | (private) |
| 559 | fn | trySendAttachmentForTarget | (private) |
| 680 | fn | sendMessageIMessage | pub |
| 863 | fn | stopOwnedClient | (private) |

## extensions/imessage/src/status.test.ts (812 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | createMockChildProcess | (private) |
| 64 | fn | withPlatform | (private) |
