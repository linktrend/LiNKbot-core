# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 73 large files in this module.

## src/gateway/server-methods/agent-job.ts (583 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | AgentJobTerminalSnapshot | (private) |
| 33 | type | AgentJobSource | (private) |
| 34 | type | AgentRunObservation | (private) |
| 40 | type | AgentRunSnapshot | (private) |
| 41 | type | PendingAgentRunTerminal | (private) |
| 45 | type | AgentJobRecord | (private) |
| 49 | type | AgentJobWaiter | (private) |
| 50 | type | DedupeObservation | (private) |
| 63 | fn | nextAgentRunVersion | (private) |
| 68 | fn | pruneAgentRunCache | (private) |
| 77 | fn | enforceAgentRunCacheMaxEntries | (private) |
| 95 | fn | terminalOutcomeFromSnapshot | (private) |
| 104 | fn | shouldPreserveTerminalSnapshot | (private) |
| 116 | fn | mergeSnapshot | (private) |
| 126 | fn | notifyAgentRunWaiters | (private) |
| 132 | fn | recordAgentRunSnapshot | (private) |
| 152 | fn | clearPendingAgentRunError | (private) |
| 161 | fn | clearPendingAgentRunTimeout | (private) |
| 170 | fn | beginAgentJob | (private) |
| 180 | fn | schedulePendingAgentRunTerminal | (private) |
| 205 | fn | schedulePendingAgentRunError | (private) |
| 214 | fn | schedulePendingAgentRunTimeout | (private) |
| 223 | fn | createPendingErrorTimeoutSnapshot | (private) |
| 237 | fn | createSnapshotFromLifecycleEvent | (private) |
| 278 | fn | ensureAgentRunListener | (private) |
| 320 | fn | asString | (private) |
| 324 | fn | parseDedupeObservation | (private) |
| 393 | fn | parseDedupeKey | (private) |
| 406 | fn | setGatewayDedupeEntry | pub |
| 450 | fn | getFreshestDedupeSnapshot | (private) |
| 461 | fn | getCanonicalAgentRunSnapshot | (private) |
| 474 | fn | getAgentRunSnapshot | (private) |
| 489 | fn | addAgentRunWaiter | (private) |
| 501 | fn | publicSnapshot | (private) |
| 516 | fn | waitForAgentJob | pub |
| 538 | fn | removeWaiter | (private) |
| 539 | fn | finish | (private) |
| 548 | fn | onWake | (private) |

## src/gateway/server-methods/agent-run-handler.ts (531 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 118 | fn | releaseGatewayAdmission | (private) |
| 283 | fn | buildSessionPatch | (private) |

## src/gateway/server-methods/agent.abort-integration.test-utils.ts (2292 lines)

_No symbols extracted._

## src/gateway/server-methods/agent.base.test-utils.ts (1695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 182 | fn | finishRoute | (private) |
| 244 | fn | finishRoute | (private) |
| 708 | fn | releaseMutation | (private) |
| 709 | fn | markMutationStarted | (private) |
| 771 | fn | releaseMutation | (private) |
| 772 | fn | markMutationStarted | (private) |
| 833 | fn | releaseMutation | (private) |
| 834 | fn | markMutationStarted | (private) |
| 926 | fn | markMutationStarted | (private) |
| 994 | fn | finish | (private) |

## src/gateway/server-methods/agent.events-and-subagents.test-utils.ts (1422 lines)

_No symbols extracted._

## src/gateway/server-methods/agent.media-and-routing.test-utils.ts (2004 lines)

_No symbols extracted._

## src/gateway/server-methods/agent.reset-and-identity.test-utils.ts (1193 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1129 | fn | captureGroupEntryFields | (private) |

## src/gateway/server-methods/agent.sessions-and-models.test-utils.ts (2201 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1871 | fn | mockAcpChildSessionEntry | (private) |
| 1885 | fn | spyDetachedCreateRunningTaskRun | (private) |

## src/gateway/server-methods/agent.test-harness.ts (1033 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | getAgentTestMocks | pub |
| 331 | type | AgentHandler | (private) |
| 333 | type | AgentHandlerArgs | pub |
| 335 | type | AgentParams | pub |
| 337 | type | AgentCommandCall | pub |
| 339 | type | AgentIdentityGetHandler | (private) |
| 341 | type | AgentIdentityGetHandlerArgs | (private) |
| 343 | type | AgentIdentityGetParams | (private) |
| 349 | fn | setDateOnlyFakeClockActive | pub |
| 353 | fn | waitForRealTimer | (private) |
| 359 | fn | waitForAssertion | pub |
| 382 | fn | requireValue | pub |
| 389 | fn | expectRecordFields | pub |
| 400 | fn | expectStringFieldContains | pub |
| 409 | fn | expectSqliteSessionFileMarkerForEntry | pub |
| 416 | fn | mockCallArg | pub |
| 424 | fn | expectRespondError | pub |
| 433 | fn | flushScheduledDispatchStep | pub |
| 443 | fn | waitForAcceptedRunDispatch | (private) |
| 466 | fn | mockMainSessionEntry | pub |
| 482 | fn | buildExistingMainStoreEntry | pub |
| 490 | type | SessionStoreFixture | (private) |
| 492 | type | SessionEntryTargetFixture | (private) |
| 497 | fn | cloneSessionStoreFixtureEntry | (private) |
| 503 | fn | selectFreshestTargetFixtureEntry | (private) |
| 524 | fn | resetSessionAccessorMocks | (private) |
| 614 | fn | setupNewYorkTimeConfig | pub |
| 628 | fn | resetTimeConfig | pub |
| 634 | fn | useTestStateDir | pub |
| 638 | fn | expectResetCall | pub |
| 645 | fn | primeMainAgentRun | pub |
| 657 | fn | runMainAgent | pub |
| 671 | fn | runMainAgentAndCaptureEntry | pub |
| 692 | fn | readLastAgentCommandCall | (private) |
| 698 | fn | backendGatewayClient | pub |
| 714 | fn | cronContinuationGatewayClient | pub |
| 725 | fn | cronMediaCompletionEvent | pub |
| 740 | fn | setupCronContinuationReleaseFixture | pub |
| 766 | fn | invokeGatewaySuspendPrepare | pub |
| 795 | fn | operatorWriteGatewayClient | pub |
| 811 | fn | operatorWriteCliClient | pub |
| 827 | fn | waitForAgentCommandCall | pub |
| 838 | fn | mockSessionResetSuccess | pub |
| 859 | fn | invokeAgent | pub |
| 901 | fn | invokeAgentIdentityGet | pub |
| 928 | fn | toLintErrorObject | (private) |
| 952 | fn | applyGatewaySubagentRegistryTestDeps | pub |
| 963 | fn | describe0AfterEach0 | pub |
| 994 | fn | resetIntegrationState | (private) |
| 1021 | fn | describe1BeforeEach0 | pub |
| 1025 | fn | describe1AfterEach1 | pub |
| 1029 | fn | prime | pub |

## src/gateway/server-methods/agents-mutate.test.ts (1543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 281 | fn | makeRootForTest | (private) |
| 309 | fn | makeCall | (private) |
| 323 | fn | expectRecordFields | (private) |
| 334 | fn | mockCallArg | (private) |
| 342 | fn | expectRespondOk | (private) |
| 349 | fn | expectRespondErrorContaining | (private) |
| 357 | fn | firstRespondResult | (private) |
| 361 | fn | expectStringContaining | (private) |
| 366 | fn | expectStringNotContaining | (private) |
| 370 | fn | createEnoentError | (private) |
| 376 | fn | createErrnoError | (private) |
| 382 | fn | makeFileStat | (private) |
| 400 | type | MockIdentity | (private) |
| 407 | type | MockAgentEntry | (private) |
| 416 | type | MockConfig | (private) |
| 422 | fn | getAgentList | (private) |
| 428 | fn | mergeAgentConfig | (private) |
| 467 | fn | resolveMockWorkspaceDir | (private) |
| 475 | fn | mockWorkspaceStateRead | (private) |
| 504 | fn | listAgentFileNames | (private) |
| 513 | fn | expectNotFoundResponseAndNoWrite | (private) |
| 518 | fn | expectUnsafeWorkspaceFile | (private) |
| 1435 | fn | mockWorkspaceEscapeSymlink | (private) |
| 1450 | fn | mockInWorkspaceSymlinkAlias | (private) |
| 1487 | fn | mockHardlinkedWorkspaceAlias | (private) |

