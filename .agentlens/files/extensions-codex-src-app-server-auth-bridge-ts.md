# extensions/codex/src/app-server/auth-bridge.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1075
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 64 | type | AuthProfileOrderConfig | (private) | - |
| 65 | type | CodexAppServerAuthRequirement | pub | - |
| 71 | fn | bridgeCodexAppServerStartOptions | pub | `export async function bridgeCodexAppServerStart...` |
| 118 | fn | resolveCodexAppServerAuthProfileId | pub | `export function resolveCodexAppServerAuthProfil...` |
| 134 | fn | resolveCodexAppServerAuthProfileIdForAgent | pub | `export function resolveCodexAppServerAuthProfil...` |
| 154 | fn | ensureCodexAppServerAuthProfileStore | (private) | `function ensureCodexAppServerAuthProfileStore(p...` |
| 167 | fn | resolveCodexAppServerAuthProfileStore | pub | `export function resolveCodexAppServerAuthProfil...` |
| 183 | type | CodexAppServerPreparedAuthProfileSnapshot | (private) | - |
| 188 | type | CodexAppServerPreparedAuth | pub | - |
| 197 | type | CodexAppServerResolvedPreparedAuth | pub | - |
| 204 | fn | resolveCodexAppServerPreparedAuthProfileSnapshot | pub | `export async function resolveCodexAppServerPrep...` |
| 254 | fn | resolveCodexAppServerPreparedAuthHandoff | pub | `export async function resolveCodexAppServerPrep...` |
| 310 | fn | resolveCodexAppServerAuthAccountCacheKey | pub | `export async function resolveCodexAppServerAuth...` |
| 352 | fn | resolveCodexAppServerEnvApiKeyCacheKey | (private) | `function resolveCodexAppServerEnvApiKeyCacheKey...` |
| 378 | fn | resolveCodexAppServerFallbackApiKeyCacheKey | pub | `export function resolveCodexAppServerFallbackAp...` |
| 393 | fn | resolveCodexAppServerPreparedApiKeyCacheKey | pub | `export function resolveCodexAppServerPreparedAp...` |
| 400 | fn | fingerprintApiKeyAuthProfileCacheKey | (private) | `function fingerprintApiKeyAuthProfileCacheKey(a...` |
| 408 | fn | fingerprintTokenAuthProfileCacheKey | (private) | `function fingerprintTokenAuthProfileCacheKey(ac...` |
| 416 | fn | fingerprintCodexCliAuthFileApiKeyCacheKey | (private) | `function fingerprintCodexCliAuthFileApiKeyCache...` |
| 426 | fn | withCodexHomeEnvironment | (private) | `async function withCodexHomeEnvironment(` |
| 464 | fn | withoutClearedCodexHomeEnv | (private) | `function withoutClearedCodexHomeEnv(clearEnv: s...` |
| 473 | fn | applyCodexAppServerAuthProfile | pub | `export async function applyCodexAppServerAuthPr...` |
| 557 | fn | createCodexAppServerAuthError | (private) | `function createCodexAppServerAuthError(message:...` |
| 562 | class | CodexAppServerAuthProfileUnavailableError | (private) | - |
| 564 | fn | resolveCodexAppServerAuthProfileLoginParams | (private) | `async function resolveCodexAppServerAuthProfile...` |
| 593 | fn | refreshCodexAppServerAuthTokens | pub | `export async function refreshCodexAppServerAuth...` |
| 613 | fn | resolveCodexAppServerAuthProfileLoginParamsInternal | (private) | `async function resolveCodexAppServerAuthProfile...` |
| 658 | fn | resolveCodexAppServerFallbackApiKeyLoginParams | (private) | `async function resolveCodexAppServerFallbackApi...` |
| 678 | fn | resolveCodexCliAuthFilePath | (private) | `function resolveCodexCliAuthFilePath(env: NodeJ...` |
| 687 | fn | resolveHomeRelativePath | (private) | `function resolveHomeRelativePath(value: string,...` |
| 695 | fn | parseCodexCliAuthFileApiKey | (private) | `function parseCodexCliAuthFileApiKey(raw: strin...` |
| 709 | fn | readCodexCliAuthFileApiKey | (private) | `async function readCodexCliAuthFileApiKey(env: ...` |
| 717 | fn | resolveCodexCliAuthFileApiKeyCacheKey | (private) | `function resolveCodexCliAuthFileApiKeyCacheKey(...` |
| 728 | fn | resolveLoginParamsForCredential | (private) | `async function resolveLoginParamsForCredential(` |
| 782 | fn | resolveOAuthCredentialForCodexAppServer | (private) | `async function resolveOAuthCredentialForCodexAp...` |
| 875 | fn | shouldUseScopedOAuthCredential | (private) | `function shouldUseScopedOAuthCredential(params: {` |
| 901 | fn | hasMatchingOAuthIdentity | (private) | `function hasMatchingOAuthIdentity(persisted: OA...` |
| 912 | fn | resolveScopedOAuthCredential | (private) | `async function resolveScopedOAuthCredential(par...` |
| 928 | fn | refresh | (private) | `const refresh = (async () => {` |
| 958 | fn | isCodexAppServerAuthProvider | (private) | `function isCodexAppServerAuthProvider(provider:...` |
| 969 | fn | isOpenAIApiKeyBackupCredential | (private) | `function isOpenAIApiKeyBackupCredential(` |
| 979 | fn | isCodexAppServerAuthProfileCredential | (private) | `function isCodexAppServerAuthProfileCredential(` |
| 989 | fn | shouldClearOpenAiApiKeyForCodexAuthProfile | (private) | `function shouldClearOpenAiApiKeyForCodexAuthPro...` |
| 1001 | fn | isCodexSubscriptionCredential | (private) | `function isCodexSubscriptionCredential(` |
| 1011 | fn | withClearedEnvironmentVariables | (private) | `function withClearedEnvironmentVariables(` |
| 1026 | fn | readFirstNonEmptyEnv | (private) | `function readFirstNonEmptyEnv(env: NodeJS.Proce...` |
| 1030 | fn | readFirstNonEmptyEnvEntry | (private) | `function readFirstNonEmptyEnvEntry(` |
| 1043 | fn | buildChatgptAuthTokensParams | (private) | `function buildChatgptAuthTokensParams(` |
| 1056 | fn | resolveChatgptPlanType | (private) | `function resolveChatgptPlanType(credential: Aut...` |
| 1062 | fn | resolveChatgptAccountId | (private) | `function resolveChatgptAccountId(profileId: str...` |
| 1066 | fn | resolveStableChatgptAccountId | (private) | `function resolveStableChatgptAccountId(credenti...` |

