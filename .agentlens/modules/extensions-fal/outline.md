# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/fal/image-generation-provider.test.ts (1619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | expectFalJsonPost | (private) |
| 27 | fn | expectFalDownload | (private) |

## extensions/fal/image-generation-provider.ts (846 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 134 | type | FalImageSize | (private) |
| 135 | type | FalEditEndpointSuffix | (private) |
| 136 | type | FalImageModelSchema | (private) |
| 150 | type | FalNetworkPolicy | (private) |
| 158 | fn | setFalFetchGuardForTesting | (private) |
| 168 | fn | matchesTrustedHostSuffix | (private) |
| 174 | fn | parseFalImageGenerationResponse | (private) |
| 198 | fn | resolveFalNetworkPolicy | (private) |
| 224 | fn | ensureFalModelPath | (private) |
| 241 | fn | resolveFalImageModelSchema | (private) |
| 333 | fn | parseSize | (private) |
| 350 | fn | mapResolutionToEdge | (private) |
| 357 | fn | aspectRatioToEnum | (private) |
| 380 | fn | parseAspectRatioParts | (private) |
| 398 | fn | aspectRatioToDimensions | (private) |
| 415 | fn | resolveFalImageSize | (private) |
| 450 | fn | aspectRatioScore | (private) |
| 455 | fn | resolveClosestFalAspectRatioForSize | (private) |
| 473 | fn | resolveKreaCreativity | (private) |
| 478 | fn | resolveFalCreativityOption | (private) |
| 483 | fn | resolveNativeFalAspectRatio | (private) |
| 504 | fn | applyFalImageGeometry | (private) |
| 559 | fn | applyFalReferenceImages | (private) |
| 582 | fn | formatFalReferenceLimitError | (private) |
| 592 | fn | resolveGeneratedImageMaxBytes | (private) |
| 602 | fn | fetchImageBuffer | (private) |
| 608 | fn | downloadPolicy | (private) |
| 645 | fn | buildFalImageGenerationProvider | pub |

## extensions/fal/video-generation-provider.test.ts (685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | createMockRequestConfig | (private) |
| 16 | fn | mockFalProviderRuntime | (private) |
| 36 | fn | releasedJson | (private) |
| 43 | fn | releasedVideo | (private) |
| 53 | fn | mockCompletedFalVideoJob | (private) |
| 85 | fn | requireFetchGuardCall | (private) |
| 97 | fn | getSubmitBody | (private) |
| 105 | fn | fetchGuardUrl | (private) |

## extensions/fal/video-generation-provider.ts (720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | type | FalVideoResponse | (private) |
| 86 | type | FalQueueResponse | (private) |
| 102 | fn | setFalVideoFetchGuardForTesting | (private) |
| 112 | fn | normalizeFalVideoUrl | (private) |
| 120 | fn | readFalVideoPayload | (private) |
| 155 | fn | readFalQueueResponse | (private) |
| 176 | fn | readFalCompletedQueueResult | (private) |
| 191 | fn | toDataUrl | (private) |
| 195 | fn | buildPolicy | (private) |
| 199 | fn | extractFalVideoEntry | (private) |
| 206 | fn | resolveGeneratedVideoMaxBytes | (private) |
| 214 | fn | downloadFalVideo | (private) |
| 259 | fn | resolveFalQueueBaseUrl | (private) |
| 272 | fn | isFalMiniMaxLiveModel | (private) |
| 276 | fn | isFalSeedance2Model | (private) |
| 280 | fn | isFalSeedance2ReferenceModel | (private) |
| 286 | fn | isFalHeyGenVideoAgentModel | (private) |
| 290 | fn | resolveFalResolution | (private) |
| 300 | fn | resolveFalDuration | (private) |
| 318 | fn | resolveFalReferenceUrl | (private) |
| 333 | fn | resolveFalReferenceUrls | (private) |
| 341 | fn | applyFalSeedanceControls | (private) |
| 367 | fn | buildFalVideoRequestBody | (private) |
| 422 | fn | validateFalVideoReferenceInputs | (private) |
| 470 | fn | fetchFalJson | (private) |
| 502 | fn | waitForFalQueueResult | (private) |
| 573 | fn | resolveFalQueueRemainingMs | (private) |
| 589 | fn | extractFalVideoPayload | (private) |
| 596 | fn | buildFalVideoGenerationProvider | pub |
