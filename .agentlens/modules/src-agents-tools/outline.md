# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 43 large files in this module.

## src/agents/tools/ask-user-tool.test.ts (899 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | GatewayCall | (private) |
| 32 | fn | gatewayStub | (private) |
| 44 | fn | requestedQuestionId | (private) |

## src/agents/tools/ask-user-tool.ts (762 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | AskUserGatewayCall | (private) |
| 72 | type | AskUserQuestionPhase | (private) |
| 80 | type | AskUserQuestionState | (private) |
| 96 | fn | askUserQuestions | (private) |
| 106 | type | NormalizedAskUserParams | (private) |
| 111 | fn | readRequiredString | (private) |
| 118 | fn | normalizeOption | (private) |
| 139 | fn | normalizeAskUserParams | pub |
| 209 | fn | buildAskUserQuestionId | (private) |
| 215 | fn | askUserSessionKey | (private) |
| 219 | fn | findAskUserQuestionForSession | (private) |
| 228 | fn | transitionAskUserQuestion | (private) |
| 236 | fn | releaseAskUserQuestion | (private) |
| 249 | fn | waitForQuestionChange | (private) |
| 255 | fn | wake | (private) |
| 259 | fn | onAbort | (private) |
| 269 | fn | reserveAskUserPromptDelivery | pub |
| 296 | fn | waitForAskUserPromptReady | pub |
| 334 | fn | readAskUserQuestionStatus | (private) |
| 359 | type | AskUserPromptStatusRead | (private) |
| 364 | fn | readAskUserQuestionStatusBeforeExpiry | (private) |
| 375 | fn | finish | (private) |
| 392 | fn | markAskUserPromptReady | (private) |
| 402 | fn | settleAskUserPromptDelivery | pub |
| 414 | fn | isAskUserPromptPending | pub |
| 466 | fn | cancelAskUserPromptDelivery | pub |
| 474 | fn | answeredResult | (private) |
| 483 | fn | noAnswerResult | (private) |
| 492 | fn | waitForPromptDelivery | (private) |
| 508 | fn | readQuestionErrorReason | (private) |
| 524 | fn | isTerminalQuestionResolveError | (private) |
| 529 | fn | resetPendingAskUserQuestionsForTest | (private) |
| 542 | fn | createAskUserTool | pub |
| 596 | fn | cancelPendingQuestion | (private) |
| 623 | fn | cancelOnAbort | (private) |
| 629 | fn | finishWait | (private) |

## src/agents/tools/common.ts (585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | ErasedAgentToolExecute | (private) |
| 54 | type | AnyAgentTool | pub |
| 71 | fn | asToolParamsRecord | pub |
| 77 | type | StringParamOptions | (private) |
| 89 | class | ToolInputError | pub |
| 98 | class | ToolAuthorizationError | pub |
| 107 | fn | createActionGate | pub |
| 119 | fn | readParamRaw | (private) |
| 125 | fn | isBlankParamValue | (private) |
| 129 | fn | readStringParam | pub |
| 134 | fn | readStringParam | pub |
| 139 | fn | readStringParam | pub |
| 168 | fn | normalizeToolModelOverride | pub |
| 179 | fn | readStringOrNumberParam | pub |
| 201 | fn | readNumberParam | pub |
| 249 | fn | readPositiveIntegerParam | pub |
| 273 | fn | readNonNegativeIntegerParam | pub |
| 297 | fn | readFiniteNumberParam | pub |
| 333 | fn | readStringArrayParam | pub |
| 338 | fn | readStringArrayParam | pub |
| 343 | fn | readStringArrayParam | pub |
| 376 | type | ReactionParams | (private) |
| 382 | fn | readReactionParams | pub |
| 403 | fn | stringifyToolPayload | (private) |
| 418 | fn | failedTextResult | pub |
| 425 | fn | payloadTextResult | pub |
| 429 | type | PublicToolProgress | (private) |
| 431 | fn | toolProgressResult | (private) |
| 446 | fn | emitToolProgress | (private) |
| 463 | fn | scheduleToolProgress | pub |
| 473 | fn | clear | (private) |
| 489 | fn | imageResult | (private) |
| 526 | fn | imageResultFromFile | pub |
| 546 | type | AvailableTag | (private) |
| 559 | fn | parseAvailableTags | pub |

## src/agents/tools/computer-tool.test.ts (1047 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | imageIdentity | (private) |
| 40 | fn | macComputerNode | (private) |
| 51 | fn | screenshotPayload | (private) |
| 64 | fn | readFrameId | (private) |
| 72 | fn | readLastComputerActParams | (private) |
| 83 | fn | executeComputerAction | (private) |
| 96 | fn | computerToolResult | (private) |

## src/agents/tools/computer-tool.ts (955 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | ComputerToolAction | (private) |
| 175 | type | ComputerActWireParams | (private) |
| 192 | fn | readCoordinate | (private) |
| 216 | fn | requireCoordinate | (private) |
| 224 | fn | readModifiers | (private) |
| 233 | fn | buildComputerActParams | (private) |
| 314 | fn | isEligibleComputerNode | (private) |
| 327 | fn | nodeMatchesQuery | (private) |
| 336 | fn | resolveComputerNode | (private) |
| 384 | type | ScreenshotCapture | (private) |
| 392 | fn | invokeNodeCommand | (private) |
| 418 | fn | computerActIdempotencyKey | (private) |
| 433 | fn | captureScreenshot | (private) |
| 473 | fn | resolveReferenceWidth | (private) |
| 484 | type | ComputerContextEpoch | pub |
| 492 | fn | computerFrameImageIdentity | (private) |
| 512 | fn | invalidateComputerFrame | (private) |
| 526 | fn | invalidateComputerFrameIfMissing | pub |
| 560 | fn | withArmHint | (private) |
| 573 | fn | isDefinitiveComputerActRejection | (private) |
| 586 | fn | isButtonAlreadyReleasedError | (private) |
| 594 | fn | createComputerTool | pub |
| 604 | type | ComputerTarget | (private) |
| 605 | type | ComputerState | (private) |
| 619 | fn | setComputerState | (private) |
| 675 | fn | explicitScreenIndex | (private) |

