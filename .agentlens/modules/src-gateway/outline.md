# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 159 large files in this module.

## src/gateway/android-node.capabilities.live.test.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | CommandOutcome | (private) |
| 30 | type | CommandContext | (private) |
| 34 | type | CommandProfile | (private) |
| 42 | type | CommandResult | (private) |
| 51 | fn | asRecord | (private) |
| 55 | fn | expectRecord | (private) |
| 63 | fn | readString | (private) |
| 67 | fn | expectNonEmptyString | (private) |
| 75 | fn | readStringArray | (private) |
| 84 | fn | parseErrorCode | (private) |
| 94 | fn | readGatewayErrorCode | (private) |
| 102 | fn | assertObjectPayload | (private) |
| 132 | fn | assertA2uiPushPayload | (private) |
| 326 | fn | resolveGatewayConnection | (private) |
| 350 | fn | resolvePolicyConfigForRun | (private) |
| 405 | fn | connectGatewayClient | (private) |
| 412 | fn | stop | (private) |
| 447 | fn | isAndroidNode | (private) |
| 456 | fn | selectTargetNode | (private) |
| 492 | fn | invokeNodeCommand | (private) |
| 530 | fn | evaluateCommandResult | (private) |

## src/gateway/auth.test.ts (1397 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createLimiterSpy | (private) |
| 37 | fn | createTailscaleForwardedReq | (private) |
| 51 | fn | createTailscaleWhois | (private) |
| 56 | fn | expectTokenMismatchWithLimiter | (private) |
| 77 | fn | expectTailscaleHeaderAuthResult | (private) |
| 486 | fn | tailscaleWhois | (private) |
| 666 | fn | mockLocalInterfaces | (private) |
| 686 | type | GatewayConnectInput | (private) |
| 693 | fn | authorizeTrustedProxy | (private) |
| 1065 | fn | authorizeLocalDirect | (private) |

## src/gateway/auth.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | GatewayAuthResult | pub |
| 54 | type | ConnectAuth | (private) |
| 59 | type | GatewayAuthSurface | (private) |
| 62 | type | AuthorizeGatewayConnectParams | (private) |
| 90 | type | TailscaleUser | (private) |
| 96 | type | TailscaleWhoisLookup | (private) |
| 98 | type | GatewayAuthRequestContext | (private) |
| 106 | fn | resolveGatewayAuthRequestContext | (private) |
| 125 | fn | hasExplicitSharedSecretAuth | (private) |
| 131 | fn | normalizeLogin | (private) |
| 135 | fn | headerValue | (private) |
| 141 | fn | resolveTailscaleClientIp | (private) |
| 154 | fn | hasForwardedRequestHeaders | pub |
| 170 | fn | isLocalDirectRequest | pub |
| 184 | fn | getTailscaleUser | (private) |
| 202 | fn | hasTailscaleProxyHeaders | (private) |
| 213 | fn | isTailscaleProxyRequest | (private) |
| 220 | fn | resolveVerifiedTailscaleUser | (private) |
| 254 | fn | assertGatewayAuthConfigured | pub |
| 302 | fn | authorizeTrustedProxy | (private) |
| 356 | fn | shouldAllowTailscaleHeaderAuth | (private) |
| 360 | fn | authorizeHttpBrowserOrigin | (private) |
| 388 | fn | authorizeTrustedProxyBrowserOrigin | (private) |
| 399 | fn | authorizeTokenAuth | (private) |
| 423 | fn | authorizePasswordAuth | (private) |
| 445 | fn | rejectIfRateLimited | (private) |
| 466 | fn | authorizeGatewayConnect | (private) |
| 491 | fn | authorizeGatewayConnectCore | (private) |
| 606 | fn | authorizeHttpGatewayConnect | pub |
| 616 | fn | authorizeWsControlUiGatewayConnect | pub |

## src/gateway/call.test.ts (2803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | waitForFast | (private) |
| 99 | type | StartMode | (private) |
| 107 | type | StubGatewayClientCloseInfo | (private) |
| 118 | fn | startStubGatewayClient | (private) |
| 216 | class | StubGatewayClient | (private) |
| 254 | fn | resetGatewayCallMocks | (private) |
| 304 | fn | setGatewayNetworkDefaults | (private) |
| 309 | fn | setLocalLoopbackGatewayConfig | (private) |
| 314 | fn | makeRemotePasswordGatewayConfig | (private) |

## src/gateway/call.ts (1324 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | GatewayRequestFunction | pub |
| 70 | type | CallGatewayBaseOptions | (private) |
| 112 | type | CallGatewayCliOptions | pub |
| 116 | type | CallGatewayOptions | pub |
| 120 | type | GatewayTransportErrorKind | pub |
| 122 | class | GatewayTransportError | pub |
| 153 | class | GatewayCredentialsRequiredError | pub |
| 171 | class | GatewayExplicitAuthRequiredError | pub |
| 178 | class | GatewayStoredDeviceAuthUnavailableError | pub |
| 185 | class | GatewayLocalBackendSharedAuthUnavailableError | pub |
| 192 | type | GatewayTransportErrorJson | pub |
| 210 | type | GatewayClientRequestErrorJson | pub |
| 222 | type | GatewayProbeConnectionDetails | pub |
| 227 | fn | firstGatewayErrorLine | (private) |
| 231 | fn | formatGatewayTransportErrorJson | pub |
| 258 | fn | formatGatewayClientRequestErrorJson | pub |
| 297 | fn | isGatewayTransportError | pub |
| 312 | fn | isGatewayCredentialsRequiredError | pub |
| 325 | fn | isGatewayExplicitAuthRequiredError | pub |
| 331 | fn | defaultCreateGatewayClient | (private) |
| 332 | type | GatewayRuntimeConfigLoader | (private) |
| 358 | fn | stopGatewayClient | (private) |
| 366 | fn | resolveGatewayClientDisplayName | (private) |
| 379 | fn | loadGatewayConfig | (private) |
| 389 | fn | loadGatewayConfigForConnectionDetails | (private) |
| 403 | fn | resolveGatewayStateDir | (private) |
| 411 | fn | resolveGatewayConfigPath | (private) |
| 419 | fn | resolveGatewayPortValue | (private) |
| 427 | fn | buildGatewayConnectionDetails | pub |
| 475 | fn | isLoopbackGatewayUrl | (private) |
| 486 | fn | shouldOmitDeviceIdentityForGatewayCall | (private) |
| 515 | fn | resolveDeviceIdentityForGatewayCall | (private) |
| 525 | fn | loadStoredOperatorDeviceAuthToken | (private) |
| 542 | fn | hasStoredOperatorDeviceAuthToken | (private) |
| 546 | fn | resolveGatewayCallAuth | (private) |
| 554 | fn | ensureGatewayCallCanAuthenticate | (private) |
| 583 | fn | resolveExplicitGatewayAuth | pub |
| 593 | fn | ensureExplicitGatewayAuth | pub |
| 638 | type | GatewayRemoteSettings | (private) |
| 645 | type | ResolvedGatewayCallContext | (private) |
| 663 | fn | resolveGatewayCallTimeout | (private) |
| 686 | fn | resolveGatewayCallContext | (private) |
| 722 | fn | ensureRemoteModeUrlConfigured | (private) |
| 735 | fn | resolveGatewayCredentials | (private) |
| 742 | fn | resolveGatewayCredentialsWithEnv | (private) |
| 773 | fn | resolveGatewayTlsFingerprint | (private) |
| 802 | fn | formatGatewayCloseError | (private) |
| 825 | fn | formatGatewayTimeoutError | (private) |
| 832 | fn | createGatewayCloseTransportError | (private) |
| 847 | fn | createGatewayTimeoutTransportError | (private) |
| 859 | fn | createGatewayRequestAbortError | (private) |
| 863 | fn | ensureGatewaySupportsRequiredMethods | (private) |
| 892 | fn | isRequiredAgentRuntimeIdentityConnectError | (private) |
| 898 | fn | executeGatewayRequestWithScopes | (private) |
| 938 | fn | cleanup | (private) |
| 947 | fn | stopClientThenSettle | (private) |
| 952 | fn | complete | (private) |
| 965 | fn | stop | (private) |
| 982 | fn | stopAfterAbortHook | (private) |
| 1122 | fn | callGatewayWithScopes | (private) |
| 1238 | fn | buildGatewayProbeConnectionDetails | pub |
| 1277 | fn | callGatewayCli | pub |
| 1288 | fn | callGatewayLeastPrivilege | pub |
| 1295 | fn | callGateway | pub |
| 1320 | fn | randomIdempotencyKey | pub |

## src/gateway/channel-health-monitor.test.ts (860 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | createMockChannelManager | (private) |
| 28 | fn | snapshotWith | (private) |
| 49 | fn | createSnapshotManager | (private) |
| 59 | fn | startDefaultMonitor | (private) |
| 71 | fn | startAndRunCheck | (private) |
| 82 | fn | managedStoppedAccount | (private) |
| 91 | fn | runningConnectedSlackAccount | (private) |
| 103 | fn | disconnectedAccount | (private) |
| 117 | fn | createSlackSnapshotManager | (private) |
| 131 | fn | createBusyDisconnectedManager | (private) |
| 145 | fn | expectRestartedChannel | (private) |
| 156 | fn | expectNoRestart | (private) |
| 163 | fn | expectNoStart | (private) |
| 169 | fn | advanceHealthCheck | (private) |

## src/gateway/chat-abort.test.ts (915 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ChatAbortPayload | (private) |
| 35 | type | CreatedChatAbortOps | (private) |
| 52 | fn | createActiveEntry | (private) |
| 63 | fn | createOps | (private) |
| 120 | fn | createAbortRunFixture | (private) |
| 143 | fn | firstBroadcastPayload | (private) |
| 151 | fn | expectRunAborted | (private) |
| 620 | fn | snap | (private) |

## src/gateway/chat-abort.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ChatAbortControllerEntry | pub |
| 75 | type | RestartRecoveryCandidate | pub |
| 83 | type | RegisteredChatAbortController | (private) |
| 90 | fn | isChatStopCommandText | pub |
| 94 | fn | createChatAbortSignalReason | (private) |
| 106 | fn | resolveChatRunExpiresAtMs | pub |
| 135 | fn | resolveAgentRunExpiresAtMs | pub |
| 150 | fn | registerChatAbortController | pub |
| 171 | fn | cleanup | (private) |
| 238 | fn | normalizeProviderIdForActiveRun | (private) |
| 243 | fn | normalizeActiveAgentId | (private) |
| 264 | fn | resolveInFlightRunSnapshot | pub |
| 344 | fn | boundInFlightRunSnapshotForChatHistory | pub |
| 383 | type | ChatAbortOps | pub |
| 404 | type | TrackedChatRunAbortOps | (private) |
| 417 | fn | abortTrackedChatRunById | pub |
| 436 | fn | resolveChatAbortDeliverySessionKeys | (private) |
| 457 | fn | broadcastChatAborted | (private) |
| 499 | fn | resolveDefaultGlobalAgentId | (private) |
| 504 | fn | isChatAbortControllerEntryAbortable | pub |
| 515 | fn | removeChatAbortControllerEntry | pub |
| 533 | fn | abortChatRunById | pub |
| 617 | fn | updateChatRunProvider | pub |
| 634 | fn | abortChatRunsForProvider | pub |

## src/gateway/chat-attachments.test.ts (594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | ParsedAttachments | (private) |
| 43 | fn | pngAttachment | (private) |
| 53 | fn | pdfAttachment | (private) |
| 63 | fn | oversizedPngBase64 | (private) |
| 70 | fn | parseWithWarnings | (private) |
| 83 | fn | parseTextOnlyAttachments | (private) |
| 98 | fn | cleanupOffloadedRefs | (private) |
| 102 | fn | savedMime | (private) |
| 106 | fn | expectSingleInlinePng | (private) |
| 111 | fn | expectUnsupportedAttachmentReason | (private) |

## src/gateway/chat-display-projection.ts (2146 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | RoleContentMessage | (private) |
| 42 | type | ChatDisplayProjectionOptions | (private) |
| 48 | type | ChatDisplayProjectionResult | (private) |
| 53 | type | PendingMessageToolVisibleReply | (private) |
| 66 | fn | resolveEffectiveChatHistoryMaxChars | pub |
| 73 | fn | truncateChatHistoryText | (private) |
| 87 | fn | isToolHistoryBlockType | (private) |
| 102 | fn | isToolResultHistoryBlockType | (private) |
| 110 | fn | projectToolResultDetails | (private) |
| 148 | fn | messageHasToolResultShape | (private) |
| 180 | fn | extractChatHistoryBlockText | (private) |
| 206 | fn | extractChatHistoryCanvasPreview | (private) |
| 223 | fn | appendCanvasBlockToAssistantHistoryMessage | (private) |
| 268 | fn | messageContainsToolHistoryContent | (private) |
| 292 | fn | augmentChatHistoryWithCanvasBlocks | pub |
| 370 | fn | sanitizeChatHistoryContentBlock | (private) |
| 458 | fn | sanitizeAssistantPhasedContentBlocks | (private) |
| 490 | fn | projectAssistantTextFromMixedToolContent | (private) |
| 523 | fn | toFiniteNumber | (private) |
| 527 | fn | sanitizeCost | (private) |
| 542 | fn | sanitizeUsage | (private) |
| 585 | fn | sanitizeChatHistoryMessage | (private) |
| 728 | fn | extractAssistantTextForSilentCheck | (private) |
| 763 | fn | isAssistantTextContentType | (private) |
| 767 | fn | isAssistantInternalReasoningContentType | (private) |
| 771 | fn | hasAssistantNonTextContent | (private) |
| 787 | fn | hasAssistantDisplayableNonTextContent | (private) |
| 804 | fn | shouldPreserveAssistantControlReplyText | (private) |
| 832 | fn | hasAssistantMixedToolVisibleText | (private) |
| 861 | fn | normalizeToolHistoryType | (private) |
| 866 | fn | parseJsonRecord | (private) |
| 874 | fn | readMaybeJsonRecord | (private) |
| 881 | fn | readToolBlockName | (private) |
| 894 | fn | readToolBlockCallId | (private) |
| 904 | fn | readToolBlockArguments | (private) |
| 921 | fn | hasNonEmptyValue | (private) |
| 934 | fn | hasExplicitMessageToolRoute | (private) |
| 958 | fn | readMessageToolVisibleText | (private) |
| 968 | fn | isDryRunMessageToolRecord | (private) |
| 979 | fn | extractMessageToolVisibleReplies | (private) |
| 1020 | fn | isAssistantSilentControlReplyOnly | (private) |
| 1029 | fn | isRenderableAssistantDisplayMessage | (private) |
| 1037 | fn | readMessageToolResultName | (private) |
| 1046 | fn | readMessageToolResultCallId | (private) |
| 1056 | fn | readToolResultOkValue | (private) |
| 1088 | fn | hasDryRunToolResultValue | (private) |
| 1110 | fn | hasSuppressedToolResultValue | (private) |
| 1144 | fn | isSuccessfulMessageToolResult | (private) |
| 1170 | fn | isSuccessfulMessageToolResultPayload | (private) |
| 1199 | fn | readMessageToolSourceReplySink | (private) |
| 1206 | fn | buildMessageToolVisibleReplyMirror | (private) |
| 1232 | fn | readMessageToolDeliveryMirrorText | (private) |
| 1242 | fn | mirrorMessageToolVisibleReplies | (private) |
| 1253 | fn | clearPending | (private) |
| 1259 | fn | flushSucceededMirrors | (private) |
| 1270 | fn | flushSelectedMirrors | (private) |
| 1373 | fn | shouldDropAssistantHistoryMessage | (private) |
| 1398 | fn | sanitizeChatHistoryMessages | pub |
| 1423 | fn | asRoleContentMessage | (private) |
| 1438 | fn | isEmptyTextOnlyContent | (private) |
| 1465 | fn | hasTranscriptMediaPaths | (private) |
| 1474 | fn | extractProjectedText | (private) |
| 1494 | fn | digestTtsSupplementText | (private) |
| 1498 | fn | readTtsSupplementMarker | (private) |
| 1517 | fn | isAssistantTtsSupplementMessage | (private) |
| 1549 | fn | ttsSupplementMatchesAssistant | (private) |
| 1572 | fn | mergeTtsSupplementContent | (private) |
| 1598 | fn | mergeTtsSupplementMessages | (private) |
| 1631 | fn | isSubagentAnnounceInterSessionUserMessage | (private) |
| 1642 | fn | readChatHistoryRecordTimestampMs | (private) |
| 1652 | fn | isSubagentAnnounceInterSessionUserChatHistoryMessage | (private) |
| 1669 | fn | isChatHistoryAssistantMessage | (private) |
| 1673 | fn | dropPreSessionStartAnnouncePairs | pub |
| 1707 | fn | isSessionsSendInterSessionUserMessage | (private) |
| 1715 | fn | isProjectedSessionsSendForwardedMessage | (private) |
| 1723 | fn | isDisplayHiddenProjectedMessage | (private) |
| 1730 | fn | shouldHideProjectedHistoryMessage | (private) |
| 1761 | fn | isHeartbeatHistoryTurnBoundaryMessage | pub |
| 1770 | fn | attachProjectedTurnBoundary | (private) |
| 1784 | fn | canCarryProjectedTurnBoundary | (private) |
| 1788 | fn | openclawAssistantModel | (private) |
| 1796 | fn | displayTextForDuplicateCheck | (private) |
| 1801 | fn | isDuplicateAcpGatewayInjectedMessage | (private) |
| 1822 | fn | isDuplicateChannelFinalDeliveryMirror | (private) |
| 1854 | fn | toProjectedMessages | (private) |
| 1861 | fn | filterVisibleProjectedHistoryMessages | (private) |
| 1921 | fn | stripInterSessionPromptPrefixFromContent | (private) |
| 1941 | fn | extractPromptPrefixField | (private) |
| 1953 | fn | resolveSessionsSendForwardedSenderLabel | (private) |
| 1962 | fn | projectSessionsSendInterSessionMessages | (private) |
| 1989 | fn | sanitizeAssistantErrorDisplayMessage | (private) |
| 2019 | fn | projectEmptyAssistantErrorMessages | (private) |
| 2089 | fn | projectChatDisplayMessagesWithState | pub |
| 2111 | fn | projectChatDisplayMessages | pub |
| 2118 | fn | limitChatDisplayMessages | (private) |
| 2130 | fn | projectRecentChatDisplayMessages | pub |
| 2140 | fn | projectChatDisplayMessage | pub |

## src/gateway/cli-session-history.claude.ts (602 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ClaudeCliProjectEntry | pub |
| 46 | type | ClaudeCliMessage | (private) |
| 47 | type | ClaudeCliUsage | (private) |
| 48 | type | TranscriptLikeMessage | (private) |
| 49 | type | ToolNameRegistry | (private) |
| 50 | type | ReseedImportState | (private) |
| 55 | fn | resolveHistoryHomeDir | (private) |
| 59 | fn | resolveClaudeProjectsDir | (private) |
| 63 | fn | resolveClaudeCliBindingSessionId | pub |
| 69 | fn | resolveClaudeCliTimestampMs | pub |
| 77 | fn | resolveClaudeCliUsage | (private) |
| 101 | fn | cloneJsonValue | (private) |
| 105 | fn | removeContentBlock | (private) |
| 111 | fn | normalizeClaudeCliContent | (private) |
| 159 | fn | getMessageBlocks | (private) |
| 167 | fn | isAssistantToolCallMessage | (private) |
| 179 | fn | isUserToolResultMessage | (private) |
| 191 | fn | coalesceClaudeCliToolMessages | (private) |
| 229 | type | ClaudeCliPromptTextCandidate | (private) |
| 234 | fn | resolveClaudeCliPromptTextCandidates | pub |
| 264 | fn | parseClaudeCliHistoryEntry | pub |
| 385 | fn | resolveClaudeCliSessionFilePath | (private) |
| 426 | fn | readClaudeCliSessionMessages | pub |
| 483 | type | ClaudeCliCompactBoundaryEntry | (private) |
| 494 | type | ClaudeCliSummaryEntry | (private) |
| 501 | type | ClaudeCliFallbackSeed | pub |
| 506 | fn | isCompactBoundary | (private) |
| 514 | fn | extractCompactBoundaryFallbackText | (private) |
| 519 | fn | extractSummaryText | (private) |
| 527 | fn | readClaudeCliFallbackSeed | pub |

## src/gateway/cli-session-history.test.ts (1321 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ClaudeCliFallbackSeed | (private) |
| 19 | type | AugmentCliHistoryParams | (private) |
| 21 | fn | requireFallbackSeed | (private) |
| 31 | fn | expectFields | (private) |
| 35 | fn | readRecord | (private) |
| 39 | fn | expectCliSessionMarker | (private) |
| 43 | fn | augmentBoundClaudeHistory | (private) |
| 65 | fn | buildLegacyReseedPrompt | (private) |
| 80 | fn | createClaudeHistoryLines | (private) |
| 158 | fn | withClaudeProjectsDir | (private) |
| 241 | fn | importedId | (private) |
| 1054 | fn | readFallbackSeed | (private) |
| 1060 | fn | readFallbackSeedFromHome | (private) |
| 1066 | fn | writeJsonl | (private) |

## src/gateway/client.test.ts (2135 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | waitForFast | (private) |
| 20 | type | MockLoggingConfig | (private) |
| 62 | type | WsEvent | (private) |
| 63 | type | WsEventHandlers | (private) |
| 70 | class | MockWebSocket | (private) |
| 206 | type | GatewayClientModule | (private) |
| 207 | type | GatewayClientInstance | (private) |
| 212 | fn | loadGatewayClientModule | (private) |
| 217 | fn | getLatestWs | (private) |
| 225 | fn | requireRecord | (private) |
| 232 | fn | expectRecordFields | (private) |
| 244 | fn | firstMockArg | (private) |
| 251 | fn | createClientWithIdentity | (private) |
| 270 | fn | expectSecurityConnectError | (private) |
| 1159 | type | ParsedConnectRequest | (private) |
| 1176 | fn | parseConnectRequest | (private) |
| 1184 | fn | connectFrameFrom | (private) |
| 1188 | fn | connectScopesFrom | (private) |
| 1192 | fn | connectRequestFrom | (private) |
| 1221 | fn | emitConnectChallenge | (private) |
| 1231 | fn | startClientAndConnect | (private) |
| 1239 | fn | startClientWithEarlyChallenge | (private) |
| 1351 | fn | emitConnectFailure | (private) |
| 1371 | fn | emitHelloOk | (private) |
| 1385 | fn | expectRetriedConnectAuth | (private) |
| 1404 | fn | expectNoReconnectAfterConnectFailure | (private) |

## src/gateway/config-reload-plan.ts (504 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ChannelKind | pub |
| 19 | type | GatewayReloadPlan | pub |
| 37 | type | ReloadRule | (private) |
| 44 | type | ConfigReloadMetadata | (private) |
| 48 | type | ReloadAction | (private) |
| 59 | type | GatewayReloadPlanOptions | (private) |
| 150 | fn | listReloadRules | (private) |
| 245 | fn | matchRule | (private) |
| 254 | fn | resolveConfigReloadMetadata | pub |
| 261 | fn | isPluginInstallTimestampPath | (private) |
| 267 | fn | getPluginInstallRecords | (private) |
| 281 | fn | listPluginInstallRecordDiffPaths | (private) |
| 303 | fn | listPluginInstallTimestampMetadataPaths | pub |
| 323 | fn | listPluginInstallWholeRecordPaths | pub |
| 338 | fn | extractAccountIdFromPath | (private) |
| 359 | fn | isResolvableChannelAccount | (private) |
| 378 | fn | buildGatewayReloadPlan | pub |
| 402 | fn | applyAction | (private) |

## src/gateway/config-reload.test.ts (5043 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 576 | type | WatcherHandler | (private) |
| 577 | type | WatcherEvent | (private) |
| 580 | fn | createWatcherMock | (private) |
| 603 | fn | makeSnapshot | (private) |
| 627 | fn | makeZeroDebounceHookSnapshot | (private) |
| 645 | fn | makeZeroDebounceHookWrite | (private) |
| 661 | fn | createReloaderHarness | (private) |
| 830 | type | ReloaderHarness | (private) |
| 832 | fn | getOnlyRestartCall | (private) |
| 841 | fn | getOnlyHotReloadCall | (private) |
| 957 | fn | getOnlyPromoteSnapshotCall | (private) |
| 1772 | fn | onNoopConfigCommit | (private) |
| 1842 | fn | onNoopConfigCommit | (private) |
| 1898 | fn | onNoopConfigCommit | (private) |
| 2018 | fn | publishA | (private) |
| 2077 | fn | releaseTail | (private) |
| 2166 | fn | emitWrite | (private) |
| 2775 | fn | releaseRestart | (private) |
| 2776 | fn | noteRestartStarted | (private) |
| 2913 | fn | onUnhandled | (private) |
| 3377 | fn | releaseRestart | (private) |
| 3511 | fn | releasePluginRead | (private) |
| 3566 | fn | releasePluginRead | (private) |
| 3792 | fn | emitSupersedingChange | (private) |
| 3972 | fn | releasePluginRead | (private) |
| 4043 | fn | releasePluginRead | (private) |
| 4623 | fn | startReloaderWithWatchers | (private) |
| 4722 | fn | watchOptions | (private) |
| 4780 | fn | watchOptions | (private) |
| 4859 | fn | watchOptions | (private) |
| 4948 | fn | watchOptions | (private) |

## src/gateway/config-reload.ts (1307 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | resolveChokidarUsePolling | (private) |
| 79 | fn | matchesSkillsInvalidationPrefix | (private) |
| 85 | fn | firstSkillsChangedPath | (private) |
| 89 | fn | isNoopReloadPlan | (private) |
| 105 | type | GatewayConfigReloader | (private) |
| 111 | type | PluginInstallRecords | (private) |
| 113 | type | InProcessConfigCandidate | (private) |
| 123 | type | GatewayConfigReloadTransactionOwnership | pub |
| 134 | type | PreparedGatewayConfigCandidate | (private) |
| 142 | class | GatewayConfigReloadSupersededError | (private) |
| 149 | fn | isGatewayConfigReloadSupersededError | (private) |
| 153 | fn | asPluginInstallConfig | (private) |
| 161 | fn | startGatewayConfigReloader | pub |
| 268 | fn | resolveSettings | (private) |
| 294 | fn | appendExternalAudit | (private) |
| 315 | fn | updateAcceptedSnapshot | (private) |
| 393 | fn | scheduleAfter | (private) |
| 406 | fn | schedule | (private) |
| 409 | fn | prepareRestart | (private) |
| 457 | fn | applySnapshot | (private) |
| 483 | fn | isCurrent | (private) |
| 484 | fn | assertCurrent | (private) |
| 489 | fn | commitPublishedRuntimeEnv | (private) |
| 575 | fn | commitReloadBaseline | (private) |
| 589 | fn | notifyCommitted | (private) |
| 769 | fn | promoteAcceptedSnapshot | (private) |
| 780 | fn | runAcceptedTransaction | (private) |
| 788 | fn | acceptCurrentRuntimeEcho | (private) |
| 821 | fn | promoteAcceptedInProcessWrite | (private) |
| 835 | fn | runReload | (private) |
| 1077 | fn | startTrackedReload | (private) |
| 1088 | fn | scheduleExternalRefresh | (private) |
| 1145 | fn | createWatcher | (private) |
| 1158 | fn | scheduleFromWatcherEvent | (private) |
| 1186 | fn | handleWatcherError | (private) |
| 1232 | fn | reconcileWatchedPaths | (private) |
| 1262 | fn | observeCandidateWatchedPaths | (private) |
| 1267 | fn | acceptWatchedPaths | (private) |

