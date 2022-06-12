import "dotenv/config";
import "reflect-metadata";

import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3334;
app.listen(PORT, (): void =>
  console.log(`Server running here 👉 http://localhost:${PORT}`)
);
