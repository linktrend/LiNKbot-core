# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 17 large files in this module.

## src/tui/embedded-backend.test.ts (2874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | LoadSessionEntryMockResult | (private) |
| 252 | fn | deferred | (private) |
| 265 | fn | flushMicrotasks | (private) |
| 270 | fn | emitRegisteredAgentEvent | (private) |

## src/tui/embedded-backend.ts (1547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | type | LocalRunState | (private) |
| 141 | type | QueuedSessionRun | (private) |
| 147 | type | LocalPendingMessage | (private) |
| 168 | fn | hasProviderWildcardModelAllowlist | (private) |
| 178 | fn | resolveConfiguredReplaceModeCatalog | (private) |
| 188 | fn | shouldLoadFullGatewayCatalogForReplaceMode | (private) |
| 192 | fn | ensureEmbeddedHistoryRuntimePluginsLoaded | (private) |
| 208 | fn | loadEmbeddedTuiModelCatalog | (private) |
| 218 | fn | resolveBtwQuestion | (private) |
| 224 | fn | buildLocalQueuedPrompt | (private) |
| 240 | fn | payloadText | (private) |
| 257 | fn | timeoutSecondsFromMs | (private) |
| 264 | fn | resolveDeltaPayload | (private) |
| 274 | fn | createQueuedRunReadiness | (private) |
| 296 | fn | waitForLocalRunShutdown | (private) |
| 321 | fn | waitForQueuedLocalRun | (private) |
| 355 | class | EmbeddedTuiBackend | pub |

## src/tui/gateway-chat.test.ts (1074 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | resolveBoundGatewayConnection | (private) |
| 47 | fn | resolveGatewayConnection | (private) |
| 50 | fn | fileExists | (private) |
| 59 | type | ModeExecProviderFixture | (private) |
| 78 | fn | withModeExecProviderFixture | (private) |
| 674 | class | CapturingGatewayClient | (private) |

## src/tui/gateway-chat.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | GatewayConnectionOptions | (private) |
| 59 | type | GatewayEvent | (private) |
| 65 | type | ResolvedGatewayConnection | (private) |
| 74 | fn | throwGatewayAuthResolutionError | (private) |
| 84 | fn | isRetryableStartupUnavailable | (private) |
| 102 | fn | resolveStartupRetryDelayMs | (private) |
| 108 | fn | nonEmptyString | (private) |
| 112 | fn | isLegacyPreserveSideRunsError | (private) |
| 120 | fn | isLegacySucceedsParentError | (private) |
| 128 | type | GatewaySessionList | (private) |
| 129 | type | GatewayAgentsList | (private) |
| 130 | type | GatewayModelChoice | (private) |
| 132 | class | GatewayChatClient | pub |
| 386 | fn | allows | (private) |
| 434 | fn | resolveBoundGatewayConnection | (private) |
| 452 | fn | resolveGatewayConnection | (private) |
| 484 | fn | allowInsecureLocalOperatorUi | (private) |

## src/tui/tui-command-handlers.test.ts (1864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | LoadHistoryMock | (private) |
| 19 | type | RunAuthFlow | (private) |
| 20 | type | AbortActiveMock | (private) |
| 22 | type | SelectableOverlay | (private) |
| 26 | type | SetActivityStatusMock | (private) |
| 27 | type | SetSessionMock | (private) |
| 28 | type | ConsumeCompletedRunMock | (private) |
| 29 | type | FlushPendingHistoryRefreshMock | (private) |
| 31 | fn | createOverlayHandle | (private) |
| 42 | fn | flushAsyncSelect | (private) |
| 48 | fn | expectSendChatFields | (private) |
| 75 | type | MockWithCalls | (private) |
| 77 | fn | firstMockArg | (private) |
| 85 | fn | createHarness | (private) |

