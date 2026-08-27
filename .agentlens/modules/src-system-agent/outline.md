# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## src/system-agent/agent-turn.test.ts (1078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | RunCliAgentParams | (private) |
| 33 | type | RunEmbeddedAgentParams | (private) |
| 61 | fn | useTempStateDir | (private) |
| 68 | fn | configSnapshot | (private) |
| 81 | fn | requireValue | (private) |
| 88 | fn | createVerifiedSession | (private) |
| 213 | fn | turn | (private) |
| 439 | fn | turn | (private) |
| 602 | fn | configForProfile | (private) |
| 622 | fn | turn | (private) |
| 649 | fn | configForBackend | (private) |
| 676 | fn | turn | (private) |
| 704 | fn | configForModel | (private) |
| 732 | fn | turn | (private) |
| 757 | fn | configForGlobalPolicy | (private) |
| 791 | fn | turn | (private) |
| 857 | fn | turn | (private) |

## src/system-agent/chat-engine.test.ts (2245 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 100 | fn | useTempStateDir | (private) |
| 107 | fn | configSnapshot | (private) |
| 125 | fn | testHarnessBinding | (private) |
| 148 | fn | createAmbientVerifiedBinding | (private) |
| 170 | fn | createOAuthVerifiedBinding | (private) |
| 198 | fn | createCliVerifiedBinding | (private) |
| 234 | type | TestSystemAgentChatEngineOptions | (private) |
| 239 | class | SystemAgentChatEngine | (private) |
| 2223 | fn | fakeOverviewLoader | (private) |

## src/system-agent/chat-engine.ts (1256 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | type | SystemAgentChatEngineOptions | pub |
| 83 | type | SystemAgentChatReplyAction | (private) |
| 85 | type | SystemAgentChatReply | (private) |
| 100 | type | WizardPrompterLike | (private) |
| 102 | type | ActiveWizardBridge | (private) |
| 110 | type | CaptureRuntime | (private) |
| 116 | fn | createHostedWizardRuntime | (private) |
| 125 | fn | createCaptureRuntime | (private) |
| 137 | fn | defaultChannelSetupWizardRunner | (private) |
| 191 | fn | formatWizardOptions | (private) |
| 203 | fn | wizardStepChatQuestion | (private) |
| 243 | fn | renderWizardStep | (private) |
| 275 | fn | parseWizardAnswer | (private) |
| 293 | fn | matchOption | (private) |
| 331 | fn | formatOperationError | (private) |
| 341 | fn | redactSensitiveCommandText | (private) |
| 349 | fn | formatPendingOperationForAssistant | (private) |
| 356 | fn | preservePendingSetupModel | (private) |
| 374 | class | SystemAgentChatEngine | pub |
| 1106 | fn | beforePersistentApply | (private) |

## src/system-agent/operations-execute.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | loadOverviewModule | (private) |
| 38 | fn | executeSystemAgentOperation | pub |

## src/system-agent/operations-execution-helpers.ts (763 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | ConfigModule | (private) |
| 33 | type | ConfigFileSnapshot | (private) |
| 34 | fn | loadConfigModule | (private) |
| 35 | fn | loadOverviewModule | (private) |
| 40 | fn | redactConfigValue | pub |
| 58 | fn | readConfigValueAtPath | pub |
| 84 | fn | formatGatewayStatusLine | pub |
| 95 | fn | runGatewayLifecycle | pub |
| 112 | fn | readConfigFileSnapshotLazy | pub |
| 117 | fn | loadOverviewForOperation | pub |
| 127 | fn | resolveChannelSetupState | pub |
| 155 | fn | formatChannelDocsUrl | pub |
| 159 | fn | formatConfigValidationLine | pub |
| 175 | fn | createNoExitRuntime | pub |
| 184 | fn | resolveTuiAgentId | pub |
| 214 | type | ExecuteOptions | pub |
| 234 | type | PersistentApplyContext | (private) |
| 241 | type | PersistentApplyOutcome | (private) |
| 250 | fn | applyPersistentOperation | pub |
| 298 | fn | runConfigSetOperation | pub |
| 336 | fn | isDefaultAgentListPath | (private) |
| 360 | fn | assertConfigWriteDoesNotBypassInferenceVerification | pub |
| 395 | fn | verifyCurrentSetupInference | (private) |
| 450 | fn | executeSetup | pub |
| 527 | fn | executeSetDefaultModel | pub |
| 545 | fn | projectRoute | (private) |
| 687 | fn | isPluginBackingDefaultInferenceRoute | pub |
| 729 | fn | executePluginInstall | pub |

