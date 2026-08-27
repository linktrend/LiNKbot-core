# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 67 large files in this module.

## extensions/telegram/src/accounts.test.ts (751 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | warningLines | (private) |
| 28 | fn | expectNoMissingDefaultWarning | (private) |
| 32 | fn | resolveAccountWithEnv | (private) |

## extensions/telegram/src/action-runtime.test.ts (2159 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 191 | type | TopicNameEntryForTest | (private) |
| 201 | fn | installTopicNameStoreForTest | (private) |
| 228 | type | MockCallSource | (private) |
| 234 | fn | requireRecord | (private) |
| 241 | fn | mockCall | (private) |
| 249 | fn | resultDetails | (private) |
| 261 | fn | reactionConfig | (private) |
| 267 | fn | telegramConfig | (private) |
| 278 | fn | topicCacheScopeFor | (private) |
| 282 | fn | sendInlineButtonsMessage | (private) |
| 307 | fn | expectReactionAdded | (private) |
| 688 | fn | readDurableQueueEntries | (private) |
| 2039 | fn | accountTelegramConfig | (private) |
| 2058 | fn | expectAccountStickerSend | (private) |

## extensions/telegram/src/action-runtime.ts (927 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | type | TelegramActionName | (private) |
| 99 | type | TelegramForumTopicIconColor | (private) |
| 101 | fn | readTelegramForumTopicIconColor | (private) |
| 115 | fn | normalizeTelegramActionName | (private) |
| 123 | fn | readTelegramChatId | (private) |
| 131 | fn | readTelegramThreadId | (private) |
| 142 | fn | resolveActionTopicNameCacheScope | (private) |
| 149 | fn | formatTelegramDeliveryTarget | (private) |
| 158 | fn | readTelegramReplyToMessageId | (private) |
| 169 | fn | pushTelegramMediaUrl | (private) |
| 181 | fn | readTelegramSendMediaUrls | (private) |
| 211 | fn | resolveTelegramButtonsFromParams | (private) |
| 225 | fn | readTelegramSendContent | (private) |
| 270 | fn | normalizeTelegramDeliveryPin | (private) |
| 295 | fn | buildTelegramActionSendPayload | (private) |
| 323 | fn | getLastDurableTelegramActionResult | (private) |
| 337 | fn | handleTelegramAction | pub |
| 356 | fn | notifyVisibleOutboundSuccess | (private) |

## extensions/telegram/src/bot-message-context.body.test.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | TelegramInboundBodyParams | (private) |
| 41 | fn | resolveTelegramBody | (private) |
| 75 | fn | transcribeCallContext | (private) |

## extensions/telegram/src/bot-message-context.body.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | TelegramMentionFacts | (private) |
| 71 | type | TelegramInboundBodyResult | (private) |
| 87 | fn | formatAudioTranscriptForAgent | (private) |
| 91 | type | TelegramSavedMediaKind | (private) |
| 93 | fn | resolveSavedMediaKind | (private) |
| 107 | fn | formatSavedMediaPlaceholder | (private) |
| 129 | fn | resolveTelegramMentionFacts | (private) |
| 160 | fn | resolveStickerVisionSupport | (private) |
| 172 | fn | resolveTelegramInboundBody | pub |

## extensions/telegram/src/bot-message-context.session.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | TelegramMentionFacts | (private) |
| 64 | type | TelegramInboundContextPayload | (private) |
| 76 | type | TelegramMessageContextSessionRuntime | (private) |
| 90 | fn | hasCompleteSessionRuntime | (private) |
| 98 | fn | loadTelegramMessageContextSessionRuntime | (private) |
| 110 | fn | resolveTelegramMessageContextStorePath | pub |
| 121 | fn | replyTargetToChainEntry | (private) |
| 142 | fn | stripReplyChainForwarded | (private) |
| 153 | fn | formatTelegramForwardedMessageBody | (private) |
| 165 | fn | formatReplyChainEntry | (private) |
| 186 | fn | buildTelegramInboundContextPayload | pub |
| 508 | fn | toInboundMedia | (private) |

## extensions/telegram/src/bot-message-context.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | TelegramMessageContextPayload | (private) |
| 69 | type | TelegramReactionApi | (private) |
| 74 | type | TelegramStatusReactionController | (private) |
| 85 | type | TelegramMessageContext | pub |
| 323 | fn | sendTyping | (private) |
| 335 | fn | sendRecordVoice | (private) |

## extensions/telegram/src/bot-message-dispatch-delivery.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | createTelegramDeliveryController | pub |
| 154 | fn | createPromptContextSequence | (private) |
| 216 | fn | sendPayload | (private) |
| 332 | fn | emitPreviewFinalizedHook | (private) |
| 384 | fn | materializeAnswerLaneBeforeRotation | (private) |
| 414 | fn | postCosmeticSummaryBar | (private) |
| 421 | fn | deliverProgressCollapseSummary | (private) |
| 515 | fn | finalizePendingAnswerBlockDraft | (private) |
| 575 | type | TelegramDeliveryController | pub |

## extensions/telegram/src/bot-message-dispatch-draft.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | DraftPartialTextUpdate | (private) |
| 37 | type | SplitLaneSegment | (private) |
| 38 | type | SplitLaneSegmentsResult | (private) |
| 43 | type | QueuedAnswerBlockRotation | (private) |
| 49 | fn | resolveDraftPartialText | (private) |
| 60 | fn | createTelegramDraftController | pub |
| 166 | fn | resetProgress | (private) |
| 167 | fn | suppressProgress | (private) |
| 168 | fn | noteReasoningHint | (private) |
| 169 | fn | noteReasoningDelivered | (private) |
| 171 | fn | resetAnswerToolProgressDraft | (private) |
| 174 | fn | resetLaneState | (private) |
| 188 | fn | repositionLaneForNewMessage | (private) |
| 194 | fn | rotateLaneForNewMessage | (private) |
| 203 | fn | rotateAnswerLaneForNewMessage | (private) |
| 207 | fn | rotateAnswerLaneAfterToolProgress | (private) |
| 216 | fn | rotateAnswerLaneAfterQueuedBlocksSettle | (private) |
| 246 | fn | prepareAnswerLaneForToolProgress | (private) |
| 289 | fn | updateDraftFromPartial | (private) |
| 308 | fn | ingestDraftLaneSegments | (private) |
| 324 | fn | enqueueEvent | (private) |
| 336 | fn | recomputeQueuedAnswerBlockRotations | (private) |
| 350 | fn | rotationMatches | (private) |
| 358 | fn | prepareQueuedAnswerBlock | (private) |
| 401 | fn | dropQueuedAnswerBlockRotation | (private) |
| 505 | type | TelegramDraftController | pub |

## extensions/telegram/src/bot-message-dispatch.context-recovery.test.ts (564 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.delivery-basics.test.ts (599 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.delivery-transcript.test.ts (637 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.draft-failures-progress.test.ts (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 452 | fn | allDeliveredReplyTexts | (private) |

## extensions/telegram/src/bot-message-dispatch.draft-rotation.test.ts (613 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.progress-rendering.test.ts (705 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.progress-summary.test.ts (617 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.progress-updates.test.ts (747 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.reasoning-room-events.test.ts (586 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 302 | fn | createRoomContext | (private) |
| 377 | fn | createRoomContext | (private) |
| 458 | fn | createRoomContext | (private) |
| 538 | fn | createGroupContext | (private) |

## extensions/telegram/src/bot-message-dispatch.reply-targets.test.ts (562 lines)

_No symbols extracted._

## extensions/telegram/src/bot-message-dispatch.test-harness.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | DispatchReplyWithBufferedBlockDispatcherArgs | pub |
| 27 | fn | requireInvocationOrder | pub |
| 171 | type | RunParams | (private) |
| 172 | type | TestTurn | (private) |
| 292 | fn | installTelegramStateRuntimeForTest | (private) |
| 339 | type | TelegramMessageContext | pub |
| 342 | fn | loadTelegramDispatchForTests | (private) |
| 346 | fn | resetTelegramDispatchTestState | (private) |
| 450 | fn | cleanupTelegramDispatchTestState | (private) |
| 455 | fn | createDraftStream | pub |
| 456 | fn | createSequencedDraftStream | pub |
| 459 | fn | setupDraftStreams | pub |
| 471 | fn | mockDefaultSessionEntry | pub |
| 480 | fn | expectRecordFields | pub |
| 491 | fn | mockCallArg | pub |
| 499 | fn | expectDraftStreamParams | pub |
| 503 | fn | telegramProgressPreview | pub |
| 510 | fn | expectDeliverRepliesParams | pub |
| 514 | fn | expectDeliveredReply | pub |
| 527 | fn | allDeliveredReplyTexts | pub |
| 535 | fn | expectDispatchParams | pub |
| 541 | fn | expectWindowCollapsedTo | pub |
| 551 | fn | createContext | pub |
| 605 | fn | createStatusReactionController | pub |
| 618 | fn | createDirectSessionPayload | pub |
| 625 | fn | createBot | pub |
| 638 | fn | createRuntime | pub |
| 648 | fn | dispatchWithContext | pub |
| 680 | fn | createReasoningStreamContext | pub |
| 689 | fn | createReasoningDefaultContext | pub |
| 699 | fn | createReasoningForumTopicContext | pub |
| 716 | fn | describeTelegramDispatch | pub |