## src/gateway/server-methods/agents.ts (823 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 109 | fn | resolveAgentWorkspaceFileOrRespondError | (private) |
| 140 | type | FileMeta | (private) |
| 145 | type | WorkspaceRoot | (private) |
| 147 | fn | isRegularWorkspaceFileStat | (private) |
| 159 | fn | toWorkspaceFileMeta | (private) |
| 174 | fn | statWorkspaceFileSafely | (private) |
| 198 | fn | openWorkspaceRootSafely | (private) |
| 206 | fn | listAgentFiles | (private) |
| 272 | fn | resolveAgentIdOrError | (private) |
| 281 | fn | respondInvalidMethodParams | (private) |
| 296 | fn | respondAgentNotFound | (private) |
| 300 | type | AgentDeleteRemovedPath | (private) |
| 305 | type | AgentDeleteFailedPath | (private) |
| 310 | type | AgentDeletePathOutcome | (private) |
| 314 | fn | cleanupFailure | (private) |
| 319 | fn | removeAgentPath | (private) |
| 335 | fn | respondWorkspaceFileUnsafe | (private) |
| 343 | fn | respondWorkspaceFileMissing | (private) |
| 361 | fn | writeWorkspaceFileOrRespond | (private) |
| 381 | fn | readWorkspaceFileContent | (private) |
| 400 | fn | buildIdentityMarkdownForWrite | (private) |
| 429 | fn | buildIdentityMarkdownOrRespondUnsafe | (private) |
| 658 | fn | recordOutcome | (private) |

## src/gateway/server-methods/approval-shared.test.ts (1825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | ApprovalClientLookup | (private) |
| 29 | fn | createApprovalClient | (private) |
| 47 | fn | createApprovalClientLookup | (private) |

## src/gateway/server-methods/approval-shared.ts (779 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | resolveRecordedApprovalDecision | (private) |
| 36 | type | PendingApprovalLookupError | (private) |
| 43 | type | ApprovalTurnSourceFields | (private) |
| 62 | type | ApprovalRequestDeliveryRoute | (private) |
| 64 | type | ApprovalResolveParams | (private) |
| 86 | fn | isPromiseLike | (private) |
| 90 | fn | isApprovalDecision | (private) |
| 94 | fn | respondUnknownOrExpiredApproval | (private) |
| 104 | fn | resolvePendingApprovalLookupError | (private) |
| 120 | fn | normalizeApprovalIdentity | (private) |
| 124 | fn | normalizeApprovalIdentities | (private) |
| 136 | fn | isApprovalRecordVisibleToClient | pub |
| 181 | fn | listVisiblePendingApprovalRequests | pub |
| 202 | fn | bindApprovalRequesterMetadata | pub |
| 212 | fn | bindApprovalReviewerDeviceIds | pub |
| 222 | fn | respondApprovalStorageUnavailable | (private) |
| 239 | fn | registerPendingApprovalRecord | pub |
| 255 | fn | buildRequestedApprovalEvent | pub |
| 267 | fn | resolveApprovalDecisionParams | pub |
| 296 | fn | resolveApprovalRequestRecipientConnIds | pub |
| 317 | fn | resolvePendingApprovalRecord | pub |
| 326 | fn | resolveResolvedApprovalRecord | (private) |
| 335 | fn | resolveApprovalRecordForState | (private) |
| 369 | fn | respondPendingApprovalLookupError | pub |
| 380 | fn | handleApprovalWaitDecision | pub |
| 427 | fn | handlePendingApprovalRequest | pub |
| 590 | fn | handleApprovalResolve | pub |

## src/gateway/server-methods/approval.test.ts (1552 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | getOperatorApproval | (private) |
| 42 | type | OperatorApprovalDatabase | (private) |
| 48 | fn | createDatabaseOptions | (private) |
| 56 | fn | createManagers | (private) |
| 82 | fn | deleteDurableApproval | (private) |
| 91 | fn | corruptDurableApprovalPresentation | (private) |
| 106 | fn | registerExec | (private) |
| 149 | fn | registerPlugin | (private) |
| 179 | fn | registerSystemAgent | (private) |
| 201 | fn | createClient | (private) |
| 218 | fn | createContext | (private) |
| 232 | fn | invoke | (private) |
| 259 | fn | approvalFromResult | (private) |

## src/gateway/server-methods/approval.ts (559 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | CreateApprovalHandlersParams | (private) |
| 61 | fn | isRecord | (private) |
| 65 | fn | buildApprovalSnapshot | (private) |
| 112 | fn | resolveApprovalResolver | (private) |
| 121 | fn | resolveLegacyApprovalLabel | (private) |
| 129 | fn | respondApprovalNotFound | (private) |
| 139 | fn | respondApprovalUnavailable | (private) |
| 155 | fn | readExactApprovalId | (private) |
| 163 | fn | loadVisibleApproval | (private) |
| 252 | fn | resolveLiveRecord | (private) |
| 260 | fn | applyForcedDeny | (private) |
| 303 | fn | applyApprovalDecision | (private) |
| 351 | fn | createApprovalHandlers | pub |

## src/gateway/server-methods/artifacts.test.ts (911 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | createResponder | (private) |
| 56 | type | ArtifactMethod | (private) |
| 57 | type | ResponderCalls | (private) |
| 58 | type | ArtifactListPayload | (private) |
| 60 | fn | invokeArtifactHandler | (private) |
| 77 | fn | listArtifacts | (private) |
| 84 | fn | getArtifact | (private) |
| 91 | fn | downloadArtifact | (private) |
| 98 | fn | runtimeContext | (private) |
| 102 | fn | expectOkPayload | (private) |
| 107 | fn | expectArtifactList | (private) |
| 111 | fn | expectFirstArtifact | (private) |
| 116 | fn | expectErrorDetails | (private) |
| 122 | fn | assistantImageMessage | (private) |
| 140 | fn | assistantFileMessage | (private) |
| 165 | fn | resultImageMessage | (private) |
| 181 | fn | requireNonEmptyString | (private) |
| 188 | fn | expectFields | (private) |
| 192 | fn | expectArtifactScopeNotFound | (private) |
| 218 | fn | mockedMessages | (private) |

## src/gateway/server-methods/artifacts.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | ArtifactDownloadMode | (private) |
| 38 | type | ArtifactRecord | (private) |
| 43 | type | ArtifactQuery | (private) |
| 50 | type | ArtifactCollectionOptions | (private) |
| 55 | type | ArtifactBase64Payload | (private) |
| 60 | type | ResolvedArtifactSession | (private) |
| 65 | fn | artifactError | (private) |
| 74 | fn | resolveRequesterSessionAgentId | (private) |
| 97 | fn | resolveScopedArtifactSessionKey | (private) |
| 135 | fn | normalizeArtifactType | (private) |
| 149 | fn | mimeFromDataUrl | (private) |
| 154 | fn | base64FromDataUrl | (private) |
| 167 | fn | isBase64Whitespace | (private) |
| 171 | fn | isArtifactBase64DataChar | (private) |
| 184 | fn | normalizeArtifactBase64Char | (private) |
| 194 | fn | readArtifactBase64Payload | (private) |
| 245 | fn | mediaUrlValue | (private) |
| 253 | fn | isSafeDownloadUrl | (private) |
| 265 | fn | artifactId | (private) |
| 281 | fn | resolveMessageSeq | (private) |
| 287 | fn | resolveMessageRunId | (private) |
| 292 | fn | resolveMessageTaskId | (private) |
| 302 | fn | resolveBlockDownload | (private) |
| 360 | fn | isArtifactBlock | (private) |
| 378 | fn | collectArtifactsFromMessage | (private) |
| 444 | fn | resolveQuerySession | (private) |
| 502 | fn | loadArtifacts | (private) |
| 554 | fn | requireQueryable | (private) |
| 569 | fn | findArtifact | (private) |
| 584 | fn | toSummary | (private) |

## src/gateway/server-methods/board.test.ts (847 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | BoardMcpAppDependencies | (private) |
| 31 | fn | createMcpAppDependencies | (private) |
| 60 | fn | createHarness | (private) |
| 67 | fn | invoke | (private) |
| 439 | class | AliasBoardStore | (private) |
| 512 | class | LegacyBoardStore | (private) |

