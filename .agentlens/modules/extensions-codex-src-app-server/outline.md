# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 74 large files in this module.

## extensions/codex/src/app-server/approval-bridge.test.ts (2708 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | requireRecord | (private) |
| 53 | fn | gatewayCallAt | (private) |
| 61 | fn | gatewayRequestPayload | (private) |
| 65 | fn | gatewayCallOptions | (private) |
| 69 | fn | gatewayCallMethod | (private) |
| 73 | fn | findApprovalEvent | (private) |
| 107 | fn | createParams | (private) |

## extensions/codex/src/app-server/approval-bridge.ts (1412 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ApprovalPreviewSource | (private) |
| 59 | type | SanitizedApprovalPreview | (private) |
| 68 | fn | handleCodexAppServerApprovalRequest | pub |
| 249 | fn | recordNativeToolFailureDisposition | (private) |
| 271 | fn | buildApprovalResponse | (private) |
| 294 | fn | matchesCurrentTurn | (private) |
| 307 | fn | buildApprovalContext | (private) |
| 391 | type | ApprovalContext | (private) |
| 392 | type | ApprovalPolicyOutcome | (private) |
| 401 | fn | runOpenClawToolPolicyForApprovalRequest | (private) |
| 496 | fn | runNativeRelayToolPolicyForApprovalRequest | (private) |
| 627 | fn | buildNativeRelayPreToolUsePayload | (private) |
| 653 | fn | readNativeRelayPreToolUseDecision | (private) |
| 696 | fn | parseRelayJsonResponse | (private) |
| 705 | fn | sanitizeRelayDecisionReason | (private) |
| 710 | fn | buildOpenClawToolPolicyRequest | (private) |
| 734 | fn | toolPolicyParamsWereRewritten | (private) |
| 743 | fn | stableJsonText | (private) |
| 772 | fn | isPlainRecord | (private) |
| 776 | fn | commandApprovalDecision | (private) |
| 800 | fn | fileChangeApprovalDecision | (private) |
| 810 | fn | requestedPermissions | (private) |
| 822 | fn | unsupportedApprovalResponse | (private) |
| 829 | fn | describeRequestedPermissions | (private) |
| 834 | fn | describeCommandApprovalDetails | (private) |
| 859 | fn | describePermissionProfile | (private) |
| 938 | type | PermissionArrayDescriptor | (private) |
| 945 | fn | summarizeNetworkEnabledPermission | (private) |
| 959 | fn | summarizeFileSystemEntries | (private) |
| 994 | fn | summarizePermissionRecord | (private) |
| 1009 | fn | summarizePermissionArray | (private) |
| 1035 | fn | summarizeStringArray | (private) |
| 1056 | fn | summarizeNetworkPolicyAmendments | (private) |
| 1082 | fn | readStringArray | (private) |
| 1086 | fn | sanitizePermissionHostValue | (private) |
| 1096 | fn | sanitizePermissionPathValue | (private) |
| 1103 | fn | sanitizePermissionScalar | (private) |
| 1107 | fn | permissionHostRisks | (private) |
| 1119 | fn | permissionPathRisks | (private) |
| 1128 | fn | isPrivateNetworkHostPattern | (private) |
| 1159 | fn | hasAvailableDecision | (private) |
| 1167 | fn | findAvailableCommandAmendmentDecision | (private) |
| 1182 | fn | commandRejectionDecision | (private) |
| 1200 | fn | approvalResolutionMessage | (private) |
| 1216 | fn | approvalScopeForOutcome | (private) |
| 1220 | fn | approvalEventScope | (private) |
| 1229 | fn | approvalKindForMethod | (private) |
| 1239 | fn | isSupportedAppServerApprovalMethod | (private) |
| 1247 | fn | emitApprovalEvent | (private) |
| 1254 | fn | readDisplayCommandPreview | (private) |
| 1264 | fn | readPolicyCommand | (private) |
| 1279 | fn | readCommandActions | (private) |
| 1289 | fn | readCommandActionsPreview | (private) |
| 1302 | fn | readCommandPreview | (private) |
| 1323 | fn | readStringPreview | (private) |
| 1331 | fn | readString | (private) |
| 1336 | fn | truncate | (private) |
| 1340 | fn | previewSource | (private) |
| 1347 | fn | appendPreviewPart | (private) |
| 1361 | fn | sanitizeApprovalPreview | (private) |
| 1376 | fn | sanitizeVisibleScalar | (private) |
| 1386 | fn | formatApprovalPreviewSubject | (private) |
| 1390 | fn | joinDescriptionLinesWithinLimit | (private) |
| 1409 | fn | formatErrorMessage | (private) |

## extensions/codex/src/app-server/attempt-context.ts (1074 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | CodexBootstrapFile | (private) |
| 60 | type | CodexBootstrapContext | (private) |
| 65 | type | CodexSystemPromptReport | pub |
| 66 | type | CodexToolReportEntry | (private) |
| 67 | type | CodexWorkspaceBootstrapContext | (private) |
| 84 | fn | readMirroredSessionHistoryMessages | pub |
| 100 | fn | readContextEngineThreadBootstrapProjection | pub |
| 125 | fn | resolveContextEngineBootstrapProjectionDecision | pub |
| 169 | fn | buildCodexWorkspaceBootstrapContext | pub |
| 287 | fn | buildCodexSystemPromptReport | pub |
| 345 | fn | buildCodexSkillReportEntries | (private) |
| 360 | fn | buildCodexToolReportEntry | (private) |
| 380 | fn | buildCodexToolSchemaStats | (private) |
| 383 | fn | schemaChars | (private) |
| 399 | fn | sha256Text | (private) |
| 403 | fn | normalizeForStableHash | (private) |
| 418 | fn | stableJsonHash | (private) |
| 422 | fn | buildCodexBootstrapInjectionStats | (private) |
| 475 | fn | indexCodexContextFileContent | (private) |
| 497 | fn | readCodexIndexedContextFileContent | (private) |
| 516 | fn | readPositiveNumber | (private) |
| 522 | fn | readNonEmptyString | (private) |
| 529 | fn | buildCodexOpenClawPromptContext | pub |
| 552 | fn | shouldInjectCodexOpenClawPromptContext | (private) |
| 561 | fn | renderCodexSkillsCollaborationInstructions | pub |
| 577 | fn | prependCodexOpenClawPromptContext | pub |
| 605 | fn | resolveCodexDeliveryHintPreservedInputRange | pub |
| 646 | fn | splitLeadingCodexDeliveryHint | (private) |
| 664 | fn | renderCodexWorkspaceBootstrapPromptContext | (private) |
| 685 | fn | selectCodexWorkspacePromptContextFiles | (private) |
| 709 | fn | selectCodexWorkspaceInheritedDeveloperInstructionFiles | (private) |
| 718 | fn | selectCodexWorkspaceTurnScopedDeveloperInstructionFiles | (private) |
| 727 | fn | selectCodexWorkspaceDeveloperInstructionFiles | (private) |
| 744 | fn | renderCodexWorkspaceThreadDeveloperInstructions | (private) |
| 755 | fn | renderCodexWorkspaceCollaborationDeveloperInstructions | (private) |
| 767 | fn | renderCodexWorkspaceDeveloperInstructions | (private) |
| 790 | fn | selectCodexWorkspaceHeartbeatReferenceFiles | (private) |
| 805 | fn | renderCodexWorkspaceHeartbeatReference | (private) |
| 821 | fn | selectCodexWorkspaceMemoryReferenceFiles | (private) |
| 843 | fn | renderCodexWorkspaceMemoryReference | (private) |
| 865 | fn | renderCodexWorkspaceMemoryCollaborationInstructions | (private) |
| 891 | fn | renderCodexMemoryRecallInstructions | (private) |
| 915 | fn | renderCodexMemoryToolSearchBridge | (private) |
| 927 | fn | getCodexWorkspaceMemoryToolNames | pub |
| 934 | fn | canRouteCodexWorkspaceMemoryThroughTools | (private) |
| 948 | fn | isMissingCodexBootstrapContextFile | (private) |
| 952 | fn | toCodexEmbeddedContextFile | (private) |
| 959 | fn | isCodexWorkspaceRootMemoryBootstrapFile | (private) |
| 969 | fn | isCodexWorkspaceRootMemoryContextFile | (private) |
| 982 | fn | isCodexWorkspaceRootMemoryPath | (private) |
| 996 | fn | isSameCodexWorkspacePath | (private) |
| 1004 | fn | remapCodexContextFilePath | (private) |
| 1032 | fn | compareCodexContextFiles | (private) |
| 1048 | fn | compareCodexBootstrapFiles | (private) |
| 1055 | fn | normalizeCodexContextFilePath | (private) |
| 1059 | fn | getCodexContextFileDisplayBasename | (private) |
| 1063 | fn | getCodexContextFileBasename | (private) |
| 1067 | fn | normalizeCodexDynamicToolName | (private) |
| 1071 | fn | isNonEmptyString | (private) |

## extensions/codex/src/app-server/attempt-startup.test.ts (826 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | ClientHarness | (private) |
| 38 | type | AttemptPaths | (private) |
| 47 | fn | createAttemptPaths | (private) |
| 58 | fn | createAttemptParams | (private) |
| 93 | fn | readHarnessMessages | (private) |
| 101 | fn | startThreadWithHarness | (private) |
| 164 | fn | captureExpectedRuntimeArtifact | (private) |
| 182 | fn | answerInitialize | (private) |
| 191 | fn | waitForRequest | (private) |
| 209 | fn | waitForThreadStart | (private) |
| 213 | fn | threadStartResult | (private) |
| 248 | fn | isProcessAlive | (private) |

## extensions/codex/src/app-server/attempt-startup.ts (704 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 96 | fn | isCodexContextRestartSelectionChangedError | pub |
| 106 | type | CodexSandboxContext | (private) |
| 109 | type | StartCodexAttemptThreadResult | (private) |
| 128 | fn | startCodexAttemptThread | pub |
| 179 | fn | abandonStartupAcquire | (private) |
| 220 | fn | startupAttempt | (private) |
| 360 | fn | releaseStartupSandboxEnvironment | (private) |
| 415 | fn | releaseStartupReservation | (private) |
| 419 | fn | reserveStartupThread | (private) |
| 434 | fn | releaseStartupResources | (private) |
| 439 | fn | buildThreadLifecycleParams | (private) |
| 683 | fn | shouldClearSharedClientAfterStartupAbandon | (private) |
| 687 | fn | shouldClearSharedClientAfterStartupRace | (private) |
| 693 | fn | shouldClearSharedClientAfterStartupFailure | (private) |

## extensions/codex/src/app-server/attempt-turn-watches.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | Timer | (private) |
| 11 | type | CodexAttemptTurnWatchTimeoutKind | pub |
| 14 | type | CodexAttemptTurnWatchTimeout | (private) |
| 23 | type | CodexAttemptTurnWatchController | pub |
| 31 | fn | createCodexAttemptTurnWatchController | pub |
| 84 | fn | resolveWatchTimeoutMs | (private) |
| 86 | fn | clearCompletionIdleTimer | (private) |
| 93 | fn | clearTerminalIdleTimer | (private) |
| 100 | fn | clearAssistantCompletionIdleTimer | (private) |
| 107 | fn | clearAttemptIdleTimer | (private) |
| 114 | fn | clearAllTimers | (private) |
| 121 | fn | scheduleCompletionIdleWatch | (private) |
| 139 | fn | scheduleAssistantCompletionIdleWatch | (private) |
| 155 | fn | scheduleAttemptIdleWatch | (private) |
| 167 | fn | scheduleTerminalIdleWatch | (private) |
| 183 | fn | scheduleProgressWatches | (private) |
| 189 | fn | isCompletionIdleTimeoutDueBeforeAttempt | (private) |
| 207 | fn | recordAttemptProgress | (private) |
| 222 | fn | fireAssistantCompletionIdleRelease | (private) |
| 277 | fn | fireAttemptIdleTimeout | (private) |
| 319 | fn | fireCompletionIdleTimeout | (private) |
| 373 | fn | fireTerminalIdleTimeout | (private) |

## extensions/codex/src/app-server/auth-bridge.test.ts (2788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 128 | fn | createStartOptions | (private) |
| 143 | fn | expectPathMissing | (private) |
| 153 | type | AuthProfileStore | (private) |
| 154 | type | AuthProfileCredential | (private) |
| 156 | fn | expectOAuthProfile | (private) |
| 165 | fn | writeCodexCliAuthFile | (private) |
| 179 | fn | writeCodexCliApiKeyAuthFile | (private) |
| 597 | fn | snapshotFor | (private) |
| 825 | fn | resolveKey | (private) |