## src/agents/tools/cron-tool.test.ts (3119 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | SchemaLike | (private) |
| 34 | type | TestDelivery | (private) |
| 42 | fn | createTestCronTool | (private) |
| 63 | fn | readGatewayCall | (private) |
| 71 | fn | readGatewayOpts | (private) |
| 75 | fn | readCronPayloadText | (private) |
| 80 | fn | expectSingleGatewayCallMethod | (private) |
| 98 | fn | buildReminderAgentTurnJob | (private) |
| 112 | fn | executeAddAndReadDelivery | (private) |
| 135 | fn | executeAddAndReadSessionKey | (private) |
| 155 | fn | executeAddAndReadAgentId | (private) |
| 174 | fn | executeAddWithContextMessages | (private) |

## src/agents/tools/cron-tool.ts (1187 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | isMissingOrEmptyObject | (private) |
| 93 | fn | nullableStringSchema | (private) |
| 97 | fn | nullableStringArraySchema | (private) |
| 101 | fn | deliveryStringSchema | (private) |
| 107 | fn | deliveryThreadIdSchema | (private) |
| 114 | fn | failureDestinationModeSchema | (private) |
| 121 | fn | cronPayloadObjectSchema | (private) |
| 145 | fn | createCronScheduleSchema | (private) |
| 174 | fn | createCronPacingSchema | (private) |
| 188 | fn | assertCronPacingInput | (private) |
| 198 | fn | createCronPayloadSchema | (private) |
| 208 | fn | createCronTriggerSchema | (private) |
| 219 | fn | cronDeliverySchema | (private) |
| 270 | fn | createCronDeliverySchema | (private) |
| 274 | fn | createCronDeliveryPatchSchema | (private) |
| 283 | fn | createCronFailureAlertSchema | (private) |
| 302 | fn | createCronJobObjectSchema | (private) |
| 349 | fn | createCronPatchObjectSchema | (private) |
| 385 | fn | createCronToolSchema | (private) |
| 426 | fn | replaceWithEffectiveCronCreatorToolAllowlist | pub |
| 446 | fn | stripExistingContext | (private) |
| 454 | fn | truncateText | (private) |
| 462 | fn | readCronJobIdParam | (private) |
| 466 | fn | resolveCronToolCallerScope | (private) |
| 480 | fn | readCronToolAgentId | (private) |
| 484 | fn | readAgentIdFromCronToolSessionRef | (private) |
| 490 | fn | readAgentIdFromCronToolSessionTarget | (private) |
| 501 | fn | assertCronToolAgentFieldMatchesScope | (private) |
| 516 | fn | assertCronToolSessionRefsMatchScope | (private) |
| 532 | fn | readCronSelfRemoveOnlyJobId | (private) |
| 536 | fn | isCronSelfIntrospectionAction | (private) |
| 540 | fn | assertCronSelfRemoveScope | (private) |
| 561 | fn | filterCronDeliveryPreviewsByJobId | (private) |
| 571 | fn | filterCronListResultToJobId | (private) |
| 590 | fn | filterCronStatusResultForSelfScope | (private) |
| 594 | fn | formatCronTerminalPresentation | (private) |
| 634 | fn | cronListResultHasJob | (private) |
| 642 | fn | readCronListNextOffset | (private) |
| 650 | fn | isOlderGatewayWithoutCompactCronList | (private) |
| 659 | fn | extractMessageText | (private) |
| 668 | fn | buildReminderContextLines | (private) |
| 723 | fn | createCronTool | pub |

## src/agents/tools/embedded-gateway-stub.test.ts (584 lines)

_No symbols extracted._

## src/agents/tools/gateway.test.ts (959 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | capturedGatewayCall | (private) |

## src/agents/tools/gateway.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | GatewayCallOptions | pub |
| 43 | type | GatewayOverrideTarget | (private) |
| 46 | fn | readGatewayCallOptions | pub |
| 57 | fn | canonicalizeToolGatewayWsUrl | (private) |
| 87 | fn | resolveLocalGatewayUrlKeys | (private) |
| 99 | fn | resolveConfiguredRemoteGatewayKey | (private) |
| 114 | fn | resolveDefaultGatewayTarget | (private) |
| 132 | fn | validateGatewayUrlOverrideForAgentTools | (private) |
| 157 | fn | resolveGatewayOverrideToken | (private) |
| 177 | fn | resolveGatewayOptions | pub |
| 229 | fn | resolveApprovalRuntimeTokenForGatewayTool | (private) |
| 248 | fn | isApprovalReplayNodeSystemRun | (private) |
| 255 | fn | attachNodeInvokeTurnSource | (private) |
| 275 | fn | omitNodeInvokeTurnSource | (private) |
| 284 | fn | stripNodeInvokeTurnSource | (private) |
| 289 | fn | resolveApprovalRequesterDeviceIdentityForGatewayTool | (private) |
| 338 | fn | resolveAgentRuntimeIdentityTokenForGatewayTool | (private) |
| 378 | fn | resolveMessageActionAgentRuntimeIdentityToken | pub |
| 451 | fn | isStaleGatewayAgentRuntimeIdentityRejection | (private) |
| 467 | fn | isStaleGatewayNodeInvokeTurnSourceRejection | (private) |
| 490 | fn | staleGatewayAgentRuntimeIdentityError | (private) |
| 503 | fn | callGatewayTool | pub |

