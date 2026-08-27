# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/copilot/src/attempt.test.ts (3768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | type | CopilotToolBridgeInput | (private) |
| 107 | type | SessionEventShape | (private) |
| 114 | type | SendAndWaitFn | (private) |
| 116 | type | FakeSession | (private) |
| 133 | type | FakeSdk | (private) |
| 135 | fn | requireSession | (private) |
| 139 | fn | requireCreateSessionConfig | (private) |
| 143 | fn | requireResumeSessionConfig | (private) |
| 147 | fn | createDeferred | (private) |
| 165 | fn | flushAsync | (private) |
| 172 | fn | tick | (private) |
| 176 | fn | waitForEventLoopTurn | (private) |
| 182 | fn | getPromptErrorCode | (private) |
| 186 | fn | getSdkSessionId | (private) |
| 190 | fn | makeEvent | (private) |
| 200 | fn | makeAssistantMessageEvent | (private) |
| 212 | fn | createFakeSession | (private) |
| 249 | fn | makeFakePool | (private) |
| 262 | fn | makeFakeSdk | (private) |
| 301 | fn | makeParams | (private) |
| 3099 | fn | makeSandboxStub | (private) |
| 3509 | fn | makeFakeSdkTool | (private) |
| 3518 | fn | readAvailableTools | (private) |
| 3755 | fn | toLintErrorObject | (private) |

## extensions/copilot/src/attempt.ts (1820 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | type | AttemptResultWithSdkSessionId | (private) |
| 71 | type | PromptErrorWithCode | (private) |
| 72 | type | CopilotAgentEndHookParams | (private) |
| 73 | type | CopilotSessionConfig | pub |
| 95 | type | AttemptParamsLike | (private) |
| 121 | type | ModelRef | (private) |
| 138 | type | ModelRefInputObject | (private) |
| 158 | type | ResolveSandboxContextFn | (private) |
| 160 | interface | CopilotAttemptDeps | (private) |
| 199 | fn | runCopilotAgentEndHook | (private) |
| 210 | fn | finalizeCopilotAttempt | (private) |
| 233 | fn | awaitDeferredCleanupCompletionOrAbort | (private) |
| 238 | fn | awaitCompletion | (private) |
| 263 | fn | deferBackgroundCompactionCleanup | (private) |
| 320 | fn | cancelBackgroundCompactionBeforeTeardown | (private) |
| 343 | fn | awaitDeferredCleanupBeforeDeadline | (private) |
| 362 | fn | runCopilotAttempt | pub |
| 414 | fn | finishAttempt | (private) |
| 494 | fn | markExternalAbort | (private) |
| 500 | fn | abortActiveSession | (private) |
| 508 | fn | onAbort | (private) |
| 743 | fn | emitLlmInput | (private) |
| 901 | fn | cancelGatewayQuestionBestEffort | (private) |
| 1018 | fn | abortCleanup | (private) |
| 1270 | fn | createResult | (private) |
| 1338 | fn | createPromptError | (private) |
| 1347 | fn | createSessionConfig | (private) |
| 1470 | fn | buildCopilotAvailableTools | (private) |
| 1478 | fn | isSystemAgentOnlyToolAllowlist | (private) |
| 1482 | fn | createMessageOptions | (private) |
| 1504 | fn | resolveProviderRequestHeaders | (private) |
| 1511 | fn | createPromptImageAttachments | (private) |
| 1535 | fn | resolvePromptImages | (private) |
| 1573 | fn | resolveImageCapabilityModel | (private) |
| 1581 | fn | createSystemMessageContent | (private) |
| 1599 | fn | isRawCopilotModelRun | (private) |
| 1603 | fn | getMessagesSnapshotInput | (private) |
| 1612 | fn | readTailUserText | (private) |
| 1642 | fn | hasMirrorIdentity | (private) |
| 1652 | fn | readSessionId | (private) |
| 1659 | fn | readString | (private) |
| 1663 | fn | readResolvedAttemptPath | (private) |
| 1674 | fn | resolveModelRef | (private) |
| 1713 | fn | resolvePoolAcquire | pub |
| 1787 | fn | toError | (private) |
| 1810 | fn | isSdkSendAndWaitTimeoutError | (private) |

## extensions/copilot/src/auth-bridge.test.ts (509 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | cleanEnv | (private) |
| 12 | fn | fakeHomeDir | (private) |
| 17 | fn | resolveAgentId | (private) |

## extensions/copilot/src/event-bridge.test.ts (1159 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | FakeSession | (private) |
| 37 | fn | createDeferred | (private) |
| 55 | fn | flushAsync | (private) |
| 56 | fn | tick | (private) |
| 60 | fn | makeEvent | (private) |
| 70 | fn | makeAssistantMessageEvent | (private) |
| 82 | fn | createFakeSession | (private) |