## src/gateway/control-ui-session-prs.test.ts (700 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | GitContext | (private) |
| 15 | fn | githubJson | (private) |
| 22 | fn | requestUrl | (private) |
| 32 | fn | routedFetch | (private) |
| 43 | fn | pullListItem | (private) |
| 63 | fn | resolveGitContext | (private) |
| 84 | fn | evictPullRequestCache | (private) |
| 306 | fn | rateLimitedResponse | (private) |
| 405 | fn | rateLimitedResponse | (private) |
| 471 | fn | git | (private) |

## src/gateway/control-ui-session-prs.ts (616 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | ControlUiSessionPullRequestsParams | pub |
| 40 | type | SessionPullRequestGitContext | (private) |
| 50 | type | PullListItem | (private) |
| 60 | type | CacheEntry | (private) |
| 70 | fn | parseControlUiSessionPullRequestsParams | pub |
| 84 | fn | gitOutput | (private) |
| 100 | fn | resolveSessionPullRequestGitContext | (private) |
| 144 | fn | branchCreateUrl | (private) |
| 168 | fn | untrackedFileAdditions | (private) |
| 194 | fn | untrackedStats | (private) |
| 211 | fn | loadBranchDiffStats | (private) |
| 256 | fn | branchHasCreatablePullRequest | (private) |
| 279 | fn | resolveSessionBranch | (private) |
| 301 | fn | derivePullState | (private) |
| 311 | fn | parsePullListItem | (private) |
| 338 | fn | parsePullList | (private) |
| 345 | fn | pullsByHeadUrl | (private) |
| 352 | fn | fetchParentRepo | (private) |
| 372 | fn | rethrowRateLimit | (private) |
| 378 | fn | fetchDiffCounts | (private) |
| 407 | fn | rollupCheckRuns | (private) |
| 438 | fn | fetchChecks | (private) |
| 455 | fn | finishPullRequest | (private) |
| 486 | fn | fetchBranchPullRequests | (private) |
| 532 | fn | refreshBranchPullRequests | (private) |
| 561 | type | LoadSessionPullRequestDeps | (private) |
| 568 | fn | loadControlUiSessionPullRequests | pub |
| 587 | fn | cachedBranchPullRequests | (private) |

## src/gateway/control-ui.http.test.ts (2855 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | createAvatarConfig | (private) |
| 69 | fn | growAvatarAfterPinnedOpen | (private) |
| 78 | fn | withControlUiRoot | (private) |
| 91 | fn | parseBootstrapPayload | (private) |
| 110 | fn | responseBody | (private) |
| 114 | fn | responseJson | (private) |
| 118 | fn | firstEndCallLength | (private) |
| 122 | fn | expectNotFoundResponse | (private) |
| 132 | fn | runControlUiRequest | (private) |
| 152 | fn | runBootstrapConfigRequest | (private) |
| 181 | fn | runAvatarRequest | (private) |
| 210 | fn | runAssistantMediaRequest | (private) |
| 237 | fn | createTrustedProxyAuth | (private) |
| 247 | fn | createTrustedProxyHeaders | (private) |
| 258 | fn | runTrustedProxyAssistantMediaRequest | (private) |
| 273 | fn | runTrustedProxyAvatarRequest | (private) |
| 290 | fn | expectMissingOperatorReadResponse | (private) |
| 311 | fn | writeAssetFile | (private) |
| 319 | fn | createHardlinkedAssetFile | (private) |
| 326 | fn | withAllowedAssistantMediaRoot | (private) |
| 338 | fn | withBasePathRootFixture | (private) |
| 355 | fn | withPairedOperatorDeviceToken | (private) |
| 402 | fn | withScopedPairedOperatorDevice | (private) |

## src/gateway/control-ui.ts (1188 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 99 | type | ControlUiRequestOptions | (private) |
| 111 | type | ControlUiRootState | pub |
| 128 | fn | rewriteControlUiIndexHtmlPublicAssetHrefs | (private) |
| 142 | fn | escapeHtmlAttribute | (private) |
| 151 | type | ControlUiAvatarMeta | (private) |
| 158 | fn | controlUiAvatarResolutionMeta | (private) |
| 173 | fn | applyControlUiSecurityHeaders | (private) |
| 186 | fn | sendJson | (private) |
| 193 | fn | respondControlUiAssetsUnavailable | (private) |
| 208 | fn | isValidAgentId | (private) |
| 212 | fn | normalizeAssistantMediaSource | (private) |
| 230 | fn | resolveAssistantMediaRoutePath | (private) |
| 236 | fn | resolveAssistantMediaAuthToken | (private) |
| 254 | fn | resolveControlUiReadAuthToken | (private) |
| 268 | fn | authorizeControlUiReadRequest | (private) |
| 376 | fn | authorizeControlUiDeviceReadToken | (private) |
| 403 | fn | resolveControlUiDeviceReadTokenScopes | (private) |
| 418 | type | AssistantMediaAvailability | (private) |
| 422 | type | AssistantMediaTicketPayload | (private) |
| 428 | fn | signAssistantMediaTicketPayload | (private) |
| 434 | fn | createAssistantMediaTicket | (private) |
| 456 | fn | verifyAssistantMediaTicket | (private) |
| 489 | fn | classifyAssistantMediaError | (private) |
| 534 | fn | resolveAssistantMediaAvailability | (private) |
| 549 | fn | handleControlUiAssistantMediaRequest | pub |
| 611 | fn | closeOpenedHandle | (private) |
| 646 | fn | finishClose | (private) |
| 669 | fn | handleControlUiAvatarRequest | pub |
| 769 | fn | serveResolvedIndexHtml | (private) |
| 799 | fn | isExpectedSafePathError | (private) |
| 805 | fn | resolveSafeControlUiFile | (private) |
| 829 | fn | isSafeRelativePath | (private) |
| 886 | fn | matchesControlUiBootstrapConfigPath | (private) |
| 904 | fn | handleControlUiHttpRequest | pub |
| 1028 | fn | rootReal | (private) |
| 1046 | fn | rel | (private) |

## src/gateway/conversation-turn.test.ts (644 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | sentResult | (private) |
| 52 | fn | createDeps | (private) |
| 148 | fn | persistIntent | (private) |

## src/gateway/credentials.test.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | cfg | (private) |
| 14 | type | ResolveFromConfigInput | (private) |
| 15 | type | GatewayConfig | (private) |
| 16 | type | ResolveFromConfigOverrides | (private) |
| 26 | fn | envSecretRef | (private) |
| 30 | fn | cfgWithDefaultEnvSecretProvider | (private) |
| 41 | fn | resolveGatewayCredentialsWithEmptyEnv | (private) |
| 52 | fn | resolveGatewayCredentialsFor | (private) |
| 63 | fn | resolveLocalGatewayCredentials | (private) |
| 67 | fn | expectEnvGatewayCredentials | (private) |
| 74 | fn | expectNoGatewayCredentials | (private) |
| 81 | fn | expectRemoteGatewayCredentials | (private) |
| 88 | fn | resolveGatewayCredentialsFromDefaultValues | (private) |
| 99 | fn | resolveRemoteModeWithRemoteCredentials | (private) |
| 110 | fn | resolveLocalModeWithUnresolvedPassword | (private) |
| 122 | fn | expectUnresolvedLocalAuthSecretRefFailure | (private) |
| 429 | fn | createRemoteConfigWithMissingLocalTokenRef | (private) |

## src/gateway/embeddings-http.test.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | readJsonBody | (private) |
| 57 | fn | startGenericEmbeddingServer | (private) |
| 164 | fn | postEmbeddings | (private) |
| 177 | fn | expectDefaultEmbeddingResponse | (private) |
| 188 | fn | expectEmbeddingData | (private) |
| 199 | fn | expectInvalidEmbeddingRequest | (private) |
| 212 | fn | expectGenericProviderEmbeddingRequest | (private) |
| 228 | fn | latestCreateEmbeddingProviderOptions | (private) |
| 242 | fn | latestCreateGenericEmbeddingProviderOptions | (private) |

## src/gateway/exec-approval-ios-push.ts (550 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | GatewayLikeLogger | (private) |
| 45 | type | ApprovalPushTarget | (private) |
| 50 | type | DeliveryTarget | (private) |
| 55 | type | DeliveryPlan | (private) |
| 61 | type | ApprovalDeliveryState | (private) |
| 66 | type | ApprovalPushSendResult | (private) |
| 72 | type | ApprovalPushSender | (private) |
| 78 | type | ApprovalRequestLike | (private) |
| 79 | type | ApprovalResolvedLike | (private) |
| 97 | fn | isIosPlatform | (private) |
| 102 | fn | resolveActiveOperatorToken | (private) |
| 110 | fn | canReceiveApprovalRequests | (private) |
| 122 | fn | shouldTargetDevice | (private) |
| 138 | fn | loadRegisteredTargets | (private) |
| 147 | fn | resolvePairedTargets | (private) |
| 173 | fn | resolveDeliveryPlan | (private) |
| 241 | fn | clearStaleApnsRegistrationIfNeeded | (private) |
| 259 | fn | sendRequestedPushes | (private) |
| 283 | fn | sendApprovalPushes | (private) |
| 328 | fn | sendResolvedPushes | (private) |
| 352 | fn | createApprovalIosPushDelivery | (private) |
| 465 | fn | createExecApprovalIosPushDelivery | pub |
| 507 | fn | createPluginApprovalIosPushDelivery | pub |

## src/gateway/exec-approval-manager.test.ts (1023 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | TimeoutCallback | (private) |
| 28 | type | GetOperatorApprovalParams | (private) |
| 30 | fn | getOperatorApproval | (private) |
| 34 | type | MockTimerHandle | (private) |
| 49 | fn | createPersistentManager | (private) |
| 73 | fn | installTimerMocks | (private) |
| 95 | fn | runTimer | (private) |

## src/gateway/exec-approval-manager.ts (1170 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | unrefTimer | (private) |
| 36 | fn | unref | (private) |
| 42 | fn | scheduleResolvedEntryCleanup | (private) |
| 50 | fn | resolveApprovalTimeoutMs | (private) |
| 59 | class | InvalidApprovalIdError | pub |
| 71 | type | ExecApprovalRequestPayload | (private) |
| 76 | type | ExecApprovalResolutionSource | (private) |
| 103 | type | OperatorApprovalPersistenceRuntime | (private) |
| 126 | type | OperatorApprovalLifecycleEvent | pub |
| 145 | type | ExecApprovalDurableLookup | (private) |
| 161 | type | ExecApprovalIdLookupResult | pub |
| 166 | fn | readRequestString | (private) |
| 174 | fn | resolveApprovalSource | (private) |
| 185 | fn | normalizeAllowedDecisions | (private) |
| 204 | fn | attachLiveRecord | (private) |
| 221 | class | ExecApprovalManager | pub |

## src/gateway/gateway-acp-bind.live.test.ts (1097 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | LiveAcpAgent | (private) |
| 57 | fn | snapshotAcpBindLiveEnv | (private) |
| 61 | fn | resolveLiveTimeoutMs | (private) |
| 66 | fn | createSlackCurrentConversationBindingRegistry | (private) |
| 94 | fn | normalizeAcpAgent | (private) |
| 111 | fn | extractAssistantTexts | (private) |
| 129 | fn | createAcpProbePhrase | (private) |
| 133 | fn | createAcpSinglePhrasePrompt | (private) |
| 137 | fn | createAcpRecallPrompt | (private) |
| 141 | fn | extractSpawnedAcpSessionKey | (private) |
| 151 | fn | getFreeGatewayPort | (private) |
| 159 | fn | logLiveStep | (private) |
| 163 | fn | shouldRequireCronMcpProbe | (private) |
| 167 | fn | normalizeOpenAiModelRef | (private) |
| 175 | fn | resolveLiveParentModel | (private) |
| 183 | fn | resolveModelObject | (private) |
| 189 | fn | prepareCodexHomeForLiveBindTest | (private) |
| 240 | fn | waitForGatewayPort | (private) |
| 254 | fn | finish | (private) |
| 272 | fn | connectClient | (private) |
| 286 | fn | isRetryableAcpBindWarmupText | (private) |
| 329 | fn | formatAssistantTextPreview | (private) |
| 340 | fn | bindConversationAndWait | (private) |
| 422 | fn | waitForAgentRunOk | (private) |
| 442 | fn | sendChatAndWait | (private) |
| 471 | fn | waitForAssistantText | (private) |
| 510 | fn | waitForAssistantTurn | (private) |
| 544 | fn | pollCronJobVisibleViaCli | (private) |

## src/gateway/gateway-acp-spawn-defaults.live.test.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | snapshotAcpSpawnDefaultsLiveEnv | (private) |
| 51 | fn | resolvePositiveInteger | (private) |
| 56 | fn | resolveSubagentModel | (private) |
| 60 | fn | resolveThinking | (private) |
| 64 | fn | resolveHarnessReasoningEffort | (private) |
| 78 | fn | resolveHarnessBaselineReasoningEffort | (private) |
| 82 | fn | findRuntimeConfigOption | (private) |
| 95 | fn | resolveHarnessModel | (private) |
| 99 | fn | resolveAcpAgentId | (private) |
| 103 | fn | resolveAcpAgentCommand | (private) |
| 118 | fn | prepareCodexHomeForLiveSpawnDefaultsTest | (private) |
| 159 | fn | waitForGatewayPort | (private) |
| 170 | fn | finish | (private) |
| 188 | fn | getFreeGatewayPort | (private) |
| 196 | fn | waitForAcpBackendReady | (private) |
| 213 | fn | waitForSessionEntry | (private) |
| 231 | fn | runOpenCodeThinkingControlProof | (private) |
| 281 | fn | runCodexThinkingControlProof | (private) |
| 348 | fn | createConfig | (private) |

## src/gateway/gateway-cli-backend.live-helpers.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | BootstrapWorkspaceContext | pub |
| 40 | type | SystemPromptReport | pub |
| 44 | type | CliBackendLiveModelSelection | pub |
| 52 | type | CliBackendLiveEnvSnapshot | pub |
| 71 | type | CliBackendLiveProviderSkipDecision | pub |
| 76 | type | ClaudeCliResumeContinuityProbe | pub |
| 85 | fn | normalizeCliRuntimeModelTarget | (private) |
| 99 | fn | resolveCliBackendLiveModelSelection | pub |
| 139 | fn | parseJsonStringArray | pub |
| 151 | fn | parseImageMode | pub |
| 162 | fn | shouldRunCliImageProbe | pub |
| 170 | fn | shouldRunCliMcpProbe | pub |
| 178 | fn | resolveCliBackendLiveArgs | pub |
| 201 | fn | resolveCliModelSwitchProbeTarget | pub |
| 216 | fn | shouldRunCliModelSwitchProbe | pub |
| 224 | fn | shouldAllowCliBackendLiveProviderSkip | pub |
| 233 | fn | resolveCliBackendLiveProviderSkipDecision | pub |
| 251 | fn | isCliBackendLiveTimeoutPayload | pub |
| 259 | fn | shouldRetryCliBackendLiveTimeout | pub |
| 272 | fn | matchesCliBackendReply | pub |
| 284 | fn | buildClaudeCliResumeContinuityProbe | pub |
| 305 | fn | resolveImportedClaudeCliSessionId | pub |
| 322 | fn | withClaudeMcpConfigOverrides | pub |
| 333 | fn | getFreeGatewayPort | pub |
| 340 | fn | createBootstrapWorkspace | pub |
| 362 | fn | shouldRetryCliCronMcpProbeReply | pub |
| 411 | fn | connectTestGatewayClient | pub |
| 454 | fn | connectClientOnce | (private) |
| 468 | fn | finish | (private) |
| 485 | fn | failWithClose | (private) |
| 541 | fn | isRetryableGatewayConnectError | (private) |
| 552 | fn | snapshotCliBackendLiveEnv | pub |
| 570 | fn | applyCliBackendLiveEnv | pub |
| 586 | fn | restoreCliBackendLiveEnv | pub |
| 602 | fn | restoreEnvVar | (private) |
| 610 | fn | ensurePairedTestGatewayClientIdentity | pub |

## src/gateway/gateway-cli-backend.live.test.ts (819 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | fn | parsePositiveIntegerEnv | (private) |
| 105 | fn | logCliBackendLiveStep | (private) |
| 113 | fn | sleep | (private) |
| 119 | type | CliBackendAgentAttemptTimeouts | (private) |
| 124 | fn | resolveCliBackendAgentAttemptTimeouts | (private) |
| 132 | fn | openAiProviderConfigForCodexCli | (private) |
| 155 | fn | isProviderCapacityError | (private) |
| 164 | fn | requestWithProviderCapacityRetry | (private) |
| 215 | fn | requestWithCodexTimeoutRetry | (private) |
| 245 | fn | createMcpSchemaProbePlugin | (private) |

## src/gateway/gateway-codex-bind.live.test.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | CapturedOutboundReply | (private) |
| 54 | fn | resolveLiveTimeoutMs | (private) |
| 59 | fn | logCodexBindStep | (private) |
| 63 | fn | createSlackCurrentConversationBindingRegistry | (private) |
| 119 | fn | extractAssistantTexts | (private) |
| 136 | fn | formatAssistantTextPreview | (private) |
| 144 | fn | waitForOutboundText | (private) |
| 177 | fn | waitForAgentRunOk | (private) |
| 198 | fn | sendChatAndWait | (private) |
| 234 | fn | waitForAssistantText | (private) |
| 274 | fn | resolveCodexPluginRoot | (private) |
| 292 | fn | resolveBoundSessionKey | (private) |
| 310 | fn | writePluginBindingApproval | (private) |
| 340 | fn | writeGatewayConfig | (private) |
| 386 | fn | resolveCodexBindModelProvider | (private) |
| 513 | fn | sendCodexCommand | (private) |

## src/gateway/gateway-codex-harness.live-helpers.test.ts (1115 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | includesExpectedCodexModelsCommandText | (private) |
| 25 | fn | shellSingleQuote | (private) |
| 27 | fn | expectExpectedCodexModelsCommandText | (private) |
| 31 | fn | expectRecognizedCodexModelsCommandText | (private) |
| 36 | fn | expectStrictCodexModelsCommandText | (private) |
| 573 | fn | resultOnlyMessage | (private) |

## src/gateway/gateway-codex-harness.live-helpers.ts (624 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 87 | fn | shouldUseCodexHarnessSubagentOnlyFastPath | pub |
| 111 | type | CodexHarnessToolEventData | (private) |
| 121 | fn | readCodexHarnessToolEventData | (private) |
| 129 | fn | summarizeNativeCommandResult | (private) |
| 150 | fn | shellArgvMatches | (private) |
| 154 | fn | isExpectedNativeCommand | pub |
| 168 | fn | buildCodexHarnessLargeOutputCommand | pub |
| 185 | fn | requireSuccessfulNativeCommandExecution | pub |
| 349 | fn | isExpectedCodexStatusCommandText | pub |
| 410 | fn | isExpectedCodexModelsCommandText | pub |
| 551 | fn | isUnavailableCodexModelsCommandText | (private) |
| 593 | fn | isStrictExpectedCodexModelsCommandText | pub |
| 598 | fn | isRetryableCodexHarnessLiveError | pub |
| 606 | fn | isExpectedYieldedAgentTimeout | pub |

## src/gateway/gateway-codex-harness.live.test.ts (2013 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 158 | type | CapturedAgentEvent | (private) |
| 168 | type | GuardianPluginApprovalDecision | (private) |
| 169 | type | CodexHarnessThinkingLevel | (private) |
| 179 | fn | resolveLiveTimeoutMs | (private) |
| 184 | fn | resolveBoundedPositiveIntEnv | (private) |
| 204 | fn | resolveCodexHarnessThinkingLevel | (private) |
| 212 | fn | resolveCodexHarnessExpectedEffort | (private) |
| 244 | fn | logCodexLiveStep | (private) |
| 252 | fn | isCodexAccountTokenError | (private) |
| 256 | fn | subscribeCodexLiveDebugEvents | (private) |
| 273 | fn | snapshotEnv | (private) |
| 277 | fn | restoreEnv | (private) |
| 281 | fn | getFreeGatewayPort | (private) |
| 298 | fn | createLiveWorkspace | (private) |
| 313 | fn | removeLiveTempDir | (private) |
| 338 | fn | parseModelKey | (private) |
| 347 | fn | assertCodexHarnessSessionSelection | (private) |
| 373 | fn | readCodexHarnessSessionUsageFreshness | (private) |
| 404 | fn | assertCodexHarnessTranscriptModelIdentity | (private) |
| 425 | fn | writeLiveGatewayConfig | (private) |
| 509 | fn | requestAgentTextWithEvents | (private) |
| 566 | fn | requestAgentText | (private) |
| 583 | fn | recordCodexAttemptIdentity | (private) |
| 626 | fn | verifyCodexCodeModeOnlyDynamicToolProbe | (private) |
| 659 | fn | requestCodexCommandText | (private) |
| 701 | fn | waitForChatFinalText | (private) |
| 719 | fn | waitForChatAgentRunOk | (private) |
| 735 | fn | extractChatFinalText | (private) |
| 765 | fn | readCodexAppServerPluginApprovalId | (private) |
| 785 | fn | extractAssistantTexts | (private) |
| 802 | fn | formatAssistantTextPreview | (private) |
| 814 | fn | readCodexHarnessCompactionCount | (private) |
| 835 | fn | verifyCodexCompactionStress | (private) |
| 944 | fn | waitForAssistantText | (private) |
| 979 | fn | normalizeAssistantTokenText | (private) |
| 983 | fn | verifyCodexImageProbe | (private) |
| 1036 | fn | verifyCodexChatImageProbe | (private) |
| 1076 | fn | randomBitmapTextToken | (private) |
| 1082 | fn | findGuardianReviewStatus | (private) |
| 1088 | fn | hasGuardianReviewEvents | (private) |
| 1092 | fn | assertGuardianReviewCompleted | (private) |
| 1113 | fn | assertPluginApprovalResolved | (private) |
| 1124 | fn | verifyCodexGuardianProbe | (private) |
| 1216 | fn | verifyCodexCronMcpProbe | (private) |
| 1288 | fn | waitForCodexSubagentStarted | (private) |
| 1314 | fn | verifyCodexSubagentProbe | (private) |
| 1463 | fn | verifyCodexNativeSubagentBridgeProbe | (private) |
| 1506 | fn | listCodexNativeTasks | (private) |
| 1512 | fn | findDeliveredCodexNativeTask | (private) |

## src/gateway/gateway-misc.test.ts (1152 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | makeControlUiResponse | (private) |
| 98 | fn | withControlUiRoot | (private) |
| 114 | fn | expectControlUiStatus | (private) |
| 130 | fn | startGatewayClient | (private) |
| 136 | fn | expectNoGatewayClientAgent | (private) |
| 141 | fn | setCorporateNoProxy | (private) |
| 146 | fn | setGatewayOnlyProxyEnv | (private) |
| 151 | fn | registerGatewayOnlyProxy | (private) |
| 269 | type | TestSocket | (private) |
| 275 | type | EventFrame | (private) |
| 282 | type | RecordingSocket | (private) |
| 286 | fn | makeRecordingSocket | (private) |
| 298 | fn | makeGatewayWsClient | (private) |
| 311 | fn | makeOperatorWsClient | (private) |
| 318 | fn | makeOperatorWsClients | (private) |
| 326 | fn | makeReadPairClients | (private) |
| 336 | fn | makeScopedBroadcastClients | (private) |
| 356 | fn | makeScopedBroadcastContext | (private) |
| 364 | fn | sentEvents | (private) |
| 368 | fn | expectSentEvents | (private) |
| 372 | fn | sentEventSeq | (private) |
| 376 | fn | chatPayload | (private) |
| 380 | fn | chatSideResultPayload | (private) |
| 384 | fn | broadcastChatClassEvents | (private) |
| 903 | fn | sendEvent | (private) |
| 964 | fn | sendEvent | (private) |
| 978 | fn | expectAllowed | (private) |
| 984 | fn | expectDenied | (private) |
| 990 | fn | expectDangerousCommandsDenied | (private) |

