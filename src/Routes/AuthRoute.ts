import { Router } from "express";

import { Signin, Signup } from "../controllers/AuthController.js";
import schemaValidateMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { SignIn, SignUp } from "../schemas/authSchemas.js";

const authRoute = Router();
authRoute.post("/signin", schemaValidateMiddleware(SignIn), Signin);
authRoute.post("/signup", schemaValidateMiddleware(SignUp), Signup);

export default authRoute;
