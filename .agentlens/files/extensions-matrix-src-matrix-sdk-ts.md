# extensions/matrix/src/matrix/sdk.ts

[← Back to Module](../modules/extensions-matrix/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2180
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 79 | type | MatrixOwnDeviceVerificationStatus | pub | - |
| 97 | type | MatrixDeviceVerificationStatus | pub | - |
| 107 | type | MatrixRoomKeyBackupStatus | pub | - |
| 120 | fn | resolveMatrixLocalTimeoutMs | (private) | `function resolveMatrixLocalTimeoutMs(raw: numbe...` |
| 127 | fn | unresolvedMatrixRoomKeyBackupStatus | (private) | `function unresolvedMatrixRoomKeyBackupStatus():...` |
| 139 | fn | unresolvedMatrixDeviceVerificationStatus | (private) | `function unresolvedMatrixDeviceVerificationStat...` |
| 154 | fn | resolveMatrixDiagnostic | (private) | `async function resolveMatrixDiagnostic<T>(` |
| 162 | fn | resolveMatrixDiagnosticResult | (private) | `async function resolveMatrixDiagnosticResult<T>(` |
| 186 | fn | isMatrixAccessTokenInvalidatedError | (private) | `function isMatrixAccessTokenInvalidatedError(er...` |
| 208 | type | MatrixRoomKeyBackupRestoreResult | pub | - |
| 219 | type | MatrixRoomKeyBackupResetResult | pub | - |
| 229 | type | MatrixRecoveryKeyVerificationResult | pub | - |
| 238 | type | MatrixOwnCrossSigningPublicationStatus | (private) | - |
| 246 | type | MatrixVerificationBootstrapResult | pub | - |
| 265 | fn | createMatrixExplicitBootstrapOptions | (private) | `function createMatrixExplicitBootstrapOptions(p...` |
| 278 | type | MatrixOwnDeviceInfo | pub | - |
| 286 | type | MatrixRoomKeyBackupResetOptions | (private) | - |
| 290 | type | MatrixOwnDeviceDeleteResult | pub | - |
| 296 | type | MatrixCryptoRuntime | (private) | - |
| 309 | fn | isUnsupportedAuthenticatedMediaEndpointError | (private) | `function isUnsupportedAuthenticatedMediaEndpoin...` |
| 323 | class | MatrixClient | pub | - |
| 570 | fn | cleanup | (private) | `const cleanup = () => {` |
| 580 | fn | settleResolve | (private) | `const settleResolve = () => {` |
| 589 | fn | settleReject | (private) | `const settleReject = (error: Error) => {` |
| 598 | fn | onSyncState | (private) | `const onSyncState = (state: MatrixSyncState, _p...` |
| 614 | fn | onUnexpectedError | (private) | `const onUnexpectedError = (error: Error) => {` |
| 618 | fn | onAbort | (private) | `const onAbort = () => {` |
| 1090 | fn | onDecrypted | (private) | `const onDecrypted = (candidate: MatrixEvent) => {` |

## Public API
