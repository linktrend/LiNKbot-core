# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/brave/src/brave-web-search-provider.runtime.ts (562 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | BraveEndpointMode | (private) |
| 51 | type | BraveSearchMode | (private) |
| 53 | type | BraveSearchResult | (private) |
| 60 | type | BraveSearchResponse | (private) |
| 66 | type | BraveHttpDiagnostics | (private) |
| 70 | fn | logBraveHttp | (private) |
| 81 | fn | describeBraveRequestUrl | (private) |
| 93 | fn | resolveBraveApiKey | (private) |
| 102 | fn | resolveBraveBaseUrl | (private) |
| 110 | fn | buildBraveEndpointUrl | (private) |
| 118 | fn | braveEndpointTargetsPrivateNetwork | (private) |
| 135 | fn | validateBraveBaseUrl | (private) |
| 159 | fn | missingBraveKeyPayload | (private) |
| 167 | fn | setBraveSearchUrlParams | (private) |
| 200 | fn | runBraveJsonRequest | (private) |
| 252 | fn | runBraveLlmContextSearch | (private) |
| 291 | fn | runBraveWebSearch | (private) |
| 344 | fn | executeBraveSearch | pub |

## extensions/brave/src/brave-web-search-provider.test.ts (675 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | jsonResponse | (private) |
| 54 | fn | malformedJsonResponse | (private) |
| 61 | fn | emptyWebSearchResponse | (private) |
| 65 | fn | installBraveLlmContextFetch | (private) |
| 84 | fn | readHeader | (private) |
| 92 | fn | fetchCall | (private) |
| 100 | fn | fetchRequestUrl | (private) |
| 104 | fn | fetchRequestInit | (private) |
| 108 | fn | createBodyOnlyErrorResponse | (private) |
| 125 | fn | createBraveTool | (private) |