## extensions/telegram/src/bot-message-dispatch.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | resolveStickerVisionSupport | (private) |
| 68 | fn | includeStickerDescription | (private) |
| 84 | fn | resolveTelegramQuoteContext | (private) |
| 159 | fn | prepareTelegramSticker | (private) |
| 212 | fn | scheduleDmTopicLabel | (private) |
| 304 | fn | isDispatchSuperseded | (private) |

## extensions/telegram/src/bot-message.test.ts (852 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | requireInvocationOrder | (private) |
| 95 | fn | processSampleMessage | (private) |
| 124 | fn | createDispatchFailureHarness | (private) |
| 140 | fn | createMessageContext | (private) |

## extensions/telegram/src/bot-message.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | formatTelegramInboundLogLine | (private) |
| 53 | type | TelegramMessageProcessorDeps | (private) |
| 71 | type | TelegramMessageProcessorTurnContext | pub |
| 87 | fn | resolveTelegramMessageTurnSettings | pub |
| 122 | fn | createTelegramMessageProcessor | pub |
| 191 | fn | recordCurrentUpdateProcessingResult | (private) |
| 265 | fn | runTelegramDispatch | (private) |
| 392 | fn | run | (private) |

## extensions/telegram/src/bot-native-command-menu.test.ts (683 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | waitForTelegramMenu | (private) |
| 16 | type | SyncMenuOptions | (private) |
| 26 | fn | syncMenuCommandsWithMocks | (private) |
| 42 | fn | setMyCommandsCall | (private) |
| 50 | fn | setMyCommandsPayload | (private) |

## extensions/telegram/src/bot-native-command-menu.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | TelegramMenuCommand | pub |
| 28 | type | TelegramCommandMenuScope | (private) |
| 32 | type | TelegramPluginCommandSpec | (private) |
| 48 | fn | countTelegramCommandText | (private) |
| 58 | fn | truncateTelegramCommandText | (private) |
| 79 | fn | fitTelegramCommandsWithinTextBudget | (private) |
| 131 | fn | readErrorTextField | (private) |
| 138 | fn | isBotCommandsTooMuchError | (private) |
| 162 | fn | formatTelegramCommandRetrySuccessLog | (private) |
| 174 | fn | buildPluginTelegramMenuCommands | pub |
| 218 | fn | buildCappedTelegramMenuCommands | pub |
| 243 | fn | buildUncachedCappedTelegramMenuCommands | (private) |
| 284 | fn | buildTelegramMenuResultCacheKey | (private) |
| 301 | fn | updateTelegramCommandDigestField | (private) |
| 310 | fn | updateTelegramCommandLocalizationDigest | (private) |
| 322 | fn | rememberCappedTelegramMenuResult | (private) |
| 336 | fn | hashCommandList | (private) |
| 344 | fn | getCommandHashKey | (private) |
| 348 | fn | readCachedCommandHash | (private) |
| 353 | fn | writeCachedCommandHash | (private) |
| 362 | fn | normalizeTelegramLanguageCode | (private) |
| 367 | fn | readLocalizedDescription | (private) |
| 385 | fn | toTelegramBotCommands | (private) |
| 395 | fn | buildLocalizedCommandVariants | (private) |
| 432 | fn | formatTelegramCommandScopeOperation | (private) |
| 441 | fn | deleteTelegramMenuCommandsForScopes | (private) |
| 465 | fn | setTelegramMenuCommandsForScopes | (private) |
| 492 | fn | syncTelegramMenuCommands | pub |
| 500 | fn | sync | (private) |

## extensions/telegram/src/bot-native-commands.session-meta.test.ts (2076 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ResolveConfiguredBindingRouteFn | (private) |
| 23 | type | EnsureConfiguredBindingRouteReadyFn | (private) |
| 25 | type | DispatchReplyWithBufferedBlockDispatcherFn | (private) |
| 27 | type | DispatchReplyWithBufferedBlockDispatcherParams | (private) |
| 29 | type | DispatchReplyWithBufferedBlockDispatcherResult | (private) |
| 32 | type | ResolveCommandArgMenuFn | (private) |
| 34 | type | DeliverRepliesFn | (private) |
| 35 | type | DeliverRepliesParams | (private) |
| 36 | type | LoadModelCatalogFn | (private) |
| 37 | type | ResolveDefaultModelForAgentFn | (private) |
| 39 | type | MatchPluginCommandFn | (private) |
| 262 | type | TelegramCommandHandler | (private) |
| 263 | type | TelegramPluginCommandSpecs | (private) |
| 266 | type | TelegramLoginFlow | (private) |
| 268 | fn | registerAndResolveStatusHandler | (private) |
| 302 | fn | registerAndResolveCommandHandlerBase | (private) |
| 377 | fn | registerAndResolveCommandHandler | (private) |
| 418 | fn | createConfiguredAcpTopicBinding | (private) |
| 444 | fn | createConfiguredBindingRoute | (private) |
| 524 | fn | requireValue | (private) |
| 531 | fn | requireRecord | (private) |
| 538 | fn | firstMockArg | (private) |
| 546 | fn | expectRecordFields | (private) |
| 558 | fn | expectSendMessageCall | (private) |
| 588 | fn | expectUnauthorizedNewCommandBlocked | (private) |
| 601 | fn | resetSessionMetaMocks | (private) |
| 1716 | fn | patchUpdate | (private) |
| 1758 | fn | update | (private) |

## extensions/telegram/src/bot-native-commands.test.ts (901 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | CommandBotHarness | (private) |
| 25 | type | TelegramInlineKeyboardReplyMarkup | (private) |
| 28 | type | PlugCommandHarnessParams | (private) |
| 37 | fn | primePlugCommand | (private) |
| 57 | fn | registerPlugCommand | (private) |
| 76 | fn | collectCallbackData | (private) |
| 88 | fn | firstCall | (private) |
| 96 | fn | firstCallArg | (private) |
| 104 | fn | firstDeliverRepliesParams | (private) |
| 108 | fn | firstExecutePluginCommandParams | (private) |
| 116 | fn | replyAt | (private) |
| 125 | fn | registerCustomTelegramCommandMenu | (private) |

## extensions/telegram/src/bot-native-commands.ts (1972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 122 | type | TelegramNativeCommandContext | (private) |
| 123 | type | TelegramChunkMode | (private) |
| 126 | type | TelegramNativeReplyPayload | (private) |
| 127 | type | TelegramNativeReplyChannelData | (private) |
| 134 | type | FastModeState | (private) |
| 135 | type | TelegramResolvedGroupConfig | (private) |
| 140 | type | TelegramCommandAuthResult | (private) |
| 153 | type | TelegramNativeCommandThreadContext | (private) |
| 162 | fn | resolveTelegramCodexLoginProviderInput | (private) |
| 169 | fn | buildTelegramCodexLoginFlowKey | (private) |
| 190 | type | TelegramCommandMenuModelContext | (private) |
| 198 | fn | buildTelegramCommandMenuModelContext | (private) |
| 220 | type | TelegramNativeCommandRuntime | (private) |
| 222 | fn | resolveTelegramCommandSessionFile | (private) |
| 240 | fn | resolveTelegramProgressPlaceholder | (private) |
| 249 | fn | resolveTelegramCommandTranscriptContext | (private) |
| 284 | fn | resolveTelegramCommandMenuModelContext | (private) |
| 353 | fn | resolveTelegramFastCommandModelContext | (private) |
| 365 | fn | fallback | (private) |
| 393 | fn | resolveTelegramFastCommandState | (private) |
| 402 | fn | fallback | (private) |
| 433 | fn | resolveTelegramThinkMenuCurrentLevel | (private) |
| 465 | fn | formatTelegramCommandArgMenuTitle | (private) |
| 487 | fn | resolveTelegramFastMenuCurrentStatus | (private) |
| 495 | fn | resolveTelegramNativeReplyChannelData | (private) |
| 501 | fn | normalizeTelegramNativeReplyPayload | (private) |
| 507 | fn | isSuppressedTelegramNativeReplyPayload | (private) |
| 511 | fn | hasTelegramNativeReplyReaction | (private) |
| 516 | fn | hasRenderableTelegramNativeReplyPayload | (private) |
| 527 | fn | isEditableTelegramProgressResult | (private) |
| 542 | fn | cleanupTelegramProgressPlaceholder | (private) |
| 563 | fn | resolveTelegramNativeCommandThreadContext | (private) |
| 598 | type | RegisterTelegramHandlerParams | pub |
| 636 | fn | resolveTelegramNativeCommandDisableBlockStreaming | (private) |
| 643 | type | RegisterTelegramNativeCommandsParams | (private) |
| 664 | fn | resolveTelegramCommandAuth | (private) |
| 772 | fn | sendAuthMessage | (private) |
| 779 | fn | rejectNotAuthorized | (private) |
| 883 | fn | registerTelegramNativeCommands | pub |
| 919 | fn | resolveTelegramMenuCommandCatalog | (private) |
| 1126 | fn | buildCommandDeliveryBaseOptions | (private) |
| 1270 | fn | sendLoginMessage | (private) |
| 1440 | fn | resolveNativeCommandRuntime | (private) |

