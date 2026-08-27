# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 11 large files in this module.

## src/agents/cli-runner/bundle-mcp-codex.user-config.test.ts (765 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | assertNoMachineTokenProjectionLeak | (private) |

## src/agents/cli-runner/claude-live-session.background-tasks.test.ts (876 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ProcessSupervisor | (private) |
| 30 | type | SupervisorSpawnFn | (private) |
| 49 | fn | buildPreparedCliRunContext | (private) |
| 104 | fn | getProcessSupervisorForTest | (private) |
| 114 | fn | installLiveStdoutDriver | (private) |
| 159 | fn | jsonl | (private) |
| 163 | fn | startLiveTurn | (private) |

## src/agents/cli-runner/claude-live-session.ts (1834 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ProcessSupervisor | (private) |
| 60 | type | ManagedRun | (private) |
| 61 | type | ClaudeLiveTurn | (private) |
| 95 | type | ClaudeLiveSession | (private) |
| 119 | type | ClaudeLiveSessionCreate | (private) |
| 123 | type | ClaudeLiveRunResult | (private) |
| 126 | type | ClaudeLiveOutputLimits | (private) |
| 127 | type | ClaudeLiveExecPermission | (private) |
| 132 | type | ClaudeLiveDiagnosticRefs | (private) |
| 138 | type | ClaudeLiveActiveTool | (private) |
| 144 | type | ClaudeLiveToolTerminalOutcome | (private) |
| 163 | fn | sha256 | (private) |
| 168 | fn | resetClaudeLiveSessionsForTest | (private) |
| 177 | fn | hasClaudeLiveSessionForOwner | pub |
| 182 | fn | getClaudeLiveSessionGenerationForOwner | pub |
| 189 | fn | waitForManagedRunExit | (private) |
| 210 | fn | closeClaudeLiveSessionForContext | pub |
| 223 | fn | rotateClaudeLiveMcpCaptureKeyForContext | pub |
| 230 | fn | shouldUseClaudeLiveSession | pub |
| 240 | fn | upsertArgValue | (private) |
| 257 | fn | appendArg | (private) |
| 261 | fn | stripLiveProcessArgs | (private) |
| 290 | fn | buildClaudeLiveArgs | (private) |
| 331 | type | ClaudeLiveSessionOwner | (private) |
| 340 | fn | buildClaudeLiveOwnerKey | (private) |
| 344 | fn | buildClaudeLiveKey | (private) |
| 355 | fn | buildClaudeLiveFingerprint | (private) |
| 440 | fn | createAbortError | (private) |
| 459 | fn | clearTurnTimers | (private) |
| 475 | fn | clearOutstandingBackgroundTasks | (private) |
| 479 | fn | finishTurn | (private) |
| 496 | fn | failTurn | (private) |
| 513 | fn | abortTurn | (private) |
| 521 | fn | cleanupLiveSession | (private) |
| 530 | fn | closeLiveSession | (private) |
| 558 | fn | scheduleIdleClose | (private) |
| 569 | fn | createTimeoutError | (private) |
| 585 | fn | createOutputLimitError | (private) |
| 594 | fn | diagnosticToolSourceForClaudeLiveTool | (private) |
| 598 | fn | claudeLiveDiagnosticBase | (private) |
| 607 | fn | emitClaudeLiveProgress | (private) |
| 615 | fn | summarizeClaudeLiveToolInput | (private) |
| 641 | fn | markClaudeLiveToolStarted | (private) |
| 665 | fn | markClaudeLiveToolCompleted | (private) |
| 720 | fn | markClaudeLiveToolDenied | (private) |
| 733 | fn | failActiveClaudeLiveTools | (private) |
| 773 | fn | noteClaudeLiveProgress | (private) |
| 793 | fn | armNoOutputTimer | (private) |
| 837 | fn | applyBackgroundTasksChanged | (private) |
| 863 | fn | isClaudeLiveProvisionalSyntheticPlaceholder | (private) |
| 883 | fn | isClaudeLiveSubstantiveAssistantProgress | (private) |
| 900 | fn | deferClaudeLiveSyntheticResult | (private) |
| 928 | fn | noteClaudeLiveContinuationAfterSyntheticPlaceholder | (private) |
| 944 | fn | resetNoOutputTimer | (private) |
| 953 | fn | parseSessionId | (private) |
| 963 | fn | readConfiguredExecPolicy | (private) |
| 982 | fn | resolveClaudeLiveExecPermission | (private) |
| 1001 | fn | parseClaudeLiveJsonLine | (private) |
| 1025 | fn | writeClaudeLiveControlResponse | (private) |
| 1033 | fn | handleClaudeLiveControlRequest | (private) |
| 1081 | fn | handleClaudeLiveLine | (private) |
| 1175 | fn | handleClaudeStdout | (private) |
| 1201 | fn | handleClaudeExit | (private) |
| 1263 | fn | createClaudeUserInputMessage | (private) |
| 1275 | fn | writeTurnInput | (private) |
| 1291 | fn | createClaudeLiveSession | (private) |
| 1384 | fn | createTurn | (private) |
| 1479 | fn | closeOldestIdleSession | (private) |
| 1489 | fn | ensureLiveSessionCapacity | (private) |
| 1508 | fn | createRequiredLiveSessionError | (private) |
| 1524 | fn | runClaudeLiveSessionTurn | pub |
| 1575 | fn | cleanup | (private) |
| 1627 | fn | notifyMcpCaptureReady | (private) |
| 1789 | fn | abort | (private) |

