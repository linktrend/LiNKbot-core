# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/skills/lifecycle/clawhub.test.ts (2808 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | expectInstallPackageSourceDir | (private) |
| 79 | fn | installPolicyInput | (private) |
| 93 | fn | expectInstalledSkill | (private) |
| 112 | fn | expectInvalidSlug | (private) |
| 120 | fn | writeClawHubOriginFixture | (private) |
| 1790 | fn | createLegacyTrackedSkillFixture | (private) |
| 1830 | fn | expectLegacyUpdateSuccess | (private) |
| 2653 | fn | writeOriginWithProvenance | (private) |

## src/skills/lifecycle/clawhub.ts (1687 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ClawHubSkillDownloadedArtifactLock | (private) |
| 53 | type | ClawHubSkillFileLock | (private) |
| 58 | type | ClawHubSkillVerificationLock | (private) |
| 70 | type | ClawHubSkillLockEntry | (private) |
| 81 | type | ClawHubSkillOrigin | (private) |
| 93 | type | ClawHubSkillsLockfile | (private) |
| 98 | type | ClawHubSkillsLockfileStatusRead | pub |
| 103 | type | ClawHubSkillStatusLink | pub |
| 130 | type | LocalSkillCardStatus | pub |
| 136 | type | LocalSkillCardRead | (private) |
| 140 | type | InstallClawHubSkillResult | (private) |
| 151 | type | UpdateClawHubSkillResult | (private) |
| 163 | type | Logger | (private) |
| 169 | type | ClawHubSkillRef | (private) |
| 176 | fn | normalizeClawHubOwnerHandle | (private) |
| 184 | fn | parseRequestedClawHubSkillRef | (private) |
| 203 | fn | formatClawHubSkillRef | (private) |
| 207 | fn | resolveRequestedUpdateSlug | (private) |
| 233 | type | ClawHubInstallParams | (private) |
| 247 | type | ClawHubOfficialFlagContainer | (private) |
| 253 | fn | hasOfficialClawHubFlag | (private) |
| 257 | fn | isDefaultOfficialClawHubSkillSource | (private) |
| 274 | fn | fetchDefaultClawHubSkillDetailIfOfficial | (private) |
| 296 | type | TrackedUpdateTarget | (private) |
| 310 | type | ClawHubSkillVerificationResolutionSource | (private) |
| 311 | type | ClawHubSkillVerificationSelector | (private) |
| 313 | type | ClawHubSkillVerificationTargetResult | (private) |
| 334 | fn | readClawHubSkillsLockfile | (private) |
| 355 | fn | writeClawHubSkillsLockfile | (private) |
| 363 | fn | readJsonIfExistsSync | (private) |
| 376 | fn | normalizeStoredRegistry | (private) |
| 381 | fn | readRealPathSync | (private) |
| 389 | fn | normalizeOptionalStringValue | (private) |
| 393 | fn | asRecord | (private) |
| 399 | fn | normalizeGitHubRepoName | (private) |
| 411 | fn | normalizeGitHubCommitSegment | (private) |
| 419 | fn | buildGitHubTreeUrl | (private) |
| 426 | fn | readVerifiedClawHubSkillSourceUrl | pub |
| 450 | fn | readInstallResolutionSourceUrl | (private) |
| 459 | fn | buildDownloadedArtifactLock | (private) |
| 469 | fn | snapshotClawHubSkillVerification | (private) |
| 485 | fn | fetchInstallVerificationLock | (private) |
| 508 | fn | readInstalledSkillFileLock | (private) |
| 526 | fn | readClawHubSkillsLockfileStatusSync | pub |
| 567 | fn | normalizeOptionalSelector | (private) |
| 572 | fn | isNonEmptyString | (private) |
| 576 | fn | normalizeDownloadedArtifactLock | (private) |
| 597 | fn | normalizeSkillFileLock | (private) |
| 608 | fn | normalizeClawHubSkillOrigin | (private) |
| 650 | fn | readClawHubSkillOrigin | (private) |
| 669 | fn | readClawHubSkillOriginStatusSync | (private) |
| 702 | type | StrictOriginReadResult | (private) |
| 707 | fn | readClawHubSkillOriginStrict | (private) |
| 739 | fn | resolveClawHubSkillStatusLinkSync | pub |
| 904 | fn | resolveLocalSkillCardStatusSync | pub |
| 910 | fn | isPathInsideDir | (private) |
| 918 | fn | readLocalSkillCardSync | (private) |
| 970 | fn | readLocalSkillCardContentSync | pub |
| 974 | fn | writeClawHubSkillOrigin | (private) |
| 982 | fn | searchSkillsFromClawHub | pub |
| 994 | fn | resolveClawHubSkillVerificationTarget | pub |
| 1115 | fn | resolveInstallVersion | (private) |
| 1139 | fn | normalizeGitHubSourcePath | (private) |
| 1147 | fn | resolveGitHubSkillSourceDir | (private) |
| 1152 | fn | installArchiveResolution | (private) |
| 1199 | fn | installGitHubResolution | (private) |
| 1250 | fn | assertInstallResolutionAllowed | (private) |
| 1274 | fn | ensureClawHubSkillTrustAcknowledged | (private) |
| 1309 | fn | performClawHubSkillInstall | (private) |
| 1534 | fn | installRequestedSkillFromClawHub | (private) |
| 1552 | fn | installTrackedSkillFromClawHub | (private) |
| 1568 | fn | resolveTrackedUpdateTarget | (private) |
| 1594 | fn | installSkillFromClawHub | pub |
| 1609 | fn | updateSkillsFromClawHub | pub |
| 1673 | fn | readTrackedClawHubSkillSlugs | pub |
| 1678 | fn | untrackClawHubSkill | pub |