## src/gateway/gateway-models.profiles.live.test.ts (5926 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | ProviderThinkingModelCompat | (private) |
| 106 | type | GatewayLiveThinkingLevel | (private) |
| 166 | fn | parseFilter | (private) |
| 181 | fn | providerFilterList | (private) |
| 187 | fn | listHighSignalLiveModelProviders | (private) |
| 193 | fn | providerListFromExplicitModelFilter | (private) |
| 213 | fn | providerScopedModelRegistryProviders | (private) |
| 241 | fn | filterGatewayLiveModelRefsByProvider | (private) |
| 254 | fn | resolvePrioritizedGatewayLiveModelRefs | (private) |
| 272 | fn | isWantedSmallGatewayLiveModel | (private) |
| 282 | fn | shouldSuppressGatewayLiveOllamaWarnings | (private) |
| 286 | fn | withSuppressedGatewayLiveWarnings | (private) |
| 304 | fn | toInt | (private) |
| 313 | fn | resolveGatewayLiveSetupTimeoutMs | (private) |
| 319 | fn | resolveGatewayLiveMaxModels | (private) |
| 337 | fn | resolveGatewayLiveSuiteTimeoutMs | (private) |
| 352 | fn | resolveGatewayLiveModelTimeoutMs | (private) |
| 361 | fn | resolveGatewayLiveSessionControlTimeoutMs | (private) |
| 368 | fn | resolveGatewayLiveTranscriptTimeoutMs | (private) |
| 375 | fn | resolveGatewayLiveAgentRunTimeoutMs | (private) |
| 385 | fn | resolveGatewayLiveAgentWaitTimeoutMs | (private) |
| 393 | fn | resolveGatewayLiveProviderTimeoutSeconds | (private) |
| 399 | fn | isGatewayLiveProbeTimeout | (private) |
| 403 | fn | isGatewayLiveModelTimeout | (private) |
| 411 | fn | assertGatewayLiveDidNotSkipAllDueToTimeout | (private) |
| 429 | fn | assertGatewayLiveCompletedSomeModels | (private) |
| 450 | fn | formatGatewayLiveFilterSet | (private) |
| 457 | fn | assertGatewayLiveSelectedSomeModels | (private) |
| 485 | fn | assertGatewayLiveHasRunnableCandidates | (private) |
| 499 | fn | failGatewayLiveStartupCoverage | (private) |
| 505 | fn | withGatewayLiveTimeout | (private) |
| 547 | fn | withGatewayLiveSetupTimeout | (private) |
| 560 | fn | withGatewayLiveProbeTimeout | (private) |
| 569 | fn | withGatewayLiveSessionControlTimeout | (private) |
| 581 | fn | withGatewayLiveModelTimeout | (private) |
| 590 | fn | logProgress | (private) |
| 594 | fn | enterProductionEnvForLiveRun | (private) |
| 606 | fn | restoreProductionEnvForLiveRun | (private) |
| 628 | fn | restoreOptionalEnv | (private) |
| 636 | fn | formatFailurePreview | (private) |
| 653 | fn | assertNoReasoningTags | (private) |
| 670 | fn | isMeaningful | (private) |
| 688 | fn | hasEventLoopPromptKeywords | (private) |
| 692 | fn | shouldStripAssistantScaffoldingForLiveModel | (private) |
| 717 | fn | maybeStripAssistantScaffoldingForLiveModel | (private) |
| 724 | fn | stripKnownLiveReasoningWrappers | (private) |
| 731 | fn | shouldSkipExecReadNonceMissForLiveModel | (private) |
| 746 | fn | shouldSkipEmptyResponseForLiveModel | (private) |
| 1165 | fn | restoreEnvValue | (private) |
| 1207 | fn | createGatewayLiveTestModel | (private) |
| 1227 | fn | resolveExplicitLiveFallbackApi | (private) |
| 1233 | fn | resolveDefaultBedrockLiveBaseUrl | (private) |
| 1249 | fn | resolveBedrockDiscoveryRegion | (private) |
| 1262 | fn | isRecord | (private) |
| 1266 | fn | resolveAwsProfileRegion | (private) |
| 1288 | fn | resolveAwsSharedFilePath | (private) |
| 1306 | fn | readAwsProfileRegionFromFile | (private) |
| 1321 | fn | parseAwsProfileRegion | (private) |
| 1354 | fn | stripAwsSharedIniComment | (private) |
| 1358 | fn | normalizeAwsProfileSection | (private) |
| 1369 | fn | normalizeOptionalEnvValue | (private) |
| 1383 | fn | createExplicitLiveFallbackModel | (private) |
| 1391 | fn | createGatewayLiveTestRegistry | (private) |
| 2315 | fn | isGoogleModelNotFoundText | (private) |
| 2335 | fn | isAnthropicModelUnavailableDrift | (private) |
| 2346 | fn | isGoogleishProvider | (private) |
| 2350 | fn | isRefreshTokenReused | (private) |
| 2354 | fn | isAccountIdExtractionError | (private) |
| 2358 | fn | isChatGPTUsageLimitErrorMessage | (private) |
| 2363 | fn | isOllamaUnavailableErrorMessage | (private) |
| 2372 | fn | isAudioOnlyModelErrorMessage | (private) |
| 2376 | fn | isUnsupportedReasoningEffortErrorMessage | (private) |
| 2383 | fn | isUnsupportedThinkingToggleErrorMessage | (private) |
| 2387 | fn | isInstructionsRequiredError | (private) |
| 2391 | fn | isOpenAIReasoningSequenceError | (private) |
| 2396 | fn | isToolNonceRefusal | (private) |
| 2400 | fn | isToolNonceProbeMiss | (private) |
| 2405 | fn | isTransientToolReadProbeErrorForLiveModel | (private) |
| 2421 | fn | isExecReadNonceProbeMiss | (private) |
| 2425 | fn | isPromptProbeMiss | (private) |
| 2430 | fn | shouldSkipToolNonceProbeMissForLiveModel | (private) |
| 2457 | fn | shouldRetryToolNonceProbeMissForLiveModel | (private) |
| 2617 | fn | isMissingProfileError | (private) |
| 2621 | fn | isEmptyStreamText | (private) |
| 2628 | fn | buildAnthropicRefusalToken | (private) |
| 2633 | fn | runAnthropicRefusalProbe | (private) |
| 2681 | fn | randomImageProbeCode | (private) |
| 2694 | fn | editDistance | (private) |
| 2726 | fn | getFreeGatewayPort | (private) |
| 2732 | fn | ok | (private) |
| 2742 | fn | sleep | (private) |
| 2748 | fn | sanitizeAuthProfileStoreForLiveGateway | (private) |
| 2800 | fn | connectClient | (private) |
| 2830 | fn | connectClientOnce | (private) |
| 2834 | fn | stop | (private) |
| 2869 | fn | isRetryableGatewayConnectError | (private) |
| 2927 | fn | extractTranscriptMessageText | (private) |
| 2957 | type | SessionAssistantEntry | (private) |
| 2962 | fn | readSessionMessagesForLiveProbe | (private) |
| 2981 | fn | sessionMessagesAfterNextUserTurn | (private) |
| 2999 | fn | matchesLiveProbeUserText | (private) |
| 3013 | fn | sessionAssistantEntriesForLiveProbe | (private) |
| 3038 | fn | readSessionAssistantEntries | (private) |
| 3054 | fn | readSessionAssistantTexts | (private) |
| 3065 | fn | assertGatewayLiveSessionSelection | (private) |
| 3092 | fn | assertGatewayLiveTranscriptModelIdentity | (private) |
| 3109 | fn | verifyGatewayUltraSubagentHandoff | (private) |
| 3205 | fn | latestAssistantTextAfterBaseline | (private) |
| 3215 | fn | latestTerminalAssistantTextAfterBaseline | (private) |
| 3333 | fn | waitForSessionAssistantText | (private) |
| 3378 | fn | formatGatewayLiveAgentWaitFailure | (private) |
| 3409 | fn | isGatewayAgentWaitCompletedWithoutReply | (private) |
| 3418 | fn | waitForGatewayAgentRun | (private) |
| 3449 | fn | requestGatewayAgentText | (private) |
| 3556 | type | GatewayModelSuiteParams | (private) |
| 3567 | type | OpenAIUltraWireObservation | (private) |
| 3572 | type | OpenAIUltraWireCapture | (private) |
| 3578 | fn | isOpenAIGpt56UltraTarget | (private) |
| 3588 | fn | readOpenAIUltraWireObservation | (private) |
| 3605 | fn | startOpenAIUltraWireCapture | (private) |
| 3618 | fn | abortUpstream | (private) |
| 3619 | fn | abortOnPrematureResponseClose | (private) |
| 3720 | fn | finish | (private) |
| 3745 | fn | listenOnLoopbackForUltraWireTest | (private) |
| 3759 | fn | closeUltraWireTestServer | (private) |
| 3847 | fn | buildOpenAIUltraWireProviderOverride | (private) |
| 3871 | fn | assertOpenAIUltraWireEffort | (private) |
| 3891 | type | LiveModelRegistry | (private) |
| 3893 | fn | toGatewayLiveModel | (private) |
| 3927 | fn | loadProviderScopedConfiguredModels | (private) |
| 3969 | fn | loadProviderScopedModels | (private) |
| 3976 | fn | createStaticLiveModelRegistry | (private) |
| 3999 | fn | loadAuthBackedLiveModelRegistry | (private) |
| 4044 | fn | toLiveModelConfig | (private) |
| 4059 | fn | mergeLiveProviderConfig | (private) |
| 4094 | fn | buildLiveProviderConfigs | (private) |
| 4111 | fn | buildLiveProviderConfig | (private) |
| 4136 | fn | parseExplicitLiveModelRef | (private) |
| 4161 | fn | resolveExplicitLiveModelCandidates | (private) |
| 4195 | fn | resolveGatewayLiveModelThinkingLevel | (private) |
| 4253 | fn | getProviderThinkingModelCompat | (private) |
| 4276 | fn | resolveGatewayLiveThinkingLevel | (private) |
| 4284 | fn | resolveGatewayLiveRequestedModels | (private) |
| 4323 | fn | isGatewayLiveThinkingLevel | (private) |
| 4327 | fn | buildLiveGatewayConfig | (private) |
| 4401 | fn | sanitizeAuthConfig | (private) |
| 4452 | fn | buildMinimaxProviderOverride | (private) |
| 4468 | fn | runGatewayModelSuite | (private) |

## src/gateway/gateway-trajectory-export.live.test.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | TrajectoryExportApprovalEntry | (private) |
| 49 | type | TrajectoryExportApprovalSummary | (private) |
| 54 | type | TrajectoryExportSignal | (private) |
| 59 | fn | logLiveStep | (private) |
| 67 | fn | snapshotEnv | (private) |
| 71 | fn | restoreEnv | (private) |
| 75 | fn | removeLiveTempDir | (private) |
| 96 | fn | writeLiveGatewayConfig | (private) |
| 125 | fn | connectGatewayClient | (private) |
| 146 | fn | requestAgentExactReply | (private) |
| 174 | fn | listDirectoryNames | (private) |
| 182 | fn | waitForPath | (private) |
| 197 | fn | formatTextPreview | (private) |
| 205 | fn | findTrajectoryExportInstructionText | (private) |
| 215 | fn | extractAssistantTexts | (private) |
| 232 | fn | getTrajectoryExportApprovalCommands | (private) |
| 245 | fn | hasTrajectoryExportArgv | (private) |
| 252 | fn | isTrajectoryExportApproval | (private) |
| 265 | fn | summarizeTrajectoryExportApproval | (private) |
| 277 | fn | waitForTrajectoryExportSignal | (private) |
| 359 | fn | extractChatFinalText | (private) |
| 374 | fn | extractChatFinalRecordText | (private) |
| 382 | fn | extractVisibleMessageText | (private) |
| 409 | fn | approveTrajectoryExport | (private) |

## src/gateway/gateway.test.ts (930 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | nextGatewayId | (private) |
| 56 | fn | createEmptyBundledPluginsDir | (private) |
| 62 | fn | createGatewayConfigPath | (private) |
| 68 | fn | removeGatewayTempHome | (private) |
| 77 | fn | startLoopbackTokenGateway | (private) |
| 88 | fn | writeWorkspacePlugin | (private) |
| 112 | fn | readCounterWithRetry | (private) |
| 142 | fn | setupGatewayTempHome | (private) |
| 171 | fn | resetGatewayTestState | (private) |

## src/gateway/hooks-mapping.test.ts (681 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | expectSkippedTransformResult | (private) |
| 29 | fn | createGmailAgentMapping | (private) |
| 45 | fn | applyGmailMappings | (private) |
| 55 | fn | expectAgentMessage | (private) |
| 66 | fn | expectBlockedPrototypeTraversal | (private) |
| 89 | fn | applyNullTransformFromTempConfig | (private) |
| 122 | fn | applyGmailTransformSessionKey | (private) |
| 156 | fn | expectAgentSessionKey | (private) |

## src/gateway/hooks-mapping.ts (570 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | HookMappingResolved | pub |
| 35 | type | HookMappingTransformResolved | (private) |
| 40 | type | HookMappingContext | (private) |
| 47 | type | HookAction | (private) |
| 70 | type | HookSessionKeyTemplateSource | (private) |
| 72 | type | HookMappingResult | (private) |
| 94 | type | HookTransformResult | (private) |
| 113 | type | HookTransformFn | (private) |
| 118 | fn | resolveHookMappings | pub |
| 159 | fn | applyHookMappings | pub |
| 197 | fn | normalizeHookMapping | (private) |
| 236 | fn | mappingMatches | (private) |
| 251 | fn | buildActionFromMapping | (private) |
| 288 | fn | mergeAction | (private) |
| 329 | fn | validateAction | (private) |
| 342 | fn | getSessionKeyTemplateSource | (private) |
| 352 | fn | resolveMergedSessionKeySource | (private) |
| 368 | fn | hasHookTemplateExpressions | pub |
| 372 | fn | loadTransform | (private) |
| 384 | fn | resolveTransformFn | (private) |
| 396 | fn | resolvePath | (private) |
| 403 | fn | escapesBase | (private) |
| 408 | fn | safeRealpathSync | (private) |
| 417 | fn | resolveExistingAncestor | (private) |
| 431 | fn | resolveContainedPath | (private) |
| 457 | fn | resolveOptionalContainedPath | (private) |
| 469 | fn | normalizeMatchPath | (private) |
| 480 | fn | renderOptional | (private) |
| 488 | fn | renderTemplate | (private) |
| 507 | fn | resolveTemplateExpr | (private) |
| 534 | fn | getByPath | (private) |

## src/gateway/hooks.test.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | createDemoAliasPlugin | (private) |
| 36 | fn | createIMessageAliasPlugin | (private) |
| 45 | fn | resolveHooksConfigOrThrow | (private) |
| 54 | fn | buildHookAgentConfig | (private) |
| 66 | fn | buildStaticShadowingMappingConfig | (private) |

## src/gateway/managed-image-attachments.test.ts (1505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | RequestResult | (private) |
| 73 | fn | createPngDataUrl | (private) |
| 78 | fn | createNoisyPngBuffer | (private) |
| 82 | fn | requireAttachmentIdFromUrl | (private) |
| 91 | fn | expectPathMissing | (private) |
| 101 | type | ManagedImageBlock | (private) |
| 109 | fn | requireBlock | (private) |
| 117 | fn | requireManagedOriginalPath | (private) |
| 125 | fn | createFixture | (private) |
| 159 | fn | requestManagedImage | (private) |

## src/gateway/managed-image-attachments.ts (1129 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ManagedImageAttachmentLimits | pub |
| 61 | type | ManagedImageAttachmentLimitsConfig | (private) |
| 65 | type | ParsedImageDataUrl | (private) |
| 70 | type | ManagedImageBlock | (private) |
| 72 | type | CleanupManagedOutgoingImageRecordsResult | (private) |
| 78 | type | SessionManagedOutgoingAttachmentIndex | (private) |
| 80 | type | SessionManagedOutgoingAttachmentIndexCacheEntry | (private) |
| 86 | type | SessionManagedOutgoingAttachmentTranscriptStat | (private) |
| 97 | fn | buildSessionManagedOutgoingAttachmentIndexCacheKey | (private) |
| 104 | fn | resolveManagedImageAttachmentLimits | pub |
| 115 | fn | formatLimitMiB | (private) |
| 124 | fn | createManagedImageAttachmentError | (private) |
| 130 | fn | isManagedImageAttachmentSafeError | (private) |
| 143 | fn | getSanitizedManagedImageAttachmentError | (private) |
| 152 | fn | validateManagedImageBuffer | (private) |
| 164 | fn | estimateBase64DecodedByteLength | (private) |
| 171 | fn | getManagedImageMetadataLimitError | (private) |
| 192 | fn | orientManagedImageMetadata | (private) |
| 205 | fn | resizeManagedImageBufferToLimits | (private) |
| 229 | fn | resolveManagedImageOriginalPath | (private) |
| 243 | fn | resolveManagedImageOriginalsDir | (private) |
| 251 | fn | hasUnmigratedManagedImageMetadata | (private) |
| 260 | fn | deleteAgedOrphanManagedImageFiles | (private) |
| 306 | fn | buildOutgoingVariantUrl | (private) |
| 310 | fn | deriveAltText | (private) |
| 325 | fn | parseImageDataUrl | (private) |
| 372 | fn | getVariantStats | (private) |
| 391 | fn | deleteManagedImageRecordArtifacts | (private) |
| 411 | fn | cleanupManagedOutgoingImageRecords | pub |
| 496 | fn | resolveManagedImageRecordAgentId | (private) |
| 504 | fn | buildManagedImageBlock | (private) |
| 517 | fn | buildManagedOutgoingAttachmentRefKey | (private) |
| 521 | fn | buildManagedImageResizeWarningBlock | (private) |
| 536 | fn | toRecordFilename | (private) |
| 541 | fn | asArray | (private) |
| 547 | fn | parseManagedOutgoingRoute | (private) |
| 572 | fn | collectManagedOutgoingAttachmentRefs | (private) |
| 602 | fn | getCachedSessionManagedOutgoingAttachmentIndex | (private) |
| 625 | fn | setCachedSessionManagedOutgoingAttachmentIndex | (private) |
| 652 | fn | sameManagedOutgoingAttachmentTranscriptStat | (private) |
| 663 | fn | getSessionManagedOutgoingAttachmentIndex | (private) |
| 773 | fn | recordMatchesTranscriptMessage | (private) |
| 790 | fn | attachManagedOutgoingImagesToMessage | pub |
| 816 | fn | createManagedOutgoingImageBlocks | pub |
| 1012 | fn | sendStatus | (private) |
| 1021 | fn | safeAttachmentFilename | (private) |
| 1027 | fn | handleManagedOutgoingImageHttpRequest | pub |

## src/gateway/mcp-app-standalone.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | StandaloneTicketBinding | (private) |
| 34 | type | StandaloneTicket | (private) |
| 42 | fn | pruneTicketBindings | (private) |
| 50 | fn | signTicket | (private) |
| 56 | fn | formatTicket | (private) |
| 60 | fn | createMcpAppStandaloneTicket | pub |
| 122 | fn | verifyMcpAppStandaloneTicket | pub |
| 165 | fn | resolveTicketActiveView | (private) |
| 191 | fn | ticketFromRequest | (private) |
| 200 | fn | supportsStandaloneToolOperations | (private) |
| 208 | fn | sendText | (private) |
| 214 | fn | runStandaloneMcpAppHost | (private) |
| 215 | type | StandaloneElement | (private) |
| 216 | type | StandaloneFrame | (private) |
| 225 | type | StandaloneMessageEvent | (private) |
| 238 | type | JsonRpcId | (private) |
| 239 | type | JsonRpcMessage | (private) |
| 247 | type | ViewPayload | (private) |
| 273 | fn | fail | (private) |
| 284 | fn | post | (private) |
| 289 | fn | notify | (private) |
| 290 | fn | respond | (private) |
| 291 | fn | reject | (private) |
| 293 | fn | removeFrame | (private) |
| 299 | fn | resolveSandboxUrl | (private) |
| 344 | fn | installOperationHandlers | (private) |
| 357 | fn | deliverInitialState | (private) |
| 367 | fn | isValidInitialize | (private) |
| 511 | fn | standaloneHostHtml | (private) |
| 529 | fn | resolveShellSandboxOrigin | (private) |
| 544 | fn | handleMcpAppStandaloneHttpRequest | pub |

## src/gateway/mcp-http.test.ts (3467 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | MockGatewayTool | (private) |
| 22 | type | MockGatewayScopedTools | (private) |
| 27 | type | MockBeforeToolCallHookResult | (private) |
| 43 | type | ScopedToolsCall | (private) |
| 100 | type | BeforeToolCallHookInput | (private) |
| 120 | type | McpToolResultPayload | (private) |
| 221 | fn | sendRaw | (private) |
| 237 | fn | readStreamChunkWithTimeout | (private) |
| 260 | fn | expectPromiseResolvesWithin | (private) |
| 282 | fn | readUntilInitialSseCommentFrame | (private) |
| 298 | fn | expectInitialSseCommentFrame | (private) |
| 328 | fn | sendChunkedOversizedBody | (private) |
| 385 | fn | sendStalledBody | (private) |
| 463 | fn | startLoopbackServerForTest | (private) |
| 472 | fn | readMcpPayload | (private) |
| 476 | fn | sendLoopbackToolsList | (private) |
| 489 | fn | sendLoopbackToolCall | (private) |
| 503 | fn | sendMainSessionToolCall | (private) |
| 516 | fn | readOkMcpPayload | (private) |
| 522 | fn | listMainSessionTools | (private) |
| 531 | fn | callMainSessionTool | (private) |
| 539 | fn | callMessageToolWithExecute | (private) |
| 549 | fn | expectBrowserToolsListStatus | (private) |
| 570 | fn | expectMcpToolNames | (private) |
| 577 | fn | expectMcpResultText | (private) |
| 586 | fn | angleSchema | (private) |
| 594 | fn | getScopedToolsCall | (private) |
| 602 | fn | getBeforeToolCallHookInput | (private) |
| 610 | fn | makeMockTool | (private) |
| 623 | fn | makeMessageTool | (private) |
| 631 | fn | makeCronTool | (private) |
| 639 | fn | mockScopedTools | (private) |
| 646 | fn | jsonHeaders | (private) |
| 653 | fn | mcpToolsListBody | (private) |
| 657 | fn | mcpToolCallBody | (private) |
| 666 | fn | buildMockMcpToolSchema | (private) |
| 939 | fn | conflictingUnion | (private) |
| 1130 | fn | sendWithCaps | (private) |
| 1246 | fn | sendWithCapture | (private) |
| 1479 | fn | sendYield | (private) |
| 1512 | fn | sendToolsList | (private) |
| 1570 | fn | listTools | (private) |
| 1876 | fn | sendToolsList | (private) |
| 3218 | fn | send | (private) |
| 3324 | fn | finishStalledRequest | (private) |

## src/gateway/mcp-http.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | McpLoopbackServer | (private) |
| 62 | fn | createMcpJsonParseError | (private) |
| 69 | fn | isMcpJsonParseError | (private) |
| 73 | fn | parseMcpJsonBody | (private) |
| 81 | fn | readJsonRpcRequestId | (private) |
| 89 | fn | isJsonRpcRequest | (private) |
| 93 | fn | shouldSendJsonRpcResponse | (private) |
| 97 | fn | collectJsonRpcResponses | (private) |
| 104 | fn | jsonRpcInternalError | (private) |
| 116 | fn | shouldLogMcpLoopbackTraffic | (private) |
| 123 | fn | logMcpLoopbackTraffic | (private) |
| 132 | fn | createRequestAbortSignal | (private) |
| 134 | fn | abort | (private) |
| 139 | fn | abortIfRequestIncomplete | (private) |
| 144 | fn | abortIfResponseStillOpen | (private) |
| 164 | fn | startMcpLoopbackServer | (private) |
| 177 | fn | cleanup | (private) |
| 505 | fn | ensureMcpLoopbackServer | pub |
| 523 | fn | closeMcpLoopbackServer | pub |

## src/gateway/method-scopes.test.ts (738 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | setPluginGatewayMethodScope | (private) |

## src/gateway/model-pricing-cache.test.ts (1280 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | CachedModelPricing | (private) |
| 77 | fn | requirePricing | (private) |
| 87 | fn | requireTieredPricing | (private) |
| 97 | fn | clearGatewayModelPricingState | (private) |
| 102 | fn | runGatewayModelPricingRefresh | (private) |
| 131 | fn | requireAbortSignal | (private) |
| 1251 | fn | createManifestRecord | (private) |
| 1267 | fn | toLintErrorObject | (private) |

## src/gateway/model-pricing-cache.ts (1444 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | OpenRouterPricingEntry | (private) |
| 50 | type | ModelListLike | (private) |
| 52 | type | ModelPricingManifestMetadata | (private) |
| 57 | type | OpenRouterModelPayload | (private) |
| 62 | type | GatewayModelPricingRefreshParams | (private) |
| 73 | type | ExternalPricingPolicy | (private) |
| 79 | type | ExternalPricingSourcePolicy | (private) |
| 87 | type | PricingModelNormalizationOptions | (private) |
| 104 | fn | clearRefreshTimer | (private) |
| 112 | fn | getPricingModelNormalizationOptions | (private) |
| 124 | fn | listLikeFallbacks | (private) |
| 136 | fn | parseNumberString | (private) |
| 151 | fn | parsePricingContentLength | (private) |
| 166 | fn | formatTimeoutSeconds | (private) |
| 171 | fn | readErrorName | (private) |
| 177 | fn | isTimeoutError | (private) |
| 184 | fn | createPricingFetchSignal | (private) |
| 191 | fn | formatPricingFetchFailure | (private) |
| 198 | fn | toPricePerMillion | (private) |
| 206 | fn | parseOpenRouterPricing | (private) |
| 224 | fn | toCachedPricingTier | (private) |
| 250 | fn | toCachedModelPricing | (private) |
| 275 | fn | cancelUnreadResponseBody | (private) |
| 281 | fn | readPricingJsonObject | (private) |
| 304 | fn | fetchPricingJsonObject | (private) |
| 330 | type | LiteLLMModelEntry | (private) |
| 332 | type | LiteLLMTierRaw | (private) |
| 340 | fn | parseLiteLLMTieredPricing | (private) |
| 385 | fn | parseLiteLLMPricing | (private) |
| 404 | type | LiteLLMPricingCatalog | (private) |
| 406 | fn | fetchLiteLLMPricingCatalog | (private) |
| 432 | fn | normalizeExternalPricingSource | (private) |
| 448 | fn | normalizeExternalPricingPolicy | (private) |
| 466 | fn | filterActiveManifestRegistry | (private) |
| 479 | fn | resolveModelPricingManifestMetadata | (private) |
| 528 | fn | loadManifestPricingContext | (private) |
| 556 | fn | applyModelIdTransform | (private) |
| 569 | fn | applyModelIdTransforms | (private) |
| 583 | fn | canonicalizeOpenRouterLookupId | (private) |
| 615 | fn | buildExternalCatalogCandidates | (private) |
| 685 | fn | addResolvedModelRef | (private) |
| 716 | fn | addModelListLike | (private) |
| 744 | fn | addProviderModelPair | (private) |
| 765 | fn | addConfiguredWebSearchPluginModels | (private) |
| 789 | fn | isPrivateOrLoopbackHost | (private) |
| 814 | fn | isPrivateOrLoopbackBaseUrl | (private) |
| 825 | fn | findConfiguredProviderModel | (private) |
| 844 | fn | getConfiguredModelPricing | (private) |
| 855 | fn | hasPrivateOrLoopbackConfiguredEndpoint | (private) |
| 871 | fn | shouldFetchExternalPricingForRef | (private) |
| 898 | fn | filterExternalPricingRefs | (private) |
| 920 | fn | collectConfiguredModelPricingRefs | (private) |
| 1081 | fn | fetchOpenRouterPricingCatalog | (private) |
| 1106 | fn | resolveCatalogPricingForRef | (private) |
| 1146 | fn | resolveLiteLLMPricingForRef | (private) |
| 1170 | fn | scheduleRefresh | (private) |
| 1193 | fn | collectSeededPricing | (private) |
| 1221 | fn | refreshGatewayModelPricingCache | (private) |
| 1414 | fn | startGatewayModelPricingRefresh | pub |

## src/gateway/net.test.ts (837 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | clearFlyMachineEnvForTest | (private) |
| 37 | fn | useClearedFlyMachineEnv | (private) |

## src/gateway/net.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | pickPrimaryLanIPv4 | pub |
| 32 | fn | normalizeHostHeader | pub |
| 37 | fn | resolveHostName | pub |
| 56 | fn | isLoopbackAddress | pub |
| 60 | fn | resolveLocalInterfaceAddressMatch | pub |
| 87 | fn | isPrivateOrLoopbackAddress | pub |
| 91 | fn | normalizeIp | (private) |
| 95 | fn | stripOptionalPort | (private) |
| 115 | fn | parseIpLiteral | (private) |
| 128 | fn | parseRealIp | (private) |
| 132 | fn | resolveForwardedClientIp | (private) |
| 165 | fn | isTrustedProxyAddress | pub |
| 180 | fn | resolveClientIp | pub |
| 211 | fn | headerValue | (private) |
| 215 | fn | resolveRequestClientIp | pub |
| 246 | fn | resolveGatewayBindHost | pub |
| 313 | fn | defaultGatewayBindMode | pub |
| 327 | fn | canBindToHost | (private) |
| 342 | fn | resolveGatewayListenHosts | pub |
| 374 | fn | isValidIPv4 | pub |
| 383 | fn | isLoopbackHost | pub |
| 399 | fn | isLocalishHost | pub |
| 412 | fn | isPrivateOrLoopbackHost | pub |
| 439 | fn | parseHostForAddressChecks | (private) |
| 471 | fn | isSecureWebSocketUrl | pub |
| 522 | fn | isTrustedPlaintextWebSocketHost | (private) |