## src/gateway/server-methods/channels.ts (712 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | ChannelLogoutPayload | (private) |
| 48 | type | ChannelStartPayload | (private) |
| 54 | type | ChannelStopPayload | (private) |
| 60 | type | ChannelOperationParams | (private) |
| 65 | fn | resolveChannelOperationParams | (private) |
| 88 | fn | respondWithChannelOperationPayload | (private) |
| 102 | fn | channelStatusTimeoutPayload | (private) |
| 115 | fn | raceWithTimeout | (private) |
| 142 | fn | runChannelStatusHook | (private) |
| 173 | type | Summary | (private) |
| 175 | fn | runChannelStatusSummary | (private) |
| 201 | fn | channelStatusFailureMessage | (private) |
| 212 | fn | resolveChannelsStatusTimeoutMs | (private) |
| 220 | fn | resolveRuntimeAccountSnapshot | (private) |
| 234 | fn | resolveChannelGatewayAccountId | (private) |
| 250 | fn | logoutChannelAccount | (private) |
| 285 | fn | startChannelAccount | (private) |
| 312 | fn | stopChannelAccount | (private) |
| 392 | fn | isAccountEnabled | (private) |
| 399 | fn | buildAccountSnapshot | (private) |
| 495 | fn | buildChannelAccounts | (private) |
| 553 | fn | fallbackSummary | (private) |

## src/gateway/server-methods/chat-history-handler.ts (620 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | ChatHistoryMethod | (private) |
| 70 | type | ChatMetadataResult | (private) |
| 75 | fn | handleChatMetadataRequest | (private) |
| 119 | fn | buildChatMetadataResult | (private) |
| 146 | fn | buildChatStartupMetadataResult | (private) |
| 181 | fn | buildChatStartupModelCatalogProjection | (private) |
| 195 | fn | getProjector | (private) |
| 246 | fn | resolveChatHistoryNextOffset | (private) |
| 269 | fn | shouldReplayOldestChatHistoryRecord | (private) |
| 288 | fn | handleChatHistoryRequest | (private) |

## src/gateway/server-methods/chat-send-handler.ts (729 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 353 | fn | emitServerTiming | (private) |
| 377 | fn | emitFirstAssistantServerTiming | (private) |

## src/gateway/server-methods/chat.abort-persistence.test.ts (1376 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | TranscriptLine | (private) |
| 65 | fn | readTranscriptLines | (private) |
| 78 | fn | collectMessagesWithIdempotencyKey | (private) |
| 91 | fn | findMessageWithIdempotencyKey | (private) |
| 103 | fn | expectRecord | (private) |
| 110 | fn | expectAbortPayload | (private) |
| 119 | fn | expectAbortPayloadContainsRunIds | (private) |
| 127 | fn | requireLastRespondCall | (private) |
| 136 | fn | expectPersistedAbortMessage | (private) |
| 156 | fn | setMockSessionEntry | (private) |
| 171 | fn | createTranscriptFixture | (private) |
| 192 | fn | appendTranscriptMessage | (private) |
| 216 | fn | createMissingEntryFixture | (private) |

## src/gateway/server-methods/chat.directive-tags.test.ts (7042 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 130 | fn | readTranscriptJsonLines | (private) |
| 351 | fn | hasHooks | (private) |
| 475 | fn | waitForAssertion | (private) |
| 479 | fn | createTranscriptFixture | (private) |
| 503 | fn | createSqliteTranscriptFixture | (private) |
| 509 | fn | createGatewayUserTurnSqliteFixture | (private) |
| 517 | fn | withTranscriptFixtureState | (private) |
| 525 | fn | withSqliteTranscriptFixtureState | (private) |
| 533 | fn | transcriptScope | (private) |
| 542 | fn | sessionEntryScope | (private) |
| 550 | fn | seedSqliteSessionEntry | (private) |
| 557 | fn | readSqliteMainSessionEntry | (private) |
| 561 | fn | appendSourceReplyMirrorEntry | (private) |
| 597 | fn | readActiveAssistantTranscriptMessages | (private) |
| 608 | fn | extractFirstTextBlock | (private) |
| 628 | fn | getMessage | (private) |
| 636 | fn | getMessageContent | (private) |
| 641 | fn | mockCallAt | (private) |
| 650 | fn | lastRespondCall | (private) |
| 656 | fn | responseErrorMessage | (private) |
| 670 | fn | lastBroadcastPayload | (private) |
| 676 | fn | lastNodeSendCall | (private) |
| 682 | fn | findAssistantUpdateWithBlock | (private) |
| 693 | fn | findUserUpdate | (private) |
| 700 | fn | userUpdateMessage | (private) |
| 708 | fn | expectUserUpdateIdentity | (private) |
| 718 | fn | readPersistedUserMessages | (private) |
| 729 | fn | expectDispatchContextFields | (private) |
| 743 | fn | createScopedCliClient | (private) |
| 768 | fn | createChatContext | (private) |
| 846 | type | ChatContext | (private) |
| 847 | type | NonStreamingChatSendWaitFor | (private) |
| 849 | fn | runNonStreamingChatSend | (private) |
| 5211 | fn | releaseSave | (private) |
| 6499 | fn | releaseSave | (private) |

## src/gateway/server-methods/commands.test.ts (603 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | type | RuntimeCommandRegistration | (private) |
| 213 | fn | createDiscordChannelPlugin | (private) |
| 227 | fn | callHandler | (private) |
| 229 | fn | respond | (private) |
| 249 | type | ListedCommand | (private) |
| 258 | fn | listCommands | (private) |
| 263 | fn | requireCommand | (private) |
| 271 | fn | collectBuiltinNames | (private) |
| 281 | fn | pluginCommand | (private) |
| 285 | fn | setGatewayRegistry | (private) |
| 289 | fn | providerFilteredPluginRegistrations | (private) |

## src/gateway/server-methods/config.shared-auth.test.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | tokenAuthConfig | (private) |
| 119 | fn | trustedProxyConfig | (private) |
| 139 | fn | hotReloadConfig | (private) |
| 149 | fn | installBrowserReloadRegistry | (private) |
| 162 | fn | mockPreviousConfig | (private) |
| 166 | fn | runConfigPatch | (private) |
| 189 | fn | expectNoDirectRestart | (private) |

## src/gateway/server-methods/config.ts (1001 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 85 | type | ConfigRedactionHints | (private) |
| 86 | type | ConfigWriteCommitResult | (private) |
| 87 | type | ConfigRestartWriteKind | (private) |
| 88 | type | ConfigRestartWriteMode | (private) |
| 90 | fn | requireConfigBaseHash | (private) |
| 136 | fn | formatConfigPatchPath | (private) |
| 140 | fn | readConfigPatchReplacePaths | (private) |
| 145 | fn | collectDestructiveArrayPatchPaths | (private) |
| 208 | fn | collectBaseArrayPaths | (private) |
| 226 | fn | isConfigPatchObjectWithStringId | (private) |
| 232 | fn | isConfigPatchIdKeyedArray | (private) |
| 238 | fn | idKeyedArrayPreservesBaseIds | (private) |
| 248 | fn | arrayPreservesBaseEntries | (private) |
| 262 | fn | collectDestructiveIdKeyedArrayEntryPatchPaths | (private) |
| 297 | fn | rejectDestructiveArrayPatchWithoutIntent | (private) |
| 325 | fn | readConfigWriteSnapshotOrRespond | (private) |
| 336 | fn | parseRawConfigOrRespond | (private) |
| 356 | fn | hasOwnRecordValue | (private) |
| 360 | fn | stripBundledProviderRuntimeDefaults | (private) |
| 411 | fn | parseValidateConfigFromRawOrRespond | (private) |
| 480 | fn | summarizeConfigValidationIssues | (private) |
| 494 | fn | ensureResolvableSecretRefsOrRespond | (private) |
| 525 | fn | listPreparedSecretDegradations | (private) |
| 535 | fn | preparedSecretDegradationPayload | (private) |
| 540 | fn | clearConfigSchemaResponseCacheForTests | pub |
| 544 | fn | loadConfigSchemaResponseForTests | pub |
| 548 | fn | clearConfigSchemaResponseCache | (private) |
| 552 | fn | respondWithConfigRestartWrite | (private) |
| 596 | fn | shouldDisconnectSharedAuthClientsForConfigWrite | (private) |
| 610 | fn | respondConfigPatchNoop | (private) |
| 633 | fn | loadSchemaWithPlugins | (private) |

