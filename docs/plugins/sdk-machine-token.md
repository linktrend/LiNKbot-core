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

const token = await facade.acquire({
  binding: {
    bindingId: "linkbrain-stage",
    issuerUrl: "https://issuer.example.test",
    clientId: "brain-client",
    keyRefFingerprint: fingerprintMachineTokenKeyRef({
      source: "env",
      provider: "gsm",
      id: "brain-assertion-key",
    }),
    clientAssertionKeyPem: resolvedPem, // SecretRef resolved only at this boundary
  },
});

const headers = authorizationHeaderFromMachineToken(token);
facade.invalidate("linkbrain-stage");
const health = facade.health("linkbrain-stage"); // never includes access tokens
facade.unregister(); // reload / plugin unload
```

### Contract

| Method       | Behavior                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| `acquire`    | Mint or reuse a Bearer access token for a **granted** binding only             |
| `invalidate` | Drop one granted binding's cached token                                        |
| `health`     | Redacted diagnostics (`granted`, `registered`, `cached`, optional `expiresAt`) |
| `unregister` | Invalidate all granted bindings and fail-close later use                       |

A plugin may operate only bindings listed in the host-granted
`grantedBindingIds`. Calls for another domain (for example Skills from Brain)
throw.

Private-key material must arrive as already-resolved PEM from a SecretRef /
file / injected key at the trusted boundary. Do not put literal PEM in config
docs, templates, or diagnostics.

### Public exports

- Types: `MachineTokenBinding`, `ResolvedMachineToken`, `MachineTokenPluginFacade`,
  `MachineTokenBindingHealth`, `MachineTokenKeyRefIdentity`
- `assertMachineTokenIssuerUrl` — validate issuer URL shape for binding config
- `authorizationHeaderFromMachineToken`
- `fingerprintMachineTokenKeyRef` — for local binding assembly when the host
  does not already stamp `keyRefFingerprint`

## Host-internal controls

Facade construction, grant selection, raw resolution, per-binding invalidation
without grant checks, and global cache clear live in
`src/agents/machine-token-host.ts`. They are **not** part of the public Plugin
SDK. External and bundled plugins must not import that module.

## External projection

Machine access tokens must never be projected into Codex/CLI config, literal
headers, child-process env, snapshots, diagnostics, or external bundles.
`bundle-mcp-codex` omit/fail-closes `auth: "machine_token"` servers rather than
requesting a literal token. External runtimes that cannot call the provider
seam directly are unsupported for machine-token MCP.

See also: [Plugin SDK subpaths](/plugins/sdk-subpaths), [Runtime helpers](/plugins/sdk-runtime).