## src/gateway/node-catalog.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | CatalogInput | (private) |
| 8 | type | TestPairedDevice | (private) |
| 9 | type | TestPairedNode | (private) |
| 10 | type | TestPendingNode | (private) |
| 12 | fn | pairedDevice | (private) |
| 35 | fn | pairedNode | (private) |
| 47 | fn | pendingNode | (private) |

## src/gateway/node-command-policy.test.ts (637 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | installCanvasPluginDefaults | (private) |

## src/gateway/node-command-policy.ts (513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 164 | type | PlatformId | (private) |
| 187 | fn | resolvePlatformIdByExactMatch | (private) |
| 194 | fn | platformMatchesDeviceFamily | (private) |
| 215 | fn | resolvePlatformIdByNativeLabel | (private) |
| 234 | fn | resolvePlatformIdByDeviceFamily | (private) |
| 245 | fn | normalizePlatformId | (private) |
| 263 | fn | listDangerousPluginNodeCommands | pub |
| 279 | fn | listDefaultPluginNodeCommands | (private) |
| 308 | fn | isForegroundRestrictedPluginNodeCommand | pub |
| 323 | type | NodeCommandPolicyNode | (private) |
| 328 | fn | isDesktopPlatformId | (private) |
| 332 | fn | filterDesktopHostCommandDefaults | (private) |
| 343 | fn | filterApprovedRuntimeCommands | (private) |
| 355 | fn | isLiveNodeSession | (private) |
| 364 | fn | hasTalkSurface | (private) |
| 378 | fn | resolveNodeCommandAllowlistInternal | (private) |
| 450 | fn | resolveNodeCommandAllowlist | pub |
| 457 | fn | resolveNodePairingCommandAllowlist | pub |
| 467 | fn | normalizeDeclaredCommands | (private) |
| 484 | fn | normalizeDeclaredNodeCommands | pub |
| 493 | fn | isNodeCommandAllowed | pub |

## src/gateway/node-invoke-plugin-policy.test.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | createNodeSession | (private) |
| 60 | fn | createContext | (private) |
| 94 | type | ApprovalClientLookup | (private) |
| 96 | fn | createApprovalClient | (private) |
| 111 | fn | createApprovalClientLookup | (private) |
| 126 | fn | createOperatorClient | (private) |
| 134 | type | NodeInvokePolicyRegistration | (private) |
| 135 | type | NodeInvokePolicyHandler | (private) |
| 136 | type | PluginApprovalRecord | (private) |
| 140 | fn | createDemoPolicy | (private) |
| 152 | fn | createApprovalRequestPolicy | (private) |
| 167 | fn | setDangerousDemoCommandRegistry | (private) |
| 182 | fn | createPolicyRegistry | (private) |
| 187 | fn | invokeDemoPolicy | (private) |
| 200 | fn | expectSinglePendingApproval | (private) |
| 213 | fn | expectApprovalResolution | (private) |

## src/gateway/node-invoke-system-run-approval.test.ts (1024 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | SanitizerOptions | (private) |
| 41 | type | ApprovedRunParamOverrides | (private) |
| 57 | fn | approvedRunParams | (private) |
| 66 | fn | fallbackRunParams | (private) |
| 74 | fn | systemRunApprovalBinding | (private) |
| 86 | fn | sanitizeApprovedRun | (private) |
| 105 | fn | sanitizeFallbackRun | (private) |
| 120 | fn | makeRecord | (private) |
| 150 | fn | manager | (private) |
| 179 | fn | makeTimedOutRecord | (private) |
| 193 | fn | expectAllowOnceForwardingResult | (private) |
| 206 | fn | expectRejectedForwardingResult | (private) |
| 221 | fn | makeChatRecord | (private) |
| 251 | fn | makeNoDeviceUiRecord | (private) |
| 270 | fn | approvedChatReplayParams | (private) |
| 281 | fn | sanitizeApprovedChatReplay | (private) |
| 331 | fn | sanitize | (private) |
| 439 | fn | sanitize | (private) |

## src/gateway/node-invoke-system-run-approval.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | SystemRunParamsLike | (private) |
| 46 | type | ApprovalLookup | (private) |
| 52 | type | ApprovalClient | (private) |
| 69 | fn | normalizeApprovalDecision | (private) |
| 74 | fn | clientHasApprovals | (private) |
| 79 | fn | isTrustedBackendApprovalClient | (private) |
| 88 | fn | canBridgeNoDeviceApprovalFromBackend | (private) |
| 104 | fn | hasChatApprovalReplayBinding | (private) |
| 113 | fn | normalizeComparableString | (private) |
| 127 | fn | matchesRequiredString | (private) |
| 139 | fn | matchesOptionalString | (private) |
| 151 | fn | canBridgeNoDeviceChatApprovalFromBackend | (private) |
| 201 | fn | pickSystemRunParams | (private) |
| 225 | fn | resolveForwardedRawCommand | (private) |
| 244 | fn | sanitizeSystemRunParamsForForwarding | pub |

## src/gateway/node-registry.test.ts (1745 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | createNodeRegistry | (private) |
| 40 | fn | makeClient | (private) |
| 101 | fn | registerDemoNodePluginTool | (private) |
| 129 | fn | createTestNodeRegistry | (private) |
| 135 | fn | makeConnectivitySocket | (private) |
| 152 | fn | registerNode | (private) |
| 158 | fn | publishNodePluginTools | (private) |
| 166 | fn | publishNodeSkills | (private) |
| 174 | fn | nodeSkill | (private) |
| 183 | fn | registerLinuxNode | (private) |
| 190 | fn | invokeSystemRun | (private) |
| 208 | type | SystemRunEvent | (private) |
| 210 | fn | authorizeSystemRun | (private) |

## src/gateway/node-registry.ts (1035 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | NodeSession | pub |
| 74 | type | AuthorizedSystemRunEvent | (private) |
| 81 | fn | resolvePendingSystemRunEvent | (private) |
| 103 | fn | normalizeSystemRunInvokeParams | (private) |
| 127 | type | NodeInvokeResult | pub |
| 135 | type | NodeConnectivityResult | pub |
| 140 | type | PingableSocket | (private) |
| 155 | type | SerializedEventPayload | pub |
| 161 | type | NodeEventTransport | pub |
| 167 | type | NodeRegistryOptions | pub |
| 176 | fn | serializeEventPayload | pub |
| 185 | fn | isSerializedEventPayload | (private) |
| 195 | class | NodeRegistry | pub |
| 512 | fn | cleanup | (private) |
| 520 | fn | finish | (private) |
| 529 | fn | onPong | (private) |
| 530 | fn | onClose | (private) |
| 535 | fn | onError | (private) |

## src/gateway/openai-http.test.ts (2764 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | startServer | (private) |
| 62 | fn | startTokenServer | (private) |
| 71 | fn | writeGatewayConfig | (private) |
| 80 | fn | postChatCompletions | (private) |
| 93 | fn | parseSseDataLines | (private) |
| 101 | type | FirstAgentCommandOptions | (private) |
| 129 | fn | firstAgentCommandOptions | (private) |
| 136 | fn | mockAgentOnce | (private) |
| 140 | fn | expectAgentSessionKeyMatch | (private) |
| 152 | fn | expectMessageContext | (private) |
| 165 | fn | getFirstAgentCall | (private) |
| 166 | fn | getFirstAgentMessage | (private) |
| 167 | fn | expectInvalidRequestNoDispatch | (private) |
| 180 | fn | postSyncUserMessage | (private) |
| 1494 | fn | mockAgentOnce | (private) |
| 1498 | fn | getFirstAgentMaxTokens | (private) |
| 1551 | fn | mockAgentOnce | (private) |
| 1555 | fn | getStreamParams | (private) |
| 1626 | fn | mockAgentOnce | (private) |
| 1630 | fn | getStreamParams | (private) |
| 1666 | fn | mockAgentOnce | (private) |
| 1670 | fn | getStreamParams | (private) |
| 1755 | fn | mockAgentOnce | (private) |
| 1759 | fn | getStreamParams | (private) |

## src/gateway/openai-http.ts (1431 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | OpenAiHttpOptions | (private) |
| 83 | type | OpenAiChatMessage | (private) |
| 92 | type | OpenAiChatCompletionRequest | (private) |
| 123 | type | ResolvedOpenAiChatCompletionsLimits | (private) |
| 130 | fn | resolveOpenAiChatCompletionsLimits | (private) |
| 149 | fn | writeSse | (private) |
| 153 | fn | buildAgentCommandInput | (private) |
| 180 | fn | extractClientToolsFromChatRequest | (private) |
| 222 | fn | applyChatToolChoice | (private) |
| 269 | fn | writeAssistantRoleChunk | (private) |
| 279 | fn | writeAssistantContentChunk | (private) |
| 298 | fn | writeAssistantFinishChunk | (private) |
| 317 | fn | splitArgumentsForStreaming | (private) |
| 329 | fn | writeAssistantToolCallsIncrementalChunks | (private) |
| 386 | fn | writeUsageChunk | (private) |
| 404 | fn | asMessages | (private) |
| 408 | fn | extractTextContent | (private) |
| 438 | type | AssistantToolCall | (private) |
| 444 | fn | stringifyToolCallArguments | (private) |
| 459 | fn | extractAssistantToolCalls | (private) |
| 485 | fn | renderAssistantToolCalls | (private) |
| 491 | fn | resolveImageUrlPart | (private) |
| 511 | fn | extractImageUrls | (private) |
| 531 | type | ActiveTurnContext | (private) |
| 537 | fn | parseImageUrlToSource | (private) |
| 565 | fn | resolveActiveTurnContext | (private) |
| 586 | fn | resolveImagesForRequest | (private) |
| 629 | fn | buildAgentPrompt | (private) |
| 711 | fn | coerceRequest | (private) |
| 718 | fn | resolveAgentResponseText | (private) |
| 730 | fn | resolveAgentResponseCommentary | (private) |
| 741 | type | AgentUsageMeta | (private) |
| 749 | type | PendingToolCall | (private) |
| 755 | fn | resolveAgentRunUsage | (private) |
| 777 | fn | resolveStopReasonAndPendingToolCalls | (private) |
| 809 | fn | resolveChatCompletionUsage | (private) |
| 813 | fn | resolveIncludeUsageForStreaming | (private) |
| 823 | fn | resolveResponseFormat | (private) |
| 838 | fn | resolveStopSequences | (private) |
| 860 | fn | resolveErrorMessage | (private) |
| 870 | fn | handleOpenAiHttpRequest | pub |
| 1186 | fn | stopWatchingDisconnect | (private) |
| 1188 | fn | maybeFinalize | (private) |
| 1212 | fn | requestFinalize | (private) |

## src/gateway/openresponses-http.test.ts (2120 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | startServer | (private) |
| 82 | fn | startTokenServer | (private) |
| 97 | fn | writeGatewayConfig | (private) |
| 106 | fn | postResponses | (private) |
| 119 | type | SseEvent | (private) |
| 121 | fn | parseSseEvents | (private) |
| 142 | fn | collectSseEventTypes | (private) |
| 152 | fn | findSseEvent | (private) |
| 160 | fn | parseSseData | (private) |
| 164 | fn | requireSessionKey | (private) |
| 171 | fn | firstAgentOpts | (private) |
| 179 | fn | ensureResponseConsumed | (private) |
| 198 | fn | buildUrlInputMessage | (private) |
| 218 | fn | buildResponsesUrlPolicyConfig | (private) |
| 249 | fn | expectInvalidRequest | (private) |
| 263 | fn | mockAgentOnce | (private) |
| 1614 | type | FunctionCallEvent | (private) |

## src/gateway/openresponses-http.ts (1371 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | type | OpenResponsesHttpOptions | (private) |
| 98 | type | ResponseSessionScope | (private) |
| 104 | type | ResponseSessionEntry | (private) |
| 111 | fn | normalizeResponseSessionScope | (private) |
| 121 | fn | resolveResponseSessionAuthSubject | (private) |
| 138 | fn | createResponseSessionScope | (private) |
| 150 | fn | matchesResponseSessionScope | (private) |
| 161 | fn | pruneExpiredResponseSessions | (private) |
| 175 | fn | evictOverflowResponseSessions | (private) |
| 185 | fn | storeResponseSession | (private) |
| 198 | fn | lookupResponseSession | (private) |
| 246 | fn | writeSseEvent | (private) |
| 251 | type | ResolvedResponsesLimits | (private) |
| 258 | fn | resolveResponsesLimits | (private) |
| 282 | fn | extractClientTools | (private) |
| 295 | fn | applyToolChoice | (private) |
| 342 | fn | createEmptyUsage | (private) |
| 346 | fn | toUsage | (private) |
| 372 | fn | extractUsageFromResult | (private) |
| 382 | type | PendingToolCall | (private) |
| 384 | fn | resolveStopReasonAndPendingToolCalls | (private) |
| 395 | fn | createResponseResource | (private) |
| 415 | fn | runResponsesAgentCommand | (private) |
| 449 | fn | handleOpenResponsesHttpRequest | pub |
| 524 | fn | markUrlPart | (private) |
| 722 | fn | rememberResponseSession | (private) |
| 920 | fn | unsubscribe | (private) |
| 921 | fn | stopWatchingDisconnect | (private) |
| 926 | fn | maybeFinalize | (private) |
| 985 | fn | requestFinalize | (private) |

## src/gateway/operator-approval-session-events.test.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | NewOperatorApproval | (private) |
| 27 | fn | createDatabaseOptions | (private) |
| 33 | fn | createClient | (private) |
| 50 | fn | createPendingRecord | (private) |
| 105 | fn | createTerminalRecord | (private) |
| 120 | fn | createRuntime | (private) |
| 143 | fn | insertPendingApproval | (private) |

## src/gateway/operator-approval-store.test.ts (1036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | OperatorApprovalDatabase | (private) |
| 36 | type | NewOperatorApproval | (private) |
| 39 | fn | getOperatorApproval | (private) |
| 46 | fn | createDatabaseOptions | (private) |
| 54 | fn | approval | (private) |
| 105 | fn | rawApprovalRow | (private) |

## src/gateway/operator-approval-store.ts (1355 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | OperatorApprovalKind | pub |
| 35 | type | OperatorApprovalStatus | pub |
| 36 | type | OperatorApprovalDecision | (private) |
| 37 | type | OperatorApprovalTerminalReason | pub |
| 45 | type | OperatorApprovalResolverKind | (private) |
| 46 | type | OperatorApprovalRequester | (private) |
| 52 | type | OperatorApprovalSource | pub |
| 61 | type | OperatorApprovalResolver | pub |
| 66 | type | OperatorApprovalRecord | pub |
| 88 | type | NewOperatorApproval | (private) |
| 101 | type | InsertOperatorApprovalResult | (private) |
| 106 | type | GetOperatorApprovalResult | (private) |
| 111 | type | ResolveOperatorApprovalResult | pub |
| 123 | type | ForceDenyOperatorApprovalResult | pub |
| 131 | type | ConsumeOperatorApprovalResult | (private) |
| 139 | type | TerminalizeOperatorApprovalsResult | (private) |
| 144 | type | OperatorApprovalDatabase | (private) |
| 145 | type | OperatorApprovalRow | (private) |
| 147 | type | OperatorApprovalHistoryCursor | (private) |
| 152 | class | OperatorApprovalHistoryCursorError | pub |
| 159 | type | ListTerminalOperatorApprovalsResult | (private) |
| 193 | fn | parseApprovalPresentation | (private) |
| 202 | fn | parseStringArray | (private) |
| 217 | fn | normalizeString | (private) |
| 222 | fn | requireString | (private) |
| 230 | fn | requireApprovalId | (private) |
| 237 | fn | encodeOperatorApprovalHistoryCursor | (private) |
| 241 | fn | decodeOperatorApprovalHistoryCursor | (private) |
| 269 | fn | normalizeStringArray | (private) |
| 280 | fn | stringifyPresentation | (private) |
| 298 | fn | isValidTimestamp | (private) |
| 302 | fn | clampAuditTimestamp | (private) |
| 306 | fn | hasValidLifecycleTuple | (private) |
| 359 | fn | decodeOperatorApprovalRow | (private) |
| 449 | fn | selectOperatorApprovalRow | (private) |
| 460 | fn | selectOperatorApprovalRowByLocator | (private) |
| 476 | fn | hasApprovalLocatorNamespaceConflict | (private) |
| 495 | fn | matchesExpectedApprovalOwner | (private) |
| 506 | fn | denyCorruptPendingRow | (private) |
| 532 | fn | expirePendingRow | (private) |
| 560 | fn | requireDecodedRecord | (private) |
| 568 | fn | inputMatchesExistingRow | (private) |
| 599 | fn | insertOperatorApproval | pub |
| 706 | fn | getOperatorApprovalDetailed | pub |
| 734 | fn | getOperatorApprovalDetailedByLocator | pub |
| 762 | fn | listPendingOperatorApprovals | pub |
| 849 | fn | listTerminalOperatorApprovals | pub |
| 930 | fn | resolveOperatorApproval | pub |
| 1029 | fn | forceDenyOperatorApproval | pub |
| 1108 | fn | expireDueOperatorApprovals | pub |
| 1166 | fn | closeOrphanedOperatorApprovals | pub |
| 1232 | fn | consumeOperatorApprovalAllowOnce | pub |
| 1331 | fn | pruneTerminalOperatorApprovals | pub |

## src/gateway/probe.test.ts (829 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | class | MockGatewayClientRequestError | (private) |
| 72 | class | MockGatewayClient | (private) |
| 199 | type | ProbeGatewayParams | (private) |
| 201 | fn | expectProbeResultFields | (private) |
| 210 | fn | expectProbeAuthFields | (private) |
| 221 | fn | nextProbeUrl | (private) |
| 226 | fn | setDeviceRequiredProbeMode | (private) |
| 232 | fn | lastGatewayClientOptions | (private) |
| 236 | fn | runLightweightProbe | (private) |
| 244 | fn | runTokenProbe | (private) |
| 255 | fn | runTokenLightweightProbe | (private) |
| 264 | fn | expectLightweightProbeResult | (private) |
| 270 | fn | primeDeviceRequiredProbeFailures | (private) |
| 276 | fn | expectDeviceRequiredClose | (private) |

## src/gateway/probe.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | GatewayProbeAuth | pub |
| 25 | type | GatewayProbeClose | pub |
| 31 | type | GatewayProbeCapability | pub |
| 39 | type | GatewayProbeAuthSummary | pub |
| 45 | type | GatewayProbeServerSummary | pub |
| 50 | type | GatewayProbeResult | pub |
| 66 | type | GatewayProbeDetailLevel | (private) |
| 80 | type | DeviceRequiredProbeCacheEntry | (private) |
| 87 | fn | clampProbeTimeoutMs | pub |
| 91 | fn | formatProbeCloseError | (private) |
| 95 | fn | resolveDeviceRequiredProbeCacheKey | (private) |
| 103 | fn | isDeviceIdentityRequiredClose | (private) |
| 110 | fn | hasProbeAuth | (private) |
| 114 | fn | shouldShortCircuitDeviceRequiredProbe | (private) |
| 128 | fn | noteDeviceRequiredProbeFailure | (private) |
| 137 | fn | clearDeviceRequiredProbeFailures | (private) |
| 141 | fn | emptyProbeAuth | (private) |
| 149 | fn | emptyProbeServer | (private) |
| 156 | fn | makeDeviceRequiredShortCircuitResult | (private) |
| 177 | fn | resolveProbeAuthSummary | (private) |
| 201 | fn | isPairingPendingProbeFailure | (private) |
| 208 | fn | resolveGatewayProbeCapability | (private) |
| 235 | fn | probeGateway | pub |
| 293 | fn | clearProbeTimer | (private) |
| 299 | fn | armProbeTimer | (private) |
| 303 | fn | settle | (private) |
| 335 | fn | settleProbe | (private) |

## src/gateway/server-aux-handlers.test.ts (728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | publishSharedGatewayGeneration | (private) |
| 33 | fn | asConfig | (private) |
| 37 | fn | createReloadPlan | (private) |
| 56 | fn | createSnapshot | (private) |
| 71 | fn | createSourceSnapshot | (private) |
| 75 | fn | slackConfig | (private) |
| 81 | fn | slackZaloConfig | (private) |
| 90 | fn | slackZaloDiscordConfig | (private) |
| 104 | fn | gatewayTokenSlackConfig | (private) |
| 115 | fn | activateSnapshot | (private) |
| 119 | fn | mockResolvedSecrets | (private) |
| 123 | fn | invokeSecretsReload | (private) |
| 139 | type | RespondCall | (private) |
| 140 | type | GatewayAuxHandlerParams | (private) |
| 141 | type | ChannelName | (private) |
| 143 | fn | firstRespondCall | (private) |
| 151 | fn | buildRestartChannelsPlan | (private) |
| 158 | type | SecretsReloadHarnessParams | (private) |
| 171 | fn | createSecretsReloadHarness | (private) |
| 199 | fn | createSecretsReloadHarnessWithChannelMocks | (private) |
| 274 | fn | buildReloadPlan | (private) |
| 312 | fn | buildReloadPlan | (private) |
| 706 | fn | buildReloadPlan | (private) |

## src/gateway/server-aux-handlers.ts (582 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | GatewayAuxHandlerLogger | (private) |
| 71 | type | ReloadSecretsResult | (private) |
| 75 | fn | activateSecretsRuntimeSnapshotIfCurrent | (private) |
| 94 | fn | restoreSecretsRuntimeSnapshotIfCurrent | (private) |
| 109 | fn | createGatewayAuxHandlers | pub |
| 218 | fn | runExclusiveReload | (private) |
| 224 | fn | run | (private) |

## src/gateway/server-channels.test.ts (1788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | class | TestRetrySupervisor | (private) |
| 70 | type | TestAccount | (private) |
| 82 | fn | createTestPlugin | (private) |
| 135 | fn | createDeferred | (private) |
| 136 | fn | resolvePromise | (private) |
| 143 | fn | flushMicrotasks | (private) |
| 149 | fn | waitForImmediate | (private) |
| 156 | fn | waitForMicrotaskCondition | (private) |
| 170 | fn | advanceTimersUntil | (private) |
| 188 | fn | firstStartAccountContext | (private) |
| 198 | fn | installTestRegistry | (private) |
| 216 | fn | createManager | (private) |

## src/gateway/server-channels.ts (1128 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | waitForChannelStartupHandoff | (private) |
| 61 | type | ChannelRuntimeStore | (private) |
| 68 | fn | sanitizeAbortedTaskStatusPatch | (private) |
| 99 | type | HealthMonitorConfig | (private) |
| 105 | type | ChannelHealthMonitorConfig | (private) |
| 109 | type | ChannelAutostartSuppression | pub |
| 114 | type | GatewayStartupTrace | (private) |
| 118 | fn | createRuntimeStore | (private) |
| 127 | fn | resolveDefaultRuntime | (private) |
| 132 | fn | cloneDefaultRuntime | (private) |
| 136 | fn | waitForChannelStopGracefully | (private) |
| 151 | fn | resolveSettled | (private) |
| 163 | fn | applyDescribedAccountFields | (private) |
| 182 | type | ChannelManagerOptions | (private) |
| 229 | type | StopChannelOptions | (private) |
| 233 | fn | waitForDeferredAccountStart | (private) |
| 248 | type | ChannelManager | pub |
| 266 | fn | createChannelManager | pub |
| 285 | fn | restartKey | (private) |
| 417 | fn | evictStaleChannelAccountState | (private) |
| 439 | fn | startChannelInternal | (private) |
| 543 | fn | stopTaskScopedApprovalRuntime | (private) |
| 551 | fn | cleanupTaskScopedApprovalRuntime | (private) |
| 675 | fn | runStartAccount | (private) |
| 677 | fn | recordDuration | (private) |
| 867 | fn | isCurrentTask | (private) |
| 900 | fn | startChannel | (private) |
| 908 | fn | stopChannel | (private) |
| 1003 | fn | startChannels | (private) |
| 1039 | fn | markChannelLoggedOut | (private) |

## src/gateway/server-chat-state.ts (622 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | ChatRunTiming | pub |
| 14 | type | ChatRunRegistration | pub |
| 21 | type | ChatRunEntry | pub |
| 26 | type | ChatAbortMarker | pub |
| 30 | fn | nextChatRunOrderingSequence | (private) |
| 36 | fn | createChatRunEntry | pub |
| 45 | fn | createChatAbortMarker | pub |
| 50 | fn | chatAbortMarkerTimestampMs | pub |
| 59 | fn | isChatAbortMarkerCurrent | pub |
| 79 | type | BufferedAgentEvent | pub |
| 85 | type | ChatRunPlanSnapshot | pub |
| 90 | type | ChatRunRegistry | pub |
| 99 | fn | createChatRunRegistry | pub |
| 102 | fn | add | (private) |
| 112 | fn | peek | (private) |
| 114 | fn | shift | (private) |
| 126 | fn | remove | (private) |
| 145 | fn | clear | (private) |
| 152 | type | ChatRunState | pub |
| 171 | fn | createChatRunState | pub |
| 184 | fn | clearRun | (private) |
| 198 | fn | clear | (private) |
| 229 | type | ToolEventRecipientRegistry | pub |
| 235 | type | SessionEventSubscriberRegistry | pub |
| 242 | type | SessionMessageSubscriberRegistry | pub |
| 256 | type | SessionMessageSubscription | (private) |
| 258 | type | ProvisionalSubscriptionState | (private) |
| 267 | type | ToolRecipientEntry | (private) |
| 277 | fn | createSessionEventSubscriberRegistry | pub |
| 304 | fn | createSessionMessageSubscriberRegistry | pub |
| 317 | fn | rebuildConnectionSessionKeys | (private) |
| 328 | fn | setMessageSubscription | (private) |
| 341 | fn | setApprovalSubscription | (private) |
| 399 | fn | settle | (private) |
| 437 | fn | rollback | (private) |
| 566 | fn | createToolEventRecipientRegistry | pub |
| 569 | fn | prune | (private) |
| 584 | fn | add | (private) |
| 602 | fn | get | (private) |
| 612 | fn | markFinal | (private) |

## src/gateway/server-chat.agent-events.test.ts (5160 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | waitForFast | (private) |
| 112 | fn | createHarness | (private) |
| 176 | fn | emitRun1AssistantText | (private) |
| 195 | fn | chatBroadcastCalls | (private) |
| 199 | fn | agentBroadcastCalls | (private) |
| 203 | fn | sessionChatCalls | (private) |
| 329 | fn | sessionAgentCalls | (private) |
| 333 | fn | requireCall | (private) |
| 340 | fn | requireRecord | (private) |
| 347 | fn | expectRecordFields | (private) |
| 353 | fn | expectPayloadFields | (private) |
| 357 | fn | expectPayloadDataFields | (private) |
| 362 | fn | requireMockCall | (private) |
| 370 | fn | requireMockArg | (private) |
| 379 | fn | requireMockPayload | (private) |
| 396 | fn | emitLifecycleEnd | (private) |
| 410 | fn | emitFallbackLifecycle | (private) |
| 426 | fn | expectSingleAgentBroadcastPayload | (private) |
| 437 | fn | expectSingleFinalChatPayload | (private) |

