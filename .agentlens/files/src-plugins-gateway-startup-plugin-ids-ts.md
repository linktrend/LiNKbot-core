# src/plugins/gateway-startup-plugin-ids.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2328
- **Language:** TypeScript
- **Symbols:** 100
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | type | GatewayStartupPluginPlan | pub | - |
| 71 | type | NormalizedPluginsConfig | (private) | - |
| 72 | type | GenerationProviderContractKey | (private) | - |
| 76 | type | VoiceProviderContractKey | (private) | - |
| 80 | type | ConfiguredGenerationProviderIds | (private) | - |
| 81 | type | ConfiguredVoiceProviderIds | (private) | - |
| 83 | fn | sortUniquePluginIds | (private) | `function sortUniquePluginIds(values: Iterable<s...` |
| 89 | fn | normalizePluginsConfigForInstalledIndex | (private) | `function normalizePluginsConfigForInstalledIndex(` |
| 96 | fn | isConfigActivationValueEnabled | (private) | `function isConfigActivationValueEnabled(value: ...` |
| 106 | fn | listPotentialEnabledChannelIds | (private) | `function listPotentialEnabledChannelIds(config:...` |
| 113 | fn | isGatewayStartupMemoryPlugin | (private) | `function isGatewayStartupMemoryPlugin(plugin: I...` |
| 117 | fn | resolveGatewayStartupDreamingEngineId | (private) | `function resolveGatewayStartupDreamingEngineId(...` |
| 131 | fn | resolveGatewayStartupDreamingSelectedPluginId | (private) | `function resolveGatewayStartupDreamingSelectedP...` |
| 138 | fn | blocksPluginStartup | (private) | `function blocksPluginStartup(params: {` |
| 151 | fn | resolveAuthorizedGatewayStartupDreamingPluginIds | (private) | `function resolveAuthorizedGatewayStartupDreamin...` |
| 198 | fn | resolveMemorySlotStartupPluginId | (private) | `function resolveMemorySlotStartupPluginId(param...` |
| 224 | fn | resolveContextEngineSlotStartupPluginId | (private) | `function resolveContextEngineSlotStartupPluginI...` |
| 248 | fn | shouldConsiderForGatewayStartup | (private) | `function shouldConsiderForGatewayStartup(params: {` |
| 270 | fn | hasConfiguredStartupChannel | (private) | `function hasConfiguredStartupChannel(params: {` |
| 280 | type | ManifestRegistryLookup | (private) | - |
| 282 | fn | createManifestRegistryLookup | (private) | `function createManifestRegistryLookup(` |
| 288 | fn | listManifestChannelIds | (private) | `function listManifestChannelIds(` |
| 295 | fn | findManifestPlugin | (private) | `function findManifestPlugin(` |
| 302 | fn | hasConfiguredActivationPath | (private) | `function hasConfiguredActivationPath(params: {` |
| 312 | fn | hasConfiguredActivationPathPatterns | (private) | `function hasConfiguredActivationPathPatterns(pa...` |
| 328 | fn | addConfiguredActivationPathPluginIds | (private) | `function addConfiguredActivationPathPluginIds(` |
| 350 | fn | manifestOwnsConfiguredSpeechProvider | (private) | `function manifestOwnsConfiguredSpeechProvider(p...` |
| 363 | fn | collectConfiguredWebSearchProviderIds | (private) | `function collectConfiguredWebSearchProviderIds(...` |
| 372 | fn | manifestOwnsConfiguredWebSearchProvider | (private) | `function manifestOwnsConfiguredWebSearchProvide...` |
| 385 | fn | listModelProviderRefs | (private) | `function listModelProviderRefs(value: unknown):...` |
| 406 | fn | listModelProviderRefParts | (private) | `function listModelProviderRefParts(value: unkno...` |
| 413 | fn | collectModelProviderIds | (private) | `function collectModelProviderIds(value: unknown...` |
| 424 | type | ManifestModelProviderLookup | (private) | - |
| 429 | fn | buildManifestModelProviderLookup | (private) | `function buildManifestModelProviderLookup(` |
| 445 | fn | collectConfiguredAgentModelProviderIds | (private) | `function collectConfiguredAgentModelProviderIds(` |
| 451 | fn | addModelProviderRefs | (private) | `const addModelProviderRefs = (value: unknown) => {` |
| 458 | fn | addModelMapProviderIds | (private) | `const addModelMapProviderIds = (models: unknown...` |
| 498 | fn | configuredModelProviderNeedsRuntimePlugin | (private) | `function configuredModelProviderNeedsRuntimePlu...` |
| 518 | fn | manifestOwnsConfiguredModelProvider | (private) | `function manifestOwnsConfiguredModelProvider(pa...` |
| 530 | fn | collectConfiguredGenerationProviderIds | (private) | `function collectConfiguredGenerationProviderIds(` |
| 541 | fn | collectConfiguredVoiceProviderIds | (private) | `function collectConfiguredVoiceProviderIds(conf...` |
| 554 | fn | normalizeMemoryEmbeddingProviderIdValue | (private) | `function normalizeMemoryEmbeddingProviderIdValu...` |
| 562 | fn | normalizeExplicitMemoryEmbeddingProviderId | (private) | `function normalizeExplicitMemoryEmbeddingProvid...` |
| 569 | fn | readMemorySearchEnabled | (private) | `function readMemorySearchEnabled(` |
| 576 | fn | isMemorySlotExplicitlyDisabled | (private) | `function isMemorySlotExplicitlyDisabled(config:...` |
| 580 | type | MemoryEmbeddingStartupProviderSource | (private) | - |
| 582 | type | ConfiguredMemoryEmbeddingStartupProviderOwner | (private) | - |
| 602 | fn | resolveMemoryEmbeddingProviderOwnerIds | (private) | `function resolveMemoryEmbeddingProviderOwnerIds(` |
| 622 | fn | resolveEffectiveMemoryEmbeddingProviderEntries | (private) | `function resolveEffectiveMemoryEmbeddingProvide...` |
| 666 | fn | collectConfiguredMemoryEmbeddingStartupProviderOwners | pub | `export function collectConfiguredMemoryEmbeddin...` |
| 675 | fn | addEffectiveProviders | (private) | `const addEffectiveProviders = (override: Record...` |
| 708 | fn | collectConfiguredMemoryEmbeddingProviderIds | pub | `export function collectConfiguredMemoryEmbeddin...` |
| 727 | fn | collectUnregisteredConfiguredMemoryEmbeddingProviders | pub | `export function collectUnregisteredConfiguredMe...` |
| 756 | fn | collectRegisteredEmbeddingProviderIds | pub | `export function collectRegisteredEmbeddingProvi...` |
| 768 | fn | addPluginConfigEntryIds | (private) | `function addPluginConfigEntryIds(` |
| 779 | fn | addConfiguredSlotPluginIds | (private) | `function addConfiguredSlotPluginIds(` |
| 805 | fn | collectConfiguredStartupChannelIds | (private) | `function collectConfiguredStartupChannelIds(par...` |
| 816 | fn | collectValidationHeartbeatTargetChannelIds | (private) | `function collectValidationHeartbeatTargetChanne...` |
| 818 | fn | pushTarget | (private) | `const pushTarget = (target: unknown) => {` |
| 837 | fn | collectValidationChannelConfigIds | (private) | `function collectValidationChannelConfigIds(conf...` |
| 849 | fn | collectConfigValidationChannelIds | (private) | `function collectConfigValidationChannelIds(para...` |
| 864 | fn | collectConfiguredProviderIds | (private) | `function collectConfiguredProviderIds(config: O...` |
| 881 | fn | collectValidationConfiguredProviderIds | (private) | `function collectValidationConfiguredProviderIds...` |
| 883 | fn | pushProviderId | (private) | `const pushProviderId = (value: unknown) => {` |
| 917 | fn | collectValidationConfiguredShorthandModelIds | (private) | `function collectValidationConfiguredShorthandMo...` |
| 927 | fn | addRequiredAgentHarnessPluginIds | (private) | `function addRequiredAgentHarnessPluginIds(` |
| 966 | fn | resolveGatewayStartupMetadataPluginIds | pub | `export function resolveGatewayStartupMetadataPl...` |
| 1103 | fn | createGatewayStartupMetadataPluginIdScope | pub | `export function createGatewayStartupMetadataPlu...` |
| 1139 | fn | addValidationPluginConfigReferences | (private) | `function addValidationPluginConfigReferences(` |
| 1171 | fn | resolveConfigValidationMetadataPluginIds | pub | `export function resolveConfigValidationMetadata...` |
| 1237 | fn | createConfigValidationMetadataPluginIdScope | pub | `export function createConfigValidationMetadataP...` |
| 1267 | fn | isMetadataSnapshotScopedForGatewayStartup | pub | `export function isMetadataSnapshotScopedForGate...` |
| 1285 | fn | manifestOwnsConfiguredGenerationProvider | (private) | `function manifestOwnsConfiguredGenerationProvid...` |
| 1310 | fn | manifestOwnsConfiguredVoiceProvider | (private) | `function manifestOwnsConfiguredVoiceProvider(pa...` |
| 1335 | fn | manifestOwnsConfiguredMemoryEmbeddingProvider | (private) | `function manifestOwnsConfiguredMemoryEmbeddingP...` |
| 1352 | type | ConfiguredProviderActivation | (private) | - |
| 1362 | fn | canStartConfiguredProvider | (private) | `function canStartConfiguredProvider(params: Con...` |
| 1391 | fn | canStartConfiguredGenerationProviderPlugin | (private) | `function canStartConfiguredGenerationProviderPl...` |
| 1414 | fn | canStartConfiguredVoiceProviderPlugin | (private) | `function canStartConfiguredVoiceProviderPlugin(...` |
| 1437 | fn | canStartConfiguredMemoryEmbeddingProviderPlugin | (private) | `function canStartConfiguredMemoryEmbeddingProvi...` |
| 1460 | fn | canStartConfiguredWorkerProviderPlugin | (private) | `function canStartConfiguredWorkerProviderPlugin...` |
| 1481 | fn | canStartConfiguredModelProviderPlugin | (private) | `function canStartConfiguredModelProviderPlugin(...` |
| 1504 | fn | canStartRequiredAgentHarnessPlugin | (private) | `function canStartRequiredAgentHarnessPlugin(par...` |
| 1560 | fn | canStartConfiguredSpeechProviderPlugin | (private) | `function canStartConfiguredSpeechProviderPlugin...` |
| 1606 | fn | canStartConfiguredWebSearchProviderPlugin | (private) | `function canStartConfiguredWebSearchProviderPlu...` |
| 1629 | fn | canStartConfiguredRootPlugin | (private) | `function canStartConfiguredRootPlugin(params: {` |
| 1685 | fn | hasExplicitHookPolicyConfig | (private) | `function hasExplicitHookPolicyConfig(` |
| 1696 | fn | hasHookRuntimeStartupIntent | (private) | `function hasHookRuntimeStartupIntent(params: {` |
| 1709 | fn | canStartExplicitHookPlugin | (private) | `function canStartExplicitHookPlugin(params: {` |
| 1759 | fn | canStartTrustedToolPolicyPlugin | (private) | `function canStartTrustedToolPolicyPlugin(params: {` |
| 1802 | fn | canStartConfiguredChannelPlugin | (private) | `function canStartConfiguredChannelPlugin(params: {` |
| 1851 | fn | resolveChannelPluginIds | pub | `export function resolveChannelPluginIds(params: {` |
| 1859 | fn | resolveChannelPluginIdsFromRegistry | pub | `export function resolveChannelPluginIdsFromRegi...` |
| 1868 | fn | resolveConfiguredDeferredChannelPluginIdsFromRegistry | pub | `export function resolveConfiguredDeferredChanne...` |
| 1896 | fn | resolveConfiguredDeferredChannelPluginIdsFromPrepared | (private) | `function resolveConfiguredDeferredChannelPlugin...` |
| 1932 | fn | resolveConfiguredDeferredChannelPluginIds | pub | `export function resolveConfiguredDeferredChanne...` |
| 1940 | fn | resolveGatewayStartupPluginPlanFromRegistry | pub | `export function resolveGatewayStartupPluginPlan...` |
| 2250 | fn | resolveGatewayStartupPluginIdsFromRegistry | pub | `export function resolveGatewayStartupPluginIdsF...` |
| 2262 | fn | loadGatewayStartupPluginPlan | pub | `export function loadGatewayStartupPluginPlan(pa...` |
| 2318 | fn | resolveGatewayStartupPluginIds | pub | `export function resolveGatewayStartupPluginIds(...` |

