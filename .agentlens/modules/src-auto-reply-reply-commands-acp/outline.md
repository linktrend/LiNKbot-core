# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## src/auto-reply/reply/commands-acp/context.test.ts (880 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | parseTelegramChatIdForTest | (private) |
| 31 | fn | parseDiscordConversationIdForTest | (private) |
| 50 | fn | parseDiscordParentChannelFromSessionKeyForTest | (private) |
| 56 | fn | parseFeishuTargetIdForTest | (private) |
| 67 | fn | parseFeishuDirectConversationIdForTest | (private) |
| 75 | fn | parseIMessageConversationIdFromTargetForTest | (private) |
| 84 | fn | parseLineConversationIdFromTargetForTest | (private) |
| 92 | fn | buildFeishuSenderScopedConversationIdForTest | (private) |
| 131 | fn | setMinimalAcpContextRegistryForTests | (private) |
| 368 | fn | registerFeishuBindingAdapterForTest | (private) |

## src/auto-reply/reply/commands-acp/lifecycle.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | cleanupFailedSpawn | (private) |
| 64 | fn | persistSpawnedSessionLabel | (private) |
| 105 | fn | handleAcpSpawnAction | pub |
| 292 | fn | resolveAcpSessionForCommandOrStop | (private) |
| 314 | fn | resolveAcpTokenTargetSessionKeyOrStop | (private) |
| 329 | fn | withResolvedAcpSessionTarget | (private) |
| 359 | fn | handleAcpCancelAction | pub |
| 381 | fn | runAcpSteer | (private) |
| 415 | fn | handleAcpSteerAction | pub |
| 472 | fn | handleAcpCloseAction | pub |

## src/auto-reply/reply/commands-acp/shared.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | AcpAction | pub |
| 56 | type | AcpSpawnThreadMode | pub |
| 57 | type | AcpSpawnBindMode | pub |
| 59 | type | ParsedSpawnInput | (private) |
| 68 | type | ParsedSteerInput | (private) |
| 73 | type | ParsedSingleValueCommandInput | (private) |
| 78 | type | ParsedSetCommandInput | (private) |
| 87 | fn | stopWithText | pub |
| 94 | fn | resolveAcpAction | pub |
| 120 | fn | readOptionValue | (private) |
| 162 | fn | normalizeAcpOptionToken | (private) |
| 174 | fn | resolveDefaultSpawnThreadMode | (private) |
| 183 | fn | parseSpawnInput | pub |
| 326 | fn | parseSteerInput | pub |
| 372 | fn | parseSingleValueCommandInput | pub |
| 393 | fn | parseSetCommandInput | pub |
| 421 | fn | parseOptionalSingleTarget | pub |
| 435 | fn | resolveAcpHelpText | pub |
| 463 | fn | formatRuntimeOptionsText | pub |
| 484 | fn | formatAcpCapabilitiesText | pub |
| 491 | fn | resolveCommandRequestId | pub |
| 509 | fn | collectAcpErrorText | pub |
| 521 | fn | withAcpCommandErrorBoundary | pub |
