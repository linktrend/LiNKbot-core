# src/channels/plugins/read-only.ts

[← Back to Module](../modules/src-channels-plugins/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1043
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | PluginLoaderModule | (private) | - |
| 89 | fn | listBuiltPluginLoaderModuleCandidateUrls | (private) | `function listBuiltPluginLoaderModuleCandidateUr...` |
| 109 | fn | listPluginLoaderModuleCandidateUrls | pub | `export function listPluginLoaderModuleCandidate...` |
| 117 | fn | loadPluginLoaderModule | (private) | `function loadPluginLoaderModule(): PluginLoader...` |
| 141 | type | ReadOnlyChannelPluginOptions | (private) | - |
| 150 | type | ReadOnlyChannelPluginResolution | (private) | - |
| 156 | type | ManifestChannelConfigRecord | (private) | - |
| 157 | type | ReadOnlyChannelPluginLoadFailure | (private) | - |
| 173 | fn | cloneReadOnlyChannelPluginResolution | (private) | `function cloneReadOnlyChannelPluginResolution(` |
| 184 | fn | rememberReadOnlyChannelPluginResolution | (private) | `function rememberReadOnlyChannelPluginResolution(` |
| 203 | fn | resolveReadOnlyChannelPluginResolutionCacheKey | (private) | `function resolveReadOnlyChannelPluginResolution...` |
| 232 | fn | resolveReadOnlyChannelPluginObjectId | (private) | `function resolveReadOnlyChannelPluginObjectId(p...` |
| 243 | fn | fingerprintLoadedChannelPlugins | (private) | `function fingerprintLoadedChannelPlugins(plugin...` |
| 249 | fn | hashEnvironment | (private) | `function hashEnvironment(env: NodeJS.ProcessEnv...` |
| 260 | fn | addChannelPlugins | (private) | `function addChannelPlugins(` |
| 282 | fn | rebindChannelScopedString | (private) | `function rebindChannelScopedString(` |
| 297 | fn | normalizeManifestText | (private) | `function normalizeManifestText(value: string | ...` |
| 301 | fn | rebindChannelConfig | (private) | `function rebindChannelConfig(` |
| 318 | fn | restoreReboundChannelConfig | (private) | `function restoreReboundChannelConfig(params: {` |
| 344 | fn | getChannelConfigRecord | (private) | `function getChannelConfigRecord(cfg: OpenClawCo...` |
| 358 | fn | normalizeManifestAccountConfigKey | (private) | `function normalizeManifestAccountConfigKey(acco...` |
| 362 | fn | listManifestChannelAccountIds | (private) | `function listManifestChannelAccountIds(cfg: Ope...` |
| 376 | fn | resolveManifestChannelDefaultAccountId | (private) | `function resolveManifestChannelDefaultAccountId...` |
| 387 | fn | resolveManifestChannelAccountConfig | (private) | `function resolveManifestChannelAccountConfig(pa...` |
| 408 | fn | buildManifestChannelPlugin | (private) | `function buildManifestChannelPlugin(params: {` |
| 500 | fn | canUseManifestChannelPlugin | (private) | `function canUseManifestChannelPlugin(record: Pl...` |
| 512 | fn | loadSetupChannelPluginFromManifestRecord | (private) | `function loadSetupChannelPluginFromManifestReco...` |
| 567 | fn | collectChannelPluginLoadFailuresFromDiagnostics | (private) | `function collectChannelPluginLoadFailuresFromDi...` |
| 601 | fn | rebindChannelPluginConfig | (private) | `function rebindChannelPluginConfig(` |
| 606 | fn | rebind | (private) | `const rebind = (cfg: OpenClawConfig) =>` |
| 670 | fn | rebindChannelPluginSecrets | (private) | `function rebindChannelPluginSecrets(` |
| 707 | fn | cloneChannelPluginForChannelId | (private) | `function cloneChannelPluginForChannelId(plugin:...` |
| 724 | fn | addSetupChannelPlugins | (private) | `function addSetupChannelPlugins(` |
| 778 | fn | addManifestChannelPlugins | (private) | `function addManifestChannelPlugins(` |
| 809 | fn | resolveReadOnlyWorkspaceDir | (private) | `function resolveReadOnlyWorkspaceDir(` |
| 816 | fn | listExternalChannelManifestRecords | (private) | `function listExternalChannelManifestRecords(` |
| 822 | fn | listBundledChannelManifestRecords | (private) | `function listBundledChannelManifestRecords(` |
| 828 | fn | listPluginIdsForChannels | (private) | `function listPluginIdsForChannels(` |
| 839 | fn | resolveExternalReadOnlyChannelPluginIds | (private) | `function resolveExternalReadOnlyChannelPluginId...` |
| 874 | fn | listReadOnlyChannelPluginsForConfig | pub | `export function listReadOnlyChannelPluginsForCo...` |
| 881 | fn | resolveReadOnlyChannelPluginsForConfig | pub | `export function resolveReadOnlyChannelPluginsFo...` |

## Public API

### `listPluginLoaderModuleCandidateUrls`

```
export function listPluginLoaderModuleCandidateUrls(importerUrl = import.meta.url): URL[] {
```

**Line:** 109 | **Kind:** fn

### `listReadOnlyChannelPluginsForConfig`

```
export function listReadOnlyChannelPluginsForConfig(
```

**Line:** 874 | **Kind:** fn

### `resolveReadOnlyChannelPluginsForConfig`

```
export function resolveReadOnlyChannelPluginsForConfig(
```

**Line:** 881 | **Kind:** fn