## src/gateway/server-methods/cron.ts (942 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | CronJobIdParams | (private) |
| 66 | type | CronRunsRequestParams | (private) |
| 80 | class | CronJobConfigRevisionConflictError | (private) |
| 89 | fn | cronJobReadView | (private) |
| 107 | fn | compactCronListJob | (private) |
| 142 | fn | assertValidCronUpdatePatch | (private) |
| 179 | fn | assertCronDoesNotTargetAgentHarness | (private) |
| 217 | fn | resolveCronJobId | (private) |
| 221 | fn | respondInvalidCronParams | (private) |
| 229 | fn | respondMissingCronJobId | (private) |

## src/gateway/server-methods/cron.validation.test.ts (2509 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | createPrefixOnlyChannelPlugin | (private) |
| 74 | fn | setCronValidationTestRegistry | (private) |
| 105 | fn | createCronContext | (private) |
| 170 | type | CronMethod | (private) |
| 172 | fn | invokeCron | (private) |
| 197 | fn | invokeCronAdd | (private) |
| 204 | fn | invokeCronGet | (private) |
| 212 | fn | invokeCronUpdate | (private) |
| 220 | fn | invokeCronUpdateDelivery | (private) |
| 233 | fn | invokeCronRemove | (private) |
| 244 | fn | invokeWake | (private) |
| 248 | fn | createCronJob | (private) |
| 265 | fn | callerClient | (private) |
| 278 | fn | telegramDeliveryWithSlackFailure | (private) |
| 293 | fn | setRuntimeConfig | (private) |
| 297 | fn | pluginEntries | (private) |
| 303 | fn | telegramConfig | (private) |
| 314 | fn | telegramSlackConfig | (private) |
| 330 | fn | msteamsConfig | (private) |
| 341 | fn | slackSynologyConfig | (private) |
| 356 | fn | slackConfig | (private) |
| 369 | fn | agentTurnCronParams | (private) |
| 381 | fn | expectCronSuccess | (private) |
| 385 | fn | expectCronReadSuccess | (private) |
| 393 | fn | requireRecord | (private) |
| 400 | fn | requireCronAddPayload | (private) |
| 407 | fn | requireCronUpdatePatch | (private) |
| 414 | fn | requireCronUpdateId | (private) |
| 419 | fn | expectDeliveryFields | (private) |
| 426 | fn | expectCronUpdateDeliveryPatch | (private) |
| 434 | fn | expectResponseError | (private) |
| 453 | fn | expectInvalidCronPatternError | (private) |

## src/gateway/server-methods/devices.test.ts (1467 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | createClient | (private) |
| 70 | fn | createOptions | (private) |
| 96 | fn | mockPairedOperatorDevice | (private) |
| 113 | fn | mockRotateOperatorTokenSuccess | (private) |
| 126 | fn | expectRespondedErrorMessage | (private) |
| 135 | fn | captureSecurityEvents | (private) |

## src/gateway/server-methods/devices.ts (823 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | DeviceSessionAuthz | (private) |
| 51 | fn | redactPairedDevice | (private) |
| 65 | fn | logDeviceTokenRotationDenied | (private) |
| 82 | fn | logDeviceTokenRevocationDenied | (private) |
| 98 | fn | shouldReturnRotatedDeviceToken | (private) |
| 104 | fn | emitDeviceSecurityEvent | (private) |
| 119 | fn | emitDevicePairingDeniedSecurityEvent | (private) |
| 139 | fn | emitDevicePairingLifecycleSecurityEvent | (private) |
| 164 | fn | emitDeviceTokenDeniedSecurityEvent | (private) |
| 186 | fn | emitDeviceTokenLifecycleSecurityEvent | (private) |

## src/gateway/server-methods/doctor.test.ts (1763 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | makeRuntimeContext | (private) |
| 63 | fn | invokeDoctorMemoryStatus | (private) |
| 90 | fn | invokeDoctorMemoryDreamDiary | (private) |
| 107 | fn | invokeDoctorMemoryBackfillDreamDiary | (private) |
| 121 | fn | invokeDoctorMemoryResetDreamDiary | (private) |
| 135 | fn | invokeDoctorMemoryResetGroundedShortTerm | (private) |
| 149 | fn | invokeDoctorMemoryRepairDreamingArtifacts | (private) |
| 163 | fn | invokeDoctorMemoryDedupeDreamDiary | (private) |
| 177 | fn | invokeDoctorMemoryRemHarness | (private) |
| 194 | fn | expectRecordFields | (private) |
| 205 | fn | respondPayload | (private) |
| 215 | fn | mockCallArg | (private) |
| 223 | fn | findRecordByField | (private) |
| 228 | fn | makeDreamingStats | (private) |
| 249 | fn | expectEmbeddingErrorResponse | (private) |
| 860 | fn | writeStore | (private) |
| 1497 | fn | makeHarnessPreview | (private) |
| 1710 | fn | overflowCandidate | (private) |

## src/gateway/server-methods/doctor.ts (1073 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | DoctorMemoryDreamingPhasePayload | (private) |
| 49 | type | DoctorMemoryLightDreamingPayload | (private) |
| 54 | type | DoctorMemoryDeepDreamingPayload | (private) |
| 63 | type | DoctorMemoryRemDreamingPayload | (private) |
| 69 | type | DoctorMemoryDreamingEntryPayload | (private) |
| 86 | type | DoctorMemoryDreamingPayload | (private) |
| 117 | type | DoctorMemoryStatusPayload | pub |
| 132 | type | DoctorMemoryEmbeddingRuntimePayload | pub |
| 156 | type | DoctorMemoryDreamDiaryPayload | pub |
| 164 | type | DoctorMemoryDreamActionPayload | pub |
| 189 | type | DoctorMemoryRemHarnessCandidatePayload | pub |
| 206 | type | DoctorMemoryRemHarnessCandidateTruthPayload | pub |
| 211 | type | DoctorMemoryRemHarnessGroundedFilePayload | pub |
| 216 | type | DoctorMemoryRemHarnessSuccessPayload | pub |
| 251 | type | DoctorMemoryRemHarnessErrorPayload | pub |
| 258 | fn | extractIsoDayFromPath | (private) |
| 263 | fn | groundedMarkdownToDiaryLines | (private) |
| 274 | fn | listWorkspaceDailyFiles | (private) |
| 290 | fn | resolveDreamingConfig | (private) |
| 366 | type | DreamingStoreStats | (private) |
| 390 | fn | compareDreamingEntryByRecency | (private) |
| 407 | fn | compareDreamingEntryBySignals | (private) |
| 420 | fn | compareDreamingEntryByPromotion | (private) |
| 434 | fn | trimDreamingEntries | (private) |
| 460 | fn | loadDreamingStoreStats | (private) |
| 487 | fn | mergeDreamingStoreStats | (private) |
| 571 | type | ManagedDreamingCronStatus | (private) |
| 576 | type | ManagedCronJobLike | (private) |
| 584 | fn | isManagedDreamingJob | (private) |
| 601 | fn | resolveManagedDreamingCronStatus | (private) |
| 641 | fn | resolveAllManagedDreamingCronStatuses | (private) |
| 659 | fn | readDreamDiary | (private) |
| 702 | fn | shouldProbeMemoryEmbeddings | (private) |
| 710 | fn | resolveDoctorMemoryTarget | (private) |

## src/gateway/server-methods/environments.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | TestWorkerRecord | (private) |
| 24 | type | TestWorkerService | (private) |
| 32 | fn | mockContext | (private) |
| 77 | fn | workerRecord | (private) |
| 104 | fn | workerService | (private) |
| 115 | fn | callEnvironmentMethod | (private) |
| 141 | class | FakeWorkerServiceError | (private) |

## src/gateway/server-methods/exec-approval.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ExecApprovalIosPushDelivery | (private) |
| 68 | fn | normalizeCommandSpans | (private) |
| 97 | fn | createExecApprovalHandlers | pub |

## src/gateway/server-methods/exec-approvals.test.ts (564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | makeSnapshot | (private) |

## src/gateway/server-methods/migrations.test.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | RespondCall | (private) |
| 35 | fn | createConfig | (private) |
| 51 | fn | memoryPlan | (private) |
| 86 | fn | provider | (private) |
| 105 | fn | invoke | (private) |
| 128 | fn | firstCall | (private) |
| 136 | fn | loadPlanFingerprint | (private) |

