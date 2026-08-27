# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 30 large files in this module.

## src/gateway/worker-environments/bootstrap.test.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | WorkerBootstrapRequest | (private) |
| 11 | type | WorkerBootstrapDependencies | (private) |
| 12 | type | WorkerBootstrapCommandRunner | (private) |
| 44 | fn | tagged | (private) |
| 48 | fn | result | (private) |
| 60 | fn | fakeRunner | (private) |
| 83 | fn | resolveIdentity | (private) |
| 84 | fn | bootstrapWorker | (private) |

## src/gateway/worker-environments/bootstrap.ts (786 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | fn | fail | (private) |
| 117 | fn | assertRoot | (private) |
| 124 | fn | assertDirectory | (private) |
| 132 | fn | addFile | (private) |
| 152 | fn | walk | (private) |
| 168 | fn | readNpmInventory | (private) |
| 496 | type | ResolvedWorkerSshIdentity | (private) |
| 498 | type | WorkerBootstrapCommandRunner | (private) |
| 503 | type | WorkerBootstrapRequest | (private) |
| 510 | type | WorkerBootstrapDependencies | (private) |
| 517 | fn | normalizeHandshake | (private) |
| 551 | fn | parseReceiptJson | (private) |
| 575 | fn | commandFailure | (private) |
| 587 | fn | isSuccess | (private) |
| 591 | fn | runSshScript | (private) |
| 624 | fn | cleanupRemoteUpload | (private) |
| 639 | fn | parseTaggedOutput | (private) |
| 654 | fn | parsePreflight | (private) |
| 692 | fn | bootstrapWorker | pub |

## src/gateway/worker-environments/bundle.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | WorkerInstallationArtifactBase | (private) |
| 28 | type | WorkerBundleArtifact | (private) |
| 34 | type | WorkerNpmArtifact | pub |
| 40 | type | WorkerInstallationArtifact | pub |
| 42 | type | WorkerBundleProducer | pub |
| 46 | type | WorkerBundleProducerOptions | (private) |
| 53 | type | WorkerNpmPackageInstallCheck | (private) |
| 54 | type | WorkerNpmReleaseVerifier | (private) |
| 58 | type | WorkerNpmProofCommandRunner | (private) |
| 60 | fn | normalizeProtocolFeatures | (private) |
| 68 | fn | resolvePackageRoot | (private) |
| 83 | fn | isReleasedPackageInstall | (private) |
| 94 | type | NpmPackageIdentity | (private) |
| 101 | fn | readNonEmptyString | (private) |
| 106 | fn | parseNpmPackageIdentity | (private) |
| 119 | fn | runNpmProofCommand | (private) |
| 148 | fn | updateHashFromFile | (private) |
| 157 | fn | hashNpmTarballIntegrity | (private) |
| 163 | fn | hashWorkerBundleTarball | (private) |
| 169 | fn | verifyPublishedNpmRelease | (private) |
| 267 | fn | hashWorkerBundleManifest | (private) |
| 276 | fn | manifestsMatch | (private) |
| 295 | fn | readTarballManifest | (private) |
| 352 | fn | isCachedTarball | (private) |
| 367 | fn | cachedTarballMatches | (private) |
| 381 | fn | writeTarball | (private) |
| 428 | fn | prepareWorkerBundle | (private) |
| 465 | fn | createWorkerBundleProducer | pub |
| 489 | fn | resolveWorkerNpmInstallationArtifact | pub |

## src/gateway/worker-environments/inference-runtime.test.ts (795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | Deps | (private) |
| 36 | type | Execution | (private) |
| 114 | fn | request | (private) |
| 135 | fn | finalMessage | (private) |
| 151 | fn | providerStream | (private) |
| 167 | fn | setup | (private) |
| 265 | fn | params | (private) |

