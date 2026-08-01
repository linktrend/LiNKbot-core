# Phase 1 — Auth Compatibility Matrix (stub)

**Recorded:** 2026-07-27 18:53 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Evidence tier:** fake / local only — not Platform live proof

## Preferred consumption path (OpenClaw recommendation)

Until Platform issues credentials and signs the path:

1. **Managed MCP OAuth / auth profile** via `mcp.servers.<domain>.oauth.authProfileId` when the Gateway supports OAuth for that server.
2. Else **SecretRef injection** (`env` / `file` / `exec`) into MCP headers or plugin config — never plaintext in Git, never process argv, never `service_role`.
3. Separate credential IDs/scopes for `linkbrain` vs `linkskills`.

## Matrix (fixture-backed fake outcomes)

| Outcome               | Fixture family                                        | Expected OpenClaw behavior                                                |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| Valid scoped token    | identity positive + tool success                      | Proceed; no secret logging                                                |
| Expired               | `auth/expired`                                        | Degrade domain; retry after refresh path if Platform provides one         |
| Revoked               | `auth/revoked`                                        | Terminal for that credential; mark domain unhealthy                       |
| Rotated               | `auth/rotated`                                        | Reject as revoked (`reasons: ["revoked"]`, `credentialStatus: "rotated"`) |
| Wrong audience        | `auth/wrong-audience`                                 | Terminal auth failure; do not fallback to other domain creds              |
| Wrong service         | `auth/wrong-scope` (`expectedOutcome: wrong_service`) | Deny operation; keep other domain unaffected                              |
| Unauthorized          | `failures/unauthorized`                               | Auth rejection mapped from Brain `unauthorized`                           |
| Rate limited          | `failures/rate_limited`                               | Bounded backoff using server retry hints                                  |
| Internal / retryable  | `failures/internal_error`                             | Outbox retain + backoff (`retryable: true`)                               |
| Validation / terminal | `failures/validation_error`                           | Dead-letter with redacted metadata                                        |

## Platform approval status

**Pending.** Do not enable live Lisa MCP entries until Platform approves claim propagation and credential references.

## ADR linkage

- Consume Platform identity/auth ADRs when published under Platform/Brain docs.
- OpenClaw will add a local ADR only if a generic public SDK/auth seam change is required (stop-and-propose gate).
