# src/cli/command-secret-gateway.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1120
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | ResolveCommandSecretsResult | (private) | - |
| 41 | type | CommandSecretResolutionMode | pub | - |
| 46 | type | LegacyCommandSecretResolutionMode | (private) | - |
| 48 | type | CommandSecretResolutionModeInput | (private) | - |
| 52 | type | CommandSecretTargetState | (private) | - |
| 58 | type | CommandSecretResolutionPolicy | (private) | - |
| 63 | type | GatewaySecretsResolveResult | (private) | - |
| 77 | type | CommandSecretGatewayDeps | (private) | - |
| 117 | fn | pluginIdFromRuntimeWebPath | (private) | `function pluginIdFromRuntimeWebPath(path: strin...` |
| 122 | fn | normalizeCommandSecretResolutionMode | (private) | `function normalizeCommandSecretResolutionMode(` |
| 134 | fn | enforcesResolvedSecrets | (private) | `function enforcesResolvedSecrets(mode: CommandS...` |
| 138 | fn | dedupeDiagnostics | (private) | `function dedupeDiagnostics(entries: readonly st...` |
| 152 | fn | targetsRuntimeWebPath | (private) | `function targetsRuntimeWebPath(path: string): b...` |
| 156 | fn | classifyRuntimeWebTargetPathState | (private) | `function classifyRuntimeWebTargetPathState(para...` |
| 205 | fn | describeInactiveRuntimeWebTargetPath | (private) | `function describeInactiveRuntimeWebTargetPath(p...` |
| 244 | fn | targetsRuntimeWebResolution | (private) | `function targetsRuntimeWebResolution(params: {` |
| 264 | fn | collectConfiguredTargetRefPaths | (private) | `function collectConfiguredTargetRefPaths(params: {` |
| 290 | fn | classifyConfiguredTargetRefs | (private) | `function classifyConfiguredTargetRefs(params: {` |
| 353 | fn | parseGatewaySecretsResolveResult | (private) | `function parseGatewaySecretsResolveResult(paylo...` |
| 369 | fn | collectInactiveSurfacePathsFromDiagnostics | (private) | `function collectInactiveSurfacePathsFromDiagnos...` |
| 385 | fn | filterAllowedGatewayDiagnostics | (private) | `function filterAllowedGatewayDiagnostics(params: {` |
| 407 | fn | isUnsupportedSecretsResolveError | (private) | `function isUnsupportedSecretsResolveError(err: ...` |
| 420 | fn | isAllowedPathsSecretsResolveCompatError | (private) | `function isAllowedPathsSecretsResolveCompatErro...` |
| 428 | fn | hasForcedActivePaths | (private) | `function hasForcedActivePaths(paths: ReadonlySe...` |
| 432 | fn | resolveLocalResolutionPolicy | (private) | `function resolveLocalResolutionPolicy(params: {` |
| 442 | fn | collectActiveGatewayExecSecretRefCredentialPaths | (private) | `function collectActiveGatewayExecSecretRefCrede...` |
| 462 | fn | resolveCommandSecretRefsWithoutGateway | (private) | `async function resolveCommandSecretRefsWithoutG...` |
| 491 | fn | callGatewaySecretsResolve | (private) | `async function callGatewaySecretsResolve(params: {` |
| 536 | fn | isDirectRuntimeWebTargetPath | (private) | `function isDirectRuntimeWebTargetPath(path: str...` |
| 540 | fn | resolveCommandSecretRefsLocally | (private) | `async function resolveCommandSecretRefsLocally(...` |
| 707 | fn | buildTargetStatesByPath | (private) | `function buildTargetStatesByPath(params: {` |
| 724 | fn | buildUnresolvedDiagnostics | (private) | `function buildUnresolvedDiagnostics(` |
| 738 | fn | scrubUnresolvedAssignments | (private) | `function scrubUnresolvedAssignments(` |
| 747 | fn | filterInactiveSurfaceDiagnostics | (private) | `function filterInactiveSurfaceDiagnostics(param...` |
| 762 | fn | resolveTargetSecretLocally | (private) | `async function resolveTargetSecretLocally(param...` |
| 827 | fn | resolveCommandSecretRefsViaGateway | pub | `export async function resolveCommandSecretRefsV...` |

## Public API

### `resolveCommandSecretRefsViaGateway`

```
export async function resolveCommandSecretRefsViaGateway(params: {
```

**Line:** 827 | **Kind:** fn
