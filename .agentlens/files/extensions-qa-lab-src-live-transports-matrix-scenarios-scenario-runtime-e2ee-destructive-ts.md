# extensions/qa-lab/src/live-transports/matrix/scenarios/scenario-runtime-e2ee-destructive.ts

[← Back to Module](../modules/extensions-qa-lab-src-live-transports-matrix-scenarios/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1312
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | MatrixQaDestructiveSetup | (private) | - |
| 66 | fn | cleanupMatrixQaTempDevices | (private) | `async function cleanupMatrixQaTempDevices(` |
| 79 | fn | requireMatrixQaPassword | (private) | `function requireMatrixQaPassword(context: Matri...` |
| 87 | fn | requireMatrixQaRegistrationToken | (private) | `function requireMatrixQaRegistrationToken(conte...` |
| 95 | fn | createMatrixQaDriverPersistentClient | (private) | `async function createMatrixQaDriverPersistentCl...` |
| 113 | fn | registerMatrixQaDestructiveOwner | (private) | `async function registerMatrixQaDestructiveOwner(` |
| 139 | fn | createMatrixQaDestructiveOwnerClient | (private) | `async function createMatrixQaDestructiveOwnerCl...` |
| 158 | fn | ensureMatrixQaOwnerReady | (private) | `async function ensureMatrixQaOwnerReady(params: {` |
| 207 | fn | isMatrixQaRepairableBackupBootstrapError | (private) | `function isMatrixQaRepairableBackupBootstrapErr...` |
| 219 | fn | prepareMatrixQaDestructiveSetup | (private) | `async function prepareMatrixQaDestructiveSetup(` |
| 260 | fn | runMatrixQaE2eeStateLossExternalRecoveryKeyScenario | pub | `export async function runMatrixQaE2eeStateLossE...` |
| 347 | fn | runMatrixQaE2eeStateLossStoredRecoveryKeyScenario | pub | `export async function runMatrixQaE2eeStateLossS...` |
| 426 | fn | runMatrixQaE2eeStateLossNoRecoveryKeyScenario | pub | `export async function runMatrixQaE2eeStateLossN...` |
| 474 | fn | runMatrixQaE2eeStaleRecoveryKeyAfterBackupResetScenario | pub | `export async function runMatrixQaE2eeStaleRecov...` |
| 547 | fn | runMatrixQaE2eeServerBackupDeletedLocalStateIntactScenario | pub | `export async function runMatrixQaE2eeServerBack...` |
| 598 | fn | waitForMatrixQaNonEmptyCliBackupRestore | (private) | `async function waitForMatrixQaNonEmptyCliBackup...` |
| 637 | fn | runMatrixQaE2eeServerBackupDeletedLocalReuploadRestoresScenario | pub | `export async function runMatrixQaE2eeServerBack...` |
| 709 | fn | runMatrixQaE2eeCorruptCryptoIdbSnapshotScenario | pub | `export async function runMatrixQaE2eeCorruptCry...` |
| 783 | fn | runMatrixQaE2eeServerDeviceDeletedLocalStateIntactScenario | pub | `export async function runMatrixQaE2eeServerDevi...` |
| 879 | fn | runMatrixQaE2eeServerDeviceDeletedReloginRecoversScenario | pub | `export async function runMatrixQaE2eeServerDevi...` |
| 1009 | fn | runMatrixQaE2eeSyncStateLossCryptoIntactScenario | pub | `export async function runMatrixQaE2eeSyncStateL...` |
| 1167 | fn | runMatrixQaE2eeWrongAccountRecoveryKeyScenario | pub | `export async function runMatrixQaE2eeWrongAccou...` |
| 1257 | fn | runMatrixQaE2eeHistoryExistsBackupEmptyScenario | pub | `export async function runMatrixQaE2eeHistoryExi...` |

## Public API

### `runMatrixQaE2eeStateLossExternalRecoveryKeyScenario`

```
export async function runMatrixQaE2eeStateLossExternalRecoveryKeyScenario(
```

**Line:** 260 | **Kind:** fn

### `runMatrixQaE2eeStateLossStoredRecoveryKeyScenario`

```
export async function runMatrixQaE2eeStateLossStoredRecoveryKeyScenario(
```

**Line:** 347 | **Kind:** fn

### `runMatrixQaE2eeStateLossNoRecoveryKeyScenario`

```
export async function runMatrixQaE2eeStateLossNoRecoveryKeyScenario(
```

**Line:** 426 | **Kind:** fn

### `runMatrixQaE2eeStaleRecoveryKeyAfterBackupResetScenario`

```
export async function runMatrixQaE2eeStaleRecoveryKeyAfterBackupResetScenario(
```

**Line:** 474 | **Kind:** fn

### `runMatrixQaE2eeServerBackupDeletedLocalStateIntactScenario`

```
export async function runMatrixQaE2eeServerBackupDeletedLocalStateIntactScenario(
```

**Line:** 547 | **Kind:** fn

### `runMatrixQaE2eeServerBackupDeletedLocalReuploadRestoresScenario`

```
export async function runMatrixQaE2eeServerBackupDeletedLocalReuploadRestoresScenario(
```

**Line:** 637 | **Kind:** fn

### `runMatrixQaE2eeCorruptCryptoIdbSnapshotScenario`

```
export async function runMatrixQaE2eeCorruptCryptoIdbSnapshotScenario(
```

**Line:** 709 | **Kind:** fn

### `runMatrixQaE2eeServerDeviceDeletedLocalStateIntactScenario`

```
export async function runMatrixQaE2eeServerDeviceDeletedLocalStateIntactScenario(
```

**Line:** 783 | **Kind:** fn

### `runMatrixQaE2eeServerDeviceDeletedReloginRecoversScenario`

```
export async function runMatrixQaE2eeServerDeviceDeletedReloginRecoversScenario(
```

**Line:** 879 | **Kind:** fn

### `runMatrixQaE2eeSyncStateLossCryptoIntactScenario`

```
export async function runMatrixQaE2eeSyncStateLossCryptoIntactScenario(
```

**Line:** 1009 | **Kind:** fn

### `runMatrixQaE2eeWrongAccountRecoveryKeyScenario`

```
export async function runMatrixQaE2eeWrongAccountRecoveryKeyScenario(
```

**Line:** 1167 | **Kind:** fn

### `runMatrixQaE2eeHistoryExistsBackupEmptyScenario`

```
export async function runMatrixQaE2eeHistoryExistsBackupEmptyScenario(
```

**Line:** 1257 | **Kind:** fn
