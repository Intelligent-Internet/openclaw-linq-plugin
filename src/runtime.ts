import type { PluginRuntime } from "openclaw/plugin-sdk/src/plugins/runtime/types.js";

let runtime: PluginRuntime | null = null;

export function setLinqRuntime(next: PluginRuntime) {
  runtime = next;
}

export function getLinqRuntime(): PluginRuntime {
  if (!runtime) {
    throw new Error("Linq runtime not initialized");
  }
  return runtime;
}