## src/gateway/server-methods/models-auth-status.test.ts (1636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | BuildAuthHealthSummary | (private) |
| 16 | fn | waitForFast | (private) |
| 113 | fn | createOptions | (private) |
| 136 | fn | createActiveRun | (private) |
| 148 | fn | createApiKeyProfile | (private) |
| 159 | fn | createStaticApiKeyProvider | (private) |
| 167 | fn | createLogoutOptions | (private) |
| 197 | fn | requireRecord | (private) |
| 204 | fn | firstRespondCall | (private) |
| 210 | fn | firstEnsureAuthProfileStoreCall | (private) |
| 214 | fn | firstBuildAuthHealthSummaryCall | (private) |
| 220 | fn | firstAuthStatusProvider | (private) |
| 228 | fn | resetAuthStatusMocks | (private) |
| 253 | fn | firstExternalCliAuthOption | (private) |
| 260 | fn | expectLogoutFailurePreservesRun | (private) |
| 274 | fn | expectLogoutFailureDoesNotAbortRun | (private) |
| 293 | fn | createOpenAiCodexOauthHealthSummary | (private) |
| 1447 | fn | oauth | (private) |
| 1460 | fn | token | (private) |

## src/gateway/server-methods/models-auth-status.ts (760 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | ProviderUsageStatus | (private) |
| 80 | type | ModelAuthExpiry | pub |
| 89 | type | ModelAuthStatusProfile | pub |
| 99 | type | ModelAuthStatusProvider | pub |
| 125 | type | ModelAuthStatusResult | pub |
| 131 | type | ModelAuthLogoutResult | pub |
| 147 | fn | invalidateModelAuthStatusCache | pub |
| 158 | fn | refreshModelAuthStatusRuntimeState | (private) |
| 173 | fn | readProviderParam | (private) |
| 182 | type | LogoutProfileSelection | (private) |
| 184 | fn | readLogoutProfileSelection | (private) |
| 204 | fn | createAuthLogoutAbortOps | (private) |
| 220 | fn | removeProviderAuthProfilesAcrossOwnerStores | (private) |
| 248 | fn | removeAuthProfilesAcrossOwnerStores | (private) |
| 278 | fn | buildExpiry | (private) |
| 289 | fn | providerDisplayName | (private) |
| 298 | type | ModelAuthStatusRollup | (private) |
| 304 | fn | aggregateProfileStatus | (private) |
| 329 | fn | aggregateRefreshableAuthStatus | pub |
| 349 | fn | mapProvider | (private) |
| 408 | fn | resolveEnvVarName | (private) |
| 413 | fn | resolveProviderApiKeys | (private) |
| 483 | fn | resolveConfigBoundProfileIds | (private) |
| 494 | fn | resolveConfiguredProviders | (private) |

## src/gateway/server-methods/models-list-result.openai-routes.test.ts (571 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | catalogEntry | (private) |
| 25 | fn | listModels | (private) |

## src/gateway/server-methods/models-list-result.ts (584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ModelsListView | (private) |
| 55 | type | ModelsListEntry | (private) |
| 59 | type | ModelsListEntryWithCapabilities | (private) |
| 63 | type | ApiKeyProviderCapabilities | (private) |
| 67 | type | ModelsListAvailability | (private) |
| 68 | type | ModelsListEntryEvaluation | (private) |
| 74 | fn | resolveModelsListView | (private) |
| 79 | fn | resolvePositiveSafeInteger | (private) |
| 85 | fn | buildPublicModelProjection | (private) |
| 97 | fn | resolveModelChoiceAgentRuntime | (private) |
| 119 | fn | listEnabledSyntheticAuthProviderRefs | (private) |
| 136 | fn | createModelsListAuthResolver | (private) |
| 162 | fn | resolveLegacyEntryAvailability | (private) |
| 194 | fn | createModelsListEntryEvaluator | (private) |
| 240 | fn | resolveGatewayModelCatalogRouteKey | (private) |
| 247 | fn | resolveProviderConfigInventoryEntries | (private) |
| 274 | fn | createGatewayAgentModelCatalogProjector | pub |
| 304 | fn | resolveRouteVariants | (private) |
| 376 | fn | buildPublicModelsListEntries | (private) |
| 420 | fn | apiKeyProviderCapabilities | (private) |
| 425 | fn | resolveProvider | (private) |
| 447 | fn | buildModelsListResult | pub |

## src/gateway/server-methods/models.test.ts (1396 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | createDemoOAuthStore | (private) |
| 48 | fn | requestModelsList | (private) |

## src/gateway/server-methods/nodes.invoke-wake.test.ts (1463 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | MockNodeCommandPolicyParams | (private) |
| 23 | type | MockNodeConfig | (private) |
| 90 | type | RespondCall | (private) |
| 100 | type | MockCallSource | (private) |
| 106 | type | TestNodeSession | (private) |
| 113 | fn | requireString | (private) |
| 118 | fn | mockCall | (private) |
| 126 | fn | firstRespondCall | (private) |
| 130 | fn | mockArg | (private) |
| 134 | fn | isLowerHex | (private) |
| 144 | fn | isUuidV4 | (private) |
| 170 | fn | requireRespondPayload | (private) |
| 175 | fn | expectQueuedAction | (private) |
| 185 | fn | expectWakeSendError | (private) |
| 195 | fn | expectNoAuthWake | (private) |
| 204 | fn | expectWakeState | (private) |
| 212 | fn | expectNudgeState | (private) |
| 216 | fn | expectWakeAndNudgeSent | (private) |
| 232 | type | WakeResultOverrides | (private) |
| 242 | fn | directRegistration | (private) |
| 253 | fn | relayRegistration | (private) |
| 268 | fn | mockDirectWakeConfig | (private) |
| 289 | fn | mockRelayWakeConfig | (private) |
| 315 | fn | makeNodeInvokeParams | (private) |
| 326 | fn | invokeNode | (private) |
| 369 | fn | createOperatorClient | (private) |
| 388 | fn | createNodeClient | (private) |
| 404 | fn | createForegroundUnavailableNodeRegistry | (private) |
| 425 | fn | createMissingNodeRegistry | (private) |
| 432 | fn | pullPending | (private) |
| 448 | fn | ackPending | (private) |

## src/gateway/server-methods/nodes.ts (1851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 123 | type | NodeWakeNudgeAttempt | (private) |
| 132 | type | PendingNodeAction | (private) |
| 144 | fn | safeNodeReadProjection | (private) |
| 165 | fn | nodeReadCallerDeviceId | (private) |
| 169 | fn | isVisibleNode | (private) |
| 173 | fn | listNodesForClient | (private) |
| 194 | fn | normalizePluginSurfaceRefreshParams | (private) |
| 208 | fn | respondRefreshedPluginSurface | (private) |
| 280 | fn | resolveDirectNodePushConfig | (private) |
| 287 | fn | resolveRelayNodePushConfig | (private) |
| 302 | fn | clearStaleApnsRegistrationIfNeeded | (private) |
| 321 | fn | delayMs | (private) |
| 327 | fn | isForegroundRestrictedIosCommand | (private) |
| 336 | fn | shouldQueueAsPendingForegroundAction | (private) |
| 359 | fn | prunePendingNodeActions | (private) |
| 371 | fn | clearRemovedNodeRuntimeState | (private) |
| 384 | fn | broadcastRemovedNodePairing | (private) |
| 400 | fn | emitNodePairingDeniedSecurityEvent | (private) |
| 420 | fn | enforcePendingNodePairingOwnership | (private) |
| 457 | fn | emitNodeRoleRemovalSecurityEvent | (private) |
| 481 | fn | removePairedDeviceBackedNode | (private) |
| 550 | fn | enqueuePendingNodeAction | (private) |
| 580 | fn | listPendingNodeActions | (private) |
| 584 | fn | refreshConnectedNodeSurfaceCaches | (private) |
| 613 | fn | resolveAllowedPendingNodeActions | (private) |
| 650 | fn | ackPendingNodeActions | (private) |
| 665 | fn | toPendingParamsJSON | (private) |
| 676 | fn | emitTalkPttNodeEvent | (private) |
| 739 | fn | maybeWakeNodeWithApns | pub |
| 859 | fn | maybeSendNodeWakeNudge | pub |
| 946 | fn | waitForNodeReconnect | pub |

