# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 39 large files in this module.

## ui/src/pages/chat/chat-command-executor.test.ts (1744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | createSessionCapability | (private) |
| 42 | fn | executeSlashCommand | (private) |
| 55 | fn | row | (private) |
| 65 | fn | requireRequestCall | (private) |
| 76 | fn | expectNoRequestCall | (private) |

## ui/src/pages/chat/chat-command-executor.ts (792 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | SlashCommandResult | (private) |
| 65 | type | SlashCommandContext | (private) |
| 75 | fn | normalizeVerboseLevel | (private) |
| 92 | fn | isSessionDefaultDirectiveValue | (private) |
| 100 | fn | executeSlashCommand | pub |
| 145 | fn | executeHelp | (private) |
| 164 | fn | executeCompact | (private) |
| 198 | fn | executeModel | (private) |
| 268 | fn | executeThink | (private) |
| 333 | fn | executeVerbose | (private) |
| 375 | fn | executeFast | (private) |
| 436 | fn | executeUsage | (private) |
| 483 | fn | executeAgents | (private) |
| 504 | fn | normalizeSessionKey | (private) |
| 508 | fn | selectedAgentListScope | (private) |
| 517 | fn | resolveSelectedAgentId | (private) |
| 531 | fn | resolveEquivalentSessionKeys | (private) |
| 554 | fn | formatDirectiveOptions | (private) |
| 558 | fn | listSessions | (private) |
| 569 | fn | loadCurrentSession | (private) |
| 576 | fn | loadCurrentSessionState | (private) |
| 587 | fn | resolveCommandSessionState | (private) |
| 611 | fn | resolveCurrentSession | (private) |
| 628 | fn | loadThinkingCommandState | (private) |
| 645 | fn | loadModelCatalog | (private) |
| 662 | fn | resolveSteerTarget | (private) |
| 676 | fn | isActiveSteerSession | (private) |
| 680 | type | SteerChatSendAckStatus | (private) |
| 682 | fn | normalizeSteerChatSendAckStatus | (private) |
| 692 | fn | formatTerminalSteerAckContent | (private) |
| 702 | fn | formatTerminalRedirectAckContent | (private) |
| 713 | fn | executeSteer | (private) |
| 760 | fn | executeRedirect | (private) |

## ui/src/pages/chat/chat-composer.test.ts (989 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ComposerProps | (private) |
| 18 | fn | iconMarkup | (private) |
| 24 | fn | props | (private) |
| 47 | fn | renderComposer | (private) |
| 54 | fn | questionPrompt | (private) |
| 80 | fn | button | (private) |
| 88 | class | DictationAudioContext | (private) |
| 116 | fn | dictationPointerDown | (private) |
| 225 | fn | draw | (private) |
| 285 | fn | draw | (private) |
| 452 | fn | draw | (private) |
| 627 | fn | draw | (private) |

## ui/src/pages/chat/chat-gateway.test.ts (3947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | createState | (private) |
| 38 | fn | createDeferred | (private) |
| 51 | fn | requireRecord | (private) |
| 58 | fn | expectTextChatMessage | (private) |
| 64 | fn | createActiveStreamingState | (private) |
| 73 | fn | trackChatMessagesAssignments | (private) |
| 95 | fn | createOtherRunSilentFinalPayload | (private) |
| 107 | fn | createOtherRunNoReplyFinalPayload | (private) |

## ui/src/pages/chat/chat-history.ts (1404 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 97 | type | ChatHistoryRequestOwnership | (private) |
| 105 | fn | beginChatHistoryRequest | (private) |
| 124 | fn | ownsChatHistoryRequest | (private) |
| 133 | fn | shouldApplyChatHistoryResult | (private) |
| 145 | fn | isSilentReplyStream | pub |
| 150 | fn | isAssistantSilentReply | (private) |
| 167 | fn | isSyntheticTranscriptRepairToolResult | (private) |
| 180 | fn | isTextOnlyContent | (private) |
| 207 | fn | isEmptyUserTextOnlyMessage | (private) |
| 229 | fn | isHeartbeatAckStream | (private) |
| 233 | fn | isHiddenAssistantStreamText | pub |
| 237 | fn | shouldHideAssistantChatMessage | pub |
| 241 | fn | shouldHideHistoryMessage | (private) |
| 249 | fn | materializeVisibleAssistantStreamMessages | pub |
| 266 | fn | chatPersistCommentaryEnabled | (private) |
| 270 | fn | historyHasSameOrNewerDisplayMessage | (private) |
| 288 | fn | collectLateOptimisticTailMessages | (private) |
| 316 | type | ChatState | pub |
| 368 | type | ChatAgentsListSnapshot | (private) |
| 372 | type | ChatSessionMessageSubscriptionState | (private) |
| 381 | type | ChatHistoryResult | pub |
| 405 | fn | reconcileHistoryPlanStatus | (private) |
| 433 | fn | resolveChatHistoryPagination | pub |
| 461 | fn | resolveChatHistorySessionId | (private) |
| 470 | fn | retainedRawHistoryStart | (private) |
| 484 | fn | reconcileLoadedHistoryTail | (private) |
| 531 | type | ChatMetadataResult | pub |
| 535 | type | ChatEventPayload | pub |
| 548 | fn | setChatError | (private) |
| 553 | fn | chatScopedEventAgentScopeMatches | (private) |
| 569 | fn | chatScopedEventSessionMatches | pub |
| 584 | fn | normalizeSubscriptionKey | (private) |
| 589 | fn | resolveSelectedGlobalAliasAgentId | (private) |
| 600 | fn | resolveSelectedGlobalAgentId | (private) |
| 608 | fn | resolveSelectedSessionMessageSubscriptionAgentId | (private) |
| 618 | fn | beginSelectedSessionMessageSubscriptionSync | (private) |
| 627 | fn | isCurrentSelectedSessionMessageSubscriptionSync | (private) |
| 646 | fn | unsubscribeSelectedSessionMessageBestEffort | (private) |
| 661 | fn | syncSelectedSessionMessageSubscription | pub |
| 696 | fn | isCurrent | (private) |
| 749 | type | InFlightChatHistoryRequest | (private) |
| 757 | type | LoadChatHistoryOptions | (private) |
| 763 | fn | recordChatHistoryTiming | (private) |
| 783 | fn | replaceCachedChatMessages | (private) |
| 799 | type | ClearChatHistoryState | (private) |
| 805 | type | ClearChatHistoryResult | (private) |
| 807 | type | RewindChatHistoryState | (private) |
| 813 | type | SwitchChatHistoryBranchState | (private) |
| 818 | fn | hasAbortableChatSessionRun | (private) |
| 829 | fn | clearCachedChatMessagesForSession | (private) |
| 840 | fn | clearChatHistory | pub |
| 925 | fn | rewindChatHistory | pub |
| 964 | fn | switchChatHistoryBranch | pub |
| 994 | fn | loadChatBranches | pub |
| 1045 | fn | loadChatHistory | pub |
| 1099 | fn | loadOlderChatHistoryPage | pub |
| 1135 | fn | applyChatAgentsList | pub |
| 1159 | fn | loadChatHistoryUncached | (private) |

