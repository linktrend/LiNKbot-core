# src/secrets/apply.ts

[← Back to Module](../modules/src-secrets/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1049
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | FileSnapshot | (private) | - |
| 61 | type | ApplyWrite | (private) | - |
| 67 | type | AuthStoreSnapshot | (private) | - |
| 73 | type | ProjectedState | (private) | - |
| 89 | type | ResolvedPlanTargetEntry | (private) | - |
| 94 | type | ConfigTargetMutationResult | (private) | - |
| 103 | type | MutableAuthProfileStore | (private) | - |
| 108 | type | SecretsApplyResult | pub | - |
| 122 | fn | planContainsExecReferences | (private) | `function planContainsExecReferences(plan: Secre...` |
| 129 | fn | hasPluginPolicyId | (private) | `function hasPluginPolicyId(list: unknown, plugi...` |
| 133 | fn | findPluginEntry | (private) | `function findPluginEntry(entries: unknown, plug...` |
| 146 | fn | resolveTarget | (private) | `function resolveTarget(` |
| 156 | fn | scrubEnvRaw | (private) | `function scrubEnvRaw(` |
| 199 | fn | applyProviderPlanMutations | (private) | `function applyProviderPlanMutations(params: {` |
| 285 | fn | projectPlanState | (private) | `async function projectPlanState(params: {` |
| 379 | fn | applyConfigTargetMutations | (private) | `function applyConfigTargetMutations(params: {` |
| 464 | fn | scrubAuthStoresForProviderTargets | (private) | `function scrubAuthStoresForProviderTargets(para...` |
| 533 | fn | ensureMutableAuthStore | (private) | `function ensureMutableAuthStore(` |
| 544 | fn | resolveAuthStoreForTarget | (private) | `function resolveAuthStoreForTarget(params: {` |
| 569 | fn | resolveAuthStoreTargetForAgent | (private) | `function resolveAuthStoreTargetForAgent(params: {` |
| 594 | fn | listAuthProfileStoreTargets | (private) | `function listAuthProfileStoreTargets(` |
| 604 | fn | ensureAuthProfileContainer | (private) | `function ensureAuthProfileContainer(params: {` |
| 655 | fn | applyAuthProfileTargetMutation | (private) | `function applyAuthProfileTargetMutation(params: {` |
| 704 | fn | scrubLegacyAuthJsonStores | (private) | `function scrubLegacyAuthJsonStores(params: {` |
| 738 | fn | scrubEnvFiles | (private) | `function scrubEnvFiles(params: {` |
| 767 | fn | validateProjectedSecretsState | (private) | `async function validateProjectedSecretsState(pa...` |
| 842 | fn | captureFileSnapshot | (private) | `function captureFileSnapshot(pathname: string):...` |
| 854 | fn | restoreFileSnapshot | (private) | `function restoreFileSnapshot(pathname: string, ...` |
| 864 | fn | toJsonWrite | (private) | `function toJsonWrite(pathname: string, value: R...` |
| 874 | fn | runSecretsApply | pub | `export async function runSecretsApply(params: {` |
| 928 | fn | capture | (private) | `const capture = (pathname: string) => {` |
| 933 | fn | captureAuthStore | (private) | `const captureAuthStore = (pathname: string, age...` |

## Public API

### `runSecretsApply`

```
export async function runSecretsApply(params: {
```

**Line:** 874 | **Kind:** fn
