# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/matrix/src/matrix/actions/messages.test.ts (642 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | installMatrixActionTestRuntime | (private) |
| 28 | fn | createPollResponseEvent | (private) |
| 41 | fn | createPollStartEvent | (private) |
| 62 | fn | createMessagesClient | (private) |
| 108 | fn | createEditClient | (private) |
| 124 | fn | expectRecordFields | (private) |
| 135 | fn | mockCallArg | (private) |

## extensions/matrix/src/matrix/actions/verification.test.ts (1097 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | MockCallSource | (private) |
| 46 | fn | mockCallArg | (private) |
| 57 | fn | mockObjectArg | (private) |
| 70 | fn | expectResolvedActionClientReadinessNone | (private) |
| 105 | fn | mockVerifiedOwnerStatus | (private) |
| 129 | fn | mockUnverifiedOwnerStatus | (private) |
| 139 | fn | mockCrossSigningPublicationStatus | (private) |

## extensions/matrix/src/matrix/actions/verification.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | MatrixCryptoActionFacade | (private) |
| 15 | type | MatrixActionClient | (private) |
| 16 | type | MatrixVerificationDmLookupOpts | (private) |
| 21 | type | MatrixSelfVerificationResult | (private) |
| 26 | fn | requireCrypto | (private) |
| 42 | fn | resolveVerificationId | (private) |
| 50 | fn | ensureMatrixVerificationDmTracked | (private) |
| 70 | fn | isSameMatrixVerification | (private) |
| 80 | fn | isMatrixVerificationReadyForSas | (private) |
| 89 | fn | shouldStartMatrixSasVerification | (private) |
| 93 | fn | isMatrixVerificationCancelled | (private) |
| 97 | fn | isMatrixSasMethod | (private) |
| 101 | fn | getMatrixVerificationSasWaitFailure | (private) |
| 122 | fn | waitForMatrixVerificationSummary | (private) |
| 161 | fn | formatMatrixOwnerVerificationDiagnostics | (private) |
| 172 | fn | waitForMatrixSelfVerificationTrustStatus | (private) |
| 198 | fn | cancelMatrixSelfVerificationOnFailure | (private) |
| 213 | fn | completeMatrixSelfVerification | (private) |
| 239 | fn | listMatrixVerifications | pub |
| 246 | fn | requestMatrixVerification | pub |
| 266 | fn | runMatrixSelfVerification | pub |
| 359 | fn | acceptMatrixVerification | pub |
| 370 | fn | cancelMatrixVerification | pub |
| 385 | fn | startMatrixVerification | pub |
| 396 | fn | generateMatrixVerificationQr | pub |
| 407 | fn | scanMatrixVerificationQr | pub |
| 423 | fn | getMatrixVerificationSas | pub |
| 434 | fn | confirmMatrixVerificationSas | pub |
| 454 | fn | mismatchMatrixVerificationSas | pub |
| 465 | fn | confirmMatrixVerificationReciprocateQr | pub |
| 476 | fn | getMatrixEncryptionStatus | pub |
| 492 | fn | getMatrixVerificationStatus | pub |
| 514 | fn | readMatrixVerificationStatus | (private) |
| 533 | fn | getMatrixRoomKeyBackupStatus | pub |
| 540 | fn | verifyMatrixRecoveryKey | pub |
| 550 | fn | restoreMatrixRoomKeyBackup | pub |
| 564 | fn | resetMatrixRoomKeyBackup | pub |
| 576 | fn | bootstrapMatrixVerification | pub |