## extensions/codex/src/app-server/auth-bridge.ts (1075 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | AuthProfileOrderConfig | (private) |
| 65 | type | CodexAppServerAuthRequirement | pub |
| 71 | fn | bridgeCodexAppServerStartOptions | pub |
| 118 | fn | resolveCodexAppServerAuthProfileId | pub |
| 134 | fn | resolveCodexAppServerAuthProfileIdForAgent | pub |
| 154 | fn | ensureCodexAppServerAuthProfileStore | (private) |
| 167 | fn | resolveCodexAppServerAuthProfileStore | pub |
| 183 | type | CodexAppServerPreparedAuthProfileSnapshot | (private) |
| 188 | type | CodexAppServerPreparedAuth | pub |
| 197 | type | CodexAppServerResolvedPreparedAuth | pub |
| 204 | fn | resolveCodexAppServerPreparedAuthProfileSnapshot | pub |
| 254 | fn | resolveCodexAppServerPreparedAuthHandoff | pub |
| 310 | fn | resolveCodexAppServerAuthAccountCacheKey | pub |
| 352 | fn | resolveCodexAppServerEnvApiKeyCacheKey | (private) |
| 378 | fn | resolveCodexAppServerFallbackApiKeyCacheKey | pub |
| 393 | fn | resolveCodexAppServerPreparedApiKeyCacheKey | pub |
| 400 | fn | fingerprintApiKeyAuthProfileCacheKey | (private) |
| 408 | fn | fingerprintTokenAuthProfileCacheKey | (private) |
| 416 | fn | fingerprintCodexCliAuthFileApiKeyCacheKey | (private) |
| 426 | fn | withCodexHomeEnvironment | (private) |
| 464 | fn | withoutClearedCodexHomeEnv | (private) |
| 473 | fn | applyCodexAppServerAuthProfile | pub |
| 557 | fn | createCodexAppServerAuthError | (private) |
| 562 | class | CodexAppServerAuthProfileUnavailableError | (private) |
| 564 | fn | resolveCodexAppServerAuthProfileLoginParams | (private) |
| 593 | fn | refreshCodexAppServerAuthTokens | pub |
| 613 | fn | resolveCodexAppServerAuthProfileLoginParamsInternal | (private) |
| 658 | fn | resolveCodexAppServerFallbackApiKeyLoginParams | (private) |
| 678 | fn | resolveCodexCliAuthFilePath | (private) |
| 687 | fn | resolveHomeRelativePath | (private) |
| 695 | fn | parseCodexCliAuthFileApiKey | (private) |
| 709 | fn | readCodexCliAuthFileApiKey | (private) |
| 717 | fn | resolveCodexCliAuthFileApiKeyCacheKey | (private) |
| 728 | fn | resolveLoginParamsForCredential | (private) |
| 782 | fn | resolveOAuthCredentialForCodexAppServer | (private) |
| 875 | fn | shouldUseScopedOAuthCredential | (private) |
| 901 | fn | hasMatchingOAuthIdentity | (private) |
| 912 | fn | resolveScopedOAuthCredential | (private) |
| 928 | fn | refresh | (private) |
| 958 | fn | isCodexAppServerAuthProvider | (private) |
| 969 | fn | isOpenAIApiKeyBackupCredential | (private) |
| 979 | fn | isCodexAppServerAuthProfileCredential | (private) |
| 989 | fn | shouldClearOpenAiApiKeyForCodexAuthProfile | (private) |
| 1001 | fn | isCodexSubscriptionCredential | (private) |
| 1011 | fn | withClearedEnvironmentVariables | (private) |
| 1026 | fn | readFirstNonEmptyEnv | (private) |
| 1030 | fn | readFirstNonEmptyEnvEntry | (private) |
| 1043 | fn | buildChatgptAuthTokensParams | (private) |
| 1056 | fn | resolveChatgptPlanType | (private) |
| 1062 | fn | resolveChatgptAccountId | (private) |
| 1066 | fn | resolveStableChatgptAccountId | (private) |

## extensions/codex/src/app-server/auth-profile-runtime-contract.test.ts (540 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | RunCodexAppServerAttemptOptions | (private) |
| 33 | fn | setCodexAppServerClientFactoryForTest | (private) |
| 37 | fn | resetCodexAppServerClientFactoryForTest | (private) |
| 41 | fn | runCodexAppServerAttempt | (private) |
| 57 | fn | createParams | (private) |
| 82 | fn | setPreparedOpenAIRoute | (private) |
| 117 | fn | writeCodexAppServerBinding | (private) |
| 129 | fn | threadStartResult | (private) |
| 164 | fn | turnStartResult | (private) |
| 178 | fn | getMockServerVersion | (private) |
| 182 | fn | getMockRuntimeIdentity | (private) |
| 186 | fn | mockClientRuntimeMethods | (private) |
| 194 | fn | createCodexAuthProfileHarness | (private) |
| 200 | fn | notify | (private) |

## extensions/codex/src/app-server/bounded-turn.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | CodexBoundedTurnOptions | pub |
| 55 | type | CodexBoundedTurnResult | (private) |
| 61 | type | CodexBoundedTurnModelSelection | (private) |
| 63 | type | CodexBoundedTurnParams | (private) |
| 80 | fn | runBoundedCodexAppServerTurn | pub |
| 112 | fn | runBoundedCodexAppServerTurnInWorkspace | (private) |
| 152 | fn | abortFromCaller | (private) |
| 252 | fn | resolveBoundedThreadConfig | (private) |
| 264 | fn | buildPrivateCodexAppServerStartOptions | (private) |
| 288 | fn | createCodexBoundedApprovalHandler | (private) |
| 315 | fn | resolveCodexBoundedTurnModel | (private) |
| 355 | fn | createCodexBoundedTurnCollector | (private) |
| 368 | fn | rememberAssistantText | (private) |
| 466 | fn | collectCompletedItems | (private) |
| 477 | fn | waitForTurnCompletion | (private) |
| 497 | fn | abortListener | (private) |
| 511 | fn | collectAssistantTextFromItems | (private) |
| 520 | fn | readNotificationTurnId | (private) |
| 528 | fn | readString | (private) |
| 533 | fn | isTerminalTurn | (private) |

## extensions/codex/src/app-server/client.test.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | startInitialize | (private) |

## extensions/codex/src/app-server/client.ts (1160 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | PendingRequest | (private) |
| 54 | fn | getCodexAppServerClientInstanceId | pub |
| 65 | class | CodexAppServerRpcError | pub |
| 79 | class | CodexAppServerLocalRequestCancellationError | (private) |
| 92 | fn | isCodexAppServerRequestTimeoutError | pub |
| 102 | fn | isCodexAppServerBrokenPipeError | pub |
| 115 | class | CodexAppServerIndeterminateTransportError | (private) |
| 126 | fn | isCodexAppServerIndeterminateRequestCancellationError | pub |
| 139 | fn | isCodexAppServerPrewriteRequestCancellationError | pub |
| 152 | fn | isCodexAppServerIndeterminateTransportError | pub |
| 165 | fn | formatCodexAppServerRpcErrorMessage | (private) |
| 174 | fn | readCodexAppServerRpcReloginDetail | (private) |
| 187 | fn | isJsonObject | (private) |
| 192 | fn | isCodexAppServerConnectionClosedError | pub |
| 205 | type | CodexServerRequestHandler | (private) |
| 210 | type | CodexServerNotificationHandler | (private) |
| 215 | type | CodexAppServerRuntimeIdentity | pub |
| 224 | class | CodexAppServerClient | pub |
| 438 | fn | release | (private) |
| 559 | fn | abortListener | (private) |
| 563 | fn | cleanup | (private) |
| 594 | fn | cleanup | (private) |
| 602 | fn | rejectPending | (private) |
| 628 | fn | abortListener | (private) |
| 711 | fn | runOnExit | (private) |
| 950 | fn | defaultServerRequestResponse | (private) |
| 986 | fn | stringifyCodexAppServerMessage | (private) |
| 994 | fn | timeoutServerRequestResponse | (private) |
| 1012 | class | CodexAppServerVersionError | (private) |
| 1027 | fn | assertSupportedCodexAppServerVersion | (private) |
| 1044 | fn | isUnsupportedCodexAppServerVersionError | pub |
| 1048 | fn | buildCodexAppServerRuntimeIdentity | (private) |
| 1065 | fn | readNonEmptyInitializeString | (private) |
| 1071 | fn | readCodexVersionFromUserAgent | (private) |
| 1081 | fn | redactCodexAppServerLinePreview | (private) |
| 1098 | fn | appendBoundedTail | (private) |
| 1103 | fn | buildCodexAppServerExitError | (private) |
| 1116 | fn | shouldBufferCodexAppServerParseFailure | (private) |
| 1126 | fn | logCodexAppServerParseFailure | (private) |
| 1147 | fn | isCodexAppServerApprovalRequest | pub |
| 1151 | fn | formatExitValue | (private) |

## extensions/codex/src/app-server/compact.test.ts (2033 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | MaybeCompactOptions | (private) |
| 39 | fn | setCodexAppServerClientFactoryForTest | (private) |
| 43 | fn | resetCodexAppServerClientFactoryForTest | (private) |
| 47 | fn | maybeCompactCodexAppServerSession | (private) |
| 71 | fn | writeTestBinding | (private) |
| 86 | fn | writeSupervisedTestBinding | (private) |
| 105 | fn | startCompaction | (private) |
| 116 | fn | startSandboxedCompaction | (private) |
| 127 | fn | startNodeExecCompaction | (private) |
| 138 | type | CompactResult | (private) |
| 140 | fn | requireCompactResult | (private) |
| 147 | fn | compactDetails | (private) |
| 151 | fn | flushAsyncTasks | (private) |
| 159 | fn | expectExternalMutationBlockedDuringNativeRequest | (private) |
| 614 | fn | externalWrite | (private) |
| 698 | fn | externalClear | (private) |
| 1899 | fn | createFakeCodexClient | (private) |

## extensions/codex/src/app-server/compact.ts (927 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | CodexAppServerCompactOptions | (private) |
| 47 | type | CodexNativeCompactionCompletion | (private) |
| 49 | fn | isAlreadyTerminalInterruptError | (private) |
| 57 | fn | watchCodexNativeCompactionCompletion | (private) |
| 79 | fn | resolveCompletion | (private) |
| 83 | fn | removeNotificationHandler | (private) |
| 84 | fn | removeCloseHandler | (private) |
| 85 | fn | removeAbortHandler | (private) |
| 88 | fn | finish | (private) |
| 100 | fn | retireUnconfirmed | (private) |
| 118 | fn | requestInterrupt | (private) |
| 162 | fn | beginInterruptGrace | (private) |
| 185 | fn | beginCompletionTimeout | (private) |
| 270 | fn | onAbort | (private) |
| 303 | fn | runExclusiveCodexNativeCompaction | (private) |
| 334 | fn | waitForCodexNativeCompactionQueue | (private) |
| 343 | fn | removeAbortListener | (private) |
| 345 | fn | onAbort | (private) |
| 362 | fn | maybeCompactCodexAppServerSession | pub |
| 373 | fn | warnIfIgnoringOpenClawCompactionOverrides | (private) |
| 395 | fn | readIgnoredCompactionOverridePaths | (private) |
| 422 | fn | readCompactionOverrideEntries | (private) |
| 461 | fn | readAgentIdFromSessionKey | (private) |
| 469 | fn | readRecord | (private) |
| 475 | fn | compactCodexNativeThread | (private) |
| 627 | fn | beginNativeCompactionRequest | (private) |
| 636 | fn | settleNativeCompactionRequestError | (private) |
| 808 | fn | skippedCodexNativeCompactionResult | (private) |
| 838 | fn | failedCodexThreadBindingCompactionResult | (private) |
| 864 | fn | clearContextEngineProjectionBeforeNativeCompaction | (private) |
| 894 | fn | isSameNativeCompactionBinding | (private) |
| 910 | fn | isCodexThreadNotFoundError | (private) |
| 921 | fn | formatCompactionError | (private) |

## extensions/codex/src/app-server/computer-use.test.ts (1406 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | CodexComputerUseRequest | (private) |
| 37 | fn | expectStatusFields | (private) |
| 46 | fn | expectSetupErrorStatus | (private) |
| 61 | fn | requireRecord | (private) |
| 68 | fn | requestCalls | (private) |
| 74 | fn | expectRequestMethodNotCalled | (private) |
| 145 | fn | contender | (private) |
| 1006 | fn | createComputerUseRequest | (private) |
| 1122 | fn | createRemoteOnlyComputerUseRequest | (private) |
| 1162 | fn | createAmbiguousComputerUseRequest | (private) |
| 1188 | fn | createEmptyMarketplaceComputerUseRequest | (private) |
| 1201 | fn | createMultiMarketplaceComputerUseRequest | (private) |
| 1281 | fn | createBundledMarketplaceComputerUseRequest | (private) |
| 1377 | fn | marketplaceEntry | (private) |
| 1386 | fn | pluginSummary | (private) |

