# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/amazon-bedrock/discovery.test.ts (884 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | clientFactory | (private) |
| 26 | fn | mockSingleActiveSummary | (private) |
| 35 | fn | expectModelFields | (private) |

## extensions/amazon-bedrock/discovery.ts (699 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 145 | fn | resolveKnownContextWindow | (private) |
| 173 | fn | isKnownClaudeMythosPreviewModelId | (private) |
| 180 | fn | resolveKnownThinkingLevelMap | (private) |
| 186 | fn | resolveKnownMaxTokens | (private) |
| 194 | fn | resolveKnownInput | (private) |
| 209 | type | BedrockModelSummary | (private) |
| 211 | type | InferenceProfileSummary | (private) |
| 215 | type | BedrockDiscoveryCacheEntry | (private) |
| 228 | fn | normalizeProviderFilter | (private) |
| 240 | fn | buildCacheKey | (private) |
| 250 | fn | includesTextModalities | (private) |
| 254 | fn | isActive | (private) |
| 259 | fn | mapInputModalities | (private) |
| 277 | fn | inferReasoningSupport | (private) |
| 287 | fn | resolveDefaultContextWindow | (private) |
| 292 | fn | resolveDefaultMaxTokens | (private) |
| 301 | fn | matchesProviderFilter | (private) |
| 315 | fn | shouldIncludeSummary | (private) |
| 337 | fn | toModelDefinition | (private) |
| 369 | fn | resolveBaseModelId | (private) |
| 392 | fn | fetchInferenceProfileSummaries | (private) |
| 431 | fn | resolveInferenceProfiles | (private) |
| 506 | fn | resetBedrockDiscoveryCacheForTest | pub |
| 512 | fn | discoverBedrockModels | pub |
| 556 | fn | discoveryPromise | (private) |
| 663 | fn | resolveImplicitBedrockProvider | pub |

## extensions/amazon-bedrock/index.test.ts (1761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | BedrockClientResult | (private) |
| 53 | fn | rejectFromSignal | (private) |
| 90 | class | GetInferenceProfileCommand | (private) |
| 94 | class | ListFoundationModelsCommand | (private) |
| 98 | class | ListInferenceProfilesCommand | (private) |
| 102 | class | BedrockClient | (private) |
| 123 | type | RegisteredProviderPlugin | (private) |
| 126 | fn | registerWithConfig | (private) |
| 156 | fn | spyStreamFn | (private) |
| 184 | fn | makeAppInferenceProfileDescriptor | (private) |
| 192 | fn | callWrappedStream | (private) |
| 226 | fn | runtimePluginConfig | (private) |
| 240 | fn | requireRecord | (private) |
| 247 | fn | requireArray | (private) |
| 254 | fn | expectRecordFields | (private) |
| 260 | fn | expectWrappedResultFields | (private) |
| 264 | fn | expectPayloadServiceTier | (private) |
| 270 | fn | expectThinkingProfile | (private) |
| 1234 | fn | callWrappedStreamWithPayload | (private) |