## src/system-agent/operations.setup.test.ts (1065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | TestConfig | (private) |
| 19 | fn | readLastAuditEntry | (private) |
| 23 | fn | requireRecord | (private) |
| 30 | fn | expectRecordFields | (private) |
| 36 | fn | expectAuditRecord | (private) |
| 54 | fn | cloneConfig | (private) |
| 55 | fn | snapshot | (private) |
| 460 | type | VerifyInferenceParams | (private) |

## src/system-agent/operations.test.ts (1044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | TestConfig | (private) |
| 20 | fn | requireRecord | (private) |
| 27 | fn | expectRecordFields | (private) |
| 33 | fn | expectAuditRecord | (private) |
| 43 | fn | readLastAuditEntry | (private) |
| 47 | fn | requireFirstMockCall | (private) |
| 55 | fn | expectRuntimeArg | (private) |
| 68 | fn | cloneConfig | (private) |
| 69 | fn | snapshot | (private) |

## src/system-agent/rescue-message.test.ts (712 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | TestConfig | (private) |
| 22 | fn | readLastAuditEntry | (private) |
| 32 | fn | cloneConfig | (private) |
| 33 | fn | snapshot | (private) |
| 130 | fn | makeStateDir | (private) |
| 136 | fn | withRescueStateDir | (private) |
| 149 | fn | commandContext | (private) |
| 167 | fn | openRescuePendingTestStore | (private) |
| 176 | fn | requireFirstMockCall | (private) |
| 184 | fn | runRescue | (private) |

## src/system-agent/setup-apply.test.ts (858 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | ConfigSnapshot | (private) |
| 18 | type | CommitTransform | (private) |
| 113 | fn | snapshot | (private) |
| 126 | fn | codexPluginMetadataSnapshot | (private) |
| 165 | fn | materializePluginDefaults | (private) |
| 176 | fn | baseParams | (private) |
| 682 | fn | persistedSnapshot | (private) |
| 717 | fn | persistedSnapshot | (private) |

## src/system-agent/setup-apply.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | SystemAgentSetupApplyParams | pub |
| 63 | type | SystemAgentSetupApplyResult | pub |
| 71 | type | SystemAgentSetupApplyHooks | (private) |
| 77 | fn | createQuickstartNotePrompter | pub |
| 78 | fn | unexpected | (private) |
| 112 | fn | applySecurityAcknowledgement | (private) |
| 124 | type | SystemAgentModelSelectionParams | (private) |
| 134 | type | SystemAgentModelSelectionModules | (private) |
| 140 | fn | applySystemAgentModelSelectionWithModules | (private) |
| 232 | fn | createSystemAgentModelSelectionUpdater | pub |
| 244 | fn | applySystemAgentModelSelection | pub |
| 251 | fn | applySystemAgentSetup | pub |
| 331 | fn | assertVerifiedRoute | (private) |
| 371 | fn | buildSetupCandidate | (private) |

## src/system-agent/setup-inference.test.ts (5885 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 131 | fn | makeTempDir | (private) |
| 135 | fn | deferSuiteTempDirCleanup | (private) |
| 137 | fn | withSuiteTempDirs | (private) |
| 154 | fn | activateSetupInference | (private) |
| 184 | type | TestVerifySetupInferenceParams | (private) |
| 189 | fn | verifySetupInference | (private) |
| 192 | fn | verifySetupInference | (private) |
| 195 | fn | verifySetupInference | (private) |
| 204 | fn | verifySetupInferenceConfig | (private) |
| 210 | type | SuccessfulRunParams | (private) |
| 217 | fn | successfulAgentHarnessBinding | (private) |
| 234 | fn | successfulRun | (private) |
| 259 | fn | successfulRunner | (private) |
| 263 | fn | createConfigTransformHarness | (private) |
| 750 | fn | runCodexSetupWithFinalConfig | (private) |
| 850 | fn | createGroqSetupProvider | (private) |
| 880 | fn | groqSetupChoice | (private) |
| 2496 | fn | enablePluginInConfig | (private) |
| 3137 | fn | activate | (private) |
| 4652 | fn | createBinding | (private) |
| 4699 | fn | currentOwnerPluginArtifactDeps | (private) |
| 4964 | fn | configuredSnapshot | (private) |

