# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/lmstudio/src/models.test.ts (803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | jsonResponse | (private) |
| 42 | fn | malformedJsonResponse | (private) |
| 55 | fn | asFetch | (private) |
| 83 | fn | createModelLoadFetchMock | (private) |
| 113 | fn | findModelLoadCall | (private) |
| 115 | fn | expectLoadContextLength | (private) |
| 127 | fn | expectLoadModelKey | (private) |

## extensions/lmstudio/src/models.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | LmstudioModelWire | pub |
| 35 | type | LmstudioReasoningCapabilityWire | (private) |
| 40 | type | LmstudioConfiguredCatalogEntry | (private) |
| 63 | fn | normalizeReasoningOption | (private) |
| 71 | fn | isReasoningEnabledOption | (private) |
| 79 | fn | normalizeReasoningOptions | (private) |
| 86 | fn | isLmstudioBinaryReasoningOptions | (private) |
| 93 | fn | resolveLmstudioTransportReasoningEfforts | (private) |
| 106 | fn | resolveLmstudioEnabledTransportReasoningOption | (private) |
| 116 | fn | buildLmstudioReasoningEffortMap | (private) |
| 128 | fn | buildLmstudioReasoningCompat | (private) |
| 145 | fn | normalizeLmstudioTransportReasoningCompat | (private) |
| 172 | fn | resolveLmstudioReasoningCompat | pub |
| 190 | fn | resolveLmstudioReasoningCapability | pub |
| 208 | fn | resolveLoadedContextWindow | pub |
| 224 | fn | normalizeLmstudioVariantIds | (private) |
| 242 | fn | resolveLmstudioCanonicalModelKey | pub |
| 282 | fn | normalizeUrlPath | (private) |
| 290 | fn | hasExplicitHttpScheme | (private) |
| 294 | fn | isLikelyHostBaseUrl | (private) |
| 302 | fn | normalizeConfiguredReasoningEffortMap | (private) |
| 318 | fn | normalizeLmstudioConfiguredCompat | (private) |
| 343 | fn | toFetchableLmstudioBaseUrl | (private) |
| 351 | fn | resolveLmstudioServerBase | pub |
| 374 | fn | resolveLmstudioInferenceBase | pub |
| 380 | fn | normalizeLmstudioProviderConfig | pub |
| 412 | fn | normalizeLmstudioConfiguredCatalogEntry | pub |
| 445 | fn | normalizeLmstudioConfiguredCatalogEntries | pub |
| 456 | fn | buildLmstudioModelName | pub |
| 489 | type | LmstudioModelBase | pub |
| 513 | fn | mapLmstudioWireEntry | pub |
| 552 | fn | mapLmstudioWireModelsToConfig | pub |

## extensions/lmstudio/src/setup.test.ts (1718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | createModel | (private) |
| 74 | fn | buildConfig | (private) |
| 89 | fn | buildDiscoveryContext | (private) |
| 111 | fn | buildNonInteractiveContext | (private) |
| 156 | fn | createQueuedWizardPrompterHarness | (private) |
| 186 | fn | createMethodBoundWizardPrompterHarness | (private) |
| 195 | class | MethodBoundWizardPrompter | (private) |
| 234 | fn | isRecord | (private) |
| 238 | fn | requireRecord | (private) |
| 245 | fn | requireArray | (private) |
| 252 | fn | expectRecordFields | (private) |
| 259 | fn | firstMockArg | (private) |
| 267 | fn | requirePathRecord | (private) |
| 275 | fn | requireNonInteractiveLmstudioProvider | (private) |
| 283 | fn | requireConfigPatchLmstudioProvider | (private) |
| 292 | fn | requireProviderModels | (private) |
| 296 | fn | expectModelFields | (private) |
| 300 | fn | expectProfileFields | (private) |

## extensions/lmstudio/src/setup.ts (980 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | ProviderPromptText | (private) |
| 67 | type | ProviderPromptNote | (private) |
| 68 | type | LmstudioDiscoveryResult | (private) |
| 69 | type | LmstudioSetupDiscovery | (private) |
| 76 | fn | isTruthyEnvValue | (private) |
| 80 | fn | resolveLmstudioSetupDefaultBaseUrl | (private) |
| 86 | fn | resolveLmstudioSetupDefaultInferenceBaseUrl | (private) |
| 92 | fn | stripLmstudioStoredAuthConfig | (private) |
| 117 | fn | resolvePositiveInteger | (private) |
| 132 | fn | buildLmstudioSetupProviderConfig | (private) |
| 159 | fn | resolveLmstudioModelAdvertisedContextLimit | (private) |
| 167 | fn | applyModelContextTokensOverride | (private) |
| 178 | fn | applyRequestedContextWindowToAllModels | (private) |
| 209 | fn | resolveLmstudioDiscoveryFailure | (private) |
| 247 | fn | resolvePersistedLmstudioApiKey | (private) |
| 274 | fn | mergeDiscoveredModels | (private) |
| 300 | fn | discoverLmstudioProviderCatalog | (private) |
| 320 | fn | isLmstudioDiscoveryConfigResolutionError | (private) |
| 329 | fn | mergeDiscoveredLmstudioAllowlistEntries | (private) |
| 341 | fn | selectDefaultLmstudioModelId | (private) |
| 353 | fn | collectAppGuidedLmstudioModelIds | (private) |
| 364 | fn | discoverLmstudioSetupModels | (private) |
| 399 | fn | prepareAppGuidedLmstudioSetup | pub |
| 482 | fn | promptAndConfigureLmstudioInteractive | pub |
| 666 | fn | configureLmstudioNonInteractive | pub |
| 682 | fn | configureShared | (private) |
| 852 | fn | discoverLmstudioProvider | pub |
| 953 | fn | prepareLmstudioDynamicModels | pub |

## extensions/lmstudio/src/stream.test.ts (853 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | StreamEvent | (private) |
| 41 | fn | requireRecord | (private) |
| 48 | fn | expectRecordFields | (private) |
| 54 | fn | expectSingleDoneEvent | (private) |
| 59 | fn | requireMockCallArg | (private) |
| 67 | fn | expectEnsureLoadedFields | (private) |
| 82 | fn | expectBaseStreamModelFields | (private) |
| 94 | fn | expectBaseStreamCallModelFields | (private) |
| 106 | fn | collectEvents | (private) |
| 115 | fn | buildDoneStreamFn | (private) |
| 126 | fn | buildEventStreamFn | (private) |
| 139 | fn | createWrappedLmstudioStream | (private) |
| 161 | fn | buildPayloadStreamFn | (private) |
| 178 | fn | runWrappedLmstudioStream | (private) |
