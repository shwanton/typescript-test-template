import { config, XContext, XEvent } from "./config";
import { Machine } from "xstate";

const toggleMachine = Machine<XContext, XEvent>(config);

export { toggleMachine };