## src/agents/tools/image-generate-tool.test.ts (2736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | hasStubbedImageProviderAuth | (private) |
| 87 | fn | stubImageGenerationProviders | (private) |
| 142 | fn | requireImageGenerateTool | (private) |
| 150 | type | UnknownMock | (private) |
| 152 | fn | mockCallArg | (private) |
| 169 | fn | requireRecord | (private) |
| 176 | type | ImageGenerateTool | (private) |
| 177 | type | ToolResult | (private) |
| 179 | fn | resultDetails | (private) |
| 183 | fn | resultText | (private) |
| 187 | fn | ensureDefaultImageGenerationProvidersStubbed | (private) |
| 194 | fn | createToolWithPrimaryImageModel | (private) |
| 221 | fn | stubEditedImageFlow | (private) |
| 261 | fn | createFalEditProvider | (private) |

## src/agents/tools/image-generate-tool.ts (1229 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 123 | type | FalCreativity | (private) |
| 248 | fn | resolveImageGenerationModelConfigForTool | (private) |
| 270 | fn | hasExplicitImageGenerationModelConfig | (private) |
| 274 | fn | resolveAction | (private) |
| 282 | fn | resolveRequestedCount | (private) |
| 298 | fn | normalizeResolution | (private) |
| 309 | fn | normalizeAspectRatio | (private) |
| 322 | fn | normalizeQuality | (private) |
| 333 | fn | normalizeOutputFormat | (private) |
| 344 | fn | normalizeOpenAIBackground | (private) |
| 357 | fn | normalizeBackground | (private) |
| 368 | fn | normalizeOpenAIModeration | (private) |
| 381 | fn | normalizeFalCreativity | (private) |
| 392 | fn | readRecordParam | (private) |
| 399 | fn | normalizeOpenAIOptions | (private) |
| 421 | fn | normalizeProviderOptions | (private) |
| 433 | fn | normalizeReferenceImages | (private) |
| 443 | fn | resolveSelectedImageGenerationProvider | (private) |
| 456 | fn | resolveSelectedImageGenerationModelId | (private) |
| 481 | fn | resolveReachableImageGenerationMaxInputImages | (private) |
| 504 | fn | modelDisablesImageResolution | (private) |
| 514 | fn | formatIgnoredImageGenerationOverride | (private) |
| 518 | fn | sanitizeInlineDirectiveText | (private) |
| 545 | fn | isInlineDirectiveControlCharacter | (private) |
| 550 | fn | validateImageGenerationCapabilities | (private) |
| 589 | type | ImageGenerateSandboxConfig | (private) |
| 594 | fn | loadReferenceImages | (private) |
| 632 | fn | resolvedImage | (private) |
| 701 | fn | inferResolutionFromInputImages | (private) |
| 719 | type | LoadedReferenceImage | (private) |
| 721 | type | ExecutedImageGeneration | (private) |
| 738 | fn | executeImageGenerationJob | (private) |
| 898 | fn | createImageGenerateTool | pub |

## src/agents/tools/image-tool.test.ts (3316 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | jsonRoundTrip | (private) |
| 114 | fn | readMockAuthProfileStore | (private) |
| 269 | fn | writeAuthProfiles | (private) |
| 278 | fn | withTempAgentDir | (private) |
| 291 | fn | createLargeColorBlockPng | (private) |
| 304 | fn | readJpegDimensions | (private) |
| 330 | fn | readPngDimensions | (private) |
| 340 | fn | withTempWorkspacePng | (private) |
| 357 | fn | registerImageToolEnvReset | (private) |
| 370 | fn | stubMinimaxOkFetch | (private) |
| 387 | fn | stubMinimaxFetch | (private) |
| 410 | fn | stubOpenAiCompletionsOkFetch | (private) |
| 456 | fn | createMinimaxImageConfig | (private) |
| 472 | fn | createDefaultImageFallbackExpectation | (private) |
| 510 | fn | describeMoonshotImage | (private) |
| 542 | fn | describeMoonshotImages | (private) |
| 557 | fn | readMockResponseText | (private) |
| 569 | fn | describeGenericImageWithModel | (private) |
| 585 | fn | describeGenericImagesWithModel | (private) |
| 632 | fn | installImageUnderstandingProviderDeps | (private) |
| 693 | fn | installImageUnderstandingProviderStubs | (private) |
| 697 | fn | installFastLocalImageProviderStubs | (private) |
| 748 | fn | makeModelDefinition | (private) |
| 760 | fn | expectImageToolExecOk | (private) |
| 773 | type | ToolTextResult | (private) |
| 782 | fn | expectToolText | (private) |
| 787 | fn | firstImageRequest | (private) |
| 795 | fn | fetchCallAt | (private) |
| 803 | fn | requireImageTool | (private) |
| 811 | fn | createRequiredImageTool | (private) |
| 815 | type | ImageToolInstance | (private) |
| 817 | fn | withTempSandboxState | (private) |
| 832 | fn | withMinimaxImageToolFromTempAgentDir | (private) |
| 841 | fn | findSchemaUnionKeywords | (private) |
| 861 | type | Profiles | (private) |
| 862 | type | ImplicitImageRoutingCase | (private) |
| 895 | fn | writeProfiles | (private) |
| 2660 | fn | createMinimaxVlmFixture | (private) |
| 2813 | fn | withManagedInboundPng | (private) |
| 2870 | fn | createAssistantMessage | (private) |

