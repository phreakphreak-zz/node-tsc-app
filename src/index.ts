import dotenv from "dotenv";
dotenv.config();
require("./services/database");
import app from "./app";

app.listen(app.get("port"), () => {
  console.log(`server running on  http://localhost:${app.get("port")}`);
});
