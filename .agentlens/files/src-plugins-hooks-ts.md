# src/plugins/hooks.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1627
- **Language:** TypeScript
- **Symbols:** 64
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 98 | type | HookRunnerLogger | (private) | - |
| 104 | type | HookFailurePolicy | (private) | - |
| 105 | type | VoidHookRunOptions | pub | - |
| 109 | type | BeforeAgentFinalizeRetry | (private) | - |
| 110 | type | BeforeAgentFinalizeResultWithRetryCandidates | (private) | - |
| 114 | type | HookRunnerOptions | (private) | - |
| 177 | type | PluginTargetedInboundClaimOutcome | (private) | - |
| 196 | type | SyncHookName | (private) | - |
| 205 | fn | getHooksForName | (private) | `function getHooksForName<K extends PluginHookNa...` |
| 214 | fn | getHooksForNameAndPlugin | (private) | `function getHooksForNameAndPlugin<K extends Plu...` |
| 225 | fn | createHookRunner | pub | `export function createHookRunner(` |
| 535 | fn | runVoidHook | (private) | `async function runVoidHook<K extends PluginHook...` |
| 571 | fn | runModifyingHook | (private) | `async function runModifyingHook<K extends Plugi...` |
| 622 | fn | runClaimingHook | (private) | `async function runClaimingHook<K extends Plugin...` |
| 637 | fn | runClaimingHookForPlugin | (private) | `async function runClaimingHookForPlugin<` |
| 658 | fn | runClaimingHooksList | (private) | `async function runClaimingHooksList<` |
| 685 | fn | runClaimingHookForPluginOutcome | (private) | `async function runClaimingHookForPluginOutcome<` |
| 744 | fn | withAgentRunId | (private) | `function withAgentRunId<TEvent extends { runId?...` |
| 758 | fn | runBeforeModelResolve | (private) | `async function runBeforeModelResolve(` |
| 774 | fn | runBeforePromptBuild | (private) | `async function runBeforePromptBuild(` |
| 786 | fn | runAgentTurnPrepare | (private) | `async function runAgentTurnPrepare(` |
| 803 | fn | runBeforeAgentReply | (private) | `async function runBeforeAgentReply(` |
| 819 | fn | runModelCallStarted | (private) | `async function runModelCallStarted(` |
| 831 | fn | runModelCallEnded | (private) | `async function runModelCallEnded(` |
| 843 | fn | runAgentEnd | (private) | `async function runAgentEnd(` |
| 856 | fn | runLlmInput | (private) | `async function runLlmInput(event: PluginHookLlm...` |
| 865 | fn | runLlmOutput | (private) | `async function runLlmOutput(event: PluginHookLl...` |
| 874 | fn | runBeforeAgentFinalize | (private) | `async function runBeforeAgentFinalize(` |
| 889 | fn | runBeforeCompaction | (private) | `async function runBeforeCompaction(` |
| 899 | fn | runAfterCompaction | (private) | `async function runAfterCompaction(` |
| 911 | fn | runBeforeReset | (private) | `async function runBeforeReset(` |
| 926 | fn | runInboundClaim | (private) | `async function runInboundClaim(` |
| 937 | fn | runInboundClaimForPlugin | (private) | `async function runInboundClaimForPlugin(` |
| 950 | fn | runInboundClaimForPluginOutcome | (private) | `async function runInboundClaimForPluginOutcome(` |
| 967 | fn | runMessageReceived | (private) | `async function runMessageReceived(` |
| 978 | fn | runChannelPairingRequested | (private) | `async function runChannelPairingRequested(` |
| 990 | fn | runBeforeDispatch | (private) | `async function runBeforeDispatch(` |
| 1006 | fn | runReplyDispatch | (private) | `async function runReplyDispatch(` |
| 1022 | fn | runReplyPayloadSending | (private) | `async function runReplyPayloadSending(` |
| 1082 | fn | runMessageSending | (private) | `async function runMessageSending(` |
| 1112 | fn | runMessageSent | (private) | `async function runMessageSent(` |
| 1125 | fn | runBeforeAgentRun | (private) | `async function runBeforeAgentRun(` |
| 1178 | fn | runBeforeToolCall | (private) | `async function runBeforeToolCall(` |
| 1217 | fn | runAfterToolCall | (private) | `async function runAfterToolCall(` |
| 1234 | fn | runToolResultPersist | (private) | `function runToolResultPersist(` |
| 1294 | fn | runBeforeMessageWrite | (private) | `function runBeforeMessageWrite(` |
| 1358 | fn | runSessionStart | (private) | `async function runSessionStart(` |
| 1369 | fn | runSessionEnd | (private) | `async function runSessionEnd(` |
| 1381 | fn | runSubagentSpawning | (private) | `async function runSubagentSpawning(` |
| 1397 | fn | runSubagentDeliveryTarget | (private) | `async function runSubagentDeliveryTarget(` |
| 1413 | fn | runSubagentSpawned | (private) | `async function runSubagentSpawned(` |
| 1421 | fn | runSubagentProgress | (private) | `async function runSubagentProgress(` |
| 1432 | fn | runSubagentEnded | (private) | `async function runSubagentEnded(` |
| 1447 | fn | runGatewayStart | (private) | `async function runGatewayStart(` |
| 1458 | fn | runGatewayStop | (private) | `async function runGatewayStop(` |
| 1465 | fn | runHeartbeatPromptContribution | (private) | `async function runHeartbeatPromptContribution(` |
| 1478 | fn | runCronReconciled | (private) | `async function runCronReconciled(` |
| 1488 | fn | runCronChanged | (private) | `async function runCronChanged(` |
| 1504 | fn | runBeforeInstall | (private) | `async function runBeforeInstall(` |
| 1530 | fn | runResolveExecEnv | (private) | `async function runResolveExecEnv(` |
| 1549 | fn | hasHooks | (private) | `function hasHooks(hookName: PluginHookName): bo...` |
| 1556 | fn | getHookCount | (private) | `function getHookCount(hookName: PluginHookName)...` |
| 1617 | type | HookRunner | pub | - |
| 1619 | type | SubagentLifecycleHookRunner | pub | - |

## Public API

### `createHookRunner`

```
export function createHookRunner(
```

**Line:** 225 | **Kind:** fn
