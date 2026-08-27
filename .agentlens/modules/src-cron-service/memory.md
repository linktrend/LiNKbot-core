# Memory

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Summary

| High 🔴 | Medium 🟡 | Low 🟢 |
| 2 | 0 | 1 |

## 🔴 High Priority

### `SAFETY` (src/cron/service/timer.ts:124)

> net that prevents spin-loops when `computeJobNextRunAtMs` returns

### `SAFETY` (src/cron/service/timer.ts:1061)

> net: ensure the next fire is at least MIN_REFIRE_GAP_MS

## 🟢 Low Priority

### `NOTE` (src/cron/service/timer.ts:920)

> deleteAfterRun:true only triggers on ok (see shouldDelete above),
