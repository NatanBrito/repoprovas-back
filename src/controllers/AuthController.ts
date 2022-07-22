import { Request, Response } from "express";

import * as AuthService from "../services/AuthService.js";
import * as utils from "../utils/encryptDecrypt.js";
export async function Signin(req: Request, res: Response) {
  const { email, password } = req.body;
  const findData = await AuthService.findUser(email);
  await AuthService.verifyPassword(password, findData.password);
  res.status(200).send(utils.createToken({ email, id: findData.id }));
}
export async function Signup(req: Request, res: Response) {
  const { email, password } = req.body;
  await AuthService.verifyEmail(email);
  const cryptPass = AuthService.encryptPassword(password);
  await AuthService.verifyEmail(email);
  const dataUser = {
    email,
    password: cryptPass,
  };
  AuthService.createUser(dataUser);
  res.status(201).send("sucessfully created");
}
