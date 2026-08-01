# Phase 5 — Decision Packet: Platform Auth for Managed MCP

**Recorded:** 2026-07-27 19:12 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** **Platform approval required — not authorized for live Lisa wiring**

## Ask

Platform must approve claim propagation and credential references before any
operator copies templates from `mcp-templates/` into a live Lisa profile or
enables `mcp.servers.linkbrain` / `mcp.servers.linkskills`.

## OpenClaw recommendation (plan §7.3)

1. **Preferred:** Platform issues domain-specific OAuth-compatible credentials
   consumable via `mcp.servers.<domain>.oauth.authProfileId`
   (`linkbrain-stage-mcp` / `linkskills-stage-mcp` placeholders).
2. **Fallback:** Platform-approved secret injector materializes domain-specific
   env SecretRefs (names only documented):
   - `LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN`
   - `LINKTREND_LINKBRAIN_STAGE_INGESTION_TOKEN` (Brain HTTP ingestion only)
   - `LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN`
   - `LINKTREND_LINKSKILLS_STAGE_PLUGIN_TOKEN`
3. **Stop gate:** If Platform ADR selects a mechanism current public OpenClaw
   MCP surfaces cannot consume securely, raise a contract-compatibility decision.
   Do not paste bearer tokens, reuse Cursor credentials, or grant DB access.

## Claims / binding (pending Platform ADR)

| Claim surface        | Expected (OpenClaw consumption)                  | Platform decision |
| -------------------- | ------------------------------------------------ | ----------------- |
| Issuer               | Platform IdP / gateway                           | pending           |
| Audience             | `linkbrain` vs `linkskills` (separate)           | pending           |
| Actor / runtime bind | Lisa actor + runtime binding IDs                 | pending           |
| Service              | Brain Gateway vs Skills Gateway                  | pending           |
| Operations / scopes  | Brain tool families vs Skills tool families (§9) | pending           |
| Expiry / rotation    | Independently rotatable per domain               | pending           |
| Revocation           | One-domain revoke leaves the other healthy       | pending           |

## Non-negotiables

- No literal credentials in Git, OpenClaw JSON, docs, logs, or process argv
- Brain and Skills credentials are independently issuable, rotatable, revocable
- Brain ingestion SecretRef must never use the Skills credential ID
- Templates remain `enabled: false` until this packet is signed off

## Evidence already prepared (fake / template)

- Sanitized MCP templates: `docs/execution/openclawdevelopmentplan01/mcp-templates/`
- Domain tool filters: `extensions/linkbrain/mcp-tool-filter.ts`,
  `extensions/linkskills/mcp-tool-filter.ts`
- Prior auth matrix stub: `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`

## Decision record

| Field              | Value                                       |
| ------------------ | ------------------------------------------- |
| Platform approver  | _(pending)_                                 |
| Decision date      | _(pending)_                                 |
| Approved mechanism | _(oauth authProfileId / SecretRef / other)_ |
| Stage endpoints    | _(pending — not contacted by this session)_ |
| Live Lisa wiring   | **blocked** until approval                  |

## Rollback if live wiring later fails

Disable the affected `mcp.servers.<domain>` entry and that domain's plugin
flags; revoke only that domain's credential.