## extensions/telegram/src/bot.create-telegram-bot.channel-post-media.test.ts (975 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | withTelegramSpooledReplayUpdate | (private) |
| 85 | fn | setOpenChannelPostConfig | (private) |
| 101 | fn | getChannelPostHandler | (private) |
| 106 | fn | resolveFlushTimer | (private) |
| 110 | fn | resolveFlushTimerForDelay | (private) |
| 126 | fn | createImageFetchSpy | (private) |
| 136 | fn | waitForBufferedProcessing | (private) |
| 140 | fn | waitForMockCalls | (private) |
| 149 | fn | createChannelPostContext | (private) |
| 176 | fn | flushChannelPostMediaGroup | (private) |
| 183 | fn | flushChannelPostMediaGroupForDelay | (private) |
| 193 | fn | queueChannelPostAlbum | (private) |
| 226 | fn | replyPayload | (private) |

## extensions/telegram/src/bot.create-telegram-bot.test-harness.ts (737 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | AnyMock | (private) |
| 12 | type | AnyAsyncMock | (private) |
| 13 | type | TelegramBotRuntimeForTest | (private) |
| 14 | type | GetRuntimeConfigFn | (private) |
| 16 | type | GetSessionEntryFn | (private) |
| 17 | type | ListSessionEntriesFn | (private) |
| 19 | type | ResolveStorePathFn | (private) |
| 21 | type | ReadSessionUpdatedAtFn | (private) |
| 23 | type | SessionEntry | (private) |
| 24 | type | SessionStore | (private) |
| 25 | type | LoadSessionStoreFn | (private) |
| 26 | type | ResolveTelegramApprovalForTest | (private) |
| 27 | type | DispatchReplyWithBufferedBlockDispatcherFn | (private) |
| 29 | type | DispatchReplyWithBufferedBlockDispatcherResult | (private) |
| 32 | type | DispatchReplyHarnessParams | (private) |
| 33 | type | ReplyPayloadLike | (private) |
| 57 | fn | getLoadWebMediaMock | pub |
| 109 | fn | getLoadConfigMock | pub |
| 113 | fn | getLoadSessionStoreMock | pub |
| 117 | fn | setSessionStoreEntriesForTest | pub |
| 134 | fn | getReadChannelAllowFromStoreMock | pub |
| 140 | fn | getUpsertChannelPairingRequestMock | pub |
| 167 | fn | dispatchHarnessReplies | (private) |
| 227 | fn | parseModelRef | (private) |
| 242 | fn | normalizeLowercaseStringOrEmptyForTest | (private) |
| 246 | fn | resolveDefaultModelForAgentForTest | (private) |
| 261 | fn | createModelsProviderDataFromConfig | (private) |
| 268 | fn | add | (private) |
| 382 | type | RichMessageParams | (private) |
| 393 | fn | getRichMessageText | (private) |
| 412 | fn | toLegacyMessageParams | (private) |
| 533 | fn | getOnHandler | pub |
| 552 | fn | makeTelegramMessageCtx | (private) |
| 581 | fn | makeForumGroupMessageCtx | pub |
| 602 | fn | clearTelegramDispatchDedupeFilesForTest | (private) |

## extensions/telegram/src/bot.create-telegram-bot.test.ts (6260 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | BuildModelsProviderDataMock | (private) |
| 96 | fn | createTelegramBotTestStateDir | (private) |
| 114 | type | TelegramMiddlewareTestContext | (private) |
| 115 | type | TelegramMiddleware | (private) |
| 120 | fn | getRegisteredTelegramMiddlewares | (private) |
| 126 | fn | runTelegramMiddlewareChain | (private) |
| 147 | fn | installPerKeySequentializer | (private) |
| 172 | fn | withTelegramSpooledReplayUpdate | (private) |
| 179 | fn | mockTelegramConfigWrites | (private) |
| 183 | fn | flushTelegramTestMicrotasks | (private) |
| 188 | fn | requireValue | (private) |
| 195 | fn | createDeferred | (private) |
| 205 | fn | requireRecord | (private) |
| 212 | fn | expectRecordFields | (private) |
| 224 | fn | getBotCtorOptions | (private) |
| 233 | fn | expectBotClientFields | (private) |
| 627 | fn | topicCtx | (private) |
| 761 | fn | runMiddlewareChain | (private) |
| 785 | fn | extractLatestDebounceFlush | (private) |
| 897 | fn | extractLatestDebounceFlush | (private) |
| 1151 | fn | dispatchSpooledMessage | (private) |
| 1242 | fn | dispatchSpooledMessage | (private) |
| 1372 | fn | dispatchSpooledMessage | (private) |
| 1483 | fn | dispatchSpooledMessage | (private) |
| 1682 | fn | extractLatestForwardDebounceFlush | (private) |
| 1779 | fn | extractLatestDebounceFlush | (private) |
| 2152 | fn | sendModelCallback | (private) |
| 3009 | fn | replayedCtx | (private) |
| 3051 | fn | replayedCtx | (private) |
| 3094 | fn | replayedCtx | (private) |
| 3161 | type | Middleware | (private) |
| 3170 | fn | runMiddlewareChain | (private) |
| 3237 | type | Middleware | (private) |
| 3246 | fn | runMiddlewareChain | (private) |
| 3267 | fn | onUnhandledRejection | (private) |
| 3299 | type | Middleware | (private) |
| 3308 | fn | runMiddlewareChain | (private) |
| 3368 | type | Middleware | (private) |
| 3377 | fn | runMiddlewareChain | (private) |
| 3429 | type | Middleware | (private) |
| 3438 | fn | runMiddlewareChain | (private) |
| 3494 | type | Middleware | (private) |
| 3503 | fn | runMiddlewareChain | (private) |
| 3575 | type | Middleware | (private) |
| 3584 | fn | runMiddlewareChain | (private) |
| 3962 | fn | configForAgent | (private) |
| 3995 | fn | sendDm | (private) |
| 4023 | fn | configForTopicAgent | (private) |
| 4065 | fn | sendTopicMessage | (private) |
| 4424 | fn | resetHarnessSpies | (private) |
| 4431 | fn | getMessageHandler | (private) |
| 4438 | fn | dispatchMessage | (private) |
| 5404 | fn | invokeStatus | (private) |
| 5522 | fn | runMiddlewareChain | (private) |
| 5585 | fn | runMiddlewareChain | (private) |
| 5642 | fn | runMiddlewareChain | (private) |
| 5709 | fn | runMiddlewareChain | (private) |
| 5772 | fn | runMiddlewareChain | (private) |
| 5919 | fn | runMiddlewareChain | (private) |
| 5972 | fn | runMiddlewareChain | (private) |
| 6043 | fn | runMiddlewareChain | (private) |
| 6102 | fn | runMiddlewareChain | (private) |
| 6164 | fn | runMiddlewareChain | (private) |

## extensions/telegram/src/bot.media.downloads-media-file-path-no-file-download.e2e.test.ts (908 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ReplyPayload | (private) |
| 22 | type | MockWithCalls | (private) |
| 24 | fn | mockCall | (private) |
| 33 | fn | replyPayload | (private) |
| 41 | fn | requireRecord | (private) |
| 48 | fn | requireArray | (private) |
| 55 | fn | conversationMessages | (private) |
| 68 | fn | downloadRequest | (private) |
| 82 | type | ScheduledTimer | (private) |
| 87 | fn | resolveActiveScheduledTimersForDelay | (private) |
| 111 | fn | flushActiveScheduledTimersForDelay | (private) |

## extensions/telegram/src/bot.media.stickers-and-fragments.e2e.test.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | resolveScheduledTimerForDelay | (private) |
| 48 | fn | flushScheduledTimerForDelay | (private) |
| 58 | type | ScheduledTimer | (private) |
| 63 | fn | resolveActiveScheduledTimersForDelay | (private) |

## extensions/telegram/src/bot.test.ts (7132 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | RunParams | (private) |
| 155 | fn | withTelegramSpooledReplayUpdate | (private) |
| 162 | fn | createSignal | (private) |
| 173 | fn | waitForReplyCalls | (private) |
| 187 | fn | setTelegramPluginStateRuntimeForTests | (private) |
| 205 | fn | getTelegramCallbackHandlerForTests | (private) |
| 209 | fn | loadEnvelopeTimestampHelpers | (private) |
| 213 | fn | loadInboundContextContract | (private) |
| 217 | type | MockCallSource | (private) |
| 223 | fn | requireRecord | (private) |
| 230 | fn | requireArray | (private) |
| 235 | fn | mockArg | (private) |
| 243 | fn | mockCall | (private) |
| 251 | fn | firstEditMessageTextArg | (private) |
| 255 | fn | firstSystemEventArg | (private) |
| 259 | fn | mockMsgContextArg | (private) |
| 268 | type | DirectTelegramTranscriptTestMessage | (private) |
| 275 | fn | readOnlySessionEntry | (private) |
| 279 | fn | writeDirectTelegramTranscriptMessages | (private) |
| 327 | fn | writeDirectTelegramTranscriptContext | (private) |
| 351 | fn | latestConversationContextMessages | (private) |
| 371 | fn | seedTelegramPromptContextMessages | (private) |
| 411 | fn | execApprovalCall | (private) |
| 418 | fn | execApprovalTelegramConfig | (private) |
| 425 | fn | execApprovalTargetConfig | (private) |
| 432 | fn | systemEventOptions | (private) |
| 6075 | fn | createCallbackUpdate | (private) |

