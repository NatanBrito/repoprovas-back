import { tests } from "@prisma/client";
import Joi from "joi";

export type CreateTest = Omit<tests, "id">;
export const test = Joi.object<CreateTest>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  teacherDisciplineId: Joi.number().required(),
});
