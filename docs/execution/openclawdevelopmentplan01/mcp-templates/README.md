# Phase 5 Managed MCP Templates (fake / template only)

Sanitized operator templates for independent `mcp.servers.linkbrain` and
`mcp.servers.linkskills` entries. **Do not** copy these into the live Lisa
profile (`~/.openclaw-lisa`) until Platform approves claim propagation and
credential references (see `../PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`).

## Files

| File                                         | Purpose                                                             |
| -------------------------------------------- | ------------------------------------------------------------------- |
| `linkbrain.stdio.fake.json`                  | Local stdio → `extensions/linkbrain/fake/server.mjs --stdio`        |
| `linkbrain.http.secretref.template.json`     | HTTP + `${LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN}` header placeholder  |
| `linkbrain.oauth.authprofile.template.json`  | Interactive OAuth `authProfileId` path (non-PACI)                   |
| `linkbrain.machine-token.template.json`      | PACI machine-token / `client_credentials` path (`enabled: false`)   |
| `linkskills.stdio.fake.json`                 | Local stdio → `extensions/linkskills/fake/cli.mjs stdio`            |
| `linkskills.http.secretref.template.json`    | HTTP + `${LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN}` header placeholder |
| `linkskills.oauth.authprofile.template.json` | Interactive OAuth `authProfileId` path (non-PACI)                   |
| `linkskills.machine-token.template.json`     | PACI machine-token / `client_credentials` path (`enabled: false`)   |
| `tool-allowlists.yaml`                       | Plan §9.1 / §9.2 include lists (documentation mirror)               |

Replace `__OPENCLAW_PRIME_ROOT__` with the absolute repo root when using stdio fakes for developer tests.

## Independence (plan §7.2)

Each server owns its own:

- `enabled` flag (templates ship `false`)
- transport (`stdio` fake or `streamable-http` template)
- authentication (`oauth.authProfileId` **or** env-template header SecretRef)
- `connectionTimeoutMs` / `requestTimeoutMs`
- `toolFilter.include` (exact §9 allowlist; default-deny otherwise)
- health/probe and rollback (domain-scoped disable + credential revoke)

Revoking Brain auth must leave Skills and native OpenClaw functional, and the reverse.

## Auth placeholders (.env.example style — names only)

Do not create real secrets. Documented environment IDs for stage:

```bash
# Brain managed MCP bearer (HTTP SecretRef path)
# LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN=

# Brain non-MCP ingestion endpoint (plugin config SecretRef; Brain-only)
# LINKTREND_LINKBRAIN_STAGE_INGESTION_TOKEN=

# Skills managed MCP bearer (HTTP SecretRef path)
# LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN=

# Skills plugin credential (plugin config SecretRef; Skills-only)
# LINKTREND_LINKSKILLS_STAGE_PLUGIN_TOKEN=
```

Structured SecretRef shape (when operators prefer objects over `${ENV}` strings):

```json
{
  "source": "env",
  "provider": "default",
  "id": "LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN"
}
```

Preferred consumption order (plan §7.3):

1. Platform OAuth-compatible credential via `mcp.servers.<domain>.oauth.authProfileId`
2. Else Platform-approved SecretRef / `${ENV}` header injection (never plaintext in Git/JSON/logs/argv)
3. Else stop for a contract-compatibility decision

## Tool filters

Canonical constants:

- `extensions/linkbrain/mcp-tool-filter.ts`
- `extensions/linkskills/mcp-tool-filter.ts`

Templates must keep `toolFilter.include` identical to those modules.

## Developer fake usage

From the OpenClaw Prime repo root (example — not Lisa):

```bash
# Brain fake stdio (manual probe)
node extensions/linkbrain/fake/server.mjs --stdio

# Skills fake stdio
node extensions/linkskills/fake/cli.mjs stdio
```

Hot-apply vs restart: managed MCP config changes may use OpenClaw's supported
hot-apply path after validation; auth-profile issuance/revocation and plugin
enablement remain operator-gated and are out of scope for these templates.

## Explicit non-goals

- No live Lisa profile mutation
- No live Platform contact
- No enabling `linkbrain` / `linkskills` plugins on Lisa
- No real tokens, phone numbers, or tenant identifiers
