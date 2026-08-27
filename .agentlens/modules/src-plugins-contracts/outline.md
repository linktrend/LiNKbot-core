# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/plugins/contracts/host-hooks.contract.test.ts (3052 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | waitForPluginEventHandlers | (private) |
| 59 | fn | requireFirstCommandRegistration | (private) |
| 69 | fn | joinContextFragments | (private) |
| 79 | fn | diagnosticSummaries | (private) |
| 86 | fn | loadSessionStore | (private) |
| 95 | fn | updateSessionStore | (private) |
| 106 | fn | expectRecordFields | (private) |
| 117 | type | HostHookStateFixture | (private) |
| 123 | fn | withHostHookState | (private) |

## src/plugins/contracts/plugin-sdk-package-contract-guardrails.test.ts (970 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | fn | toRepoRelativePath | (private) |
| 94 | fn | isSkippedTrackedPath | (private) |
| 100 | fn | isCodeFile | (private) |
| 104 | fn | listTrackedFiles | (private) |
| 127 | fn | listTrackedCodeFiles | (private) |
| 132 | fn | collectPluginSdkPackageExports | (private) |
| 151 | fn | collectPluginSdkSubpathReferences | (private) |
| 166 | fn | collectDocumentedSdkSubpaths | (private) |
| 175 | fn | collectBundledPluginIds | (private) |
| 195 | fn | collectPluginOwnedSdkEntrypoints | (private) |
| 209 | fn | resolvePluginOwnerFromEntrypoint | (private) |
| 215 | fn | collectClassificationOverlaps | (private) |
| 230 | fn | collectBundledFacadeSdkEntrypoints | (private) |
| 242 | fn | collectPrivateBundledSdkSurfaceEntrypoints | (private) |
| 254 | fn | collectGenericCoreOwnerNameLeaks | (private) |
| 269 | fn | readRootPackageJson | (private) |
| 281 | fn | readMatrixPackageJson | (private) |
| 293 | fn | collectRuntimeDependencySpecs | (private) |
| 303 | fn | collectExtensionFiles | (private) |
| 328 | fn | isExtensionTestOrSupportPath | (private) |
| 342 | fn | collectExtensionCoreImportLeaks | (private) |
| 371 | fn | collectExtensionTestHelperImportLeaks | (private) |
| 400 | fn | collectDeprecatedExtensionSdkImports | (private) |
| 426 | fn | collectNewDeprecatedMemoryEmbeddingProviderApiFiles | (private) |
| 444 | fn | collectNewDeprecatedMemoryEmbeddingProviderManifestFiles | (private) |
| 463 | fn | collectCodeFiles | (private) |
| 487 | fn | collectDeprecatedTestAliasImports | (private) |
| 518 | fn | parseTestApiNamedExports | (private) |
| 550 | fn | collectWorkspaceCodeFiles | (private) |
| 561 | fn | escapeRegExp | (private) |
| 565 | fn | collectUnusedExtensionTestApiExports | (private) |
| 629 | fn | collectCrossOwnerReservedSdkImports | (private) |
| 662 | fn | collectReservedSdkSubpathImports | (private) |
| 688 | fn | hasWildcardReexport | (private) |
| 693 | fn | collectExtensionProductionSdkSubpathImports | (private) |

## src/plugins/contracts/plugin-sdk-subpaths.test.ts (1423 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | importResolvedPluginSdkSubpath | (private) |
| 91 | type | BrowserFacadeSourceContract | (private) |
| 98 | type | BrowserHelperExportParityContract | (private) |
| 191 | fn | readCachedSource | (private) |
| 201 | fn | readPluginSdkSource | (private) |
| 205 | fn | readRepoSource | (private) |
| 209 | fn | collectNamedExportsFromClause | (private) |
| 224 | fn | collectNamedExportsFromSource | (private) |
| 252 | fn | collectNamedExportsFromRepoFile | (private) |
| 256 | fn | createSourceFile | (private) |
| 266 | fn | resolveTypeScriptModuleSource | (private) |
| 280 | fn | collectReexportedSourceFiles | (private) |
| 283 | fn | visit | (private) |
| 308 | fn | topLevelVitestModuleMockLines | (private) |
| 331 | fn | expectNamedExportParity | (private) |
| 340 | fn | listTrackedRepoTsFiles | (private) |
| 359 | fn | listRepoTsFiles | (private) |
| 388 | fn | findRepoFilesContaining | (private) |
| 404 | fn | isIdentifierCode | (private) |
| 414 | fn | sourceMentionsIdentifier | (private) |
| 431 | fn | expectSourceMentions | (private) |
| 437 | fn | expectSourceOmits | (private) |
| 443 | fn | expectSourceContract | (private) |
| 454 | fn | expectSourceContains | (private) |
| 458 | fn | expectSourceOmitsSnippet | (private) |
| 462 | fn | expectRepoSourceOmitsSnippet | (private) |
| 466 | fn | expectSourceOmitsImportPattern | (private) |
| 473 | fn | expectBrowserFacadeSourceContract | (private) |
| 479 | fn | isGeneratedBundledFacadeSubpath | (private) |
| 1307 | type | PrivateResumeOptionKeys | (private) |
| 1312 | type | ReplyRuntimeAppendBeforeDeliverOptions | (private) |

