# apps/ios/Sources/Design/AgentAutomationDetailScreen.swift

[← Back to Module](../modules/apps-ios-Sources-Design/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1108
- **Language:** Swift
- **Symbols:** 45
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | AgentAutomationDetailSection | (private) | `enum AgentAutomationDetailSection` |
| 21 | struct | AgentAutomationNotice | (private) | `struct AgentAutomationNotice` |
| 41 | struct | AgentAutomationDetailScreen | (internal) | `struct AgentAutomationDetailScreen` |
| 195 | fn | summaryMetric | (private) | `private func summaryMetric(title: String, value...` |
| 242 | fn | identityCard | (private) | `private func identityCard(_ draft: Binding<Agen...` |
| 256 | fn | scheduleCard | (private) | `private func scheduleCard(_ draft: Binding<Agen...` |
| 277 | fn | scheduleFields | (private) | `@ViewBuilder   private func scheduleFields(_ dr...` |
| 322 | fn | actionCard | (private) | `private func actionCard(_ draft: Binding<AgentA...` |
| 331 | fn | payloadFields | (private) | `@ViewBuilder   private func payloadFields(_ dra...` |
| 367 | fn | executionCard | (private) | `private func executionCard(_ draft: Binding<Age...` |
| 385 | fn | managementCard | (private) | `private func managementCard(_ draft: Binding<Ag...` |
| 469 | fn | cardSection | (private) | `private func cardSection(     title: String,   ...` |
| 491 | fn | labeledField | (private) | `private func labeledField(     _ title: String,...` |
| 514 | fn | actionButton | (private) | `@ViewBuilder   private func actionButton(     t...` |
| 543 | fn | messageCard | (private) | `private func messageCard(icon: String, color: C...` |
| 559 | fn | noticeCard | (private) | `private func noticeCard(_ notice: AgentAutomati...` |
| 583 | fn | stateMilliseconds | (private) | `private func stateMilliseconds(_ key: String) -...` |
| 587 | fn | scheduleBinding | (private) | `private func scheduleBinding(     _ draft: Bind...` |
| 600 | fn | payloadBinding | (private) | `private func payloadBinding(     _ draft: Bindi...` |
| 613 | fn | reload | (private) | `@MainActor   private func reload() async` |
| 653 | fn | loadHistory | (private) | `@MainActor   private func loadHistory() async` |
| 665 | fn | loadHistory | (private) | `@MainActor   private func loadHistory(route: Ga...` |
| 683 | fn | save | (private) | `@MainActor   private func save(_ draft: AgentAu...` |
| 702 | fn | setEnabled | (private) | `@MainActor   private func setEnabled(_ enabled:...` |
| 727 | fn | runNow | (private) | `@MainActor   private func runNow() async` |
| 789 | fn | trackRun | (private) | `@MainActor   private func trackRun(_ runID: Str...` |
| 835 | fn | runNotice | (private) | `private static func runNotice(_ entry: CronRunL...` |
| 865 | fn | reloadAfterRun | (private) | `@MainActor   private func reloadAfterRun(route:...` |
| 883 | fn | deleteAutomation | (private) | `@MainActor   private func deleteAutomation() async` |
| 897 | fn | performAction | (private) | `@MainActor   private func performAction(_ name:...` |
| 910 | fn | applyUpdatedJob | (private) | `@MainActor   private func applyUpdatedJob(_ upd...` |
| 919 | fn | gatewayRoute | (private) | `@MainActor   private func gatewayRoute() async ...` |
| 929 | fn | request | (private) | `private func request(     method: String,     p...` |
| 947 | fn | params | (private) | `private static func params(_ value: [String: An...` |
| 955 | fn | runSkipMessage | (private) | `private static func runSkipMessage(_ reason: St...` |
| 966 | fn | relativeTime | (private) | `private static func relativeTime(_ milliseconds...` |
| 972 | fn | duration | (private) | `private static func duration(_ milliseconds: In...` |
| 984 | mod | extension AgentAutomationDetailScreen | (internal) | - |
| 985 | fn | historyRow | (private) | `private func historyRow(_ run: CronRunLogEntry)...` |
| 1028 | fn | initialLoad | (private) | `@MainActor   private func initialLoad() async` |
| 1040 | fn | showError | (private) | `@MainActor   private func showError(title: Stri...` |
| 1050 | mod | extension AgentAutomationScheduleDraft | (internal) | - |
| 1060 | fn | schedule | (internal) | `func schedule(matching schedule: AgentAutomatio...` |
| 1082 | mod | extension AgentAutomationPayloadDraft | (internal) | - |
| 1090 | fn | payload | (internal) | `func payload(matching payload: AgentAutomationP...` |
