import { Machine } from "xstate";

import { config } from "./config";
import type { XContext, XEvent } from "./config";

const toggleMachine = Machine<XContext, XEvent>(config);

export { toggleMachine };