## src/tui/tui-command-handlers.ts (975 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | formatTuiFastMode | (private) |
| 56 | type | CommandHandlerContext | (private) |
| 87 | fn | isBtwCommand | (private) |
| 91 | fn | isSlashStopCommand | (private) |
| 96 | fn | normalizedChatSendAckStatus | (private) |
| 100 | fn | isTerminalChatSendAckFailure | (private) |
| 105 | fn | isTerminalChatSendAckSuccess | (private) |
| 111 | fn | goalContinuationPrompt | (private) |
| 126 | fn | createCommandHandlers | pub |
| 157 | fn | addUnsupportedLocalCommand | (private) |
| 161 | fn | setAgent | (private) |
| 167 | fn | closeOverlayAndRender | (private) |
| 172 | fn | hasTrackedAbortTarget | (private) |
| 174 | fn | hasUnsafeSessionRollover | (private) |
| 177 | fn | currentSessionPatchTarget | (private) |
| 182 | fn | openSelector | (private) |
| 200 | fn | openModelSelector | (private) |
| 238 | fn | openAgentSelector | (private) |
| 256 | fn | openContextModeSelector | (private) |
| 280 | fn | openSessionSelector | (private) |
| 329 | fn | openSettings | (private) |
| 366 | fn | handleCommand | (private) |
| 815 | fn | sendMessage | (private) |

## src/tui/tui-event-handlers.test.ts (2733 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | MockFn | (private) |
| 16 | type | HandlerChatLog | (private) |
| 26 | type | HandlerBtwPresenter | (private) |
| 30 | type | HandlerTui | (private) |
| 31 | type | MockChatLog | (private) |
| 41 | type | MockBtwPresenter | (private) |
| 45 | type | MockTui | (private) |
| 47 | fn | createMockChatLog | (private) |
| 60 | fn | createMockBtwPresenter | (private) |
| 67 | fn | requireFinalizedAssistantText | (private) |
| 75 | fn | sendingSubmit | (private) |
| 79 | fn | acceptedSubmit | (private) |
| 108 | fn | makeContext | (private) |
| 119 | fn | noteLocalRunId | (private) |
| 125 | fn | noteLocalBtwRunId | (private) |
| 150 | fn | createHandlersHarness | (private) |
| 1451 | fn | createConcurrentRunHarness | (private) |
| 1937 | fn | startRun | (private) |
| 1950 | fn | changeSession | (private) |
| 1965 | fn | finishPersistence | (private) |
| 1979 | fn | deferNextHistoryLoad | (private) |
| 2314 | fn | createHarness | (private) |
| 2322 | fn | noteLocalRunId | (private) |

## src/tui/tui-event-handlers.ts (1208 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | EventHandlerChatLog | (private) |
| 44 | type | EventHandlerTui | (private) |
| 48 | type | EventHandlerBtwPresenter | (private) |
| 55 | fn | formatAbortDiagnostic | (private) |
| 67 | type | EventHandlerContext | (private) |
| 92 | fn | createEventHandlers | pub |
| 166 | fn | flushPendingHistoryRefreshIfIdle | (private) |
| 174 | fn | clearStreamingWatchdog | (private) |
| 182 | fn | clearPendingTerminalLifecycleError | (private) |
| 191 | fn | clearPendingTerminalLifecycleErrors | (private) |
| 198 | fn | pauseStreamingWatchdog | (private) |
| 202 | fn | clearTrackedRunState | (private) |
| 228 | fn | armStreamingWatchdog | (private) |
| 255 | fn | maybeUnref | (private) |
| 261 | fn | pruneRunMap | (private) |
| 284 | fn | syncSessionKey | (private) |
| 342 | fn | noteSessionRun | (private) |
| 347 | fn | markSubmittedRunRegistered | (private) |
| 351 | fn | noteFinalizedRun | (private) |
| 369 | fn | notePostFinalizingRun | (private) |
| 374 | fn | clearActiveRunIfMatch | (private) |
| 404 | fn | clearStaleStreamingIfNoTrackedRunRemains | (private) |
| 418 | fn | reconnectStreamingWatchdog | (private) |
| 439 | fn | finalizeRun | (private) |
| 463 | fn | terminateRun | (private) |
| 511 | fn | renderTerminalLifecycleError | (private) |
| 518 | fn | scheduleTerminalLifecycleError | (private) |
| 528 | fn | hasConcurrentActiveRun | (private) |
| 533 | fn | maybeRefreshHistoryForRun | (private) |
| 653 | fn | handleChatEvent | (private) |
| 812 | fn | drainHistoryReloadQueue | (private) |
| 820 | fn | finishReload | (private) |
| 854 | fn | queueHistoryReload | (private) |
| 883 | fn | collectTrackedSessionRunIds | (private) |
| 900 | fn | handleSessionsChangedEvent | (private) |
| 982 | fn | handleAgentEvent | (private) |
| 1140 | fn | handleBtwEvent | (private) |
| 1168 | fn | dispose | (private) |
| 1182 | fn | consumeCompletedRunForPendingSend | (private) |
| 1193 | fn | isRunObserved | (private) |

