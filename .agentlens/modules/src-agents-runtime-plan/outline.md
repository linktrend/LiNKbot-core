# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/agents/runtime-plan/prepare-auth.test.ts (2062 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | prepareAgentRuntimeAuthPlan | (private) |
| 26 | fn | authStore | (private) |
| 33 | fn | allCooldownOpenAIStore | (private) |

## src/agents/runtime-plan/prepare-auth.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | PrepareAgentRuntimeAuthPlanParams | (private) |
| 65 | type | PreparedAgentRuntimeAuthAttempt | pub |
| 90 | type | PreparedAgentRuntimeAuth | pub |
| 97 | fn | canRunPreparedAgentRuntimeAuthAttempt | pub |
| 109 | fn | preparedAgentRuntimeProfileAttemptHasCandidate | pub |
| 129 | fn | agentRuntimeAuthPlanMatchesTarget | pub |
| 143 | fn | resolveProfile | (private) |
| 173 | type | ProviderEntryProfileParams | (private) |
| 181 | fn | resolvePreparedProviderEntryApiKeyProfileReference | (private) |
| 210 | fn | prepareAgentRuntimeAuth | pub |
| 336 | fn | directSource | (private) |

## src/agents/runtime-plan/resolve-auth.test.ts (723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | authStore | (private) |

## src/agents/runtime-plan/types.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | AgentRuntimeTransport | pub |
| 19 | type | AgentRuntimeThinkLevel | (private) |
| 30 | type | AgentRuntimePromptMode | (private) |
| 32 | type | AgentRuntimePromptTrigger | (private) |
| 35 | type | AgentRuntimeFailoverReason | (private) |
| 53 | type | AgentRuntimeConfig | (private) |
| 56 | type | AgentRuntimeModel | (private) |
| 77 | type | AgentRuntimeTextReplacement | (private) |
| 83 | type | AgentRuntimeTextTransforms | (private) |
| 89 | type | AgentRuntimeProviderHandle | (private) |
| 98 | type | AgentRuntimeInteractiveButtonStyle | (private) |
| 100 | type | AgentRuntimeMessagePresentationAction | (private) |
| 136 | type | AgentRuntimeMessagePresentationButton | (private) |
| 158 | type | AgentRuntimeMessagePresentationOption | (private) |
| 167 | type | AgentRuntimeLegacyInteractiveReply | (private) |
| 180 | type | AgentRuntimeMessagePresentationTone | (private) |
| 182 | type | AgentRuntimeMessagePresentationChartBlock | (private) |
| 199 | type | AgentRuntimeMessagePresentationTableCell | (private) |
| 201 | type | AgentRuntimeMessagePresentationTableBlock | (private) |
| 210 | type | AgentRuntimeMessagePresentationBlock | (private) |
| 235 | type | AgentRuntimeMessagePresentation | (private) |
| 245 | type | AgentRuntimeReplyPayloadDeliveryPin | (private) |
| 252 | type | AgentRuntimeReplyPayloadDelivery | (private) |
| 256 | type | AgentRuntimeReplyPayloadLocation | (private) |
| 265 | type | AgentRuntimeReplyPayload | (private) |
| 304 | type | AgentRuntimeSystemPromptSectionId | (private) |
| 307 | type | AgentRuntimeSystemPromptContribution | (private) |
| 314 | type | AgentRuntimeSystemPromptContributionContext | (private) |
| 328 | type | AgentRuntimeFollowupFallbackRouteResult | (private) |
| 334 | type | AgentRuntimeToolCallIdMode | (private) |
| 337 | type | AgentRuntimeTranscriptPolicy | (private) |
| 358 | type | AgentRuntimeOutcomeClassification | (private) |
| 373 | type | AgentRuntimeOutcomeClassifier | (private) |
| 382 | type | AgentRuntimeResolvedRef | (private) |
| 391 | type | AgentRuntimeAuthModelRoute | pub |
| 404 | type | AgentRuntimeAuthDeferredRouteSupport | (private) |
| 410 | type | AgentRuntimeAuthPlan | pub |
| 430 | type | AgentRuntimePromptPlan | (private) |
| 445 | type | AgentRuntimePreparedMetadataSnapshot | (private) |
| 448 | type | PreparedOpenClawToolPlanning | (private) |
| 454 | type | AgentRuntimeToolPlan | (private) |
| 475 | type | AgentRuntimeDeliveryPlan | pub |
| 492 | type | AgentRuntimeOutcomePlan | pub |
| 497 | type | AgentRuntimeTransportPlan | (private) |
| 510 | type | AgentRuntimePlan | pub |
| 539 | type | BuildAgentRuntimeDeliveryPlanParams | pub |
| 549 | type | BuildAgentRuntimePlanParams | pub |
