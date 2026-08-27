# src/infra/outbound/message-action-runner.ts

[← Back to Module](../modules/src-infra-outbound/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2029
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 123 | type | MessageActionRunnerGateway | pub | - |
| 143 | type | RunMessageActionParams | pub | - |
| 202 | type | MessageActionRunResult | pub | - |
| 255 | fn | getToolResult | pub | `export function getToolResult(` |
| 261 | fn | asResultRecord | (private) | `function asResultRecord(value: unknown): Record...` |
| 267 | fn | markDeliveredCurrentSourceReply | (private) | `function markDeliveredCurrentSourceReply<T exte...` |
| 318 | fn | resolveGatewayActionOptions | (private) | `function resolveGatewayActionOptions(gateway?: ...` |
| 326 | fn | callGatewayMessageAction | (private) | `async function callGatewayMessageAction<T>(para...` |
| 391 | fn | isConfirmedGatewayMessageActionRejection | (private) | `function isConfirmedGatewayMessageActionRejecti...` |
| 414 | fn | resolveGatewayActionIdempotencyKey | (private) | `async function resolveGatewayActionIdempotencyK...` |
| 421 | fn | applyCrossContextMessageDecoration | (private) | `function applyCrossContextMessageDecoration({` |
| 450 | fn | maybeApplyCrossContextMarker | (private) | `async function maybeApplyCrossContextMarker(par...` |
| 484 | fn | resolveChannel | (private) | `async function resolveChannel(` |
| 506 | fn | addCandidateAndUnprefixedAlias | (private) | `function addCandidateAndUnprefixedAlias(candida...` |
| 518 | fn | normalizeTargetForAccountBinding | (private) | `function normalizeTargetForAccountBinding(chann...` |
| 526 | fn | inferPeerKindForAccountBinding | (private) | `function inferPeerKindForAccountBinding(channel...` |
| 544 | fn | resolveTargetBoundAccountId | (private) | `function resolveTargetBoundAccountId(params: {` |
| 580 | fn | resolveActionTarget | (private) | `async function resolveActionTarget(params: {` |
| 617 | fn | sanitizeGroupTargetId | (private) | `function sanitizeGroupTargetId(target: string):...` |
| 621 | fn | resolveResolvedTargetOrThrow | (private) | `async function resolveResolvedTargetOrThrow(par...` |
| 646 | type | ResolvedActionContext | (private) | - |
| 661 | type | SendPayloadParts | (private) | - |
| 673 | fn | updateSendPayloadPartsFromReplyPayload | (private) | `function updateSendPayloadPartsFromReplyPayload(` |
| 689 | fn | applySendPayloadPartsToActionParams | (private) | `function applySendPayloadPartsToActionParams(` |
| 709 | fn | collectMessageAttachmentMediaHints | (private) | `function collectMessageAttachmentMediaHints(val...` |
| 715 | fn | pushMedia | (private) | `const pushMedia = (entry: unknown) => {` |
| 738 | fn | hasExplicitSingularTargetParam | (private) | `function hasExplicitSingularTargetParam(params:...` |
| 742 | fn | hasExplicitTargetParam | (private) | `function hasExplicitTargetParam(params: Record<...` |
| 750 | fn | hasPotentialActionTargetInput | (private) | `function hasPotentialActionTargetInput(` |
| 762 | fn | isCurrentSourceTargetParam | (private) | `function isCurrentSourceTargetParam(` |
| 813 | fn | hasExplicitNonCurrentChannelParam | (private) | `function hasExplicitNonCurrentChannelParam(` |
| 827 | fn | applyImplicitSourceReplySendPolicy | (private) | `function applyImplicitSourceReplySendPolicy(` |
| 843 | fn | runGatewayPluginMessageActionOrNull | (private) | `async function runGatewayPluginMessageActionOrN...` |
| 955 | fn | resolveGateway | (private) | `function resolveGateway(input: RunMessageAction...` |
| 971 | fn | handleBroadcastAction | (private) | `async function handleBroadcastAction(` |
| 1061 | fn | handleInternalSourceReplySendAction | (private) | `async function handleInternalSourceReplySendAct...` |
| 1102 | fn | buildInternalSourceReplyToolResult | (private) | `function buildInternalSourceReplyToolResult(pay...` |
| 1154 | fn | buildSendPayloadParts | (private) | `async function buildSendPayloadParts(params: {` |
| 1211 | fn | pushMedia | (private) | `const pushMedia = (value?: string | null) => {` |
| 1342 | fn | handleSendAction | (private) | `async function handleSendAction(ctx: ResolvedAc...` |
| 1605 | fn | handlePollAction | (private) | `async function handlePollAction(ctx: ResolvedAc...` |
| 1715 | fn | handlePluginAction | (private) | `async function handlePluginAction(ctx: Resolved...` |
| 1828 | fn | runMessageAction | pub | `export async function runMessageAction(` |
| 1945 | fn | hydrateActionAttachmentParams | (private) | `const hydrateActionAttachmentParams = () =>` |

## Public API

### `getToolResult`

```
export function getToolResult(
```

**Line:** 255 | **Kind:** fn

### `runMessageAction`

```
export async function runMessageAction(
```

**Line:** 1828 | **Kind:** fn
