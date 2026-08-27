# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## src/flows/channel-setup.status.ts (569 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | ChannelStatusSummary | (private) |
| 40 | type | ChannelSetupSelectionContribution | (private) |
| 47 | type | ChannelSetupSelectionEntry | (private) |
| 84 | fn | buildChannelSetupSelectionContribution | (private) |
| 104 | fn | formatSetupSelectionLabel | (private) |
| 112 | fn | formatSetupSelectionHint | (private) |
| 119 | fn | formatSetupDisplayText | (private) |
| 127 | fn | formatSetupFreeText | (private) |
| 131 | fn | formatSetupOptionalDisplayText | (private) |
| 136 | fn | formatSetupDisplayList | (private) |
| 144 | fn | formatSetupDisplayMeta | (private) |
| 162 | fn | formatChannelPrimerBlurb | (private) |
| 171 | fn | formatChannelSelectionMeta | (private) |
| 179 | fn | localizeChannelStatusLabel | (private) |
| 257 | fn | localizeChannelStatusLine | (private) |
| 268 | fn | localizeChannelSetupStatus | (private) |
| 295 | fn | resolveCatalogChannelSelectionHint | pub |
| 313 | fn | findBundledSourceForCatalogChannel | pub |
| 337 | fn | collectChannelStatus | pub |
| 445 | fn | noteChannelStatus | pub |
| 465 | fn | noteChannelPrimer | pub |
| 500 | fn | resolveQuickstartDefault | pub |
| 515 | fn | resolveChannelSelectionNoteLines | pub |
| 537 | fn | resolveChannelSetupSelectionContributions | pub |
| 559 | fn | compareChannelSetupSelectionEntries | (private) |

## src/flows/channel-setup.test.ts (1287 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ChannelSetupPlugin | (private) |
| 12 | type | ResolveChannelSetupEntries | (private) |
| 14 | type | CollectChannelStatus | (private) |
| 15 | type | EnsureChannelSetupPluginInstalled | (private) |
| 17 | type | LoadChannelSetupPluginRegistrySnapshotForChannel | (private) |
| 19 | type | PluginRegistry | (private) |
| 21 | fn | makeSetupPlugin | (private) |
| 37 | fn | externalChatSetupEntries | (private) |
| 49 | fn | makePluginRegistry | (private) |
| 60 | fn | callArg | (private) |
| 68 | fn | mockCall | (private) |
| 76 | fn | expectExternalCatalogInstallCall | (private) |

## src/flows/channel-setup.ts (836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | createChannelOnboardingPostWriteHookCollector | pub |
| 69 | fn | runCollectedChannelOnboardingPostWriteHooks | pub |
| 88 | fn | createChannelOnboardingPostWriteHook | pub |
| 112 | fn | setupChannels | pub |
| 125 | fn | resolveWorkspaceDir | (private) |
| 126 | fn | rememberScopedPlugin | (private) |
| 132 | fn | rememberActivePlugin | (private) |
| 153 | fn | resolveVisibleChannelEntries | (private) |
| 193 | fn | getVisibleSetupFlowAdapter | (private) |
| 200 | fn | preloadConfiguredExternalPlugins | (private) |
| 262 | fn | recordAccount | (private) |
| 270 | fn | addSelection | (private) |
| 314 | fn | getChannelEntries | (private) |
| 360 | fn | refreshStatus | (private) |
| 424 | fn | applySetupResult | (private) |
| 444 | fn | applyCustomSetupResult | (private) |
| 455 | fn | configureChannel | (private) |
| 485 | fn | handleConfiguredChannel | (private) |

## src/flows/doctor-core-checks.runtime.test.ts (1176 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | tool | (private) |
| 88 | fn | bundleMcpTool | (private) |

