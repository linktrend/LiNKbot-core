# Module: src/gateway/server/ws-connection

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 33

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/gateway/server/ws-connection/auth-context.state.test.ts` | 142 |  |
| `src/gateway/server/ws-connection/auth-context.test.ts` | 517 | 📊 |
| `src/gateway/server/ws-connection/auth-context.ts` | 331 |  |
| `src/gateway/server/ws-connection/auth-messages.test.ts` | 17 |  |
| `src/gateway/server/ws-connection/auth-messages.ts` | 82 |  |
| `src/gateway/server/ws-connection/authenticated-request-dispatch.ts` | 167 |  |
| `src/gateway/server/ws-connection/connect-admission.ts` | 247 |  |
| `src/gateway/server/ws-connection/connect-auth-security.ts` | 58 |  |
| `src/gateway/server/ws-connection/connect-auth.ts` | 488 |  |
| `src/gateway/server/ws-connection/connect-device-metadata.ts` | 234 |  |
| `src/gateway/server/ws-connection/connect-device-pairing.ts` | 589 | 📊 |
| `src/gateway/server/ws-connection/connect-device-proof.ts` | 101 |  |
| `src/gateway/server/ws-connection/connect-device-tokens.ts` | 86 |  |
| `src/gateway/server/ws-connection/connect-existing-device.ts` | 194 |  |
| `src/gateway/server/ws-connection/connect-hello.ts` | 254 |  |
| `src/gateway/server/ws-connection/connect-node-pairing-ssh.ts` | 128 |  |
| `src/gateway/server/ws-connection/connect-node-session.ts` | 213 |  |
| `src/gateway/server/ws-connection/connect-policy.test.ts` | 414 |  |
| `src/gateway/server/ws-connection/connect-policy.ts` | 149 |  |
| `src/gateway/server/ws-connection/connect-session.ts` | 435 |  |
| `src/gateway/server/ws-connection/handshake-auth-helpers.linux.test.ts` | 67 |  |
| `src/gateway/server/ws-connection/handshake-auth-helpers.test.ts` | 663 | 📊 |
| `src/gateway/server/ws-connection/handshake-auth-helpers.ts` | 457 |  |
| `src/gateway/server/ws-connection/handshake-auth-log-limiter.test.ts` | 113 |  |
| `src/gateway/server/ws-connection/handshake-auth-log-limiter.ts` | 88 |  |
| `src/gateway/server/ws-connection/message-handler-types.ts` | 158 |  |
| `src/gateway/server/ws-connection/message-handler.post-connect-health.test.ts` | 1357 | 📊 |
| `src/gateway/server/ws-connection/message-handler.suspension-admission.test.ts` | 253 |  |
| `src/gateway/server/ws-connection/message-handler.ts` | 485 |  |
| `src/gateway/server/ws-connection/message-handler.worker.test.ts` | 506 | 📊 |
| `src/gateway/server/ws-connection/unauthorized-flood-guard.test.ts` | 89 |  |
| `src/gateway/server/ws-connection/unauthorized-flood-guard.ts` | 77 |  |
| `src/gateway/server/ws-connection/worker-connection.ts` | 609 | 📊 |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (src/gateway/server/ws-connection/connect-admission.ts:146)

> If the client does not present a device identity, we can't bind scopes to a paired
