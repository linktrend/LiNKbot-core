# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 19 large files in this module.

## extensions/discord/src/approval-handler.runtime.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | PendingApproval | (private) |
| 54 | type | DiscordPendingDelivery | (private) |
| 57 | type | PreparedDeliveryTarget | (private) |
| 62 | type | DiscordApprovalHandlerContext | (private) |
| 67 | fn | resolveHandlerContext | (private) |
| 79 | class | ExecApprovalContainer | (private) |
| 124 | class | ExecApprovalActionButton | (private) |
| 152 | class | ExecApprovalActionRow | (private) |
| 171 | fn | createApprovalActionRow | (private) |
| 179 | fn | buildApprovalMetadataLines | (private) |
| 185 | fn | buildExecApprovalPayload | (private) |
| 209 | fn | truncateCommandPreview | (private) |
| 220 | fn | formatCommandPreview | (private) |
| 224 | fn | formatOptionalCommandPreview | (private) |
| 234 | fn | resolveCommandPreviews | (private) |
| 246 | fn | createExecApprovalRequestContainer | (private) |
| 274 | fn | createPluginApprovalRequestContainer | (private) |
| 298 | fn | createExecResolvedContainer | (private) |
| 337 | fn | createPluginResolvedContainer | (private) |
| 370 | fn | createExecExpiredContainer | (private) |
| 394 | fn | createPluginExpiredContainer | (private) |
| 412 | fn | updateMessage | (private) |
| 439 | fn | finalizeMessage | (private) |
| 587 | fn | dmChannel | (private) |
| 627 | fn | message | (private) |

## extensions/discord/src/channel-actions.test.ts (545 lines)

_No symbols extracted._

## extensions/discord/src/channel.test.ts (866 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | discordTestSendResult | (private) |
| 62 | fn | createCfg | (private) |
| 73 | fn | resolveAccount | (private) |
| 77 | fn | startDiscordAccount | (private) |
| 86 | fn | prepareDiscordStartupMocks | (private) |
| 102 | fn | expectDiscordStartupDelay | (private) |
| 118 | fn | installDiscordRuntime | (private) |
| 136 | fn | expectStaleProbeMetadataCleared | (private) |

## extensions/discord/src/channel.ts (817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 110 | fn | startDiscordStartupProbe | (private) |
| 172 | fn | shouldTreatDiscordDeliveredTextAsVisible | (private) |
| 181 | fn | resolveRuntimeDiscordMessageActions | (private) |
| 228 | fn | resolveDiscordStartupAccountIds | (private) |
| 248 | fn | resolveDiscordStartupDelayMs | (private) |
| 254 | fn | formatDiscordIntents | (private) |
| 285 | fn | toConversationLifecycleBinding | (private) |

## extensions/discord/src/components.test.ts (729 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | DiscordRuntime | (private) |

## extensions/discord/src/config-schema.test.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | fn | expectValidDiscordConfig | (private) |
| 14 | fn | expectInvalidDiscordConfig | (private) |

## extensions/discord/src/doctor-contract.ts (674 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | AgentBindingConfig | (private) |
| 23 | fn | stripRetiredTuningKnobs | (private) |
| 39 | fn | stripRetiredDiscordTuningKnobs | (private) |
| 101 | fn | hasLegacyTtsProviderKeys | (private) |
| 109 | fn | hasLegacyDiscordAccountTtsProviderKeys | (private) |
| 121 | fn | hasLegacyDiscordGuildChannelAllowAlias | (private) |
| 137 | fn | hasLegacyDiscordGuildChannelAgentId | (private) |
| 153 | fn | hasLegacyDiscordAccountGuildChannelAllowAlias | (private) |
| 161 | fn | hasLegacyDiscordAccountGuildChannelAgentId | (private) |
| 169 | fn | hasUnsupportedRealtimeWakeNamesInVoice | (private) |
| 182 | fn | hasUnsupportedDiscordRealtimeWakeNames | (private) |
| 190 | fn | hasUnsupportedDiscordAccountRealtimeWakeNames | (private) |
| 198 | fn | mergeMissing | (private) |
| 221 | fn | getOrCreateTtsProviders | (private) |
| 227 | fn | mergeLegacyTtsProviderConfig | (private) |
| 245 | fn | migrateLegacyTtsConfig | (private) |
| 273 | fn | normalizeUnsupportedRealtimeWakeNames | (private) |
| 350 | fn | normalizeDiscordGuildChannelAllowAliases | (private) |
| 402 | fn | isDiscordChannelAgentBinding | (private) |
| 421 | fn | normalizeDiscordGuildChannelAgentIds | (private) |
| 556 | fn | normalizeCompatibilityConfig | pub |

