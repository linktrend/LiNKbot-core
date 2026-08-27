# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 34 large files in this module.

## src/plugin-sdk/api-baseline.ts (788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | PluginSdkApiExportKind | pub |
| 27 | type | PluginSdkApiSourceLink | pub |
| 33 | type | PluginSdkApiExport | pub |
| 45 | type | PluginSdkApiModule | pub |
| 59 | type | PluginSdkApiBaseline | pub |
| 67 | type | PluginSdkApiBaselineRender | pub |
| 77 | type | PluginSdkApiBaselineWriteResult | pub |
| 95 | fn | assert | (private) |
| 101 | fn | resolveRepoRoot | (private) |
| 106 | fn | normalizePluginSdkApiSourcePath | pub |
| 127 | fn | relativePath | (private) |
| 131 | fn | isAbsoluteImportPath | (private) |
| 135 | fn | normalizeDeclarationImportSpecifier | (private) |
| 149 | fn | normalizePluginSdkApiDeclarationText | pub |
| 159 | fn | createCompilerContext | (private) |
| 191 | fn | listPluginSdkApiBaselineEntrypoints | pub |
| 195 | fn | buildSourceLink | (private) |
| 201 | fn | inferExportKind | (private) |
| 259 | fn | resolveSymbolAndDeclaration | (private) |
| 282 | fn | declarationModifiers | (private) |
| 286 | fn | inferDeclarationTypeNode | (private) |
| 301 | fn | inferDeclarationReturnTypeNode | (private) |
| 319 | fn | stripParameterInitializer | (private) |
| 331 | fn | stripClassMemberImplementation | (private) |
| 391 | fn | stripClassImplementation | (private) |
| 410 | fn | renameStructuredDeclarationForExport | (private) |
| 448 | fn | ensureExportedDeclarationText | (private) |
| 452 | fn | printTypeParameters | (private) |
| 463 | fn | printNode | (private) |
| 533 | fn | compareText | (private) |
| 543 | fn | compareDeclarations | (private) |
| 564 | fn | buildExportSurface | (private) |
| 583 | fn | sortExports | (private) |
| 603 | fn | buildModuleSurface | (private) |
| 644 | fn | buildJsonlLines | (private) |
| 677 | fn | renderPluginSdkApiBaseline | pub |
| 709 | fn | loadCurrentFile | (private) |
| 720 | fn | sha256 | (private) |
| 725 | fn | computePluginSdkApiBaselineHashFileContent | pub |
| 736 | fn | validateMetadata | (private) |
| 749 | fn | writePluginSdkApiBaselineArtifacts | pub |

## src/plugin-sdk/approval-native-helpers.test.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | createMatrixRouteGates | (private) |
| 361 | type | ProviderTarget | (private) |
| 419 | type | ProviderTarget | (private) |
| 503 | fn | createSuppressor | (private) |

## src/plugin-sdk/approval-native-helpers.ts (976 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ApprovalRequest | (private) |
| 30 | type | ApprovalKind | (private) |
| 31 | type | DeliverySuppressionInput | (private) |
| 36 | type | NativeApprovalForwardTarget | (private) |
| 37 | type | LocalNativeExecApprovalConfig | (private) |
| 43 | type | ChannelApprovalForwardTarget | (private) |
| 45 | type | ApprovalResolverParams | (private) |
| 52 | type | ChannelApprovalForwardingEvaluatorParams | (private) |
| 68 | type | ApprovalTransportChecker | (private) |
| 69 | type | ApprovalForwardingModeResolver | (private) |
| 72 | type | ApprovalForwardingTargetMatcher | (private) |
| 74 | type | ApprovalOriginOrSessionTargetChecker | (private) |
| 78 | type | ChannelApprovalForwardingEligibilityParams | pub |
| 90 | type | ChannelApprovalPotentialRouteParams | pub |
| 102 | type | ChannelApprovalExplicitTargetEligibilityParams | pub |
| 171 | type | NativeApprovalChannelRouteGates | (private) |
| 240 | type | NativeApprovalTarget | pub |
| 250 | fn | nativeApprovalTargetsMatch | pub |
| 275 | fn | shouldSuppressLocalNativeExecApprovalPrompt | pub |
| 365 | fn | isNativeApprovalTarget | (private) |
| 371 | fn | nativeApprovalTargetMatcher | (private) |
| 379 | fn | resolveApprovalKind | pub |
| 389 | fn | resolveApprovalForwardingConfig | (private) |
| 398 | fn | normalizeApprovalForwardingMode | (private) |
| 404 | fn | approvalModeIncludesSession | (private) |
| 408 | fn | approvalModeIncludesTargets | (private) |
| 412 | fn | matchesForwardingFilters | (private) |
| 424 | fn | resolveActiveApprovalForwarding | (private) |
| 443 | fn | canApprovalPotentiallyRoute | (private) |
| 470 | fn | isSessionApprovalEligibleViaForwarding | (private) |
| 505 | fn | isExplicitTargetApprovalEligibleViaForwarding | (private) |
| 531 | fn | createChannelApprovalForwardingEvaluator | pub |
| 534 | fn | resolveForwardingMode | (private) |
| 601 | fn | normalizeApprovalForwardingModeWithDefault | (private) |
| 609 | fn | createNativeApprovalChannelRouteGates | pub |
| 612 | fn | resolveForwardingMode | (private) |
| 789 | fn | normalizeOptionalAccountId | (private) |
| 794 | fn | createNativeApprovalForwardingFallbackSuppressor | pub |
| 876 | fn | createOriginTargetResolver | (private) |
| 918 | fn | hasCustomTargetsMatch | (private) |
| 925 | fn | createChannelNativeOriginTargetResolver | pub |
| 929 | fn | createChannelNativeOriginTargetResolver | pub |
| 932 | fn | createChannelNativeOriginTargetResolver | pub |
| 945 | fn | createChannelApproverDmTargetResolver | pub |

