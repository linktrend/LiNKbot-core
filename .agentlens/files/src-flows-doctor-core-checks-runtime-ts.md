# src/flows/doctor-core-checks.runtime.ts

[← Back to Module](../modules/src-flows/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1176
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | BundleMcpToolRuntime | (private) | - |
| 59 | fn | formatGatewayHealthTarget | (private) | `function formatGatewayHealthTarget(url: string)...` |
| 63 | fn | detectUnavailableSkills | pub | `export function detectUnavailableSkills(cfg: Op...` |
| 73 | fn | collectLocalAudioAccelerationFindings | pub | `export async function collectLocalAudioAccelera...` |
| 105 | fn | collectGatewayHealthFindings | pub | `export async function collectGatewayHealthFindi...` |
| 154 | fn | gatewayRuntimeStatus | (private) | `function gatewayRuntimeStatus(runtime: GatewayS...` |
| 158 | fn | collectGatewayDaemonFindings | pub | `export async function collectGatewayDaemonFindi...` |
| 235 | fn | providerCatalogPath | (private) | `function providerCatalogPath(pluginId: string |...` |
| 239 | fn | providerCatalogProjectionFinding | (private) | `function providerCatalogProjectionFinding(param...` |
| 258 | fn | isReadableRecord | (private) | `function isReadableRecord(value: unknown): valu...` |
| 262 | fn | isTrimmedNonEmptyString | (private) | `function isTrimmedNonEmptyString(value: unknown...` |
| 266 | fn | hasProviderCatalogKey | (private) | `function hasProviderCatalogKey(params: {` |
| 287 | fn | readProviderCatalogValue | (private) | `function readProviderCatalogValue(params: {` |
| 311 | fn | collectProviderCatalogModelFindings | (private) | `function collectProviderCatalogModelFindings(pa...` |
| 403 | fn | collectProviderCatalogResultFindings | (private) | `function collectProviderCatalogResultFindings(p...` |
| 546 | fn | readProviderCatalogOrder | (private) | `function readProviderCatalogOrder(` |
| 577 | fn | groupProviderCatalogsForDoctor | (private) | `function groupProviderCatalogsForDoctor(provide...` |
| 603 | fn | collectProviderCatalogProjectionFindings | pub | `export async function collectProviderCatalogPro...` |
| 698 | fn | buildDoctorRuntimeModel | (private) | `function buildDoctorRuntimeModel(params: {` |
| 724 | fn | toolSchemaDiagnosticToFinding | (private) | `function toolSchemaDiagnosticToFinding(params: {` |
| 759 | fn | collectToolSchemaFindings | (private) | `function collectToolSchemaFindings(params: {` |
| 772 | fn | collectNormalizedToolSchemaFindings | (private) | `function collectNormalizedToolSchemaFindings(pa...` |
| 819 | fn | collectBundleMcpRuntimeToolSchemaFindings | (private) | `function collectBundleMcpRuntimeToolSchemaFindi...` |
| 850 | fn | agentRuntimeToolLoadFailureFinding | (private) | `function agentRuntimeToolLoadFailureFinding(par...` |
| 865 | fn | agentRuntimeToolNormalizationFailureFinding | (private) | `function agentRuntimeToolNormalizationFailureFi...` |
| 880 | fn | collectAgentRuntimeToolSchemaFindings | (private) | `function collectAgentRuntimeToolSchemaFindings(...` |
| 921 | fn | bundleMcpRuntimeNormalizationFailureFinding | (private) | `function bundleMcpRuntimeNormalizationFailureFi...` |
| 933 | fn | bundleMcpRuntimeLoadFailureFinding | (private) | `function bundleMcpRuntimeLoadFailureFinding(err...` |
| 945 | fn | bundleMcpRuntimeDiagnosticFinding | (private) | `function bundleMcpRuntimeDiagnosticFinding(diag...` |
| 957 | fn | makeBundleMcpDiagnosticSentinel | (private) | `function makeBundleMcpDiagnosticSentinel(name: ...` |
| 969 | fn | synthesizeBundleMcpAllowlistSentinelName | (private) | `function synthesizeBundleMcpAllowlistSentinelNa...` |
| 990 | fn | collectBundleMcpDiagnosticSentinels | (private) | `function collectBundleMcpDiagnosticSentinels(pa...` |
| 1033 | fn | shouldReportBundleMcpRuntimeDiagnostic | (private) | `function shouldReportBundleMcpRuntimeDiagnostic...` |
| 1055 | fn | filterPolicyActiveBundleMcpDiagnostics | (private) | `function filterPolicyActiveBundleMcpDiagnostics...` |
| 1071 | fn | isAcpRuntimeAgent | (private) | `function isAcpRuntimeAgent(cfg: OpenClawConfig,...` |
| 1078 | fn | collectRuntimeToolSchemaFindings | pub | `export async function collectRuntimeToolSchemaF...` |

## Public API

### `detectUnavailableSkills`

```
export function detectUnavailableSkills(cfg: OpenClawConfig): SkillStatusEntry[] {
```

**Line:** 63 | **Kind:** fn

### `collectLocalAudioAccelerationFindings`

```
export async function collectLocalAudioAccelerationFindings(): Promise<readonly HealthFinding[]> {
```

**Line:** 73 | **Kind:** fn

### `collectGatewayHealthFindings`

```
export async function collectGatewayHealthFindings(
```

**Line:** 105 | **Kind:** fn

### `collectGatewayDaemonFindings`

```
export async function collectGatewayDaemonFindings(
```

**Line:** 158 | **Kind:** fn

### `collectProviderCatalogProjectionFindings`

```
export async function collectProviderCatalogProjectionFindings(
```

**Line:** 603 | **Kind:** fn

### `collectRuntimeToolSchemaFindings`

```
export async function collectRuntimeToolSchemaFindings(
```

**Line:** 1078 | **Kind:** fn
