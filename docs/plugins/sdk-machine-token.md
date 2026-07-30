---
summary: "Binding-scoped machine-token Plugin SDK facade for client_credentials + private_key_jwt"
title: "Machine-token runtime"
sidebarTitle: "Machine-token runtime"
read_when:
  - You need machine-token (PACI / client_credentials) access from a plugin
  - You are wiring linkbrain or linkskills non-interactive auth
  - You need the scoped acquire / invalidate / health facade contract
---

# Machine-token runtime

Import from `openclaw/plugin-sdk/machine-token-runtime`.

Plugins receive a **host-injected, binding-scoped** facade. They must not clear
global process cache or invalidate another plugin's domain.

## Public plugin facade

```typescript
import {
  createMachineTokenPluginFacade,
  authorizationHeaderFromMachineToken,
  type MachineTokenBinding,
} from "openclaw/plugin-sdk/machine-token-runtime";

const facade = createMachineTokenPluginFacade({
  pluginId: "linkbrain",
  grantedBindingIds: ["linkbrain-stage"],
});

const token = await facade.acquire({
  binding: {
    bindingId: "linkbrain-stage",
    issuerUrl: "https://issuer.example.test",
    clientId: "brain-client",
    clientAssertionKeyPem: resolvedPem, // SecretRef resolved only at this boundary
  },
});

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

A plugin may operate only bindings listed in `grantedBindingIds`. Calls for
another domain (for example Skills from Brain) throw.

Private-key material must arrive as already-resolved PEM from a SecretRef /
file / injected key at the trusted boundary. Do not put literal PEM in config
docs, templates, or diagnostics.

## Host / test helpers

These remain available for host runtime and tests. Plugins must not use them as
the primary API:

- `resolveMachineTokenAccessForHost`
- `invalidateMachineTokenCacheForHost`
- `clearMachineTokenCacheForHost` — clears **all** process cache; never from plugins
- `withMachineTokenBearer`
- `assertMachineTokenIssuerUrl` / `buildMachineTokenDiscoveryUrl`
- `authorizationHeaderFromMachineToken`

## External projection

Machine access tokens must never be projected into Codex/CLI config, literal
headers, child-process env, snapshots, diagnostics, or external bundles.
`bundle-mcp-codex` omit/fail-closes `auth: "machine_token"` servers rather than
requesting a literal token. External runtimes that cannot call the provider
seam directly are unsupported for machine-token MCP.

See also: [Plugin SDK subpaths](/plugins/sdk-subpaths), [Runtime helpers](/plugins/sdk-runtime).
