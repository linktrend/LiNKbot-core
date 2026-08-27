# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/qa-lab/src/live-transports/matrix/substrate/client.test.ts (761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | resolveRequestUrl | (private) |
| 30 | fn | parseJsonRequestBody | (private) |

## extensions/qa-lab/src/live-transports/matrix/substrate/client.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | MatrixQaRegisterResponse | (private) |
| 40 | type | MatrixQaRoomCreateResponse | (private) |
| 44 | type | MatrixQaRoomInitialState | (private) |
| 50 | type | MatrixQaRegisteredAccount | (private) |
| 58 | type | MatrixQaProvisionResult | pub |
| 66 | fn | buildMatrixQaRoomInitialState | (private) |
| 84 | fn | uploadMatrixQaContent | (private) |
| 137 | fn | buildRegisteredAccount | (private) |
| 156 | fn | resolveMatrixQaLoginUser | (private) |
| 164 | fn | createMatrixQaClient | pub |
| 172 | fn | sendEvent | (private) |
| 467 | fn | joinRoomWithRetry | (private) |
| 491 | fn | resolveProvisionedRoomRequireMention | (private) |
| 495 | fn | resolveTopologyMemberAccounts | (private) |
| 509 | fn | provisionMatrixQaTopology | (private) |
| 570 | fn | provisionMatrixQaRoom | pub |

## extensions/qa-lab/src/live-transports/matrix/substrate/config.ts (681 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | MatrixQaReplyToMode | (private) |
| 7 | type | MatrixQaThreadRepliesMode | (private) |
| 8 | type | MatrixQaDmPolicy | (private) |
| 9 | type | MatrixQaGroupPolicy | (private) |
| 10 | type | MatrixQaAutoJoinMode | (private) |
| 11 | type | MatrixQaStreamingMode | (private) |
| 12 | type | MatrixQaActorRole | (private) |
| 13 | type | MatrixQaChunkMode | (private) |
| 14 | type | MatrixQaExecApprovalTarget | (private) |
| 15 | type | MatrixQaExecApprovalsEnabled | (private) |
| 16 | type | MatrixQaAllowBotsMode | (private) |
| 17 | type | MatrixQaStreamingConfig | (private) |
| 23 | type | MatrixQaAgentDefaultsOverrides | (private) |
| 35 | type | MatrixQaToolConfigOverrides | (private) |
| 39 | type | MatrixQaAudioConfigOverrides | (private) |
| 42 | type | MatrixQaGroupConfigOverrides | (private) |
| 48 | type | MatrixQaDmConfigOverrides | (private) |
| 55 | type | MatrixQaThreadBindingsConfigOverrides | (private) |
| 62 | type | MatrixQaExecApprovalsConfigOverrides | (private) |
| 69 | type | MatrixQaConfigOverrides | pub |
| 99 | type | MatrixQaConfigSnapshot | (private) |
| 132 | type | MatrixQaGroupSnapshot | (private) |
| 140 | type | MatrixQaGroupEntry | (private) |
| 141 | type | MatrixQaChannelConfig | (private) |
| 142 | type | MatrixQaChannelAccountConfig | (private) |
| 146 | type | MatrixQaAccountDmConfig | (private) |
| 156 | type | MatrixQaAccountExecApprovalsConfig | (private) |
| 164 | fn | normalizeMatrixQaAllowlist | (private) |
| 168 | fn | resolveMatrixQaGroupSnapshots | (private) |
| 201 | fn | buildMatrixQaGroupEntries | (private) |
| 217 | fn | resolveMatrixQaDmAllowFrom | (private) |
| 233 | fn | resolveMatrixQaDmConfigSnapshot | (private) |
| 251 | fn | resolveMatrixQaStreamingMode | (private) |
| 268 | fn | isMatrixQaStreamingConfig | (private) |
| 274 | fn | resolveMatrixQaStreamingPreviewToolProgress | (private) |
| 283 | fn | resolveMatrixQaAutoJoinAllowlist | (private) |
| 290 | fn | resolveMatrixQaRoleAllowlist | (private) |
| 304 | fn | resolveMatrixQaGroupAllowFrom | (private) |
| 323 | fn | buildMatrixQaAccountDmConfig | (private) |
| 342 | fn | buildMatrixQaAccountExecApprovalsConfig | (private) |
| 362 | fn | buildMatrixQaConfiguredBotAccounts | (private) |
| 415 | fn | buildMatrixQaChannelAccountConfig | (private) |
| 494 | fn | buildMatrixQaConfigSnapshot | (private) |
| 535 | fn | buildMatrixQaConfig | pub |

