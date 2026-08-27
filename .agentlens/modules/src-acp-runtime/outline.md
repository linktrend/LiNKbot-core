# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/acp/runtime/session-meta.test.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | seedAcpSessionEntry | (private) |
| 37 | fn | readStoredAcpSessionEntry | (private) |

## src/acp/runtime/session-meta.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | AcpSessionStoreEntry | pub |
| 48 | type | AcpSessionsTable | (private) |
| 49 | type | AcpSessionMetaDatabase | (private) |
| 50 | type | AcpSessionRow | (private) |
| 52 | fn | resolveStoreSessionKey | (private) |
| 76 | fn | resolveSessionStorePathForAcp | pub |
| 94 | fn | getAcpSessionKysely | (private) |
| 98 | fn | rowToAcpSessionMeta | (private) |
| 119 | fn | bindAcpSessionMeta | (private) |
| 144 | fn | selectAcpSessionRow | (private) |
| 154 | fn | acpSessionRowMatchesEntry | (private) |
| 162 | fn | readAcpSessionMeta | pub |
| 189 | fn | readAcpSessionMetaForEntry | pub |
| 210 | fn | selectAcpSessionRows | (private) |
| 222 | fn | writeAcpSessionMetaForMigration | pub |
| 248 | fn | repairAcpSessionMetaKeyForMigration | pub |
| 325 | fn | upsertAcpSessionMetaRow | (private) |
| 350 | fn | readSessionEntryFromStore | (private) |
| 388 | fn | readAcpSessionEntry | pub |
| 419 | fn | listAcpSessionEntries | pub |
| 470 | fn | mergeAcpForReturn | (private) |
| 474 | fn | sessionStoreUpdateOptions | (private) |
| 486 | fn | clearLegacyEmbeddedAcpMetadata | (private) |
| 520 | fn | upsertAcpSessionMeta | pub |
