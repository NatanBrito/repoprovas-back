import { Request, Response, Router } from "express";

const authRoute = Router();

authRoute.post("/", (req: Request, res: Response) => {
  res.sendStatus(201);
});

export default authRoute;
