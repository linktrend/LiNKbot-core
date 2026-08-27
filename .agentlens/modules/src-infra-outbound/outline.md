# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 31 large files in this module.

## src/infra/outbound/agent-delivery.test.ts (1002 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 149 | fn | buildDeliveryPlan | (private) |

## src/infra/outbound/channel-resolution.test.ts (605 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | importChannelResolution | (private) |
| 61 | fn | firstMockArg | (private) |

## src/infra/outbound/current-conversation-bindings.test.ts (691 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | CurrentConversationBindingDatabase | (private) |
| 32 | fn | expectSessionBinding | (private) |
| 39 | fn | expectBindingFields | (private) |
| 50 | fn | expectBindingMetadata | (private) |
| 60 | fn | buildConversationKey | (private) |
| 66 | fn | seedPersistedBinding | (private) |
| 94 | fn | setMinimalCurrentConversationRegistry | (private) |
| 134 | fn | withReadOnlyStateDatabase | (private) |
| 144 | fn | workspaceConversation | (private) |
| 152 | fn | bindWorkspaceConversation | (private) |
| 169 | fn | resolveWorkspaceConversation | (private) |

## src/infra/outbound/deliver.test.ts (6226 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 135 | fn | makeLogger | (private) |
| 146 | type | DeliverModule | (private) |
| 158 | type | DeliverOutboundArgs | (private) |
| 159 | type | DeliverOutboundPayload | (private) |
| 160 | type | MatrixSendFn | (private) |
| 166 | fn | resolveMatrixSender | (private) |
| 174 | fn | requireMockCallArg | (private) |
| 186 | fn | requireMockCall | (private) |
| 198 | fn | requireMatrixSendCall | (private) |
| 202 | fn | withMatrixChannel | (private) |
| 246 | fn | deliverMatrixPayload | (private) |
| 260 | fn | runChunkedMatrixDelivery | (private) |
| 281 | fn | deliverSingleMatrixForHookTest | (private) |
| 293 | fn | flushDiagnosticEvents | (private) |
| 299 | fn | runBestEffortPartialFailureDelivery | (private) |

## src/infra/outbound/deliver.ts (2836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 128 | type | OutboundDeliveryQueuePolicy | pub |
| 130 | type | OutboundDeliveryIntent | pub |
| 138 | type | DurableFinalDeliveryRequirement | pub |
| 142 | type | DurableFinalDeliveryRequirements | pub |
| 146 | type | OutboundDurableDeliverySupport | (private) |
| 166 | type | ChannelHandler | (private) |
| 215 | type | PlatformSendRoute | (private) |
| 220 | type | ChannelHandlerParams | (private) |
| 246 | fn | resolveChannelOutboundDirectiveOptions | (private) |
| 256 | fn | createChannelHandler | (private) |
| 266 | fn | loadBootstrappedOutboundAdapter | (private) |
| 282 | fn | runChannelMessageSendWithLifecycle | (private) |
| 334 | fn | resolveOutboundDurableFinalDeliverySupport | pub |
| 383 | fn | createPluginHandler | (private) |
| 426 | fn | resolveCtx | (private) |
| 640 | fn | normalizeChannelMessageSendResult | (private) |
| 657 | fn | createChannelOutboundContextBase | (private) |
| 689 | type | QueuedPostSendState | (private) |
| 691 | type | QueuedPreSendState | (private) |
| 693 | fn | persistQueuedPreSendState | (private) |
| 723 | fn | persistQueuedPostSendState | (private) |
| 749 | type | DeliverOutboundPayloadsCoreParams | (private) |
| 805 | type | DeliverOutboundPayloadsParams | pub |
| 819 | type | MessageSentEvent | (private) |
| 835 | fn | sessionKeyForDeliveryDiagnostics | (private) |
| 842 | fn | deliveryKindForPayload | (private) |
| 855 | fn | emitMessageDeliveryStarted | (private) |
| 868 | fn | emitMessageDeliveryCompleted | (private) |
| 885 | fn | emitMessageDeliveryError | (private) |
| 902 | fn | normalizeEmptyPayloadForDelivery | (private) |
| 918 | type | NormalizedPayloadForChannelDelivery | (private) |
| 923 | fn | normalizePayloadsForChannelDelivery | (private) |
| 953 | fn | stripInternalRuntimeScaffoldingFromValue | (private) |
| 984 | fn | collectPayloadMediaSources | (private) |
| 997 | fn | resolveOutboundMediaAccessForSend | (private) |
| 1020 | fn | stripInternalRuntimeScaffoldingFromPayload | (private) |
| 1027 | fn | buildPayloadSummary | (private) |
| 1031 | fn | hasDeliveryResultIdentity | (private) |
| 1043 | fn | normalizeDeliveryPin | (private) |
| 1064 | fn | maybePinDeliveredMessage | (private) |
| 1115 | fn | maybeNotifyAfterDeliveredPayload | (private) |
| 1139 | fn | renderPresentationForDelivery | (private) |
| 1185 | fn | createMessageSentEmitter | (private) |
| 1196 | fn | emitMessageSent | (private) |
| 1253 | fn | applyMessageSendingHook | (private) |
| 1357 | fn | applyReplyPayloadSendingHook | (private) |
| 1386 | fn | toOutboundDeliveryError | (private) |
| 1403 | fn | suppressedPayloadOutcome | (private) |
| 1420 | fn | materializeQueueCustodyMedia | (private) |
| 1453 | fn | deliverOutboundPayloads | pub |
| 1459 | fn | deliverOutboundPayloadsInternal | pub |
| 1664 | fn | deliverOutboundPayloadsWithQueueCleanup | (private) |
| 2039 | fn | deliverOutboundPayloadsCore | (private) |
| 2073 | fn | add | (private) |
| 2219 | fn | createHandler | (private) |
| 2272 | fn | sendTextChunks | (private) |
| 2386 | fn | startDeliveryDiagnostics | (private) |
| 2397 | fn | completeDeliveryDiagnostics | (private) |
| 2410 | fn | errorDeliveryDiagnostics | (private) |