## src/flows/doctor-core-checks.runtime.ts (1176 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | BundleMcpToolRuntime | (private) |
| 59 | fn | formatGatewayHealthTarget | (private) |
| 63 | fn | detectUnavailableSkills | pub |
| 73 | fn | collectLocalAudioAccelerationFindings | pub |
| 105 | fn | collectGatewayHealthFindings | pub |
| 154 | fn | gatewayRuntimeStatus | (private) |
| 158 | fn | collectGatewayDaemonFindings | pub |
| 235 | fn | providerCatalogPath | (private) |
| 239 | fn | providerCatalogProjectionFinding | (private) |
| 258 | fn | isReadableRecord | (private) |
| 262 | fn | isTrimmedNonEmptyString | (private) |
| 266 | fn | hasProviderCatalogKey | (private) |
| 287 | fn | readProviderCatalogValue | (private) |
| 311 | fn | collectProviderCatalogModelFindings | (private) |
| 403 | fn | collectProviderCatalogResultFindings | (private) |
| 546 | fn | readProviderCatalogOrder | (private) |
| 577 | fn | groupProviderCatalogsForDoctor | (private) |
| 603 | fn | collectProviderCatalogProjectionFindings | pub |
| 698 | fn | buildDoctorRuntimeModel | (private) |
| 724 | fn | toolSchemaDiagnosticToFinding | (private) |
| 759 | fn | collectToolSchemaFindings | (private) |
| 772 | fn | collectNormalizedToolSchemaFindings | (private) |
| 819 | fn | collectBundleMcpRuntimeToolSchemaFindings | (private) |
| 850 | fn | agentRuntimeToolLoadFailureFinding | (private) |
| 865 | fn | agentRuntimeToolNormalizationFailureFinding | (private) |
| 880 | fn | collectAgentRuntimeToolSchemaFindings | (private) |
| 921 | fn | bundleMcpRuntimeNormalizationFailureFinding | (private) |
| 933 | fn | bundleMcpRuntimeLoadFailureFinding | (private) |
| 945 | fn | bundleMcpRuntimeDiagnosticFinding | (private) |
| 957 | fn | makeBundleMcpDiagnosticSentinel | (private) |
| 969 | fn | synthesizeBundleMcpAllowlistSentinelName | (private) |
| 990 | fn | collectBundleMcpDiagnosticSentinels | (private) |
| 1033 | fn | shouldReportBundleMcpRuntimeDiagnostic | (private) |
| 1055 | fn | filterPolicyActiveBundleMcpDiagnostics | (private) |
| 1071 | fn | isAcpRuntimeAgent | (private) |
| 1078 | fn | collectRuntimeToolSchemaFindings | pub |

## src/flows/doctor-core-checks.test.ts (944 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createSkill | (private) |
| 81 | fn | createDeps | (private) |
| 111 | fn | getCheck | (private) |

## src/flows/doctor-core-checks.ts (1199 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | CoreHealthCheckContext | (private) |
| 61 | type | CoreHealthRepairContext | (private) |
| 65 | fn | loadDoctorCoreChecksRuntimeModule | (private) |
| 67 | fn | loadDoctorWorkspaceModule | (private) |
| 69 | type | CoreHealthCheckDeps | pub |
| 88 | fn | detectUnavailableSkillsWithRuntime | (private) |
| 95 | fn | collectSecurityWarningsWithRuntime | (private) |
| 100 | fn | collectWorkspaceSuggestionNotesWithRuntime | (private) |
| 116 | fn | collectRuntimeToolSchemaFindingsWithRuntime | (private) |
| 123 | fn | collectProviderCatalogProjectionFindingsWithRuntime | (private) |
| 130 | fn | collectLocalAudioAccelerationFindingsWithRuntime | (private) |
| 137 | fn | collectGatewayHealthFindingsWithRuntime | (private) |
| 144 | fn | collectGatewayDaemonFindingsWithRuntime | (private) |
| 162 | fn | configValidationIssuesToHealthFindings | pub |
| 257 | fn | resolveDoctorMode | (private) |
| 261 | fn | buildGatewayTokenSecretRefUnavailableMessage | pub |
| 279 | fn | buildGatewayTokenSecretRefFixHint | pub |
| 533 | fn | createRuntimeToolSchemaCheck | (private) |
| 545 | fn | createProviderCatalogProjectionCheck | (private) |
| 557 | fn | normalizeDoctorNoteLine | (private) |
| 561 | fn | noteTextToFinding | (private) |
| 577 | fn | inferCapturedNoteSeverity | (private) |
| 595 | fn | createNoteCollector | (private) |
| 623 | fn | noteMessageToText | (private) |
| 659 | fn | createSecurityCheck | (private) |
| 825 | fn | createGatewayHealthCheck | (private) |
| 838 | fn | createGatewayDaemonCheck | (private) |
| 890 | fn | createSkillsReadinessCheck | (private) |
| 929 | fn | unavailableSkillToFinding | (private) |
| 940 | fn | filterUnavailableSkillsForScope | (private) |
| 953 | fn | skillReadinessPath | (private) |
| 957 | fn | browserResidueDeps | (private) |
| 961 | fn | browserResidueFinding | (private) |
| 973 | fn | formatWouldArchiveBrowserResidue | (private) |
| 1105 | fn | createWorkspaceSuggestionsCheck | (private) |
| 1129 | fn | createConvertedWorkflowChecks | (private) |
| 1171 | fn | registerCoreHealthChecks | pub |
| 1181 | fn | resetCoreHealthChecksForTest | pub |
| 1185 | fn | createCoreHealthChecks | pub |

