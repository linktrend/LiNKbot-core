# src/agents/subagent-announce-delivery.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2376
- **Language:** TypeScript
- **Symbols:** 73
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 95 | type | SubagentAnnounceDeliveryDeps | (private) | - |
| 134 | fn | resolveQueueEmbeddedAgentMessageOutcome | (private) | `async function resolveQueueEmbeddedAgentMessage...` |
| 146 | fn | runAnnounceAgentCall | (private) | `async function runAnnounceAgentCall(params: {` |
| 181 | fn | formatQueueWakeFailureError | (private) | `function formatQueueWakeFailureError(` |
| 189 | fn | resolveBoundConversationOrigin | (private) | `function resolveBoundConversationOrigin(params: {` |
| 229 | fn | resolveRequesterSessionActivity | (private) | `function resolveRequesterSessionActivity(reques...` |
| 242 | fn | resolveDirectAnnounceTransientRetryDelaysMs | (private) | `function resolveDirectAnnounceTransientRetryDel...` |
| 252 | fn | resolveCompactionSteerRetryDelaysMs | (private) | `function resolveCompactionSteerRetryDelaysMs() {` |
| 261 | fn | resolveActiveWakeWithRetries | (private) | `async function resolveActiveWakeWithRetries(` |
| 360 | fn | resolveSubagentAnnounceTimeoutMs | pub | `export function resolveSubagentAnnounceTimeoutM...` |
| 365 | fn | isInternalAnnounceRequesterSession | pub | `export function isInternalAnnounceRequesterSess...` |
| 369 | fn | summarizeDeliveryError | (private) | `function summarizeDeliveryError(error: unknown)...` |
| 416 | fn | isSessionFileChangedAnnounceError | (private) | `function isSessionFileChangedAnnounceError(mess...` |
| 427 | type | AnnounceErrorChainKey | (private) | - |
| 428 | type | AnnounceErrorRecord | (private) | - |
| 433 | fn | isAnnounceErrorRecord | (private) | `function isAnnounceErrorRecord(error: unknown):...` |
| 437 | fn | hasAnnounceErrorMatch | (private) | `function hasAnnounceErrorMatch(` |
| 456 | fn | hasSessionFileChangedAnnounceError | (private) | `function hasSessionFileChangedAnnounceError(err...` |
| 462 | fn | isTransientAnnounceDeliveryError | (private) | `function isTransientAnnounceDeliveryError(error...` |
| 497 | fn | isPermanentAnnounceDeliveryError | (private) | `function isPermanentAnnounceDeliveryError(error...` |
| 505 | fn | isIncompleteAnnounceAgentResultError | (private) | `function isIncompleteAnnounceAgentResultError(e...` |
| 510 | fn | isSessionWriteLockAnnounceAgentError | (private) | `function isSessionWriteLockAnnounceAgentError(e...` |
| 521 | fn | isAnnounceAgentPreDispatchError | (private) | `function isAnnounceAgentPreDispatchError(error:...` |
| 530 | fn | hasDirectAnnounceSendEvidence | (private) | `function hasDirectAnnounceSendEvidence(error: u...` |
| 540 | fn | hasAnnounceSendEvidence | (private) | `function hasAnnounceSendEvidence(error: unknown...` |
| 544 | fn | waitForAnnounceRetryDelay | (private) | `async function waitForAnnounceRetryDelay(ms: nu...` |
| 562 | fn | onAbort | (private) | `const onAbort = () => {` |
| 571 | fn | readCronRunContinuation | (private) | `function readCronRunContinuation(params: {` |
| 588 | fn | cronRunContinuationLostError | (private) | `function cronRunContinuationLostError(message: ...` |
| 596 | fn | isCronRunContinuationLostError | (private) | `function isCronRunContinuationLostError(error: ...` |
| 613 | fn | runAnnounceDeliveryWithRetry | pub | `export async function runAnnounceDeliveryWithRe...` |
| 643 | fn | resolveSubagentCompletionOrigin | pub | `export async function resolveSubagentCompletion...` |
| 736 | fn | loadRequesterSessionEntry | pub | `export function loadRequesterSessionEntry(reque...` |
| 749 | fn | loadSessionEntryByKey | pub | `export function loadSessionEntryByKey(sessionKe...` |
| 760 | fn | maybeSteerSubagentAnnounce | (private) | `async function maybeSteerSubagentAnnounce(param...` |
| 819 | fn | hasVisibleGatewayAgentPayload | (private) | `function hasVisibleGatewayAgentPayload(response...` |
| 826 | fn | hasVisibleNonSilentGatewayAgentPayload | (private) | `function hasVisibleNonSilentGatewayAgentPayload...` |
| 838 | fn | isVisibleNonSilentGatewayAgentPayload | (private) | `function isVisibleNonSilentGatewayAgentPayload(...` |
| 866 | fn | hasGatewayAgentMessagingToolDeliveryEvidence | (private) | `function hasGatewayAgentMessagingToolDeliveryEv...` |
| 871 | fn | hasGatewayAgentCompletionSideEffectEvidence | (private) | `function hasGatewayAgentCompletionSideEffectEvi...` |
| 884 | fn | hasIntentionalSilentGatewayAgentPayload | (private) | `function hasIntentionalSilentGatewayAgentPayloa...` |
| 892 | fn | isIntentionalSilentGatewayAgentPayload | (private) | `function isIntentionalSilentGatewayAgentPayload...` |
| 919 | fn | hasPositiveDeliveryCount | (private) | `function hasPositiveDeliveryCount(value: unknow...` |
| 923 | fn | requiresAgentMediatedCompletionDelivery | (private) | `function requiresAgentMediatedCompletionDeliver...` |
| 930 | fn | collectExpectedMediaFromInternalEvents | (private) | `function collectExpectedMediaFromInternalEvents(` |
| 955 | fn | getGatewayAgentCommandDeliveryFailure | (private) | `function getGatewayAgentCommandDeliveryFailure(...` |
| 960 | fn | isGatewayAgentRunPending | (private) | `function isGatewayAgentRunPending(response: unk...` |
| 968 | fn | resolveGeneratedMediaCompletionLabel | (private) | `function resolveGeneratedMediaCompletionLabel(p...` |
| 998 | fn | resolveGeneratedMediaFailureNotice | (private) | `function resolveGeneratedMediaFailureNotice(par...` |
| 1016 | fn | deliverGeneratedMediaCompletionDirect | (private) | `async function deliverGeneratedMediaCompletionD...` |
| 1100 | fn | inferDeliveryTargetChatType | (private) | `function inferDeliveryTargetChatType(target: {` |
| 1131 | fn | isDirectMessageDeliveryTarget | (private) | `function isDirectMessageDeliveryTarget(` |
| 1145 | fn | resolveTextCompletionDirectFallback | (private) | `function resolveTextCompletionDirectFallback(ev...` |
| 1162 | fn | hasFailedSubagentNoOutputCompletion | (private) | `function hasFailedSubagentNoOutputCompletion(ev...` |
| 1174 | fn | deliverTextCompletionDirect | (private) | `async function deliverTextCompletionDirect(para...` |
| 1230 | fn | resolveGeneratedMediaDirectFallbackUrls | (private) | `function resolveGeneratedMediaDirectFallbackUrl...` |
| 1263 | fn | collectAutomaticCompletionDeliveredMediaUrls | (private) | `function collectAutomaticCompletionDeliveredMed...` |
| 1276 | fn | addUrls | (private) | `const addUrls = (values: Iterable<string>) => {` |
| 1304 | fn | collectPayloadMediaUrls | (private) | `function collectPayloadMediaUrls(` |
| 1312 | fn | getPayloadDeliveryStatusRecord | (private) | `function getPayloadDeliveryStatusRecord(` |
| 1320 | fn | hasPayloadDeliveryOutcomes | (private) | `function hasPayloadDeliveryOutcomes(` |
| 1326 | fn | hasPayloadOutcomeSendEvidence | (private) | `function hasPayloadOutcomeSendEvidence(response...` |
| 1343 | fn | hasAmbiguousPayloadSendBeforeError | (private) | `function hasAmbiguousPayloadSendBeforeError(res...` |
| 1358 | fn | hasIncompletePartialPayloadOutcomeEvidence | (private) | `function hasIncompletePartialPayloadOutcomeEvid...` |
| 1396 | fn | hasSuppressedPayloadDeliveryStatus | (private) | `function hasSuppressedPayloadDeliveryStatus(` |
| 1405 | fn | collectPayloadOutcomeDeliveredMediaUrls | (private) | `function collectPayloadOutcomeDeliveredMediaUrls(` |
| 1443 | fn | collectMessagingToolDeliveredMediaUrlsForTarget | (private) | `function collectMessagingToolDeliveredMediaUrls...` |
| 1501 | fn | stripNonDeliverableChannelForCompletionOrigin | (private) | `function stripNonDeliverableChannelForCompletio...` |
| 1516 | fn | resolveCompletionDeliveryOrigins | (private) | `function resolveCompletionDeliveryOrigins(param...` |
| 1540 | fn | resolveGeneratedMediaSessionDeliveryRoute | (private) | `function resolveGeneratedMediaSessionDeliveryRo...` |
| 1584 | fn | sendSubagentAnnounceDirectly | (private) | `async function sendSubagentAnnounceDirectly(par...` |
| 1693 | fn | tryGeneratedMediaDirectDelivery | (private) | `const tryGeneratedMediaDirectDelivery = async (` |
| 2167 | fn | deliverSubagentAnnouncement | pub | `export async function deliverSubagentAnnounceme...` |