## src/tui/tui-formatters.test.ts (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 360 | fn | expectTokenWidthUnderLimit | (private) |

## src/tui/tui-formatters.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | formatModelFooter | pub |
| 43 | fn | hasControlChars | (private) |
| 55 | fn | stripControlChars | (private) |
| 71 | fn | isCopySensitiveToken | (private) |
| 109 | fn | normalizeLongTokenForDisplay | (private) |
| 128 | type | Segment | (private) |
| 130 | fn | partitionByRegex | (private) |
| 151 | fn | transformOutsideCode | (private) |
| 164 | fn | redactBinaryLikeLine | (private) |
| 175 | fn | isolateRtlLine | (private) |
| 182 | fn | applyRtlIsolation | (private) |
| 192 | fn | sanitizeRenderableText | pub |
| 223 | fn | resolveFinalAssistantText | pub |
| 243 | fn | composeThinkingAndContent | pub |
| 262 | fn | asMessageRecord | (private) |
| 269 | fn | resolveMessageRecord | (private) |
| 279 | fn | formatAssistantErrorFromRecord | (private) |
| 288 | fn | collectSanitizedBlockStrings | (private) |
| 313 | fn | extractThinkingFromMessage | pub |
| 334 | fn | extractContentFromMessage | pub |
| 365 | fn | extractAssistantRenderableContent | (private) |
| 375 | fn | extractPairingQrTerminalText | (private) |
| 399 | fn | extractTextBlocks | (private) |
| 428 | fn | extractTextFromMessage | pub |
| 458 | fn | isCommandMessage | pub |
| 465 | fn | formatTokens | pub |
| 480 | fn | formatGoalUsage | (private) |
| 487 | fn | formatGoalFooter | pub |
| 510 | fn | formatContextUsageLine | pub |
| 526 | fn | asString | pub |

## src/tui/tui-plugin-approvals.ts (550 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | ApprovalSelector | (private) |
| 24 | fn | sanitizeApprovalText | (private) |
| 29 | class | PluginApprovalPrompt | (private) |
| 87 | type | ApprovalTimer | (private) |
| 88 | type | ApprovalMutation | (private) |
| 93 | type | TuiPluginApprovalControllerDeps | (private) |
| 129 | fn | isRecord | (private) |
| 133 | fn | parseDecision | (private) |
| 137 | fn | parseAllowedDecisions | (private) |
| 151 | fn | parseSeverity | (private) |
| 156 | fn | parseTuiPluginApproval | (private) |
| 186 | fn | parseResolvedApprovalId | (private) |
| 193 | fn | decisionLabel | (private) |
| 203 | fn | approvalSurfaceLabel | (private) |
| 210 | fn | createTuiPluginApprovalController | pub |
| 229 | fn | clearExpiryTimer | (private) |
| 236 | fn | closeActiveOverlay | (private) |
| 244 | fn | recordMutation | (private) |
| 252 | fn | remove | (private) |
| 260 | fn | add | (private) |
| 269 | fn | matchesActiveSession | (private) |
| 281 | fn | prune | (private) |
| 288 | fn | presentNext | (private) |
| 324 | fn | resolve | (private) |
| 419 | fn | applySnapshot | (private) |
| 440 | fn | refreshOnce | (private) |

## src/tui/tui-pty-harness.e2e.test.ts (899 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | FixtureLogEntry | (private) |
| 21 | fn | readFixtureLog | (private) |
| 36 | fn | waitForFixtureLogEntry | (private) |
| 54 | fn | objectFieldEquals | (private) |
| 62 | fn | writeTuiPtyFixtureScript | (private) |
| 117 | fn | record | (private) |
| 124 | fn | sessionEntry | (private) |
| 137 | fn | assistantMessageFromSourceReplyPayloads | (private) |
| 163 | class | FixtureBackend | (private) |
| 470 | fn | main | (private) |
| 493 | fn | startTuiFixture | (private) |