## extensions/copilot/src/event-bridge.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | AssistantMessage | pub |
| 15 | type | AssistantUsageSnapshot | pub |
| 17 | interface | OnAssistantDeltaPayload | pub |
| 24 | interface | SessionLike | pub |
| 45 | interface | EventBridgeOptions | (private) |
| 67 | interface | EventBridgeSnapshot | (private) |
| 77 | interface | BuildAssistantMessageArgs | (private) |
| 82 | interface | EventBridgeController | (private) |
| 99 | type | MessageAccumulator | (private) |
| 100 | type | PromptErrorWithCode | (private) |
| 102 | fn | attachEventBridge | pub |
| 445 | fn | enqueueCompactionCallback | (private) |
| 453 | fn | enqueueAgentEvent | (private) |
| 461 | fn | invoke | (private) |
| 465 | fn | forwardNativeSubagentEvent | (private) |
| 478 | fn | awaitStableCompaction | (private) |
| 493 | fn | buildAssistantMessage | (private) |
| 544 | fn | createPromptError | (private) |
| 553 | fn | ensureMessageAccumulator | (private) |
| 567 | fn | finalizeAssistantTexts | (private) |
| 584 | fn | isAssistantMessageEvent | (private) |
| 590 | fn | isRootSessionEvent | (private) |
| 594 | fn | isRootCompactionEvent | (private) |
| 600 | fn | joinReasoning | (private) |
| 604 | fn | splitPlanText | (private) |
| 611 | fn | readString | (private) |
| 615 | fn | registerListener | (private) |
| 631 | fn | toLintErrorObject | (private) |

## extensions/copilot/src/runtime.test.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | interface | FakeClient | (private) |
| 17 | interface | FakeFactoryOptions | (private) |
| 25 | fn | createDeferred | (private) |
| 43 | fn | normalizeHomeForTest | (private) |
| 55 | fn | makeKey | (private) |
| 65 | fn | makeOptions | (private) |
| 73 | fn | makeFake | (private) |
| 79 | fn | fake | (private) |
| 278 | fn | sdkFactory | (private) |
| 360 | fn | sdkFactory | (private) |
| 490 | fn | toLintErrorObject | (private) |

## extensions/copilot/src/tool-bridge.test.ts (1900 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | CopilotToolBridgeInput | (private) |
| 9 | type | ConvertToolOptions | (private) |
| 17 | type | FakeTool | (private) |
| 22 | fn | createDeferred | (private) |
| 40 | fn | flushAsync | (private) |
| 44 | fn | makeInvocation | (private) |
| 54 | fn | makeTool | (private) |
| 74 | fn | getError | (private) |
| 78 | fn | runSdkTool | (private) |
| 85 | fn | convertOpenClawToolToSdkToolForTest | (private) |
| 460 | fn | captureCall | (private) |
| 856 | fn | makeSandboxStub | (private) |
| 1671 | type | CatalogExecutor | (private) |

## extensions/copilot/src/tool-bridge.ts (862 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | CreateOpenClawCodingTools | (private) |
| 29 | type | OpenClawCodingToolsOptions | (private) |
| 30 | type | AgentHarnessToolSurfaceRuntime | (private) |
| 31 | type | CatalogExecuteParams | (private) |
| 43 | interface | CopilotSessionHolder | (private) |
| 61 | type | CopilotToolAttemptParams | (private) |
| 62 | type | CopilotToolTerminalObserver | (private) |
| 64 | type | CopilotToolCompletion | (private) |
| 73 | interface | CopilotToolBridgeInput | (private) |
| 146 | interface | CopilotToolBridge | (private) |
| 156 | fn | supportsModelTools | (private) |
| 160 | fn | createCopilotToolBridge | pub |
| 302 | fn | buildOpenClawCodingToolsOptions | (private) |
| 458 | fn | convertOpenClawToolToSdkTool | (private) |
| 479 | fn | notifyToolResult | (private) |
| 486 | fn | notifyToolCompleted | (private) |
| 661 | fn | executeCatalogTool | (private) |
| 743 | fn | toToolStartArgs | (private) |
| 749 | fn | createFailureResult | (private) |
| 761 | fn | createError | (private) |
| 775 | fn | isCopilotRawModelRun | (private) |
| 788 | fn | shouldForceCopilotMessageTool | (private) |
| 801 | fn | filterCopilotToolsForAllowlist | (private) |
| 811 | fn | filterCopilotToolsForConstructionPlan | (private) |
| 834 | fn | hasNonWildcardGlobAllowlist | (private) |
| 841 | fn | readInlinePluginToolMeta | (private) |
| 846 | fn | findDuplicateToolNames | (private) |
| 860 | fn | toError | (private) |
