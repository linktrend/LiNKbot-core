# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 10 large files in this module.

## src/agents/harness/compaction.ts (542 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | NativeCompactionRequest | (private) |
| 59 | type | InternalAgentHarnessCompactionOptions | (private) |
| 63 | type | InternalAgentHarnessCompactionCapability | (private) |
| 71 | type | InternalAgentHarness | (private) |
| 72 | type | HarnessCompactionResolvedAuth | (private) |
| 74 | fn | runtimePlanRequiresHostApiKey | (private) |
| 78 | fn | resolveHarnessCompactIdentity | (private) |
| 93 | fn | stripHarnessOwnedAuthInputs | (private) |
| 102 | fn | buildHarnessCompactionModelProvider | (private) |
| 123 | fn | resolveHarnessCompactApiKey | (private) |
| 151 | fn | fallbackResolution | (private) |
| 169 | fn | selectPreparedHarness | (private) |
| 199 | fn | resolvePreparedModel | (private) |
| 239 | fn | prepareRuntimeAuth | (private) |
| 286 | fn | materializeModel | (private) |
| 361 | fn | maybeCompactAgentHarnessSession | pub |

## src/agents/harness/context-engine-lifecycle.test.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | registerTestContextEngine | (private) |
| 41 | fn | textMessage | (private) |
| 49 | fn | runtimeContextMessage | (private) |
| 62 | fn | createContextEngine | (private) |
| 83 | fn | uniqueConfiguredProofEngineId | (private) |
| 464 | fn | runAssembleWithEngineResult | (private) |

## src/agents/harness/lifecycle.test.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | createAttemptParams | (private) |
| 44 | fn | createDiagnosticTrace | (private) |
| 52 | fn | createAttemptResult | (private) |
| 78 | fn | createContextEngineRequiringAssembly | (private) |
| 103 | fn | flushDiagnosticEvents | (private) |
| 109 | fn | captureDiagnosticEvents | (private) |

## src/agents/harness/native-hook-relay.test.ts (3568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | isRecord | (private) |
| 47 | fn | requireRecord | (private) |
| 56 | fn | readRecordField | (private) |
| 64 | fn | expectRecordFields | (private) |
| 70 | fn | getMockCallArg | (private) |
| 79 | fn | getOnlyNativeHookRelayInvocation | (private) |
| 85 | fn | waitForNativeHookRelayBridgeRecord | (private) |
| 99 | fn | writeForeignNativeHookRelayBridgeRecordForTests | (private) |
| 119 | fn | uniqueNativeHookRelayIdForTests | (private) |
| 123 | fn | nativeHookRelayStateDbArgForTests | (private) |
| 127 | fn | openDeferredNativeHookRelayBridgeRequest | (private) |
| 195 | type | NativeHookRelaySharedStateForTests | (private) |
| 204 | fn | getNativeHookRelaySharedStateForTests | (private) |
| 218 | type | NativeHookRelayModuleForTests | (private) |
| 220 | fn | importDuplicateNativeHookRelayModuleForTests | (private) |
| 1866 | fn | invoke | (private) |
| 3490 | fn | formatPreview | (private) |
| 3502 | fn | formatKeyPreview | (private) |

