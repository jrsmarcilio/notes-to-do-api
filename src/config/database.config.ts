import "dotenv/config";
import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const mysqlDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  //entities: [__dirname + "/../../dist/entities/*.js"],
  //migrations: [__dirname + "/../../dist/database/migrations/*.js"],
  entities: [__dirname + "/../entities/index.ts"],
  migrations: [__dirname + "/../database/migrations/*.js"],
  logging: true,
  synchronize: true,
});

mysqlDataSource
  .initialize()
  .then(() => console.log("Connected with Database"))
  .catch((error) => console.log(`Error to connection database ===`, error));

export = mysqlDataSource;
