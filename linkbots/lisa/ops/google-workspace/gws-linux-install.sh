#!/usr/bin/env bash
# Install the pinned, checksum-verified Linux gws binary. Human/operator use only.
set -euo pipefail

readonly GWS_RELEASE=v0.22.5
readonly GWS_RELEASE_COMMIT=705fb0ecac6f4249679958f6325b809b63fdde17
readonly GWS_X86_64_SHA256=de78ecdbd2f1a84cca0063a7ecbc440240fc14b6ebccbb17f4646b792a8c5c1f
readonly GWS_AARCH64_SHA256=94490295d9580e1e88574e715a0a162991747d12d62f8c7b8dcc8268b6c1cea0

die() {
  printf 'gws-linux-install: %s\n' "$*" >&2
  exit 64
}

usage() {
  cat <<'EOF'
Usage: gws-linux-install.sh [x86_64-unknown-linux-gnu|aarch64-unknown-linux-gnu]

Environment:
  GWS_INSTALL_DIR          Linux binary destination (default: /usr/local/bin)
  GWS_DOWNLOAD_DIR         Disposable download directory (default: temporary)
  GWS_REQUIRE_ATTESTATION  Set to 0 only with an explicitly recorded exception
EOF
}

if [[ "${1:-}" == --help ]]; then
  usage
  exit 0
fi

target=${1:-}
if [[ -z "$target" ]]; then
  case "$(uname -m)" in
    x86_64|amd64) target=x86_64-unknown-linux-gnu ;;
    aarch64|arm64) target=aarch64-unknown-linux-gnu ;;
    *) die "unsupported Linux architecture; pass an approved target explicitly" ;;
  esac
fi

case "$target" in
  x86_64-unknown-linux-gnu) expected=$GWS_X86_64_SHA256 ;;
  aarch64-unknown-linux-gnu) expected=$GWS_AARCH64_SHA256 ;;
  *) die "target is not pinned in this source package" ;;
esac

install_dir=${GWS_INSTALL_DIR:-/usr/local/bin}
[[ "$install_dir" == /* && "$install_dir" != *"/../"* && "$install_dir" != */.. ]] || die "GWS_INSTALL_DIR must be an absolute non-traversing path"
[[ -d "$install_dir" ]] || die "GWS_INSTALL_DIR must already exist; create it through the host-owner procedure"

download_dir=${GWS_DOWNLOAD_DIR:-}
cleanup_download=false
if [[ -z "$download_dir" ]]; then
  download_dir=$(mktemp -d)
  cleanup_download=true
fi
trap 'if [[ "$cleanup_download" == true ]]; then rm -rf "$download_dir"; fi' EXIT
mkdir -p "$download_dir/archive" "$download_dir/extracted"

archive_name="google-workspace-cli-${target}.tar.gz"
archive="$download_dir/archive/$archive_name"
checksum_file="$archive.sha256"
base_url="https://github.com/googleworkspace/cli/releases/download/${GWS_RELEASE}"

curl --fail --location --proto '=https' --tlsv1.2 --silent --show-error \
  --output "$archive" "$base_url/$archive_name"
curl --fail --location --proto '=https' --tlsv1.2 --silent --show-error \
  --output "$checksum_file" "$base_url/$archive_name.sha256"

published=$(<"$checksum_file")
[[ "$published" == "$expected  $archive_name" || "$published" == "$expected $archive_name" ]] || die "published checksum does not match the pinned receipt"
actual_line=$(sha256sum "$archive" 2>/dev/null || shasum -a 256 "$archive")
actual=${actual_line%% *}
[[ "$actual" == "$expected" ]] || die "downloaded archive checksum mismatch"

require_attestation=${GWS_REQUIRE_ATTESTATION:-1}
if command -v gh >/dev/null 2>&1; then
  gh attestation verify "$archive" --repo googleworkspace/cli
elif [[ "$require_attestation" != 0 ]]; then
  die "GitHub CLI is required to verify the available release attestation; set GWS_REQUIRE_ATTESTATION=0 only with a recorded exception"
fi

tar -xzf "$archive" -C "$download_dir/extracted"
[[ -f "$download_dir/extracted/gws" ]] || die "release archive did not contain the expected gws binary"
chmod 0755 "$download_dir/extracted/gws"
install -m 0755 "$download_dir/extracted/gws" "$install_dir/gws"

printf 'installed gws %s (%s) to %s/gws\n' "$GWS_RELEASE" "$GWS_RELEASE_COMMIT" "$install_dir"
