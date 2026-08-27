# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/whatsapp/src/inbound/access-control.test.ts (681 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | InboundAccessControlResult | (private) |
| 27 | fn | expectAccepted | (private) |
| 36 | fn | checkUnauthorizedWorkDmSender | (private) |
| 51 | fn | expectSilentlyBlocked | (private) |
| 57 | fn | checkCommandAuthorizedForDm | (private) |
| 89 | fn | checkCommandAuthorizedForGroup | (private) |
| 308 | fn | runPairingGraceCase | (private) |

## extensions/whatsapp/src/inbound/monitor.ts (1980 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | type | WhatsAppGroupMetadataCacheEntry | (private) |
| 116 | type | WhatsAppGroupMetadataCache | pub |
| 121 | type | WhatsAppBaileysMessageCache | pub |
| 122 | type | WhatsAppBaileysGroupMetadataCache | pub |
| 126 | type | LocalGroupMetadataCacheEntry | (private) |
| 131 | fn | resolveGroupMetadataExpiresAt | (private) |
| 138 | fn | parseWhatsAppTimestampSeconds | (private) |
| 149 | fn | rememberGroupMetadataCacheEntry | (private) |
| 172 | fn | readGroupMetadataCacheEntry | (private) |
| 191 | fn | rememberWhatsAppBaileysCacheEntry | (private) |
| 216 | fn | readWhatsAppBaileysCacheEntry | pub |
| 233 | fn | logWhatsAppVerbose | (private) |
| 240 | fn | isDirectUserJid | (private) |
| 244 | fn | getActiveReachoutTimelock | (private) |
| 256 | fn | formatReachoutTimelockError | (private) |
| 267 | fn | recordAcceptedInboundActivity | (private) |
| 275 | fn | isRetryableSendDisconnectError | (private) |
| 282 | fn | shouldClearSocketRefAfterSendFailure | (private) |
| 286 | type | AdmittedWebInboundCallbackMessage | (private) |
| 290 | type | AppendReplyWindow | (private) |
| 296 | type | MonitorWebInboxOptions | (private) |
| 337 | type | AttachWebInboxToSocketOptions | (private) |
| 346 | fn | attachWebInboxToSocket | pub |
| 358 | fn | shouldRetryDisconnect | (private) |
| 372 | fn | resolveClose | (private) |
| 428 | type | QueuedInboundMessageMetadata | (private) |
| 435 | type | QueuedInboundMessage | (private) |
| 446 | fn | notifyDebounceWork | (private) |
| 456 | fn | waitForDebounceWorkOrIdle | (private) |
| 464 | fn | finish | (private) |
| 500 | fn | orderDebouncedInboundEntries | (private) |
| 509 | fn | buildFlushIngressLifecycle | (private) |
| 522 | fn | adoptAll | (private) |
| 682 | fn | rememberBaileysMessage | (private) |
| 698 | fn | rememberOutboundMessage | (private) |
| 723 | fn | trackLateAcceptedSend | (private) |
| 739 | fn | rememberReachoutTimeLock | (private) |
| 770 | fn | rememberVerifiedSendReady | (private) |
| 788 | fn | assertCanSendToJid | (private) |
| 812 | fn | assertCanSendTo | (private) |
| 823 | fn | sendTrackedMessage | (private) |
| 890 | fn | summarizeGroupMeta | (private) |
| 922 | fn | getGroupMeta | (private) |
| 998 | type | NormalizedInboundMessage | (private) |
| 1134 | fn | maybeMarkInboundAsRead | (private) |
| 1152 | fn | maybeLogSkippedSelfChatReadReceipt | (private) |
| 1162 | fn | maybeMarkNonSelfChatReadReceipt | (private) |
| 1192 | type | PreparedInbound | (private) |
| 1195 | type | EnrichedInboundMessage | (private) |
| 1232 | fn | saveInboundMedia | (private) |
| 1280 | fn | enqueueInboundMessage | (private) |
| 1291 | fn | sendComposing | (private) |
| 1303 | fn | reply | (private) |
| 1312 | fn | sendMedia | (private) |
| 1547 | fn | handleMessagesUpsert | (private) |
| 1598 | fn | finishPreparation | (private) |
| 1674 | fn | handleMessagesUpsertEvent | (private) |
| 1686 | fn | drainDebouncedInboundMessages | (private) |
| 1701 | fn | drainInboundBeforeSocketClose | (private) |
| 1732 | fn | drainInboundBeforeSocketCloseWithTimeout | (private) |
| 1778 | fn | attachSockListener | (private) |
| 1802 | fn | rememberFullGroupMetadataUpdate | (private) |
| 1817 | fn | forgetFullGroupMetadata | (private) |
| 1856 | fn | groupHydrationTask | (private) |
| 1935 | fn | monitorWebInbox | pub |

## extensions/whatsapp/src/inbound/send-api.test.ts (717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | requireRecord | (private) |
| 46 | type | MockCallSource | (private) |
| 52 | fn | requireMockArg | (private) |
| 81 | fn | expectRecordFields | (private) |
| 87 | fn | requireSendContent | (private) |
| 94 | fn | requireSendOptions | (private) |
| 101 | fn | expectFirstSendJid | (private) |
| 105 | fn | expectSendContentFields | (private) |
| 109 | fn | expectSendResultFields | (private) |
