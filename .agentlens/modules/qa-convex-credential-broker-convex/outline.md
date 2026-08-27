# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## qa/convex-credential-broker/convex/credentials.ts (817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | ActorRole | (private) |
| 29 | type | CredentialStatus | (private) |
| 30 | type | ListStatus | (private) |
| 31 | type | LeaseEventType | (private) |
| 32 | type | AdminEventType | (private) |
| 34 | type | BrokerErrorResult | (private) |
| 41 | type | BrokerOkResult | (private) |
| 45 | type | CredentialLease | (private) |
| 54 | type | CredentialSetRecord | (private) |
| 66 | type | ChunkedCredentialPayloadMarker | (private) |
| 72 | type | CredentialPayloadChunkRecord | (private) |
| 80 | type | CredentialPayloadStorage | (private) |
| 85 | type | EventInsertCtx | (private) |
| 94 | fn | normalizeIntervalMs | (private) |
| 108 | fn | normalizeListLimit | (private) |
| 117 | fn | brokerError | (private) |
| 132 | fn | leaseIsActive | (private) |
| 136 | fn | isChunkedCredentialPayloadMarker | (private) |
| 150 | fn | readCredentialPayload | (private) |
| 194 | fn | createCredentialPayloadStorage | (private) |
| 213 | fn | toCredentialSummary | (private) |
| 241 | fn | insertLeaseEvent | (private) |
| 264 | fn | insertAdminEvent | (private) |
| 287 | fn | sortByLeastRecentlyLeasedThenId | (private) |
| 303 | fn | sortCredentialRowsForList | (private) |
| 320 | fn | normalizeActorId | (private) |
