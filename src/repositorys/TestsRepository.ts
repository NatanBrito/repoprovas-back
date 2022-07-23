import { tests } from "@prisma/client";
import prisma from "../config/db.js";

export type dataTest = Omit<tests, "id">;
export async function createTest(data: dataTest) {
  return await prisma.tests.create({ data });
}