## src/agents/cli-runner/execute.supervisor-capture.test.ts (2367 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | ProcessSupervisor | (private) |
| 44 | type | SupervisorSpawnInput | (private) |
| 46 | fn | createDeferred | (private) |
| 60 | fn | recordMcpLoopbackToolCallResult | (private) |
| 90 | fn | buildPreparedCliRunContext | (private) |
| 140 | fn | requireSupervisorSpawnInput | (private) |
| 1017 | fn | emitToolStarts | (private) |
| 1033 | fn | recordOutcome | (private) |
| 1041 | fn | emitToolResults | (private) |

## src/agents/cli-runner/execute.ts (2218 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 130 | fn | appendCliOutputParseBuffer | (private) |
| 178 | fn | normalizeCliBackendThinkingLevel | (private) |
| 184 | fn | buildCliMcpCaptureKey | (private) |
| 192 | fn | setCliRunnerExecuteTestDeps | (private) |
| 196 | fn | buildCliLogArgs | (private) |
| 261 | fn | parseCliBackendPreserveEnv | (private) |
| 286 | fn | listPresentCliAuthEnvKeys | (private) |
| 293 | fn | listPresentCliRuntimeEnvKeys | (private) |
| 300 | fn | formatCliEnvKeyList | (private) |
| 304 | fn | buildCliEnvMcpLog | (private) |
| 311 | fn | fingerprintCliSessionId | (private) |
| 319 | fn | formatCliSessionReuseLogState | (private) |
| 335 | fn | buildCliExecLogLine | (private) |
| 360 | fn | buildCliEnvAuthLog | (private) |
| 389 | type | ExecutePreparedCliRunOptions | (private) |
| 394 | fn | executePreparedCliRun | pub |
| 569 | fn | observeForkSuccessor | (private) |
| 582 | fn | finishForkSuccessorPersistence | (private) |
| 590 | fn | cleanupOuterResource | (private) |
| 647 | type | CliToolTerminalOutcome | (private) |
| 648 | type | CliLoopbackAmbiguityGroup | (private) |
| 652 | type | CliLoopbackCall | (private) |
| 660 | type | ActiveCliTool | (private) |
| 670 | fn | matchesCliLoopbackCall | (private) |
| 728 | fn | markCliLoopbackSignatureAmbiguous | (private) |
| 737 | fn | retainCliLoopbackCall | (private) |
| 756 | fn | bindCliLoopbackCall | (private) |
| 769 | fn | removeCliLoopbackCall | (private) |
| 778 | fn | retireCliLoopbackCorrelation | (private) |
| 801 | fn | resolveCliLoopbackTerminalOutcome | (private) |
| 821 | fn | isPreparedInternalSourceReply | (private) |
| 850 | fn | recordRunError | (private) |
| 879 | fn | finalizeParsedTools | (private) |
| 910 | fn | env | (private) |
| 1016 | fn | commitMessagingToolResult | (private) |
| 1087 | fn | beginGatewayCapture | (private) |
| 1099 | fn | isAdmittedPotentialMessagingDelivery | (private) |
| 1102 | fn | isPreparedMessagingDelivery | (private) |
| 1226 | fn | emitCliToolUseStart | (private) |
| 1305 | fn | emitCliToolResult | (private) |
| 1341 | fn | emitParsedToolUseStart | (private) |
| 1361 | fn | emitParsedToolTerminal | (private) |
| 1453 | fn | emitParsedToolResult | (private) |
| 1473 | fn | emitCliCommentaryText | (private) |
| 1495 | fn | emitCliAssistantDelta | (private) |
| 1531 | fn | emitCliThinkingDelta | (private) |
| 1544 | fn | emitCliThinkingProgress | (private) |
| 1555 | fn | emitCliPlanUpdate | (private) |
| 1666 | fn | consumeStdout | (private) |
| 1679 | fn | consumeStderr | (private) |
| 1754 | fn | abortManagedRun | (private) |