## extensions/discord/src/doctor.test.ts (645 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | getDiscordCompatibilityNormalizer | (private) |

## extensions/discord/src/monitor.test.ts (1424 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | DiscordReactionEvent | (private) |
| 25 | type | DiscordReactionClient | (private) |
| 41 | fn | fakeGuild | (private) |
| 43 | fn | expectNormalizedAllowList | (private) |
| 71 | fn | createAutoThreadMentionContext | (private) |
| 93 | class | FakeListener | (private) |
| 107 | fn | createDeferred | (private) |
| 122 | fn | flushAsyncWork | (private) |
| 948 | type | MockWithCalls | (private) |
| 950 | fn | firstMockCall | (private) |
| 958 | fn | firstMockArg | (private) |
| 962 | fn | requireRecord | (private) |
| 969 | fn | makeReactionEvent | (private) |
| 1012 | fn | makeReactionClient | (private) |
| 1034 | fn | getReactionClientFetchChannelMock | (private) |
| 1038 | fn | makeReactionListenerParams | (private) |

## extensions/discord/src/outbound-adapter.test.ts (1193 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | MockCallSource | (private) |
| 24 | fn | mockCall | (private) |
| 32 | fn | mockObjectArg | (private) |
| 339 | fn | onProgress | (private) |
| 924 | fn | buildPresentation | (private) |

## extensions/discord/src/send.creates-thread.test.ts (827 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | discordClientOpts | (private) |
| 42 | type | MockCallSource | (private) |
| 48 | fn | requireRecord | (private) |
| 55 | fn | mockArg | (private) |
| 63 | fn | requestOptions | (private) |
| 70 | fn | requestPath | (private) |
| 74 | fn | requestBody | (private) |
| 78 | fn | timerDelayAt | (private) |
| 82 | fn | createRateLimitError | (private) |
| 667 | fn | createMockRateLimitError | (private) |

## extensions/discord/src/send.outbound.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | DiscordSendOpts | (private) |
| 70 | type | DiscordClientRequest | (private) |
| 74 | type | DiscordChannelMessageResult | (private) |
| 76 | fn | sendDiscordThreadTextChunks | (private) |
| 106 | fn | resolveDiscordSuppressEmbeds | (private) |
| 117 | fn | deriveForumThreadName | (private) |
| 126 | fn | isForumLikeChannel | (private) |
| 132 | fn | toDiscordSendResult | (private) |
| 155 | fn | resolveDiscordSendTarget | (private) |
| 166 | fn | sendMessageDiscord | pub |
| 431 | fn | sendStickerDiscord | pub |
| 447 | fn | res | (private) |
| 455 | fn | sendPollDiscord | pub |
| 474 | fn | res | (private) |
| 482 | fn | resolveDiscordStructuredSendContext | (private) |

## extensions/discord/src/send.sends-basic-channel-messages.test.ts (1427 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | isRecord | (private) |
| 62 | fn | requireRecord | (private) |
| 69 | fn | requireArray | (private) |
| 76 | fn | expectRecordFields | (private) |
| 83 | fn | requireMockCall | (private) |
| 91 | fn | requireMockArg | (private) |
| 100 | fn | expectRestRoute | (private) |
| 104 | fn | requireRestOptions | (private) |
| 108 | fn | requireRestBody | (private) |
| 112 | fn | expectSingleReceiptPart | (private) |
| 119 | fn | expectBodyFileName | (private) |
| 159 | fn | expectReplyReference | (private) |
| 169 | fn | expectNoReplyReference | (private) |
| 173 | fn | sendChunkedReplyAndCollectBodies | (private) |
| 197 | fn | setupForumSend | (private) |