## src/plugin-sdk/approval-reaction-runtime.ts (628 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ApprovalKind | (private) |
| 50 | type | ApprovalReactionDecisionBinding | pub |
| 57 | type | ApprovalReactionDecisionResolution | pub |
| 81 | type | ApprovalReactionPromptPayload | pub |
| 87 | type | ApprovalReactionPendingContent | pub |
| 103 | fn | normalizeDecisionList | (private) |
| 111 | fn | listApprovalReactionBindings | pub |
| 125 | fn | buildApprovalReactionHint | pub |
| 138 | fn | hasApprovalReactionHintText | pub |
| 143 | fn | insertApprovalReactionHintNearIdHeader | pub |
| 161 | fn | addApprovalReactionHintToText | pub |
| 173 | fn | normalizeApprovalReactionEmoji | pub |
| 186 | fn | resolveApprovalReactionDecision | pub |
| 202 | fn | resolveApprovalReactionTargetInternal | (private) |
| 246 | fn | resolveTypedApprovalReactionTarget | pub |
| 259 | fn | formatSeverity | (private) |
| 263 | fn | buildDecisionText | (private) |
| 267 | fn | buildManualInstructionSection | (private) |
| 288 | fn | buildCommandActionInstructionSection | (private) |
| 294 | fn | listDecisionActions | (private) |
| 299 | fn | buildApprovalReactionPromptText | (private) |
| 380 | fn | withoutPresentation | (private) |
| 385 | fn | buildMetadataPayload | (private) |
| 409 | fn | buildApprovalPendingPromptPayload | pub |
| 434 | fn | buildApprovalReactionPromptPayloadForRequest | pub |
| 445 | fn | replaceApprovalIdPlaceholder | (private) |
| 450 | fn | buildApprovalReactionPendingContent | pub |
| 491 | fn | buildApprovalReactionPendingContentForRequest | pub |
| 503 | fn | createApprovalReactionTargetStore | pub |
| 521 | fn | disablePersistentStore | (private) |
| 527 | fn | getPersistentStore | (private) |
| 547 | fn | pruneMemory | (private) |

## src/plugin-sdk/channel-config-helpers.test.ts (778 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | resolveDefaultAccountId | (private) |
| 32 | fn | createConfigWritesCfg | (private) |
| 45 | fn | expectAdapterAllowFromAndDefaultTo | (private) |
| 67 | type | DemoDmAccount | (private) |
| 73 | type | DemoDmPolicy | (private) |
| 74 | type | ExpectedDemoDmPolicy | (private) |
| 76 | fn | createDemoDmSecurityResolver | (private) |
| 91 | fn | expectDemoDmPolicy | (private) |

## src/plugin-sdk/channel-config-helpers.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | ConfigWriteScope | pub |
| 47 | type | ConfigWriteTarget | pub |
| 49 | type | ConfigWriteAuthorizationResult | pub |
| 75 | fn | resolveChannelConfigWrites | pub |
| 84 | fn | authorizeConfigWrite | pub |
| 94 | fn | canBypassConfigWritePolicy | pub |
| 106 | fn | formatConfigWriteDeniedMessage | pub |
| 148 | fn | mapAllowFromEntries | pub |
| 155 | fn | formatTrimmedAllowFromEntries | pub |
| 160 | fn | resolveOptionalConfigString | pub |
| 171 | fn | adaptScopedAccountAccessor | pub |
| 178 | fn | createScopedAccountConfigAccessors | pub |
| 220 | fn | createNamedAccountConfigBase | (private) |
| 264 | fn | resolveAccessorAccountWithFallback | (private) |
| 278 | fn | createChannelConfigAdapterWithAccessors | (private) |
| 304 | fn | createChannelConfigAdapterFromBase | (private) |
| 327 | fn | createScopedChannelConfigBase | pub |
| 361 | fn | createScopedChannelConfigAdapter | pub |
| 390 | fn | setTopLevelChannelEnabledInConfigSection | (private) |
| 408 | fn | removeTopLevelChannelConfigSection | (private) |
| 423 | fn | clearTopLevelChannelConfigFields | (private) |
| 446 | fn | createTopLevelChannelConfigBase | pub |
| 502 | fn | createTopLevelChannelConfigAdapter | pub |
| 540 | fn | createHybridChannelConfigBase | pub |
| 597 | fn | createHybridChannelConfigAdapter | pub |
| 627 | fn | createScopedDmSecurityResolver | pub |

