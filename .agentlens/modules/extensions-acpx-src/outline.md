# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## extensions/acpx/src/codex-auth-bridge.test.ts (884 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | makeTempDir | (private) |
| 27 | fn | quoteArg | (private) |
| 31 | fn | restoreEnv | (private) |
| 40 | fn | generatedCodexPaths | (private) |
| 52 | fn | generatedClaudePaths | (private) |
| 61 | fn | expectCodexWrapperCommand | (private) |
| 66 | fn | expectClaudeWrapperCommand | (private) |
| 71 | fn | expectWrapperToContainPathSuffix | (private) |
| 82 | fn | expectPathMissing | (private) |
| 93 | fn | captureGeneratedCodexWrapperStderr | (private) |
| 687 | fn | writeNext | (private) |

## extensions/acpx/src/codex-auth-bridge.ts (997 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | PackageManifest | (private) |
| 46 | fn | readSelfManifest | (private) |
| 51 | fn | readManifestDependencyVersion | (private) |
| 62 | fn | basename | (private) |
| 66 | fn | resolvePackageBinPath | (private) |
| 84 | fn | resolveInstalledAcpPackageBinPath | (private) |
| 108 | fn | resolveInstalledCodexAcpBinPath | (private) |
| 114 | fn | resolveInstalledClaudeAcpBinPath | (private) |
| 118 | type | DiagnosticRedactionRuleSpec | (private) |
| 231 | fn | renderDiagnosticRedactionRuleSpecs | (private) |
| 235 | fn | buildAdapterWrapperScript | (private) |
| 262 | fn | readOpenClawWrapperArg | (private) |
| 271 | fn | readOpenClawWrapperArgs | (private) |
| 286 | fn | safeDiagnosticFilePart | (private) |
| 291 | fn | resolveStderrLogPath | (private) |
| 308 | fn | redactDiagnosticText | (private) |
| 316 | fn | tailUtf16Safe | (private) |
| 337 | fn | hasUnclosedPrivateKeyBlock | (private) |
| 348 | fn | writeRedactedStderrLog | (private) |
| 366 | fn | redactIncompletePrivateKeyTail | (private) |
| 374 | fn | flushFinalizedStderrLogText | (private) |
| 400 | fn | appendStderrLog | (private) |
| 409 | fn | finishStderrLog | (private) |
| 416 | fn | stripOpenClawWrapperArgs | (private) |
| 442 | fn | resolveNpmCliPath | (private) |
| 497 | fn | killChildTree | (private) |
| 580 | fn | buildCodexAcpWrapperScript | (private) |
| 626 | fn | mergeCodexConfig | (private) |
| 677 | fn | buildClaudeAcpWrapperScript | (private) |
| 690 | fn | readSourceCodexConfig | (private) |
| 701 | fn | prepareIsolatedCodexHome | (private) |
| 724 | fn | makeGeneratedWrapperExecutableIfPossible | (private) |
| 732 | fn | writeCodexAcpWrapper | (private) |
| 742 | fn | writeClaudeAcpWrapper | (private) |
| 752 | fn | buildWrapperCommand | (private) |
| 756 | fn | isAcpPackageSpec | (private) |
| 761 | fn | isAcpBinName | (private) |
| 767 | fn | isPackageRunnerCommand | (private) |
| 771 | fn | extractConfiguredAdapterArgs | (private) |
| 810 | fn | isConfigRecord | (private) |
| 814 | fn | mergeConfigRecords | (private) |
| 835 | fn | parseLegacyCodexConfigAssignment | (private) |
| 851 | type | LegacyCodexArgsMigration | (private) |
| 857 | fn | migrateLegacyCodexArgs | (private) |
| 885 | type | CodexAdapterLaunch | (private) |
| 890 | fn | resolveCodexAdapterLaunch | (private) |
| 921 | fn | buildCodexAcpWrapperCommand | (private) |
| 932 | fn | persistMigratedCodexMcpConfig | (private) |
| 946 | fn | buildClaudeAcpWrapperCommand | (private) |
| 959 | fn | prepareAcpxCodexAuthConfig | pub |

## extensions/acpx/src/pi-session-catalog-plugin.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | validatePiThreadId | (private) |
| 56 | fn | isOptionalString | (private) |
| 60 | fn | isOptionalNumber | (private) |
| 64 | fn | isNodeSession | (private) |
| 87 | fn | isNodeTranscriptItem | (private) |
| 100 | fn | parseNodeParams | (private) |
| 111 | fn | fullConfigCatalogEnabled | (private) |
| 122 | fn | isPiSessionCatalogEnabled | (private) |
| 130 | fn | createPiSessionNodeHostCommands | (private) |
| 131 | fn | storeAvailable | (private) |
| 195 | fn | createPiSessionNodeInvokePolicies | (private) |
| 206 | fn | nodeLabel | (private) |
| 210 | fn | unwrapNodePayload | (private) |
| 216 | type | CatalogNode | (private) |
| 218 | fn | setTerminalCapability | (private) |
| 225 | fn | listPiNodeHost | (private) |
| 277 | fn | parseNodeSessionPage | (private) |
| 296 | fn | parseNodeTranscriptPage | (private) |
| 318 | fn | listPiHosts | (private) |
| 375 | fn | requireLocalPiSession | (private) |
| 384 | fn | resolveNodePiSession | (private) |
| 404 | fn | openPiTerminal | (private) |
| 459 | fn | readPiTranscript | (private) |
| 505 | fn | registerPiSessionCatalog | pub |

## extensions/acpx/src/pi-session-catalog.test.ts (994 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | createPiStore | (private) |
| 118 | fn | installFakePi | (private) |
| 128 | fn | registerPiNodeHostCommands | (private) |

