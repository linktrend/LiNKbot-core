# linkskills (Phase 4 — plugin skeleton + structured telemetry)

Private OpenClaw consumer package for LiNKskills: contract fixtures, process/port-isolated
Skills fake, and a **default-disabled** plugin skeleton with durable telemetry outbox.

**Not yet:** managed MCP registration, Lisa config, live Platform credentials.

## Layout

| Path                                                 | Role                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `openclaw.plugin.json` / `package.json` / `index.ts` | Default-disabled private plugin entry (`enabledByDefault: false`)                           |
| `src/`                                               | Config, allowlisted envelopes, keyed-store namespaces, enqueue/drain runtime                |
| `mcp-tool-filter.ts`                                 | Phase 5 managed MCP §9.2 `toolFilter.include` allowlist (default-deny)                      |
| `fixtures/`                                          | Sanitized contract fixtures (pending LiNKskills owner sign-off; see `fixtures/MANIFEST.md`) |
| `fake/`                                              | Deterministic Node ESM fake (HTTP ephemeral + stdio MCP)                                    |
| `../test/helpers/link-domain-fakes/skills-fake.ts`   | Test helper for in-process and child-process isolation                                      |

## Privacy invariant

- **Zero conversation hooks.** The plugin never registers message/prompt/agent conversation hooks and omits `hooks.allowConversationAccess`.
- Structured telemetry only; conversation/content/Brain/raw-tool fields are hard-rejected at enqueue.

## Independent flags (§12.2)

`mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain` — all default `false`.

## Keyed-store namespaces (§11)

`outbox`, `deadletter`, `cursor`, `health` — `overflowPolicy: "reject-new"`.

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
node scripts/run-vitest.mjs extensions/linkskills/manifest.test.ts \
  extensions/linkskills/runtime.test.ts \
  extensions/linkskills/plugin-boundary.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts
```

## Next (Phase 5)

Managed MCP integration and authentication: independent `mcp.servers.linkskills`, SecretRefs,
auth matrix — still no conversation hooks and no Lisa activation until gates.
