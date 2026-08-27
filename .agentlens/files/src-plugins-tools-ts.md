# src/plugins/tools.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1715
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | type | PluginToolMcpMeta | pub | - |
| 58 | type | PluginToolMeta | (private) | - |
| 66 | type | PluginToolFactoryTimingResult | (private) | - |
| 68 | type | PluginToolFactoryTiming | (private) | - |
| 78 | type | PluginToolFactoryResult | (private) | - |
| 89 | fn | setPluginToolMeta | pub | `export function setPluginToolMeta(tool: AnyAgen...` |
| 94 | fn | getPluginToolMeta | pub | `export function getPluginToolMeta(tool: AnyAgen...` |
| 99 | fn | copyPluginToolMeta | pub | `export function copyPluginToolMeta(source: AnyA...` |
| 106 | fn | pluginToolScopeKey | (private) | `function pluginToolScopeKey(entry: PluginToolRe...` |
| 110 | fn | runWithPluginToolScope | (private) | `function runWithPluginToolScope<T>(entry: Plugi...` |
| 120 | fn | isAgentTool | (private) | `function isAgentTool(value: unknown): value is ...` |
| 129 | fn | wrapPluginToolCallbacks | (private) | `function wrapPluginToolCallbacks(entry: PluginT...` |
| 142 | fn | scopedExecute | (private) | `const scopedExecute = (` |
| 193 | fn | wrapPluginToolFactoryResult | (private) | `function wrapPluginToolFactoryResult(` |
| 203 | fn | resolvePluginToolFactory | (private) | `function resolvePluginToolFactory(entry: Plugin...` |
| 209 | fn | blocksHostRestrictedConversationReadTool | (private) | `function blocksHostRestrictedConversationReadTo...` |
| 227 | fn | blocksHostRestrictedConversationReadRegistration | (private) | `function blocksHostRestrictedConversationReadRe...` |
| 246 | fn | resolveCurrentManifestPlugin | (private) | `function resolveCurrentManifestPlugin(params: {` |
| 269 | fn | buildPluginToolMetadataKey | pub | `export function buildPluginToolMetadataKey(plug...` |
| 273 | fn | normalizeAllowlist | (private) | `function normalizeAllowlist(list?: string[]) {` |
| 277 | fn | normalizeDenylist | (private) | `function normalizeDenylist(list?: string[]) {` |
| 284 | fn | denylistBlocksName | (private) | `function denylistBlocksName(name: string, denyl...` |
| 289 | fn | denylistBlocksPlugin | (private) | `function denylistBlocksPlugin(params: {` |
| 299 | fn | denylistBlocksPluginTool | (private) | `function denylistBlocksPluginTool(params: {` |
| 310 | fn | allowlistIncludesDefaultPluginTools | (private) | `function allowlistIncludesDefaultPluginTools(al...` |
| 314 | fn | isManifestToolOptional | (private) | `function isManifestToolOptional(plugin: PluginM...` |
| 318 | fn | isPluginToolOptional | (private) | `function isPluginToolOptional(params: {` |
| 329 | fn | isManifestToolReplaySafe | (private) | `function isManifestToolReplaySafe(params: {` |
| 336 | fn | isTrustedManifestLocalMediaTool | (private) | `function isTrustedManifestLocalMediaTool(params: {` |
| 346 | fn | isOptionalToolAllowed | (private) | `function isOptionalToolAllowed(params: {` |
| 367 | fn | isOptionalToolEntryPotentiallyAllowed | (private) | `function isOptionalToolEntryPotentiallyAllowed(...` |
| 388 | fn | readPluginToolName | (private) | `function readPluginToolName(tool: unknown): str...` |
| 396 | fn | hasRequiredClientCaps | (private) | `function hasRequiredClientCaps(` |
| 414 | fn | toElapsedMs | (private) | `function toElapsedMs(value: number): number {` |
| 418 | fn | describePluginToolFactoryResult | (private) | `function describePluginToolFactoryResult(` |
| 434 | fn | createPluginToolFactoryTiming | (private) | `function createPluginToolFactoryTiming(params: {` |
| 455 | fn | resolvePluginToolFactoryEntry | (private) | `function resolvePluginToolFactoryEntry(params: {` |
| 493 | fn | formatPluginToolFactoryTiming | (private) | `function formatPluginToolFactoryTiming(timing: ...` |
| 504 | fn | formatPluginToolFactoryTimingSummary | (private) | `function formatPluginToolFactoryTimingSummary(p...` |
| 529 | fn | shouldWarnPluginToolFactoryTimings | (private) | `function shouldWarnPluginToolFactoryTimings(par...` |
| 539 | fn | describeMalformedPluginTool | (private) | `function describeMalformedPluginTool(tool: unkn...` |
| 563 | fn | pluginToolNamesMatchAllowlist | (private) | `function pluginToolNamesMatchAllowlist(params: {` |
| 575 | fn | listManifestToolNamesForAllowlist | (private) | `function listManifestToolNamesForAllowlist(para...` |
| 603 | fn | listManifestToolNamesForAvailability | (private) | `function listManifestToolNamesForAvailability(p...` |
| 612 | fn | isManifestToolNameAvailable | (private) | `function isManifestToolNameAvailable(params: {` |
| 628 | fn | filterManifestToolNamesForAvailability | (private) | `function filterManifestToolNamesForAvailability...` |
| 646 | fn | resolvePluginToolRuntimePluginIds | (private) | `function resolvePluginToolRuntimePluginIds(para...` |
| 716 | fn | readPluginCacheSource | (private) | `function readPluginCacheSource(plugin: PluginMa...` |
| 728 | fn | buildPluginDescriptorCacheKey | (private) | `function buildPluginDescriptorCacheKey(params: {` |
| 747 | fn | cachedDescriptorsCoverToolNames | (private) | `function cachedDescriptorsCoverToolNames(params: {` |
| 757 | fn | createCachedDescriptorPluginTool | (private) | `function createCachedDescriptorPluginTool(param...` |
| 870 | fn | resolveCachedPluginTools | (private) | `function resolveCachedPluginTools(params: {` |
| 1030 | fn | resolvePluginToolRegistry | (private) | `function resolvePluginToolRegistry(params: {` |
| 1047 | fn | addRegistry | (private) | `const addRegistry = (registry: PluginRegistry |...` |
| 1063 | fn | missingPluginIds | (private) | `const missingPluginIds = () =>` |
| 1065 | fn | composeSelectedRegistries | (private) | `const composeSelectedRegistries = () =>` |
| 1160 | fn | composePluginToolRegistries | (private) | `function composePluginToolRegistries(params: {` |
| 1195 | fn | registryHasScopedPluginTools | (private) | `function registryHasScopedPluginTools(` |
| 1213 | fn | resolvePluginToolLoadState | (private) | `function resolvePluginToolLoadState(params: {` |
| 1269 | fn | ensureStandalonePluginToolRegistryLoaded | pub | `export function ensureStandalonePluginToolRegis...` |
| 1295 | fn | resolvePluginTools | pub | `export function resolvePluginTools(params: {` |

## Public API

### `setPluginToolMeta`

```
export function setPluginToolMeta(tool: AnyAgentTool, meta: PluginToolMeta): void {
```

**Line:** 89 | **Kind:** fn

### `getPluginToolMeta`

```
export function getPluginToolMeta(tool: AnyAgentTool): PluginToolMeta | undefined {
```

**Line:** 94 | **Kind:** fn

### `copyPluginToolMeta`

```
export function copyPluginToolMeta(source: AnyAgentTool, target: AnyAgentTool): void {
```

**Line:** 99 | **Kind:** fn

### `buildPluginToolMetadataKey`

```
export function buildPluginToolMetadataKey(pluginId: string, toolName: string): string {
```

**Line:** 269 | **Kind:** fn

### `ensureStandalonePluginToolRegistryLoaded`

```
export function ensureStandalonePluginToolRegistryLoaded(params: {
```

**Line:** 1269 | **Kind:** fn

### `resolvePluginTools`

```
export function resolvePluginTools(params: {
```

**Line:** 1295 | **Kind:** fn
