# src/commands/onboard-channels.e2e.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1276
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | fn | createPrompter | (private) | `function createPrompter(overrides: Partial<Wiza...` |
| 36 | fn | createUnexpectedPromptGuards | (private) | `function createUnexpectedPromptGuards() {` |
| 47 | type | MockWithCalls | (private) | - |
| 51 | fn | callArgAt | (private) | `function callArgAt(mock: MockWithCalls, index: ...` |
| 59 | fn | hasCallWithFields | (private) | `function hasCallWithFields(mock: MockWithCalls,...` |
| 74 | fn | expectCalledWithFields | (private) | `function expectCalledWithFields(mock: MockWithC...` |
| 78 | fn | expectCalledWithMessage | (private) | `function expectCalledWithMessage(mock: MockWith...` |
| 82 | fn | expectCalledWithMessageContaining | (private) | `function expectCalledWithMessageContaining(mock...` |
| 98 | type | SetupChannels | (private) | - |
| 101 | type | SetupChannelsOptions | (private) | - |
| 103 | fn | runSetupChannels | (private) | `function runSetupChannels(` |
| 114 | fn | createQuickstartTelegramSelect | (private) | `function createQuickstartTelegramSelect(options...` |
| 132 | fn | createUnexpectedQuickstartPrompter | (private) | `function createUnexpectedQuickstartPrompter(sel...` |
| 141 | fn | createTelegramCfg | (private) | `function createTelegramCfg(botToken: string, en...` |
| 152 | fn | createMSTeamsCatalogEntry | (private) | `function createMSTeamsCatalogEntry(): ChannelPl...` |
| 169 | fn | setMinimalOnboardingRegistryForTests | (private) | `function setMinimalOnboardingRegistryForTests()...` |
| 293 | type | ChannelSetupWizardAdapterPatch | (private) | - |
| 304 | type | PatchedSetupAdapterFields | (private) | - |
| 312 | fn | createMSTeamsPluginRegistryEntry | (private) | `function createMSTeamsPluginRegistryEntry(param...` |
| 344 | fn | mockMSTeamsRegistrySnapshot | (private) | `function mockMSTeamsRegistrySnapshot(params?: {...` |
| 360 | fn | patchTelegramAdapter | (private) | `function patchTelegramAdapter(overrides: Channe...` |
| 418 | fn | createUnexpectedConfigureCall | (private) | `function createUnexpectedConfigureCall(message:...` |
| 424 | fn | runConfiguredTelegramSetup | (private) | `async function runConfiguredTelegramSetup(param...` |
| 456 | fn | runQuickstartTelegramSetupWithInteractive | (private) | `async function runQuickstartTelegramSetupWithIn...` |
| 497 | fn | listRawChannelPluginCatalogEntries | (private) | `const listRawChannelPluginCatalogEntries = (` |