## src/infra/outbound/delivery-queue-recovery.ts (1214 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | RecoverySummary | (private) |
| 73 | type | DeliverFn | pub |
| 87 | interface | RecoveryLogger | pub |
| 93 | interface | PendingDeliveryDrainDecision | (private) |
| 122 | fn | resolveMaxRetries | (private) |
| 129 | fn | resolveAttemptCount | (private) |
| 136 | fn | resolveRecoveryDeadlineMs | (private) |
| 147 | fn | createEmptyRecoverySummary | (private) |
| 156 | fn | emitQueuedAuditTerminals | (private) |
| 168 | fn | needsUnknownSendReconciliation | (private) |
| 174 | fn | queuedDeadLetterAuditTerminals | (private) |
| 187 | fn | queuedUnknownAuditTerminals | (private) |
| 194 | fn | withActiveDeliveryClaim | pub |
| 209 | fn | buildRecoveryDeliverParams | (private) |
| 244 | fn | applyRecoveryDeliveryAdmission | (private) |
| 284 | fn | reconcileUnknownQueuedDelivery | (private) |
| 331 | fn | buildReconciledSentResult | (private) |
| 346 | fn | buildReconciledCommitContext | (private) |
| 406 | fn | runReconciledSentCommitHooks | (private) |
| 437 | fn | moveEntryToFailedWithLogging | (private) |
| 452 | fn | markDurableDeliveryFailedBestEffort | (private) |
| 467 | fn | resolveCompletedOwnerBeforeRecovery | (private) |
| 554 | fn | isEntryEligibleForRecoveryRetry | (private) |
| 580 | fn | isPermanentDeliveryError | (private) |
| 584 | fn | persistRecoveredPostSendState | (private) |
| 609 | fn | drainQueuedEntry | (private) |
| 961 | fn | drainPendingDeliveries | pub |
| 1091 | fn | recoverPendingDeliveries | pub |

## src/infra/outbound/delivery-queue.reconnect-drain.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | normalizeReconnectAccountIdForTest | (private) |
| 42 | fn | countMatching | (private) |
| 52 | fn | requireRecord | (private) |
| 59 | fn | firstMockArg | (private) |
| 71 | fn | expectLogMessageWith | (private) |
| 75 | fn | readOutboundQueueStatus | (private) |
| 85 | fn | drainDirectChatReconnectPending | (private) |
| 109 | fn | drainAcct1DirectChatReconnect | (private) |
| 122 | fn | createTransientFailureDeliver | (private) |
| 128 | fn | enqueueFailedDirectChatDelivery | (private) |

