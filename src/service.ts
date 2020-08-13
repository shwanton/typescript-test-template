import { interpret } from "xstate";
import { toggleMachine } from "./machine";

const service = interpret(toggleMachine).start();

export { service };