## ui/src/pages/chat/chat-page.test.ts (677 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | RenderedPane | (private) |
| 33 | type | RenderedDivider | (private) |
| 35 | fn | createSplitLayout | (private) |
| 44 | fn | itemAt | (private) |
| 48 | fn | setLayout | (private) |
| 52 | fn | getLayout | (private) |
| 56 | fn | setNarrow | (private) |
| 61 | fn | getRouteDraftForActivePane | (private) |
| 69 | fn | applySessionDrop | (private) |
| 77 | fn | handleDrop | (private) |
| 81 | fn | handleDragOver | (private) |
| 85 | fn | getDropIndicator | (private) |
| 93 | fn | setNavigationContext | (private) |
| 104 | fn | stubMatchMedia | (private) |
| 380 | fn | notify | (private) |
| 395 | fn | paneTitles | (private) |
| 430 | fn | notifyFirst | (private) |
| 431 | fn | notifySecond | (private) |

## ui/src/pages/chat/chat-page.ts (719 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | splitWeight | (private) |
| 46 | fn | splitRatio | (private) |
| 52 | type | ChatRouteData | (private) |
| 59 | type | DropIndicator | (private) |
| 60 | type | ChatPaneElement | (private) |
| 62 | class | ChatPage | pub |

## ui/src/pages/chat/chat-pane-history.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | TestChatPane | (private) |
| 31 | fn | createDeferred | (private) |
| 39 | fn | createSessionContext | (private) |
| 56 | fn | createTestChatPane | (private) |
| 98 | fn | nativeHistoryMessage | (private) |
| 106 | fn | nativeHistorySeq | (private) |
| 145 | class | FakeIntersectionObserver | (private) |
| 175 | class | FakeIntersectionObserver | (private) |
| 209 | class | FakeIntersectionObserver | (private) |
| 252 | class | FakeIntersectionObserver | (private) |

## ui/src/pages/chat/chat-pane.test.ts (973 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | createDeferred | (private) |
| 53 | fn | dispatchSidebarShortcut | (private) |
| 64 | fn | createInitializationContext | (private) |
| 92 | fn | nativeHistoryMessage | (private) |
| 597 | fn | listener | (private) |
| 887 | class | TestTouchEvent | (private) |
| 897 | fn | touchEvent | (private) |

## ui/src/pages/chat/chat-pane.ts (3394 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 229 | type | ChatPageContext | (private) |
| 230 | type | PaneSessionChangeOptions | (private) |
| 231 | type | VisibleBoardDock | (private) |
| 232 | type | ResolvedBoardView | (private) |
| 259 | fn | catalogRawString | (private) |
| 272 | fn | catalogRawResult | (private) |
| 284 | fn | nativeHistoryMessageIdentity | (private) |
| 307 | type | ChatPaneConnectionScope | (private) |
| 345 | fn | keyboardEventPathMatches | (private) |
| 351 | class | ChatPane | (private) |
| 686 | fn | isCurrent | (private) |
| 731 | fn | isCurrent | (private) |
| 925 | fn | scheduleHistoryScroll | (private) |
| 1054 | fn | isCurrent | (private) |
| 1845 | fn | isCurrent | (private) |
| 2143 | fn | handleBrowserAnnotation | (private) |
| 2151 | fn | handleWidgetPrompt | (private) |
| 2464 | fn | clientIsCurrent | (private) |
| 2469 | fn | finishStartup | (private) |
| 3390 | interface | HTMLElementTagNameMap | (private) |

## ui/src/pages/chat/chat-queue.ts (747 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ChatQueueStoreHost | (private) |
| 34 | type | ChatQueueSessionHost | (private) |
| 39 | type | ChatQueueScopedSessionHost | pub |
| 52 | fn | markLocalRecoveryItem | pub |
| 58 | fn | clearLocalRecoveryItem | (private) |
| 66 | fn | isVolatileQueuedMessage | pub |
| 70 | fn | markVolatileQueuedMessage | pub |
| 76 | fn | clearVolatileQueuedMessage | (private) |
| 84 | fn | queueProjectionGatewayKey | (private) |
| 88 | fn | transientQueueProjectionKey | (private) |
| 96 | fn | transientQueueProjection | (private) |
| 104 | fn | isProcessLiveQueueProjection | (private) |
| 108 | fn | updateProcessLiveQueueProjection | (private) |
| 121 | fn | storedOutboxContainingItem | (private) |
| 128 | fn | sameStoredOutboxScope | (private) |
| 132 | fn | outboxAfterMutation | (private) |
| 142 | fn | syncChatQueueFromStoredOutbox | pub |
| 221 | fn | syncVisibleChatQueueProjection | pub |
| 233 | fn | publishStoredOutbox | (private) |
| 250 | fn | storedOutboxForProjection | (private) |
| 262 | fn | setTransientQueuedMessageProjection | pub |
| 279 | fn | clearTransientQueuedMessageProjection | pub |
| 292 | fn | subscribeChatOutboxProjection | pub |
| 307 | fn | enqueueChatMessage | pub |
| 336 | fn | enqueuePendingRunMessage | pub |
| 362 | fn | readChatQueueForScope | pub |
| 373 | fn | replacePendingQueuedMessageProjection | pub |
| 396 | fn | writeChatQueueForScope | pub |
| 418 | fn | locateChatQueueItem | (private) |
| 433 | fn | writeLocatedChatQueue | (private) |
| 455 | fn | readQueuedMessageById | pub |
| 467 | fn | updateQueuedMessage | pub |
| 475 | fn | updateVolatileQueuedMessage | pub |
| 496 | fn | updateQueuedMessageForSession | pub |
| 551 | fn | admitQueuedMessageForSession | pub |
| 572 | fn | removeQueuedMessageWithoutReleasing | pub |
| 646 | fn | removeVisibleOrScopedQueuedMessageWithoutReleasing | pub |
| 657 | fn | excludeComposerAttachments | pub |
| 668 | fn | removeQueuedMessage | pub |
| 675 | fn | removeDeliveredQueuedChatSendForRun | pub |
| 696 | fn | readDeliveredQueuedChatSendForRun | pub |
| 709 | fn | clearPendingQueueItemsForRun | pub |
| 723 | fn | markQueuedChatSendsWaitingForReconnect | pub |