## src/infra/outbound/delivery-queue.recovery.test.ts (2064 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | mockCallArg | (private) |
| 63 | fn | expectMockMessageContaining | (private) |
| 68 | fn | readOutboundQueueStatus | (private) |
| 88 | fn | enqueueCrashRecoveryEntries | (private) |

## src/infra/outbound/delivery-queue.storage.test.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | readStatus | (private) |
| 42 | fn | enqueueSpoolDelivery | (private) |

## src/infra/outbound/message-action-params.test.ts (799 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | withTempOpenClawStateDir | (private) |
| 122 | fn | mediaReadFile | (private) |

## src/infra/outbound/message-action-params.ts (753 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | StructuredAttachmentSource | (private) |
| 62 | type | StructuredAttachmentMode | (private) |
| 64 | fn | readMediaParam | (private) |
| 68 | fn | resolveMediaParamEntry | (private) |
| 86 | fn | hasExplicitAttachmentPayload | (private) |
| 99 | fn | hasExplicitSendMediaSource | (private) |
| 126 | fn | collectStructuredAttachmentSources | (private) |
| 158 | fn | resolveStructuredAttachmentSource | (private) |
| 168 | fn | buildActionMediaSourceParamKeys | (private) |
| 175 | fn | resolveExtraActionMediaSourceParamKeys | pub |
| 205 | fn | collectActionMediaSourceHints | pub |
| 233 | fn | readAttachmentMediaHint | (private) |
| 237 | fn | readAttachmentFileHint | (private) |
| 245 | fn | resolveAttachmentMaxBytes | (private) |
| 256 | fn | inferAttachmentFilename | (private) |
| 272 | fn | normalizeBase64Payload | (private) |
| 290 | fn | resolveSendBufferMaxBytes | (private) |
| 304 | fn | decodeBoundedBase64Attachment | (private) |
| 322 | fn | hydrateSendBufferMediaParams | (private) |
| 399 | type | AttachmentMediaPolicy | (private) |
| 412 | fn | resolveAttachmentMediaPolicy | pub |
| 442 | fn | buildAttachmentMediaLoadOptions | (private) |
| 483 | fn | hydrateAttachmentPayload | (private) |
| 544 | fn | normalizeSandboxMediaParams | pub |
| 591 | fn | normalizeSandboxMediaList | pub |
| 616 | fn | hydrateAttachmentActionPayload | (private) |
| 666 | fn | hydrateAttachmentParamsForAction | pub |
| 720 | fn | parseJsonMessageParam | pub |
| 738 | fn | parseInteractiveParam | pub |

## src/infra/outbound/message-action-runner.context.test.ts (621 lines)

_No symbols extracted._

## src/infra/outbound/message-action-runner.core-send.test.ts (913 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | firstMockArg | (private) |
| 40 | fn | registerSlackTextPlugin | (private) |

## src/infra/outbound/message-action-runner.media.test.ts (1514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | firstMockArg | (private) |
| 84 | fn | withSandbox | (private) |
| 93 | fn | withTempOpenClawStateDir | (private) |
| 109 | fn | runDrySend | (private) |
| 122 | fn | requireRecord | (private) |
| 129 | fn | requireActionPayload | (private) |
| 139 | fn | requireLoadWebMediaOptions | (private) |
| 144 | fn | requireLoadWebMediaCall | (private) |
| 152 | fn | expectSandboxMediaRewrite | (private) |
| 183 | fn | runAttachmentRemoteMediaAction | (private) |
| 199 | fn | expectAttachmentRemoteMediaPayload | (private) |
| 686 | fn | restoreRealMediaLoader | (private) |
| 693 | fn | expectRejectsLocalAbsolutePathWithoutSandbox | (private) |