## extensions/telegram/src/button-types.test.ts (502 lines)

_No symbols extracted._

## extensions/telegram/src/channel.gateway.test.ts (737 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | useTempStateDir | (private) |
| 54 | fn | createMemoryPluginStateStore | (private) |
| 59 | type | Entry | (private) |
| 121 | fn | installTelegramRuntime | (private) |
| 152 | fn | createRuntimeEnvMock | (private) |
| 160 | fn | createTelegramConfig | (private) |
| 189 | fn | startTelegramAccount | (private) |
| 211 | fn | latestMonitorOptions | (private) |
| 225 | fn | sendMessageOptionsAt | (private) |
| 232 | fn | waitForMicrotaskCondition | (private) |
| 242 | fn | releaseStartupProbeControls | (private) |
| 582 | fn | runProbe | (private) |
| 618 | fn | runProbe | (private) |

## extensions/telegram/src/channel.ts (1249 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | type | TelegramSendFn | (private) |
| 113 | fn | resolveTelegramProbe | (private) |
| 119 | fn | readStartupBotInfoCache | (private) |
| 138 | fn | writeStartupBotInfoCache | (private) |
| 157 | fn | deleteStartupBotInfoCache | (private) |
| 161 | fn | resolveTelegramAuditCollector | (private) |
| 168 | fn | resolveTelegramAuditMembership | (private) |
| 175 | fn | resolveTelegramMonitor | (private) |
| 182 | fn | formatTelegramUnauthorizedTokenError | (private) |
| 192 | fn | getOptionalTelegramRuntime | (private) |
| 200 | fn | resolveTelegramSend | (private) |
| 208 | fn | resolveTelegramTokenHelper | (private) |
| 315 | fn | normalizeTelegramAcpConversationId | (private) |
| 326 | fn | matchTelegramAcpConversation | (private) |
| 352 | fn | shouldTreatTelegramDeliveredTextAsVisible | (private) |
| 360 | fn | targetsMatchTelegramReplySuppression | (private) |
| 388 | fn | resolveTelegramCommandConversation | (private) |
| 418 | fn | resolveTelegramInboundConversation | (private) |
| 458 | fn | resolveTelegramDeliveryTarget | (private) |
| 486 | fn | resolveTelegramRouteTarget | (private) |
| 495 | fn | shouldStripTelegramThreadFromAnnounceOrigin | (private) |
| 530 | fn | resolveTelegramOutboundSessionRoute | (private) |
| 619 | fn | buildTelegramCanonicalTopicThreadId | (private) |
| 625 | fn | resolveTelegramNativeTopicThreadId | (private) |
| 650 | fn | resolveTelegramTargets | (private) |

## extensions/telegram/src/config-schema.test.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | fn | expectTelegramConfigValid | (private) |
| 9 | fn | expectTelegramConfigIssue | (private) |

## extensions/telegram/src/doctor.test.ts (746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | collectPreviewWarnings | (private) |
| 20 | fn | repairConfig | (private) |
| 28 | fn | collectEmptyAllowlistWarnings | (private) |

## extensions/telegram/src/doctor.ts (622 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | TelegramAllowFromInvalidHit | (private) |
| 30 | type | TelegramMalformedGroupsHit | (private) |
| 31 | type | TelegramSelectedQuoteToolProgressHit | (private) |
| 32 | type | TelegramApiRootBotEndpointHit | (private) |
| 38 | type | DoctorAllowFromList | (private) |
| 39 | type | DoctorAccountRecord | (private) |
| 41 | type | TelegramAllowFromListRef | (private) |
| 47 | fn | asObjectRecord | (private) |
| 53 | fn | sanitizeForLog | (private) |
| 57 | fn | hasAllowFromEntries | (private) |
| 61 | fn | collectTelegramAccountScopes | (private) |
| 95 | fn | collectTelegramAllowFromLists | (private) |
| 136 | fn | describeConfigValueType | (private) |
| 146 | fn | scanTelegramMalformedGroupsConfig | (private) |
| 164 | fn | collectTelegramMalformedGroupsWarnings | (private) |
| 181 | fn | scanTelegramInvalidAllowFromEntries | (private) |
| 183 | fn | scanList | (private) |
| 204 | fn | collectTelegramInvalidAllowFromWarnings | (private) |
| 218 | fn | scanTelegramBotEndpointApiRoots | (private) |
| 235 | fn | collectTelegramApiRootWarnings | (private) |
| 249 | fn | formatTelegramAccountConfigPath | (private) |
| 258 | fn | scanTelegramSelectedQuoteToolProgressWarnings | (private) |
| 288 | fn | collectTelegramSelectedQuoteToolProgressWarnings | (private) |
| 301 | fn | maybeRepairTelegramApiRoots | (private) |
| 311 | fn | apply | (private) |
| 333 | fn | collectTelegramMissingEnvTokenWarnings | (private) |
| 353 | fn | repairTelegramConfig | (private) |
| 365 | fn | maybeRepairTelegramAllowFromUsernames | (private) |
| 477 | fn | repairList | (private) |
| 536 | fn | hasConfiguredGroups | (private) |
| 543 | fn | collectTelegramGroupPolicyWarnings | (private) |
| 579 | fn | collectTelegramEmptyAllowlistExtraWarnings | (private) |

## extensions/telegram/src/draft-stream.test.ts (1916 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | TelegramDraftStreamParams | (private) |
| 13 | type | MockSendMessage | (private) |
| 18 | type | MockSendRichMessage | (private) |
| 22 | fn | createMockDraftApi | (private) |
| 37 | fn | createForumDraftStream | (private) |
| 41 | fn | createThreadedDraftStream | (private) |
| 48 | fn | createDraftStream | (private) |
| 59 | fn | expectInitialForumSend | (private) |
| 70 | fn | expectPreviewSend | (private) |
| 78 | fn | expectNthPreviewSend | (private) |
| 87 | fn | requireSendMessageCallText | (private) |
| 99 | fn | expectPreviewEdit | (private) |
| 111 | fn | createForceNewMessageHarness | (private) |
| 341 | fn | retryableEditError | (private) |
| 803 | fn | expectSendMayHaveLandedStateAfterFirstFailure | (private) |
| 1798 | fn | createMockApi | (private) |
| 1800 | fn | createDebouncedStream | (private) |

## extensions/telegram/src/draft-stream.ts (923 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | TelegramDraftStream | pub |
| 97 | type | TelegramDraftMessageSnapshot | (private) |
| 103 | type | TelegramDraftPreview | pub |
| 113 | type | PlannedTelegramDraftPage | (private) |
| 120 | type | RetainedTelegramDraftPage | (private) |
| 126 | type | SingleUseReplyTargetState | (private) |
| 131 | fn | telegramRichHtmlToParseModeHtml | (private) |
| 135 | fn | planTelegramDraftPages | (private) |
| 228 | fn | createTelegramDraftStream | pub |
| 272 | fn | reserveReplyTargetForSend | (private) |
| 282 | fn | releasePendingReplyTarget | (private) |
| 287 | fn | retainReplyTarget | (private) |
| 315 | fn | sendPlannedMessage | (private) |
| 544 | fn | retainCurrentPage | (private) |
| 650 | fn | requestDraftUpdate | (private) |
| 659 | fn | updatePreview | (private) |
| 667 | fn | stop | (private) |
| 669 | fn | waitForRetryAfter | (private) |
| 743 | fn | resetStreamToNewMessage | (private) |
| 768 | fn | scheduleDetachedDelete | (private) |
| 773 | fn | runDelete | (private) |
| 803 | fn | clear | (private) |

## extensions/telegram/src/exec-approvals.test.ts (583 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | TelegramExecApprovalRequest | (private) |
| 37 | fn | createTempDir | (private) |
| 43 | fn | buildConfig | (private) |
| 58 | fn | telegramAccount | (private) |
| 70 | fn | buildMultiAccountTelegramConfig | (private) |
| 98 | fn | makeForeignChannelApprovalRequest | (private) |
| 458 | fn | buildTargetConfig | (private) |

