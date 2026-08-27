# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/ollama/index.test.ts (2049 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | fn | registerProvider | (private) |
| 86 | fn | registerProvidersWithPluginConfig | (private) |
| 105 | fn | registerProviderWithPluginConfig | (private) |
| 111 | fn | registerOllamaCloudProvider | (private) |
| 115 | fn | requireRecord | (private) |
| 122 | fn | requireConfiguredStreamParams | (private) |
| 126 | fn | captureWrappedOllamaPayload | (private) |
| 1854 | fn | createStream | (private) |

## extensions/ollama/index.ts (917 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | buildNativeOllamaReplayPolicy | (private) |
| 92 | fn | matchesOllamaContextOverflowError | (private) |
| 99 | fn | classifyOllamaFailoverReason | (private) |
| 108 | fn | buildLocalOllamaProvider | (private) |
| 115 | fn | discoverAppGuidedOllamaModel | (private) |
| 155 | fn | buildDynamicCacheKey | (private) |
| 159 | fn | hasOllamaDiscoverySignal | (private) |
| 167 | fn | toDynamicOllamaModel | (private) |
| 194 | fn | stripTrailingAuthProfile | (private) |
| 201 | fn | suffix | (private) |
| 221 | fn | needsOllamaCatalogMetadata | (private) |
| 231 | fn | readConfiguredOllamaApiKey | (private) |
| 246 | fn | readConcreteOllamaApiKey | (private) |
| 254 | fn | resolveAppGuidedOllamaApiKey | (private) |
| 282 | fn | readEnvBackedOllamaApiKey | (private) |
| 290 | fn | isAmbientOllamaApiKeyMarker | (private) |
| 294 | fn | readUsableOllamaShowApiKey | (private) |
| 328 | fn | collectConfiguredOllamaModelIds | (private) |
| 346 | fn | addModelId | (private) |
| 373 | fn | addRef | (private) |
| 400 | fn | buildStaticOllamaCloudProvider | (private) |
| 408 | fn | buildOllamaCloudProvider | (private) |
| 440 | fn | resolveRequestedDynamicOllamaModel | (private) |
| 467 | fn | augmentConfiguredOllamaCatalogModels | (private) |

## extensions/ollama/provider-discovery.test.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createAgentDir | (private) |
| 23 | fn | enableDiscoveryEnv | (private) |
| 34 | fn | stubOllamaFetch | (private) |
| 48 | fn | expectDiscoveryCallCounts | (private) |
| 56 | fn | withOllamaApiKey | (private) |
| 65 | fn | runOllamaCatalog | (private) |
| 94 | fn | withoutAmbientOllamaEnv | (private) |
| 108 | fn | createTagModel | (private) |
| 110 | fn | jsonResponse | (private) |
| 116 | fn | tagsResponse | (private) |
| 119 | fn | notFoundJsonResponse | (private) |
| 121 | fn | stubTagsFetch | (private) |
