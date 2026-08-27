# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/discord/src/internal/client.test.ts (691 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | AnyListener | (private) |
| 14 | fn | createDeferred | (private) |
| 33 | fn | createTestCommand | (private) |
| 60 | class | WildcardButton | (private) |
| 68 | class | WildcardSelect | (private) |
| 92 | class | EncodedButton | (private) |
| 480 | fn | createQueuedClient | (private) |

## extensions/discord/src/internal/gateway.test.ts (1009 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | attachOpenSocket | (private) |
| 26 | fn | sentGatewayOpcodes | (private) |
| 34 | fn | firstDispatchedData | (private) |
| 42 | fn | firstSentGatewayPayload | (private) |
| 51 | fn | presenceUpdate | (private) |
| 66 | class | FakeSocket | (private) |
| 72 | class | TestGatewayPlugin | (private) |
| 90 | type | GatewaySessionState | (private) |
| 96 | fn | gatewaySessionState | (private) |

## extensions/discord/src/internal/gateway.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | Activity | pub |
| 32 | type | UpdatePresenceData | pub |
| 35 | type | RequestGuildMembersData | (private) |
| 43 | type | GatewayPluginOptions | (private) |
| 50 | type | GatewayReconnectReason | (private) |
| 56 | type | GatewayReconnectOptions | (private) |
| 75 | class | GatewayPlugin | pub |

## extensions/discord/src/internal/rest-scheduler.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | RequestPriority | pub |
| 13 | type | RequestQuery | pub |
| 42 | type | RestSchedulerLaneOptions | (private) |
| 48 | type | RestSchedulerOptions | (private) |
| 58 | fn | normalizeRestSchedulerOptions | (private) |
| 71 | fn | normalizeLaneOptions | (private) |
| 81 | fn | createLaneQueues | (private) |
| 89 | fn | countPending | (private) |
| 93 | class | RestScheduler | pub |
| 589 | fn | isGlobalRateLimit | (private) |

## extensions/discord/src/internal/rest.test.ts (947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | expectRateLimitError | (private) |
| 29 | fn | expectDiscordErrorStatus | (private) |
| 945 | fn | readRequestUrl | (private) |
