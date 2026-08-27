# extensions/amazon-bedrock/stream.runtime.ts

[← Back to Module](../modules/extensions-amazon-bedrock/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1218
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 76 | type | Block | (private) | - |
| 77 | type | BedrockEventSink | (private) | - |
| 79 | fn | usesClaudeFable5BedrockContract | (private) | `function usesClaudeFable5BedrockContract(model:...` |
| 83 | fn | usesClaudeSonnet5BedrockContract | (private) | `function usesClaudeSonnet5BedrockContract(model...` |
| 87 | fn | usesClaudeStreamingRefusalBedrockContract | (private) | `function usesClaudeStreamingRefusalBedrockContr...` |
| 97 | fn | readBedrockStopDetails | (private) | `function readBedrockStopDetails(fields: Documen...` |
| 105 | fn | normalizeAdaptiveClaudeToolChoice | (private) | `function normalizeAdaptiveClaudeToolChoice(` |
| 118 | fn | resolveAdaptiveBedrockMaxTokens | (private) | `function resolveAdaptiveBedrockMaxTokens(` |
| 383 | fn | formatBedrockError | (private) | `function formatBedrockError(error: unknown): st...` |
| 399 | fn | resolveSimpleBedrockOptions | (private) | `function resolveSimpleBedrockOptions(` |
| 479 | fn | handleContentBlockStart | (private) | `function handleContentBlockStart(` |
| 502 | fn | handleContentBlockDelta | (private) | `function handleContentBlockDelta(` |
| 570 | fn | handleMetadata | (private) | `function handleMetadata(` |
| 585 | fn | handleContentBlockStop | (private) | `function handleContentBlockStop(` |
| 619 | fn | resolveClaudeProfileNameModelId | (private) | `function resolveClaudeProfileNameModelId(modelN...` |
| 634 | fn | isClaudeMythosPreviewModelId | (private) | `function isClaudeMythosPreviewModelId(modelId?:...` |
| 644 | fn | supportsAdaptiveThinking | (private) | `function supportsAdaptiveThinking(model: Model<...` |
| 656 | fn | requiresMandatoryAdaptiveThinking | (private) | `function requiresMandatoryAdaptiveThinking(mode...` |
| 668 | fn | supportsNativeXhighEffort | (private) | `function supportsNativeXhighEffort(model: Model...` |
| 676 | fn | supportsNativeMaxEffort | (private) | `function supportsNativeMaxEffort(model: Model<"...` |
| 684 | fn | mapThinkingLevelToEffort | (private) | `function mapThinkingLevelToEffort(` |
| 717 | fn | resolveCacheRetention | (private) | `function resolveCacheRetention(cacheRetention?:...` |
| 732 | fn | isAnthropicClaudeModel | (private) | `function isAnthropicClaudeModel(model: Model<"b...` |
| 750 | fn | supportsPromptCaching | (private) | `function supportsPromptCaching(model: Model<"be...` |
| 766 | fn | supportsThinkingSignature | (private) | `function supportsThinkingSignature(model: Model...` |
| 770 | fn | buildSystemPrompt | (private) | `function buildSystemPrompt(` |
| 794 | fn | normalizeToolCallId | (private) | `function normalizeToolCallId(id: string): string {` |
| 799 | fn | createBedrockToolResult | (private) | `function createBedrockToolResult(message: ToolR...` |
| 820 | fn | convertMessages | (private) | `function convertMessages(` |
| 981 | fn | convertToolConfig | (private) | `function convertToolConfig(` |
| 1014 | fn | mapStopReason | (private) | `function mapStopReason(reason: string | undefin...` |
| 1037 | fn | getBedrockModelArnRegion | (private) | `function getBedrockModelArnRegion(modelId: stri...` |
| 1041 | fn | getConfiguredBedrockRegion | (private) | `function getConfiguredBedrockRegion(options: Be...` |
| 1053 | fn | hasConfiguredBedrockProfile | (private) | `function hasConfiguredBedrockProfile(options: B...` |
| 1064 | fn | getStandardBedrockEndpointRegion | (private) | `function getStandardBedrockEndpointRegion(baseU...` |
| 1080 | fn | shouldUseExplicitBedrockEndpoint | (private) | `function shouldUseExplicitBedrockEndpoint(` |
| 1093 | fn | isGovCloudBedrockTarget | (private) | `function isGovCloudBedrockTarget(` |
| 1106 | fn | buildAdditionalModelRequestFields | (private) | `function buildAdditionalModelRequestFields(` |
| 1175 | fn | createImageBlock | (private) | `function createImageBlock(mimeType: string, dat...` |
