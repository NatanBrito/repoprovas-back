import { Router } from "express";

import { tests } from "../controllers/TestsController.js";
import schemaValidateMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { test } from "../schemas/testSchema.js";
const testsRoute = Router();

testsRoute.post("/tests", verifyToken, tests);

export default testsRoute;
