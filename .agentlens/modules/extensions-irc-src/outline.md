# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/irc/src/inbound.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | IrcGroupPolicy | (private) |
| 82 | fn | escapeIrcRegexLiteral | (private) |
| 84 | fn | isBareNick | (private) |
| 88 | fn | hasVerifiedHost | (private) |
| 92 | fn | isHostlessNickUser | (private) |
| 96 | fn | normalizeIrcStableEntry | (private) |
| 104 | fn | normalizeIrcNickUserEntry | (private) |
| 112 | fn | normalizeIrcNickEntry | (private) |
| 120 | fn | hasEntries | (private) |
| 124 | fn | createIrcIngressSubject | (private) |
| 140 | fn | routeDescriptorsForIrcGroup | (private) |
| 174 | fn | deliverIrcReply | (private) |
| 199 | fn | handleIrcInbound | pub |

## extensions/irc/src/monitor.test.ts (642 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | DisconnectingIrcServer | (private) |
| 23 | type | InboundIrcServer | (private) |
| 28 | type | ReconnectingReplyIrcServer | (private) |
| 36 | type | IrcIngressQueue | (private) |
| 37 | type | IrcIngressPayload | (private) |
| 39 | fn | withIngressQueue | (private) |
| 55 | fn | waitForIrcCondition | (private) |
| 71 | fn | waitForIrcAsyncCondition | (private) |
| 87 | fn | startDisconnectingIrcServer | (private) |
| 153 | fn | startInboundIrcServer | (private) |
| 217 | fn | startReconnectingReplyIrcServer | (private) |
| 282 | fn | installMonitorRuntime | (private) |
| 303 | fn | installPairingMonitorRuntime | (private) |
| 372 | fn | resolvePairing | (private) |
| 373 | fn | markPairingStarted | (private) |
