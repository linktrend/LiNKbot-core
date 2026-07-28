# Contract consumption pins (OpenClaw consumer)

Sanitized metadata + SHA-256 pins for owner-approved Platform / Brain / Skills
contracts consumed by OpenClaw Prime on branch
`issue/ocp-openclawdevelopmentplan01`.

**Correction wave 2 (2026-07-28 09:10 Asia/Taipei):** repinned to corrected
sibling HEADs. Stale pre-correction heads removed from active pins.

**Rule:** OpenClaw copies hashes and package metadata only. Do not vendor
`node_modules`, secrets, live endpoints, or full upstream trees.

| Domain | Pin file | Source HEAD |
| --- | --- | --- |
| LiNKplatform | `platform/PIN.json` | `10458829761797a2a2a70eff0dfa3d05bf980396` |
| LiNKbrain | `brain/PIN.json` | `f2c9d6ce76576b5e6edd6d342f52f2ef1180da6a` |
| LiNKskills | `skills/PIN.json` | `4094d84e1fb70b3310f4e236e6886f1449d8a1d9` |

### Platform auth-claims (authoritative)

| Field | Value |
| --- | --- |
| Contract | `platform.auth-claims/1.0.0` |
| Schema file SHA-256 | `b0397cdf34e76ab0986c6d223ecb6c3c66d619ea59557f78cd45c0c015ff50fb` |
| contentHash | `6bf49618d846662976886f57d5d468f73a08ab1a6574968f68833d82429db251` |
| Sanitized copy | `platform/auth-claims-1.0.0/` |

OpenClaw plan SHA-256 (frozen):
`17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`

See also:

- `../PHASE-1-CONTRACT-CONSUMPTION.md`
- `../BRAIN-TOOL-NAME-DECISION-PACKET.md`
- `../FIXTURE-OWNER-SIGNOFF.md`
- `../COUNTERSIGN-REQUEST.md`
