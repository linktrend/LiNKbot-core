# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/llm/providers/stream-wrappers/anthropic-family-tool-payload-compat.test.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | runWrapper | (private) |

## src/llm/providers/stream-wrappers/anthropic-family-tool-payload-compat.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | AnthropicToolSchemaMode | (private) |
| 8 | type | AnthropicToolChoiceMode | (private) |
| 10 | type | AnthropicToolPayloadCompatibilityOptions | (private) |
| 15 | type | PayloadFieldRead | (private) |
| 17 | type | OpenAiToolProjection | (private) |
| 24 | type | OpenAiFunctionToolsProjection | (private) |
| 31 | fn | readPayloadField | (private) |
| 39 | fn | isProviderSupportedSchemaViolation | (private) |
| 43 | fn | projectJsonObjectSchema | (private) |
| 74 | fn | snapshotJsonRecord | (private) |
| 87 | fn | snapshotToolMetadata | (private) |
| 115 | fn | hasOpenAiAnthropicToolPayloadCompatFlag | (private) |
| 126 | fn | requiresAnthropicToolPayloadCompatibilityForModel | (private) |
| 142 | fn | usesOpenAiFunctionAnthropicToolSchemaForModel | (private) |
| 153 | fn | usesOpenAiStringModeAnthropicToolChoiceForModel | (private) |
| 165 | fn | normalizeOpenAiFunctionAnthropicToolDefinition | (private) |
| 318 | fn | projectOpenAiFunctionAnthropicTools | (private) |
| 348 | fn | isProjectedToolAvailable | (private) |
| 358 | fn | projectToolChoiceKind | (private) |
| 366 | fn | normalizeAllowedToolChoice | (private) |
| 407 | fn | normalizeOpenAiStringModeAnthropicToolChoice | (private) |
| 491 | fn | createAnthropicToolPayloadCompatibilityWrapper | pub |
| 546 | fn | createOpenAIAnthropicToolPayloadCompatibilityWrapper | pub |

## src/llm/providers/stream-wrappers/openai.test.ts (802 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | createPayloadCapture | (private) |

## src/llm/providers/stream-wrappers/openai.ts (841 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | OpenAIServiceTier | (private) |
| 44 | type | DynamicFastMode | (private) |
| 45 | type | OpenClawSimpleStreamOptions | (private) |
| 48 | type | OpenAIResponsesReplayOptions | (private) |
| 53 | fn | resolveOpenAITextVerbosityForModel | (private) |
| 66 | fn | resolveOpenAIRequestCapabilities | (private) |
| 86 | fn | shouldApplyOpenAIAttributionHeaders | (private) |
| 95 | fn | shouldUseCodexNativeTransport | (private) |
| 108 | fn | shouldApplyOpenAIServiceTier | (private) |
| 116 | fn | isCodeModeEnabled | (private) |
| 132 | fn | readPayloadToolField | (private) |
| 140 | fn | isPromiseLike | (private) |
| 148 | fn | readPayloadToolName | (private) |
| 165 | fn | isCodeModePayloadToolName | (private) |
| 169 | fn | filterCodeModeToolDeclarations | (private) |
| 178 | fn | filterCodeModeGroupedToolDeclarations | (private) |
| 196 | fn | filterCodeModePayloadTools | (private) |
| 214 | fn | filterCodeModePayloadHookResult | (private) |
| 220 | fn | hasCodeModeVisibleTools | (private) |
| 228 | fn | shouldApplyOpenAIReasoningCompatibility | (private) |
| 241 | fn | shouldFlattenOpenAICompletionMessages | (private) |
| 252 | fn | shouldStripOpenAICompletionTools | (private) |
| 260 | fn | shouldStripOpenAICompletionMessageKeys | (private) |
| 271 | fn | hasResponsesWebSearchTool | (private) |
| 290 | fn | resolveOpenAIThinkingPayloadEffort | (private) |
| 320 | fn | raiseMinimalReasoningForResponsesWebSearchPayload | (private) |
| 340 | fn | normalizeOpenAIServiceTier | (private) |
| 357 | fn | resolveOpenAIServiceTier | pub |
| 369 | fn | normalizeOpenAIFastMode | (private) |
| 409 | fn | resolveOpenAIFastMode | pub |
| 426 | fn | applyOpenAIFastModePayloadOverrides | (private) |
| 436 | fn | createOpenAIResponsesContextManagementWrapper | pub |
| 478 | fn | createOpenAIReasoningCompatibilityWrapper | pub |
| 496 | fn | createOpenAIStringContentWrapper | pub |
| 512 | fn | createOpenAICompletionsStrictMessageKeysWrapper | pub |
| 530 | fn | createOpenAICompletionsToolsCompatWrapper | pub |
| 547 | fn | createOpenAIThinkingLevelWrapper | pub |
| 595 | fn | createOpenAIFastModeWrapper | pub |
| 627 | fn | createOpenAIServiceTierWrapper | pub |
| 645 | fn | createOpenAITextVerbosityWrapper | pub |
| 677 | fn | createCodexNativeWebSearchWrapper | pub |
| 799 | fn | createOpenAIDefaultTransportWrapper | pub |
| 811 | fn | createOpenAIAttributionHeadersWrapper | pub |
