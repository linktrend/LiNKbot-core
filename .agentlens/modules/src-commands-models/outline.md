# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/commands/models/auth.test.ts (1756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | AuthRunCall | (private) |
| 15 | type | ResolvePluginProvidersCall | (private) |
| 24 | type | UpsertAuthProfileCall | (private) |
| 33 | fn | readMockCallArg | (private) |
| 190 | fn | normalize | (private) |
| 277 | fn | createRuntime | (private) |
| 285 | fn | withInteractiveStdin | (private) |
| 303 | fn | withPipedStdin | (private) |
| 331 | fn | createProvider | (private) |
| 438 | fn | useCoderAgentConfig | (private) |

## src/commands/models/auth.ts (1127 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | UpsertAuthProfileParams | (private) |
| 77 | fn | refreshRunningGatewayAuthState | (private) |
| 89 | fn | resolveManualTokenExpiryMs | (private) |
| 102 | fn | guardCancel | (private) |
| 110 | fn | confirm | (private) |
| 117 | fn | text | (private) |
| 124 | fn | password | (private) |
| 136 | fn | readPipedStdin | (private) |
| 144 | fn | readPastedSecret | (private) |
| 161 | fn | resolveDefaultTokenProfileId | (private) |
| 165 | fn | normalizeManualAuthProvider | (private) |
| 172 | fn | isOpenAIProvider | (private) |
| 176 | fn | stripBearerPrefix | (private) |
| 183 | fn | looksLikeOpenAIApiKey | (private) |
| 187 | fn | looksLikeJwtToken | (private) |
| 193 | fn | looksLikeStructuredCredential | (private) |
| 198 | fn | validateOpenAICodexApiKeyInput | (private) |
| 214 | type | ResolvedModelsAuthContext | (private) |
| 221 | fn | listProvidersWithAuthMethods | (private) |
| 225 | fn | listTokenAuthMethods | (private) |
| 229 | fn | listProvidersWithTokenMethods | (private) |
| 233 | fn | mergeSetupProviders | (private) |
| 255 | fn | preferSetupAuthProviders | (private) |
| 280 | fn | resolveModelsAuthContext | (private) |
| 323 | fn | resolveModelsAuthAgentDir | (private) |
| 329 | fn | resolveRequestedProviderOrThrow | (private) |
| 351 | fn | resolveTokenMethodOrThrow | (private) |
| 369 | fn | pickProviderAuthMethod | (private) |
| 397 | fn | pickProviderTokenMethod | (private) |
| 429 | fn | persistProviderAuthResult | (private) |
| 522 | fn | resolveConfiguredAuthSelectionForProvider | (private) |
| 546 | fn | runProviderAuthMethod | (private) |
| 610 | fn | modelsAuthSetupTokenCommand | pub |
| 667 | fn | modelsAuthPasteTokenCommand | pub |
| 737 | fn | modelsAuthPasteApiKeyCommand | pub |
| 791 | fn | upsertAuthProfileWithLockOrThrow | (private) |
| 801 | fn | modelsAuthAddCommand | pub |
| 869 | fn | profileId | (private) |
| 904 | type | LoginOptions | (private) |
| 920 | type | ModelsAuthLoginFlowResult | pub |
| 931 | type | ModelsAuthLoginFlowOptions | pub |
| 946 | fn | clearStaleProfileLockouts | (private) |
| 961 | fn | resolveRequestedLoginProviderOrThrow | pub |
| 968 | fn | credentialMode | (private) |
| 979 | fn | resolveLoginProfiles | pub |
| 998 | fn | maybeLogOpenAICodexNativeSearchTip | (private) |
| 1007 | fn | runModelsAuthLoginFlow | pub |
| 1114 | fn | modelsAuthLoginCommand | pub |

