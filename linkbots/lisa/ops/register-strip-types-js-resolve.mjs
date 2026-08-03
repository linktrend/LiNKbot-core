/**
 * Preload for node --experimental-strip-types consumers that import repo
 * TypeScript modules whose sources use .js specifiers (OpenClaw convention)
 * and workspace @openclaw packages (resolved to packages/pkg/src like Vitest).
 *
 * Usage:
 *   node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
 *     --experimental-strip-types --test linkbots/lisa/ops/<file>.test.ts
 *
 * Store-consuming suites that load src/state (parameter properties) need tsx:
 *   node --import tsx --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
 *     --test linkbots/lisa/ops/stage-durable-store.test.ts
 */
import { register } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../../..");

const loaderSource = `
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const repoRoot = ${JSON.stringify(repoRoot)};

function tryOpenClawWorkspace(specifier) {
  if (typeof specifier !== "string" || !specifier.startsWith("@openclaw/")) {
    return null;
  }
  const rest = specifier.slice("@openclaw/".length);
  const slash = rest.indexOf("/");
  const pkg = slash === -1 ? rest : rest.slice(0, slash);
  const sub = slash === -1 ? "" : rest.slice(slash + 1);
  const srcRoot = path.join(repoRoot, "packages", pkg, "src");
  if (!existsSync(srcRoot)) {
    return null;
  }
  const candidates = [];
  if (!sub) {
    candidates.push(path.join(srcRoot, "index.ts"));
  } else {
    candidates.push(path.join(srcRoot, sub + ".ts"));
    candidates.push(path.join(srcRoot, sub, "index.ts"));
  }
  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return pathToFileURL(candidate).href;
    }
  }
  return null;
}

export async function resolve(specifier, context, nextResolve) {
  const openclawTarget = tryOpenClawWorkspace(specifier);
  if (openclawTarget) {
    return { url: openclawTarget, shortCircuit: true };
  }

  const parent = context.parentURL ?? "";
  // Only rewrite OpenClaw-style .js -> .ts under src trees (not packages/*/dist).
  const underRepoSrc =
    parent.includes("/packages/gateway-protocol/src/") ||
    parent.includes("/src/");
  if (
    typeof specifier === "string" &&
    specifier.endsWith(".js") &&
    !specifier.startsWith("node:") &&
    underRepoSrc
  ) {
    try {
      return await nextResolve(specifier.slice(0, -3) + ".ts", context);
    } catch {
      return nextResolve(specifier, context);
    }
  }
  return nextResolve(specifier, context);
}
`;

register(`data:text/javascript,${encodeURIComponent(loaderSource)}`, pathToFileURL("./"));
