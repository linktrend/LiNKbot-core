# src/agents/embedded-agent-runner/compact.queued.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1072
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 97 | fn | shouldFallbackAfterHarnessCompaction | (private) | `function shouldFallbackAfterHarnessCompaction(` |
| 103 | fn | lockedCompactionRuntimeFailure | (private) | `function lockedCompactionRuntimeFailure(runtime...` |
| 120 | fn | createCompactionAbortedResult | (private) | `function createCompactionAbortedResult(): Embed...` |
| 128 | fn | resolveManualCompactionActiveRunSessionId | (private) | `function resolveManualCompactionActiveRunSessio...` |
| 138 | fn | shouldDeferOwningContextEngineBudgetCompaction | (private) | `function shouldDeferOwningContextEngineBudgetCo...` |
| 155 | fn | buildContextEngineCompactionSessionTarget | (private) | `function buildContextEngineCompactionSessionTar...` |
| 173 | fn | disposeContextEngine | (private) | `async function disposeContextEngine(contextEngi...` |
| 183 | fn | deferOwningContextEngineBudgetCompaction | (private) | `async function deferOwningContextEngineBudgetCo...` |
| 242 | fn | mergeSecondaryNativeHarnessCompactionDetails | (private) | `function mergeSecondaryNativeHarnessCompactionD...` |
| 272 | fn | compactEmbeddedAgentSession | pub | `export async function compactEmbeddedAgentSession(` |
| 312 | fn | compactEmbeddedAgentSessionImpl | (private) | `async function compactEmbeddedAgentSessionImpl(` |
| 355 | fn | compactResolvedContextEngine | (private) | `async function compactResolvedContextEngine(` |
| 479 | fn | selectHarnessForPreparedAttempts | (private) | `const selectHarnessForPreparedAttempts = (` |
| 510 | fn | prepareRuntimeAuth | (private) | `const prepareRuntimeAuth = (harness: ReturnType...` |
| 1002 | fn | shouldAttemptNativeHarnessCompaction | (private) | `function shouldAttemptNativeHarnessCompaction(p...` |
| 1014 | fn | buildCompactionContextEngineRuntimeContext | (private) | `function buildCompactionContextEngineRuntimeCon...` |

## Public API

### `compactEmbeddedAgentSession`

```
export async function compactEmbeddedAgentSession(
```

**Line:** 272 | **Kind:** fn