## ui/src/pages/chat/chat-responsive.browser.test.ts (2099 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | ControlRect | (private) |
| 52 | type | ChatFixtureOptions | (private) |
| 60 | fn | expectFiniteRect | (private) |
| 66 | fn | getBoundingBox | (private) |
| 75 | fn | expectControlRect | (private) |
| 83 | fn | readUiCss | (private) |
| 98 | fn | iconSvg | (private) |
| 102 | fn | activityAlignmentHtml | (private) |
| 144 | fn | chatFooterActionsHtml | (private) |
| 157 | fn | chatControlsHtml | (private) |
| 191 | fn | composerControlsHtml | (private) |
| 222 | fn | chatHeaderControlsHtml | (private) |
| 254 | fn | chatHtml | (private) |
| 425 | fn | openFixture | (private) |
| 438 | fn | openBrowserPage | (private) |
| 446 | fn | closeBrowserPage | (private) |
| 450 | fn | waitForLayoutSettled | (private) |
| 461 | fn | getRect | (private) |
| 477 | fn | getTextContentRect | (private) |
| 496 | fn | rectsOverlap | (private) |
| 508 | fn | openHeaderFixture | (private) |
| 521 | fn | expectNoHorizontalOverflow | (private) |
| 744 | fn | rectFor | (private) |
| 842 | fn | styleFor | (private) |
| 912 | fn | rectFor | (private) |
| 1064 | fn | rectFor | (private) |
| 1191 | fn | rectFor | (private) |
| 1323 | fn | rectFor | (private) |
| 1575 | fn | rectFor | (private) |
| 1675 | fn | rectFor | (private) |
| 1719 | fn | rectFor | (private) |
| 1767 | fn | rectFor | (private) |
| 1810 | fn | rectFor | (private) |

## ui/src/pages/chat/chat-send.test.ts (8670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | ExecuteSlashCommand | (private) |
| 44 | type | TestChatHost | (private) |
| 59 | fn | requireChatMessageCache | (private) |
| 66 | fn | cacheChatMessages | (private) |
| 88 | fn | registerChatAttachmentPayload | (private) |
| 132 | fn | loadChatHelpers | (private) |
| 157 | fn | navigateChatInputHistory | (private) |
| 172 | fn | requestUrl | (private) |
| 182 | type | MockCallSource | (private) |
| 188 | fn | requireRecord | (private) |
| 195 | fn | mockArg | (private) |
| 203 | fn | findRequestPayload | (private) |
| 211 | fn | eventPayloads | (private) |
| 226 | fn | admitHostQueueItems | (private) |
| 240 | fn | queueScopeKey | (private) |
| 244 | fn | fetchInit | (private) |
| 248 | fn | fetchUrl | (private) |
| 256 | fn | createPendingSettingsSessionCapability | (private) |
| 281 | fn | makeHost | (private) |
| 393 | fn | createSessionsResult | (private) |
| 403 | fn | row | (private) |
| 412 | fn | idleChatHistory | (private) |
| 419 | fn | createDeferred | (private) |
| 434 | fn | pendingPromise | (private) |
| 438 | fn | raceWithMacrotask | (private) |
| 447 | fn | completesWithin | (private) |
| 827 | class | extends | (private) |
| 868 | class | extends | (private) |
| 922 | class | extends | (private) |
| 1030 | class | extends | (private) |
| 1089 | class | extends | (private) |
| 3914 | fn | stopPeer | (private) |
| 4345 | class | extends | (private) |
| 7722 | fn | userTurns | (private) |
| 8064 | class | extends | (private) |
| 8281 | fn | stopLatePeer | (private) |
| 8431 | class | extends | (private) |
| 8487 | class | extends | (private) |

