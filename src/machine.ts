import { config } from "./config";
import { Machine } from "xstate";

const toggleMachine = Machine(config);

export { toggleMachine };
