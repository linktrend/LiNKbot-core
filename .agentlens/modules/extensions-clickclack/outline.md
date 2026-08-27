# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/clickclack/src/gateway.test.ts (639 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | class | FakeSocket | (private) |
| 18 | fn | waitForGatewayState | (private) |
| 63 | fn | createGatewayContext | (private) |
| 96 | fn | createBacklogEvent | (private) |
| 109 | fn | emitMessageEvent | (private) |

## extensions/clickclack/src/http-client.test.ts (948 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | requestBodyJson | (private) |
| 18 | fn | listenLoopbackServer | (private) |
| 33 | fn | createOversizedJsonServer | (private) |
| 45 | fn | writeBuffer | (private) |
| 53 | fn | writeChunks | (private) |
| 90 | fn | streamedErrorResponse | (private) |
| 893 | fn | runFrameCase | (private) |

## extensions/clickclack/src/http-client.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ClickClackUpload | (private) |
| 39 | fn | provenanceFields | (private) |
| 53 | type | ClientOptions | (private) |
| 76 | type | ClickClackMessagePage | (private) |
| 82 | fn | compareMessages | (private) |
| 86 | fn | keepLatestMessages | (private) |
| 90 | class | ClickClackHttpError | pub |
| 101 | fn | isClickClackChannelNameConflict | pub |
| 114 | fn | normalizeClickClackCorrelationId | pub |
| 132 | fn | createClickClackClient | pub |
| 141 | fn | request | (private) |
| 162 | fn | fetchEventPage | (private) |
| 561 | type | ClickClackClient | pub |

## extensions/clickclack/src/inbound.test.ts (1036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | LlmCompleteMock | (private) |
| 40 | fn | createRuntime | (private) |
| 80 | fn | configureDiscussionStore | (private) |
| 122 | fn | createAgentAccount | (private) |
| 155 | fn | createMessage | (private) |

## extensions/clickclack/src/outbound.test.ts (683 lines)

_No symbols extracted._

## extensions/clickclack/src/setup-core.test.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | makeClaimError | (private) |
| 29 | fn | validate | (private) |
| 41 | fn | prepare | (private) |
