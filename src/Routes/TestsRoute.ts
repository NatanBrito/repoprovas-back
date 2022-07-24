import { Router } from "express";

import * as testsController from "../controllers/TestsController.js";
import schemaValidateMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { test } from "../schemas/testSchema.js";
const testsRoute = Router();

testsRoute.post(
  "/tests",
  verifyToken,
  schemaValidateMiddleware(test),
  testsController.CreateTests
);
testsRoute.get(
  "/testsByDisciplines",
  verifyToken,
  testsController.getByDisciplines
);
testsRoute.get("/testsByTeacher", verifyToken, testsController.getByTeacher);
export default testsRoute;
