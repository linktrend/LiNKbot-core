"""OpenClaw Prime customization-boundary schema and classification logic."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Mapping

SCHEMA_VERSION = 1
KIND = "openclaw-prime-customization-boundary"
GIT_SHA = re.compile(r"^[0-9a-f]{40}$")
REPO_REL = re.compile(
    r"^(?!/|\\)(?!.*\.\.(?:/|\\|$))(?!.*:)[A-Za-z0-9._@+, \-]+(?:/[A-Za-z0-9._@+, \-]+)*$"
)
PROVENANCE = {
    "github-contents-404-at-classification-pin",
    "ide-installed-state-destination",
    "ide-upgrade-receipt-applied-path",
    "this-manifest-namespace",
}

REQUIRED_TOP = (
    "schemaVersion",
    "kind",
    "prime",
    "upstream",
    "pathRules",
    "digestRules",
    "provenanceRules",
    "exclusion",
    "linktrendOwned",
    "ideManaged",
    "ideSource",
    "ideTransactionChanged",
    "uncertainty",
)


class BoundaryError(ValueError):
    """Manifest failed schema or classification rules."""


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def path_matches(candidate: str, owned: str) -> bool:
    """Exact path or string-prefix match without '..' traversal."""
    if candidate == owned:
        return True
    if owned.endswith("/"):
        return candidate.startswith(owned)
    if candidate.startswith(owned + "/"):
        return True
    # Non-directory prefixes such as docs/CURSOR-GROK- or linktrend- workflow names.
    if owned.endswith("-") and candidate.startswith(owned):
        return True
    return False


def classify(
    candidate: str, manifest: Mapping[str, Any]
) -> str:
    """Return a closed class for a repo-relative path."""
    if ".." in candidate.split("/") or candidate.startswith("/") or ":" in candidate:
        raise BoundaryError(f"illegal path: {candidate}")
    for forbidden in manifest["exclusion"]["forbiddenWholeTrees"]:
        if path_matches(candidate, forbidden):
            return "untouched-upstream-excluded"
    for entry in manifest["ideTransactionChanged"]["paths"]:
        if candidate == entry:
            return "ide-transaction-changed"
    for prefix in manifest["ideManaged"]["prefixes"]:
        if path_matches(candidate, prefix):
            # AGENTS.md is an overlay; other managed prefixes may also be exclusive.
            if candidate in manifest["ideManaged"]["overlayOnUpstreamExactPaths"]:
                return "ide-managed-overlay"
            if any(
                path_matches(candidate, owned["path"])
                for owned in manifest["linktrendOwned"]["prefixes"]
                + manifest["linktrendOwned"]["exactPaths"]
            ):
                return "ide-managed-and-linktrend-owned"
            return "ide-managed"
    for entry in manifest["linktrendOwned"]["exactPaths"]:
        if candidate == entry["path"]:
            return "linktrend-owned"
    for entry in manifest["linktrendOwned"]["prefixes"]:
        if path_matches(candidate, entry["path"]):
            return "linktrend-owned"
    return "untouched-upstream-excluded"


def _require_sha(value: Any, label: str) -> None:
    if not isinstance(value, str) or not GIT_SHA.fullmatch(value):
        raise BoundaryError(f"{label} must be a 40-char lowercase git SHA")


def _require_path(value: Any, label: str) -> None:
    if not isinstance(value, str) or not REPO_REL.fullmatch(value):
        raise BoundaryError(f"{label} is not a POSIX repo-relative path: {value!r}")


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def validate_manifest(manifest: Mapping[str, Any], *, checkout: Path | None = None) -> None:
    checkout = checkout or repo_root()
    missing = [key for key in REQUIRED_TOP if key not in manifest]
    if missing:
        raise BoundaryError(f"missing keys: {missing}")
    extra = [key for key in manifest if key not in REQUIRED_TOP]
    if extra:
        raise BoundaryError(f"unknown keys: {extra}")
    if manifest["schemaVersion"] != SCHEMA_VERSION:
        raise BoundaryError("schemaVersion must be 1")
    if manifest["kind"] != KIND:
        raise BoundaryError("kind mismatch")

    prime = manifest["prime"]
    if prime["repository"] != "linktrend/openclaw_prime":
        raise BoundaryError("prime.repository mismatch")
    _require_sha(prime["commit"], "prime.commit")
    _require_sha(prime["tree"], "prime.tree")

    upstream = manifest["upstream"]
    if upstream["repository"] != "openclaw/openclaw":
        raise BoundaryError("upstream.repository mismatch")
    if upstream["configuredSource"] != "github-fork-parent-default-branch":
        raise BoundaryError("upstream.configuredSource mismatch")
    pin = upstream["classificationPin"]
    _require_sha(pin["commit"], "classificationPin.commit")
    _require_sha(pin["tree"], "classificationPin.tree")
    _require_sha(pin["observedParentMainCommit"], "observedParentMainCommit")
    _require_sha(pin["observedParentMainTree"], "observedParentMainTree")

    digest = manifest["digestRules"]
    if digest["algorithm"] != "sha256" or digest["prefix"] != "sha256:":
        raise BoundaryError("digestRules must use sha256: hex")
    if digest["scope"] != "owned-and-ide-listed-paths-only-never-untouched-upstream":
        raise BoundaryError("digest scope must exclude untouched upstream")

    exclusion = manifest["exclusion"]
    if exclusion["untouchedUpstream"]["enumerated"] is not False:
        raise BoundaryError("untouched upstream must not be enumerated")
    for tree in exclusion["forbiddenWholeTrees"]:
        _require_path(tree, "forbiddenWholeTrees")

    owned_paths: list[str] = []
    for group in ("prefixes", "exactPaths"):
        for entry in manifest["linktrendOwned"][group]:
            if entry["provenance"] not in PROVENANCE:
                raise BoundaryError(f"unknown provenance: {entry['provenance']}")
            owned_paths.append(entry["path"])
            if not isinstance(entry["path"], str) or ".." in entry["path"] or entry["path"].startswith("/"):
                raise BoundaryError(f"illegal owned path: {entry['path']}")

    for owned in owned_paths:
        for forbidden in exclusion["forbiddenWholeTrees"]:
            if path_matches(owned, forbidden) or path_matches(forbidden, owned):
                if owned == forbidden or owned.startswith(forbidden + "/"):
                    raise BoundaryError(
                        f"owned path {owned} collides with forbidden whole tree {forbidden}"
                    )

    ide = manifest["ideManaged"]
    if ide["separateFromLinktrendOwnedInventory"] is not True:
        raise BoundaryError("ideManaged must be a separate inventory")
    if ide["inventoryPath"] != ".ide-development/installed-state.json":
        raise BoundaryError("ideManaged inventoryPath mismatch")
    if not isinstance(ide["destinationCount"], int) or ide["destinationCount"] < 1:
        raise BoundaryError("destinationCount invalid")
    installed_state_path = checkout / ide["inventoryPath"]
    if installed_state_path.is_file():
        installed = json.loads(installed_state_path.read_text(encoding="utf-8"))
        actual = len(installed.get("files", {}))
        if actual != ide["destinationCount"]:
            raise BoundaryError(
                f"destinationCount {ide['destinationCount']} != installed-state files {actual}"
            )
        if installed.get("packageVersion") != ide["packageVersion"]:
            raise BoundaryError("ideManaged.packageVersion does not match installed-state")
    for prefix in ide["prefixes"]:
        _require_path(prefix, "ideManaged.prefixes")
    for path in ide["overlayOnUpstreamExactPaths"]:
        _require_path(path, "overlayOnUpstreamExactPaths")
        if classify(path, manifest) != "ide-managed-overlay":
            raise BoundaryError(f"overlay path not classified as overlay: {path}")

    source = manifest["ideSource"]
    if source.get("repository") != "linktrend/IDE-Development":
        raise BoundaryError("ideSource.repository mismatch")
    if source.get("packageName") != "ide-development-managed-core":
        raise BoundaryError("ideSource.packageName mismatch")
    if source.get("packageVersion") != "2.5.2" or source.get("authoritativeRef") != "v2.5.2":
        raise BoundaryError("ideSource must pin package 2.5.2 / ref v2.5.2")
    tagged = source.get("taggedRelease")
    current = source.get("currentSource")
    if not isinstance(tagged, Mapping) or not isinstance(current, Mapping):
        raise BoundaryError("ideSource pins missing")
    for label, pin in (("taggedRelease", tagged), ("currentSource", current)):
        _require_sha(pin.get("commit"), f"ideSource.{label}.commit")
        _require_sha(pin.get("tree"), f"ideSource.{label}.tree")
        if not isinstance(pin.get("phasePullRequest"), int) or pin["phasePullRequest"] < 1:
            raise BoundaryError(f"ideSource.{label}.phasePullRequest invalid")
        if not isinstance(pin.get("note"), str) or not pin["note"]:
            raise BoundaryError(f"ideSource.{label}.note missing")
        if "receiptPath" in pin:
            _require_path(pin["receiptPath"], f"ideSource.{label}.receiptPath")
    if tagged.get("commit") == current.get("commit"):
        raise BoundaryError("ideSource currentSource must not collapse onto taggedRelease")

    txn = manifest["ideTransactionChanged"]
    if txn["separateFromIdeManagedInventory"] is not True:
        raise BoundaryError("transaction-changed paths must be a separate inventory")
    union: set[str] = set()
    for record in txn["records"]:
        _require_path(record["receiptPath"], "receiptPath")
        for path in record["paths"]:
            _require_path(path, "transaction path")
            union.add(path)
    listed = set(txn["paths"])
    if listed != union:
        raise BoundaryError("ideTransactionChanged.paths must equal the sorted union of receipt paths")
    if list(txn["paths"]) != sorted(listed):
        raise BoundaryError("ideTransactionChanged.paths must be sorted")
    for path in txn["paths"]:
        if classify(path, manifest) != "ide-transaction-changed":
            raise BoundaryError(f"transaction path not classified separately: {path}")

    if not manifest["uncertainty"]:
        raise BoundaryError("uncertainty must record upstream identity gaps")

    # Manifest namespace must be owned and must not pull in application source.
    if classify(".linktrend/openclaw-prime/customization-boundary.json", manifest) != "linktrend-owned":
        raise BoundaryError("manifest namespace is not owned")
    if classify("src/index.ts", manifest) != "untouched-upstream-excluded":
        raise BoundaryError("src must remain excluded")
    if classify("extensions/telegram/src/index.ts", manifest) != "untouched-upstream-excluded":
        raise BoundaryError("extensions must remain excluded")


def validate_files(root: Path) -> Mapping[str, Any]:
    schema_path = root / "customization-boundary.schema.json"
    manifest_path = root / "customization-boundary.json"
    schema = load_json(schema_path)
    manifest = load_json(manifest_path)
    if schema.get("$id") != "https://linktrend.local/openclaw-prime/customization-boundary.schema.json":
        raise BoundaryError("schema $id mismatch")
    if schema.get("title") != "OpenClaw Prime customization boundary manifest":
        raise BoundaryError("schema title mismatch")
    validate_manifest(manifest, checkout=root.parent.parent)
    return manifest


def main() -> int:
    root = Path(__file__).resolve().parent
    validate_files(root)
    print("customization-boundary: ok")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