## extensions/acpx/src/runtime.test.ts (2728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | TestSessionStore | (private) |
| 32 | fn | makeRuntime | (private) |
| 112 | fn | makeLeaseStore | (private) |
| 136 | fn | readFirstEnsureSessionInput | (private) |
| 223 | fn | readScopedMcpEnv | (private) |

## extensions/acpx/src/runtime.ts (1558 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | AcpSessionStore | (private) |
| 49 | type | AcpSessionRecord | (private) |
| 50 | type | AcpLoadedSessionRecord | (private) |
| 51 | type | BaseAcpxRuntimeTestOptions | (private) |
| 52 | type | OpenClawAcpxRuntimeOptions | (private) |
| 59 | type | AcpxRuntimeTestOptions | (private) |
| 62 | type | OpenClawRuntimeTurnInput | (private) |
| 63 | type | OpenClawRuntimeEnsureInput | (private) |
| 64 | type | OpenClawRuntimeHandle | (private) |
| 65 | type | AcpxDelegateEnsureInput | (private) |
| 66 | type | AcpxMcpServer | (private) |
| 72 | type | ResetAwareSessionStore | (private) |
| 76 | type | OpenClawLeaseSessionMetadata | (private) |
| 81 | fn | withOpenClawManagedTurnTimeout | (private) |
| 90 | fn | withOpenClawLeaseSessionMetadata | (private) |
| 101 | type | AcpxLaunchLeaseContext | (private) |
| 112 | fn | safeDiagnosticFilePart | (private) |
| 116 | fn | codexWrapperStderrLogFileName | (private) |
| 120 | fn | compactDiagnosticText | (private) |
| 124 | fn | isGenericInternalAcpErrorMessage | (private) |
| 128 | fn | isGenericInternalAcpError | (private) |
| 135 | fn | readCodexWrapperStderrTail | (private) |
| 155 | fn | readSessionRecordName | (private) |
| 163 | fn | readRecordAgentCommand | (private) |
| 171 | fn | readRecordCwd | (private) |
| 179 | fn | readRecordResetOnNextEnsure | (private) |
| 190 | fn | readRecordAgentPid | (private) |
| 205 | fn | readOpenClawLeaseIdFromRecord | (private) |
| 213 | fn | readOpenClawGatewayInstanceIdFromRecord | (private) |
| 223 | fn | extractGeneratedWrapperPath | (private) |
| 234 | fn | selectCurrentSessionLease | (private) |
| 253 | fn | createResetAwareSessionStore | (private) |
| 359 | type | CodexAcpModelOverride | (private) |
| 364 | type | CodexAcpModelClassification | (private) |
| 368 | fn | normalizeAgentName | (private) |
| 373 | fn | readAgentFromSessionKey | (private) |
| 382 | fn | readAgentFromHandle | (private) |
| 393 | fn | readAgentCommandFromRecord | (private) |
| 397 | fn | readAgentPidFromRecord | (private) |
| 401 | fn | basename | (private) |
| 405 | fn | isEnvAssignment | (private) |
| 409 | fn | unwrapEnvCommand | (private) |
| 425 | fn | matchesExecutableName | (private) |
| 430 | fn | matchesPackageSpec | (private) |
| 435 | fn | stripModuleExtension | (private) |
| 439 | fn | isAcpCommand | (private) |
| 464 | fn | isOpenClawBridgeCommand | (private) |
| 479 | fn | isCodexAcpCommand | (private) |
| 486 | fn | isClaudeAcpCommand | (private) |
| 495 | fn | isCursorAcpCommand | (private) |
| 512 | fn | stripCursorAcpModelFlag | (private) |
| 530 | fn | readCursorAcpModelFlag | (private) |
| 547 | fn | appendCursorAcpModelFlag | (private) |
| 559 | fn | failUnsupportedCodexAcpModel | (private) |
| 574 | fn | assertSupportedRuntimeSessionMode | (private) |
| 587 | fn | failUnsupportedCodexAcpThinking | (private) |
| 594 | fn | normalizeCodexAcpReasoningEffort | (private) |
| 605 | fn | isCodexAcpReasoningEffortAlias | (private) |
| 610 | fn | classifyCodexAcpModelRequest | (private) |
| 660 | fn | withCodexSessionModel | (private) |
| 673 | fn | normalizeClaudeAcpModelOverride | (private) |
| 684 | fn | withAcpxSessionOptions | (private) |
| 695 | fn | isAcpModelCapabilityMissingError | (private) |
| 701 | fn | ensureDelegateSessionWithModelFallback | (private) |
| 715 | fn | quoteShellArg | (private) |
| 722 | fn | appendCodexAcpConfigOverrides | (private) |
| 733 | fn | createModelScopedAgentRegistry | (private) |
| 757 | fn | resolveAgentCommand | (private) |
| 769 | fn | shouldUseBridgeSafeDelegateForCommand | (private) |
| 773 | fn | shouldUseDistinctBridgeDelegate | (private) |
| 778 | fn | withManagedToolsMcpSessionEnv | (private) |
| 815 | class | AcpxRuntime | pub |
| 1310 | fn | readCodexTurnFailureStderr | (private) |

## extensions/acpx/src/service.test.ts (849 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 119 | fn | restoreEnv | (private) |
| 128 | fn | makeTempDir | (private) |
| 151 | fn | createServiceContext | (private) |
| 165 | fn | createOpenKeyedStore | (private) |
| 174 | fn | createAcpxRuntimeService | (private) |
| 184 | fn | openGatewayInstanceStore | (private) |
| 191 | fn | openProcessLeaseStore | (private) |
| 195 | fn | createMockRuntime | (private) |
| 208 | fn | createStartupTraceRecorder | (private) |
| 229 | fn | readFirstRuntimeFactoryInput | (private) |
