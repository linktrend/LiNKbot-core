# src/security/audit.ts

[← Back to Module](../modules/src-security/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1585
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | ExecDockerRawFn | (private) | - |
| 67 | type | ProbeGatewayFn | (private) | - |
| 68 | type | SecurityAuditExplicitGatewayAuth | (private) | - |
| 72 | type | SecurityAuditGatewayAuthOverride | (private) | - |
| 73 | type | ClaudePermissionModeHit | (private) | - |
| 77 | type | McpServerSourceSummary | (private) | - |
| 81 | type | AgentSkillMcpBoundaryScope | (private) | - |
| 91 | type | SecurityAuditOptions | (private) | - |
| 127 | type | AuditExecutionContext | (private) | - |
| 187 | fn | countBySeverity | (private) | `function countBySeverity(findings: SecurityAudi...` |
| 203 | fn | emitSecurityAuditReportEvent | (private) | `function emitSecurityAuditReportEvent(params: {` |
| 244 | fn | normalizeSuppressionText | (private) | `function normalizeSuppressionText(value: string...` |
| 248 | fn | materializeAuditGatewayAuthRefs | (private) | `async function materializeAuditGatewayAuthRefs(...` |
| 269 | fn | shouldMaterializeHooksGatewayAuthRefs | (private) | `function shouldMaterializeHooksGatewayAuthRefs(...` |
| 273 | fn | findingMatchesSuppression | (private) | `function findingMatchesSuppression(` |
| 292 | fn | buildSecurityAuditSuppressionsActiveFinding | (private) | `function buildSecurityAuditSuppressionsActiveFi...` |
| 308 | fn | applySecurityAuditSuppressions | (private) | `function applySecurityAuditSuppressions(` |
| 334 | fn | normalizeAllowFromList | (private) | `function normalizeAllowFromList(list: Array<str...` |
| 341 | fn | collectFilesystemFindings | (private) | `async function collectFilesystemFindings(params: {` |
| 472 | fn | collectGatewayConfigFindings | (private) | `function collectGatewayConfigFindings(` |
| 484 | fn | collectPluginSecurityAuditFindings | (private) | `async function collectPluginSecurityAuditFindings(` |
| 576 | fn | collectLoggingFindings | (private) | `function collectLoggingFindings(cfg: OpenClawCo...` |
| 592 | fn | collectElevatedFindings | (private) | `function collectElevatedFindings(cfg: OpenClawC...` |
| 630 | fn | extractClaudePermissionMode | (private) | `function extractClaudePermissionMode(args: read...` |
| 653 | fn | collectRestrictiveClaudePermissionModeHits | (private) | `function collectRestrictiveClaudePermissionMode...` |
| 671 | fn | isManagedClaudeLiveBackendConfig | (private) | `function isManagedClaudeLiveBackendConfig(` |
| 684 | fn | findClaudeCliBackendConfig | (private) | `function findClaudeCliBackendConfig(` |
| 710 | fn | collectYoloExecScopeIds | (private) | `function collectYoloExecScopeIds(cfg: OpenClawC...` |
| 742 | fn | collectExecRuntimeFindings | (private) | `function collectExecRuntimeFindings(cfg: OpenCl...` |
| 1060 | fn | formatNamesPreview | (private) | `function formatNamesPreview(names: readonly str...` |
| 1066 | fn | listConfiguredMcpServerNames | (private) | `function listConfiguredMcpServerNames(cfg: Open...` |
| 1073 | type | GlobalMcporterRegistrySummary | (private) | - |
| 1078 | fn | readGlobalMcporterRegistrySummary | (private) | `async function readGlobalMcporterRegistrySummary(` |
| 1101 | fn | describeMcporterRegistryRejection | (private) | `function describeMcporterRegistryRejection(reas...` |
| 1118 | fn | hasOwnSkillsAllowlist | (private) | `function hasOwnSkillsAllowlist(entry: object | ...` |
| 1122 | fn | collectAgentSkillMcpBoundaryScopes | (private) | `function collectAgentSkillMcpBoundaryScopes(cfg...` |
| 1179 | fn | collectAgentSkillMcpBoundaryFindings | (private) | `async function collectAgentSkillMcpBoundaryFind...` |
| 1239 | fn | collectOpenExecSurfacePaths | (private) | `function collectOpenExecSurfacePaths(cfg: OpenC...` |
| 1246 | fn | visit | (private) | `const visit = (value: unknown, scope: string) => {` |
| 1274 | fn | collectAutoAllowSkillsHits | (private) | `function collectAutoAllowSkillsHits(approvals: ...` |
| 1287 | fn | collectInterpreterAllowlistHits | (private) | `function collectInterpreterAllowlistHits(params: {` |
| 1306 | fn | maybeProbeGateway | (private) | `async function maybeProbeGateway(params: {` |
| 1360 | fn | createAuditExecutionContext | (private) | `async function createAuditExecutionContext(` |
| 1405 | fn | runSecurityAudit | pub | `export async function runSecurityAudit(opts: Se...` |

## Public API

### `runSecurityAudit`

```
export async function runSecurityAudit(opts: SecurityAuditOptions): Promise<SecurityAuditReport> {
```

**Line:** 1405 | **Kind:** fn
