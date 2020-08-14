import type { EventObject, StateSchema } from "xstate";
import { MachineConfig } from "xstate";

export type XContext = Record<string, unknown>;
export interface XStateSchema extends StateSchema {
  states: {
    inactive: Record<string, unknown>;
    active: Record<string, unknown>;
  };
}
export interface XEvent extends EventObject {
  type: "TOGGLE";
}

const config: MachineConfig<XContext, XStateSchema, XEvent> = {
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
};

export { config };