## src/tui/tui-pty-local.e2e.test.ts (1381 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | MockModelServer | (private) |
| 25 | type | MockModelBehavior | (private) |
| 32 | type | MockModelRequest | (private) |
| 38 | type | GatewayScenario | (private) |
| 102 | type | GatewayScenarioId | (private) |
| 111 | fn | createIdempotentCleanup | (private) |
| 116 | type | CleanupRegistrar | (private) |
| 118 | fn | waitForOutputAfter | (private) |
| 129 | fn | createFreshSession | (private) |
| 163 | fn | readRequestBody | (private) |
| 171 | fn | writeJson | (private) |
| 181 | fn | writeResponsesSse | (private) |
| 253 | fn | writeInvalidEditCallSse | (private) |
| 289 | fn | readJsonRequest | (private) |
| 294 | fn | startRoutedMockModelServer | (private) |
| 383 | fn | startMockModelServer | (private) |
| 392 | fn | buildTuiCliScript | (private) |
| 407 | fn | buildLocalValidationTuiScript | (private) |
| 448 | fn | buildMockModelProvider | (private) |
| 467 | fn | buildLocalModeConfig | (private) |
| 515 | fn | startLocalModeTui | (private) |
| 587 | type | SharedGatewayFixture | (private) |
| 594 | type | SharedGatewayFixtureStartup | (private) |
| 602 | fn | buildGatewayModeConfig | (private) |
| 649 | fn | startSharedGatewayFixture | (private) |
| 735 | fn | requireSharedGatewayFixture | (private) |
| 748 | fn | startGatewayModeTui | (private) |
| 951 | fn | registerValidationLoopTest | (private) |
| 1048 | fn | registerGatewayTest | (private) |

## src/tui/tui-session-actions.test.ts (1707 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | createBtwPresenter | (private) |
| 37 | fn | createHistoryChatLog | (private) |
| 78 | fn | createTestSessionActions | (private) |

## src/tui/tui-session-actions.ts (702 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | SessionActionBtwPresenter | (private) |
| 24 | type | SessionActionContext | (private) |
| 43 | type | SessionInfoDefaults | (private) |
| 50 | type | SessionInfoEntry | (private) |
| 57 | fn | thinkingLevelsEqual | (private) |
| 73 | fn | goalEquals | (private) |
| 77 | fn | agentRuntimeEquals | (private) |
| 87 | fn | sessionInfoUiEquals | (private) |
| 109 | fn | extractMessageTimestamp | (private) |
| 114 | fn | createSessionActions | pub |
| 138 | fn | captureSessionSelection | (private) |
| 147 | fn | applyAgentsResult | (private) |
| 183 | fn | refreshAgents | (private) |
| 192 | fn | updateAgentFromSessionKey | (private) |
| 203 | fn | resolveModelSelection | (private) |
| 216 | fn | applySessionInfo | (private) |
| 338 | fn | runRefreshSessionInfo | (private) |
| 341 | fn | isCurrentRefresh | (private) |
| 344 | fn | resolveListAgentId | (private) |
| 388 | fn | drainRefreshSessionInfo | (private) |
| 397 | fn | refreshSessionInfo | (private) |
| 409 | fn | applySessionInfoFromPatch | (private) |
| 434 | fn | clearDisplayedSession | (private) |
| 464 | fn | isCurrentLoad | (private) |
| 619 | fn | setSession | (private) |
| 639 | fn | abortActive | (private) |

## src/tui/tui.test.ts (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 297 | fn | createTimedDedupe | (private) |
| 396 | fn | beginTestShutdown | (private) |

