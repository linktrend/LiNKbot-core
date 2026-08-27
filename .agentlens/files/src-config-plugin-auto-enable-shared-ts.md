# src/config/plugin-auto-enable.shared.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1158
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | fn | resolveAutoEnableProviderPluginIds | (private) | `function resolveAutoEnableProviderPluginIds(` |
| 60 | fn | canReuseUnscopedCurrentPluginMetadataSnapshot | (private) | `function canReuseUnscopedCurrentPluginMetadataS...` |
| 64 | fn | extractProviderFromModelRef | (private) | `function extractProviderFromModelRef(value: str...` |
| 73 | fn | hasConfiguredEmbeddedHarnessRuntime | (private) | `function hasConfiguredEmbeddedHarnessRuntime(` |
| 80 | fn | resolveAgentHarnessOwnerPluginIds | (private) | `function resolveAgentHarnessOwnerPluginIds(` |
| 98 | fn | isProviderConfigured | (private) | `function isProviderConfigured(cfg: OpenClawConf...` |
| 134 | fn | hasPluginOwnedWebSearchConfig | (private) | `function hasPluginOwnedWebSearchConfig(cfg: Ope...` |
| 139 | fn | hasPluginOwnedWebFetchConfig | (private) | `function hasPluginOwnedWebFetchConfig(cfg: Open...` |
| 144 | fn | resolvePluginOwnedToolConfigKeys | (private) | `function resolvePluginOwnedToolConfigKeys(plugi...` |
| 155 | fn | hasPluginOwnedToolConfig | (private) | `function hasPluginOwnedToolConfig(cfg: OpenClaw...` |
| 163 | fn | resolveProviderPluginsWithOwnedWebSearch | (private) | `function resolveProviderPluginsWithOwnedWebSearch(` |
| 171 | fn | resolveProviderPluginsWithOwnedWebFetch | (private) | `function resolveProviderPluginsWithOwnedWebFetch(` |
| 179 | fn | resolvePluginIdsForConfiguredSpeechProvider | (private) | `function resolvePluginIdsForConfiguredSpeechPro...` |
| 197 | fn | resolvePluginsWithOwnedToolConfig | (private) | `function resolvePluginsWithOwnedToolConfig(` |
| 203 | fn | resolvePluginIdForConfiguredWebFetchProvider | (private) | `function resolvePluginIdForConfiguredWebFetchPr...` |
| 220 | fn | resolvePluginIdForConfiguredWebSearchProvider | (private) | `function resolvePluginIdForConfiguredWebSearchP...` |
| 235 | fn | normalizeManifestChannelId | (private) | `function normalizeManifestChannelId(channelId: ...` |
| 239 | fn | getManifestChannelPreferOver | (private) | `function getManifestChannelPreferOver(` |
| 246 | fn | collectPluginIdsForConfiguredChannel | (private) | `function collectPluginIdsForConfiguredChannel(` |
| 291 | fn | collectConfiguredChannelIds | (private) | `function collectConfiguredChannelIds(` |
| 318 | fn | isAutoEnableConfiguredChannelSignal | (private) | `function isAutoEnableConfiguredChannelSignal(pa...` |
| 341 | fn | hasConfiguredWebSearchPluginEntry | (private) | `function hasConfiguredWebSearchPluginEntry(cfg:...` |
| 352 | fn | hasConfiguredWebSearchProviderSelection | (private) | `function hasConfiguredWebSearchProviderSelectio...` |
| 361 | fn | hasConfiguredWebFetchPluginEntry | (private) | `function hasConfiguredWebFetchPluginEntry(cfg: ...` |
| 372 | fn | hasConfiguredSpeechProviderSelection | (private) | `function hasConfiguredSpeechProviderSelection(c...` |
| 376 | fn | hasConfiguredPluginConfigEntry | (private) | `function hasConfiguredPluginConfigEntry(cfg: Op...` |
| 385 | fn | listContainsNormalized | (private) | `function listContainsNormalized(value: unknown,...` |
| 392 | fn | toolPolicyReferencesBrowser | (private) | `function toolPolicyReferencesBrowser(value: unk...` |
| 400 | fn | hasBrowserToolReference | (private) | `function hasBrowserToolReference(cfg: OpenClawC...` |
| 410 | fn | collectConfiguredPluginEntryIds | (private) | `function collectConfiguredPluginEntryIds(cfg: O...` |
| 420 | fn | hasOwnPluginEntry | (private) | `function hasOwnPluginEntry(cfg: OpenClawConfig,...` |
| 425 | fn | isPluginEntryExplicitlyDisabled | (private) | `function isPluginEntryExplicitlyDisabled(cfg: O...` |
| 429 | fn | hasNonDisabledPluginEntry | (private) | `function hasNonDisabledPluginEntry(cfg: OpenCla...` |
| 436 | fn | hasBrowserSetupAutoEnableRelevantConfig | (private) | `function hasBrowserSetupAutoEnableRelevantConfi...` |
| 449 | fn | hasAcpxSetupAutoEnableRelevantConfig | (private) | `function hasAcpxSetupAutoEnableRelevantConfig(c...` |
| 464 | fn | hasXaiSetupAutoEnableRelevantConfig | (private) | `function hasXaiSetupAutoEnableRelevantConfig(cf...` |
| 475 | fn | resolveRelevantSetupAutoEnablePluginIds | (private) | `function resolveRelevantSetupAutoEnablePluginId...` |
| 489 | fn | hasSetupAutoEnableRelevantConfig | (private) | `function hasSetupAutoEnableRelevantConfig(cfg: ...` |
| 498 | fn | hasPluginEntries | (private) | `function hasPluginEntries(cfg: OpenClawConfig):...` |
| 503 | fn | hasPluginAllowlistWithMaterialEntries | (private) | `function hasPluginAllowlistWithMaterialEntries(...` |
| 518 | fn | hasConfiguredProviderModelOrHarness | (private) | `function hasConfiguredProviderModelOrHarness(cf...` |
| 531 | fn | arePluginsGloballyDisabled | (private) | `function arePluginsGloballyDisabled(cfg: OpenCl...` |
| 535 | fn | configMayNeedPluginManifestRegistry | (private) | `function configMayNeedPluginManifestRegistry(cf...` |
| 570 | fn | configMayNeedPluginAutoEnable | pub | `export function configMayNeedPluginAutoEnable(` |
| 577 | fn | resolvePluginAutoEnableReadiness | pub | `export function resolvePluginAutoEnableReadiness(` |
| 625 | fn | resolvePluginAutoEnableCandidateReason | pub | `export function resolvePluginAutoEnableCandidat...` |
| 659 | fn | resolveConfiguredPluginAutoEnableCandidates | pub | `export function resolveConfiguredPluginAutoEnab...` |
| 805 | fn | isPluginExplicitlyDisabled | (private) | `function isPluginExplicitlyDisabled(cfg: OpenCl...` |
| 822 | fn | isPluginDenied | (private) | `function isPluginDenied(cfg: OpenClawConfig, pl...` |
| 827 | fn | isPluginExplicitlySelected | (private) | `function isPluginExplicitlySelected(cfg: OpenCl...` |
| 835 | fn | disableImplicitPreferredOverPlugin | (private) | `function disableImplicitPreferredOverPlugin(par...` |
| 866 | fn | isBuiltInChannelAlreadyEnabled | (private) | `function isBuiltInChannelAlreadyEnabled(cfg: Op...` |
| 877 | fn | resolveAutoEnableChannelId | (private) | `function resolveAutoEnableChannelId(params: {` |
| 912 | fn | registerPluginEntry | (private) | `function registerPluginEntry(` |
| 952 | fn | hasMaterialPluginEntryConfig | (private) | `function hasMaterialPluginEntryConfig(entry: un...` |
| 967 | fn | isKnownPluginId | (private) | `function isKnownPluginId(pluginId: string, mani...` |
| 977 | fn | materializeConfiguredPluginEntryAllowlist | (private) | `function materializeConfiguredPluginEntryAllowl...` |
| 1009 | fn | resolveChannelAutoEnableDisplayLabel | (private) | `function resolveChannelAutoEnableDisplayLabel(` |
| 1022 | fn | formatAutoEnableChange | (private) | `function formatAutoEnableChange(` |
| 1035 | fn | resolvePluginAutoEnableManifestRegistry | pub | `export function resolvePluginAutoEnableManifest...` |
| 1075 | fn | materializePluginAutoEnableCandidatesInternal | pub | `export function materializePluginAutoEnableCand...` |

## Public API

### `configMayNeedPluginAutoEnable`

```
export function configMayNeedPluginAutoEnable(
```

**Line:** 570 | **Kind:** fn

### `resolvePluginAutoEnableReadiness`

```
export function resolvePluginAutoEnableReadiness(
```

**Line:** 577 | **Kind:** fn

### `resolvePluginAutoEnableCandidateReason`

```
export function resolvePluginAutoEnableCandidateReason(
```

**Line:** 625 | **Kind:** fn

### `resolveConfiguredPluginAutoEnableCandidates`

```
export function resolveConfiguredPluginAutoEnableCandidates(params: {
```

**Line:** 659 | **Kind:** fn

### `resolvePluginAutoEnableManifestRegistry`

```
export function resolvePluginAutoEnableManifestRegistry(params: {
```

**Line:** 1035 | **Kind:** fn

### `materializePluginAutoEnableCandidatesInternal`

```
export function materializePluginAutoEnableCandidatesInternal(params: {
```

**Line:** 1075 | **Kind:** fn