## src/infra/outbound/message-action-runner.plugin-dispatch.test.ts (3631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ChannelActionHandler | (private) |
| 26 | fn | isRecord | (private) |
| 30 | fn | readFirstPluginCall | (private) |
| 39 | fn | readPluginCall | (private) |
| 51 | fn | readLastPluginCall | (private) |
| 55 | fn | readMockCallArg | (private) |
| 69 | fn | readMediaAccess | (private) |
| 76 | fn | readRecordField | (private) |
| 84 | fn | expectRecordFields | (private) |
| 173 | fn | createAlwaysConfiguredPluginConfig | (private) |
| 181 | fn | createPollForwardingPlugin | (private) |
| 211 | fn | createGatewayActionPlugin | (private) |
| 246 | fn | executePluginAction | (private) |
| 2759 | fn | createThreadedPlugin | (private) |

## src/infra/outbound/message-action-runner.send-validation.test.ts (591 lines)

_No symbols extracted._

## src/infra/outbound/message-action-runner.threading.test.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | firstMockArg | (private) |

## src/infra/outbound/message-action-runner.ts (2029 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 123 | type | MessageActionRunnerGateway | pub |
| 143 | type | RunMessageActionParams | pub |
| 202 | type | MessageActionRunResult | pub |
| 255 | fn | getToolResult | pub |
| 261 | fn | asResultRecord | (private) |
| 267 | fn | markDeliveredCurrentSourceReply | (private) |
| 318 | fn | resolveGatewayActionOptions | (private) |
| 326 | fn | callGatewayMessageAction | (private) |
| 391 | fn | isConfirmedGatewayMessageActionRejection | (private) |
| 414 | fn | resolveGatewayActionIdempotencyKey | (private) |
| 421 | fn | applyCrossContextMessageDecoration | (private) |
| 450 | fn | maybeApplyCrossContextMarker | (private) |
| 484 | fn | resolveChannel | (private) |
| 506 | fn | addCandidateAndUnprefixedAlias | (private) |
| 518 | fn | normalizeTargetForAccountBinding | (private) |
| 526 | fn | inferPeerKindForAccountBinding | (private) |
| 544 | fn | resolveTargetBoundAccountId | (private) |
| 580 | fn | resolveActionTarget | (private) |
| 617 | fn | sanitizeGroupTargetId | (private) |
| 621 | fn | resolveResolvedTargetOrThrow | (private) |
| 646 | type | ResolvedActionContext | (private) |
| 661 | type | SendPayloadParts | (private) |
| 673 | fn | updateSendPayloadPartsFromReplyPayload | (private) |
| 689 | fn | applySendPayloadPartsToActionParams | (private) |
| 709 | fn | collectMessageAttachmentMediaHints | (private) |
| 715 | fn | pushMedia | (private) |
| 738 | fn | hasExplicitSingularTargetParam | (private) |
| 742 | fn | hasExplicitTargetParam | (private) |
| 750 | fn | hasPotentialActionTargetInput | (private) |
| 762 | fn | isCurrentSourceTargetParam | (private) |
| 813 | fn | hasExplicitNonCurrentChannelParam | (private) |
| 827 | fn | applyImplicitSourceReplySendPolicy | (private) |
| 843 | fn | runGatewayPluginMessageActionOrNull | (private) |
| 955 | fn | resolveGateway | (private) |
| 971 | fn | handleBroadcastAction | (private) |
| 1061 | fn | handleInternalSourceReplySendAction | (private) |
| 1102 | fn | buildInternalSourceReplyToolResult | (private) |
| 1154 | fn | buildSendPayloadParts | (private) |
| 1211 | fn | pushMedia | (private) |
| 1342 | fn | handleSendAction | (private) |
| 1605 | fn | handlePollAction | (private) |
| 1715 | fn | handlePluginAction | (private) |
| 1828 | fn | runMessageAction | pub |
| 1945 | fn | hydrateActionAttachmentParams | (private) |

## src/infra/outbound/message.channels.test.ts (596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | setRegistry | (private) |
| 39 | fn | gatewayCall | (private) |
| 198 | fn | setupThreadChatCapture | (private) |
| 237 | fn | setDemoPollRegistry | (private) |
| 340 | fn | setThreadChatGatewayRegistry | (private) |
| 356 | fn | sendThreadChatGatewayMessage | (private) |
| 572 | fn | createThreadChatLikePlugin | (private) |

