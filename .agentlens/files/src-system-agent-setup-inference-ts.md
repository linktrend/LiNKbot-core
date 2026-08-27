# src/system-agent/setup-inference.ts

[← Back to Module](../modules/src-system-agent/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3490
- **Language:** TypeScript
- **Symbols:** 82
- **Public symbols:** 26

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 119 | type | ProviderAutoSetupInferenceKind | pub | - |
| 120 | type | SetupInferenceKind | pub | - |
| 122 | type | SetupInferenceCandidate | pub | - |
| 134 | type | SetupInferenceUnavailableCandidate | pub | - |
| 151 | type | SetupInferenceDetection | pub | - |
| 168 | type | SetupInferenceStatus | pub | - |
| 178 | type | SetupInferenceFailureStatus | pub | - |
| 180 | type | ActivateSetupInferenceResult | pub | - |
| 188 | class | SetupInferenceActivationIndeterminateError | pub | - |
| 192 | class | SetupInferenceActivationUnavailableError | (private) | - |
| 196 | type | VerifySetupInferenceResult | pub | - |
| 210 | type | CompleteSetupInferenceResult | pub | - |
| 214 | type | BoundVerifySetupInferenceResult | pub | - |
| 223 | type | ActivateSetupInferenceParams | pub | - |
| 246 | class | SetupInferenceCancelledError | (private) | - |
| 252 | fn | throwIfSetupInferenceCancelled | (private) | `function throwIfSetupInferenceCancelled(` |
| 260 | fn | waitForProviderAuth | (private) | `async function waitForProviderAuth<T>(promise: ...` |
| 271 | fn | onAbort | (private) | `const onAbort = () => rejectAborted?.(new Setup...` |
| 280 | type | SetupInferenceRunEmbeddedAgent | (private) | - |
| 287 | type | ActivateSetupInferenceDeps | pub | - |
| 322 | type | DetectSetupInferenceDeps | pub | - |
| 330 | fn | toProviderAutoSetupKind | (private) | `function toProviderAutoSetupKind(choiceId: stri...` |
| 334 | fn | parseProviderAutoSetupChoiceId | (private) | `function parseProviderAutoSetupChoiceId(kind: s...` |
| 349 | fn | invalidSetupConfigError | (private) | `function invalidSetupConfigError(snapshot: {` |
| 358 | fn | resolveCandidatePresentation | (private) | `function resolveCandidatePresentation(` |
| 372 | fn | resolveSetupInferenceWorkspace | (private) | `async function resolveSetupInferenceWorkspace(p...` |
| 391 | fn | listManualSetupInferenceOptions | pub | `export async function listManualSetupInferenceO...` |
| 426 | fn | detectSetupInference | pub | `export async function detectSetupInference(` |
| 597 | type | SetupInferenceTestPlan | (private) | - |
| 622 | fn | configureCodexCliPreparedAuth | (private) | `function configureCodexCliPreparedAuth(cfg: Ope...` |
| 647 | type | RunResult | (private) | - |
| 658 | fn | extractRunText | (private) | `function extractRunText(result: RunResult): str...` |
| 669 | fn | extractRunTerminalError | (private) | `function extractRunTerminalError(result: RunRes...` |
| 689 | fn | extractRunWinnerError | (private) | `function extractRunWinnerError(` |
| 704 | fn | resolveToolFreeCliSetupError | (private) | `function resolveToolFreeCliSetupError(plan: Set...` |
| 725 | fn | resolveStrictSetupAuthProfileError | (private) | `function resolveStrictSetupAuthProfileError(par...` |
| 780 | fn | parseRef | (private) | `function parseRef(modelRef: string): { provider...` |
| 787 | fn | projectSetupTargetModelMetadata | (private) | `function projectSetupTargetModelMetadata(config...` |
| 797 | fn | project | (private) | `const project = (models: Record<string, unknown...` |
| 815 | fn | resolveSetupAgentRuntimeId | (private) | `function resolveSetupAgentRuntimeId(` |
| 833 | fn | mapFailoverReasonToSetupStatus | (private) | `function mapFailoverReasonToSetupStatus(reason?...` |
| 852 | fn | prepareManualAuthForActivation | (private) | `function prepareManualAuthForActivation(params: {` |
| 886 | fn | copySelectedModelMetadata | (private) | `function copySelectedModelMetadata(params: {` |
| 937 | fn | findSelectedProviderConfigKey | (private) | `function findSelectedProviderConfigKey(` |
| 959 | fn | projectManualInferenceConfig | (private) | `function projectManualInferenceConfig(params: {` |
| 1018 | fn | canonicalizeSetupModelRef | (private) | `function canonicalizeSetupModelRef(params: {` |
| 1036 | fn | buildTestPlan | (private) | `async function buildTestPlan(params: {` |
| 1502 | fn | runProviderManualSecretMethod | (private) | `async function runProviderManualSecretMethod(pa...` |
| 1585 | fn | activateSetupInference | pub | `export async function activateSetupInference(` |
| 1619 | fn | activateSetupInferenceUnredacted | (private) | `async function activateSetupInferenceUnredacted(` |
| 2388 | fn | redactSetupInferenceError | (private) | `async function redactSetupInferenceError(messag...` |
| 2400 | fn | hasSameOwnerPluginArtifacts | (private) | `function hasSameOwnerPluginArtifacts(` |
| 2410 | type | VerifySetupInferenceParams | (private) | - |
| 2419 | fn | verifySetupInference | pub | `export function verifySetupInference(` |
| 2422 | fn | verifySetupInference | pub | `export function verifySetupInference(` |
| 2425 | fn | verifySetupInference | pub | `export async function verifySetupInference(` |
| 2504 | type | BoundSetupInferenceVerifier | (private) | - |
| 2511 | type | ResolvePersistentApplyInferenceDeps | pub | - |
| 2517 | fn | executionRouteIdentity | (private) | `function executionRouteIdentity(route: SystemAg...` |
| 2527 | fn | resolvePersistentApplyInference | pub | `export async function resolvePersistentApplyInf...` |
| 2579 | fn | verifySetupInferenceConfig | pub | `export async function verifySetupInferenceConfi...` |
| 2683 | fn | retainStagedAuthProfiles | (private) | `const retainStagedAuthProfiles = () => {` |
| 2826 | fn | completeSetupInference | pub | `export async function completeSetupInference(pa...` |
| 2852 | fn | completeSetupInferenceConfig | pub | `export async function completeSetupInferenceCon...` |
| 2914 | fn | cleanupSetupInferenceTempDir | (private) | `async function cleanupSetupInferenceTempDir(par...` |
| 2943 | fn | isCodexInstallRecordPersisted | (private) | `async function isCodexInstallRecordPersisted(` |
| 2959 | fn | retainUnownedCodexInstall | (private) | `async function retainUnownedCodexInstall(params: {` |
| 2996 | fn | clearUnownedCodexInstallCaches | (private) | `async function clearUnownedCodexInstallCaches(d...` |
| 3025 | fn | reloadCodexRegistryAfterActivation | (private) | `async function reloadCodexRegistryAfterActivati...` |
| 3077 | fn | isMergePatchObject | (private) | `function isMergePatchObject(value: unknown): va...` |
| 3081 | fn | mergePatchConflicts | (private) | `function mergePatchConflicts(base: unknown, cur...` |
| 3100 | fn | applyManualAuthConfig | (private) | `function applyManualAuthConfig(` |
| 3126 | type | ManualAuthPersistenceReceipt | (private) | - |
| 3136 | type | ManualAuthProfilesReadback | (private) | - |
| 3138 | type | ManualAuthPersistenceResult | (private) | - |
| 3143 | fn | modelSelectionReferencesProfile | (private) | `function modelSelectionReferencesProfile(value:...` |
| 3160 | fn | configReferencesManualAuthProfiles | (private) | `function configReferencesManualAuthProfiles(` |
| 3183 | fn | readManualAuthProfiles | (private) | `function readManualAuthProfiles(` |
| 3209 | fn | manualAuthProfilesPersisted | (private) | `function manualAuthProfilesPersisted(` |
| 3216 | fn | persistManualAuthProfiles | (private) | `async function persistManualAuthProfiles(params: {` |
| 3261 | fn | rollbackManualAuthProfiles | (private) | `async function rollbackManualAuthProfiles(` |
| 3326 | fn | runSetupInferenceTest | (private) | `async function runSetupInferenceTest(params: {` |

## Public API

### `listManualSetupInferenceOptions`

```
export async function listManualSetupInferenceOptions(
```

**Line:** 391 | **Kind:** fn

### `detectSetupInference`

```
export async function detectSetupInference(
```

**Line:** 426 | **Kind:** fn

### `activateSetupInference`

```
export async function activateSetupInference(
```

**Line:** 1585 | **Kind:** fn

### `verifySetupInference`

```
export function verifySetupInference(
```

**Line:** 2419 | **Kind:** fn

### `verifySetupInference`

```
export function verifySetupInference(
```

**Line:** 2422 | **Kind:** fn

### `verifySetupInference`

```
export async function verifySetupInference(
```

**Line:** 2425 | **Kind:** fn

### `resolvePersistentApplyInference`

```
export async function resolvePersistentApplyInference(params: {
```

**Line:** 2527 | **Kind:** fn

### `verifySetupInferenceConfig`

```
export async function verifySetupInferenceConfig(params: {
```

**Line:** 2579 | **Kind:** fn

### `completeSetupInference`

```
export async function completeSetupInference(params: {
```

**Line:** 2826 | **Kind:** fn

### `completeSetupInferenceConfig`

```
export async function completeSetupInferenceConfig(params: {
```

**Line:** 2852 | **Kind:** fn
