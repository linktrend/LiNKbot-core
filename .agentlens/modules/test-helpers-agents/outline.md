# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## test/helpers/agents/happy-path-prompt-snapshots.ts (1053 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | CodexDynamicToolFunctionSpec | (private) |
| 87 | type | CodexDynamicToolNamespaceSpec | (private) |
| 93 | type | CodexDynamicToolSpec | (private) |
| 95 | fn | flattenCodexDynamicToolSpecs | (private) |
| 101 | type | CodexPromptSnapshotApi | (private) |
| 133 | type | PromptSnapshotFile | (private) |
| 138 | type | PromptScenario | (private) |
| 157 | fn | loadCodexPromptSnapshotApi | (private) |
| 161 | type | ScenarioChannelPluginFixture | (private) |
| 176 | fn | scenarioChannelPluginFixture | (private) |
| 186 | fn | loadScenarioChannelPluginFixture | (private) |
| 213 | fn | withScenarioChannelRegistry | (private) |
| 362 | fn | stableJsonValue | (private) |
| 377 | fn | stableJson | (private) |
| 381 | fn | markdownFence | (private) |
| 391 | fn | readFixture | (private) |
| 395 | fn | approximateTokens | (private) |
| 399 | fn | textStats | (private) |
| 406 | fn | createPrompt | (private) |
| 421 | fn | createExtraSystemPrompt | (private) |
| 436 | fn | createAttempt | (private) |
| 479 | fn | createDynamicTools | (private) |
| 543 | fn | createScenarioDynamicTools | (private) |
| 556 | fn | createScenarios | (private) |
| 700 | fn | selectedThreadStartParams | (private) |
| 712 | fn | selectedThreadResumeParams | (private) |
| 719 | fn | selectedTurnStartParams | (private) |
| 738 | fn | renderModelBoundPromptLayers | (private) |
| 858 | fn | readCodexTurnInputText | (private) |
| 872 | fn | buildCodexOpenClawRuntimeContext | (private) |
| 883 | fn | prependCodexOpenClawRuntimeContext | (private) |
| 887 | fn | renderScenarioSnapshot | (private) |
| 980 | fn | renderReadme | (private) |
| 1032 | fn | createHappyPathPromptSnapshotFiles | pub |

## test/helpers/agents/prompt-composition-scenarios.ts (798 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | PromptScenarioTurn | (private) |
| 42 | type | PromptScenario | pub |
| 49 | fn | buildCommonSystemParams | (private) |
| 82 | fn | buildSystemPrompt | (private) |
| 110 | fn | buildAutoReplyBody | (private) |
| 116 | fn | buildAutoReplyModelPrompt | (private) |
| 133 | fn | readContextFiles | (private) |
| 142 | fn | buildAutoReplySystemPrompt | (private) |
| 182 | fn | buildToolRichSystemPrompt | (private) |
| 219 | fn | createDirectScenario | (private) |
| 331 | fn | createGroupScenario | (private) |
| 445 | fn | createDiscordBoundaryScenario | (private) |
| 500 | fn | createToolRichScenario | (private) |
| 565 | fn | createBootstrapWarningScenario | (private) |
| 652 | fn | createMaintenanceScenario | (private) |
| 744 | fn | createWorkspaceWithPromptCompositionFiles | (private) |
| 773 | fn | createPromptCompositionScenarios | pub |
