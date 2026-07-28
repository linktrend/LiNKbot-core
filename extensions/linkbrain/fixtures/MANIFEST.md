# Brain Contract Fixtures Manifest

OpenClaw-derived draft fixtures for Lisa ↔ LiNKbrain integration tests.

- **Status:** draft — consumption hashes recorded; LiNKbrain owner countersign `AWAITING_OWNER_COUNTERSIGN`
- **Contract version:** `brain.contract.v0.draft` (consumer package); Brain `BRAIN_CONTRACT_VERSION=1.0.0`
- **Platform claims:** `platform.auth-claims/1.0.0` (camelCase AuthClaims in `identity/` + `auth/`)
- **Source plan:** `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` §9.1 / §9.3
- **Brain HEAD pin:** `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` — implements full frozen 17 tools in `packages/mcp-server/src/frozen-tools.ts`
- **Live data:** none — all actor IDs, tokens, and payloads are sanitized placeholders

## SHA-256 inventory

| File | SHA-256 |
| --- | --- |
| `auth/expired.json` | `db96148e750216cf4376caf831c41b18f47743a8e05d047b8c0ce3226e8ac25b` |
| `auth/revoked.json` | `f16e44cc373117e8e733c8f48acd8123219883a04597d8e832f8e250bcee67e0` |
| `auth/wrong-audience.json` | `070eadcf9e0cfd876cab69a4b344a05fb09baad1ecc0621d44e3289791cd80b1` |
| `auth/wrong-scope.json` | `87c06a7f1bd7f7b3938936fbde456d99c6a90cd46d35ae9d72a0685301efaa2a` |
| `capture/lifecycle-event.json` | `5972529e8d0a99f80d6fa14ecb2c69d6584b7c14013ea912ca4e3fff42a5c4e1` |
| `capture/prohibited-reasoning.json` | `33789f3d71695e425b09d74b0d47070ca11901d046c265f5db0649379b99a92e` |
| `capture/prohibited-secrets.json` | `281b86b8043fd686fb9f7ce8679373c16fb2c0822bbbac5eaae6c7db7df4d135` |
| `capture/prohibited-unbounded-tool-output.json` | `4bec43b2f54b6000bb2ac9b59854920673840ca670173e62e28c1bdb588c1349` |
| `capture/sample-batch.json` | `cccd356522ad7f164effb5945617040290843c9628a58d90ce1284cdb8da7937` |
| `cross-domain-skills-shaped.json` | `7a09129100033311f13da28c6fa49708e0d547b8c09d424c7783edf6cc51d9e5` |
| `failures/authentication.json` | `a1b235aeddd99aae92473814595aaa55c5d858c311c94209a75166475e0a1f2a` |
| `failures/retryable.json` | `34e73b7761f4758715b5f82489c573133325b818cc0561aab9158c85cda8b7b6` |
| `failures/terminal.json` | `70fa38def8a65ee6072797d9291b5c29fb42c73e682b359de93e1abf8b94a166` |
| `failures/throttled.json` | `de8e9b674cc04c30c18d7036b2b467a57c1e3b7d67a26b234bd8db96dd41f492` |
| `health/health-ok.json` | `bee21d804ccb11b62bd77ee87e10c9fb0ead8a3cd9eb2c4cc035e7147d6fb0ad` |
| `health/version-incompatible.json` | `3c7d34d87c4fe14189d635b7c18e07f27d7a724d29426fa1ae659f47e4998b1a` |
| `health/version-negotiate.json` | `a50805c1cb8990c7afb3076e3ef35fadc9c7055e4ca5ae36ab917bd36dcb0dca` |
| `identity/negative-claim.json` | `fef7a9b4f1ef8b2c0a05bd16d5f6b575b9801bbb688963065da8c195868e3bc9` |
| `identity/positive-claim.json` | `832a648469932c6628a735c233777b3bfabb805fc80565498a3d6b8a75eba572` |
| `replay/duplicate-idempotency.json` | `385f64e78b261aa9c2f74e2dd104dade61c77138dfab966677fad20e0eec6dc5` |
| `tools/coordination/brain_checkpoint_write.error.json` | `f2d8c23a2c6b97e15bff13a60219017e994f529d8a969116c44bdb76cd159c3a` |
| `tools/coordination/brain_checkpoint_write.request.json` | `7609a9c6011022f719826ecb882b826bd005731b73f26ba17a8855fe3a86f57b` |
| `tools/coordination/brain_checkpoint_write.response.json` | `9c1dd1868015f422f3dc8d8bec3dff6886bd0a298c878647022d12094258ee6c` |
| `tools/coordination/brain_conflict_respond.error.json` | `a1934cb1fc65bd1e826115f03881fa466bc5712bab2e76fdabc6cc60c62d110b` |
| `tools/coordination/brain_conflict_respond.request.json` | `d822ca7190bb34fca3ea9382612cb0168481e2c4215a537edcf124af040c9842` |
| `tools/coordination/brain_conflict_respond.response.json` | `8ddc06987d777e615338b8bbe1ae82d42b894d93ac3bddd5f08f69a1fa1c87b7` |
| `tools/coordination/brain_handoff_accept.error.json` | `f6f5be9dbb30c5a8fb865cc0f4dbb4fa6e23c29503a7a8b6612303c9527f6e55` |
| `tools/coordination/brain_handoff_accept.request.json` | `0ebe0da7a9d44c08b6073f8e619dfb697b9c9be8412b27c6fd054f62f7d1bf47` |
| `tools/coordination/brain_handoff_accept.response.json` | `fa9c759c8d13f76b239fd42f8a918a0c7ad6bd9336765798019670eadb618a78` |
| `tools/coordination/brain_handoff_create.error.json` | `fa12eb167d75a9ecc396ed74272fa9c3c2018d1ed9619df66b871fa8e7de5d92` |
| `tools/coordination/brain_handoff_create.request.json` | `24c872d4d86f6288698df0b62a585c7d4d070f86cdb95858c9e1526e40c6ed7d` |
| `tools/coordination/brain_handoff_create.response.json` | `0955384becbb0eb613c684b5fed9c78dcb07887965ffec1bab210b04f32c79a9` |
| `tools/coordination/brain_inbox_read.error.json` | `7a928724e8b6f20f65369c78233b4c1fe307fda8f8c03da2bef5597ab4a4bf73` |
| `tools/coordination/brain_inbox_read.request.json` | `e976c1afc96f8ec1f7f1dcf216afce0325b6d5259e091aca2e781927004c437f` |
| `tools/coordination/brain_inbox_read.response.json` | `cf9cf5f9a0e06aedff502cb621f9e23df82872232727a5ce489233d2d761678a` |
| `tools/coordination/brain_message_send.error.json` | `6dbff455b02a3d202c42ddcf08a108956ad804357df8150004eca58187f8ab38` |
| `tools/coordination/brain_message_send.request.json` | `3f52aefa7394f7cf22d869456af649add1ba417e3942ef2d3d356f8d35dc3062` |
| `tools/coordination/brain_message_send.response.json` | `642bb0b3fc5d0c73adc133b4b39822dab4e0637278af2d3758fc332695a26495` |
| `tools/coordination/brain_task_close.error.json` | `908c36cca3f84eee4cccbad3ffac46c950ab8ce076e4c5975c16bbe2e0d5ac9c` |
| `tools/coordination/brain_task_close.request.json` | `075e99f984d5bfb07fa9c3e30b39f32dd026f24c877220b8b7ded1ea81dcf29b` |
| `tools/coordination/brain_task_close.response.json` | `03f4848e3563b282cf6c9dd07c581a7b2fe39138d6da4d76cff5d89b1e30f880` |
| `tools/coordination/brain_task_start.error.json` | `f8a52e9d4cce34d836cd8d0fa3c2b804903d510a18905397863b1848dbb09a06` |
| `tools/coordination/brain_task_start.request.json` | `ec4c50d652ee9d764b4f58f1809dca12df40f4fdef37afa2b89c3d080ff8a4dc` |
| `tools/coordination/brain_task_start.response.json` | `0707a26f6387f0a39a7613c5d54510023eb3cf3a1df46b3f1001cd84dcff118e` |
| `tools/coordination/brain_task_update.error.json` | `4a7e7775932e8eb9d31b9cf5080d2e20dd2e34375f1096c560fc19648180080a` |
| `tools/coordination/brain_task_update.request.json` | `846cff73390c2d4207f522178368bf8ed09ecf29809a4fd779067ff373257645` |
| `tools/coordination/brain_task_update.response.json` | `000119a54f4a3aebe3701c25a2d12044d8f300d471e84afa837ecb7bbca1a1d7` |
| `tools/knowledge/brain_append_finding.error.json` | `d664980ccb2a818830c7ddf78a23fdeac19ebe9641103abc1af387f59e4ee5ae` |
| `tools/knowledge/brain_append_finding.request.json` | `f2bccaa8b3bdf72ef7487682d3a168de5f2e76c23cb0c94e8adb64159b3ffd86` |
| `tools/knowledge/brain_append_finding.response.json` | `318b572cdd7f4dbdbff16ea3c3132b62e7f0460defdb41201714f621cea32a62` |
| `tools/knowledge/brain_browse.error.json` | `b9d0d49ad095c2fd71ae9d85c5f2679a2a3507950529d7cc8894aa33248e92c9` |
| `tools/knowledge/brain_browse.request.json` | `53da474572f52e37acf9e4b1b1e46955774692fa771da887d3704818950405dd` |
| `tools/knowledge/brain_browse.response.json` | `5b7bb33e1a78d67a19f333a267dfa467c7910a221cd55d38e06d15f91bdcebd0` |
| `tools/knowledge/brain_load.error.json` | `d23dd1cd9949bf361f1f8cafe4161383c0e0e466e432cf64ff874e7d24694796` |
| `tools/knowledge/brain_load.request.json` | `4259470462c40ac22f86260d7136afcbfe35a3a0ef083b950d93f9219b816628` |
| `tools/knowledge/brain_load.response.json` | `8667dec0b0c7cc6a40e1ba1a2d2f93a40983561b956b687d129cba0db43e5c3d` |
| `tools/knowledge/brain_search.error.json` | `b269ffa8c41ad6aadaf7a27d577565a8e3e777237889fa33d61daded70d450a1` |
| `tools/knowledge/brain_search.request.json` | `11be6827343532e004de11974cb952d712732d8f6a3c84f0be8f1edecebe45eb` |
| `tools/knowledge/brain_search.response.json` | `228f435dbb212fbfb4ab79bf7153a431d95411017fb58b07216fa832a1487db8` |
| `tools/private/brain_capture_batch.error.json` | `2cf7b5099b06ad76a62a5810a40e9566e072f2ba3582a0603e9ff1a0cbef7715` |
| `tools/private/brain_capture_batch.request.json` | `fd64915a65b7ab02e5b09420217c4cec7fe121abb49890f52c24643434c32a11` |
| `tools/private/brain_capture_batch.response.json` | `a4cef66e8040eab374e5156781a9ad33627832171699d3d835c1c65ccd968672` |
| `tools/private/brain_episode_checkpoint.error.json` | `c564527540b8aad4672637e3a4743a5eec9a659a91415fb4ccefeabd852f9612` |
| `tools/private/brain_episode_checkpoint.request.json` | `cc73a396728dddd6ee66f3de608ea4066c6e7e7c5296072c4c8220213bd79a2b` |
| `tools/private/brain_episode_checkpoint.response.json` | `9dd9a59490b2599de64ed4f81ec98cd7f42554dc0950acdcbea9c8282de049c2` |
| `tools/private/brain_private_load.error.json` | `5b5e0788e06563fdaa4b3033bd41c5c192e26e3638c41568243ca3f6a788dd1b` |
| `tools/private/brain_private_load.request.json` | `ab029392f0b25fc9ba3127565d405bcb10019e54d69c27e570dd46102d3e3c4b` |
| `tools/private/brain_private_load.response.json` | `bcd4ff92e58729cd811ccd4044b01abefe028fd317f57e910e8d1801ceed80b9` |
| `tools/private/brain_private_search.error.json` | `89eef0462aaeb6364adcf95dd0f63cf489a5dfd7ad26899ccc89e413f5fa4fd2` |
| `tools/private/brain_private_search.request.json` | `8e866cd9dc4b9c7b71a500477f60299e9b4e68e9492feec61c4aee089e1f67dc` |
| `tools/private/brain_private_search.response.json` | `da2f49a7b39a681f3a1559c2985348dfdfbe268aaa9f32f71af6610aea952bc0` |

