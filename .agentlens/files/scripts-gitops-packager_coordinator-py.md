# scripts/gitops/packager_coordinator.py

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1434
- **Language:** Python
- **Symbols:** 66
- **Public symbols:** 36

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 102 | class | CoordinatorError | pub | `class CoordinatorError(ValueError):` |
| 105 | fn | __init__ | pub | `def __init__(self, code: str, detail: str) -> N...` |
| 110 | fn | to_dict | pub | `def to_dict(self) -> dict[str, str]:` |
| 114 | class | GitHubPort | pub | `class GitHubPort(Protocol):` |
| 117 | fn | ensure_draft_phase_pr | pub | `def ensure_draft_phase_pr(` |
| 130 | fn | list_open_phase_prs | pub | `def list_open_phase_prs(self, *, repository: st...` |
| 133 | fn | completion_bound | pub | `def completion_bound(` |
| 140 | fn | add_label | pub | `def add_label(self, pr_number: int, label: str)...` |
| 143 | fn | dispatch_workflow | pub | `def dispatch_workflow(self, name: str, inputs: ...` |
| 147 | class | PushPort | pub | `class PushPort(Protocol):` |
| 150 | fn | push_phase_ref | pub | `def push_phase_ref(self, repo: Path, remote: st...` |
| 155 | class | MemoryGitHub | pub | `class MemoryGitHub:` |
| 167 | fn | _key | (private) | `def _key(self, repository: str, head: str, base...` |
| 170 | fn | ensure_draft_phase_pr | pub | `def ensure_draft_phase_pr(` |
| 208 | fn | list_open_phase_prs | pub | `def list_open_phase_prs(self, *, repository: st...` |
| 213 | fn | completion_bound | pub | `def completion_bound(` |
| 232 | fn | add_label | pub | `def add_label(self, pr_number: int, label: str)...` |
| 235 | fn | dispatch_workflow | pub | `def dispatch_workflow(self, name: str, inputs: ...` |
| 239 | class | GitPushAdapter | pub | `class GitPushAdapter:` |
| 242 | fn | push_phase_ref | pub | `def push_phase_ref(self, repo: Path, remote: st...` |
| 256 | fn | _github_api | (private) | `def _github_api(` |
| 285 | class | LiveGitHub | pub | `class LiveGitHub:` |
| 296 | fn | _request | (private) | `def _request(self, method: str, url: str, token...` |
| 301 | fn | _pr_identity | (private) | `def _pr_identity(self, payload: Mapping[str, An...` |
| 320 | fn | ensure_draft_phase_pr | pub | `def ensure_draft_phase_pr(` |
| 383 | fn | _bound_live_pr | (private) | `def _bound_live_pr(self, identity: dict[str, An...` |
| 400 | fn | list_open_phase_prs | pub | `def list_open_phase_prs(self, *, repository: st...` |
| 416 | fn | completion_bound | pub | `def completion_bound(` |
| 429 | fn | add_label | pub | `def add_label(self, pr_number: int, label: str)...` |
| 432 | fn | dispatch_workflow | pub | `def dispatch_workflow(self, name: str, inputs: ...` |
| 436 | fn | resolve_production_adapters | pub | `def resolve_production_adapters(repository: str...` |
| 455 | fn | assert_live_phase_pr | pub | `def assert_live_phase_pr(pr: Mapping[str, Any])...` |
| 467 | class | AcceptedSource | pub | `class AcceptedSource:` |
| 474 | fn | to_dict | pub | `def to_dict(self) -> dict[str, Any]:` |
| 483 | fn | _git | (private) | `def _git(repo: Path, *args: str, check: bool = ...` |
| 497 | fn | _governed_branch_tokens | (private) | `def _governed_branch_tokens(branch: str) -> tup...` |
| 508 | fn | _manifest_identity | (private) | `def _manifest_identity(` |
| 533 | fn | _handoff_identity | (private) | `def _handoff_identity(` |
| 555 | fn | _resolve_branch_identity | (private) | `def _resolve_branch_identity(` |
| 585 | fn | parse_accept | pub | `def parse_accept(` |
| 610 | fn | parse_fast_trigger_contract | pub | `def parse_fast_trigger_contract(text: str) -> d...` |
| 630 | fn | full_may_start | pub | `def full_may_start(` |
| 659 | fn | consume_handoff | pub | `def consume_handoff(` |
| 685 | fn | _remote_sha | (private) | `def _remote_sha(repo: Path, remote: str, branch...` |
| 692 | fn | _object_exists | (private) | `def _object_exists(repo: Path, sha: str) -> bool:` |
| 697 | fn | _changed_paths | (private) | `def _changed_paths(repo: Path, base: str, sha: ...` |
| 702 | fn | _is_ancestor | (private) | `def _is_ancestor(repo: Path, ancestor: str, des...` |
| 713 | fn | _probe_conflicts | (private) | `def _probe_conflicts(repo: Path, development: s...` |
| 768 | fn | _validate_source | (private) | `def _validate_source(` |
| 808 | fn | _git_common_dir | (private) | `def _git_common_dir(repo: Path) -> Path:` |
| 816 | fn | _coordinator_state_dir | (private) | `def _coordinator_state_dir(repo: Path, phase_br...` |
| 821 | fn | _local_sha | (private) | `def _local_sha(repo: Path, branch: str) -> str:` |
| 826 | fn | _assert_live_phase_pr_optional | (private) | `def _assert_live_phase_pr_optional(pr: Mapping[...` |
| 831 | fn | _unique_phase_commits | (private) | `def _unique_phase_commits(` |
| 872 | fn | _existing_phase_shas | (private) | `def _existing_phase_shas(repo: Path, remote: st...` |
| 880 | fn | _remaining_sources | (private) | `def _remaining_sources(repo: Path, start_sha: s...` |
| 889 | fn | _assemble_in_worktree | (private) | `def _assemble_in_worktree(` |
| 938 | fn | _write_isolated_state | (private) | `def _write_isolated_state(repo: Path, phase_bra...` |
| 952 | fn | _stable_title | (private) | `def _stable_title(phase_branch: str) -> str:` |
| 956 | fn | _candidate_revision | (private) | `def _candidate_revision(repository: str, phase_...` |
| 970 | fn | _phase_record | (private) | `def _phase_record(` |
| 1032 | fn | _handoff_from | (private) | `def _handoff_from(record: Mapping[str, Any], *,...` |
| 1058 | fn | assemble_phase | pub | `def assemble_phase(` |
| 1295 | fn | invalidate_handoff_if_head_changed | pub | `def invalidate_handoff_if_head_changed(handoff:...` |
| 1304 | fn | _load_json_object | (private) | `def _load_json_object(path: str, *, label: str)...` |
| 1314 | fn | main | pub | `def main(argv: list[str] | None = None) -> int:` |

