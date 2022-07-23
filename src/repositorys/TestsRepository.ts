import { tests } from "@prisma/client";
import prisma from "../config/db.js";

export type dataCreateTest = Omit<tests, "id">;
export async function createTest(data: dataCreateTest) {
  return await prisma.tests.create({ data });
}
export async function getByDisciplines() {
  // return await prisma.tests.();
  //   TODO fazer a query pra buscar no banco ordenado por disciplinas
}