## src/gateway/worker-environments/inference-runtime.ts (853 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | WorkerInferenceStreamEvent | (private) |
| 78 | type | WorkerInferenceExecutor | pub |
| 79 | type | WorkerInferenceExecutionParams | pub |
| 81 | type | WorkerInferenceSessionTarget | (private) |
| 86 | type | WorkerInferenceUsageParams | (private) |
| 96 | type | WorkerInferenceRuntimeDependencies | (private) |
| 116 | fn | resolveWorkerInferenceAuthProfileMode | (private) |
| 132 | fn | projectWorkerInferenceModelRouteConfig | pub |
| 178 | fn | inferenceError | (private) |
| 190 | fn | isRecord | (private) |
| 194 | fn | copyTool | (private) |
| 205 | fn | buildContext | (private) |
| 222 | fn | optionBudgetsFitModel | (private) |
| 237 | fn | buildStreamOptions | (private) |
| 254 | fn | contentAt | (private) |
| 258 | fn | toWorkerStreamEvent | (private) |
| 319 | fn | emitWorkerInferenceUsage | (private) |
| 395 | fn | resolveReturnedProfileSource | (private) |
| 411 | fn | resolveApprovedModel | (private) |
| 608 | fn | createWorkerInferenceExecutor | pub |
| 609 | fn | createWorkerInferenceExecutor | pub |
| 737 | fn | recordUsage | (private) |
| 752 | fn | executionIsCurrent | (private) |

## src/gateway/worker-environments/inference.ts (684 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | WorkerInferenceFenceReason | (private) |
| 39 | type | WorkerInferenceSink | pub |
| 44 | type | WorkerInferenceExecutor | pub |
| 53 | type | RevalidateInference | (private) |
| 55 | fn | safeRevalidate | (private) |
| 63 | type | WorkerInferenceStartApplicationResult | (private) |
| 71 | type | WorkerInferenceCancelApplicationResult | (private) |
| 75 | type | ActiveInference | (private) |
| 91 | fn | activeKey | (private) |
| 95 | fn | trySend | (private) |
| 107 | fn | terminalError | (private) |
| 117 | fn | message | (private) |
| 142 | fn | validFrameBytes | (private) |
| 157 | fn | terminalFrame | (private) |
| 176 | fn | normalizeTerminalOutcome | (private) |
| 189 | fn | matchesIdentity | (private) |
| 202 | fn | sameTurn | (private) |
| 216 | fn | createWorkerInferenceManager | pub |
| 393 | fn | scheduleExpiry | (private) |
| 611 | fn | cancelWhere | (private) |

## src/gateway/worker-environments/live-events.test.ts (621 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | live | (private) |
| 58 | fn | binding | (private) |
| 64 | type | WireEvent | (private) |
| 78 | fn | ack | (private) |
| 81 | fn | fail | (private) |
| 86 | fn | start | (private) |
| 97 | fn | remove | (private) |
| 105 | fn | create | (private) |
| 110 | fn | deltas | (private) |
| 213 | fn | output | (private) |
| 249 | fn | capped | (private) |

## src/gateway/worker-environments/live-events.ts (764 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | PendingLiveEvent | (private) |
| 43 | type | OwnedLiveRun | (private) |
| 50 | type | LiveEventTarget | (private) |
| 52 | type | WorkerLiveSessionBinding | (private) |
| 58 | type | BoundLiveSession | (private) |
| 60 | type | WorkerLiveCredentialRotation | (private) |
| 68 | type | LiveEventWindow | (private) |
| 81 | type | WorkerLiveEventApplicationResult | pub |
| 85 | type | WorkerLiveEventFailure | (private) |
| 87 | type | WorkerLiveEventReceiverOptions | (private) |
| 97 | fn | invalidEvent | (private) |
| 101 | fn | capacityExceeded | (private) |
| 105 | fn | resolveLiveEventTarget | (private) |
| 121 | fn | prepareBoundLiveSession | (private) |
| 132 | fn | isValidLiveSessionBinding | (private) |
| 141 | fn | prepareBoundLiveSessionSafely | (private) |
| 152 | fn | matchesSessionIdentityMutation | (private) |
| 166 | fn | createWorkerLiveEventReceiver | pub |
| 764 | type | WorkerLiveEventReceiver | pub |

## src/gateway/worker-environments/placement-dispatch-pending-results.ts (547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | PlacementRecoveryDeps | pub |
| 54 | fn | sameActiveEnvironment | (private) |
| 72 | fn | recoverPendingWorkspaceResults | pub |

## src/gateway/worker-environments/placement-dispatch.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | createHarness | (private) |
| 48 | fn | fail | (private) |

## src/gateway/worker-environments/placement-store.test.ts (1050 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | advanceToActive | (private) |

## src/gateway/worker-environments/placement-store.ts (530 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | exactConflictPath | (private) |
| 54 | fn | updateTransition | (private) |
| 78 | fn | createWorkerSessionPlacementStore | pub |
| 530 | type | WorkerSessionPlacementStore | pub |

