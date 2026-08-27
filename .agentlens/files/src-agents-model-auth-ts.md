# src/agents/model-auth.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2100
- **Language:** TypeScript
- **Symbols:** 63
- **Public symbols:** 21

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 93 | type | ProviderCredentialPrecedence | pub | - |
| 95 | fn | sentinelizeSecretRefProfileApiKey | (private) | `function sentinelizeSecretRefProfileApiKey(para...` |
| 115 | type | RuntimeProviderAuthLookup | pub | - |
| 129 | fn | directOpenAIPlatformModelRequiresApiKey | (private) | `function directOpenAIPlatformModelRequiresApiKe...` |
| 140 | fn | openAICodexTransportRequiresOAuth | (private) | `function openAICodexTransportRequiresOAuth(para...` |
| 150 | fn | isAuthModeAllowedForModel | (private) | `function isAuthModeAllowedForModel(params: {` |
| 163 | fn | assertAuthModeAllowedForModel | (private) | `function assertAuthModeAllowedForModel(params: {` |
| 182 | fn | resolveConfigAwareEnvApiKey | (private) | `function resolveConfigAwareEnvApiKey(` |
| 195 | fn | resolveProviderConfig | (private) | `function resolveProviderConfig(` |
| 203 | fn | createRuntimeProviderAuthLookup | pub | `export function createRuntimeProviderAuthLookup...` |
| 235 | fn | runtimeLookupAllowsSetupProviderFallback | (private) | `function runtimeLookupAllowsSetupProviderFallba...` |
| 248 | fn | resolveRuntimeEnvApiKeyLookupOptions | (private) | `function resolveRuntimeEnvApiKeyLookupOptions(p...` |
| 272 | fn | getCustomProviderApiKey | pub | `export function getCustomProviderApiKey(` |
| 292 | type | ResolvedCustomProviderApiKey | (private) | - |
| 297 | fn | canResolveEnvSecretRefInReadOnlyPath | (private) | `function canResolveEnvSecretRefInReadOnlyPath(p...` |
| 314 | fn | resolveUsableCustomProviderApiKey | pub | `export function resolveUsableCustomProviderApiK...` |
| 394 | fn | hasUsableCustomProviderApiKey | pub | `export function hasUsableCustomProviderApiKey(` |
| 403 | fn | shouldPreferExplicitConfigApiKeyAuth | pub | `export function shouldPreferExplicitConfigApiKe...` |
| 415 | fn | resolveProviderAuthOverride | (private) | `function resolveProviderAuthOverride(` |
| 427 | fn | resolveDirectProviderCredentialMode | (private) | `function resolveDirectProviderCredentialMode(pa...` |
| 440 | fn | shouldUseImplicitAwsSdkAuth | (private) | `function shouldUseImplicitAwsSdkAuth(params: {` |
| 458 | fn | profileTypeToAuthMode | (private) | `function profileTypeToAuthMode(type: AuthProfil...` |
| 462 | type | ProviderEntryApiKeyProfileReference | (private) | - |
| 480 | type | ProviderEntryApiKeyBindingResolution | pub | - |
| 493 | fn | normalizeProviderEntryBaseUrlForBinding | (private) | `function normalizeProviderEntryBaseUrlForBindin...` |
| 509 | fn | providerEntriesShareBaseUrl | (private) | `function providerEntriesShareBaseUrl(params: {` |
| 525 | fn | isBearerProfileCredential | (private) | `function isBearerProfileCredential(credential: ...` |
| 530 | fn | canUseProfileAsProviderEntryApiKey | pub | `export function canUseProfileAsProviderEntryApi...` |
| 558 | fn | resolveProviderEntryApiKeyProfileReference | pub | `export function resolveProviderEntryApiKeyProfi...` |
| 607 | fn | resolveProviderEntryApiKeyBinding | pub | `export async function resolveProviderEntryApiKe...` |
| 658 | fn | resolveConfiguredAwsSdkProfileAuth | (private) | `function resolveConfiguredAwsSdkProfileAuth(par...` |
| 673 | fn | isLocalBaseUrl | (private) | `function isLocalBaseUrl(baseUrl: string): boole...` |
| 697 | fn | isPrivateIpv4Host | (private) | `function isPrivateIpv4Host(host: string): boole...` |
| 711 | fn | hasExplicitProviderApiKeyConfig | (private) | `function hasExplicitProviderApiKeyConfig(provid...` |
| 718 | fn | isCustomLocalProviderConfig | (private) | `function isCustomLocalProviderConfig(providerCo...` |
| 729 | fn | isManagedSecretRefApiKeyMarker | (private) | `function isManagedSecretRefApiKeyMarker(apiKey:...` |
| 733 | fn | hasSecretRefProviderApiKey | (private) | `function hasSecretRefProviderApiKey(cfg: OpenCl...` |
| 745 | fn | providerConfigMatchesRuntimeSnapshot | (private) | `function providerConfigMatchesRuntimeSnapshot(p...` |
| 764 | fn | sentinelizeConfigSecretRefEnvApiKey | (private) | `function sentinelizeConfigSecretRefEnvApiKey(pa...` |
| 797 | fn | resolveLiteralProviderConfigApiKeyAuth | (private) | `function resolveLiteralProviderConfigApiKeyAuth...` |
| 818 | fn | resolveManagedSecretRefRuntimeProviderAuth | (private) | `function resolveManagedSecretRefRuntimeProvider...` |
| 864 | fn | assertRuntimeProviderSecretOwnerAvailable | (private) | `function assertRuntimeProviderSecretOwnerAvaila...` |
| 890 | fn | hasSyntheticLocalProviderAuthConfig | pub | `export function hasSyntheticLocalProviderAuthCo...` |
| 920 | fn | listProviderSyntheticAuthRefs | (private) | `function listProviderSyntheticAuthRefs(params: {` |
| 936 | fn | shouldResolvePluginSyntheticAuth | (private) | `function shouldResolvePluginSyntheticAuth(param...` |
| 956 | fn | hasRuntimeAvailableProviderAuth | pub | `export function hasRuntimeAvailableProviderAuth...` |
| 1011 | type | SyntheticProviderAuthResolution | (private) | - |
| 1016 | fn | resolveProviderSyntheticRuntimeAuth | (private) | `function resolveProviderSyntheticRuntimeAuth(pa...` |
| 1078 | fn | resolveSyntheticLocalProviderAuth | (private) | `function resolveSyntheticLocalProviderAuth(para...` |
| 1115 | fn | resolveEnvSourceLabel | (private) | `function resolveEnvSourceLabel(params: {` |
| 1125 | fn | resolveAwsSdkAuthInfo | (private) | `function resolveAwsSdkAuthInfo(): { mode: "aws-...` |
| 1160 | fn | shouldDeferSyntheticProfileAuth | (private) | `function shouldDeferSyntheticProfileAuth(params: {` |
| 1182 | fn | resolveScopedAuthProfileStore | (private) | `function resolveScopedAuthProfileStore(params: {` |
| 1195 | fn | resolveApiKeyForProvider | pub | `export async function resolveApiKeyForProvider(...` |
| 1701 | type | ModelAuthMode | pub | - |
| 1707 | fn | resolveModelAuthMode | pub | `export function resolveModelAuthMode(` |
| 1773 | fn | hasAvailableAuthForProvider | pub | `export async function hasAvailableAuthForProvid...` |
| 1862 | fn | getApiKeyForModel | pub | `export async function getApiKeyForModel(params: {` |
| 1895 | fn | applyLocalNoAuthHeaderOverride | pub | `export function applyLocalNoAuthHeaderOverride<...` |
| 1917 | fn | applySecretRefHeaderSentinels | pub | `export function applySecretRefHeaderSentinels<T...` |
| 1944 | fn | isManagedSecret | (private) | `const isManagedSecret = (value: unknown) =>` |
| 1947 | fn | addReplacement | (private) | `const addReplacement = (name: string, value: st...` |
| 2065 | fn | applyAuthHeaderOverride | pub | `export function applyAuthHeaderOverride<T exten...` |

