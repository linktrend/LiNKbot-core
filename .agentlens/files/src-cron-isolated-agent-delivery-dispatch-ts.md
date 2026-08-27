# src/cron/isolated-agent/delivery-dispatch.ts

[← Back to Module](../modules/src-cron-isolated-agent/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1584
- **Language:** TypeScript
- **Symbols:** 60
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | fn | normalizeDeliveryTarget | (private) | `function normalizeDeliveryTarget(channel: strin...` |
| 70 | type | NormalizedSilentReplyText | (private) | - |
| 75 | fn | normalizeSilentReplyText | (private) | `function normalizeSilentReplyText(text: string ...` |
| 104 | fn | resolveCronDeliveryBestEffort | pub | `export function resolveCronDeliveryBestEffort(j...` |
| 109 | type | SuccessfulDeliveryTarget | (private) | - |
| 111 | type | DispatchCronDeliveryParams | (private) | - |
| 146 | type | DirectCronTranscriptMirror | (private) | - |
| 159 | type | DispatchCronDeliveryState | (private) | - |
| 185 | type | CompletedDirectCronDelivery | (private) | - |
| 212 | fn | loadDeliveryOutboundRuntime | (private) | `async function loadDeliveryOutboundRuntime(): P...` |
| 218 | fn | loadOutboundSessionRuntime | (private) | `async function loadOutboundSessionRuntime(): Pr...` |
| 224 | fn | loadTranscriptRuntime | (private) | `async function loadTranscriptRuntime(): Promise<` |
| 230 | fn | loadDeliverySubagentRegistryRuntime | (private) | `async function loadDeliverySubagentRegistryRunt...` |
| 236 | fn | loadDeliveryLoggerRuntime | (private) | `async function loadDeliveryLoggerRuntime(): Pro...` |
| 240 | fn | loadSubagentFollowupRuntime | (private) | `async function loadSubagentFollowupRuntime(): P...` |
| 246 | fn | loadTtsRuntime | (private) | `async function loadTtsRuntime(): Promise<typeof...` |
| 250 | fn | logCronDeliveryWarn | (private) | `async function logCronDeliveryWarn(message: str...` |
| 255 | fn | logCronDeliveryError | (private) | `async function logCronDeliveryError(message: st...` |
| 261 | fn | cleanupDirectCronSession | pub | `export async function cleanupDirectCronSession(...` |
| 281 | fn | logCronDeliveryErrorDeferred | (private) | `function logCronDeliveryErrorDeferred(message: ...` |
| 287 | fn | cloneDeliveryResults | (private) | `function cloneDeliveryResults(` |
| 296 | fn | pruneCompletedDirectCronDeliveries | (private) | `function pruneCompletedDirectCronDeliveries(now...` |
| 320 | fn | resolveCronDeliveryScheduledAtMs | (private) | `function resolveCronDeliveryScheduledAtMs(param...` |
| 325 | fn | resolveCronDeliveryStartDelayMs | (private) | `function resolveCronDeliveryStartDelayMs(params...` |
| 329 | fn | isStaleCronDelivery | (private) | `function isStaleCronDelivery(params: { job: Cro...` |
| 333 | fn | rememberCompletedDirectCronDelivery | (private) | `function rememberCompletedDirectCronDelivery(` |
| 347 | fn | getCompletedDirectCronDelivery | (private) | `function getCompletedDirectCronDelivery(` |
| 359 | fn | maybeApplyTtsToCronPayloads | (private) | `async function maybeApplyTtsToCronPayloads(para...` |
| 393 | fn | buildDirectCronDeliveryIdempotencyKey | (private) | `function buildDirectCronDeliveryIdempotencyKey(...` |
| 410 | fn | shouldQueueCronAwareness | (private) | `function shouldQueueCronAwareness(params: {` |
| 424 | fn | resolveCronAwarenessMainSessionKey | (private) | `function resolveCronAwarenessMainSessionKey(par...` |
| 433 | fn | isSameSessionKey | (private) | `function isSameSessionKey(left: string | undefi...` |
| 439 | fn | resolveCronAwarenessText | (private) | `function resolveCronAwarenessText(params: {` |
| 458 | fn | formatTargetCronDeliveryAwarenessText | (private) | `function formatTargetCronDeliveryAwarenessText(...` |
| 462 | fn | formatTargetCronDeliveryFailureAwarenessText | (private) | `function formatTargetCronDeliveryFailureAwarene...` |
| 485 | fn | queueCronAwarenessSystemEvent | (private) | `async function queueCronAwarenessSystemEvent(pa...` |
| 524 | fn | isCustomCronSessionTarget | (private) | `function isCustomCronSessionTarget(sessionTarge...` |
| 528 | fn | buildDirectCronTranscriptMirrorPayloads | (private) | `function buildDirectCronTranscriptMirrorPayloads(` |
| 556 | fn | resolveDirectCronTranscriptMirrorText | (private) | `function resolveDirectCronTranscriptMirrorText(...` |
| 571 | fn | pickDirectCronMirrorPayloadText | (private) | `function pickDirectCronMirrorPayloadText(payloa...` |
| 575 | fn | isTtsAudioMirrorOnly | (private) | `function isTtsAudioMirrorOnly(params: {` |
| 585 | fn | projectDeliveredDirectCronPayloadsForMirror | (private) | `function projectDeliveredDirectCronPayloadsForM...` |
| 608 | fn | canonicalizeDirectCronRouteSessionKey | (private) | `function canonicalizeDirectCronRouteSessionKey(...` |
| 639 | fn | resolveCronDeliveryRouteSessionKey | (private) | `async function resolveCronDeliveryRouteSessionK...` |
| 700 | fn | resolveDirectCronDeliverySessionKey | (private) | `async function resolveDirectCronDeliverySession...` |
| 723 | fn | resolveCronMessageToolAwarenessTarget | (private) | `function resolveCronMessageToolAwarenessTarget(...` |
| 772 | fn | queueCronMessageToolDeliveryAwareness | pub | `export async function queueCronMessageToolDeliv...` |
| 826 | fn | appendDirectCronDeliveryTranscriptMirror | (private) | `async function appendDirectCronDeliveryTranscri...` |
| 848 | fn | appendAdmittedDirectCronDeliveryTranscriptMirror | (private) | `async function appendAdmittedDirectCronDelivery...` |
| 918 | fn | resetCompletedDirectCronDeliveriesForTests | (private) | `function resetCompletedDirectCronDeliveriesForT...` |
| 923 | fn | getCompletedDirectCronDeliveriesCountForTests | (private) | `function getCompletedDirectCronDeliveriesCountF...` |
| 935 | fn | summarizeDirectCronDeliveryError | (private) | `function summarizeDirectCronDeliveryError(error...` |
| 949 | fn | isTransientDirectCronDeliveryError | (private) | `function isTransientDirectCronDeliveryError(err...` |
| 959 | fn | resolveDirectCronRetryDelaysMs | (private) | `function resolveDirectCronRetryDelaysMs(): read...` |
| 965 | fn | retryTransientDirectCronDelivery | (private) | `async function retryTransientDirectCronDelivery...` |
| 975 | fn | runWithAbortCheck | (private) | `const runWithAbortCheck = async () => {` |
| 1002 | fn | dispatchCronDelivery | pub | `export async function dispatchCronDelivery(` |
| 1028 | fn | formatDeliveryTargetError | (private) | `const formatDeliveryTargetError = (error: strin...` |
| 1032 | fn | failDeliveryTarget | (private) | `const failDeliveryTarget = (error: string) =>` |
| 1216 | fn | runDelivery | (private) | `const runDelivery = async () => {` |

## Public API

### `resolveCronDeliveryBestEffort`

```
export function resolveCronDeliveryBestEffort(job: CronJob): boolean {
```

**Line:** 104 | **Kind:** fn

### `cleanupDirectCronSession`

```
export async function cleanupDirectCronSession(params: {
```

**Line:** 261 | **Kind:** fn

### `queueCronMessageToolDeliveryAwareness`

```
export async function queueCronMessageToolDeliveryAwareness(params: {
```

**Line:** 772 | **Kind:** fn

### `dispatchCronDelivery`

```
export async function dispatchCronDelivery(
```

**Line:** 1002 | **Kind:** fn
