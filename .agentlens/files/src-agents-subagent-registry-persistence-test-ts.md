# src/agents/subagent-registry.persistence.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1085
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | fn | expectFields | (private) | `function expectFields(value: unknown, expected:...` |
| 68 | fn | resolveAgentIdFromSessionKey | (private) | `const resolveAgentIdFromSessionKey = (sessionKe...` |
| 73 | fn | writeChildSessionEntry | (private) | `const writeChildSessionEntry = async (params: {` |
| 94 | fn | removeChildSessionEntry | (private) | `const removeChildSessionEntry = async (sessionK...` |
| 106 | fn | seedChildSessionsForPersistedRuns | (private) | `const seedChildSessionsForPersistedRuns = async...` |
| 126 | fn | writePersistedRegistry | (private) | `const writePersistedRegistry = async (` |
| 149 | fn | readPersistedRegistry | (private) | `const readPersistedRegistry = () => ({` |
| 153 | fn | createPersistedEndedRun | (private) | `const createPersistedEndedRun = (params: {` |
| 178 | fn | flushQueuedRegistryWork | (private) | `const flushQueuedRegistryWork = async () => {` |
| 183 | fn | waitForRegistryWork | (private) | `const waitForRegistryWork = async (predicate: (...` |
| 190 | fn | restartRegistry | (private) | `const restartRegistry = () => {` |
| 195 | fn | fastPersistSubagentRunsToDisk | (private) | `const fastPersistSubagentRunsToDisk = (runs: Ma...` |
