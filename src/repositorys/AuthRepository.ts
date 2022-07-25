import { user } from "@prisma/client";

import prisma from "../config/db.js";

export type dataUser = Omit<user, "id">;

export async function InsertUser(data: dataUser) {
  await prisma.user.create({ data });
}
export async function findByEmail(email: string) {
  const find = await prisma.user.findFirst({ where: { email } });
  return find;
}
