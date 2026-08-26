#!/usr/bin/env python3
"""Token-independent GitHub auth for v2.5 Issue checkpoints and Phase API.

Issue checkpoints never require ``AUTOMATION_TOKEN``, Review Ready publication,
or any GitHub API token. Live Phase PR/merge operations need a normal GitHub
API token (``GH_TOKEN`` then ``GITHUB_TOKEN``). The legacy publisher token
``AUTOMATION_TOKEN`` is not canonical and cannot satisfy checkpoint acceptance
or bypass substantive proof.
"""

from __future__ import annotations

import importlib.util
import os
import sys
from pathlib import Path
from typing import Mapping

try:
    from core.execution.protocol import (
        WAIVED_LEGACY_GATE,
        classify_legacy_publisher_gate,
    )
except ModuleNotFoundError:  # pragma: no cover - script-style execution
    _CANONICAL_PROTOCOL_PATH = (
        Path(__file__).resolve().parents[2] / ".ide-development" / "execution" / "protocol.py"
    )
    _CANONICAL_PROTOCOL_MODULE = "_openclaw_canonical_execution_protocol"
    _protocol = sys.modules.get(_CANONICAL_PROTOCOL_MODULE)
    if _protocol is None or getattr(_protocol, "__file__", None) != str(_CANONICAL_PROTOCOL_PATH):
        _protocol = None
        if not _CANONICAL_PROTOCOL_PATH.is_file():
            # Keep the historical script entry point available for packaged
            # callers whose protocol is already exposed as ``execution``.
            from execution.protocol import (  # type: ignore
                WAIVED_LEGACY_GATE,
                classify_legacy_publisher_gate,
            )
        else:
            _spec = importlib.util.spec_from_file_location(
                _CANONICAL_PROTOCOL_MODULE, _CANONICAL_PROTOCOL_PATH
            )
            if _spec is None or _spec.loader is None:
                raise ModuleNotFoundError(
                    f"canonical execution protocol is unloadable: {_CANONICAL_PROTOCOL_PATH}"
                )
            _protocol = importlib.util.module_from_spec(_spec)
            sys.modules[_CANONICAL_PROTOCOL_MODULE] = _protocol
            try:
                _spec.loader.exec_module(_protocol)
            except Exception:
                sys.modules.pop(_CANONICAL_PROTOCOL_MODULE, None)
                raise
    if _protocol is not None:
        WAIVED_LEGACY_GATE = _protocol.WAIVED_LEGACY_GATE
        classify_legacy_publisher_gate = _protocol.classify_legacy_publisher_gate

PHASE_API_TOKEN_ENVS = ("GH_TOKEN", "GITHUB_TOKEN")
LEGACY_PUBLISHER_TOKEN_ENV = "AUTOMATION_TOKEN"
LEGACY_PUBLISHER_SOURCE_ENV = "AUTOMATION_TOKEN_SOURCE"


class GitHubAuthError(ValueError):
    """Fail-closed GitHub credential rejection."""

    def __init__(self, code: str, detail: str = "") -> None:
        self.code = code
        self.detail = detail or code
        super().__init__(self.code if not detail else f"{self.code}: {self.detail}")

    def to_dict(self) -> dict[str, str]:
        return {"code": self.code, "detail": self.detail}


def _nonempty(source: Mapping[str, str], key: str) -> str:
    return str(source.get(key) or "").strip()


def checkpoint_requires_token() -> bool:
    """v2.5 Issue checkpoints are token-independent."""

    return False


def checkpoint_requires_review_ready() -> bool:
    """Review Ready publication is a nonrequirement for Issue checkpoints."""

    return False


def checkpoint_requires_automation_token() -> bool:
    return False


def resolve_phase_api_token(
    environ: Mapping[str, str] | None = None,
) -> tuple[str, str]:
    """Resolve a GitHub API token for live Phase PR/merge operations.

    Does not require ``AUTOMATION_TOKEN`` or ``AUTOMATION_TOKEN_SOURCE``.
    Legacy publisher tokens are never treated as canonical credentials.
    """

    env = environ if environ is not None else os.environ
    for key in PHASE_API_TOKEN_ENVS:
        token = _nonempty(env, key)
        if token:
            return token, key
    auto = _nonempty(env, LEGACY_PUBLISHER_TOKEN_ENV)
    if auto:
        raise GitHubAuthError(
            "legacy_publisher_token_not_canonical",
            "AUTOMATION_TOKEN is a waived legacy publisher token, not a Phase API credential",
        )
    raise GitHubAuthError(
        "missing_github_credentials",
        "live Phase GitHub operations require GH_TOKEN or GITHUB_TOKEN",
    )


def classify_legacy_publisher_token(
    environ: Mapping[str, str] | None = None,
    *,
    publisher: str = "linktrend-review-ready-publisher",
) -> dict[str, object]:
    """Classify publisher-token presence. Never PASS; never an implementation failure."""

    env = environ if environ is not None else os.environ
    present = bool(_nonempty(env, LEGACY_PUBLISHER_TOKEN_ENV))
    source = _nonempty(env, LEGACY_PUBLISHER_SOURCE_ENV)
    state = "success" if present else "missing"
    # Presence of a publisher token is still non-canonical for v2.5.
    if present:
        result = classify_legacy_publisher_gate(publisher=publisher, state="missing")
    else:
        result = classify_legacy_publisher_gate(publisher=publisher, state="missing")
    return {
        "publisher": publisher,
        "tokenPresent": present,
        "tokenSource": source,
        "state": state,
        "classification": WAIVED_LEGACY_GATE,
        "isPass": False,
        "isImplementationFailure": False,
        "canonicalForV25": "none",
        "reason": result.reason,
    }


def issue_checkpoint_auth_decision(
    environ: Mapping[str, str] | None = None,
) -> dict[str, object]:
    """Auth view for Issue checkpoint acceptance: tokens are nonrequirements."""

    legacy = classify_legacy_publisher_token(environ)
    return {
        "acceptWithoutToken": True,
        "acceptWithoutReviewReady": True,
        "acceptWithoutIssuePr": True,
        "acceptWithoutHostedCompletionStatus": True,
        "automationTokenRequired": False,
        "reviewReadyRequired": False,
        "legacyPublisher": legacy,
        "legacyClassification": WAIVED_LEGACY_GATE,
        "pass": False,
    }
