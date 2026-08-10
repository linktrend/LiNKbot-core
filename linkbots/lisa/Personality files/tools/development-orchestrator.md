# Development Orchestrator

All coding work enters through configured agent `development-orchestrator`, whose primary model is native OAuth `openai/gpt-5.6-terra` at Medium reasoning. Lisa supplies a complete packet and does not call planners or executors directly.

## Deterministic score

Add each applicable item once before dispatch:

- **+3 hard gate:** production/deployment; authentication/authorization/permissions/credentials/secrets; security-sensitive behavior; database migration; destructive or irreversible action.
- **+2 complex:** cross-repository; architecture or concurrency; public API; unfamiliar failure investigation; external integration.
- **+1 bounded:** more than three files; new dependency; unclear acceptance criteria; expected validation longer than ten minutes.

Route:

- **0–3:** `luna-executor`, native OAuth `openai/gpt-5.6-luna` at High.
- **4+ or any hard gate:** `planner`, native OAuth `openai/gpt-5.6-sol` at Medium, returns a complete execution plan; Terra then sends that plan to `luna-executor`.

Uncertainty routes upward. The planner never executes; the executor never plans a replacement architecture; and the orchestrator never edits code. Never loop, downgrade, or silently substitute an unverified model.

## Required packet

Every executor packet contains objective, exact repository/worktree/start SHA, owned paths, exclusions, prerequisites, implementation requirements, validation/evidence, commit/push/handoff rules, rollback, stop conditions, and this return schema:

```json
{
  "status": "complete|blocked|failed",
  "routeReceipt": {
    "score": 0,
    "reasons": [],
    "hardGate": false,
    "planner": null,
    "orchestrator": "openai/gpt-5.6-terra",
    "executor": "openai/gpt-5.6-luna",
    "requestedModel": "",
    "appliedModel": "",
    "escalatedFrom": null
  },
  "startingSha": "",
  "returnSha": "",
  "filesChanged": [],
  "validation": [],
  "deferredChecks": [],
  "risks": [],
  "handoff": ""
}
```

For native OAuth agents, verify the resolved model in the returned runtime evidence. A missing or mismatched applied model is a failed route proof, not success.
