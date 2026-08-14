// Serialized allowlist entries stored with enough command context to explain
// why an approval can be reused later.
export type ExecAllowlistEntry = {
  id?: string;
  pattern: string;
  source?: "allow-always";
  commandText?: string;
  argPattern?: string;
  lastUsedAt?: number;
  lastUsedCommand?: string;
  lastResolvedPath?: string;
};

// Serialized denylist (STOP-list) entries. Patterns are globs (`*`, `?`)
// matched against analyzed command segments; any match forces an explicit
// approval even when policy would otherwise auto-allow the command.
export type ExecDenylistEntry = {
  id?: string;
  pattern: string;
  reason?: string;
};

// A profile-owned constrained host-adapter binding. The executable and static
// argv prefix are policy facts; generic routing only verifies and enforces them.
export type ExecHostAdapterBinding = {
  id: string;
  target: "gateway";
  executable: string;
  argvPrefix: string[];
  environment: Record<string, string>;
};
