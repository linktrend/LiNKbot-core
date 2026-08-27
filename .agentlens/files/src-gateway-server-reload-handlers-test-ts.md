# src/gateway/server-reload-handlers.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7078
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 71 | type | ReloadHandlerParams | (private) | - |
| 72 | type | ManagedReloaderParams | (private) | - |
| 74 | fn | waitForFast | (private) | `function waitForFast<T>(` |
| 91 | fn | createGatewayReloadHandlers | (private) | `function createGatewayReloadHandlers(` |
| 110 | fn | startManagedGatewayConfigReloader | (private) | `function startManagedGatewayConfigReloader(` |
| 141 | type | GmailWatcherRestartParams | (private) | - |
| 153 | type | StartGmailWatcherWithLogs | (private) | - |
| 154 | type | StopGmailWatcher | (private) | - |
| 324 | fn | createTestCronReconciliation | (private) | `function createTestCronReconciliation() {` |
| 333 | fn | createCronRestartPlan | (private) | `function createCronRestartPlan(): GatewayReload...` |
| 351 | fn | createHotTailPlan | (private) | `function createHotTailPlan(overrides: Partial<G...` |
| 370 | fn | createDeferredVoid | (private) | `function createDeferredVoid() {` |
| 378 | fn | createReloadHandlersForTest | (private) | `function createReloadHandlersForTest(` |
| 458 | fn | createManagedRestartSequenceHarness | (private) | `function createManagedRestartSequenceHarness(` |
| 548 | fn | nextPromotion | (private) | `const nextPromotion = () =>` |
| 552 | fn | nextReloadError | (private) | `const nextReloadError = () =>` |
| 680 | fn | writeConfig | (private) | `const writeConfig = (` |
| 726 | fn | withGatewayRestartSignal | (private) | `async function withGatewayRestartSignal(` |
| 746 | fn | testGatewayRestartListener | (private) | `const testGatewayRestartListener = () => {};` |
| 785 | fn | runManagedOwnershipScenario | (private) | `async function runManagedOwnershipScenario(para...` |
| 1591 | fn | isCurrent | (private) | `const isCurrent = () => pendingConfig === null;` |
| 2909 | fn | createChannelReloadPlan | (private) | `function createChannelReloadPlan(channels: Chan...` |
| 2927 | fn | withChannelReloadsEnabled | (private) | `async function withChannelReloadsEnabled(run: (...` |
| 2948 | fn | createAccountReloadPlan | (private) | `function createAccountReloadPlan(` |
| 2960 | fn | withDiscordAccountResolver | (private) | `async function withDiscordAccountResolver(` |
| 2985 | fn | withDiscordAccounts | (private) | `async function withDiscordAccounts(accountIds: ...` |
| 3525 | fn | createGmailReloadPlan | (private) | `function createGmailReloadPlan(): GatewayReload...` |
| 3543 | fn | createGmailConfig | (private) | `function createGmailConfig(account: string): Op...` |
| 4157 | fn | releasePreparation | (private) | `let releasePreparation = () => {};` |
| 4330 | fn | writeConfig | (private) | `const writeConfig = (config: OpenClawConfig, ha...` |
| 4454 | fn | acceptTerminalConfig | (private) | `const acceptTerminalConfig = (options: { retire...` |
| 4877 | fn | releaseEmissionPreflight | (private) | `let releaseEmissionPreflight = () => {};` |
| 5092 | type | ReloadOutcome | (private) | - |
| 5210 | type | GmailRestartOutcome | (private) | - |
| 6578 | fn | createTestHandlers | (private) | `const createTestHandlers = (` |
