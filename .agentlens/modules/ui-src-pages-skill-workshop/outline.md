# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## ui/src/pages/skill-workshop/proposals.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | SkillProposalStatus | (private) |
| 26 | type | SkillProposalKind | (private) |
| 27 | type | SkillProposalScanState | (private) |
| 29 | type | SkillProposalManifestEntry | (private) |
| 42 | type | SkillProposalManifest | (private) |
| 48 | type | SkillProposalSupportFileRecord | (private) |
| 53 | type | SkillProposalOrigin | (private) |
| 60 | type | SkillProposalRecord | (private) |
| 77 | type | SkillProposalSupportFile | (private) |
| 82 | type | SkillProposalInspectResult | (private) |
| 88 | type | SkillWorkshopContext | pub |
| 93 | fn | getErrorMessage | (private) |
| 97 | fn | skillWorkshopAgentParams | (private) |
| 110 | fn | resolveSkillWorkshopAgentId | pub |
| 114 | fn | loadedSkillWorkshopAgentParams | (private) |
| 123 | fn | resetSkillWorkshopAgentScope | (private) |
| 136 | fn | parseDateMs | (private) |
| 144 | fn | startOfLocalDay | (private) |
| 149 | fn | recencyGroup | (private) |
| 161 | fn | compactAgeLabel | (private) |
| 178 | fn | proposedVersionNumber | (private) |
| 183 | fn | formatBytes | (private) |
| 195 | fn | byteLength | (private) |
| 199 | fn | stripProposalFrontmatter | (private) |
| 203 | fn | supportFilesFromInspect | (private) |
| 216 | fn | proposalFromManifest | (private) |
| 241 | fn | proposalFromInspect | (private) |
| 266 | fn | mergeProposal | (private) |
| 280 | fn | clearActionNoticeTimer | (private) |
| 287 | fn | showActionNotice | (private) |
| 309 | fn | countSkillWorkshopProposals | pub |
| 322 | fn | loadSkillWorkshopProposals | pub |
| 375 | fn | loadSkillWorkshopProposalDetail | (private) |
| 425 | fn | selectSkillWorkshopProposal | pub |
| 440 | fn | refreshAfterMutation | (private) |
| 450 | fn | runSkillWorkshopLifecycleAction | pub |
| 484 | fn | requestSkillWorkshopRevision | pub |

## ui/src/pages/skill-workshop/skill-workshop-page.test.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | SkillWorkshopPageTestElement | (private) |
| 23 | fn | waitForSkillWorkshop | (private) |
| 27 | fn | deferred | (private) |
| 35 | fn | callsFor | (private) |
| 39 | fn | createRuntimeConfigStub | (private) |
| 58 | fn | createContext | (private) |
| 77 | fn | subscribe | (private) |
| 579 | fn | createLoadedPage | (private) |

## ui/src/pages/skill-workshop/skill-workshop-page.ts (650 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | findRevisionSessionRow | (private) |
| 55 | fn | isUsableRevisionSession | (private) |
| 59 | fn | loadRevisionSessionsForAgent | (private) |
| 70 | fn | resolveRevisionSessionKey | (private) |
| 99 | fn | renderSkillWorkshopPage | (private) |
| 149 | fn | selectProposal | (private) |
| 154 | fn | selectRelativeProposal | (private) |
| 167 | fn | selectVisibleFallback | (private) |
| 303 | class | SkillWorkshopPage | (private) |
| 381 | fn | handleChange | (private) |

## ui/src/pages/skill-workshop/view.ts (975 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | renderSkillWorkshop | pub |
| 113 | fn | renderRevisionDialog | (private) |
| 187 | fn | renderBoard | (private) |
| 203 | fn | renderQueueResizer | (private) |
| 217 | fn | startQueueResize | (private) |
| 229 | fn | cleanup | (private) |
| 237 | fn | onMove | (private) |
| 241 | fn | onUp | (private) |
| 250 | fn | resizeQueueWithKeyboard | (private) |
| 259 | fn | renderLifecycleTabs | (private) |
| 278 | fn | renderQueue | (private) |
| 312 | fn | renderRow | (private) |
| 334 | fn | renderDetail | (private) |
| 420 | fn | renderActionNotice | (private) |
| 430 | fn | renderPendingActions | (private) |
| 464 | fn | resolveSkillWorkshopAgentName | (private) |
| 468 | fn | renderToday | (private) |
| 681 | fn | renderTodayDoesBlock | (private) |
| 696 | type | TodayProposalPreview | (private) |
| 701 | type | ProposalBodySection | (private) |
| 706 | fn | extractTodayProposalPreview | (private) |
| 741 | fn | splitProposalBodySections | (private) |
| 764 | fn | findProposalSection | (private) |
| 772 | fn | normalizeSectionTitle | (private) |
| 780 | fn | extractTopLevelListItems | (private) |
| 796 | fn | cleanTodayPreviewItem | (private) |
| 806 | fn | truncateAtWord | (private) |
| 816 | fn | formatTodayDate | (private) |
| 823 | fn | renderProposalBody | (private) |
| 831 | fn | flushPara | (private) |
| 837 | fn | flushList | (private) |
| 902 | fn | renderInline | (private) |
| 925 | fn | groupByRecency | (private) |
| 940 | fn | queueEmptyText | (private) |
| 955 | fn | formatRelative | (private) |
