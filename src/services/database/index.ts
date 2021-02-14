import mongoose, { Mongoose, ConnectOptions, Connection } from "mongoose";
import { config } from "../../config";

const connectOptions: ConnectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
class Database {
  connection: Connection;
  constructor(
    private mongoose: Mongoose,
    private mongodb_uri: string,
    private connectOptions: ConnectOptions
  ) {
    this.mongoose = mongoose;
    this.connectOptions = connectOptions;
    this.mongodb_uri = mongodb_uri;
    this.connection = mongoose.createConnection(
      this.mongodb_uri,
      this.connectOptions
    );
  }

  openConnection(): Promise<void | Error> {
    return new Promise(async (resolve, reject) => {
      try {
        await mongoose.connect(this.mongodb_uri, this.connectOptions);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public get getUri(): string {
    return this.mongodb_uri;
  }

  public get getConnection(): Connection {
    return this.connection;
  }
}

export const database = new Database(
  mongoose,
  config.mongodb_uri,
  connectOptions
);