## extensions/codex/src/app-server/computer-use.ts (1264 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | CodexComputerUseRequest | (private) |
| 46 | type | CodexComputerUseStatusReason | (private) |
| 58 | type | CodexComputerUseInstallationStatus | (private) |
| 65 | type | CodexComputerUseExposureStatus | (private) |
| 67 | type | CodexComputerUseLiveTestState | (private) |
| 69 | type | CodexComputerUseStatusSection | (private) |
| 75 | type | CodexComputerUseLiveTestStatus | (private) |
| 88 | type | CodexComputerUseRepairStatus | pub |
| 96 | type | CodexComputerUseStatus | pub |
| 120 | class | CodexComputerUseSetupError | (private) |
| 131 | type | CodexComputerUseSetupParams | pub |
| 147 | type | CodexComputerUseInspectionParams | (private) |
| 162 | type | MarketplaceRef | (private) |
| 174 | type | MarketplaceResolution | (private) |
| 179 | type | PluginInspection | (private) |
| 195 | fn | readCodexComputerUseStatus | pub |
| 221 | fn | ensureCodexComputerUse | pub |
| 264 | fn | installCodexComputerUse | pub |
| 283 | fn | inspectCodexComputerUse | (private) |
| 362 | fn | inspectCodexComputerUseWithoutFence | (private) |
| 413 | fn | ensureComputerUsePlugin | (private) |
| 475 | fn | readComputerUseTools | (private) |
| 533 | fn | isNonStrictLiveTestStartupAllowed | (private) |
| 548 | fn | runCodexComputerUseLiveTest | pub |
| 633 | fn | cleanupComputerUseProbeThread | (private) |
| 644 | fn | scopedRepairUnavailableStatus | (private) |
| 655 | fn | resolveMarketplaceRef | (private) |
| 732 | fn | listComputerUseMarketplaceCandidates | (private) |
| 742 | fn | blockUnsafeAutoInstallStatus | (private) |
| 755 | fn | shouldAddBundledComputerUseMarketplace | (private) |
| 770 | fn | resolveBundledComputerUseMarketplacePath | (private) |
| 784 | fn | findComputerUseMarketplaces | (private) |
| 805 | fn | chooseKnownComputerUseMarketplace | (private) |
| 817 | fn | marketplaceDiscoveryWaitUntil | (private) |
| 832 | fn | delay | (private) |
| 837 | fn | onAbort | (private) |
| 850 | fn | abortError | (private) |
| 855 | fn | readComputerUsePlugin | (private) |
| 867 | fn | readMcpServerStatus | (private) |
| 887 | fn | reloadMcpServers | (private) |
| 891 | fn | pluginRequestParams | (private) |
| 901 | fn | pluginSetupReason | (private) |
| 911 | fn | pluginSetupMessage | (private) |
| 925 | fn | remoteInstallUnsupportedMessage | (private) |
| 934 | fn | statusFromPlugin | (private) |
| 962 | fn | disabledStatus | (private) |
| 992 | fn | unavailableStatus | (private) |
| 1028 | fn | installationStatusFromPlugin | (private) |
| 1053 | fn | exposureStatusFromTools | (private) |
| 1071 | fn | skippedLiveTestStatus | (private) |
| 1087 | fn | pluginWarnings | (private) |
| 1098 | fn | killStaleComputerUseMcpChildren | pub |
| 1165 | fn | parsePsOutput | (private) |
| 1184 | fn | isStaleComputerUseMcpChild | (private) |
| 1188 | fn | isDescendantOfPid | (private) |
| 1210 | fn | createComputerUseRequest | (private) |
| 1255 | fn | resolveComputerUseConfig | (private) |

## extensions/codex/src/app-server/config.test.ts (2901 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | RuntimeOptionsParams | (private) |
| 25 | fn | resolveRuntimeForTest | (private) |
| 43 | fn | envRef | (private) |
| 47 | fn | requireRecord | (private) |
| 54 | fn | expectFields | (private) |
| 66 | fn | expectRuntimePolicy | (private) |
| 1614 | fn | resolveForConfig | (private) |
| 2779 | fn | keyFor | (private) |

## extensions/codex/src/app-server/config.ts (2501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | CodexAppServerTransportMode | (private) |
| 46 | type | CodexAppServerHomeScope | (private) |
| 47 | type | CodexAppServerPolicyMode | (private) |
| 48 | type | CodexAppServerConnectionClass | pub |
| 49 | type | CodexAppServerRemoteAppsSubstrate | (private) |
| 50 | type | OpenClawExecMode | (private) |
| 51 | type | OpenClawExecSecurity | (private) |
| 52 | type | OpenClawExecAsk | (private) |
| 53 | type | OpenClawExecApprovalFloorsForCodexAppServer | (private) |
| 57 | type | OpenClawExecPolicyForCodexAppServer | pub |
| 63 | type | OpenClawExecPolicy | (private) |
| 64 | type | ProviderAuthAliasConfig | (private) |
| 65 | type | CodexAppServerDefaultPolicy | (private) |
| 72 | type | CodexAppServerApprovalPolicy | pub |
| 73 | type | CodexAppServerApprovalPolicySource | (private) |
| 74 | type | CodexAppServerEffectiveApprovalPolicy | (private) |
| 75 | type | CodexAppServerSandboxMode | pub |
| 76 | type | CodexAppServerApprovalsReviewer | (private) |
| 77 | type | CodexAppServerCommandSource | (private) |
| 78 | type | CodexManagedCommandOrder | pub |
| 79 | type | CodexDynamicToolsLoading | pub |
| 80 | type | CodexPluginDestructivePolicy | (private) |
| 81 | type | CodexPluginDestructiveApprovalMode | pub |
| 85 | type | CodexPluginMarketplaceName | pub |
| 89 | type | CodexComputerUseConfig | pub |
| 107 | type | ResolvedCodexComputerUseConfig | pub |
| 125 | type | CodexPluginEntryConfig | (private) |
| 132 | type | CodexPluginsConfig | (private) |
| 139 | type | CodexSupervisionEndpoint | pub |
| 156 | type | CodexSupervisionConfig | (private) |
| 163 | type | CodexAppServerExperimentalConfig | (private) |
| 167 | type | CodexAppServerNetworkProxyDomainPermission | (private) |
| 168 | type | CodexAppServerNetworkProxyUnixSocketPermission | (private) |
| 169 | type | CodexAppServerNetworkProxyBaseProfile | (private) |
| 170 | type | CodexAppServerNetworkProxyMode | (private) |
| 172 | type | CodexAppServerNetworkProxyConfig | (private) |
| 189 | type | ResolvedCodexAppServerNetworkProxyConfig | (private) |
| 195 | type | ResolvedCodexPluginPolicy | pub |
| 204 | type | ResolvedCodexPluginsPolicy | pub |
| 213 | type | CodexAppServerStartOptions | pub |
| 233 | type | CodexAppServerRuntimeOptions | pub |
| 252 | type | CodexModelBackedReviewerContext | (private) |
| 262 | type | CodexPluginConfig | pub |
| 297 | fn | shouldAutoApproveCodexAppServerApprovals | pub |
| 485 | fn | readCodexPluginConfig | pub |
| 498 | fn | isCodexSandboxExecServerEnabled | pub |
| 502 | fn | assertCodexAppServerCommandHasNoInlineArgs | (private) |
| 523 | fn | resolveCodexPluginsPolicy | pub |
| 560 | fn | isCodexPluginMarketplaceName | (private) |
| 568 | fn | resolveCodexPluginDestructivePolicy | (private) |
| 581 | fn | resolveCodexAppServerRuntimeOptions | pub |
| 824 | fn | resolveCodexAppServerStartOptionsForAgent | pub |
| 855 | fn | isCodexAppServerApprovalPolicyAllowedByRequirements | pub |
| 873 | fn | canUseCodexModelBackedApprovalsReviewerForModel | pub |
| 891 | fn | isTrustedCodexModelBackedOpenAIProvider | (private) |
| 919 | fn | resolveCodexModelBackedReviewerPolicyContext | pub |
| 961 | fn | resolveCodexComputerUseConfig | pub |
| 1070 | fn | normalizeComputerUseHealthCheckIntervalMinutes | (private) |
| 1076 | fn | normalizeComputerUsePluginCacheMode | (private) |
| 1080 | fn | codexAppServerStartOptionsKey | pub |
| 1114 | fn | codexSandboxPolicyForTurn | pub |
| 1134 | fn | resolveCodexSupervisionAppServerRuntimeOptions | pub |
| 1150 | fn | resolveCodexAppServerNetworkProxy | (private) |
| 1201 | fn | resolveNetworkProxyPermissionProfileName | (private) |
| 1216 | fn | fingerprintCodexAppServerNetworkProxyConfigPatch | (private) |
| 1220 | fn | normalizeNetworkProxyPermissionMap | (private) |
| 1229 | fn | removeUndefinedJsonFields | (private) |
| 1235 | fn | stableStringifyJson | (private) |
| 1248 | fn | withMcpElicitationsApprovalPolicy | pub |
| 1281 | fn | resolveTransport | (private) |
| 1285 | fn | normalizeRemoteWorkspaceRoot | (private) |
| 1289 | fn | inferCodexAppServerConnectionClass | (private) |
| 1299 | fn | assertCodexAppServerConnectionClassConfig | (private) |
| 1318 | fn | assertCodexAppServerConnectionSecurity | pub |
| 1331 | fn | isLoopbackWebSocketUrl | (private) |
| 1351 | fn | hasIdentityBearingWebSocketAuth | (private) |
| 1364 | fn | resolvePolicyMode | (private) |
| 1368 | fn | resolveDefaultCodexAppServerPolicy | (private) |
| 1437 | fn | readCodexRequirementsToml | (private) |
| 1460 | fn | resolveCodexRequirementsPath | (private) |
| 1468 | fn | parseAllowedSandboxModesFromCodexRequirements | (private) |
| 1483 | fn | parseAllowedApprovalPoliciesFromCodexRequirements | (private) |
| 1496 | fn | parseAllowedApprovalsReviewersFromCodexRequirements | (private) |
| 1509 | fn | parseMatchingRemoteSandboxModesFromCodexRequirements | (private) |
| 1529 | fn | parseRequirementsSandboxModes | (private) |
| 1541 | fn | parseTopLevelRequirementsStringArray | (private) |
| 1546 | fn | parseTomlStringValue | (private) |
| 1550 | fn | parseInlineOpenAIModelProviderBaseUrl | (private) |
| 1557 | fn | parseTomlStringAssignmentValue | (private) |
| 1573 | fn | parseTomlStringAssignment | (private) |
| 1579 | fn | tomlDottedKeyPattern | (private) |
| 1583 | fn | tomlKeyPattern | (private) |
| 1588 | fn | parseRequirementsStringArray | (private) |
| 1601 | fn | parseTomlTableSection | (private) |
| 1615 | fn | parseTomlArrayTableSections | (private) |
| 1633 | fn | firstTomlTableOffset | (private) |
| 1638 | fn | stripTomlLineComments | (private) |
| 1678 | fn | normalizeRequirementsSandboxMode | (private) |
| 1692 | fn | normalizeRequirementsHostName | (private) |
| 1697 | fn | requirementsHostNameMatchesAnyPattern | (private) |
| 1704 | fn | globPatternMatches | (private) |
| 1719 | fn | normalizeRequirementsApprovalPolicy | (private) |
| 1731 | fn | normalizeRequirementsApprovalsReviewer | (private) |
| 1738 | fn | selectGuardianApprovalPolicy | (private) |
| 1759 | fn | selectGuardianApprovalsReviewer | (private) |
| 1780 | fn | selectUserApprovalsReviewer | (private) |
| 1792 | fn | isCodexModelBackedApprovalsReviewerProvider | (private) |
| 1797 | fn | isTrustedCodexModelBackedApprovalsReviewerProvider | (private) |
| 1814 | fn | readCodexBaseUrlOverridesForModelBackedReview | (private) |
| 1858 | fn | readCodexAppServerConfigToml | (private) |
| 1878 | fn | codexConfigEnablesNativeComputerUse | (private) |
| 1925 | fn | resolveCodexAppServerConfigPath | (private) |
| 1939 | fn | resolveCodexAppServerUserHomeDir | pub |
| 1947 | fn | readErrorCode | (private) |
| 1953 | fn | readConfiguredOpenAIProvidersForModelBackedReview | (private) |
| 1973 | fn | configuredOpenAIProviderIsTrustedForModelBackedReview | (private) |
| 2010 | fn | normalizeOpenAIModelBackedReviewerModelId | (private) |
| 2019 | fn | matchesConfiguredOpenAIModelId | (private) |
| 2024 | fn | hasNonEmptyRecord | (private) |
| 2029 | fn | isNativeOpenAIBaseUrl | (private) |
| 2041 | fn | openAIBaseUrlEnvOverridesAreTrustedForModelBackedReview | (private) |
| 2047 | fn | isNativeChatGPTBaseUrl | (private) |
| 2059 | fn | normalizeCodexModelBackedReviewerPolicyProvider | (private) |
| 2063 | fn | inferProviderFromModelRef | (private) |
| 2069 | fn | selectForcedPromptingSandbox | (private) |
| 2079 | fn | selectForcedDangerFullAccessSandbox | (private) |
| 2098 | fn | selectGuardianSandbox | (private) |
| 2113 | fn | resolveApprovalPolicy | (private) |
| 2120 | fn | resolveSandbox | (private) |
| 2126 | fn | resolveApprovalsReviewer | (private) |
| 2132 | fn | resolveOpenClawExecPolicyFromConfig | (private) |
| 2154 | fn | resolveOpenClawExecPolicyForCodexAppServer | pub |
| 2176 | fn | resolveEffectiveOpenClawExecModeForCodexAppServer | (private) |
| 2186 | fn | resolveCodexPolicyModeForOpenClawExecMode | (private) |
| 2195 | fn | assertCodexAppServerAllowedForOpenClawExecMode | (private) |
| 2203 | fn | createDefaultOpenClawExecPolicy | (private) |
| 2211 | fn | applyOpenClawExecPolicyLayer | (private) |
| 2240 | fn | resolveOpenClawExecApprovalFloorsForCodexAppServer | (private) |
| 2258 | fn | applyOpenClawExecApprovalFloors | (private) |
| 2280 | fn | resolveOpenClawExecPolicyForMode | (private) |
| 2298 | fn | resolveOpenClawExecModeFromPolicy | (private) |
| 2314 | fn | minOpenClawExecSecurity | (private) |
| 2322 | fn | maxOpenClawExecAsk | (private) |
| 2327 | fn | readExecMode | (private) |
| 2337 | fn | readRecord | (private) |
| 2343 | fn | normalizeCodexServiceTier | pub |
| 2361 | fn | isCodexFastServiceTier | pub |
| 2365 | fn | normalizePositiveNumber | (private) |
| 2369 | fn | normalizeHeaders | (private) |
| 2389 | fn | normalizeCodexAppServerSecretInput | (private) |
| 2396 | fn | normalizeStringList | (private) |
| 2400 | fn | readBooleanEnv | (private) |
| 2414 | fn | readExecSecurity | (private) |
| 2418 | fn | readExecAsk | (private) |
| 2422 | fn | readNumberEnv | (private) |
| 2431 | fn | resolveArgs | (private) |
| 2443 | fn | readNonEmptyString | (private) |
| 2451 | fn | hashSecretForKey | (private) |
| 2462 | fn | getStartOptionsKeySecret | (private) |
| 2470 | fn | splitShellWords | (private) |