## Public API

### `collectConfiguredMemoryEmbeddingStartupProviderOwners`

```
export function collectConfiguredMemoryEmbeddingStartupProviderOwners(
```

**Line:** 666 | **Kind:** fn

### `collectConfiguredMemoryEmbeddingProviderIds`

```
export function collectConfiguredMemoryEmbeddingProviderIds(
```

**Line:** 708 | **Kind:** fn

### `collectUnregisteredConfiguredMemoryEmbeddingProviders`

```
export function collectUnregisteredConfiguredMemoryEmbeddingProviders(params: {
```

**Line:** 727 | **Kind:** fn

### `collectRegisteredEmbeddingProviderIds`

```
export function collectRegisteredEmbeddingProviderIds(
```

**Line:** 756 | **Kind:** fn

### `resolveGatewayStartupMetadataPluginIds`

```
export function resolveGatewayStartupMetadataPluginIds(params: {
```

**Line:** 966 | **Kind:** fn

### `createGatewayStartupMetadataPluginIdScope`

```
export function createGatewayStartupMetadataPluginIdScope(params: {
```

**Line:** 1103 | **Kind:** fn

### `resolveConfigValidationMetadataPluginIds`

```
export function resolveConfigValidationMetadataPluginIds(params: {
```

**Line:** 1171 | **Kind:** fn

