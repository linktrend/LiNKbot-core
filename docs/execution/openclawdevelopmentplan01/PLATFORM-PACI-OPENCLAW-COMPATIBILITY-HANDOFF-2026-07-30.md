# Platform-facing handoff — PACI ↔ OpenClaw consumption compatibility

**Recorded (original inspection):** 2026-07-30 Asia/Taipei
**Recheck / provenance closeout:** 2026-07-30 Asia/Taipei
**Class:** Documentation / source inspection only — **not** implementation, merge, Lisa enablement, live proof, or Codex certification
**OpenClaw HEAD (inspected / this closeout base):** `86cb29a645043416494294317128313183757b3f`
**Platform HEAD (original inspection):** `c4acc429c92c7a26669a1f4abdb989380d8e6df4`
**Platform HEAD (corrected PACI recheck):** `20c550fbb649f31891b0c9bd4ba2f9e146eb69dd`
**LiNKplatform edits by this OpenClaw session:** **none** (read-only)
**OpenClaw runtime / fixture JSON edits:** **none**

---

## Verdict (unchanged after Platform correction recheck)

**PACI Phase-1 `client_credentials` (15-minute access token, no refresh, no interactive login) is not consumable by current OpenClaw managed-MCP OAuth or `oauth.authProfileId` surfaces.** SecretRef can deliver an externally rotated bearer only as a **partial** fallback. A **new public OpenClaw seam** (prefer generic auth/MCP core, not private plugin-only) is required for correct PACI machine auth with independent Brain/Skills refresh and revoke.

**Recheck result:** At corrected Platform HEAD `20c550fb…`, Platform ADR 0013 / consumer matrix / Principal decisions now **agree** with this owner verdict (unsupported `authProfileId` for PACI Phase-1; public machine-token seam required). **Compatibility classification is unchanged.** Seam **implementation remains unauthorized** pending Principal **D14** (`not yet`).

---

## Inspected heads (provenance)

| Repo           | Role                                    | Exact SHA                                  |
| -------------- | --------------------------------------- | ------------------------------------------ |
| openclaw_prime | Capability evidence + this handoff base | `86cb29a645043416494294317128313183757b3f` |
| LiNKplatform   | Original PACI draft packet              | `c4acc429c92c7a26669a1f4abdb989380d8e6df4` |
| LiNKplatform   | Corrected PACI specification (recheck)  | `20c550fbb649f31891b0c9bd4ba2f9e146eb69dd` |

Platform correction commit subject: `docs(auth): correct PACI spec for standards and OpenClaw capability`.

---

## Spec baselines (current — Platform HEAD `20c550fb…`)

### Platform PACI (draft — not frozen / not live)