## extensions/codex/src/app-server/dynamic-tool-build.test.ts (1683 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | setOpenClawCodingToolsFactoryForTests | (private) |
| 38 | fn | resetOpenClawCodingToolsFactoryForTests | (private) |
| 42 | type | RuntimeDynamicToolForTest | (private) |
| 46 | fn | createParams | (private) |
| 72 | fn | createCodexRuntimePlanFixture | (private) |
| 91 | fn | createRuntimeDynamicTool | (private) |
| 108 | fn | buildDynamicToolsForTest | (private) |

## extensions/codex/src/app-server/dynamic-tool-build.ts (862 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | OpenClawCodingToolsOptions | (private) |
| 55 | type | OpenClawCodingToolsFactory | (private) |
| 57 | type | OpenClawDynamicTool | (private) |
| 58 | type | OpenClawSandboxContext | (private) |
| 59 | type | CodexDynamicToolBuildEvent | (private) |
| 71 | fn | preserveRingZeroSystemAgentTool | (private) |
| 84 | type | DynamicToolBuildParams | (private) |
| 113 | fn | resolveOpenClawCodingToolsSessionKeys | (private) |
| 124 | fn | resolveCodexMessageToolProvider | pub |
| 130 | fn | resolveCodexAppServerHookChannelId | pub |
| 142 | type | CodexDynamicToolBuildStageTiming | (private) |
| 147 | type | CodexDynamicToolBuildStageSummary | (private) |
| 154 | fn | createCodexDynamicToolBuildStageTracker | pub |
| 169 | fn | toMs | (private) |
| 189 | fn | shouldWarnCodexDynamicToolBuildStageSummary | pub |
| 198 | fn | formatCodexDynamicToolBuildStageSummary | pub |
| 208 | fn | buildDynamicTools | pub |
| 474 | fn | includeForcedCodexDynamicToolAllow | (private) |
| 495 | fn | shouldEnableCodexAppServerNativeToolSurface | pub |
| 520 | fn | isCodexNativeExecutionBlockedByNodeExecHost | (private) |
| 538 | fn | resolveCodexRuntimePolicySessionKey | (private) |
| 549 | fn | canCodexAppServerNativeToolSurfaceHonorSandbox | (private) |
| 569 | fn | canSandboxToolPolicyExposeCodexNativeToolSurface | (private) |
| 576 | fn | isCodexMemoryFlushRun | (private) |
| 581 | fn | filterCodexMemoryFlushDynamicTools | (private) |
| 587 | fn | shouldRequireCodexSandboxExecServerEnvironment | pub |
| 597 | fn | resolveCodexSandboxEnvironmentSelection | pub |
| 604 | fn | resolveCodexAppServerExecutionCwd | pub |
| 622 | fn | mapCodexAppServerRemoteWorkspacePath | (private) |
| 647 | fn | normalizeRemoteWorkspaceMatchPath | (private) |
| 650 | fn | trimTrailingPathSeparator | (private) |
| 653 | fn | joinRemoteWorkspacePath | (private) |
| 657 | fn | resolveCodexExternalSandboxPolicyForOpenClawSandbox | pub |
| 665 | fn | codexNetworkAccessForOpenClawSandbox | (private) |
| 675 | fn | disableCodexPluginThreadConfig | pub |
| 686 | fn | addSandboxShellDynamicToolsIfAvailable | (private) |
| 734 | fn | shouldExposeSandboxExecDynamicTool | (private) |
| 750 | fn | isSandboxShellDynamicToolExcluded | (private) |
| 753 | fn | addNodeShellDynamicToolsIfNeeded | (private) |
| 797 | fn | shouldKeepOpenClawShellDynamicTools | (private) |
| 810 | fn | resolveCodexNativeExecutionPolicyForDynamicTools | (private) |
| 824 | fn | filterCodexDynamicToolsForAllowlist | (private) |
| 853 | fn | hasWildcardCodexToolsAllow | (private) |
| 857 | fn | shouldForceMessageTool | (private) |

## extensions/codex/src/app-server/dynamic-tool-execution.test.ts (1002 lines)

_No symbols extracted._

## extensions/codex/src/app-server/dynamic-tool-execution.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | DynamicToolTimeoutDetails | (private) |
| 62 | fn | normalizeLogField | (private) |
| 80 | fn | readNumericTimeoutMs | (private) |
| 93 | fn | formatDynamicToolTimeoutDetails | (private) |
| 147 | fn | handleDynamicToolCallWithTimeout | pub |
| 163 | fn | finalizeTerminal | (private) |
| 186 | fn | createFailedAfterPossibleDispatch | (private) |
| 198 | fn | notifyAgentToolResult | (private) |
| 213 | fn | notifyFailedToolResult | (private) |
| 243 | fn | abortFromRun | (private) |
| 313 | fn | readDynamicToolResponseText | (private) |
| 324 | fn | toCodexDynamicToolProtocolResponse | pub |
| 334 | fn | toCodexDynamicToolProgressResponse | pub |
| 347 | type | TerminalToolExecutionDiagnostic | (private) |
| 352 | type | TerminalDynamicToolReleaseState | (private) |
| 363 | fn | shouldReleaseTurnAfterTerminalDynamicTool | pub |
| 378 | fn | shouldBlockTerminalReleaseForNonTerminalDynamicToolResult | pub |
| 385 | type | TerminalDynamicToolBatchAction | (private) |
| 391 | type | TerminalDynamicToolBatchState | (private) |
| 400 | fn | resolveTerminalDynamicToolBatchAction | pub |
| 420 | fn | isDynamicToolTerminalDiagnosticEvent | pub |
| 431 | fn | isMatchingDynamicToolTerminalDiagnostic | pub |
| 461 | fn | hasPendingDynamicToolTerminalDiagnostic | pub |
| 482 | fn | resolveDynamicToolCallTimeoutMs | pub |
| 519 | fn | readComputerToolTimeoutMs | (private) |
| 538 | fn | readDynamicToolCallTimeoutMs | (private) |
| 552 | fn | readConfiguredDynamicToolTimeoutMs | (private) |
| 581 | fn | readTimeoutSecondsAsMs | (private) |
| 586 | fn | readDynamicToolTimeoutSecondsAsMs | (private) |
| 600 | fn | readPositiveFiniteTimeoutMs | (private) |
| 606 | fn | clampDynamicToolTimeoutMs | (private) |

## extensions/codex/src/app-server/dynamic-tools.test.ts (4149 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | frameImageIdentity | (private) |
| 49 | fn | createTool | (private) |
| 59 | fn | mediaResult | (private) |
| 71 | fn | textToolResult | (private) |
| 78 | fn | createBridgeWithToolResult | (private) |
| 95 | fn | expectInputText | (private) |
| 102 | fn | requireRecord | (private) |
| 108 | fn | callArg | (private) |
| 121 | fn | expectDynamicSpec | (private) |
| 135 | fn | flattenSpecsWithNamespace | (private) |
| 145 | fn | specNames | (private) |
| 149 | fn | expectNoNamespace | (private) |
| 155 | fn | expectContextFields | (private) |
| 162 | fn | expectToolResult | (private) |
| 168 | fn | expectExecuteCall | (private) |
| 178 | fn | handleMessageToolCall | (private) |
| 3035 | fn | factory | (private) |
| 3083 | fn | factory | (private) |

## extensions/codex/src/app-server/dynamic-tools.ts (1522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | CodexDynamicToolHookContext | (private) |
| 92 | type | CodexToolResultHookContext | (private) |
| 94 | type | ProjectedCodexDynamicTool | (private) |
| 101 | type | CodexDynamicToolSchemaQuarantine | (private) |
| 106 | fn | applyCurrentMessageProvider | (private) |
| 122 | fn | normalizeRouteToken | (private) |
| 130 | fn | sourceRouteTokens | (private) |
| 163 | fn | routeTokenMatchesSource | (private) |
| 171 | fn | routeProviderMatchesSource | (private) |
| 184 | fn | routeTokenMatchesCurrentMessage | (private) |
| 194 | fn | readRouteToken | (private) |
| 199 | fn | explicitRouteTokensMismatchCurrent | (private) |
| 214 | fn | explicitThreadRouteTargetsNonSource | (private) |
| 234 | fn | replyReceiptMatchesCurrentMessage | (private) |
| 287 | fn | hasExplicitNonSourceMessageRoute | (private) |
| 342 | type | CodexDynamicToolBridge | pub |
| 390 | fn | computerFrameImageIdentity | (private) |
| 406 | fn | invalidateComputerFrame | (private) |
| 420 | fn | createCodexDynamicToolBridge | pub |
| 485 | type | ExecutionSnapshot | (private) |
| 489 | type | ExecutionSnapshotState | (private) |
| 559 | fn | captureExecutionBoundary | (private) |
| 868 | fn | notifyAgentToolResult | (private) |
| 887 | fn | failedToolResult | (private) |
| 897 | fn | wrapProjectedCodexDynamicTools | (private) |
| 929 | fn | createCodexDynamicToolSpecs | (private) |
| 974 | fn | createCodexDynamicToolFunctionSpec | (private) |
| 985 | fn | projectCodexDynamicTools | (private) |
| 1040 | type | CodexDynamicToolDescriptorRead | (private) |
| 1052 | fn | readCodexDynamicToolDescriptor | (private) |
| 1106 | fn | warnQuarantinedDynamicTools | (private) |
| 1122 | fn | emitQuarantinedDynamicToolDiagnostics | (private) |
| 1140 | fn | dedupeQuarantinedDynamicTools | (private) |
| 1155 | fn | toToolResultHookContext | (private) |
| 1168 | fn | resolveCodexDynamicToolResultMaxChars | (private) |
| 1178 | fn | composeAbortSignals | (private) |
| 1188 | fn | collectToolTelemetry | (private) |
| 1282 | fn | extractInternalSourceReplyPayload | (private) |
| 1316 | fn | isToolResultYield | (private) |
| 1323 | fn | isAsyncStartedToolResult | (private) |
| 1327 | fn | withDiagnosticTerminalType | (private) |
| 1338 | fn | withDiagnosticFailureDisposition | (private) |
| 1355 | fn | withDynamicToolTermination | (private) |
| 1369 | fn | withDynamicToolAsyncStarted | (private) |
| 1383 | fn | normalizeToolResultMaxChars | (private) |
| 1388 | fn | convertToolContents | (private) |
| 1437 | fn | convertToolContent | (private) |
| 1454 | fn | jsonObjectToRecord | (private) |
| 1460 | fn | readFirstString | (private) |
| 1472 | fn | collectMediaUrls | (private) |
| 1474 | fn | pushMediaUrl | (private) |
| 1479 | fn | pushAttachment | (private) |
| 1518 | fn | isCronAddAction | (private) |

## extensions/codex/src/app-server/elicitation-bridge.test.ts (1773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | mockCall | (private) |
| 21 | fn | mockCallArg | (private) |
| 25 | fn | gatewayToolCall | (private) |
| 29 | fn | gatewayToolArg | (private) |
| 33 | fn | createParams | (private) |
| 44 | fn | buildApprovalElicitation | (private) |
| 73 | fn | buildCurrentCodexApprovalElicitation | (private) |
| 93 | fn | buildComputerUseApprovalElicitation | (private) |
| 111 | fn | buildPluginApprovalElicitation | (private) |
| 135 | fn | buildConnectorPluginApprovalElicitation | (private) |
| 157 | fn | createPluginAppPolicyContext | (private) |
| 194 | fn | createAccountAppPolicyContext | (private) |
| 217 | fn | appsForPlugin | (private) |