## src/gateway/worker-environments/placement-turn-claims.ts (564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | TurnClaimReleaseWaiter | (private) |
| 30 | fn | workspaceJournalQuery | (private) |
| 33 | fn | waitersFor | (private) |
| 47 | fn | signalTurnClaimRelease | pub |
| 62 | fn | createPlacementTurnClaimOps | pub |
| 292 | fn | finish | (private) |
| 313 | fn | onRelease | (private) |
| 314 | fn | onAbort | (private) |

## src/gateway/worker-environments/service.test.ts (2483 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | waitForFast | (private) |
| 33 | type | WorkerEnvironmentServiceOptions | (private) |
| 34 | type | WorkerEnvironmentServiceError | (private) |
| 74 | type | WorkerLifecycleLease | (private) |
| 121 | fn | getDevelopmentProfile | (private) |
| 125 | fn | createService | (private) |
| 167 | fn | createProvider | (private) |
| 179 | fn | createLiveEvents | (private) |
| 191 | fn | seedBootstrapping | (private) |
| 215 | fn | seedReady | (private) |
| 225 | fn | readyPatch | (private) |
| 237 | fn | attachedPatch | (private) |
| 249 | fn | admissionFor | (private) |
| 261 | fn | seedAttachedIdentity | (private) |
| 289 | fn | inferenceRequest | (private) |

## src/gateway/worker-environments/service.ts (1566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | WorkerEnvironmentServiceErrorCode | (private) |
| 83 | class | WorkerEnvironmentServiceError | (private) |
| 92 | fn | serviceError | (private) |
| 97 | fn | workerEnvironmentIdempotencyDigest | (private) |
| 101 | fn | workerEnvironmentIdForIdempotencyKey | pub |
| 106 | type | WorkerEnvironmentServiceOptions | (private) |
| 147 | type | WorkerPlacementTurnBinding | pub |
| 154 | type | WorkerProcessTurnBinding | (private) |
| 158 | type | WorkerTerminalTurnFence | (private) |
| 163 | type | WorkerPendingTerminalTurnFence | (private) |
| 167 | type | WorkerTurnRequest | (private) |
| 172 | type | WorkerSessionPlacementGate | pub |
| 183 | type | WorkerTranscriptCommitApplicationResult | (private) |
| 187 | type | WorkerTranscriptCommitServiceResult | (private) |
| 191 | type | WorkerLiveEventServiceResult | (private) |
| 195 | type | WorkerInferenceStartServiceResult | (private) |
| 204 | type | WorkerInferenceCancelServiceResult | (private) |
| 209 | fn | requireWorkerProfile | (private) |
| 217 | fn | createWorkerEnvironmentService | pub |
| 220 | fn | warn | (private) |
| 319 | fn | project | (private) |
| 324 | fn | move | (private) |
| 340 | fn | saveError | (private) |
| 353 | fn | inState | (private) |
| 358 | fn | release | (private) |
| 389 | fn | lifecycleLease | (private) |
| 394 | fn | identityResolverFor | (private) |
| 428 | fn | prepareInstallation | (private) |
| 431 | fn | credentialExpiry | (private) |
| 443 | fn | credentialMaterial | (private) |
| 493 | fn | finishProvenDestroy | (private) |
| 536 | fn | finishBootstrap | (private) |
| 580 | fn | finishProvision | (private) |
| 640 | fn | cancelRequested | (private) |
| 643 | fn | beginDrain | (private) |
| 651 | fn | beginDestroy | (private) |
| 664 | fn | finishDestroy | (private) |
| 682 | fn | ensurePendingCredential | (private) |
| 853 | fn | create | (private) |
| 905 | fn | destroy | (private) |
| 1091 | fn | reconcilePass | (private) |
| 1109 | fn | reconcileOnce | (private) |
| 1118 | fn | start | (private) |
| 1137 | fn | stop | (private) |
| 1161 | fn | readPendingCredential | (private) |
| 1565 | type | WorkerEnvironmentService | pub |

## src/gateway/worker-environments/store.test.ts (638 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | WorkerEnvironmentBootstrapReceipt | (private) |
| 16 | type | WorkerEnvironmentProfileSnapshot | (private) |
| 17 | type | WorkerEnvironmentSshEndpoint | (private) |
| 56 | fn | createIntent | (private) |
| 72 | fn | seedBootstrapping | (private) |
| 83 | fn | readyPatch | (private) |
| 95 | fn | attachedPatch | (private) |
| 285 | fn | makeReady | (private) |

