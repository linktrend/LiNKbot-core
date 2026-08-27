# src/agents/system-prompt.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1458
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | type | OwnerIdDisplay | (private) | - |
| 89 | type | StablePromptPrefixCacheEntry | (private) | - |
| 93 | fn | normalizeSubagentDelegationMode | (private) | `function normalizeSubagentDelegationMode(mode?:...` |
| 97 | fn | buildSubagentDelegationPreferenceSection | (private) | `function buildSubagentDelegationPreferenceSecti...` |
| 126 | fn | buildProactiveSubagentOrchestrationSection | (private) | `function buildProactiveSubagentOrchestrationSec...` |
| 145 | fn | cacheStablePromptPrefix | (private) | `function cacheStablePromptPrefix(key: string, b...` |
| 165 | fn | hashStablePromptInput | (private) | `function hashStablePromptInput(value: unknown):...` |
| 171 | fn | normalizeContextFilePath | (private) | `function normalizeContextFilePath(pathValue: st...` |
| 175 | fn | getContextFileBasename | (private) | `function getContextFileBasename(pathValue: stri...` |
| 180 | fn | isDynamicContextFile | (private) | `function isDynamicContextFile(pathValue: string...` |
| 184 | fn | isBootstrapContextFile | (private) | `function isBootstrapContextFile(pathValue: stri...` |
| 188 | fn | sanitizeContextFileContentForPrompt | (private) | `function sanitizeContextFileContentForPrompt(co...` |
| 195 | fn | sortContextFilesForPrompt | (private) | `function sortContextFilesForPrompt(contextFiles...` |
| 213 | fn | prepareContextFilesForPrompt | (private) | `function prepareContextFilesForPrompt(contextFi...` |
| 224 | fn | buildProjectContextSection | (private) | `function buildProjectContextSection(params: {` |
| 259 | fn | buildHeartbeatSection | (private) | `function buildHeartbeatSection(params: { isMini...` |
| 272 | fn | buildExecApprovalPromptGuidance | (private) | `function buildExecApprovalPromptGuidance(params: {` |
| 288 | fn | buildSkillsSection | (private) | `function buildSkillsSection(params: { skillsPro...` |
| 304 | fn | buildMemorySection | (private) | `function buildMemorySection(params: {` |
| 329 | fn | buildAgentBootstrapSystemContext | (private) | `function buildAgentBootstrapSystemContext(param...` |
| 359 | fn | buildAgentBootstrapSystemPromptSections | (private) | `function buildAgentBootstrapSystemPromptSection...` |
| 383 | fn | buildUserIdentitySection | (private) | `function buildUserIdentitySection(ownerLine: st...` |
| 390 | fn | formatOwnerDisplayId | (private) | `function formatOwnerDisplayId(ownerId: string, ...` |
| 398 | fn | buildOwnerIdentityLine | (private) | `function buildOwnerIdentityLine(` |
| 414 | fn | buildTimeSection | (private) | `function buildTimeSection(params: { userTimezon...` |
| 421 | fn | buildAssistantOutputDirectivesSection | (private) | `function buildAssistantOutputDirectivesSection(...` |
| 448 | fn | buildWebchatCanvasSection | (private) | `function buildWebchatCanvasSection(params: {` |
| 470 | fn | buildExecutionBiasSection | (private) | `function buildExecutionBiasSection(params: { is...` |
| 487 | fn | normalizeProviderPromptBlock | (private) | `function normalizeProviderPromptBlock(value?: s...` |
| 495 | fn | buildOverridablePromptSection | (private) | `function buildOverridablePromptSection(params: {` |
| 506 | fn | buildMessagingSection | (private) | `function buildMessagingSection(params: {` |
| 585 | fn | buildMessageChannelOptions | (private) | `function buildMessageChannelOptions(runtimeChan...` |
| 596 | fn | buildVoiceSection | (private) | `function buildVoiceSection(params: { isMinimal:...` |
| 607 | fn | buildDocsSection | (private) | `function buildDocsSection(params: {` |
| 636 | fn | formatFullAccessBlockedReason | (private) | `function formatFullAccessBlockedReason(reason?:...` |
| 651 | fn | buildModelIdentityPromptLine | pub | `export function buildModelIdentityPromptLine(mo...` |
| 659 | fn | appendModelIdentitySystemPrompt | pub | `export function appendModelIdentitySystemPrompt...` |
| 693 | fn | buildAgentSystemPrompt | pub | `export function buildAgentSystemPrompt(params: {` |
| 870 | fn | resolveToolName | (private) | `const resolveToolName = (normalized: string) =>` |
| 1383 | fn | buildActiveProcessSessionReferenceLines | (private) | `function buildActiveProcessSessionReferenceLines(` |
| 1400 | fn | buildRuntimeLine | (private) | `function buildRuntimeLine(` |

## Public API

### `buildModelIdentityPromptLine`

```
export function buildModelIdentityPromptLine(model?: string): string | undefined {
```

**Line:** 651 | **Kind:** fn

### `appendModelIdentitySystemPrompt`

```
export function appendModelIdentitySystemPrompt(params: {
```

**Line:** 659 | **Kind:** fn

### `buildAgentSystemPrompt`

```
export function buildAgentSystemPrompt(params: {
```

**Line:** 693 | **Kind:** fn

## Memory Markers

### 🔴 `SAFETY` (line 991)

> ",