## src/infra/outbound/message.test.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | fn | requireRecord | (private) |
| 84 | fn | expectRecordFields | (private) |
| 96 | fn | getMockCallArg | (private) |
| 109 | fn | expectDeliveryCallFields | (private) |
| 117 | fn | readPayloadSummary | (private) |

## src/infra/outbound/message.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | MessageSendParams | (private) |
| 117 | type | MessageSendResult | pub |
| 132 | type | MessagePollParams | (private) |
| 150 | type | MessagePollResult | pub |
| 169 | fn | buildMessagePollResult | (private) |
| 196 | fn | assertPollOptionSupport | (private) |
| 213 | fn | resolveRequiredChannel | (private) |
| 224 | fn | resolveRequiredPlugin | (private) |
| 232 | fn | payloadRequiresDurablePayloadTransport | (private) |
| 241 | fn | mergeDurableRequirements | (private) |
| 255 | fn | deriveRequiredMessageSendCapabilities | (private) |
| 279 | fn | assertRequiredMessageSendDurability | (private) |
| 305 | fn | resolveGatewayOptions | (private) |
| 309 | fn | callMessageGateway | (private) |
| 328 | fn | resolveMessageConfig | (private) |
| 336 | fn | resolveGatewayIdempotencyKey | (private) |
| 344 | fn | sendMessage | pub |
| 518 | fn | sendPoll | pub |

## src/infra/outbound/outbound-send-service.test.ts (1238 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 109 | type | OutboundSendServiceModule | (private) |
| 110 | type | ExecuteSendInput | (private) |
| 111 | type | ExecuteSendContext | (private) |
| 116 | type | MockCalls | (private) |
| 120 | fn | requireRecord | (private) |
| 127 | fn | requireArray | (private) |
| 132 | fn | expectFields | (private) |
| 138 | fn | expectSingleCallFirstArg | (private) |
| 147 | fn | expectSingleCallFields | (private) |
| 158 | fn | pluginActionResult | (private) |
| 170 | fn | expectMirrorWrite | (private) |
| 185 | fn | executePluginMirroredSend | (private) |
| 212 | fn | createPluginMediaSendContext | (private) |
| 225 | fn | executePluginMediaSend | (private) |
| 628 | fn | nativeComponents | (private) |

## src/infra/outbound/outbound-send-service.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | OutboundGatewayContext | (private) |
| 51 | type | OutboundSendContext | (private) |
| 97 | type | PluginHandledResult | (private) |
| 103 | type | SendMessageParams | (private) |
| 105 | fn | materializeMessagePresentationFallback | pub |
| 121 | fn | hasCorePresentationDelivery | pub |
| 125 | fn | sendCoreMessage | (private) |
| 204 | fn | tryHandleWithPluginAction | (private) |
| 251 | fn | createChannelActionContext | (private) |
| 280 | type | PluginSendPayloadPreparation | (private) |
| 285 | fn | preparePluginSendPayload | (private) |
| 318 | fn | executeSendAction | pub |
| 477 | fn | executePollAction | pub |

## src/infra/outbound/outbound-session.test-helpers.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | createSessionRouteTestPlugin | (private) |
| 50 | fn | buildThreadedChannelRoute | (private) |
| 84 | fn | parseForumTargetForTest | (private) |
| 111 | fn | parseForumThreadIdForTest | (private) |
| 123 | fn | buildForumGroupPeerIdForTest | (private) |
| 127 | fn | resolveForumOutboundSessionRouteForTest | (private) |
| 174 | fn | resolveWorkspaceOutboundSessionRouteForTest | (private) |
| 213 | fn | resolveGuildChatOutboundSessionRouteForTest | (private) |
| 255 | fn | resolveBoardChatOutboundSessionRouteForTest | (private) |
| 278 | fn | resolveMobileChatOutboundSessionRouteForTest | (private) |
| 298 | fn | resolveMatrixOutboundSessionRouteForTest | (private) |
| 318 | fn | resolveMeetingChatOutboundSessionRouteForTest | (private) |
| 348 | fn | resolveCollabChatOutboundSessionRouteForTest | (private) |
| 378 | fn | resolveNextcloudTalkOutboundSessionRouteForTest | (private) |
| 399 | fn | resolveLocalChatOutboundSessionRouteForTest | (private) |
| 425 | fn | resolveZaloOutboundSessionRouteForTest | (private) |
| 447 | fn | resolveZalouserOutboundSessionRouteForTest | (private) |
| 470 | fn | resolveNostrOutboundSessionRouteForTest | (private) |
| 487 | fn | resolveTlonOutboundSessionRouteForTest | (private) |
| 519 | fn | setMinimalOutboundSessionPluginRegistryForTests | pub |

