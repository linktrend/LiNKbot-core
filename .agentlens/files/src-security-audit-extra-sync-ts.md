# src/security/audit-extra.sync.ts

[← Back to Module](../modules/src-security/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1262
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 13

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | SecurityAuditFinding | (private) | - |
| 42 | type | HooksHardeningAuditOptions | (private) | - |
| 46 | type | GatewayHttpNoAuthAuditOptions | (private) | - |
| 50 | type | GatewayAuthSharedSecretLabel | (private) | - |
| 51 | type | GatewayAuthSharedSecretReuse | (private) | - |
| 55 | type | ActiveGatewaySharedSecret | (private) | - |
| 64 | fn | isProbablySyncedPath | (private) | `function isProbablySyncedPath(p: string): boole...` |
| 75 | fn | looksLikeEnvRef | (private) | `function looksLikeEnvRef(value: string): boolean {` |
| 80 | fn | isGatewayRemotelyExposed | (private) | `function isGatewayRemotelyExposed(cfg: OpenClaw...` |
| 89 | fn | formatGatewayAuthDisplayLabel | (private) | `function formatGatewayAuthDisplayLabel(label: G...` |
| 96 | fn | formatHooksTokenReuseDetail | (private) | `function formatHooksTokenReuseDetail(reusedGate...` |
| 103 | fn | listActiveGatewaySharedSecrets | (private) | `function listActiveGatewaySharedSecrets(auth: R...` |
| 113 | fn | findGatewayAuthLabelMatchingHooksToken | (private) | `function findGatewayAuthLabelMatchingHooksToken...` |
| 122 | fn | findHooksTokenGatewayAuthReuse | (private) | `function findHooksTokenGatewayAuthReuse(params: {` |
| 147 | fn | formatHooksTokenReuseRemediation | (private) | `function formatHooksTokenReuseRemediation(reuse...` |
| 154 | fn | hasResolvedGatewayHttpAuth | (private) | `function hasResolvedGatewayHttpAuth(auth: Resol...` |
| 177 | fn | isGptModel | (private) | `function isGptModel(id: string): boolean {` |
| 181 | fn | isGpt5OrHigher | (private) | `function isGpt5OrHigher(id: string): boolean {` |
| 185 | fn | isClaudeModel | (private) | `function isClaudeModel(id: string): boolean {` |
| 189 | fn | isClaude45OrHigher | (private) | `function isClaude45OrHigher(id: string): boolean {` |
| 196 | fn | hasConfiguredDockerConfig | (private) | `function hasConfiguredDockerConfig(` |
| 205 | fn | normalizeNodeCommand | (private) | `function normalizeNodeCommand(value: unknown): ...` |
| 209 | fn | isWildcardEntry | (private) | `function isWildcardEntry(value: unknown): boole...` |
| 213 | fn | listKnownNodeCommands | (private) | `function listKnownNodeCommands(cfg: OpenClawCon...` |
| 281 | fn | looksLikeNodeCommandPattern | (private) | `function looksLikeNodeCommandPattern(value: str...` |
| 299 | fn | editDistance | (private) | `function editDistance(a: string, b: string): nu...` |
| 330 | fn | suggestKnownNodeCommands | (private) | `function suggestKnownNodeCommands(unknown: stri...` |
| 358 | fn | listOpenInboundPolicies | (private) | `function listOpenInboundPolicies(cfg: OpenClawC...` |
| 365 | fn | inspectSection | (private) | `const inspectSection = (section: Record<string,...` |
| 400 | fn | hasConfiguredGroupTargets | (private) | `function hasConfiguredGroupTargets(section: Rec...` |
| 408 | fn | listPotentialMultiUserSignals | (private) | `function listPotentialMultiUserSignals(cfg: Ope...` |
| 415 | fn | inspectSection | (private) | `const inspectSection = (section: Record<string,...` |
| 476 | type | AuditAgentToolContext | (private) | - |
| 482 | fn | listAuditAgentToolContexts | (private) | `function listAuditAgentToolContexts(cfg: OpenCl...` |
| 497 | fn | collectRiskyToolExposureContexts | (private) | `function collectRiskyToolExposureContexts(cfg: ...` |
| 536 | fn | collectControlPlaneToolExposureContexts | (private) | `function collectControlPlaneToolExposureContext...` |
| 564 | fn | collectSyncedFolderFindings | pub | `export function collectSyncedFolderFindings(par...` |
| 581 | fn | collectSecretsInConfigFindings | pub | `export function collectSecretsInConfigFindings(...` |
| 610 | fn | collectHooksHardeningFindings | pub | `export function collectHooksHardeningFindings(` |
| 729 | fn | collectGatewayHttpSessionKeyOverrideFindings | pub | `export function collectGatewayHttpSessionKeyOve...` |
| 756 | fn | collectGatewayHttpNoAuthFindings | pub | `export function collectGatewayHttpNoAuthFindings(` |
| 798 | fn | collectSandboxDockerNoopFindings | pub | `export function collectSandboxDockerNoopFinding...` |
| 848 | fn | collectSandboxDangerousConfigFindings | pub | `export function collectSandboxDangerousConfigFi...` |
| 960 | fn | collectNodeDenyCommandPatternFindings | pub | `export function collectNodeDenyCommandPatternFi...` |
| 1017 | fn | collectNodeDangerousAllowCommandFindings | pub | `export function collectNodeDangerousAllowComman...` |
| 1055 | fn | collectMinimalProfileOverrideFindings | pub | `export function collectMinimalProfileOverrideFi...` |
| 1091 | fn | collectModelHygieneFindings | pub | `export function collectModelHygieneFindings(cfg...` |
| 1099 | fn | addWeakMatch | (private) | `const addWeakMatch = (model: string, source: st...` |
| 1176 | fn | collectExposureMatrixFindings | pub | `export function collectExposureMatrixFindings(c...` |
| 1231 | fn | collectLikelyMultiUserSetupFindings | pub | `export function collectLikelyMultiUserSetupFind...` |

## Public API

### `collectSyncedFolderFindings`

```
export function collectSyncedFolderFindings(params: {
```

**Line:** 564 | **Kind:** fn

### `collectSecretsInConfigFindings`

```
export function collectSecretsInConfigFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 581 | **Kind:** fn

### `collectHooksHardeningFindings`

```
export function collectHooksHardeningFindings(
```

**Line:** 610 | **Kind:** fn

### `collectGatewayHttpSessionKeyOverrideFindings`

```
export function collectGatewayHttpSessionKeyOverrideFindings(
```

**Line:** 729 | **Kind:** fn

### `collectGatewayHttpNoAuthFindings`

```
export function collectGatewayHttpNoAuthFindings(
```

**Line:** 756 | **Kind:** fn

### `collectSandboxDockerNoopFindings`

```
export function collectSandboxDockerNoopFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 798 | **Kind:** fn

### `collectSandboxDangerousConfigFindings`

```
export function collectSandboxDangerousConfigFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 848 | **Kind:** fn

### `collectNodeDenyCommandPatternFindings`

```
export function collectNodeDenyCommandPatternFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 960 | **Kind:** fn

### `collectNodeDangerousAllowCommandFindings`

```
export function collectNodeDangerousAllowCommandFindings(
```

**Line:** 1017 | **Kind:** fn

### `collectMinimalProfileOverrideFindings`

```
export function collectMinimalProfileOverrideFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 1055 | **Kind:** fn

### `collectModelHygieneFindings`

```
export function collectModelHygieneFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 1091 | **Kind:** fn

### `collectExposureMatrixFindings`

```
export function collectExposureMatrixFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 1176 | **Kind:** fn

### `collectLikelyMultiUserSetupFindings`

```
export function collectLikelyMultiUserSetupFindings(cfg: OpenClawConfig): SecurityAuditFinding[] {
```

**Line:** 1231 | **Kind:** fn
