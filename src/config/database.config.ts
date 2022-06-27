import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Notes } from "../entities";
import { createNotes1654991747296 as createNotes } from "../database/migrations/1654991747296-createNotes";
dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const mysqlDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [Notes],
  migrations: [createNotes],
  // entities: [__dirname + "/../entities/index.ts"],
  // migrations: [__dirname + "/../database/migrations/*.js"],
  logging: true,
  synchronize: true,
});

mysqlDataSource
  .initialize()
  .then(() => console.log("Connected with Database"))
  .catch((error) => console.log(`Error to connection database ===`, error));

export default mysqlDataSource;