## src/agents/tools/image-tool.ts (1174 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | type | ImageToolLoadWebMediaOptions | (private) |
| 109 | type | ImageWebMediaRuntime | (private) |
| 117 | fn | loadImageWebMediaRuntime | (private) |
| 121 | type | ResolveModelAsync | (private) |
| 128 | fn | resolveRegisteredMediaUnderstandingProvider | (private) |
| 153 | fn | hasExplicitDefaultPrimaryModel | (private) |
| 161 | fn | modelRefProvider | (private) |
| 169 | fn | isExecutionAliasCandidateForProvider | (private) |
| 181 | fn | isCanonicalCandidateShadowedByExecutionAlias | (private) |
| 242 | fn | resolveImageToolMaxTokens | (private) |
| 261 | fn | resolveImageModelConfigForTool | (private) |
| 278 | fn | resolveCodexMediaRoute | (private) |
| 316 | fn | primaryCandidates | (private) |
| 404 | fn | resolveImageModelConfigForOverride | (private) |
| 418 | fn | pickMaxBytes | (private) |
| 429 | fn | resolveCompressionModelCandidates | (private) |
| 454 | fn | imageCompressionPolicyHasDimensionLimit | (private) |
| 458 | fn | mergeImageCompressionPolicies | (private) |
| 468 | fn | resolveBundledStaticCompressionModelPolicy | (private) |
| 484 | fn | providerUsesRuntimeModelAugment | (private) |
| 524 | fn | resolveCompressionModelPolicyWithHooks | (private) |
| 551 | fn | resolveCompressionModelPolicy | (private) |
| 583 | fn | resolveImageCompressionPolicy | (private) |
| 611 | fn | matchesImageTimeoutEntry | (private) |
| 644 | fn | resolveImageToolTimeoutMs | (private) |
| 675 | type | ImageSandboxConfig | (private) |
| 680 | fn | runImagePrompt | (private) |
| 813 | fn | createImageTool | pub |
| 1051 | fn | resolvedImage | (private) |

## src/agents/tools/media-generate-background-shared.test.ts (1163 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | createImageMediaLifecycle | (private) |

## src/agents/tools/media-generate-background-shared.ts (748 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | MediaGenerationTaskHandle | pub |
| 58 | type | MediaGenerateBackgroundScheduler | pub |
| 61 | type | MediaGenerateAsyncStartCallback | pub |
| 64 | fn | shouldDetachMediaGenerationTask | pub |
| 95 | type | MediaGenerationExecutionResult | (private) |
| 105 | type | CreateMediaGenerationTaskRunParams | (private) |
| 112 | type | RecordMediaGenerationTaskProgressParams | (private) |
| 118 | type | CompleteMediaGenerationTaskRunParams | (private) |
| 127 | type | FailMediaGenerationTaskRunParams | (private) |
| 132 | type | WakeMediaGenerationTaskCompletionParams | (private) |
| 143 | type | MediaGenerationCompletionWakeOutcome | (private) |
| 148 | type | MediaGenerationTaskLifecycle | (private) |
| 158 | fn | waitForMediaGenerationCompletionHandoffRetry | (private) |
| 165 | fn | wakeMediaGenerationTaskCompletionWithRetry | (private) |
| 191 | fn | touchMediaGenerationTaskRunContext | (private) |
| 199 | fn | createMediaGenerationTaskRun | (private) |
| 262 | fn | recordMediaGenerationTaskProgress | (private) |
| 281 | fn | clearMediaGenerationTaskRunContext | (private) |
| 298 | fn | withMediaGenerationTaskKeepalive | (private) |
| 322 | fn | completeMediaGenerationTaskRun | (private) |
| 354 | fn | failMediaGenerationTaskRun | (private) |
| 380 | fn | buildMediaGenerationReplyInstruction | (private) |
| 399 | fn | createDefaultMediaGenerateBackgroundScheduler | pub |
| 413 | fn | buildMediaGenerationStartedToolResult | pub |
| 452 | fn | notifyMediaGenerationAsyncTaskStarted | pub |
| 475 | fn | scheduleMediaGenerationTaskCompletion | pub |
| 487 | fn | runBackgroundWork | (private) |
| 524 | fn | recordCompletionDeliveryProgress | (private) |
| 601 | fn | wakeMediaGenerationTaskCompletion | (private) |
| 698 | fn | createMediaGenerationTaskLifecycle | pub |

## src/agents/tools/media-tool-shared.ts (689 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | TextToolAttempt | (private) |
| 56 | type | TextToolResult | (private) |
| 63 | type | GenerationModelRef | (private) |
| 68 | type | ParseGenerationModelRef | (private) |
| 70 | type | MediaReferenceDetailEntry | (private) |
| 74 | type | TaskRunDetailHandle | (private) |
| 84 | fn | applyImageModelConfigDefaults | pub |
| 94 | fn | applyImageGenerationModelConfigDefaults | pub |
| 104 | fn | applyVideoGenerationModelConfigDefaults | pub |
| 114 | fn | applyMusicGenerationModelConfigDefaults | pub |
| 124 | fn | readGenerationTimeoutMs | pub |
| 133 | fn | resolveRemoteMediaSsrfPolicy | pub |
| 139 | fn | applyAgentDefaultModelConfig | (private) |
| 159 | type | CapabilityProvider | (private) |
| 167 | type | CapabilityProviderSource | (private) |
| 169 | type | GenerationCapabilityProviderKey | (private) |
| 174 | fn | parseCapabilityModelRefForProviders | (private) |
| 191 | fn | isCapabilityProviderConfigured | pub |
| 236 | fn | resolveSelectedCapabilityProvider | pub |
| 263 | fn | resolveCapabilityModelCandidatesForTool | (private) |
| 327 | fn | resolveCapabilityModelConfigForTool | pub |
| 373 | fn | hasGenerationToolAvailability | pub |
| 435 | fn | formatQuotedList | (private) |
| 451 | fn | resolveGenerateAction | pub |
| 470 | fn | readBooleanToolParam | pub |
| 480 | fn | normalizeMediaReferenceInputs | pub |
| 512 | fn | buildMediaReferenceDetails | pub |
| 544 | fn | buildTaskRunDetails | pub |
| 560 | fn | resolveMediaToolLocalRoots | pub |
| 583 | fn | resolveMediaToolInboundRoots | pub |
| 604 | fn | resolvePromptAndModelOverride | pub |
| 619 | fn | buildTextToolResult | pub |
| 639 | fn | resolveModelFromRegistry | pub |
| 663 | fn | resolveModelRuntimeApiKey | pub |

