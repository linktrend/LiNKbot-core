# apps/macos/Sources/OpenClaw/OnboardingView+Pages.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1036
- **Language:** Swift
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | mod | extension OnboardingView | (internal) | - |
| 8 | fn | pageView | (internal) | `@ViewBuilder   func pageView(for pageIndex: Int...` |
| 29 | fn | welcomePage | (internal) | `func welcomePage() -> some View` |
| 79 | fn | connectionPage | (internal) | `func connectionPage() -> some View` |
| 196 | fn | gatewayDiscoverySection | (private) | `@ViewBuilder   private func gatewayDiscoverySec...` |
| 239 | fn | advancedConnectionSection | (private) | `@ViewBuilder   private func advancedConnectionS...` |
| 357 | fn | updateManualRemoteTransport | (internal) | `func updateManualRemoteTransport(_ value: AppSt...` |
| 364 | fn | updateManualRemoteURL | (internal) | `func updateManualRemoteURL(_ value: String)` |
| 371 | fn | updateManualRemoteTarget | (internal) | `func updateManualRemoteTarget(_ value: String)` |
| 378 | fn | retireGatewayStateForRemoteEndpointEdit | (internal) | `func retireGatewayStateForRemoteEndpointEdit()` |
| 385 | fn | clearPreferredGatewayForManualEndpointEdit | (private) | `private func clearPreferredGatewayForManualEndp...` |
| 441 | fn | remoteConnectionSection | (private) | `private func remoteConnectionSection() -> some ...` |
| 487 | fn | remoteTokenField | (private) | `private func remoteTokenField() -> some View` |
| 512 | fn | remoteProbeStatusView | (private) | `@ViewBuilder   private func remoteProbeStatusVi...` |
| 543 | fn | remoteAuthPromptView | (private) | `private func remoteAuthPromptView(issue: Remote...` |
| 568 | fn | probeRemoteConnection | (private) | `@MainActor   private func probeRemoteConnection...` |
| 599 | fn | resetRemoteProbeFeedback | (internal) | `func resetRemoteProbeFeedback()` |
| 604 | fn | remoteAuthPromptStyle | (internal) | `static func remoteAuthPromptStyle(     for issu...` |
| 624 | fn | shouldShowRemoteTokenField | (internal) | `static func shouldShowRemoteTokenField(     sho...` |
| 636 | fn | shouldResetRemoteProbeFeedback | (internal) | `static func shouldResetRemoteProbeFeedback(    ...` |
| 643 | fn | gatewaySubtitle | (internal) | `func gatewaySubtitle(for gateway: GatewayDiscov...` |
| 656 | fn | isSelectedGateway | (internal) | `func isSelectedGateway(_ gateway: GatewayDiscov...` |
| 661 | fn | connectionChoiceButton | (internal) | `func connectionChoiceButton(     title: String,...` |
| 714 | fn | permissionsPage | (internal) | `func permissionsPage(contentHeight: CGFloat) ->...` |
| 751 | fn | cliPage | (internal) | `func cliPage() -> some View` |
| 844 | fn | installStepRow | (private) | `private func installStepRow(     title: String,...` |
| 885 | fn | readyPage | (internal) | `func readyPage() -> some View` |
| 959 | fn | maybeLoadOnboardingSkills | (private) | `private func maybeLoadOnboardingSkills() async` |