## src/gateway/server-chat.ts (1671 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | projectToolSearchCodeEventForChannelPayload | (private) |
| 113 | fn | resolveHeartbeatAckMaxChars | (private) |
| 125 | fn | resolveHeartbeatContext | (private) |
| 142 | fn | shouldHideHeartbeatChatOutput | (private) |
| 158 | fn | shouldSuppressHeartbeatToolEvents | (private) |
| 162 | fn | shouldMirrorAssistantEventToHiddenSessionMessages | (private) |
| 175 | fn | shouldMirrorAgentEventToHiddenSessionMessages | (private) |
| 179 | fn | normalizeHeartbeatChatFinalText | (private) |
| 207 | type | ChatEventBroadcast | pub |
| 209 | type | NodeSendToSession | pub |
| 212 | type | ChatErrorKind | (private) |
| 222 | fn | readChatErrorKind | (private) |
| 229 | fn | resolveChatErrorKindFromError | pub |
| 254 | fn | excludeConnIds | (private) |
| 270 | type | BroadcastDelta | (private) |
| 272 | fn | resolveBroadcastDelta | (private) |
| 290 | type | AgentEventHandlerOptions | pub |
| 340 | type | AgentEventHandler | (private) |
| 344 | fn | roundedChatSendTimingMs | (private) |
| 348 | fn | createAgentEventHandler | pub |
| 389 | type | TerminalLifecycleOptions | (private) |
| 394 | type | PendingTerminalLifecycleError | (private) |
| 402 | type | AgentTextThrottleStream | (private) |
| 404 | fn | agentTextThrottleKey | (private) |
| 407 | fn | agentTextThrottleKeys | (private) |
| 413 | fn | clearBufferedChatState | (private) |
| 417 | fn | clearPendingTerminalLifecycleError | (private) |
| 474 | fn | buildSessionEventSnapshot | (private) |
| 590 | fn | resolveSessionDeliveryKey | (private) |
| 597 | fn | resolveNodeSessionDeliveryKeys | (private) |
| 609 | fn | sendNodeSessionPayloadForAgent | (private) |
| 620 | fn | emitFirstAssistantChatSendTiming | (private) |
| 647 | fn | finalizeLifecycleEvent | (private) |
| 813 | fn | broadcastSessionChange | (private) |
| 836 | fn | markPersisted | (private) |
| 862 | fn | scheduleTerminalLifecycleError | (private) |
| 879 | fn | emitChatDelta | (private) |
| 951 | fn | resolveBufferedChatTextState | (private) |
| 971 | fn | flushBufferedChatDeltaIfNeeded | (private) |
| 1027 | fn | sendChatPayload | (private) |
| 1050 | fn | emitChatTerminal | (private) |
| 1116 | fn | sendAgentPayload | (private) |
| 1145 | fn | sendNodeAgentPayload | (private) |
| 1155 | fn | flushBufferedAgentDeltaIfNeeded | (private) |
| 1190 | fn | isAgentTextThrottleEvent | (private) |
| 1193 | fn | shouldCoalesceAgentTextEvent | (private) |
| 1202 | fn | shouldAdvanceAgentTextThrottle | (private) |
| 1236 | fn | sendOrBufferAgentTextEvent | (private) |
| 1264 | fn | resolveToolVerboseLevel | (private) |
| 1291 | fn | handleEvent | (private) |

## src/gateway/server-close.test.ts (1692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | TriggerInternalHookMock | (private) |
| 82 | type | GatewayCloseHandlerParams | (private) |
| 83 | type | GatewayCloseClient | (private) |
| 84 | type | MarkMainSessionsAbortedForRestart | (private) |
| 87 | type | DrainActiveSessionsForShutdown | (private) |
| 92 | fn | firstMockCall | (private) |
| 96 | fn | createTestChatRunState | (private) |
| 103 | fn | createGatewayCloseTestDeps | (private) |

## src/gateway/server-close.ts (1063 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ShutdownResult | pub |
| 58 | fn | createTimeoutRace | (private) |
| 86 | fn | shutdownStep | (private) |
| 103 | fn | recordShutdownWarning | (private) |
| 110 | fn | getRestartReplyDrainCounts | (private) |
| 132 | fn | listUnabortedRestartRuns | (private) |
| 141 | fn | listRestartDrainRuns | (private) |
| 150 | fn | listRestartRecoveryRuns | (private) |
| 162 | fn | formatRestartReplyDrainDetails | (private) |
| 181 | fn | sleepForRestartReplyDrain | (private) |
| 188 | type | RestartRunAbortParams | (private) |
| 224 | fn | waitForRestartReplyDrain | (private) |
| 259 | fn | collectActiveRestartSessionRefs | (private) |
| 279 | fn | addRun | (private) |
| 321 | fn | settleTerminalSessionPersistenceForRestart | (private) |
| 358 | fn | markActiveRunsForRestartRecovery | (private) |
| 422 | fn | abortActiveRunsForRestart | (private) |
| 458 | fn | abortQueuedTurnsForRestart | (private) |
| 464 | fn | drainRestartPendingRepliesForShutdown | (private) |
| 550 | fn | triggerGatewayLifecycleHookWithTimeout | (private) |
| 579 | fn | disposeRuntimeWithShutdownGrace | (private) |
| 601 | fn | disposeAllBundleLspRuntimesOnDemand | (private) |
| 606 | fn | stopGmailWatcherOnDemand | (private) |
| 611 | fn | runGatewayClosePrelude | pub |
| 635 | fn | isServerNotRunningError | (private) |
| 644 | fn | waitForHttpClose | (private) |
| 671 | fn | createGatewayCloseHandler | pub |

## src/gateway/server-cron-notifications.test.ts (582 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | waitForFast | (private) |
| 43 | fn | requireRecord | (private) |
| 50 | fn | webhookRequestBody | (private) |
| 63 | fn | createVoidDeferred | (private) |
| 64 | fn | resolve | (private) |
| 71 | fn | createWebhookJob | (private) |

## src/gateway/server-cron-notifications.ts (520 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CronLogger | (private) |
| 33 | type | CronAgentResolver | (private) |
| 38 | type | CronWebhookTarget | (private) |
| 43 | type | CronFailureAlertParams | (private) |
| 56 | fn | redactWebhookUrl | (private) |
| 65 | fn | redactOptionalWebhookUrl | (private) |
| 70 | fn | redactCommandCronEventForExternalDelivery | (private) |
| 126 | fn | resolveCronWebhookTargets | (private) |
| 155 | fn | buildCronWebhookHeaders | (private) |
| 165 | fn | buildCronFailureWebhookPayload | (private) |
| 179 | fn | buildCronFinishedWebhookPayload | (private) |
| 200 | fn | postCronWebhook | (private) |
| 252 | fn | dispatchDetachedCronNotification | (private) |
| 266 | fn | sendGatewayCronFailureAlert | pub |
| 272 | fn | sendGatewayCronFailureAlertUnderAdmission | (private) |
| 332 | fn | dispatchGatewayCronFinishedNotifications | pub |
| 419 | fn | dispatchCronFailureDestinationNotifications | (private) |

## src/gateway/server-cron.test.ts (2324 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | RunCronIsolatedAgentTurnMock | (private) |
| 99 | fn | enqueueSystemEvent | (private) |
| 103 | fn | enqueueSystemEventEntry | (private) |
| 114 | fn | consumeSelectedSystemEventEntries | (private) |
| 118 | fn | requestHeartbeat | (private) |
| 122 | fn | runHeartbeatOnce | (private) |
| 215 | fn | createCronConfig | (private) |
| 227 | fn | requireRecord | (private) |
| 234 | fn | requireArray | (private) |
| 239 | fn | callArg | (private) |
| 255 | fn | expectMainCronRunSessionKey | (private) |
| 259 | fn | lastMockCall | (private) |
| 268 | fn | expectHookContext | (private) |
| 281 | fn | expectIsolatedRunFields | (private) |
| 292 | fn | expectCleanupForSessionKeys | (private) |
| 1413 | fn | cronDeps | (private) |
| 1475 | fn | cronDeps | (private) |
| 1592 | fn | cronDeps | (private) |
| 1651 | fn | cronDeps | (private) |
| 1726 | fn | cronDeps | (private) |
| 1786 | fn | cronDeps | (private) |
| 1890 | fn | cronDeps | (private) |
| 2167 | fn | cronDeps | (private) |
| 2236 | fn | sessionsChanged | (private) |
| 2265 | type | ForceRunMock | (private) |

## src/gateway/server-cron.ts (959 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | type | GatewayCronState | pub |
| 84 | fn | formatOnExitRunSummary | (private) |
| 94 | fn | addOnExitRunSummary | (private) |
| 109 | fn | fireOnExitJob | pub |
| 120 | fn | reconcileCronExitWatchers | (private) |
| 133 | fn | pickDefined | (private) |
| 146 | fn | omitExplicitHeartbeatDestination | (private) |
| 159 | fn | sanitizeCronHeartbeatOverride | (private) |
| 166 | fn | toPluginCronJob | (private) |
| 196 | fn | isCommandCronJob | (private) |
| 201 | fn | buildGatewayCronService | pub |
| 212 | fn | findAgentEntry | (private) |
| 220 | fn | hasConfiguredAgent | (private) |
| 223 | fn | mergeRuntimeAgentConfig | (private) |
| 247 | fn | resolveCronAgent | (private) |
| 260 | fn | resolveCronSessionKey | (private) |
| 300 | fn | resolveCronTarget | (private) |
| 343 | fn | resolveCronHeartbeatOverride | (private) |
| 366 | fn | resolveSessionStorePath | (private) |
| 376 | fn | runCronChangedHook | (private) |
| 403 | fn | reconcileExitWatchers | (private) |
| 429 | fn | broadcastCronBoundSessionChanges | (private) |
| 918 | fn | stopExitWatchers | (private) |

## src/gateway/server-http.probe.test.ts (509 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | GatewayServerHarness | (private) |
| 27 | type | GatewayRequestOptions | (private) |
| 29 | fn | sendGatewayRequest | (private) |
| 151 | fn | releaseWatch | (private) |
| 152 | fn | markWatchStarted | (private) |
| 306 | fn | sendReady | (private) |

## src/gateway/server-http.ts (1193 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | type | PluginHttpRequestHandler | (private) |
| 79 | type | WatchNodeHttpRequestHandler | (private) |
| 81 | type | PluginHttpUpgradeHandler | (private) |
| 94 | type | ResolvePluginNodeCapabilityRoute | (private) |
| 147 | fn | isControlUiCatalogIconRequest | (private) |
| 160 | fn | resolvePluginGatewayAuthBypassPaths | (private) |
| 179 | fn | getCachedPluginGatewayAuthBypassPaths | (private) |
| 194 | fn | isOpenAiModelsPath | (private) |
| 198 | fn | isMcpAppStandalonePath | (private) |
| 202 | fn | isBoardWidgetPath | (private) |
| 206 | fn | isEmbeddingsPath | (private) |
| 210 | fn | isOpenAiChatCompletionsPath | (private) |
| 214 | fn | isOpenResponsesPath | (private) |
| 218 | fn | isToolsInvokePath | (private) |
| 222 | fn | isManagedOutgoingImagePath | (private) |
| 226 | fn | isSessionKillPath | (private) |
| 230 | fn | isSessionHistoryPath | (private) |
| 234 | fn | shouldEnforceDefaultPluginGatewayAuth | (private) |
| 242 | fn | canRevealReadinessDetails | (private) |
| 271 | fn | handleGatewayProbeRequest | (private) |
| 325 | fn | writeUpgradeAuthFailure | (private) |
| 354 | fn | parseGatewayRequestPath | (private) |
| 362 | type | GatewayHttpRequestStage | (private) |
| 368 | fn | runGatewayHttpRequestStages | (private) |
| 389 | fn | buildPluginRequestStages | (private) |
| 476 | fn | createGatewayHttpServer | pub |
| 530 | fn | handleRequestWithTrace | (private) |
| 536 | fn | handleRequest | (private) |
| 582 | fn | handleControlUiRequest | (private) |
| 960 | fn | attachGatewayUpgradeHandler | pub |
| 1095 | fn | releaseUpgradeBudget | (private) |
| 1139 | fn | attachWorkerGatewayUpgradeHandler | pub |
| 1163 | fn | releaseUpgradeBudget | (private) |

## src/gateway/server-maintenance.test.ts (780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createActiveRun | (private) |
| 41 | fn | createMaintenanceTimerDeps | (private) |
| 49 | type | MaintenanceTimerDeps | (private) |
| 51 | fn | staleRunTimestamp | (private) |
| 55 | fn | seedStaleRunBuffers | (private) |
| 64 | fn | expectStaleRunBuffersPresent | (private) |
| 73 | fn | expectStaleRunBuffersSwept | (private) |
| 82 | fn | seedBufferedAgentEvent | (private) |
| 94 | fn | seedStableDedupeEntries | (private) |
| 100 | fn | createTimedMaintenanceScenario | (private) |
| 108 | fn | stopMaintenanceTimers | (private) |
| 178 | fn | resolveSweep | (private) |
| 293 | fn | resolveCleanup | (private) |

## src/gateway/server-methods.ts (1044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 305 | fn | authorizeGatewayMethod | (private) |
| 357 | fn | isGatewayMethodAllowedDuringSuspension | (private) |
| 857 | fn | createRequestGatewayMethodRegistry | (private) |
| 897 | fn | handleGatewayRequest | pub |
| 1016 | fn | invokeHandler | (private) |
| 1029 | fn | invokeWithRequestScope | (private) |

## src/gateway/server-node-events.test.ts (1863 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 161 | fn | waitForFast | (private) |
| 186 | fn | runAdmittedNodeEvent | (private) |
| 202 | fn | expectSuspendBusyWithRootWork | (private) |
| 215 | fn | expectSuspendReady | (private) |
| 231 | fn | execEventHeartbeatOptions | (private) |
| 239 | fn | buildCtx | (private) |
| 265 | fn | buildExecCtx | (private) |
| 269 | fn | makeNodeClient | (private) |
| 300 | fn | expectFields | (private) |
| 310 | fn | mockCall | (private) |
| 314 | fn | mockCallArg | (private) |
| 318 | fn | expectPresencePersistCall | (private) |

## src/gateway/server-node-events.ts (947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | NodeEventHandleResult | (private) |
| 75 | type | NodeAgentCommandInput | (private) |
| 77 | fn | normalizeFiniteInteger | (private) |
| 81 | fn | dispatchNodeAgentCommand | (private) |
| 95 | fn | resolveVoiceTranscriptFingerprint | (private) |
| 125 | fn | shouldDropDuplicateVoiceTranscript | (private) |
| 167 | fn | shouldDropDuplicateExecFinished | (private) |
| 204 | fn | pruneBoundedTimestampMap | (private) |
| 229 | fn | compactExecEventOutput | (private) |
| 241 | fn | compactNotificationEventText | (private) |
| 253 | type | LoadedSessionEntry | (private) |
| 255 | fn | touchSessionStore | (private) |
| 291 | fn | queueSessionStoreTouch | (private) |
| 316 | fn | parseSessionKeyFromPayloadJSON | (private) |
| 331 | fn | parsePayloadObject | (private) |
| 346 | fn | sendReceiptAck | (private) |
| 454 | type | AgentDeepLink | (private) |

## src/gateway/server-plugins.test.ts (2120 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | HandleGatewayRequestOptions | (private) |
| 91 | fn | addLoadedPlugin | (private) |
| 115 | fn | createLookUpTableForTest | (private) |
| 169 | type | ServerPluginsModule | (private) |
| 170 | type | ServerPluginBootstrapModule | (private) |
| 171 | type | PluginRuntimeModule | (private) |
| 172 | type | PluginRuntimeRegistryModule | (private) |
| 173 | type | GatewayRequestScopeModule | (private) |
| 174 | type | MethodScopesModule | (private) |
| 175 | type | RuntimeStateModule | (private) |
| 185 | fn | createTestLog | (private) |
| 194 | fn | createTestContext | (private) |
| 198 | fn | isRecord | (private) |
| 202 | fn | requireRecord | (private) |
| 209 | fn | getLastMockFirstArg | (private) |
| 221 | fn | readRecordField | (private) |
| 229 | fn | getLastPluginLoadOptions | (private) |
| 236 | fn | getLastPluginLoadOption | (private) |
| 240 | fn | getLastDispatchedContext | (private) |
| 247 | fn | getLastDispatchedParams | (private) |
| 254 | fn | getRequiredLastDispatchedParams | (private) |
| 258 | fn | getLastDispatchedClientScopes | (private) |
| 266 | fn | getLastDispatchedClientInternal | (private) |
| 273 | fn | getLastPluginLoadLogger | (private) |
| 295 | fn | loadTestModules | (private) |
| 306 | fn | createSubagentRuntime | (private) |
| 328 | fn | registerActivePluginToolOwnership | (private) |
| 347 | fn | reloadFallbackGatewayContextModule | (private) |
| 354 | fn | loadGatewayPluginsForTest | (private) |
| 369 | fn | loadGatewayStartupPluginsForTest | (private) |

## src/gateway/server-plugins.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | PluginSubagentOverridePolicy | (private) |
| 58 | type | PluginSubagentPolicyState | (private) |
| 66 | fn | getPluginSubagentPolicyState | (private) |
| 71 | fn | normalizeAllowedModelRef | (private) |
| 87 | fn | setPluginSubagentOverridePolicies | pub |
| 126 | fn | authorizeFallbackModelOverride | (private) |
| 178 | fn | resolveRequestedFallbackModelRef | (private) |
| 199 | fn | hasAdminScope | (private) |
| 204 | fn | canClientUseModelOverride | (private) |
| 208 | fn | canTrustedOfficialPluginRequestScopes | (private) |
| 224 | fn | resolveRuntimeNodeInvokeSyntheticScopes | (private) |
| 236 | type | DispatchGatewayMethodInProcessOptions | (private) |
| 255 | fn | dispatchGatewayMethodInProcessRaw | pub |
| 318 | fn | getInProcessGatewayRequestContext | pub |
| 322 | fn | dispatchGatewayMethod | (private) |
| 331 | fn | dispatchGatewayMethodInProcess | pub |
| 339 | fn | dispatchTrustedPluginGatewayMethod | pub |
| 360 | fn | normalizeSubagentRunRuntime | (private) |
| 373 | fn | createGatewaySubagentRuntime | pub |
| 505 | fn | createGatewayNodesRuntime | pub |
| 557 | fn | createGatewayPluginRegistrationLogger | (private) |
| 570 | fn | loadGatewayPlugins | pub |

## src/gateway/server-reload-handlers.test.ts (7078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | ReloadHandlerParams | (private) |
| 72 | type | ManagedReloaderParams | (private) |
| 74 | fn | waitForFast | (private) |
| 91 | fn | createGatewayReloadHandlers | (private) |
| 110 | fn | startManagedGatewayConfigReloader | (private) |
| 141 | type | GmailWatcherRestartParams | (private) |
| 153 | type | StartGmailWatcherWithLogs | (private) |
| 154 | type | StopGmailWatcher | (private) |
| 324 | fn | createTestCronReconciliation | (private) |
| 333 | fn | createCronRestartPlan | (private) |
| 351 | fn | createHotTailPlan | (private) |
| 370 | fn | createDeferredVoid | (private) |
| 378 | fn | createReloadHandlersForTest | (private) |
| 458 | fn | createManagedRestartSequenceHarness | (private) |
| 548 | fn | nextPromotion | (private) |
| 552 | fn | nextReloadError | (private) |
| 680 | fn | writeConfig | (private) |
| 726 | fn | withGatewayRestartSignal | (private) |
| 746 | fn | testGatewayRestartListener | (private) |
| 785 | fn | runManagedOwnershipScenario | (private) |
| 1591 | fn | isCurrent | (private) |
| 2909 | fn | createChannelReloadPlan | (private) |
| 2927 | fn | withChannelReloadsEnabled | (private) |
| 2948 | fn | createAccountReloadPlan | (private) |
| 2960 | fn | withDiscordAccountResolver | (private) |
| 2985 | fn | withDiscordAccounts | (private) |
| 3525 | fn | createGmailReloadPlan | (private) |
| 3543 | fn | createGmailConfig | (private) |
| 4157 | fn | releasePreparation | (private) |
| 4330 | fn | writeConfig | (private) |
| 4454 | fn | acceptTerminalConfig | (private) |
| 4877 | fn | releaseEmissionPreflight | (private) |
| 5092 | type | ReloadOutcome | (private) |
| 5210 | type | GmailRestartOutcome | (private) |
| 6578 | fn | createTestHandlers | (private) |

## src/gateway/server-reload-handlers.ts (2568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 109 | type | RuntimeSecretsPreflightParams | (private) |
| 114 | type | CurrentRuntimeSecretsPreparation | (private) |
| 119 | fn | isRuntimeSecretsPreparationCurrent | (private) |
| 128 | fn | abortPendingChannelReloads | pub |
| 132 | type | GatewayHotReloadState | (private) |
| 140 | fn | activateSecretsRuntimeSnapshotIfCurrent | (private) |
| 164 | fn | restoreSecretsRuntimeSnapshotIfCurrent | (private) |
| 182 | type | GatewayReloadLog | (private) |
| 188 | type | GatewayGmailRestartAbortController | (private) |
| 193 | type | GatewayHotReloadPublication | (private) |
| 201 | type | GatewayRestartTransactionState | (private) |
| 203 | type | GatewayRestartTransactionResult | (private) |
| 208 | type | GatewayRestartRequestOptions | (private) |
| 214 | type | AcceptedRestartTarget | (private) |
| 220 | type | AcceptedRestartTargetOwnership | (private) |
| 224 | class | GatewayHotReloadCancelledError | pub |
| 231 | class | GatewayHotReloadRecoveryError | pub |
| 238 | class | GatewayReloadRequiresRecoveryOwnerError | (private) |
| 245 | class | GatewayHotReloadStaleSecretsError | (private) |
| 252 | class | GatewayConfigReloadSupersededError | (private) |
| 259 | type | GatewayPluginReloadResult | pub |
| 270 | fn | projectCanonicalSecretRefsOntoRuntime | (private) |
| 294 | fn | restoreCanonicalSecretRefs | (private) |
| 301 | fn | resetPreparedModelRuntimeStateForHotReload | (private) |
| 305 | fn | assertIrreversibleReloadPlanHasRecoveryOwner | (private) |
| 323 | fn | disposeMcpRuntimesWithTimeout | (private) |
| 350 | fn | collectChannelOperationFailures | (private) |
| 367 | type | GatewayReloadHandlerParams | (private) |
| 401 | type | ManagedGatewayConfigReloaderParams | (private) |
| 444 | fn | createGatewayReloadHandlers | pub |
| 449 | fn | getActiveCounts | (private) |
| 472 | fn | formatActiveDetails | (private) |
| 494 | fn | formatTaskBlockers | (private) |
| 503 | fn | waitForActiveWorkBeforeChannelReload | (private) |
| 573 | fn | isTransactionCurrent | (private) |
| 606 | fn | isLifecycleReloadAborted | (private) |
| 608 | fn | isPluginReloadAborted | (private) |
| 620 | fn | channelReloadTargets | (private) |
| 622 | fn | getChannelAutostartSuppression | (private) |
| 635 | fn | commitRuntime | (private) |
| 639 | fn | commit | (private) |
| 689 | fn | settleRecoveryRestart | (private) |
| 700 | fn | scheduleRecoveryRestart | (private) |
| 788 | fn | restartStoppedPluginChannels | (private) |
| 809 | fn | stopChannelsBeforePluginReplace | (private) |
| 1129 | fn | restartChannel | (private) |
| 1189 | type | RestartRequestDetails | (private) |
| 1204 | fn | recordAcceptedRestartTarget | (private) |
| 1258 | fn | deferGatewayRestartDebt | (private) |
| 1271 | fn | preserveRestartDebt | (private) |
| 1285 | fn | restoreConservativeRestartDebt | (private) |
| 1289 | fn | publishAcceptedRestartTarget | (private) |
| 1294 | fn | markRestartEmissionSettled | (private) |
| 1299 | fn | isCurrentRestartRetry | (private) |
| 1304 | fn | supersedeRestartRequest | (private) |
| 1318 | fn | stopRestartRetries | (private) |
| 1333 | fn | scheduleRestartEmissionRetry | (private) |
| 1377 | fn | acceptRestartConfig | (private) |
| 1411 | fn | retireRejectedRestartRequest | (private) |
| 1413 | fn | beginGatewayRestartLifecycle | (private) |
| 1438 | fn | pauseGatewayRestartForConfigCandidate | (private) |
| 1469 | fn | prepareForEmit | (private) |
| 1667 | fn | startManagedGatewayConfigReloader | pub |
| 1723 | fn | abortActiveGmailRestart | (private) |
| 1781 | fn | runManagedRestart | (private) |
| 1789 | fn | isCurrent | (private) |
| 1790 | fn | assertCurrent | (private) |
| 1959 | fn | assertCurrent | (private) |
| 2098 | fn | rollbackPublishedSource | (private) |
| 2192 | fn | rollbackPublishedSource | (private) |
| 2240 | fn | publishTerminalConfig | (private) |
| 2342 | fn | claimGenerationOwnership | (private) |
| 2353 | fn | publishRuntime | (private) |

## src/gateway/server-restart-sentinel-agent-delivery.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | QueuedAgentTurnSessionDelivery | (private) |
| 44 | fn | sessionDeliveryStateDirArgs | (private) |
| 48 | fn | deadLetterSessionDelivery | (private) |
| 64 | fn | hasQueuedVisiblePayload | (private) |
| 80 | fn | hasQueuedVisibleAgentPayload | (private) |
| 84 | fn | hasUnexpectedRecoverySideEffects | (private) |
| 94 | fn | resolveQueuedAgentRunId | (private) |
| 99 | fn | collectVisiblePayloadMediaUrls | (private) |
| 113 | fn | collectQueuedDeliveredMediaUrls | (private) |
| 123 | fn | hasAutomaticVisibleSendEvidence | (private) |
| 149 | fn | hasQueuedVisibleReplyEvidence | (private) |
| 159 | fn | evaluateQueuedGeneratedMediaAgentResult | (private) |
| 180 | fn | isDelivered | (private) |
| 313 | fn | deliverQueuedGeneratedMediaAgentTurn | pub |

## src/gateway/server-restart-sentinel.test.ts (3346 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | RestartSentinel | (private) |
| 11 | type | LoadedSessionEntry | (private) |
| 12 | type | RecordInboundSessionAndDispatchReplyParams | (private) |
| 18 | type | InProcessDispatchMock | (private) |
| 23 | type | AdvanceSessionDeliveryAgentRunMock | (private) |
| 413 | fn | expectRecordFields | (private) |
| 427 | fn | mockCallArg | (private) |
| 435 | fn | lastMockCallArg | (private) |
| 444 | fn | expectMockCallFields | (private) |
| 452 | fn | expectNthSystemEventFields | (private) |
| 460 | fn | expectContinuationDispatchFields | (private) |