## src/plugin-sdk/channel-entry-contract.test.ts (635 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | stubPluginModuleLoaderJitiFactory | (private) |
| 44 | fn | writeJson | (private) |
| 49 | fn | createApi | (private) |
| 58 | fn | writeBundledChannelFixture | (private) |
| 102 | fn | createBundledChannelEntry | (private) |
| 247 | fn | expectBuiltArtifactNodeRequireFastPath | (private) |
| 293 | fn | runCompiledEsmSidecarFastPathProbe | (private) |

## src/plugin-sdk/channel-entry-contract.ts (627 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | AnyAgentTool | pub |
| 29 | type | OpenClawPluginApi | pub |
| 30 | type | OpenClawPluginCommandDefinition | pub |
| 32 | type | PluginCommandContext | pub |
| 40 | type | BundledChannelRuntime | (private) |
| 47 | type | BundledEntryModuleRef | (private) |
| 68 | type | DefineBundledChannelSetupEntryOptions | (private) |
| 80 | type | BundledChannelSetupEntryFeatures | pub |
| 86 | type | BundledChannelEntryFeatures | pub |
| 136 | fn | isTruthyEnvFlag | (private) |
| 140 | fn | resolveSpecifierCandidates | (private) |
| 154 | fn | resolveEntryBoundaryRoot | (private) |
| 158 | type | BundledEntryModuleCandidate | (private) |
| 163 | type | BundledEntryBoundaryInfo | (private) |
| 170 | fn | resolveBundledEntryBoundaryInfo | (private) |
| 195 | fn | addBundledEntryCandidates | (private) |
| 210 | fn | resolveBundledEntryModuleCandidates | (private) |
| 264 | fn | formatBundledEntryUnknownError | (private) |
| 278 | fn | formatBundledEntryModuleOpenFailure | (private) |
| 298 | fn | createBundledEntryModulePathCacheKey | (private) |
| 303 | fn | resolveBundledEntryModulePath | (private) |
| 364 | fn | getSourceModuleLoader | (private) |
| 380 | fn | canTryNodeRequireBuiltModule | (private) |
| 390 | fn | loadBundledEntryModuleSync | (private) |
| 448 | fn | loadBundledEntryExportSync | pub |
| 471 | fn | defineBundledChannelEntry | pub |
| 490 | fn | loadChannelPlugin | (private) |
| 570 | fn | defineBundledChannelSetupEntry | pub |

## src/plugin-sdk/channel-streaming.test.ts (802 lines)

_No symbols extracted._

## src/plugin-sdk/core.ts (874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 186 | fn | createInlineTextPairingAdapter | (private) |
| 286 | fn | ensureConfiguredAcpBindingReady | pub |
| 310 | type | ChannelOutboundSessionRouteParams | pub |
| 321 | fn | resolveSdkChatChannelMeta | (private) |
| 335 | fn | getChatChannelMeta | pub |
| 340 | fn | stripChannelTargetPrefix | pub |
| 352 | fn | stripTargetKindPrefix | pub |
| 360 | fn | buildChannelOutboundSessionRoute | pub |
| 394 | type | ThreadAwareOutboundSessionRouteThreadSource | pub |
| 400 | type | ThreadAwareOutboundSessionRouteRecoveryContext | pub |
| 407 | fn | recoverCurrentThreadSessionId | pub |
| 434 | fn | buildThreadAwareOutboundSessionRoute | pub |
| 474 | fn | resolveThreadAwareOutboundCandidate | (private) |
| 563 | fn | defineChannelPluginEntry | pub |
| 617 | fn | defineSetupPluginEntry | pub |
| 650 | type | ChatChannelPairingOptions | (private) |
| 683 | type | ChatChannelAttachedOutboundOptions | (private) |
| 701 | fn | createInlineAttachedChannelResultAdapter | (private) |
| 726 | fn | resolveChatChannelSecurity | (private) |
| 763 | fn | resolveChatChannelPairing | (private) |
| 775 | fn | resolveChatChannelThreading | (private) |
| 800 | fn | resolveChatChannelOutbound | (private) |
| 819 | fn | createChatChannelPlugin | pub |
| 846 | fn | createChannelPluginBase | pub |

