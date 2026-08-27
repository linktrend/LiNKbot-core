# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## src/agents/command/attempt-execution.cli.test.ts (3551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | RunAgentAttemptParams | (private) |
| 37 | fn | runAgentAttempt | (private) |
| 130 | fn | makeCliResult | (private) |
| 158 | fn | persistCliTranscriptEntry | (private) |
| 168 | fn | readSessionMessages | (private) |
| 177 | fn | readSessionFileEntries | (private) |
| 187 | fn | readTranscriptEntries | (private) |
| 211 | fn | requireRecord | (private) |
| 218 | fn | expectRecordFields | (private) |
| 224 | fn | requireMockArg | (private) |
| 232 | fn | expectMockArgFields | (private) |
| 240 | fn | firstRunCliAgentArg | (private) |
| 244 | fn | firstEmbeddedAgentArg | (private) |
| 253 | fn | runOpenClawEmbeddedAttemptForTest | (private) |
| 333 | fn | writeSessionStoreSeed | (private) |
| 340 | fn | readSessionStore | (private) |
| 354 | fn | runClaudeCliAttempt | (private) |
| 394 | fn | writeClaudeCliAssistantTranscript | (private) |
| 414 | fn | makeClaudeCliSessionEntry | (private) |

## src/agents/command/attempt-execution.error-propagation.test.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | emitAcpRuntimeEvent | (private) |
| 38 | fn | emitAcpLifecycleEnd | (private) |
| 44 | fn | emitAcpLifecycleError | (private) |
| 322 | fn | terminalEvent | (private) |

## src/agents/command/attempt-execution.helpers.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | normalizeClaudeCliSessionId | (private) |
| 38 | type | JsonlFileScan | (private) |
| 40 | fn | scanJsonlFile | (private) |
| 82 | fn | jsonlFileHasAssistantMessage | (private) |
| 91 | fn | sessionFileHasContent | pub |
| 96 | fn | claudeCliSessionTranscriptPath | (private) |
| 122 | fn | claudeCliSessionTranscriptHasContent | pub |
| 153 | fn | toToolContentBlocks | (private) |
| 162 | fn | isClaudeTranscriptToolUseBlock | (private) |
| 167 | fn | isClaudeTranscriptToolResultBlock | (private) |
| 172 | fn | jsonlFileHasOrphanedTrailingToolUse | (private) |
| 258 | fn | claudeCliSessionTranscriptHasOrphanedToolUse | pub |
| 275 | fn | resolveFallbackRetryPrompt | pub |
| 301 | type | FallbackTurnLikeMessage | (private) |
| 303 | fn | extractFallbackTurnText | (private) |
| 344 | fn | formatFallbackTurns | (private) |
| 386 | fn | formatClaudeCliFallbackPrelude | (private) |
| 435 | fn | buildClaudeCliFallbackContextPrelude | pub |
| 452 | fn | createAcpVisibleTextAccumulator | pub |

## src/agents/command/attempt-execution.test.ts (1182 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 493 | fn | makeWorkspace | (private) |
| 498 | fn | writeClaudeProjectFile | (private) |
| 749 | fn | writeJsonlSession | (private) |

