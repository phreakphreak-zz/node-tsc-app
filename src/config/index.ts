import { Config } from "./Config";
import { development } from "./development";
import { production } from "./production";

const env: string = "production";

export const config:Config = env === "production" ? production : development;