## src/gateway/worker-environments/store.ts (889 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | WorkerEnvironmentProfileSnapshot | (private) |
| 38 | type | WorkerEnvironmentSshEndpoint | (private) |
| 39 | type | WorkerEnvironmentBootstrapReceipt | (private) |
| 40 | type | WorkerEnvironmentTeardownTerminalState | (private) |
| 41 | type | RecordIdentity | (private) |
| 42 | type | RecordBase | (private) |
| 54 | type | Ssh | (private) |
| 55 | type | UnleasedRecord | (private) |
| 56 | type | LeasedRecord | (private) |
| 57 | type | WorkerEnvironmentRecord | pub |
| 58 | class | WorkerSessionAlreadyAttachedError | pub |
| 66 | type | WorkerEnvironmentTransitionPatch | pub |
| 74 | type | WorkerDb | (private) |
| 78 | type | Row | (private) |
| 79 | type | RowUpdate | (private) |
| 80 | type | CredentialRow | (private) |
| 81 | type | CredentialInsert | (private) |
| 82 | type | CredentialInput | (private) |
| 88 | type | IntentInput | (private) |
| 92 | type | TransitionInput | (private) |
| 106 | fn | required | (private) |
| 112 | fn | normalizeOpenSshHostKey | (private) |
| 135 | fn | teardownTerminalStateFrom | (private) |
| 143 | fn | normalizeBootstrapReceipt | (private) |
| 170 | fn | normalizeCredentialHash | (private) |
| 177 | fn | normalizeSessionId | (private) |
| 187 | fn | normalizeAttachedSessionIds | (private) |
| 196 | fn | assertCredentialSessionBinding | (private) |
| 204 | fn | normalizeRpcSetVersion | (private) |
| 210 | fn | normalizeExpiry | (private) |
| 216 | fn | normalizeWorkerSshEndpoint | pub |
| 228 | fn | endpointFrom | (private) |
| 247 | fn | bootstrapReceiptFrom | (private) |
| 265 | fn | assertShape | (private) |
| 292 | fn | nextOwnerEpoch | (private) |
| 299 | fn | nextGlobalOwnerEpoch | (private) |
| 318 | fn | fromRow | (private) |
| 350 | fn | credentialFromRow | (private) |
| 362 | fn | json | (private) |
| 363 | fn | query | (private) |
| 364 | fn | find | (private) |
| 374 | fn | findCredential | (private) |
| 384 | fn | findCredentialByHash | (private) |
| 394 | fn | getRequired | (private) |
| 401 | fn | update | (private) |
| 415 | fn | revokeCredential | (private) |
| 423 | fn | upsertCredential | (private) |
| 442 | fn | credentialInsert | (private) |
| 467 | fn | listRows | (private) |
| 477 | fn | compareAttachmentAuthority | (private) |
| 493 | fn | reconcileAttachedSessionOwners | (private) |
| 528 | fn | createWorkerEnvironmentStore | pub |
| 533 | fn | read | (private) |
| 888 | type | WorkerEnvironmentStore | pub |

## src/gateway/worker-environments/transcript-commit.test.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | WorkerTranscriptCommitter | (private) |
| 63 | fn | createTurnMessages | (private) |
| 107 | fn | createRequest | (private) |
| 122 | fn | messageIdempotencyKey | (private) |
| 129 | fn | requireAppendableWorkerMessage | (private) |
| 566 | type | AppendMessage | (private) |

## src/gateway/worker-environments/tunnel.test.ts (969 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | waitForFast | (private) |
| 29 | type | WorkerSshProcessExit | (private) |
| 40 | fn | success | (private) |
| 51 | fn | deferred | (private) |
| 62 | fn | memoryWorkspaceJournal | (private) |
| 81 | class | FakeProcess | (private) |
| 113 | fn | fakeRunner | (private) |
| 130 | fn | localWorkspaceRunner | (private) |
| 192 | fn | git | (private) |
| 202 | fn | resolveIdentity | (private) |
| 204 | fn | waitForStarts | (private) |