## src/plugin-sdk/facade-runtime.test.ts (767 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | SnapshotPluginRecord | (private) |
| 35 | fn | writeJsonFile | (private) |
| 40 | fn | createTrustedBundledFixtureRoot | (private) |
| 47 | fn | writePluginPackageJson | (private) |
| 59 | fn | createBundledPluginDir | (private) |
| 72 | fn | useBundledPluginDirOverrideForTest | (private) |
| 76 | fn | createThrowingPluginDir | (private) |
| 642 | fn | createTestSnapshot | (private) |

## src/plugin-sdk/memory-host-core.test.ts (995 lines)

_No symbols extracted._

## src/plugin-sdk/memory-host-core.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | isWorkspaceWriteUnavailable | (private) |
| 61 | fn | resolveMemoryHostEventExportOwner | (private) |
| 85 | fn | readMemoryHostEventExportOwnership | (private) |
| 227 | fn | listMarkdownFilesRecursive | (private) |
| 243 | fn | materializeMemoryHostEventExport | (private) |
| 453 | fn | listMemoryWorkspacePublicArtifacts | (private) |
| 511 | fn | listMemoryHostPublicArtifacts | pub |

## src/plugin-sdk/memory-host-events.test.ts (525 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createDedupe | (private) |
| 271 | fn | appendRecall | (private) |

## src/plugin-sdk/migration-runtime.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | PlannedMigrationTargets | pub |
| 41 | fn | resolvePlannedMigrationTargets | pub |
| 60 | fn | withCachedMigrationConfigRuntime | pub |
| 108 | fn | backupExistingMigrationTarget | (private) |
| 128 | fn | backupMemoryMigrationTarget | (private) |
| 146 | type | MemoryMigrationRecoveryStatus | (private) |
| 148 | fn | persistMemoryMigrationRecoveryRecord | (private) |
| 163 | fn | writeMemoryMigrationRecoveryRecord | (private) |
| 179 | fn | errorCode | (private) |
| 185 | fn | openMemoryMigrationRoot | (private) |
| 209 | fn | isFileAlreadyExistsError | (private) |
| 219 | fn | readArchiveRelativePath | (private) |
| 231 | fn | resolveUniqueArchivePath | (private) |
| 247 | fn | archiveMigrationItem | pub |
| 284 | fn | copyMigrationFileItem | pub |
| 320 | fn | copyMemoryMigrationFileItem | pub |
| 472 | fn | writeMigrationReport | pub |

## src/plugin-sdk/persistent-dedupe.ts (723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | PersistentDedupeEntry | pub |
| 48 | type | PersistentDedupeLegacyJsonMigrationResult | pub |
| 56 | type | PersistentDedupeLegacyJsonMigrationOptions | pub |
| 63 | type | PersistentDedupeLegacyJsonImportEntry | pub |
| 69 | type | PersistentDedupeLegacyJsonEntriesResult | (private) |
| 75 | fn | resolveNamespace | (private) |
| 79 | fn | resolveScopedKey | (private) |
| 83 | fn | isRecentTimestamp | (private) |
| 87 | fn | resolveEntrySeenAt | (private) |
| 93 | fn | resolveUnknownEntrySeenAt | (private) |
| 102 | fn | shortHash | (private) |
| 106 | fn | resolveEntryKey | (private) |
| 110 | fn | createPersistentDedupeImportEntry | pub |
| 122 | fn | resolveRemainingTtlMs | (private) |
| 134 | fn | normalizeNamespacePrefix | (private) |
| 144 | fn | resolveStateNamespace | (private) |
| 148 | fn | resolvePersistentDedupePluginStateNamespace | pub |
| 158 | fn | hasPluginStateOptions | (private) |
| 164 | fn | hasLegacyPathOptions | (private) |
| 170 | fn | resolveStateMaxEntries | (private) |
| 177 | fn | resolvePersistentStoreCacheKey | (private) |
| 181 | fn | createPersistentStoreResolver | (private) |
| 231 | fn | parseLegacyDedupeData | (private) |
| 256 | fn | readPersistentDedupeLegacyJsonFileEntries | (private) |
| 280 | fn | listPersistentDedupeLegacyJsonFileEntries | pub |
| 288 | fn | shouldReplacePersistentDedupeEntry | pub |
| 300 | fn | migratePersistentDedupeLegacyJsonFile | pub |
| 340 | fn | createPersistentDedupe | pub |
| 347 | fn | checkAndRecordInner | (private) |
| 387 | fn | hasRecentInner | (private) |
| 411 | fn | warmup | (private) |
| 434 | fn | checkAndRecord | (private) |
| 459 | fn | hasRecent | (private) |
| 474 | fn | forget | (private) |
| 504 | fn | createReleasedClaimError | (private) |
| 508 | type | ClaimLoopInflight | (private) |
| 509 | type | ClaimLoopSettled | (private) |
| 512 | fn | runClaimableDedupeClaimLoop | pub |
| 534 | fn | createClaimableDedupe | pub |
| 572 | fn | hasRecent | (private) |
| 588 | fn | forget | (private) |
| 608 | fn | claim | (private) |
| 645 | fn | commit | (private) |
| 670 | fn | release | (private) |
| 719 | fn | createChannelReplayGuard | pub |

