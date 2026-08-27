# apps/ios/Sources/Design/SettingsSkillsDestination.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1132
- **Language:** Swift
- **Symbols:** 33
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | enum | SkillsSettingsSection | (private) | `enum SkillsSettingsSection` |
| 17 | enum | InstalledSkillFilter | (private) | `enum InstalledSkillFilter` |
| 37 | enum | SkillsReviewSheet | (private) | `enum SkillsReviewSheet` |
| 49 | struct | SettingsSkillsDestination | (internal) | `struct SettingsSkillsDestination` |
| 399 | fn | loadInitialState | (private) | `private func loadInitialState() async` |
| 420 | fn | refreshVisibleSection | (private) | `private func refreshVisibleSection() async` |
| 430 | fn | updateClawHubSupport | (private) | `private func updateClawHubSupport() async` |
| 453 | fn | loadInstalled | (private) | `private func loadInstalled() async` |
| 479 | fn | searchClawHub | (private) | `private func searchClawHub() async` |
| 517 | fn | review | (private) | `private func review(_ skill: ClawHubSkillSummar...` |
| 556 | fn | install | (private) | `private func install(     _ review: ClawHubSkil...` |
| 658 | fn | setEnabled | (private) | `private func setEnabled(_ skill: SkillStatus, e...` |
| 699 | fn | fetchInstalledSkills | (private) | `private func fetchInstalledSkills(route: Gatewa...` |
| 710 | fn | request | (private) | `private func request(     method: String,     p...` |
| 730 | fn | gatewayRoute | (private) | `private func gatewayRoute() async throws -> Gat...` |
| 740 | fn | resetGatewayState | (private) | `private func resetGatewayState()` |
| 815 | fn | isReady | (internal) | `static func isReady(_ skill: SkillStatus) -> Bool` |
| 819 | fn | needsSetup | (internal) | `static func needsSetup(_ skill: SkillStatus) ->...` |
| 825 | struct | InstalledSkillRow | (private) | `struct InstalledSkillRow` |
| 899 | struct | ClawHubSkillRow | (private) | `struct ClawHubSkillRow` |
| 934 | struct | SkillsNotice | (private) | `struct SkillsNotice` |
| 941 | struct | SkillsNoticeCard | (private) | `struct SkillsNoticeCard` |
| 967 | struct | SkillsInstallReviewSheet | (private) | `struct SkillsInstallReviewSheet` |
| 1008 | struct | SkillsRiskReviewSheet | (private) | `struct SkillsRiskReviewSheet` |
| 1063 | struct | SkillsReviewDetails | (private) | `struct SkillsReviewDetails` |
| 1080 | struct | SkillsReviewLine | (private) | `struct SkillsReviewLine` |
| 1092 | struct | EmptySkillsRequest | (private) | `struct EmptySkillsRequest` |
| 1094 | struct | ClawHubSearchRequest | (private) | `struct ClawHubSearchRequest` |
| 1099 | struct | ClawHubDetailRequest | (private) | `struct ClawHubDetailRequest` |
| 1101 | struct | ClawHubInstallRequest | (private) | `struct ClawHubInstallRequest` |
| 1109 | struct | SkillEnabledRequest | (private) | `struct SkillEnabledRequest` |
| 1114 | enum | SkillsSettingsError | (private) | `enum SkillsSettingsError` |
| 1128 | mod | extension String | (internal) | - |