## extensions/qa-lab/src/live-transports/matrix/substrate/e2ee-client.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | MatrixQaE2eeRuntime | (private) |
| 39 | type | MatrixQaE2eeClientParams | (private) |
| 51 | type | MatrixQaPluginStateValue | (private) |
| 59 | fn | resolveMatrixQaPluginStateNamespaceKey | (private) |
| 63 | fn | resolveMatrixQaPluginStateRows | (private) |
| 75 | fn | pruneMatrixQaExpiredPluginState | (private) |
| 84 | fn | enforceMatrixQaPluginStateLimit | (private) |
| 103 | fn | createMatrixQaPluginStateSyncKeyedStore | (private) |
| 107 | fn | resolveExpiresAt | (private) |
| 111 | fn | register | (private) |
| 173 | fn | createMatrixQaPluginStateKeyedStore | (private) |
| 189 | type | MatrixQaE2eeScenarioClient | pub |
| 268 | fn | loadMatrixQaE2eeRuntime | pub |
| 274 | fn | createMatrixQaE2eeMatrixClient | (private) |
| 311 | fn | createMatrixQaE2eeScenarioClient | pub |
| 323 | fn | recordEvent | (private) |
| 339 | fn | recordVerificationSummary | (private) |
| 351 | fn | prime | (private) |
| 389 | fn | requireCrypto | (private) |
| 525 | fn | runMatrixQaE2eeBootstrap | pub |

## extensions/qa-lab/src/live-transports/matrix/substrate/recording-proxy.test.ts (718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | startRecordingTarget | (private) |
| 164 | fn | postState | (private) |
| 576 | fn | exchange | (private) |
| 611 | fn | request | (private) |

## extensions/qa-lab/src/live-transports/matrix/substrate/recording-proxy.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | MatrixQaStateFamily | (private) |
| 15 | type | MatrixQaBodyShape | (private) |
| 21 | type | MatrixQaRecordedExchange | (private) |
| 43 | type | MatrixQaInternalRecordedExchange | (private) |
| 47 | type | MatrixQaRouteExpectation | (private) |
| 54 | type | MatrixQaOrderingExpectation | (private) |
| 64 | type | MatrixQaScenarioRouteStateExpectation | (private) |
| 89 | type | MatrixQaRouteStateManifest | (private) |
| 104 | type | MatrixQaRecordingProxy | pub |
| 117 | fn | normalizeHeaderValue | (private) |
| 121 | fn | hasJsonContentType | (private) |
| 130 | fn | normalizeJsonMapKey | (private) |
| 188 | fn | collectJsonFields | (private) |
| 221 | fn | parseJsonBody | (private) |
| 250 | fn | collectStateFieldMarkers | (private) |
| 270 | fn | extractStateFieldMarkers | (private) |
| 275 | fn | buildBodyShape | (private) |
| 294 | fn | buildRedactedQuery | (private) |
| 308 | fn | resolveStateFamilies | (private) |
| 351 | fn | buildExpectation | (private) |
| 482 | fn | extractErrcode | (private) |
| 491 | fn | extractNextBatch | (private) |
| 500 | fn | startMatrixQaRecordingProxy | pub |
| 513 | fn | recordExchange | (private) |