## src/plugin-sdk/provider-auth.test.ts (1214 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | withPartialCopilotResponse | (private) |
| 41 | type | FallbackStoreCaseResult | (private) |
| 47 | fn | runFallbackStoreCase | (private) |
| 466 | fn | writeNext | (private) |
| 631 | fn | abort | (private) |
| 952 | fn | withDomain | (private) |
| 956 | fn | resolveWithConfigDomain | (private) |

## src/plugin-sdk/provider-auth.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 154 | fn | readGithubCopilotDomainFromConfig | (private) |
| 170 | fn | warnOnceOnRejectedConfigDomain | (private) |
| 190 | fn | resolveGithubCopilotDomain | (private) |
| 211 | fn | copilotTokenUrl | (private) |
| 215 | fn | copilotApiBaseFallback | (private) |
| 221 | fn | resolveCopilotTokenExpiresAtMs | (private) |
| 236 | fn | parseCopilotTokenResponse | (private) |
| 265 | fn | cancelUnreadResponseBody | (private) |
| 272 | fn | deriveCopilotApiBaseUrlFromToken | pub |
| 282 | fn | resolveCopilotApiToken | pub |
| 403 | fn | isProviderApiKeyConfigured | pub |
| 435 | fn | listUsableProviderAuthProfileIds | pub |
| 460 | fn | isProviderAuthProfileConfigured | pub |
| 480 | fn | resolveProviderAuthProfileApiKey | pub |
| 512 | fn | resolveUsableProviderAuthProfiles | (private) |
| 553 | fn | filterAuthProfileIdsByType | (private) |

## src/plugin-sdk/provider-catalog-live-runtime.test.ts (702 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | buildModel | (private) |
| 25 | fn | buildFetchGuard | (private) |

## src/plugin-sdk/provider-onboard.ts (666 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | AgentModelAliasEntry | pub |
| 51 | fn | extractAgentDefaultModelFallbacks | (private) |
| 62 | fn | hasAgentDefaultModelPrimary | (private) |
| 66 | fn | normalizeAgentModelAliasEntry | (private) |
| 76 | type | ProviderModelMergeState | (private) |
| 82 | fn | normalizeProviderModelForConfig | (private) |
| 90 | fn | normalizeProviderModelsForConfig | (private) |
| 117 | fn | normalizeModelProvidersForConfig | (private) |
| 141 | fn | resolveProviderModelMergeState | (private) |
| 173 | fn | buildProviderConfig | (private) |
| 194 | fn | applyProviderConfigWithMergedModels | (private) |
| 221 | fn | createProviderPresetAppliers | (private) |
| 253 | fn | withAgentModelAliases | pub |
| 269 | fn | isMergeableProviderConfig | (private) |
| 275 | fn | mergeOnboardProviderRequest | (private) |
| 294 | fn | mergeOnboardProviderConfigs | (private) |
| 348 | fn | applyOnboardAuthAgentModelsAndProviders | pub |
| 378 | fn | applyAgentDefaultModelPrimary | pub |
| 415 | fn | applyOpencodeZenModelDefault | pub |
| 434 | fn | applyProviderConfigWithDefaultModels | pub |
| 469 | fn | applyProviderConfigWithDefaultModel | pub |
| 491 | fn | applyProviderConfigWithDefaultModelPreset | pub |
| 519 | fn | createDefaultModelPresetAppliers | pub |
| 537 | fn | applyProviderConfigWithDefaultModelsPreset | pub |
| 565 | fn | createDefaultModelsPresetAppliers | pub |
| 583 | fn | applyProviderConfigWithModelCatalog | pub |
| 616 | fn | applyProviderConfigWithModelCatalogPreset | pub |
| 642 | fn | createModelCatalogPresetAppliers | pub |
| 660 | fn | ensureModelAllowlistEntry | pub |

## src/plugin-sdk/provider-stream-shared.test.ts (3007 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | StreamEvent | (private) |
| 44 | fn | requireRecord | (private) |
| 51 | fn | createEventStream | (private) |
| 63 | fn | createPayloadCapture | (private) |
| 77 | fn | createControlledPlainTextToolCallCompatStream | (private) |
| 92 | fn | createByteOverCapZeroArgumentXmlCall | (private) |
| 96 | fn | collectPlainTextToolCallCompatEvents | (private) |
| 109 | fn | resolveStream | (private) |
| 113 | fn | nextEvent | (private) |
| 1552 | fn | eventsPromise | (private) |

