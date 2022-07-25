import { NextFunction, Request, Response } from "express";

import * as utils from "../utils/encryptDecrypt.js";

interface tokenData {
  id: number;
  email: string;
}
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("invalidate session !!");
  const token = authorization.replace("Bearer", "").trim();
  const verifyAndData = utils.decryptToken(token);
  if (!verifyAndData) {
    res.status(401).send("invalid token");
  }
  res.locals.userData = verifyAndData;
  next();
}