## ui/src/pages/chat/chat-send.ts (2695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 118 | type | ChatHost | pub |
| 163 | type | ChatAgentsListSnapshot | (private) |
| 167 | fn | setChatError | (private) |
| 175 | fn | sendResetSlashCommand | (private) |
| 188 | type | AcceptedChatSendAck | (private) |
| 189 | type | TerminalFailureChatSendAck | (private) |
| 191 | fn | isAcceptedChatSendAck | (private) |
| 195 | fn | isTerminalFailureChatSendAck | (private) |
| 199 | fn | formatTerminalChatSendAckError | (private) |
| 218 | type | ChatSendOptions | (private) |
| 233 | fn | normalizeAckTimingValue | (private) |
| 237 | fn | normalizeChatSendAckServerTiming | (private) |
| 253 | fn | normalizeChatSendAck | (private) |
| 272 | fn | requestChatSend | (private) |
| 308 | fn | resolveChatSendRouting | (private) |
| 336 | fn | requestSkillWorkshopRevisionChatSend | (private) |
| 363 | fn | appendUserChatMessage | (private) |
| 378 | fn | sendChatMessageWithGeneratedRunId | (private) |
| 416 | fn | sendDetachedChatMessage | (private) |
| 425 | fn | isChatResetCommand | (private) |
| 439 | fn | confirmChatResetCommand | (private) |
| 449 | fn | isBtwCommand | (private) |
| 453 | fn | enqueuePendingSendMessage | (private) |
| 497 | fn | isRecoverableChatSendError | (private) |
| 504 | fn | isProvablyPreTransportChatSendError | (private) |
| 512 | fn | restoreComposerAfterFailedSend | (private) |
| 527 | type | PendingComposerSnapshot | (private) |
| 532 | fn | pendingComposerRestorePlan | (private) |
| 548 | fn | cancelPendingSendBeforeRequest | (private) |
| 577 | type | QueuedChatSendResult | (private) |
| 578 | type | QueuedChatStorageMode | (private) |
| 579 | type | QueuedChatSendOptions | (private) |
| 586 | fn | reconnectSafeQueuedSendState | (private) |
| 592 | fn | updateQueuedSendItem | (private) |
| 604 | fn | canSendVolatileQueueItem | (private) |
| 634 | fn | beginScopedChatSending | (private) |
| 642 | fn | finishScopedChatSending | (private) |
| 650 | fn | retryableGatewayDelayMs | (private) |
| 658 | fn | ensureQueuedSendState | (private) |
| 680 | fn | sendQueuedChatMessage | (private) |
| 832 | fn | isVisibleSession | (private) |
| 1089 | fn | sendChatMessageNow | (private) |
| 1194 | fn | attachmentSubmitSignature | (private) |
| 1206 | fn | chatSubmitKey | (private) |
| 1223 | fn | withChatSubmitGuard | (private) |
| 1247 | fn | waitForPendingChatSettings | (private) |
| 1264 | fn | clearSubmittedComposerState | (private) |
| 1298 | fn | snapshotChatAttachments | (private) |
| 1308 | fn | sendDetachedCommandMessage | (private) |
| 1344 | fn | sendQueuedChatMessageWithQueueMode | (private) |
| 1512 | fn | steerQueuedChatMessage | pub |
| 1516 | type | StoredChatOutboxDrainResult | (private) |
| 1517 | type | StoredChatOutboxDrainLane | (private) |
| 1534 | fn | storedChatOutboxDrainLanesForClient | (private) |
| 1546 | fn | storedChatOutboxRetryTimersForClient | (private) |
| 1558 | fn | cancelStoredChatOutboxRetry | (private) |
| 1568 | fn | scheduleStoredChatOutboxRetry | (private) |
| 1592 | fn | sameStoredChatOutboxScope | (private) |
| 1599 | fn | readStoredChatOutbox | (private) |
| 1606 | fn | nextAutomaticStoredChatQueueItem | (private) |
| 1620 | fn | sameQueuedDeliveryVersion | (private) |
| 1631 | fn | normalizeQueuedUserText | (private) |
| 1635 | fn | historyMessageMatchesQueuedUserText | (private) |
| 1652 | fn | historyContainsQueuedSend | (private) |
| 1680 | fn | localTranscriptContainsQueuedSend | (private) |
| 1691 | fn | historySessionIsIdle | (private) |
| 1699 | fn | removeHistoryProvenQueuedSend | (private) |
| 1725 | fn | reconcileStoredChatOutboxHead | (private) |
| 1837 | fn | drainStoredChatOutbox | (private) |
| 1880 | fn | convertResetToMessage | (private) |
| 1945 | fn | commandScopeIsCurrent | (private) |
| 2094 | fn | scheduleStoredChatOutboxDrain | (private) |
| 2162 | fn | resumeStoredChatOutboxes | pub |
| 2171 | fn | flushChatQueue | (private) |
| 2180 | fn | retryReconnectableQueuedChatSends | pub |
| 2184 | fn | retryQueuedChatMessage | pub |
| 2271 | fn | handleSendChat | pub |
| 2429 | fn | dispatchLocalCommand | (private) |
| 2674 | fn | prependReplyQuote | (private) |
| 2690 | fn | escapeMarkdownInline | (private) |

## ui/src/pages/chat/chat-state.test.ts (1437 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | lifecycleEvent | (private) |
| 350 | fn | createRouteState | (private) |

## ui/src/pages/chat/chat-state.ts (1965 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 160 | type | ChatPageElement | (private) |
| 164 | type | ChatComposerMemoryFallback | (private) |
| 174 | type | ChatComposerRouteResetResult | (private) |
| 179 | type | ChatPageHost | pub |
| 301 | type | PendingCreatedSessionComposer | (private) |
| 307 | fn | canCreateChatSession | pub |
| 322 | fn | saveChatQueueForSession | (private) |
| 341 | fn | restoreChatQueueForSession | (private) |
| 346 | fn | saveChatMessagesForSession | (private) |
| 359 | fn | restoreChatMessagesForSession | (private) |
| 372 | fn | resolveChatComposerMemoryFallback | (private) |
| 461 | fn | saveRouteSessionSettings | pub |
| 474 | fn | resetChatStateForRouteSession | pub |
| 589 | fn | retryChatComposerMemoryFallback | pub |
| 622 | fn | refreshRouteSessionOptions | pub |
| 626 | fn | resolveChatAgentId | pub |
| 636 | fn | resolveChatAvatarUrl | pub |
| 676 | type | ChatMetadataApplyResult | (private) |
| 681 | type | ChatRefreshOptions | (private) |
| 687 | type | ChatStartupMetadataHandler | (private) |
| 693 | fn | scheduleChatMetadataRefresh | (private) |
| 703 | fn | refreshChatCommands | pub |
| 710 | fn | applyChatMetadataResult | (private) |
| 728 | fn | ownsChatMetadataRequest | (private) |
| 742 | fn | refreshCompatibilityModelCatalog | (private) |
| 754 | fn | refreshCompatibilityCommands | (private) |
| 767 | fn | canUseCompatibilityModelCatalog | (private) |
| 774 | fn | refreshChatMetadata | pub |
| 845 | fn | refreshChatModelAuthStatus | pub |
| 866 | fn | refreshChat | (private) |
| 875 | fn | requestUpdate | (private) |
| 955 | fn | refreshPageChat | pub |
| 985 | fn | ownsScheduledMetadataRefresh | (private) |
| 1014 | fn | sessionMessageMatchesChat | (private) |
| 1021 | fn | selectedGlobalEventAgentId | (private) |
| 1025 | fn | globalSessionEventMatchesChat | (private) |
| 1040 | fn | reconcileSessionEvent | (private) |
| 1056 | fn | finishSessionMessageRunReconcile | (private) |
| 1082 | fn | handleSessionMessageEvent | (private) |
| 1130 | fn | replayPendingSessionMessageReload | (private) |
| 1149 | fn | handleSessionsChangedEvent | (private) |
| 1181 | fn | loadPageAssistantIdentity | (private) |
| 1215 | fn | createPageState | pub |
| 1431 | fn | hasVisibleFinalAssistantReply | (private) |
| 1462 | fn | handlePageGatewayEvent | pub |
| 1526 | fn | rememberDeliveredQueuedUserTurn | (private) |
| 1567 | type | ChatPageUpdateMode | (private) |
| 1569 | fn | cancelChatStreamRenderFrame | (private) |
| 1580 | fn | requestChatPageUpdate | (private) |
| 1605 | type | ChatRenderLifecycleScope | (private) |
| 1610 | class | ChatStateController | pub |
| 1742 | fn | complete | (private) |
| 1750 | fn | cancel | (private) |