## src/plugin-sdk/provider-stream-shared.ts (996 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | ProviderWrapStreamFnContext | (private) |
| 28 | type | ProviderStreamWrapperFactory | pub |
| 33 | fn | composeProviderStreamWrappers | pub |
| 45 | fn | toRecord | (private) |
| 49 | fn | resolveContextToolNames | (private) |
| 63 | fn | promotePlainTextToolCalls | (private) |
| 82 | fn | createProviderToolNameMatcher | (private) |
| 96 | fn | normalizeProviderDoneMessage | (private) |
| 116 | fn | scrubProviderTerminalMessage | (private) |
| 130 | fn | wrapPlainTextToolCallStream | (private) |
| 144 | fn | endStream | (private) |
| 194 | fn | createPlainTextToolCallCompatWrapper | pub |
| 211 | fn | defaultToolStreamExtraParams | pub |
| 225 | fn | createPayloadPatchStreamWrapper | pub |
| 264 | fn | createOpenAICompatibleCompletionsThinkingOffWrapper | pub |
| 298 | fn | isAnthropicThinkingEnabled | (private) |
| 306 | fn | assistantMessageHasAnthropicToolUse | (private) |
| 323 | fn | stripTrailingAssistantPrefillMessages | (private) |
| 347 | fn | stripTrailingAnthropicAssistantPrefillWhenThinking | pub |
| 357 | fn | createAnthropicThinkingPrefillPayloadWrapper | pub |
| 375 | type | OpenAICompatibleThinkingLevel | pub |
| 378 | fn | isOpenAICompatibleThinkingEnabled | pub |
| 392 | fn | normalizeOpenAICompatibleReasoningPayload | pub |
| 419 | fn | setQwenChatTemplateThinking | pub |
| 442 | type | DeepSeekV4ThinkingLevel | pub |
| 444 | type | DeepSeekV4ReasoningEffort | pub |
| 446 | fn | isDisabledDeepSeekV4ThinkingLevel | (private) |
| 451 | fn | resolveDeepSeekV4ReasoningEffort | (private) |
| 457 | fn | stripDeepSeekV4ReasoningContent | (private) |
| 469 | fn | ensureDeepSeekV4AssistantReasoningContent | (private) |
| 496 | fn | createDeepSeekV4OpenAICompatibleThinkingWrapper | pub |
| 531 | type | ThinkingOnlyFinalTextStream | (private) |
| 533 | fn | promoteThinkingOnlyFinalOutputToText | (private) |
| 591 | fn | wrapThinkingOnlyFinalTextStream | (private) |
| 630 | fn | createThinkingOnlyFinalTextWrapper | pub |
| 651 | type | GoogleThinkingLevel | pub |
| 653 | type | GoogleThinkingInputLevel | pub |
| 666 | fn | isGoogleThinkingRequiredModel | pub |
| 671 | fn | isGoogleGemini25ThinkingBudgetModel | pub |
| 676 | fn | isGoogleGemini3ProModel | pub |
| 682 | fn | isGoogleGemini3FlashModel | pub |
| 688 | fn | isGoogleGemini3ThinkingLevelModel | pub |
| 696 | fn | resolveGoogleGemini3ThinkingLevel | pub |
| 770 | fn | stripInvalidGoogleThinkingBudget | pub |
| 785 | fn | isGemma4Model | (private) |
| 789 | fn | mapThinkLevelToGemma4ThinkingLevel | (private) |
| 809 | fn | normalizeGemma4ThinkingLevel | (private) |
| 829 | fn | sanitizeGoogleThinkingPayload | pub |
| 850 | fn | sanitizeGoogleThinkingConfigContainer | (private) |
| 960 | fn | createGoogleThinkingPayloadWrapper | pub |
| 976 | fn | createGoogleThinkingStreamWrapper | pub |

## src/plugin-sdk/provider-stream.test.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | requireWrapStreamFn | (private) |
| 37 | fn | requireStreamFn | (private) |
| 45 | fn | requireRecord | (private) |
| 52 | fn | requirePayload | (private) |
| 59 | fn | expectDefaultThinkingBudget | (private) |
| 176 | fn | wrap | (private) |

## src/plugin-sdk/provider-tools.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | normalizeOpenAIParameters | (private) |

