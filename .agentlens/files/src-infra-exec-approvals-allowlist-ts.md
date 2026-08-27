# src/infra/exec-approvals-allowlist.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1503
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | fn | hasShellLineContinuation | (private) | `function hasShellLineContinuation(command: stri...` |
| 71 | fn | commandStepToPolicySegment | (private) | `function commandStepToPolicySegment(` |
| 91 | fn | explainShellPolicySegments | (private) | `async function explainShellPolicySegments(param...` |
| 106 | fn | normalizeSafeBins | pub | `export function normalizeSafeBins(entries?: rea...` |
| 116 | fn | resolveSafeBins | pub | `export function resolveSafeBins(entries?: reado...` |
| 123 | fn | isSafeBinUsage | pub | `export function isSafeBinUsage(params: {` |
| 171 | fn | isPathScopedExecutableToken | (private) | `function isPathScopedExecutableToken(token: str...` |
| 175 | type | ExecAllowlistEvaluation | pub | - |
| 182 | type | ExecSegmentSatisfiedBy | pub | - |
| 189 | type | SkillBinTrustEntry | pub | - |
| 193 | type | ExecAllowlistContext | (private) | - |
| 206 | fn | pickExecAllowlistContext | (private) | `function pickExecAllowlistContext(params: ExecA...` |
| 221 | fn | normalizeSkillBinName | (private) | `function normalizeSkillBinName(value: string | ...` |
| 226 | fn | normalizeSkillBinResolvedPath | (private) | `function normalizeSkillBinResolvedPath(value: s...` |
| 238 | fn | buildSkillBinTrustIndex | (private) | `function buildSkillBinTrustIndex(` |
| 258 | fn | isSkillAutoAllowedSegment | (private) | `function isSkillAutoAllowedSegment(params: {` |
| 286 | type | InlineChainAllowlistEvaluation | (private) | - |
| 291 | type | SegmentMatchEvaluation | (private) | - |
| 299 | type | PackageManagerTrustTarget | (private) | - |
| 307 | fn | resolvePackageManagerTrustTargetArgv | (private) | `function resolvePackageManagerTrustTargetArgv(` |
| 334 | fn | resolvePackageManagerAllowlistTargetArgv | (private) | `function resolvePackageManagerAllowlistTargetArgv(` |
| 355 | fn | matchExecutableAllowlistForSegment | (private) | `function matchExecutableAllowlistForSegment(par...` |
| 387 | fn | executableResolutionsReferToSameTarget | (private) | `function executableResolutionsReferToSameTarget(` |
| 402 | fn | resolveShellWrapperScriptArgv | (private) | `function resolveShellWrapperScriptArgv(params: {` |
| 424 | fn | resolvePowerShellFileScriptArgv | (private) | `function resolvePowerShellFileScriptArgv(params: {` |
| 455 | fn | resolveSegmentSourceArgv | (private) | `function resolveSegmentSourceArgv(segment: Exec...` |
| 475 | fn | resolveSegmentAllowlistMatch | (private) | `function resolveSegmentAllowlistMatch(params: {` |
| 593 | fn | resolveSegmentSatisfaction | (private) | `function resolveSegmentSatisfaction(params: {` |
| 629 | fn | resolveInlineCommandFallback | (private) | `function resolveInlineCommandFallback(params: {` |
| 648 | fn | evaluateShellWrapperInlineCommand | (private) | `function evaluateShellWrapperInlineCommand(para...` |
| 680 | fn | evaluateSegments | (private) | `function evaluateSegments(` |
| 738 | fn | resolveAnalysisSegmentGroups | (private) | `function resolveAnalysisSegmentGroups(analysis:...` |
| 745 | type | CandidateEvaluation | (private) | - |
| 750 | fn | evaluateAuthorizationCandidate | (private) | `function evaluateAuthorizationCandidate(params: {` |
| 778 | type | PlanGroupEvaluation | (private) | - |
| 784 | fn | evaluateAuthorizationPlanGroup | (private) | `function evaluateAuthorizationPlanGroup(params: {` |
| 828 | fn | finalizeShellAllowlistEvaluations | (private) | `function finalizeShellAllowlistEvaluations(para...` |
| 859 | fn | evaluateAuthorizationPlan | (private) | `function evaluateAuthorizationPlan(params: {` |
| 898 | fn | evaluateExecAllowlist | pub | `export function evaluateExecAllowlist(` |
| 947 | type | ExecAllowlistAnalysis | pub | - |
| 957 | fn | hasSegmentExecutableMatch | (private) | `function hasSegmentExecutableMatch(` |
| 978 | fn | isShellWrapperSegment | (private) | `function isShellWrapperSegment(segment: ExecCom...` |
| 990 | fn | hasDisqualifyingShellWrapperScriptOption | (private) | `function hasDisqualifyingShellWrapperScriptOpti...` |
| 999 | fn | resolveShellWrapperScriptCandidatePath | (private) | `function resolveShellWrapperScriptCandidatePath...` |
| 1066 | fn | resolveShellWrapperPositionalArgvCandidatePath | (private) | `function resolveShellWrapperPositionalArgvCandi...` |
| 1118 | type | AllowAlwaysPattern | pub | - |
| 1123 | fn | escapeRegExpLiteral | (private) | `function escapeRegExpLiteral(input: string): st...` |
| 1127 | fn | buildScriptArgPatternFromArgv | (private) | `function buildScriptArgPatternFromArgv(` |
| 1154 | fn | buildArgPatternFromArgv | (private) | `function buildArgPatternFromArgv(argv: string[]...` |
| 1167 | fn | addAllowAlwaysPattern | (private) | `function addAllowAlwaysPattern(` |
| 1180 | fn | resolveCandidateTrustPath | (private) | `function resolveCandidateTrustPath(candidatePat...` |
| 1191 | fn | resolveAllowAlwaysPatternArgv | (private) | `function resolveAllowAlwaysPatternArgv(` |
| 1202 | fn | collectAllowAlwaysPatterns | (private) | `function collectAllowAlwaysPatterns(params: {` |
| 1330 | fn | resolveAllowAlwaysPatternEntries | pub | `export function resolveAllowAlwaysPatternEntrie...` |
| 1352 | fn | resolveAllowAlwaysPatterns | pub | `export function resolveAllowAlwaysPatterns(para...` |
| 1365 | fn | evaluateShellAllowlist | pub | `export function evaluateShellAllowlist(` |
| 1414 | fn | evaluateShellAllowlistWithAuthorization | pub | `export async function evaluateShellAllowlistWit...` |
| 1459 | fn | evaluateExecAllowlistWithAuthorization | pub | `export async function evaluateExecAllowlistWith...` |

