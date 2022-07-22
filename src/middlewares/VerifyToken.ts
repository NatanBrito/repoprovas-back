import { NextFunction, Request, Response } from "express";

import * as utils from "../utils/encryptDecrypt.js";

interface tokenData {
  id: number;
  email: string;
}
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  console.log({ authorization });
  if (!authorization) return res.status(401).send("invalidate session !!");
  const token = authorization.replace("Bearer", "").trim();
  console.log({ token });
  const verifyAndData = utils.decryptToken(token);
  console.log(verifyAndData);
  // // utils.decryptToken(token);
  // res.locals.userData = verifyAndData;
  next();
}
