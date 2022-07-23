import { Request, Response } from "express";

import * as testsService from "../services/TestsService.js";

export async function CreateTests(req: Request, res: Response) {
  const create = await testsService.createTest(req.body);
  res.status(200).send("succesfully created");
}
export async function getByDisciplines(req: Request, res: Response) {
  res.status(200).send("succesfully created");
}
