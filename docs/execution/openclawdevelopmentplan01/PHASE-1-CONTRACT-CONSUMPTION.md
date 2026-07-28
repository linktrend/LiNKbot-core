# Phase 1 — Contract consumption record

**Session:** `cursor-cloud-feature-openclawdevelopmentplan01-correction-wave2-20260728-0910`  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**Recorded:** 2026-07-28 09:10 Asia/Taipei (correction wave 2)  
**Agent:** Cursor Cloud Agent (Grok 4.5 High), Feature role  
**Authority:** Principal mission — consume hashed Platform/Brain/Skills contracts; do not edit upstream

## 1. OpenClaw plan pin

| Field   | Value                                                                           |
| ------- | ------------------------------------------------------------------------------- |
| Plan    | `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` |
| SHA-256 | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`              |
| Check   | HASH_OK (re-verified 2026-07-28 09:10 Asia/Taipei)                              |

## 2. LiNKplatform pin

| Field                                  | Value                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| Source HEAD                            | `10458829761797a2a2a70eff0dfa3d05bf980396`                                             |
| Source branch                          | `issue/LP-01-linkplatformdevelopmentplan01`                                            |
| `PLATFORM_CONTRACTS_SEMVER`            | `0.2.1`                                                                                |
| Package                                | `@linktrend/platform-contracts@0.2.1`                                                  |
| **Auth contract**                      | `platform.auth-claims/1.0.0`                                                           |
| Schema file SHA-256                    | `b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb`                     |
| Auth contentHash                       | `6bf49618d846662976886f57d5d468f73a08ab1a6574968f68833d82429db251`                     |
| Claims TS SHA-256                      | `ae220b00f33d534cb9ba624160b3c6910f1df0aba172f428985641c5a98f0e90`                     |
| Golden canonicalize vector (meta only) | file `834f5695…ebae` / embedded `deb43dca…a134` — **not** a substitute for auth-claims |
| `contract-meta.ts` SHA-256             | `ceed17a5417f1bec359de825a4f0b9f25e5cf363e4e468608daf21206385ed7a`                     |
| Pin artifact                           | `contracts/platform/PIN.json`                                                          |
| Sanitized schema copy                  | `contracts/platform/auth-claims-1.0.0/`                                                |

Sanitized: metadata + hashes + schema JSON only. No `node_modules` copy.

## 3. LiNKbrain pin

| Field                                       | Value                                                              |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Source HEAD                                 | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a`                         |
| Source branch                               | `issue/13-developmentplan01`                                       |
| `BRAIN_CONTRACT_VERSION`                    | `1.0.0` (from `packages/contracts/src/schemas.ts`)                 |
| Package                                     | `@linktrend/lbrain-contracts@0.1.0`                                |
| `packages/contracts/src/schemas.ts` SHA-256 | `61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb` |
| Frozen MCP tools                            | **17** names in `packages/mcp-server/src/frozen-tools.ts`          |
| `frozen-tools.ts` SHA-256                   | `1e265b20dca34f4be73908a38bf2102c514ce594574faf27a41a9567a663be26` |
| Pin artifact                                | `contracts/brain/PIN.json`                                         |

### Tool-name freeze (non-negotiable for OpenClaw)

OpenClaw consumes **frozen plan §9.1** tool names (17). Corrected Brain HEAD
`f2c9d6c…` implements the same surface via `FROZEN_MCP_TOOL_NAMES`. OpenClaw
**will not** alias. See `BRAIN-TOOL-NAME-DECISION-PACKET.md`.

## 4. LiNKskills pin

| Field                             | Value                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Source HEAD                       | `4094d84e1fb70b3310f4e236e6886f1449d8a1d9`                                                                                   |
| Source branch                     | `issue/21-linkskillsdevelopmentplan01`                                                                                       |
| `CONTRACT_VERSION` / API label    | `skills.api.v0.1`                                                                                                            |
| Schema const                      | `schema_version: "0.1"`                                                                                                      |
| Schemas dir                       | `packages/contracts/schemas/*.json` (13 files, includes vendored auth-claims)                                                |
| Schemas package aggregate SHA-256 | `828ac00d3be0e9b2040aacec3ca788176d8bb160c11d13994055d047503981d2`                                                           |
| Platform auth-claims (vendored)   | schema `b0397cdf…50fb` / contentHash `6bf49618…b251`                                                                         |
| Certification                     | Immutable-release / executor-receipt path per Skills correction handoff; prior suite-authored observed_output path withdrawn |
| Pin artifact                      | `contracts/skills/PIN.json`                                                                                                  |

