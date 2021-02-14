import dotenv from "dotenv";
dotenv.config();
import { database } from "./services/database";
import app from "./app";
import { Connection } from "mongoose";

const main = async (): Promise<void> => {
  try {
    await database.openConnection();
    await app.listen(app.get("port"));
    console.log(`server running on  ${app.get("host")}:${app.get("port")}`);
  } catch (error) {
    console.error(`connection error: ${error}`);
    process.exit(0);
  }
};

//* Main Process
main();

//* Event Handler Database
const connection: Connection = database.getConnection;

connection.on("connected", function () {
  console.log(`Database is connected to: ${database.getUri}`);
});

connection.on("error", function (error: Error) {
  console.error(`Database connection error: ${error}`);
});

connection.on("disconnected", function () {
  console.warn("Database connection disconnected");
});
