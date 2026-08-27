# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## packages/sdk/src/client.ts (977 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | OpenClawOptions | pub |
| 54 | fn | resolveGatewayUrl | (private) |
| 64 | fn | runStatusFromWaitPayload | (private) |
| 134 | fn | readOptionalString | (private) |
| 138 | fn | readOptionalTimestamp | (private) |
| 145 | fn | normalizeTimeoutMs | (private) |
| 155 | fn | timeoutSecondsFromMs | (private) |
| 163 | fn | splitModelRef | (private) |
| 177 | fn | assertNoUnsupportedRunOptions | (private) |
| 194 | fn | buildAgentParams | (private) |
| 214 | fn | unsupportedGatewayApi | (private) |
| 218 | type | ChatProjectionState | (private) |
| 220 | type | ChatProjection | (private) |
| 225 | fn | asRecord | (private) |
| 229 | fn | hasArtifactQueryScope | (private) |
| 236 | fn | requireArtifactQueryScope | (private) |
| 243 | fn | hasToolsEffectiveSessionKey | (private) |
| 248 | fn | requireToolsEffectiveSessionKey | (private) |
| 255 | fn | readChatProjection | (private) |
| 266 | fn | readChatProjectionText | (private) |
| 284 | fn | readChatProjectionDeltaText | (private) |
| 288 | fn | readChatProjectionReplace | (private) |
| 292 | fn | isAssistantRunEvent | (private) |
| 296 | fn | isTerminalRunEvent | (private) |
| 305 | fn | normalizeChatProjectionEvent | (private) |
| 331 | class | OpenClaw | pub |
| 499 | fn | matches | (private) |
| 539 | fn | markReady | (private) |
| 621 | class | Agent | pub |
| 642 | class | Run | pub |
| 689 | class | Session | pub |
| 737 | class | AgentsNamespace | pub |
| 762 | class | SessionsNamespace | pub |
| 795 | class | RunsNamespace | pub |
| 830 | class | RpcNamespace | (private) |
| 846 | class | TasksNamespace | pub |
| 868 | class | ModelsNamespace | pub |
| 883 | class | ToolsNamespace | pub |
| 910 | class | ArtifactsNamespace | pub |
| 935 | class | ApprovalsNamespace | pub |
| 951 | class | EnvironmentsNamespace | pub |

## packages/sdk/src/index.e2e.test.ts (708 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | JsonObject | (private) |
| 13 | type | FakeGatewayRequest | (private) |
| 18 | type | FakeGateway | (private) |
| 26 | fn | expectJsonObject | (private) |
| 31 | fn | sendJson | (private) |
| 35 | fn | reservePort | (private) |
| 47 | fn | createFakeGateway | (private) |
| 368 | fn | seenPromise | (private) |
| 583 | fn | eventsPromise | (private) |
| 633 | fn | readLiveTextDelta | (private) |
| 647 | fn | expectArrayProperty | (private) |
| 675 | fn | eventsPromise | (private) |

## packages/sdk/src/index.test.ts (1670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | RequestCall | (private) |
| 17 | type | FakeResponseValue | (private) |
| 18 | type | FakeResponseHandler | (private) |
| 23 | type | FakeResponse | (private) |
| 25 | class | FakeTransport | (private) |
| 57 | class | DelayedConnectTransport | (private) |
| 78 | class | ClosingEventPumpTransport | (private) |
| 102 | class | EventsOnlyTransport | (private) |
| 114 | fn | requireTransportCall | (private) |
| 743 | type | ListMethod | (private) |
| 775 | type | EffectiveMethod | (private) |
| 1321 | fn | observedLast | (private) |
