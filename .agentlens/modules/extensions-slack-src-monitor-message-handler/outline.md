# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/slack/src/monitor/message-handler/dispatch.preview-fallback.test.ts (4756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | class | TestSlackStreamNotDeliveredError | (private) |
| 140 | type | TestReplyDispatchKind | (private) |
| 141 | type | TestReplyPayload | (private) |
| 152 | type | TestDispatchCounts | (private) |
| 153 | type | TestDispatchSequenceEntry | (private) |
| 225 | fn | requireCapturedTyping | (private) |
| 232 | fn | createSlackPlatformError | (private) |
| 240 | fn | requireCapturedItemEventHandler | (private) |
| 248 | fn | requireRecord | (private) |
| 255 | fn | expectRecordFields | (private) |
| 261 | fn | requireMockCall | (private) |
| 269 | fn | expectMockCallArgFields | (private) |
| 278 | fn | expectNativeProgressStart | (private) |
| 289 | fn | expectNativeProgressAppend | (private) |
| 295 | fn | planUpdate | (private) |
| 299 | fn | taskUpdate | (private) |
| 307 | fn | contentTaskId | (private) |
| 311 | fn | collectNativeTaskUpdates | (private) |
| 313 | fn | collectChunks | (private) |
| 334 | fn | expectDeliverReplyCall | (private) |
| 343 | fn | noop | (private) |
| 344 | fn | noopAsync | (private) |
| 345 | fn | createDraftStreamStub | (private) |
| 359 | fn | createPreparedSlackMessage | (private) |
| 466 | fn | dispatchNativeProgressScenario | (private) |
| 718 | fn | startNow | (private) |
| 1022 | type | DispatchParams | (private) |
| 1589 | fn | buildPayload | (private) |

## extensions/slack/src/monitor/message-handler/dispatch.ts (2438 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 104 | fn | resolveSlackMessageTimestampMs | (private) |
| 109 | fn | resolveSlackBotLoopProtection | (private) |
| 139 | fn | isSlackStreamingEnabled | (private) |
| 153 | fn | shouldEnableSlackPreviewStreaming | (private) |
| 159 | fn | shouldInitializeSlackDraftStream | (private) |
| 166 | fn | resolveSlackDisableBlockStreaming | (private) |
| 179 | fn | resolveExplicitSlackProgressTitle | (private) |
| 190 | fn | resolveSlackNativeProgressTaskCards | (private) |
| 206 | fn | resolveSlackStreamingThreadHint | (private) |
| 221 | type | SlackEventDeliveryAttempt | (private) |
| 231 | fn | getSlackStreamRecipientTeamCache | (private) |
| 241 | fn | buildSlackEventDeliveryKey | (private) |
| 266 | fn | readSlackStreamRecipientTeamCache | (private) |
| 285 | fn | rememberSlackStreamRecipientTeam | (private) |
| 308 | fn | createSlackEventDeliveryTracker | (private) |
| 324 | fn | shouldUseStreaming | (private) |
| 338 | fn | resolveSlackStreamRecipientTeamId | (private) |
| 366 | fn | dispatchPreparedSlackMessage | pub |
| 660 | fn | refreshStreamedAcknowledgements | (private) |
| 667 | fn | recordStreamedDelivery | (private) |
| 676 | fn | rememberStreamedDelivery | (private) |
| 684 | fn | emitAcknowledgedStreamedDeliveries | (private) |
| 700 | fn | acknowledgeStoppedStreamedDeliveries | (private) |
| 710 | fn | emitFailedPendingStreamedDeliveries | (private) |
| 726 | fn | emitSuccessfulPendingStreamedDeliveries | (private) |
| 743 | fn | markPreviewPayloadDelivered | (private) |
| 767 | fn | rememberDeliveredThreadTs | (private) |
| 957 | fn | appendNativeProgressCompletion | (private) |
| 1466 | fn | onSlackDeliveryError | (private) |
| 1582 | fn | combineProgressHeadlineAndExplanation | (private) |
| 1590 | fn | resolveNativeProgressTitle | (private) |
| 1596 | fn | buildNativeProgressChunks | (private) |
| 1611 | fn | markNativeProgressDelivered | (private) |
| 1621 | fn | startNativeProgressStream | (private) |
| 1634 | fn | startPromise | (private) |
| 1669 | fn | appendNativeProgressStream | (private) |
| 1681 | fn | updateNativeProgressStream | (private) |
| 1733 | fn | resetProgressTurnState | (private) |
| 1739 | fn | collapseProgressReceipt | (private) |
| 1803 | fn | buildNativeProgressCompletionChunks | (private) |
| 1824 | fn | finishNativeProgressTurn | (private) |
| 1865 | fn | pushPlanProgress | (private) |
| 1887 | fn | pushPreviewProgress | (private) |
| 1933 | fn | updateDraftFromPartial | (private) |
| 1966 | fn | pushReasoningProgress | (private) |
| 1996 | fn | resetDraftDeliveryState | (private) |
| 2001 | fn | resetDraftProgressState | (private) |
| 2006 | fn | beginNewProgressTurn | (private) |
| 2425 | fn | toLintErrorObject | (private) |