## extensions/telegram/src/fetch.test.ts (1361 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | MockDispatcherInstance | (private) |
| 119 | type | TelegramDispatcherPolicy | (private) |
| 122 | type | DirectTelegramDispatcherPolicy | (private) |
| 123 | type | ExplicitProxyTelegramDispatcherPolicy | (private) |
| 168 | fn | resolveTelegramFetchOrThrow | (private) |
| 175 | fn | getDispatcherFromUndiciCall | (private) |
| 197 | fn | constructorOptions | (private) |
| 205 | fn | writeTempCa | (private) |
| 213 | fn | installUndiciRuntimeDeps | (private) |
| 231 | fn | buildFetchFallbackError | (private) |
| 240 | fn | buildCodeLessFetchFallbackError | (private) |
| 251 | fn | runDefaultStickyIpv4FallbackProbe | (private) |
| 262 | fn | primeStickyFallbackRetry | (private) |
| 269 | fn | expectStickyAutoSelectDispatcher | (private) |
| 287 | fn | expectTelegramKeepAliveOptions | (private) |
| 292 | fn | expectHttp1OnlyDispatcher | (private) |
| 304 | fn | expectPinnedIpv4ConnectDispatcher | (private) |
| 320 | fn | expectPinnedFallbackIpDispatcher | (private) |
| 334 | fn | expectCallerDispatcherPreserved | (private) |
| 343 | fn | loggerHasMessageContaining | (private) |
| 349 | fn | expectLoggerMessageContaining | (private) |
| 353 | fn | expectNoLoggerMessageContaining | (private) |
| 357 | fn | expectNoStickyRetryWithSameDispatcher | (private) |

## extensions/telegram/src/fetch.ts (864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | TelegramAgentPoolOptions | (private) |
| 67 | fn | telegramAgentPoolOptions | (private) |
| 77 | type | RequestInitWithDispatcher | (private) |
| 81 | type | TelegramDispatcher | (private) |
| 86 | type | TelegramDispatcherMode | (private) |
| 88 | type | TelegramDispatcherAttempt | (private) |
| 92 | type | TelegramTransportAttempt | (private) |
| 99 | type | TelegramTransportAttemptHealth | (private) |
| 105 | type | TelegramDnsResultOrder | (private) |
| 107 | type | LookupCallback | (private) |
| 111 | type | LookupOptions | (private) |
| 116 | type | LookupFunction | (private) |
| 131 | type | TelegramTransportFallbackContext | (private) |
| 136 | fn | normalizeDnsResultOrder | (private) |
| 143 | fn | createDnsResultOrderLookup | (private) |
| 172 | fn | buildTelegramConnectOptions | (private) |
| 212 | fn | hasEnvHttpProxyForTelegramApi | (private) |
| 216 | fn | resolveOpenClawProxyUrlForTelegram | (private) |
| 223 | fn | resolveTelegramDispatcherPolicy | (private) |
| 266 | fn | withPinnedLookup | (private) |
| 281 | fn | createTelegramDispatcher | (private) |
| 355 | fn | withDispatcherIfMissing | (private) |
| 366 | fn | resolveWrappedFetch | (private) |
| 370 | fn | logResolverNetworkDecisions | (private) |
| 386 | fn | collectErrorCodes | (private) |
| 421 | fn | formatErrorCodes | (private) |
| 426 | class | TelegramTransportAttemptUnhealthyError | (private) |
| 434 | fn | shouldUseTelegramTransportFallback | (private) |
| 450 | fn | shouldRetryTelegramTransportFallback | pub |
| 454 | type | TelegramTransport | pub |
| 479 | fn | createTelegramTransportAttempts | (private) |
| 543 | fn | destroyOwnedDispatchers | (private) |
| 560 | fn | resolveTelegramTransport | pub |
| 737 | fn | resolvedFetch | (private) |
| 850 | fn | resolveTelegramFetch | pub |
| 861 | fn | resolveTelegramApiBase | pub |

## extensions/telegram/src/format.ts (907 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | TelegramFormattedChunk | pub |
| 25 | fn | escapeTelegramHtml | pub |
| 29 | fn | escapeHtml | (private) |
| 33 | fn | escapeHtmlAttr | (private) |
| 37 | fn | isTelegramRichLinkHref | (private) |
| 52 | fn | buildTelegramLink | (private) |
| 83 | fn | buildTelegramCodeBlockOpen | (private) |
| 90 | fn | renderTelegramHtml | (private) |
| 98 | fn | leadingWhitespaceLength | (private) |
| 106 | fn | isTelegramBulletLine | (private) |
| 110 | fn | isTelegramListBoundaryLine | (private) |
| 114 | fn | isMarkdownIndentedCodeLine | (private) |
| 118 | fn | shouldPreserveTelegramListBoundarySpacing | (private) |
| 128 | fn | preserveTelegramListBoundarySpacing | (private) |
| 150 | fn | markdownToTelegramHtml | pub |
| 181 | fn | escapeRegex | (private) |
| 220 | type | TelegramHtmlTagSupport | (private) |
| 233 | fn | popLastTagName | (private) |
| 243 | fn | isSupportedTelegramHtmlTag | (private) |
| 263 | fn | hasOpenTelegramHtmlTag | (private) |
| 267 | fn | preserveTelegramHtmlTag | (private) |
| 300 | fn | escapeUnsupportedTelegramHtml | (private) |
| 343 | fn | stripTelegramHtmlForPlainText | (private) |
| 349 | fn | encodePlainTextForTelegramHtmlStrip | (private) |
| 364 | fn | telegramHtmlToPlainTextFallback | pub |
| 394 | fn | promoteEscapedSupportedTelegramTags | (private) |
| 407 | fn | preserveSupportedTelegramHtmlTags | (private) |
| 446 | fn | renderSupportedTelegramHtml | (private) |
| 455 | fn | getFileReferencePattern | (private) |
| 467 | fn | getOrphanedTldPattern | (private) |
| 479 | fn | wrapStandaloneFileRef | (private) |
| 489 | fn | wrapSegmentFileRefs | (private) |
| 504 | fn | wrapFileReferencesInHtml | pub |
| 544 | fn | renderTelegramHtmlText | pub |
| 556 | fn | escapeUnsupportedTelegramHtmlWithTableFallback | (private) |
| 563 | fn | isInsideTelegramHtmlCodeContext | (private) |
| 584 | fn | normalizeTelegramLegacyHtmlTables | (private) |
| 595 | fn | parseTelegramHtmlColspan | (private) |
| 601 | fn | parseTelegramRichHtmlTableRows | (private) |
| 624 | fn | renderTelegramRichHtmlRawTableFallback | (private) |
| 653 | type | TelegramHtmlTag | (private) |
| 661 | fn | buildTelegramHtmlOpenPrefix | (private) |
| 665 | fn | buildTelegramHtmlCloseSuffix | (private) |
| 673 | fn | buildTelegramHtmlCloseSuffixLength | (private) |
| 680 | fn | clampToSurrogateBoundary | (private) |
| 691 | fn | findTelegramHtmlSafeSplitIndex | (private) |
| 700 | fn | findTelegramHtmlEntitySafeSplitIndex | (private) |
| 716 | fn | popTelegramHtmlTag | (private) |
| 725 | fn | splitTelegramHtmlChunksRaw | (private) |
| 740 | fn | resetCurrent | (private) |
| 745 | fn | flushCurrent | (private) |
| 753 | fn | appendText | (private) |
| 847 | fn | splitTelegramHtmlChunks | pub |
| 865 | fn | renderTelegramChunkHtml | (private) |
| 869 | fn | renderTelegramChunksWithinHtmlLimit | (private) |
| 884 | fn | markdownToTelegramChunks | pub |
| 900 | fn | markdownToTelegramHtmlChunks | pub |

## extensions/telegram/src/format.wrap-md.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | TelegramChunk | (private) |
| 12 | fn | expectHtmlChunkLengthsAtMost | (private) |
| 18 | fn | expectNonBlankTextChunks | (private) |
| 24 | fn | expectHtmlChunksWrappedWith | (private) |

## extensions/telegram/src/lane-delivery.test.ts (1184 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | PromptContextRecord | (private) |
| 23 | fn | createHarness | (private) |
| 64 | fn | createPromptContextSequence | (private) |
| 99 | fn | deliverFinalAnswer | (private) |
| 108 | fn | createProjectionSequence | (private) |
| 117 | fn | deliverProjectedFinalAnswer | (private) |
| 130 | fn | expectPreviewFinalized | (private) |
| 140 | fn | expectRecordedPreview | (private) |
| 156 | fn | expectSentPayload | (private) |
| 856 | fn | visibleText | (private) |

## extensions/telegram/src/message-cache.test.ts (1490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | TelegramMessageCachePersistentStore | (private) |
| 21 | type | PersistedCacheValue | (private) |
| 31 | fn | clonePersistedCacheValue | (private) |
| 35 | fn | createMemoryPersistentStore | (private) |
| 1273 | fn | record | (private) |
| 1403 | fn | record | (private) |

