# OpenClaw Prime Brain consumer

This page records the reusable OpenClaw consumer boundary for the final LiNKbrain v2 contract. It is source evidence for the active `ocp-01` profile; it is not a live-service or Lisa activation claim.

## Immutable provider identity

- Provider repository: `LiNKbrain`
- Final main commit: `8ce1d737f8870a479f07b1741c58d6681cd07aa1`
- Git tree: `0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3`
- Contract: `brain.v2/2.0.0` (`2.0.0` schema)
- MCP protocol: `2026-07-28`, sessionless modern negotiation
- Provider artifacts and SHA-256 digests: `provider-pins.json`

The consumer checks Platform-issued trust facts against the final Platform commit/tree, auth-claims contract `platform.auth-claims/1.1.0`, schema `2026.07.28-w4`, actor and runtime binding, issuer, audience, scope, capability, validity window, and active revocation status. It never issues credentials, sends credential values, or mutates Platform state.

## Consumer boundary

The v2 adapter requires explicit negotiation before any operation and rejects v1 or ambiguous protocol/contract responses. Discovery is progressive: guide, compact index, selected metadata, then record or evidence. Cursors and snapshots are validated, and operation-specific disclosure ceilings prevent a narrow operation from returning a broader payload.

Shared knowledge and governed coordination operations are advisory only. Private capture and checkpoints require an explicit `private` namespace, bounded opaque references, idempotency keys, and safe metadata. Prompts, transcripts, reasoning, secrets, raw tool output, binaries, and private payloads are rejected. Unavailable, degraded, unauthorized, stale, disabled, or incompatible provider states return safe failure results without silent downgrade.

The existing frozen v1 `/mcp` implementation and its historical fixtures remain separate. This v2 adapter does not claim to migrate those historical records, activate Lisa, change runtime configuration, or provide execution authority, retries, schedules, credentials, or production proof.
