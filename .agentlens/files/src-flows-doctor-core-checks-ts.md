# src/flows/doctor-core-checks.ts

[← Back to Module](../modules/src-flows/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1199
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | type | CoreHealthCheckContext | (private) | - |
| 61 | type | CoreHealthRepairContext | (private) | - |
| 65 | fn | loadDoctorCoreChecksRuntimeModule | (private) | `const loadDoctorCoreChecksRuntimeModule = async...` |
| 67 | fn | loadDoctorWorkspaceModule | (private) | `const loadDoctorWorkspaceModule = async () => a...` |
| 69 | type | CoreHealthCheckDeps | pub | - |
| 88 | fn | detectUnavailableSkillsWithRuntime | (private) | `async function detectUnavailableSkillsWithRuntime(` |
| 95 | fn | collectSecurityWarningsWithRuntime | (private) | `async function collectSecurityWarningsWithRunti...` |
| 100 | fn | collectWorkspaceSuggestionNotesWithRuntime | (private) | `async function collectWorkspaceSuggestionNotesW...` |
| 116 | fn | collectRuntimeToolSchemaFindingsWithRuntime | (private) | `async function collectRuntimeToolSchemaFindings...` |
| 123 | fn | collectProviderCatalogProjectionFindingsWithRuntime | (private) | `async function collectProviderCatalogProjection...` |
| 130 | fn | collectLocalAudioAccelerationFindingsWithRuntime | (private) | `async function collectLocalAudioAccelerationFin...` |
| 137 | fn | collectGatewayHealthFindingsWithRuntime | (private) | `async function collectGatewayHealthFindingsWith...` |
| 144 | fn | collectGatewayDaemonFindingsWithRuntime | (private) | `async function collectGatewayDaemonFindingsWith...` |
| 162 | fn | configValidationIssuesToHealthFindings | pub | `export function configValidationIssuesToHealthF...` |
| 257 | fn | resolveDoctorMode | (private) | `function resolveDoctorMode(cfg: OpenClawConfig)...` |
| 261 | fn | buildGatewayTokenSecretRefUnavailableMessage | pub | `export function buildGatewayTokenSecretRefUnava...` |
| 279 | fn | buildGatewayTokenSecretRefFixHint | pub | `export function buildGatewayTokenSecretRefFixHi...` |
| 533 | fn | createRuntimeToolSchemaCheck | (private) | `function createRuntimeToolSchemaCheck(deps: Cor...` |
| 545 | fn | createProviderCatalogProjectionCheck | (private) | `function createProviderCatalogProjectionCheck(d...` |
| 557 | fn | normalizeDoctorNoteLine | (private) | `function normalizeDoctorNoteLine(line: string):...` |
| 561 | fn | noteTextToFinding | (private) | `function noteTextToFinding(params: {` |
| 577 | fn | inferCapturedNoteSeverity | (private) | `function inferCapturedNoteSeverity(text: string...` |
| 595 | fn | createNoteCollector | (private) | `function createNoteCollector(checkId: string): {` |
| 623 | fn | noteMessageToText | (private) | `function noteMessageToText(message: unknown): s...` |
| 659 | fn | createSecurityCheck | (private) | `function createSecurityCheck(deps: CoreHealthCh...` |
| 825 | fn | createGatewayHealthCheck | (private) | `function createGatewayHealthCheck(deps: CoreHea...` |
| 838 | fn | createGatewayDaemonCheck | (private) | `function createGatewayDaemonCheck(deps: CoreHea...` |
| 890 | fn | createSkillsReadinessCheck | (private) | `function createSkillsReadinessCheck(` |
| 929 | fn | unavailableSkillToFinding | (private) | `function unavailableSkillToFinding(skill: Skill...` |
| 940 | fn | filterUnavailableSkillsForScope | (private) | `function filterUnavailableSkillsForScope(` |
| 953 | fn | skillReadinessPath | (private) | `function skillReadinessPath(skill: SkillStatusE...` |
| 957 | fn | browserResidueDeps | (private) | `function browserResidueDeps(ctx: { configPath?:...` |
| 961 | fn | browserResidueFinding | (private) | `function browserResidueFinding(residue: LegacyC...` |
| 973 | fn | formatWouldArchiveBrowserResidue | (private) | `function formatWouldArchiveBrowserResidue(resid...` |
| 1105 | fn | createWorkspaceSuggestionsCheck | (private) | `function createWorkspaceSuggestionsCheck(` |
| 1129 | fn | createConvertedWorkflowChecks | (private) | `function createConvertedWorkflowChecks(` |
| 1171 | fn | registerCoreHealthChecks | pub | `export function registerCoreHealthChecks(): void {` |
| 1181 | fn | resetCoreHealthChecksForTest | pub | `export function resetCoreHealthChecksForTest():...` |
| 1185 | fn | createCoreHealthChecks | pub | `export function createCoreHealthChecks(` |

## Public API

### `configValidationIssuesToHealthFindings`

```
export function configValidationIssuesToHealthFindings(
```

**Line:** 162 | **Kind:** fn

### `buildGatewayTokenSecretRefUnavailableMessage`

```
export function buildGatewayTokenSecretRefUnavailableMessage(params: {
```

**Line:** 261 | **Kind:** fn

### `buildGatewayTokenSecretRefFixHint`

```
export function buildGatewayTokenSecretRefFixHint(ref: SecretRef): string {
```

**Line:** 279 | **Kind:** fn

### `registerCoreHealthChecks`

```
export function registerCoreHealthChecks(): void {
```

**Line:** 1171 | **Kind:** fn

### `resetCoreHealthChecksForTest`

```
export function resetCoreHealthChecksForTest(): void {
```

**Line:** 1181 | **Kind:** fn

### `createCoreHealthChecks`

```
export function createCoreHealthChecks(
```

**Line:** 1185 | **Kind:** fn
