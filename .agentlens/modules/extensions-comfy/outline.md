# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/comfy/image-generation-provider.test.ts (1088 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | FetchGuardRequest | (private) |
| 31 | type | RealGuardParams | (private) |
| 32 | type | RealGuardFetchImpl | (private) |
| 33 | type | RealGuardLookupFn | (private) |
| 34 | type | RealGuardHarness | (private) |
| 39 | type | RealComfyFetchOptions | (private) |
| 47 | fn | fetchRequest | (private) |
| 55 | fn | parseJsonBody | (private) |
| 59 | fn | mockLocalImageResponses | (private) |
| 108 | fn | testWorkflowConfig | (private) |
| 120 | fn | toFetchUrl | (private) |
| 130 | fn | jsonResponse | (private) |
| 137 | fn | generatedHistory | (private) |
| 149 | fn | createLookupFn | (private) |
| 168 | fn | installRealComfyFetchGuard | (private) |

## extensions/comfy/workflow-runtime.ts (887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | ComfyMode | (private) |
| 51 | type | ComfyCapability | (private) |
| 52 | type | ComfyOutputKind | (private) |
| 53 | type | ComfyWorkflow | (private) |
| 54 | type | ComfyProviderConfig | (private) |
| 55 | type | ComfyFetchGuardParams | (private) |
| 56 | type | ComfyDispatcherPolicy | (private) |
| 57 | type | ComfyPromptResponse | (private) |
| 60 | type | ComfyOutputFile | (private) |
| 66 | type | ComfyHistoryOutputEntry | (private) |
| 67 | type | ComfyHistoryEntry | (private) |
| 70 | type | ComfyUploadResponse | (private) |
| 74 | type | ComfyStatusResponse | (private) |
| 79 | type | ComfyNetworkPolicy | (private) |
| 82 | type | ComfyApiKeyResolution | (private) |
| 95 | type | ComfySourceImage | (private) |
| 101 | type | ComfyGeneratedAsset | (private) |
| 108 | type | ComfyWorkflowResult | (private) |
| 117 | fn | setComfyFetchGuardForTesting | (private) |
| 128 | fn | resolveComfyGeneratedOutputMaxBytes | (private) |
| 141 | fn | readConfigBoolean | (private) |
| 145 | fn | readConfigInteger | (private) |
| 150 | fn | getComfyConfig | (private) |
| 159 | fn | stripNestedCapabilityConfig | (private) |
| 167 | fn | getComfyCapabilityConfig | (private) |
| 179 | fn | resolveComfyMode | (private) |
| 183 | fn | resolveComfyApiKey | (private) |
| 229 | fn | getRequiredConfigString | (private) |
| 237 | fn | resolveComfyWorkflowSource | (private) |
| 249 | fn | loadComfyWorkflow | (private) |
| 269 | fn | setWorkflowInput | (private) |
| 286 | fn | resolveComfyNetworkPolicy | (private) |
| 335 | fn | isSingleLabelServiceHostname | (private) |
| 339 | fn | readJsonResponse | (private) |
| 367 | fn | resolveFileExtension | (private) |
| 383 | fn | toBlobBytes | (private) |
| 389 | fn | uploadInputImage | (private) |
| 434 | fn | extractHistoryEntry | (private) |
| 449 | fn | waitForLocalHistory | (private) |
| 486 | fn | waitForCloudCompletion | (private) |
| 527 | fn | resolveComfyRemainingMs | (private) |
| 540 | fn | collectOutputFiles | (private) |
| 570 | fn | downloadOutputFile | (private) |
| 627 | fn | isComfyCapabilityConfigured | pub |
| 658 | fn | runComfyWorkflow | pub |
