# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## scripts/github/barnacle-auto-response.mjs (1204 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 283 | fn | normalizeLogin | (private) |
| 286 | fn | isAutomationPullRequest | (private) |
| 294 | fn | extractIssueFormValue | (private) |
| 316 | fn | hasLinkedReference | (private) |
| 320 | fn | hasFilledTemplateLine | (private) |
| 326 | fn | hasMostlyBlankTemplate | (private) |
| 355 | fn | stripPullRequestTemplateBoilerplate | (private) |
| 376 | fn | hasConcreteBehaviorContext | (private) |
| 396 | fn | hasClearDesignContext | (private) |
| 406 | fn | isMarkdownOrDocsFile | (private) |
| 414 | fn | isTestLikeFile | (private) |
| 424 | fn | isInfraLikeFile | (private) |
| 437 | fn | surfacesForFile | (private) |
| 464 | fn | classifyPullRequestCandidateLabels | pub |
| 560 | fn | ensureLabelSynced | (private) |
| 594 | fn | syncManagedLabels | (private) |
| 600 | fn | syncBugSubtypeLabel | (private) |
| 647 | fn | createMaintainerChecker | (private) |
| 675 | fn | hasPrivilegedRepositoryRole | (private) |
| 694 | fn | isPrivilegedActor | (private) |
| 701 | fn | isPrivilegedTargetAuthor | (private) |
| 714 | fn | countMaintainerMentions | (private) |
| 746 | fn | listPullRequestFiles | (private) |
| 755 | fn | addMissingLabels | (private) |
| 772 | fn | isClawSweeperOwnedLabel | (private) |
| 776 | fn | applyPullRequestCandidateLabels | (private) |
| 799 | fn | isAutomationUser | (private) |
| 804 | fn | isAutomationActor | (private) |
| 808 | fn | isClawSweeperProofSufficientLabelEvent | (private) |
| 818 | fn | isGitHubAppPullRequestAuthor | (private) |
| 822 | fn | candidateActionRuleForLabelSet | (private) |
| 832 | fn | applyPullRequestCandidateAction | (private) |
| 877 | fn | removeLabels | (private) |
| 901 | fn | runBarnacleAutoResponse | pub |

## scripts/github/dependency-guard.mjs (939 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | isDependencyFile | pub |
| 68 | fn | isDependencyManifest | pub |
| 72 | fn | isPackageLockfile | pub |
| 80 | fn | dependencyFieldChanges | pub |
| 90 | fn | shouldAutoscrubDependencyLockfiles | pub |
| 102 | fn | canAutoscrubPullRequest | pub |
| 106 | fn | autoscrubTargetRepository | (private) |
| 130 | fn | stableJson | (private) |
| 141 | fn | sanitizeDisplayValue | pub |
| 147 | fn | markdownCode | pub |
| 151 | fn | shellQuote | (private) |
| 178 | fn | findDependencyOverrideCommand | pub |
| 192 | fn | findDependencyOverrideCommandAsync | pub |
| 201 | fn | dependencyGuardCommentHeadSha | pub |
| 205 | fn | dependencyOverrideExpectedSha | pub |
| 217 | fn | isDependencyGuardAuthorizedForHead | pub |
| 225 | fn | isDependencyGuardTrustedForHead | pub |
| 233 | fn | securityApproverSet | pub |
| 242 | fn | dependencyGuardCommentAuthors | pub |
| 251 | fn | isDependencyGuardMarkerComment | pub |
| 256 | fn | renderDependencyAwarenessComment | (private) |
| 282 | fn | renderAuthorizedDependencyComment | pub |
| 300 | fn | renderTrustedDependencyComment | pub |
| 316 | fn | renderAutoscrubbedDependencyComment | pub |
| 336 | fn | isAutoscrubbedDependencyComment | pub |
| 340 | fn | renderClearedDependencyGuardComment | pub |
| 352 | fn | renderBlockedDependencyComment | pub |
| 405 | fn | renderAutoscrubStatusLines | (private) |
| 442 | fn | dependencyGuardTrustedActorCandidates | pub |
| 446 | fn | findTrustedDependencyGuardActor | pub |
| 459 | fn | renderManifestChangeLine | (private) |
| 463 | fn | githubApi | pub |
| 485 | fn | decodeContentFile | (private) |
| 492 | fn | readJsonFileAtRef | (private) |
| 509 | fn | readContentFileMetadataAtRef | (private) |
| 524 | fn | readBase64FileAtRef | (private) |
| 541 | fn | collectDependencyManifestChanges | (private) |
| 570 | fn | createAutoscrubCommit | pub |
| 616 | fn | writeSummary | (private) |
| 625 | fn | setOutput | (private) |
| 633 | fn | main | (private) |
| 682 | fn | findDependencyGuardComment | (private) |
| 740 | fn | isDependencyApprover | (private) |

## scripts/github/security-sensitive-guard.mjs (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | securitySensitiveFileDefinitions | pub |
| 46 | fn | securitySensitiveFileDefinition | pub |
| 50 | fn | isSecuritySensitiveFile | pub |
| 54 | fn | sanitizeDisplayValue | pub |
| 60 | fn | markdownCode | pub |
| 87 | fn | findSecuritySensitiveOverrideCommand | pub |
| 105 | fn | findSecuritySensitiveOverrideCommandAsync | pub |
| 114 | fn | securitySensitiveGuardCommentHeadSha | pub |
| 118 | fn | securitySensitiveOverrideExpectedSha | pub |
| 130 | fn | isSecuritySensitiveGuardAuthorizedForHead | pub |
| 138 | fn | isSecuritySensitiveGuardTrustedForHead | pub |
| 146 | fn | securityApproverSet | pub |
| 155 | fn | securitySensitiveGuardCommentAuthors | pub |
| 164 | fn | isSecuritySensitiveGuardMarkerComment | pub |
| 171 | fn | sortedSecuritySensitiveChanges | (private) |
| 185 | fn | collectSecuritySensitiveChanges | pub |
| 199 | fn | renderChangedFileLines | (private) |
| 211 | fn | renderSecuritySensitiveAwarenessComment | pub |
| 229 | fn | renderAuthorizedSecuritySensitiveComment | pub |
| 247 | fn | renderTrustedSecuritySensitiveComment | pub |
| 266 | fn | renderClearedSecuritySensitiveGuardComment | pub |
| 278 | fn | renderBlockedSecuritySensitiveComment | pub |
| 299 | fn | securitySensitiveGuardTrustedActorCandidates | pub |
| 307 | fn | findTrustedSecuritySensitiveGuardActor | pub |
| 323 | fn | githubApi | pub |
| 330 | fn | writeSummary | (private) |
| 339 | fn | main | (private) |
| 417 | fn | isSecuritySensitiveApprover | (private) |