| Artifact                                                             | Role at corrected HEAD                                                                                                                                                                               |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/adr/0013-authclaims-cryptographic-token-issuance.md`           | Option A PACI; **OpenClaw owner-verified** that MCP OAuth / `authProfileId` **cannot** consume PACI `client_credentials`; public machine-token seam required (decision §8; consequences cite D7/D14) |
| `docs/contracts/platform-auth-token-envelope-v0.1.DRAFT.md`          | Discovery `grant_types_supported: ["client_credentials"]`; Phase-1 **no** `refresh_token`; reissue via client_credentials; prefer `private_key_jwt`                                                  |
| `docs/contracts/AUTHCLAIMS-CRYPTO-CONSUMER-COMPATIBILITY-MATRIX.md`  | OpenClaw capability table: MCP OAuth / `authProfileId` **Unsupported**; SecretRef **Partially supported**; public seam **Required — not present**                                                    |
| `docs/contracts/AUTHCLAIMS-CRYPTO-IMPLEMENTATION-WORK-PACKET.md`     | O1 public machine-token / client_credentials seam (core preferred)                                                                                                                                   |
| `docs/evidence/phase-0/PRINCIPAL-DECISIONS-AUTHCLAIMS-CRYPTO.md`     | D3 TTL 15m; D5 refresh none; D7 long-term authorize OpenClaw seam (not current `authProfileId`); **D14 = not yet** (OpenClaw seam work unauthorized); Lisa MCP still forbidden                       |
| `docs/handoffs/2026-07-30-grok-linkplatform-paci-spec-correction.md` | Platform incorporated this OpenClaw handoff @ `86cb29a…` read-only                                                                                                                                   |

### Prior Platform HEAD `c4acc42…` (historical)

Earlier packet preferred `oauth.authProfileId` as the OpenClaw Phase-1 path. That wording **overstated** OpenClaw capability and is **superseded** by the corrected packet at `20c550fb…`. Original OpenClaw inspection still correctly classified that aspirational path as **unsupported**.

### OpenClaw (current — HEAD `86cb29a…`)

| Surface                           | Behavior                                                                                             | Evidence                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Managed MCP OAuth                 | `grant_types: ["authorization_code", "refresh_token"]` only                                          | `src/agents/mcp-oauth-provider.ts:47–48`                                                                  |
| Repo-wide `client_credentials`    | **Zero** matches                                                                                     | `rg client_credentials` at HEAD empty                                                                     |
| `oauth.authProfileId`             | Requires refresh-capable `type: "oauth"`; projects access token only                                 | `src/agents/mcp-auth-profile.ts:72–76`; `src/config/schema.help.agents.ts:229–230`                        |
| Expired MCP OAuth without refresh | Fails closed → `openclaw mcp login`                                                                  | `src/agents/mcp-oauth.ts:187–190`                                                                         |
| Auth profile `type: "token"`      | Explicitly non-refreshable                                                                           | `src/agents/auth-profiles/types.ts:45–50`                                                                 |
| SecretRef scope                   | User-supplied credentials OpenClaw does **not** mint/rotate; rotating/OAuth refresh **out of scope** | `docs/reference/secretref-credential-surface.md:14–15`                                                    |
| Gateway SecretRef runtime         | Eager snapshot; not per-request re-resolve; refresh via `secrets reload`                             | `docs/gateway/secrets.md:23–27`                                                                           |
| linkbrain/linkskills HTTP         | Independent SecretRefs (`ingestionCredential` / `skillsCredential`)                                  | `docs/reference/secretref-credential-surface.md:111–112`; `extensions/linkbrain/src/transport.ts:324–328` |
| Plugin-owned MCP drain            | `authProfileId` without pre-injected Authorization → `auth_profile_required`                         | `extensions/linkbrain/src/transport.ts:430–437`                                                           |

---

## Answers (with evidence) — reconfirmed

### 1. Managed MCP OAuth vs PACI `client_credentials`

**Unsupported.** MCP client metadata only declares `authorization_code` + `refresh_token` (`mcp-oauth-provider.ts:47–48`). Native MCP OAuth is interactive login + PKCE/dynamic registration + refresh. PACI Phase-1 is `client_credentials` only, no refresh (Platform envelope + D5).

### 2. `oauth.authProfileId` — acquire/rotate PACI tokens?

**Unsupported.** Selects refresh-capable `type: "oauth"` only; rejects other types (`mcp-auth-profile.ts:72–76`). No client_credentials mint/reissue. Platform corrected matrix L21–22 matches.

### 3. SecretRef for 15-minute bearer without restart/manual mutation?

**Partially supported** as external-bearer delivery; **unsupported** as OpenClaw-owned PACI lifecycle. SecretRef excludes runtime-minted/rotating credentials (`secretref-credential-surface.md:14–15`). Gateway mapped refs need `secrets reload` (`secrets.md:23–27`).

### 4. Brain HTTP / Skills telemetry share MCP token refresh?

**Unsupported** as shared MCP refresh. Independent SecretRefs; plugin MCP drain does not call MCP OAuth refresh when only `authProfileId` is set (`auth_profile_required`).

### 5–6. Smallest public seam + ownership

**Required — not present.** Public machine-token / `client_credentials` provider in **generic managed MCP / auth-profile core** (not private-only `linkbrain`/`linkskills`), with per-domain bindings for independent refresh/revoke. Platform matrix L25 + work packet O1 + ADR 0013 §8 agree.

### 7. Fake/local tests, privacy, state, rollback, live gates

Unchanged from original inspection: fake client_credentials suite; no auth-code/PKCE/login; independent Brain/Skills; privacy (no raw JWT/secrets in logs); bootstrap SecretRefs + process/SQLite token cache outside SecretRef rotating surface; rollback = disable binding; live gates require Principal unlock including **D14** before seam work, and separate Lisa MCP unlock.

---

## Consumption-path classification matrix (authoritative)

| Proposed PACI → OpenClaw path                                            | Classification                    | Notes                                                  |
| ------------------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------ |
| Managed MCP native OAuth (`openclaw mcp login`, auth-code/PKCE/refresh)  | **Unsupported**                   | Wrong grant; interactive; requires refresh             |
| `mcp.servers.<domain>.oauth.authProfileId` → refreshable `type: "oauth"` | **Unsupported** for PACI mint     | Projects refresh-capable OAuth only                    |
| `authProfileId` + `type: "token"`                                        | **Unsupported** for 15m lifecycle | Non-refreshable; rejected by MCP auth-profile resolver |
| SecretRef → MCP/plugin `Authorization` (external rotator)                | **Partially supported**           | Delivery only; OpenClaw does not own reissue           |
| Shared MCP refresh for Brain HTTP + Skills telemetry                     | **Unsupported**                   | Separate credentials; plugin drain gap                 |
| Public OpenClaw machine-token / `client_credentials` seam (core)         | **Required — not present**        | OpenClaw-owned prerequisite                            |
| Private-only client_credentials inside linkbrain/linkskills              | **Not recommended**               | Bypass public MCP auth injection model                 |
| Seam **implementation** now                                              | **Unauthorized**                  | Principal **D14 = not yet**                            |

---

## Principal D14 / authorization bound

| Decision                                                 | Proposed default (Platform `20c550fb…`)          | OpenClaw posture                                                  |
| -------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| **D14** Authorize OpenClaw-owned machine-token seam work | **not yet** (OpenClaw Principal/Codex)           | **No seam implementation** from this handoff or PR #38 docs alone |
| D7 long-term path                                        | (A) authorize public client_credentials seam     | Aspirational product direction — **not** an implementation unlock |
| Lisa MCP enable                                          | Still forbidden on Platform still-forbidden list | Unchanged                                                         |

---

## Implications

1. Corrected Platform packet **aligns** with OpenClaw owner evidence — aspirational `authProfileId` preference for PACI Phase-1 is removed.
2. Compatibility **verdict unchanged**: current OpenClaw cannot consume PACI `client_credentials` via managed MCP OAuth / `authProfileId`.
3. Generic public OpenClaw seam remains **required** and **unauthorized** until Principal D14 = yes (plus OpenClaw Codex interface review).
4. Do **not** invent Phase-1 refresh tokens solely to fit current MCP OAuth (Platform D5 = none).

---

## Explicit non-claims

- No OpenClaw machine-token seam implementation
- No LiNKplatform edits by this session
- No merge / PR readiness / CI / Bugbot / Lisa mutation / live PACI or Gateway contact
- PACI remains **draft** pending Principal ADR 0013 acceptance
- AuthClaims 1.1 fixture-owner countersign is **orthogonal** and does **not** imply PACI crypto consumption readiness
- This closeout is **not** Codex certification or self-certification

---

## Validation performed (this closeout)

- Confirmed OpenClaw HEAD `86cb29a645043416494294317128313183757b3f`
- Read Platform corrected packet at `20c550fbb649f31891b0c9bd4ba2f9e146eb69dd` (ADR 0013, matrix, Principal decisions D7/D14, Platform correction handoff)
- Reconfirmed OpenClaw source evidence paths above still present at `86cb29a…`
- Diff note: Platform `c4acc42…` → `20c550fb…` is docs-only PACI correction aligning with this handoff

---

## Exact next action

**Stop.** Await Principal D14 (and related D1–D15) + OpenClaw Codex direction before any machine-token seam implementation. No further OpenClaw runtime work from this packet alone.