## extensions/codex/src/app-server/elicitation-bridge.ts (994 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ApprovalPropertyContext | (private) |
| 29 | type | BridgeableApprovalElicitation | (private) |
| 38 | type | PluginElicitationResolution | (private) |
| 87 | fn | handleCodexAppServerElicitationRequest | pub |
| 144 | fn | matchesCurrentThread | (private) |
| 152 | fn | turnIdMismatches | (private) |
| 157 | fn | hasExactTurnId | (private) |
| 161 | fn | resolvePluginElicitation | (private) |
| 225 | fn | isCodexConnectorApprovalElicitation | (private) |
| 233 | fn | resolvePluginStableMetadataMatch | (private) |
| 269 | fn | uniquePluginMatch | (private) |
| 282 | fn | hasDisplayNameOnlyPluginMatch | (private) |
| 299 | fn | isPluginAppPolicyContextEntry | (private) |
| 305 | fn | appPolicyDisplayName | (private) |
| 309 | fn | normalizePluginIdentityText | (private) |
| 313 | fn | buildPluginPolicyElicitationResponse | (private) |
| 350 | fn | resolvePluginDestructiveApprovalMode | (private) |
| 356 | fn | allowedPluginPolicyApprovalDecisions | (private) |
| 367 | fn | oneShotPluginPolicyApprovalOutcome | (private) |
| 374 | fn | readPluginApprovalElicitation | (private) |
| 414 | fn | buildApprovalAllowedDecisions | (private) |
| 423 | fn | canMapPersistentApproval | (private) |
| 441 | fn | declineElicitationResponse | (private) |
| 445 | fn | logPluginElicitationDecline | (private) |
| 453 | fn | readBridgeableApprovalElicitation | (private) |
| 489 | fn | readComputerUseApprovalElicitation | (private) |
| 529 | fn | buildApprovalDescription | (private) |
| 562 | fn | readPropertyDescriptionLines | (private) |
| 580 | fn | readDisplayParamLines | (private) |
| 605 | fn | formatDisplayParamValue | (private) |
| 610 | fn | formatDisplayJsonValue | (private) |
| 663 | fn | sanitizeOptionalDisplayText | (private) |
| 668 | fn | sanitizeDisplayText | (private) |
| 683 | fn | truncateDisplayText | (private) |
| 687 | fn | requestPluginApprovalOutcome | (private) |
| 718 | fn | buildElicitationResponse | (private) |
| 756 | fn | buildAcceptedContent | (private) |
| 808 | fn | readApprovalFieldValue | (private) |
| 832 | fn | readPersistFieldValue | (private) |
| 859 | fn | readDefaultValue | (private) |
| 863 | fn | readFallbackFieldValue | (private) |
| 873 | fn | isApprovalField | (private) |
| 878 | fn | isPersistField | (private) |
| 883 | fn | propertyText | (private) |
| 893 | fn | readPersistHints | (private) |
| 904 | fn | buildAcceptedMeta | (private) |
| 916 | fn | choosePersistHint | (private) |
| 926 | fn | chooseAlwaysPersistOptionValue | (private) |
| 933 | fn | optionMatchesPersist | (private) |
| 940 | fn | hasNoSchemaProperties | (private) |
| 945 | fn | readEnumOptions | (private) |
| 968 | fn | isPositiveApprovalOption | (private) |
| 973 | fn | isSessionApprovalOption | (private) |
| 980 | fn | readString | (private) |
| 985 | fn | readFirstString | (private) |

## extensions/codex/src/app-server/event-projector-assistant.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | AgentEvent | (private) |
| 13 | type | AnswerCandidateStatus | (private) |
| 15 | class | CodexAssistantProjection | pub |

## extensions/codex/src/app-server/event-projector-tool-progress.ts (554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | shouldEmitTranscriptToolProgress | pub |
| 59 | type | ToolTranscriptCallInput | pub |
| 65 | type | ToolTranscriptResultInput | pub |
| 72 | type | ToolProgressRawSignature | (private) |
| 73 | type | ToolProgressEchoState | (private) |
| 80 | class | CodexToolProgressProjection | pub |

## extensions/codex/src/app-server/event-projector.assistant.test.ts (514 lines)

_No symbols extracted._

## extensions/codex/src/app-server/event-projector.command-output.test.ts (627 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 379 | fn | output | (private) |
| 431 | fn | output | (private) |

## extensions/codex/src/app-server/event-projector.native-audit.test.ts (514 lines)

_No symbols extracted._

## extensions/codex/src/app-server/event-projector.native-finalization.test.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 406 | fn | output | (private) |

## extensions/codex/src/app-server/event-projector.replay-safety.test.ts (647 lines)

_No symbols extracted._

## extensions/codex/src/app-server/event-projector.ts (762 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | CodexAppServerToolTelemetry | (private) |
| 77 | type | CodexAppServerEventProjectorOptions | (private) |
| 87 | class | CodexAppServerEventProjector | pub |
| 760 | fn | isHookNotificationMethod | (private) |

## extensions/codex/src/app-server/native-subagent-monitor.test.ts (1829 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | CodexThreadReadResponse | (private) |
| 19 | type | CodexNativeSubagentMonitorInstance | (private) |
| 21 | fn | createClient | (private) |
| 22 | type | ThreadReadParams | (private) |
| 23 | type | ThreadTurnsParams | (private) |
| 24 | type | NotificationHandler | (private) |
| 81 | fn | closeHandler | (private) |
| 98 | fn | createRuntime | (private) |
| 99 | type | DeliveryResult | (private) |
| 145 | fn | createTaskScope | (private) |
| 149 | fn | registerParent | (private) |
| 162 | fn | notifyChildStarted | (private) |
| 192 | fn | nativeCompletionNotification | (private) |
| 232 | fn | childTurnCompletedNotification | (private) |
| 252 | fn | threadRead | (private) |
| 327 | fn | taskRecord | (private) |

## extensions/codex/src/app-server/native-subagent-monitor.ts (1632 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | NativeSubagentMonitorRuntime | (private) |
| 37 | type | NativeSubagentMonitorClient | (private) |
| 42 | type | ParentState | (private) |
| 54 | type | ChildState | (private) |
| 72 | type | ChildAssistantMessages | (private) |
| 79 | type | RecoveredCompletion | (private) |
| 83 | type | ThreadRecovery | (private) |
| 91 | type | ThreadStatusRevision | (private) |
| 96 | type | TaskRecoveryCandidate | (private) |
| 105 | type | MonitorOptions | (private) |
| 148 | fn | registerMonitor | (private) |
| 172 | class | Monitor | (private) |
| 1435 | fn | readThreadTurnRecovery | (private) |
| 1454 | fn | toChildTurnCompletion | (private) |
| 1480 | fn | lastChildAssistantMessage | (private) |
| 1496 | fn | readTurnErrorMessage | (private) |
| 1506 | fn | systemErrorFallbackCompletion | (private) |
| 1515 | fn | readTurnCompletion | (private) |
| 1553 | fn | readLastAgentMessage | (private) |
| 1579 | fn | buildParentAgentPathKey | (private) |
| 1583 | fn | isNoFinalCompletion | (private) |
| 1590 | fn | delayForAttempt | (private) |
| 1594 | fn | readThreadParentThreadId | (private) |
| 1601 | fn | readThreadSpawnSource | (private) |
| 1607 | fn | readString | (private) |
| 1612 | fn | readStringArray | (private) |
| 1619 | fn | readObjectStringKeys | (private) |
| 1623 | fn | normalizeIdentifier | (private) |
| 1627 | fn | unrefTimer | (private) |

## extensions/codex/src/app-server/native-subagent-task-mirror.test.ts (824 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | TaskLifecycleRuntime | (private) |
| 10 | fn | createRuntime | (private) |

## extensions/codex/src/app-server/native-subagent-task-mirror.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | TaskLifecycleRuntime | (private) |
| 27 | type | CodexNativeSubagentTaskMirrorParams | (private) |
| 35 | class | CodexNativeSubagentTaskMirror | pub |
| 426 | fn | codexNativeSubagentRunId | pub |
| 431 | fn | readSubagentThreadSpawnSource | (private) |
| 449 | fn | readThreadStartedNotification | (private) |
| 459 | fn | readThreadStatusChangedNotification | (private) |
| 475 | fn | isCodexThreadStatusType | (private) |
| 479 | fn | readAgentsStates | (private) |
| 497 | fn | readStringArray | (private) |
| 504 | fn | readString | (private) |
| 509 | fn | readNullableString | (private) |
| 514 | fn | normalizeToolName | (private) |
| 518 | fn | normalizeSubagentActivityKind | (private) |
| 525 | fn | normalizeCollabToolCallStatus | (private) |
| 542 | fn | isBlockedOrFailedCollabToolCallStatus | (private) |
| 546 | fn | isNonTerminalAgentStateStatus | (private) |
| 550 | fn | isTerminalAgentStateStatus | (private) |
| 554 | fn | normalizeAgentStateStatus | (private) |
| 580 | fn | secondsToMillis | (private) |
| 587 | fn | trimOptional | (private) |

## extensions/codex/src/app-server/plugin-inventory.test.ts (711 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 631 | fn | pluginList | (private) |
| 649 | fn | pluginSummary | (private) |
| 664 | fn | pluginDetail | (private) |
| 685 | fn | appSummary | (private) |
| 695 | fn | appInfo | (private) |

## extensions/codex/src/app-server/plugin-inventory.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CodexPluginRuntimeRequest | pub |
| 31 | type | CodexWorkspacePluginListResult | (private) |
| 36 | type | CodexPluginMarketplaceRef | pub |
| 43 | type | CodexPluginInventoryDiagnosticCode | (private) |
| 54 | type | CodexPluginInventoryDiagnostic | pub |
| 61 | type | CodexPluginOwnedApp | pub |
| 70 | type | CodexPluginInventoryRecord | pub |
| 82 | type | CodexPluginInventory | pub |
| 90 | type | ReadCodexPluginInventoryParams | (private) |
| 103 | fn | readCodexPluginInventory | pub |
| 259 | fn | findOpenAiCuratedPluginSummary | pub |
| 273 | fn | pluginReadParams | pub |
| 287 | fn | resolveRecoverableCodexPluginConfigKeys | pub |
| 306 | fn | listCodexPluginMetadata | (private) |
| 333 | fn | isSettledMissingPluginPolicy | (private) |
| 352 | fn | readCachedAppInventory | (private) |
| 368 | fn | readPluginDetail | (private) |
| 413 | fn | resolveAppOwnership | (private) |
| 428 | fn | resolveOwnedApps | (private) |
| 471 | fn | findPluginSummary | (private) |
| 484 | fn | findOpenAiCuratedMarketplacePlugin | (private) |
| 500 | fn | findWorkspaceMarketplacePlugin | (private) |
| 513 | fn | pluginNameFromPluginId | (private) |
| 525 | fn | marketplaceRef | (private) |
| 537 | fn | isOpenAiCuratedMarketplace | pub |

## extensions/codex/src/app-server/plugin-thread-config.test.ts (2159 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1976 | fn | build | (private) |
| 2044 | fn | pluginList | (private) |
| 2062 | fn | pluginSummary | (private) |
| 2077 | fn | pluginDetail | (private) |
| 2099 | fn | appSummary | (private) |
| 2109 | fn | appInfo | (private) |
| 2127 | fn | buildReadyGoogleCalendarThreadConfig | (private) |

## extensions/codex/src/app-server/plugin-thread-config.ts (777 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | PluginAppPolicyContextEntry | pub |
| 47 | type | AccountAppPolicyContextEntry | (private) |
| 56 | type | CodexAppPolicyContextEntry | pub |
| 59 | type | PluginAppPolicyContext | pub |
| 66 | type | CodexPluginThreadConfigDiagnostic | (private) |
| 80 | type | CodexPluginThreadConfig | pub |
| 91 | type | BuildCodexPluginThreadConfigParams | (private) |
| 105 | fn | shouldBuildCodexPluginThreadConfig | pub |
| 110 | fn | buildCodexPluginThreadConfigInputFingerprint | pub |
| 123 | fn | buildCodexPluginThreadConfigTimeoutFallback | pub |
| 141 | fn | buildCodexPluginThreadConfig | pub |
| 384 | fn | mergeCodexThreadConfigs | pub |
| 398 | fn | isCodexPluginThreadBindingStale | pub |
| 420 | fn | emptyPluginThreadConfig | (private) |
| 441 | fn | buildDisabledAppsConfigPatch | (private) |
| 453 | fn | buildEnabledAppConfig | (private) |
| 467 | fn | buildCodexPluginAppsConfigPatchFromPolicyContext | pub |
| 491 | fn | buildPluginAppPolicyContext | (private) |
| 502 | fn | clearPersistedAppToolApprovalOverrides | (private) |
| 542 | fn | readPersistedAppToolApprovalOverrideNames | (private) |
| 568 | fn | hasPersistedToolApprovalOverride | (private) |
| 574 | fn | isOverriddenConfigWriteResponse | (private) |
| 578 | fn | quoteConfigKeyPathSegment | (private) |
| 582 | fn | shouldWaitForInitialAppInventory | (private) |
| 594 | fn | shouldRefreshMissingAppInventory | (private) |
| 606 | fn | refreshAppInventoryNow | (private) |
| 637 | fn | collectInventoryOwnedAppIds | (private) |
| 643 | fn | emptyCodexPluginInventory | (private) |
| 651 | fn | readAccessibleAccountApps | (private) |
| 681 | fn | toOwnedAccountApp | (private) |
| 691 | fn | resolveThreadConfigAppsForRecord | (private) |
| 701 | fn | isPluginAppReadyForThreadStart | (private) |
| 708 | fn | shouldForceRefreshForNotReadyPluginApps | (private) |
| 727 | fn | policyFingerprint | (private) |
| 744 | fn | mergeJsonObjects | (private) |
| 756 | fn | isPlainJsonObject | (private) |
| 760 | fn | fingerprintJson | (private) |
| 764 | fn | stableStringify | (private) |