## src/commands/models/list.list-command.forward-compat.test.ts (1431 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | resetMocks | (private) |
| 151 | fn | createRuntime | (private) |
| 155 | fn | lastPrintedRows | (private) |
| 160 | fn | requireRow | (private) |
| 168 | fn | expectRowKeys | (private) |
| 172 | fn | expectFirstRegistryConfig | (private) |
| 177 | fn | expectRowFields | (private) |
| 188 | fn | modelRegistryOptions | (private) |
| 196 | fn | providerCatalogOptions | (private) |
| 208 | fn | installModelsListCommandForwardCompatMocks | (private) |
| 209 | fn | suppressOpenAiSpark | (private) |
| 348 | fn | buildAllOpenAiCodexRows | (private) |

## src/commands/models/list.probe.targets.test.ts (976 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | fn | normalizeProviderId | (private) |
| 145 | fn | buildAnthropicProbePlan | (private) |
| 164 | fn | withClearedAnthropicEnv | (private) |
| 168 | fn | withClearedZaiEnv | (private) |
| 172 | fn | buildAnthropicPlanFromModelsJsonApiKey | (private) |
| 196 | fn | expectLegacyMissingCredentialsError | (private) |

## src/commands/models/list.probe.ts (977 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | redactAuthProbeError | pub |
| 66 | fn | loadEmbeddedRunnerModule | (private) |
| 71 | type | AuthProbeStatus | pub |
| 82 | type | AuthProbeReasonCode | pub |
| 92 | type | AuthProbeResult | pub |
| 105 | type | AuthProbeTarget | (private) |
| 117 | type | AuthProbeSummary | pub |
| 133 | type | AuthProbeOptions | pub |
| 143 | fn | mapFailoverReasonToProbeStatus | pub |
| 170 | fn | mapEligibilityReasonToProbeReasonCode | (private) |
| 188 | fn | formatMissingCredentialProbeError | (private) |
| 205 | fn | resolveProbeSecretRef | (private) |
| 222 | fn | formatUnresolvedRefProbeError | (private) |
| 227 | fn | withDirectCredential | (private) |
| 264 | fn | withoutProfileFallback | (private) |
| 277 | fn | resolveConfiguredProbeCredential | (private) |
| 301 | fn | maybeResolveUnresolvedRefIssue | (private) |
| 329 | fn | buildProbeTargets | pub |
| 435 | fn | appendDirectTargets | (private) |
| 716 | fn | probeTarget | (private) |
| 847 | fn | runTargetsWithConcurrency | (private) |
| 899 | fn | runAuthProbes | pub |
| 950 | fn | formatProbeLatency | pub |
| 958 | fn | sortProbeResults | pub |
| 971 | fn | describeProbeSummary | pub |

## src/commands/models/list.rows.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | authEvaluation | (private) |
| 46 | fn | requireOnlyRow | (private) |

## src/commands/models/list.rows.ts (810 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | ConfiguredByKey | (private) |
| 40 | type | ModelCatalogModule | (private) |
| 41 | type | ModelResolverModule | (private) |
| 42 | type | ProviderCatalogModule | (private) |
| 44 | type | RowFilter | (private) |
| 50 | type | RowBuilderContext | pub |
| 74 | fn | loadPreparedModelCatalogModule | (private) |
| 78 | fn | loadModelResolverModule | (private) |
| 82 | fn | loadProviderCatalogModule | (private) |
| 86 | fn | matchesProviderFilter | (private) |
| 98 | fn | matchesRowFilter | (private) |
| 111 | type | ModelCatalogLogicalRouteIndex | (private) |
| 113 | fn | resolveCatalogLogicalKey | (private) |
| 117 | fn | createModelCatalogLogicalRouteIndex | (private) |
| 130 | fn | resolveCatalogLogicalRoutes | (private) |
| 137 | fn | toModelAuthRef | (private) |
| 154 | fn | toCatalogProjectionEntry | (private) |
| 167 | fn | hasSameCatalogRoute | (private) |
| 171 | fn | projectListRowModel | (private) |
| 214 | fn | buildRow | (private) |
| 247 | fn | shouldSuppressListModel | (private) |
| 267 | fn | normalizeListRowWithProviderPlugin | (private) |
| 301 | fn | appendVisibleRow | (private) |
| 357 | fn | resolveConfiguredModelInput | (private) |
| 368 | fn | toConfiguredProviderListModel | (private) |
| 385 | fn | toListRowInput | (private) |
| 393 | fn | toManifestCatalogListModel | (private) |
| 413 | fn | shouldListConfiguredProviderModel | (private) |
| 420 | fn | findConfiguredProviderModel | (private) |
| 437 | fn | toFallbackConfiguredListModel | (private) |
| 454 | fn | appendDiscoveredRows | pub |
| 515 | fn | appendConfiguredProviderRows | pub |
| 547 | fn | appendAuthenticatedCatalogRows | pub |
| 593 | fn | appendModelCatalogRows | pub |
| 624 | fn | appendManifestCatalogRows | pub |
| 637 | fn | appendCatalogSupplementRows | pub |
| 700 | fn | appendProviderCatalogRows | pub |
| 744 | fn | appendConfiguredRows | pub |

