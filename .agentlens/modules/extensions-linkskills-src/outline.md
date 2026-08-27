# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/linkskills/src/exact-release.ts (586 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ExactReleaseLifecycle | pub |
| 12 | type | ExactReleaseState | pub |
| 13 | type | ExactReleaseStage | pub |
| 15 | type | ReleaseAttestation | pub |
| 22 | type | ExactRelease | pub |
| 39 | type | ExactReleaseValidationOptions | pub |
| 51 | type | AuthenticatedSkillsReleaseEvidence | pub |
| 67 | type | ExactReleaseTelemetry | pub |
| 74 | type | ExactReleaseRejectionCode | pub |
| 88 | type | ExactReleaseValidation | pub |
| 92 | type | ProgressiveReleaseState | pub |
| 137 | fn | isRecord | (private) |
| 141 | fn | snapshotPlainData | (private) |
| 198 | fn | isString | (private) |
| 204 | fn | parseTime | (private) |
| 227 | fn | hasOnlyKeys | (private) |
| 231 | fn | hasExactKeys | (private) |
| 235 | fn | canonical | (private) |
| 248 | fn | expectedPackageDigest | (private) |
| 263 | fn | expectedEligibilityDigest | (private) |
| 285 | fn | reject | (private) |
| 302 | fn | validateExactRelease | pub |
| 509 | fn | validateProgressiveReleaseTransition | pub |
| 584 | fn | exactReleaseTelemetry | pub |

## extensions/linkskills/src/runtime.ts (626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | LinkskillsTransportResult | pub |
| 39 | type | LinkskillsTransport | pub |
| 49 | type | LinkskillsDiagnostics | pub |
| 65 | type | LinkskillsLeaseRunner | pub |
| 76 | type | CreateLinkskillsRuntimeParams | (private) |
| 85 | type | EnqueueTelemetryParams | (private) |
| 92 | type | LinkskillsRuntime | pub |
| 113 | fn | isLimitExceeded | (private) |
| 121 | fn | isRecord | (private) |
| 125 | fn | buildOutboxKey | (private) |
| 130 | fn | computeBackoffMs | (private) |
| 137 | fn | sortedOutbox | (private) |
| 155 | fn | createLinkskillsRuntime | pub |
| 227 | fn | scheduleRetry | (private) |
| 289 | fn | drainBody | (private) |
| 543 | type | SkillsFakeDispatch | pub |
| 559 | fn | createSkillsFakeTransport | pub |

## extensions/linkskills/src/transport.ts (1465 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | ManagedMcpServerEntry | (private) |
| 68 | type | McpToolSession | (private) |
| 77 | type | LinkskillsMcpCallResult | pub |
| 83 | type | ResolveMachineTokenAccessFn | (private) |
| 89 | type | InvalidateMachineTokenCacheFn | (private) |
| 91 | type | ResolveLinkskillsTransportParams | pub |
| 110 | fn | isRecord | (private) |
| 114 | fn | mapHttpStatus | (private) |
| 158 | fn | isBoundedAuthReissueStatus | (private) |
| 162 | fn | isAuthReissueCandidateError | (private) |
| 173 | fn | createStaticResultTransport | (private) |
| 181 | fn | createDisabledTransport | (private) |
| 191 | fn | createRejectedFakeTransport | (private) |
| 201 | fn | resolveMachineTokenBearer | (private) |
| 228 | fn | resolveBearerToken | (private) |
| 288 | fn | coerceHeaderValue | (private) |
| 298 | fn | expandEnvTemplate | (private) |
| 302 | fn | machineTokenBindingsConflict | (private) |
| 337 | fn | selectMcpMachineToken | (private) |
| 390 | fn | resolveMcpHeaders | (private) |
| 511 | fn | readManagedServer | (private) |
| 526 | fn | openDefaultMcpSession | (private) |
| 591 | fn | sseEventSourceFetch | (private) |
| 647 | fn | buildLinkskillsHttpOperationUrl | pub |
| 702 | fn | buildLinkskillsHttpPolicy | (private) |
| 714 | fn | postLinkskillsHttpOperation | (private) |
| 749 | fn | createHttpTransport | (private) |
| 797 | fn | postOnce | (private) |
| 880 | fn | createMcpTransport | (private) |
| 922 | fn | runOnce | (private) |
| 1034 | fn | callLinkskillsHttpTool | pub |
| 1158 | fn | callLinkskillsMcpTool | pub |
| 1271 | fn | createLocalMachineTokenFacadeAdapter | (private) |
| 1339 | fn | resolveLinkskillsTransport | pub |