## Public API

### `normalizeSafeBins`

```
export function normalizeSafeBins(entries?: readonly string[]): Set<string> {
```

**Line:** 106 | **Kind:** fn

### `resolveSafeBins`

```
export function resolveSafeBins(entries?: readonly string[] | null): Set<string> {
```

**Line:** 116 | **Kind:** fn

### `isSafeBinUsage`

```
export function isSafeBinUsage(params: {
```

**Line:** 123 | **Kind:** fn

### `evaluateExecAllowlist`

```
export function evaluateExecAllowlist(
```

**Line:** 898 | **Kind:** fn

### `resolveAllowAlwaysPatternEntries`

```
export function resolveAllowAlwaysPatternEntries(params: {
```

**Line:** 1330 | **Kind:** fn

### `resolveAllowAlwaysPatterns`

```
export function resolveAllowAlwaysPatterns(params: {
```

**Line:** 1352 | **Kind:** fn

### `evaluateShellAllowlist`

```
export function evaluateShellAllowlist(
```

**Line:** 1365 | **Kind:** fn

### `evaluateShellAllowlistWithAuthorization`

```
export async function evaluateShellAllowlistWithAuthorization(
```

**Line:** 1414 | **Kind:** fn

### `evaluateExecAllowlistWithAuthorization`

```
export async function evaluateExecAllowlistWithAuthorization(
```

**Line:** 1459 | **Kind:** fn
