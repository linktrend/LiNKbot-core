# Phase 1 — Contract consumption record

**Session:** `cursor-cloud-feature-openclawdevelopmentplan01-contract-consumption-20260728-0744`  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**Recorded:** 2026-07-28 07:44 Asia/Taipei  
**Agent:** Cursor Cloud Agent (Grok 4.5 High), Feature role  
**Authority:** Principal mission — consume hashed Platform/Brain/Skills contracts; do not edit upstream

## 1. OpenClaw plan pin

| Field   | Value                                                                           |
| ------- | ------------------------------------------------------------------------------- |
| Plan    | `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` |
| SHA-256 | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`              |
| Check   | HASH_OK (re-verified 2026-07-28 07:44 Asia/Taipei)                              |

## 2. LiNKplatform pin

| Field                                             | Value                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Source HEAD                                       | `95120dc4549f0bc79627668acbc5b21afd699e29`                         |
| `PLATFORM_CONTRACTS_SEMVER`                       | `0.2.0`                                                            |
| Package                                           | `@linktrend/platform-contracts@0.2.0`                              |
| Golden content hash (owner-approved)              | `deb43dca494a198cad86e49fc6be91ccb79d19aa297e8d824d7416e5be35a134` |
| Golden fixture file SHA-256                       | `834f569547032e26af9bbfa08f556fe013ae59f0cd2c49c476538f4dc927ebae` |
| `packages/contracts/src/contract-meta.ts` SHA-256 | `315849f13b8a8047bd17c9f0ae55c9b385f4208f148395a20f27e7f1b10d5caa` |
| Pin artifact                                      | `contracts/platform/PIN.json`                                      |

Sanitized: metadata + hashes only. No `node_modules` copy.

## 3. LiNKbrain pin

| Field                                       | Value                                                              |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Source HEAD                                 | `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2`                         |
| `BRAIN_CONTRACT_VERSION`                    | `1.0.0` (from `packages/contracts/src/schemas.ts`)                 |
| Package                                     | `@linktrend/lbrain-contracts@0.1.0`                                |
| `packages/contracts/src/schemas.ts` SHA-256 | `61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb` |
| Pin artifact                                | `contracts/brain/PIN.json`                                         |

### Tool-name freeze (non-negotiable for OpenClaw)

OpenClaw consumes **frozen plan §9.1** tool names (`brain_browse`, `brain_search`,
`brain_load`, `brain_append_finding`, …). Brain `packages/mcp-server` CURRENT
registers incompatible aliases (`brain_search_knowledge`, `brain_load_knowledge`,
…). OpenClaw **will not** rename or alias its allowlist/fakes/fixtures to match
CURRENT Brain MCP names. Brain owner must implement the frozen §9.1 surface.

Evidence and options: `BRAIN-TOOL-NAME-DECISION-PACKET.md`.

## 4. LiNKskills pin

| Field                             | Value                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Source HEAD                       | `fd1b6364b8450ec292773f00cc2dc6de19143a70`                         |
| `CONTRACT_VERSION` / API label    | `skills.api.v0.1`                                                  |
| Schema const                      | `schema_version: "0.1"`                                            |
| Schemas dir                       | `packages/contracts/schemas/*.json` (12 files)                     |
| Schemas package aggregate SHA-256 | `06ec5d10fc579e1e69f99b099939fafe867047674f374079b98db528bf3e61d1` |
| Pin artifact                      | `contracts/skills/PIN.json`                                        |

### Per-schema SHA-256

| File                          | SHA-256                                                            |
| ----------------------------- | ------------------------------------------------------------------ |
| `dependency-types-v0.1.json`  | `d69d986443845f8783090bbb20ab96b6c8259ca2b853476f61db02ac36cfd33d` |
| `error-envelope-v0.1.json`    | `2aaf94e6027402e9bb6b2cb2afca5778f960c057e931074ebcca8191d2ceab15` |
| `eval-suite-v0.1.json`        | `0bcbbe2c32609866e5d68d8fea3a46167ca71f01290819a4f76fd81dcaa185df` |
| `execution-profile-v0.1.json` | `5e81f462a2a5868d7d7e75a39e72b65af084333e6a801996ddf56cd8e836da61` |
| `feedback-v0.1.json`          | `516b194279a55789f8d9ea21f3eecf903d6b1d1039da90e354d5914f4da27daa` |
| `mcp-api-envelope-v0.1.json`  | `ad278955dcf9f63282a6027b862924f4e1063b468f8961ae7a73703cd4700f05` |
| `release-record-v0.1.json`    | `b2c076708388896fe519b350888bd0ca5351bfde881d193023bd877456a35478` |
| `run-event-v0.1.json`         | `a5cdf8e9079ed807ed9251965532ac9f463467319af70766addae47718ae98b1` |
| `runtime-profile-v0.1.json`   | `834671a1d04a0dd043b5dc3ee07639ea3c17b7d1e4f6f56153f8461a763dc96d` |
| `skill-fragment-v0.1.json`    | `5c0c2c373ebdf2668ac439f132116d7ba895966d3290d922c094f2dff771a967` |
| `skill-pack-v0.1.json`        | `85a29f85edd93c19327bfbc64c642615de449fb434a91e466202e520b0db1506` |
| `tool-descriptor-v0.1.json`   | `c827803d995a561fb2dc31e0ce00a2f9adcb8e8f4e8fca56f15710354a87e1fd` |

Schemas package aggregate method: SHA-256 of newline-joined sorted lines
`{file_sha256}  {basename}` plus trailing newline.

## 5. OpenClaw fixture package aggregates

Method: SHA-256 of newline-joined sorted lines `{json_file_sha256}  {relative_path}`
plus trailing newline, over all `*.json` under the fixture root (paths relative to
that root, sorted).

| Package                          | JSON count | Aggregate SHA-256                                                  |
| -------------------------------- | ---------- | ------------------------------------------------------------------ |
| `extensions/linkbrain/fixtures`  | 71         | `91167a13fa33b8bb04141981bfec683f381e0593ed2bad4b2b910e9535d994ba` |
| `extensions/linkskills/fixtures` | 69         | `adc5b0f0ffe6f07fc62314f628ea813108c49d7e299f82a9b73a8b7f8d46909a` |

Owner countersignature process: `FIXTURE-OWNER-SIGNOFF.md`.

## 6. Consumption rules

1. Consume only pinned HEADs + hashes above (or newer owner-signed supersession).
2. Do not edit LiNKplatform / LiNKbrain / LiNKskills from this OpenClaw session.
3. Do not change OpenClaw tool names to Brain CURRENT MCP aliases.
4. Fixture drafts remain non-authoritative for domain conformance until owners countersign.
5. Fake/fixture proof never claims stage or production readiness.

## 7. Exact next actions

1. Principal routes `FIXTURE-OWNER-SIGNOFF.md` to Brain and Skills owners for countersign.
2. Principal routes `BRAIN-TOOL-NAME-DECISION-PACKET.md` to Brain owner (implement §9.1 names).
3. OpenClaw continues Phase 2–6 against frozen §9.1 / §9.2 names and draft fixtures without claiming owner conformance.