## extensions/codex/src/app-server/protocol.ts (803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 2 | type | JsonValue | pub |
| 3 | type | JsonObject | pub |
| 4 | type | CodexServiceTier | pub |
| 5 | type | CodexApprovalPolicy | pub |
| 18 | type | CodexApprovalsReviewer | (private) |
| 19 | type | CodexSandboxMode | (private) |
| 20 | type | CodexPersonality | (private) |
| 22 | type | CodexAppServerRequestMethod | pub |
| 33 | type | RpcRequest | pub |
| 39 | type | RpcResponse | pub |
| 49 | type | RpcMessage | pub |
| 51 | type | CodexInitializeParams | pub |
| 60 | type | CodexInitializeResponse | pub |
| 72 | type | CodexUserInput | pub |
| 90 | type | CodexDynamicToolFunctionSpec | pub |
| 98 | type | CodexDynamicToolNamespaceTool | (private) |
| 103 | type | CodexDynamicToolNamespaceSpec | (private) |
| 110 | type | CodexDynamicToolSpec | pub |
| 112 | fn | flattenCodexDynamicToolFunctions | pub |
| 118 | type | CodexTurnEnvironmentParams | pub |
| 123 | type | CodexThreadStartParams | pub |
| 140 | type | CodexThreadResumeParams | pub |
| 159 | type | CodexThreadStartResponse | pub |
| 165 | type | CodexThreadForkParams | pub |
| 187 | type | CodexThreadForkResponse | pub |
| 192 | type | CodexThreadSourceKind | (private) |
| 203 | type | CodexThreadListParams | pub |
| 218 | type | CodexThreadListResponse | pub |
| 224 | type | CodexThreadReadParams | (private) |
| 229 | type | CodexThreadReadResponse | (private) |
| 233 | type | CodexThreadTurnsListParams | pub |
| 241 | type | CodexThreadTurnsListResponse | pub |
| 247 | type | CodexInitialTurnsPage | (private) |
| 251 | type | CodexThreadSetNameParams | (private) |
| 256 | type | CodexThreadArchiveParams | (private) |
| 260 | type | CodexThreadUnarchiveResponse | (private) |
| 264 | type | CodexThreadResumeResponse | pub |
| 271 | type | CodexThreadGoalStatus | (private) |
| 279 | type | CodexThreadGoal | (private) |
| 290 | type | CodexThreadGoalSetParams | (private) |
| 297 | type | CodexThreadGoalGetParams | (private) |
| 298 | type | CodexThreadGoalClearParams | (private) |
| 299 | type | CodexThreadGoalSetResponse | (private) |
| 300 | type | CodexThreadGoalGetResponse | (private) |
| 301 | type | CodexThreadGoalClearResponse | (private) |
| 303 | type | CodexThreadInjectItemsParams | (private) |
| 308 | type | CodexThreadUnsubscribeParams | (private) |
| 312 | type | CodexTurnInterruptParams | (private) |
| 317 | type | CodexTurnStartParams | pub |
| 339 | type | CodexSandboxPolicy | pub |
| 351 | type | CodexTurnStartResponse | pub |
| 355 | type | CodexTurn | pub |
| 366 | type | CodexThread | pub |
| 385 | type | CodexThreadStatus | pub |
| 391 | type | CodexSubAgentThreadSpawnSource | pub |
| 399 | type | CodexSubAgentSource | (private) |
| 406 | type | CodexSessionSource | pub |
| 415 | type | CodexThreadStartedNotification | pub |
| 419 | type | CodexThreadStatusChangedNotification | pub |
| 424 | type | CodexThreadItem | pub |
| 447 | type | CodexServerNotification | pub |
| 452 | type | CodexDynamicToolCallParams | pub |
| 461 | type | CodexDynamicToolCallResponse | pub |
| 471 | type | CodexDynamicToolDiagnosticTerminalType | pub |
| 472 | type | CodexDynamicToolDiagnosticTerminalReason | pub |
| 474 | type | CodexDynamicToolCallOutputContentItem | pub |
| 488 | type | CodexErrorNotification | pub |
| 500 | type | CodexTurnCompletedNotification | pub |
| 504 | type | CodexModel | pub |
| 516 | type | CodexReasoningEffortOption | pub |
| 520 | type | CodexModelListResponse | pub |
| 525 | type | CodexGetAccountResponse | pub |
| 530 | type | CodexModelProviderCapabilitiesReadResponse | (private) |
| 536 | type | CodexChatgptAuthTokensRefreshResponse | pub |
| 542 | type | CodexLoginAccountParams | pub |
| 554 | type | CodexPluginSummary | (private) |
| 567 | type | CodexAppSummary | (private) |
| 575 | type | CodexPluginDetail | pub |
| 585 | type | CodexPluginMarketplaceEntry | (private) |
| 592 | type | CodexPluginListResponse | pub |
| 598 | type | CodexPluginReadResponse | pub |
| 602 | type | CodexPluginListMarketplaceKind | (private) |
| 609 | type | CodexPluginListParams | (private) |
| 614 | type | CodexPluginReadParams | (private) |
| 620 | type | CodexPluginInstallParams | (private) |
| 622 | type | CodexPluginInstallResponse | (private) |
| 627 | type | CodexAppInfo | (private) |
| 643 | type | CodexAppsListParams | (private) |
| 649 | type | CodexAppsListResponse | (private) |
| 654 | type | CodexSkillsListParams | (private) |
| 659 | type | CodexSkillScope | (private) |
| 661 | type | CodexSkillMetadata | (private) |
| 672 | type | CodexSkillErrorInfo | (private) |
| 677 | type | CodexSkillsListEntry | (private) |
| 683 | type | CodexSkillsListResponse | (private) |
| 687 | type | CodexHooksListParams | (private) |
| 691 | type | CodexHooksListResponse | (private) |
| 696 | type | CodexMcpServerStatus | pub |
| 701 | type | CodexListMcpServerStatusResponse | pub |
| 706 | type | CodexConfigReadResponse | pub |
| 711 | type | CodexConfigRequirementsReadResponse | pub |
| 715 | type | CodexRequestObject | pub |
| 718 | type | AppInfo | pub |
| 719 | type | AppSummary | pub |
| 720 | type | AppsListParams | pub |
| 721 | type | AppsListResponse | pub |
| 722 | type | HooksListParams | pub |
| 723 | type | HooksListResponse | pub |
| 724 | type | PluginDetail | pub |
| 725 | type | PluginInstallParams | pub |
| 726 | type | PluginInstallResponse | pub |
| 727 | type | PluginListParams | pub |
| 728 | type | PluginListResponse | pub |
| 729 | type | PluginMarketplaceEntry | pub |
| 730 | type | PluginReadParams | pub |
| 731 | type | PluginReadResponse | pub |
| 732 | type | PluginSummary | pub |
| 733 | type | SkillsListParams | pub |
| 734 | type | SkillsListResponse | pub |
| 737 | type | CodexAppServerRequestParamsOverride | (private) |
| 755 | type | CodexAppServerRequestResultMap | (private) |
| 797 | fn | isJsonObject | pub |
| 801 | fn | isRpcResponse | pub |

## extensions/codex/src/app-server/rate-limits.ts (789 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | LimitWindowKey | (private) |
| 34 | type | RateLimitReset | (private) |
| 40 | type | RateLimitWindowEntry | (private) |
| 46 | type | CodexAccountUsageSummary | pub |
| 57 | fn | formatCodexUsageLimitErrorMessage | pub |
| 108 | fn | shouldRefreshCodexRateLimitsForUsageLimitMessage | pub |
| 120 | fn | summarizeCodexRateLimits | pub |
| 136 | fn | hasCodexRateLimitSnapshots | pub |
| 141 | fn | summarizeCodexAccountRateLimits | pub |
| 163 | fn | resolveCodexUsageLimitResetAtMs | pub |
| 171 | fn | summarizeCodexAccountUsage | pub |
| 214 | fn | buildCodexAppServerUsageSnapshot | pub |
| 228 | fn | isCodexUsageLimitError | (private) |
| 241 | fn | selectNextRateLimitReset | (private) |
| 259 | fn | selectBlockingRateLimitReset | (private) |
| 270 | fn | summarizeRateLimitSnapshot | (private) |
| 288 | fn | collectCodexRateLimitSnapshots | (private) |
| 295 | fn | collectRateLimitSnapshots | (private) |
| 331 | fn | sortedRateLimitKeys | (private) |
| 343 | fn | addRateLimitSnapshot | (private) |
| 361 | fn | isRateLimitSnapshot | (private) |
| 374 | fn | readRateLimitWindow | (private) |
| 398 | fn | snapshotHasDisplayableData | (private) |
| 410 | fn | readOptionalNumberField | (private) |
| 423 | fn | formatRateLimitWindow | (private) |
| 427 | fn | formatRateLimitWindowDetails | (private) |
| 437 | fn | formatLimitLabel | (private) |
| 449 | fn | formatReachedType | (private) |
| 453 | fn | formatResetTime | (private) |
| 460 | fn | formatAccountResetTime | (private) |
| 466 | fn | snapshotHasLimitBlock | (private) |
| 476 | fn | isCodexLimitSnapshot | (private) |
| 481 | fn | selectCodexProviderUsageSnapshot | (private) |
| 486 | fn | readProviderUsageWindow | (private) |
| 501 | fn | formatProviderUsageWindowLabel | (private) |
| 524 | fn | resolveCodexProviderUsagePlan | (private) |
| 534 | fn | formatCodexCreditSummary | (private) |
| 556 | fn | selectSnapshotBlockingReset | (private) |
| 574 | fn | selectBlockingWindowEntry | (private) |
| 601 | fn | readWindowEntries | (private) |
| 608 | fn | formatBlockingLimitPeriod | (private) |
| 628 | fn | formatUsageLine | (private) |
| 643 | fn | formatUsageWindowLabel | (private) |
| 668 | fn | hasWeeklySecondaryResetCadence | (private) |
| 685 | fn | formatCalendarResetTime | (private) |
| 708 | fn | formatRelativeDuration | (private) |
| 725 | fn | formatResetDuration | (private) |
| 744 | fn | formatWindowSignature | (private) |
| 753 | fn | extractCodexRetryHint | (private) |
| 767 | fn | readString | (private) |
| 772 | fn | readNullableString | (private) |
| 776 | fn | readNumber | (private) |
| 780 | fn | readBoolean | (private) |
| 785 | fn | normalizeText | (private) |

## extensions/codex/src/app-server/run-attempt-finalize.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | finalizeCodexAttempt | pub |
| 151 | fn | isFinalAborted | (private) |

## extensions/codex/src/app-server/run-attempt-test-harness.ts (645 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | RunCodexAppServerAttemptOptions | (private) |
| 60 | fn | queueActiveRunMessageForTest | pub |
| 66 | fn | setCodexAppServerClientFactoryForTest | pub |
| 84 | fn | multiplexTestClientHandlers | (private) |
| 119 | fn | resetCodexAppServerClientFactoryForTest | (private) |
| 123 | fn | runCodexAppServerAttempt | pub |
| 152 | fn | drainActiveAppServerAttemptsForTest | (private) |
| 190 | fn | createParams | pub |
| 217 | fn | createCodexRuntimePlanFixture | pub |
| 238 | fn | assistantMessage | pub |
| 258 | fn | userMessage | pub |
| 266 | fn | mockCall | pub |
| 274 | fn | getMockServerVersion | (private) |
| 278 | fn | getMockRuntimeIdentity | pub |
| 282 | fn | mockClientRuntimeMethods | pub |
| 290 | fn | threadStartResult | pub |
| 325 | fn | turnStartResult | pub |
| 339 | fn | rateLimitsUpdated | pub |
| 356 | type | AppServerRequestHandler | (private) |
| 362 | fn | createAppServerHarness | pub |
| 412 | fn | waitForServerRequestHandler | (private) |
| 428 | fn | waitForNotificationHandler | (private) |
| 434 | fn | dispatchNotification | (private) |
| 439 | fn | sendNotification | (private) |
| 496 | fn | createStartedThreadHarness | pub |
| 525 | fn | createResumeHarness | pub |
| 539 | fn | extractRelayIdFromThreadRequest | pub |
| 548 | fn | extractGenerationFromThreadRequest | pub |
| 557 | fn | extractNativeHookRelayCommandFromThreadRequest | (private) |
| 586 | type | RuntimeDynamicToolForTest | (private) |
| 590 | fn | createRuntimeDynamicTool | pub |
| 607 | fn | setupRunAttemptTestHooks | pub |

## extensions/codex/src/app-server/run-attempt.context-engine.test.ts (2094 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | RunCodexAppServerAttemptOptions | (private) |
| 46 | fn | setCodexAppServerClientFactoryForTest | (private) |
| 50 | fn | resetCodexAppServerClientFactoryForTest | (private) |
| 54 | fn | runCodexAppServerAttempt | (private) |
| 70 | fn | createParams | (private) |
| 91 | fn | createSqliteParams | (private) |
| 121 | fn | writeCodexAppServerBinding | (private) |
| 133 | fn | assistantMessage | (private) |
| 153 | fn | userMessage | (private) |
| 161 | fn | toolResultMessage | (private) |
| 178 | fn | threadStartResult | (private) |
| 213 | fn | turnStartResult | (private) |
| 227 | fn | getMockServerVersion | (private) |
| 231 | fn | getMockRuntimeIdentity | (private) |
| 235 | fn | mockClientRuntimeMethods | (private) |
| 243 | fn | createStartedThreadHarness | (private) |
| 250 | fn | notify | (private) |
| 314 | fn | createContextEngine | (private) |
| 339 | type | MockCallReader | (private) |
| 341 | fn | requireRecord | (private) |
| 348 | fn | optionalString | (private) |
| 352 | fn | requireFirstCallArg | (private) |
| 360 | fn | requireRequestParams | (private) |
| 368 | fn | requireArray | (private) |
| 375 | fn | expectRequestInputTextContains | (private) |
| 382 | fn | getRequestInputText | (private) |
| 386 | fn | getRequestInputTextAt | (private) |
| 2081 | fn | toLintErrorObject | (private) |

