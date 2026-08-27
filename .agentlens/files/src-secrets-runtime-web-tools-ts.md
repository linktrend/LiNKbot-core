# src/secrets/runtime-web-tools.ts

[← Back to Module](../modules/src-secrets/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1106
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | type | FetchConfig | (private) | - |
| 78 | type | SecretResolutionSource | (private) | - |
| 82 | fn | ensureConfigObject | (private) | `function ensureConfigObject(target: Record<stri...` |
| 92 | type | ResolvedRuntimeWebTools | (private) | - |
| 98 | type | RuntimeWebProviderFailure | (private) | - |
| 101 | type | RuntimeWebProviderFailureByRefKey | (private) | - |
| 106 | fn | createUnavailableWebProviderOwner | (private) | `function createUnavailableWebProviderOwner(para...` |
| 128 | fn | attachWebProviderFailures | (private) | `function attachWebProviderFailures(` |
| 137 | fn | collectUnavailableWebProviders | (private) | `function collectUnavailableWebProviders(params: {` |
| 199 | fn | toWebSecretOwnerRefState | (private) | `function toWebSecretOwnerRefState(` |
| 214 | fn | associateWebProviderResolutionError | (private) | `function associateWebProviderResolutionError(pa...` |
| 281 | fn | needsRuntimeWebFetchProviderDiscovery | (private) | `function needsRuntimeWebFetchProviderDiscovery(...` |
| 304 | fn | hasPluginScopedWebToolConfig | (private) | `function hasPluginScopedWebToolConfig(` |
| 321 | fn | inferSingleBundledPluginScopedWebToolConfigOwner | (private) | `function inferSingleBundledPluginScopedWebToolC...` |
| 346 | fn | inferExactBundledPluginScopedWebToolConfigOwner | (private) | `function inferExactBundledPluginScopedWebToolCo...` |
| 359 | type | WebProviderContract | (private) | - |
| 361 | fn | hasCustomWebProviderPluginRisk | (private) | `async function hasCustomWebProviderPluginRisk(p...` |
| 389 | fn | hasNonBundledPluginId | (private) | `const hasNonBundledPluginId = (pluginId: string...` |
| 403 | fn | readNonEmptyEnvValue | (private) | `function readNonEmptyEnvValue(` |
| 416 | fn | resolveSecretInputWithEnvFallback | (private) | `async function resolveSecretInputWithEnvFallbac...` |
| 549 | fn | setResolvedWebSearchApiKey | (private) | `function setResolvedWebSearchApiKey(params: {` |
| 564 | fn | resolveBundledWebSearchProviders | (private) | `async function resolveBundledWebSearchProviders...` |
| 617 | fn | resolveBundledWebFetchProviders | (private) | `async function resolveBundledWebFetchProviders(...` |
| 668 | fn | readConfiguredProviderCredential | (private) | `function readConfiguredProviderCredential(param...` |
| 679 | fn | readConfiguredProviderCredentialFallback | (private) | `function readConfiguredProviderCredentialFallba...` |
| 687 | fn | inactivePathsForProvider | (private) | `function inactivePathsForProvider(provider: Plu...` |
| 696 | fn | setResolvedWebFetchApiKey | (private) | `function setResolvedWebFetchApiKey(params: {` |
| 711 | fn | readConfiguredFetchProviderCredential | (private) | `function readConfiguredFetchProviderCredential(...` |
| 722 | fn | readConfiguredFetchProviderCredentialFallback | (private) | `function readConfiguredFetchProviderCredentialF...` |
| 730 | fn | inactivePathsForFetchProvider | (private) | `function inactivePathsForFetchProvider(provider...` |
| 743 | fn | resolveRuntimeWebTools | pub | `export async function resolveRuntimeWebTools(pa...` |

## Public API

### `resolveRuntimeWebTools`

```
export async function resolveRuntimeWebTools(params: {
```

**Line:** 743 | **Kind:** fn