## Public API

### `resolveSubagentAnnounceTimeoutMs`

```
export function resolveSubagentAnnounceTimeoutMs(cfg: OpenClawConfig): number {
```

**Line:** 360 | **Kind:** fn

### `isInternalAnnounceRequesterSession`

```
export function isInternalAnnounceRequesterSession(sessionKey: string | undefined): boolean {
```

**Line:** 365 | **Kind:** fn

### `runAnnounceDeliveryWithRetry`

```
export async function runAnnounceDeliveryWithRetry<T>(params: {
```

**Line:** 613 | **Kind:** fn

### `resolveSubagentCompletionOrigin`

```
export async function resolveSubagentCompletionOrigin(params: {
```

**Line:** 643 | **Kind:** fn

### `loadRequesterSessionEntry`

```
export function loadRequesterSessionEntry(requesterSessionKey: string) {
```

**Line:** 736 | **Kind:** fn

### `loadSessionEntryByKey`

```
export function loadSessionEntryByKey(sessionKey: string) {
```

**Line:** 749 | **Kind:** fn

### `deliverSubagentAnnouncement`

```
export async function deliverSubagentAnnouncement(params: {
```

**Line:** 2167 | **Kind:** fn

## Memory Markers

### 🔴 `RULE` (line 310)

> must not make an already-running automatic parent unreachable.
