# extensions/codex/src/app-server/session-binding.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1444
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 26

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 44 | type | ProviderAuthAliasLookupParams | (private) | - |
| 45 | type | ProviderAuthAliasConfig | (private) | - |
| 48 | type | CodexAppServerAuthProfileLookup | pub | - |
| 56 | type | CodexAppServerBindingIdentity | pub | - |
| 61 | fn | sessionBindingIdentity | pub | `export function sessionBindingIdentity(params: {` |
| 78 | fn | createCodexSessionGenerationSupersededError | pub | `export function createCodexSessionGenerationSup...` |
| 296 | type | CodexAppServerThreadBinding | pub | - |
| 298 | type | CodexAppServerPendingSupervisionBranch | pub | - |
| 300 | class | CodexSupervisionBindingReplacementError | pub | - |
| 310 | fn | assertCodexBindingMayBeReplaced | pub | `export function assertCodexBindingMayBeReplaced(` |
| 319 | type | CodexAppServerContextEngineBinding | pub | - |
| 321 | type | CodexAppServerContextEngineProjectionBinding | pub | - |
| 325 | type | CodexAppServerBindingMutation | (private) | - |
| 358 | type | CodexSessionGenerationAdoptionResult | pub | - |
| 360 | type | CodexSessionGenerationRetirementResult | pub | - |
| 362 | type | CodexSessionGenerationReclaimPlan | pub | - |
| 395 | type | StoredCodexAppServerBinding | pub | - |
| 397 | fn | hashCodexAppServerBindingFingerprint | pub | `export function hashCodexAppServerBindingFinger...` |
| 401 | fn | normalizeLegacyBindingFingerprint | (private) | `function normalizeLegacyBindingFingerprint(valu...` |
| 413 | fn | normalizeLegacyBindingFingerprints | (private) | `function normalizeLegacyBindingFingerprints(` |
| 433 | fn | normalizeStoredCodexAppServerBindingFingerprints | pub | `export function normalizeStoredCodexAppServerBi...` |
| 449 | fn | createStoredCodexAppServerBinding | pub | `export function createStoredCodexAppServerBinding(` |
| 495 | type | BindingStateStore | (private) | - |
| 500 | type | BindingLeaseOwner | (private) | - |
| 505 | fn | bindingLeaseLostError | (private) | `function bindingLeaseLostError(key: string, cau...` |
| 509 | type | CodexAppServerBindingStore | pub | - |
| 534 | fn | reclaimCurrentCodexSessionGeneration | pub | `export async function reclaimCurrentCodexSessio...` |
| 574 | fn | createCodexAppServerBindingStore | pub | `export function createCodexAppServerBindingStore(` |
| 1050 | fn | removeOwnedLease | (private) | `const removeOwnedLease = (` |
| 1094 | fn | matchesPendingSupervisionBranch | (private) | `function matchesPendingSupervisionBranch(` |
| 1117 | fn | isSameSupervisionOwner | (private) | `function isSameSupervisionOwner(` |
| 1128 | fn | matchesPendingSupervisionClear | (private) | `function matchesPendingSupervisionClear(` |
| 1145 | fn | bindingStoreKey | pub | `export function bindingStoreKey(identity: Codex...` |
| 1170 | fn | readStoredCodexAppServerBinding | pub | `export function readStoredCodexAppServerBinding(` |
| 1179 | fn | storedSessionGeneration | (private) | `function storedSessionGeneration(` |
| 1189 | fn | preservedSessionGeneration | (private) | `function preservedSessionGeneration(` |
| 1199 | fn | ownsStoredSessionGeneration | (private) | `function ownsStoredSessionGeneration(` |
| 1208 | fn | validateBindingForWrite | (private) | `function validateBindingForWrite(` |
| 1219 | fn | readCodexAppServerThreadBinding | pub | `export function readCodexAppServerThreadBinding(` |
| 1229 | fn | stripUndefinedBinding | (private) | `function stripUndefinedBinding(binding: CodexAp...` |
| 1233 | fn | stripUndefinedValue | (private) | `function stripUndefinedValue(value: unknown): u...` |
| 1247 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 1253 | fn | readTimestamp | (private) | `function readTimestamp(value: unknown): string ...` |
| 1257 | fn | readPluginAppPolicyContext | (private) | `function readPluginAppPolicyContext(` |
| 1347 | fn | readDestructiveApprovalMode | (private) | `function readDestructiveApprovalMode(` |
| 1369 | fn | sleep | (private) | `function sleep(ms: number): Promise<void> {` |
| 1376 | fn | isCodexAppServerNativeAuthProfile | pub | `export function isCodexAppServerNativeAuthProfile(` |
| 1415 | fn | normalizeCodexAppServerBindingModelProvider | pub | `export function normalizeCodexAppServerBindingM...` |
| 1436 | fn | resolveCodexAppServerBindingModelProvider | pub | `export function resolveCodexAppServerBindingMod...` |

## Public API

### `sessionBindingIdentity`

```
export function sessionBindingIdentity(params: {
```

**Line:** 61 | **Kind:** fn

### `createCodexSessionGenerationSupersededError`

```
export function createCodexSessionGenerationSupersededError(
```

**Line:** 78 | **Kind:** fn

### `assertCodexBindingMayBeReplaced`

```
export function assertCodexBindingMayBeReplaced(
```

**Line:** 310 | **Kind:** fn

### `hashCodexAppServerBindingFingerprint`

```
export function hashCodexAppServerBindingFingerprint(canonical: string): string {
```

**Line:** 397 | **Kind:** fn

### `normalizeStoredCodexAppServerBindingFingerprints`

```
export function normalizeStoredCodexAppServerBindingFingerprints(
```

**Line:** 433 | **Kind:** fn

### `createStoredCodexAppServerBinding`

```
export function createStoredCodexAppServerBinding(
```

**Line:** 449 | **Kind:** fn

### `reclaimCurrentCodexSessionGeneration`

```
export async function reclaimCurrentCodexSessionGeneration(params: {
```

**Line:** 534 | **Kind:** fn

### `createCodexAppServerBindingStore`

```
export function createCodexAppServerBindingStore(
```

**Line:** 574 | **Kind:** fn

### `bindingStoreKey`

```
export function bindingStoreKey(identity: CodexAppServerBindingIdentity): string {
```

**Line:** 1145 | **Kind:** fn

### `readStoredCodexAppServerBinding`

```
export function readStoredCodexAppServerBinding(
```

**Line:** 1170 | **Kind:** fn

### `readCodexAppServerThreadBinding`

```
export function readCodexAppServerThreadBinding(
```

**Line:** 1219 | **Kind:** fn

### `isCodexAppServerNativeAuthProfile`

```
export function isCodexAppServerNativeAuthProfile(
```

**Line:** 1376 | **Kind:** fn

### `normalizeCodexAppServerBindingModelProvider`

```
export function normalizeCodexAppServerBindingModelProvider(params: {
```

**Line:** 1415 | **Kind:** fn

### `resolveCodexAppServerBindingModelProvider`

```
export function resolveCodexAppServerBindingModelProvider(
```

**Line:** 1436 | **Kind:** fn
