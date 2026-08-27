# src/config/io.observe-recovery.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1004
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | ObserveRecoveryDeps | (private) | - |
| 98 | type | ConfigStatMetadataSource | (private) | - |
| 111 | fn | formatConfigPermissionHardeningWarning | (private) | `function formatConfigPermissionHardeningWarning...` |
| 120 | fn | chmodConfigBestEffort | (private) | `async function chmodConfigBestEffort(params: {` |
| 138 | fn | chmodConfigBestEffortSync | (private) | `function chmodConfigBestEffortSync(params: {` |
| 155 | type | ConfigReadRecoveryParams | (private) | - |
| 165 | type | ConfigReadRecoveryResult | (private) | - |
| 170 | fn | createConfigObserveAuditRecord | (private) | `function createConfigObserveAuditRecord(params: {` |
| 236 | type | ConfigObserveAuditRecordParams | (private) | - |
| 238 | fn | createConfigObserveAuditAppendParams | (private) | `function createConfigObserveAuditAppendParams(` |
| 249 | fn | extractRestoreErrorDetails | (private) | `function extractRestoreErrorDetails(error: unkn...` |
| 267 | fn | hashConfigRaw | (private) | `function hashConfigRaw(raw: string | null): str...` |
| 274 | fn | resolveConfigSnapshotHash | (private) | `function resolveConfigSnapshotHash(snapshot: {` |
| 290 | fn | hasConfigMeta | (private) | `function hasConfigMeta(value: unknown): boolean {` |
| 299 | fn | resolveGatewayMode | (private) | `function resolveGatewayMode(value: unknown): st...` |
| 306 | fn | resolveConfigStatMetadata | (private) | `function resolveConfigStatMetadata(stat: Config...` |
| 334 | fn | createConfigHealthFingerprint | (private) | `function createConfigHealthFingerprint(params: {` |
| 354 | fn | parseConfigRawOrEmpty | (private) | `function parseConfigRawOrEmpty(deps: ObserveRec...` |
| 362 | fn | returnOriginalConfigRead | (private) | `function returnOriginalConfigRead(params: Confi...` |
| 366 | fn | readConfigHealthState | (private) | `async function readConfigHealthState(deps: Obse...` |
| 370 | fn | readConfigHealthStateSync | (private) | `function readConfigHealthStateSync(deps: Observ...` |
| 374 | fn | writeConfigHealthState | (private) | `async function writeConfigHealthState(` |
| 381 | fn | writeConfigHealthStateSync | (private) | `function writeConfigHealthStateSync(deps: Obser...` |
| 385 | fn | parseBackupConfigRaw | (private) | `function parseBackupConfigRaw(` |
| 396 | fn | getConfigHealthEntry | (private) | `function getConfigHealthEntry(state: ConfigHeal...` |
| 405 | fn | setConfigHealthEntry | (private) | `function setConfigHealthEntry(` |
| 419 | fn | createLastObservedSuspiciousEntry | (private) | `function createLastObservedSuspiciousEntry(` |
| 429 | fn | createRecoveredSuspiciousHealthState | (private) | `function createRecoveredSuspiciousHealthState(p...` |
| 442 | fn | logBackupRestoreResult | (private) | `function logBackupRestoreResult(params: {` |
| 462 | fn | createBackupRestoreAuditAppendParams | (private) | `function createBackupRestoreAuditAppendParams(p...` |
| 491 | fn | resolveSuspiciousSignature | (private) | `function resolveSuspiciousSignature(` |
| 498 | fn | isRecoverableConfigReadSuspiciousReason | (private) | `function isRecoverableConfigReadSuspiciousReaso...` |
| 507 | fn | resolveConfigReadRecoveryContext | (private) | `function resolveConfigReadRecoveryContext(param...` |
| 530 | fn | readConfigFingerprintForPath | (private) | `async function readConfigFingerprintForPath(` |
| 551 | fn | readConfigFingerprintForPathSync | (private) | `function readConfigFingerprintForPathSync(` |
| 572 | fn | resolveLastKnownGoodConfigPath | (private) | `function resolveLastKnownGoodConfigPath(configP...` |
| 576 | fn | isSensitiveConfigPath | (private) | `function isSensitiveConfigPath(pathLabel: strin...` |
| 582 | fn | collectPollutedSecretPlaceholders | (private) | `function collectPollutedSecretPlaceholders(` |
| 613 | fn | maybeRecoverSuspiciousConfigRead | pub | `export async function maybeRecoverSuspiciousCon...` |
| 730 | fn | maybeRecoverSuspiciousConfigReadSync | pub | `export function maybeRecoverSuspiciousConfigRea...` |
| 844 | fn | promoteConfigSnapshotToLastKnownGood | pub | `export async function promoteConfigSnapshotToLa...` |
| 894 | fn | recoverConfigFromLastKnownGood | pub | `export async function recoverConfigFromLastKnow...` |
| 989 | fn | preserveConfigSnapshotAsClobbered | pub | `export async function preserveConfigSnapshotAsC...` |

## Public API

### `maybeRecoverSuspiciousConfigRead`

```
export async function maybeRecoverSuspiciousConfigRead(
```

**Line:** 613 | **Kind:** fn

### `maybeRecoverSuspiciousConfigReadSync`

```
export function maybeRecoverSuspiciousConfigReadSync(
```

**Line:** 730 | **Kind:** fn

### `promoteConfigSnapshotToLastKnownGood`

```
export async function promoteConfigSnapshotToLastKnownGood(params: {
```

**Line:** 844 | **Kind:** fn

### `recoverConfigFromLastKnownGood`

```
export async function recoverConfigFromLastKnownGood(params: {
```

**Line:** 894 | **Kind:** fn

### `preserveConfigSnapshotAsClobbered`

```
export async function preserveConfigSnapshotAsClobbered(params: {
```

**Line:** 989 | **Kind:** fn
