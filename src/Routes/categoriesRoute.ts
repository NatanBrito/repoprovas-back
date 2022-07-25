import { Router } from "express";

import { getCategories } from "../controllers/categoriesController.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const categoriesRoutes = Router();
categoriesRoutes.use("/categories", verifyToken, getCategories);
export default categoriesRoutes;