## extensions/telegram/src/message-cache.ts (895 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | TelegramReplyChainEntry | pub |
| 27 | type | TelegramCachedMessageNode | pub |
| 33 | type | TelegramConversationContextNode | (private) |
| 38 | type | TelegramMessageCache | (private) |
| 76 | type | MessageWithExternalReply | (private) |
| 77 | type | MessageWithPromptContextTimestamp | (private) |
| 81 | type | TelegramMessageCacheBucket | (private) |
| 88 | type | TelegramMessageObservationMode | (private) |
| 90 | type | TelegramCachedMessageObservation | (private) |
| 95 | type | TelegramEmbeddedReplyMessage | (private) |
| 106 | fn | getPersistedMessageCacheBuckets | (private) |
| 119 | type | PersistedTelegramMessageCacheValue | pub |
| 127 | type | TelegramMessageCachePersistentStore | (private) |
| 132 | fn | telegramMessageCacheKey | (private) |
| 142 | fn | telegramMessageCacheKeyPrefix | (private) |
| 151 | fn | resolveTelegramMessageCachePath | pub |
| 155 | fn | resolveTelegramMessageCacheScope | pub |
| 159 | fn | resolveReplyMessage | (private) |
| 164 | fn | resolveEmbeddedReplyMessage | (private) |
| 168 | fn | isTelegramMessageFromCurrentBot | pub |
| 176 | fn | resolveMessageBody | (private) |
| 188 | fn | resolveMediaType | (private) |
| 192 | fn | resolveMessageTimestamp | (private) |
| 202 | fn | normalizeMessageNode | (private) |
| 238 | fn | normalizeMessageNodes | (private) |
| 247 | fn | nodeThreadId | (private) |
| 249 | fn | visit | (private) |
| 276 | fn | parseSafeMessageId | (private) |
| 280 | fn | isTelegramMessageCacheSourceMessage | pub |
| 290 | fn | parsePersistedCacheValue | (private) |
| 318 | fn | trimMessages | (private) |
| 328 | fn | mergeTelegramSourceMessage | (private) |
| 342 | fn | mergeAuthoritativeTelegramSourceMessage | (private) |
| 356 | fn | mergeCachedMessageNode | (private) |
| 382 | fn | upsertCachedMessageNode | (private) |
| 395 | fn | resolveTelegramMessageCachePersistentScopeKey | pub |
| 399 | fn | resolveDefaultPersistentStore | (private) |
| 415 | fn | resolveMessageCacheBucket | (private) |
| 441 | fn | hydrateMessageCacheBucket | (private) |
| 482 | fn | persistCachedNode | (private) |
| 523 | fn | createTelegramMessageCache | pub |
| 559 | fn | listChatMessages | (private) |
| 682 | fn | compareCachedMessageNodes | (private) |
| 697 | fn | isTelegramSessionBoundaryCommandText | pub |
| 704 | fn | isSessionBoundaryCommandNode | (private) |
| 708 | fn | isAfterSessionBoundary | (private) |
| 731 | fn | normalizeSessionBoundaryTimestamp | (private) |
| 738 | fn | isAtOrAfterSessionBoundaryTimestamp | (private) |
| 750 | fn | resolveSessionBoundaryNode | (private) |
| 771 | fn | buildTelegramReplyChain | pub |
| 805 | fn | buildTelegramConversationContext | pub |
| 821 | fn | addNode | (private) |
| 842 | fn | addReplyTargetWindow | (private) |

## extensions/telegram/src/model-buttons.test.ts (544 lines)

_No symbols extracted._

## extensions/telegram/src/monitor.test.ts (1103 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | MonitorTelegramOpts | (private) |
| 8 | type | MockCtx | (private) |
| 113 | type | RunnerStub | (private) |
| 130 | fn | makeRecoverableFetchError | (private) |
| 138 | class | MockHttpError | (private) |
| 148 | fn | makeTaggedPollingFetchError | (private) |
| 158 | fn | makeTaggedPollingHttpError | (private) |
| 165 | fn | createAbortTask | (private) |
| 175 | fn | makeAbortRunner | (private) |
| 178 | fn | createSignal | (private) |
| 189 | fn | mockRunOnceAndAbort | (private) |
| 198 | fn | expectOffsetConfirmationSkipped | (private) |
| 211 | fn | runMonitorAndCaptureStartupOrder | (private) |
| 238 | fn | mockRunOnceWithStalledPollingRunner | (private) |
| 284 | fn | expectRecoverableRetryState | (private) |
| 299 | fn | latestMockCall | (private) |
| 307 | fn | monitorWithAutoAbort | (private) |
| 467 | type | RunOptions | (private) |
| 1091 | fn | toLintErrorObject | (private) |

## extensions/telegram/src/outbound-adapter.test.ts (1091 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | MockWithCalls | (private) |
| 28 | fn | callOptionsAt | (private) |
| 49 | fn | lastCallOptions | (private) |
| 57 | fn | callOptionsFromEnd | (private) |
| 946 | fn | proveText | (private) |
| 959 | fn | proveMedia | (private) |
| 971 | fn | provePayload | (private) |
| 982 | fn | proveReplyThreadSilent | (private) |
| 998 | fn | proveBatch | (private) |

## extensions/telegram/src/polling-session.test.ts (5101 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | resolveSpooledUpdateRetryDelayMs | (private) |
| 39 | fn | shouldDeadLetterRetryableSpooledUpdate | (private) |
| 47 | fn | waitForTelegramTestState | (private) |
| 122 | type | TelegramMessageProcessingResult | (private) |
| 124 | type | TelegramSpooledReplayDeferredParticipant | (private) |
| 126 | fn | claimSpooledUpdate | (private) |
| 133 | fn | createTelegramMessageDispatchReplayForgetError | (private) |
| 134 | type | ReplayGuard | (private) |
| 135 | type | ReplayClaim | (private) |
| 164 | type | TelegramApiMiddleware | (private) |
| 169 | type | DrainPendingDeliveriesCall | (private) |
| 181 | type | WorkerPollSuccessListener | (private) |
| 187 | type | WorkerPollErrorListener | (private) |
| 193 | type | WorkerMessageListener | (private) |
| 194 | type | AsyncVoidFn | (private) |
| 195 | type | MockCallSource | (private) |
| 196 | type | TelegramPollingTestDatabase | (private) |
| 203 | fn | installTelegramIngressQueueRuntime | (private) |
| 214 | fn | mockObjectArg | (private) |
| 231 | fn | logContains | (private) |
| 235 | fn | expectLogIncludes | (private) |
| 239 | fn | expectLogExcludes | (private) |
| 243 | fn | statusPatches | (private) |
| 253 | fn | expectPollingConnectedPatch | (private) |
| 261 | fn | makeBot | (private) |
| 272 | fn | installPollingStallWatchdogHarness | (private) |
| 366 | fn | expectTelegramBotTransportSequence | (private) |
| 372 | fn | expectDrainPendingDeliveriesCall | (private) |
| 380 | fn | makeTelegramTransport | (private) |
| 388 | fn | mockRestartAfterPollingError | (private) |
| 411 | fn | createPollingSessionWithTransportRestart | (private) |
| 419 | fn | createPollingSession | (private) |
| 450 | fn | mockBotCapturingApiMiddleware | (private) |
| 467 | fn | mockLongRunningPollingCycle | (private) |
| 483 | fn | waitForApiMiddleware | (private) |
| 496 | type | TestTelegramUpdate | (private) |
| 506 | fn | topicUpdate | (private) |
| 518 | fn | directUpdate | (private) |
| 528 | fn | waitForAbortSignal | (private) |
| 537 | fn | writeSpooledTestUpdates | (private) |
| 547 | fn | pendingUpdateIds | (private) |
| 551 | fn | claimedAtForUpdate | (private) |
| 561 | fn | installSpooledClaimRefreshHarness | (private) |
| 594 | fn | normalizeTelegramTestAccountId | (private) |
| 599 | fn | telegramTestQueueName | (private) |
| 603 | fn | openTelegramSpoolTestKysely | (private) |
| 613 | fn | failedUpdateIds | (private) |
| 627 | fn | failedUpdateReasons | (private) |
| 643 | fn | adoptClaimOwner | (private) |
| 665 | fn | withTempSpool | (private) |
| 675 | fn | createIdleIngressWorker | (private) |
| 695 | fn | startIsolatedIngressSession | (private) |
| 3731 | fn | createBot | (private) |
| 5088 | fn | toLintErrorObject | (private) |

## extensions/telegram/src/polling-session.ts (872 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | normalizeTelegramAccountId | (private) |
| 54 | type | TelegramBot | (private) |
| 56 | fn | waitForGracefulStop | (private) |
| 83 | type | TelegramPollingSessionOpts | (private) |
| 116 | class | TelegramPollingSession | pub |
| 383 | fn | abortMedia | (private) |
| 413 | fn | stopWorker | (private) |
| 444 | fn | endCycle | (private) |
| 531 | fn | stopOnAbort | (private) |
| 538 | fn | stopBot | (private) |
| 543 | fn | clearForceCycleTimer | (private) |
| 550 | fn | requestStopForRestart | (private) |
| 695 | fn | abortFetch | (private) |
| 709 | fn | clearForceCycleTimer | (private) |
| 716 | fn | stopRunner | (private) |
| 724 | fn | stopBot | (private) |
| 730 | fn | stopOnAbort | (private) |
| 738 | fn | requestStopForRestart | (private) |
| 850 | fn | isGetUpdatesConflict | (private) |

## extensions/telegram/src/rich-blocks-html-map.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | hasStrayContent | (private) |
| 54 | fn | mediaBlockFromElement | (private) |
| 96 | fn | countChildren | (private) |
| 100 | fn | captionFromFigcaption | (private) |
| 125 | fn | figureToBlock | (private) |
| 161 | fn | listToBlock | (private) |
| 200 | fn | tableCellFromElement | (private) |
| 223 | fn | tableColumnCount | (private) |
| 247 | fn | tableToBlock | (private) |
| 256 | fn | visitRows | (private) |
| 320 | fn | strictNumber | (private) |
| 327 | fn | mapToBlock | (private) |
| 353 | fn | collageToBlock | (private) |
| 384 | fn | richTextIsBlank | (private) |
| 401 | fn | htmlNodesToBlocks | (private) |
| 404 | fn | flushInline | (private) |
| 437 | fn | elementToBlock | (private) |
| 522 | type | TelegramHtmlIsland | (private) |
| 532 | fn | findTelegramHtmlIslands | pub |