## src/agents/tools/message-tool.test.ts (3885 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | CreateMessageTool | (private) |
| 20 | type | CreateOpenClawTools | (private) |
| 21 | type | ResetPluginRuntimeStateForTest | (private) |
| 23 | type | SetActivePluginRegistry | (private) |
| 24 | type | CreateTestRegistry | (private) |
| 35 | type | DescribeMessageTool | (private) |
| 38 | type | MessageToolDiscoveryContext | (private) |
| 39 | type | MessageToolSchema | (private) |
| 41 | fn | createTelegramPollExtraToolSchemas | (private) |
| 78 | fn | maybeCollectSecretPath | (private) |
| 136 | type | RunMessageActionInput | (private) |
| 173 | fn | firstRunMessageActionInput | (private) |
| 177 | fn | lastRunMessageActionInput | (private) |
| 181 | fn | latestSecretResolveCall | (private) |
| 201 | fn | tool | (private) |
| 313 | fn | mockSendResult | (private) |
| 326 | fn | getToolProperties | (private) |
| 330 | fn | getActionEnum | (private) |
| 334 | fn | expectStringSchema | (private) |
| 379 | fn | createChannelPlugin | (private) |
| 427 | fn | registerMessagingPlugin | (private) |
| 445 | fn | executeSend | (private) |
| 453 | fn | executeSendWithResult | (private) |
| 554 | fn | createPollVoteTool | (private) |
| 611 | fn | castBlueVote | (private) |
| 1049 | fn | createSourceLessTool | (private) |
| 1926 | fn | mockQaChannelGatewayActionRunner | (private) |

## src/agents/tools/message-tool.ts (1769 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 105 | fn | actionNeedsExplicitTarget | (private) |
| 109 | fn | normalizeMessageToolIdempotencyKeyPart | (private) |
| 127 | fn | stripMessageToolIdempotencyEnvelope | (private) |
| 139 | fn | canonicalizeMessageToolIdempotencyValue | (private) |
| 154 | fn | buildMessageToolDeliveryFingerprint | (private) |
| 167 | fn | buildMessageToolAutogeneratedIdempotencyKey | (private) |
| 175 | fn | normalizeEscapedLineBreaksForVisibleText | (private) |
| 184 | type | VisibleTextSuppressionReason | (private) |
| 203 | fn | resolvePollVoteEchoRoute | (private) |
| 244 | fn | sanitizeUserVisibleToolTextResult | (private) |
| 274 | fn | sanitizeStringParam | (private) |
| 287 | fn | sanitizeStringArrayParam | (private) |
| 313 | fn | sanitizePresentationTextFieldsResult | (private) |
| 501 | fn | readFirstStringParam | (private) |
| 511 | fn | readStructuredAttachmentMediaParams | (private) |
| 531 | fn | hasSanitizedSendPayloadContent | (private) |
| 552 | fn | buildRoutingSchema | (private) |
| 663 | fn | buildSendSchema | (private) |
| 754 | fn | buildReactionSchema | (private) |
| 786 | fn | buildFetchSchema | (private) |
| 799 | fn | buildPollSchema | (private) |
| 852 | fn | buildChannelTargetSchema | (private) |
| 880 | fn | buildStickerSchema | (private) |
| 891 | fn | buildThreadSchema | (private) |
| 899 | fn | buildEventSchema | (private) |
| 911 | fn | buildModerationSchema | (private) |
| 920 | fn | buildGatewaySchema | (private) |
| 924 | fn | buildPresenceSchema | (private) |
| 952 | fn | buildChannelManagementSchema | (private) |
| 975 | fn | buildMessageToolSchemaProps | (private) |
| 1032 | type | MessageToolOptions | (private) |
| 1065 | type | MessageToolDiscoveryParams | (private) |
| 1079 | type | MessageActionDiscoveryInput | (private) |
| 1084 | type | InferredSessionDelivery | (private) |
| 1092 | fn | formatSessionDeliveryTarget | (private) |
| 1099 | fn | resolveSessionDeliveryChatType | (private) |
| 1109 | fn | inferDeliveryFromSessionKey | (private) |
| 1130 | fn | resolveEffectiveCurrentChannelContext | (private) |
| 1166 | fn | buildMessageActionDiscoveryInput | (private) |
| 1185 | fn | resolveMessageToolSchemaActions | (private) |
| 1209 | fn | resolveMessageToolActionSchemaActions | (private) |
| 1223 | fn | listAllMessageToolActions | (private) |
| 1228 | fn | resolveIncludeCapability | (private) |
| 1242 | fn | resolveIncludePresentation | (private) |
| 1246 | fn | resolveIncludeDeliveryPin | (private) |
| 1250 | fn | resolveIncludeBestEffort | (private) |
| 1266 | fn | buildMessageToolSchema | (private) |
| 1290 | fn | resolveAgentAccountId | (private) |
| 1298 | fn | buildMessageToolDescription | (private) |
| 1353 | fn | createMessageTool | pub |

## src/agents/tools/music-generate-tool.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 150 | fn | asConfig | (private) |
| 154 | fn | expectMusicGenerateTool | (private) |
| 164 | fn | resetMusicGenerateMocks | (private) |
| 188 | fn | detailsOf | (private) |
| 195 | fn | generateMusicOptions | (private) |
| 205 | fn | taskProgressCall | (private) |
| 213 | fn | taskCompleteCall | (private) |
| 221 | fn | wakeCompletionCall | (private) |

## src/agents/tools/music-generate-tool.ts (854 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 151 | fn | resolveMusicGenerationModelConfigForTool | (private) |
| 167 | fn | hasExplicitMusicGenerationModelConfig | (private) |
| 171 | fn | resolveSelectedMusicGenerationProvider | (private) |
| 184 | fn | resolveAction | (private) |
| 192 | fn | normalizeOutputFormat | (private) |
| 205 | fn | normalizeReferenceImageInputs | (private) |
| 215 | fn | validateMusicGenerationCapabilities | (private) |
| 249 | type | MusicGenerateSandboxConfig | (private) |
| 254 | type | MusicGenerationTimeoutNormalization | (private) |
| 260 | fn | normalizeMusicGenerationTimeoutMs | (private) |
| 295 | fn | loadReferenceImages | (private) |
| 403 | type | LoadedReferenceImage | (private) |
| 405 | type | ExecutedMusicGeneration | (private) |
| 417 | fn | executeMusicGenerationJob | (private) |
| 574 | fn | createMusicGenerateTool | pub |