## src/agents/command/attempt-execution.ts (1442 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | fn | shouldClearReusedCliSessionAfterError | (private) |
| 105 | fn | resolveClearedCliSessionReason | (private) |
| 112 | fn | normalizeTranscriptMirrorText | (private) |
| 130 | fn | shouldSuppressEmbeddedLiveStreamOutput | (private) |
| 134 | type | TranscriptUsage | (private) |
| 142 | type | PersistTextTurnTranscriptParams | (private) |
| 166 | type | PersistTextTurnTranscriptResult | (private) |
| 170 | type | HarnessAuthProfileSelection | (private) |
| 177 | fn | resolveProfileAuthFromStore | (private) |
| 192 | fn | resolveHarnessAuthProfileSelection | (private) |
| 259 | fn | resolveTranscriptUsage | (private) |
| 272 | fn | persistTextTurnTranscript | (private) |
| 357 | fn | resolveCliTranscriptReplyText | (private) |
| 370 | fn | isClaudeCliProvider | (private) |
| 374 | fn | persistAcpTurnTranscript | pub |
| 401 | fn | persistCliTurnTranscript | pub |
| 450 | fn | runAgentAttempt | pub |
| 659 | fn | resolveReusableCliSessionBinding | (private) |
| 704 | fn | runCliWithSession | (private) |
| 989 | fn | buildAcpResult | pub |
| 1012 | fn | emitAcpLifecycleStart | pub |
| 1042 | type | ActiveAcpTool | (private) |
| 1051 | type | AcpToolLifecycleTracker | pub |
| 1059 | fn | createAcpToolLifecycleTracker | pub |
| 1067 | fn | acpAuditToolName | (private) |
| 1085 | fn | resolveAcpToolTerminalReason | (private) |
| 1118 | fn | resolveAcpLifecycleEndFields | (private) |
| 1142 | fn | emitAcpToolExecutionEvent | (private) |
| 1239 | fn | finalizeAcpToolsForRun | (private) |
| 1265 | fn | resolvePresentProxyEnvKeys | (private) |
| 1272 | fn | sanitizeAcpDiagnosticText | (private) |
| 1276 | fn | acpRuntimeEventDiagnostics | (private) |
| 1315 | fn | emitAcpPromptSubmitted | pub |
| 1328 | fn | emitAcpRuntimeEvent | pub |
| 1361 | fn | emitAcpLifecycleEnd | pub |
| 1397 | fn | emitAcpLifecycleError | pub |
| 1432 | fn | emitAcpAssistantDelta | pub |

## src/agents/command/cli-compaction.test.ts (1862 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | buildContextEngine | (private) |
| 46 | fn | writeSessionFile | (private) |
| 78 | fn | persistSessionEntry | (private) |

## src/agents/command/cli-compaction.ts (810 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | SessionManagerLike | (private) |
| 50 | type | SettingsManagerLike | (private) |
| 61 | type | CliCompactionDeps | (private) |
| 86 | type | NativeHarnessCliCompactionOutcome | (private) |
| 93 | type | CliTranscriptCompactionOutcome | (private) |
| 100 | type | CliCompactionRuntimeContextParams | (private) |
| 141 | fn | setCliCompactionTestDeps | pub |
| 146 | fn | resetCliCompactionTestDeps | pub |
| 164 | fn | resolvePositiveInteger | (private) |
| 171 | fn | getSessionBranchMessages | (private) |
| 181 | fn | resolveSessionTokenSnapshot | (private) |
| 187 | fn | isNativeHarnessCompactionSession | (private) |
| 203 | fn | isUnsupportedNativeHarnessCompaction | (private) |
| 209 | fn | isBenignCliCompactionNoopReason | (private) |
| 214 | fn | isIntentionalNativeAutoCompactionSkip | (private) |
| 224 | fn | readAgentIdFromSessionKey | (private) |
| 229 | fn | buildCliCompactionRuntimeContext | (private) |
| 256 | fn | resolveCliContextCompactionSuccess | (private) |
| 305 | fn | compactCliTranscript | (private) |
| 449 | fn | compactNativeHarnessCliTranscript | (private) |
| 591 | fn | runCliTurnCompactionLifecycle | pub |

## src/agents/command/delivery.test.ts (2076 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | DeliverParams | (private) |
| 36 | type | RunResult | (private) |
| 37 | type | TextPayloadLike | (private) |
| 38 | type | ResolveReplyTransportParams | (private) |
| 41 | type | MediaNormalizerOptions | (private) |
| 84 | fn | createResult | (private) |
| 94 | fn | expectTextPayload | (private) |
| 98 | fn | requirePayload | (private) |
| 106 | fn | lastMockArg | (private) |
| 115 | fn | latestNormalizerOptions | (private) |
| 123 | fn | latestOutboundDeliveryArgs | (private) |
| 149 | type | DeliveryStatusLike | (private) |
| 162 | fn | deliveryStatus | (private) |
| 166 | fn | expectDeliveryStatusFields | (private) |
| 177 | fn | expectRuntimeErrorIncludes | (private) |
| 185 | fn | latestJsonOutput | (private) |
| 193 | fn | deliverMediaReplyForTest | (private) |

