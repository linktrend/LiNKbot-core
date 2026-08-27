# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## src/agents/worktrees/registry.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | WorktreesTable | (private) |
| 17 | type | WorktreeRow | (private) |
| 18 | type | WorktreeRegistryDatabase | (private) |
| 19 | type | WorktreeProvisionedDatabase | (private) |
| 23 | type | WorktreeLeaseDatabase | (private) |
| 25 | fn | dbFor | (private) |
| 29 | fn | kyselyFor | (private) |
| 33 | fn | kyselyProvisionedFor | (private) |
| 37 | fn | kyselyLeaseFor | (private) |
| 41 | fn | rowToRecord | (private) |
| 59 | fn | recordToRow | (private) |
| 81 | fn | parseProvisionedData | (private) |
| 112 | fn | listRegistryWorktrees | pub |
| 122 | fn | getRegistryWorktree | pub |
| 132 | fn | getRegistryWorktreeProvisionedPaths | pub |
| 140 | fn | getRegistryWorktreeProvisionedLedger | pub |
| 165 | fn | getRegistryWorktreeProvisionedState | pub |
| 181 | fn | clearRegistryWorktreeProvisionedChunks | pub |
| 196 | fn | insertRegistryWorktreeProvisionedChunk | pub |
| 219 | fn | getRegistryWorktreeProvisionedChunk | pub |
| 233 | fn | findLiveRegistryWorktreeByPath | pub |
| 249 | fn | findLiveRegistryWorktreeByOwner | pub |
| 267 | fn | findRegistryWorktreeByPath | pub |
| 282 | fn | insertRegistryWorktree | pub |
| 296 | fn | updateRegistryWorktree | pub |
| 328 | fn | deleteRegistryWorktree | pub |
| 344 | type | RunLeaseOwnerChecks | pub |
| 349 | fn | worktreeRunLeaseScope | (private) |
| 353 | fn | parseLeaseOwnerPayload | (private) |
| 368 | type | ScopeLeaseState | (private) |
| 370 | fn | collectLiveRunLeases | (private) |
| 421 | fn | admitWorktreeRunLeaseRow | pub |
| 473 | fn | claimWorktreeRemovalRow | pub |
| 530 | fn | releaseWorktreeRunLeaseRow | pub |
| 550 | fn | finalizeWorktreeRemovalRows | pub |
| 565 | fn | abortWorktreeRemovalRow | pub |
| 588 | fn | hasLiveWorktreeRunLeaseRow | pub |

## src/agents/worktrees/service.test.ts (1129 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | git | (private) |
| 31 | fn | gitWithInput | (private) |
| 44 | fn | initializeRepository | (private) |
| 60 | fn | addRemote | (private) |

## src/agents/worktrees/service.ts (1125 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | class | WorktreeSnapshotError | pub |
| 75 | type | ServiceOptions | (private) |
| 80 | type | WorktreeCleanupLimits | pub |
| 85 | type | ManagedWorktreeGcParams | (private) |
| 91 | fn | resolveWorktreeCleanupLimits | pub |
| 95 | fn | resultMessage | (private) |
| 99 | fn | validateName | (private) |
| 106 | fn | generateName | (private) |
| 110 | fn | resolveRepository | (private) |
| 140 | fn | cleanupFailedCreate | (private) |
| 151 | fn | resetFailedWorktreeAdd | (private) |
| 180 | fn | canResetFailedWorktreeAdd | (private) |
| 206 | fn | runSetupScript | (private) |
| 227 | fn | isMissingFileError | (private) |
| 236 | fn | directorySizeBytes | (private) |
| 264 | fn | containsGitMarker | (private) |
| 288 | fn | splitNullBuffer | (private) |
| 306 | fn | gitPathKey | (private) |
| 310 | fn | checkoutPathFromGitBytes | (private) |
| 317 | fn | rawPathExists | (private) |
| 329 | fn | snapshotWorktree | (private) |
| 357 | fn | addSnapshotPath | (private) |
| 452 | class | ManagedWorktreeService | pub |
| 507 | fn | worktreeAddArgs | (private) |
| 657 | fn | rank | (private) |
| 1014 | fn | overLimit | (private) |
| 1025 | fn | refreshTotals | (private) |
