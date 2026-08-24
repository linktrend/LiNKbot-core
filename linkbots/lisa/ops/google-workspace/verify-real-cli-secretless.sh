#!/bin/bash
# Reproduce the source-only real-CLI verb/flag proof without OAuth material.
set -euo pipefail
PATH=/usr/local/bin:/usr/bin:/bin
export PATH

archive=${GWS_REAL_CLI_ARCHIVE:-}
ca_bundle=${GWS_REAL_CLI_CA_BUNDLE:-}
[[ -n "$archive" && -f "$archive" ]] || {
  printf 'GWS_REAL_CLI_ARCHIVE must name the pinned aarch64 archive\n' >&2
  exit 64
}
[[ -n "$ca_bundle" && -f "$ca_bundle" ]] || {
  printf 'GWS_REAL_CLI_CA_BUNDLE must name a trusted CA bundle\n' >&2
  exit 64
}
command -v docker >/dev/null || {
  printf 'docker is required for the disposable real-CLI proof\n' >&2
  exit 69
}

expected_sha=94490295d9580e1e88574e715a0a162991747d12d62f8c7b8dcc8268b6c1cea0
if command -v sha256sum >/dev/null; then
  actual_sha=$(sha256sum "$archive" | awk '{print $1}')
else
  actual_sha=$(shasum -a 256 "$archive" | awk '{print $1}')
fi
[[ "$actual_sha" == "$expected_sha" ]] || {
  printf 'archive SHA-256 does not match gws-linux-pin.json\n' >&2
  exit 65
}

proof_dir=$(mktemp -d)
cleanup() { rm -rf "$proof_dir"; }
trap cleanup EXIT
tar -xzf "$archive" -C "$proof_dir"
binary=$(find "$proof_dir" -type f -name gws -perm -111 -print -quit)
[[ -n "$binary" ]] || {
  printf 'pinned archive does not contain an executable gws binary\n' >&2
  exit 65
}
if [[ "$binary" != "$proof_dir/gws" ]]; then
  cp "$binary" "$proof_dir/gws"
fi
chmod 0555 "$proof_dir/gws"

docker run --rm --platform linux/arm64 \
  -v "$proof_dir/gws:/proof/gws:ro" \
  -v "$ca_bundle:/etc/ssl/certs/ca-certificates.crt:ro" \
  -w /tmp \
  -e HOME=/tmp/gws-home \
  -e GOOGLE_WORKSPACE_CLI_KEYRING_BACKEND=file \
  node@sha256:d649c27dae7ba0137b3cef5dd75baa422c08dc3d9e3fc0c23dfb172dc3cc6436 /bin/bash -lc '
    set -euo pipefail
    mkdir -p "$HOME"
    for command in \
      "calendar +agenda" "calendar +insert" "calendar calendarList list" \
      "calendar events delete" "calendar events get" "calendar events list" "calendar events patch" \
      "docs +write" "docs documents get" \
      "drive files create" "drive files get" "drive files list" "drive permissions create" \
      "gmail +send" "gmail +triage" "gmail users messages get" "gmail users messages list" \
      "sheets +append" "sheets +read" "sheets spreadsheets create" \
      "slides presentations create" "slides presentations get" \
      "tasks tasklists list" "tasks tasks delete" "tasks tasks insert" "tasks tasks list" "tasks tasks patch"; do
      # These are fixed source-owned command tuples, never caller input.
      /proof/gws $command --help >/dev/null
    done
  '