## src/agents/command/delivery.ts (999 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | RunResult | (private) |
| 56 | type | DurableSendResult | (private) |
| 58 | fn | createRestartOnlyAbortSignal | (private) |
| 66 | fn | onAbort | (private) |
| 83 | type | AgentCommandDeliveryStatus | (private) |
| 99 | type | AgentCommandDeliveryResult | (private) |
| 112 | type | FreshSessionEntryForDeliveryResolver | (private) |
| 114 | type | FreshSessionDeliveryRefreshParams | (private) |
| 124 | type | DeliverAgentCommandResultParams | (private) |
| 137 | fn | normalizeDeliverySessionId | (private) |
| 142 | fn | isFreshDeliverySessionMatch | (private) |
| 150 | fn | formatNestedLogPrefix | (private) |
| 172 | fn | logNestedOutput | (private) |
| 187 | fn | mergeResultMetaOverrides | (private) |
| 200 | fn | hasNonEmptyString | (private) |
| 204 | fn | hasNonEmptyStringArray | (private) |
| 208 | fn | hasNonEmptyArray | (private) |
| 212 | fn | buildDeliveryResult | (private) |
| 239 | fn | deliveryStatusFromDurableSend | (private) |
| 291 | fn | preDeliveryFailureStatus | (private) |
| 302 | fn | noVisiblePayloadStatus | (private) |
| 313 | fn | normalizeReplyMediaPathsForDelivery | (private) |
| 349 | fn | normalizeSentMediaUrlsForDelivery | (private) |
| 389 | fn | filterAlreadyDeliveredReplyPayloads | (private) |
| 474 | fn | normalizeAgentCommandReplyPayloads | (private) |
| 557 | fn | deliverAgentCommandResult | pub |
| 577 | fn | resolveDeliveryRouting | (private) |
| 740 | fn | logDeliveryError | (private) |
| 750 | fn | handlePreDeliveryError | (private) |
| 794 | fn | normalizeSentTexts | (private) |
| 806 | fn | filterDeliveredPayloads | (private) |
| 862 | fn | emitJsonEnvelope | (private) |
| 904 | fn | logPayload | (private) |

## src/agents/command/model-selection.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | AgentRunContext | (private) |
| 62 | fn | resolveEmbeddedModelSelection | pub |
| 566 | type | EmbeddedModelSelection | pub |

## src/agents/command/run-embedded-attempt.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | runEmbeddedAgentAttempt | pub |
| 231 | fn | currentAttemptCommittedCronMedia | (private) |
| 631 | type | EmbeddedAgentAttempt | pub |

## src/agents/command/session-store.test.ts (3219 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | MockCost | (private) |
| 37 | type | MockProviderModel | (private) |
| 42 | type | MockUsageFormatConfig | (private) |
| 78 | fn | acpMeta | (private) |
| 89 | fn | withTempSessionStore | (private) |
| 101 | fn | seedSessionStore | (private) |
| 110 | fn | loadPersistedSessionStore | (private) |
| 116 | fn | loadPersistedSessionEntry | (private) |

## src/agents/command/session-store.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | RunResult | (private) |
| 27 | fn | getUsageFormatModule | (private) |
| 31 | fn | getContextModule | (private) |
| 35 | fn | resolvePositiveInteger | (private) |
| 43 | fn | updateSessionStoreAfterAgentRun | pub |
| 325 | fn | clearCliSessionInStore | pub |
| 365 | fn | consumeCliSessionForkInStore | pub |
| 402 | fn | restoreCliSessionForkInStore | pub |
| 438 | fn | persistCliSessionForkSuccessorInStore | pub |
| 485 | fn | recordCliCompactionInStore | pub |
