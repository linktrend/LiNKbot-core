# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/microsoft-foundry/image-generation-provider.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | buildConfig | (private) |
| 115 | fn | releasedJson | (private) |
| 122 | fn | requirePostJsonRequest | (private) |
| 130 | fn | requirePostMultipartRequest | (private) |
| 138 | fn | requireHeaders | (private) |

## extensions/microsoft-foundry/index.test.ts (2046 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | registerProvider | (private) |
| 92 | type | FoundryProvider | (private) |
| 94 | fn | requirePrepareRuntimeAuth | (private) |
| 105 | fn | requireRuntimeAuthResult | (private) |
| 125 | fn | requireFoundryProviderPatch | (private) |
| 140 | fn | buildFoundryModel | (private) |
| 167 | fn | buildFoundryConfig | (private) |
| 205 | fn | buildEntraProfileStore | (private) |
| 233 | fn | buildFoundryRuntimeAuthContext | (private) |
| 258 | fn | mockAzureCliToken | (private) |
| 275 | fn | mockAzureCliTokenRaw | (private) |
| 279 | fn | mockAzureCliLoginFailure | (private) |
| 1952 | fn | makeCtx | (private) |

## extensions/microsoft-foundry/onboard.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | listFoundryResources | (private) |
| 105 | fn | listResourceDeployments | pub |
| 133 | fn | buildCreateFoundryHint | (private) |
| 142 | fn | selectFoundryResource | pub |
| 177 | fn | selectFoundryDeployment | pub |
| 212 | fn | promptFoundryApi | (private) |
| 239 | type | ManualFoundryModelFamilyChoice | (private) |
| 240 | type | ManualFoundryMaiImageModel | (private) |
| 246 | fn | promptFoundryModelFamily | (private) |
| 278 | fn | promptFoundryMaiImageModel | (private) |
| 309 | fn | promptFoundryClaudeModel | (private) |
| 335 | fn | promptEndpointAndModelBase | (private) |
| 412 | fn | promptEndpointAndModelManually | pub |
| 418 | fn | promptApiKeyEndpointAndModel | pub |
| 429 | fn | buildFoundryConnectionTest | (private) |
| 474 | fn | extractTenantSuggestions | (private) |
| 492 | fn | isValidTenantIdentifier | (private) |
| 512 | fn | promptTenantId | pub |
| 554 | fn | loginWithTenantFallback | pub |
| 587 | fn | testFoundryConnection | pub |

## extensions/microsoft-foundry/shared.ts (787 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | interface | AzAccount | pub |
| 38 | interface | AzAccessToken | pub |
| 43 | interface | AzCognitiveAccount | pub |
| 54 | interface | FoundryResourceOption | pub |
| 64 | interface | AzDeploymentSummary | pub |
| 72 | type | FoundrySelection | pub |
| 79 | type | CachedTokenEntry | pub |
| 84 | type | FoundryProviderApi | pub |
| 89 | type | FoundryDeploymentConfigInput | (private) |
| 95 | type | FoundryModelCapabilities | (private) |
| 106 | type | FoundryProviderConfigPatch | (private) |
| 111 | fn | normalizeModelInput | (private) |
| 118 | type | FoundryModelCompat | (private) |
| 125 | type | FoundryConfigShape | (private) |
| 132 | type | FoundryImageDefaultPatch | (private) |
| 142 | fn | normalizeFoundryModelName | (private) |
| 147 | fn | isAnthropicFoundryDeployment | (private) |
| 152 | fn | isFoundryClaudeMythosPreview | pub |
| 156 | fn | usesFoundryResponsesByDefault | pub |
| 171 | fn | isFoundryMaiImageModel | pub |
| 185 | fn | supportsFoundryReasoningContent | (private) |
| 190 | fn | supportsFoundryImageInput | (private) |
| 205 | fn | requiresFoundryEntraIdClaudeAuth | pub |
| 212 | fn | requiresFoundryMandatoryAdaptiveClaudeThinking | pub |
| 221 | fn | supportsFoundryManualClaudeThinking | (private) |
| 228 | fn | resolveFoundryModelTokenLimits | (private) |
| 257 | fn | requiresFoundryMaxCompletionTokens | pub |
| 270 | fn | supportsFoundryReasoningEffort | (private) |
| 299 | fn | resolveFoundryReasoningEfforts | (private) |
| 325 | fn | buildFoundryThinkingLevelMap | (private) |
| 343 | fn | isFoundryProviderApi | pub |
| 347 | fn | formatFoundryApiLabel | pub |
| 355 | fn | normalizeFoundryEndpoint | pub |
| 374 | fn | buildFoundryV1BaseUrl | (private) |
| 379 | fn | buildFoundryAnthropicBaseUrl | (private) |
| 384 | fn | resolveFoundryApi | pub |
| 399 | fn | buildFoundryProviderBaseUrl | pub |
| 411 | fn | extractFoundryEndpoint | pub |
| 427 | fn | buildFoundryModelCompat | (private) |
| 454 | fn | resolveFoundryModelCapabilities | pub |
| 495 | fn | mergeFoundryCanonicalModelParams | pub |
| 505 | fn | resolveConfiguredModelNameHint | pub |
| 517 | fn | buildFoundryProviderConfig | (private) |
| 570 | fn | resolveSelectedDeploymentModelName | (private) |
| 584 | fn | isSelectedMaiImageDeployment | (private) |
| 592 | fn | buildFoundryImageDefaultPatch | (private) |
| 611 | fn | buildFoundryCredentialMetadata | (private) |
| 649 | fn | buildPluginsAllowPatch | (private) |
| 661 | fn | buildFoundryAuthOrderPatch | (private) |
| 680 | fn | listConfiguredFoundryProfileIds | pub |
| 686 | fn | buildFoundryAuthResult | pub |
| 755 | fn | applyFoundryProfileBinding | pub |
| 764 | fn | applyFoundryProviderConfig | pub |
| 773 | fn | resolveFoundryTargetProfileId | pub |