### Per-schema SHA-256

| File                               | SHA-256                                                            |
| ---------------------------------- | ------------------------------------------------------------------ |
| `dependency-types-v0.1.json`       | `d69d986443845f8783090bbb20ab96b6c8259ca2b853476f61db02ac36cfd33d` |
| `error-envelope-v0.1.json`         | `2aaf94e6027402e9bb6b2cb2afca5778f960c057e931074ebcca8191d2ceab15` |
| `eval-suite-v0.1.json`             | `0bcbbe2c32609866e5d68d8fea3a46167ca71f01290819a4f76fd81dcaa185df` |
| `execution-profile-v0.1.json`      | `5e81f462a2a5868d7d7e75a39e72b65af084333e6a801996ddf56cd8e836da61` |
| `feedback-v0.1.json`               | `516b194279a55789f8d9ea21f3eecf903d6b1d1039da90e354d5914f4da27daa` |
| `mcp-api-envelope-v0.1.json`       | `ad278955dcf9f63282a6027b862924f4e1063b468f8961ae7a73703cd4700f05` |
| `platform-auth-claims.v1.0.0.json` | `b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb` |
| `release-record-v0.1.json`         | `b2c076708388896fe519b350888bd0ca5351bfde881d193023bd877456a35478` |
| `run-event-v0.1.json`              | `a5cdf8e9079ed807ed9251965532ac9f463467319af70766addae47718ae98b1` |
| `runtime-profile-v0.1.json`        | `834671a1d04a0dd043b5dc3ee07639ea3c17b7d1e4f6f56153f8461a763dc96d` |
| `skill-fragment-v0.1.json`         | `5c0c2c373ebdf2668ac439f132116d7ba895966d3290d922c094f2dff771a967` |
| `skill-pack-v0.1.json`             | `85a29f85edd93c19327bfbc64c642615de449fb434a91e466202e520b0db1506` |
| `tool-descriptor-v0.1.json`        | `c827803d995a561fb2dc31e0ce00a2f9adcb8e8f4e8fca56f15710354a87e1fd` |

Schemas package aggregate method: SHA-256 of newline-joined sorted lines
`{file_sha256}  {basename}` plus trailing newline.

## 5. OpenClaw fixture package aggregates

Method: SHA-256 of newline-joined sorted lines `{json_file_sha256}  {relative_path}`
plus trailing newline, over all `*.json` under the fixture root (paths relative to
that root, sorted).

| Package                          | JSON count | Aggregate SHA-256                                                  |
| -------------------------------- | ---------- | ------------------------------------------------------------------ |
| `extensions/linkbrain/fixtures`  | 71         | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` |
| `extensions/linkskills/fixtures` | 69         | `8586d89a4a160987ace45ed4392b78c8a66391940e81eed6bdc098f49404ec96` |

Owner countersignature process: `FIXTURE-OWNER-SIGNOFF.md`.  
Principal routing: `COUNTERSIGN-REQUEST.md`.  
Status: **`AWAITING_OWNER_COUNTERSIGN`** — **NOT a passed Phase 1 gate**.

## 6. Consumption rules

1. Consume only pinned HEADs + hashes above (or newer owner-signed supersession).
2. Do not edit LiNKplatform / LiNKbrain / LiNKskills from this OpenClaw session.
3. Do not change OpenClaw tool names away from frozen §9.1.
4. Fixture drafts remain non-authoritative for domain conformance until owners countersign.
5. Fake/fixture proof never claims stage or production readiness.
6. Auth identity fixtures use camelCase `platform.auth-claims/1.0.0` — not golden-meta-as-auth.

## 7. Exact next actions

1. Principal routes `COUNTERSIGN-REQUEST.md` / `FIXTURE-OWNER-SIGNOFF.md` to Brain and Skills owners.
2. OpenClaw continues fake-tier work against frozen §9.1 / §9.2 names and draft fixtures without claiming owner conformance or Phase 1 complete.