## src/gateway/server-methods/plugin-approval.test.ts (1028 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | createManager | (private) |
| 15 | fn | createLogGatewayMock | (private) |
| 19 | fn | createApprovalContext | (private) |
| 32 | fn | createClient | (private) |
| 61 | fn | createMockOptions | (private) |
| 77 | fn | createNoExecApprovalContext | (private) |
| 81 | type | MockCallSource | (private) |
| 87 | fn | requireRecord | (private) |
| 94 | fn | requireArray | (private) |
| 99 | fn | mockCall | (private) |
| 107 | fn | responseCall | (private) |
| 116 | fn | responseResult | (private) |
| 120 | fn | responseError | (private) |
| 124 | fn | acceptedResult | (private) |
| 138 | fn | acceptedApprovalId | (private) |
| 144 | fn | expectResponseOk | (private) |
| 151 | fn | expectResponseRejected | (private) |
| 156 | fn | waitForAcceptedApproval | (private) |
| 165 | fn | createOwnedClient | (private) |
| 173 | fn | registerApproval | (private) |
| 194 | fn | registerOwnedApproval | (private) |
| 206 | fn | expectPluginApprovalId | (private) |
| 222 | fn | broadcastCall | (private) |

## src/gateway/server-methods/send.test.ts (3554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ResolveOutboundTarget | (private) |
| 83 | fn | resolveAgentIdFromSessionKeyForTests | (private) |
| 93 | fn | messageActionContextFromSessionKeyForTests | (private) |
| 205 | fn | loadSendHandlersForTest | (private) |
| 215 | fn | runSend | (private) |
| 219 | fn | runSendWithClient | (private) |
| 235 | fn | runPoll | (private) |
| 239 | fn | runPollWithClient | (private) |
| 255 | fn | createDeferred | (private) |
| 265 | fn | runMessageActionRequest | (private) |
| 342 | fn | directCliClient | (private) |
| 353 | fn | agentRuntimeClient | (private) |
| 366 | fn | withTempOpenClawStateDir | (private) |
| 378 | fn | deliveryCall | (private) |
| 383 | fn | appendTranscriptCall | (private) |
| 390 | fn | firstRespondCall | (private) |
| 406 | fn | lastDispatchChannelMessageActionCall | (private) |
| 413 | fn | pollCall | (private) |
| 422 | fn | outboundRouteCall | (private) |
| 429 | fn | ensureSessionEntryCall | (private) |
| 436 | fn | expectDeliverySessionMirror | (private) |
| 444 | fn | mockDeliverySuccess | (private) |
| 2289 | fn | identity | (private) |
| 2311 | fn | request | (private) |

## src/gateway/server-methods/send.ts (1032 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | MessageActionToolContext | (private) |
| 81 | fn | resolveTrustedMessageActionToolContext | (private) |
| 155 | fn | resolveGatewayInflightRequest | (private) |
| 185 | fn | resolveRequestedChannel | (private) |
| 230 | fn | resolveInternalDeliveryChannel | (private) |
| 260 | fn | resolveGatewayOutboundTarget | (private) |
| 290 | fn | resolveMessageActionRuntimeConfig | (private) |
| 311 | fn | buildGatewayDeliveryPayload | (private) |
| 339 | fn | cacheGatewayDedupeSuccess | (private) |
| 351 | fn | cacheGatewayDedupeFailure | (private) |
| 363 | fn | createGatewayInflightSuccess | (private) |
| 381 | fn | createGatewayDeliveryInflightSuccess | (private) |
| 400 | fn | createGatewayInflightUnavailableFailure | (private) |
| 419 | fn | mirrorDeliveredSourceReplyToTranscriptBestEffort | (private) |
| 445 | fn | resolveSourceReplyTranscriptMirrorQueueKey | (private) |
| 452 | fn | scheduleDeliveredSourceReplyTranscriptMirror | (private) |

## src/gateway/server-methods/server-methods.test.ts (5638 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | waitForFast | (private) |
| 59 | fn | countMatching | (private) |
| 69 | fn | expectRecordFields | (private) |
| 80 | fn | mockCallArg | (private) |
| 88 | fn | lastMockCallArg | (private) |
| 97 | fn | runLifecycleScenario | (private) |
| 2022 | fn | deliveryMirror | (private) |
| 2735 | fn | execApprovalNoop | (private) |
| 2736 | type | ExecApprovalHandlers | (private) |
| 2737 | type | ExecApprovalGetArgs | (private) |
| 2738 | type | ExecApprovalRequestArgs | (private) |
| 2739 | type | ExecApprovalResolveArgs | (private) |
| 2740 | type | ExecApprovalWaitArgs | (private) |
| 2758 | fn | createExecApprovalClient | (private) |
| 2785 | fn | toExecApprovalRequestContext | (private) |
| 2793 | fn | toExecApprovalResolveContext | (private) |
| 2799 | fn | getExecApproval | (private) |
| 2818 | fn | listExecApprovals | (private) |
| 2836 | fn | requestExecApproval | (private) |
| 2895 | fn | resolveExecApproval | (private) |
| 2919 | fn | waitExecApproval | (private) |
| 2938 | fn | createExecApprovalFixture | (private) |
| 2954 | fn | getRequestedExecApprovalPayload | (private) |
| 2971 | fn | waitForRequestedExecApprovalPayload | (private) |
| 2983 | fn | createForwardingExecApprovalFixture | (private) |
| 3016 | fn | drainApprovalRequestTicks | (private) |
| 4948 | fn | runHealthStatus | (private) |
| 5562 | fn | logsNoop | (private) |

## src/gateway/server-methods/session-catalog.test.ts (579 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | provider | (private) |
| 53 | fn | call | (private) |
| 157 | fn | catalogUsing | (private) |

## src/gateway/server-methods/sessions-files.test.ts (1112 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | createResponder | (private) |
| 58 | type | SessionFilesMethod | (private) |
| 64 | fn | invokeSessionFilesHandler | (private) |
| 81 | fn | expectOkPayload | (private) |
| 87 | fn | expectError | (private) |
| 93 | fn | assistantToolCall | (private) |
| 106 | fn | writeWorkspaceFile | (private) |
| 112 | fn | hashContent | (private) |

## src/gateway/server-methods/sessions-files.ts (845 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | FileKind | (private) |
| 54 | type | TouchedFile | (private) |
| 59 | type | LoadedSessionFiles | (private) |
| 80 | fn | sessionFilesError | (private) |
| 89 | fn | normalizePathValue | (private) |
| 97 | fn | readPathArg | (private) |
| 106 | fn | addTouchedFile | (private) |
| 121 | fn | addRawPatchFiles | (private) |
| 135 | fn | addStructuredPatchFiles | (private) |
| 151 | fn | addPatchFiles | (private) |
| 156 | fn | isToolCallBlockType | (private) |
| 164 | fn | collectTouchedFilesFromMessage | (private) |
| 192 | fn | toDisplayPath | (private) |
| 200 | fn | isInsideRoot | (private) |
| 208 | fn | resolveTouchedFilePath | (private) |
| 224 | fn | resolveFileRoot | (private) |
| 239 | fn | relevanceForKind | (private) |
| 243 | fn | mergeRelevance | (private) |
| 256 | fn | buildSessionRelevanceMap | (private) |
| 278 | fn | relevanceForBrowserPath | (private) |
| 296 | fn | displayNameForPath | (private) |
| 301 | fn | toSessionFileEntry | (private) |
| 350 | fn | loadSessionFileRoot | (private) |
| 374 | fn | resolveSessionFileCandidates | (private) |
| 387 | fn | toBrowserEntry | (private) |
| 408 | fn | matchesSearch | (private) |
| 416 | fn | searchBrowserEntries | (private) |
| 460 | fn | buildBrowserResult | (private) |
| 517 | fn | loadSessionFiles | (private) |
| 554 | fn | buildListResult | (private) |
| 584 | fn | findSessionFile | (private) |
| 628 | fn | respondSessionFileNotFound | (private) |
| 636 | fn | respondSessionFileTooLarge | (private) |
| 648 | fn | respondSessionFileUnsafe | (private) |

## src/gateway/server-methods/sessions-read.ts (506 lines)

_No symbols extracted._