## src/plugins/contracts/run-context-lifecycle.contract.test.ts (864 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | waitForPluginEventHandlers | (private) |
| 38 | fn | expectNoCleanupFailures | (private) |
| 42 | fn | requireFailureByHookId | (private) |

## src/plugins/contracts/scheduled-turns.contract.test.ts (1321 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | ScheduleSessionTurnRequest | (private) |
| 56 | type | SessionTurnSchedule | (private) |
| 58 | fn | invokePluginGatewayHandler | (private) |
| 65 | fn | respond | (private) |
| 96 | fn | createMockCronService | (private) |
| 127 | fn | makeCronJob | (private) |
| 145 | fn | mockCronAdd | (private) |
| 149 | fn | getCronAddBody | (private) |
| 157 | fn | expectSessionTurnHandle | (private) |
| 171 | fn | scheduleWorkflowTurn | (private) |
| 187 | fn | unscheduleWorkflowTurnsByTag | (private) |

## src/plugins/contracts/session-actions.contract.test.ts (954 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | HookResponse | (private) |
| 24 | fn | sessionActionBody | (private) |
| 36 | fn | callPluginSessionActionForTest | (private) |
| 61 | fn | callRegisteredSessionActionForTest | (private) |
| 73 | fn | callPluginSessionActionThroughGatewayForTest | (private) |
| 101 | fn | callRegisteredSessionActionThroughGatewayForTest | (private) |
| 113 | fn | requireHookError | (private) |
| 122 | fn | requireObservedEvent | (private) |
| 135 | fn | registerActionFixture | (private) |
| 428 | fn | expectValidationError | (private) |

## src/plugins/contracts/session-attachments.contract.test.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | SessionAttachmentRequest | (private) |
| 45 | type | TestSessionEntry | (private) |
| 59 | fn | createSilentPluginLogger | (private) |
| 68 | fn | withSessionStore | (private) |
| 94 | fn | writeSessionEntry | (private) |
| 106 | fn | mockSuccessfulAttachmentDelivery | (private) |
| 116 | fn | sendBundledSessionAttachment | (private) |
| 127 | fn | expectTelegramAttachmentResult | (private) |
| 134 | fn | requireFirstSendMessageParams | (private) |

## src/plugins/contracts/session-entry-projection.contract.test.ts (958 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | requireRecord | (private) |
| 30 | fn | expectOkResult | (private) |
| 36 | fn | expectNoCleanupFailures | (private) |
| 42 | fn | extensionNamespace | (private) |
| 48 | fn | loadSessionStore | (private) |
| 57 | fn | updateSessionStore | (private) |
| 68 | fn | withProjectionSessionStore | (private) |

## src/plugins/contracts/tts-contract-suites.ts (1385 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | TtsRuntimeModule | (private) |
| 17 | type | TtsCoreModule | (private) |
| 18 | type | SummarizeTextDeps | (private) |
| 48 | fn | isolatedSpeechProviderEnv | (private) |
| 57 | fn | withIsolatedSpeechProviderEnv | (private) |
| 64 | fn | withIsolatedSpeechProviderEnvAsync | (private) |
| 82 | fn | createResolvedModel | (private) |
| 101 | fn | asLegacyTtsConfig | (private) |
| 105 | fn | asLegacyOpenClawConfig | (private) |
| 109 | fn | mockCallAt | (private) |
| 141 | fn | createSummarizeTextDeps | (private) |
| 149 | fn | createOpenAiTelephonyCfg | (private) |
| 167 | fn | createAudioBuffer | (private) |
| 171 | fn | withMockedSpeechFetch | (private) |
| 188 | fn | resolveBaseUrl | (private) |
| 192 | fn | resolveTestProviderConfig | (private) |
| 216 | fn | buildTestOpenAISpeechProvider | (private) |
| 324 | fn | buildTestMicrosoftSpeechProvider | (private) |
| 349 | fn | buildTestElevenLabsSpeechProvider | (private) |
| 399 | fn | buildTestGoogleSpeechProvider | (private) |
| 431 | fn | createPrepareSimpleCompletionModelMock | (private) |
| 442 | fn | setupTtsRuntime | (private) |
| 460 | fn | setupTestSpeechProviderRegistry | (private) |
| 471 | fn | createResolvedSummarizationConfig | (private) |
| 501 | fn | setupSummarizationMocks | (private) |
| 512 | fn | setupTtsContractTest | (private) |
| 518 | fn | setupTtsSummarizationTest | (private) |
| 523 | fn | describeTtsConfigContract | pub |
| 841 | fn | describeTtsSummarizationContract | pub |
| 850 | fn | runSummarizeText | (private) |
| 967 | fn | describeTtsProviderRuntimeContract | pub |
| 1230 | fn | expectTelephonyInstructions | (private) |
| 1266 | fn | describeTtsAutoApplyContract | pub |
| 1284 | fn | withMockedAutoTtsFetch | (private) |
| 1304 | fn | expectAutoTtsOutcome | (private) |
