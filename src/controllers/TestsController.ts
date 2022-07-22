import { Request, Response } from "express";

export async function tests(req: Request, res: Response) {
  res.sendStatus(200);
}
