# Contract-delta packet — PACI draft pin for OpenClaw local/fake baseline

**Recorded:** 2026-07-30 Asia/Taipei  
**OpenClaw branch:** `issue/ocp-openclawdevelopmentplan01`  
**OpenClaw start HEAD:** `bf10d35847c20c5077335070e3599fe91a81a0de`  
**Authority:** Principal execution prompt `docs/CURSOR-GROK-PRODUCTION-EXECUTION-PROMPT-2026-07-30.md` (OpenClaw-owned seam unlocked for local/fake proof)

## Platform snapshot (draft — not frozen)

| Artifact        | Exact value                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Platform HEAD   | `2c270987842eeb7580dcc80b96fdf5b7c311218e`                                                                                                                          |
| ADR 0013        | **Proposed** (not Accepted) — `docs/adr/0013-authclaims-cryptographic-token-issuance.md` SHA-256 `ccd25790e647493648854fdc05fc4baeb67fde7f047c671177b2b383022caeaf` |
| Envelope md     | `docs/contracts/platform-auth-token-envelope-v0.1.DRAFT.md` SHA-256 `4e6d2b7246a1f6b85f27dd94b005bc662eb74458f85674e314c0d01c1e20e853`                              |
| Envelope schema | `docs/contracts/schemas/platform-auth-token-envelope.v0.1.DRAFT.json` SHA-256 `838c7a427e49cde0599d2cfd4939da4af8ae571b03312e621dd25b7737723bad`                    |
| Semantic        | `0.1.3-draft` (Platform status text)                                                                                                                                |

## Principal decision file vs this prompt

| Decision | Committed Platform file | This Principal OpenClaw prompt                                                                 |
| -------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| D12      | `forbidden` (LOCKED)    | Unlocks Platform local/fake on Platform side — OpenClaw does **not** operate Platform issuance |
| D14      | `not yet` (LOCKED)      | **yes** for OpenClaw-owned machine-token seam local/fake implementation                        |

OpenClaw proceeds under the Principal execution prompt for **OpenClaw-owned** work only. This packet does **not** edit LiNKplatform and does **not** freeze Platform-owned semantics.

## Local/fake baseline use

OpenClaw fake PACI issuer + client tests pin the draft hashes above as the **local/fake behavioral baseline**. When Platform freezes a versioned envelope, OpenClaw must re-pin and re-prove; fixture/owner countersign refresh follows the approved contract process.

## Protocol behaviors implemented against (draft)

- RFC 8414 discovery at `issuer + "/.well-known/oauth-authorization-server"` (issuer: no trailing `/`, no path)
- `grant_types_supported: ["client_credentials"]`
- Client auth: `private_key_jwt` + ES256; assertion `aud` = token_endpoint; assertion `jti` single-use/replay-rejected
- Access token: Bearer + `expires_in`; Phase-1 **no** refresh_token; early reissue when remaining TTL < 20%
- Access-token `jti` multi-use while valid
- Independent domain bindings (Brain ≠ Skills)

## Explicit non-claims

- Not Platform freeze
- Not live Lisa / live Platform
- Not Codex certification
- Not merge / PR readiness / hosted CI green
