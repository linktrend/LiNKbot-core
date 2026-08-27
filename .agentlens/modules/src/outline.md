# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 876 large files in this module.

## src/agents/acp-spawn-parent-stream.test.ts (1465 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | progressModeConfig | (private) |
| 62 | fn | collectedTexts | (private) |
| 68 | fn | expectTextWithFragment | (private) |
| 72 | fn | expectNoTextWithFragment | (private) |
| 76 | fn | firstMockCall | (private) |

## src/agents/acp-spawn-parent-stream.ts (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | AcpParentProgressStreamingConfig | (private) |
| 50 | fn | compactWhitespace | (private) |
| 54 | fn | truncate | (private) |
| 64 | fn | normalizeStringArray | (private) |
| 71 | fn | formatProxyEnvSummary | (private) |
| 78 | fn | asObjectRecord | (private) |
| 84 | fn | asStreamingConfigRecord | (private) |
| 98 | fn | mergeStreamingConfig | (private) |
| 123 | fn | mergeStreamingEntry | (private) |
| 137 | fn | hasConfiguredPreviewStreamMode | (private) |
| 145 | fn | applyParentPreviewStreamModeDefault | (private) |
| 166 | fn | resolveParentProgressStreamingEntry | (private) |
| 192 | fn | resolveParentProgressCommentary | (private) |
| 202 | fn | shouldRelayAcpStatusProgress | (private) |
| 215 | fn | startAcpSpawnParentStreamRelay | pub |
| 284 | fn | capPendingLogEvents | (private) |
| 299 | fn | clearLogFlushTimer | (private) |
| 306 | fn | flushLogEvents | (private) |
| 343 | fn | scheduleLogFlush | (private) |
| 350 | fn | logEvent | (private) |
| 385 | fn | wake | (private) |
| 401 | fn | emit | (private) |
| 417 | fn | emitStartNotice | (private) |
| 445 | fn | clearFlushTimer | (private) |
| 452 | fn | clearRelayLifetimeTimer | (private) |
| 460 | fn | flushPending | (private) |
| 474 | fn | scheduleFlush | (private) |
| 484 | fn | appendVisibleProgress | (private) |
| 514 | fn | flushReplaceableAssistantSnapshot | (private) |
| 523 | fn | appendItemProgressSnapshot | (private) |
| 539 | fn | buildNoOutputNotice | (private) |
| 763 | fn | dispose | (private) |
| 781 | type | AcpSpawnParentRelayHandle | pub |

## src/agents/acp-spawn.test.ts (3303 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | SessionBindingAdapterCapabilities | (private) |
| 21 | fn | createDefaultSpawnConfig | (private) |
| 77 | fn | createSessionAccessorMock | (private) |
| 241 | type | SpawnRequest | (private) |
| 242 | type | SpawnContext | (private) |
| 243 | type | SpawnResult | (private) |
| 244 | type | AgentCallParams | (private) |
| 252 | type | CrossAgentWorkspaceFixture | (private) |
| 258 | fn | replaceSpawnConfig | (private) |
| 266 | fn | createSessionBindingCapabilities | (private) |
| 274 | fn | createSessionBinding | (private) |
| 295 | fn | createRelayHandle | (private) |
| 305 | fn | expectResolvedIntroTextInBindMetadata | (private) |
| 317 | fn | createSpawnRequest | (private) |
| 326 | fn | createRequesterContext | (private) |
| 337 | fn | createCrossAgentWorkspaceFixture | (private) |
| 355 | fn | configureCrossAgentWorkspaceSpawn | (private) |
| 378 | fn | findAgentGatewayCall | (private) |
| 384 | fn | expectFailedSpawn | (private) |
| 399 | fn | expectAcceptedSpawn | (private) |
| 407 | fn | expectRecordFields | (private) |
| 421 | fn | firstMockCall | (private) |
| 429 | fn | latestMockCall | (private) |
| 437 | fn | latestBindingInput | (private) |
| 441 | fn | gatewayRequests | (private) |
| 447 | fn | gatewayRequest | (private) |
| 455 | fn | expectGatewayMethodNotCalled | (private) |
| 459 | fn | expectSessionPatchFields | (private) |
| 463 | fn | expectInitializeSessionFields | (private) |
| 470 | fn | expectBindingCallFields | (private) |
| 489 | fn | expectRelayCallFields | (private) |
| 496 | fn | expectAgentGatewayCall | (private) |
| 510 | fn | resolveMatrixRoomTargetForTest | (private) |
| 519 | fn | enableMatrixAcpThreadBindings | (private) |
| 579 | fn | enableLineCurrentConversationBindings | (private) |
| 629 | fn | enableTelegramCurrentConversationBindings | (private) |

## src/agents/acp-spawn.ts (1592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 125 | type | SpawnAcpMode | (private) |
| 127 | type | SpawnAcpSandboxMode | pub |
| 129 | type | SpawnAcpStreamTarget | (private) |
| 131 | type | SpawnAcpParams | (private) |
| 150 | type | GatewayImageAttachmentInput | (private) |
| 159 | fn | toGatewayImageAttachments | (private) |
| 175 | type | SpawnAcpContext | pub |
| 213 | type | SpawnAcpErrorCode | (private) |
| 215 | type | SpawnAcpResultFields | (private) |
| 224 | type | SpawnAcpAcceptedResult | (private) |
| 231 | type | SpawnAcpFailedResult | (private) |
| 237 | type | SpawnAcpResult | pub |
| 239 | fn | isSpawnAcpAcceptedResult | pub |
| 250 | fn | resolveAcpSpawnRuntimePolicyError | pub |
| 269 | type | AcpSpawnInitializedSession | (private) |
| 273 | type | AcpSpawnInitializedRuntime | (private) |
| 281 | type | AcpSpawnRequesterState | (private) |
| 291 | type | AcpSpawnStreamPlan | (private) |
| 296 | fn | isActiveTaskStatus | (private) |
| 300 | fn | countUntrackedActiveAcpRunsForOwner | (private) |
| 333 | type | AcpSpawnBootstrapDeliveryPlan | (private) |
| 341 | fn | resolveAcpSessionMode | (private) |
| 345 | fn | isHeartbeatEnabledForSessionAgent | (private) |
| 383 | fn | resolveHeartbeatConfigForAgent | (private) |
| 398 | fn | hasSessionLocalHeartbeatRelayRoute | (private) |
| 437 | fn | resolveTargetAcpAgentId | (private) |
| 481 | fn | isExplicitlyAllowedAcpAgent | (private) |
| 491 | fn | resolveConfiguredAcpSubagentTargetIds | (private) |
| 518 | fn | summarizeError | (private) |
| 522 | fn | createAcpSpawnFailure | (private) |
| 538 | fn | isMissingPathError | (private) |
| 543 | fn | resolveRuntimeCwdForAcpSpawn | pub |
| 564 | fn | resolveRequesterInternalSessionKey | (private) |
| 579 | fn | persistAcpSpawnSessionFileBestEffort | (private) |
| 611 | fn | resolveAcpSpawnRequesterState | (private) |
| 664 | fn | resolveAcpSpawnStreamPlan | (private) |
| 693 | fn | sessionEntryMatchesAcpResumeSessionId | (private) |
| 704 | fn | sessionEntryIsOwnedByRequester | (private) |
| 716 | fn | validateAcpResumeSessionOwnership | (private) |
| 759 | type | AcpSpawnRuntimeOptions | (private) |
| 765 | fn | resolveAcpRuntimeTimeoutSeconds | (private) |
| 772 | fn | isCursorAcpTarget | (private) |
| 776 | fn | resolveAcpSpawnModelCandidates | (private) |
| 811 | fn | isAcpModelSelectionError | (private) |
| 824 | fn | resolveAcpSpawnRuntimeOptions | (private) |
| 886 | fn | initializeAcpSpawnRuntime | (private) |
| 938 | fn | bindPreparedAcpThread | (private) |
| 1017 | fn | resolveAcpSpawnBootstrapDeliveryPlan | (private) |
| 1089 | fn | spawnAcpDirect | pub |
| 1346 | type | AcpBackendState | (private) |

## src/agents/agent-bundle-lsp-runtime.ts (642 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | LspSession | (private) |
| 38 | type | PendingLspRequest | (private) |
| 45 | type | LspServerCapabilities | (private) |
| 55 | type | BundleLspToolRuntime | (private) |
| 61 | type | LspPositionParams | (private) |
| 71 | fn | delay | (private) |
| 78 | fn | createLspSession | (private) |
| 96 | fn | registerActiveLspSession | (private) |
| 100 | fn | rememberLspFailure | (private) |
| 104 | fn | takePendingLspRequest | (private) |
| 115 | fn | failLspSession | (private) |
| 122 | fn | lspProcessExitError | (private) |
| 130 | fn | attachLspProcessHandlers | (private) |
| 161 | fn | encodeLspMessage | (private) |
| 170 | class | LspFramingError | (private) |
| 174 | type | LspParseResult | (private) |
| 178 | fn | framingError | (private) |
| 186 | fn | parseContentLength | (private) |
| 218 | fn | parseLspMessages | (private) |
| 257 | fn | lspAbortError | (private) |
| 263 | fn | sendRequest | (private) |
| 281 | fn | onAbort | (private) |
| 297 | fn | dispose | (private) |
| 306 | fn | handleIncomingData | (private) |
| 345 | fn | initializeSession | (private) |
| 369 | fn | hasLspProcessExited | (private) |
| 373 | fn | terminateLspProcessTree | (private) |
| 384 | fn | disposeSession | (private) |
| 409 | fn | disposeSessions | (private) |
| 413 | fn | createLspPositionTool | (private) |
| 450 | fn | buildLspTools | (private) |
| 524 | fn | formatLspResult | (private) |
| 539 | fn | createBundleLspToolRuntime | pub |
| 640 | fn | disposeAllBundleLspRuntimes | pub |

## src/agents/agent-bundle-mcp-materialize.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | isAppOnlyTool | (private) |
| 29 | fn | releaseRuntimeLease | (private) |
| 43 | fn | buildAppToolPolicyProjections | (private) |
| 90 | fn | toAgentToolResult | (private) |
| 141 | fn | toJsonAgentToolResult | (private) |
| 161 | fn | requireStringArg | (private) |
| 172 | fn | optionalStringRecordArg | (private) |
| 188 | fn | serverAllowsUtilityTool | (private) |
| 195 | fn | addMcpUtilityTool | (private) |
| 242 | fn | buildBundleMcpToolsFromCatalog | pub |
| 399 | fn | materializeBundleMcpToolsForRun | pub |
| 540 | fn | createBundleMcpToolRuntime | pub |

## src/agents/agent-bundle-mcp-runtime.test.ts (4841 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | RuntimeFactoryOptions | (private) |
| 43 | type | RuntimeFactory | (private) |
| 48 | fn | writeListToolsMcpServer | (private) |
| 116 | fn | log | (private) |
| 119 | fn | send | (private) |
| 122 | fn | handle | (private) |
| 238 | fn | shutdown | (private) |
| 271 | fn | waitForFileText | (private) |
| 296 | fn | waitForPredicate | (private) |
| 313 | fn | waitForErrorMessage | (private) |
| 336 | fn | makeRuntime | (private) |
| 402 | fn | log | (private) |
| 403 | fn | send | (private) |
| 844 | fn | summarizeTools | (private) |
| 1235 | fn | log | (private) |
| 1238 | fn | send | (private) |
| 1241 | fn | handle | (private) |
| 1294 | fn | shutdown | (private) |
| 1453 | fn | log | (private) |
| 1456 | fn | send | (private) |
| 1459 | fn | sendToolList | (private) |
| 1468 | fn | handle | (private) |
| 1500 | fn | shutdown | (private) |
| 3043 | fn | makeCatalog | (private) |
| 4032 | fn | log | (private) |
| 4035 | fn | send | (private) |
| 4130 | fn | log | (private) |
| 4133 | fn | send | (private) |
| 4460 | fn | log | (private) |
| 4463 | fn | send | (private) |
| 4466 | fn | handle | (private) |
| 4509 | fn | shutdown | (private) |
| 4539 | fn | log | (private) |
| 4542 | fn | send | (private) |
| 4545 | fn | isFirstConnect | (private) |
| 4554 | fn | handle | (private) |
| 4588 | fn | shutdown | (private) |
| 4719 | fn | log | (private) |
| 4722 | fn | send | (private) |
| 4725 | fn | handle | (private) |
| 4781 | fn | shutdown | (private) |

## src/agents/agent-bundle-mcp-runtime.ts (1303 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | BundleMcpSession | (private) |
| 86 | type | SessionlessMcpClient | (private) |
| 117 | type | SessionlessResponse | (private) |
| 126 | fn | isSessionlessMcpServer | (private) |
| 137 | fn | sessionlessError | (private) |
| 141 | fn | createSessionlessMcpClient | (private) |
| 151 | fn | failPending | (private) |
| 216 | fn | resultArray | (private) |
| 301 | type | ListedTool | (private) |
| 311 | type | BundleMcpTestState | (private) |
| 313 | fn | getBundleMcpTestState | (private) |
| 324 | type | McpServerBackoffState | (private) |
| 331 | fn | connectWithTimeout | (private) |
| 396 | fn | redactErrorUrls | (private) |
| 400 | fn | listAllTools | (private) |
| 412 | fn | isMcpMethodNotFoundError | (private) |
| 420 | fn | listAllToolsBestEffort | (private) |
| 435 | fn | hasConfiguredMcpRequestTimeout | (private) |
| 449 | fn | getCatalogListTimeoutMs | (private) |
| 458 | fn | setBundleMcpCatalogListTimeoutMsForTest | (private) |
| 465 | fn | setBundleMcpDisposeTimeoutMsForTest | (private) |
| 474 | fn | buildMcpClientCapabilities | (private) |
| 484 | fn | buildMcpClientOptions | (private) |
| 488 | fn | listAllResources | (private) |
| 500 | fn | listAllPrompts | (private) |
| 512 | fn | normalizeStringList | (private) |
| 520 | fn | normalizeToolUiVisibility | (private) |
| 530 | fn | getMcpToolSelection | (private) |
| 540 | fn | summarizeServerCapabilities | (private) |
| 553 | fn | settleWithin | (private) |
| 573 | fn | disposeSession | (private) |
| 600 | fn | createDisposedError | (private) |
| 604 | fn | createSessionMcpRuntime | pub |
| 646 | fn | recordServerToolFailure | (private) |
| 681 | fn | failIfDisposed | (private) |
| 751 | fn | inFlight | (private) |
| 817 | type | ServerResult | (private) |
| 1291 | fn | sizes | (private) |

## src/agents/agent-bundle-mcp-tools.materialize.test.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | expectTextContentBlock | (private) |
| 29 | fn | makeToolRuntime | (private) |

## src/agents/agent-command-recovery-owner.test.ts (615 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | createTarget | (private) |
| 42 | fn | write | (private) |

## src/agents/agent-command.compaction-rotation.test.ts (961 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ProviderModelNormalizationParams | (private) |
| 24 | type | LoadManifestModelCatalogParams | (private) |
| 25 | type | RunAgentAttempt | (private) |
| 26 | type | CliCompactionParams | (private) |
| 240 | fn | makeResult | (private) |
| 271 | fn | readSessionMessages | (private) |
| 288 | fn | requireStorePath | (private) |
| 296 | fn | findStoredSessionEntry | (private) |
| 302 | fn | readLifecyclePhases | (private) |

## src/agents/agent-command.live-model-switch.test.ts (5036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 508 | fn | normalizeProviderId | (private) |
| 509 | fn | isModelKeyAllowedBySet | (private) |
| 522 | fn | buildAllowedModelSet | (private) |
| 601 | fn | allowsKey | (private) |
| 760 | fn | isModelKeyAllowedBySet | (private) |
| 774 | fn | allowsKey | (private) |
| 892 | type | FallbackRunnerParams | (private) |
| 909 | type | ModelSwitchOptions | (private) |
| 911 | fn | makeSuccessResult | (private) |
| 923 | fn | makeEmptyResult | (private) |
| 936 | fn | setupModelSwitchRetry | (private) |
| 953 | fn | setupSingleAttemptFallback | (private) |
| 965 | fn | requireRecord | (private) |
| 972 | fn | requireArray | (private) |
| 979 | fn | mockCallArg | (private) |
| 987 | fn | expectRecordFields | (private) |
| 994 | fn | runBasicAgentCommand | (private) |
| 1001 | fn | setupSessionTouchStore | (private) |
| 1012 | fn | expectFallbackOverrideCalls | (private) |
| 1067 | fn | onEvent | (private) |
| 2358 | type | AttemptCall | (private) |
| 2397 | type | AttemptCall | (private) |
| 2725 | fn | onDeliveryResult | (private) |
| 3033 | fn | resolver | (private) |
| 4134 | type | AttemptCall | (private) |
| 4171 | type | AttemptCall | (private) |
| 4207 | type | AttemptCall | (private) |
| 5005 | fn | onEvent | (private) |

## src/agents/agent-command.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | agentCommandInternal | (private) |
| 158 | fn | trackInternalModelRunTarget | (private) |
| 239 | fn | prepareDeliveryForRun | (private) |
| 519 | fn | agentCommand | pub |
| 556 | fn | agentCommandFromIngressInternal | (private) |
| 592 | fn | agentCommandFromIngress | pub |
| 601 | fn | agentCommandFromGatewayIngress | pub |

## src/agents/agent-scope.test.ts (1330 lines)

_No symbols extracted._

## src/agents/agent-scope.ts (641 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | resolveAgentProfileActivation | pub |
| 53 | fn | isAgentProfileActive | pub |
| 58 | fn | stripNullBytes | (private) |
| 66 | fn | autoFallbackPrimaryProbeStateKey | (private) |
| 77 | fn | pruneAutoFallbackPrimaryProbeState | (private) |
| 105 | type | AutoFallbackPrimaryProbe | pub |
| 115 | fn | hasLegacyAutoFallbackWithoutOrigin | pub |
| 133 | fn | resolveAutoFallbackPrimaryProbe | pub |
| 225 | fn | markAutoFallbackPrimaryProbe | pub |
| 256 | fn | entryMatchesAutoFallbackPrimaryProbe | pub |
| 286 | fn | clearAutoFallbackPrimaryProbeSelection | pub |
| 312 | fn | resolveSessionAgentIds | pub |
| 335 | fn | resolveSessionAgentId | pub |
| 344 | fn | resolveAgentExecutionContract | pub |
| 357 | fn | resolveAgentSkillsFilter | pub |
| 364 | fn | resolveAgentExplicitModelPrimary | pub |
| 372 | fn | resolveAgentEffectiveModelPrimary | pub |
| 382 | fn | findMutableAgentEntry | (private) |
| 387 | fn | updateAgentModelPrimary | (private) |
| 397 | type | AgentModelPrimaryWriteTarget | pub |
| 399 | fn | setAgentEffectiveModelPrimary | pub |
| 424 | fn | resolveAgentModelFallbacksOverride | pub |
| 431 | fn | resolveSelectedModelFallbacksOverride | (private) |
| 447 | fn | resolveFirstModelFallbacksOverride | (private) |
| 459 | type | SubagentModelConfigSelectionSource | pub |
| 461 | type | SubagentModelConfigSelectionResult | pub |
| 466 | fn | resolveSubagentModelConfigSelectionResult | pub |
| 491 | fn | resolveSubagentModelConfigSelection | pub |
| 499 | fn | resolveSubagentModelFallbacksOverride | pub |
| 518 | fn | resolveSubagentSpawnModelFallbacksOverride | (private) |
| 530 | fn | resolveFallbackAgentId | pub |
| 541 | fn | resolveRunModelFallbacksOverride | pub |
| 555 | fn | hasConfiguredModelFallbacks | pub |
| 565 | fn | resolveEffectiveModelFallbacks | pub |
| 593 | fn | normalizePathForComparison | (private) |
| 609 | fn | resolveAgentIdsByWorkspacePath | pub |
| 636 | fn | resolveAgentIdByWorkspacePath | pub |

## src/agents/agent-tool-definition-adapter.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | AnyAgentTool | (private) |
| 32 | type | BeforeToolCallPreparingTool | (private) |
| 40 | type | ToolExecuteArgsCurrent | (private) |
| 47 | type | ToolExecuteArgsLegacy | (private) |
| 54 | type | ToolExecuteArgs | (private) |
| 57 | type | ToolExecuteArgsAny | (private) |
| 63 | type | ClientToolCallRecorder | (private) |
| 71 | fn | isAbortSignal | (private) |
| 75 | fn | isLegacyToolExecuteArgs | (private) |
| 84 | fn | describeToolExecutionError | (private) |
| 95 | fn | serializeToolParams | (private) |
| 127 | fn | formatToolParamPreview | (private) |
| 134 | fn | kindForLog | (private) |
| 144 | fn | summarizeSensitiveValueForLog | (private) |
| 161 | fn | summarizeExecCommandForLog | (private) |
| 168 | fn | sanitizeExecEnvForLog | (private) |
| 179 | fn | sanitizeExecFailureParamsForLog | (private) |
| 211 | fn | sanitizeToolFailureParamsForLog | (private) |
| 215 | fn | describeToolFailureInputs | (private) |
| 231 | fn | normalizeToolExecutionResult | (private) |
| 250 | fn | buildToolExecutionErrorResult | (private) |
| 261 | fn | splitToolExecuteArgs | (private) |
| 285 | fn | prepareToolParamsBeforeHook | (private) |
| 302 | fn | finalizeToolParamsBeforeExecute | (private) |
| 314 | fn | findClientToolNameConflicts | pub |
| 349 | fn | createClientToolNameConflictError | pub |
| 354 | fn | isClientToolNameConflictError | pub |
| 359 | fn | toToolDefinitions | pub |
| 478 | fn | coerceParamsRecord | (private) |
| 499 | fn | toClientToolDefinitions | pub |

## src/agents/agent-tools-agent-config.test.ts (792 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ToolWithExecute | (private) |
| 46 | fn | expectReadOnlyToolSet | (private) |
| 56 | fn | withApplyPatchEscapeCase | (private) |
| 111 | fn | createMainSessionTools | (private) |
| 120 | fn | createMainAgentConfig | (private) |
| 490 | fn | createWebChatTools | (private) |

## src/agents/agent-tools.before-tool-call.e2e.test.ts (2789 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | setGlobalHookRunnerForTest | (private) |
| 75 | fn | getGlobalHookRunnerForTest | (private) |
| 83 | type | TestHookRunner | (private) |
| 88 | fn | createTestHookRunner | (private) |
| 96 | fn | asAgentTool | (private) |
| 128 | fn | createWrappedTool | (private) |
| 139 | fn | withToolLoopEvents | (private) |
| 156 | fn | withToolExecutionEvents | (private) |
| 165 | fn | flush | (private) |
| 176 | fn | withDiagnosticEvents | (private) |
| 183 | fn | flush | (private) |
| 194 | fn | withSkillUsageDiagnosticEvents | (private) |
| 209 | fn | flush | (private) |
| 221 | fn | createPingPongTools | (private) |
| 246 | fn | runPingPongSequence | (private) |
| 260 | fn | createGenericReadRepeatFixture | (private) |
| 271 | fn | createNoProgressProcessFixture | (private) |
| 282 | fn | expectCriticalLoopEvent | (private) |
| 298 | fn | expectToolLoopBlockedResult | (private) |
| 310 | fn | expectUnblockedToolExecution | (private) |
| 322 | fn | requireRecord | (private) |
| 329 | fn | requireArray | (private) |
| 337 | fn | expectEventFields | (private) |
| 1492 | fn | requireRecord | (private) |
| 1499 | fn | requireHookCall | (private) |
| 1512 | fn | requireGatewayCall | (private) |
| 1520 | fn | expectRecordFields | (private) |
| 1526 | fn | registerTelegramPluginApprovalSetup | (private) |
| 1559 | fn | runAbortDuringApprovalWait | (private) |
| 2652 | type | TrustedToolEvent | (private) |
| 2662 | fn | withTrustedToolEvents | (private) |
| 2671 | fn | flush | (private) |
| 2682 | fn | configWithToolContent | (private) |

## src/agents/agent-tools.before-tool-call.embedded-mode.test.ts (909 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | requireRecord | (private) |
| 67 | fn | requireApprovalRequestCall | (private) |
| 84 | fn | requireBeforeToolCall | (private) |

## src/agents/agent-tools.before-tool-call.integration.e2e.test.ts (1468 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | BeforeToolCallHandlerMock | (private) |
| 56 | fn | asAgentTool | (private) |
| 65 | type | BeforeToolCallHookInstall | (private) |
| 71 | fn | collectMatching | (private) |
| 85 | fn | installBeforeToolCallHook | (private) |
| 100 | fn | installBeforeToolCallHooks | (private) |
| 1104 | type | ToolResult | (private) |
| 1301 | fn | reserve | (private) |
| 1305 | fn | complete | (private) |

## src/agents/agent-tools.before-tool-call.ts (2143 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 132 | type | ToolOutcomeObservation | pub |
| 142 | type | ToolOutcomeObserver | pub |
| 144 | type | HookContext | pub |
| 184 | type | HookBlockedReason | (private) |
| 185 | type | BeforeToolCallFailureDisposition | pub |
| 186 | type | HookBlockedOutcome | (private) |
| 192 | type | HookOutcome | (private) |
| 204 | type | PluginApprovalRequest | (private) |
| 206 | fn | resolvePluginToolApprovalTimeoutMs | (private) |
| 217 | fn | resolvePluginToolApprovalGatewayTimeoutMs | (private) |
| 221 | type | DeferredPluginToolApproval | pub |
| 230 | type | BeforeToolCallWrapperOptions | (private) |
| 234 | type | BeforeToolCallPreparingTool | (private) |
| 242 | type | BeforeToolCallPolicyDiagnosticState | pub |
| 252 | fn | getBeforeToolCallPolicyDiagnosticState | pub |
| 261 | fn | hasBeforeToolCallPolicy | pub |
| 284 | fn | resolveToolTerminalPresentation | (private) |
| 310 | fn | rememberPendingTerminalPresentation | (private) |
| 340 | fn | finalizeToolTerminalPresentation | pub |
| 381 | class | BeforeToolCallBlockedError | (private) |
| 398 | class | BeforeToolCallFailureError | (private) |
| 409 | fn | tagBeforeToolCallFailure | (private) |
| 426 | fn | getBeforeToolCallFailureDisposition | pub |
| 437 | fn | recordAdjustedParamsForToolCall | pub |
| 459 | fn | cloneParamsForAdjustedReplay | (private) |
| 470 | fn | recordStructuredReplayTrustForToolCall | pub |
| 491 | fn | isBeforeToolCallBlockedError | pub |
| 500 | fn | mergeParamsWithApprovalOverrides | (private) |
| 513 | fn | unwrapErrorCause | (private) |
| 528 | fn | resolveToolErrorDiagnostic | (private) |
| 555 | type | ResolvedToolTerminalDiagnostic | (private) |
| 572 | fn | resolveToolResultTerminalDiagnostic | (private) |
| 597 | type | ToolDiagnosticIdentity | (private) |
| 602 | fn | resolveToolDiagnosticIdentity | (private) |
| 616 | type | SkillUsageMatch | (private) |
| 623 | fn | canonicalSkillFile | (private) |
| 630 | fn | resolvedSkillUsageMatch | (private) |
| 643 | fn | findResolvedSkillUsageMatch | (private) |
| 659 | fn | resolveRelativeToolPath | (private) |
| 680 | fn | readToolPathCandidates | (private) |
| 690 | fn | skillInstructionPaths | (private) |
| 714 | fn | materializedSkillInstructionPaths | (private) |
| 727 | fn | findSkillUsageMatch | (private) |
| 768 | fn | emitSkillUsedDiagnostic | (private) |
| 797 | fn | emitToolBlockedSecurityEvent | (private) |
| 858 | fn | warnDeprecatedApprovalTimeoutBehavior | (private) |
| 872 | fn | notifyPluginApprovalResolution | (private) |
| 889 | fn | resolvePermittedPluginApprovalResolution | (private) |
| 904 | fn | buildPluginApprovalFailureReason | (private) |
| 941 | fn | requestPluginToolApproval | (private) |
| 1202 | fn | requestDeferredPluginToolApproval | pub |
| 1219 | fn | cancelDeferredPluginToolApproval | pub |
| 1225 | fn | resolveBeforeToolCallApprovalOutcome | (private) |
| 1285 | fn | resolveSkillWorkshopApprovalForFinalParams | (private) |
| 1314 | fn | isPreExecutionBlockedToolResult | pub |
| 1321 | fn | buildBlockedToolResult | pub |
| 1343 | fn | buildToolContentPrivateData | (private) |
| 1360 | fn | summarizeToolParams | (private) |
| 1385 | fn | shouldEmitLoopWarning | (private) |
| 1404 | fn | recordLoopOutcome | (private) |
| 1451 | fn | runBeforeToolCallHook | pub |
| 1574 | fn | deriveToolEventParams | (private) |
| 1582 | fn | buildToolContext | (private) |
| 1788 | fn | wrapToolWithBeforeToolCallHook | pub |
| 1814 | fn | buildEventBase | (private) |
| 1826 | fn | recordPreExecutionError | (private) |
| 1842 | fn | recordPreExecutionDisposition | (private) |
| 2088 | fn | rewrapToolWithBeforeToolCallHook | pub |
| 2116 | fn | recordPreExecutionBlockedToolCall | (private) |
| 2130 | fn | toLintErrorObject | (private) |

## src/agents/agent-tools.create-openclaw-coding-tools.test.ts (1965 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | collectActionValues | (private) |
| 70 | fn | writeSessionStore | (private) |
| 81 | fn | createToolsForStoredSession | (private) |
| 99 | fn | expectNoSubagentControlTools | (private) |
| 107 | fn | applyRuntimeToolsAllow | (private) |
| 112 | type | OpenClawCodingTool | (private) |
| 113 | type | OpenClawToolsOptions | (private) |
| 115 | fn | toolNameList | (private) |
| 119 | fn | requireTool | (private) |
| 127 | fn | requireToolExecute | (private) |
| 134 | fn | latestCreateOpenClawToolsOptions | (private) |
| 144 | fn | expectListIncludes | (private) |
| 156 | fn | cronCreatorToolNames | (private) |

## src/agents/agent-tools.policy.test.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | writeSessionEntries | (private) |
| 42 | fn | createSessionStorePath | (private) |

## src/agents/agent-tools.policy.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | resolveSubagentDenyListForRole | (private) |
| 80 | fn | mergeConfiguredSubagentAllow | (private) |
| 88 | fn | resolveSubagentToolPolicyForSession | pub |
| 120 | fn | resolveInheritedToolPolicyForSession | pub |
| 145 | fn | filterToolsByPolicy | pub |
| 153 | fn | resolveConfiguredToolPolicies | pub |
| 193 | fn | collectUniqueStrings | (private) |
| 197 | fn | buildScopedGroupIdCandidates | (private) |
| 221 | fn | resolveGroupContextFromSessionKey | (private) |
| 271 | type | GroupToolPolicyContext | (private) |
| 273 | fn | resolveTrustedGroupIdFromContexts | (private) |
| 302 | fn | resolveTrustedGroupId | pub |
| 318 | fn | sessionKeyNamesGroupConversation | pub |
| 322 | fn | resolveExplicitProfileAlsoAllow | (private) |
| 326 | fn | hasExplicitToolSection | (private) |
| 332 | type | ImplicitProfileGrantDetection | (private) |
| 336 | fn | detectImplicitProfileGrants | (private) |
| 360 | fn | formatImplicitToolSections | (private) |
| 364 | fn | formatToolListForWarning | (private) |
| 369 | fn | resolveEffectiveToolPolicy | pub |
| 458 | fn | resolveGroupToolPolicy | pub |

## src/agents/agent-tools.read.ts (1244 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ToolContentBlock | (private) |
| 53 | type | ImageContentBlock | (private) |
| 54 | type | TextContentBlock | (private) |
| 62 | type | OpenClawReadToolOptions | (private) |
| 67 | type | SkillReadContent | (private) |
| 72 | type | ReadTruncationDetails | (private) |
| 83 | fn | resolveAdaptiveReadMaxBytes | (private) |
| 98 | fn | malformedXmlArgValuePathError | (private) |
| 102 | fn | formatBytes | (private) |
| 111 | fn | getToolResultText | (private) |
| 132 | fn | withToolResultText | (private) |
| 163 | fn | extractReadTruncationDetails | (private) |
| 190 | fn | stripReadContinuationNotice | (private) |
| 194 | fn | stripReadTruncationContentDetails | (private) |
| 223 | fn | isOffsetBeyondEof | (private) |
| 234 | fn | emptyReadResult | (private) |
| 239 | fn | missingDailyMemoryReadResult | (private) |
| 255 | fn | normalizeDailyMemoryReadPath | (private) |
| 266 | fn | isNotFoundError | (private) |
| 276 | fn | executeReadPage | (private) |
| 296 | fn | executeReadWithAdaptivePaging | (private) |
| 379 | fn | rewriteReadImageHeader | (private) |
| 387 | fn | normalizeReadImageResult | (private) |
| 446 | fn | normalizeReadResultDetails | (private) |
| 497 | fn | wrapToolWorkspaceRootGuard | pub |
| 501 | fn | mapContainerPathToWorkspaceRoot | (private) |
| 513 | fn | resolveContainerPathCandidate | (private) |
| 550 | fn | mapContainerPathToRoot | (private) |
| 588 | fn | resolveToolPathAgainstWorkspaceRoot | (private) |
| 604 | type | MemoryFlushAppendOnlyWriteOptions | (private) |
| 614 | fn | readOptionalUtf8File | (private) |
| 646 | fn | appendMemoryFlushContent | (private) |
| 695 | fn | wrapToolMemoryFlushAppendOnlyWrite | pub |
| 748 | fn | isSandboxRootEscapeError | (private) |
| 752 | fn | withWorkspaceSafeTempHint | (private) |
| 762 | fn | assertSandboxPathWithinAnyRoot | (private) |
| 798 | fn | wrapToolWorkspaceRootGuardWithOptions | pub |
| 880 | type | SandboxToolParams | (private) |
| 888 | fn | createSandboxedReadTool | pub |
| 899 | fn | createSandboxedWriteTool | pub |
| 907 | fn | createSandboxedEditTool | pub |
| 915 | fn | createHostWorkspaceWriteTool | pub |
| 923 | fn | createHostWorkspaceEditTool | pub |
| 931 | fn | createOpenClawReadTool | pub |
| 965 | fn | wrapReadToolWithSkillContent | pub |
| 1014 | fn | createSandboxReadOperations | (private) |
| 1038 | fn | createSandboxWriteOperations | (private) |
| 1053 | fn | createSandboxEditOperations | (private) |
| 1063 | fn | assertSandboxFileExists | (private) |
| 1070 | fn | expandTildeToOsHome | (private) |
| 1075 | fn | resolveHostPath | (private) |
| 1079 | fn | writeHostFile | (private) |
| 1085 | fn | statHostFile | (private) |
| 1106 | fn | writeWorkspaceFile | (private) |
| 1120 | fn | createHostWriteOperations | (private) |
| 1143 | fn | getRoot | (private) |
| 1164 | fn | createHostEditOperations | (private) |
| 1185 | fn | getRoot | (private) |
| 1224 | fn | toCanonicalRelativeWorkspacePath | (private) |
| 1239 | fn | createFsAccessError | (private) |

## src/agents/agent-tools.schema.test.ts (1333 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 809 | fn | makeTool | (private) |

## src/agents/agent-tools.ts (1249 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 123 | fn | hasExplicitDenyPolicy | (private) |
| 130 | type | GuardContainerMount | (private) |
| 135 | fn | readOnlySandboxReadMounts | (private) |
| 165 | fn | resolveSkillReadRoots | (private) |
| 182 | type | BashToolsModule | (private) |
| 188 | fn | loadBashToolsModule | (private) |
| 192 | fn | createLazyProcessTool | (private) |
| 194 | fn | loadTool | (private) |
| 214 | fn | resolveProcessToolScopeKey | pub |
| 236 | fn | applyModelProviderToolPolicy | (private) |
| 282 | type | OpenClawCodingToolsOptions | (private) |
| 469 | fn | createOpenClawCodingToolsInternal | (private) |
| 1246 | fn | createOpenClawCodingTools | pub |

## src/agents/agent-tools.workspace-paths.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | withTempDir | (private) |
| 32 | fn | createExecTool | (private) |
| 44 | fn | expectExecCwdResolvesTo | (private) |

## src/agents/anthropic-transport-stream.test.ts (4213 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | AnthropicMessagesModel | (private) |
| 27 | type | AnthropicStreamFn | (private) |
| 28 | type | AnthropicStreamContext | (private) |
| 29 | type | AnthropicStreamOptions | (private) |
| 30 | type | RequestTransportConfig | (private) |
| 32 | fn | createSseResponse | (private) |
| 40 | fn | serializeSseEvents | (private) |
| 44 | fn | createFailingSseResponse | (private) |
| 63 | fn | createInterruptedThinkingEvents | (private) |
| 82 | fn | createStalledSseResponse | (private) |
| 103 | fn | createRawSseResponse | (private) |
| 110 | fn | createOpenRawSseResponse | (private) |
| 129 | fn | delay | (private) |
| 135 | fn | latestAnthropicRequest | (private) |
| 144 | fn | latestAnthropicRequestHeaders | (private) |
| 148 | fn | guardedFetchCall | (private) |
| 158 | fn | requireRecord | (private) |
| 165 | fn | requireArray | (private) |
| 172 | fn | findRecord | (private) |
| 182 | fn | makeAnthropicTransportModel | (private) |
| 223 | fn | makeSonnet5PrefillContext | (private) |
| 249 | fn | runTransportStream | (private) |

## src/agents/anthropic-transport-stream.ts (1905 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 124 | type | AnthropicTransportModel | (private) |
| 129 | type | AnthropicTransportOptions | (private) |
| 131 | type | AnthropicAdaptiveEffort | (private) |
| 132 | type | AnthropicMessagesClient | (private) |
| 141 | fn | resolveAnthropicRequestModelId | (private) |
| 148 | type | TransportContentBlock | (private) |
| 166 | type | MutableAssistantOutput | (private) |
| 191 | fn | normalizeAnthropicToolChoice | (private) |
| 204 | fn | supportsNativeXhighEffort | (private) |
| 208 | fn | supportsAdaptiveThinking | (private) |
| 212 | fn | mapThinkingLevelToEffort | (private) |
| 243 | fn | clampReasoningLevel | (private) |
| 247 | fn | resolvePositiveAnthropicTokenLimit | (private) |
| 255 | fn | resolveAnthropicMessagesMaxTokens | (private) |
| 286 | fn | adjustMaxTokensForThinking | (private) |
| 309 | fn | isAnthropicOAuthToken | (private) |
| 315 | fn | isDirectAnthropicModel | (private) |
| 323 | fn | isKimiAnthropicProvider | (private) |
| 332 | fn | useAnthropicServerSideFallback | (private) |
| 336 | fn | supportsReasoningContentReplay | (private) |
| 342 | fn | buildAnthropicBetaHeader | (private) |
| 355 | fn | toClaudeCodeName | (private) |
| 359 | fn | convertContentBlocks | (private) |
| 402 | fn | normalizeToolCallId | (private) |
| 406 | fn | convertAnthropicMessages | (private) |
| 605 | fn | ensureNonEmptyAnthropicMessages | (private) |
| 611 | fn | convertAnthropicTools | (private) |
| 634 | fn | parseAnthropicToolCallArguments | (private) |
| 638 | fn | mapStopReason | (private) |
| 658 | fn | tagPendingCommentaryText | (private) |
| 680 | fn | resolveAnthropicBaseUrl | (private) |
| 685 | fn | resolveAnthropicMessagesUrl | pub |
| 690 | fn | withEffectiveAnthropicBaseUrl | (private) |
| 695 | fn | createAbortError | (private) |
| 706 | fn | readAnthropicSseChunk | (private) |
| 716 | fn | onAbort | (private) |
| 753 | fn | parseAnthropicSseEventData | (private) |
| 764 | fn | assertAnthropicSsePendingBufferWithinLimit | (private) |
| 827 | fn | createAnthropicMessagesClient | (private) |
| 866 | fn | formatAnthropicMessagesHttpError | (private) |
| 876 | fn | readAnthropicMessagesErrorBodySnippet | (private) |
| 900 | fn | createAnthropicTransportClient | (private) |
| 1015 | fn | buildAnthropicParams | (private) |
| 1152 | fn | resolveAnthropicTransportOptions | (private) |
| 1224 | fn | createAnthropicMessagesTransportStreamFn | pub |
| 1293 | fn | flushPendingTextEnds | (private) |
| 1299 | fn | eventIndexKey | (private) |
| 1376 | fn | finishReasoningContentSidecars | (private) |

## src/agents/apply-patch.test.ts (731 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | withTempDir | (private) |
| 27 | fn | withWorkspaceTempDir | (private) |
| 36 | fn | buildAddFilePatch | (private) |
| 43 | fn | createMemoryPatchSandbox | (private) |
| 89 | fn | expectOutsideWriteRejected | (private) |
| 99 | fn | expectMissingPath | (private) |

## src/agents/apply-patch.ts (734 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | AddFileHunk | (private) |
| 36 | type | DeleteFileHunk | (private) |
| 41 | type | UpdateFileChunk | (private) |
| 48 | type | UpdateFileHunk | (private) |
| 55 | type | Hunk | (private) |
| 57 | type | ApplyPatchSummary | pub |
| 63 | type | ApplyPatchResult | (private) |
| 69 | type | ApplyPatchToolDetails | (private) |
| 73 | fn | normalizeUpdateComparison | (private) |
| 81 | type | SandboxApplyPatchConfig | (private) |
| 86 | type | ApplyPatchOptions | (private) |
| 115 | fn | createApplyPatchTool | pub |
| 155 | fn | applyPatch | (private) |
| 250 | fn | recordSummary | (private) |
| 267 | fn | formatSummary | (private) |
| 281 | type | PatchFileOps | (private) |
| 288 | fn | resolvePatchFileOps | (private) |
| 355 | fn | ensureDir | (private) |
| 363 | fn | assertPatchParentPath | (private) |
| 382 | fn | assertNoExistingParentAliases | (private) |
| 411 | fn | resolvePatchPath | (private) |
| 454 | fn | assertBoundaryRead | (private) |
| 465 | fn | toDisplayPath | (private) |
| 476 | fn | relativePathEscapesRoot | (private) |
| 485 | fn | parsePatchText | (private) |
| 509 | fn | checkPatchBoundariesLenient | (private) |
| 536 | fn | checkPatchBoundariesStrict | (private) |
| 549 | fn | parseOneHunk | (private) |
| 642 | fn | parseUpdateFileChunk | (private) |

## src/agents/auth-health.test.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | profileStatuses | (private) |
| 36 | fn | profileReasonCodes | (private) |
| 39 | fn | mockFreshCodexCliCredentials | (private) |
| 50 | fn | buildOpenAiCodexOAuthStore | (private) |

## src/agents/auth-profiles.external-cli-sync.test.ts (690 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makeOAuthCredential | (private) |
| 43 | fn | makeStore | (private) |
| 50 | fn | expectSingleProfileCredential | (private) |
| 68 | fn | expectSingleProfile | (private) |
| 86 | fn | expectCredentialFields | (private) |
| 98 | fn | expectReaderPolicyCall | (private) |

## src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts (814 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | makeApiKeyStore | (private) |
| 31 | fn | makeApiKeyProfilesByProviderProvider | (private) |
| 132 | fn | resolveWithAnthropicOrderAndUsage | (private) |
| 155 | fn | resolveMinimaxOrderWithProfile | (private) |

## src/agents/bash-tools.exec-approval-followup.test.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | writeTempSessionStore | (private) |
| 68 | fn | requireRecord | (private) |
| 75 | fn | requireFirstMockCall | (private) |
| 83 | fn | expectGatewayAgentFollowup | (private) |
| 95 | fn | expectGatewayAgentWait | (private) |
| 110 | fn | expectDirectSend | (private) |

## src/agents/bash-tools.exec-foreground-failures.test.ts (668 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | requireTextContent | (private) |
| 47 | fn | requireFailedDetails | (private) |
| 57 | fn | mockSuccessfulSpawn | (private) |
| 81 | fn | expectUnavailableWorkdir | (private) |

## src/agents/bash-tools.exec-host-gateway.test.ts (3103 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | StrictInlineEvalBoundary | (private) |
| 47 | type | SendExecApprovalFollowupResult | (private) |
| 49 | type | BuildExecApprovalFollowupTarget | (private) |
| 51 | type | ExecApprovalFollowupTarget | (private) |
| 52 | type | ShouldResolveExecApprovalUnavailableInline | (private) |
| 54 | type | ExecAutoReviewer | (private) |
| 55 | type | BuildExecApprovalFollowupTargetMock | (private) |
| 58 | type | MockAllowlistSegment | (private) |
| 59 | type | MockAllowlistResult | (private) |
| 68 | type | MockExecHostApprovalContext | (private) |
| 87 | fn | exactCommandMarker | (private) |
| 258 | type | GatewayAllowlistParams | (private) |
| 260 | fn | requireBuildFollowupTargetInput | (private) |
| 268 | fn | requireSentFollowupTarget | (private) |
| 278 | fn | requireSentFollowupText | (private) |
| 286 | fn | requireApprovalFollowupInput | (private) |
| 297 | fn | captureSecurityEvents | (private) |
| 398 | fn | runGatewayAllowlist | (private) |
| 420 | fn | useRealUnavailableApprovalGate | (private) |
| 429 | fn | planAllowlistedNodeVersion | (private) |
| 451 | fn | configurePlanBackedCommand | (private) |
| 495 | fn | runTimedOutStrictInlineEval | (private) |
| 1632 | fn | mockDenylistContext | (private) |

## src/agents/bash-tools.exec-host-gateway.ts (1415 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | type | ProcessGatewayAllowlistParams | (private) |
| 135 | type | ProcessGatewayAllowlistResult | (private) |
| 142 | fn | hasGatewayAllowlistMiss | (private) |
| 155 | fn | resolveGatewayAutoReviewReason | (private) |
| 186 | fn | createOneShotAllowAlwaysDecision | (private) |
| 190 | fn | resolveGatewayEffectiveAllowAlwaysPersistence | (private) |
| 206 | fn | resolveGatewayEnforcedCommand | (private) |
| 227 | fn | formatOutcomeExitLabel | (private) |
| 231 | fn | formatBytes | (private) |
| 238 | fn | formatDiagnosticsContents | (private) |
| 261 | fn | formatDiagnosticsPrivacy | (private) |
| 282 | fn | formatDiagnosticsExportSuccess | (private) |
| 322 | fn | emitGatewayExecApprovalSecurityEvent | (private) |
| 375 | fn | formatDiagnosticsExportFailure | (private) |
| 390 | fn | buildGatewayExecApprovalFollowupSummary | (private) |
| 418 | fn | shouldAwaitGatewayApprovalInline | (private) |
| 434 | fn | buildGatewayExecApprovalDeniedToolResult | (private) |
| 454 | fn | resolveGatewayExecApprovalFollowupText | (private) |
| 478 | fn | processGatewayAllowlist | pub |
| 574 | fn | applyTimedOutAllowlistFallback | (private) |
| 598 | fn | commitExecutionAuthorization | (private) |
| 894 | fn | registerGatewayApproval | (private) |
| 1030 | fn | resolveApprovalForExecution | (private) |
| 1214 | fn | denyApprovalStateWriteFailure | (private) |

## src/agents/bash-tools.exec-host-node-phases.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | NodeExecutionTarget | (private) |
| 56 | type | PreparedNodeRun | (private) |
| 68 | type | NodeApprovalAnalysis | (private) |
| 81 | fn | resolveNodeRunTimeoutSec | (private) |
| 90 | fn | resolveNodeInvokeTimeoutMs | (private) |
| 99 | fn | resolveNodeRunTimeoutMs | (private) |
| 105 | type | NodePolicyCommandEval | (private) |
| 111 | type | NodeAllowAlwaysCoverage | (private) |
| 116 | fn | hasExactCommandDurableApproval | (private) |
| 137 | fn | extractPreparedNodeShellPayload | (private) |
| 151 | fn | buildNodeApprovalAnalysisEnv | (private) |
| 161 | fn | hasNodeAllowAlwaysCommandApproval | (private) |
| 212 | fn | shouldSkipNodeApprovalPrepare | pub |
| 223 | fn | formatNodeRunToolResult | pub |
| 261 | fn | resolveNodeExecutionTarget | pub |
| 341 | fn | buildNodeSystemRunInvoke | pub |
| 394 | fn | invokeNodeSystemRunDirect | pub |
| 421 | fn | prepareNodeSystemRun | pub |
| 465 | fn | analyzeNodeApprovalRequirement | pub |
| 491 | fn | addCommandEval | (private) |

## src/agents/bash-tools.exec-host-node.test.ts (3851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | StrictInlineEvalBoundary | (private) |
| 14 | type | ExecAutoReviewer | (private) |
| 15 | type | ExecAutoReviewDecision | (private) |
| 16 | type | ExecAsk | (private) |
| 17 | type | ExecSecurity | (private) |
| 18 | type | MockAllowAlwaysPersistenceInput | (private) |
| 21 | type | MockAllowAlwaysPersistenceDecision | (private) |
| 23 | type | MockExecApprovalDecision | (private) |
| 24 | type | MockExecApprovalUnavailableDecision | (private) |
| 26 | type | MockAllowlistSegment | (private) |
| 31 | type | MockAllowlistResult | (private) |
| 39 | type | MockExecAllowlistEntry | (private) |
| 45 | type | MockExecApprovalsResolved | (private) |
| 55 | type | ShellAllowlistMockParams | (private) |
| 60 | type | RequiresExecApprovalMockParams | (private) |
| 325 | type | MockNodeInvokeParams | (private) |
| 330 | type | GatewayToolCall | (private) |
| 337 | fn | requireGatewayCall | (private) |
| 351 | fn | requireGatewayCommand | (private) |
| 368 | fn | requireRunParams | (private) |
| 378 | fn | requireRegisteredApprovalRequest | (private) |
| 389 | fn | expectSystemRunInvoke | (private) |
| 395 | fn | mockGatewayInvokesWithNodeApprovals | (private) |
| 423 | fn | usePolicyApprovalRequirementMock | (private) |
| 442 | fn | buildAllowlistEvalResult | (private) |

## src/agents/bash-tools.exec-host-node.ts (707 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | NodeGatewayDispatchAuthority | (private) |
| 52 | type | NodeGatewayPolicyCheckpoint | (private) |
| 58 | fn | assertCurrentNodeGatewayPolicyAllowsDispatch | (private) |
| 101 | fn | resolveNodeAutoReviewReason | (private) |
| 121 | fn | execSecurityFloorRank | (private) |
| 133 | fn | nodePolicyBlocksAutoReview | (private) |
| 152 | fn | executeNodeHostCommand | pub |
| 247 | fn | registerNodeApproval | (private) |

## src/agents/bash-tools.exec-host-shared.test.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | fn | firstExecApprovalFollowupCall | (private) |
| 492 | fn | buildDisabledSurfaceApprovalResult | (private) |

## src/agents/bash-tools.exec-host-shared.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | rememberExecApprovalFollowupFailureKey | (private) |
| 60 | type | ExecHostApprovalContext | (private) |
| 68 | type | ExecApprovalPendingState | (private) |
| 75 | type | ExecApprovalRequestState | (private) |
| 82 | type | ExecApprovalUnavailableReason | (private) |
| 88 | type | RegisteredExecApprovalRequestContext | (private) |
| 100 | type | ExecApprovalFollowupTarget | (private) |
| 118 | type | ExecApprovalFollowupResultDeps | (private) |
| 124 | type | DefaultExecApprovalRequestArgs | (private) |
| 133 | fn | createExecApprovalPendingState | (private) |
| 147 | fn | createExecApprovalRequestState | (private) |
| 163 | fn | createExecApprovalRequestContext | (private) |
| 188 | fn | createDefaultExecApprovalRequestContext | (private) |
| 202 | fn | resolveBaseExecApprovalDecision | (private) |
| 226 | fn | resolveExecHostApprovalContext | pub |
| 248 | fn | resolveApprovalDecisionOrUndefined | pub |
| 268 | fn | resolveExecApprovalUnavailableState | (private) |
| 300 | fn | createAndRegisterDefaultExecApprovalRequest | pub |
| 344 | fn | buildDefaultExecApprovalRequestArgs | pub |
| 357 | fn | buildExecApprovalFollowupTarget | pub |
| 375 | fn | createExecApprovalDecisionState | pub |
| 391 | fn | enforceStrictInlineEvalApprovalBoundary | pub |
| 418 | fn | shouldResolveExecApprovalUnavailableInline | pub |
| 428 | fn | buildHeadlessExecApprovalDeniedMessage | pub |
| 449 | fn | sendExecApprovalFollowupResult | pub |
| 495 | fn | buildExecApprovalPendingToolResult | pub |

## src/agents/bash-tools.exec-runtime.test.ts (929 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | createDeferred | (private) |
| 77 | fn | runExecWithExit | (private) |
| 111 | fn | prepareSuspension | (private) |
| 138 | fn | expectExecTarget | (private) |
| 153 | fn | requireSystemEventCall | (private) |
| 161 | fn | requireHeartbeatCall | (private) |
| 472 | fn | runBackgroundedExit | (private) |

## src/agents/bash-tools.exec-runtime.ts (1073 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | fn | resolveExecTimeoutMs | (private) |
| 77 | fn | detectCursorKeyMode | (private) |
| 115 | type | ExecExecutionPath | pub |
| 118 | type | ExecProcessFailureKind | (private) |
| 127 | type | ExecExitFailureKind | (private) |
| 130 | type | ExecProcessOutcome | pub |
| 155 | type | ExecProcessHandle | pub |
| 165 | fn | normalizeExecExitSignal | (private) |
| 172 | fn | emitExecProcessCompleted | (private) |
| 202 | fn | renderExecHostLabel | (private) |
| 207 | fn | renderExecTargetLabel | pub |
| 212 | fn | isRequestedExecTargetAllowed | pub |
| 240 | fn | resolveExecTarget | pub |
| 305 | fn | normalizeNotifyOutput | pub |
| 309 | fn | compactNotifyOutput | (private) |
| 322 | fn | applyShellPath | pub |
| 337 | fn | maybeNotifyOnExit | (private) |
| 389 | fn | createApprovalSlug | pub |
| 394 | fn | buildApprovalPendingMessage | pub |
| 435 | fn | resolveApprovalRunningNoticeMs | pub |
| 445 | fn | joinExecFailureOutput | (private) |
| 449 | fn | classifyExecFailureKind | (private) |
| 471 | fn | formatExecFailureReason | (private) |
| 502 | fn | buildExecExitOutcome | (private) |
| 552 | fn | buildExecRuntimeErrorOutcome | pub |
| 574 | fn | wrapPosixCommandWithPathPrepend | (private) |
| 605 | fn | runExecProcess | pub |
| 697 | fn | emitUpdate | (private) |
| 733 | fn | handleStdout | (private) |
| 749 | fn | handleStderr | (private) |
| 760 | fn | finalizeSandboxExec | (private) |
| 898 | fn | onSupervisorStdout | (private) |

## src/agents/bash-tools.exec-workdir.test.ts (627 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | withTempDir | (private) |
| 22 | fn | sandboxConfig | (private) |
| 30 | fn | backendSandboxConfig | (private) |

## src/agents/bash-tools.exec.approval-id.test.ts (1671 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | normalizeMessageChannel | (private) |
| 50 | fn | isGatewayMessageChannel | (private) |
| 119 | fn | stdoutFor | (private) |
| 181 | fn | buildPreparedSystemRunPayload | (private) |
| 195 | fn | writeExecApprovalsConfig | (private) |
| 201 | fn | acceptedApprovalResponse | (private) |
| 205 | fn | getResultText | (private) |
| 209 | fn | expectPendingApprovalText | (private) |
| 248 | fn | expectPendingCommandText | (private) |
| 261 | fn | mockGatewayOkCalls | (private) |
| 268 | fn | createElevatedAllowlistExecTool | (private) |
| 277 | fn | expectGatewayExecWithoutApproval | (private) |
| 300 | fn | expectGatewayAskAlwaysPrompt | (private) |
| 326 | fn | mockAcceptedApprovalFlow | (private) |
| 348 | fn | mockPendingApprovalRegistration | (private) |
| 362 | fn | mockNoApprovalRouteRegistration | (private) |
| 374 | fn | requireRecord | (private) |
| 381 | fn | expectRecordFields | (private) |

## src/agents/bash-tools.exec.resolve-env-hook.test.ts (951 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | interface | PluginHookChannelSenderContext | (private) |
| 20 | type | CapturedNodeHostParams | (private) |
| 123 | fn | installResolveExecEnvHook | (private) |

## src/agents/bash-tools.exec.script-preflight.test.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | createPreflightTool | (private) |
| 35 | fn | runExecPreflight | (private) |
| 42 | fn | expectSymlinkSwapDuringPreflightToAvoidErrors | (private) |

## src/agents/bash-tools.exec.security-floor.test.ts (661 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | installAllowlistedGogFixture | (private) |
| 39 | fn | writeExecApprovalsFixture | (private) |
| 45 | fn | writeDenyExecApprovalsFixture | (private) |
| 53 | fn | writeFullAskExecApprovalsFixture | (private) |
| 61 | fn | installSecureAdapterFixture | (private) |

## src/agents/bash-tools.exec.ts (2288 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | type | ExecToolArgs | (private) |
| 124 | fn | buildSubprocessChannelContext | (private) |
| 136 | fn | buildChannelContextEnv | (private) |
| 146 | type | ResolvedExecEnvPreparedState | (private) |
| 151 | type | DeferredResolveExecEnvPreparedState | (private) |
| 158 | type | ResolvedExecWorkdirPreparedState | (private) |
| 177 | fn | isExecToolArgsObject | (private) |
| 181 | fn | filterPluginExecEnv | (private) |
| 202 | fn | markResolveExecEnvPrepared | (private) |
| 210 | fn | getResolvedExecEnvPreparedState | (private) |
| 216 | fn | isResolveExecEnvPrepared | (private) |
| 220 | fn | markDeferredResolveExecEnvPrepared | (private) |
| 228 | fn | getDeferredResolveExecEnvPreparedState | (private) |
| 234 | fn | markResolvedExecWorkdirPrepared | (private) |
| 242 | fn | getResolvedExecWorkdirPreparedState | (private) |
| 248 | fn | buildExecForegroundResult | (private) |
| 310 | fn | getNodeErrorCode | (private) |
| 317 | type | FsSafeModule | (private) |
| 323 | fn | loadFsSafeModule | (private) |
| 327 | fn | shouldSkipScriptPreflightPathError | (private) |
| 338 | fn | resolvePreflightRelativePath | (private) |
| 348 | fn | hasLeadingTildePathSegment | (private) |
| 352 | fn | readLiteralTildePreflightScript | (private) |
| 387 | fn | isShellEnvAssignmentToken | (private) |
| 391 | fn | isEnvExecutableToken | (private) |
| 400 | fn | stripPreflightEnvPrefix | (private) |
| 442 | fn | findFirstPythonScriptArg | (private) |
| 474 | fn | findNodeScriptArgs | (private) |
| 548 | fn | extractInterpreterScriptTargetFromArgv | (private) |
| 583 | fn | extractInterpreterScriptPathsFromSegment | (private) |
| 597 | fn | extractScriptTargetFromCommand | (private) |
| 607 | fn | pushToken | (private) |
| 671 | fn | extractUnquotedShellText | (private) |
| 726 | fn | splitShellSegmentsOutsideQuotes | (private) |
| 736 | fn | pushSegment | (private) |
| 816 | fn | isInterpreterExecutable | (private) |
| 823 | fn | hasUnescapedSequence | (private) |
| 845 | fn | hasUnquotedScriptHint | (private) |
| 909 | fn | resolveLeadingShellSegmentExecutable | (private) |
| 932 | fn | analyzeInterpreterHeuristicsFromUnquoted | (private) |
| 961 | fn | extractShellWrappedCommandPayload | (private) |
| 1010 | fn | shouldFailClosedInterpreterPreflight | (private) |
| 1185 | fn | validateScriptFileForShellBleed | (private) |
| 1297 | fn | shouldSkipExecScriptPreflight | (private) |
| 1305 | fn | resolveExecReviewerDefaults | (private) |
| 1317 | fn | resolveNotifyOnExitEmptySuccess | (private) |
| 1325 | fn | createExecTool | pub |
| 1410 | fn | buildUnavailableWorkdirResult | (private) |
| 1559 | fn | resolveFinalHost | (private) |
| 1601 | fn | getWarningText | (private) |
| 2166 | fn | onAbortSignal | (private) |
| 2181 | fn | cleanupToolRunListeners | (private) |
| 2200 | fn | resolveRunning | (private) |
| 2222 | fn | onYieldNow | (private) |

## src/agents/bash-tools.process.ts (787 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | ProcessToolDefaults | pub |
| 57 | fn | resolveLogSliceWindow | (private) |
| 68 | fn | defaultTailNote | (private) |
| 77 | type | RunningSessionRuntime | (private) |
| 84 | fn | resolveSessionStdin | (private) |
| 88 | fn | isWritableStdin | (private) |
| 98 | fn | runningSessionInputDetails | (private) |
| 107 | fn | resolvePollWaitMs | (private) |
| 120 | fn | failText | (private) |
| 132 | fn | recordPollRetrySuggestion | (private) |
| 141 | fn | resetPollRetrySuggestion | (private) |
| 150 | fn | createAbortError | (private) |
| 157 | fn | sleepPollInterval | (private) |
| 162 | fn | cleanup | (private) |
| 170 | fn | onResolve | (private) |
| 185 | fn | createProcessTool | pub |
| 199 | fn | isInScope | (private) |
| 215 | fn | buildInputWaitHint | (private) |
| 223 | fn | cancelManagedSession | (private) |
| 232 | fn | terminateSessionFallback | (private) |
| 348 | fn | resolveBackgroundedWritableStdin | (private) |

## src/agents/bash-tools.test.ts (1103 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 100 | type | SpawnInput | (private) |
| 107 | fn | immediate | (private) |
| 111 | fn | readPathKey | (private) |
| 113 | fn | readEnvPath | (private) |
| 114 | fn | writeEnvPath | (private) |
| 117 | fn | extractCommand | (private) |
| 118 | fn | parseShellSingleQuoted | (private) |
| 138 | fn | unwrapSnapshotEvalCommand | (private) |
| 148 | fn | splitCommands | (private) |
| 158 | fn | applySegmentShellEffects | (private) |
| 169 | fn | stdoutForSegment | (private) |
| 182 | fn | commandOutput | (private) |
| 265 | fn | shellEcho | (private) |
| 280 | fn | nextCallId | (private) |
| 282 | type | ExecToolInstance | (private) |
| 283 | type | ProcessToolInstance | (private) |
| 284 | type | ExecToolArgs | (private) |
| 285 | type | ProcessToolArgs | (private) |
| 286 | type | ExecToolConfig | (private) |
| 287 | type | ExecToolRunOptions | (private) |
| 288 | type | LabeledCase | (private) |
| 292 | fn | createDisallowedElevatedExecTool | (private) |
| 300 | fn | createNotifyOnExitExecTool | (private) |
| 308 | fn | createScopedToolSet | (private) |
| 319 | fn | joinCommands | (private) |
| 320 | fn | normalizeText | (private) |
| 328 | type | ToolTextContent | (private) |
| 329 | fn | readTextContent | (private) |
| 331 | fn | readNormalizedTextContent | (private) |
| 333 | fn | readTrimmedLines | (private) |
| 335 | fn | waitOneTurn | (private) |
| 339 | fn | readTotalLines | (private) |
| 340 | fn | readProcessStatus | (private) |
| 341 | fn | readProcessStatusOrRunning | (private) |
| 343 | fn | expectTextContainsValues | (private) |
| 359 | type | ProcessSessionSummary | (private) |
| 360 | fn | hasSession | (private) |
| 362 | fn | executeExecTool | (private) |
| 364 | fn | executeExecCommand | (private) |
| 369 | fn | executeProcessTool | (private) |
| 371 | type | ProcessPollResult | (private) |
| 372 | fn | listProcessSessions | (private) |
| 376 | fn | pollProcessSession | (private) |
| 389 | fn | applyDefaultShellEnv | (private) |
| 396 | fn | useCapturedEnv | (private) |
| 409 | fn | waitForCompletion | (private) |
| 420 | fn | requireSessionId | (private) |
| 426 | fn | requireRunningSessionId | (private) |
| 431 | fn | hasNotifyEventForPrefix | (private) |
| 435 | fn | waitForNotifyEvent | (private) |
| 452 | fn | startBackgroundCommand | (private) |
| 457 | fn | expectNotifyOnExitWake | (private) |
| 472 | fn | drainNotifyEvents | (private) |
| 481 | fn | runBackgroundCommandToCompletion | (private) |
| 487 | type | ProcessLogWindow | (private) |
| 488 | fn | readProcessLog | (private) |
| 497 | type | LongLogExpectationCase | (private) |
| 504 | type | ShortLogExpectationCase | (private) |
| 510 | type | ProcessLogSnapshot | (private) |
| 517 | type | DisallowedElevationCase | (private) |
| 524 | type | NotifyNoopCase | (private) |
| 592 | fn | expectNotifyNoopEvents | (private) |
| 606 | fn | runDisallowedElevationCase | (private) |
| 627 | fn | runShortLogExpectationCase | (private) |
| 650 | fn | seedFinishedLogSession | (private) |
| 675 | fn | runLongLogExpectationCase | (private) |
| 694 | fn | runNotifyNoopCase | (private) |
| 820 | fn | drainPendingHeartbeatWakes | (private) |

## src/agents/bootstrap-budget.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 529 | fn | injectLegacyWarning | (private) |
| 542 | fn | cacheHitRate | (private) |

## src/agents/bootstrap-files.test.ts (813 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | registerExtraBootstrapFileHook | (private) |
| 48 | fn | registerMalformedBootstrapFileHook | (private) |
| 77 | fn | registerDuplicateBootstrapFileHook | (private) |
| 100 | fn | registerBootstrapFileHook | (private) |
| 115 | fn | createHeartbeatAgentsWorkspace | (private) |
| 122 | fn | writeCompletedWorkspaceState | (private) |
| 129 | fn | writeLegacyCompletedWorkspaceState | (private) |
| 142 | fn | expectHeartbeatExcludedAndAgentsKept | (private) |

## src/agents/btw.test.ts (2739 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 250 | type | RunBtwSideQuestionParams | (private) |
| 271 | fn | makeAsyncEvents | (private) |
| 283 | fn | createSessionEntry | (private) |
| 292 | fn | createAssistantDoneEvent | (private) |
| 311 | fn | createDoneEvent | (private) |
| 315 | fn | createThinkingOnlyDoneEvent | (private) |
| 319 | fn | mockDoneAnswer | (private) |
| 323 | fn | mockCliOutput | (private) |
| 331 | fn | registerCodexSideQuestionHarness | (private) |
| 346 | fn | supportsPreparedOpenAIAuth | (private) |
| 367 | fn | runSideQuestion | (private) |
| 382 | fn | runMathSideQuestion | (private) |
| 389 | fn | clearBuiltSessionMessages | (private) |
| 393 | fn | createUserTranscriptMessage | (private) |
| 401 | fn | createAssistantTranscriptMessage | (private) |
| 425 | fn | createTranscriptEntry | (private) |
| 434 | fn | mockTranscriptEntries | (private) |
| 438 | fn | mockActiveTranscript | (private) |
| 445 | fn | mockCall | (private) |
| 456 | fn | mockArg | (private) |
| 464 | fn | runMathSideQuestionAndCaptureContext | (private) |
| 471 | fn | expectRecordFields | (private) |
| 485 | fn | streamContext | (private) |
| 499 | fn | contextMessages | (private) |
| 507 | fn | expectTextBlockContains | (private) |
| 513 | fn | firstTextBlockIncludes | (private) |
| 522 | fn | expectNoAssistantMessages | (private) |
| 530 | fn | expectSanitizedAssistantContext | (private) |
| 541 | fn | expectSeedOnlyUserContext | (private) |
| 551 | fn | mockOpenAIPlatformProfile | (private) |
| 2183 | fn | onPayload | (private) |

## src/agents/btw.ts (1339 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 96 | fn | collectTextContent | (private) |
| 103 | fn | collectThinkingContent | (private) |
| 110 | fn | buildBtwSystemPrompt | (private) |
| 122 | fn | resolveReturnedAuthProfileSource | (private) |
| 140 | fn | resolveBtwAuthProfileStore | (private) |
| 205 | fn | buildBtwQuestionPrompt | (private) |
| 225 | fn | collectBtwMessageText | (private) |
| 246 | fn | buildBtwCliPrompt | (private) |
| 269 | fn | normalizeBtwContentBlocks | (private) |
| 279 | fn | isBtwTextBlock | (private) |
| 287 | fn | isBtwImageBlock | (private) |
| 299 | fn | sanitizeBtwUserMessage | (private) |
| 336 | fn | sanitizeBtwAssistantMessage | (private) |
| 365 | fn | toSimpleContextMessages | (private) |
| 402 | type | BtwRuntimeAuthPreparation | (private) |
| 404 | type | BtwRuntimeModelMaterialization | (private) |
| 414 | fn | materializeBtwRuntimeModel | (private) |
| 444 | fn | resolveBtwPreparedRuntimeAuth | (private) |
| 475 | fn | resolveRuntimeModel | (private) |
| 585 | type | RunBtwSideQuestionParams | (private) |
| 623 | fn | runCliBtwSideQuestion | (private) |
| 689 | fn | runBtwSideQuestion | pub |
| 800 | fn | resolveRuntimeSelection | (private) |
| 821 | type | BtwHarnessSideQuestionDispatch | (private) |
| 1217 | fn | emitBlockChunk | (private) |

## src/agents/cli-auth-epoch.test.ts (1158 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | expectCliAuthEpoch | (private) |
| 984 | fn | cliConfig | (private) |
| 996 | fn | copyNativeExecutable | (private) |
| 1002 | fn | nativeUtility | (private) |

## src/agents/cli-backends.test.ts (1122 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | RuntimeBackendEntry | (private) |
| 20 | type | SetupBackendEntry | (private) |
| 27 | fn | createBackendEntry | (private) |
| 99 | fn | createRuntimeBackendEntry | (private) |
| 107 | fn | requireCliBackendConfig | (private) |
| 115 | fn | createClaudeCliOverrideConfig | (private) |
| 143 | fn | isTestYoloConfig | (private) |
| 151 | fn | normalizeTestPermissionMode | (private) |
| 160 | fn | normalizeTestClaudeArgs | (private) |
| 222 | fn | normalizeTestClaudeBackendConfig | (private) |
| 234 | fn | readTestGeminiOutput | (private) |
| 257 | fn | normalizeTestGeminiBackendConfig | (private) |

## src/agents/cli-backends.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | CliBackendsDeps | (private) |
| 43 | type | ResolvedCliBackend | pub |
| 64 | type | ResolvedCliBackendLiveTest | (private) |
| 73 | type | CliRuntimeModelBackendBinding | (private) |
| 79 | type | FallbackCliBackendPolicy | (private) |
| 104 | fn | normalizeBundleMcpMode | (private) |
| 114 | fn | resolveSetupCliBackendPolicy | (private) |
| 147 | fn | resolveFallbackCliBackendPolicy | (private) |
| 151 | fn | normalizeBackendKey | (private) |
| 155 | fn | pickBackendConfig | (private) |
| 173 | fn | resolveRegisteredBackend | (private) |
| 180 | fn | resolveCliBackendModelProvider | (private) |
| 187 | fn | addCliRuntimeModelBinding | (private) |
| 204 | fn | listCliRuntimeModelBackendBindings | pub |
| 237 | fn | listCliRuntimeProviderIds | pub |
| 257 | fn | resolveCliRuntimeCanonicalProvider | pub |
| 285 | fn | resolveCliRuntimeModelBackendBinding | pub |
| 325 | fn | isCliRuntimeModelBackendForProvider | pub |
| 334 | fn | mergeBackendConfig | (private) |
| 372 | fn | resolveCliBackendLiveTest | pub |
| 393 | fn | resolveCliBackendConfig | pub |

## src/agents/cli-credentials.test.ts (934 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | readCachedClaudeCliCredentials | (private) |
| 27 | fn | createJwtWithExp | (private) |
| 30 | fn | encode | (private) |
| 35 | fn | mockClaudeCliCredentialRead | (private) |
| 49 | fn | expectFields | (private) |
| 291 | fn | claudeAccessFixture | (private) |
| 295 | fn | claudeRefreshFixture | (private) |

## src/agents/cli-credentials.ts (731 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | resetCliCredentialCachesForTest | (private) |
| 50 | type | ClaudeCliCredential | pub |
| 77 | type | CodexCliCredential | pub |
| 88 | type | MiniMaxCliCredential | (private) |
| 97 | type | GeminiCliCredential | pub |
| 107 | type | ExecSyncFn | (private) |
| 109 | fn | resolveClaudeCliCredentialsPath | (private) |
| 114 | fn | resolveClaudeCliUserSettingsPath | (private) |
| 121 | fn | parseClaudeCliOauthCredential | (private) |
| 169 | fn | resolveCodexHomePath | (private) |
| 181 | fn | codexAuthJsonUsesChatGptTokens | (private) |
| 189 | fn | resolveMiniMaxCliCredentialsPath | (private) |
| 194 | fn | resolveGeminiCliCredentialsPath | (private) |
| 199 | fn | readFileMtimeMs | (private) |
| 207 | fn | readCachedCliCredential | (private) |
| 246 | fn | computeCodexKeychainAccount | (private) |
| 251 | fn | resolveCodexKeychainParams | (private) |
| 263 | fn | decodeJwtExpiryMs | (private) |
| 284 | fn | decodeJwtIdentityClaims | (private) |
| 304 | fn | readCodexKeychainAuthRecord | (private) |
| 333 | fn | resolveCodexFallbackExpiryMs | (private) |
| 338 | fn | readCodexKeychainCredentials | (private) |
| 393 | fn | readCliOauthTokenFields | (private) |
| 413 | fn | readPortalCliOauthCredentials | (private) |
| 425 | fn | readMiniMaxCliCredentials | (private) |
| 430 | fn | readGeminiCliCredentials | (private) |
| 462 | fn | readClaudeCliKeychainCredentials | (private) |
| 478 | fn | readClaudeCliUserApiKeyHelperCredential | (private) |
| 497 | fn | readClaudeCliAccountEmail | (private) |
| 511 | fn | withClaudeAccountEmail | (private) |
| 526 | fn | readClaudeCliCredentials | (private) |
| 562 | fn | readClaudeCliCredentialsCached | pub |
| 595 | fn | readCodexCliCredentials | (private) |
| 660 | fn | readCodexCliCredentialsCached | pub |
| 691 | fn | readMiniMaxCliCredentialsCached | pub |
| 709 | fn | readGeminiCliCredentialsCached | pub |

## src/agents/cli-executable-identity.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | CliExecutableFileIdentity | (private) |
| 24 | type | CliExecutableIdentity | pub |
| 45 | type | ReadIdentityResult | (private) |
| 53 | type | StableBigIntFileStat | (private) |
| 62 | fn | sameOpenedFile | (private) |
| 73 | fn | compareArtifactEntryNames | (private) |
| 77 | fn | readExecutableFileIdentity | (private) |
| 136 | fn | hasPathSeparator | (private) |
| 140 | fn | isDurableRootedCommand | (private) |
| 144 | fn | pathEntriesAreAbsolute | (private) |
| 153 | fn | resolveCommandPath | (private) |
| 174 | fn | hasShebang | (private) |
| 178 | fn | parseShebangInterpreter | (private) |
| 202 | fn | findOwnedPackageRoot | (private) |
| 225 | fn | resolvePackageTreeArtifact | (private) |
| 345 | fn | allowsSelfContainedExecutable | (private) |
| 366 | fn | resolvePosixIdentity | (private) |
| 461 | fn | dedupeFileIdentities | (private) |
| 469 | fn | resolveWindowsIdentity | (private) |
| 547 | fn | resolveCliExecutableIdentity | pub |

## src/agents/cli-output.test.ts (2607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | ParseCliOutputParams | (private) |
| 17 | fn | parseCliJson | (private) |
| 21 | fn | parseCliJsonl | (private) |

## src/agents/cli-output.ts (1690 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | CliUsage | pub |
| 26 | type | CliProcessDiagnostics | (private) |
| 39 | type | CliTerminalFailure | (private) |
| 45 | type | CliOutput | pub |
| 67 | fn | normalizeCliContextValue | (private) |
| 72 | fn | formatCliOutputError | pub |
| 102 | type | CliStreamingDelta | pub |
| 109 | type | CliStreamJsonOutputLimits | pub |
| 116 | type | CliThinkingDelta | pub |
| 122 | type | CliThinkingProgress | pub |
| 126 | type | CliPlanUpdate | pub |
| 131 | type | CliToolUseStartDelta | pub |
| 140 | type | CliToolResultDelta | pub |
| 147 | fn | isClaudeCliProvider | (private) |
| 151 | fn | isGeminiCliProvider | (private) |
| 155 | fn | isGeminiStreamJsonDialect | (private) |
| 164 | fn | isClaudeStreamJsonDialect | (private) |
| 174 | fn | isStreamJsonDialect | (private) |
| 179 | fn | supportsCliJsonlToolEvents | (private) |
| 190 | fn | isClaudeStreamJsonResult | (private) |
| 198 | fn | extractJsonObjectCandidates | (private) |
| 202 | fn | parseJsonRecordCandidates | (private) |
| 234 | fn | readNestedErrorMessage | (private) |
| 256 | fn | unwrapCliErrorText | (private) |
| 270 | fn | toCliUsage | (private) |
| 271 | fn | readNestedCached | (private) |
| 280 | fn | pick | (private) |
| 306 | fn | readCliUsage | (private) |
| 325 | fn | collectCliText | (private) |
| 359 | fn | unwrapNestedCliResultText | (private) |
| 385 | fn | collectExplicitCliErrorText | (private) |
| 432 | fn | readClaudeMaxTurnsFailure | (private) |
| 460 | fn | readClaudeMaxTurnsErrorText | (private) |
| 472 | fn | resolveCliTerminalErrorText | (private) |
| 483 | fn | pickCliSessionId | (private) |
| 502 | fn | shouldUnwrapNestedCliResultText | (private) |
| 512 | fn | resolveCliStreamJsonOutputLimits | pub |
| 522 | fn | streamJsonOutputLimitErrorText | (private) |
| 532 | fn | hasExplicitCliErrorPayload | (private) |
| 544 | fn | parseCliJson | (private) |
| 615 | fn | parseClaudeCliJsonlResult | (private) |
| 653 | fn | parseClaudeCliStreamingDelta | (private) |
| 686 | type | PendingToolUse | (private) |
| 693 | type | ToolUseTracker | (private) |
| 700 | fn | createToolUseTracker | (private) |
| 709 | fn | emitToolStartOnce | (private) |
| 726 | fn | emitToolResultOnce | (private) |
| 746 | fn | isClaudeToolUseBlockType | (private) |
| 750 | fn | isClaudeAssistantToolResultBlockType | (private) |
| 754 | fn | isClaudeToolResultError | (private) |
| 758 | fn | parseToolInputJson | (private) |
| 770 | fn | dispatchClaudeCliStreamingToolEvent | (private) |
| 898 | type | ThinkingTracker | (private) |
| 914 | fn | createThinkingTracker | (private) |
| 923 | fn | resetThinkingBlockState | (private) |
| 931 | fn | resetThinkingTrackerForMessage | (private) |
| 948 | fn | beginClaudeContentBlock | (private) |
| 962 | fn | stopClaudeContentBlock | (private) |
| 966 | fn | resolveClaudeContentBlockIndex | (private) |
| 977 | fn | assembleThinkingTextByIndex | (private) |
| 984 | fn | emitClaudeThinking | (private) |
| 996 | fn | readThinkingProgressTokens | (private) |
| 1007 | fn | emitClaudeThinkingProgress | (private) |
| 1016 | fn | dispatchClaudeCliThinking | (private) |
| 1104 | fn | dispatchGeminiCliStreamingToolEvent | (private) |
| 1149 | fn | isFallbackGeminiCliStreamJsonError | (private) |
| 1155 | fn | preferGeminiCliStreamJsonError | (private) |
| 1165 | fn | readGeminiCliStreamJsonError | (private) |
| 1176 | fn | createCliJsonlStreamingParser | pub |
| 1209 | fn | flushPendingClaudeAssistantText | (private) |
| 1224 | fn | flushPendingClaudeCommentaryText | (private) |
| 1235 | fn | handleParsedRecord | (private) |
| 1438 | fn | flushLines | (private) |
| 1530 | fn | parseCliJsonl | (private) |
| 1639 | fn | parseCliOutput | pub |
| 1674 | fn | extractCliErrorMessage | pub |

## src/agents/cli-runner.before-agent-reply-cron.test.ts (598 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | BeforeAgentReplyResult | (private) |
| 92 | fn | captureRejectedClaudeRun | (private) |
| 115 | fn | makeStubContext | (private) |

## src/agents/cli-runner.context-engine.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | textMessage | (private) |
| 44 | fn | createContextEngine | (private) |
| 58 | fn | createMaintenanceResult | (private) |
| 66 | fn | buildPreparedContext | (private) |
| 122 | fn | expectMessageText | (private) |

## src/agents/cli-runner.helpers.test.ts (733 lines)

_No symbols extracted._

## src/agents/cli-runner.reliability.test.ts (4446 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 103 | type | HookRunnerGlobalStateForTest | (private) |
| 108 | fn | setHookRunnerForTest | (private) |
| 123 | fn | createSessionFile | (private) |
| 174 | fn | buildPreparedContext | (private) |
| 247 | fn | requireRecord | (private) |
| 254 | fn | requireArray | (private) |
| 259 | fn | callArg | (private) |
| 275 | fn | firstSystemEventCall | (private) |
| 283 | fn | expectFailoverAttribution | (private) |
| 298 | fn | expectTextMessage | (private) |
| 305 | fn | readTranscriptMessages | (private) |
| 318 | fn | seedSqliteSessionEntry | (private) |
| 336 | fn | createCliUserTurnRecorder | (private) |
| 1777 | fn | resolveArg | (private) |

## src/agents/cli-runner.spawn.test.ts (6065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | type | ProcessSupervisor | (private) |
| 94 | type | SupervisorSpawnFn | (private) |
| 123 | fn | mockSuccessfulClaudeJsonlRun | (private) |
| 138 | fn | createCancelableLiveRunLifecycle | (private) |
| 160 | fn | buildPreparedCliRunContext | (private) |
| 188 | fn | baseBackend | (private) |
| 292 | fn | requireArgAfter | (private) |
| 304 | fn | requireRegexMatch | (private) |
| 312 | fn | requireRecord | (private) |
| 319 | fn | mockCallArg | (private) |
| 327 | fn | expectRejectsWithFields | (private) |
| 345 | fn | expectPathMissing | (private) |
| 355 | fn | withTempExecApprovalsFile | (private) |
| 373 | fn | withTempOpenClawHome | (private) |
| 382 | type | ModelCallLifecycleEvent | (private) |
| 387 | fn | captureModelCallDiagnostics | (private) |
| 3184 | fn | getProcessSupervisorForTest | (private) |
| 4839 | fn | runTurn | (private) |
| 5365 | fn | onUnhandledRejection | (private) |

## src/agents/cli-runner.ts (1454 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 92 | fn | setCliRunnerTestDeps | pub |
| 97 | fn | restoreCliRunnerTestDeps | pub |
| 106 | fn | isClaudeCliProvider | (private) |
| 110 | fn | resolveReusableCliSessionId | (private) |
| 116 | fn | shouldRetryFreshCliSessionAfterFailover | (private) |
| 139 | fn | formatCliEmptyOutputDiagnostics | (private) |
| 159 | fn | isCliBindingFlushed | pub |
| 187 | fn | flushSessionManagerTranscript | (private) |
| 195 | fn | assertSuccessfulCliRuntimeBindingCurrent | (private) |
| 228 | fn | buildCliHookUserMessage | (private) |
| 236 | fn | buildCliHookAssistantMessage | (private) |
| 260 | fn | isAgentMessage | (private) |
| 264 | fn | buildCliContextEngineUserMessage | (private) |
| 272 | fn | buildCliContextEngineAssistantMessage | (private) |
| 287 | type | CliAgentEndHookParams | (private) |
| 289 | fn | shouldAwaitCliAgentEndHook | (private) |
| 293 | fn | runCliAgentEndHook | (private) |
| 304 | fn | persistApprovedCliUserTurnTranscript | (private) |
| 334 | fn | persistCliAssistantTranscript | (private) |
| 390 | fn | notifyCliUserMessagePersisted | (private) |
| 402 | fn | finalizeCliContextEngineTurn | (private) |
| 466 | fn | runCliAgent | pub |
| 486 | fn | runCliAgentInternal | (private) |
| 562 | fn | recordCleanupError | (private) |
| 598 | fn | runPreparedCliAgent | pub |
| 674 | fn | buildFailedAgentEndEvent | (private) |
| 681 | fn | buildBlockedAgentEndEvent | (private) |
| 763 | fn | resolveCliSourceReplyMirror | (private) |
| 920 | fn | executeCliAttempt | (private) |
| 1220 | fn | finishCliAttempt | (private) |

## src/agents/cli-session.test.ts (626 lines)

_No symbols extracted._

## src/agents/code-mode-namespaces.ts (1174 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | CodeModeNamespaceContext | (private) |
| 54 | type | CodeModeNamespaceScope | (private) |
| 57 | type | CodeModeNamespaceToolInputMapper | (private) |
| 60 | type | CodeModeNamespaceToolCall | (private) |
| 69 | type | CodeModeNamespaceRegistration | (private) |
| 81 | type | RegisteredCodeModeNamespace | (private) |
| 86 | type | SerializedCodeModeNamespaceValue | pub |
| 93 | type | CodeModeNamespaceDescriptor | pub |
| 100 | type | CodeModeNamespaceRuntimeEntry | (private) |
| 107 | type | CodeModeNamespaceCatalogEntry | (private) |
| 123 | type | CodeModeNamespaceRuntime | pub |
| 140 | type | CodeModeNamespaceRegistryState | (private) |
| 154 | fn | normalizeRequiredIdentifier | (private) |
| 162 | fn | normalizeRequiredToolNames | (private) |
| 178 | fn | createCodeModeNamespaceTool | pub |
| 193 | fn | createCodeModeNamespaceCatalogTool | (private) |
| 214 | fn | createCodeModeNamespaceLocalFunction | (private) |
| 230 | fn | isCodeModeNamespaceToolCall | (private) |
| 239 | fn | normalizeRegistration | (private) |
| 271 | fn | registerCodeModeNamespaceForPlugin | pub |
| 291 | fn | listCodeModeNamespaces | (private) |
| 296 | fn | clearCodeModeNamespacesForTest | (private) |
| 308 | fn | clearCodeModeNamespacesForPlugin | pub |
| 317 | fn | promptForRegistration | (private) |
| 326 | fn | registrationHasVisibleRequiredTools | (private) |
| 338 | fn | filterRegistrationsByVisibleTools | (private) |
| 346 | fn | toIdentifier | (private) |
| 366 | fn | uniqueIdentifier | (private) |
| 381 | fn | readSchemaRecord | (private) |
| 385 | fn | readSchemaProperties | (private) |
| 390 | fn | readSchemaString | (private) |
| 396 | fn | readRequiredKeys | (private) |
| 403 | fn | orderedSchemaKeys | (private) |
| 409 | fn | applySchemaDefaults | (private) |
| 423 | fn | mapMcpNamespaceInput | (private) |
| 443 | fn | escapeDocComment | (private) |
| 447 | fn | indent | (private) |
| 451 | fn | renderDocComment | (private) |
| 479 | fn | normalizeDocLines | (private) |
| 490 | fn | collapseDocText | (private) |
| 494 | fn | schemaType | (private) |
| 539 | fn | tsPropertyName | (private) |
| 543 | fn | renderInlineObjectType | (private) |
| 558 | type | McpApiParamDoc | (private) |
| 566 | type | McpApiToolDoc | (private) |
| 576 | type | McpApiServerDoc | (private) |
| 583 | type | CodeModeApiVirtualFile | pub |
| 590 | fn | buildMcpParamDocs | (private) |
| 610 | fn | renderMcpInputType | (private) |
| 628 | fn | renderMcpToolSignature | (private) |
| 639 | fn | renderMcpServerHeader | (private) |
| 680 | fn | renderMcpRootHeader | (private) |
| 692 | fn | renderMcpRootFile | (private) |
| 699 | fn | buildMcpApiResponse | (private) |
| 752 | fn | scopeAtPath | (private) |
| 770 | fn | toolIdentifiersForServer | (private) |
| 783 | type | McpNamespaceModel | (private) |
| 788 | fn | createMcpNamespaceModel | (private) |
| 872 | fn | createMcpNamespaceScope | (private) |
| 880 | interface | AgentRunOptions | (private) |
| 890 | interface | AgentsApi | (private) |
| 909 | fn | createCodeModeApiVirtualFiles | pub |
| 943 | fn | createMcpNamespaceEntry | (private) |
| 971 | fn | describeMcpNamespaceForPrompt | (private) |
| 993 | fn | describeCodeModeNamespacesForPrompt | pub |
| 1020 | fn | assertNamespacePathSegment | (private) |
| 1030 | fn | namespacePathKey | (private) |
| 1034 | fn | serializeNamespaceScopeValue | (private) |
| 1079 | fn | resolveNamespacePath | (private) |
| 1099 | fn | readScope | (private) |
| 1107 | fn | createCodeModeNamespaceRuntime | pub |

## src/agents/code-mode-swarm.test.ts (621 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | workerExec | (private) |
| 33 | fn | workerResume | (private) |
| 48 | fn | expectWaiting | (private) |
| 57 | fn | swarmContext | (private) |

## src/agents/code-mode.test.ts (2943 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | CodeModeNamespaceRegistration | (private) |
| 40 | fn | fakeTool | (private) |
| 56 | fn | pluginTool | (private) |
| 65 | fn | pluginToolWithExecute | (private) |
| 75 | fn | mcpTool | (private) |
| 117 | fn | registerTestNamespace | (private) |
| 124 | fn | resultDetails | (private) |
| 130 | fn | createCodeModeHarness | (private) |
| 153 | fn | runUntilCompleted | (private) |
| 549 | fn | build | (private) |
| 1927 | fn | executionContext | (private) |

## src/agents/code-mode.ts (2370 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | type | CodeModeLanguage | (private) |
| 93 | type | CodeModeConfig | (private) |
| 108 | type | CodeModeBridgeMethod | (private) |
| 119 | type | PendingBridgeRequest | (private) |
| 125 | type | SettledBridgeRequest | (private) |
| 127 | type | PendingBridgeState | (private) |
| 133 | type | CodeModeRunState | (private) |
| 151 | type | CodeModeToolContext | (private) |
| 153 | type | CodeModeFailureCode | pub |
| 162 | type | CodeModeHeadlessResult | pub |
| 177 | type | CodeModeWorkerResult | (private) |
| 204 | type | CodeModeSwarmDeps | (private) |
| 220 | fn | normalizeCodeModeRawConfig | (private) |
| 231 | fn | readCodeModeRawConfig | (private) |
| 241 | fn | readBoolean | (private) |
| 245 | fn | readPositiveInteger | (private) |
| 249 | fn | readLanguages | (private) |
| 260 | fn | resolveCodeModeConfig | pub |
| 307 | fn | toToolSearchConfig | (private) |
| 317 | fn | resolveCodeModeHeadlessConfig | (private) |
| 357 | fn | removeExpiredRuns | (private) |
| 377 | fn | disposeCodeModeRun | (private) |
| 388 | fn | resolveCodeModeSnapshotExpiresAt | (private) |
| 392 | fn | enforceActiveRunLimit | (private) |
| 399 | fn | reserveActiveRunSlot | (private) |
| 412 | fn | jsonByteLength | (private) |
| 416 | class | CodeModeLimitError | (private) |
| 429 | fn | isRuntimeInterruptedError | (private) |
| 433 | fn | codeModeFailureCode | (private) |
| 443 | fn | codeModeFailureMessage | (private) |
| 447 | fn | enforceOutputLimit | (private) |
| 453 | fn | enforceResultLimit | (private) |
| 464 | fn | readCode | (private) |
| 494 | fn | readRunId | (private) |
| 503 | fn | maskCodeLiteralsAndComments | (private) |
| 561 | fn | rejectsModuleAccess | (private) |
| 566 | fn | loadTypeScriptRuntime | (private) |
| 573 | fn | prepareSource | (private) |
| 611 | fn | errorMessage | (private) |
| 618 | fn | codeModeReplayIdForToolCall | (private) |
| 642 | fn | requireCodeModeSwarmEnabled | (private) |
| 648 | fn | resolveCodeModeRequesterSessionKey | (private) |
| 657 | fn | resolveCodeModeSwarmGroupId | (private) |
| 666 | fn | replayedSpawnResult | (private) |
| 675 | fn | readOptionalStringOption | (private) |
| 689 | fn | runAgentSpawnBridge | (private) |
| 785 | fn | runAgentWaitBridge | (private) |
| 807 | fn | runSwarmNoteBridge | (private) |
| 836 | fn | runBridgeRequest | (private) |
| 970 | fn | resolveCodeModeWorkerUrl | (private) |
| 982 | fn | codeModeWorkerUrl | (private) |
| 986 | fn | failedCodeModeWorkerResult | (private) |
| 998 | fn | normalizeCodeModeTimeoutResult | (private) |
| 1014 | fn | normalizeCodeModeWorkerResult | (private) |
| 1018 | fn | runCodeModeWorker | (private) |
| 1042 | fn | finish | (private) |
| 1111 | class | CodeModeHeadlessAbortError | pub |
| 1118 | class | CodeModeHeadlessTimeoutError | pub |
| 1127 | fn | createHeadlessAbortScope | (private) |
| 1132 | fn | onAbort | (private) |
| 1147 | fn | headlessAbortError | (private) |
| 1157 | fn | headlessFailure | (private) |
| 1166 | fn | remainingHeadlessMs | (private) |
| 1174 | fn | awaitHeadlessDeadline | (private) |
| 1205 | fn | runHeadlessWorkerLeg | (private) |
| 1228 | fn | normalizeHeadlessNamespaceValue | (private) |
| 1251 | fn | normalizeHeadlessNamespace | (private) |
| 1257 | fn | mergeHeadlessNamespaces | (private) |
| 1277 | fn | headlessNamespaceFreezePrelude | (private) |
| 1281 | fn | freeze | (private) |
| 1291 | fn | createCodeModeApiFilesForRun | (private) |
| 1300 | fn | runCodeModeScriptHeadless | pub |
| 1442 | fn | snapshotState | (private) |
| 1472 | fn | pendingBridgeRequestsReplaySafe | (private) |
| 1494 | fn | enforceSnapshotStateLimits | (private) |
| 1503 | fn | enforceSnapshotPayloadLimits | (private) |
| 1514 | fn | createPendingBridgeStates | (private) |
| 1566 | fn | storeSnapshotState | (private) |
| 1620 | fn | codeModeWaitingReason | (private) |
| 1626 | fn | pendingToolCalls | (private) |
| 1630 | fn | telemetry | (private) |
| 1637 | fn | renderCodeModeCatalogIndex | (private) |
| 1654 | fn | formatCodeModeCatalogIndex | (private) |
| 1693 | fn | createCodeModeExecDescription | (private) |
| 1728 | fn | runExec | (private) |
| 1830 | fn | usableResumeBudgetMs | (private) |
| 1839 | fn | waitForPending | (private) |
| 1880 | fn | settleCodeModeResult | (private) |
| 1903 | fn | abortedResult | (private) |
| 2065 | fn | runWait | (private) |
| 2186 | fn | createCodeModeTools | pub |
| 2270 | fn | applyCodeModeCatalog | pub |
| 2328 | fn | addClientToolsToCodeModeCatalog | pub |

## src/agents/code-mode.worker.ts (726 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | class | CodeModeWorkerFailure | (private) |
| 38 | class | CodeModeWorkerFailureWithOutput | (private) |
| 53 | class | CodeModeGuestError | (private) |
| 60 | fn | isQuickJsInterruptedError | (private) |
| 64 | type | VmRun | (private) |
| 69 | fn | getQuickJsWasmModule | (private) |
| 81 | fn | formatQuickJsError | (private) |
| 89 | fn | errorMessage | (private) |
| 99 | fn | toJsonSafe | (private) |
| 139 | fn | safe | (private) |
| 154 | fn | asText | (private) |
| 160 | fn | request | (private) |
| 173 | fn | namespaceFunction | (private) |
| 178 | fn | deserializeNamespaceValue | (private) |
| 201 | fn | settle | (private) |
| 239 | fn | normalizeApiPath | (private) |
| 334 | fn | buildUserSource | (private) |
| 338 | fn | createHostRequestHandler | (private) |
| 396 | fn | createVm | (private) |
| 406 | fn | deadlineReached | (private) |
| 440 | fn | restoreVm | (private) |
| 447 | fn | deadlineReached | (private) |
| 469 | fn | takeOutput | (private) |
| 478 | fn | takeOutputSafely | (private) |
| 486 | fn | throwWorkerFailureWithOutput | (private) |
| 521 | fn | readCompletedResult | (private) |
| 542 | fn | waitingResult | (private) |
| 560 | fn | runVmExecution | (private) |
| 607 | fn | runExec | (private) |
| 632 | fn | runResume | (private) |
| 667 | fn | main | (private) |

## src/agents/codex-app-server.extensions.test.ts (794 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | findDiagnostic | (private) |
| 34 | fn | createTempDir | (private) |
| 38 | fn | createBundledTempDir | (private) |

## src/agents/compaction.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | PartialSummaryError | (private) |
| 43 | type | CompactionSummaryResult | (private) |
| 70 | type | CompactionSummarizationInstructions | pub |
| 75 | type | GenerateSummaryCompat | (private) |
| 99 | fn | resolveIdentifierPreservationInstructions | (private) |
| 114 | fn | buildCompactionSummarizationInstructions | (private) |
| 132 | fn | summarizeChunks | (private) |
| 231 | fn | generateSummary | (private) |
| 268 | fn | summarizeWithFallbackResult | (private) |
| 347 | fn | summarizeWithFallback | (private) |
| 354 | fn | extractChunkTimeRange | (private) |
| 372 | fn | format | (private) |
| 379 | fn | summarizeInStages | pub |
| 499 | fn | resolveContextWindowTokens | pub |

## src/agents/context.lookup.test.ts (721 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | DiscoveredModel | (private) |
| 14 | type | ContextModule | (private) |
| 49 | fn | mockContextDeps | (private) |
| 59 | fn | mockContextModuleDeps | (private) |
| 64 | fn | mockDiscoveryDeps | (private) |
| 74 | fn | createContextOverrideConfig | (private) |
| 91 | fn | flushAsyncWarmup | (private) |
| 107 | fn | importContextModule | (private) |
| 112 | fn | importFreshContextModule | (private) |
| 119 | fn | importResolveContextTokensForModel | (private) |

## src/agents/context.test.ts (1109 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | testModelContextWindow | (private) |
| 942 | fn | resolveCached | (private) |

## src/agents/embedded-agent-helpers.formatassistanterrortext.test.ts (775 lines)

_No symbols extracted._

## src/agents/embedded-agent-helpers.isbillingerrormessage.test.ts (1723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | expectMessageMatches | (private) |
| 65 | fn | expectTimeoutFailoverSamples | (private) |
| 75 | fn | expectNotFailoverSample | (private) |
| 81 | fn | classifyFailoverReasonFromHttpStatus | (private) |

## src/agents/embedded-agent-helpers.sanitizeuserfacingtext.test.ts (1100 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 958 | fn | makeToolCall | (private) |
| 964 | fn | makeToolResult | (private) |
| 970 | fn | makeReasoningAssistantTurn | (private) |
| 981 | fn | makePlainAssistantTurn | (private) |

## src/agents/embedded-agent-helpers.validate-turns.test.ts (838 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | asMessages | (private) |
| 12 | fn | makeDualToolUseAssistantContent | (private) |
| 20 | fn | makeDualToolAnthropicTurns | (private) |
| 36 | fn | makeSignedThinkingGatewayToolCall | (private) |
| 43 | fn | expectAssistantToolCallsOmitted | (private) |

## src/agents/embedded-agent-message-tool-source-reply.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | asRecord | (private) |
| 40 | fn | resultConfirmsCurrentSourceRoute | (private) |
| 44 | fn | hasStringValue | (private) |
| 48 | fn | hasConversationIdValue | (private) |
| 52 | fn | hasExplicitMessageRoute | (private) |
| 59 | fn | isMessageToolSourceReplyActionName | (private) |
| 66 | fn | normalizeStatus | (private) |
| 70 | fn | isBareOkDeliveryStatus | (private) |
| 74 | fn | isBareSentDeliveryStatus | (private) |
| 78 | fn | parseJsonRecord | (private) |
| 82 | fn | recordHasDeliveredMessageId | (private) |
| 83 | fn | hasDeliveredId | (private) |
| 107 | fn | deliveryEnvelopeHasCreatedConversationId | (private) |
| 147 | fn | deliveryEnvelopeIndicatesOk | (private) |
| 180 | fn | deliveryEnvelopeIndicatesNonDelivery | (private) |
| 214 | fn | deliveryEnvelopeIndicatesNoOp | (private) |
| 257 | fn | broadcastEntryHasSuccessfulBareOkSend | (private) |
| 271 | fn | deliveryEnvelopeIndicatesSuccessfulBroadcast | (private) |
| 310 | fn | deliveryEnvelopeIndicatesDryRun | (private) |
| 356 | fn | deliveryEnvelopeIndicatesDelivered | (private) |
| 415 | fn | hasMessagingDeliveryReceipt | pub |
| 419 | fn | deliveryEnvelopeIndicatesSessionsSendAccepted | (private) |
| 451 | fn | deliveryEnvelopeIndicatesPartialDelivery | (private) |
| 474 | fn | isDeliveredMessagingToolResult | pub |
| 554 | fn | isDeliveredMessageToolOnlySourceReplyResult | pub |

## src/agents/embedded-agent-runner-extraparams.test.ts (4459 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | fn | firstTransportHookCall | (private) |
| 115 | fn | createTestXaiFastModeWrapper | (private) |
| 141 | fn | stripTestXaiUnsupportedStrictFlag | (private) |
| 159 | fn | createTestXaiPayloadCompatibilityWrapper | (private) |
| 189 | fn | createTestToolStreamWrapper | (private) |
| 212 | fn | resolveAnthropicBetas | (private) |
| 222 | fn | resolveAnthropicServiceTier | (private) |
| 227 | fn | resolveAnthropicFastMode | (private) |
| 231 | fn | isAnthropicOauthApiKey | (private) |
| 235 | fn | isAnthropicGa1MModel | (private) |
| 239 | fn | isDirectAnthropicModel | (private) |
| 244 | fn | createAnthropicBetaHeadersWrapper | (private) |
| 268 | fn | createAnthropicServiceTierWrapper | (private) |
| 293 | fn | createAnthropicFastModeWrapper | (private) |
| 325 | type | WrapProviderStreamFnParams | (private) |
| 329 | fn | installFullProviderRuntimeDepsForTest | (private) |
| 425 | fn | createTestBedrockNoCacheWrapper | (private) |
| 434 | fn | withMinimalProviderRuntimeDepsForTest | (private) |
| 447 | fn | createTestOpenAIProviderWrapper | (private) |
| 496 | fn | createOptionsCaptureAgent | (private) |
| 508 | fn | buildModelConfig | (private) |
| 520 | type | OpenAIResponsesWrapperOptions | (private) |
| 523 | type | OpenAIResponsesWrapperCompat | (private) |
| 620 | fn | runResponsesPayloadMutationCase | (private) |
| 656 | fn | runResolvedModelIdCase | (private) |
| 681 | fn | runParallelToolCallsPayloadMutationCase | (private) |
| 716 | fn | runToolPayloadMutationCase | (private) |
| 746 | fn | runAnthropicHeaderCase | (private) |

## src/agents/embedded-agent-runner.cache.live.test.ts (1437 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | CacheRun | (private) |
| 51 | type | CacheTraceEvent | (private) |
| 61 | type | LiveResolvedModel | (private) |
| 79 | type | UserContent | (private) |
| 81 | fn | makeAssistantHistoryTurn | (private) |
| 88 | fn | makeUserHistoryTurn | (private) |
| 96 | fn | makeImageUserTurn | (private) |
| 108 | fn | buildRunnerSessionPaths | (private) |
| 119 | fn | resolveProviderBaseUrl | (private) |
| 124 | fn | readCacheTraceEvents | (private) |
| 144 | fn | expectCacheTraceStages | (private) |
| 155 | fn | resolveDefaultProviderBaseUrl | (private) |
| 165 | fn | buildEmbeddedModelDefinition | (private) |
| 197 | fn | resolveEmbeddedModelApi | (private) |
| 203 | fn | normalizeLiveUsage | (private) |
| 242 | fn | buildEmbeddedRunnerConfig | (private) |
| 283 | fn | buildEmbeddedCachePrompt | (private) |
| 296 | fn | buildNoisyStructuredPromptVariant | (private) |
| 303 | fn | extractRunPayloadText | (private) |
| 312 | fn | runEmbeddedCacheProbe | (private) |
| 360 | fn | compactLiveCacheSession | (private) |
| 394 | fn | extractFirstToolCall | (private) |
| 398 | fn | buildToolResultMessage | (private) |
| 413 | fn | runToolOnlyTurn | (private) |
| 493 | fn | runOpenAiToolCacheProbe | (private) |
| 552 | fn | runOpenAiCacheProbe | (private) |
| 590 | fn | runOpenAiImageCacheProbe | (private) |
| 631 | fn | runAnthropicCacheProbe | (private) |
| 670 | fn | runAnthropicToolCacheProbe | (private) |
| 729 | fn | runAnthropicImageCacheProbe | (private) |
| 791 | fn | restore | (private) |

## src/agents/embedded-agent-runner.e2e.test.ts (1271 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | EmbeddedRunnerModelResolution | (private) |
| 52 | fn | buildAssistantMessage | (private) |
| 63 | fn | buildAssistantErrorMessage | (private) |
| 107 | fn | installRunEmbeddedMocks | (private) |
| 219 | fn | nextSessionFile | (private) |
| 223 | fn | nextRunId | (private) |
| 224 | fn | nextSessionKey | (private) |
| 226 | fn | runWithOrphanedSingleUserMessage | (private) |
| 263 | fn | textFromContent | (private) |
| 273 | fn | readSessionEntries | (private) |
| 284 | fn | readSessionMessages | (private) |
| 293 | fn | runDefaultEmbeddedTurn | (private) |
| 319 | fn | addAnthropicProvider | (private) |
| 345 | fn | mockSuccessfulEmbeddedAttempt | (private) |
| 356 | fn | firstMockCall | (private) |
| 364 | fn | firstRunEmbeddedAttemptParams | (private) |

## src/agents/embedded-agent-runner.extensions.test.ts (722 lines)

_No symbols extracted._

## src/agents/embedded-agent-runner.run-embedded-agent.auth-profile-rotation.e2e.test.ts (1594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | installRunEmbeddedMocks | (private) |
| 111 | type | RunEmbeddedAgentTestParams | (private) |
| 115 | fn | runEmbeddedAgentInline | (private) |
| 246 | fn | writeAuthStore | (private) |
| 287 | fn | writeCopilotAuthStore | (private) |
| 299 | fn | writeOpenAiCodexAuthStore | (private) |
| 315 | fn | buildCopilotAssistant | (private) |
| 318 | fn | makeErrorAttempt | (private) |
| 333 | fn | mockFailedThenSuccessfulAttempt | (private) |
| 351 | fn | mockPromptErrorThenSuccessfulAttempt | (private) |
| 369 | fn | runAutoPinnedOpenAiTurn | (private) |
| 394 | fn | readUsageStats | (private) |
| 398 | fn | expectProfileP2UsageUnchanged | (private) |
| 403 | fn | runAutoPinnedRotationCase | (private) |
| 429 | fn | runAutoPinnedPromptErrorRotationCase | (private) |
| 459 | fn | mockSingleSuccessfulAttempt | (private) |
| 471 | fn | mockSingleErrorAttempt | (private) |
| 488 | fn | withTimedAgentWorkspace | (private) |
| 509 | fn | withAgentWorkspace | (private) |
| 522 | fn | requireRecord | (private) |
| 529 | fn | requireLogRecord | (private) |
| 542 | fn | expectFailoverError | (private) |
| 576 | fn | runTurnWithCooldownSeed | (private) |

## src/agents/embedded-agent-runner.sanitize-session-history.test.ts (2661 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 135 | fn | nextTimestamp | (private) |
| 144 | fn | sanitizeGithubCopilotHistory | (private) |
| 160 | fn | sanitizeAnthropicHistory | (private) |
| 179 | fn | getAssistantMessage | (private) |
| 184 | fn | getAssistantContentTypes | (private) |
| 325 | fn | makeCompactionSummaryMessage | (private) |
| 333 | fn | sanitizeOpenAIHistory | (private) |
| 346 | fn | getAssistantMessages | (private) |
| 351 | fn | getSingleAssistantUsage | (private) |
| 358 | fn | expectAssistantUsageSnapshot | (private) |

## src/agents/embedded-agent-runner/cli-backend-dispatch.test.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | baseRunParams | (private) |
| 63 | fn | cliRunResult | (private) |
| 213 | fn | runGate | (private) |

## src/agents/embedded-agent-runner/compact.hooks.harness.ts (1107 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | MockResolvedModel | (private) |
| 26 | type | MockMemorySearchManager | (private) |
| 31 | type | MockEmbeddedAgentStreamFn | (private) |
| 109 | fn | createSelectedAgentHarnessMock | (private) |
| 129 | fn | createDefaultSessionMessages | (private) |
| 145 | fn | createMockCompactionSession | (private) |
| 178 | fn | createMockToolDefinitions | (private) |
| 234 | fn | createDefaultCompactionAuthStore | (private) |
| 261 | fn | runCompactWithSafetyTimeoutMock | (private) |
| 270 | fn | cancelAndCreateError | (private) |
| 304 | fn | createCompactHooksRuntimePlan | (private) |
| 423 | fn | resetCompactSessionStateMocks | pub |
| 526 | fn | resetCompactHooksHarnessMocks | pub |
| 599 | fn | loadCompactHooksHarness | pub |

## src/agents/embedded-agent-runner/compact.hooks.test.ts (4272 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | SessionHookEvent | (private) |
| 78 | type | PostCompactionSyncParams | (private) |
| 84 | type | PostCompactionSync | (private) |
| 90 | fn | createDeferred | (private) |
| 103 | fn | mockPendingContextEngineCompaction | (private) |
| 124 | fn | mockPendingNativeCompaction | (private) |
| 139 | fn | expectRecordFields | (private) |
| 150 | fn | mockCallArg | (private) |
| 158 | fn | findMockCall | (private) |
| 166 | fn | mockResolvedModel | (private) |
| 203 | fn | compactionConfig | (private) |
| 215 | fn | wrappedCompactionArgs | (private) |
| 227 | fn | createPreparedCodexCompactionPlans | (private) |
| 266 | fn | runCompactionHooks | (private) |
| 2349 | fn | mockQueuedRouteAwareModel | (private) |

## src/agents/embedded-agent-runner/compact.queued.ts (1072 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 97 | fn | shouldFallbackAfterHarnessCompaction | (private) |
| 103 | fn | lockedCompactionRuntimeFailure | (private) |
| 120 | fn | createCompactionAbortedResult | (private) |
| 128 | fn | resolveManualCompactionActiveRunSessionId | (private) |
| 138 | fn | shouldDeferOwningContextEngineBudgetCompaction | (private) |
| 155 | fn | buildContextEngineCompactionSessionTarget | (private) |
| 173 | fn | disposeContextEngine | (private) |
| 183 | fn | deferOwningContextEngineBudgetCompaction | (private) |
| 242 | fn | mergeSecondaryNativeHarnessCompactionDetails | (private) |
| 272 | fn | compactEmbeddedAgentSession | pub |
| 312 | fn | compactEmbeddedAgentSessionImpl | (private) |
| 355 | fn | compactResolvedContextEngine | (private) |
| 479 | fn | selectHarnessForPreparedAttempts | (private) |
| 510 | fn | prepareRuntimeAuth | (private) |
| 1002 | fn | shouldAttemptNativeHarnessCompaction | (private) |
| 1014 | fn | buildCompactionContextEngineRuntimeContext | (private) |

## src/agents/embedded-agent-runner/compact.ts (1980 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 246 | type | CompactEmbeddedAgentSessionParamsWithSessionFile | (private) |
| 249 | type | PreparedCompactEmbeddedAgentSessionParams | (private) |
| 254 | fn | hasRealConversationContent | (private) |
| 262 | fn | createCompactionDiagId | (private) |
| 266 | fn | resolveCompactionProviderStream | (private) |
| 282 | fn | normalizeObservedTokenCount | (private) |
| 288 | fn | getMessageTextChars | (private) |
| 309 | fn | resolveMessageToolLabel | (private) |
| 317 | fn | summarizeCompactionMessages | (private) |
| 350 | fn | selectTopContributors | (private) |
| 375 | fn | containsRealConversationMessages | (private) |
| 381 | fn | hasExplicitCompactionModel | (private) |
| 385 | fn | resolveCompactionFallbacksOverride | (private) |
| 400 | fn | hasCompactionModelFallbackCandidates | (private) |
| 406 | fn | classifyCompactionFallbackResult | (private) |
| 426 | fn | fallbackFailureToCompactionResult | (private) |
| 439 | fn | compactEmbeddedAgentSessionDirect | pub |
| 576 | fn | compactEmbeddedAgentSessionDirectOnce | (private) |
| 756 | fn | selectHarnessForPreparedAttempts | (private) |
| 785 | fn | prepareRuntimeAuth | (private) |
| 820 | fn | resolvePreparedModel | (private) |
| 851 | fn | resolveRuntimeAuthAttempt | (private) |
| 1380 | fn | buildSystemPromptText | (private) |

## src/agents/embedded-agent-runner/compaction-runtime-context.test.ts (747 lines)

_No symbols extracted._

## src/agents/embedded-agent-runner/compaction-successor-transcript.test.ts (638 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createTmpDir | (private) |
| 29 | fn | makeAssistant | (private) |
| 36 | fn | makeThinkingAssistant | (private) |
| 46 | fn | requireString | (private) |
| 53 | fn | requireValue | (private) |
| 60 | type | TranscriptEntry | (private) |
| 62 | fn | requireEntryByIdAndType | (private) |
| 78 | fn | requireEntryByType | (private) |
| 90 | fn | createCompactedSession | (private) |
| 606 | fn | getThinkingSignatureForTimestamp | (private) |

## src/agents/embedded-agent-runner/context-engine-maintenance.test.ts (1485 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | createQueuedTaskRun | (private) |
| 51 | fn | flushAsyncWork | (private) |
| 57 | fn | waitForAssertion | (private) |
| 79 | fn | requireRecord | (private) |
| 86 | fn | firstMaintainParams | (private) |
| 90 | fn | expectRecordFields | (private) |
| 96 | fn | expectSystemEventContaining | (private) |
| 111 | fn | loadFreshContextEngineMaintenanceModuleForTest | (private) |
| 710 | fn | waitForRealAssertion | (private) |
| 732 | fn | createBackgroundEngine | (private) |

## src/agents/embedded-agent-runner/context-engine-maintenance.ts (737 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | DeferredTurnMaintenanceScheduleParams | (private) |
| 64 | type | DeferredTurnMaintenanceRunState | (private) |
| 72 | type | SessionManagerRewriteLock | (private) |
| 74 | type | DeferredTurnMaintenanceSignal | (private) |
| 75 | type | DeferredTurnMaintenanceProcessLike | (private) |
| 79 | type | DeferredTurnMaintenanceAbortState | (private) |
| 85 | fn | resolveDeferredTurnMaintenanceAbortState | (private) |
| 101 | fn | unregisterDeferredTurnMaintenanceAbortSignalHandlers | (private) |
| 115 | fn | normalizeSessionKey | (private) |
| 119 | fn | resolveDeferredTurnMaintenanceLane | (private) |
| 123 | fn | disposeDeferredMaintenanceContextEngine | (private) |
| 135 | fn | createDeferredTurnMaintenanceAbortSignal | (private) |
| 147 | fn | handleTerminationSignal | (private) |
| 171 | fn | onSigint | (private) |
| 172 | fn | onSigterm | (private) |
| 183 | fn | cleanup | (private) |
| 200 | fn | resetDeferredTurnMaintenanceStateForTest | (private) |
| 221 | fn | waitForDeferredTurnMaintenanceForSession | pub |
| 229 | fn | markDeferredTurnMaintenanceTaskScheduleFailure | (private) |
| 244 | fn | buildTurnMaintenanceTaskDescriptor | (private) |
| 271 | fn | promoteTurnMaintenanceTaskVisibility | (private) |
| 288 | fn | buildContextEngineMaintenanceRuntimeContext | (private) |
| 317 | fn | rewriteSessionManagerEntries | (private) |
| 326 | fn | rewriteRuntimeTranscriptEntries | (private) |
| 342 | fn | executeContextEngineMaintenance | (private) |
| 392 | fn | runDeferredTurnMaintenanceWorker | (private) |
| 409 | fn | surfaceMaintenanceUpdate | (private) |
| 533 | fn | scheduleDeferredTurnMaintenance | (private) |
| 620 | fn | cleanupDeferredTurnMaintenance | (private) |
| 664 | fn | runContextEngineMaintenance | pub |

## src/agents/embedded-agent-runner/delivery-evidence.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | AgentPayloadLike | (private) |
| 29 | type | AgentDeliveryEvidence | pub |
| 58 | type | SourceReplyDeliveryEvidence | (private) |
| 63 | type | ExplicitFinalSourceReplyEvidence | (private) |
| 68 | fn | collectSourceReplyFinalMarkers | (private) |
| 82 | fn | resolveExplicitFinalSourceReplyDeliveryEvidence | pub |
| 93 | fn | hasCompletedSourceReplyDeliveryEvidence | pub |
| 103 | fn | hasCompletedTerminalDeliveryEvidence | pub |
| 114 | fn | hasNonEmptyString | (private) |
| 118 | fn | hasNonEmptyArray | (private) |
| 122 | fn | hasNonEmptyStringArray | (private) |
| 126 | fn | hasVisibleMessagingToolTarget | (private) |
| 152 | fn | hasVisibleAttachmentReference | (private) |
| 165 | fn | collectStringValues | (private) |
| 180 | fn | collectMediaUrlsFromRecord | (private) |
| 209 | fn | collectDeliveredMediaUrls | pub |
| 225 | fn | collectMessagingToolDeliveredMediaUrls | pub |
| 240 | fn | collectPayloadOutcomeMediaUrls | (private) |
| 270 | fn | hasDeliverableAgentPayload | (private) |
| 283 | fn | collectDeliverablePayloadMediaUrls | (private) |
| 300 | fn | collectAutomaticDeliveredMediaUrls | pub |
| 315 | fn | collectAmbiguousAutomaticMediaUrls | pub |
| 325 | fn | hasCompleteAutomaticMediaDeliveryOutcomeEvidence | pub |
| 369 | fn | hasPositiveNumber | (private) |
| 374 | fn | getGatewayAgentResult | pub |
| 387 | fn | hasAgentDeliveryEvidenceShape | (private) |
| 402 | fn | hasVisibleAgentPayload | pub |
| 435 | fn | hasMessagingToolDeliveryEvidence | pub |
| 442 | fn | hasCommittedMessagingToolDeliveryEvidence | pub |
| 455 | fn | collectNonEmptyStringArray | (private) |
| 461 | fn | hasUnaccountedStrings | (private) |
| 481 | fn | hasUnaccountedMessagingToolAggregateEvidence | pub |
| 522 | fn | hasVisibleCommittedMessagingToolDeliveryEvidence | pub |
| 536 | fn | hasGranularMessagingToolDeliveryEvidence | (private) |
| 545 | fn | hasCommittedSourceReplyDeliveryEvidence | pub |
| 555 | fn | hasVisibleOutboundDeliveryEvidence | pub |
| 569 | fn | hasCommittedOutboundDeliveryEvidence | pub |
| 579 | fn | hasOutboundDeliveryEvidence | pub |
| 587 | fn | getAgentCommandDeliveryFailure | pub |

## src/agents/embedded-agent-runner/extra-params.sampling.test.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 494 | fn | firstFastMode | (private) |
| 495 | fn | secondFastMode | (private) |

## src/agents/embedded-agent-runner/extra-params.ts (1180 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | requireBaseStreamFn | (private) |
| 99 | fn | resolveExtraParams | pub |
| 166 | type | CacheRetentionStreamOptions | (private) |
| 176 | type | SupportedTransport | (private) |
| 178 | fn | resolveSupportedTransport | (private) |
| 182 | fn | hasExplicitTransportSetting | (private) |
| 186 | fn | clearPreparedExtraParamsCache | (private) |
| 190 | fn | fingerprintPreparedExtraParamsModel | (private) |
| 215 | fn | resolvePreparedExtraParamsCacheKey | (private) |
| 242 | fn | resolvePreparedExtraParams | pub |
| 355 | fn | sanitizeExtraParamsRecord | (private) |
| 368 | fn | stripRequestScopedExtraParams | (private) |
| 380 | fn | hasRequestScopedExtraParams | (private) |
| 387 | fn | hasFunctionExtraParamValue | (private) |
| 390 | fn | shouldApplyDefaultOpenAIGptRuntimeParams | (private) |
| 400 | fn | applyDefaultOpenAIGptRuntimeParams | (private) |
| 418 | fn | resolveAgentTransportOverride | pub |
| 430 | fn | resolveExplicitSettingsTransport | pub |
| 445 | fn | normalizeStopSequences | (private) |
| 456 | fn | createStreamFnWithExtraParams | (private) |
| 591 | fn | resolveAliasedParamValue | (private) |
| 599 | fn | resolveAliasedParamValueFromKeys | (private) |
| 621 | fn | applyCanonicalAliasedParamValue | (private) |
| 637 | fn | canonicalizeOpenRouterResponseCacheParams | (private) |
| 666 | fn | createParallelToolCallsWrapper | (private) |
| 684 | fn | shouldStripOpenAICompletionsStore | (private) |
| 703 | fn | createOpenAICompletionsStoreCompatWrapper | (private) |
| 715 | fn | sanitizeExtraBodyRecord | (private) |
| 723 | fn | resolveExtraBodyParam | (private) |
| 736 | fn | resolveChatTemplateKwargsParam | (private) |
| 756 | fn | createOpenAICompletionsChatTemplateKwargsWrapper | (private) |
| 779 | fn | createOpenAICompletionsExtraBodyWrapper | (private) |
| 798 | type | ApplyExtraParamsContext | (private) |
| 812 | fn | applyPrePluginStreamWrappers | (private) |
| 844 | fn | applyPostPluginStreamWrappers | (private) |
| 944 | fn | normalizeDeepSeekV4CandidateId | (private) |
| 954 | fn | isDeepSeekV4OpenAICompatibleModel | (private) |
| 958 | fn | isDeepSeekV4OpenAICompletionsModel | (private) |
| 966 | fn | isMicrosoftFoundryProviderId | (private) |
| 987 | fn | deepSeekV4NativeThinkingAllowedByCompat | (private) |
| 992 | fn | resolveDeepSeekV4ThinkingFormatOverride | (private) |
| 1007 | fn | createDeepSeekV4NonNativeCompatSanitizerWrapper | (private) |
| 1024 | fn | shouldSanitizeDeepSeekV4NonNativeFields | (private) |
| 1032 | fn | stripDeepSeekV4ReasoningContent | (private) |
| 1053 | fn | isMiMoReasoningOpenAICompatibleModel | (private) |
| 1062 | fn | isMiMoReasoningAsVisibleTextOpenAICompatibleModel | (private) |
| 1079 | fn | applyExtraParamsToAgent | pub |

## src/agents/embedded-agent-runner/google-prompt-cache.test.ts (743 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | SessionCustomEntry | (private) |
| 21 | type | TestGooglePromptCacheSessionManager | (private) |
| 26 | fn | makeSessionManager | (private) |
| 49 | fn | makeGoogleModel | (private) |
| 65 | fn | createCacheFetchMock | (private) |
| 77 | fn | createOversizedJsonResponse | (private) |
| 98 | fn | createCapturingStreamFn | (private) |
| 120 | fn | callArg | (private) |
| 131 | fn | fetchInit | (private) |
| 139 | fn | fetchUrl | (private) |
| 143 | fn | streamContext | (private) |
| 150 | fn | streamOptions | (private) |
| 154 | fn | preparePromptCacheStream | (private) |

## src/agents/embedded-agent-runner/google-prompt-cache.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | CacheRetention | (private) |
| 42 | type | CustomEntryLike | (private) |
| 44 | type | GooglePromptCacheSessionManager | (private) |
| 48 | type | GooglePromptCacheModel | (private) |
| 53 | type | GooglePromptCacheContext | (private) |
| 54 | type | GooglePromptCacheOptions | (private) |
| 56 | type | GooglePromptCacheEntry | (private) |
| 79 | type | PrepareGooglePromptCacheStreamFnParams | (private) |
| 91 | type | GooglePromptCacheDeps | (private) |
| 96 | fn | resolveGooglePromptCacheTtl | (private) |
| 100 | fn | resolveGooglePromptCacheRefreshWindowMs | (private) |
| 106 | fn | digestSystemPrompt | (private) |
| 110 | fn | resolveManagedSystemPrompt | (private) |
| 117 | fn | resolveExplicitCachedContent | (private) |
| 130 | fn | buildGooglePromptCacheMatchKey | (private) |
| 141 | fn | stringifyGooglePromptCacheKeyPart | (private) |
| 151 | fn | readLatestGooglePromptCacheEntry | (private) |
| 189 | fn | appendGooglePromptCacheEntry | (private) |
| 203 | fn | parseExpireTimeMs | (private) |
| 210 | fn | convertManagedGoogleTools | (private) |
| 225 | fn | mapManagedGoogleToolChoice | (private) |
| 252 | fn | buildManagedGooglePromptCacheConfig | (private) |
| 275 | fn | buildManagedContextForCachedContent | (private) |
| 286 | fn | cancelUnreadResponseBody | (private) |
| 297 | fn | readGooglePromptCacheJson | (private) |
| 305 | fn | resolveGooglePromptCacheAuthHeaders | (private) |
| 343 | fn | buildGooglePromptCacheHeaders | (private) |
| 367 | fn | updateGooglePromptCacheTtl | (private) |
| 402 | fn | createGooglePromptCache | (private) |
| 447 | fn | ensureGooglePromptCache | (private) |
| 571 | fn | prepareGooglePromptCacheStreamFn | pub |

## src/agents/embedded-agent-runner/model.forward-compat.errors-and-overrides.test.ts (817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | createSnapshot | (private) |
| 107 | fn | createRuntimeHooks | (private) |
| 115 | fn | resolveModelForTest | (private) |
| 126 | fn | createAnthropicTemplateModel | (private) |
| 141 | fn | resolveAnthropicModelWithProviderOverrides | (private) |

## src/agents/embedded-agent-runner/model.provider-runtime.test-support.ts (805 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | OpenRouterModelCapabilities | (private) |
| 37 | type | ModelRegistryLike | (private) |
| 41 | type | DynamicModelContext | (private) |
| 54 | type | ResolvedModelLike | (private) |
| 55 | type | NormalizedTransportLike | (private) |
| 60 | type | ProviderRuntimeTestMockOptions | (private) |
| 66 | fn | findTemplate | (private) |
| 82 | fn | cloneTemplate | (private) |
| 96 | fn | isOpenAIChatGptModelTemplate | (private) |
| 103 | fn | isNativeOpenAICodexBaseUrl | (private) |
| 107 | fn | normalizeOpenRouterBaseUrl | (private) |
| 118 | fn | normalizeDynamicModel | (private) |
| 162 | fn | normalizeTransport | (private) |
| 240 | fn | buildDynamicModel | (private) |
| 660 | fn | createProviderRuntimeTestMock | pub |

## src/agents/embedded-agent-runner/model.static-catalog.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | canonicalizeManifestModelCatalogProviderAlias | (private) |
| 64 | fn | setManifestPlugins | (private) |
| 88 | fn | createMistralManifestPlugin | (private) |
| 125 | fn | setConflictingAzureAliasPlugins | (private) |
| 156 | fn | setConditionalSuppressionAliasPlugin | (private) |
| 186 | fn | expectManifestAliasResolution | (private) |

## src/agents/embedded-agent-runner/model.static-catalog.ts (540 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | rowMatchesModel | (private) |
| 48 | fn | normalizeStaticCatalogInput | (private) |
| 57 | fn | normalizeStaticCatalogCost | (private) |
| 69 | fn | modelFromStaticCatalogRow | (private) |
| 89 | fn | modelFromProviderStaticCatalog | (private) |
| 125 | type | StaticCatalogPlugin | (private) |
| 129 | fn | listBundledStaticCatalogPlugins | (private) |
| 161 | fn | bundledStaticCatalogProviderUsesRuntimeAugment | pub |
| 189 | type | BundledStaticCatalogLookup | (private) |
| 194 | type | BundledStaticCatalogContext | (private) |
| 199 | type | BundledStaticCatalogScopedLookup | (private) |
| 204 | type | BundledProviderStaticCatalogResolverParams | (private) |
| 214 | fn | createBundledStaticCatalogModelResolver | pub |
| 260 | fn | resolveBundledStaticCatalogModel | pub |
| 277 | fn | resolveBundledProviderStaticCatalogPluginIds | (private) |
| 311 | fn | loadBundledProviderStaticCatalogModels | (private) |
| 361 | fn | loadBundledProviderStaticCatalogContextModels | pub |
| 398 | fn | createScopedBundledProviderStaticCatalogModelResolver | (private) |
| 453 | fn | createBundledProviderStaticCatalogModelResolver | (private) |
| 460 | fn | resolveOwnedNestedProviderLookup | (private) |
| 476 | fn | resolveBundledOwners | (private) |
| 500 | fn | createBundledProviderStaticCatalogContextResolver | pub |
| 532 | fn | resolveBundledProviderStaticCatalogModel | pub |

## src/agents/embedded-agent-runner/model.test.ts (5013 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | isQwenCodingPlanBaseUrl | (private) |
| 60 | fn | resolveConfiguredQwenBaseUrl | (private) |
| 79 | fn | isUnsupportedXaiMultiAgentModel | (private) |
| 152 | fn | createSnapshot | (private) |
| 213 | type | OpenRouterModelCapabilities | (private) |
| 295 | fn | createRuntimeHooks | (private) |
| 315 | fn | resolveModelForTest | (private) |
| 331 | fn | mockDiscoveredGroqModel | (private) |
| 351 | fn | resolveModelAsyncForTest | (private) |
| 373 | type | ResolveModelForTestResult | (private) |
| 377 | fn | expectResolvedModel | (private) |
| 387 | fn | expectRecordFields | (private) |
| 398 | fn | mockCallArg | (private) |
| 489 | fn | providerConfig | (private) |

## src/agents/embedded-agent-runner/model.ts (2059 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | ProviderRuntimeHooks | (private) |
| 95 | type | StaticCatalogFallbackModel | (private) |
| 135 | fn | createEmptyAgentDiscoveryStores | pub |
| 150 | fn | resolveRuntimeHooks | (private) |
| 167 | fn | resolvePreparedAgentSnapshot | (private) |
| 192 | fn | canonicalizeLegacyResolvedModel | (private) |
| 207 | fn | applyResolvedTransportFallback | (private) |
| 243 | fn | normalizeResolvedModel | (private) |
| 340 | fn | resolveProviderTransport | (private) |
| 374 | fn | resolveConfiguredProviderDefaultApi | (private) |
| 401 | fn | normalizeTransportBaseUrl | (private) |
| 409 | fn | resolveProviderRequestTimeoutMs | (private) |
| 413 | fn | matchesProviderScopedModelId | (private) |
| 434 | fn | findInlineModelMatch | (private) |
| 439 | fn | matchesModelId | (private) |
| 458 | fn | resolveConfiguredProviderConfig | (private) |
| 473 | fn | isModelsAddMetadataModel | (private) |
| 481 | fn | findConfiguredProviderModel | (private) |
| 495 | fn | mergeStaticCatalogInlineModel | (private) |
| 522 | fn | hasConfiguredFallbackSurface | (private) |
| 537 | fn | readModelParams | (private) |
| 544 | fn | mergeModelParams | (private) |
| 551 | fn | findConfiguredAgentModelParams | (private) |
| 593 | fn | mergeConfiguredRuntimeModelParams | (private) |
| 613 | fn | markDiscoveredMaxTokensSource | (private) |
| 620 | fn | applyConfiguredProviderOverrides | (private) |
| 896 | type | ExplicitModelResolution | (private) |
| 901 | fn | shouldSuppressInlineConfiguredModel | (private) |
| 933 | fn | resolveExplicitModelWithRegistry | (private) |
| 1118 | fn | resolveDynamicModelAuthProfile | (private) |
| 1177 | fn | resolvePluginDynamicModelWithRegistry | (private) |
| 1258 | fn | resolveRuntimePreferredSuppressedModel | (private) |
| 1288 | fn | shouldDropRuntimePreferredExplicitMiss | (private) |
| 1300 | fn | resolveConfiguredFallbackModel | (private) |
| 1473 | fn | shouldCompareProviderRuntimeResolvedModel | (private) |
| 1497 | fn | normalizeProviderModelRef | (private) |
| 1523 | type | ResolveModelWithRegistryParams | (private) |
| 1538 | fn | resolveModelWithPreparedRegistry | (private) |
| 1585 | fn | resolveModelWithRegistry | pub |
| 1599 | fn | resolveModel | pub |
| 1682 | fn | resolveModelAsync | pub |
| 1815 | fn | resolveStaticCatalogModel | (private) |
| 1838 | fn | resolveStaticCatalogFallbackModel | (private) |
| 1864 | fn | resolveDynamicAttempt | (private) |
| 1966 | fn | buildUnknownModelError | (private) |
| 2010 | fn | buildMissingProviderModelRegistrationHint | (private) |

## src/agents/embedded-agent-runner/replay-history.test.ts (555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | bedrockAssistant | (private) |
| 46 | fn | userMessage | (private) |
| 50 | fn | openclawTranscriptAssistant | (private) |

## src/agents/embedded-agent-runner/replay-history.ts (972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | CustomEntryLike | (private) |
| 73 | type | ModelSnapshotEntry | (private) |
| 79 | type | AssistantReplayMessage | (private) |
| 81 | type | ProviderReplayHookParams | (private) |
| 92 | fn | createProviderReplayPluginParams | (private) |
| 112 | fn | annotateInterSessionUserMessages | (private) |
| 183 | fn | sanitizeUserReplayContent | (private) |
| 216 | fn | normalizeAssistantReplayTextContent | (private) |
| 228 | fn | normalizeAssistantReplayBlockContent | (private) |
| 265 | fn | isBareDeliveryMirrorDuplicate | (private) |
| 291 | fn | normalizeAssistantReplayContent | pub |
| 407 | fn | isReplayDroppableTrailingAssistant | (private) |
| 442 | fn | isStreamErrorSentinelContent | (private) |
| 454 | fn | normalizeAssistantUsageSnapshot | (private) |
| 476 | fn | normalizeAssistantUsageCost | (private) |
| 511 | fn | toFiniteCostNumber | (private) |
| 515 | fn | ensureAssistantUsageSnapshots | (private) |
| 583 | fn | createProviderReplaySessionState | (private) |
| 619 | fn | readLastModelSnapshot | (private) |
| 638 | fn | appendModelSnapshot | (private) |
| 646 | fn | isSameModelSnapshot | (private) |
| 647 | fn | normalize | (private) |
| 655 | fn | formatOpenAIResponsesReplayInvariantError | (private) |
| 666 | fn | assertOpenAIResponsesToolUseResultInvariant | (private) |
| 731 | fn | sanitizeSessionHistory | pub |
| 929 | fn | validateReplayTurns | pub |

## src/agents/embedded-agent-runner/run-loop.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | runPreparedEmbeddedLoop | pub |
| 115 | fn | refreshPreparedRuntimeSnapshot | (private) |
| 134 | fn | buildEmbeddedContextEngineRuntimeSettings | (private) |
| 257 | fn | resolveContextEnginePluginId | (private) |
| 645 | fn | onError | (private) |

## src/agents/embedded-agent-runner/run.codex-app-server-recovery.test.ts (552 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | codexClientClosedAttempt | (private) |
| 44 | fn | codexTurnCompletionIdleTimeoutAttempt | (private) |
| 70 | fn | successAttempt | (private) |
| 77 | fn | ordinaryPromptFailureAttempt | (private) |
| 85 | fn | asAttemptParams | (private) |

## src/agents/embedded-agent-runner/run.compaction-loop-guard.test.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | recordToolOutcome | (private) |
| 74 | fn | executeWrappedToolOutcome | (private) |

## src/agents/embedded-agent-runner/run.incomplete-turn.test.ts (4386 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | resolveIncompleteTurnPayloadText | (private) |
| 74 | fn | warnMessages | (private) |
| 78 | fn | expectWarnMessageWith | (private) |
| 82 | fn | expectNoWarnMessageWith | (private) |
| 86 | fn | runAttemptCall | (private) |
| 104 | fn | markUserMessagePersisted | (private) |
| 621 | fn | onToolOutcome | (private) |
| 673 | fn | onToolOutcome | (private) |
| 2060 | fn | reasoningOnlyAttempt | (private) |

## src/agents/embedded-agent-runner/run.overflow-compaction.harness.ts (963 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | MockCompactionResult | (private) |
| 59 | type | MockResolvedModel | (private) |
| 68 | type | MockAgentDiscoveryStores | (private) |
| 75 | type | MockResolveModelResult | (private) |
| 119 | type | MockRuntimePlan | (private) |
| 123 | fn | makeMockRuntimePlan | (private) |
| 146 | fn | createMockAgentDiscoveryStores | (private) |
| 156 | fn | createMockResolvedModel | (private) |
| 201 | type | MockTruncateOversizedToolResultsResult | (private) |
| 214 | type | MockFailoverErrorDescription | (private) |
| 221 | type | MockCoerceToFailoverError | (private) |
| 225 | type | MockDescribeFailoverError | (private) |
| 226 | type | MockResolveFailoverStatus | (private) |
| 227 | type | MockAssistantErrorProbe | (private) |
| 228 | class | MockedFailoverError | pub |
| 317 | type | MockGetApiKeyForModelParams | (private) |
| 344 | fn | useOpenAIPlatformAuthFixture | pub |
| 362 | type | AuthProfileOrderResolution | (private) |
| 389 | fn | resetRunOverflowCompactionHarnessMocks | pub |
| 595 | fn | loadRunOverflowCompactionHarness | pub |
| 764 | type | ResolveBindingParams | (private) |
| 765 | type | ProviderCheckParams | (private) |
| 949 | fn | warmRunOverflowCompactionHarness | pub |

## src/agents/embedded-agent-runner/run.overflow-compaction.loop.test.ts (1283 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | requireRecord | (private) |
| 41 | fn | requireMockCallArg | (private) |
| 54 | fn | expectLogIncludes | (private) |
| 58 | fn | expectLogExcludes | (private) |
| 62 | fn | expectRetryContinuesFromTranscript | (private) |
| 71 | fn | expectTruncationScopeSessionFile | (private) |
| 76 | fn | makeUserMessage | (private) |

## src/agents/embedded-agent-runner/run.overflow-compaction.test.ts (4055 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | RuntimePlanAuthOverrides | (private) |
| 76 | type | RuntimePlanOverrides | (private) |
| 81 | fn | mergeRuntimePlanAuth | (private) |
| 90 | fn | makeForwardingCase | (private) |
| 135 | fn | codexHarnessSupportsKnownProviders | (private) |
| 143 | fn | makeForwardedRuntimePlan | (private) |
| 213 | type | MockWithCalls | (private) |
| 219 | fn | mockCall | (private) |
| 227 | fn | mockCallArg | (private) |
| 235 | fn | expectRecordFields | (private) |
| 249 | fn | expectMockCallFields | (private) |
| 257 | fn | queueOpenAIResolvedModel | (private) |
| 276 | fn | expectRuntimePlanFields | (private) |
| 294 | fn | waitForRunEvent | (private) |

## src/agents/embedded-agent-runner/run.timeout-triggered-compaction.test.ts (758 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | useTwoAuthProfiles | (private) |
| 36 | type | CompactRuntimeContext | (private) |
| 65 | type | CompactParams | (private) |
| 74 | type | AttemptParams | (private) |
| 80 | type | HookEvent | (private) |
| 88 | type | HookContext | (private) |
| 93 | fn | compactCallAt | (private) |
| 103 | fn | attemptCallAt | (private) |
| 111 | fn | hookCallAt | (private) |

## src/agents/embedded-agent-runner/runs.test.ts (1154 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | RunHandle | (private) |
| 51 | fn | createRunHandle | (private) |

## src/agents/embedded-agent-runner/runs.ts (969 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | EmbeddedAgentQueueFailureReason | (private) |
| 73 | type | EmbeddedAgentQueueMessageOutcome | pub |
| 90 | type | PreparedEmbeddedAgentQueueMessage | (private) |
| 100 | fn | createQueueFailureOutcome | (private) |
| 114 | fn | formatEmbeddedAgentQueueFailureSummary | pub |
| 123 | fn | setActiveRunSessionKey | (private) |
| 131 | fn | clearActiveRunSessionKeys | (private) |
| 146 | fn | setActiveRunSessionFile | (private) |
| 156 | fn | clearEmbeddedRunAbandonmentBySessionId | (private) |
| 178 | fn | clearEmbeddedRunAbandonmentBySessionKey | (private) |
| 189 | fn | clearEmbeddedRunAbandonmentBySessionFile | (private) |
| 201 | fn | clearEmbeddedRunAbandonment | (private) |
| 214 | fn | markEmbeddedRunAbandoned | (private) |
| 248 | fn | markActiveEmbeddedRunAbandoned | pub |
| 263 | fn | isEmbeddedRunAbandoned | pub |
| 285 | fn | clearActiveRunSessionFiles | (private) |
| 305 | fn | queueEmbeddedAgentMessageWithOutcome | pub |
| 331 | fn | formatQueueError | (private) |
| 335 | fn | isEmbeddedQueueHandleMessageInjectable | (private) |
| 349 | fn | isEmbeddedRunHandleAbortable | (private) |
| 363 | fn | isEmbeddedAgentRunAbortableForRunId | pub |
| 372 | fn | clearEmbeddedAgentRunAbortabilityForRunId | pub |
| 380 | fn | retainEmbeddedAgentRunAbortabilityForRunId | pub |
| 387 | fn | clearEmbeddedRunAbortability | (private) |
| 404 | fn | queueEmbeddedAgentMessageWithOutcomeAsync | pub |
| 433 | fn | prepareEmbeddedAgentQueueMessage | (private) |
| 515 | fn | abortEmbeddedAgentRun | pub |
| 516 | fn | abortEmbeddedAgentRun | pub |
| 520 | fn | abortEmbeddedAgentRun | pub |
| 547 | fn | abortActiveEmbeddedRunHandles | (private) |
| 608 | fn | isEmbeddedAgentRunActive | pub |
| 616 | fn | resolveEmbeddedAgentReplyRunPhase | pub |
| 622 | fn | isEmbeddedAgentRunHandleActive | pub |
| 630 | fn | isEmbeddedAgentRunAbortableForCompaction | pub |
| 639 | fn | isEmbeddedAgentRunStreaming | pub |
| 647 | fn | resolveActiveEmbeddedRunHandleSessionId | pub |
| 655 | fn | resolveActiveEmbeddedRunHandleSessionIdBySessionFile | pub |
| 667 | fn | resolveActiveEmbeddedRunSessionIdBySessionFile | pub |
| 673 | fn | getActiveEmbeddedRunSnapshot | pub |
| 685 | fn | waitForActiveEmbeddedRuns | pub |
| 717 | fn | waitForCurrentEmbeddedAgentRunEnd | (private) |
| 759 | fn | waitForEmbeddedAgentRunEnd | pub |
| 779 | type | AbortAndDrainEmbeddedAgentRunResult | pub |
| 785 | fn | abortAndDrainEmbeddedAgentRun | pub |
| 817 | fn | notifyEmbeddedRunEnded | (private) |
| 832 | fn | setActiveEmbeddedRun | pub |
| 864 | fn | updateActiveEmbeddedRunSnapshot | pub |
| 874 | fn | updateActiveEmbeddedRunSessionFile | pub |
| 886 | fn | clearActiveEmbeddedRun | pub |
| 920 | fn | forceClearEmbeddedAgentRun | (private) |

## src/agents/embedded-agent-runner/session-manager-init.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | makeTempFile | (private) |

## src/agents/embedded-agent-runner/stream-resolution.test.ts (679 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | describeEmbeddedAgentStreamStrategy | (private) |
| 54 | fn | resolveEmbeddedAgentStreamFn | (private) |
| 68 | fn | useNativeStreamFn | (private) |
| 73 | fn | requireRecord | (private) |
| 82 | fn | expectStreamResultRecord | (private) |

## src/agents/embedded-agent-runner/thinking.test.ts (1280 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | AssistantMessage | (private) |
| 19 | fn | dropSingleAssistantContent | (private) |
| 42 | fn | createNoThinkingMessages | (private) |
| 439 | fn | createTestAssistantMessage | (private) |
| 460 | fn | createTestStreamErrorMessage | (private) |

## src/agents/embedded-agent-runner/thinking.ts (767 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | AssistantContentBlock | (private) |
| 11 | type | AssistantMessage | (private) |
| 12 | type | RecoveryAssessment | (private) |
| 13 | type | AnthropicThinkingRecovery | (private) |
| 17 | type | RecoverySessionMeta | (private) |
| 27 | fn | isAssistantMessageWithContent | (private) |
| 36 | fn | isThinkingBlock | (private) |
| 45 | fn | isToolCallBlock | (private) |
| 53 | fn | hasAssistantToolCall | (private) |
| 57 | fn | isToolResultMessage | (private) |
| 65 | fn | isSignedThinkingBlock | (private) |
| 83 | fn | hasMeaningfulText | (private) |
| 92 | fn | buildOmittedAssistantReasoningContent | (private) |
| 97 | fn | parseTimestampMs | (private) |
| 110 | fn | stripSignatureFieldsFromThinkingBlock | (private) |
| 138 | fn | stripThinkingSignaturesFromMessage | pub |
| 185 | fn | stripStaleThinkingSignaturesForCompactionReplay | pub |
| 224 | fn | hasReplayableThinkingSignature | (private) |
| 256 | fn | stripInvalidThinkingSignatures | pub |
| 324 | fn | dropThinkingBlocks | pub |
| 365 | fn | shouldPreserveCurrentToolTurnReasoning | (private) |
| 404 | fn | shouldPreserveLatestAssistantThinking | pub |
| 430 | fn | stripThinkingBlocksFromMessage | pub |
| 444 | fn | stripAllThinkingBlocks | (private) |
| 459 | fn | dropReasoningFromHistory | pub |
| 495 | fn | assessLastAssistantMessage | pub |
| 538 | fn | shouldRecoverAnthropicThinkingError | (private) |
| 563 | fn | shouldRecoverAnthropicThinkingErrorMessage | (private) |
| 579 | fn | isAssistantMessageErrorEvent | (private) |
| 587 | fn | notifyRecoveredAnthropicThinking | (private) |
| 600 | fn | isSuccessfulRecoveryRetryResult | (private) |
| 607 | fn | wrapRetryStreamWithRecoveryNotification | (private) |
| 635 | fn | retryStreamWithoutThinking | (private) |
| 652 | fn | pumpStreamWithRecovery | (private) |
| 702 | fn | createRecoveryStream | (private) |
| 722 | fn | wrapAnthropicStreamWithRecovery | pub |
| 735 | fn | retry | (private) |
| 743 | fn | notify | (private) |

## src/agents/embedded-agent-runner/tool-result-context-guard.test.ts (1240 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | makeUser | (private) |
| 30 | fn | makeToolResult | (private) |
| 41 | fn | makeAssistant | (private) |
| 50 | fn | makeReadToolResult | (private) |
| 54 | fn | makeLegacyToolResult | (private) |
| 63 | fn | makeToolResultWithDetails | (private) |
| 83 | fn | getToolResultText | (private) |
| 97 | fn | makeGuardableAgent | (private) |
| 106 | fn | applyGuardToContext | (private) |
| 118 | fn | applyMidTurnPrecheckGuardToContext | (private) |
| 150 | fn | expectOpenClawTruncation | (private) |
| 160 | fn | mockCallArg | (private) |
| 172 | fn | recordMockArg | (private) |
| 492 | type | MockedEngine | (private) |
| 499 | fn | makeMockEngine | (private) |
| 559 | fn | callTransform | (private) |
| 573 | fn | installHook | (private) |
| 599 | fn | installOwnsCompactionHookWithGuard | (private) |
| 633 | fn | callAfterInitialToolResult | (private) |

## src/agents/embedded-agent-runner/tool-result-context-guard.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | GuardableTransformContext | (private) |
| 41 | type | GuardableAgent | (private) |
| 43 | type | GuardableAgentRecord | (private) |
| 47 | type | MidTurnPrecheckOptions | (private) |
| 57 | fn | markTranscriptPromptText | pub |
| 65 | fn | getTranscriptPromptText | (private) |
| 70 | fn | restoreTranscriptPromptText | (private) |
| 109 | fn | stripTranscriptPromptMarker | (private) |
| 118 | fn | projectTranscriptPromptMessages | (private) |
| 131 | fn | stripTranscriptPromptMarkers | (private) |
| 141 | fn | truncateTextToBudget | (private) |
| 168 | fn | replaceToolResultText | (private) |
| 181 | fn | estimateBudgetToTextBudget | (private) |
| 185 | fn | truncateToolResultToChars | (private) |
| 221 | fn | cloneMessagesForGuard | (private) |
| 227 | fn | toolResultsNeedTruncation | (private) |
| 244 | fn | exceedsPreemptiveOverflowThreshold | (private) |
| 252 | fn | applyMessageMutationInPlace | (private) |
| 274 | fn | enforceToolResultLimitInPlace | (private) |
| 290 | fn | hasNewToolResultAfterFence | (private) |
| 302 | fn | toMidTurnPrecheckRequest | (private) |
| 323 | fn | installContextEngineLoopHook | pub |
| 468 | fn | installToolResultContextGuard | pub |

## src/agents/embedded-agent-runner/tool-result-truncation.test.ts (1780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | loadFreshToolResultTruncationModuleForTest | (private) |
| 62 | fn | nextTimestamp | (private) |
| 64 | fn | createPromptProjectionStateForTest | (private) |
| 88 | fn | makeToolResult | (private) |
| 124 | fn | textWithFullOutputFooter | (private) |
| 128 | fn | realisticSpillPath | (private) |
| 132 | fn | makeUserMessage | (private) |
| 140 | fn | makeAssistantMessage | (private) |
| 149 | fn | getFirstToolResultText | (private) |
| 157 | fn | truncateToolResultText | (private) |
| 165 | fn | calculateMaxToolResultChars | (private) |
| 169 | fn | getToolResultTextLength | (private) |
| 181 | fn | truncateSessionThroughActiveTarget | (private) |
| 205 | fn | createTmpDir | (private) |
| 210 | fn | createShortTmpDir | (private) |
| 768 | fn | lengths | (private) |
| 1314 | fn | duplicate | (private) |

## src/agents/embedded-agent-runner/tool-result-truncation.ts (1564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | ToolResultTruncationOptions | (private) |
| 85 | fn | DEFAULT_SUFFIX | (private) |
| 87 | fn | COMPACT_RECOVERY_SUFFIX | (private) |
| 92 | fn | logToolResultSessionTruncation | (private) |
| 122 | fn | readRuntimeTranscriptFileState | (private) |
| 139 | fn | resolveSuffixFactory | (private) |
| 151 | fn | resolveEffectiveMinKeepChars | (private) |
| 160 | fn | appendBoundedTruncationSuffix | (private) |
| 166 | fn | build | (private) |
| 195 | fn | hasImportantTail | (private) |
| 215 | fn | truncateToolResultText | (private) |
| 284 | fn | calculateMaxToolResultChars | (private) |
| 291 | fn | resolveAutoLiveToolResultMaxChars | pub |
| 305 | fn | calculateMaxToolResultCharsWithCap | pub |
| 315 | fn | resolveLiveToolResultMaxChars | pub |
| 325 | fn | resolveLiveToolResultAggregateMaxChars | pub |
| 360 | fn | getToolResultTextLength | (private) |
| 384 | fn | truncateToolResultMessage | pub |
| 439 | fn | isToolResultTextBlock | (private) |
| 452 | type | ToolResultSpillDetails | (private) |
| 458 | fn | getToolResultSpillDetails | (private) |
| 486 | fn | toolResultTextContainsFullOutputFooter | (private) |
| 504 | type | AggregateElisionMarkers | (private) |
| 510 | fn | resolveAggregateElisionMarkers | (private) |
| 546 | fn | formatAggregateElisionText | (private) |
| 569 | fn | truncateOversizedToolResultsInMessages | pub |
| 679 | fn | calculateRecoveryAggregateToolResultChars | (private) |
| 694 | type | ToolResultReductionPotential | (private) |
| 705 | type | ToolResultBranchEntry | (private) |
| 713 | type | ToolResultReplacement | (private) |
| 718 | fn | getToolResultProjectionBaseKey | (private) |
| 731 | fn | getToolResultProjectionKeys | (private) |
| 772 | fn | mergeProjectedToolResultMessage | (private) |
| 814 | fn | getToolResultTextBlocks | (private) |
| 830 | fn | buildAggregateToolResultReplacements | (private) |
| 970 | fn | getTrailingToolResultEntryIds | (private) |
| 990 | fn | clearToolResultText | (private) |
| 1022 | fn | buildOversizedToolResultReplacements | (private) |
| 1060 | fn | calculateReplacementReduction | (private) |
| 1084 | fn | applyToolResultReplacementsToBranch | (private) |
| 1106 | fn | buildToolResultReplacementPlan | (private) |
| 1161 | fn | buildRecoveryToolResultReplacementPlan | (private) |
| 1194 | fn | estimateToolResultReductionPotential | pub |
| 1249 | fn | truncateOversizedToolResultsInExistingSessionManager | (private) |
| 1320 | fn | truncateOversizedToolResultsInTranscriptState | (private) |
| 1397 | fn | truncateOversizedToolResultsInSessionManager | pub |
| 1420 | fn | truncateOversizedToolResultsInRuntimeTranscript | (private) |
| 1482 | fn | truncateOversizedToolResultsInActiveTarget | pub |
| 1516 | fn | truncateOversizedToolResultsInSession | (private) |
| 1556 | fn | sessionLikelyHasOversizedToolResults | pub |

## src/agents/embedded-agent-runner/transcript-file-state.test.ts (1502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | makeRoot | (private) |

## src/agents/embedded-agent-runner/transcript-file-state.ts (1015 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | BranchSummaryEntry | (private) |
| 25 | type | CompactionEntry | (private) |
| 26 | type | CustomEntry | (private) |
| 27 | type | CustomMessageEntry | (private) |
| 28 | type | LabelEntry | (private) |
| 29 | type | ModelChangeEntry | (private) |
| 30 | type | SessionInfoEntry | (private) |
| 31 | type | SessionMessageEntry | (private) |
| 32 | type | ThinkingLevelChangeEntry | (private) |
| 34 | type | TranscriptLeafControlEntry | (private) |
| 44 | type | TranscriptPersistedEntry | pub |
| 69 | fn | isString | (private) |
| 73 | fn | isOptionalString | (private) |
| 77 | fn | isTextContent | (private) |
| 86 | fn | isThinkingContent | (private) |
| 96 | fn | isImageContent | (private) |
| 105 | fn | hasToolCallId | (private) |
| 116 | fn | isToolCallPayload | (private) |
| 120 | fn | isToolCallContent | (private) |
| 133 | fn | isPersistedContentBlock | (private) |
| 152 | fn | isUserContent | (private) |
| 159 | fn | isAssistantContent | (private) |
| 166 | fn | isToolResultContent | (private) |
| 170 | fn | isOptionalBoolean | (private) |
| 174 | fn | isBashExecutionMessage | (private) |
| 186 | fn | isAgentMessage | (private) |
| 211 | fn | hasSessionEntryBase | (private) |
| 226 | fn | isSessionEntry | (private) |
| 289 | fn | parseLeafControlEntry | (private) |
| 332 | type | ReadableSessionState | (private) |
| 343 | fn | readableSessionState | (private) |
| 553 | fn | sessionHeaderVersion | (private) |
| 557 | fn | generateEntryId | (private) |
| 567 | fn | serializeTranscriptFileEntries | (private) |
| 571 | fn | fileEntryOrMigrationSlot | (private) |
| 583 | fn | createReadableTranscriptFileState | (private) |
| 602 | fn | createTranscriptFileStateFromPersistedEntries | pub |
| 612 | class | TranscriptFileState | pub |
| 965 | fn | readTranscriptFileState | pub |
| 979 | fn | writeTranscriptFileAtomic | pub |
| 990 | fn | persistTranscriptStateMutation | pub |

## src/agents/embedded-agent-runner/transcript-rewrite.ts (585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | SessionManagerLike | (private) |
| 37 | type | SessionBranchEntry | (private) |
| 39 | fn | isTranscriptEventRecord | (private) |
| 47 | fn | rewriteSqliteRuntimeTranscript | (private) |
| 124 | fn | estimateMessageBytes | (private) |
| 128 | fn | findTranscriptRewriteMatches | (private) |
| 152 | fn | remapEntryId | (private) |
| 162 | fn | appendBranchEntry | (private) |
| 218 | fn | appendTranscriptStateBranchEntry | (private) |
| 274 | fn | rewriteTranscriptEntriesInSessionManager | pub |
| 357 | fn | rewriteTranscriptEntriesInState | pub |
| 523 | fn | rewriteTranscriptEntriesInRuntimeTranscript | pub |

## src/agents/embedded-agent-subscribe.handlers.compaction.test.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createCompactionContext | (private) |
| 65 | fn | makeUsageSnapshot | (private) |
| 82 | fn | makeAssistantUsageMessage | (private) |
| 96 | fn | makeCompactionSummaryMessage | (private) |
| 105 | fn | finishCompaction | (private) |
| 115 | fn | loggedInfoMetaAt | (private) |
| 124 | fn | loggedInfoMessageAt | (private) |

## src/agents/embedded-agent-subscribe.handlers.lifecycle.test.ts (1173 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | createContext | (private) |
| 89 | fn | handleAgentEndAndReadWarnMeta | (private) |
| 100 | fn | readRecord | (private) |
| 107 | fn | firstMockCall | (private) |
| 115 | fn | firstWarnMeta | (private) |

## src/agents/embedded-agent-subscribe.handlers.messages.test.ts (1957 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createMessageUpdateContext | (private) |
| 103 | fn | createMessageEndContext | (private) |
| 184 | fn | firstMockCall | (private) |
| 192 | fn | firstMockArg | (private) |
| 196 | fn | createMessageToolEnvelope | (private) |
| 339 | fn | createNonPhaseEvent | (private) |
| 436 | fn | createNonPhaseEvent | (private) |
| 461 | fn | createNonPhaseEvent | (private) |
| 554 | fn | createPartial | (private) |
| 627 | fn | createPartial | (private) |
| 744 | fn | createPhasedDelta | (private) |
| 788 | fn | createPhasedDelta | (private) |
| 836 | fn | createPhasedDelta | (private) |

## src/agents/embedded-agent-subscribe.handlers.messages.ts (1519 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | shouldSuppressAssistantVisibleOutput | (private) |
| 59 | fn | isTranscriptOnlyOpenClawAssistantMessage | (private) |
| 76 | fn | isResponsesApiAssistantMessage | (private) |
| 84 | fn | isAnthropicAssistantMessage | (private) |
| 92 | fn | isOpenAiCompletionsAssistantMessage | (private) |
| 100 | fn | preservePendingAssistantUsage | pub |
| 133 | fn | capturePendingAssistantUsage | pub |
| 151 | fn | resetPendingAssistantUsage | pub |
| 162 | fn | asRecord | (private) |
| 168 | fn | extractStandaloneMessageToolText | (private) |
| 195 | fn | resolveAssistantStreamItemId | (private) |
| 232 | fn | resolveAssistantStreamContentIndex | (private) |
| 236 | fn | scopeAssistantMessageToStreamBlock | (private) |
| 265 | fn | emitReasoningEnd | (private) |
| 277 | fn | emitAssistantMessageStart | (private) |
| 285 | fn | openReasoningStream | (private) |
| 289 | fn | shouldSuppressDeterministicApprovalOutput | (private) |
| 298 | fn | hasMessageToolOnlySourceDelivery | (private) |
| 307 | fn | appendBlockReplyChunk | (private) |
| 315 | fn | replaceBlockReplyBuffer | (private) |
| 324 | fn | resolveAssistantTextChunk | (private) |
| 356 | fn | resolveStreamVisibleText | (private) |
| 369 | fn | resolveTextAppendDelta | (private) |
| 385 | fn | copyPartialBlockState | (private) |
| 389 | fn | copyFenceState | (private) |
| 412 | fn | resolveSilentReplyFallbackText | (private) |
| 428 | fn | clearPendingToolMedia | (private) |
| 439 | fn | hasReplyMedia | (private) |
| 444 | fn | consumePendingToolMediaIntoReply | pub |
| 481 | fn | consumePendingToolMediaReply | pub |
| 496 | fn | readPendingToolMediaReply | pub |
| 518 | fn | hasReplyDirectiveMetadata | (private) |
| 529 | fn | hasReplyDirectiveMetadataResult | (private) |
| 535 | fn | mergeReplyDirectiveResults | (private) |
| 557 | fn | parseFullStreamingReplyText | (private) |
| 561 | fn | containsCompleteMediaDirectiveLine | (private) |
| 565 | fn | resolveIncrementalStreamingReplyText | (private) |
| 596 | fn | resolveStreamingReplyText | (private) |
| 615 | fn | recordPendingAssistantReplyDirectives | (private) |
| 636 | fn | consumePendingAssistantReplyDirectivesIntoReply | pub |
| 659 | fn | hasAssistantVisibleReply | pub |
| 669 | fn | buildAssistantStreamData | (private) |
| 697 | fn | handleMessageStart | pub |
| 717 | fn | handleMessageUpdate | pub |
| 1147 | fn | handleMessageEnd | pub |
| 1255 | fn | finalizeMessageEnd | (private) |
| 1339 | fn | maybeEmitReasoning | (private) |
| 1353 | fn | emitSplitResultAsBlockReply | (private) |

## src/agents/embedded-agent-subscribe.handlers.tools.media.test.ts (713 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | createMockContext | (private) |
| 86 | fn | firstEmitToolOutputCall | (private) |
| 95 | fn | emitPngMediaToolResult | (private) |
| 116 | fn | emitUntrustedToolMediaResult | (private) |
| 136 | fn | emitMcpMediaToolResult | (private) |
| 155 | fn | handleCaseVariantBuiltinMedia | (private) |
| 185 | fn | handleProviderInventoryListResult | (private) |
| 461 | fn | handleVerboseGeneratedImage | (private) |

## src/agents/embedded-agent-subscribe.handlers.tools.test.ts (4120 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | ToolExecutionStartEvent | (private) |
| 40 | type | ToolExecutionEndEvent | (private) |
| 41 | type | PayloadToolMetas | (private) |
| 45 | fn | activateAskUserPrompt | (private) |
| 69 | fn | finish | (private) |
| 91 | fn | createTestContext | (private) |
| 167 | type | CapturedAgentEvent | (private) |
| 169 | fn | requireEvent | (private) |
| 183 | fn | requirePayloadToolMetas | (private) |
| 196 | fn | requireString | (private) |
| 203 | fn | isRecord | (private) |
| 253 | fn | requireRecord | (private) |
| 260 | fn | expectRecordFields | (private) |
| 267 | fn | requireMockCallArg | (private) |
| 271 | fn | requireNestedRecord | (private) |
| 279 | fn | expectInteractiveApprovalButtons | (private) |
| 295 | fn | requireSingleMessagingTarget | (private) |
| 1423 | fn | result | (private) |

## src/agents/embedded-agent-subscribe.handlers.tools.ts (1887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | type | ExecApprovalReplyModule | (private) |
| 112 | type | HookRunnerGlobalModule | (private) |
| 113 | type | ChannelToolProgress | (private) |
| 129 | fn | resolveFallbackToolTerminalObserver | (private) |
| 145 | fn | readUpdatePlanResult | (private) |
| 157 | fn | buildAskUserPromptPayload | (private) |
| 182 | fn | isMiddlewareToolResultError | (private) |
| 195 | fn | loadExecApprovalReply | (private) |
| 199 | fn | loadHookRunnerGlobal | (private) |
| 203 | fn | getRequiredParamGroupsForTool | (private) |
| 209 | fn | collectMissingRequiredParamLabels | (private) |
| 231 | fn | buildToolExecutionStartTraceMeta | (private) |
| 259 | fn | traceToolExecutionStart | (private) |
| 281 | fn | buildToolStartWarningArgsPreview | (private) |
| 292 | type | ToolStartRecord | (private) |
| 301 | fn | buildToolStartKey | (private) |
| 306 | fn | countActiveToolExecutions | pub |
| 318 | fn | cleanupRunToolStartData | pub |
| 327 | fn | isCronAddAction | (private) |
| 335 | fn | buildToolCallSummary | (private) |
| 355 | fn | buildToolItemId | (private) |
| 359 | fn | buildToolItemTitle | (private) |
| 363 | fn | isExecToolName | (private) |
| 367 | fn | isPatchToolName | (private) |
| 371 | fn | buildCommandItemId | (private) |
| 375 | fn | buildPatchItemId | (private) |
| 379 | fn | buildCommandItemTitle | (private) |
| 383 | fn | buildPatchItemTitle | (private) |
| 387 | fn | emitTrackedItemEvent | (private) |
| 406 | fn | emitExecutionPhaseBestEffort | (private) |
| 417 | fn | emitAgentEventCallbackBestEffort | (private) |
| 428 | fn | applyCurrentMessageProvider | (private) |
| 444 | fn | applyToolSendReceiptForExtraction | (private) |
| 458 | fn | isAsyncStartedToolResult | (private) |
| 463 | fn | readAsyncStartedTaskIds | (private) |
| 480 | fn | readExecToolDetails | (private) |
| 488 | fn | extractExecOutput | (private) |
| 497 | fn | extractLiveExecOutput | (private) |
| 502 | fn | isOpenClawExecutable | (private) |
| 507 | fn | isOpenClawPackageSpec | (private) |
| 512 | fn | skipOpenClawPackageRunner | (private) |
| 565 | fn | isOpenClawCronAddShellCommand | (private) |
| 606 | fn | didShellCronAddSucceed | (private) |
| 614 | fn | readChannelToolProgress | (private) |
| 627 | fn | shouldEmitLiveExecUpdate | (private) |
| 639 | fn | readApplyPatchSummary | (private) |
| 660 | fn | shouldSuppressStructuredMediaToolOutput | (private) |
| 676 | fn | buildPatchSummaryText | (private) |
| 690 | fn | extendExecMeta | (private) |
| 713 | fn | readMessagingText | (private) |
| 723 | fn | hasMessagingRichContent | (private) |
| 738 | fn | queuePendingToolMedia | (private) |
| 758 | fn | readExecApprovalPendingDetails | (private) |
| 805 | fn | readExecApprovalUnavailableDetails | (private) |
| 847 | fn | emitToolResultOutput | (private) |
| 971 | fn | handleToolExecutionStart | pub |
| 986 | fn | cancelAskUserPromptReservation | (private) |
| 1275 | fn | handleToolExecutionUpdate | pub |
| 1371 | fn | handleToolExecutionEnd | pub |

## src/agents/embedded-agent-subscribe.subscribe-embedded-agent-session.filters-final-suppresses-output-without-start-tag.test.ts (544 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ReplyMock | (private) |
| 15 | type | ReplyPayload | (private) |
| 17 | fn | requireFirstReplyPayload | (private) |

## src/agents/embedded-agent-subscribe.subscribe-embedded-agent-session.subscribeembeddedagentsession.test.ts (1662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | flushBlockReplyCallbacks | (private) |
| 33 | fn | createAgentEventHarness | (private) |
| 47 | fn | createToolErrorHarness | (private) |
| 58 | fn | createSubscribedHarness | (private) |
| 72 | fn | emitAssistantTextDelta | (private) |
| 87 | fn | emitAssistantTextEnd | (private) |
| 102 | fn | createWriteFailureHarness | (private) |
| 120 | fn | emitToolRun | (private) |
| 143 | fn | captureToolLifecycleLogSubsystems | (private) |
| 184 | fn | findBlockReplyPayload | (private) |
| 193 | fn | mockCallArg | (private) |
| 201 | fn | latestMockCallArg | (private) |
| 205 | fn | expectBlockReplyPayload | (private) |
| 218 | fn | expectLifecyclePayload | (private) |
| 913 | type | ReasoningWindowGateCase | (private) |

## src/agents/embedded-agent-subscribe.tools.extract.test.ts (858 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | normalizeTelegramMessagingTargetForTest | (private) |

## src/agents/embedded-agent-subscribe.tools.test.ts (638 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 209 | fn | getTextContent | (private) |

## src/agents/embedded-agent-subscribe.tools.ts (1179 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | truncateToolText | (private) |
| 61 | fn | truncateLiveExecOutput | pub |
| 68 | fn | capLiveExecResult | pub |
| 89 | fn | normalizeToolErrorText | (private) |
| 103 | fn | isErrorLikeStatus | (private) |
| 120 | fn | readErrorCandidate | (private) |
| 137 | fn | extractErrorField | (private) |
| 153 | fn | extractDirectErrorField | (private) |
| 165 | fn | readErrorCodeField | (private) |
| 169 | fn | readDenialErrorCodeFromMessage | (private) |
| 182 | fn | readNestedErrorCodeField | (private) |
| 195 | fn | extractDirectErrorCodeField | (private) |
| 208 | fn | buildToolLifecycleErrorResult | pub |
| 227 | fn | extractAggregatedErrorField | (private) |
| 235 | fn | redactStringsDeep | (private) |
| 263 | fn | sanitizeToolArgs | pub |
| 267 | fn | sanitizeToolResult | pub |
| 322 | fn | redactInlineDataUriValue | (private) |
| 330 | fn | carriesBinaryData | (private) |
| 344 | fn | sanitizeStructuredToolResultValue | (private) |
| 389 | fn | stringifyStructuredToolResultContent | (private) |
| 407 | fn | resolveToolResultContentBlocks | (private) |
| 425 | fn | extractToolResultText | pub |
| 456 | fn | pushUniqueMessagingMediaUrl | (private) |
| 469 | fn | collectMessagingMediaUrlsFromRecord | pub |
| 472 | fn | pushAttachment | (private) |
| 512 | fn | collectMessagingMediaUrlsFromToolResult | pub |
| 515 | fn | appendFromRecord | (private) |
| 543 | fn | extractMessagingToolSourceReplyPayload | pub |
| 634 | fn | isCoreToolResultMediaTrustedName | (private) |
| 641 | fn | isExternalToolResult | (private) |
| 649 | fn | isToolResultMediaTrusted | (private) |
| 670 | fn | isTrustedOwnedTtsLocalMedia | (private) |
| 689 | fn | filterToolResultMediaUrls | pub |
| 736 | type | ToolResultMediaArtifact | (private) |
| 742 | fn | readToolResultDetailsMedia | (private) |
| 753 | fn | collectStructuredMediaUrls | (private) |
| 755 | fn | pushString | (private) |
| 764 | fn | pushAttachment | (private) |
| 795 | fn | isNonOutboundToolResultMedia | (private) |
| 799 | fn | hasImageContentBlock | (private) |
| 812 | fn | extractToolResultMediaArtifact | pub |
| 852 | fn | extractToolErrorCode | pub |
| 860 | fn | isToolResultTimedOut | pub |
| 868 | fn | extractToolErrorMessage | pub |
| 912 | fn | resolveMessageToolTarget | (private) |
| 940 | fn | resolveMessagingToolThreadEvidence | (private) |
| 1014 | fn | extractMessagingToolSend | pub |
| 1141 | fn | extractMessagingToolSendResult | pub |

## src/agents/embedded-agent-subscribe.ts (1542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 81 | fn | resolveEmbeddedAgentSessionLogger | (private) |
| 89 | fn | isPotentialTrailingBlockTagFragment | (private) |
| 106 | fn | splitTrailingBlockTagFragment | (private) |
| 124 | fn | splitTrailingFenceFragment | (private) |
| 139 | fn | collectPendingMediaFromInternalEvents | (private) |
| 164 | fn | subscribeEmbeddedAgentSession | pub |
| 275 | fn | shouldAllowSilentTurnText | (private) |
| 277 | fn | emitAssistantStreamDataSafely | (private) |
| 305 | fn | emitAssistantStreamData | (private) |
| 316 | fn | flushDeferredAssistantEvents | (private) |
| 325 | fn | clearDeferredAssistantEvents | (private) |
| 366 | fn | emitBlockReply | (private) |
| 398 | fn | flushDeferredBlockReplies | (private) |
| 413 | fn | clearDeferredBlockReplies | (private) |
| 417 | fn | resetAssistantMessageState | (private) |
| 465 | fn | rememberAssistantText | (private) |
| 472 | fn | shouldSkipAssistantText | (private) |
| 487 | fn | pushAssistantText | (private) |
| 501 | fn | finalizeAssistantTexts | (private) |
| 540 | fn | trimMessagingToolSent | (private) |
| 561 | fn | ensureCompactionPromise | (private) |
| 576 | fn | noteCompactionRetry | (private) |
| 581 | fn | resolveCompactionPromiseIfIdle | (private) |
| 591 | fn | resolveCompactionRetry | (private) |
| 599 | fn | maybeResolveCompactionWait | (private) |
| 602 | fn | resolveAssistantUsage | (private) |
| 633 | fn | commitAssistantUsage | (private) |
| 652 | fn | recordAssistantUsage | (private) |
| 662 | fn | getUsageTotals | (private) |
| 684 | fn | getLastAssistantUsage | (private) |
| 685 | fn | incrementCompactionCount | (private) |
| 688 | fn | noteCompactionTokensAfter | (private) |
| 700 | fn | shouldEmitToolResult | (private) |
| 704 | fn | shouldEmitToolOutput | (private) |
| 708 | fn | formatToolOutputBlock | (private) |
| 718 | fn | emitToolResultMessage | (private) |
| 763 | fn | emitToolSummary | (private) |
| 769 | fn | emitToolOutput | (private) |
| 846 | fn | advanceHiddenCodeState | (private) |
| 996 | fn | stripFinalTagsOutsideCodeSpans | (private) |
| 1010 | fn | hasMessageToolOnlySourceDelivery | (private) |
| 1016 | fn | emitBlockChunk | (private) |
| 1037 | fn | markBlockReplyTextHandled | (private) |
| 1143 | fn | consumeReplyDirectives | (private) |
| 1145 | fn | consumePartialReplyDirectives | (private) |
| 1198 | fn | emitReasoningStream | (private) |
| 1246 | fn | resetForCompactionRetry | (private) |
| 1299 | fn | noteLastAssistant | (private) |
| 1304 | fn | noteCompletedAssistant | (private) |
| 1361 | fn | unsubscribe | (private) |

## src/agents/embedded-agent-utils.test.ts (923 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | makeAssistantMessage | (private) |

## src/agents/exec-auto-reviewer.test.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | reviewExecResponse | (private) |

## src/agents/failover-error.test.ts (1604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1356 | fn | makeSessionLockError | (private) |
| 1362 | fn | makeEmbeddedTakeoverError | (private) |

## src/agents/failover-error.ts (919 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | CliTimeoutContext | pub |
| 36 | class | FailoverError | pub |
| 93 | fn | isFailoverError | pub |
| 105 | fn | findCliMaxTurnsError | pub |
| 133 | fn | hasCliTimeoutContext | (private) |
| 150 | fn | findCliTimeoutError | pub |
| 178 | fn | resolveFailoverStatus | pub |
| 207 | fn | findErrorProperty | (private) |
| 230 | fn | readDirectStatusCode | (private) |
| 246 | fn | getStatusCode | (private) |
| 250 | fn | readDirectErrorCode | (private) |
| 272 | fn | getErrorCode | (private) |
| 276 | fn | isStableProviderErrorType | (private) |
| 287 | fn | readDirectErrorType | (private) |
| 312 | fn | getErrorType | (private) |
| 316 | fn | readDirectProvider | (private) |
| 328 | fn | getProvider | (private) |
| 332 | fn | readDirectErrorDetails | (private) |
| 352 | fn | readDirectErrorMessage | (private) |
| 374 | fn | getErrorMessage | (private) |
| 378 | fn | normalizeDirectErrorSignal | (private) |
| 390 | fn | hasSessionWriteLockContention | (private) |
| 409 | fn | isEmbeddedAttemptSessionTakeover | (private) |
| 416 | fn | hasPreservedTakeoverPromptError | (private) |
| 425 | fn | resolveFailoverSourceError | (private) |
| 431 | fn | hasEmbeddedAttemptSessionTakeover | (private) |
| 450 | fn | readField | (private) |
| 457 | fn | readStringField | (private) |
| 462 | fn | isMissingToolResultMessage | (private) |
| 466 | fn | isMissingToolResultMarker | (private) |
| 470 | fn | readMissingToolResultMarker | (private) |
| 493 | fn | hasMissingToolResultFailure | (private) |
| 503 | fn | isNonProviderRuntimeCoordinationError | pub |
| 507 | fn | hasTimeoutHint | (private) |
| 522 | fn | isTimeoutError | pub |
| 545 | fn | isSignalTimeoutReason | pub |
| 549 | fn | failoverReasonFromClassification | (private) |
| 558 | fn | normalizeErrorSignal | (private) |
| 570 | fn | getNestedErrorCandidates | (private) |
| 580 | fn | isFormatClassification | (private) |
| 584 | fn | decideNestedFormatOverride | (private) |
| 622 | fn | resolveFailoverClassificationFromErrorInternal | (private) |
| 709 | fn | resolveFailoverClassificationFromError | (private) |
| 717 | fn | resolveFailoverReasonFromError | pub |
| 736 | fn | buildFailoverRemediationHint | pub |
| 751 | fn | quotePosixShellArg | (private) |
| 756 | fn | buildProviderReauthCommand | pub |
| 770 | fn | hasControlCharacter | (private) |
| 781 | fn | describeFailoverError | pub |
| 820 | type | FailoverErrorContext | (private) |
| 829 | type | ModelFallbackErrorResolution | (private) |
| 835 | fn | coerceToFailoverError | pub |
| 893 | fn | resolveModelFallbackError | pub |

## src/agents/image-generation-task-status.test.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | expectActiveImageGenerationTask | (private) |

## src/agents/live-cache-regression-runner.ts (655 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | LiveCacheRegressionResult | (private) |
| 57 | class | CacheProbeTextMismatchError | (private) |
| 78 | fn | makeUserTurn | (private) |
| 86 | fn | makeImageUserTurn | (private) |
| 93 | fn | makeToolResultMessage | (private) |
| 108 | fn | extractFirstToolCall | (private) |
| 112 | fn | normalizeCacheUsage | (private) |
| 124 | fn | assert | (private) |
| 130 | fn | runToolOnlyTurn | (private) |
| 194 | fn | completeCacheProbe | (private) |
| 270 | fn | runRepeatedLane | (private) |
| 368 | fn | runAnthropicDisabledLane | (private) |
| 387 | fn | formatUsage | (private) |
| 391 | fn | runRepeatedLaneWithBaselineRetry | (private) |
| 439 | fn | appendBaselineFindings | (private) |
| 444 | fn | isAnthropicEmptyCacheProbe | (private) |
| 448 | fn | shouldSkipAnthropicCacheProviderDrift | (private) |
| 458 | fn | runAnthropicCacheLane | (private) |
| 508 | fn | runAnthropicDisabledCacheLane | (private) |
| 531 | fn | runLiveCacheRegression | pub |

## src/agents/live-model-switch.test.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | loadModule | (private) |
| 48 | type | ShouldSwitchParams | (private) |
| 52 | fn | makeShouldSwitchParams | (private) |
| 67 | fn | resolvePendingSelection | (private) |

## src/agents/machine-token-host.test.ts (1208 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | invalidationFingerprint | (private) |
| 39 | fn | record | (private) |
| 73 | fn | resolveKeyPemStub | (private) |
| 291 | fn | legacyDelimiterOwnershipFingerprint | (private) |
| 300 | fn | publishOwnership | (private) |
| 947 | fn | matchingSmuggle | (private) |
| 970 | fn | facadeWith | (private) |

## src/agents/machine-token-host.ts (1020 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | HostMachineTokenBindingRecord | pub |
| 76 | type | MachineTokenResolveKeyPem | pub |
| 83 | type | MachineTokenPluginFacadeParams | pub |
| 106 | type | MachineTokenFacadeGenerationHandle | pub |
| 112 | type | MachineTokenFacadeGeneration | pub |
| 117 | type | MachineTokenFacadeGenerationState | (private) |
| 119 | type | MachineTokenFacadeGenerationRecord | (private) |
| 147 | fn | canonicalizeMachineTokenOwnershipTuple | (private) |
| 179 | fn | compareMachineTokenCanonicalJson | pub |
| 187 | fn | fingerprintMachineTokenGrantedRecords | pub |
| 208 | fn | liveMachineTokenOwnershipMatchesGrantedRecords | pub |
| 227 | fn | destroyCandidateMachineTokenFacadeGeneration | pub |
| 245 | fn | allocateGenerationId | (private) |
| 250 | fn | isLiveGeneration | (private) |
| 255 | fn | assertGrantedBinding | (private) |
| 266 | fn | isRecord | (private) |
| 270 | fn | readOptionalNonEmptyString | (private) |
| 278 | fn | readOptionalStringList | (private) |
| 289 | fn | normalizeKeyRef | (private) |
| 300 | fn | buildHostMachineTokenBindingFingerprint | pub |
| 322 | fn | normalizeMachineTokenConfigRecord | (private) |
| 370 | fn | assembleBindingFromRecord | (private) |
| 392 | fn | normalizeOptionalStringField | (private) |
| 396 | fn | normalizeOptionalStringListField | (private) |
| 412 | fn | assertSmuggledBindingMatchesRegistry | (private) |
| 417 | fn | expectString | (private) |
| 492 | fn | freezeBindingRegistry | (private) |
| 522 | fn | createMachineTokenFacadeGeneration | pub |
| 689 | fn | releaseMachineTokenFacadeGeneration | pub |
| 708 | fn | acquireMachineTokenFacadeLeaseForPlugin | pub |
| 736 | fn | publishMachineTokenFacadeGeneration | pub |
| 770 | fn | destroyMachineTokenFacadeGeneration | pub |
| 797 | fn | createMachineTokenPluginFacade | pub |
| 813 | fn | unregisterMachineTokenFacadesForPlugin | pub |
| 827 | fn | getLiveMachineTokenPluginFacade | pub |
| 840 | fn | getLiveMachineTokenFacadeGenerationHandle | pub |
| 855 | fn | countMachineTokenFacadeGenerations | pub |
| 875 | fn | listLiveMachineTokenFacadePluginIds | pub |
| 887 | fn | commitMachineTokenOwnershipSnapshot | pub |
| 915 | fn | collectGrantedMachineTokenBindingRecords | pub |
| 929 | fn | upsert | (private) |
| 996 | fn | collectGrantedMachineTokenBindingIds | pub |

## src/agents/main-session-recovery-state.test.ts (916 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | recoveryState | (private) |
| 26 | fn | interruptedEntry | (private) |
| 37 | fn | observe | (private) |

## src/agents/main-session-recovery-state.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | nextRevision | (private) |
| 38 | fn | createCycle | (private) |
| 46 | fn | observationFor | (private) |
| 58 | fn | matchesObservation | (private) |
| 71 | fn | hasCurrentForegroundClaim | (private) |
| 81 | fn | validateRecoveryAdmission | (private) |
| 105 | fn | recordLifecycleFence | (private) |
| 119 | fn | hasLifecycleFence | (private) |
| 128 | fn | formatAttemptBudgetReason | (private) |
| 135 | fn | isMainSessionRecoveryExhausted | pub |
| 144 | fn | isMainRestartRecoveryCandidate | pub |
| 158 | fn | inspectMainSessionRecovery | (private) |
| 209 | fn | inspectMainSessionRecoveryForAdmission | (private) |
| 237 | fn | transitionMainSessionRecovery | pub |

## src/agents/main-session-recovery-store.test.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | write | (private) |
| 44 | fn | read | (private) |
| 48 | fn | readStore | (private) |
| 54 | fn | seedExact | (private) |
| 62 | fn | interruptedEntry | (private) |
| 77 | fn | reserve | (private) |
| 647 | fn | enterWriter | (private) |
| 651 | fn | releaseWriter | (private) |

## src/agents/main-session-restart-dispatch.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | RestartRecoveryTerminalStatus | (private) |
| 55 | fn | normalizeFiniteTimestamp | (private) |
| 59 | fn | hasRestartRecoveryMessageActionAuthority | pub |
| 68 | fn | requiresRestartRecoveryMessageActionAuthority | pub |
| 75 | fn | resolveRestartRecoveryResumeBlockReason | pub |
| 118 | fn | buildResumeMessage | (private) |
| 129 | fn | resolveRestartRecoveryDeliveryContext | pub |
| 168 | fn | normalizeRestartRecoveryTerminalStatus | (private) |
| 174 | fn | probeRestartRecoveryTerminalStatus | (private) |
| 191 | fn | settleRestartRecoveryDispatch | (private) |
| 254 | fn | isExactRestartRecoveryDispatchAdmission | (private) |
| 278 | type | MainSessionResumeResult | (private) |
| 280 | fn | rollbackRestartRecoveryReservation | (private) |
| 298 | fn | scheduleRestartRecoveryReservationRollback | (private) |
| 339 | fn | resumeMainSession | pub |

## src/agents/main-session-restart-recovery.test.ts (5437 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | recoverRestartAbortedMainSessions | (private) |
| 81 | fn | recoverStartupOrphanedMainSessions | (private) |
| 84 | fn | retryRestartAbortedMainSessionRecovery | (private) |
| 87 | fn | retryRestartAbortedMainSessionRecoveryAfterOwnerRelease | (private) |
| 96 | fn | scheduleRestartAbortedMainSessionRecovery | (private) |
| 123 | fn | loadSessionEntry | (private) |
| 143 | fn | makeSessionsDir | (private) |
| 149 | fn | writeStorePath | (private) |
| 160 | fn | writeStore | (private) |
| 164 | fn | readStore | (private) |
| 170 | fn | writeTranscript | (private) |
| 193 | fn | cleanedLockForPath | (private) |
| 209 | fn | cleanedLock | (private) |
| 213 | fn | firstGatewayParams | (private) |

## src/agents/main-session-restart-recovery.ts (2261 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 81 | type | ExpectedRestartRecoveryTarget | (private) |
| 87 | type | ExhaustedRestartRecoveryTarget | (private) |
| 91 | fn | loadExpectedRestartRecoveryTarget | (private) |
| 109 | fn | shouldSkipMainRecovery | (private) |
| 113 | fn | normalizeStringSet | (private) |
| 124 | fn | normalizeFiniteTimestamp | (private) |
| 128 | fn | hasCurrentProcessOwner | (private) |
| 140 | fn | normalizeTranscriptLockPath | (private) |
| 153 | fn | resolveEntryTranscriptLockPaths | (private) |
| 158 | fn | push | (private) |
| 174 | fn | markRestartAbortedMainSessions | pub |
| 303 | fn | replaceActiveRunMarker | (private) |
| 352 | fn | markStartupOrphanedMainSessionsForRecovery | pub |
| 367 | fn | resolveActiveSessionIds | (private) |
| 369 | fn | resolveActiveSessionKeys | (private) |
| 426 | fn | getMessageRole | (private) |
| 434 | fn | findSourceTurnRange | (private) |
| 482 | fn | readToolCallId | (private) |
| 495 | fn | findMessageToolCallIndexInSourceTurn | (private) |
| 532 | fn | hasSiblingAssistantToolCalls | (private) |
| 553 | fn | isSuccessfulMessageToolResult | (private) |
| 566 | fn | findSuccessfulMessageToolResultIndex | (private) |
| 580 | fn | isExactMessageToolDeliveryMirror | (private) |
| 601 | fn | isSafeTerminalDeliveryTailMessage | (private) |
| 613 | fn | isTerminalSilentAssistantMessage | (private) |
| 644 | fn | canReconcileTerminalDeliveryAtSourceTurnTail | (private) |
| 686 | fn | buildRecoveryToolResultIdempotencyKey | (private) |
| 690 | fn | isMeaningfulTailMessage | (private) |
| 698 | fn | readDeliveredTerminalSourceReplyToolCallId | (private) |
| 730 | fn | readCodeModeWaitCall | (private) |
| 781 | fn | isResumableTailMessage | (private) |
| 786 | fn | isPendingAssistantToolCall | (private) |
| 818 | fn | readCodeModeCheckpoint | (private) |
| 861 | fn | hasReplaySafeCodeModeCheckpointInCurrentTurn | (private) |
| 874 | fn | isRestartAbortTailArtifact | (private) |
| 893 | fn | isRestartAbortedWaitFailure | (private) |
| 929 | fn | isRestartAbortedWaitResultArtifact | (private) |
| 938 | fn | isApprovalPendingToolResult | (private) |
| 949 | type | MainSessionResumePolicy | (private) |
| 959 | fn | resolveMainSessionResumePolicy | (private) |
| 1046 | fn | markSessionFailed | (private) |
| 1068 | type | RecoveryCheckpointCompletion | (private) |
| 1073 | fn | markSessionCompletedAfterRecoveryCheckpoint | (private) |
| 1298 | fn | sendUnresumableSessionNotice | (private) |
| 1338 | fn | writeUnresumableSessionNotice | (private) |
| 1378 | fn | failUnresumableMainSession | (private) |
| 1425 | fn | markRestartAbortedMainSessionsFromLocks | pub |
| 1479 | fn | resolveRecoveryDispatchSessionKey | (private) |
| 1502 | fn | recoverStore | (private) |
| 1522 | fn | resolveActiveSessionIds | (private) |
| 1524 | fn | resolveActiveSessionKeys | (private) |
| 1639 | fn | recordResumeResult | (private) |
| 1880 | fn | resolveRestartRecoveryStorePaths | (private) |
| 1898 | fn | recoverRestartAbortedMainSessionsWithOptions | (private) |
| 1933 | fn | recoverRestartAbortedMainSessions | pub |
| 1945 | fn | retryRestartAbortedMainSessionRecovery | pub |
| 1965 | fn | assertClaimCurrent | (private) |
| 2001 | fn | retryRestartAbortedMainSessionRecoveryAfterOwnerRelease | pub |
| 2011 | fn | recoverExpectedRestartRecoveryTarget | (private) |
| 2025 | fn | assertTargetCurrent | (private) |
| 2063 | fn | scheduleRestartAbortedMainSessionRecoveryAfterOwnerRelease | pub |
| 2074 | fn | scheduleAttempt | (private) |
| 2075 | fn | run | (private) |
| 2129 | fn | recoverStartupOrphanedMainSessionsWithOptions | (private) |
| 2164 | fn | recoverStartupOrphanedMainSessions | pub |
| 2176 | fn | scheduleRestartAbortedMainSessionRecovery | pub |
| 2190 | fn | runRecoveryAttempt | (private) |
| 2192 | fn | reconcileExhaustedTargets | (private) |
| 2249 | fn | scheduleAttempt | (private) |

## src/agents/mcp-http-fetch.test.ts (770 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | class | TestAgent | (private) |
| 38 | class | TestEnvHttpProxyAgent | (private) |
| 42 | class | TestProxyAgent | (private) |
| 46 | fn | useBodylessForeignResponse | (private) |
| 69 | fn | fetchOAuthRegistrationError | (private) |
| 74 | fn | redirectResponse | (private) |
| 81 | fn | getDispatcher | (private) |
| 88 | fn | getDispatcherConnectOptions | (private) |
| 97 | fn | listenOnLoopback | (private) |
| 109 | fn | closeLoopbackServer | (private) |
| 117 | fn | expectBoundedTimeout | (private) |
| 127 | fn | captureRejection | (private) |

## src/agents/mcp-oauth.test.ts (860 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | withTempHome | (private) |

## src/agents/memory-search.test.ts (965 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | registerBaseMemoryEmbeddingProviders | (private) |
| 101 | fn | configWithDefaultProvider | (private) |
| 113 | fn | expectDefaultRemoteBatch | (private) |
| 125 | fn | expectEmptyMultimodalConfig | (private) |
| 133 | fn | configWithRemoteDefaults | (private) |
| 157 | fn | expectMergedRemoteConfig | (private) |

## src/agents/memory-search.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | ResolvedMemorySearchConfig | pub |
| 121 | type | ResolvedMemorySearchSyncConfig | pub |
| 146 | type | ConfiguredMemoryEmbeddingProvider | (private) |
| 152 | fn | resolveRemoteBatchPollIntervalMs | (private) |
| 162 | fn | resolveRemoteBatchTimeoutMinutes | (private) |
| 172 | fn | normalizeSources | (private) |
| 192 | fn | getConfiguredMemoryEmbeddingProvider | (private) |
| 222 | fn | mergeConfig | (private) |
| 448 | fn | resolveSyncConfig | (private) |
| 477 | fn | resolveMemorySearchConfig | pub |
| 514 | fn | resolveMemorySearchSyncConfig | pub |

## src/agents/model-auth-availability.test.ts (756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | routeResolverFactory | (private) |
| 40 | fn | authStore | (private) |
| 51 | fn | evaluate | (private) |

## src/agents/model-auth-availability.ts (1021 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | ModelAuthAvailability | pub |
| 70 | type | ModelAuthAvailabilityEvidence | (private) |
| 71 | type | ModelAuthAvailabilityRef | pub |
| 82 | type | ModelAuthAvailabilityEvaluation | pub |
| 90 | type | ModelAuthAvailabilityResolver | pub |
| 101 | type | CreateModelAuthAvailabilityResolverParams | (private) |
| 115 | type | AuthTarget | (private) |
| 118 | type | AuthSourceEvaluation | (private) |
| 123 | fn | hasSecret | (private) |
| 127 | fn | modeAllowed | (private) |
| 137 | fn | normalizeModelIdForProvider | (private) |
| 152 | fn | createModelAuthAvailabilityResolver | pub |
| 177 | fn | sameSecretRef | (private) |
| 270 | fn | normalizeProvider | (private) |
| 274 | fn | providerConfig | (private) |
| 292 | fn | providerBinding | (private) |
| 298 | fn | envAuth | (private) |
| 314 | fn | profileOrder | (private) |
| 337 | fn | profileMode | (private) |
| 345 | fn | profileEligibleForReadOnlyAvailability | (private) |
| 381 | fn | resolvedProfileAvailability | (private) |
| 397 | fn | profileInCooldown | (private) |
| 421 | fn | hasProfileEvidence | (private) |
| 623 | fn | directSource | (private) |
| 676 | fn | directPolicy | (private) |
| 707 | fn | automaticSourceRejection | (private) |
| 801 | fn | resolveProviderAuthAvailability | (private) |

## src/agents/model-auth.profiles.test.ts (1990 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | expectVertexAdcEnvApiKey | (private) |
| 52 | fn | testModelDefinition | (private) |
| 155 | fn | resolveMockProviderAuthEvidence | (private) |
| 269 | fn | envVar | (private) |
| 271 | fn | createUsableOAuthExpiry | (private) |
| 310 | fn | resolveBedrockProvider | (private) |
| 318 | fn | expectBedrockAuthSource | (private) |
| 357 | fn | buildDemoLocalStore | (private) |
| 373 | fn | buildDemoLocalProviderCfg | (private) |
| 388 | fn | resolveDemoLocalApiKey | (private) |

## src/agents/model-auth.test.ts (2538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 235 | fn | withoutEnv | (private) |
| 245 | fn | withEnv | (private) |
| 255 | fn | createCustomProviderConfig | (private) |
| 278 | fn | resolveCustomProviderAuth | (private) |
| 296 | fn | expectAuthFields | (private) |
| 311 | fn | expectSecretSentinelAuth | (private) |

## src/agents/model-auth.ts (2100 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | type | ProviderCredentialPrecedence | pub |
| 95 | fn | sentinelizeSecretRefProfileApiKey | (private) |
| 115 | type | RuntimeProviderAuthLookup | pub |
| 129 | fn | directOpenAIPlatformModelRequiresApiKey | (private) |
| 140 | fn | openAICodexTransportRequiresOAuth | (private) |
| 150 | fn | isAuthModeAllowedForModel | (private) |
| 163 | fn | assertAuthModeAllowedForModel | (private) |
| 182 | fn | resolveConfigAwareEnvApiKey | (private) |
| 195 | fn | resolveProviderConfig | (private) |
| 203 | fn | createRuntimeProviderAuthLookup | pub |
| 235 | fn | runtimeLookupAllowsSetupProviderFallback | (private) |
| 248 | fn | resolveRuntimeEnvApiKeyLookupOptions | (private) |
| 272 | fn | getCustomProviderApiKey | pub |
| 292 | type | ResolvedCustomProviderApiKey | (private) |
| 297 | fn | canResolveEnvSecretRefInReadOnlyPath | (private) |
| 314 | fn | resolveUsableCustomProviderApiKey | pub |
| 394 | fn | hasUsableCustomProviderApiKey | pub |
| 403 | fn | shouldPreferExplicitConfigApiKeyAuth | pub |
| 415 | fn | resolveProviderAuthOverride | (private) |
| 427 | fn | resolveDirectProviderCredentialMode | (private) |
| 440 | fn | shouldUseImplicitAwsSdkAuth | (private) |
| 458 | fn | profileTypeToAuthMode | (private) |
| 462 | type | ProviderEntryApiKeyProfileReference | (private) |
| 480 | type | ProviderEntryApiKeyBindingResolution | pub |
| 493 | fn | normalizeProviderEntryBaseUrlForBinding | (private) |
| 509 | fn | providerEntriesShareBaseUrl | (private) |
| 525 | fn | isBearerProfileCredential | (private) |
| 530 | fn | canUseProfileAsProviderEntryApiKey | pub |
| 558 | fn | resolveProviderEntryApiKeyProfileReference | pub |
| 607 | fn | resolveProviderEntryApiKeyBinding | pub |
| 658 | fn | resolveConfiguredAwsSdkProfileAuth | (private) |
| 673 | fn | isLocalBaseUrl | (private) |
| 697 | fn | isPrivateIpv4Host | (private) |
| 711 | fn | hasExplicitProviderApiKeyConfig | (private) |
| 718 | fn | isCustomLocalProviderConfig | (private) |
| 729 | fn | isManagedSecretRefApiKeyMarker | (private) |
| 733 | fn | hasSecretRefProviderApiKey | (private) |
| 745 | fn | providerConfigMatchesRuntimeSnapshot | (private) |
| 764 | fn | sentinelizeConfigSecretRefEnvApiKey | (private) |
| 797 | fn | resolveLiteralProviderConfigApiKeyAuth | (private) |
| 818 | fn | resolveManagedSecretRefRuntimeProviderAuth | (private) |
| 864 | fn | assertRuntimeProviderSecretOwnerAvailable | (private) |
| 890 | fn | hasSyntheticLocalProviderAuthConfig | pub |
| 920 | fn | listProviderSyntheticAuthRefs | (private) |
| 936 | fn | shouldResolvePluginSyntheticAuth | (private) |
| 956 | fn | hasRuntimeAvailableProviderAuth | pub |
| 1011 | type | SyntheticProviderAuthResolution | (private) |
| 1016 | fn | resolveProviderSyntheticRuntimeAuth | (private) |
| 1078 | fn | resolveSyntheticLocalProviderAuth | (private) |
| 1115 | fn | resolveEnvSourceLabel | (private) |
| 1125 | fn | resolveAwsSdkAuthInfo | (private) |
| 1160 | fn | shouldDeferSyntheticProfileAuth | (private) |
| 1182 | fn | resolveScopedAuthProfileStore | (private) |
| 1195 | fn | resolveApiKeyForProvider | pub |
| 1701 | type | ModelAuthMode | pub |
| 1707 | fn | resolveModelAuthMode | pub |
| 1773 | fn | hasAvailableAuthForProvider | pub |
| 1862 | fn | getApiKeyForModel | pub |
| 1895 | fn | applyLocalNoAuthHeaderOverride | pub |
| 1917 | fn | applySecretRefHeaderSentinels | pub |
| 1944 | fn | isManagedSecret | (private) |
| 1947 | fn | addReplacement | (private) |
| 2065 | fn | applyAuthHeaderOverride | pub |

## src/agents/model-catalog.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | DiscoveredModel | (private) |
| 64 | type | BuildPreparedModelCatalogParams | pub |
| 76 | type | ManifestModelCatalogCacheEntry | (private) |
| 88 | fn | loadModelSuppression | (private) |
| 92 | fn | loadProviderApiKeyResolver | (private) |
| 96 | fn | resetModelCatalogBuilderCacheForTest | pub |
| 102 | fn | canonicalizePreparedModelCatalogProvider | pub |
| 120 | fn | catalogEntryDedupeKey | (private) |
| 125 | fn | mergeCatalogCompat | (private) |
| 138 | fn | mergeCatalogParams | (private) |
| 151 | fn | normalizeCatalogRouteBaseUrl | (private) |
| 164 | fn | catalogRouteChanges | (private) |
| 176 | fn | clearRouteBoundCatalogMetadata | (private) |
| 190 | fn | overlayCatalogMetadata | (private) |
| 216 | fn | normalizeCatalogEntryContract | (private) |
| 226 | fn | mergeCatalogEntries | (private) |
| 249 | fn | catalogRouteVariantKey | (private) |
| 257 | type | ModelCatalogRouteVariantCollector | (private) |
| 262 | fn | createModelCatalogRouteVariantCollector | (private) |
| 266 | fn | mergeCatalogRouteVariants | (private) |
| 286 | fn | createModelCatalogSnapshot | (private) |
| 296 | fn | loadManifestModelCatalog | pub |
| 369 | fn | sortModelCatalogEntries | (private) |
| 380 | fn | buildPreparedModelCatalogSnapshot | pub |
| 389 | fn | logStage | (private) |
| 400 | fn | getManifestPlugins | (private) |
| 487 | fn | resolveProviderApiKey | (private) |
| 542 | fn | modelSupportsVision | pub |
| 549 | fn | modelSupportsDocument | pub |

## src/agents/model-compat.test.ts (865 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | supportsDeveloperRole | (private) |
| 52 | fn | supportsUsageInStreaming | (private) |
| 57 | fn | supportsStrictMode | (private) |
| 61 | fn | expectSupportsDeveloperRoleForcedOff | (private) |
| 68 | fn | expectSupportsUsageInStreamingForcedOff | (private) |
| 75 | fn | expectSupportsStrictModeForcedOff | (private) |
| 82 | fn | expectNativeStreamingSupported | (private) |

## src/agents/model-fallback.probe.test.ts (1075 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 109 | type | AuthProfilesStoreModule | (private) |
| 110 | type | AuthProfilesSourceCheckModule | (private) |
| 111 | type | AuthProfilesUsageModule | (private) |
| 112 | type | AuthProfilesOrderModule | (private) |
| 113 | type | ModelFallbackModule | (private) |
| 114 | type | LoggerModule | (private) |
| 144 | fn | loadModelFallbackProbeModules | (private) |
| 171 | fn | expectPrimarySkippedForReason | (private) |
| 187 | fn | expectPrimaryProbeSuccess | (private) |
| 203 | fn | requireRecord | (private) |
| 210 | fn | expectRecordWithFields | (private) |
| 222 | fn | expectProbeFailureFallsBack | (private) |
| 271 | fn | runPrimaryCandidate | (private) |
| 282 | fn | resolveOpenAiCooldownDecision | (private) |
| 313 | fn | expectOpenAiProbeSuspension | (private) |
| 324 | fn | expectPrimarySkippedAfterLongCooldown | (private) |

## src/agents/model-fallback.run-embedded.e2e.test.ts (941 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | installRunEmbeddedMocks | (private) |
| 88 | type | EmbeddedAttemptParams | (private) |
| 94 | fn | makeConfig | (private) |
| 144 | fn | withAgentWorkspace | (private) |
| 161 | fn | writeAuthStore | (private) |
| 199 | fn | readUsageStats | (private) |
| 203 | fn | expectFailureCount | (private) |
| 213 | fn | writeMultiProfileAuthStore | (private) |
| 240 | fn | runEmbeddedFallback | (private) |
| 287 | fn | mockPrimaryOverloadedThenFallbackSuccess | (private) |
| 291 | fn | makeFallbackSuccessAttempt | (private) |
| 303 | fn | mockPrimaryFailureThenFallbackSuccess | (private) |
| 322 | fn | mockPrimaryPromptErrorThenFallbackSuccess | (private) |
| 330 | fn | mockPrimarySuspendingPromptErrorThenFallbackSuccess | (private) |
| 344 | fn | mockPrimaryErrorThenFallbackSuccess | (private) |
| 363 | fn | mockPrimaryStaleRateLimitTextSuccess | (private) |
| 378 | fn | expectOpenAiThenGroqAttemptOrder | (private) |
| 394 | fn | mockAllProvidersOverloaded | (private) |
| 412 | fn | countProviderAttempts | (private) |
| 418 | fn | expectProviderAttemptCounts | (private) |

## src/agents/model-fallback.test.ts (4456 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | ProviderModelNormalizationParams | (private) |
| 55 | fn | makeCommandLaneTaskTimeoutError | (private) |
| 91 | fn | keyFor | (private) |
| 92 | fn | now | (private) |
| 97 | fn | getProfileIds | (private) |
| 101 | fn | isProfileInCooldown | (private) |
| 220 | fn | resetModelFallbackTestState | (private) |
| 235 | fn | setDefaultPluginMetadataSnapshot | (private) |
| 253 | fn | runModelFallbackCase | (private) |
| 263 | fn | makeFallbacksOnlyCfg | (private) |
| 275 | fn | makeProviderFallbackCfg | (private) |
| 288 | fn | makeProviderOrderFallbackCfg | (private) |
| 313 | fn | withTempAuthStore | (private) |
| 322 | fn | makeAuthTempDir | (private) |
| 327 | fn | runWithStoredAuth | (private) |
| 344 | fn | setAuthRuntimeStore | (private) |
| 349 | fn | requireRecord | (private) |
| 356 | fn | requireMockCall | (private) |
| 368 | fn | captureRejection | (private) |
| 377 | fn | requireFallbackSummaryError | (private) |
| 385 | fn | requireFailoverError | (private) |
| 393 | fn | expectFallsBackToHaiku | (private) |
| 417 | fn | createOverrideFailureRun | (private) |
| 435 | fn | makeSingleProviderStore | (private) |
| 463 | fn | createFallbackOnlyRun | (private) |
| 472 | fn | expectSkippedUnavailableProvider | (private) |
| 518 | type | ModelFailoverDiagnostic | (private) |
| 520 | fn | captureModelFailoverDiagnostics | (private) |
| 533 | fn | makeDiagnosticFallbackConfig | (private) |
| 539 | fn | diagnosticFailure | (private) |
| 573 | fn | parseDiagnosticModelRef | (private) |
| 3526 | fn | makeAuthStoreWithCooldown | (private) |
| 3793 | fn | makeAbortError | (private) |
| 3799 | fn | makeAbortableWrapper | (private) |
| 3813 | fn | makeAbortWrapper | (private) |
| 3819 | fn | makeTaggedAbortController | (private) |

## src/agents/model-fallback.ts (2086 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | fn | isTranscriptNotContinuableError | (private) |
| 101 | fn | hasExactConfiguredProviderModel | (private) |
| 120 | fn | hasConfiguredProvider | (private) |
| 130 | fn | allowPluginModelNormalizationForRef | (private) |
| 145 | type | FailoverAttribution | (private) |
| 155 | class | FallbackSummaryError | (private) |
| 177 | fn | isFallbackSummaryError | pub |
| 181 | type | ModelFallbackRunOptions | (private) |
| 186 | type | ModelFallbackRuntimeContext | (private) |
| 204 | fn | isTerminalAbortReasonString | (private) |
| 208 | fn | getErrorCauseCandidates | (private) |
| 219 | fn | isTerminalAbortCandidate | (private) |
| 238 | fn | isTerminalAbort | (private) |
| 252 | fn | isTerminalAbortFromError | (private) |
| 274 | fn | isCallerAbortSignal | (private) |
| 278 | fn | createModelCandidateCollector | (private) |
| 286 | fn | addCandidate | (private) |
| 301 | fn | addExplicitCandidate | (private) |
| 304 | fn | addAllowlistedCandidate | (private) |
| 311 | type | ModelFallbackErrorHandler | (private) |
| 319 | type | ModelFallbackStepHandler | (private) |
| 321 | type | ModelFallbackResultClassification | pub |
| 364 | type | ModelFallbackAuthRuntime | (private) |
| 372 | fn | loadModelFallbackAuthRuntime | (private) |
| 376 | fn | buildFallbackSuccess | (private) |
| 391 | fn | runFallbackCandidate | (private) |
| 402 | fn | run | (private) |
| 442 | fn | runFallbackAttempt | (private) |
| 529 | fn | resolveResultClassificationError | (private) |
| 555 | fn | sameModelCandidate | (private) |
| 559 | fn | isCliAgentRuntime | (private) |
| 567 | fn | resolveModelFallbackCandidateHarnessAuthPrecheck | (private) |
| 574 | fn | result | (private) |
| 622 | fn | resolveCandidateAttemptError | (private) |
| 637 | fn | recordFailedCandidateAttempt | (private) |
| 685 | fn | appendFailedCandidateAttempt | (private) |
| 702 | fn | findLiveSessionModelSwitchRedirectIndex | (private) |
| 716 | fn | hasDifferentLiveSessionRuntimeSelection | (private) |
| 720 | fn | normalizeRuntime | (private) |
| 730 | fn | throwFallbackFailureSummary | (private) |
| 772 | fn | resolveFallbackSoonestCooldownExpiry | (private) |
| 814 | fn | resolveImageFallbackCandidates | pub |
| 834 | fn | addRaw | (private) |
| 872 | fn | resolveImageFallbackDefaultProvider | pub |
| 892 | fn | resolveModelCandidateChain | pub |
| 922 | fn | cloneModelCandidate | (private) |
| 929 | fn | resolveFallbackCandidateCacheKey | (private) |
| 985 | fn | resolveFallbackCandidateModelProviderCacheParts | (private) |
| 1001 | fn | resolveFallbackCandidatesUncached | (private) |
| 1023 | fn | normalizeCandidateRef | (private) |
| 1123 | fn | resolveProbeThrottleKey | (private) |
| 1128 | fn | pruneProbeState | (private) |
| 1136 | fn | enforceProbeStateCap | (private) |
| 1153 | fn | isProbeThrottleOpen | (private) |
| 1159 | fn | markProbeAttempt | (private) |
| 1165 | fn | hasActiveProviderRateLimitResetWindow | (private) |
| 1186 | fn | shouldProbePrimaryDuringCooldown | (private) |
| 1254 | type | CooldownDecision | (private) |
| 1271 | fn | resolveCooldownDecision | (private) |
| 1377 | type | DeferredSessionSuspensionState | (private) |
| 1381 | fn | flushDeferredSessionSuspension | (private) |
| 1390 | fn | shouldDiscardDeferredSessionSuspension | (private) |
| 1414 | fn | runWithModelFallback | pub |
| 1432 | fn | runWithModelFallbackInternal | (private) |
| 1460 | fn | resolveTerminalSuspensionLane | (private) |
| 1462 | fn | observeDecision | (private) |
| 1471 | fn | observeFailedCandidate | (private) |
| 2028 | fn | runWithImageModelFallback | pub |

## src/agents/model-provider-auth.test.ts (796 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 121 | fn | publishCurrentProviderAuthStateSnapshot | (private) |

## src/agents/model-provider-auth.ts (727 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | ProviderAuthWarmWorkerResult | (private) |
| 64 | type | ProviderAuthWarmRuntimeAuthStore | (private) |
| 69 | type | ProviderAuthWarmRuntimeAuthLookup | (private) |
| 74 | type | ProviderAuthWarmWorkerRunner | (private) |
| 91 | fn | resolvePreparedStateForCaller | (private) |
| 109 | fn | resolveProviderAuthConfigFingerprint | (private) |
| 123 | fn | hasAuthForModelProvider | pub |
| 226 | type | ProviderModelAuthChecker | pub |
| 237 | fn | createProviderAuthChecker | pub |
| 250 | fn | resolveModelAuthResolver | (private) |
| 300 | fn | resolveLegacyProviderAuth | (private) |
| 346 | fn | serializeProviderAuthStates | (private) |
| 358 | fn | resolveProviderConfigApi | (private) |
| 374 | fn | shouldOmitFalsePreparedAuthForProcessSyntheticProvider | (private) |
| 391 | fn | buildCurrentProviderAuthStateSnapshot | pub |
| 400 | fn | isWarmStale | (private) |
| 484 | fn | resolveProviderAuthWarmWorkerUrl | (private) |
| 496 | fn | isProviderAuthWarmSnapshot | (private) |
| 519 | fn | isProviderAuthWarmWorkerResult | (private) |
| 530 | fn | createProviderAuthWarmPresenceStore | (private) |
| 544 | fn | collectProviderAuthWarmRuntimeAuthStores | (private) |
| 549 | fn | addStore | (private) |
| 571 | fn | collectProviderAuthWarmRuntimeAuthLookups | (private) |
| 590 | fn | runProviderAuthWarmWorker | (private) |
| 617 | fn | finish | (private) |
| 631 | fn | cancelWorker | (private) |
| 694 | fn | warmCurrentProviderAuthStateOffMainThread | pub |
| 705 | fn | isWarmStale | (private) |

## src/agents/model-scan.ts (531 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | OpenRouterModelMeta | (private) |
| 62 | type | OpenRouterModelPricing | (private) |
| 71 | type | ProbeResult | (private) |
| 78 | type | ModelScanResult | pub |
| 96 | type | OpenRouterScanOptions | (private) |
| 108 | type | OpenAIModel | (private) |
| 110 | fn | normalizeCreatedAtMs | (private) |
| 121 | fn | parseModality | (private) |
| 131 | fn | parseNumberString | (private) |
| 149 | fn | parseOpenRouterPricing | (private) |
| 174 | fn | isFreeOpenRouterModel | (private) |
| 184 | fn | withTimeout | (private) |
| 202 | fn | readOpenRouterModelsJson | (private) |
| 217 | fn | fetchOpenRouterModels | (private) |
| 300 | fn | probeTool | (private) |
| 347 | fn | probeImage | (private) |
| 385 | fn | ensureImageInput | (private) |
| 395 | fn | buildOpenRouterScanResult | (private) |
| 421 | fn | scanOpenRouterModels | pub |

## src/agents/model-selection-shared.ts (1857 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | getLog | (private) |
| 50 | type | ModelManifestPlugins | (private) |
| 52 | type | ModelAliasIndex | pub |
| 58 | type | ModelManifestPluginContext | (private) |
| 63 | type | ModelAliasCandidate | (private) |
| 68 | type | ExactConfiguredProviderRefParts | (private) |
| 73 | fn | providerAliasKey | (private) |
| 77 | fn | hasSlashFormModelRef | (private) |
| 83 | fn | resolveManifestPluginsForModelIdNormalization | (private) |
| 113 | fn | createModelManifestPluginContext | (private) |
| 136 | fn | listModelAliasCandidates | (private) |
| 157 | fn | findModelAliasCandidate | (private) |
| 171 | fn | sanitizeModelWarningValue | (private) |
| 187 | fn | mergeModelCatalogEntries | (private) |
| 205 | fn | inferUniqueProviderFromConfiguredModels | pub |
| 218 | fn | addProvider | (private) |
| 285 | fn | inferUniqueProviderFromCatalog | pub |
| 315 | fn | resolveBareModelDefaultProvider | pub |
| 334 | fn | isConcreteOpenRouterFreeModelRef | (private) |
| 338 | fn | resolveConfiguredOpenRouterCompatFreeRef | (private) |
| 381 | fn | resolveConfiguredOpenRouterCompatAlias | pub |
| 410 | fn | parseModelRefWithCompatAlias | (private) |
| 438 | fn | findExactConfiguredProviderRefParts | (private) |
| 468 | fn | normalizeExactConfiguredProviderRef | (private) |
| 492 | fn | resolveExactConfiguredProviderRef | (private) |
| 511 | fn | resolveAllowlistModelKey | pub |
| 537 | fn | buildConfiguredAllowlistKeys | pub |
| 580 | type | BuildModelAliasIndexParams | (private) |
| 588 | fn | buildModelAliasIndexWithManifestContext | (private) |
| 632 | fn | buildModelAliasIndex | pub |
| 643 | type | ModelCatalogMetadata | (private) |
| 648 | fn | buildModelCatalogMetadata | (private) |
| 690 | fn | applyModelCatalogMetadata | (private) |
| 727 | fn | buildSyntheticAllowedCatalogEntry | (private) |
| 755 | fn | resolveModelRefFromString | pub |
| 798 | fn | resolveConfiguredModelRef | pub |
| 967 | fn | buildAllowedModelSetWithFallbacks | pub |
| 1054 | fn | resolveSelectionModelRef | (private) |
| 1106 | fn | addAllowedCatalogRef | (private) |
| 1120 | fn | addAllowedModelRef | (private) |
| 1187 | type | ModelRefStatus | pub |
| 1194 | type | ResolveAllowedModelRefResult | (private) |
| 1200 | fn | getModelRefStatusFromAllowedSet | (private) |
| 1222 | fn | getModelRefStatusWithFallbackModels | pub |
| 1250 | fn | resolveAllowedModelRefFromAliasIndex | pub |
| 1292 | fn | hasConfiguredProviderModelRows | pub |
| 1300 | fn | hasConfiguredProviderRowsNeedingManifestLookup | (private) |
| 1311 | fn | hasConfiguredModelRefsNeedingManifestLookup | (private) |
| 1334 | fn | hasConfiguredRowsNeedingManifestLookup | (private) |
| 1344 | fn | resolveConfiguredModelManifestPlugins | (private) |
| 1372 | fn | buildConfiguredModelCatalog | pub |
| 1437 | fn | isVllmQwenThinkingCompat | (private) |
| 1447 | fn | resolveHooksGmailModel | pub |
| 1475 | fn | normalizeModelSelection | pub |
| 1493 | fn | resolvePolicyAliasAgentId | (private) |
| 1500 | fn | resolveConfiguredModelPolicyAllow | pub |
| 1541 | fn | parseConfiguredModelVisibilityEntries | pub |
| 1577 | fn | resolveConfiguredWildcardModelKeys | (private) |
| 1592 | fn | expandModelCatalogWildcards | (private) |
| 1601 | fn | isModelKeyAllowedBySet | pub |
| 1615 | fn | resolveAllowedModelSelection | (private) |
| 1627 | fn | normalizeSelectionRef | (private) |
| 1653 | type | ModelVisibilityPolicy | pub |
| 1679 | fn | modelCatalogLogicalKey | pub |
| 1685 | fn | dedupeModelCatalogEntries | pub |
| 1703 | fn | createModelVisibilityPolicyWithFallbacks | pub |
| 1747 | fn | addConfiguredRef | (private) |

## src/agents/model-selection.test.ts (3119 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 207 | fn | resolveAnthropicOpusThinking | (private) |
| 218 | fn | resolveAnthropicOpus47Thinking | (private) |
| 227 | fn | resolveAnthropicOpus48Thinking | (private) |
| 236 | fn | resolveAnthropicVertexOpus48Thinking | (private) |
| 245 | fn | resolveClaudeCliOpus48Thinking | (private) |
| 254 | fn | createAgentFallbackConfig | (private) |
| 289 | fn | createProviderWithModelsConfig | (private) |
| 302 | fn | resolveConfiguredRefForTest | (private) |
| 343 | fn | expectParsedModelVariants | (private) |

## src/agents/models-config.applies-config-env-vars.test.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | createImplicitOpenRouterProvider | (private) |
| 73 | fn | createImplicitOpenAiProvider | (private) |
| 94 | fn | createImplicitGoogleVertexProvider | (private) |
| 112 | fn | resolveProvidersForConfigEnvTest | (private) |
| 136 | fn | createConfigEnvVarsConfig | (private) |
| 148 | fn | resolveProvidersAndCaptureDiscoveryEnv | (private) |
| 163 | fn | planGoogleVertexProfileCatalog | (private) |

## src/agents/models-config.merge.test.ts (536 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | loadMergeModules | (private) |
| 42 | fn | createConfigProvider | (private) |
| 52 | fn | createExistingProvider | (private) |

## src/agents/models-config.providers.implicit.ts (587 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ImplicitProviderParams | (private) |
| 69 | type | ImplicitProviderContext | (private) |
| 76 | fn | resolveLiveProviderCatalogTimeoutMs | (private) |
| 90 | fn | resolveProviderDiscoveryFilter | (private) |
| 140 | fn | resolveProviderPluginScopeFromProviderIds | (private) |
| 169 | fn | resolvePluginMetadataProviderOwners | (private) |
| 210 | fn | appendNormalizedPluginMetadataOwners | (private) |
| 238 | fn | resolveProviderDiscoveryFilterForTest | (private) |
| 249 | fn | resolvePluginMetadataProviderOwnersForTest | (private) |
| 265 | fn | mergeImplicitProviderSet | (private) |
| 277 | fn | mergeImplicitProviderConfig | (private) |
| 306 | fn | resolveImplicitProviderAuthMarker | (private) |
| 319 | fn | resolveConfiguredImplicitProvider | (private) |
| 335 | fn | resolveExistingImplicitProviderFromContext | (private) |
| 351 | fn | hasProviderWildcardVisibility | (private) |
| 360 | fn | hasRuntimeProviderCatalog | (private) |
| 366 | fn | resolvePluginImplicitProviders | (private) |
| 375 | fn | resolveCatalogProviderApiKey | (private) |
| 483 | fn | buildPluginCatalogConfig | (private) |
| 499 | fn | runProviderCatalogWithTimeout | (private) |
| 540 | fn | resolveImplicitProviders | pub |
| 546 | fn | getAuthStore | (private) |

## src/agents/models-config.runtime-source-snapshot.test.ts (531 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | fn | createOpenAiApiKeySourceConfig | (private) |
| 92 | fn | createOpenAiApiKeyRuntimeConfig | (private) |
| 108 | fn | createCustomProviderApiKeySourceConfig | (private) |
| 127 | fn | createCustomProviderApiKeyRuntimeConfig | (private) |
| 142 | fn | createOpenAiHeaderSourceConfig | (private) |
| 168 | fn | createOpenAiHeaderRuntimeConfig | (private) |
| 186 | fn | getOpenAiProvider | (private) |
| 190 | fn | createOpenAiSourceConfigWithHeadersAndApiKey | (private) |
| 200 | fn | createOpenAiRuntimeConfigWithHeadersAndApiKey | (private) |
| 206 | fn | withGatewayTokenMode | (private) |
| 217 | fn | expectGeneratedProviderApiKey | (private) |
| 228 | fn | planGeneratedProviders | (private) |
| 256 | fn | expectOpenAiHeaderMarkers | (private) |

## src/agents/models-config.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | PreparedOpenClawModelsJsonSource | (private) |
| 48 | type | EnsureOpenClawModelsJsonOptions | (private) |
| 57 | fn | readFileMtimeMs | (private) |
| 66 | fn | readPluginCatalogMtimes | (private) |
| 78 | fn | buildModelsJsonFingerprint | (private) |
| 114 | fn | modelsJsonReadyCacheKey | (private) |
| 118 | fn | readExistingModelsFile | (private) |
| 145 | fn | ensureModelsFileModeForModelsJson | (private) |
| 152 | fn | writeModelsFileAtomicForModelsJson | (private) |
| 166 | fn | isGeneratedPluginCatalogFile | (private) |
| 170 | fn | readGeneratedPluginCatalog | (private) |
| 176 | fn | isRecordLike | (private) |
| 180 | fn | mergeGeneratedPluginCatalogProvidersIntoExistingParsed | (private) |
| 215 | fn | removeStalePluginCatalogs | (private) |
| 239 | fn | writePluginCatalogsForModelsJson | (private) |
| 271 | fn | resolveModelsConfigInput | (private) |
| 299 | fn | buildModelsJsonSourceFingerprint | (private) |
| 352 | fn | withModelsJsonWriteLock | (private) |
| 357 | fn | prepareOpenClawModelsJsonSource | (private) |
| 495 | fn | ensureOpenClawModelsJson | pub |

## src/agents/models.profiles.live.test.ts (2386 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 113 | type | OllamaRuntimeApi | (private) |
| 122 | fn | parseCsvFilter | (private) |
| 126 | fn | parseProviderFilter | (private) |
| 130 | fn | parseModelFilter | (private) |
| 134 | fn | parseExplicitLiveModelRefs | (private) |
| 164 | fn | formatExplicitLiveModelRef | (private) |
| 168 | fn | filterLiveModelRefsByProvider | (private) |
| 181 | fn | findUnmatchedExplicitLiveModelRefs | (private) |
| 203 | fn | resolveLiveProviderDiscoveryProviderIds | (private) |
| 227 | fn | resolveLiveProviderDiscoveryPluginIds | (private) |
| 251 | fn | applyLiveProviderDiscoveryPluginCompat | (private) |
| 266 | fn | enableLiveProviderPlugins | (private) |
| 293 | fn | applyLiveOllamaProviderEnvCompat | (private) |
| 335 | fn | ensureLiveProviderApisRegistered | (private) |
| 360 | fn | createLiveOllamaRuntimeStreamFn | (private) |
| 374 | fn | readConfiguredOllamaBaseUrl | (private) |
| 378 | fn | resolveLiveOllamaProviderApiKey | (private) |
| 395 | fn | isOllamaRemoteApiKeyReference | (private) |
| 408 | fn | readStringProperty | (private) |
| 416 | fn | isLocalOllamaBaseUrl | (private) |
| 434 | fn | resolveLiveOllamaBaseUrl | (private) |
| 442 | fn | isLiveLocalOllamaModel | (private) |
| 452 | fn | canReuseConfiguredLocalOllamaApiKey | (private) |
| 471 | fn | canonicalOllamaCredentialBaseUrl | (private) |
| 487 | fn | resolveLiveModelApiKeyInfo | (private) |
| 522 | fn | isIpv4PrivateRange | (private) |
| 540 | fn | isIpv6LocalRange | (private) |
| 545 | fn | logProgress | (private) |
| 549 | fn | formatElapsedSeconds | (private) |
| 553 | fn | withLiveHeartbeat | (private) |
| 571 | fn | withLiveStageTimeout | (private) |
| 597 | fn | formatFailurePreview | (private) |
| 614 | fn | formatSkippedPreview | (private) |
| 624 | fn | isGoogleModelNotFoundError | (private) |
| 670 | fn | isChatGPTUsageLimitErrorMessage | (private) |
| 675 | fn | isRefreshTokenReused | (private) |
| 679 | fn | isAccountIdExtractionError | (private) |
| 683 | fn | isInstructionsRequiredError | (private) |
| 687 | fn | isOpenAiCodexHtmlInterruption | (private) |
| 695 | fn | isOllamaUnavailableErrorMessage | (private) |
| 704 | fn | isAudioOnlyModelErrorMessage | (private) |
| 708 | fn | isUnsupportedReasoningEffortErrorMessage | (private) |
| 716 | fn | isUnsupportedThinkingToggleErrorMessage | (private) |
| 720 | fn | isUnsupportedPlanErrorMessage | (private) |
| 724 | fn | isOpenRouterOpaqueBadRequestErrorMessage | (private) |
| 763 | fn | toInt | (private) |
| 772 | fn | resolveLiveModelConcurrency | (private) |
| 787 | fn | resolveLiveModelsJsonTimeoutMs | (private) |
| 1360 | fn | resolveTestReasoning | (private) |
| 1385 | fn | resolveLiveSystemPrompt | (private) |
| 1419 | fn | completeSimpleWithTimeout | (private) |
| 1463 | fn | requireToolChoicePayload | (private) |
| 1491 | fn | completeOkWithRetry | (private) |
| 1497 | fn | runOnce | (private) |
| 1534 | fn | isDeepSeekV4Model | (private) |
| 1541 | fn | runDeepSeekV4ReplayRegression | (private) |
| 1630 | fn | runExtraTurnProbes | (private) |

## src/agents/modes/interactive/theme/theme.ts (695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ColorValue | (private) |
| 98 | type | ThemeJson | (private) |
| 102 | type | ThemeColor | (private) |
| 149 | type | ThemeBg | (private) |
| 157 | type | ColorMode | (private) |
| 163 | fn | hexToRgb | (private) |
| 183 | fn | findClosestCubeIndex | (private) |
| 196 | fn | findClosestGrayIndex | (private) |
| 209 | fn | colorDistance | (private) |
| 224 | fn | rgbTo256 | (private) |
| 263 | fn | hexTo256 | (private) |
| 268 | fn | fgAnsi | (private) |
| 286 | fn | bgAnsi | (private) |
| 304 | fn | resolveVarRefs | (private) |
| 326 | fn | resolveThemeColors | (private) |
| 341 | class | Theme | pub |
| 456 | fn | parseThemeJson | (private) |
| 496 | fn | parseThemeJsonContent | (private) |
| 507 | fn | createTheme | (private) |
| 533 | fn | loadThemeFromPath | pub |
| 566 | type | CliHighlightTheme | (private) |
| 571 | fn | buildCliHighlightTheme | (private) |
| 591 | fn | getCliHighlightTheme | (private) |
| 603 | fn | highlightCode | pub |
| 627 | fn | getLanguageFromPath | pub |

## src/agents/openai-completions-transport.ts (1939 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | hasToolHistory | (private) |
| 87 | fn | assertOpenAICompletionsPayloadHasConversationTurn | (private) |
| 103 | fn | createSseDoneDetector | (private) |
| 109 | fn | finishLine | (private) |
| 116 | fn | observeText | (private) |
| 151 | fn | createOpenAICompletionsClient | (private) |
| 170 | fn | isAzureOpenAICompatibleHost | (private) |
| 178 | fn | isKnownOpenAICompletionsEndpoint | (private) |
| 193 | fn | buildOpenAICompletionsClientConfig | (private) |
| 241 | fn | createOpenAICompletionsTransportStreamFn | pub |
| 347 | fn | processOpenAICompletionsStream | (private) |
| 372 | type | ToolCallBlock | (private) |
| 394 | fn | blockIndex | (private) |
| 395 | fn | measureUtf8Bytes | (private) |
| 397 | fn | pushStreamEvent | (private) |
| 401 | fn | queuePostToolCallDelta | (private) |
| 422 | fn | appendThinkingDeltaInternal | (private) |
| 440 | fn | appendTextDeltaInternal | (private) |
| 453 | fn | flushPendingPostToolCallDeltas | (private) |
| 474 | fn | appendThinkingDelta | (private) |
| 478 | fn | appendTextDelta | (private) |
| 482 | fn | appendVisibleTextDelta | (private) |
| 492 | fn | appendRecoveredToolCall | (private) |
| 522 | fn | appendFilteredVisibleTextDelta | (private) |
| 537 | fn | flushDeepSeekToolCallRecovererAtEnd | (private) |
| 553 | fn | flushDeepSeekTextFilterAtEnd | (private) |
| 562 | fn | appendRoutedContentDelta | (private) |
| 576 | fn | appendPartitionedVisibleDelta | (private) |
| 581 | fn | emitReasoningUsageActivity | (private) |
| 594 | fn | flushReasoningTagTextPartitionerAtEnd | (private) |
| 810 | type | CompletionsReasoningDelta | (private) |
| 821 | fn | shouldFilterDeepSeekDsmlText | (private) |
| 825 | type | RecoveredDeepSeekDsmlToolCall | (private) |
| 832 | type | DeepSeekDsmlRecoveredPart | (private) |
| 846 | fn | createDeepSeekDsmlToolCallRecoverer | (private) |
| 907 | fn | parseDeepSeekDsmlToolCallBlock | (private) |
| 940 | fn | parseDeepSeekDsmlInvokeArguments | (private) |
| 978 | fn | xmlAttributeRegex | (private) |
| 989 | fn | parseXmlAttribute | (private) |
| 995 | fn | decodeDeepSeekDsmlText | (private) |
| 1004 | fn | findEarliestStringToken | (private) |
| 1015 | fn | longestDeepSeekDsmlToolOpenPrefixSuffixLength | (private) |
| 1026 | fn | getCompletionsContentDeltas | (private) |
| 1069 | fn | getCompletionsReasoningDeltas | (private) |
| 1074 | fn | pushDelta | (private) |
| 1122 | fn | resolveOpenAICompletionsReasoningEffort | (private) |
| 1126 | fn | shouldEmitOpenAICompletionsReasoning | (private) |
| 1140 | fn | shouldEmitOpenAICompletionsReasoningForModel | (private) |
| 1147 | fn | resolveOpenAICompletionsMaxTokens | (private) |
| 1163 | fn | resolveOpenAICompletionsModelMaxTokens | (private) |
| 1180 | fn | estimateOpenAICompletionsInputTokens | (private) |
| 1206 | fn | estimateOpenAICompletionsMessagesChars | (private) |
| 1231 | fn | estimateOpenAICompletionsContentChars | (private) |
| 1262 | fn | resolveOpenAICompletionsEffectiveContextTokens | (private) |
| 1276 | fn | isQwenOpenAICompletionsThinkingFormat | (private) |
| 1280 | fn | isOpenAICompletionsThinkingEnabled | (private) |
| 1285 | fn | setQwenChatTemplateThinking | (private) |
| 1293 | fn | applyQwenOpenAICompletionsThinkingParams | (private) |
| 1314 | fn | applyTogetherOpenAICompletionsThinkingParams | (private) |
| 1329 | fn | convertTools | (private) |
| 1374 | fn | extractGoogleThoughtSignature | (private) |
| 1391 | fn | isGoogleOpenAICompatModel | (private) |
| 1401 | fn | requiresGoogleCompatToolCallThoughtSignature | (private) |
| 1408 | fn | hasGoogleCompatThoughtSignatureTruncationFootprint | (private) |
| 1415 | fn | injectToolCallThoughtSignatures | (private) |
| 1498 | fn | stripCompletionsReasoningReplayFields | (private) |
| 1506 | fn | sanitizeOpenRouterReasoningReplayFields | (private) |
| 1542 | fn | sanitizeReasoningContentReplayFields | (private) |
| 1577 | fn | stripReasoningContentReplayTierSuffix | (private) |
| 1586 | fn | getReasoningContentReplayModelIdCandidates | (private) |
| 1615 | fn | shouldPreserveReasoningContentReplay | (private) |
| 1632 | fn | shouldPreserveOpenRouterReasoningReplay | (private) |
| 1640 | fn | shouldTrustReasoningContentReplayMetadata | (private) |
| 1655 | fn | sanitizeCompletionsReasoningReplayFields | (private) |
| 1680 | fn | buildOpenAICompletionsParams | pub |
| 1888 | fn | parseTransportChunkUsage | (private) |
| 1913 | fn | hasOpenAICompletionsReasoningUsageActivity | (private) |

## src/agents/openai-responses-transport.ts (2454 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | type | ReplayableResponseOutputMessage | (private) |
| 115 | type | OpenAIResponsesReasoningReplayMetadata | (private) |
| 125 | type | ReplayableResponseReasoningItem | (private) |
| 129 | type | ResponsesClientLike | (private) |
| 131 | type | OpenAIResponsesOptions | (private) |
| 140 | type | OpenAIResponsesReplayContext | (private) |
| 149 | fn | stringifyUnknown | (private) |
| 159 | fn | stringifyJsonLike | (private) |
| 172 | fn | getServiceTierCostMultiplier | (private) |
| 183 | fn | applyServiceTierPricing | (private) |
| 199 | fn | safeDebugValue | (private) |
| 215 | fn | responseInputTextChars | (private) |
| 238 | fn | responseInputRoles | (private) |
| 254 | fn | readToolPayloadField | (private) |
| 262 | fn | readResponsesToolDisplayName | (private) |
| 282 | fn | summarizeResponsesTools | (private) |
| 294 | fn | stringifyRedactedPayload | (private) |
| 307 | fn | stringifyRedactedEvent | (private) |
| 312 | type | ResponsesFailedNoDetailsObservation | (private) |
| 328 | type | ResponsesFailedEventSummary | (private) |
| 344 | fn | readResponseFailedString | (private) |
| 351 | fn | buildResponsesFailedEventSummary | (private) |
| 366 | fn | isResponseFailedIdentifierKey | (private) |
| 379 | fn | collectResponseFailedIdentifierHashes | (private) |
| 444 | fn | redactResponseFailedDiagnosticValue | (private) |
| 487 | fn | buildResponsesFailedFailureFields | (private) |
| 502 | fn | buildResponsesFailedNoDetailsObservation | (private) |
| 540 | fn | summarizeResponsesFailedNoDetailsObservation | (private) |
| 554 | fn | normalizeResponsesFailedEvent | (private) |
| 585 | fn | logResponsesFailedNoDetails | (private) |
| 594 | fn | summarizeResponsesPayload | (private) |
| 634 | fn | summarizeOpenAITransportError | (private) |
| 654 | fn | isInvalidEncryptedContentError | (private) |
| 672 | fn | stripEncryptedContentFields | (private) |
| 700 | fn | stripResponsesRequestEncryptedContent | (private) |
| 713 | fn | hashOptionalReplayContextValue | (private) |
| 718 | fn | buildOpenAIResponsesReplayContext | (private) |
| 732 | fn | buildOpenAIResponsesReasoningReplayMetadata | (private) |
| 743 | fn | tagOpenAIResponsesReasoningReplayItem | (private) |
| 760 | fn | isOpenAIResponsesReasoningReplayMetadata | (private) |
| 779 | fn | encryptedReasoningReplayMetadataMatches | (private) |
| 796 | fn | readOpenAIResponsesReasoningReplayBlockMetadata | (private) |
| 803 | fn | normalizeOpenAIResponsesReasoningReplayItem | (private) |
| 813 | fn | prepareOpenAIResponsesReasoningItemForReplay | (private) |
| 835 | fn | createResponsesStreamWithEncryptedContentRetry | (private) |
| 862 | fn | resolveAzureOpenAIApiVersion | (private) |
| 866 | fn | shortHash | (private) |
| 870 | fn | normalizeResponsesReplayItemId | (private) |
| 883 | fn | isSafeResponsesReplayItemId | (private) |
| 891 | fn | encodeTextSignatureV1 | (private) |
| 895 | fn | parseTextSignature | (private) |
| 923 | fn | buildResponsesInputMessage | (private) |
| 930 | fn | convertResponsesMessages | (private) |
| 951 | fn | sanitizeIdPart | (private) |
| 952 | fn | normalizeIdPart | (private) |
| 957 | fn | buildForeignResponsesItemId | (private) |
| 961 | fn | buildSameProviderCopilotResponsesItemId | (private) |
| 966 | fn | normalizeToolCallId | (private) |
| 1024 | fn | content | (private) |
| 1167 | fn | convertResponsesTools | (private) |
| 1198 | fn | processResponsesStream | (private) |
| 1231 | type | StreamingToolCallState | (private) |
| 1249 | fn | blockIndex | (private) |
| 1273 | fn | appendPendingMessageDelta | (private) |
| 1299 | fn | appendTerminalResponseTextItem | (private) |
| 1341 | fn | appendCompletedResponseToolCallItem | (private) |
| 1365 | fn | backfillTerminalResponseOutput | (private) |
| 1758 | fn | readResponsesOutputMessageText | (private) |
| 1776 | fn | resolveProviderTransportTurnState | (private) |
| 1806 | fn | createOpenAIResponsesClient | (private) |
| 1824 | fn | createOpenAIResponsesTransportStreamFn | pub |
| 1946 | fn | getPromptCacheRetention | (private) |
| 1956 | fn | resolveOpenAIReasoningEffort | (private) |
| 1964 | fn | hasResponsesWebSearchTool | (private) |
| 1983 | fn | raiseMinimalReasoningForResponsesWebSearch | (private) |
| 2012 | fn | stripOpenAICodexResponsesUnsupportedTextFields | (private) |
| 2026 | fn | sanitizeOpenAICodexResponsesParams | (private) |
| 2040 | fn | buildOpenAICodexResponsesInstructions | (private) |
| 2047 | fn | resolveOpenAICodexResponsesInstructions | (private) |
| 2060 | fn | ensureOpenAICodexResponsesInput | (private) |
| 2077 | fn | resolveOpenAIResponsesTextFormat | (private) |
| 2094 | fn | buildOpenAIResponsesParams | (private) |
| 2224 | fn | createAzureOpenAIResponsesTransportStreamFn | pub |
| 2342 | fn | normalizeAzureBaseUrl | (private) |
| 2346 | fn | resolveAzureDeploymentName | (private) |
| 2353 | fn | createAzureOpenAIClient | (private) |
| 2380 | fn | buildAzureOpenAIResponsesParams | (private) |
| 2393 | type | OpenAIResponsesRequestParams | (private) |

## src/agents/openai-transport-stream.base.test.ts (1512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 536 | fn | messageItem | (private) |
| 616 | fn | doneItem | (private) |
| 697 | fn | messageEvents | (private) |

## src/agents/openai-transport-stream.deepseek-and-shaping.test.ts (1328 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 401 | fn | runOnce | (private) |

## src/agents/openai-transport-stream.inline-reasoning-and-tool-calls.test.ts (1807 lines)

_No symbols extracted._

## src/agents/openai-transport-stream.reasoning-and-cache.test.ts (1235 lines)

_No symbols extracted._

## src/agents/openai-transport-stream.replay-and-tools.test.ts (2008 lines)

_No symbols extracted._

## src/agents/openai-transport-stream.streaming.test.ts (2189 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1046 | fn | runOnce | (private) |

## src/agents/openai-transport-stream.usage-and-calls.test.ts (1512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 664 | fn | makeAssistantOutput | (private) |

## src/agents/openclaw-tools.camera.test.ts (773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | GatewayCall | (private) |
| 53 | fn | unexpectedGatewayMethod | (private) |
| 57 | fn | getNodesTool | (private) |
| 67 | fn | executeNodes | (private) |
| 74 | type | NodesToolResult | (private) |
| 75 | type | GatewayMockResult | (private) |
| 77 | fn | requireRecord | (private) |
| 84 | fn | expectInvokeParams | (private) |
| 104 | fn | mockNodeList | (private) |
| 116 | fn | expectSingleImage | (private) |
| 127 | fn | expectNoImages | (private) |
| 132 | fn | expectFirstMediaUrl | (private) |
| 139 | fn | expectFirstTextContains | (private) |
| 146 | fn | parseFirstTextJson | (private) |
| 153 | fn | setupNodeInvokeMock | (private) |
| 177 | fn | setupPhotosLatestMock | (private) |
| 190 | fn | executePhotosLatest | (private) |

## src/agents/openclaw-tools.media-factory-plan.test.ts (1093 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | CreateOpenClawToolsOptions | (private) |
| 28 | fn | createOpenClawToolsForTest | (private) |
| 32 | fn | createAuthStore | (private) |
| 49 | fn | createPlugin | (private) |
| 77 | fn | createInstalledPluginRecord | (private) |
| 100 | fn | legacyModelProviderConfig | (private) |
| 110 | fn | installSnapshot | (private) |

## src/agents/openclaw-tools.session-status.test.ts (2576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | createMockConfig | (private) |
| 76 | fn | createScopedSessionStores | (private) |
| 94 | fn | installScopedSessionStores | (private) |
| 113 | fn | createSessionsModuleMock | (private) |
| 114 | fn | resolveMockStorePath | (private) |
| 187 | fn | createGatewayCallModuleMock | (private) |
| 193 | fn | createConfigModuleMock | (private) |
| 199 | fn | createModelCatalogModuleMock | (private) |
| 219 | fn | createAuthProfilesModuleMock | (private) |
| 227 | fn | createModelAuthModuleMock | (private) |
| 235 | fn | createProviderUsageModuleMock | (private) |
| 246 | fn | formatPrimaryModelLabel | (private) |
| 250 | fn | formatStatusLines | (private) |
| 256 | fn | createCommandsStatusRuntimeModuleMock | (private) |
| 391 | fn | resetSessionStore | (private) |
| 448 | fn | installSandboxedSessionStatusConfig | (private) |
| 465 | fn | mockSpawnedSessionList | (private) |
| 477 | fn | expectSpawnedSessionLookupCalls | (private) |
| 491 | fn | expectRecordFields | (private) |
| 502 | fn | mockCallArg | (private) |
| 510 | fn | latestMockCallArg | (private) |
| 514 | fn | getSessionStatusTool | (private) |

## src/agents/openclaw-tools.sessions.test.ts (2308 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | countMatching | (private) |
| 86 | fn | installMessagingTestRegistry | (private) |
| 141 | fn | createOpenClawTools | (private) |
| 149 | fn | gatewayCall | (private) |
| 179 | fn | waitForCalls | (private) |
| 188 | type | GatewayCall | (private) |
| 193 | type | AgentCallParams | (private) |
| 207 | type | SessionsSendDetails | (private) |
| 220 | fn | requireGatewayCall | (private) |
| 228 | fn | agentParams | (private) |
| 232 | fn | expectInterSessionAgentCall | (private) |
| 242 | fn | sessionsSendDetails | (private) |
| 270 | fn | byName | (private) |
| 278 | fn | schemaProp | (private) |
| 295 | fn | hasSchemaProp | (private) |

## src/agents/openclaw-tools.subagents.sessions-spawn.lifecycle.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | countMatching | (private) |
| 50 | fn | expectAcceptedRunDetails | (private) |
| 62 | fn | buildDiscordCleanupHooks | (private) |
| 76 | fn | getDiscordGroupSpawnTool | (private) |
| 83 | fn | executeSpawnAndExpectAccepted | (private) |
| 100 | fn | executeBoundAccountSpawn | (private) |
| 133 | fn | emitLifecycleEndAndFlush | (private) |
| 157 | fn | waitForRunCleanup | (private) |

## src/agents/openclaw-tools.ts (777 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 102 | fn | filterToolsByClientCaps | pub |
| 111 | fn | createOpenClawTools | pub |

## src/agents/prepared-model-runtime.lifecycle.test.ts (1053 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 3 | type | LoadStaticCatalog | (private) |
| 98 | fn | getTesting | (private) |

## src/agents/prepared-model-runtime.test.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 3 | type | LoadStaticCatalog | (private) |
| 99 | fn | getTesting | (private) |

## src/agents/prepared-model-runtime.ts (761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | AuthMutationEvent | (private) |
| 60 | fn | loadPreparedModelRuntimeSnapshot | pub |
| 120 | fn | getPreparedModelRuntimeSnapshot | pub |
| 145 | fn | getPreparedModelRuntimeCatalogSnapshot | pub |
| 152 | fn | publishPreparedModelRuntimeSnapshot | pub |
| 199 | fn | activateStandalonePreparedModelRuntime | pub |
| 224 | fn | activateStandalonePreparedModelRuntimeNow | (private) |
| 260 | fn | acquirePreparedModelRuntimeLease | (private) |
| 377 | fn | acquireAgentRunPreparedModelRuntime | pub |
| 385 | fn | acquireReadOnlyPreparedModelRuntime | pub |
| 392 | fn | prepareModelRuntimeSnapshot | pub |
| 438 | fn | markPreparedModelRuntimeSnapshotsStale | pub |
| 470 | fn | rejectPendingPreparedModelRuntimeReplacement | pub |
| 483 | fn | refreshPreparedModelRuntimeSnapshotsNow | (private) |
| 565 | fn | publication | (private) |
| 600 | fn | refreshPreparedModelRuntimeSnapshots | pub |
| 654 | fn | enqueuePreparedModelRuntimePublication | (private) |
| 663 | fn | drainPendingAuthMutations | (private) |
| 710 | fn | invalidateForAuthMutation | (private) |
| 739 | fn | resetPreparedModelRuntimeSnapshotsForTest | (private) |

## src/agents/provider-attribution.test.ts (1515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | fn | expectRecordFields | (private) |
| 142 | type | ProviderAttributionTestEnv | (private) |
| 144 | fn | resolveProviderAttributionPolicy | (private) |
| 148 | fn | resolveProviderAttributionIdentity | (private) |
| 153 | fn | listProviderAttributionPolicies | (private) |

## src/agents/provider-attribution.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ProviderAttributionVerification | (private) |
| 26 | type | ProviderAttributionHook | (private) |
| 33 | type | ProviderAttributionPolicy | pub |
| 45 | type | ProviderAttributionIdentity | (private) |
| 48 | type | ProviderRequestTransport | pub |
| 50 | type | ProviderRequestCapability | pub |
| 53 | type | ProviderEndpointClass | pub |
| 82 | type | ProviderEndpointResolution | pub |
| 89 | type | ProviderRequestPolicyInput | pub |
| 98 | type | ProviderRequestPolicyResolution | pub |
| 114 | type | ProviderRequestCapabilitiesInput | pub |
| 120 | type | ProviderRequestCompatibilityFamily | pub |
| 123 | type | ProviderRequestCapabilities | pub |
| 136 | fn | readCompatBoolean | (private) |
| 182 | type | ManifestProviderEndpointCacheEntry | (private) |
| 190 | type | ManifestProviderRequestCacheEntry | (private) |
| 198 | fn | formatOpenClawUserAgent | (private) |
| 202 | fn | tryParseHostname | (private) |
| 210 | fn | isSchemelessHostnameCandidate | (private) |
| 214 | fn | resolveUrlHostname | (private) |
| 229 | fn | normalizeComparableBaseUrl | (private) |
| 252 | fn | isManifestProviderEndpointClass | (private) |
| 256 | fn | readManifestProviderEndpoints | (private) |
| 295 | fn | readManifestProviderRequests | (private) |
| 334 | fn | collectManifestProviderEndpoints | (private) |
| 350 | fn | collectManifestProviderRequests | (private) |
| 360 | fn | loadManifestProviderEndpointCache | (private) |
| 367 | fn | loadManifestProviderRequestCache | (private) |
| 374 | fn | resolveManifestProviderRequest | (private) |
| 380 | fn | hostMatchesSuffix | (private) |
| 389 | fn | buildManifestEndpointResolution | (private) |
| 404 | fn | resolveManifestProviderEndpoint | (private) |
| 425 | fn | isLocalEndpointHost | (private) |
| 434 | fn | resolveProviderEndpoint | pub |
| 456 | fn | resolveKnownProviderFamily | (private) |
| 471 | fn | isOpenAIResponsesApi | (private) |
| 476 | fn | isCanonicalOrLegacyOpenAIProvider | (private) |
| 480 | fn | resolveProviderAttributionIdentity | (private) |
| 489 | fn | buildOpenRouterAttributionPolicy | (private) |
| 509 | fn | buildNvidiaAttributionPolicy | (private) |
| 526 | fn | buildGoogleAttributionPolicy | (private) |
| 545 | fn | buildOpenAIAttributionPolicy | (private) |
| 565 | fn | buildXaiAttributionPolicy | (private) |
| 585 | fn | buildSdkHookOnlyPolicy | (private) |
| 601 | fn | listProviderAttributionPolicies | (private) |
| 637 | fn | resolveProviderAttributionPolicy | (private) |
| 646 | fn | resolveProviderRequestPolicy | pub |
| 716 | fn | resolveProviderRequestCapabilities | pub |
| 814 | fn | describeProviderRequestRoutingPolicy | (private) |
| 832 | fn | describeProviderRequestRouteClass | (private) |
| 850 | fn | describeProviderRequestRoutingSummary | pub |

## src/agents/provider-local-service.test.ts (1027 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | freePort | (private) |
| 49 | fn | waitForProbeFailure | (private) |
| 70 | fn | withSpawnReadyHealthProbe | (private) |
| 112 | fn | waitForReadyOneShotHostExit | (private) |
| 117 | fn | cleanup | (private) |
| 123 | fn | finish | (private) |
| 131 | fn | onMessage | (private) |
| 140 | fn | onError | (private) |
| 141 | fn | onExit | (private) |
| 164 | fn | waitForOneShotHostExit | (private) |

## src/agents/provider-local-service.ts (788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | ModelWithProviderLocalService | (private) |
| 37 | type | ManagedLocalService | (private) |
| 50 | type | LocalServiceExit | (private) |
| 55 | type | LocalServiceDiagnostics | (private) |
| 69 | type | ProviderLocalServiceTarget | pub |
| 77 | type | ConfiguredProviderLocalServiceTarget | pub |
| 80 | type | ProviderLocalServiceLease | pub |
| 85 | type | AcquireConfiguredProviderLocalService | pub |
| 91 | fn | createConfiguredProviderLocalServiceAcquirer | pub |
| 109 | fn | readConfiguredProviderBaseUrl | (private) |
| 120 | fn | normalizeProviderBaseUrl | (private) |
| 140 | fn | configuredProviderBaseUrlVariants | (private) |
| 149 | fn | isLoopbackProviderBaseUrl | (private) |
| 158 | fn | isConfiguredProviderBaseUrl | (private) |
| 170 | fn | attachModelProviderLocalService | pub |
| 183 | fn | getModelProviderLocalService | pub |
| 190 | fn | ensureModelProviderLocalService | pub |
| 208 | fn | ensureProviderLocalService | pub |
| 229 | fn | release | (private) |
| 286 | fn | stopManagedProviderLocalServicesForTest | pub |
| 294 | fn | getManagedProviderLocalServiceDiagnosticsForTest | pub |
| 302 | fn | validateLocalServiceConfig | (private) |
| 308 | fn | resolveHealthUrl | (private) |
| 316 | fn | localServiceKey | (private) |
| 331 | fn | hashStringRecord | (private) |
| 338 | fn | buildHealthProbeHeaders | (private) |
| 343 | fn | appendHeaders | (private) |
| 358 | fn | probeHealth | (private) |
| 373 | fn | onAbort | (private) |
| 391 | fn | startAndWaitForLocalService | (private) |
| 432 | fn | captureStdout | (private) |
| 442 | fn | captureStderr | (private) |
| 507 | fn | appendLocalServiceOutputTail | (private) |
| 551 | fn | unrefLocalServiceOutput | (private) |
| 555 | fn | drainLocalServiceOutput | (private) |
| 564 | fn | formatLocalServiceDiagnosticTail | (private) |
| 568 | fn | scheduleIdleStop | (private) |
| 595 | fn | clearIdleTimer | (private) |
| 602 | fn | stopManagedService | (private) |
| 619 | fn | stopManagedProcessForRestart | (private) |
| 638 | fn | formatLocalServiceExit | (private) |
| 642 | fn | installExitHandler | (private) |
| 654 | fn | toAbortError | (private) |
| 663 | fn | throwIfAborted | (private) |
| 669 | fn | isAbortForSignal | (private) |
| 676 | fn | waitForAbort | (private) |
| 682 | fn | onAbort | (private) |
| 686 | fn | cleanup | (private) |
| 701 | fn | sleep | (private) |
| 704 | fn | cleanup | (private) |
| 705 | fn | onDone | (private) |
| 709 | fn | onAbort | (private) |
| 720 | fn | waitForSpawnResult | (private) |
| 727 | fn | finish | (private) |
| 737 | fn | onError | (private) |
| 738 | fn | onSpawn | (private) |
| 739 | fn | onAbort | (private) |
| 751 | fn | waitForChildExit | (private) |
| 761 | fn | cleanup | (private) |
| 766 | fn | finish | (private) |
| 770 | fn | onExit | (private) |
| 771 | fn | onAbort | (private) |
| 783 | fn | hasLocalServiceProcessExited | pub |

## src/agents/provider-request-config.test.ts (678 lines)

_No symbols extracted._

## src/agents/provider-request-config.ts (847 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | RequestApi | (private) |
| 30 | type | ProviderRequestAuthOverride | pub |
| 46 | type | ProviderRequestTlsOverride | pub |
| 56 | type | ProviderRequestProxyOverride | pub |
| 68 | type | ProviderRequestTransportOverrides | pub |
| 76 | type | ModelProviderRequestTransportOverrides | pub |
| 82 | type | ResolvedProviderRequestAuthConfig | (private) |
| 104 | type | ResolvedProviderRequestProxyConfig | (private) |
| 120 | type | ResolvedProviderRequestTlsConfig | (private) |
| 134 | type | ResolvedProviderRequestExtraHeadersConfig | (private) |
| 139 | type | ResolvedProviderRequestConfig | pub |
| 150 | type | ProviderRequestHeaderPrecedence | (private) |
| 154 | type | ResolvedProviderRequestPolicyConfig | (private) |
| 168 | type | ResolveProviderRequestPolicyConfigParams | (private) |
| 187 | fn | resolvePrivateNetworkAccess | (private) |
| 206 | fn | sanitizeConfiguredRequestString | (private) |
| 218 | fn | sanitizeConfiguredProviderRequest | pub |
| 345 | fn | sanitizeConfiguredModelProviderRequest | pub |
| 361 | fn | mergeProviderRequestOverrides | (private) |
| 388 | fn | mergeModelProviderRequestOverrides | pub |
| 404 | fn | normalizeBaseUrl | pub |
| 405 | fn | normalizeBaseUrl | pub |
| 409 | fn | normalizeBaseUrl | pub |
| 422 | fn | resolveProviderDefaultRequestHeaders | (private) |
| 437 | fn | mergeProviderRequestHeaders | (private) |
| 465 | fn | resolveTlsOverride | (private) |
| 494 | fn | resolveAuthOverride | (private) |
| 534 | fn | sanitizeRuntimeProviderRequestOverrides | (private) |
| 555 | fn | applyPreparedRuntimeAuthToModel | pub |
| 595 | fn | resolveProxyOverride | (private) |
| 622 | fn | applyResolvedAuthHeader | (private) |
| 646 | fn | toTlsConnectOptions | (private) |
| 675 | fn | buildProviderRequestDispatcherPolicy | pub |
| 698 | fn | resolveProviderRequestPolicyConfig | pub |
| 767 | fn | resolveProviderRequestConfig | pub |
| 796 | fn | resolveProviderRequestHeaders | pub |
| 824 | type | ModelWithProviderRequestTransport | (private) |
| 829 | fn | attachModelProviderRequestTransport | pub |
| 842 | fn | getModelProviderRequestTransport | pub |

## src/agents/provider-transport-fetch.test.ts (2289 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | ProviderRequestPolicyConfigMockResult | (private) |
| 34 | class | MockFinalizationRegistry | (private) |
| 101 | fn | latestGuardedFetchParams | (private) |
| 111 | fn | latestTrustedEnvProxyParams | (private) |
| 120 | fn | responseStreamText | (private) |
| 124 | fn | responseStreamChunks | (private) |
| 136 | fn | openResponseStreamText | (private) |
| 181 | fn | sentinelModel | (private) |
| 1983 | fn | formatObsoleteHttpDates | (private) |

## src/agents/provider-transport-fetch.ts (935 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | hasReadableSseData | (private) |
| 85 | fn | findSseEventBoundary | (private) |
| 99 | fn | cancelReaderBestEffort | (private) |
| 108 | fn | capNonOkResponseBodyLazily | (private) |
| 152 | fn | sanitizeOpenAISdkSseResponse | (private) |
| 305 | fn | shouldSanitizeOpenAISdkSseResponse | (private) |
| 316 | fn | isJsonContentType | (private) |
| 320 | type | OpenAISdkStreamBodyKind | (private) |
| 322 | fn | classifyOpenAISdkStreamBodyPrefix | (private) |
| 343 | fn | classifyOpenAISdkStreamBody | (private) |
| 377 | fn | withOpenAISdkStreamContentType | (private) |
| 387 | fn | normalizeOpenAISdkStreamContentType | (private) |
| 436 | fn | requestBodyHasStreamTrue | (private) |
| 464 | fn | parseRetryAfterSeconds | pub |
| 495 | fn | resolveMaxSdkRetryWaitSeconds | (private) |
| 521 | fn | shouldBypassLongSdkRetry | (private) |
| 541 | fn | buildManagedResponse | (private) |
| 547 | fn | finalizeLocalServiceLease | (private) |
| 573 | fn | resolveModelRequestPolicy | (private) |
| 603 | fn | resolveModelRequestTimeoutMs | pub |
| 618 | fn | buildModelRequestSignal | (private) |
| 632 | fn | resolveHttpOrigin | (private) |
| 648 | fn | normalizeProviderOriginHostname | (private) |
| 664 | fn | canImplicitlyTrustConfiguredBaseUrlOrigin | (private) |
| 680 | fn | canApplyFakeIpHostnamePolicy | (private) |
| 694 | fn | resolveProviderTransportSsrFPolicy | pub |
| 724 | fn | headersContainSecretSentinel | (private) |
| 736 | fn | swapSecretSentinelsInUrl | (private) |
| 753 | fn | swapSecretSentinelsForEgress | (private) |
| 781 | fn | buildGuardedModelFetch | pub |
| 798 | fn | read | (private) |

## src/agents/run-wait.test.ts (1082 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | AgentWaitGatewayRequest | (private) |
| 35 | fn | expectNumber | (private) |
| 43 | fn | gatewayWaitRequests | (private) |
| 47 | fn | requireRequestAt | (private) |
| 58 | fn | expectAgentWaitRequest | (private) |

## src/agents/sandbox.resolveSandboxContext.test.ts (552 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | createSandboxFixtureDir | (private) |

## src/agents/session-file-repair.test.ts (1249 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | buildSessionHeaderAndMessage | (private) |
| 36 | fn | readTrustedSnapshot | (private) |
| 47 | fn | createTempSessionPath | (private) |
| 53 | fn | expectNoRetainedBackup | (private) |
| 63 | fn | requireFirstLogMessage | (private) |

## src/agents/session-file-repair.ts (984 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | RepairReport | (private) |
| 38 | type | SessionRepairFileSnapshot | (private) |
| 46 | type | SessionRepairCacheEntry | (private) |
| 58 | fn | invalidateSessionFileRepairCache | pub |
| 69 | type | SessionMessageEntry | (private) |
| 74 | fn | readSessionRepairSnapshot | (private) |
| 94 | fn | isSameSessionRepairSnapshot | (private) |
| 107 | fn | isSameSessionRepairFile | (private) |
| 114 | fn | rememberSessionRepair | (private) |
| 133 | fn | countToolResultIdBytes | (private) |
| 144 | fn | readSessionRepairSuffix | (private) |
| 166 | fn | isSessionHeader | (private) |
| 184 | fn | isStructurallyInvalidMessageEntry | (private) |
| 199 | fn | isAssistantEntryWithEmptyContent | (private) |
| 223 | fn | rewriteAssistantEntryWithEmptyContent | (private) |
| 233 | fn | isImageMimeType | (private) |
| 237 | fn | containsNonAscii | (private) |
| 246 | fn | isCorruptedImageContentBlock | (private) |
| 270 | fn | repairEntryWithCorruptedImageBlocks | (private) |
| 302 | type | UserEntryRepair | (private) |
| 307 | fn | repairUserEntryWithBlankTextContent | (private) |
| 370 | fn | buildRepairSummaryParts | (private) |
| 400 | fn | isCodeModeToolCallRepairCandidate | (private) |
| 423 | fn | normalizeTrimmedString | (private) |
| 427 | fn | isOpenAIResponsesReplayApi | (private) |
| 436 | fn | isTranscriptOnlyDeliveryMirrorEntry | (private) |
| 453 | fn | isResponsesMessageToolRepairCandidate | (private) |
| 474 | fn | isMessageToolCallName | (private) |
| 478 | fn | findNextSessionMessageEntry | (private) |
| 495 | fn | collectPersistedToolResultIds | (private) |
| 517 | fn | makeSyntheticToolResultEntry | (private) |
| 536 | fn | insertMissingCodeModeToolResults | (private) |
| 582 | fn | insertMissingMessageToolDeliveryMirrorResults | (private) |
| 632 | type | RepairEntriesResult | (private) |
| 641 | fn | repairSessionLines | (private) |
| 712 | fn | hasEntryRepairs | (private) |
| 722 | fn | tryIncrementalSessionRepair | (private) |
| 793 | fn | repairSessionFileIfNeeded | pub |

## src/agents/session-tool-result-guard.test.ts (843 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | AppendMessage | (private) |
| 13 | fn | asAppendMessage | (private) |
| 20 | fn | appendToolResultText | (private) |
| 34 | fn | appendAssistantToolCall | (private) |
| 60 | fn | getPersistedMessages | (private) |
| 67 | fn | expectPersistedRoles | (private) |
| 74 | fn | getToolResultText | (private) |

## src/agents/session-tool-result-guard.tool-result-persist-hook.test.ts (948 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ToolResultMessage | (private) |
| 17 | type | PersistedToolResultMessage | (private) |
| 25 | fn | writeTempPlugin | (private) |
| 46 | fn | appendToolCallAndResult | (private) |
| 62 | fn | appendToolResultWithTail | (private) |
| 80 | fn | getPersistedToolResult | (private) |
| 89 | fn | hasRecordDetails | (private) |
| 97 | fn | requirePersistedToolResultMessage | (private) |
| 105 | fn | requirePersistedToolResult | (private) |
| 113 | fn | requireToolResultText | (private) |
| 121 | fn | initializeTempPlugin | (private) |
| 142 | fn | expectPersistedToolResultTextCapped | (private) |
| 149 | fn | expectPersistedToolResultDetailsCapped | (private) |
| 411 | fn | redactedScanBoundaryTail | (private) |

## src/agents/session-tool-result-guard.ts (947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | capToolResultSize | (private) |
| 56 | fn | resolveMaxToolResultChars | (private) |
| 62 | type | UserAgentMessage | (private) |
| 63 | type | AssistantAgentMessage | (private) |
| 65 | type | CompactionAppendValidator | (private) |
| 66 | type | AppendMessageOptions | (private) |
| 68 | fn | isUserAgentMessage | (private) |
| 72 | fn | isExpectedCompactionAppend | (private) |
| 97 | type | TranscriptSeqByEntryId | (private) |
| 99 | fn | resolveEntryTranscriptSeq | (private) |
| 121 | fn | resolveAppendedMessageSeq | (private) |
| 159 | type | ToolResultDetailRedactionConfig | (private) |
| 160 | fn | originalDetailsSizeFields | (private) |
| 166 | fn | redactPersistedDetailString | (private) |
| 203 | fn | isSensitivePersistedDetailKey | (private) |
| 207 | fn | selectPersistedDetailRedactionKey | (private) |
| 214 | fn | redactedOriginalDetailKeys | (private) |
| 223 | fn | redactPersistedDetailValue | (private) |
| 273 | fn | redactPersistedSummaryField | (private) |
| 290 | fn | sanitizePersistedSessionDetail | (private) |
| 323 | fn | copyPersistedResultStateFields | (private) |
| 341 | fn | buildPersistedDetailsFallback | (private) |
| 392 | fn | enforcePersistedDetailsByteCap | (private) |
| 419 | fn | enforceRedactedPersistedDetailsByteCap | (private) |
| 445 | fn | sanitizeToolResultDetailsForPersistence | (private) |
| 531 | fn | capToolResultDetails | (private) |
| 548 | fn | capToolResultForPersistence | (private) |
| 556 | fn | normalizePersistedToolResultName | (private) |
| 584 | fn | isTranscriptOnlyOpenClawAssistantMessage | (private) |
| 593 | fn | installSessionToolResultGuard | pub |
| 655 | fn | persistMessage | (private) |
| 660 | fn | persistToolResult | (private) |
| 677 | fn | getSessionFile | (private) |
| 706 | fn | append | (private) |
| 732 | fn | flushPendingToolResults | (private) |
| 766 | fn | clearPendingToolResults | (private) |
| 770 | fn | guardedAppend | (private) |

## src/agents/session-transcript-repair.test.ts (1594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | getAssistantToolCallBlocks | (private) |
| 379 | fn | createAbortedAssistantTranscript | (private) |
| 427 | fn | makeAssistant | (private) |
| 435 | fn | makeResult | (private) |
| 445 | fn | resultTexts | (private) |
| 643 | fn | makeSyntheticResult | (private) |
| 653 | fn | makeCustomSyntheticResult | (private) |
| 664 | fn | makeRealResult | (private) |
| 674 | fn | makeAssistant | (private) |
| 911 | fn | sanitizeAssistantContent | (private) |
| 926 | fn | sanitizeAssistantToolCalls | (private) |

## src/agents/session-transcript-repair.ts (797 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | RawToolCallBlock | (private) |
| 44 | fn | isRawToolCallBlock | (private) |
| 52 | fn | hasToolCallInput | (private) |
| 59 | fn | hasToolCallId | (private) |
| 70 | fn | hasPartialJson | (private) |
| 76 | fn | isCompleteJsonObject | (private) |
| 85 | fn | isFinalizedOpenAIResponsesToolCall | (private) |
| 109 | fn | sanitizeToolCallBlock | (private) |
| 129 | fn | countRawToolCallBlocks | (private) |
| 139 | fn | isReplaySafeThinkingAssistantTurn | (private) |
| 168 | fn | hasSessionsSpawnAttachmentToolCall | (private) |
| 189 | fn | makeMissingToolResult | (private) |
| 215 | fn | isSyntheticMissingToolResult | (private) |
| 240 | fn | normalizeToolResultName | (private) |
| 264 | fn | normalizeLegacyToolResultId | (private) |
| 285 | type | ToolCallInputRepairReport | (private) |
| 291 | type | ToolCallInputRepairOptions | (private) |
| 296 | type | ErroredAssistantResultPolicy | (private) |
| 298 | type | ToolUseResultPairingOptions | (private) |
| 303 | fn | stripToolResultDetails | pub |
| 323 | fn | collectFollowingToolResults | (private) |
| 358 | fn | repairToolCallInputs | (private) |
| 526 | fn | sanitizeToolCallInputs | pub |
| 533 | fn | sanitizeToolUseResultPairing | pub |
| 540 | type | ToolUseRepairReport | (private) |
| 548 | fn | shouldDropErroredAssistantResults | (private) |
| 552 | fn | assistantHasToolCalls | (private) |
| 559 | type | ToolResultMessage | (private) |
| 561 | type | ToolResultRecord | (private) |
| 566 | type | ToolCallOccurrence | (private) |
| 572 | type | SameIdOccurrenceGroup | (private) |
| 579 | type | ToolUseFrame | (private) |
| 589 | fn | buildToolUseFrames | (private) |
| 682 | fn | repairToolUseResultPairing | pub |
| 746 | fn | pushUnframedRange | (private) |

## src/agents/session-write-lock.test.ts (1456 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | expectLockRemovedOnlyAfterFinalRelease | (private) |
| 34 | fn | expectPathMissing | (private) |
| 44 | fn | lockCleanupRecords | (private) |
| 55 | fn | expectCurrentPidOwnsLock | (private) |
| 69 | fn | withTempSessionLockFile | (private) |
| 81 | fn | writeCurrentProcessLock | (private) |
| 93 | fn | readFilePathToString | (private) |
| 106 | fn | withSymlinkedSessionPaths | (private) |
| 139 | fn | expectActiveInProcessLockIsNotReclaimed | (private) |
| 181 | fn | pinCurrentProcessStartTimeForTest | (private) |
| 1093 | fn | readOwnerProcessArgs | (private) |
| 1313 | fn | keepAlive | (private) |
| 1395 | fn | otherHandler | (private) |
| 1442 | fn | keepAlive | (private) |

## src/agents/session-write-lock.ts (1099 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | LockFilePayload | (private) |
| 29 | fn | isValidLockNumber | (private) |
| 33 | type | SessionLockInspection | pub |
| 45 | type | SessionLockOwnerProcessArgsReader | pub |
| 48 | type | CleanupSignal | (private) |
| 64 | fn | yieldEventLoop | (private) |
| 76 | type | CleanupState | (private) |
| 82 | type | WatchdogState | (private) |
| 88 | type | LockInspectionDetails | (private) |
| 96 | fn | isFileLockError | (private) |
| 100 | type | SessionWriteLockAcquireTimeoutConfig | pub |
| 102 | type | SessionWriteLockMsKey | (private) |
| 110 | fn | readPositiveMsEnv | (private) |
| 129 | fn | parsePositiveMs | (private) |
| 148 | fn | resolveSessionWriteLockMs | (private) |
| 161 | fn | resolveSessionWriteLockAcquireTimeoutMs | pub |
| 173 | fn | resolveSessionWriteLockStaleMs | pub |
| 184 | fn | resolveSessionWriteLockMaxHoldMs | (private) |
| 195 | fn | resolveSessionWriteLockOptions | pub |
| 209 | fn | resolveCleanupState | (private) |
| 223 | fn | resolveWatchdogState | (private) |
| 236 | fn | resolvePositiveMs | (private) |
| 253 | fn | resolveSessionLockMaxHoldFromTimeout | pub |
| 271 | fn | releaseAllLocksSync | (private) |
| 276 | fn | runLockWatchdogCheck | (private) |
| 300 | fn | stopWatchdogTimer | (private) |
| 309 | fn | shouldStartBackgroundWatchdog | (private) |
| 313 | fn | ensureWatchdogStarted | (private) |
| 331 | fn | handleTerminationSignal | (private) |
| 349 | fn | registerCleanupHandlers | (private) |
| 368 | fn | handler | (private) |
| 377 | fn | unregisterCleanupHandlers | (private) |
| 390 | fn | parseLockPayload | (private) |
| 408 | fn | readLockPayload | (private) |
| 417 | fn | readLockPayloadForDiagnostics | (private) |
| 429 | fn | resolveNormalizedSessionFile | (private) |
| 440 | fn | resolveSessionWriteLockTarget | (private) |
| 454 | fn | normalizeOwnerProcessArg | (private) |
| 458 | fn | isOpenClawSessionOwnerArgv | (private) |
| 492 | fn | readOwnerProcessArgs | (private) |
| 504 | fn | inspectLockPayload | (private) |
| 562 | fn | shouldTreatAsNonOpenClawOwner | (private) |
| 588 | fn | lockInspectionNeedsMtimeStaleFallback | (private) |
| 597 | fn | shouldReportContendedLockStale | (private) |
| 624 | fn | shouldRemoveContendedLockFile | (private) |
| 650 | fn | resolveOrphanLockPayloadGraceMs | (private) |
| 657 | fn | resolveRemainingAcquireTimeoutMs | (private) |
| 669 | fn | shouldRetryStaleAcquireFailure | (private) |
| 691 | fn | shouldRemoveLockDuringCleanup | (private) |
| 703 | fn | sessionLockHeldByThisProcess | (private) |
| 709 | fn | shouldTreatAsOrphanSelfLock | (private) |
| 733 | fn | describeLockOwnerForError | (private) |
| 752 | fn | inspectLockPayloadForSession | (private) |
| 798 | fn | cleanStaleLockFiles | pub |
| 889 | fn | acquireSessionWriteLock | pub |
| 899 | fn | throwIfAborted | (private) |
| 1080 | fn | drainSessionWriteLockStateForTest | pub |
| 1086 | fn | resetSessionWriteLockStateForTest | (private) |

## src/agents/sessions-spawn-hooks.test.ts (647 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | GatewayRequest | (private) |
| 9 | type | TestBindingRequest | (private) |
| 61 | fn | getGatewayRequests | (private) |
| 66 | fn | getGatewayMethods | (private) |
| 70 | fn | findGatewayRequest | (private) |
| 74 | fn | requireRecord | (private) |
| 81 | fn | expectFields | (private) |
| 88 | fn | expectSubagentSessionKey | (private) |
| 95 | fn | setConfig | (private) |
| 99 | fn | spawn | (private) |
| 142 | fn | expectSessionsDeleteWithoutAgentStart | (private) |
| 148 | fn | mockAgentStartFailure | (private) |
| 158 | fn | requireSpawnedHookCall | (private) |
| 166 | fn | getSpawnedEventCall | (private) |
| 171 | fn | requireEndedHookEvent | (private) |
| 179 | fn | expectErrorResultMessage | (private) |
| 187 | fn | expectThreadBindFailureCleanup | (private) |

## src/agents/shell-snapshot.test.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | resolveShellSnapshotDirForTest | (private) |
| 22 | fn | getPosixShellArgs | (private) |
| 26 | fn | resolveBashForTest | (private) |
| 33 | fn | resolveZshForTest | (private) |
| 52 | fn | setSnapshotStateForTest | (private) |

## src/agents/shell-utils.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | createTempCommandDir | (private) |
| 71 | type | ShellConfig | (private) |

## src/agents/simple-completion-runtime.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 151 | fn | expectPreparedModelResult | (private) |
| 160 | fn | callArg | (private) |
| 168 | fn | createOpenAIRouteModelResolver | (private) |

## src/agents/simple-completion-runtime.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | type | SimpleCompletionAuthStorage | (private) |
| 63 | type | CompletionRuntimeCredential | (private) |
| 68 | type | AllowedMissingApiKeyMode | (private) |
| 70 | type | SimpleCompletionModelOptions | (private) |
| 77 | type | PreparedSimpleCompletionModel | pub |
| 89 | type | AgentSimpleCompletionSelection | (private) |
| 98 | type | PreparedSimpleCompletionModelForAgent | (private) |
| 111 | fn | resolveSimpleCompletionSelectionForAgent | pub |
| 165 | fn | resolveSimpleCompletionRuntimeProvider | (private) |
| 183 | fn | setRuntimeApiKeyForCompletion | (private) |
| 220 | fn | hasMissingApiKeyAllowance | (private) |
| 227 | fn | prepareSimpleCompletionModel | pub |
| 462 | fn | prepareSimpleCompletionModelForAgent | pub |
| 522 | fn | completeWithPreparedSimpleCompletionModel | pub |
| 549 | fn | normalizeSimpleCompletionReasoning | (private) |

## src/agents/subagent-announce-delivery.test.ts (6010 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | EmbeddedAgentQueueFailureReason | (private) |
| 84 | fn | createGatewayMock | (private) |
| 91 | fn | createInProcessGatewayMock | (private) |
| 95 | fn | createSendMessageMock | (private) |
| 105 | fn | readyCronContinuationEntry | (private) |
| 117 | type | QueueEmbeddedAgentMessageWithOutcome | (private) |
| 123 | fn | createQueueOutcomeMock | (private) |
| 145 | fn | createQueueOutcomeSequenceMock | (private) |
| 177 | fn | expectRecordFields | (private) |
| 188 | fn | asMock | (private) |
| 192 | fn | registerDirectTargetTestChannel | (private) |
| 213 | fn | mockCallArg | (private) |
| 221 | fn | expectGatewayAgentParams | (private) |
| 229 | fn | expectInProcessAgentParams | (private) |
| 239 | fn | deliverSlackThreadAnnouncement | (private) |
| 285 | fn | deliverDiscordDirectMessageCompletion | (private) |
| 333 | fn | deliverTelegramDirectMessageCompletion | (private) |
| 392 | fn | deliverSlackChannelAnnouncement | (private) |
| 747 | fn | deliverSteeredAnnouncement | (private) |

## src/agents/subagent-announce-delivery.ts (2376 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | type | SubagentAnnounceDeliveryDeps | (private) |
| 134 | fn | resolveQueueEmbeddedAgentMessageOutcome | (private) |
| 146 | fn | runAnnounceAgentCall | (private) |
| 181 | fn | formatQueueWakeFailureError | (private) |
| 189 | fn | resolveBoundConversationOrigin | (private) |
| 229 | fn | resolveRequesterSessionActivity | (private) |
| 242 | fn | resolveDirectAnnounceTransientRetryDelaysMs | (private) |
| 252 | fn | resolveCompactionSteerRetryDelaysMs | (private) |
| 261 | fn | resolveActiveWakeWithRetries | (private) |
| 360 | fn | resolveSubagentAnnounceTimeoutMs | pub |
| 365 | fn | isInternalAnnounceRequesterSession | pub |
| 369 | fn | summarizeDeliveryError | (private) |
| 416 | fn | isSessionFileChangedAnnounceError | (private) |
| 427 | type | AnnounceErrorChainKey | (private) |
| 428 | type | AnnounceErrorRecord | (private) |
| 433 | fn | isAnnounceErrorRecord | (private) |
| 437 | fn | hasAnnounceErrorMatch | (private) |
| 456 | fn | hasSessionFileChangedAnnounceError | (private) |
| 462 | fn | isTransientAnnounceDeliveryError | (private) |
| 497 | fn | isPermanentAnnounceDeliveryError | (private) |
| 505 | fn | isIncompleteAnnounceAgentResultError | (private) |
| 510 | fn | isSessionWriteLockAnnounceAgentError | (private) |
| 521 | fn | isAnnounceAgentPreDispatchError | (private) |
| 530 | fn | hasDirectAnnounceSendEvidence | (private) |
| 540 | fn | hasAnnounceSendEvidence | (private) |
| 544 | fn | waitForAnnounceRetryDelay | (private) |
| 562 | fn | onAbort | (private) |
| 571 | fn | readCronRunContinuation | (private) |
| 588 | fn | cronRunContinuationLostError | (private) |
| 596 | fn | isCronRunContinuationLostError | (private) |
| 613 | fn | runAnnounceDeliveryWithRetry | pub |
| 643 | fn | resolveSubagentCompletionOrigin | pub |
| 736 | fn | loadRequesterSessionEntry | pub |
| 749 | fn | loadSessionEntryByKey | pub |
| 760 | fn | maybeSteerSubagentAnnounce | (private) |
| 819 | fn | hasVisibleGatewayAgentPayload | (private) |
| 826 | fn | hasVisibleNonSilentGatewayAgentPayload | (private) |
| 838 | fn | isVisibleNonSilentGatewayAgentPayload | (private) |
| 866 | fn | hasGatewayAgentMessagingToolDeliveryEvidence | (private) |
| 871 | fn | hasGatewayAgentCompletionSideEffectEvidence | (private) |
| 884 | fn | hasIntentionalSilentGatewayAgentPayload | (private) |
| 892 | fn | isIntentionalSilentGatewayAgentPayload | (private) |
| 919 | fn | hasPositiveDeliveryCount | (private) |
| 923 | fn | requiresAgentMediatedCompletionDelivery | (private) |
| 930 | fn | collectExpectedMediaFromInternalEvents | (private) |
| 955 | fn | getGatewayAgentCommandDeliveryFailure | (private) |
| 960 | fn | isGatewayAgentRunPending | (private) |
| 968 | fn | resolveGeneratedMediaCompletionLabel | (private) |
| 998 | fn | resolveGeneratedMediaFailureNotice | (private) |
| 1016 | fn | deliverGeneratedMediaCompletionDirect | (private) |
| 1100 | fn | inferDeliveryTargetChatType | (private) |
| 1131 | fn | isDirectMessageDeliveryTarget | (private) |
| 1145 | fn | resolveTextCompletionDirectFallback | (private) |
| 1162 | fn | hasFailedSubagentNoOutputCompletion | (private) |
| 1174 | fn | deliverTextCompletionDirect | (private) |
| 1230 | fn | resolveGeneratedMediaDirectFallbackUrls | (private) |
| 1263 | fn | collectAutomaticCompletionDeliveredMediaUrls | (private) |
| 1276 | fn | addUrls | (private) |
| 1304 | fn | collectPayloadMediaUrls | (private) |
| 1312 | fn | getPayloadDeliveryStatusRecord | (private) |
| 1320 | fn | hasPayloadDeliveryOutcomes | (private) |
| 1326 | fn | hasPayloadOutcomeSendEvidence | (private) |
| 1343 | fn | hasAmbiguousPayloadSendBeforeError | (private) |
| 1358 | fn | hasIncompletePartialPayloadOutcomeEvidence | (private) |
| 1396 | fn | hasSuppressedPayloadDeliveryStatus | (private) |
| 1405 | fn | collectPayloadOutcomeDeliveredMediaUrls | (private) |
| 1443 | fn | collectMessagingToolDeliveredMediaUrlsForTarget | (private) |
| 1501 | fn | stripNonDeliverableChannelForCompletionOrigin | (private) |
| 1516 | fn | resolveCompletionDeliveryOrigins | (private) |
| 1540 | fn | resolveGeneratedMediaSessionDeliveryRoute | (private) |
| 1584 | fn | sendSubagentAnnounceDirectly | (private) |
| 1693 | fn | tryGeneratedMediaDirectDelivery | (private) |
| 2167 | fn | deliverSubagentAnnouncement | pub |

## src/agents/subagent-announce-output.ts (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | SubagentAnnounceOutputDeps | (private) |
| 50 | fn | isFastTestMode | (private) |
| 54 | type | SubagentOutputSnapshot | (private) |
| 61 | type | AgentWaitResult | (private) |
| 74 | type | SubagentRunOutcome | pub |
| 82 | fn | withSubagentOutcomeTiming | pub |
| 104 | fn | extractSubagentAssistantText | (private) |
| 119 | fn | countAssistantToolCalls | (private) |
| 139 | fn | summarizeSubagentOutputHistory | (private) |
| 188 | fn | selectSubagentOutputText | (private) |
| 204 | fn | readSubagentOutput | pub |
| 240 | fn | readLatestSubagentOutputWithRetry | pub |
| 254 | fn | waitForSubagentRunOutcome | pub |
| 269 | fn | applySubagentWaitOutcome | pub |
| 308 | fn | captureSubagentCompletionReply | pub |
| 324 | fn | describeSubagentOutcome | (private) |
| 340 | fn | formatChildResultData | (private) |
| 349 | type | ChildCompletionRow | (private) |
| 369 | fn | selectChildCompletionResultText | (private) |
| 381 | fn | hasCapturedChildCompletionReply | (private) |
| 391 | fn | buildChildCompletionFindings | pub |
| 430 | fn | dedupeLatestChildCompletionRows | pub |
| 463 | fn | filterCurrentDirectChildCompletionRows | pub |
| 510 | fn | formatTokenCount | (private) |
| 529 | fn | buildCompactAnnounceStatsLine | pub |

## src/agents/subagent-announce.format.e2e.test.ts (3667 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | AgentCallRequest | (private) |
| 37 | type | RequesterResolution | (private) |
| 41 | type | SubagentDeliveryTargetResult | (private) |
| 49 | type | MockSubagentRun | (private) |
| 66 | type | SessionEntryFixture | (private) |
| 67 | type | SessionStoreFixture | (private) |
| 69 | fn | visibleAgentResponse | (private) |
| 81 | fn | expectInputProvenance | (private) |
| 97 | fn | getAgentCall | (private) |
| 105 | fn | expectAgentCallFields | (private) |
| 286 | fn | setConfigOverride | (private) |
| 291 | fn | setMessageToolGroupReplyConfig | (private) |
| 298 | fn | toSessionEntry | (private) |
| 312 | fn | loadSessionStoreFixture | (private) |
| 3169 | fn | makeChildCompletion | (private) |

## src/agents/subagent-announce.live.test.ts (813 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | AgentPayload | (private) |
| 39 | type | InProcessAgentDispatch | (private) |
| 46 | fn | sleep | (private) |
| 52 | type | LiveSubagentModelConfig | (private) |
| 57 | type | LiveSubagentModelProviders | (private) |
| 59 | fn | resolveLiveSubagentModelConfig | (private) |
| 71 | fn | requireLiveSubagentAuth | (private) |
| 77 | fn | liveSubagentConfig | (private) |
| 171 | fn | waitFor | (private) |
| 188 | fn | summarizeSubagentRuns | (private) |
| 206 | fn | summarizeAgentEvents | (private) |
| 221 | fn | isBashToolEventName | (private) |
| 225 | fn | createGatewayClient | (private) |
| 541 | fn | listSteeredChildRuns | (private) |
| 801 | fn | toLintErrorObject | (private) |

## src/agents/subagent-announce.requester-settle-wake.test.ts (936 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | makeSettledChild | (private) |
| 91 | fn | listedRequesterRuns | (private) |
| 95 | fn | transitionBatch | (private) |
| 108 | fn | completeBatch | (private) |
| 125 | fn | wakeParams | (private) |
| 137 | fn | deliveredCallArg | (private) |

## src/agents/subagent-announce.test.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | AgentCallRequest | (private) |
| 8 | type | AgentCallResponse | (private) |
| 206 | fn | requireQueuedMessageCall | (private) |
| 214 | fn | requireAgentCall | (private) |

## src/agents/subagent-announce.timeout.test.ts (606 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | GatewayCall | (private) |
| 42 | fn | createGatewayCallModuleMock | (private) |
| 54 | fn | createSubagentDepthModuleMock | (private) |
| 60 | fn | createTimeoutHistoryWithNoReply | (private) |
| 117 | fn | buildRequest | (private) |
| 210 | type | AnnounceFlowParams | (private) |
| 231 | fn | setConfiguredAnnounceTimeout | (private) |
| 244 | fn | runAnnounceFlowForTest | (private) |
| 255 | fn | findGatewayCall | (private) |
| 259 | fn | findFinalDirectAgentCall | (private) |
| 263 | fn | setupParentSessionFallback | (private) |

## src/agents/subagent-announce.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | SubagentAnnounceDeps | (private) |
| 78 | fn | loadSubagentRegistryRuntime | (private) |
| 86 | type | SubagentAnnounceType | pub |
| 88 | fn | buildAnnounceReplyInstruction | (private) |
| 102 | fn | buildAnnounceSteerMessage | (private) |
| 109 | fn | hasUsableSessionEntry | pub |
| 117 | fn | buildDescendantWakeMessage | (private) |
| 131 | fn | stripWakeRunSuffixes | (private) |
| 139 | fn | isWakeContinuationRun | (private) |
| 147 | fn | stripAndClassifyReply | (private) |
| 168 | fn | wakeSubagentRunAfterDescendants | (private) |
| 237 | fn | runSubagentAnnounceFlow | pub |
| 273 | fn | childSessionId | (private) |
| 316 | fn | requesterIsInternalSession | (private) |

## src/agents/subagent-control.test.ts (2237 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | readLatestAssistantReplySnapshot | (private) |
| 145 | fn | setSubagentControlDepsForTest | (private) |
| 197 | fn | nextSessionStorePath | (private) |
| 202 | fn | cfgWithSessionStore | (private) |
| 208 | fn | writeSessionStoreFixture | (private) |

## src/agents/subagent-control.ts (955 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | GatewayCaller | (private) |
| 62 | type | PatchSessionEntry | (private) |
| 63 | type | AbortEmbeddedAgentRun | (private) |
| 64 | type | IsEmbeddedAgentRunActive | (private) |
| 65 | type | ClearSessionQueues | (private) |
| 84 | fn | loadSubagentControlRuntime | (private) |
| 88 | fn | resolveSubagentControlRuntime | (private) |
| 115 | type | ResolvedSubagentController | pub |
| 122 | fn | resolveSubagentController | pub |
| 152 | fn | isSubagentRunVisibleToSession | (private) |
| 161 | fn | listControlledSubagentRuns | pub |
| 175 | fn | ensureControllerOwnsRun | (private) |
| 186 | fn | isFinishedForSteerControl | (private) |
| 190 | type | SubagentKillTargetState | (private) |
| 194 | fn | resolveSubagentKillTargetState | (private) |
| 228 | fn | persistSubagentAbortedLastRun | (private) |
| 254 | fn | markSubagentRunTerminatedBestEffort | (private) |
| 269 | fn | killSubagentRun | (private) |
| 328 | fn | persistAbortedLastRun | (private) |
| 367 | fn | cascadeKillChildren | (private) |
| 429 | fn | killAllControlledSubagentRuns | pub |
| 478 | fn | killControlledSubagentRun | pub |
| 555 | fn | killSubagentRunAdmin | pub |
| 618 | fn | steerControlledSubagentRun | pub |
| 833 | fn | sendControlledSubagentMessage | pub |

## src/agents/subagent-orphan-recovery.test.ts (1061 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | recoverOrphanedSubagentSessions | (private) |
| 50 | fn | scheduleOrphanRecovery | (private) |
| 66 | type | MockSessionEntry | (private) |
| 67 | type | MockSessionStore | (private) |
| 149 | fn | createTestRunRecord | (private) |
| 163 | fn | createActiveRuns | (private) |
| 167 | fn | mockSingleAbortedSession | (private) |
| 182 | fn | expectSkippedRecovery | (private) |
| 194 | fn | getResumeMessage | (private) |
| 202 | fn | firstCallParam | (private) |
| 210 | fn | requireRecord | (private) |

## src/agents/subagent-orphan-recovery.ts (688 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | isLegacyRestartInterruptedTimeout | (private) |
| 59 | fn | reclassifyLegacyRestartInterruptedRun | (private) |
| 75 | fn | loadRecoverySessionEntry | (private) |
| 86 | fn | patchRecoverySessionEntry | (private) |
| 110 | fn | buildResumeMessage | (private) |
| 127 | fn | extractMessageText | (private) |
| 155 | fn | resumeOrphanedSession | (private) |
| 244 | fn | recoverOrphanedSubagentSessions | pub |
| 562 | fn | buildRecoveryFailureMessage | (private) |
| 574 | fn | finalizeInterruptedRunWithRetry | (private) |
| 608 | fn | scheduleOrphanRecovery | pub |
| 621 | fn | attemptRecovery | (private) |

## src/agents/subagent-registry-lifecycle.test.ts (4060 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | LifecycleControllerParams | (private) |
| 29 | fn | waitForLifecycleState | (private) |
| 118 | fn | createRunEntry | (private) |
| 132 | fn | expectFields | (private) |
| 142 | fn | firstCall | (private) |
| 150 | fn | firstCallArg | (private) |
| 158 | fn | findCallArg | (private) |
| 170 | fn | hasDeliveredTaskStatusUpdate | (private) |
| 177 | fn | buildExpectedAnnounceIdempotencyKey | (private) |
| 186 | fn | createLifecycleController | (private) |
| 229 | fn | runNoReplyMirrorScenario | (private) |
| 2409 | fn | releaseRetirement | (private) |

## src/agents/subagent-registry-lifecycle.ts (2400 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | type | CaptureSubagentCompletionReply | (private) |
| 90 | type | RunSubagentAnnounceFlow | (private) |
| 91 | type | MaybeWakeRequesterAfterAllChildrenSettled | (private) |
| 93 | type | RequesterSettleWakeBatchState | (private) |
| 95 | type | BrowserCleanupModule | (private) |
| 106 | fn | loadCleanupBrowserSessionsForLifecycleEnd | (private) |
| 112 | fn | shouldPreservePublishedExplicitRunTimeout | (private) |
| 138 | fn | resolveExpiredExplicitRunDeadlineMs | (private) |
| 151 | fn | isOlderEquivalentTerminalCallback | (private) |
| 173 | fn | createSubagentRegistryLifecycleController | pub |
| 232 | fn | releaseLock | (private) |
| 246 | fn | scheduleResumeSubagentRun | (private) |
| 288 | fn | clearScheduledResumeTimers | (private) |
| 300 | fn | runDetachedCleanupAttempt | (private) |
| 383 | fn | recordAnnounceDeliveryResult | (private) |
| 481 | fn | safeSetSubagentTaskDeliveryStatus | (private) |
| 548 | fn | safeMarkRequiredCompletionDeliveryBlocked | (private) |
| 693 | fn | emitCompletionEndedHookIfNeeded | (private) |
| 708 | fn | clearPendingFinalDelivery | (private) |
| 749 | fn | markPendingFinalDelivery | (private) |
| 782 | fn | transitionRequesterSettleWakeBatch | (private) |
| 812 | fn | completeRequesterSettleWakeBatch | (private) |
| 871 | fn | markRequesterSettleWakePending | (private) |
| 894 | fn | persistRequesterSettleWakePending | (private) |
| 920 | fn | scheduleRequesterSettleWakeRetry | (private) |
| 943 | fn | scheduleRequesterSettleWake | (private) |
| 990 | fn | suspendPendingFinalDelivery | (private) |
| 1038 | fn | shouldSuspendPendingFinalDelivery | (private) |
| 1044 | fn | finalizeResumedAnnounceGiveUp | (private) |
| 1096 | fn | beginSubagentCleanup | (private) |
| 1140 | fn | retireSupersededCleanupInBackground | (private) |
| 1170 | fn | retryDeferredCompletedAnnounces | (private) |
| 1212 | fn | completeCleanupBookkeeping | (private) |
| 1224 | fn | runCleanupTail | (private) |
| 1347 | fn | retireRunModeBundleMcpRuntime | (private) |
| 1370 | fn | finalizeSubagentCleanup | (private) |
| 1639 | fn | finalizeAnnounceCleanup | (private) |
| 1740 | type | CompleteSubagentRunParams | (private) |
| 1754 | fn | completeSubagentRunAttempt | (private) |
| 1773 | fn | restoreEntrySnapshot | (private) |
| 1803 | fn | outcomeMatchesInterruptedRecovery | (private) |
| 2193 | fn | retireSupersededSession | (private) |
| 2362 | fn | completeSubagentRun | (private) |

## src/agents/subagent-registry-queries.test.ts (804 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | makeRun | (private) |
| 35 | fn | toRunMap | (private) |

## src/agents/subagent-registry-queries.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | resolveControllerSessionKey | (private) |
| 16 | fn | resolveConcurrencyOwnerSessionKey | (private) |
| 23 | fn | listRunsForRequesterFromRuns | pub |
| 58 | fn | listRunsForControllerFromRuns | pub |
| 69 | type | LatestRunPair | (private) |
| 75 | type | SubagentRunReadIndex | pub |
| 81 | type | LatestSubagentRunReadIndex | pub |
| 85 | fn | rememberLatestRunEntry | (private) |
| 97 | fn | buildLatestSubagentRunReadIndexFromRuns | pub |
| 114 | fn | rememberLatestRunPair | (private) |
| 127 | fn | buildSubagentRunReadIndexFromRuns | pub |
| 285 | fn | findLatestRunForChildSession | (private) |
| 306 | fn | isSubagentSessionRunActiveFromRuns | pub |
| 315 | fn | getSubagentRunByChildSessionKeyFromRuns | pub |
| 345 | fn | resolveRequesterForChildSessionFromRuns | pub |
| 363 | fn | shouldIgnorePostCompletionAnnounceForSessionFromRuns | pub |
| 378 | fn | countActiveRunsForSessionFromRuns | pub |
| 389 | fn | pendingDescendantCount | (private) |
| 427 | fn | forEachDescendantRun | (private) |
| 478 | fn | countActiveDescendantRunsFromRuns | pub |
| 495 | fn | countPendingDescendantRunsInternal | (private) |
| 530 | fn | countPendingDescendantRunsFromRuns | pub |
| 538 | fn | countPendingDescendantRunsExcludingRunFromRuns | pub |
| 552 | fn | hasDescendantRunAwaitingSettleFromRuns | pub |
| 567 | fn | listDescendantRunsForRequesterFromRuns | pub |

## src/agents/subagent-registry-run-manager.ts (1321 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | shouldDeleteAttachments | (private) |
| 74 | fn | resolveSwarmWaitOwnerSessionKeys | (private) |
| 99 | fn | resolveHardRunTimeoutEndedAt | (private) |
| 111 | fn | resolveCompletionAfterHardRunDeadline | (private) |
| 128 | fn | resolveWaitTimeoutMsForRun | (private) |
| 141 | fn | markSubagentRunPausedAfterYield | pub |
| 205 | type | RegisterSubagentRunParams | pub |
| 240 | fn | createSubagentRunManager | pub |
| 290 | fn | markOlderKillReconciliationsSuperseded | (private) |
| 319 | fn | restoreKillReconciliationSnapshots | (private) |
| 327 | fn | waitForSubagentCompletion | (private) |
| 334 | fn | scheduleWaitRetry | (private) |
| 401 | fn | completeAsRunTimeout | (private) |
| 560 | fn | markSubagentRunForSteerRestart | (private) |
| 577 | fn | clearSubagentRunSteerRestart | (private) |
| 634 | fn | replaceSubagentRunAfterSteer | (private) |
| 780 | fn | registerSubagentRun | (private) |
| 919 | fn | startQueuedSubagentRun | (private) |
| 1004 | fn | failQueuedSubagentRun | (private) |
| 1054 | fn | settleFailedQueuedSubagentLaunch | (private) |
| 1096 | fn | releaseSubagentRun | (private) |
| 1147 | fn | finalizeKilledTask | (private) |

## src/agents/subagent-registry.archive.e2e.test.ts (864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | noop | (private) |
| 28 | fn | flushSweepMicrotasks | (private) |
| 87 | fn | setRegistryTestDeps | (private) |
| 98 | fn | waitForNoRequesterRuns | (private) |

## src/agents/subagent-registry.lifecycle-retry-grace.e2e.test.ts (633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | noop | (private) |
| 15 | type | LifecycleData | (private) |
| 22 | type | LifecycleEvent | (private) |
| 29 | type | SessionStoreEntry | (private) |
| 38 | type | GatewayAgentInternalEvent | (private) |
| 44 | type | GatewayAgentRequestParams | (private) |
| 52 | type | GatewayRequest | (private) |
| 165 | fn | loadSubagentRegistryRuntimeForTest | (private) |
| 222 | fn | flushAsync | (private) |
| 227 | fn | waitForCleanupHandledFalse | (private) |
| 243 | fn | waitForAgentCallCount | (private) |
| 254 | fn | waitForFrozenResultText | (private) |
| 268 | fn | registerCompletionRun | (private) |
| 280 | fn | emitLifecycleEvent | (private) |
| 293 | fn | readFirstAnnounceOutcome | (private) |
| 306 | fn | setAssistantOutput | (private) |
| 315 | fn | getAgentCalls | (private) |
| 321 | fn | getAgentResultsForChildSession | (private) |
| 584 | fn | readIdempotencyKey | (private) |

## src/agents/subagent-registry.persistence.test.ts (1085 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | expectFields | (private) |
| 68 | fn | resolveAgentIdFromSessionKey | (private) |
| 73 | fn | writeChildSessionEntry | (private) |
| 94 | fn | removeChildSessionEntry | (private) |
| 106 | fn | seedChildSessionsForPersistedRuns | (private) |
| 126 | fn | writePersistedRegistry | (private) |
| 149 | fn | readPersistedRegistry | (private) |
| 153 | fn | createPersistedEndedRun | (private) |
| 178 | fn | flushQueuedRegistryWork | (private) |
| 183 | fn | waitForRegistryWork | (private) |
| 190 | fn | restartRegistry | (private) |
| 195 | fn | fastPersistSubagentRunsToDisk | (private) |

## src/agents/subagent-registry.steer-restart.test.ts (1158 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | noop | (private) |
| 88 | fn | countMatching | (private) |
| 98 | fn | requireRecord | (private) |
| 105 | fn | requireSubagentEndedHookCall | (private) |
| 122 | fn | requireSessionLifecycleEventCall | (private) |
| 130 | fn | requireFirstAnnounceCall | (private) |
| 174 | type | RegisterSubagentRunInput | (private) |
| 199 | fn | flushAnnounce | (private) |
| 204 | fn | waitForRegistrySideEffect | (private) |
| 270 | fn | listMainRuns | (private) |
| 272 | fn | emitLifecycleEnd | (private) |
| 292 | fn | replaceRunAfterSteer | (private) |

## src/agents/subagent-registry.test.ts (6844 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | noop | (private) |
| 46 | fn | requireRecord | (private) |
| 53 | fn | expectRecordFields | (private) |
| 65 | fn | getMockCallArg | (private) |
| 78 | fn | findRecordCallArg | (private) |
| 97 | fn | expectPathMissing | (private) |
| 154 | fn | applyPatch | (private) |
| 883 | fn | makeQueuedRun | (private) |
| 947 | fn | makeQueuedRun | (private) |
| 1014 | fn | makeQueuedRun | (private) |

## src/agents/subagent-registry.ts (2686 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 119 | fn | readGatewayRunId | (private) |
| 127 | type | SubagentAnnounceModule | (private) |
| 131 | type | RequesterSettleWakeModule | (private) |
| 135 | type | BrowserCleanupModule | (private) |
| 140 | type | SubagentRegistryDeps | (private) |
| 171 | fn | loadSubagentAnnounceModule | (private) |
| 175 | fn | loadCleanupBrowserSessionsForLifecycleEnd | (private) |
| 204 | type | ContextEngineInitModule | (private) |
| 210 | type | ContextEngineRegistryModule | (private) |
| 219 | type | RuntimePluginsModule | (private) |
| 275 | fn | loadContextEngineInitModule | (private) |
| 279 | fn | loadContextEngineRegistryModule | (private) |
| 283 | fn | loadRuntimePluginsModule | (private) |
| 287 | fn | ensureSubagentRegistryPluginRuntimeLoaded | (private) |
| 300 | fn | resolveSubagentRegistryContextEngine | (private) |
| 315 | fn | persistSubagentRuns | (private) |
| 319 | fn | persistSubagentRunsOrThrow | (private) |
| 323 | fn | findSubagentTaskForRun | (private) |
| 341 | fn | findNextSubagentRunCreatedAt | (private) |
| 356 | fn | resolveCompletionFromTerminalTask | (private) |
| 395 | fn | scheduleSubagentOrphanRecovery | pub |
| 445 | fn | clearPendingLifecycleError | (private) |
| 454 | fn | clearAllPendingLifecycleErrors | (private) |
| 461 | fn | clearPendingLifecycleTimeout | (private) |
| 470 | fn | clearAllPendingLifecycleTimeouts | (private) |
| 477 | type | CompleteSubagentRunParams | (private) |
| 490 | fn | completeSubagentRunWithRecoveryAttempt | (private) |
| 544 | fn | scheduleSubagentCompletionRetryAfterRestart | (private) |
| 568 | fn | completeSubagentRunWithRecovery | (private) |
| 590 | fn | completeSubagentRunInBackground | (private) |
| 594 | fn | schedulePendingLifecycleError | (private) |
| 639 | fn | schedulePendingLifecycleTimeout | (private) |
| 681 | type | ContextEngineSubagentEndedParams | (private) |
| 688 | fn | runContextEngineSubagentEnded | (private) |
| 704 | fn | notifyContextEngineSubagentEnded | (private) |
| 714 | fn | finishCollectorContextEngineCleanup | (private) |
| 726 | fn | cleanupCollectorLaunchResources | (private) |
| 757 | fn | terminateAcceptedRestoredCollectorRun | (private) |
| 794 | fn | suppressAnnounceForSteerRestart | (private) |
| 798 | fn | shouldKeepThreadBindingAfterRun | (private) |
| 808 | fn | shouldEmitEndedHookForRun | (private) |
| 815 | fn | emitSubagentEndedHookForRun | (private) |
| 893 | fn | scheduleSubagentDeliveryResumeRetry | (private) |
| 928 | fn | finalizeResumedAnnounceGiveUpInBackground | (private) |
| 948 | fn | resumeSubagentRun | (private) |
| 1052 | fn | restoreSubagentRunsOnce | (private) |
| 1194 | fn | failAndCleanupRestoredQueuedRun | (private) |
| 1267 | fn | resolveSubagentWaitTimeoutMs | (private) |
| 1274 | fn | startSweeper | (private) |
| 1287 | fn | runSubagentSweep | (private) |
| 1297 | fn | runSubagentSweepCleanupTail | (private) |
| 1303 | fn | stopSweeper | (private) |
| 1311 | fn | isSuspendedPendingFinalDelivery | (private) |
| 1315 | fn | resolveSuspendedDeliveryExpiryMs | (private) |
| 1326 | fn | discardSuspendedPendingFinalDelivery | (private) |
| 1396 | fn | retireSupersededSubagentRun | (private) |
| 1416 | fn | sweepSubagentRuns | (private) |
| 1989 | fn | ensureListener | (private) |
| 2204 | fn | markSubagentRunForSteerRestart | pub |
| 2208 | fn | clearSubagentRunSteerRestart | pub |
| 2212 | fn | replaceSubagentRunAfterSteer | pub |
| 2224 | fn | registerSubagentRun | pub |
| 2228 | fn | startQueuedSubagentRun | pub |
| 2232 | fn | failQueuedSubagentRun | (private) |
| 2236 | fn | settleFailedQueuedSubagentLaunch | pub |
| 2240 | fn | resetSubagentRegistryForTests | (private) |
| 2289 | fn | addSubagentRunForTests | (private) |
| 2293 | fn | releaseSubagentRun | (private) |
| 2297 | fn | hasCompleteSubagentTerminalState | (private) |
| 2308 | fn | finalizeInterruptedSubagentRun | (private) |
| 2373 | fn | markSubagentRunTerminated | pub |
| 2382 | fn | leasePendingAgentSteeringItems | pub |
| 2400 | fn | ackPendingAgentSteeringItems | pub |
| 2425 | fn | releasePendingAgentSteeringItems | pub |
| 2444 | fn | listSubagentRunsForController | pub |
| 2451 | fn | getSubagentRunByRunId | pub |
| 2461 | fn | observeSubagentRequesterWait | pub |
| 2488 | fn | getSubagentRunsByRunIds | pub |
| 2509 | fn | completeCollectorLaunchCleanup | pub |
| 2523 | fn | recordSwarmStructuredOutput | pub |
| 2552 | fn | listSwarmRunsForGroup | pub |
| 2568 | fn | getSwarmRunByLaunchReplayKey | pub |
| 2586 | fn | countActiveRunsForSession | pub |
| 2597 | fn | countActiveDescendantRuns | pub |
| 2604 | fn | countPendingDescendantRuns | pub |
| 2611 | fn | listDescendantRunsForRequester | pub |
| 2618 | fn | getSubagentRunByChildSessionKey | pub |
| 2625 | fn | getLatestSubagentRunByChildSessionKey | pub |
| 2646 | fn | initSubagentRegistry | pub |
| 2651 | fn | settleRequesterAfterSessionSpawns | pub |
| 2661 | fn | markRequesterTurnYielded | pub |

## src/agents/subagent-spawn.test.ts (1755 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | createConfigOverride | (private) |
| 53 | fn | requireRecord | (private) |
| 60 | fn | gatewayRequestRecords | (private) |
| 66 | fn | gatewayRequest | (private) |
| 71 | fn | firstRegisteredSubagentRun | (private) |

## src/agents/subagent-spawn.ts (1967 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 132 | fn | resolveConfiguredAgentIds | (private) |
| 136 | type | SubagentSpawnDeps | (private) |
| 165 | type | SpawnSubagentParams | (private) |
| 198 | type | SpawnSubagentContext | (private) |
| 222 | type | SpawnSubagentResult | (private) |
| 244 | fn | callSubagentGateway | (private) |
| 292 | fn | readGatewayRunId | (private) |
| 300 | fn | buildResolvedSubagentModelMetadata | (private) |
| 314 | fn | resolveCollectorOutputModelError | (private) |
| 348 | fn | resolveSubagentAgentGatewayTimeoutMs | (private) |
| 359 | fn | buildDirectChildSessionPatch | (private) |
| 426 | fn | loadSubagentConfig | (private) |
| 430 | fn | persistInitialChildSessionRuntimeModel | (private) |
| 460 | fn | readRequesterThinkingLevel | (private) |
| 519 | fn | readRequesterFastMode | (private) |
| 566 | type | PreparedSpawnContext | (private) |
| 584 | fn | prepareSubagentSessionContext | (private) |
| 684 | fn | prepareContextEngineSubagentSpawn | (private) |
| 723 | fn | rollbackPreparedContextEngine | (private) |
| 735 | fn | sanitizeMountPathHint | (private) |
| 749 | fn | hasPromptUnsafeControlCharacter | (private) |
| 759 | fn | cleanupProvisionalSession | (private) |
| 783 | fn | waitForProvisionalSessionDeletion | (private) |
| 801 | fn | cleanupFailedSpawnBeforeAgentStart | (private) |
| 830 | fn | terminateAcceptedCollectorRun | (private) |
| 858 | fn | resolveSubagentContextMode | (private) |
| 881 | fn | summarizeError | (private) |
| 891 | fn | bindThreadForSubagentSpawn | (private) |
| 986 | fn | hasRoutableDeliveryOrigin | (private) |
| 992 | fn | spawnSubagentDirect | pub |
| 1135 | fn | resolveAdmission | (private) |
| 1615 | fn | launchChildRun | (private) |
| 1624 | fn | emitSpawnLifecycleHooks | (private) |
| 1673 | type | SubagentBackendState | (private) |

## src/agents/system-prompt.test.ts (1734 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1401 | fn | buildForRun | (private) |

## src/agents/system-prompt.ts (1458 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | OwnerIdDisplay | (private) |
| 89 | type | StablePromptPrefixCacheEntry | (private) |
| 93 | fn | normalizeSubagentDelegationMode | (private) |
| 97 | fn | buildSubagentDelegationPreferenceSection | (private) |
| 126 | fn | buildProactiveSubagentOrchestrationSection | (private) |
| 145 | fn | cacheStablePromptPrefix | (private) |
| 165 | fn | hashStablePromptInput | (private) |
| 171 | fn | normalizeContextFilePath | (private) |
| 175 | fn | getContextFileBasename | (private) |
| 180 | fn | isDynamicContextFile | (private) |
| 184 | fn | isBootstrapContextFile | (private) |
| 188 | fn | sanitizeContextFileContentForPrompt | (private) |
| 195 | fn | sortContextFilesForPrompt | (private) |
| 213 | fn | prepareContextFilesForPrompt | (private) |
| 224 | fn | buildProjectContextSection | (private) |
| 259 | fn | buildHeartbeatSection | (private) |
| 272 | fn | buildExecApprovalPromptGuidance | (private) |
| 288 | fn | buildSkillsSection | (private) |
| 304 | fn | buildMemorySection | (private) |
| 329 | fn | buildAgentBootstrapSystemContext | (private) |
| 359 | fn | buildAgentBootstrapSystemPromptSections | (private) |
| 383 | fn | buildUserIdentitySection | (private) |
| 390 | fn | formatOwnerDisplayId | (private) |
| 398 | fn | buildOwnerIdentityLine | (private) |
| 414 | fn | buildTimeSection | (private) |
| 421 | fn | buildAssistantOutputDirectivesSection | (private) |
| 448 | fn | buildWebchatCanvasSection | (private) |
| 470 | fn | buildExecutionBiasSection | (private) |
| 487 | fn | normalizeProviderPromptBlock | (private) |
| 495 | fn | buildOverridablePromptSection | (private) |
| 506 | fn | buildMessagingSection | (private) |
| 585 | fn | buildMessageChannelOptions | (private) |
| 596 | fn | buildVoiceSection | (private) |
| 607 | fn | buildDocsSection | (private) |
| 636 | fn | formatFullAccessBlockedReason | (private) |
| 651 | fn | buildModelIdentityPromptLine | pub |
| 659 | fn | appendModelIdentitySystemPrompt | pub |
| 693 | fn | buildAgentSystemPrompt | pub |
| 870 | fn | resolveToolName | (private) |
| 1383 | fn | buildActiveProcessSessionReferenceLines | (private) |
| 1400 | fn | buildRuntimeLine | (private) |

## src/agents/tool-call-id.test.ts (738 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | buildDuplicateIdCollisionInput | (private) |
| 31 | fn | readToolCall | (private) |
| 38 | fn | buildToolResult | (private) |
| 51 | fn | sanitizeSingleToolCallId | (private) |
| 70 | fn | signedReadAssistant | (private) |
| 78 | fn | buildRepeatedEditIdInput | (private) |
| 101 | fn | buildRepeatedRawIdInput | (private) |
| 103 | fn | buildRepeatedSharedToolResultIdInput | (private) |
| 106 | fn | expectCollisionIdsRemainDistinct | (private) |
| 126 | fn | expectSingleToolCallRewrite | (private) |
| 140 | fn | expectToolUseIdsFollowDistinctToolCallIds | (private) |
| 152 | fn | expectStrict9IdLengths | (private) |
| 157 | fn | expectDistinctStrict9Ids | (private) |
| 163 | fn | expectReplaySafeSignedTurnOwnership | (private) |

## src/agents/tool-call-id.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ToolCallIdMode | pub |
| 19 | type | ToolCallLike | (private) |
| 24 | type | ReplaySafeToolCallBlock | (private) |
| 38 | fn | sanitizeToolCallId | (private) |
| 66 | fn | extractToolCallsFromAssistant | pub |
| 93 | fn | extractToolResultId | pub |
| 99 | fn | extractToolResultIds | pub |
| 128 | fn | hasToolCallInput | (private) |
| 135 | fn | toolCallNeedsReplayMutation | (private) |
| 141 | fn | isReplaySafeThinkingAssistantMessage | (private) |
| 181 | fn | collectReplaySafeThinkingToolIds | (private) |
| 208 | fn | shortHash | (private) |
| 212 | fn | isNativeAnthropicToolUseId | (private) |
| 216 | fn | isNativeKimiToolCallId | (private) |
| 220 | fn | makeUniqueToolId | (private) |
| 267 | fn | createOccurrenceAwareResolver | (private) |
| 378 | fn | rewriteAssistantToolCallIds | (private) |
| 416 | fn | rewriteToolResultIds | (private) |
| 480 | fn | sanitizeToolCallIdsForCloudCodeAssist | pub |

## src/agents/tool-catalog.ts (584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ToolProfileId | pub |
| 32 | type | ToolProfilePolicy | (private) |
| 37 | type | CoreToolSection | (private) |
| 47 | type | CoreToolDefinition | (private) |
| 487 | fn | listCoreToolIdsForProfile | (private) |
| 508 | fn | buildCoreToolGroupMap | (private) |
| 537 | fn | resolveCoreToolProfilePolicy | pub |
| 555 | fn | listCoreToolSections | pub |
| 573 | fn | resolveCoreToolProfiles | pub |
| 582 | fn | isKnownCoreToolId | pub |

## src/agents/tool-display-common.ts (819 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ToolDisplayActionSpec | (private) |
| 22 | type | ToolDisplaySpec | pub |
| 30 | type | ToolSearchCodeDisplayTarget | (private) |
| 38 | type | CoerceDisplayValueOptions | (private) |
| 47 | fn | normalizeToolName | pub |
| 52 | fn | defaultTitle | pub |
| 68 | fn | normalizeVerb | (private) |
| 76 | fn | resolveActionArg | (private) |
| 89 | fn | resolveToolVerbAndDetailForArgs | pub |
| 116 | fn | coerceDisplayValue | (private) |
| 179 | fn | lookupValueByPath | (private) |
| 198 | fn | formatDetailKey | pub |
| 215 | fn | resolvePathArg | (private) |
| 232 | fn | resolveReadDetail | (private) |
| 269 | fn | resolveWriteDetail | (private) |
| 301 | fn | resolveWebSearchDetail | (private) |
| 338 | fn | collectWebSearchQueries | (private) |
| 341 | fn | add | (private) |
| 383 | fn | parseToolSearchCall | (private) |
| 404 | fn | normalizeToolSearchDisplayToolName | (private) |
| 413 | fn | collectToolSearchDescribeBindings | (private) |
| 427 | fn | resolveToolSearchCallTarget | (private) |
| 445 | fn | summarizeToolSearchTarget | (private) |
| 466 | fn | parseToolSearchCallArgs | (private) |
| 485 | fn | extractObjectLiteralSource | (private) |
| 531 | fn | parseSimpleToolSearchArgValue | (private) |
| 557 | fn | summarizeToolSearchCallInput | (private) |
| 588 | fn | resolveToolSearchCodeDisplayTarget | pub |
| 629 | fn | resolveToolSearchCodeDetail | (private) |
| 633 | fn | resolveWebFetchDetail | (private) |
| 661 | fn | resolveActionSpec | (private) |
| 671 | fn | resolveDetailFromKeys | (private) |
| 733 | fn | resolveToolVerbAndDetail | (private) |
| 795 | fn | formatToolDetailText | pub |

## src/agents/tool-display-config.ts (708 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | ToolDisplaySpec | (private) |
| 13 | type | ToolDisplayConfig | (private) |

## src/agents/tool-display-exec-shell.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | PreambleResult | (private) |
| 14 | fn | stripOuterQuotes | pub |
| 30 | fn | splitShellWords | pub |
| 87 | fn | binaryName | pub |
| 97 | fn | optionValue | pub |
| 125 | fn | positionalArgs | pub |
| 173 | fn | firstPositional | pub |
| 182 | fn | trimLeadingEnv | pub |
| 215 | fn | unwrapShellWrapper | pub |
| 240 | type | HeredocMarker | (private) |
| 246 | fn | parseHeredocMarker | (private) |
| 298 | fn | findHeredocBodyEnd | (private) |
| 321 | fn | scanTopLevelChars | pub |
| 450 | fn | splitTopLevel | (private) |
| 485 | fn | splitTopLevelStages | pub |
| 498 | fn | splitTopLevelPipes | pub |
| 507 | fn | parseChdirTarget | (private) |
| 516 | fn | isChdirCommand | (private) |
| 521 | fn | isPopdCommand | (private) |
| 526 | fn | stripShellPreamble | pub |

## src/agents/tool-display-exec.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | summarizeKnownExec | (private) |
| 293 | fn | summarizePipeline | (private) |
| 304 | type | HeredocTerminator | (private) |
| 309 | fn | collectHeredocTerminators | (private) |
| 331 | fn | parseHeredocTerminator | (private) |
| 375 | fn | commandWithoutHeredocBodies | (private) |
| 418 | type | ExecSummary | (private) |
| 424 | fn | normalizePathForDisplay | (private) |
| 428 | fn | classifyWorkspacePath | (private) |
| 467 | fn | formatCwdSuffix | (private) |
| 475 | fn | summarizeExecCommand | (private) |
| 546 | fn | isGenericSummary | (private) |
| 556 | fn | compactRawCommand | (private) |
| 570 | type | ToolDetailMode | pub |
| 572 | fn | resolveExecDetail | pub |

## src/agents/tool-display.test.ts (908 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 620 | fn | scanBodies | (private) |

## src/agents/tool-loop-detection.test.ts (1192 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createState | (private) |
| 36 | fn | recordArgsHash | (private) |
| 48 | fn | recordSuccessfulCall | (private) |
| 65 | fn | recordFailedCall | (private) |
| 82 | fn | recordRepeatedSuccessfulCalls | (private) |
| 102 | fn | createNoProgressPollFixture | (private) |
| 112 | fn | createReadNoProgressFixture | (private) |
| 123 | fn | createPingPongFixture | (private) |
| 131 | fn | detectLoopAfterRepeatedCalls | (private) |
| 154 | fn | recordSuccessfulPingPongCalls | (private) |
| 184 | fn | expectPingPongLoop | (private) |
| 854 | fn | sendResult | (private) |
| 861 | fn | recordSend | (private) |
| 879 | fn | sendPayload | (private) |
| 905 | fn | broadcast | (private) |

## src/agents/tool-loop-detection.ts (783 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | LoopDetectorKind | (private) |
| 27 | type | LoopDetectionResult | (private) |
| 58 | type | ResolvedLoopDetectionConfig | (private) |
| 72 | type | ToolLoopDetectionScope | (private) |
| 76 | fn | selectHistoryForScope | (private) |
| 84 | fn | resolveLoopDetectionConfig | (private) |
| 100 | fn | hashToolCall | (private) |
| 104 | fn | digestStable | (private) |
| 109 | fn | isKnownPollToolCall | (private) |
| 120 | fn | extractTextContent | (private) |
| 134 | fn | formatErrorForHash | (private) |
| 147 | fn | extractUnknownToolName | (private) |
| 159 | fn | stringField | (private) |
| 163 | fn | hashExecToolOutcome | (private) |
| 238 | fn | isMessageDeliveryObject | (private) |
| 249 | fn | stripVolatileSendIds | (private) |
| 267 | fn | isVolatileSendResult | (private) |
| 283 | fn | isLoopVetoResult | (private) |
| 287 | fn | hashToolOutcome | (private) |
| 359 | fn | getUnknownToolRepeatStreak | (private) |
| 385 | fn | getNoProgressStreak | (private) |
| 415 | fn | getPingPongStreak | (private) |
| 517 | fn | canonicalPairKey | (private) |
| 525 | fn | detectToolCallLoop | pub |
| 684 | fn | recordToolCall | pub |
| 714 | fn | recordToolCallOutcome | pub |

## src/agents/tool-mutation.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 132 | type | FileTarget | pub |
| 137 | type | ToolMutationState | (private) |
| 144 | type | ToolActionRef | (private) |
| 151 | fn | normalizeActionName | (private) |
| 156 | fn | readShellCommand | (private) |
| 165 | fn | tokenizeSimpleShellCommand | (private) |
| 208 | fn | isReadOnlySedCommand | (private) |
| 246 | fn | hasUnsafeRipgrepFlag | (private) |
| 256 | fn | isReadOnlyGhCommand | (private) |
| 283 | fn | isPlainReadOnlyShellCommand | (private) |
| 307 | fn | normalizeFingerprintValue | (private) |
| 318 | fn | appendFingerprintAlias | (private) |
| 335 | fn | isMutatingToolCall | pub |
| 388 | fn | isReplaySafeToolCall | pub |
| 430 | fn | buildToolActionFingerprint | (private) |
| 480 | fn | isFileMutatingToolName | (private) |
| 484 | fn | readArgFingerprintValue | (private) |
| 500 | fn | extractFileTarget | (private) |
| 516 | fn | fileTargetsEqual | (private) |
| 520 | fn | buildToolMutationState | pub |
| 535 | fn | isSameToolMutationAction | pub |

## src/agents/tool-policy-pipeline.test.ts (853 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | DummyTool | (private) |
| 25 | type | PolicyTool | (private) |
| 27 | fn | asPolicyTools | (private) |
| 31 | fn | runAllowlistWarningStep | (private) |

## src/agents/tool-search.test.ts (2387 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | fakeTool | (private) |
| 59 | fn | pluginTool | (private) |
| 68 | fn | directOnlyTool | (private) |
| 72 | fn | mcpPluginTool | (private) |
| 87 | fn | resultDetails | (private) |
| 94 | fn | mockCall | (private) |

## src/agents/tool-search.ts (2578 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | ToolSearchMode | (private) |
| 61 | type | CatalogSource | (private) |
| 62 | type | CatalogTool | (private) |
| 63 | type | CatalogVisibilityOptions | (private) |
| 66 | type | UnknownToolRecoverySurface | (private) |
| 67 | type | UnknownToolErrorOptions | (private) |
| 71 | type | ToolSearchCallOptions | (private) |
| 78 | type | ReusableCatalogSnapshot | (private) |
| 83 | type | ToolSearchCatalogToolExecutor | pub |
| 99 | type | ToolSearchTargetTranscriptProjection | pub |
| 110 | type | ToolSearchConfig | pub |
| 119 | type | ToolSearchToolContext | pub |
| 133 | type | ToolSearchCatalogEntry | pub |
| 146 | type | ToolSearchDirectoryIntent | (private) |
| 156 | type | ToolDirectoryFamily | (private) |
| 158 | type | ToolSearchCatalogSession | (private) |
| 165 | type | ToolSearchCatalogRef | pub |
| 169 | type | CodeModeBridgeMethod | (private) |
| 171 | type | CodeModeChildMessage | (private) |
| 177 | type | CodeModeBridgeResultMessage | (private) |
| 184 | fn | send | (private) |
| 190 | fn | sendAndFlush | (private) |
| 204 | fn | toJsonSafe | (private) |
| 232 | fn | formatLogItem | (private) |
| 240 | fn | bridgeResultPayload | (private) |
| 248 | fn | settleBridge | (private) |
| 264 | fn | buildModelScriptSource | (private) |
| 268 | fn | buildControllerSource | (private) |
| 349 | fn | pumpController | (private) |
| 358 | fn | runModelCode | (private) |
| 442 | fn | readToolSearchConfig | (private) |
| 454 | fn | readBoolean | (private) |
| 458 | fn | readInteger | (private) |
| 465 | fn | isToolSearchCodeModeSupported | (private) |
| 472 | fn | resolveMinCodeTimeoutMs | (private) |
| 476 | fn | resolveToolSearchConfig | pub |
| 503 | fn | sessionCatalogKeys | (private) |
| 526 | fn | sessionCatalogKey | (private) |
| 535 | fn | reusableCatalogKey | (private) |
| 547 | fn | stableJsonFingerprint | (private) |
| 565 | fn | catalogToolIdentity | (private) |
| 576 | fn | untrustedSchemaFingerprint | (private) |
| 590 | fn | catalogEntriesFingerprint | (private) |
| 620 | fn | restoreToolSearchCatalog | (private) |
| 649 | fn | bindToolSearchCatalog | (private) |
| 665 | fn | rememberReusableCatalog | (private) |
| 686 | fn | classifyTool | (private) |
| 710 | fn | makeCatalogId | (private) |
| 715 | fn | wrapCatalogTool | (private) |
| 722 | fn | toCatalogEntry | (private) |
| 750 | fn | shouldCatalogTool | (private) |
| 762 | fn | registerHeadlessToolSearchCatalog | pub |
| 780 | fn | collectUniqueCatalogToolNames | pub |
| 794 | fn | shouldExposeControlTool | (private) |
| 808 | fn | readMessageToolResultId | (private) |
| 835 | fn | textFromToolSearchProjectionResult | (private) |
| 864 | fn | buildToolSearchTargetTranscriptMessages | (private) |
| 908 | fn | projectToolSearchTargetTranscriptMessages | pub |
| 951 | fn | freezeJsonSnapshot | (private) |
| 962 | fn | snapshotToolSearchTargetTranscriptResult | (private) |
| 979 | fn | createToolSearchCatalogRef | pub |
| 984 | fn | applyToolSearchCatalog | pub |
| 1012 | fn | applyToolSchemaDirectoryCatalog | pub |
| 1061 | fn | buildToolSchemaDirectoryPrompt | pub |
| 1073 | fn | resolveToolSearchCatalogTool | pub |
| 1099 | fn | addClientToolsToToolSearchCatalog | pub |
| 1119 | fn | registerToolSearchCatalog | (private) |
| 1161 | fn | clearToolSearchCatalog | pub |
| 1182 | fn | resolveCatalog | (private) |
| 1211 | fn | compactToolSearchCatalogEntry | pub |
| 1229 | fn | compactDirectoryDescription | (private) |
| 1237 | fn | formatToolDirectoryIdentifier | (private) |
| 1242 | fn | formatToolDirectoryEntry | (private) |
| 1258 | fn | renderToolSearchCatalogDirectory | (private) |
| 1267 | fn | formatToolSearchCatalogDirectory | (private) |
| 1370 | fn | readToolDirectoryIntent | (private) |
| 1406 | fn | classifyDirectoryToolFamilies | (private) |
| 1440 | fn | scoreDirectoryTool | (private) |
| 1490 | fn | expandDirectoryHydrationGroups | (private) |
| 1554 | fn | estimateToolSchemaDirectoryToolNames | pub |
| 1603 | fn | describeEntry | (private) |
| 1611 | fn | tokenize | (private) |
| 1615 | fn | scoreEntry | (private) |
| 1644 | fn | visibleCatalogEntries | (private) |
| 1653 | fn | tokenizeLookupValue | (private) |
| 1657 | fn | scoreUnknownToolSuggestion | (private) |
| 1685 | fn | formatUnknownToolIdError | (private) |
| 1716 | fn | findEntry | (private) |
| 1739 | fn | findEntryByExactId | (private) |
| 1754 | fn | readId | (private) |
| 1763 | fn | readLimit | (private) |
| 1773 | fn | readSearchArgs | (private) |
| 1786 | fn | readCallArgs | (private) |
| 1795 | fn | getTelemetry | (private) |
| 1817 | fn | validateCatalogOutputValue | (private) |
| 1841 | fn | assertCatalogOutputSchemaIsValid | (private) |
| 1847 | fn | assertCatalogOutputMatchesSchema | (private) |
| 1874 | fn | sanitizeToolCallIdPart | (private) |
| 1880 | class | ToolSearchRuntime | pub |
| 1996 | fn | acceptResultBeforeProjection | (private) |
| 2030 | fn | unwrapToolResultValue | (private) |
| 2035 | fn | applyToolCatalogCompaction | pub |
| 2077 | fn | shouldCatalog | (private) |
| 2163 | fn | addClientToolsToToolCatalog | pub |
| 2192 | fn | toJsonSafe | (private) |
| 2221 | fn | runCodeMode | (private) |
| 2248 | fn | buildCodeModeChildArgs | (private) |
| 2255 | fn | isCodeModeBridgeMethod | (private) |
| 2259 | fn | runCodeModeBridgeRequest | (private) |
| 2302 | fn | appendToolSearchCodeStderrTail | (private) |
| 2306 | fn | runCodeModeChild | (private) |
| 2328 | fn | settle | (private) |
| 2375 | fn | rejectOnExit | (private) |
| 2465 | fn | readCode | (private) |
| 2475 | fn | createToolSearchTools | pub |

## src/agents/tools-effective-inventory.test.ts (1042 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | TestPluginMeta | (private) |
| 16 | fn | mockTool | (private) |
| 119 | fn | loadHarness | (private) |

## src/agents/transcript-policy.test.ts (771 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 220 | fn | expectStrictOpenAiCompatibleReplayDefaults | (private) |
| 234 | fn | makeOpenAiCompatibleReasoningModel | (private) |

## src/agents/transcript-redact.test.ts (1490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | msgContent | (private) |
| 17 | fn | textMessage | (private) |
| 24 | fn | cfg | (private) |
| 33 | fn | googleCompatCfg | (private) |

## src/agents/transcript-redact.ts (761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | resolveTranscriptRedactPatterns | (private) |
| 26 | fn | redactTranscriptOptions | (private) |
| 41 | fn | isTranscriptRedactionDisabled | (private) |
| 45 | fn | redactTranscriptText | (private) |
| 52 | fn | redactTranscriptStructuredFieldValue | (private) |
| 63 | fn | isPlainTranscriptObject | (private) |
| 68 | fn | isImageMimeType | (private) |
| 72 | fn | normalizeImageMimeType | (private) |
| 76 | fn | imageMimeTypeForRecord | (private) |
| 84 | fn | imageMimeTypeFieldsForRecord | (private) |
| 88 | fn | sanitizeOpaqueImageBase64 | (private) |
| 95 | fn | isValidOpaqueImageBase64 | (private) |
| 99 | fn | isTranscriptImageContentBlock | (private) |
| 107 | fn | isImageBase64SourceBlock | (private) |
| 115 | fn | sanitizeImageRecord | (private) |
| 140 | fn | startsWithDataUrl | (private) |
| 144 | fn | sanitizeImageDataUrlField | (private) |
| 159 | fn | shouldPreserveOpaqueImagePayload | (private) |
| 180 | fn | shouldPreserveNestedImageDataUrlFields | (private) |
| 190 | type | TranscriptValueLocation | (private) |
| 196 | type | TranscriptAssistantRoute | (private) |
| 230 | fn | isOpenAIResponsesRoute | (private) |
| 234 | fn | isGoogleReasoningRoute | (private) |
| 238 | fn | isAnthropicReasoningRoute | (private) |
| 242 | fn | isOpenAICompletionsRoute | (private) |
| 246 | fn | isGoogleOpenAICompletionsRoute | (private) |
| 255 | fn | isCustomProviderRoute | (private) |
| 266 | fn | isGitHubCopilotResponsesRoute | (private) |
| 273 | fn | isStructurallyValidOpaqueReplayToken | (private) |
| 282 | fn | isCredentialSafeOpaqueReplayToken | (private) |
| 293 | fn | isGoogleThoughtSignature | (private) |
| 302 | fn | resolveTranscriptAssistantRoute | (private) |
| 325 | fn | isSafeReplayIdentifier | (private) |
| 335 | fn | isOpenAIResponseItemId | (private) |
| 342 | fn | isOpenAITextSignature | (private) |
| 384 | fn | sanitizeOpenAIReasoningReplayMetadata | (private) |
| 431 | fn | shouldPreserveOpaqueProviderPayload | (private) |
| 474 | fn | sanitizeOpenAIReasoningSignature | (private) |
| 536 | fn | sanitizeOpenAICompletionsToolSignature | (private) |
| 578 | fn | redactTranscriptStructuredValue | (private) |
| 749 | fn | redactTranscriptMessage | pub |

## src/agents/transport-message-transform.test.ts (622 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | makeModel | (private) |
| 19 | type | ToolResultMessage | (private) |
| 21 | fn | requireToolResultMessage | (private) |
| 30 | fn | toolResultSummaries | (private) |
| 41 | fn | assistantToolCall | (private) |

## src/agents/usage.test.ts (551 lines)

_No symbols extracted._

## src/agents/workspace-state-store.ts (715 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | isCanonicalIsoTimestamp | (private) |
| 36 | fn | assertCanonicalTimestamp | (private) |
| 42 | fn | assertCanonicalIntegerTimestamp | (private) |
| 48 | type | WorkspaceSetupState | pub |
| 54 | type | WorkspaceAttestation | pub |
| 59 | type | WorkspaceStateSnapshot | pub |
| 67 | type | WorkspaceStateIdentity | (private) |
| 72 | type | WorkspaceStateDeletionPlan | (private) |
| 78 | type | WorkspaceStateDatabase | (private) |
| 90 | type | WorkspaceIdentityResolution | (private) |
| 96 | fn | normalizeWorkspaceIdentityPath | (private) |
| 101 | fn | canonicalizeWorkspaceIdentityPath | (private) |
| 146 | fn | createWorkspaceStateIdentity | (private) |
| 153 | fn | resolveWorkspaceStateAliases | (private) |
| 159 | fn | workspacePathEntryExists | (private) |
| 168 | fn | resolveWorkspaceStateIdentity | pub |
| 172 | fn | resolveWorkspaceIdentityFromDatabase | (private) |
| 223 | fn | registerWorkspacePathAliases | (private) |
| 262 | fn | registerWorkspaceStateAliasesInTransaction | pub |
| 282 | fn | readSnapshotFromDatabase | (private) |
| 354 | fn | readWorkspaceStateSnapshot | pub |
| 402 | fn | mergeWorkspaceSetupState | pub |
| 458 | fn | replaceWorkspaceAttestation | pub |
| 548 | fn | deleteWorkspaceRows | (private) |
| 612 | fn | clearExpiredWorkspaceStateForVanishedWorkspace | pub |
| 621 | fn | preserveRecentState | (private) |
| 651 | fn | prepareWorkspaceStateDeletion | pub |
| 660 | fn | deleteWorkspaceState | pub |

## src/agents/workspace.test.ts (1175 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | readWorkspaceState | (private) |
| 97 | fn | writeLegacyWorkspaceState | (private) |
| 105 | fn | expectBootstrapSeeded | (private) |
| 111 | fn | expectPathMissing | (private) |
| 115 | fn | expectWorkspaceVanished | (private) |
| 124 | fn | expectNoLegacyWorkspaceStateWrites | (private) |
| 137 | fn | expectCompletedWithoutBootstrap | (private) |
| 144 | fn | expectSubagentAllowedBootstrapNames | (private) |
| 149 | fn | expectCronAllowedBootstrapNames | (private) |
| 932 | fn | getMemoryEntries | (private) |
| 935 | fn | expectSingleMemoryEntry | (private) |

## src/agents/workspace.ts (1200 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | WorkspaceGuardedReadResult | (private) |
| 79 | fn | workspaceFileIdentity | (private) |
| 83 | fn | readWorkspaceFileWithGuards | (private) |
| 142 | fn | stripFrontMatter | (private) |
| 146 | fn | loadTemplate | (private) |
| 152 | fn | pending | (private) |
| 184 | type | WorkspaceBootstrapFileName | pub |
| 194 | type | WorkspaceBootstrapFile | pub |
| 201 | type | ExtraBootstrapLoadDiagnosticCode | pub |
| 207 | type | ExtraBootstrapLoadDiagnostic | pub |
| 234 | class | WorkspaceVanishedError | pub |
| 249 | fn | writeFileIfMissing | (private) |
| 265 | fn | isTransientWorkspaceReadError | (private) |
| 276 | fn | fileContentDiffersFromTemplate | (private) |
| 296 | fn | hasWorkspaceUserContentEvidence | (private) |
| 318 | fn | hasWorkspaceSkillEvidence | (private) |
| 338 | fn | hasSkipBootstrapWorkspaceContentEvidence | (private) |
| 365 | fn | workspaceProfileLooksConfigured | (private) |
| 382 | fn | workspaceRequiredBootstrapLooksCustomized | (private) |
| 412 | fn | workspaceAttestedGeneratedFilesIntact | (private) |
| 436 | fn | workspaceHasBootstrapCompletionEvidence | (private) |
| 440 | type | WorkspaceBootstrapCompletionReconcileResult | (private) |
| 446 | fn | reconcileWorkspaceBootstrapCompletionState | (private) |
| 494 | fn | collectGeneratedBootstrapHashes | (private) |
| 517 | fn | recentWorkspaceAttestation | (private) |
| 533 | fn | maybeWriteWorkspaceAttestation | (private) |
| 551 | fn | hasWorkspaceSetupStateMarker | (private) |
| 555 | fn | hasRecentWorkspaceSetupState | (private) |
| 565 | fn | workspaceAttestationHasSurvivalEvidence | (private) |
| 590 | fn | workspaceSetupStateHasSurvivalEvidence | (private) |
| 619 | fn | readCanonicalWorkspaceStateSnapshot | (private) |
| 627 | fn | isWorkspaceSetupCompleted | pub |
| 632 | fn | resolveWorkspaceBootstrapStatus | pub |
| 648 | fn | isWorkspaceBootstrapPending | pub |
| 652 | fn | hasGitRepo | (private) |
| 661 | fn | isGitAvailable | (private) |
| 678 | fn | ensureGitRepo | (private) |
| 695 | fn | ensureAgentWorkspace | pub |
| 872 | fn | markState | (private) |
| 876 | fn | nowIso | (private) |
| 949 | fn | loadWorkspaceBootstrapFiles | pub |
| 1026 | fn | filterBootstrapFilesForSession | pub |
| 1042 | fn | hasGlobPattern | (private) |
| 1047 | fn | normalizeWorkspacePatternPath | (private) |
| 1054 | fn | resolveGlobWalkRoot | (private) |
| 1099 | fn | resolveExtraBootstrapPatternPaths | (private) |
| 1132 | fn | loadExtraBootstrapFilesWithDiagnostics | pub |

## src/auto-reply/chunk.test.ts (740 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | expectFencesBalanced | (private) |
| 24 | fn | requireChunk | (private) |
| 32 | fn | expectChunkLengths | (private) |
| 39 | fn | expectNormalizedChunkJoin | (private) |
| 43 | fn | expectChunkTextCase | (private) |
| 52 | fn | expectChunkSpecialCase | (private) |
| 56 | type | ChunkCase | (private) |
| 63 | fn | runChunkCases | (private) |
| 69 | fn | expectChunkModeCase | (private) |
| 82 | fn | expectMarkdownFenceSplitCases | (private) |
| 103 | fn | expectNoEmptyFencedChunks | (private) |
| 113 | fn | expectFenceParseOccursOnce | (private) |
| 143 | fn | newlineModeFenceCases | (private) |

## src/auto-reply/chunk.ts (559 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | TextChunkProvider | pub |
| 30 | type | ChunkMode | pub |
| 35 | type | ProviderChunkConfig | (private) |
| 45 | fn | resolveChunkLimitForProvider | (private) |
| 63 | fn | resolveTextChunkLimit | pub |
| 73 | fn | providerOverride | (private) |
| 88 | fn | resolveChunkModeForProvider | (private) |
| 110 | fn | resolveChunkMode | pub |
| 130 | fn | chunkByNewline | pub |
| 197 | fn | chunkByParagraph | pub |
| 252 | fn | pushParagraph | (private) |
| 295 | fn | chunkTextWithMode | pub |
| 302 | fn | chunkMarkdownTextWithMode | pub |
| 320 | fn | splitByNewline | (private) |
| 336 | fn | splitPackedFenceParagraphChunk | (private) |
| 364 | fn | resolveChunkEarlyReturn | (private) |
| 377 | fn | chunkText | pub |
| 390 | fn | chunkMarkdownText | pub |
| 498 | fn | skipLeadingNewlines | (private) |
| 506 | fn | pickSafeBreakIndex | (private) |
| 525 | fn | scanParenAwareBreakpoints | (private) |

## src/auto-reply/command-auth.ts (699 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | CommandAuthorization | pub |
| 35 | type | InferredProviderCandidate | (private) |
| 40 | type | InferredProviderProbe | (private) |
| 45 | type | ProviderAllowFromResolution | (private) |
| 51 | type | OwnerAuthorizationState | (private) |
| 56 | fn | resolveProviderFromContext | (private) |
| 110 | fn | probeInferredProviders | (private) |
| 137 | fn | formatAllowFromList | (private) |
| 153 | fn | normalizeAllowFromEntry | (private) |
| 168 | fn | isWildcardAllowFromEntry | (private) |
| 172 | fn | hasWildcardAllowFrom | (private) |
| 176 | fn | stripWildcardAllowFrom | (private) |
| 180 | fn | resolveProviderAllowFrom | (private) |
| 229 | fn | buildProviderAllowFromResolution | (private) |
| 262 | fn | describeAllowFromResolutionError | (private) |
| 270 | fn | resolveOwnerAllowFromList | (private) |
| 318 | fn | resolveCommandsAllowFromList | (private) |
| 348 | fn | resolveOwnerCandidatesForCommands | (private) |
| 372 | fn | resolveOwnerAuthorizationState | (private) |
| 427 | fn | resolveCommandSenderAuthorization | (private) |
| 458 | fn | resolveSenderCandidates | (private) |
| 470 | fn | pushCandidate | (private) |
| 503 | fn | resolveFallbackAllowFrom | (private) |
| 541 | fn | resolveFallbackAccountConfig | (private) |
| 568 | fn | resolveFallbackDefaultAccountConfig | (private) |
| 599 | fn | resolveCommandAuthorization | pub |

## src/auto-reply/command-control.test.ts (1233 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | formatAllowFrom | (private) |
| 37 | fn | createAllowFromPlugin | (private) |
| 59 | fn | createThrowingAllowFromPlugin | (private) |
| 65 | fn | createOwnerEnforcingAllowFromPlugin | (private) |
| 79 | fn | registerAllowFromPlugins | (private) |
| 83 | fn | resolveTestChannelAuthorization | (private) |
| 529 | fn | makeWhatsAppContext | (private) |
| 538 | fn | makeDiscordContext | (private) |
| 547 | fn | resolveWithCommandsAllowFrom | (private) |

## src/auto-reply/commands-registry.shared.ts (1062 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | ListThinkingLevels | (private) |
| 29 | type | DefineChatCommandInput | (private) |
| 53 | fn | shouldForwardModelCommandToServer | pub |
| 60 | fn | defineChatCommand | pub |
| 90 | fn | registerAlias | (private) |
| 120 | fn | assertCommandRegistry | pub |
| 171 | fn | buildBuiltinChatCommands | pub |

## src/auto-reply/commands-registry.test.ts (932 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | NativeCommandNameResolver | (private) |
| 31 | fn | installNativeCommandOverridePlugin | (private) |
| 54 | fn | installDiscordNativeCommandOverrides | (private) |
| 62 | fn | installSlackNativeCommandOverrides | (private) |
| 70 | fn | installOllamaThinkingProvider | (private) |
| 91 | fn | createNativeCommandsRegistry | (private) |
| 115 | fn | commandKeySet | (private) |
| 119 | fn | nativeNameSet | (private) |
| 123 | fn | expectSetContainsAll | (private) |
| 129 | fn | expectSetOmitsAll | (private) |
| 135 | fn | requireChatCommand | (private) |
| 143 | fn | requireNativeCommand | (private) |
| 151 | fn | requireNativeSpec | (private) |
| 159 | fn | requireCommandArg | (private) |
| 170 | fn | requireCommandArgAt | (private) |
| 181 | fn | requireCommandArgMenu | (private) |
| 191 | fn | requireSeenChoice | (private) |
| 667 | fn | createUsageModeCommand | (private) |

## src/auto-reply/dispatch.freshness.test.ts (906 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | DispatchReplyFromConfigFn | (private) |
| 15 | type | DispatchReplyFromConfigParams | (private) |
| 28 | type | Delivery | (private) |
| 33 | fn | createDeferred | (private) |
| 41 | fn | queuedFinalResult | (private) |
| 48 | fn | buildForegroundCtx | (private) |
| 63 | fn | dispatchWithDeliveries | (private) |

## src/auto-reply/dispatch.test.ts (898 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | DispatchReplyFromConfigFn | (private) |
| 13 | type | FinalizeInboundContextFn | (private) |
| 14 | type | DeriveInboundMessageHookContextFn | (private) |
| 16 | type | GetGlobalHookRunnerFn | (private) |
| 17 | type | CreateReplyDispatcherFn | (private) |
| 18 | type | CreateReplyDispatcherWithTypingFn | (private) |
| 80 | fn | createDispatcher | (private) |
| 96 | fn | lastTypingDispatcherOptions | (private) |
| 105 | fn | requireReplyDispatcherOptions | (private) |

## src/auto-reply/dispatch.ts (746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | InternalDispatchReplyOptions | (private) |
| 49 | type | ForegroundReplyFenceState | (private) |
| 58 | type | ForegroundReplyFenceSnapshot | (private) |
| 64 | type | ReplyPayloadRunState | (private) |
| 71 | fn | applyRuntimeToolsAllow | (private) |
| 84 | fn | normalizeForegroundReplyFencePart | (private) |
| 92 | fn | resolveForegroundReplyFenceKey | (private) |
| 119 | fn | beginForegroundReplyFence | (private) |
| 149 | fn | notifyForegroundReplyFenceWaiters | (private) |
| 157 | fn | setForegroundReplyFenceAdmissionWaiting | (private) |
| 178 | fn | hasNewerActiveForegroundReplyFenceGeneration | (private) |
| 190 | fn | shouldCancelForegroundReplyDelivery | (private) |
| 214 | fn | markForegroundReplyFenceVisibleDelivery | (private) |
| 229 | fn | markForegroundReplyFenceVisibleDeliveryGeneration | (private) |
| 243 | fn | isExplicitlyNonVisibleDelivery | (private) |
| 253 | fn | isExplicitlyVisibleDelivery | (private) |
| 262 | fn | isVisiblePartialDeliveryError | (private) |
| 275 | fn | runForegroundReplyFenceFreshSettledDelivery | (private) |
| 298 | fn | endForegroundReplyFence | (private) |
| 317 | fn | resolveDispatcherSilentReplyContext | (private) |
| 342 | fn | resolveInboundReplyHookTarget | (private) |
| 355 | fn | buildMessageSendingBeforeDeliver | (private) |
| 389 | fn | buildReplyPayloadSendingBeforeDeliver | (private) |
| 416 | fn | bindReplyPayloadRunState | (private) |
| 430 | fn | installReplyPayloadSendingBeforeDeliver | (private) |
| 446 | fn | markReplyPayloadSendingBeforeDeliverInstalled | (private) |
| 455 | fn | buildDispatchTimelineAttributes | (private) |
| 470 | type | DispatchInboundResult | (private) |
| 473 | fn | finalizeDispatchResult | (private) |
| 513 | fn | dispatchInboundMessage | pub |
| 574 | fn | dispatchInboundMessageWithBufferedDispatcher | pub |
| 702 | fn | dispatchInboundMessageWithDispatcher | pub |

## src/auto-reply/heartbeat-filter.test.ts (992 lines)

_No symbols extracted._

## src/auto-reply/inbound.test.ts (1457 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | TestChannelGroupContext | (private) |
| 36 | fn | commitInboundForTest | (private) |
| 46 | fn | normalizeTestSlug | (private) |
| 50 | fn | resolveDiscordRequireMentionForTest | (private) |
| 82 | fn | resolveSlackRequireMentionForTest | (private) |
| 120 | fn | installGroupRequireMentionTestPlugins | (private) |
| 843 | fn | onUnhandledRejection | (private) |
| 988 | fn | secondFlush | (private) |

## src/auto-reply/reply.triggers.trigger-handling.e2e.test.ts (864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | GetReplyFromConfig | (private) |
| 64 | fn | normalizeErrorText | (private) |
| 71 | fn | stripHeartbeat | (private) |
| 113 | fn | getReplyFromConfig | (private) |
| 128 | fn | maybeReplyText | (private) |
| 132 | fn | formatDateStampForZone | (private) |
| 145 | fn | mockEmbeddedOkPayload | (private) |
| 149 | fn | mockRunEmbeddedAgentText | (private) |
| 162 | fn | writeDailyMemoryNotes | (private) |
| 173 | fn | seedTargetSession | (private) |
| 183 | fn | makeNativeTelegramCommandMessage | (private) |
| 198 | fn | makeTelegramSessionMessage | (private) |
| 206 | fn | makeAuthorizedSmsCommandMessage | (private) |
| 215 | fn | makeStartupContextCfg | (private) |
| 226 | fn | runAuthorizedSmsCommand | (private) |
| 230 | fn | firstMockCallArg | (private) |
| 245 | fn | expectNextRunUsesTargetSession | (private) |
| 268 | fn | writeStoredModelOverride | (private) |
| 280 | fn | mockSuccessfulCompaction | (private) |
| 292 | fn | makeUnauthorizedWhatsAppCfg | (private) |
| 303 | fn | expectResetBlockedForNonOwner | (private) |
| 335 | fn | mockEmbeddedOk | (private) |
| 339 | fn | runInlineUnauthorizedCommand | (private) |

## src/auto-reply/reply/abort.test.ts (1593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | fn | setTrackedAbortMemory | (private) |
| 103 | fn | writeSessionStore | (private) |
| 115 | fn | readAbortSessionEntry | (private) |
| 119 | fn | createAbortConfig | (private) |
| 141 | fn | runStopCommand | (private) |
| 185 | fn | enqueueQueuedFollowupRun | (private) |
| 219 | fn | expectSessionLaneCleared | (private) |

## src/auto-reply/reply/abort.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 104 | fn | abortSessionRunTargetWithOutcome | pub |
| 130 | fn | formatAbortReplyText | pub |
| 149 | fn | resolveStoredSessionId | (private) |
| 170 | fn | resolveBoundAcpAbortTargetSessionKey | (private) |
| 194 | fn | normalizeRequesterSessionKey | (private) |
| 206 | fn | markSubagentRunTerminatedBestEffort | (private) |
| 221 | fn | stopSubagentsForRequester | pub |
| 317 | fn | tryFastAbortFromMessage | pub |

## src/auto-reply/reply/acp-projector.test.ts (841 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | Delivery | (private) |
| 9 | fn | countMatching | (private) |
| 19 | fn | createProjectorHarness | (private) |
| 36 | fn | createLiveCfgOverrides | (private) |
| 50 | fn | createHiddenBoundaryCfg | (private) |
| 58 | fn | blockDeliveries | (private) |
| 62 | fn | combinedBlockText | (private) |
| 68 | fn | expectToolCallSummary | (private) |
| 73 | fn | createFinalOnlyStatusToolHarness | (private) |
| 88 | fn | createLiveToolLifecycleHarness | (private) |
| 104 | fn | createLiveStatusAndToolLifecycleHarness | (private) |
| 121 | fn | emitToolLifecycleEvent | (private) |
| 137 | fn | runHiddenBoundaryCase | (private) |

## src/auto-reply/reply/acp-projector.ts (530 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | AcpProjectedDeliveryMeta | (private) |
| 38 | type | ToolLifecycleState | (private) |
| 44 | type | BufferedToolDelivery | (private) |
| 49 | fn | truncateText | (private) |
| 59 | fn | hashText | (private) |
| 63 | fn | normalizeToolStatus | (private) |
| 68 | fn | resolveHiddenBoundarySeparatorText | (private) |
| 81 | fn | shouldInsertSeparator | (private) |
| 109 | fn | shouldFlushLiveBufferOnBoundary | (private) |
| 128 | fn | shouldFlushLiveBufferOnIdle | (private) |
| 144 | fn | renderToolSummaryText | (private) |
| 165 | type | AcpReplyProjector | (private) |
| 170 | fn | createAcpReplyProjector | pub |
| 190 | fn | createTurnBlockReplyPipeline | (private) |
| 215 | fn | shouldSendToolSummaries | (private) |
| 218 | fn | clearLiveIdleTimer | (private) |
| 226 | fn | drainChunker | (private) |
| 238 | fn | flushLiveBuffer | (private) |
| 254 | fn | scheduleLiveIdleFlush | (private) |
| 270 | fn | resetTurnState | (private) |
| 287 | fn | flushBufferedToolDeliveries | (private) |
| 318 | fn | emitSystemStatus | (private) |
| 348 | fn | markHiddenToolBoundary | (private) |
| 357 | fn | emitToolSummary | (private) |
| 421 | fn | emitTruncationNotice | (private) |

## src/auto-reply/reply/agent-runner-cli-dispatch.test.ts (825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | RunCliAgentWithLifecycleParams | (private) |
| 19 | type | ReasoningTextPayload | (private) |
| 22 | type | ReasoningProgressPayload | (private) |

## src/auto-reply/reply/agent-runner-cli-dispatch.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | AgentEventBridge | (private) |
| 41 | fn | stopAgentEventBridges | (private) |
| 50 | fn | createAssistantTextBridge | (private) |
| 76 | type | ReasoningTextPayload | (private) |
| 81 | type | ReasoningProgressPayload | (private) |
| 85 | fn | createCliReasoningStreamBridge | pub |
| 100 | fn | createReasoningTextBridge | (private) |
| 129 | fn | createReasoningProgressBridge | (private) |
| 160 | type | CommentaryTextPayload | (private) |
| 165 | fn | readCommentaryTextPayload | (private) |
| 179 | type | CliToolEventPayload | (private) |
| 188 | fn | keepCliSessionBindingOnlyWhenReused | pub |
| 221 | fn | clearDroppedCliSessionBinding | pub |
| 229 | fn | clearEntry | (private) |
| 250 | fn | createToolEventBridge | (private) |
| 293 | fn | createCliToolSummaryTracker | pub |
| 341 | fn | createCommentaryEventBridge | (private) |
| 356 | fn | createPlanUpdateBridge | (private) |
| 388 | fn | createToolBoundaryBridge | (private) |
| 407 | type | RunCliAgentWithLifecycleParams | (private) |
| 436 | fn | runCliAgentWithLifecycle | pub |
| 447 | fn | runCliAgentWithLifecycleInternal | (private) |
| 459 | fn | emitFastModeAutoProgress | (private) |
| 485 | fn | maybeAnnounceFastModeAutoOff | (private) |
| 500 | fn | maybeEmitFastModeAutoReset | (private) |

## src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | fn | createTelegramSessionCtx | (private) |
| 117 | fn | createReplyOperation | (private) |
| 158 | fn | createDirectRuntimeReplyParams | (private) |
| 197 | fn | requireResolveQueuedReplyExecutionConfigCall | (private) |
| 213 | type | MockCallSource | (private) |
| 219 | fn | requireMaintenanceCall | (private) |

## src/auto-reply/reply/agent-runner-error-handler.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | OverloadRetryState | pub |
| 83 | fn | stopOverloadRetryNotice | (private) |
| 94 | fn | markOverloadRetryUnsafeToReplay | pub |
| 100 | fn | cancelOverloadRetryNotice | pub |
| 106 | type | ErrorAction | (private) |
| 110 | fn | handleAgentExecutionError | pub |
| 125 | fn | takePendingLifecycleTerminal | (private) |
| 147 | fn | waitForRetryBackoff | (private) |
| 288 | fn | scheduleRetryNotice | (private) |
| 303 | fn | sendRetryNotice | (private) |
| 367 | fn | abortNotice | (private) |

## src/auto-reply/reply/agent-runner-execution-cli-progress.test.ts (930 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-compaction.test.ts (539 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-lifecycle.test.ts (598 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-probes.test.ts (762 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-progress.test.ts (769 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-provider-failures.test.ts (906 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createOverloadSummaryError | (private) |

## src/auto-reply/reply/agent-runner-execution-results.test.ts (529 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-state.test.ts (667 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution-terminal-failures.test.ts (722 lines)

_No symbols extracted._

## src/auto-reply/reply/agent-runner-execution.test-support.ts (596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | makeTestModel | pub |
| 238 | fn | getRunAgentTurnWithFallback | pub |
| 242 | type | FallbackRunnerParams | pub |
| 257 | type | EmbeddedAgentParams | pub |
| 317 | fn | createMockTypingSignaler | pub |
| 333 | fn | createFollowupRun | pub |
| 363 | fn | createTestUserTurnRecorder | pub |
| 371 | fn | createMockReplyOperation | pub |
| 421 | fn | requireRecord | pub |
| 428 | fn | expectRecordFields | pub |
| 437 | fn | requireMockCall | pub |
| 445 | fn | expectMockCallArgFields | pub |
| 454 | fn | expectNoMockCallWithFields | pub |
| 467 | fn | requireMockCallArgWithFields | pub |
| 488 | fn | expectBlockReplyCall | pub |
| 496 | fn | createMinimalRunAgentTurnParams | pub |
| 539 | fn | createNonDirectFailureSessionCtx | pub |
| 552 | fn | setupAgentRunnerExecutionTestState | pub |

## src/auto-reply/reply/agent-runner-failure-reply.ts (614 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | buildRateLimitCooldownMessage | pub |
| 74 | fn | resolveBillingFailureReplyText | pub |
| 97 | fn | extractCodexUsageLimitErrorMessage | (private) |
| 111 | fn | extractCodexUsageLimitMessage | (private) |
| 138 | fn | isPureTransientRateLimitSummary | pub |
| 149 | fn | hasBillingAttemptSummary | pub |
| 157 | fn | collapseRepeatedFailureDetail | (private) |
| 173 | type | ExternalRunFailureReply | (private) |
| 178 | type | ExternalRunFailureInput | (private) |
| 180 | type | ExternalFailureConversationContext | (private) |
| 185 | fn | isNonDirectConversationContext | pub |
| 190 | fn | isVerboseFailureDetailEnabled | pub |
| 194 | fn | resolveExternalRunFailureTextForConversation | pub |
| 227 | fn | buildCodexAppServerFailureText | (private) |
| 242 | fn | buildPreflightCompactionFailureText | pub |
| 263 | fn | buildCliBackendTimeoutFailureText | (private) |
| 314 | fn | buildMissingApiKeyFailureText | (private) |
| 337 | fn | buildAuthProfileFailoverFailureText | pub |
| 349 | fn | formatForwardedExternalRunFailureText | (private) |
| 364 | fn | supportsChannelCodexLogin | (private) |
| 376 | fn | buildExternalRunFailureReply | pub |
| 459 | fn | markAgentRunFailureReplyPayload | pub |
| 467 | fn | buildTerminalAgentRunFailureReplyPayload | pub |
| 484 | fn | buildEmptyInteractiveReplyPayload | pub |
| 519 | fn | buildKnownAgentRunFailureReplyPayload | pub |

## src/auto-reply/reply/agent-runner-memory.test.ts (2770 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | registerMemoryFlushPlanResolverForTest | (private) |
| 42 | type | TestReplyOperation | (private) |
| 47 | fn | createReplyOperation | (private) |
| 84 | fn | loadMainSessionEntry | (private) |
| 92 | type | RefreshQueuedFollowupSessionParams | (private) |
| 99 | type | ModelFallbackParams | (private) |
| 115 | type | EmbeddedAgentParams | (private) |
| 134 | type | CompactEmbeddedAgentSessionParams | (private) |
| 154 | fn | requireRefreshQueuedFollowupSessionCall | (private) |
| 164 | fn | requireModelFallbackCall | (private) |
| 172 | fn | requireEmbeddedAgentCall | (private) |
| 180 | fn | requireCompactEmbeddedAgentSessionCall | (private) |

## src/auto-reply/reply/agent-runner-memory.ts (1604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | EmbeddedAgentRuntime | (private) |
| 81 | type | UpdateSessionEntryParams | (private) |
| 99 | fn | loadEmbeddedAgentRuntime | (private) |
| 103 | fn | compactEmbeddedAgentSessionDefault | (private) |
| 112 | fn | runEmbeddedAgentDefault | (private) |
| 119 | fn | updateSessionEntryDefault | (private) |
| 135 | fn | ensureMemoryFlushTargetFile | (private) |
| 175 | fn | setAgentRunnerMemoryTestDeps | (private) |
| 199 | fn | estimatePromptTokensForMemoryFlush | (private) |
| 212 | fn | resolveEffectivePromptTokens | (private) |
| 225 | fn | isPreflightCompactionSkipReason | (private) |
| 237 | fn | resolveMemoryFlushModelFallbackOptions | (private) |
| 269 | fn | followupUsesCliRuntime | (private) |
| 288 | fn | resolveFollowupContextConfigProvider | (private) |
| 303 | fn | resolveFollowupAgentRuntimeId | (private) |
| 328 | fn | followupUsesCodexRuntime | (private) |
| 338 | fn | resolveVisibleMemoryFlushErrorPayloads | (private) |
| 344 | fn | buildVisibleMemoryFlushFailure | (private) |
| 352 | fn | buildMemoryFlushErrorPayload | (private) |
| 370 | fn | truncateMemoryFlushErrorMessage | (private) |
| 378 | type | SessionTranscriptUsageSnapshot | (private) |
| 390 | fn | parseUsageFromTranscriptLine | (private) |
| 411 | fn | resolveSessionLogPath | (private) |
| 452 | fn | deriveTranscriptUsageSnapshot | (private) |
| 485 | type | SessionLogSnapshot | (private) |
| 490 | fn | appendPostCompactionRefreshPrompt | (private) |
| 512 | fn | readSessionLogSnapshot | (private) |
| 568 | type | SessionLogUsageScan | (private) |
| 574 | fn | readSessionLogByteSize | (private) |
| 588 | fn | readLastNonzeroUsageFromSessionLog | (private) |
| 642 | fn | estimatePostUsageTrailingBytes | (private) |
| 649 | type | TranscriptTokenEstimate | (private) |
| 656 | fn | estimatePromptTokensFromSessionTranscript | (private) |
| 710 | fn | estimatedMessageTokens | (private) |
| 744 | fn | runPreflightCompactionIfNeeded | pub |
| 936 | fn | notifyCompaction | (private) |
| 945 | fn | notifyStartCompaction | (private) |
| 949 | fn | notifyTerminalCompaction | (private) |
| 1076 | type | MemoryFlushOutcome | (private) |
| 1078 | type | MemoryFlushResult | (private) |
| 1084 | fn | runMemoryFlushIfNeeded | pub |
| 1107 | fn | memoryFlushWritable | (private) |

## src/auto-reply/reply/agent-runner-payloads.test.ts (1571 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | ResolveReplyTransportParams | (private) |
| 32 | fn | expectFields | (private) |
| 42 | fn | expectSameTargetRepliesDelivered | (private) |
| 285 | fn | normalizeMediaPaths | (private) |
| 286 | fn | normalizeMedia | (private) |
| 311 | fn | normalizeMediaPaths | (private) |
| 897 | fn | normalizeMediaPaths | (private) |
| 898 | fn | rewrite | (private) |
| 1230 | fn | normalizeMediaPaths | (private) |
| 1244 | fn | normalizeMediaPaths | (private) |

## src/auto-reply/reply/agent-runner-payloads.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | loadReplyPayloadsDedupeRuntime | (private) |
| 46 | fn | normalizeReplyPayloadMedia | (private) |
| 73 | fn | normalizeSentMediaUrlsForDedupe | (private) |
| 114 | fn | shouldKeepPayloadDuringSilentTurn | (private) |
| 121 | fn | sanitizeFinalReplyText | (private) |
| 131 | fn | sanitizeHeartbeatPayload | (private) |
| 147 | fn | copyPayloadWithSanitizedText | (private) |
| 170 | fn | buildReplyPayloads | pub |
| 378 | fn | isDirectlySentBlockPayload | (private) |

## src/auto-reply/reply/agent-runner-utils.test.ts (546 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | buildEmbeddedRunBaseParams | (private) |
| 41 | fn | makeRun | (private) |

## src/auto-reply/reply/agent-runner.media-paths.test.ts (907 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | fn | normalize | (private) |
| 140 | fn | normalizeSource | (private) |
| 142 | fn | persist | (private) |
| 265 | fn | createReplyOperation | (private) |
| 279 | fn | makeRunReplyAgentParams | (private) |
| 637 | fn | runAgentTurnWithSessionContext | (private) |

## src/auto-reply/reply/agent-runner.misc.runreplyagent.test.ts (3828 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | createCliBackendTestConfig | (private) |
| 52 | fn | registerCliBackendsForTest | (private) |
| 85 | fn | registerMemoryFlushPlanResolverForTest | (private) |
| 214 | fn | resolveCronPath | (private) |
| 246 | type | RunWithModelFallbackParams | (private) |
| 252 | fn | requireRecord | (private) |
| 259 | fn | expectRecordFields | (private) |
| 271 | fn | expectReplyText | (private) |
| 275 | type | MockCallSource | (private) |
| 281 | fn | firstMockCallArg | (private) |
| 289 | fn | setupAgentRunnerMocks | (private) |
| 342 | fn | seedSessionStore | (private) |
| 354 | fn | createBaseRun | (private) |
| 396 | fn | runEmptyDirectReply | (private) |
| 465 | fn | runBaseReplyWithAgentMeta | (private) |
| 1201 | fn | writeActiveMemoryDebugEntry | (private) |
| 2111 | fn | createRun | (private) |
| 2389 | fn | createRun | (private) |
| 2526 | fn | createRun | (private) |
| 2748 | type | EmbeddedAgentParams | (private) |
| 2753 | fn | createRun | (private) |
| 2885 | fn | createRun | (private) |
| 3283 | fn | createRun | (private) |
| 3382 | fn | normalizeReplyPayloads | (private) |
| 3387 | fn | runPrivateFinalCase | (private) |

## src/auto-reply/reply/agent-runner.runreplyagent.e2e.test.ts (4586 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ReplyOptionsWithOperationRunState | (private) |
| 51 | type | AgentRunParams | (private) |
| 84 | fn | countMatching | (private) |
| 94 | fn | requireRecord | (private) |
| 101 | fn | mockCallArgs | (private) |
| 109 | fn | requireStoredSessionEntry | (private) |
| 117 | fn | createSessionStoreFile | (private) |
| 124 | fn | readStoredMainSession | (private) |
| 135 | fn | getRunReplyAgent | (private) |
| 254 | fn | createMinimalRun | (private) |
| 365 | fn | runHookBackedEmbeddedAgent | (private) |
| 398 | fn | attachSourceTurnRecorder | (private) |
| 424 | fn | requireBuiltChannelSourceTurnId | (private) |
| 3077 | fn | markToolResultStarted | (private) |
| 3081 | fn | releaseToolResult | (private) |

## src/auto-reply/reply/agent-runner.ts (3073 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 182 | fn | scheduleFollowupDrainAfterReplyOperationClear | (private) |
| 202 | fn | markBeforeAgentRunBlockedPayloads | (private) |
| 208 | fn | resolvePendingFinalDeliveryRetryText | (private) |
| 220 | fn | buildSilentFallbackFailurePayload | (private) |
| 246 | fn | resolveSourceReplyPolicy | (private) |
| 273 | fn | resolveReplyRunDeliveryContext | (private) |
| 305 | fn | hasSuccessfulSourceReplyDelivery | (private) |
| 319 | fn | hasSuccessfulTerminalSourceReplyDelivery | (private) |
| 340 | fn | resolveConfiguredFallbackModel | (private) |
| 364 | fn | buildInlinePluginStatusPayload | (private) |
| 384 | fn | formatRawTraceBlock | (private) |
| 389 | fn | escapeTraceFence | (private) |
| 393 | fn | hasTraceUsageFields | (private) |
| 413 | fn | formatTraceUsageLine | (private) |
| 417 | fn | formatUsageTraceBlock | (private) |
| 441 | type | TraceAttemptView | (private) |
| 451 | type | TraceExecutionView | (private) |
| 459 | type | TracePromptSegmentView | (private) |
| 464 | type | TraceToolSummaryView | (private) |
| 471 | type | TraceCompletionView | (private) |
| 477 | type | TraceContextManagementView | (private) |
| 484 | fn | formatTraceScalar | (private) |
| 495 | fn | formatKeyValueTraceBlock | (private) |
| 509 | fn | inferFallbackAttemptResult | (private) |
| 516 | fn | mergeExecutionTrace | (private) |
| 591 | fn | formatExecutionResultTraceBlock | (private) |
| 610 | fn | formatFallbackChainTraceBlock | (private) |
| 634 | fn | toSnakeCase | (private) |
| 642 | fn | resolveMetadataSegmentKey | (private) |
| 653 | fn | derivePromptSegments | (private) |
| 661 | fn | addChars | (private) |
| 726 | fn | formatPromptSegmentsTraceBlock | (private) |
| 742 | fn | formatToolSummaryTraceBlock | (private) |
| 756 | fn | formatCompletionTraceBlock | (private) |
| 769 | fn | formatContextManagementTraceBlock | (private) |
| 783 | fn | accumulateSessionUsageFromTranscript | (private) |
| 822 | fn | formatRequestContextTraceBlock | (private) |
| 863 | fn | formatSummaryPromptValue | (private) |
| 882 | fn | formatRawTraceSummaryLine | (private) |
| 945 | fn | buildInlineRawTracePayload | (private) |
| 1044 | fn | joinCommitmentAssistantText | (private) |
| 1055 | fn | normalizeAssistantFinalDeliveryText | (private) |
| 1064 | fn | enqueueCommitmentExtractionForTurn | (private) |
| 1120 | fn | refreshSessionEntryFromStore | (private) |
| 1147 | fn | resolveAdmittedRunSessionFile | (private) |
| 1169 | fn | runReplyAgent | pub |
| 1316 | fn | shouldEmitToolResult | (private) |
| 1326 | fn | touchActiveSessionEntry | (private) |
| 1492 | fn | queuedRunFollowupTurn | (private) |
| 1745 | type | SessionResetOptions | (private) |
| 2299 | fn | applyFinalReplyToMode | (private) |
| 2310 | fn | buildFinalPayloads | (private) |

## src/auto-reply/reply/commands-acp.test.ts (2372 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | createAcpCommandSessionBindingService | (private) |
| 167 | fn | configureInMemoryTaskRegistryStoreForTests | (private) |
| 186 | fn | parseTelegramChatIdForTest | (private) |
| 195 | fn | parseDiscordConversationIdForTest | (private) |
| 214 | fn | parseDiscordParentChannelFromSessionKeyForTest | (private) |
| 220 | fn | resolveFirstConversationTargetForTest | (private) |
| 238 | fn | parsePrefixedConversationIdForTest | (private) |
| 249 | fn | resolvePrefixedConversationIdForTest | (private) |
| 256 | fn | setMinimalAcpCommandRegistryForTests | (private) |
| 468 | type | FakeBinding | (private) |
| 488 | fn | createSessionBinding | (private) |
| 526 | fn | createDiscordParams | (private) |
| 542 | type | AcpSessionIdentity | (private) |
| 550 | fn | createThreadConversation | (private) |
| 559 | fn | createBoundThreadSession | (private) |
| 566 | fn | createAcpSessionEntry | (private) |
| 592 | fn | createSessionBindingCapabilities | (private) |
| 601 | type | AcpBindInput | (private) |
| 613 | fn | createAcpThreadBinding | (private) |
| 635 | type | MockWithCalls | (private) |
| 641 | fn | mockCallArg | (private) |
| 649 | fn | expectRecordFields | (private) |
| 663 | fn | expectMockCallFields | (private) |
| 671 | fn | expectBindingBindCall | (private) |
| 697 | fn | gatewayRequests | (private) |
| 701 | fn | expectGatewayMethodCalled | (private) |
| 705 | fn | expectGatewayMethodNotCalled | (private) |
| 709 | fn | expectBoundIntroTextToExclude | (private) |
| 719 | fn | mockBoundThreadSession | (private) |
| 737 | fn | createThreadParams | (private) |
| 743 | type | ConversationCommandFixture | (private) |
| 753 | fn | createConversationParams | (private) |
| 774 | fn | runDiscordAcpCommand | (private) |
| 778 | fn | runThreadAcpCommand | (private) |
| 782 | fn | runTelegramAcpCommand | (private) |
| 797 | fn | runTelegramDmAcpCommand | (private) |
| 811 | fn | runSlackDmAcpCommand | (private) |
| 826 | fn | createMatrixThreadParams | (private) |
| 839 | fn | runMatrixAcpCommand | (private) |
| 853 | fn | runMatrixThreadAcpCommand | (private) |
| 857 | fn | runFeishuDmAcpCommand | (private) |
| 872 | fn | runLineDmAcpCommand | (private) |
| 887 | fn | runIMessageDmAcpCommand | (private) |
| 901 | fn | runInternalAcpCommand | (private) |

## src/auto-reply/reply/commands-allowlist.test.ts (875 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | type | TelegramTestSectionConfig | (private) |
| 90 | type | DmGroupAllowlistTestSectionConfig | (private) |
| 98 | fn | normalizeTelegramAllowFromEntries | (private) |
| 102 | fn | normalizeAllowlistValues | (private) |
| 113 | fn | resolveTelegramTestAccount | (private) |
| 190 | fn | createLegacyAllowlistPlugin | (private) |
| 216 | fn | setAllowlistPluginRegistry | (private) |
| 253 | fn | withTempConfigPath | (private) |
| 274 | fn | readJsonFile | (private) |
| 278 | fn | buildAllowlistParams | (private) |

## src/auto-reply/reply/commands-allowlist.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | AllowlistScope | (private) |
| 32 | type | AllowlistAction | (private) |
| 33 | type | AllowlistTarget | (private) |
| 34 | type | ResolvedAllowlistName | (private) |
| 40 | type | AllowlistCommand | (private) |
| 62 | fn | resolveAllowlistAccountId | (private) |
| 80 | fn | parseAllowlistCommand | (private) |
| 173 | fn | normalizeAllowFrom | (private) |
| 190 | fn | formatEntryList | (private) |
| 202 | fn | updatePairingStoreAllowlist | (private) |
| 227 | fn | mapResolvedAllowlistNames | (private) |
| 237 | fn | resolveAllowlistNames | (private) |
| 254 | fn | readAllowlistConfig | (private) |

## src/auto-reply/reply/commands-approve.test.ts (1101 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | requireRecord | (private) |
| 36 | fn | approvalResolverRequest | (private) |
| 44 | fn | expectApprovalResolverCall | (private) |
| 61 | fn | normalizeDiscordDirectApproverId | (private) |
| 70 | fn | getDiscordExecApprovalApproversForTests | (private) |
| 174 | type | TelegramTestAccountConfig | (private) |
| 184 | type | TelegramTestSectionConfig | (private) |
| 189 | fn | listConfiguredTelegramAccountIds | (private) |
| 202 | fn | resolveTelegramTestAccount | (private) |
| 222 | fn | stripTelegramInternalPrefixes | (private) |
| 226 | fn | next | (private) |
| 243 | fn | normalizeTelegramDirectApproverId | (private) |
| 251 | fn | getTelegramExecApprovalApprovers | (private) |
| 263 | fn | isTelegramExecApprovalTargetRecipient | (private) |
| 290 | fn | isTelegramExecApprovalAuthorizedSender | (private) |
| 305 | fn | isTelegramExecApprovalClientEnabled | (private) |
| 313 | fn | resolveTelegramExecApprovalTarget | (private) |
| 389 | fn | setApprovePluginRegistry | (private) |
| 401 | fn | buildApproveParams | (private) |
| 439 | fn | createTelegramApproveCfg | (private) |
| 457 | fn | createDiscordApproveCfg | (private) |

## src/auto-reply/reply/commands-compact.test.ts (613 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | buildCompactParams | (private) |
| 61 | fn | requireCompactEmbeddedAgentSessionCall | (private) |
| 69 | fn | requireResolveSessionAgentIdCall | (private) |
| 79 | fn | requireResolveAgentDirCall | (private) |
| 87 | fn | requireIncrementCompactionCountCall | (private) |

## src/auto-reply/reply/commands-context-report.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | makeParams | (private) |
| 98 | fn | withTranscript | (private) |

## src/auto-reply/reply/commands-diagnostics.test.ts (681 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | PluginCommandHandler | (private) |
| 42 | type | ExecCall | (private) |
| 47 | type | ExecDefaults | (private) |
| 61 | type | ExecParams | (private) |
| 67 | type | DiagnosticsSession | (private) |
| 76 | type | PrivateDiagnosticsReply | (private) |
| 81 | fn | requireExecCall | (private) |
| 92 | fn | requireDiagnosticsSessions | (private) |
| 100 | fn | buildDiagnosticsParams | (private) |
| 142 | fn | registerHostTrustedReservedCommandForTest | (private) |
| 158 | fn | registerCodexDiagnosticsCommandForTest | (private) |
| 234 | fn | createDiagnosticsHandlerForTest | (private) |

## src/auto-reply/reply/commands-diagnostics.ts (647 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | DiagnosticsCommandDeps | (private) |
| 55 | type | GatewayDiagnosticsApprovalResult | (private) |
| 59 | type | CodexDiagnosticsApprovalIntegration | (private) |
| 71 | fn | createDiagnosticsCommandHandler | (private) |
| 85 | fn | handleDiagnosticsCommandWithDeps | (private) |
| 146 | fn | buildDiagnosticsReply | (private) |
| 168 | fn | deliverGroupDiagnosticsReplyPrivately | (private) |
| 194 | fn | parseDiagnosticsArgs | (private) |
| 208 | fn | buildDiagnosticsPreamble | (private) |
| 215 | fn | buildDiagnosticsApprovalWarning | (private) |
| 223 | fn | resolvePrivateDiagnosticsTargetsForCommand | (private) |
| 232 | fn | buildDiagnosticsApprovalRequest | (private) |
| 256 | fn | buildGatewayDiagnosticsExportJsonCommand | (private) |
| 260 | fn | deliverPrivateDiagnosticsReply | (private) |
| 268 | fn | requestGatewayDiagnosticsExportApproval | (private) |
| 342 | fn | buildCodexDiagnosticsApprovalIntegration | (private) |
| 385 | fn | isCodexDiagnosticsConfirmationAction | (private) |
| 397 | fn | hasCodexHarnessMetadata | (private) |
| 407 | fn | isCodexDiagnosticsUnavailableText | (private) |
| 416 | fn | executeCodexDiagnosticsAddon | (private) |
| 469 | fn | buildCodexDiagnosticsSessions | (private) |
| 512 | fn | resolveDiagnosticsSessionChannel | (private) |
| 526 | fn | resolveDiagnosticsSessionChannelId | (private) |
| 537 | fn | formatExecToolResultForDiagnostics | (private) |
| 567 | fn | formatExecDiagnosticsText | (private) |
| 575 | fn | rewriteCodexDiagnosticsResult | (private) |
| 585 | fn | rewriteInteractive | (private) |
| 613 | fn | rewritePresentationAction | (private) |
| 629 | fn | rewriteSelectPresentationAction | (private) |
| 643 | fn | rewriteCodexDiagnosticsCommandPrefix | (private) |

## src/auto-reply/reply/commands-export-session.test.ts (782 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 120 | fn | makeParams | (private) |
| 155 | fn | exportWriteParams | (private) |
| 163 | fn | writtenHtml | (private) |
| 171 | fn | sessionDataFromHtml | (private) |

## src/auto-reply/reply/commands-gating.test.ts (866 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 202 | fn | buildParams | (private) |

## src/auto-reply/reply/commands-info.test.ts (904 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | fn | firstMockArg | (private) |
| 91 | fn | buildInfoParams | (private) |
| 511 | fn | makeInventoryEntry | (private) |
| 525 | fn | makeDefaultInventory | (private) |
| 590 | fn | loadToolsHarness | (private) |
| 603 | fn | buildConfig | (private) |
| 610 | fn | resolveToolsArg | (private) |

## src/auto-reply/reply/commands-login.test.ts (594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | buildLoginParams | (private) |
| 90 | fn | mockSuccessfulLoginFlow | (private) |
| 104 | fn | blockReplyOpts | (private) |

## src/auto-reply/reply/commands-models.test.ts (1110 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | AuthRef | (private) |
| 41 | fn | hasConflictingRoute | (private) |
| 88 | fn | setFastModelsCliBackendDeps | (private) |
| 266 | fn | buildParams | (private) |
| 312 | fn | firstAuthCheckerParams | (private) |
| 316 | fn | preparedAuthCheckerParams | (private) |

## src/auto-reply/reply/commands-models.ts (770 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ModelsCommandSessionEntry | (private) |
| 56 | type | ModelsProviderData | pub |
| 64 | type | ModelsRuntimeChoice | pub |
| 70 | type | ParsedModelsCommand | (private) |
| 85 | fn | isModelsBrowseVisibleProvider | (private) |
| 89 | fn | usesUnfilteredCatalogModels | (private) |
| 96 | fn | normalizeRuntimeChoiceId | (private) |
| 104 | fn | buildRuntimeChoice | (private) |
| 124 | fn | buildDefaultRuntimeChoice | (private) |
| 143 | fn | addRuntimeChoice | (private) |
| 153 | fn | buildModelsProviderData | pub |
| 199 | fn | logicalModelKey | (private) |
| 245 | fn | add | (private) |
| 262 | fn | addRawModelRef | (private) |
| 293 | fn | addModelConfigEntries | (private) |
| 396 | fn | formatProviderLine | (private) |
| 400 | fn | parseListArgs | (private) |
| 445 | fn | parseModelsArgs | (private) |
| 469 | fn | resolveProviderLabel | (private) |
| 501 | fn | formatModelsAvailableHeader | pub |
| 521 | fn | buildModelsMenuText | (private) |
| 539 | fn | buildProviderInfos | (private) |
| 549 | fn | resolveModelsCommandReply | pub |

## src/auto-reply/reply/commands-plugins.install.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | buildPluginsParams | (private) |
| 96 | fn | expectPersistedInstall | (private) |
| 112 | fn | expectNonClawHubChatInstallRejected | (private) |

## src/auto-reply/reply/commands-reset-hooks.test.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | buildResetParams | (private) |
| 109 | fn | mockCall | (private) |
| 118 | fn | requireRecord | (private) |
| 125 | fn | expectObjectFields | (private) |
| 136 | fn | firstHookEvent | (private) |

## src/auto-reply/reply/commands-session-lifecycle.test.ts (859 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | ResolveCommandConversationParams | (private) |
| 21 | fn | firstText | (private) |
| 25 | fn | normalizeCommandContextText | (private) |
| 35 | fn | resolveThreadTargetId | (private) |
| 46 | fn | resolveThreadCommandConversation | (private) |
| 62 | fn | resolveRoomId | (private) |
| 73 | fn | resolveRoomCommandConversation | (private) |
| 88 | fn | resolveTopicCommandConversation | (private) |
| 289 | fn | buildSessionCommandParams | (private) |
| 339 | fn | createThreadCommandParams | (private) |
| 351 | fn | createTopicCommandParams | (private) |
| 363 | fn | createRoomThreadCommandParams | (private) |
| 375 | fn | createRoomTriggerThreadCommandParams | (private) |
| 390 | fn | createRoomCommandParams | (private) |
| 401 | fn | createThreadBinding | (private) |
| 424 | fn | createTopicBinding | (private) |
| 446 | fn | createRoomBinding | (private) |
| 469 | fn | createRoomTriggerBinding | (private) |
| 482 | fn | expectIdleTimeoutSetReply | (private) |

## src/auto-reply/reply/commands-session.ts (825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | fn | buildRestartCommandSentinel | (private) |
| 87 | fn | resolveSessionCommandUsage | (private) |
| 91 | fn | parseSessionDurationMs | (private) |
| 102 | fn | formatSessionExpiry | (private) |
| 106 | fn | resolveSessionBindingDurationMs | (private) |
| 114 | fn | resolveSessionBindingLastActivityAt | (private) |
| 122 | fn | resolveSessionBindingExpiryAt | (private) |
| 128 | fn | resolveSessionBindingBoundBy | (private) |
| 133 | type | UpdatedLifecycleBinding | (private) |
| 140 | fn | isSessionBindingRecord | (private) |
| 146 | fn | resolveUpdatedLifecycleDurationMs | (private) |
| 154 | fn | toUpdatedLifecycleBinding | (private) |
| 168 | fn | resolveUpdatedBindingExpiry | (private) |

## src/auto-reply/reply/commands-status.test.ts (2547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | LoadProviderUsageSummary | (private) |
| 53 | type | StatusPluginHealthSnapshot | (private) |
| 122 | fn | buildStatusReplyForTest | (private) |
| 149 | fn | registerStatusCodexHarness | (private) |
| 166 | fn | saveStatusTestAuthProfile | (private) |
| 177 | fn | saveStatusTestAuthProfiles | (private) |
| 238 | fn | writeTranscriptUsageLog | (private) |
| 2373 | fn | buildKiraStatusReply | (private) |

## src/auto-reply/reply/commands-subagents-focus.test.ts (600 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | buildFocusSessionBindingService | (private) |
| 132 | fn | createSessionBindingRecord | (private) |
| 155 | fn | createSessionBindingCapabilities | (private) |
| 164 | type | FocusTargetSessionParams | (private) |
| 168 | type | SessionBindingBindInput | (private) |
| 181 | fn | firstFocusTargetSessionParams | (private) |
| 189 | fn | firstSessionBindingBindInput | (private) |
| 197 | fn | buildCommandParams | (private) |
| 234 | fn | buildFocusContext | (private) |
| 254 | fn | buildUnfocusContext | (private) |

## src/auto-reply/reply/commands-tts.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | ParsedTtsCommand | (private) |
| 47 | type | TtsAttemptDetail | (private) |
| 51 | type | TtsCommandParams | (private) |
| 53 | fn | parseTtsCommand | (private) |
| 72 | fn | formatAttemptDetails | (private) |
| 89 | fn | stopWithText | (private) |
| 93 | fn | ttsUsage | (private) |
| 124 | fn | hashTtsReadLatestText | (private) |
| 128 | fn | buildTtsAudioReply | (private) |
| 183 | fn | handleTtsChatAction | (private) |
| 215 | fn | handleTtsLatestAction | (private) |
| 260 | fn | handleTtsStatusAction | (private) |

## src/auto-reply/reply/context-treemap.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | Rect | (private) |
| 19 | type | Rgba | (private) |
| 26 | type | TreemapLeaf | (private) |
| 31 | type | TreemapGroup | (private) |
| 43 | type | ContextTreemapSessionStats | (private) |
| 101 | fn | rgba | (private) |
| 105 | fn | mixColor | (private) |
| 115 | fn | formatInt | (private) |
| 119 | fn | formatSize | (private) |
| 123 | fn | totalValue | (private) |
| 127 | fn | sanitizeLabel | (private) |
| 135 | fn | truncateLabel | (private) |
| 148 | fn | layoutBinary | (private) |
| 195 | class | PngCanvas | (private) |
| 261 | fn | inset | (private) |
| 270 | fn | drawLabel | (private) |
| 292 | fn | crc32 | (private) |
| 303 | fn | pngChunk | (private) |
| 312 | fn | encodePng | (private) |
| 334 | fn | treemapGroup | (private) |
| 338 | fn | buildGroups | (private) |
| 392 | fn | drawTreemap | (private) |
| 433 | fn | drawLegend | (private) |
| 454 | fn | renderContextTreemapPng | pub |

## src/auto-reply/reply/conversation-turn-capture.test.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | setupReefConversation | (private) |
| 59 | fn | persistSentOperation | (private) |

## src/auto-reply/reply/directive-handling.impl.ts (820 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | handleDirectiveOnly | pub |

## src/auto-reply/reply/directive-handling.model.test.ts (2987 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | defaultModelsCommandReply | (private) |
| 39 | fn | normalizeProviderForAuthTest | (private) |
| 43 | fn | hasAllowedPluginForAuthTest | (private) |
| 52 | fn | store | (private) |
| 158 | fn | store | (private) |
| 188 | fn | store | (private) |
| 192 | fn | hasWorkspaceCredential | (private) |
| 375 | type | ApiKeyProfile | (private) |
| 376 | type | OAuthProfileForTest | (private) |
| 383 | type | TokenProfileForTest | (private) |
| 384 | type | AuthProfileForTest | (private) |
| 386 | fn | baseAliasIndex | (private) |
| 390 | fn | baseConfig | (private) |
| 397 | fn | modelDefinition | (private) |
| 409 | fn | createSessionEntry | (private) |
| 417 | fn | setDirectiveTestProviders | (private) |
| 427 | fn | setOpenAiRuntimeScopedUltraProvider | (private) |
| 485 | fn | setAuthProfiles | (private) |
| 494 | fn | createDateAuthProfiles | (private) |
| 504 | fn | createGptAliasIndex | (private) |
| 511 | fn | createOpusAliasIndex | (private) |
| 526 | fn | resolveModelSelectionForCommand | (private) |
| 547 | fn | persistModelDirectiveForTest | (private) |
| 592 | type | PersistInlineDirectivesParams | (private) |
| 594 | fn | persistInternalOperatorWriteDirective | (private) |
| 625 | fn | resolveModelInfoReply | (private) |
| 1759 | type | HandleParams | (private) |
| 1761 | fn | createHandleParams | (private) |

## src/auto-reply/reply/directive-handling.model.ts (567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | isMissingAuthLabel | (private) |
| 46 | fn | resolveStatusHarnessRuntime | (private) |
| 63 | fn | resolveStatusAcceptedProfileTypes | (private) |
| 73 | fn | resolveStatusAuthLabel | (private) |
| 140 | fn | pushUniqueCatalogEntry | (private) |
| 165 | fn | buildModelPickerCatalog | (private) |
| 186 | fn | pushRef | (private) |
| 197 | fn | pushRaw | (private) |
| 240 | fn | push | (private) |
| 330 | fn | filterMissingAuthNestedProviderDuplicates | (private) |
| 370 | fn | maybeHandleModelDirectiveInfo | pub |
| 476 | fn | formatPath | (private) |
| 559 | fn | isCompleteSessionEntry | (private) |

## src/auto-reply/reply/directive-handling.persist.ts (504 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | PersistedThinkingLevelRemap | (private) |
| 51 | fn | persistInlineDirectives | pub |

## src/auto-reply/reply/dispatch-acp-delivery.test.ts (1101 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | fn | createDispatcher | (private) |
| 107 | fn | createCoordinator | (private) |
| 122 | fn | raceWithTimeoutResult | (private) |
| 142 | fn | createVisibleChatAcpCoordinator | (private) |
| 158 | fn | expectVisibleChatBlockRoutesToAccount | (private) |

## src/auto-reply/reply/dispatch-acp-delivery.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | loadRouteReplyRuntime | (private) |
| 47 | fn | loadDispatchAcpTtsRuntime | (private) |
| 51 | fn | loadChannelPluginRuntime | (private) |
| 55 | fn | loadMessageActionRuntime | (private) |
| 59 | type | AcpDispatchDeliveryMeta | (private) |
| 65 | type | ToolMessageHandle | (private) |
| 73 | fn | shouldTreatDeliveredTextAsVisible | (private) |
| 102 | fn | maybeApplyAcpTts | (private) |
| 155 | type | AcpDispatchDeliveryState | (private) |
| 175 | type | AcpDispatchDeliveryCoordinator | pub |
| 197 | fn | createAcpDispatchDeliveryCoordinator | pub |
| 273 | fn | appendDeliveredTranscriptText | (private) |
| 291 | fn | waitForPendingDirectBlockReplyDelivery | (private) |
| 301 | fn | settleDirectVisibleText | (private) |
| 318 | fn | startReplyLifecycleOnce | (private) |

## src/auto-reply/reply/dispatch-acp.test.ts (2471 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 238 | type | MockTtsReply | (private) |
| 239 | type | MockCallSource | (private) |
| 241 | fn | requireRecord | (private) |
| 248 | fn | mockArg | (private) |
| 252 | fn | routeCall | (private) |
| 259 | fn | routePayload | (private) |
| 263 | fn | messageActionCall | (private) |
| 270 | fn | runTurnCall | (private) |
| 274 | fn | dispatcherCall | (private) |
| 287 | fn | createDispatcher | (private) |
| 304 | fn | setReadyAcpResolution | (private) |
| 312 | fn | createAcpConfigWithVisibleToolTags | (private) |
| 326 | fn | runDispatch | (private) |
| 384 | fn | emitToolLifecycleEvents | (private) |
| 407 | fn | mockToolLifecycleTurn | (private) |
| 415 | fn | mockVisibleTextTurn | (private) |
| 424 | fn | mockRoutedTextTurn | (private) |
| 433 | fn | dispatchVisibleTurn | (private) |
| 441 | fn | queueTtsReplies | (private) |
| 447 | fn | runRoutedAcpTextTurn | (private) |
| 458 | fn | expectRoutedPayload | (private) |

## src/auto-reply/reply/dispatch-acp.ts (851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | OrderedAcpAttachment | (private) |
| 66 | fn | appendOrderedAcpAttachments | (private) |
| 80 | fn | resolveMergedAcpAttachments | (private) |
| 103 | fn | loadDispatchAcpManagerRuntime | (private) |
| 107 | fn | loadDispatchAcpAuditRuntime | (private) |
| 111 | fn | loadDispatchAcpSessionRuntime | (private) |
| 115 | fn | loadDispatchAcpTtsRuntime | (private) |
| 119 | fn | loadDispatchAcpTranscriptRuntime | (private) |
| 123 | type | DispatchProcessedRecorder | (private) |
| 131 | fn | resolveAcpPromptText | (private) |
| 141 | fn | resolveAcpRequestId | (private) |
| 155 | fn | resolveAcpTurnText | (private) |
| 172 | fn | isRestrictiveRuntimeToolsAllow | (private) |
| 179 | fn | hasBoundConversationForSession | (private) |
| 209 | type | AcpDispatchAttemptResult | pub |
| 214 | type | AcpDispatchStatsSnapshot | (private) |
| 218 | type | AcpDispatchOutcome | (private) |
| 220 | fn | finishAcpDispatchAttempt | (private) |
| 253 | fn | isStaleSessionInitError | (private) |
| 262 | fn | maybeUnbindStaleBoundConversations | (private) |
| 287 | fn | finalizeAcpTurnOutput | (private) |
| 396 | fn | tryDispatchAcpReply | pub |
| 529 | fn | finishAttempt | (private) |
| 552 | fn | emitAuditStart | (private) |
| 565 | fn | emitAuditEnd | (private) |
| 582 | fn | emitAuditError | (private) |

## src/auto-reply/reply/dispatch-from-config.abort-and-dedupe.test-utils.ts (1716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | replyResolver | (private) |
| 107 | fn | replyResolver | (private) |
| 143 | fn | replyResolver | (private) |
| 179 | fn | replyResolver | (private) |
| 208 | fn | replyResolver | (private) |
| 241 | fn | replyResolver | (private) |
| 1647 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.acp-abort.test.ts (1346 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | shouldUseAcpReplyDispatchHook | (private) |
| 58 | fn | setNoAbort | (private) |
| 62 | fn | raceWithTimeoutResult | (private) |
| 82 | fn | createMockAcpSessionManager | (private) |
| 246 | fn | onAbort | (private) |
| 752 | type | DispatchOutcome | (private) |
| 1213 | type | DispatchOutcome | (private) |
| 1285 | type | DispatchOutcome | (private) |

## src/auto-reply/reply/dispatch-from-config.base.test-utils.ts (1874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | replyResolver | (private) |
| 293 | fn | replyResolver | (private) |
| 1377 | fn | buildRaceCtx | (private) |
| 1467 | fn | buildRaceCtx | (private) |
| 1678 | fn | replyResolver | (private) |
| 1729 | fn | replyResolver | (private) |
| 1801 | fn | replyResolver | (private) |
| 1862 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.delivery-and-tts.test-utils.ts (1454 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 769 | fn | replyResolver | (private) |
| 798 | fn | replyResolver | (private) |
| 816 | fn | replyResolver | (private) |
| 831 | fn | replyResolver | (private) |
| 856 | fn | replyResolver | (private) |
| 871 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.hooks-and-send-policy.test-utils.ts (1755 lines)

_No symbols extracted._

## src/auto-reply/reply/dispatch-from-config.lifecycle-and-bindings.test-utils.ts (1864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 136 | fn | replyResolver | (private) |
| 179 | fn | replyResolver | (private) |
| 199 | fn | replyResolver | (private) |
| 241 | fn | replyResolver | (private) |
| 278 | fn | replyResolver | (private) |
| 536 | fn | replyResolver | (private) |
| 582 | fn | replyResolver | (private) |
| 622 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.progress.test-utils.ts (1510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | replyResolver | (private) |
| 114 | fn | replyResolver | (private) |
| 177 | type | CapturedReplyOptions | (private) |
| 248 | fn | replyResolver | (private) |
| 332 | fn | replyResolver | (private) |
| 397 | fn | replyResolver | (private) |
| 450 | fn | replyResolver | (private) |
| 496 | fn | replyResolver | (private) |
| 520 | fn | replyResolver | (private) |
| 567 | fn | replyResolver | (private) |
| 595 | fn | replyResolver | (private) |
| 663 | fn | replyResolver | (private) |
| 707 | fn | replyResolver | (private) |
| 752 | fn | replyResolver | (private) |
| 789 | fn | replyResolver | (private) |
| 843 | fn | replyResolver | (private) |
| 897 | fn | replyResolver | (private) |
| 949 | fn | replyResolver | (private) |
| 988 | fn | replyResolver | (private) |
| 1039 | fn | replyResolver | (private) |
| 1079 | fn | replyResolver | (private) |
| 1139 | fn | replyResolver | (private) |
| 1186 | fn | replyResolver | (private) |
| 1489 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.reply-dispatch.test.ts (1077 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | firstRuntimeLoadCall | (private) |
| 44 | fn | firstReplyDispatchCall | (private) |
| 60 | fn | createDeferred | (private) |

## src/auto-reply/reply/dispatch-from-config.routing.test-utils.ts (1245 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 131 | fn | replyResolver | (private) |
| 169 | fn | replyResolver | (private) |
| 191 | fn | replyResolver | (private) |
| 211 | fn | replyResolver | (private) |
| 233 | fn | replyResolver | (private) |
| 255 | fn | replyResolver | (private) |
| 276 | fn | replyResolver | (private) |
| 296 | fn | replyResolver | (private) |
| 321 | fn | replyResolver | (private) |
| 351 | fn | replyResolver | (private) |
| 391 | fn | replyResolver | (private) |
| 414 | fn | replyResolver | (private) |
| 443 | fn | replyResolver | (private) |
| 470 | fn | replyResolver | (private) |
| 501 | fn | replyResolver | (private) |
| 526 | fn | replyResolver | (private) |
| 567 | fn | replyResolver | (private) |
| 598 | fn | replyResolver | (private) |
| 633 | fn | replyResolver | (private) |
| 672 | fn | replyResolver | (private) |
| 709 | fn | replyResolver | (private) |
| 751 | fn | replyResolver | (private) |
| 803 | fn | replyResolver | (private) |
| 887 | fn | replyResolver | (private) |
| 937 | fn | replyResolver | (private) |
| 979 | fn | replyResolver | (private) |
| 1064 | fn | replyResolver | (private) |
| 1106 | fn | replyResolver | (private) |
| 1144 | fn | replyResolver | (private) |
| 1181 | fn | replyResolver | (private) |
| 1214 | fn | replyResolver | (private) |

## src/auto-reply/reply/dispatch-from-config.send-policy-routing.test-utils.ts (1273 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1005 | fn | defaultLoadSessionStoreEntry | (private) |

## src/auto-reply/reply/dispatch-from-config.shared.test-harness.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | AbortResult | (private) |
| 28 | type | PluginTargetedInboundClaimOutcome | (private) |
| 262 | type | BindingMsgContext | (private) |
| 277 | type | BindingConfig | (private) |
| 281 | fn | normalizeText | (private) |
| 283 | fn | normalizeChannel | (private) |
| 284 | fn | resolveChannel | (private) |
| 286 | fn | resolveAccountId | (private) |
| 290 | fn | resolveTarget | (private) |
| 300 | fn | resolveThreadId | (private) |
| 392 | fn | parseGenericThreadSessionInfo | pub |
| 649 | fn | createDispatcher | pub |
| 691 | fn | resetPluginTtsAndThreadMocks | pub |
| 741 | fn | setDiscordTestRegistry | pub |
| 757 | fn | createHookCtx | pub |

## src/auto-reply/reply/dispatch-from-config.test-harness.ts (613 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | ResolveInboundConversationParams | pub |
| 90 | type | DispatchReplyArgs | (private) |
| 94 | fn | shouldUseAcpReplyDispatchHook | (private) |
| 114 | fn | setNoAbort | pub |
| 118 | type | MockAcpRuntime | (private) |
| 125 | fn | createAcpRuntime | pub |
| 151 | fn | createMockAcpSessionManager | (private) |
| 248 | fn | firstMockCall | pub |
| 260 | fn | firstMockArg | pub |
| 269 | fn | firstToolResultPayload | pub |
| 276 | fn | firstFinalReplyPayload | pub |
| 283 | fn | firstRouteReplyCall | pub |
| 291 | fn | installThreadingTestPlugin | pub |
| 313 | fn | requireToolResultHandler | pub |
| 322 | fn | requireBlockReplyHandler | pub |
| 331 | fn | dispatchTwiceWithFreshDispatchers | pub |
| 345 | fn | messageAuditEvents | pub |
| 351 | fn | globalBeforeAll0 | pub |
| 366 | fn | describe0BeforeEach0 | pub |
| 566 | fn | createHookCtx | pub |
| 577 | fn | describe1BeforeEach0 | pub |
| 595 | fn | describe2BeforeEach0 | pub |

## src/auto-reply/reply/dispatch-from-config.ts (2951 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 197 | type | InternalReplyResolverOptions | (private) |
| 202 | fn | createReplyDispatchEvent | (private) |
| 223 | fn | dispatchReplyFromConfig | pub |
| 237 | fn | dispatchReplyFromConfigInner | (private) |
| 301 | fn | recordProcessed | (private) |
| 315 | fn | recordAgentDispatchStarted | (private) |
| 327 | fn | recordAgentDispatchCompleted | (private) |
| 348 | fn | markProcessing | (private) |
| 352 | fn | markIdle | (private) |
| 357 | fn | markInboundDedupeReplayUnsafe | (private) |
| 399 | fn | markProgress | (private) |
| 427 | fn | sessionKeysMatch | (private) |
| 433 | fn | notePreparedSession | (private) |
| 442 | fn | resolveOperationExpectedSessionId | (private) |
| 444 | fn | resolvePreparedTranscriptBinding | (private) |
| 537 | fn | buildHookState | (private) |
| 555 | fn | prepareHookMediaMetadata | (private) |
| 577 | fn | buildMessageReceivedHookContext | (private) |
| 677 | fn | getNormalizeReplyMediaPaths | (private) |
| 706 | fn | routeReplyToOriginating | (private) |
| 751 | fn | isRoutedReplyDelivered | (private) |
| 1029 | fn | commitInboundDedupeIfClaimed | (private) |
| 1034 | fn | releaseInboundDedupeIfClaimed | (private) |
| 1078 | fn | emitMessageReceivedHooks | (private) |
| 1341 | fn | shouldSuppressDefaultToolProgressMessages | (private) |
| 1342 | fn | shouldSendVerboseProgressMessages | (private) |
| 1343 | fn | shouldSendToolSummaries | (private) |
| 1371 | fn | shouldDeliverVerboseProgressDespiteSourceSuppression | (private) |
| 1378 | fn | shouldDeliverForcedToolProgressDespiteSourceSuppression | (private) |
| 1384 | fn | shouldDeliverFastModeAutoProgressDespiteSourceSuppression | (private) |
| 1390 | fn | hasExecApprovalPayload | (private) |
| 1399 | fn | hasAskUserPayload | (private) |
| 1403 | fn | readAskUserQuestionId | (private) |
| 1411 | fn | shouldSuppressLateTextOnlyToolProgress | (private) |
| 1423 | fn | deliverCommentaryProgressMessage | (private) |
| 1438 | fn | flushPendingCommentaryProgress | (private) |
| 1447 | fn | noteCommentaryProgress | (private) |
| 1467 | fn | shouldSuppressMessageToolOnlyTextErrorProgress | (private) |
| 1487 | fn | throwIfFinalDeliveryAborted | (private) |
| 1768 | fn | normalizeWorkingLabel | (private) |
| 1775 | fn | formatPlanUpdateText | (private) |
| 1837 | fn | summarizeApprovalLabel | (private) |
| 1858 | fn | summarizePatchLabel | (private) |
| 1928 | fn | shouldSuppressProgressDelivery | (private) |
| 1931 | fn | hasVisibleRegularVerboseToolProgress | (private) |
| 1938 | fn | markVisibleToolErrorProgress | (private) |
| 1943 | fn | hasFailedProgressStatus | (private) |
| 1952 | fn | shouldSuppressToolErrorWarnings | (private) |
| 1970 | fn | isChannelOwnedToolResultProgressPayload | (private) |
| 1974 | fn | shouldForwardToolResultProgressCallback | (private) |
| 1989 | fn | shouldAllowQuietChannelOwnedProgressCallbacks | (private) |
| 1997 | fn | waitForPendingDirectBlockReplyDelivery | (private) |
| 2007 | fn | shouldForwardProgressCallback | (private) |
| 2029 | fn | reserveProgressCallbackStart | (private) |
| 2054 | fn | runProgressCallback | (private) |
| 2250 | fn | run | (private) |
| 2502 | fn | run | (private) |
| 2743 | fn | shouldDeliverDespiteSourceReplySuppression | (private) |

## src/auto-reply/reply/export-html/template.js (1992 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 85 | fn | buildTree | (private) |
| 114 | fn | sortChildren | (private) |
| 128 | fn | buildActivePathIds | (private) |
| 145 | fn | getPath | (private) |
| 167 | fn | findNewestLeaf | (private) |
| 172 | fn | mapNodes | (private) |
| 197 | fn | flattenTree | (private) |
| 203 | fn | markActive | (private) |
| 299 | fn | buildTreePrefix | (private) |
| 336 | fn | hasTextContent | (private) |
| 350 | fn | extractContent | (private) |
| 363 | fn | renderableContentBlocks | (private) |
| 373 | fn | getSearchableText | (private) |
| 417 | fn | filterNodes | (private) |
| 493 | fn | recalculateVisualStructure | (private) |
| 507 | fn | findVisibleAncestor | (private) |
| 624 | fn | shortenPath | (private) |
| 643 | fn | truncateUtf16Safe | (private) |
| 662 | fn | formatToolCall | (private) |
| 699 | fn | escapeHtml | (private) |
| 705 | fn | escapeHtmlAttr | (private) |
| 713 | fn | sanitizeImageMimeType | (private) |
| 720 | fn | sanitizeImageBase64 | (private) |
| 731 | fn | renderDataUrlImage | (private) |
| 742 | fn | truncate | (private) |
| 752 | fn | getTreeNodeDisplayHtml | (private) |
| 753 | fn | normalize | (private) |
| 841 | fn | renderTree | (private) |
| 923 | fn | forceTreeRerender | (private) |
| 932 | fn | formatTokens | (private) |
| 945 | fn | formatTimestamp | (private) |
| 957 | fn | replaceTabs | (private) |
| 962 | fn | str | (private) |
| 972 | fn | getLanguageFromPath | (private) |
| 1007 | fn | findToolResult | (private) |
| 1018 | fn | formatExpandableOutput | (private) |
| 1075 | fn | renderToolCall | (private) |
| 1080 | fn | getResultText | (private) |
| 1088 | fn | getResultImages | (private) |
| 1095 | fn | renderResultImages | (private) |
| 1279 | fn | buildShareUrl | (private) |
| 1307 | fn | copyToClipboard | (private) |
| 1348 | fn | renderCopyLinkButton | (private) |
| 1357 | fn | renderEntry | (private) |
| 1482 | fn | computeStats | (private) |
| 1547 | fn | renderHeader | (private) |
| 1677 | fn | renderEntryToNode | (private) |
| 1700 | fn | navigateTo | (private) |
| 1759 | fn | escapeHtmlTags | (private) |
| 1765 | fn | normalizeMarkdownImageLabel | (private) |
| 1770 | fn | renderMarkdownImage | (private) |
| 1781 | fn | decodeMarkdownHrefCodePoint | (private) |
| 1794 | fn | decodeMarkdownHrefEntities | (private) |
| 1815 | fn | getMarkdownHrefProtocol | (private) |
| 1823 | fn | isSafeMarkdownLinkHref | (private) |
| 1832 | fn | renderMarkdownLink | (private) |
| 1894 | fn | safeMarkedParse | (private) |
| 1926 | fn | closeSidebar | (private) |
| 1939 | fn | toggleThinking | (private) |
| 1949 | fn | toggleToolOutputs | (private) |

## src/auto-reply/reply/export-html/template.security.test.ts (886 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | SessionEntry | (private) |
| 26 | type | SessionData | (private) |
| 36 | type | LinkedomModule | (private) |
| 51 | fn | loadParseHTML | (private) |
| 58 | fn | renderTemplate | (private) |
| 80 | fn | immediateTimeout | (private) |
| 108 | fn | now | (private) |
| 112 | fn | selectorSpecificity | (private) |
| 125 | fn | compareSpecificity | (private) |
| 134 | fn | firstSelectorForDisplay | (private) |
| 141 | fn | requireElement | (private) |

## src/auto-reply/reply/followup-runner.test.ts (7215 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | debugFollowupTest | (private) |
| 74 | fn | joinPromptSections | (private) |
| 84 | fn | createTestUserTurnRecorder | (private) |
| 92 | fn | requireRecord | (private) |
| 99 | fn | requireMockCallArg | (private) |
| 110 | fn | requireLastMockCallArg | (private) |
| 122 | fn | expectBlockReplyText | (private) |
| 130 | fn | expectNoBlockReplyText | (private) |
| 141 | fn | expectNoBlockReplyTextIncludes | (private) |
| 152 | fn | registerFollowupTestSessionStore | (private) |
| 166 | fn | incrementRunCompactionCountForFollowupTest | (private) |
| 217 | fn | getFollowupTestQueue | (private) |
| 234 | fn | clearFollowupQueueForFollowupTest | (private) |
| 245 | fn | enqueueFollowupRunForFollowupTest | (private) |
| 267 | fn | refreshQueuedFollowupSessionForFollowupTest | (private) |
| 297 | fn | rewrite | (private) |
| 328 | fn | persistRunSessionUsageForFollowupTest | (private) |
| 386 | fn | loadFreshFollowupRunnerModuleForTest | (private) |
| 541 | fn | setFastFollowupCliBackendDeps | (private) |
| 680 | fn | createQueuedRun | (private) |
| 1070 | fn | releaseBarrier | (private) |
| 1315 | fn | normalizeComparablePath | (private) |
| 1320 | fn | mockCompactionRun | (private) |
| 1340 | fn | createAsyncReplySpy | (private) |
| 4960 | fn | createMessagingDedupeRunner | (private) |
| 4992 | fn | runMessagingCase | (private) |
| 5027 | fn | makeTextReplyDedupeResult | (private) |
| 5788 | fn | releaseDelivery | (private) |
| 6954 | fn | runTypingCase | (private) |
| 6972 | fn | expectTypingCleanup | (private) |

## src/auto-reply/reply/followup-runner.ts (2080 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 139 | type | EmbeddedAgentRunResult | (private) |
| 147 | fn | preserveNonVisibleFollowupResult | (private) |
| 168 | type | FollowupAgentEvent | (private) |
| 170 | fn | isStrandedReplyRetryFollowup | (private) |
| 178 | fn | hasSuccessfulFollowupSourceReplyDelivery | (private) |
| 186 | fn | normalizeAssistantFinalDeliveryText | (private) |
| 195 | fn | readApprovalScopeValue | (private) |
| 199 | fn | filterStringArray | (private) |
| 205 | fn | hasFailedFollowupProgressEvent | (private) |
| 227 | fn | forwardFollowupProgressEvent | (private) |
| 358 | fn | sendCompactionUserNotices | (private) |
| 398 | fn | createFollowupRunner | pub |
| 589 | fn | runFollowupTurn | (private) |
| 630 | fn | resolveCurrentVerboseLevel | (private) |
| 649 | fn | shouldEmitVerboseProgress | (private) |
| 653 | fn | shouldSuppressDefaultToolProgressMessages | (private) |
| 654 | fn | shouldEmitToolResultProgress | (private) |
| 656 | fn | shouldEmitToolOutputProgress | (private) |
| 658 | fn | isRoomEventFollowup | (private) |
| 660 | fn | markVisibleToolErrorProgress | (private) |
| 665 | fn | shouldSuppressToolErrorWarnings | (private) |
| 676 | fn | enqueueProgressDelivery | (private) |
| 686 | fn | drainProgressDeliveries | (private) |
| 789 | fn | resolveFollowupCurrentMessageId | (private) |
| 795 | fn | sendCompactionNoticePayload | (private) |
| 1114 | fn | notifyUserMessagePersisted | (private) |
| 1119 | fn | deliverFollowupToolSummary | (private) |
| 1559 | fn | emitSettledLifecycleError | (private) |
| 1661 | fn | deliverStrandedReplyRetryFailureDiagnostic | (private) |
| 1707 | fn | enqueueStrandedReplyRecoveryRetry | (private) |
| 1863 | fn | resolveDeliveryPayloads | (private) |

## src/auto-reply/reply/get-reply-directives-apply.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | AgentDefaults | (private) |
| 23 | type | AgentEntry | (private) |
| 37 | fn | loadCommandsStatus | (private) |
| 41 | fn | loadDirectiveLevels | (private) |
| 45 | fn | loadDirectiveImpl | (private) |
| 49 | fn | loadDirectiveFastLane | (private) |
| 53 | fn | loadDirectivePersist | (private) |
| 57 | fn | hasOnlyModelDirective | (private) |
| 72 | fn | formatModelOverrideResetEvent | (private) |
| 100 | type | ApplyDirectiveResult | (private) |
| 117 | fn | applyInlineDirectiveOverrides | pub |
| 192 | fn | createDirectiveHandlingBase | (private) |

## src/auto-reply/reply/get-reply-directives.target-session.test.ts (971 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | makeSessionEntry | (private) |
| 30 | fn | makeTypingController | (private) |
| 43 | fn | parseInlineDirectivesForTest | (private) |
| 151 | fn | mockCallInput | (private) |
| 163 | fn | expectContinueResult | (private) |
| 176 | fn | resolveHelloWithModelDefaults | (private) |

## src/auto-reply/reply/get-reply-directives.ts (738 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | AgentDefaults | (private) |
| 63 | fn | loadCommandsRegistry | (private) |
| 67 | fn | loadSkillCommands | (private) |
| 71 | fn | canUseFastExplicitModelDirective | (private) |
| 89 | fn | resolveDirectiveCommandText | (private) |
| 113 | type | ReplyDirectiveContinuation | (private) |
| 156 | type | ReplyDirectiveResult | (private) |
| 160 | fn | resolveReplyDirectives | pub |
| 371 | fn | cleanedBody | (private) |
| 583 | fn | formatModelSwitchEvent | (private) |

## src/auto-reply/reply/get-reply-inline-actions.skip-when-config-empty.test.ts (1401 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | HandleInlineActionsInput | (private) |
| 67 | fn | writeSessionStore | (private) |
| 134 | fn | expectInlineActionSkipped | (private) |
| 147 | fn | runInlineStatusAction | (private) |
| 174 | fn | requireRecord | (private) |
| 181 | fn | mockObjectArg | (private) |
| 189 | fn | mockCallArgs | (private) |
| 197 | fn | mockToolDispatchedSkillCommand | (private) |
| 220 | fn | officeHoursSkillCommands | (private) |

## src/auto-reply/reply/get-reply-inline-actions.ts (651 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | SkillCommandsRuntime | (private) |
| 51 | type | SkillToolDispatchRuntime | (private) |
| 52 | type | AbortCutoffRuntime | (private) |
| 53 | type | CommandsRuntime | (private) |
| 55 | type | InternalGetReplyOptions | (private) |
| 73 | fn | loadSkillCommandsRuntime | (private) |
| 77 | fn | loadSkillToolDispatchRuntime | (private) |
| 81 | fn | loadAbortCutoffRuntime | (private) |
| 85 | fn | loadCommandsRuntime | (private) |
| 89 | fn | getBuiltinSlashCommands | (private) |
| 107 | fn | resolveSlashCommandName | (private) |
| 117 | fn | expandBundleCommandPromptTemplate | (private) |
| 128 | fn | isMentionOnlyResidualText | (private) |
| 140 | type | InlineActionResult | (private) |
| 149 | fn | extractTextFromToolResult | (private) |
| 164 | fn | extractBlockedToolReason | (private) |
| 181 | fn | handleInlineActions | pub |
| 271 | fn | notifyInlineCommandSessionMetadataChanges | (private) |
| 468 | fn | sendInlineReply | (private) |
| 528 | fn | runCommands | (private) |
| 612 | fn | remainingBodyAfterInlineStatus | (private) |

## src/auto-reply/reply/get-reply-native-slash-fast-path.test.ts (511 lines)

_No symbols extracted._

## src/auto-reply/reply/get-reply-run.media-only.test.ts (3749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 172 | fn | createGatewayDrainingError | (private) |
| 180 | fn | baseParams | (private) |
| 256 | fn | ownerParams | (private) |
| 265 | type | MockCallSource | (private) |
| 271 | fn | requireMockCallArg | (private) |
| 279 | fn | requireRunReplyAgentCall | (private) |
| 287 | fn | requireLastRunReplyAgentCall | (private) |

## src/auto-reply/reply/get-reply-run.ts (1754 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 144 | type | InternalGetReplyOptions | (private) |
| 160 | type | AgentDefaults | (private) |
| 161 | type | ExecOverrides | (private) |
| 164 | fn | hasResolvedThinkingCatalogEntry | (private) |
| 181 | fn | routeThreadIdsMatch | (private) |
| 191 | fn | normalizeMessageTimestampMs | (private) |
| 201 | fn | projectSkillSuggestionForTurn | (private) |
| 219 | fn | updateRoomEventAmbientTranscriptWatermark | (private) |
| 242 | fn | resolvePromptSilentReplyConversationType | (private) |
| 264 | fn | resolvePromptSessionContextForSystemEvent | (private) |
| 349 | fn | buildExecOverridePromptHint | (private) |
| 393 | fn | loadEmbeddedAgentRuntime | (private) |
| 397 | fn | loadAgentRunnerRuntime | (private) |
| 401 | fn | loadSessionUpdatesRuntime | (private) |
| 405 | fn | stripPromptThinkingDirectives | (private) |
| 417 | fn | hasInboundHistoryBody | (private) |
| 424 | fn | hasReplyTargetContext | (private) |
| 432 | type | RunPreparedReplyParams | (private) |
| 493 | fn | runPreparedReply | pub |
| 842 | fn | refreshInboundContextAfterAdmissionWait | (private) |
| 1159 | fn | resolveActiveEmbeddedSessionId | (private) |
| 1194 | fn | resolveAcceptedAuthProfileProviders | (private) |
| 1259 | fn | resolveActiveRunAcceptsCurrentThread | (private) |
| 1265 | fn | resolveActiveReplyOperationSessionId | (private) |
| 1267 | fn | resolveActiveQueueSessionId | (private) |
| 1271 | fn | resolveQueueBusyState | (private) |

## src/auto-reply/reply/get-reply.fast-path.test.ts (953 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | LoadModelCatalogFn | (private) |
| 35 | type | ModelAliasIndex | (private) |
| 37 | fn | emptyAliasIndex | (private) |
| 82 | fn | loadGetReplyRuntimeForTest | (private) |
| 92 | fn | requirePreparedReplyParams | (private) |
| 100 | fn | requireDirectiveParams | (private) |
| 115 | fn | seedFastPathSessionStore | (private) |
| 124 | fn | readFastPathSessionEntry | (private) |
| 666 | fn | continueDirectives | (private) |

## src/auto-reply/reply/get-reply.message-hooks.test.ts (836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | loadGetReplyRuntimeForTest | (private) |
| 67 | fn | emptyAliasIndex | (private) |
| 71 | fn | buildCtx | (private) |
| 85 | fn | buildConfiguredAudioCfg | (private) |
| 104 | fn | hookEventCall | (private) |
| 112 | fn | verboseMessages | (private) |
| 116 | fn | resetMessageHookTestState | (private) |

## src/auto-reply/reply/get-reply.ts (1097 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | ResetCommandAction | (private) |
| 82 | type | RuntimeInternalGetReplyOptions | (private) |
| 87 | fn | classifyHeartbeatPendingFinalDelivery | (private) |
| 98 | fn | resolveHeartbeatAckMaxChars | (private) |
| 126 | fn | loadSessionResetModelRuntime | (private) |
| 130 | fn | loadStageSandboxMediaRuntime | (private) |
| 134 | fn | loadMediaUnderstandingApplyRuntime | (private) |
| 138 | fn | loadLinkUnderstandingApplyRuntime | (private) |
| 142 | fn | loadCommandsCoreRuntime | (private) |
| 146 | fn | hasLinkCandidate | (private) |
| 154 | fn | applyMediaUnderstandingIfNeeded | (private) |
| 178 | fn | hasExplicitAudioUnderstandingConfig | (private) |
| 183 | fn | withExtractedFileImages | (private) |
| 196 | fn | applyLinkUnderstandingIfNeeded | (private) |
| 216 | fn | getReplyFromConfig | pub |
| 269 | fn | logResolverTiming | (private) |
| 863 | fn | maybeEmitMissingResetHooks | (private) |

## src/auto-reply/reply/inbound-meta.test.ts (1576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | parseInboundMetaPayload | (private) |
| 59 | fn | parseUntrustedJsonBlock | (private) |
| 68 | fn | parseConversationInfoPayload | (private) |
| 75 | fn | parseReplyPayload | (private) |
| 82 | fn | parseReplyChainPayload | (private) |
| 89 | fn | parseHistoryLines | (private) |
| 100 | fn | parseLocationPayload | (private) |
| 104 | fn | createGoalSessionEntry | (private) |
| 1245 | fn | render | (private) |

## src/auto-reply/reply/inbound-meta.ts (826 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | formatActiveGoalContext | pub |
| 44 | fn | formatPendingSkillSuggestionContext | (private) |
| 54 | fn | isQueuedGoalOnlyBlock | (private) |
| 63 | fn | refreshActiveGoalContextText | (private) |
| 95 | fn | refreshActiveGoalContext | pub |
| 131 | fn | stripNullBytes | (private) |
| 135 | fn | normalizePromptMetadataString | (private) |
| 144 | fn | normalizePromptMediaPath | (private) |
| 191 | fn | normalizePromptMetadataStringArray | (private) |
| 201 | fn | sanitizePromptBody | (private) |
| 220 | fn | truncateBodyHeadTail | (private) |
| 237 | fn | truncateUntrustedTranscriptField | (private) |
| 247 | fn | sanitizeTranscriptField | (private) |
| 257 | fn | sanitizeTranscriptBody | (private) |
| 268 | fn | formatUntrustedStructuredContextLabel | (private) |
| 275 | fn | buildConversationMentionMetadataPayload | (private) |
| 291 | fn | formatStructuredContextRelation | (private) |
| 302 | fn | formatChatWindowTimestamp | (private) |
| 309 | fn | formatChatWindowMessage | (private) |
| 338 | fn | formatChatWindowStructuredContext | (private) |
| 360 | fn | isChatWindowStructuredContext | (private) |
| 368 | fn | collectChatWindowMessageIds | (private) |
| 390 | fn | isChatWindowHistoryContext | (private) |
| 400 | fn | buildLocationContextPayload | (private) |
| 417 | fn | buildInboundHistoryMediaPromptPayload | (private) |
| 436 | fn | buildReplyChainPayload | (private) |
| 473 | fn | isTelegramInboundContext | (private) |
| 479 | fn | resolveInlineReplyQuote | (private) |
| 483 | fn | formatTelegramCurrentMessageContext | (private) |
| 501 | fn | resolveInboundUserContextPromptJoiner | pub |
| 505 | fn | formatConversationTimestamp | (private) |
| 515 | fn | resolveInboundChannel | (private) |
| 527 | fn | resolveInboundSourceModality | (private) |
| 547 | fn | resolveInboundFormattingHints | (private) |
| 570 | fn | buildInboundMetaSystemPrompt | pub |
| 620 | fn | buildInboundUserContextPrefix | pub |

## src/auto-reply/reply/model-selection.test.ts (2191 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | fn | normalize | (private) |
| 96 | fn | resolveAuthKey | (private) |
| 124 | fn | makeConfiguredModel | (private) |
| 763 | fn | resolveState | (private) |
| 785 | fn | resolveHeartbeatStoredOverrideState | (private) |
| 809 | fn | resolveStateWithParent | (private) |
| 940 | fn | resolveState | (private) |
| 1425 | fn | resolveStateWithOverride | (private) |
| 2118 | fn | run | (private) |

## src/auto-reply/reply/model-selection.ts (740 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | ModelCatalog | (private) |
| 58 | type | ThinkingDefaultSelection | (private) |
| 64 | type | ModelSelectionState | (private) |
| 85 | fn | resolveConfiguredModelThinkingDefault | (private) |
| 93 | fn | createFastTestModelSelectionState | pub |
| 125 | fn | normalizeRuntimeModelRef | (private) |
| 129 | fn | loadPreparedModelCatalogRuntime | (private) |
| 133 | fn | loadSessionPersistenceRuntime | (private) |
| 137 | fn | findSelectedCatalogEntry | (private) |
| 148 | fn | createModelSelectionState | pub |
| 173 | fn | logStage | (private) |
| 519 | fn | loadManifestCatalog | (private) |
| 531 | fn | resolveThinkingCatalog | (private) |
| 586 | fn | resolveDefaultThinkingLevel | (private) |
| 712 | fn | resolveContextTokens | pub |

## src/auto-reply/reply/progress-narrator.test.ts (554 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | flushNarrations | (private) |
| 56 | fn | createNarratorHarness | (private) |

## src/auto-reply/reply/queue.collect.test.ts (4379 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 151 | fn | runFollowup | (private) |
| 193 | fn | runFollowup | (private) |
| 450 | fn | runFollowup | (private) |
| 501 | fn | createPolicyRun | (private) |
| 550 | fn | createTaskRun | (private) |
| 586 | fn | runFollowup | (private) |
| 967 | fn | guestRun | (private) |
| 1217 | fn | createSource | (private) |
| 1278 | fn | createSource | (private) |
| 1381 | fn | runFollowup | (private) |
| 1578 | fn | createContextRun | (private) |
| 1731 | fn | runFollowup | (private) |
| 1788 | fn | runFollowup | (private) |
| 1898 | fn | runFollowup | (private) |
| 1944 | fn | runFollowup | (private) |
| 1957 | fn | begin | (private) |
| 2009 | fn | runFollowup | (private) |
| 2220 | fn | runFollowup | (private) |
| 2257 | fn | runFollowup | (private) |
| 2309 | fn | runFollowup | (private) |
| 2412 | fn | runFollowup | (private) |
| 2477 | fn | runFollowup | (private) |
| 2543 | fn | runFollowup | (private) |
| 2608 | fn | runFollowup | (private) |
| 2670 | fn | runFollowup | (private) |
| 2727 | fn | runFollowup | (private) |
| 2783 | fn | runFollowup | (private) |
| 2825 | fn | runFollowup | (private) |
| 2907 | fn | runFollowup | (private) |
| 2954 | fn | runFollowup | (private) |
| 2984 | fn | runFollowup | (private) |
| 3060 | fn | runFollowup | (private) |
| 3202 | fn | runFollowup | (private) |
| 3288 | fn | runFollowup | (private) |
| 3380 | fn | runFollowup | (private) |
| 3431 | fn | runFollowup | (private) |
| 3488 | fn | runFollowup | (private) |
| 3534 | fn | runFollowup | (private) |
| 3684 | fn | runFollowup | (private) |
| 3746 | fn | runFollowup | (private) |
| 3854 | fn | createRecorder | (private) |
| 3958 | fn | createRecorder | (private) |
| 4046 | fn | enqueueSource | (private) |
| 4092 | fn | runFollowup | (private) |
| 4143 | fn | runFollowup | (private) |
| 4305 | fn | resolveDeliveryKeyWithRunOverrides | (private) |

## src/auto-reply/reply/queue.drain-restart.test.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 141 | fn | runFollowup | (private) |
| 182 | fn | staleFollowup | (private) |
| 188 | fn | freshFollowup | (private) |
| 221 | fn | staleFollowup | (private) |
| 224 | fn | freshFollowup | (private) |
| 268 | fn | runFollowup | (private) |
| 317 | fn | runFollowup | (private) |
| 346 | fn | runFollowup | (private) |
| 375 | fn | staleFollowup | (private) |
| 381 | fn | freshFollowup | (private) |
| 411 | fn | runFollowup | (private) |
| 445 | fn | runFollowup | (private) |
| 480 | fn | runFollowup | (private) |
| 512 | fn | runFollowup | (private) |
| 541 | fn | runFollowup | (private) |

## src/auto-reply/reply/reply-delivery.test.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | BlockReplyPipelineLike | (private) |

## src/auto-reply/reply/reply-dispatcher.ts (628 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ReplyDispatchErrorHandler | (private) |
| 30 | type | ReplyDispatchSkipHandler | (private) |
| 35 | type | ReplyDispatchCancelHandler | (private) |
| 40 | type | ReplyDispatchDeliveryOutcome | pub |
| 46 | type | ReplyDispatchDeliveryOutcomeTracker | (private) |
| 52 | type | ReplyDispatchDeliverer | (private) |
| 66 | type | ReplyDispatchBeforeDeliverStage | (private) |
| 71 | type | ReplyDispatchBeforeDeliverStageInput | (private) |
| 84 | class | ReplyDispatchBeforeDeliverTimeoutError | (private) |
| 91 | fn | resolveReplyDispatchBeforeDeliverTimeoutMs | (private) |
| 101 | fn | runReplyDispatchBeforeDeliverStage | (private) |
| 129 | fn | resolveReplyDispatchBeforeDeliverStages | (private) |
| 157 | fn | composeReplyDispatchBeforeDeliver | pub |
| 185 | fn | markReplyDispatchBeforeDeliverDeadlineOwned | pub |
| 193 | fn | appendReplyDispatcherBeforeDeliverCancelled | pub |
| 206 | fn | captureReplyDispatchDeliveryOutcome | pub |
| 222 | fn | buildReplyDispatchRuntimeInfo | (private) |
| 234 | fn | getHumanDelay | (private) |
| 249 | fn | getHumanDelayMax | (private) |
| 261 | type | ReplyDispatcherOptions | pub |
| 296 | type | ReplyDispatcherWithTypingOptions | pub |
| 306 | type | ReplyDispatcherWithTypingResult | (private) |
| 314 | type | NormalizeReplyPayloadInternalOptions | (private) |
| 325 | fn | normalizeReplyPayloadInternal | (private) |
| 341 | fn | createReplyDispatcher | pub |
| 379 | fn | reportObserverError | (private) |
| 383 | fn | notifyBeforeDeliverCancelled | (private) |
| 410 | fn | enqueue | (private) |
| 514 | fn | markComplete | (private) |
| 563 | fn | waitForReplyDispatcherIdle | pub |
| 576 | fn | onAbort | (private) |
| 587 | fn | createReplyDispatcherWithTyping | pub |

## src/auto-reply/reply/reply-flow.test.ts (600 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | DeliverPayload | (private) |
| 13 | type | DeliverMock | (private) |
| 15 | fn | deliveredText | (private) |
| 20 | fn | createDeferred | (private) |

## src/auto-reply/reply/reply-media-paths.test.ts (606 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | NormalizedReply | (private) |
| 34 | fn | isRecord | (private) |
| 38 | fn | requireRecord | (private) |
| 46 | fn | expectMedia | (private) |
| 51 | fn | expectNoMedia | (private) |
| 56 | fn | expectOutboundAttachmentCall | (private) |
| 70 | fn | expectAgentScopedMediaAccessCall | (private) |

## src/auto-reply/reply/reply-run-registry.test.ts (1347 lines)

_No symbols extracted._

## src/auto-reply/reply/reply-run-registry.ts (1326 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ReplyRunKey | (private) |
| 27 | type | ReplyBackendKind | (private) |
| 29 | type | ReplyBackendCancelReason | (private) |
| 31 | type | ReplyBackendQueueMessageOptions | pub |
| 46 | type | ReplyBackendHandle | pub |
| 64 | type | ReplyBackendQueueMessageMismatch | (private) |
| 70 | fn | resolveReplyBackendQueueMessageMismatch | pub |
| 98 | type | ReplyOperationPhase | pub |
| 108 | type | ReplyOperationFailureCode | (private) |
| 116 | type | ReplyOperationAbortCode | (private) |
| 118 | type | ReplyOperationResult | (private) |
| 123 | type | ReplyOperation | pub |
| 200 | type | ReplyRunRegistry | (private) |
| 220 | type | ReplyRunWaiter | (private) |
| 225 | type | ReplyRunFollowupAdmissionBarrier | (private) |
| 230 | type | ReplyRunState | (private) |
| 256 | type | ReplyOperationStaleReason | (private) |
| 258 | class | ReplyRunAlreadyActiveError | pub |
| 265 | class | ReplyRunFollowupAdmissionBlockedError | pub |
| 272 | fn | createUserAbortError | (private) |
| 276 | fn | registerWaitSessionId | (private) |
| 280 | fn | clearWaitSessionIds | (private) |
| 288 | fn | notifyReplyRunEnded | (private) |
| 299 | fn | resolveReplyRunForCurrentSessionId | (private) |
| 311 | fn | resolveReplyRunWaitKey | (private) |
| 322 | fn | isReplyRunCompacting | (private) |
| 333 | fn | isReplyOperationPreBackendPhase | (private) |
| 350 | fn | getAttachedBackend | (private) |
| 354 | fn | isReplyOperationAbortable | (private) |
| 369 | fn | isReplyRunAbortableForSignal | pub |
| 375 | fn | retainReplyOperationUntilComplete | pub |
| 379 | fn | isReplyBackendMessageInjectable | (private) |
| 388 | fn | runAfterReplyOperationClear | pub |
| 402 | fn | flushReplyOperationAfterClear | (private) |
| 413 | fn | waitForReplyBarrierSettlement | pub |
| 421 | fn | finish | (private) |
| 429 | fn | schedule | (private) |
| 441 | fn | checkOwnerActivity | (private) |
| 466 | fn | registerFollowupAdmissionBarrier | (private) |
| 486 | fn | updateFollowupAdmissionSessionId | (private) |
| 493 | fn | clearReplyRunState | (private) |
| 503 | fn | markReplyRunDiagnosticProgress | (private) |
| 515 | fn | createReplyOperation | pub |
| 556 | fn | detachUpstreamAbort | (private) |
| 564 | fn | recordActivity | (private) |
| 567 | fn | setResult | (private) |
| 572 | fn | clearState | (private) |
| 611 | fn | abortInternally | (private) |
| 617 | fn | scheduleTerminalSettle | (private) |
| 624 | fn | abortWithReason | (private) |
| 953 | fn | abortFromUpstream | (private) |
| 982 | fn | expireStaleReplyOperation | pub |
| 989 | fn | expireStaleReplyRunBySessionId | pub |
| 999 | fn | isReplyRunEvidenceStale | pub |
| 1010 | fn | isReplyRunEvidenceStaleBySessionId | pub |
| 1104 | fn | resolveActiveReplyRunSessionId | pub |
| 1108 | fn | resolveActiveReplyRunThreadId | pub |
| 1112 | fn | isReplyRunActiveForSessionId | pub |
| 1116 | fn | resolveReplyRunPhaseForSessionId | pub |
| 1122 | fn | isReplyRunAbortableForCompaction | pub |
| 1129 | fn | isReplyRunStreamingForSessionId | pub |
| 1137 | fn | queueReplyRunMessage | pub |
| 1167 | fn | abortReplyRunBySessionId | pub |
| 1175 | fn | forceClearReplyRunBySessionId | pub |
| 1185 | fn | clearReplyRunForResetBySessionId | pub |
| 1198 | fn | waitForReplyRunEndBySessionId | pub |
| 1209 | fn | waitForReplyRunFollowupAdmission | pub |
| 1263 | fn | abortActiveReplyRuns | pub |
| 1286 | fn | getActiveReplyRunCount | pub |
| 1290 | fn | listActiveReplyRunSessionIds | pub |
| 1294 | fn | listActiveReplyRunSessionKeys | pub |

## src/auto-reply/reply/reply-state.test.ts (897 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | seedSessionStore | (private) |
| 48 | fn | loadStoredEntry | (private) |
| 56 | fn | createCompactionSessionFixture | (private) |
| 66 | fn | rotateCompactionSessionFile | (private) |
| 98 | fn | createHistoryMapWithTwoEntries | (private) |

## src/auto-reply/reply/reply-turn-admission.test.ts (1507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createDeferred | (private) |
| 44 | fn | resolve | (private) |
| 51 | fn | createSessionStore | (private) |
| 62 | fn | readSessionEntry | (private) |

## src/auto-reply/reply/reply-utils.test.ts (1507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | NormalizedReplyPayload | (private) |
| 24 | fn | expectNormalizedReply | (private) |
| 411 | fn | createTestTypingController | (private) |
| 421 | fn | markTypingState | (private) |
| 664 | fn | expectResolvedTemplateCases | (private) |
| 921 | fn | createBlockCoalescerHarness | (private) |
| 939 | type | FlushedPayload | (private) |
| 940 | fn | createPayloadCoalescerHarness | (private) |

## src/auto-reply/reply/restart-recovery-claim.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ReplyRestartRecoveryClaimController | (private) |
| 38 | fn | isDuplicateRestartRecoverySource | pub |
| 50 | fn | retireTerminalRestartRecoverySourceClaim | pub |
| 83 | fn | buildExpectedSessionState | (private) |
| 103 | fn | matchesExpectedSessionState | (private) |
| 134 | fn | createReplyRestartRecoveryClaimController | pub |

## src/auto-reply/reply/route-reply.test.ts (1030 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | RouteReplyParams | (private) |
| 44 | fn | routeReply | (private) |
| 48 | fn | compileSlackInteractiveRepliesForTest | (private) |
| 98 | fn | resolveSlackThreadTsCandidate | (private) |
| 124 | fn | createChannelPlugin | (private) |
| 143 | fn | lastDelivery | (private) |
| 155 | fn | expectLastDeliveryFields | (private) |
| 162 | fn | lastDeliveryPayload | (private) |
| 172 | fn | expectSlackNoDelivery | (private) |

## src/auto-reply/reply/session-fork.test.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | makeRoot | (private) |

## src/auto-reply/reply/session.test.ts (6746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | ForkSessionParamsForTest | (private) |
| 240 | fn | makeCaseDir | (private) |
| 246 | fn | makeStorePath | (private) |
| 254 | fn | requireString | (private) |
| 261 | fn | requireMockCallArg | (private) |
| 273 | fn | expectEntryFields | (private) |
| 283 | fn | writeSessionStoreFast | (private) |
| 298 | fn | readSessionStoreFast | (private) |
| 319 | fn | resolvePreprocessingState | (private) |
| 380 | fn | writeTerminalTranscriptSessionStore | (private) |
| 392 | fn | appendTranscript | (private) |
| 421 | fn | setMinimalCurrentConversationBindingRegistryForTests | (private) |
| 498 | fn | registerCurrentConversationBindingAdapterForTest | (private) |
| 621 | fn | releaseWriter | (private) |
| 625 | fn | markWriterStarted | (private) |
| 3087 | fn | seedSessionStore | (private) |
| 3100 | fn | makeCfg | (private) |
| 3224 | fn | seedSessionStore | (private) |
| 3280 | fn | seedSessionStoreWithOverrides | (private) |
| 4148 | fn | signalInterrupted | (private) |
| 4252 | fn | runRollover | (private) |
| 4319 | fn | releaseReplacementAdmission | (private) |
| 4339 | fn | releasePostDrainAdmission | (private) |
| 4353 | fn | releaseFinalGapAdmission | (private) |
| 4376 | fn | signalMutationStarted | (private) |
| 4380 | fn | releaseMutation | (private) |
| 4394 | fn | signalWriterStarted | (private) |
| 4398 | fn | releaseWriter | (private) |
| 4971 | fn | seedSessionStore | (private) |

## src/auto-reply/reply/session.ts (1222 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 120 | type | ReplySessionEndReason | (private) |
| 125 | fn | resolveExplicitSessionEndReason | (private) |
| 129 | fn | resolveSessionDefaultAccountId | (private) |
| 152 | fn | resolveStaleSessionEndReason | (private) |
| 159 | fn | hasProviderOwnedSession | (private) |
| 164 | type | SessionInitResult | pub |
| 185 | type | InitSessionStateParams | (private) |
| 196 | type | InitSessionStateAttemptContext | (private) |
| 204 | type | InitSessionStateAttemptOutcome | (private) |
| 208 | fn | resolveSessionConversationBindingContext | (private) |
| 234 | fn | resolveBoundConversationSessionKey | (private) |
| 269 | fn | resolveInitSessionStateAttemptContext | (private) |
| 309 | type | ReplySessionPreprocessingState | (private) |
| 316 | fn | resolveReplySessionPreprocessingState | pub |
| 347 | fn | initSessionState | pub |
| 354 | fn | initSessionStateAttempt | (private) |
| 426 | fn | initSessionStateAttemptLocked | (private) |

## src/auto-reply/reply/source-reply-delivery-mode.test.ts (645 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | expectPolicyFields | (private) |

## src/auto-reply/reply/startup-context.test.ts (521 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | makeWorkspace | (private) |

## src/auto-reply/status.test.ts (2788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | registerAnthropicCliBackendForTest | (private) |
| 1981 | fn | writeTranscriptUsageLog | (private) |
| 2027 | fn | writeBaselineTranscriptUsageLog | (private) |
| 2038 | fn | buildTranscriptStatusText | (private) |

## src/auto-reply/thinking.test.ts (918 lines)

_No symbols extracted._

## src/channels/conversation-resolution.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | ConversationResolutionSource | (private) |
| 40 | type | ConversationResolution | (private) |
| 55 | type | ResolveCommandConversationResolutionInput | pub |
| 73 | type | ResolveInboundConversationResolutionInput | (private) |
| 88 | fn | resolveChannelId | (private) |
| 101 | fn | getActiveRegistryChannelPlugin | (private) |
| 110 | fn | getRuntimeChannelPluginCandidates | (private) |
| 118 | fn | resolveRuntimeChannelPlugin | (private) |
| 122 | fn | shouldDefaultParentConversationToSelf | (private) |
| 126 | fn | normalizeResolutionTarget | (private) |
| 170 | fn | resolveBindingAccountId | (private) |
| 182 | fn | resolveFallbackConversationTargetId | (private) |
| 210 | fn | resolveChannelTargetId | (private) |
| 272 | fn | buildThreadingContext | (private) |
| 294 | fn | resolveChannelDefaultBindingPlacement | pub |
| 309 | fn | resolveCommandConversationResolution | pub |
| 419 | fn | resolveInboundConversationResolution | pub |

## src/channels/progress-draft-compositor.test.ts (895 lines)

_No symbols extracted._

## src/channels/progress-draft-compositor.ts (683 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | ChannelProgressDraftMode | (private) |
| 36 | type | ChannelProgressDraftCompositorLine | pub |
| 37 | type | ChannelProgressDraftCompositorSnapshot | pub |
| 45 | fn | createChannelProgressReceiptTracker | pub |
| 55 | fn | closeReasoning | (private) |
| 63 | fn | reset | (private) |
| 119 | type | ChannelProgressDraftUpdateOptions | (private) |
| 125 | fn | createChannelProgressDraftCompositor | pub |
| 197 | fn | clearPreambleExpiryTimer | (private) |
| 204 | fn | resolveStatusText | (private) |
| 213 | fn | formatDraftText | (private) |
| 233 | fn | clearProgressState | (private) |
| 264 | fn | schedulePreambleExpiryRefresh | (private) |
| 297 | fn | clearLine | (private) |
| 315 | fn | noteProgress | (private) |

## src/channels/status-reactions.test.ts (649 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createMockAdapter | (private) |
| 32 | fn | createEnabledController | (private) |
| 45 | fn | createSetOnlyController | (private) |
| 60 | fn | createSingleSlotController | (private) |
| 78 | fn | expectSetEmojiCall | (private) |
| 82 | fn | collectEmojisForMethod | (private) |
| 95 | fn | countCallsForMethod | (private) |
| 105 | fn | countCallsForEmoji | (private) |
| 114 | fn | expectArrayContainsAll | (private) |
| 120 | fn | expectObjectHasKeys | (private) |
| 550 | fn | createControllerAfterThinking | (private) |

## src/channels/streaming.ts (1329 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | asObjectRecord | (private) |
| 55 | fn | asInteger | (private) |
| 59 | fn | normalizeStreamingMode | (private) |
| 67 | fn | parsePreviewStreamingMode | (private) |
| 80 | fn | asProgressConfig | (private) |
| 84 | fn | asCommandTextMode | (private) |
| 109 | fn | isChannelProgressDraftWorkToolName | pub |
| 114 | fn | stripTrailingEllipsis | (private) |
| 118 | fn | isPotentialTruncatedFinal | pub |
| 126 | fn | selectLongerFinalText | pub |
| 155 | fn | resolveTranscriptBackedChannelFinalText | pub |
| 171 | type | ChannelProgressLineOptions | pub |
| 180 | type | ChannelProgressDraftRenderMode | pub |
| 182 | type | AgentPlanStepStatus | pub |
| 184 | type | AgentPlanStep | pub |
| 189 | type | AgentPlanStepInput | pub |
| 191 | fn | isAgentPlanStepStatus | (private) |
| 201 | fn | normalizeAgentPlanSteps | pub |
| 222 | type | ChannelProgressDraftLineInput | pub |
| 282 | type | ChannelProgressDraftLineKind | pub |
| 284 | type | ChannelProgressDraftLine | pub |
| 307 | fn | compactStrings | (private) |
| 311 | fn | inferToolMeta | (private) |
| 322 | fn | buildNamedProgressLine | (private) |
| 365 | fn | setProgressDraftLineCorrelationKey | (private) |
| 375 | fn | itemKindToToolName | (private) |
| 393 | fn | isCommandToolName | pub |
| 398 | fn | isCommandProgressItem | (private) |
| 403 | fn | resolveProgressDraftLineId | (private) |
| 420 | fn | resolveCommandProgressCorrelationKey | (private) |
| 425 | fn | isTerminalProgressStatus | (private) |
| 434 | fn | isEmptyReasoningProgressItem | (private) |
| 445 | fn | patchMetas | (private) |
| 450 | fn | buildCommandOutputProgressLine | (private) |
| 486 | fn | shouldPrefixProgressLine | (private) |
| 490 | fn | formatChannelProgressDraftLine | pub |
| 499 | fn | resolveChannelProgressDraftLineOptions | pub |
| 511 | fn | buildChannelProgressDraftLineForEntry | pub |
| 525 | fn | formatChannelProgressDraftLineForEntry | pub |
| 536 | fn | buildChannelProgressDraftLine | pub |
| 656 | fn | createChannelProgressDraftGate | pub |
| 683 | fn | clearTimer | (private) |
| 722 | fn | schedule | (private) |
| 775 | fn | getChannelStreamingConfigObject | pub |
| 782 | fn | resolveChannelStreamingPreviewToolProgress | pub |
| 797 | fn | resolveChannelStreamingProgressCommentary | pub |
| 811 | fn | resolveChannelStreamingProgressNarration | pub |
| 819 | fn | resolveChannelStreamingPreviewCommandText | pub |
| 831 | fn | resolveChannelStreamingSuppressDefaultToolProgressMessages | pub |
| 855 | fn | resolveChannelStreamingNativeTransport | pub |
| 861 | fn | resolveChannelPreviewStreamMode | pub |
| 883 | fn | resolveChannelProgressDraftConfig | pub |
| 889 | fn | normalizeProgressLabels | (private) |
| 897 | fn | resolveChannelProgressDraftLabel | pub |
| 915 | fn | resolveChannelProgressDraftMaxLines | pub |
| 923 | fn | resolveChannelProgressDraftMaxLineChars | pub |
| 931 | fn | resolveChannelProgressDraftRender | pub |
| 939 | fn | sliceCodePoints | (private) |
| 943 | fn | compactProgressLineDetail | (private) |
| 959 | fn | removeUnbalancedInlineBackticks | (private) |
| 967 | fn | repairCompactedProgressMarkdown | (private) |
| 984 | fn | compactChannelProgressDraftNarration | (private) |
| 992 | fn | compactPlainProgressLine | (private) |
| 1001 | fn | compactChannelProgressDraftLine | (private) |
| 1048 | fn | formatPlanChecklistLines | pub |
| 1059 | fn | marker | (private) |
| 1104 | fn | getProgressDraftLineText | (private) |
| 1144 | fn | normalizeChannelProgressDraftLineIdentity | pub |
| 1157 | fn | mergeChannelProgressDraftLine | pub |
| 1196 | fn | mergeProgressDraftLineUpdate | (private) |
| 1230 | fn | resolveProgressDraftLineMergeKeys | (private) |
| 1240 | fn | formatChannelProgressDraftText | pub |

## src/cli/argv.test.ts (694 lines)

_No symbols extracted._

## src/cli/argv.ts (618 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | isHelpOrVersionInvocation | pub |
| 74 | fn | parsePositiveInt | (private) |
| 78 | fn | hasFlag | pub |
| 91 | fn | hasRootVersionAlias | pub |
| 119 | fn | isRootVersionInvocation | pub |
| 123 | fn | isRootInvocationForFlags | (private) |
| 156 | fn | isRootHelpInvocation | pub |
| 160 | type | HelpNormalizationPositional | (private) |
| 162 | type | HelpNormalizationScanResult | (private) |
| 171 | fn | scanHelpNormalizationArgv | (private) |
| 200 | fn | normalizeGeneratedHelpCommandArgv | pub |
| 234 | fn | normalizeRootHelpTargetArgv | pub |
| 262 | type | NormalizeRootNoColorArgvOptions | (private) |
| 269 | type | NormalizeRootLogLevelArgvOptions | (private) |
| 277 | fn | isPossibleCommandOptionValue | (private) |
| 288 | fn | consumeRootLogLevelToken | (private) |
| 302 | fn | splitRootOptionPrefix | (private) |
| 329 | fn | normalizeRootNoColorArgv | pub |
| 367 | fn | normalizeRootLogLevelArgv | pub |
| 409 | fn | getFlagValue | pub |
| 440 | fn | getVerboseFlag | pub |
| 450 | fn | getPositiveIntFlagValue | pub |
| 460 | fn | getCommandPathWithRootOptions | pub |
| 464 | fn | getCommandPathInternal | (private) |
| 497 | fn | getPrimaryCommand | pub |
| 502 | type | CommandPositionalsParseOptions | (private) |
| 508 | fn | consumeKnownOptionToken | (private) |
| 538 | fn | getCommandPositionalsWithRootOptions | pub |
| 587 | fn | buildParseArgv | pub |
| 603 | fn | shouldMigrateStateFromPath | pub |

## src/cli/capability-cli.test.ts (3927 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | LocalAudioSelection | (private) |
| 585 | fn | runModelRunWithModel | (private) |
| 602 | type | GatewayCall | (private) |
| 609 | type | CompletionCall | (private) |
| 616 | type | ImageDescribeParams | (private) |
| 625 | fn | firstGatewayCall | (private) |
| 630 | fn | firstCompletionCall | (private) |
| 637 | fn | firstPreparedModelParams | (private) |
| 644 | fn | firstJsonOutput | (private) |
| 649 | fn | firstCommandConfigResolutionCall | (private) |
| 656 | fn | imageDescribeCall | (private) |
| 661 | fn | firstImagePrepareCall | (private) |
| 668 | fn | firstImageDescribeWithModelCall | (private) |
| 675 | fn | firstImageGenerationCall | (private) |
| 680 | fn | firstVideoGenerationCall | (private) |
| 685 | fn | firstAudioTranscriptionCall | (private) |
| 692 | fn | firstTextToSpeechCall | (private) |
| 697 | fn | firstEmbeddingProviderCall | (private) |
| 704 | fn | expectModelRunDispatch | (private) |
| 716 | fn | runtimeErrorMessages | (private) |
| 720 | fn | expectRuntimeErrorContains | (private) |

## src/cli/channel-auth.test.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | fn | expectFields | (private) |
| 92 | fn | readFirstCallArg | (private) |
| 100 | fn | readFirstLogMessage | (private) |
| 105 | fn | gatewayRequestError | (private) |
| 112 | fn | findCallArg | (private) |

## src/cli/command-secret-gateway.test.ts (1506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | makeTalkProviderApiKeySecretRefConfig | (private) |
| 61 | fn | withEnvValue | (private) |
| 69 | fn | resolveTalkProviderApiKey | (private) |
| 82 | fn | expectTalkProviderApiKeySecretRef | (private) |
| 93 | fn | expectGatewayUnavailableLocalFallbackDiagnostics | (private) |
| 104 | fn | createExecProviderConfig | (private) |
| 147 | fn | markerExists | (private) |
| 154 | fn | readPath | (private) |
| 165 | fn | setSingleSecretTargetDeps | (private) |
| 228 | fn | setFirecrawlWebSearchTargetDeps | (private) |
| 235 | fn | setFirecrawlWebFetchTargetDeps | (private) |
| 246 | fn | setGoogleWebSearchTargetDeps | (private) |

## src/cli/command-secret-gateway.ts (1120 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | ResolveCommandSecretsResult | (private) |
| 41 | type | CommandSecretResolutionMode | pub |
| 46 | type | LegacyCommandSecretResolutionMode | (private) |
| 48 | type | CommandSecretResolutionModeInput | (private) |
| 52 | type | CommandSecretTargetState | (private) |
| 58 | type | CommandSecretResolutionPolicy | (private) |
| 63 | type | GatewaySecretsResolveResult | (private) |
| 77 | type | CommandSecretGatewayDeps | (private) |
| 117 | fn | pluginIdFromRuntimeWebPath | (private) |
| 122 | fn | normalizeCommandSecretResolutionMode | (private) |
| 134 | fn | enforcesResolvedSecrets | (private) |
| 138 | fn | dedupeDiagnostics | (private) |
| 152 | fn | targetsRuntimeWebPath | (private) |
| 156 | fn | classifyRuntimeWebTargetPathState | (private) |
| 205 | fn | describeInactiveRuntimeWebTargetPath | (private) |
| 244 | fn | targetsRuntimeWebResolution | (private) |
| 264 | fn | collectConfiguredTargetRefPaths | (private) |
| 290 | fn | classifyConfiguredTargetRefs | (private) |
| 353 | fn | parseGatewaySecretsResolveResult | (private) |
| 369 | fn | collectInactiveSurfacePathsFromDiagnostics | (private) |
| 385 | fn | filterAllowedGatewayDiagnostics | (private) |
| 407 | fn | isUnsupportedSecretsResolveError | (private) |
| 420 | fn | isAllowedPathsSecretsResolveCompatError | (private) |
| 428 | fn | hasForcedActivePaths | (private) |
| 432 | fn | resolveLocalResolutionPolicy | (private) |
| 442 | fn | collectActiveGatewayExecSecretRefCredentialPaths | (private) |
| 462 | fn | resolveCommandSecretRefsWithoutGateway | (private) |
| 491 | fn | callGatewaySecretsResolve | (private) |
| 536 | fn | isDirectRuntimeWebTargetPath | (private) |
| 540 | fn | resolveCommandSecretRefsLocally | (private) |
| 707 | fn | buildTargetStatesByPath | (private) |
| 724 | fn | buildUnresolvedDiagnostics | (private) |
| 738 | fn | scrubUnresolvedAssignments | (private) |
| 747 | fn | filterInactiveSurfaceDiagnostics | (private) |
| 762 | fn | resolveTargetSecretLocally | (private) |
| 827 | fn | resolveCommandSecretRefsViaGateway | pub |

## src/cli/command-secret-targets.test.ts (1055 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | readPath | (private) |
| 73 | fn | record | (private) |

## src/cli/command-secret-targets.ts (930 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | idsByPrefix | (private) |
| 77 | type | CommandSecretTargets | (private) |
| 83 | type | CommandSecretTargetScope | (private) |
| 89 | type | SelectedProviderTargetIds | (private) |
| 104 | fn | getChannelSecretTargetIds | (private) |
| 109 | fn | isPluginWebCredentialTargetId | (private) |
| 118 | fn | isPluginWebSearchCredentialTargetId | (private) |
| 126 | fn | isPluginWebFetchCredentialTargetId | (private) |
| 134 | fn | getCapabilityWebSearchTargetIds | (private) |
| 143 | fn | getCapabilityWebFetchTargetIds | (private) |
| 152 | fn | isConfiguredSecretCandidate | (private) |
| 159 | fn | resolveFetchConfig | (private) |
| 166 | fn | resolveSearchConfig | (private) |
| 173 | fn | pathPatternMatchesConcretePath | (private) |
| 202 | fn | targetIdsForConfigPath | (private) |
| 209 | fn | addConfigPathTargets | (private) |
| 229 | fn | addConfiguredConfigPathTargets | (private) |
| 247 | fn | normalizeProviderId | (private) |
| 251 | fn | modelProviderCredentialFallbackPathForWebSearchProvider | (private) |
| 264 | fn | discoverForcedActivePaths | (private) |
| 279 | fn | discoverConfiguredAllowedPaths | (private) |
| 290 | fn | mergeConfiguredAllowedPaths | (private) |
| 305 | fn | resolveSelectedWebFetchProviderId | (private) |
| 314 | fn | resolveSelectedWebSearchProviderId | (private) |
| 323 | fn | withSelectedWebProviderForDiscovery | (private) |
| 342 | fn | hasConfiguredFetchCredential | (private) |
| 349 | fn | hasConfiguredSearchCredential | (private) |
| 356 | type | ConfigPathTargetParams | (private) |
| 363 | type | SelectedProviderTargetState | (private) |
| 371 | fn | emptySelectedProviderTargetIds | (private) |
| 382 | fn | createSelectedProviderTargetState | (private) |
| 392 | fn | toSelectedProviderTargetIds | (private) |
| 406 | type | CapabilityWebCredentialProvider | (private) |
| 408 | fn | addFallbackPathTargets | (private) |
| 433 | fn | addSelectedProviderCredentialTargets | (private) |
| 470 | fn | getCapabilityWebSearchSelectedProviderTargetIds | (private) |
| 516 | fn | getCapabilityWebFetchSelectedProviderTargetIds | (private) |
| 544 | fn | getCapabilityWebProviderAutoDetectTargets | (private) |
| 593 | fn | getCapabilityWebSearchAutoDetectTargets | (private) |
| 606 | fn | getCapabilityWebFetchAutoDetectTargets | (private) |
| 619 | fn | getAgentRuntimeBaseTargetIds | (private) |
| 630 | fn | isScopedChannelSecretTargetEntry | (private) |
| 654 | fn | getConfiguredChannelSecretTargetIds | (private) |
| 686 | fn | buildCommandSecretTargets | (private) |
| 696 | fn | getCommandSecretTargets | (private) |
| 701 | fn | toTargetIdSet | (private) |
| 705 | fn | selectChannelTargetIds | (private) |
| 715 | fn | pathTargetsScopedChannelAccount | (private) |
| 731 | fn | getScopedChannelsCommandSecretTargets | pub |
| 776 | fn | getQrRemoteCommandSecretTargetIds | pub |
| 781 | fn | getChannelsCommandSecretTargetIds | pub |
| 786 | fn | getConfiguredChannelsCommandSecretTargetIds | pub |
| 794 | fn | getModelsCommandSecretTargetIds | pub |
| 799 | fn | getMemoryEmbeddingCommandSecretTargetIds | pub |
| 804 | fn | getTtsCommandSecretTargetIds | pub |
| 809 | fn | getAgentRuntimeCommandSecretTargetIds | pub |
| 819 | fn | getCapabilityWebFetchCommandSecretTargetIds | pub |
| 823 | type | CapabilityWebCommandSecretTargetParams | (private) |
| 839 | fn | getCapabilityWebCommandSecretTargets | (private) |
| 871 | fn | getCapabilityWebFetchCommandSecretTargets | pub |
| 889 | fn | getCapabilityWebSearchCommandSecretTargetIds | pub |
| 894 | fn | getCapabilityWebSearchCommandSecretTargets | pub |
| 912 | fn | getStatusCommandSecretTargetIds | pub |
| 927 | fn | getSecurityAuditCommandSecretTargetIds | pub |

## src/cli/completion-cli.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | getCompletionScript | pub |
| 38 | fn | completionFlags | (private) |
| 42 | fn | preferredCompletionFlag | (private) |
| 46 | fn | fishWords | (private) |
| 50 | fn | completionOptionFlags | (private) |
| 61 | fn | commandNameVariants | (private) |
| 69 | fn | childPathVariants | (private) |
| 75 | fn | collectFishPathOptionFlags | (private) |
| 95 | fn | generateFishPathHelper | (private) |
| 98 | fn | __ | (private) |
| 144 | fn | fishCommandPathCondition | (private) |
| 153 | fn | writeCompletionCache | (private) |
| 168 | fn | writeCompletionRegistrationWarning | (private) |
| 172 | fn | registerSubcommandsForCompletion | (private) |
| 188 | fn | registerCompletionCli | pub |
| 260 | fn | generateZshCompletion | (private) |
| 306 | fn | generateZshArgs | (private) |
| 321 | fn | generateZshSubcmdList | (private) |
| 336 | fn | escapeZshDoubleQuotedDescription | (private) |
| 346 | fn | generateZshSubcommands | (private) |
| 349 | fn | visit | (private) |
| 394 | fn | generateBashCompletion | (private) |
| 438 | type | BashCompletionContext | (private) |
| 444 | fn | collectBashCompletionContexts | (private) |
| 450 | fn | visit | (private) |
| 472 | fn | generateBashCompletionContextCases | (private) |
| 485 | fn | generateBashCommandPathUpdate | (private) |
| 503 | fn | generatePowerShellCompletion | (private) |
| 506 | fn | formatPowerShellArray | (private) |
| 509 | fn | visit | (private) |
| 573 | fn | generateFishCompletion | (private) |
| 577 | fn | visit | (private) |

## src/cli/config-cli.test.ts (3988 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 119 | fn | buildSnapshot | (private) |
| 139 | fn | setSnapshot | (private) |
| 143 | fn | setSnapshotOnce | (private) |
| 147 | fn | writeTempJson5File | (private) |
| 156 | fn | writeSecurePluginEntrypoint | (private) |
| 161 | fn | withRuntimeDefaults | (private) |
| 173 | fn | createPluginManifestRecord | (private) |
| 190 | fn | createPluginMetadataSnapshot | (private) |
| 234 | fn | configRecordWithRequireMentionSchema | (private) |
| 246 | fn | configChannelSchemaWithRecord | (private) |
| 255 | fn | setConfigMutationShapeSchema | (private) |
| 291 | fn | setExternalFeishuSchema | (private) |
| 322 | fn | makeInvalidSnapshot | (private) |
| 347 | fn | firstMockArg | (private) |
| 355 | fn | lastMockArg | (private) |
| 364 | fn | parseLastLogPayload | (private) |
| 370 | fn | runValidateJsonAndGetPayload | (private) |
| 386 | fn | firstWrittenConfig | (private) |
| 394 | fn | firstWriteConfigOptions | (private) |
| 400 | fn | requireWriteOptions | (private) |
| 412 | fn | expectLogIncludes | (private) |
| 416 | fn | expectLogExcludes | (private) |
| 420 | fn | expectErrorIncludes | (private) |
| 424 | fn | requireRecord | (private) |
| 431 | fn | requireResolveSecretRefCall | (private) |
| 443 | fn | runConfigCommand | (private) |

## src/cli/config-cli.ts (2877 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 95 | type | PathSegment | (private) |
| 96 | type | ConfigSetParseOpts | (private) |
| 99 | type | ConfigSetInputMode | (private) |
| 100 | type | ConfigSetOperation | (private) |
| 112 | type | ConfigPatchOptions | (private) |
| 120 | type | ConfigUnsetOptions | (private) |
| 125 | type | ConfigMutationOptions | (private) |
| 133 | fn | normalizeAgentDefaultModelValueForConfigMutation | (private) |
| 153 | fn | normalizeAgentListModelRefsForConfigMutation | (private) |
| 186 | fn | normalizeProviderCatalogModelsForConfigMutation | (private) |
| 214 | fn | normalizeModelProviderRefsForConfigMutation | (private) |
| 238 | fn | normalizeConfigMutationModelRefs | (private) |
| 287 | fn | normalizeConfigMutationExplicitSetPath | (private) |
| 336 | class | ConfigSetDryRunValidationError | (private) |
| 343 | fn | isIndexSegment | (private) |
| 347 | fn | parseIndexSegment | (private) |
| 351 | fn | parseBracketPathSegment | (private) |
| 372 | fn | assertNotWhitespaceSegment | (private) |
| 378 | fn | parsePath | (private) |
| 453 | fn | parseValue | (private) |
| 470 | fn | hasOwnPathKey | (private) |
| 474 | fn | formatDoctorHint | (private) |
| 478 | fn | formatInvalidConfigRepairHint | (private) |
| 487 | fn | formatUnsupportedSecretRefPolicyFailureMessage | (private) |
| 498 | fn | validatePathSegments | (private) |
| 506 | fn | getAtPath | (private) |
| 532 | fn | formatConfigUnsetMissingPathMessage | (private) |
| 542 | type | JsonSchemaRecord | (private) |
| 552 | type | SetAtPathOptions | (private) |
| 557 | fn | isSchemaRecord | (private) |
| 561 | fn | schemaTypes | (private) |
| 571 | fn | schemaAlternatives | (private) |
| 594 | fn | schemaLooksArray | (private) |
| 600 | fn | schemaLooksObject | (private) |
| 610 | fn | propertySchema | (private) |
| 640 | fn | schemasAtPath | (private) |
| 654 | fn | schemaPrefersArrayAtPath | (private) |
| 675 | fn | shouldCreateArrayForMissingPathSegment | (private) |
| 692 | fn | setAtPath | (private) |
| 754 | fn | modelArrayIds | (private) |
| 768 | fn | mergeModelArrays | (private) |
| 794 | fn | mergeConfigValue | (private) |
| 811 | fn | mergeAtPath | (private) |
| 825 | fn | isProviderModelListPath | (private) |
| 831 | fn | isProtectedMapReplacementPath | (private) |
| 850 | fn | isProtectedArrayReplacementPath | (private) |
| 854 | fn | formatRemovedEntries | (private) |
| 861 | fn | assertNonDestructiveReplacement | (private) |
| 902 | type | UnsetAtPathResult | (private) |
| 904 | fn | unsetAtPath | (private) |
| 954 | fn | loadValidConfig | (private) |
| 977 | fn | parseConfigSetPath | pub |
| 986 | fn | pathEquals | (private) |
| 992 | fn | pruneInactiveGatewayAuthCredentials | (private) |
| 1016 | fn | remove | (private) |
| 1034 | fn | toDotPath | (private) |
| 1042 | fn | isPluginEntryConfigPath | (private) |
| 1048 | fn | configApplyHintForPaths | (private) |
| 1069 | fn | configApplyHintForOperations | (private) |
| 1092 | fn | expandActualChangedPathsWithRequestedDescendants | (private) |
| 1116 | fn | expandWholeValueChangePath | (private) |
| 1133 | fn | collectChangedLeafPaths | (private) |
| 1146 | fn | parseSecretRefSource | (private) |
| 1154 | fn | parseSecretRefBuilder | (private) |
| 1192 | fn | parseOptionalPositiveInteger | (private) |
| 1207 | fn | parseProviderEnvEntries | (private) |
| 1228 | fn | parseProviderAliasPath | (private) |
| 1247 | fn | buildProviderFromBuilder | (private) |
| 1334 | fn | parseSecretRefFromUnknown | (private) |
| 1354 | fn | buildRefAssignmentOperation | (private) |
| 1387 | fn | parseProviderAliasFromTargetPath | (private) |
| 1398 | fn | touchesSecretProviderCollection | (private) |
| 1405 | fn | touchesSecretDefaults | (private) |
| 1412 | fn | buildValueAssignmentOperation | (private) |
| 1431 | fn | parseBatchOperations | (private) |
| 1477 | fn | configPatchModeError | (private) |
| 1481 | fn | readStdinText | (private) |
| 1498 | fn | readConfigPatchInput | (private) |
| 1525 | fn | parseReplacePaths | (private) |
| 1529 | fn | pathKey | (private) |
| 1533 | fn | buildDeleteOperation | (private) |
| 1543 | fn | buildUnsetOperation | (private) |
| 1559 | fn | buildApplyValueOperation | (private) |
| 1585 | fn | buildConfigPatchOperations | (private) |
| 1595 | fn | visit | (private) |
| 1646 | fn | collectSecretRefsFromUnknown | (private) |
| 1648 | fn | visit | (private) |
| 1670 | fn | modeError | (private) |
| 1674 | fn | buildSingleSetOperations | (private) |
| 1756 | fn | collectDryRunRefs | (private) |
| 1806 | fn | collectDryRunResolvabilityErrors | (private) |
| 1828 | fn | collectDryRunStaticErrorsForSkippedExecRefs | (private) |
| 1872 | fn | selectDryRunRefsForResolution | (private) |
| 1888 | fn | pathStartsWith | (private) |
| 1892 | fn | formatPluginInstallConfigSetError | (private) |
| 1903 | fn | isAutoManagedMetaPath | (private) |
| 1907 | fn | valueHasAutoManagedChild | (private) |
| 1925 | fn | operationClobbersAncestorChild | (private) |
| 1944 | fn | findAutoManagedMetaTargets | (private) |
| 1979 | fn | findAutoManagedMetaUnsetTargets | (private) |
| 1993 | fn | formatAutoManagedMetaError | (private) |
| 2003 | fn | loadConfigMutationSchema | (private) |
| 2011 | fn | collectDryRunSchemaErrors | (private) |
| 2022 | fn | collectPluginIntegrationProviderErrors | (private) |
| 2084 | fn | dedupeDryRunErrors | (private) |
| 2101 | fn | formatDryRunFailureMessage | (private) |
| 2138 | fn | runConfigOperations | (private) |
| 2365 | fn | handleConfigMutationError | (private) |
| 2383 | fn | runConfigSet | pub |
| 2432 | fn | runConfigPatch | pub |
| 2464 | fn | runConfigGet | pub |
| 2507 | fn | runConfigUnset | pub |
| 2595 | fn | runConfigFile | (private) |
| 2605 | fn | buildCliConfigSchema | (private) |
| 2619 | fn | runConfigSchema | (private) |
| 2629 | fn | runConfigValidate | (private) |
| 2703 | fn | registerConfigCli | pub |

## src/cli/container-target.test.ts (763 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | requireSpawnCall | (private) |

## src/cli/cron-cli.test.ts (1778 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | defaultGatewayMock | (private) |
| 60 | type | CronUpdatePatch | (private) |
| 91 | type | CronAddParams | (private) |
| 122 | fn | buildProgram | (private) |
| 129 | fn | createCronJob | (private) |
| 145 | fn | resetGatewayMock | (private) |
| 155 | fn | runtimeErrorMessages | (private) |
| 161 | fn | expectRuntimeErrorContaining | (private) |
| 165 | fn | expectNoRuntimeErrorContaining | (private) |
| 169 | fn | stdoutText | (private) |
| 173 | fn | runCronCommand | (private) |
| 179 | fn | expectCronCommandExit | (private) |
| 183 | fn | runCronEditAndGetPatch | (private) |
| 189 | fn | runCronAddAndGetParams | (private) |
| 195 | fn | runCronSimpleAndGetUpdatePatch | (private) |
| 205 | fn | mockCronEditJobLookup | (private) |
| 220 | fn | getGatewayCallParams | (private) |
| 225 | fn | runCronEditWithScheduleLookup | (private) |
| 236 | fn | expectCronEditWithScheduleLookupExit | (private) |
| 248 | fn | runCronRunAndCaptureExit | (private) |

## src/cli/devices-cli.runtime.ts (1212 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | DevicesRpcOpts | (private) |
| 68 | type | DeviceTokenSummary | (private) |
| 74 | type | PendingDevice | (private) |
| 89 | type | PairedDevice | (private) |
| 104 | type | DevicePairingList | (private) |
| 109 | type | ApprovePairingGatewayContext | (private) |
| 114 | type | PendingNodeApprovalNotice | (private) |
| 134 | fn | callGatewayCli | (private) |
| 160 | fn | isPendingNodeApprovalState | (private) |
| 166 | fn | buildNodeApproveCommand | (private) |
| 175 | fn | formatNodeConnectionFlagReminder | (private) |
| 185 | fn | tryReadPendingNodeApprovals | (private) |
| 199 | fn | pairedDeviceCanBeNode | (private) |
| 205 | fn | stringsMatch | (private) |
| 211 | fn | nodeMatchesPairedDevice | (private) |
| 215 | fn | nodeMatchesQuery | (private) |
| 223 | fn | pairedDeviceMatchesQuery | (private) |
| 227 | fn | tryReadGatewayPairingList | (private) |
| 237 | fn | buildPendingNodeApprovalNoticesForOpts | (private) |
| 255 | fn | formatNodeApprovalNotice | (private) |
| 267 | fn | findPairedDevicePendingNodeApprovalNotices | (private) |
| 282 | fn | findQueryPendingNodeApprovalNotices | (private) |
| 301 | fn | normalizeErrorMessage | (private) |
| 308 | fn | isDevicePairingApprovalDenied | (private) |
| 314 | fn | isUnknownRequestIdError | (private) |
| 330 | fn | isScopeUpgradePendingApproval | (private) |
| 336 | fn | resolveLocalPairingFallback | (private) |
| 362 | fn | buildFallbackStateMismatchError | (private) |
| 374 | fn | assertLocalFallbackMatchesGatewayRequest | (private) |
| 390 | fn | redactLocalPairedDevice | (private) |
| 398 | fn | listPairingWithFallback | (private) |
| 419 | fn | approvePairingWithFallback | (private) |
| 529 | fn | parseDevicePairingList | (private) |
| 537 | fn | normalizeDeviceRoles | (private) |
| 552 | fn | normalizeOperatorScopes | (private) |
| 558 | fn | findPendingRequestById | (private) |
| 573 | fn | hasExactRoleMatch | (private) |
| 583 | fn | hasCompatibleClientMetadata | (private) |
| 598 | fn | resolveOriginalReplacementScopes | (private) |
| 607 | fn | replacementScopesCoverOriginal | (private) |
| 626 | fn | findSameDeviceReplacementRequest | (private) |
| 674 | fn | resolvePairedOperatorScopes | (private) |
| 682 | fn | resolvePendingOperatorApprovalScopes | (private) |
| 693 | fn | isKnownNonAdminOperatorScope | (private) |
| 697 | fn | resolveApprovePairingScopesForRequest | (private) |
| 718 | fn | resolveApprovePairingGatewayContext | (private) |
| 740 | fn | selectLatestPendingRequest | (private) |
| 751 | fn | formatTokenSummary | (private) |
| 761 | fn | formatPendingDeviceIdentity | (private) |
| 769 | fn | formatAccessSummary | (private) |
| 782 | fn | formatPendingApprovalKind | (private) |
| 798 | fn | indexPairedDevices | (private) |
| 809 | fn | lookupPairedDevice | (private) |
| 829 | fn | buildExplicitApproveCommand | (private) |
| 845 | fn | formatAuthFlagReminder | (private) |
| 859 | fn | resolveRequiredDeviceRole | (private) |
| 874 | fn | runDevicesListCommand | pub |
| 967 | fn | runDevicesRemoveCommand | pub |
| 987 | fn | runDevicesClearCommand | pub |
| 1033 | fn | runDevicesApproveCommand | pub |
| 1155 | fn | runDevicesRejectCommand | pub |
| 1168 | fn | runDevicesRenameCommand | pub |
| 1188 | fn | runDevicesRotateCommand | pub |
| 1201 | fn | runDevicesRevokeCommand | pub |

## src/cli/devices-cli.test.ts (1735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | runDevicesApprove | (private) |
| 66 | fn | runDevicesCommand | (private) |
| 72 | fn | readRuntimeCallText | (private) |
| 77 | fn | readRuntimeOutput | (private) |
| 81 | fn | readRuntimeErrorOutput | (private) |
| 85 | fn | pendingDevice | (private) |
| 97 | fn | pairedDevice | (private) |
| 107 | fn | mockGatewayPairingList | (private) |
| 117 | fn | rejectGatewayForLocalFallback | (private) |
| 121 | fn | mockLocalPairingFallback | (private) |
| 130 | fn | requireRecord | (private) |
| 137 | fn | expectRecordFields | (private) |
| 143 | fn | requireGatewayCall | (private) |
| 148 | fn | expectGatewayCall | (private) |
| 152 | fn | hasGatewayMethod | (private) |

## src/cli/exec-approvals-cli.pending-resolve.test.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | stringifyArgs | (private) |
| 33 | fn | requireRecord | (private) |
| 40 | fn | firstMockArg | (private) |
| 48 | fn | writtenJson | (private) |
| 52 | fn | runtimeOutput | (private) |
| 56 | fn | approvalDisplayId | (private) |
| 62 | fn | pendingApprovalSnapshot | (private) |
| 94 | fn | terminalApprovalSnapshot | (private) |
| 128 | fn | createProgram | (private) |
| 135 | fn | runApprovalsCommand | (private) |

## src/cli/exec-approvals-cli.test.ts (956 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | stringifyArgs | (private) |
| 99 | fn | requireRecord | (private) |
| 106 | fn | requireArray | (private) |
| 113 | fn | expectFields | (private) |
| 125 | fn | firstMockArg | (private) |
| 133 | fn | gatewayCall | (private) |
| 141 | fn | expectGatewayCall | (private) |
| 148 | fn | writtenJson | (private) |
| 153 | fn | effectivePolicy | (private) |
| 157 | fn | scopes | (private) |
| 161 | fn | scopeByLabel | (private) |
| 171 | fn | resetLocalSnapshot | (private) |
| 231 | fn | createProgram | (private) |
| 238 | fn | runApprovalsCommand | (private) |
| 243 | fn | runNativeApprovalsFileCommand | (private) |

## src/cli/exec-approvals-cli.ts (1314 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | FileExecApprovalsSnapshot | (private) |
| 54 | type | NativeExecApprovalAction | (private) |
| 55 | type | NativeExecApprovalRule | (private) |
| 62 | type | NativeExecApprovalPolicy | (private) |
| 66 | type | NativeExecApprovalsSnapshot | (private) |
| 76 | type | ExecApprovalsSnapshot | (private) |
| 78 | type | ConfigSnapshotLike | (private) |
| 81 | type | ConfigLoadResult | (private) |
| 85 | type | ApprovalsTargetSource | (private) |
| 86 | type | EffectivePolicyReport | (private) |
| 93 | type | ExecApprovalsCliOpts | (private) |
| 102 | type | PendingApprovalCliEntry | (private) |
| 118 | fn | readStdin | (private) |
| 129 | fn | readApprovalsFile | (private) |
| 142 | fn | resolveTargetNodeId | (private) |
| 153 | fn | loadSnapshot | (private) |
| 163 | fn | loadSnapshotLocal | (private) |
| 173 | fn | isFileApprovalsSnapshot | (private) |
| 179 | fn | isNativeApprovalsSnapshot | (private) |
| 185 | fn | isRecord | (private) |
| 189 | fn | parseNativeAction | (private) |
| 196 | fn | normalizeNativePolicyInput | (private) |
| 273 | fn | saveSnapshotLocal | (private) |
| 291 | fn | loadSnapshotTarget | (private) |
| 304 | fn | exitWithError | (private) |
| 310 | fn | requireTrimmedNonEmpty | (private) |
| 318 | fn | loadWritableSnapshotTarget | (private) |
| 345 | type | SaveSnapshotTargetedParams | (private) |
| 353 | fn | saveSnapshotTargeted | (private) |
| 378 | fn | formatCliError | (private) |
| 385 | fn | isApprovalDecision | (private) |
| 389 | fn | shortenPendingApprovalSummary | (private) |
| 396 | fn | escapeApprovalTextForTerminal | (private) |
| 423 | fn | formatApprovalIdForTerminal | (private) |
| 430 | fn | decodeDisplayedApprovalId | (private) |
| 442 | fn | readPendingApprovalEntry | (private) |
| 496 | fn | readPendingApprovalList | (private) |
| 506 | fn | loadPendingApprovals | (private) |
| 511 | fn | listCall | (private) |
| 525 | fn | formatPendingAgentSession | (private) |
| 532 | fn | renderPendingApprovals | (private) |
| 571 | fn | approvalRecordedDecision | (private) |
| 575 | fn | formatResolver | (private) |
| 585 | fn | describeTerminalApprovalFailure | (private) |
| 596 | fn | resolvePendingApproval | (private) |
| 625 | fn | lookupOne | (private) |
| 721 | fn | loadConfigForApprovalsTarget | (private) |
| 746 | fn | buildEffectivePolicyReport | (private) |
| 812 | fn | renderEffectivePolicy | (private) |
| 814 | fn | heading | (private) |
| 815 | fn | muted | (private) |
| 849 | fn | renderApprovalsSnapshot | (private) |
| 855 | fn | heading | (private) |
| 856 | fn | muted | (private) |
| 936 | fn | renderNativeApprovalsSnapshot | (private) |
| 938 | fn | heading | (private) |
| 939 | fn | muted | (private) |
| 989 | fn | saveSnapshot | (private) |
| 1001 | fn | resolveAgentKey | (private) |
| 1006 | fn | normalizeAllowlistEntry | (private) |
| 1011 | fn | ensureAgent | (private) |
| 1018 | fn | isEmptyAgent | (private) |
| 1029 | fn | loadWritableAllowlistAgent | (private) |
| 1056 | type | WritableAllowlistAgentContext | (private) |
| 1059 | type | AllowlistMutation | (private) |
| 1061 | fn | runAllowlistMutation | (private) |
| 1087 | fn | registerAllowlistMutationCommand | (private) |
| 1106 | fn | registerExecApprovalsCli | pub |
| 1107 | fn | formatExample | (private) |
| 1178 | fn | muted | (private) |

## src/cli/exec-policy-cli.test.ts (736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | mockRollbackApprovalSnapshots | (private) |
| 15 | fn | expectFields | (private) |
| 25 | fn | readLastJsonWrite | (private) |
| 35 | fn | readFirstPolicyScope | (private) |
| 45 | fn | readFirstReplaceConfigArg | (private) |
| 59 | fn | stringifyArgs | (private) |
| 208 | fn | createProgram | (private) |
| 215 | fn | runExecPolicyCommand | (private) |

## src/cli/gateway-cli.coverage.test.ts (810 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | DiscoveredBeacon | (private) |
| 18 | type | UsageCostHandlerArgs | (private) |
| 132 | fn | createGatewayProgram | (private) |
| 139 | fn | runGatewayCommand | (private) |
| 143 | fn | expectGatewayExit | (private) |
| 147 | fn | firstMockArg | (private) |
| 309 | fn | seedUsage | (private) |

## src/cli/hooks-cli.ts (596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | HooksListOptions | pub |
| 36 | type | HookInfoOptions | pub |
| 40 | type | HooksCheckOptions | pub |
| 44 | type | HooksUpdateOptions | (private) |
| 49 | fn | mergeHookEntries | (private) |
| 53 | fn | buildHooksReport | (private) |
| 63 | fn | resolveHookForToggle | (private) |
| 83 | fn | buildConfigWithHookEnabled | (private) |
| 107 | fn | formatHookStatus | (private) |
| 117 | fn | formatHookName | (private) |
| 123 | fn | formatHookSource | (private) |
| 130 | fn | formatHookMissingSummary | (private) |
| 150 | fn | exitHooksCliWithError | (private) |
| 156 | fn | writeHooksOutput | (private) |
| 164 | fn | runHooksCliAction | (private) |
| 172 | fn | runOneShotHooksCliAction | (private) |
| 183 | fn | formatHooksList | pub |
| 259 | fn | formatHookInfo | pub |
| 380 | fn | formatHooksCheck | pub |
| 444 | fn | enableHook | (private) |
| 464 | fn | disableHook | (private) |
| 479 | fn | registerHooksCli | pub |

## src/cli/logs-cli.test.ts (1207 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 120 | fn | runLogsCli | (private) |
| 127 | fn | captureStdoutWrites | (private) |
| 136 | fn | captureStderrWrites | (private) |
| 145 | fn | withTimeZone | (private) |

## src/cli/logs-cli.ts (835 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | LogsTailPayload | (private) |
| 48 | type | LogsCliRuntimeModule | (private) |
| 50 | type | LogCursorState | (private) |
| 56 | type | GatewayRecoveryResult | (private) |
| 60 | type | GatewayRecoveryState | (private) |
| 69 | type | LogSourceIdentity | (private) |
| 78 | fn | loadLogsCliRuntime | (private) |
| 82 | type | LogsCliOptions | (private) |
| 105 | fn | parsePositiveInt | (private) |
| 116 | fn | normalizeLogTailPayloadSource | (private) |
| 123 | fn | buildLogSourceIdentity | (private) |
| 139 | fn | buildLogMetaRecord | (private) |
| 152 | fn | fetchGatewayLogs | (private) |
| 171 | fn | fetchLogs | (private) |
| 205 | fn | normalizeErrorMessage | (private) |
| 212 | fn | normalizeError | (private) |
| 216 | fn | shouldUseLocalLogsFallback | (private) |
| 230 | fn | buildLogsTailGatewayExtra | (private) |
| 243 | fn | shouldUsePassiveLocalLogsClient | (private) |
| 250 | fn | isImplicitLoopbackGatewayConnection | (private) |
| 261 | fn | isLocalGatewayRpcUnavailableError | (private) |
| 273 | fn | isPlainGatewayRequestCloseError | (private) |
| 277 | fn | isPlainGatewayRequestTimeoutError | (private) |
| 281 | fn | readSystemdJournalFallback | (private) |
| 340 | fn | normalizeTailText | (private) |
| 351 | fn | parseJournalctlOutput | (private) |
| 367 | fn | resolveLogsSystemdUnitName | (private) |
| 382 | fn | isTransientFollowError | (private) |
| 398 | fn | formatLogTimestamp | pub |
| 417 | fn | formatLogLine | (private) |
| 462 | fn | createLogWriters | (private) |
| 487 | fn | emitGatewayError | (private) |
| 527 | fn | registerLogsCli | pub |
| 550 | fn | abortGatewayRecoveryProbe | (private) |
| 556 | fn | clearConsumedGatewayRecovery | (private) |
| 583 | fn | startGatewayRecoveryProbe | (private) |

## src/cli/mcp-cli.test.ts (1038 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | createWorkspace | (private) |
| 62 | fn | writeProbeMcpServer | (private) |
| 70 | fn | send | (private) |
| 73 | fn | handle | (private) |
| 122 | fn | runMcpCommand | (private) |
| 126 | fn | lastLogLine | (private) |
| 130 | fn | lastErrorLine | (private) |
| 134 | fn | lastRuntimeLine | (private) |

## src/cli/mcp-cli.ts (1410 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | fail | (private) |
| 49 | fn | printJson | (private) |
| 53 | fn | parseCsvList | (private) |
| 64 | fn | collectOption | (private) |
| 68 | fn | parseKeyValueEntries | (private) |
| 85 | fn | parsePositiveNumberOption | (private) |
| 96 | fn | parseOAuthConfig | (private) |
| 113 | fn | clearMcpOAuthCredentialsForConfiguredServer | (private) |
| 123 | fn | hasOAuthAuth | (private) |
| 129 | fn | clearStaleMcpOAuthCredentialsForReplacement | (private) |
| 154 | fn | setOptionalField | (private) |
| 160 | type | McpStatusEntry | (private) |
| 176 | type | McpDoctorIssue | (private) |
| 181 | type | McpDoctorServerResult | (private) |
| 200 | fn | asRecord | (private) |
| 206 | fn | issue | (private) |
| 210 | fn | hasSensitiveKey | (private) |
| 214 | fn | hasLiteralSensitiveValue | (private) |
| 218 | fn | resolveConfiguredPath | (private) |
| 226 | fn | fileExists | (private) |
| 235 | fn | directoryExists | (private) |
| 244 | fn | isExecutable | (private) |
| 253 | fn | executableCandidates | (private) |
| 267 | fn | resolveEffectivePath | (private) |
| 280 | fn | commandExists | (private) |
| 306 | fn | collectMcpDoctorIssues | (private) |
| 417 | fn | probeMcpServerIssue | (private) |
| 448 | fn | buildMcpStatusEntries | (private) |
| 483 | fn | formatMcpProbeResult | (private) |
| 537 | fn | buildMcpProbeConfig | (private) |
| 552 | fn | applyMcpProbeInitializeTimeout | (private) |
| 566 | fn | probeMcpServersOrFail | (private) |
| 603 | fn | registerMcpCli | pub |

## src/cli/models-cli.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | ModelsCliRuntime | (private) |
| 8 | fn | createModuleLoader | (private) |
| 32 | fn | withModelsRuntime | (private) |
| 39 | fn | registerModelsCli | pub |

## src/cli/native-hook-relay-cli.test.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | fn | createReadableTextStream | (private) |
| 10 | fn | createWritableTextBuffer | (private) |
| 621 | fn | createHeldOpenTextStream | (private) |

## src/cli/nodes-camera.test.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | withCameraTempDir | (private) |
| 46 | fn | expectPathMissing | (private) |
| 56 | fn | cancelTrackedResponse | (private) |

## src/cli/plugins-authoring-command.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | createDemoMetadata | (private) |
| 43 | fn | createOptionalDemoMetadata | (private) |
| 65 | fn | writeSourceToolPluginProject | (private) |

## src/cli/plugins-authoring-command.ts (817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | JsonObject | (private) |
| 25 | type | PluginsBuildOptions | pub |
| 31 | type | PluginsValidateOptions | pub |
| 36 | type | PluginsInitOptions | pub |
| 43 | type | PluginScaffoldType | (private) |
| 45 | type | LoadedToolPlugin | (private) |
| 58 | fn | readJsonFile | (private) |
| 67 | fn | writeJsonFile | (private) |
| 71 | fn | jsStringLiteral | (private) |
| 75 | fn | normalizeRelativePath | (private) |
| 85 | fn | resolveRootDir | (private) |
| 89 | fn | resolveEntryPath | (private) |
| 103 | fn | readPackageManifest | (private) |
| 111 | fn | importToolPluginEntry | (private) |
| 130 | fn | loadToolPlugin | pub |
| 153 | fn | buildToolPluginManifest | pub |
| 184 | fn | buildToolPluginToolMetadata | (private) |
| 206 | fn | buildToolPluginPackageManifest | pub |
| 229 | fn | validateToolPluginProject | pub |
| 282 | fn | runPluginsBuildCommand | pub |
| 320 | fn | runPluginsValidateCommand | pub |
| 347 | fn | assertCanCreate | (private) |
| 353 | fn | resolveScaffoldType | (private) |
| 365 | fn | normalizeDisplayName | (private) |
| 373 | fn | normalizePluginId | (private) |
| 381 | fn | titleFromId | (private) |
| 389 | fn | upperSnakeFromId | (private) |
| 396 | fn | lowerCamelFromId | (private) |
| 403 | fn | createConfigSchema | (private) |
| 411 | fn | buildScaffoldTsconfig | (private) |
| 426 | fn | writeScaffoldVitestConfig | (private) |
| 441 | fn | writeToolPluginScaffold | (private) |
| 531 | fn | writeProviderPluginScaffold | (private) |
| 617 | fn | buildProvider | (private) |
| 795 | fn | runPluginsInitCommand | pub |

## src/cli/plugins-cli-test-helpers.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | UnknownMock | (private) |
| 11 | type | AsyncUnknownMock | (private) |
| 12 | type | LoadConfigFn | (private) |
| 13 | type | ParseClawHubPluginSpecFn | (private) |
| 14 | type | InstallPluginFromMarketplaceFn | (private) |
| 16 | type | InstallPluginFromGitSpecFn | (private) |
| 18 | type | ParseGitPluginSpecFn | (private) |
| 19 | type | ListMarketplacePluginsFn | (private) |
| 21 | type | ResolveMarketplaceInstallShortcutFn | (private) |
| 23 | type | UpdateNpmInstalledPluginsFn | (private) |
| 25 | type | UpdateNpmInstalledHookPacksFn | (private) |
| 27 | type | PluginInstallRecordMap | (private) |
| 29 | fn | createEmptyUninstallActions | (private) |
| 45 | fn | clonePluginInstallRecords | (private) |
| 51 | fn | invokeMock | (private) |
| 98 | class | PromptInputClosedError | pub |
| 117 | fn | stringifyArgs | (private) |
| 118 | fn | normalizeStdout | (private) |
| 119 | fn | stringifyJson | (private) |
| 151 | fn | setInstalledPluginIndexInstallRecords | pub |
| 155 | fn | restoreRuntimeCaptureMocks | (private) |
| 705 | fn | runPluginsCommand | pub |
| 712 | fn | resetPluginsCliTestState | pub |

## src/cli/plugins-cli.install.test.ts (3107 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | cliInstallPath | (private) |
| 69 | fn | useProfileExtensionsDir | (private) |
| 74 | fn | createEnabledPluginConfig | (private) |
| 86 | fn | createEmptyPluginConfig | (private) |
| 94 | fn | createClawHubInstallResult | (private) |
| 149 | fn | createNpmPluginInstallResult | (private) |
| 165 | fn | createNpmPackPluginInstallResult | (private) |
| 187 | fn | createGitPluginInstallResult | (private) |
| 205 | fn | mockClawHubPackageNotFound | (private) |
| 213 | fn | primeNpmPluginFallback | (private) |
| 230 | fn | primeSuccessfulPluginPersistence | (private) |
| 245 | fn | createPathHookPackInstalledConfig | (private) |
| 261 | fn | createNpmHookPackInstalledConfig | (private) |
| 276 | fn | createHookPackInstallResult | (private) |
| 294 | fn | primeHookPackNpmFallback | (private) |
| 318 | fn | primeBlockedNpmPluginInstall | (private) |
| 332 | fn | primeHookPackPathFallback | (private) |
| 349 | type | MockWithCalls | (private) |
| 355 | type | PluginInstallCall | (private) |
| 377 | type | PersistedInstallRecord | (private) |
| 379 | fn | mockCallArg | (private) |
| 390 | fn | marketplaceInstallCall | (private) |
| 394 | fn | clawHubInstallCall | (private) |
| 398 | fn | npmInstallCall | (private) |
| 402 | fn | npmPackInstallCall | (private) |
| 406 | fn | gitInstallCall | (private) |
| 410 | fn | pathInstallCall | (private) |
| 414 | fn | hookPathInstallCall | (private) |
| 418 | fn | hookNpmInstallCall | (private) |
| 422 | fn | persistedInstallRecords | (private) |
| 429 | fn | persistedInstallRecord | (private) |
| 437 | fn | replaceConfigCall | (private) |
| 444 | fn | recordHookInstallCall | (private) |
| 448 | fn | runtimeLogsContain | (private) |
| 452 | fn | setTty | (private) |
| 463 | fn | restoreTty | (private) |
| 478 | fn | withNonClawHubInstallAcknowledgement | (private) |
| 485 | fn | runAcknowledgedPluginsInstallCommand | (private) |
| 489 | fn | primeBlockedPluginConfigMutation | (private) |
| 537 | fn | primeNestedPluginConfigMutation | (private) |
| 574 | fn | primeBlockedRootConfigMutation | (private) |
| 601 | fn | primeBlockedHookConfigMutation | (private) |

## src/cli/plugins-cli.list.test.ts (667 lines)

_No symbols extracted._

## src/cli/plugins-cli.runtime.ts (937 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | PluginInstallActionOptions | (private) |
| 37 | fn | createModuleLoader | (private) |
| 50 | fn | countEnabledPlugins | (private) |
| 54 | fn | formatRegistryState | (private) |
| 64 | fn | reportMissingPlugin | (private) |
| 69 | fn | matchesPluginId | (private) |
| 73 | fn | isConfigSelectedShadowDiagnostic | (private) |
| 81 | fn | isErroredConfigSelectedShadowDiagnostic | (private) |
| 96 | fn | formatConfiguredRuntimePluginInstallSpec | (private) |
| 110 | fn | pluginIdListIncludes | (private) |
| 114 | fn | formatBlockedRuntimePluginGuidance | (private) |
| 135 | fn | formatDisabledRuntimePluginGuidance | (private) |
| 150 | fn | collectConfiguredRuntimePluginWarnings | (private) |
| 190 | fn | runPluginsEnableCommand | pub |
| 237 | fn | runPluginsDisableCommand | pub |
| 271 | fn | runPluginsInstallAction | pub |
| 286 | fn | runPluginsRegistryCommand | pub |
| 339 | fn | runPluginsDoctorCommand | pub |
| 454 | type | MarketplaceRefreshPayload | (private) |
| 476 | type | MarketplaceFeedTrustPayload | (private) |
| 484 | type | MarketplaceEntryPayload | (private) |
| 500 | type | MarketplaceFeedTelemetryOptions | (private) |
| 507 | fn | classifyMarketplaceFeedFallback | (private) |
| 533 | fn | emitMarketplaceFeedTelemetry | (private) |
| 599 | fn | buildMarketplaceRefreshPayload | (private) |
| 637 | fn | redactMarketplaceFeedUrl | (private) |
| 650 | fn | replaceAllLiteral | (private) |
| 654 | fn | redactMarketplaceOutputText | (private) |
| 668 | fn | sanitizeMarketplaceRefreshPayload | (private) |
| 685 | fn | formatMarketplaceEntryInstall | (private) |
| 692 | fn | formatMarketplaceEntryLine | (private) |
| 700 | fn | formatMarketplaceRefreshSource | (private) |
| 710 | fn | formatMarketplaceFeedTrust | (private) |
| 714 | fn | shouldFailPinnedMarketplaceRefresh | (private) |
| 721 | fn | normalizeMarketplaceExpectedSha256 | (private) |
| 736 | fn | formatPinnedMarketplaceRefreshFailure | (private) |
| 741 | fn | runPluginMarketplaceEntriesCommand | pub |
| 825 | fn | runPluginMarketplaceRefreshCommand | pub |
| 898 | fn | runPluginMarketplaceListCommand | pub |

## src/cli/plugins-cli.uninstall.test.ts (567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | expectRuntimeLogIncludes | (private) |
| 32 | fn | expectLatestUninstallPlanParams | (private) |

## src/cli/plugins-cli.update.test.ts (1635 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | setTty | (private) |
| 43 | fn | restoreTty | (private) |
| 56 | fn | createTrackedPluginConfig | (private) |
| 75 | fn | expectRestartNoticeLogged | (private) |
| 83 | fn | expectSingleCallParams | (private) |
| 92 | fn | primeUpdateConfigSnapshot | (private) |
| 137 | fn | primeBlockedUpdateConfig | (private) |

## src/cli/plugins-install-command.ts (1278 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | ConfigSnapshotForInstallExecution | (private) |
| 82 | fn | isClawHubBlockedCliFailure | (private) |
| 90 | fn | resolveInstallMode | (private) |
| 94 | fn | resolveInstallSafetyOverrides | (private) |
| 102 | fn | probeHookPackFromNpmSpec | (private) |
| 112 | fn | probeHookPackFromPath | (private) |
| 125 | fn | supportsPluginRecoveryIncludeShape | (private) |
| 132 | fn | resolveFullyBlockedConfigMutationReason | (private) |
| 144 | fn | assertPluginConfigMutationAllowed | (private) |
| 150 | fn | tryInstallHookPackFromLocalPath | (private) |
| 242 | fn | tryInstallHookPackFromNpmSpec | (private) |
| 285 | fn | tryInstallPluginOrHookPackFromNpmSpec | (private) |
| 413 | fn | tryInstallPluginFromNpmPackArchive | (private) |
| 463 | fn | tryInstallPluginFromGitSpec | (private) |
| 503 | fn | isTerminalPluginInstallFailure | (private) |
| 511 | fn | isAllowedPluginRecoveryIssue | (private) |
| 533 | fn | buildInvalidPluginInstallConfigError | (private) |
| 539 | fn | extractMissingPluginLoadPath | (private) |
| 552 | fn | collectRequestedPluginInstallPaths | (private) |
| 572 | fn | isOwnedMissingPluginLoadPathIssue | (private) |
| 581 | fn | collectRequestedPluginLocationBridgePaths | (private) |
| 597 | fn | removeOwnedMissingPluginLoadPaths | (private) |
| 636 | fn | resolveRequestedPluginInstallPaths | (private) |
| 662 | fn | loadConfigFromSnapshotForInstall | (private) |
| 721 | fn | loadConfigForInstall | (private) |
| 758 | fn | runPluginInstallCommand | pub |

## src/cli/plugins-install-config.test.ts (962 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | fn | makeSnapshot | (private) |

## src/cli/program.force.test.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | PortProcess | (private) |
| 471 | fn | makeNetstatOutput | (private) |
| 479 | fn | makeLocalizedNetstatOutput | (private) |

## src/cli/program.nodes-basic.e2e.test.ts (1008 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | GatewayCallRequest | (private) |
| 20 | fn | formatRuntimeLogCallArg | (private) |
| 40 | fn | createProgram | (private) |
| 47 | fn | runProgram | (private) |
| 52 | fn | getRuntimeOutput | (private) |
| 56 | fn | gatewayRequests | (private) |
| 60 | fn | writeJsonArgAt | (private) |
| 69 | fn | expectGatewayRequest | (private) |
| 77 | fn | mockGatewayWithIosNodeListAnd | (private) |

## src/cli/proxy-cli.runtime.test.ts (511 lines)

_No symbols extracted._

## src/cli/qr-cli.test.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | createRemoteQrConfig | (private) |
| 76 | fn | createTailscaleRemoteRefConfig | (private) |
| 88 | fn | createDefaultSecretProvider | (private) |
| 96 | fn | createLocalGatewayConfigWithAuth | (private) |
| 107 | fn | createLocalGatewayPasswordRefAuth | (private) |
| 114 | fn | createLocalGatewayEnvPasswordRefAuth | (private) |
| 121 | fn | createProgram | (private) |
| 127 | fn | runQr | (private) |
| 132 | fn | expectQrExit | (private) |
| 136 | fn | readRuntimeCallText | (private) |
| 144 | fn | parseLastLoggedQrJson | (private) |
| 157 | fn | expectLoggedSetupCode | (private) |
| 165 | fn | expectLoggedLocalSetupCode | (private) |
| 169 | fn | expectLimitedTransportWarning | (private) |
| 175 | fn | mockTailscaleStatusLookup | (private) |

## src/cli/run-main.exit.test.ts (3904 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ConfigSnapshotStub | (private) |
| 26 | type | ConfigSnapshotReadOptionsStub | (private) |
| 110 | type | GatewayRunCommandHooks | (private) |
| 113 | type | CliExecutionBootstrapOptions | (private) |
| 149 | class | MockCommanderError | (private) |
| 160 | class | MockCommand | (private) |
| 371 | fn | makeProxyHandle | (private) |
| 379 | fn | withInteractiveTty | (private) |
| 651 | fn | beforeStateMigrations | (private) |

## src/cli/run-main.test.ts (597 lines)

_No symbols extracted._

## src/cli/run-main.ts (1442 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | loadRootHelpLiveConfigModule | (private) |
| 76 | fn | loadRootHelpMetadataModule | (private) |
| 77 | fn | loadLoggingModule | (private) |
| 78 | fn | loadCliRegistryLoaderModule | (private) |
| 79 | fn | loadManifestCommandAliasesRuntimeModule | (private) |
| 81 | fn | loadProxyLifecycleModule | (private) |
| 82 | fn | loadProgressModule | (private) |
| 84 | fn | isRemoteAgentDispatchInvocation | (private) |
| 88 | fn | isGatewayRunFastPathArgv | pub |
| 130 | fn | isGatewayRunInvocationArgv | (private) |
| 138 | fn | tryRunGatewayRunFastPath | (private) |
| 184 | fn | beforeRun | (private) |
| 245 | fn | closeCliMemoryManagers | (private) |
| 259 | fn | disposeCliAgentHarnesses | (private) |
| 273 | fn | isUnconfiguredConfigSnapshot | (private) |
| 285 | fn | shouldStartOnboardingForFreshInstall | pub |
| 294 | type | BareRootLaunchTarget | (private) |
| 314 | fn | resolveBareRootLaunchTarget | (private) |
| 331 | fn | resolveConfiguredTuiLaunchTarget | (private) |
| 381 | type | GatewayProbeTarget | (private) |
| 389 | type | ReachableGateway | (private) |
| 398 | type | GatewayResolution | (private) |
| 405 | type | GatewayProbeAuth | (private) |
| 411 | fn | toReachableGateway | (private) |
| 422 | fn | resolveReachableGateway | (private) |
| 488 | fn | resolveGatewayProbeAuth | (private) |
| 510 | fn | resolveGatewayProbeTargets | (private) |
| 529 | fn | isSafeGatewayProbeTarget | (private) |
| 538 | fn | isSafeRemoteGatewayProbeUrl | (private) |
| 562 | fn | isLoopbackGatewayHost | (private) |
| 572 | fn | resolveValidatedRemoteGatewayUrl | (private) |
| 585 | fn | resolveLocalGatewayProbeTargets | (private) |
| 648 | fn | pauseNonTtyStdinForCliExit | (private) |
| 660 | fn | resolveMissingPluginCommandMessage | pub |
| 672 | fn | shouldLoadCliDotEnv | (private) |
| 680 | fn | isCommanderParseExit | (private) |
| 693 | fn | findCommandOption | (private) |
| 699 | fn | findSubcommand | (private) |
| 705 | fn | shouldOptionConsumeFollowingToken | (private) |
| 719 | fn | isNoColorConsumedAsCommandOptionValue | (private) |
| 749 | fn | isLogLevelConsumedAsCommandOption | (private) |
| 784 | fn | normalizeRootNoColorArgvForProgram | (private) |
| 791 | fn | normalizeRootLogLevelArgvForProgram | (private) |
| 798 | fn | ensureCliEnvProxyDispatcher | (private) |
| 812 | fn | shouldBootstrapCliProxyBeforeFastPath | (private) |
| 825 | fn | isKnownBuiltInCommandRoot | (private) |
| 832 | fn | isPluginCliRoot | (private) |
| 849 | fn | createAllowlistAgnosticCliLookupConfig | (private) |
| 862 | fn | resolveCliCommandSurfaceOwner | (private) |
| 889 | fn | resolveUnownedCliPrimaryCandidate | (private) |
| 903 | fn | resolveUnownedCliPrimary | (private) |
| 918 | fn | resolveUnownedCliPrimaryMessage | (private) |
| 946 | fn | bootstrapCliProxyCaptureAndDispatcher | (private) |
| 966 | fn | runCli | pub |
| 1048 | fn | uninstallProxySignalHandlers | (private) |
| 1062 | fn | stopStartedProxy | (private) |
| 1073 | fn | killStartedProxy | (private) |
| 1078 | fn | installProxySignalHandlers | (private) |
| 1083 | fn | shutdown | (private) |
| 1095 | fn | replaceStartedProxy | (private) |
| 1272 | fn | stopStartupProgress | (private) |

## src/cli/secrets-cli.test.ts (614 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | createManualSecretsPlan | (private) |
| 83 | fn | createConfigureInteractiveResult | (private) |
| 112 | fn | createConfigureInteractiveResultWithPlanBytes | (private) |
| 135 | fn | createSecretsApplyResult | (private) |
| 155 | fn | withPlanFile | (private) |
| 172 | fn | createProgram | (private) |

## src/cli/skills-cli.commands.test.ts (1527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | stringifyArgs | (private) |
| 131 | fn | mockCall | (private) |
| 140 | fn | mockFirstObjectArg | (private) |
| 148 | fn | expectObjectFields | (private) |
| 158 | fn | expectLogger | (private) |
| 164 | fn | expectStatusWorkspaceCall | (private) |
| 237 | fn | createProgram | (private) |
| 244 | fn | runCommand | (private) |
| 341 | fn | withCwd | (private) |
| 350 | fn | routeWorkspaceByAgent | (private) |

## src/cli/skills-cli.test.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | createMockSkill | (private) |
| 45 | fn | createMockReport | (private) |

## src/cli/skills-cli.ts (1119 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | SkillStatusReport | (private) |
| 76 | type | ResolvedClawHubSkillVerificationTarget | (private) |
| 81 | fn | resolveSkillClawHubRiskOptions | (private) |
| 95 | fn | formatSkillWarning | (private) |
| 99 | fn | formatClawHubSearchText | (private) |
| 103 | fn | isClawHubSkillBlockedCliFailure | (private) |
| 111 | type | ResolveSkillsWorkspaceOptions | (private) |
| 116 | type | ResolvedSkillsWorkspace | (private) |
| 120 | fn | resolveSkillsWorkspace | (private) |
| 139 | fn | resolveAgentOption | (private) |
| 146 | fn | loadGatewaySkillsStatusReport | (private) |
| 164 | fn | loadSkillsStatusReport | (private) |
| 179 | fn | runSkillsAction | (private) |
| 192 | fn | resolveSkillsWorkspaceForCommand | (private) |
| 199 | fn | resolveClawHubTargetWorkspaceDir | (private) |
| 206 | fn | resolveClawHubTargetWorkspace | (private) |
| 222 | fn | shouldFailSkillVerification | (private) |
| 227 | fn | buildSkillVerificationOutput | (private) |
| 246 | fn | readVerifiedSkillCardUrl | (private) |
| 263 | fn | formatSkillProposalList | (private) |
| 274 | fn | formatSkillProposalInspect | (private) |
| 300 | fn | formatSkillCuratorStatus | (private) |
| 301 | fn | timestamp | (private) |
| 333 | fn | loadGatewaySkillCuratorStatus | (private) |
| 354 | fn | loadSkillCuratorStatus | (private) |
| 359 | fn | runSkillCuratorMutation | (private) |
| 385 | fn | readSkillProposalInput | (private) |
| 406 | fn | registerSkillsCli | pub |
| 726 | fn | showCuratorStatus | (private) |

## src/cli/update-cli.test.ts (8193 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | isCancel | (private) |
| 36 | type | ClawHubRiskHandler | (private) |
| 159 | fn | parse | (private) |
| 458 | fn | requireValue | (private) |
| 465 | type | UpdateCliScenario | (private) |
| 476 | fn | createCaseDir | (private) |
| 482 | fn | createTrackedTempDir | (private) |
| 504 | fn | setTty | (private) |
| 511 | fn | setStdoutTty | (private) |
| 518 | fn | mockPackageInstallStatus | (private) |
| 533 | fn | expectUpdateCallChannel | (private) |
| 538 | fn | commandCalls | (private) |
| 543 | fn | packageInstallCommandCall | (private) |
| 546 | fn | packagePackCommandCall | (private) |
| 549 | fn | stripOpenClawPackageAlias | (private) |
| 556 | fn | isNpmGitPackageSpec | (private) |
| 590 | fn | doctorCommandCall | (private) |
| 598 | fn | doctorCommandCallIndex | (private) |
| 606 | fn | gatewayCommandCall | (private) |
| 611 | fn | spawnCall | (private) |
| 618 | fn | spawnSyncCall | (private) |
| 625 | fn | syncPluginCall | (private) |
| 632 | fn | npmPluginUpdateCall | (private) |
| 638 | fn | lastNpmPluginUpdateCall | (private) |
| 658 | fn | replaceConfigCall | (private) |
| 659 | fn | lastReplaceConfigCall | (private) |
| 661 | fn | setupConfigMutationWithRetryMock | (private) |
| 688 | fn | writeJsonCall | (private) |
| 689 | fn | lastWriteJsonCall | (private) |
| 692 | fn | probeGatewayCall | (private) |
| 694 | fn | pluginWarning | (private) |
| 695 | fn | pluginOutcome | (private) |
| 697 | fn | expectPackageInstallSpec | (private) |
| 777 | fn | mockOwnedGitService | (private) |
| 787 | fn | runUpdateCliScenario | (private) |
| 793 | fn | runRestartFallbackScenario | (private) |
| 814 | fn | setupNonInteractiveDowngrade | (private) |
| 836 | fn | setupUpdatedRootRefresh | (private) |

## src/commands/agent-via-gateway.test.ts (2281 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | mockConfig | (private) |
| 77 | fn | withTempStore | (private) |
| 91 | fn | mockGatewaySuccessReply | (private) |
| 102 | fn | mockLocalAgentReply | (private) |
| 112 | fn | requireFirstCallArg | (private) |
| 124 | fn | requireRecord | (private) |
| 131 | fn | createSignalProcess | (private) |
| 132 | type | SignalName | (private) |
| 159 | fn | waitForAgentCommandCall | (private) |
| 163 | fn | waitForGatewayCall | (private) |
| 167 | fn | mockMessages | (private) |
| 172 | fn | createGatewayTimeoutError | (private) |
| 186 | fn | createGatewayClosedError | (private) |
| 201 | fn | createGatewayNormalCloseError | (private) |
| 239 | fn | resetAgentCliCommandMocksForTest | (private) |
| 526 | fn | writer | (private) |

## src/commands/agent-via-gateway.ts (1039 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | AgentGatewayResult | (private) |
| 55 | type | GatewayAgentResponse | (private) |
| 71 | type | AgentCliOpts | (private) |
| 94 | type | AgentDispatchOpts | (private) |
| 98 | type | AgentCliSignal | (private) |
| 99 | type | AgentCliProcessLike | (private) |
| 103 | type | AgentCliDeps | (private) |
| 106 | type | AgentGatewayCallIdentity | (private) |
| 110 | type | AgentSessionModule | (private) |
| 111 | type | AgentSessionModuleLoader | (private) |
| 141 | fn | resolveGatewayAbortRetryDelaysMs | (private) |
| 148 | fn | loadRuntimeConfig | (private) |
| 174 | fn | protectJsonStdout | (private) |
| 180 | fn | missingAgentMessageError | (private) |
| 186 | fn | formatMessageFileReadFailure | (private) |
| 204 | fn | readAgentMessageFile | (private) |
| 238 | fn | resolveAgentMessageOpts | (private) |
| 262 | fn | parseTimeoutSeconds | (private) |
| 275 | fn | resolveGatewayAgentTimeoutMs | (private) |
| 282 | fn | getGatewayDispatchConfig | (private) |
| 293 | fn | formatPayloadForLog | (private) |
| 314 | fn | isGatewayAgentTimeoutError | (private) |
| 321 | fn | isCompactControlCommand | (private) |
| 325 | fn | isSessionResetCommand | (private) |
| 329 | fn | shouldRetryGatewayDispatchWithShellEnvFallback | (private) |
| 337 | fn | resolveGatewayAgentEmbeddedFallbackReason | (private) |
| 348 | fn | isTransientGatewayAgentConnectClose | (private) |
| 357 | fn | validateExplicitSessionKeyForDispatch | (private) |
| 384 | fn | normalizeSessionKeyOptsForDispatch | (private) |
| 421 | fn | isAbortError | (private) |
| 425 | fn | readAcceptedRunContext | (private) |
| 444 | fn | createAgentCliSignalBridge | (private) |
| 448 | fn | detachHandlers | (private) |
| 455 | fn | handler | (private) |
| 473 | fn | isAgentCliProcessLike | (private) |
| 482 | fn | resolveAgentCliProcessLike | (private) |
| 490 | fn | createAbortDelayError | (private) |
| 494 | fn | delayMs | (private) |
| 503 | fn | onAbort | (private) |
| 512 | fn | isConfirmedChatAbortResponseForRun | (private) |
| 526 | fn | abortAcceptedGatewayAgentRunWithRequest | (private) |
| 567 | fn | abortAcceptedGatewayAgentRunWithGatewayCall | (private) |
| 606 | fn | abortAcceptedGatewayAgentRunOnActiveConnection | (private) |
| 632 | fn | exitForReceivedSignal | (private) |
| 640 | fn | returnAfterSignalExit | (private) |
| 648 | fn | createGatewayFallbackSessionId | (private) |
| 652 | fn | createGatewayFallbackSession | (private) |
| 663 | fn | resolveAgentIdForGatewayFallback | (private) |
| 694 | fn | buildGatewayJsonResponse | (private) |
| 705 | fn | isInFlightGatewayAgentResponse | (private) |
| 709 | fn | formatInFlightGatewayAgentMessage | (private) |
| 715 | fn | agentViaGatewayCommand | (private) |
| 797 | fn | dispatchGatewayAgentCall | (private) |
| 852 | fn | consumeShellEnvFallbackRetry | (private) |
| 917 | fn | agentViaGatewayCommandWithTransientRetries | (private) |
| 945 | fn | agentCliCommand | pub |

## src/commands/agent.acp.test.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | AgentEvent | (private) |
| 65 | fn | createAcpVisibleTextAccumulator | (private) |
| 134 | fn | withTempHome | (private) |
| 138 | fn | createAcpEnabledConfig | (private) |
| 157 | fn | mockConfig | (private) |
| 163 | fn | mockConfigWithAcpOverrides | (private) |
| 177 | fn | writeAcpSessionStore | (private) |
| 199 | fn | resolveReadySession | (private) |
| 217 | fn | mockAcpManager | (private) |
| 234 | fn | withAcpSessionEnv | (private) |
| 243 | fn | withAcpSessionEnvInfo | (private) |
| 254 | fn | createRunTurnFromTextDeltas | (private) |
| 266 | fn | subscribeAssistantEvents | (private) |
| 280 | fn | runAcpTurnWithAssistantEvents | (private) |
| 299 | fn | runAcpTurnWithTextDeltas | (private) |
| 314 | fn | expectPersistedAcpTranscript | (private) |
| 323 | fn | firstRunTurnInput | (private) |
| 329 | fn | runAcpSessionWithPolicyOverridesAndExpectBlocked | (private) |
| 350 | fn | expectAcpCommandRejects | (private) |

## src/commands/agent.test.ts (2043 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | createEmptyStore | (private) |
| 259 | fn | withTempHome | (private) |
| 267 | fn | mockConfig | (private) |
| 294 | fn | writeSessionStoreSeed | (private) |
| 309 | fn | createDefaultAgentResult | (private) |
| 322 | fn | getLastEmbeddedCall | (private) |
| 327 | fn | expectLastRunProviderModel | (private) |
| 333 | fn | readSessionStore | (private) |
| 339 | fn | expectSqliteSessionFileMarker | (private) |
| 355 | fn | runAgentWithSessionKey | (private) |
| 359 | fn | mockModelCatalogOnce | (private) |
| 364 | fn | installThinkingTestProviders | (private) |
| 527 | fn | runVoiceTurn | (private) |
| 710 | fn | finish | (private) |

## src/commands/agents.add.test.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 187 | fn | withAgentsAddStateRoot | (private) |

## src/commands/agents.delete.test.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | resolveFixtureStoreAgentId | (private) |
| 77 | fn | arrangeAgentsDeleteTest | (private) |
| 108 | fn | expectSessionStore | (private) |
| 123 | fn | readJsonLogs | (private) |

## src/commands/auth-choice-options.test.ts (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | ProviderWizardOption | (private) |
| 28 | fn | includesOnboardingScope | (private) |
| 95 | fn | getOptions | (private) |
| 104 | fn | requireChoiceGroup | (private) |

## src/commands/auth-choice.apply.plugin-provider.test.ts (734 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ResolveProviderInstallCatalogEntry | (private) |
| 15 | type | EnsureOnboardingPluginInstalled | (private) |
| 17 | type | ResolveManifestProviderAuthChoice | (private) |
| 19 | type | ResolvePluginSetupProvider | (private) |
| 21 | type | RunProviderModelSelectedHook | (private) |
| 113 | fn | buildProvider | (private) |
| 140 | fn | buildProviderWithDefaultModelPatch | (private) |
| 177 | fn | buildParams | (private) |
| 190 | fn | buildLocalProviderInstallCatalogEntry | (private) |
| 205 | fn | buildInstalledLocalProviderPluginResult | (private) |

## src/commands/auth-choice.test.ts (1234 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | DetectZaiEndpoint | (private) |
| 31 | type | ResolveDeprecatedProviderInstallCatalogEntry | (private) |
| 57 | fn | normalizeProviderIdLocal | (private) |
| 58 | fn | resolveChoiceByKind | (private) |
| 149 | type | StoredAuthProfile | (private) |
| 167 | fn | resolveTestAuthStoreKey | (private) |
| 171 | fn | readTestAuthProfileStore | (private) |
| 177 | fn | seedTestAuthProfile | (private) |
| 206 | fn | normalizeText | (private) |
| 210 | fn | normalizeProviderId | (private) |
| 214 | fn | resolveProviderPluginChoice | (private) |
| 245 | fn | providerConfigPatch | (private) |
| 259 | type | TestSecretRef | (private) |
| 260 | type | TestSecretInput | (private) |
| 262 | fn | normalizeProviderInput | (private) |
| 267 | fn | buildApiKeyCredential | (private) |
| 284 | fn | resolveRefApiKeyInput | (private) |
| 312 | fn | resolveApiKeyInput | (private) |
| 365 | fn | createApiKeyProvider | (private) |
| 427 | fn | createFixedChoiceProvider | (private) |
| 450 | fn | createDefaultProviderPlugins | (private) |
| 602 | fn | setupTempState | (private) |
| 612 | fn | createPrompter | (private) |
| 615 | fn | createSelectFirstOption | (private) |
| 618 | fn | createNoopMultiselect | (private) |
| 621 | fn | createApiKeyPromptHarness | (private) |
| 638 | fn | readAuthProfiles | (private) |
| 641 | fn | readAuthProfilesForAgentDir | (private) |
| 644 | fn | readAuthProfile | (private) |
| 647 | fn | expectAuthProfileConfig | (private) |
| 656 | fn | promptMessages | (private) |
| 662 | fn | expectPromptMessageContaining | (private) |
| 665 | fn | expectPromptMessage | (private) |
| 668 | fn | firstCallArg | (private) |

## src/commands/backup-verify.test.ts (1143 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createBackupVerifyRuntime | (private) |
| 23 | fn | createBackupManifest | (private) |
| 48 | fn | encodeTarEntry | (private) |
| 74 | fn | createArchiveWithManifestContent | (private) |
| 115 | fn | withBrokenArchiveFixture | (private) |
| 176 | fn | createSqlitePayload | (private) |

## src/commands/backup-verify.ts (795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | BackupManifestAsset | (private) |
| 31 | type | BackupManifest | (private) |
| 56 | type | BackupVerifyOptions | (private) |
| 61 | type | BackupVerifyResult | (private) |
| 71 | type | ArchiveEntry | (private) |
| 78 | type | NormalizedArchiveEntry | (private) |
| 85 | type | SqliteSnapshotEntry | (private) |
| 89 | type | ExpectedSqliteRole | (private) |
| 91 | fn | stripTrailingSlashes | (private) |
| 95 | fn | normalizeArchivePath | (private) |
| 117 | fn | normalizeArchiveRoot | (private) |
| 125 | fn | isArchivePathWithin | (private) |
| 130 | fn | parseManifest | (private) |
| 205 | fn | listArchiveEntries | (private) |
| 222 | fn | extractManifest | (private) |
| 254 | fn | isRootManifestEntry | (private) |
| 259 | fn | verifyManifestAgainstEntries | (private) |
| 291 | fn | verifyHardlinkTargetsAgainstArchiveRoot | (private) |
| 317 | fn | formatResult | (private) |
| 328 | fn | findDuplicateNormalizedEntryPath | (private) |
| 341 | fn | resolvePortableArchivePathKey | (private) |
| 345 | fn | findPortableArchiveEntryPathCollision | (private) |
| 360 | fn | isRegularArchiveFile | (private) |
| 364 | fn | resolveCanonicalStateAssetRoot | (private) |
| 394 | fn | isSqliteSnapshotRelativePath | (private) |
| 409 | fn | resolveSqliteSnapshotSidecarDatabasePath | (private) |
| 420 | fn | assertCanonicalSqlitePathCasing | (private) |
| 439 | fn | listSqliteSnapshotEntries | (private) |
| 511 | fn | resolveExpectedSqliteRole | (private) |
| 516 | fn | resolveExpectedSqliteRoleFromRelativePath | (private) |
| 535 | fn | resolveSqliteExtractionBytes | (private) |
| 552 | fn | assertSqliteExtractionBudget | (private) |
| 575 | fn | assertExpectedSqliteRole | (private) |
| 598 | fn | assertSqliteSnapshotFileShape | (private) |
| 633 | fn | verifySqliteSnapshots | (private) |
| 718 | fn | backupVerifyCommand | pub |

## src/commands/backup.test.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CapturedBackupManifest | (private) |
| 51 | fn | requireFirstMockArg | (private) |
| 60 | fn | mockWorkspaceBackupPlan | (private) |
| 103 | fn | withInvalidWorkspaceBackupConfig | (private) |
| 119 | fn | expectWorkspaceCoveredByState | (private) |
| 152 | fn | expectOnlyAssetKind | (private) |

## src/commands/channels.add.test.ts (1312 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | type | MockCallSource | (private) |
| 120 | fn | listConfiguredAccountIds | (private) |
| 133 | fn | requireRecord | (private) |
| 140 | fn | mockArg | (private) |
| 151 | fn | writtenConfig | (private) |
| 158 | fn | writtenChannel | (private) |
| 165 | fn | setupOptions | (private) |
| 172 | fn | setupChannelArg | (private) |
| 176 | fn | applyAccountConfigCall | (private) |
| 183 | fn | installCall | (private) |
| 195 | fn | snapshotCall | (private) |
| 207 | fn | refreshCall | (private) |
| 219 | fn | commitInstallCall | (private) |
| 231 | fn | expectExternalChatEnabledConfigWrite | (private) |
| 235 | fn | createLifecycleChatAddTestPlugin | (private) |
| 236 | fn | resolveLifecycleChatAccount | (private) |
| 330 | fn | setMinimalChannelsAddRegistryForTests | (private) |
| 342 | fn | registerExternalChatSetupPlugin | (private) |
| 348 | type | SignalAfterAccountConfigWritten | (private) |
| 351 | type | ApplyAccountConfigParams | (private) |
| 355 | fn | createSignalPlugin | (private) |
| 383 | fn | runSignalAddCommand | (private) |

## src/commands/channels.adds-non-default-telegram-account.test.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ChannelSectionConfig | (private) |
| 39 | fn | formatChannelStatusJoined | (private) |
| 51 | fn | listConfiguredAccountIds | (private) |
| 68 | fn | resolveScopedAccount | (private) |
| 89 | fn | createScopedCommandTestPlugin | (private) |
| 152 | fn | createTelegramCommandTestPlugin | (private) |
| 153 | fn | resolveTelegramAccount | (private) |
| 229 | fn | createMinimalChannelsCommandRegistryForTests | (private) |
| 324 | fn | setMinimalChannelsCommandRegistryForTests | (private) |
| 346 | fn | getWrittenConfig | (private) |
| 355 | fn | runRemoveWithConfirm | (private) |
| 363 | fn | addTelegramAccount | (private) |
| 369 | fn | addAlertsTelegramAccount | (private) |

## src/commands/channels.list.test.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | createMockChannelPlugin | (private) |
| 94 | fn | createCatalogEntry | (private) |
| 111 | fn | loggedText | (private) |

## src/commands/configure.gateway-auth.prompt-auth-config.test.ts (755 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 155 | fn | normalizeTestModelKeys | (private) |
| 215 | fn | makeRuntime | (private) |
| 223 | fn | promptModelAllowlistOptions | (private) |
| 236 | fn | promptDefaultModelOptions | (private) |
| 248 | fn | createKilocodeProvider | (private) |
| 259 | fn | createTestModel | (private) |
| 271 | fn | createApplyAuthChoiceConfig | (private) |
| 297 | fn | runPromptAuthConfigWithAllowlist | (private) |

## src/commands/configure.wizard.test.ts (875 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 195 | fn | createRuntime | (private) |
| 203 | fn | createSearchProviderOption | (private) |
| 207 | fn | createEnabledWebSearchConfig | (private) |
| 230 | fn | setupBaseWizardState | (private) |
| 266 | fn | requireRecord | (private) |
| 273 | fn | mockCallArg | (private) |
| 285 | fn | requireWriteConfig | (private) |
| 292 | fn | getGateway | (private) |
| 296 | fn | getWebSearch | (private) |
| 302 | fn | getPluginEntry | (private) |
| 308 | fn | queueWizardPrompts | (private) |
| 318 | fn | runWebConfigureWizard | (private) |

## src/commands/configure.wizard.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | ConfigureSectionChoice | (private) |
| 66 | type | SetupPluginConfigModule | (private) |
| 74 | fn | validateGatewayPortInput | (private) |
| 81 | fn | loadSetupPluginConfigModule | (private) |
| 85 | fn | resolveGatewaySecretInputForWizard | (private) |
| 102 | fn | runGatewayHealthCheck | (private) |
| 151 | fn | promptConfigureSection | (private) |
| 171 | fn | promptChannelMode | (private) |
| 193 | fn | promptWebToolsConfig | (private) |
| 198 | type | WebSearchConfig | (private) |
| 366 | fn | runConfigureWizard | pub |
| 385 | fn | readOwnedConfigSnapshot | (private) |
| 427 | fn | localProbePromise | (private) |
| 530 | fn | persistConfig | (private) |
| 576 | fn | configureWorkspace | (private) |
| 591 | fn | hasExistingContent | (private) |
| 629 | fn | configureChannelsSection | (private) |
| 645 | fn | promptDaemonPort | (private) |

## src/commands/daemon-install-helpers.test.ts (1833 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | hasPluginIntegrationProvider | (private) |
| 92 | fn | firstMockArg | (private) |
| 104 | fn | writeSecurePluginEntrypoint | (private) |
| 109 | fn | createSecurePluginRoot | (private) |
| 114 | fn | mockNodeGatewayPlanFixture | (private) |
| 158 | fn | buildPluginConfigExecSecretRefPlan | (private) |
| 253 | fn | isolatedPlanEnv | (private) |
| 1791 | fn | buildEnvironment | (private) |

## src/commands/daemon-install-helpers.ts (851 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | GatewayInstallPlan | (private) |
| 69 | fn | configContainsSecretRef | (private) |
| 90 | fn | isBlockedExecSecretRefPassEnvKey | (private) |
| 110 | fn | resolveAuthProfileStoreForServiceEnv | (private) |
| 126 | fn | collectAuthProfileSecretRefs | (private) |
| 145 | fn | collectAuthProfileServiceEnvVars | (private) |
| 177 | type | ExecSecretRefPassEnvSource | (private) |
| 182 | fn | collectConfigSecretRefServiceEnvSources | (private) |
| 237 | fn | collectExecSecretRefPassEnvServiceEnvVars | (private) |
| 342 | fn | collectPluginConfigSecretRefs | (private) |
| 358 | fn | mergeServicePath | (private) |
| 377 | fn | isSameOrChildPath | (private) |
| 379 | fn | isUnsafeProcPath | (private) |
| 422 | fn | shouldPreserveNormalizedPathSegment | (private) |
| 432 | fn | addPath | (private) |
| 466 | fn | collectPreservedExistingServiceEnvVars | (private) |
| 503 | fn | readExistingEnvironmentValueSource | (private) |
| 519 | fn | collectExistingEnvironmentFileManagedServiceEnvVars | (private) |
| 559 | fn | omitEnvironmentEntriesShadowedBy | (private) |
| 579 | fn | resolveGatewayInstallWorkingDirectory | (private) |
| 593 | fn | buildGatewayInstallEnvironment | (private) |
| 718 | fn | buildGatewayInstallPlan | pub |
| 815 | fn | normalizeServicePathForCompare | (private) |
| 826 | fn | isSameServicePath | (private) |
| 836 | fn | omitEnvKey | (private) |
| 846 | fn | gatewayInstallErrorHint | pub |

## src/commands/doctor-auth-flat-profiles.test.ts (1434 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makePrompter | (private) |
| 46 | fn | makeTestState | (private) |
| 58 | fn | writeLegacyAuthProfilesJson | (private) |

## src/commands/doctor-auth-flat-profiles.ts (1762 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | AuthProfileRepairCandidate | (private) |
| 45 | type | LegacyFlatAuthProfileStore | (private) |
| 51 | type | AuthProfileSqliteMigrationCandidate | (private) |
| 56 | type | AwsSdkProfileMarker | (private) |
| 63 | type | AwsSdkAuthProfileMarkerStore | (private) |
| 70 | type | RawAuthProfileImportStore | (private) |
| 76 | type | LegacyFlatAuthProfileRepairResult | (private) |
| 85 | fn | readNonEmptyString | (private) |
| 89 | fn | isSafeLegacyProviderKey | (private) |
| 93 | fn | extractProviderFromProfileId | (private) |
| 101 | fn | extractProviderFromModelRef | (private) |
| 110 | fn | collectLegacyConfigAuthProfileProviderHints | (private) |
| 181 | fn | inferLegacyCredentialType | (private) |
| 204 | fn | coerceLegacyFlatCredential | (private) |
| 257 | fn | coerceLegacyFlatAuthProfileStore | (private) |
| 279 | fn | addCandidate | (private) |
| 287 | fn | listExistingAgentDirsFromState | (private) |
| 307 | fn | listAuthProfileRepairCandidates | (private) |
| 327 | fn | listAuthProfileSqliteMigrationCandidates | (private) |
| 343 | fn | hasAuthProfileState | (private) |
| 347 | fn | normalizeLegacyApiKeyAliasesForImport | (private) |
| 368 | fn | collectAuthProfileStateProfileIds | (private) |
| 384 | fn | inferLegacyConfigAuthProfileMode | (private) |
| 419 | fn | coerceLegacyConfigAuthProfileStore | (private) |
| 490 | fn | isDefaultAgentCandidate | (private) |
| 498 | fn | stripImportedConfigAuthProfileCredentials | (private) |
| 521 | fn | hasUsableAuthProfileCredential | (private) |
| 535 | fn | mergeImportedAuthProfiles | (private) |
| 560 | fn | mergeImportedAuthProfileState | (private) |
| 607 | fn | formatMissingAuthProfileSqliteVerification | (private) |
| 647 | fn | filterRawAuthProfileState | (private) |
| 692 | fn | pruneRawAuthProfileIds | (private) |
| 702 | fn | pickRawAuthProfileIds | (private) |
| 721 | fn | collectUnresolvedLegacyOAuthSidecarProfileIds | (private) |
| 741 | fn | hasImportableAuthProfileStore | (private) |
| 745 | fn | hasLegacyAuthProfileSource | (private) |
| 753 | fn | backupAuthProfileJson | (private) |
| 759 | fn | backupAndRemoveAuthProfileJson | (private) |
| 769 | fn | writeJsonFile | (private) |
| 779 | fn | maybeMigrateAuthProfileJsonStoresToSqlite | pub |
| 1043 | fn | resolveLegacyFlatStore | (private) |
| 1063 | fn | backupAuthProfileStore | (private) |
| 1069 | fn | backupAwsSdkProfileMarkerStore | (private) |
| 1075 | fn | resolveAwsSdkAuthProfileMarkerStore | (private) |
| 1116 | fn | ensureConfigAuthProfiles | (private) |
| 1128 | fn | removeAwsSdkProfileMarkers | (private) |
| 1143 | fn | maybeRepairLegacyFlatAuthProfileStores | pub |
| 1247 | type | CanonicalApiKeyAliasRepair | (private) |
| 1253 | fn | resolveCanonicalApiKeyAliasRepair | (private) |
| 1282 | fn | backupCanonicalApiKeyAlias | (private) |
| 1294 | fn | maybeRepairCanonicalApiKeyFieldAlias | pub |
| 1367 | fn | isLegacyOpenAICodexProvider | (private) |
| 1373 | fn | isLegacyOpenAICodexProfileId | (private) |
| 1377 | fn | canonicalOpenAIProfileSuffix | (private) |
| 1381 | fn | allocateOpenAIProfileId | (private) |
| 1402 | fn | canonicalizeOpenAIProfileEntries | (private) |
| 1447 | fn | replaceMappedProfileId | (private) |
| 1476 | fn | rewriteMappedAuthProfileRefs | (private) |
| 1505 | fn | canonicalizeOpenAIAuthOrder | (private) |
| 1562 | fn | renameMappedProfileIdKeys | (private) |
| 1579 | fn | canonicalizeOpenAILastGood | (private) |
| 1609 | fn | maybeRepairOpenAICodexAuthConfig | pub |
| 1646 | type | OpenAICodexAuthStoreRepair | (private) |
| 1653 | fn | resolveOpenAICodexAuthStoreRepair | (private) |
| 1687 | fn | collectOpenAICodexAuthProfileStoreIdMap | pub |
| 1717 | fn | backupOpenAIProviderUnification | (private) |
| 1726 | fn | maybeRepairOpenAICodexAuthProfileStores | pub |

## src/commands/doctor-auth.profile-health.test.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | fn | writeAuthStore | (private) |
| 68 | fn | expectedAuthStorePath | (private) |
| 72 | fn | expiredStore | (private) |

## src/commands/doctor-auth.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | hasConfiguredCodexOAuthProfile | (private) |
| 59 | fn | hasStoredCodexOAuthProfile | (private) |
| 68 | fn | normalizeCodexOverrideBaseUrl | (private) |
| 75 | fn | isLegacyCodexTransportShape | (private) |
| 87 | fn | hasLegacyCodexTransportOverride | (private) |
| 101 | fn | buildCodexProviderOverrideWarning | (private) |
| 124 | fn | legacyCodexProviderOverrideToHealthFinding | (private) |
| 145 | fn | noteLegacyCodexProviderOverride | pub |
| 159 | type | AuthIssue | (private) |
| 167 | type | AuthProfileHealthTarget | (private) |
| 173 | fn | formatAgentNoteTitle | (private) |
| 177 | fn | listAuthProfileHealthTargets | (private) |
| 180 | fn | addTarget | (private) |
| 203 | fn | resolveUnusableProfileHint | (private) |
| 218 | fn | formatOAuthRefreshFailureReason | (private) |
| 236 | fn | formatOAuthRefreshFailureDoctorLine | (private) |
| 259 | fn | resolveAuthIssueHint | (private) |
| 284 | fn | formatAuthIssueLine | (private) |
| 296 | fn | resolveAuthProfileStorePath | (private) |
| 300 | fn | authProfileIssueToHealthFinding | (private) |
| 327 | fn | authProfileCooldownToHealthFinding | (private) |
| 347 | fn | isAuthProfileHealthIssue | (private) |
| 367 | fn | collectAuthProfileHealthFindingsForTarget | (private) |
| 434 | fn | collectAuthProfileHealthFindings | pub |
| 469 | fn | noteAuthProfileHealthForTarget | (private) |
| 479 | fn | noteTitle | (private) |
| 481 | fn | unusable | (private) |
| 515 | fn | findIssues | (private) |
| 572 | fn | noteAuthProfileHealth | pub |

## src/commands/doctor-config-flow.test.ts (3164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | TerminalNote | (private) |
| 34 | fn | asRecord | (private) |
| 40 | fn | ensureRecord | (private) |
| 50 | fn | migrateThreadBinding | (private) |
| 63 | fn | migrateStreamingAlias | (private) |
| 89 | fn | migrateNestedAllowAliases | (private) |
| 126 | fn | migrate | (private) |
| 302 | type | LegacyRule | (private) |
| 309 | fn | asRecord | (private) |
| 315 | fn | getPathValue | (private) |
| 327 | fn | addIssue | (private) |
| 335 | fn | hasLegacyStreamingAlias | (private) |
| 764 | fn | asRecord | (private) |
| 770 | fn | hasLegacyTalkFields | (private) |
| 780 | fn | resolveDiscordStreamMode | (private) |
| 797 | fn | normalizeDiscordStreamingEntry | (private) |
| 868 | fn | normalizeDiscordStreamingAliasesForTest | (private) |
| 965 | fn | asRecord | (private) |
| 971 | fn | hasOwnStringArray | (private) |
| 975 | fn | stringifySelectedArrays | (private) |
| 985 | fn | visit | (private) |
| 1010 | fn | collectCompatibilityMutations | (private) |
| 1030 | fn | collectInactiveTelegramWarnings | (private) |
| 1056 | fn | isTelegramFirstTimeAccount | (private) |
| 1078 | fn | collectTelegramFirstTimeExtraWarnings | (private) |
| 1154 | fn | asRecord | (private) |
| 1160 | fn | hasStringEntries | (private) |
| 1164 | fn | telegramFirstTimeWarnings | (private) |
| 1190 | fn | collectWarnings | (private) |
| 1263 | fn | resolveConfigPath | (private) |
| 1270 | fn | normalizeDiscordStreamingCompat | (private) |
| 1391 | fn | formatConfigPath | (private) |
| 1406 | fn | resolveConfigPathTarget | (private) |
| 1459 | fn | resetTerminalNoteMock | (private) |
| 1464 | fn | collectDoctorWarnings | (private) |
| 1479 | type | DiscordGuildRule | (private) |
| 1485 | type | DiscordAccountRule | (private) |
| 1492 | type | RepairedDiscordPolicy | (private) |

## src/commands/doctor-config-preflight.state-migration.test.ts (1048 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | StateMigrationResult | (private) |
| 17 | type | StartupConvergenceWarning | (private) |
| 24 | type | StartupSmokeFailure | (private) |
| 31 | type | StartupConvergenceResult | (private) |

## src/commands/doctor-config-preflight.ts (705 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | withLegacyCronWebhook | (private) |
| 61 | fn | measureStartupPreflightStep | (private) |
| 77 | fn | maybeMigrateLegacyConfig | (private) |
| 120 | type | DoctorConfigPreflightResult | pub |
| 126 | fn | collectDoctorLegacyIssues | (private) |
| 137 | fn | addDoctorLegacyIssues | (private) |
| 148 | fn | shouldSkipPluginValidationForDoctorConfigPreflight | pub |
| 154 | fn | noteStateMigrationResult | (private) |
| 171 | type | StartupPluginVerificationDiagnostic | (private) |
| 176 | type | StartupPluginConvergenceResult | (private) |
| 181 | fn | planStartupPluginVerification | (private) |
| 197 | fn | buildStartupPluginQuarantine | (private) |
| 210 | fn | isStartupPluginVerificationFailureActive | (private) |
| 222 | fn | formatStartupPluginSmokeFailure | (private) |
| 231 | fn | runStartupUpgradeConvergence | (private) |
| 295 | fn | refreshStartupPluginQuarantine | (private) |
| 353 | fn | formatStartupMigrationFailure | (private) |
| 365 | fn | formatStartupPluginVerificationFailure | (private) |
| 375 | fn | throwStartupMigrationRefusal | (private) |
| 381 | fn | throwStartupMigrationGuardRejected | (private) |
| 393 | fn | runDoctorConfigPreflight | pub |
| 428 | fn | noteStartupStateMigrationResult | (private) |

## src/commands/doctor-device-pairing.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | GatewayListedPairedDevice | (private) |
| 32 | type | GatewayDevicePairingPayload | (private) |
| 37 | type | DoctorPairedDevice | (private) |
| 41 | type | DoctorPairingSnapshot | (private) |
| 46 | type | PendingPairingIssue | (private) |
| 88 | type | PairedRecordIssue | (private) |
| 100 | type | LocalDeviceAuthIssue | (private) |
| 109 | fn | hasNumberVersion | (private) |
| 113 | fn | isDeviceAuthStoreTokenEntry | (private) |
| 129 | fn | normalizeGatewayPairedDevice | (private) |
| 136 | fn | normalizeLocalPairedDevice | (private) |
| 143 | fn | loadDoctorPairingSnapshot | (private) |
| 173 | fn | resolveApprovedScopes | (private) |
| 179 | fn | formatScopes | (private) |
| 183 | fn | formatRoles | (private) |
| 187 | fn | formatCliArgs | (private) |
| 191 | fn | describeDevice | (private) |
| 202 | fn | findTokenSummary | (private) |
| 210 | fn | hasPendingScopeUpgrade | (private) |
| 239 | fn | resolvePendingPairingIssue | (private) |
| 313 | fn | formatPendingPairingIssue | (private) |
| 329 | fn | collectPendingPairingIssues | (private) |
| 336 | fn | collectPairedRecordIssues | (private) |
| 398 | fn | formatPairedRecordIssue | (private) |
| 402 | fn | readJsonFile | (private) |
| 406 | fn | readLocalIdentity | (private) |
| 414 | fn | readLocalDeviceAuthStore | (private) |
| 445 | fn | collectLocalDeviceAuthIssues | (private) |
| 520 | fn | formatLocalDeviceAuthIssue | (private) |
| 524 | fn | formatLegacyPairingStoreIssue | (private) |
| 529 | fn | collectLegacyPairingStoreIssues | (private) |
| 539 | fn | stripListMarker | (private) |
| 543 | fn | pendingPairingIssueToHealthFinding | (private) |
| 559 | fn | pairedRecordIssueToHealthFinding | (private) |
| 571 | fn | localDeviceAuthIssueToHealthFinding | (private) |
| 583 | fn | legacyPairingStoreIssueToHealthFinding | (private) |
| 595 | fn | collectDevicePairingHealthFindings | pub |
| 623 | fn | noteDevicePairingHealth | pub |

## src/commands/doctor-gateway-daemon-flow.test.ts (802 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 199 | fn | setPlatform | (private) |
| 209 | fn | createPrompter | (private) |
| 228 | fn | runNonInteractiveUpdateRepair | (private) |
| 233 | fn | runNonInteractiveRepair | (private) |
| 248 | fn | runAutoRepair | (private) |
| 264 | fn | runScheduledGatewayRepairAndExpectVerificationSkipped | (private) |

## src/commands/doctor-gateway-daemon-flow.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | LaunchAgentBootstrapDoctorOutcome | (private) |
| 59 | fn | noteGatewayRuntime | (private) |
| 80 | fn | maybeRepairLaunchAgentBootstrap | (private) |
| 137 | fn | renderBlockingSystemGatewayServices | (private) |
| 147 | fn | renderEstablishedGatewayConnections | (private) |
| 163 | fn | maybeReportEstablishedGatewayClients | (private) |
| 187 | fn | maybeRepairGatewayDaemon | pub |

## src/commands/doctor-gateway-services.test.ts (1803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 147 | fn | makeDoctorIo | (private) |
| 151 | fn | makeDoctorPrompts | (private) |
| 170 | fn | mockProcessPlatform | (private) |
| 177 | fn | runRepair | (private) |
| 181 | fn | runNonInteractiveRepair | (private) |
| 220 | fn | createGatewayCommand | (private) |
| 227 | fn | requireRecord | (private) |
| 234 | fn | callArg | (private) |
| 242 | fn | expectCallField | (private) |
| 252 | fn | expectGatewayAuthToken | (private) |
| 259 | fn | readGatewayAuthToken | (private) |
| 275 | fn | expectCallConfigGatewayAuthToken | (private) |
| 286 | fn | expectNoteContaining | (private) |
| 293 | fn | expectNoNoteContaining | (private) |
| 300 | fn | setupGatewayEntrypointRepairScenario | (private) |
| 325 | fn | setupGatewayTokenRepairScenario | (private) |

## src/commands/doctor-gateway-services.ts (941 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | GatewayServiceConfigRepairOptions | (private) |
| 69 | fn | shouldSkipLegacyUpdateRepairConfigWrite | (private) |
| 76 | fn | updateParentAllowsGatewayActivation | (private) |
| 101 | fn | updateParentAllowsGatewayServiceRepair | (private) |
| 111 | fn | runLaunchctlQuietly | (private) |
| 115 | fn | detectGatewayRuntime | (private) |
| 129 | fn | findGatewayEntrypoint | (private) |
| 140 | fn | buildGatewayServiceRepairEnv | (private) |
| 153 | fn | resolveGatewayServiceWrapperPath | (private) |
| 159 | fn | buildExpectedGatewayServicePlan | (private) |
| 179 | fn | buildGatewayServiceAuditInputs | (private) |
| 199 | fn | normalizeExecutablePath | (private) |
| 208 | fn | extractDetailPath | (private) |
| 216 | fn | isExecStartRepairIssue | (private) |
| 220 | fn | resolveSystemdScopeFromServicePath | (private) |
| 229 | fn | resolveSystemdUnitNameFromServicePath | (private) |
| 234 | fn | shouldDeferUpdateModeSystemdServiceRepair | (private) |
| 245 | fn | readWindowsGatewayRuntimeForUpdateRepair | (private) |
| 255 | fn | suppressRunningSystemdExecStartRepairs | (private) |
| 285 | fn | filterInactiveExtraGatewayServices | (private) |
| 304 | fn | detectExtraGatewayServiceIssues | pub |
| 313 | fn | extraGatewayServiceToHealthFinding | pub |
| 327 | fn | extraGatewayServiceToRepairEffects | pub |
| 343 | fn | cleanupLegacyLaunchdService | (private) |
| 373 | fn | classifyLegacyServices | (private) |
| 407 | fn | cleanupLegacyDarwinServices | (private) |
| 429 | fn | cleanupLegacyLinuxUserServices | (private) |
| 468 | fn | maybeRepairGatewayServiceConfig | pub |
| 866 | fn | maybeScanExtraGatewayServices | pub |

## src/commands/doctor-legacy-config.migrations.test.ts (2116 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | legacyConfig | (private) |
| 134 | fn | writeCreds | (private) |
| 139 | fn | expectNoWhatsAppConfigForLegacyAuth | (private) |
| 148 | fn | ollamaModel | (private) |

## src/commands/doctor-memory-search.test.ts (1809 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | CheckQmdBinaryAvailability | (private) |
| 105 | fn | resetMemoryRecallMocks | (private) |
| 149 | fn | firstNoteMessage | (private) |
| 156 | fn | expectNoWarningWithConfiguredRemoteApiKey | (private) |
| 1649 | fn | createPrompter | (private) |

## src/commands/doctor-memory-search.ts (905 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | RuntimeMemoryAuditContext | (private) |
| 62 | type | MemoryEmbeddingProviderDoctorMetadata | (private) |
| 69 | fn | formatRuntimeBytes | (private) |
| 78 | fn | formatLocalRuntimeDoctorNote | (private) |
| 144 | fn | resolveMemoryEmbeddingProviderDoctorMetadata | (private) |
| 160 | fn | listAutoSelectMemoryEmbeddingProviderDoctorMetadata | (private) |
| 176 | fn | resolveSuggestedRemoteMemoryProvider | (private) |
| 182 | fn | hasConfiguredAwsSdkAuthForProvider | (private) |
| 195 | fn | isOpenAICompatibleMemoryProvider | (private) |
| 221 | fn | resolveOpenAICompatibleMemoryBaseUrl | (private) |
| 232 | fn | isKeyOptionalMemoryProvider | (private) |
| 241 | fn | resolveRuntimeMemoryAuditContext | (private) |
| 270 | fn | buildMemoryRecallIssueNote | (private) |
| 287 | fn | buildDreamingArtifactIssueNote | (private) |
| 303 | fn | noteMemoryRecallHealth | pub |
| 334 | fn | maybeRepairMemoryRecallHealth | pub |
| 419 | fn | hasActiveAlternateMemoryPluginSlot | (private) |
| 444 | fn | listRememberAcrossConversationAgentIds | (private) |
| 463 | fn | isActiveMemoryPluginAvailable | (private) |
| 479 | fn | resolveActiveMemoryConversationRecallSupport | (private) |
| 499 | fn | noteRememberAcrossConversationsHealth | (private) |
| 548 | fn | noteMemorySearchHealth | pub |
| 820 | fn | hasLocalEmbeddings | (private) |
| 839 | fn | hasApiKeyForProvider | (private) |
| 879 | fn | resolvePrimaryMemoryProviderEnvVar | (private) |
| 887 | fn | buildGatewayProbeWarning | (private) |

## src/commands/doctor-plugin-registry.test.ts (941 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | makeTempDir | (private) |
| 39 | fn | readRequiredPersistedInstalledPluginIndex | (private) |
| 49 | fn | hermeticEnv | (private) |
| 58 | fn | createCandidate | (private) |
| 82 | fn | createBundledCandidate | (private) |
| 121 | fn | createManagedNpmPlugin | (private) |
| 202 | fn | createCurrentIndex | (private) |
| 216 | fn | createCurrentIndexWithNpmRecord | (private) |
| 238 | fn | createCurrentIndexWithPathRecord | (private) |
| 255 | fn | expectedPluginIndexRecord | (private) |

## src/commands/doctor-plugin-registry.ts (746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | PluginRegistryDoctorRepairParams | (private) |
| 52 | type | StaleManagedNpmBundledPlugin | (private) |
| 60 | type | PluginRegistryDoctorNoteLogger | (private) |
| 65 | type | PluginRegistryHealthIssue | (private) |
| 96 | type | ManagedNpmPackageReadFailure | (private) |
| 104 | fn | readJsonObject | (private) |
| 109 | fn | readStringMap | (private) |
| 122 | fn | resolveManagedPluginNpmRoot | (private) |
| 128 | fn | listManagedPluginNpmRoots | (private) |
| 132 | fn | deleteObjectKey | (private) |
| 140 | fn | readPackageVersion | (private) |
| 146 | fn | readPluginManifestId | (private) |
| 152 | fn | listStaleManagedNpmBundledPlugins | (private) |
| 198 | fn | loadCurrentBundledPluginSources | (private) |
| 221 | fn | listStaleLocalBundledPluginInstallRecordShadows | (private) |
| 232 | fn | removeManagedNpmDependency | (private) |
| 264 | fn | removeManagedNpmPackageLockDependency | (private) |
| 303 | fn | maybeRepairStaleManagedNpmBundledPlugins | pub |
| 343 | fn | maybeRepairStaleLocalBundledPluginInstallRecords | (private) |
| 374 | fn | maybeRepairManagedNpmOpenClawPeerLinks | pub |
| 457 | fn | loadInstallRecordsWithoutPluginIds | (private) |
| 468 | fn | listManagedNpmOpenClawPeerLinkIssues | (private) |
| 494 | fn | detectPluginRegistryHealthIssues | pub |
| 542 | fn | pluginRegistryIssueToHealthFinding | pub |
| 599 | fn | pluginRegistryIssueToRepairEffect | pub |
| 644 | fn | assertNeverPluginRegistryIssue | (private) |
| 656 | fn | maybeRepairPluginRegistryState | pub |

## src/commands/doctor-post-upgrade.test.ts (755 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | makeFixtureRoot | (private) |

## src/commands/doctor-sandbox.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | SandboxScriptInfo | (private) |
| 34 | fn | resolveSandboxScript | (private) |
| 62 | fn | runSandboxScript | (private) |
| 87 | fn | isDockerAvailable | (private) |
| 98 | type | CodexBwrapNamespaceProbe | (private) |
| 102 | fn | formatNamespaceProbeCommand | (private) |
| 106 | fn | runCodexBwrapNamespaceProbe | (private) |
| 124 | fn | codexBwrapNeedsNetworkNamespaceProbe | (private) |
| 129 | fn | probeCodexBwrapNamespaces | (private) |
| 149 | fn | noteCodexBwrapNamespaceWarning | (private) |
| 177 | fn | dockerImageExists | (private) |
| 196 | fn | resolveSandboxDockerImage | (private) |
| 201 | fn | resolveSandboxBackend | (private) |
| 206 | fn | resolveSandboxBrowserImage | (private) |
| 211 | fn | updateSandboxDockerImage | (private) |
| 230 | fn | updateSandboxBrowserImage | (private) |
| 249 | type | SandboxImageCheck | (private) |
| 256 | fn | handleMissingSandboxImage | (private) |
| 288 | fn | maybeRepairSandboxImages | pub |
| 371 | fn | formatLegacyRegistryInspectionLine | (private) |
| 377 | fn | legacySandboxRegistryInspectionSourcePath | (private) |
| 381 | fn | formatLegacyRegistryMigrationLine | (private) |
| 397 | fn | detectLegacySandboxRegistryFileIssues | pub |
| 403 | fn | legacySandboxRegistryInspectionToHealthFinding | pub |
| 416 | fn | legacySandboxRegistryInspectionToRepairEffect | pub |
| 433 | fn | maybeRepairSandboxRegistryFiles | pub |
| 461 | fn | noteSandboxScopeWarnings | pub |

## src/commands/doctor-security.test.ts (737 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | fn | lastMessage | (private) |
| 81 | fn | withExecApprovalsFile | (private) |
| 96 | fn | expectAgentExecHostPolicyWarning | (private) |

## src/commands/doctor-session-snapshots.test.ts (1089 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | sessionEntry | (private) |
| 56 | fn | skillPrompt | (private) |
| 68 | fn | resolvedSkill | (private) |
| 87 | fn | writeSessionStore | (private) |
| 95 | fn | readMainSessionEntry | (private) |
| 104 | fn | readMainSkillsSnapshot | (private) |

## src/commands/doctor-session-snapshots.ts (666 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | SnapshotPathSource | (private) |
| 26 | type | CachedSnapshotPath | (private) |
| 31 | type | StaleSessionSnapshotPathFinding | (private) |
| 38 | type | SessionSnapshotHealthIssue | (private) |
| 42 | fn | resolveSessionSnapshotBundledSkillsDir | (private) |
| 70 | fn | decodeXmlText | (private) |
| 79 | fn | extractSkillLocations | (private) |
| 94 | fn | collectResolvedSkillPaths | (private) |
| 121 | fn | collectInjectedWorkspaceFilePaths | (private) |
| 130 | fn | collectCachedSnapshotPaths | (private) |
| 148 | fn | isAbsolutePathLike | (private) |
| 152 | fn | splitPathSegments | (private) |
| 159 | fn | isWindowsAbsolutePath | (private) |
| 164 | fn | isTempBackedOpenClawRoot | (private) |
| 173 | fn | isBundledRuntimeSkillsPath | (private) |
| 183 | fn | extractBundledSkillRelativeSegments | (private) |
| 195 | fn | isInsidePath | (private) |
| 208 | fn | joinPathForRoot | (private) |
| 213 | fn | resolveExpectedBundledSkillPath | (private) |
| 249 | fn | resolveMovedBundledSkillPath | (private) |
| 262 | fn | scanSessionStoreForStaleRuntimeSnapshotPaths | (private) |
| 307 | fn | listSessionStorePaths | (private) |
| 322 | fn | resolveSessionStorePaths | (private) |
| 335 | fn | loadSessionStoreForSnapshotScan | (private) |
| 345 | fn | detectSessionSnapshotHealthIssues | pub |
| 387 | fn | sessionSnapshotIssueToHealthFinding | pub |
| 402 | fn | sessionSnapshotIssueToRepairEffect | pub |
| 414 | fn | replaceStalePathsInText | (private) |
| 443 | fn | repairFreshSessionSnapshotPaths | (private) |
| 509 | fn | noteSessionSnapshotHealth | pub |

## src/commands/doctor-session-sqlite-migration-run.ts (999 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | SessionSqliteMigrationMoveKind | pub |
| 23 | type | SessionSqliteMigrationMove | pub |
| 30 | type | SessionSqliteMigrationTargetInput | pub |
| 36 | type | SessionSqliteMigrationTargetManifest | (private) |
| 43 | type | SessionSqliteMigrationManifest | (private) |
| 64 | type | ActiveSessionSqliteMigrationRun | pub |
| 163 | fn | createSessionSqliteMigrationRun | pub |
| 191 | fn | resolveSessionSqliteMigrationRunsDir | pub |
| 195 | fn | writeSessionSqliteMigrationManifest | pub |
| 208 | fn | updateMigrationManifestTarget | pub |
| 227 | fn | recordPlannedMigrationMove | pub |
| 235 | fn | recordPlannedMigrationMoves | pub |
| 243 | fn | recordCompletedMigrationMove | pub |
| 251 | fn | recordCompletedMigrationMoves | pub |
| 259 | fn | recordMigrationMoves | (private) |
| 287 | fn | migrationMoveKey | (private) |
| 291 | fn | restoreSessionSqliteMigrationRuns | pub |
| 319 | fn | restoreSessionSqliteMigrationRun | pub |
| 350 | fn | findLatestFailedSessionSqliteMigrationManifest | pub |
| 386 | fn | writeSessionSqliteMigrationFailureReports | pub |
| 425 | fn | createSessionSqliteMigrationFailureIssue | pub |
| 473 | fn | sessionSqliteMigrationTargetKey | (private) |
| 477 | fn | findMigrationManifestTarget | (private) |
| 489 | fn | emptyRestoreReport | (private) |
| 498 | fn | restoreSessionSqliteMigrationManifest | (private) |
| 517 | fn | uniqueRestoreMoves | (private) |
| 527 | fn | restoreMigrationMove | (private) |
| 584 | fn | assertSafeSessionSqliteMigrationMove | pub |
| 600 | fn | assertSafeSessionSqliteMigrationDirectory | pub |
| 606 | fn | isRegularFileWithoutFollowingSymlinks | (private) |
| 614 | fn | hasSymbolicLinkInDirectoryPath | (private) |
| 634 | fn | resolveRestoreStatus | (private) |
| 652 | fn | filterRestoreManifestTargets | (private) |
| 672 | fn | listSessionSqliteMigrationManifestPaths | (private) |
| 687 | fn | readSessionSqliteMigrationManifest | (private) |
| 717 | fn | isRestoreMoveWithinTarget | (private) |
| 737 | fn | normalizeMigrationTarget | (private) |
| 747 | fn | normalizeMigrationTargetManifest | (private) |
| 758 | fn | normalizeMigrationMove | (private) |
| 767 | fn | hasUnsupportedV1DirectorySymlink | (private) |
| 803 | fn | canonicalMigrationFilePath | pub |
| 824 | fn | assertSafeMigrationTargetTopology | (private) |
| 836 | fn | isSymbolicLinkPath | (private) |
| 847 | fn | isFailedSessionSqliteMigrationManifest | (private) |
| 856 | fn | manifestSortTime | (private) |
| 862 | fn | createPrefilledGithubIssueUrl | (private) |
| 874 | fn | pruneCompletedSessionSqliteMigrationRuns | (private) |
| 896 | fn | renderFailureMarkdown | (private) |
| 948 | fn | sanitizeFailureReportText | (private) |
| 956 | fn | shortenFailureReportPath | (private) |
| 964 | fn | sanitizeFailureIssueMessage | (private) |
| 984 | fn | redactSessionKey | (private) |
| 992 | fn | redactAbsoluteHomePaths | (private) |

## src/commands/doctor-session-sqlite.test.ts (2850 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | SessionSqliteMigrationManifest | (private) |
| 40 | type | TestStore | (private) |
| 1288 | fn | aliasPath | (private) |
| 1679 | fn | writeManifest | (private) |
| 2562 | fn | createImportedStoreForCompaction | (private) |
| 2583 | fn | createHistoricalV1AgentDatabase | (private) |
| 2666 | fn | createUnsafeIndexDrift | (private) |
| 2702 | fn | createLegacyStore | (private) |
| 2773 | fn | readMigrationManifest | (private) |
| 2780 | fn | requireMigrationManifestPath | (private) |
| 2787 | fn | trustedMigrationTarget | (private) |
| 2795 | fn | writeFailedManifest | (private) |
| 2831 | fn | canonicalTestPaths | (private) |
| 2835 | fn | canonicalTestPath | (private) |
| 2843 | fn | restoreEnvValue | (private) |

## src/commands/doctor-session-sqlite.ts (1262 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | LegacySessionRecord | (private) |
| 87 | fn | runDoctorSessionSqlite | pub |
| 152 | fn | resolveDoctorSessionSqliteConfig | (private) |
| 159 | fn | resolveDoctorSessionSqliteTargets | (private) |
| 200 | fn | filterLegacySessionStoreTargets | (private) |
| 210 | fn | inspectOrMigrateTarget | (private) |
| 314 | fn | resolveFullyCoveredLegacyStorePaths | (private) |
| 345 | fn | readLegacySessionRecords | (private) |
| 394 | fn | isLegacySessionRecordOwnedByTarget | (private) |
| 409 | fn | shouldFilterLegacySessionRecordsByTarget | (private) |
| 413 | fn | resolveLegacyTranscriptPath | (private) |
| 430 | fn | countLegacyTranscript | (private) |
| 455 | fn | blockingIssueCount | (private) |
| 459 | fn | importLegacySessionRecord | (private) |
| 518 | fn | markAlreadyMigratedTranscript | (private) |
| 532 | fn | validateImportedTargetBeforeArchive | (private) |
| 544 | fn | validateImportedRecordBeforeArchive | (private) |
| 603 | fn | archiveImportedTranscript | (private) |
| 630 | fn | archiveImportedTranscripts | (private) |
| 646 | fn | archiveUnreferencedJsonlFiles | (private) |
| 696 | fn | archiveImportedLegacySessionStores | (private) |
| 739 | fn | archiveLegacySessionStore | (private) |
| 767 | fn | recordLegacyStoreMoveForTarget | (private) |
| 781 | fn | validateLegacySessionRecord | (private) |
| 816 | fn | validateTranscriptEventCount | (private) |
| 859 | fn | hasSessionIssue | (private) |
| 867 | fn | countAlreadyMigratedTranscriptEventsForImport | (private) |
| 884 | fn | countAlreadyMigratedTranscriptEventsForValidate | (private) |
| 897 | fn | countTranscriptEvents | (private) |
| 906 | fn | readLegacyTranscriptMtimeMs | (private) |
| 918 | fn | listUnreferencedJsonlFiles | (private) |
| 937 | fn | appendActiveSqliteTranscriptFileIssues | (private) |
| 962 | fn | appendSqliteDbStats | (private) |
| 983 | fn | compactSqliteDatabase | (private) |
| 1010 | fn | resolveActiveSqliteTranscriptFile | (private) |
| 1043 | fn | moveImportedTranscriptArtifactsToArchive | (private) |
| 1073 | fn | resolveTrajectoryPath | (private) |
| 1079 | fn | resolveTrajectoryPointerPath | (private) |
| 1085 | fn | moveImportedTranscriptToArchive | (private) |
| 1103 | fn | moveSessionJsonlToArchive | (private) |
| 1121 | fn | planSessionJsonlArchiveMove | (private) |
| 1168 | fn | resolveImportedTranscriptArchiveDir | (private) |
| 1173 | fn | canonicalFilePath | (private) |
| 1181 | fn | createMigrationTargetInput | (private) |
| 1189 | fn | isSessionEntry | (private) |
| 1193 | fn | summarizeDoctorSessionSqliteReport | (private) |
| 1248 | fn | sumTargets | (private) |

## src/commands/doctor-session-state-providers.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | DoctorPrompterLike | (private) |
| 34 | fn | countLabel | (private) |
| 38 | fn | normalizeIdSet | (private) |
| 42 | fn | normalizePrefixList | (private) |
| 46 | fn | ownsPrefixedValue | (private) |
| 51 | fn | countSessionLabel | (private) |
| 55 | fn | repairExample | (private) |
| 59 | fn | resolveSessionAgentId | (private) |
| 64 | fn | resolveConfiguredDoctorSessionStateRoute | (private) |
| 72 | fn | addRef | (private) |
| 102 | fn | resolvePluginDoctorSessionRouteStateOwners | (private) |
| 109 | fn | entryMayContainPluginSessionRouteState | (private) |
| 131 | fn | storeMayContainPluginSessionRouteState | (private) |
| 137 | type | DoctorSessionRouteState | (private) |
| 143 | type | DoctorSessionRouteStateRepair | (private) |
| 152 | type | DoctorSessionRouteStateManualReview | (private) |
| 158 | type | DoctorSessionRouteStateScan | (private) |
| 163 | fn | resolvePersistedOverrideModelRef | (private) |
| 180 | fn | addReason | (private) |
| 186 | fn | routeAllowsOwnerState | (private) |
| 204 | fn | hasOwnedCliSession | (private) |
| 225 | fn | modelRefKey | (private) |
| 229 | fn | scanEntryForOwner | (private) |
| 339 | fn | scanSessionRouteStateOwners | (private) |
| 363 | fn | clearEntryKey | (private) |
| 371 | fn | clearRecordKeys | (private) |
| 398 | fn | applySessionRouteStateRepair | (private) |
| 409 | fn | clear | (private) |
| 449 | fn | groupRepairsByOwner | (private) |
| 461 | fn | runPluginSessionStateDoctorRepairs | pub |

## src/commands/doctor-session-transcripts.test.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | repairBrokenSessionTranscriptFile | (private) |
| 74 | fn | countNonEmptyLines | (private) |
| 84 | fn | requireFirstMockCall | (private) |
| 108 | fn | writeTranscript | (private) |

## src/commands/doctor-session-transcripts.ts (564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | TranscriptEntry | (private) |
| 38 | type | TranscriptRepairResult | (private) |
| 49 | type | SessionTranscriptHealthIssue | (private) |
| 53 | type | ActiveTranscriptPath | (private) |
| 64 | fn | parseTranscriptEntries | (private) |
| 82 | fn | getEntryId | (private) |
| 86 | fn | getParentId | (private) |
| 90 | fn | getMessage | (private) |
| 96 | fn | withSelectedParent | (private) |
| 100 | fn | normalizeLegacyOpenAICodexTranscriptMetadata | (private) |
| 123 | fn | textFromContent | (private) |
| 140 | fn | selectActivePath | (private) |
| 201 | fn | hasBrokenPromptRewriteBranch | (private) |
| 241 | fn | writeActiveTranscript | (private) |
| 273 | fn | writeTranscriptEntries | (private) |
| 287 | fn | repairBrokenSessionTranscriptFile | (private) |
| 370 | fn | listSessionTranscriptFiles | (private) |
| 388 | fn | detectSessionTranscriptHealthIssues | pub |
| 409 | fn | sessionTranscriptIssueToHealthFinding | pub |
| 428 | fn | sessionTranscriptIssueToRepairEffect | pub |
| 440 | fn | noteSessionTranscriptHealth | pub |
| 500 | fn | noteSessionSqliteMigrationHealth | (private) |
| 508 | fn | runSessionSqlite | (private) |

## src/commands/doctor-state-integrity.test.ts (1026 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | setupSessionState | (private) |
| 53 | fn | stateIntegrityText | (private) |
| 60 | fn | doctorChangesText | (private) |
| 67 | fn | createAgentDir | (private) |
| 78 | type | RuntimeRepairPrompt | (private) |
| 84 | fn | repairPromptCalls | (private) |
| 90 | fn | hasRepairPromptMessage | (private) |
| 97 | fn | runStateIntegrity | (private) |
| 104 | fn | writeSessionStore | (private) |
| 113 | fn | runStateIntegrityText | (private) |
| 236 | fn | runOrphanTranscriptCheckWithQmdSessions | (private) |

## src/commands/doctor-state-integrity.ts (1511 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | DoctorPrompterLike | (private) |
| 60 | fn | existsDir | (private) |
| 68 | fn | existsFile | (private) |
| 76 | type | OrphanAgentDir | (private) |
| 81 | type | StateIntegrityHealthIssue | pub |
| 131 | fn | tryResolveNativeRealPath | (private) |
| 139 | fn | resolveComparableTranscriptPath | (private) |
| 143 | fn | areComparablePathsEqual | (private) |
| 149 | fn | isReachableConfiguredAgentDir | (private) |
| 164 | fn | formatOrphanAgentDirLabel | (private) |
| 168 | fn | formatOrphanAgentDirPreview | (private) |
| 177 | fn | listOrphanAgentDirs | (private) |
| 221 | fn | canWriteDir | (private) |
| 230 | fn | ensureDir | (private) |
| 239 | fn | dirPermissionHint | (private) |
| 256 | fn | addUserRwx | (private) |
| 261 | fn | countJsonlLines | (private) |
| 297 | fn | findOtherStateDirs | (private) |
| 330 | fn | isPathUnderRoot | (private) |
| 343 | fn | tryResolveRealPath | (private) |
| 351 | fn | resolvePathThroughExistingAncestor | (private) |
| 372 | fn | decodeMountInfoPath | (private) |
| 378 | fn | escapeControlCharsForTerminal | (private) |
| 411 | type | LinuxMountInfoEntry | (private) |
| 417 | type | LinuxSdBackedStateDir | (private) |
| 424 | fn | parseLinuxMountInfo | (private) |
| 453 | fn | isPathUnderRootWithPathOps | (private) |
| 470 | fn | findLinuxMountInfoEntryForPath | (private) |
| 491 | fn | isMmcDevicePath | (private) |
| 496 | fn | tryReadLinuxMountInfo | (private) |
| 505 | fn | detectLinuxSdBackedStateDir | pub |
| 560 | fn | formatLinuxSdBackedStateDirWarning | pub |
| 578 | type | LinuxVolatileStateDir | (private) |
| 588 | fn | detectLinuxVolatileStateDir | pub |
| 628 | fn | formatLinuxVolatileStateDirWarning | pub |
| 645 | fn | detectMacCloudSyncedStateDir | pub |
| 690 | fn | isPairingPolicy | (private) |
| 694 | fn | hasPairingPolicy | (private) |
| 718 | fn | isSlashRoutingSessionKey | (private) |
| 727 | fn | shouldRequireOAuthDir | (private) |
| 763 | fn | shouldSuppressOrphanTranscriptWarning | (private) |
| 768 | fn | detectStateIntegrityHealthIssues | pub |
| 778 | fn | homedir | (private) |
| 887 | fn | stateIntegrityIssueToHealthFinding | pub |
| 974 | fn | stateIntegrityIssueToRepairEffect | pub |
| 1027 | fn | assertNeverStateIntegrityIssue | (private) |
| 1034 | fn | noteStateIntegrity | pub |
| 1043 | fn | homedir | (private) |
| 1194 | fn | displayDirFor | (private) |
| 1493 | fn | collectWorkspaceBackupTip | pub |
| 1505 | fn | noteWorkspaceBackupTip | pub |

## src/commands/doctor-state-migrations.test.ts (4058 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | fileExists | (private) |
| 62 | fn | detectWhatsAppLegacyStateMigrations | (private) |
| 141 | fn | makeTempRoot | (private) |
| 147 | fn | makeRootWithEmptyCfg | (private) |
| 153 | fn | writeLegacyTelegramAllowFromStore | (private) |
| 168 | fn | runTelegramAllowFromMigration | (private) |
| 199 | fn | writeJson5 | (private) |
| 204 | fn | readPrimaryKeyColumns | (private) |
| 215 | fn | createLegacyAgentDatabaseRegistry | (private) |
| 249 | fn | writeLegacySessionsFixture | (private) |
| 263 | fn | writeLegacyPluginStateSidecar | (private) |
| 291 | fn | writeLegacyDebugProxyCaptureSidecar | (private) |
| 395 | fn | writeExistingPluginInstallIndex | (private) |
| 415 | fn | writeLegacyPluginInstallIndex | (private) |
| 425 | fn | runLegacyStateMigrationsForRoot | (private) |
| 433 | fn | failRenameOnce | (private) |
| 445 | fn | writePendingWalSnapshot | (private) |
| 468 | fn | writeLegacyTaskStateSidecars | (private) |
| 589 | fn | appendLegacyCrossAgentTask | (private) |
| 619 | fn | appendLegacyTaskWithObsoleteDeliveryStatus | (private) |
| 648 | fn | detectAndRunMigrations | (private) |
| 660 | fn | withStateDir | (private) |
| 674 | fn | readSessionsStore | (private) |
| 681 | fn | runAndReadSessionsStore | (private) |
| 695 | type | StateDirMigrationResult | (private) |
| 699 | fn | getStateDirMigrationPaths | (private) |
| 706 | fn | ensureLegacyAndTargetStateDirs | (private) |
| 713 | fn | runStateDirMigration | (private) |
| 720 | fn | runFreshStateDirMigration | (private) |
| 725 | fn | runAutoMigrateLegacyStateWithLog | (private) |
| 740 | fn | expectTargetAlreadyExistsWarning | (private) |
| 747 | fn | expectUnmigratedWithoutWarnings | (private) |
| 752 | fn | writeLegacyAgentFiles | (private) |
| 761 | fn | ensureCredentialsDir | (private) |

## src/commands/doctor.e2e-harness.ts (756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | setStdinTty | (private) |
| 31 | fn | createGatewayUpdateResult | (private) |
| 40 | fn | createCommandWithTimeoutResult | (private) |
| 50 | fn | createLegacyConfigSnapshot | (private) |
| 163 | fn | defaultRunDoctorHealthContributions | (private) |
| 201 | fn | createLegacyStateMigrationDetectionResult | (private) |
| 608 | fn | mockDoctorConfigSnapshot | pub |
| 628 | fn | createDoctorRuntime | pub |
| 637 | fn | arrangeLegacyStateMigrationTest | pub |

## src/commands/doctor.warns-state-directory-is-missing.e2e.test.ts (1126 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | configCodexOAuthProfile | (private) |
| 33 | fn | storedCodexOAuthProfile | (private) |
| 44 | fn | mockAuthProfileStore | (private) |
| 51 | fn | mockCodexProviderSnapshot | (private) |
| 75 | fn | runDoctorNonInteractive | (private) |
| 82 | fn | hasCodexOAuthWarning | (private) |
| 90 | fn | requireTerminalNote | (private) |
| 106 | fn | mockDoctorBrowserFastPath | (private) |

## src/commands/doctor/repair-sequencing.test.ts (1174 lines)

_No symbols extracted._

## src/commands/gateway-status.test.ts (1190 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 236 | fn | createRuntimeCapture | (private) |
| 249 | fn | asRuntimeEnv | (private) |
| 253 | type | ProbeGatewayCall | (private) |
| 264 | fn | readProbeCalls | (private) |
| 268 | fn | requireProbeCall | (private) |
| 276 | fn | requireSshForwardCall | (private) |
| 284 | fn | makeRemoteGatewayConfig | (private) |
| 294 | fn | mockLocalTokenEnvRefConfig | (private) |
| 311 | fn | runGatewayStatus | (private) |
| 326 | fn | requireRecord | (private) |
| 333 | fn | requireRecordArray | (private) |
| 343 | fn | findUnresolvedSecretRefWarning | (private) |
| 354 | fn | requireUnresolvedSecretRefWarning | (private) |

## src/commands/health.snapshot.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | HealthTestPlugin | (private) |
| 29 | type | TelegramHealthAccount | (private) |
| 40 | type | DiscordHealthAccount | (private) |
| 49 | type | IMessageHealthAccount | (private) |
| 55 | fn | loadFreshHealthModulesForTest | (private) |
| 108 | fn | getTelegramChannelConfig | (private) |
| 113 | fn | listTelegramAccountIdsForTest | (private) |
| 125 | fn | readTokenFromFile | (private) |
| 136 | fn | resolveTelegramAccountForTest | (private) |
| 173 | fn | buildTelegramHealthSummary | (private) |
| 191 | fn | probeTelegramAccountForTest | (private) |
| 255 | fn | stubTelegramFetchOk | (private) |
| 292 | fn | runSuccessfulTelegramProbe | (private) |
| 319 | fn | createTelegramHealthPlugin | (private) |
| 341 | fn | resolveDiscordHealthAccountForTest | (private) |
| 359 | fn | inspectDiscordHealthAccountForTest | (private) |
| 383 | fn | createDiscordHealthPlugin | (private) |
| 426 | fn | createIMessageHealthPlugin | (private) |

## src/commands/health.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | createMainAgentSummary | (private) |
| 111 | fn | requireFirstRuntimeLog | (private) |
| 123 | fn | requireFirstGatewayRequest | (private) |

## src/commands/health.ts (1140 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | fn | debugHealth | (private) |
| 85 | fn | isGatewayHealthAuthUnavailableError | (private) |
| 89 | fn | emitReachableGatewayAuthDiagnostic | pub |
| 133 | fn | loadConfigRuntime | (private) |
| 203 | fn | formatEventLoopHealthLine | (private) |
| 218 | fn | formatModelPricingHealthLine | pub |
| 230 | fn | buildContextEngineHealthSummary | (private) |
| 248 | fn | formatContextEngineHealthLine | pub |
| 258 | fn | buildDeliveryQueueHealthSummary | pub |
| 302 | fn | formatDeliveryQueueHealthLine | pub |
| 326 | fn | formatConfigReloadHealthLine | pub |
| 333 | fn | resolveHeartbeatSummary | (private) |
| 336 | fn | resolveAgentOrder | (private) |
| 368 | fn | buildSessionSummary | (private) |
| 400 | fn | buildPluginHealthSummary | (private) |
| 452 | fn | readBooleanField | (private) |
| 462 | fn | resolveProbeAccountEnabled | (private) |
| 484 | fn | resolveProbeAccountConfigured | (private) |
| 507 | fn | resolveHealthAccountContext | (private) |
| 573 | fn | getHealthSnapshot | pub |
| 809 | fn | healthCommand | pub |
| 978 | fn | accountIdsByChannel | (private) |
| 1131 | fn | readBestEffortHealthConfig | (private) |
| 1136 | fn | readRuntimeHealthConfig | (private) |

## src/commands/migrate.test.ts (1546 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 81 | fn | plan | (private) |
| 99 | fn | authPlan | (private) |
| 123 | fn | codexSkillPlan | (private) |
| 173 | fn | codexPluginPlan | (private) |
| 244 | type | MockCallSource | (private) |
| 250 | type | MigrationSelectionPrompt | (private) |
| 257 | fn | mockCall | (private) |
| 265 | fn | mockArg | (private) |
| 269 | fn | multiselectPrompt | (private) |
| 273 | fn | firstApplyContext | (private) |
| 277 | fn | firstAppliedPlan | (private) |

## src/commands/migrate.ts (546 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | selectMigrationItems | (private) |
| 58 | fn | hasAuthCredentialCandidate | (private) |
| 64 | fn | hasPlannedAuthCredentialItem | (private) |
| 72 | fn | resolveDefaultIncludeSecrets | (private) |
| 84 | fn | shouldPromptForAuthCredentials | (private) |
| 94 | fn | createMigrationPlanWithProgress | (private) |
| 114 | fn | createInteractiveMigrationPlanWithAuthPrompt | (private) |
| 156 | fn | assertVerifyPluginAppsProvider | (private) |
| 162 | fn | promptCodexMigrationSkillSelection | (private) |
| 222 | fn | promptCodexMigrationPluginSelection | (private) |
| 282 | fn | promptCodexMigrationSelections | (private) |
| 294 | fn | hasSelectedCodexMigrationWork | (private) |
| 305 | fn | shouldSkipCodexApplyAfterInteractiveSelection | (private) |
| 309 | fn | hasCodexSubscriptionRequiredPlugin | (private) |
| 316 | fn | readCodexSubscriptionWarning | (private) |
| 322 | fn | logNoCodexSelection | (private) |
| 337 | fn | migrateListCommand | pub |
| 367 | fn | migratePlanCommand | pub |
| 392 | fn | migrateApplyCommand | pub |
| 397 | fn | migrateApplyCommand | pub |
| 401 | fn | migrateApplyCommand | pub |
| 465 | fn | migrateDefaultCommand | pub |

## src/commands/model-picker.test.ts (2951 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 248 | fn | expectRouterModelFiltering | (private) |
| 255 | fn | createSelectAllMultiselect | (private) |
| 259 | fn | configuredTextModel | (private) |
| 271 | fn | manifestTextRow | (private) |
| 290 | type | MockCallSource | (private) |
| 296 | type | PickerOption | (private) |
| 300 | fn | requireRecord | (private) |
| 307 | fn | mockArg | (private) |
| 315 | fn | pickerParams | (private) |
| 319 | fn | pickerOptions | (private) |
| 325 | fn | optionValues | (private) |
| 329 | fn | requireOption | (private) |
| 337 | fn | providerCallProviders | (private) |

## src/commands/models.list.e2e.test.ts (844 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 130 | class | MockAuthStorage | (private) |
| 136 | class | MockModelRegistry | (private) |
| 215 | fn | makeRuntime | (private) |
| 223 | fn | firstMockArg | (private) |
| 231 | fn | runtimeLogText | (private) |
| 239 | fn | runtimeErrorText | (private) |
| 247 | fn | expectModelRegistryUnavailable | (private) |
| 259 | fn | loadSourceConfigSnapshotForTest | (private) |
| 361 | fn | setDefaultModel | (private) |
| 367 | fn | configureModelAsConfigured | (private) |
| 380 | fn | configureGoogleAntigravityModel | (private) |
| 384 | fn | makeGoogleAntigravityTemplate | (private) |
| 392 | fn | enableGoogleAntigravityAuthProfile | (private) |
| 400 | fn | parseJsonLog | (private) |
| 405 | fn | expectZaiProviderFilter | (private) |
| 417 | fn | setDefaultZaiRegistry | (private) |
| 424 | fn | writeWorkspaceAuthEvidencePlugin | (private) |
| 733 | fn | suppressSpark | (private) |
| 832 | fn | toLintErrorObject | (private) |

## src/commands/onboard-auth.config-shared.test.ts (618 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | makeModel | (private) |

## src/commands/onboard-auth.test.ts (572 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | upsert | (private) |
| 43 | fn | existing | (private) |
| 100 | fn | requireRecord | (private) |
| 107 | fn | expectFields | (private) |
| 115 | fn | expectMissingFile | (private) |
| 133 | fn | authProfilePathFor | (private) |
| 288 | type | AuthProfileEntry | (private) |
| 294 | fn | readProfile | (private) |

## src/commands/onboard-channels.e2e.test.ts (1276 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createPrompter | (private) |
| 36 | fn | createUnexpectedPromptGuards | (private) |
| 47 | type | MockWithCalls | (private) |
| 51 | fn | callArgAt | (private) |
| 59 | fn | hasCallWithFields | (private) |
| 74 | fn | expectCalledWithFields | (private) |
| 78 | fn | expectCalledWithMessage | (private) |
| 82 | fn | expectCalledWithMessageContaining | (private) |
| 98 | type | SetupChannels | (private) |
| 101 | type | SetupChannelsOptions | (private) |
| 103 | fn | runSetupChannels | (private) |
| 114 | fn | createQuickstartTelegramSelect | (private) |
| 132 | fn | createUnexpectedQuickstartPrompter | (private) |
| 141 | fn | createTelegramCfg | (private) |
| 152 | fn | createMSTeamsCatalogEntry | (private) |
| 169 | fn | setMinimalOnboardingRegistryForTests | (private) |
| 293 | type | ChannelSetupWizardAdapterPatch | (private) |
| 304 | type | PatchedSetupAdapterFields | (private) |
| 312 | fn | createMSTeamsPluginRegistryEntry | (private) |
| 344 | fn | mockMSTeamsRegistrySnapshot | (private) |
| 360 | fn | patchTelegramAdapter | (private) |
| 418 | fn | createUnexpectedConfigureCall | (private) |
| 424 | fn | runConfiguredTelegramSetup | (private) |
| 456 | fn | runQuickstartTelegramSetupWithInteractive | (private) |
| 497 | fn | listRawChannelPluginCatalogEntries | (private) |

## src/commands/onboard-custom-config.test.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | buildCustomProviderConfig | (private) |
| 42 | fn | applyCustomModelConfigWithContextWindow | (private) |

## src/commands/onboard-custom-config.ts (744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | CustomModelInput | (private) |
| 36 | type | CustomModelImageInputInference | (private) |
| 41 | fn | normalizeContextWindowForCustomModel | (private) |
| 52 | fn | customModelInputs | (private) |
| 57 | fn | resolveCustomModelImageInputInference | pub |
| 86 | fn | resolveCustomModelSupportsImageInput | (private) |
| 104 | fn | isAzureFoundryUrl | (private) |
| 114 | fn | isAzureOpenAiUrl | (private) |
| 124 | fn | isAzureUrl | (private) |
| 138 | fn | transformAzureUrl | (private) |
| 154 | fn | transformAzureConfigUrl | (private) |
| 165 | fn | hasSameHost | (private) |
| 176 | type | CustomApiCompatibility | pub |
| 179 | type | CustomApiResult | pub |
| 187 | type | ApplyCustomApiConfigParams | (private) |
| 199 | type | ParseNonInteractiveCustomApiFlagsParams | (private) |
| 209 | type | ParsedNonInteractiveCustomApiFlags | (private) |
| 218 | type | CustomApiErrorCode | (private) |
| 227 | class | CustomApiError | pub |
| 237 | type | ResolveCustomProviderIdParams | (private) |
| 244 | type | ResolvedCustomProviderId | (private) |
| 250 | fn | normalizeEndpointId | pub |
| 259 | fn | buildEndpointIdFromUrl | pub |
| 271 | fn | resolveUniqueEndpointId | (private) |
| 297 | fn | resolveCustomModelAliasError | pub |
| 328 | fn | buildAzureOpenAiHeaders | (private) |
| 336 | fn | buildOpenAiHeaders | (private) |
| 344 | fn | buildAnthropicHeaders | (private) |
| 354 | type | VerificationRequest | (private) |
| 361 | fn | normalizeOptionalProviderApiKey | pub |
| 368 | fn | resolveVerificationEndpoint | (private) |
| 389 | fn | buildOpenAiVerificationProbeRequest | pub |
| 437 | fn | buildAnthropicVerificationProbeRequest | pub |
| 465 | fn | resolveProviderApi | (private) |
| 474 | fn | parseCustomApiCompatibility | (private) |
| 493 | fn | resolveCustomProviderId | pub |
| 523 | fn | parseNonInteractiveCustomApiFlags | pub |
| 559 | fn | applyCustomApiConfig | pub |

## src/commands/onboard-guided.test.ts (1093 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | RemoteGatewayInferenceOnboardingDeps | (private) |
| 58 | fn | makeRuntime | (private) |
| 66 | fn | candidate | (private) |
| 77 | fn | existingModelCandidate | (private) |
| 88 | fn | detection | (private) |
| 103 | fn | setupApplyResult | (private) |
| 113 | fn | recommendationOutcome | (private) |
| 117 | fn | setupDeps | (private) |

## src/commands/onboard-guided.ts (585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | ActivateSetupInference | (private) |
| 34 | type | DetectSetupInference | (private) |
| 37 | type | GuidedOnboardingDeps | pub |
| 66 | type | GuidedAccessMode | pub |
| 68 | type | GuidedOnboardingHandoff | (private) |
| 70 | type | LadderFailure | (private) |
| 72 | fn | openSystemAgentChat | (private) |
| 93 | fn | persistRiskAcknowledgement | (private) |
| 109 | fn | runGuidedOnboardingFlow | (private) |
| 514 | fn | persistAccessMode | (private) |
| 526 | fn | launchHatchTui | (private) |
| 555 | fn | runGuidedOnboarding | pub |

## src/commands/onboard-helpers.test.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | withColumns | (private) |
| 130 | type | RunCommandCall | (private) |
| 135 | fn | requireFirstRunCommandCall | (private) |
| 143 | fn | expectedTrashSourcePath | (private) |

## src/commands/onboard-helpers.ts (504 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | buildOnboardingControlUiUrl | pub |
| 69 | fn | guardCancel | pub |
| 79 | fn | summarizeExistingConfig | pub |
| 101 | fn | summarizeGatewayConfig | (private) |
| 138 | fn | formatGatewayBind | (private) |
| 156 | fn | normalizeGatewayTokenInput | pub |
| 170 | fn | validateGatewayPasswordInput | pub |
| 185 | fn | printWizardHeader | pub |
| 190 | fn | applyWizardMetadata | pub |
| 210 | fn | formatControlUiSshHint | pub |
| 238 | fn | resolveSshTargetHint | (private) |
| 246 | fn | ensureWorkspaceAndSessions | pub |
| 268 | fn | moveToTrash | pub |
| 291 | fn | resolveMoveToTrashSourcePath | (private) |
| 295 | fn | resolveMoveToTrashAllowedRoots | (private) |
| 311 | fn | handleReset | pub |
| 332 | type | OnboardingGatewayProbeParams | (private) |
| 341 | fn | runOnboardingGatewayProbe | (private) |
| 363 | fn | probeGatewayReachable | pub |
| 377 | type | GatewayConfiguredModelProbeResult | pub |
| 387 | fn | didProbeReachGateway | (private) |
| 399 | fn | probeGatewayConfiguredModel | pub |
| 446 | fn | waitForGatewayReachable | pub |
| 484 | fn | summarizeError | (private) |

## src/commands/onboard-non-interactive.gateway.test.ts (1098 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | InstallGatewayDaemonResult | (private) |
| 54 | fn | resolveTestConfigPath | (private) |
| 67 | fn | readTestConfig | (private) |
| 186 | fn | loadGatewayOnboardModules | (private) |
| 193 | fn | getPseudoPort | (private) |
| 199 | fn | createJsonCaptureRuntime | (private) |
| 238 | fn | readFirstMockCall | (private) |
| 247 | type | EnsureWorkspaceOptions | (private) |
| 251 | type | MigrationPlanCall | (private) |
| 258 | type | MigrationApplyCall | (private) |
| 263 | type | GatewayHealthCall | (private) |
| 268 | type | HealthCommandCall | (private) |
| 272 | fn | expectLocalJsonSetupFailure | (private) |
| 291 | fn | createLocalDaemonSetupOptions | (private) |
| 304 | fn | runLocalDaemonSetup | (private) |
| 308 | fn | mockGatewayReachableWithCapturedTimeouts | (private) |
| 338 | fn | initStateDir | (private) |
| 347 | fn | withStateDir | (private) |

## src/commands/onboard-search.test.ts (717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | WebSearchConfigRecord | (private) |
| 51 | fn | getWebSearchConfig | (private) |
| 56 | fn | ensureWebSearchConfig | (private) |
| 67 | fn | createSearchProviderEntry | (private) |
| 175 | fn | createPrompter | (private) |
| 202 | fn | mockCalls | (private) |
| 206 | fn | createPerplexityConfig | (private) |
| 230 | fn | pluginWebSearchApiKey | (private) |
| 239 | fn | createDisabledFirecrawlConfig | (private) |
| 267 | fn | readFirecrawlPluginApiKey | (private) |
| 278 | fn | runBlankPerplexityKeyEntry | (private) |
| 290 | fn | runQuickstartPerplexitySetup | (private) |

## src/commands/onboard-skills.test.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | createBundledSkill | (private) |
| 116 | fn | createWorkspaceSkill | (private) |
| 126 | fn | mockMissingBrewStatus | (private) |
| 143 | fn | createPrompter | (private) |
| 186 | fn | withPlatform | (private) |

## src/commands/onboard.test.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | ConfigSnapshotStub | (private) |
| 17 | type | ProviderAuthMethodNonInteractiveValidationContext | (private) |
| 108 | fn | makeRuntime | (private) |
| 116 | fn | expectResetCall | (private) |

## src/commands/onboard.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | rejectOption | (private) |
| 56 | fn | validateResetPreflightOptions | (private) |
| 115 | fn | validateResetAuthChoice | (private) |
| 324 | fn | validateResetMigrationImport | (private) |
| 342 | fn | validateResetNonInteractiveGateway | (private) |
| 379 | fn | wantsClassicInteractiveSetup | (private) |
| 399 | fn | setupWizardCommand | pub |

## src/commands/onboarding-plugin-install.test.ts (1850 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | expectedNpmInstallSpec | (private) |
| 137 | fn | requireCapturedPrompt | (private) |
| 144 | type | MockWithUnknownCalls | (private) |
| 150 | fn | readFirstMockCall | (private) |
| 159 | type | NpmPackInstallCall | (private) |
| 166 | type | NpmSpecInstallCall | (private) |
| 176 | type | ClawHubInstallCall | (private) |
| 195 | type | PluginInstallRecord | (private) |

## src/commands/onboarding-plugin-install.ts (1520 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | InstallChoice | (private) |
| 61 | type | InstallPluginFromClawHubResult | (private) |
| 68 | type | OnboardingPluginInstallEntry | pub |
| 77 | type | OnboardingPluginInstallStatus | pub |
| 80 | type | OnboardingPluginInstallResult | (private) |
| 89 | fn | markOnboardingPluginInstalled | (private) |
| 105 | fn | shouldFallbackClawHubToNpm | (private) |
| 122 | fn | readInstallFailureWarning | (private) |
| 129 | fn | resolveRealDirectory | (private) |
| 138 | fn | resolveGitDirectoryMarker | (private) |
| 163 | fn | isWithinBaseDirectory | (private) |
| 171 | fn | hasTrustedGitWorkspace | (private) |
| 187 | fn | hasGitWorkspace | (private) |
| 195 | fn | addPluginLoadPath | (private) |
| 210 | fn | pathsReferToSameDirectory | (private) |
| 222 | fn | formatPortableLocalPath | (private) |
| 241 | fn | recordLocalPluginInstall | (private) |
| 258 | fn | resolveLocalPath | (private) |
| 305 | fn | resolveBundledLocalPath | (private) |
| 335 | fn | resolveNpmSpecForOnboarding | (private) |
| 344 | fn | resolveClawHubSpecForOnboarding | (private) |
| 353 | fn | resolveInstallDefaultChoice | (private) |
| 401 | fn | promptInstallChoice | (private) |
| 502 | fn | formatDurationLabel | (private) |
| 511 | fn | formatPluginInstallProgress | (private) |
| 515 | fn | formatPluginInstalled | (private) |
| 519 | fn | formatPluginInstallFailed | (private) |
| 523 | fn | formatPluginInstallTimedOut | (private) |
| 527 | fn | formatPluginInstallTimedOutNote | (private) |
| 537 | fn | summarizeInstallError | (private) |
| 549 | fn | formatInstallErrorDetail | (private) |
| 571 | fn | isTimeoutError | (private) |
| 575 | fn | applyPluginEnablement | (private) |
| 598 | type | AnimatedProgress | (private) |
| 617 | fn | shortenInstallLabel | (private) |
| 660 | fn | createAnimatedInstallProgress | (private) |
| 712 | fn | logInstallWarningWithSpacing | (private) |
| 720 | fn | logInstallWarningWithLineBreaks | (private) |
| 732 | fn | isReviewRequiredClawHubTrustWarning | (private) |
| 736 | fn | isClawHubTrustWarning | (private) |
| 744 | fn | installPluginFromNpmSpecWithProgress | (private) |
| 762 | fn | updateProgress | (private) |
| 821 | fn | installPluginFromNpmPackArchiveWithProgress | (private) |
| 838 | fn | updateProgress | (private) |
| 883 | fn | installPluginFromOverride | (private) |
| 1013 | fn | installPluginFromClawHubSpecWithProgress | (private) |
| 1030 | fn | updateProgress | (private) |
| 1038 | fn | renderTrustWarning | (private) |
| 1121 | fn | ensureOnboardingPluginInstalled | pub |

## src/commands/sessions-cleanup.test.ts (728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | makeRuntime | (private) |
| 68 | fn | expectLogsToInclude | (private) |

## src/commands/sessions-tail.test.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeRuntime | (private) |
| 39 | fn | makeEvent | (private) |
| 54 | fn | writeJsonl | (private) |
| 59 | fn | appendJsonl | (private) |
| 63 | fn | runtimeOutput | (private) |
| 70 | fn | waitForRuntimeOutput | (private) |
| 118 | fn | writeSessionEntry | (private) |
| 134 | fn | appendEvents | (private) |

## src/commands/sessions-tail.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | SessionsTailOptions | (private) |
| 43 | type | TailSelection | (private) |
| 51 | type | TailTrajectorySource | (private) |
| 63 | type | FileFollowState | (private) |
| 73 | type | SqliteFollowState | (private) |
| 80 | type | FollowState | (private) |
| 82 | type | TrajectorySnapshot | (private) |
| 91 | type | FollowFileState | (private) |
| 98 | type | TrajectoryCursor | (private) |
| 110 | fn | setSessionsTailFollowIntervalMsForTests | (private) |
| 120 | fn | resolveFollowIntervalMs | (private) |
| 124 | fn | parseTailCount | (private) |
| 131 | fn | toOptionalString | (private) |
| 135 | fn | isTrajectoryEvent | (private) |
| 146 | fn | parseTrajectoryEventLine | (private) |
| 159 | fn | parseTrajectoryEventLines | (private) |
| 166 | fn | eventSequence | (private) |
| 171 | fn | eventTimestampMs | (private) |
| 176 | fn | eventCursor | (private) |
| 183 | fn | compareCursors | (private) |
| 199 | fn | maxCursorValue | (private) |
| 206 | fn | maxCursor | (private) |
| 210 | fn | maxCursorFromEvents | (private) |
| 214 | fn | eventsAfterCursor | (private) |
| 224 | fn | formatTimestamp | (private) |
| 232 | fn | modelLabel | (private) |
| 241 | fn | toolName | (private) |
| 245 | fn | resultStatus | (private) |
| 255 | fn | modelCompletionStatus | (private) |
| 268 | fn | safePreview | (private) |
| 305 | fn | formatProgressLine | (private) |
| 314 | fn | readTrajectorySnapshot | (private) |
| 341 | fn | readSqliteTrajectorySnapshot | (private) |
| 357 | fn | readTailSnapshot | (private) |
| 363 | fn | renderEvents | (private) |
| 372 | fn | fileStateFromStat | (private) |
| 381 | fn | sameFileIdentity | (private) |
| 385 | fn | readFollowFileState | (private) |
| 396 | fn | isRunningSession | (private) |
| 408 | fn | compareSelectionsByUpdatedAt | (private) |
| 412 | fn | resolveTailTrajectoryPath | (private) |
| 428 | fn | buildTailSelection | (private) |
| 480 | fn | selectSessionsToTail | (private) |
| 497 | fn | statFileSize | (private) |
| 508 | fn | readNewFileFollowEvents | (private) |
| 562 | fn | readNewSqliteFollowEvents | (private) |
| 576 | fn | readNewFollowEvents | (private) |
| 582 | fn | renderFollowEvents | (private) |
| 593 | fn | followSelections | (private) |
| 638 | fn | stop | (private) |
| 649 | fn | resolveTailTargetAgent | (private) |
| 657 | fn | sessionsTailCommand | pub |

## src/commands/sessions.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | SessionRow | (private) |
| 70 | fn | formatKTokens | (private) |
| 93 | fn | applyAcpModelOverlayIfNeeded | (private) |
| 105 | fn | compareSessionRowsByUpdatedAt | (private) |
| 109 | fn | selectNewestSessionRows | (private) |
| 135 | fn | parseSessionsLimit | (private) |
| 152 | fn | colorByPct | (private) |
| 168 | fn | formatTokensCell | (private) |
| 186 | fn | lookupContextTokensForDisplay | (private) |
| 191 | fn | formatKindCell | (private) |
| 208 | fn | resolveSessionRuntimeLabel | (private) |
| 227 | fn | formatRuntimeCell | (private) |
| 232 | fn | toJsonSessionRow | (private) |
| 238 | fn | stripChannelRecipientPrefix | (private) |
| 258 | fn | resolveDisplayRuntimePolicySessionKey | (private) |
| 313 | fn | sessionsCommand | pub |

## src/commands/status.command-sections.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | AgentStatusLike | (private) |
| 26 | type | SummaryLike | (private) |
| 27 | type | MemoryLike | (private) |
| 28 | type | SessionsRecentLike | (private) |
| 29 | type | EventLoopHealthLike | (private) |
| 31 | type | StatusMemoryStateResolvers | pub |
| 46 | type | PluginCompatibilityNoticeLike | (private) |
| 50 | type | PairingRecoveryLike | (private) |
| 63 | fn | buildStatusAgentsValue | pub |
| 79 | fn | buildStatusTasksValue | pub |
| 108 | fn | buildStatusHeartbeatValue | pub |
| 121 | fn | buildStatusLastHeartbeatValue | pub |
| 150 | fn | buildStatusMemoryValue | pub |
| 177 | fn | colorByTone | (private) |
| 203 | fn | buildStatusSecurityAuditLines | pub |
| 221 | fn | fmtSummary | (private) |
| 235 | fn | severityLabel | (private) |
| 241 | fn | sevRank | (private) |
| 268 | fn | buildStatusHealthRows | pub |
| 326 | fn | formatEventLoopHealthDetail | (private) |
| 338 | fn | buildStatusSessionsRows | pub |
| 364 | fn | buildStatusModelSelectionLines | pub |
| 415 | fn | buildStatusFooterLines | pub |
| 438 | fn | buildStatusPluginCompatibilityLines | pub |
| 463 | fn | buildStatusPairingRecoveryLines | pub |
| 497 | fn | buildStatusSystemEventsRows | pub |
| 509 | fn | buildStatusSystemEventsTrailer | pub |

## src/commands/status.scan.shared.test.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | GatewayCall | (private) |
| 38 | type | GatewayProbeCall | (private) |
| 46 | type | MemorySearchManagerCall | (private) |
| 56 | fn | readGatewayCall | (private) |
| 66 | fn | readProbeCall | (private) |

## src/commands/status.summary.test.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 197 | fn | toSessionEntrySummaries | (private) |

## src/commands/status.summary.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | loadChannelSummaryModule | (private) |
| 64 | fn | loadChannelPluginIdsModule | (private) |
| 68 | fn | loadLinkChannelModule | (private) |
| 77 | fn | loadTaskRegistryMaintenanceModule | (private) |
| 81 | fn | loadStaticModelCatalogResolvers | (private) |
| 124 | fn | discountRetainedLostTaskFailures | (private) |
| 138 | fn | hasUserPinnedModelSelection | (private) |
| 151 | fn | normalizeStatusModelPart | (private) |
| 155 | fn | resolveTrustedSessionContextTokens | (private) |
| 183 | type | SessionCandidate | (private) |
| 189 | fn | compareSessionCandidatesByUpdatedAt | (private) |
| 193 | fn | selectRecentSessionCandidates | (private) |
| 214 | fn | listSessionCandidates | (private) |
| 231 | fn | redactSensitiveStatusSummary | pub |
| 252 | fn | getStatusSummary | pub |
| 284 | fn | resolveStaticModelContext | (private) |
| 296 | fn | resolved | (private) |
| 382 | fn | loadSessionCandidates | (private) |
| 392 | fn | buildSessionRows | (private) |

## src/commands/status.test.ts (1555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | createDefaultSessionStoreEntry | (private) |
| 37 | fn | createUnknownUsageSessionStore | (private) |
| 49 | fn | createChannelIssueCollector | (private) |
| 60 | fn | createErrorChannelPlugin | (private) |
| 80 | fn | withUnknownUsageStore | (private) |
| 85 | fn | getRuntimeLogs | (private) |
| 89 | fn | getRuntimeLog | (private) |
| 97 | fn | getLastRuntimeLog | (private) |
| 101 | fn | getJoinedRuntimeLogs | (private) |
| 105 | fn | expectLogsInclude | (private) |
| 109 | fn | expectLogsExclude | (private) |
| 113 | fn | expectLogsMatch | (private) |
| 117 | fn | runStatusAndGetLogs | (private) |
| 123 | fn | runStatusAndGetJoinedLogs | (private) |
| 128 | type | ProbeGatewayResult | (private) |
| 141 | fn | mockProbeGatewayResult | (private) |
| 149 | fn | createDefaultProbeGatewayResult | (private) |
| 163 | fn | createDefaultSecurityAuditResult | (private) |
| 197 | fn | createStatusServiceSummary | (private) |
| 218 | fn | createSessionStatusRows | (private) |
| 275 | fn | createMockStatusScanResult | (private) |
| 396 | fn | withEnvVar | (private) |
| 400 | fn | withOptionalEnvVar | (private) |

## src/commands/tasks.test.ts (916 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | createRuntime | (private) |
| 53 | fn | createTaskRecord | (private) |
| 61 | fn | createManagedTaskFlow | (private) |
| 71 | fn | readFirstJsonLog | (private) |
| 77 | fn | jsonRoundTrip | (private) |
| 91 | fn | writeSessionEntries | (private) |
| 100 | fn | withTaskCommandStateDir | (private) |

## src/commands/tasks.ts (653 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | formatTaskLookupMiss | (private) |
| 71 | fn | formatTaskTimestamp | (private) |
| 75 | fn | loadTaskCancelConfig | (private) |
| 79 | type | GatewayTaskCancelSummary | (private) |
| 86 | type | GatewayTaskCancelResult | (private) |
| 93 | fn | tryCancelGatewayOwnedTaskViaGateway | (private) |
| 120 | fn | configureTaskMaintenanceFromConfig | (private) |
| 124 | type | SessionRegistryMaintenanceStoreSummary | (private) |
| 133 | type | SessionRegistryMaintenanceSummary | (private) |
| 140 | fn | resolveExplicitCronSessionSegment | (private) |
| 145 | fn | readRunningCronJobIds | (private) |
| 173 | fn | runSessionRegistryMaintenance | (private) |
| 203 | fn | truncate | (private) |
| 210 | fn | shortToken | (private) |
| 218 | fn | formatTaskStatusCell | (private) |
| 235 | fn | formatTaskRows | (private) |
| 268 | fn | formatTaskListSummary | (private) |
| 273 | fn | formatAgeMs | (private) |
| 293 | fn | formatAuditRows | (private) |
| 330 | fn | toSystemAuditFindings | (private) |
| 346 | fn | tasksListCommand | pub |
| 393 | fn | tasksShowCommand | pub |
| 440 | fn | tasksNotifyCommand | pub |
| 463 | fn | tasksCancelCommand | pub |
| 509 | fn | tasksAuditCommand | pub |
| 574 | fn | tasksMaintenanceCommand | pub |

## src/config/channel-compat-normalization.ts (633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | LegacyStreamingAliasOptions | pub |
| 25 | type | NormalizeLegacyChannelAccountParams | pub |
| 33 | fn | asObjectRecord | pub |
| 39 | fn | parseAliasStreamingMode | (private) |
| 59 | fn | resolveLegacyAliasStreamingMode | pub |
| 77 | fn | hasLegacyAccountStreamingAliases | pub |
| 88 | fn | ensureNestedRecord | (private) |
| 103 | fn | normalizeLegacyStreamingAliases | pub |
| 174 | fn | moveOrRemoveAlias | (private) |
| 263 | fn | buildRootFlatDeliverySeed | (private) |
| 305 | fn | seedMaterializedAccountStreaming | (private) |
| 359 | fn | fillMissingRecordFields | (private) |
| 396 | fn | normalizeLegacyChannelAliases | pub |
| 615 | fn | hasLegacyStreamingAliases | pub |

## src/config/config-env-vars.ts (606 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | isBlockedConfigEnvVar | (private) |
| 26 | fn | isConfigRuntimeEnvVarAllowed | pub |
| 30 | fn | collectConfigEnvVarsByTarget | (private) |
| 74 | fn | findCaseInsensitiveEnvKey | (private) |
| 82 | type | EnvSnapshotEntry | (private) |
| 87 | fn | envSnapshotKey | (private) |
| 91 | fn | snapshotEnvByPlatformKey | (private) |
| 106 | fn | envSnapshotEntriesEqual | (private) |
| 113 | fn | replaceEnvSnapshotEntry | (private) |
| 126 | fn | cloneEnvWithPlatformSemantics | pub |
| 178 | fn | collectConfigRuntimeEnvVars | pub |
| 183 | fn | collectConfigServiceEnvVars | pub |
| 189 | fn | createConfigRuntimeEnv | pub |
| 199 | type | ConfigRuntimeEnvPublication | pub |
| 203 | type | PreparedConfigRuntimeEnv | pub |
| 208 | type | PublishedConfigRuntimeEnvState | (private) |
| 214 | type | PublishedConfigRuntimeEnvChange | (private) |
| 220 | type | PendingConfigRuntimeEnvPublication | (private) |
| 239 | fn | applyPublishedConfigRuntimeEnvRollback | (private) |
| 256 | fn | isPendingConfigRuntimeEnvPublication | (private) |
| 269 | fn | unwindRequestedConfigRuntimeEnvPublications | (private) |
| 282 | fn | getPublishedConfigRuntimeEnvState | pub |
| 286 | fn | collectConfigRuntimeEnvOwnership | pub |
| 318 | fn | filterConfigRuntimeEnvOwnership | (private) |
| 342 | fn | initializePublishedConfigRuntimeEnv | pub |
| 365 | fn | resetPublishedConfigRuntimeEnv | pub |
| 372 | fn | createConfigRuntimeEnvBase | pub |
| 398 | fn | prepareConfigRuntimeEnv | pub |
| 491 | fn | rollback | (private) |
| 536 | fn | applyConfigEnvVars | pub |
| 546 | fn | normalizeKey | (private) |

## src/config/config-misc.test.ts (1339 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | issuePaths | (private) |
| 47 | fn | issueMessages | (private) |
| 51 | fn | expectSomeIssueMessageContains | (private) |

## src/config/config.env-vars.test.ts (703 lines)

_No symbols extracted._

## src/config/config.plugin-validation.test.ts (2275 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | chmodSafeDir | (private) |
| 19 | fn | mkdirSafe | (private) |
| 24 | fn | writePluginFixture | (private) |
| 50 | fn | writeBundleFixture | (private) |
| 68 | fn | writeManifestlessClaudeBundleFixture | (private) |
| 79 | fn | expectRemovedPluginWarnings | (private) |
| 94 | fn | expectPathMessage | (private) |
| 104 | fn | expectPathMessageIncludes | (private) |
| 114 | fn | expectNoPath | (private) |
| 132 | fn | suiteEnv | (private) |
| 142 | fn | validateInSuite | (private) |
| 145 | fn | validateRemovedPluginConfig | (private) |
| 342 | fn | expectNoMissingCodexPluginWarning | (private) |
| 353 | fn | expectMissingCodexPluginWarning | (private) |

## src/config/config.web-search-provider.test.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | getScopedWebSearchCredential | (private) |
| 14 | fn | getConfiguredPluginWebSearchConfig | (private) |
| 26 | fn | getConfiguredPluginWebSearchCredential | (private) |
| 120 | fn | buildSchema | (private) |
| 237 | fn | resolveSearchProvider | (private) |
| 241 | type | ValidationMessage | (private) |
| 247 | fn | findValidationMessage | (private) |
| 255 | fn | expectAllowedValuesInclude | (private) |

## src/config/defaults.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | WarnState | (private) |
| 26 | type | ProviderPolicyDefaultsOptions | (private) |
| 66 | type | ModelDefinitionLike | (private) |
| 69 | fn | isPositiveNumber | (private) |
| 73 | fn | resolveModelCost | (private) |
| 86 | fn | resolveNormalizedProviderModelMaxTokens | pub |
| 104 | type | SessionDefaultsOptions | (private) |
| 109 | fn | applyMessageDefaults | pub |
| 124 | fn | applySessionDefaults | pub |
| 150 | fn | applyTalkConfigNormalization | pub |
| 154 | fn | applyModelDefaults | pub |
| 381 | fn | normalizeAgentModelConfigForDefaults | (private) |
| 413 | fn | applyAgentDefaults | pub |
| 461 | fn | applyCronDefaults | pub |
| 465 | fn | applyLoggingDefaults | pub |
| 482 | fn | hasAnthropicDefaultSignal | (private) |
| 508 | fn | applyContextPruningDefaults | pub |
| 528 | fn | applyCompactionDefaults | pub |

## src/config/doc-baseline.ts (752 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | JsonValue | (private) |
| 16 | type | JsonSchemaNode | (private) |
| 18 | type | JsonSchemaObject | (private) |
| 32 | type | ConfigDocBaselineKind | (private) |
| 34 | type | ConfigDocBaselineCounts | (private) |
| 36 | type | ConfigDocBaselineCountViolation | (private) |
| 43 | type | ConfigDocBaselineEntry | pub |
| 58 | type | ConfigDocBaseline | (private) |
| 65 | type | ConfigDocBaselineKindBaseline | (private) |
| 71 | type | ConfigDocBaselineArtifacts | (private) |
| 78 | type | ConfigDocBaselineArtifactsRender | (private) |
| 83 | type | ConfigDocBaselineArtifactPaths | (private) |
| 90 | type | ConfigDocBaselineArtifactsWriteResult | (private) |
| 118 | fn | compareBaselineStrings | (private) |
| 122 | fn | resolveRepoRoot | (private) |
| 135 | fn | normalizeBaselinePath | (private) |
| 144 | fn | normalizeJsonValue | (private) |
| 175 | fn | normalizeEnumValues | (private) |
| 185 | fn | asSchemaObject | (private) |
| 192 | fn | splitHintLookupPath | (private) |
| 197 | fn | resolveUiHintMatch | (private) |
| 264 | fn | resolveSchemaHasChildren | (private) |
| 274 | fn | normalizeTypeValue | (private) |
| 285 | fn | mergeTypeValues | (private) |
| 305 | fn | areJsonValuesEqual | (private) |
| 309 | fn | mergeJsonValueArrays | (private) |
| 329 | fn | mergeConfigDocBaselineEntry | (private) |
| 355 | fn | resolveEntryKind | (private) |
| 365 | fn | loadBundledConfigSchemaResponse | (private) |
| 392 | fn | collectConfigDocBaselineEntries | (private) |
| 485 | fn | dedupeConfigDocBaselineEntries | (private) |
| 498 | fn | splitConfigDocBaselineEntries | (private) |
| 522 | fn | buildConfigDocBaseline | (private) |
| 551 | fn | renderKindBaseline | (private) |
| 563 | fn | renderConfigDocBaselineArtifacts | pub |
| 579 | fn | readFileIfExists | (private) |
| 587 | fn | writeFileAtomic | (private) |
| 597 | fn | sha256 | (private) |
| 602 | fn | computeConfigBaselineHashFileContent | (private) |
| 612 | fn | computeConfigBaselineCounts | (private) |
| 620 | fn | renderConfigBaselineCounts | (private) |
| 624 | fn | parseConfigBaselineCounts | (private) |
| 645 | fn | collectConfigBaselineCountViolations | (private) |
| 668 | fn | resolveBaselineArtifactPaths | (private) |
| 685 | fn | writeConfigDocBaselineArtifacts | pub |

## src/config/env-preserve.test.ts (848 lines)

_No symbols extracted._

## src/config/env-preserve.ts (836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | class | EnvRefArrayMutationError | pub |
| 35 | fn | hasEnvVarRef | (private) |
| 39 | type | AuthoredEnvRef | (private) |
| 41 | fn | collectAuthoredEnvRefs | (private) |
| 65 | fn | hasUnescapedEnvVarRef | (private) |
| 69 | fn | hasEscapedEnvVarRef | (private) |
| 73 | fn | containsAuthoredUnescapedEnvTemplate | (private) |
| 86 | fn | containsAuthoredEscapedEnvTemplate | (private) |
| 99 | fn | countAuthoredEnvRefsByPath | (private) |
| 104 | fn | visit | (private) |
| 128 | fn | countResolvedActiveEnvRefsByPath | (private) |
| 134 | fn | visit | (private) |
| 165 | fn | containsUnaccountedActiveEscapedEnvRef | (private) |
| 193 | fn | preservesAuthoredEscapedEnvRefs | (private) |
| 203 | type | ArrayIdentityPath | (private) |
| 205 | fn | getArrayIdentityPathValue | (private) |
| 216 | fn | collectStableArrayIdentityPaths | (private) |
| 229 | fn | resolveStableArrayIdentityMatch | (private) |
| 270 | fn | collectLiteralArrayIdentityPaths | (private) |
| 285 | fn | hasStableSameIndexLiteralShape | (private) |
| 319 | fn | matchesArrayElementAtSameIndex | (private) |
| 330 | fn | matchesRetainedArrayItem | (private) |
| 354 | fn | hasStableSameIndexNeighbors | (private) |
| 370 | fn | matchUniqueRetainedArrayItems | (private) |
| 427 | fn | matchAuthoredTemplateArrayItems | (private) |
| 455 | fn | addMatch | (private) |
| 538 | fn | matchAuthoredEscapedTemplateArrayItems | (private) |
| 574 | fn | addMatch | (private) |
| 661 | fn | tryResolveString | (private) |
| 706 | fn | resolveEnvVarRefsForComparison | (private) |
| 730 | fn | restoreEnvVarRefs | pub |

## src/config/group-policy.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | GroupPolicyChannel | (private) |
| 21 | type | ChannelGroupConfig | (private) |
| 28 | type | ChannelGroupPolicy | pub |
| 35 | type | ChannelGroups | (private) |
| 37 | fn | resolveChannelGroupConfig | (private) |
| 62 | type | GroupToolPolicySender | (private) |
| 70 | type | SenderKeyType | (private) |
| 71 | type | CompiledSenderPolicy | (private) |
| 87 | type | ParsedSenderPolicyKey | (private) |
| 91 | type | SenderPolicyBuckets | (private) |
| 93 | fn | normalizeSenderKey | (private) |
| 107 | fn | normalizeTypedSenderKey | (private) |
| 116 | fn | normalizeSenderPolicyChannel | (private) |
| 124 | fn | normalizeChannelSenderKey | (private) |
| 138 | fn | normalizeLegacySenderKey | (private) |
| 144 | fn | warnLegacyToolsBySenderKey | (private) |
| 158 | fn | parseSenderPolicyKey | (private) |
| 192 | fn | createSenderPolicyBuckets | (private) |
| 202 | fn | compileToolsBySenderPolicy | (private) |
| 233 | fn | resolveCompiledToolsBySenderPolicy | (private) |
| 249 | fn | normalizeCandidate | (private) |
| 257 | fn | normalizeSenderIdCandidates | (private) |
| 273 | fn | matchToolsBySenderPolicy | (private) |
| 317 | fn | resolveToolsBySender | pub |
| 333 | fn | resolveChannelGroups | pub |
| 367 | type | ChannelGroupPolicyMode | (private) |
| 369 | fn | resolveChannelGroupPolicyMode | (private) |
| 391 | fn | resolveChannelGroupPolicy | pub |
| 427 | fn | resolveChannelGroupRequireMention | pub |
| 461 | fn | resolveChannelGroupToolsPolicy | pub |

## src/config/includes.test.ts (984 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | configPath | (private) |
| 28 | fn | etcOpenClawPath | (private) |
| 32 | fn | sharedPath | (private) |
| 36 | fn | createMockResolver | (private) |
| 48 | fn | resolve | (private) |
| 52 | fn | expectResolveIncludeError | (private) |
| 584 | fn | expectRejectedTraversalPaths | (private) |

## src/config/includes.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | hashConfigIncludeRaw | pub |
| 43 | fn | resolveConfigIncludeWritePath | pub |
| 74 | type | IncludeResolver | pub |
| 82 | type | IncludeFileReadParams | (private) |
| 91 | type | IncludeRoot | (private) |
| 96 | type | IncludeBoundary | (private) |
| 101 | type | ResolveConfigIncludesOptions | (private) |
| 115 | class | ConfigIncludeError | pub |
| 126 | class | CircularIncludeError | pub |
| 141 | fn | deepMerge | (private) |
| 149 | class | IncludeProcessor | (private) |
| 389 | fn | safeRealpath | (private) |
| 398 | fn | createConfigIncludeBoundary | (private) |
| 417 | fn | isNotFoundError | (private) |
| 426 | fn | readConfigIncludeFileWithGuards | pub |
| 482 | fn | resolveConfigIncludesWithinBoundary | (private) |
| 495 | fn | createConfigIncludeResolutionSession | pub |
| 507 | fn | resolveConfigIncludes | pub |

## src/config/io.audit.test.ts (756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | createAuditRecordBase | (private) |
| 57 | fn | createRenameAuditRecord | (private) |
| 72 | fn | readLegacyAuditLog | (private) |
| 81 | fn | requireAuditRecord | (private) |

## src/config/io.audit.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | findConfigSetPositionals | (private) |
| 65 | fn | findConfigSetCommandIndex | (private) |
| 89 | fn | redactConfigAuditArgv | (private) |
| 131 | fn | capArgv | (private) |
| 138 | fn | snapshotConfigAuditProcessInfo | pub |
| 154 | type | ConfigWriteAuditResult | pub |
| 156 | type | ConfigWriteAuditRecord | (private) |
| 199 | type | ConfigExternalChangeAuditRecord | pub |
| 214 | type | ConfigObserveAuditRecord | pub |
| 269 | type | ConfigAuditRecord | pub |
| 274 | type | ConfigAuditStatMetadata | (private) |
| 283 | type | ConfigAuditProcessInfo | (private) |
| 291 | type | ConfigWriteAuditRecordBase | (private) |
| 307 | fn | normalizeAuditLabel | (private) |
| 315 | fn | resolveConfigAuditProcessInfo | (private) |
| 328 | fn | resolveLegacyConfigAuditLogPath | pub |
| 335 | fn | formatConfigOverwriteLogMessage | pub |
| 346 | fn | createConfigWriteAuditRecordBase | pub |
| 402 | fn | capConfigAuditEntries | (private) |
| 410 | fn | capConfigAuditPaths | pub |
| 414 | fn | capConfigAuditIssues | pub |
| 418 | fn | finalizeConfigWriteAuditRecord | pub |
| 463 | type | ConfigAuditAppendContext | (private) |
| 468 | type | ConfigAuditAppendParams | (private) |
| 476 | fn | resolveConfigAuditAppendRecord | (private) |
| 484 | type | ConfigAuditScrubResult | pub |
| 494 | type | ConfigAuditScrubFs | (private) |
| 520 | fn | scrubConfigAuditLog | pub |
| 653 | fn | openConfigAuditStore | (private) |
| 661 | fn | configAuditEntryKey | (private) |
| 665 | fn | sanitizeConfigAuditRecord | pub |
| 674 | fn | appendConfigAuditRecord | pub |
| 687 | fn | appendConfigAuditRecordSync | pub |

## src/config/io.observe-recovery.test.ts (1298 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ConfigHealthDatabase | (private) |
| 26 | type | ObserveRecoveryDeps | (private) |
| 28 | fn | resolveLastKnownGoodConfigPath | (private) |
| 44 | fn | withSuiteHome | (private) |
| 63 | fn | readConfigHealthRow | (private) |
| 80 | fn | seedConfig | (private) |
| 85 | fn | seedConfigBackup | (private) |
| 90 | fn | writeConfigRaw | (private) |
| 96 | fn | writeClobberedUpdateChannel | (private) |
| 104 | fn | readObserveEvents | (private) |
| 112 | fn | listClobberFiles | (private) |
| 124 | fn | expectPathMissing | (private) |
| 133 | fn | warnMessages | (private) |
| 137 | fn | expectWarnContaining | (private) |
| 141 | fn | expectWarnNotContaining | (private) |
| 145 | fn | observeSuspicious | (private) |
| 151 | fn | expectSuspiciousIncludes | (private) |
| 158 | fn | expectSuspiciousMatching | (private) |
| 162 | fn | readLastObserveEvent | (private) |
| 168 | fn | createTestConfigIO | (private) |
| 191 | fn | recoverClobberedUpdateChannel | (private) |
| 203 | fn | recoverSuspiciousConfigRead | (private) |
| 217 | fn | recoverClobberedUpdateChannelSync | (private) |
| 229 | fn | makeSnapshot | (private) |
| 249 | fn | makeDeps | (private) |
| 273 | fn | withAsyncChmodFailure | (private) |
| 296 | fn | withSyncChmodFailure | (private) |

## src/config/io.observe-recovery.ts (1004 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ObserveRecoveryDeps | (private) |
| 98 | type | ConfigStatMetadataSource | (private) |
| 111 | fn | formatConfigPermissionHardeningWarning | (private) |
| 120 | fn | chmodConfigBestEffort | (private) |
| 138 | fn | chmodConfigBestEffortSync | (private) |
| 155 | type | ConfigReadRecoveryParams | (private) |
| 165 | type | ConfigReadRecoveryResult | (private) |
| 170 | fn | createConfigObserveAuditRecord | (private) |
| 236 | type | ConfigObserveAuditRecordParams | (private) |
| 238 | fn | createConfigObserveAuditAppendParams | (private) |
| 249 | fn | extractRestoreErrorDetails | (private) |
| 267 | fn | hashConfigRaw | (private) |
| 274 | fn | resolveConfigSnapshotHash | (private) |
| 290 | fn | hasConfigMeta | (private) |
| 299 | fn | resolveGatewayMode | (private) |
| 306 | fn | resolveConfigStatMetadata | (private) |
| 334 | fn | createConfigHealthFingerprint | (private) |
| 354 | fn | parseConfigRawOrEmpty | (private) |
| 362 | fn | returnOriginalConfigRead | (private) |
| 366 | fn | readConfigHealthState | (private) |
| 370 | fn | readConfigHealthStateSync | (private) |
| 374 | fn | writeConfigHealthState | (private) |
| 381 | fn | writeConfigHealthStateSync | (private) |
| 385 | fn | parseBackupConfigRaw | (private) |
| 396 | fn | getConfigHealthEntry | (private) |
| 405 | fn | setConfigHealthEntry | (private) |
| 419 | fn | createLastObservedSuspiciousEntry | (private) |
| 429 | fn | createRecoveredSuspiciousHealthState | (private) |
| 442 | fn | logBackupRestoreResult | (private) |
| 462 | fn | createBackupRestoreAuditAppendParams | (private) |
| 491 | fn | resolveSuspiciousSignature | (private) |
| 498 | fn | isRecoverableConfigReadSuspiciousReason | (private) |
| 507 | fn | resolveConfigReadRecoveryContext | (private) |
| 530 | fn | readConfigFingerprintForPath | (private) |
| 551 | fn | readConfigFingerprintForPathSync | (private) |
| 572 | fn | resolveLastKnownGoodConfigPath | (private) |
| 576 | fn | isSensitiveConfigPath | (private) |
| 582 | fn | collectPollutedSecretPlaceholders | (private) |
| 613 | fn | maybeRecoverSuspiciousConfigRead | pub |
| 730 | fn | maybeRecoverSuspiciousConfigReadSync | pub |
| 844 | fn | promoteConfigSnapshotToLastKnownGood | pub |
| 894 | fn | recoverConfigFromLastKnownGood | pub |
| 989 | fn | preserveConfigSnapshotAsClobbered | pub |

## src/config/io.write-config.test.ts (3459 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | ConfigHealthDatabase | (private) |
| 84 | type | ConfigIoOptions | (private) |
| 86 | fn | createConfigIO | (private) |
| 106 | fn | withSuiteHome | (private) |
| 142 | fn | readConfigHealthRow | (private) |
| 154 | fn | expectInputOwnerDisplayUnchanged | (private) |
| 158 | fn | readPersistedCommands | (private) |
| 172 | fn | expectConfigWriteRejected | (private) |
| 182 | fn | expectPersistedHashResult | (private) |
| 191 | fn | expectWarnContaining | (private) |
| 195 | fn | createFastConfigIO | (private) |
| 202 | fn | writeGatewayPortAndReadConfig | (private) |
| 1494 | fn | assertConfigPathForWrite | (private) |
| 3325 | fn | startForSnapshot | (private) |

## src/config/io.write-prepare.test.ts (1498 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 366 | fn | makeModel | (private) |
| 424 | fn | makeModel | (private) |

## src/config/io.write-prepare.ts (1275 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ManifestModelIdNormalizationProvider | (private) |
| 28 | fn | cloneUnknown | (private) |
| 33 | fn | createMergePatch | pub |
| 68 | fn | projectSourceOntoRuntimeShape | pub |
| 84 | fn | hasOwnValidIncludeDirective | (private) |
| 95 | fn | collectIncludeOwnedPaths | (private) |
| 112 | fn | collectMutableSiblingPathsAtInclude | (private) |
| 122 | fn | isMutableSiblingPathAtInclude | (private) |
| 144 | fn | formatConfigPath | (private) |
| 148 | fn | findContainingArrayPath | (private) |
| 164 | fn | hasChangedEquivalentArraySibling | (private) |
| 180 | fn | hasNewEquivalentArraySibling | (private) |
| 196 | fn | getPathValue | (private) |
| 215 | fn | setPathValue | (private) |
| 239 | fn | pathStartsWith | (private) |
| 243 | fn | pathOverlapsAny | (private) |
| 251 | fn | isIncludeOwnedPath | (private) |
| 261 | fn | findOverlappingIncludeOwnedPath | (private) |
| 274 | fn | setPathValueCreatingParents | (private) |
| 296 | fn | deletePathValue | (private) |
| 323 | fn | preserveSourceValueAtPath | (private) |
| 351 | fn | preserveAuthoredAgentParams | (private) |
| 419 | fn | normalizeAgentModelConfigForWrite | (private) |
| 459 | fn | normalizeModelConfigPathForWrite | (private) |
| 468 | fn | normalizeModelStringPathForWrite | (private) |
| 477 | fn | normalizeAgentModelRefsAtPathForWrite | (private) |
| 503 | fn | normalizeAgentListModelRefsForWrite | (private) |
| 528 | fn | normalizeToolsModelRefsForWrite | (private) |
| 532 | fn | normalizeModelProviderCatalogRefsForWrite | (private) |
| 578 | fn | normalizeModelRefsForWrite | (private) |
| 592 | type | IncludeSiblingProjection | (private) |
| 597 | fn | projectRootAuthoredIncludeSibling | (private) |
| 690 | fn | preserveUntouchedIncludes | (private) |
| 712 | fn | omitMutableSiblingValues | (private) |
| 749 | fn | projectAgainst | (private) |
| 777 | fn | preserveIncludeOwnedConfigForWrite | pub |
| 789 | fn | hasPathValue | (private) |
| 811 | fn | mergeMissingExplicitValues | (private) |
| 862 | fn | injectExplicitlySetPaths | (private) |
| 903 | fn | resolvePersistCandidateForWrite | pub |
| 944 | fn | readRootSchemaUri | (private) |
| 951 | fn | hasOwnRootSchemaKey | (private) |
| 955 | fn | preserveRootSchemaUri | (private) |
| 973 | fn | formatConfigValidationFailure | pub |
| 994 | fn | isNumericPathSegment | (private) |
| 998 | fn | parseArrayIndexPathSegment | (private) |
| 1002 | fn | isWritePlainObject | (private) |
| 1006 | fn | hasOwnObjectKey | (private) |
| 1012 | fn | coerceConfig | (private) |
| 1019 | fn | unsetPathForWriteAt | (private) |
| 1085 | fn | unsetPathForWrite | (private) |
| 1105 | fn | applyUnsetPathsForWrite | pub |
| 1122 | fn | resolveManagedUnsetPathsForWrite | pub |
| 1141 | fn | collectChangedPaths | pub |
| 1178 | fn | parentPath | (private) |
| 1190 | fn | isPathChanged | (private) |
| 1204 | fn | restoreEnvRefsFromMap | pub |
| 1262 | fn | resolveWriteEnvSnapshotForPath | pub |

## src/config/issue-location.test.ts (567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | PathSegment | (private) |
| 7 | fn | formatConfigIssuePath | (private) |
| 16 | fn | resolveConfigIssueLineInRaw | (private) |
| 29 | fn | appendReceivedValueHint | (private) |
| 312 | fn | issue | (private) |

## src/config/mutate.test.ts (2602 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MockValidationIssue | (private) |
| 28 | type | MockValidationResult | (private) |
| 31 | type | ConfigIOReadForWrite | (private) |
| 77 | fn | createSnapshot | (private) |
| 105 | fn | resolveIncludeTarget | (private) |
| 109 | fn | allowConfigPathWrite | (private) |
| 1822 | fn | assertConfigPathForWrite | (private) |
| 1880 | fn | assertConfigPathForWrite | (private) |
| 1936 | fn | assertConfigPathForWrite | (private) |

## src/config/mutate.ts (1256 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | type | ConfigReplaceResult | pub |
| 96 | type | ConfigMutationIO | pub |
| 105 | type | ConfigMutationContext | pub |
| 116 | type | ConfigMutationCommitParams | pub |
| 125 | type | ConfigMutationCommitResult | pub |
| 131 | type | ConfigMutationCommit | pub |
| 157 | type | ConfigMutationOwnership | (private) |
| 164 | fn | resolveManagedRuntimeEnvBaseline | (private) |
| 177 | fn | assertManagedRuntimeEnvGeneration | (private) |
| 186 | fn | assertBaseHashMatches | (private) |
| 196 | fn | assertExpectedConfigPathMatches | (private) |
| 208 | fn | withConfigMutationLock | (private) |
| 233 | fn | markActiveConfigMutationPath | (private) |
| 237 | fn | readConfigSnapshotForMutation | (private) |
| 271 | fn | createConfigMutationOwnership | (private) |
| 287 | fn | withConfigMutationSnapshotLock | (private) |
| 321 | fn | withConfigMutationExclusive | pub |
| 325 | fn | getChangedTopLevelKeys | (private) |
| 333 | fn | getSingleTopLevelIncludeTarget | (private) |
| 356 | fn | containsConfigIncludeDirective | (private) |
| 369 | fn | snapshotProvesBrokenInclude | (private) |
| 380 | fn | formatJsonFileValue | (private) |
| 384 | type | RootBoundIncludeFile | (private) |
| 390 | fn | isMissingFileError | (private) |
| 395 | fn | resolveRootBoundRelativePath | (private) |
| 404 | fn | resolveRootBoundIncludeFile | (private) |
| 438 | fn | resolveExpectedRootBoundIncludeFile | (private) |
| 467 | fn | readRootBoundFileRawIfExists | (private) |
| 478 | fn | assertRootConfigStillMatchesSnapshot | (private) |
| 496 | fn | rollbackJsonFileWriteIfUnchanged | (private) |
| 523 | fn | createRootBoundBackupFs | (private) |
| 556 | fn | writeRootBoundJsonFile | (private) |
| 624 | fn | tryWriteSingleTopLevelIncludeMutation | (private) |
| 859 | fn | notifyCommittedWrite | (private) |
| 936 | fn | resolveConfigWriteResult | (private) |
| 949 | fn | replaceConfigFile | pub |
| 977 | fn | replaceConfigFileUnlocked | (private) |
| 1054 | fn | commitPreparedConfigMutation | (private) |
| 1074 | fn | transformConfigFileAttempt | (private) |
| 1144 | fn | transformConfigFile | pub |
| 1165 | fn | transformConfigFileWithRetry | pub |
| 1172 | fn | runWithPrepared | (private) |
| 1211 | fn | mutateConfigFile | pub |
| 1233 | fn | mutateConfigFileWithRetry | pub |

## src/config/plugin-auto-enable.channels.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | applyWithApnChannelConfig | (private) |

## src/config/plugin-auto-enable.core.test.ts (1364 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | makeBundledChannelCandidate | (private) |

## src/config/plugin-auto-enable.shared.ts (1158 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | resolveAutoEnableProviderPluginIds | (private) |
| 60 | fn | canReuseUnscopedCurrentPluginMetadataSnapshot | (private) |
| 64 | fn | extractProviderFromModelRef | (private) |
| 73 | fn | hasConfiguredEmbeddedHarnessRuntime | (private) |
| 80 | fn | resolveAgentHarnessOwnerPluginIds | (private) |
| 98 | fn | isProviderConfigured | (private) |
| 134 | fn | hasPluginOwnedWebSearchConfig | (private) |
| 139 | fn | hasPluginOwnedWebFetchConfig | (private) |
| 144 | fn | resolvePluginOwnedToolConfigKeys | (private) |
| 155 | fn | hasPluginOwnedToolConfig | (private) |
| 163 | fn | resolveProviderPluginsWithOwnedWebSearch | (private) |
| 171 | fn | resolveProviderPluginsWithOwnedWebFetch | (private) |
| 179 | fn | resolvePluginIdsForConfiguredSpeechProvider | (private) |
| 197 | fn | resolvePluginsWithOwnedToolConfig | (private) |
| 203 | fn | resolvePluginIdForConfiguredWebFetchProvider | (private) |
| 220 | fn | resolvePluginIdForConfiguredWebSearchProvider | (private) |
| 235 | fn | normalizeManifestChannelId | (private) |
| 239 | fn | getManifestChannelPreferOver | (private) |
| 246 | fn | collectPluginIdsForConfiguredChannel | (private) |
| 291 | fn | collectConfiguredChannelIds | (private) |
| 318 | fn | isAutoEnableConfiguredChannelSignal | (private) |
| 341 | fn | hasConfiguredWebSearchPluginEntry | (private) |
| 352 | fn | hasConfiguredWebSearchProviderSelection | (private) |
| 361 | fn | hasConfiguredWebFetchPluginEntry | (private) |
| 372 | fn | hasConfiguredSpeechProviderSelection | (private) |
| 376 | fn | hasConfiguredPluginConfigEntry | (private) |
| 385 | fn | listContainsNormalized | (private) |
| 392 | fn | toolPolicyReferencesBrowser | (private) |
| 400 | fn | hasBrowserToolReference | (private) |
| 410 | fn | collectConfiguredPluginEntryIds | (private) |
| 420 | fn | hasOwnPluginEntry | (private) |
| 425 | fn | isPluginEntryExplicitlyDisabled | (private) |
| 429 | fn | hasNonDisabledPluginEntry | (private) |
| 436 | fn | hasBrowserSetupAutoEnableRelevantConfig | (private) |
| 449 | fn | hasAcpxSetupAutoEnableRelevantConfig | (private) |
| 464 | fn | hasXaiSetupAutoEnableRelevantConfig | (private) |
| 475 | fn | resolveRelevantSetupAutoEnablePluginIds | (private) |
| 489 | fn | hasSetupAutoEnableRelevantConfig | (private) |
| 498 | fn | hasPluginEntries | (private) |
| 503 | fn | hasPluginAllowlistWithMaterialEntries | (private) |
| 518 | fn | hasConfiguredProviderModelOrHarness | (private) |
| 531 | fn | arePluginsGloballyDisabled | (private) |
| 535 | fn | configMayNeedPluginManifestRegistry | (private) |
| 570 | fn | configMayNeedPluginAutoEnable | pub |
| 577 | fn | resolvePluginAutoEnableReadiness | pub |
| 625 | fn | resolvePluginAutoEnableCandidateReason | pub |
| 659 | fn | resolveConfiguredPluginAutoEnableCandidates | pub |
| 805 | fn | isPluginExplicitlyDisabled | (private) |
| 822 | fn | isPluginDenied | (private) |
| 827 | fn | isPluginExplicitlySelected | (private) |
| 835 | fn | disableImplicitPreferredOverPlugin | (private) |
| 866 | fn | isBuiltInChannelAlreadyEnabled | (private) |
| 877 | fn | resolveAutoEnableChannelId | (private) |
| 912 | fn | registerPluginEntry | (private) |
| 952 | fn | hasMaterialPluginEntryConfig | (private) |
| 967 | fn | isKnownPluginId | (private) |
| 977 | fn | materializeConfiguredPluginEntryAllowlist | (private) |
| 1009 | fn | resolveChannelAutoEnableDisplayLabel | (private) |
| 1022 | fn | formatAutoEnableChange | (private) |
| 1035 | fn | resolvePluginAutoEnableManifestRegistry | pub |
| 1075 | fn | materializePluginAutoEnableCandidatesInternal | pub |

## src/config/redact-snapshot.test.ts (1479 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | expectNestedPairValue | (private) |
| 30 | fn | expectNestedLevelPairValue | (private) |
| 38 | fn | expectGatewayAuthFieldValue | (private) |
| 999 | fn | buildNestedValuesSnapshot | (private) |
| 1004 | fn | assertNestedValuesRoundTrip | (private) |

## src/config/redact-snapshot.ts (891 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | isSensitivePath | (private) |
| 29 | fn | isEnvVarPlaceholder | (private) |
| 33 | fn | isWholeObjectSensitivePath | (private) |
| 38 | fn | isSensitiveUrlPath | (private) |
| 42 | fn | hasSensitiveUrlHintPath | (private) |
| 49 | fn | collectSensitiveStrings | (private) |
| 78 | fn | isExplicitlyNonSensitivePath | (private) |
| 93 | fn | isSecretRefWithProvider | (private) |
| 106 | fn | buildRedactionLookup | (private) |
| 140 | fn | redactObject | (private) |
| 141 | fn | redactObject | (private) |
| 155 | fn | collectSensitiveValues | (private) |
| 174 | fn | redactObjectWithLookup | (private) |
| 294 | fn | redactObjectGuessing | (private) |
| 370 | fn | redactRawText | (private) |
| 381 | fn | withRestoreWarningsSuppressed | (private) |
| 407 | fn | redactConfigObject | pub |
| 411 | fn | redactConfigSnapshot | pub |
| 472 | type | RedactionResult | (private) |
| 486 | fn | restoreRedactedValues | pub |
| 522 | class | RedactionError | (private) |
| 536 | fn | restoreOriginalValueOrThrow | (private) |
| 550 | fn | assertNoRedactedSentinel | (private) |
| 572 | fn | maybeRestoreSecretRefId | (private) |
| 619 | fn | mapRedactedArray | (private) |
| 632 | fn | toObjectRecord | (private) |
| 636 | fn | shouldPassThroughRestoreValue | (private) |
| 640 | fn | toRestoreArrayContext | (private) |
| 650 | fn | restoreArrayItemWithLookup | (private) |
| 670 | fn | restoreArrayItemWithGuessing | (private) |
| 692 | fn | restoreGuessingArray | (private) |
| 713 | fn | shouldRestoreSensitiveGuessingPath | (private) |
| 724 | fn | restoreRedactedEntryGuessing | (private) |
| 770 | fn | restoreRedactedValuesWithLookup | (private) |
| 856 | fn | restoreRedactedValuesGuessing | (private) |

## src/config/schema.help.quality.test-fixtures.ts (560 lines)

_No symbols extracted._

## src/config/schema.help.runtime.ts (595 lines)

_No symbols extracted._

## src/config/schema.labels.ts (1048 lines)

_No symbols extracted._

## src/config/schema.test.ts (1191 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | SchemaInput | (private) |
| 443 | fn | progressPropsFor | (private) |

## src/config/schema.ts (846 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ConfigSchema | (private) |
| 20 | type | JsonSchemaNode | (private) |
| 22 | type | JsonSchemaObject | (private) |
| 71 | fn | isObjectSchema | (private) |
| 82 | fn | mergeObjectSchema | (private) |
| 102 | type | ConfigSchemaResponse | pub |
| 109 | type | ConfigSchemaLookupChild | (private) |
| 120 | type | ConfigSchemaReloadKind | (private) |
| 122 | type | ConfigSchemaReloadMetadata | (private) |
| 126 | type | ConfigSchemaReloadMetadataResolver | (private) |
| 130 | type | ConfigSchemaLookupResult | (private) |
| 139 | type | PluginUiMetadata | pub |
| 150 | type | ChannelUiMetadata | pub |
| 162 | fn | schemaJsonBytes | (private) |
| 170 | fn | buildOmittedExtensionConfigSchema | (private) |
| 178 | fn | limitExtensionSchemas | (private) |
| 223 | fn | collectExtensionHintKeys | (private) |
| 229 | fn | collectPrefixedHintKeys | (private) |
| 237 | fn | collectSchemaKeys | (private) |
| 285 | fn | applyPluginHints | (private) |
| 328 | fn | applyChannelHints | (private) |
| 361 | fn | listHeartbeatTargetChannels | (private) |
| 383 | fn | applyHeartbeatTargetHints | (private) |
| 403 | fn | applyPluginSchemas | (private) |
| 444 | fn | applyChannelSchemas | (private) |
| 474 | fn | buildMergedSchemaCacheKey | (private) |
| 516 | fn | setMergedSchemaCache | (private) |
| 526 | fn | getBundledChannelSchemaMetadata | (private) |
| 541 | fn | buildBaseConfigSchema | (private) |
| 566 | fn | buildConfigSchema | pub |
| 614 | fn | normalizeLookupPath | (private) |
| 622 | fn | splitLookupPath | (private) |
| 627 | fn | resolveUiHintMatch | (private) |
| 638 | fn | resolveItemsSchema | (private) |
| 649 | fn | resolveLookupChildSchema | (private) |
| 675 | fn | stripSchemaForLookup | (private) |
| 761 | fn | buildLookupChildren | (private) |
| 770 | fn | pushChild | (private) |
| 803 | fn | lookupConfigSchema | pub |

## src/config/sessions.cache.test.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createSessionEntry | (private) |
| 35 | fn | createSingleSessionStore | (private) |

## src/config/sessions.test.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | createCaseDir | (private) |
| 41 | fn | createSessionStoreFixture | (private) |
| 51 | fn | expectedBot1FallbackSessionPath | (private) |
| 61 | fn | createAgentSessionsLayout | (private) |
| 88 | fn | normalizePathForComparison | (private) |

## src/config/types.agent-defaults.ts (571 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | AgentContextInjection | pub |
| 20 | type | OptionalBootstrapFileName | pub |
| 22 | type | EmbeddedAgentExecutionContract | pub |
| 24 | type | SubagentDelegationMode | pub |
| 26 | type | AgentImageQualityPreference | pub |
| 28 | type | AgentThinkingLevel | pub |
| 39 | type | Gpt5PromptOverlayConfig | pub |
| 44 | type | PromptOverlaysConfig | pub |
| 49 | type | AgentModelEntryConfig | pub |
| 60 | type | AgentModelPolicyConfig | pub |
| 65 | type | AgentModelListConfig | pub |
| 72 | type | AgentContextPruningConfig | pub |
| 91 | type | AgentStartupContextConfig | pub |
| 106 | type | AgentContextLimitsConfig | pub |
| 117 | type | CliBackendConfig | pub |
| 202 | type | AgentDefaultsConfig | pub |
| 472 | type | AgentCompactionMode | pub |
| 473 | type | AgentCompactionPostIndexSyncMode | pub |
| 474 | type | AgentCompactionIdentifierPolicy | pub |
| 475 | type | AgentCompactionQualityGuardConfig | pub |
| 482 | type | AgentCompactionMidTurnPrecheckConfig | pub |
| 490 | type | AgentCompactionConfig | pub |
| 555 | type | AgentCompactionMemoryFlushConfig | pub |

## src/config/types.gateway.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | GatewayBindMode | pub |
| 7 | type | GatewayTlsConfig | pub |
| 20 | type | WideAreaDiscoveryConfig | pub |
| 28 | type | MdnsDiscoveryMode | pub |
| 30 | type | MdnsDiscoveryConfig | pub |
| 40 | type | DiscoveryConfig | pub |
| 47 | type | TalkProviderConfig | pub |
| 54 | type | TalkRealtimeConfig | pub |
| 85 | type | ResolvedTalkConfig | pub |
| 92 | type | TalkConfig | pub |
| 120 | type | TalkConfigResponse | pub |
| 125 | type | GatewayControlUiConfig | pub |
| 170 | type | GatewayAuthMode | pub |
| 177 | type | GatewayTrustedProxyConfig | pub |
| 219 | type | GatewayAuthConfig | pub |
| 237 | type | GatewayAuthRateLimitConfig | pub |
| 249 | type | GatewayTailscaleMode | pub |
| 251 | type | GatewayTailscaleConfig | pub |
| 267 | type | GatewayRemoteConfig | pub |
| 298 | type | GatewayTerminalConfig | pub |
| 315 | type | GatewayReloadMode | pub |
| 317 | type | GatewayReloadConfig | pub |
| 322 | type | GatewayHttpChatCompletionsConfig | pub |
| 332 | type | GatewayHttpChatCompletionsImagesConfig | pub |
| 350 | type | GatewayHttpResponsesConfig | pub |
| 367 | type | GatewayHttpResponsesFilesConfig | pub |
| 389 | type | GatewayHttpResponsesPdfConfig | pub |
| 398 | type | GatewayHttpResponsesImagesConfig | pub |
| 416 | type | GatewayHttpEndpointsConfig | pub |
| 423 | type | GatewayHttpSecurityHeadersConfig | pub |
| 433 | type | GatewayHttpConfig | pub |
| 440 | type | GatewayPushApnsRelayConfig | pub |
| 447 | type | GatewayPushApnsConfig | pub |
| 452 | type | GatewayPushConfig | pub |
| 457 | type | GatewayNodePairingConfig | pub |
| 486 | type | GatewayNodesConfig | pub |
| 512 | type | GatewayToolsConfig | pub |
| 519 | type | GatewayConfig | pub |

## src/config/types.tools.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | MediaUnderstandingScopeMatch | pub |
| 20 | type | MediaUnderstandingScopeRule | pub |
| 27 | type | MediaUnderstandingScopeConfig | pub |
| 34 | type | MediaUnderstandingCapability | pub |
| 36 | type | MediaUnderstandingAttachmentsConfig | pub |
| 45 | type | MediaProviderRequestConfig | (private) |
| 56 | type | MediaUnderstandingModelConfig | pub |
| 85 | type | MediaUnderstandingConfig | pub |
| 120 | type | LinkModelConfig | pub |
| 131 | type | LinkToolsConfig | pub |
| 144 | type | MediaToolsConfig | pub |
| 154 | type | ToolProfileId | pub |
| 156 | type | ToolLoopDetectionConfig | pub |
| 161 | type | ToolSearchConfig | pub |
| 176 | type | CodeModeConfig | pub |
| 205 | type | SwarmConfig | pub |
| 222 | type | SessionsToolsVisibility | pub |
| 224 | type | ToolPolicyConfig | pub |
| 240 | type | GroupToolPolicyConfig | pub |
| 250 | type | ToolsBySenderKeyType | pub |
| 252 | fn | parseToolsBySenderTypedKey | pub |
| 288 | type | GroupToolPolicyBySenderConfig | pub |
| 290 | type | ExecToolConfig | pub |
| 355 | type | FsToolsConfig | pub |
| 363 | type | SessionsSpawnToolsConfig | pub |
| 374 | type | AgentToolsConfig | pub |
| 414 | type | MemorySearchConfig | pub |
| 556 | type | ToolsConfig | pub |
| 701 | type | MessageToolsConfig | pub |

## src/config/validation.channel-metadata.test.ts (843 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | createTelegramSchemaRegistry | (private) |
| 57 | fn | createPluginConfigSchemaRegistry | (private) |
| 79 | fn | createExternalFeishuSchemaRegistry | (private) |
| 108 | fn | createExternalFeishuSchemaWithCloserMetadataRegistry | (private) |
| 129 | fn | createExternalFeishuSchemaWithRootOnlyShadowRegistry | (private) |
| 163 | fn | createCompatPluginConfigSchemaRegistry | (private) |
| 184 | fn | createDmPolicyRegistry | (private) |
| 205 | fn | createPluginManifestRecord | (private) |
| 261 | fn | setupTelegramSchemaWithDefault | (private) |
| 265 | fn | setupPluginSchemaWithRequiredDefault | (private) |

## src/config/validation.ts (2205 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | formatRemovedPluginConfigWarning | (private) |
| 85 | type | UnknownIssueRecord | (private) |
| 86 | type | ConfigPathSegment | (private) |
| 87 | type | ExplicitPluginReferences | (private) |
| 93 | type | AllowedValuesCollection | (private) |
| 98 | type | JsonSchemaLike | (private) |
| 100 | fn | materializeBundledModelProviderOverlays | (private) |
| 132 | fn | stripPreservedLegacyRootKeysForValidation | (private) |
| 173 | fn | normalizeBundledChannelId | (private) |
| 182 | fn | toIssueRecord | (private) |
| 189 | fn | toConfigPathSegments | (private) |
| 199 | fn | formatConfigPath | (private) |
| 203 | fn | withConfigIssuePath | (private) |
| 214 | fn | formatMissingOfficialExternalPluginWarning | (private) |
| 236 | fn | asJsonSchemaLike | (private) |
| 240 | fn | lookupJsonSchemaNode | (private) |
| 267 | fn | collectAllowedValuesFromJsonSchemaNode | (private) |
| 310 | fn | collectAllowedValuesFromBundledChannelSchemaPath | (private) |
| 327 | fn | formatRawChannelConfigIssueMessage | (private) |
| 331 | fn | buildDmPolicyDependencyWarning | (private) |
| 359 | fn | hasDefinedConfigValue | (private) |
| 363 | fn | hasConfiguredDmAllowFrom | (private) |
| 380 | fn | isConfigRecordEnabled | (private) |
| 384 | type | ChannelDmPolicyDependencyWarningOptions | (private) |
| 388 | fn | hasChannelDmPolicyDependencyWarningCandidates | (private) |
| 412 | fn | collectChannelDmPolicyDependencyWarnings | (private) |
| 468 | fn | collectRawBundledChannelConfigIssues | (private) |
| 503 | fn | collectAllowedValuesFromCustomIssue | (private) |
| 518 | fn | appendNumericBoundHint | (private) |
| 543 | fn | collectAllowedValuesFromIssue | (private) |
| 594 | fn | collectAllowedValuesFromIssueList | (private) |
| 613 | fn | collectAllowedValuesFromUnknownIssue | (private) |
| 621 | fn | isBindingsIssuePath | (private) |
| 625 | fn | isRouteTypeMismatchIssue | (private) |
| 636 | fn | extractBindingsSpecificUnionIssue | (private) |
| 719 | fn | isObjectSecretRefCandidate | (private) |
| 726 | fn | formatUnsupportedMutableSecretRefMessage | (private) |
| 735 | fn | pushUnsupportedMutableSecretRefIssue | (private) |
| 749 | fn | collectUnsupportedMutableSecretRefIssues | (private) |
| 758 | fn | formatFilteredUnrecognizedKeyMessage | (private) |
| 766 | fn | filterUnsupportedMutableSecretRefSchemaIssue | (private) |
| 807 | fn | mergeUnsupportedMutableSecretRefIssues | (private) |
| 830 | fn | collectUnsupportedSecretRefPolicyIssues | pub |
| 834 | fn | mapZodIssueToConfigIssue | (private) |
| 877 | fn | collectExplicitPluginReferences | (private) |
| 928 | fn | resolveExplicitPluginReferencePath | (private) |
| 951 | fn | isWorkspaceAvatarPath | (private) |
| 957 | fn | createIdentityAvatarIssue | (private) |
| 962 | fn | validateIdentityAvatar | (private) |
| 1015 | fn | validateGatewayTailscaleBind | (private) |
| 1042 | fn | validateGatewayTailscaleAuth | (private) |
| 1055 | fn | collectModelPolicyAllowIssues | (private) |
| 1070 | fn | validateRefs | (private) |
| 1114 | fn | validateConfigObjectRaw | pub |
| 1184 | fn | validateConfigObject | pub |
| 1203 | type | ValidateConfigWithPluginsResult | (private) |
| 1215 | type | ValidateConfigWithPluginsParams | (private) |
| 1226 | fn | validateConfigObjectWithPlugins | pub |
| 1241 | fn | validateConfigObjectRawWithPlugins | pub |
| 1256 | fn | validateConfigObjectWithPluginsBase | (private) |
| 1311 | type | RegistryInfo | (private) |
| 1588 | fn | matches | (private) |
| 1615 | fn | validateWebSearchProvider | (private) |
| 1678 | fn | validateConfiguredModelRefs | (private) |
| 1729 | fn | replaceChannelConfig | (private) |
| 1742 | fn | replacePluginEntryConfig | (private) |
| 1833 | fn | validateHeartbeatTarget | (private) |
| 1969 | fn | findBlockedPluginDiagnostic | (private) |
| 1981 | fn | pushMissingPluginIssue | (private) |

## src/config/zod-schema.agent-defaults.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | SchemaParseResult | (private) |
| 12 | fn | expectSchemaSuccess | (private) |
| 16 | fn | expectSchemaFailurePath | (private) |

## src/config/zod-schema.agent-runtime.ts (1086 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | validateSandboxBindEntries | (private) |
| 112 | fn | validateTime | (private) |
| 456 | type | AllowlistPolicy | (private) |
| 461 | fn | addAllowAlsoAllowConflictIssue | (private) |
| 540 | fn | addExecPolicyModeConflictIssue | (private) |

## src/config/zod-schema.core.ts (1066 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | isAbsolutePath | (private) |
| 499 | fn | isBuiltInModelProviderOverlayId | pub |
| 850 | type | DmPolicyAllowFromViolation | pub |
| 871 | fn | requireOpenAllowFrom | pub |
| 896 | fn | requireAllowlistAllowFrom | pub |

## src/config/zod-schema.providers-core.ts (1417 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 183 | fn | validateTelegramCustomCommands | (private) |
| 1256 | fn | isAllowedMSTeamsServiceUrl | (private) |
| 1271 | fn | isAzureChinaBotFrameworkServiceUrl | (private) |

## src/config/zod-schema.root-shape.ts (547 lines)

_No symbols extracted._

## src/config/zod-schema.root-support.ts (610 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 496 | fn | isPlainHttpsUrl | (private) |
| 505 | fn | isEd25519PublicKeyConfig | (private) |

## src/docker-setup.e2e.test.ts (962 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createEnv | (private) |
| 55 | fn | runDockerSetup | (private) |
| 69 | fn | runDockerSetupWithUnsetGatewayToken | (private) |

## src/dockerfile.test.ts (610 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | collapseDockerContinuations | (private) |

## src/gateway/server/hooks.agent-trust.test.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | waitForFast | (private) |
| 61 | fn | buildMinimalParams | (private) |
| 77 | fn | buildAgentPayload | (private) |
| 97 | fn | dispatchAgentHook | (private) |
| 101 | fn | resolveDispatchAgentHook | (private) |
| 108 | fn | createDeferred | (private) |
| 116 | type | HookLogMeta | (private) |
| 129 | fn | logInfoMetaFor | (private) |
| 137 | fn | logWarnMetaFor | (private) |
| 165 | fn | continueRun | (private) |

## src/gateway/server/plugins-http.runtime-scopes.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | PluginHttpRoute | (private) |
| 27 | type | PluginRequestHandler | (private) |
| 28 | type | PluginRequestAuthContext | (private) |
| 30 | fn | createRoute | (private) |
| 50 | fn | createMockLogger | (private) |
| 68 | fn | assertWriteHelperAllowed | (private) |
| 76 | fn | assertAdminHelperAllowed | (private) |
| 84 | fn | createPluginRequestHandler | (private) |
| 100 | fn | dispatchPluginRequest | (private) |
| 117 | fn | dispatchTrustedGatewayRequest | (private) |
| 128 | fn | expectMissingWriteScopeFailure | (private) |
| 148 | fn | invokeRoute | (private) |

## src/gateway/server/plugins-http.test.ts (626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | PluginHandlerLog | (private) |
| 27 | fn | createPluginLog | (private) |
| 31 | fn | createRoute | (private) |
| 54 | fn | createMockUpgradeSocket | (private) |
| 68 | fn | buildRepeatedEncodedSlash | (private) |
| 76 | fn | createSecurePluginRouteHandler | (private) |
| 101 | fn | invokeSecureGatewayRoute | (private) |
| 124 | fn | invokeRouteAndCollectRuntimeScopes | (private) |
| 156 | fn | invokeImessageWebhook | (private) |
| 170 | fn | invokeCanvasGatewayUpgrade | (private) |

## src/gateway/server/ws-connection.ts (707 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | SubsystemLogger | (private) |
| 62 | fn | replaceControlChars | (private) |
| 78 | fn | stringMetaValue | (private) |
| 99 | fn | formatSocketEndpoint | (private) |
| 112 | fn | resolveSocketAddress | (private) |
| 138 | fn | isWsPayloadLimitError | (private) |
| 150 | type | GatewayWsSharedHandlerParams | (private) |
| 173 | type | AttachGatewayWsConnectionHandlerParams | pub |
| 191 | fn | attachGatewayWsMessageHandlerOnDemand | (private) |
| 195 | fn | queueMessage | (private) |
| 229 | fn | attachGatewayWsConnectionHandler | pub |
| 284 | fn | headerValue | (private) |
| 322 | fn | advanceHandshakePhase | (private) |
| 328 | fn | setCloseCause | (private) |
| 337 | fn | releasePreauthBudget | (private) |
| 345 | fn | setLastFrameMeta | (private) |
| 378 | fn | close | (private) |
| 399 | fn | send | (private) |
| 459 | fn | isNoisySwiftPmHelperClose | (private) |
| 463 | fn | isExpectedLocalAppStartupAbort | (private) |
| 593 | fn | setClient | (private) |

## src/gateway/test/server-sessions.test-helpers.ts (749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | getSessionsHandlers | pub |
| 42 | type | TestTranscriptMessage | (private) |
| 45 | type | RetireSessionMcpRuntimeParams | (private) |
| 49 | fn | seedSessionTranscript | pub |
| 77 | fn | seedLinearSessionTranscript | pub |
| 97 | fn | loadSeededTranscriptEvents | pub |
| 111 | fn | createDeferred | pub |
| 312 | fn | setupGatewaySessionsTestHarness | pub |
| 375 | fn | requireHarness | (private) |
| 382 | fn | requireSharedSessionStoreDir | (private) |
| 389 | fn | openClient | (private) |
| 392 | fn | createSessionStoreDir | (private) |
| 400 | fn | createSelectedGlobalSessionStore | (private) |
| 414 | fn | createConfiguredGlobalAgentSessionStore | (private) |
| 500 | fn | resetConfiguredGlobalAgentSessionStore | (private) |
| 516 | fn | seedActiveMainSession | (private) |
| 538 | fn | writeSingleLineSession | pub |
| 546 | fn | sessionStoreEntry | pub |
| 554 | fn | createCheckpointFixture | pub |
| 624 | fn | expectActiveRunCleanup | pub |
| 638 | fn | expectSessionQueueCleanup | (private) |
| 648 | fn | expectNoSessionQueueCleanup | pub |
| 652 | fn | getMainPreviewEntry | pub |
| 667 | type | SessionsHandlers | (private) |
| 669 | fn | directSessionReq | pub |
| 721 | fn | isInternalHookEvent | pub |

## src/hooks/bundled/session-memory/handler.test.ts (1105 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | createCaseWorkspace | (private) |
| 61 | fn | createMockSessionContent | (private) |
| 81 | fn | runNewWithPreviousSessionEntry | (private) |
| 123 | fn | runNewWithPreviousSession | (private) |
| 156 | fn | isAsciiDigits | (private) |
| 160 | fn | expectDatedMemoryFile | (private) |
| 176 | fn | createSessionMemoryWorkspace | (private) |
| 195 | fn | writeSessionTranscript | (private) |
| 208 | fn | readSessionTranscript | (private) |
| 219 | fn | expectMemoryConversation | (private) |
| 232 | fn | expectPathMissing | (private) |

## src/infra/agent-events.test.ts (811 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | AgentEventsModule | (private) |
| 29 | fn | importAgentEventsModule | (private) |
| 207 | fn | event | (private) |

## src/infra/agent-events.ts (793 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | AgentEventStream | pub |
| 25 | type | AgentItemEventPhase | (private) |
| 27 | type | AgentItemEventStatus | (private) |
| 29 | type | AgentItemEventKind | (private) |
| 32 | type | AgentItemEventData | pub |
| 55 | type | AgentApprovalEventPhase | (private) |
| 57 | type | AgentApprovalEventStatus | (private) |
| 59 | type | AgentApprovalEventKind | (private) |
| 62 | type | AgentApprovalEventData | pub |
| 79 | type | AgentCommandOutputEventData | pub |
| 93 | type | AgentPatchSummaryEventData | pub |
| 106 | type | AgentEventPayload | pub |
| 125 | type | AgentEventRuntimePayload | pub |
| 132 | type | AgentRunContext | (private) |
| 153 | type | AgentEventState | (private) |
| 175 | type | AgentEventExecutionContext | (private) |
| 180 | fn | getAgentEventState | (private) |
| 190 | fn | getAgentEventExecutionContext | (private) |
| 198 | fn | withAgentRunLifecycleGeneration | pub |
| 207 | fn | runOncePerAgentRun | pub |
| 222 | fn | getAgentEventLifecycleGeneration | pub |
| 227 | fn | assertAgentRunLifecycleGenerationCurrent | pub |
| 235 | fn | captureAgentRunLifecycleGeneration | pub |
| 244 | fn | rotateAgentEventLifecycleGeneration | pub |
| 251 | fn | registerAgentRunContext | pub |
| 316 | fn | getAgentRunContextOwners | (private) |
| 322 | fn | claimAgentRunContext | pub |
| 408 | fn | getAgentRunContext | pub |
| 413 | fn | recordCronNextCheckProposal | pub |
| 426 | fn | consumeCronNextCheckProposal | pub |
| 440 | fn | getAgentRunContextOwnerStatus | pub |
| 458 | fn | listAgentRunsForSession | pub |
| 479 | fn | hasProjectedAgentRunForSession | pub |
| 500 | fn | clearAgentRunContext | pub |
| 537 | fn | releaseAgentRunContext | pub |
| 564 | fn | sweepStaleRunContexts | pub |
| 583 | fn | enrichAgentEvent | (private) |
| 679 | fn | emitAgentEvent | pub |
| 686 | fn | emitAgentEventForOwner | pub |
| 697 | fn | emitAgentAuditEvent | pub |
| 712 | fn | emitAgentItemEvent | pub |
| 726 | fn | emitAgentApprovalEvent | pub |
| 740 | fn | emitAgentCommandOutputEvent | pub |
| 754 | fn | emitAgentPatchSummaryEvent | pub |
| 768 | fn | onAgentEvent | pub |
| 774 | fn | onAgentRuntimeEvent | pub |
| 779 | fn | onAgentAuditEvent | pub |
| 784 | fn | resetAgentEventsForTest | pub |

## src/infra/approval-handler-runtime.test.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ApprovalCapability | (private) |
| 17 | type | ApprovalNativeAdapter | (private) |
| 27 | fn | makeSequentialPendingDeliveryMock | (private) |
| 34 | fn | makeSequentialPendingBindingMock | (private) |
| 41 | fn | makeExecApprovalRequest | (private) |
| 54 | fn | makeNativeApprovalCapability | (private) |
| 82 | fn | createTestApprovalHandler | (private) |
| 89 | type | ApprovalHandlerRuntime | (private) |
| 91 | fn | expectApprovalRuntime | (private) |
| 101 | fn | firstCallArg | (private) |

## src/infra/approval-handler-runtime.ts (738 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | WrappedPendingEntry | (private) |
| 80 | type | ActiveApprovalEntries | (private) |
| 86 | type | WrappedPendingContent | (private) |
| 91 | fn | consumeActiveWrappedEntries | (private) |
| 101 | fn | finalizeWrappedEntries | (private) |
| 120 | fn | unbindWrappedEntries | (private) |
| 152 | fn | applyApprovalFinalAction | (private) |
| 188 | fn | createChannelApprovalNativeRuntimeAdapter | pub |
| 392 | fn | createChannelApprovalHandler | pub |
| 442 | fn | createChannelApprovalHandlerFromCapability | pub |

## src/infra/approval-native-route-coordinator.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | GatewayRequestFn | (private) |
| 26 | type | ApprovalRequest | (private) |
| 28 | type | ApprovalRouteRuntimeRecord | (private) |
| 37 | type | ApprovalRouteReport | (private) |
| 48 | type | PendingApprovalRouteNotice | (private) |
| 57 | type | RouteNoticeTarget | (private) |
| 64 | type | ApprovalNativeRouteCoordinatorState | (private) |
| 71 | fn | createApprovalNativeRouteCoordinatorState | (private) |
| 83 | fn | normalizeChannel | (private) |
| 87 | fn | clearPendingApprovalRouteNotice | (private) |
| 101 | fn | createPendingApprovalRouteNotice | (private) |
| 130 | fn | resolveRouteNoticeTargetFromRequest | (private) |
| 144 | fn | resolveFallbackRouteNoticeTarget | (private) |
| 158 | fn | didReportDeliverToOrigin | (private) |
| 177 | fn | hasPlannedNativeTargets | (private) |
| 181 | fn | readAllowedDecisionStrings | (private) |
| 190 | fn | resolveApprovalRouteNotice | (private) |
| 293 | fn | hasActiveApprovalNativeRouteRuntime | pub |
| 301 | fn | hasActiveApprovalNativeRouteRuntimeForState | (private) |
| 325 | fn | maybeFinalizeApprovalRouteNotice | (private) |
| 368 | fn | createApprovalNativeRouteReporter | pub |
| 378 | fn | createApprovalNativeRouteReporterForState | (private) |
| 494 | type | ApprovalNativeRouteCoordinator | pub |
| 501 | fn | createApprovalNativeRouteCoordinator | pub |

## src/infra/backup-create.test.ts (2243 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | makeResult | (private) |
| 52 | fn | listArchiveEntries | (private) |
| 65 | fn | listArchiveEntryDetails | (private) |
| 84 | fn | createUnsafeIndexDrift | (private) |

## src/infra/backup-create.ts (958 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | BackupLinkCacheKey | (private) |
| 49 | class | BackupLinkCache | (private) |
| 59 | type | BackupCreateOptions | pub |
| 75 | type | BackupManifestAsset | (private) |
| 81 | type | BackupManifest | (private) |
| 107 | type | BackupCreateResult | pub |
| 131 | fn | resolveOutputPath | (private) |
| 166 | fn | assertOutputPathReady | (private) |
| 179 | fn | buildTempArchivePath | (private) |
| 190 | fn | chooseBackupTempRoot | (private) |
| 220 | fn | isLinkUnsupportedError | (private) |
| 224 | fn | publishTempArchive | (private) |
| 260 | fn | canonicalizePathForContainment | (private) |
| 280 | fn | buildManifest | (private) |
| 323 | fn | formatBackupCreateSummary | pub |
| 357 | fn | remapArchiveEntryPath | (private) |
| 374 | fn | normalizeBackupFilterPath | (private) |
| 380 | fn | buildStateBackupFilter | (private) |
| 410 | type | SqliteBackupAsset | (private) |
| 416 | type | StateSqliteBackupPlan | (private) |
| 426 | fn | isCanonicalAgentSqlitePathOrAncestor | (private) |
| 449 | fn | isCanonicalAgentSqliteDatabasePath | (private) |
| 461 | fn | isStatePackageContentPath | (private) |
| 471 | fn | resolveSqliteBackupDatabasePath | (private) |
| 481 | fn | resolveSqliteBackupBasePath | (private) |
| 490 | fn | classifyStateSqliteBackupSourcePath | (private) |
| 515 | fn | isBackupTarFilterFile | (private) |
| 519 | fn | listStateSqlitePaths | (private) |
| 527 | fn | visit | (private) |
| 625 | fn | createStateSqliteBackupPlan | (private) |
| 715 | fn | createBackupArchive | pub |
| 792 | fn | createSnapshotPlans | (private) |

## src/infra/bonjour-discovery.ts (616 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | GatewayBonjourBeacon | pub |
| 32 | type | GatewayDiscoveryResolvedEndpoint | pub |
| 41 | fn | resolveGatewayDiscoveryEndpoint | pub |
| 67 | type | GatewayBonjourDiscoverOpts | (private) |
| 79 | fn | decodeDnsSdEscapes | (private) |
| 84 | fn | flush | (private) |
| 119 | fn | parseDigShortLines | (private) |
| 123 | fn | parseDigTxt | (private) |
| 141 | fn | parseDigSrv | (private) |
| 166 | fn | parseTailscaleStatusIPv4s | (private) |
| 170 | fn | addIps | (private) |
| 201 | fn | parsePortOrUndefined | (private) |
| 209 | fn | parseTxtTokens | (private) |
| 226 | fn | parseDnsSdBrowse | (private) |
| 244 | fn | parseDnsSdResolve | (private) |
| 306 | fn | discoverViaDnsSd | (private) |
| 328 | fn | discoverWideAreaViaTailnetDns | (private) |
| 337 | fn | remainingMs | (private) |
| 470 | fn | parseAvahiBrowse | (private) |
| 558 | fn | discoverViaAvahi | (private) |
| 572 | fn | discoverGatewayBeacons | pub |

## src/infra/clawhub-install-trust.ts (1099 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ClawHubTrustErrorCode | pub |
| 28 | type | ClawHubRiskAcknowledgementRequest | pub |
| 36 | type | ClawHubTrustInstallRecordFields | (private) |
| 47 | type | ClawHubTrustAcceptedResult | (private) |
| 53 | type | ClawHubTrustFailure | (private) |
| 61 | type | ClawHubInstallLogger | (private) |
| 66 | type | ClawHubTrustSubject | (private) |
| 72 | type | ClawHubSkillSecurityLinks | (private) |
| 77 | type | ClawHubPluginSecurityLinks | (private) |
| 82 | type | ClawHubSecurityLinks | (private) |
| 83 | type | ClawHubFetchedSubjectSecurity | (private) |
| 108 | fn | normalizeClawHubTrustToken | (private) |
| 112 | fn | formatClawHubTrustStatus | (private) |
| 116 | fn | formatClawHubReasonCode | (private) |
| 143 | type | ClawHubTrustAssessment | (private) |
| 149 | fn | isPendingOrStaleTrustWarning | (private) |
| 153 | fn | isNonRiskScanStatus | (private) |
| 157 | fn | isNonRiskReason | (private) |
| 161 | fn | resolveClawHubRiskReasons | (private) |
| 186 | fn | resolveClawHubTrustStatusNotices | (private) |
| 203 | fn | isBlockingClawHubTrust | (private) |
| 219 | fn | hasMaliciousClawHubTrustSignal | (private) |
| 229 | fn | assessClawHubTrust | (private) |
| 244 | fn | buildClawHubTrustInstallRecordFields | (private) |
| 267 | fn | encodeClawHubPackagePath | (private) |
| 274 | fn | resolveClawHubSubjectUrl | (private) |
| 285 | fn | resolveClawHubSecurityLinks | (private) |
| 310 | fn | padRight | (private) |
| 314 | fn | wrapWords | (private) |
| 336 | fn | resolveClawHubTrustAccent | (private) |
| 352 | fn | formatClawHubEvidenceLine | (private) |
| 361 | fn | renderClawHubTrustBox | (private) |
| 386 | fn | formatLinkedClawHubValue | (private) |
| 398 | fn | formatClawHubTrustEvidenceLines | (private) |
| 462 | fn | formatClawHubRawLinkLine | (private) |
| 466 | fn | formatClawHubRawLinks | (private) |
| 487 | fn | formatClawHubTrustWarning | (private) |
| 575 | fn | formatClawHubReleaseLabel | (private) |
| 579 | fn | formatClawHubSubjectPackageName | (private) |
| 585 | fn | formatClawHubSubjectReleaseLabel | (private) |
| 589 | fn | validateClawHubSecurityIdentity | (private) |
| 617 | fn | readSkillVerdictSecurityStatus | (private) |
| 628 | fn | readSkillVerdictSecurityPassed | (private) |
| 638 | fn | hasUsablePassingSkillVerdictSecurity | (private) |
| 644 | fn | hasSkillVerdictSecurityError | (private) |
| 648 | fn | isSkillVerdictPendingReason | (private) |
| 653 | fn | isSkillVerdictStaleReason | (private) |
| 658 | fn | isSkillVerdictBlockingReason | (private) |
| 669 | fn | mapSkillSecurityVerdictToPackageSecurity | (private) |
| 749 | fn | resolveSkillSecurityLinks | (private) |
| 763 | fn | readObject | (private) |
| 769 | fn | readOptionalStringField | (private) |
| 774 | fn | readOptionalNumberField | (private) |
| 780 | fn | mapSkillVerificationSecurityForVerdict | (private) |
| 800 | fn | hasOnlyNonSecuritySkillVerifyReasons | (private) |
| 809 | fn | isOwnerQualifiedSkillNotFoundVerdict | (private) |
| 813 | fn | mapSkillVerificationToSecurityVerdictItem | (private) |
| 871 | fn | fetchOwnerQualifiedSkillSecurityFallback | (private) |
| 911 | fn | fetchClawHubSubjectSecurity | (private) |
| 976 | fn | ensureClawHubPackageTrustAcknowledged | pub |

## src/infra/clawhub.test.ts (1478 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | expectPathMissing | (private) |
| 45 | fn | createStalledBodyResponse | (private) |
| 73 | fn | createOversizedArchiveResponse | (private) |
| 162 | fn | expectSearchUsesAuthToken | (private) |
| 398 | fn | fetchImpl | (private) |

## src/infra/clawhub.ts (1964 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | ClawHubPackageFamily | pub |
| 39 | type | ClawHubPackageChannel | pub |
| 41 | type | ClawHubPackageCompatibility | pub |
| 47 | type | ClawHubPackageHostTarget | (private) |
| 53 | type | ClawHubPackageEnvironmentSummary | (private) |
| 63 | type | ClawHubPackageArtifactSummary | pub |
| 77 | type | ClawHubArtifactScanState | (private) |
| 84 | type | ClawHubArtifactModerationState | (private) |
| 85 | type | ClawHubPackageSecurityTrust | pub |
| 93 | type | ClawHubResolvedArtifact | pub |
| 116 | type | ClawHubPackageArtifactResolverResponse | pub |
| 138 | type | ClawHubPackageSecurityResponse | pub |
| 150 | type | ClawHubPackageClawPackSummary | pub |
| 167 | type | ClawHubPackageListItem | (private) |
| 194 | type | ClawHubPackageDetail | pub |
| 231 | type | ClawHubPackageVersion | pub |
| 265 | type | ClawHubPackageSearchResult | pub |
| 270 | type | ClawHubSkillSearchResult | pub |
| 281 | type | ClawHubSkillDetail | pub |
| 311 | type | ClawHubSkillInstallResolutionResponse | pub |
| 348 | type | ClawHubSkillVerificationDecision | (private) |
| 350 | type | ClawHubSkillVerificationResponse | pub |
| 371 | type | ClawHubSkillSecurityVerdictRequestItem | (private) |
| 377 | type | ClawHubSkillSecurityVerdictItem | pub |
| 399 | type | ClawHubSkillSecurityVerdictsResponse | (private) |
| 404 | type | ClawHubDownloadResult | pub |
| 417 | type | FetchLike | (private) |
| 419 | type | ClawHubRequestParams | (private) |
| 434 | type | ClawHubConfigLike | (private) |
| 445 | fn | resolveClawHubRequestTimeoutMs | (private) |
| 449 | class | ClawHubRequestError | pub |
| 463 | fn | normalizeBaseUrl | (private) |
| 472 | fn | normalizeGitHubCodeloadBaseUrl | (private) |
| 479 | fn | extractTokenFromClawHubConfig | (private) |
| 496 | fn | resolveClawHubConfigPaths | (private) |
| 519 | fn | resolveClawHubAuthToken | (private) |
| 541 | fn | normalizePartialComparableVersion | (private) |
| 551 | fn | shouldPreservePluginApiPrereleaseFloor | (private) |
| 555 | fn | normalizePluginApiVersionForComparator | (private) |
| 565 | fn | satisfiesComparator | (private) |
| 588 | fn | satisfiesSemverRange | (private) |
| 603 | fn | normalizeOpenClawNumericCorrectionForPluginApi | (private) |
| 609 | fn | normalizeOpenClawReleaseSuffixForPluginApi | (private) |
| 614 | fn | buildUrl | (private) |
| 641 | fn | clawhubRequest | (private) |
| 649 | fn | request | (private) |
| 690 | fn | readErrorBody | (private) |
| 703 | fn | buildClawHubError | (private) |
| 723 | fn | formatRateLimitSuffix | (private) |
| 737 | fn | parseRateLimitDeltaSeconds | (private) |
| 745 | fn | fetchJson | (private) |
| 753 | fn | parseClawHubJsonBody | (private) |
| 774 | fn | readClawHubResponseBytes | (private) |
| 802 | fn | createClawHubBodyLimitError | (private) |
| 813 | fn | isJsonObject | (private) |
| 817 | fn | optionalStringField | (private) |
| 829 | fn | requiredBooleanField | (private) |
| 841 | fn | requiredStringArrayField | (private) |
| 853 | fn | requiredStringField | (private) |
| 865 | fn | requiredNumberField | (private) |
| 877 | fn | optionalBooleanField | (private) |
| 889 | fn | optionalStringArrayField | (private) |
| 904 | fn | parseOptionalSecurityPackage | (private) |
| 929 | fn | parseOptionalSecurityRelease | (private) |
| 952 | fn | parseClawHubPackageSecurityResponse | (private) |
| 987 | fn | resolveClawHubBaseUrl | pub |
| 991 | fn | isDefaultClawHubBaseUrl | pub |
| 995 | fn | buildVersionOrTagSearch | (private) |
| 1012 | fn | buildGitHubZipUrl | (private) |
| 1023 | fn | formatSha256Integrity | (private) |
| 1027 | fn | formatSha256Hex | (private) |
| 1031 | fn | formatSha512Integrity | (private) |
| 1036 | fn | formatSha1Hex | (private) |
| 1040 | fn | normalizeHeaderValue | (private) |
| 1045 | fn | safePackageTarballName | (private) |
| 1054 | fn | normalizeClawHubSha256Integrity | pub |
| 1082 | fn | normalizeClawHubSha256Hex | pub |
| 1090 | fn | fetchClawHubPackageDetail | pub |
| 1106 | fn | fetchClawHubPackageVersion | pub |
| 1125 | fn | fetchClawHubPackageArtifact | pub |
| 1144 | fn | fetchClawHubPackageSecurity | pub |
| 1164 | fn | searchClawHubPackages | pub |
| 1188 | fn | searchClawHubSkills | pub |
| 1210 | fn | fetchClawHubSkillDetail | pub |
| 1228 | fn | fetchClawHubSkillInstallResolution | pub |
| 1259 | fn | fetchClawHubSkillVerification | pub |
| 1279 | fn | fetchClawHubSkillSecurityVerdicts | pub |
| 1299 | fn | fetchClawHubSkillCard | pub |
| 1343 | fn | downloadClawHubPackageArchive | pub |
| 1467 | fn | downloadClawHubSkillArchive | pub |
| 1513 | fn | downloadClawHubSkillArchiveUrl | pub |
| 1555 | fn | downloadClawHubGitHubSkillArchive | pub |
| 1591 | fn | reportClawHubSkillInstallTelemetry | pub |
| 1628 | fn | isClawHubTelemetryDisabled | (private) |
| 1639 | fn | resolveLatestVersionFromPackage | pub |
| 1644 | fn | satisfiesPluginApiRange | pub |
| 1655 | fn | satisfiesGatewayMinimum | pub |
| 1676 | type | ClawHubPromotionModel | (private) |
| 1682 | type | ClawHubPromotion | pub |
| 1703 | type | ClawHubPromotionsFeedEntry | pub |
| 1705 | type | ClawHubPromotionsFeed | (private) |
| 1719 | fn | parseClawHubPromotionModel | (private) |
| 1750 | fn | parseClawHubPromotionCore | (private) |
| 1811 | fn | parseClawHubPromotion | (private) |
| 1823 | fn | fetchClawHubPromotions | pub |
| 1842 | fn | fetchClawHubPromotion | pub |
| 1868 | fn | parseClawHubPromotionsFeed | pub |
| 1916 | type | ClawHubPromotionsFeedFetchResult | (private) |
| 1920 | fn | fetchClawHubPromotionsFeed | pub |

## src/infra/delivery-queue-sqlite.ts (637 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | QueueStatus | (private) |
| 14 | type | DeliveryQueueDatabase | (private) |
| 18 | type | DeliveryQueueCompletionRetention | pub |
| 21 | type | DeliveryQueueRowMetadata | pub |
| 30 | type | DeliveryQueueEntryState | pub |
| 44 | type | UpsertDeliveryQueueEntryParams | (private) |
| 56 | type | FailPendingDeliveryQueueEntryResult | (private) |
| 58 | type | QueueRow | (private) |
| 69 | fn | openStateDatabase | (private) |
| 75 | fn | enoent | (private) |
| 83 | fn | inflate | (private) |
| 104 | fn | metadata | (private) |
| 124 | fn | upsertDeliveryQueueEntryInDatabase | (private) |
| 196 | fn | upsertDeliveryQueueEntry | pub |
| 200 | type | CommitStagedDeliveryQueueEntryParams | (private) |
| 209 | fn | commitStagedDeliveryQueueEntryInternal | (private) |
| 264 | fn | commitStagedDeliveryQueueEntry | pub |
| 275 | fn | commitStagedDeliveryQueueEntryOnce | pub |
| 286 | fn | expireStagingAndLoadDeliveryQueueEntries | pub |
| 308 | fn | selectPending | (private) |
| 349 | fn | loadDeliveryQueueEntry | pub |
| 378 | fn | getDeliveryQueueEntryStatus | pub |
| 397 | fn | loadDeliveryQueueEntries | pub |
| 426 | fn | deleteDeliveryQueueEntry | pub |
| 440 | fn | completeDeliveryQueueEntry | pub |
| 491 | fn | updateDeliveryQueueEntry | pub |
| 504 | type | ReserveDeliveryQueueAttemptResult | (private) |
| 509 | fn | reserveDeliveryQueueEntryAttempt | pub |
| 558 | type | FailedDeliveryQueueCount | (private) |
| 565 | fn | countFailedDeliveryQueueEntries | pub |
| 593 | fn | moveDeliveryQueueEntryToFailed | pub |
| 606 | fn | failPendingDeliveryQueueEntry | pub |

## src/infra/device-bootstrap.test.ts (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | createTempDir | (private) |
| 27 | fn | verifyBootstrapToken | (private) |

## src/infra/device-bootstrap.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | DeviceBootstrapStateFile | (private) |
| 34 | fn | resolveIssuedBootstrapProfileInput | (private) |
| 51 | fn | resolvePersistedBootstrapProfile | (private) |
| 57 | fn | resolvePersistedRedeemedProfile | (private) |
| 63 | fn | resolvePersistedPendingProfile | (private) |
| 69 | fn | resolveRequestedBootstrapProfile | (private) |
| 81 | fn | resolveIssuedBootstrapProfile | (private) |
| 96 | fn | warnIfIssuedBootstrapScopesWereStripped | (private) |
| 122 | fn | bootstrapProfileAllowsRequest | (private) |
| 137 | fn | bootstrapProfileSatisfiesProfile | (private) |
| 164 | fn | normalizeBootstrapPublicKey | (private) |
| 176 | fn | loadState | (private) |
| 183 | fn | issueDeviceBootstrapToken | pub |
| 218 | fn | clearDeviceBootstrapTokens | pub |
| 232 | fn | revokeDeviceBootstrapToken | pub |
| 256 | fn | revokeDeviceBootstrapTokensForDevice | pub |
| 287 | fn | restoreDeviceBootstrapToken | pub |
| 299 | fn | getDeviceBootstrapTokenProfile | pub |
| 317 | fn | redeemDeviceBootstrapTokenProfile | pub |
| 378 | fn | verifyDeviceBootstrapToken | pub |
| 469 | fn | getBoundDeviceBootstrapProfile | pub |

## src/infra/device-pairing.test.ts (2104 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | RotateDeviceTokenResult | (private) |
| 36 | fn | setupPairedOperatorDevice | (private) |
| 49 | fn | setupPairedNodeDevice | (private) |
| 62 | fn | setupPairedBrowserOperatorDevice | (private) |
| 81 | fn | setupOperatorToken | (private) |
| 89 | fn | verifyOperatorToken | (private) |
| 99 | fn | requireToken | (private) |
| 107 | fn | requireValue | (private) |
| 114 | fn | isRecord | (private) |
| 118 | fn | requireRecord | (private) |
| 125 | fn | expectRecordFields | (private) |
| 137 | fn | expectArrayIncludesAll | (private) |
| 146 | fn | requireRotatedEntry | (private) |
| 154 | fn | overwritePairedOperatorTokenScopes | (private) |
| 161 | fn | mutatePairedDevice | (private) |
| 175 | fn | mutatePendingRequest | (private) |
| 186 | fn | clearPairedOperatorApprovalBaseline | (private) |
| 196 | fn | makeDevicePairingDir | (private) |

## src/infra/device-pairing.ts (1567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | DevicePairingSupersededRequest | (private) |
| 42 | type | RequestDevicePairingResult | (private) |
| 50 | type | DeviceAuthTokenSummary | pub |
| 60 | type | RotateDeviceTokenDenyReason | pub |
| 67 | type | RotateDeviceTokenResult | (private) |
| 71 | type | RevokeDeviceTokenDenyReason | pub |
| 74 | type | RevokeDeviceTokenResult | (private) |
| 79 | type | PairedDeviceMetadataPatch | (private) |
| 92 | type | DevicePairingAccessMetadata | (private) |
| 98 | type | DevicePairingList | (private) |
| 104 | type | DevicePairingForbiddenReason | (private) |
| 112 | type | DevicePairingForbiddenResult | (private) |
| 120 | type | ApproveDevicePairingResult | (private) |
| 125 | type | DevicePairingStateFile | (private) |
| 140 | fn | formatDevicePairingForbiddenMessage | pub |
| 156 | fn | loadState | (private) |
| 177 | fn | withPairedDeviceRecords | pub |
| 193 | fn | normalizeDeviceId | (private) |
| 197 | fn | normalizeRole | (private) |
| 202 | fn | mergeRoles | (private) |
| 215 | fn | listActiveTokenRoles | (private) |
| 229 | fn | listApprovedPairedDeviceRoles | pub |
| 238 | fn | listEffectivePairedDeviceRoles | pub |
| 254 | fn | hasEffectivePairedDeviceRole | pub |
| 265 | fn | mergeScopes | (private) |
| 283 | fn | sameStringSet | (private) |
| 296 | fn | resolveRequestedRoles | (private) |
| 300 | fn | resolveRequestedScopes | (private) |
| 304 | fn | samePendingApprovalSnapshot | (private) |
| 326 | fn | isStringSubset | (private) |
| 339 | fn | incomingApprovalCoveredByExisting | (private) |
| 372 | fn | refreshPendingDevicePairingRequest | (private) |
| 399 | fn | resolveSupersededPendingSilent | (private) |
| 408 | fn | toPublicPendingDevicePairingRequest | (private) |
| 415 | fn | buildPendingDevicePairingRequest | (private) |
| 442 | fn | newToken | (private) |
| 446 | fn | getPairedDeviceFromState | (private) |
| 453 | fn | cloneDeviceTokens | (private) |
| 457 | fn | isBrowserRelatedPairedDevice | (private) |
| 466 | fn | deviceTokenIssuerMatches | (private) |
| 476 | fn | buildDeviceAuthToken | (private) |
| 501 | fn | mergeApprovalKind | (private) |
| 517 | fn | buildApprovedPairedDevice | (private) |
| 559 | fn | resolveRoleScopedDeviceTokenScopes | (private) |
| 567 | fn | preserveRoleScopedApprovalScopes | (private) |
| 575 | fn | resolveApprovedTokenScopes | (private) |
| 609 | fn | resolveApprovedDeviceScopeBaseline | (private) |
| 617 | fn | scopesWithinApprovedDeviceBaseline | (private) |
| 632 | fn | listDevicePairing | pub |
| 644 | fn | getPairedDevice | pub |
| 653 | fn | getPendingDevicePairing | pub |
| 670 | fn | reconcilePendingPairingRequests | (private) |
| 712 | fn | requestDevicePairing | pub |
| 781 | fn | approveDevicePairing | pub |
| 785 | fn | approveDevicePairing | pub |
| 803 | fn | approveDevicePairing | pub |
| 927 | fn | approveBootstrapDevicePairing | pub |
| 932 | fn | approveBootstrapDevicePairing | pub |
| 938 | fn | approveBootstrapDevicePairing | pub |
| 1028 | fn | rejectDevicePairing | pub |
| 1050 | fn | removePairedDevice | pub |
| 1074 | fn | silentPairingClusterKey | (private) |
| 1087 | type | PrunedSupersededPairedDevice | pub |
| 1106 | fn | pruneSupersededSilentPairedDevices | pub |
| 1161 | fn | removePairedDeviceRole | pub |
| 1245 | fn | updatePairedDeviceMetadata | pub |
| 1289 | fn | summarizeDeviceTokens | pub |
| 1309 | fn | verifyDeviceToken | pub |
| 1377 | fn | ensureDeviceToken | pub |
| 1438 | fn | resolveDeviceTokenUpdateContext | (private) |
| 1467 | fn | rotateDeviceToken | pub |
| 1529 | fn | revokeDeviceToken | pub |

## src/infra/diagnostic-events.test.ts (977 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | expectConsoleErrorPrefix | (private) |
| 52 | fn | hasActiveListeners | (private) |

## src/infra/diagnostic-events.ts (1514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | DiagnosticSessionState | pub |
| 16 | type | DiagnosticBaseEvent | (private) |
| 22 | type | DiagnosticUsageEvent | pub |
| 53 | type | DiagnosticFailoverEvent | pub |
| 67 | type | DiagnosticSecurityEventActor | pub |
| 76 | type | DiagnosticSecurityEventTarget | pub |
| 92 | type | DiagnosticSecurityEventPolicy | pub |
| 98 | type | DiagnosticSecurityEventControl | pub |
| 103 | type | DiagnosticSecurityEvent | pub |
| 127 | type | DiagnosticSecurityEventInput | pub |
| 134 | type | DiagnosticWebhookReceivedEvent | pub |
| 141 | type | DiagnosticWebhookProcessedEvent | pub |
| 149 | type | DiagnosticWebhookErrorEvent | pub |
| 157 | type | DiagnosticMessageQueuedEvent | pub |
| 166 | type | DiagnosticMessageReceivedEvent | pub |
| 176 | type | DiagnosticMessageDispatchStartedEvent | pub |
| 184 | type | DiagnosticMessageDispatchCompletedEvent | pub |
| 196 | type | DiagnosticMessageProcessedEvent | pub |
| 209 | type | DiagnosticMessageDeliveryKind | pub |
| 211 | type | DiagnosticMessageDeliveryBaseEvent | (private) |
| 217 | type | DiagnosticMessageDeliveryStartedEvent | pub |
| 221 | type | DiagnosticMessageDeliveryCompletedEvent | pub |
| 227 | type | DiagnosticMessageDeliveryErrorEvent | pub |
| 233 | type | DiagnosticTalkEvent | pub |
| 248 | type | DiagnosticSessionStateEvent | pub |
| 258 | type | DiagnosticSessionActiveWorkKind | pub |
| 260 | type | DiagnosticSessionAttentionClassification | pub |
| 266 | type | DiagnosticSessionAttentionBaseEvent | (private) |
| 283 | type | DiagnosticSessionLongRunningEvent | pub |
| 288 | type | DiagnosticSessionStalledEvent | pub |
| 293 | type | DiagnosticSessionStuckEvent | pub |
| 298 | type | DiagnosticSessionRecoveryStatus | pub |
| 305 | type | DiagnosticSessionRecoveryBaseEvent | (private) |
| 317 | type | DiagnosticSessionRecoveryRequestedEvent | pub |
| 321 | type | DiagnosticSessionRecoveryCompletedEvent | pub |
| 330 | type | DiagnosticSessionTurnCreatedEvent | pub |
| 340 | type | DiagnosticLaneEnqueueEvent | pub |
| 346 | type | DiagnosticLaneDequeueEvent | pub |
| 353 | type | DiagnosticRunAttemptEvent | pub |
| 361 | type | DiagnosticRunProgressEvent | pub |
| 376 | type | DiagnosticRunExecutionPhaseEvent | (private) |
| 392 | type | DiagnosticHeartbeatEvent | pub |
| 404 | type | DiagnosticLivenessWarningReason | pub |
| 406 | type | DiagnosticPhaseDetails | pub |
| 408 | type | DiagnosticPhaseSnapshot | pub |
| 420 | type | DiagnosticLivenessWarningEvent | pub |
| 441 | type | DiagnosticPhaseCompletedEvent | pub |
| 446 | type | DiagnosticToolLoopEvent | pub |
| 464 | type | DiagnosticToolParamsSummary | pub |
| 470 | type | DiagnosticToolSource | pub |
| 471 | type | DiagnosticToolTerminalReason | pub |
| 473 | type | DiagnosticToolExecutionBaseEvent | (private) |
| 489 | type | DiagnosticToolExecutionStartedEvent | pub |
| 493 | type | DiagnosticToolExecutionCompletedEvent | pub |
| 498 | type | DiagnosticToolExecutionErrorEvent | pub |
| 506 | type | DiagnosticToolExecutionBlockedEvent | pub |
| 512 | type | DiagnosticSkillTelemetrySource | pub |
| 513 | type | DiagnosticSkillActivation | pub |
| 515 | type | DiagnosticSkillUsedEvent | pub |
| 528 | type | DiagnosticExecProcessCompletedEvent | pub |
| 550 | type | DiagnosticExecApprovalFollowupSuppressedEvent | pub |
| 557 | type | DiagnosticRunBaseEvent | (private) |
| 567 | type | DiagnosticRunStartedEvent | pub |
| 571 | type | DiagnosticRunCompletedEvent | pub |
| 579 | type | DiagnosticHarnessRunPhase | pub |
| 580 | type | DiagnosticHarnessRunOutcome | pub |
| 582 | type | DiagnosticHarnessRunBaseEvent | (private) |
| 595 | type | DiagnosticHarnessRunStartedEvent | pub |
| 599 | type | DiagnosticHarnessRunCompletedEvent | pub |
| 612 | type | DiagnosticHarnessRunErrorEvent | pub |
| 620 | type | DiagnosticModelCallBaseEvent | (private) |
| 639 | type | DiagnosticModelCallStartedEvent | pub |
| 643 | type | DiagnosticModelCallCompletedEvent | pub |
| 652 | type | DiagnosticModelCallErrorEvent | pub |
| 664 | type | DiagnosticModelCallPromptStats | (private) |
| 673 | type | DiagnosticModelCallUsage | (private) |
| 683 | type | DiagnosticContextAssembledEvent | pub |
| 703 | type | DiagnosticMemoryUsage | pub |
| 711 | type | DiagnosticMemorySampleEvent | pub |
| 717 | type | DiagnosticMemoryPressureEvent | pub |
| 727 | type | DiagnosticPayloadLargeEvent | pub |
| 739 | type | DiagnosticLogRecordEvent | pub |
| 752 | type | DiagnosticTelemetryExporterEvent | pub |
| 768 | type | DiagnosticAsyncQueueDroppedEvent | pub |
| 779 | type | DiagnosticEventPayload | pub |
| 834 | type | DiagnosticNonSecurityEventPayload | (private) |
| 836 | type | DiagnosticEventInput | pub |
| 842 | type | TrustedToolExecutionEventInput | (private) |
| 846 | type | TrustedSkillUsedEventInput | (private) |
| 848 | type | DiagnosticDispatchInput | (private) |
| 850 | type | DiagnosticEventMetadata | pub |
| 856 | type | DiagnosticModelCallContent | pub |
| 863 | type | DiagnosticToolCallContent | pub |
| 868 | type | DiagnosticSkillUsagePrivateData | pub |
| 872 | type | DiagnosticEventPrivateData | pub |
| 880 | type | DiagnosticEventListener | (private) |
| 885 | type | TrustedDiagnosticEventListener | (private) |
| 891 | type | TrustedToolExecutionEvent | pub |
| 902 | type | TrustedToolExecutionEventListener | (private) |
| 904 | type | QueuedDiagnosticEvent | (private) |
| 911 | type | DiagnosticEventsGlobalState | (private) |
| 960 | fn | createDiagnosticEventsState | (private) |
| 979 | fn | isDiagnosticEventsState | (private) |
| 998 | fn | getDiagnosticEventsState | (private) |
| 1022 | fn | isDiagnosticsEnabled | pub |
| 1027 | fn | setDiagnosticsEnabledForProcess | pub |
| 1032 | fn | areDiagnosticsEnabledForProcess | pub |
| 1036 | fn | dispatchDiagnosticEvent | (private) |
| 1098 | fn | createDiagnosticMetadataForListener | (private) |
| 1108 | fn | cloneDiagnosticEventForListener | (private) |
| 1112 | fn | cloneDiagnosticPrivateDataForListener | (private) |
| 1121 | fn | isPriorityAsyncDiagnosticEvent | (private) |
| 1125 | fn | noteAsyncDiagnosticDrop | (private) |
| 1140 | fn | makeRoomForPriorityAsyncDiagnosticEvent | (private) |
| 1152 | fn | deepFreezeDiagnosticValue | (private) |
| 1172 | fn | scheduleAsyncDiagnosticDrain | (private) |
| 1193 | fn | dispatchAsyncDiagnosticDropSummary | (private) |
| 1219 | fn | waitForDiagnosticEventsDrained | pub |
| 1228 | fn | enrichDiagnosticEvent | (private) |
| 1246 | fn | createInternalDiagnosticMetadata | (private) |
| 1250 | type | EmitDiagnosticEventOptions | (private) |
| 1257 | fn | emitDiagnosticEventWithTrust | (private) |
| 1300 | fn | isToolExecutionEventInput | (private) |
| 1311 | fn | dispatchTrustedToolExecutionEvent | (private) |
| 1339 | fn | emitDiagnosticEvent | pub |
| 1344 | fn | emitDiagnosticEventWithTrustedTraceContext | pub |
| 1349 | fn | emitInternalDiagnosticEvent | pub |
| 1354 | fn | getInternalDiagnosticEventSequence | pub |
| 1359 | fn | emitTrustedDiagnosticEvent | pub |
| 1364 | fn | emitTrustedSkillUsedDiagnosticEvent | pub |
| 1388 | fn | emitTrustedDiagnosticEventWithPrivateData | pub |
| 1396 | fn | emitTrustedSecurityEvent | pub |
| 1409 | fn | emitFailoverEvent | pub |
| 1417 | fn | onInternalDiagnosticEvent | pub |
| 1428 | fn | onTrustedInternalDiagnosticEvent | pub |
| 1441 | fn | onTrustedToolExecutionEvent | pub |
| 1452 | fn | hasPendingInternalDiagnosticEvent | pub |
| 1471 | fn | onDiagnosticEvent | pub |
| 1481 | fn | formatDiagnosticTraceparentForPropagation | pub |
| 1492 | fn | isInternalDiagnosticEventMetadata | pub |
| 1497 | fn | resetDiagnosticEventsForTest | pub |

## src/infra/dispatch-wrapper-resolution.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | isArchSelectorToken | (private) |
| 65 | fn | isKnownArchSelectorToken | (private) |
| 75 | fn | isKnownArchNameToken | (private) |
| 79 | type | WrapperScanDirective | (private) |
| 81 | fn | scanWrapperInvocation | (private) |
| 128 | fn | extractEnvAssignmentKeysFromDispatchWrappers | pub |
| 150 | fn | unwrapDashOptionInvocation | (private) |
| 170 | fn | unwrapNiceInvocation | (private) |
| 187 | fn | unwrapCaffeinateInvocation | (private) |
| 201 | fn | unwrapNohupInvocation | (private) |
| 213 | fn | unwrapSandboxExecInvocation | (private) |
| 224 | fn | unwrapStdbufInvocation | (private) |
| 235 | fn | unwrapTimeInvocation | (private) |
| 249 | fn | isFlockShortFlagCluster | (private) |
| 253 | fn | unwrapFlockInvocation | (private) |
| 293 | fn | timeInvocationWritesOutputFile | (private) |
| 322 | fn | supportsScriptPositionalCommand | (private) |
| 326 | fn | unwrapScriptInvocation | (private) |
| 366 | fn | unwrapTimeoutInvocation | (private) |
| 384 | fn | unwrapArchInvocation | (private) |
| 411 | fn | supportsArchDispatchWrapper | (private) |
| 415 | fn | supportsXcrunDispatchWrapper | (private) |
| 419 | fn | unwrapXcrunInvocation | (private) |
| 433 | type | DispatchWrapperSpec | (private) |
| 481 | fn | normalizeDispatchWrapperName | (private) |
| 485 | type | DispatchWrapperUnwrapResult | (private) |
| 490 | type | DispatchWrapperTrustPlan | (private) |
| 497 | fn | blockDispatchWrapper | (private) |
| 501 | fn | unwrapDispatchWrapper | (private) |
| 510 | fn | isDispatchWrapperExecutable | pub |
| 514 | fn | unwrapKnownDispatchWrapperInvocation | pub |
| 532 | fn | unwrapDispatchWrappersForResolution | pub |
| 541 | fn | isSemanticDispatchWrapperUsage | (private) |
| 557 | fn | blockedDispatchWrapperPlan | (private) |
| 570 | fn | resolveDispatchWrapperTrustPlan | pub |
| 612 | fn | hasDispatchEnvManipulation | pub |

## src/infra/dotenv.test.ts (1143 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | requireFirstWarnCall | (private) |
| 77 | fn | writeEnvFile | (private) |
| 82 | fn | clearEnv | (private) |
| 88 | fn | expectEnvUndefined | (private) |
| 94 | fn | withIsolatedEnvAndCwd | (private) |
| 104 | type | DotEnvFixture | (private) |
| 110 | fn | emptyOwnerMaps | (private) |
| 123 | fn | createManifestBackedProviderSnapshot | (private) |
| 158 | fn | withDotEnvFixture | (private) |

## src/infra/exec-allow-always-persistence.test.ts (599 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | plannedSegments | (private) |

## src/infra/exec-approval-channel-runtime.test.ts (958 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | GatewayEventClientParams | (private) |
| 41 | fn | firstMockCall | (private) |
| 52 | fn | lastGatewayEventClientParams | (private) |
| 58 | fn | emitPluginApprovalRequested | (private) |
| 65 | fn | createExecReplayRequest | (private) |
| 76 | fn | createPluginReplayRequest | (private) |
| 88 | fn | mockReplayLists | (private) |
| 103 | fn | expectStartGatewayClientCall | (private) |
| 115 | fn | expectFinalizedExpired | (private) |
| 127 | fn | expectFinalizedResolved | (private) |
| 145 | fn | expectDeliveredRequestId | (private) |

## src/infra/exec-approval-channel-runtime.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | ApprovalRequestEvent | (private) |
| 29 | type | ApprovalResolvedEvent | (private) |
| 30 | type | ApprovalReplayMethod | (private) |
| 35 | type | ApprovalReplayClient | (private) |
| 43 | class | ExecApprovalChannelRuntimeTerminalStartError | pub |
| 58 | fn | isExecApprovalChannelRuntimeTerminalStartError | pub |
| 76 | fn | resolveApprovalReplayMethods | (private) |
| 89 | fn | readGatewayConnectErrorDetailCode | (private) |
| 97 | fn | createExecApprovalChannelRuntime | pub |
| 379 | fn | settleReady | (private) |

## src/infra/exec-approval-forwarder.test.ts (837 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | flushPendingDelivery | (private) |
| 57 | fn | isDiscordExecApprovalClientEnabledForTest | (private) |
| 75 | fn | isTelegramExecApprovalClientEnabledForTest | (private) |
| 93 | fn | shouldSuppressTelegramExecApprovalForwardingFallbackForTest | (private) |
| 109 | fn | buildTelegramExecApprovalPendingPayloadForTest | (private) |
| 210 | fn | getFirstDeliveryText | (private) |
| 217 | fn | requireRecord | (private) |
| 224 | fn | requireFirstCallArg | (private) |
| 235 | fn | requireFirstPayload | (private) |
| 246 | fn | makeTargetsCfg | (private) |
| 260 | fn | createForwarder | (private) |
| 283 | fn | makeSessionCfg | (private) |
| 301 | fn | expectDiscordSessionTargetRequest | (private) |
| 320 | fn | expectSessionFilterRequestResult | (private) |
| 353 | fn | expectForwardedApprovalText | (private) |

## src/infra/exec-approval-forwarder.ts (838 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | DeliverApprovalPayloads | (private) |
| 52 | type | ResolveSessionTargetFn | (private) |
| 57 | type | ApprovalKind | (private) |
| 58 | type | ForwardTarget | (private) |
| 60 | type | ApprovalRouteRequest | (private) |
| 117 | type | ApprovalRouteRequestFields | (private) |
| 126 | type | ExecApprovalForwarder | pub |
| 134 | type | ExecApprovalForwarderDeps | (private) |
| 148 | fn | normalizeMode | (private) |
| 152 | fn | shouldForwardRoute | (private) |
| 172 | fn | buildTargetKey | (private) |
| 182 | fn | buildSyntheticApprovalRequest | (private) |
| 199 | fn | shouldSkipForwardingFallback | (private) |
| 222 | fn | formatApprovalCommand | (private) |
| 230 | fn | buildExecApprovalRequestMessage | (private) |
| 293 | fn | buildResolvedMessage | (private) |
| 299 | fn | buildExpiredMessage | (private) |
| 303 | fn | normalizeTurnSourceChannel | (private) |
| 314 | fn | normalizeForwardingTurnSourceChannel | (private) |
| 325 | fn | extractApprovalRouteRequest | (private) |
| 341 | fn | defaultResolveSessionTarget | (private) |
| 370 | fn | deliverToTargets | (private) |
| 407 | fn | buildApprovalRenderPayload | (private) |
| 424 | fn | buildExecPendingPayload | (private) |
| 447 | fn | buildExecResolvedPayload | (private) |
| 465 | fn | buildPluginPendingPayload | (private) |
| 487 | fn | buildPluginResolvedPayload | (private) |
| 503 | fn | resolveForwardTargets | (private) |
| 550 | fn | createApprovalHandlers | (private) |
| 660 | fn | handleResolved | (private) |
| 718 | fn | stop | (private) |
| 730 | fn | createApprovalStrategy | (private) |
| 799 | fn | createExecApprovalForwarder | pub |

## src/infra/exec-approval-reply.test.ts (705 lines)

_No symbols extracted._

## src/infra/exec-approval-reply.ts (567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ExecApprovalReplyDecision | pub |
| 31 | type | ExecApprovalUnavailableReason | pub |
| 36 | type | ExecApprovalReplyMetadata | pub |
| 45 | type | ExecApprovalActionDescriptor | pub |
| 56 | type | TypedApprovalActionDescriptor | pub |
| 60 | type | ExecApprovalPendingReplyParams | pub |
| 77 | type | ExecApprovalUnavailableReplyParams | pub |
| 88 | fn | resolveNativeExecApprovalClientList | (private) |
| 96 | fn | buildGenericNativeExecApprovalFallbackText | (private) |
| 115 | fn | resolveAllowedDecisions | (private) |
| 122 | fn | buildApprovalCommandFence | (private) |
| 134 | fn | buildExecApprovalCommandText | pub |
| 141 | type | BuildExecApprovalActionDescriptorsParams | (private) |
| 147 | fn | buildApprovalActionDescriptors | (private) |
| 195 | fn | buildExecApprovalActionDescriptors | pub |
| 205 | fn | buildTypedApprovalActionDescriptors | pub |
| 232 | fn | buildApprovalInteractiveButtons | (private) |
| 248 | fn | buildApprovalPresentationButtons | (private) |
| 265 | fn | buildApprovalPresentationFromActionDescriptors | pub |
| 272 | type | BuildApprovalPresentationParams | (private) |
| 279 | fn | buildApprovalPresentation | pub |
| 292 | fn | buildTypedApprovalPresentation | pub |
| 306 | fn | buildExecApprovalPresentation | pub |
| 319 | fn | buildTypedExecApprovalPresentation | pub |
| 335 | fn | buildApprovalInteractiveReplyFromActionDescriptors | pub |
| 342 | fn | getExecApprovalApproverDmNoticeText | pub |
| 346 | fn | parseExecApprovalCommandText | pub |
| 364 | fn | formatExecApprovalExpiresIn | pub |
| 386 | fn | getExecApprovalReplyMetadata | pub |
| 422 | fn | buildExecApprovalPendingReplyPayload | pub |
| 489 | fn | buildTypedExecApprovalPendingReplyPayload | pub |
| 502 | fn | buildExecApprovalUnavailableReplyPayload | pub |

## src/infra/exec-approval-session-target.test.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | fn | writeStoreFile | (private) |
| 91 | fn | expectResolvedSessionTarget | (private) |
| 98 | fn | buildRequest | (private) |
| 110 | fn | buildPluginRequest | (private) |
| 126 | fn | resolveSlackPluginOriginTarget | (private) |
| 145 | type | PlaceholderStoreCase | (private) |

## src/infra/exec-approvals-allow-always.test.ts (1695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | resolvePersistedPatterns | (private) |
| 56 | fn | expectAllowAlwaysBypassBlocked | (private) |
| 96 | fn | createShellScriptFixture | (private) |
| 107 | fn | expectPersistedShellScriptMatch | (private) |
| 133 | fn | expectShellScriptFallbackRejected | (private) |
| 157 | fn | expectPositionalArgvCarrierResult | (private) |

## src/infra/exec-approvals-allowlist.ts (1503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | hasShellLineContinuation | (private) |
| 71 | fn | commandStepToPolicySegment | (private) |
| 91 | fn | explainShellPolicySegments | (private) |
| 106 | fn | normalizeSafeBins | pub |
| 116 | fn | resolveSafeBins | pub |
| 123 | fn | isSafeBinUsage | pub |
| 171 | fn | isPathScopedExecutableToken | (private) |
| 175 | type | ExecAllowlistEvaluation | pub |
| 182 | type | ExecSegmentSatisfiedBy | pub |
| 189 | type | SkillBinTrustEntry | pub |
| 193 | type | ExecAllowlistContext | (private) |
| 206 | fn | pickExecAllowlistContext | (private) |
| 221 | fn | normalizeSkillBinName | (private) |
| 226 | fn | normalizeSkillBinResolvedPath | (private) |
| 238 | fn | buildSkillBinTrustIndex | (private) |
| 258 | fn | isSkillAutoAllowedSegment | (private) |
| 286 | type | InlineChainAllowlistEvaluation | (private) |
| 291 | type | SegmentMatchEvaluation | (private) |
| 299 | type | PackageManagerTrustTarget | (private) |
| 307 | fn | resolvePackageManagerTrustTargetArgv | (private) |
| 334 | fn | resolvePackageManagerAllowlistTargetArgv | (private) |
| 355 | fn | matchExecutableAllowlistForSegment | (private) |
| 387 | fn | executableResolutionsReferToSameTarget | (private) |
| 402 | fn | resolveShellWrapperScriptArgv | (private) |
| 424 | fn | resolvePowerShellFileScriptArgv | (private) |
| 455 | fn | resolveSegmentSourceArgv | (private) |
| 475 | fn | resolveSegmentAllowlistMatch | (private) |
| 593 | fn | resolveSegmentSatisfaction | (private) |
| 629 | fn | resolveInlineCommandFallback | (private) |
| 648 | fn | evaluateShellWrapperInlineCommand | (private) |
| 680 | fn | evaluateSegments | (private) |
| 738 | fn | resolveAnalysisSegmentGroups | (private) |
| 745 | type | CandidateEvaluation | (private) |
| 750 | fn | evaluateAuthorizationCandidate | (private) |
| 778 | type | PlanGroupEvaluation | (private) |
| 784 | fn | evaluateAuthorizationPlanGroup | (private) |
| 828 | fn | finalizeShellAllowlistEvaluations | (private) |
| 859 | fn | evaluateAuthorizationPlan | (private) |
| 898 | fn | evaluateExecAllowlist | pub |
| 947 | type | ExecAllowlistAnalysis | pub |
| 957 | fn | hasSegmentExecutableMatch | (private) |
| 978 | fn | isShellWrapperSegment | (private) |
| 990 | fn | hasDisqualifyingShellWrapperScriptOption | (private) |
| 999 | fn | resolveShellWrapperScriptCandidatePath | (private) |
| 1066 | fn | resolveShellWrapperPositionalArgvCandidatePath | (private) |
| 1118 | type | AllowAlwaysPattern | pub |
| 1123 | fn | escapeRegExpLiteral | (private) |
| 1127 | fn | buildScriptArgPatternFromArgv | (private) |
| 1154 | fn | buildArgPatternFromArgv | (private) |
| 1167 | fn | addAllowAlwaysPattern | (private) |
| 1180 | fn | resolveCandidateTrustPath | (private) |
| 1191 | fn | resolveAllowAlwaysPatternArgv | (private) |
| 1202 | fn | collectAllowAlwaysPatterns | (private) |
| 1330 | fn | resolveAllowAlwaysPatternEntries | pub |
| 1352 | fn | resolveAllowAlwaysPatterns | pub |
| 1365 | fn | evaluateShellAllowlist | pub |
| 1414 | fn | evaluateShellAllowlistWithAuthorization | pub |
| 1459 | fn | evaluateExecAllowlistWithAuthorization | pub |

## src/infra/exec-approvals-config.test.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 447 | fn | normalizeMainAllowlist | (private) |
| 452 | fn | expectNoSpreadStringArtifacts | (private) |

## src/infra/exec-approvals-policy.test.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | loadActualExecApprovalModules | (private) |
| 65 | fn | summarizeExecPolicyScopeSnapshot | (private) |
| 73 | fn | expectFields | (private) |
| 83 | fn | expectMalformedAgentAskUsesDefaults | (private) |

## src/infra/exec-approvals-safe-bins.test.ts (672 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | SafeBinCase | (private) |
| 36 | fn | buildDeniedFlagVariantCases | (private) |

## src/infra/exec-approvals-store.test.ts (1971 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ExecApprovalsModule | (private) |
| 82 | fn | createHomeDir | (private) |
| 91 | fn | approvalsFilePath | (private) |
| 95 | fn | stateApprovalsFilePath | (private) |
| 99 | fn | readApprovalsFile | (private) |
| 103 | fn | listExecApprovalTempFiles | (private) |
| 111 | fn | requireRecord | (private) |
| 118 | fn | allowlistEntries | (private) |
| 123 | fn | expectAllowlistEntryFields | (private) |
| 1517 | fn | commitGrant | (private) |

## src/infra/exec-approvals.ts (2902 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | ExecHost | pub |
| 62 | type | ExecTarget | pub |
| 63 | type | ExecSecurity | pub |
| 64 | type | ExecAsk | pub |
| 65 | type | ExecMode | pub |
| 69 | fn | normalizeExecHost | pub |
| 77 | fn | normalizeExecTarget | pub |
| 85 | fn | requireValidExecTarget | pub |
| 112 | fn | normalizeExecSecurity | pub |
| 120 | fn | normalizeExecAsk | pub |
| 128 | fn | normalizeExecMode | pub |
| 142 | fn | resolveExecModeFromPolicy | pub |
| 158 | fn | resolveExecPolicyForMode | pub |
| 179 | fn | resolveExecModePolicy | pub |
| 203 | type | SystemRunApprovalBinding | pub |
| 211 | type | SystemRunApprovalFileOperand | pub |
| 217 | type | SystemRunApprovalPlan | pub |
| 228 | type | ExecApprovalCommandSpan | pub |
| 233 | type | ExecApprovalRequestPayload | pub |
| 263 | type | ExecApprovalRequest | pub |
| 270 | type | ExecApprovalResolved | pub |
| 278 | type | ExecApprovalsDefaults | pub |
| 285 | type | ExecApprovalsAgent | pub |
| 292 | type | ExecApprovalsFile | pub |
| 302 | type | ExecApprovalsSnapshot | pub |
| 310 | type | ExecApprovalsResolved | pub |
| 356 | fn | getExecApprovalsProcessStartTime | (private) |
| 365 | fn | hashExecApprovalsRaw | (private) |
| 371 | fn | hashExecApprovalsFile | (private) |
| 375 | fn | isExecApprovalsTargetMissing | (private) |
| 387 | fn | isExecApprovalsLockMissing | (private) |
| 399 | fn | resolveExecApprovalsStateDir | (private) |
| 417 | fn | resolveExecApprovalsPath | pub |
| 421 | fn | resolveExecApprovalsSocketPath | pub |
| 425 | fn | resolveExecApprovalsDisplayPath | pub |
| 432 | fn | resolveExecApprovalsTranscriptPath | pub |
| 438 | fn | createFailClosedExecApprovalsFallback | (private) |
| 451 | fn | hasValidExecApprovalPolicyFields | (private) |
| 463 | fn | isValidPersistedExecAllowlistEntry | (private) |
| 482 | fn | isValidPersistedExecHostAdapterBinding | (private) |
| 497 | fn | isValidExecHostAdapterEnvironment | (private) |
| 517 | fn | isValidPersistedExecApprovals | (private) |
| 555 | fn | parsePersistedExecApprovals | (private) |
| 568 | fn | normalizeAllowlistPattern | (private) |
| 573 | fn | mergeLegacyAgent | (private) |
| 579 | fn | pushEntry | (private) |
| 609 | fn | ensureDir | (private) |
| 627 | fn | resolveCanonicalExecApprovalsTarget | (private) |
| 632 | fn | assertNoExecApprovalsSymlinkParents | (private) |
| 646 | class | UnsafeExecApprovalsPathError | (private) |
| 648 | fn | assertSafeExecApprovalsStat | (private) |
| 661 | fn | assertSafeExecApprovalsDestination | (private) |
| 671 | fn | assertSafeExecApprovalsOverwriteFallback | (private) |
| 685 | type | ExecApprovalsFallbackDestination | (private) |
| 691 | fn | sameFilesystemEntry | (private) |
| 695 | type | ExecApprovalsRawState | (private) |
| 697 | fn | readExecApprovalsRawState | (private) |
| 761 | fn | readExecApprovalsSnapshotFromPath | (private) |
| 781 | fn | readExecApprovalsFallbackSnapshotFromFd | (private) |
| 796 | fn | validateExecApprovalsFallbackFd | (private) |
| 815 | fn | openExistingExecApprovalsFallbackDestination | (private) |
| 837 | fn | createExecApprovalsFallbackDestination | (private) |
| 866 | fn | openExecApprovalsFallbackDestination | (private) |
| 877 | fn | writeExecApprovalsFallbackBuffer | (private) |
| 891 | fn | restoreExecApprovalsFallbackDestination | (private) |
| 912 | fn | copyExecApprovalsFallback | (private) |
| 935 | fn | renameExecApprovalsWithFallback | (private) |
| 953 | fn | coerceAllowlistEntries | (private) |
| 982 | fn | ensureAllowlistIds | (private) |
| 999 | fn | stripAllowlistCommandText | (private) |
| 1017 | fn | sanitizeExecApprovalPolicy | (private) |
| 1035 | fn | sanitizeExecHostAdapterBindings | (private) |
| 1055 | fn | normalizeExecApprovals | pub |
| 1110 | fn | mergeExecApprovalsSocketDefaults | pub |
| 1128 | fn | generateToken | (private) |
| 1132 | fn | readExecApprovalsSnapshotUnlocked | (private) |
| 1137 | fn | readExecApprovalsSnapshot | pub |
| 1146 | fn | loadExecApprovalsUnlocked | (private) |
| 1155 | fn | loadExecApprovals | pub |
| 1165 | fn | loadExecApprovalsAsync | pub |
| 1177 | type | ExecApprovalsSyncLock | (private) |
| 1185 | fn | readLockPayload | (private) |
| 1196 | fn | readExecApprovalsLockState | (private) |
| 1215 | fn | sleepExecApprovalsSyncLockRetry | (private) |
| 1226 | fn | removeOwnedExecApprovalsLock | (private) |
| 1244 | fn | acquireExecApprovalsLockSync | (private) |
| 1311 | fn | withExecApprovalsLockSync | (private) |
| 1321 | fn | withExecApprovalsReadLockSync | (private) |
| 1335 | fn | saveExecApprovalsUnlocked | (private) |
| 1341 | type | ExecApprovalsUpdate | (private) |
| 1346 | fn | updateExecApprovalsUnlocked | (private) |
| 1367 | fn | updateExecApprovalsSync | (private) |
| 1371 | fn | saveExecApprovals | pub |
| 1375 | fn | enqueueExecApprovalsLock | (private) |
| 1391 | fn | withExecApprovalsLock | (private) |
| 1401 | fn | withExecApprovalsReadLock | (private) |
| 1412 | fn | updateExecApprovals | pub |
| 1418 | fn | hardenUnchangedExecApprovals | (private) |
| 1441 | fn | writeExecApprovalsRaw | (private) |
| 1467 | fn | restoreExecApprovalsSnapshotUnlocked | (private) |
| 1477 | fn | restoreExecApprovalsSnapshot | pub |
| 1481 | fn | restoreExecApprovalsSnapshotLocked | pub |
| 1494 | fn | ensureExecApprovalsSocket | (private) |
| 1507 | fn | requireInitializedExecApprovals | (private) |
| 1516 | fn | ensureExecApprovalsSnapshot | pub |
| 1522 | fn | ensureExecApprovals | pub |
| 1528 | fn | readExecApprovalsForNoPersistenceUnlocked | (private) |
| 1539 | fn | isExecSecurity | (private) |
| 1543 | fn | isExecAsk | (private) |
| 1547 | fn | normalizeSecurity | (private) |
| 1551 | fn | normalizeAsk | (private) |
| 1560 | fn | resolveDefaultSecurityField | (private) |
| 1578 | fn | resolveDefaultAskField | (private) |
| 1594 | fn | resolveAgentSecurityField | (private) |
| 1632 | fn | resolveAgentAskField | (private) |
| 1666 | type | ExecApprovalsDefaultOverrides | pub |
| 1674 | fn | shapeResolvedExecApprovals | (private) |
| 1695 | fn | resolveExecApprovalsWithoutSocket | (private) |
| 1708 | fn | resolveExecApprovals | pub |
| 1737 | fn | resolveExecApprovalsLocked | pub |
| 1765 | fn | resolveExecApprovalsFromFile | pub |
| 1864 | fn | requiresExecApproval | pub |
| 1884 | fn | normalizeCommandName | (private) |
| 1888 | fn | textMentionsSecurityAuditSuppressions | (private) |
| 1898 | fn | isReadOnlySecurityAuditSuppressionInspection | (private) |
| 1930 | fn | removeParsedSegmentText | (private) |
| 1945 | fn | commandRequiresSecurityAuditSuppressionApproval | pub |
| 1972 | fn | hasDurableExecApproval | pub |
| 1993 | fn | buildDurableCommandApprovalPattern | (private) |
| 1997 | fn | buildNodeCommandApprovalPattern | (private) |
| 2001 | fn | hasNodeCommandAllowAlwaysMarker | pub |
| 2015 | fn | hasExactCommandDurableExecApproval | pub |
| 2032 | type | DurableExecApprovalRequirement | (private) |
| 2035 | fn | resolveDurableExecApprovalRequirement | pub |
| 2051 | fn | hasSegmentDurableExecApproval | (private) |
| 2062 | fn | buildAllowlistEntryMatchKey | (private) |
| 2068 | fn | buildExecApprovalPolicyRuleKey | (private) |
| 2075 | fn | buildAllowAlwaysUpgradeRuleKey | (private) |
| 2085 | fn | createExecApprovalPolicySnapshot | pub |
| 2114 | fn | isExecApprovalPolicySnapshotCurrent | pub |
| 2138 | type | ExecApprovalUsageAuthorization | pub |
| 2149 | fn | assertCurrentUsageAuthorization | (private) |
| 2251 | fn | replaceExecApprovalsSnapshot | (private) |
| 2270 | fn | recordAllowlistUse | pub |
| 2286 | fn | recordAllowlistMatchesUse | pub |
| 2305 | fn | applyRecordedAllowlistUse | (private) |
| 2328 | fn | applyRecordedAllowlistMetadata | (private) |
| 2375 | fn | commitExecAuthorizationLocked | pub |
| 2427 | fn | applyAllowlistEntryUpdate | (private) |
| 2482 | fn | addAllowlistEntry | pub |
| 2505 | fn | addDurableCommandApproval | pub |
| 2519 | fn | resolveAllowAlwaysPatternCoverage | pub |
| 2566 | fn | persistAllowAlwaysPatterns | pub |
| 2590 | type | AllowAlwaysPersistenceReason | pub |
| 2596 | type | AllowAlwaysPersistenceDecision | pub |
| 2601 | fn | hasRuntimeShellPayload | (private) |
| 2611 | fn | resolvePlanPersistenceState | (private) |
| 2653 | fn | resolveAllowAlwaysPersistenceDecision | pub |
| 2704 | fn | persistAllowAlwaysDecision | pub |
| 2726 | fn | applyAllowAlwaysDecision | (private) |
| 2776 | fn | minSecurity | pub |
| 2781 | fn | maxAsk | pub |
| 2786 | type | ExecApprovalDecision | pub |
| 2795 | type | ExecApprovalUnavailableDecision | pub |
| 2801 | fn | isOptionalExecApprovalDecision | (private) |
| 2807 | fn | collectExecApprovalUnavailableDecisionSet | (private) |
| 2822 | fn | normalizeExecApprovalUnavailableDecisions | pub |
| 2829 | fn | resolveExecApprovalAllowedDecisions | pub |
| 2840 | fn | resolveExecApprovalUnavailableDecisions | pub |
| 2848 | fn | resolveExecApprovalRequestAllowedDecisions | pub |
| 2864 | fn | isExecApprovalDecisionAllowed | pub |
| 2871 | fn | requestExecApprovalViaSocket | pub |

## src/infra/exec-authorization-plan.ts (921 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | ExecAuthorizationDialect | (private) |
| 33 | type | ExecAuthorizationRelationship | (private) |
| 35 | type | ExecAuthorizationTransport | (private) |
| 45 | type | ExecAuthorizationTrustMode | (private) |
| 47 | type | ExecAuthorizationCandidate | pub |
| 57 | type | ExecAuthorizationGroup | (private) |
| 62 | type | ExecAuthorizationPlan | pub |
| 79 | type | CommandStepWithSegment | (private) |
| 84 | type | PlanningContext | (private) |
| 125 | fn | normalizePlanningPlatform | (private) |
| 144 | fn | commandSegmentFromStep | (private) |
| 157 | fn | commandSegmentFromArgv | (private) |
| 170 | type | AuthorizationOperator | (private) |
| 172 | fn | authorizationOperatorForTopology | (private) |
| 193 | fn | riskInsideStep | (private) |
| 197 | fn | riskBeforeStepExecutable | (private) |
| 201 | fn | stepReasons | (private) |
| 211 | fn | nonReusableStepReasons | (private) |
| 221 | fn | isShellExpansionDynamicArgument | (private) |
| 228 | fn | riskInsidePromptOnlyStep | (private) |
| 234 | fn | findUnanalyzableRisk | (private) |
| 238 | fn | hasBlockingRisk | (private) |
| 261 | fn | shellWrapperPreludeReasons | (private) |
| 273 | fn | isPathScopedExecutableToken | (private) |
| 277 | fn | hasResolvedExecutionPath | (private) |
| 282 | fn | isUnresolvedPathScopedExecutable | (private) |
| 288 | fn | canUseReusableWrapperPayloadCandidates | pub |
| 303 | fn | isShellExecutable | (private) |
| 308 | fn | canUseWrapperShellInvocation | (private) |
| 320 | fn | wrapperPrefixForStep | (private) |
| 325 | fn | hasCommandPrelude | (private) |
| 329 | fn | positionalCarrierSteps | (private) |
| 389 | fn | shouldPersistCandidate | (private) |
| 403 | fn | createCandidate | (private) |
| 453 | fn | finalizeGroup | (private) |
| 475 | fn | groupsFromSteps | (private) |
| 550 | fn | shellWrapperRiskForStep | (private) |
| 561 | fn | shouldUseWrapperPayload | (private) |
| 582 | fn | applyWrapperPayloadPersistenceBoundary | (private) |
| 598 | fn | wrapperPayloadPlan | (private) |
| 671 | fn | dialectForArgv | (private) |
| 682 | fn | unanalyzablePlan | (private) |
| 697 | fn | planFromExplanation | (private) |
| 768 | fn | planShellAuthorization | pub |
| 801 | fn | planExecAuthorization | pub |

## src/infra/exec-command-resolution.test.ts (536 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | buildNestedEnvShellCommand | (private) |
| 29 | fn | analyzeEnvWrapperAllowlist | (private) |
| 53 | fn | createPathExecutableFixture | (private) |
| 69 | fn | expectResolutionPathCase | (private) |
| 94 | type | CommandResolutionFixture | (private) |

## src/infra/exec-wrapper-resolution.test.ts (699 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | supportsScriptPositionalCommandForTests | (private) |
| 25 | fn | expectTransparentDispatchWrapperCase | (private) |

## src/infra/fs-safe.test.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | expectRejectCode | (private) |
| 42 | fn | runWriteOpenRace | (private) |
| 64 | fn | runSymlinkWriteRace | (private) |
| 77 | fn | withOutsideHardlinkAlias | (private) |
| 100 | fn | setupSymlinkWriteRaceFixture | (private) |

## src/infra/gateway-lock.test.ts (1044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | GatewayLock | (private) |
| 20 | type | GatewayLockOptions | (private) |
| 26 | fn | resolveTestLockDir | (private) |
| 30 | fn | makeEnv | (private) |
| 41 | fn | acquireForTest | (private) |
| 59 | fn | expectGatewayLock | (private) |
| 67 | fn | resolveLockPath | (private) |
| 81 | fn | createLockPayload | (private) |
| 98 | fn | mockProcStatRead | (private) |
| 108 | fn | writeLockFile | (private) |
| 122 | fn | createEaccesProcStatSpy | (private) |
| 130 | fn | createPortProbeConnectionSpy | (private) |
| 145 | fn | writeRecentLockFile | (private) |

## src/infra/gateway-lock.ts (612 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | LockPayload | (private) |
| 52 | type | GatewayLockHandle | (private) |
| 59 | type | GatewayLockRole | (private) |
| 61 | type | GatewayLockIdentity | pub |
| 69 | fn | isSameGatewayLockIdentity | pub |
| 83 | type | GatewayLockOptions | pub |
| 101 | class | GatewayLockError | pub |
| 111 | type | LockOwnerStatus | (private) |
| 113 | type | GatewayLockCoordinator | (private) |
| 117 | fn | tryAcquireGatewayLockCoordinator | (private) |
| 152 | fn | readLinuxCmdline | (private) |
| 163 | fn | readWindowsCmdline | (private) |
| 175 | fn | readDarwinCmdline | (private) |
| 192 | fn | readProcessStartTime | (private) |
| 201 | fn | defaultReadProcessCmdline | (private) |
| 214 | fn | resolveGatewayOwnerStatus | (private) |
| 231 | fn | currentStartTime | (private) |
| 261 | fn | readLockPayload | (private) |
| 270 | fn | canonicalizeStateDir | (private) |
| 293 | fn | resolveGatewayLockPaths | (private) |
| 307 | fn | readActiveGatewayLockPort | pub |
| 316 | fn | readActiveGatewayLockIdentity | pub |
| 328 | fn | readVerifiedGatewayLockIdentity | (private) |
| 356 | fn | acquireGatewayLock | pub |
| 427 | fn | acquireLockFile | (private) |
| 526 | fn | startTime | (private) |

## src/infra/gateway-watch-tmux.test.ts (818 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | createOutput | (private) |
| 22 | fn | requireRecord | (private) |
| 29 | fn | spawnCall | (private) |
| 38 | fn | spawnShellCommand | (private) |
| 49 | fn | expectSpawn | (private) |

## src/infra/heartbeat-runner.commitments.test.ts (855 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | CommitmentTestStore | (private) |
| 36 | fn | saveCommitmentStore | (private) |
| 43 | fn | loadCommitmentStore | (private) |
| 61 | fn | buildCommitment | (private) |
| 93 | fn | expectCommitmentFields | (private) |
| 105 | fn | setupCommitmentCase | (private) |
| 533 | fn | runOnce | (private) |

## src/infra/heartbeat-runner.ghost-reminder.test.ts (982 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | createHeartbeatDeps | (private) |
| 106 | fn | expectCronEventPrompt | (private) |
| 155 | fn | expectTelegramSend | (private) |
| 172 | fn | runCronReminderCase | (private) |
| 188 | fn | runHeartbeatCase | (private) |

## src/infra/heartbeat-runner.respects-ackmaxchars-heartbeat-acks.test.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | createHeartbeatConfig | (private) |
| 42 | fn | makeWhatsAppDeps | (private) |
| 60 | fn | makeTelegramDeps | (private) |
| 74 | fn | createMessageSendSpy | (private) |
| 82 | fn | expectTelegramMessageSend | (private) |
| 99 | fn | expectWhatsAppMessageSend | (private) |
| 133 | fn | runTelegramHeartbeatWithDefaults | (private) |
| 174 | fn | createWhatsAppHeartbeatConfig | (private) |
| 197 | fn | createSeededWhatsAppHeartbeatConfig | (private) |
| 540 | fn | expectTelegramHeartbeatAccountId | (private) |

## src/infra/heartbeat-runner.returns-default-unset.test.ts (1935 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | normalizeWhatsAppTargetForTest | (private) |
| 62 | fn | isWhatsAppGroupJidForTest | (private) |
| 124 | fn | resolveWhatsAppTargetForTest | (private) |
| 167 | fn | createCaseDir | (private) |
| 173 | fn | requireRecord | (private) |
| 180 | fn | expectRecordFields | (private) |
| 186 | fn | expectWhatsAppSendCall | (private) |
| 200 | fn | expectReplyCall | (private) |
| 227 | fn | replyBody | (private) |
| 238 | type | HeartbeatSeedOverride | (private) |
| 240 | fn | seedWhatsAppSession | (private) |
| 720 | fn | createHeartbeatDeps | (private) |
| 1425 | type | HeartbeatFileState | (private) |
| 1434 | fn | runHeartbeatFileScenario | (private) |

## src/infra/heartbeat-runner.scheduler.test.ts (1021 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | RetryableHeartbeatBusySkipReason | (private) |
| 21 | type | RunOnce | (private) |
| 22 | type | MockRunOnce | (private) |
| 25 | fn | useFakeHeartbeatTime | (private) |
| 30 | fn | startDefaultRunner | (private) |
| 38 | fn | heartbeatConfig | (private) |
| 49 | fn | resolveDueFromNow | (private) |
| 61 | fn | createRetryableBusyRunSpy | (private) |
| 72 | fn | getRunCall | (private) |
| 84 | fn | expectRunCallFields | (private) |
| 96 | fn | expectAgentCall | (private) |
| 114 | fn | wake | (private) |
| 151 | fn | expectWakeDispatch | (private) |

## src/infra/heartbeat-runner.skips-busy-session-lane.test.ts (555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | createHeartbeatTelegramConfig | (private) |
| 71 | fn | seedHeartbeatTelegramSession | (private) |
| 79 | fn | createBusyLaneSnapshot | (private) |

## src/infra/heartbeat-runner.tool-response.test.ts (900 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | createConfig | (private) |
| 105 | fn | createDeps | (private) |
| 117 | fn | expectTelegramSend | (private) |
| 136 | fn | replyCall | (private) |
| 144 | fn | replyContext | (private) |
| 155 | fn | replyOptions | (private) |
| 171 | fn | runWithToolResponse | (private) |
| 191 | fn | createTerminalToolFailureReply | (private) |
| 204 | fn | runPlainFallbackReply | (private) |
| 224 | fn | runPromptScenario | (private) |
| 265 | fn | expectHeartbeatToolPrompt | (private) |

## src/infra/heartbeat-runner.ts (2926 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 189 | type | HeartbeatDeps | pub |
| 209 | fn | hasQueuedWorkInLaneSnapshots | (private) |
| 230 | fn | laneBelongsToAgent | (private) |
| 254 | fn | hasAgentOptInBusyLaneWork | (private) |
| 261 | fn | hasActiveRunForAgent | (private) |
| 269 | fn | hasActiveRunForSession | (private) |
| 277 | fn | resolveHeartbeatChannelPlugin | (private) |
| 284 | fn | resolveHeartbeatTimeoutOverrideSeconds | (private) |
| 312 | type | HeartbeatConfig | (private) |
| 313 | type | HeartbeatAgent | (private) |
| 320 | fn | canHeartbeatDeliverCommitments | (private) |
| 324 | type | HeartbeatAgentState | (private) |
| 339 | type | ActiveHoursSchedule | (private) |
| 345 | fn | resolveActiveHoursSchedule | (private) |
| 360 | fn | activeHoursConfigMatch | (private) |
| 370 | type | HeartbeatRunner | pub |
| 375 | fn | resolveHeartbeatSchedulerSeed | (private) |
| 391 | fn | hasExplicitHeartbeatAgents | (private) |
| 396 | fn | resolveHeartbeatConfig | (private) |
| 411 | fn | omitExplicitHeartbeatDestination | (private) |
| 421 | fn | resolveHeartbeatForWake | (private) |
| 439 | fn | resolveHeartbeatAgents | (private) |
| 460 | fn | resolveHeartbeatPromptRaw | (private) |
| 464 | fn | resolveHeartbeatPrompt | pub |
| 468 | fn | resolveHeartbeatResponseToolPrompt | (private) |
| 472 | fn | resolveHeartbeatModelRef | (private) |
| 508 | fn | usesCodexHarness | (private) |
| 528 | fn | shouldUseHeartbeatResponseToolPrompt | (private) |
| 550 | fn | resolveHeartbeatAckMaxChars | (private) |
| 559 | fn | isHeartbeatTypingEnabled | (private) |
| 568 | fn | resolveHeartbeatTypingIntervalSeconds | (private) |
| 574 | fn | resolveHeartbeatSession | (private) |
| 702 | fn | resolveIsolatedHeartbeatSessionKey | (private) |
| 745 | fn | resolveStaleHeartbeatIsolatedSessionKey | (private) |
| 770 | fn | resolveHeartbeatReasoningPayloads | (private) |
| 800 | fn | restoreHeartbeatUpdatedAt | (private) |
| 833 | fn | truncateHeartbeatPreview | (private) |
| 837 | type | HeartbeatSkipReason | (private) |
| 839 | fn | buildCommitmentDeliveryKey | (private) |
| 849 | fn | selectCommitmentDeliveryBatch | (private) |
| 860 | fn | buildCommitmentHeartbeatPrompt | (private) |
| 897 | type | HeartbeatPreflight | (private) |
| 909 | fn | resolveHeartbeatPreflight | (private) |
| 947 | fn | shouldInspectWakePendingEvents | (private) |
| 1039 | type | HeartbeatPromptResolution | (private) |
| 1048 | fn | resolveDueHeartbeatTasks | (private) |
| 1065 | fn | appendHeartbeatWorkspacePathHint | (private) |
| 1077 | fn | stripHeartbeatTasksBlock | (private) |
| 1113 | fn | appendHeartbeatFileDirectives | (private) |
| 1127 | fn | resolveHeartbeatRunPrompt | (private) |
| 1258 | fn | selectSystemEventsConsumedByHeartbeat | (private) |
| 1298 | fn | heartbeatRunOwnsPendingFinalDelivery | (private) |
| 1306 | fn | runHeartbeatOnce | pub |
| 1731 | fn | updateTaskTimestamps | (private) |
| 1770 | fn | clearSatisfiedPendingFinalDelivery | (private) |
| 1797 | fn | consumeInspectedSystemEvents | (private) |
| 1833 | fn | resolveHeartbeatResponsePrefix | (private) |
| 1838 | fn | resolveHeartbeatOkText | (private) |
| 1880 | fn | maybeSendHeartbeatOk | (private) |
| 2417 | fn | startHeartbeatRunner | pub |
| 2439 | fn | resolveNextDue | (private) |
| 2458 | fn | seekActiveSlotForAgent | (private) |
| 2468 | fn | advanceAgentSchedule | (private) |
| 2482 | fn | advanceStaleScheduleAfterDeferral | (private) |
| 2529 | fn | recordRunBookkeeping | (private) |
| 2535 | fn | scheduleNext | (private) |
| 2577 | fn | updateConfig | (private) |
| 2770 | type | AgentWakeOutcome | (private) |
| 2910 | fn | cleanup | (private) |

## src/infra/host-env-security.test.ts (2168 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | findSystemCommandPath | (private) |
| 35 | fn | getSystemGitPath | (private) |
| 39 | fn | getSystemMakePath | (private) |
| 43 | fn | clearMarker | (private) |
| 51 | fn | envRecord | (private) |
| 55 | fn | runGitLsRemote | (private) |
| 63 | fn | runGitCommand | (private) |
| 82 | fn | runGitCommandExitCode | (private) |
| 101 | fn | runGitClone | (private) |
| 110 | fn | initGitRepoWithCommits | (private) |
| 141 | fn | runMakeCommand | (private) |

## src/infra/http-body.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | RequestBodyLimitErrorCode | pub |
| 21 | type | RequestBodyLimitErrorInit | (private) |
| 44 | class | RequestBodyLimitError | pub |
| 56 | fn | isRequestBodyLimitError | pub |
| 69 | fn | requestBodyErrorToText | pub |
| 73 | fn | parseContentLengthHeader | (private) |
| 86 | type | ReadRequestBodyOptions | pub |
| 92 | type | RequestBodyLimitValues | (private) |
| 97 | type | RequestBodyChunkProgress | (private) |
| 103 | fn | resolveRequestBodyLimitValues | (private) |
| 120 | fn | advanceRequestBodyChunk | (private) |
| 134 | type | ReadResponsePrefixResult | (private) |
| 140 | type | ReadResponseTextPrefixOptions | pub |
| 148 | type | ReadResponsePrefixOptions | (private) |
| 152 | fn | validateMaxBytes | (private) |
| 158 | fn | readResponsePrefixFromReader | (private) |
| 213 | fn | readResponsePrefix | (private) |
| 255 | type | ReadResponseTextPrefixResult | pub |
| 262 | fn | readResponseTextPrefix | pub |
| 279 | fn | readResponseWithLimit | pub |
| 303 | fn | readResponseTextSnippet | pub |
| 332 | fn | readRequestBodyWithLimit | pub |
| 356 | fn | cleanup | (private) |
| 364 | fn | finish | (private) |
| 373 | fn | fail | (private) |
| 385 | fn | onData | (private) |
| 402 | fn | onEnd | (private) |
| 407 | fn | onError | (private) |
| 414 | fn | onClose | (private) |
| 428 | type | ReadJsonBodyResult | pub |
| 432 | type | ReadJsonBodyOptions | pub |
| 436 | fn | readJsonBodyWithLimit | pub |
| 470 | type | RequestBodyLimitGuard | pub |
| 476 | type | RequestBodyLimitGuardOptions | pub |
| 483 | fn | installRequestBodyLimitGuard | pub |
| 498 | fn | cleanup | (private) |
| 506 | fn | finish | (private) |
| 514 | fn | respond | (private) |
| 528 | fn | trip | (private) |
| 543 | fn | onData | (private) |
| 554 | fn | onEnd | (private) |
| 559 | fn | onClose | (private) |
| 566 | fn | onError | (private) |

## src/infra/infra-runtime.test.ts (1303 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | RestartModule | (private) |
| 41 | fn | setPlatform | (private) |
| 51 | fn | withoutSigusr1Listeners | (private) |
| 64 | fn | withRestartSupervisorEnabled | (private) |
| 85 | fn | countSigusr1Emits | (private) |
| 96 | fn | setupRestartSignalSuite | (private) |
| 157 | fn | handler | (private) |
| 258 | fn | handler | (private) |
| 315 | fn | handler | (private) |
| 334 | fn | handler | (private) |
| 386 | fn | handler | (private) |
| 409 | fn | handler | (private) |
| 439 | fn | handler | (private) |
| 470 | fn | handler | (private) |
| 493 | fn | handler | (private) |
| 534 | fn | handler | (private) |
| 571 | fn | handler | (private) |
| 606 | fn | handler | (private) |
| 652 | fn | handler | (private) |
| 696 | fn | handler | (private) |
| 730 | fn | handler | (private) |
| 789 | fn | handler | (private) |
| 840 | fn | handler | (private) |
| 891 | fn | handler | (private) |
| 920 | fn | handler | (private) |
| 956 | fn | handler | (private) |
| 974 | fn | handler | (private) |
| 1002 | fn | handler | (private) |
| 1034 | fn | handler | (private) |
| 1047 | fn | handler | (private) |
| 1061 | fn | handler | (private) |
| 1088 | fn | handler | (private) |
| 1111 | fn | handler | (private) |
| 1137 | fn | handler | (private) |
| 1170 | fn | handler | (private) |
| 1200 | fn | handler | (private) |
| 1234 | fn | handler | (private) |
| 1269 | fn | handler | (private) |
| 1288 | fn | handler | (private) |

## src/infra/install-package-dir.test.ts (821 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | listMatchingDirs | (private) |
| 29 | fn | listMatchingEntries | (private) |
| 40 | fn | normalizeDarwinTmpPath | (private) |
| 46 | fn | normalizeComparablePath | (private) |
| 60 | fn | createFsError | (private) |
| 64 | fn | expectMissingPath | (private) |
| 74 | fn | expectRunCommandCallForArgv | (private) |
| 96 | fn | rebindInstallBasePath | (private) |
| 109 | fn | withInstallBaseReboundOnRealpathCall | (private) |
| 142 | fn | createExistingInstallFixture | (private) |
| 153 | fn | addHardlinkedFile | (private) |
| 158 | fn | createReboundInstallFixture | (private) |
| 213 | fn | installWithNpmResult | (private) |

## src/infra/install-source-utils.test.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | createTempDir | (private) |
| 34 | fn | expectPathMissing | (private) |
| 54 | fn | createFixtureDir | (private) |
| 58 | fn | createFixtureFile | (private) |
| 69 | fn | mockPackCommandResult | (private) |
| 79 | fn | runPack | (private) |
| 87 | fn | expectPackFallsBackToDetectedArchive | (private) |
| 115 | fn | expectPackError | (private) |

## src/infra/node-pairing.test.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | withNodePairingDir | (private) |
| 24 | fn | seedNodeDevice | (private) |
| 32 | fn | setupPairedNode | (private) |
| 51 | fn | findPairedNode | (private) |
| 56 | fn | requireRecord | (private) |
| 63 | fn | findRecordByField | (private) |

## src/infra/node-pairing.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | NodeDeclaredSurface | (private) |
| 37 | type | NodePairingRequestInput | pub |
| 42 | type | NodePairingPendingRequest | pub |
| 48 | type | NodePairingPendingSnapshot | (private) |
| 53 | type | NodePairingCleanupClaim | pub |
| 61 | type | NodePairingSupersededRequest | pub |
| 64 | type | RequestNodePairingResult | pub |
| 71 | type | NodePairingPendingEntry | (private) |
| 76 | type | NodePairingPairedNode | pub |
| 85 | type | NodePairingList | (private) |
| 95 | fn | normalizeNodeId | (private) |
| 99 | fn | nodeSurfaceDevice | (private) |
| 106 | fn | toPublicPendingRequest | (private) |
| 131 | fn | toPendingSnapshot | (private) |
| 142 | fn | toPendingEntry | (private) |
| 152 | fn | toPairedNode | (private) |
| 183 | fn | buildPendingNodeSurface | (private) |
| 207 | fn | refreshPendingNodeSurface | (private) |
| 233 | fn | samePendingApprovalSurface | (private) |
| 249 | fn | samePendingReconnectMetadata | (private) |
| 268 | fn | buildCleanupRevisionClaimKey | (private) |
| 275 | fn | addCleanupClaim | (private) |
| 282 | fn | cleanupClaimIsActive | (private) |
| 287 | fn | removeCleanupClaim | (private) |
| 296 | fn | invalidateCleanupClaimsThrough | (private) |
| 316 | fn | pendingHasActiveCleanupClaim | (private) |
| 325 | fn | listNodePairing | pub |
| 345 | fn | beginNodePairingConnect | pub |
| 374 | fn | releaseNodePairingCleanupClaim | pub |
| 381 | fn | finalizeNodePairingCleanupClaim | pub |
| 412 | fn | requestNodePairing | pub |
| 455 | fn | reusePendingNodePairingForReconnect | pub |
| 488 | type | ApprovedNodePairingResult | (private) |
| 489 | type | ForbiddenNodePairingResult | (private) |
| 490 | type | ApproveNodePairingResult | (private) |
| 492 | fn | findPendingNodePairingDevice | (private) |
| 502 | fn | approveNodePairing | pub |
| 553 | fn | rejectNodePairing | pub |
| 568 | fn | getPendingNodePairing | pub |
| 582 | fn | updatePairedNodeBins | pub |
| 600 | type | RecordPairedNodeConnectionResult | (private) |
| 605 | fn | recordPairedNodeConnection | pub |
| 631 | fn | renamePairedNode | pub |

## src/infra/npm-managed-root.test.ts (1583 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | makeTempRoot | (private) |
| 62 | fn | expectPathMissing | (private) |
| 82 | fn | requireFirstMockCall | (private) |
| 93 | fn | requireCommandOptions | (private) |

## src/infra/npm-managed-root.ts (1236 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | ManagedNpmRootManifest | (private) |
| 26 | type | HostPackageManifest | (private) |
| 34 | type | ManagedNpmRootOpenClawMetadata | (private) |
| 41 | type | ManagedNpmRootPeerDependencySnapshot | pub |
| 47 | type | ManagedNpmRootInstalledDependency | pub |
| 53 | type | ManagedNpmRootLockfile | (private) |
| 59 | type | ManagedNpmRootLogger | (private) |
| 63 | type | ManagedNpmRootRunCommand | (private) |
| 65 | type | ManagedNpmRootOpenClawHostState | (private) |
| 67 | fn | readDependencyRecord | (private) |
| 80 | fn | isSafePackageName | (private) |
| 92 | fn | isManagedNpmRootHostPeerPackageName | (private) |
| 96 | fn | readOverrideRecord | (private) |
| 109 | fn | readManagedOverrideKeys | (private) |
| 116 | fn | readManagedPeerDependencyKeys | (private) |
| 123 | fn | buildManagedOpenClawMetadata | (private) |
| 145 | fn | readManagedNpmRootManifest | (private) |
| 150 | fn | readHostWorkspaceOverrides | (private) |
| 157 | fn | readHostDependencySpec | (private) |
| 169 | fn | resolveHostOverrideReferences | (private) |
| 183 | fn | isUnsupportedManagedNpmOverride | (private) |
| 187 | fn | filterUnsupportedManagedNpmRootOverrides | (private) |
| 208 | fn | readRootOverrideSpec | (private) |
| 223 | fn | reconcileManagedNpmRootOverrideConflicts | (private) |
| 266 | fn | applyManagedNpmRootOverrides | (private) |
| 290 | fn | readOpenClawManagedNpmRootOverrides | pub |
| 327 | fn | resolveManagedNpmRootDependencySpec | pub |
| 335 | fn | upsertManagedNpmRootDependency | pub |
| 386 | fn | isOptionalPeerDependency | (private) |
| 394 | fn | isDevOnlyLockPackage | (private) |
| 398 | fn | readStringList | (private) |
| 409 | fn | matchesNpmPlatformList | (private) |
| 436 | fn | resolveCurrentLibc | (private) |
| 455 | fn | isUnsupportedOptionalLockPackage | (private) |
| 466 | fn | hasNpmPlatformConstraint | (private) |
| 470 | fn | readLockPackageLocationName | (private) |
| 489 | fn | readLockPackageName | (private) |
| 499 | fn | resolveManagedNpmLockPackagePath | (private) |
| 517 | fn | isTopLevelLockPackageLocation | (private) |
| 521 | type | MissingRequiredPlatformPackage | (private) |
| 527 | fn | listMissingRequiredPlatformPackages | pub |
| 562 | fn | findLockPackageVersion | (private) |
| 584 | fn | collectNpmLockPeerDependencyPins | (private) |
| 628 | fn | copyPathIfExists | (private) |
| 639 | fn | scrubHostPeerFromLockPackage | (private) |
| 667 | fn | scrubHostPeerFromTempPackageLock | (private) |
| 688 | fn | collectExistingManagedPeerDependencyPins | (private) |
| 702 | fn | isHostPeerResolutionFailure | (private) |
| 709 | fn | createManagedNpmPeerPlanArgs | (private) |
| 730 | fn | collectNpmResolvedManagedNpmRootPeerDependencyPins | (private) |
| 813 | fn | readManagedNpmRootPeerDependencySnapshot | pub |
| 833 | fn | restoreManagedNpmRootPeerDependencySnapshot | pub |
| 881 | fn | syncManagedNpmRootPeerDependencies | pub |
| 960 | fn | repairManagedNpmRootOpenClawPeer | pub |
| 1043 | fn | readManagedNpmRootOpenClawHostState | (private) |
| 1071 | fn | managedNpmRootLockfileHasOpenClawPeer | (private) |
| 1097 | fn | realpathIfExists | (private) |
| 1108 | fn | lstatIfExists | (private) |
| 1119 | fn | pathExists | (private) |
| 1131 | fn | scrubManagedNpmRootOpenClawPeer | (private) |
| 1197 | fn | readManagedNpmRootInstalledDependency | pub |
| 1218 | fn | removeManagedNpmRootDependency | pub |

## src/infra/package-update-steps.pnpm11-guard.test.ts (805 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | PackageUpdateStepResult | (private) |
| 13 | fn | writePackageRoot | (private) |
| 26 | fn | writePnpmIsolatedPackage | (private) |
| 48 | fn | createPnpmTarget | (private) |
| 57 | fn | expectPathMissing | (private) |

## src/infra/package-update-steps.test.ts (966 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | PackageUpdateStepResult | (private) |
| 25 | fn | writePackageRoot | (private) |
| 38 | fn | addHardlinkedPackageFile | (private) |
| 44 | fn | createNpmTarget | (private) |
| 53 | fn | createFsError | (private) |
| 57 | fn | createPnpmTarget | (private) |
| 66 | fn | expectPathMissing | (private) |
| 76 | fn | createRootRunner | (private) |

## src/infra/package-update-steps.ts (1213 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | PackageUpdateStepResult | (private) |
| 56 | type | PackageUpdateStepRunner | (private) |
| 64 | type | StagedNpmInstall | (private) |
| 71 | type | NpmBinShimBackup | (private) |
| 88 | fn | resolveCanonicalPath | (private) |
| 92 | fn | runPnpmPreflightProbe | (private) |
| 144 | fn | validatePnpmIsolatedUpdate | (private) |
| 287 | fn | isBlockingPackageUpdateStep | (private) |
| 291 | fn | isNormalProcessExit | (private) |
| 305 | fn | markPackagePostInstallDoctorAdvisory | pub |
| 341 | fn | removePathBestEffort | (private) |
| 355 | fn | readPackageVersionIfPresent | (private) |
| 366 | fn | isUnambiguousNpmPrefixGlobalRoot | (private) |
| 382 | fn | resolveStagedNpmTargetLayout | (private) |
| 400 | fn | stripPackageAlias | (private) |
| 408 | fn | isHttpGitUrlSpec | (private) |
| 425 | fn | isGitHubShorthandSpec | (private) |
| 434 | fn | isNpmGitSourceInstallSpec | (private) |
| 447 | fn | resolvePnpmInstallSpecFromCwd | (private) |
| 456 | fn | restoreAlias | (private) |
| 490 | fn | createStagedNpmInstall | (private) |
| 515 | fn | findPackedTarball | (private) |
| 524 | fn | prepareNpmGitSourceInstallSpec | (private) |
| 606 | fn | prepareStagedNpmInstall | (private) |
| 641 | fn | cleanupStagedNpmInstall | (private) |
| 648 | fn | copyPathEntry | (private) |
| 667 | fn | replaceNpmBinShims | (private) |
| 721 | fn | restoreNpmBinShimBackup | (private) |
| 732 | fn | swapStagedNpmInstall | (private) |
| 824 | fn | runGlobalPackageUpdateSteps | pub |

## src/infra/path-env.test.ts (577 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | abs | (private) |
| 13 | fn | setDir | (private) |
| 14 | fn | setExe | (private) |
| 19 | fn | absInMock | (private) |
| 84 | fn | setupAppCliRoot | (private) |
| 94 | fn | bootstrapPath | (private) |
| 105 | fn | resetBootstrapEnv | (private) |
| 116 | fn | expectPathsAfter | (private) |

## src/infra/ports-inspect.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | CommandResult | (private) |
| 32 | fn | runCommandSafe | (private) |
| 50 | fn | parseLsofFieldOutput | (private) |
| 69 | fn | dedupePortListeners | (private) |
| 81 | fn | parseLsofTcpConnectionAddress | (private) |
| 97 | fn | resolveLocalNetworkAddresses | (private) |
| 107 | fn | isGatewayConnectionAddress | (private) |
| 122 | fn | resolveLsofTcpDirection | (private) |
| 136 | fn | parseLsofConnectionFieldOutput | (private) |
| 150 | fn | parseSsConnectionEndpoint | (private) |
| 160 | fn | parseSsConnections | (private) |
| 200 | fn | enrichUnixListenerProcessInfo | (private) |
| 224 | fn | readUnixEstablishedConnectionsFromSs | (private) |
| 255 | fn | readUnixEstablishedConnections | (private) |
| 289 | fn | resolveUnixCommandLine | (private) |
| 298 | fn | resolveUnixUser | (private) |
| 307 | fn | resolveUnixParentPid | (private) |
| 317 | fn | parseSsListeners | (private) |
| 348 | fn | readUnixListenersFromSs | (private) |
| 372 | fn | readUnixListeners | (private) |
| 407 | fn | parseNetstatListeners | (private) |
| 411 | fn | parseNetstatConnections | (private) |
| 446 | fn | resolveWindowsImageName | (private) |
| 468 | fn | resolveWindowsCommandLine | (private) |
| 505 | fn | readWindowsNetstatEntries | (private) |
| 543 | fn | readWindowsListeners | (private) |
| 550 | fn | readWindowsEstablishedConnections | (private) |
| 557 | fn | inspectPortUsage | pub |
| 586 | fn | inspectPortConnections | pub |

## src/infra/ports.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | setPlatform | (private) |
| 30 | fn | listenServer | (private) |

## src/infra/provider-usage.auth.normalizes-keys.test.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | readStore | (private) |
| 156 | fn | resolveToken | (private) |
| 338 | fn | withSuiteHome | (private) |
| 352 | fn | agentDirForHome | (private) |
| 356 | fn | buildSuiteEnv | (private) |
| 375 | fn | writeAuthProfiles | (private) |
| 385 | fn | writeConfig | (private) |
| 395 | fn | writeProfileOrder | (private) |
| 412 | fn | createTestModelDefinition | (private) |
| 424 | fn | resolveMinimaxAuthFromConfiguredKey | (private) |
| 448 | fn | expectResolvedAuthsFromSuiteHome | (private) |

## src/infra/provider-usage.auth.ts (582 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ProviderAuth | pub |
| 42 | type | AuthStore | (private) |
| 44 | type | UsageAuthState | (private) |
| 52 | fn | resolveUsageAuthStore | (private) |
| 59 | fn | resolveProviderApiKeyFromConfig | (private) |
| 86 | fn | hasProviderAuthEnvCredentialSource | (private) |
| 109 | fn | hasProviderUsageAuthEnvCredentialSource | (private) |
| 134 | fn | resolveProviderApiKeyFromConfigAndStore | (private) |
| 142 | fn | resolveProviderApiKeyCandidatesFromConfigAndStoreSync | (private) |
| 184 | fn | resolveProviderApiKeyCandidatesFromConfigAndStore | (private) |
| 231 | fn | normalizeProviderIds | (private) |
| 241 | fn | isUsageProviderManifestEligible | (private) |
| 264 | fn | resolveUsageCredentialProviderIds | (private) |
| 294 | fn | resolveOAuthToken | (private) |
| 354 | fn | resolveProviderUsageAuthViaPlugin | (private) |
| 417 | fn | resolveProviderUsageAuthFallback | (private) |
| 446 | fn | hasAuthProfileCredentialSource | (private) |
| 477 | fn | resolveProviderAuths | pub |

## src/infra/push-apns-store.ts (691 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ApnsEnvironment | pub |
| 25 | type | DirectApnsRegistration | pub |
| 34 | type | RelayApnsRegistration | pub |
| 49 | type | ApnsRegistration | pub |
| 51 | type | RegisterDirectApnsParams | (private) |
| 60 | type | RegisterRelayApnsParams | (private) |
| 74 | type | RegisterApnsParams | (private) |
| 76 | type | ApnsRegistrationDatabase | (private) |
| 80 | type | ApnsRegistrationRow | (private) |
| 81 | type | ApnsRegistrationInsert | (private) |
| 90 | fn | apnsStateDatabaseOptions | (private) |
| 96 | fn | normalizeApnsNodeId | pub |
| 100 | fn | isValidApnsNodeId | pub |
| 104 | fn | normalizeApnsToken | pub |
| 108 | fn | normalizeRelayHandle | (private) |
| 112 | fn | normalizeInstallationId | (private) |
| 116 | fn | validateRelayIdentifier | (private) |
| 133 | fn | isValidRelayIdentifier | (private) |
| 140 | fn | normalizeApnsTopic | pub |
| 144 | fn | isValidApnsTopic | pub |
| 148 | fn | normalizeTokenDebugSuffix | (private) |
| 156 | fn | isLikelyApnsToken | pub |
| 160 | fn | normalizeDistribution | (private) |
| 170 | fn | normalizeRelayOrigin | (private) |
| 185 | fn | normalizePersistedRelayOrigin | (private) |
| 198 | fn | normalizeApnsEnvironment | pub |
| 209 | fn | normalizeDirectRegistration | (private) |
| 244 | fn | normalizeRelayRegistration | (private) |
| 301 | fn | normalizeCanonicalApnsRegistrationWithRelayOrigin | (private) |
| 320 | fn | normalizeCanonicalApnsRegistration | pub |
| 329 | fn | apnsRegistrationFromRow | pub |
| 371 | fn | apnsRegistrationToRow | pub |
| 404 | fn | apnsRegistrationsEqual | (private) |
| 429 | fn | nextApnsRegistrationVersion | (private) |
| 444 | fn | registerApnsRegistration | pub |
| 574 | fn | loadApnsRegistration | pub |
| 594 | fn | loadApnsRegistrations | pub |
| 642 | fn | clearApnsRegistrationIfCurrent | pub |

## src/infra/push-apns.test.ts (982 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | CapturedApnsRequest | (private) |
| 84 | type | DestroyableConnection | (private) |
| 88 | fn | createDirectApnsSendFixture | (private) |
| 111 | fn | createRelayApnsSendFixture | (private) |
| 151 | fn | listen | (private) |
| 166 | fn | closeServer | (private) |
| 178 | fn | requireRecord | (private) |
| 185 | fn | expectRecordFields | (private) |
| 191 | fn | expectNoProperties | (private) |
| 197 | fn | requireSendRequest | (private) |
| 206 | fn | requirePayload | (private) |
| 210 | fn | startFakeApnsServer | (private) |
| 243 | fn | startConnectProxy | (private) |

## src/infra/push-apns.ts (703 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | ApnsTransport | (private) |
| 54 | type | ApnsAuthConfig | pub |
| 60 | type | ApnsAuthConfigResolution | (private) |
| 63 | type | ApnsPushResult | (private) |
| 74 | type | ApnsPushAlertResult | (private) |
| 75 | type | ApnsPushWakeResult | (private) |
| 80 | type | ApnsPushType | (private) |
| 82 | type | ApnsRequestParams | (private) |
| 93 | type | ApnsRequestResponse | (private) |
| 95 | type | ApnsRequestSender | (private) |
| 102 | fn | parseReason | (private) |
| 117 | fn | toBase64UrlBytes | (private) |
| 125 | fn | toBase64UrlJson | (private) |
| 129 | fn | getJwtCacheKey | (private) |
| 134 | fn | getApnsBearerToken | (private) |
| 159 | fn | normalizePrivateKey | (private) |
| 163 | fn | normalizeNonEmptyString | (private) |
| 169 | fn | shouldInvalidateApnsRegistration | (private) |
| 177 | fn | shouldClearStoredApnsRegistration | pub |
| 195 | fn | resolveApnsAuthConfigFromEnv | pub |
| 248 | fn | sendApnsRequest | (private) |
| 273 | fn | fail | (private) |
| 281 | fn | finish | (private) |
| 332 | fn | resolveApnsTimeoutMs | (private) |
| 336 | fn | resolveDirectSendContext | (private) |
| 361 | fn | resolveRegistrationDebugSuffix | (private) |
| 373 | fn | toPushResult | (private) |
| 406 | fn | sendDirectApnsPush | (private) |
| 437 | fn | sendRelayApnsPush | (private) |
| 459 | type | ApnsAlertCommonParams | (private) |
| 466 | type | DirectApnsAlertParams | (private) |
| 474 | type | RelayApnsAlertParams | (private) |
| 483 | type | ApnsBackgroundWakeCommonParams | (private) |
| 489 | type | DirectApnsBackgroundWakeParams | (private) |
| 497 | type | RelayApnsBackgroundWakeParams | (private) |
| 506 | type | ApnsApprovalCommonParams | (private) |
| 513 | type | DirectApnsApprovalParams | (private) |
| 521 | type | RelayApnsApprovalParams | (private) |
| 530 | type | ApnsApprovalParams | (private) |
| 532 | type | ApnsPluginApprovalAlertParams | (private) |
| 538 | fn | sendApnsAlert | pub |
| 572 | fn | sendApnsBackgroundWake | pub |
| 604 | fn | sendApnsApprovalPush | (private) |
| 636 | fn | sendApnsExecApprovalAlert | pub |
| 655 | fn | sendApnsPluginApprovalAlert | pub |
| 673 | fn | sendApnsApprovalResolvedWake | (private) |
| 690 | fn | sendApnsExecApprovalResolvedWake | pub |
| 697 | fn | sendApnsPluginApprovalResolvedWake | pub |

## src/infra/restart-handoff.test.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | GatewayRestartHandoffDatabase | (private) |
| 28 | fn | createHandoffEnv | (private) |
| 37 | fn | legacyHandoffPath | (private) |
| 41 | fn | readHandoffRow | (private) |
| 68 | fn | insertHandoffRow | (private) |
| 110 | fn | expectWrittenHandoff | (private) |
| 120 | fn | spawnHandoffConsumer | (private) |

## src/infra/restart-sentinel-store.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | RestartSentinelLog | (private) |
| 16 | type | RestartSentinelStep | (private) |
| 24 | type | RestartSentinelStats | (private) |
| 36 | type | RestartSentinelContinuation | pub |
| 46 | type | RestartSentinelPayload | pub |
| 63 | type | RestartSentinelEnvelope | pub |
| 68 | type | RestartSentinel | pub |
| 73 | type | RestartSentinelRowState | (private) |
| 93 | type | GatewayRestartSentinelDatabase | (private) |
| 95 | fn | isFiniteNumber | (private) |
| 99 | fn | isSafeInteger | (private) |
| 103 | fn | parseOptionalNullableString | (private) |
| 114 | fn | parseRestartSentinelLog | (private) |
| 141 | fn | parseRestartSentinelStep | (private) |
| 172 | fn | parseRestartSentinelStats | (private) |
| 232 | fn | parseRestartSentinelContinuation | (private) |
| 245 | fn | parseRestartSentinelPayload | (private) |
| 347 | fn | parseRestartSentinelEnvelope | pub |
| 355 | fn | parseRequiredJson | (private) |
| 366 | fn | decodeRestartSentinelRow | (private) |
| 431 | fn | readRestartSentinelRowSync | pub |
| 462 | fn | requireValidPayload | (private) |
| 470 | fn | nextRevision | (private) |
| 483 | fn | readRestartSentinelRevisionFloorSync | (private) |
| 501 | fn | maxRevision | (private) |
| 511 | fn | buildRestartSentinelRow | (private) |
| 537 | fn | upsertRestartSentinelRowSync | (private) |
| 569 | fn | advanceRestartSentinelRevisionFloorSync | (private) |
| 579 | fn | writeRestartSentinelRowSync | pub |
| 600 | fn | writeRestartSentinelRowIfRevisionSync | pub |
| 630 | fn | deleteRestartSentinelRowSync | pub |

## src/infra/restart-sentinel.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | withRestartSentinelStateDir | (private) |
| 82 | type | GatewayRestartSentinelDatabase | (private) |
| 84 | fn | readSentinelRow | (private) |
| 96 | fn | readSentinelRevisionFloor | (private) |
| 108 | fn | deleteSentinelRevisionFloor | (private) |
| 117 | fn | updateSentinelRow | (private) |

## src/infra/restart-stale-pids.test.ts (1441 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | fn | lsofOutput | (private) |
| 111 | type | MockLsofResult | (private) |
| 118 | type | MockWindowsListeningPidsResult | (private) |
| 122 | type | MockWindowsProcessArgsResult | (private) |
| 126 | fn | createLsofResult | (private) |
| 136 | fn | createOpenClawBusyResult | (private) |
| 143 | fn | createErrnoResult | (private) |
| 149 | fn | installInitialBusyPoll | (private) |
| 167 | fn | mockCall | (private) |
| 175 | fn | mockCallRecordArg | (private) |
| 188 | fn | expectWarningContaining | (private) |
| 233 | fn | withStubbedPpid | (private) |

## src/infra/restart-stale-pids.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | getTimeMs | (private) |
| 60 | fn | sleepSync | (private) |
| 80 | fn | getParentPid | (private) |
| 91 | fn | readParentPidFromProc | (private) |
| 112 | fn | readParentPidFromPs | (private) |
| 157 | fn | getSelfAndAncestorPidsSync | pub |
| 189 | fn | getExcludedGatewayPidsSync | (private) |
| 208 | fn | parseLsofEntries | (private) |
| 212 | fn | flush | (private) |
| 231 | fn | parsePsCommandLine | (private) |
| 242 | fn | readUnixProcessArgsSync | (private) |
| 260 | fn | verifyGatewayPidByArgvSync | (private) |
| 265 | fn | parsePidsFromLsofOutput | (private) |
| 297 | fn | filterVerifiedWindowsGatewayPids | (private) |
| 307 | fn | filterVerifiedWindowsGatewayPidsResult | (private) |
| 329 | fn | findVerifiedWindowsGatewayPidsOnPortSync | (private) |
| 333 | fn | findVerifiedWindowsGatewayPidsOnPortResultSync | (private) |
| 348 | fn | findGatewayPidsOnPortWithProtectedPidSync | (private) |
| 395 | fn | findGatewayPidsOnPortSync | pub |
| 421 | type | PollResult | (private) |
| 423 | fn | pollPortOnce | (private) |
| 468 | fn | pollPortOnceWindows | (private) |
| 487 | fn | terminateStaleProcessesSync | (private) |
| 510 | fn | trySignalStaleProcess | (private) |
| 528 | fn | terminateStaleProcessesWindows | (private) |
| 567 | fn | isProcessAlive | (private) |
| 593 | fn | waitForPortFreeSync | (private) |
| 620 | type | CleanStaleGatewayProcessesOptions | (private) |
| 624 | fn | cleanStaleGatewayProcessesSync | pub |

## src/infra/restart.ts (1166 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | shouldPreferRestartReason | (private) |
| 56 | fn | isUpdateRestart | (private) |
| 60 | fn | hasUnconsumedRestartSignal | (private) |
| 64 | fn | clearPendingScheduledRestart | (private) |
| 77 | fn | clearPendingRestartSignalAdmission | (private) |
| 90 | fn | rollbackGatewayRestartSignalAdmission | pub |
| 94 | fn | armPendingRestartTimer | (private) |
| 121 | fn | clearActiveDeferralPolls | (private) |
| 128 | fn | clearGatewayRestartTransientState | (private) |
| 143 | fn | resetGatewayRestartStateForInProcessRestart | pub |
| 156 | type | RestartAuditInfo | (private) |
| 163 | fn | summarizeChangedPaths | (private) |
| 174 | fn | formatRestartAudit | (private) |
| 201 | fn | setPreRestartDeferralCheck | pub |
| 211 | fn | emitGatewayRestart | (private) |
| 260 | fn | emitGatewayRestartWithSignalAdmission | (private) |
| 287 | fn | requestGatewayRestartWithSignalAdmission | pub |
| 298 | fn | resetSigusr1AuthorizationIfExpired | (private) |
| 309 | fn | setGatewaySigusr1RestartPolicy | pub |
| 313 | fn | isGatewaySigusr1RestartExternallyAllowed | pub |
| 317 | fn | authorizeGatewaySigusr1Restart | (private) |
| 326 | fn | consumeGatewaySigusr1RestartAuthorization | pub |
| 338 | fn | peekGatewaySigusr1RestartReason | pub |
| 346 | fn | consumeGatewaySigusr1RestartIntent | pub |
| 360 | fn | markGatewaySigusr1RestartHandled | pub |
| 372 | fn | rollBackGatewayRestartEmission | (private) |
| 379 | type | RestartDeferralHooks | (private) |
| 387 | type | RestartEmitHooks | (private) |
| 394 | type | RestartDeferralHandle | pub |
| 398 | type | GatewayRestartEmitter | pub |
| 403 | type | GatewayRestartEmitResult | (private) |
| 408 | fn | resolveGatewayRestartDeferralTimeoutMs | pub |
| 418 | fn | canReplacePendingRestartEmitHooks | (private) |
| 431 | fn | updatePendingRestartEmitHooks | (private) |
| 448 | fn | rejectPreparedRestartHook | (private) |
| 454 | fn | rejectPreparedRestartHooks | (private) |
| 464 | fn | emitPreparedGatewayRestartUnderAdmission | (private) |
| 471 | fn | isCurrent | (private) |
| 508 | fn | rejectCallerOnBail | (private) |
| 589 | fn | emitPreparedGatewayRestart | (private) |
| 625 | fn | rollbackFence | (private) |
| 690 | fn | deferGatewayRestartUntilIdle | pub |
| 709 | fn | stopPoll | (private) |
| 717 | fn | cancel | (private) |
| 726 | fn | attemptEmission | (private) |
| 769 | fn | inspectPending | (private) |
| 820 | fn | formatSpawnDetail | (private) |
| 826 | fn | clean | (private) |
| 857 | fn | normalizeSystemdUnit | (private) |
| 865 | fn | triggerOpenClawRestart | pub |
| 975 | type | ScheduledRestart | pub |
| 990 | fn | scheduleGatewaySigusr1Restart | pub |

## src/infra/run-node.test.ts (3055 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 84 | fn | createExitedProcess | (private) |
| 95 | fn | createPipedExitedProcess | (private) |
| 123 | fn | createFakeProcess | (private) |
| 131 | fn | skipRuntimePostBuild | (private) |
| 133 | fn | syncBundledPluginMetadata | (private) |
| 140 | fn | firstMockCall | (private) |
| 144 | fn | writeRuntimePostBuildScaffold | (private) |
| 169 | fn | expectedBuildSpawn | (private) |
| 173 | fn | expectedBundledPluginAssetBuildSpawn | (private) |
| 177 | fn | statusCommandSpawn | (private) |
| 181 | fn | resolvePath | (private) |
| 185 | fn | expectPathMissing | (private) |
| 195 | fn | writeProjectFiles | (private) |
| 205 | fn | touchProjectFiles | (private) |
| 214 | fn | setupTrackedProject | (private) |
| 233 | fn | createSpawnRecorder | (private) |
| 240 | fn | spawn | (private) |
| 244 | fn | spawnSync | (private) |
| 256 | fn | createBuildRequirementDeps | (private) |
| 292 | fn | runStatusCommand | (private) |
| 318 | fn | runGatewayClientCommand | (private) |
| 345 | fn | runQaCommand | (private) |
| 371 | fn | expectManifestId | (private) |
| 391 | fn | spawn | (private) |
| 451 | fn | spawn | (private) |
| 486 | fn | spawn | (private) |
| 533 | fn | spawn | (private) |
| 580 | fn | spawn | (private) |
| 651 | fn | spawn | (private) |
| 714 | fn | spawn | (private) |
| 777 | fn | spawn | (private) |
| 830 | fn | spawn | (private) |
| 864 | fn | spawn | (private) |
| 898 | fn | spawn | (private) |
| 1243 | fn | spawn | (private) |
| 1293 | fn | spawn | (private) |
| 1468 | fn | spawn | (private) |
| 1494 | fn | spawn | (private) |
| 2948 | fn | lockDeps | (private) |

## src/infra/session-cost-usage-rollup.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | UsageDayKeyFormatter | (private) |
| 26 | type | SessionUsageLatencyCentroid | (private) |
| 31 | type | SessionUsageLatencyAggregate | (private) |
| 39 | type | SessionUsageRollupBucket | (private) |
| 48 | type | SessionUsageUntimestampedRollup | (private) |
| 55 | type | SessionUsageRollupData | pub |
| 61 | type | SessionUsageRollupContribution | (private) |
| 73 | fn | emptyMessageCounts | (private) |
| 77 | fn | createLatencyAggregate | (private) |
| 81 | fn | compressLatencyCentroids | (private) |
| 107 | fn | addLatencyValue | (private) |
| 117 | fn | mergeLatencyAggregate | (private) |
| 136 | fn | createUntimestampedRollup | (private) |
| 145 | fn | createSessionUsageRollupData | pub |
| 149 | fn | incrementTool | (private) |
| 158 | fn | mergeTools | (private) |
| 167 | fn | modelKey | (private) |
| 171 | fn | addModelUsage | (private) |
| 190 | fn | mergeModels | (private) |
| 205 | fn | addMessageContribution | (private) |
| 224 | fn | createBucket | (private) |
| 235 | fn | appendSessionUsageRollupContribution | pub |
| 287 | fn | computeLatencyStats | (private) |
| 312 | fn | getUtcQuarterHourBucketKey | (private) |
| 322 | fn | addMessageCounts | (private) |
| 331 | fn | sortedModelUsage | (private) |
| 341 | fn | buildToolUsage | (private) |
| 355 | fn | usageBucketsInRange | (private) |
| 365 | fn | buildSessionCostSummaryFromRollup | pub |
| 522 | fn | addRollupToCostUsageSummary | pub |
| 539 | fn | cloneSessionUsageRollupData | pub |

## src/infra/session-cost-usage.test.ts (2988 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | waitForFast | (private) |
| 44 | fn | clearGatewayModelPricingState | (private) |
| 179 | fn | writeAgentUsage | (private) |
| 439 | fn | load | (private) |
| 706 | fn | assistantEntry | (private) |
| 726 | fn | userEntry | (private) |
| 774 | fn | assistantEntry | (private) |
| 878 | fn | assistantEntry | (private) |
| 999 | fn | assistantEntry | (private) |
| 1218 | fn | makeEntry | (private) |
| 1332 | type | FormatArgs | (private) |

## src/infra/session-cost-usage.ts (2348 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 119 | type | UsageCostRefreshState | (private) |
| 131 | type | UsageCostRefreshResult | (private) |
| 135 | fn | resolveUsageCostCacheDatabasePath | (private) |
| 139 | type | UsageCostJsonlCheckpoint | (private) |
| 149 | type | UsageCostSqliteCheckpoint | (private) |
| 159 | type | UsageCostRollupEntry | (private) |
| 169 | type | UsageCostStoredRollup | (private) |
| 174 | type | UsageCostTranscriptFile | (private) |
| 186 | fn | resolveUsageCostAgentDir | (private) |
| 193 | fn | resolveUsageCostPricingFingerprint | (private) |
| 197 | fn | resolveUsageCostSessionStorePath | (private) |
| 206 | fn | normalizeUsageCostRollup | (private) |
| 228 | fn | readUsageCostRollups | (private) |
| 247 | fn | listUsageCountedTranscriptFileStats | (private) |
| 319 | fn | listUsageCountedSqliteTranscriptStats | (private) |
| 357 | fn | formatCanonicalUsageCostSqliteMarker | (private) |
| 364 | fn | listUsageCountedTranscriptFiles | (private) |
| 371 | fn | listUsageCountedTranscriptStats | (private) |
| 385 | fn | resolveUsageCostTranscriptFile | (private) |
| 534 | type | UsageDayKeyFormatter | (private) |
| 650 | fn | isUsageCostRollupFresh | (private) |
| 674 | fn | canUseUsageCostRollupForPartial | (private) |
| 692 | fn | getUsageCostStaleRollupFiles | (private) |
| 701 | fn | countUsableUsageCostRollups | (private) |
| 715 | fn | latestUsageCostRollupScan | (private) |
| 725 | fn | buildCostUsageSummaryFromRollups | (private) |
| 777 | fn | computeUsageTokenTotals | (private) |
| 793 | fn | applyUsageTotals | (private) |
| 802 | fn | applyCostBreakdown | (private) |
| 814 | fn | applyCostTotal | (private) |
| 867 | type | UsageCostResolver | (private) |
| 872 | fn | createUsageCostResolver | (private) |
| 893 | fn | hashUsageCostCheckpoint | (private) |
| 897 | fn | readJsonlAnchorHash | (private) |
| 916 | fn | parseJsonlRecord | (private) |
| 931 | fn | scanJsonlRange | (private) |
| 1015 | fn | loadSqliteUsageTranscriptEvents | (private) |
| 1063 | fn | parseUsageCostTranscriptEntry | (private) |
| 1101 | fn | scanTranscriptFile | (private) |
| 1123 | fn | scanUsageFile | (private) |
| 1153 | fn | resolveExistingUsageSessionFile | pub |
| 1225 | fn | loadCostUsageSummary | pub |
| 1261 | fn | appendParsedEntryToRollup | (private) |
| 1290 | fn | scanRecordsIntoRollup | (private) |
| 1309 | fn | scanJsonlUsageRollup | (private) |
| 1384 | fn | selectIncrementalSqliteRecords | (private) |
| 1413 | fn | sqliteCheckpointAnchorHash | (private) |
| 1417 | fn | scanSqliteUsageRollup | (private) |
| 1522 | fn | scanUsageFileForRollup | (private) |
| 1533 | fn | refreshCostUsageCacheForAgent | (private) |
| 1626 | fn | refreshCostUsageCache | (private) |
| 1637 | fn | loadCostUsageSummaryFromCache | pub |
| 1682 | fn | loadSessionCostSummariesFromCache | pub |
| 1755 | fn | requestCostUsageCacheRefresh | (private) |
| 1783 | fn | mergeUsageCostRefreshRequest | (private) |
| 1806 | fn | scheduleUsageCostRefresh | (private) |
| 1822 | fn | runQueuedUsageCostRefresh | (private) |
| 1873 | fn | clearUsageCostRefreshesForTest | (private) |
| 1894 | fn | discoverAllSessions | pub |
| 1984 | fn | loadSessionCostSummary | pub |
| 2043 | fn | loadSessionUsageTimeSeries | pub |
| 2157 | fn | loadSessionLogs | pub |

## src/infra/session-delivery-queue.recovery.test.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 777 | fn | drain | (private) |

## src/infra/shell-env.test.ts (719 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | ShellEnvModule | (private) |
| 37 | fn | getShellPathTwice | (private) |
| 54 | fn | runShellEnvFallbackForShell | (private) |
| 66 | fn | runShellEnvFallback | (private) |
| 84 | fn | makeUnsafeStartupEnv | (private) |
| 94 | fn | expectSanitizedStartupEnv | (private) |
| 105 | fn | withEtcShells | (private) |
| 122 | fn | requireExecCall | (private) |
| 130 | fn | getShellPathTwiceWithExec | (private) |
| 140 | fn | probeShellPathWithFreshCache | (private) |
| 147 | fn | expectBinShFallbackExec | (private) |
| 392 | fn | makeExec | (private) |
| 399 | fn | runProbe | (private) |

## src/infra/sqlite-schema-contract.ts (596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | SqliteIndexListRow | (private) |
| 11 | type | SqliteIndexTermRow | (private) |
| 20 | type | SqliteIndexTermContract | (private) |
| 24 | type | SqliteSchemaRow | (private) |
| 29 | type | SqliteTableListRow | (private) |
| 35 | type | SqliteIndexContract | (private) |
| 44 | type | SqliteTableDefinition | (private) |
| 49 | type | SqliteTableContract | (private) |
| 58 | type | SqliteSchemaContract | (private) |
| 60 | type | SqliteSchemaCompatibility | pub |
| 86 | fn | assertSqliteSchemaContains | pub |
| 187 | fn | collectOptionalCanonicalTriggerGroups | (private) |
| 201 | fn | normalizeOptionalCanonicalTriggerSql | (private) |
| 206 | fn | buildSqliteSchemaContract | (private) |
| 236 | fn | collectSqliteTableContract | (private) |
| 288 | fn | compareTableDefinitions | (private) |
| 313 | fn | parseTableDefinition | (private) |
| 349 | type | SqlToken | (private) |
| 355 | fn | readTableConstraintKeyword | (private) |
| 364 | fn | readSqlToken | (private) |
| 389 | fn | normalizeSqlIdentifier | (private) |
| 402 | fn | collectSqliteIndexContract | (private) |
| 431 | fn | sqliteIndexTermKind | (private) |
| 435 | fn | normalizeSchemaSql | (private) |
| 448 | fn | splitSqlList | (private) |
| 474 | fn | findSqlCharacter | (private) |
| 490 | fn | findSqlClosingParenthesis | (private) |
| 513 | fn | normalizeSqlWhitespace | (private) |
| 549 | fn | skipSqlQuotedOrComment | (private) |
| 554 | fn | skipSqlQuoted | (private) |
| 574 | fn | skipSqlComment | (private) |
| 586 | fn | quoteSqliteIdentifier | (private) |
| 590 | fn | isEqual | (private) |
| 594 | fn | compareJson | (private) |

## src/infra/sqlite-snapshot.test.ts (564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | createTempDir | (private) |
| 26 | fn | createUnsafeIndexDrift | (private) |
| 239 | fn | asynchronousGuard | (private) |
| 257 | fn | asynchronousFinalCheck | (private) |

## src/infra/sqlite-snapshot.ts (865 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 81 | type | SqliteSnapshotValidator | pub |
| 83 | type | CreateVerifiedSqliteSnapshotOptions | (private) |
| 93 | type | SqliteFileContent | (private) |
| 98 | type | PublishedSqliteFileGuard | (private) |
| 103 | type | PublishVerifiedSqliteFileOptions | (private) |
| 115 | type | VerifiedSqliteSnapshot | (private) |
| 120 | fn | createPrivateSqliteDirectory | pub |
| 173 | fn | createPrivateSqliteTempDirectory | pub |
| 185 | fn | assertRegularSourceFile | (private) |
| 192 | fn | assertTargetAbsent | (private) |
| 204 | fn | copyFileExclusive | (private) |
| 260 | type | FileMutationFingerprint | (private) |
| 265 | fn | readMutationFingerprint | (private) |
| 277 | fn | assertMutationFingerprintUnchanged | (private) |
| 295 | fn | sameMutationFingerprint | (private) |
| 309 | fn | syncFile | (private) |
| 318 | fn | assertOpenFileIdentity | (private) |
| 335 | fn | hashPublishedFile | (private) |
| 347 | fn | hashOpenPublishedFile | (private) |
| 370 | fn | assertPublishedFileIdentitySync | (private) |
| 384 | fn | assertOpenFileIdentitySync | (private) |
| 401 | fn | hashPublishedFileSync | (private) |
| 444 | fn | assertExpectedContent | (private) |
| 461 | fn | removePublishedTargetIfOwned | (private) |
| 491 | fn | assertSynchronousCallbackResult | (private) |
| 502 | fn | isUnsupportedDirectorySyncError | (private) |
| 512 | fn | syncDirectoryBestEffort | pub |
| 533 | fn | isLinkFallbackError | (private) |
| 548 | fn | publishVerifiedSqliteFile | pub |
| 744 | fn | removePublicationStagingDirectory | (private) |
| 775 | fn | createVerifiedSqliteSnapshot | pub |

## src/infra/sqlite-wal.test.ts (730 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | createMockDb | (private) |
| 33 | fn | statfsFixture | (private) |

## src/infra/sqlite-wal.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | IntervalHandle | (private) |
| 31 | type | SqliteWalCheckpointMode | (private) |
| 32 | type | SqliteFilesystemJournalPolicy | (private) |
| 33 | type | MountEntry | (private) |
| 35 | type | SqliteWalMaintenance | pub |
| 41 | type | SqliteWalMaintenanceOptions | pub |
| 51 | type | SqliteConnectionPragmaOptions | pub |
| 56 | fn | configureSqliteBusyTimeout | (private) |
| 64 | fn | enableIncrementalAutoVacuumForFreshDatabase | (private) |
| 75 | fn | configureSqlitePreSchemaPragmas | pub |
| 85 | fn | normalizeNonNegativeInteger | (private) |
| 92 | fn | findExistingVolumePaths | (private) |
| 116 | fn | decodeMountPath | (private) |
| 122 | fn | parseProcMountInfoEntries | (private) |
| 144 | fn | parseMountCommandEntries | (private) |
| 170 | fn | isMountCommandTimeout | (private) |
| 176 | fn | readMountEntries | (private) |
| 203 | fn | isPathWithinMount | (private) |
| 213 | fn | isSshfsMountSource | (private) |
| 226 | fn | resolveMountTypeJournalPolicy | (private) |
| 240 | fn | resolveMountEntryJournalPolicy | (private) |
| 250 | fn | combineMountEntryJournalPolicies | (private) |
| 266 | fn | isWindowsUncPath | (private) |
| 273 | fn | isWindowsDrivePath | (private) |
| 277 | fn | resolvePathJournalPolicy | (private) |
| 319 | fn | readJournalModeResult | (private) |
| 328 | fn | hasInMemoryMainDatabase | (private) |
| 337 | fn | readCheckpointBusyResult | (private) |
| 346 | fn | requireRollbackJournalMode | (private) |
| 359 | fn | enableWalJournalMode | (private) |
| 410 | fn | enableMacosCheckpointFullfsync | (private) |
| 423 | fn | refuseUnsupportedFilesystem | (private) |
| 432 | fn | configureSqliteWalMaintenance | pub |
| 529 | fn | registerSqliteCacheExitClose | pub |
| 530 | fn | closeOnExit | (private) |
| 544 | fn | configureSqliteConnectionPragmas | pub |

## src/infra/state-migrations.apns.test.ts (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | useStateDir | (private) |
| 46 | fn | envFor | (private) |
| 50 | fn | directRegistration | (private) |
| 61 | fn | relayRegistration | (private) |
| 78 | fn | writeLegacyState | (private) |
| 88 | fn | migrate | (private) |

## src/infra/state-migrations.apns.ts (647 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | ApnsMigrationDatabase | (private) |
| 66 | type | LegacySourceSnapshot | (private) |
| 75 | type | MigrationReceipt | (private) |
| 80 | fn | resolveLegacyApnsPath | (private) |
| 84 | fn | legacyPathMayExist | (private) |
| 93 | fn | sourceOrClaimMayExist | (private) |
| 100 | fn | detectLegacyApnsRegistrations | pub |
| 111 | fn | relativeLegacyPath | (private) |
| 124 | fn | readLegacySourceSnapshot | (private) |
| 141 | fn | snapshotsMatch | (private) |
| 151 | fn | assertOnlyKeys | (private) |
| 158 | fn | isValidLegacyApnsTimestamp | (private) |
| 167 | fn | parseLegacyApnsRegistration | (private) |
| 218 | fn | receiptSourceKey | (private) |
| 222 | fn | readMigrationReceipt | (private) |
| 235 | fn | importAndRecordReceipt | (private) |
| 360 | fn | markSourceRemoved | (private) |
| 375 | fn | removePath | (private) |
| 388 | fn | cleanupReceiptAuthoritativeSources | (private) |
| 412 | fn | restoreClaim | (private) |
| 435 | fn | migrateWithExclusiveStateOwnership | (private) |
| 580 | fn | migrateLegacyApnsRegistrations | pub |

## src/infra/state-migrations.audit-logs.test.ts (1042 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | buildTestAuditScrubbedContent | (private) |
| 33 | fn | buildTestAuditRestoreJournal | (private) |
| 792 | fn | event | (private) |

## src/infra/state-migrations.audit-logs.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | legacyAuditClaimPathForArchive | (private) |
| 59 | type | AuditArchiveRelativePaths | (private) |
| 65 | fn | resolveAuditArchiveRelativePaths | (private) |
| 95 | fn | secureAuditArchiveFile | (private) |
| 116 | fn | archiveLegacyAuditClaim | (private) |
| 202 | fn | restoreOrPreserveLegacyAuditClaim | (private) |
| 241 | fn | migrateLegacyAuditLogSource | (private) |
| 248 | fn | result | (private) |
| 596 | fn | migrateLegacyAuditLogs | pub |

## src/infra/state-migrations.audit-recovery.test.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | buildTestAuditScrubbedContent | (private) |
| 29 | fn | buildTestAuditRestoreJournal | (private) |
| 354 | fn | event | (private) |
| 437 | fn | event | (private) |

## src/infra/state-migrations.audit-recovery.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | AuditMigrationRoot | pub |
| 24 | type | LegacyAuditSourceSnapshot | pub |
| 34 | fn | auditRecoverySiblingPath | (private) |
| 38 | fn | auditRecoveryJournalTargetsSnapshot | (private) |
| 49 | fn | auditRecoveryCheckpointPrefixMatches | (private) |
| 62 | fn | syncAuditRecoveryDirectory | (private) |
| 69 | fn | readLegacyAuditSourceSnapshot | pub |
| 102 | fn | readLegacyAuditSourcePrefixSnapshotForBackup | pub |
| 138 | fn | readLegacyAuditRecoverySourceForBackup | pub |
| 172 | fn | createAuditRecoveryScrubPattern | (private) |
| 188 | fn | buildScrubbedAuditRecoveryContent | (private) |
| 203 | fn | writeAuditRecoveryRange | (private) |
| 225 | fn | writeAuditRecoveryProgress | (private) |
| 248 | fn | readAuditRecoveryProgress | (private) |
| 271 | fn | advanceAuditRecoveryWrite | (private) |
| 310 | fn | reconcileAuditRecoveryPendingWrite | (private) |
| 331 | fn | stageAuditRecoveryRestore | (private) |
| 382 | fn | restoreInterruptedAuditRecoveryArchive | pub |
| 508 | fn | finalizeLegacyAuditRecoveryArchive | pub |
| 524 | fn | scrubLegacyAuditRecoveryArchive | pub |
| 620 | fn | recordLegacyAuditRawCheckpoint | pub |
| 676 | fn | findPreviousLegacyAuditRawCheckpoint | pub |
| 687 | fn | recordsAfterLegacyAuditRawCheckpoint | pub |

## src/infra/state-migrations.debug-proxy.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | LegacyDebugProxyCaptureDetection | (private) |
| 19 | type | LegacyCaptureSessionRow | (private) |
| 30 | type | LegacyCaptureEventRow | (private) |
| 53 | type | LegacyCaptureBlobRow | (private) |
| 63 | class | LegacyDebugProxyBlobConflictError | (private) |
| 69 | class | LegacyDebugProxySessionConflictError | (private) |
| 75 | fn | fileExists | (private) |
| 83 | fn | dirExists | (private) |
| 91 | fn | resolveLegacyDebugProxyCapturePaths | (private) |
| 102 | fn | hasPendingSqliteArchive | (private) |
| 112 | fn | detectLegacyDebugProxyCaptureSidecar | pub |
| 133 | fn | listSqliteColumns | (private) |
| 138 | fn | assertTableColumns | (private) |
| 146 | fn | normalizeSqliteInteger | (private) |
| 150 | fn | readLegacyDebugProxyCapture | (private) |
| 280 | fn | eventValues | (private) |
| 305 | fn | eventKey | (private) |
| 309 | fn | archiveLegacyDebugProxySqlite | (private) |
| 368 | fn | archiveLegacyDebugProxyBlobs | (private) |
| 395 | fn | migrateLegacyDebugProxyCaptureSidecar | pub |

## src/infra/state-migrations.device-identity.test.ts (805 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | MigrationDatabase | (private) |
| 47 | fn | useStateDir | (private) |
| 55 | fn | database | (private) |
| 59 | fn | swiftIdentity | (private) |
| 68 | fn | normalizedSwift | (private) |
| 76 | fn | nodeIdentity | (private) |
| 87 | fn | anotherIdentity | (private) |
| 98 | fn | rewrapPem | (private) |
| 108 | fn | writeLegacy | (private) |
| 122 | fn | identityRow | (private) |
| 133 | fn | receipt | (private) |
| 144 | fn | seedCanonical | (private) |
| 161 | fn | seedInvalidCanonical | (private) |
| 178 | fn | migrate | (private) |

## src/infra/state-migrations.device-identity.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | isValidCreatedAtMs | (private) |
| 46 | fn | deviceIdentityKeyMaterialMatches | (private) |
| 61 | type | DeviceIdentityMigrationDatabase | (private) |
| 66 | type | LegacySourceSnapshot | (private) |
| 76 | type | MigrationReceipt | (private) |
| 84 | fn | relativeLegacyPath | (private) |
| 97 | fn | readLegacySourceSnapshot | (private) |
| 128 | fn | snapshotsMatch | (private) |
| 138 | fn | receiptSourceKey | (private) |
| 142 | fn | readMigrationReceipt | (private) |
| 161 | type | CanonicalIdentityRow | (private) |
| 170 | fn | classifyCanonicalRow | (private) |
| 206 | fn | readCanonicalIdentity | (private) |
| 218 | fn | verifyCanonicalIdentity | (private) |
| 229 | fn | importAndRecordReceipt | (private) |
| 343 | fn | markSourceRemoved | (private) |
| 358 | fn | removePath | (private) |
| 371 | fn | restoreClaim | (private) |
| 394 | fn | cleanupReceiptSources | (private) |
| 455 | fn | migrateWithExclusiveStateOwnership | (private) |
| 605 | fn | migrateLegacyDeviceIdentity | pub |

## src/infra/state-migrations.doctor.ts (1631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 157 | fn | describeStateSchemaMigration | (private) |
| 178 | fn | resetAutoMigrateLegacyStateForTest | pub |
| 184 | fn | collectChannelLegacyStateMigrationPlans | (private) |
| 214 | fn | collectPluginDoctorStateMigrationPlans | (private) |
| 256 | fn | createPluginDoctorStateMigrationContext | (private) |
| 279 | fn | detectLegacyStateMigrations | pub |
| 773 | fn | runPluginDoctorStateMigrationPlans | (private) |
| 809 | fn | migratePluginDoctorStatePlans | (private) |
| 874 | fn | autoMigrateLegacyPluginDoctorState | pub |
| 935 | fn | migrateLegacyStateSchema | (private) |
| 947 | fn | runLegacyStateMigrations | pub |
| 1192 | fn | autoMigrateLegacyState | pub |
| 1267 | fn | logMigrationResults | (private) |

## src/infra/state-migrations.managed-outgoing-images.ts (577 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | LegacySourceSnapshot | (private) |
| 55 | type | ParsedLegacyRecord | (private) |
| 61 | type | ClaimedLegacySource | (private) |
| 67 | fn | resolveLegacyManagedOutgoingImageRecordsDir | (private) |
| 71 | fn | sourceNameFromDoctorClaim | (private) |
| 83 | fn | isLegacyManagedImageSourceName | (private) |
| 87 | fn | detectLegacyManagedOutgoingImages | pub |
| 103 | fn | recoverInterruptedDoctorClaims | (private) |
| 127 | fn | readLegacySourceSnapshot | (private) |
| 158 | fn | sourceSnapshotsMatch | (private) |
| 168 | fn | optionalNonEmptyString | (private) |
| 172 | fn | nullableNonNegativeInteger | (private) |
| 179 | fn | parseLegacyManagedImageRecord | (private) |
| 277 | fn | restoreClaimedSources | (private) |
| 296 | fn | appendRestoreFailures | (private) |
| 300 | fn | claimLegacySources | (private) |
| 325 | fn | verifyClaimedSources | (private) |
| 337 | fn | removeClaimedSources | (private) |
| 352 | fn | isExpiredTransient | (private) |
| 361 | fn | rollbackImportedRecords | (private) |
| 401 | fn | migrateLegacyManagedOutgoingImages | pub |

## src/infra/state-migrations.mcp-oauth.test.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MigrationDatabase | (private) |
| 43 | fn | useStateDir | (private) |
| 48 | fn | database | (private) |
| 52 | fn | writeLegacy | (private) |
| 71 | fn | validStore | (private) |
| 111 | fn | storeRow | (private) |
| 122 | fn | receipt | (private) |
| 134 | fn | seedCanonical | (private) |
| 153 | fn | deleteCanonical | (private) |
| 161 | fn | migrate | (private) |

## src/infra/state-migrations.mcp-oauth.ts (624 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | McpOAuthMigrationDatabase | (private) |
| 38 | type | LegacySourceSnapshot | (private) |
| 48 | type | MigrationReceipt | (private) |
| 53 | fn | exactLegacyBaseName | (private) |
| 60 | fn | exactLegacyBaseNames | (private) |
| 71 | fn | listLegacySourcePaths | (private) |
| 76 | fn | listLegacySourcePathsFromRoot | (private) |
| 90 | fn | pathMayExist | (private) |
| 100 | fn | detectLegacyMcpOAuthStores | pub |
| 116 | fn | relativeLegacyPath | (private) |
| 129 | fn | readLegacySourceSnapshot | (private) |
| 158 | fn | snapshotsMatch | (private) |
| 168 | fn | storeKeyForSource | (private) |
| 176 | fn | receiptSourceKey | (private) |
| 180 | fn | readMigrationReceipt | (private) |
| 193 | fn | importAndRecordReceipt | (private) |
| 311 | fn | markSourceRemoved | (private) |
| 326 | fn | removePath | (private) |
| 339 | fn | cleanupReceiptAuthoritativeSources | (private) |
| 364 | fn | restoreClaim | (private) |
| 387 | fn | migrateOneStore | (private) |
| 506 | fn | migrateWithExclusiveStateOwnership | (private) |
| 556 | fn | migrateLegacyMcpOAuthStores | pub |

## src/infra/state-migrations.node-host.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | NodeHostConfigDatabase | (private) |
| 33 | type | LegacySourceSnapshot | (private) |
| 43 | type | CanonicalNodeHostState | (private) |
| 48 | fn | legacyPathMayExist | (private) |
| 57 | fn | sourceOrClaimMayExist | (private) |
| 65 | fn | detectLegacyNodeHostConfig | pub |
| 76 | fn | relativeLegacyPath | (private) |
| 89 | fn | readLegacySourceSnapshot | (private) |
| 111 | fn | sourceSnapshotsMatch | (private) |
| 121 | fn | contentSnapshotsMatch | (private) |
| 125 | fn | recoverInterruptedClaim | (private) |
| 148 | fn | assertOnlyKeys | (private) |
| 159 | fn | optionalLegacyString | (private) |
| 169 | fn | optionalLegacyContextPath | (private) |
| 179 | fn | parseLegacyGateway | (private) |
| 211 | fn | parseLegacyNodeHostConfig | (private) |
| 237 | fn | nullableNonEmptyString | (private) |
| 247 | fn | rowToCanonicalState | (private) |
| 291 | fn | configsEqual | (private) |
| 303 | fn | writeCanonicalState | (private) |
| 331 | fn | migrateIntoDatabase | (private) |
| 396 | fn | restoreClaim | (private) |
| 421 | fn | migrateWithExclusiveStateOwnership | (private) |
| 527 | fn | migrateLegacyNodeHostConfig | pub |

## src/infra/state-migrations.orphan-keys.test.ts (920 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | writeStore | (private) |
| 24 | fn | readStore | (private) |
| 28 | fn | requireStoreEntry | (private) |
| 39 | fn | withStateFixture | (private) |
| 54 | fn | opsSessionStorePath | (private) |
| 58 | fn | sharedMainOpsConfig | (private) |
| 65 | fn | migrateFixtureState | (private) |

## src/infra/state-migrations.plugin-state.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | LegacyPluginStateImportDatabase | (private) |
| 43 | fn | migrateLegacyPluginStateSidecar | pub |
| 169 | fn | migrateLegacyInstalledPluginIndex | pub |
| 237 | fn | resolvePluginStateImportTargetKey | (private) |
| 241 | fn | findMissingKey | (private) |
| 250 | fn | compareImportEntriesNewestFirst | (private) |
| 264 | fn | withPluginStateImportEnv | (private) |
| 284 | fn | runLegacyMigrationPlans | pub |
| 322 | type | CandidateEntry | (private) |
| 376 | fn | registerPreservingCreatedAt | (private) |
| 405 | fn | restoreExistingEntry | (private) |

## src/infra/state-migrations.restart-sentinel.ts (536 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | RestartSentinelMigrationDatabase | (private) |
| 41 | type | LegacySourceSnapshot | (private) |
| 50 | type | MigrationDecision | (private) |
| 57 | fn | legacyPathMayExist | (private) |
| 67 | fn | detectLegacyRestartSentinel | pub |
| 78 | fn | relativeLegacyPath | (private) |
| 91 | fn | readLegacySourceSnapshot | (private) |
| 114 | fn | snapshotsMatch | (private) |
| 124 | fn | parseLegacyEnvelope | (private) |
| 132 | fn | receiptSourceKey | (private) |
| 136 | fn | hasMigrationReceipt | (private) |
| 149 | fn | decideAndRecordMigration | (private) |
| 255 | fn | markSourceRemoved | (private) |
| 270 | fn | restoreClaim | (private) |
| 293 | fn | recoverInterruptedClaim | (private) |
| 320 | fn | decisionChange | (private) |
| 337 | fn | migrateWithExclusiveStateOwnership | (private) |
| 462 | fn | migrateLegacyRestartSentinel | pub |

## src/infra/state-migrations.runtime-state.ts (962 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | LegacyVoiceWakeImportDatabase | (private) |
| 24 | type | LegacyConfigHealthImportDatabase | (private) |
| 25 | type | LegacyPluginBindingApprovalsImportDatabase | (private) |
| 29 | type | LegacyCurrentConversationBindingsImportDatabase | (private) |
| 37 | fn | resolveLegacyVoiceWakeTriggersPath | pub |
| 41 | fn | resolveLegacyVoiceWakeRoutingPath | pub |
| 45 | fn | readLegacyJsonObject | (private) |
| 49 | fn | normalizeLegacyVoiceWakeTriggers | (private) |
| 59 | fn | legacyVoiceWakeTriggersMatch | (private) |
| 68 | fn | legacyVoiceWakeTargetColumns | (private) |
| 86 | fn | legacyVoiceWakeTargetColumnsMatch | (private) |
| 101 | fn | legacyVoiceWakeRoutingMatches | (private) |
| 137 | fn | migrateLegacyVoiceWakeSettings | pub |
| 323 | type | LegacyConfigHealthFile | (private) |
| 327 | type | LegacyConfigHealthEntry | (private) |
| 334 | fn | resolveLegacyConfigHealthPath | pub |
| 338 | fn | normalizeLegacyConfigHealthEntry | (private) |
| 373 | fn | normalizeLegacyConfigHealthFile | (private) |
| 387 | fn | configHealthRow | (private) |
| 403 | fn | retireLegacyConfigHealthSource | (private) |
| 429 | fn | migrateLegacyConfigHealth | pub |
| 539 | type | LegacyPluginBindingApprovalsFile | (private) |
| 544 | type | LegacyPluginBindingApprovalEntry | (private) |
| 553 | fn | resolveLegacyPluginBindingApprovalsPath | pub |
| 564 | fn | pluginBindingApprovalScopeKey | (private) |
| 574 | fn | normalizeLegacyPluginBindingApprovalEntry | (private) |
| 603 | fn | normalizeLegacyPluginBindingApprovalsFile | (private) |
| 624 | fn | pluginBindingApprovalRow | (private) |
| 642 | fn | pluginBindingApprovalComparable | (private) |
| 646 | fn | migrateLegacyPluginBindingApprovals | pub |
| 758 | type | LegacyCurrentConversationBindingsFile | (private) |
| 763 | fn | resolveLegacyCurrentConversationBindingsPath | pub |
| 767 | fn | currentConversationBindingKey | (private) |
| 777 | fn | normalizeLegacyCurrentConversationBindingRecord | (private) |
| 814 | fn | normalizeLegacyCurrentConversationBindingFile | (private) |
| 831 | fn | currentConversationBindingRow | (private) |
| 872 | fn | migrateLegacyCurrentConversationBindings | pub |

## src/infra/state-migrations.session-store.ts (1393 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | isLegacyDefaultMainAliasKey | pub |
| 59 | fn | resolveCanonicalAgentSessionOwner | (private) |
| 71 | fn | canonicalizeSessionKeyForAgent | (private) |
| 202 | fn | pickLatestLegacyDirectEntry | pub |
| 237 | fn | normalizeSessionEntry | pub |
| 257 | fn | resolveUpdatedAt | (private) |
| 263 | fn | mergeSessionEntry | pub |
| 282 | fn | canonicalizeSessionStore | pub |
| 345 | fn | isAmbiguousSharedStoreKey | pub |
| 368 | fn | aliasedSessionStoreMigrationWarning | pub |
| 376 | fn | unresolvedSessionStoreIdentityWarning | pub |
| 380 | fn | distinctSessionStoreAliasWarning | pub |
| 384 | fn | resolveStaleLegacySessionFile | pub |
| 429 | fn | readFirstLine | (private) |
| 461 | fn | skipJson5Trivia | (private) |
| 488 | fn | readJson5String | (private) |
| 509 | fn | readJson5BareKey | (private) |
| 535 | fn | listTopLevelSessionStoreKeys | (private) |
| 599 | fn | sessionStoreTextMayNeedCanonicalization | (private) |
| 677 | fn | listLegacySessionKeys | pub |
| 704 | fn | emptyDirOrMissing | pub |
| 711 | fn | removeDirIfEmpty | pub |
| 725 | fn | migrateOrphanedSessionKeys | pub |
| 751 | fn | addToStoreMap | (private) |
| 920 | fn | migrateLegacyAcpSessionMetadata | pub |
| 1123 | fn | resolveLegacyAcpMetadataSessionStoreTargets | (private) |
| 1130 | fn | addTarget | (private) |
| 1169 | fn | isManagedLegacySessionStorePathSafe | (private) |
| 1193 | fn | resolveStorePathFromTemplate | (private) |
| 1198 | fn | expand | (private) |
| 1206 | type | SessionStorePathRelationship | (private) |
| 1208 | fn | resolveSessionStorePathRelationship | (private) |
| 1231 | fn | sessionStorePathsMatch | (private) |
| 1237 | fn | resolvePathThroughExistingParents | (private) |
| 1259 | fn | sessionStorePathIsFinalSymlink | (private) |
| 1267 | fn | sessionStorePathsHaveDistinctEntries | (private) |
| 1290 | fn | resolveSessionStoreAliasPlan | (private) |
| 1318 | fn | mergeSessionStoreAliasPlans | pub |
| 1332 | fn | saveSessionStoreStrict | pub |
| 1342 | type | SessionStoreOwnership | pub |
| 1348 | fn | resolveSessionStoreOwnership | pub |
| 1363 | fn | resolveAgentStorePath | (private) |

## src/infra/state-migrations.storage.ts (1168 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | LegacyPluginStateSidecarRow | pub |
| 48 | type | LegacyDeliveryQueueFile | (private) |
| 53 | class | LegacyTaskStateSidecarConflictError | (private) |
| 59 | fn | buildLegacyMigrationPreview | pub |
| 66 | fn | resolveLegacyPluginStateSidecarPath | pub |
| 70 | fn | resolveLegacyTaskRunsSidecarPath | pub |
| 74 | fn | resolveLegacyFlowRunsSidecarPath | pub |
| 78 | fn | readLegacyPluginStateSidecarRows | pub |
| 98 | fn | legacyPluginStateRowsMatch | pub |
| 111 | fn | isLegacyPluginStateRowExpired | pub |
| 119 | fn | hasPendingSqliteSidecarArchive | pub |
| 130 | type | LegacyArchiveResolution | (private) |
| 136 | fn | firstFreeArchivePath | (private) |
| 145 | fn | archiveLegacyFileSource | (private) |
| 171 | fn | recordArchiveCollisionResolutions | (private) |
| 185 | fn | archiveLegacyPluginStateSidecar | pub |
| 224 | fn | readLegacyInstalledPluginIndex | pub |
| 252 | fn | readLegacyTopLevelInstallRecords | (private) |
| 260 | fn | readLegacyEmbeddedInstallRecords | (private) |
| 288 | fn | legacyInstalledPluginIndexMatches | pub |
| 299 | fn | readInstallRecordField | (private) |
| 306 | fn | readInstallRecordStringField | (private) |
| 314 | fn | legacyInstallRecordHasCurrentResolvedIdentity | (private) |
| 328 | fn | readAuthoritativeCurrentNpmIdentity | (private) |
| 344 | fn | legacyNpmInstallRecordSupersededByCurrent | (private) |
| 366 | fn | legacyInstallRecordCoveredByCurrent | (private) |
| 395 | fn | mergeLegacyInstalledPluginIndexRecords | pub |
| 423 | fn | archiveLegacyInstalledPluginIndex | pub |
| 443 | fn | archiveLegacyTaskStateSidecar | (private) |
| 482 | fn | hardenLegacyImportSource | (private) |
| 496 | fn | archiveLegacyImportSource | pub |
| 529 | fn | legacyKeyValue | (private) |
| 539 | fn | normalizeLegacyFlowRow | (private) |
| 579 | fn | legacyRowsMatch | (private) |
| 591 | fn | readLegacyFlowRows | (private) |
| 632 | fn | insertFlowRunRowSql | (private) |
| 649 | fn | migrateLegacyTaskRunsSidecar | (private) |
| 787 | fn | migrateLegacyFlowRunsSidecar | (private) |
| 880 | fn | migrateLegacyTaskStateSidecars | pub |
| 891 | fn | resolveLegacyDeliveryQueuePath | pub |
| 895 | fn | listLegacyDeliveryQueueFiles | pub |
| 909 | fn | listLegacyDeliveryQueueDeliveredMarkers | pub |
| 915 | fn | readLegacyDeliveryQueueEntry | (private) |
| 926 | fn | legacyQueueMetadata | (private) |
| 938 | fn | stringOrNull | (private) |
| 954 | fn | buildLegacyDeliveryQueueRow | (private) |
| 999 | fn | legacyDeliveryQueueRowsMatch | (private) |
| 1031 | fn | removeLegacyDeliveryQueueDir | (private) |
| 1045 | fn | removeLegacyDeliveryQueueMarkers | (private) |
| 1063 | fn | migrateLegacyDeliveryQueues | pub |

## src/infra/state-migrations.test.ts (3269 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | fileExists | (private) |
| 172 | type | UpdateCheckStateDatabase | (private) |
| 173 | type | ConfigHealthDatabase | (private) |
| 174 | type | PluginBindingApprovalsDatabase | (private) |
| 175 | type | CurrentConversationBindingsDatabase | (private) |
| 180 | fn | expectMissingPath | (private) |
| 192 | fn | createTempDir | (private) |
| 194 | fn | readUpdateCheckState | (private) |
| 218 | fn | readConfigHealthRows | (private) |
| 240 | fn | insertConfigHealthRow | (private) |
| 260 | fn | readCurrentConversationBindingRows | (private) |
| 288 | fn | readPluginBindingApprovalRows | (private) |
| 307 | fn | insertCurrentConversationBindingRow | (private) |
| 345 | fn | createConfig | (private) |
| 365 | fn | createEnv | (private) |
| 373 | fn | createLegacyAuditLedger | (private) |
| 433 | fn | createLegacyStateFixture | (private) |

## src/infra/state-migrations.web-push.test.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | useStateDir | (private) |
| 46 | fn | subscription | (private) |
| 57 | fn | vapidKeys | (private) |
| 68 | fn | writeLegacyState | (private) |
| 99 | fn | seedSubscription | (private) |
| 109 | fn | seedVapid | (private) |

## src/infra/state-migrations.web-push.ts (638 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | LegacySourceSnapshot | (private) |
| 47 | type | ParsedLegacyState | (private) |
| 53 | fn | resolveLegacyWebPushPaths | (private) |
| 60 | fn | legacyPathMayExist | (private) |
| 69 | fn | relativeLegacyPath | (private) |
| 82 | fn | sourceOrClaimMayExist | (private) |
| 85 | fn | detectLegacyWebPush | pub |
| 99 | fn | readLegacySourceSnapshot | (private) |
| 122 | fn | sourceSnapshotsMatch | (private) |
| 132 | fn | contentSnapshotsMatch | (private) |
| 136 | fn | maxBytesForSource | (private) |
| 142 | fn | recoverInterruptedClaim | (private) |
| 166 | fn | readLegacyState | (private) |
| 210 | fn | assertSourcesUnchanged | (private) |
| 229 | fn | mergedSubscription | (private) |
| 247 | fn | findSubscriptionById | (private) |
| 257 | fn | writeSubscription | (private) |
| 281 | fn | migrateIntoDatabase | (private) |
| 388 | fn | restoreClaims | (private) |
| 414 | fn | claimLegacySources | (private) |
| 456 | fn | removeClaimedSources | (private) |
| 477 | fn | migrateLegacyWebPushWithExclusiveStateOwnership | (private) |
| 567 | fn | migrateLegacyWebPush | pub |

## src/infra/state-migrations.workspace-setup-store.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | WorkspaceMigrationDatabase | (private) |
| 36 | type | SourceSnapshot | pub |
| 46 | type | ParsedSetup | (private) |
| 51 | type | ParsedAttestation | (private) |
| 56 | type | ParsedSource | pub |
| 60 | fn | parseIsoTimestamp | (private) |
| 74 | fn | parseSetup | (private) |
| 120 | fn | parseAttestation | (private) |
| 151 | fn | parseSource | pub |
| 158 | fn | mapsEqual | (private) |
| 170 | fn | canonicalFingerprint | (private) |
| 174 | fn | setupFingerprint | (private) |
| 188 | fn | attestationFingerprint | (private) |
| 201 | fn | findMigrationAuthority | (private) |
| 248 | fn | canonicalCoversParsedSource | pub |
| 327 | fn | importAndRecordReceipt | pub |
| 504 | fn | replaceExistingAttestation | (private) |

## src/infra/state-migrations.workspace-setup.test.ts (964 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | setup | (private) |
| 57 | fn | detect | (private) |
| 67 | fn | migrate | (private) |

## src/infra/state-migrations.workspace-setup.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | pathMayExist | (private) |
| 55 | fn | sourceOrClaimMayExist | (private) |
| 59 | fn | readBoundedRegularFile | (private) |
| 127 | fn | createLegacySource | (private) |
| 144 | fn | snapshotsMatch | (private) |
| 154 | fn | siblingAttestationNeedsDoctor | (private) |
| 187 | fn | listOrphanAttestationSources | (private) |
| 237 | fn | detectLegacyWorkspaceState | pub |
| 250 | fn | add | (private) |
| 332 | fn | assertConfiguredWorkspaceIdentity | (private) |
| 348 | fn | restoreClaim | (private) |
| 367 | fn | cleanupReceiptSource | (private) |
| 475 | fn | migrateOneSource | (private) |
| 644 | fn | migrateLegacyWorkspaceState | pub |

## src/infra/system-events.test.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | SystemEventsModule | (private) |
| 26 | fn | importSystemEventsModule | (private) |
| 33 | fn | drainFormattedEvents | (private) |

## src/infra/tmp-openclaw-dir.test.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | TmpDirOptions | (private) |
| 9 | fn | fallbackTmp | (private) |
| 13 | fn | nodeErrorWithCode | (private) |
| 19 | fn | secureDirStat | (private) |
| 28 | fn | makeDirStat | (private) |
| 42 | fn | readOnlyTmpAccessSync | (private) |
| 50 | fn | resolveWithReadOnlyTmpFallback | (private) |
| 75 | fn | symlinkTmpDirLstat | (private) |
| 79 | fn | expectFallsBackToOsTmpDir | (private) |
| 85 | fn | expectResolvesFallbackTmpDir | (private) |
| 97 | fn | missingThenSecureLstat | (private) |
| 106 | fn | resolveWithMocks | (private) |

## src/infra/unhandled-rejections.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | UnhandledRejectionHandler | (private) |
| 15 | type | UncaughtExceptionHandler | (private) |
| 150 | fn | hasSqliteSignal | (private) |
| 179 | fn | isWrappedFetchFailedMessage | (private) |
| 189 | fn | isBenignUncaughtNetworkMessage | (private) |
| 199 | fn | getErrorCause | (private) |
| 206 | fn | extractErrorCodeOrErrno | (private) |
| 224 | fn | extractNumericErrorCode | (private) |
| 239 | fn | extractErrorCodeWithCause | (private) |
| 247 | fn | isFatalError | (private) |
| 252 | fn | isConfigError | (private) |
| 257 | fn | collectNestedUnhandledErrorCandidates | (private) |
| 277 | fn | isTransientNetworkError | pub |
| 314 | fn | isTransientSqliteError | pub |
| 369 | fn | isTransientFileWatchError | pub |
| 374 | fn | hasFileWatchSignal | (private) |
| 380 | fn | hasFileWatchExhaustionSignal | (private) |
| 424 | fn | isTransientUnhandledRejectionError | pub |
| 430 | fn | isBenignUncaughtNetworkException | (private) |
| 456 | fn | isBenignUncaughtExceptionError | pub |
| 469 | fn | registerUnhandledRejectionHandler | pub |
| 476 | fn | isUnhandledRejectionHandled | (private) |
| 492 | fn | registerUncaughtExceptionHandler | pub |
| 499 | fn | isUncaughtExceptionHandled | pub |
| 515 | fn | installUnhandledRejectionHandler | pub |
| 516 | fn | exitWithTerminalRestore | (private) |

## src/infra/update-check.test.ts (773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | NpmMetadataCommandRunner | (private) |

## src/infra/update-check.ts (585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | PackageManager | (private) |
| 16 | type | GitUpdateStatus | (private) |
| 29 | type | DepsStatus | (private) |
| 37 | type | RegistryStatus | (private) |
| 44 | type | ExtendedStableFailureReason | pub |
| 50 | type | ExtendedStableResolutionResult | (private) |
| 62 | type | NpmTagStatus | (private) |
| 68 | type | UpdateCheckResult | pub |
| 80 | fn | isLoopbackNpmRegistry | (private) |
| 92 | fn | resolveExtendedStableRegistryTarget | (private) |
| 113 | fn | resolveExtendedStablePackage | pub |
| 154 | fn | formatGitInstallLabel | pub |
| 169 | fn | exists | (private) |
| 178 | fn | detectPackageManager | (private) |
| 182 | fn | detectGitRoot | (private) |
| 193 | fn | checkGitUpdateStatus | (private) |
| 287 | fn | statMtimeMs | (private) |
| 296 | fn | resolveDepsMarker | (private) |
| 325 | fn | checkDepsStatus | (private) |
| 393 | fn | fetchNpmLatestVersion | (private) |
| 412 | fn | fetchNpmRegistryVersionForChannel | (private) |
| 433 | fn | fetchNpmTagVersion | pub |
| 458 | fn | resolveNpmChannelTag | pub |
| 513 | fn | compareSemverStrings | pub |
| 525 | fn | checkUpdateStatus | pub |
| 533 | fn | fetchRegistry | (private) |

## src/infra/update-global.test.ts (975 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | writeGlobalPackageJson | (private) |
| 57 | fn | writeBundledPluginPackageJson | (private) |
| 67 | fn | createNpmRootRunner | (private) |

## src/infra/update-global.ts (1329 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | GlobalInstallManager | pub |
| 27 | type | CommandRunner | pub |
| 39 | type | ResolvedGlobalInstallCommand | (private) |
| 52 | type | ResolvedGlobalInstallTarget | pub |
| 74 | type | NpmGlobalPrefixLayout | pub |
| 80 | fn | normalizePackageTarget | (private) |
| 85 | fn | readPackageManagerProbeValue | pub |
| 96 | fn | normalizePackageVersionForComparison | (private) |
| 105 | fn | isMainPackageTarget | (private) |
| 113 | fn | isExplicitPackageInstallSpec | (private) |
| 126 | fn | isRelativePackageInstallPath | (private) |
| 130 | fn | resolveNpmInstallScriptsAllowFlag | (private) |
| 162 | fn | resolveNpmAliasPackageName | (private) |
| 180 | fn | stripPrimaryPackageAlias | (private) |
| 193 | fn | resolveExpectedInstalledVersionFromSpec | pub |
| 219 | fn | collectInstalledGlobalPackageErrors | pub |
| 243 | fn | collectSourceCheckoutInstallErrors | (private) |
| 255 | fn | shouldRequirePackagedDistInventory | (private) |
| 269 | fn | collectInstalledPackageDistErrors | (private) |
| 331 | fn | collectLegacyInstalledPackageDistPaths | (private) |
| 335 | fn | collectCriticalInstalledPackageDistPaths | (private) |
| 357 | fn | resolveBundledPluginRoot | (private) |
| 362 | fn | collectInstalledPathErrors | (private) |
| 395 | fn | canResolveRegistryVersionForPackageTarget | pub |
| 403 | fn | resolvePortableGitPathPrepend | (private) |
| 427 | fn | applyWindowsPackageInstallEnv | (private) |
| 437 | fn | applyCorepackDownloadPromptEnv | (private) |
| 448 | fn | resolveGlobalInstallSpec | pub |
| 474 | fn | createGlobalInstallEnv | pub |
| 492 | fn | tryRealpath | (private) |
| 500 | fn | resolveBunGlobalRoot | (private) |
| 505 | fn | inferNpmPrefixFromPackageRoot | (private) |
| 527 | fn | resolveNpmGlobalPrefixLayoutFromGlobalRoot | pub |
| 569 | fn | resolveNpmGlobalPrefixLayoutFromPrefix | pub |
| 585 | fn | splitNormalizedPathParts | (private) |
| 593 | fn | isNodeVersionPathPart | (private) |
| 597 | fn | hasPathSequence | (private) |
| 607 | fn | isEphemeralNodeManagedNpmPrefix | (private) |
| 630 | fn | resolveNpmCommandBesidePackageRoot | (private) |
| 640 | fn | resolvePreferredNpmCommand | (private) |
| 648 | fn | inferGlobalRootFromPackageRoot | (private) |
| 661 | fn | resolvePackageRootFromGlobalRoot | (private) |
| 677 | fn | isDirectNpmNodeModulesRoot | (private) |
| 687 | fn | inferBunGlobalRootFromPackageRoot | (private) |
| 697 | fn | inferPnpmGlobalRootFromPackageRoot | (private) |
| 726 | type | PnpmIsolatedGlobalPackage | (private) |
| 733 | fn | resolvePnpmIsolatedLayoutVersion | (private) |
| 739 | fn | inferPnpmIsolatedGlobalRootFromPackageRoot | (private) |
| 748 | fn | hasPnpmIsolatedProjectMetadata | (private) |
| 772 | fn | resolvePnpmIsolatedInstallOwner | pub |
| 782 | fn | listPnpmIsolatedGlobalPackages | (private) |
| 828 | fn | listActivePnpmIsolatedGlobalPackages | pub |
| 838 | fn | resolvePnpmIsolatedGlobalPackage | (private) |
| 873 | fn | isPnpmIsolatedGlobalPackageRoot | (private) |
| 886 | fn | resolvePnpmGlobalDirFromGlobalRoot | pub |
| 902 | fn | isPnpmGlobalPackageRoot | (private) |
| 923 | fn | resolvePreferredGlobalManagerCommand | (private) |
| 937 | fn | resolveGlobalInstallCommand | (private) |
| 947 | fn | normalizeGlobalInstallCommand | (private) |
| 956 | fn | resolveBunGlobalInstallSpec | (private) |
| 969 | fn | resolveInstallCommandForManager | (private) |
| 984 | fn | resolveGlobalRoot | (private) |
| 1007 | fn | resolveGlobalInstallTarget | pub |
| 1124 | fn | detectGlobalInstallManagerForRoot | pub |
| 1190 | fn | detectGlobalInstallManagerByPresence | pub |
| 1219 | fn | globalInstallArgs | pub |
| 1267 | fn | globalInstallFallbackArgs | pub |
| 1294 | fn | cleanupGlobalRenameDirs | pub |

## src/infra/update-managed-service-handoff.test.ts (1058 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | createSpawnMock | (private) |
| 45 | fn | signalHandoffReady | (private) |
| 65 | type | GatewayRestartSentinelDatabase | (private) |
| 87 | fn | pathExists | (private) |
| 96 | fn | writeRestartSentinelRow | (private) |
| 150 | fn | replaceRestartSentinelRow | (private) |
| 160 | fn | readRestartSentinelPayload | (private) |
| 175 | fn | runHelperWithExistingSentinel | (private) |
| 256 | fn | createLegacyRestartSentinelTable | (private) |
| 280 | fn | spawnExitedPid | (private) |
| 290 | fn | runHelperWithCommand | (private) |
| 358 | fn | writeFakeSystemctl | (private) |
| 370 | fn | writeFakeLaunchctl | (private) |

## src/infra/update-managed-service-handoff.ts (987 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | HandoffChild | (private) |
| 45 | fn | appendLog | (private) |
| 58 | fn | isPidAlive | (private) |
| 70 | fn | sleep | (private) |
| 74 | fn | cleanupSensitiveFiles | (private) |
| 84 | fn | resolveExistingDirectory | (private) |
| 101 | fn | readJsonFile | (private) |
| 109 | fn | isPendingUpdatePayload | (private) |
| 119 | fn | openStateDatabase | (private) |
| 159 | fn | tableHasColumn | (private) |
| 167 | fn | ensureColumn | (private) |
| 175 | fn | ensureGatewayRestartSentinelColumns | (private) |
| 185 | fn | hardenStateDatabaseFiles | (private) |
| 204 | fn | parseJsonColumn | (private) |
| 215 | fn | readRestartSentinelRecord | (private) |
| 257 | fn | readRestartSentinelRevisionFloor | (private) |
| 268 | fn | advanceRestartSentinelRevisionFloor | (private) |
| 283 | fn | writeRestartSentinelPayload | (private) |
| 340 | fn | buildFallbackFailurePayload | (private) |
| 370 | fn | markUpdateSentinelFailureIfPending | (private) |
| 444 | fn | runServiceCommand | (private) |
| 453 | fn | startGatewayServiceBestEffort | (private) |
| 576 | type | ManagedServiceUpdateHandoffParams | (private) |
| 591 | type | StartedManagedServiceUpdateHandoff | (private) |
| 599 | type | ManagedServiceUpdateHandoffResult | (private) |
| 608 | fn | isNodeLikeRuntime | (private) |
| 616 | fn | resolveUpdateCliArgv | (private) |
| 641 | fn | formatManagedServiceUpdateCommand | pub |
| 655 | type | GatewayServiceRecovery | (private) |
| 660 | fn | resolveGatewayServiceRecovery | (private) |
| 693 | fn | stripSupervisorHintEnv | (private) |
| 704 | fn | resolveManagedServiceHandoffCwd | (private) |
| 722 | fn | resolveExecutableOnPath | (private) |
| 751 | fn | sanitizeSystemdUnitFragment | (private) |
| 756 | fn | buildSystemdHandoffUnitName | (private) |
| 764 | fn | waitForHandoffReady | (private) |
| 770 | fn | cleanup | (private) |
| 778 | fn | finish | (private) |
| 790 | fn | onError | (private) |
| 791 | fn | onExit | (private) |
| 797 | fn | terminateBeforeFailure | (private) |
| 805 | fn | onOutputError | (private) |
| 809 | fn | onData | (private) |
| 827 | fn | resolveHandoffSpawn | (private) |
| 867 | fn | spawnManagedServiceUpdateHandoff | (private) |
| 957 | fn | startManagedServiceUpdateHandoff | pub |
| 981 | fn | buildManagedServiceHandoffUnavailableMessage | pub |

## src/infra/update-runner-git-preflight.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | StepFactory | (private) |
| 45 | type | GitDevPreflightResult | (private) |
| 54 | fn | normalizeDevTargetRef | (private) |
| 59 | fn | looksLikeFullCommitSha | (private) |
| 63 | fn | resolveTagFetchRef | (private) |
| 68 | fn | buildDevTargetRefResolutionCandidates | (private) |
| 71 | fn | addCandidate | (private) |
| 100 | fn | resolvePreflightWorktreeDir | (private) |
| 104 | fn | createPreflightRoot | (private) |
| 113 | fn | removePathRecursive | (private) |
| 119 | fn | repairPreflightCleanup | (private) |
| 129 | fn | resolveExplicitTarget | (private) |
| 178 | fn | resolveUpstreamCandidates | (private) |
| 300 | fn | testPreflightCandidates | (private) |
| 427 | fn | runGitDevPreflight | pub |

## src/infra/update-runner.test.ts (3306 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | CommandResponse | (private) |
| 31 | type | CommandResult | (private) |
| 35 | fn | toCommandResult | (private) |
| 43 | fn | createRunner | (private) |
| 45 | fn | runner | (private) |
| 53 | fn | isProcessAlive | (private) |
| 62 | fn | waitForProcessExit | (private) |
| 129 | fn | createStableTagRunner | (private) |
| 140 | fn | runCommand | (private) |
| 188 | fn | setupGitCheckout | (private) |
| 273 | fn | runCommand | (private) |
| 303 | fn | setupUiIndex | (private) |
| 310 | fn | setupGitPackageManagerFixture | (private) |
| 315 | fn | writePreflightPackageManagerFixture | (private) |
| 324 | fn | writePreflightPackageManagerFixtureFromWorktreeAdd | (private) |
| 336 | fn | buildStableTagResponses | (private) |
| 351 | fn | buildGitWorktreeProbeResponses | (private) |
| 362 | fn | createGitInstallRunner | (private) |
| 382 | fn | runCommand | (private) |
| 398 | fn | removeControlUiAssets | (private) |
| 402 | fn | runWithCommand | (private) |
| 441 | fn | runWithRunner | (private) |
| 460 | fn | seedGlobalPackageRoot | (private) |
| 471 | fn | writeGlobalPackageVersion | (private) |
| 482 | fn | writeBundledRuntimeSidecars | (private) |
| 490 | fn | writeGatewayEntrypoint | (private) |
| 498 | fn | createGlobalPackageFixture | (private) |
| 505 | type | InstallCommandExpectation | (private) |
| 508 | fn | normalizeNpmFreshnessArgs | (private) |
| 511 | fn | installCommandMatches | (private) |
| 518 | fn | npmGlobalInstallCommand | (private) |
| 534 | fn | createGlobalNpmUpdateRunner | (private) |
| 749 | fn | runCommand | (private) |
| 859 | fn | runCommand | (private) |
| 1191 | fn | runCommand | (private) |
| 1285 | fn | runCommand | (private) |
| 1376 | fn | writeCandidatePackageManager | (private) |
| 1384 | fn | runCommand | (private) |
| 1469 | fn | writeCandidatePackageManager | (private) |
| 1477 | fn | runCommand | (private) |
| 1709 | fn | runCommand | (private) |
| 1825 | fn | runCommand | (private) |
| 1923 | fn | runCommand | (private) |
| 2038 | fn | runCommand | (private) |
| 2137 | fn | runCommand | (private) |
| 2232 | fn | runCommand | (private) |
| 2323 | fn | runCommand | (private) |
| 2404 | fn | runCommand | (private) |
| 2488 | fn | runCommand | (private) |
| 2566 | fn | runCommand | (private) |
| 2673 | fn | runNpmGlobalUpdateCase | (private) |
| 2704 | fn | createGlobalInstallHarness | (private) |
| 2717 | fn | runCommand | (private) |
| 2853 | fn | runCommandWithDoctor | (private) |
| 2896 | fn | runCommandWithDoctor | (private) |

## src/infra/update-startup.test.ts (1251 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | fn | parse | (private) |
| 75 | fn | compareSemverStrings | (private) |
| 109 | type | UpdateCheckStateDatabase | (private) |
| 110 | type | PersistedUpdateCheckState | (private) |
| 126 | fn | presentString | (private) |
| 144 | fn | requireFirstRunCommandCall | (private) |
| 152 | fn | readPersistedUpdateCheckState | (private) |
| 182 | fn | writePersistedUpdateCheckState | (private) |
| 273 | fn | mockPackageUpdateStatus | (private) |
| 278 | fn | mockPackageInstallStatus | (private) |
| 287 | fn | mockNpmChannelTag | (private) |
| 294 | fn | runUpdateCheckAndReadState | (private) |
| 310 | fn | expectPathMissing | (private) |
| 323 | fn | createAutoUpdateSuccessMock | (private) |
| 330 | fn | createBetaAutoUpdateConfig | (private) |
| 342 | fn | createExtendedStableConfig | (private) |
| 352 | fn | runExtendedStableUpdateCheck | (private) |
| 374 | fn | seedExtendedStableAvailability | (private) |
| 386 | fn | seedStableAutoRolloutState | (private) |
| 396 | fn | expectStableAutoRolloutStatePreserved | (private) |
| 405 | fn | runAutoUpdateCheckWithDefaults | (private) |
| 418 | fn | runStableUpdateCheck | (private) |

## src/infra/update-startup.ts (813 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | UpdateCheckState | (private) |
| 62 | type | AutoUpdatePolicy | (private) |
| 69 | type | AutoUpdateRunResult | (private) |
| 79 | type | UpdateAvailable | pub |
| 87 | fn | getUpdateAvailable | pub |
| 91 | fn | resetUpdateAvailableStateForTest | pub |
| 104 | type | UpdateCheckStateDatabase | (private) |
| 106 | fn | shouldSkipCheck | (private) |
| 116 | fn | resolveAutoUpdatePolicy | (private) |
| 126 | fn | resolveCheckIntervalMs | (private) |
| 141 | fn | presentString | (private) |
| 145 | fn | readState | (private) |
| 175 | fn | writeState | (private) |
| 206 | fn | sameUpdateAvailable | (private) |
| 220 | fn | setUpdateAvailableCache | (private) |
| 231 | fn | isPersistedAvailabilityForChannel | (private) |
| 245 | fn | resolvePersistedUpdateAvailable | (private) |
| 265 | fn | clearPersistedAvailabilityForChannel | (private) |
| 276 | fn | resolveStableJitterMs | (private) |
| 292 | fn | resolveUpdateCheckNowMs | (private) |
| 296 | fn | resolveUpdateCheckTimestamp | (private) |
| 304 | fn | resolveStableAutoApplyAtMs | (private) |
| 347 | fn | resolveAutoUpdateHandoffRoot | (private) |
| 358 | fn | resolveManagedAutoUpdateRestartDelayMs | (private) |
| 362 | fn | startManagedServiceAutoUpdateHandoff | (private) |
| 411 | fn | runAutoUpdateCommand | (private) |
| 492 | fn | clearAutoState | (private) |
| 498 | fn | resolveStartupInstallStatus | (private) |
| 513 | fn | runGatewayUpdateCheck | pub |
| 769 | fn | scheduleGatewayUpdateCheck | pub |
| 783 | fn | tick | (private) |

## src/infra/watch-node.test.ts (832 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | WatchRunParams | (private) |
| 25 | fn | runWatch | (private) |
| 26 | fn | resolveTestWatchLockPath | (private) |
| 34 | fn | createFakeProcess | (private) |
| 40 | fn | createKillableChild | (private) |
| 51 | fn | createWatchHarness | (private) |
| 62 | fn | createAutoExitChild | (private) |
| 72 | fn | startWatchRun | (private) |
| 98 | fn | requireRecord | (private) |
| 105 | fn | requireMockCall | (private) |
| 113 | fn | requireSpawnOptions | (private) |
| 117 | fn | requireSpawnEnv | (private) |

## src/infra/windows-gateway-firewall-diagnostics.test.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | InspectOptions | (private) |
| 7 | type | FirewallCommandRunner | (private) |
| 9 | fn | stateJson | (private) |
| 44 | fn | multiProfileStateJson | (private) |
| 91 | fn | ruleJson | (private) |
| 103 | fn | quickPayloadJson | (private) |
| 115 | fn | rulesPayloadJson | (private) |
| 122 | fn | ruleRow | (private) |
| 142 | fn | classify | (private) |

## src/infra/windows-gateway-firewall-diagnostics.ts (1029 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | buildWindowsNetSecurityFirewallRulesCommand | (private) |
| 61 | fn | Test | (private) |
| 102 | fn | buildWindowsPersistentFirewallRulesCommand | (private) |
| 106 | fn | buildWindowsManagedActiveFirewallRulesCommand | (private) |
| 114 | fn | buildWindowsFirewallRulesCommand | (private) |
| 119 | fn | Test | (private) |
| 133 | fn | Resolve | (private) |
| 165 | fn | buildWindowsQuickFirewallCommand | (private) |
| 173 | fn | Test | (private) |
| 189 | fn | Resolve | (private) |
| 200 | fn | Get | (private) |
| 274 | type | WindowsGatewayFirewallDiagnosticCode | (private) |
| 286 | type | WindowsGatewayFirewallDiagnostic | pub |
| 294 | type | WindowsGatewayFirewallCommandResult | (private) |
| 302 | type | WindowsGatewayFirewallCommandRunner | (private) |
| 307 | type | InspectWindowsGatewayFirewallParams | (private) |
| 316 | type | FirewallStatePayload | (private) |
| 322 | type | FirewallProfile | (private) |
| 330 | type | FirewallRule | (private) |
| 340 | type | ClassifiedFirewallState | (private) |
| 349 | type | QuickFirewallPayload | (private) |
| 355 | fn | powershell | (private) |
| 366 | fn | runBestEffortCommand | (private) |
| 385 | fn | parseJsonRows | (private) |
| 392 | fn | parseJsonPayload | (private) |
| 404 | fn | stringField | (private) |
| 415 | fn | normalizeProfileName | (private) |
| 423 | fn | parseFirewallProfiles | (private) |
| 436 | fn | parseConnectionProfileNames | (private) |
| 444 | fn | parseFirewallRules | (private) |
| 470 | fn | isTruthyFirewallValue | (private) |
| 474 | fn | isBlockingInbound | (private) |
| 478 | fn | inboundRulesAreAllowed | (private) |
| 482 | fn | findProfileSettings | (private) |
| 492 | fn | profileMaskMatches | (private) |
| 501 | fn | ruleMatchesActiveProfile | (private) |
| 516 | fn | isLocalRule | (private) |
| 525 | fn | isProgramAgnosticRule | (private) |
| 529 | fn | isAnyAddress | (private) |
| 533 | fn | isAddressAgnosticRule | (private) |
| 537 | fn | localRulesAreAllowed | (private) |
| 567 | fn | formatProfiles | (private) |
| 571 | fn | formatRuleNames | (private) |
| 578 | fn | classifyWindowsGatewayFirewallState | (private) |
| 768 | fn | buildClassifiedState | (private) |
| 784 | fn | shouldProbeManagedActiveRules | (private) |
| 791 | fn | parseWindowsGatewayFirewallState | (private) |
| 815 | fn | inspectWindowsGatewayFirewall | pub |
| 1017 | fn | formatWindowsGatewayFirewallGuidance | pub |

## src/interactive/payload.test.ts (997 lines)

_No symbols extracted._

## src/interactive/payload.ts (1056 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | InteractiveButtonStyle | pub |
| 12 | type | MessagePresentationTone | pub |
| 15 | type | MessagePresentationButtonStyle | pub |
| 18 | type | MessagePresentationAction | pub |
| 65 | type | MessagePresentationButton | pub |
| 99 | type | MessagePresentationOption | pub |
| 108 | fn | resolveMessagePresentationActionValue | pub |
| 120 | fn | resolveMessagePresentationControlValue | pub |
| 132 | fn | resolveMessagePresentationButtonAction | pub |
| 149 | fn | resolveMessagePresentationOptionAction | pub |
| 159 | type | LegacyInteractiveReplyButton | pub |
| 162 | type | InteractiveReplyButton | pub |
| 164 | type | LegacyInteractiveReplyOption | pub |
| 167 | type | InteractiveReplyOption | pub |
| 169 | type | LegacyInteractiveReplyTextBlock | pub |
| 175 | type | InteractiveReplyTextBlock | pub |
| 177 | type | LegacyInteractiveReplySelectBlock | pub |
| 184 | type | InteractiveReplySelectBlock | pub |
| 186 | type | LegacyInteractiveReplyBlock | pub |
| 192 | type | InteractiveReplyBlock | pub |
| 194 | type | LegacyInteractiveReply | pub |
| 198 | fn | reduceLegacyInteractiveReply | pub |
| 211 | type | InteractiveReply | pub |
| 213 | type | MessagePresentationTextBlock | pub |
| 219 | type | MessagePresentationContextBlock | pub |
| 225 | type | MessagePresentationDividerBlock | pub |
| 229 | type | MessagePresentationButtonsBlock | pub |
| 235 | type | MessagePresentationSelectBlock | pub |
| 243 | type | MessagePresentationChartSegment | pub |
| 250 | type | MessagePresentationChartSeries | pub |
| 257 | type | MessagePresentationChartBlock | pub |
| 278 | type | MessagePresentationTableCell | pub |
| 281 | type | MessagePresentationTableBlock | pub |
| 293 | type | MessagePresentationInteractiveBlock | pub |
| 297 | type | MessagePresentationBlock | pub |
| 306 | type | MessagePresentation | pub |
| 315 | type | ReplyPayloadDeliveryPin | pub |
| 321 | type | ReplyPayloadDelivery | pub |
| 325 | fn | normalizeButtonStyle | (private) |
| 332 | fn | normalizePresentationTone | (private) |
| 343 | fn | normalizePresentationAction | (private) |
| 405 | fn | normalizeButton | (private) |
| 444 | fn | normalizeOption | (private) |
| 463 | fn | normalizeList | (private) |
| 469 | fn | normalizeInteractiveBlock | (private) |
| 496 | fn | normalizeChartSegments | (private) |
| 515 | fn | normalizeChartCategories | (private) |
| 527 | fn | normalizeChartSeries | (private) |
| 557 | fn | normalizeChartBlock | (private) |
| 593 | fn | normalizeTableBlock | (private) |
| 645 | fn | normalizeLegacyInteractiveReply | pub |
| 657 | fn | normalizePresentationBlock | (private) |
| 693 | fn | normalizeMessagePresentation | pub |
| 715 | fn | hasLegacyInteractiveReplyBlocks | pub |
| 719 | fn | hasMessagePresentationBlocks | pub |
| 726 | fn | presentationToInteractiveReply | pub |
| 820 | fn | isMessagePresentationInteractiveBlock | pub |
| 829 | fn | presentationToInteractiveControlsReply | pub |
| 837 | fn | legacyInteractiveReplyToPresentation | pub |
| 876 | fn | renderMessagePresentationChartFallbackText | pub |
| 901 | fn | renderTableFallbackValue | (private) |
| 905 | fn | renderMessagePresentationTableFallbackText | pub |
| 921 | fn | renderMessagePresentationFallbackText | pub |
| 984 | fn | hasReplyChannelData | pub |
| 990 | fn | hasReplyContent | pub |
| 1012 | fn | hasReplyPayloadContent | pub |
| 1039 | fn | resolveLegacyInteractiveTextFallback | pub |

## src/media-generation/runtime-shared.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | ParsedProviderModelRef | (private) |
| 32 | fn | recordCapabilityCandidateFailure | pub |
| 51 | fn | resolveMediaProviderDefaultTimeoutMs | (private) |
| 58 | fn | resolveMediaProviderRequestTimeoutMs | pub |
| 68 | type | CapabilityProviderCandidate | (private) |
| 76 | type | ParsedAspectRatio | (private) |
| 82 | type | ParsedSize | (private) |
| 89 | fn | resolveCurrentDefaultProviderId | (private) |
| 103 | fn | isCapabilityProviderConfigured | (private) |
| 127 | fn | resolveAutoCapabilityFallbackRefs | (private) |
| 174 | fn | resolveCapabilityModelCandidates | pub |
| 190 | fn | resolveCandidate | (private) |
| 204 | fn | add | (private) |
| 217 | fn | override | (private) |
| 248 | fn | normalizeSupportedValues | (private) |
| 255 | fn | compareScores | (private) |
| 271 | fn | parsePositiveDimensionPair | (private) |
| 291 | fn | parseAspectRatioValue | (private) |
| 303 | fn | parseSizeValue | (private) |
| 319 | fn | greatestCommonDivisor | (private) |
| 331 | fn | deriveAspectRatioFromSize | (private) |
| 341 | fn | resolveClosestAspectRatio | pub |
| 381 | fn | resolveClosestSize | pub |
| 422 | fn | resolveClosestResolution | pub |
| 485 | fn | parseResolutionRank | (private) |
| 504 | fn | normalizeDurationToClosestMax | pub |
| 523 | fn | buildMediaGenerationNormalizationMetadata | pub |
| 573 | fn | throwCapabilityGenerationFailure | pub |
| 590 | fn | formatCapabilityFailureAttempts | (private) |
| 610 | fn | formatCapabilityFailureAttempt | (private) |
| 614 | fn | formatCapabilityAttemptRef | (private) |
| 618 | fn | isAbortLikeFallbackAttempt | (private) |
| 629 | fn | buildNoCapabilityModelConfiguredMessage | pub |

## src/media/fetch.test.ts (1286 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | FetchModule | (private) |
| 19 | type | ReadRemoteMediaBuffer | (private) |
| 20 | type | SaveRemoteMedia | (private) |
| 21 | type | SaveResponseMedia | (private) |
| 22 | type | LookupFn | (private) |
| 29 | fn | makeStream | (private) |
| 40 | fn | makeCancelableStream | (private) |
| 55 | fn | makeStallingFetch | (private) |
| 68 | fn | makeLookupFn | (private) |
| 72 | fn | abortReasonError | (private) |
| 78 | fn | requireFetchGuardRequest | (private) |
| 86 | fn | expectRemoteMediaMaxBytesError | (private) |
| 100 | fn | expectRedactedBotTokenFetchError | (private) |
| 123 | fn | expectReadRemoteMediaBufferRejected | (private) |
| 154 | fn | expectReadRemoteMediaBufferResolvesToError | (private) |
| 165 | fn | expectReadRemoteMediaBufferIdleTimeoutCase | (private) |
| 188 | fn | expectBoundedErrorBodyCase | (private) |
| 201 | fn | expectPrivateIpFetchBlockedCase | (private) |
| 211 | fn | createReadRemoteMediaBufferParams | (private) |
| 413 | fn | rejectForAbort | (private) |
| 450 | fn | failForAbort | (private) |
| 491 | fn | rejectForAbort | (private) |
| 525 | fn | failForAbort | (private) |
| 830 | fn | failForAbort | (private) |
| 877 | fn | failForAbort | (private) |

## src/media/fetch.ts (685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | FetchMediaResult | (private) |
| 37 | type | SavedRemoteMedia | pub |
| 42 | type | MediaFetchErrorCode | (private) |
| 45 | type | MediaFetchRetryOptions | pub |
| 48 | class | MediaFetchError | pub |
| 65 | type | FetchLike | pub |
| 68 | type | FetchDispatcherAttempt | (private) |
| 73 | type | FetchMediaOptions | (private) |
| 104 | type | SaveResponseMediaOptions | (private) |
| 115 | type | SaveRemoteMediaOptions | (private) |
| 121 | type | GuardedMediaResponse | (private) |
| 128 | fn | stripQuotes | (private) |
| 132 | fn | parseContentDispositionFileName | (private) |
| 153 | fn | basenameFromUrlPathname | (private) |
| 165 | fn | readErrorBodySnippet | (private) |
| 183 | fn | redactMediaUrl | (private) |
| 187 | fn | fetchGuardedMediaResponse | (private) |
| 218 | fn | runGuardedFetch | (private) |
| 292 | fn | assertMediaResponseOk | (private) |
| 321 | fn | assertMediaContentLength | (private) |
| 349 | fn | discardIgnoredResponseBody | (private) |
| 361 | fn | resolveRemoteFileName | (private) |
| 384 | fn | isGenericResponseContentType | (private) |
| 394 | fn | resolveResponseContentType | (private) |
| 447 | fn | isMediaLimitError | (private) |
| 451 | fn | saveOkMediaResponse | (private) |
| 517 | fn | shouldRetryMediaFetch | (private) |
| 536 | fn | withMediaFetchRetry | (private) |
| 554 | fn | saveResponseMedia | pub |
| 581 | fn | saveRemoteMedia | pub |
| 585 | fn | saveRemoteMediaOnce | (private) |
| 614 | fn | readRemoteMediaBuffer | pub |
| 621 | fn | readRemoteMediaBufferOnce | (private) |

## src/media/input-files.fetch-guard.test.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | waitForMicrotaskTurn | (private) |
| 44 | fn | createImageSourceLimits | (private) |
| 54 | fn | createFileSourceLimits | (private) |
| 66 | fn | mockUrlFetchResponse | (private) |
| 96 | fn | expectRejectedImageMimeCase | (private) |
| 113 | type | ImageSourceLimits | (private) |
| 115 | fn | expectResolvedImageContentCase | (private) |
| 141 | fn | expectBase64ImageValidationCase | (private) |

## src/media/parse.ts (722 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ParsedMediaOutputSegment | (private) |
| 32 | type | SplitMediaFromOutputOptions | (private) |
| 40 | fn | normalizeMediaSource | (private) |
| 46 | fn | cleanCandidate | (private) |
| 59 | fn | isSupportedHomeRelativePath | (private) |
| 63 | fn | hasTraversalOrUnsupportedHomeDirPrefix | (private) |
| 74 | fn | looksLikeLocalFilePath | (private) |
| 88 | fn | isLikelyLocalPath | (private) |
| 102 | fn | normalizeRemoteMediaHostname | (private) |
| 114 | fn | isBlockedRemoteMediaHostname | (private) |
| 151 | fn | isAllowedRemoteMediaUrl | (private) |
| 165 | fn | isValidMedia | (private) |
| 201 | fn | unwrapQuoted | (private) |
| 217 | fn | mayContainFenceMarkers | (private) |
| 221 | fn | cleanLineText | (private) |
| 225 | type | MarkdownImageMatch | (private) |
| 235 | fn | findMatchingBracket | (private) |
| 263 | fn | isRemoteMarkdownImageMedia | (private) |
| 267 | fn | parseMarkdownTitle | (private) |
| 306 | fn | parseMarkdownImageDestination | (private) |
| 386 | fn | findMarkdownImageMatches | (private) |
| 422 | fn | collectMarkdownImageSegments | (private) |
| 481 | fn | isInsideFence | (private) |
| 486 | fn | splitMediaFromOutput | pub |
| 514 | fn | pushTextSegment | (private) |

## src/media/store.test.ts (1047 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | withTempStore | (private) |
| 42 | fn | expectPathMissing | (private) |
| 53 | fn | expectOriginalFilenameCase | (private) |
| 65 | fn | expectRetryAfterPrunedWriteCase | (private) |
| 114 | fn | expectFailedBufferWriteCase | (private) |
| 167 | fn | expectSavedOriginalFilenameCase | (private) |
| 202 | fn | expectSavedSourceCase | (private) |
| 226 | fn | expectCleanedSavedSourceCase | (private) |
| 248 | fn | expectSavedBufferCase | (private) |
| 273 | fn | expectRejectedSourceCase | (private) |
| 301 | fn | createSymlinkSource | (private) |
| 313 | fn | expectCleanupBehaviorCase | (private) |
| 342 | fn | expectTempStoreCase | (private) |

## src/media/store.ts (651 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | resolveMediaDir | (private) |
| 32 | type | RequestImpl | (private) |
| 33 | type | ResolvePinnedHostnameImpl | (private) |
| 34 | type | CleanOldMediaOptions | (private) |
| 40 | fn | setMediaStoreNetworkDepsForTest | (private) |
| 54 | fn | resolveMediaSubdir | (private) |
| 76 | fn | resolveMediaScopedDir | (private) |
| 86 | fn | resolveMediaRelativePath | (private) |
| 94 | fn | openMediaStore | (private) |
| 108 | fn | sanitizeFilename | (private) |
| 119 | fn | extractOriginalFilename | pub |
| 139 | fn | getMediaDir | pub |
| 144 | fn | ensureMediaDir | pub |
| 150 | fn | findErrorWithCode | (private) |
| 160 | fn | isMissingPathError | (private) |
| 164 | fn | retryAfterRecreatingDir | (private) |
| 192 | fn | resolveCleanupMaxDepth | (private) |
| 203 | fn | cleanOldMedia | pub |
| 212 | fn | looksLikeUrl | (private) |
| 217 | type | SavedMedia | pub |
| 224 | fn | buildSavedMediaId | (private) |
| 240 | fn | safeOriginalFilenameExtension | (private) |
| 248 | fn | extensionForAuthoritativeHeaderMime | (private) |
| 259 | fn | isGenericContainerMime | (private) |
| 263 | fn | isImageHeaderMime | (private) |
| 267 | fn | resolveSavedMediaExtension | (private) |
| 287 | fn | buildSavedMediaResult | (private) |
| 301 | type | SavedMediaTempWriteResult | (private) |
| 303 | fn | saveMediaSiblingTempFile | (private) |
| 320 | fn | writeSavedMediaBuffer | (private) |
| 336 | fn | writeMediaStreamToFile | (private) |
| 383 | type | SaveMediaSourceErrorCode | (private) |
| 391 | class | SaveMediaSourceError | (private) |
| 401 | fn | toSaveMediaSourceError | (private) |
| 433 | fn | saveMediaSource | pub |
| 480 | fn | saveMediaBuffer | pub |
| 512 | fn | saveMediaStream | pub |
| 574 | fn | resolveMediaBufferPath | pub |
| 592 | type | ReadMediaBufferResult | (private) |
| 600 | fn | readMediaBuffer | pub |
| 648 | fn | deleteMediaBuffer | pub |

## src/media/web-media.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | fn | createLargeColorBlockPng | (private) |
| 92 | fn | createLargeTransparentColorBlockPng | (private) |
| 114 | fn | readPngDimensions | (private) |
| 124 | fn | createGifHeader | (private) |
| 132 | fn | readJpegDimensions | (private) |
| 156 | fn | makeStallingFetch | (private) |
| 173 | fn | expectWebMediaIdleTimeout | (private) |
| 197 | fn | createLocalWebMediaOptions | (private) |
| 204 | fn | expectRejectedWebMedia | (private) |
| 227 | fn | expectLoadWebMediaErrorFields | (private) |
| 246 | fn | expectLoadWebMediaErrorCode | (private) |
| 250 | fn | expectRejectedWebMediaWithoutFilesystemAccess | (private) |
| 264 | fn | expectLoadedWebMediaCase | (private) |
| 270 | fn | loadDocumentWithHostRead | (private) |

## src/media/web-media.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | WebMediaResult | pub |
| 51 | type | WebMediaOptions | (private) |
| 74 | type | ImageQualityPreference | pub |
| 77 | type | ImageCompressionModelPolicy | pub |
| 85 | type | ImageCompressionPolicy | pub |
| 91 | fn | resolveMediaStoreUriToPath | (private) |
| 105 | fn | resolveHostedPluginMediaUrl | (private) |
| 124 | fn | resolveWebMediaOptions | (private) |
| 188 | fn | stripLegacyMediaDirectivePrefix | (private) |
| 195 | fn | getTextStats | (private) |
| 220 | fn | hasSingleByteTextShape | (private) |
| 240 | fn | decodeHostReadText | (private) |
| 261 | fn | isValidatedHostReadText | (private) |
| 265 | fn | getValidatedHostReadText | (private) |
| 280 | fn | isPathInsideRoot | (private) |
| 290 | fn | resolveLocalMediaFileName | (private) |
| 297 | fn | hasHtmlDocumentShape | (private) |
| 302 | fn | isTrustedGeneratedHostReadHtmlPath | (private) |
| 319 | fn | isTrustedGeneratedHostReadHtml | (private) |
| 336 | fn | isAllowedHostReadTextAlias | (private) |
| 348 | fn | formatMb | (private) |
| 352 | fn | formatCapLimit | (private) |
| 356 | fn | formatCapReduce | (private) |
| 360 | fn | isHeicSource | (private) |
| 370 | fn | assertHostReadMediaAllowed | (private) |
| 454 | fn | toJpegFileName | (private) |
| 469 | type | OptimizedImage | (private) |
| 484 | fn | normalizeImageQualityPreference | (private) |
| 495 | fn | squareLongSideForPixelBudget | (private) |
| 499 | fn | positiveInteger | (private) |
| 505 | fn | effectiveImageQualityPreference | (private) |
| 519 | fn | maxSideForModel | (private) |
| 532 | fn | preferredSideForModel | (private) |
| 539 | fn | policyModelSides | (private) |
| 552 | fn | sideForPreference | (private) |
| 568 | fn | imageMaxBytesForPolicy | (private) |
| 575 | fn | imageSatisfiesHardDimensionPolicy | (private) |
| 602 | fn | assertImageSatisfiesHardDimensionPolicy | (private) |
| 614 | fn | resolvePreservableOriginalImageContentType | (private) |
| 657 | fn | detectPreservableImageMime | (private) |
| 670 | fn | isPreservableImageMime | (private) |
| 679 | fn | effectiveImageBytesCap | pub |
| 690 | fn | buildDescendingLadder | (private) |
| 710 | fn | resolveImageCompressionGrid | pub |
| 739 | fn | logOptimizedImage | (private) |
| 757 | fn | optimizeImageWithFallback | (private) |
| 793 | fn | optimizeImageBufferForWebMedia | pub |
| 851 | fn | loadWebMediaInternal | (private) |
| 889 | fn | optimizeAndClampImage | (private) |
| 1106 | fn | loadWebMedia | pub |
| 1118 | fn | loadWebMediaRaw | pub |
| 1130 | fn | optimizeImageToJpeg | pub |

## src/plugins/bundle-manifest.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | BundlePluginManifest | (private) |
| 23 | type | ReadonlyBundleManifestExpectation | (private) |
| 35 | fn | makeTempDir | (private) |
| 41 | fn | expectLoadedManifest | (private) |
| 50 | fn | writeBundleManifest | (private) |
| 58 | fn | writeBundleFixtureFile | (private) |
| 67 | fn | writeBundleFixtureFiles | (private) |
| 73 | fn | setupBundleFixture | (private) |
| 91 | fn | setupClaudeHookFixture | (private) |
| 128 | fn | expectBundleManifest | (private) |
| 137 | fn | expectClaudeHookResolution | (private) |

## src/plugins/bundled-capability-runtime.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | buildVitestCapabilityShimAliasMap | (private) |
| 68 | fn | applyVitestCapabilityAliasOverrides | (private) |
| 86 | fn | shouldApplyVitestCapabilityAliasOverrides | (private) |
| 93 | fn | buildBundledCapabilityRuntimeConfig | (private) |
| 108 | fn | resolvePluginModuleExport | (private) |
| 128 | fn | createCapabilityPluginRecord | (private) |
| 177 | fn | recordCapabilityLoadError | (private) |
| 194 | fn | loadBundledCapabilityRuntimeRegistry | pub |
| 206 | fn | getModuleLoader | (private) |

## src/plugins/bundled-dir.test.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | makeRepoRoot | (private) |
| 22 | fn | createOpenClawRoot | (private) |
| 62 | fn | seedBundledPluginTree | (private) |
| 77 | fn | expectResolvedBundledDir | (private) |
| 111 | fn | expectResolvedBundledDirFromRoot | (private) |
| 130 | fn | expectInstalledBundledDirScenario | (private) |
| 145 | fn | expectInstalledBundledDirScenarioCase | (private) |
| 156 | fn | requireBundledDir | (private) |

## src/plugins/bundled-plugin-metadata.test.ts (1244 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | BundledPluginMetadata | (private) |
| 88 | fn | expectTestOnlyArtifactsExcluded | (private) |
| 96 | fn | expectGeneratedPathResolution | (private) |
| 109 | fn | expectPluginScopedGeneratedPathResolution | (private) |
| 126 | fn | expectArtifactPresence | (private) |
| 151 | fn | listRepoBundledPluginMetadata | (private) |
| 159 | fn | listRepoBundledPluginManifestsUncached | (private) |
| 167 | fn | listRepoBundledPluginManifestDirs | (private) |
| 180 | fn | listExternalRepoBundledPluginManifestDirs | (private) |
| 194 | fn | listGitRepoBundledPluginManifestFiles | (private) |
| 198 | fn | listFindRepoBundledPluginManifestFiles | (private) |
| 228 | fn | listRepoBundledPluginManifests | (private) |
| 233 | fn | createRepoBundledManifestRegistry | (private) |
| 262 | fn | readPackageManifest | (private) |
| 269 | fn | collectRootPackageExcludedExtensionDirsForTest | (private) |
| 287 | fn | collectRepoBundledChannelConfigsForTest | (private) |
| 306 | fn | hasPluginKind | (private) |
| 310 | fn | createInstalledPluginRecordForManifest | (private) |
| 338 | fn | createInstalledPluginIndexForManifests | (private) |
| 1231 | fn | toLintErrorObject | (private) |

## src/plugins/capability-provider-runtime.test.ts (1953 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | MockManifestRegistry | (private) |
| 12 | fn | createEmptyMockManifestRegistry | (private) |
| 132 | fn | expectResolvedCapabilityProviderIds | (private) |
| 136 | fn | expectNoResolvedCapabilityProviders | (private) |
| 140 | fn | expectActiveRegistryLookup | (private) |
| 144 | fn | expectInitialRuntimeRegistryLookup | (private) |
| 148 | fn | requireManifestRegistryLoadParams | (private) |
| 158 | fn | expectManifestRegistryLoad | (private) |
| 164 | fn | requireRuntimeRegistryLookup | (private) |
| 186 | fn | collectActiveRegistryLookups | (private) |
| 199 | fn | expectBundledCompatLoadPath | (private) |
| 221 | fn | createCompatChainConfig | (private) |
| 232 | fn | setBundledCapabilityFixture | (private) |
| 254 | fn | expectCompatChainApplied | (private) |

## src/plugins/capability-provider-runtime.ts (674 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CapabilityProviderRegistryKey | (private) |
| 41 | type | CapabilityContractKey | (private) |
| 55 | type | CapabilityProviderEntries | (private) |
| 56 | type | CapabilityPluginResolution | (private) |
| 77 | fn | shouldResolveWhenPluginsAreGloballyDisabled | (private) |
| 81 | fn | shouldMergeManifestProvidersWhenActive | (private) |
| 89 | fn | shouldSkipCapabilityResolution | (private) |
| 100 | fn | loadCapabilityManifestSnapshot | pub |
| 110 | fn | resolveCapabilityPluginIds | (private) |
| 143 | fn | resolveBundledCapabilityCompatPluginIds | (private) |
| 152 | fn | resolveCapabilityProviderConfig | (private) |
| 170 | fn | createCapabilityProviderFallbackLoadOptions | (private) |
| 181 | fn | resolveCapabilityProviderSnapshotCacheKey | (private) |
| 191 | fn | findProviderById | (private) |
| 225 | fn | mergeCapabilityProviders | (private) |
| 231 | fn | addEntries | (private) |
| 249 | fn | mergeCapabilityProviderEntries | (private) |
| 255 | fn | addEntries | (private) |
| 273 | fn | addObjectKeys | (private) |
| 285 | fn | addStringValue | (private) |
| 295 | fn | addModelConfigProviderIds | (private) |
| 301 | fn | collectRequestedSpeechProviderIds | (private) |
| 319 | fn | collectRequestedVoiceModelProviderIds | (private) |
| 325 | fn | addMediaModelProviders | (private) |
| 336 | fn | collectRequestedMediaUnderstandingProviderIds | (private) |
| 348 | fn | collectRequestedCapabilityProviderIds | (private) |
| 370 | fn | nonEmptyRequestedProviders | (private) |
| 374 | fn | shouldScopeCapabilityLoadToRequestedProviders | (private) |
| 384 | fn | removeActiveProviderIds | (private) |
| 400 | fn | filterLoadedProvidersForRequestedConfig | (private) |
| 430 | fn | resolveRequestedCapabilityPluginIds | (private) |
| 461 | fn | loadCapabilityProviderEntries | (private) |
| 503 | fn | resolvePluginCapabilityProvider | pub |
| 557 | fn | resolveCachedCapabilityProviderEntries | (private) |
| 581 | fn | resolvePluginCapabilityProviders | pub |

## src/plugins/channel-plugin-ids.test.ts (3952 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 84 | fn | withManifestLoadPaths | (private) |
| 97 | fn | createManifestRegistryFixture | (private) |
| 471 | fn | createManifestRegistryFixtureWithWorkspaceDemoChannel | (private) |
| 490 | fn | normalizeStartupAgentHarnesses | (private) |
| 496 | fn | hasPluginKind | (private) |
| 500 | fn | createInstalledPluginRecordFixture | (private) |
| 540 | fn | createInstalledPluginIndexFixture | (private) |
| 556 | fn | filterManifestRegistryForInstalledIndex | (private) |
| 570 | fn | createPluginPlanningTestEnv | (private) |
| 576 | fn | useManifestRegistryFixture | (private) |
| 588 | fn | expectStartupPluginIds | (private) |
| 612 | fn | expectStartupPluginIdsCase | (private) |
| 622 | fn | resolveConfiguredDeferredChannelPluginIdsForFixture | (private) |
| 635 | fn | createStartupConfig | (private) |

## src/plugins/channel-presence-policy.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | ConfiguredChannelPresenceSource | pub |
| 39 | type | ConfiguredChannelBlockedReason | pub |
| 51 | type | ConfiguredChannelPresencePolicyEntry | pub |
| 65 | fn | normalizeChannelIds | (private) |
| 74 | fn | hasNonEmptyEnvValue | (private) |
| 84 | fn | hasExplicitChannelConfig | pub |
| 104 | fn | listExplicitConfiguredChannelIdsForConfig | pub |
| 118 | fn | recordDeclaresChannel | (private) |
| 129 | fn | listManifestEnvConfiguredChannelSignals | (private) |
| 176 | fn | normalizeActivationBlockedReason | (private) |
| 195 | fn | resolveBasePolicyBlockedReason | (private) |
| 203 | fn | isChannelPluginEligibleForScopedOwnership | (private) |
| 242 | fn | evaluateEffectiveChannelPlugin | (private) |
| 318 | fn | addPolicySignal | (private) |
| 335 | fn | loadInstalledChannelManifestRecords | (private) |
| 349 | fn | resolveConfiguredChannelPresencePolicy | pub |
| 437 | fn | listConfiguredChannelIdsForReadOnlyScope | pub |
| 446 | fn | hasConfiguredChannelsForReadOnlyScope | pub |
| 453 | fn | listConfiguredAnnounceChannelIdsForConfig | pub |
| 495 | fn | resolveScopedChannelOwnerPluginIds | (private) |
| 555 | fn | resolveDiscoverableScopedChannelPluginIds | pub |
| 567 | fn | resolveConfiguredChannelPluginIds | pub |

## src/plugins/clawhub.test.ts (3260 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | ClawHubResolvedArtifact | (private) |
| 62 | type | ClawHubRiskAcknowledgementRequest | (private) |
| 73 | fn | sha256Hex | (private) |
| 77 | fn | createClawHubArchive | (private) |
| 93 | fn | expectClawHubInstallError | (private) |
| 109 | fn | createLoggerSpies | (private) |
| 116 | fn | mockCommunityClawHubPackageDetail | (private) |
| 134 | fn | mockOfficialClawHubPackageDetail | (private) |
| 153 | fn | expectClawHubInstallFlow | (private) |
| 174 | fn | expectSuccessfulClawHubInstall | (private) |
| 188 | type | MockWithCalls | (private) |
| 194 | type | PackageLookupCall | (private) |
| 201 | type | ArchiveInstallCall | (private) |
| 213 | type | InstallSuccess | (private) |
| 222 | type | InstallFailure | (private) |
| 230 | fn | mockCallArg | (private) |
| 241 | fn | packageDetailCall | (private) |
| 245 | fn | packageVersionCall | (private) |
| 249 | fn | packageArtifactCall | (private) |
| 253 | fn | packageSecurityCall | (private) |
| 257 | fn | archiveDownloadCall | (private) |
| 261 | fn | archiveInstallCall | (private) |
| 265 | fn | expectInstallSuccess | (private) |
| 270 | fn | expectInstallFailure | (private) |
| 275 | fn | expectInstallFailureFields | (private) |

## src/plugins/clawhub.ts (1512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | PluginInstallLogger | (private) |
| 68 | type | ClawHubInstallFailure | (private) |
| 76 | type | ClawHubRuntimeIdResolution | (private) |
| 80 | type | ClawHubFileEntryLike | (private) |
| 85 | type | ClawHubFileVerificationEntry | (private) |
| 90 | type | ClawHubArchiveVerification | (private) |
| 100 | type | ClawHubArchiveVerificationResolution | (private) |
| 107 | type | ClawHubArtifactResolverVersion | (private) |
| 111 | type | ClawHubInstallArtifactDecision | (private) |
| 118 | type | ClawHubArchiveFileVerificationResult | (private) |
| 125 | type | JSZipObjectWithSize | (private) |
| 135 | type | ClawHubArchiveEntryLimits | (private) |
| 140 | fn | normalizeClawHubClawPackInstallFields | (private) |
| 194 | fn | isTrustedSourceLinkedOfficialPackage | (private) |
| 206 | fn | isDefaultOfficialClawHubPackage | (private) |
| 216 | fn | resolveClawHubClawPackArtifactSha256 | (private) |
| 228 | fn | resolveClawHubNpmIntegrity | (private) |
| 234 | fn | resolveClawHubNpmShasum | (private) |
| 240 | fn | resolveClawHubNpmTarballName | (private) |
| 246 | fn | resolveClawHubNpmPackArtifact | (private) |
| 258 | fn | readArtifactResolverVersion | (private) |
| 275 | fn | isClawHubPackageFamily | (private) |
| 281 | fn | normalizeArtifactResolverFiles | (private) |
| 290 | type | ClawHubResolvedArtifactWire | (private) |
| 300 | fn | resolveTopLevelNpmPackArtifact | (private) |
| 321 | fn | resolveTopLevelLegacyArchiveVerification | (private) |
| 334 | fn | formatClawHubSpecifier | (private) |
| 338 | fn | buildClawHubInstallFailure | (private) |
| 353 | fn | isClawHubInstallFailure | (private) |
| 363 | fn | mapClawHubRequestError | (private) |
| 382 | fn | encodeClawHubPackagePath | (private) |
| 389 | fn | resolveClawHubPluginUrl | (private) |
| 393 | fn | padRight | (private) |
| 397 | fn | formatClawHubReleaseLabel | (private) |
| 401 | fn | resolveClawHubExpectedRuntimeId | (private) |
| 433 | fn | isMissingArtifactResolverRoute | (private) |
| 441 | fn | buildArtifactResolverResponseFromVersion | (private) |
| 465 | fn | formatClawHubClawPackDownloadError | (private) |
| 477 | fn | isClawHubArtifactDownloadPolicyBlock | (private) |
| 495 | fn | formatClawHubArtifactDownloadPolicyBlock | (private) |
| 503 | fn | formatClawHubMissingArtifactMetadataError | (private) |
| 510 | fn | resolveRequestedVersion | (private) |
| 520 | fn | readTrimmedString | (private) |
| 524 | fn | normalizeClawHubRelativePath | (private) |
| 541 | fn | describeInvalidClawHubRelativePath | (private) |
| 567 | fn | describeInvalidClawHubSha256 | (private) |
| 580 | fn | resolveClawHubArchiveVerification | (private) |
| 665 | fn | readLimitedClawHubArchiveEntry | (private) |
| 743 | fn | readClawHubArchiveEntryBuffer | (private) |
| 758 | fn | hashClawHubArchiveEntry | (private) |
| 773 | fn | validateClawHubArchiveMetaJson | (private) |
| 809 | fn | mapClawHubArchiveReadFailure | (private) |
| 830 | fn | verifyClawHubArchiveFiles | (private) |
| 942 | fn | resolveCompatiblePackageVersion | (private) |
| 1102 | fn | validateClawHubPluginPackage | (private) |
| 1158 | fn | logClawHubPackageSummary | (private) |
| 1200 | fn | installPluginFromClawHub | pub |

## src/plugins/cli.test.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | createProgram | (private) |
| 58 | fn | createCliRegistry | (private) |
| 95 | fn | createAutoEnabledCliFixture | (private) |
| 111 | fn | getMockCallObject | (private) |
| 119 | fn | expectAutoEnabledCliLoad | (private) |

## src/plugins/commands.test.ts (1422 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | CommandsModule | (private) |
| 37 | fn | importCommandsModule | (private) |
| 41 | fn | createVoiceCommand | (private) |
| 50 | fn | registerHostTrustedReservedCommandForTest | (private) |
| 66 | fn | registerVoiceCommandForTest | (private) |
| 72 | fn | expectCommandMatch | (private) |
| 82 | fn | requirePluginCommandMatch | (private) |
| 90 | fn | expectProviderCommandSpecs | (private) |
| 103 | fn | expectProviderCommandSpecCases | (private) |
| 114 | fn | expectUnsupportedBindingApiResult | (private) |
| 929 | fn | handler | (private) |
| 1119 | fn | handler | (private) |
| 1177 | fn | handler | (private) |
| 1214 | fn | handler | (private) |
| 1241 | fn | handler | (private) |
| 1290 | fn | handler | (private) |
| 1332 | fn | handler | (private) |
| 1397 | fn | handler | (private) |

## src/plugins/compat/registry.ts (1816 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | DeprecatedPluginSdkSubpathSeed | (private) |
| 1798 | type | PluginCompatCode | pub |
| 1799 | type | KnownPluginCompatRecord | (private) |
| 1805 | fn | listPluginCompatRecords | pub |
| 1809 | fn | getPluginCompatRecord | pub |

## src/plugins/config-state.test.ts (747 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | normalizeVoiceCallEntry | (private) |
| 22 | fn | expectResolvedEnableState | (private) |
| 29 | fn | expectNormalizedEnableState | (private) |
| 272 | fn | resolveBundledTelegramState | (private) |
| 288 | fn | resolveConfigOriginTelegramState | (private) |

## src/plugins/conversation-binding.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | PluginBindingApprovalsDatabase | (private) |
| 30 | fn | normalizeRef | (private) |
| 39 | fn | toKey | (private) |
| 127 | type | PluginBindingRequest | (private) |
| 128 | type | PluginBindingRequestInput | (private) |
| 129 | type | PluginBindingDecision | (private) |
| 132 | type | ConversationBindingModule | (private) |
| 136 | fn | importConversationBindingModule | (private) |
| 144 | fn | createAdapter | (private) |
| 186 | fn | createDiscordCodexBindRequest | (private) |
| 205 | fn | createTelegramCodexBindRequest | (private) |
| 227 | fn | createCodexBindRequest | (private) |
| 259 | fn | requestPendingBinding | (private) |
| 271 | fn | approveBindingRequest | (private) |
| 283 | fn | importDuplicateConversationBindingModules | (private) |
| 290 | fn | resolveRequestedBinding | (private) |
| 306 | fn | requestResolvedBinding | (private) |
| 310 | fn | flushMicrotasks | (private) |
| 316 | fn | createDeferredVoid | (private) |
| 317 | fn | resolve | (private) |
| 324 | fn | requireMockCallArg | (private) |
| 332 | fn | createResolvedHandlerRegistry | (private) |
| 348 | fn | expectResolutionCallback | (private) |
| 379 | fn | expectResolutionDoesNotWait | (private) |
| 418 | fn | clearPluginBindingApprovalRows | (private) |
| 425 | fn | readPluginBindingApprovalRows | (private) |
| 443 | fn | insertPluginBindingApprovalRow | (private) |
| 524 | fn | rejectFirst | (private) |

## src/plugins/conversation-binding.ts (1005 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | PluginBindingApprovalDecision | (private) |
| 48 | type | PluginBindingApprovalEntry | (private) |
| 57 | type | PluginBindingApprovalsState | (private) |
| 58 | type | PluginBindingApprovalsDatabase | (private) |
| 60 | type | PluginBindingConversation | (private) |
| 68 | type | PendingPluginBindingRequest | (private) |
| 81 | type | PluginBindingApprovalAction | (private) |
| 86 | type | PluginBindingIdentity | (private) |
| 92 | type | PluginBindingMetadata | (private) |
| 103 | type | PluginBindingResolveResult | (private) |
| 124 | type | PluginBindingGlobalState | (private) |
| 131 | type | PluginConversationBindingState | (private) |
| 158 | fn | getPluginBindingGlobalState | (private) |
| 162 | fn | normalizeConversation | (private) |
| 175 | fn | normalizeBindingData | (private) |
| 182 | fn | toConversationRef | (private) |
| 213 | fn | buildApprovalScopeKey | (private) |
| 225 | fn | buildPluginBindingIdentity | pub |
| 233 | fn | logPluginBindingLifecycleEvent | (private) |
| 261 | fn | isLegacyPluginBindingRecord | (private) |
| 280 | fn | buildApprovalInteractiveReply | (private) |
| 309 | fn | createApprovalRequestId | (private) |
| 314 | fn | openApprovalsDatabase | (private) |
| 318 | fn | loadApprovalsFromDatabase | (private) |
| 347 | fn | persistApprovalEntry | (private) |
| 381 | fn | getApprovals | (private) |
| 390 | fn | hasPersistentApproval | (private) |
| 406 | fn | addPersistentApproval | (private) |
| 424 | fn | buildBindingMetadata | (private) |
| 445 | fn | isPluginOwnedBindingMetadata | (private) |
| 457 | fn | isPluginOwnedSessionBindingRecord | pub |
| 468 | fn | toPluginConversationBinding | pub |
| 499 | fn | withConversationBindingContext | (private) |
| 510 | fn | resolvePluginConversationBindingState | (private) |
| 524 | fn | resolveOwnedPluginConversationBinding | (private) |
| 537 | fn | bindConversationFromIdentity | (private) |
| 553 | fn | bindConversationFromRequest | (private) |
| 568 | fn | buildApprovalEntryFromRequest | (private) |
| 585 | fn | bindConversationNow | pub |
| 625 | fn | buildApprovalMessage | (private) |
| 641 | fn | resolvePluginBindingDisplayName | (private) |
| 648 | fn | buildDetachHintSuffix | (private) |
| 653 | fn | buildPluginBindingUnavailableText | pub |
| 657 | fn | buildPluginBindingDeclinedText | pub |
| 661 | fn | buildPluginBindingErrorText | pub |
| 665 | fn | hasShownPluginBindingFallbackNotice | pub |
| 673 | fn | markPluginBindingFallbackNoticeShown | pub |
| 681 | fn | buildPendingReply | (private) |
| 688 | fn | encodeCustomIdValue | (private) |
| 692 | fn | decodeCustomIdValue | (private) |
| 700 | fn | buildPluginBindingApprovalCustomId | pub |
| 708 | fn | parsePluginBindingApprovalCustomId | pub |
| 742 | fn | requestPluginConversationBinding | pub |
| 851 | fn | getCurrentPluginConversationBinding | pub |
| 858 | fn | detachPluginConversationBinding | pub |
| 881 | fn | resolvePluginConversationBindingApproval | pub |
| 941 | fn | dispatchPluginConversationBindingResolved | (private) |
| 955 | fn | notifyPluginConversationBindingResolved | (private) |
| 992 | fn | buildPluginBindingResolvedText | pub |

## src/plugins/discovery.test.ts (2522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makeTempDir | (private) |
| 33 | fn | countMatching | (private) |
| 43 | fn | withOpenClawPackageArgv | (private) |
| 55 | fn | symlinkDirectory | (private) |
| 59 | fn | canCreateDirectorySymlinks | (private) |
| 74 | fn | normalizePathForAssertion | (private) |
| 81 | fn | hasDiagnosticSourceSuffix | (private) |
| 91 | fn | buildDiscoveryEnv | (private) |
| 102 | fn | buildDiscoveryEnvWithOverrides | (private) |
| 116 | fn | buildBundledDiscoveryEnv | (private) |
| 124 | fn | discoverWithStateDir | (private) |
| 131 | fn | discoverWithEnv | (private) |
| 135 | fn | writePluginPackageManifest | (private) |
| 160 | fn | writePluginManifest | (private) |
| 176 | fn | writePluginEntry | (private) |
| 180 | fn | writeStandalonePlugin | (private) |
| 185 | fn | mockLinuxMountInfo | (private) |
| 199 | fn | createPackagePlugin | (private) |
| 218 | fn | createPackagePluginWithEntry | (private) |
| 246 | fn | createBundleRoot | (private) |
| 255 | fn | expectCandidateIds | (private) |
| 268 | fn | findCandidateById | (private) |
| 272 | fn | requireCandidateById | (private) |
| 280 | fn | expectCandidateSource | (private) |
| 286 | fn | normalizeSource | (private) |
| 291 | fn | expectEscapesPackageDiagnostic | (private) |
| 297 | fn | expectEscapesPackageDiagnosticForPlugin | (private) |
| 308 | fn | expectDiagnostic | (private) |
| 330 | fn | expectNoDiagnostic | (private) |
| 349 | fn | expectCandidateFields | (private) |
| 370 | fn | expectCandidatePresence | (private) |
| 383 | fn | expectCandidateOrder | (private) |
| 390 | fn | expectBundleCandidateMatch | (private) |
| 417 | fn | expectRejectedPackageExtensionEntry | (private) |
| 2275 | fn | actualUid | (private) |

## src/plugins/discovery.ts (1717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | PluginCandidate | pub |
| 91 | type | PluginDiscoveryResult | pub |
| 96 | type | PluginDiscoveryRootScope | (private) |
| 98 | fn | currentUid | (private) |
| 111 | type | CandidateBlockReason | (private) |
| 117 | type | CandidateBlockIssue | (private) |
| 129 | fn | checkSourceEscapesRoot | (private) |
| 152 | fn | checkPathStatAndPermissions | (private) |
| 229 | fn | findCandidateBlockIssue | (private) |
| 252 | fn | formatCandidateBlockMessage | (private) |
| 265 | fn | isUnsafePluginCandidate | (private) |
| 293 | fn | isExtensionFile | (private) |
| 309 | fn | shouldIgnoreScannedDirectory | (private) |
| 329 | fn | resolveScannedEntryType | (private) |
| 353 | fn | resolvesToSameDirectory | (private) |
| 369 | fn | createDiscoveryResult | (private) |
| 376 | fn | mergeDiscoveryResult | (private) |
| 405 | fn | addMissingRequiredPluginDiagnostics | (private) |
| 428 | type | InstalledPluginRecordPath | (private) |
| 433 | fn | isLinkedLocalPluginRecord | (private) |
| 456 | fn | collectInstalledPluginRecordPaths | (private) |
| 489 | fn | collectManagedPluginRecordPaths | (private) |
| 511 | fn | resolveManagedPluginDirKey | (private) |
| 523 | fn | collectManagedPluginDirKeys | (private) |
| 537 | fn | isManagedPluginDir | (private) |
| 553 | fn | readPackageManifest | (private) |
| 568 | fn | readTrustedPackageManifest | (private) |
| 572 | fn | readPackageManifestStat | (private) |
| 581 | fn | prunePackageManifestProcessCache | (private) |
| 591 | fn | readCandidatePackageManifest | (private) |
| 633 | fn | deriveIdHint | (private) |
| 667 | fn | derivePackagePluginIdHint | (private) |
| 687 | fn | pushInvalidPackageExtensionDiagnostic | (private) |
| 711 | type | ResolvedCandidateManifest | (private) |
| 716 | fn | resolveCandidateManifest | (private) |
| 727 | fn | addCandidate | (private) |
| 803 | fn | discoverBundleInRoot | (private) |
| 863 | fn | addLegacyNpmDeclarationDiagnostic | (private) |
| 880 | fn | shouldSkipIncompatiblePackagePluginApi | (private) |
| 924 | fn | discoverInDirectory | (private) |
| 1157 | fn | hasDiscoverablePluginTree | (private) |
| 1174 | fn | isSourceCheckoutExtensionsDir | (private) |
| 1185 | fn | resolveBundledSourceCheckoutExtensionsDir | (private) |
| 1196 | fn | readChildDirectoryNames | (private) |
| 1212 | fn | readBundledDistOptOutDirectoryNames | (private) |
| 1228 | fn | discoverFromPath | (private) |
| 1450 | fn | discoverConfiguredPluginLoadPathsInto | (private) |
| 1485 | fn | discoverConfiguredPluginLoadPaths | pub |
| 1510 | fn | discoverOpenClawPlugins | pub |

## src/plugins/doctor-contract-registry.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makeTempDir | (private) |
| 31 | fn | requireFirstCreateJitiCall | (private) |

## src/plugins/doctor-contract-registry.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | PluginDoctorContractModule | (private) |
| 34 | type | PluginDoctorCompatibilityMutation | (private) |
| 39 | type | PluginDoctorCompatibilityNormalizer | (private) |
| 43 | type | PluginDoctorSessionStoreAgentIdsResolver | (private) |
| 47 | type | PluginDoctorContractEntry | (private) |
| 56 | type | PluginDoctorStateMigrationDetection | pub |
| 60 | type | PluginDoctorStateMigrationContext | pub |
| 71 | type | PluginDoctorStateMigration | pub |
| 97 | type | PluginDoctorStateMigrationEntry | (private) |
| 102 | type | PluginManifestRegistryRecord | (private) |
| 104 | fn | loadPluginDoctorContractModule | (private) |
| 115 | fn | resolveContractApiPath | (private) |
| 132 | fn | coerceLegacyConfigRules | (private) |
| 145 | fn | coerceNormalizeCompatibilityConfig | (private) |
| 151 | fn | coerceSessionStoreAgentIdsResolver | (private) |
| 159 | fn | isDoctorSessionRouteStateOwner | (private) |
| 187 | fn | coerceDoctorSessionRouteStateOwners | (private) |
| 201 | fn | isPluginDoctorStateMigration | (private) |
| 221 | fn | coercePluginDoctorStateMigrations | (private) |
| 234 | fn | hasLegacyElevenLabsTalkFields | (private) |
| 244 | fn | collectMediaProviderIds | (private) |
| 268 | fn | collectRelevantDoctorPluginIds | pub |
| 307 | fn | collectRelevantDoctorPluginIdsForTouchedPaths | pub |
| 354 | fn | loadPluginDoctorContractEntry | (private) |
| 406 | fn | resolvePluginDoctorContracts | (private) |
| 445 | fn | listPluginDoctorLegacyConfigRules | pub |
| 454 | fn | listPluginDoctorSessionRouteStateOwners | pub |
| 472 | fn | listPluginDoctorSessionStoreAgentIds | pub |
| 495 | fn | listPluginDoctorStateMigrationEntries | pub |
| 509 | fn | applyPluginDoctorCompatibilityMigrations | pub |

## src/plugins/gateway-startup-plugin-ids.ts (2328 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | GatewayStartupPluginPlan | pub |
| 71 | type | NormalizedPluginsConfig | (private) |
| 72 | type | GenerationProviderContractKey | (private) |
| 76 | type | VoiceProviderContractKey | (private) |
| 80 | type | ConfiguredGenerationProviderIds | (private) |
| 81 | type | ConfiguredVoiceProviderIds | (private) |
| 83 | fn | sortUniquePluginIds | (private) |
| 89 | fn | normalizePluginsConfigForInstalledIndex | (private) |
| 96 | fn | isConfigActivationValueEnabled | (private) |
| 106 | fn | listPotentialEnabledChannelIds | (private) |
| 113 | fn | isGatewayStartupMemoryPlugin | (private) |
| 117 | fn | resolveGatewayStartupDreamingEngineId | (private) |
| 131 | fn | resolveGatewayStartupDreamingSelectedPluginId | (private) |
| 138 | fn | blocksPluginStartup | (private) |
| 151 | fn | resolveAuthorizedGatewayStartupDreamingPluginIds | (private) |
| 198 | fn | resolveMemorySlotStartupPluginId | (private) |
| 224 | fn | resolveContextEngineSlotStartupPluginId | (private) |
| 248 | fn | shouldConsiderForGatewayStartup | (private) |
| 270 | fn | hasConfiguredStartupChannel | (private) |
| 280 | type | ManifestRegistryLookup | (private) |
| 282 | fn | createManifestRegistryLookup | (private) |
| 288 | fn | listManifestChannelIds | (private) |
| 295 | fn | findManifestPlugin | (private) |
| 302 | fn | hasConfiguredActivationPath | (private) |
| 312 | fn | hasConfiguredActivationPathPatterns | (private) |
| 328 | fn | addConfiguredActivationPathPluginIds | (private) |
| 350 | fn | manifestOwnsConfiguredSpeechProvider | (private) |
| 363 | fn | collectConfiguredWebSearchProviderIds | (private) |
| 372 | fn | manifestOwnsConfiguredWebSearchProvider | (private) |
| 385 | fn | listModelProviderRefs | (private) |
| 406 | fn | listModelProviderRefParts | (private) |
| 413 | fn | collectModelProviderIds | (private) |
| 424 | type | ManifestModelProviderLookup | (private) |
| 429 | fn | buildManifestModelProviderLookup | (private) |
| 445 | fn | collectConfiguredAgentModelProviderIds | (private) |
| 451 | fn | addModelProviderRefs | (private) |
| 458 | fn | addModelMapProviderIds | (private) |
| 498 | fn | configuredModelProviderNeedsRuntimePlugin | (private) |
| 518 | fn | manifestOwnsConfiguredModelProvider | (private) |
| 530 | fn | collectConfiguredGenerationProviderIds | (private) |
| 541 | fn | collectConfiguredVoiceProviderIds | (private) |
| 554 | fn | normalizeMemoryEmbeddingProviderIdValue | (private) |
| 562 | fn | normalizeExplicitMemoryEmbeddingProviderId | (private) |
| 569 | fn | readMemorySearchEnabled | (private) |
| 576 | fn | isMemorySlotExplicitlyDisabled | (private) |
| 580 | type | MemoryEmbeddingStartupProviderSource | (private) |
| 582 | type | ConfiguredMemoryEmbeddingStartupProviderOwner | (private) |
| 602 | fn | resolveMemoryEmbeddingProviderOwnerIds | (private) |
| 622 | fn | resolveEffectiveMemoryEmbeddingProviderEntries | (private) |
| 666 | fn | collectConfiguredMemoryEmbeddingStartupProviderOwners | pub |
| 675 | fn | addEffectiveProviders | (private) |
| 708 | fn | collectConfiguredMemoryEmbeddingProviderIds | pub |
| 727 | fn | collectUnregisteredConfiguredMemoryEmbeddingProviders | pub |
| 756 | fn | collectRegisteredEmbeddingProviderIds | pub |
| 768 | fn | addPluginConfigEntryIds | (private) |
| 779 | fn | addConfiguredSlotPluginIds | (private) |
| 805 | fn | collectConfiguredStartupChannelIds | (private) |
| 816 | fn | collectValidationHeartbeatTargetChannelIds | (private) |
| 818 | fn | pushTarget | (private) |
| 837 | fn | collectValidationChannelConfigIds | (private) |
| 849 | fn | collectConfigValidationChannelIds | (private) |
| 864 | fn | collectConfiguredProviderIds | (private) |
| 881 | fn | collectValidationConfiguredProviderIds | (private) |
| 883 | fn | pushProviderId | (private) |
| 917 | fn | collectValidationConfiguredShorthandModelIds | (private) |
| 927 | fn | addRequiredAgentHarnessPluginIds | (private) |
| 966 | fn | resolveGatewayStartupMetadataPluginIds | pub |
| 1103 | fn | createGatewayStartupMetadataPluginIdScope | pub |
| 1139 | fn | addValidationPluginConfigReferences | (private) |
| 1171 | fn | resolveConfigValidationMetadataPluginIds | pub |
| 1237 | fn | createConfigValidationMetadataPluginIdScope | pub |
| 1267 | fn | isMetadataSnapshotScopedForGatewayStartup | pub |
| 1285 | fn | manifestOwnsConfiguredGenerationProvider | (private) |
| 1310 | fn | manifestOwnsConfiguredVoiceProvider | (private) |
| 1335 | fn | manifestOwnsConfiguredMemoryEmbeddingProvider | (private) |
| 1352 | type | ConfiguredProviderActivation | (private) |
| 1362 | fn | canStartConfiguredProvider | (private) |
| 1391 | fn | canStartConfiguredGenerationProviderPlugin | (private) |
| 1414 | fn | canStartConfiguredVoiceProviderPlugin | (private) |
| 1437 | fn | canStartConfiguredMemoryEmbeddingProviderPlugin | (private) |
| 1460 | fn | canStartConfiguredWorkerProviderPlugin | (private) |
| 1481 | fn | canStartConfiguredModelProviderPlugin | (private) |
| 1504 | fn | canStartRequiredAgentHarnessPlugin | (private) |
| 1560 | fn | canStartConfiguredSpeechProviderPlugin | (private) |
| 1606 | fn | canStartConfiguredWebSearchProviderPlugin | (private) |
| 1629 | fn | canStartConfiguredRootPlugin | (private) |
| 1685 | fn | hasExplicitHookPolicyConfig | (private) |
| 1696 | fn | hasHookRuntimeStartupIntent | (private) |
| 1709 | fn | canStartExplicitHookPlugin | (private) |
| 1759 | fn | canStartTrustedToolPolicyPlugin | (private) |
| 1802 | fn | canStartConfiguredChannelPlugin | (private) |
| 1851 | fn | resolveChannelPluginIds | pub |
| 1859 | fn | resolveChannelPluginIdsFromRegistry | pub |
| 1868 | fn | resolveConfiguredDeferredChannelPluginIdsFromRegistry | pub |
| 1896 | fn | resolveConfiguredDeferredChannelPluginIdsFromPrepared | (private) |
| 1932 | fn | resolveConfiguredDeferredChannelPluginIds | pub |
| 1940 | fn | resolveGatewayStartupPluginPlanFromRegistry | pub |
| 2250 | fn | resolveGatewayStartupPluginIdsFromRegistry | pub |
| 2262 | fn | loadGatewayStartupPluginPlan | pub |
| 2318 | fn | resolveGatewayStartupPluginIds | pub |

## src/plugins/git-install.test.ts (773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | expectedGitRepoDir | (private) |
| 55 | fn | expectParsedGitSpec | (private) |
| 62 | fn | commandArgvAt | (private) |
| 70 | fn | firstInstallOptions | (private) |
| 90 | fn | captureSecurityEvents | (private) |

## src/plugins/git-install.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | PluginInstallLogger | (private) |
| 46 | type | GitPluginResolution | (private) |
| 53 | type | GitPluginInstallResult | (private) |
| 58 | type | ParsedGitPluginSpec | (private) |
| 67 | fn | isImmutableGitCommitRef | pub |
| 71 | fn | splitGitSpecRef | (private) |
| 95 | fn | isGitSpecBase | (private) |
| 108 | fn | looksLikeGitHubRepoShorthand | (private) |
| 112 | fn | looksLikeGitHubHostPath | (private) |
| 116 | fn | isGitUrl | (private) |
| 125 | fn | looksLikeScpGitUrl | (private) |
| 129 | fn | looksLikeUrlGitSpecBase | (private) |
| 144 | fn | stripGitSuffix | (private) |
| 148 | fn | normalizeGitHubRepo | (private) |
| 156 | fn | normalizeGitLabel | (private) |
| 168 | fn | parseGitPluginSpec | pub |
| 219 | fn | createGitCommandEnv | (private) |
| 239 | fn | resolveGitInstallRepoDir | (private) |
| 248 | fn | withGitStagingDir | (private) |
| 282 | fn | replaceManagedGitRepo | (private) |
| 301 | fn | formatGitCommandFailure | (private) |
| 313 | fn | buildBlockedGitInstallResult | (private) |
| 327 | fn | runGitCommand | (private) |
| 353 | fn | installPluginFromGitSpec | pub |

## src/plugins/hook-types.ts (1346 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | PluginHookName | pub |
| 165 | type | MissingPluginHookNames | (private) |
| 166 | type | AssertAllPluginHookNamesListed | (private) |
| 170 | type | DeprecatedPluginHookName | (private) |
| 172 | type | PluginHookDeprecation | (private) |
| 178 | type | PluginHookChannelPairingRequestedEvent | (private) |
| 191 | type | PluginHookChannelPairingContext | (private) |
| 252 | type | PluginHookAgentContext | pub |
| 286 | type | PluginHookContextWindowSource | pub |
| 292 | type | PluginHookBeforeAgentReplyEvent | pub |
| 296 | type | PluginHookBeforeAgentReplyResult | pub |
| 302 | type | PluginHookLlmInputEvent | pub |
| 314 | type | PluginHookModelCallBaseEvent | (private) |
| 331 | type | PluginHookModelCallStartedEvent | pub |
| 333 | type | PluginHookModelCallEndedEvent | pub |
| 344 | type | PluginHookLlmOutputEvent | pub |
| 389 | type | PluginHookAgentEndEvent | pub |
| 397 | type | PluginHookBeforeAgentFinalizeEvent | pub |
| 411 | type | PluginHookBeforeAgentFinalizeResult | pub |
| 426 | type | PluginHookBeforeCompactionEvent | pub |
| 434 | type | PluginHookBeforeResetEvent | pub |
| 440 | type | PluginHookAfterCompactionEvent | pub |
| 449 | type | PluginHookInboundClaimResult | pub |
| 454 | type | PluginHookBeforeDispatchEvent | pub |
| 469 | type | PluginHookBeforeDispatchContext | pub |
| 482 | type | PluginHookBeforeDispatchResult | pub |
| 487 | type | PluginHookReplyDispatchEvent | pub |
| 510 | type | PluginHookReplyDispatchContext | pub |
| 525 | type | PluginHookReplyDispatchResult | pub |
| 537 | type | PluginHookReplyUsageState | pub |
| 598 | type | PluginHookReplyPayloadSendingEvent | pub |
| 611 | type | PluginHookReplyPayload | pub |
| 612 | type | PluginHookReplyPayloadSendingContext | pub |
| 614 | type | PluginHookReplyPayloadSendingResult | pub |
| 620 | type | PluginHookToolKind | pub |
| 621 | type | PluginHookToolInputKind | pub |
| 624 | type | PluginHookToolRequesterContext | pub |
| 637 | type | PluginHookToolContext | pub |
| 659 | type | PluginHookBeforeToolCallEvent | pub |
| 682 | type | PluginHookAfterToolCallEvent | pub |
| 692 | type | PluginHookToolResultPersistContext | pub |
| 699 | type | PluginHookToolResultPersistEvent | pub |
| 706 | type | PluginHookToolResultPersistResult | pub |
| 710 | type | PluginHookBeforeMessageWriteEvent | pub |
| 716 | type | PluginHookBeforeMessageWriteResult | pub |
| 721 | type | PluginHookSessionContext | pub |
| 727 | type | PluginHookSessionStartEvent | pub |
| 733 | type | PluginHookSessionEndReason | pub |
| 744 | type | PluginHookSessionEndEvent | pub |
| 756 | type | PluginHookSubagentContext | pub |
| 762 | type | PluginHookSubagentTargetKind | (private) |
| 764 | type | PluginHookSubagentRequester | (private) |
| 775 | type | PluginHookSubagentSpawnBase | (private) |
| 789 | type | PluginHookSubagentSpawningEvent | pub |
| 796 | type | PluginHookSubagentSpawningResult | pub |
| 822 | type | PluginHookSubagentDeliveryTargetEvent | pub |
| 841 | type | PluginHookSubagentDeliveryTargetResult | pub |
| 850 | type | PluginHookSubagentSpawnedEvent | pub |
| 859 | type | PluginHookSubagentProgressEvent | pub |
| 874 | type | PluginHookSubagentEndedEvent | pub |
| 886 | type | PluginHookGatewayContext | pub |
| 893 | type | PluginHookCronReconciledContext | pub |
| 898 | type | PluginHookGatewayStartEvent | pub |
| 902 | type | PluginHookGatewayStopEvent | pub |
| 906 | type | PluginHookCronReconciledEvent | pub |
| 911 | type | PluginHookGatewayCronRunStatus | (private) |
| 913 | type | PluginHookGatewayCronDeliveryStatus | (private) |
| 919 | type | PluginHookGatewayCronJobState | (private) |
| 934 | type | PluginHookGatewayCronJob | pub |
| 973 | type | PluginHookCronChangedEvent | pub |
| 997 | type | PluginHookGatewayCronCreateInput | (private) |
| 1014 | type | PluginHookGatewayCronUpdateInput | (private) |
| 1016 | type | PluginHookGatewayCronRemoveResult | (private) |
| 1020 | type | PluginHookGatewayCronService | pub |
| 1027 | type | PluginInstallTargetType | pub |
| 1028 | type | PluginInstallRequestKind | (private) |
| 1035 | type | PluginInstallSourcePathKind | pub |
| 1037 | type | PluginInstallFinding | (private) |
| 1045 | type | PluginHookBeforeInstallRequest | pub |
| 1051 | type | PluginHookBeforeInstallBuiltinScan | pub |
| 1061 | type | PluginHookBeforeInstallSkillInstallSpec | (private) |
| 1077 | type | PluginHookBeforeInstallSkill | pub |
| 1082 | type | PluginHookBeforeInstallPlugin | pub |
| 1091 | type | PluginHookBeforeInstallContext | pub |
| 1097 | type | PluginHookBeforeInstallEvent | pub |
| 1109 | type | PluginHookBeforeInstallResult | pub |
| 1120 | type | PluginHookBeforeAgentRunEvent | pub |
| 1138 | type | PluginHookBeforeAgentRunResult | (private) |
| 1140 | type | PluginHookResolveExecEnvEvent | pub |
| 1146 | type | PluginHookResolveExecEnvContext | pub |
| 1148 | type | PluginHookHandlerMap | pub |

## src/plugins/hooks.ts (1627 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | type | HookRunnerLogger | (private) |
| 104 | type | HookFailurePolicy | (private) |
| 105 | type | VoidHookRunOptions | pub |
| 109 | type | BeforeAgentFinalizeRetry | (private) |
| 110 | type | BeforeAgentFinalizeResultWithRetryCandidates | (private) |
| 114 | type | HookRunnerOptions | (private) |
| 177 | type | PluginTargetedInboundClaimOutcome | (private) |
| 196 | type | SyncHookName | (private) |
| 205 | fn | getHooksForName | (private) |
| 214 | fn | getHooksForNameAndPlugin | (private) |
| 225 | fn | createHookRunner | pub |
| 535 | fn | runVoidHook | (private) |
| 571 | fn | runModifyingHook | (private) |
| 622 | fn | runClaimingHook | (private) |
| 637 | fn | runClaimingHookForPlugin | (private) |
| 658 | fn | runClaimingHooksList | (private) |
| 685 | fn | runClaimingHookForPluginOutcome | (private) |
| 744 | fn | withAgentRunId | (private) |
| 758 | fn | runBeforeModelResolve | (private) |
| 774 | fn | runBeforePromptBuild | (private) |
| 786 | fn | runAgentTurnPrepare | (private) |
| 803 | fn | runBeforeAgentReply | (private) |
| 819 | fn | runModelCallStarted | (private) |
| 831 | fn | runModelCallEnded | (private) |
| 843 | fn | runAgentEnd | (private) |
| 856 | fn | runLlmInput | (private) |
| 865 | fn | runLlmOutput | (private) |
| 874 | fn | runBeforeAgentFinalize | (private) |
| 889 | fn | runBeforeCompaction | (private) |
| 899 | fn | runAfterCompaction | (private) |
| 911 | fn | runBeforeReset | (private) |
| 926 | fn | runInboundClaim | (private) |
| 937 | fn | runInboundClaimForPlugin | (private) |
| 950 | fn | runInboundClaimForPluginOutcome | (private) |
| 967 | fn | runMessageReceived | (private) |
| 978 | fn | runChannelPairingRequested | (private) |
| 990 | fn | runBeforeDispatch | (private) |
| 1006 | fn | runReplyDispatch | (private) |
| 1022 | fn | runReplyPayloadSending | (private) |
| 1082 | fn | runMessageSending | (private) |
| 1112 | fn | runMessageSent | (private) |
| 1125 | fn | runBeforeAgentRun | (private) |
| 1178 | fn | runBeforeToolCall | (private) |
| 1217 | fn | runAfterToolCall | (private) |
| 1234 | fn | runToolResultPersist | (private) |
| 1294 | fn | runBeforeMessageWrite | (private) |
| 1358 | fn | runSessionStart | (private) |
| 1369 | fn | runSessionEnd | (private) |
| 1381 | fn | runSubagentSpawning | (private) |
| 1397 | fn | runSubagentDeliveryTarget | (private) |
| 1413 | fn | runSubagentSpawned | (private) |
| 1421 | fn | runSubagentProgress | (private) |
| 1432 | fn | runSubagentEnded | (private) |
| 1447 | fn | runGatewayStart | (private) |
| 1458 | fn | runGatewayStop | (private) |
| 1465 | fn | runHeartbeatPromptContribution | (private) |
| 1478 | fn | runCronReconciled | (private) |
| 1488 | fn | runCronChanged | (private) |
| 1504 | fn | runBeforeInstall | (private) |
| 1530 | fn | runResolveExecEnv | (private) |
| 1549 | fn | hasHooks | (private) |
| 1556 | fn | getHookCount | (private) |
| 1617 | type | HookRunner | pub |
| 1619 | type | SubagentLifecycleHookRunner | pub |

## src/plugins/host-hook-runtime.ts (630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | PluginRunContextNamespaces | (private) |
| 20 | type | PluginRunContextByPlugin | (private) |
| 21 | type | PluginAgentEventSubscriptionContext | (private) |
| 25 | type | SchedulerJobRecord | (private) |
| 33 | type | PluginHostRuntimeState | (private) |
| 47 | fn | getPluginHostRuntimeState | (private) |
| 58 | fn | normalizeNamespace | (private) |
| 62 | fn | copyJsonValue | (private) |
| 66 | fn | markPluginRunClosed | (private) |
| 79 | fn | isPluginRunClosed | (private) |
| 83 | fn | markTerminalEventCleanupExpired | (private) |
| 96 | fn | isTerminalEventCleanupExpired | (private) |
| 100 | fn | trackAgentEventHandler | (private) |
| 116 | fn | waitForLiveTerminalEventHandlers | (private) |
| 126 | fn | waitForTerminalEventHandlers | (private) |
| 154 | fn | getPluginRunContextNamespaces | (private) |
| 177 | fn | setPluginRunContext | pub |
| 217 | fn | getPluginRunContext | pub |
| 233 | fn | clearPluginRunContext | pub |
| 282 | fn | isTerminalAgentRunEvent | (private) |
| 287 | fn | logAgentEventSubscriptionFailure | (private) |
| 297 | fn | dispatchPluginAgentEventSubscriptions | pub |
| 364 | fn | registerPluginSessionSchedulerJob | pub |
| 390 | fn | deletePluginSessionSchedulerJob | pub |
| 414 | fn | hasPluginSessionSchedulerJob | (private) |
| 431 | fn | getPluginSessionSchedulerJobGeneration | pub |
| 447 | fn | makePluginSessionSchedulerJobKey | pub |
| 451 | fn | cleanupPluginSessionSchedulerJobs | pub |
| 474 | fn | schedulerJobKey | (private) |
| 619 | fn | clearPluginHostRuntimeState | pub |

## src/plugins/host-hook-state.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | normalizeNamespace | (private) |
| 35 | fn | copyJsonValue | (private) |
| 39 | fn | isPluginNextTurnInjectionPlacement | (private) |
| 45 | fn | isPluginNextTurnInjectionRecord | (private) |
| 65 | fn | isExpired | (private) |
| 72 | fn | isPluginPromptInjectionEnabled | (private) |
| 77 | fn | toPluginNextTurnInjectionRecord | (private) |
| 96 | fn | enqueuePluginNextTurnInjection | pub |
| 187 | fn | drainPluginNextTurnInjections | (private) |
| 247 | fn | drainPluginNextTurnInjectionContext | pub |
| 259 | fn | getPluginSessionExtensionStateSync | pub |
| 276 | fn | patchPluginSessionExtension | pub |
| 388 | fn | projectSessionExtensionValueForSlot | (private) |
| 418 | fn | collectPluginSessionExtensionProjections | (private) |
| 465 | fn | isPromiseLike | (private) |
| 469 | fn | discardUnexpectedPromiseProjection | (private) |
| 473 | fn | projectSessionExtensionValue | (private) |
| 501 | fn | projectPluginSessionExtensionsSync | pub |

## src/plugins/install-managed-npm-state.ts (708 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | isNpmAliasOverrideComparatorError | pub |
| 44 | fn | rollbackManagedNpmPluginInstall | pub |
| 205 | type | ManagedNpmPluginInstallRollbackSnapshot | pub |
| 212 | type | ManagedNpmRootPreparedDependency | pub |
| 218 | type | ManagedNpmProjectQuarantine | pub |
| 223 | type | ManagedNpmRootPrepareDependencyResult | (private) |
| 230 | type | ManagedNpmRootDependencySpecPreparation | pub |
| 234 | fn | resolveManagedNpmRootDependencySpecForInstall | pub |
| 259 | fn | rollbackManagedNpmRootPreparedDependency | pub |
| 276 | fn | cleanupManagedNpmRootPreparedDependency | pub |
| 293 | fn | removeEmptyDirectoryIfPresent | pub |
| 303 | fn | readRollbackFileIfPresent | (private) |
| 314 | fn | writeOrRemoveRollbackFile | (private) |
| 323 | fn | createManagedNpmPluginInstallRollbackSnapshot | pub |
| 365 | fn | shouldCopyManagedNpmRollbackSnapshotEntry | (private) |
| 396 | fn | restoreManagedNpmPluginInstallRollbackSnapshot | (private) |
| 421 | fn | cleanupManagedNpmPluginInstallRollbackSnapshot | pub |
| 437 | fn | formatNpmCommandFailureOutput | pub |
| 441 | fn | isManagedNpmProjectCorruptionInstallFailure | pub |
| 453 | fn | formatManagedNpmProjectQuarantineArtifacts | pub |
| 457 | fn | quarantineManagedNpmProjectRebuildArtifacts | pub |
| 479 | fn | listManagedNpmRootPackageNames | pub |
| 523 | fn | resolveManagedNpmRootPackageDir | pub |
| 527 | fn | resolveManagedNpmRootGenerationKey | (private) |
| 540 | fn | resolveManagedNpmRootForInstall | pub |
| 562 | fn | resolveManagedNpmInstallRoot | pub |
| 586 | fn | listManagedNpmPackageDirsForPackage | (private) |
| 626 | fn | resolveManagedNpmGenerationUseForInstall | pub |
| 664 | fn | resolveRequiredPlatformPackageNames | pub |
| 699 | fn | listNewManagedNpmRootPackageDirs | pub |

## src/plugins/install-managed-npm.ts (586 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | installPluginFromManagedNpmRoot | pub |

## src/plugins/install-persistence.test.ts (900 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | requireMockCallArg | (private) |
| 38 | fn | expectRuntimeLogIncludes | (private) |

## src/plugins/install-persistence.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | addInstalledPluginToAllowlist | (private) |
| 52 | fn | removeInstalledPluginFromDenylist | (private) |
| 71 | type | ConfigSnapshotForInstallPersist | pub |
| 86 | type | ConfigMutationSection | (private) |
| 88 | type | ConfigMutationPreflight | pub |
| 94 | fn | containsConfigIncludeDirective | pub |
| 107 | fn | supportsInstallConfigSingleTopLevelIncludeShape | pub |
| 118 | fn | resolveSingleTopLevelIncludePath | (private) |
| 138 | fn | resolveConfigMutationPreflight | (private) |
| 219 | fn | resolveInstallConfigMutationPreflights | pub |
| 263 | fn | resolveCombinedPluginAndHookConfigMutationPreflight | pub |
| 288 | fn | selectInstallMutationWriteOptions | pub |
| 306 | fn | sourceMatchesInstalledPath | (private) |
| 316 | fn | logShadowedNpmInstallWarning | (private) |
| 356 | fn | logSlotWarnings | (private) |
| 362 | fn | resolveComparableInstallPath | (private) |
| 368 | fn | shouldPreserveReplacedInstallPath | (private) |
| 379 | fn | resolveReplacedManagedInstallRemoval | (private) |
| 430 | fn | persistPluginInstall | pub |

## src/plugins/install-record-commit.test.ts (740 lines)

_No symbols extracted._

## src/plugins/install-security-scan.runtime.ts (1307 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | InstallScanLogger | (private) |
| 36 | type | PluginInstallRequestKind | (private) |
| 38 | fn | formatInstallPolicyWarning | (private) |
| 45 | type | InstallScanFinding | (private) |
| 54 | type | BuiltinInstallScan | (private) |
| 64 | type | PackageExecutableScanMetadata | (private) |
| 70 | type | PackageManifest | (private) |
| 78 | type | PackageManifestTraversalLimits | (private) |
| 84 | type | PackageManifestTraversalResult | (private) |
| 90 | type | InstalledPackageScanRoot | (private) |
| 95 | type | SkillInstallSpec | (private) |
| 111 | type | InstallSecurityScanResult | pub |
| 124 | fn | buildBlockedDependencyManifestLabel | (private) |
| 135 | fn | buildBlockedDependencyReason | (private) |
| 161 | fn | buildBlockedDependencyDirectoryReason | (private) |
| 169 | fn | buildBlockedDependencyFileReason | (private) |
| 177 | fn | pathContainsNodeModulesSegment | (private) |
| 184 | fn | isPackageRootOpenClawPeerSymlink | (private) |
| 194 | fn | isManagedNpmRootPackagePeerSymlink | (private) |
| 209 | fn | isTrustedOpenClawPeerSymlink | (private) |
| 221 | fn | resolveTrustedHostOpenClawRootRealPath | (private) |
| 233 | fn | isTrustedHostOpenClawPath | (private) |
| 243 | fn | inspectNodeModulesSymlinkTarget | (private) |
| 297 | fn | readPositiveIntegerEnv | (private) |
| 306 | fn | resolvePackageManifestTraversalLimits | (private) |
| 323 | fn | isSamePathOrInside | (private) |
| 327 | fn | getErrnoCode | (private) |
| 335 | fn | isInstallScannableDependencyName | (private) |
| 347 | fn | collectManifestRuntimeDependencyNames | (private) |
| 364 | fn | resolveInstalledPackageScanRoot | (private) |
| 392 | fn | collectInstalledPackageScanRoots | (private) |
| 469 | fn | collectNonOverlappingPackageScanRoots | (private) |
| 481 | fn | collectPackageManifestPaths | (private) |
| 604 | fn | formatPackageScanRelativePath | (private) |
| 618 | fn | scanPluginDependencyDenylist | (private) |
| 700 | fn | runBeforeInstallHook | (private) |
| 773 | fn | formatInstallPolicyOriginForHook | (private) |
| 783 | fn | isMutableGitOrigin | (private) |
| 788 | fn | resolvePolicySource | (private) |
| 832 | fn | shouldBypassOpenClawInstallFriction | (private) |
| 851 | fn | runOperatorInstallPolicy | (private) |
| 907 | fn | scanBundleInstallSourceRuntime | pub |
| 920 | fn | runPolicy | (private) |
| 979 | fn | scanPackageInstallSourceRuntime | pub |
| 997 | fn | runPolicy | (private) |
| 1069 | fn | scanInstalledPackageDependencyTreeRuntime | pub |
| 1085 | fn | runPolicy | (private) |
| 1136 | fn | scanFileInstallSourceRuntime | pub |
| 1189 | fn | preflightPluginNpmInstallPolicyRuntime | pub |
| 1221 | fn | preflightPluginGitInstallPolicyRuntime | pub |
| 1249 | fn | evaluateSkillInstallPolicyRuntime | pub |
| 1261 | fn | runPolicy | (private) |

## src/plugins/install.npm-spec.e2e.test.ts (1314 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | PackedVersion | (private) |
| 50 | fn | makeTempDir | (private) |
| 56 | fn | configWithInstalledPackageTreeBlockPolicy | (private) |
| 93 | fn | pluginNpmProjectRoot | (private) |
| 97 | fn | packPlugin | (private) |
| 185 | fn | startStaticRegistry | (private) |
| 268 | fn | startMutableRegistry | (private) |

## src/plugins/install.npm-spec.test.ts (3613 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | successfulSpawn | (private) |
| 67 | fn | failedSpawn | (private) |
| 78 | fn | npmViewArgv | (private) |
| 92 | fn | npmViewVersionsArgv | (private) |
| 96 | fn | npmPackArchiveMetadataArgv | (private) |
| 100 | fn | commandKey | (private) |
| 104 | fn | resolveManagedFileDependency | (private) |
| 112 | fn | isNpmInstallCommand | (private) |
| 116 | fn | isNpmPeerPlannerInstallCommand | (private) |
| 120 | fn | isManagedNpmInstallCommand | (private) |
| 124 | fn | managedNpmRootHasDependency | (private) |
| 131 | fn | expectNpmInstallIntoRoot | (private) |
| 159 | fn | expectNpmInstallIntoProject | (private) |
| 173 | fn | resolveTestPluginPackageDir | (private) |
| 184 | fn | resolveTestPluginGenerationProjectDir | (private) |
| 204 | fn | resolveTestPluginGenerationPackageDir | (private) |
| 218 | fn | writeInstalledNpmPlugin | (private) |
| 295 | type | MockNpmPackage | (private) |
| 322 | fn | writeNpmRootPackageLock | (private) |
| 356 | fn | writeMissingCurrentPlatformOptionalPackage | (private) |
| 380 | fn | readTextFileTree | (private) |
| 395 | fn | prunePluginLocalOpenClawPeerLinks | (private) |
| 427 | fn | mockNpmViewAndInstall | (private) |
| 431 | fn | mockNpmViewAndInstallMany | (private) |
| 1062 | fn | install | (private) |
| 1518 | fn | addPeerAfterQuarantine | (private) |

## src/plugins/install.test.ts (4153 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | InstallPluginFromDirParams | (private) |
| 43 | fn | installPluginFromDir | (private) |
| 156 | fn | ensureSuiteFixtureRoot | (private) |
| 165 | fn | getArchiveFixturePath | (private) |
| 180 | fn | readZipperArchiveBuffer | (private) |
| 186 | fn | expectPluginFiles | (private) |
| 194 | fn | captureSecurityEvents | (private) |
| 207 | fn | expectSuccessfulArchiveInstall | (private) |
| 220 | fn | setupPluginInstallDirs | (private) |
| 229 | fn | writeMinimalPackagePlugin | (private) |
| 241 | fn | setupInstallPluginFromDirFixture | (private) |
| 272 | fn | installFromDirWithWarnings | (private) |
| 296 | type | CapturedInstallPolicyRequest | (private) |
| 304 | fn | writeAllowingInstallPolicyScript | (private) |
| 328 | fn | writeBlockingInstallPolicyScript | (private) |
| 365 | fn | writeInstallOnlyBlockingPolicyScript | (private) |
| 398 | fn | configWithInstallPolicy | (private) |
| 417 | fn | readCapturedInstallPolicyRequests | (private) |
| 426 | fn | mockNpmViewMetadata | (private) |
| 446 | fn | runActualInstallPolicyCommandIfNeeded | (private) |
| 459 | fn | countMockedCommands | (private) |
| 464 | fn | mockSuccessfulManagedNpmInstall | (private) |
| 516 | fn | installFromArchiveWithWarnings | (private) |
| 538 | fn | setupManifestInstallFixture | (private) |
| 563 | fn | setPluginMinHostVersion | (private) |
| 578 | fn | setPluginPackageCompatibility | (private) |
| 593 | fn | expectFailedInstallResult | (private) |
| 610 | fn | expectWarningIncludes | (private) |
| 614 | fn | expectWarningExcludes | (private) |
| 618 | fn | requireRecord | (private) |
| 625 | fn | firstMockCall | (private) |
| 629 | fn | requireHookPayload | (private) |
| 634 | fn | expectHookRequest | (private) |
| 643 | fn | mockSuccessfulCommandRun | (private) |
| 659 | fn | expectInstalledFiles | (private) |
| 665 | fn | setupManifestlessClaudeInstallFixture | (private) |
| 680 | fn | expectArchiveInstallReservedSegmentRejection | (private) |
| 701 | fn | installArchivePackageAndReturnResult | (private) |
| 727 | fn | buildDynamicArchiveTemplateKey | (private) |
| 745 | fn | ensureDynamicArchiveTemplate | (private) |
| 3036 | fn | expectInstalledWithPluginId | (private) |
| 3998 | fn | writePluginWithPeerDeps | (private) |

## src/plugins/installed-plugin-index-record-reader.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | cloneInstallRecords | (private) |
| 42 | fn | isSafeRecordKey | (private) |
| 46 | fn | readRecordMap | (private) |
| 64 | fn | readJsonObjectFileSync | (private) |
| 69 | fn | readStringRecord | (private) |
| 87 | fn | hasPackagePluginMetadata | (private) |
| 96 | fn | readManifestPluginId | (private) |
| 102 | fn | resolveRecoveredManagedNpmRoot | (private) |
| 108 | fn | resolveRecoveredManagedNpmPluginId | (private) |
| 124 | type | RecoveredManagedNpmInstallCandidate | (private) |
| 130 | fn | readManagedNpmInstallTimestampMs | (private) |
| 152 | fn | buildRecoveredManagedNpmInstallCandidatesForRoot | (private) |
| 202 | fn | listRecoveredManagedNpmInstallCandidates | pub |
| 220 | fn | recordsShareInstallPath | (private) |
| 233 | fn | normalizeInstallPathForComparison | (private) |
| 238 | fn | pickMostRecentRecoveredManagedNpmCandidate | (private) |
| 252 | fn | emitManagedNpmRecoveryFallbackWarning | (private) |
| 274 | fn | buildRecoveredManagedNpmInstallRecords | (private) |
| 311 | fn | readInstallRecordVersion | (private) |
| 315 | fn | isUnavailableManagedNpmInstallRecord | (private) |
| 349 | fn | mergeRecoveredManagedNpmMetadata | (private) |
| 381 | fn | mergeRecoveredManagedNpmRecord | (private) |
| 406 | fn | mergeRecoveredManagedNpmInstallRecords | (private) |
| 423 | fn | extractPluginInstallRecordsFromPersistedInstalledPluginIndex | (private) |
| 451 | type | InstalledPluginIndexRecordRow | (private) |
| 456 | fn | parseJsonColumn | (private) |
| 464 | fn | readPersistedInstalledPluginIndexForRecords | (private) |
| 499 | fn | readPersistedInstalledPluginIndexInstallRecords | pub |
| 507 | fn | readPersistedInstalledPluginIndexInstallRecordsSync | pub |
| 514 | fn | resolveInstallRecordsCacheKey | (private) |
| 522 | fn | loadInstalledPluginIndexInstallRecords | pub |
| 546 | fn | loadInstalledPluginIndexInstallRecordsSync | pub |

## src/plugins/installed-plugin-index-records.test.ts (957 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | makeStateDir | (private) |
| 41 | fn | createPluginCandidate | (private) |
| 62 | fn | expectRecordFields | (private) |
| 73 | fn | updatePersistedInstallRecordsWithoutClearingCache | (private) |

## src/plugins/installed-plugin-index-store.test.ts (758 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | makeTempDir | (private) |
| 33 | fn | createIndex | (private) |
| 66 | fn | createCandidate | (private) |
| 95 | fn | requirePersisted | (private) |
| 102 | fn | expectPluginIds | (private) |
| 106 | fn | expectPluginFields | (private) |
| 120 | fn | expectInstallRecord | (private) |
| 134 | fn | dropStartupConfigPaths | (private) |
| 149 | fn | expectPersistedIndex | (private) |
| 170 | fn | insertPersistedIndexRow | (private) |
| 244 | fn | expectCanonicalIndexMissing | (private) |

## src/plugins/installed-plugin-index-store.ts (530 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | InstalledPluginIndexStoreState | (private) |
| 45 | type | InstalledPluginIndexStoreInspection | pub |
| 142 | fn | copySafeInstallRecords | (private) |
| 158 | fn | parseInstalledPluginIndex | pub |
| 188 | type | InstalledPluginIndexSqliteRow | (private) |
| 202 | fn | isExplicitLegacyJsonStorePath | (private) |
| 206 | fn | readLegacyRecordContainer | (private) |
| 214 | fn | readPersistedInstalledPluginIndexFromLegacyJson | (private) |
| 246 | fn | assertWritableInstalledPluginIndexStoreOptions | (private) |
| 256 | fn | parseJsonColumn | (private) |
| 264 | fn | parseInstalledPluginIndexSqliteRow | (private) |
| 285 | fn | readPersistedInstalledPluginIndexFromSqlite | (private) |
| 314 | fn | writePersistedInstalledPluginIndexToSqlite | (private) |
| 369 | fn | readPersistedInstalledPluginIndex | pub |
| 375 | fn | readPersistedInstalledPluginIndexSync | pub |
| 381 | fn | writePersistedInstalledPluginIndex | pub |
| 392 | fn | writePersistedInstalledPluginIndexSync | pub |
| 403 | fn | hasPolicyRefreshTargets | (private) |
| 414 | fn | canRefreshPersistedPolicyState | (private) |
| 440 | fn | refreshPersistedPolicyState | (private) |
| 463 | fn | inspectPersistedInstalledPluginIndex | pub |
| 490 | fn | refreshPersistedInstalledPluginIndex | pub |
| 511 | fn | refreshPersistedInstalledPluginIndexSync | pub |

## src/plugins/installed-plugin-index.test.ts (1153 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeTempDir | (private) |
| 35 | fn | writePluginManifest | (private) |
| 39 | fn | writePackageJson | (private) |
| 43 | fn | writeRuntimeEntry | (private) |
| 51 | fn | isRecord | (private) |
| 55 | fn | requireRecord | (private) |
| 62 | fn | readRecordField | (private) |
| 70 | fn | expectRecordFields | (private) |
| 76 | fn | expectSha256 | (private) |
| 81 | fn | writeManifestlessClaudeBundle | (private) |
| 88 | fn | hermeticEnv | (private) |
| 97 | fn | createPluginCandidate | (private) |
| 122 | fn | createRichPluginFixture | (private) |

## src/plugins/interactive.test.ts (1036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | InteractiveDispatchParams | (private) |
| 101 | type | InteractiveModule | (private) |
| 105 | fn | importInteractiveModule | (private) |
| 109 | fn | createTelegramDispatchParams | (private) |
| 144 | fn | createDiscordDispatchParams | (private) |
| 181 | fn | createSlackDispatchParams | (private) |
| 224 | fn | expectDedupedInteractiveDispatch | (private) |
| 238 | fn | dispatchInteractive | (private) |
| 242 | fn | dispatchInteractiveWith | (private) |
| 351 | fn | registerInteractiveHandler | (private) |
| 363 | fn | requireHandlerCall | (private) |
| 371 | type | BindingHelperCase | (private) |
| 400 | fn | expectBindingHelperWiring | (private) |

## src/plugins/loader-runtime-candidate.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | PluginRegistryBuilder | (private) |
| 65 | type | PluginLoadLoopState | pub |
| 72 | fn | loadRuntimePluginCandidate | pub |
| 194 | fn | pushPluginLoadError | (private) |
| 574 | fn | recordBundleDiagnostics | (private) |

## src/plugins/loader.activation.test-utils.ts (1657 lines)

_No symbols extracted._

## src/plugins/loader.base.test-utils.ts (2044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1752 | fn | expectRegistrationsIntact | (private) |

## src/plugins/loader.cli-metadata.test.ts (1088 lines)

_No symbols extracted._

## src/plugins/loader.discovery-and-security.test-utils.ts (1752 lines)

_No symbols extracted._

## src/plugins/loader.hooks-and-runtime.test-utils.ts (1973 lines)

_No symbols extracted._

## src/plugins/loader.machine-token-generation.test.ts (1855 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | FacadeStore | (private) |
| 51 | fn | facadeStore | (private) |
| 61 | fn | clearFacadeStore | (private) |
| 79 | fn | machineTokenEntryConfig | (private) |
| 98 | fn | writeCapturingPlugin | (private) |
| 132 | fn | writePlainPlugin | (private) |
| 147 | fn | mcpMachineTokenServer | (private) |
| 168 | fn | sharedLoaderEnv | (private) |
| 181 | fn | loadWithMachineTokenPlugins | (private) |

## src/plugins/loader.registration.test-utils.ts (1749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1212 | fn | createTool | (private) |

## src/plugins/loader.test-harness.ts (1005 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | getEmbeddingProvider | pub |
| 32 | fn | listEmbeddingProviders | pub |
| 39 | type | GlobalHookRunner | (private) |
| 41 | type | PluginStartupTraceDetail | (private) |
| 46 | fn | listRegisteredAgentHarnessIdsForTest | pub |
| 50 | fn | countMatching | pub |
| 60 | fn | expectGlobalHookRunner | pub |
| 70 | fn | createDetachedTaskRuntimeStub | pub |
| 114 | fn | simplePluginBody | pub |
| 118 | fn | updatePluginManifest | pub |
| 127 | fn | memoryPluginBody | pub |
| 131 | fn | setupBundledDreamingMemoryPlugins | pub |
| 189 | fn | writeBundledPlugin | pub |
| 207 | fn | makeOpenClawDevSourceRoot | pub |
| 215 | fn | writeWorkspacePlugin | pub |
| 233 | fn | withStateDir | pub |
| 238 | fn | loadBundledMemoryPluginRegistry | pub |
| 308 | fn | setupBundledTelegramPlugin | pub |
| 321 | fn | expectTelegramLoaded | pub |
| 327 | fn | loadRegistryFromSinglePlugin | pub |
| 347 | fn | loadRegistryFromAllowedPlugins | pub |
| 363 | fn | runRegistryScenarios | pub |
| 371 | fn | runScenarioCases | pub |
| 377 | fn | runSinglePluginRegistryScenarios | pub |
| 397 | fn | loadRegistryFromScenarioPlugins | pub |
| 408 | fn | expectOpenAllowWarnings | pub |
| 424 | fn | expectLoadedPluginProvenance | pub |
| 447 | fn | expectRegisteredHttpRoute | pub |
| 468 | fn | expectDuplicateRegistrationResult | pub |
| 491 | fn | expectPluginSourcePrecedence | pub |
| 519 | fn | expectPluginOriginAndStatus | pub |
| 535 | fn | expectRegistryErrorDiagnostic | pub |
| 551 | fn | expectDiagnosticContaining | pub |
| 568 | fn | expectNoDiagnosticContaining | pub |
| 583 | fn | createWarningLogger | pub |
| 591 | fn | createErrorLogger | pub |
| 600 | fn | createEscapingEntryFixture | (private) |
| 621 | fn | resolveLoadedPluginSource | (private) |
| 628 | fn | expectCachePartitionByPluginSource | pub |
| 647 | fn | expectCacheMissThenHit | pub |
| 659 | fn | createSetupEntryChannelPluginFixture | pub |
| 898 | fn | createEnvResolvedPluginFixture | pub |
| 921 | fn | expectEscapingEntryRejected | pub |
| 963 | fn | createStartupTraceRecorder | pub |
| 978 | fn | collectStartupTraceMetrics | pub |
| 993 | fn | globalAfterEach0 | pub |
| 1000 | fn | globalAfterAll1 | pub |

## src/plugins/management-service-featured.test.ts (647 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | metadataSnapshot | (private) |
| 69 | fn | emptyMetadataSnapshot | (private) |
| 79 | fn | hostedCatalog | (private) |
| 88 | fn | hostedFeedEntry | (private) |

## src/plugins/management-service.test.ts (1093 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 105 | fn | configSnapshot | (private) |
| 122 | fn | metadataSnapshot | (private) |
| 166 | fn | emptyMetadataSnapshot | (private) |
| 421 | fn | resolve | (private) |

## src/plugins/management-service.ts (1333 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | ManagedPluginCatalogEntry | (private) |
| 90 | type | ManagedPluginCatalog | (private) |
| 96 | type | ManagedPluginInstallRequest | (private) |
| 105 | class | ManagedPluginLifecycleError | pub |
| 130 | type | OfficialCatalogResult | (private) |
| 139 | fn | officialCatalogCacheKey | (private) |
| 144 | fn | clearManagedPluginOfficialCatalogCache | pub |
| 148 | fn | resolveCatalogManifestIcon | (private) |
| 155 | fn | resolveCatalogEntryIcon | (private) |
| 162 | fn | mergeCatalogMetadata | (private) |
| 207 | type | CatalogPackageSourceIdentity | (private) |
| 212 | fn | resolveCatalogPackageSourceIdentities | (private) |
| 226 | fn | matchesBundledCatalogIdentity | (private) |
| 243 | fn | overlayBundledOfficialPluginCatalogMetadata | (private) |
| 278 | fn | loadOfficialCatalog | (private) |
| 298 | fn | normalizeKinds | (private) |
| 305 | fn | normalizeCatalogMetadata | (private) |
| 323 | fn | normalizeFeaturedAt | (private) |
| 327 | fn | resolveCatalogInstallAction | (private) |
| 343 | fn | derivePluginCategory | (private) |
| 380 | fn | firstPluginError | (private) |
| 389 | fn | compareCatalogEntries | (private) |
| 416 | fn | resolveInstalledOfficialCatalogEntry | (private) |
| 433 | fn | resolveOfficialCatalogIconUrl | (private) |
| 443 | type | PluginMetadataSnapshot | (private) |
| 444 | type | PluginIndexRecord | (private) |
| 446 | fn | resolveInstalledHostedOfficialEntry | (private) |
| 526 | fn | resolvePluginIconUrlFromCatalogFacts | (private) |
| 553 | fn | resolveManagedPluginIconUrl | pub |
| 570 | fn | normalizeManagedCatalogIconUrl | (private) |
| 586 | fn | resolveManagedSetupCatalogIconUrl | pub |
| 611 | fn | listManagedPlugins | pub |
| 708 | fn | entryPackageInstalled | (private) |
| 767 | fn | assertValidConfigSnapshot | (private) |
| 792 | fn | readPluginMutationSnapshot | (private) |
| 803 | fn | createSilentRuntime | (private) |
| 813 | fn | createInstallLogger | (private) |
| 820 | fn | resolveOfficialEntryById | (private) |
| 828 | fn | resolveDeclaredOfficialPluginId | (private) |
| 839 | fn | resolveOfficialEntryByClawHubPackage | (private) |
| 854 | fn | resolveHostedOfficialEntryByClawHubPackage | (private) |
| 867 | fn | buildClawHubSpec | (private) |
| 875 | fn | throwInstallFailure | (private) |
| 895 | fn | installRecordOwnsTarget | (private) |
| 904 | fn | cleanupFailedManagedPluginInstall | (private) |
| 955 | fn | throwPersistenceFailureWithCleanupWarnings | (private) |
| 976 | fn | persistManagedPluginInstall | (private) |
| 1002 | fn | installFromClawHub | (private) |
| 1072 | fn | installFromOfficialCatalog | (private) |
| 1150 | fn | installManagedPlugin | pub |
| 1194 | fn | setManagedPluginEnabled | pub |
| 1265 | fn | uninstallManagedPlugin | pub |
| 1330 | fn | formatManagedPluginLifecycleError | pub |

## src/plugins/manifest-registry-installed.test.ts (735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | makeTempDir | (private) |
| 29 | fn | writePlugin | (private) |
| 49 | fn | createIndex | (private) |
| 80 | fn | fileSignature | (private) |
| 89 | fn | createIndexWithFileSignatures | (private) |
| 100 | fn | deepFreeze | (private) |
| 115 | fn | writePackageManifest | (private) |
| 137 | fn | createIndexWithPackageJson | (private) |
| 155 | fn | createIndexWithUnhashedPackageJson | (private) |

## src/plugins/manifest-registry-installed.ts (641 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | InstalledPackageMetadata | (private) |
| 48 | fn | clearInstalledManifestRegistryProcessCaches | (private) |
| 56 | fn | isDeepFrozenJsonLike | (private) |
| 71 | fn | hasPersistedFileSignatures | (private) |
| 79 | fn | isInstalledManifestRegistryIndexFingerprintCacheable | (private) |
| 85 | fn | isRelativePathInsideOrEqual | (private) |
| 94 | fn | resolvePackageJsonPath | (private) |
| 122 | fn | safeFileSignature | (private) |
| 134 | fn | formatFileSignature | (private) |
| 141 | fn | rememberInstalledPackageMetadata | (private) |
| 159 | fn | rememberInstalledPackageJsonPath | (private) |
| 177 | fn | trimInstalledManifestRegistryRealpathCache | (private) |
| 190 | fn | buildInstalledPackageJsonPathCacheKey | (private) |
| 202 | fn | buildInstalledPackageMetadataCacheKey | (private) |
| 216 | fn | buildInstalledManifestRegistryIndexKey | (private) |
| 270 | fn | resolveInstalledManifestRegistryIndexFingerprint | pub |
| 284 | fn | resolveInstalledPluginRootDir | (private) |
| 288 | fn | resolveFallbackPluginSource | (private) |
| 299 | fn | normalizePackageChannelExposure | (private) |
| 317 | fn | normalizePackageChannelConfiguredState | (private) |
| 344 | fn | normalizePackageChannelPersistedAuthState | (private) |
| 360 | fn | normalizePackageChannelDoctorCapabilities | (private) |
| 403 | fn | normalizePackageChannelCliOptions | (private) |
| 433 | fn | normalizePersistedPackageChannel | (private) |
| 504 | fn | resolveInstalledPackageMetadata | (private) |
| 566 | fn | toPluginCandidate | (private) |
| 595 | fn | loadPluginManifestRegistryForInstalledIndex | pub |

## src/plugins/manifest-registry.test.ts (3229 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | chmodSafeDir | (private) |
| 28 | fn | mkdirSafe | (private) |
| 33 | fn | makeTempDir | (private) |
| 37 | fn | makeOpenClawDevSourceRoot | (private) |
| 45 | fn | writeManifest | (private) |
| 49 | fn | writeTextFile | (private) |
| 54 | fn | setupBundleFixture | (private) |
| 72 | fn | createPluginCandidate | (private) |
| 102 | fn | createMsteamsClawHubInstallRecord | (private) |
| 117 | fn | resolveMsteamsClawHubTrust | (private) |
| 136 | fn | resolveDiffsNpmTrust | (private) |
| 163 | fn | loadRegistry | (private) |
| 169 | fn | hermeticEnv | (private) |
| 178 | fn | countDuplicateWarnings | (private) |
| 185 | fn | hasPluginIdMismatchWarning | (private) |
| 193 | fn | expectRegistryDiagnosticContains | (private) |
| 200 | fn | expectNoRegistryDiagnosticContains | (private) |
| 207 | fn | requireRecord | (private) |
| 215 | fn | expectRecordFields | (private) |
| 227 | fn | expectArrayIncludesAll | (private) |
| 234 | fn | expectDiagnosticFields | (private) |
| 258 | fn | prepareLinkedManifestFixture | (private) |
| 291 | fn | loadSingleCandidateRegistry | (private) |
| 305 | fn | loadRegistryForMinHostVersionCase | (private) |
| 329 | fn | loadRegistryForPluginApiCase | (private) |
| 358 | fn | hasUnsafeManifestDiagnostic | (private) |
| 362 | fn | expectUnsafeWorkspaceManifestRejected | (private) |
| 379 | fn | createDuplicateCandidateRegistry | (private) |
| 405 | fn | createManifestPluginRoot | (private) |
| 425 | fn | loadBundleRegistry | (private) |
| 443 | fn | expectPluginRoot | (private) |
| 454 | fn | expectCachedPluginRoot | (private) |

## src/plugins/manifest-registry.ts (1270 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | resolvePluginSourcePath | (private) |
| 89 | fn | isPluginRootPath | (private) |
| 117 | fn | resolveManifestPluginSourcePath | (private) |
| 126 | fn | pushDiagnostic | (private) |
| 172 | type | PluginManifestContractListKey | pub |
| 193 | type | SeenIdEntry | (private) |
| 207 | type | PluginManifestRecord | pub |
| 284 | type | PluginManifestRegistry | pub |
| 289 | type | BundledChannelConfigCollector | pub |
| 295 | fn | rejectCaseFoldedIdCollisions | (private) |
| 327 | fn | safeStatMtimeMs | (private) |
| 335 | fn | normalizePreferredPluginIds | (private) |
| 339 | fn | mergePackageChannelMetaIntoChannelConfigs | (private) |
| 381 | fn | mergeContractLists | (private) |
| 393 | fn | mergeManifestContracts | (private) |
| 434 | fn | mergeCatalogChannelConfigs | (private) |
| 485 | fn | mergeManifestCatalog | (private) |
| 505 | fn | buildRecord | (private) |
| 647 | fn | buildBundleRecord | (private) |
| 700 | fn | pushNonBundledChannelConfigDescriptorDiagnostic | (private) |
| 739 | fn | pushManifestCompatibilityDiagnostics | (private) |
| 747 | fn | dedupePluginDiagnostics | (private) |
| 761 | fn | matchesInstalledPluginRecord | (private) |
| 810 | fn | npmSpecMatchesPackage | (private) |
| 821 | fn | isTrustedOfficialPluginInstall | (private) |
| 881 | fn | resolveDuplicatePrecedenceRank | (private) |
| 922 | fn | isIntentionalInstalledBundledDuplicate | (private) |
| 954 | fn | isSameGlobalPackageDuplicate | (private) |
| 970 | fn | loadPluginManifestRegistry | pub |
| 1135 | fn | schemaCacheKey | (private) |
| 1176 | fn | samePlugin | (private) |
| 1255 | fn | loadBundledPluginManifestRegistry | pub |

## src/plugins/manifest.ts (2134 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | isCoreReservedPluginId | pub |
| 43 | type | PluginManifestLoadCacheEntry | (private) |
| 53 | type | PluginManifestChannelConfig | pub |
| 63 | type | PluginManifestChannelCommandDefaults | pub |
| 68 | type | PluginManifestModelSupport | pub |
| 81 | type | PluginManifestModelCatalog | pub |
| 83 | type | PluginManifestModelPricingModelIdTransform | pub |
| 85 | type | PluginManifestModelPricingSource | pub |
| 91 | type | PluginManifestModelPricingProvider | pub |
| 97 | type | PluginManifestModelPricing | pub |
| 101 | type | PluginManifestModelIdPrefixRule | (private) |
| 106 | type | PluginManifestModelIdNormalizationProvider | pub |
| 113 | type | PluginManifestModelIdNormalization | pub |
| 117 | type | PluginManifestProviderEndpoint | pub |
| 135 | type | PluginManifestProviderRequestProvider | (private) |
| 143 | type | PluginManifestProviderRequest | pub |
| 147 | type | PluginManifestSecretProviderIntegration | pub |
| 163 | type | PluginManifestActivationCapability | pub |
| 165 | type | PluginManifestActivation | pub |
| 191 | type | PluginManifestDefaultPlatform | (private) |
| 193 | type | PluginManifestSetupProvider | (private) |
| 208 | type | PluginManifestSetupProviderAuthEvidence | (private) |
| 225 | type | PluginManifestSetup | pub |
| 239 | type | PluginManifestQaRunner | pub |
| 246 | type | PluginManifestConfigLiteral | (private) |
| 248 | type | PluginManifestDangerousConfigFlag | (private) |
| 258 | type | PluginManifestSecretInputPath | (private) |
| 270 | type | PluginManifestSecretInputContracts | (private) |
| 280 | type | PluginManifestConfigContracts | pub |
| 299 | type | PluginManifestCatalog | pub |
| 304 | type | PluginManifest | pub |
| 407 | type | PluginManifestContracts | pub |
| 439 | type | PluginManifestMediaUnderstandingCapability | (private) |
| 441 | type | PluginManifestMediaUnderstandingProviderMetadata | pub |
| 457 | type | PluginManifestProviderBaseUrlGuard | (private) |
| 463 | type | PluginManifestCapabilityProviderAuthSignal | pub |
| 468 | type | PluginManifestCapabilityProviderModeConfigSignal | (private) |
| 475 | type | PluginManifestCapabilityProviderConfigSignal | pub |
| 484 | type | PluginManifestCapabilityProviderMetadata | pub |
| 492 | type | PluginManifestToolMetadata | pub |
| 498 | type | PluginManifestProviderAuthChoice | (private) |
| 545 | type | PluginManifestOnboardingScope | (private) |
| 547 | type | PluginManifestLoadResult | (private) |
| 551 | fn | normalizeStringListRecord | (private) |
| 570 | fn | normalizeStringRecord | (private) |
| 588 | fn | normalizeMediaUnderstandingCapabilityRecord | (private) |
| 607 | fn | normalizeMediaUnderstandingPriorityRecord | (private) |
| 627 | fn | normalizeMediaUnderstandingCapabilities | (private) |
| 636 | fn | normalizeMediaUnderstandingNativeDocumentInputs | (private) |
| 641 | fn | normalizeMediaUnderstandingDocumentModels | (private) |
| 661 | fn | normalizeMediaUnderstandingProviderMetadata | (private) |
| 695 | fn | normalizeProviderBaseUrlGuard | (private) |
| 714 | fn | normalizeCapabilityProviderAuthSignals | (private) |
| 738 | fn | normalizeCapabilityProviderModeConfigSignal | (private) |
| 757 | fn | normalizeCapabilityProviderConfigSignals | (private) |
| 792 | fn | normalizeCapabilityProviderMetadataEntry | (private) |
| 810 | fn | normalizeCapabilityProviderMetadata | (private) |
| 830 | fn | normalizePluginToolMetadata | (private) |
| 855 | fn | normalizeManifestCatalog | (private) |
| 871 | fn | normalizeManifestContracts | (private) |
| 930 | fn | isManifestConfigLiteral | (private) |
| 939 | fn | normalizeManifestDangerousConfigFlags | (private) |
| 959 | fn | normalizeManifestSecretInputPaths | (private) |
| 985 | fn | normalizeManifestConfigContracts | (private) |
| 1018 | fn | normalizeManifestModelSupport | (private) |
| 1033 | fn | normalizeManifestModelPricingSource | (private) |
| 1054 | fn | normalizeManifestModelPricingProvider | (private) |
| 1070 | fn | normalizeManifestModelPricing | (private) |
| 1096 | fn | normalizeManifestModelIdPrefixRules | (private) |
| 1117 | fn | normalizeManifestModelIdNormalizationProvider | (private) |
| 1149 | fn | normalizeManifestModelIdNormalization | (private) |
| 1175 | fn | normalizeManifestProviderEndpoints | (private) |
| 1216 | fn | normalizeManifestProviderRequestProvider | (private) |
| 1240 | fn | normalizeManifestProviderRequest | (private) |
| 1266 | fn | normalizeManifestStringArray | (private) |
| 1292 | fn | normalizeManifestTrimmedStringArray | (private) |
| 1304 | fn | normalizeManifestPositiveInteger | (private) |
| 1310 | fn | normalizeManifestSecretProviderIntegrations | (private) |
| 1371 | fn | normalizeManifestActivation | pub |
| 1419 | fn | normalizeManifestDefaultPlatforms | (private) |
| 1426 | fn | normalizeManifestSetupProviders | (private) |
| 1454 | fn | normalizeManifestSetupProviderAuthEvidence | (private) |
| 1490 | fn | normalizeManifestSetup | (private) |
| 1508 | fn | normalizeManifestQaRunners | (private) |
| 1530 | fn | normalizeManifestHttpsUrl | (private) |
| 1550 | fn | normalizeProviderAuthChoices | (private) |
| 1626 | fn | normalizeChannelConfigs | (private) |
| 1666 | fn | normalizeManifestChannelCommandDefaults | pub |
| 1686 | fn | resolvePluginManifestPath | (private) |
| 1696 | fn | buildPluginManifestLoadCacheKey | (private) |
| 1716 | fn | getCachedPluginManifestLoadResult | (private) |
| 1732 | fn | setCachedPluginManifestLoadResult | (private) |
| 1745 | fn | parsePluginKind | (private) |
| 1755 | fn | loadPluginManifest | pub |
| 1952 | type | PluginPackageChannelApprovalFlag | (private) |
| 1954 | type | PluginPackageChannel | pub |
| 1997 | type | PluginPackageChannelDoctorCapabilities | pub |
| 2004 | type | PluginPackageChannelCliOption | (private) |
| 2010 | type | PluginPackageInstall | pub |
| 2021 | type | OpenClawPackageStartup | (private) |
| 2029 | type | OpenClawPackageSetupFeatures | (private) |
| 2035 | type | OpenClawPackageCompat | (private) |
| 2039 | type | OpenClawPackageBuild | pub |
| 2043 | type | OpenClawPackageManifest | pub |
| 2067 | type | PackageExtensionResolution | pub |
| 2073 | type | ManifestKey | (private) |
| 2075 | type | PackageManifest | pub |
| 2083 | fn | getPackageManifestMetadata | pub |
| 2092 | fn | resolvePackageExtensionEntries | pub |

## src/plugins/marketplace.test.ts (1388 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | listMarketplaceDownloadTempDirs | (private) |
| 66 | fn | writeMarketplaceManifest | (private) |
| 73 | fn | writeRemoteMarketplaceFixture | (private) |
| 94 | fn | writeLocalMarketplaceFixture | (private) |
| 105 | fn | mockRemoteMarketplaceClone | (private) |
| 123 | fn | mockRemoteMarketplaceCloneWithOutsideSymlink | (private) |
| 146 | fn | expectRemoteMarketplaceError | (private) |
| 158 | fn | installPluginInput | (private) |
| 166 | fn | fetchGuardInput | (private) |
| 174 | fn | expectMarketplaceInstallSuccess | (private) |
| 196 | fn | expectRemoteCloneCommand | (private) |
| 211 | fn | expectFetchDownloadCall | (private) |
| 218 | fn | cancelTrackedResponse | (private) |
| 237 | fn | expectRemoteMarketplaceInstallResult | (private) |
| 246 | fn | expectMarketplaceManifestListing | (private) |
| 268 | fn | expectLocalMarketplaceInstallResult | (private) |

## src/plugins/marketplace.ts (1358 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | MarketplaceLogger | (private) |
| 44 | type | MarketplaceEntrySource | (private) |
| 51 | type | MarketplacePluginEntry | (private) |
| 58 | type | MarketplaceManifest | (private) |
| 64 | type | LoadedMarketplace | (private) |
| 73 | type | MarketplaceManifestOrigin | (private) |
| 75 | type | ResolvedLocalMarketplaceSource | (private) |
| 80 | type | KnownMarketplaceRecord | (private) |
| 85 | type | MarketplacePluginListResult | (private) |
| 96 | type | MarketplaceInstallResult | (private) |
| 107 | type | MarketplaceShortcutResolution | (private) |
| 120 | fn | isGitUrl | (private) |
| 126 | fn | looksLikeGitHubRepoShorthand | (private) |
| 130 | fn | splitRef | (private) |
| 142 | fn | normalizeEntrySource | (private) |
| 246 | fn | marketplaceEntrySourceToInput | (private) |
| 262 | fn | marketplaceEntryGitRef | (private) |
| 276 | fn | isMutableGitDerivedSource | (private) |
| 280 | fn | marketplaceInstallPolicySource | (private) |
| 334 | fn | marketplaceInstallPolicyRequestKind | (private) |
| 358 | fn | parseMarketplaceManifest | (private) |
| 413 | fn | readClaudeKnownMarketplaces | (private) |
| 440 | fn | deriveMarketplaceRootFromManifestPath | (private) |
| 445 | fn | resolveLocalMarketplaceSource | (private) |
| 480 | fn | normalizeGitCloneSource | (private) |
| 524 | fn | cloneMarketplaceRepo | (private) |
| 589 | fn | loadMarketplace | (private) |
| 594 | fn | loadMarketplaceFromManifestFile | (private) |
| 729 | fn | resolveSafeMarketplaceDownloadFileName | (private) |
| 745 | fn | resolveMarketplaceDownloadTimeoutMs | (private) |
| 753 | fn | formatMarketplaceDownloadError | (private) |
| 760 | fn | hasStreamingResponseBody | (private) |
| 768 | fn | cancelUnreadMarketplaceResponseBody | (private) |
| 772 | fn | parseMarketplaceContentLength | (private) |
| 784 | fn | readMarketplaceChunkWithTimeout | (private) |
| 792 | fn | clear | (private) |
| 823 | fn | writeMarketplaceChunk | (private) |
| 837 | fn | streamMarketplaceResponseToFile | (private) |
| 878 | fn | downloadUrlToTempFile | (private) |
| 978 | fn | ensureInsideMarketplaceRoot | (private) |
| 1042 | fn | validateMarketplaceManifest | (private) |
| 1095 | fn | resolveMarketplaceEntryInstallPath | (private) |
| 1199 | fn | listMarketplacePlugins | pub |
| 1223 | fn | resolveMarketplaceInstallShortcut | pub |
| 1269 | fn | installPluginFromMarketplace | pub |

## src/plugins/memory-state.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | MemoryPromptSectionParams | pub |
| 18 | type | MemoryPromptSectionBuilder | pub |
| 25 | type | MemoryPromptSectionPreparer | (private) |
| 29 | type | PreparedMemoryPromptSection | pub |
| 40 | type | MemoryCorpusSearchResult | pub |
| 58 | type | MemoryCorpusGetResult | (private) |
| 73 | type | MemoryCorpusSupplement | pub |
| 91 | type | MemoryCorpusSupplementRegistration | (private) |
| 96 | type | MemoryPromptSupplementRegistration | (private) |
| 101 | type | MemoryPromptPreparationRegistration | (private) |
| 106 | type | MemoryFlushPlan | pub |
| 116 | type | MemoryFlushPlanResolver | pub |
| 121 | type | RegisteredMemorySearchManager | pub |
| 123 | type | MemoryRuntimeQmdConfig | (private) |
| 127 | type | MemoryRuntimeBackendConfig | (private) |
| 136 | type | MemoryPluginRuntime | pub |
| 168 | type | MemoryPluginPublicArtifactContentType | (private) |
| 170 | type | MemoryPluginPublicArtifact | pub |
| 179 | type | MemoryPluginPublicArtifactsProvider | pub |
| 183 | type | MemoryPluginCapability | pub |
| 190 | type | MemoryPluginCapabilityRegistration | (private) |
| 195 | type | MemoryPluginState | (private) |
| 211 | fn | registerMemoryCorpusSupplement | pub |
| 222 | fn | registerMemoryCapability | pub |
| 243 | fn | getMemoryCapabilityRegistration | pub |
| 252 | fn | listMemoryCorpusSupplements | pub |
| 255 | fn | registerMemoryPromptSupplement | pub |
| 266 | fn | registerMemoryPromptPreparation | pub |
| 277 | fn | buildSynchronousMemoryPromptSection | (private) |
| 294 | fn | cloneMemoryPromptSectionParams | (private) |
| 306 | fn | snapshotMemoryPromptContext | (private) |
| 318 | fn | preparedMemoryPromptContextMatches | (private) |
| 334 | fn | prepareMemoryPromptSection | pub |
| 366 | fn | runWithPreparedMemoryPromptSection | pub |
| 374 | fn | getActivePreparedMemoryPromptSection | pub |
| 378 | fn | buildMemoryPromptSection | pub |
| 396 | fn | normalizeMemoryPromptLines | (private) |
| 403 | fn | listMemoryPromptSupplements | pub |
| 406 | fn | listMemoryPromptPreparations | pub |
| 409 | fn | resolveMemoryFlushPlan | pub |
| 415 | fn | getMemoryRuntime | pub |
| 419 | fn | hasMemoryRuntime | pub |
| 423 | fn | cloneMemoryPublicArtifact | (private) |
| 435 | fn | isValidMemoryPublicArtifact | (private) |
| 447 | fn | listActiveMemoryPublicArtifacts | pub |
| 488 | fn | restoreMemoryPluginState | pub |
| 500 | fn | clearMemoryPluginState | pub |

## src/plugins/official-external-plugin-catalog.test.ts (1483 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | expectCatalogEntry | (private) |
| 37 | type | HostedCatalogConfig | (private) |
| 42 | type | ConfiguredHostedCatalogLoadParams | (private) |
| 45 | type | HostedCatalogLoadParams | (private) |
| 49 | fn | loadHostedCatalog | (private) |
| 59 | fn | createInMemoryHostedCatalogSnapshotStore | (private) |
| 76 | fn | hostedCatalogFeed | (private) |
| 99 | fn | signedHostedCatalogFeed | (private) |
| 145 | fn | signedCatalogConfig | (private) |
| 162 | fn | signedHostedCatalogSnapshot | (private) |
| 496 | fn | snapshotFor | (private) |

## src/plugins/official-external-plugin-catalog.ts (1525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ManifestKey | (private) |
| 20 | class | HostedCatalogSnapshotWriteError | (private) |
| 30 | type | OfficialExternalProviderAuthChoice | pub |
| 48 | type | OfficialExternalProviderCatalogProvider | (private) |
| 58 | type | OfficialExternalWebSearchProvider | pub |
| 74 | type | OfficialExternalPluginCatalogManifest | (private) |
| 98 | type | OfficialExternalPluginCatalogEntry | pub |
| 120 | type | OfficialExternalPluginCatalogInstallCandidate | (private) |
| 130 | type | OfficialExternalPluginCatalogSourceProfile | (private) |
| 144 | type | OfficialExternalPluginCatalogFeedProfile | (private) |
| 149 | type | OfficialExternalPluginCatalogFeedVerification | (private) |
| 159 | type | OfficialExternalPluginCatalogFeedSigningKey | (private) |
| 164 | type | OfficialExternalPluginCatalogProfileConfig | (private) |
| 170 | type | OfficialExternalPluginCatalogFeed | pub |
| 179 | type | HostedOfficialExternalPluginCatalogMetadata | pub |
| 187 | type | HostedOfficialExternalPluginCatalogSnapshot | pub |
| 195 | type | HostedOfficialExternalPluginCatalogSnapshotStore | pub |
| 200 | type | HostedOfficialExternalPluginCatalogTrustState | pub |
| 208 | type | HostedOfficialExternalPluginCatalogSnapshotMonotonicState | pub |
| 214 | type | HostedOfficialExternalPluginCatalogLoadResult | pub |
| 240 | type | FetchLike | (private) |
| 242 | type | OfficialExternalProviderContract | (private) |
| 278 | fn | parseOfficialExternalPluginCatalogTimestamp | pub |
| 301 | fn | isOfficialExternalPluginCatalogSequence | pub |
| 305 | fn | isOfficialExternalPluginCatalogFeed | pub |
| 331 | fn | parseOfficialExternalPluginCatalogEntries | (private) |
| 355 | fn | normalizeHostedCatalogHeader | (private) |
| 360 | fn | sha256Hex | (private) |
| 364 | fn | resolveHostedCatalogFeedUrl | (private) |
| 383 | fn | resolveOfficialExternalPluginCatalogProfileConfig | (private) |
| 398 | fn | resolveHostedCatalogFeedSource | (private) |
| 442 | fn | getOfficialExternalPluginCatalogSourceRefs | (private) |
| 448 | fn | getFeedEntryInstallCandidateRecords | (private) |
| 461 | fn | getFeedEntryInstallCandidates | (private) |
| 475 | fn | shouldRequireManifestInstallSourceRef | (private) |
| 510 | fn | getManifestInstallSourceRefCandidate | (private) |
| 532 | fn | validateOfficialExternalPluginCatalogEntrySourceRefs | (private) |
| 561 | fn | filterOfficialExternalPluginCatalogEntriesBySourceRefs | (private) |
| 573 | fn | parseHostedCatalogContentLength | (private) |
| 587 | fn | readHostedCatalogResponseText | (private) |
| 608 | fn | bundledOfficialExternalPluginCatalogEntries | (private) |
| 616 | fn | dedupeOfficialExternalPluginCatalogEntries | (private) |
| 629 | fn | resolveOfficialExternalPluginCatalogEntryKey | (private) |
| 647 | fn | formatHostedCatalogError | (private) |
| 651 | fn | bundledFallbackResult | (private) |
| 663 | fn | emptyBundledFallbackResult | (private) |
| 671 | fn | parseHostedCatalogFeedBody | (private) |
| 717 | class | HostedCatalogFeedTimestampError | (private) |
| 726 | fn | readOfficialExternalPluginCatalogInvalidTimestampSequence | (private) |
| 745 | fn | loadHostedCatalogSnapshotResult | (private) |
| 791 | fn | isHostedCatalogSignedFeedRollback | (private) |
| 807 | fn | assertSnapshotMatchesRequestValidators | (private) |
| 824 | fn | snapshotOrBundledFallbackResult | (private) |
| 868 | fn | resolveHostedCatalogSnapshotStore | (private) |
| 886 | fn | loadHostedOfficialExternalPluginCatalogEntries | (private) |
| 952 | fn | metadataBase | (private) |
| 1135 | fn | normalizeDefaultChoice | (private) |
| 1139 | fn | formatFeedInstallCandidateSpec | (private) |
| 1153 | fn | getFeedEntryCandidateSourceType | (private) |
| 1164 | fn | getPreferredFeedEntryInstallCandidate | (private) |
| 1188 | fn | resolveFeedEntryInstallCandidate | (private) |
| 1220 | fn | normalizeClawHubSha256ExpectedIntegrity | (private) |
| 1225 | fn | normalizeNpmExpectedIntegrity | (private) |
| 1234 | fn | getOfficialExternalPluginCatalogManifest | pub |
| 1241 | fn | resolveOfficialExternalPluginId | pub |
| 1253 | fn | resolveOfficialExternalPluginLookupIds | (private) |
| 1270 | fn | resolveOfficialExternalPluginLabel | pub |
| 1285 | fn | resolveOfficialExternalPluginInstall | pub |
| 1328 | fn | resolveOfficialExternalPluginCatalogProfileConfigFromConfig | (private) |
| 1334 | fn | loadConfiguredHostedOfficialExternalPluginCatalogEntries | pub |
| 1347 | fn | listOfficialExternalPluginCatalogEntries | pub |
| 1352 | fn | isOfficialExternalPluginId | pub |
| 1363 | fn | resolveOfficialExternalProviderContractPluginIds | pub |
| 1394 | fn | resolveOfficialExternalWebProviderContractPluginIdsForEnv | pub |
| 1426 | fn | resolveOfficialExternalProviderPluginIds | pub |
| 1457 | fn | resolveOfficialExternalProviderPluginIdsForEnv | pub |
| 1474 | fn | listOfficialExternalChannelCatalogEntries | pub |
| 1480 | fn | listOfficialExternalChannelEnvVars | pub |
| 1496 | fn | listOfficialExternalProviderCatalogEntries | pub |
| 1502 | fn | getOfficialExternalPluginCatalogEntry | pub |
| 1514 | fn | getOfficialExternalPluginCatalogEntryForPackage | pub |

## src/plugins/openai-compatible-embedding-provider.test.ts (925 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | createOpenAICompatibleEmbeddingProvider | (private) |
| 28 | type | CapturedRequest | (private) |
| 35 | type | FixtureResponse | (private) |
| 49 | type | OversizedStreamServer | (private) |
| 58 | fn | createOptions | (private) |
| 69 | fn | readJsonBody | (private) |
| 78 | fn | startEmbeddingServer | (private) |
| 146 | fn | startHangingErrorEmbeddingServer | (private) |
| 193 | fn | startOversizedSuccessEmbeddingServer | (private) |
| 222 | fn | cleanup | (private) |
| 226 | fn | onDrain | (private) |
| 230 | fn | onClose | (private) |

## src/plugins/package-entry-resolution.ts (687 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | ExtensionEntryValidation | (private) |
| 21 | type | RuntimeExtensionsResolution | (private) |
| 25 | type | PackageManifestStringList | (private) |
| 27 | fn | runtimeExtensionsLengthMismatchMessage | (private) |
| 37 | fn | readPackageManifestStringList | (private) |
| 58 | fn | resolvePackageRuntimeExtensionEntries | (private) |
| 86 | fn | missingCompiledRuntimeEntryMessage | (private) |
| 94 | fn | validatePackageExtensionEntry | (private) |
| 143 | fn | validatePackageExtensionEntriesForInstall | pub |
| 336 | fn | resolvePackageEntrySource | (private) |
| 402 | fn | shouldInferBuiltRuntimeEntry | (private) |
| 406 | fn | shouldRequireBuiltRuntimeEntry | (private) |
| 410 | fn | resolveSafePackageEntry | (private) |
| 462 | fn | resolveOptionalExistingPackageEntrySource | (private) |
| 479 | fn | resolvePackageRuntimeEntrySource | (private) |
| 604 | fn | resolvePackageSetupSource | pub |
| 640 | fn | resolvePackageRuntimeExtensionSources | pub |

## src/plugins/plugin-lookup-table.test.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | createManifestRecord | (private) |
| 56 | fn | createIndex | (private) |
| 105 | fn | expectStaleMetadataSnapshotRebuild | (private) |

## src/plugins/plugin-metadata-snapshot.memo.test.ts (994 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | tempStateDir | (private) |
| 54 | fn | touchPersistedIndex | (private) |
| 78 | fn | writeJson | (private) |
| 83 | fn | writePersistedIndex | (private) |
| 131 | fn | writeRecoverableNpmPlugin | (private) |
| 156 | fn | writePersistedInstallRecords | (private) |
| 176 | fn | makeIndex | (private) |
| 214 | fn | makeManifestRegistry | (private) |

## src/plugins/plugin-metadata-snapshot.ts (750 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | PluginMetadataSnapshotMemo | (private) |
| 48 | type | PersistedRegistryMemoState | (private) |
| 58 | fn | clearLoadPluginMetadataSnapshotMemo | pub |
| 89 | fn | directoryChildPackageJsonFingerprint | (private) |
| 105 | fn | stableMemoValue | (private) |
| 119 | fn | pickMemoRelevantEnv | (private) |
| 128 | fn | resolvePluginMetadataSnapshotMemoEnvFingerprint | pub |
| 132 | fn | throwReadonlyPluginMetadataMutation | (private) |
| 136 | fn | freezeSnapshotValue | (private) |
| 173 | fn | freezePluginMetadataSnapshot | (private) |
| 177 | fn | resolvePersistedRegistryFastMemoFingerprint | (private) |
| 205 | fn | resolvePersistedRegistryMemoContextHash | (private) |
| 219 | fn | resolvePersistedRegistryMemoLookupContextHash | (private) |
| 231 | fn | resolvePersistedRegistryMemoState | (private) |
| 263 | fn | resolvePersistedRegistryMemoStateForLookup | (private) |
| 301 | fn | resolveProvidedIndexMemoState | (private) |
| 313 | fn | findPluginMetadataSnapshotMemo | (private) |
| 326 | fn | rememberPluginMetadataSnapshotMemo | (private) |
| 333 | fn | computePluginMetadataSnapshotMemoKey | (private) |
| 366 | fn | resolvePluginMetadataControlPlaneFingerprint | (private) |
| 375 | fn | indexesMatch | (private) |
| 388 | fn | cloneSnapshotInput | (private) |
| 392 | fn | normalizeInstalledPluginIndex | (private) |
| 408 | fn | resolvePluginMetadataSnapshotPluginIds | (private) |
| 419 | fn | isPluginMetadataSnapshotCompatible | pub |
| 456 | fn | appendOwner | (private) |
| 468 | fn | freezeOwnerMap | (private) |
| 474 | fn | buildPluginMetadataOwnerMaps | (private) |
| 546 | fn | listPluginOriginsFromMetadataSnapshot | pub |
| 554 | fn | loadPluginMetadataSnapshot | pub |
| 611 | fn | canMemoizePluginMetadataSnapshotResult | (private) |
| 628 | fn | resolvePluginMetadataSnapshot | pub |
| 670 | fn | loadPluginMetadataSnapshotImpl | (private) |

## src/plugins/plugin-module-loader-cache.test.ts (782 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | loadCachedPluginModuleLoader | (private) |
| 35 | fn | asPluginModuleLoaderFactory | (private) |
| 39 | fn | requireRecord | (private) |
| 46 | fn | callArg | (private) |
| 55 | fn | expectJitiOptions | (private) |
| 69 | fn | expectNativeOptions | (private) |
| 77 | fn | expectStats | (private) |

## src/plugins/plugin-registry-snapshot.test.ts (1128 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | makeTempDir | (private) |
| 38 | fn | createHermeticEnv | (private) |
| 47 | fn | writeManifestlessClaudeBundle | (private) |
| 52 | fn | writePackagePlugin | (private) |
| 82 | fn | writeBundledPlugin | (private) |
| 106 | fn | mockLinuxMountInfo | (private) |
| 120 | fn | createCandidate | (private) |
| 142 | fn | replaceFilePreservingSizeAndMtime | (private) |
| 149 | fn | fileHash | (private) |
| 153 | fn | fileSignature | (private) |
| 162 | fn | createManifestlessClaudeBundleIndex | (private) |
| 176 | fn | expectDiagnosticsContainCode | (private) |
| 180 | fn | expectDiagnosticsContainSource | (private) |
| 187 | fn | expectDiagnosticsDoNotContainSource | (private) |
| 194 | fn | requirePluginRecord | (private) |
| 205 | fn | dropStartupConfigPaths | (private) |

## src/plugins/plugin-registry-snapshot.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | PluginRegistrySnapshot | pub |
| 45 | type | PluginRegistryRecord | pub |
| 46 | type | PluginRegistryInspection | (private) |
| 48 | type | PluginRegistrySnapshotDiagnosticCode | (private) |
| 53 | type | PluginRegistrySnapshotDiagnostic | pub |
| 59 | type | PluginRegistrySnapshotResult | (private) |
| 82 | type | PluginRegistrySnapshotMemo | (private) |
| 89 | fn | clearLoadPluginRegistrySnapshotMemo | (private) |
| 95 | type | LoadPluginRegistryParams | pub |
| 101 | type | GetPluginRecordParams | (private) |
| 105 | fn | pickRegistrySnapshotMemoEnv | (private) |
| 114 | fn | canMemoizePluginRegistrySnapshot | (private) |
| 127 | fn | resolvePluginRegistrySnapshotMemoKey | (private) |
| 158 | fn | fingerprintPluginSourceRoots | (private) |
| 178 | fn | sourceRootFingerprint | (private) |
| 188 | fn | directoryChildFingerprint | (private) |
| 203 | fn | findPluginRegistrySnapshotMemo | (private) |
| 221 | fn | rememberPluginRegistrySnapshotMemo | (private) |
| 235 | fn | canReuseCurrentPluginMetadataSnapshot | (private) |
| 248 | fn | loadCurrentPluginRegistrySnapshotResult | (private) |
| 271 | fn | hasMissingPersistedPluginSource | (private) |
| 285 | fn | hasMismatchedPersistedConfigPathPlugins | (private) |
| 313 | fn | resolveComparablePath | (private) |
| 321 | fn | isRelativePathInsideOrEqual | (private) |
| 330 | fn | isPathInsideOrEqual | (private) |
| 338 | fn | hasMismatchedPersistedBundledPluginRoot | (private) |
| 359 | fn | isAllowedPersistedBundledPluginRoot | (private) |
| 403 | fn | sourcePluginOptsOutOfBundledDist | (private) |
| 408 | fn | isSourceCheckoutBundledPluginRoot | (private) |
| 418 | fn | hashExistingFile | (private) |
| 426 | fn | resolveRecordPackageJsonPath | (private) |
| 444 | fn | hasStalePersistedPluginDiagnostics | (private) |
| 457 | fn | hasStalePersistedPluginMetadata | (private) |
| 494 | fn | loadSnapshotInstallRecords | (private) |
| 506 | fn | hasRecoveredInstallRecordsMissingFromPersistedIndex | (private) |
| 528 | fn | loadPluginRegistrySnapshotWithMetadata | pub |
| 653 | fn | resolveSnapshot | (private) |
| 657 | fn | loadPluginRegistrySnapshot | pub |
| 662 | fn | getPluginRecord | pub |
| 666 | fn | isPluginEnabled | pub |
| 670 | fn | inspectPluginRegistry | pub |
| 676 | fn | refreshPluginRegistry | pub |

## src/plugins/plugin-registry.test.ts (1047 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | resolveProviderOwners | (private) |
| 55 | fn | listPluginRecords | (private) |
| 65 | fn | makeTempDir | (private) |
| 69 | fn | hermeticEnv | (private) |
| 78 | fn | hashFile | (private) |
| 82 | fn | createCandidate | (private) |
| 137 | fn | createIndex | (private) |
| 172 | fn | createPersistableIndex | (private) |
| 181 | fn | requireRecord | (private) |
| 188 | fn | requireArray | (private) |
| 193 | fn | expectFields | (private) |
| 199 | fn | expectPluginRecordFields | (private) |
| 203 | fn | expectDiagnosticCodes | (private) |
| 211 | fn | expectInstallRecord | (private) |
| 220 | fn | expectSnapshotPluginIds | (private) |

## src/plugins/plugin-sdk-native-resolver.test.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | NativeEsmLazyImportProbe | (private) |
| 18 | fn | writeJsonFile | (private) |
| 23 | fn | writeFakeOpenClawPackage | (private) |
| 63 | fn | writeExternalPluginEntry | (private) |
| 74 | fn | writeNormalizationCoreSource | (private) |
| 81 | fn | writeInternalCorePackageSource | (private) |
| 92 | fn | addFakePluginSdkDistExport | (private) |

## src/plugins/provider-auth-choice.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | UpsertAuthProfileParams | (private) |
| 36 | type | ApplyProviderAuthChoiceParams | (private) |
| 53 | type | ApplyProviderAuthChoiceResult | (private) |
| 59 | type | PreparedApplyProviderAuthChoiceResult | (private) |
| 64 | fn | preparedWithoutAuthProfiles | (private) |
| 74 | fn | formatModelRefForDisplay | (private) |
| 81 | fn | restoreConfiguredPrimaryModel | (private) |
| 113 | fn | resolveConfiguredDefaultModelPrimary | (private) |
| 124 | fn | noteDefaultModelResult | (private) |
| 153 | fn | applyDefaultModelFromAuthChoice | (private) |
| 226 | type | ProviderAuthChoiceRuntime | (private) |
| 228 | fn | loadPluginProviderRuntime | (private) |
| 232 | fn | resolveManifestAuthChoiceScope | (private) |
| 246 | fn | withProviderPluginId | (private) |
| 249 | fn | runProviderPluginAuthMethodUnpersisted | pub |
| 289 | fn | applyProviderPluginAuthMethodResultConfig | pub |
| 318 | fn | runProviderPluginAuthMethod | pub |
| 384 | fn | prepareProviderPluginAuthMethod | (private) |
| 426 | fn | persistAuthProfiles | (private) |
| 450 | fn | prepareAuthChoiceLoadedPluginProvider | pub |
| 631 | fn | applyAuthChoiceLoadedPluginProvider | pub |
| 645 | fn | upsertAuthProfileWithLockOrThrow | (private) |

## src/plugins/provider-auth-choices.test.ts (727 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | createManifestPlugin | (private) |
| 66 | fn | createProviderAuthChoice | (private) |
| 70 | fn | setManifestPlugins | (private) |
| 87 | fn | expectResolvedProviderAuthChoices | (private) |
| 101 | fn | setSingleManifestProviderAuthChoices | (private) |

## src/plugins/provider-discovery.runtime.test.ts (892 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | createManifestPlugin | (private) |
| 68 | fn | createManifestPluginWithModelCatalog | (private) |
| 98 | fn | createManifestPluginWithMixedCatalogDiscovery | (private) |
| 141 | fn | createManifestPluginWithRuntimeDiscoveryOnly | (private) |
| 150 | fn | createManifestPluginWithEntryAndRuntimeDiscovery | (private) |
| 160 | fn | createManifestPluginWithoutDiscovery | (private) |
| 173 | fn | createProvider | (private) |
| 190 | fn | requireResolvePluginProvidersParams | (private) |
| 204 | fn | requireDiscoveredProviderIdsParams | (private) |

## src/plugins/provider-discovery.runtime.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ProviderDiscoveryModule | (private) |
| 32 | type | ProviderDiscoveryEntryResult | (private) |
| 44 | fn | resolveProviderDiscoveryDependencyRoot | (private) |
| 55 | fn | clearProviderDiscoveryModuleLoaders | (private) |
| 65 | fn | normalizeDiscoveryModule | (private) |
| 88 | fn | loadProviderDiscoveryModule | (private) |
| 111 | fn | hasLiveProviderDiscoveryHook | (private) |
| 115 | fn | hasProviderCatalogHook | (private) |
| 121 | fn | hasProviderAuthEnvCredential | (private) |
| 132 | fn | modelDefinitionCostFromManifestRow | (private) |
| 158 | fn | modelDefinitionFromManifestRow | (private) |
| 186 | fn | providerConfigFromManifestRows | (private) |
| 206 | fn | resolveManifestModelCatalogProviders | (private) |
| 242 | fn | resolveRuntimeManifestCatalogPluginIds | (private) |
| 274 | fn | resolveProviderDiscoveryEntryPlugins | (private) |
| 381 | fn | resolveSelectiveFullPluginIds | (private) |
| 396 | fn | listRuntimeManifestCatalogPluginIds | (private) |
| 400 | fn | resolveMissingEntryPluginIds | (private) |
| 406 | fn | resolveRuntimeEntryProviders | (private) |
| 419 | fn | withoutFullLoadedPluginEntries | (private) |
| 430 | fn | resolvePluginDiscoveryProvidersRuntime | pub |

## src/plugins/provider-install-catalog.test.ts (951 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | LoadOpenClawProviderIndex | (private) |
| 6 | type | LoadPluginRegistrySnapshot | (private) |
| 7 | type | ResolveManifestProviderAuthChoices | (private) |
| 9 | type | ListOfficialExternalProviderCatalogEntries | (private) |
| 11 | type | PluginInstallSourceInfo | (private) |
| 12 | type | InstalledPluginInstallRecordInfo | (private) |
| 14 | type | InstalledPluginIndexRecord | (private) |
| 72 | fn | registrySnapshot | (private) |
| 91 | fn | vllmPluginWithPackageInstall | (private) |
| 122 | fn | mockVllmAuthChoice | (private) |

## src/plugins/provider-plugin.types.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | type | ProviderPlugin | pub |

## src/plugins/provider-public-artifacts.test.ts (587 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | writeExternalPolicyFixture | (private) |
| 34 | fn | restoreBundledPluginEnv | (private) |
| 420 | fn | writePlugin | (private) |

## src/plugins/provider-runtime.test.ts (2685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ResolvePluginProviders | (private) |
| 21 | type | IsPluginProvidersLoadInFlight | (private) |
| 23 | type | ResolveCatalogHookProviderPluginIds | (private) |
| 25 | type | ResolveUsageHookProviderPluginContracts | (private) |
| 27 | type | ResolveExternalAuthProfileProviderPluginIds | (private) |
| 29 | type | ResolveOwningPluginIdsForProvider | (private) |
| 31 | type | ResolveBundledProviderPolicySurface | (private) |
| 142 | fn | createOpenAiCatalogProviderPlugin | (private) |
| 159 | fn | isRecord | (private) |
| 163 | fn | requireRecord | (private) |
| 170 | fn | firstMockArg | (private) |
| 174 | fn | expectRecordFields | (private) |
| 180 | fn | expectObjectOrArrayFields | (private) |
| 188 | fn | getLastResolvePluginProvidersParams | (private) |
| 193 | fn | expectProviderRuntimePluginLoad | (private) |
| 203 | fn | createDemoRuntimeContext | (private) |
| 213 | fn | createDemoProviderContext | (private) |
| 222 | fn | createDemoResolvedModelContext | (private) |
| 231 | fn | expectCalledOnce | (private) |
| 237 | fn | expectResolvedValues | (private) |
| 248 | fn | expectResolvedMatches | (private) |
| 261 | fn | expectResolvedAsyncValues | (private) |

## src/plugins/provider-runtime.ts (1076 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 97 | fn | matchesProviderPluginRef | (private) |
| 110 | fn | resolveProviderHookRefs | (private) |
| 123 | fn | matchesAnyProviderPluginRef | (private) |
| 127 | fn | hasExplicitProviderRuntimePluginActivation | (private) |
| 151 | fn | hasConfiguredModelProvider | (private) |
| 170 | fn | resetExternalAuthFallbackWarningCacheForTest | (private) |
| 177 | fn | resolveProviderPluginsForCatalogHooks | (private) |
| 206 | fn | runProviderDynamicModel | pub |
| 216 | fn | resolveProviderSystemPromptContribution | pub |
| 242 | fn | mergeProviderSystemPromptContributions | (private) |
| 264 | fn | mergeUniquePromptSections | (private) |
| 271 | fn | transformProviderSystemPrompt | pub |
| 289 | fn | resolveProviderTextTransforms | pub |
| 302 | fn | prepareProviderDynamicModel | pub |
| 312 | fn | shouldPreferProviderRuntimeResolvedModel | pub |
| 324 | fn | normalizeProviderResolvedModelWithPlugin | pub |
| 357 | fn | applyProviderResolvedTransportWithPlugin | pub |
| 399 | fn | normalizeProviderModelIdWithPlugin | pub |
| 414 | fn | normalizeProviderTransportWithPlugin | pub |
| 422 | fn | hasTransportChange | (private) |
| 456 | fn | normalizeProviderConfigWithPlugin | pub |
| 464 | fn | hasConfigChange | (private) |
| 482 | fn | applyProviderNativeStreamingUsageCompatWithPlugin | pub |
| 499 | fn | resolveProviderConfigApiKeyWithPlugin | pub |
| 519 | fn | resolveProviderReplayPolicyWithPlugin | pub |
| 529 | fn | sanitizeProviderReplayHistoryWithPlugin | pub |
| 539 | fn | validateProviderReplayTurnsWithPlugin | pub |
| 549 | fn | normalizeProviderToolSchemasWithPlugin | pub |
| 565 | fn | inspectProviderToolSchemasWithPlugin | pub |
| 581 | fn | resolveProviderReasoningOutputModeWithPlugin | pub |
| 600 | fn | resolveProviderStreamFn | pub |
| 615 | fn | resolveProviderTransportTurnStateWithPlugin | pub |
| 631 | fn | createProviderEmbeddingProvider | pub |
| 641 | fn | prepareProviderRuntimeAuth | pub |
| 664 | fn | resolveProviderUsageAuthWithPlugin | pub |
| 682 | fn | resolveProviderUsageSnapshotWithPlugin | pub |
| 721 | type | ProviderUsagePluginDescriptor | pub |
| 727 | fn | listProviderUsagePluginDescriptors | pub |
| 759 | fn | matchesProviderContextOverflowWithPlugin | pub |
| 775 | fn | classifyProviderFailoverReasonWithPlugin | pub |
| 792 | fn | resolveProviderPluginsForScopedHook | (private) |
| 816 | fn | hasStructuredFailoverDescriptor | (private) |
| 822 | fn | formatProviderAuthProfileApiKeyWithPlugin | pub |
| 832 | fn | refreshProviderOAuthCredentialWithPlugin | pub |
| 842 | fn | buildProviderAuthDoctorHintWithPlugin | pub |
| 852 | fn | resolveProviderCacheTtlEligibility | pub |
| 862 | fn | resolveProviderThinkingProfile | pub |
| 876 | fn | applyProviderConfigDefaultsWithPlugin | pub |
| 890 | fn | resolveProviderModernModelRef | pub |
| 900 | fn | buildProviderMissingAuthMessageWithPlugin | pub |
| 912 | fn | buildProviderUnknownModelHintWithPlugin | pub |
| 922 | fn | resolveProviderSyntheticAuthWithPlugin | pub |
| 996 | fn | resolveExternalAuthProfilesWithPlugins | pub |
| 1034 | fn | shouldDeferProviderSyntheticProfileAuthWithPlugin | pub |
| 1059 | fn | augmentModelCatalogWithProviderPlugins | pub |

## src/plugins/provider-self-hosted-setup.test.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | createUnboundedJsonStream | (private) |
| 67 | fn | createRuntime | (private) |
| 75 | fn | createContext | (private) |
| 109 | fn | readPrimaryModel | (private) |
| 114 | fn | configureSelfHostedTestProvider | (private) |
| 130 | fn | cancelTrackedResponse | (private) |

## src/plugins/provider-self-hosted-setup.ts (569 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | OpenAICompatModelsResponse | (private) |
| 58 | type | LlamaCppPropsResponse | (private) |
| 65 | fn | isReasoningModelHeuristic | (private) |
| 71 | fn | buildSelfHostedBaseUrlSsrFPolicy | (private) |
| 89 | fn | readPositiveInteger | (private) |
| 101 | fn | readSelfHostedDiscoveryJson | (private) |
| 115 | fn | cancelUnreadResponseBody | (private) |
| 121 | fn | resolveLlamaCppPropsUrl | (private) |
| 136 | fn | discoverLlamaCppRuntimeContextTokens | (private) |
| 178 | fn | discoverOpenAICompatibleLocalModels | pub |
| 278 | fn | applyProviderDefaultModel | pub |
| 300 | fn | buildOpenAICompatibleSelfHostedProviderConfig | (private) |
| 346 | type | OpenAICompatibleSelfHostedProviderSetupParams | (private) |
| 360 | type | OpenAICompatibleSelfHostedProviderPromptResult | (private) |
| 368 | fn | buildSelfHostedProviderAuthResult | (private) |
| 383 | fn | promptAndConfigureOpenAICompatibleSelfHostedProvider | pub |
| 433 | fn | promptAndConfigureOpenAICompatibleSelfHostedProviderAuth | pub |
| 440 | fn | discoverOpenAICompatibleSelfHostedProvider | pub |
| 475 | fn | buildMissingNonInteractiveModelIdMessage | (private) |
| 486 | fn | buildSelfHostedProviderCredential | (private) |
| 497 | fn | configureOpenAICompatibleSelfHostedProviderNonInteractive | pub |

## src/plugins/providers.test.ts (1825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ResolveRuntimePluginRegistry | (private) |
| 14 | type | ResolveCompatibleRuntimePluginRegistry | (private) |
| 16 | type | GetRuntimePluginRegistryForLoadOptions | (private) |
| 18 | type | LoadOpenClawPlugins | (private) |
| 19 | type | IsPluginRegistryLoadInFlight | (private) |
| 20 | type | LoadPluginManifestRegistry | (private) |
| 22 | type | LoadPluginMetadataSnapshot | (private) |
| 24 | type | ApplyPluginAutoEnable | (private) |
| 25 | type | SetActivePluginRegistry | (private) |
| 51 | fn | createManifestProviderPlugin | (private) |
| 87 | fn | setManifestPlugins | (private) |
| 94 | fn | setOwningProviderManifestPlugins | (private) |
| 118 | fn | setOwningProviderManifestPluginsWithWorkspace | (private) |
| 150 | fn | createProviderRegistrySnapshotFixture | (private) |
| 189 | fn | createMetadataSnapshotFixture | (private) |
| 192 | fn | ownerMap | (private) |
| 228 | fn | normalizeProviderForFixture | (private) |
| 232 | fn | listManifestContributionIdsForFixture | (private) |
| 246 | fn | resolvePluginContributionOwnersFixture | (private) |
| 263 | fn | resolveProviderOwnersFixture | (private) |
| 274 | fn | getLastMockCallArg | (private) |
| 286 | fn | getLastRuntimeRegistryCall | (private) |
| 293 | fn | expectRecordFields | (private) |
| 304 | fn | expectPluginConfigState | (private) |
| 325 | fn | expectLastRuntimeRegistryCall | (private) |
| 345 | fn | expectLastSetupRegistryCall | (private) |
| 364 | fn | expectResolvedProviders | (private) |
| 368 | fn | expectLastRuntimeRegistryLoad | (private) |
| 380 | fn | expectLastSetupRegistryLoad | (private) |
| 393 | fn | getLastResolvedPluginConfig | (private) |
| 404 | fn | getLastSetupLoadedPluginConfig | (private) |
| 419 | fn | createAutoEnabledProviderConfig | (private) |
| 434 | fn | expectAutoEnabledProviderLoad | (private) |
| 441 | fn | expectOwningPluginIds | (private) |
| 445 | fn | expectModelOwningPluginIds | (private) |
| 449 | fn | expectProviderRuntimeRegistryLoad | (private) |
| 486 | fn | loadSnapshot | (private) |

## src/plugins/providers.ts (864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | ProviderManifestLoadParams | (private) |
| 36 | type | NormalizedPluginsConfig | (private) |
| 37 | type | ProviderRegistryLoadParams | (private) |
| 40 | type | ProviderRefOwnership | (private) |
| 45 | fn | loadProviderRegistrySnapshot | (private) |
| 56 | fn | loadScopedProviderRegistry | (private) |
| 66 | fn | listRegistryPluginIds | (private) |
| 76 | fn | resolveProviderSurfacePluginIdSet | (private) |
| 89 | fn | pluginOwnsProviderRef | (private) |
| 120 | fn | resolvesRuntimeModelCatalogAugment | (private) |
| 127 | fn | resolveProviderOwnerPluginIds | (private) |
| 150 | fn | resolveEffectiveRegistryPluginActivation | (private) |
| 164 | fn | toManifestOwnerRecord | (private) |
| 172 | fn | withBundledProviderVitestCompat | pub |
| 180 | fn | resolveBundledProviderCompatPluginIds | pub |
| 210 | fn | resolveEnabledProviderPluginIds | pub |
| 229 | fn | resolveExternalAuthProfileProviderPluginIds | pub |
| 241 | fn | resolveRegistryManifestContractPluginIds | (private) |
| 272 | fn | resolveDiscoveredProviderPluginIds | pub |
| 305 | fn | isProviderPluginEligibleForSetupDiscovery | (private) |
| 334 | fn | resolveDiscoverableProviderOwnerPluginIds | pub |
| 356 | fn | isProviderPluginEligibleForRuntimeOwnerActivation | (private) |
| 379 | fn | resolveActivatableProviderOwnerPluginIds | pub |
| 398 | type | ModelSupportMatchKind | (private) |
| 400 | fn | resolveManifestRegistry | (private) |
| 436 | fn | stripModelProfileSuffix | (private) |
| 440 | fn | splitExplicitModelRef | (private) |
| 458 | fn | resolveModelSupportMatchKind | (private) |
| 481 | fn | classifyProviderRefOwnership | (private) |
| 491 | fn | listNormalizedOwnerMapPluginIds | (private) |
| 504 | fn | resolveOwningPluginIdsForProviderFromSnapshot | (private) |
| 523 | fn | resolvePreferredManifestPluginIds | (private) |
| 547 | fn | resolveOwningPluginIdsForProvider | pub |
| 596 | fn | resolveOwningPluginIdsForCliBackend | (private) |
| 654 | fn | resolveOwningPluginIdsForProviderRef | pub |
| 675 | fn | resolveProviderRefOwnership | pub |
| 700 | fn | resolveOwningPluginIdsForModelRef | pub |
| 754 | fn | resolveOwningPluginIdsForModelRefs | pub |
| 778 | fn | resolveCatalogHookProviderPluginIds | pub |
| 817 | type | UsageHookProviderPluginContract | (private) |
| 822 | fn | resolveUsageHookProviderPluginContracts | pub |

## src/plugins/registry-api.ts (628 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | normalizeLogger | (private) |
| 53 | fn | resolvePluginPath | (private) |
| 61 | fn | createPluginApiFactory | pub |
| 304 | fn | isLoadedRecordInRegistry | (private) |
| 306 | fn | isLoadedRecordInLiveRegistry | (private) |
| 311 | fn | isActivatingLoadedRecord | (private) |
| 316 | fn | shouldCommitWorkflowSideEffect | (private) |

## src/plugins/registry-registrars-host.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | normalizeHostHookString | (private) |
| 44 | fn | normalizeOptionalHostHookString | (private) |
| 54 | fn | normalizeHostHookStringList | (private) |
| 68 | fn | createHostRegistrars | pub |
| 119 | fn | registerSessionExtension | (private) |
| 203 | fn | registerTrustedToolPolicy | (private) |
| 281 | fn | registerToolMetadata | (private) |
| 350 | fn | registerControlUiDescriptor | (private) |
| 456 | fn | registerRuntimeLifecycle | (private) |
| 500 | fn | registerAgentEventSubscription | (private) |
| 545 | fn | registerSessionSchedulerJob | (private) |
| 624 | fn | registerSessionAction | (private) |
| 685 | fn | registerConversationBindingResolvedHandler | (private) |

## src/plugins/registry-registrars-providers.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | createProviderRegistrars | pub |
| 51 | fn | registerProvider | (private) |
| 85 | fn | registerAgentHarness | (private) |
| 139 | fn | registerCliBackend | (private) |
| 170 | fn | registerTextTransforms | (private) |
| 195 | fn | registerEmbeddingProvider | (private) |
| 291 | fn | registerWorkerProvider | (private) |
| 292 | fn | reject | (private) |
| 317 | fn | registerSpeechProvider | (private) |
| 336 | fn | registerRealtimeTranscriptionProvider | (private) |
| 358 | fn | registerRealtimeVoiceProvider | (private) |
| 380 | fn | registerMediaUnderstandingProvider | (private) |
| 392 | fn | registerTranscriptSourceProvider | (private) |
| 404 | fn | registerImageGenerationProvider | (private) |
| 421 | fn | registerVideoGenerationProvider | (private) |
| 438 | fn | registerMusicGenerationProvider | (private) |
| 455 | fn | registerWebFetchProvider | (private) |
| 464 | fn | registerWebSearchProvider | (private) |
| 473 | fn | registerMigrationProvider | (private) |

## src/plugins/registry-runtime.ts (816 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | fn | createPluginRuntimeResolver | pub |
| 102 | fn | resolveHarnessRegistration | (private) |
| 110 | fn | resolveHarnessRegistrationForSessionKey | (private) |
| 155 | fn | resolveLockedSessionHarnessRegistration | (private) |
| 470 | fn | getRuntimeProperty | (private) |
| 479 | fn | assertPluginStateAllowed | (private) |
| 699 | fn | resolveCurrentExecutionOwner | (private) |
| 815 | type | PluginRuntimeResolver | pub |

## src/plugins/registry-types.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | ChannelPlugin | (private) |
| 44 | type | CliBackendPlugin | (private) |
| 45 | type | ImageGenerationProviderPlugin | (private) |
| 46 | type | MediaUnderstandingProviderPlugin | (private) |
| 47 | type | TranscriptSourceProvider | (private) |
| 48 | type | MusicGenerationProviderPlugin | (private) |
| 49 | type | OpenClawPluginCliCommandDescriptor | (private) |
| 50 | type | OpenClawPluginCliRegistrar | (private) |
| 51 | type | OpenClawPluginCommandDefinition | (private) |
| 52 | type | PluginInteractiveHandlerRegistration | (private) |
| 54 | type | OpenClawPluginGatewayRuntimeScopeSurface | (private) |
| 56 | type | OpenClawGatewayDiscoveryService | (private) |
| 57 | type | OpenClawPluginHttpRouteHandler | (private) |
| 58 | type | OpenClawPluginHttpRouteMatch | (private) |
| 59 | type | OpenClawPluginHostedMediaResolver | (private) |
| 60 | type | OpenClawPluginReloadRegistration | (private) |
| 61 | type | OpenClawPluginSecurityAuditCollector | (private) |
| 63 | type | OpenClawPluginService | (private) |
| 64 | type | OpenClawPluginToolFactory | (private) |
| 65 | type | PluginConversationBindingResolvedEvent | (private) |
| 67 | type | TypedPluginHookRegistration | (private) |
| 68 | type | PluginLogger | (private) |
| 69 | type | PluginOrigin | (private) |
| 70 | type | PluginTextTransformRegistration | (private) |
| 71 | type | MigrationProviderPlugin | (private) |
| 72 | type | ProviderPlugin | (private) |
| 73 | type | RealtimeTranscriptionProviderPlugin | (private) |
| 74 | type | RealtimeVoiceProviderPlugin | (private) |
| 75 | type | SpeechProviderPlugin | (private) |
| 76 | type | VideoGenerationProviderPlugin | (private) |
| 77 | type | WebFetchProviderPlugin | (private) |
| 78 | type | WebSearchProviderPlugin | (private) |
| 79 | type | WorkerProvider | (private) |
| 80 | type | UnifiedModelCatalogProviderPlugin | (private) |
| 83 | type | PluginToolRegistration | pub |
| 95 | type | PluginCliRegistration | (private) |
| 107 | type | PluginHttpRouteRegistration | pub |
| 123 | type | PluginHostedMediaResolverRegistration | (private) |
| 131 | type | PluginChannelRegistration | pub |
| 141 | type | PluginChannelSetupRegistration | (private) |
| 152 | type | PluginProviderRegistration | (private) |
| 160 | type | PluginModelCatalogProviderRegistration | (private) |
| 168 | type | PluginSessionCatalogRegistration | (private) |
| 176 | type | PluginCliBackendRegistration | (private) |
| 184 | type | PluginTextTransformsRegistration | pub |
| 200 | type | PluginSpeechProviderRegistration | (private) |
| 201 | type | PluginEmbeddingProviderRegistration | (private) |
| 203 | type | PluginRealtimeTranscriptionProviderRegistration | (private) |
| 205 | type | PluginRealtimeVoiceProviderRegistration | (private) |
| 207 | type | PluginMediaUnderstandingProviderRegistration | (private) |
| 209 | type | PluginTranscriptsSourceProviderRegistration | (private) |
| 211 | type | PluginImageGenerationProviderRegistration | (private) |
| 213 | type | PluginVideoGenerationProviderRegistration | (private) |
| 215 | type | PluginMusicGenerationProviderRegistration | (private) |
| 217 | type | PluginWebFetchProviderRegistration | (private) |
| 218 | type | PluginWebSearchProviderRegistration | (private) |
| 219 | type | PluginWorkerProviderRegistration | (private) |
| 220 | type | PluginMigrationProviderRegistration | (private) |
| 221 | type | PluginMemoryEmbeddingProviderRegistration | (private) |
| 223 | type | PluginCodexAppServerExtensionFactoryRegistration | (private) |
| 231 | type | PluginAgentToolResultMiddlewareRegistration | pub |
| 240 | type | PluginAgentHarnessRegistration | (private) |
| 248 | type | PluginHookRegistration | (private) |
| 256 | type | PluginServiceRegistration | pub |
| 266 | type | PluginGatewayDiscoveryServiceRegistration | pub |
| 274 | type | PluginReloadRegistration | (private) |
| 282 | type | PluginNodeHostCommandRegistration | pub |
| 290 | type | PluginNodeInvokePolicyRegistration | (private) |
| 299 | type | PluginSecurityAuditCollectorRegistration | (private) |
| 307 | type | PluginCommandRegistration | pub |
| 315 | type | PluginInteractiveHandlerRegistryRegistration | (private) |
| 321 | type | PluginSessionExtensionRegistryRegistration | (private) |
| 329 | type | PluginTrustedToolPolicyRegistryRegistration | pub |
| 338 | type | PluginToolMetadataRegistryRegistration | (private) |
| 346 | type | PluginControlUiDescriptorRegistryRegistration | (private) |
| 354 | type | PluginRuntimeLifecycleRegistryRegistration | (private) |
| 362 | type | PluginAgentEventSubscriptionRegistryRegistration | (private) |
| 370 | type | PluginSessionSchedulerJobRegistryRegistration | (private) |
| 379 | type | PluginSessionActionRegistryRegistration | pub |
| 387 | type | PluginConversationBindingResolvedHandlerRegistration | (private) |
| 396 | type | PluginRecord | pub |
| 457 | type | PluginRegistry | pub |
| 514 | type | PluginRegistryParams | pub |

## src/plugins/registry.runtime-config.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | createTestRegistry | (private) |

## src/plugins/schema-validator.test.ts (2132 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | expectValidationFailure | (private) |
| 19 | fn | expectValidationIssue | (private) |
| 31 | fn | expectIssueMessageIncludes | (private) |
| 41 | fn | expectSuccessfulValidationValue | (private) |
| 52 | fn | expectValidationSuccess | (private) |
| 57 | fn | expectUriValidationCase | (private) |

## src/plugins/sdk-alias.test.ts (2486 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | CreateJiti | (private) |
| 33 | fn | getCreateJiti | (private) |
| 42 | fn | makeTempDir | (private) |
| 48 | fn | createTrustedOpenClawPackageFixture | (private) |
| 69 | fn | withCwd | (private) |
| 78 | fn | createPluginSdkAliasFixture | (private) |
| 130 | fn | writePluginSdkSubpathArtifacts | (private) |
| 143 | fn | writeWorkspacePackageEntry | (private) |
| 158 | fn | createPluginRuntimeAliasFixture | (private) |
| 182 | fn | createPluginSdkAliasTargetFixture | (private) |
| 227 | fn | createBundledPluginPackagePublicSurfaceAliasFixture | (private) |
| 266 | fn | writePluginEntry | (private) |
| 273 | fn | writeInstalledPluginEntry | (private) |
| 295 | fn | createUserInstalledPluginSdkAliasFixture | (private) |
| 319 | fn | resolvePluginRuntimeModule | (private) |
| 326 | fn | run | (private) |
| 336 | fn | expectResolvedFixturePath | (private) |
| 346 | fn | expectPluginSdkAliasTargets | (private) |
| 371 | fn | listPluginSdkExportedSubpaths | (private) |
| 392 | fn | expectExportedSubpaths | (private) |
| 398 | fn | run | (private) |
| 403 | fn | expectCwdFallbackPluginSdkAliasResolution | (private) |

## src/plugins/sdk-alias.ts (2010 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | PluginSdkAliasCandidateKind | (private) |
| 13 | type | PluginSdkResolutionPreference | pub |
| 15 | type | LoaderModuleResolveParams | (private) |
| 24 | type | PluginRuntimeModuleResolution | pub |
| 32 | type | PluginSdkPackageJson | (private) |
| 38 | type | WorkspacePackageAliasEntry | (private) |
| 49 | fn | sanitizeJitiCachePathSegment | (private) |
| 54 | fn | resolveJitiFsCacheTmpDir | (private) |
| 68 | fn | readJitiBooleanEnv | (private) |
| 79 | fn | shouldUseJitiFsCache | (private) |
| 83 | fn | resolvePluginLoaderJitiNativeModules | (private) |
| 95 | fn | normalizeJitiAliasTargetPath | (private) |
| 99 | fn | resolveLoaderModulePath | (private) |
| 103 | fn | readPluginSdkPackageJson | (private) |
| 117 | fn | resolveJitiCacheModulePath | (private) |
| 128 | fn | resolvePluginLoaderJitiFsCacheDir | (private) |
| 152 | fn | resolvePluginLoaderJitiFsCacheOption | (private) |
| 158 | fn | isSafePluginSdkSubpathSegment | (private) |
| 162 | fn | listPluginSdkSubpathsFromPackageJson | (private) |
| 170 | fn | hasTrustedOpenClawRootIndicator | (private) |
| 192 | fn | readPluginSdkSubpathsFromPackageRoot | (private) |
| 204 | fn | resolveTrustedOpenClawRootFromArgvHint | (private) |
| 225 | fn | findNearestPluginSdkPackageRoot | (private) |
| 241 | fn | resolveLoaderPackageRoot | pub |
| 258 | fn | createPluginRuntimeModuleCandidateMap | (private) |
| 265 | fn | appendPluginRuntimeModuleCandidates | (private) |
| 276 | fn | appendSiblingPluginRuntimeModuleCandidates | (private) |
| 290 | fn | dedupeResolvedPaths | (private) |
| 304 | fn | listAncestorPluginRuntimeModuleCandidates | (private) |
| 328 | fn | listArgvRuntimeFallbackStartDirs | (private) |
| 353 | fn | formatResolutionError | (private) |
| 357 | fn | resolveDevSourceRootParam | (private) |
| 363 | fn | resolveLoaderPluginSdkPackageRoot | (private) |
| 389 | fn | resolvePluginSdkAliasCandidateOrder | (private) |
| 444 | type | PrivatePluginSdkSubpathOwner | (private) |
| 964 | fn | normalizePackageExportSubpath | (private) |
| 975 | fn | resolvePackageExportImportPath | (private) |
| 990 | fn | listRootPackagedWorkspacePackageAliasEntries | (private) |
| 1000 | fn | visit | (private) |
| 1030 | fn | listWorkspacePackageExportAliasEntries | pub |
| 1075 | fn | isUsableDistPluginSdkArtifact | (private) |
| 1102 | fn | readPrivateLocalOnlyPluginSdkSubpaths | (private) |
| 1118 | fn | readBundledPluginPackageName | (private) |
| 1124 | fn | isBundledPluginPublicSurfaceSourceBasename | (private) |
| 1134 | fn | listBundledPluginPublicSurfaceSourceBasenames | (private) |
| 1164 | fn | resolveBundledPluginPublicSurfaceAliasTarget | (private) |
| 1199 | fn | resolveBundledPluginPackagePublicSurfaceAliasMap | (private) |
| 1261 | fn | resolveWorkspacePackageAliasMap | (private) |
| 1317 | fn | shouldIncludePrivateLocalOnlyPluginSdkSubpaths | (private) |
| 1321 | fn | isBundledPluginModulePath | (private) |
| 1338 | fn | isAnyBundledPluginModulePath | (private) |
| 1345 | fn | isOfficialInstalledPluginPackageRoot | (private) |
| 1360 | fn | isOfficialInstalledPluginModulePath | (private) |
| 1382 | fn | isTrustedPrivatePluginSdkOwnerPath | (private) |
| 1404 | fn | findPrivatePluginSdkSubpathOwners | (private) |
| 1410 | fn | listTrustedPrivatePluginSdkOwnerKeys | (private) |
| 1419 | fn | resolvePrivatePluginSdkOwnerPackageRoot | (private) |
| 1434 | fn | shouldIncludePrivateLocalOnlyPluginSdkSubpath | (private) |
| 1455 | fn | hasPluginSdkSubpathArtifact | (private) |
| 1465 | fn | listDistPluginSdkArtifactSubpaths | (private) |
| 1480 | fn | listPrivateLocalOnlyPluginSdkSubpaths | (private) |
| 1495 | fn | listPluginSdkExportedSubpaths | (private) |
| 1539 | fn | resolvePluginSdkScopedAliasMap | (private) |
| 1644 | fn | hasJitiNormalizedAliasMarker | (private) |
| 1648 | fn | createJitiAliasContentCacheKey | (private) |
| 1655 | fn | isConcreteJitiAliasTarget | (private) |
| 1659 | fn | resolveJitiAliasTarget | (private) |
| 1694 | fn | normalizePluginLoaderAliasMapForJiti | (private) |
| 1711 | fn | getAliasDepth | (private) |
| 1745 | fn | buildPluginLoaderAliasMapCacheKey | (private) |
| 1765 | fn | buildPluginLoaderModuleConfigCacheKey | (private) |
| 1785 | fn | buildPluginLoaderAliasMap | pub |
| 1835 | fn | resolvePluginRuntimeModulePathWithDiagnostics | pub |
| 1894 | fn | buildPluginLoaderJitiOptions | pub |
| 1918 | fn | supportsNativeModuleRuntime | (private) |
| 1923 | fn | isBundledPluginDistModulePath | (private) |
| 1927 | fn | shouldPreferNativeModuleLoad | pub |
| 1942 | fn | resolvePluginLoaderTryNative | pub |
| 1959 | fn | createPluginLoaderModuleCacheKey | pub |
| 1970 | fn | resolvePluginLoaderModuleConfig | pub |

## src/plugins/services.test.ts (520 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createRegistry | (private) |
| 46 | fn | createServiceConfig | (private) |
| 50 | fn | expectServiceContext | (private) |
| 60 | fn | expectServiceLogger | (private) |
| 66 | fn | expectServiceContexts | (private) |
| 76 | fn | expectServiceLifecycleState | (private) |
| 88 | fn | requireLoggerErrorMessage | (private) |
| 96 | fn | startTrackingServices | (private) |
| 110 | fn | createTrackingService | (private) |

## src/plugins/setup-registry.test.ts (1138 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | forceNodeRuntimeVersionsForTest | (private) |
| 52 | fn | makeTempDir | (private) |
| 56 | fn | writeSetupApiStub | (private) |
| 60 | fn | mockSinglePlugin | (private) |
| 72 | fn | mockVoiceCallConfigMigrationRegistration | (private) |
| 90 | fn | mockOpenAiCliBackendRegistration | (private) |
| 121 | fn | mockDuplicateSetupClaims | (private) |
| 158 | fn | expectNoUnhandledRejection | (private) |
| 160 | fn | onUnhandledRejection | (private) |
| 174 | fn | requireRecord | (private) |
| 181 | fn | mockCall | (private) |
| 192 | fn | mockArg | (private) |
| 200 | fn | firstRecordArg | (private) |
| 937 | fn | mockOpenAiProviderPlugin | (private) |

## src/plugins/setup-registry.ts (920 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | SetupProviderEntry | (private) |
| 44 | type | SetupCliBackendEntry | (private) |
| 49 | type | SetupConfigMigrationEntry | (private) |
| 54 | type | SetupAutoEnableProbeEntry | (private) |
| 59 | type | PluginSetupRegistryDiagnosticCode | (private) |
| 66 | type | PluginSetupRegistryDiagnostic | (private) |
| 74 | type | PluginSetupRegistry | (private) |
| 82 | type | SetupAutoEnableReason | (private) |
| 87 | type | PluginApiBuildParams | (private) |
| 106 | fn | clearPluginSetupRegistryCache | (private) |
| 114 | fn | getModuleLoader | (private) |
| 125 | fn | resolveSetupApiPath | (private) |
| 168 | fn | collectConfiguredPluginEntryIds | (private) |
| 176 | fn | resolveRelevantSetupMigrationPluginIds | (private) |
| 207 | fn | resolveRegister | (private) |
| 223 | fn | rewriteBundledSetupSourceToBuiltArtifact | (private) |
| 260 | fn | resolveLoadableSetupRuntimeSource | (private) |
| 265 | fn | resolveDeclaredSetupRuntimeSource | (private) |
| 274 | fn | resolveSetupRegistration | (private) |
| 306 | fn | buildSetupPluginApi | (private) |
| 327 | fn | ignoreAsyncSetupRegisterResult | (private) |
| 336 | fn | matchesProvider | (private) |
| 346 | fn | resolveSetupRegistryCacheKey | (private) |
| 370 | fn | resolveCurrentSetupSnapshotCacheId | (private) |
| 383 | fn | cloneSetupRegistryValue | (private) |
| 445 | fn | cloneSetupRegistry | (private) |
| 449 | fn | loadSetupManifestRegistry | (private) |
| 476 | fn | findUniqueSetupManifestOwner | (private) |
| 492 | fn | mapNormalizedIds | (private) |
| 504 | fn | pushDescriptorRuntimeDisabledDiagnostic | (private) |
| 519 | fn | pushSetupDescriptorDriftDiagnostics | (private) |
| 576 | fn | resolvePluginSetupRegistry | pub |
| 716 | fn | resolvePluginSetupProvider | pub |
| 779 | fn | resolvePluginSetupCliBackend | pub |
| 846 | fn | runPluginSetupConfigMigrations | pub |
| 878 | fn | resolvePluginSetupAutoEnableReasons | pub |

## src/plugins/stage-bundled-plugin-runtime.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | makeRepoRoot | (private) |
| 19 | fn | createDistPluginDir | (private) |
| 25 | fn | writeRepoFile | (private) |
| 31 | fn | setupRepoFiles | (private) |
| 37 | fn | distRuntimeImportPath | (private) |
| 41 | fn | expectRuntimePluginWrapperContains | (private) |
| 58 | fn | expectRuntimePluginWrapperForwardsDefault | (private) |
| 75 | fn | expectRuntimeArtifactText | (private) |

## src/plugins/status.test.ts (1043 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 122 | fn | setPluginLoadResult | (private) |
| 131 | fn | setSinglePluginLoadResult | (private) |
| 141 | fn | createInstalledPluginIndexSnapshot | (private) |
| 158 | fn | expectInspectReport | (private) |
| 169 | fn | mockInput | (private) |
| 177 | fn | expectMockCalledWithFields | (private) |
| 187 | fn | expectPluginLoaderCall | (private) |
| 211 | fn | expectMetadataSnapshotLoaderCall | (private) |
| 231 | fn | expectAutoEnabledStatusLoad | (private) |
| 238 | fn | createCompatChainFixture | (private) |
| 253 | fn | expectBundledCompatChainApplied | (private) |
| 270 | fn | createAutoEnabledStatusConfig | (private) |
| 287 | fn | expectAutoEnabledDemoCompatibilityNoticesPreserveRawConfig | (private) |
| 330 | fn | expectNoCompatibilityWarnings | (private) |
| 335 | fn | expectCompatibilityOutput | (private) |
| 344 | fn | expectCapabilityKinds | (private) |
| 351 | fn | expectInspectShape | (private) |
| 364 | fn | expectInspectPolicy | (private) |
| 371 | fn | expectBundleInspectState | (private) |

## src/plugins/status.ts (555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | PluginStatusReport | pub |
| 45 | type | PluginCompatibilityNotice | pub |
| 56 | type | PluginCompatibilitySummary | pub |
| 61 | type | PluginInspectReport | pub |
| 108 | fn | buildCompatibilityNoticesForInspect | (private) |
| 163 | fn | usesRemovedSessionTranscriptFileApi | (private) |
| 178 | fn | resolveReportedPluginVersion | (private) |
| 192 | type | PluginReportParams | (private) |
| 203 | fn | buildPluginReport | (private) |
| 323 | fn | buildPluginSnapshotReport | pub |
| 327 | fn | buildPluginDiagnosticsReport | pub |
| 331 | fn | buildPluginInspectReport | pub |
| 474 | fn | buildAllPluginInspectReports | pub |
| 512 | fn | buildPluginCompatibilityWarnings | pub |
| 522 | fn | buildPluginCompatibilityNotices | pub |
| 532 | fn | buildPluginCompatibilitySnapshotNotices | pub |
| 544 | fn | formatPluginCompatibilityNotice | pub |
| 548 | fn | summarizePluginCompatibility | pub |

## src/plugins/tools.optional.test.ts (3822 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | MockRegistryToolEntry | (private) |
| 51 | fn | makeTool | (private) |
| 62 | fn | createContext | (private) |
| 76 | fn | createResolveToolsParams | (private) |
| 103 | fn | createToolRegistry | (private) |
| 120 | fn | setRegistry | (private) |
| 149 | fn | setMultiToolRegistry | (private) |
| 161 | fn | createOptionalDemoEntry | (private) |
| 171 | fn | createMalformedTool | (private) |
| 182 | fn | installConsoleMethodSpy | (private) |
| 193 | fn | requireConsoleMessage | (private) |
| 205 | fn | resolveWithConflictingCoreName | (private) |
| 214 | fn | setOptionalDemoRegistry | (private) |
| 218 | fn | resolveOptionalDemoTools | (private) |
| 222 | fn | createAutoEnabledOptionalContext | (private) |
| 236 | fn | expectAutoEnabledOptionalLoad | (private) |
| 240 | fn | resolveAutoEnabledOptionalDemoTools | (private) |
| 270 | fn | createOptionalDemoActiveRegistry | (private) |
| 293 | fn | installToolManifestSnapshot | (private) |
| 307 | fn | installToolManifestSnapshots | (private) |
| 375 | fn | createXaiToolManifest | (private) |
| 404 | fn | createFeishuToolManifest | (private) |
| 432 | fn | expectResolvedToolNames | (private) |
| 439 | fn | expectLoaderCall | (private) |
| 444 | fn | mockCallParams | (private) |
| 455 | fn | expectLoaderSelectedOnlyPluginIds | (private) |
| 462 | fn | expectSingleDiagnosticMessage | (private) |
| 470 | fn | expectConflictingCoreNameResolution | (private) |
| 687 | class | AccessorTool | (private) |

## src/plugins/tools.ts (1715 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | PluginToolMcpMeta | pub |
| 58 | type | PluginToolMeta | (private) |
| 66 | type | PluginToolFactoryTimingResult | (private) |
| 68 | type | PluginToolFactoryTiming | (private) |
| 78 | type | PluginToolFactoryResult | (private) |
| 89 | fn | setPluginToolMeta | pub |
| 94 | fn | getPluginToolMeta | pub |
| 99 | fn | copyPluginToolMeta | pub |
| 106 | fn | pluginToolScopeKey | (private) |
| 110 | fn | runWithPluginToolScope | (private) |
| 120 | fn | isAgentTool | (private) |
| 129 | fn | wrapPluginToolCallbacks | (private) |
| 142 | fn | scopedExecute | (private) |
| 193 | fn | wrapPluginToolFactoryResult | (private) |
| 203 | fn | resolvePluginToolFactory | (private) |
| 209 | fn | blocksHostRestrictedConversationReadTool | (private) |
| 227 | fn | blocksHostRestrictedConversationReadRegistration | (private) |
| 246 | fn | resolveCurrentManifestPlugin | (private) |
| 269 | fn | buildPluginToolMetadataKey | pub |
| 273 | fn | normalizeAllowlist | (private) |
| 277 | fn | normalizeDenylist | (private) |
| 284 | fn | denylistBlocksName | (private) |
| 289 | fn | denylistBlocksPlugin | (private) |
| 299 | fn | denylistBlocksPluginTool | (private) |
| 310 | fn | allowlistIncludesDefaultPluginTools | (private) |
| 314 | fn | isManifestToolOptional | (private) |
| 318 | fn | isPluginToolOptional | (private) |
| 329 | fn | isManifestToolReplaySafe | (private) |
| 336 | fn | isTrustedManifestLocalMediaTool | (private) |
| 346 | fn | isOptionalToolAllowed | (private) |
| 367 | fn | isOptionalToolEntryPotentiallyAllowed | (private) |
| 388 | fn | readPluginToolName | (private) |
| 396 | fn | hasRequiredClientCaps | (private) |
| 414 | fn | toElapsedMs | (private) |
| 418 | fn | describePluginToolFactoryResult | (private) |
| 434 | fn | createPluginToolFactoryTiming | (private) |
| 455 | fn | resolvePluginToolFactoryEntry | (private) |
| 493 | fn | formatPluginToolFactoryTiming | (private) |
| 504 | fn | formatPluginToolFactoryTimingSummary | (private) |
| 529 | fn | shouldWarnPluginToolFactoryTimings | (private) |
| 539 | fn | describeMalformedPluginTool | (private) |
| 563 | fn | pluginToolNamesMatchAllowlist | (private) |
| 575 | fn | listManifestToolNamesForAllowlist | (private) |
| 603 | fn | listManifestToolNamesForAvailability | (private) |
| 612 | fn | isManifestToolNameAvailable | (private) |
| 628 | fn | filterManifestToolNamesForAvailability | (private) |
| 646 | fn | resolvePluginToolRuntimePluginIds | (private) |
| 716 | fn | readPluginCacheSource | (private) |
| 728 | fn | buildPluginDescriptorCacheKey | (private) |
| 747 | fn | cachedDescriptorsCoverToolNames | (private) |
| 757 | fn | createCachedDescriptorPluginTool | (private) |
| 870 | fn | resolveCachedPluginTools | (private) |
| 1030 | fn | resolvePluginToolRegistry | (private) |
| 1047 | fn | addRegistry | (private) |
| 1063 | fn | missingPluginIds | (private) |
| 1065 | fn | composeSelectedRegistries | (private) |
| 1160 | fn | composePluginToolRegistries | (private) |
| 1195 | fn | registryHasScopedPluginTools | (private) |
| 1213 | fn | resolvePluginToolLoadState | (private) |
| 1269 | fn | ensureStandalonePluginToolRegistryLoaded | pub |
| 1295 | fn | resolvePluginTools | pub |

## src/plugins/uninstall.test.ts (1744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | PluginConfig | (private) |
| 27 | type | PluginInstallRecord | (private) |
| 29 | fn | uninstallPlugin | (private) |
| 44 | fn | createInstalledNpmPluginFixture | (private) |
| 80 | type | UninstallResult | (private) |
| 82 | fn | runDeleteInstalledNpmPluginFixture | (private) |
| 98 | fn | expectSuccessfulUninstall | (private) |
| 106 | fn | expectSuccessfulUninstallActions | (private) |
| 125 | fn | createSinglePluginEntries | (private) |
| 131 | fn | createNpmInstallRecord | (private) |
| 139 | fn | createGitInstallRecord | (private) |
| 149 | fn | createPathInstallRecord | (private) |
| 160 | fn | createPluginConfig | (private) |
| 198 | fn | expectRemainingChannels | (private) |
| 205 | fn | expectChannelCleanupResult | (private) |
| 225 | fn | createSinglePluginWithEmptySlotsConfig | (private) |
| 232 | fn | createSingleNpmInstallConfig | (private) |
| 241 | fn | createPluginDirFixture | (private) |
| 248 | fn | expectPathAccessState | (private) |
| 262 | fn | expectNpmUninstallCommand | (private) |

## src/plugins/uninstall.ts (741 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | UninstallActions | (private) |
| 59 | fn | createEmptyUninstallActions | (private) |
| 74 | fn | createEmptyConfigUninstallActions | (private) |
| 79 | fn | formatUninstallActionLabels | pub |
| 85 | fn | hasUninstallAction | (private) |
| 89 | fn | formatUninstallSlotResetPreview | pub |
| 94 | type | PluginUninstallDirectoryRemoval | pub |
| 108 | type | PluginUninstallPlanResult | (private) |
| 118 | fn | resolveUninstallDirectoryTarget | (private) |
| 180 | fn | resolveNpmManagedInstall | (private) |
| 215 | fn | resolveNpmManagedProjectInstall | (private) |
| 242 | fn | resolveNpmPackageNameFromInstallPath | (private) |
| 263 | fn | resolveGitManagedInstall | (private) |
| 289 | fn | resolveRecordedManagedInstallPath | (private) |
| 309 | fn | isLinkedPathInstallRecord | (private) |
| 329 | fn | resolveUninstallChannelConfigKeys | pub |
| 346 | fn | loadPathMatchesInstallSourcePath | (private) |
| 353 | fn | resolveComparablePath | (private) |
| 362 | fn | isPathInsideOrEqual | (private) |
| 372 | fn | removePluginFromConfig | pub |
| 507 | type | UninstallPluginParams | (private) |
| 520 | fn | planPluginUninstall | pub |
| 598 | fn | applyPluginUninstallDirectoryRemoval | pub |

## src/plugins/update-attempt.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | formatNewerExactPinnedNpmDefaultLineMessage | pub |
| 38 | fn | formatNpmInstallFailure | pub |
| 50 | fn | formatMarketplaceInstallFailure | pub |
| 63 | fn | formatClawHubInstallFailure | pub |
| 72 | fn | isClawHubRiskAcknowledgementRequired | (private) |
| 76 | fn | isClawHubDownloadBlocked | (private) |
| 80 | fn | isClawHubSecurityUnavailable | (private) |
| 84 | fn | readClawHubTrustErrorCode | pub |
| 97 | fn | shouldSkipClawHubTrustFailureForExistingInstall | pub |
| 117 | fn | buildClawHubTrustSkippedOutcome | pub |
| 135 | fn | isClawHubTrustSkippedOutcome | pub |
| 144 | fn | formatGitInstallFailure | pub |
| 153 | type | InstallIntegrityDrift | (private) |
| 163 | fn | createPluginUpdateIntegrityDriftHandler | (private) |
| 189 | type | PluginUpdateSpecPlan | (private) |
| 196 | type | PluginUpdateInstallResult | (private) |
| 202 | type | NpmPluginUpdateSuccess | pub |
| 206 | type | ClawHubPluginUpdateSuccess | pub |
| 210 | type | GitPluginUpdateSuccess | pub |
| 214 | type | MarketplacePluginUpdateSuccess | pub |
| 218 | type | PluginUpdateSuccess | (private) |
| 220 | type | PluginUpdateAttemptState | (private) |
| 231 | type | PluginUpdateAttemptResult | (private) |
| 235 | fn | buildDryRunPluginUpdateOutcome | pub |
| 321 | fn | runPluginUpdateAttempt | pub |

## src/plugins/update-installed.ts (727 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | fn | updateNpmInstalledPlugins | pub |
| 115 | fn | recordFailure | (private) |
| 266 | fn | getFallbackExpectedIntegrity | (private) |

## src/plugins/update-source.ts (742 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | PluginUpdateLogger | pub |
| 50 | type | PluginUpdateStatus | (private) |
| 52 | type | PluginUpdateChannelFallback | pub |
| 61 | type | BasePluginUpdateOutcome | (private) |
| 70 | type | PluginUpdateOutcome | pub |
| 80 | type | PluginUpdateSummary | pub |
| 86 | type | PluginUpdateIntegrityDriftParams | pub |
| 96 | type | UpdatablePluginInstallRecord | pub |
| 100 | fn | isPluginInstallRecordUpdateSource | pub |
| 112 | fn | pluginInstallRecordMayMigrateConfigId | pub |
| 136 | fn | shouldSkipUnchangedNpmInstall | pub |
| 178 | fn | shouldBypassTrustedOfficialUnchangedNpmCheck | pub |
| 196 | fn | expectedIntegrityForNpmUpdate | pub |
| 228 | fn | compareNpmSemverForUpdate | (private) |
| 236 | fn | resolveNewerExactPinnedNpmDefaultLine | pub |
| 253 | fn | resolveMetadata | (private) |
| 275 | fn | loadNpmPackageVersionsForUpdate | (private) |
| 301 | fn | resolveTrustedOfficialPrereleaseFallbackMetadataForUpdate | pub |
| 359 | fn | expectedIntegrityForNpmFallback | pub |
| 401 | fn | isNpmMetadataCompatibleWithCurrentHost | pub |
| 422 | fn | isBundledVersionNewer | pub |
| 430 | fn | shouldFallbackClawHubToDefault | (private) |
| 437 | fn | shouldFallbackBetaClawHubUpdate | pub |
| 441 | fn | isUnavailableNpmTarget | (private) |
| 448 | fn | describeBetaNpmFallback | pub |
| 460 | fn | formatNpmSpecSelectorLabel | (private) |
| 471 | fn | describeNpmChannelFallback | pub |
| 496 | fn | formatBetaChannelFallbackOutcomeSuffix | pub |
| 508 | fn | npmUpdateFailureSpec | pub |
| 519 | fn | resolveNpmSpecPackageName | pub |
| 523 | fn | resolveExactNpmSpecVersion | pub |
| 530 | fn | normalizeExactNpmVersion | (private) |
| 541 | fn | resolveNpmResultVersion | pub |
| 547 | fn | resolveClawHubSpecPackageName | (private) |
| 551 | fn | isOfficialClawHubInstallRecord | (private) |
| 558 | fn | resolveTrustedSourceLinkedOfficialNpmFallbackForClawHubUpdate | pub |
| 618 | fn | isTrustedSourceLinkedOfficialNpmUpdate | pub |
| 629 | fn | isTrustedSourceLinkedOfficialBridgeNpmInstall | pub |
| 644 | fn | isBridgeNpmInstall | (private) |
| 660 | fn | isBridgeClawHubInstall | (private) |
| 674 | fn | resolveNpmUpdateSpecs | pub |
| 703 | fn | resolveClawHubUpdateSpecs | pub |
| 724 | fn | isBridgeAlreadyInstalledFromPreferredSource | pub |
| 734 | fn | isBridgeInstalledFromFallbackSource | pub |

## src/plugins/update.test.ts (6029 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | NpmInstallIntegrityDrift | (private) |
| 24 | fn | appBundledPluginRoot | (private) |
| 28 | fn | requireExpectedPluginId | (private) |
| 35 | fn | requirePluginPackageName | (private) |
| 114 | fn | createSuccessfulNpmUpdateResult | (private) |
| 134 | fn | createSuccessfulClawHubUpdateResult | (private) |
| 169 | fn | createNpmInstallConfig | (private) |
| 201 | fn | createMarketplaceInstallConfig | (private) |
| 223 | fn | createClawHubInstallConfig | (private) |
| 249 | fn | createEnabledDemoClawHubInstallConfig | (private) |
| 278 | fn | createGitInstallConfig | (private) |
| 298 | fn | createBundledPathInstallConfig | (private) |
| 319 | fn | createCodexAppServerInstallConfig | (private) |
| 339 | fn | createInstalledPackageDir | (private) |
| 366 | fn | createOpenClawPeerLinkFixtures | (private) |
| 379 | fn | peerLinkPath | (private) |
| 385 | fn | linkPeer | (private) |
| 392 | fn | mockNpmViewMetadata | (private) |
| 412 | fn | mockNpmViewVersions | (private) |
| 420 | fn | npmInstallCall | (private) |
| 427 | fn | clawHubInstallCall | (private) |
| 434 | fn | marketplaceInstallCall | (private) |
| 441 | fn | gitInstallCall | (private) |
| 448 | fn | npmViewCall | (private) |
| 455 | fn | expectRecordFields | (private) |
| 464 | fn | expectNpmUpdateCall | (private) |
| 481 | fn | createBundledSource | (private) |
| 490 | fn | mockBundledSources | (private) |
| 496 | fn | expectBundledPathInstall | (private) |
| 510 | fn | expectCodexAppServerInstallState | (private) |

## src/plugins/web-provider-runtime-shared.test.ts (544 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | requireRecord | (private) |
| 58 | fn | mockArg | (private) |

## src/plugins/web-search-providers.runtime.test.ts (536 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | RegistryModule | (private) |
| 5 | type | RuntimeModule | (private) |
| 6 | type | WebSearchProvidersRuntimeModule | (private) |
| 7 | type | PluginAutoEnableModule | (private) |
| 8 | type | PluginManifestRegistry | (private) |
| 9 | type | LoadPluginManifestRegistryForPluginRegistry | (private) |
| 11 | type | LoadPluginManifestRegistryForInstalledIndex | (private) |
| 57 | fn | buildMockedWebSearchProviders | (private) |
| 105 | fn | createBraveAllowConfig | (private) |
| 113 | fn | createWebSearchEnv | (private) |
| 120 | fn | createSnapshotParams | (private) |
| 132 | fn | toRuntimeProviderKeys | (private) |
| 138 | fn | expectBundledRuntimeProviderKeys | (private) |
| 146 | fn | createManifestRegistryFixture | (private) |
| 184 | fn | createWebSearchManifestRecord | (private) |
| 205 | fn | expectLoaderCallCount | (private) |
| 209 | fn | requireRecord | (private) |
| 216 | fn | requireLastCallFirstArg | (private) |
| 228 | fn | requirePluginsConfig | (private) |
| 233 | fn | expectScopedWebSearchCandidates | (private) |
| 240 | fn | expectAutoEnabledWebSearchLoad | (private) |
| 253 | fn | expectSnapshotLoaderCalls | (private) |

## src/process/command-queue.test.ts (1060 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | CommandQueueModule | (private) |
| 44 | fn | createDeferred | (private) |
| 55 | fn | mockCallArg | (private) |
| 67 | fn | enqueueBlockedMainTask | (private) |
| 81 | fn | expectLaneSnapshotFields | (private) |
| 91 | fn | diagnosticDebugMessages | (private) |
| 144 | fn | makeTask | (private) |

## src/process/command-queue.ts (751 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | class | CommandLaneClearedError | pub |
| 36 | class | CommandLaneTaskTimeoutError | (private) |
| 45 | fn | message | (private) |
| 64 | fn | isCommandLaneTaskTimeoutError | pub |
| 79 | type | CommandLaneTaskMarker | pub |
| 85 | type | QueueEntry | (private) |
| 103 | type | LaneState | (private) |
| 112 | type | CommandLaneSnapshot | pub |
| 121 | type | ActiveTaskWaiter | (private) |
| 127 | fn | isExpectedNonErrorLaneFailure | (private) |
| 131 | fn | isQuietProbeLane | (private) |
| 147 | fn | getQueueState | (private) |
| 200 | fn | normalizeLane | (private) |
| 204 | fn | getLaneDepth | (private) |
| 208 | fn | createCommandLaneSnapshot | (private) |
| 219 | fn | getLaneState | (private) |
| 237 | fn | completeTask | (private) |
| 245 | fn | hasPendingActiveTasks | (private) |
| 257 | fn | resolveActiveTaskWaiter | (private) |
| 268 | fn | notifyActiveTaskWaiters | (private) |
| 277 | fn | normalizeTaskTimeoutMs | (private) |
| 284 | fn | resolveQueuePriority | (private) |
| 295 | fn | enqueueLaneEntry | (private) |
| 310 | fn | runQueueEntryTask | (private) |
| 324 | fn | readLastProgressAtMs | (private) |
| 340 | fn | elapsedSinceStartMs | (private) |
| 341 | fn | rejectForTimeout | (private) |
| 357 | fn | armTimer | (private) |
| 368 | fn | armProgressTimeout | (private) |
| 381 | fn | armAbortTimeout | (private) |
| 392 | fn | onRelease | (private) |
| 406 | fn | onAbort | (private) |
| 439 | fn | drainLane | (private) |
| 451 | fn | pump | (private) |
| 520 | fn | markGatewayDraining | pub |
| 524 | fn | isGatewayDraining | pub |
| 528 | fn | setCommandLaneConcurrency | pub |
| 539 | fn | enqueueCommandInLane | pub |
| 574 | fn | getQueueSize | pub |
| 583 | fn | getCommandLaneSnapshot | pub |
| 603 | fn | getCommandLaneActiveTaskIds | pub |
| 609 | fn | isCommandLaneTaskMarkerCurrent | pub |
| 617 | fn | getCommandLaneSnapshots | pub |
| 623 | fn | getTotalQueueSize | pub |
| 631 | fn | clearCommandLane | pub |
| 650 | fn | resetCommandLane | pub |
| 681 | fn | resetAllLanes | pub |
| 704 | fn | getActiveTaskCount | pub |
| 722 | fn | waitForActiveTasks | pub |

## src/process/exec.test.ts (687 lines)

_No symbols extracted._

## src/process/exec.windows.test.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | MockResult | (private) |
| 30 | type | MockSubprocess | (private) |
| 44 | type | ExecaCall | (private) |
| 46 | fn | createMockSubprocess | (private) |
| 104 | fn | requireExecaCall | (private) |
| 112 | fn | expectedTrustedCmdExe | (private) |
| 116 | fn | expectCmdWrappedInvocation | (private) |

## src/realtime-transcription/websocket-session.test.ts (558 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | createRealtimeServer | (private) |
| 85 | fn | createSignal | (private) |
| 96 | fn | requireFirstMockArg | (private) |

## src/realtime-transcription/websocket-session.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | RealtimeTranscriptionWebSocketTransport | pub |
| 62 | fn | defaultParseMessage | (private) |
| 70 | class | WebSocketRealtimeTranscriptionSession | (private) |
| 181 | fn | normalizeError | (private) |
| 184 | fn | clearConnectTimeout | (private) |
| 191 | fn | finishClosedConnect | (private) |
| 200 | fn | finishConnect | (private) |
| 212 | fn | failConnect | (private) |
| 499 | fn | createRealtimeTranscriptionWebSocketSession | pub |

## src/snapshot/local-repository.test.ts (1792 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createTempDir | (private) |
| 37 | fn | createGenericDatabase | (private) |
| 61 | fn | createGlobalDatabase | (private) |
| 103 | fn | seedGlobalPluginBlobSnapshotFixtures | (private) |
| 137 | fn | createAgentDatabase | (private) |
| 165 | fn | seedStateLease | (private) |
| 183 | fn | disableDefensiveModeForSchemaCorruption | (private) |
| 191 | fn | createUnsafeIndexDrift | (private) |
| 221 | fn | rewriteManifest | (private) |
| 230 | fn | refreshArtifactManifest | (private) |

## src/snapshot/local-repository.ts (1484 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 207 | type | WindowsAclEntry | (private) |
| 215 | type | LocalSqliteSnapshotProviderOptions | (private) |
| 222 | fn | createLocalSqliteSnapshotProvider | pub |
| 228 | class | LocalSqliteSnapshotProvider | (private) |
| 583 | fn | readVerifiedSnapshotManifest | (private) |
| 588 | fn | assertArtifactMatchesManifest | (private) |
| 605 | fn | assertAllowedDatabaseRole | (private) |
| 617 | fn | verifySnapshotDatabaseFile | (private) |
| 683 | fn | normalizeSnapshotIdentity | (private) |
| 701 | fn | buildDatabaseManifest | (private) |
| 716 | fn | buildDatabaseValidator | (private) |
| 733 | fn | buildManifestDatabaseValidator | (private) |
| 748 | fn | buildSnapshotId | (private) |
| 753 | fn | ensurePrivateDirectory | (private) |
| 781 | fn | ensureRestoreParentDirectory | (private) |
| 791 | fn | assertDirectory | (private) |
| 797 | fn | assertDirectoryIdentity | (private) |
| 808 | fn | assertOpenDirectoryIdentity | (private) |
| 825 | fn | assertDirectoryIdentitySync | (private) |
| 833 | fn | isSnapshotEntryLinkFallbackError | (private) |
| 844 | fn | publishSnapshotEntryNoOverwrite | (private) |
| 886 | fn | copySnapshotEntryExclusive | (private) |
| 939 | fn | assertExactSnapshotContents | (private) |
| 946 | fn | assertPendingSnapshotContents | (private) |
| 953 | fn | assertSnapshotContents | (private) |
| 978 | fn | isIncompleteSnapshotDirectory | (private) |
| 990 | fn | assertFreshRestorePathsAbsent | (private) |
| 1001 | fn | assertNoSqliteSidecarsSync | (private) |
| 1016 | fn | lstatIfExists | (private) |
| 1027 | fn | removePrivateDirectoryIfOwned | (private) |
| 1061 | fn | withPrivateSqliteStagingDirectory | (private) |
| 1122 | fn | assertTrustedStagingRoot | (private) |
| 1150 | fn | assertPrivateStagingDirectory | (private) |
| 1173 | fn | assertTrustedPosixStagingAncestors | (private) |
| 1207 | type | MacosAclEntry | (private) |
| 1213 | fn | parseMacosAclEntries | (private) |
| 1244 | fn | normalizeAclPrincipal | (private) |
| 1248 | fn | resolveTrustedMacosAclPrincipals | (private) |
| 1275 | fn | assertTrustedMacosAcl | (private) |
| 1310 | fn | assertTrustedWindowsStagingPath | (private) |
| 1339 | fn | assertTrustedWindowsAcl | (private) |
| 1364 | fn | windowsSecurityEntryToAclEntry | (private) |
| 1390 | fn | windowsAclEntryPermitsUnsafeStagingAccess | (private) |
| 1409 | fn | inspectWindowsPathSecurity | (private) |
| 1435 | fn | runEncodedWindowsPowerShell | (private) |
| 1452 | fn | removePublishedSnapshotDirectoryIfOwned | (private) |

## src/web-fetch/runtime.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | TestPluginWebFetchConfig | (private) |
| 41 | fn | getFirecrawlApiKey | (private) |
| 48 | fn | createFirecrawlProvider | (private) |
| 60 | fn | createThirdPartyFetchProvider | (private) |
| 70 | fn | createFirecrawlPluginConfig | (private) |
| 87 | type | ResolvedWebFetchDefinition | (private) |
| 91 | fn | requireResolvedWebFetch | (private) |

## src/web-search/runtime.test.ts (1277 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | TestPluginWebSearchConfig | (private) |
| 25 | type | WebSearchProviderResolverParams | (private) |
| 31 | type | ManifestContractOwnerParams | (private) |
| 63 | fn | createCustomSearchTool | (private) |
| 71 | fn | getCustomSearchApiKey | (private) |
| 78 | fn | createCustomSearchProvider | (private) |
| 92 | fn | createCustomSearchConfig | (private) |
| 109 | fn | createGoogleSearchProvider | (private) |
| 123 | fn | createOAuthAuthProfileStore | (private) |
| 143 | fn | requireRecord | (private) |
| 150 | fn | mockCallParam | (private) |
| 154 | fn | createDuckDuckGoSearchProvider | (private) |

## src/wizard/clack-navigation-prompts.ts (799 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | NavigationPromptOptions | (private) |
| 41 | fn | getOptionLabel | (private) |
| 45 | fn | computeLabel | (private) |
| 55 | fn | getFilteredOption | (private) |
| 67 | fn | formatNavigationFooter | (private) |
| 79 | fn | navigationFooterLines | (private) |
| 94 | fn | hasGuide | (private) |
| 98 | fn | selectOptionRenderer | (private) |
| 120 | fn | selectWithNavigationFooter | pub |
| 195 | fn | autocompleteWithNavigationFooter | pub |
| 322 | fn | textWithNavigationFooter | pub |
| 379 | fn | passwordWithNavigationFooter | pub |
| 434 | fn | multiselectOptionRenderer | (private) |
| 477 | fn | multiselectWithNavigationFooter | pub |
| 513 | fn | styleOption | (private) |
| 607 | fn | autocompleteMultiselectWithNavigationFooter | pub |
| 610 | fn | formatOption | (private) |
| 738 | fn | confirmWithNavigationFooter | pub |

## src/wizard/setup.app-recommendations.test.ts (650 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | setupAppRecommendations | (private) |
| 22 | fn | createPrompter | (private) |
| 42 | fn | storeDeps | (private) |
| 96 | fn | recommendationResult | (private) |

## src/wizard/setup.finalize.test.ts (1737 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | DefaultModelAuthStatus | (private) |
| 12 | type | DefaultModelCatalogFacts | (private) |
| 265 | fn | createRuntime | (private) |
| 273 | fn | createWebSearchProviderEntry | (private) |
| 296 | fn | expectFirstOnboardingInstallPlanCallOmitsToken | (private) |
| 306 | type | AdvancedFinalizeArgs | (private) |
| 313 | fn | createModelAuthFinalizeArgs | (private) |
| 342 | fn | createLaterPrompter | (private) |
| 349 | fn | createEnabledFirecrawlSearchConfig | (private) |
| 362 | fn | createAdvancedFinalizeArgs | (private) |
| 388 | fn | requireMockArg | (private) |
| 396 | fn | expectNoteContains | (private) |
| 405 | fn | expectNoteTitleNotCalled | (private) |
| 413 | fn | expectNoteNotContains | (private) |
| 421 | fn | withPlatform | (private) |

## src/wizard/setup.finalize.ts (930 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | FinalizeOnboardingOptions | (private) |
| 65 | fn | buildSessionGatewayAuthOverride | (private) |
| 87 | fn | startSessionGatewayForOnboarding | (private) |
| 126 | fn | closeSessionGatewayForOnboarding | (private) |
| 136 | fn | showControlUiDashboardNote | (private) |
| 177 | fn | getLocalizedGatewayDaemonRuntimeOptions | (private) |
| 197 | fn | ensureGatewayServiceForOnboarding | pub |
| 344 | fn | flushInstallWarnings | (private) |
| 413 | fn | finalizeSetupWizard | pub |

## src/wizard/setup.migration-import.ts (605 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | SetupMigrationDetection | (private) |
| 54 | type | SetupMigrationOption | (private) |
| 59 | type | InstallableSetupMigrationProvider | (private) |
| 64 | type | ManifestSetupMigrationProvider | (private) |
| 79 | fn | detectSetupMigrationSources | pub |
| 125 | fn | resolveImportSourceDefault | (private) |
| 138 | fn | resolveInstallableSetupMigrationProviders | (private) |
| 163 | fn | formatMigrationProviderId | (private) |
| 171 | fn | resolveManifestMigrationProviderLabel | (private) |
| 179 | fn | resolveManifestSetupMigrationProviders | (private) |
| 201 | fn | listSetupMigrationOptions | pub |
| 209 | fn | addOption | (private) |
| 251 | fn | selectSetupMigrationProvider | (private) |
| 281 | fn | resolveSetupMigrationProvider | (private) |
| 332 | fn | hasCredentialCandidate | (private) |
| 338 | fn | createSetupMigrationPlan | (private) |
| 362 | fn | runSetupMigrationImport | pub |

## src/wizard/setup.migration-recovery.test.ts (550 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | makeTempRoot | (private) |
| 30 | fn | buildPlan | (private) |
| 73 | fn | buildFailedResult | (private) |
| 83 | fn | persistFailedSetupMigrationAttempt | (private) |
| 108 | fn | persistSucceededSetupMigrationAttempt | (private) |
| 124 | fn | createDeferred | (private) |

## src/wizard/setup.test.ts (2347 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ResolveProviderPluginChoice | (private) |
| 23 | type | ResolvePluginProvidersRuntime | (private) |
| 25 | type | ResolvePluginSetupProvider | (private) |
| 27 | type | ResolveManifestProviderAuthChoice | (private) |
| 29 | type | PromptDefaultModel | (private) |
| 30 | type | ApplyAuthChoice | (private) |
| 31 | type | PrepareAuthChoice | (private) |
| 32 | type | VerifySetupInferenceConfig | (private) |
| 150 | fn | providerPluginStub | (private) |
| 203 | fn | getWizardNoteCalls | (private) |
| 207 | fn | modelConfigWithApiKey | (private) |
| 226 | fn | stagedOpenAiProfile | (private) |
| 233 | fn | prepareMockAuthProfilesIn | (private) |
| 265 | fn | persistedWizardConfigs | (private) |
| 271 | fn | requireRecord | (private) |
| 278 | fn | expectRecordFields | (private) |
| 290 | fn | getMockCallArg | (private) |
| 303 | fn | expectMockCallArgNotNull | (private) |
| 466 | fn | createRuntime | (private) |
| 498 | fn | makeCaseDir | (private) |
| 1363 | fn | runTuiHatchTestAndExpectLaunch | (private) |

## src/wizard/setup.ts (735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | SetupFlowChoice | (private) |
| 45 | fn | hasConfiguredDefaultModel | (private) |
| 49 | fn | offerLiveModelVerification | (private) |
| 66 | fn | verify | (private) |
| 133 | fn | isSetupImportFlowChoice | (private) |
| 137 | fn | resolveImportProviderFromFlowChoice | (private) |
| 141 | fn | runSetupWizard | pub |
| 152 | fn | runSetupWizardOnce | (private) |
| 174 | fn | writeSetupConfigFile | (private) |
| 345 | fn | formatBind | (private) |
| 360 | fn | formatAuth | (private) |
| 366 | fn | formatTailscale | (private) |
