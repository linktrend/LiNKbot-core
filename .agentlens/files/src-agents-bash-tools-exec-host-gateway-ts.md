# src/agents/bash-tools.exec-host-gateway.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1415
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 88 | type | ProcessGatewayAllowlistParams | (private) | - |
| 135 | type | ProcessGatewayAllowlistResult | (private) | - |
| 142 | fn | hasGatewayAllowlistMiss | (private) | `function hasGatewayAllowlistMiss(params: {` |
| 155 | fn | resolveGatewayAutoReviewReason | (private) | `function resolveGatewayAutoReviewReason(params: {` |
| 186 | fn | createOneShotAllowAlwaysDecision | (private) | `function createOneShotAllowAlwaysDecision(): Al...` |
| 190 | fn | resolveGatewayEffectiveAllowAlwaysPersistence | (private) | `function resolveGatewayEffectiveAllowAlwaysPers...` |
| 206 | fn | resolveGatewayEnforcedCommand | (private) | `function resolveGatewayEnforcedCommand(params: {` |
| 227 | fn | formatOutcomeExitLabel | (private) | `function formatOutcomeExitLabel(outcome: { exit...` |
| 231 | fn | formatBytes | (private) | `function formatBytes(value: unknown): string | ...` |
| 238 | fn | formatDiagnosticsContents | (private) | `function formatDiagnosticsContents(manifest: Re...` |
| 261 | fn | formatDiagnosticsPrivacy | (private) | `function formatDiagnosticsPrivacy(manifest: Rec...` |
| 282 | fn | formatDiagnosticsExportSuccess | (private) | `function formatDiagnosticsExportSuccess(aggrega...` |
| 322 | fn | emitGatewayExecApprovalSecurityEvent | (private) | `function emitGatewayExecApprovalSecurityEvent(p...` |
| 375 | fn | formatDiagnosticsExportFailure | (private) | `function formatDiagnosticsExportFailure(params: {` |
| 390 | fn | buildGatewayExecApprovalFollowupSummary | (private) | `function buildGatewayExecApprovalFollowupSummar...` |
| 418 | fn | shouldAwaitGatewayApprovalInline | (private) | `function shouldAwaitGatewayApprovalInline(param...` |
| 434 | fn | buildGatewayExecApprovalDeniedToolResult | (private) | `function buildGatewayExecApprovalDeniedToolResu...` |
| 454 | fn | resolveGatewayExecApprovalFollowupText | (private) | `async function resolveGatewayExecApprovalFollow...` |
| 478 | fn | processGatewayAllowlist | pub | `export async function processGatewayAllowlist(` |
| 574 | fn | applyTimedOutAllowlistFallback | (private) | `const applyTimedOutAllowlistFallback = (state: {` |
| 598 | fn | commitExecutionAuthorization | (private) | `const commitExecutionAuthorization = (options: {` |
| 894 | fn | registerGatewayApproval | (private) | `const registerGatewayApproval = async (approval...` |
| 1030 | fn | resolveApprovalForExecution | (private) | `const resolveApprovalForExecution = async (onFa...` |
| 1214 | fn | denyApprovalStateWriteFailure | (private) | `const denyApprovalStateWriteFailure = async () ...` |

## Public API

### `processGatewayAllowlist`

```
export async function processGatewayAllowlist(
```

**Line:** 478 | **Kind:** fn