## extensions/telegram/src/rich-blocks.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | InlineStyleKind | (private) |
| 40 | type | StructuralSegment | (private) |
| 46 | fn | isTelegramRichLinkHref | (private) |
| 50 | fn | resolveHeadingSize | (private) |
| 69 | fn | isInlineStyle | (private) |
| 79 | type | TelegramLinkAction | (private) |
| 84 | fn | resolveTelegramLinkAction | (private) |
| 110 | fn | collectTelegramLinkActions | (private) |
| 132 | fn | irRangeToRichText | (private) |
| 146 | fn | suppressed | (private) |
| 176 | type | Active | (private) |
| 189 | fn | pushNode | (private) |
| 193 | fn | openStyleNode | (private) |
| 200 | fn | openAnnotationNode | (private) |
| 207 | fn | openLinkNode | (private) |
| 304 | fn | applyInlineHtmlIslands | (private) |
| 321 | fn | pushParagraph | (private) |
| 345 | fn | splitParagraphs | (private) |
| 364 | fn | emitGapBlocks | (private) |
| 397 | fn | renderAsciiTableGrid | (private) |
| 406 | fn | renderRow | (private) |
| 412 | fn | cellToRichText | (private) |
| 426 | fn | renderTableBlock | (private) |
| 467 | fn | collectStructuralSegments | (private) |
| 503 | fn | emitSegments | (private) |
| 570 | fn | markdownToTelegramRichBlocks | pub |

## extensions/telegram/src/send.proxy.test.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | RichMessageParams | (private) |
| 128 | fn | prepareProxyFetch | (private) |
| 140 | fn | expectProxyClient | (private) |
| 568 | fn | toLintErrorObject | (private) |

## extensions/telegram/src/send.test.ts (4701 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | RichRawTextTestApi | (private) |
| 94 | fn | richTextForTest | (private) |
| 107 | fn | sendMessageTexts | (private) |
| 111 | fn | withRichRawTextTestApi | (private) |
| 146 | type | PersistedSentMessageForTest | (private) |
| 154 | fn | markdownTable | (private) |
| 164 | fn | countTelegramRichBlocks | (private) |
| 179 | fn | installTelegramStateRuntimeForTest | (private) |
| 258 | fn | expectChatNotFoundWithChatId | (private) |
| 278 | fn | expectTelegramMembershipErrorWithChatId | (private) |
| 301 | fn | mockLoadedMedia | (private) |
| 317 | fn | requireMockCall | (private) |
| 324 | fn | mockCall | (private) |
| 330 | fn | firstMockCall | (private) |
| 334 | fn | requireString | (private) |
| 341 | fn | requireRecord | (private) |
| 348 | fn | expectMediaSendCall | (private) |
| 362 | fn | createRichEntityInvalidError | (private) |
| 368 | fn | createRichContentRequiredError | (private) |
| 374 | fn | createHtmlParseError | (private) |
| 380 | fn | createQuoteNotFoundError | (private) |
| 386 | fn | expectPersistedTarget | (private) |
| 399 | fn | captureInfoLogs | (private) |
| 407 | fn | capturedLogText | (private) |

## extensions/telegram/src/send.ts (2748 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | type | TelegramApi | (private) |
| 107 | type | TelegramApiOverride | pub |
| 108 | type | TelegramSendMessageParams | (private) |
| 109 | type | TelegramSendPollParams | (private) |
| 110 | type | TelegramSendLocationParams | (private) |
| 111 | type | TelegramSendVenueParams | (private) |
| 112 | type | TelegramEditMessageTextParams | (private) |
| 113 | type | TelegramEditMessageCaptionParams | (private) |
| 114 | type | TelegramCreateForumTopicParams | (private) |
| 115 | type | TelegramThreadScopedParams | (private) |
| 124 | type | TelegramSendOpts | (private) |
| 167 | type | TelegramSendResult | (private) |
| 177 | type | TelegramLocationSendOpts | (private) |
| 195 | type | TelegramOutboundSuccessLogParams | (private) |
| 207 | type | TelegramReactionOpts | (private) |
| 218 | type | TelegramTypingOpts | (private) |
| 228 | fn | resolveTelegramMessageIdOrThrow | (private) |
| 240 | fn | splitTelegramPlainTextChunksForTests | pub |
| 244 | fn | logTelegramOutboundSendOk | (private) |
| 270 | fn | buildTelegramTextSendReceipt | (private) |
| 294 | fn | resolveAcceptedReplyToMessageId | (private) |
| 306 | fn | toAcceptedThreadScopedParams | (private) |
| 340 | type | CachedTelegramClientOptions | (private) |
| 347 | type | TelegramClientOptionsLease | (private) |
| 350 | type | ResolvedTelegramClientOptions | (private) |
| 357 | fn | resetTelegramClientOptionsCacheForTests | pub |
| 361 | fn | createTelegramHttpLogger | (private) |
| 375 | fn | shouldUseTelegramClientOptionsCache | (private) |
| 379 | fn | buildTelegramClientOptionsCacheKey | (private) |
| 394 | fn | closeCachedTelegramClientOptions | (private) |
| 411 | fn | leaseCachedTelegramClientOptions | (private) |
| 430 | fn | setCachedTelegramClientOptions | (private) |
| 451 | fn | resolveTelegramClientOptions | (private) |
| 505 | fn | resolveToken | (private) |
| 517 | fn | resolveChatId | (private) |
| 549 | fn | resolveAndPersistChatId | (private) |
| 572 | fn | normalizeMessageId | (private) |
| 589 | fn | isTelegramMessageNotModifiedError | (private) |
| 593 | fn | isTelegramMessageHasNoTextError | (private) |
| 597 | fn | isTelegramMessageDeleteNoopError | (private) |
| 601 | fn | withTelegramHtmlParseFallback | (private) |
| 624 | fn | withTelegramNativeQuoteFallback | (private) |
| 659 | type | TelegramApiContext | (private) |
| 666 | fn | resolveTelegramApiContext | (private) |
| 699 | fn | withTelegramApiContextLease | (private) |
| 706 | type | TelegramRequestWithDiag | (private) |
| 712 | fn | createTelegramRequestWithDiag | (private) |
| 738 | fn | runRequest | (private) |
| 754 | fn | wrapTelegramChatNotFoundError | (private) |
| 781 | fn | createRequestWithChatNotFound | (private) |
| 795 | fn | createTelegramNonIdempotentRequestWithDiag | (private) |
| 814 | fn | sendMessageTelegram | pub |
| 826 | fn | sendMessageTelegramWithContext | (private) |
| 843 | fn | reportDelivery | (private) |
| 854 | fn | recordDeliveredPromptContext | (private) |
| 892 | fn | buildThreadParams | (private) |
| 927 | fn | renderHtmlText | (private) |
| 932 | type | TelegramTextChunk | (private) |
| 937 | fn | sendTelegramTextChunk | (private) |
| 949 | fn | requestSendMessage | (private) |
| 966 | fn | requestPlain | (private) |
| 986 | fn | shouldIncludeReplyForChunk | (private) |
| 995 | fn | buildTextParams | (private) |
| 1012 | fn | buildRichTextParams | (private) |
| 1139 | fn | sendChunkedText | (private) |
| 1331 | fn | shouldSendTelegramImageAsPhoto | (private) |
| 1434 | fn | sendMedia | (private) |
| 1440 | fn | requestMedia | (private) |
| 1463 | fn | mediaSender | (private) |
| 1623 | fn | sendLocationTelegram | pub |
| 1635 | fn | sendLocationTelegramWithContext | (private) |
| 1755 | fn | sendTypingTelegram | pub |
| 1763 | fn | sendTypingTelegramWithContext | (private) |
| 1797 | fn | reactMessageTelegram | pub |
| 1810 | fn | reactMessageTelegramWithContext | (private) |
| 1858 | type | TelegramDeleteOpts | (private) |
| 1869 | fn | deleteMessageTelegram | pub |
| 1881 | fn | deleteMessageTelegramWithContext | (private) |
| 1924 | fn | pinMessageTelegram | pub |
| 1936 | fn | pinMessageTelegramWithContext | (private) |
| 1970 | fn | unpinMessageTelegram | pub |
| 1982 | fn | unpinMessageTelegramWithContext | (private) |
| 2016 | type | TelegramEditForumTopicOpts | (private) |
| 2021 | fn | editForumTopicTelegram | pub |
| 2056 | fn | editForumTopicTelegramWithContext | (private) |
| 2106 | fn | renameForumTopicTelegram | pub |
| 2124 | type | TelegramEditOpts | (private) |
| 2142 | type | TelegramEditReplyMarkupOpts | (private) |
| 2155 | fn | editMessageReplyMarkupTelegram | pub |
| 2168 | fn | editMessageReplyMarkupTelegramWithContext | (private) |
| 2210 | fn | editMessageTelegram | pub |
| 2223 | fn | editMessageTelegramWithContext | (private) |
| 2312 | fn | performTextEdit | (private) |
| 2372 | fn | performCaptionEdit | (private) |
| 2417 | fn | inferFilename | (private) |
| 2430 | type | TelegramStickerOpts | (private) |
| 2450 | fn | sendStickerTelegram | pub |
| 2466 | fn | sendStickerTelegramWithContext | (private) |
| 2525 | type | TelegramPollOpts | (private) |
| 2549 | fn | sendPollTelegram | pub |
| 2558 | fn | sendPollTelegramWithContext | (private) |
| 2645 | type | TelegramCreateForumTopicOpts | (private) |
| 2659 | type | TelegramCreateForumTopicResult | (private) |
| 2673 | fn | createForumTopicTelegram | pub |
| 2693 | fn | createForumTopicTelegramWithContext | (private) |