## src/agents/tools/nodes-tool.test.ts (926 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | mockNodePairApproveFlow | (private) |
| 132 | fn | expectNodePairApproveScopes | (private) |

## src/agents/tools/pdf-tool.test.ts (1065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | PdfToolModule | (private) |
| 41 | fn | loadCreatePdfTool | (private) |
| 59 | fn | requirePdfTool | (private) |
| 71 | type | PdfToolInstance | (private) |
| 73 | fn | withConfiguredPdfTool | (private) |
| 83 | fn | withPdfModel | (private) |
| 89 | fn | withDefaultModel | (private) |
| 95 | fn | expectFields | (private) |
| 105 | fn | firstMockCall | (private) |
| 113 | fn | firstCompletionContext | (private) |
| 121 | fn | createPdfModelRegistry | (private) |
| 128 | fn | stubPdfToolInfra | (private) |
| 188 | fn | withManagedInboundPdf | (private) |
| 629 | fn | find | (private) |
| 671 | fn | find | (private) |

## src/agents/tools/pdf-tool.ts (602 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 92 | fn | hasExplicitPdfToolModelConfig | (private) |
| 106 | fn | buildPdfExtractionContext | (private) |
| 142 | type | PdfSandboxConfig | (private) |
| 147 | fn | runPdfPrompt | (private) |
| 334 | fn | createPdfTool | pub |
| 482 | fn | resolvedPdf | (private) |

## src/agents/tools/session-status-tool.ts (1102 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 164 | type | SessionStatusStateChanges | (private) |
| 166 | fn | compactSessionStateEventPayload | (private) |
| 190 | fn | compactSessionStateChanges | (private) |
| 209 | type | CommandsStatusRuntimeModule | (private) |
| 217 | fn | loadCommandsStatusRuntime | (private) |
| 221 | type | ActiveStatusModelIdentity | (private) |
| 223 | type | SessionStatusOriginDetails | (private) |
| 229 | type | SessionStatusDeliveryContextDetails | (private) |
| 236 | type | SessionStatusRouteDetails | (private) |
| 244 | fn | readRouteThreadId | (private) |
| 254 | fn | compactOriginDetails | (private) |
| 268 | fn | compactDeliveryContextDetails | (private) |
| 284 | fn | normalizeStatusDeliveryContext | (private) |
| 295 | fn | normalizeActiveDeliveryContext | (private) |
| 312 | fn | inferOriginProviderFromSessionKey | (private) |
| 322 | fn | buildSessionStatusRouteDetails | (private) |
| 347 | fn | formatSessionStatusRouteContext | (private) |
| 357 | fn | formatSessionStateChanges | (private) |
| 367 | fn | resolveActiveStatusModelIdentity | (private) |
| 398 | fn | withActiveStatusModelIdentity | (private) |
| 413 | fn | formatSessionTaskLine | (private) |
| 437 | fn | resolveModelOverride | (private) |
| 523 | fn | createSessionStatusTool | pub |
| 560 | fn | isLegacyMainVisibilityKey | (private) |
| 564 | fn | resolveVisibilityMainSessionKey | (private) |
| 577 | fn | normalizeVisibilityTargetSessionKey | (private) |
| 651 | fn | ensureAgentAccess | (private) |

## src/agents/tools/sessions-access.test.ts (542 lines)

_No symbols extracted._

## src/agents/tools/sessions-history-tool.test.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | CallGatewayRequest | (private) |
| 17 | type | HistoryMessage | (private) |
| 27 | fn | useLoggingConfig | (private) |
| 36 | fn | writeSessionStore | (private) |
| 49 | fn | createHistoryToolWithMessage | (private) |
| 68 | fn | readHistoryDetails | (private) |
| 72 | fn | readMessageSeq | (private) |
| 84 | fn | readMessageId | (private) |

## src/agents/tools/sessions-history-tool.ts (513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | GatewayCaller | (private) |
| 78 | type | ChatHistoryPaginationMetadata | (private) |
| 85 | fn | readOffsetParam | (private) |
| 95 | fn | truncateHistoryText | (private) |
| 111 | fn | sanitizeHistoryContentBlock | (private) |
| 168 | fn | sanitizeHistoryMessage | (private) |
| 213 | fn | enforceSessionsHistoryHardCap | (private) |
| 233 | fn | readHistoryMessageSeq | (private) |
| 245 | fn | readHistoryMessageId | (private) |
| 257 | fn | capSessionsHistoryAroundMessage | (private) |
| 303 | fn | buildSessionsHistoryOmittedPlaceholder | (private) |
| 320 | fn | resolveSessionsHistoryPaginationMetadata | (private) |
| 375 | fn | createSessionsHistoryTool | pub |

## src/agents/tools/sessions-resolution.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | GatewayCaller | (private) |
| 43 | fn | resolveMainSessionAlias | pub |
| 50 | fn | resolveDisplaySessionKey | pub |
| 60 | fn | resolveInternalSessionKey | pub |
| 75 | fn | resolveCurrentSessionClientAlias | pub |
| 92 | fn | isRequesterSpawnedSessionVisible | (private) |
| 121 | fn | looksLikeSessionKey | (private) |
| 148 | fn | shouldResolveSessionIdInput | pub |
| 153 | type | SessionReferenceResolution | (private) |
| 162 | type | VisibleSessionReferenceResolution | (private) |
| 175 | fn | buildResolvedSessionReference | (private) |
| 193 | fn | buildSessionIdResolveParams | (private) |
| 208 | fn | callGatewayResolveSession | (private) |
| 237 | fn | callGatewayResolveSessionId | (private) |
| 253 | fn | resolveSessionKeyFromSessionId | (private) |
| 289 | fn | resolveSessionKeyFromKey | (private) |
| 319 | fn | tryResolveSessionKeyFromSessionId | (private) |
| 340 | fn | resolveSessionReferenceByKeyOrSessionId | (private) |
| 388 | fn | resolveSessionReference | pub |
| 446 | fn | resolveVisibleSessionReference | pub |

