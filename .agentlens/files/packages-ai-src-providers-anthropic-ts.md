# packages/ai/src/providers/anthropic.ts

[← Back to Module](../modules/packages-ai-src-providers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1684
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 105 | fn | getCacheControl | (private) | `function getCacheControl(` |
| 151 | fn | toClaudeCodeName | (private) | `const toClaudeCodeName = (name: string) => ccTo...` |
| 156 | fn | convertContentBlocks | (private) | `function convertContentBlocks(` |
| 229 | type | AnthropicEffort | pub | - |
| 231 | type | AnthropicThinkingDisplay | pub | - |
| 237 | fn | getAnthropicCompat | (private) | `function getAnthropicCompat(model: Model<"anthr...` |
| 252 | interface | AnthropicOptions | pub | - |
| 297 | fn | mergeHeaders | (private) | `function mergeHeaders(` |
| 467 | type | Block | (private) | - |
| 812 | fn | normalizeAnthropicToolChoice | (private) | `function normalizeAnthropicToolChoice(` |
| 828 | fn | supportsAdaptiveThinking | (private) | `function supportsAdaptiveThinking(model: Model<...` |
| 832 | fn | normalizeAnthropicThinkingOptions | (private) | `function normalizeAnthropicThinkingOptions(` |
| 851 | fn | supportsNativeXhighEffort | (private) | `function supportsNativeXhighEffort(model: Model...` |
| 859 | fn | mapThinkingLevelToEffort | (private) | `function mapThinkingLevelToEffort(` |
| 897 | type | AnthropicSimpleStreamOptions | (private) | - |
| 982 | fn | isOAuthToken | (private) | `function isOAuthToken(apiKey: string): boolean {` |
| 987 | fn | isAnthropicPublicEndpoint | (private) | `function isAnthropicPublicEndpoint(baseUrl: str...` |
| 1003 | fn | supportsAnthropicServerSideFallback | (private) | `function supportsAnthropicServerSideFallback(mo...` |
| 1010 | fn | createClient | (private) | `function createClient(` |
| 1163 | fn | buildParams | (private) | `function buildParams(` |
| 1296 | fn | normalizeToolCallId | (private) | `function normalizeToolCallId(id: string): string {` |
| 1300 | fn | convertMessages | (private) | `function convertMessages(` |
| 1540 | fn | applyContentBlockCacheControl | (private) | `function applyContentBlockCacheControl(` |
| 1548 | fn | buildAnthropicSystemBlocks | (private) | `function buildAnthropicSystemBlocks(` |
| 1572 | fn | buildSystemPromptBlocks | (private) | `function buildSystemPromptBlocks(` |
| 1607 | fn | countNativeCacheControlMarkers | (private) | `function countNativeCacheControlMarkers(blocks:...` |
| 1621 | fn | shouldUseFineGrainedToolStreamingBeta | (private) | `function shouldUseFineGrainedToolStreamingBeta(` |
| 1630 | fn | convertTools | (private) | `function convertTools(` |
| 1663 | fn | mapStopReason | (private) | `function mapStopReason(reason: string): StopRea...` |

## Public API

## Memory Markers

### 🟢 `NOTE` (line 282)

> Anthropic's API default for Claude Opus 4.7+ and Claude Mythos Preview