### `createConfigValidationMetadataPluginIdScope`

```
export function createConfigValidationMetadataPluginIdScope(params: {
```

**Line:** 1237 | **Kind:** fn

### `isMetadataSnapshotScopedForGatewayStartup`

```
export function isMetadataSnapshotScopedForGatewayStartup(params: {
```

**Line:** 1267 | **Kind:** fn

### `resolveChannelPluginIds`

```
export function resolveChannelPluginIds(params: {
```

**Line:** 1851 | **Kind:** fn

### `resolveChannelPluginIdsFromRegistry`

```
export function resolveChannelPluginIdsFromRegistry(params: {
```

**Line:** 1859 | **Kind:** fn

### `resolveConfiguredDeferredChannelPluginIdsFromRegistry`

```
export function resolveConfiguredDeferredChannelPluginIdsFromRegistry(params: {
```

**Line:** 1868 | **Kind:** fn

### `resolveConfiguredDeferredChannelPluginIds`

```
export function resolveConfiguredDeferredChannelPluginIds(params: {
```

**Line:** 1932 | **Kind:** fn

### `resolveGatewayStartupPluginPlanFromRegistry`

```
export function resolveGatewayStartupPluginPlanFromRegistry(params: {
```

**Line:** 1940 | **Kind:** fn

### `resolveGatewayStartupPluginIdsFromRegistry`

```
export function resolveGatewayStartupPluginIdsFromRegistry(params: {
```

**Line:** 2250 | **Kind:** fn

### `loadGatewayStartupPluginPlan`

```
export function loadGatewayStartupPluginPlan(params: {
```

**Line:** 2262 | **Kind:** fn

### `resolveGatewayStartupPluginIds`

```
export function resolveGatewayStartupPluginIds(params: {
```

**Line:** 2318 | **Kind:** fn
