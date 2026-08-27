# src/infra/heartbeat-runner.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2926
- **Language:** TypeScript
- **Symbols:** 69
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 189 | type | HeartbeatDeps | pub | - |
| 209 | fn | hasQueuedWorkInLaneSnapshots | (private) | `function hasQueuedWorkInLaneSnapshots(` |
| 230 | fn | laneBelongsToAgent | (private) | `function laneBelongsToAgent(lane: string, agent...` |
| 254 | fn | hasAgentOptInBusyLaneWork | (private) | `function hasAgentOptInBusyLaneWork(` |
| 261 | fn | hasActiveRunForAgent | (private) | `function hasActiveRunForAgent(agentId: string, ...` |
| 269 | fn | hasActiveRunForSession | (private) | `function hasActiveRunForSession(` |
| 277 | fn | resolveHeartbeatChannelPlugin | (private) | `function resolveHeartbeatChannelPlugin(channel:...` |
| 284 | fn | resolveHeartbeatTimeoutOverrideSeconds | (private) | `function resolveHeartbeatTimeoutOverrideSeconds...` |
| 312 | type | HeartbeatConfig | (private) | - |
| 313 | type | HeartbeatAgent | (private) | - |
| 320 | fn | canHeartbeatDeliverCommitments | (private) | `function canHeartbeatDeliverCommitments(heartbe...` |
| 324 | type | HeartbeatAgentState | (private) | - |
| 339 | type | ActiveHoursSchedule | (private) | - |
| 345 | fn | resolveActiveHoursSchedule | (private) | `function resolveActiveHoursSchedule(` |
| 360 | fn | activeHoursConfigMatch | (private) | `function activeHoursConfigMatch(a?: ActiveHours...` |
| 370 | type | HeartbeatRunner | pub | - |
| 375 | fn | resolveHeartbeatSchedulerSeed | (private) | `function resolveHeartbeatSchedulerSeed(explicit...` |
| 391 | fn | hasExplicitHeartbeatAgents | (private) | `function hasExplicitHeartbeatAgents(cfg: OpenCl...` |
| 396 | fn | resolveHeartbeatConfig | (private) | `function resolveHeartbeatConfig(` |
| 411 | fn | omitExplicitHeartbeatDestination | (private) | `function omitExplicitHeartbeatDestination(heart...` |
| 421 | fn | resolveHeartbeatForWake | (private) | `function resolveHeartbeatForWake(params: {` |
| 439 | fn | resolveHeartbeatAgents | (private) | `function resolveHeartbeatAgents(cfg: OpenClawCo...` |
| 460 | fn | resolveHeartbeatPromptRaw | (private) | `function resolveHeartbeatPromptRaw(cfg: OpenCla...` |
| 464 | fn | resolveHeartbeatPrompt | pub | `export function resolveHeartbeatPrompt(cfg: Ope...` |
| 468 | fn | resolveHeartbeatResponseToolPrompt | (private) | `function resolveHeartbeatResponseToolPrompt(cfg...` |
| 472 | fn | resolveHeartbeatModelRef | (private) | `function resolveHeartbeatModelRef(params: {` |
| 508 | fn | usesCodexHarness | (private) | `function usesCodexHarness(params: {` |
| 528 | fn | shouldUseHeartbeatResponseToolPrompt | (private) | `function shouldUseHeartbeatResponseToolPrompt(p...` |
| 550 | fn | resolveHeartbeatAckMaxChars | (private) | `function resolveHeartbeatAckMaxChars(cfg: OpenC...` |
| 559 | fn | isHeartbeatTypingEnabled | (private) | `function isHeartbeatTypingEnabled(params: { cfg...` |
| 568 | fn | resolveHeartbeatTypingIntervalSeconds | (private) | `function resolveHeartbeatTypingIntervalSeconds(...` |
| 574 | fn | resolveHeartbeatSession | (private) | `function resolveHeartbeatSession(` |
| 702 | fn | resolveIsolatedHeartbeatSessionKey | (private) | `function resolveIsolatedHeartbeatSessionKey(par...` |
| 745 | fn | resolveStaleHeartbeatIsolatedSessionKey | (private) | `function resolveStaleHeartbeatIsolatedSessionKe...` |
| 770 | fn | resolveHeartbeatReasoningPayloads | (private) | `function resolveHeartbeatReasoningPayloads(` |
| 800 | fn | restoreHeartbeatUpdatedAt | (private) | `async function restoreHeartbeatUpdatedAt(params: {` |
| 833 | fn | truncateHeartbeatPreview | (private) | `function truncateHeartbeatPreview(value: string...` |
| 837 | type | HeartbeatSkipReason | (private) | - |
| 839 | fn | buildCommitmentDeliveryKey | (private) | `function buildCommitmentDeliveryKey(commitment:...` |
| 849 | fn | selectCommitmentDeliveryBatch | (private) | `function selectCommitmentDeliveryBatch(commitme...` |
| 860 | fn | buildCommitmentHeartbeatPrompt | (private) | `function buildCommitmentHeartbeatPrompt(params: {` |
| 897 | type | HeartbeatPreflight | (private) | - |
| 909 | fn | resolveHeartbeatPreflight | (private) | `async function resolveHeartbeatPreflight(params: {` |
| 947 | fn | shouldInspectWakePendingEvents | (private) | `const shouldInspectWakePendingEvents = (() => {` |
| 1039 | type | HeartbeatPromptResolution | (private) | - |
| 1048 | fn | resolveDueHeartbeatTasks | (private) | `function resolveDueHeartbeatTasks(` |
| 1065 | fn | appendHeartbeatWorkspacePathHint | (private) | `function appendHeartbeatWorkspacePathHint(promp...` |
| 1077 | fn | stripHeartbeatTasksBlock | (private) | `function stripHeartbeatTasksBlock(content: stri...` |
| 1113 | fn | appendHeartbeatFileDirectives | (private) | `function appendHeartbeatFileDirectives(prompt: ...` |
| 1127 | fn | resolveHeartbeatRunPrompt | (private) | `function resolveHeartbeatRunPrompt(params: {` |
| 1258 | fn | selectSystemEventsConsumedByHeartbeat | (private) | `function selectSystemEventsConsumedByHeartbeat(...` |
| 1298 | fn | heartbeatRunOwnsPendingFinalDelivery | (private) | `function heartbeatRunOwnsPendingFinalDelivery(` |
| 1306 | fn | runHeartbeatOnce | pub | `export async function runHeartbeatOnce(opts: {` |
| 1731 | fn | updateTaskTimestamps | (private) | `const updateTaskTimestamps = async () => {` |
| 1770 | fn | clearSatisfiedPendingFinalDelivery | (private) | `const clearSatisfiedPendingFinalDelivery = asyn...` |
| 1797 | fn | consumeInspectedSystemEvents | (private) | `const consumeInspectedSystemEvents = () => {` |
| 1833 | fn | resolveHeartbeatResponsePrefix | (private) | `const resolveHeartbeatResponsePrefix = () =>` |
| 1838 | fn | resolveHeartbeatOkText | (private) | `const resolveHeartbeatOkText = () => {` |
| 1880 | fn | maybeSendHeartbeatOk | (private) | `const maybeSendHeartbeatOk = async () => {` |
| 2417 | fn | startHeartbeatRunner | pub | `export function startHeartbeatRunner(opts: {` |
| 2439 | fn | resolveNextDue | (private) | `const resolveNextDue = (` |
| 2458 | fn | seekActiveSlotForAgent | (private) | `const seekActiveSlotForAgent = (agent: Heartbea...` |
| 2468 | fn | advanceAgentSchedule | (private) | `const advanceAgentSchedule = (agent: HeartbeatA...` |
| 2482 | fn | advanceStaleScheduleAfterDeferral | (private) | `const advanceStaleScheduleAfterDeferral = (` |
| 2529 | fn | recordRunBookkeeping | (private) | `const recordRunBookkeeping = (agent: HeartbeatA...` |
| 2535 | fn | scheduleNext | (private) | `const scheduleNext = () => {` |
| 2577 | fn | updateConfig | (private) | `const updateConfig = (cfg: OpenClawConfig) => {` |
| 2770 | type | AgentWakeOutcome | (private) | - |
| 2910 | fn | cleanup | (private) | `const cleanup = () => {` |

## Public API

### `resolveHeartbeatPrompt`

```
export function resolveHeartbeatPrompt(cfg: OpenClawConfig, heartbeat?: HeartbeatConfig) {
```

**Line:** 464 | **Kind:** fn

### `runHeartbeatOnce`

```
export async function runHeartbeatOnce(opts: {
```

**Line:** 1306 | **Kind:** fn

### `startHeartbeatRunner`

```
export function startHeartbeatRunner(opts: {
```

**Line:** 2417 | **Kind:** fn