## Public API

### `createRuntimeProviderAuthLookup`

```
export function createRuntimeProviderAuthLookup(params: {
```

**Line:** 203 | **Kind:** fn

### `getCustomProviderApiKey`

```
export function getCustomProviderApiKey(
```

**Line:** 272 | **Kind:** fn

### `resolveUsableCustomProviderApiKey`

```
export function resolveUsableCustomProviderApiKey(params: {
```

**Line:** 314 | **Kind:** fn

### `hasUsableCustomProviderApiKey`

```
export function hasUsableCustomProviderApiKey(
```

**Line:** 394 | **Kind:** fn

### `shouldPreferExplicitConfigApiKeyAuth`

```
export function shouldPreferExplicitConfigApiKeyAuth(
```

**Line:** 403 | **Kind:** fn

### `canUseProfileAsProviderEntryApiKey`

```
export function canUseProfileAsProviderEntryApiKey(params: {
```

**Line:** 530 | **Kind:** fn

### `resolveProviderEntryApiKeyProfileReference`

```
export function resolveProviderEntryApiKeyProfileReference(params: {
```

**Line:** 558 | **Kind:** fn

### `resolveProviderEntryApiKeyBinding`

```
export async function resolveProviderEntryApiKeyBinding(params: {
```

**Line:** 607 | **Kind:** fn

### `hasSyntheticLocalProviderAuthConfig`

```
export function hasSyntheticLocalProviderAuthConfig(params: {
```

**Line:** 890 | **Kind:** fn

### `hasRuntimeAvailableProviderAuth`

```
export function hasRuntimeAvailableProviderAuth(params: {
```

**Line:** 956 | **Kind:** fn

### `resolveApiKeyForProvider`

```
export async function resolveApiKeyForProvider(params: {
```

**Line:** 1195 | **Kind:** fn

### `resolveModelAuthMode`

```
export function resolveModelAuthMode(
```

**Line:** 1707 | **Kind:** fn

### `hasAvailableAuthForProvider`

```
export async function hasAvailableAuthForProvider(params: {
```

**Line:** 1773 | **Kind:** fn

### `getApiKeyForModel`

```
export async function getApiKeyForModel(params: {
```

**Line:** 1862 | **Kind:** fn

### `applyLocalNoAuthHeaderOverride`

```
export function applyLocalNoAuthHeaderOverride<T extends Model>(
```

**Line:** 1895 | **Kind:** fn

### `applySecretRefHeaderSentinels`

```
export function applySecretRefHeaderSentinels<T extends Model>(
```

**Line:** 1917 | **Kind:** fn

### `applyAuthHeaderOverride`

```
export function applyAuthHeaderOverride<T extends Model>(
```

**Line:** 2065 | **Kind:** fn
