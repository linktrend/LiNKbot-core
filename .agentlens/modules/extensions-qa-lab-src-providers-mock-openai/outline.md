# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/qa-lab/src/providers/mock-openai/server.test.ts (6305 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | startMockServer | (private) |
| 44 | fn | postResponses | (private) |
| 54 | fn | expectResponsesText | (private) |
| 60 | fn | expectResponsesJson | (private) |
| 66 | fn | requireRecord | (private) |
| 73 | fn | requireArray | (private) |
| 80 | fn | outputItem | (private) |
| 85 | fn | outputItems | (private) |
| 91 | fn | outputToolArgs | (private) |
| 96 | fn | outputToolArgsFromItem | (private) |
| 103 | fn | outputToolCall | (private) |
| 113 | fn | outputToolCallId | (private) |
| 117 | fn | outputContentItem | (private) |
| 122 | fn | outputText | (private) |
| 130 | fn | makeUserInput | (private) |
| 146 | fn | makeDeveloperInput | (private) |
| 153 | fn | buildWhatsAppPendingHistoryContextFixture | (private) |
| 225 | fn | threadSubagentTask | (private) |
| 229 | fn | explicitSessionsSpawnPrompt | (private) |
| 241 | fn | readCursor | (private) |

## extensions/qa-lab/src/providers/mock-openai/server.ts (1557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 146 | fn | buildResponsesPayload | (private) |
| 207 | fn | buildToolProgressReadEvents | (private) |
| 213 | fn | buildToolProgressExecEvents | (private) |
| 1277 | fn | startQaMockOpenAiServer | pub |
| 1293 | fn | recordRequest | (private) |
