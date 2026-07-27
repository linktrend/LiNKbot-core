# LiNKskills contract fixtures (OpenClaw consumer drafts)

**Status:** OpenClaw-derived sanitized drafts. **Pending LiNKskills owner sign-off.**

These fixtures are consumer-side contract samples for OpenClaw Lisa integration tests
and the local Skills fake MCP. They are derived from:

- `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` §8–§9
- LiNKskills plan tool names (`skills_*`) and envelope shapes (`packages/contracts/schemas/*`)

## Rules

- No live identifiers, endpoints, messages, credentials, or private data.
- Fake proof never claims stage/production readiness.
- Domain owner (LiNKskills) must approve before fixtures are treated as authoritative.
- Any owner delta that conflicts with these drafts stops OpenClaw adapter work until reconciled.

## Layout

| Path          | Purpose                                                   |
| ------------- | --------------------------------------------------------- |
| `identity/`   | Positive and negative Platform-style actor claims         |
| `auth/`       | Expired, revoked, wrong-audience, wrong-scope             |
| `tools/<op>/` | Request / response / error for every §9.2 tool            |
| `telemetry/`  | Structured run/validation events (no conversation fields) |
| `failures/`   | Retryable, terminal, throttled, authentication            |
| `health/`     | Health + version negotiation                              |
| `replay/`     | Duplicate idempotency / replay                            |
| `prohibited/` | Payloads that MUST be hard-rejected                       |

## Contract versions in fixtures

- `schema_version`: `0.1`
- `contract_version`: `0.1`
- API label: `skills.api.v0.1`

## Approval

| Owner      | Item                     | State                          |
| ---------- | ------------------------ | ------------------------------ |
| LiNKskills | Fixture package sign-off | **pending**                    |
| OpenClaw   | Local fake consumption   | allowed for Phase 1 proof only |