## src/flows/doctor-health-contributions.test.ts (3585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 472 | fn | requireDoctorContribution | (private) |
| 480 | type | DoctorContributionRunContext | (private) |
| 484 | fn | buildDoctorPrompter | (private) |
| 504 | fn | withProcessPlatform | (private) |
| 3378 | fn | buildWriteConfigCtx | (private) |

## src/flows/doctor-health-contributions.ts (2341 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | DoctorFlowMode | (private) |
| 21 | type | PluginVersionDriftReport | (private) |
| 24 | type | DoctorConfigResult | (private) |
| 36 | type | DoctorHealthFlowContext | pub |
| 55 | type | DoctorHealthContribution | (private) |
| 65 | type | DoctorContributionHealthCheck | (private) |
| 77 | fn | loadAgentDefaultsModule | (private) |
| 78 | fn | loadAgentScopeModule | (private) |
| 79 | fn | loadCommandFormatModule | (private) |
| 80 | fn | loadConfigModule | (private) |
| 81 | fn | loadDoctorCoreChecksModule | (private) |
| 82 | fn | loadDoctorStateIntegrityModule | (private) |
| 84 | fn | loadHealthCheckRegistryModule | (private) |
| 85 | fn | loadCatalogLookupModule | (private) |
| 86 | fn | loadPreparedModelCatalogModule | (private) |
| 88 | fn | loadModelSelectionModule | (private) |
| 89 | fn | loadNoteModule | (private) |
| 90 | fn | loadOnboardHelpersModule | (private) |
| 91 | fn | loadSecretTypesModule | (private) |
| 93 | fn | isUpdateDoctorRun | (private) |
| 98 | fn | resolveDoctorMode | (private) |
| 102 | fn | isTruthyEnvValue | (private) |
| 110 | fn | shouldSkipLegacyUpdateDoctorConfigWrite | (private) |
| 120 | fn | createDoctorHealthContribution | (private) |
| 159 | fn | normalizeHealthChecks | (private) |
| 176 | fn | normalizeContributionHealthCheck | (private) |
| 197 | fn | deriveCoreHealthCheckId | (private) |
| 204 | fn | runStructuredDoctorHealthContribution | (private) |
| 244 | fn | renderStructuredHealthFindings | (private) |
| 257 | fn | formatStructuredHealthFinding | (private) |
| 263 | fn | runGatewayConfigHealth | (private) |
| 291 | fn | runAuthProfileHealth | (private) |
| 327 | fn | runGatewayAuthHealth | (private) |
| 439 | fn | runCommandOwnerHealth | (private) |
| 444 | fn | runStructuredHealthRepairs | (private) |
| 476 | fn | runClaudeCliHealth | (private) |
| 481 | fn | runCoreContributionHealth | (private) |
| 522 | fn | runLegacyStateHealth | (private) |
| 572 | fn | runLegacyPluginManifestHealth | (private) |
| 583 | fn | runPluginRegistryHealth | (private) |
| 592 | fn | runReleaseConfiguredPluginInstallsHealth | (private) |
| 637 | fn | runDiskSpaceHealth | (private) |
| 642 | fn | runDatabaseBloatHealth | (private) |
| 647 | fn | runChannelIngressDeadLettersHealth | (private) |
| 652 | fn | runStateIntegrityHealth | (private) |
| 657 | fn | runCodexSessionRouteHealth | (private) |
| 677 | fn | runSessionLocksHealth | (private) |
| 686 | fn | runSessionTranscriptsHealth | (private) |
| 695 | fn | runSessionSnapshotsHealth | (private) |
| 704 | fn | runConfigAuditScrubHealth | (private) |
| 709 | fn | runLegacyCronHealth | (private) |
| 720 | fn | runSandboxHealth | (private) |
| 728 | fn | runGatewayServicesHealth | (private) |
| 757 | fn | runStartupChannelMaintenanceHealth | (private) |
| 768 | fn | runSecurityHealth | (private) |
| 775 | fn | runWebFetchProxyHealth | (private) |
| 780 | fn | runBrowserHealth | (private) |
| 786 | fn | runOpenAIOAuthTlsHealth | (private) |
| 795 | fn | runHooksModelHealth | (private) |
| 841 | type | ToolResultCapTarget | (private) |
| 849 | fn | collectToolResultCapFindings | (private) |
| 901 | fn | collectToolResultCapTargetAdvice | (private) |
| 954 | fn | runToolResultCapHealth | (private) |
| 1002 | fn | runSystemdLingerHealth | (private) |
| 1035 | fn | detectSystemdLingerFindings | (private) |
| 1074 | fn | hasActiveGatewayExecCredential | (private) |
| 1101 | fn | collectWorkspaceStatusPluginVersionDrift | (private) |
| 1131 | fn | runWorkspaceStatusHealth | (private) |
| 1140 | fn | runSkillsHealth | (private) |
| 1148 | fn | runBootstrapSizeHealth | (private) |
| 1153 | fn | runHeartbeatTemplateRepairHealth | (private) |
| 1162 | fn | runShellCompletionHealth | (private) |
| 1169 | fn | runGatewayHealthChecks | (private) |
| 1199 | fn | runWhatsappResponsivenessHealth | (private) |
| 1209 | fn | runMemorySearchHealthContribution | (private) |
| 1226 | fn | memorySearchNoteToFinding | (private) |
| 1246 | fn | inferMemorySearchFindingPath | (private) |
| 1262 | fn | collectMemorySearchHealthFindings | (private) |
| 1286 | fn | runDevicePairingHealth | (private) |
| 1294 | fn | runGatewayDaemonHealth | (private) |
| 1309 | fn | runWriteConfigHealth | (private) |
| 1376 | fn | collectWriteConfigHealthFindings | (private) |
| 1431 | fn | findNearestExistingParent | (private) |
| 1443 | fn | pathEntryExists | (private) |
| 1455 | fn | isDirectoryPath | (private) |
| 1463 | fn | resolveLegacyParentVersionOverride | (private) |
| 1474 | fn | runWorkspaceSuggestionsHealth | (private) |
| 1490 | fn | runFinalConfigValidationHealth | (private) |
| 1505 | fn | formatHealthFindings | (private) |
| 1523 | fn | runCoreHealthFindingNote | (private) |
| 1556 | fn | runProviderCatalogProjectionHealth | (private) |
| 1560 | fn | runLocalAudioAccelerationHealth | (private) |
| 1564 | fn | runRuntimeToolSchemasHealth | (private) |
| 1568 | fn | runSkillWorkshopToolPolicyHealth | (private) |
| 1572 | fn | resolveDoctorHealthContributions | (private) |
| 2308 | fn | resolveDoctorContributionHealthChecks | pub |
| 2330 | fn | runDoctorHealthContributions | pub |