## src/gateway/server-methods/sessions.abort-agent-scope.test.ts (577 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | createActiveRun | (private) |
| 72 | type | ActiveRun | (private) |
| 73 | type | TestAgentConfig | (private) |
| 75 | fn | createDefaultAgents | (private) |
| 79 | fn | createContext | (private) |
| 98 | fn | createRespond | (private) |
| 102 | fn | createBetaRunContext | (private) |
| 109 | fn | createGlobalWorkRunContext | (private) |
| 116 | fn | callSessions | (private) |
| 141 | fn | expectChatAbortParams | (private) |
| 146 | fn | expectRespondErrorMessage | (private) |
| 150 | fn | mockChatSuccess | (private) |
| 154 | fn | expectSessionsListActiveRun | (private) |
| 164 | fn | expectListedGlobalSessionActiveRun | (private) |

## src/gateway/server-methods/sessions.dispatch.test.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | reclaimedPlacementRecord | (private) |
| 53 | fn | targetWithEntry | (private) |
| 78 | fn | makeContext | (private) |
| 91 | fn | invoke | (private) |
| 107 | fn | invokeReclaim | (private) |

## src/gateway/server-methods/skills-upload.test.ts (615 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | type | CallResult | (private) |
| 76 | fn | makeHarness | (private) |
| 94 | fn | makeContext | (private) |
| 110 | fn | call | (private) |
| 137 | fn | sha256 | (private) |
| 141 | fn | expectPathMissing | (private) |
| 150 | fn | skillUploadExists | (private) |
| 159 | fn | expectError | (private) |
| 164 | fn | firstCallArg | (private) |
| 172 | fn | makeSkillArchive | (private) |
| 205 | fn | uploadArchive | (private) |

## src/gateway/server-methods/skills.clawhub.test.ts (584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | SkillsHandlerName | (private) |
| 58 | fn | emptySkillStatusReport | (private) |
| 66 | fn | callSkillsHandler | (private) |
| 70 | fn | expectEmptySecurityVerdicts | (private) |
| 77 | fn | expectEmptySecurityVerdictsWithoutFetch | (private) |

## src/gateway/server-methods/skills.ts (749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | ClawHubInstallResult | (private) |
| 76 | type | ClawHubInstallParams | (private) |
| 80 | fn | installClawHubSkillDeduped | (private) |
| 106 | fn | buildRemoteAwareWorkspaceSkillStatus | (private) |
| 123 | fn | respondSkillWorkshopError | (private) |
| 127 | fn | collectClawHubTrustWarnings | (private) |
| 133 | fn | buildRevisionAgentInstruction | (private) |
| 147 | fn | forwardSkillWorkshopRevisionToChatSend | (private) |

## src/gateway/server-methods/system-agent.test.ts (972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | RespondCall | (private) |
| 78 | fn | makeRespond | (private) |
| 80 | fn | respond | (private) |
| 86 | fn | makeContext | (private) |
| 106 | fn | requireVerifiedInferenceFixture | (private) |
| 113 | fn | requireVerifiedInferenceDeps | (private) |
| 133 | fn | makeVerifiedEngine | (private) |
| 140 | fn | stubEngineOverview | (private) |
| 160 | fn | seededSession | (private) |
| 209 | fn | callChat | (private) |
| 700 | fn | invoke | (private) |

## src/gateway/server-methods/system-agent.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | SystemAgentChatSession | pub |
| 71 | fn | getSystemAgentSessionQueue | (private) |
| 82 | fn | runSystemAgentGatewayTask | (private) |
| 94 | fn | resolveSystemAgentSessionOwnerKey | (private) |
| 120 | class | SystemAgentSetupActivationBusyError | (private) |
| 123 | fn | runExclusiveSystemAgentSetupActivation | pub |
| 139 | fn | evictOldestSession | (private) |
| 164 | fn | persistEngineHistory | (private) |
| 173 | fn | queueDelegatedApproval | (private) |

## src/gateway/server-methods/system-changes.test.ts (719 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | configRecord | (private) |

## src/gateway/server-methods/system-changes.ts (635 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | PendingCollapse | (private) |
| 41 | type | ChangeCursor | (private) |
| 48 | type | ChangeScope | (private) |
| 50 | type | ChangeCandidate | (private) |
| 71 | fn | encodeCursor | (private) |
| 75 | fn | decodeCursor | (private) |
| 95 | fn | isValidPendingCollapses | (private) |
| 112 | fn | transitionKey | (private) |
| 119 | fn | recordTime | (private) |
| 124 | fn | classifyConfigWriteSource | (private) |
| 158 | fn | summarizePaths | (private) |
| 165 | fn | configWriteSummary | (private) |
| 184 | fn | toSystemAgentCandidate | (private) |
| 201 | fn | toConfigCandidate | (private) |
| 246 | fn | scanEligible | (private) |
| 307 | fn | planConfigMatches | (private) |
| 353 | fn | compareCandidates | (private) |
| 365 | fn | isWithinCollapseWindow | (private) |
| 370 | fn | appendPendingCollapse | (private) |
| 380 | fn | consumePendingCollapse | (private) |
| 415 | fn | mergeCandidates | (private) |
| 487 | fn | initialBefore | (private) |
| 494 | fn | listSystemChanges | pub |

## src/gateway/server-methods/talk-client.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | fn | legacyVoiceBindingKey | (private) |
| 68 | fn | pruneLegacyVoiceBindings | (private) |
| 524 | fn | hasOwnedActiveTalkClientRun | (private) |

## src/gateway/server-methods/talk-session.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | type | ManagedRoomTalkSession | (private) |
| 80 | fn | isActiveManagedRoomClient | (private) |
| 91 | fn | canCloseManagedRoomSession | (private) |
| 99 | fn | canCreateUnscopedManagedRoomSession | (private) |
| 105 | fn | managedRoomOwnershipError | (private) |
| 112 | fn | respondInvalidRequest | (private) |
| 116 | fn | respondUnavailable | (private) |
| 133 | fn | respondOk | (private) |
| 137 | fn | respondManagedRoomTurn | (private) |

## src/gateway/server-methods/talk-shared.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | normalizeTalkSessionMode | pub |
| 46 | fn | normalizeTalkSessionTransport | pub |
| 58 | fn | normalizeTalkSessionBrain | pub |
| 66 | fn | resolveTalkRealtimeProviderInstructions | pub |
| 98 | fn | canUseTalkDirectTools | pub |
| 103 | fn | broadcastTalkRoomEvents | pub |
| 128 | type | TalkHandoffFailureReason | (private) |
| 130 | fn | talkHandoffErrorCode | pub |
| 136 | fn | getRecord | (private) |
| 140 | fn | singleRecordKey | (private) |
| 145 | fn | normalizeRealtimeTransport | (private) |
| 155 | fn | getVoiceCallProviderConfig | (private) |
| 183 | fn | getVoiceCallRealtimeConfig | (private) |
| 190 | fn | getVoiceCallStreamingConfig | (private) |
| 197 | fn | listTalkTranscriptionProviders | pub |
| 223 | fn | resolveConfiguredVoiceModelDefaultRef | (private) |
| 261 | fn | buildTalkRealtimeConfig | pub |
| 320 | fn | buildTalkTranscriptionConfig | pub |
| 338 | fn | configuredOrFalse | pub |
| 346 | fn | resolveConfiguredRealtimeTranscriptionProvider | pub |
| 397 | fn | buildRealtimeInstructions | pub |
| 407 | type | RealtimeVoiceLaunchOptions | (private) |
| 416 | type | RealtimeVoiceLaunchOptionInput | (private) |
| 425 | fn | buildRealtimeVoiceLaunchOptions | pub |
| 438 | fn | withRealtimeBrowserOverrides | pub |
| 467 | fn | pickRealtimeVoiceLaunchOptions | (private) |
| 495 | fn | isUnsupportedBrowserWebRtcSession | pub |

## src/gateway/server-methods/talk.test.ts (3589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 151 | fn | createTalkConfig | (private) |
| 165 | fn | expectRecordFields | (private) |
| 176 | fn | mockCallArg | (private) |
| 184 | fn | expectRespondOk | (private) |
| 194 | fn | expectRespondError | (private) |
| 2765 | fn | createSteerContext | (private) |

