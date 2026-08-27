# src/context-engine/registry.ts

[← Back to Module](../modules/src-context-engine/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1053
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | ContextEngineFactoryContext | (private) | - |
| 45 | type | ContextEngineFactory | pub | - |
| 48 | type | ContextEngineRegistrationResult | (private) | - |
| 49 | type | ContextEngineRegistrationLifecycle | (private) | - |
| 50 | type | ContextEngineRegistration | (private) | - |
| 56 | type | RegisterContextEngineForOwnerOptions | (private) | - |
| 62 | type | ResolvedContextEngineMetadata | (private) | - |
| 66 | type | RuntimeQuarantineProxyState | (private) | - |
| 102 | type | SessionKeyCompatMethodName | (private) | - |
| 103 | type | SessionKeyCompatParams | (private) | - |
| 110 | type | LegacyCompatKey | (private) | - |
| 111 | type | LegacyCompatParamMap | (private) | - |
| 113 | fn | isSessionKeyCompatMethodName | (private) | `function isSessionKeyCompatMethodName(value: Pr...` |
| 117 | fn | hasOwnLegacyCompatKey | (private) | `function hasOwnLegacyCompatKey<K extends Legacy...` |
| 124 | fn | withoutLegacyCompatKeys | (private) | `function withoutLegacyCompatKeys<T extends Sess...` |
| 135 | fn | issueRejectsLegacyCompatKeyStrictly | (private) | `function issueRejectsLegacyCompatKeyStrictly(is...` |
| 217 | fn | isLegacyCompatUnknownFieldValidationMessage | (private) | `function isLegacyCompatUnknownFieldValidationMe...` |
| 224 | fn | isLegacyCompatErrorForKey | (private) | `function isLegacyCompatErrorForKey(error: unkno...` |
| 277 | fn | detectRejectedLegacyCompatKeys | (private) | `function detectRejectedLegacyCompatKeys(` |
| 290 | fn | invokeWithLegacyCompat | (private) | `async function invokeWithLegacyCompat<TResult, ...` |
| 341 | fn | wrapContextEngineWithSessionKeyCompat | (private) | `function wrapContextEngineWithSessionKeyCompat(...` |
| 382 | fn | wrapResolvedContextEngine | (private) | `function wrapResolvedContextEngine(` |
| 415 | type | ContextEngineRuntimeQuarantine | (private) | - |
| 423 | type | ContextEngineRegistryState | (private) | - |
| 438 | fn | getContextEngineRegistryState | (private) | `function getContextEngineRegistryState(): Conte...` |
| 442 | fn | requireContextEngineOwner | (private) | `function requireContextEngineOwner(owner: strin...` |
| 452 | fn | formatContextEngineError | (private) | `function formatContextEngineError(error: unknow...` |
| 456 | fn | recordContextEngineQuarantine | (private) | `function recordContextEngineQuarantine(params: {` |
| 491 | fn | getContextEngineQuarantine | (private) | `function getContextEngineQuarantine(engineId: s...` |
| 495 | fn | listContextEngineQuarantines | pub | `export function listContextEngineQuarantines():...` |
| 520 | fn | clearContextEngineRuntimeQuarantine | (private) | `function clearContextEngineRuntimeQuarantine(en...` |
| 534 | fn | registerContextEngineForOwner | pub | `export function registerContextEngineForOwner(` |
| 570 | fn | getContextEngineRegistration | pub | `export function getContextEngineRegistration(id...` |
| 577 | fn | listContextEngineIds | (private) | `function listContextEngineIds(): string[] {` |
| 581 | fn | clearContextEnginesForOwner | pub | `export function clearContextEnginesForOwner(own...` |
| 595 | fn | resolveContextEngineOwnerPluginId | pub | `export function resolveContextEngineOwnerPluginId(` |
| 609 | fn | resolveEffectiveContextEngineMetadata | (private) | `function resolveEffectiveContextEngineMetadata(` |
| 626 | fn | describeResolvedContextEngineContractError | (private) | `function describeResolvedContextEngineContractE...` |
| 671 | type | GuardedContextEngineMethodName | (private) | - |
| 694 | fn | contextEngineFallbackResult | (private) | `function contextEngineFallbackResult(` |
| 724 | fn | contextEngineAbortSignal | (private) | `function contextEngineAbortSignal(methodParams:...` |
| 735 | fn | contextEngineAbortError | (private) | `function contextEngineAbortError(methodParams: ...` |
| 749 | fn | isContextEngineAbortRejection | (private) | `function isContextEngineAbortRejection(error: u...` |
| 769 | fn | invokeFallbackContextEngineMethod | (private) | `async function invokeFallbackContextEngineMetho...` |
| 801 | fn | wrapContextEngineWithRuntimeQuarantine | (private) | `function wrapContextEngineWithRuntimeQuarantine...` |
| 810 | fn | getFallbackEngine | (private) | `const getFallbackEngine = () => {` |
| 831 | fn | isQuarantined | (private) | `const isQuarantined = () => Boolean(getContextE...` |
| 901 | type | ResolveContextEngineOptions | pub | - |
| 922 | fn | resolveContextEngine | pub | `export async function resolveContextEngine(` |
| 1032 | fn | resolveDefaultContextEngine | (private) | `async function resolveDefaultContextEngine(` |

## Public API

### `listContextEngineQuarantines`

```
export function listContextEngineQuarantines(): ContextEngineRuntimeQuarantine[] {
```

**Line:** 495 | **Kind:** fn

### `registerContextEngineForOwner`

```
export function registerContextEngineForOwner(
```

**Line:** 534 | **Kind:** fn

### `getContextEngineRegistration`

```
export function getContextEngineRegistration(id: string): ContextEngineRegistration | undefined {
```

**Line:** 570 | **Kind:** fn

### `clearContextEnginesForOwner`

```
export function clearContextEnginesForOwner(owner: string): void {
```

**Line:** 581 | **Kind:** fn

### `resolveContextEngineOwnerPluginId`

```
export function resolveContextEngineOwnerPluginId(
```

**Line:** 595 | **Kind:** fn

### `resolveContextEngine`

```
export async function resolveContextEngine(
```

**Line:** 922 | **Kind:** fn
