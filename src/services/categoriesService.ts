import * as categoriesRepo from "../repositorys/categoriesRepository.js";

export async function getCategories() {
  return await categoriesRepo.getByCategories();
}