## extensions/amazon-bedrock/register.sync.runtime.ts (727 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | GuardrailConfig | (private) |
| 43 | type | AmazonBedrockPluginConfig | (private) |
| 55 | fn | normalizeBedrockResolvedModel | (private) |
| 80 | type | BedrockServiceTier | (private) |
| 82 | fn | isAnthropicBedrockModel | (private) |
| 105 | fn | createBedrockNoCacheWrapper | (private) |
| 114 | fn | isBedrockServiceTier | (private) |
| 118 | fn | resolveBedrockServiceTier | (private) |
| 134 | fn | createBedrockServiceTierWrapper | (private) |
| 148 | fn | createGuardrailWrapStreamFn | (private) |
| 183 | fn | sharedRuntimeWouldInjectCachePoints | (private) |
| 196 | fn | isBedrockAppInferenceProfile | (private) |
| 209 | fn | needsCachePointInjection | (private) |
| 229 | fn | extractRegionFromArn | (private) |
| 239 | fn | resolvedModelSupportsCaching | (private) |
| 252 | type | BedrockAppProfileTraits | (private) |
| 259 | fn | resolveAppProfileTraits | (private) |
| 305 | type | BedrockCachePoint | (private) |
| 306 | type | BedrockContentBlock | (private) |
| 307 | type | BedrockMessage | (private) |
| 309 | fn | hasCachePoint | (private) |
| 313 | fn | makeCachePoint | (private) |
| 326 | fn | injectBedrockCachePoints | (private) |
| 356 | fn | patchMaxThinkingEffort | (private) |
| 373 | fn | registerAmazonBedrockPlugin | pub |
| 392 | fn | resolveCurrentPluginConfig | (private) |
| 404 | fn | baseWrapStreamFn | (private) |
| 428 | fn | omitUnsupportedClaudeTemperature | (private) |
| 445 | fn | omitUnsupportedClaudePayloadTemperature | (private) |
| 453 | fn | withAwsCredentialRefreshOnPayload | (private) |
| 471 | fn | createAwsCredentialRefreshStreamWrapper | (private) |
| 482 | fn | extractRegionFromBaseUrl | (private) |
| 490 | fn | resolveBedrockRegion | (private) |

## extensions/amazon-bedrock/stream.runtime.test.ts (815 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | bedrockModel | (private) |
| 29 | fn | signedThinkingContext | (private) |
| 56 | fn | streamBedrockForTest | (private) |
| 64 | fn | captureClientRegion | (private) |
| 550 | fn | fableModel | (private) |
| 561 | fn | context | (private) |

## extensions/amazon-bedrock/stream.runtime.ts (1218 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | type | Block | (private) |
| 77 | type | BedrockEventSink | (private) |
| 79 | fn | usesClaudeFable5BedrockContract | (private) |
| 83 | fn | usesClaudeSonnet5BedrockContract | (private) |
| 87 | fn | usesClaudeStreamingRefusalBedrockContract | (private) |
| 97 | fn | readBedrockStopDetails | (private) |
| 105 | fn | normalizeAdaptiveClaudeToolChoice | (private) |
| 118 | fn | resolveAdaptiveBedrockMaxTokens | (private) |
| 383 | fn | formatBedrockError | (private) |
| 399 | fn | resolveSimpleBedrockOptions | (private) |
| 479 | fn | handleContentBlockStart | (private) |
| 502 | fn | handleContentBlockDelta | (private) |
| 570 | fn | handleMetadata | (private) |
| 585 | fn | handleContentBlockStop | (private) |
| 619 | fn | resolveClaudeProfileNameModelId | (private) |
| 634 | fn | isClaudeMythosPreviewModelId | (private) |
| 644 | fn | supportsAdaptiveThinking | (private) |
| 656 | fn | requiresMandatoryAdaptiveThinking | (private) |
| 668 | fn | supportsNativeXhighEffort | (private) |
| 676 | fn | supportsNativeMaxEffort | (private) |
| 684 | fn | mapThinkingLevelToEffort | (private) |
| 717 | fn | resolveCacheRetention | (private) |
| 732 | fn | isAnthropicClaudeModel | (private) |
| 750 | fn | supportsPromptCaching | (private) |
| 766 | fn | supportsThinkingSignature | (private) |
| 770 | fn | buildSystemPrompt | (private) |
| 794 | fn | normalizeToolCallId | (private) |
| 799 | fn | createBedrockToolResult | (private) |
| 820 | fn | convertMessages | (private) |
| 981 | fn | convertToolConfig | (private) |
| 1014 | fn | mapStopReason | (private) |
| 1037 | fn | getBedrockModelArnRegion | (private) |
| 1041 | fn | getConfiguredBedrockRegion | (private) |
| 1053 | fn | hasConfiguredBedrockProfile | (private) |
| 1064 | fn | getStandardBedrockEndpointRegion | (private) |
| 1080 | fn | shouldUseExplicitBedrockEndpoint | (private) |
| 1093 | fn | isGovCloudBedrockTarget | (private) |
| 1106 | fn | buildAdditionalModelRequestFields | (private) |
| 1175 | fn | createImageBlock | (private) |