## extensions/discord/src/send.shared.ts (554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | DiscordRequest | (private) |
| 68 | type | DiscordRecipient | (private) |
| 78 | fn | normalizeReactionEmoji | (private) |
| 90 | fn | normalizeStickerIds | (private) |
| 101 | fn | normalizeEmojiName | (private) |
| 109 | fn | normalizeDiscordPollInput | (private) |
| 126 | fn | getDiscordErrorCode | (private) |
| 145 | fn | getDiscordErrorStatus | (private) |
| 164 | fn | isDiscordUploadTooLargeError | (private) |
| 171 | fn | buildDiscordUploadTooLargeFallbackText | (private) |
| 177 | fn | buildDiscordSendError | (private) |
| 250 | fn | resolveChannelId | (private) |
| 258 | fn | dmChannel | (private) |
| 268 | fn | resolveDiscordTargetChannelId | (private) |
| 280 | fn | resolveDiscordChannel | pub |
| 291 | fn | buildDiscordTextChunks | pub |
| 306 | type | DiscordSendProgress | pub |
| 312 | type | DiscordTextSendParams | (private) |
| 329 | fn | sendDiscordText | (private) |
| 350 | fn | sendChunk | (private) |
| 371 | fn | result | (private) |
| 400 | type | DiscordMediaSendParams | (private) |
| 409 | fn | sendDiscordMedia | (private) |
| 529 | fn | buildReactionIdentifier | (private) |
| 536 | fn | formatReactionEmoji | (private) |

## extensions/discord/src/shared-interactive.test.ts (666 lines)

_No symbols extracted._

## extensions/discord/src/subagent-hooks.test.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | ThreadBindingRecord | (private) |
| 15 | type | MockResolvedDiscordAccount | (private) |
| 25 | type | MockResolveDiscordAccountParams | (private) |
| 87 | fn | registerHandlersForTest | (private) |
| 107 | fn | resolveSubagentDeliveryTargetForTest | (private) |
| 128 | fn | createSpawnEvent | (private) |
| 176 | fn | createSpawnEventWithoutThread | (private) |
| 183 | fn | runSubagentSpawning | (private) |
| 192 | fn | expectSubagentHookError | (private) |
| 199 | fn | expectSubagentSpawningError | (private) |

## extensions/discord/src/subagent-progress.test.ts (959 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | StoredProgressRunBase | (private) |
| 38 | type | StoredProgressRun | (private) |
| 44 | fn | createProgressStore | (private) |
| 76 | fn | createApi | (private) |
| 100 | fn | started | (private) |

## extensions/discord/src/subagent-progress.ts (736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | SubagentProgressEvent | (private) |
| 56 | type | PersistedReconciliationResult | (private) |
| 76 | fn | clearTerminalRetry | (private) |
| 86 | fn | cancelTerminalRetryTimer | (private) |
| 94 | fn | setReaction | (private) |
| 107 | fn | clearReaction | (private) |
| 123 | fn | clearRunningReactions | (private) |
| 132 | fn | persistTrackerRunningEmoji | (private) |
| 150 | fn | updateRunningReaction | (private) |
| 188 | fn | disableTrackerReactionsOnCollision | (private) |
| 210 | fn | sendTyping | (private) |
| 221 | fn | startTyping | (private) |
| 237 | fn | stopTyping | (private) |
| 244 | fn | handleStarted | (private) |
| 413 | fn | reconcilePersistedTracker | (private) |
| 483 | fn | scheduleTerminalLookupRetry | (private) |
| 525 | fn | handleEnded | (private) |
| 647 | fn | handleDiscordSubagentProgressImpl | (private) |
| 655 | fn | clearStartupRecoveryRetry | (private) |
| 663 | fn | scheduleStartupRecoveryRetry | (private) |
| 681 | fn | recoverDiscordSubagentProgress | pub |
| 713 | fn | resetDiscordSubagentProgressForTest | (private) |

## extensions/discord/src/voice-message.test.ts (584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | VoiceMessageMetadata | (private) |
| 72 | fn | cancelTrackedResponse | (private) |
| 104 | fn | expectStagedFfmpegOutput | (private) |
| 115 | fn | readSingleCommandArgs | (private) |
| 252 | fn | createRest | (private) |
| 259 | fn | retryRateLimits | (private) |