## src/skills/lifecycle/install-fallback.test.ts (800 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | loadSkillsInstallModulesForTest | (private) |
| 35 | fn | makeSkillEntry | (private) |
| 56 | fn | mockAvailableBinaries | (private) |
| 61 | fn | assertNoAptGetFallbackCalls | (private) |
| 74 | fn | mockPasswordlessSudoRule | (private) |
| 82 | fn | commandCallAt | (private) |
| 101 | fn | expectAptPolicyCall | (private) |
| 107 | fn | expectLocalGoVersionEnvCall | (private) |
| 114 | fn | mockLocalGoVersion | (private) |
| 122 | fn | withUid | (private) |

## src/skills/lifecycle/install.ts (836 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | SkillInstallRequest | (private) |
| 35 | type | SkillsInstallDeps | (private) |
| 55 | fn | getSkillsInstallDeps | (private) |
| 59 | fn | withWarnings | (private) |
| 69 | fn | resolveInstallId | (private) |
| 73 | fn | findInstallSpec | (private) |
| 83 | fn | normalizeSkillInstallSpec | (private) |
| 101 | fn | buildNodeInstallCommand | (private) |
| 114 | fn | resolveDefaultNodeInstallStateDir | (private) |
| 131 | fn | buildNodeInstallEnv | (private) |
| 152 | fn | assertSafeInstallerValue | (private) |
| 163 | fn | buildInstallCommand | (private) |
| 221 | fn | resolveBrewPrefixBinDir | (private) |
| 237 | fn | resolveBrewBinDir | (private) |
| 261 | type | CommandResult | (private) |
| 267 | fn | createInstallFailure | (private) |
| 284 | fn | createInstallSuccess | (private) |
| 294 | fn | runCommandSafely | (private) |
| 314 | fn | resolveBrewMissingFailure | (private) |
| 328 | fn | ensureUvInstalled | (private) |
| 375 | type | GoVersion | (private) |
| 377 | type | AptCommandAccess | (private) |
| 385 | type | GoAptCandidateResult | (private) |
| 397 | fn | isSupportedGoVersion | (private) |
| 404 | fn | parseAptGoCandidate | (private) |
| 412 | fn | appendPathDirectory | (private) |
| 419 | fn | sudoListAllowsPasswordlessCommand | (private) |
| 430 | fn | resolveAptCommandAccess | (private) |
| 460 | fn | readGoAptCandidate | (private) |
| 474 | fn | resolveGoAptInstallCandidate | (private) |
| 495 | fn | installGoViaApt | (private) |
| 541 | fn | ensureGoInstalled | (private) |
| 572 | type | SkillInstallReadiness | pub |
| 576 | fn | parseGoVersion | (private) |
| 584 | fn | isGoUsableForAutoInstall | (private) |
| 596 | fn | isGoToolchainPrerequisiteFailure | (private) |
| 605 | fn | canBootstrapGoViaApt | (private) |
| 622 | fn | resolveInstallerKindReadiness | pub |
| 656 | fn | executeInstallCommand | (private) |
| 679 | fn | installSkill | pub |

## src/skills/lifecycle/upload-store.test.ts (948 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | ReadSkillUploadArchiveChunks | (private) |
| 43 | fn | makeTempDir | (private) |
| 49 | fn | makeStore | (private) |
| 68 | fn | stateDatabase | (private) |
| 72 | fn | uploadCount | (private) |
| 80 | fn | uploadExists | (private) |
| 88 | fn | chunkCount | (private) |
| 99 | fn | installLeaseCount | (private) |
| 109 | fn | sha256 | (private) |
| 113 | fn | deferred | (private) |
| 121 | fn | expectUploadError | (private) |
| 140 | fn | expectMissingPath | (private) |
| 936 | fn | toLintErrorObject | (private) |

## src/skills/lifecycle/upload-store.ts (746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | SkillUploadStoreOptions | (private) |
| 65 | class | SkillUploadRequestError | pub |
| 72 | type | SkillUploadRecord | (private) |
| 90 | type | SkillUploadStore | pub |
| 92 | type | BeginParams | (private) |
| 101 | type | ChunkParams | (private) |
| 107 | type | CommitParams | (private) |
| 112 | fn | withLock | (private) |
| 129 | fn | normalizeSkillUploadSha256 | pub |
| 140 | fn | validateUploadId | (private) |
| 148 | fn | validateSizeBytes | (private) |
| 158 | fn | validateUploadSlug | (private) |
| 166 | fn | validateOffset | (private) |
| 173 | fn | validateIdempotencyKey | (private) |
| 184 | fn | resolvePositiveDuration | (private) |
| 188 | fn | decodeBase64Chunk | (private) |
| 220 | fn | requireUploadRow | (private) |
| 228 | fn | assertNotExpired | (private) |
| 243 | fn | matchesBegin | (private) |
| 262 | fn | cleanupExpiredUploads | (private) |
| 302 | fn | assembleArchive | (private) |
| 322 | fn | toRecord | (private) |
| 342 | fn | toCommitResult | (private) |
| 357 | fn | createSkillUploadStore | (private) |
| 371 | fn | lockRoot | (private) |
