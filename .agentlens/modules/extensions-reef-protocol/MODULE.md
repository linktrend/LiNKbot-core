# Module: extensions/reef/protocol

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 21

**Entry point:** `extensions/reef/protocol/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/reef/protocol/audit-receipts.test.ts` | 174 |  |
| `extensions/reef/protocol/audit.ts` | 256 |  |
| `extensions/reef/protocol/canonical.ts` | 34 |  |
| `extensions/reef/protocol/checks-friendcode-ulid.test.ts` | 78 |  |
| `extensions/reef/protocol/checks.ts` | 86 |  |
| `extensions/reef/protocol/encoding.ts` | 98 |  |
| `extensions/reef/protocol/envelope.ts` | 377 |  |
| `extensions/reef/protocol/friendcode.ts` | 73 |  |
| `extensions/reef/protocol/guard-adapters.ts` | 206 |  |
| `extensions/reef/protocol/guard.test.ts` | 415 |  |
| `extensions/reef/protocol/guard.ts` | 137 |  |
| `extensions/reef/protocol/identity-envelope.test.ts` | 422 |  |
| `extensions/reef/protocol/identity.ts` | 143 |  |
| `extensions/reef/protocol/index.ts` | 13 |  |
| `extensions/reef/protocol/node.test.ts` | 92 |  |
| `extensions/reef/protocol/node.ts` | 365 |  |
| `extensions/reef/protocol/pipeline.test.ts` | 660 | 📊 |
| `extensions/reef/protocol/pipeline.ts` | 461 |  |
| `extensions/reef/protocol/receipts.ts` | 114 |  |
| `extensions/reef/protocol/replay.ts` | 95 |  |
| `extensions/reef/protocol/ulid.ts` | 65 |  |

## Documentation

- [imports.md](imports.md) - Dependencies

---

Symbol maps for 1 large files in this module.

## extensions/reef/protocol/pipeline.test.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | audit | (private) |
| 29 | fn | mockGuard | (private) |
| 40 | fn | structuralGuard | (private) |
| 54 | fn | identities | (private) |
| 58 | class | FailOnceAuditStore | (private) |
| 634 | fn | craftEnvelope | (private) |
---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `INVARIANT` (extensions/reef/protocol/guard.ts:39)

> the backend behind an undated id never changes — a provider-side
