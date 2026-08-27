# src/cli/plugins-cli.install.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3107
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | fn | cliInstallPath | (private) | `function cliInstallPath(pluginId: string): stri...` |
| 69 | fn | useProfileExtensionsDir | (private) | `function useProfileExtensionsDir(): string {` |
| 74 | fn | createEnabledPluginConfig | (private) | `function createEnabledPluginConfig(pluginId: st...` |
| 86 | fn | createEmptyPluginConfig | (private) | `function createEmptyPluginConfig(): OpenClawCon...` |
| 94 | fn | createClawHubInstallResult | (private) | `function createClawHubInstallResult(params: {` |
| 149 | fn | createNpmPluginInstallResult | (private) | `function createNpmPluginInstallResult(` |
| 165 | fn | createNpmPackPluginInstallResult | (private) | `function createNpmPackPluginInstallResult(` |
| 187 | fn | createGitPluginInstallResult | (private) | `function createGitPluginInstallResult(` |
| 205 | fn | mockClawHubPackageNotFound | (private) | `function mockClawHubPackageNotFound(packageName...` |
| 213 | fn | primeNpmPluginFallback | (private) | `function primeNpmPluginFallback(pluginId = "dem...` |
| 230 | fn | primeSuccessfulPluginPersistence | (private) | `function primeSuccessfulPluginPersistence(plugi...` |
| 245 | fn | createPathHookPackInstalledConfig | (private) | `function createPathHookPackInstalledConfig(tmpR...` |
| 261 | fn | createNpmHookPackInstalledConfig | (private) | `function createNpmHookPackInstalledConfig(): Op...` |
| 276 | fn | createHookPackInstallResult | (private) | `function createHookPackInstallResult(targetDir:...` |
| 294 | fn | primeHookPackNpmFallback | (private) | `function primeHookPackNpmFallback() {` |
| 318 | fn | primeBlockedNpmPluginInstall | (private) | `function primeBlockedNpmPluginInstall(params: {` |
| 332 | fn | primeHookPackPathFallback | (private) | `function primeHookPackPathFallback(params: {` |
| 349 | type | MockWithCalls | (private) | - |
| 355 | type | PluginInstallCall | (private) | - |
| 377 | type | PersistedInstallRecord | (private) | - |
| 379 | fn | mockCallArg | (private) | `function mockCallArg(mock: MockWithCalls, callI...` |
| 390 | fn | marketplaceInstallCall | (private) | `function marketplaceInstallCall(callIndex = 0):...` |
| 394 | fn | clawHubInstallCall | (private) | `function clawHubInstallCall(callIndex = 0): Plu...` |
| 398 | fn | npmInstallCall | (private) | `function npmInstallCall(callIndex = 0): PluginI...` |
| 402 | fn | npmPackInstallCall | (private) | `function npmPackInstallCall(callIndex = 0): Plu...` |
| 406 | fn | gitInstallCall | (private) | `function gitInstallCall(callIndex = 0): PluginI...` |
| 410 | fn | pathInstallCall | (private) | `function pathInstallCall(callIndex = 0): Plugin...` |
| 414 | fn | hookPathInstallCall | (private) | `function hookPathInstallCall(callIndex = 0): Pl...` |
| 418 | fn | hookNpmInstallCall | (private) | `function hookNpmInstallCall(callIndex = 0): Plu...` |
| 422 | fn | persistedInstallRecords | (private) | `function persistedInstallRecords(callIndex = 0)...` |
| 429 | fn | persistedInstallRecord | (private) | `function persistedInstallRecord(pluginId: strin...` |
| 437 | fn | replaceConfigCall | (private) | `function replaceConfigCall(callIndex = 0): { ba...` |
| 444 | fn | recordHookInstallCall | (private) | `function recordHookInstallCall(callIndex = 0): ...` |
| 448 | fn | runtimeLogsContain | (private) | `function runtimeLogsContain(fragment: string): ...` |
| 452 | fn | setTty | (private) | `function setTty(value: boolean): void {` |
| 463 | fn | restoreTty | (private) | `function restoreTty(): void {` |
| 478 | fn | withNonClawHubInstallAcknowledgement | (private) | `function withNonClawHubInstallAcknowledgement(a...` |
| 485 | fn | runAcknowledgedPluginsInstallCommand | (private) | `async function runAcknowledgedPluginsInstallCom...` |
| 489 | fn | primeBlockedPluginConfigMutation | (private) | `function primeBlockedPluginConfigMutation(` |
| 537 | fn | primeNestedPluginConfigMutation | (private) | `function primeNestedPluginConfigMutation(tempRo...` |
| 574 | fn | primeBlockedRootConfigMutation | (private) | `function primeBlockedRootConfigMutation(config ...` |
| 601 | fn | primeBlockedHookConfigMutation | (private) | `function primeBlockedHookConfigMutation(config ...` |
