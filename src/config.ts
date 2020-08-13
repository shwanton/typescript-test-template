import { MachineConfig } from "xstate";
import type { StateSchema, EventObject } from "xstate";

export type XContext = {};
export interface XStateSchema extends StateSchema {
  states: {
    inactive: {};
    active: {};
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
