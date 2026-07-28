# Contract consumption pins (OpenClaw consumer)

Sanitized metadata + SHA-256 pins for owner-approved Platform / Brain / Skills
contracts consumed by OpenClaw Prime on branch
`issue/ocp-openclawdevelopmentplan01`.

**Correction wave 2b (2026-07-28 09:52 Asia/Taipei):** repinned to latest
corrected sibling HEADs after wave-2 advances. Stale wave-2 and pre-correction
heads removed from active pins.

**Correction wave 7 (2026-07-28):** Platform AuthClaims repinned to
`platform.auth-claims/1.1.0` / package `0.2.2` at Platform HEAD
`6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b`. Historical `1.0.0` copy retained
under `platform/auth-claims-1.0.0/` for audit only.

**Rule:** OpenClaw copies hashes and package metadata only. Do not vendor
`node_modules`, secrets, live endpoints, or full upstream trees.

| Domain       | Pin file            | Source HEAD                                |
| ------------ | ------------------- | ------------------------------------------ |
| LiNKplatform | `platform/PIN.json` | `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` |
| LiNKbrain    | `brain/PIN.json`    | `a3cff6e0f04ac968c32beacb7bdb1b81a4d77d3f` |
| LiNKskills   | `skills/PIN.json`   | `f16103f23a716d0edeb08a1e82e38608ebd563ea` |

## Platform auth-claims (authoritative)

| Field               | Value                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Contract            | `platform.auth-claims/1.1.0`                                       |
| Schema file SHA-256 | `c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1` |
| contentHash         | `fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567` |
| Sanitized copy      | `platform/auth-claims-1.1.0/`                                      |
| Supersedes          | `platform.auth-claims/1.0.0` (historical copy retained)            |

OpenClaw plan SHA-256 (frozen):
`17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

See also:

- `../PHASE-1-CONTRACT-CONSUMPTION.md`
- `../BRAIN-TOOL-NAME-DECISION-PACKET.md`
- `../FIXTURE-OWNER-SIGNOFF.md`
- `../COUNTERSIGN-REQUEST.md`