## src/agents/tools/sessions-search-tool.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | GatewayCaller | (private) |
| 79 | type | GatewaySearchHit | (private) |
| 89 | type | SanitizedSearchHit | (private) |
| 99 | type | SearchSessionCandidate | (private) |
| 108 | fn | sanitizeHit | (private) |
| 143 | fn | capSearchHits | (private) |
| 161 | fn | listVisibleSearchSessions | (private) |
| 178 | fn | candidateId | (private) |
| 195 | fn | listPages | (private) |
| 273 | fn | compareSearchHits | (private) |
| 282 | fn | resolveHitVisibilityKey | (private) |
| 301 | fn | matchSearchHitCandidate | (private) |
| 319 | fn | createSessionsSearchTool | pub |

## src/agents/tools/sessions-send-tool.a2a.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | firstMockArg | (private) |
| 75 | fn | requireGatewayCall | (private) |

## src/agents/tools/sessions-send-tool.ts (897 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 129 | type | GatewayCaller | (private) |
| 133 | fn | normalizeSessionsSendArguments | (private) |
| 155 | fn | resolveConfiguredAgentMainSessionKey | (private) |
| 171 | fn | isConfiguredAgentMainSessionKey | (private) |
| 187 | fn | ensureConfiguredAgentMainSession | (private) |
| 227 | type | SessionsSendRouteEntry | (private) |
| 229 | fn | isRequesterParentOfNativeSubagentSession | (private) |
| 252 | fn | isTerminalAgentWaitTimeout | (private) |
| 256 | fn | isPendingErrorAgentWaitTimeout | (private) |
| 262 | fn | isRunScopedAgentSessionKey | (private) |
| 267 | fn | resolveCronRunScopedFallbackSessionKey | (private) |
| 292 | fn | shouldFallbackCronRunScopedActiveDelivery | (private) |
| 303 | fn | startAgentRun | (private) |
| 404 | fn | createSessionsSendTool | pub |
| 641 | fn | registerWatchIfRequested | (private) |
| 761 | fn | startA2AFlow | (private) |

## src/agents/tools/sessions-spawn-tool.test.ts (1909 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | fn | registerAcpBackendForTest | (private) |
| 90 | fn | requireSchemaProperty | (private) |
| 103 | fn | requireRecord | (private) |
| 110 | fn | expectDetailFields | (private) |
| 117 | fn | mockCallArg | (private) |

## src/agents/tools/sessions-spawn-tool.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | AcpSpawnModule | (private) |
| 81 | fn | loadAcpSpawnModule | (private) |
| 85 | fn | addRoleToFailureResult | (private) |
| 95 | type | SessionsSpawnThreadAvailability | (private) |
| 100 | fn | hasAnyThreadAvailability | (private) |
| 104 | fn | resolveSessionsSpawnThreadAvailability | (private) |
| 114 | fn | resolve | (private) |
| 129 | fn | createSessionsSpawnToolSchema | (private) |
| 230 | fn | resolveAcpUnavailableMessage | (private) |
| 240 | fn | createSessionsSpawnTool | pub |

## src/agents/tools/sessions.test.ts (1246 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | SessionsToolTestConfig | (private) |
| 93 | fn | requireRecord | (private) |
| 100 | fn | requireDetails | (private) |
| 104 | fn | requireSessions | (private) |
| 112 | fn | requireGatewayRequest | (private) |
| 123 | fn | installRegistry | (private) |
| 224 | fn | createMainSessionsListTool | (private) |
| 228 | fn | executeMainSessionsList | (private) |
| 232 | fn | createMainSessionsSendTool | (private) |
| 239 | fn | executeFireAndForgetA2AFrom | (private) |

## src/agents/tools/skill-workshop-tool.test.ts (825 lines)

_No symbols extracted._

## src/agents/tools/transcripts-tool.test.ts (801 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | makeStateDir | (private) |
| 27 | fn | currentDateDir | (private) |
| 31 | fn | createHarness | (private) |

## src/agents/tools/video-generate-tool.test.ts (1693 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | fn | asConfig | (private) |
| 111 | fn | expectVideoGenerateTool | (private) |
| 121 | fn | createAuthStore | (private) |
| 137 | fn | createVideoProviderSnapshot | (private) |
| 224 | fn | mockVideoPluginProvider | (private) |
| 238 | fn | createVideoPluginTool | (private) |
| 254 | fn | mockSavedVideoResult | (private) |
| 271 | fn | resultDetails | (private) |
| 279 | fn | firstMockCallArg | (private) |
| 287 | fn | firstMockCall | (private) |
| 295 | fn | toolParameterProperties | (private) |
| 302 | fn | resetVideoGenerateMocks | (private) |