## ui/src/pages/chat/chat-thread.test.ts (2941 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | CachedChatItemsProps | (private) |
| 31 | type | WorkGroupItem | (private) |
| 39 | fn | createProps | (private) |
| 54 | fn | messageGroups | (private) |
| 58 | fn | firstMessageContent | (private) |
| 63 | fn | requireRecord | (private) |
| 70 | fn | requireGroup | (private) |
| 76 | fn | groupAt | (private) |
| 80 | fn | messageAt | (private) |
| 84 | fn | messageRecord | (private) |
| 89 | fn | collapsedItems | (private) |
| 94 | fn | requireWorkGroup | (private) |
| 100 | fn | toolResult | (private) |
| 557 | fn | hasReadingIndicator | (private) |
| 559 | fn | liveTool | (private) |
| 2750 | fn | canvasBlocksIn | (private) |
| 2754 | fn | isCanvasBlock | (private) |
| 2763 | fn | createAssistantCanvasBlock | (private) |
| 2779 | fn | mcpAppResult | (private) |
| 2803 | fn | mcpAppLiveResult | (private) |
| 2825 | fn | failedTool | (private) |
| 2834 | fn | userMsg | (private) |
| 2837 | fn | assistantReply | (private) |
| 2840 | fn | toolGroups | (private) |

## ui/src/pages/chat/chat-thread.ts (2106 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | BuildChatItemsProps | (private) |
| 79 | type | CachedChatItems | (private) |
| 86 | type | RenderChatItem | (private) |
| 87 | type | StreamRunRenderItem | (private) |
| 103 | fn | resetChatThreadState | pub |
| 115 | fn | appendCanvasBlockToAssistantMessage | (private) |
| 159 | fn | safeNormalizeMessage | (private) |
| 170 | fn | messageMatchesSearchQuery | (private) |
| 179 | fn | turnHasMatchingAssistant | (private) |
| 201 | type | ChatMessagePreview | (private) |
| 207 | fn | extractChatMessagePreview | (private) |
| 237 | fn | canvasPreviewBaseIdentity | (private) |
| 243 | fn | createCanvasAssistantMessage | (private) |
| 258 | fn | transcriptPositionTimestamp | (private) |
| 282 | fn | findNearestAssistantMessageIndex | (private) |
| 362 | fn | findCanvasInsertionIndex | (private) |
| 384 | fn | groupMessages | (private) |
| 446 | fn | mergeToolCallResultPair | (private) |
| 577 | fn | resolveMessageToolUseId | (private) |
| 587 | fn | resolveToolBlockId | (private) |
| 594 | fn | unresolvedToolCallIds | (private) |
| 626 | fn | isToolTimelineItem | (private) |
| 634 | fn | splitBundledToolResultItems | (private) |
| 666 | fn | resolveToolResultCallId | (private) |
| 694 | fn | refreshOpenCallIds | (private) |
| 713 | fn | coalesceToolActivityMessages | (private) |
| 773 | fn | assistantGroupHasReplyText | (private) |
| 782 | fn | assistantGroupIsForwardedBoundary | (private) |
| 789 | fn | groupStartsProjectedTurnBoundary | (private) |
| 793 | fn | annotateToolTurnOutcome | (private) |
| 827 | fn | isPendingSendMessage | (private) |
| 831 | fn | sourceMessageId | (private) |
| 848 | fn | persistedMessageEntryId | pub |
| 852 | fn | transcriptMessageSourceKey | (private) |
| 869 | fn | messageProjectionDigest | (private) |
| 894 | fn | buildMessageKeys | (private) |
| 915 | fn | collapseDuplicateSourceKey | (private) |
| 931 | fn | prefersNativeChatSurface | (private) |
| 940 | fn | escapeRegExp | (private) |
| 944 | fn | stripSenderLabelPrefix | (private) |
| 952 | fn | sourceDuplicateDisplayParts | (private) |
| 983 | fn | isSameSourceRelayNativeDuplicate | (private) |
| 1000 | fn | collapseDuplicateDisplaySignature | (private) |
| 1031 | fn | collapseSequentialDuplicateMessages | (private) |
| 1075 | fn | hasRenderableNormalizedMessage | (private) |
| 1085 | fn | sanitizeStreamText | (private) |
| 1090 | fn | queuedSendThreadMessage | (private) |
| 1113 | fn | rawMessageTimestamp | (private) |
| 1118 | fn | chatItemTimestamp | (private) |
| 1135 | fn | timestampAfterVisibleItems | (private) |
| 1148 | fn | sortChatItemsByVisibleTime | (private) |
| 1198 | fn | buildChatItems | (private) |
| 1282 | fn | appendQueuedSend | (private) |
| 1537 | fn | sameMessageGroup | (private) |
| 1559 | fn | sameChatItem | (private) |
| 1603 | fn | stabilizeChatItems | (private) |
| 1685 | fn | sameChatItemsStructuralInput | (private) |
| 1710 | fn | sameChatItemsInput | (private) |
| 1714 | fn | sameChatItemsInputExceptStream | (private) |
| 1723 | fn | accumulatedIndexedStreamText | (private) |
| 1737 | fn | updateCachedLiveStream | (private) |
| 1759 | fn | findLiveStreamIndex | (private) |
| 1763 | fn | buildCachedChatItems | pub |
| 1799 | fn | coalesceStreamRuns | pub |
| 1806 | fn | flush | (private) |
| 1826 | type | WorkGroupRenderItem | (private) |
| 1834 | type | TurnRenderItem | (private) |
| 1836 | fn | isTurnBoundaryGroup | (private) |
| 1850 | fn | isCollapsibleWorkGroup | (private) |
| 1862 | fn | assistantGroupHasVisibleReplyContent | (private) |
| 1881 | fn | isFinalReplyGroup | (private) |
| 1889 | fn | workGroupHasError | (private) |
| 1906 | fn | collapseCompletedTurnWork | pub |
| 1993 | fn | deletedChatItemsSignature | pub |
| 2004 | fn | stableBooleanMapSignature | pub |
| 2014 | fn | getExpandedToolCards | pub |
| 2018 | fn | getInitializedToolCards | (private) |
| 2022 | fn | syncToolCardExpansionState | pub |
| 2066 | fn | messageKey | (private) |

