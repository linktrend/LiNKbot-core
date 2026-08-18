#!/usr/bin/env bash
# Launch the LiNKskills stdio MCP adapter with its PACI key on inherited fd 3.
# The private key streams directly from GSM to the child and is never written
# to disk, placed in argv, or copied into the child environment.
set -euo pipefail

require_env() {
  local name="$1"
  if [[ -z "${!name:-}" ]]; then
    echo "linkskills keyless launcher: required environment variable is unset: $name" >&2
    exit 78
  fi
}

require_env LINKSKILLS_GCLOUD_COMMAND
require_env LINKSKILLS_GCP_PROJECT_ID
require_env LINKSKILLS_GCP_RUNTIME_SERVICE_ACCOUNT
require_env LINKSKILLS_GCP_PACI_SECRET_NAME

if [[ "$LINKSKILLS_GCLOUD_COMMAND" != /* || ! -x "$LINKSKILLS_GCLOUD_COMMAND" ]]; then
  echo "linkskills keyless launcher: LINKSKILLS_GCLOUD_COMMAND must be an executable absolute path" >&2
  exit 78
fi
if [[ $# -lt 1 || "$1" != /* || ! -x "$1" ]]; then
  echo "linkskills keyless launcher: child command must be an executable absolute path" >&2
  exit 78
fi

unset LINKSKILLS_PACI_CLIENT_PRIVATE_KEY_FILE
export LINKSKILLS_PACI_CLIENT_PRIVATE_KEY_FD=3
export CLOUDSDK_CORE_DISABLE_PROMPTS=1

fifo_dir="$(mktemp -d "${TMPDIR:-/tmp}/linkskills-keyless.XXXXXX")"
fifo_path="$fifo_dir/paci-key"
cleanup() {
  rm -rf "$fifo_dir"
}
trap cleanup EXIT
producer_pid=""
child_pid=""
stop_children() {
  set +e
  if [[ -n "$child_pid" ]]; then
    kill "$child_pid" 2>/dev/null
    wait "$child_pid" 2>/dev/null
  fi
  if [[ -n "$producer_pid" ]]; then
    kill "$producer_pid" 2>/dev/null
    wait "$producer_pid" 2>/dev/null
  fi
  exit 143
}
trap stop_children INT TERM HUP
mkfifo "$fifo_path"
"$LINKSKILLS_GCLOUD_COMMAND" secrets versions access latest \
  --quiet \
  --project="$LINKSKILLS_GCP_PROJECT_ID" \
  --secret="$LINKSKILLS_GCP_PACI_SECRET_NAME" \
  --impersonate-service-account="$LINKSKILLS_GCP_RUNTIME_SERVICE_ACCOUNT" \
  >"$fifo_path" &
producer_pid="$!"
exec 3<"$fifo_path"

"$@" &
child_pid="$!"
set +e
wait "$producer_pid"
producer_status="$?"
if [[ "$producer_status" -ne 0 ]]; then
  kill "$child_pid" 2>/dev/null
  wait "$child_pid" 2>/dev/null
  exit 78
fi
wait "$child_pid"
exit "$?"
