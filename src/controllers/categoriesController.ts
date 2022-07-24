import { Request, Response } from "express";
import * as categoriesService from "../services/categoriesService.js";
export async function getCategories(req: Request, res: Response) {
  //   const dataCategories = await categoriesService.getCategories();
  res.status(200).send("dataCategories");
}
