import { ChatUtils } from "./ChatUtils";
import request from "requestV2"

let meowVersion = "Unknown";

if (FileLib.exists("/MeowClient", "metadata.json")) {
    let m = FileLib.read("/MeowClient", "metadata.json");
    m = JSON.parse(m);
    if (m) {
        meowVersion = m.version;
    }
}

console.log(`MeowClient: ${meowVersion}`);

export class APIUtils {
    static meowVersion = meowVersion;

    static UUID = Java.type("java.util.UUID");

    static reportError(err) {
        console.log(`error reporting to meowclient is blocked: ${err}`);
    }

    static fetchProfit() {
        return request({
            url: "https://api.meowclient.cloud/v1/meow/rng",
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        }).then(Response => {
            return JSON.parse(Response);
        }).catch(err => {
            APIUtils.reportError(err);
        });
    }
}