## src/agents/cli-runner/helpers.ts (596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | isClaudeCliProvider | pub |
| 63 | fn | enqueueCliRun | pub |
| 74 | fn | buildClaudeOwnerKey | pub |
| 96 | fn | resolveCliRunQueueKey | pub |
| 131 | fn | buildCliAgentSystemPrompt | pub |
| 213 | fn | normalizeCliModel | pub |
| 231 | fn | resolveSystemPromptUsage | pub |
| 258 | fn | resolveSessionIdToSend | pub |
| 277 | fn | resolvePromptInput | pub |
| 291 | fn | resolveCliImagePath | (private) |
| 302 | fn | resolveCliImageRoot | (private) |
| 309 | fn | isFileNotFoundError | (private) |
| 318 | fn | sweepCliImageRoot | (private) |
| 356 | fn | appendImagePathsToPrompt | (private) |
| 366 | fn | loadPromptRefImages | (private) |
| 404 | fn | writeCliImages | (private) |
| 425 | fn | cleanup | (private) |
| 430 | fn | writeCliSystemPromptFile | pub |
| 455 | fn | prepareCliPromptImagePayload | pub |
| 511 | fn | buildCliArgs | pub |

## src/agents/cli-runner/model-call-diagnostics.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | TrustedDiagnosticEventInput | (private) |
| 30 | type | ModelCallFailureKind | (private) |
| 53 | type | DiagnosticContentBudget | (private) |
| 61 | fn | serializedStringContentBytes | (private) |
| 67 | fn | truncateSerializedStringSafe | (private) |
| 90 | fn | releaseFallbackReserve | (private) |
| 97 | fn | captureTextWithinBudget | (private) |
| 118 | fn | captureBoundedText | (private) |
| 129 | fn | assistantContentBlock | (private) |
| 164 | fn | isCapturableAssistantContentBlock | (private) |
| 178 | fn | isTextAssistantContentBlock | (private) |
| 187 | fn | assistantMessageHasText | (private) |
| 209 | fn | normalizeClaudeAssistantMessage | (private) |
| 269 | fn | hasTextContent | (private) |
| 283 | fn | appendOutputTruncationMarker | (private) |
| 297 | fn | privateData | (private) |
| 310 | fn | failureKindForClaudeCli | (private) |
| 324 | fn | usageField | (private) |
| 329 | fn | createClaudeCliModelCallDiagnostics | pub |
| 457 | fn | sizeTimingFields | (private) |