## src/system-agent/setup-inference.ts (3490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 119 | type | ProviderAutoSetupInferenceKind | pub |
| 120 | type | SetupInferenceKind | pub |
| 122 | type | SetupInferenceCandidate | pub |
| 134 | type | SetupInferenceUnavailableCandidate | pub |
| 151 | type | SetupInferenceDetection | pub |
| 168 | type | SetupInferenceStatus | pub |
| 178 | type | SetupInferenceFailureStatus | pub |
| 180 | type | ActivateSetupInferenceResult | pub |
| 188 | class | SetupInferenceActivationIndeterminateError | pub |
| 192 | class | SetupInferenceActivationUnavailableError | (private) |
| 196 | type | VerifySetupInferenceResult | pub |
| 210 | type | CompleteSetupInferenceResult | pub |
| 214 | type | BoundVerifySetupInferenceResult | pub |
| 223 | type | ActivateSetupInferenceParams | pub |
| 246 | class | SetupInferenceCancelledError | (private) |
| 252 | fn | throwIfSetupInferenceCancelled | (private) |
| 260 | fn | waitForProviderAuth | (private) |
| 271 | fn | onAbort | (private) |
| 280 | type | SetupInferenceRunEmbeddedAgent | (private) |
| 287 | type | ActivateSetupInferenceDeps | pub |
| 322 | type | DetectSetupInferenceDeps | pub |
| 330 | fn | toProviderAutoSetupKind | (private) |
| 334 | fn | parseProviderAutoSetupChoiceId | (private) |
| 349 | fn | invalidSetupConfigError | (private) |
| 358 | fn | resolveCandidatePresentation | (private) |
| 372 | fn | resolveSetupInferenceWorkspace | (private) |
| 391 | fn | listManualSetupInferenceOptions | pub |
| 426 | fn | detectSetupInference | pub |
| 597 | type | SetupInferenceTestPlan | (private) |
| 622 | fn | configureCodexCliPreparedAuth | (private) |
| 647 | type | RunResult | (private) |
| 658 | fn | extractRunText | (private) |
| 669 | fn | extractRunTerminalError | (private) |
| 689 | fn | extractRunWinnerError | (private) |
| 704 | fn | resolveToolFreeCliSetupError | (private) |
| 725 | fn | resolveStrictSetupAuthProfileError | (private) |
| 780 | fn | parseRef | (private) |
| 787 | fn | projectSetupTargetModelMetadata | (private) |
| 797 | fn | project | (private) |
| 815 | fn | resolveSetupAgentRuntimeId | (private) |
| 833 | fn | mapFailoverReasonToSetupStatus | (private) |
| 852 | fn | prepareManualAuthForActivation | (private) |
| 886 | fn | copySelectedModelMetadata | (private) |
| 937 | fn | findSelectedProviderConfigKey | (private) |
| 959 | fn | projectManualInferenceConfig | (private) |
| 1018 | fn | canonicalizeSetupModelRef | (private) |
| 1036 | fn | buildTestPlan | (private) |
| 1502 | fn | runProviderManualSecretMethod | (private) |
| 1585 | fn | activateSetupInference | pub |
| 1619 | fn | activateSetupInferenceUnredacted | (private) |
| 2388 | fn | redactSetupInferenceError | (private) |
| 2400 | fn | hasSameOwnerPluginArtifacts | (private) |
| 2410 | type | VerifySetupInferenceParams | (private) |
| 2419 | fn | verifySetupInference | pub |
| 2422 | fn | verifySetupInference | pub |
| 2425 | fn | verifySetupInference | pub |
| 2504 | type | BoundSetupInferenceVerifier | (private) |
| 2511 | type | ResolvePersistentApplyInferenceDeps | pub |
| 2517 | fn | executionRouteIdentity | (private) |
| 2527 | fn | resolvePersistentApplyInference | pub |
| 2579 | fn | verifySetupInferenceConfig | pub |
| 2683 | fn | retainStagedAuthProfiles | (private) |
| 2826 | fn | completeSetupInference | pub |
| 2852 | fn | completeSetupInferenceConfig | pub |
| 2914 | fn | cleanupSetupInferenceTempDir | (private) |
| 2943 | fn | isCodexInstallRecordPersisted | (private) |
| 2959 | fn | retainUnownedCodexInstall | (private) |
| 2996 | fn | clearUnownedCodexInstallCaches | (private) |
| 3025 | fn | reloadCodexRegistryAfterActivation | (private) |
| 3077 | fn | isMergePatchObject | (private) |
| 3081 | fn | mergePatchConflicts | (private) |
| 3100 | fn | applyManualAuthConfig | (private) |
| 3126 | type | ManualAuthPersistenceReceipt | (private) |
| 3136 | type | ManualAuthProfilesReadback | (private) |
| 3138 | type | ManualAuthPersistenceResult | (private) |
| 3143 | fn | modelSelectionReferencesProfile | (private) |
| 3160 | fn | configReferencesManualAuthProfiles | (private) |
| 3183 | fn | readManualAuthProfiles | (private) |
| 3209 | fn | manualAuthProfilesPersisted | (private) |
| 3216 | fn | persistManualAuthProfiles | (private) |
| 3261 | fn | rollbackManualAuthProfiles | (private) |
| 3326 | fn | runSetupInferenceTest | (private) |

