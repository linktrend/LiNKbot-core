# src/plugins/marketplace.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1358
- **Language:** TypeScript
- **Symbols:** 45
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | type | MarketplaceLogger | (private) | - |
| 44 | type | MarketplaceEntrySource | (private) | - |
| 51 | type | MarketplacePluginEntry | (private) | - |
| 58 | type | MarketplaceManifest | (private) | - |
| 64 | type | LoadedMarketplace | (private) | - |
| 73 | type | MarketplaceManifestOrigin | (private) | - |
| 75 | type | ResolvedLocalMarketplaceSource | (private) | - |
| 80 | type | KnownMarketplaceRecord | (private) | - |
| 85 | type | MarketplacePluginListResult | (private) | - |
| 96 | type | MarketplaceInstallResult | (private) | - |
| 107 | type | MarketplaceShortcutResolution | (private) | - |
| 120 | fn | isGitUrl | (private) | `function isGitUrl(value: string): boolean {` |
| 126 | fn | looksLikeGitHubRepoShorthand | (private) | `function looksLikeGitHubRepoShorthand(value: st...` |
| 130 | fn | splitRef | (private) | `function splitRef(value: string): { base: strin...` |
| 142 | fn | normalizeEntrySource | (private) | `function normalizeEntrySource(` |
| 246 | fn | marketplaceEntrySourceToInput | (private) | `function marketplaceEntrySourceToInput(source: ...` |
| 262 | fn | marketplaceEntryGitRef | (private) | `function marketplaceEntryGitRef(source: Marketp...` |
| 276 | fn | isMutableGitDerivedSource | (private) | `function isMutableGitDerivedSource(ref: string ...` |
| 280 | fn | marketplaceInstallPolicySource | (private) | `function marketplaceInstallPolicySource(params: {` |
| 334 | fn | marketplaceInstallPolicyRequestKind | (private) | `function marketplaceInstallPolicyRequestKind(pa...` |
| 358 | fn | parseMarketplaceManifest | (private) | `function parseMarketplaceManifest(` |
| 413 | fn | readClaudeKnownMarketplaces | (private) | `async function readClaudeKnownMarketplaces(): P...` |
| 440 | fn | deriveMarketplaceRootFromManifestPath | (private) | `function deriveMarketplaceRootFromManifestPath(...` |
| 445 | fn | resolveLocalMarketplaceSource | (private) | `async function resolveLocalMarketplaceSource(` |
| 480 | fn | normalizeGitCloneSource | (private) | `function normalizeGitCloneSource(` |
| 524 | fn | cloneMarketplaceRepo | (private) | `async function cloneMarketplaceRepo(params: {` |
| 589 | fn | loadMarketplace | (private) | `async function loadMarketplace(params: {` |
| 594 | fn | loadMarketplaceFromManifestFile | (private) | `const loadMarketplaceFromManifestFile = async (...` |
| 729 | fn | resolveSafeMarketplaceDownloadFileName | (private) | `function resolveSafeMarketplaceDownloadFileName...` |
| 745 | fn | resolveMarketplaceDownloadTimeoutMs | (private) | `function resolveMarketplaceDownloadTimeoutMs(ti...` |
| 753 | fn | formatMarketplaceDownloadError | (private) | `function formatMarketplaceDownloadError(url: st...` |
| 760 | fn | hasStreamingResponseBody | (private) | `function hasStreamingResponseBody(` |
| 768 | fn | cancelUnreadMarketplaceResponseBody | (private) | `async function cancelUnreadMarketplaceResponseB...` |
| 772 | fn | parseMarketplaceContentLength | (private) | `function parseMarketplaceContentLength(raw: str...` |
| 784 | fn | readMarketplaceChunkWithTimeout | (private) | `async function readMarketplaceChunkWithTimeout(` |
| 792 | fn | clear | (private) | `const clear = () => {` |
| 823 | fn | writeMarketplaceChunk | (private) | `async function writeMarketplaceChunk(` |
| 837 | fn | streamMarketplaceResponseToFile | (private) | `async function streamMarketplaceResponseToFile(...` |
| 878 | fn | downloadUrlToTempFile | (private) | `async function downloadUrlToTempFile(` |
| 978 | fn | ensureInsideMarketplaceRoot | (private) | `async function ensureInsideMarketplaceRoot(` |
| 1042 | fn | validateMarketplaceManifest | (private) | `async function validateMarketplaceManifest(para...` |
| 1095 | fn | resolveMarketplaceEntryInstallPath | (private) | `async function resolveMarketplaceEntryInstallPa...` |
| 1199 | fn | listMarketplacePlugins | pub | `export async function listMarketplacePlugins(pa...` |
| 1223 | fn | resolveMarketplaceInstallShortcut | pub | `export async function resolveMarketplaceInstall...` |
| 1269 | fn | installPluginFromMarketplace | pub | `export async function installPluginFromMarketpl...` |

## Public API

### `listMarketplacePlugins`

```
export async function listMarketplacePlugins(params: {
```

**Line:** 1199 | **Kind:** fn

### `resolveMarketplaceInstallShortcut`

```
export async function resolveMarketplaceInstallShortcut(
```

**Line:** 1223 | **Kind:** fn

### `installPluginFromMarketplace`

```
export async function installPluginFromMarketplace(
```

**Line:** 1269 | **Kind:** fn
