# src/commands/models/auth.ts

[← Back to Module](../modules/src-commands-models/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1127
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 74 | type | UpsertAuthProfileParams | (private) | - |
| 77 | fn | refreshRunningGatewayAuthState | (private) | `async function refreshRunningGatewayAuthState()...` |
| 89 | fn | resolveManualTokenExpiryMs | (private) | `function resolveManualTokenExpiryMs(expiresIn: ...` |
| 102 | fn | guardCancel | (private) | `function guardCancel<T>(value: T | symbol): T {` |
| 110 | fn | confirm | (private) | `const confirm = async (params: Parameters<typeo...` |
| 117 | fn | text | (private) | `const text = async (params: Parameters<typeof c...` |
| 124 | fn | password | (private) | `const password = async (params: Parameters<type...` |
| 136 | fn | readPipedStdin | (private) | `async function readPipedStdin(): Promise<string> {` |
| 144 | fn | readPastedSecret | (private) | `async function readPastedSecret(params: {` |
| 161 | fn | resolveDefaultTokenProfileId | (private) | `function resolveDefaultTokenProfileId(provider:...` |
| 165 | fn | normalizeManualAuthProvider | (private) | `function normalizeManualAuthProvider(provider: ...` |
| 172 | fn | isOpenAIProvider | (private) | `function isOpenAIProvider(provider: string): bo...` |
| 176 | fn | stripBearerPrefix | (private) | `function stripBearerPrefix(value: string): stri...` |
| 183 | fn | looksLikeOpenAIApiKey | (private) | `function looksLikeOpenAIApiKey(value: string): ...` |
| 187 | fn | looksLikeJwtToken | (private) | `function looksLikeJwtToken(value: string): bool...` |
| 193 | fn | looksLikeStructuredCredential | (private) | `function looksLikeStructuredCredential(value: s...` |
| 198 | fn | validateOpenAICodexApiKeyInput | (private) | `function validateOpenAICodexApiKeyInput(value: ...` |
| 214 | type | ResolvedModelsAuthContext | (private) | - |
| 221 | fn | listProvidersWithAuthMethods | (private) | `function listProvidersWithAuthMethods(providers...` |
| 225 | fn | listTokenAuthMethods | (private) | `function listTokenAuthMethods(provider: Provide...` |
| 229 | fn | listProvidersWithTokenMethods | (private) | `function listProvidersWithTokenMethods(provider...` |
| 233 | fn | mergeSetupProviders | (private) | `function mergeSetupProviders(` |
| 255 | fn | preferSetupAuthProviders | (private) | `function preferSetupAuthProviders(params: {` |
| 280 | fn | resolveModelsAuthContext | (private) | `async function resolveModelsAuthContext(params?: {` |
| 323 | fn | resolveModelsAuthAgentDir | (private) | `async function resolveModelsAuthAgentDir(rawAge...` |
| 329 | fn | resolveRequestedProviderOrThrow | (private) | `function resolveRequestedProviderOrThrow(` |
| 351 | fn | resolveTokenMethodOrThrow | (private) | `function resolveTokenMethodOrThrow(` |
| 369 | fn | pickProviderAuthMethod | (private) | `async function pickProviderAuthMethod(params: {` |
| 397 | fn | pickProviderTokenMethod | (private) | `async function pickProviderTokenMethod(params: {` |
| 429 | fn | persistProviderAuthResult | (private) | `async function persistProviderAuthResult(params: {` |
| 522 | fn | resolveConfiguredAuthSelectionForProvider | (private) | `function resolveConfiguredAuthSelectionForProvi...` |
| 546 | fn | runProviderAuthMethod | (private) | `async function runProviderAuthMethod(params: {` |
| 610 | fn | modelsAuthSetupTokenCommand | pub | `export async function modelsAuthSetupTokenCommand(` |
| 667 | fn | modelsAuthPasteTokenCommand | pub | `export async function modelsAuthPasteTokenCommand(` |
| 737 | fn | modelsAuthPasteApiKeyCommand | pub | `export async function modelsAuthPasteApiKeyComm...` |
| 791 | fn | upsertAuthProfileWithLockOrThrow | (private) | `async function upsertAuthProfileWithLockOrThrow...` |
| 801 | fn | modelsAuthAddCommand | pub | `export async function modelsAuthAddCommand(opts...` |
| 869 | fn | profileId | (private) | `const profileId = (` |
| 904 | type | LoginOptions | (private) | - |
| 920 | type | ModelsAuthLoginFlowResult | pub | - |
| 931 | type | ModelsAuthLoginFlowOptions | pub | - |
| 946 | fn | clearStaleProfileLockouts | (private) | `async function clearStaleProfileLockouts(provid...` |
| 961 | fn | resolveRequestedLoginProviderOrThrow | pub | `export function resolveRequestedLoginProviderOr...` |
| 968 | fn | credentialMode | (private) | `function credentialMode(credential: AuthProfile...` |
| 979 | fn | resolveLoginProfiles | pub | `export function resolveLoginProfiles(params: {` |
| 998 | fn | maybeLogOpenAICodexNativeSearchTip | (private) | `function maybeLogOpenAICodexNativeSearchTip(run...` |
| 1007 | fn | runModelsAuthLoginFlow | pub | `export async function runModelsAuthLoginFlow(` |
| 1114 | fn | modelsAuthLoginCommand | pub | `export async function modelsAuthLoginCommand(op...` |

## Public API

### `modelsAuthSetupTokenCommand`

```
export async function modelsAuthSetupTokenCommand(
```

**Line:** 610 | **Kind:** fn

### `modelsAuthPasteTokenCommand`

```
export async function modelsAuthPasteTokenCommand(
```

**Line:** 667 | **Kind:** fn

### `modelsAuthPasteApiKeyCommand`

```
export async function modelsAuthPasteApiKeyCommand(
```

**Line:** 737 | **Kind:** fn

### `modelsAuthAddCommand`

```
export async function modelsAuthAddCommand(opts: { agent?: string }, runtime: RuntimeEnv) {
```

**Line:** 801 | **Kind:** fn

### `resolveRequestedLoginProviderOrThrow`

```
export function resolveRequestedLoginProviderOrThrow(
```

**Line:** 961 | **Kind:** fn

### `resolveLoginProfiles`

```
export function resolveLoginProfiles(params: {
```

**Line:** 979 | **Kind:** fn

### `runModelsAuthLoginFlow`

```
export async function runModelsAuthLoginFlow(
```

**Line:** 1007 | **Kind:** fn

### `modelsAuthLoginCommand`

```
export async function modelsAuthLoginCommand(opts: LoginOptions, runtime: RuntimeEnv) {
```

**Line:** 1114 | **Kind:** fn