## Public API

### `CoordinatorError`

```
class CoordinatorError(ValueError):
```

**Line:** 102 | **Kind:** class

### `__init__`

```
def __init__(self, code: str, detail: str) -> None:
```

**Line:** 105 | **Kind:** fn

### `to_dict`

```
def to_dict(self) -> dict[str, str]:
```

**Line:** 110 | **Kind:** fn

### `GitHubPort`

```
class GitHubPort(Protocol):
```

**Line:** 114 | **Kind:** class

### `ensure_draft_phase_pr`

```
def ensure_draft_phase_pr(
```

**Line:** 117 | **Kind:** fn

### `list_open_phase_prs`

```
def list_open_phase_prs(self, *, repository: str, head: str, base: str) -> list[dict[str, Any]]:
```

**Line:** 130 | **Kind:** fn

### `completion_bound`

```
def completion_bound(
```

**Line:** 133 | **Kind:** fn

### `add_label`

```
def add_label(self, pr_number: int, label: str) -> None:
```

**Line:** 140 | **Kind:** fn

### `dispatch_workflow`

```
def dispatch_workflow(self, name: str, inputs: Mapping[str, Any]) -> None:
```

**Line:** 143 | **Kind:** fn

### `PushPort`

```
class PushPort(Protocol):
```

