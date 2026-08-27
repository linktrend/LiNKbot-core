# src/agents/embedded-agent-runner/compact.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1980
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 246 | type | CompactEmbeddedAgentSessionParamsWithSessionFile | (private) | - |
| 249 | type | PreparedCompactEmbeddedAgentSessionParams | (private) | - |
| 254 | fn | hasRealConversationContent | (private) | `function hasRealConversationContent(` |
| 262 | fn | createCompactionDiagId | (private) | `function createCompactionDiagId(): string {` |
| 266 | fn | resolveCompactionProviderStream | (private) | `function resolveCompactionProviderStream(params: {` |
| 282 | fn | normalizeObservedTokenCount | (private) | `function normalizeObservedTokenCount(value: unk...` |
| 288 | fn | getMessageTextChars | (private) | `function getMessageTextChars(msg: AgentMessage)...` |
| 309 | fn | resolveMessageToolLabel | (private) | `function resolveMessageToolLabel(msg: AgentMess...` |
| 317 | fn | summarizeCompactionMessages | (private) | `function summarizeCompactionMessages(messages: ...` |
| 350 | fn | selectTopContributors | (private) | `function selectTopContributors(` |
| 375 | fn | containsRealConversationMessages | (private) | `function containsRealConversationMessages(messa...` |
| 381 | fn | hasExplicitCompactionModel | (private) | `function hasExplicitCompactionModel(params: Com...` |
| 385 | fn | resolveCompactionFallbacksOverride | (private) | `function resolveCompactionFallbacksOverride(` |
| 400 | fn | hasCompactionModelFallbackCandidates | (private) | `function hasCompactionModelFallbackCandidates(p...` |
| 406 | fn | classifyCompactionFallbackResult | (private) | `function classifyCompactionFallbackResult(` |
| 426 | fn | fallbackFailureToCompactionResult | (private) | `function fallbackFailureToCompactionResult(err:...` |
| 439 | fn | compactEmbeddedAgentSessionDirect | pub | `export async function compactEmbeddedAgentSessi...` |
| 576 | fn | compactEmbeddedAgentSessionDirectOnce | (private) | `async function compactEmbeddedAgentSessionDirec...` |
| 756 | fn | selectHarnessForPreparedAttempts | (private) | `const selectHarnessForPreparedAttempts = (attem...` |
| 785 | fn | prepareRuntimeAuth | (private) | `const prepareRuntimeAuth = (harness: ReturnType...` |
| 820 | fn | resolvePreparedModel | (private) | `const resolvePreparedModel = ({` |
| 851 | fn | resolveRuntimeAuthAttempt | (private) | `const resolveRuntimeAuthAttempt = () =>` |
| 1380 | fn | buildSystemPromptText | (private) | `const buildSystemPromptText = (defaultThinkLeve...` |

## Public API

### `compactEmbeddedAgentSessionDirect`

```
export async function compactEmbeddedAgentSessionDirect(
```

**Line:** 439 | **Kind:** fn