## src/gateway/worker-environments/worker-turn-launcher.test.ts (1850 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | WorkerTurnLauncherOptions | (private) |
| 32 | type | WorkerTurnEnvironmentService | (private) |
| 41 | type | WorkerTurnEnvironmentRecord | (private) |
| 43 | fn | hasLoneSurrogate | (private) |
| 73 | fn | seedActivePlacement | (private) |
| 112 | fn | seedReclaimedPlacement | (private) |
| 142 | fn | attachedEnvironment | (private) |
| 176 | fn | credential | (private) |
| 189 | fn | unusedEnvironments | (private) |
| 190 | fn | unexpected | (private) |
| 211 | fn | turn | (private) |

## src/gateway/worker-environments/worker-turn-launcher.ts (676 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | WorkerTurnEnvironmentService | (private) |
| 66 | type | ActiveWorkerPlacement | (private) |
| 67 | type | ReclaimedWorkerPlacement | (private) |
| 69 | type | WorkerTurnLauncherOptions | (private) |
| 77 | class | WorkerTurnExecutionError | (private) |
| 78 | class | WorkerWorkspaceReconciliationError | (private) |
| 80 | fn | executeLocalTurn | (private) |
| 99 | fn | recoveryError | (private) |
| 106 | fn | failHandedOffTurn | (private) |
| 167 | fn | executeWorkerTurn | (private) |
| 578 | fn | createWorkerSessionTurnPlacementProvider | pub |

## src/gateway/worker-environments/workspace-manifest-remote-script.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | fn | canonicalEntry | (private) |
| 29 | fn | compareManifestPaths | (private) |
| 32 | fn | serializeManifest | (private) |
| 67 | fn | readManifestFile | (private) |
| 79 | fn | resolveManifest | (private) |
| 183 | fn | isSafeRelativePath | (private) |
| 197 | fn | parsePaths | (private) |
| 221 | fn | targetPath | (private) |
| 224 | fn | livePath | (private) |
| 236 | fn | exists | (private) |
| 245 | fn | removeTree | (private) |
| 263 | fn | readPaths | (private) |
| 266 | fn | readState | (private) |
| 289 | fn | readAncestorModes | (private) |
| 312 | fn | writeAncestorModes | (private) |
| 317 | fn | ancestorPaths | (private) |
| 333 | fn | prepareWritableAncestors | (private) |
| 348 | fn | makeAncestorsWritable | (private) |
| 377 | fn | restoreAncestorModes | (private) |
| 389 | fn | removeTransaction | (private) |
| 392 | fn | restoreTransaction | (private) |
| 421 | fn | recoverTransaction | (private) |
| 424 | fn | recoverTransactions | (private) |

## src/gateway/worker-environments/workspace-reconcile-core.ts (672 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | class | ConcurrentWorkspacePathError | pub |
| 38 | type | WorkspaceNode | (private) |
| 44 | type | WorkerWorkspaceApplyResult | pub |
| 51 | fn | assertWorkspaceMatchesManifest | pub |
| 75 | fn | sameEntry | (private) |
| 79 | fn | manifestNodes | pub |
| 95 | fn | hasPathAncestor | (private) |
| 105 | fn | isPortableWorkspaceSymlink | (private) |
| 118 | fn | localWorkspaceNode | pub |
| 151 | fn | localWorkspaceDescendantPaths | (private) |
| 188 | fn | readActualWorkspaceManifest | pub |
| 319 | fn | inspectAcceptedWorkerWorkspace | pub |
| 357 | fn | assertActualWorkspaceManifest | pub |
| 370 | fn | changedPaths | pub |
| 383 | fn | applyWorkspaceDirectoryChanges | pub |
| 452 | fn | hasReplacedBaseEntryAncestor | pub |
| 468 | fn | preflightWorkspaceApply | pub |
| 639 | fn | retainedConflictPaths | pub |
| 659 | fn | assertWorkspaceResultStable | pub |

## src/gateway/worker-environments/workspace-reconcile-recovery.test.ts (757 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | temporaryDirectory | (private) |
| 32 | fn | gitInit | (private) |
| 39 | fn | manifestFor | (private) |
| 42 | fn | walk | (private) |
| 76 | fn | encodeManifest | (private) |
| 81 | fn | applyWorkspace | (private) |
| 630 | fn | withLegacyDerivedPath | (private) |