## src/gateway/server-restart-sentinel.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | QueuedAgentTurnSessionDelivery | (private) |
| 71 | fn | sessionDeliveryStateDirArgs | (private) |
| 75 | fn | cloneRestartSentinelPayload | (private) |
| 84 | fn | hasRoutableDeliveryContext | (private) |
| 91 | fn | enqueueRestartSentinelWake | (private) |
| 108 | fn | waitForRetry | (private) |
| 115 | fn | buildRestartContinuationMessageId | (private) |
| 123 | fn | resolveRestartContinuationRoute | (private) |
| 144 | fn | isRestartContinuationBusyPayload | (private) |
| 150 | fn | isRestartContinuationBusyRetry | (private) |
| 154 | fn | resolveQueuedRestartContinuationMessageId | (private) |
| 161 | fn | resolveQueuedSessionDeliveryContext | (private) |
| 180 | fn | deliverQueuedSessionDelivery | pub |
| 332 | fn | buildQueuedRestartContinuation | (private) |
| 378 | fn | drainRestartContinuationQueue | (private) |
| 415 | fn | recoverPendingRestartContinuationDeliveries | pub |
| 433 | fn | loadRestartSentinelStartupTask | (private) |
| 456 | fn | run | (private) |
| 679 | fn | scheduleRestartSentinelWakeAttempt | (private) |
| 687 | fn | scheduleRestartSentinelWake | pub |
| 691 | fn | refreshLatestUpdateRestartSentinel | pub |
| 708 | fn | getLatestUpdateRestartSentinel | pub |
| 712 | fn | recordLatestUpdateRestartSentinel | pub |

## src/gateway/server-runtime-services.test.ts (712 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | waitForFast | (private) |
| 18 | type | StartSessionDeliveryRuntime | (private) |
| 623 | fn | createLog | (private) |
| 635 | fn | createTestCron | (private) |
| 639 | fn | createTestCronState | (private) |
| 650 | fn | createTestCronReconciliation | (private) |
| 659 | fn | activateScheduledServicesForTest | (private) |
| 683 | fn | createPostReadyMaintenanceScheduleParams | (private) |
| 703 | fn | createMaintenanceHandles | (private) |

## src/gateway/server-runtime-state.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | GatewayPluginRequestHandler | (private) |
| 82 | type | GatewayPluginUpgradeHandler | (private) |
| 94 | fn | loadGatewayPluginsHttpModule | (private) |
| 97 | fn | createGatewayRuntimeState | pub |
| 171 | fn | resolvePluginRouteRegistry | (private) |
| 259 | fn | resolvePluginNodeCapabilityRoute | (private) |

## src/gateway/server-startup-config.recovery.test.ts (672 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 99 | fn | testModel | (private) |
| 116 | fn | buildSnapshot | (private) |
| 133 | fn | buildDefaultSnapshot | (private) |
| 141 | fn | buildRuntimeSnapshot | (private) |
| 163 | fn | mockStartupSnapshot | (private) |
| 170 | fn | expectStartupResult | (private) |
| 190 | fn | expectPluginAutoEnableFor | (private) |
| 198 | fn | mockRuntimeAutoEnable | (private) |
| 206 | fn | expectRuntimeOnlyAutoEnableLogged | (private) |
| 211 | fn | withRuntimeConfig | (private) |
| 222 | fn | buildInvalidConfigSnapshot | (private) |
| 242 | fn | pluginSlotRawConfig | (private) |
| 249 | fn | enabledPluginRawConfig | (private) |
| 260 | fn | testStartupLog | (private) |
| 264 | fn | loadTestStartup | (private) |
| 278 | fn | expectStartupRejects | (private) |
| 282 | fn | installConfigIoMockDefaults | (private) |

## src/gateway/server-startup-config.secrets.test.ts (2886 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | PrepareRuntimeSecretsSnapshotForTest | (private) |
| 41 | type | ActivateRuntimeSecretsSnapshotForTest | (private) |
| 44 | type | GatewayStartupSecretsRuntimeMock | (private) |
| 50 | type | GatewayStartupLogMock | (private) |
| 56 | type | GatewayStartupStateEmitterMock | (private) |
| 63 | fn | activateSecretsRuntimeSnapshotForTest | (private) |
| 71 | fn | gatewayTokenConfig | (private) |
| 85 | fn | asConfig | (private) |
| 89 | fn | buildSnapshot | (private) |
| 103 | fn | preparedSnapshot | (private) |
| 124 | fn | preparedSnapshotWithGatewayToken | (private) |
| 143 | fn | callArg | (private) |
| 151 | fn | gatewaySecretRefSnapshot | (private) |
| 167 | fn | runtimeSecretsActivatorForTest | (private) |
| 182 | fn | runtimeSecretsActivatorOptionsForTest | (private) |
| 189 | fn | mockLogSecretsForTest | (private) |
| 197 | fn | readTimelineEvents | (private) |
| 205 | fn | installDiagnosticsTimelineEnv | (private) |
| 232 | fn | installIsolatedStartupFastPathEnv | (private) |
| 264 | fn | installGatewayStartupSecretsRuntimeMock | (private) |
| 312 | fn | cleanupGatewayStartupSecretsRuntimeMock | (private) |
| 322 | fn | createGatewayStartupSecretsRuntimeHarness | (private) |
| 348 | fn | activateImportedStartupConfig | (private) |
| 360 | fn | prepareGatewaySecretRefStartupConfig | (private) |
| 370 | fn | expectBootstrapAuthResolvedGatewayToken | (private) |
| 379 | fn | expectImportedStartupConfigUsesFullSecretsRuntime | (private) |
| 2723 | fn | config | (private) |

## src/gateway/server-startup-config.ts (702 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | GatewaySecretsStateEventCode | (private) |
| 60 | type | PrepareRuntimeSecretsSnapshot | (private) |
| 62 | type | ActivateRuntimeSecretsSnapshot | (private) |
| 64 | type | PreparedRuntimeSecretsSnapshot | (private) |
| 66 | type | RuntimeSecretsActivationParams | (private) |
| 81 | type | DeferredSecretsStateTransition | (private) |
| 88 | type | ActivateRuntimeSecrets | pub |
| 114 | fn | publishRuntimeSecretsStateTransition | pub |
| 123 | fn | createRuntimeSecretsActivator | pub |
| 164 | fn | loadActivateRuntimeSecretsSnapshot | (private) |
| 171 | fn | publishRecovery | (private) |
| 194 | fn | publishDegradation | (private) |
| 227 | fn | finishPreparedSnapshot | (private) |
| 349 | fn | activateRuntimeSecrets | (private) |
| 595 | fn | prepareGatewayStartupConfig | pub |
| 645 | fn | activateStartupSecrets | (private) |
| 691 | fn | activatedConfig | (private) |

## src/gateway/server-startup-plugins.test.ts (763 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 163 | fn | createLog | (private) |
| 172 | fn | firstCallArg | (private) |
| 180 | fn | mockDeferredSlackStartupPlugins | (private) |
| 195 | fn | slackConfig | (private) |
| 203 | fn | prepareBootstrapWithRuntimeConfig | (private) |
| 223 | fn | expectStartupPluginLoad | (private) |
| 512 | fn | registry | (private) |
| 657 | fn | customOllamaConfig | (private) |

## src/gateway/server-startup-post-attach.test.ts (2608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 258 | type | PostAttachParams | (private) |
| 259 | type | PostAttachRuntimeDeps | (private) |
| 261 | fn | waitForGatewayTestState | (private) |
| 268 | fn | mockCallArg | (private) |
| 276 | fn | firstStartupLog | (private) |
| 280 | fn | createStartupTraceRecorder | (private) |
| 306 | fn | firstGatewayStartCall | (private) |
| 2330 | fn | releaseHook | (private) |
| 2540 | fn | createPostAttachRuntimeDeps | (private) |
| 2555 | fn | createPostAttachParams | (private) |

## src/gateway/server-startup-post-attach.ts (1398 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | GatewayStartupTrace | (private) |
| 54 | type | GatewayMemoryStartupPolicy | (private) |
| 75 | type | GatewayPostReadySidecarHandle | pub |
| 78 | fn | stopPostReadySidecarsAfterCloseStarted | pub |
| 91 | fn | measureStartup | (private) |
| 100 | fn | measureProviderAuthWarm | (private) |
| 118 | fn | formatProviderAuthWarmMetrics | (private) |
| 125 | fn | shouldCheckRestartSentinel | (private) |
| 129 | fn | shouldSkipStartupModelPrewarm | (private) |
| 134 | fn | resolveGatewayMemoryStartupPolicy | (private) |
| 153 | fn | scheduleGatewayMemoryBackend | (private) |
| 161 | fn | start | (private) |
| 177 | fn | schedulePostAttachUpdateSentinelRefresh | (private) |
| 196 | fn | scheduleProviderAuthStatePrewarm | (private) |
| 210 | fn | isStopped | (private) |
| 217 | fn | loadProviderAuthWarmModule | (private) |
| 218 | fn | runRewarm | (private) |
| 248 | fn | scheduleAuthMapRewarm | (private) |
| 323 | fn | scheduleAgentRuntimePluginPrewarm | (private) |
| 335 | fn | isStopped | (private) |
| 379 | fn | schedulePostReadySidecarTask | (private) |
| 388 | fn | isStopped | (private) |
| 414 | fn | scheduleRestartSentinelWakeAfterReady | (private) |
| 428 | type | CleanStaleLockFiles | (private) |
| 429 | type | MarkRestartAbortedMainSessionsFromLocks | (private) |
| 432 | fn | cleanupStaleSessionLocks | (private) |
| 450 | fn | getMarker | (private) |
| 480 | fn | scheduleTranscriptsAutoStartSidecar | (private) |
| 510 | fn | hasRestartSentinelFast | (private) |
| 514 | fn | refreshLatestUpdateRestartSentinelIfPresent | (private) |
| 523 | fn | hasGatewayStartHooks | (private) |
| 527 | fn | hasGatewayStartupInternalHookListeners | (private) |
| 532 | fn | waitForAcpRuntimeBackendReady | (private) |
| 559 | fn | prewarmConfiguredPrimaryModel | (private) |
| 567 | fn | publishConfiguredModelRuntimeSnapshots | (private) |
| 580 | fn | publishStartupModelRuntime | (private) |
| 595 | fn | startGatewaySidecars | pub |
| 903 | type | GatewayPostAttachRuntimeDeps | (private) |
| 933 | fn | createDeferredGatewayUpdateCheck | (private) |
| 948 | fn | stop | (private) |
| 954 | fn | start | (private) |
| 999 | fn | startGatewayPostAttachRuntime | pub |
| 1086 | fn | loadStartupPluginsIfNeeded | (private) |
| 1167 | fn | reportPluginServices | (private) |
| 1172 | fn | waitForSidecarStartTurn | (private) |

## src/gateway/server-startup-secret-owner-isolation.test.ts (704 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | writeConfig | (private) |
| 88 | fn | baseConfig | (private) |
| 98 | fn | startVaultAclFixture | (private) |

## src/gateway/server-worker-placement-startup.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | class | WorkerDispatchTargetChangedError | (private) |
| 55 | fn | coordinateWorkerPlacementDispatch | (private) |
| 69 | fn | runReconciliation | (private) |
| 73 | fn | current | (private) |
| 78 | fn | clearCurrent | (private) |
| 87 | fn | current | (private) |
| 138 | type | WorkerPlacementSidecar | (private) |
| 140 | type | GatewayWorkerPlacementRuntimeParams | pub |
| 148 | type | GatewayWorkerPlacementRuntime | pub |
| 150 | fn | createGatewayWorkerPlacementRuntime | pub |
| 508 | fn | startRuntime | (private) |
| 532 | fn | clearCurrent | (private) |

## src/gateway/server.agent.gateway-server-agent-a.test.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | expectChannels | (private) |
| 58 | fn | setTestSessionStore | (private) |
| 69 | fn | runMainAgentDeliveryWithSession | (private) |
| 98 | fn | setGatewayModelCatalogForTest | (private) |
| 113 | fn | baseImageAttachment | (private) |
| 119 | fn | runAgentImageRequest | (private) |
| 148 | fn | expectBaseImageForwarded | (private) |
| 156 | fn | createStubChannelPlugin | (private) |

## src/gateway/server.agent.gateway-server-agent-b.test.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | expectChannels | (private) |
| 113 | fn | expectAgentRoutingCall | (private) |
| 132 | fn | writeMainSessionEntry | (private) |
| 150 | fn | sendAgentWsRequest | (private) |
| 164 | fn | sendAgentWsRequestAndWaitFinal | (private) |
| 179 | fn | useTempSessionStorePath | (private) |
| 594 | fn | dial | (private) |

## src/gateway/server.auth.browser-hardening.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | originForPort | (private) |
| 39 | type | GatewayConnectResponse | (private) |
| 40 | type | GatewayTestClient | (private) |
| 46 | type | SignedBrowserDevice | (private) |
| 48 | fn | openWs | (private) |
| 57 | fn | createSignedDevice | (private) |
| 92 | fn | writeTrustedProxyBrowserAuthConfig | (private) |
| 111 | fn | withTrustedProxyBrowserWs | (private) |
| 126 | fn | expectOriginNotAllowed | (private) |
| 134 | fn | expectRetryLater | (private) |
| 144 | fn | expectWrongTokenRejected | (private) |
| 160 | fn | createSignedBrowserDevice | (private) |
| 177 | fn | enableSingleAttemptLoopbackTokenAuth | (private) |
| 185 | fn | withSignedBrowserConnect | (private) |
| 209 | fn | expectBrowserOriginConnectRejected | (private) |

## src/gateway/server.auth.control-ui.suite.ts (2490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | expectArrayIncludes | (private) |
| 46 | fn | registerControlUiAndPairingSuite | pub |
| 81 | fn | buildSignedDeviceForIdentity | (private) |
| 104 | fn | connectSetupCodeBootstrapNode | (private) |
| 143 | fn | expectStatusAndHealthOk | (private) |
| 150 | fn | expectAdminRpcOk | (private) |
| 155 | fn | connectControlUiWithoutDeviceAndExpectOk | (private) |
| 172 | fn | createOperatorIdentityFixture | (private) |
| 188 | fn | startControlUiServerWithOperatorIdentity | (private) |
| 207 | fn | startControlUiServerWithClient | (private) |
| 217 | fn | startControlUiServer | (private) |
| 226 | fn | tamperPairedMetadata | (private) |
| 241 | fn | stripPairedMetadataRolesAndScopes | (private) |
| 248 | fn | overwritePairedPublicKey | (private) |
| 254 | fn | injectMalformedPairedAccessLists | (private) |
| 2124 | fn | connectWithNonce | (private) |

## src/gateway/server.auth.default-token.suite.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | registerDefaultAuthTokenSuite | pub |
| 49 | fn | expectNonceValidationError | (private) |
| 81 | fn | expectStatusMissingScopeButHealthAvailable | (private) |
| 89 | fn | readHelloOkAuth | (private) |

## src/gateway/server.chat.gateway-server-chat-b.test.ts (6834 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | waitForFast | (private) |
| 79 | type | GatewayHarness | (private) |
| 80 | type | GatewaySocket | (private) |
| 92 | fn | sendReq | (private) |
| 108 | fn | withGatewayChatHarness | (private) |
| 114 | fn | createSessionDir | (private) |
| 138 | fn | testSessionFilePath | (private) |
| 142 | fn | writeMainSessionStore | (private) |
| 153 | fn | futureFixtureUpdatedAt | (private) |
| 157 | fn | readOpenClawSeq | (private) |
| 169 | fn | writeGatewayConfig | (private) |
| 179 | fn | writeMainSessionTranscript | (private) |
| 208 | fn | removeTempDir | (private) |
| 212 | fn | createDirectChatContext | (private) |
| 253 | fn | sendControlUiChat | (private) |
| 366 | fn | readTimelineEvents | (private) |
| 375 | fn | fetchHistoryMessages | (private) |
| 391 | fn | fetchChatMessage | (private) |
| 420 | type | ConfiguredImageModelCase | (private) |
| 436 | fn | prepareMainHistoryHarness | (private) |
| 1422 | fn | callSend | (private) |
| 2504 | fn | send | (private) |
| 3534 | fn | callSend | (private) |
| 3738 | fn | callSend | (private) |
| 3971 | fn | callSend | (private) |
| 4499 | fn | dispatcher | (private) |
| 6365 | type | HistoryPage | (private) |
| 6435 | type | HistoryPage | (private) |
| 6704 | type | HistoryPage | (private) |

## src/gateway/server.chat.gateway-server-chat.test.ts (2413 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | waitForFast | (private) |
| 65 | fn | buildNoReplyHistoryFixture | (private) |
| 162 | fn | collectHistoryTextValues | (private) |
| 175 | fn | expectRecordFields | (private) |
| 186 | fn | expectStringRunId | (private) |
| 192 | fn | expectAgentWaitTimeout | (private) |
| 201 | fn | expectAgentWaitStartedAt | (private) |
| 207 | fn | sendChatAndExpectStarted | (private) |
| 298 | fn | waitForAgentRunOk | (private) |
| 307 | fn | abortChatRun | (private) |
| 316 | fn | mockBlockedChatReply | (private) |
| 324 | fn | finish | (private) |

## src/gateway/server.config-patch.test.ts (1236 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | requireWs | (private) |
| 40 | fn | requireConfigObject | (private) |
| 64 | fn | resetTempDir | (private) |
| 71 | fn | writeJsonFile | (private) |
| 76 | fn | getConfigHash | (private) |
| 85 | fn | sendConfigApply | (private) |
| 89 | fn | sendConfigSet | (private) |
| 93 | fn | configRawPayload | (private) |
| 100 | fn | configWithGatewayTokenSecretRef | (private) |
| 110 | fn | getCurrentConfigObject | (private) |
| 128 | fn | restoreConfigFileForTest | (private) |
| 134 | fn | makeRouteBinding | (private) |
| 147 | fn | makeAgentEntry | (private) |
| 151 | fn | expectSchemaLookupInvalid | (private) |
| 157 | fn | writeUnresolvedAuthProfileTokenRef | (private) |
| 192 | fn | ref | (private) |

## src/gateway/server.cron.test.ts (2085 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | getCronSuiteTempRoot | (private) |
| 75 | fn | yieldToEventLoop | (private) |
| 79 | fn | rmTempDir | (private) |
| 96 | fn | waitForCronEvent | (private) |
| 112 | fn | createCronCasePaths | (private) |
| 123 | fn | cleanupCronTestRun | (private) |
| 145 | fn | setupCronTestRun | (private) |
| 168 | type | DirectCronState | (private) |
| 172 | type | CronBroadcast | (private) |
| 174 | type | DirectCronResponse | (private) |
| 180 | fn | createDirectCronState | (private) |
| 198 | fn | createCronEventCollector | (private) |
| 206 | fn | flush | (private) |
| 250 | fn | directCronReq | (private) |
| 257 | fn | respond | (private) |
| 301 | fn | expectCronJobIdFromResponse | (private) |
| 309 | fn | addMainSystemEventCronJobDirect | (private) |
| 325 | fn | addWebhookCronJob | (private) |
| 349 | fn | writeCronConfig | (private) |
| 357 | fn | runCronJobForce | (private) |
| 364 | fn | expectEnqueuedRunPayload | (private) |
| 372 | fn | expectRecordFields | (private) |
| 379 | fn | expectFailureAnnounceCall | (private) |
| 405 | fn | runCronJobAndWaitForFinished | (private) |
| 414 | fn | getWebhookCall | (private) |

## src/gateway/server.device-token-rotate-authz.test.ts (731 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | connectPairingScopedOperator | (private) |
| 54 | fn | connectApprovedNode | (private) |
| 109 | fn | waitForMacrotasks | (private) |
| 118 | type | StartedGatewayClient | (private) |
| 119 | type | StartedGatewayServer | (private) |
| 120 | type | IssuedOperatorToken | (private) |
| 121 | type | PairingScopedDevice | (private) |
| 122 | type | PairedDevice | (private) |
| 123 | type | PairedDeviceToken | (private) |
| 124 | type | RevokedNodeDeviceContext | (private) |
| 131 | fn | issuePairingScopedTokenForAdminApprovedDevice | (private) |
| 150 | fn | issueTestOperatorToken | (private) |
| 164 | fn | issuePairingScopedAdminToken | (private) |
| 172 | fn | issuePairingOnlyOperatorToken | (private) |
| 180 | fn | issueMixedRolePairingScopedDevice | (private) |
| 222 | fn | connectPairingScopedDeviceOperator | (private) |
| 233 | fn | connectPairingScopedIssuedOperator | (private) |
| 244 | fn | closeStartedClient | (private) |
| 250 | fn | withStartedServer | (private) |
| 260 | fn | withPairingScopedIssuedWs | (private) |
| 273 | fn | revokeNodeToken | (private) |
| 290 | fn | expectNodeTokenStillRevoked | (private) |
| 298 | fn | expectLocalNodeReconnectDenied | (private) |
| 326 | fn | rotateOperatorToken | (private) |
| 334 | fn | expectDeniedRotation | (private) |
| 339 | fn | expectPairingOnlyOperatorToken | (private) |
| 346 | fn | withRevokedNodeDevice | (private) |

## src/gateway/server.hooks.test.ts (1057 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | resolveMainKey | (private) |
| 33 | fn | requireNonEmptyString | (private) |
| 40 | fn | buildHookJsonHeaders | (private) |
| 52 | fn | postHook | (private) |
| 68 | fn | setMainAndHooksAgents | (private) |
| 74 | fn | mockIsolatedRunOkOnce | (private) |
| 82 | fn | mockIsolatedRunOk | (private) |
| 90 | fn | waitForCronIsolatedRuns | (private) |
| 96 | type | HookCronRunCall | (private) |
| 116 | fn | cronRunCall | (private) |
| 124 | fn | postAgentHookWithIdempotency | (private) |
| 139 | fn | expectFirstHookDelivery | (private) |
| 152 | fn | expectHookAgentSessionRouting | (private) |
| 174 | fn | waitForSystemEventTexts | (private) |
| 184 | fn | writeHookTransformModule | (private) |

## src/gateway/server.impl.ts (2495 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 157 | type | LoadGatewayModelCatalog | (private) |
| 158 | type | LoadGatewayModelCatalogSnapshot | (private) |
| 171 | fn | resetPreparedModelCatalogForTest | pub |
| 183 | fn | approvalRequestTargetsSession | (private) |
| 198 | type | GatewayStartupChannelPlugin | (private) |
| 215 | fn | listGatewayStartupChannelPlugins | (private) |
| 219 | fn | resolveMediaCleanupTtlMs | (private) |
| 239 | fn | closeMcpLoopbackServerOnDemand | (private) |
| 269 | fn | createGatewayStartupTrace | (private) |
| 273 | fn | timelineOptions | (private) |
| 277 | fn | eventLoopTimelineEnabled | (private) |
| 280 | fn | ensureEventLoopDelay | (private) |
| 291 | fn | formatMetric | (private) |
| 293 | fn | mapTimelineName | (private) |
| 310 | fn | takeEventLoopSample | (private) |
| 323 | fn | emitEventLoopTimelineSample | (private) |
| 348 | fn | emit | (private) |
| 473 | fn | formatRuntimeGatewayAuthTokenWarning | (private) |
| 486 | fn | stopTaskRegistryMaintenanceOnDemand | (private) |
| 491 | type | AuthRateLimitConfig | (private) |
| 493 | fn | createGatewayAuthRateLimiters | (private) |
| 508 | type | GatewayCloseOptions | pub |
| 514 | type | GatewayServer | pub |
| 518 | type | GatewayServerOptions | pub |
| 574 | fn | startGatewayServer | pub |
| 686 | fn | emitSecretsStateEvent | (private) |
| 786 | fn | getActiveTaskCount | (private) |
| 850 | fn | prepareReloadCandidate | (private) |
| 1018 | fn | listStartupChannelGatewayMethods | (private) |
| 1028 | fn | listActiveGatewayMethods | (private) |
| 1062 | fn | getResolvedAuth | (private) |
| 1071 | fn | resolveSharedGatewaySessionGenerationForConfig | (private) |
| 1081 | fn | resolveCurrentSharedGatewaySessionGeneration | (private) |
| 1086 | fn | resolveSharedGatewaySessionGenerationForRuntimeSnapshot | (private) |
| 1141 | fn | releaseStartupAccountStarts | (private) |
| 1167 | fn | isGatewayStartupPending | (private) |
| 1253 | fn | updateWatchedSessionsPresence | (private) |
| 1281 | fn | rollbackPresence | (private) |
| 1404 | fn | clearPostReadyMaintenanceTimer | (private) |
| 1411 | fn | markClosePreludeStarted | (private) |
| 1421 | fn | stopConfigReloaderForClose | (private) |
| 1425 | fn | beginClosePrelude | (private) |
| 1432 | fn | runClosePrelude | (private) |
| 1475 | fn | stopRegisteredPostReadySidecars | (private) |
| 1482 | fn | stopRegisteredGatewayLifetimeSidecars | (private) |
| 1489 | fn | createCloseHandler | (private) |
| 1561 | fn | clearFallbackGatewayContextForServer | (private) |
| 1562 | fn | closeOnStartupFailure | (private) |
| 1573 | fn | broadcastVoiceWakeRoutingChanged | (private) |
| 1761 | fn | listAttachedGatewayMethods | (private) |
| 1771 | fn | replaceAttachedPluginRuntime | (private) |
| 1793 | fn | refreshAttachedGatewayDiscovery | (private) |
| 1824 | fn | listAttachedChannelConfigTargets | (private) |
| 1835 | fn | reloadAttachedGatewayPlugins | (private) |
| 2144 | fn | activateScheduledServicesWhenReady | (private) |

## src/gateway/server.models-voicewake-misc.test.ts (854 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | type | ModelCatalogRpcEntry | (private) |
| 98 | type | AgentCatalogFixtureEntry | (private) |
| 171 | fn | minimaxProviderConfig | (private) |
| 176 | type | ConfiguredProviderModelFixture | (private) |
| 184 | fn | configuredProviderModelConfig | (private) |
| 210 | fn | expectedConfiguredProviderModel | (private) |
| 219 | fn | listModels | (private) |
| 234 | fn | setAgentCatalog | (private) |
| 250 | fn | seedAgentModelCatalog | (private) |
| 319 | type | NodeGatewayEvent | (private) |
| 350 | fn | expectSingleModel | (private) |
| 807 | fn | sendReq | (private) |

