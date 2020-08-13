import { interpret, Typestate } from "xstate";
import { toggleMachine } from "./machine";
import { XEvent, XContext, XStateSchema } from "./config";

const service = interpret<XContext, XStateSchema, XEvent, Typestate<XContext>>(
  toggleMachine
).start();

export { service };