## ui/src/pages/chat/chat-view.test.ts (5657 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | registerChatAttachmentPayload | (private) |
| 62 | fn | refreshVisibleToolsEffectiveForCurrentSessionForTest | (private) |
| 195 | type | ChatHeaderTestState | (private) |
| 236 | fn | requireFirstAttachmentsChange | (private) |
| 250 | fn | renderStreamGroupMock | (private) |
| 262 | fn | renderWorkGroupSummaryMock | (private) |
| 280 | fn | createSessionsResultFromRows | (private) |
| 296 | fn | createChatHeaderState | (private) |
| 476 | fn | getChatModelSelect | (private) |
| 485 | fn | createChatModelControlsProps | (private) |
| 520 | fn | getChatThinkingValue | (private) |
| 524 | fn | getThinkingSelect | (private) |
| 533 | fn | getThinkingSlider | (private) |
| 537 | fn | getThinkingSliderValues | (private) |
| 542 | fn | getThinkingReasoningValueLabel | (private) |
| 546 | fn | getThinkingResetButton | (private) |
| 550 | fn | requireElement | (private) |
| 558 | fn | createDragEvent | (private) |
| 564 | fn | itemAt | (private) |
| 568 | fn | createChatProps | (private) |
| 656 | fn | renderChatView | (private) |
| 662 | fn | createDeferred | (private) |
| 831 | fn | sessionsListWithKind | (private) |
| 1127 | fn | message | (private) |
| 1133 | fn | renderMessages | (private) |
| 1203 | fn | goalSessions | (private) |
| 1685 | fn | renderPane | (private) |
| 1688 | fn | openSlashMenu | (private) |
| 2682 | class | TestResizeObserver | (private) |
| 2718 | fn | inputDraft | (private) |
| 2725 | fn | keydownComposer | (private) |
| 2754 | fn | renderCurrent | (private) |
| 2789 | fn | renderCurrent | (private) |
| 2826 | fn | renderWithDraft | (private) |
| 2851 | fn | renderWithDraft | (private) |
| 2887 | fn | renderWithDraft | (private) |
| 2939 | fn | renderSession | (private) |
| 2989 | fn | renderSession | (private) |
| 3463 | fn | paste | (private) |
| 3915 | fn | renderWelcome | (private) |

## ui/src/pages/chat/chat-view.ts (689 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | ChatProps | pub |
| 250 | fn | resetChatViewState | pub |
| 255 | fn | renderChatResizableDivider | pub |
| 277 | fn | renderChat | pub |
| 300 | fn | setAttachmentDropActive | (private) |
| 315 | fn | clearAttachmentDropActive | (private) |

## ui/src/pages/chat/composer-dictation.test.ts (677 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | GatewayListener | (private) |
| 8 | type | MockProcessor | (private) |
| 19 | class | MockAudioContext | (private) |
| 53 | fn | createClient | (private) |
| 63 | fn | emit | (private) |
| 69 | fn | pointer | (private) |
| 81 | fn | createHarness | (private) |
| 109 | fn | startHold | (private) |

## ui/src/pages/chat/composer-dictation.ts (734 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | DictationPhase | (private) |
| 26 | type | DictationEvent | (private) |
| 35 | type | DictationSessionResult | (private) |
| 44 | type | ComposerDictationSessionCallbacks | (private) |
| 51 | type | ComposerDictationControllerOptions | (private) |
| 62 | fn | eventPayload | (private) |
| 69 | fn | messageFromError | (private) |
| 76 | fn | isAbortError | (private) |
| 80 | fn | insertComposerDictation | pub |
| 104 | class | ComposerDictationSession | (private) |
| 403 | class | ComposerDictationController | pub |

## ui/src/pages/chat/composer-persistence.test.ts (1659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ComposerState | (private) |
| 23 | fn | gatewayOwner | (private) |
| 27 | fn | legacyStorageKeyForGateway | (private) |
| 31 | fn | storageKeyForGateway | (private) |
| 35 | fn | createState | (private) |
| 45 | fn | reconnectItem | (private) |

## ui/src/pages/chat/composer-persistence.ts (1759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | ChatComposerPersistenceState | (private) |
| 52 | type | ChatComposerScope | pub |
| 57 | type | StoredComposerSession | (private) |
| 64 | type | StoredComposerMainAlias | (private) |
| 69 | type | StoredComposerState | (private) |
| 76 | type | ComposerStorageTarget | (private) |
| 88 | type | RestoreOptions | (private) |
| 93 | type | ComposerStorageScope | (private) |
| 100 | type | StoredChatOutboxScope | pub |
| 105 | type | StoredChatOutbox | pub |
| 109 | type | ChatComposerDraftRetry | pub |
| 114 | type | ChatComposerPersistStatus | (private) |
| 116 | type | ChatComposerPersistResult | pub |
| 121 | type | ChatComposerPersistOptions | (private) |
| 128 | fn | storageTargetForGateway | (private) |
| 141 | fn | isBareGlobalAlias | (private) |
| 146 | fn | hasKnownSessionDefaults | (private) |
| 157 | fn | updateStoredMainAlias | (private) |
| 180 | fn | rememberStoredMainAlias | (private) |
| 193 | fn | rememberedStoredMainAlias | (private) |
| 200 | fn | isComposerGlobalScope | (private) |
| 208 | fn | resolveComposerStorageScope | (private) |
| 267 | fn | storageSessionKeyForAgentScope | (private) |
| 271 | fn | resolveStoredChatOutboxScope | pub |
| 286 | fn | storedChatOutboxScopeKey | pub |
| 296 | fn | nextDraftRevision | (private) |
| 302 | fn | rememberDraftRevision | (private) |
| 324 | fn | rememberDraftAttempt | (private) |
| 343 | fn | rememberedDraftRevision | (private) |
| 351 | fn | rememberedDraftAttempt | (private) |
| 359 | fn | mergeStoredComposerSessions | (private) |
| 399 | fn | resolveStoredComposerSession | (private) |
| 541 | fn | parseStore | (private) |
| 594 | fn | readStore | (private) |
| 623 | fn | writeStore | (private) |
| 681 | fn | normalizeOptionalString | (private) |
| 685 | fn | normalizeOptionalBoolean | (private) |
| 689 | fn | normalizeChatAttachment | (private) |
| 714 | fn | serializeChatAttachment | (private) |
| 728 | fn | normalizeSkillWorkshopRevision | (private) |
| 746 | fn | serializeQueueItem | (private) |
| 805 | fn | normalizeQueueItem | (private) |
| 888 | fn | normalizeStoredSession | (private) |
| 931 | fn | serializeQueueItemForScope | (private) |
| 947 | fn | queueItemVersionMatches | (private) |
| 964 | fn | queueItemsEqual | (private) |
| 978 | fn | writeStoredComposerSession | (private) |
| 996 | type | ChatComposerDraftRevisionState | (private) |
| 1001 | fn | loadChatComposerDraftRevisionState | (private) |
| 1039 | fn | loadChatComposerDraftRevision | pub |
| 1047 | fn | loadChatComposerCommittedDraftRevision | pub |
| 1055 | fn | loadChatComposerSnapshot | pub |
| 1133 | fn | persistChatComposerStateResult | (private) |
| 1211 | fn | persistChatComposerState | pub |
| 1219 | fn | admitStoredChatComposerQueueItem | pub |
| 1276 | fn | updateStoredChatComposerQueueItem | pub |
| 1328 | fn | removeStoredChatComposerQueueItem | pub |
| 1382 | fn | listStoredChatOutboxes | pub |
| 1477 | fn | restoreChatComposerState | pub |
| 1495 | type | ChatComposerDraftSnapshot | (private) |
| 1503 | class | ChatComposerPersistence | pub |