## Public API

### `bridgeCodexAppServerStartOptions`

```
export async function bridgeCodexAppServerStartOptions(params: {
```

**Line:** 71 | **Kind:** fn

### `resolveCodexAppServerAuthProfileId`

```
export function resolveCodexAppServerAuthProfileId(params: {
```

**Line:** 118 | **Kind:** fn

### `resolveCodexAppServerAuthProfileIdForAgent`

```
export function resolveCodexAppServerAuthProfileIdForAgent(params: {
```

**Line:** 134 | **Kind:** fn

### `resolveCodexAppServerAuthProfileStore`

```
export function resolveCodexAppServerAuthProfileStore(params: {
```

**Line:** 167 | **Kind:** fn

### `resolveCodexAppServerPreparedAuthProfileSnapshot`

```
export async function resolveCodexAppServerPreparedAuthProfileSnapshot(params: {
```

**Line:** 204 | **Kind:** fn

### `resolveCodexAppServerPreparedAuthHandoff`

```
export async function resolveCodexAppServerPreparedAuthHandoff(params: {
```

**Line:** 254 | **Kind:** fn

### `resolveCodexAppServerAuthAccountCacheKey`

```
export async function resolveCodexAppServerAuthAccountCacheKey(params: {
```

**Line:** 310 | **Kind:** fn

### `resolveCodexAppServerFallbackApiKeyCacheKey`

```
export function resolveCodexAppServerFallbackApiKeyCacheKey(params: {
```

**Line:** 378 | **Kind:** fn

### `resolveCodexAppServerPreparedApiKeyCacheKey`

```
export function resolveCodexAppServerPreparedApiKeyCacheKey(
```

**Line:** 393 | **Kind:** fn

### `applyCodexAppServerAuthProfile`

```
export async function applyCodexAppServerAuthProfile(params: {
```

**Line:** 473 | **Kind:** fn

### `refreshCodexAppServerAuthTokens`

```
export async function refreshCodexAppServerAuthTokens(params: {
```

**Line:** 593 | **Kind:** fn
