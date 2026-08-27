# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/plugin-sdk/test-helpers/plugin-runtime-mock.ts (959 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | BuildContextParams | (private) |
| 36 | type | BuildContextResult | (private) |
| 37 | type | UntrustedStructuredContextEntries | (private) |
| 41 | fn | isObject | (private) |
| 45 | fn | mergeDeep | (private) |
| 61 | fn | createTaskFlowSessionMock | (private) |
| 81 | fn | normalizeUntrustedGroupPrompt | (private) |
| 89 | fn | resolveMockUntrustedStructuredContext | (private) |
| 113 | type | PluginRuntimeMediaMock | pub |
| 115 | fn | createPluginRuntimeMediaMock | pub |
| 140 | fn | createPluginRuntimeMock | pub |

## src/plugin-sdk/test-helpers/provider-auth-contract.ts (513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | LoginOpenAICodexOAuth | (private) |
| 19 | type | EnsureAuthProfileStore | (private) |
| 21 | type | ListProfilesForProvider | (private) |
| 27 | type | ProviderAuthContractPluginLoader | pub |
| 31 | type | OpenAICodexProviderAuthContractOptions | (private) |
| 36 | fn | buildPrompter | (private) |
| 59 | fn | buildAuthContext | (private) |
| 72 | fn | createJwt | (private) |
| 78 | fn | buildOpenAICodexOAuthResult | (private) |
| 114 | fn | installSharedAuthProfileStoreHooks | (private) |
| 144 | fn | describeOpenAICodexProviderAuthContract | pub |
| 156 | fn | expectStableFallbackProfile | (private) |
| 176 | fn | getProvider | (private) |
| 301 | fn | describeGithubCopilotProviderAuthContract | pub |
| 309 | fn | getProvider | (private) |
| 355 | fn | stubGitHubDeviceFlowFetch | (private) |
| 395 | fn | buildSpyAuthContext | (private) |

## src/plugin-sdk/test-helpers/provider-discovery-contract.ts (915 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ProviderDiscoveryContractPluginLoader | pub |
| 20 | type | ProviderHandle | (private) |
| 22 | type | DiscoveryState | (private) |
| 33 | type | BundledProviderUnderTest | (private) |
| 41 | type | DiscoveryContractOptions | (private) |
| 54 | fn | setRuntimeAuthStore | (private) |
| 68 | fn | setGithubCopilotProfileSnapshot | (private) |
| 81 | fn | runCatalog | (private) |
| 116 | fn | requireRecord | (private) |
| 122 | fn | expectProviderFields | (private) |
| 130 | fn | providerModelIds | (private) |
| 136 | fn | installDiscoveryHooks | (private) |
| 274 | fn | describeGithubCopilotProviderDiscoveryContract | pub |
| 340 | fn | describeVllmProviderDiscoveryContract | pub |
| 546 | fn | describeSglangProviderDiscoveryContract | pub |
| 697 | fn | describeMinimaxProviderDiscoveryContract | pub |
| 799 | fn | describeModelStudioProviderDiscoveryContract | pub |
| 844 | fn | describeCloudflareAiGatewayProviderDiscoveryContract | pub |

## src/plugin-sdk/test-helpers/provider-runtime-contract.ts (862 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | installProviderRuntimeContractMocks | (private) |
| 20 | fn | removeProviderRuntimeContractMocks | (private) |
| 24 | fn | createModel | (private) |
| 39 | fn | requireRecord | (private) |
| 45 | fn | expectFields | (private) |
| 52 | type | ProviderRuntimeContractFixture | (private) |
| 59 | type | ProviderRuntimeContractPluginLoader | pub |
| 63 | fn | installRuntimeHooks | (private) |
| 67 | fn | requireProviderContractProvider | (private) |
| 75 | fn | ensureProvidersLoaded | (private) |
| 124 | fn | describeAnthropicProviderRuntimeContract | pub |
| 241 | fn | describeGithubCopilotProviderRuntimeContract | pub |
| 285 | fn | describeGoogleProviderRuntimeContract | pub |
| 417 | fn | describeOpenAIProviderRuntimeContract | pub |
| 713 | fn | describeOpenRouterProviderRuntimeContract | pub |
| 742 | fn | describeVeniceProviderRuntimeContract | pub |
| 768 | fn | describeZAIProviderRuntimeContract | pub |
