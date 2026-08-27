# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## src/node-host/invoke-system-run-plan.test.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | PathTokenSetup | (private) |
| 20 | type | HardeningCase | (private) |
| 33 | type | ScriptOperandFixture | (private) |
| 40 | type | RuntimeFixture | (private) |
| 51 | type | UnsafeRuntimeInvocationCase | (private) |
| 59 | fn | requirePathToken | (private) |
| 66 | fn | sha256FileSync | (private) |
| 70 | fn | canWritePathSync | (private) |
| 79 | fn | canMutateNativeBinaryFixturePath | (private) |
| 86 | fn | createScriptOperandFixture | (private) |
| 128 | fn | createFixtureDir | (private) |
| 134 | fn | writeFakeRuntimeBin | (private) |
| 145 | fn | withFakeRuntimeBins | (private) |
| 164 | fn | uniqueRuntimeBinNames | (private) |
| 180 | fn | resolveNativeBinaryFixturePath | (private) |
| 197 | fn | expectShellPayloadApprovalDenied | (private) |
| 217 | fn | expectMutableFileOperandApprovalPlan | (private) |
| 233 | fn | writeScriptOperandFixture | (private) |
| 240 | fn | withScriptOperandPlanFixture | (private) |
| 260 | fn | runNamedCase | (private) |
| 268 | fn | expectRuntimeApprovalDenied | (private) |
| 273 | fn | expectApprovalPlanWithoutMutableOperand | (private) |
| 460 | fn | checkCase | (private) |

## src/node-host/invoke-system-run-plan.ts (1178 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | ApprovedCwdSnapshot | pub |
| 161 | fn | normalizeOptionFlag | (private) |
| 165 | fn | readTrimmedArgToken | (private) |
| 181 | fn | isPosixShellOptionToken | (private) |
| 185 | type | FileOperandCollection | (private) |
| 190 | fn | pathComponentsFromRootSync | (private) |
| 204 | fn | isOwnedByCurrentProcessSync | (private) |
| 215 | fn | isMutableByCurrentProcessSync | (private) |
| 224 | fn | hasMutableSymlinkPathComponentSync | (private) |
| 241 | fn | pathLooksMutableForShellPayloadSync | (private) |
| 262 | fn | shouldPinExecutableForApproval | (private) |
| 272 | fn | hashFileContentsSync | (private) |
| 276 | fn | looksLikePathToken | (private) |
| 287 | fn | resolvesToExistingFileSync | (private) |
| 298 | fn | isKnownBinaryExecutableHeader | (private) |
| 326 | fn | isLikelyScriptLikePathSync | (private) |
| 361 | fn | unwrapArgvForMutableOperand | (private) |
| 395 | fn | resolvePosixShellScriptOperandIndex | (private) |
| 438 | fn | resolveOptionFilteredFileOperandIndex | (private) |
| 471 | fn | resolveOptionFilteredPositionalIndex | (private) |
| 503 | fn | collectExistingFileOperandIndexes | (private) |
| 553 | fn | resolveGenericInterpreterScriptOperandIndex | (private) |
| 570 | fn | resolveBunScriptOperandIndex | (private) |
| 600 | fn | resolveDenoRunScriptOperandIndex | (private) |
| 615 | fn | hasRubyUnsafeApprovalFlag | (private) |
| 642 | fn | hasPerlUnsafeApprovalFlag | (private) |
| 669 | fn | isMutableScriptRunner | (private) |
| 677 | fn | resolveMutableFileOperandIndex | (private) |
| 732 | fn | shellPayloadNeedsStableBinding | (private) |
| 762 | fn | requiresStableInterpreterApprovalBindingWithShellCommand | (private) |
| 787 | fn | pnpmDlxInvocationNeedsFailClosedBinding | (private) |
| 829 | fn | pnpmDlxTailNeedsFailClosedBinding | (private) |
| 866 | fn | pnpmDlxTailMayNeedStableBinding | (private) |
| 876 | fn | resolveMutableFileOperandSnapshotSync | pub |
| 932 | fn | resolveCanonicalApprovalCwdSync | (private) |
| 992 | fn | revalidateApprovedCwdSnapshot | pub |
| 1000 | fn | revalidateApprovedMutableFileOperand | pub |
| 1026 | fn | hardenApprovedExecutionPaths | pub |
| 1120 | fn | buildSystemRunApprovalPlan | pub |

## src/node-host/invoke-system-run.test.ts (3630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | HandleSystemRunInvokeOptions | (private) |
| 43 | type | MockedRunCommand | (private) |
| 44 | type | MockedRunViaMacAppExecHost | (private) |
| 45 | type | MockedSendInvokeResult | (private) |
| 46 | type | MockedSendExecFinishedEvent | (private) |
| 47 | type | MockedSendNodeEvent | (private) |
| 73 | fn | createFixtureDir | (private) |
| 95 | fn | createLocalRunResult | (private) |
| 107 | fn | createTempExecutable | (private) |
| 115 | fn | createStrictInlineEvalApprovalPlan | (private) |
| 130 | fn | bindCurrentPolicyToPlan | (private) |
| 141 | fn | expectInvokeOk | (private) |
| 152 | fn | expectInvokeErrorMessage | (private) |
| 166 | fn | requireInvokeResult | (private) |
| 179 | fn | requireFirstRunCommandArgs | (private) |
| 183 | fn | requireMacExecHostCall | (private) |
| 208 | fn | firstMockCallArg | (private) |
| 220 | fn | expectExecDeniedEvent | (private) |
| 232 | fn | expectApprovalRequiredDenied | (private) |
| 243 | fn | expectApprovalStateWriteDenied | (private) |
| 257 | fn | createMutableScriptOperandFixture | (private) |
| 281 | fn | createRuntimeScriptOperandFixture | (private) |
| 327 | fn | buildNestedEnvShellCommand | (private) |
| 331 | fn | createMacExecHostSuccess | (private) |
| 345 | fn | createAllowlistOnMissApprovals | (private) |
| 361 | fn | resolveProductionExecSecurity | (private) |
| 365 | fn | resolveProductionExecAsk | (private) |
| 369 | fn | createInvokeSpies | (private) |
| 381 | fn | withTempApprovalsHome | (private) |
| 392 | fn | withPathTokenCommand | (private) |
| 407 | fn | withFakeRuntimeOnPath | (private) |
| 430 | fn | expectCommandPinnedToCanonicalPath | (private) |
| 444 | fn | resolveStatTargetPath | (private) |
| 457 | fn | withMockedCwdIdentityDrift | (private) |
| 486 | fn | runSystemInvoke | (private) |
| 1757 | fn | expectNestedEnvShellDenied | (private) |

