import { Request, Response } from "express";

import * as AuthService from "../services/AuthService.js";
import * as utils from "../utils/encryptDecrypt";
export async function Signin(req: Request, res: Response) {
  res.sendStatus(201);
}
export async function Signup(req: Request, res: Response) {
  const { email, password } = req.body;
  await AuthService.verifyEmail(email);
  const cryptPass = utils.EncryptPass(password);
  res.status(201).send(cryptPass);
}