## src/tui/tui.ts (1764 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | type | RunTuiOptions | (private) |
| 121 | fn | resolveCodexCliBin | pub |
| 140 | fn | resolveLocalAuthCliInvocation | pub |
| 162 | fn | resolveLocalAuthSpawnInvocation | pub |
| 182 | fn | resolveLocalAuthSpawnCwd | pub |
| 199 | fn | resolveTuiSessionKey | pub |
| 224 | fn | resolveInitialTuiAgentId | pub |
| 244 | fn | resolveGatewayDisconnectState | pub |
| 267 | fn | createBackspaceDeduper | pub |
| 285 | fn | isIgnorableTuiStopError | pub |
| 299 | fn | stopTuiSafely | pub |
| 309 | type | TerminalLossEmitter | (private) |
| 314 | fn | isTuiTerminalLossError | pub |
| 330 | fn | installTuiTerminalLossExitHandler | pub |
| 364 | fn | createDeferredTuiFinish | pub |
| 392 | type | DrainableTui | (private) |
| 404 | type | TuiProcessExitTimer | (private) |
| 408 | type | TuiProcessExitTimeout | (private) |
| 410 | type | TuiShutdownTask | (private) |
| 412 | fn | beginTuiShutdown | pub |
| 449 | fn | createTuiSignalHandlers | pub |
| 464 | fn | drainAndStopTuiSafely | pub |
| 484 | fn | isTuiBusyActivityStatus | pub |
| 488 | fn | resolveTuiToolsToggleActivityStatus | pub |
| 499 | fn | resolveTuiShutdownHardExitMs | pub |
| 503 | fn | scheduleProcessExitAfterTuiReturn | pub |
| 533 | type | CtrlCAction | (private) |
| 534 | type | TuiCtrlCAction | (private) |
| 536 | fn | resolveCtrlCAction | pub |
| 561 | fn | resolveTuiCtrlCAction | pub |
| 578 | fn | resolveEmptySessionInfoDefaults | (private) |
| 584 | fn | runTui | pub |
| 588 | fn | resolveUsableCwd | (private) |
| 763 | fn | noteLocalRunId | (private) |
| 776 | fn | forgetLocalRunId | (private) |
| 780 | fn | isLocalRunId | (private) |
| 782 | fn | clearLocalRunIds | (private) |
| 786 | fn | noteLocalBtwRunId | (private) |
| 799 | fn | forgetLocalBtwRunId | (private) |
| 803 | fn | isLocalBtwRunId | (private) |
| 805 | fn | clearLocalBtwRunIds | (private) |
| 856 | fn | resolveDynamicSlashCommandsKey | (private) |
| 858 | fn | applyAutocompleteProvider | (private) |
| 876 | fn | clearDynamicSlashCommandsRefreshTimer | (private) |
| 884 | fn | refreshDynamicSlashCommands | (private) |
| 924 | fn | scheduleDynamicSlashCommandsRefresh | (private) |
| 936 | fn | updateAutocompleteProvider | (private) |
| 944 | fn | formatSessionKey | (private) |
| 952 | fn | formatAgentLabel | (private) |
| 957 | fn | resolveSessionKey | (private) |
| 968 | fn | buildLastSessionScopeKeyFor | (private) |
| 977 | fn | rememberCurrentSessionKey | (private) |
| 988 | fn | restoreRememberedSession | (private) |
| 1029 | fn | updateHeader | (private) |
| 1043 | fn | formatElapsed | (private) |
| 1053 | fn | ensureStatusText | (private) |
| 1064 | fn | ensureStatusLoader | (private) |
| 1083 | fn | updateBusyStatusMessage | (private) |
| 1106 | fn | startStatusTimer | (private) |
| 1118 | fn | stopStatusTimer | (private) |
| 1126 | fn | stopStatusTimeout | (private) |
| 1134 | fn | startWaitingTimer | (private) |
| 1155 | fn | stopWaitingTimer | (private) |
| 1164 | fn | renderStatus | (private) |
| 1192 | fn | setConnectionStatus | (private) |
| 1212 | fn | setActivityStatus | (private) |
| 1278 | fn | updateFooter | (private) |
| 1324 | fn | initialSessionAgentId | (private) |
| 1399 | fn | forceExit | (private) |
| 1407 | fn | requestExit | (private) |
| 1480 | fn | admitChatMessage | (private) |
| 1487 | fn | notifyBlockedChatSubmit | (private) |
| 1499 | fn | notifySubmitError | (private) |
| 1526 | fn | handleCtrlC | (private) |
| 1741 | fn | finish | (private) |