## src/node-host/invoke-system-run.ts (1126 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | SystemRunInvokeResult | (private) |
| 85 | type | SystemRunDeniedReason | (private) |
| 95 | type | SystemRunExecutionContext | (private) |
| 102 | type | SystemRunParsePhase | (private) |
| 125 | type | SystemRunPolicyPhase | (private) |
| 165 | type | ExecToolConfig | (private) |
| 167 | type | EffectiveSystemRunExecPolicy | (private) |
| 176 | fn | warnWritableTrustedDirOnce | (private) |
| 183 | fn | normalizeDeniedReason | (private) |
| 198 | fn | resolveAgentExecConfig | (private) |
| 216 | fn | resolveEffectiveSystemRunExecPolicy | pub |
| 255 | fn | resolveSystemRunAutoReviewer | (private) |
| 273 | type | HandleSystemRunInvokeOptions | (private) |
| 303 | fn | loadSystemRunConfig | (private) |
| 311 | fn | sendSystemRunDenied | (private) |
| 340 | fn | sendSystemRunCompleted | (private) |
| 359 | fn | argvArraysMatch | (private) |
| 369 | fn | parseSystemRunPhase | (private) |
| 552 | fn | evaluateSystemRunPolicyPhase | (private) |
| 890 | fn | revalidateSystemRunApprovedPathBindings | (private) |
| 923 | fn | executeSystemRunPhase | (private) |
| 1115 | fn | handleSystemRunInvoke | pub |

## src/node-host/invoke.test.ts (809 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | ExecApprovalsUpdate | (private) |
| 100 | fn | createExecApprovalsSnapshot | (private) |
| 119 | type | InvokeResult | (private) |
| 125 | fn | invokeExecApprovals | (private) |

## src/node-host/invoke.ts (1105 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | type | SystemWhichParams | (private) |
| 94 | type | McpToolsCallParams | (private) |
| 100 | type | SystemExecApprovalsSetParams | (private) |
| 105 | type | SystemRunPrepareParams | (private) |
| 115 | type | SystemRunPrepareEnv | (private) |
| 125 | fn | resolveNodeSkillCwdParam | (private) |
| 135 | fn | buildEnvOverrideRejectionMessage | (private) |
| 151 | fn | buildSystemRunPrepareCoverageEnv | (private) |
| 180 | fn | buildSystemRunAllowAlwaysCoverage | (private) |
| 231 | type | ExecApprovalsSnapshot | (private) |
| 240 | fn | resolveExecSecurity | (private) |
| 244 | fn | isCmdExeInvocation | (private) |
| 253 | fn | resolveExecAsk | (private) |
| 258 | fn | sanitizeEnv | (private) |
| 262 | fn | truncateOutput | (private) |
| 269 | fn | redactExecApprovals | (private) |
| 277 | fn | requireExecApprovalsBaseHash | (private) |
| 304 | fn | clarifyNodeExecCwdSpawnError | (private) |
| 332 | fn | runCommand | (private) |
| 373 | fn | resolveEnvPath | (private) |
| 383 | fn | resolveExecutable | (private) |
| 411 | fn | handleSystemWhich | (private) |
| 423 | fn | buildExecEventPayload | (private) |
| 435 | fn | sendExecFinishedEvent | (private) |
| 460 | fn | runViaMacAppExecHost | (private) |
| 472 | fn | sendJsonPayloadResult | (private) |
| 483 | fn | sendMcpPayloadResult | (private) |
| 491 | fn | sendRawPayloadResult | (private) |
| 502 | fn | sendErrorResult | (private) |
| 514 | fn | sendInvalidRequestResult | (private) |
| 522 | fn | classifyExecApprovalsStorageError | (private) |
| 528 | fn | sendExecApprovalsStorageErrorResult | (private) |
| 537 | fn | handleInvoke | pub |
| 564 | fn | dispatchInvoke | (private) |
| 839 | fn | isRecord | (private) |
| 843 | fn | decodeMcpToolsCallParams | (private) |
| 863 | type | McpInvokeContentBlock | (private) |
| 867 | fn | normalizeMcpContentBlock | (private) |
| 874 | fn | serializedJsonBytes | (private) |
| 879 | fn | boundMcpToolResultPayload | (private) |
| 965 | fn | mcpToolErrorMessage | (private) |
| 977 | fn | handleMcpToolsCall | (private) |
| 1018 | fn | decodeParams | (private) |
| 1029 | fn | sendInvokeResult | (private) |
| 1046 | fn | buildNodeInvokeResultParams | (private) |
| 1086 | fn | sendNodeEvent | (private) |

## src/node-host/runner.test.ts (759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 174 | fn | lastCapturedOptions | (private) |
