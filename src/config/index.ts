import { Config } from "./Config";
import { development } from "./development";
import { production } from "./production";

export const config: Config =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? development
    : production;
