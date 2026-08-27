# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/amazon-bedrock-mantle/discovery.test.ts (814 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createTokenProviderFactory | (private) |
| 21 | type | MockWithCalls | (private) |
| 25 | fn | argAt | (private) |
| 36 | fn | objectArgAt | (private) |
| 48 | fn | stringArgAt | (private) |
| 56 | fn | recordField | (private) |
| 63 | fn | modelDiscoveryResponse | (private) |

## extensions/amazon-bedrock-mantle/discovery.ts (530 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | resolveMantleSonnet5Cost | pub |
| 77 | fn | mantleEndpoint | (private) |
| 81 | fn | isSupportedRegion | (private) |
| 89 | type | MantleBearerTokenProvider | (private) |
| 90 | type | MantleBearerTokenProviderFactory | (private) |
| 95 | fn | loadMantleBearerTokenProviderFactory | (private) |
| 109 | fn | resolveMantleBearerToken | pub |
| 121 | fn | resolveMantleRegion | (private) |
| 129 | fn | getCachedIamTokenEntry | (private) |
| 147 | fn | generateBearerTokenFromIam | pub |
| 186 | fn | getCachedIamToken | pub |
| 191 | fn | resolveMantleRuntimeBearerToken | pub |
| 226 | fn | resetIamTokenCacheForTest | pub |
| 234 | interface | OpenAIModelEntry | (private) |
| 241 | interface | OpenAIModelsResponse | (private) |
| 260 | fn | inferReasoningSupport | (private) |
| 265 | fn | readMantleModelDiscoveryJson | (private) |
| 288 | interface | MantleCacheEntry | (private) |
| 293 | type | MantleDiscoveryConfig | (private) |
| 300 | fn | resetMantleDiscoveryCacheForTest | pub |
| 320 | fn | discoverMantleModels | pub |
| 396 | fn | resolveImplicitMantleProvider | pub |
| 514 | fn | mergeImplicitMantleProvider | pub |
