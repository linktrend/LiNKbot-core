---
summary: "Host-injected machine-token Plugin SDK facade for client_credentials + private_key_jwt"
title: "Machine-token runtime"
sidebarTitle: "Machine-token runtime"
read_when:
  - You need machine-token (PACI / client_credentials) access from a plugin
  - You are wiring linkbrain or linkskills non-interactive auth
  - You need the scoped acquire / invalidate / health facade contract
---

# Machine-token runtime

Import from `openclaw/plugin-sdk/machine-token-runtime`.

Plugins receive a **host-injected, binding-scoped** facade. They must not
construct facades, choose arbitrary plugin IDs or grants, clear global process
cache, or invalidate another plugin's domain.

The host owns an **immutable normalized binding registry**. Plugins supply only
a granted `bindingId` (plus optional cancellation / refresh controls). Issuer,
client, audience, scopes, endpoints, and key SecretRef material are never
accepted from the plugin on acquire.

## Public plugin contract

```typescript
import {
  assertMachineTokenIssuerUrl,
  authorizationHeaderFromMachineToken,
  fingerprintMachineTokenKeyRef,
  type MachineTokenPluginFacade,
} from "openclaw/plugin-sdk/machine-token-runtime";

// Host injects an already identity/binding/domain-scoped facade.
declare const facade: MachineTokenPluginFacade;

assertMachineTokenIssuerUrl("https://issuer.example.test");

// Credential scope comes from the host registry for this granted id.
const token = await facade.acquire({
  bindingId: "linkbrain-stage",
});

const headers = authorizationHeaderFromMachineToken(token);
facade.invalidate("linkbrain-stage");
const health = facade.health("linkbrain-stage"); // never includes access tokens
facade.unregister(); // reload / plugin unload
```

### Contract

| Method       | Behavior                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| `acquire`    | Mint or reuse a Bearer access token for a **granted** binding id only          |
| `invalidate` | Drop one granted binding's cached token                                        |
| `health`     | Redacted diagnostics (`granted`, `registered`, `cached`, optional `expiresAt`) |
| `unregister` | Invalidate all granted bindings and fail-close later use                       |

`acquire` accepts only `{ bindingId, signal?, forceRefresh? }`. Plugins cannot
pass a binding object, PEM, SecretRef, `fetchFn`, `now`, or other
auth-network/test injection through the facade. Hardened discovery/token
networking and test clocks stay host-internal (`resolveMachineTokenAccess` /
`machine-token-host` helpers), unavailable on this public contract.

A plugin may operate only bindings listed in the host-granted
`grantedBindingIds`. Calls for another domain (for example Skills from Brain)
throw. If a caller still smuggles a binding object at runtime, every normalized
field and fingerprint must match the host registry or acquire fails closed —
and PEM is never taken from the smuggled object.

Private-key material is resolved by the host from the registered SecretRef at
acquire time. Do not put literal PEM in config docs, templates, diagnostics, or
plugin acquire calls.

`fingerprintMachineTokenKeyRef` remains available for local diagnostics and
config validation; it is not required for facade acquire.

### Public exports

- Types: `MachineTokenBinding`, `ResolvedMachineToken`, `MachineTokenPluginFacade`,
  `MachineTokenBindingHealth`, `MachineTokenKeyRefIdentity`
- `assertMachineTokenIssuerUrl` — validate issuer URL shape for binding config
- `authorizationHeaderFromMachineToken`
- `fingerprintMachineTokenKeyRef` — hash SecretRef identity without exposing secrets

## Host-internal controls

Facade construction, grant / registry selection, SecretRef → PEM resolution,
raw resolution (including test-only `fetchFn` / `now`), per-binding invalidation
without grant checks, and global cache clear live in
`src/agents/machine-token-host.ts`. They are **not** part of the public Plugin
SDK. External and bundled plugins must not import that module.

On registration and reload the host builds a **candidate** facade generation,
registers the plugin against it, then **atomically publishes** that generation
on success (retiring only the prior live generation). Registration failure or
cancellation destroys only the candidate; the prior live generation stays
usable. Stop/deactivate cleanup is generation-scoped and idempotent — a late
cleanup from an old generation cannot remove a newer replacement.

## External projection

Machine access tokens must never be projected into Codex/CLI config, literal
headers, child-process env, snapshots, diagnostics, or external bundles.
`bundle-mcp-codex` omit/fail-closes `auth: "machine_token"` servers rather than
requesting a literal token. External runtimes that cannot call the provider
seam directly are unsupported for machine-token MCP.

## MCP HTTP fetch ceiling

When plugins build SSE / Streamable HTTP MCP client transports, import
`openclaw/plugin-sdk/mcp-http-fetch` (`buildPluginMcpHttpFetch`). Cumulative
response bodies (ordinary JSON, SSE, and Streamable HTTP) are hard-capped at
`MCP_HTTP_MAX_RESPONSE_BYTES` (16 MiB):

- Omitted `maxResponseBytes` uses the host ceiling.
- A smaller positive safe integer reduces the effective bound.
- Values above the host ceiling clamp to `MCP_HTTP_MAX_RESPONSE_BYTES`.
- Zero, negative, fractional, non-finite, or unsafe integers fail closed at
  build time.

There is no plugin bypass, environment override, or Brain/Skills special case.
Overflow errors redact body and token material. Content-Length early reject and
stream cleanup stay on the same effective bound.

See also: [Plugin SDK subpaths](/plugins/sdk-subpaths), [Runtime helpers](/plugins/sdk-runtime).
