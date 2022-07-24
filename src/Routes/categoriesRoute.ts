import { Router } from "express";
import { getCategories } from "../controllers/categoriesController.js";
const categoriesRoutes = Router();

categoriesRoutes.use("/categories", getCategories);

export default categoriesRoutes;