## src/gateway/server.node-invoke-approval-bypass.test.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | createDeviceKeyMaterial | (private) |
| 48 | fn | createDeviceIdentity | (private) |
| 52 | fn | expectNoForwardedInvoke | (private) |
| 63 | fn | parseInvokeParamsJSON | (private) |
| 69 | fn | createInvokeParamCapture | (private) |
| 95 | fn | expectForwardedApprovedParams | (private) |
| 105 | fn | requireNonEmptyString | (private) |
| 112 | fn | requireRecord | (private) |
| 122 | fn | getConnectedNodeIds | (private) |
| 138 | fn | requestAllowOnceApproval | (private) |
| 173 | fn | approvedSystemRunParams | (private) |
| 189 | fn | approvedChatSystemRunParams | (private) |
| 205 | type | ChatApprovalContext | (private) |
| 214 | fn | requestChatAllowOnceApproval | (private) |
| 287 | fn | approveAllPendingPairings | (private) |
| 304 | fn | approvePendingNodePairings | (private) |
| 320 | fn | connectOperatorWithRetry | (private) |
| 324 | fn | connectOnce | (private) |
| 333 | fn | nonce | (private) |
| 366 | fn | connectOperator | (private) |
| 370 | fn | connectTrustedBackend | (private) |
| 393 | fn | connectOperatorWithNewDevice | (private) |
| 417 | fn | connectDeviceTokenOperator | (private) |
| 440 | fn | connectLinuxNode | (private) |
| 447 | fn | startNodeClient | (private) |
| 830 | fn | onInvoke | (private) |

## src/gateway/server.node-pairing-authz.test.ts (1029 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | makeNodePairingStateDir | (private) |
| 43 | fn | seedNodeDevice | (private) |
| 51 | fn | findPairedNode | (private) |
| 56 | fn | requireApprovedPairing | (private) |
| 65 | fn | connectNodeClient | (private) |
| 90 | fn | expectRePairingRequest | (private) |
| 139 | type | NodeDiagnostics | (private) |
| 200 | fn | expectRpcNodePairingApprovalRejected | (private) |
| 244 | fn | describeWithGatewayServer | (private) |
| 402 | fn | requestVictimNodeSurface | (private) |
| 412 | fn | openDeviceTokenSession | (private) |
| 752 | type | NodeDiagnostics | (private) |

## src/gateway/server.plugin-frame-auth.test.ts (704 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | createControlUiPluginAuthCookieForTest | (private) |
| 54 | fn | createRuntimeScopeRecorderHandler | (private) |
| 94 | fn | expectPluginRequestOk | (private) |

## src/gateway/server.plugin-http-auth.test.ts (807 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | PluginRequestHandler | (private) |
| 29 | fn | canonicalizePluginPath | (private) |
| 33 | fn | respondJsonRoute | (private) |
| 40 | fn | createHealthzPluginHandler | (private) |
| 50 | fn | expectHealthzProbeReserved | (private) |
| 60 | fn | createMattermostCallbackConfig | (private) |
| 71 | fn | createRootMountedControlUiOverrides | (private) |
| 80 | fn | withRootMountedControlUiServer | (private) |
| 92 | fn | withPluginGatewayServer | (private) |
| 102 | fn | expectProbeRoutesHealthy | (private) |
| 112 | fn | createRuntimeScopeRecorderHandler | (private) |
| 152 | fn | expectPluginRequestOk | (private) |

## src/gateway/server.plugin-node-capability-auth.test.ts (700 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | CanvasHostHandler | (private) |
| 35 | fn | fetchCanvas | (private) |
| 58 | fn | listen | (private) |
| 96 | fn | expectWsRejected | (private) |
| 121 | fn | expectWsConnected | (private) |
| 125 | fn | finish | (private) |
| 165 | fn | sendRawHttpRequest | (private) |
| 178 | fn | finish | (private) |
| 209 | type | CanvasGatewayListener | (private) |
| 211 | fn | canvasUrl | (private) |
| 215 | fn | fetchCanvasHost | (private) |
| 222 | fn | expectMalformedRequestTargetsRejected | (private) |
| 240 | fn | expectRepeatedCanvasAuthAttemptsRateLimited | (private) |
| 252 | fn | makeWsClient | (private) |
| 279 | fn | scopedCanvasPath | (private) |
| 293 | fn | withCanvasGatewayHarness | (private) |
| 396 | fn | withLoopbackTrustedProxy | (private) |

## src/gateway/server.roles-allowlist-update.test.ts (886 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | PollWaitOptions | (private) |
| 52 | fn | withoutSupervisorHints | (private) |
| 65 | fn | countConnectedNodes | (private) |
| 75 | fn | installCanvasNodePolicyForTest | (private) |
| 109 | fn | connectNodeClient | (private) |
| 143 | fn | requireNodeId | (private) |
| 150 | fn | approveAllPendingPairings | (private) |
| 159 | fn | getGatewayTestConfigPath | (private) |
| 167 | fn | connectNodeClientWithPairing | (private) |
| 180 | fn | connectNodeClientWithNodePairing | (private) |
| 214 | fn | findConnectedNodeByDisplayName | (private) |
| 228 | fn | findConnectedNodeIdByDisplayName | (private) |
| 233 | fn | expectConnectedCommands | (private) |
| 246 | fn | expectConnectedNodeCount | (private) |
| 255 | fn | expectPendingPairingCommands | (private) |
| 265 | fn | getPendingNodePairing | (private) |
| 273 | fn | approvePendingNodePairing | (private) |
| 281 | fn | invokeCanvasSnapshot | (private) |
| 290 | fn | expectCanvasSnapshotDenied | (private) |
| 296 | fn | createInvokeCapture | (private) |
| 327 | fn | respondToInvoke | (private) |
| 341 | fn | createDeviceIdentityForTest | (private) |
| 463 | fn | waitForConnectedCount | (private) |
| 474 | fn | getConnectedNodeId | (private) |

## src/gateway/server.sessions-send.test.ts (621 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | SessionSendTool | (private) |
| 40 | fn | getSessionsSendTool | (private) |
| 52 | fn | expectSessionsSendDetails | (private) |
| 66 | fn | emitLifecycleAssistantReply | (private) |

## src/gateway/server.sessions.compaction.test.ts (1745 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | CheckpointFixture | (private) |
| 46 | fn | buildSessionTranscriptLines | (private) |
| 66 | fn | compactionCheckpointEntry | (private) |
| 101 | fn | isCompactOperationEvent | (private) |
| 115 | fn | expectMainCompactionResult | (private) |
| 124 | fn | seedSessionEntry | (private) |
| 140 | fn | loadSessionEntry | (private) |
| 153 | fn | seedTranscriptRows | (private) |
| 184 | fn | loadTranscriptRows | (private) |

## src/gateway/server.sessions.create.test.ts (2027 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | waitForFast | (private) |
| 47 | fn | initializeGitWorkspace | (private) |
| 67 | fn | requireNonEmptyString | (private) |
| 1623 | fn | readMessages | (private) |

## src/gateway/server.sessions.delete-lifecycle.test.ts (1079 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | initializeRemoteBackedGitWorkspace | (private) |
| 76 | fn | expectObject | (private) |
| 82 | type | SessionDeleteRequest | (private) |
| 93 | fn | expectSessionDeleteSucceeds | (private) |
| 103 | fn | seedSubagentWorkerSession | (private) |
| 113 | fn | expectThreadBindingsUnbound | (private) |
| 364 | fn | releaseAdmission | (private) |
| 438 | fn | releaseBlockingMutation | (private) |
| 439 | fn | markBlockingMutationStarted | (private) |
| 563 | fn | releaseRuntimeCleanup | (private) |
| 607 | fn | releaseMutation | (private) |
| 608 | fn | markMutationStarted | (private) |
| 649 | fn | releaseUnbind | (private) |
| 861 | fn | acpMeta | (private) |

## src/gateway/server.sessions.list-changed.test.ts (1222 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | MockCalls | (private) |
| 46 | type | SessionStoreEntryOptions | (private) |
| 47 | type | MutationMethod | (private) |
| 49 | fn | isRecord | (private) |
| 53 | fn | requireRecord | (private) |
| 61 | fn | requireArray | (private) |
| 69 | fn | expectFields | (private) |
| 75 | fn | transcriptMessageContents | (private) |
| 83 | fn | expectRespondPayload | (private) |
| 91 | fn | findSession | (private) |
| 106 | fn | expectChangedBroadcast | (private) |
| 120 | fn | invokeSessionsList | (private) |
| 160 | fn | invokeSessionMutation | (private) |
| 198 | fn | invokeSessionsPatch | (private) |
| 202 | fn | writeMainSessionStore | (private) |
| 211 | fn | expectMainPatchBroadcast | (private) |
| 295 | fn | invokeSessionsCompact | (private) |
| 314 | fn | expectListedSessionActiveRun | (private) |

## src/gateway/server.sessions.reset-cleanup.test.ts (1061 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | ResetAcpState | (private) |
| 62 | type | ConfigFilePatch | (private) |
| 68 | fn | expectResetAcpState | (private) |
| 82 | fn | seedWaitingActiveMainSession | (private) |
| 88 | fn | resetMainSession | (private) |
| 97 | fn | installAcpRuntimeBackendWithFreshSession | (private) |
| 108 | fn | resolvedAcpMeta | (private) |
| 137 | fn | expectResetWithConfigSkipsBrowserCleanup | (private) |
| 286 | fn | releaseFirstRetirement | (private) |
| 290 | fn | markFirstRetirementStarted | (private) |
| 360 | fn | releaseAdmission | (private) |
| 409 | fn | releaseMutation | (private) |
| 410 | fn | markMutationStarted | (private) |
| 590 | fn | releaseHook | (private) |
| 594 | fn | markHookStarted | (private) |
| 641 | fn | releaseBlocker | (private) |
| 642 | fn | markBlockerStarted | (private) |

## src/gateway/server.sessions.reset-hooks.test.ts (1000 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | HookEventRecord | (private) |
| 34 | type | CommandNewHookEvent | (private) |
| 44 | type | SessionEntryWithCliBindings | (private) |
| 51 | fn | firstHookCall | (private) |
| 59 | fn | expectTranscriptResetEvent | (private) |
| 71 | fn | expectMainHookContext | (private) |
| 77 | fn | expectStringValue | (private) |
| 85 | fn | expectStringWithPrefix | (private) |
| 92 | fn | configureGlobalAgentSessionStore | (private) |
| 127 | fn | withGlobalAgentSessionStore | (private) |
| 139 | fn | writeGlobalSessionFile | (private) |
| 150 | fn | writeMessageTranscript | (private) |
| 167 | fn | writeMainTranscriptSession | (private) |
| 197 | fn | loadEntry | (private) |
| 205 | fn | writeMainSessionEntry | (private) |
| 216 | fn | resetMainSession | (private) |
| 220 | fn | resetSession | (private) |
| 229 | fn | createFromMainSession | (private) |
| 238 | fn | performSessionReset | (private) |
| 250 | fn | expectResetErrorMessage | (private) |
| 261 | fn | isCommandNewHookEvent | (private) |
| 270 | fn | commandNewHookEvents | (private) |
| 276 | fn | expectSingleCommandNewHookEvent | (private) |
| 288 | fn | claudeCliBindings | (private) |
| 298 | fn | cliBoundSessionEntry | (private) |
| 309 | fn | resolveGatewaySessionStorePathForKey | (private) |
| 320 | fn | loadGatewaySessionStoreForKey | (private) |
| 330 | fn | expectCliBindingsCleared | (private) |

## src/gateway/server.sessions.reset-models.test.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ResetSessionEntry | (private) |
| 80 | type | ModelResetEntry | (private) |
| 84 | type | ResolvedSessionModel | (private) |
| 85 | type | SessionEntryOverrides | (private) |
| 142 | fn | expectSqliteSessionFile | (private) |
| 146 | fn | expectOwnedChildMetadata | (private) |
| 153 | fn | expectMainResetModelFields | (private) |

## src/gateway/server.sessions.store-rpc.test.ts (972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | seedLinearTranscript | (private) |
| 47 | fn | loadTranscriptRows | (private) |
| 139 | fn | directSessionReq | (private) |

## src/gateway/server.talk-config.test.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | GatewayHarness | (private) |
| 27 | type | GatewaySocket | (private) |
| 28 | type | SecretRef | (private) |
| 29 | type | TalkConfigPayload | (private) |
| 47 | type | TalkConfig | (private) |
| 48 | type | SpeechProviderFixture | (private) |
| 64 | fn | createFreshOperatorDevice | (private) |
| 92 | fn | connectOperator | (private) |
| 103 | fn | writeTalkConfig | (private) |
| 128 | fn | fetchTalkConfig | (private) |
| 135 | fn | fetchOkTalkConfig | (private) |
| 144 | fn | withTalkConfigConnection | (private) |
| 157 | fn | talkApiSecretRef | (private) |
| 165 | fn | speechProviderFixture | (private) |
| 189 | fn | expectTalkSecretsConfig | (private) |
| 205 | fn | expectTalkConfig | (private) |

## src/gateway/session-compaction-checkpoints.test.ts (651 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | requireNonEmptyString | (private) |
| 37 | fn | isAssistantTextEvent | (private) |
| 49 | fn | writeAccessorSessionEntry | (private) |

## src/gateway/session-compaction-checkpoints.ts (974 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | CapturedCompactionCheckpointSnapshot | pub |
| 51 | type | SessionLeafState | (private) |
| 56 | type | SessionManagerCheckpointView | (private) |
| 59 | fn | resolveCompactionCheckpointTranscriptPosition | pub |
| 71 | type | ForkedCompactionCheckpointTranscript | (private) |
| 76 | type | CompactionCheckpointForkedTranscript | (private) |
| 80 | type | CompactionCheckpointTranscriptForkResult | (private) |
| 85 | type | CompactionCheckpointSessionMutationResult | (private) |
| 87 | type | BranchCheckpointSessionParams | (private) |
| 96 | type | RestoreCheckpointSessionParams | (private) |
| 104 | type | PersistSessionCompactionCheckpointParams | (private) |
| 124 | type | CompactionCheckpointStore | (private) |
| 149 | fn | checkpointSnapshotPath | (private) |
| 153 | fn | checkpointSnapshotBytes | (private) |
| 165 | fn | trimSessionCheckpoints | (private) |
| 204 | fn | sessionStoreCheckpoints | (private) |
| 210 | fn | statCheckpointSnapshotBytes | (private) |
| 232 | fn | resolveSessionCompactionCheckpointReason | pub |
| 251 | fn | readSessionHeaderFromTranscriptAsync | (private) |
| 286 | fn | readSessionIdFromTranscriptHeaderAsync | (private) |
| 290 | fn | parseTranscriptLine | (private) |
| 302 | fn | readTranscriptEntriesForForkAsync | (private) |
| 342 | fn | trimTranscriptEntriesThroughLeaf | (private) |
| 359 | fn | readSessionLeafStateFromTranscriptAsync | pub |
| 440 | fn | readSessionLeafStateFromRecords | (private) |
| 460 | fn | forkCompactionCheckpointTranscriptAsync | (private) |
| 522 | fn | resolveCheckpointTranscriptForkSource | (private) |
| 550 | fn | forkCheckpointTranscriptFromStoredBoundary | (private) |
| 579 | fn | cloneCheckpointSessionEntry | (private) |
| 620 | fn | branchCheckpointSessionFromStoredBoundary | (private) |
| 664 | fn | restoreCheckpointSessionFromStoredBoundary | (private) |
| 702 | fn | shouldRouteCheckpointSessionMutationToSqlite | (private) |
| 744 | fn | createFileBackedCompactionCheckpointStore | pub |
| 759 | fn | captureCompactionCheckpointSnapshotAsync | (private) |
| 818 | fn | cleanupCompactionCheckpointSnapshot | (private) |
| 831 | fn | cleanupTrimmedCompactionCheckpointFiles | (private) |
| 865 | fn | persistSessionCompactionCheckpoint | (private) |
| 956 | fn | listSessionCompactionCheckpoints | pub |
| 962 | fn | getSessionCompactionCheckpoint | pub |

## src/gateway/session-create-service.ts (819 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | TrustedCatalogSessionTarget | (private) |
| 70 | type | RequestedSessionAgentIdResolution | (private) |
| 74 | fn | resolveRequestedSessionAgentId | pub |
| 125 | fn | buildDashboardSessionKey | pub |
| 129 | type | CreatedGatewaySession | (private) |
| 136 | type | TrustedInitialSessionEntry | (private) |
| 147 | type | CreateGatewaySessionResult | (private) |
| 158 | fn | createGatewaySession | pub |

## src/gateway/session-history-state.test.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | HistorySnapshot | (private) |
| 11 | type | RawStateOptions | (private) |
| 16 | fn | textContent | (private) |
| 20 | fn | assistantTextMessage | (private) |
| 28 | fn | userTextMessage | (private) |
| 36 | fn | newState | (private) |
| 44 | fn | newStateWithUserText | (private) |
| 48 | fn | expectOnlyAssistantText | (private) |
| 52 | fn | messageToolCall | (private) |
| 65 | fn | messageToolResult | (private) |
| 80 | fn | appendAssistantText | (private) |

## src/gateway/session-lifecycle-state.test.ts (519 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | UpdateSessionEntry | (private) |
| 28 | type | LifecycleEvent | (private) |
| 32 | fn | cronSessionEntry | (private) |
| 48 | fn | persistExactCronLifecycle | (private) |
| 81 | fn | persistLifecycle | (private) |

## src/gateway/session-message-events.test.ts (1794 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | fn | createSessionStoreFile | (private) |
| 88 | fn | withOperatorSessionSubscriber | (private) |
| 97 | fn | waitForSessionMessageEvent | (private) |
| 112 | fn | waitForSessionsChangedMessagePhase | (private) |
| 127 | fn | emitTranscriptUpdateAndCollectMessageEvent | (private) |
| 151 | fn | expectNoMessageWithin | (private) |
| 165 | fn | requireRecord | (private) |
| 172 | fn | expectRecordFields | (private) |
| 201 | fn | findWatchedEntry | (private) |
| 1613 | fn | collectWorkerChats | (private) |
| 1681 | fn | waitForChat | (private) |
| 1695 | fn | push | (private) |

## src/gateway/session-reset-service.ts (1396 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | fn | archiveSessionTranscriptsForSessionDetailed | pub |
| 109 | fn | emitGatewaySessionEndPluginHook | pub |
| 165 | fn | emitGatewaySessionStartPluginHook | pub |
| 212 | type | DrainActiveSessionsForShutdownResult | (private) |
| 227 | fn | drainActiveSessionsForShutdown | pub |
| 298 | fn | emitSessionUnboundLifecycleEvent | pub |
| 331 | fn | ensureSessionRuntimeCleanup | (private) |
| 345 | fn | closeTrackedBrowserTabs | (private) |
| 379 | fn | retireMcpRuntime | (private) |
| 392 | fn | ensureMcpRetirementWatcher | (private) |
| 397 | fn | watcher | (private) |
| 448 | fn | runAcpCleanupStep | (private) |
| 466 | fn | closeAcpRuntimeForSession | (private) |
| 590 | fn | buildPendingAcpMeta | (private) |
| 613 | fn | ensureFreshAcpResetState | (private) |
| 677 | fn | closeChildAcpRuntimesForParent | (private) |
| 741 | fn | cleanupSessionBeforeMutation | pub |
| 814 | fn | emitGatewayBeforeResetPluginHook | pub |
| 862 | fn | readGatewayBeforeResetPluginHookMessages | (private) |
| 894 | fn | performGatewaySessionReset | pub |
| 924 | fn | resetTarget | (private) |
| 1076 | fn | isResetLifecycleCurrent | (private) |

## src/gateway/session-transcript-files.fs.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ArchiveFileReason | (private) |
| 24 | type | ResetArchiveCandidate | (private) |
| 25 | type | ArchivedSessionTranscript | pub |
| 51 | fn | clearSessionTranscriptResetArchiveDiscoveryCache | (private) |
| 56 | fn | deleteResetArchiveHeaderMatchesForArchives | (private) |
| 69 | fn | setResetArchiveDiscoveryCacheEntry | (private) |
| 87 | fn | setResetArchiveHeaderMatchCacheEntry | (private) |
| 101 | fn | classifySessionTranscriptCandidate | (private) |
| 112 | fn | canonicalizePathForComparison | (private) |
| 121 | fn | resolveSessionTranscriptCandidates | pub |
| 129 | fn | pushCandidate | (private) |
| 179 | fn | resetArchiveHeaderMatchesSessionId | (private) |
| 240 | fn | listResetArchiveCandidatesForTranscriptAsync | (private) |
| 287 | fn | resolveLatestResetArchiveForTranscriptAsync | (private) |
| 307 | fn | transcriptArchiveIdentity | (private) |
| 318 | fn | resolveSessionTranscriptResetArchiveCandidatesAsync | pub |
| 366 | fn | archiveFileOnDisk | (private) |
| 384 | fn | archiveSessionTranscriptPaths | pub |
| 409 | fn | archiveSessionTranscripts | pub |
| 425 | fn | archiveSessionTranscriptsDetailed | pub |
| 469 | fn | resolveStableSessionEndTranscript | pub |
| 508 | type | SessionArchiveCleanupRule | (private) |
| 516 | fn | cleanupArchivedSessionTranscripts | pub |

## src/gateway/session-transcript-readers.ts (728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | SessionTitleFields | (private) |
| 53 | type | ReadRecentSessionMessagesResult | pub |
| 59 | type | ReadSessionMessagesResult | (private) |
| 64 | type | ReadSessionMessageByIdResult | (private) |
| 71 | type | ResolvedTranscriptReadTarget | (private) |
| 79 | fn | resolveTranscriptReadTarget | pub |
| 94 | fn | resolveConcreteReadStorePath | (private) |
| 102 | fn | isSqliteReadTarget | pub |
| 106 | fn | toTranscriptReadScope | pub |
| 117 | fn | readTranscriptRecordTimestampMs | (private) |
| 124 | fn | extractMessageRecord | (private) |
| 142 | type | SqliteMessageRecord | (private) |
| 149 | fn | extractMessageRecordsFromEventEntries | (private) |
| 158 | fn | readSqliteMessageRecordsSync | (private) |
| 164 | fn | readSqliteMessageRecords | (private) |
| 172 | fn | readSqliteMessagesSync | (private) |
| 176 | fn | normalizeRecentSqliteReadOptions | (private) |
| 190 | fn | readRecentSqliteMessageRecords | (private) |
| 202 | fn | readRecentSqliteUsageMessages | (private) |
| 214 | fn | sqliteRecordMessageWithSeq | (private) |
| 229 | fn | sqliteMessageEventWithSeq | pub |
| 234 | fn | extractMessageRole | (private) |
| 240 | fn | extractMessageText | (private) |
| 266 | fn | readSqliteTitleFields | (private) |
| 287 | fn | extractSqliteUsageSnapshot | (private) |
| 336 | fn | readSqliteAggregateUsageSnapshot | (private) |
| 342 | fn | aggregateSqliteUsageSnapshots | (private) |
| 413 | fn | buildSqlitePreviewItems | (private) |
| 422 | fn | readSessionMessagesAsync | pub |
| 463 | fn | readSessionMessagesWithSourceAsync | pub |
| 498 | fn | readSessionMessageByIdAsync | pub |
| 536 | fn | visitSessionMessagesAsync | pub |
| 561 | fn | readSessionMessageCountAsync | pub |
| 577 | fn | readRecentSessionMessagesWithStatsAsync | pub |
| 609 | fn | readSessionMessagesPageWithStatsAsync | pub |
| 641 | fn | readSessionTitleFieldsFromTranscript | pub |
| 659 | fn | readSessionTitleFieldsFromTranscriptAsync | pub |
| 677 | fn | readLatestSessionUsageFromTranscriptAsync | pub |
| 693 | fn | readRecentSessionUsageFromTranscript | pub |
| 711 | fn | readSessionPreviewItemsFromTranscript | pub |

## src/gateway/session-utils.fs.test.ts (2251 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | buildSessionAssistantMessage | (private) |
| 52 | fn | registerTempSessionStore | (private) |
| 68 | fn | writeTranscript | (private) |
| 74 | fn | writeResetArchive | (private) |
| 85 | fn | installAsyncPositionalShortReadProxy | (private) |
| 109 | fn | installSyncPositionalShortReadProxy | (private) |
| 128 | fn | appendBlockedUserMessageWithSessionManager | (private) |
| 139 | fn | appendBlockedUserMessage | (private) |
| 168 | fn | buildBasicSessionTranscript | (private) |
| 180 | fn | requireRecord | (private) |
| 187 | fn | expectMessageFields | (private) |
| 206 | fn | expectUsageFields | (private) |
| 1446 | fn | writeTranscriptLines | (private) |
| 1451 | fn | readPreview | (private) |
| 2098 | fn | buildLargeTitleTranscript | (private) |

