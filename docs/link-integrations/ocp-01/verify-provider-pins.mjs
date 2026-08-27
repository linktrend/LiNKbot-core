import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(import.meta.dirname, "../../..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "docs/link-integrations/ocp-01/provider-pins.json"), "utf8"),
);
// Provider identity constants are deliberately kept in small pin modules for
// extension-boundary reuse. Read those modules alongside each public adapter;
// otherwise a valid consumer is reported stale merely because its wrapper
// re-exports the exact identity instead of duplicating literal pins.
const checks = new Map([
  ["platform", ["extensions/linkplatform/src/claims.ts"]],
  ["brain", ["extensions/linkbrain/src/v2.ts", "extensions/linkbrain/src/v2-pins.ts"]],
  ["skills", ["extensions/linkskills/src/exact-release.ts"]],
  [
    "libraries",
    ["extensions/linklibraries/src/revision2.ts", "extensions/linklibraries/src/revision2-pins.ts"],
  ],
  [
    "autowork",
    ["extensions/linkautowork/src/contract.ts", "extensions/linkautowork/src/contract-pins.ts"],
  ],
]);
const gitEnvironment = {
  ...process.env,
  GIT_NO_REPLACE_OBJECTS: "1",
  GIT_REPLACE_REF_BASE: "refs/replace-disabled",
};

export function gitOutput(providerRoot, args, options = {}) {
  return execFileSync("git", ["--no-replace-objects", "-C", providerRoot, ...args], {
    ...options,
    env: gitEnvironment,
  });
}

export function verifyProviderPins(selectedProviders = Object.keys(providerRoots)) {
  const errors = [];
  const names = selectedProviders.length ? [...new Set(selectedProviders)] : [...checks.keys()];
  for (const name of names) {
    const relatives = checks.get(name);
    if (!relatives || !manifest.providers[name]) {
      errors.push(`${name}: unknown provider pin scope`);
      continue;
    }
    const provider = manifest.providers[name];
    const sources = [];
    for (const relative of relatives) {
      const file = path.join(root, relative);
      if (!fs.existsSync(file)) {
        errors.push(`${name}: missing ${relative}`);
        continue;
      }
      sources.push(fs.readFileSync(file, "utf8"));
    }
    if (sources.length !== relatives.length) continue;
    const source = sources.join("\n");
    if (!source.includes(provider.commit)) errors.push(`${name}: final commit pin missing`);
    if (!source.includes(provider.tree)) errors.push(`${name}: final tree pin missing`);
    for (const version of provider.contractVersions)
      if (!source.includes(version)) errors.push(`${name}: contract ${version} missing`);
    if (provider.mcpProtocol && !source.includes(provider.mcpProtocol))
      errors.push(`${name}: MCP ${provider.mcpProtocol} missing`);
    for (const digest of Object.values(provider.artifacts))
      if (!/^sha256:[0-9a-f]{64}$/.test(digest)) errors.push(`${name}: malformed artifact digest`);
    const providerRoot = providerRoots[name];
    if (!providerRoot) {
      errors.push(
        `${name}: immutable provider root is required for commit/tree/digest verification`,
      );
    } else {
      const actualTree = gitOutput(providerRoot, ["rev-parse", `${provider.commit}^{tree}`], {
        encoding: "utf8",
      }).trim();
      if (actualTree !== provider.tree)
        errors.push(`${name}: commit resolves to tree ${actualTree}, expected ${provider.tree}`);
      const artifactTexts = [];
      for (const [artifact, expectedDigest] of Object.entries(provider.artifacts)) {
        const bytes = gitOutput(providerRoot, ["show", `${provider.commit}:${artifact}`]);
        artifactTexts.push(bytes.toString("utf8"));
        const actualDigest = `sha256:${crypto.createHash("sha256").update(bytes).digest("hex")}`;
        if (actualDigest !== expectedDigest) errors.push(`${name}: ${artifact} digest drifted`);
      }
      for (const schemaVersion of provider.schemaVersions) {
        if (
          !source.includes(schemaVersion) &&
          !artifactTexts.some((text) => text.includes(schemaVersion))
        )
          errors.push(`${name}: schema ${schemaVersion} missing from pinned adapter/artifacts`);
      }
    }
  }
  if (errors.length) throw new Error(`provider pin verification failed: ${errors.join("; ")}`);
  return { ok: true, providers: names.length };
}

const providerRoots = Object.fromEntries(
  process.argv
    .slice(2)
    .filter((arg) => arg.startsWith("--provider-root="))
    .map((arg) => {
      const value = arg.slice("--provider-root=".length);
      const separator = value.indexOf("=");
      return [value.slice(0, separator), value.slice(separator + 1)];
    }),
);

export function isDirectExecution(moduleUrl, argv1) {
  return Boolean(argv1) && path.resolve(fileURLToPath(moduleUrl)) === path.resolve(argv1);
}

if (isDirectExecution(import.meta.url, process.argv[1])) {
  const result = verifyProviderPins();
  process.stdout.write(`PASS provider pins: ${result.providers}\n`);
}
