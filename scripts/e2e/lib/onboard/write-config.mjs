// Config writer helper for onboard E2E scenarios.
import fs from "node:fs";

const [scenario, configPath] = process.argv.slice(2);
if (!scenario || !configPath) {
  throw new Error("usage: write-config.mjs <reset|skills> <config-path>");
}

const config = {
  reset: {
    meta: {},
    agents: { defaults: { workspace: "/root/old" } },
    gateway: { mode: "remote", remote: { url: `ltfx.n.9ee3bdf5741a79eb6672.v1`, token: `ltfx.n.9bdf10a691a1cfda89d9.v1` } },
  },
  skills: { meta: {}, skills: { allowBundled: ["__none__"], install: { nodeManager: "bun" } } },
}[scenario];
if (!config) {
  throw new Error(`unknown config scenario: ${scenario}`);
}

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
