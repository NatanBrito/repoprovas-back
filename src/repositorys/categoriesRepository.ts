import prisma from "../config/db.js";

export async function getByCategories() {
  return await prisma.categories.findMany({});
}
