# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/gateway/server/ws-connection/auth-context.test.ts (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | ConnectAuthState | (private) |
| 8 | type | VerifyDeviceTokenFn | (private) |
| 9 | type | VerifyBootstrapTokenFn | (private) |
| 12 | type | DeviceTokenResult | (private) |
| 13 | type | BootstrapTokenResult | (private) |
| 14 | type | ConnectAuthRole | (private) |
| 15 | type | TokenBucketScope | (private) |
| 21 | fn | createRateLimiter | (private) |
| 44 | fn | createPerScopeRateLimiter | (private) |
| 66 | fn | createTokenBucketRateLimiter | (private) |
| 77 | fn | createBaseState | (private) |
| 90 | fn | createBootstrapOnlyState | (private) |
| 98 | fn | createBootstrapFallbackState | (private) |
| 105 | fn | createVerifyDeviceToken | (private) |
| 111 | fn | createVerifyBootstrapToken | (private) |
| 117 | fn | resolveDeviceTokenDecision | (private) |
| 142 | fn | resolveBootstrapCandidateDecision | (private) |
| 163 | fn | resolveRejectedDeviceTokenDecision | (private) |
| 177 | fn | resolveBootstrapCandidateWithRateLimiter | (private) |
| 192 | fn | resolveBlockedBootstrapCandidate | (private) |
| 205 | fn | resolveInvalidBootstrapCandidate | (private) |
| 219 | fn | resolveSuccessfulNodeBootstrapDecision | (private) |
| 242 | fn | expectBootstrapTokenAccepted | (private) |

## src/gateway/server/ws-connection/connect-device-pairing.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | resolveTrustedProxyDeviceAutoApproveScopes | (private) |
| 76 | fn | authorizeGatewayConnectDevice | pub |
| 127 | fn | logUpgradeAudit | (private) |
| 153 | fn | requirePairing | (private) |

## src/gateway/server/ws-connection/handshake-auth-helpers.test.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | PairingLocalityParams | (private) |
| 19 | type | PairingLocalityOverrides | (private) |
| 30 | type | SilentLocalPairingParams | (private) |
| 31 | type | BackendSelfPairingParams | (private) |
| 32 | type | LocalCliSharedAuthScopeParams | (private) |
| 41 | fn | createRateLimiter | (private) |
| 73 | fn | resolveDockerPublishedBrowserLocality | (private) |
| 87 | fn | resolveLoopbackLocality | (private) |
| 105 | fn | resolveNodeLoopbackLocality | (private) |
| 109 | fn | resolveCliLoopbackLocality | (private) |
| 113 | fn | allowSilentLocalPairing | (private) |
| 124 | fn | skipBackendSelfPairing | (private) |
| 135 | fn | preserveLocalCliSharedAuthScopes | (private) |

## src/gateway/server/ws-connection/message-handler.post-connect-health.test.ts (1357 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | fn | waitForFast | (private) |
| 102 | fn | createLogger | (private) |
| 111 | fn | createHealthSummary | (private) |
| 130 | type | ConnectedTestClient | (private) |
| 147 | type | CloseGatewayConnection | (private) |
| 148 | type | SetCloseCause | (private) |
| 150 | fn | createConnectedTestClient | (private) |
| 173 | fn | createCloseMock | (private) |
| 177 | fn | createSetCloseCauseMock | (private) |
| 181 | fn | captureSecurityEvents | (private) |
| 194 | fn | attachGatewayHarness | (private) |
| 312 | fn | connectTrustedProxyUser | (private) |
| 599 | fn | connect | (private) |

## src/gateway/server/ws-connection/message-handler.worker.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 122 | fn | waitForWorkerProtocol | (private) |
| 126 | type | InferenceSink | (private) |
| 131 | fn | createLogger | (private) |
| 135 | fn | attachHarness | (private) |
| 212 | fn | send | (private) |
| 229 | fn | admit | (private) |

## src/gateway/server/ws-connection/worker-connection.ts (609 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | WorkerConnectionService | pub |
| 81 | type | WorkerInferenceConnectionService | (private) |
| 96 | type | WorkerInferenceSink | (private) |
| 101 | type | WorkerRespond | (private) |
| 110 | type | WorkerLogger | (private) |
| 114 | type | WorkerWsMessageHandlerParams | (private) |
| 133 | fn | workerProtocolError | (private) |
| 151 | fn | workerMaxPayload | (private) |
| 157 | fn | buildWorkerHello | (private) |
| 173 | fn | rejectWorkerRequest | (private) |
| 184 | fn | workerTranscriptCommitError | (private) |
| 194 | fn | workerLiveEventError | (private) |
| 202 | fn | workerInferenceError | (private) |
| 210 | fn | setSocketMaxPayload | (private) |
| 218 | fn | dispatchWorkerRequest | (private) |
| 352 | fn | attachWorkerWsMessageHandler | pub |
| 355 | fn | cleanup | (private) |
| 363 | fn | closeWorker | (private) |
| 367 | fn | failHandshake | (private) |
| 373 | fn | failFrame | (private) |
| 399 | fn | handleConnect | (private) |
| 467 | fn | handleMessage | (private) |
| 558 | fn | onMessage | (private) |
