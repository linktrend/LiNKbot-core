# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## src/acp/client.test.ts (1024 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | envVar | (private) |
| 58 | fn | makePermissionRequest | (private) |
| 84 | fn | createTempDir | (private) |
| 334 | fn | expectPromptReject | (private) |
| 349 | fn | expectAutoAllowWithoutPrompt | (private) |

## src/acp/event-ledger.ts (819 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | AcpEventLedgerEntry | (private) |
| 26 | type | AcpEventLedgerReplay | pub |
| 34 | type | AcpEventLedger | pub |
| 60 | type | LedgerSession | (private) |
| 71 | type | LedgerStore | (private) |
| 76 | type | LedgerOptions | (private) |
| 83 | type | MutableLedgerState | (private) |
| 91 | fn | createEmptyStore | (private) |
| 98 | fn | normalizeLedgerOptions | (private) |
| 115 | fn | cloneJsonValue | (private) |
| 119 | fn | createUserPromptUpdates | (private) |
| 126 | fn | serializeLedgerStore | (private) |
| 130 | fn | getSerializedLedgerByteLength | (private) |
| 134 | fn | normalizeEvent | (private) |
| 166 | fn | getOrCreateSession | (private) |
| 201 | fn | trimLedger | (private) |
| 244 | fn | appendUpdate | (private) |
| 273 | fn | createLedgerApi | (private) |
| 360 | fn | createInMemoryAcpEventLedger | pub |
| 375 | fn | normalizeSqliteInteger | (private) |
| 382 | type | AcpReplaySessionRow | (private) |
| 392 | type | AcpReplayEventRow | (private) |
| 401 | fn | sqliteRowToLedgerSession | (private) |
| 426 | fn | sqliteRowToLedgerEvent | (private) |
| 443 | fn | readSqliteSessionById | (private) |
| 454 | fn | readLatestCompleteSqliteSessionByKey | (private) |
| 470 | fn | upsertSqliteSession | (private) |
| 561 | fn | estimateSqliteLedgerBytes | (private) |
| 568 | fn | estimateSessionRowBytes | (private) |
| 576 | fn | estimateEventRowBytes | (private) |
| 595 | fn | deleteOldestSqliteEvents | (private) |
| 621 | fn | trimSqliteLedger | (private) |
| 680 | fn | appendSqliteUpdate | (private) |
| 736 | fn | buildSqliteReplay | (private) |
| 749 | fn | createSqliteAcpEventLedger | pub |
| 757 | fn | mutate | (private) |

## src/acp/persistent-bindings.test.ts (820 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | PersistentBindingsModule | (private) |
| 22 | type | ConfiguredBinding | (private) |
| 23 | type | BindingRecordInput | (private) |
| 57 | fn | matchGroup | (private) |
| 61 | fn | parseTelegramTopicConversationForTest | (private) |
| 127 | fn | isSupportedFeishuDirectConversationId | (private) |
| 138 | fn | parseFeishuConversationIdForTest | (private) |
| 262 | fn | createConfiguredBindingTestPlugin | (private) |
| 272 | fn | createCfgWithBindings | (private) |
| 283 | fn | createDiscordBinding | (private) |
| 301 | fn | createTelegramGroupBinding | (private) |
| 318 | fn | createFeishuBinding | (private) |
| 339 | fn | resolveBindingRecord | (private) |
| 349 | fn | resolveDiscordBindingSpecBySession | (private) |

## src/acp/server.startup.test.ts (803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | GatewayClientCallbacks | (private) |
| 12 | type | GatewayClientAuth | (private) |
| 16 | type | ResolveGatewayClientBootstrap | (private) |
| 21 | type | GatewayClientOptions | (private) |
| 26 | type | MockAcpStream | (private) |
| 77 | class | MockGatewayClient | (private) |
| 143 | fn | loadConfig | (private) |
| 241 | fn | getMockGateway | (private) |
| 249 | fn | getGatewayBootstrapParams | (private) |
| 261 | fn | captureProcessSignalHandlers | (private) |
| 273 | fn | emitHelloAndWaitForAgentSideConnection | (private) |
| 284 | fn | getCapturedAcpStream | (private) |
| 297 | fn | readCapturedAcpMessages | (private) |
| 313 | fn | captureAcpMessagesAfterStartup | (private) |
| 329 | fn | stopServeWithSigint | (private) |

## src/acp/translator.lifecycle.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | createInitializeRequest | (private) |
| 33 | fn | createListSessionsRequest | (private) |
| 53 | fn | createResumeSessionRequest | (private) |
| 65 | fn | createCloseSessionRequest | (private) |
| 72 | fn | createPromptRequest | (private) |
| 80 | fn | createGatewaySessions | (private) |
| 97 | fn | createSessionRow | (private) |
| 115 | fn | settlePromptQuickly | (private) |
| 124 | fn | startPendingPrompt | (private) |

## src/acp/translator.stop-reason.test.ts (855 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | requireValue | (private) |
| 24 | fn | requireFirstRequestIdempotencyKey | (private) |
| 42 | fn | createDisconnectNoticeHarness | (private) |

## src/acp/translator.ts (1793 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | type | ChatSendAck | (private) |
| 116 | fn | normalizedChatSendAckStatus | (private) |
| 120 | fn | isTerminalChatSendAckFailure | (private) |
| 125 | fn | isTerminalChatSendAckSuccess | (private) |
| 132 | fn | getAvailableCommandsForAcp | (private) |
| 137 | type | DisconnectContext | (private) |
| 142 | type | PendingPrompt | (private) |
| 158 | type | PendingApprovalRelay | (private) |
| 166 | type | PendingToolCall | (private) |
| 173 | type | AcpGatewayAgentOptions | (private) |
| 178 | fn | isAdminScopeProvenanceRejection | (private) |
| 193 | fn | isGatewayCloseError | (private) |
| 198 | type | AgentWaitResult | (private) |
| 206 | fn | buildSystemInputProvenance | (private) |
| 215 | fn | buildSystemProvenanceReceipt | (private) |
| 232 | fn | hasExplicitSessionRouting | (private) |
| 242 | class | AcpGatewayAgent | pub |
| 704 | fn | sendWithProvenanceFallback | (private) |
| 705 | fn | markSendAccepted | (private) |
| 713 | fn | pending | (private) |