## src/agents/harness/native-hook-relay.ts (2466 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | JsonValue | (private) |
| 66 | type | NativeHookRelayEvent | pub |
| 67 | type | NativeHookRelayProvider | pub |
| 69 | type | NativeHookRelayInvocation | (private) |
| 91 | type | NativeHookRelayProcessResponse | pub |
| 98 | type | NativeHookRelayRegistration | (private) |
| 121 | type | NativeHookRelayRegistrationHandle | pub |
| 132 | type | RegisterNativeHookRelayParams | (private) |
| 153 | type | NativeHookRelayCommandOptions | (private) |
| 160 | type | NativeHookRelayCommandForEventOptions | (private) |
| 164 | type | InvokeNativeHookRelayParams | (private) |
| 173 | type | InvokeNativeHookRelayBridgeParams | (private) |
| 179 | type | NativeHookRelayInvocationMetadata | (private) |
| 195 | type | NativeHookRelayProviderAdapter | (private) |
| 241 | fn | resolveNativeHookRelayExpiresAtMs | (private) |
| 245 | type | NativeHookRelayPermissionDecision | (private) |
| 247 | type | NativeHookRelayPermissionApprovalResult | (private) |
| 252 | type | NativeHookRelaySharedState | (private) |
| 262 | type | ActiveNativeHookRelayRegistration | (private) |
| 268 | type | ActiveNativeHookRelayRegistrationHandle | (private) |
| 274 | fn | getNativeHookRelaySharedState | (private) |
| 299 | type | NativeHookRelayPermissionApprovalRequest | (private) |
| 313 | type | NativeHookRelayPermissionApprovalRequester | (private) |
| 317 | type | NativeHookRelayDeferredToolApprovalRequester | (private) |
| 319 | type | NativeHookRelayPreToolUseApproval | (private) |
| 325 | type | NativeHookRelayDeferredApprovalOutcome | (private) |
| 337 | type | NativeHookRelayBridgeRegistration | (private) |
| 344 | type | NativeHookRelayBridgeRequestAuth | (private) |
| 420 | fn | registerNativeHookRelay | pub |
| 522 | fn | unregisterNativeHookRelay | (private) |
| 537 | fn | normalizeRelayId | (private) |
| 548 | fn | normalizeRelayGeneration | (private) |
| 559 | fn | resolveNativeHookRelayNicePrefix | (private) |
| 570 | fn | resolveNativeHookRelayCommandTimeoutMs | (private) |
| 585 | fn | buildNativeHookRelayCommand | pub |
| 599 | fn | buildNativeHookRelayCommandWithStateDatabase | (private) |
| 639 | fn | nativePreToolUseMayRunLoopDetection | (private) |
| 652 | fn | nativeHookRelayEventHasLocalWork | (private) |
| 670 | fn | invokeNativeHookRelay | pub |
| 735 | fn | projectNativeHookRelayPreToolUseFailure | (private) |
| 782 | fn | hasNativeHookRelayInvocation | pub |
| 799 | fn | resolveNativeHookRelayDeferredToolApproval | pub |
| 826 | fn | resolveNativeHookRelayPreToolUseApproval | (private) |
| 860 | fn | invokeNativeHookRelayBridge | pub |
| 912 | fn | renderNativeHookRelayUnavailableResponse | pub |
| 937 | fn | isNativeHookRelayBridgeStaleRegistrationError | pub |
| 943 | fn | recordNativeHookRelayInvocation | (private) |
| 953 | fn | removeNativeHookRelayInvocations | (private) |
| 961 | fn | canAcceptNativeHookRelayGenerationMismatch | (private) |
| 976 | fn | nativeHookRelayPreToolUseApprovalKey | (private) |
| 984 | fn | setNativeHookRelayPreToolUseApproval | (private) |
| 1015 | fn | removeNativeHookRelayPreToolUseApprovals | (private) |
| 1025 | fn | pruneExpiredNativeHookRelays | (private) |
| 1033 | fn | isNativeHookRelayBridgePidDead | (private) |
| 1042 | fn | registerNativeHookRelayBridge | (private) |
| 1103 | fn | writeNativeHookRelayBridgeRecordForRegistration | (private) |
| 1117 | fn | resolveNativeHookRelayBridgeRecord | (private) |
| 1141 | fn | unregisterNativeHookRelayBridge | (private) |
| 1151 | fn | removeRecord | (private) |
| 1175 | fn | handleNativeHookRelayBridgeRequest | (private) |
| 1226 | fn | isCurrentNativeHookRelayBridgeRequest | (private) |
| 1232 | fn | readNativeHookRelayBridgeBody | (private) |
| 1246 | fn | readNativeHookRelayBridgePayload | (private) |
| 1259 | fn | writeNativeHookRelayBridgeJson | (private) |
| 1272 | fn | readNativeHookRelayBridgeRecord | (private) |
| 1283 | fn | readNativeHookRelayBridgeRecordIfExists | (private) |
| 1295 | fn | invokeNativeHookRelayBridgeRecord | (private) |
| 1303 | fn | postNativeHookRelayBridgeRecord | (private) |
| 1311 | fn | resolveOnce | (private) |
| 1317 | fn | rejectOnce | (private) |
| 1378 | fn | isRetryableNativeHookRelayBridgeError | (private) |
| 1388 | fn | isRetryableNativeHookRelayBridgeLookupError | (private) |
| 1399 | fn | delay | (private) |
| 1405 | fn | processNativeHookRelayInvocation | (private) |
| 1422 | fn | runNativeHookRelayPreToolUse | (private) |
| 1484 | fn | runNativeHookRelayPostToolUse | (private) |
| 1528 | fn | runNativeHookRelayPermissionRequest | (private) |
| 1585 | fn | runNativeHookRelayBeforeAgentFinalize | (private) |
| 1626 | fn | startNativeHookRelayPermissionApprovalWithBudget | (private) |
| 1647 | fn | nativeHookRelayPermissionApprovalKey | (private) |
| 1661 | fn | nativeHookRelayPermissionAllowAlwaysKey | (private) |
| 1680 | fn | permissionRequestFallbackKey | (private) |
| 1688 | fn | permissionRequestToolInputKeyFingerprint | (private) |
| 1706 | fn | permissionRequestContentFingerprint | (private) |
| 1718 | fn | updateJsonHash | (private) |
| 1777 | fn | readBoundedOwnKeys | (private) |
| 1797 | fn | consumeNativeHookRelayPermissionBudget | (private) |
| 1811 | fn | hasNativeHookRelayPermissionAllowAlways | (private) |
| 1828 | fn | rememberNativeHookRelayPermissionAllowAlways | (private) |
| 1848 | fn | pruneNativeHookRelayPermissionAllowAlways | (private) |
| 1861 | fn | removeNativeHookRelayPermissionState | (private) |
| 1870 | fn | snapshotNativeHookRelayPayload | (private) |
| 1876 | fn | snapshotJsonValue | (private) |
| 1906 | fn | snapshotString | (private) |
| 1925 | fn | normalizeNativeHookInvocation | (private) |
| 1947 | fn | getNativeHookRelayProviderAdapter | (private) |
| 1953 | fn | normalizeCodexHookMetadata | (private) |
| 1999 | fn | readCodexToolInput | (private) |
| 2015 | fn | normalizeCodexToolInput | (private) |
| 2029 | fn | normalizeCodexCommand | (private) |
| 2039 | fn | nativeHookRelayParamsWereRewritten | (private) |
| 2049 | fn | readCodexToolResponse | (private) |
| 2054 | fn | readNativeHookRelayApprovalMode | (private) |
| 2059 | fn | normalizeNativeHookToolName | (private) |
| 2064 | fn | requestNativeHookRelayPermissionApproval | (private) |
| 2128 | fn | waitForNativeHookRelayApprovalDecision | (private) |
| 2160 | fn | formatPermissionApprovalDescription | (private) |
| 2172 | fn | formatToolInputPreview | (private) |
| 2186 | fn | sanitizeApprovalText | (private) |
| 2195 | fn | isUnsafeApprovalCodePoint | (private) |
| 2207 | fn | nativeHookRelayProviderDisplayName | (private) |
| 2214 | fn | truncateText | (private) |
| 2221 | fn | resolveOpenClawCliExecutable | (private) |
| 2252 | fn | normalizeAllowedEvents | (private) |
| 2261 | fn | normalizePositiveInteger | (private) |
| 2267 | fn | normalizeOptionalPositiveInteger | (private) |
| 2273 | fn | shellQuoteArgs | (private) |
| 2277 | fn | shellQuoteArg | (private) |
| 2287 | fn | readNativeHookRelayProvider | (private) |
| 2294 | fn | readNativeHookRelayEvent | (private) |
| 2306 | fn | readNonEmptyString | (private) |
| 2313 | fn | readOptionalString | (private) |
| 2317 | fn | readOptionalBoolean | (private) |
| 2321 | fn | isJsonValue | (private) |
| 2392 | fn | isJsonObject | (private) |

