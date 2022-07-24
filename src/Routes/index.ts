import { Router } from "express";
import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";
import authRoute from "./AuthRoute.js";
import testsRoute from "./TestsRoute.js";
import categoriesRoutes from "./categoriesRoute.js";
const routes = Router();

routes.use(authRoute);
routes.use(testsRoute);
routes.use(categoriesRoutes);
routes.use(handleErrorMiddleware);
export default routes;
