# linkskills (Phase 1 — fixtures + fake only)

Private OpenClaw consumer package for LiNKskills contract fixtures and a
process/port-isolated Skills fake used by Lisa integration tests.

**Not yet:** plugin adapter, managed MCP registration, Lisa config, live Platform.

## Layout

| Path                                               | Role                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `fixtures/`                                        | Sanitized contract fixtures (pending LiNKskills owner sign-off; see `fixtures/MANIFEST.md`) |
| `fake/`                                            | Deterministic Node ESM fake (HTTP ephemeral + stdio MCP)                                    |
| `../test/helpers/link-domain-fakes/skills-fake.ts` | Test helper for in-process and child-process isolation                                      |

## Fake capabilities

- All plan §9.2 `skills_*` tools from fixtures/catalog stub
- Hard rejection of conversation/content/Brain/raw-tool fields
- Auth matrix: expired, revoked, wrong-audience, wrong-scope
- Idempotency replay, retry hints, throttling
- Health + version negotiation

## In-memory limitation

The fake keeps runs, idempotency keys, and throttle counters **in process memory only**.
Restart clears state. Fake evidence never proves stage/production readiness, durable
Gateway storage, credential lifecycle, or Librarian operation.

## Run locally

```bash
# ephemeral HTTP (prints {baseUrl,port} then serves)
node extensions/linkskills/fake/cli.mjs http

# stdio MCP (one JSON-RPC object per line)
node extensions/linkskills/fake/cli.mjs stdio

# focused tests
node scripts/run-vitest.mjs extensions/linkskills/fake/skills-fake.contract.test.ts
```

## Next (Phase 4)

Default-disabled `linkskills` plugin skeleton: manifest, config schema, SecretRef,
keyed-store namespaces, structured telemetry enqueue against this fake — still no
conversation hooks and no Lisa activation.
