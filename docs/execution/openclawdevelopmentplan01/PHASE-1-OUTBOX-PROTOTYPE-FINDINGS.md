# Phase 1 — Keyed-Store Outbox Prototype Findings

**Recorded:** 2026-07-27 18:53 Asia/Taipei
**Evidence tier:** design + public API inspection (no product Lisa behavior)

## Public surface inspected

- Plugin runtime `api.runtime.state.openKeyedStore` / `openSyncKeyedStore` / `withLease` (see `docs/plugins/sdk-runtime.md`, `extensions/phone-control/index.ts`)
- Trust gate: bundled + trusted official only (satisfied for private bundled `linkbrain` / `linkskills`)

## Prototype intent (Phase 2+)

Per plan §11, each plugin uses separate namespaces:

| Plugin     | Namespaces                                                   |
| ---------- | ------------------------------------------------------------ |
| linkbrain  | `outbox`, `deadletter`, `cursor`, `health`, `capture-buffer` |
| linkskills | `outbox`, `deadletter`, `cursor`, `health`                   |

Rules to implement against fakes:

- `overflowPolicy: "reject-new"`
- sortable monotonic keys; deterministic drain order
- lease so one worker owns a drain attempt
- no `await` inside SQLite transaction callbacks; plan network async before BEGIN; reread before commit
- delete outbox only after Gateway idempotent ack
- diagnostics without payloads

## Findings

| Question                                        | Result                                                                                                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Can plugins open isolated keyed stores?         | **Yes** via public `api.runtime.state.openKeyedStore` (phone-control pattern)                                   |
| Lease API available?                            | **Yes** (`withLease`) — Phase 2 must prove contention/restart                                                   |
| Crash-safe ordered drain without sidecar files? | **Likely yes** if drain metadata lives in keyed-store values and transactions stay sync; prove in Phase 2 tests |
| File/in-memory fallback allowed?                | **No** (plan hard rule)                                                                                         |
| Insufficient public semantics?                  | Stop and propose smallest generic SDK change — do not import core-private APIs                                  |

## Phase 1 limitation

Brain/Skills fakes use **in-memory** idempotency maps; they do not prove SQLite outbox durability. Durability proof belongs to plugin Phase 2/4 tests using real keyed-store against fakes.

## Next measurement (Phase 2)

- Record size vs store value limit under capture batches
- Restart recovery with pending outbox
- Lease contention between two workers
- Overflow reject-new behavior
