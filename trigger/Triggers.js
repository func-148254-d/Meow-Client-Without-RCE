import { ModuleManager } from "../module/ModuleManager";
import { CommandManager } from "../command/CommandManager";
import { SkyblockUtils } from "../utils/SkyblockUtils";
import { Scheduler } from "../utils/Scheduler";
import { TickShift } from "../utils/TickShift";
import request from "requestV2";
import { APIUtils } from "../utils/APIUtils";

CommandManager.commandTrigger.register();
CommandManager.inputTrigger.register();
ModuleManager.keyBindTrigger.register();
SkyblockUtils.skyblockDetectionTrigger.register();
Scheduler.register();
TickShift.register();

let isLimbo = false;

register("chat", (message, event) => {
    isLimbo = true;
    setTimeout(() => {
        isLimbo = false;
    }, 7000);
}).setCriteria("An exception occurred in your connection, so you have been routed to limbo!");
