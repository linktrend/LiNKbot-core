# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/audit/audit-event-store.ts (695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | AuditEventsTable | (private) |
| 39 | type | AuditDatabase | (private) |
| 40 | type | AuditEventRow | (private) |
| 49 | fn | getAuditKysely | (private) |
| 76 | fn | corruptAuditRow | (private) |
| 82 | fn | requiredInteger | (private) |
| 95 | fn | optionalInteger | (private) |
| 107 | fn | requiredText | (private) |
| 114 | fn | optionalText | (private) |
| 121 | fn | requiredEnum | (private) |
| 135 | fn | optionalEnum | (private) |
| 147 | fn | requiredHmacRef | (private) |
| 155 | fn | optionalHmacRef | (private) |
| 162 | fn | requireNull | (private) |
| 168 | fn | requireNullColumns | (private) |
| 174 | fn | parseAuditRecordBase | (private) |
| 189 | fn | parseAgentRecordFields | (private) |
| 206 | fn | parseAgentRunRow | (private) |
| 234 | fn | parseToolActionRow | (private) |
| 269 | fn | parseMessageRecordFields | (private) |
| 300 | fn | parseInboundMessageRow | (private) |
| 367 | fn | parseOutboundMessageRow | (private) |
| 441 | fn | rowToAuditEvent | (private) |
| 460 | fn | projectMessageIdentities | (private) |
| 464 | fn | ref | (private) |
| 487 | fn | bindAuditEvent | (private) |
| 523 | fn | countAuditEvents | (private) |
| 534 | fn | pruneAuditEventsAfterInsert | (private) |
| 578 | fn | recordAuditEvent | pub |
| 620 | fn | listAuditEvents | pub |
| 680 | fn | pruneExpiredAuditEvents | pub |

## src/audit/audit-events.test.ts (742 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createDatabaseOptions | (private) |
| 31 | fn | auditInput | (private) |
| 54 | fn | agentEvent | (private) |
| 68 | fn | toolEvent | (private) |
| 82 | fn | captureAuditWriter | (private) |
| 93 | fn | projectAgentEventToAudit | (private) |
| 104 | fn | projectToolExecutionEventToAudit | (private) |