## src/plugin-sdk/qa-runtime.ts (759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | QaRuntimeSurface | (private) |
| 27 | fn | isMissingQaRuntimeError | (private) |
| 36 | fn | loadQaRuntimeModule | pub |
| 46 | fn | isQaRuntimeAvailable | pub |
| 59 | type | LiveTransportQaCommandOptions | pub |
| 76 | type | LiveTransportQaCommanderOptions | (private) |
| 94 | type | LiveTransportQaCliRegistration | pub |
| 97 | type | LiveTransportQaCredentialCliOptions | pub |
| 103 | type | LiveTransportQaCliRegistrationOptions | pub |
| 121 | fn | createLazyCliRuntimeLoader | pub |
| 129 | fn | collectLiveTransportQaStringOption | (private) |
| 134 | fn | mapLiveTransportQaCommanderOptions | (private) |
| 155 | fn | registerLiveTransportQaCli | (private) |
| 207 | fn | createLiveTransportQaCliRegistration | pub |
| 223 | type | QaReportCheck | pub |
| 230 | type | QaReportScenario | pub |
| 238 | type | QaDockerRunCommand | pub |
| 245 | type | QaDockerFetchResponse | pub |
| 249 | type | QaDockerFetchLike | pub |
| 257 | fn | pushQaReportDetailsBlock | (private) |
| 267 | fn | renderQaMarkdownReport | pub |
| 347 | fn | appendQaLiveLaneIssue | pub |
| 352 | fn | buildQaLiveLaneArtifactsError | pub |
| 366 | fn | printLiveTransportQaArtifacts | pub |
| 375 | fn | describeQaDockerError | (private) |
| 385 | fn | isQaDockerPortFree | (private) |
| 395 | fn | findFreeQaDockerPort | (private) |
| 418 | fn | resolveQaDockerHostPort | pub |
| 425 | fn | trimQaDockerCommandOutput | (private) |
| 434 | fn | renderQaDockerCommandFailure | (private) |
| 450 | fn | normalizeDockerServiceStatus | (private) |
| 462 | fn | firstDockerOutputLine | (private) |
| 466 | fn | parseDockerComposePsRows | (private) |
| 487 | fn | isQaDockerHealthy | (private) |
| 505 | fn | releaseQaDockerFetchResponse | (private) |
| 512 | fn | createQaDockerRuntime | pub |
| 549 | fn | waitForHealth | (private) |
| 609 | fn | waitForDockerServiceHealth | (private) |
| 650 | fn | resolveComposeServiceUrl | (private) |
| 698 | type | ProcessWriteCallback | (private) |
| 701 | fn | startLiveTransportQaOutputTee | pub |
| 722 | fn | tee | (private) |
| 723 | fn | writeWithTee | (private) |

## src/plugin-sdk/reply-payload.test.ts (957 lines)

_No symbols extracted._

## src/plugin-sdk/reply-payload.ts (598 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ReplyPayload | pub |
| 26 | type | OutboundReplyPayload | pub |
| 52 | type | ReasoningReplyPayload | pub |
| 62 | type | SendableOutboundReplyParts | pub |
| 79 | type | SendPayloadContext | (private) |
| 80 | type | SendPayloadResult | (private) |
| 81 | type | SendPayloadAdapter | (private) |
| 88 | fn | trimLeadingMarkdownQuoteMarkers | (private) |
| 97 | fn | isReasoningReplyPayload | pub |
| 114 | fn | normalizeOutboundReplyPayload | pub |
| 121 | fn | createNormalizedOutboundDeliverer | pub |
| 134 | fn | resolveOutboundMediaUrls | pub |
| 148 | fn | resolvePayloadMediaUrls | pub |
| 153 | fn | countOutboundMedia | pub |
| 158 | fn | hasOutboundMedia | pub |
| 163 | fn | hasOutboundText | pub |
| 169 | fn | hasOutboundReplyContent | pub |
| 184 | fn | resolveSendableOutboundReplyParts | pub |
| 206 | fn | resolveTextChunksWithFallback | pub |
| 217 | fn | sendPayloadWithChunkedTextAndMedia | pub |
| 281 | fn | sendPayloadMediaSequence | pub |
| 320 | fn | sendPayloadTextChunkSequence | pub |
| 340 | fn | sendPayloadMediaSequenceOrFallback | pub |
| 375 | fn | sendPayloadMediaSequenceAndFinalize | pub |
| 397 | fn | sendTextMediaPayload | pub |
| 471 | fn | isNumericTargetId | pub |
| 480 | fn | formatTextWithAttachmentLinks | pub |
| 501 | fn | sendMediaWithLeadingCaption | pub |
| 540 | fn | deliverTextOrMediaReply | pub |
| 582 | fn | deliverFormattedTextWithAttachments | pub |

## src/plugin-sdk/session-store-runtime.test.ts (1078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | seedSessionEntry | (private) |
| 65 | fn | expectRecoveryCleared | (private) |

