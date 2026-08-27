# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/skills/workshop/curator.test.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | registerSkillUsageTracking | (private) |
| 67 | fn | recordSkillUsage | (private) |
| 94 | fn | runSkillCuratorSweep | (private) |
| 128 | fn | readSkillUsageFiles | (private) |
| 137 | fn | addAppliedSkill | (private) |
| 195 | fn | writeSkill | (private) |

## src/skills/workshop/curator.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | SkillLifecycleState | (private) |
| 36 | type | CuratorDatabase | (private) |
| 41 | type | CuratedSkill | (private) |
| 50 | type | SkillOverlapCandidate | (private) |
| 56 | type | SkillCuratorSweepResult | (private) |
| 65 | type | SkillCuratorStatus | pub |
| 85 | type | CuratorOptions | (private) |
| 89 | fn | curatorDb | (private) |
| 97 | fn | canonicalSkillKey | (private) |
| 105 | fn | recordSkillUsage | (private) |
| 157 | fn | registerSkillUsageTracking | (private) |
| 176 | fn | startSkillCuratorMaintenance | pub |
| 184 | fn | performSweep | (private) |
| 205 | fn | loadCuratedSkills | (private) |
| 260 | fn | overlapTokens | (private) |
| 269 | fn | tokenJaccard | (private) |
| 275 | fn | detectOverlapCandidates | (private) |
| 303 | fn | desiredLifecycleState | (private) |
| 313 | fn | writeSweepAttempt | (private) |
| 332 | fn | writeSweepFailure | (private) |
| 360 | fn | runSkillCuratorSweep | (private) |
| 470 | fn | parseOverlapCandidates | (private) |
| 492 | fn | getSkillCuratorStatus | pub |
| 542 | fn | updateLifecyclePin | (private) |
| 572 | fn | pinCuratedSkill | pub |
| 576 | fn | unpinCuratedSkill | pub |
| 580 | fn | restoreCuratedSkill | pub |
| 619 | fn | getArchivedSkillFiles | pub |
| 646 | fn | getSkillCuratorDoctorWarning | pub |

## src/skills/workshop/history-scan.test.ts (591 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | summary | (private) |
| 51 | fn | hasDanglingSurrogate | (private) |

## src/skills/workshop/service.test.ts (1197 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | makeWorkspace | (private) |

## src/skills/workshop/service.ts (938 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | SkillWorkshopWorkspaceOptions | (private) |
| 79 | fn | proposalStoreOptions | (private) |
| 88 | fn | readSkillProposalDraftFile | pub |
| 96 | fn | readSkillProposalDraftDirectory | pub |
| 150 | fn | decodeProposalTextFile | (private) |
| 158 | fn | normalizeProposalOrigin | (private) |
| 176 | fn | mergeProposalOriginRunProvenance | (private) |
| 203 | fn | proposeCreateSkill | pub |
| 278 | type | WritableWorkspaceSkillSummary | (private) |
| 289 | fn | listWritableWorkspaceSkillSummaries | pub |
| 311 | fn | proposeUpdateSkill | pub |
| 394 | fn | reviseSkillProposal | pub |
| 505 | fn | rejectSkillProposal | pub |
| 511 | fn | quarantineSkillProposal | pub |
| 532 | fn | applySkillProposal | pub |
| 627 | fn | readApplyTargetState | (private) |
| 695 | fn | assertCanCreatePendingProposal | (private) |
| 724 | fn | assertPendingProposalCountWithinLimit | (private) |
| 733 | fn | assertProposalDescriptionWithinLimit | (private) |
| 742 | fn | resolveUpdateProposalDescription | (private) |
| 754 | fn | truncateUtf8 | (private) |
| 768 | fn | assertProposalContentWithinLimit | (private) |
| 777 | fn | buildSupportFileMetadata | (private) |
| 803 | fn | nextProposalVersion | (private) |
| 812 | fn | markProposal | (private) |
| 830 | fn | withPendingSkillProposalMutation | (private) |
| 851 | fn | assertSupportTargetUnchanged | (private) |
| 882 | fn | assertSupportTargetsUnchanged | (private) |
| 901 | fn | markProposalStale | (private) |
| 916 | fn | assertWritableSkillTarget | (private) |
| 927 | fn | normalizeRequired | (private) |
| 935 | fn | toPortableRelativePath | (private) |

## src/skills/workshop/store.ts (547 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | SkillWorkshopStoreOptions | (private) |
| 61 | type | PreparedSkillProposalSupportFile | pub |
| 64 | type | SkillProposalWriteGuard | (private) |
| 67 | fn | createSkillProposalId | pub |
| 74 | fn | hashSkillProposalContent | pub |
| 78 | fn | contentSizeBytes | (private) |
| 82 | fn | assertSkillProposalContentSize | (private) |
| 88 | fn | resolveSkillWorkshopStateDir | (private) |
| 92 | fn | resolveProposalDir | (private) |
| 97 | fn | resolveProposalRecordPath | (private) |
| 104 | fn | prepareSkillProposalSupportFiles | pub |
| 144 | fn | resolveSkillProposalTarget | pub |
| 160 | fn | readSkillProposal | pub |
| 180 | fn | readSkillProposalRecord | pub |
| 188 | fn | writeSkillProposal | pub |
| 205 | fn | writeSkillProposalFiles | (private) |
| 228 | fn | replaceSkillProposalDraft | pub |
| 262 | fn | updateSkillProposalRecord | pub |
| 276 | fn | withSkillProposalTargetLock | pub |
| 289 | fn | writeSkillProposalRollback | pub |
| 302 | fn | readSkillProposalManifest | pub |
| 308 | fn | readSkillProposalManifestUnlocked | (private) |
| 319 | fn | refreshSkillProposalManifest | pub |
| 327 | fn | refreshSkillProposalManifestUnlocked | (private) |
| 358 | fn | withSkillProposalManifestLock | (private) |
| 366 | fn | withSkillWorkshopLock | (private) |
| 374 | fn | readProposalSupportFiles | pub |
| 399 | fn | createSkillProposalRollback | pub |
| 424 | fn | assertProposalId | (private) |
| 430 | fn | manifestEntryFromRecord | (private) |
| 445 | fn | parseSkillProposalRecord | (private) |
| 477 | fn | isValidSupportFileList | (private) |
| 519 | fn | parseSkillProposalManifest | (private) |
| 544 | fn | proposalRelativeDir | (private) |
