# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/imessage/src/monitor/catchup.test-support.ts (549 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | openCatchupCursorStore | (private) |
| 26 | fn | loadIMessageCatchupCursor | (private) |
| 30 | fn | saveIMessageCatchupCursor | (private) |
| 203 | fn | row | (private) |
| 213 | fn | fetchOf | (private) |
| 217 | fn | alwaysOk | (private) |

## extensions/imessage/src/monitor/catchup.ts (558 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | IMessageCatchupConfig | (private) |
| 43 | type | IMessageCatchupCursor | pub |
| 65 | type | IMessageCatchupRow | pub |
| 73 | type | IMessageCatchupSummary | pub |
| 99 | fn | resolveIMessageCatchupCursorKey | pub |
| 103 | fn | openCatchupCursorStore | (private) |
| 110 | fn | updateCatchupCursorStore | (private) |
| 121 | fn | enqueueCursorWrite | (private) |
| 126 | fn | sanitizeFailureRetriesInput | (private) |
| 143 | fn | normalizeIMessageCatchupCursor | (private) |
| 164 | fn | readIMessageCatchupCursor | (private) |
| 170 | fn | loadIMessageCatchupCursor | (private) |
| 174 | fn | buildIMessageCatchupCursor | (private) |
| 189 | fn | saveIMessageCatchupCursor | (private) |
| 216 | fn | capFailureRetriesMap | pub |
| 240 | type | ResolvedCatchupConfig | pub |
| 248 | fn | clampInt | (private) |
| 255 | fn | resolveCatchupConfig | pub |
| 277 | type | CatchupFetchFn | pub |
| 305 | type | CatchupDispatchFn | pub |
| 307 | type | PerformCatchupParams | (private) |
| 318 | fn | advanceIMessageCatchupCursor | pub |
| 364 | fn | performIMessageCatchup | pub |

## extensions/imessage/src/monitor/inbound-processing.test.ts (1089 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | ReplyCacheModule | (private) |
| 9 | type | InboundProcessingModule | (private) |
| 23 | type | InboundDecisionParams | (private) |
| 27 | fn | createInboundDecisionParams | (private) |
| 68 | fn | resolveDecision | (private) |
| 901 | fn | resolveDmCommandDecision | (private) |
| 1035 | fn | buildParams | (private) |

## extensions/imessage/src/monitor/inbound-processing.ts (1119 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | IMessageReactionNotificationMode | (private) |
| 60 | type | IMessageReplyContext | (private) |
| 66 | fn | normalizeNonEmpty | (private) |
| 84 | fn | isIMessageConversationAllowTarget | (private) |
| 94 | fn | mergeIMessageGroupAllowFromWithLegacyChatTargets | pub |
| 137 | fn | normalizeIMessageHandleEntry | (private) |
| 142 | fn | normalizeIMessageChatIdEntry | (private) |
| 147 | fn | normalizeIMessageChatGuidEntry | (private) |
| 152 | fn | normalizeIMessageChatIdentifierEntry | (private) |
| 157 | fn | normalizeDmPolicy | (private) |
| 161 | fn | normalizeGroupPolicy | (private) |
| 165 | fn | normalizeReplyField | (private) |
| 176 | fn | describeReplyContext | (private) |
| 186 | fn | resolveInboundEchoMessageIds | (private) |
| 201 | fn | rememberIMessageSkippedFromMeForSelfChatDedupe | pub |
| 249 | fn | hasIMessageEchoMatch | (private) |
| 301 | fn | isKnownFromMeIMessageReactionTarget | (private) |
| 334 | fn | resolveIMessageGroupSystemPrompt | (private) |
| 347 | type | IMessageInboundDispatchDecision | (private) |
| 372 | type | IMessageInboundReactionDecision | (private) |
| 386 | type | IMessageInboundDecision | (private) |
| 392 | fn | resolveIMessageInboundDecision | pub |
| 873 | fn | buildIMessageInboundContext | pub |
| 1068 | fn | buildIMessageEchoScope | (private) |
| 1101 | fn | buildDirectIMessageReplyTarget | pub |
| 1114 | fn | describeIMessageEchoDropLog | (private) |

## extensions/imessage/src/monitor/monitor-provider.ts (1778 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 130 | type | IMessageTypingController | (private) |
| 132 | fn | resolveConfiguredIMessageTypingMode | (private) |
| 136 | fn | resolveIMessageSplitSendCompatDebounceMs | (private) |
| 154 | fn | isIMessagePluginPayloadAttachment | (private) |
| 169 | fn | resolveIMessageInboundMediaInput | (private) |
| 212 | fn | formatIMessageInboundMediaBody | (private) |
| 232 | fn | detectRemoteHostFromCliPath | (private) |
| 257 | fn | resolveLocalMessagesHomeDir | (private) |
| 269 | fn | resolveLocalMessagesDbPath | (private) |
| 281 | fn | resolveIMessageWatchSourceDbPath | (private) |
| 301 | fn | resolveIMessageStartupRowidWatermark | (private) |
| 324 | fn | warnIfImsgUpgradeNeeded | (private) |
| 349 | fn | isRetriableWatchSubscribeStartupError | (private) |
| 364 | fn | shouldThrottleIMessageInboundDropDiagnostic | (private) |
| 368 | fn | describeIMessageInboundDropDiagnostic | (private) |
| 390 | fn | describeIMessageWatchSubscribeStartupFailure | (private) |
| 417 | fn | waitForWatchSubscribeRetryDelay | (private) |
| 429 | fn | onAbort | (private) |
| 438 | fn | monitorIMessageProvider | pub |
| 576 | fn | minSetValue | (private) |
| 584 | fn | advanceRecoveryCursorAfterDurableEnqueue | (private) |
| 610 | fn | holdRecoveryCursorBeforeFailedEnqueue | (private) |
| 673 | fn | dispatchUnit | (private) |
| 761 | fn | detachAbortHandler | (private) |
| 765 | fn | getActiveClient | (private) |
| 772 | fn | repairMessageConversationAnchor | (private) |
| 782 | fn | resolveLiveCatchupCursor | (private) |
| 809 | fn | maybeAdvanceLiveCatchupCursor | (private) |
| 830 | fn | flushPendingLiveCatchupCursorAdvances | (private) |
| 840 | fn | handleMessageNow | (private) |
| 852 | fn | resolveIMessageInboundBodyText | (private) |
| 872 | fn | handleMessageNowInner | (private) |
| 1540 | fn | createWatchClient | (private) |
| 1572 | fn | attemptDetachAbortHandler | (private) |
| 1691 | fn | pollApprovalReactions | (private) |

## extensions/imessage/src/monitor/self-chat-dedupe.test.ts (1025 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | InboundDecisionParams | (private) |
| 37 | fn | createParams | (private) |