## src/system-agent/tui-backend.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | RunTui | (private) |
| 42 | type | SystemAgentTuiOptions | pub |
| 61 | type | SystemAgentHistoryMessage | (private) |
| 67 | type | SystemAgentTuiRoute | (private) |
| 75 | fn | createChatEngine | (private) |
| 86 | fn | loadOverviewForTui | (private) |
| 93 | fn | message | (private) |
| 101 | fn | splitModelRef | (private) |
| 116 | class | SystemAgentTuiBackend | (private) |
| 378 | fn | runSetupHandoff | (private) |
| 391 | fn | beforePersistentEffect | (private) |
| 420 | fn | runSystemAgentTui | pub |
| 496 | fn | requireTuiVerifiedInference | (private) |

## src/system-agent/verified-inference.test.ts (1478 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | type | TestPluginRecord | (private) |
| 93 | fn | pluginRecord | (private) |
| 122 | fn | authDeps | (private) |
| 158 | fn | pluginArtifactDeps | (private) |
| 165 | fn | cliRuntimeArtifactDeps | (private) |
| 181 | fn | config | (private) |
| 192 | fn | bindingFor | (private) |

## src/system-agent/verified-inference.ts (929 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | SystemAgentConfiguredRouteIdentity | (private) |
| 52 | type | SystemAgentVerifiedExecutionFingerprint | (private) |
| 63 | type | SystemAgentOwnerPluginRuntimeIdentity | (private) |
| 76 | type | SystemAgentOwnerPluginArtifactIdentity | (private) |
| 81 | type | SystemAgentOwnerPluginArtifactSnapshot | pub |
| 86 | type | SystemAgentOwnerPluginRegistryRecord | (private) |
| 100 | type | SystemAgentOwnerPluginRegistryLoader | (private) |
| 107 | type | SystemAgentVerifiedInferenceBinding | pub |
| 126 | type | SystemAgentVerifiedInferenceDeps | pub |
| 144 | fn | resolveSystemAgentExpectedAgentHarnessRuntimeArtifact | pub |
| 165 | fn | validateAgentHarnessRuntimeArtifact | (private) |
| 184 | fn | resolveAgentHarnessAuthBindingFingerprint | (private) |
| 205 | fn | systemAgentRouteIdentity | (private) |
| 212 | fn | resolveCurrentRuntimeOwnerFingerprint | (private) |
| 301 | fn | projectRelevantPlugins | (private) |
| 324 | fn | projectOwnerPluginRuntime | (private) |
| 345 | fn | projectOwnerPluginRuntimes | (private) |
| 367 | fn | projectOwnerPluginArtifacts | (private) |
| 399 | fn | projectVerifiedExecutionFingerprint | (private) |
| 428 | fn | resolveRouteHarnessOwnerPluginIds | (private) |
| 444 | fn | resolveRouteOwnerPluginIds | (private) |
| 469 | fn | captureSystemAgentOwnerPluginArtifacts | pub |
| 487 | fn | resolveCurrentAuthFingerprint | (private) |
| 624 | fn | createSystemAgentVerifiedInferenceBinding | pub |
| 782 | fn | hasCurrentSystemAgentOwnerPluginArtifacts | pub |
| 818 | fn | resolveSystemAgentVerifiedInferenceRoute | pub |
