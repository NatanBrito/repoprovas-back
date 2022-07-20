import express, { json } from "express";
import "express-async-errors";

import dotenv from "dotenv";
import routes from "./Routes/index.js";
// import { cors } from "cors";

dotenv.config();
const app = express();
// app.use(cors());
app.use(json());
app.use(routes);

export default app;