## extensions/telegram/src/state-migrations.test.ts (787 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | PersistedCacheEntry | (private) |
| 40 | fn | persistedCacheEntry | (private) |
| 772 | fn | stripTtl | (private) |
| 777 | fn | stripDispatchSourceKey | (private) |

## extensions/telegram/src/state-migrations.ts (671 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | type | TelegramLegacyMessageDispatchDedupeRecord | (private) |
| 83 | fn | resolveLegacySessionStorePath | (private) |
| 90 | fn | resolveMigrationStateDir | (private) |
| 99 | fn | parseLegacyMessageCacheJson | (private) |
| 108 | fn | readLegacyMessageCacheValues | (private) |
| 134 | fn | listTelegramLegacyMessageCacheEntries | (private) |
| 179 | fn | readLegacyMessageDispatchDedupeRecord | (private) |
| 197 | fn | remainingMessageDispatchDedupeTtlMs | (private) |
| 202 | fn | openTelegramLegacyMessageDispatchBucketStore | (private) |
| 210 | fn | readTelegramLegacyMessageDispatchBuckets | (private) |
| 257 | fn | removeTelegramLegacyMessageDispatchBuckets | (private) |
| 267 | fn | mapTelegramMessageDispatchDedupeImportEntries | (private) |
| 283 | fn | listTelegramLegacySidecarAccountIds | (private) |
| 307 | fn | detectTelegramMessageCacheLegacyStateMigration | (private) |
| 337 | fn | detectTelegramBotInfoCacheLegacyStateMigration | (private) |
| 367 | fn | detectTelegramUpdateOffsetLegacyStateMigration | (private) |
| 416 | fn | detectTelegramStickerCacheLegacyStateMigration | (private) |
| 442 | fn | detectTelegramSentMessageCacheLegacyStateMigration | (private) |
| 478 | fn | detectTelegramThreadBindingLegacyStateMigration | (private) |
| 510 | fn | detectTelegramMessageDispatchLegacyStateMigration | (private) |
| 591 | fn | topicNameCacheImportSource | (private) |
| 603 | fn | detectTelegramTopicNameCacheLegacyStateMigration | (private) |
| 656 | fn | detectTelegramLegacyStateMigrations | pub |

## extensions/telegram/src/thread-bindings.test.ts (630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | ThreadBindingStoreEntry | (private) |
| 52 | type | TelegramThreadBindingManagerParams | (private) |
| 56 | fn | createTelegramThreadBindingManager | (private) |
| 65 | fn | flushMicrotasks | (private) |
| 80 | fn | createThreadBindingStore | (private) |
| 87 | fn | installThreadBindingStore | (private) |
| 100 | fn | storedBindings | (private) |
| 593 | fn | onUnhandledRejection | (private) |

## extensions/telegram/src/thread-bindings.ts (1022 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | TelegramBindingTargetKind | (private) |
| 38 | type | TelegramThreadBindingRecord | (private) |
| 53 | type | StoredTelegramBindingState | (private) |
| 58 | type | TelegramThreadBindingStore | (private) |
| 60 | type | TelegramThreadBindingManager | (private) |
| 82 | type | TelegramThreadBindingsState | (private) |
| 95 | fn | getThreadBindingsState | (private) |
| 110 | fn | normalizeDurationMs | (private) |
| 117 | fn | resolveBindingKey | (private) |
| 121 | fn | resolveStoredBindingKey | (private) |
| 128 | fn | openThreadBindingStore | (private) |
| 135 | fn | toSessionBindingTargetKind | (private) |
| 139 | fn | toTelegramTargetKind | (private) |
| 143 | fn | toSessionBindingRecord | (private) |
| 184 | fn | fromSessionBindingInput | (private) |
| 242 | fn | resolveBindingsPath | (private) |
| 247 | fn | normalizeMetadataForStore | (private) |
| 261 | fn | summarizeLifecycleForLog | (private) |
| 276 | fn | sanitizeStoredBinding | (private) |
| 326 | fn | readLegacyBindingsFile | (private) |
| 353 | fn | loadBindingsFromStore | (private) |
| 389 | fn | persistBindingsToStore | (private) |
| 420 | fn | listBindingsForAccount | (private) |
| 426 | fn | enqueuePersistBindings | (private) |
| 444 | fn | persistBindingsSafely | (private) |
| 457 | fn | normalizeTimestampMs | (private) |
| 464 | fn | shouldExpireByIdle | (private) |
| 481 | fn | shouldExpireByMaxAge | (private) |
| 496 | fn | createTelegramThreadBindingManager | pub |
| 914 | fn | getTelegramThreadBindingManager | pub |
| 920 | fn | updateTelegramBindingsBySessionKey | (private) |
| 951 | fn | setTelegramThreadBindingIdleTimeoutBySessionKey | pub |
| 972 | fn | setTelegramThreadBindingMaxAgeBySessionKey | pub |
| 993 | fn | resetTelegramThreadBindingsForTests | pub |
| 1006 | fn | listTelegramLegacyThreadBindingEntries | pub |

## extensions/telegram/src/token.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | createTempDir | (private) |
| 31 | fn | createTokenFile | (private) |
| 38 | fn | createUnknownAccountConfig | (private) |
| 51 | fn | expectNoTokenForUnknownAccount | (private) |

## extensions/telegram/src/webhook.test.ts (1819 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | fn | waitForWebhookState | (private) |
| 71 | fn | yieldWebhookTask | (private) |
| 77 | fn | collectResponseBody | (private) |
| 93 | fn | createSingleSettlement | (private) |
| 132 | class | InputFile | (private) |
| 137 | class | GrammyError | (private) |
| 155 | fn | installTelegramIngressQueueRuntime | (private) |
| 166 | fn | requireWebhookSpoolDir | (private) |
| 173 | fn | resetTelegramWebhookMocks | (private) |
| 194 | type | MockCallReader | (private) |
| 196 | fn | requireRecord | (private) |
| 203 | fn | requireMockCall | (private) |
| 211 | fn | mockMessages | (private) |
| 218 | fn | expectMockMessageContains | (private) |
| 222 | fn | expectStatusCall | (private) |
| 259 | fn | fetchWithTimeout | (private) |
| 275 | fn | postWebhookJson | (private) |
| 295 | fn | postWebhookHeadersOnly | (private) |
| 347 | fn | createDeterministicRng | (private) |
| 355 | fn | postWebhookPayloadWithChunkPlan | (private) |
| 404 | fn | writeAll | (private) |
| 439 | fn | createNearLimitTelegramPayload | (private) |
| 455 | fn | sha256 | (private) |
| 459 | type | StartWebhookOptions | (private) |
| 464 | type | StartedWebhook | (private) |
| 466 | fn | getServerPort | (private) |
| 474 | fn | webhookUrl | (private) |
| 478 | fn | withStartedWebhook | (private) |
| 498 | fn | expectSingleNearLimitUpdate | (private) |
| 510 | fn | runNearLimitPayloadTestAndExpectUpdate | (private) |
| 1656 | fn | delayedHandler | (private) |

## extensions/telegram/src/webhook.ts (640 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | listenHttpServer | (private) |
| 65 | fn | onError | (private) |
| 77 | fn | waitForWebhookIngressStop | (private) |
| 95 | fn | resolveWebhookPublicUrl | (private) |
| 117 | fn | initializeTelegramWebhookBotOnce | (private) |
| 130 | fn | initializeTelegramWebhookBot | (private) |
| 162 | fn | resolveSingleHeaderValue | (private) |
| 172 | fn | hasValidTelegramWebhookSecret | (private) |
| 179 | fn | parseIpLiteral | (private) |
| 202 | fn | isTrustedProxyAddress | (private) |
| 242 | fn | resolveForwardedClientIp | (private) |
| 265 | fn | resolveTelegramWebhookClientIp | (private) |
| 290 | fn | resolveTelegramWebhookRateLimitKey | (private) |
| 298 | fn | resolveWebhookSpooledUpdateLaneKey | (private) |
| 304 | fn | startTelegramWebhook | pub |
| 388 | fn | log | (private) |
| 390 | fn | requestWebhookSpoolDrain | (private) |
| 391 | fn | startWebhookSpoolDrain | (private) |
| 417 | fn | respondText | (private) |
| 532 | fn | shutdown | (private) |
