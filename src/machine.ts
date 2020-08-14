import { Machine } from "xstate";

import type { XContext, XEvent } from "./config";
import { config } from "./config";

const toggleMachine = Machine<XContext, XEvent>(config);

export { toggleMachine };