## Consumption package hash

| Field | Value |
| --- | --- |
| Method | SHA-256 of sorted lines `{file_sha256}  {relative_path}` over all `*.json` |
| JSON file count | 71 |
| **Fixture package aggregate SHA-256** | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` |
| OpenClaw plan SHA-256 | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` |
| Brain contracts HEAD pin | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` |
| `BRAIN_CONTRACT_VERSION` | `1.0.0` |
| `schemas.ts` SHA-256 | `61468e4cf93d087df23dad1c26fbc91b258378757024debcde0cb6e97d50e0bb` |
| `frozen-tools.ts` SHA-256 | `1e265b20dca34f4be73908a38bf2102c514ce594574faf27a41a9567a663be26` |
| Recorded | 2026-07-28 09:10 Asia/Taipei (correction wave 2) |
| Sign-off process | `docs/execution/openclawdevelopmentplan01/FIXTURE-OWNER-SIGNOFF.md` |
| Tool-name decision | `docs/execution/openclawdevelopmentplan01/BRAIN-TOOL-NAME-DECISION-PACKET.md` |

Tool names in this package are **frozen plan §9.1** (17 names). Corrected Brain HEAD
`f2c9d6c…` implements the same surface via `FROZEN_MCP_TOOL_NAMES`. OpenClaw allowlist
remains §9.1; OpenClaw will not alias.

## Owner sign-off

| Field | Value |
| --- | --- |
| Status | `AWAITING_OWNER_COUNTERSIGN` |
| Aggregate SHA-256 to attest | `d539debc7b9d7347c109e7d462fc27a48c28322f0d3d5b85d57f602e843d45fb` |
| Owner name / session ID | _(blank — awaiting)_ |
| Signature | _(blank — awaiting)_ |
| Signed at (Asia/Taipei) | _(blank — awaiting)_ |

**This is NOT a passed Phase 1 gate.** Draft fixtures remain non-authoritative for domain
conformance until LiNKbrain countersigns.

Regenerate the per-file inventory and aggregate hash after any fixture edit.