## ui/src/pages/chat/realtime-talk-consult.test.ts (705 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | requireFirstMockCall | (private) |

## ui/src/pages/chat/realtime-talk-gateway-relay.test.ts (1284 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | GatewayFrame | (private) |
| 13 | type | GatewayListener | (private) |
| 14 | type | MockProcessor | (private) |
| 32 | class | MockAudioContext | (private) |
| 94 | fn | createSession | (private) |
| 108 | fn | createClient | (private) |
| 118 | fn | emitGatewayFrame | (private) |
| 124 | fn | pumpMicrophone | (private) |
| 136 | fn | zeroPcmBase64 | (private) |
| 140 | fn | requestCallsFor | (private) |

## ui/src/pages/chat/realtime-talk-gateway-relay.ts (511 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | class | GatewayRelayRealtimeTalkTransport | pub |

## ui/src/pages/chat/realtime-talk-google-live.test.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | MockWebSocketEvent | (private) |
| 20 | type | MockWebSocketHandler | (private) |
| 21 | type | MockWebSocketEventType | (private) |
| 37 | fn | flushMicrotasks | (private) |
| 42 | class | MockGoogleLiveWebSocket | (private) |
| 84 | class | MockAudioBufferSource | (private) |
| 92 | class | MockAudioContext | (private) |
| 153 | fn | createSession | (private) |
| 172 | fn | createClient | (private) |
| 180 | fn | createTransport | (private) |
| 198 | fn | encodeJsonFrame | (private) |
| 202 | fn | latestWebSocket | (private) |
| 210 | fn | pumpMicrophone | (private) |
| 218 | fn | requireFirstTalkEvent | (private) |

## ui/src/pages/chat/realtime-talk-google-live.ts (701 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | GoogleLiveMessage | (private) |
| 53 | type | PendingFunctionCall | (private) |
| 64 | fn | googleLiveVideoMessage | (private) |
| 74 | fn | isGemini31LiveModel | (private) |
| 82 | fn | buildGoogleLiveUrl | (private) |
| 106 | class | GoogleLiveRealtimeTalkTransport | pub |
| 680 | fn | decodeGoogleLiveMessageData | (private) |
| 697 | fn | isArrayBufferLike | (private) |

## ui/src/pages/chat/realtime-talk-shared.ts (641 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | RealtimeTalkStatus | pub |
| 15 | type | RealtimeTalkEvent | pub |
| 17 | type | RealtimeTalkCallbacks | pub |
| 38 | type | RealtimeTalkAudioContract | (private) |
| 45 | type | RealtimeTalkWebRtcSdpSessionResult | pub |
| 59 | type | RealtimeTalkJsonPcmWebSocketSessionResult | pub |
| 75 | type | RealtimeTalkGatewayRelaySessionResult | pub |
| 88 | type | RealtimeTalkManagedRoomSessionResult | (private) |
| 101 | type | RealtimeTalkSessionResult | pub |
| 107 | type | RealtimeTalkTransport | pub |
| 114 | type | RealtimeTalkTransportContext | pub |
| 126 | fn | createRealtimeTalkEventEmitter | pub |
| 168 | fn | resolveRealtimeTalkTurnId | (private) |
| 181 | fn | isTurnScopedTalkEvent | (private) |
| 192 | fn | resolveRealtimeTalkEventSessionId | (private) |
| 206 | type | ChatPayload | (private) |
| 215 | type | AgentWaitResult | (private) |
| 230 | fn | extractTextFromMessage | (private) |
| 251 | fn | getTerminalAgentWaitError | (private) |
| 282 | fn | waitForChatResult | (private) |
| 300 | fn | onAbort | (private) |
| 305 | fn | settleResolve | (private) |
| 313 | fn | settleReject | (private) |
| 321 | fn | waitForEmptyFinalFallback | (private) |
| 375 | fn | cleanup | (private) |
| 386 | fn | emitRealtimeTalkAgentProgress | (private) |
| 409 | fn | steerRealtimeTalkActiveConsult | pub |
| 464 | fn | submitRealtimeTalkAgentControl | pub |
| 515 | fn | maybeSpeakRealtimeTalkControlResult | (private) |
| 538 | fn | submitRealtimeTalkConsult | pub |
| 567 | fn | abortRun | (private) |
| 629 | fn | isAbortError | (private) |

## ui/src/pages/chat/realtime-talk-webrtc.test.ts (1027 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | class | FakeDataChannel | (private) |
| 20 | class | FakePeerConnection | (private) |
| 55 | fn | requireTalkEvent | (private) |
| 70 | type | SentRealtimeEvent | (private) |
| 79 | fn | stubAnswerSdpFetch | (private) |
| 83 | fn | createOpenAiTransport | (private) |
| 103 | fn | dispatchRealtimeEvent | (private) |
| 111 | fn | dispatchConsultToolCall | (private) |
| 121 | fn | dispatchTranscription | (private) |
| 129 | fn | startActiveConsult | (private) |
| 151 | fn | sentRealtimeEvents | (private) |
| 159 | fn | expectSpokenStatusMessage | (private) |
| 201 | class | MockAudioContext | (private) |

## ui/src/pages/chat/realtime-talk-webrtc.ts (735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | RealtimeServerEvent | (private) |
| 38 | type | ToolBuffer | (private) |
| 47 | type | PendingOfferRequest | (private) |
| 52 | class | WebRtcSdpRealtimeTalkTransport | pub |
| 719 | fn | realtimeTalkDataChannelMaxMessageSize | (private) |
| 726 | fn | realtimeTalkImageEvent | (private) |

## ui/src/pages/chat/realtime-talk.test.ts (994 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | MockTransport | (private) |
| 43 | fn | transportContext | (private) |

## ui/src/pages/chat/realtime-talk.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | RealtimeTalkLaunchOptions | (private) |
| 32 | type | RealtimeTalkLocalOptions | (private) |
| 39 | fn | switchActiveRealtimeTalkCameras | pub |
| 59 | type | RealtimeTalkLaunchTransport | (private) |
| 61 | type | DetachedVoiceSession | (private) |
| 68 | type | RealtimeTalkConfigResult | (private) |
| 78 | fn | normalizeLaunchTransport | (private) |
| 94 | fn | createTransport | (private) |
| 118 | fn | resolveTransport | (private) |
| 122 | fn | transcriptWriteError | (private) |
| 126 | fn | compactLaunchParams | (private) |
| 137 | class | RealtimeTalkSession | pub |

