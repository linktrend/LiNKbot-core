# WP-01 decision and execution matrix

This is the generic source contract. Generic code has no agent command/path or
STOP list. Each opted-in profile supplies its own deny/STOP entries and exact
gateway adapter bindings.

| Order | Evidence                                                                                              | Result                           | Execution                                                                                                                                                                                                                                                                 |
| ----- | ----------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Universal control-command guard                                                                       | `denied`                         | No host, node, gateway, or sandbox preparation                                                                                                                                                                                                                            |
| 2     | Active secure profile: fail-closed analyzed plan plus its profile-owned deny/STOP policy              | `denied` for opaque or STOP      | No host, node, gateway, or sandbox preparation                                                                                                                                                                                                                            |
| 3     | One direct candidate resolves to the profile's exact gateway executable and its non-empty argv prefix | `host-adapter`                   | Enforced POSIX command rendering under the binding's fixed environment; the binding is the host approval and bypasses only the legacy allowlist/prompt pipeline, while profile STOP and all structural/environment constraints remain enforced; elevation is not required |
| 4     | Active secure profile allowed work without a structural adapter match                                 | `sandbox`                        | Configured sandbox backend; initialization failure is fatal                                                                                                                                                                                                               |
| 5     | Unconfigured legacy profile                                                                           | `host-direct` or `host-elevated` | Existing route behavior and universal control-command guard are preserved; direct/elevated diagnostics never claim host-adapter                                                                                                                                           |

The same opt-in mechanism is exercised by `main`, a second agent, and a
Lisa-derived clone in `src/agents/exec-route-policy.test.ts`. These are test
identities; generic code contains no profile-specific literals. Gateway-only
adapters avoid treating gateway executable resolution as proof for a remote
node. Empty argv prefixes are rejected: every adapter must name at least one
static wrapper verb before it can receive dynamic argument values.

Route evidence is redacted: decision, execution path, host class, adapter
verification state, sandbox requirement, and elevation request only. It does
not record command text, secrets, paths, or environment values.

Source tests prove policy shape and route selection only. Live adapter,
sandbox isolation, image, network, credential-mount, and cross-profile probes
remain HOLD until independent VPS evidence exists.
