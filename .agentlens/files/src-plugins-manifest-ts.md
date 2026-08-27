# src/plugins/manifest.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2134
- **Language:** TypeScript
- **Symbols:** 109
- **Public symbols:** 39

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | fn | isCoreReservedPluginId | pub | `export function isCoreReservedPluginId(id: stri...` |
| 43 | type | PluginManifestLoadCacheEntry | (private) | - |
| 53 | type | PluginManifestChannelConfig | pub | - |
| 63 | type | PluginManifestChannelCommandDefaults | pub | - |
| 68 | type | PluginManifestModelSupport | pub | - |
| 81 | type | PluginManifestModelCatalog | pub | - |
| 83 | type | PluginManifestModelPricingModelIdTransform | pub | - |
| 85 | type | PluginManifestModelPricingSource | pub | - |
| 91 | type | PluginManifestModelPricingProvider | pub | - |
| 97 | type | PluginManifestModelPricing | pub | - |
| 101 | type | PluginManifestModelIdPrefixRule | (private) | - |
| 106 | type | PluginManifestModelIdNormalizationProvider | pub | - |
| 113 | type | PluginManifestModelIdNormalization | pub | - |
| 117 | type | PluginManifestProviderEndpoint | pub | - |
| 135 | type | PluginManifestProviderRequestProvider | (private) | - |
| 143 | type | PluginManifestProviderRequest | pub | - |
| 147 | type | PluginManifestSecretProviderIntegration | pub | - |
| 163 | type | PluginManifestActivationCapability | pub | - |
| 165 | type | PluginManifestActivation | pub | - |
| 191 | type | PluginManifestDefaultPlatform | (private) | - |
| 193 | type | PluginManifestSetupProvider | (private) | - |
| 208 | type | PluginManifestSetupProviderAuthEvidence | (private) | - |
| 225 | type | PluginManifestSetup | pub | - |
| 239 | type | PluginManifestQaRunner | pub | - |
| 246 | type | PluginManifestConfigLiteral | (private) | - |
| 248 | type | PluginManifestDangerousConfigFlag | (private) | - |
| 258 | type | PluginManifestSecretInputPath | (private) | - |
| 270 | type | PluginManifestSecretInputContracts | (private) | - |
| 280 | type | PluginManifestConfigContracts | pub | - |
| 299 | type | PluginManifestCatalog | pub | - |
| 304 | type | PluginManifest | pub | - |
| 407 | type | PluginManifestContracts | pub | - |
| 439 | type | PluginManifestMediaUnderstandingCapability | (private) | - |
| 441 | type | PluginManifestMediaUnderstandingProviderMetadata | pub | - |
| 457 | type | PluginManifestProviderBaseUrlGuard | (private) | - |
| 463 | type | PluginManifestCapabilityProviderAuthSignal | pub | - |
| 468 | type | PluginManifestCapabilityProviderModeConfigSignal | (private) | - |
| 475 | type | PluginManifestCapabilityProviderConfigSignal | pub | - |
| 484 | type | PluginManifestCapabilityProviderMetadata | pub | - |
| 492 | type | PluginManifestToolMetadata | pub | - |
| 498 | type | PluginManifestProviderAuthChoice | (private) | - |
| 545 | type | PluginManifestOnboardingScope | (private) | - |
| 547 | type | PluginManifestLoadResult | (private) | - |
| 551 | fn | normalizeStringListRecord | (private) | `function normalizeStringListRecord(value: unkno...` |
| 570 | fn | normalizeStringRecord | (private) | `function normalizeStringRecord(value: unknown):...` |
| 588 | fn | normalizeMediaUnderstandingCapabilityRecord | (private) | `function normalizeMediaUnderstandingCapabilityR...` |
| 607 | fn | normalizeMediaUnderstandingPriorityRecord | (private) | `function normalizeMediaUnderstandingPriorityRec...` |
| 627 | fn | normalizeMediaUnderstandingCapabilities | (private) | `function normalizeMediaUnderstandingCapabilities(` |
| 636 | fn | normalizeMediaUnderstandingNativeDocumentInputs | (private) | `function normalizeMediaUnderstandingNativeDocum...` |
| 641 | fn | normalizeMediaUnderstandingDocumentModels | (private) | `function normalizeMediaUnderstandingDocumentMod...` |
| 661 | fn | normalizeMediaUnderstandingProviderMetadata | (private) | `function normalizeMediaUnderstandingProviderMet...` |
| 695 | fn | normalizeProviderBaseUrlGuard | (private) | `function normalizeProviderBaseUrlGuard(` |
| 714 | fn | normalizeCapabilityProviderAuthSignals | (private) | `function normalizeCapabilityProviderAuthSignals(` |
| 738 | fn | normalizeCapabilityProviderModeConfigSignal | (private) | `function normalizeCapabilityProviderModeConfigS...` |
| 757 | fn | normalizeCapabilityProviderConfigSignals | (private) | `function normalizeCapabilityProviderConfigSignals(` |
| 792 | fn | normalizeCapabilityProviderMetadataEntry | (private) | `function normalizeCapabilityProviderMetadataEntry(` |
| 810 | fn | normalizeCapabilityProviderMetadata | (private) | `function normalizeCapabilityProviderMetadata(` |
| 830 | fn | normalizePluginToolMetadata | (private) | `function normalizePluginToolMetadata(` |
| 855 | fn | normalizeManifestCatalog | (private) | `function normalizeManifestCatalog(value: unknow...` |
| 871 | fn | normalizeManifestContracts | (private) | `function normalizeManifestContracts(value: unkn...` |
| 930 | fn | isManifestConfigLiteral | (private) | `function isManifestConfigLiteral(value: unknown...` |
| 939 | fn | normalizeManifestDangerousConfigFlags | (private) | `function normalizeManifestDangerousConfigFlags(` |
| 959 | fn | normalizeManifestSecretInputPaths | (private) | `function normalizeManifestSecretInputPaths(` |
| 985 | fn | normalizeManifestConfigContracts | (private) | `function normalizeManifestConfigContracts(` |
| 1018 | fn | normalizeManifestModelSupport | (private) | `function normalizeManifestModelSupport(value: u...` |
| 1033 | fn | normalizeManifestModelPricingSource | (private) | `function normalizeManifestModelPricingSource(` |
| 1054 | fn | normalizeManifestModelPricingProvider | (private) | `function normalizeManifestModelPricingProvider(` |
| 1070 | fn | normalizeManifestModelPricing | (private) | `function normalizeManifestModelPricing(` |
| 1096 | fn | normalizeManifestModelIdPrefixRules | (private) | `function normalizeManifestModelIdPrefixRules(` |
| 1117 | fn | normalizeManifestModelIdNormalizationProvider | (private) | `function normalizeManifestModelIdNormalizationP...` |
| 1149 | fn | normalizeManifestModelIdNormalization | (private) | `function normalizeManifestModelIdNormalization(` |
| 1175 | fn | normalizeManifestProviderEndpoints | (private) | `function normalizeManifestProviderEndpoints(` |
| 1216 | fn | normalizeManifestProviderRequestProvider | (private) | `function normalizeManifestProviderRequestProvider(` |
| 1240 | fn | normalizeManifestProviderRequest | (private) | `function normalizeManifestProviderRequest(` |
| 1266 | fn | normalizeManifestStringArray | (private) | `function normalizeManifestStringArray(` |
| 1292 | fn | normalizeManifestTrimmedStringArray | (private) | `function normalizeManifestTrimmedStringArray(` |
| 1304 | fn | normalizeManifestPositiveInteger | (private) | `function normalizeManifestPositiveInteger(value...` |
| 1310 | fn | normalizeManifestSecretProviderIntegrations | (private) | `function normalizeManifestSecretProviderIntegra...` |
| 1371 | fn | normalizeManifestActivation | pub | `export function normalizeManifestActivation(val...` |
| 1419 | fn | normalizeManifestDefaultPlatforms | (private) | `function normalizeManifestDefaultPlatforms(valu...` |
| 1426 | fn | normalizeManifestSetupProviders | (private) | `function normalizeManifestSetupProviders(` |
| 1454 | fn | normalizeManifestSetupProviderAuthEvidence | (private) | `function normalizeManifestSetupProviderAuthEvid...` |
| 1490 | fn | normalizeManifestSetup | (private) | `function normalizeManifestSetup(value: unknown)...` |
| 1508 | fn | normalizeManifestQaRunners | (private) | `function normalizeManifestQaRunners(value: unkn...` |
| 1530 | fn | normalizeManifestHttpsUrl | (private) | `function normalizeManifestHttpsUrl(value: unkno...` |
| 1550 | fn | normalizeProviderAuthChoices | (private) | `function normalizeProviderAuthChoices(` |
| 1626 | fn | normalizeChannelConfigs | (private) | `function normalizeChannelConfigs(` |
| 1666 | fn | normalizeManifestChannelCommandDefaults | pub | `export function normalizeManifestChannelCommand...` |
| 1686 | fn | resolvePluginManifestPath | (private) | `function resolvePluginManifestPath(rootDir: str...` |
| 1696 | fn | buildPluginManifestLoadCacheKey | (private) | `function buildPluginManifestLoadCacheKey(params: {` |
| 1716 | fn | getCachedPluginManifestLoadResult | (private) | `function getCachedPluginManifestLoadResult(` |
| 1732 | fn | setCachedPluginManifestLoadResult | (private) | `function setCachedPluginManifestLoadResult(` |
| 1745 | fn | parsePluginKind | (private) | `function parsePluginKind(raw: unknown): PluginK...` |
| 1755 | fn | loadPluginManifest | pub | `export function loadPluginManifest(` |
| 1952 | type | PluginPackageChannelApprovalFlag | (private) | - |
| 1954 | type | PluginPackageChannel | pub | - |
| 1997 | type | PluginPackageChannelDoctorCapabilities | pub | - |
| 2004 | type | PluginPackageChannelCliOption | (private) | - |
| 2010 | type | PluginPackageInstall | pub | - |
| 2021 | type | OpenClawPackageStartup | (private) | - |
| 2029 | type | OpenClawPackageSetupFeatures | (private) | - |
| 2035 | type | OpenClawPackageCompat | (private) | - |
| 2039 | type | OpenClawPackageBuild | pub | - |
| 2043 | type | OpenClawPackageManifest | pub | - |
| 2067 | type | PackageExtensionResolution | pub | - |
| 2073 | type | ManifestKey | (private) | - |
| 2075 | type | PackageManifest | pub | - |
| 2083 | fn | getPackageManifestMetadata | pub | `export function getPackageManifestMetadata(` |
| 2092 | fn | resolvePackageExtensionEntries | pub | `export function resolvePackageExtensionEntries(` |

## Public API

### `isCoreReservedPluginId`

```
export function isCoreReservedPluginId(id: string): boolean {
```

**Line:** 39 | **Kind:** fn

### `normalizeManifestActivation`

```
export function normalizeManifestActivation(value: unknown): PluginManifestActivation | undefined {
```

**Line:** 1371 | **Kind:** fn

### `normalizeManifestChannelCommandDefaults`

```
export function normalizeManifestChannelCommandDefaults(
```

**Line:** 1666 | **Kind:** fn

### `loadPluginManifest`

```
export function loadPluginManifest(
```

**Line:** 1755 | **Kind:** fn

### `getPackageManifestMetadata`

```
export function getPackageManifestMetadata(
```

**Line:** 2083 | **Kind:** fn

### `resolvePackageExtensionEntries`

```
export function resolvePackageExtensionEntries(
```

**Line:** 2092 | **Kind:** fn
