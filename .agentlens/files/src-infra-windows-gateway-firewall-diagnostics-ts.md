# src/infra/windows-gateway-firewall-diagnostics.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1029
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 27 | fn | buildWindowsNetSecurityFirewallRulesCommand | (private) | `function buildWindowsNetSecurityFirewallRulesCo...` |
| 61 | fn | Test | (private) | `function Test-OpenClawPortMatch($value) {` |
| 102 | fn | buildWindowsPersistentFirewallRulesCommand | (private) | `function buildWindowsPersistentFirewallRulesCom...` |
| 106 | fn | buildWindowsManagedActiveFirewallRulesCommand | (private) | `function buildWindowsManagedActiveFirewallRules...` |
| 114 | fn | buildWindowsFirewallRulesCommand | (private) | `function buildWindowsFirewallRulesCommand(port:...` |
| 119 | fn | Test | (private) | `function Test-OpenClawPortMatch($value) {` |
| 133 | fn | Resolve | (private) | `function Resolve-OpenClawProgramScope($rule) {` |
| 165 | fn | buildWindowsQuickFirewallCommand | (private) | `function buildWindowsQuickFirewallCommand(port:...` |
| 173 | fn | Test | (private) | `function Test-OpenClawPortMatch($value) {` |
| 189 | fn | Resolve | (private) | `function Resolve-OpenClawProgramScope($rule) {` |
| 200 | fn | Get | (private) | `function Get-OpenClawManagedRules {` |
| 274 | type | WindowsGatewayFirewallDiagnosticCode | (private) | - |
| 286 | type | WindowsGatewayFirewallDiagnostic | pub | - |
| 294 | type | WindowsGatewayFirewallCommandResult | (private) | - |
| 302 | type | WindowsGatewayFirewallCommandRunner | (private) | - |
| 307 | type | InspectWindowsGatewayFirewallParams | (private) | - |
| 316 | type | FirewallStatePayload | (private) | - |
| 322 | type | FirewallProfile | (private) | - |
| 330 | type | FirewallRule | (private) | - |
| 340 | type | ClassifiedFirewallState | (private) | - |
| 349 | type | QuickFirewallPayload | (private) | - |
| 355 | fn | powershell | (private) | `function powershell(command: string): string[] {` |
| 366 | fn | runBestEffortCommand | (private) | `async function runBestEffortCommand(` |
| 385 | fn | parseJsonRows | (private) | `function parseJsonRows(value: unknown): unknown...` |
| 392 | fn | parseJsonPayload | (private) | `function parseJsonPayload(stdout: string): unkn...` |
| 404 | fn | stringField | (private) | `function stringField(row: Record<string, unknow...` |
| 415 | fn | normalizeProfileName | (private) | `function normalizeProfileName(value: string): s...` |
| 423 | fn | parseFirewallProfiles | (private) | `function parseFirewallProfiles(value: unknown):...` |
| 436 | fn | parseConnectionProfileNames | (private) | `function parseConnectionProfileNames(value: unk...` |
| 444 | fn | parseFirewallRules | (private) | `function parseFirewallRules(value: unknown): Fi...` |
| 470 | fn | isTruthyFirewallValue | (private) | `function isTruthyFirewallValue(value: string): ...` |
| 474 | fn | isBlockingInbound | (private) | `function isBlockingInbound(profile: FirewallPro...` |
| 478 | fn | inboundRulesAreAllowed | (private) | `function inboundRulesAreAllowed(profiles: Firew...` |
| 482 | fn | findProfileSettings | (private) | `function findProfileSettings(` |
| 492 | fn | profileMaskMatches | (private) | `function profileMaskMatches(value: number, acti...` |
| 501 | fn | ruleMatchesActiveProfile | (private) | `function ruleMatchesActiveProfile(rule: Firewal...` |
| 516 | fn | isLocalRule | (private) | `function isLocalRule(rule: FirewallRule): boole...` |
| 525 | fn | isProgramAgnosticRule | (private) | `function isProgramAgnosticRule(rule: FirewallRu...` |
| 529 | fn | isAnyAddress | (private) | `function isAnyAddress(value: string): boolean {` |
| 533 | fn | isAddressAgnosticRule | (private) | `function isAddressAgnosticRule(rule: FirewallRu...` |
| 537 | fn | localRulesAreAllowed | (private) | `function localRulesAreAllowed(params: {` |
| 567 | fn | formatProfiles | (private) | `function formatProfiles(activeProfileNames: str...` |
| 571 | fn | formatRuleNames | (private) | `function formatRuleNames(rules: FirewallRule[])...` |
| 578 | fn | classifyWindowsGatewayFirewallState | (private) | `function classifyWindowsGatewayFirewallState(` |
| 768 | fn | buildClassifiedState | (private) | `function buildClassifiedState(` |
| 784 | fn | shouldProbeManagedActiveRules | (private) | `function shouldProbeManagedActiveRules(diagnost...` |
| 791 | fn | parseWindowsGatewayFirewallState | (private) | `function parseWindowsGatewayFirewallState(param...` |
| 815 | fn | inspectWindowsGatewayFirewall | pub | `export async function inspectWindowsGatewayFire...` |
| 1017 | fn | formatWindowsGatewayFirewallGuidance | pub | `export function formatWindowsGatewayFirewallGui...` |

## Public API

### `inspectWindowsGatewayFirewall`

```
export async function inspectWindowsGatewayFirewall(
```

**Line:** 815 | **Kind:** fn

### `formatWindowsGatewayFirewallGuidance`

```
export function formatWindowsGatewayFirewallGuidance(params: {
```

**Line:** 1017 | **Kind:** fn
