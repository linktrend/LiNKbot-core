# src/commands/doctor/shared/legacy-config-migrations.runtime.models.ts

[← Back to Module](../modules/src-commands-doctor-shared/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2075
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | fn | resolveStaleContextWindowFix | (private) | `function resolveStaleContextWindowFix(params: {` |
| 61 | fn | hasStaleContextWindowValue | (private) | `function hasStaleContextWindowValue(providers: ...` |
| 89 | fn | hasInvalidThinkingFormat | (private) | `function hasInvalidThinkingFormat(providers: un...` |
| 118 | fn | normalizeLegacyVllmQwenThinkingFormat | (private) | `function normalizeLegacyVllmQwenThinkingFormat(` |
| 146 | fn | getLegacyVllmQwenThinkingFormat | (private) | `function getLegacyVllmQwenThinkingFormat(params...` |
| 165 | fn | parseVllmAgentModelKey | (private) | `function parseVllmAgentModelKey(key: string): s...` |
| 179 | fn | hasLegacyVllmQwenThinkingFormat | (private) | `function hasLegacyVllmQwenThinkingFormat(defaul...` |
| 196 | fn | hasLegacyVllmQwenThinkingProviderParams | (private) | `function hasLegacyVllmQwenThinkingProviderParam...` |
| 201 | fn | hasLegacyVllmQwenThinkingModelParams | (private) | `function hasLegacyVllmQwenThinkingModelParams(p...` |
| 212 | fn | hasLegacyVllmQwenThinkingParams | (private) | `function hasLegacyVllmQwenThinkingParams(params...` |
| 217 | fn | hasLegacyVllmQwenThinkingAgentParams | (private) | `function hasLegacyVllmQwenThinkingAgentParams(a...` |
| 225 | fn | findOrCreateVllmModelEntry | (private) | `function findOrCreateVllmModelEntry(` |
| 254 | fn | listExistingVllmModelTargets | (private) | `function listExistingVllmModelTargets(` |
| 267 | fn | collectVllmModelIdsFromSelection | (private) | `function collectVllmModelIdsFromSelection(value...` |
| 297 | fn | collectVllmModelIdsFromAgentModelMap | (private) | `function collectVllmModelIdsFromAgentModelMap(v...` |
| 308 | fn | createVllmModelTargets | (private) | `function createVllmModelTargets(` |
| 325 | fn | combineVllmModelTargets | (private) | `function combineVllmModelTargets(` |
| 342 | fn | collectVllmModelIdsFromAgentList | (private) | `function collectVllmModelIdsFromAgentList(value...` |
| 357 | fn | getOrCreateRecord | (private) | `function getOrCreateRecord(` |
| 369 | fn | findVllmProvider | (private) | `function findVllmProvider(` |
| 379 | fn | getOrCreateVllmProvider | (private) | `function getOrCreateVllmProvider(` |
| 389 | fn | hasLegacyVllmQwenThinkingNormalizedProvider | (private) | `function hasLegacyVllmQwenThinkingNormalizedPro...` |
| 401 | fn | preserveMigratedVllmQwenReasoning | (private) | `function preserveMigratedVllmQwenReasoning(mode...` |
| 407 | fn | removeLegacyVllmQwenThinkingParams | (private) | `function removeLegacyVllmQwenThinkingParams(par...` |
| 413 | fn | applyLegacyVllmQwenThinkingFormat | (private) | `function applyLegacyVllmQwenThinkingFormat(para...` |
| 447 | fn | removeUntargetedLegacyVllmQwenThinkingFormat | (private) | `function removeUntargetedLegacyVllmQwenThinking...` |
| 515 | fn | normalizeString | (private) | `function normalizeString(value: unknown): string {` |
| 519 | fn | preferredClaudeSeparator | (private) | `function preferredClaudeSeparator(provider: str...` |
| 523 | fn | claudeTargetModelId | (private) | `function claudeTargetModelId(` |
| 533 | fn | shouldUpgradeClaudeProvider | (private) | `function shouldUpgradeClaudeProvider(provider: ...` |
| 544 | fn | upgradeRetiredGroqModelId | (private) | `function upgradeRetiredGroqModelId(model: strin...` |
| 566 | fn | upgradeRetiredXaiModelId | (private) | `function upgradeRetiredXaiModelId(model: string...` |
| 584 | fn | upgradeRetiredOpenAiModelId | (private) | `function upgradeRetiredOpenAiModelId(model: str...` |
| 635 | fn | hasRetiredVersionPrefix | (private) | `function hasRetiredVersionPrefix(normalized: st...` |
| 646 | fn | hasAnyRetiredVersionPrefix | (private) | `function hasAnyRetiredVersionPrefix(normalized:...` |
| 650 | fn | upgradeOldClaudeToken | (private) | `function upgradeOldClaudeToken(` |
| 760 | fn | upgradeOldClaudeModelPart | (private) | `function upgradeOldClaudeModelPart(model: strin...` |
| 773 | fn | upgradeRetiredModelRef | (private) | `function upgradeRetiredModelRef(value: string):...` |
| 836 | fn | pathKey | (private) | `function pathKey(path: string): string {` |
| 840 | fn | isChannelModelOverridePath | (private) | `function isChannelModelOverridePath(path: strin...` |
| 844 | fn | isModelPolicyAllowPath | (private) | `function isModelPolicyAllowPath(path: string): ...` |
| 848 | fn | scanKnownModelRefs | (private) | `function scanKnownModelRefs(value: unknown, key...` |
| 877 | fn | collectLegacyDefaultModelAllowRefs | (private) | `function collectLegacyDefaultModelAllowRefs(raw...` |
| 887 | fn | migrateExplicitDefaultModelAllowPolicy | (private) | `function migrateExplicitDefaultModelAllowPolicy(` |
| 919 | fn | rewriteModelRefString | (private) | `function rewriteModelRefString(value: string, p...` |
| 928 | fn | setRecordEntry | (private) | `function setRecordEntry(record: Record<string, ...` |
| 939 | fn | sanitizeModelRefMapEntry | (private) | `function sanitizeModelRefMapEntry(value: unknow...` |
| 958 | fn | modelRefValuesAreEqual | (private) | `function modelRefValuesAreEqual(existing: unkno...` |
| 967 | fn | mergeModelRefMapEntries | (private) | `function mergeModelRefMapEntries(` |
| 1008 | fn | rewriteModelRefMapKeys | (private) | `function rewriteModelRefMapKeys(` |
| 1053 | fn | rewriteKnownModelRefs | (private) | `function rewriteKnownModelRefs(` |
| 1138 | fn | hasCanonicalOpenAIProvider | (private) | `function hasCanonicalOpenAIProvider(providers: ...` |
| 1144 | fn | normalizeLegacyOpenAIResponsesApi | (private) | `function normalizeLegacyOpenAIResponsesApi(` |
| 1184 | fn | hasOwnDefinedProperty | (private) | `function hasOwnDefinedProperty(record: Record<s...` |
| 1188 | fn | collectModelMergeBlockers | (private) | `function collectModelMergeBlockers(params: {` |
| 1207 | fn | getCanonicalOpenAIProviderEntry | (private) | `function getCanonicalOpenAIProviderEntry(` |
| 1215 | fn | getMergeableLegacyOpenAIModels | (private) | `function getMergeableLegacyOpenAIModels(params: {` |
| 1250 | fn | collectLegacyModelPolicyWildcardPaths | (private) | `function collectLegacyModelPolicyWildcardPaths(...` |
| 1284 | fn | hasAutoFixableLegacyOpenAICodexProvider | (private) | `function hasAutoFixableLegacyOpenAICodexProvider(` |
| 1333 | type | BlockedLegacyOpenAICodexProviderPlan | pub | - |
| 1339 | fn | collectBlockedLegacyOpenAICodexProviderPlan | pub | `export function collectBlockedLegacyOpenAICodex...` |
| 1411 | fn | buildBlockedLegacyOpenAICodexProviderPlan | (private) | `function buildBlockedLegacyOpenAICodexProviderP...` |
| 1429 | fn | resolveMovedCodexModelRuntime | (private) | `function resolveMovedCodexModelRuntime(params: {` |
| 1454 | fn | buildMergedLegacyOpenAIModel | (private) | `function buildMergedLegacyOpenAIModel(` |
| 1512 | fn | collectNonEquivalentLegacyOpenAIModelCollisions | (private) | `function collectNonEquivalentLegacyOpenAIModelC...` |
| 1561 | fn | prepareLegacyCodexProviderForCanonicalMove | (private) | `function prepareLegacyCodexProviderForCanonical...` |
| 1585 | fn | migrateLegacyOpenAICodexProvider | (private) | `function migrateLegacyOpenAICodexProvider(raw: ...` |

## Public API

### `collectBlockedLegacyOpenAICodexProviderPlan`

```
export function collectBlockedLegacyOpenAICodexProviderPlan(
```

**Line:** 1339 | **Kind:** fn
