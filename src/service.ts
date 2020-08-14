import type { Typestate } from "xstate";
import { interpret } from "xstate";

import type { XContext, XEvent, XStateSchema } from "./config";
import { toggleMachine } from "./machine";

const service = interpret<XContext, XStateSchema, XEvent, Typestate<XContext>>(
  toggleMachine
);

export { service };