## src/flows/model-picker.ts (1736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ModelRouteRuntimeResolver | (private) |
| 67 | fn | formatKeepCurrentModelLabel | (private) |
| 77 | fn | formatModelRefLabel | (private) |
| 92 | fn | resolvePickerAgentDir | (private) |
| 100 | type | PromptDefaultModelParams | (private) |
| 117 | type | PromptDefaultModelResult | (private) |
| 118 | type | PromptModelAllowlistResult | (private) |
| 120 | fn | loadModelPickerRuntime | (private) |
| 129 | fn | resolveConfiguredModelRaw | (private) |
| 133 | fn | resolveConfiguredModelKeys | (private) |
| 140 | fn | toPickerCatalogEntry | (private) |
| 155 | fn | loadPickerModelCatalog | (private) |
| 220 | fn | resolvePickerLogicalCatalog | (private) |
| 279 | fn | normalizeModelKeys | (private) |
| 293 | fn | resolveFallbackModelKey | (private) |
| 315 | fn | resolveFallbackModelKeys | (private) |
| 335 | fn | createModelRouteRuntimeResolver | (private) |
| 366 | fn | resolveModelRouteHint | (private) |
| 389 | fn | resolveLiteralPrefixProviderIds | (private) |
| 422 | fn | modelCatalogEntryKey | (private) |
| 427 | fn | addModelSelectOption | (private) |
| 501 | fn | splitModelKey | (private) |
| 512 | fn | addModelKeySelectOption | (private) |
| 546 | fn | createPreferredProviderMatcher | (private) |
| 588 | fn | promptManualModel | (private) |
| 610 | fn | buildModelProviderFilterOptions | (private) |
| 624 | fn | maybeFilterModelsByProvider | (private) |
| 674 | fn | resolveProviderPluginSetupOptions | (private) |
| 703 | fn | maybeHandleProviderPluginSelection | (private) |
| 782 | fn | promptDefaultModel | pub |
| 812 | fn | resolveCachedLiteralPrefixProviders | (private) |
| 822 | fn | resolveConfiguredDisplayLabel | (private) |
| 1136 | fn | promptModelAllowlist | pub |
| 1296 | fn | loadProviderStaticCatalogRows | (private) |
| 1388 | fn | allowedCatalog | (private) |
| 1491 | fn | applyModelAllowlist | pub |
| 1610 | fn | applyModelFallbacksFromSelection | pub |
| 1713 | fn | mergeFallbackSelection | (private) |

