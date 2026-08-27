# test/helpers/agents/happy-path-prompt-snapshots.ts

[← Back to Module](../modules/test-helpers-agents/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1053
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 80 | type | CodexDynamicToolFunctionSpec | (private) | - |
| 87 | type | CodexDynamicToolNamespaceSpec | (private) | - |
| 93 | type | CodexDynamicToolSpec | (private) | - |
| 95 | fn | flattenCodexDynamicToolSpecs | (private) | `function flattenCodexDynamicToolSpecs(` |
| 101 | type | CodexPromptSnapshotApi | (private) | - |
| 133 | type | PromptSnapshotFile | (private) | - |
| 138 | type | PromptScenario | (private) | - |
| 157 | fn | loadCodexPromptSnapshotApi | (private) | `async function loadCodexPromptSnapshotApi(): Pr...` |
| 161 | type | ScenarioChannelPluginFixture | (private) | - |
| 176 | fn | scenarioChannelPluginFixture | (private) | `function scenarioChannelPluginFixture(pluginId:...` |
| 186 | fn | loadScenarioChannelPluginFixture | (private) | `async function loadScenarioChannelPluginFixture(` |
| 213 | fn | withScenarioChannelRegistry | (private) | `function withScenarioChannelRegistry<T>(fixture...` |
| 362 | fn | stableJsonValue | (private) | `function stableJsonValue(value: unknown): unkno...` |
| 377 | fn | stableJson | (private) | `function stableJson(value: unknown): string {` |
| 381 | fn | markdownFence | (private) | `function markdownFence(info: string, value: str...` |
| 391 | fn | readFixture | (private) | `function readFixture(pathFromRepoRoot: string):...` |
| 395 | fn | approximateTokens | (private) | `function approximateTokens(value: string): numb...` |
| 399 | fn | textStats | (private) | `function textStats(value: string): { chars: num...` |
| 406 | fn | createPrompt | (private) | `function createPrompt(ctx: TemplateContext, bod...` |
| 421 | fn | createExtraSystemPrompt | (private) | `function createExtraSystemPrompt(params: {` |
| 436 | fn | createAttempt | (private) | `function createAttempt(params: {` |
| 479 | fn | createDynamicTools | (private) | `function createDynamicTools(params: {` |
| 543 | fn | createScenarioDynamicTools | (private) | `async function createScenarioDynamicTools(param...` |
| 556 | fn | createScenarios | (private) | `async function createScenarios(codexApi: CodexP...` |
| 700 | fn | selectedThreadStartParams | (private) | `function selectedThreadStartParams(value: Recor...` |
| 712 | fn | selectedThreadResumeParams | (private) | `function selectedThreadResumeParams(value: Reco...` |
| 719 | fn | selectedTurnStartParams | (private) | `function selectedTurnStartParams(value: Record<...` |
| 738 | fn | renderModelBoundPromptLayers | (private) | `function renderModelBoundPromptLayers(params: {` |
| 858 | fn | readCodexTurnInputText | (private) | `function readCodexTurnInputText(turnStartParams...` |
| 872 | fn | buildCodexOpenClawRuntimeContext | (private) | `function buildCodexOpenClawRuntimeContext(): st...` |
| 883 | fn | prependCodexOpenClawRuntimeContext | (private) | `function prependCodexOpenClawRuntimeContext(pro...` |
| 887 | fn | renderScenarioSnapshot | (private) | `function renderScenarioSnapshot(` |
| 980 | fn | renderReadme | (private) | `function renderReadme(scenarios: PromptScenario...` |
| 1032 | fn | createHappyPathPromptSnapshotFiles | pub | `export async function createHappyPathPromptSnap...` |

## Public API

### `createHappyPathPromptSnapshotFiles`

```
export async function createHappyPathPromptSnapshotFiles(): Promise<PromptSnapshotFile[]> {
```

**Line:** 1032 | **Kind:** fn