## extensions/slack/src/monitor/message-handler/prepare.test.ts (4601 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | fn | seedSessionEntries | (private) |
| 106 | fn | createDefaultSlackCtx | (private) |
| 126 | fn | prepareWithDefaultCtx | (private) |
| 135 | type | PreparedSlackMessage | (private) |
| 137 | fn | assertPrepared | (private) |
| 148 | fn | createSlackMessage | (private) |
| 159 | fn | createBotRoomMessage | (private) |
| 172 | fn | createOwnerScopedBotRoomCtx | (private) |
| 190 | fn | createMissingChannelInfoBotCtx | (private) |
| 216 | fn | prepareMessageWith | (private) |
| 647 | fn | createThreadSlackCtx | (private) |
| 656 | fn | createThreadAccount | (private) |
| 672 | fn | createThreadReplyMessage | (private) |
| 681 | fn | prepareThreadMessage | (private) |
| 685 | type | ThreadContextAllowlistCaseParams | (private) |
| 707 | fn | prepareThreadContextAllowlistCase | (private) |
| 769 | fn | expectThreadContextAllowsHumanHistory | (private) |
| 789 | fn | createDmScopeMainSlackCtx | (private) |
| 802 | fn | createMainScopedDmMessage | (private) |
| 812 | fn | expectMainScopedDmClassification | (private) |
| 826 | fn | createReplyToAllSlackCtx | (private) |
| 3268 | fn | createUnavailableMentionCtx | (private) |
| 3289 | fn | createUnavailableMentionMessage | (private) |
| 3648 | fn | createCaptionlessSlackAudioMessage | (private) |
| 3676 | fn | resolveFetchInputUrl | (private) |
| 3680 | fn | createAudioMentionSlackCtx | (private) |
| 4271 | fn | createSenderPrefixCtx | (private) |
| 4328 | fn | prepareSenderPrefixMessage | (private) |
| 4499 | fn | createCtxWithImplicitMentions | (private) |

## extensions/slack/src/monitor/message-handler/prepare.thread-session-key.test.ts (744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | buildCtx | (private) |
| 47 | fn | buildAccount | (private) |
| 60 | fn | buildChannelMessage | (private) |
| 71 | fn | buildEventScope | (private) |
| 81 | fn | firstBindingRouteRequest | (private) |
| 552 | fn | routeForTeam | (private) |

## extensions/slack/src/monitor/message-handler/prepare.ts (1717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 102 | fn | recordString | (private) |
| 109 | fn | recordNullableString | (private) |
| 122 | fn | mergeSlackAssistantThreadContext | (private) |
| 142 | fn | hasSlackAssistantThreadMetadata | (private) |
| 148 | fn | resolveSlackMessageAssistantThreadContext | (private) |
| 171 | fn | restoreSlackAssistantThreadContextFromMetadata | (private) |
| 222 | fn | resolveCachedMentionRegexes | (private) |
| 247 | fn | isSlackImageFileCandidate | (private) |
| 255 | fn | sliceSlackImageFileCandidates | (private) |
| 262 | fn | sliceSlackHistoryAttachmentCandidates | (private) |
| 292 | fn | buildSlackHistoryMediaCandidateMessage | (private) |
| 310 | fn | resolveSlackHistoryMediaForPendingRecord | (private) |
| 339 | type | SlackConversationContext | (private) |
| 357 | type | SlackAuthorizationContext | (private) |
| 362 | type | SlackMentionMetadata | (private) |
| 369 | type | SlackExplicitMentionState | (private) |
| 375 | type | SlackMentionContextPayload | (private) |
| 385 | fn | collectUniqueSlackMentionIds | (private) |
| 397 | fn | collectSlackMentionMetadata | (private) |
| 406 | fn | resolveSlackExplicitMentionState | (private) |
| 437 | fn | resolveSlackMentionSource | (private) |
| 462 | fn | buildSlackMentionContextPayload | (private) |
| 488 | fn | resolveSlackConversationContext | (private) |
| 552 | fn | authorizeSlackInboundMessage | (private) |
| 640 | fn | prepareSlackMessage | pub |
| 786 | fn | resolveWasMentioned | (private) |
| 799 | fn | buildPolicyMentionRegexes | (private) |
| 950 | fn | getThreadStarter | (private) |
| 962 | fn | resolveMessageContent | (private) |
| 981 | fn | getMessageContent | (private) |
| 1092 | fn | getSeededMentionRouting | (private) |
| 1293 | fn | shouldAckReaction | (private) |