## ui/src/pages/chat/run-lifecycle.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ReconcileHost | (private) |
| 15 | type | TestRow | (private) |
| 23 | fn | makeSessionsResult | (private) |
| 41 | fn | makeHost | (private) |
| 54 | fn | rowActive | (private) |
| 59 | fn | completeLocalRun | (private) |

## ui/src/pages/chat/scroll.test.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | createScrollHost | (private) |
| 62 | fn | createScrollEvent | (private) |

## ui/src/pages/chat/stream-reconciliation.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | StreamReconciliationState | (private) |
| 26 | type | ToolStreamHost | (private) |
| 38 | type | VisibleAssistantStreamPart | (private) |
| 47 | type | ToolMessageRef | (private) |
| 53 | fn | addToolRef | (private) |
| 61 | fn | isToolLikeRole | (private) |
| 65 | fn | hasToolName | (private) |
| 69 | fn | toolContentBlocks | (private) |
| 77 | fn | isToolContentBlock | (private) |
| 81 | fn | extractToolMessageRefs | (private) |
| 108 | type | AssistantMessageVisibility | (private) |
| 109 | type | StreamVisibility | (private) |
| 111 | type | MaterializeVisibleStreamOptions | (private) |
| 120 | fn | currentLiveToolCallIds | pub |
| 129 | fn | lastUserMessageIndex | (private) |
| 143 | fn | maybeResetToolStream | pub |
| 164 | fn | clearToolStreamSegments | pub |
| 171 | fn | persistedCurrentToolStreamIds | pub |
| 195 | fn | buildAssistantStreamMessage | (private) |
| 214 | fn | streamFallbackReplacementText | (private) |
| 229 | fn | terminalMessageReplacesStreamFallback | (private) |
| 252 | fn | appendTerminalAssistantMessage | pub |
| 262 | fn | visibleAssistantStreamText | (private) |
| 272 | fn | hasAssistantStreamReplacement | (private) |
| 298 | fn | streamFallbackItemId | (private) |
| 310 | fn | hasKeyedAssistantStreamReplacement | (private) |
| 315 | fn | visibleAssistantStreamParts | (private) |
| 379 | fn | visibleCurrentAssistantStreamTail | pub |
| 406 | fn | hasAssistantStreamPartReplacement | (private) |
| 420 | fn | hasVisibleAssistantMessageAfterUser | (private) |
| 437 | fn | historyReplacedVisibleStream | pub |
| 458 | fn | hasVisibleStreamParts | pub |
| 465 | fn | terminalMessageReplacesVisibleStream | pub |
| 496 | fn | currentToolStreamMessageIndex | (private) |
| 514 | fn | insertMessageAtIndex | (private) |
| 518 | fn | timestampOrderedInsertIndex | (private) |
| 529 | fn | messageTimestampMs | pub |
| 541 | fn | timestampForInsertedVisibleStream | (private) |
| 570 | fn | materializeVisibleStreamState | pub |
| 616 | fn | prunePersistedToolStreamMessages | pub |

## ui/src/pages/chat/tool-stream.node.test.ts (1124 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ToolStreamHost | (private) |
| 14 | type | AgentEvent | (private) |
| 15 | type | MutableHost | (private) |
| 29 | fn | createHost | (private) |
| 60 | fn | agentEvent | (private) |
| 77 | fn | expectCompactionCompleteAndAutoClears | (private) |
| 98 | fn | requireFallbackStatus | (private) |
| 105 | fn | useToolStreamFakeTimers | (private) |
| 261 | fn | approval | (private) |
| 269 | fn | learnRun | (private) |

## ui/src/pages/chat/tool-stream.ts (972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | AgentEventPayload | (private) |
| 24 | type | SessionOperationEventPayload | (private) |
| 35 | type | ToolStreamEntry | pub |
| 52 | type | ToolStreamHost | (private) |
| 72 | fn | toTrimmedString | (private) |
| 80 | fn | resolveModelLabel | (private) |
| 111 | type | FallbackAttempt | (private) |
| 117 | fn | parseFallbackAttemptSummaries | (private) |
| 126 | fn | parseFallbackAttempts | (private) |
| 152 | fn | extractToolOutputText | (private) |
| 182 | fn | formatToolOutput | (private) |
| 209 | fn | readRecord | (private) |
| 213 | fn | resolveSessionStatusModelOverride | (private) |
| 230 | fn | syncSessionStatusModelOverride | (private) |
| 244 | fn | buildToolStreamMessage | (private) |
| 278 | fn | trimToolStream | (private) |
| 289 | fn | syncToolStreamMessages | (private) |
| 295 | fn | flushToolStreamSync | (private) |
| 303 | fn | scheduleToolStreamSync | (private) |
| 317 | fn | resetToolStream | pub |
| 333 | type | CompactionStatus | pub |
| 340 | type | FallbackStatus | pub |
| 350 | type | PlanStatus | pub |
| 360 | type | WaitingApprovalStatus | pub |
| 366 | type | WaitingApprovalSnapshotHost | (private) |
| 377 | fn | reconcileWaitingApprovalsFromSnapshot | pub |
| 424 | type | PlanHost | (private) |
| 429 | type | CompactionHost | (private) |
| 441 | fn | clearCompactionTimer | (private) |
| 448 | fn | scheduleCompactionClear | (private) |
| 467 | fn | setCompactionComplete | (private) |
| 477 | fn | handleSessionOperationEvent | pub |
| 525 | fn | handleCompactionEvent | (private) |
| 569 | fn | handleLifecycleCompactionEvent | (private) |
| 592 | fn | resolveAcceptedSession | (private) |
| 619 | fn | handleLifecycleFallbackEvent | (private) |
| 648 | fn | attempts | (private) |
| 681 | fn | handleLifecycleApprovalEvent | (private) |
| 706 | fn | readPreambleProgressEvent | (private) |
| 733 | fn | normalizePreambleProgressText | (private) |
| 742 | fn | handlePreambleProgressEvent | (private) |
| 781 | fn | parsePlanSteps | (private) |
| 810 | fn | normalizePlanSnapshot | pub |
| 827 | fn | handlePlanEvent | (private) |
| 842 | fn | handleAgentEvent | pub |