## src/agents/cli-runner/prepare.test.ts (4852 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | McpLoopbackClientGrant | (private) |
| 52 | fn | registerTestContextEngine | (private) |
| 118 | fn | wrappedPluginSystemContext | (private) |
| 122 | fn | createTestMcpLoopbackServerConfig | (private) |
| 140 | fn | createTestMcpLoopbackClientGrant | (private) |
| 149 | fn | createTestMcpLoopbackServer | (private) |
| 156 | fn | createCliBackendConfig | (private) |
| 188 | fn | setCliBackendForPrepareTest | (private) |
| 237 | fn | createSessionFile | (private) |
| 259 | fn | appendTranscriptEntry | (private) |
| 281 | type | CliContextBudgetTestCase | (private) |

## src/agents/cli-runner/prepare.ts (1376 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 126 | fn | resolveClaudeCliContextModelId | (private) |
| 131 | type | RunCliAgentPrepareParams | (private) |
| 158 | fn | resolveReusableCliSessionId | (private) |
| 164 | fn | resolveCliSessionInvalidatedReason | (private) |
| 172 | fn | canTransportSystemPrompt | (private) |
| 181 | fn | buildCliSessionDriftUserContext | (private) |
| 190 | fn | prependCliSessionDriftUserContext | (private) |
| 208 | fn | resolveCliSkillsPrompt | (private) |
| 278 | fn | setCliRunnerPrepareTestDeps | (private) |
| 283 | fn | shouldSkipLocalCliCredentialEpoch | (private) |
| 305 | fn | shouldRefreshAuthProfileForExecution | (private) |
| 320 | fn | prepareCliRunContext | pub |
| 396 | fn | loadScopedAuthStore | (private) |
| 518 | fn | resolveContextModelTokens | (private) |
| 862 | fn | sideQuestionBackend | (private) |
| 869 | fn | processPerTurnBackend | (private) |
| 1022 | fn | loadOpenClawHistoryMessages | (private) |

## src/agents/cli-runner/session-history.test.ts (1063 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createSessionTranscript | (private) |
| 77 | fn | createOversizedSessionTranscript | (private) |
| 85 | fn | requireRecord | (private) |
| 92 | fn | expectMessageFields | (private) |
| 100 | fn | expectCompactionSummary | (private) |
| 106 | fn | expectCustomMessage | (private) |
| 113 | fn | expectBranchSummary | (private) |
| 119 | fn | withCliSessionState | (private) |

## src/agents/cli-runner/session-history.ts (633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | HistoryMessage | (private) |
| 47 | type | HistoryEntry | (private) |
| 62 | type | RawTranscriptReseedReason | (private) |
| 84 | fn | resolveAutoCliSessionReseedHistoryChars | pub |
| 97 | fn | coerceHistoryText | (private) |
| 116 | fn | coerceHistoryTimestamp | (private) |
| 126 | fn | historyEntryToContextEngineMessage | (private) |
| 151 | fn | loadContextEngineMessagesFromEntries | (private) |
| 158 | fn | renderHistoryMessage | (private) |
| 182 | fn | buildCliSessionHistoryPrompt | pub |
| 281 | fn | safeRealpath | (private) |
| 289 | fn | isFileNotFoundError | (private) |
| 298 | fn | readCliSessionHeaderLine | (private) |
| 318 | fn | readBoundedCliSessionTranscript | (private) |
| 358 | fn | isSafeTruncatedCliSessionTail | (private) |
| 395 | fn | parseCliSessionEntries | (private) |
| 412 | fn | resolveSafeCliSessionFile | (private) |
| 439 | fn | loadCliSessionEntries | (private) |
| 495 | fn | hasCliSessionTranscript | pub |
| 525 | fn | loadCliSessionHistoryMessages | pub |
| 540 | fn | loadCliSessionContextEngineMessages | pub |
| 584 | fn | loadCliSessionReseedMessages | pub |
| 594 | fn | loadRawTail | (private) |
