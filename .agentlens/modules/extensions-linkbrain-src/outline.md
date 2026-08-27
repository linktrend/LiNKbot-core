# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/linkbrain/src/oauth-tool.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 124 | fn | hasActorOverride | (private) |
| 140 | fn | isRecord | (private) |
| 144 | fn | hasOnlyKeys | (private) |
| 148 | fn | isBoundedId | (private) |
| 157 | fn | isIsoTimestamp | (private) |
| 167 | fn | isBoundedString | (private) |
| 173 | fn | boundedJsonBytes | (private) |
| 212 | fn | validateAndSanitizeCapture | (private) |
| 301 | fn | validateCheckpoint | (private) |
| 364 | fn | resolveContextConfig | (private) |
| 368 | fn | hasExplicitAgentWriteGrant | (private) |
| 382 | fn | resolveTrustedTaskId | (private) |
| 393 | type | NativeWriteOutcome | (private) |
| 395 | type | InvokeNativeWrite | (private) |
| 447 | fn | boundedJson | (private) |
| 456 | fn | createLinkbrainReadTool | pub |
| 519 | fn | createLinkbrainWriteTool | pub |

## extensions/linkbrain/src/runtime.ts (600 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | LinkbrainTransportResult | pub |
| 33 | type | LinkbrainTransport | pub |
| 42 | type | LinkbrainDiagnostics | pub |
| 61 | type | LinkbrainLeaseRunner | pub |
| 72 | type | CreateLinkbrainRuntimeParams | (private) |
| 81 | type | EnqueueWriteParams | (private) |
| 89 | type | LinkbrainRuntime | pub |
| 110 | fn | isLimitExceeded | (private) |
| 118 | fn | buildOutboxKey | (private) |
| 128 | fn | computeBackoffMs | (private) |
| 135 | fn | transportArgsFromEnvelope | (private) |
| 150 | fn | sortedOutbox | (private) |
| 169 | fn | createLinkbrainRuntime | pub |
| 239 | fn | scheduleRetry | (private) |
| 301 | fn | drainBody | (private) |
| 529 | fn | createBrainFakeTransport | pub |

## extensions/linkbrain/src/transport.ts (1267 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | mcpCallToolArguments | (private) |
| 64 | type | ManagedMcpServerEntry | (private) |
| 87 | type | McpToolSession | (private) |
| 96 | type | LinkbrainMcpCallResult | pub |
| 100 | type | ResolveMachineTokenAccessFn | (private) |
| 106 | type | InvalidateMachineTokenCacheFn | (private) |
| 108 | type | ResolveLinkbrainTransportParams | pub |
| 125 | fn | isRecord | (private) |
| 129 | fn | mapHttpStatus | (private) |
| 173 | fn | isBoundedAuthReissueStatus | (private) |
| 177 | fn | isAuthReissueCandidateError | (private) |
| 188 | fn | createStaticResultTransport | (private) |
| 196 | fn | createDisabledTransport | (private) |
| 206 | fn | createRejectedFakeTransport | (private) |
| 216 | fn | resolveMachineTokenBearer | (private) |
| 243 | fn | resolveBearerToken | (private) |
| 303 | fn | coerceHeaderValue | (private) |
| 313 | fn | expandEnvTemplate | (private) |
| 317 | fn | machineTokenBindingsConflict | (private) |
| 352 | fn | selectMcpMachineToken | (private) |
| 405 | fn | resolveMcpHeaders | (private) |
| 526 | fn | readManagedServer | (private) |
| 541 | fn | openDefaultMcpSession | (private) |
| 606 | fn | sseEventSourceFetch | (private) |
| 654 | fn | createHttpTransport | (private) |
| 703 | fn | postOnce | (private) |
| 794 | fn | createMcpTransport | (private) |
| 842 | fn | runOnce | (private) |
| 955 | fn | callLinkbrainMcpTool | pub |
| 1070 | fn | createLocalMachineTokenFacadeAdapter | (private) |
| 1138 | fn | resolveLinkbrainTransport | pub |

## extensions/linkbrain/src/v2-assert.ts (671 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 115 | fn | assertObjectKeys | pub |
| 124 | type | SafeSnapshotState | (private) |
| 265 | fn | assertIso | (private) |
| 330 | fn | assertBrainV2PlatformIdentity | pub |
| 433 | fn | assertBrainV2Negotiation | pub |
| 469 | fn | assertBrainV2SafePayload | pub |
| 599 | fn | assertBrainV2Page | pub |
| 609 | fn | assertBrainV2PageSnapshot | pub |