## src/infra/outbound/outbound-session.test.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | InboundMetadataParams | (private) |
| 29 | fn | firstMockArg | (private) |
| 103 | fn | expectResolvedRoute | (private) |
| 140 | type | RouteCase | (private) |
| 141 | type | NamedRouteCase | (private) |

## src/infra/outbound/payloads.test.ts (782 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | resolveMirrorProjection | (private) |
| 405 | fn | cloneReplyPayloads | (private) |

## src/infra/outbound/session-binding-service.test.ts (639 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | SessionBindingServiceModule | (private) |
| 30 | fn | setMinimalCurrentConversationRegistry | (private) |
| 59 | fn | importSessionBindingServiceModule | (private) |
| 67 | fn | createRecord | (private) |
| 87 | fn | requireRecord | (private) |
| 94 | fn | firstMockArg | (private) |
| 106 | fn | expectRecordFields | (private) |
| 112 | fn | expectSessionBindingError | (private) |
| 122 | fn | expectConversationFields | (private) |

## src/infra/outbound/target-resolver.test.ts (690 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | TargetResolverModule | (private) |
| 64 | fn | expectOkResolution | (private) |
| 75 | fn | firstMockArg | (private) |

## src/infra/outbound/target-resolver.ts (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | TargetResolveKind | (private) |
| 34 | type | ResolveAmbiguousMode | (private) |
| 37 | type | ResolvedMessagingTarget | pub |
| 46 | type | ResolveMessagingTargetResult | (private) |
| 50 | fn | asResolvedMessagingTarget | (private) |
| 59 | fn | resolveChannelTarget | pub |
| 77 | fn | resetDirectoryCache | pub |
| 95 | fn | normalizeQuery | (private) |
| 99 | fn | stripTargetPrefixes | (private) |
| 119 | fn | formatTargetDisplay | pub |
| 175 | fn | detectTargetKind | (private) |
| 216 | fn | normalizeDirectoryEntryId | (private) |
| 225 | fn | matchesDirectoryEntry | (private) |
| 253 | fn | resolveMatch | (private) |
| 278 | fn | listDirectoryEntries | (private) |
| 315 | fn | getDirectoryEntries | (private) |
| 375 | fn | buildNormalizedResolveResult | (private) |
| 391 | fn | pickAmbiguousMatch | (private) |
| 411 | fn | resolveMessagingTarget | (private) |
| 556 | fn | lookupDirectoryDisplay | pub |
| 585 | fn | findMatch | (private) |

## src/infra/outbound/targets.test.ts (1801 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 155 | fn | expectImplicitRoute | (private) |
| 177 | fn | expectTopicTargetKeptRaw | (private) |
| 545 | fn | resolveHeartbeatTarget | (private) |
| 555 | fn | expectHeartbeatTarget | (private) |

## src/infra/outbound/targets.ts (554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | OutboundChannel | pub |
| 41 | type | HeartbeatTarget | (private) |
| 44 | type | OutboundTarget | (private) |
| 56 | type | HeartbeatSenderContext | (private) |
| 68 | fn | resolveOutboundTarget | pub |
| 100 | fn | resolveHeartbeatDeliveryTarget | pub |
| 309 | fn | buildNoHeartbeatDeliveryTarget | (private) |
| 325 | fn | resolveHeartbeatDeliveryTargetWithSessionRoute | pub |
| 421 | fn | inferChatTypeFromTarget | (private) |
| 448 | fn | resolveHeartbeatDeliveryChatType | (private) |
| 464 | fn | shouldReuseHeartbeatRouteThreadId | (private) |
| 491 | fn | resolveHeartbeatSenderId | (private) |
| 525 | fn | resolveHeartbeatSenderContext | pub |
