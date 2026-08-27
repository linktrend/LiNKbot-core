# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 10 large files in this module.

## extensions/reef/src/cli.ts (549 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ReefCliOutput | (private) |
| 49 | fn | emit | (private) |
| 59 | fn | fail | (private) |
| 72 | fn | reefCliAction | (private) |
| 90 | fn | loadOrCreateKeys | (private) |
| 109 | fn | currentReefConfig | (private) |
| 119 | fn | loadConfiguredManager | (private) |
| 147 | type | RegisterOptions | (private) |
| 162 | fn | writeReefRegistration | (private) |
| 174 | fn | writeReefMigrationStateDir | (private) |
| 190 | fn | runRegister | (private) |
| 401 | fn | registerReefCli | pub |

## extensions/reef/src/doctor-durable-state.ts (669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | ReefAuditMigrationRecord | (private) |
| 60 | fn | readLegacyReefAudit | (private) |
| 72 | fn | readStoredReefAudit | (private) |
| 113 | type | LegacyReefReplayLogRecord | (private) |
| 118 | fn | requireLegacyReplayString | (private) |
| 126 | fn | parseLegacyReefReplayLine | (private) |
| 166 | fn | readLegacyReefReplay | (private) |
| 222 | fn | readLegacyReefReviews | (private) |
| 247 | fn | readLegacyReefDelivered | (private) |
| 431 | fn | files | (private) |
| 439 | fn | durableSourceExists | (private) |
| 476 | fn | runtimeSourceExists | (private) |
| 635 | fn | remainingSources | (private) |

## extensions/reef/src/flow-receipts.test.ts (841 lines)

_No symbols extracted._

## extensions/reef/src/friends.test.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | deferred | (private) |
| 31 | fn | relayFriend | (private) |
| 49 | fn | runtime | (private) |
| 59 | fn | config | (private) |
| 63 | fn | trust | (private) |
| 67 | fn | approvals | (private) |
| 79 | fn | addApproval | (private) |
| 89 | fn | transport | (private) |

## extensions/reef/src/owner-notice.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | ReefRejectionNotice | (private) |
| 20 | fn | rejection | (private) |
| 24 | fn | consumeNotice | (private) |
| 26 | fn | createNoticeStore | (private) |
| 31 | fn | key | (private) |
| 463 | fn | overdueStore | (private) |

## extensions/reef/src/state.test.ts (630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | createRuntime | (private) |
| 56 | fn | bindIdentity | (private) |

## extensions/reef/src/state.ts (605 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ReefReplayRecord | pub |
| 65 | type | ReefReviewRecord | pub |
| 67 | type | ReefIdentityMigrationRecord | pub |
| 71 | type | ReefDurableMigrationRecord | pub |
| 73 | fn | parseReefKeys | pub |
| 93 | fn | openKeysStore | (private) |
| 101 | fn | assertReefIdentityMigrationComplete | (private) |
| 124 | fn | generateAndStoreKeys | pub |
| 133 | fn | random | (private) |
| 146 | fn | loadKeys | pub |
| 159 | fn | reefReplayStoreKey | pub |
| 165 | fn | parseReplayRecord | (private) |
| 185 | fn | encryptReplayBody | (private) |
| 198 | fn | decryptReplayBody | (private) |
| 210 | fn | validateReplayCompletion | (private) |
| 216 | class | ReefSqliteReplayStore | (private) |
| 408 | class | ReviewApprovalStore | pub |
| 483 | class | ReefDeliveredStore | pub |
| 511 | type | ReefInboxCursorRecord | (private) |
| 513 | fn | parseReefInboxCursorRecord | (private) |
| 529 | class | ReefInboxCursorStore | pub |
| 584 | fn | openStores | pub |

## extensions/reef/src/transport.test.ts (1030 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 94 | fn | verifyRelaySignature | (private) |
| 242 | fn | jsonObjectBodyAtSize | (private) |
| 248 | fn | createTrackedResponse | (private) |
| 395 | class | ControlledSocket | (private) |
| 420 | fn | receiptEntry | (private) |
| 431 | fn | parseRequestUrl | (private) |
| 874 | fn | inboxFrameAtSize | (private) |
| 881 | fn | deliverInboxFrame | (private) |

## extensions/reef/src/transport.ts (601 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | FetchLike | (private) |
| 29 | class | ReefRelayError | pub |
| 39 | class | ReefRelayUnavailableError | (private) |
| 46 | fn | isDefinitiveReefRegistrationFailure | pub |
| 56 | fn | isRetryableReefRelayFailure | pub |
| 66 | fn | isReefOwnershipRejection | pub |
| 70 | fn | readReefRelaySuccessJson | (private) |
| 88 | class | ReefTransportClient | pub |
| 276 | interface | WebSocketLike | pub |
| 290 | interface | ReefInboxConnectionOptions | (private) |
| 297 | fn | createReefWebSocket | pub |
| 307 | fn | abortableSleep | pub |
| 314 | fn | done | (private) |
| 323 | class | ReefInboxConnection | pub |
| 454 | fn | abortListener | (private) |
| 468 | fn | finish | (private) |
| 480 | fn | markDisconnected | (private) |
| 489 | fn | disconnect | (private) |
| 504 | fn | pump | (private) |
| 593 | fn | asError | (private) |
| 597 | fn | reefInboxCloseError | (private) |

## extensions/reef/src/trust-store.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | ReefPeerStateSnapshot | (private) |
| 66 | type | ReefOutboundDeliveryBinding | (private) |
| 67 | type | ReefOutboundDelivery | (private) |
| 69 | type | ReefTrustStores | (private) |
| 74 | fn | requirePeer | (private) |
| 82 | fn | resolveReefIdentityScope | (private) |
| 93 | fn | resolveReefTrustStoreKey | pub |
| 97 | fn | resolvePairingKeyDigest | (private) |
| 105 | fn | isReefPairingApprovalToken | pub |
| 109 | fn | openStores | (private) |
| 128 | class | ReefTrustStore | pub |
| 629 | fn | openReefTrustStore | pub |
