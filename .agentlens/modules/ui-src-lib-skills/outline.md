# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## ui/src/lib/skills/index.test.ts (1209 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | SkillsState | (private) |
| 23 | type | TestRequest | (private) |
| 25 | fn | createDeferred | (private) |
| 33 | fn | createState | (private) |
| 76 | fn | createDeferredRequestQueue | (private) |
| 91 | fn | mockSkillMutationRequests | (private) |
| 578 | type | SearchResponse | (private) |

## ui/src/lib/skills/index.ts (757 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ClawHubSearchResult | pub |
| 23 | type | ClawHubSkillDetail | pub |
| 53 | type | ClawHubSkillSecurityVerdict | pub |
| 77 | type | SkillsState | (private) |
| 112 | type | SkillOperation | pub |
| 118 | type | ActiveSkillOperation | (private) |
| 120 | fn | ownsSkillOperation | (private) |
| 128 | fn | releaseSkillOperation | (private) |
| 136 | type | SkillMessage | (private) |
| 141 | type | SkillMessageMap | pub |
| 143 | fn | setSkillMessage | (private) |
| 150 | fn | getErrorMessage | (private) |
| 152 | fn | getClawHubTrustDetailsFromError | (private) |
| 159 | fn | formatClawHubInstallMessage | (private) |
| 163 | fn | formatClawHubAcknowledgementMessage | (private) |
| 170 | fn | clawhubVerdictKey | pub |
| 178 | fn | isValidClawHubLink | (private) |
| 184 | fn | reportHasLinkedClawHubSkills | (private) |
| 188 | fn | skillCardCacheKey | (private) |
| 197 | fn | currentSkillCardCacheKey | (private) |
| 202 | fn | skillsAgentParams | (private) |
| 207 | fn | stateSkillsAgentParams | (private) |
| 212 | fn | loadSkillStatusReport | pub |
| 219 | type | SkillsAgentScope | (private) |
| 224 | fn | captureSkillsAgentScope | (private) |
| 233 | fn | isSkillsAgentScopeCurrent | (private) |
| 240 | fn | runStaleAwareRequest | (private) |
| 262 | fn | setClawHubSearchQuery | pub |
| 270 | fn | setSkillsAgentId | pub |
| 292 | fn | reconcileSkillsAgentId | pub |
| 305 | fn | loadSkills | pub |
| 325 | fn | ownsLoad | (private) |
| 329 | fn | isCurrent | (private) |
| 356 | fn | loadCurrentSkillsForOperation | (private) |
| 375 | fn | refreshSkills | pub |
| 395 | fn | pruneSkillCardState | (private) |
| 419 | fn | loadSkillCard | pub |
| 466 | fn | loadClawHubSecurityVerdicts | (private) |
| 508 | fn | updateSkillEdit | pub |
| 515 | fn | runSkillMutation | (private) |
| 570 | fn | updateSkillEnabled | pub |
| 580 | fn | saveSkillApiKey | pub |
| 591 | fn | installSkill | pub |
| 613 | fn | searchClawHub | pub |
| 653 | fn | loadClawHubDetail | pub |
| 682 | fn | closeClawHubDetail | pub |
| 689 | fn | installFromClawHub | pub |
