import { createMachine, interpret, Machine } from "xstate";

const config = {
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
};

const toggleMachine = Machine(config);

export { toggleMachine };

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
// export function toggleMachine() {
//   return createMachine(machine);
// }

// Machine instance with internal state
// const toggleService = interpret(toggleMachine)
//   .onTransition((state) => console.log(state.value))
//   .start();
// => 'inactive'

// toggleService.send("TOGGLE");
// => 'active'

// toggleService.send("TOGGLE");
// => 'inactive'
