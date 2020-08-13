import { interpret } from "xstate";
import type { Typestate } from "xstate";

import { toggleMachine } from "./machine";
import type { XEvent, XContext, XStateSchema } from "./config";

const service = interpret<XContext, XStateSchema, XEvent, Typestate<XContext>>(
  toggleMachine
).start();

export { service };
