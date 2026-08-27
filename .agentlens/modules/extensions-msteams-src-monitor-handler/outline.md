# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/msteams/src/monitor-handler/inbound-media.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | firstGraphMediaCall | (private) |
| 70 | fn | firstBotFrameworkAttachmentCall | (private) |

## extensions/msteams/src/monitor-handler/message-handler.authz.test.ts (1078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | HandlerInput | (private) |
| 12 | type | TestThreadUser | (private) |
| 16 | type | TestAttachment | (private) |
| 51 | fn | stripHtmlFromTeamsMessage | (private) |
| 63 | fn | formatThreadContext | (private) |
| 95 | fn | createDeps | (private) |
| 128 | fn | resetThreadMocks | (private) |
| 137 | fn | createThreadMessage | (private) |
| 152 | fn | mockThreadContext | (private) |
| 161 | fn | createThreadAllowlistConfig | (private) |
| 185 | fn | createMessageActivity | (private) |
| 221 | fn | createAttackerGroupActivity | (private) |
| 241 | fn | createAttackerPersonalActivity | (private) |
| 257 | fn | createChannelThreadActivity | (private) |
| 279 | fn | createQuoteAttachment | (private) |
| 287 | fn | dispatchQuoteContextWithParent | (private) |
| 295 | fn | recordFromMockCall | (private) |
| 302 | fn | mockCallArg | (private) |
| 311 | fn | firstSettledDispatch | (private) |
| 320 | fn | logMeta | (private) |

## extensions/msteams/src/monitor-handler/message-handler.ts (1196 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | extractTextFromHtmlAttachments | (private) |
| 103 | fn | formatMSTeamsSenderReason | (private) |
| 135 | fn | buildStoredConversationReference | (private) |
| 178 | fn | createMSTeamsMessageHandler | pub |
| 192 | fn | logVerboseMessage | (private) |
| 214 | type | MSTeamsDebounceEntry | (private) |
| 224 | fn | handleTeamsMessageNow | (private) |
| 517 | fn | enqueuePrimaryMessageSystemEvent | (private) |
| 736 | fn | isThreadSenderAllowed | (private) |
| 1034 | fn | buildFlushIngressLifecycle | (private) |
| 1046 | fn | adoptAll | (private) |
