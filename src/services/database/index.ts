import { Mongoose, ConnectOptions } from "mongoose";
import {config} from '../../config';

const URI: string =config.mongodb_uri;
const connectOptions: ConnectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const mongoose: Mongoose = new Mongoose();

mongoose.connect(URI, connectOptions).catch((error) => {
  console.log("catch");
  console.error(error);
});

mongoose.connection.on("connected", function () {
  console.log(`Database connection open to ${URI}`);
});

mongoose.connection.on("error", function (error: Error) {
  console.log(`Database connection error: ${error}`);
});

mongoose.connection.on("disconnected", function () {
  console.log("Database connection disconnected");
});


export default mongoose;