**Line:** 147 | **Kind:** class

### `push_phase_ref`

```
def push_phase_ref(self, repo: Path, remote: str, branch: str, sha: str) -> str:
```

**Line:** 150 | **Kind:** fn

### `MemoryGitHub`

```
class MemoryGitHub:
```

**Line:** 155 | **Kind:** class

### `ensure_draft_phase_pr`

```
def ensure_draft_phase_pr(
```

**Line:** 170 | **Kind:** fn

### `list_open_phase_prs`

```
def list_open_phase_prs(self, *, repository: str, head: str, base: str) -> list[dict[str, Any]]:
```

**Line:** 208 | **Kind:** fn

### `completion_bound`

```
def completion_bound(
```

**Line:** 213 | **Kind:** fn

### `add_label`

```
def add_label(self, pr_number: int, label: str) -> None:
```

**Line:** 232 | **Kind:** fn

### `dispatch_workflow`

```
def dispatch_workflow(self, name: str, inputs: Mapping[str, Any]) -> None:
```

**Line:** 235 | **Kind:** fn

### `GitPushAdapter`

```
class GitPushAdapter:
```

**Line:** 239 | **Kind:** class

### `push_phase_ref`

```
def push_phase_ref(self, repo: Path, remote: str, branch: str, sha: str) -> str:
```

**Line:** 242 | **Kind:** fn

### `LiveGitHub`

```
class LiveGitHub:
```

**Line:** 285 | **Kind:** class

### `ensure_draft_phase_pr`

```
def ensure_draft_phase_pr(
```

**Line:** 320 | **Kind:** fn

### `list_open_phase_prs`

```
def list_open_phase_prs(self, *, repository: str, head: str, base: str) -> list[dict[str, Any]]:
```

**Line:** 400 | **Kind:** fn

### `completion_bound`

```
def completion_bound(
```

**Line:** 416 | **Kind:** fn

### `add_label`

```
def add_label(self, pr_number: int, label: str) -> None:
```

**Line:** 429 | **Kind:** fn

### `dispatch_workflow`

```
def dispatch_workflow(self, name: str, inputs: Mapping[str, Any]) -> None:
```

**Line:** 432 | **Kind:** fn

### `resolve_production_adapters`

```
def resolve_production_adapters(repository: str) -> tuple[LiveGitHub, GitPushAdapter]:
```

**Line:** 436 | **Kind:** fn

### `assert_live_phase_pr`

```
def assert_live_phase_pr(pr: Mapping[str, Any]) -> None:
```

**Line:** 455 | **Kind:** fn

### `AcceptedSource`

```
class AcceptedSource:
```

**Line:** 467 | **Kind:** class

### `to_dict`

```
def to_dict(self) -> dict[str, Any]:
```

**Line:** 474 | **Kind:** fn

### `parse_accept`

```
def parse_accept(
```

**Line:** 585 | **Kind:** fn

### `parse_fast_trigger_contract`

```
def parse_fast_trigger_contract(text: str) -> dict[str, Any]:
```

**Line:** 610 | **Kind:** fn

### `full_may_start`

```
def full_may_start(
```

**Line:** 630 | **Kind:** fn

### `consume_handoff`

```
def consume_handoff(
```

**Line:** 659 | **Kind:** fn

### `assemble_phase`

```
def assemble_phase(
```

**Line:** 1058 | **Kind:** fn

### `invalidate_handoff_if_head_changed`

```
def invalidate_handoff_if_head_changed(handoff: Mapping[str, Any], *, live_head: str) -> dict[str, Any]:
```

**Line:** 1295 | **Kind:** fn

### `main`

```
def main(argv: list[str] | None = None) -> int:
```

**Line:** 1314 | **Kind:** fn
