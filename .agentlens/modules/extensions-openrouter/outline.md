# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/openrouter/index.test.ts (1229 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | createOpenRouterDoneStreamWithoutGeneration | (private) |
| 59 | type | OpenRouterManifest | (private) |
| 74 | fn | readManifest | (private) |

## extensions/openrouter/music-generation-provider.test.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | sseResponse | (private) |
| 47 | fn | encodeLine | (private) |
| 90 | fn | sseResponseLines | (private) |
| 118 | fn | stalledSseResponse | (private) |
| 131 | fn | postRequest | (private) |
| 139 | fn | resetOpenRouterMusicMocks | (private) |

## extensions/openrouter/video-generation-provider.test.ts (1002 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | fn | releasedJson | (private) |
| 92 | fn | releasedOversizedJsonStream | (private) |
| 112 | fn | releasedVideo | (private) |
| 122 | type | OpenRouterVideoProvider | (private) |
| 123 | type | OpenRouterVideoResult | (private) |
| 125 | fn | requireGenerateCapabilities | (private) |
| 133 | fn | requireFetchCallHeaders | (private) |
| 145 | fn | requireRecord | (private) |
| 152 | fn | expectRecordFields | (private) |
| 158 | fn | expectOpenRouterFetchCall | (private) |
| 174 | fn | requireFetchGuardOptions | (private) |
| 181 | fn | requirePostJsonParams | (private) |
| 189 | fn | requireMockCallArg | (private) |
| 202 | fn | requireGeneratedVideo | (private) |
| 210 | fn | requireGeneratedVideoBuffer | (private) |
| 409 | fn | buildCatalogContext | (private) |

## extensions/openrouter/video-generation-provider.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | OpenRouterVideoResponse | (private) |
| 61 | type | OpenRouterImagePart | (private) |
| 66 | type | OpenRouterFrameImagePart | (private) |
| 70 | fn | readOpenRouterVideoJson | (private) |
| 86 | fn | readOpenRouterVideoResponse | (private) |
| 120 | fn | toDataUrl | (private) |
| 133 | fn | toImagePart | (private) |
| 140 | fn | buildImageInputs | (private) |
| 181 | fn | resolveDurationSeconds | (private) |
| 207 | fn | resolveResolution | (private) |
| 212 | fn | resolveSeed | (private) |
| 225 | fn | buildRequestBody | (private) |
| 277 | fn | isTerminalFailure | (private) |
| 281 | fn | fetchOpenRouterJson | (private) |
| 300 | fn | pollOpenRouterVideo | (private) |
| 352 | fn | resolveOpenRouterContentUrl | (private) |
| 359 | fn | resolveDeliverableOpenRouterVideoUrl | (private) |
| 372 | fn | resolveGeneratedVideoMaxBytes | (private) |
| 380 | fn | downloadOpenRouterVideo | (private) |
| 427 | fn | buildOpenRouterVideoGenerationProvider | pub |