## src/commands/models/list.status-command.ts (1770 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 103 | type | ProviderUsageRuntime | (private) |
| 104 | type | ProgressRuntime | (private) |
| 106 | fn | resolveEnvAgentDirOverride | (private) |
| 110 | type | TerminalTableRuntime | (private) |
| 111 | type | ListProbeRuntime | (private) |
| 128 | type | StatusSyntheticAuth | (private) |
| 136 | type | StatusProviderRouteAuth | (private) |
| 166 | type | StatusProviderUseRef | (private) |
| 174 | type | StatusProviderUse | (private) |
| 181 | type | StatusRuntimeAuthStatus | (private) |
| 183 | type | StatusRuntimeAuthRouteBase | (private) |
| 190 | type | StatusRuntimeAuthRoute | (private) |
| 203 | type | StatusModelRouteIssue | (private) |
| 226 | fn | loadProviderUsageRuntime | (private) |
| 230 | fn | loadProgressRuntime | (private) |
| 234 | fn | loadTerminalTableRuntime | (private) |
| 238 | fn | loadListProbeRuntime | (private) |
| 242 | fn | parseOptionalPositiveFiniteOption | (private) |
| 253 | fn | parseOptionalPositiveIntegerOption | (private) |
| 264 | fn | isCompletePluginMetadataSnapshot | (private) |
| 276 | fn | installCommandPluginMetadataSnapshot | (private) |
| 304 | fn | syntheticAuthCredential | (private) |
| 331 | fn | finishModelsStatusOutput | (private) |
| 346 | fn | modelsStatusCommand | pub |
| 417 | fn | pending | (private) |
| 502 | fn | resolveStatusModelRef | (private) |
| 542 | fn | addProviderUse | (private) |
| 664 | fn | createStatusAuthResolver | (private) |
| 1142 | fn | probeProfileIds | (private) |
| 1239 | fn | unusableProfiles | (private) |
| 1271 | fn | checkStatus | (private) |
| 1272 | type | RequirementHealth | (private) |
| 1371 | type | ModelConfigSource | (private) |
| 1372 | fn | label | (private) |
| 1373 | fn | labelWithSource | (private) |
| 1486 | fn | formatKey | (private) |
| 1487 | fn | formatKeyValue | (private) |
| 1489 | fn | formatSeparator | (private) |
| 1653 | fn | formatStatus | (private) |
| 1716 | fn | statusColor | (private) |

## src/commands/models/list.status.test.ts (1649 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | MockAuthProfile | (private) |
| 7 | type | MockAuthStore | (private) |
| 332 | fn | createRuntime | (private) |
| 340 | fn | parseFirstJsonLog | (private) |
| 344 | fn | requireRecord | (private) |
| 351 | fn | expectRecordFields | (private) |
| 357 | fn | requireArray | (private) |
| 365 | fn | requireProvider | (private) |
| 375 | fn | expectResolveAgentDirCalledFor | (private) |
| 380 | fn | withAgentScopeOverrides | (private) |
| 426 | fn | withOpenAIStatusFixture | (private) |
| 852 | fn | resolveAvailability | (private) |