## extensions/codex/src/app-server/run-attempt.dynamic-tools.test.ts (691 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | flushDiagnosticEvents | (private) |
| 38 | fn | activeDiagnosticToolKeys | (private) |

## extensions/codex/src/app-server/run-attempt.hooks.test.ts (1051 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | ReplyBackend | (private) |
| 46 | fn | flushDiagnosticEvents | (private) |

## extensions/codex/src/app-server/run-attempt.native-hook-relay.test.ts (908 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | writeCodexAppServerBinding | (private) |

## extensions/codex/src/app-server/run-attempt.steering.test.ts (529 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | createSteeringParams | (private) |
| 95 | fn | waitAndQueueActiveRunMessage | (private) |

## extensions/codex/src/app-server/run-attempt.test.ts (6629 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | CodexAppServerToolTelemetry | (private) |
| 136 | fn | startOrResumeThread | (private) |
| 147 | fn | flushDiagnosticEvents | (private) |
| 151 | fn | openSocket | (private) |
| 158 | fn | rejectBeforeOpen | (private) |
| 173 | fn | expectResumeRequest | (private) |
| 192 | fn | writeExistingBinding | (private) |
| 217 | fn | attachSqliteSessionTarget | (private) |
| 232 | fn | readTranscriptMessagesByIdentity | (private) |
| 254 | fn | createThreadLifecycleAppServerOptions | (private) |
| 276 | fn | createMessageDynamicTool | (private) |
| 298 | fn | createNamedDynamicTool | (private) |
| 313 | fn | setAgentWorkspaceForTest | (private) |
| 326 | fn | buildDynamicToolsForTest | (private) |
| 356 | fn | buildCodexTurnContextForTest | (private) |
| 420 | fn | createCodexToolBridgeForTest | (private) |
| 435 | fn | startThreadWithDisabledNativeSurfaceForTest | (private) |
| 505 | type | RuntimeDynamicToolForTest | (private) |
| 509 | fn | flattenSpecsWithNamespace | (private) |
| 519 | fn | specNames | (private) |
| 523 | fn | createRuntimeDynamicTool | (private) |
| 540 | fn | registerMemoryPromptForTest | (private) |
| 571 | fn | buildEmptyCodexToolTelemetry | (private) |
| 1724 | fn | createRunParams | (private) |
| 1878 | fn | createRunParams | (private) |
| 2308 | fn | wrappedPluginSystemContext | (private) |
| 2421 | type | HookInputForTest | (private) |
| 3954 | fn | onUnhandledRejection | (private) |
| 6337 | fn | notifyCommand | (private) |

## extensions/codex/src/app-server/run-attempt.turn-watches.test.ts (5436 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | writeCodexAppServerBinding | (private) |
| 75 | fn | itemNotification | (private) |
| 89 | fn | completedAssistant | (private) |
| 98 | fn | finalizationHookNotification | (private) |
| 125 | fn | startedCommand | (private) |
| 134 | fn | completedCommand | (private) |
| 143 | fn | runTurnWatchTimeoutScenario | (private) |
| 161 | fn | runClientCloseScenario | (private) |

## extensions/codex/src/app-server/runtime-artifact.ts (836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | CodexRuntimeArtifactSpawnIdentity | (private) |
| 47 | type | CodexRuntimeFilesystemDescriptor | (private) |
| 61 | type | CodexRuntimeArtifactDescriptor | (private) |
| 67 | type | CodexAppServerRuntimeArtifactCapture | pub |
| 72 | type | StableBigIntFileStat | (private) |
| 81 | type | ArtifactHashBudget | (private) |
| 86 | fn | getRuntimeArtifactBindings | (private) |
| 97 | fn | throwIfAborted | (private) |
| 106 | fn | compareArtifactNames | (private) |
| 110 | fn | normalizeRelativePath | (private) |
| 114 | fn | sameOpenedFile | (private) |
| 125 | fn | readRegularFileFingerprint | (private) |
| 180 | fn | listPackageFiles | (private) |
| 215 | fn | pathIsWithin | (private) |
| 223 | fn | assertNoRuntimeInjectionEnvironment | (private) |
| 243 | fn | isSafeNodeOptions | (private) |
| 286 | fn | hashSelectedArtifactFiles | (private) |
| 362 | fn | resolveCommandPath | (private) |
| 402 | fn | readShebang | (private) |
| 421 | fn | resolvePosixInvocationPaths | (private) |
| 456 | fn | resolvePackageRoot | (private) |
| 475 | fn | resolveOptionalRegularFile | (private) |
| 485 | fn | isMissingPathError | (private) |
| 489 | fn | readEffectiveSpawnEnvironmentValue | (private) |
| 502 | fn | captureFilesystemDescriptor | (private) |
| 596 | fn | isBoundedPath | (private) |
| 605 | fn | validateFilesystemDescriptorShape | (private) |
| 663 | fn | validateArtifactDescriptorShape | (private) |
| 681 | fn | encodeArtifactId | (private) |
| 685 | fn | decodeArtifactId | (private) |
| 723 | fn | fingerprintBinding | (private) |
| 736 | fn | captureCodexAppServerRuntimeArtifactBeforeStart | pub |
| 747 | fn | finalizeCodexAppServerRuntimeArtifact | pub |
| 783 | fn | validateCodexAppServerRuntimeArtifactCapture | pub |
| 804 | fn | bindCodexAppServerRuntimeArtifact | pub |
| 817 | fn | readCodexAppServerClientRuntimeArtifact | pub |
| 824 | fn | validateCodexAppServerRuntimeArtifact | pub |

## extensions/codex/src/app-server/sandbox-exec-server.fs.test.ts (526 lines)

_No symbols extracted._

## extensions/codex/src/app-server/sandbox-exec-server.test.ts (579 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | testExecEnv | (private) |
| 32 | fn | echoFirstInputLineScript | (private) |

## extensions/codex/src/app-server/session-binding.test.ts (1428 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createStateStore | (private) |

## extensions/codex/src/app-server/session-binding.ts (1444 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | ProviderAuthAliasLookupParams | (private) |
| 45 | type | ProviderAuthAliasConfig | (private) |
| 48 | type | CodexAppServerAuthProfileLookup | pub |
| 56 | type | CodexAppServerBindingIdentity | pub |
| 61 | fn | sessionBindingIdentity | pub |
| 78 | fn | createCodexSessionGenerationSupersededError | pub |
| 296 | type | CodexAppServerThreadBinding | pub |
| 298 | type | CodexAppServerPendingSupervisionBranch | pub |
| 300 | class | CodexSupervisionBindingReplacementError | pub |
| 310 | fn | assertCodexBindingMayBeReplaced | pub |
| 319 | type | CodexAppServerContextEngineBinding | pub |
| 321 | type | CodexAppServerContextEngineProjectionBinding | pub |
| 325 | type | CodexAppServerBindingMutation | (private) |
| 358 | type | CodexSessionGenerationAdoptionResult | pub |
| 360 | type | CodexSessionGenerationRetirementResult | pub |
| 362 | type | CodexSessionGenerationReclaimPlan | pub |
| 395 | type | StoredCodexAppServerBinding | pub |
| 397 | fn | hashCodexAppServerBindingFingerprint | pub |
| 401 | fn | normalizeLegacyBindingFingerprint | (private) |
| 413 | fn | normalizeLegacyBindingFingerprints | (private) |
| 433 | fn | normalizeStoredCodexAppServerBindingFingerprints | pub |
| 449 | fn | createStoredCodexAppServerBinding | pub |
| 495 | type | BindingStateStore | (private) |
| 500 | type | BindingLeaseOwner | (private) |
| 505 | fn | bindingLeaseLostError | (private) |
| 509 | type | CodexAppServerBindingStore | pub |
| 534 | fn | reclaimCurrentCodexSessionGeneration | pub |
| 574 | fn | createCodexAppServerBindingStore | pub |
| 1050 | fn | removeOwnedLease | (private) |
| 1094 | fn | matchesPendingSupervisionBranch | (private) |
| 1117 | fn | isSameSupervisionOwner | (private) |
| 1128 | fn | matchesPendingSupervisionClear | (private) |
| 1145 | fn | bindingStoreKey | pub |
| 1170 | fn | readStoredCodexAppServerBinding | pub |
| 1179 | fn | storedSessionGeneration | (private) |
| 1189 | fn | preservedSessionGeneration | (private) |
| 1199 | fn | ownsStoredSessionGeneration | (private) |
| 1208 | fn | validateBindingForWrite | (private) |
| 1219 | fn | readCodexAppServerThreadBinding | pub |
| 1229 | fn | stripUndefinedBinding | (private) |
| 1233 | fn | stripUndefinedValue | (private) |
| 1247 | fn | asRecord | (private) |
| 1253 | fn | readTimestamp | (private) |
| 1257 | fn | readPluginAppPolicyContext | (private) |
| 1347 | fn | readDestructiveApprovalMode | (private) |
| 1369 | fn | sleep | (private) |
| 1376 | fn | isCodexAppServerNativeAuthProfile | pub |
| 1415 | fn | normalizeCodexAppServerBindingModelProvider | pub |
| 1436 | fn | resolveCodexAppServerBindingModelProvider | pub |

## extensions/codex/src/app-server/shared-client.test.ts (1961 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 105 | fn | sendInitializeResult | (private) |
| 114 | fn | sendEmptyModelList | (private) |
| 120 | fn | firstMockArg | (private) |
| 128 | fn | bridgeStartOptionsCall | (private) |
| 141 | fn | applyAuthProfileCall | (private) |
| 153 | fn | resolveAuthProfileCall | (private) |
| 162 | fn | managedStartOptionsCall | (private) |
| 170 | fn | clientStartCall | (private) |
| 177 | fn | deferNextAuthProfileApplication | (private) |
| 1952 | fn | rawDataToText | (private) |

## extensions/codex/src/app-server/shared-client.ts (1280 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | SharedCodexAppServerClientEntry | (private) |
| 53 | type | SharedCodexAppServerClientStartup | (private) |
| 58 | type | SharedCodexAppServerClientState | (private) |
| 63 | type | CodexAppServerClientStartMetadata | (private) |
| 71 | type | CodexAppServerClientProcessIdentity | (private) |
| 82 | type | CodexAppServerSpawnIdentity | (private) |
| 100 | fn | getSharedCodexAppServerClientState | (private) |
| 111 | fn | getCodexAppServerClientStartMetadata | (private) |
| 126 | fn | readCodexAppServerClientProcessIdentity | pub |
| 143 | fn | resolveCodexAppServerSpawnIdentity | pub |
| 163 | class | CodexAppServerStartSelectionChangedError | (private) |
| 173 | fn | isCodexAppServerStartSelectionChangedError | pub |
| 188 | fn | assertCodexAppServerClientStartSelectionCurrent | pub |
| 213 | fn | resolveCodexNativeConfigFenceKey | pub |
| 239 | type | CodexAppServerClientOptions | pub |
| 259 | type | CodexAppServerClientFactory | pub |
| 263 | type | ResolvedCodexAppServerClientStartContext | (private) |
| 274 | fn | inferAuthRequirement | (private) |
| 283 | fn | resolveCodexAppServerClientStartContext | (private) |
| 392 | fn | getSharedCodexAppServerClient | pub |
| 399 | fn | getLeasedSharedCodexAppServerClient | pub |
| 411 | fn | releaseLeasedSharedCodexAppServerClient | pub |
| 429 | type | CodexAppServerClientLease | pub |
| 432 | fn | releaseCodexAppServerClientLease | pub |
| 439 | fn | withLeasedCodexAppServerClientStartSelectionRetry | pub |
| 456 | fn | requestOptions | (private) |
| 502 | fn | acquireSharedCodexAppServerClient | (private) |
| 505 | fn | acquireSharedCodexAppServerClient | (private) |
| 509 | fn | acquireSharedCodexAppServerClient | (private) |
| 575 | fn | stopStartedClientNotifications | (private) |
| 582 | fn | abandon | (private) |
| 653 | fn | withCodexAppServerAcquireDeadline | (private) |
| 672 | fn | onAbort | (private) |
| 679 | fn | resolveRemainingAcquireTimeout | (private) |
| 690 | fn | createSharedCodexAppServerClientStartup | (private) |
| 747 | fn | createIsolatedCodexAppServerClient | pub |
| 790 | fn | startInitializedCodexAppServerClient | (private) |
| 943 | fn | resolveManagedFallbackStartOptions | (private) |
| 964 | fn | shouldTryManagedFallbackStartOption | (private) |
| 978 | fn | resetSharedCodexAppServerClientForTests | pub |
| 989 | fn | clearSharedCodexAppServerClient | pub |
| 999 | fn | clearSharedCodexAppServerClientIfCurrent | pub |
| 1017 | fn | detachSharedCodexAppServerClientIfCurrent | pub |
| 1034 | fn | retainSharedCodexAppServerClientIfCurrent | pub |
| 1058 | fn | retireSharedCodexAppServerClientIfCurrent | pub |
| 1098 | fn | clearSharedCodexAppServerClientIfCurrentAndWait | pub |
| 1120 | fn | clearSharedCodexAppServerClientAndWait | pub |
| 1136 | fn | getOrCreateSharedClientEntry | (private) |
| 1153 | fn | clearSharedClientEntryIfCurrent | (private) |
| 1162 | fn | clearSharedCodexAppServerClientIfCurrentAndUnclaimed | pub |
| 1182 | fn | retainPendingSharedClientAcquire | (private) |
| 1195 | fn | retainSharedClientEntry | (private) |
| 1208 | fn | closeRetiredSharedClientEntryIfIdle | (private) |
| 1224 | fn | closeRetiredSharedClientEntry | (private) |
| 1234 | fn | closeSharedClientEntryIfUnclaimed | (private) |
| 1250 | fn | retirePendingSharedClientEntryIfUnclaimed | (private) |
| 1271 | fn | collectSharedClients | (private) |