## src/agents/harness/runtime-plugin.test.ts (634 lines)

_No symbols extracted._

## src/agents/harness/selection.test.ts (2682 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 143 | fn | createAttemptParams | (private) |
| 162 | fn | createAttemptResult | (private) |
| 187 | fn | createContextEngineRequiringAssembly | (private) |
| 212 | fn | registerFailingCodexHarness | (private) |
| 229 | fn | registerSuccessfulCodexHarness | (private) |
| 244 | fn | groupSenderDenyAllConfig | (private) |
| 262 | fn | groupDenyAllConfig | (private) |
| 276 | fn | providerRuntimeConfig | (private) |
| 290 | fn | agentModelRuntimeConfig | (private) |
| 316 | type | CompactSessionParams | (private) |
| 336 | fn | createCompactionParams | (private) |
| 350 | fn | registerTestCompactor | (private) |

## src/agents/harness/selection.ts (780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | AgentHarnessAvailabilityParams | (private) |
| 65 | type | AgentHarnessSelectionParams | (private) |
| 76 | type | AgentHarnessSelectionDecisionParams | (private) |
| 81 | type | AgentHarnessPreparedModelProvider | pub |
| 85 | type | AgentHarnessAvailabilityDecision | (private) |
| 97 | type | AgentHarnessSelectionCandidate | (private) |
| 106 | type | AgentHarnessSelectionDecision | (private) |
| 126 | type | PluginHarnessToolPolicyContext | (private) |
| 148 | type | PluginHarnessToolPolicy | (private) |
| 150 | type | ResolvedPluginHarnessToolPolicies | (private) |
| 157 | fn | listPluginAgentHarnesses | (private) |
| 161 | fn | resolveAvailableAgentHarnessPolicy | pub |
| 167 | fn | resolveAgentHarnessAvailabilityDecision | (private) |
| 211 | fn | selectAgentHarness | pub |
| 216 | fn | selectAgentHarnessForPreparedModelProviders | pub |
| 248 | fn | agentHarnessBuildsOpenClawTools | pub |
| 253 | fn | agentHarnessExposesOpenClawTools | pub |
| 257 | fn | selectAgentHarnessDecision | (private) |
| 449 | fn | runAgentHarnessAttempt | pub |
| 493 | fn | runAttempt | (private) |
| 518 | fn | isSystemAgentOnlyAllowlist | (private) |
| 522 | fn | withoutInternalHarnessAuthority | (private) |
| 532 | fn | preparePluginHarnessParams | (private) |
| 548 | fn | applyPluginHarnessDenyAllToolPolicy | (private) |
| 569 | fn | resolvePluginHarnessPolicyToolsAllow | pub |
| 580 | fn | resolvePluginHarnessDenyAllToolPolicyPrompt | (private) |
| 598 | fn | resolvePluginHarnessToolPolicies | (private) |
| 665 | fn | resolveSenderScopedGroupToolPolicy | (private) |
| 683 | fn | hasSenderIdentity | (private) |
| 692 | fn | appendPluginHarnessToolPolicyPrompt | (private) |
| 700 | fn | policyDeniesAllTools | (private) |
| 704 | fn | policyRestrictsNativeTools | (private) |
| 721 | fn | listHarnessCandidates | (private) |
| 729 | fn | toSelectionCandidate | (private) |
| 743 | fn | buildSelectionDecision | (private) |
| 758 | fn | logAgentHarnessSelection | (private) |
| 777 | fn | formatProviderModel | (private) |

