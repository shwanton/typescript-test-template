import { MachineConfig } from "xstate";

interface Context {}
interface StateSchema {
  states: {
    inactive: {};
    active: {};
  };
}
interface Event {
  type: "TOGGLE";
}

const config: MachineConfig<Context, StateSchema, Event> = {
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
};

export { config };