## src/flows/search-setup.test.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 165 | fn | latestPluginInstallRequest | (private) |

## src/flows/search-setup.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | SearchProvider | (private) |
| 36 | type | SearchConfig | (private) |
| 37 | type | MutableSearchConfig | (private) |
| 39 | type | SearchProviderSetupOption | (private) |
| 43 | type | SearchProviderSetupContribution | (private) |
| 55 | type | SearchProviderEntryWithInstall | (private) |
| 59 | fn | resolveSearchProviderCredentialLabel | (private) |
| 68 | fn | listSearchProviderOptions | pub |
| 74 | fn | showsSearchProviderInSetup | (private) |
| 80 | fn | resolveSearchProviderOptions | pub |
| 88 | fn | buildSearchProviderSetupContribution | (private) |
| 107 | fn | resolveSearchProviderSetupContributions | (private) |
| 148 | fn | defaultModelUsesCodexRuntime | (private) |
| 166 | fn | prioritizeSearchProvider | (private) |
| 180 | fn | resolveSearchProviderEntry | (private) |
| 187 | fn | hasKeyInEnv | pub |
| 191 | fn | providerNeedsCredential | (private) |
| 197 | fn | formatAuthProviderLabel | (private) |
| 201 | fn | providerIsReady | (private) |
| 223 | fn | formatSearchProviderOptionLabel | (private) |
| 228 | fn | rawKeyValue | (private) |
| 233 | fn | resolveExistingKey | pub |
| 240 | fn | hasExistingKey | pub |
| 244 | fn | buildSearchEnvRef | (private) |
| 260 | fn | resolveSearchSecretInput | (private) |
| 273 | fn | applySearchKey | pub |
| 295 | fn | applySearchProviderSelectionConfig | (private) |
| 308 | fn | applySearchProviderSelection | pub |
| 334 | fn | preserveDisabledState | (private) |
| 392 | type | SetupSearchOptions | (private) |
| 398 | fn | finalizeSearchProviderSetup | (private) |
| 448 | fn | runSearchSetupFlow | pub |
| 563 | fn | finalizeSelection | (private) |
