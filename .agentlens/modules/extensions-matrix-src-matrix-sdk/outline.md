# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/matrix/src/matrix/sdk/crypto-bootstrap.test.ts (765 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | BootstrapCrossSigningMock | (private) |
| 13 | type | MockCallSource | (private) |
| 15 | fn | mockObjectArg | (private) |
| 32 | fn | expectBootstrapCrossSigningCall | (private) |
| 44 | fn | createBootstrapperDeps | (private) |
| 64 | fn | createCryptoApi | (private) |
| 74 | fn | createVerifiedDeviceStatus | (private) |
| 87 | fn | createBootstrapperHarness | (private) |
| 102 | fn | runExplicitSecretStorageRepairScenario | (private) |
| 123 | fn | expectSecretStorageRepairRetry | (private) |
| 135 | fn | createForcedResetHarness | (private) |
| 144 | fn | bootstrapWithVerificationRequestListener | (private) |

## extensions/matrix/src/matrix/sdk/recovery-key-store.test.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | createTempRecoveryKeyPath | (private) |
| 19 | fn | createGeneratedRecoveryKey | (private) |
| 33 | fn | createBootstrapSecretStorageMock | (private) |
| 48 | fn | createRecoveryKeyCrypto | (private) |
| 63 | fn | bootstrapSecretStorageCallArg | (private) |
| 74 | fn | expectRecoveryKeySummary | (private) |
| 88 | fn | readStoredRecoveryKey | (private) |
| 96 | fn | runSecretStorageBootstrapScenario | (private) |

## extensions/matrix/src/matrix/sdk/transport.test.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | clearTestUndiciRuntimeDepsOverride | (private) |
| 13 | fn | stubRuntimeFetch | (private) |
| 482 | fn | onUnhandledRejection | (private) |
| 622 | fn | sendChunk | (private) |
| 633 | fn | scheduleNextChunk | (private) |

## extensions/matrix/src/matrix/sdk/verification-manager.test.ts (742 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | MatrixVerifierLike | (private) |
| 14 | type | MatrixShowSasCallbacks | (private) |
| 15 | type | MatrixShowQrCodeCallbacks | (private) |
| 19 | class | MockVerifier | (private) |
| 45 | class | MockVerificationRequest | (private) |
| 93 | fn | createSasVerifierFixture | (private) |
| 122 | fn | createReadyRequestWithoutVerifier | (private) |
| 141 | fn | expectTrackedSas | (private) |

## extensions/matrix/src/matrix/sdk/verification-manager.ts (802 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | MatrixVerificationMethod | pub |
| 16 | type | MatrixVerificationPhase | (private) |
| 28 | fn | isMatrixVerificationPhase | (private) |
| 34 | type | MatrixVerificationSummary | pub |
| 60 | type | MatrixVerificationSummaryListener | (private) |
| 61 | type | MatrixVerificationOwnerTrustCallback | (private) |
| 63 | type | MatrixShowSasCallbacks | (private) |
| 73 | type | MatrixShowQrCodeCallbacks | (private) |
| 78 | type | MatrixVerifierLike | (private) |
| 86 | type | MatrixVerificationRequestLike | pub |
| 109 | type | MatrixVerificationCryptoApi | pub |
| 126 | type | MatrixVerificationSession | (private) |
| 143 | type | MatrixVerificationRequestIdentity | (private) |
| 156 | class | MatrixVerificationManager | pub |