## src/agents/harness/tool-result-middleware.test.ts (659 lines)

_No symbols extracted._

## src/agents/harness/tool-result-middleware.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | MiddlewareContentBlock | (private) |
| 33 | type | MiddlewareContentCoerceState | (private) |
| 34 | type | MiddlewareToolResultCoerceOptions | (private) |
| 39 | fn | isValidMiddlewareContentBlock | (private) |
| 57 | fn | hasValidMiddlewareDetailsShape | (private) |
| 105 | fn | isValidMiddlewareDetails | (private) |
| 116 | fn | isValidMiddlewareToolResult | (private) |
| 128 | fn | createMiddlewareContentCoerceState | (private) |
| 132 | fn | descendMiddlewareContentCoerceState | (private) |
| 150 | fn | stringifyMiddlewareTextPayload | (private) |
| 173 | fn | coerceMiddlewareText | (private) |
| 211 | fn | appendMiddlewareContentBlock | (private) |
| 240 | fn | coerceMiddlewareContentArray | (private) |
| 276 | fn | coerceMiddlewareContentBlocks | (private) |
| 320 | fn | coerceMiddlewareToolResult | (private) |
| 376 | fn | sanitizeMiddlewareDetailsValue | (private) |
| 412 | fn | sanitizeToolResultForMiddleware | (private) |
| 429 | fn | buildMiddlewareFailureResult | (private) |
| 444 | fn | buildDeliveredMessagingFailureFallback | (private) |
| 471 | fn | reconcileDeliveredMessagingFailure | (private) |
| 480 | fn | createAgentToolResultMiddlewareRunner | pub |
