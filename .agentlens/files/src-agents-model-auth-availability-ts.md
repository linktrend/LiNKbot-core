# src/agents/model-auth-availability.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1021
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | type | ModelAuthAvailability | pub | - |
| 70 | type | ModelAuthAvailabilityEvidence | (private) | - |
| 71 | type | ModelAuthAvailabilityRef | pub | - |
| 82 | type | ModelAuthAvailabilityEvaluation | pub | - |
| 90 | type | ModelAuthAvailabilityResolver | pub | - |
| 101 | type | CreateModelAuthAvailabilityResolverParams | (private) | - |
| 115 | type | AuthTarget | (private) | - |
| 118 | type | AuthSourceEvaluation | (private) | - |
| 123 | fn | hasSecret | (private) | `function hasSecret(value: unknown): value is st...` |
| 127 | fn | modeAllowed | (private) | `function modeAllowed(provider: string, target: ...` |
| 137 | fn | normalizeModelIdForProvider | (private) | `function normalizeModelIdForProvider(provider: ...` |
| 152 | fn | createModelAuthAvailabilityResolver | pub | `export function createModelAuthAvailabilityReso...` |
| 177 | fn | sameSecretRef | (private) | `const sameSecretRef = (` |
| 270 | fn | normalizeProvider | (private) | `const normalizeProvider = (provider: string) => {` |
| 274 | fn | providerConfig | (private) | `const providerConfig = (provider: string) =>` |
| 292 | fn | providerBinding | (private) | `const providerBinding = (provider: string) =>` |
| 298 | fn | envAuth | (private) | `const envAuth = (provider: string) => {` |
| 314 | fn | profileOrder | (private) | `const profileOrder = (` |
| 337 | fn | profileMode | (private) | `const profileMode = (profileId: string) =>` |
| 345 | fn | profileEligibleForReadOnlyAvailability | (private) | `const profileEligibleForReadOnlyAvailability = (` |
| 381 | fn | resolvedProfileAvailability | (private) | `const resolvedProfileAvailability = (` |
| 397 | fn | profileInCooldown | (private) | `const profileInCooldown = (profileId: string, t...` |
| 421 | fn | hasProfileEvidence | (private) | `const hasProfileEvidence = (provider: string) => {` |
| 623 | fn | directSource | (private) | `const directSource = (evaluation: AuthSourceEva...` |
| 676 | fn | directPolicy | (private) | `const directPolicy = (provider: string, target:...` |
| 707 | fn | automaticSourceRejection | (private) | `const automaticSourceRejection = (` |
| 801 | fn | resolveProviderAuthAvailability | (private) | `const resolveProviderAuthAvailability = (provid...` |

## Public API

### `createModelAuthAvailabilityResolver`

```
export function createModelAuthAvailabilityResolver(
```

**Line:** 152 | **Kind:** fn