## extensions/codex/src/app-server/side-question.test.ts (3116 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | SelectionRetryParams | (private) |
| 50 | fn | supervisionConnectionFingerprint | (private) |
| 104 | fn | runCodexAppServerSideQuestion | (private) |
| 111 | type | ServerRequest | (private) |
| 114 | type | ClientRequest | (private) |
| 120 | type | FakeClient | (private) |
| 130 | fn | createFakeClient | (private) |
| 192 | fn | mockCall | (private) |
| 200 | fn | flushDiagnosticEvents | (private) |
| 206 | fn | activeDiagnosticToolKeys | (private) |
| 226 | fn | extractRelayIdFromThreadConfig | (private) |
| 256 | fn | codexHookCommand | (private) |
| 268 | fn | codexHookStateForEvent | (private) |
| 275 | fn | threadResult | (private) |
| 306 | fn | turnStartResult | (private) |
| 321 | fn | agentDelta | (private) |
| 328 | fn | turnCompleted | (private) |
| 347 | fn | nativeCommandItem | (private) |
| 367 | fn | sideParams | (private) |
| 430 | fn | platformPreparedRuntimeAuth | (private) |
| 456 | fn | runSideQuestionWithManagedWebSearchCall | (private) |
| 2558 | type | ToolExecutionEvent | (private) |

## extensions/codex/src/app-server/side-question.ts (1337 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 118 | class | CodexSideQuestionTimeoutError | (private) |
| 151 | fn | runCodexAppServerSideQuestion | pub |
| 311 | fn | emitNativePreToolUseFailure | (private) |
| 326 | fn | flushPendingNativePreToolUseFailures | (private) |
| 331 | fn | activateNativePreToolUseFailureFallback | (private) |
| 340 | fn | handleNotification | (private) |
| 357 | fn | abortFromUpstream | (private) |
| 430 | fn | registerRequestHandler | (private) |
| 522 | fn | rebindClientHandlers | (private) |
| 767 | fn | resolveCodexSideNativeHookRelayEvents | (private) |
| 779 | fn | registerCodexSideNativeHookRelay | (private) |
| 824 | fn | resolveCodexSideNativeHookRelayTtlMs | (private) |
| 839 | fn | buildSideRunAttemptParams | (private) |
| 903 | fn | createCodexSideToolBridge | (private) |
| 1056 | fn | emptySideUserInputResponse | (private) |
| 1060 | fn | isSideUserInputRequest | (private) |
| 1068 | fn | forkCodexSideThread | (private) |
| 1086 | fn | isMissingCodexParentThreadError | (private) |
| 1094 | fn | sideBoundaryPromptItem | (private) |
| 1107 | fn | cleanupCodexSideThread | (private) |
| 1141 | class | CodexSideQuestionCollector | (private) |
| 1209 | fn | cleanup | (private) |
| 1216 | fn | abort | (private) |
| 1301 | fn | collectAssistantText | (private) |
| 1309 | fn | isNotificationForTurn | (private) |
| 1315 | fn | readNotificationTurnId | (private) |
| 1319 | fn | readString | (private) |
| 1324 | fn | formatCodexErrorMessage | (private) |

## extensions/codex/src/app-server/startup-binding.test.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | rotateOversizedCodexAppServerStartupBinding | (private) |
| 35 | fn | writeExistingBinding | (private) |
| 49 | fn | writeSessionRecord | (private) |

## extensions/codex/src/app-server/thread-lifecycle-io.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ThreadRequestContext | (private) |
| 72 | type | ResumeThreadContext | (private) |
| 77 | type | StartThreadContext | (private) |
| 83 | fn | resumeExistingCodexThread | pub |
| 328 | fn | startFreshCodexThread | pub |

## extensions/codex/src/app-server/thread-lifecycle-run.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | fn | startOrResumeThread | pub |
| 160 | fn | normalizeBindingModelProvider | (private) |
| 171 | fn | throwIfAborted | (private) |
| 274 | fn | clearCurrentBinding | (private) |

## extensions/codex/src/app-server/thread-lifecycle.binding.test.ts (2947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | startOrResumeThread | (private) |
| 34 | fn | createThreadLifecycleAppServerOptions | (private) |
| 56 | fn | createNetworkProxyThreadLifecycleAppServerOptions | (private) |
| 88 | fn | createParams | (private) |
| 108 | fn | writeCodexAppServerBinding | (private) |
| 117 | fn | createMessageDynamicTool | (private) |
| 139 | fn | createNamedDynamicTool | (private) |
| 152 | fn | createDeferredNamedDynamicTool | (private) |
| 163 | fn | createPluginAppConfigPatch | (private) |
| 182 | fn | createPluginAppPolicyContext | (private) |
| 200 | fn | createTwoPluginAppConfigPatch | (private) |
| 214 | fn | createTwoPluginAppPolicyContext | (private) |
| 234 | fn | createTwoCalendarAppConfigPatch | (private) |
| 248 | fn | createTwoCalendarAppPolicyContext | (private) |

## extensions/codex/src/app-server/thread-lifecycle.test.ts (3196 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | CodexThreadLifecycleTimingLogger | (private) |
| 120 | fn | startOrResumeThread | (private) |
| 128 | fn | createAttemptParams | (private) |
| 183 | fn | createAppServerOptions | (private) |
| 191 | fn | createNetworkProxyAppServerOptions | (private) |
| 224 | fn | createThreadLifecycleParams | (private) |
| 247 | fn | createThreadLifecycleAppServerOptions | (private) |
| 269 | fn | seedAdoptedThreadBinding | (private) |
| 305 | fn | seedPendingSupervisionBinding | (private) |
| 342 | fn | threadStartResult | (private) |
| 377 | fn | nativeThreadResult | (private) |
| 387 | fn | sourceThread | (private) |
| 399 | fn | createTimingLogger | (private) |
| 407 | fn | expectSingleLogMessage | (private) |

## extensions/codex/src/app-server/thread-lifecycle.user-mcp-servers.test.ts (767 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | startOrResumeThread | (private) |
| 25 | fn | threadStartResult | (private) |
| 60 | fn | threadResumeResult | (private) |
| 64 | fn | createAppServerOptions | (private) |
| 82 | fn | createParams | (private) |
| 230 | fn | run | (private) |
| 617 | fn | createConfig | (private) |

## extensions/codex/src/app-server/thread-requests.ts (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 124 | fn | buildThreadStartParams | pub |
| 195 | fn | buildThreadResumeParams | pub |
| 272 | fn | buildCodexRuntimeThreadConfig | pub |
| 325 | fn | ensureDirectOnlyToolNamespaces | (private) |
| 342 | fn | resolveDirectOnlyToolNamespaces | (private) |
| 353 | fn | buildCodexRuntimeThreadConfigForRun | pub |
| 416 | fn | buildCodexRingZeroThreadConfigPatch | pub |
| 436 | fn | readCodexInheritedMcpServerNames | pub |
| 479 | fn | assertCodexRingZeroHasNoManagedHooks | pub |
| 528 | fn | attestCodexRingZeroThreadHasNoMcpServers | pub |
| 552 | fn | hasNonEmptyJsonValue | (private) |
| 565 | fn | resolveCodexThreadApprovalsReviewer | pub |
| 572 | fn | codexThreadSandboxOrPermissions | pub |
| 581 | fn | resolveCodexThreadEnvironmentSelection | (private) |

## extensions/codex/src/app-server/thread-supervision.ts (644 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | PendingSupervisionMaterializationParams | (private) |
| 78 | fn | materializePendingSupervisionBranch | pub |
| 358 | fn | buildPendingSupervisionProbeForkParams | (private) |
| 389 | fn | assertPendingSupervisionSnapshotUnchanged | (private) |
| 403 | fn | requireNonBlankSupervisionValue | (private) |
| 410 | fn | requireNativeSupervisionModelProvider | (private) |
| 427 | fn | assertExactSupervisionModelSelection | (private) |
| 439 | fn | matchesPendingSupervisionState | (private) |
| 458 | fn | matchesMaterializedSupervisionBranch | (private) |
| 481 | fn | requireDistinctSupervisionThreadId | (private) |
| 504 | fn | readSupervisionResponseThreadId | (private) |
| 515 | fn | recoverPendingSupervisionArtifacts | (private) |
| 556 | fn | trackPendingSupervisionArtifacts | (private) |
| 587 | fn | withPendingSupervisionCleanup | (private) |
| 601 | fn | cleanPendingSupervisionArtifacts | (private) |
| 614 | fn | archiveSupervisionArtifact | (private) |

## extensions/codex/src/app-server/transcript-mirror.test.ts (1199 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | MirroredAgentMessage | (private) |
| 49 | fn | expectedFingerprint | (private) |
| 54 | fn | messageContent | (private) |
| 71 | fn | makeRoot | (private) |
| 108 | fn | readEventMessages | (private) |
| 128 | fn | createSqliteMirrorTarget | (private) |
| 153 | fn | readMirrorEvents | (private) |
| 162 | fn | readMirrorRaw | (private) |
| 171 | fn | readMirrorMessages | (private) |

## extensions/codex/src/app-server/transcript-mirror.ts (686 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | MirroredAgentMessage | (private) |
| 34 | type | MirroredUserMessage | (private) |
| 35 | type | CodexAppServerTranscriptMirrorResult | (private) |
| 58 | type | CodexThreadHistoryImportResult | (private) |
| 63 | type | BoundedCodexThreadHistoryProjection | (private) |
| 68 | type | ProjectedCodexHistoryMessage | (private) |
| 74 | fn | isUtf8ContinuationByte | (private) |
| 78 | fn | truncateUtf8Prefix | (private) |
| 90 | fn | normalizeImportedHistoryText | (private) |
| 106 | fn | projectCodexUserItemText | (private) |
| 137 | fn | selectTurnsThroughBoundary | (private) |
| 160 | fn | projectCodexThreadHistory | (private) |
| 242 | fn | selectBoundedCodexHistoryTail | (private) |
| 265 | fn | projectBoundedCodexThreadHistory | pub |
| 287 | fn | importCodexThreadHistoryToTranscript | pub |
| 322 | fn | attachCodexMirrorOrigin | (private) |
| 335 | fn | mirrorBestEffort | (private) |
| 382 | fn | resolveFinalCodexMirrorMessages | (private) |
| 411 | fn | createCodexAppServerUserMessagePersistenceNotifier | pub |
| 431 | fn | mirrorPromptAtTurnStartBestEffort | pub |
| 445 | fn | mirrorPromise | (private) |
| 480 | fn | fingerprintMirrorMessageContent | (private) |
| 485 | fn | buildMirrorDedupeIdentity | (private) |
| 493 | fn | mirror | (private) |
| 636 | fn | resolveCodexMirrorTranscriptTarget | (private) |
| 655 | fn | readTranscriptMirrorState | (private) |

## extensions/codex/src/app-server/turn-router.test.ts (989 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | ClientHarness | (private) |
| 10 | type | WireResponse | (private) |
| 28 | fn | createHarness | (private) |
| 971 | fn | waitForResponse | (private) |
| 985 | fn | settleInput | (private) |

## extensions/codex/src/app-server/turn-router.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | CodexAppServerServerRequest | pub |
| 22 | type | CodexThreadRouteScope | pub |
| 26 | type | CodexThreadRequestHandler | (private) |
| 30 | type | CodexThreadNotificationHandler | (private) |
| 34 | type | CodexThreadNotificationReceivedHandler | (private) |
| 39 | type | CodexThreadRouteHandlers | (private) |
| 45 | type | CodexThreadRouteReservation | pub |
| 57 | type | RouteOptions | (private) |
| 62 | type | CodexAppServerTurnRouter | pub |
| 71 | type | CodexNativeTurnCompletionWatch | (private) |
| 76 | type | Deferred | (private) |
| 77 | type | PendingNotification | (private) |
| 82 | type | Route | (private) |
| 99 | type | NativeTurnCompletionWatcher | (private) |
| 108 | fn | getCodexAppServerTurnRouter | pub |
| 120 | class | ClientTurnRouter | (private) |
| 157 | fn | release | (private) |
| 193 | fn | finish | (private) |
| 205 | fn | touch | (private) |
| 528 | fn | onAbort | (private) |
| 583 | fn | isCodexTerminalTurnNotification | (private) |
| 594 | fn | deferred | (private) |
| 602 | fn | abortReason | (private) |
| 608 | fn | readScope | (private) |
| 617 | fn | requireId | (private) |
