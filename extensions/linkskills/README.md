# linkskills (structured telemetry + configurable transports)

Private OpenClaw consumer package for LiNKskills: contract fixtures, process/port-isolated
Skills fake, and a **default-disabled** plugin with durable telemetry outbox.

`transportMode` defaults to `disabled`. Fake is test-only. No conversation hooks.

## Layout

| Path                                                 | Role                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `openclaw.plugin.json` / `package.json` / `index.ts` | Default-disabled private plugin entry (`enabledByDefault: false`)                           |
| `src/`                                               | Config, allowlisted envelopes, keyed-store namespaces, enqueue/drain, transport adapters    |
| `mcp-tool-filter.ts`                                 | Managed MCP §9.2 `toolFilter.include` allowlist (default-deny)                              |
| `fixtures/`                                          | Sanitized contract fixtures (pending LiNKskills owner sign-off; see `fixtures/MANIFEST.md`) |
| `fake/`                                              | Deterministic Node ESM fake (HTTP ephemeral + stdio MCP)                                    |
| `../test/helpers/link-domain-fakes/skills-fake.ts`   | Test helper for in-process and child-process isolation                                      |

## Privacy invariant

- **Zero conversation hooks.** The plugin never registers message/prompt/agent conversation hooks and omits `hooks.allowConversationAccess`.
- Structured telemetry only; conversation/content/Brain/raw-tool fields are hard-rejected at enqueue.

## Transport modes

| Mode       | Behavior                                                                                                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Default. Drain writes return `transport_disabled` (retryable).                                                                                                                |
| `fake`     | Test-only (`environment=test` + injection, or `fakeForTests`). Rejected in stage/production.                                                                                  |
| `http`     | POST tool calls to `skillsEndpoint` with SecretRef bearer.                                                                                                                    |
| `mcp`      | MCP client against `mcp.servers.<mcpServerName>` (default `linkskills`). Prefer SecretRef Authorization headers; oauth `authProfileId` alone returns `auth_profile_required`. |

## Frozen Skills drain ops

Drain maps structured `event_type` values onto exact §9.2 names:

- `skills_run_start` / `skills_run_update` / `skills_run_complete` / `skills_run_fail`
- `skills_feedback_submit` (default)
- `skills_trace_candidate_submit`

Conversation fields are never accepted.

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
node scripts/run-vitest.mjs extensions/linkskills/**/*.test.ts
```

## Not live proof

Do not enable against Lisa until Platform auth and activation gates pass.