## src/plugin-sdk/session-store-runtime.ts (602 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | SessionStoreListParams | (private) |
| 63 | type | SessionStoreEntrySummary | (private) |
| 68 | type | LoadSessionStoreOptions | pub |
| 79 | type | SessionStoreTranscriptEvent | pub |
| 81 | type | SessionStoreEntryUpdate | (private) |
| 85 | type | SessionStoreEntryPatch | (private) |
| 90 | type | PatchSessionEntryParams | (private) |
| 100 | type | UpdateSessionStoreEntryParams | (private) |
| 109 | type | UpsertSessionEntryParams | (private) |
| 111 | type | ReadAmbientTranscriptWatermarkParams | (private) |
| 115 | type | DeleteSessionEntryParams | (private) |
| 121 | type | SessionLifecycleArtifactsCleanupParams | (private) |
| 133 | type | SessionLifecycleArtifactsCleanupResult | (private) |
| 138 | fn | preserveCoreRecoveryState | (private) |
| 151 | fn | resolveLegacySessionStoreTarget | (private) |
| 167 | fn | materializeLegacyTranscriptFile | (private) |
| 231 | fn | loadSessionStore | pub |
| 279 | fn | updateSessionStore | pub |
| 317 | fn | resolveSessionFilePath | pub |
| 334 | fn | resolveStorePath | pub |
| 351 | fn | resolveSessionStoreEntry | pub |
| 359 | fn | getSessionEntry | pub |
| 370 | fn | listSessionEntries | pub |
| 388 | fn | loadTranscriptEventsSync | pub |
| 399 | fn | readTranscriptStatsSync | pub |
| 410 | fn | resolveTranscriptSessionKeyBySessionId | pub |
| 420 | fn | patchSessionEntry | pub |
| 455 | fn | readSessionUpdatedAt | pub |
| 462 | fn | readAmbientTranscriptWatermark | pub |
| 469 | fn | updateSessionStoreEntry | pub |
| 492 | fn | upsertSessionEntry | pub |
| 505 | fn | deleteSessionEntry | pub |
| 532 | fn | resolveSessionStoreBackupPaths | pub |
| 552 | fn | cleanupSessionLifecycleArtifacts | pub |

## src/plugin-sdk/session-transcript-runtime.test.ts (874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 700 | fn | appendIfMissing | (private) |

## src/plugin-sdk/session-transcript-runtime.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | SessionTranscriptEvent | pub |
| 65 | type | SessionTranscriptTargetParams | pub |
| 68 | type | SessionTranscriptRawDeltaParams | pub |
| 73 | type | SessionTranscriptVisibleMessageDeltaParams | pub |
| 77 | type | SessionTranscriptVisibleMessageDeltaResult | pub |
| 106 | type | SessionTranscriptMessageEntry | pub |
| 123 | type | SessionTranscriptTarget | pub |
| 130 | type | SessionTranscriptAssistantMirrorAppendParams | pub |
| 139 | type | SessionTranscriptWriteLockParams | pub |
| 143 | type | SessionTranscriptWriteLockContext | pub |
| 152 | type | SessionTranscriptMirrorAppendResult | (private) |
| 159 | fn | resolveSessionTranscriptIdentity | pub |
| 176 | fn | resolveSessionTranscriptTarget | pub |
| 189 | fn | readSessionTranscriptEvents | pub |
| 196 | fn | readSessionTranscriptRawDelta | pub |
| 208 | fn | readSessionTranscriptVisibleMessageDelta | pub |
| 247 | fn | readVisibleSessionTranscriptMessageEntries | pub |
| 258 | fn | readLatestAssistantTextByIdentity | pub |
| 267 | fn | appendAssistantMirrorMessageByIdentity | pub |
| 339 | fn | appendSessionTranscriptMessageByIdentity | pub |
| 348 | fn | publishSessionTranscriptUpdateByIdentity | pub |
| 374 | fn | withSessionTranscriptWriteLock | pub |
| 416 | fn | createAssistantMirrorMessage | (private) |
| 442 | fn | findLatestEquivalentAssistantMessageId | (private) |
| 473 | fn | extractAssistantMirrorComparableText | (private) |
| 484 | fn | isDeliveryMirrorAssistantMessage | (private) |
| 488 | fn | isRecord | (private) |
| 492 | fn | readNonEmptyString | (private) |
| 496 | fn | isAgentMessageRecord | (private) |
| 500 | fn | projectVisibleMessageEntry | (private) |
| 529 | fn | projectPublicTarget | (private) |

## src/plugin-sdk/ssrf-policy.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | createLookupFn | (private) |

## src/plugin-sdk/status-helpers.test.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | ExpectedAccountSnapshot | (private) |
| 115 | fn | expectedAccountSnapshot | (private) |
| 137 | fn | expectedAdapterAccountSnapshot | (private) |
| 150 | fn | createComputedStatusAdapter | (private) |
| 169 | fn | createAsyncStatusAdapter | (private) |

## src/plugin-sdk/tool-payload.test.ts (518 lines)

_No symbols extracted._
