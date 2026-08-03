/**
 * Preload for `node --experimental-strip-types` consumers that import repo
 * TypeScript modules whose sources use `.js` specifiers (OpenClaw convention).
 *
 * Usage:
 *   node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
 *     --experimental-strip-types --test linkbots/lisa/ops/<file>.test.ts
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(
  `data:text/javascript,${encodeURIComponent(`
export async function resolve(specifier, context, nextResolve) {
  const parent = context.parentURL ?? "";
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
`)}`,
  pathToFileURL("./"),
);