## src/gateway/session-utils.fs.ts (1795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | SessionTitleFields | (private) |
| 52 | type | SessionTitleFieldsCacheEntry | (private) |
| 69 | type | TranscriptFileHandle | (private) |
| 71 | fn | readSessionTitleFieldsCacheKey | (private) |
| 79 | fn | getCachedSessionTitleFields | (private) |
| 97 | fn | setCachedSessionTitleFields | (private) |
| 112 | fn | getCachedTranscriptMessageCount | (private) |
| 126 | fn | setCachedTranscriptMessageCount | (private) |
| 141 | fn | yieldTranscriptScan | (private) |
| 148 | fn | attachOpenClawTranscriptMeta | pub |
| 171 | fn | readTranscriptMessageIdempotencyKey | (private) |
| 180 | fn | readSessionMessages | pub |
| 194 | type | ReadRecentSessionMessagesOptions | pub |
| 202 | type | ReadSessionMessagesPageOptions | (private) |
| 209 | type | ReadSessionMessagesAsyncOptions | pub |
| 220 | type | ReadRecentSessionMessagesResult | pub |
| 226 | type | ReadSessionMessagesResult | (private) |
| 233 | type | TailTranscriptRecord | (private) |
| 237 | fn | normalizeRecentSessionReadOptions | (private) |
| 248 | fn | readRecentTranscriptTailLinesAsync | (private) |
| 279 | fn | isOversizedTranscriptLine | (private) |
| 283 | fn | isJsonObjectFieldToken | (private) |
| 294 | fn | extractJsonStringFieldWindow | (private) |
| 325 | fn | extractJsonStringFieldSuffix | (private) |
| 330 | fn | buildOversizedTranscriptRecord | (private) |
| 359 | fn | parseTailTranscriptRecord | (private) |
| 375 | fn | selectBoundedActiveTailRecords | (private) |
| 404 | fn | readTranscriptRecords | (private) |
| 418 | fn | selectActiveTranscriptRecords | (private) |
| 422 | fn | readSelectedTranscriptRecords | (private) |
| 430 | fn | transcriptRecordsToMessages | (private) |
| 443 | fn | parseRecentTranscriptTailMessages | (private) |
| 454 | fn | visitTranscriptLines | (private) |
| 481 | fn | visitTranscriptLinesAsync | (private) |
| 512 | fn | readSessionMessagesAsync | pub |
| 529 | fn | readSessionMessagesWithSourceAsync | pub |
| 563 | fn | readSessionMessageByIdAsync | pub |
| 598 | fn | visitSessionMessagesAsync | pub |
| 623 | fn | readSessionMessageCountAsync | pub |
| 636 | fn | readRecentSessionMessagesAsync | pub |
| 653 | fn | readRecentSessionMessagesWithSourceAsync | (private) |
| 681 | fn | readRecentSessionMessagesFromPathAsync | (private) |
| 702 | fn | readRecentSessionMessagesWithStatsAsync | pub |
| 730 | fn | readSessionMessagesPageWithStatsAsync | pub |
| 762 | fn | parsedSessionEntryToMessage | (private) |
| 802 | fn | indexedTranscriptEntryToMessage | (private) |
| 806 | fn | indexedTranscriptEntryToMessages | pub |
| 813 | fn | capArrayByJsonBytes | pub |
| 833 | type | TranscriptMessage | (private) |
| 839 | fn | readSessionTitleFieldsFromTranscript | pub |
| 910 | fn | readSessionTitleFieldsFromTranscriptAsync | pub |
| 975 | fn | extractTextFromContent | (private) |
| 997 | fn | readTranscriptHeadChunk | (private) |
| 1006 | fn | readTranscriptHeadChunkAsync | (private) |
| 1018 | fn | extractFirstUserMessageFromTranscriptChunk | (private) |
| 1047 | fn | findExistingTranscriptPath | pub |
| 1057 | fn | findExistingTranscriptHistoryPathAsync | (private) |
| 1102 | fn | resolveSessionHistoryTranscriptPathAsync | pub |
| 1113 | fn | readSessionMessageCountFromPathAsync | (private) |
| 1132 | fn | withOpenTranscriptFd | (private) |
| 1150 | fn | extractLastMessagePreviewFromTranscriptLines | (private) |
| 1171 | fn | readLastMessagePreviewFromOpenTranscript | (private) |
| 1188 | fn | readLastMessagePreviewFromOpenTranscriptAsync | (private) |
| 1205 | type | SessionTranscriptUsageSnapshot | pub |
| 1219 | fn | extractTranscriptUsageCost | (private) |
| 1231 | fn | resolvePositiveUsageNumber | (private) |
| 1235 | fn | extractTranscriptContentEstimatedChars | (private) |
| 1264 | fn | extractTranscriptTokenEstimateFromLine | (private) |
| 1314 | fn | extractUsageSnapshotFromTranscriptLine | (private) |
| 1404 | fn | extractAggregateUsageFromTranscriptLines | (private) |
| 1507 | fn | extractAggregateUsageFromTranscriptChunk | (private) |
| 1515 | fn | readLatestSessionUsageFromTranscriptAsync | pub |
| 1543 | fn | readRecentSessionUsageFromTranscript | pub |
| 1579 | type | TranscriptContentEntry | (private) |
| 1585 | type | TranscriptPreviewMessage | (private) |
| 1593 | fn | normalizeRole | (private) |
| 1611 | fn | truncatePreviewText | (private) |
| 1619 | fn | extractPreviewText | (private) |
| 1650 | fn | isToolCall | (private) |
| 1654 | fn | extractToolNames | (private) |
| 1658 | fn | extractMediaSummary | (private) |
| 1672 | fn | buildSessionPreviewItems | pub |
| 1720 | fn | readRecentMessagesFromTranscript | (private) |
| 1769 | fn | readSessionPreviewItemsFromTranscript | pub |

## src/gateway/session-utils.search.test.ts (945 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | TranscriptUsageFixture | (private) |
| 62 | fn | createModelDefaultsConfig | (private) |
| 76 | fn | closeSessionSqliteDatabasesForTest | (private) |
| 81 | fn | createLegacyRuntimeListConfig | (private) |
| 90 | fn | createLegacyRuntimeStore | (private) |
| 100 | fn | buildLegacyRuntimeRow | (private) |
| 111 | fn | createOpenAiPricingConfig | (private) |
| 142 | fn | appendUsageTranscriptMessage | (private) |
| 171 | fn | withTranscriptFixture | (private) |
| 208 | fn | createAnthropicContext1mConfig | (private) |
| 222 | fn | listSingleSession | (private) |
| 238 | fn | listMainSession | (private) |
| 247 | fn | registerRunningSubagent | (private) |
| 270 | type | ListedSession | (private) |
| 272 | fn | expectSessionModel | (private) |
| 281 | fn | expectTranscriptBackfill | (private) |
| 295 | fn | sessionEntry | (private) |
| 303 | fn | mainSessionStore | (private) |
| 307 | fn | transcriptFallbackEntry | (private) |
| 318 | fn | expectAnthropicBackfill | (private) |
| 325 | fn | expectOpenAiGpt54Backfill | (private) |
| 334 | fn | freeOpenAiUsageEntry | (private) |
| 345 | fn | anthropicUsageEntry | (private) |
| 358 | fn | zeroUsageTranscriptEntry | (private) |
| 371 | fn | childTranscriptEntry | (private) |
| 441 | fn | listSearchSessions | (private) |
| 454 | fn | listConfiguredMainSession | (private) |

## src/gateway/session-utils.subagent.test.ts (1319 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | seedSessionEntry | (private) |

## src/gateway/session-utils.test.ts (3067 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | closeSessionSqliteDatabasesForTest | (private) |
| 59 | fn | withStateDirEnv | (private) |
| 72 | fn | seedSessionEntries | (private) |
| 81 | fn | appendTranscriptMessages | (private) |
| 101 | fn | createSymlinkOrSkip | (private) |
| 114 | fn | createSingleAgentAvatarConfig | (private) |
| 123 | fn | createModelDefaultsConfig | (private) |
| 143 | fn | requireString | (private) |
| 150 | fn | expectFields | (private) |
| 830 | fn | row | (private) |
| 1097 | fn | projectKind | (private) |
| 1408 | fn | acpEntry | (private) |

## src/gateway/session-utils.ts (2928 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 147 | fn | formatSessionIdPrefix | (private) |
| 157 | fn | truncateTitle | (private) |
| 169 | fn | deriveSessionTitle | pub |
| 202 | fn | resolveSessionRuntimeMs | (private) |
| 209 | fn | resolvePositiveNumber | (private) |
| 213 | fn | deriveSessionUnread | (private) |
| 226 | type | SessionCompactionCheckpointEntry | (private) |
| 228 | fn | isProjectableCompactionCheckpoint | (private) |
| 250 | fn | resolveProjectableCompactionCheckpoints | (private) |
| 260 | fn | resolveLatestCompactionCheckpoint | (private) |
| 270 | fn | buildCompactionCheckpointPreview | (private) |
| 297 | fn | resolveModelCostConfigCached | (private) |
| 315 | fn | resolveEstimatedSessionCostUsd | (private) |
| 368 | fn | isFinitePositiveTimestamp | (private) |
| 372 | fn | shouldKeepStoreOnlyChildLink | (private) |
| 390 | type | SessionListRowContext | (private) |
| 409 | type | SessionListRowContextProvider | (private) |
| 411 | type | SingleRowChildSessionCandidateCacheEntry | (private) |
| 417 | type | GatewaySessionStoreTarget | (private) |
| 424 | type | GatewaySessionStoreTargetWithStore | (private) |
| 433 | fn | rememberSingleRowChildSessionCandidateCacheEntry | (private) |
| 450 | fn | buildStoreChildSessionCandidateIndex | (private) |
| 472 | fn | getSingleRowChildSessionCandidates | (private) |
| 493 | fn | resolveRuntimeChildSessionKeys | (private) |
| 536 | fn | addChildSessionKey | (private) |
| 551 | fn | buildStoreChildSessionIndex | (private) |
| 599 | fn | resolveStoreChildSessionKeysFromCandidates | (private) |
| 638 | fn | buildSessionListRowContext | (private) |
| 649 | fn | buildSessionListRowContextFromParts | (private) |
| 663 | fn | buildSessionListRowMetadataContext | (private) |
| 670 | fn | buildSingleRowStoreChildSessionsByKey | (private) |
| 688 | fn | createSessionRowModelCacheKey | (private) |
| 692 | fn | resolveSessionSelectedModelRef | (private) |
| 727 | fn | resolveSessionRowThinkingMetadata | (private) |
| 785 | fn | mergeChildSessionKeys | (private) |
| 798 | fn | resolveChildSessionKeys | (private) |
| 815 | fn | resolveTranscriptUsageFallback | (private) |
| 894 | fn | readAcpMetaForDeletedAgentCheck | (private) |
| 943 | fn | resolveDeletedAgentIdFromSessionKey | pub |
| 974 | fn | loadSessionEntry | pub |
| 998 | fn | resolveFreshestSessionStoreMatchFromStoreKeys | (private) |
| 1016 | fn | resolveFreshestSessionEntryFromStoreKeys | pub |
| 1023 | fn | findFreshestStoreMatch | (private) |
| 1054 | fn | pruneLegacyStoreKeys | (private) |
| 1074 | fn | migrateAndPruneGatewaySessionStoreKey | pub |
| 1105 | fn | classifySessionKey | (private) |
| 1121 | fn | parseGroupKey | (private) |
| 1137 | fn | isGroupOrChannelDisplaySession | (private) |
| 1149 | fn | isStorePathTemplate | (private) |
| 1153 | fn | resolveConcreteSessionStorePath | (private) |
| 1161 | fn | normalizeFallbackList | (private) |
| 1179 | fn | resolveGatewayAgentModel | (private) |
| 1196 | fn | listAgentsForGateway | pub |
| 1301 | fn | buildGatewaySessionStoreScanTargets | (private) |
| 1324 | fn | resolveGatewaySessionStoreCandidates | (private) |
| 1339 | fn | loadGatewaySessionLookupStore | (private) |
| 1364 | fn | resolveGatewaySessionStoreLookup | (private) |
| 1391 | fn | loadStore | (private) |
| 1432 | fn | isAgentScopedSentinelSessionKey | (private) |
| 1436 | fn | resolveExplicitDeletedLegacyMainStoreTarget | (private) |
| 1504 | fn | resolveGatewaySessionStoreTargetWithStore | pub |
| 1558 | fn | resolveGatewaySessionStoreTarget | pub |
| 1571 | fn | resolveGatewaySessionThinkingLevel | (private) |
| 1599 | fn | resolveGatewaySessionThinkingDefault | (private) |
| 1628 | type | GatewaySessionThinkingProjectionParams | (private) |
| 1639 | fn | resolveGatewaySessionThinkingProjectionInternal | (private) |
| 1706 | fn | resolveGatewaySessionThinkingProjection | pub |
| 1718 | fn | getSessionDefaults | pub |
| 1773 | fn | resolveGatewayModelSupportsImages | pub |
| 1846 | fn | resolveSessionDisplayModelIdentityRefCached | (private) |
| 1870 | fn | resolveSessionDisplayModelIdentityRef | pub |
| 1909 | fn | buildGatewaySessionRow | pub |
| 2304 | fn | resolveSessionListSearchDisplayName | (private) |
| 2326 | fn | addSessionListSearchModelFields | (private) |
| 2338 | fn | matchesSessionListSearch | (private) |
| 2344 | fn | appendStoredSessionModelSearchFields | (private) |
| 2356 | fn | shouldResolveDerivedSessionModelSearchFields | (private) |
| 2362 | fn | resolveSessionListRowContext | (private) |
| 2369 | fn | resolveSessionListSearchModelFields | (private) |
| 2420 | fn | loadGatewaySessionRow | pub |
| 2459 | fn | buildGatewaySessionInfo | pub |
| 2499 | type | SessionEntrySelection | (private) |
| 2508 | fn | resolveSessionsListLimit | (private) |
| 2518 | fn | resolveSessionsListOffset | (private) |
| 2525 | fn | resolveSessionsListWindowLimit | (private) |
| 2533 | fn | filterSessionEntries | (private) |
| 2669 | fn | isPhantomAgentStoreListEntry | (private) |
| 2678 | fn | selectSessionEntries | (private) |
| 2706 | fn | filterAndSortSessionEntries | pub |
| 2717 | fn | listSessionsFromStore | pub |
| 2729 | fn | getRowContext | (private) |
| 2807 | fn | listSessionsFromStoreAsync | pub |
| 2825 | fn | getRowContext | (private) |

## src/gateway/sessions-history-http.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | SessionHistoryTestDatabase | (private) |
| 49 | fn | createSessionStoreFile | (private) |
| 61 | fn | seedSession | (private) |
| 83 | fn | writeResetArchiveTranscript | (private) |
| 103 | fn | seedRawSessionRows | (private) |
| 177 | fn | makeTranscriptAssistantMessage | (private) |
| 208 | fn | makeDeliveryMirrorAssistantMessage | (private) |
| 221 | fn | appendTranscriptMessage | (private) |
| 240 | fn | appendVisibleAssistantMessage | (private) |
| 257 | fn | fetchSessionHistory | (private) |
| 280 | fn | withGatewayHarness | (private) |
| 295 | type | SessionHistoryMessage | (private) |
| 300 | type | SessionHistoryBody | (private) |
| 308 | fn | readSessionHistoryBody | (private) |
| 318 | fn | expectSessionHistoryText | (private) |
| 326 | fn | readSseEvent | (private) |
| 359 | type | SessionHistorySseStream | (private) |
| 364 | fn | expectOpenClawMetadata | (private) |
| 374 | fn | expectErrorResponse | (private) |
| 384 | fn | openSessionHistorySse | (private) |
| 401 | fn | withFirstMessageHistoryStream | (private) |
| 415 | fn | expectHistoryEventTexts | (private) |
| 426 | fn | expectMessageEventMatch | (private) |
| 451 | fn | openBoundedHistoryStreamWithSecondMessage | (private) |

## src/gateway/sessions-patch.test.ts (1513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | ApplySessionsPatchArgs | (private) |
| 35 | fn | runPatch | (private) |
| 53 | fn | expectPatchOk | (private) |
| 63 | fn | expectPatchError | (private) |
| 74 | fn | mainStoreEntry | (private) |
| 84 | fn | mainAuthOverrideStore | (private) |
| 93 | fn | catalogEntry | (private) |
| 106 | fn | loadCatalog | (private) |
| 110 | fn | expectModelSelection | (private) |
| 119 | fn | applyMainModelPatch | (private) |
| 136 | fn | expectProviderChangeClearsAuthOverride | (private) |
| 146 | fn | expectAuthOverride | (private) |
| 168 | fn | applySubagentModelPatch | (private) |
| 185 | fn | makeKimiSubagentCfg | (private) |
| 212 | fn | createAllowlistedAnthropicModelCfg | (private) |

## src/gateway/sessions-patch.ts (776 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | invalid | (private) |
| 75 | fn | normalizeExecSecurity | (private) |
| 83 | fn | normalizeExecAsk | (private) |
| 91 | fn | supportsSpawnLineage | (private) |
| 95 | fn | normalizeSubagentRole | (private) |
| 103 | fn | normalizeSubagentControlScope | (private) |
| 111 | type | SessionPatchProjectionEntry | (private) |
| 117 | fn | projectSessionsPatchEntry | pub |
| 171 | fn | loadPreparedModelCatalogForPatch | (private) |
| 202 | type | PatchError | (private) |
| 751 | fn | applySessionsPatchToStore | pub |

## src/gateway/startup-auth.test.ts (552 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | StartupAuthInput | (private) |
| 30 | type | StartupAuthResult | (private) |
| 31 | type | GatewayAuthConfig | (private) |
| 32 | type | GatewayAuthCheck | (private) |
| 34 | fn | emptyEnv | (private) |
| 38 | fn | gatewayEnvSecretRef | (private) |
| 42 | fn | gatewayAuthConfig | (private) |
| 48 | fn | gatewayAuthConfigWithDefaultEnvProvider | (private) |
| 80 | fn | runStartupAuth | (private) |
| 89 | fn | expectNoGeneratedToken | (private) |
| 94 | fn | expectEphemeralGeneratedToken | (private) |
| 101 | fn | expectResolvedPassword | (private) |
| 107 | fn | expectEphemeralGeneratedTokenWhenOverridden | (private) |
| 123 | fn | expectNoTokenGeneration | (private) |
| 134 | fn | expectResolvedToken | (private) |
| 157 | fn | createMissingGatewayTokenSecretRefConfig | (private) |
| 481 | fn | expectKnownWeakAuthRejected | (private) |
| 485 | fn | expectGatewayAuthAllowed | (private) |

## src/gateway/talk-realtime-relay.test.ts (3255 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | createTalkRealtimeRelaySession | (private) |
| 45 | fn | stopTalkRealtimeRelaySession | (private) |
| 71 | fn | createIdleRelayProvider | (private) |
| 279 | fn | createDeferredVoid | (private) |
| 287 | fn | createSuppressionUnsupportedForcedConsultFixture | (private) |
| 378 | fn | createAbortableRelayRunFixture | (private) |
| 467 | fn | expectRecordFields | (private) |
| 478 | fn | mockCallArg | (private) |
| 486 | fn | findEventPayload | (private) |
| 504 | fn | expectChatAbortPayload | (private) |
| 514 | fn | expectNodeAbortPayload | (private) |
| 1834 | fn | startedTurns | (private) |
| 2317 | fn | toolResultEvents | (private) |
| 2803 | fn | startedTurns | (private) |
| 3229 | fn | createSession | (private) |

## src/gateway/talk-realtime-relay.ts (1618 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | TalkRealtimeRelayEventPayload | (private) |
| 120 | type | TalkRealtimeRelayEvent | (private) |
| 122 | type | ForcedTerminalProviderResult | (private) |
| 129 | type | RelayAgentControlProviderSubmission | (private) |
| 134 | type | RelaySession | (private) |
| 172 | type | CreateTalkRealtimeRelaySessionParams | (private) |
| 187 | type | TalkRealtimeRelaySessionResult | (private) |
| 200 | fn | logRelayVoiceFailure | (private) |
| 204 | fn | ensureRelayVoiceSession | (private) |
| 229 | fn | enqueueRelayVoiceTranscript | (private) |
| 281 | fn | closeRelayVoiceSession | (private) |
| 302 | fn | ensureTalkRealtimeRelayVoiceSession | pub |
| 321 | fn | isWorkingToolResult | (private) |
| 330 | fn | isRelayAssistantEchoTranscript | (private) |
| 340 | fn | buildForcedConsultCheckingPrompt | (private) |
| 347 | fn | buildForcedConsultSpeechPrompt | (private) |
| 356 | fn | buildAlreadyDeliveredToolResult | (private) |
| 363 | fn | suppressedToolResultOptions | (private) |
| 371 | fn | cancelForcedConsults | (private) |
| 377 | fn | broadcastToOwner | (private) |
| 386 | fn | relayEventDeliveryOptions | (private) |
| 398 | fn | abortRelayAgentRuns | (private) |
| 410 | fn | pruneInactiveRelayAgentRuns | (private) |
| 424 | fn | broadcastToolResultToOwner | (private) |
| 450 | fn | completeAfterToolResultSubmissions | (private) |
| 458 | fn | complete | (private) |
| 470 | fn | submitFinalProviderToolResult | (private) |
| 487 | fn | submit | (private) |
| 491 | fn | submitAfterWorking | (private) |
| 518 | fn | accept | (private) |
| 543 | fn | trackAgentFinalToolResult | (private) |
| 560 | fn | trackPendingWorkingToolResult | (private) |
| 577 | fn | clearRelayAgentToolCall | (private) |
| 589 | fn | submitRelayAgentControlProviderResults | (private) |
| 606 | fn | finalizeAgentCall | (private) |
| 634 | fn | clearTerminal | (private) |
| 669 | fn | closeRelaySession | (private) |
| 689 | fn | pruneExpiredRelaySessions | (private) |
| 697 | fn | countRelaySessionsForConn | (private) |
| 707 | fn | enforceRelaySessionLimits | (private) |
| 718 | fn | createTalkRealtimeRelaySession | pub |
| 738 | fn | emit | (private) |
| 1076 | fn | scheduleForcedAgentConsult | (private) |
| 1125 | fn | submitForcedConsultProviderResult | (private) |
| 1139 | fn | drainForcedTerminalProviderResults | (private) |
| 1168 | fn | drainForcedTerminalProviderResultsAfterPending | (private) |
| 1185 | fn | submitRealtimeAgentConsultWorkingResponse | (private) |
| 1218 | fn | ensureRelayTurn | (private) |
| 1231 | fn | getRelaySession | (private) |
| 1242 | fn | sendTalkRealtimeRelayAudio | pub |
| 1271 | fn | acknowledgeTalkRealtimeRelayMark | pub |
| 1281 | fn | submitTalkRealtimeRelayToolResult | pub |
| 1319 | fn | clearTerminal | (private) |
| 1375 | fn | clearTerminal | (private) |
| 1407 | fn | submitCancellation | (private) |
| 1435 | fn | onAccepted | (private) |
| 1460 | fn | submit | (private) |
| 1484 | fn | registerTalkRealtimeRelayAgentRun | pub |
| 1511 | fn | flushTalkRealtimeRelayVoiceWrites | pub |
| 1520 | fn | steerTalkRealtimeRelayAgentRun | pub |
| 1575 | fn | cancelTalkRealtimeRelayTurn | pub |
| 1611 | fn | stopTalkRealtimeRelaySession | pub |

## src/gateway/test-helpers.server.ts (1274 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | fn | resolveGatewayTestMainSessionKeys | (private) |
| 129 | fn | serializeGatewayTestSessionConfig | (private) |
| 136 | fn | hasUnsyncedGatewayTestSessionConfig | (private) |
| 143 | fn | persistTestSessionConfig | (private) |
| 210 | fn | writeSessionStore | pub |
| 274 | fn | setupGatewayTestHome | (private) |
| 284 | fn | applyGatewaySkipEnv | (private) |
| 298 | fn | resetGatewayLifecycleTestState | (private) |
| 310 | fn | resetGatewayTestState | (private) |
| 434 | fn | cleanupGatewayTestHome | (private) |
| 461 | fn | resetGatewayTestRuntimeOnly | (private) |
| 530 | fn | installGatewayTestHooks | pub |
| 576 | fn | getFreePort | pub |
| 580 | type | GatewayTestMessage | (private) |
| 593 | type | TrackedWs | (private) |
| 595 | fn | getTrackedConnectChallengeNonce | pub |
| 600 | fn | trackConnectChallengeNonce | pub |
| 622 | fn | onceMessage | pub |
| 631 | fn | cleanup | (private) |
| 636 | fn | closeHandler | (private) |
| 640 | fn | handler | (private) |
| 657 | fn | startGatewayServer | pub |
| 695 | fn | startGatewayServerWithRetries | pub |
| 717 | fn | waitForWebSocketOpen | (private) |
| 720 | fn | cleanup | (private) |
| 726 | fn | onOpen | (private) |
| 730 | fn | onError | (private) |
| 734 | fn | onClose | (private) |
| 744 | fn | openTrackedWebSocket | (private) |
| 757 | fn | withGatewayServer | pub |
| 772 | fn | createGatewaySuiteHarness | pub |
| 800 | fn | startServer | pub |
| 833 | fn | startServerWithClient | pub |
| 844 | fn | startConnectedServerWithClient | pub |
| 853 | type | ConnectResponse | (private) |
| 861 | fn | resolveDefaultTestDeviceIdentityPath | (private) |
| 878 | fn | readConnectChallengeNonce | pub |
| 904 | fn | resolveAuthTokenForSignature | (private) |
| 912 | fn | testOnlyResolveAuthTokenForSignature | pub |
| 920 | type | ConnectReqClient | (private) |
| 931 | type | ConnectReqDevice | (private) |
| 939 | type | ConnectReqOptions | (private) |
| 961 | fn | shouldPrePairTestDevice | (private) |
| 980 | fn | pairedDeviceAllowsScopes | (private) |
| 997 | fn | prePairTestDevice | (private) |
| 1035 | fn | connectReq | pub |
| 1079 | fn | device | (private) |
| 1173 | fn | connectOk | pub |
| 1180 | fn | connectWebchatClient | pub |
| 1193 | fn | onOpen | (private) |
| 1198 | fn | onError | (private) |
| 1221 | fn | rpcReq | pub |
| 1258 | fn | waitForSystemEvent | pub |

## src/gateway/tool-resolution.exclude.test.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | CreateOpenClawToolsArg | (private) |
| 17 | type | LazyExecToolDefaults | (private) |
| 30 | type | LazyExecToolPresentation | (private) |
| 36 | fn | makeTool | (private) |
| 88 | fn | readCreateToolsArgs | (private) |

## src/gateway/tools-invoke-http.test.ts (1316 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | RunBeforeToolCallHook | (private) |
| 14 | type | RunBeforeToolCallHookArgs | (private) |
| 15 | type | RunBeforeToolCallHookResult | (private) |
| 96 | fn | toolInputError | (private) |
| 101 | fn | toolAuthorizationError | (private) |
| 312 | fn | gatewayAuthHeaders | (private) |
| 313 | fn | gatewayAdminHeaders | (private) |
| 315 | fn | allowAgentsListForMain | (private) |
| 332 | fn | postToolsInvoke | (private) |
| 343 | fn | withOptionalSessionKey | (private) |
| 348 | fn | invokeAgentsList | (private) |
| 360 | fn | invokeTool | (private) |
| 381 | fn | invokeAgentsListAuthed | (private) |
| 388 | fn | invokeAgentsListBearer | (private) |
| 403 | fn | invokeToolAuthed | (private) |
| 415 | fn | expectOkInvokeResponse | (private) |
| 422 | fn | firstHookCallArg | (private) |
| 430 | fn | invokeToolsRpc | (private) |
| 460 | fn | setMainAllowedTools | (private) |

## src/gateway/watch-node-http.test.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | makeConnectParams | (private) |
| 97 | fn | startRuntime | (private) |
| 163 | fn | readJson | (private) |
| 167 | fn | waitForLastConnectedMetadata | (private) |

## src/gateway/watch-node-http.ts (1083 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 96 | type | QueuedNodeEvent | (private) |
| 98 | type | PendingChallenge | (private) |
| 100 | type | ResponseLifecycle | (private) |
| 105 | type | WatchNodeSession | (private) |
| 120 | type | WatchNodeHttpRuntimeOptions | (private) |
| 133 | class | WatchNodePairingRateLimitError | (private) |
| 139 | fn | normalizePath | (private) |
| 147 | fn | readBearerToken | (private) |
| 153 | fn | resolveWatchClientAddress | (private) |
| 175 | fn | isStringRecord | (private) |
| 179 | fn | trackResponseLifecycle | (private) |
| 186 | fn | settle | (private) |
| 195 | fn | onFinish | (private) |
| 196 | fn | onClose | (private) |
| 205 | fn | hasOnlyBoundedWatchSurface | (private) |
| 217 | fn | isCanonicalWatchNode | (private) |
| 233 | fn | createChallengeStore | (private) |
| 236 | fn | pruneExpired | (private) |
| 279 | fn | broadcastPairingSuperseded | (private) |
| 299 | fn | createWatchNodeHttpRuntime | pub |
| 314 | fn | closeSession | (private) |
| 340 | fn | armExpiry | (private) |
| 349 | fn | touchSession | (private) |
| 458 | fn | handleChallenge | (private) |
| 475 | fn | handleConnect | (private) |
| 931 | fn | handlePoll | (private) |
| 972 | fn | handleDisconnect | (private) |
| 985 | fn | handleResult | (private) |
