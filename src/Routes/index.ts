import { Router } from "express";
import handleErrorMiddleware from "../middlewares/handlerErrorMiddleware.js";
import authRoute from "./AuthRoute.js";
const routes = Router();

routes.use(authRoute);
routes.use(handleErrorMiddleware);
export default routes;
