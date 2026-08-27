# apps/ios/Sources/Design/IPadSkillWorkshopScreen.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1255
- **Language:** Swift
- **Symbols:** 45
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | struct | IPadSkillWorkshopScreen | (internal) | `struct IPadSkillWorkshopScreen` |
| 435 | fn | presentedProposalDetail | (private) | `@ViewBuilder   private func presentedProposalDe...` |
| 453 | fn | proposalDetailCard | (private) | `private func proposalDetailCard(_ proposal: IPa...` |
| 521 | fn | proposalApplyButton | (private) | `private func proposalApplyButton(_ proposal: IP...` |
| 534 | fn | proposalRejectButton | (private) | `private func proposalRejectButton(_ proposal: I...` |
| 547 | fn | proposalInspectButton | (private) | `private func proposalInspectButton(_ proposal: ...` |
| 617 | fn | shouldEnableProposalMutation | (internal) | `static func shouldEnableProposalMutation(canWri...` |
| 639 | fn | usesCompactTaskFlow | (internal) | `static func usesCompactTaskFlow(     horizontal...` |
| 650 | fn | proposalStatusFilterLabel | (internal) | `static func proposalStatusFilterLabel(_ filter:...` |
| 660 | fn | proposalLaneLabel | (internal) | `static func proposalLaneLabel(_ status: String)...` |
| 671 | fn | titleCasedProposalStatus | (internal) | `static func titleCasedProposalStatus(_ status: ...` |
| 686 | fn | proposalStatusBoardLanes | (internal) | `static func proposalStatusBoardLanes(filter: St...` |
| 702 | fn | proposalStatusMatchesFilter | (internal) | `static func proposalStatusMatchesFilter(status:...` |
| 722 | fn | nextSelectedProposalID | (internal) | `static func nextSelectedProposalID(current: Str...` |
| 730 | fn | normalizedScopeID | (internal) | `static func normalizedScopeID(_ value: String?)...` |
| 764 | fn | proposals | (private) | `private func proposals(forLaneStatus status: St...` |
| 783 | fn | syncSelectedProposalIDForVisibleProposals | (private) | `private func syncSelectedProposalIDForVisiblePr...` |
| 791 | fn | count | (private) | `private func count(_ status: String) -> Int` |
| 795 | fn | proposal | (private) | `private func proposal(withID id: String) -> IPa...` |
| 799 | fn | selectProposal | (private) | `private func selectProposal(     _ proposal: IP...` |
| 811 | fn | loadProposals | (private) | `private func loadProposals(force: Bool) async` |
| 846 | fn | inspect | (private) | `private func inspect(proposalID: String, force:...` |
| 869 | fn | run | (private) | `private func run(_ action: IPadSkillProposalAct...` |
| 893 | fn | merge | (private) | `private func merge(_ proposal: IPadSkillProposal)` |
| 899 | fn | request | (private) | `private func request(method: String, params: so...` |
| 911 | fn | message | (private) | `private static func message(for error: Error) -...` |
| 920 | struct | IPadSkillProposalKanbanColumn | (internal) | `struct IPadSkillProposalKanbanColumn` |
| 984 | struct | IPadSkillProposalKanbanCard | (private) | `struct IPadSkillProposalKanbanCard` |
| 1083 | struct | IPadSkillProposalRow | (internal) | `struct IPadSkillProposalRow` |
| 1114 | struct | IPadSkillProposalSheetRoute | (private) | `struct IPadSkillProposalSheetRoute` |
| 1122 | struct | IPadSkillProposalAction | (internal) | `struct IPadSkillProposalAction` |
| 1132 | struct | IPadSkillProposalManifest | (private) | `struct IPadSkillProposalManifest` |
| 1136 | struct | IPadSkillProposalManifestEntry | (internal) | `struct IPadSkillProposalManifestEntry` |
| 1147 | struct | IPadSkillWorkshopAgentScope | (private) | `struct IPadSkillWorkshopAgentScope` |
| 1152 | struct | IPadSkillProposalListParams | (private) | `struct IPadSkillProposalListParams` |
| 1156 | struct | IPadSkillProposalInspectParams | (private) | `struct IPadSkillProposalInspectParams` |
| 1161 | struct | IPadSkillProposalInspectResponse | (internal) | `struct IPadSkillProposalInspectResponse` |
| 1167 | struct | IPadSkillProposalRecord | (internal) | `struct IPadSkillProposalRecord` |
| 1176 | struct | IPadSkillProposalTarget | (internal) | `struct IPadSkillProposalTarget` |
| 1181 | struct | IPadSkillProposalSupportFile | (internal) | `struct IPadSkillProposalSupportFile` |
| 1186 | struct | IPadSkillProposal | (internal) | `struct IPadSkillProposal` |
| 1196 | method | init | (internal) | `init(entry: IPadSkillProposalManifestEntry, pre...` |
| 1208 | method | init | (internal) | `init(inspect: IPadSkillProposalInspectResponse,...` |
| 1245 | fn | parseDate | (private) | `private static func parseDate(_ value: String) ...` |
| 1249 | fn | stripFrontmatter | (private) | `private static func stripFrontmatter(_ value: S...` |