## src/gateway/server-methods/talk.ts (895 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | TalkSpeakReason | (private) |
| 81 | type | TalkSpeakErrorDetails | (private) |
| 86 | fn | resolveCatalogProviderSelection | (private) |
| 105 | fn | canReadTalkSecrets | (private) |
| 110 | fn | asStringRecord | (private) |
| 124 | fn | normalizeAliasKey | (private) |
| 128 | fn | resolveTalkVoiceId | (private) |
| 148 | fn | withTalkBaseTtsSpeakerSelectionCompat | (private) |
| 173 | fn | buildTalkTtsConfig | (private) |
| 229 | fn | buildTalkCatalog | (private) |
| 398 | fn | isFallbackEligibleTalkReason | (private) |
| 406 | fn | talkSpeakError | (private) |
| 414 | fn | resolveTalkSpeed | (private) |
| 428 | fn | buildTalkSpeakOverrides | (private) |
| 462 | fn | resolveTalkResponseFromConfig | (private) |
| 567 | fn | projectTalkResolvedProviderConfig | (private) |
| 586 | fn | projectTalkSourceProviderConfigForSecrets | (private) |
| 594 | fn | projectTalkSourceProviderMapForSecrets | (private) |
| 608 | fn | projectTalkRealtimeForSecrets | (private) |
| 614 | fn | projectTalkSourcePayloadForSecrets | (private) |
| 626 | fn | resolveTalkProviderInputConfig | (private) |
| 647 | fn | stripUnresolvedSecretApiKey | (private) |
| 651 | fn | stripUnresolvedSecretApiKeysFromBaseTtsProviders | (private) |
| 683 | fn | stripUnresolvedSecretApiKeyFromRecord | (private) |

## src/gateway/server-methods/terminal.test.ts (851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | waitForFast | (private) |
| 30 | fn | deferred | (private) |
| 47 | fn | makeOpts | (private) |
| 113 | fn | installCatalog | (private) |

## src/gateway/server-methods/terminal.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | invalid | (private) |
| 48 | fn | requireConnId | (private) |
| 57 | fn | terminalEnabled | (private) |
| 63 | fn | respondTerminalOpenTimeout | (private) |
| 67 | fn | parseNodePayload | (private) |
| 78 | fn | stageNodeTerminalUpload | (private) |
| 104 | fn | respondLaunchBlocked | (private) |

## src/gateway/server-methods/tools-effective.test.ts (681 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | RespondCall | (private) |
| 81 | type | ToolsEffectivePayload | (private) |
| 100 | fn | createInvokeParams | (private) |
| 119 | fn | resolveEffectiveToolInventoryArg | (private) |
| 126 | fn | firstRespondCall | (private) |
| 130 | fn | makeMcpTool | (private) |
| 140 | fn | makeCoreInventory | (private) |
| 169 | fn | makeMcpCatalog | (private) |
| 173 | fn | mockMcpConfigSummary | (private) |
| 180 | fn | mockWarmMcpRuntime | (private) |
| 191 | fn | mockWarmMcpTool | (private) |
| 200 | fn | expectInvalidResponse | (private) |
| 207 | fn | expectInvalidToolsParams | (private) |
| 216 | fn | expectPayloadGroupIds | (private) |
| 221 | fn | expectResponsesOk | (private) |
| 227 | fn | expectPayloadNotice | (private) |

## src/gateway/server-methods/tools-effective.ts (626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | nowForToolsEffectiveCache | (private) |
| 51 | type | TrustedToolsEffectiveContext | (private) |
| 74 | type | ToolsEffectiveCacheEntry | (private) |
| 79 | type | SessionMcpConfigSummary | (private) |
| 85 | fn | optionalCacheString | (private) |
| 89 | fn | buildToolsEffectiveCacheKey | (private) |
| 119 | fn | trimToolsEffectiveCache | (private) |
| 129 | fn | buildMcpConfigSummaryCacheKey | (private) |
| 141 | fn | trimMcpConfigSummaryCache | (private) |
| 151 | fn | resolveCachedSessionMcpConfigSummary | (private) |
| 169 | fn | cacheToolsEffectiveResult | (private) |
| 178 | fn | scheduleBaseToolsEffectiveRefresh | (private) |
| 210 | fn | refreshBaseToolsEffectiveInBackground | (private) |
| 219 | fn | resolveCachedBaseToolsEffective | (private) |
| 241 | fn | resolveRequestedAgentIdOrRespondError | (private) |
| 262 | fn | appendMcpInventoryGroups | (private) |
| 281 | fn | appendToolInventoryNotice | (private) |
| 291 | fn | formatMcpServerNames | (private) |
| 302 | fn | mcpDiscoveryNotice | (private) |
| 335 | fn | maybeAppendMcpNotice | (private) |
| 344 | fn | resolveBaseToolsEffectiveInventory | (private) |
| 377 | fn | filterMcpTools | (private) |
| 401 | fn | resolveReadOnlyToolsEffectiveInventory | (private) |
| 462 | fn | resolveTrustedToolsEffectiveContext | (private) |
| 559 | fn | handleToolsEffectiveRequest | (private) |

## src/gateway/server-methods/update.test.ts (1078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | UpdateInstallSurface | (private) |
| 37 | type | ManagedServiceUpdateHandoffResult | (private) |
| 54 | type | PostCoreFinalizeOutcome | (private) |
| 63 | type | UpdateRunPayload | (private) |
| 268 | fn | invokeUpdateRun | (private) |
| 285 | fn | captureUpdateRunPayload | (private) |
| 300 | fn | readCapturedPayload | (private) |
| 307 | fn | firstMockCall | (private) |
| 318 | fn | withProcessEnv | (private) |
| 325 | fn | mockGlobalInstallSurface | (private) |
| 334 | fn | mockGitInstallSurface | (private) |
| 898 | fn | mockGitOkUpdate | (private) |

## src/gateway/server-methods/usage.sessions-usage.test.ts (934 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | fn | runSessionsUsage | (private) |
| 130 | fn | runSessionsUsageTimeseries | (private) |
| 143 | fn | runSessionsUsageLogs | (private) |
| 162 | fn | mockCall | (private) |
| 170 | fn | mockArg | (private) |
| 174 | fn | expectSuccessfulSessionsUsage | (private) |
| 185 | fn | withUsageState | (private) |
| 190 | fn | writeSessionFile | (private) |
| 856 | fn | buildUsage | (private) |

## src/gateway/server-methods/usage.test.ts (901 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | costSummary | (private) |
| 90 | fn | expectUtcDateRange | (private) |
| 100 | fn | expectDateRange | (private) |
| 108 | fn | withTimeZone | (private) |

## src/gateway/server-methods/usage.ts (1732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | runUsageAgentTasks | (private) |
| 87 | type | DateRange | (private) |
| 90 | type | DateRangeResolution | (private) |
| 95 | type | DateInterpretation | (private) |
| 99 | type | DateInterpretationResolution | (private) |
| 102 | type | DateParts | (private) |
| 106 | type | CostUsageCacheEntry | (private) |
| 114 | fn | findCostUsageCacheEvictionKey | (private) |
| 126 | fn | setCostUsageCache | (private) |
| 136 | fn | resolveSessionUsageFileOrRespond | (private) |
| 517 | type | DiscoveredSessionWithAgent | (private) |
| 518 | type | UsageGroupingMode | (private) |
| 520 | type | MergedEntry | (private) |
| 535 | fn | buildStoreBySessionId | (private) |
| 563 | fn | filterSessionStoreByAgent | (private) |
| 582 | fn | discoverAllSessionsForUsage | (private) |
| 607 | fn | addUniqueSessionIds | (private) |
| 619 | fn | resolveUsageFamilySessionIds | (private) |
| 623 | fn | resolveUsageFamilyKey | (private) |
| 631 | fn | maybeMergeFamilyEntry | (private) |
| 660 | fn | createEmptySessionCostSummary | (private) |
| 666 | fn | mergeSessionUsageInto | (private) |
| 719 | fn | mergeDailyRows | (private) |
| 741 | fn | mergeQuarterRows | (private) |
| 766 | fn | mergeMessageCounts | (private) |
| 783 | fn | mergeToolUsage | (private) |
| 802 | fn | mergeModelUsage | (private) |
| 824 | fn | mergeLatency | (private) |
| 847 | fn | mergeDailyLatencyRows | (private) |
| 871 | fn | mergeDailyModelRows | (private) |
| 892 | fn | loadCostUsageSummaryCached | (private) |
| 971 | fn | loadAllAgentCostUsageSummary | (private) |
| 1024 | fn | mergeUsageCacheStatus | (private) |
