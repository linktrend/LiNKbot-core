# src/infra/outbound/delivery-queue-recovery.ts

[← Back to Module](../modules/src-infra-outbound/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1214
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | RecoverySummary | (private) | - |
| 73 | type | DeliverFn | pub | - |
| 87 | interface | RecoveryLogger | pub | - |
| 93 | interface | PendingDeliveryDrainDecision | (private) | - |
| 122 | fn | resolveMaxRetries | (private) | `function resolveMaxRetries(entry: QueuedDeliver...` |
| 129 | fn | resolveAttemptCount | (private) | `function resolveAttemptCount(entry: QueuedDeliv...` |
| 136 | fn | resolveRecoveryDeadlineMs | (private) | `function resolveRecoveryDeadlineMs(maxRecoveryM...` |
| 147 | fn | createEmptyRecoverySummary | (private) | `function createEmptyRecoverySummary(): Recovery...` |
| 156 | fn | emitQueuedAuditTerminals | (private) | `function emitQueuedAuditTerminals(` |
| 168 | fn | needsUnknownSendReconciliation | (private) | `function needsUnknownSendReconciliation(entry: ...` |
| 174 | fn | queuedDeadLetterAuditTerminals | (private) | `function queuedDeadLetterAuditTerminals(entry: ...` |
| 187 | fn | queuedUnknownAuditTerminals | (private) | `function queuedUnknownAuditTerminals(entry: Que...` |
| 194 | fn | withActiveDeliveryClaim | pub | `export async function withActiveDeliveryClaim<T>(` |
| 209 | fn | buildRecoveryDeliverParams | (private) | `function buildRecoveryDeliverParams(entry: Queu...` |
| 244 | fn | applyRecoveryDeliveryAdmission | (private) | `async function applyRecoveryDeliveryAdmission(p...` |
| 284 | fn | reconcileUnknownQueuedDelivery | (private) | `async function reconcileUnknownQueuedDelivery(o...` |
| 331 | fn | buildReconciledSentResult | (private) | `function buildReconciledSentResult(` |
| 346 | fn | buildReconciledCommitContext | (private) | `function buildReconciledCommitContext(params: {` |
| 406 | fn | runReconciledSentCommitHooks | (private) | `async function runReconciledSentCommitHooks(par...` |
| 437 | fn | moveEntryToFailedWithLogging | (private) | `async function moveEntryToFailedWithLogging(` |
| 452 | fn | markDurableDeliveryFailedBestEffort | (private) | `function markDurableDeliveryFailedBestEffort(en...` |
| 467 | fn | resolveCompletedOwnerBeforeRecovery | (private) | `async function resolveCompletedOwnerBeforeRecov...` |
| 554 | fn | isEntryEligibleForRecoveryRetry | (private) | `function isEntryEligibleForRecoveryRetry(` |
| 580 | fn | isPermanentDeliveryError | (private) | `function isPermanentDeliveryError(error: string...` |
| 584 | fn | persistRecoveredPostSendState | (private) | `async function persistRecoveredPostSendState(op...` |
| 609 | fn | drainQueuedEntry | (private) | `async function drainQueuedEntry(opts: {` |
| 961 | fn | drainPendingDeliveries | pub | `export async function drainPendingDeliveries(op...` |
| 1091 | fn | recoverPendingDeliveries | pub | `export async function recoverPendingDeliveries(...` |

## Public API

### `withActiveDeliveryClaim`

```
export async function withActiveDeliveryClaim<T>(
```

**Line:** 194 | **Kind:** fn

### `drainPendingDeliveries`

```
export async function drainPendingDeliveries(opts: {
```

**Line:** 961 | **Kind:** fn

### `recoverPendingDeliveries`

```
export async function recoverPendingDeliveries(opts: {
```

**Line:** 1091 | **Kind:** fn