## src/gateway/worker-environments/workspace-reconcile-recovery.ts (588 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | requireGit | (private) |
| 52 | fn | materializeSnapshotEntry | (private) |
| 77 | fn | writeRawWorkspaceTree | (private) |
| 131 | fn | createWorkspacePatch | pub |
| 227 | fn | applyWorkspacePatch | pub |
| 256 | fn | validateJournalSnapshot | (private) |
| 266 | fn | createWorkspaceRecoveryPatch | (private) |
| 389 | fn | assertWorkspaceRecoveryBase | (private) |
| 459 | fn | assertWorkspaceRecoveryDirectoriesRecoverable | (private) |
| 514 | fn | restoreWorkspaceJournalDirectories | (private) |
| 563 | fn | recoverWorkerWorkspaceReconciliation | pub |

## src/gateway/worker-environments/workspace-reconcile.test.ts (1017 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | temporaryDirectory | (private) |
| 45 | fn | gitInit | (private) |
| 52 | fn | manifestFor | (private) |
| 55 | fn | walk | (private) |
| 89 | fn | encodeWorkspaceManifest | (private) |
| 94 | fn | applyWorkspace | (private) |

## src/gateway/worker-environments/workspace-result-staging.ts (658 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | gitCommand | (private) |
| 41 | fn | sameEntry | (private) |
| 48 | fn | changedPaths | (private) |
| 65 | fn | workerWorkspaceTransferPaths | pub |
| 86 | fn | requireGit | (private) |
| 97 | fn | requireWorkerResultStorageRef | (private) |
| 109 | fn | requireWorkerResultRef | (private) |
| 116 | fn | workerWorkspaceResultRef | pub |
| 123 | fn | preparedWorkerWorkspaceResultRef | pub |
| 128 | fn | cleanupWorkerWorkspaceResultRef | pub |
| 133 | fn | isWorkerWorkspaceResultCleanupRef | pub |
| 137 | fn | hasGitAdminPath | (private) |
| 156 | fn | ensureWorkerWorkspaceResultRepository | (private) |
| 169 | fn | hasWorkerWorkspaceResultRef | pub |
| 203 | fn | stagedResultMessage | (private) |
| 217 | fn | quoteFastImportPath | (private) |
| 235 | fn | readGitBlob | (private) |
| 253 | fn | stageWorkerWorkspaceResult | (private) |
| 340 | type | LoadedStagedWorkerWorkspace | (private) |
| 348 | fn | loadStagedWorkerWorkspace | (private) |
| 432 | fn | materializeStagedEntry | (private) |
| 453 | fn | applyStagedWorkerWorkspaceResult | pub |
| 525 | fn | prepareRequestedWorkerWorkspaceResult | (private) |
| 594 | fn | deleteStagedWorkerWorkspaceResult | pub |
| 606 | fn | moveStagedWorkerWorkspaceResultToCleanup | pub |
| 621 | fn | restoreStagedWorkerWorkspaceResultFromCleanup | pub |
| 637 | fn | deleteWorkerWorkspaceResultCleanupRefs | pub |

## src/gateway/worker-environments/workspace-sync-scripts.test.ts (695 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | fixture | (private) |
| 54 | fn | quiesce | (private) |
| 65 | fn | leasePath | (private) |
| 70 | fn | resume | (private) |
| 78 | fn | renew | (private) |
| 201 | fn | runTransaction | (private) |

## src/gateway/worker-environments/workspace-sync-scripts.ts (687 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | processes | (private) |
| 50 | fn | ancestors | (private) |
| 61 | fn | processIdentity | (private) |
| 73 | fn | validProcessReference | (private) |
| 76 | fn | parseLease | (private) |
| 93 | fn | persistLease | (private) |
| 99 | fn | resumeProcesses | (private) |
| 206 | fn | watchdogMain | (private) |
| 207 | fn | check | (private) |
| 237 | fn | identity | (private) |
| 299 | fn | processStatus | (private) |
| 309 | fn | processes | (private) |
| 327 | fn | ancestors | (private) |
| 408 | fn | identity | (private) |
| 490 | fn | fail | (private) |
| 494 | fn | addEntry | (private) |
| 533 | fn | addWithParents | (private) |
| 541 | fn | walk | (private) |
| 578 | fn | nulPaths | (private) |
| 585 | fn | eligiblePaths | (private) |
| 622 | fn | hashFiles | (private) |
| 637 | fn | ensurePrivateDirectory | (private) |
| 653 | fn | main | (private) |

## src/gateway/worker-environments/workspace-sync.ts (718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | fn | createWorkerWorkspaceActions | pub |
| 128 | fn | quiesceWorkspace | (private) |
| 152 | fn | abortRenewal | (private) |
| 155 | fn | renew | (private) |
| 180 | fn | renewalLoop | (private) |
