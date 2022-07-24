import { tests } from "@prisma/client";
import prisma from "../config/db.js";

export type dataCreateTest = Omit<tests, "id">;
export async function createTest(data: dataCreateTest) {
  return await prisma.tests.create({ data });
}

export async function getByDisciplines() {
  return await prisma.terms.findMany({
    select: {
      id: true,
      number: true,
      disciplines: {
        select: {
          id: true,
          name: true,
          teacherDisciplines: {
            select: {
              discipline: { select: { name: true } },
              teacher: { select: { name: true } },
              tests: {
                select: {
                  id: true,
                  name: true,
                  pdfUrl: true,
                  category: {
                    select: { id: true, name: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
}
export async function getByTeacher() {
  return await prisma.teachersDisciplines.findMany({
    select: {
      id: true,
      teacher: { select: { name: true } },
      discipline: { select: { name: true } },
      tests: {
        select: {
          id: true,
          name: true,
          pdfUrl: true,
          category: { select: { id: true, name: true } },
        },
      },
    },
  });
}