## src/agents/tools/video-generate-tool.ts (1325 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 220 | fn | createVideoGenerateToolSchema | (private) |
| 230 | fn | resolveVideoGenerationModelConfigForTool | (private) |
| 252 | fn | hasExplicitVideoGenerationModelConfig | (private) |
| 256 | fn | collectVideoGenerationModelProviderIds | (private) |
| 276 | fn | isVideoGenerationProviderConfigured | (private) |
| 303 | fn | shouldExposeVideoReferenceAudioParams | (private) |
| 371 | fn | resolveAction | (private) |
| 379 | fn | normalizeResolution | (private) |
| 391 | fn | normalizeAspectRatio | (private) |
| 407 | fn | parseRoleArray | (private) |
| 429 | fn | normalizeReferenceInputs | (private) |
| 444 | fn | resolveSelectedVideoGenerationProvider | (private) |
| 457 | fn | validateVideoGenerationCapabilities | (private) |
| 536 | fn | formatIgnoredVideoGenerationOverride | (private) |
| 540 | type | VideoGenerateSandboxConfig | (private) |
| 550 | fn | loadReferenceAssets | (private) |
| 591 | fn | resolvedInput | (private) |
| 668 | type | LoadedReferenceAsset | (private) |
| 670 | type | ExecutedVideoGeneration | (private) |
| 686 | fn | isGeneratedMediaSizeLimitError | (private) |
| 690 | fn | executeVideoGenerationJob | (private) |
| 936 | fn | createVideoGenerateTool | pub |

## src/agents/tools/web-fetch-utils.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ExtractMode | pub |
| 30 | type | RenderContext | (private) |
| 37 | type | HtmlTagToken | (private) |
| 44 | type | ReadTagResult | (private) |
| 49 | type | TagEndResult | (private) |
| 54 | fn | decodeEntities | (private) |
| 60 | fn | isAsciiWhitespace | (private) |
| 64 | fn | isTagNameChar | (private) |
| 77 | fn | isTagNameStartChar | (private) |
| 82 | fn | isTagBoundary | (private) |
| 86 | fn | asciiLower | (private) |
| 91 | fn | startsWithClosingTag | (private) |
| 103 | fn | readRawTextOpenTagName | (private) |
| 122 | fn | findRawTextOpenTagStart | (private) |
| 131 | fn | startsLikeHtmlTag | (private) |
| 136 | fn | findTagEnd | (private) |
| 173 | fn | isSelfClosingTagRaw | (private) |
| 196 | fn | readTagToken | (private) |
| 278 | fn | readAttributeValue | (private) |
| 344 | fn | skipUnsupportedAttribute | (private) |
| 358 | fn | contextText | (private) |
| 362 | fn | appendText | (private) |
| 370 | fn | closeContext | (private) |
| 417 | fn | closeTopContext | (private) |
| 430 | fn | closeThroughContext | (private) |
| 446 | fn | pushContext | (private) |
| 457 | fn | closeOpenAnchorWithText | (private) |
| 473 | fn | closeRawTextTagEnd | (private) |
| 485 | fn | skipRawTextElement | (private) |
| 491 | fn | htmlFragmentToMarkdown | (private) |
| 599 | fn | stripTags | (private) |
| 604 | fn | normalizeWhitespace | pub |
| 614 | fn | htmlToMarkdown | pub |
| 619 | fn | markdownToText | pub |
| 652 | fn | truncateText | pub |
| 663 | fn | extractBasicHtmlContent | pub |

## src/agents/tools/web-fetch.ts (942 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 129 | type | WebFetchConfig | (private) |
| 134 | type | ResolveWebFetchDefinition | (private) |
| 136 | type | WebFetchProviderFallback | (private) |
| 137 | type | WebFetchRuntimeModule | (private) |
| 141 | type | WebGuardedFetchModule | (private) |
| 153 | fn | loadWebFetchRuntime | (private) |
| 157 | fn | loadWebGuardedFetch | (private) |
| 163 | fn | resolveFetchConfig | (private) |
| 167 | fn | resolveFetchEnabled | (private) |
| 174 | fn | resolveFetchReadabilityEnabled | (private) |
| 181 | fn | resolveFetchUseTrustedEnvProxy | (private) |
| 185 | fn | resolveFetchMaxCharsCap | (private) |
| 193 | fn | resolveFetchMaxResponseBytes | (private) |
| 205 | fn | resolveMaxChars | (private) |
| 211 | fn | resolveMaxRedirects | (private) |
| 216 | fn | looksLikeHtml | (private) |
| 225 | fn | formatWebFetchErrorDetail | (private) |
| 245 | fn | redactUrlForDebugLog | (private) |
| 260 | fn | formatTerminalWebFetchOrigin | (private) |
| 272 | fn | formatWebFetchTerminalPresentation | (private) |
| 296 | fn | wrapWebFetchContent | (private) |
| 339 | type | WebFetchWrappedContent | (private) |
| 351 | fn | spillWebFetchContent | (private) |
| 400 | fn | wrapWebFetchField | (private) |
| 407 | fn | normalizeContentType | (private) |
| 416 | fn | isJsonMediaType | (private) |
| 421 | type | WebFetchRuntimeParams | (private) |
| 443 | fn | normalizeProviderFinalUrl | (private) |
| 465 | fn | throwIfFetchAborted | (private) |
| 482 | fn | sanitizeWebFetchUrl | (private) |
| 498 | fn | normalizeProviderWebFetchPayload | (private) |
| 565 | fn | maybeFetchProviderWebFetchPayload | (private) |
| 593 | fn | runWebFetch | (private) |
| 825 | fn | createWebFetchTool | pub |
| 875 | fn | resolveProviderFallback | (private) |

## src/agents/tools/web-search.test.ts (1040 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | externalContent | (private) |
| 52 | fn | preWrappedText | (private) |
| 594 | fn | stripWrapMarkers | (private) |

## src/agents/tools/web-tools.fetch.test.ts (999 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | responseWithUrl | (private) |
| 38 | fn | htmlResponse | (private) |
| 49 | fn | textResponse | (private) |
| 64 | fn | errorHtmlResponse | (private) |
| 80 | fn | installMockFetch | (private) |
| 90 | fn | firstFetchRequestInit | (private) |
| 96 | fn | createFetchTool | (private) |
| 113 | fn | installPlainTextFetch | (private) |
| 119 | fn | createProviderFallbackTool | (private) |
| 123 | fn | withoutAmbientFirecrawlEnv | (private) |
| 127 | fn | executeFetch | (private) |
| 134 | fn | captureToolErrorMessage | (private) |
| 146 | fn | withoutSpillFooter | (private) |
