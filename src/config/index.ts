import { development } from "./development";
import { production } from "./production";

const env: string = "production";

export const config = env === "production" ? production : development;
